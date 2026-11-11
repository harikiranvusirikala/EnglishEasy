import { random, shuffle } from "../learning/shuffle";
import type { SoundWeek } from "./sounds";
import type { Activity, Bi, Day, Lesson, PlayableDay, PlayableSection, ReviewDay, ConversationDay } from "./types";

/**
 * The activity generator (BUILD_PLAN A3). PURE and deterministic: the same lesson always expands to the same day.
 *
 * Authors put the simplest core sentences first, because this FIXED mapping feeds them to the generated activities
 * (indexes into `lesson.core`; the content review of 2026-11-09 re-pointed some, once, before launch):
 *
 *   arrange        core[0]            id `${dayId}.g-arrange-0`
 *   translate      core[1]            id `${dayId}.g-translate-1`
 *   match          core[0..3]         id `${dayId}.g-match-0`   (4 pairs)
 *   dictate        core[4]            id `${dayId}.g-dictate-4` (build what you hear: tiles from the voice alone)
 *   sound pair     the week's sounds  id `${dayId}.g-pair-0`    (which word did you hear?; lessons without a sound
 *                                                               week get listenChoose of core[3], `g-listen-3`)
 *   sound card     week's first lesson id `${dayId}.g-sound-0`  (end of Learn)
 *   repeat         core[1]            id `${dayId}.g-repeat-1`  (5+ words: said in steps, built up from the end)
 *   warm-up        `g-warm-0`: a key sentence of the lesson before (what does it mean?); `g-warm-1`: one from about a
 *                  week (5 lessons) or a month (20 lessons) back, by ear (spaced recall)
 *
 * Practice order: authored (all but find-the-mistake), match, arrange, translate, dictate, authored find-the-mistake.
 * Speak order: sound pair, repeat, authored situations. Distractor tiles come from `extra` on the core sentence.
 * Authored options (choose, fill-the-gap, situations, listening, dialogue questions) are shuffled with the activity
 * id as seed, so the right answer is not always A or B. Nothing here uses randomness.
 */

export const MATCH_PAIRS = 4;

const promptWarmup = (sentence: string): Bi => ({ en: `What does "${sentence}" mean?`, te: `"${sentence}" అంటే ఏంటి?` });
const promptListen: Bi = { en: "Listen. What does it mean?", te: "విని, దాని అర్థం ఏంటో ఎంచుకోండి." };

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

/** Options in a seeded order, the answer index following its option. */
function reorder(options: string[], answer: number, seed: string): { options: string[]; answer: number } {
  const order = shuffle(options.map((_, i) => i), seed);
  return { options: order.map((i) => options[i]), answer: order.indexOf(answer) };
}

/** An authored activity with options gets them shuffled (seeded by its full id); everything else is unchanged. */
export function shuffled(a: Activity): Activity {
  switch (a.type) {
    case "choose":
    case "fillBlank":
    case "situation":
    case "listenChoose":
    case "readIt":
      return { ...a, ...reorder(a.options, a.answer, a.id) };
    case "dialogue":
      return { ...a, questions: a.questions.map((q, i) => ({ ...q, ...reorder(q.options, q.answer, `${a.id}.${i}`) })) };
    case "story":
      return { ...a, questions: a.questions.map((q, i) => ({ ...q, ...reorder(q.options, q.answer, `${a.id}.${i}`) })) };
    case "passage":
      return { ...a, questions: a.questions.map((q, i) => ({ ...q, ...reorder(q.options, q.answer, `${a.id}.${i}`) })) };
    default:
      return a;
  }
}

