/**
 * The audio hook (BUILD_PLAN A6, "one recorded voice"): `/audio/manifest.json` maps a text key to a recorded file,
 * made ahead of time by `npm run audio`. The same functions run in the browser and in that script.
 */

export type AudioManifest = Record<string, string>;
export type AudioVoice = "a" | "b";

/** What is actually read: quote marks dropped (a voice would say them or pause oddly), spaces collapsed. Apostrophes stay. */
export function speechText(text: string): string {
  return text.replace(/["“”„]/g, "").trim().replace(/\s+/g, " ");
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
