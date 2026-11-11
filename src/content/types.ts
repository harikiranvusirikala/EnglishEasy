/** Content types (BUILD_PLAN A3). Content is data; the engine in `src/learning/` and the generator only read it. */

import type { AudioVoice } from "../learning/audio-manifest";

/** A recorded voice: "a" a woman, "b" a man; the accent voices ("us-f", "us-m", "gb-f", "gb-m") only where a lesson is about accents. */
export type Voice = AudioVoice;

export type Bi = { en: string; te: string }; // English + Telugu (Telugu mode text may mix in English words)
export type Chip = { text: string; role: "who" | "action" | "what" | "when" };
export type CoreSentence = { en: string; te: string; extra?: string[] }; // extra = distractor tiles

type Base = { id: string }; // short id unique within the day ("p1", "s1"); the full id is `${dayId}.${id}`

/**
 * A reply option. `react`: what the partner says back to a not-good reply before the correction (optional, spoken in
 * the partner's voice), e.g. "Cheating? Please don't say that. Let me count again."
 */
export type Reply = { say: string; good: boolean; skill?: string; react?: Bi; fixIt?: FixIt };

/**
 * The Fix-it strand (CURRICULUM §2): the ten errors Telugu speakers keep making, tagged on the item that targets one
 * (a Don't say card, a question, a not-good reply), so each comes back on a schedule.
 */
export const FIX_IT = {
  be: { n: 1, from: 1, label: "Missing am / is / are" },
  "he-she-s": { n: 2, from: 7, label: "He / she without -s" },
  question: { n: 3, from: 1, label: "Do-support and question word order" },
  article: { n: 4, from: 5, label: "Missing or extra article" },
  plural: { n: 5, from: 5, label: "Plurals after numbers; uncountables" },
  preposition: { n: 6, from: 3, label: "Wrong or extra preposition" },
  "state-ing": { n: 7, from: 1, label: "-ing for states and habits" },
  duration: { n: 8, from: 31, label: "Present tense for duration" },
  "negative-answer": { n: 9, from: 34, label: "Yes / no to negative questions" },
  "indian-english": { n: 10, from: 1, label: "Indian-English habits" },
} as const;
export type FixIt = keyof typeof FIX_IT;

export type Turn = {
  partner: string;
  te: string;
  hint: Bi; // what to say, never the reply itself ("Ask the price politely.")
  replies: Reply[]; // 2–3 options (hidden until "Show replies"); good ones are also accepted by voice
};

export type RolePlay = {
  type: "roleplay";
  title: Bi;
  scene: Bi;
  partner: Bi;
  voice?: Voice; // the partner's recorded voice: "b" (or a man's accent voice) for a man, else "a"
  skills: { id: string; label: Bi }[];
  turns: Turn[];
};

