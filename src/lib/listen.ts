"use client";

import { useSyncExternalStore } from "react";
import { stopSpeaking } from "./speak";

// Speech recognition (BUILD_PLAN A6): the browser's own, Indian English, up to 3 alternatives, 8 s timeout.
// No audio leaves this module: only the transcripts.

export const LISTEN_LANG = "en-IN";
export const LISTEN_TIMEOUT_MS = 8000;

export type ListenResult =
  | { kind: "heard"; transcripts: string[] }
  | { kind: "unsupported" }
  | { kind: "denied" }
  | { kind: "no-speech" };

type Alternative = { transcript: string };
type RecognitionEvent = { results: ArrayLike<ArrayLike<Alternative> & { isFinal?: boolean }> };
type Recognition = {
  lang: string;
  maxAlternatives: number;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: RecognitionEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
};
type RecognitionClass = new () => Recognition;

function recognitionClass(): RecognitionClass | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionClass; webkitSpeechRecognition?: RecognitionClass };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/** Whether this browser can recognise speech. Browser only: use `useListenSupport` while rendering. */
export const listenSupported = () => recognitionClass() !== null;

/** True/false once hydrated, null on the server and before hydration. */
export function useListenSupport(): boolean | null {
  return useSyncExternalStore(
    () => () => {},
    listenSupported,
    () => null,
  );
}

const DENIED = new Set(["not-allowed", "service-not-allowed", "audio-capture"]);
const UNSUPPORTED = new Set(["network", "language-not-supported"]);

let current: Recognition | null = null;

/** Stops listening; the pending `listen()` ends with whatever was heard so far. */
export function stopListening() {
  current?.stop();
}

/** Listens once. Any speech being read aloud is stopped first, so the phone does not hear itself. */
export function listen(): Promise<ListenResult> {
  const Recognition = recognitionClass();
  if (!Recognition) return Promise.resolve({ kind: "unsupported" });
  stopListening();
  stopSpeaking();

  return new Promise((resolve) => {
    const recognition = new Recognition();
    const transcripts: string[] = [];
    let failure: ListenResult | null = null;
    const timer = setTimeout(() => recognition.stop(), LISTEN_TIMEOUT_MS);

    recognition.lang = LISTEN_LANG;
    recognition.maxAlternatives = 3;
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      for (let i = 0; i < event.results.length; i++) {
        for (let j = 0; j < event.results[i].length; j++) {
          const text = event.results[i][j].transcript.trim();
          if (text && !transcripts.includes(text)) transcripts.push(text);
        }
      }
    };
    recognition.onerror = ({ error }) => {
      failure = DENIED.has(error) ? { kind: "denied" } : UNSUPPORTED.has(error) ? { kind: "unsupported" } : { kind: "no-speech" };
    };
    recognition.onend = () => {
      clearTimeout(timer);
      if (current === recognition) current = null;
      resolve(transcripts.length > 0 ? { kind: "heard", transcripts } : (failure ?? { kind: "no-speech" }));
    };

    current = recognition;
    try {
      recognition.start();
    } catch {
      clearTimeout(timer);
      current = null;
      resolve({ kind: "unsupported" });
    }
  });
}
