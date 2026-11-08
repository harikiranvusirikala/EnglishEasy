import type { Page } from "@playwright/test";

// Serves an empty recordings manifest and replaces the browser's speech synthesis and speech recognition, so no e2e test depends on a real voice or
// microphone (BUILD_PLAN B3). Synthesis records what was spoken and with which voice; recognition answers with
// `window.__nextTranscript` (a string, or an array of alternatives), or fails with `window.__recognitionError`.

export type StubVoice = { voiceURI: string; name: string; lang: string };
export type Spoken = { text: string; lang: string; rate: number; pitch: number; voiceURI: string | null };

/** A typical Android phone: Indian-English female voice, another English voice, a Telugu voice. */
export const ANDROID_VOICES: StubVoice[] = [
  { voiceURI: "us", name: "English United States", lang: "en-US" },
  { voiceURI: "in", name: "Google English (India)", lang: "en-IN" },
  { voiceURI: "te", name: "Google తెలుగు", lang: "te-IN" },
];
/** A typical iPhone: no Telugu voice. */
export const IPHONE_VOICES: StubVoice[] = [
  { voiceURI: "samantha", name: "Samantha", lang: "en-US" },
  { voiceURI: "veena", name: "Veena", lang: "en-IN" },
];

export async function installSpeechStub(page: Page, voices: StubVoice[] = ANDROID_VOICES) {
  // No recorded clips here: everything goes through the stubbed phone voice, so tests can see what was read.
  await page.route("**/audio/manifest.json", (route) => route.fulfill({ json: {} }));
  await page.addInitScript((voiceList) => {
    const w = window as unknown as Record<string, unknown>;
    w.__spoken = [];
    w.__cancelled = 0;

    class Utterance {
      text: string;
      lang = "";
      rate = 1;
      pitch = 1;
      voice: { voiceURI: string } | null = null;
      onend: (() => void) | null = null;
      constructor(text: string) {
        this.text = text;
      }
    }
    w.SpeechSynthesisUtterance = Utterance;
    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        speaking: false,
        getVoices: () => voiceList,
        speak: (u: Utterance) => {
          (w.__spoken as unknown[]).push({ text: u.text, lang: u.lang, rate: u.rate, pitch: u.pitch, voiceURI: u.voice?.voiceURI ?? null });
          setTimeout(() => u.onend?.(), 0);
        },
        cancel: () => void ((w.__cancelled as number) += 1),
        pause: () => {},
        resume: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      },
    });

    class Recognition {
      lang = "";
      maxAlternatives = 1;
      continuous = false;
      interimResults = false;
      onresult: ((event: unknown) => void) | null = null;
      onerror: ((event: { error: string }) => void) | null = null;
      onend: (() => void) | null = null;
      start() {
        setTimeout(() => {
          const error = w.__recognitionError as string | undefined;
          if (error) this.onerror?.({ error });
          else {
            const next = w.__nextTranscript;
            const alternatives = (Array.isArray(next) ? next : [next ?? ""]).map((transcript) => ({ transcript, confidence: 0.9 }));
            this.onresult?.({ resultIndex: 0, results: Object.assign([Object.assign(alternatives, { isFinal: true })], { length: 1 }) });
          }
          this.onend?.();
        }, 0);
      }
      stop() {}
      abort() {}
    }
    w.SpeechRecognition = Recognition;
    w.webkitSpeechRecognition = Recognition;
  }, voices);
}

/** Everything spoken since the page loaded, oldest first. */
export const spoken = (page: Page) => page.evaluate(() => (window as unknown as { __spoken: Spoken[] }).__spoken);

/** Forget what was spoken so far. */
export const clearSpoken = (page: Page) => page.evaluate(() => void ((window as unknown as { __spoken: Spoken[] }).__spoken.length = 0));
