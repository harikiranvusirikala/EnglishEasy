import { describe, expect, it } from "vitest";
import { makeLesson } from "../../test/fixtures/lessons";
import { activityCount, answerWords, buildReview, buildTiles, expandLesson } from "./generate";
import { day as sentenceBasics } from "./main/w01/sentence-basics";

describe("buildTiles", () => {
  it("returns the answer words plus the distractors", () => {
    const tiles = buildTiles("I eat rice.", ["am", "eating"], "x");
    expect([...tiles].sort()).toEqual(["I", "am", "eat", "eating", "rice."].sort());
  });

  it("keeps punctuation on its word", () => {
    expect(answerWords("Do you eat rice?")).toEqual(["Do", "you", "eat", "rice?"]);
  });

  it("is deterministic for a seed and never in answer order", () => {
    expect(buildTiles("I eat rice.", undefined, "same")).toEqual(buildTiles("I eat rice.", undefined, "same"));
    for (let i = 0; i < 40; i++) {
      expect(buildTiles("I eat rice.", undefined, `seed-${i}`)).not.toEqual(["I", "eat", "rice."]);
    }
  });

  it("copes with a single word", () => {
    expect(buildTiles("Yes.", undefined, "a")).toEqual(["Yes."]);
  });
});

describe("expandLesson", () => {
  const first = makeLesson("first-lesson");
  const second = makeLesson("second-lesson");

  it("is deterministic", () => {
    expect(expandLesson(second, [first])).toEqual(expandLesson(second, [first]));
  });

  it("has the sections in order and no warm-up on the first lesson", () => {
    expect(expandLesson(first, []).sections.map((s) => s.kind)).toEqual(["learn", "practice", "speak", "roleplay", "wrapup"]);
    expect(expandLesson(second, [first]).sections.map((s) => s.kind)).toEqual(["warmup", "learn", "practice", "speak", "roleplay", "wrapup"]);
  });

  it("gives every activity a full, unique id", () => {
    const day = expandLesson(second, [first]);
    const ids = day.sections.flatMap((s) => s.activities.map((a) => a.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every((id) => id.startsWith("second-lesson."))).toBe(true);
    expect(ids).toContain("second-lesson.p1");
    expect(ids).toContain("second-lesson.g-arrange-0");
    expect(ids).toContain("second-lesson.g-translate-1");
    expect(ids).toContain("second-lesson.g-translate-2");
    expect(ids).toContain("second-lesson.g-match-0");
    expect(ids).toContain("second-lesson.g-listen-3");
    expect(ids).toContain("second-lesson.g-repeat-1");
    expect(ids).toContain("second-lesson.g-warm-0");
    expect(ids).toContain("second-lesson.g-warm-1");
    expect(ids).toContain("second-lesson.r1");
  });

  it("feeds the fixed core sentences to the generated activities", () => {
    const day = expandLesson(second, [first]);
    const all = day.sections.flatMap((s) => s.activities);
    const byId = (id: string) => all.find((a) => a.id === `second-lesson.${id}`);
    expect(byId("g-arrange-0")).toMatchObject({ type: "arrange", answer: second.core[0].en });
    expect(byId("g-translate-1")).toMatchObject({ type: "translate", answer: second.core[1].en });
    expect(byId("g-translate-2")).toMatchObject({ type: "translate", answer: second.core[2].en });
    expect(byId("g-repeat-1")).toMatchObject({ type: "repeat", say: second.core[1].en });
    expect(byId("g-listen-3")).toMatchObject({ type: "listenChoose", say: second.core[3].en });
    expect(byId("g-match-0")).toMatchObject({ type: "match" });
  });

  it("puts the right Telugu meaning at the answer index of listen and warm-up questions", () => {
    const day = expandLesson(second, [first]);
    const all = day.sections.flatMap((s) => s.activities);
    const listen = all.find((a) => a.type === "listenChoose");
    expect(listen?.type === "listenChoose" && listen.options[listen.answer]).toBe(second.core[3].te);
    const warm = all.filter((a) => a.id.includes(".g-warm-"));
    expect(warm).toHaveLength(2);
    for (const w of warm) {
      expect(w.type === "choose" && new Set(w.options).size).toBe(3);
    }
  });

  it("orders practice: authored, match, arrange, translate ×2, find the mistake last", () => {
    const practice = expandLesson(first, []).sections.find((s) => s.kind === "practice")!.activities.map((a) => a.type);
    expect(practice).toEqual(["choose", "match", "arrange", "translate", "translate", "findMistake"]);
  });

  it("carries the key sentences and words to the wrap-up", () => {
    const day = expandLesson(first, []);
    expect(day.wrapup?.key).toEqual([first.core[0], first.core[1], first.core[2]]);
  });

  it("warms up from the previous lessons' key sentences", () => {
    const third = makeLesson("third-lesson");
    const day = expandLesson(third, [first, second]);
    const warm = day.sections[0].activities;
    expect(warm[0]).toMatchObject({ say: second.core[0].en });
    expect(warm[1]).toMatchObject({ say: first.core[0].en });
  });

  it("expands the real Day 1 to 14–19 activities", () => {
    const count = activityCount(expandLesson(sentenceBasics, []));
    expect(count).toBeGreaterThanOrEqual(14);
    expect(count).toBeLessThanOrEqual(19);
  });
});

describe("buildReview", () => {
  const reviewDay = { id: "w1-review", kind: "review" as const, title: { en: "Review", te: "పునశ్చరణ" } };
  const lessons = [makeLesson("one"), makeLesson("two"), makeLesson("three")];
  const convo = {
    id: "w2-conversation",
    kind: "conversation" as const,
    title: { en: "Talk", te: "మాట" },
    summary: { en: "s", te: "సార" },
    topics: [],
    dialogue: { id: "d1", type: "repeat" as const, say: "Hi.", te: "హాయ్" },
    roleplays: [{ id: "r1", type: "roleplay" as const, title: { en: "t", te: "శీ" }, scene: { en: "s", te: "సీ" }, partner: { en: "p", te: "పా" }, skills: [], turns: [] }],
    situations: [],
  };

  it("makes two items per lesson (one authored copy, one generated), with review ids", () => {
    const day = buildReview(reviewDay, lessons);
    const items = day.sections[0].activities;
    expect(items).toHaveLength(6);
    expect(items.map((a) => a.id).sort()).toEqual(["w1-review.g-0", "w1-review.g-1", "w1-review.g-2", "w1-review.g-3", "w1-review.g-4", "w1-review.g-5"]);
    expect(items.filter((a) => a.type === "arrange" || a.type === "translate")).toHaveLength(3);
    expect(day.sections[day.sections.length - 1].kind).toBe("wrapup");
  });

  it("is deterministic and never reuses a lesson's own activity ids", () => {
    expect(buildReview(reviewDay, lessons)).toEqual(buildReview(reviewDay, lessons));
    const ids = buildReview(reviewDay, lessons).sections.flatMap((s) => s.activities.map((a) => a.id));
    expect(ids.every((i) => i.startsWith("w1-review.g-"))).toBe(true);
  });

  it("replays the Conversation Day's role play, then the extras (role plays go in their own section)", () => {
    const extras = [
      { id: "t1", type: "repeat" as const, say: "Go.", te: "వెళ్ళు" },
      { ...convo.roleplays[0], id: "r1" },
    ];
    const day = buildReview({ ...reviewDay, extras }, lessons, convo);
    const practice = day.sections.find((s) => s.kind === "practice")!.activities;
    expect(practice.at(-1)?.id).toBe("w1-review.t1");
    const rp = day.sections.find((s) => s.kind === "roleplay")!.activities;
    expect(rp.map((a) => a.id)).toEqual(["w1-review.g-6", "w1-review.r1"]);
  });
});
