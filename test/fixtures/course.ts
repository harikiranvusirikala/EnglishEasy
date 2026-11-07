import type { Course } from "@/learning/recommend";
import type { Activity, PlayableDay, SectionKind } from "@/content/types";

/** A small course for engine tests: weeks 12–14 in one stage (week 14 not released) and one track with two days. */

const bi = (en: string) => ({ en, te: `${en} తె` });
const ref = (id: string) => ({ id, kind: "lesson" as const, title: bi(id) });

export const fixtureCourse: Course = {
  stages: [
    {
      n: 3,
      title: bi("Stage"),
      canDo: bi("Can do"),
      firstWeek: 12,
      lastWeek: 14,
      weeks: [
        { n: 12, title: bi("Week 12"), released: true, days: [ref("a1"), ref("a2")] },
        { n: 13, title: bi("Week 13"), released: true, days: [ref("b1")] },
        { n: 14, title: bi("Week 14"), released: false, days: [] },
      ],
    },
  ],
  tracks: [
    { id: "grandchildren", title: bi("Grandchildren"), forWho: bi("For"), offerAtWeek: 13, weeks: [{ n: 1, title: bi("T1"), released: true, days: [ref("g1"), ref("g2")] }] },
    { id: "abroad", title: bi("Abroad"), forWho: bi("For"), offerAtWeek: 13, weeks: [{ n: 1, title: bi("T1"), released: false, days: [] }] },
  ],
};

const choose = (id: string): Activity => ({ id, type: "choose", prompt: bi("Pick"), options: ["a", "b"], answer: 0 });

/** A playable day: `shape` gives the activity count per section (a wrap-up with none is added). Ids are `${id}.${kind}${n}`. */
export function makePlayable(id: string, shape: Partial<Record<SectionKind, number>>, optional?: SectionKind[]): PlayableDay {
  const sections = (Object.entries(shape) as [SectionKind, number][]).map(([kind, n]) => ({
    kind,
    activities: Array.from({ length: n }, (_, i) => choose(`${id}.${kind}${i + 1}`)),
  }));
  return { id, kind: "lesson", title: bi(id), sections: [...sections, { kind: "wrapup", activities: [] }], ...(optional ? { optional } : {}) };
}

/** 2 learn + 2 practice + 1 speak = 5 activities. */
export const standardShape = { learn: 2, practice: 2, speak: 1 } as const;
