import { grammar } from "./grammar";
import { topics } from "./topics";
import { activityCount, answerWords, buildTiles } from "./generate";
import { daySchema } from "./schema";
import { isManVoice } from "../learning/audio-manifest";
import { FIX_IT, type Activity, type Bi, type Day, type FixIt, type Lesson, type PlayableDay } from "./types";

/**
 * The content rules of BUILD_PLAN A3: shape, structure and writing-quality checks.
 * Each check returns messages that start with a code ("answer-range: …"); an empty list means the day is fine.
 * `content.test.ts` runs them on every written day and on deliberately broken fixtures (so the checks are tested too).
 */

export type DayContext = { stage: number | null; mainPath: boolean };

const TELUGU = /[ఀ-౿]/;
const MAX_WORDS_BY_STAGE: Record<number, number> = { 1: 7, 2: 10, 3: 14 };
const MIN_EXPANDED = 14;
const MAX_EXPANDED = 20; // 19, plus the Sound of the week card on a week's first lesson

/** Explanations give the reason, not a restated answer (CURRICULUM §1 "why formula"; content review 2026-11-09). */
export const MIN_WHY_WORDS = 6;

/**
 * Does an explanation end with the sentence the screen has just read (after ": ", ". ", ", " or a dash)? After Check
 * the sentence plays, then the explanation, so a copy at its end is heard twice, and on "Almost" it gives the answer
 * away (owner, 2026-11-10). One-word answers explained in words ("The past is went.") are fine.
 */
