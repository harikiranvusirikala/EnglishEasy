import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createTestDatabase } from "../../test/db";
import { ensureIndexes } from "./indexes";
import { addClientError, addReport, groupBy, latestClientErrors, latestReports } from "./reports-repo";

let test: Awaited<ReturnType<typeof createTestDatabase>>;
beforeAll(async () => {
  test = await createTestDatabase();
  await ensureIndexes(test.db);
});
afterAll(() => test.drop());

describe("reports repository", () => {
  it("stores reports and returns the newest first", async () => {
    await addReport(test.db, { activityId: "d.a", dayId: "d", reason: "telugu", learnIn: "te", at: "2026-11-01T10:00:00.000Z" });
    await addReport(test.db, { activityId: "d.b", dayId: "d", reason: "audio", learnIn: "en", at: "2026-11-02T10:00:00.000Z" });
    const reports = await latestReports(test.db);
    expect(reports.map((r) => r.activityId)).toEqual(["d.b", "d.a"]);
    expect(reports[0].at).toEqual(new Date("2026-11-02T10:00:00.000Z"));
    expect(reports[0]).not.toHaveProperty("_id");
  });

  it("stores client errors with the server's time, newest first, within the limit", async () => {
    const e = { message: "Boom", stack: "", path: "/learn", userAgent: "UA", appVersion: "dev" };
    await addClientError(test.db, e, new Date("2026-11-01T10:00:00.000Z"));
    await addClientError(test.db, { ...e, message: "Bang" }, new Date("2026-11-03T10:00:00.000Z"));
    expect((await latestClientErrors(test.db)).map((x) => x.message)).toEqual(["Bang", "Boom"]);
    expect(await latestClientErrors(test.db, 1)).toHaveLength(1);
  });
});

describe("groupBy", () => {
  it("keeps first-seen order", () => {
    expect(groupBy(["a1", "b1", "a2"], (s) => s[0])).toEqual([
      { key: "a", items: ["a1", "a2"] },
      { key: "b", items: ["b1"] },
    ]);
  });
});
