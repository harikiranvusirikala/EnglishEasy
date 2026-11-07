import { isDue, localParts } from "@/learning/reminder-due";
import { strings } from "@/lib/strings";
import type { PushSubscriptionDoc } from "./reminders-repo";

// Sending the daily reminders (BUILD_PLAN A7). The push call and the database are passed in, so this is testable.

export interface PushPayload {
  title: string;
  body: string;
  url: string;
}

/** "Today's English is ready" in the learner's Learn-in language (English only for English mode). */
export function reminderPayload(learnIn: "te" | "en"): PushPayload {
  const message = strings.reminderMessage;
  return { title: "EnglishEasy", body: learnIn === "te" ? `${message.en} · ${message.te}` : message.en, url: "/learn" };
}

/** Sends the payload; resolves when accepted. A rejection carries `statusCode` (404 or 410 = the subscription is gone). */
export type Send = (subscription: PushSubscriptionDoc, payload: PushPayload) => Promise<void>;

export interface ReminderStore {
  all(): Promise<PushSubscriptionDoc[]>;
  markSent(endpoint: string, day: string): Promise<void>;
  remove(endpoint: string): Promise<void>;
}

export interface SendResult {
  checked: number;
  sent: number;
  removed: number;
  failed: number;
}

export async function sendDueReminders(store: ReminderStore, send: Send, now: Date = new Date()): Promise<SendResult> {
  const result: SendResult = { checked: 0, sent: 0, removed: 0, failed: 0 };
  for (const sub of await store.all()) {
    result.checked += 1;
    if (!isDue(sub, now)) continue;
    try {
      await send(sub, reminderPayload(sub.learnIn));
      await store.markSent(sub.endpoint, localParts(now, sub.timeZone)!.day);
      result.sent += 1;
    } catch (error) {
      const status = (error as { statusCode?: number }).statusCode;
      if (status === 404 || status === 410) {
        await store.remove(sub.endpoint);
        result.removed += 1;
      } else {
        result.failed += 1; // tried again at the same hour tomorrow (not marked sent)
      }
    }
  }
  return result;
}
