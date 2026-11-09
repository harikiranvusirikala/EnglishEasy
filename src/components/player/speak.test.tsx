import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { Activity } from "@/content/types";
import { listen, type ListenResult } from "@/lib/listen";
import { updateSettings } from "@/lib/settings-store";
import { DEFAULT_SETTINGS } from "@/learning/settings";
import { MIC_HELP_ID } from "./MicButton";
import { Repeat } from "./Repeat";
import { Situation } from "./Situation";

vi.mock("@/lib/speak", async (importOriginal) => ({ ...(await importOriginal<typeof import("@/lib/speak")>()), narrate: vi.fn() }));
vi.mock("@/lib/listen", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/listen")>()),
  listen: vi.fn(),
  useListenSupport: () => true,
}));

const repeat: Extract<Activity, { type: "repeat" }> = { id: "d.r1", type: "repeat", say: "I drink tea.", te: "నేను టీ తాగుతాను." };
const situation: Extract<Activity, { type: "situation" }> = {
  id: "d.s1",
  type: "situation",
  situation: { en: "A friend asks: What do you drink?", te: "స్నేహితులు అడుగుతున్నారు: మీరు ఏం తాగుతారు?" },
  expected: ["I drink tea.", "I drink coffee."],
  options: ["I tea drink.", "I drink tea.", "I am drink tea."],
  answer: 1,
};

const hear = (...transcripts: string[]): ListenResult => ({ kind: "heard", transcripts });
const says = (...results: ListenResult[]) => results.forEach((r) => vi.mocked(listen).mockResolvedValueOnce(r));
const speakNow = async (name = /^Speak/) => {
  await act(async () => fireEvent.click(screen.getByRole("button", { name })));
};
const view = (kind: "repeat" | "situation" = "repeat") => {
  const onAnswer = vi.fn();
  const onNext = vi.fn();
  render(kind === "repeat" ? <Repeat activity={repeat} onAnswer={onAnswer} onNext={onNext} /> : <Situation activity={situation} onAnswer={onAnswer} onNext={onNext} />);
  return { onAnswer, onNext };
};

beforeAll(() => {
  // jsdom has no modal dialogs
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

beforeEach(() => {
  vi.mocked(listen).mockReset();
  updateSettings({ ...DEFAULT_SETTINGS, learnIn: "en", dismissed: [MIC_HELP_ID] });
});

describe("Repeat", () => {
  it("a good answer: Great!, what was heard, then Continue", async () => {
    const { onAnswer, onNext } = view();
    says(hear("I drink tea"));
    await speakNow();
    expect(screen.getByText("Great!")).toBeTruthy();
    expect(screen.getByText("I drink tea")).toBeTruthy();
    expect(onAnswer).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onNext).toHaveBeenCalledOnce();
  });

  it("a half answer is Good and accepted", async () => {
    const { onAnswer } = view();
    says(hear("I tea"));
    await speakNow();
    expect(screen.getByText("Good")).toBeTruthy();
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("poor then good: Try again, then Great!", async () => {
    const { onAnswer } = view();
    says(hear("banana"), hear("I drink tea"));
    await speakNow();
    expect(screen.getByText("Try again")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Continue/ })).toBeNull();
    await speakNow(/^Speak again/);
    expect(screen.getByText("Great!")).toBeTruthy();
    expect(onAnswer.mock.calls).toEqual([[false], [true]]);
  });

  it("two poor tries make Choose instead the main button, and it turns into arranging the words", async () => {
    const { onAnswer } = view();
    says(hear("banana"), hear("mango"));
    await speakNow();
    await speakNow(/^Speak again/);
    expect(screen.getByText(/You can say/)).toBeTruthy();
    const choose = screen.getAllByRole("button", { name: /^Choose instead/ });
    expect(choose).toHaveLength(1);
    fireEvent.click(choose[0]);
    expect(screen.getByRole("group", { name: "Your sentence" })).toBeTruthy();
    expect(onAnswer.mock.calls).toEqual([[false], [false]]);
  });

  it("Choose instead is offered from the start", () => {
    view();
    fireEvent.click(screen.getByRole("button", { name: /^Choose instead/ }));
    expect(screen.getByRole("group", { name: "Words" })).toBeTruthy();
  });

  it("nothing heard is not a try", async () => {
    const { onAnswer } = view();
    says({ kind: "no-speech" });
    await speakNow();
    expect(screen.getByText(/We did not hear you/)).toBeTruthy();
    expect(onAnswer).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /^Speak again/ })).toBeTruthy();
  });

  it.each([
    ["denied", /microphone is not allowed/],
    ["unsupported", /cannot listen/],
  ] as const)("%s goes straight to choosing with a note", async (kind, note) => {
    const { onAnswer } = view();
    says({ kind });
    await speakNow();
    expect(screen.getByText(note)).toBeTruthy();
    expect(screen.getByRole("group", { name: "Words" })).toBeTruthy();
    expect(onAnswer).not.toHaveBeenCalled();
  });

  it("'I can't speak now' shows choosing from the start", () => {
    updateSettings({ noSpeaking: true });
    view();
    expect(screen.getByRole("group", { name: "Words" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Speak/ })).toBeNull();
  });

  it("the first time, the microphone card explains the permission, then listening starts", async () => {
    updateSettings({ dismissed: [] });
    view();
    says(hear("I drink tea"));
    await speakNow();
    expect(listen).not.toHaveBeenCalled();
    expect(screen.getByText(/Your phone will ask to use the microphone/)).toBeTruthy();
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /^Got it/ })));
    expect(listen).toHaveBeenCalledOnce();
    expect(screen.getByText("Great!")).toBeTruthy();
  });
});

describe("Situation", () => {
  it("accepts any of the expected answers", async () => {
    const { onAnswer } = view("situation");
    says(hear("I drink coffee"));
    await speakNow();
    expect(screen.getByText("Great!")).toBeTruthy();
    expect(screen.getByText("I drink coffee.")).toBeTruthy();
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("Choose instead shows the written options", () => {
    const { onAnswer } = view("situation");
    fireEvent.click(screen.getByRole("button", { name: /^Choose instead/ }));
    fireEvent.click(screen.getByRole("button", { name: "I drink tea." }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Correct!")).toBeTruthy();
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("a denied microphone goes straight to the options", async () => {
    view("situation");
    says({ kind: "denied" });
    await speakNow();
    expect(screen.getByText(/microphone is not allowed/)).toBeTruthy();
    expect(screen.getByRole("button", { name: "I tea drink." })).toBeTruthy();
  });
});

describe("Repeat in steps (back-chaining)", () => {
  const long: Extract<Activity, { type: "repeat" }> = {
    id: "d.r2",
    type: "repeat",
    say: "I went to the market yesterday.",
    te: "నేను నిన్న మార్కెట్‌కి వెళ్ళాను.",
    steps: ["market yesterday.", "to the market yesterday.", "I went to the market yesterday."],
  };

  it("says each part, built up from the end; only the whole sentence is scored", async () => {
    const onAnswer = vi.fn();
    const onNext = vi.fn();
    render(<Repeat activity={long} onAnswer={onAnswer} onNext={onNext} />);
    expect(screen.getByText("market yesterday.")).toBeTruthy();
    says(hear("market yesterday"));
    await speakNow();
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(screen.getByText("to the market yesterday.")).toBeTruthy();
    says(hear("to the market yesterday"));
    await speakNow();
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onAnswer).not.toHaveBeenCalled();
    says(hear("I went to the market yesterday"));
    await speakNow();
    expect(onAnswer).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onNext).toHaveBeenCalledOnce();
  });
});
