import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Activity } from "@/content/types";
import { Build } from "./Build";
import { FindMistake } from "./FindMistake";
import { Match } from "./Match";

const bank = () => within(screen.getByRole("group", { name: "Words" }));
const line = () => within(screen.getByRole("group", { name: "Your sentence" }));
const tap = (name: string) => fireEvent.click(bank().getAllByRole("button", { name })[0]);
const check = () => fireEvent.click(screen.getByRole("button", { name: /^Check/ }));

const arrange: Extract<Activity, { type: "arrange" }> = { id: "d.a1", type: "arrange", te: "నేను అన్నం తింటాను.", answer: "I eat rice.", extra: ["am"] };
const translate: Extract<Activity, { type: "translate" }> = {
  id: "d.t1",
  type: "translate",
  te: "నేను టీ తాగుతాను.",
  answer: "I drink tea.",
  accept: ["I have tea."],
  extra: ["are"],
};
const repeated: Extract<Activity, { type: "arrange" }> = { id: "d.a2", type: "arrange", answer: "The cat saw the dog." };

describe("Build (Arrange / Translate)", () => {
  it("builds the sentence by tapping; Check is off until a tile is placed", () => {
    const onAnswer = vi.fn();
    render(<Build activity={arrange} onAnswer={onAnswer} onNext={vi.fn()} />);
    expect((screen.getByRole("button", { name: /^Check/ }) as HTMLButtonElement).disabled).toBe(true);
    tap("I");
    tap("eat");
    tap("rice.");
    check();
    expect(screen.getByText("Correct!")).toBeTruthy();
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("tapping a placed tile returns it to the words", () => {
    render(<Build activity={arrange} onAnswer={vi.fn()} onNext={vi.fn()} />);
    tap("eat");
    expect(line().getByRole("button", { name: "eat" })).toBeTruthy();
    expect(bank().queryByRole("button", { name: "eat" })).toBeNull();
    fireEvent.click(line().getByRole("button", { name: "eat" }));
    expect(line().queryByRole("button", { name: "eat" })).toBeNull();
    expect(bank().getByRole("button", { name: "eat" })).toBeTruthy();
  });

  it("ignores case and final punctuation, and handles repeated words (the … the)", () => {
    const onAnswer = vi.fn();
    render(<Build activity={repeated} onAnswer={onAnswer} onNext={vi.fn()} />);
    for (const w of ["The", "cat", "saw", "the", "dog."]) tap(w);
    expect(bank().queryAllByRole("button")).toHaveLength(0);
    check();
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("puts the right repeated tile back when one of two identical words is tapped again", () => {
    render(<Build activity={repeated} onAnswer={vi.fn()} onNext={vi.fn()} />);
    tap("The");
    tap("the");
    expect(line().getAllByRole("button")).toHaveLength(2);
    fireEvent.click(line().getAllByRole("button")[0]);
    expect(line().getAllByRole("button")).toHaveLength(1);
    expect(bank().getAllByRole("button").length).toBe(4);
  });

  it("accepts an `accept` alternative for Translate", () => {
    const onAnswer = vi.fn();
    render(<Build activity={{ ...translate, extra: ["have"], answer: "I drink tea.", accept: ["I drink tea"] }} onAnswer={onAnswer} onNext={vi.fn()} />);
    for (const w of ["I", "drink", "tea."]) tap(w);
    check();
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("wrong twice: Almost, keeps the tiles, then shows the answer", () => {
    const onAnswer = vi.fn();
    render(<Build activity={arrange} onAnswer={onAnswer} onNext={vi.fn()} />);
    tap("eat");
    tap("I");
    check();
    expect(screen.getByText("Almost")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /^Try again/ }));
    expect(line().getAllByRole("button")).toHaveLength(2);
    check();
    expect(screen.getByText(/The answer is/)).toBeTruthy();
    expect(onAnswer.mock.calls).toEqual([[false], [false]]);
    expect(screen.getByRole("button", { name: /^Continue/ })).toBeTruthy();
  });

  it("Hint reveals the first word", () => {
    render(<Build activity={translate} onAnswer={vi.fn()} onNext={vi.fn()} />);
    expect(screen.queryByText("It starts with", { exact: false })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /^Hint/ }));
    expect(screen.getByText("I", { selector: "strong" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Hint/ })).toBeNull();
  });
});

describe("Match", () => {
  const match: Extract<Activity, { type: "match" }> = {
    id: "d.m1",
    type: "match",
    pairs: [
      { en: "I eat rice.", te: "నేను అన్నం తింటాను." },
      { en: "I drink tea.", te: "నేను టీ తాగుతాను." },
    ],
  };
  const te = () => within(screen.getByRole("group", { name: "Telugu" }));
  const en = () => within(screen.getByRole("group", { name: "English" }));

  it("a wrong pair does not lock; right pairs lock; finishing allows Continue", () => {
    const onAnswer = vi.fn();
    const onNext = vi.fn();
    render(<Match activity={match} onAnswer={onAnswer} onNext={onNext} />);
    expect(screen.queryByRole("button", { name: /^Continue/ })).toBeNull();
    fireEvent.click(te().getByRole("button", { name: "నేను అన్నం తింటాను." }));
    fireEvent.click(en().getByRole("button", { name: "I drink tea." })); // wrong
    expect((en().getByRole("button", { name: "I drink tea." }) as HTMLButtonElement).disabled).toBe(false);
    fireEvent.click(te().getByRole("button", { name: "నేను అన్నం తింటాను." }));
    fireEvent.click(en().getByRole("button", { name: "I eat rice." }));
    expect((en().getByRole("button", { name: "I eat rice." }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(te().getByRole("button", { name: "నేను టీ తాగుతాను." }));
    fireEvent.click(en().getByRole("button", { name: "I drink tea." }));
    expect(onAnswer).toHaveBeenCalledOnce();
    expect(onAnswer).toHaveBeenCalledWith(false); // one slip on the way
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onNext).toHaveBeenCalledOnce();
  });

  it("no slips counts as correct", () => {
    const onAnswer = vi.fn();
    render(<Match activity={match} onAnswer={onAnswer} onNext={vi.fn()} />);
    for (const p of match.pairs) {
      fireEvent.click(te().getByRole("button", { name: p.te }));
      fireEvent.click(en().getByRole("button", { name: p.en }));
    }
    expect(onAnswer).toHaveBeenCalledWith(true);
  });
});

describe("FindMistake", () => {
  const find: Extract<Activity, { type: "findMistake" }> = {
    id: "d.f1",
    type: "findMistake",
    sentence: "We are speak Telugu.",
    wrongIndex: 1,
    fix: "We speak Telugu.",
    why: { en: "Take out are.", te: "are తీసేయండి." },
  };

  it("right word: shows the fix and the reason", () => {
    const onAnswer = vi.fn();
    render(<FindMistake activity={find} onAnswer={onAnswer} onNext={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "are" }));
    check();
    expect(onAnswer).toHaveBeenCalledWith(true);
    expect(screen.getByText("We speak Telugu.")).toBeTruthy();
  });

  it("wrong word twice: shows the fix anyway", () => {
    const onAnswer = vi.fn();
    render(<FindMistake activity={find} onAnswer={onAnswer} onNext={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "speak" }));
    check();
    expect(screen.getByText("Almost")).toBeTruthy();
    expect(screen.queryByText("We speak Telugu.")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /^Try again/ }));
    fireEvent.click(screen.getByRole("button", { name: "speak" }));
    check();
    expect(screen.getByText("We speak Telugu.")).toBeTruthy();
    expect(onAnswer.mock.calls).toEqual([[false], [false]]);
  });
});
