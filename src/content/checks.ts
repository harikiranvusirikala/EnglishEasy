import { grammar } from "./grammar";
import { topics } from "./topics";
import { activityCount, answerWords, buildTiles } from "./generate";
import { daySchema } from "./schema";
import type { Activity, Bi, Day, Lesson, PlayableDay } from "./types";

/**
 * The content rules of BUILD_PLAN A3: shape, structure and writing-quality checks.
 * Each check returns messages that start with a code ("answer-range: …"); an empty list means the day is fine.
 * `content.test.ts` runs them on every written day and on deliberately broken fixtures (so the checks are tested too).
 */

export type DayContext = { stage: number | null; mainPath: boolean };

const TELUGU = /[ఀ-౿]/;
const MAX_WORDS_BY_STAGE: Record<number, number> = { 1: 7, 2: 10, 3: 14 };
const MIN_EXPANDED = 14;
const MAX_EXPANDED = 19;

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
      return a.turns.flatMap((t) => [t.partner, ...t.replies.map((r) => r.say)]);
    case "findMistake":
      return [a.fix];
    default:
      return [];
  }
}

function activityProblems(a: Activity, where: string, stage: number | null): string[] {
  const out: string[] = [];
  switch (a.type) {
    case "choose":
    case "listenChoose":
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
      break;
    case "roleplay":
      a.turns.forEach((t, i) => {
        if (!t.replies.some((r) => r.good)) out.push(`roleplay-good-reply: ${where} turn ${i + 1} has no good reply`);
      });
      break;
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

/** Rules across days: unique day ids, each new word introduced once, no repeated core sentence within a week. */
export function checkCourse(items: CourseItem[]): string[] {
  const out: string[] = [];
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
