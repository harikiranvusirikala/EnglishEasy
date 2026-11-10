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

/** The main-path week of the day the learner is on (the recommended day), or null when nothing is released. */
export function currentWeek(course: Course, p: Progress): number | null {
  const target = recommendedDay(course, p);
  if (!target) return null;
  return course.stages.flatMap((s) => s.weeks).find((w) => w.days.some((d) => d.id === target.dayId))?.n ?? null;
}

/** The settings key that hides a track's "New for you" card ("Not now"). */
export const trackOfferKey = (id: string) => `track-offer:${id}`;

const started = (track: Course["tracks"][number], p: Progress) => releasedDays(track.weeks).some((d) => d.id in p.completed);

/**
 * "New for you" on Home (CURRICULUM §8): the first track the learner chose at the start that has released lessons,
 * isn't started yet, and whose offer week they have reached (Abroad's earlier week with "My trip is soon"); never after
 * "Not now" (`dismissed` holds `trackOfferKey`s).
 */
export function trackOffer(course: Course, p: Progress, dismissed: string[]): Course["tracks"][number] | null {
  const week = currentWeek(course, p);
  if (week === null) return null;
  for (const track of course.tracks) {
    if (!p.tracks.includes(track.id) || dismissed.includes(trackOfferKey(track.id))) continue;
    if (releasedDays(track.weeks).length === 0 || started(track, p)) continue;
    const from = p.tripSoon && track.soonWeek ? track.soonWeek : track.offerAtWeek;
    if (week >= from) return track;
  }
  return null;
}

/** The next unfinished day of the first chosen track the learner has started; never for a track not chosen or not begun ("New for you" offers those). */
export function trackSuggestion(course: Course, p: Progress): { trackId: string; dayId: string } | null {
  for (const id of p.tracks) {
    const track = course.tracks.find((t) => t.id === id);
    if (!track || !started(track, p)) continue;
    const next = releasedDays(track.weeks).find((d) => !(d.id in p.completed));
    if (next) return { trackId: track.id, dayId: next.id };
  }
  return null;
}
