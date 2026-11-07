/** Daily reminders, the pure part (BUILD_PLAN A7): which times can be chosen, and whether a subscription is due now. */

export const REMINDER_TIMES = [
  { id: "morning", hour: 8 },
  { id: "afternoon", hour: 13 },
  { id: "evening", hour: 18 },
  { id: "night", hour: 20 },
] as const;
export type ReminderTimeId = (typeof REMINDER_TIMES)[number]["id"];
export const REMINDER_HOURS: number[] = REMINDER_TIMES.map((t) => t.hour);

export interface ReminderSubscriptionState {
  /** The learner's chosen local hour (0-23). */
  hour: number;
  /** IANA time zone of the learner's phone, e.g. "Asia/Kolkata". */
  timeZone: string;
  /** Local "YYYY-MM-DD" of the last day the learner answered something, if any. */
  lastPracticeDay?: string | null;
  /** Local "YYYY-MM-DD" (in `timeZone`) of the last reminder sent, if any. */
  lastSentDay?: string | null;
}

/** The local date ("YYYY-MM-DD") and hour in a time zone at an instant; null if the zone is not known. */
export function localParts(now: Date, timeZone: string): { day: string; hour: number } | null {
  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      hourCycle: "h23",
    }).formatToParts(now);
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
    return { day: `${get("year")}-${get("month")}-${get("day")}`, hour: Number(get("hour")) };
  } catch {
    return null;
  }
}

export function isValidTimeZone(timeZone: string): boolean {
  return localParts(new Date(0), timeZone) !== null;
}

/** Due when it is the chosen hour where the learner is, they have not practised today and no reminder went out today. */
export function isDue(sub: ReminderSubscriptionState, now: Date): boolean {
  const local = localParts(now, sub.timeZone);
  if (!local || local.hour !== sub.hour) return false;
  return sub.lastPracticeDay !== local.day && sub.lastSentDay !== local.day;
}

export type ReminderMode = "install" | "unsupported" | "denied" | "ready";

/** What Settings offers: iPhones only get web push in the installed app; some browsers have no push; a blocked permission needs the phone's settings. */
export function reminderMode(input: { ios: boolean; standalone: boolean; hasPush: boolean; permission: "default" | "granted" | "denied" }): ReminderMode {
  if (input.ios && !input.standalone) return "install";
  if (!input.hasPush) return "unsupported";
  return input.permission === "denied" ? "denied" : "ready";
}
