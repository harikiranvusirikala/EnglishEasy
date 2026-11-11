import type { DayRef, Stage, Week } from "@/content/course";
import type { Course } from "./recommend";
import { recommendedDay } from "./recommend";
import type { Progress } from "./progress";
import { dayStarted } from "./stats";

/** Pure helpers for Home and Journey (VISION §10.2, §10.3). Nothing here reads the clock: callers pass the date. */

export type TimeOfDay = "morning" | "afternoon" | "evening";

/** Good morning until noon, afternoon until 5 pm, then evening. */
export function timeOfDay(hour: number): TimeOfDay {
  return hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
}

export type DayPlace = { ref: DayRef; week: Week; stage: Stage | null; number: number };

/** A day's place in the given course: "Day N" is computed from the week and position (week × 7), never stored. Tracks have `stage: null`. */
export function locateDay(course: Course, dayId: string): DayPlace | null {
  const lanes: { weeks: Week[]; stage: Stage | null }[] = [
    ...course.stages.map((stage) => ({ weeks: stage.weeks, stage })),
    ...course.tracks.map((track) => ({ weeks: track.weeks, stage: null })),
  ];
  for (const { weeks, stage } of lanes) {
    for (const week of weeks) {
      const i = week.days.findIndex((d) => d.id === dayId);
      if (i >= 0) return { ref: week.days[i], week, stage, number: (week.n - 1) * 7 + i + 1 };
    }
  }
  return null;
}

/** Number of the day at a position in a week. */
export const dayNumber = (week: Week, index: number) => (week.n - 1) * 7 + index + 1;

export type StripDay = { ref: DayRef; number: number; state: "done" | "current" | "todo" };

/** "This week": the days of the week the recommended day is in; ✓ done, ● the one to do now, ○ the rest. */
export function weekStrip(week: Week, p: Progress, currentId: string | null): StripDay[] {
  return week.days.map((ref, i) => ({
    ref,
    number: dayNumber(week, i),
    state: ref.id in p.completed ? "done" : ref.id === currentId ? "current" : "todo",
  }));
}

/** Days practised in the last 7 days, today included. `today` is a local "YYYY-MM-DD". */
export function practisedThisWeek(practiceDays: string[], today: string): number {
  const [y, m, d] = today.split("-").map(Number);
  const from = new Date(y, m - 1, d - 6);
  const pad = (n: number) => String(n).padStart(2, "0");
  const start = `${from.getFullYear()}-${pad(from.getMonth() + 1)}-${pad(from.getDate())}`;
  return new Set(practiceDays.filter((day) => day >= start && day <= today)).size;
}

/** True before the learner has done anything: Home then shows the "Start Day 1" card. */
export function isFirstVisit(p: Progress): boolean {
  return Object.keys(p.completed).length === 0 && Object.keys(p.activities).length === 0 && !p.position;
}

/** The stage Journey opens: the one holding the recommended day; the first stage when nothing is released. */
export function currentStageIndex(course: Course, p: Progress): number {
  const target = recommendedDay(course, p);
  if (!target) return 0;
  const i = course.stages.findIndex((s) => s.weeks.some((w) => w.days.some((d) => d.id === target.dayId)));
  return i < 0 ? 0 : i;
}

/** The one-time card suggesting English explanations (VISION §4.3; owner, 2026-11-11). */
export const ENGLISH_CARD_ID = "english-mode";

/** It shows in Telugu mode, until dismissed, once the next lesson is in Stage 3 or later (stage index 2+). */
export function englishCardVisible(course: Course, p: Progress, settings: { learnIn: string; dismissed: string[] }): boolean {
  return settings.learnIn === "te" && !settings.dismissed.includes(ENGLISH_CARD_ID) && currentStageIndex(course, p) >= 2;
}

/** Whether a day was started or finished (used for "Continue" versus "Start" before its content is loaded). */
export function dayTouched(dayId: string, p: Progress): boolean {
  return dayId in p.completed || dayStarted(dayId, p);
}
