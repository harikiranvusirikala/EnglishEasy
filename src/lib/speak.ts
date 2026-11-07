"use client";

import { useSyncExternalStore } from "react";
import { audioUrl, parseManifest, type AudioManifest } from "@/learning/audio-manifest";
import { splitScripts, type Run } from "@/learning/split-scripts";
import { pickEnglishVoice, pickPartnerVoice, pickTeluguVoice } from "@/learning/voice-pick";
import { getSettings } from "./settings-store";

// The phone's own voices (BUILD_PLAN A6). Browser only: every function is a no-op where speech does not exist.
// Nothing here runs while rendering; screens call it from effects and event handlers.

export const RATE_NORMAL = 0.9;
export const RATE_SLOW = 0.65;
const MANIFEST_URL = "/audio/manifest.json";
const VOICES_WAIT_MS = 1500;

export type SpeakOptions = {
  slow?: boolean;
  /** Dialogue speaker: "b" gets a different voice if there is one, else a lower pitch. */
  voice?: "a" | "b";
  /** Called once when everything has been read (not when speech is replaced or stopped). Dialogues use it to move to the next line. */
  onEnd?: () => void;
};

const synth = (): SpeechSynthesis | null => (typeof speechSynthesis === "undefined" ? null : speechSynthesis);
const rateOf = (options: SpeakOptions) => (options.slow ? RATE_SLOW : RATE_NORMAL);

// ---- voices

/** The voices the phone has right now (empty until they load). */
export function getVoices(): SpeechSynthesisVoice[] {
  return synth()?.getVoices() ?? [];
}

/** Resolves with the voices once they have loaded (they arrive asynchronously), or with whatever exists after a short wait. */
export function voicesReady(): Promise<SpeechSynthesisVoice[]> {
  const s = synth();
  if (!s) return Promise.resolve([]);
  if (s.getVoices().length > 0) return Promise.resolve(s.getVoices());
  return new Promise((resolve) => {
    const finish = () => {
      s.removeEventListener("voiceschanged", finish);
      clearTimeout(timer);
      resolve(s.getVoices());
    };
    const timer = setTimeout(finish, VOICES_WAIT_MS);
    s.addEventListener("voiceschanged", finish);
  });
}

/** Whether a Telugu voice is available (the saved one, or any). */
export function hasTeluguVoice(): boolean {
  return pickTeluguVoice(getVoices(), getSettings().teluguVoiceURI) !== null;
}

// A stable snapshot for useSyncExternalStore: `getVoices()` may return a new array every time.
let voiceKey = "";
let voiceSnapshot: SpeechSynthesisVoice[] = [];
function voicesSnapshot(): SpeechSynthesisVoice[] {
  const voices = getVoices();
  const key = voices.map((voice) => voice.voiceURI).join("|");
  if (key !== voiceKey) {
    voiceKey = key;
    voiceSnapshot = voices;
  }
  return voiceSnapshot;
}

function subscribeVoices(listener: () => void) {
  const s = synth();
  s?.addEventListener("voiceschanged", listener);
  return () => s?.removeEventListener("voiceschanged", listener);
}

/** The phone's voices, or null on the server and before hydration. */
export function useVoices(): SpeechSynthesisVoice[] | null {
  return useSyncExternalStore(subscribeVoices, voicesSnapshot, () => null);
}

// ---- the audio hook (recorded files, if a manifest exists)

let manifest: AudioManifest | null = null;
let manifestRequested = false;

/** Fetches `/audio/manifest.json` once. Missing or broken means no recordings (the launch state). */
export async function loadManifest(): Promise<void> {
  if (manifestRequested || typeof fetch === "undefined") return;
  manifestRequested = true;
  try {
    const response = await fetch(MANIFEST_URL);
    manifest = response.ok ? parseManifest(await response.json()) : {};
  } catch {
    manifest = {};
  }
}

/** For tests: set the manifest directly (null forgets it and allows a new fetch). */
export function setManifest(next: AudioManifest | null) {
  manifest = next;
  manifestRequested = next !== null;
}

let playing: HTMLAudioElement | null = null;

function playFile(url: string, options: SpeakOptions) {
  const audio = new Audio(url);
  audio.playbackRate = options.slow ? RATE_SLOW / RATE_NORMAL : 1;
  playing = audio;
  audio.onended = () => {
    if (playing === audio) options.onEnd?.();
  };
  void audio.play().catch(() => {});
}

// ---- speaking

const isBusy = () => synth()?.speaking === true || synth()?.pending === true;

