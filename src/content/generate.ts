import { shuffle } from "../learning/shuffle";
import type { Activity, Bi, Day, Lesson, PlayableDay, PlayableSection, ReviewDay, ConversationDay } from "./types";

/**
 * The activity generator (BUILD_PLAN A3). PURE and deterministic: the same lesson always expands to the same day.
 *
 * Authors put the simplest core sentences first, because this FIXED mapping feeds them to the generated activities
 * (indexes into `lesson.core`):
 *
 *   arrange        core[0]            id `${dayId}.g-arrange-0`
 *   translate      core[1], core[2]   ids `${dayId}.g-translate-1`, `${dayId}.g-translate-2`
 *   match          core[0..3]         id `${dayId}.g-match-0`   (4 pairs)
 *   listenChoose   core[3]            id `${dayId}.g-listen-3`  (Telugu meanings as options)
 *   repeat         core[1]            id `${dayId}.g-repeat-1`
 *   warm-up        the key sentences of the two most recent earlier lessons, ids `${dayId}.g-warm-0`, `${dayId}.g-warm-1`
 *
 * Practice order: authored (all but find-the-mistake), match, arrange, translate ×2, authored find-the-mistake.
 * Speak order: listenChoose, repeat, authored situations. Distractor tiles come from `extra` on the core sentence.
 * Nothing here uses randomness: shuffles are seeded by the activity id.
 */

export const MATCH_PAIRS = 4;

const promptWarmup = (sentence: string): Bi => ({ en: `What does "${sentence}" mean?`, te: `"${sentence}" అంటే ఏంటి?` });
const promptListen: Bi = { en: "Listen. What does it mean?", te: "విని, దాని అర్థం ఏమిటో ఎంచుకోండి." };

// ---- tiles ----

/** The words of an answer; punctuation stays on its word ("rice." is one tile). */
export function answerWords(answer: string): string[] {
  return answer.trim().split(/\s+/);
}

/** Answer words + distractors, shuffled with a seed. The result is never in answer order (unless it cannot be avoided). */
export function buildTiles(answer: string, extra: string[] | undefined, seed: string): string[] {
  const words = answerWords(answer);
  const tiles = shuffle([...words, ...(extra ?? [])], seed);
  const inOrder = tiles.length === words.length && tiles.every((t, i) => t === words[i]);
  if (inOrder && new Set(tiles).size > 1) tiles.push(tiles.shift() as string);
  return tiles;
}

// ---- small helpers ----

function withAnswer(correct: string, wrongs: string[], position: number): { options: string[]; answer: number } {
  const at = Math.min(position, wrongs.length);
  const options = [...wrongs.slice(0, at), correct, ...wrongs.slice(at)];
  return { options, answer: at };
}

/** Telugu meanings of other core sentences of the same lesson, cycling from the one after `index`. */
function otherMeanings(core: Lesson["core"], index: number, count: number): string[] {
  const out: string[] = [];
  for (let step = 1; step < core.length && out.length < count; step++) {
    const te = core[(index + step) % core.length].te;
    if (te !== core[index].te && !out.includes(te)) out.push(te);
  }
  return out;
}

const fullId = (dayId: string, id: string) => `${dayId}.${id}`;

function authored(dayId: string, a: Activity): Activity {
  return { ...a, id: fullId(dayId, a.id) };
}

// ---- generated activities ----

function genArrange(dayId: string, lesson: Lesson, i: number): Activity {
  const c = lesson.core[i];
  return { id: `${dayId}.g-arrange-${i}`, type: "arrange", te: c.te, answer: c.en, extra: c.extra };
}

function genTranslate(dayId: string, lesson: Lesson, i: number): Activity {
  const c = lesson.core[i];
  return { id: `${dayId}.g-translate-${i}`, type: "translate", te: c.te, answer: c.en, extra: c.extra };
}

function genMatch(dayId: string, lesson: Lesson): Activity {
  const pairs = lesson.core.slice(0, MATCH_PAIRS).map((c) => ({ en: c.en, te: c.te }));
  return { id: `${dayId}.g-match-0`, type: "match", pairs };
}

function genListen(dayId: string, lesson: Lesson, i: number): Activity {
  const c = lesson.core[i];
  const { options, answer } = withAnswer(c.te, otherMeanings(lesson.core, i, 2), (i + 1) % 3);
  return { id: `${dayId}.g-listen-${i}`, type: "listenChoose", say: c.en, prompt: promptListen, options, answer };
}

function genRepeat(dayId: string, lesson: Lesson, i: number): Activity {
  const c = lesson.core[i];
  return { id: `${dayId}.g-repeat-${i}`, type: "repeat", say: c.en, te: c.te };
}

function genWarmups(dayId: string, earlier: Lesson[]): Activity[] {
  if (earlier.length === 0) return [];
  const out: Activity[] = [];
  for (let n = 0; n < 2; n++) {
    const sameLesson = earlier.length === 1;
    const source = earlier[Math.max(earlier.length - 1 - n, 0)];
    const keyAt = sameLesson ? n % source.key.length : 0;
    const index = source.key[keyAt];
    const c = source.core[index];
    const { options, answer } = withAnswer(c.te, otherMeanings(source.core, index, 2), n % 3);
    out.push({
      id: `${dayId}.g-warm-${n}`,
      type: "choose",
      prompt: promptWarmup(c.en),
      say: c.en,
      options,
      answer,
    });
  }
  return out;
}

