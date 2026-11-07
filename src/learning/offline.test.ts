import { describe, expect, it } from "vitest";
import { course } from "@/content/course";
import { emptyProgress } from "./progress";
import { installMode, lessonUrl, lessonsToKeep } from "./offline";
import { fixtureCourse } from "../../test/fixtures/course";

const written = ["sentence-basics", "i-am-you-are", "present-simple-every-day", "present-continuous-right-now", "past-simple-yesterday", "future-will-tomorrow", "w1-review"];

describe("lessonsToKeep", () => {
  it("keeps the written lessons of the current week at the start", () => {
    expect(lessonsToKeep(course, emptyProgress(), written)).toEqual(written.map(lessonUrl));
  });

  it("skips days that are not written yet and does not repeat", () => {
    expect(lessonsToKeep(course, emptyProgress(), ["sentence-basics"])).toEqual(["/content/sentence-basics.json"]);
  });

  it("adds the next released week", () => {
    const all = ["a1", "a2", "b1"];
    expect(lessonsToKeep(fixtureCourse, emptyProgress(), all)).toEqual(all.map(lessonUrl)); // week 12 and week 13
    const done = { ...emptyProgress(), completed: { a1: { at: "x", correct: 1, total: 1 }, a2: { at: "x", correct: 1, total: 1 } } };
    expect(lessonsToKeep(fixtureCourse, done, all)).toEqual(["/content/b1.json"]); // week 13, week 14 is not released
  });

  it("is empty when the written list is empty", () => {
    expect(lessonsToKeep(fixtureCourse, emptyProgress(), [])).toEqual([]);
  });
});

describe("installMode", () => {
  const base = { standalone: false, ios: false, canPrompt: false, dismissed: false };
  it("offers the Install button when the browser allows it", () => {
    expect(installMode({ ...base, canPrompt: true })).toBe("prompt");
  });
  it("shows picture steps on an iPhone", () => {
    expect(installMode({ ...base, ios: true })).toBe("ios");
  });
  it("hides when installed, dismissed or impossible", () => {
    expect(installMode({ ...base, canPrompt: true, standalone: true })).toBe("none");
    expect(installMode({ ...base, ios: true, dismissed: true })).toBe("none");
    expect(installMode(base)).toBe("none");
  });
});
