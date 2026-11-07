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

const promptWarmup = (sentence: string): Bi => ({ en: `What does "${sentence}" mean?`, te: `"${sentence}" అంటే ఏమిటి?` });
const promptListen: Bi = { en: "Listen. What does it mean?", te: "విని, దాని అర్థం ఏమిటో ఎంచుకోండి." };

// ---- seeded shuffle and tiles ----

function hash(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function random(seed: string): () => number {
  let s = hash(seed) || 1;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The words of an answer; punctuation stays on its word ("rice." is one tile). */
export function answerWords(answer: string): string[] {
  return answer.trim().split(/\s+/);
}

/** Answer words + distractors, shuffled with a seed. The result is never in answer order (unless it cannot be avoided). */
export function buildTiles(answer: string, extra: string[] | undefined, seed: string): string[] {
  const words = answerWords(answer);
  const tiles = [...words, ...(extra ?? [])];
  const next = random(seed);
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
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
 * PLACEHOLDER (finished in Step 15): two generated items per lesson of the week (arrange core[1], translate core[2]),
 * then the day's `extras`. Step 15 adds the authored mix and the Conversation Day role play.
 */
export function buildReview(review: ReviewDay, weekDays: Lesson[]): PlayableDay {
  const id = review.id;
  let n = 0;
  const items: Activity[] = [];
  for (const lesson of weekDays) {
    const arrange = lesson.core[1];
    const translate = lesson.core[2];
    items.push({ id: `${id}.g-${n++}`, type: "arrange", te: arrange.te, answer: arrange.en, extra: arrange.extra });
    items.push({ id: `${id}.g-${n++}`, type: "translate", te: translate.te, answer: translate.en, extra: translate.extra });
  }
  items.push(...(review.extras ?? []).map((x) => authored(id, x)));
  return {
    id,
    kind: "review",
    title: review.title,
    sections: [
      { kind: "practice", activities: items },
      { kind: "wrapup", activities: [] },
    ],
  };
}

/** Expand any day. `earlier` = lessons before it in course order; `weekLessons` = the lessons of its week (review days). */
export function expandDay(day: Day, earlier: Lesson[], weekLessons: Lesson[]): PlayableDay {
  if (day.kind === "lesson") return expandLesson(day, earlier);
  if (day.kind === "conversation") return expandConversation(day);
  return buildReview(day, weekLessons);
}

/** Number of activities a player will run for a day (the Wrap-up screen is not an activity). */
export function activityCount(day: PlayableDay): number {
  return day.sections.reduce((sum, s) => sum + s.activities.length, 0);
}
