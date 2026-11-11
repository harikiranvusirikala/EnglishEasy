import { describe, expect, it } from "vitest";
import { day as sentenceBasics } from "./main/w01/sentence-basics";
import { accentDialogue, samplePassage, sampleStory } from "../../test/fixtures/stage3";
import { checkDay } from "./checks";
import { expandLesson } from "./generate";
import type { Activity, Lesson } from "./types";

/** Day 1 with practice item p2 (and p3) replaced, checked at Stage 3 — the counts stay the same. */
function problemsWith(p2: Activity, p3?: Activity): string[] {
  const lesson: Lesson = structuredClone(sentenceBasics);
  lesson.practice = lesson.practice.map((a) => (a.id === "p2" ? { ...p2, id: "p2" } : a.id === "p3" && p3 ? { ...p3, id: "p3" } : a));
  return checkDay(lesson, expandLesson(lesson, []), { stage: 3, mainPath: true });
}

describe("story, passage and accent voices (owner, 2026-11-11)", () => {
  it("accept the samples", () => {
    expect(problemsWith(samplePassage, sampleStory)).toEqual([]);
    expect(problemsWith(accentDialogue)).toEqual([]);
  });

  it("catch a teller whose voice does not match", () => {
    expect(problemsWith({ ...sampleStory, teller: { en: "Ramana", te: "రమణ" } }).some((p) => p.startsWith("voice:"))).toBe(true);
    expect(problemsWith({ ...sampleStory, teller: { en: "Ramana", te: "రమణ" }, voice: "gb-m" }).some((p) => p.startsWith("voice:"))).toBe(false);
  });

  it("catch a story sentence over the stage limit and a part without Telugu", () => {
    const long = { en: "Then the kind young man who was sitting next to me on the crowded bus smiled.", te: "తర్వాత ఆయన నవ్వారు." };
    expect(problemsWith({ ...sampleStory, parts: [...sampleStory.parts, long] }).some((p) => p.startsWith("sentence-length:"))).toBe(true);
    expect(problemsWith({ ...sampleStory, parts: [...sampleStory.parts.slice(1), { en: "It was late.", te: "It was late." }] }).some((p) => p.startsWith("bi-identical:"))).toBe(true);
  });

  it("catch a passage symbol the voice would read, and a reason that ends with the answer", () => {
    expect(problemsWith({ ...samplePassage, lines: [...samplePassage.lines.slice(0, -1), "Fee: ₹50 only."] }).some((p) => p.startsWith("audio-symbols:"))).toBe(true);
    const q = samplePassage.questions[2];
    const repeats = { ...samplePassage, questions: [samplePassage.questions[0], { ...q, why: { en: `The sixth line says so: ${q.options[q.answer]}.`, te: q.why!.te } }] };
    expect(problemsWith(repeats).some((p) => p.startsWith("why-repeats-sentence:"))).toBe(true);
  });

  it("catch a woman speaking in a man's accent voice", () => {
    const lines = accentDialogue.lines.map((l) => (l.speaker.en === "Mary" ? { ...l, voice: "gb-m" as const } : l));
    expect(problemsWith({ ...accentDialogue, lines }).some((p) => p.startsWith("voice:"))).toBe(true);
  });
});
