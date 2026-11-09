import { z } from "zod";

/**
 * Feedback from the app (BUILD_PLAN "feedback in the app"): a message from Settings (a face, topics, and an optional
 * spoken message turned into text by the phone) or a lesson's Easy / Just right / Too hard. Anonymous: no account or
 * device id, even when signed in.
 */

/** Largest body `POST /api/feedback` accepts. A 1,000-letter Telugu message is about 3 KB of UTF-8. */
export const MAX_FEEDBACK_BYTES = 4096;
export const MAX_SAID_CHARS = 1000;

export const FEEDBACK_RATINGS = ["love", "good", "okay", "bad"] as const;
export type FeedbackRating = (typeof FEEDBACK_RATINGS)[number];
export const FEEDBACK_TOPICS = ["too-hard", "too-easy", "voice", "speaking", "telugu", "slow", "more-lessons"] as const;
export type FeedbackTopic = (typeof FEEDBACK_TOPICS)[number];
export const LESSON_LEVELS = ["easy", "right", "hard"] as const;
export type LessonLevel = (typeof LESSON_LEVELS)[number];

const learnIn = z.enum(["te", "en"]);
const at = z.iso.datetime();

export const appFeedbackSchema = z
  .object({
    kind: z.literal("app"),
    rating: z.enum(FEEDBACK_RATINGS).optional(),
    topics: z.array(z.enum(FEEDBACK_TOPICS)).max(FEEDBACK_TOPICS.length),
    said: z.string().trim().max(MAX_SAID_CHARS).optional(),
    learnIn,
    appVersion: z.string().max(40),
    at,
  })
  .refine((f) => f.rating || f.topics.length > 0 || f.said, { message: "empty feedback" });

export const lessonRatingSchema = z.object({
  kind: z.literal("lesson"),
  dayId: z.string().min(1).max(200),
  level: z.enum(LESSON_LEVELS),
  learnIn,
  at,
});

export type AppFeedbackInput = z.infer<typeof appFeedbackSchema>;
export type LessonRatingInput = z.infer<typeof lessonRatingSchema>;
export type FeedbackInput = AppFeedbackInput | LessonRatingInput;

/** Validated feedback (topics without repeats), or null. */
export function parseFeedback(value: unknown): FeedbackInput | null {
  const kind = (value as { kind?: unknown } | null)?.kind;
  const result = kind === "lesson" ? lessonRatingSchema.safeParse(value) : appFeedbackSchema.safeParse(value);
  if (!result.success) return null;
  return result.data.kind === "app" ? { ...result.data, topics: [...new Set(result.data.topics)] } : result.data;
}
