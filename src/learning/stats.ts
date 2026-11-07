import type { Stage, Week } from "@/content/course";
import type { PlayableDay, SectionKind } from "@/content/types";
import type { Progress } from "./progress";

/** Progress numbers for a day, week, stage and the course (VISION §9). Pure. */

export type State = "not-started" | "in-progress" | "complete";
export type SectionStats = { kind: SectionKind; done: number; total: number; state: State; optional: boolean };
export type DayStats = { done: number; total: number; percent: number; complete: boolean; state: State; sections: SectionStats[] };
export type GroupStats = { done: number; total: number; percent: number; state: State };

/** Finds the playable day for an id (the player loads days from `public/content`); `undefined` when not loaded. */
export type DayLookup = (dayId: string) => PlayableDay | undefined;

const stateOf = (done: number, total: number): State => (total > 0 && done >= total ? "complete" : done > 0 ? "in-progress" : "not-started");
const percentOf = (done: number, total: number) => (total === 0 ? 0 : Math.round((done / total) * 100));

/**
 * Activities done in a day (VISION §9.2). A finished day counts everything as done. Wrap-up has no activities, so it is
 * complete with its day. The day is complete when every activity of its required (non-optional) sections is done.
 */
export function dayStats(day: PlayableDay, p: Progress): DayStats {
  const summary = p.completed[day.id];
  const optional = day.optional ?? [];
  let done = 0;
  let total = 0;
  let requiredDone = true;
  let anyDone = false;
  const sections = day.sections.map((s): SectionStats => {
    const isOptional = optional.includes(s.kind);
    const d = summary ? s.activities.length : s.activities.filter((a) => a.id in p.activities).length;
    done += d;
    total += s.activities.length;
    if (d > 0) anyDone = true;
    if (!isOptional && d < s.activities.length) requiredDone = false;
    const state: State = s.kind === "wrapup" ? (summary ? "complete" : "not-started") : stateOf(d, s.activities.length);
    return { kind: s.kind, done: d, total: s.activities.length, state, optional: isOptional };
  });
  const complete = !!summary || (total > 0 && requiredDone);
  const state: State = complete ? "complete" : anyDone || p.position?.dayId === day.id ? "in-progress" : "not-started";
  return { done, total, percent: percentOf(done, total), complete, state, sections };
}

/** Every day of a week, by id: complete days count; a day is in progress when it has records or the resume position. */
export function weekStats(week: Week, p: Progress): GroupStats {
  const total = week.days.length;
  const done = week.days.filter((d) => d.id in p.completed).length;
  const started = week.days.some((d) => dayStarted(d.id, p));
  const state: State = total > 0 && done === total ? "complete" : done > 0 || started ? "in-progress" : "not-started";
  return { done, total, percent: percentOf(done, total), state };
}

export function dayStarted(dayId: string, p: Progress): boolean {
  if (p.position?.dayId === dayId) return true;
  const prefix = `${dayId}.`;
  return Object.keys(p.activities).some((id) => id.startsWith(prefix));
}

/** A stage or any list of weeks: days complete ÷ released days. */
export function stageStats(stage: Stage, p: Progress): GroupStats {
  return weeksStats(stage.weeks, p);
}

export function courseStats(stages: Stage[], p: Progress): GroupStats {
  return weeksStats(stages.flatMap((s) => s.weeks), p);
}

export function weeksStats(weeks: Week[], p: Progress): GroupStats {
  const stats = weeks.map((w) => weekStats(w, p));
  const total = stats.reduce((n, s) => n + s.total, 0);
  const done = stats.reduce((n, s) => n + s.done, 0);
  const started = stats.some((s) => s.state !== "not-started");
  const state: State = total > 0 && done === total ? "complete" : started ? "in-progress" : "not-started";
  return { done, total, percent: percentOf(done, total), state };
}

/** The first activity of a day that is not done yet, in play order; `null` when all are done. */
export function nextActivity(day: PlayableDay, p: Progress): string | null {
  if (day.id in p.completed) return null;
  for (const s of day.sections) for (const a of s.activities) if (!(a.id in p.activities)) return a.id;
  return null;
}
