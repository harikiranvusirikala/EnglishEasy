import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createTestDatabase } from "../../test/db";
import { ensureIndexes } from "./indexes";
import { allSubscriptions, deleteSubscription, markSent, saveSubscription } from "./reminders-repo";
import type { ReminderInput } from "./reminders-schema";

let test: Awaited<ReturnType<typeof createTestDatabase>>;
beforeAll(async () => {
  test = await createTestDatabase();
  await ensureIndexes(test.db);
});
afterAll(() => test.drop());

const input = (over: Partial<ReminderInput> = {}): ReminderInput => ({
  subscription: { endpoint: "https://push.example/1", keys: { p256dh: "k", auth: "a" } },
  hour: 8,
  timeZone: "Asia/Kolkata",
  learnIn: "te",
  ...over,
});

describe("reminders repository", () => {
  it("keeps one subscription per endpoint and updates its time", async () => {
    await saveSubscription(test.db, input());
    await saveSubscription(test.db, input({ hour: 18, learnIn: "en" }));
    const all = await allSubscriptions(test.db);
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject({ hour: 18, learnIn: "en", lastSentDay: null, lastPracticeDay: null });
  });

  it("keeps lastSentDay on update and moves lastPracticeDay only forward", async () => {
    await markSent(test.db, "https://push.example/1", "2026-11-07");
    await saveSubscription(test.db, input({ lastPracticeDay: "2026-11-07" }));
    await saveSubscription(test.db, input({ lastPracticeDay: "2026-11-05" }));
    const [sub] = await allSubscriptions(test.db);
    expect(sub).toMatchObject({ lastSentDay: "2026-11-07", lastPracticeDay: "2026-11-07" });
  });

  it("deletes a subscription", async () => {
    await deleteSubscription(test.db, "https://push.example/1");
    expect(await allSubscriptions(test.db)).toHaveLength(0);
  });
});