export type Activity = Base &
  (
    | { type: "explain"; heading: Bi; body: Bi; bridge?: { te: string[]; en: Chip[] }; examples: CoreSentence[] }
    | { type: "whenToUse"; heading: Bi; items: { form: string; useFor: Bi; example: CoreSentence }[] }
    | { type: "dontSay"; wrong: string; right: string; why: Bi; fixIt?: FixIt }
    | { type: "choose"; prompt: Bi; say?: string; options: string[]; answer: number; why?: Bi; fixIt?: FixIt }
    | { type: "fillBlank"; sentence: string /* one ___ */; te?: string; options: string[]; answer: number; why?: Bi; fixIt?: FixIt }
    /** `listen`: build what you hear (the sentence plays; no Telugu, no text). */
    | { type: "arrange"; te?: string; answer: string; extra?: string[]; listen?: true }
    | { type: "translate"; te: string; answer: string; accept?: string[]; extra?: string[] }
    | { type: "match"; pairs: { en: string; te: string }[] } // 3–4 pairs
    /** `wrongIndex` = index of the wrong word in `sentence.split(" ")`; `fix` = the whole corrected sentence. */
    | { type: "findMistake"; sentence: string; wrongIndex: number; fix: string; why: Bi; fixIt?: FixIt }
    | { type: "listenChoose"; say: string; prompt: Bi; options: string[]; answer: number }
    /** `steps`: a long sentence said in parts, built up from its end ("yesterday" → "the market yesterday" → all). */
    | { type: "repeat"; say: string; te: string; steps?: string[] }
    /** Sound of the week (a Learn card), from `sounds.ts`. */
    | { type: "sound"; sound: SoundCard }
    /** Which word did you hear? Two words one sound apart; `answer` is the one played. */
    | { type: "soundPair"; words: [Word, Word]; answer: 0 | 1 }
    | { type: "situation"; situation: Bi; expected: string[]; options: string[]; answer: number; fixIt?: FixIt }
    | {
        type: "dialogue";
        title: Bi;
        lines: { speaker: Bi; voice: Voice; en: string; te: string }[];
        questions: { prompt: Bi; options: string[]; answer: number }[];
      }
    /**
     * Listen to a story (CURRICULUM §1a; owner, 2026-11-11): one teller, heard first in `parts` (paragraphs of 2–5
     * sentences, each with its Telugu), question 1 by ear, then the words and the detail questions. Ends a Review Day.
     */
    | {
        type: "story";
        title: Bi;
        teller: Bi;
        voice: Voice;
        parts: { en: string; te: string }[];
        questions: { prompt: Bi; options: string[]; answer: number }[];
      }
    /**
     * Read a short passage (VISION §5; owner, 2026-11-11): a letter, notice, news item or recipe of 6–12 lines, read
     * first (Listen reads it all), then 2–3 questions with the passage folded above them. Scored as one item.
     */
    | {
        type: "passage";
        kind: "letter" | "notice" | "news" | "recipe";
        heading: string;
        lines: string[];
        questions: { prompt: Bi; options: string[]; answer: number; why?: Bi }[];
        fixIt?: FixIt;
      }
    /**
     * Read it (CURRICULUM §1a): something real to read, drawn as a card (a message, a label, a sign), then one question.
     * `heading`: the sender, the product or the sign's title; `lines`: the text; `say`: read aloud after Check (else the answer).
     */
    | { type: "readIt"; kind: "message" | "label" | "sign"; heading: string; lines: string[]; prompt: Bi; options: string[]; answer: number; why?: Bi; say?: string; fixIt?: FixIt }
    /** A checkpoint's speaking mission (CURRICULUM §2b): talk for `seconds` with prompts to lean on; counted by time, never judged. */
    | { type: "mission"; title: Bi; prompts: string[]; seconds: number }
    | RolePlay
  );

export type Word = { en: string; te: string };

/** A sound Telugu speakers find hard (CURRICULUM §2a): two sides (v | w), how to make each, example words. */
export type SoundCard = {
  title: string; // "v and w"
  tip: Bi; // why it is hard, in one line
  sides: [SoundSide, SoundSide];
  pair: [string, string]; // "Hear the difference": vest — west
};
export type SoundSide = { label: string; how: Bi; words: string[] };

export type SectionKind = "warmup" | "learn" | "practice" | "speak" | "roleplay" | "wrapup";

export type Lesson = {
  id: string;
  kind: "lesson";
  title: Bi;
  subtitle: string;
  summary: Bi;
  seo: { title: string; description: string }; // description ≤ 160 chars
  pattern: Chip[];
  core: CoreSentence[]; // 6–8, simplest first; append-only after release
  key: number[]; // 3–4 indexes into core → My Sentences
  tryToday: Bi;
  words: { en: string; te: string }[]; // 4–6 new words, each introduced once in the course
  grammar: string[]; // keys from grammar.ts
  topics: string[]; // keys from topics.ts
  learn: Activity[]; // explain, whenToUse, dontSay
  practice: Activity[]; // 3–4 authored (choose, fillBlank, findMistake, …)
  speak: Activity[]; // 1–2 authored situations
  roleplay: RolePlay & { id: string };
  optional?: SectionKind[];
};

export type ConversationDay = {
  id: string;
  kind: "conversation";
  title: Bi;
  summary: Bi;
  topics: string[];
  dialogue: Activity;
  roleplays: Activity[];
  situations: Activity[];
};

export type ReviewDay = { id: string; kind: "review"; title: Bi; extras?: Activity[] };

export type Day = Lesson | ConversationDay | ReviewDay;

/**
 * What the generator produces and the player loads (`public/content/<dayId>.json`).
 * Every `id` in a playable day is the FULL id (`${dayId}.p1`, `${dayId}.g-arrange-0`).
 * The Wrap-up section holds no activities: the player shows the summary, key sentences and "Try it today" from `lesson`.
 */
export type PlayableSection = { kind: SectionKind; activities: Activity[] };
export type PlayableDay = {
  id: string;
  kind: Day["kind"];
  title: Bi;
  sections: PlayableSection[];
  /** Only for lessons: sections that need not be finished for the day to be complete (VISION §9.2). */
  optional?: SectionKind[];
  /** Only for lessons: the pieces the Wrap-up and complete screens show. */
  wrapup?: { key: CoreSentence[]; tryToday: Bi; words: { en: string; te: string }[] };
};
