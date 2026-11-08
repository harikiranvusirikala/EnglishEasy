import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { Activity } from "@/content/types";
import { listen, type ListenResult } from "@/lib/listen";
import { updateSettings } from "@/lib/settings-store";
import { speak } from "@/lib/speak";
import { DEFAULT_SETTINGS } from "@/learning/settings";
import { Dialogue, LINE_PAUSE_MS } from "./Dialogue";
import { MIC_HELP_ID } from "./MicButton";
import { RolePlay } from "./RolePlay";

vi.mock("@/lib/speak", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/speak")>()),
  narrate: vi.fn(),
  speak: vi.fn(),
  stopSpeaking: vi.fn(),
}));
vi.mock("@/lib/listen", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/listen")>()),
  listen: vi.fn(),
  useListenSupport: () => true,
}));

const roleplay: Extract<Activity, { type: "roleplay" }> = {
  id: "d.r1",
  type: "roleplay",
  title: { en: "Morning talk", te: "ఉదయం మాటలు" },
  scene: { en: "A friend asks.", te: "స్నేహితురాలు అడుగుతోంది." },
  partner: { en: "Padma", te: "పద్మ" },
  skills: [
    { id: "order", label: { en: "Word order", te: "పదాల వరుస" } },
    { id: "food", label: { en: "Food words", te: "ఆహార పదాలు" } },
  ],
  turns: [
    {
      partner: "What do you drink?",
      te: "మీరు ఏం తాగుతారు?",
      hint: { en: "Say I drink …", te: "I drink … అనండి" },
      replies: [
        { say: "I drink tea.", good: true, skill: "order" },
        { say: "I tea drink.", good: false, skill: "order" },
      ],
    },
    {
      partner: "And what do you eat?",
      te: "మరి మీరు ఏం తింటారు?",
      hint: { en: "Say I eat …", te: "I eat … అనండి" },
      replies: [
        { say: "I eat idli.", good: true, skill: "food" },
        { say: "I idli eat.", good: false, skill: "food" },
      ],
    },
  ],
};

const hear = (...transcripts: string[]): ListenResult => ({ kind: "heard", transcripts });
const click = (name: RegExp | string) => fireEvent.click(screen.getByRole("button", { name }));
const speakNow = async () => act(async () => fireEvent.click(screen.getByRole("button", { name: /^Speak/ })));

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

beforeEach(() => {
  vi.mocked(listen).mockReset();
  vi.mocked(speak).mockReset();
  updateSettings({ ...DEFAULT_SETTINGS, learnIn: "en", dismissed: [MIC_HELP_ID] });
});
afterEach(() => vi.useRealTimers());

