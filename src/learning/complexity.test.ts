import { describe, expect, it } from "vitest";
import { needsSlow, sentenceLevel } from "./complexity";

describe("sentenceLevel", () => {
  it("counts words, ignoring punctuation-only pieces", () => {
    expect(sentenceLevel("I eat rice.")).toBe("simple");
    expect(sentenceLevel("What do you drink in the morning?")).toBe("medium");
    expect(sentenceLevel("I am hungry because I haven't eaten anything since the morning.")).toBe("high");
    expect(sentenceLevel("Yes — I do.")).toBe("simple");
  });
  it("offers Slow for medium and high sentences only", () => {
    expect(needsSlow("I drink tea.")).toBe(false);
    expect(needsSlow("Good evening. What would you like?")).toBe(true);
  });
});
