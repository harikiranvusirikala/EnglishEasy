import { describe, expect, it } from "vitest";
import type { PlayableDay } from "@/content/types";
import { mergeProgress } from "./merge";
import { completeDay, emptyProgress, parseProgress } from "./progress";
import { addDays, dueKeys, enterReview, recordReview, REVIEW_SIZE, reviewDayIds, reviewItems, reviewKey } from "./review";

const day = (id: string): PlayableDay => ({
  id,
  kind: "lesson",
  title: { en: id, te: "పాఠం" },
  sections: [{ kind: "wrapup", activities: [] }],
  wrapup: {
    key: [
      { en: "I eat rice.", te: "నేను అన్నం తింటాను.", extra: ["am"] },
      { en: "I drink tea.", te: "నేను టీ తాగుతాను." },
      { en: "I went to the market yesterday.", te: "నేను నిన్న మార్కెట్‌కి వెళ్ళాను." },
    ],
    tryToday: { en: "Try.", te: "ప్రయత్నించండి." },
    words: [],
  },
});

const NOW = "2026-11-09T10:00:00.000Z";
const TODAY = "2026-11-09";

describe("daily review", () => {
  it("adds days across months and years", () => {
    expect(addDays("2026-11-30", 1)).toBe("2026-12-01");
    expect(addDays("2026-12-31", 60)).toBe("2027-03-01");
  });

  it("finishing a lesson puts its key sentences in box 0, due the next day", () => {
    const p = completeDay(emptyProgress(), day("a"), NOW);
    expect(Object.keys(p.review ?? {})).toEqual(["a.k0", "a.k1", "a.k2"]);
    expect(p.review?.["a.k0"]).toMatchObject({ box: 0, due: "2026-11-10" });
    expect(dueKeys(p, TODAY)).toEqual([]);
    expect(dueKeys(p, "2026-11-10")).toEqual(["a.k0", "a.k1", "a.k2"]);
  });

  it("a sentence already in the review keeps its place when the lesson is finished again", () => {
    const p = recordReview(enterReview(emptyProgress(), day("a"), NOW), "a.k0", true, "2026-11-10", NOW);
    expect(enterReview(p, day("a"), NOW).review?.["a.k0"]).toEqual(p.review?.["a.k0"]);
  });

  it("right moves up a box (1, 3, 7, 21, then 60 days); wrong goes back to box 0, due tomorrow", () => {
    let p = enterReview(emptyProgress(), day("a"), NOW);
    const due: string[] = [];
    for (let i = 0; i < 6; i++) {
      p = recordReview(p, "a.k0", true, TODAY, NOW);
      due.push(p.review!["a.k0"].due);
    }
    expect(due).toEqual(["2026-11-10", "2026-11-12", "2026-11-16", "2026-11-30", "2027-01-08", "2027-01-08"]);
    p = recordReview(p, "a.k0", false, TODAY, NOW);
    expect(p.review!["a.k0"]).toMatchObject({ box: 0, due: "2026-11-10" });
    expect(recordReview(p, "missing.k0", true, TODAY, NOW)).toBe(p);
  });

  it("takes at most five, the longest due first", () => {
    let p = emptyProgress();
    for (const id of ["a", "b"]) p = enterReview(p, day(id), NOW);
    p = { ...p, review: { ...p.review, "b.k2": { box: 1, due: "2026-11-01", at: NOW } } };
    const keys = dueKeys(p, "2026-11-20");
    expect(keys).toHaveLength(REVIEW_SIZE);
    expect(keys[0]).toBe("b.k2");
    expect(reviewDayIds(keys)).toEqual(["b", "a"]);
  });

  it("asks by box: meaning by ear, then build from Telugu, then build what you hear, then say it (in steps when long)", () => {
    const d = day("a");
    const p = { ...emptyProgress(), review: { "a.k0": { box: 0, due: TODAY, at: NOW }, "a.k1": { box: 1, due: TODAY, at: NOW }, "a.k2": { box: 3, due: TODAY, at: NOW } } };
    const items = reviewItems([d], ["a.k0", "a.k1", "a.k2", "gone.k0"], p).map((i) => i.activity);
    expect(items.map((a) => a.type)).toEqual(["listenChoose", "translate", "repeat"]);
    const listen = items[0];
    expect(listen.type === "listenChoose" && listen.options[listen.answer]).toBe("నేను అన్నం తింటాను.");
    expect(items[2]).toMatchObject({ id: reviewKey("a", 2), steps: ["market yesterday.", "to the market yesterday.", "I went to the market yesterday."] });
    const p2 = { ...p, review: { ...p.review, "a.k1": { box: 2, due: TODAY, at: NOW } } };
    expect(reviewItems([d], ["a.k1"], p2)[0].activity).toMatchObject({ type: "arrange", listen: true, answer: "I drink tea." });
  });

  it("is kept when saved, and merging keeps the record changed last", () => {
    const p = enterReview(emptyProgress(), day("a"), NOW);
    expect(parseProgress(JSON.stringify(p)).review).toEqual(p.review);
    const later = recordReview(p, "a.k0", true, TODAY, "2026-11-10T08:00:00.000Z");
    expect(mergeProgress(p, later).review?.["a.k0"]).toEqual(later.review?.["a.k0"]);
    expect(mergeProgress(later, p).review?.["a.k0"]).toEqual(later.review?.["a.k0"]);
    expect(mergeProgress(emptyProgress(), emptyProgress()).review).toBeUndefined();
  });
});