describe("RolePlay", () => {
  it("plays by tapping: good reply, correction on a not-good one, then the summary", () => {
    const onNext = vi.fn();
    render(<RolePlay activity={roleplay} onNext={onNext} />);
    expect(screen.getByText("What do you drink?")).toBeTruthy();
    click("I drink tea.");
    expect(screen.getByText("Good")).toBeTruthy();
    click(/^Continue/);
    expect(screen.getByText("And what do you eat?")).toBeTruthy();
    click("I idli eat.");
    expect(screen.getByText("Almost")).toBeTruthy();
    expect(screen.getByText("I eat idli.")).toBeTruthy(); // the better reply
    click(/^See how it went/);
    expect(screen.getByText("Role play complete")).toBeTruthy();
    expect(screen.getByText("Word order")).toBeTruthy(); // good
    expect(screen.getByText("Food words")).toBeTruthy(); // practice more
    expect(screen.getByTestId("score-conversation").textContent).toContain("5 / 10");
    expect(screen.queryByTestId("score-speaking")).toBeNull();
    click(/^Continue/);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("plays by voice: a poor try can be repeated, a good one is accepted", async () => {
    render(<RolePlay activity={roleplay} onNext={vi.fn()} />);
    vi.mocked(listen).mockResolvedValueOnce(hear("banana"));
    await speakNow();
    expect(screen.getByText("Try again")).toBeTruthy();
    vi.mocked(listen).mockResolvedValueOnce(hear("I drink tea"));
    await speakNow();
    expect(screen.getByText("Good")).toBeTruthy();
    click(/^Continue/);
    vi.mocked(listen).mockResolvedValueOnce(hear("I eat idli"));
    await speakNow();
    click(/^See how it went/);
    expect(screen.getByTestId("score-speaking").textContent).toContain("10 / 10");
    expect(screen.getByTestId("score-conversation").textContent).toContain("10 / 10");
  });

  it("a spoken not-good reply is corrected and the conversation continues", async () => {
    render(<RolePlay activity={roleplay} onNext={vi.fn()} />);
    vi.mocked(listen).mockResolvedValueOnce(hear("I tea drink"));
    await speakNow();
    expect(screen.getByText("Almost")).toBeTruthy();
    expect(screen.getByText("I drink tea.")).toBeTruthy();
    click(/^Continue/);
    expect(screen.getByText("And what do you eat?")).toBeTruthy();
  });

  it("shows the Hint on request; the Telugu meaning is offered in Telugu mode only", () => {
    render(<RolePlay activity={roleplay} onNext={vi.fn()} />);
    expect(screen.queryByText("Say I drink …")).toBeNull();
    click(/^Hint/);
    expect(screen.getByText("Say I drink …")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Telugu meaning/ })).toBeNull();
  });

  it("in Telugu mode the partner's line has its Telugu meaning one tap away", () => {
    updateSettings({ learnIn: "te" });
    render(<RolePlay activity={roleplay} onNext={vi.fn()} />);
    expect(screen.queryByText("మీరు ఏం తాగుతారు?", { selector: "p" })).toBeNull();
    click(/^Telugu meaning/);
    expect(screen.getByText("మీరు ఏం తాగుతారు?", { selector: "p" })).toBeTruthy();
  });

  it("a refused microphone leaves tapping", async () => {
    render(<RolePlay activity={roleplay} onNext={vi.fn()} />);
    vi.mocked(listen).mockResolvedValueOnce({ kind: "denied" });
    await speakNow();
    expect(screen.getByText(/microphone is not allowed/)).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Speak/ })).toBeNull();
    click("I drink tea.");
    expect(screen.getByText("Good")).toBeTruthy();
  });
});

const dialogue: Extract<Activity, { type: "dialogue" }> = {
  id: "d.dlg",
  type: "dialogue",
  title: { en: "At the shop", te: "దుకాణంలో" },
  lines: [
    { speaker: { en: "Asha", te: "ఆశ" }, voice: "a", en: "Hello, Ravi.", te: "హలో రవి." },
    { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "Hello, Asha.", te: "హలో ఆశ." },
  ],
  questions: [{ prompt: { en: "Who says hello first?", te: "ముందు ఎవరు హలో అంటారు?" }, options: ["Asha", "Ravi"], answer: 0 }],
};

describe("Dialogue", () => {
  it("plays the lines one after another with two voices, bubbles appearing as they play", () => {
    vi.useFakeTimers();
    render(<Dialogue activity={dialogue} onNext={vi.fn()} />);
    expect(speak).toHaveBeenLastCalledWith("Hello, Ravi.", expect.objectContaining({ voice: "a" }));
    expect(screen.queryByText("Hello, Asha.")).toBeNull();
    act(() => vi.mocked(speak).mock.lastCall![1]!.onEnd!());
    act(() => void vi.advanceTimersByTime(LINE_PAUSE_MS));
    expect(speak).toHaveBeenLastCalledWith("Hello, Asha.", expect.objectContaining({ voice: "b" }));
    expect(screen.getByText("Hello, Asha.")).toBeTruthy();
  });

  it("with Auto-play off shows every line and plays on Replay, then asks its questions", () => {
    updateSettings({ autoPlay: false });
    const onNext = vi.fn();
    render(<Dialogue activity={dialogue} onNext={onNext} />);
    expect(speak).not.toHaveBeenCalled();
    expect(screen.getByText("Hello, Asha.")).toBeTruthy();
    click(/^Replay/);
    expect(speak).toHaveBeenCalledWith("Hello, Ravi.", expect.objectContaining({ voice: "a" }));
    click(/^Continue/);
    expect(screen.getByText("Who says hello first?")).toBeTruthy();
    click("Asha");
    click(/^Check/);
    click(/^Continue/);
    expect(onNext).toHaveBeenCalledTimes(1);
  });
});
