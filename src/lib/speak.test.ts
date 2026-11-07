import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { textHash } from "@/learning/audio-manifest";
import { DEFAULT_SETTINGS } from "@/learning/settings";
import { narrate, RATE_NORMAL, RATE_SLOW, setManifest, speak, stopSpeaking, hasTeluguVoice } from "./speak";
import { updateSettings } from "./settings-store";

type FakeVoice = { voiceURI: string; name: string; lang: string };
const tick = () => new Promise((resolve) => setTimeout(resolve, 5));
const veena: FakeVoice = { voiceURI: "veena", name: "Veena", lang: "en-IN" };
const rishi: FakeVoice = { voiceURI: "rishi", name: "Rishi", lang: "en-IN" };
const telugu: FakeVoice = { voiceURI: "te", name: "Google తెలుగు", lang: "te-IN" };

type Spoken = { text: string; voice?: FakeVoice; lang: string; rate: number; pitch: number };
let spoken: Spoken[];
let cancelled: number;

function install(voices: FakeVoice[]) {
  spoken = [];
  cancelled = 0;
  class FakeUtterance {
    voice?: FakeVoice;
    lang = "";
    rate = 1;
    pitch = 1;
    constructor(public text: string) {}
  }
  vi.stubGlobal("SpeechSynthesisUtterance", FakeUtterance);
  vi.stubGlobal("speechSynthesis", {
    getVoices: () => voices,
    speak: (u: Spoken & { onend?: () => void }) => {
      spoken.push({ text: u.text, voice: u.voice, lang: u.lang, rate: u.rate, pitch: u.pitch });
      setTimeout(() => u.onend?.(), 0); // the voice finishes, so the next run can start
    },
    speaking: false,
    pending: false,
    resume: () => {},
    cancel: () => void cancelled++,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
}

beforeEach(() => {
  localStorage.clear();
  updateSettings({ ...DEFAULT_SETTINGS });
  setManifest({});
});
afterEach(() => {
  stopSpeaking();
  vi.unstubAllGlobals();
});

describe("speak", () => {
  it("reads the sentence with the picked English voice at the normal or slow rate", () => {
    install([rishi, veena]);
    speak("I eat rice.");
    speak("I eat rice.", { slow: true });
    expect(spoken).toEqual([
      { text: "I eat rice.", voice: veena, lang: "en-IN", rate: RATE_NORMAL, pitch: 1 },
      { text: "I eat rice.", voice: veena, lang: "en-IN", rate: RATE_SLOW, pitch: 1 },
    ]);
    expect(cancelled).toBe(0); // nothing was playing, so nothing to cancel
  });

  it("uses the voice saved in settings", () => {
    install([veena, rishi]);
    updateSettings({ voiceURI: "rishi" });
    speak("Hello.");
    expect(spoken[0].voice).toBe(rishi);
  });

  it("gives dialogue voice b another voice, or a lower pitch when there is none", () => {
    install([veena, rishi]);
    speak("Hello.", { voice: "b" });
    expect(spoken[0].voice).toBe(rishi);
    install([veena]);
    speak("Hello.", { voice: "b" });
    expect(spoken[0]).toMatchObject({ voice: veena, pitch: 0.8 });
  });
});

describe("narrate", () => {
  it("reads Telugu and English runs one after another, each with its own voice", async () => {
    install([veena, telugu]);
    narrate("verb ని past form లో వాడాలి.");
    await tick();
    expect(spoken.map((s) => [s.text, s.voice?.voiceURI, s.lang])).toEqual([
      ["verb", "veena", "en-IN"],
      ["ని", "te", "te-IN"],
      ["past form", "veena", "en-IN"],
      ["లో వాడాలి.", "te", "te-IN"],
    ]);
  });

  it("skips the Telugu runs when the phone has no Telugu voice", async () => {
    install([veena]);
    expect(hasTeluguVoice()).toBe(false);
    narrate("verb ని past form లో వాడాలి.");
    await tick();
    expect(spoken.map((s) => s.text)).toEqual(["verb", "past form"]);
  });
});

describe("a stalled voice", () => {
  it("is skipped by the watchdog so the rest still plays, and a new request replaces a pending one", async () => {
    vi.useFakeTimers();
    try {
      install([veena, telugu]);
      // This voice never finishes the first run.
      (speechSynthesis as unknown as { speak: (u: Spoken) => void }).speak = (u) => void spoken.push({ text: u.text, voice: u.voice, lang: u.lang, rate: u.rate, pitch: u.pitch });
      narrate("verb ని past");
      expect(spoken.map((s) => s.text)).toEqual(["verb"]); // one at a time
      await vi.advanceTimersByTimeAsync(10_000);
      expect(spoken.map((s) => s.text)).toEqual(["verb", "ని", "past"]);
    } finally {
      vi.useRealTimers();
    }
  });
});

describe("audio hook", () => {
  it("plays the recorded file instead of the phone voice when the manifest has the text", () => {
    install([veena]);
    const play = vi.fn().mockResolvedValue(undefined);
    const made: { src: string; playbackRate: number }[] = [];
    vi.stubGlobal(
      "Audio",
      class {
        playbackRate = 1;
        constructor(public src: string) {
          made.push(this);
        }
        play = play;
        pause = vi.fn();
      },
    );
    setManifest({ [textHash("I eat rice.")]: "rice.mp3" });
    speak("I eat rice.", { slow: true });
    narrate("I eat rice.");
    expect(spoken).toEqual([]);
    expect(made.map((a) => a.src)).toEqual(["/audio/rice.mp3", "/audio/rice.mp3"]);
    expect(made[0].playbackRate).toBeCloseTo(RATE_SLOW / RATE_NORMAL);
    expect(play).toHaveBeenCalledTimes(2);

    speak("I eat tea.");
    expect(spoken.map((s) => s.text)).toEqual(["I eat tea."]); // not in the manifest: the phone voice
  });
});

describe("without speech", () => {
  it("does nothing and does not throw", () => {
    vi.stubGlobal("speechSynthesis", undefined);
    expect(() => speak("Hi.")).not.toThrow();
  });
});
