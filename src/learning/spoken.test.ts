import { describe, expect, it } from "vitest";
import type { PlayableDay } from "@/content/types";
import { accentDialogue, samplePassage, sampleStory } from "../../test/fixtures/stage3";
import { askText, passageText, spokenTexts } from "./spoken";

const prompt = { en: 'What does "I walk every morning." mean?', te: '"I walk every morning." అంటే ఏంటి?' };

describe("askText", () => {
  it("reads the whole prompt when it holds the sentence, else the sentence", () => {
    expect(askText(prompt, "I walk every morning.")).toBe(prompt);
    expect(askText({ en: "Which sentence did you hear?", te: "మీరు ఏ వాక్యం విన్నారు?" }, "I eat rice.")).toBe("I eat rice.");
    expect(askText(prompt, undefined)).toBeUndefined();
  });
});

describe("spokenTexts", () => {
  const day: PlayableDay = {
    id: "d",
    kind: "lesson",
    title: { en: "Day", te: "రోజు" },
    sections: [
      {
        kind: "warmup",
        activities: [{ id: "d.w1", type: "choose", prompt, say: "I walk every morning.", options: ["నేను నడుస్తాను.", "x"], answer: 0 }],
      },
      {
        kind: "learn",
        activities: [
          { id: "d.l1", type: "explain", heading: prompt, body: prompt, examples: [{ en: "I eat rice.", te: "నేను అన్నం తింటాను." }] },
          { id: "d.l2", type: "dontSay", wrong: "He go.", right: "He goes.", why: prompt },
        ],
      },
      {
        kind: "practice",
        activities: [
          { id: "d.p1", type: "fillBlank", sentence: "She ___ tea.", options: ["drinks", "drink"], answer: 0 },
          { id: "d.p2", type: "match", pairs: [{ en: "tea", te: "టీ" }] },
          {
            id: "d.p3",
            type: "dialogue",
            title: prompt,
            lines: [
              { speaker: { en: "Asha", te: "ఆశ" }, voice: "a", en: "Hello.", te: "హలో." },
              { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "Hello.", te: "హలో." },
            ],
            questions: [{ prompt, options: ["Asha", "Ravi"], answer: 0 }],
          },
        ],
      },
    ],
    wrapup: { key: [{ en: "I eat rice.", te: "నేను అన్నం తింటాను." }], tryToday: prompt, words: [] },
  };

  it("lists each spoken text once per voice, both prompt languages included", () => {
    expect(spokenTexts(day)).toEqual([
      { text: prompt.en, voice: "a" },
      { text: prompt.te, voice: "a" },
      { text: "I walk every morning.", voice: "a" },
      { text: "I eat rice.", voice: "a" },
      { text: "He goes.", voice: "a" },
      { text: "She drinks tea.", voice: "a" },
      { text: "Hello.", voice: "a" },
      { text: "Hello.", voice: "b" },
      { text: "Asha", voice: "a" },
    ]);
  });
});

describe("spokenTexts for a story, a passage and accent voices", () => {
  it("lists each story part in the teller's voice, the whole passage, the answers and reasons, and accent lines in their voice", () => {
    const day: PlayableDay = {
      id: "s",
      kind: "review",
      title: { en: "Review", te: "రివ్యూ" },
      sections: [{ kind: "practice", activities: [sampleStory, samplePassage, accentDialogue] }],
    };
    const texts = spokenTexts(day);
    expect(texts).toContainEqual({ text: sampleStory.parts[0].en, voice: "a" });
    expect(texts).toContainEqual({ text: "A lost purse on a bus", voice: "a" });
    expect(texts).toContainEqual({ text: passageText(samplePassage.lines), voice: "a" });
    expect(texts).toContainEqual({ text: samplePassage.questions[1].why!.te, voice: "a" });
    expect(texts).toContainEqual({ text: accentDialogue.lines[0].en, voice: "us-m" });
    expect(texts).toContainEqual({ text: accentDialogue.lines[4].en, voice: "gb-f" });
  });
});
