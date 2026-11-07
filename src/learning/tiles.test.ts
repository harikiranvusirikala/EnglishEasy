import { describe, expect, it } from "vitest";
import { makeTiles, sameSentence, wordsOf } from "./tiles";

describe("sameSentence", () => {
  it("ignores case and punctuation", () => {
    expect(sameSentence("i eat Rice", "I eat rice.")).toBe(true);
    expect(sameSentence("Hello, how are you?", "hello how are you")).toBe(true);
  });
  it("cares about word order and missing words", () => {
    expect(sameSentence("eat I rice", "I eat rice.")).toBe(false);
    expect(sameSentence("I eat", "I eat rice.")).toBe(false);
  });
});

describe("makeTiles", () => {
  it("has one tile per word plus the extras, with unique ids even for repeated words", () => {
    const tiles = makeTiles("The cat saw the dog.", ["am"], "x");
    expect(tiles).toHaveLength(6);
    expect(new Set(tiles.map((t) => t.id)).size).toBe(6);
    expect(tiles.filter((t) => t.word.toLowerCase() === "the")).toHaveLength(2);
  });
  it("is the same for the same seed and is never already solved", () => {
    expect(makeTiles("I eat rice.", ["am"], "a")).toEqual(makeTiles("I eat rice.", ["am"], "a"));
    for (let i = 0; i < 40; i++) {
      const tiles = makeTiles("I eat rice.", [], `seed${i}`);
      expect(tiles.map((t) => t.word)).not.toEqual(wordsOf("I eat rice."));
    }
  });
});
