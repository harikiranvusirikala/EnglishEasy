import { z } from "zod";
import type { Progress } from "@/learning/progress";

/** The largest progress body the server accepts (BUILD_PLAN A7). */
export const MAX_PROGRESS_BYTES = 512 * 1024;

const id = z.string().min(1).max(200);
const time = z.string().min(1).max(40);

export const progressSchema = z.object({
  version: z.literal(1),
  activities: z.record(id, z.object({ correct: z.boolean(), attempts: z.number().int().min(0).max(100_000), at: time, skipped: z.literal(true).optional() })),
  completed: z.record(id, z.object({ at: time, correct: z.number().int().min(0).max(10_000), total: z.number().int().min(0).max(10_000) })),
  mistakes: z.record(id, time),
  practiceDays: z.array(z.string().max(10)).max(60),
  position: z.object({ dayId: id, activityId: id, at: time }).optional(),
  tracks: z.array(id).max(100),
  tracksAsked: z.boolean(),
  updatedAt: time,
}) satisfies z.ZodType<Progress>;

/** Validated progress, or null when the body is not valid progress. */
export function parseProgressBody(value: unknown): Progress | null {
  const result = progressSchema.safeParse(value);
  return result.success ? result.data : null;
}
