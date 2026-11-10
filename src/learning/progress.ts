import { activityCount } from "@/content/generate";
import { enterReview } from "./review";
import type { PlayableDay } from "@/content/types";

/** The progress model (BUILD_PLAN A5, VISION §9). Pure functions: every one returns a new `Progress`. */

export type ActivityRecord = { correct: boolean; attempts: number; at: string; skipped?: true };
/** A key sentence in the daily review (`review.ts`): its Leitner box, the local day it is due, when it last changed. */
export type ReviewRecord = { box: number; due: string; at: string };
export type Progress = {
  version: 1;
  activities: Record<string, ActivityRecord>; // only for days not yet complete
  completed: Record<string, { at: string; correct: number; total: number }>; // dayId → summary
  mistakes: Record<string, string>; // activity id → ISO time added (Practice again)
  practiceDays: string[]; // local "YYYY-MM-DD", newest last
  position?: { dayId: string; activityId: string; at: string };
  tracks: string[];
  tracksAsked: boolean;
  tripSoon?: true; // "My trip is soon" (first visit): Abroad is offered from its earlier week
  review?: Record<string, ReviewRecord>; // daily review: `${dayId}.k${n}` → its schedule
  resetAt?: string; // "Start over" while signed in: progress from before this time is dropped on every device (merge.ts)
  updatedAt: string;
};

export const MAX_PRACTICE_DAYS = 60;
export function emptyProgress(now: string = new Date(0).toISOString()): Progress {
  return { version: 1, activities: {}, completed: {}, mistakes: {}, practiceDays: [], tracks: [], tracksAsked: false, updatedAt: now };
}

/** Activity ids are `${dayId}.${local}` and day ids never contain a dot. */
export function dayIdOf(activityId: string): string {
  const dot = activityId.indexOf(".");
  return dot < 0 ? activityId : activityId.slice(0, dot);
}

export type AnswerOptions = {
  /** Practice again: only the mistakes list changes; a correct answer removes the mistake. */
  practice?: boolean;
  /** Speaking: "Choose instead" counts as done (VISION §9.2). */
  skipped?: boolean;
};

/**
 * Record one answer. Attempts count every try; `correct` is the latest try. An activity that is done stays done.
 * A mistake is added after the second wrong try in a row (VISION §9) and removed on a correct answer in Practice again.
 */
export function recordAnswer(p: Progress, activityId: string, correct: boolean, now: string, opts: AnswerOptions = {}): Progress {
  if (opts.practice) {
    const mistakes = { ...p.mistakes };
    if (correct) delete mistakes[activityId];
    return { ...p, mistakes, updatedAt: now };
  }
  const before = p.activities[activityId];
  const record: ActivityRecord = { correct, attempts: (before?.attempts ?? 0) + 1, at: now };
  if (opts.skipped) record.skipped = true;
  const mistakes = { ...p.mistakes };
  // Getting it right in a lesson does not clear Practice again; only practising does.
  if (!correct && before && !before.correct && !before.skipped && !(activityId in mistakes)) {
    mistakes[activityId] = now;
  }
  return { ...p, activities: { ...p.activities, [activityId]: record }, mistakes, updatedAt: now };
}

/** A card was viewed to the end, or a role play / dialogue was finished: done and correct. */
export function markViewed(p: Progress, activityId: string, now: string): Progress {
  const before = p.activities[activityId];
  if (before) return p;
  return { ...p, activities: { ...p.activities, [activityId]: { correct: true, attempts: 1, at: now } }, updatedAt: now };
}

/** "Choose instead" or "I can't speak now": done, not counted as correct, never a mistake. */
export function skipActivity(p: Progress, activityId: string, now: string): Progress {
  if (p.activities[activityId]) return p;
  return { ...p, activities: { ...p.activities, [activityId]: { correct: false, attempts: 1, at: now, skipped: true } }, updatedAt: now };
}

export function setPosition(p: Progress, dayId: string, activityId: string, now: string): Progress {
  return { ...p, position: { dayId, activityId, at: now }, updatedAt: now };
}

/** Add today's local date ("YYYY-MM-DD"); newest last, no duplicates, the last 60 kept. */
export function addPracticeDay(p: Progress, date: string, now: string): Progress {
  if (p.practiceDays.includes(date)) return p;
  return { ...p, practiceDays: [...p.practiceDays, date].slice(-MAX_PRACTICE_DAYS), updatedAt: now };
}

