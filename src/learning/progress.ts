import { activityCount } from "@/content/generate";
import type { PlayableDay } from "@/content/types";

/** The progress model (BUILD_PLAN A5, VISION §9). Pure functions: every one returns a new `Progress`. */

export type ActivityRecord = { correct: boolean; attempts: number; at: string; skipped?: true };
export type Progress = {
  version: 1;
  activities: Record<string, ActivityRecord>; // only for days not yet complete
  completed: Record<string, { at: string; correct: number; total: number }>; // dayId → summary
  mistakes: Record<string, string>; // activity id → ISO time added (Practice again)
  practiceDays: string[]; // local "YYYY-MM-DD", newest last
  position?: { dayId: string; activityId: string; at: string };
  tracks: string[];
  tracksAsked: boolean;
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

export function chooseTracks(p: Progress, tracks: string[], now: string): Progress {
  return { ...p, tracks: [...tracks], tracksAsked: true, updatedAt: now };
}

export function isDayComplete(p: Progress, dayId: string): boolean {
  return dayId in p.completed;
}

/**
 * Finish a day: its activity records collapse into one summary (`correct` = activities right on the first try, `total` = all
 * activities) and are dropped. Mistakes stay. The resume position is cleared if it pointed into this day.
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
  return next;
}