function authored(dayId: string, a: Activity): Activity {
  return shuffled({ ...a, id: fullId(dayId, a.id) });
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

function genDictate(dayId: string, lesson: Lesson, i: number): Activity {
  const at = Math.min(i, lesson.core.length - 1);
  const c = lesson.core[at];
  return { id: `${dayId}.g-dictate-${i}`, type: "arrange", answer: c.en, extra: c.extra, listen: true };
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

/** Back-chaining: a sentence of 5+ words is said in parts built up from its end (the last third, two thirds, all). */
export function repeatSteps(sentence: string): string[] | undefined {
  const words = answerWords(sentence);
  const n = words.length;
  if (n < 5) return undefined;
  const tail = (k: number) => words.slice(n - k).join(" ");
  return [tail(Math.ceil(n / 3)), tail(Math.ceil((2 * n) / 3)), sentence];
}

function genRepeat(dayId: string, lesson: Lesson, i: number): Activity {
  const c = lesson.core[i];
  const steps = repeatSteps(c.en);
  return { id: `${dayId}.g-repeat-${i}`, type: "repeat", say: c.en, te: c.te, ...(steps ? { steps } : {}) };
}

/** Where a lesson sits in its week's sound (main path only): the week's sounds and the lesson's index in the week. */
export type SoundPlace = { week: SoundWeek; index: number };

function genSoundCard(dayId: string, sound: SoundWeek): Activity {
  return { id: `${dayId}.g-sound-0`, type: "sound", sound: sound.card };
}

function genSoundPair(dayId: string, place: SoundPlace): Activity {
  const words = place.week.pairs[place.index % place.week.pairs.length];
  const id = `${dayId}.g-pair-0`;
  return { id, type: "soundPair", words, answer: random(id)() < 0.5 ? 0 : 1 };
}

/** How far back the by-ear warm-up reaches, in lessons: about a week, or (every other lesson) about a month. */
export const SPACED_BACK = [5, 20] as const;

function genWarmups(dayId: string, earlier: Lesson[]): Activity[] {
  if (earlier.length === 0) return [];
  const n = earlier.length;
  // 1 · The lesson before: what does its first key sentence mean? (Read, then the choice.)
  const last = earlier[n - 1];
  const first = last.core[last.key[0]];
  const recent = withAnswer(first.te, otherMeanings(last.core, last.key[0], 2), 0);
  const out: Activity[] = [{ id: `${dayId}.g-warm-0`, type: "choose", prompt: promptWarmup(first.en), say: first.en, ...reorder(recent.options, recent.answer, `${dayId}.g-warm-0`) }];
  // 2 · Spaced recall, by ear: a key sentence from about a week or a month back (the earliest there is when the
  // course is younger than that). With one earlier lesson, its second key sentence.
  const back = SPACED_BACK[n % SPACED_BACK.length];
  const source = earlier[Math.max(n - back, 0)];
  const keyAt = n === 1 ? 1 % source.key.length : n % source.key.length;
  const index = source.key[keyAt];
  const c = source.core[index];
  const far = withAnswer(c.te, otherMeanings(source.core, index, 2), 0);
  out.push({ id: `${dayId}.g-warm-1`, type: "listenChoose", say: c.en, prompt: promptListen, ...reorder(far.options, far.answer, `${dayId}.g-warm-1`) });
  return out;
}

// ---- expanding days ----

/**
 * A lesson → sections warm-up, learn, practice, speak, roleplay, wrap-up. `earlier` = the lessons before this one in
 * course order; `sound` = its week's Sound of the week and its place in the week (main path weeks that have one).
 */
export function expandLesson(lesson: Lesson, earlier: Lesson[], sound?: SoundPlace): PlayableDay {
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
    genDictate(id, lesson, 4),
    ...check,
  ];

  const hear = sound ? genSoundPair(id, sound) : genListen(id, lesson, 3);
  const speak: Activity[] = [hear, genRepeat(id, lesson, 1), ...a(lesson.speak)];
  const learn = [...a(lesson.learn), ...(sound?.index === 0 ? [genSoundCard(id, sound.week)] : [])];

  const warmup = genWarmups(id, earlier);
  const sections: PlayableSection[] = [
    ...(warmup.length > 0 ? [{ kind: "warmup" as const, activities: warmup }] : []),
    { kind: "learn", activities: learn },
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
 * A Review Day (VISION §4.6; content review 2026-11-09): two items per lesson of the week. The first is the lesson's own
 * authored question (its pattern, recalled); the second is new to the learner and changes kind from lesson to lesson:
 * build what you hear (a later core sentence), build it from Telugu, a situation by voice, say it in steps, and build
 * what you hear again. The questions are mixed (seeded by the day id); the speaking ones follow in a speak section.
 * Then one role play replayed from the week's Conversation Day (if it has one), then the day's `extras` (Week 1: the
 * timeline and the long role play).
 *
 * Every item gets a review id `${dayId}.g-<n>` (a copy, so saved answers never mix with the lesson's own).
 */
export function buildReview(review: ReviewDay, weekDays: Lesson[], conversation?: ConversationDay): PlayableDay {
  const id = review.id;
  let n = 0;
  const next = () => `${id}.g-${n++}`;
  const items: Activity[] = [];
  const speaking: Activity[] = [];
  weekDays.forEach((lesson, i) => {
    const own = lesson.practice.filter((x) => x.type !== "findMistake");
    const pool = own.length > 0 ? own : lesson.practice;
    if (pool.length > 0) items.push(shuffled({ ...pool[i % pool.length], id: next() } as Activity));
    const later = (k: number) => lesson.core[Math.min(k, lesson.core.length - 1)];
    switch (i % 5) {
      case 0:
      case 4: {
        const c = later(i === 0 ? 5 : 4);
        items.push({ id: next(), type: "arrange", answer: c.en, extra: c.extra, listen: true });
        break;
      }
      case 1: {
        const c = later(6);
        items.push({ id: next(), type: "translate", te: c.te, answer: c.en, extra: c.extra });
        break;
      }
      case 2: {
        const situation = lesson.speak.find((x) => x.type === "situation");
        if (situation) speaking.push(shuffled({ ...situation, id: next() }));
        else {
          const c = later(2);
          items.push({ id: next(), type: "translate", te: c.te, answer: c.en, extra: c.extra });
        }
        break;
      }
      case 3: {
        const c = later(3);
        const steps = repeatSteps(c.en);
        speaking.push({ id: next(), type: "repeat", say: c.en, te: c.te, ...(steps ? { steps } : {}) });
        break;
      }
    }
  });
  const mixed = shuffle(items, id);
  const replay = conversation?.roleplays[0];
  const extras = (review.extras ?? []).map((x) => authored(id, x));
  const roleplays = [...(replay ? [{ ...replay, id: next() } as Activity] : []), ...extras.filter((x) => x.type === "roleplay")];
  const practice = [...mixed, ...extras.filter((x) => x.type !== "roleplay")];
  return {
    id,
    kind: "review",
    title: review.title,
    sections: [
      { kind: "practice", activities: practice },
      ...(speaking.length > 0 ? [{ kind: "speak" as const, activities: speaking }] : []),
      ...(roleplays.length > 0 ? [{ kind: "roleplay" as const, activities: roleplays }] : []),
      { kind: "wrapup", activities: [] },
    ],
  };
}

/**
 * Expand any day. `earlier` = lessons before it in course order; `weekLessons` = its week's lessons before it (all of
 * them for a review day); `weekConversation` = the week's Conversation Day (review days); `sound` = the week's Sound of
 * the week (main path).
 */
export function expandDay(day: Day, earlier: Lesson[], weekLessons: Lesson[], weekConversation?: ConversationDay, sound?: SoundWeek): PlayableDay {
  if (day.kind === "lesson") return expandLesson(day, earlier, sound ? { week: sound, index: weekLessons.length } : undefined);
  if (day.kind === "conversation") return expandConversation(day);
  return buildReview(day, weekLessons, weekConversation);
}

/** Number of activities a player will run for a day (the Wrap-up screen is not an activity). */
export function activityCount(day: PlayableDay): number {
  return day.sections.reduce((sum, s) => sum + s.activities.length, 0);
}
