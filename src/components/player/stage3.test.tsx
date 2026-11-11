import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { accentDialogue, samplePassage, sampleStory } from "../../../test/fixtures/stage3";
import { EnglishModeCardView } from "@/components/learn/EnglishModeCard";
import { DEFAULT_SETTINGS } from "@/learning/settings";
import { updateSettings } from "@/lib/settings-store";
import { speak } from "@/lib/speak";
import { Dialogue, LINE_PAUSE_MS } from "./Dialogue";
import { Passage } from "./Passage";
import { Story } from "./Story";

vi.mock("@/lib/speak", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/speak")>()),
  narrate: vi.fn(),
  narrateAll: vi.fn(),
  speak: vi.fn(),
  stopSpeaking: vi.fn(),
}));

const click = (name: RegExp | string) => fireEvent.click(screen.getByRole("button", { name }));
const answer = (option: string) => {
  click(option);
  click(/^Check/);
  click(/^Continue/);
};

beforeEach(() => {
  vi.mocked(speak).mockReset();
  updateSettings({ ...DEFAULT_SETTINGS, learnIn: "en", autoPlay: true });
});
afterEach(() => vi.useRealTimers());

describe("Story (owner, 2026-11-11)", () => {
  it("plays the parts one after another in the teller's voice, with no words yet; Slow re-reads the part slowly", () => {
    vi.useFakeTimers();
    render(<Story activity={sampleStory} onNext={vi.fn()} />);
    expect(speak).toHaveBeenLastCalledWith(sampleStory.parts[0].en, expect.objectContaining({ voice: "a", slow: false }));
    expect(screen.getByText("Part 1 of 6")).toBeTruthy();
    act(() => vi.mocked(speak).mock.lastCall![1]!.onEnd!());
    act(() => void vi.advanceTimersByTime(LINE_PAUSE_MS));
    expect(speak).toHaveBeenLastCalledWith(sampleStory.parts[1].en, expect.objectContaining({ voice: "a" }));
    expect(screen.queryByText(sampleStory.parts[1].en)).toBeNull(); // heard, not read
    click("Listen slowly");
    expect(speak).toHaveBeenLastCalledWith(sampleStory.parts[1].en, expect.objectContaining({ slow: true }));
  });

  it("pauses and goes on from the same part", () => {
    render(<Story activity={sampleStory} onNext={vi.fn()} />);
    click(/^Pause/);
    vi.mocked(speak).mockClear();
    click(/^Go on/);
    expect(speak).toHaveBeenLastCalledWith(sampleStory.parts[0].en, expect.anything());
  });

  it("asks question 1 by ear, then shows the story as paragraphs for the rest", () => {
    const onNext = vi.fn();
    render(<Story activity={sampleStory} onNext={onNext} />);
    click(/^Continue/);
    expect(screen.getByText("What is the story about?")).toBeTruthy();
    expect(screen.queryByText(sampleStory.parts[0].en)).toBeNull();
    answer("A lost purse on a bus");
    expect(screen.getByText("Told by Sarala")).toBeTruthy();
    expect(screen.getByText(sampleStory.parts[0].en)).toBeTruthy();
    answer("To the hospital");
    answer("Her Aadhaar card and money");
    answer("The young man");
    click(/^Continue/);
    expect(onNext).toHaveBeenCalledTimes(1);
  });
});

describe("Passage (owner, 2026-11-11)", () => {
  it("shows the text first, then its questions with the text folded above; one result for the whole passage", () => {
    const onAnswer = vi.fn();
    const onNext = vi.fn();
    render(<Passage activity={samplePassage} onAnswer={onAnswer} onNext={onNext} />);
    expect(screen.getByText("Read this, then answer the questions.")).toBeTruthy();
    expect(screen.getByText("Please visit your branch before that date with:").className).toContain("font-bold");
    click(/^Questions/);
    expect(screen.queryByText("Dear Customer,")).toBeNull(); // folded
    click(/Show the text/);
    expect(screen.getByText("Dear Customer,")).toBeTruthy();
    expect(screen.getByText("1 / 3")).toBeTruthy();
    answer("On 15 March");
    click("Nothing at all"); // a wrong first try on question 2
    click(/^Check/);
    click(/^Try again/);
    answer("Your FD receipt and Aadhaar card");
    answer("It is renewed for a year");
    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith(false);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("is right when every question was right the first time", () => {
    const onAnswer = vi.fn();
    render(<Passage activity={samplePassage} onAnswer={onAnswer} onNext={vi.fn()} />);
    click(/^Questions/);
    answer("On 15 March");
    answer("Your FD receipt and Aadhaar card");
    answer("It is renewed for a year");
    expect(onAnswer).toHaveBeenCalledWith(true);
  });
});

describe("accent labels", () => {
  it("name each line's accent in a conversation with accent voices, and the accent voices play", () => {
    render(<Dialogue activity={accentDialogue} onNext={vi.fn()} />);
    expect(speak).toHaveBeenLastCalledWith(accentDialogue.lines[0].en, expect.objectContaining({ voice: "us-m" }));
    click(/^Continue/);
    answer("The apartment office");
    expect(screen.getAllByText("American").length).toBe(2);
    expect(screen.getAllByText("Indian").length).toBe(2);
    expect(screen.getByText("British")).toBeTruthy();
  });
});

describe("English explanations card", () => {
  it("offers Try English and Not now", () => {
    const onTry = vi.fn();
    const onNotNow = vi.fn();
    render(<EnglishModeCardView onTry={onTry} onNotNow={onNotNow} />);
    expect(screen.getByText("Try explanations in English?")).toBeTruthy();
    click(/^Try English/);
    expect(onTry).toHaveBeenCalled();
    fireEvent.click(screen.getAllByRole("button", { name: /Not now/ })[0]);
    expect(onNotNow).toHaveBeenCalled();
  });
});
