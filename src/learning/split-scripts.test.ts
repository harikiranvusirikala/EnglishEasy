import { describe, expect, it } from "vitest";
import { splitScripts } from "./split-scripts";

describe("splitScripts", () => {
  it("returns one run for plain English", () => {
    expect(splitScripts("I eat rice.")).toEqual([{ text: "I eat rice.", script: "en" }]);
  });

  it("returns one run for plain Telugu", () => {
    expect(splitScripts("నేను అన్నం తింటాను.")).toEqual([{ text: "నేను అన్నం తింటాను.", script: "te" }]);
  });

  it("splits a mixed sentence; spaces and punctuation join the run before them", () => {
    expect(splitScripts("verb ని past form లో వాడాలి.")).toEqual([
      { text: "verb", script: "en" },
      { text: "ని", script: "te" },
      { text: "past form", script: "en" },
      { text: "లో వాడాలి.", script: "te" },
    ]);
  });

  it("keeps digits with the run before them", () => {
    expect(splitScripts("ఇది Day 1 లో ఉంది")).toEqual([
      { text: "ఇది", script: "te" },
      { text: "Day 1", script: "en" },
      { text: "లో ఉంది", script: "te" },
    ]);
  });

  it("puts leading punctuation with the first run and ignores empty text", () => {
    expect(splitScripts('"Hello" అన్నారు')).toEqual([
      { text: '"Hello"', script: "en" },
      { text: "అన్నారు", script: "te" },
    ]);
    expect(splitScripts("  ")).toEqual([]);
    expect(splitScripts("")).toEqual([]);
  });
});
