import { dayIdOf, MAX_PRACTICE_DAYS, type ActivityRecord, type Progress } from "./progress";

/** Merging two copies of one learner's progress (BUILD_PLAN A7). Pure; nothing learned on either side is lost. */

type Completed = Progress["completed"][string];

const later = (a: string, b: string) => (a >= b ? a : b);
const earlier = (a: string, b: string) => (a <= b ? a : b);

/** The better of two summaries of the same day: the higher score (correct ÷ total), then the more activities; `at` is the earlier. */
function betterCompleted(a: Completed, b: Completed): Completed {
  const left = a.correct * (b.total || 1);
  const right = b.correct * (a.total || 1);
  const best = left !== right ? (left > right ? a : b) : a.total >= b.total ? a : b;
  return { at: earlier(a.at, b.at), correct: best.correct, total: best.total };
}

function laterActivity(a: ActivityRecord, b: ActivityRecord): ActivityRecord {
  const winner = a.at >= b.at ? a : b;
  return { ...winner, attempts: Math.max(a.attempts, b.attempts) };
}

/**
 * Did `other` clear the mistake `id` (added at `added` on the first side)? Yes when it answered the activity correctly
 * after that time, or when it lacks the mistake although it has played the activity's day and was saved after it was added
 * (Practice again removed it there).
 */
function clearedBy(id: string, added: string, other: Progress): boolean {
  const record = other.activities[id];
  if (record?.correct && record.at > added) return true;
  if (id in other.mistakes) return false;
  const day = dayIdOf(id);
  const played = day in other.completed || Object.keys(other.activities).some((k) => dayIdOf(k) === day);
  return played && other.updatedAt > added;
}

export function mergeProgress(a: Progress, b: Progress): Progress {
  const completed: Progress["completed"] = { ...a.completed };
  for (const [id, summary] of Object.entries(b.completed)) completed[id] = id in completed ? betterCompleted(completed[id], summary) : summary;

  const activities: Progress["activities"] = {};
  for (const source of [a.activities, b.activities]) {
    for (const [id, record] of Object.entries(source)) {
      if (dayIdOf(id) in completed) continue;
      activities[id] = id in activities ? laterActivity(activities[id], record) : record;
    }
  }

  const mistakes: Progress["mistakes"] = {};
  for (const [mine, theirs] of [[a, b], [b, a]] as const) {
    for (const [id, added] of Object.entries(mine.mistakes)) {
      const other = theirs.mistakes[id];
      const at = other ? earlier(added, other) : added;
      if (other || !clearedBy(id, added, theirs)) mistakes[id] = at;
    }
  }
  const candidates = [a.position, b.position].filter((p): p is NonNullable<Progress["position"]> => !!p);
  const position = candidates.reduce<Progress["position"]>((best, p) => (!best || p.at > best.at ? p : best), undefined);

  // Daily review: per sentence, the record changed last.
  const review: NonNullable<Progress["review"]> = { ...(a.review ?? {}) };
  for (const [key, r] of Object.entries(b.review ?? {})) if (!review[key] || r.at > review[key].at) review[key] = r;

  const merged: Progress = {
    version: 1,
    activities,
    completed,
    mistakes,
    practiceDays: [...new Set([...a.practiceDays, ...b.practiceDays])].sort().slice(-MAX_PRACTICE_DAYS),
    tracks: [...new Set([...a.tracks, ...b.tracks])],
    tracksAsked: a.tracksAsked || b.tracksAsked,
    updatedAt: later(a.updatedAt, b.updatedAt),
  };
  // A resume point is dropped when its day was finished after it was set (completing a day clears it).
  if (Object.keys(review).length > 0) merged.review = review;
  // The trip flag follows the copy saved last (it changes with the tracks choice).
  const newer = a.updatedAt >= b.updatedAt ? a : b;
  if (newer.tripSoon) merged.tripSoon = true;
  if (position && !(position.dayId in completed && completed[position.dayId].at >= position.at)) merged.position = position;
  return merged;
}

const stable = (value: unknown): string =>
  JSON.stringify(value, (_key, v: unknown) =>
    v && typeof v === "object" && !Array.isArray(v) ? Object.fromEntries(Object.entries(v).sort(([x], [y]) => (x < y ? -1 : 1))) : v,
  );

/** Same progress, whatever the key order. */
export function sameProgress(a: Progress, b: Progress): boolean {
  return stable(a) === stable(b);
}
