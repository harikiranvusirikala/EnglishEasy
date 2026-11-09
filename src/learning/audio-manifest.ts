/**
 * The audio hook (BUILD_PLAN A6, "one recorded voice"): `/audio/manifest.json` maps a text key to a recorded file,
 * made ahead of time by `npm run audio`. The same functions run in the browser and in that script.
 */

export type AudioManifest = Record<string, string>;
export type AudioVoice = "a" | "b";

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

/** 0–99,999 in English words ("two hundred and forty"); larger numbers stay as digits. */
export function numberWords(n: number): string {
  if (n < 20) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : "");
  if (n < 1000) return `${ONES[Math.floor(n / 100)]} hundred` + (n % 100 ? ` and ${numberWords(n % 100)}` : "");
  if (n < 100000) {
    const rest = n % 1000;
    return `${numberWords(Math.floor(n / 1000))} thousand` + (rest === 0 ? "" : rest < 100 ? ` and ${numberWords(rest)}` : ` ${numberWords(rest)}`);
  }
  return String(n);
}

/** English with digits read as words: 7:30 → "seven thirty", 9:05 → "nine oh five", 1,500 → "one thousand five hundred". */
function spokenEnglish(text: string): string {
  return text
    .replace(/(?<![\d:])(\d{1,2}):(\d{2})(?![\d:])/g, (_, h: string, m: string) => {
      const min = Number(m);
      return `${numberWords(Number(h))} ${min === 0 ? "o'clock" : min < 10 ? `oh ${numberWords(min)}` : numberWords(min)}`;
    })
    .replace(/(?<!\d|\d[.,])\d{1,3}(?:,\d{3})+(?!\d|[.,]\d)|(?<!\d|\d[.,])\d+(?!\d|[.,]\d)/g, (m) => numberWords(Number(m.replace(/,/g, ""))))
    .replace(/\bDr\.? (?=[A-Z])/g, "Doctor ");
}

/**
 * What is actually read: quote marks dropped (a voice would say them or pause oddly), spaces collapsed. Apostrophes stay.
 * English-only text says its numbers and "Dr" as words (content review, 2026-11-09): the Telugu voice reads English
 * aloud and could read "240" in Telugu. Text with Telugu letters keeps its digits, which the voice reads in Telugu.
 */
export function speechText(text: string): string {
  const plain = text.replace(/["“”„]/g, "").trim().replace(/\s+/g, " ");
  return /[ఀ-౿]/.test(plain) ? plain : spokenEnglish(plain);
}

/** FNV-1a, 32 bit, as 8 hex digits, of the text as read: small, stable, and the same in the browser and in a build script. */
export function textHash(text: string): string {
  let hash = 0x811c9dc5;
  for (const char of speechText(text)) {
    for (const unit of [char.charCodeAt(0), ...(char.length > 1 ? [char.charCodeAt(1)] : [])]) {
      hash ^= unit;
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
  }
  return hash.toString(16).padStart(8, "0");
}

/** The manifest key: the text's hash, with `b-` in front for the second dialogue voice. */
export const audioKey = (text: string, voice: AudioVoice = "a") => (voice === "b" ? `b-${textHash(text)}` : textHash(text));

/** Where a key's clip lives under /audio/: a subfolder named by the hash's first two digits (`3f/b-3f9a12bc.mp3`). */
export const clipFile = (key: string) => `${key.slice(-8, -6)}/${key}.mp3`;

/** The URL of the recording for `text` in that voice, or null when there is none. */
export function audioUrl(manifest: AudioManifest | null, text: string, voice: AudioVoice = "a"): string | null {
  const file = manifest?.[audioKey(text, voice)];
  return typeof file === "string" && file !== "" ? `/audio/${file}` : null;
}

/** Tolerant parse: anything that is not an object of strings gives an empty manifest. */
export function parseManifest(data: unknown): AudioManifest {
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  return Object.fromEntries(Object.entries(data).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
}
