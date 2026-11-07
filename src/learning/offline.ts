import type { Course } from "./recommend";
import { recommendedDay } from "./recommend";
import { locateDay } from "./home";
import type { Progress } from "./progress";

/** Which lessons to keep on the phone, and which Install card to show. Pure. */

/** Address of a lesson's data file (matches `loadLesson`). */
export const lessonUrl = (dayId: string) => `/content/${encodeURIComponent(dayId)}.json`;

/**
 * The lesson files of the learner's current week and the next released main-path week, written days only
 * (opened lessons are kept as they load). Nothing released: an empty list.
 */
export function lessonsToKeep(course: Course, progress: Progress, written: string[]): string[] {
  const target = recommendedDay(course, progress);
  const place = target ? locateDay(course, target.dayId) : null;
  if (!place) return [];
  const weeks = course.stages.flatMap((s) => s.weeks).filter((w) => w.released);
  const i = weeks.findIndex((w) => w.n === place.week.n);
  const keep = [weeks[i], weeks[i + 1]].filter((w): w is NonNullable<typeof w> => !!w);
  return keep.flatMap((w) => w.days.map((d) => d.id)).filter((id) => written.includes(id)).map(lessonUrl);
}

export type InstallInputs = { standalone: boolean; ios: boolean; canPrompt: boolean; dismissed: boolean };
export type InstallMode = "prompt" | "ios" | "none";

/** How Home offers installing: Android's install button, the iPhone's Share steps, or nothing (installed, dismissed, or no way to). */
export function installMode({ standalone, ios, canPrompt, dismissed }: InstallInputs): InstallMode {
  if (standalone || dismissed) return "none";
  if (canPrompt) return "prompt";
  return ios ? "ios" : "none";
}
