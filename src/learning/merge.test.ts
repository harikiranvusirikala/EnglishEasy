import { describe, expect, it } from "vitest";
import { mergeProgress, sameProgress } from "./merge";
import { emptyProgress, type Progress } from "./progress";

const T = (n: number) => `2026-11-0${n}T10:00:00.000Z`;
const make = (patch: Partial<Progress>): Progress => ({ ...emptyProgress(T(1)), ...patch });
const rec = (at: string, correct = true, attempts = 1) => ({ correct, attempts, at });

describe("mergeProgress", () => {
  it("keeps answers from two devices that did different things", () => {
    const a = make({ activities: { "d1.a": rec(T(2)) }, updatedAt: T(2) });
    const b = make({ activities: { "d2.b": rec(T(3)) }, practiceDays: ["2026-11-03"], updatedAt: T(3) });
    const m = mergeProgress(a, b);
    expect(Object.keys(m.activities).sort()).toEqual(["d1.a", "d2.b"]);
    expect(m.practiceDays).toEqual(["2026-11-03"]);
    expect(m.updatedAt).toBe(T(3));
  });

  it("takes the later answer for the same activity, with the most attempts", () => {
    const a = make({ activities: { "d.x": rec(T(2), false, 3) } });
    const b = make({ activities: { "d.x": rec(T(3), true, 1) } });
    expect(mergeProgress(a, b).activities["d.x"]).toEqual({ correct: true, attempts: 3, at: T(3) });
    expect(mergeProgress(b, a).activities["d.x"]).toEqual({ correct: true, attempts: 3, at: T(3) });
  });

  it("a day completed on one side wins: its activity records are dropped, the earlier time and best score kept", () => {
    const a = make({ completed: { d: { at: T(4), correct: 5, total: 10 } } });
    const b = make({ activities: { "d.x": rec(T(2)), "e.y": rec(T(2)) }, completed: { d: { at: T(3), correct: 8, total: 10 } } });
    const m = mergeProgress(a, b);
    expect(m.completed.d).toEqual({ at: T(3), correct: 8, total: 10 });
    expect(Object.keys(m.activities)).toEqual(["e.y"]);
    expect(mergeProgress(b, a)).toEqual(m);
  });

  it("completed on one side and in progress on the other", () => {
    const m = mergeProgress(make({ completed: { d: { at: T(2), correct: 1, total: 2 } } }), make({ activities: { "d.x": rec(T(1)) } }));
    expect(m.activities).toEqual({});
    expect(Object.keys(m.completed)).toEqual(["d"]);
  });

  it("keeps a mistake from one side, drops it when the other side answered it correctly afterwards", () => {
    const a = make({ mistakes: { "d.x": T(2), "e.y": T(2) } });
    const b = make({ activities: { "d.x": rec(T(3), true, 2) }, updatedAt: T(3) });
    expect(Object.keys(mergeProgress(a, b).mistakes).sort()).toEqual(["e.y"]);
  });

  it("a mistake cleared by Practice again on one device stays cleared", () => {
    const stale = make({ mistakes: { "d.x": T(2) }, updatedAt: T(2) });
    const cleared = make({ completed: { d: { at: T(2), correct: 1, total: 2 } }, updatedAt: T(5) });
    expect(mergeProgress(stale, cleared).mistakes).toEqual({});
    expect(mergeProgress(cleared, stale).mistakes).toEqual({});
  });

  it("a mistake the other device has never heard of is kept", () => {
    const stale = make({ mistakes: { "d.x": T(2) }, updatedAt: T(2) });
    const other = make({ completed: { e: { at: T(2), correct: 1, total: 2 } }, updatedAt: T(5) });
    expect(Object.keys(mergeProgress(stale, other).mistakes)).toEqual(["d.x"]);
  });

  it("keeps the later position, unless its day was completed after it", () => {
    const a = make({ position: { dayId: "d", activityId: "d.a", at: T(2) } });
    const b = make({ position: { dayId: "e", activityId: "e.a", at: T(3) } });
    expect(mergeProgress(a, b).position?.dayId).toBe("e");
    const done = make({ completed: { e: { at: T(4), correct: 1, total: 1 } } });
    expect(mergeProgress(b, done).position).toBeUndefined();
    expect(mergeProgress(a, make({})).position?.dayId).toBe("d");
  });

  it("unions practice days (sorted, last 60), tracks and tracksAsked", () => {
    const days = (from: number, n: number) => Array.from({ length: n }, (_, i) => `2026-${String(Math.floor((from + i) / 30) + 1).padStart(2, "0")}-${String(((from + i) % 30) + 1).padStart(2, "0")}`);
    const m = mergeProgress(make({ practiceDays: days(0, 40), tracks: ["travel"] }), make({ practiceDays: days(30, 50), tracks: ["work", "travel"], tracksAsked: true }));
    expect(m.practiceDays).toHaveLength(60);
    expect(m.practiceDays).toEqual([...m.practiceDays].sort());
    expect(m.practiceDays.at(-1)).toBe(days(79, 1)[0]);
    expect(m.tracks.sort()).toEqual(["travel", "work"]);
    expect(m.tracksAsked).toBe(true);
  });

  it("merging with empty progress changes nothing", () => {
    const a = make({ activities: { "d.x": rec(T(2)) }, completed: { e: { at: T(2), correct: 1, total: 1 } }, practiceDays: ["2026-11-02"], updatedAt: T(2) });
    expect(sameProgress(mergeProgress(a, emptyProgress()), a)).toBe(true);
  });

  it("is idempotent: merge(a, a) = a", () => {
    const a = make({
      activities: { "d.x": rec(T(2), false, 2) },
      completed: { e: { at: T(2), correct: 3, total: 4 } },
      mistakes: { "d.y": T(2) },
      practiceDays: ["2026-11-01", "2026-11-02"],
      position: { dayId: "d", activityId: "d.x", at: T(2) },
      tracks: ["travel"],
      tracksAsked: true,
      updatedAt: T(2),
    });
    expect(mergeProgress(a, a)).toEqual(a);
    const b = make({ activities: { "d.z": rec(T(3)) }, updatedAt: T(3) });
    const m = mergeProgress(a, b);
    expect(sameProgress(mergeProgress(m, a), m)).toBe(true);
    expect(sameProgress(mergeProgress(m, b), m)).toBe(true);
  });

  describe("after a signed-in Start over", () => {
    const old = make({
      activities: { "d.x": rec(T(2)), "d.late": rec(T(5)) },
      completed: { e: { at: T(2), correct: 3, total: 4 } },
      mistakes: { "d.y": T(2) },
      practiceDays: ["2026-11-02", "2026-11-05"],
      position: { dayId: "d", activityId: "d.x", at: T(2) },
      tracks: ["abroad"],
      tracksAsked: true,
      tripSoon: true,
      review: { "e.k0": { box: 2, due: "2026-11-09", at: T(2) } },
      updatedAt: T(5),
    });
    const reset = make({ activities: { "f.a": rec(T(4)) }, resetAt: T(3), updatedAt: T(4) });

    it("drops what the other copy learned before the reset; keeps what came after, and the goals", () => {
      for (const m of [mergeProgress(old, reset), mergeProgress(reset, old)]) {
        expect(Object.keys(m.activities).sort()).toEqual(["d.late", "f.a"]);
        expect(m.completed).toEqual({});
        expect(m.mistakes).toEqual({});
        expect(m.review).toBeUndefined();
        expect(m.position).toBeUndefined();
        expect(m.practiceDays).toEqual(["2026-11-05"]);
        expect(m.tracks).toEqual(["abroad"]);
        expect(m.tracksAsked).toBe(true);
        expect(m.resetAt).toBe(T(3));
      }
    });

    it("an older reset gives way to a newer one; merging again changes nothing but the goals", () => {
      const newer = make({ resetAt: T(6), updatedAt: T(6) });
      const m = mergeProgress(reset, newer);
      expect(m.activities).toEqual({});
      expect(m.resetAt).toBe(T(6));
      expect(sameProgress(mergeProgress(m, reset), m)).toBe(true);
      expect(mergeProgress(m, old)).toEqual({ ...m, tracks: ["abroad"], tracksAsked: true, updatedAt: T(6) }); // the trip flag follows the copy saved last
    });
  });
});

describe("sameProgress", () => {
  it("ignores key order", () => {
    const a = make({ activities: { x: rec(T(1)), y: rec(T(1)) } });
    const b = make({ activities: { y: rec(T(1)), x: rec(T(1)) } });
    expect(sameProgress(a, b)).toBe(true);
    expect(sameProgress(a, make({}))).toBe(false);
  });
});
