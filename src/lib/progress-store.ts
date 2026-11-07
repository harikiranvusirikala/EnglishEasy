import { useSyncExternalStore } from "react";
import { emptyProgress, parseProgress, PROGRESS_KEY, type Progress } from "@/learning/progress";

// Progress in localStorage, read with useSyncExternalStore (BUILD_PLAN A5). `useProgress` is null on the server and
// before hydration, so screens show skeletons, never a wrong guess. Corrupt data reads as empty progress.

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

let cachedRaw: string | null | undefined;
let cached: Progress = emptyProgress();
let blocked: Progress | null = null; // when storage is blocked, progress lasts until the page reloads

function read(): Progress {
  let raw: string | null;
  try {
    raw = localStorage.getItem(PROGRESS_KEY);
  } catch {
    return blocked ?? cached;
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cached = parseProgress(raw);
  }
  return cached;
}

/** Progress right now (for code outside React); browser only. */
export function getProgress(): Progress {
  return read();
}

/** Change progress with one of the pure functions in `progress.ts`, save it and tell every screen. */
export function updateProgress(change: (p: Progress) => Progress) {
  const next = change(read());
  if (next === read()) return;
  try {
    const raw = JSON.stringify(next);
    localStorage.setItem(PROGRESS_KEY, raw);
    cachedRaw = raw;
    cached = next;
  } catch {
    blocked = next;
    cached = next;
  }
  notify();
}

/** Call `listener` whenever progress changes (this tab or another). Returns the unsubscribe function. */
export function subscribeProgress(listener: () => void): () => void {
  return subscribe(listener);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Another tab saved progress.
  const storageChanged = (event: StorageEvent) => {
    if (event.key === PROGRESS_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", storageChanged);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", storageChanged);
  };
}

/** All progress, or null on the server and before hydration. */
export function useProgress(): Progress | null {
  return useSyncExternalStore(subscribe, read, () => null);
}
