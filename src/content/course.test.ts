import { describe, expect, it } from "vitest";
import { course, dayAfter, findDay, mainWeeks, releasedDayRefs } from "./course";
import { grammar } from "./grammar";
import { topics } from "./topics";

describe("course map", () => {
  it("has five stages covering weeks 1–150 without gaps", () => {
    expect(course.stages.map((s) => [s.firstWeek, s.lastWeek])).toEqual([[1, 12], [13, 40], [41, 80], [81, 120], [121, 150]]);
    expect(mainWeeks().map((w) => w.n)).toEqual(Array.from({ length: 150 }, (_, i) => i + 1));
    for (const s of course.stages) {
      expect(s.weeks[0].n).toBe(s.firstWeek);
      expect(s.weeks.at(-1)?.n).toBe(s.lastWeek);
    }
  });

  it("has both languages for every title", () => {
    const bis = [
      ...course.stages.flatMap((s) => [s.title, s.canDo, ...s.weeks.map((w) => w.title)]),
      ...course.tracks.flatMap((t) => [t.title, t.forWho, ...t.weeks.map((w) => w.title)]),
    ];
    for (const b of bis) {
      expect(b.en.trim()).not.toBe("");
      expect(b.te).toMatch(/[ఀ-౿]/);
    }
  });

  it("releases all of Stage 1 (Weeks 1–12), with seven day refs each and unique ids", () => {
    expect(mainWeeks().filter((w) => w.released).map((w) => w.n)).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    for (const w of [...mainWeeks(), ...course.tracks.flatMap((t) => t.weeks)]) {
      if (!w.released) expect(w.days).toEqual([]);
    }
    const refs = releasedDayRefs();
    expect(refs).toHaveLength(84);
    expect(refs[0].ref.id).toBe("sentence-basics");
    expect(refs[6]).toMatchObject({ ref: { id: "w1-review", kind: "review" } });
    expect(refs[12]).toMatchObject({ ref: { id: "w2-conversation", kind: "conversation" } });
    expect(refs[13]).toMatchObject({ ref: { id: "w2-review", kind: "review" } });
    expect(refs[83]).toMatchObject({ ref: { id: "w12-review", kind: "review" } });
    const ids = refs.map((r) => r.ref.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id.length).toBeLessThanOrEqual(40);
  });

  it("lists the two tracks offered at Week 13, all unreleased", () => {
    expect(course.tracks.map((t) => [t.id, t.weeks.length, t.offerAtWeek])).toEqual([["grandchildren", 8, 13], ["abroad", 12, 13]]);
  });
});

describe("tag lists", () => {
  it("have both languages and the keys the plan names", () => {
    for (const b of [...Object.values(grammar), ...Object.values(topics)]) {
      expect(b.en).not.toBe("");
      expect(b.te.trim()).not.toBe("");
    }
    expect(grammar["past-simple"]).toBeDefined();
    expect(Object.keys(topics)).toHaveLength(22);
  });
});

describe("findDay", () => {
  it("computes Day N from the week and position", () => {
    expect(findDay("sentence-basics")?.number).toBe(1);
    expect(findDay("w1-review")?.number).toBe(7);
  });
  it("is null for an unknown id", () => {
    expect(findDay("nope")).toBeNull();
  });
});

describe("dayAfter", () => {
  it("is the next day (across weeks), and null after the last released day", () => {
    expect(dayAfter("sentence-basics")?.ref.id).toBe("i-am-you-are");
    expect(dayAfter("sentence-basics")?.number).toBe(2);
    expect(dayAfter("w1-review")).toMatchObject({ ref: { id: "what-and-where" }, number: 8 });
    expect(dayAfter("w2-review")).toMatchObject({ ref: { id: "numbers-and-counting" }, number: 15 });
    expect(dayAfter("w12-review")).toBeNull();
    expect(dayAfter("nope")).toBeNull();
  });
});
