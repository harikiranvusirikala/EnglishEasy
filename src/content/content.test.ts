import { describe, expect, it } from "vitest";
import { brokenLessons } from "../../test/fixtures/bad-lessons";
import { makeLesson } from "../../test/fixtures/lessons";
import { buildAll } from "./build";
import { checkCourse, checkDay } from "./checks";
import { course } from "./course";
import { expandLesson } from "./generate";
import { isWritten, loadDay, writtenDayIds } from "./load";
import { playableDaySchema } from "./schema";
import type { Lesson } from "./types";

describe("every written day", () => {
  it("passes every content rule", async () => {
    const built = await buildAll();
    expect(built.length).toBeGreaterThan(0);
    for (const { day, playable, stage, lane } of built) {
      expect(checkDay(day, playable, { stage, mainPath: lane === "main" }), day.id).toEqual([]);
    }
    expect(checkCourse(built.map((b) => ({ day: b.day, weekKey: `${b.lane}:${b.week}` })))).toEqual([]);
  });

  it("is in the course map with the same kind and title", async () => {
    const refs = course.stages.flatMap((s) => s.weeks).flatMap((w) => w.days);
    for (const id of writtenDayIds()) {
      const ref = refs.find((r) => r.id === id);
      expect(ref, `${id} is registered in load.ts but not in a released week of course.ts`).toBeDefined();
      const day = await loadDay(id);
      expect(day.id).toBe(id);
      expect(day.kind).toBe(ref?.kind);
      expect(day.title).toEqual(ref?.title);
    }
  });

  it("expands to a day the player's schema accepts, and expansion is repeatable", async () => {
    for (const { playable, day } of await buildAll()) {
      expect(playableDaySchema.safeParse(playable).success).toBe(true);
      expect(JSON.parse(JSON.stringify(playable))).toEqual(playable);
      expect(day.id).toBe(playable.id);
    }
  });

  it("knows which days are written", () => {
    expect(isWritten("sentence-basics")).toBe(true);
    expect(isWritten("i-am-you-are")).toBe(true);
    expect(isWritten("past-simple-yesterday")).toBe(true);
    expect(isWritten("future-will-tomorrow")).toBe(true);
    expect(isWritten("w1-review")).toBe(true);
    expect(isWritten("not-a-day")).toBe(false);
  });
});

describe("the checks themselves", () => {
  it.each(Object.entries(brokenLessons))("catch a broken lesson: %s", (code, lesson) => {
    const problems = checkDay(lesson, expandSafely(lesson), { stage: 1, mainPath: true });
    expect(problems.some((p) => p.startsWith(`${code}:`)), `${code} not reported; got ${JSON.stringify(problems)}`).toBe(true);
  });

  it("catches a new word introduced twice and a core sentence repeated in a week", () => {
    const a = makeLesson("lesson-a");
    const b = makeLesson("lesson-b", { words: a.words, core: a.core });
    const problems = checkCourse([
      { day: a, weekKey: "main:1" },
      { day: b, weekKey: "main:1" },
    ]);
    expect(problems.some((p) => p.startsWith("word-once:"))).toBe(true);
    expect(problems.some((p) => p.startsWith("core-duplicate-week:"))).toBe(true);
  });

  it("catches a day id used twice", () => {
    const a = makeLesson("lesson-a");
    expect(checkCourse([{ day: a, weekKey: "main:1" }, { day: a, weekKey: "main:2" }]).some((p) => p.startsWith("day-id-unique:"))).toBe(true);
  });

  it("lets tracks mention a family", () => {
    const lesson = brokenLessons["family-assumption"];
    const problems = checkDay(lesson, expandSafely(lesson), { stage: null, mainPath: false });
    expect(problems.some((p) => p.startsWith("family-assumption:"))).toBe(false);
  });
});

/** Broken fixtures may not expand; the schema check reports those, so fall back to an empty day. */
function expandSafely(lesson: Lesson) {
  try {
    return expandLesson(lesson, []);
  } catch {
    return { id: lesson.id, kind: "lesson" as const, title: { en: "x", te: "x" }, sections: [] };
  }
}
