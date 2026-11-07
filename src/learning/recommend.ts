import type { Week } from "@/content/course";
import type { course as realCourse } from "@/content/course";
import type { Progress } from "./progress";

/** What to do next (VISION §9.4, §10.2, §11.4). Pure. */

export type Course = typeof realCourse;
export type Recommendation = { dayId: string; activityId?: string; reason: "resume" | "next" | "last" };

function releasedDays(weeks: Week[]) {
  return weeks.flatMap((w) => (w.released ? w.days : []));
}

/**
 * Resume position first (if its day is still unfinished); else the first incomplete released main-path day;
 * else the last released main-path day (everything released is done). `null` when nothing is released.
 */
export function recommendedDay(course: Course, p: Progress): Recommendation | null {
  if (p.position && !(p.position.dayId in p.completed)) {
    return { dayId: p.position.dayId, activityId: p.position.activityId, reason: "resume" };
  }
  const days = releasedDays(course.stages.flatMap((s) => s.weeks));
  const next = days.find((d) => !(d.id in p.completed));
  if (next) return { dayId: next.id, reason: "next" };
  const last = days[days.length - 1];
  return last ? { dayId: last.id, reason: "last" } : null;
}

/** Tracks that have at least one released day: the only ones a learner is offered. */
export function offerableTracks(course: Course) {
  return course.tracks.filter((t) => releasedDays(t.weeks).length > 0);
}

/** The one-time "tracks" card: not asked yet, something to offer, and the learner has reached the offer week. */
export function shouldOfferTracks(course: Course, p: Progress): boolean {
  if (p.tracksAsked) return false;
  const offers = offerableTracks(course);
  if (offers.length === 0) return false;
  const target = recommendedDay(course, p);
  if (!target) return false;
  const week = course.stages.flatMap((s) => s.weeks).find((w) => w.days.some((d) => d.id === target.dayId));
  return !!week && week.n >= Math.min(...offers.map((t) => t.offerAtWeek));
}

/** The next unfinished day of the first chosen track that has released content; never for a track not chosen. */
export function trackSuggestion(course: Course, p: Progress): { trackId: string; dayId: string } | null {
  for (const id of p.tracks) {
    const track = course.tracks.find((t) => t.id === id);
    if (!track) continue;
    const next = releasedDays(track.weeks).find((d) => !(d.id in p.completed));
    if (next) return { trackId: track.id, dayId: next.id };
  }
  return null;
}