/** The tracks chosen at the first visit (or in Settings); `tripSoon` for "My trip is soon". */
export function chooseTracks(p: Progress, tracks: string[], now: string, tripSoon = p.tripSoon === true): Progress {
  const next: Progress = { ...p, tracks: [...tracks], tracksAsked: true, updatedAt: now };
  if (tripSoon && tracks.includes("abroad")) next.tripSoon = true;
  else delete next.tripSoon;
  return next;
}

export function isDayComplete(p: Progress, dayId: string): boolean {
  return dayId in p.completed;
}

/**
 * Finish a day: its activity records collapse into one summary (`correct` = activities right on the first try, `total` = all
 * activities) and are dropped. Mistakes stay. The resume position is cleared if it pointed into this day. Its key
 * sentences enter the daily review.
 */
export function completeDay(p: Progress, day: PlayableDay, now: string): Progress {
  const prefix = `${day.id}.`;
  const activities: Progress["activities"] = {};
  let correct = 0;
  for (const [id, rec] of Object.entries(p.activities)) {
    if (!id.startsWith(prefix)) activities[id] = rec;
    else if (rec.correct && rec.attempts === 1) correct++;
  }
  const next: Progress = { ...p, activities, completed: { ...p.completed, [day.id]: { at: now, correct, total: activityCount(day) } }, updatedAt: now };
  if (p.position?.dayId === day.id) delete next.position;
  return enterReview(next, day, now); // its key sentences start the daily review
}

export const PROGRESS_KEY = "englisheasy.progress.v1";

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);

/**
 * Read saved progress. Anything missing, corrupt or from another version gives empty progress; single bad entries
 * are dropped, so one damaged value never loses the rest.
 */
export function parseProgress(raw: string | null): Progress {
  if (!raw) return emptyProgress();
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return emptyProgress();
  }
  if (!isRecord(data) || data.version !== 1) return emptyProgress();
  const out = emptyProgress(typeof data.updatedAt === "string" ? data.updatedAt : undefined);
  if (isRecord(data.activities)) {
    for (const [id, r] of Object.entries(data.activities)) {
      if (isRecord(r) && typeof r.correct === "boolean" && typeof r.attempts === "number" && typeof r.at === "string") {
        out.activities[id] = { correct: r.correct, attempts: r.attempts, at: r.at, ...(r.skipped === true ? { skipped: true as const } : {}) };
      }
    }
  }
  if (isRecord(data.completed)) {
    for (const [id, r] of Object.entries(data.completed)) {
      if (isRecord(r) && typeof r.at === "string" && typeof r.correct === "number" && typeof r.total === "number") {
        out.completed[id] = { at: r.at, correct: r.correct, total: r.total };
      }
    }
  }
  if (isRecord(data.mistakes)) {
    for (const [id, at] of Object.entries(data.mistakes)) if (typeof at === "string") out.mistakes[id] = at;
  }
  if (Array.isArray(data.practiceDays)) {
    out.practiceDays = data.practiceDays.filter((d): d is string => typeof d === "string").slice(-MAX_PRACTICE_DAYS);
  }
  const pos = data.position;
  if (isRecord(pos) && typeof pos.dayId === "string" && typeof pos.activityId === "string" && typeof pos.at === "string") {
    out.position = { dayId: pos.dayId, activityId: pos.activityId, at: pos.at };
  }
  if (Array.isArray(data.tracks)) out.tracks = data.tracks.filter((t): t is string => typeof t === "string");
  out.tracksAsked = data.tracksAsked === true;
  if (data.tripSoon === true) out.tripSoon = true;
  if (typeof data.resetAt === "string") out.resetAt = data.resetAt;
  if (isRecord(data.review)) {
    const review: Record<string, ReviewRecord> = {};
    for (const [key, r] of Object.entries(data.review)) {
      if (isRecord(r) && typeof r.box === "number" && typeof r.due === "string" && typeof r.at === "string") review[key] = { box: r.box, due: r.due, at: r.at };
    }
    if (Object.keys(review).length > 0) out.review = review;
  }
  return out;
}

/**
 * "Start over" in Settings: everything learned is gone; the goals stay (they are changed in Settings → My tracks).
 * Signed in (`everywhere`), the reset time is kept, so the account and every other phone drop their older progress when
 * they merge; signed out it is this phone only, and signing in later brings the account's progress back.
 */
export function resetProgress(p: Progress, now: string, everywhere: boolean): Progress {
  const kept: Progress = { ...emptyProgress(now), tracks: p.tracks, tracksAsked: p.tracksAsked };
  if (p.tripSoon) kept.tripSoon = true;
  return everywhere ? { ...kept, resetAt: now } : kept;
}

/** A local date as "YYYY-MM-DD" (the practice-day format). */
export function dateKey(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
