import { repeatSteps } from "@/content/generate";
import type { Activity, PlayableDay } from "@/content/types";
import type { PracticeItem } from "./practice";
import { dateKey, type Progress, type ReviewRecord } from "./progress";
import { shuffle } from "./shuffle";

/**
 * Daily review (content review, 2026-11-09): spaced repetition of the key sentences of finished lessons, a Leitner
 * schedule. Pure functions; dates are local "YYYY-MM-DD" days.
 *
 * Finishing a lesson puts its key sentences in box 0, due the next day. A right answer moves a sentence up a box and
 * brings it back after 1, 3, 7, 21, then 60 days; a wrong one sends it back to box 0, due tomorrow. Each day's review
 * takes the 5 sentences due longest. The way a sentence is asked follows its box: hear it and choose its meaning, build
 * it from Telugu, build what you hear, then say it.
 */

export const REVIEW_INTERVALS = [1, 3, 7, 21, 60] as const;
export const REVIEW_SIZE = 5;

/** The review key of a lesson's k-th key sentence (its place in the wrap-up's key list). */
export const reviewKey = (dayId: string, k: number) => `${dayId}.k${k}`;

/** "YYYY-MM-DD" plus `n` days (calendar arithmetic, no time zone involved). */
export function addDays(date: string, n: number): string {
  const [y, m, d] = date.split("-").map(Number);
  const next = new Date(Date.UTC(y, m - 1, d + n));
  return next.toISOString().slice(0, 10);
}

/** Put a finished lesson's key sentences into the review (those already there keep their place). */
export function enterReview(p: Progress, day: PlayableDay, now: string): Progress {
  const count = day.wrapup?.key.length ?? 0;
  if (count === 0) return p;
  const review = { ...(p.review ?? {}) };
  const due = addDays(dateKey(new Date(now)), 1);
  for (let k = 0; k < count; k++) {
    const key = reviewKey(day.id, k);
    if (!review[key]) review[key] = { box: 0, due, at: now };
  }
  return { ...p, review };
}

/** The keys due on `today`, longest due first, at most `limit`. */
export function dueKeys(p: Progress, today: string, limit: number = REVIEW_SIZE): string[] {
  return Object.entries(p.review ?? {})
    .filter(([, r]) => r.due <= today)
    .sort(([ka, a], [kb, b]) => a.due.localeCompare(b.due) || a.at.localeCompare(b.at) || ka.localeCompare(kb))
    .slice(0, limit)
    .map(([key]) => key);
}

/** One answer in the review: right → the next box and its interval; wrong → box 0, due tomorrow. */
export function recordReview(p: Progress, key: string, correct: boolean, today: string, now: string): Progress {
  const before = p.review?.[key];
  if (!before) return p;
  const box = correct ? Math.min(before.box + 1, REVIEW_INTERVALS.length) : 0;
  const interval = correct ? REVIEW_INTERVALS[box - 1] : 1;
  const record: ReviewRecord = { box, due: addDays(today, interval), at: now };
  return { ...p, review: { ...p.review, [key]: record }, updatedAt: now };
}

/** The activity that asks one due sentence, by its box. Its id is the review key. */
function askFor(day: PlayableDay, k: number, box: number): Activity | null {
  const keys = day.wrapup?.key ?? [];
  const c = keys[k];
  if (!c) return null;
  const id = reviewKey(day.id, k);
  switch (Math.min(box, 3)) {
    case 0: {
      const others = keys.filter((_, i) => i !== k).map((x) => x.te).slice(0, 2);
      const options = shuffle([c.te, ...others], id);
      return { id, type: "listenChoose", say: c.en, prompt: { en: "Listen. What does it mean?", te: "విని, దాని అర్థం ఏంటో ఎంచుకోండి." }, options, answer: options.indexOf(c.te) };
    }
    case 1:
      return { id, type: "translate", te: c.te, answer: c.en, extra: c.extra };
    case 2:
      return { id, type: "arrange", answer: c.en, extra: c.extra, listen: true };
    default: {
      const steps = repeatSteps(c.en);
      return { id, type: "repeat", say: c.en, te: c.te, ...(steps ? { steps } : {}) };
    }
  }
}

/** Today's review items for the due keys, from the loaded days (a key whose day or sentence is gone is skipped). */
export function reviewItems(days: PlayableDay[], keys: string[], p: Progress): PracticeItem[] {
  const byId = new Map(days.map((d) => [d.id, d]));
  return keys.flatMap((key) => {
    const at = key.lastIndexOf(".k");
    const day = byId.get(key.slice(0, at));
    const activity = day ? askFor(day, Number(key.slice(at + 2)), p.review?.[key]?.box ?? 0) : null;
    return day && activity ? [{ dayId: day.id, activity }] : [];
  });
}

/** The day ids behind some review keys (to load only those). */
export const reviewDayIds = (keys: string[]) => [...new Set(keys.map((k) => k.slice(0, k.lastIndexOf(".k"))))];
