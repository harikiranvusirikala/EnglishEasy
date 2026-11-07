import type { Db } from "mongodb";
import type { ReminderInput } from "./reminders-schema";

// `pushSubscriptions` (BUILD_PLAN A7): anonymous, guests too. Nothing personal: the phone's notification address,
// the chosen time, the time zone and the last day practised.

export interface PushSubscriptionDoc {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  hour: number;
  timeZone: string;
  learnIn: "te" | "en";
  lastPracticeDay: string | null;
  lastSentDay: string | null;
  createdAt: Date;
}

const subscriptions = (db: Db) => db.collection<PushSubscriptionDoc>("pushSubscriptions");

/** Adds or updates the subscription for this endpoint. `lastSentDay` is kept; `lastPracticeDay` only moves forward. */
export async function saveSubscription(db: Db, input: ReminderInput, now: Date = new Date()): Promise<void> {
  const { subscription, hour, timeZone, learnIn, lastPracticeDay } = input;
  const existing = await subscriptions(db).findOne({ endpoint: subscription.endpoint }, { projection: { lastPracticeDay: 1 } });
  const practised = [existing?.lastPracticeDay, lastPracticeDay].filter((d): d is string => !!d).sort().pop() ?? null;
  await subscriptions(db).updateOne(
    { endpoint: subscription.endpoint },
    {
      $set: { keys: subscription.keys, hour, timeZone, learnIn, lastPracticeDay: practised },
      $setOnInsert: { lastSentDay: null, createdAt: now },
    },
    { upsert: true },
  );
}

export async function deleteSubscription(db: Db, endpoint: string): Promise<void> {
  await subscriptions(db).deleteOne({ endpoint });
}

export async function allSubscriptions(db: Db): Promise<PushSubscriptionDoc[]> {
  return subscriptions(db).find({}, { projection: { _id: 0 } }).toArray();
}

export async function markSent(db: Db, endpoint: string, day: string): Promise<void> {
  await subscriptions(db).updateOne({ endpoint }, { $set: { lastSentDay: day } });
}
