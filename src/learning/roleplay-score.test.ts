import { describe, expect, it } from "vitest";
import { scoreRolePlay } from "./roleplay-score";

const skills = [
  { id: "greet", label: { en: "Greeting", te: "పలకరింపు" } },
  { id: "order", label: { en: "Ordering", te: "ఆర్డర్" } },
];

describe("scoreRolePlay", () => {
  it("scores all good tapped replies 10 and has no speaking score", () => {
    const score = scoreRolePlay({ skills }, [
      { good: true, skill: "greet" },
      { good: true, skill: "order" },
    ]);
    expect(score).toEqual({ speaking: null, conversation: 10, good: ["greet", "order"], practiceMore: [] });
  });

  it("averages the speech scores of spoken replies only", () => {
    const score = scoreRolePlay({ skills }, [
      { good: true, skill: "greet", speech: 1 },
      { good: true, skill: "order", speech: 0.6 },
      { good: true },
    ]);
    expect(score.speaking).toBe(8);
    expect(score.conversation).toBe(10);
  });

  it("puts a skill with any not-good reply under practice more", () => {
    const score = scoreRolePlay({ skills }, [
      { good: true, skill: "greet" },
      { good: false, skill: "order" },
      { good: true, skill: "order" },
      { good: true },
    ]);
    expect(score.good).toEqual(["greet"]);
    expect(score.practiceMore).toEqual(["order"]);
    expect(score.conversation).toBe(8); // 3 of 4, rounded
  });

  it("ignores skills nobody used and handles an empty role play", () => {
    expect(scoreRolePlay({ skills }, [])).toEqual({ speaking: null, conversation: 0, good: [], practiceMore: [] });
    expect(scoreRolePlay({ skills }, [{ good: false }]).practiceMore).toEqual([]);
  });

  it("keeps scores between 0 and 10", () => {
    expect(scoreRolePlay({ skills }, [{ good: true, speech: 1.4 }]).speaking).toBe(10);
    expect(scoreRolePlay({ skills }, [{ good: false, speech: -1 }]).speaking).toBe(0);
  });
});
