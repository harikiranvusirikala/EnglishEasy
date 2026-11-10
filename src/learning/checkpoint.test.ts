import { describe, expect, it } from "vitest";
import { CHECKPOINT_WEEKS, checkpoints, course } from "@/content/course";
import { checkpointOfWeek, checkpointWeeks, practiceAgainFor } from "./checkpoint";
import { emptyProgress } from "./progress";

describe("checkpoints", () => {
  it("every released checkpoint week has its checkpoint (CURRICULUM §2b), numbered in order", () => {
    const released = course.stages.flatMap((s) => s.weeks).filter((w) => w.released).map((w) => w.n);
    for (const week of CHECKPOINT_WEEKS.filter((w) => released.includes(w))) expect(checkpointOfWeek(week)).not.toBeNull();
    checkpoints.forEach((c, i) => {
      expect(c.n).toBe(i + 1);
      expect(c.week).toBe(CHECKPOINT_WEEKS[i]);
      expect(c.items.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("covers the weeks since the previous checkpoint", () => {
    expect(checkpointWeeks(checkpoints[0])).toEqual({ from: 1, to: 12 });
    expect(checkpointWeeks({ ...checkpoints[0], n: 2, week: 26 })).toEqual({ from: 13, to: 26 });
  });

  it("lists the block's lessons that still hold a mistake, in course order, at most three", () => {
    const p = { ...emptyProgress(), mistakes: { "please-help-me.p1": "x", "my-address.p2": "x", "can-i-have-please.p1": "x" } };
    const list = practiceAgainFor(course, checkpoints[0], p);
    expect(list.map((a) => [a.dayId, a.week])).toEqual([["my-address", 3], ["please-help-me", 8]]); // Week 13 is outside the block
  });
});
