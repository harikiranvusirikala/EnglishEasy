import { describe, expect, it } from "vitest";
import { fixtureCourse } from "../../test/fixtures/course";
import { ENGLISH_CARD_ID, currentStageIndex, englishCardVisible, isFirstVisit, locateDay, practisedThisWeek, timeOfDay, weekStrip } from "./home";
import { completeDay, emptyProgress, recordAnswer, setPosition } from "./progress";
import { makePlayable } from "../../test/fixtures/course";

const NOW = "2026-11-07T10:00:00.000Z";

describe("timeOfDay", () => {
  it("splits the day at noon and 5 pm", () => {
    expect([0, 11, 12, 16, 17, 23].map(timeOfDay)).toEqual(["morning", "morning", "afternoon", "afternoon", "evening", "evening"]);
  });
});

describe("locateDay", () => {
  it("computes Day N from the week and position", () => {
    expect(locateDay(fixtureCourse, "a1")?.number).toBe(11 * 7 + 1);
    expect(locateDay(fixtureCourse, "a2")?.number).toBe(11 * 7 + 2);
    expect(locateDay(fixtureCourse, "b1")?.week.n).toBe(13);
  });
  it("finds track days (no stage) and returns null for unknown ids", () => {
    expect(locateDay(fixtureCourse, "g2")?.stage).toBeNull();
    expect(locateDay(fixtureCourse, "nope")).toBeNull();
  });
});

describe("weekStrip", () => {
  it("marks done, current and to-do days", () => {
    const week = fixtureCourse.stages[0].weeks[0];
    const p = completeDay(emptyProgress(), makePlayable("a1", { learn: 1 }), NOW);
    expect(weekStrip(week, p, "a2").map((d) => d.state)).toEqual(["done", "current"]);
  });
});

describe("practisedThisWeek", () => {
  it("counts the last 7 days including today, across a month end", () => {
    const days = ["2026-10-25", "2026-10-26", "2026-10-31", "2026-11-01", "2026-11-02", "2026-11-02"];
    expect(practisedThisWeek(days, "2026-11-01")).toBe(3); // Oct 26 to Nov 1
    expect(practisedThisWeek([], "2026-11-01")).toBe(0);
  });
});

describe("isFirstVisit / currentStageIndex", () => {
  it("is a first visit until something is answered or positioned", () => {
    expect(isFirstVisit(emptyProgress())).toBe(true);
    expect(isFirstVisit(recordAnswer(emptyProgress(), "a1.learn1", true, NOW))).toBe(false);
    expect(isFirstVisit(setPosition(emptyProgress(), "a1", "a1.learn1", NOW))).toBe(false);
  });
  it("opens the stage holding the recommended day", () => {
    expect(currentStageIndex(fixtureCourse, emptyProgress())).toBe(0);
  });
});

describe("englishCardVisible (owner, 2026-11-11)", () => {
  const stage = fixtureCourse.stages[0];
  const day = (id: string) => ({ id, kind: "lesson" as const, title: { en: id, te: `${id} తె` } });
  const course = {
    ...fixtureCourse,
    stages: [1, 2, 3].map((n) => ({ ...stage, n, firstWeek: n, lastWeek: n, weeks: [{ n, title: stage.weeks[0].title, released: true, days: [day(`s${n}`)] }] })),
  };
  const inStage3 = ["s1", "s2"].reduce((p, id) => completeDay(p, makePlayable(id, { learn: 1 }), NOW), emptyProgress());
  const te = { learnIn: "te", dismissed: [] };

  it("shows in Telugu mode once the next lesson is in Stage 3", () => {
    expect(englishCardVisible(course, inStage3, te)).toBe(true);
    expect(englishCardVisible(course, emptyProgress(), te)).toBe(false);
  });

  it("never shows in English mode, or after Try English or Not now", () => {
    expect(englishCardVisible(course, inStage3, { learnIn: "en", dismissed: [] })).toBe(false);
    expect(englishCardVisible(course, inStage3, { learnIn: "te", dismissed: [ENGLISH_CARD_ID] })).toBe(false);
  });
});
