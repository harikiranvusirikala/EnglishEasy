import { z } from "zod";
import type { Activity, ConversationDay, Day, Lesson, PlayableDay, ReviewDay } from "./types";

/** zod schema for content (BUILD_PLAN A3). Shape only; the writing rules are in `checks.ts`. */

const text = z.string().min(1);
export const biSchema = z.object({ en: text, te: text }).strict();
const chip = z.object({ text, role: z.enum(["who", "action", "what", "when"]) }).strict();
const core = z.object({ en: text, te: text, extra: z.array(text).optional() }).strict();
const index = z.number().int().min(0);
const options = z.array(text).min(2).max(4);

const turn = z
  .object({
    partner: text,
    te: text,
    hint: biSchema,
    replies: z.array(z.object({ say: text, good: z.boolean(), skill: text.optional() }).strict()).min(2).max(3),
  })
  .strict();

const rolePlayShape = {
  type: z.literal("roleplay"),
  title: biSchema,
  scene: biSchema,
  partner: biSchema,
  skills: z.array(z.object({ id: text, label: biSchema }).strict()),
  turns: z.array(turn).min(1),
};

const rolePlay = z.object({ id: text, ...rolePlayShape }).strict();

export const activitySchema = z.discriminatedUnion("type", [
  z.object({ id: text, type: z.literal("explain"), heading: biSchema, body: biSchema, bridge: z.object({ te: z.array(text), en: z.array(chip) }).strict().optional(), examples: z.array(core) }).strict(),
  z.object({ id: text, type: z.literal("whenToUse"), heading: biSchema, items: z.array(z.object({ form: text, useFor: biSchema, example: core }).strict()).min(2) }).strict(),
  z.object({ id: text, type: z.literal("dontSay"), wrong: text, right: text, why: biSchema }).strict(),
  z.object({ id: text, type: z.literal("choose"), prompt: biSchema, say: text.optional(), options, answer: index, why: biSchema.optional() }).strict(),
  z.object({ id: text, type: z.literal("fillBlank"), sentence: text, te: text.optional(), options, answer: index, why: biSchema.optional() }).strict(),
  z.object({ id: text, type: z.literal("arrange"), te: text.optional(), answer: text, extra: z.array(text).optional() }).strict(),
  z.object({ id: text, type: z.literal("translate"), te: text, answer: text, accept: z.array(text).optional(), extra: z.array(text).optional() }).strict(),
  z.object({ id: text, type: z.literal("match"), pairs: z.array(z.object({ en: text, te: text }).strict()).min(3).max(4) }).strict(),
  z.object({ id: text, type: z.literal("findMistake"), sentence: text, wrongIndex: index, fix: text, why: biSchema }).strict(),
  z.object({ id: text, type: z.literal("listenChoose"), say: text, prompt: biSchema, options, answer: index }).strict(),
  z.object({ id: text, type: z.literal("repeat"), say: text, te: text }).strict(),
  z.object({ id: text, type: z.literal("situation"), situation: biSchema, expected: z.array(text).min(1), options, answer: index }).strict(),
  z
    .object({
      id: text,
      type: z.literal("dialogue"),
      title: biSchema,
      lines: z.array(z.object({ speaker: biSchema, voice: z.enum(["a", "b"]), en: text, te: text }).strict()).min(2),
      questions: z.array(z.object({ prompt: biSchema, options, answer: index }).strict()).min(1),
    })
    .strict(),
  rolePlay,
]) satisfies z.ZodType<Activity>;

const sectionKind = z.enum(["warmup", "learn", "practice", "speak", "roleplay", "wrapup"]);

export const lessonSchema = z
  .object({
    id: text,
    kind: z.literal("lesson"),
    title: biSchema,
    subtitle: text,
    summary: biSchema,
    seo: z.object({ title: text, description: text }).strict(),
    pattern: z.array(chip).min(2),
    core: z.array(core),
    key: z.array(index),
    tryToday: biSchema,
    words: z.array(z.object({ en: text, te: text }).strict()),
    grammar: z.array(text),
    topics: z.array(text),
    learn: z.array(activitySchema),
    practice: z.array(activitySchema),
    speak: z.array(activitySchema),
    roleplay: rolePlay,
    optional: z.array(sectionKind).optional(),
  })
  .strict() satisfies z.ZodType<Lesson>;

export const conversationDaySchema = z
  .object({
    id: text,
    kind: z.literal("conversation"),
    title: biSchema,
    summary: biSchema,
    topics: z.array(text),
    dialogue: activitySchema,
    roleplays: z.array(activitySchema),
    situations: z.array(activitySchema),
  })
  .strict() satisfies z.ZodType<ConversationDay>;

export const reviewDaySchema = z
  .object({ id: text, kind: z.literal("review"), title: biSchema, extras: z.array(activitySchema).optional() })
  .strict() satisfies z.ZodType<ReviewDay>;

export const daySchema = z.discriminatedUnion("kind", [lessonSchema, conversationDaySchema, reviewDaySchema]) satisfies z.ZodType<Day>;

export const playableDaySchema = z
  .object({
    id: text,
    kind: z.enum(["lesson", "conversation", "review"]),
    title: biSchema,
    sections: z.array(z.object({ kind: sectionKind, activities: z.array(activitySchema) }).strict()),
    wrapup: z.object({ key: z.array(core), tryToday: biSchema, words: z.array(z.object({ en: text, te: text }).strict()) }).strict().optional(),
  })
  .strict() satisfies z.ZodType<PlayableDay>;
