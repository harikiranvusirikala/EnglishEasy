import { describe, expect, it } from "vitest";
import { fixtureCourse } from "../../test/fixtures/course";
import { currentStageIndex, isFirstVisit, locateDay, practisedThisWeek, timeOfDay, weekStrip } from "./home";
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
