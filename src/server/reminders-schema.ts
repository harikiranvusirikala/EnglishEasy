import { z } from "zod";
import { REMINDER_HOURS, isValidTimeZone } from "@/learning/reminder-due";

/** Largest body the reminder routes accept. */
export const MAX_REMINDER_BYTES = 4 * 1024;

const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const reminderSchema = z.object({
  subscription: z.object({
    endpoint: z.url().max(1000),
    keys: z.object({ p256dh: z.string().min(1).max(200), auth: z.string().min(1).max(100) }),
  }),
  hour: z.number().refine((h) => REMINDER_HOURS.includes(h), "Not a reminder time"),
  timeZone: z.string().max(100).refine(isValidTimeZone, "Unknown time zone"),
  learnIn: z.enum(["te", "en"]),
  lastPracticeDay: day.nullish(),
});
export type ReminderInput = z.infer<typeof reminderSchema>;

export const unsubscribeSchema = z.object({ endpoint: z.url().max(1000) });

export const parseReminder = (value: unknown): ReminderInput | null => {
  const result = reminderSchema.safeParse(value);
  return result.success ? result.data : null;
};

export const parseUnsubscribe = (value: unknown): string | null => {
  const result = unsubscribeSchema.safeParse(value);
  return result.success ? result.data.endpoint : null;
};
