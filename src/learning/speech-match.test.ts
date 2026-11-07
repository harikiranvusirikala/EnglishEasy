import { describe, expect, it } from "vitest";
import { judgeSpeech, speechWords } from "./speech-match";

describe("speechWords", () => {
  it.each([
    ["I'm going.", ["i", "am", "going"]],
    ["I’m going", ["i", "am", "going"]],
    ["They don't play cricket!", ["they", "do", "not", "play", "cricket"]],
    ["He didn't come", ["he", "did", "not", "come"]],
    ["I won't go", ["i", "will", "not", "go"]],
    ["I can't swim", ["i", "can", "not", "swim"]],
    ["I cannot swim", ["i", "can", "not", "swim"]],
    ["It's raining", ["it", "is", "raining"]],
    ["I'll call you", ["i", "will", "call", "you"]],
    ["We've finished", ["we", "have", "finished"]],
    ["You're late", ["you", "are", "late"]],
    ["Let's go", ["let", "us", "go"]],
    ["um, I eat uh rice", ["i", "eat", "rice"]],
    ["I want 2 teas", ["i", "want", "two", "teas"]],
    ["I'm gonna go", ["i", "am", "going", "to", "go"]],
    ["", []],
  ])("%s", (text, words) => expect(speechWords(text)).toEqual(words));
});

describe("judgeSpeech", () => {
  const level = (expected: string[], heard: string[]) => judgeSpeech(expected, heard).level;

  it.each([
    [["I am going to the market."], ["I'm going to the market"], "great"],
    [["I'm going to the market."], ["I am going to the market"], "great"],
    [["I drink tea."], ["i drink tea"], "great"],
    [["I drink tea."], ["Um, I drink, uh, tea."], "great"],
    [["I drink tea."], ["well I drink tea every day"], "great"],
    [["They don't play cricket."], ["they do not play cricket"], "great"],
    [["I want two cups."], ["I want 2 cups"], "great"],
    [["We speak Telugu at home today please."], ["we speak telugu at home today"], "great"],
    [["I eat rice every day."], ["I eat rice"], "good"],
    [["I eat rice every day."], ["I eat every day"], "good"],
    [["I drink tea."], ["I tea"], "good"],
    [["I drink tea."], ["tea"], "retry"],
    [["I drink tea."], ["rice"], "retry"],
    [["I drink tea."], ["tea drink I"], "retry"],
    [["I drink tea."], [""], "retry"],
    [["I drink tea."], [], "retry"],
    [["I drink tea."], ["he drinks coffee"], "retry"],
  ])("%j heard %j → %s", (expected, heard, want) => expect(level(expected, heard)).toBe(want));

  it("takes the best of several accepted sentences", () => {
    const r = judgeSpeech(["I drink tea.", "I drink coffee.", "I drink milk."], ["I drink coffee"]);
    expect(r).toMatchObject({ level: "great", best: 1, heard: "I drink coffee" });
  });

  it("takes the best recognition alternative", () => {
    const r = judgeSpeech(["We speak Telugu."], ["we speaks to lugu", "we speak telugu"]);
    expect(r).toMatchObject({ level: "great", heard: "we speak telugu" });
  });

  it("keeps grammar: a wrong verb form is not great", () => {
    expect(level(["She drinks tea."], ["she drink tea"])).toBe("good");
    expect(level(["She drinks tea."], ["she drinks tea"])).toBe("great");
  });

  it("ignores an empty expected sentence", () => {
    expect(judgeSpeech([""], ["hello"]).level).toBe("retry");
  });
});
