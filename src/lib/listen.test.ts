import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { listen, listenSupported, LISTEN_TIMEOUT_MS } from "./listen";

type Script = (r: FakeRecognition) => void;
let script: Script;
const made: FakeRecognition[] = [];
const last = () => made[made.length - 1];

class FakeRecognition {
  lang = "";
  maxAlternatives = 0;
  continuous = true;
  interimResults = true;
  onresult: ((e: unknown) => void) | null = null;
  onerror: ((e: { error: string }) => void) | null = null;
  onend: (() => void) | null = null;
  stopped = false;
  constructor() {
    made.push(this);
  }
  start() {
    script(this);
  }
  stop() {
    this.stopped = true;
    this.onend?.();
  }
  abort() {}
  say(...alternatives: string[]) {
    this.onresult?.({ results: [alternatives.map((transcript) => ({ transcript }))] });
  }
}

beforeEach(() => {
  vi.stubGlobal("SpeechRecognition", FakeRecognition);
});
afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe("listen", () => {
  it("asks for Indian English with 3 alternatives and returns the transcripts", async () => {
    script = (r) => {
      r.say("I drink tea", "I drink T", " ");
      r.onend?.();
    };
    expect(await listen()).toEqual({ kind: "heard", transcripts: ["I drink tea", "I drink T"] });
    expect(last()).toMatchObject({ lang: "en-IN", maxAlternatives: 3, continuous: false, interimResults: false });
  });

  it("for a spoken message: the given language, across pauses, everything said as one transcript", async () => {
    script = (r) => {
      r.onresult?.({ results: [[{ transcript: "లెసన్స్ బాగున్నాయి" }], [{ transcript: " ఇంకా కావాలి " }]] });
      r.onend?.();
    };
    expect(await listen({ lang: "te-IN", continuous: true, timeoutMs: 30_000 })).toEqual({ kind: "heard", transcripts: ["లెసన్స్ బాగున్నాయి ఇంకా కావాలి"] });
    expect(last()).toMatchObject({ lang: "te-IN", maxAlternatives: 1, continuous: true });
  });

  it("works with the webkit-prefixed class", async () => {
    vi.stubGlobal("SpeechRecognition", undefined);
    vi.stubGlobal("webkitSpeechRecognition", FakeRecognition);
    script = (r) => {
      r.say("hello");
      r.onend?.();
    };
    expect(listenSupported()).toBe(true);
    expect(await listen()).toEqual({ kind: "heard", transcripts: ["hello"] });
  });

  it.each([
    ["not-allowed", "denied"],
    ["service-not-allowed", "denied"],
    ["audio-capture", "denied"],
    ["no-speech", "no-speech"],
    ["aborted", "no-speech"],
    ["network", "unsupported"],
  ])("error %s → %s", async (error, kind) => {
    script = (r) => {
      r.onerror?.({ error });
      r.onend?.();
    };
    expect(await listen()).toEqual({ kind });
  });

  it("ends with no-speech when nothing was heard", async () => {
    script = (r) => r.onend?.();
    expect(await listen()).toEqual({ kind: "no-speech" });
  });

  it("is unsupported without a recognition class", async () => {
    vi.stubGlobal("SpeechRecognition", undefined);
    expect(listenSupported()).toBe(false);
    expect(await listen()).toEqual({ kind: "unsupported" });
  });

  it("is unsupported when start() throws", async () => {
    script = () => {
      throw new Error("busy");
    };
    expect(await listen()).toEqual({ kind: "unsupported" });
  });

  it("stops after the timeout", async () => {
    vi.useFakeTimers();
    script = () => {};
    const result = listen();
    vi.advanceTimersByTime(LISTEN_TIMEOUT_MS);
    expect(last().stopped).toBe(true);
    expect(await result).toEqual({ kind: "no-speech" });
  });
});
