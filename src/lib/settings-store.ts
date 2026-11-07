import { useSyncExternalStore } from "react";
import {
  DEFAULT_SETTINGS,
  SETTINGS_KEY,
  TEXT_SIZE_PX,
  isDark,
  parseSettings,
  type LearnIn,
  type Settings,
} from "@/learning/settings";

// Settings in localStorage, read with useSyncExternalStore. Never read during render on the server:
// `useSettings` is null there (and until hydration), so screens show skeletons, not a wrong guess.

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());
const deviceMedia = () => (typeof matchMedia === "function" ? matchMedia("(prefers-color-scheme: dark)") : null);

let cachedRaw: string | null | undefined;
let cached: Settings = DEFAULT_SETTINGS;
let blockedStorage: Settings | null = null; // when storage is blocked, choices last until the page reloads

function read(): Settings {
  let raw: string | null;
  try {
    raw = localStorage.getItem(SETTINGS_KEY);
  } catch {
    return blockedStorage ?? DEFAULT_SETTINGS;
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cached = parseSettings(raw);
  }
  return cached;
}

/** Puts the settings on <html> (as SETTINGS_SCRIPT does on page load). */
function applyToDocument(settings: Settings) {
  const root = document.documentElement;
  root.classList.toggle("dark", isDark(settings.theme, deviceMedia()?.matches ?? false));
  root.style.fontSize = `${TEXT_SIZE_PX[settings.textSize]}px`;
  root.setAttribute("data-learn-in", settings.learnIn);
}

/** Saves a change, applies it to the page and tells every screen that shows settings. */
export function updateSettings(patch: Partial<Settings>) {
  const next = { ...read(), ...patch };
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  } catch {
    blockedStorage = next;
  }
  applyToDocument(next);
  notify();
}

/** The settings right now (for code outside React); browser only. */
export function getSettings(): Settings {
  return read();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const device = deviceMedia();
  const changed = () => {
    applyToDocument(read());
    notify();
  };
  // The phone switched Day/Night (matters for "Follow phone"); another tab changed a setting.
  const storageChanged = (event: StorageEvent) => {
    if (event.key === SETTINGS_KEY || event.key === null) changed();
  };
  device?.addEventListener("change", changed);
  window.addEventListener("storage", storageChanged);
  return () => {
    listeners.delete(listener);
    device?.removeEventListener("change", changed);
    window.removeEventListener("storage", storageChanged);
  };
}

/** All settings, or null on the server and before hydration. */
export function useSettings(): Settings | null {
  return useSyncExternalStore(subscribe, read, () => null);
}

/** The Learn in mode. Before hydration it is the default (Telugu); the settings script already marks <html>, so CSS hides the extra Telugu for English mode. */
export function useLearnIn(): LearnIn {
  return useSyncExternalStore(
    subscribe,
    () => read().learnIn,
    () => DEFAULT_SETTINGS.learnIn,
  );
}
