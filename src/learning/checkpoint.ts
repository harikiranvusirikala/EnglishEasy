import { CHECKPOINT_WEEKS, checkpoints, type Checkpoint } from "@/content/course";
import type { Course } from "./recommend";
import { dayIdOf, type Progress } from "./progress";

/** Checkpoints (CURRICULUM §2b). Pure. */

/** The checkpoint a main-path week closes, if any (and if its data is written). */
export function checkpointOfWeek(week: number): Checkpoint | null {
  return checkpoints.find((c) => c.week === week) ?? null;
}

/** The weeks a checkpoint covers: from the week after the previous checkpoint up to its own. */
export function checkpointWeeks(c: Checkpoint): { from: number; to: number } {
  const before = CHECKPOINT_WEEKS.filter((w) => w < c.week);
  return { from: before.length > 0 ? before[before.length - 1] + 1 : 1, to: c.week };
}

export type PracticeAgainItem = { dayId: string; title: Course["stages"][number]["weeks"][number]["days"][number]["title"]; week: number };

/** "Practice these again": lessons of the checkpoint's weeks that still hold a mistake, at most `limit`, in course order. */
export function practiceAgainFor(course: Course, c: Checkpoint, p: Progress, limit = 3): PracticeAgainItem[] {
  const { from, to } = checkpointWeeks(c);
  const withMistakes = new Set(Object.keys(p.mistakes).map(dayIdOf));
  const out: PracticeAgainItem[] = [];
  for (const week of course.stages.flatMap((s) => s.weeks)) {
    if (week.n < from || week.n > to) continue;
    for (const day of week.days) if (withMistakes.has(day.id)) out.push({ dayId: day.id, title: day.title, week: week.n });
  }
  return out.slice(0, limit);
}
