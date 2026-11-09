import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createTestDatabase } from "../../test/db";
import { addFeedback, feedbackSummary, lessonLevels, markFeedbackDone, openFeedback } from "./feedback-repo";
import { ensureIndexes } from "./indexes";
import { addReport, countOpenReports, markReportsDone, openReports } from "./reports-repo";

let test: Awaited<ReturnType<typeof createTestDatabase>>;
beforeAll(async () => {
  test = await createTestDatabase();
  await ensureIndexes(test.db);
});
afterAll(() => test.drop());

const base = { kind: "app" as const, learnIn: "te" as const, appVersion: "dev" };

describe("feedback repository", () => {
  it("keeps messages until done, newest first, and sums faces and topics", async () => {
    await addFeedback(test.db, { ...base, rating: "love", topics: ["voice", "more-lessons"], at: "2026-11-01T10:00:00.000Z" });
    await addFeedback(test.db, { ...base, rating: "okay", topics: ["voice"], said: "చాలా బాగుంది", at: "2026-11-02T10:00:00.000Z" });
    const open = await openFeedback(test.db);
    expect(open.map((m) => m.rating)).toEqual(["okay", "love"]);
    expect(open[0]).toMatchObject({ said: "చాలా బాగుంది", at: new Date("2026-11-02T10:00:00.000Z") });

    await markFeedbackDone(test.db, open[0].id);
    await markFeedbackDone(test.db, "not-an-id");
    expect((await openFeedback(test.db)).map((m) => m.rating)).toEqual(["love"]);

    const summary = await feedbackSummary(test.db);
    expect(summary).toMatchObject({ waiting: 1, total: 2, ratings: { love: 1, good: 0, okay: 1, bad: 0 } });
    expect(summary.topics).toEqual([{ topic: "voice", count: 2 }, { topic: "more-lessons", count: 1 }]);
  });

  it("counts lesson ratings by day and level", async () => {
    const rate = (dayId: string, level: "easy" | "right" | "hard") => addFeedback(test.db, { kind: "lesson", dayId, level, learnIn: "en", at: "2026-11-03T10:00:00.000Z" });
    await rate("a-kilo-of", "hard");
    await rate("a-kilo-of", "hard");
    await rate("a-kilo-of", "right");
    await rate("fresh-and-ripe", "easy");
    const levels = await lessonLevels(test.db);
    expect(levels.get("a-kilo-of")).toEqual({ easy: 0, right: 1, hard: 2 });
    expect(levels.get("fresh-and-ripe")).toEqual({ easy: 1, right: 0, hard: 0 });
  });

  it("marks one activity's reports done, leaving the others open", async () => {
    const report = { dayId: "d", reason: "telugu" as const, learnIn: "te" as const, at: "2026-11-04T10:00:00.000Z" };
    await addReport(test.db, { ...report, activityId: "d.a" });
    await addReport(test.db, { ...report, activityId: "d.a", reason: "audio" });
    await addReport(test.db, { ...report, activityId: "d.b" });
    expect(await countOpenReports(test.db)).toBe(3);
    await markReportsDone(test.db, "d.a");
    expect((await openReports(test.db)).map((r) => r.activityId)).toEqual(["d.b"]);
  });
});
