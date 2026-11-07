import { describe, expect, it } from "vitest";
import { fixtureCourse, makePlayable, standardShape } from "../../test/fixtures/course";
import { completeDay, emptyProgress, markViewed, recordAnswer, setPosition, type Progress } from "./progress";
import { courseStats, dayStats, nextActivity, stageStats, weekStats } from "./stats";

const NOW = "2026-11-01T10:00:00.000Z";
const day = makePlayable("a1", standardShape);
const answer = (p: Progress, id: string, ok = true) => recordAnswer(p, id, ok, NOW);

describe("dayStats", () => {
  it("is not started for a new day", () => {
    expect(dayStats(day, emptyProgress())).toMatchObject({ done: 0, total: 5, percent: 0, complete: false, state: "not-started" });
  });
  it("counts right and wrong answers and viewed cards as done (VISION §9.2)", () => {
    let p = answer(emptyProgress(), "a1.learn1");
    p = markViewed(p, "a1.learn2", NOW);
    p = answer(p, "a1.practice1", false);
    const s = dayStats(day, p);
    expect(s).toMatchObject({ done: 3, total: 5, percent: 60, state: "in-progress", complete: false });
    expect(s.sections.map((x) => [x.kind, x.done, x.total, x.state])).toEqual([
      ["learn", 2, 2, "complete"],
      ["practice", 1, 2, "in-progress"],
      ["speak", 0, 1, "not-started"],
      ["wrapup", 0, 0, "not-started"],
    ]);
  });
  it("is in progress when only the resume position points here", () => {
    expect(dayStats(day, setPosition(emptyProgress(), "a1", "a1.learn1", NOW)).state).toBe("in-progress");
  });
  it("is complete when every activity is done", () => {
    let p = emptyProgress();
    for (const s of day.sections) for (const a of s.activities) p = answer(p, a.id);
    expect(dayStats(day, p)).toMatchObject({ complete: true, state: "complete", percent: 100 });
  });
  it("is complete without an optional section, but the percent still counts all activities", () => {
    const optionalDay = makePlayable("a1", standardShape, ["speak"]);
    let p = emptyProgress();
    for (const id of ["a1.learn1", "a1.learn2", "a1.practice1", "a1.practice2"]) p = answer(p, id);
    const s = dayStats(optionalDay, p);
    expect(s.complete).toBe(true);
    expect(s.percent).toBe(80);
    expect(s.sections.find((x) => x.kind === "speak")).toMatchObject({ optional: true, state: "not-started" });
  });
  it("a required section left undone keeps the day incomplete", () => {
    const optionalDay = makePlayable("a1", standardShape, ["speak"]);
    let p = emptyProgress();
    for (const id of ["a1.learn1", "a1.learn2", "a1.practice1", "a1.speak1"]) p = answer(p, id);
    expect(dayStats(optionalDay, p).complete).toBe(false);
  });
  it("a finished day stays complete after compaction", () => {
    let p = emptyProgress();
    for (const s of day.sections) for (const a of s.activities) p = answer(p, a.id);
    p = completeDay(p, day, NOW);
    expect(dayStats(day, p)).toMatchObject({ done: 5, total: 5, percent: 100, complete: true });
  });
  it("an empty day is never complete", () => {
    expect(dayStats(makePlayable("e", {}), emptyProgress()).complete).toBe(false);
  });
});

describe("week, stage and course stats", () => {
  const [week12, week13, week14] = fixtureCourse.stages[0].weeks;
  const complete = (p: Progress, id: string) => completeDay(p, makePlayable(id, standardShape), NOW);

  it("counts completed days over released days", () => {
    expect(weekStats(week12, emptyProgress())).toEqual({ done: 0, total: 2, percent: 0, state: "not-started" });
    const p = complete(emptyProgress(), "a1");
    expect(weekStats(week12, p)).toEqual({ done: 1, total: 2, percent: 50, state: "in-progress" });
    expect(weekStats(week12, complete(p, "a2"))).toMatchObject({ percent: 100, state: "complete" });
  });
  it("a day with answers makes its week in progress", () => {
    expect(weekStats(week12, answer(emptyProgress(), "a1.learn1")).state).toBe("in-progress");
  });
  it("an unreleased week has no days and is not started", () => {
    expect(weekStats(week14, emptyProgress())).toEqual({ done: 0, total: 0, percent: 0, state: "not-started" });
  });
  it("rolls up to the stage and the course", () => {
    let p = complete(complete(emptyProgress(), "a1"), "b1");
    expect(stageStats(fixtureCourse.stages[0], p)).toEqual({ done: 2, total: 3, percent: 67, state: "in-progress" });
    p = complete(p, "a2");
    expect(courseStats(fixtureCourse.stages, p)).toEqual({ done: 3, total: 3, percent: 100, state: "complete" });
    expect(weekStats(week13, p).state).toBe("complete");
  });
});

describe("nextActivity", () => {
  it("returns the first undone activity in play order", () => {
    let p = emptyProgress();
    expect(nextActivity(day, p)).toBe("a1.learn1");
    p = answer(answer(p, "a1.learn1"), "a1.practice1");
    expect(nextActivity(day, p)).toBe("a1.learn2");
  });
  it("returns null when everything is done or the day is complete", () => {
    let p = emptyProgress();
    for (const s of day.sections) for (const a of s.activities) p = answer(p, a.id);
    expect(nextActivity(day, p)).toBeNull();
    expect(nextActivity(day, completeDay(emptyProgress(), day, NOW))).toBeNull();
  });
});
