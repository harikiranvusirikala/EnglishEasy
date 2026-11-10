import { day as sentenceBasics } from "@/content/main/w01/sentence-basics";
import type { Activity, Lesson } from "@/content/types";

/** A copy of the real Day 1 with one deliberate mistake, keyed by the check code that must catch it. */
function broken(change: (lesson: Lesson) => void): Lesson {
  const copy = structuredClone(sentenceBasics);
  change(copy);
  return copy;
}

const practice = (l: Lesson, id: string): Activity => l.practice.find((a) => a.id === id) as Activity;

export const brokenLessons: Record<string, Lesson> = {
  "answer-range": broken((l) => {
    const p = practice(l, "p1");
    if (p.type === "choose") p.answer = 7;
  }),
  "blank-count": broken((l) => {
    const p = practice(l, "p2");
    if (p.type === "fillBlank") p.sentence = "We ___ ___ Telugu.";
  }),
  "options-distinct": broken((l) => {
    const p = practice(l, "p1");
    if (p.type === "choose") p.options = ["I eat rice.", "I eat rice.", "Eat I rice."];
  }),
  "why-repeats-sentence": broken((l) => {
    const p = practice(l, "p4");
    if (p.type === "findMistake" && p.why) p.why = { ...p.why, en: `${p.why.en.replace(/\.$/, "")}: ${p.fix}` };
  }),
  "seo-length": broken((l) => {
    l.seo.description = "x".repeat(161);
  }),
  tiles: broken((l) => {
    l.core[0].extra = ["eat"];
  }),
  "roleplay-good-reply": broken((l) => {
    l.roleplay.turns[0].replies.forEach((r) => (r.good = false));
  }),
  "key-range": broken((l) => {
    l.key = [0, 2, 9];
  }),
  "core-count": broken((l) => {
    l.core = l.core.slice(0, 5);
  }),
  "bi-identical": broken((l) => {
    l.tryToday = { en: "Same", te: "Same" };
  }),
  "telugu-script": broken((l) => {
    l.summary = { en: "Summary", te: "Only English here" };
  }),
  "grammar-key": broken((l) => {
    l.grammar = ["not-a-real-key"];
  }),
  "topic-key": broken((l) => {
    l.topics = ["not-a-topic"];
  }),
  "sentence-length": broken((l) => {
    l.core[0].en = "I eat rice every single morning with my friends.";
  }),
  "family-assumption": broken((l) => {
    const first = l.learn[0];
    if (first.type === "explain") first.examples[0].en = "How is your wife?";
  }),
  "activity-count": broken((l) => {
    l.learn = l.learn.slice(0, 1);
    l.practice = l.practice.slice(0, 1);
  }),
  "id-unique": broken((l) => {
    l.practice[1].id = l.practice[0].id;
  }),
  "situation-expected": broken((l) => {
    const s = l.speak[0];
    if (s.type === "situation") s.expected = ["Something else."];
  }),
  schema: broken((l) => {
    (l as unknown as { title: unknown }).title = { en: "Only English" };
  }),
  "day-id": broken((l) => {
    l.id = "Not Kebab Case";
  }),
};
