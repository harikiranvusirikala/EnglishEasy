import { describe, expect, it, vi } from "vitest";
import type { PushSubscriptionDoc } from "./reminders-repo";
import { reminderPayload, sendDueReminders, type ReminderStore } from "./reminders-send";

const sub = (over: Partial<PushSubscriptionDoc> = {}): PushSubscriptionDoc => ({
  endpoint: "https://push.example/1",
  keys: { p256dh: "k", auth: "a" },
  hour: 8,
  timeZone: "Asia/Kolkata",
  learnIn: "te",
  lastPracticeDay: null,
  lastSentDay: null,
  createdAt: new Date(0),
  ...over,
});
const now = new Date("2026-11-07T02:40:00Z"); // 08:10 in India
const store = (subs: PushSubscriptionDoc[]): ReminderStore & { markSent: ReturnType<typeof vi.fn>; remove: ReturnType<typeof vi.fn> } => ({
  all: async () => subs,
  markSent: vi.fn(async () => {}),
  remove: vi.fn(async () => {}),
});

describe("reminderPayload", () => {
  it("is bilingual in Telugu mode and English only in English mode, and opens /learn", () => {
    expect(reminderPayload("te").body).toBe("Today's English is ready 🌱 · ఈరోజు ఇంగ్లీష్ పాఠం సిద్ధం");
    expect(reminderPayload("en").body).toBe("Today's English is ready 🌱");
    expect(reminderPayload("en").url).toBe("/learn");
  });
});

describe("sendDueReminders", () => {
  it("sends to due subscriptions and records the learner's local day", async () => {
    const s = store([sub()]);
    const send = vi.fn(async () => {});
    expect(await sendDueReminders(s, send, now)).toEqual({ checked: 1, sent: 1, removed: 0, failed: 0 });
    expect(s.markSent).toHaveBeenCalledWith("https://push.example/1", "2026-11-07");
  });
  it("skips other hours, days already practised and days already sent", async () => {
    const s = store([sub({ hour: 18, endpoint: "a" }), sub({ lastPracticeDay: "2026-11-07", endpoint: "b" }), sub({ lastSentDay: "2026-11-07", endpoint: "c" })]);
    const send = vi.fn(async () => {});
    const result = await sendDueReminders(s, send, now);
    expect(send).not.toHaveBeenCalled();
    expect(result).toMatchObject({ checked: 3, sent: 0 });
  });
  it("deletes gone subscriptions (404, 410) and keeps others after other failures", async () => {
    const s = store([sub({ endpoint: "gone" }), sub({ endpoint: "busy" })]);
    const send = vi.fn(async (x: PushSubscriptionDoc) => {
      throw Object.assign(new Error("x"), { statusCode: x.endpoint === "gone" ? 410 : 500 });
    });
    expect(await sendDueReminders(s, send, now)).toMatchObject({ sent: 0, removed: 1, failed: 1 });
    expect(s.remove).toHaveBeenCalledWith("gone");
    expect(s.remove).not.toHaveBeenCalledWith("busy");
    expect(s.markSent).not.toHaveBeenCalled();
  });
});
