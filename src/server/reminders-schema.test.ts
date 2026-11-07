import { describe, expect, it } from "vitest";
import { parseReminder, parseUnsubscribe } from "./reminders-schema";

const good = {
  subscription: { endpoint: "https://fcm.googleapis.com/fcm/send/abc", keys: { p256dh: "k", auth: "a" } },
  hour: 18,
  timeZone: "Asia/Kolkata",
  learnIn: "te",
};

describe("reminder schema", () => {
  it("accepts a subscription with a chosen time", () => {
    expect(parseReminder(good)).toMatchObject({ hour: 18, timeZone: "Asia/Kolkata" });
    expect(parseReminder({ ...good, lastPracticeDay: "2026-11-07" })).not.toBeNull();
  });
  it("rejects other hours, unknown zones, bad endpoints and bad days", () => {
    expect(parseReminder({ ...good, hour: 9 })).toBeNull();
    expect(parseReminder({ ...good, timeZone: "Mars/Base" })).toBeNull();
    expect(parseReminder({ ...good, subscription: { ...good.subscription, endpoint: "nope" } })).toBeNull();
    expect(parseReminder({ ...good, lastPracticeDay: "yesterday" })).toBeNull();
    expect(parseReminder({ ...good, learnIn: "hi" })).toBeNull();
    expect(parseReminder(null)).toBeNull();
  });
  it("reads the endpoint to remove", () => {
    expect(parseUnsubscribe({ endpoint: good.subscription.endpoint })).toBe(good.subscription.endpoint);
    expect(parseUnsubscribe({})).toBeNull();
  });
});
