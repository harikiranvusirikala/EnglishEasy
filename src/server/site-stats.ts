import type { Db } from "mongodb";
import type { Progress } from "@/learning/progress";
import { feedbackSummary, lessonLevels, type FeedbackSummary, type LevelCounts } from "./feedback-repo";
import { countOpenReports, openReports, recentClientErrors } from "./reports-repo";

/**
 * The numbers on /admin (BUILD_PLAN "site stats"): counts only, never names or emails. Learners here are the signed-in
 * ones (guests keep everything on their phones). The summaries are pure, so tests run them without a database.
 */

const DAY_MS = 86_400_000;
export const WEEKS_SHOWN = 12;

export interface LearnerDoc {
  createdAt: Date;
}
export interface ProgressRow {
  updatedAt: Date;
  completed: Progress["completed"];
}
export interface WeekCount {
  /** The Monday the week starts (UTC), as YYYY-MM-DD. */
  week: string;
  count: number;
}
export interface DayResult {
  finished: number;
  /** Average share of first-try correct answers, 0–100, or null when nobody finished. */
  score: number | null;
}
export interface LearnerSummary {
  total: number;
  newPerWeek: WeekCount[];
  active: { day: number; week: number; month: number };
  days: Map<string, DayResult>;
}

/** The Monday (UTC) of the week holding `date`. */
export function weekStart(date: Date): Date {
  const day = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const back = (day.getUTCDay() + 6) % 7; // Monday 0 … Sunday 6
  return new Date(day.getTime() - back * DAY_MS);
}

const iso = (date: Date) => date.toISOString().slice(0, 10);

/** New learners in each of the last `weeks` weeks, oldest first (the current week last, even if empty). */
export function perWeek(dates: Date[], now: Date, weeks = WEEKS_SHOWN): WeekCount[] {
  const last = weekStart(now).getTime();
  const out = Array.from({ length: weeks }, (_, i) => ({ week: iso(new Date(last - (weeks - 1 - i) * 7 * DAY_MS)), count: 0 }));
  const first = last - (weeks - 1) * 7 * DAY_MS;
  for (const date of dates) {
    const start = weekStart(date).getTime();
    if (start < first || start > last) continue;
    out[Math.round((start - first) / (7 * DAY_MS))].count++;
  }
  return out;
}

export function summarizeLearners(users: LearnerDoc[], progress: ProgressRow[], now: Date): LearnerSummary {
  const since = (days: number) => progress.filter((p) => now.getTime() - p.updatedAt.getTime() < days * DAY_MS).length;
  const totals = new Map<string, { finished: number; correct: number; total: number }>();
  for (const { completed } of progress) {
    for (const [dayId, { correct, total }] of Object.entries(completed)) {
      const t = totals.get(dayId) ?? { finished: 0, correct: 0, total: 0 };
      t.finished++;
      t.correct += correct;
      t.total += total;
      totals.set(dayId, t);
    }
  }
  const days = new Map<string, DayResult>();
  for (const [dayId, t] of totals) days.set(dayId, { finished: t.finished, score: t.total > 0 ? Math.round((t.correct / t.total) * 100) : null });
  return {
    total: users.length,
    newPerWeek: perWeek(users.map((u) => u.createdAt), now),
    active: { day: since(1), week: since(7), month: since(30) },
    days,
  };
}

/** Reminder subscribers by the hour they asked for (0–23), only the hours someone chose. */
export function byHour(hours: number[]): { hour: number; count: number }[] {
  const counts = new Map<number, number>();
  for (const h of hours) counts.set(h, (counts.get(h) ?? 0) + 1);
  return [...counts].sort((a, b) => a[0] - b[0]).map(([hour, count]) => ({ hour, count }));
}

export interface SiteStats {
  learners: LearnerSummary;
  levels: Map<string, LevelCounts>;
  reportsByDay: Map<string, number>;
  feedback: FeedbackSummary;
  reminders: { total: number; byHour: { hour: number; count: number }[] };
  health: { openReports: number; errorsThisWeek: number };
}

export async function loadSiteStats(db: Db, now: Date = new Date()): Promise<SiteStats> {
  const [users, progress, levels, reports, feedback, subscriptions, openCount, errors] = await Promise.all([
    db.collection<LearnerDoc>("users").find({}, { projection: { _id: 0, createdAt: 1 } }).toArray(),
    db.collection<{ updatedAt: Date; data: Progress }>("progress").find({}, { projection: { _id: 0, updatedAt: 1, "data.completed": 1 } }).toArray(),
    lessonLevels(db),
    openReports(db),
    feedbackSummary(db),
    db.collection<{ hour: number }>("pushSubscriptions").find({}, { projection: { _id: 0, hour: 1 } }).toArray(),
    countOpenReports(db),
    recentClientErrors(db, 7, now),
  ]);
  const reportsByDay = new Map<string, number>();
  for (const r of reports) reportsByDay.set(r.dayId, (reportsByDay.get(r.dayId) ?? 0) + 1);
  return {
    learners: summarizeLearners(users, progress.map((p) => ({ updatedAt: p.updatedAt, completed: p.data?.completed ?? {} })), now),
    levels,
    reportsByDay,
    feedback,
    reminders: { total: subscriptions.length, byHour: byHour(subscriptions.map((s) => s.hour)) },
    health: { openReports: openCount, errorsThisWeek: errors.length },
  };
}
