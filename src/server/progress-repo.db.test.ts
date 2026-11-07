import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createTestDatabase } from "../../test/db";
import { emptyProgress, recordAnswer } from "@/learning/progress";
import { ensureIndexes } from "./indexes";
import { loadProgress, saveProgress } from "./progress-repo";

let test: Awaited<ReturnType<typeof createTestDatabase>>;
beforeAll(async () => {
  test = await createTestDatabase();
  await ensureIndexes(test.db);
});
afterAll(() => test.drop());

describe("progress repository", () => {
  it("has nothing for a learner who never saved", async () => {
    expect(await loadProgress(test.db, "nobody")).toBeNull();
  });

  it("saves, replaces and loads progress per learner", async () => {
    const first = recordAnswer(emptyProgress("2026-11-01T10:00:00.000Z"), "d.x", true, "2026-11-01T10:00:00.000Z");
    await saveProgress(test.db, "u1", first);
    await saveProgress(test.db, "u2", emptyProgress("2026-11-01T10:00:00.000Z"));
    expect(await loadProgress(test.db, "u1")).toEqual(first);

    const second = recordAnswer(first, "d.y", false, "2026-11-02T10:00:00.000Z");
    await saveProgress(test.db, "u1", second);
    expect(await loadProgress(test.db, "u1")).toEqual(second);
    expect(await loadProgress(test.db, "u2")).toEqual(emptyProgress("2026-11-01T10:00:00.000Z"));
    expect(await test.db.collection("progress").countDocuments({ userId: "u1" })).toBe(1);
  });
});
