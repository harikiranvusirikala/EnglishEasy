import { describe, expect, it } from "vitest";
import type { PlayableDay } from "@/content/types";
import { emptyProgress } from "./progress";
import { finishedDays, mistakeDayIds, mistakeItems, rolePlayItems, sentenceGroups, speakingItems } from "./practice";

const bi = (en: string) => ({ en, te: `${en} తె` });
const day = (id: string): PlayableDay => ({
  id,
  kind: "lesson",
  title: bi(id),
  wrapup: { key: [{ en: `${id} key`, te: "కీ" }], tryToday: bi("t"), words: [] },
  sections: [
    { kind: "practice", activities: [{ id: `${id}.p1`, type: "choose", prompt: bi("q"), options: ["a", "b"], answer: 0 }, { id: `${id}.p2`, type: "choose", prompt: bi("q"), options: ["a", "b"], answer: 1 }] },
    { kind: "speak", activities: [{ id: `${id}.r1`, type: "repeat", say: "Hello.", te: "హలో" }] },
    { kind: "roleplay", activities: [{ id: `${id}.rp`, type: "roleplay", title: bi("rp"), scene: bi("s"), partner: bi("p"), skills: [], turns: [] }] },
    { kind: "wrapup", activities: [] },
  ],
});
const a = day("a");
const b = day("b");
const done = { at: "x", correct: 1, total: 1 };

describe("practice helpers", () => {
  const p = { ...emptyProgress(), mistakes: { "b.p1": "2026-11-02", "a.p2": "2026-11-01" }, completed: { a: done } };

  it("lists mistakes oldest first and the days that hold them", () => {
    expect(mistakeItems([a, b], p).map((i) => i.activity.id)).toEqual(["a.p2", "b.p1"]);
    expect(mistakeDayIds(p).sort()).toEqual(["a", "b"]);
  });

  it("skips a mistake whose activity is gone", () => {
    expect(mistakeItems([a], { ...p, mistakes: { "a.zzz": "1" } })).toEqual([]);
  });

  it("uses finished days only for role plays, drills and sentences", () => {
    const fin = finishedDays([a, b], p);
    expect(fin.map((d) => d.id)).toEqual(["a"]);
    expect(rolePlayItems(fin).map((i) => i.activity.id)).toEqual(["a.rp"]);
    expect(speakingItems(fin).map((i) => i.activity.id)).toEqual(["a.r1"]);
    expect(sentenceGroups(fin)).toEqual([{ dayId: "a", title: bi("a"), sentences: [{ en: "a key", te: "కీ" }] }]);
  });
});
