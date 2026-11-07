import type { Activity, CoreSentence, PlayableDay } from "@/content/types";
import { dayIdOf, type Progress } from "./progress";

/** Pure helpers for the Practice hub (VISION §8, §10.8). Days are passed in already loaded. */

export type PracticeItem = { dayId: string; activity: Activity };

const flat = (day: PlayableDay): PracticeItem[] => day.sections.flatMap((s) => s.activities.map((activity) => ({ dayId: day.id, activity })));

/** Ids of the days that hold a mistake, in the order the mistakes were added (so the hub loads only these). */
export function mistakeDayIds(p: Progress): string[] {
  return [...new Set(Object.keys(p.mistakes).map(dayIdOf))];
}

/** Activities answered wrong twice, oldest mistake first. A mistake whose activity no longer exists is skipped. */
export function mistakeItems(days: PlayableDay[], p: Progress): PracticeItem[] {
  const all = new Map(days.flatMap(flat).map((item) => [item.activity.id, item]));
  return Object.entries(p.mistakes)
    .sort(([, a], [, b]) => a.localeCompare(b))
    .flatMap(([id]) => all.get(id) ?? []);
}

/** The days the learner has finished, in the order given. */
export function finishedDays(days: PlayableDay[], p: Progress): PlayableDay[] {
  return days.filter((d) => d.id in p.completed);
}

/** Role plays of finished days (one per day). */
export function rolePlayItems(days: PlayableDay[]): PracticeItem[] {
  return days.flatMap((d) => flat(d).filter((i) => i.activity.type === "roleplay"));
}

/** Listen-and-repeat drills of finished days. */
export function speakingItems(days: PlayableDay[]): PracticeItem[] {
  return days.flatMap((d) => flat(d).filter((i) => i.activity.type === "repeat"));
}

export type SentenceGroup = { dayId: string; title: PlayableDay["title"]; sentences: CoreSentence[] };

/** My Sentences: the key sentences of each finished lesson (days without a wrap-up are left out). */
export function sentenceGroups(days: PlayableDay[]): SentenceGroup[] {
  return days.flatMap((d) => (d.wrapup && d.wrapup.key.length > 0 ? [{ dayId: d.id, title: d.title, sentences: d.wrapup.key }] : []));
}