// ---- expanding days ----

/** A lesson → sections warm-up, learn, practice, speak, roleplay, wrap-up. `earlier` = the lessons before this one in course order. */
export function expandLesson(lesson: Lesson, earlier: Lesson[]): PlayableDay {
  const id = lesson.id;
  const a = (list: Activity[]) => list.map((x) => authored(id, x));

  const practiceAuthored = a(lesson.practice);
  const recognise = practiceAuthored.filter((x) => x.type !== "findMistake");
  const check = practiceAuthored.filter((x) => x.type === "findMistake");
  const practice: Activity[] = [
    ...recognise,
    genMatch(id, lesson),
    genArrange(id, lesson, 0),
    genTranslate(id, lesson, 1),
    genTranslate(id, lesson, 2),
    ...check,
  ];

  const speak: Activity[] = [genListen(id, lesson, 3), genRepeat(id, lesson, 1), ...a(lesson.speak)];

  const warmup = genWarmups(id, earlier);
  const sections: PlayableSection[] = [
    ...(warmup.length > 0 ? [{ kind: "warmup" as const, activities: warmup }] : []),
    { kind: "learn", activities: a(lesson.learn) },
    { kind: "practice", activities: practice },
    { kind: "speak", activities: speak },
    { kind: "roleplay", activities: a([lesson.roleplay]) },
    { kind: "wrapup", activities: [] },
  ];

  return {
    id,
    kind: "lesson",
    title: lesson.title,
    sections,
    ...(lesson.optional ? { optional: lesson.optional } : {}),
    wrapup: { key: lesson.key.map((i) => lesson.core[i]), tryToday: lesson.tryToday, words: lesson.words },
  };
}

/** A Conversation Day: the dialogue, then the situations by voice, then the role plays. No new grammar, nothing generated. */
export function expandConversation(day: ConversationDay): PlayableDay {
  const id = day.id;
  return {
    id,
    kind: "conversation",
    title: day.title,
    sections: [
      { kind: "practice", activities: [authored(id, day.dialogue)] },
      { kind: "speak", activities: day.situations.map((x) => authored(id, x)) },
      { kind: "roleplay", activities: day.roleplays.map((x) => authored(id, x)) },
      { kind: "wrapup", activities: [] },
    ],
  };
}

/**
 * A Review Day (VISION §4.6): two items per lesson of the week, mixed (the lesson's own authored question, then a
 * generated arrange or translate from its core sentences), then one role play replayed from the week's Conversation
 * Day (if it has one), then the day's `extras` (Week 1: the timeline and the long role play).
 *
 * Every item gets a review id `${dayId}.g-<n>` (a copy, so saved answers never mix with the lesson's own). Items are
 * shuffled with the day id as seed; extras keep their authored order. Role plays go in the role play section.
 */
export function buildReview(review: ReviewDay, weekDays: Lesson[], conversation?: ConversationDay): PlayableDay {
  const id = review.id;
  let n = 0;
  const items: Activity[] = [];
  weekDays.forEach((lesson, i) => {
    const own = lesson.practice.filter((x) => x.type !== "findMistake");
    const pool = own.length > 0 ? own : lesson.practice;
    if (pool.length > 0) items.push({ ...pool[i % pool.length], id: `${id}.g-${n++}` } as Activity);
    const c = i % 2 === 0 ? lesson.core[1] : lesson.core[2];
    items.push(
      i % 2 === 0
        ? { id: `${id}.g-${n++}`, type: "arrange", te: c.te, answer: c.en, extra: c.extra }
        : { id: `${id}.g-${n++}`, type: "translate", te: c.te, answer: c.en, extra: c.extra },
    );
  });
  const mixed = shuffle(items, id);
  const replay = conversation?.roleplays[0];
  const extras = (review.extras ?? []).map((x) => authored(id, x));
  const roleplays = [...(replay ? [{ ...replay, id: `${id}.g-${n++}` } as Activity] : []), ...extras.filter((x) => x.type === "roleplay")];
  const practice = [...mixed, ...extras.filter((x) => x.type !== "roleplay")];
  return {
    id,
    kind: "review",
    title: review.title,
    sections: [
      { kind: "practice", activities: practice },
      ...(roleplays.length > 0 ? [{ kind: "roleplay" as const, activities: roleplays }] : []),
      { kind: "wrapup", activities: [] },
    ],
  };
}

/** Expand any day. `earlier` = lessons before it in course order; `weekLessons` and `weekConversation` = its week's lessons and Conversation Day (review days). */
export function expandDay(day: Day, earlier: Lesson[], weekLessons: Lesson[], weekConversation?: ConversationDay): PlayableDay {
  if (day.kind === "lesson") return expandLesson(day, earlier);
  if (day.kind === "conversation") return expandConversation(day);
  return buildReview(day, weekLessons, weekConversation);
}

/** Number of activities a player will run for a day (the Wrap-up screen is not an activity). */
export function activityCount(day: PlayableDay): number {
  return day.sections.reduce((sum, s) => sum + s.activities.length, 0);
}
