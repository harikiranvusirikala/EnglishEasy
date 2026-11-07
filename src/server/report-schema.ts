import { z } from "zod";

/** Largest bodies the report routes accept (BUILD_PLAN A7). */
export const MAX_REPORT_BYTES = 1024;
export const MAX_CLIENT_ERROR_BYTES = 8 * 1024;
export const MAX_STACK_CHARS = 2048;

export const REPORT_REASONS = ["telugu", "english", "audio", "other"] as const;
export type ReportReason = (typeof REPORT_REASONS)[number];

const id = z.string().min(1).max(200);

export const reportSchema = z.object({
  activityId: id,
  dayId: id,
  reason: z.enum(REPORT_REASONS),
  learnIn: z.enum(["te", "en"]),
  at: z.iso.datetime(),
});
export type ReportInput = z.infer<typeof reportSchema>;

export const clientErrorSchema = z.object({
  message: z.string().max(1000),
  stack: z
    .string()
    .max(100_000)
    .transform((s) => s.slice(0, MAX_STACK_CHARS)),
  path: z.string().max(300),
  userAgent: z.string().max(300),
  appVersion: z.string().max(40),
});
export type ClientErrorInput = z.infer<typeof clientErrorSchema>;

export const parseReport = (value: unknown): ReportInput | null => {
  const result = reportSchema.safeParse(value);
  return result.success ? result.data : null;
};

export const parseClientError = (value: unknown): ClientErrorInput | null => {
  const result = clientErrorSchema.safeParse(value);
  return result.success ? result.data : null;
};

/** Reads a request body as JSON within a size limit: the parsed value, or the HTTP status to answer with. */
export async function readJsonBody(request: Request, maxBytes: number): Promise<{ value: unknown } | { status: 400 | 413 }> {
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > maxBytes) return { status: 413 };
  const text = await request.text();
  if (text.length > maxBytes) return { status: 413 };
  try {
    return { value: JSON.parse(text) };
  } catch {
    return { status: 400 };
  }
}