export function whyRepeatsSentence(why: string, sentence: string): boolean {
  const core = sentence.trim().replace(/[.?!]+$/, "");
  if (core.split(/\s+/).length < 2) return false;
  const escaped = core.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:[:.,—–])\\s+${escaped}[.?!]*\\s*$`, "i").test(why);
}

/** The sentence a question reads before its explanation after Check (as `spokenTexts` lists it). */
function readBeforeWhy(a: Activity): string | undefined {
  switch (a.type) {
    case "choose":
    case "readIt":
      return a.say ?? a.options[a.answer];
    case "fillBlank":
      return a.sentence.replace("___", a.options[a.answer] ?? "");
    case "findMistake":
      return a.fix;
    default:
      return undefined;
  }
}

/** The cast (CURRICULUM §1): a man's lines are recorded in voice "b", a woman's in voice "a". */
export const MEN = ["Ramana", "Venkat", "Prasad", "Ravi", "Mohan", "Srinivas", "Suresh", "Narayana", "Imran", "Rahim", "John", "David", "Raju", "Krishna", "Gopal", "Ramesh", "Satish", "Joseph", "Kumar", "Arjun", "Rohan", "Daniel"];
export const WOMEN = ["Lakshmi", "Kamala", "Usha", "Padma", "Sita", "Anitha", "Rani", "Jyothi", "Swapna", "Salma", "Fatima", "Mary", "Grace", "Sarala", "Radha", "Geetha", "Kavitha", "Ayesha", "Ruth", "Diya", "Meera", "Zoya"];
/** The names a learner may give as their own: they suit anyone (CURRICULUM §1). */
export const LEARNER_NAMES = ["Kiran", "Sai"];

/** Bookish or wrong Telugu the style guide replaces (CURRICULUM §1 "Telugu register"). */
export const TELUGU_AVOID: { text: string; use: string }[] = [
  { text: "ఏమిటి", use: "ఏంటి" },
  { text: "పని పదం", use: "verb" },
  { text: "కాదు అని చెప్పండి", use: "లేదు అని చెప్పండి (కాదు is only for who or what something is)" },
  { text: "కాదని చెప్పండి", use: "లేదని చెప్పండి" },
];

/** Characters a voice would read out or stumble on, in anything read aloud (CURRICULUM §1 "audio"). */
const AUDIO_SYMBOLS = /[()/…₹]|\.\.\./;

const nameIn = (text: string, names: string[]) => names.find((n) => new RegExp(`\\b${n}\\b`).test(text));
/** A paragraph's sentences (a story part, a passage), for the stage length limit. */
const sentencesIn = (text: string) => text.split(/(?<=[.?!])\s+/).filter((t) => t.trim());
const plainWords = (s: string) => s.toLowerCase().replace(/[^a-z' ]+/g, " ").replace(/\s+/g, " ").trim();

/** Phrases that assume the learner has a family; only optional tracks may use them (CURRICULUM §1). */
export const FAMILY_ASSUMPTIONS = [
  "your son",
  "your daughter",
  "your grandchild",
  "your grandchildren",
  "your grandson",
  "your granddaughter",
  "your husband",
  "your wife",
  "your spouse",
  "your children",
  "your kids",
  "my son",
  "my daughter",
  "my grandson",
  "my granddaughter",
  "my grandchild",
  "my grandchildren",
  "my husband",
  "my wife",
  "my children",
  "my kids",
];

const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Every string a learner can read in a day. */
function allText(day: Day): string[] {
  const out: string[] = [];
  const walk = (value: unknown) => {
    if (typeof value === "string") out.push(value);
    else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === "object") Object.values(value).forEach(walk);
  };
  walk(day);
  return out;
}

/** Every `Bi` object in a day (any object with exactly the keys `en` and `te`). */
function allBi(day: Day): Bi[] {
  const out: Bi[] = [];
  const walk = (value: unknown) => {
    if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === "object") {
      const keys = Object.keys(value);
      const { en, te } = value as Record<string, unknown>;
      if (keys.length === 2 && typeof en === "string" && typeof te === "string") out.push(value as Bi);
      Object.values(value).forEach(walk);
    }
  };
  walk(day);
  return out;
}

function wordCount(sentence: string): number {
  return sentence.trim().split(/\s+/).length;
}

const norm = (s: string) => s.trim().toLowerCase();

function optionProblems(where: string, options: string[], answer: number): string[] {
  const out: string[] = [];
  if (!Number.isInteger(answer) || answer < 0 || answer >= options.length) {
    out.push(`answer-range: ${where} has answer ${answer} but ${options.length} options`);
  }
  if (new Set(options.map(norm)).size !== options.length) {
    out.push(`options-distinct: ${where} has options that are the same (a wrong option equals the answer or another option)`);
  }
  return out;
}

/** The English sentences a learner reads or says, for the stage length limit. */
function sentencesOf(a: Activity): string[] {
  switch (a.type) {
    case "explain":
      return a.examples.map((e) => e.en);
    case "whenToUse":
      return a.items.map((i) => i.example.en);
    case "dontSay":
      return [a.wrong, a.right];
    case "arrange":
    case "translate":
      return [a.answer];
    case "repeat":
    case "listenChoose":
      return [a.say];
    case "situation":
      return a.expected;
    case "roleplay":
      return a.turns.flatMap((t) => [t.partner, ...t.replies.flatMap((r) => [r.say, ...(r.react ? [r.react.en] : [])])]);
    case "findMistake":
      return [a.fix];
    case "story":
      return a.parts.flatMap((p) => sentencesIn(p.en));
    case "passage":
      return a.lines.flatMap(sentencesIn);
    default:
      return [];
  }
}

/** Lines a voice reads in a role play, dialogue or situation (partner lines, replies, reactions). */
function spokenOf(a: Activity): string[] {
  switch (a.type) {
    case "roleplay":
      return a.turns.flatMap((t) => [t.partner, ...t.replies.flatMap((r) => [r.say, ...(r.react ? [r.react.en] : [])])]);
    case "dialogue":
      return a.lines.map((l) => l.en);
    case "story":
      return a.parts.map((p) => p.en);
    case "passage":
      return a.lines;
    case "situation":
      return [...a.options, ...a.expected];
    default:
      return [];
  }
}

/** What the learner says as themselves: good role-play replies and a situation's answers. */
function learnerSays(a: Activity): string[] {
  if (a.type === "roleplay") return a.turns.flatMap((t) => t.replies.filter((r) => r.good).map((r) => r.say));
  if (a.type === "situation") return a.expected;
  return [];
}

function activityProblems(a: Activity, where: string, stage: number | null): string[] {
  const out: string[] = [];
  switch (a.type) {
    case "choose":
    case "listenChoose":
    case "readIt":
      out.push(...optionProblems(where, a.options, a.answer));
      break;
    case "fillBlank": {
      out.push(...optionProblems(where, a.options, a.answer));
      const blanks = a.sentence.split("___").length - 1;
      if (blanks !== 1) out.push(`blank-count: ${where} has ${blanks} "___" in "${a.sentence}" (needs exactly one)`);
      break;
    }
    case "situation": {
      out.push(...optionProblems(where, a.options, a.answer));
      const right = a.options[a.answer];
      if (right !== undefined && !a.expected.includes(right)) {
        out.push(`situation-expected: ${where} correct option "${right}" is not in its expected answers`);
      }
      break;
    }
    case "findMistake": {
      const words = a.sentence.split(" ");
      if (!Number.isInteger(a.wrongIndex) || a.wrongIndex < 0 || a.wrongIndex >= words.length) {
        out.push(`answer-range: ${where} wrongIndex ${a.wrongIndex} is outside "${a.sentence}"`);
      }
      if (a.fix === a.sentence) out.push(`mistake-fix: ${where} fix is the same as the sentence`);
      break;
    }
    case "dialogue":
      a.questions.forEach((q, i) => out.push(...optionProblems(`${where} question ${i + 1}`, q.options, q.answer)));
      a.lines.forEach((l) => {
        if (nameIn(l.speaker.en, MEN) && !isManVoice(l.voice)) out.push(`voice: ${where} ${l.speaker.en} is a man; his lines need voice "b"`);
        if (nameIn(l.speaker.en, WOMEN) && isManVoice(l.voice)) out.push(`voice: ${where} ${l.speaker.en} is a woman; her lines need voice "a"`);
      });
      break;
    case "story":
      a.questions.forEach((q, i) => out.push(...optionProblems(`${where} question ${i + 1}`, q.options, q.answer)));
      if (nameIn(a.teller.en, MEN) && !isManVoice(a.voice)) out.push(`voice: ${where} the teller ${a.teller.en} is a man; set voice: "b"`);
      if (nameIn(a.teller.en, WOMEN) && isManVoice(a.voice)) out.push(`voice: ${where} the teller ${a.teller.en} is a woman; set voice: "a"`);
      break;
    case "passage":
      a.questions.forEach((q, i) => {
        out.push(...optionProblems(`${where} question ${i + 1}`, q.options, q.answer));
        if (q.why && wordCount(q.why.en) < MIN_WHY_WORDS) out.push(`why-length: ${where} question ${i + 1} why "${q.why.en}" is under ${MIN_WHY_WORDS} words (give the reason: the rule, and the Telugu link where it helps)`);
        for (const lang of ["en", "te"] as const) {
          const right = q.options[q.answer];
          if (q.why && right && whyRepeatsSentence(q.why[lang], right)) out.push(`why-repeats-sentence: ${where} question ${i + 1} why (${lang}) ends with "${right}"; the answer is read just before it, so end with the reason`);
        }
      });
      break;
    case "roleplay": {
      const man = nameIn(a.partner.en, MEN);
      if (man && !isManVoice(a.voice)) out.push(`voice: ${where} the partner ${man} is a man; set voice: "b"`);
      if (nameIn(a.partner.en, WOMEN) && isManVoice(a.voice)) out.push(`voice: ${where} the partner is a woman; remove voice: "b"`);
      if (!a.turns.some((t) => t.replies.some((r) => r.react))) {
        out.push(`roleplay-react: ${where} no not-good reply has a reaction (give at least one, ideally to a manners slip)`);
      }
      a.turns.forEach((t, i) => {
        if (!t.replies.some((r) => r.good)) out.push(`roleplay-good-reply: ${where} turn ${i + 1} has no good reply`);
        const hint = plainWords(t.hint.en);
        for (const r of t.replies) {
          if (r.good && plainWords(r.say).split(" ").length >= 3 && hint.includes(plainWords(r.say))) {
            out.push(`roleplay-hint: ${where} turn ${i + 1} hint gives the reply "${r.say}" (say what to do, not the sentence)`);
          }
          if (r.react && r.good) out.push(`roleplay-react: ${where} turn ${i + 1} a good reply has a reaction (only not-good replies do)`);
        }
      });
      break;
    }
    case "match": {
      const en = a.pairs.map((p) => norm(p.en));
      const te = a.pairs.map((p) => norm(p.te));
      if (new Set(en).size !== en.length || new Set(te).size !== te.length) out.push(`options-distinct: ${where} has repeated pairs`);
      break;
    }
    case "arrange":
    case "translate": {
      const own = new Set(answerWords(a.answer));
      for (const word of a.extra ?? []) {
        if (own.has(word)) out.push(`tiles: ${where} distractor "${word}" is also a word of the answer`);
      }
      const tiles = buildTiles(a.answer, a.extra, a.id);
      const expected = [...answerWords(a.answer), ...(a.extra ?? [])].sort();
      if (JSON.stringify([...tiles].sort()) !== JSON.stringify(expected)) {
        out.push(`tiles: ${where} tiles are not the answer words plus the distractors`);
      }
      break;
    }
    default:
      break;
  }

  const why = "why" in a ? a.why : undefined;
  if (why && wordCount(why.en) < MIN_WHY_WORDS) {
    out.push(`why-length: ${where} why "${why.en}" is under ${MIN_WHY_WORDS} words (give the reason: the rule, and the Telugu link where it helps)`);
  }
  const read = readBeforeWhy(a);
  if (why && read) {
    for (const lang of ["en", "te"] as const) {
      if (whyRepeatsSentence(why[lang], read)) {
        out.push(`why-repeats-sentence: ${where} why (${lang}) ends with "${read}"; the sentence is read just before it, so end with the reason`);
      }
    }
  }
  for (const text of spokenOf(a)) {
    if (AUDIO_SYMBOLS.test(text)) out.push(`audio-symbols: ${where} "${text}" has a symbol a voice would read out or trip on (( ) / … ₹)`);
  }
  for (const text of learnerSays(a)) {
    const named = /\b(?:[Mm]y name is|I am|I'm) ([A-Z][a-z]+)/.exec(text)?.[1];
    if (named && [...MEN, ...WOMEN].includes(named)) {
      out.push(`learner-name: ${where} the learner says "${text}"; a learner's own name is one that suits anyone (${LEARNER_NAMES.join(", ")})`);
    }
  }

  const limit = stage === null ? undefined : MAX_WORDS_BY_STAGE[stage];
  if (limit !== undefined) {
    for (const s of sentencesOf(a)) {
      if (wordCount(s) > limit) out.push(`sentence-length: ${where} "${s}" has ${wordCount(s)} words (stage ${stage} limit is ${limit})`);
    }
  }
  return out;
}

