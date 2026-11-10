import { describe, expect, it } from "vitest";
import { makeLesson } from "../../test/fixtures/lessons";
import { fixItProblems } from "./checks";
import type { FixIt, Lesson } from "./types";

/** A lesson whose Don't say cards carry these Fix-it tags. */
const tagged = (id: string, tags: FixIt[]): Lesson => {
  const lesson = makeLesson(id);
  return { ...lesson, learn: tags.map((fixIt, i) => ({ id: `t${i}`, type: "dontSay" as const, wrong: "I hungry.", right: "I am hungry.", why: { en: "English needs am here: I am hungry.", te: "ఇంగ్లీష్‌లో am కావాలి." }, fixIt })) };
};
const week = (n: number, tags: FixIt[]) => ({ day: tagged(`lesson-${n}`, tags), weekKey: `main:${n}` });
const ALWAYS: FixIt[] = ["be", "state-ing", "indian-english"];

describe("the Fix-it strand check", () => {
  it("passes when every week tags 3 errors and each started error returns within 3 weeks", () => {
    const items = [week(1, ALWAYS), week(2, [...ALWAYS, "question"]), week(3, [...ALWAYS, "preposition"]), week(4, ["be", "question", "preposition"])];
    expect(fixItProblems(items)).toEqual([]);
  });

  it("flags a week with fewer than 3 different errors", () => {
    expect(fixItProblems([week(1, ["be", "be"])])).toContain("fix-it-week: Week 1 tags 1 Fix-it error(s) (needs at least 3 different ones)");
  });

  it("flags an error missing for 3 weeks in a row after its start week", () => {
    const items = [1, 2, 3, 4, 5].map((n) => week(n, n === 1 ? ALWAYS : ["be", "indian-english", "question"]));
    expect(fixItProblems(items).some((p) => p.startsWith('fix-it-gap: "state-ing"'))).toBe(true);
  });

  it("ignores tracks and errors that have not started yet", () => {
    expect(fixItProblems([week(1, ALWAYS), { day: tagged("track-1", []), weekKey: "grandchildren:1" }])).toEqual([]);
  });
});
