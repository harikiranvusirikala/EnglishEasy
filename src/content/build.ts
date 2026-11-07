import { releasedDayRefs } from "./course";
import { expandDay } from "./generate";
import { isWritten, loadDay } from "./load";
import { playableDaySchema } from "./schema";
import type { ConversationDay, Day, Lesson, PlayableDay } from "./types";

export type Built = { day: Day; playable: PlayableDay; stage: number | null; week: number; lane: string };

/**
 * Loads and expands every written day of the released weeks, in course order (server/build side only).
 * "Earlier lessons" for the warm-up are the written lessons before it in the same lane (main path, or one track).
 */
export async function buildAll(): Promise<Built[]> {
  const built: Built[] = [];
  const lessonsByLane = new Map<string, Lesson[]>();
  const lessonsByWeek = new Map<string, Lesson[]>();
  const conversationByWeek = new Map<string, ConversationDay>();

  for (const { ref, week, stage, lane } of releasedDayRefs()) {
    if (!isWritten(ref.id)) continue;
    const day = await loadDay(ref.id);
    const weekKey = `${lane}:${week.n}`;
    const earlier = lessonsByLane.get(lane) ?? [];
    const weekLessons = lessonsByWeek.get(weekKey) ?? [];
    const playable = playableDaySchema.parse(expandDay(day, earlier, weekLessons, conversationByWeek.get(weekKey)));
    built.push({ day, playable, stage, week: week.n, lane });
    if (day.kind === "conversation") conversationByWeek.set(weekKey, day);
    if (day.kind === "lesson") {
      lessonsByLane.set(lane, [...earlier, day]);
      lessonsByWeek.set(weekKey, [...weekLessons, day]);
    }
  }
  return built;
}
