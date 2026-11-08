"use client";

import { useSyncExternalStore } from "react";
import { audioUrl, parseManifest, speechText, type AudioManifest } from "@/learning/audio-manifest";
import type { Spoken } from "@/learning/spoken";
import { splitScripts, type Run } from "@/learning/split-scripts";
import { pickEnglishVoice, pickPartnerVoice, pickTeluguVoice } from "@/learning/voice-pick";
import { getSettings } from "./settings-store";

// Recorded clips first (`npm run audio`; BUILD_PLAN "one recorded voice"), else the phone's own voices (A6). Browser only:
// every function is a no-op where speech does not exist.
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

// ---- the audio hook (recorded files, listed in the manifest)

let manifest: AudioManifest | null = null;
let manifestLoad: Promise<void> | null = null;

/** Fetches `/audio/manifest.json` once (later calls share it). Missing or broken means no recordings: the phone voice reads everything. */
export function loadManifest(): Promise<void> {
  if (manifestLoad) return manifestLoad;
  if (typeof fetch === "undefined") return Promise.resolve();
  manifestLoad = fetch(MANIFEST_URL)
    .then(async (response) => {
      manifest = response.ok ? parseManifest(await response.json()) : {};
    })
    .catch(() => {
      manifest = {};
    });
  return manifestLoad;
}

/** For tests: set the manifest directly (null forgets it and allows a new fetch); also forgets the audio element. */
export function setManifest(next: AudioManifest | null) {
  manifest = next;
  manifestLoad = next === null ? null : Promise.resolve();
  player = null;
}

/** Whether `text` has a recording (false until the manifest has loaded). */
export function hasRecording(text: string, voice: SpeakOptions["voice"] = "a"): boolean {
  return audioUrl(manifest, text, voice) !== null;
}

/** Fetches a lesson's clips in the background, so the service worker keeps them for offline. */
export async function prefetchAudio(items: Spoken[]) {
  await loadManifest();
  for (const item of items) {
    const url = audioUrl(manifest, item.text, item.voice);
    if (url) void fetch(url).catch(() => {});
  }
}

// One element for every clip: phones let a page play sound on an element once a tap has started it, so the
// role play's next line can play by itself after the learner's reply.
let player: HTMLAudioElement | null = null;

function playFile(url: string, options: SpeakOptions, fallback: () => void) {
  player ??= new Audio();
  const audio = player;
  const mine = token;
  const rate = options.slow ? RATE_SLOW / RATE_NORMAL : 1;
  audio.onended = () => {
    if (mine === token) options.onEnd?.();
  };
  audio.onerror = () => {
    if (mine === token) fallback(); // the file is missing or could not load: the phone voice reads it
  };
  audio.src = url;
  audio.defaultPlaybackRate = rate; // a new src resets playbackRate to this
  audio.playbackRate = rate;
  void audio.play()?.catch((error: unknown) => {
    if (mine === token && (error as { name?: string })?.name !== "AbortError") fallback();
  });
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
  player?.pause();
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

/**
 * Plays the recording of `text` if there is one, else reads `runs` with the phone's voices. Waits for the manifest
 * the first time (a newer request makes this one stale meanwhile).
 */
function start(text: string, runs: Run[], options: SpeakOptions) {
  const busy = isBusy();
  stopSpeaking();
  const mine = token;
  const go = () => {
    if (mine !== token) return;
    const url = typeof Audio === "undefined" ? null : audioUrl(manifest, text, options.voice);
    if (url) playFile(url, options, () => say(runs, options, false));
    else say(runs, options, busy);
  };
  if (manifest) go();
  else void loadManifest().then(go);
}

/** Reads an English sentence aloud (its recording if there is one), cancelling anything already playing. Quote marks are not read. */
export function speak(text: string, options: SpeakOptions = {}) {
  start(text, [{ text: speechText(text), script: "en" }], options);
}

/** Reads mixed Telugu–English text (its recording if there is one; else one utterance per script run, each with its own voice). */
export function narrate(text: string, options: SpeakOptions = {}) {
  start(text, splitScripts(speechText(text)), options);
}

/** Whether this is an Android phone (the only place the Telugu voice can be installed from the Settings help). Browser only. */
export function isAndroid(): boolean {
  return typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
}
