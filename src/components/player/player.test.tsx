import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import day1 from "../../../public/content/sentence-basics.json";
import type { Activity, PlayableDay } from "@/content/types";
import { updateSettings } from "@/lib/settings-store";
import { narrate, narrateAll } from "@/lib/speak";
import { Choose } from "./Choose";
import { Build } from "./Build";
import { DontSayCard, ExplainCard, SoundCard, WhenToUseCard } from "./cards";
import { SoundPair } from "./SoundPair";
import { ReadIt } from "./ReadIt";
import { Mission } from "./Mission";
import { FillBlank } from "./FillBlank";
import { ListenChoose } from "./ListenChoose";
import { Player } from "./Player";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("@/lib/speak", async (importOriginal) => ({ ...(await importOriginal<typeof import("@/lib/speak")>()), narrate: vi.fn(), narrateAll: vi.fn() }));

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
  ["Choose", choose, (p: object) => <Choose activity={choose} {...(p as { onAnswer: () => void; onNext: () => void })} />, "I eat rice.", "I rice eat.", "I eat rice."],
  ["FillBlank", fill, (p: object) => <FillBlank activity={fill} {...(p as { onAnswer: () => void; onNext: () => void })} />, "speak", "speaks", "We speak Telugu."],
] as const)("%s", (_name, activity, view, right, wrong, sentence) => {
  it("right answer: Check shows Correct!, reads the sentence then the reason by itself, and Continue moves on", () => {
    updateSettings({ autoPlay: true, learnIn: "en" });
    vi.mocked(narrateAll).mockClear();
    const onAnswer = vi.fn();
    const onNext = vi.fn();
    render(view({ onAnswer, onNext }));
    expect((screen.getByRole("button", { name: /^Check/ }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: right }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Correct!")).toBeTruthy();
    expect(narrateAll).toHaveBeenLastCalledWith([sentence, activity.why!.en], { voice: undefined });
    expect(onAnswer).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onNext).toHaveBeenCalledOnce();
  });

  it("wrong twice: Almost reads only the reason (never the answer), one more try, then the answer is shown and read with the reason", () => {
    updateSettings({ autoPlay: true, learnIn: "en" });
    vi.mocked(narrate).mockClear();
    vi.mocked(narrateAll).mockClear();
    const onAnswer = vi.fn();
    render(view({ onAnswer, onNext: vi.fn() }));
    fireEvent.click(screen.getByRole("button", { name: wrong }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Almost")).toBeTruthy();
    expect(screen.queryByText(/The answer is/)).toBeNull();
    expect(narrate).not.toHaveBeenCalled();
    expect(narrateAll).toHaveBeenCalledOnce();
    expect(narrateAll).toHaveBeenLastCalledWith([activity.why!.en], { voice: undefined }); // a spoken hint
    fireEvent.click(screen.getByRole("button", { name: /^Try again/ }));
    fireEvent.click(screen.getByRole("button", { name: wrong }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText(/The answer is/)).toBeTruthy();
    expect(narrateAll).toHaveBeenLastCalledWith([sentence, activity.why!.en], { voice: undefined }); // the sentence, then the reason
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
    fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
    expect(onNext).toHaveBeenCalledOnce();
  });

  it("ExplainCard shows the explanation in the Learn in language; only its example sentences have Listen (no Slow)", () => {
    updateSettings({ learnIn: "te" });
    vi.mocked(narrate).mockClear();
    render(<ExplainCard activity={explain} onNext={vi.fn()} />);
    expect(screen.getByText(explain.body.te)).toBeTruthy();
    expect(narrate).not.toHaveBeenCalled(); // explanations are not read aloud (owner's decision 2026-11-08)
    expect(screen.queryByRole("button", { name: "Listen slowly" })).toBeNull();
    vi.mocked(narrateAll).mockClear();
    fireEvent.click(screen.getAllByRole("button", { name: "Listen" })[0]);
    expect(narrateAll).toHaveBeenCalledOnce(); // the example's text-sized Listen
    expect(narrate).not.toHaveBeenCalled();
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

describe("a question with a sentence to hear", () => {
  it("ends its prompt with a text-sized Listen that plays the whole prompt by itself", () => {
    updateSettings({ learnIn: "te", autoPlay: true });
    vi.mocked(narrateAll).mockClear();
    const meaning: Extract<Activity, { type: "choose" }> = {
      id: "d.w1",
      type: "choose",
      say: "I eat rice.",
      prompt: { en: 'What does "I eat rice." mean?', te: '"I eat rice." అంటే ఏంటి?' },
      options: ["నేను అన్నం తింటాను.", "నేను టీ తాగుతాను."],
      answer: 0,
    };
    render(<Choose activity={meaning} onAnswer={vi.fn()} onNext={vi.fn()} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(within(heading).getByRole("button", { name: "Listen" })).toBeTruthy(); // inside the question, not on its own row
    expect(narrateAll).toHaveBeenCalledWith(['"I eat rice." అంటే ఏంటి?'], { voice: undefined });
  });
});

describe("ListenChoose", () => {
  const listen: Extract<Activity, { type: "listenChoose" }> = {
    id: "d.g-listen-3",
    type: "listenChoose",
    say: "I eat rice.",
    prompt: { en: "Listen. What does it mean?", te: "వినండి. దాని అర్థం ఏమిటి?" },
    options: ["నేను టీ తాగుతాను.", "నేను అన్నం తింటాను."],
    answer: 1,
  };

  it("plays the sentence by itself without showing it, and again after Check", () => {
    updateSettings({ learnIn: "en", autoPlay: true });
    vi.mocked(narrate).mockClear();
    vi.mocked(narrateAll).mockClear();
    render(<ListenChoose activity={listen} onAnswer={vi.fn()} onNext={vi.fn()} />);
    expect(narrate).toHaveBeenCalledTimes(1);
    expect(narrate).toHaveBeenCalledWith("I eat rice.", { voice: undefined });
    expect(screen.queryByText("I eat rice.")).toBeNull(); // heard, not read
    fireEvent.click(screen.getByRole("button", { name: "నేను అన్నం తింటాను." }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Correct!")).toBeTruthy();
    expect(narrate).toHaveBeenCalledTimes(1);
    expect(narrateAll).toHaveBeenLastCalledWith(["I eat rice."], { voice: undefined }); // the correct sentence plays after Check
  });

  it("stays silent with Auto-play off", () => {
    updateSettings({ autoPlay: false });
    vi.mocked(narrate).mockClear();
    render(<ListenChoose activity={listen} onAnswer={vi.fn()} onNext={vi.fn()} />);
    expect(narrate).not.toHaveBeenCalled();
  });
});

describe("Sound of the week", () => {
  it("the card shows both sides with their words, and plays the pair one after the other", () => {
    updateSettings({ learnIn: "te", autoPlay: true });
    vi.mocked(narrateAll).mockClear();
    const sound: Extract<Activity, { type: "sound" }> = {
      id: "d.g-sound-0",
      type: "sound",
      sound: {
        title: "v and w",
        tip: { en: "Telugu has one వ.", te: "తెలుగులో వ ఒక్కటే." },
        sides: [
          { label: "v", how: { en: "Teeth on lip.", te: "పై పళ్ళు కింది పెదవిని." }, words: ["very", "seven"] },
          { label: "w", how: { en: "Round lips.", te: "పెదాలు గుండ్రంగా." }, words: ["water", "week"] },
        ],
        pair: ["vest", "west"],
      },
    };
    render(<SoundCard activity={sound} onNext={vi.fn()} />);
    expect(screen.getByText("తెలుగులో వ ఒక్కటే.")).toBeTruthy();
    expect(screen.getByText("water")).toBeTruthy();
    expect(screen.getByText("vest — west")).toBeTruthy();
    fireEvent.click(screen.getAllByRole("button", { name: "Listen" }).at(-1)!);
    expect(narrateAll).toHaveBeenLastCalledWith(["vest", "west"], expect.objectContaining({ voice: undefined }));
  });

  it("which word did you hear: one try, then both words play", () => {
    updateSettings({ learnIn: "en", autoPlay: true });
    vi.mocked(narrate).mockClear();
    vi.mocked(narrateAll).mockClear();
    const onAnswer = vi.fn();
    const pair: Extract<Activity, { type: "soundPair" }> = { id: "d.g-pair-0", type: "soundPair", words: [{ en: "vest", te: "బనీను" }, { en: "west", te: "పడమర" }], answer: 1 };
    render(<SoundPair activity={pair} onAnswer={onAnswer} onNext={vi.fn()} />);
    expect(narrate).toHaveBeenCalledWith("west", { voice: undefined }); // heard from the big button
    fireEvent.click(screen.getByRole("button", { name: /^vest/ }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(onAnswer).toHaveBeenCalledWith(false);
    expect(screen.getByText("The answer is")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Try again/ })).toBeNull();
    expect(narrateAll).toHaveBeenLastCalledWith(["vest", "west"], expect.objectContaining({ voice: undefined }));
  });

  it("build what you hear: the sentence plays from the big button, with no Telugu", () => {
    updateSettings({ learnIn: "te", autoPlay: true });
    vi.mocked(narrate).mockClear();
    render(<Build activity={{ id: "d.g-dictate-4", type: "arrange", answer: "I eat rice.", listen: true }} onAnswer={vi.fn()} onNext={vi.fn()} />);
    expect(screen.getByText("విని, వాక్యాన్ని పేర్చండి.")).toBeTruthy();
    expect(narrate).toHaveBeenCalledWith("I eat rice.", { voice: undefined });
    expect(screen.getByRole("button", { name: "rice." })).toBeTruthy();
  });
});

describe("Read it", () => {
  const sms: Extract<Activity, { type: "readIt" }> = {
    id: "d.r1",
    type: "readIt",
    kind: "message",
    heading: "VM-BANK",
    lines: ["Your OTP is 4821. Do not share it with anyone."],
    prompt: { en: "Someone calls and asks for this number. What do you do?", te: "ఎవరైనా ఫోన్ చేసి ఈ నంబర్ అడిగితే ఏం చేస్తారు?" },
    options: ["I tell them the number.", "I say no and cut the call."],
    answer: 1,
    why: { en: "Never share an OTP: the bank never asks for it.", te: "OTP ఎవరికీ చెప్పకండి: బ్యాంక్ ఎప్పుడూ అడగదు." },
  };

  it("draws the message to read, then asks its question with the usual answer bar", () => {
    updateSettings({ learnIn: "en", autoPlay: true });
    vi.mocked(narrateAll).mockClear();
    render(<ReadIt activity={sms} onAnswer={vi.fn()} onNext={vi.fn()} />);
    expect(screen.getByText("Read the message.")).toBeTruthy();
    expect(screen.getByText("VM-BANK")).toBeTruthy();
    expect(screen.getByText(/Your OTP is 4821/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "I say no and cut the call." }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect(screen.getByText("Correct!")).toBeTruthy();
    expect(narrateAll).toHaveBeenLastCalledWith(["I say no and cut the call.", "Never share an OTP: the bank never asks for it."], expect.objectContaining({ voice: undefined }));
  });

  it("a label shows its field names in bold; a sign is a board", () => {
    updateSettings({ learnIn: "en" });
    const { unmount } = render(<ReadIt activity={{ ...sms, kind: "label", heading: "PARACETAMOL 500 mg", lines: ["Take: after food"] }} onAnswer={vi.fn()} onNext={vi.fn()} />);
    expect(screen.getByText("Read the label.")).toBeTruthy();
    expect(screen.getByText("Take:").tagName).toBe("SPAN");
    unmount();
    render(<ReadIt activity={{ ...sms, kind: "sign", heading: "OUT PATIENTS", lines: ["Ground floor"] }} onAnswer={vi.fn()} onNext={vi.fn()} />);
    expect(screen.getByText("Read the sign.")).toBeTruthy();
    expect(screen.getByText("OUT PATIENTS")).toBeTruthy();
  });
});

describe("Speaking mission", () => {
  const mission: Extract<Activity, { type: "mission" }> = { id: "d.m1", type: "mission", title: { en: "All about me", te: "నా గురించి" }, prompts: ["My name is …", "I live in …"], seconds: 30 };

  it("counts the time while the learner talks and ends by itself, never judging the words", () => {
    vi.useFakeTimers();
    try {
      updateSettings({ learnIn: "en", noSpeaking: true }); // no microphone: a Start button, the same timer
      const onNext = vi.fn();
      render(<Mission activity={mission} onNext={onNext} />);
      expect(screen.getByText("My name is …")).toBeTruthy();
      fireEvent.click(screen.getByRole("button", { name: "Start" }));
      act(() => void vi.advanceTimersByTime(10_000));
      expect(screen.getByText("0:10 of 0:30")).toBeTruthy();
      act(() => void vi.advanceTimersByTime(21_000));
      expect(screen.getByText("Well done! You spoke for 30 seconds.")).toBeTruthy();
      fireEvent.click(screen.getByRole("button", { name: /^Continue/ }));
      expect(onNext).toHaveBeenCalledOnce();
    } finally {
      vi.useRealTimers();
      updateSettings({ noSpeaking: false });
    }
  });

  it("Not now always goes on (speaking never blocks progress)", () => {
    updateSettings({ learnIn: "en" });
    const onNext = vi.fn();
    render(<Mission activity={mission} onNext={onNext} />);
    fireEvent.click(screen.getByRole("button", { name: "Not now" }));
    expect(onNext).toHaveBeenCalledOnce();
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
      expect(activity.type).toMatch(/explain|dontSay|whenToUse|sound/);
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
