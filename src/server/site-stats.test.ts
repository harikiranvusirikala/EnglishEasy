import { describe, expect, it } from "vitest";
import { byHour, perWeek, summarizeLearners, weekStart } from "./site-stats";

const now = new Date("2026-11-09T12:00:00.000Z"); // a Monday
const daysAgo = (n: number) => new Date(now.getTime() - n * 86_400_000);

describe("site stats summaries", () => {
  it("starts weeks on Monday (UTC)", () => {
    expect(weekStart(new Date("2026-11-15T23:00:00.000Z")).toISOString().slice(0, 10)).toBe("2026-11-09"); // Sunday
    expect(weekStart(now).toISOString().slice(0, 10)).toBe("2026-11-09");
  });

  it("counts new learners in each of the last 12 weeks, current week last", () => {
    const weeks = perWeek([daysAgo(0), daysAgo(1), daysAgo(8), daysAgo(200)], now);
    expect(weeks).toHaveLength(12);
    expect(weeks.at(-1)).toEqual({ week: "2026-11-09", count: 1 });
    expect(weeks.at(-2)).toEqual({ week: "2026-11-02", count: 1 }); // yesterday, a Sunday
    expect(weeks.at(-3)).toEqual({ week: "2026-10-26", count: 1 }); // 8 days ago, also a Sunday
    expect(weeks.reduce((n, w) => n + w.count, 0)).toBe(3); // 200 days ago is outside
  });

  it("counts active learners and each day's finishers and average score", () => {
    const summary = summarizeLearners(
      [{ createdAt: daysAgo(3) }, { createdAt: daysAgo(40) }, { createdAt: daysAgo(2) }],
      [
        { updatedAt: daysAgo(0.5), completed: { "sentence-basics": { at: "", correct: 15, total: 19 }, "i-am-you-are": { at: "", correct: 10, total: 19 } } },
        { updatedAt: daysAgo(5), completed: { "sentence-basics": { at: "", correct: 19, total: 19 } } },
        { updatedAt: daysAgo(20), completed: {} },
      ],
      now,
    );
    expect(summary.total).toBe(3);
    expect(summary.active).toEqual({ day: 1, week: 2, month: 3 });
    expect(summary.days.get("sentence-basics")).toEqual({ finished: 2, score: 89 }); // 34 of 38
    expect(summary.days.get("i-am-you-are")).toEqual({ finished: 1, score: 53 });
    expect(summary.days.has("what-and-where")).toBe(false);
  });

  it("groups reminder subscribers by hour", () => {
    expect(byHour([20, 8, 20, 13])).toEqual([
      { hour: 8, count: 1 },
      { hour: 13, count: 1 },
      { hour: 20, count: 2 },
    ]);
  });
});
