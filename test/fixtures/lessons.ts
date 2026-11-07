import type { Lesson } from "@/content/types";

/** Builds a small valid lesson for generator tests; `n` makes ids, sentences and words unique. */
export function makeLesson(id: string, overrides: Partial<Lesson> = {}): Lesson {
  const core = Array.from({ length: 7 }, (_, i) => ({
    en: `${id} word${i} here.`.replace(/-/g, ""),
    te: `${id} ${i} తెలుగు వాక్యం`,
    extra: ["am"],
  }));
  return {
    id,
    kind: "lesson",
    title: { en: id, te: `${id} పాఠం` },
    subtitle: "Fixture",
    summary: { en: "A fixture lesson.", te: "ఒక ఉదాహరణ పాఠం." },
    seo: { title: "Fixture", description: "A fixture lesson." },
    pattern: [
      { text: "I", role: "who" },
      { text: "eat", role: "action" },
    ],
    core,
    key: [0, 1, 2],
    tryToday: { en: "Try it.", te: "ప్రయత్నించండి." },
    words: [1, 2, 3, 4].map((n) => ({ en: `${id}-w${n}`, te: `పదం ${n}` })),
    grammar: ["word-order"],
    topics: ["food"],
    learn: [
      { id: "l1", type: "dontSay", wrong: "I rice eat.", right: "I eat rice.", why: { en: "Order.", te: "వరుస." } },
    ],
    practice: [
      { id: "p1", type: "choose", prompt: { en: "Choose.", te: "ఎంచుకోండి." }, options: ["a", "b"], answer: 0 },
      { id: "p2", type: "findMistake", sentence: "We are speak.", wrongIndex: 1, fix: "We speak.", why: { en: "No are.", te: "are వద్దు." } },
    ],
    speak: [],
    roleplay: {
      id: "r1",
      type: "roleplay",
      title: { en: "Talk", te: "మాట" },
      scene: { en: "A scene.", te: "ఒక సన్నివేశం." },
      partner: { en: "Padma", te: "పద్మ" },
      skills: [],
      turns: [
        {
          partner: "Hello!",
          te: "హలో!",
          hint: { en: "Say hello.", te: "హలో చెప్పండి." },
          replies: [
            { say: "Hello.", good: true },
            { say: "Hi hello am.", good: false },
          ],
        },
      ],
    },
    ...overrides,
  };
}