// Chrome drops an utterance nobody holds a reference to (its speech then stalls), so keep them until they end.
const live = new Set<SpeechSynthesisUtterance>();
let token = 0; // a newer request makes an older delayed one stale

/** Stops whatever is being read or played. */
export function stopSpeaking() {
  token++;
  const s = synth();
  if (s && (s.speaking || s.pending)) s.cancel();
  live.clear();
  playing?.pause();
  playing = null;
}

/** A stuck utterance (Chrome on macOS sometimes never finishes one, and everything queued behind it waits forever) is given up on after this long. */
const stallLimit = (u: SpeechSynthesisUtterance) => 3000 + (u.text.length * 250) / (u.rate || 1);

/**
 * Speaks the utterances one after another, never queueing them all in the browser: each starts when the last ends,
 * and a watchdog cancels one that stalls and moves on, so a hung voice cannot silence everything after it.
 * After a cancel, Chrome drops speech started in the same tick, so wait a moment then.
 */
function enqueue(utterances: SpeechSynthesisUtterance[], afterCancel: boolean, onEnd?: () => void) {
  const s = synth();
  if (!s) return;
  const mine = token;
  let i = 0;
  const next = () => {
    if (mine !== token) return;
    if (i >= utterances.length) return onEnd?.();
    const u = utterances[i++];
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(watchdog);
      live.delete(u);
      next();
    };
    const watchdog = setTimeout(() => {
      if (mine !== token || finished) return;
      console.warn("Speech stalled, skipping:", u.voice?.name ?? "(default voice)", u.lang, JSON.stringify(u.text));
      s.cancel();
      setTimeout(finish, 100);
    }, stallLimit(u));
    u.onend = finish;
    u.onerror = (event) => {
      // "interrupted" and "canceled" are normal (new speech replaced old); anything else is a real failure worth seeing.
      if (event.error !== "interrupted" && event.error !== "canceled") console.warn("Speech failed:", event.error, u.voice?.name ?? "(default voice)", u.lang);
      finish();
    };
    live.add(u);
    s.resume(); // a stalled queue can be left paused
    s.speak(u);
  };
  if (afterCancel) setTimeout(next, 60);
  else next();
}

function utterance(text: string, voice: SpeechSynthesisVoice | null, fallbackLang: string, options: SpeakOptions, pitch = 1) {
  const u = new SpeechSynthesisUtterance(text);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? fallbackLang;
  u.rate = rateOf(options);
  u.pitch = pitch;
  return u;
}

function say(runs: Run[], options: SpeakOptions, afterCancel: boolean) {
  const s = synth();
  if (!s) return void (options.onEnd && setTimeout(options.onEnd, 0)); // no voice at all: carry on
  const voices = getVoices();
  const settings = getSettings();
  const first = pickEnglishVoice(voices, settings.voiceURI);
  const partner = options.voice === "b" ? pickPartnerVoice(voices, first) : null;
  const english = partner ?? first;
  const lowered = options.voice === "b" && !partner; // no second voice: a lower pitch tells the speakers apart
  const telugu = pickTeluguVoice(voices, settings.teluguVoiceURI);
  const utterances: SpeechSynthesisUtterance[] = [];
  for (const run of runs) {
    if (run.script === "te") {
      if (telugu) utterances.push(utterance(run.text, telugu, "te-IN", options));
    } else {
      utterances.push(utterance(run.text, english, "en-IN", options, lowered ? 0.8 : 1));
    }
  }
  enqueue(utterances, afterCancel, options.onEnd);
}

function playRecording(text: string, options: SpeakOptions): boolean {
  void loadManifest();
  const url = audioUrl(manifest, text);
  if (!url || typeof Audio === "undefined") return false;
  playFile(url, options);
  return true;
}

/** Reads an English sentence aloud (a recording if the manifest has one), cancelling anything already playing. */
export function speak(text: string, options: SpeakOptions = {}) {
  const busy = isBusy();
  stopSpeaking();
  if (playRecording(text, options)) return;
  say([{ text, script: "en" }], options, busy);
}

/** Reads mixed Telugu–English text: one utterance per script run, each with its own voice. Telugu runs are skipped when no Telugu voice exists. */
export function narrate(text: string, options: SpeakOptions = {}) {
  const busy = isBusy();
  stopSpeaking();
  if (playRecording(text, options)) return;
  say(splitScripts(text), options, busy);
}

/** Whether this is an Android phone (the only place the Telugu voice can be installed from the Settings help). Browser only. */
export function isAndroid(): boolean {
  return typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
}
