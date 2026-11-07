import type { DayRef, Stage, Week } from "@/content/course";
import { locateDay } from "./home";
import type { Course } from "./recommend";

/** Week and stage complete (VISION §10.7). Pure: the course is passed in so tests can use a fixture. */

export type WeekEnd = {
  week: Week;
  /** `null` for a track. */
  stage: Stage | null;
  /** The last day of the week was just finished. */
  days: DayRef[];
  /** This week is the last of its stage: the bigger celebration. */
  stageEnd: boolean;
  /** The next released week in the same lane, if any; its first day is what "Start Week N" opens. */
  nextWeek: Week | null;
};

/** If `dayId` is the last day of its week, what to celebrate; otherwise `null`. */
export function weekEnd(course: Course, dayId: string): WeekEnd | null {
  const place = locateDay(course, dayId);
  if (!place) return null;
  const { week, stage } = place;
  if (week.days[week.days.length - 1]?.id !== dayId) return null;
  const lane = stage ? stage.weeks : (course.tracks.find((t) => t.weeks.includes(week))?.weeks ?? []);
  const laneWeeks = stage ? course.stages.flatMap((s) => s.weeks) : lane;
  const next = laneWeeks[laneWeeks.indexOf(week) + 1];
  return {
    week,
    stage,
    days: week.days,
    stageEnd: !!stage && week.n === stage.lastWeek,
    nextWeek: next && next.released && next.days.length > 0 ? next : null,
  };
}
