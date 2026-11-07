import { describe, expect, it } from "vitest";
import { fixtureCourse } from "../../test/fixtures/course";
import { weekEnd } from "./week-complete";

describe("weekEnd", () => {
  it("is null for a day that is not the last of its week, and for unknown days", () => {
    expect(weekEnd(fixtureCourse, "a1")).toBeNull();
    expect(weekEnd(fixtureCourse, "nope")).toBeNull();
  });

  it("finds the end of a week and the next released week", () => {
    const end = weekEnd(fixtureCourse, "a2");
    expect(end?.week.n).toBe(12);
    expect(end?.stageEnd).toBe(false);
    expect(end?.nextWeek?.n).toBe(13);
    expect(end?.days.map((d) => d.id)).toEqual(["a1", "a2"]);
  });

  it("has no next week when the following week is not released", () => {
    const end = weekEnd(fixtureCourse, "b1");
    expect(end?.week.n).toBe(13);
    expect(end?.nextWeek).toBeNull();
  });

  it("marks the last week of a stage as a stage end", () => {
    const stage = { ...fixtureCourse.stages[0], lastWeek: 13 };
    const end = weekEnd({ ...fixtureCourse, stages: [stage] }, "b1");
    expect(end?.stageEnd).toBe(true);
    expect(end?.stage?.n).toBe(3);
  });

  it("works for tracks (never a stage end)", () => {
    const end = weekEnd(fixtureCourse, "g2");
    expect(end?.stage).toBeNull();
    expect(end?.stageEnd).toBe(false);
    expect(end?.nextWeek).toBeNull();
  });
});