function lessonProblems(lesson: Lesson, stage: number | null): string[] {
  const out: string[] = [];
  if (lesson.core.length < 6 || lesson.core.length > 8) out.push(`core-count: ${lesson.core.length} core sentences (needs 6–8)`);
  if (lesson.key.length < 3 || lesson.key.length > 4) out.push(`key-count: ${lesson.key.length} key sentences (needs 3–4)`);
  for (const i of lesson.key) {
    if (!Number.isInteger(i) || i < 0 || i >= lesson.core.length) out.push(`key-range: key index ${i} is outside the core sentences`);
  }
  if (new Set(lesson.key).size !== lesson.key.length) out.push("key-range: key indexes repeat");
  if (lesson.seo.description.length > 160) out.push(`seo-length: description is ${lesson.seo.description.length} characters (max 160)`);
  if (lesson.words.length < 4 || lesson.words.length > 6) out.push(`word-count: ${lesson.words.length} new words (needs 4–6)`);
  for (const g of lesson.grammar) if (!Object.hasOwn(grammar, g)) out.push(`grammar-key: unknown grammar key "${g}"`);
  for (const t of lesson.topics) if (!Object.hasOwn(topics, t)) out.push(`topic-key: unknown topic key "${t}"`);

  const limit = stage === null ? undefined : MAX_WORDS_BY_STAGE[stage];
  if (limit !== undefined) {
    for (const c of lesson.core) {
      if (wordCount(c.en) > limit) out.push(`sentence-length: core sentence "${c.en}" has ${wordCount(c.en)} words (stage ${stage} limit is ${limit})`);
    }
  }
  for (const c of lesson.core) {
    const named = /\b(?:[Mm]y name is|I am|I'm) ([A-Z][a-z]+)/.exec(c.en)?.[1];
    if (named && [...MEN, ...WOMEN].includes(named)) {
      out.push(`learner-name: core sentence "${c.en}" gives the learner a cast name; a learner's own name is one that suits anyone (${LEARNER_NAMES.join(", ")})`);
    }
  }
  const core = lesson.core.map((c) => norm(c.en));
  if (new Set(core).size !== core.length) out.push("core-duplicate: the lesson repeats a core sentence");
  return out;
}

/** All rules for one day. `playable` is the generator's expansion of it. */
export function checkDay(day: Day, playable: PlayableDay, ctx: DayContext): string[] {
  const out: string[] = [];

  const parsed = daySchema.safeParse(day);
  if (!parsed.success) {
    out.push(...parsed.error.issues.map((i) => `schema: ${i.path.join(".")} ${i.message}`));
    return out; // the rest assumes the right shape
  }

  if (!kebab.test(day.id) || day.id.length > 40) out.push(`day-id: "${day.id}" must be kebab-case and at most 40 characters`);

  // Bi pairs: both languages, different, and the Telugu half is Telugu.
  for (const bi of allBi(day)) {
    if (!bi.en.trim() || !bi.te.trim()) out.push(`bi-empty: "${bi.en}" / "${bi.te}"`);
    else if (norm(bi.en) === norm(bi.te)) out.push(`bi-identical: "${bi.en}" is the same in both languages`);
    else if (!TELUGU.test(bi.te)) out.push(`telugu-script: "${bi.te}" has no Telugu letters`);
  }

  if (day.kind === "lesson") out.push(...lessonProblems(day, ctx.stage));

  for (const text of allText(day)) {
    if (text.includes("\uFFFD")) out.push(`broken-text: "${text}" has a broken character (U+FFFD); retype the word`);
    for (const avoid of TELUGU_AVOID) {
      if (text.includes(avoid.text)) out.push(`telugu-register: "${avoid.text}" in "${text}" (use ${avoid.use})`);
    }
  }

  // Telugu text that is not inside a Bi must contain Telugu script too.
  const teluguFields: string[] = [];
  if (day.kind === "lesson") day.core.forEach((c) => teluguFields.push(c.te));
  for (const section of playable.sections) {
    for (const a of section.activities) {
      if (a.type === "translate" || a.type === "repeat") teluguFields.push(a.te);
      if (a.type === "arrange" && a.te) teluguFields.push(a.te);
      if (a.type === "fillBlank" && a.te) teluguFields.push(a.te);
      if (a.type === "match") a.pairs.forEach((p) => teluguFields.push(p.te));
      if (a.type === "dialogue") a.lines.forEach((l) => teluguFields.push(l.te));
      if (a.type === "story") a.parts.forEach((p) => teluguFields.push(p.te));
      if (a.type === "roleplay") a.turns.forEach((t) => teluguFields.push(t.te));
    }
  }
  for (const te of teluguFields) {
    if (!TELUGU.test(te)) out.push(`telugu-script: "${te}" has no Telugu letters`);
  }

  // Activity ids unique within the day, and every id carries the day id.
  const ids = playable.sections.flatMap((s) => s.activities.map((a) => a.id));
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) out.push(`id-unique: activity id "${id}" is used twice`);
    seen.add(id);
    if (!id.startsWith(`${day.id}.`)) out.push(`id-prefix: activity id "${id}" does not start with "${day.id}."`);
  }
  const authoredIds = (day.kind === "lesson" ? [...day.learn, ...day.practice, ...day.speak, day.roleplay] : []).map((a) => a.id);
  if (new Set(authoredIds).size !== authoredIds.length) out.push("id-unique: an authored activity id is used twice");

  // Per-activity rules (on the expanded day, so generated activities are checked too).
  for (const section of playable.sections) {
    for (const a of section.activities) out.push(...activityProblems(a, a.id, ctx.stage));
  }

  if (day.kind === "lesson") {
    const count = activityCount(playable);
    if (count < MIN_EXPANDED || count > MAX_EXPANDED) {
      out.push(`activity-count: the lesson expands to ${count} activities (needs ${MIN_EXPANDED}–${MAX_EXPANDED})`);
    }
  }

  // Main path: nobody is assumed to have a family.
  if (ctx.mainPath) {
    const text = allText(day).map((t) => t.toLowerCase());
    for (const phrase of FAMILY_ASSUMPTIONS) {
      const hit = text.find((t) => t.includes(phrase));
      if (hit) out.push(`family-assumption: "${phrase}" appears in "${hit}" (main-path days may not assume a family; use a track)`);
    }
  }
  return out;
}

