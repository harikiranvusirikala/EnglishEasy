import type { Db } from "mongodb";
import type { Progress } from "@/learning/progress";

/** One document per learner in `progress`: `{ userId, data, updatedAt }`, unique on `userId` (BUILD_PLAN A7). The client merges; this only stores. */
interface ProgressDoc {
  userId: string;
  data: Progress;
  updatedAt: Date;
}

const collection = (db: Db) => db.collection<ProgressDoc>("progress");

/** The learner's saved progress, or null when nothing was saved yet. */
export async function loadProgress(db: Db, userId: string): Promise<Progress | null> {
  const doc = await collection(db).findOne({ userId }, { projection: { data: 1 } });
  return doc?.data ?? null;
}

/** Replaces the learner's saved progress (creating it the first time). */
export async function saveProgress(db: Db, userId: string, data: Progress, now: Date = new Date()): Promise<void> {
  await collection(db).updateOne({ userId }, { $set: { data, updatedAt: now }, $setOnInsert: { userId } }, { upsert: true });
}
