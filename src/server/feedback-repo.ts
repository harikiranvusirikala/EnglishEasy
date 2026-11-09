import { ObjectId, type Db } from "mongodb";
import type { AppFeedbackInput, FeedbackInput, FeedbackRating, FeedbackTopic, LessonLevel, LessonRatingInput } from "./feedback-schema";

// `feedback` (messages from Settings) and `lessonRatings` (Easy / Just right / Too hard): anonymous, nothing personal.

interface FeedbackDoc extends Omit<AppFeedbackInput, "kind" | "at"> {
  at: Date;
  done: boolean;
}
interface LessonRatingDoc extends Omit<LessonRatingInput, "kind" | "at"> {
  at: Date;
}

const feedback = (db: Db) => db.collection<FeedbackDoc>("feedback");
const lessonRatings = (db: Db) => db.collection<LessonRatingDoc>("lessonRatings");

export async function addFeedback(db: Db, input: FeedbackInput): Promise<void> {
  if (input.kind === "lesson") {
    const { dayId, level, learnIn, at } = input;
    await lessonRatings(db).insertOne({ dayId, level, learnIn, at: new Date(at) });
  } else {
    const { rating, topics, said, learnIn, appVersion, at } = input;
    await feedback(db).insertOne({ ...(rating && { rating }), topics, ...(said && { said }), learnIn, appVersion, at: new Date(at), done: false });
  }
}

export interface FeedbackMessage extends Omit<FeedbackDoc, "done"> {
  id: string;
}

/** Messages not yet marked done, newest first. */
export async function openFeedback(db: Db, limit = 200): Promise<FeedbackMessage[]> {
  const docs = await feedback(db).find({ done: false }).sort({ at: -1 }).limit(limit).toArray();
  return docs.map(({ _id, rating, topics, said, learnIn, appVersion, at }) => ({ id: _id.toHexString(), rating, topics, said, learnIn, appVersion, at }));
}

export async function markFeedbackDone(db: Db, id: string): Promise<void> {
  if (!ObjectId.isValid(id)) return;
  await feedback(db).updateOne({ _id: new ObjectId(id) }, { $set: { done: true } });
}

export interface FeedbackSummary {
  waiting: number;
  total: number;
  ratings: Record<FeedbackRating, number>;
  topics: { topic: FeedbackTopic; count: number }[];
}

/** All messages so far: how many wait, the faces, and the topics most often ticked first. */
export async function feedbackSummary(db: Db): Promise<FeedbackSummary> {
  const [waiting, total, ratingRows, topicRows] = await Promise.all([
    feedback(db).countDocuments({ done: false }),
    feedback(db).countDocuments({}),
    feedback(db).aggregate<{ _id: FeedbackRating; count: number }>([{ $match: { rating: { $exists: true } } }, { $group: { _id: "$rating", count: { $sum: 1 } } }]).toArray(),
    feedback(db).aggregate<{ _id: FeedbackTopic; count: number }>([{ $unwind: "$topics" }, { $group: { _id: "$topics", count: { $sum: 1 } } }, { $sort: { count: -1, _id: 1 } }]).toArray(),
  ]);
  const ratings: Record<FeedbackRating, number> = { love: 0, good: 0, okay: 0, bad: 0 };
  for (const row of ratingRows) ratings[row._id] = row.count;
  return { waiting, total, ratings, topics: topicRows.map((r) => ({ topic: r._id, count: r.count })) };
}

export type LevelCounts = Record<LessonLevel, number>;

/** Each rated day's Easy / Just right / Too hard counts. */
export async function lessonLevels(db: Db): Promise<Map<string, LevelCounts>> {
  const rows = await lessonRatings(db)
    .aggregate<{ _id: { dayId: string; level: LessonLevel }; count: number }>([{ $group: { _id: { dayId: "$dayId", level: "$level" }, count: { $sum: 1 } } }])
    .toArray();
  const out = new Map<string, LevelCounts>();
  for (const { _id, count } of rows) {
    const counts = out.get(_id.dayId) ?? { easy: 0, right: 0, hard: 0 };
    counts[_id.level] = count;
    out.set(_id.dayId, counts);
  }
  return out;
}
