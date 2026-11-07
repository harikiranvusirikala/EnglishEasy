/** Settings: the pure part (types, defaults, tolerant parsing). The browser side is `src/lib/settings-store.ts`. */

export const SETTINGS_KEY = "englisheasy.settings.v1";

export type ThemeChoice = "light" | "dark" | "system";
export type TextSize = "A" | "A+" | "A++";
export type LearnIn = "te" | "en";

export type Settings = {
  theme: ThemeChoice;
  textSize: TextSize;
  learnIn: LearnIn;
  autoPlay: boolean;
  voiceURI: string | null;
  teluguVoiceURI: string | null;
  noSpeaking: boolean;
  onboarded: boolean;
  /** Ids of one-time cards the learner has dismissed. */
  dismissed: string[];
};

export const DEFAULT_SETTINGS: Settings = {
  theme: "system",
  textSize: "A",
  learnIn: "te",
  autoPlay: true,
  voiceURI: null,
  teluguVoiceURI: null,
  noSpeaking: false,
  onboarded: false,
  dismissed: [],
};

/** Root font size in px for each text size; every length in the app is `rem`, so this scales everything. */
export const TEXT_SIZE_PX: Record<TextSize, number> = { A: 18, "A+": 20, "A++": 22 };

const THEMES: ThemeChoice[] = ["light", "dark", "system"];
const TEXT_SIZES: TextSize[] = ["A", "A+", "A++"];
const LEARN_IN: LearnIn[] = ["te", "en"];

function pick<T extends string>(value: unknown, allowed: T[], fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

const bool = (value: unknown, fallback: boolean) => (typeof value === "boolean" ? value : fallback);
const text = (value: unknown) => (typeof value === "string" && value !== "" ? value : null);

/** Reads saved settings; anything missing or invalid falls back to its default, so old or damaged data never breaks the app. */
export function parseSettings(raw: string | null | undefined): Settings {
  let data: Record<string, unknown> = {};
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) data = parsed as Record<string, unknown>;
  } catch {
    // damaged: use the defaults
  }
  const d = DEFAULT_SETTINGS;
  return {
    theme: pick(data.theme, THEMES, d.theme),
    textSize: pick(data.textSize, TEXT_SIZES, d.textSize),
    learnIn: pick(data.learnIn, LEARN_IN, d.learnIn),
    autoPlay: bool(data.autoPlay, d.autoPlay),
    voiceURI: text(data.voiceURI),
    teluguVoiceURI: text(data.teluguVoiceURI),
    noSpeaking: bool(data.noSpeaking, d.noSpeaking),
    onboarded: bool(data.onboarded, d.onboarded),
    dismissed: Array.isArray(data.dismissed) ? data.dismissed.filter((id): id is string => typeof id === "string") : [],
  };
}

/** Whether the dark theme applies, given the choice and the phone's own setting. */
export function isDark(theme: ThemeChoice, deviceIsDark: boolean): boolean {
  return theme === "dark" || (theme === "system" && deviceIsDark);
}
