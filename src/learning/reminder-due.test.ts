import { describe, expect, it } from "vitest";
import { isDue, isValidTimeZone, localParts, reminderMode } from "./reminder-due";

// 2026-11-07 02:30 UTC is 08:00 in India (UTC+5:30), 21:30 on the 6th in New York (UTC-5), 18:30 in Sydney is next day.
const at = (iso: string) => new Date(iso);

describe("localParts", () => {
  it("reads the local day and hour in each time zone", () => {
    expect(localParts(at("2026-11-07T02:30:00Z"), "Asia/Kolkata")).toEqual({ day: "2026-11-07", hour: 8 });
    expect(localParts(at("2026-11-07T02:30:00Z"), "America/New_York")).toEqual({ day: "2026-11-06", hour: 21 });
    expect(localParts(at("2026-11-07T14:30:00Z"), "Australia/Sydney")).toEqual({ day: "2026-11-08", hour: 1 });
  });
  it("shows midnight as hour 0, not 24", () => {
    expect(localParts(at("2026-11-06T18:30:00Z"), "Asia/Kolkata")).toEqual({ day: "2026-11-07", hour: 0 });
  });
  it("is null for an unknown zone", () => {
    expect(localParts(new Date(), "Mars/Base")).toBeNull();
    expect(isValidTimeZone("Asia/Kolkata")).toBe(true);
    expect(isValidTimeZone("nope")).toBe(false);
  });
});

describe("isDue", () => {
  const india = { hour: 8, timeZone: "Asia/Kolkata" };
  it("is due at the chosen local hour, at any minute", () => {
    expect(isDue(india, at("2026-11-07T02:30:00Z"))).toBe(true); // 08:00 IST
    expect(isDue(india, at("2026-11-07T03:10:00Z"))).toBe(true); // 08:40 IST
    expect(isDue(india, at("2026-11-07T03:30:00Z"))).toBe(false); // 09:00 IST
    expect(isDue(india, at("2026-11-07T01:59:00Z"))).toBe(false); // 07:29 IST
  });
  it("uses the learner's own time zone, abroad as well", () => {
    const newYork = { hour: 20, timeZone: "America/New_York" };
    expect(isDue(newYork, at("2026-11-08T01:15:00Z"))).toBe(true); // 20:15 EST
    expect(isDue(newYork, at("2026-11-07T15:00:00Z"))).toBe(false);
    const sydney = { hour: 18, timeZone: "Australia/Sydney" };
    expect(isDue(sydney, at("2026-11-07T07:00:00Z"))).toBe(true); // 18:00 AEDT
  });
  it("is not due after practising today, or after a reminder today", () => {
    const now = at("2026-11-07T02:30:00Z");
    expect(isDue({ ...india, lastPracticeDay: "2026-11-07" }, now)).toBe(false);
    expect(isDue({ ...india, lastSentDay: "2026-11-07" }, now)).toBe(false);
  });
  it("is due again the next day, and when only an older day was practised", () => {
    expect(isDue({ ...india, lastPracticeDay: "2026-11-06", lastSentDay: "2026-11-06" }, at("2026-11-07T02:30:00Z"))).toBe(true);
  });
  it("judges the practice day by the learner's date, not UTC's", () => {
    // 23:00 on the 6th in New York is already the 7th in UTC.
    const ny = { hour: 23, timeZone: "America/New_York" };
    expect(isDue({ ...ny, lastPracticeDay: "2026-11-06" }, at("2026-11-07T04:10:00Z"))).toBe(false);
    expect(isDue({ ...ny, lastPracticeDay: "2026-11-05" }, at("2026-11-07T04:10:00Z"))).toBe(true);
  });
  it("is never due for an unknown zone", () => {
    expect(isDue({ hour: 8, timeZone: "nope" }, new Date())).toBe(false);
  });
});

describe("reminderMode", () => {
  const base = { ios: false, standalone: false, hasPush: true, permission: "default" as const };
  it("asks iPhone users outside the installed app to install first, even though push looks missing there", () => {
    expect(reminderMode({ ...base, ios: true, hasPush: false })).toBe("install");
    expect(reminderMode({ ...base, ios: true, standalone: true })).toBe("ready");
  });
  it("tells apart no push, a blocked permission and ready", () => {
    expect(reminderMode({ ...base, hasPush: false })).toBe("unsupported");
    expect(reminderMode({ ...base, permission: "denied" })).toBe("denied");
    expect(reminderMode(base)).toBe("ready");
  });
});