export type CourseItem = { day: Day; weekKey: string };

/** Every Fix-it tag in a day (any item's `fixIt`). */
function fixItsOf(day: Day): FixIt[] {
  const out: FixIt[] = [];
  const walk = (value: unknown) => {
    if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === "object") {
      const tag = (value as { fixIt?: unknown }).fixIt;
      if (typeof tag === "string" && tag in FIX_IT) out.push(tag as FixIt);
      Object.values(value).forEach(walk);
    }
  };
  walk(day);
  return out;
}

export const MIN_FIX_ITS_PER_WEEK = 3;
export const FIX_IT_WINDOW = 3;

/**
 * The Fix-it strand (CURRICULUM §2) over the main path's written weeks: each week tags at least 3 different errors,
 * and each error, from its start week, appears at least once in every 3 weeks in a row.
 */
export function fixItProblems(items: CourseItem[]): string[] {
  const byWeek = new Map<number, Set<FixIt>>();
  for (const { day, weekKey } of items) {
    const [lane, n] = weekKey.split(":");
    if (lane !== "main") continue;
    const set = byWeek.get(Number(n)) ?? new Set<FixIt>();
    fixItsOf(day).forEach((t) => set.add(t));
    byWeek.set(Number(n), set);
  }
  const weeks = [...byWeek.keys()].sort((a, b) => a - b);
  const out: string[] = [];
  for (const w of weeks) {
    const tags = byWeek.get(w)!;
    if (tags.size < MIN_FIX_ITS_PER_WEEK) out.push(`fix-it-week: Week ${w} tags ${tags.size} Fix-it error(s) (needs at least ${MIN_FIX_ITS_PER_WEEK} different ones)`);
  }
  const last = weeks[weeks.length - 1] ?? 0;
  for (const [tag, { from }] of Object.entries(FIX_IT) as [FixIt, (typeof FIX_IT)[FixIt]][]) {
    for (let start = from; start + FIX_IT_WINDOW - 1 <= last; start++) {
      const window = Array.from({ length: FIX_IT_WINDOW }, (_, i) => start + i);
      if (!window.every((w) => byWeek.has(w))) continue;
      if (!window.some((w) => byWeek.get(w)!.has(tag))) {
        out.push(`fix-it-gap: "${tag}" (Fix-it ${FIX_IT[tag].n}) is missing from Weeks ${window[0]}–${window[window.length - 1]} (it must come back at least every ${FIX_IT_WINDOW} weeks from Week ${from})`);
      }
    }
  }
  return out;
}

/** Rules across days: unique day ids, each new word introduced once, no repeated core sentence within a week, the Fix-it strand. */
export function checkCourse(items: CourseItem[]): string[] {
  const out: string[] = [...fixItProblems(items)];
  const dayIds = new Set<string>();
  const words = new Map<string, string>();
  const coreByWeek = new Map<string, Map<string, string>>();

  for (const { day, weekKey } of items) {
    if (dayIds.has(day.id)) out.push(`day-id-unique: day id "${day.id}" is used twice`);
    dayIds.add(day.id);
    if (day.kind !== "lesson") continue;

    for (const w of day.words) {
      const key = norm(w.en);
      const first = words.get(key);
      if (first) out.push(`word-once: "${w.en}" is a new word in "${first}" and again in "${day.id}"`);
      else words.set(key, day.id);
    }

    const seenInWeek = coreByWeek.get(weekKey) ?? new Map<string, string>();
    for (const c of day.core) {
      const key = norm(c.en);
      const first = seenInWeek.get(key);
      if (first) out.push(`core-duplicate-week: "${c.en}" is a core sentence in "${first}" and again in "${day.id}"`);
      else seenInWeek.set(key, day.id);
    }
    coreByWeek.set(weekKey, seenInWeek);
  }
  return out;
}
