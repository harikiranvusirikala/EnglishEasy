import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import day1 from "../../../public/content/sentence-basics.json";
import type { Activity, PlayableDay } from "@/content/types";
import { updateSettings } from "@/lib/settings-store";
import { Choose } from "./Choose";
import { DontSayCard, ExplainCard, WhenToUseCard } from "./cards";
import { FillBlank } from "./FillBlank";
import { Player } from "./Player";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));

const choose: Extract<Activity, { type: "choose" }> = {
  id: "d.p1",
  type: "choose",
  prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
  options: ["I rice eat.", "I eat rice.", "Eat I rice."],
  answer: 1,
  why: { en: "Who first, then the action.", te: "ముందు ఎవరు, తర్వాత ఏం చేస్తారు." },
};
const fill: Extract<Activity, { type: "fillBlank" }> = {
  id: "d.p2",
  type: "fillBlank",
  sentence: "We ___ Telugu.",
  te: "మనం తెలుగు మాట్లాడతాం.",
  options: ["speak", "speaks", "speaking"],
  answer: 0,
  why: { en: "With we, the action stays the same.", te: "we తో verb మారదు." },
};

const MODES = [
  { mode: "te", why: (a: { why?: { te: string } }) => a.why?.te },
  { mode: "en", why: (a: { why?: { en: string } }) => a.why?.en },
] as const;

describe.each([
  ["Choose", choose, (p: object) => <Choose activity={choose} {...(p as { onAnswer: () => void; onNext: () => void })} />, "I eat rice.", "I rice eat."],
  ["FillBlank", fill, (p: object) => <FillBlank activity={fill} {...(p as { onAnswer: () => void; onNext: () => void })} />, "speak", "speaks"],
] as const)("%s", (_name, activity, view, right, wrong) => {
  it("right answer: Check shows Correct! and Continue moves on", () => {
    const onAnswer = vi.fn();
    const onNext = vi.fn();
    render(view({ onAnswer, onNext }));
    expect((screen.getByRole("button", { name: /^Check/ }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: right }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Correct!")).toBeTruthy();
    expect(onAnswer).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onNext).toHaveBeenCalledOnce();
  });

  it("wrong twice: Almost, one more try, then the answer is shown", () => {
    const onAnswer = vi.fn();
    render(view({ onAnswer, onNext: vi.fn() }));
    fireEvent.click(screen.getByRole("button", { name: wrong }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Almost")).toBeTruthy();
    expect(screen.queryByText(/The answer is/)).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /^Try again/ }));
    fireEvent.click(screen.getByRole("button", { name: wrong }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText(/The answer is/)).toBeTruthy();
    expect(onAnswer.mock.calls).toEqual([[false], [false]]);
    expect(screen.getByRole("button", { name: /^Continue/ })).toBeTruthy();
  });

  it.each(MODES)("explains in $mode mode", ({ mode, why }) => {
    updateSettings({ learnIn: mode });
    render(view({ onAnswer: vi.fn(), onNext: vi.fn() }));
    fireEvent.click(screen.getByRole("button", { name: right }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    const reason = screen.getByText(why(activity)!);
    expect(reason.getAttribute("lang")).toBe(mode === "te" ? "te" : null);
  });
});

describe("cards", () => {
  const explain: Extract<Activity, { type: "explain" }> = {
    id: "d.l1",
    type: "explain",
    heading: { en: "Who + Action + What", te: "ఎవరు + ఏం చేస్తారు + ఏమిటి" },
    body: { en: "Say who, then the action.", te: "ముందు ఎవరు, తర్వాత verb." },
    bridge: { te: ["నేను", "అన్నం", "తింటాను"], en: [{ text: "I", role: "who" }, { text: "eat", role: "action" }, { text: "rice", role: "what" }] },
    examples: [{ en: "We speak Telugu.", te: "మనం తెలుగు మాట్లాడతాం." }],
  };

  it.each(MODES)("ExplainCard follows Learn in ($mode) and shows labelled chips", ({ mode }) => {
    updateSettings({ learnIn: mode });
    const onNext = vi.fn();
    render(<ExplainCard activity={explain} onNext={onNext} />);
    expect(screen.getByRole("heading").textContent).toBe(explain.heading[mode]);
    expect(screen.getByText("Who")).toBeTruthy(); // the chip label, not only colour
    expect((screen.getAllByRole("button", { name: "Listen" })[0] as HTMLButtonElement).disabled).toBe(true); // until Step 7
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onNext).toHaveBeenCalledOnce();
  });

  it("WhenToUseCard lists each form with its example", () => {
    const activity: Extract<Activity, { type: "whenToUse" }> = {
      id: "d.l2",
      type: "whenToUse",
      heading: { en: "Can or could", te: "Can లేదా could" },
      items: [{ form: "can", useFor: { en: "Ability now.", te: "ఇప్పుడు చేయగలగడం." }, example: { en: "I can swim.", te: "నేను ఈత కొట్టగలను." } }],
    };
    render(<WhenToUseCard activity={activity} onNext={vi.fn()} />);
    expect(screen.getByText("can")).toBeTruthy();
    expect(screen.getByText("I can swim.")).toBeTruthy();
  });

  it("DontSayCard shows the wrong and the right sentence", () => {
    const activity: Extract<Activity, { type: "dontSay" }> = {
      id: "d.l3",
      type: "dontSay",
      wrong: "I rice eat.",
      right: "I eat rice.",
      why: { en: "The action comes second.", te: "verb రెండో స్థానంలో రావాలి." },
    };
    updateSettings({ learnIn: "en" });
    render(<DontSayCard activity={activity} onNext={vi.fn()} />);
    expect(screen.getByText("I rice eat.")).toBeTruthy();
    expect(screen.getByText("I eat rice.")).toBeTruthy();
    expect(screen.getByText("The action comes second.")).toBeTruthy();
  });
});

describe("Player", () => {
  const day = day1 as unknown as PlayableDay;

  beforeAll(() => {
    // jsdom has no modal dialogs
    HTMLDialogElement.prototype.showModal = function () {
      this.setAttribute("open", "");
    };
    HTMLDialogElement.prototype.close = function () {
      this.removeAttribute("open");
    };
  });

  it("plays Day 1: Learn, then the first practice questions with a section summary", () => {
    render(<Player day={day} />);
    const total = day.sections.reduce((n, s) => n + s.activities.length, 0);
    expect(screen.getByRole("progressbar").getAttribute("aria-valuemax")).toBe(String(total));
    fireEvent.click(screen.getByRole("button", { name: /^Start/ })); // Learn intro
    for (const activity of day.sections[0].activities) {
      expect(activity.type).toMatch(/explain|dontSay|whenToUse/);
      fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    }
    fireEvent.click(screen.getByRole("button", { name: /^Start/ })); // Practice intro
    const first = day.sections[1].activities[0] as Extract<Activity, { type: "choose" }>;
    fireEvent.click(screen.getByRole("button", { name: first.options[first.answer] }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Correct!")).toBeTruthy();
  });

  it("asks before leaving", () => {
    render(<Player day={day} />);
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.getByRole("heading", { name: "Leave this lesson?" })).toBeTruthy();
  });
});
