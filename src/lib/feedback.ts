import { useSyncExternalStore } from "react";
import type { LearnIn } from "@/learning/settings";

// Feedback from the phone (BUILD_PLAN "feedback in the app"): one Settings message a day and one rating per lesson,
// remembered locally and queued while offline (like reports). Nothing here throws; with storage blocked, the memory
// lasts until the page reloads. The server gets no account or device id.

export const APP_VERSION = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "dev";

export type FeedbackRating = "love" | "good" | "okay" | "bad";
export type FeedbackTopic = "too-hard" | "too-easy" | "voice" | "speaking" | "telugu" | "slow" | "more-lessons";
export type LessonLevel = "easy" | "right" | "hard";

export type AppFeedback = { kind: "app"; rating?: FeedbackRating; topics: FeedbackTopic[]; said?: string; learnIn: LearnIn; appVersion: string; at: string };
export type LessonRating = { kind: "lesson"; dayId: string; level: LessonLevel; learnIn: LearnIn; at: string };
export type FeedbackItem = AppFeedback | LessonRating;

export interface FeedbackState {
  /** The local day ("YYYY-MM-DD") the last Settings message was sent. */
  sentOn: string | null;
  /** Lessons already rated on this phone, with the level chosen. */
  rated: Record<string, LessonLevel>;
  /** Not yet delivered. */
  queue: FeedbackItem[];
}

export const FEEDBACK_KEY = "englisheasy.feedback.v1";
const URL = "/api/feedback";
const EMPTY: FeedbackState = { sentOn: null, rated: {}, queue: [] };

const isItem = (x: unknown): x is FeedbackItem => {
  const item = x as Partial<FeedbackItem> | null;
  return !!item && (item.kind === "app" || item.kind === "lesson") && typeof item.at === "string" && typeof item.learnIn === "string";
};

/** Reads saved state; anything unreadable is empty. */
export function parseFeedbackState(raw: string | null): FeedbackState {
  if (!raw) return EMPTY;
  try {
    const value = JSON.parse(raw) as Partial<FeedbackState>;
    const rated = value.rated && typeof value.rated === "object" && !Array.isArray(value.rated) ? Object.fromEntries(Object.entries(value.rated).filter(([, v]) => typeof v === "string")) : {};
    return {
      sentOn: typeof value.sentOn === "string" ? value.sentOn : null,
      rated: rated as Record<string, LessonLevel>,
      queue: Array.isArray(value.queue) ? value.queue.filter(isItem) : [],
    };
  } catch {
    return EMPTY;
  }
}

/** Adds an item unless today's message was sent already or the lesson was rated; returns the same state when refused. */
export function addFeedbackToState(state: FeedbackState, item: FeedbackItem, today: string): FeedbackState {
  if (item.kind === "app") return state.sentOn === today ? state : { ...state, sentOn: today, queue: [...state.queue, item] };
  return item.dayId in state.rated ? state : { ...state, rated: { ...state.rated, [item.dayId]: item.level }, queue: [...state.queue, item] };
}

const listeners = new Set<() => void>();
let memory: FeedbackState | null = null; // used when storage is blocked
let cachedRaw: string | null | undefined;
let cached: FeedbackState = EMPTY;

function read(): FeedbackState {
  try {
    const raw = localStorage.getItem(FEEDBACK_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cached = parseFeedbackState(raw);
    }
    return cached;
  } catch {
    return memory ?? EMPTY;
  }
}

function write(next: FeedbackState) {
  try {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(next));
  } catch {
    memory = next;
  }
  listeners.forEach((l) => l());
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === FEEDBACK_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
};

/** The saved state once hydrated; null on the server and before hydration. */
export function useFeedbackState(): FeedbackState | null {
  return useSyncExternalStore(subscribe, read, () => null);
}

let flushing = false;

/** Sends queued feedback. Feedback the server refuses (4xx) is dropped; a network or server failure keeps it for later. */
export async function flushFeedback(fetcher: typeof fetch = (...args) => fetch(...args)): Promise<void> {
  if (flushing) return;
  flushing = true;
  try {
    for (const item of read().queue) {
      let status: number;
      try {
        status = (await fetcher(URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) })).status;
      } catch {
        return;
      }
      if (status >= 500) return;
      const current = read();
      write({ ...current, queue: current.queue.filter((x) => !(x.kind === item.kind && x.at === item.at)) });
    }
  } finally {
    flushing = false;
  }
}

/** Remembers the item and tries to send it now. Returns false when refused (already sent today, or lesson already rated). */
export function submitFeedback(item: FeedbackItem, today: string): boolean {
  const before = read();
  const next = addFeedbackToState(before, item, today);
  if (next === before) return false;
  write(next);
  void flushFeedback();
  return true;
}
