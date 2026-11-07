import { describe, expect, it } from "vitest";
import { makePlayable, standardShape } from "../../test/fixtures/course";
import { addPracticeDay, chooseTracks, completeDay, dayIdOf, emptyProgress, markViewed, recordAnswer, setPosition, skipActivity } from "./progress";

const T = (n: number) => `2026-11-0${n}T10:00:00.000Z`;

describe("recordAnswer", () => {
  it("records a first-try answer", () => {
    const p = recordAnswer(emptyProgress(), "a1.practice1", true, T(1));
    expect(p.activities["a1.practice1"]).toEqual({ correct: true, attempts: 1, at: T(1) });
    expect(p.mistakes).toEqual({});
  });
  it("counts retries and keeps the latest result", () => {
    let p = recordAnswer(emptyProgress(), "a1.practice1", false, T(1));
    p = recordAnswer(p, "a1.practice1", true, T(2));
    expect(p.activities["a1.practice1"]).toMatchObject({ correct: true, attempts: 2 });
    expect(p.mistakes).toEqual({});
  });
  it("adds a mistake after the second wrong try in a row, once", () => {
    let p = recordAnswer(emptyProgress(), "a1.practice1", false, T(1));
    expect(p.mistakes).toEqual({});
    p = recordAnswer(p, "a1.practice1", false, T(2));
    expect(p.mistakes).toEqual({ "a1.practice1": T(2) });
    p = recordAnswer(p, "a1.practice1", false, T(3));
    expect(p.mistakes["a1.practice1"]).toBe(T(2));
  });
  it("does not count wrong, right, wrong as two in a row", () => {
    let p = recordAnswer(emptyProgress(), "x.1", false, T(1));
    p = recordAnswer(p, "x.1", true, T(2));
    p = recordAnswer(p, "x.1", false, T(3));
    expect(p.mistakes).toEqual({});
  });
  it("Practice again removes a mistake on a correct answer and leaves lesson records alone", () => {
    let p = recordAnswer(recordAnswer(emptyProgress(), "x.1", false, T(1)), "x.1", false, T(2));
    p = recordAnswer(p, "x.1", false, T(3), { practice: true });
    expect(p.mistakes).toHaveProperty("x.1");
    p = recordAnswer(p, "x.1", true, T(4), { practice: true });
    expect(p.mistakes).toEqual({});
    expect(p.activities["x.1"].attempts).toBe(2);
  });
  it("does not change the input", () => {
    const p = emptyProgress();
    recordAnswer(p, "x.1", true, T(1));
    expect(p.activities).toEqual({});
  });
});

describe("viewed and skipped", () => {
  it("a viewed card is done and correct, and is not overwritten", () => {
    let p = markViewed(emptyProgress(), "x.1", T(1));
    p = markViewed(p, "x.1", T(2));
    expect(p.activities["x.1"]).toEqual({ correct: true, attempts: 1, at: T(1) });
  });
  it("Choose instead is done, not correct, never a mistake", () => {
    const p = skipActivity(emptyProgress(), "x.1", T(1));
    expect(p.activities["x.1"]).toMatchObject({ correct: false, skipped: true });
    expect(p.mistakes).toEqual({});
  });
  it("a skipped speaking activity answered by choice is recorded, not a mistake", () => {
    let p = skipActivity(emptyProgress(), "x.1", T(1));
    p = recordAnswer(p, "x.1", false, T(2));
    expect(p.mistakes).toEqual({});
  });
});

describe("position, practice days, tracks", () => {
  it("stores the resume position", () => {
    expect(setPosition(emptyProgress(), "a1", "a1.learn2", T(1)).position).toEqual({ dayId: "a1", activityId: "a1.learn2", at: T(1) });
  });
  it("keeps practice days unique, newest last, at most 60", () => {
    let p = emptyProgress();
    for (let i = 0; i < 70; i++) p = addPracticeDay(p, `2026-01-${String(i).padStart(2, "0")}`, T(1));
    p = addPracticeDay(p, "2026-01-69", T(1));
    expect(p.practiceDays).toHaveLength(60);
    expect(p.practiceDays.at(-1)).toBe("2026-01-69");
    expect(p.practiceDays[0]).toBe("2026-01-10");
  });
  it("choosing tracks marks them asked", () => {
    expect(chooseTracks(emptyProgress(), [], T(1))).toMatchObject({ tracks: [], tracksAsked: true });
  });
  it("finds the day of an activity id", () => {
    expect(dayIdOf("past-simple-yesterday.g-arrange-0")).toBe("past-simple-yesterday");
  });
});

describe("completeDay", () => {
  const day = makePlayable("a1", standardShape);
  it("compacts the day's records into a summary, keeping mistakes and other days", () => {
    let p = emptyProgress();
    p = recordAnswer(p, "a1.learn1", true, T(1));
    p = recordAnswer(p, "a1.practice1", false, T(1));
    p = recordAnswer(p, "a1.practice1", false, T(2));
    p = recordAnswer(p, "a1.practice1", true, T(3));
    p = recordAnswer(p, "a2.learn1", true, T(3));
    p = setPosition(p, "a1", "a1.speak1", T(3));
    const done = completeDay(p, day, T(4));
    expect(done.completed.a1).toEqual({ at: T(4), correct: 1, total: 5 });
    expect(Object.keys(done.activities)).toEqual(["a2.learn1"]);
    expect(done.mistakes).toHaveProperty("a1.practice1");
    expect(done.position).toBeUndefined();
  });
  it("keeps a resume position in another day", () => {
    const p = completeDay(setPosition(emptyProgress(), "a2", "a2.learn1", T(1)), day, T(2));
    expect(p.position?.dayId).toBe("a2");
  });
});
