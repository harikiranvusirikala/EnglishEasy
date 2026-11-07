/** Content types (BUILD_PLAN A3). Content is data; the engine in `src/learning/` and the generator only read it. */

export type Bi = { en: string; te: string }; // English + Telugu (Telugu mode text may mix in English words)
export type Chip = { text: string; role: "who" | "action" | "what" | "when" };
export type CoreSentence = { en: string; te: string; extra?: string[] }; // extra = distractor tiles

type Base = { id: string }; // short id unique within the day ("p1", "s1"); the full id is `${dayId}.${id}`

export type Turn = {
  partner: string;
  te: string;
  hint: Bi;
  replies: { say: string; good: boolean; skill?: string }[]; // 2–3 tap options; good ones are also accepted by voice
};

export type RolePlay = {
  type: "roleplay";
  title: Bi;
  scene: Bi;
  partner: Bi;
  skills: { id: string; label: Bi }[];
  turns: Turn[];
};

export type Activity = Base &
  (
    | { type: "explain"; heading: Bi; body: Bi; bridge?: { te: string[]; en: Chip[] }; examples: CoreSentence[] }
    | { type: "whenToUse"; heading: Bi; items: { form: string; useFor: Bi; example: CoreSentence }[] }
    | { type: "dontSay"; wrong: string; right: string; why: Bi }
    | { type: "choose"; prompt: Bi; say?: string; options: string[]; answer: number; why?: Bi }
    | { type: "fillBlank"; sentence: string /* one ___ */; te?: string; options: string[]; answer: number; why?: Bi }
    | { type: "arrange"; te?: string; answer: string; extra?: string[] }
    | { type: "translate"; te: string; answer: string; accept?: string[]; extra?: string[] }
    | { type: "match"; pairs: { en: string; te: string }[] } // 3–4 pairs
    /** `wrongIndex` = index of the wrong word in `sentence.split(" ")`; `fix` = the whole corrected sentence. */
    | { type: "findMistake"; sentence: string; wrongIndex: number; fix: string; why: Bi }
    | { type: "listenChoose"; say: string; prompt: Bi; options: string[]; answer: number }
    | { type: "repeat"; say: string; te: string }
    | { type: "situation"; situation: Bi; expected: string[]; options: string[]; answer: number }
    | {
        type: "dialogue";
        title: Bi;
        lines: { speaker: Bi; voice: "a" | "b"; en: string; te: string }[];
        questions: { prompt: Bi; options: string[]; answer: number }[];
      }
    | RolePlay
  );

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
