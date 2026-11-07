/** The audio hook (BUILD_PLAN A6): `/audio/manifest.json` maps a text hash to a recorded file. No manifest exists at launch. */

export type AudioManifest = Record<string, string>;

/** The text as the manifest keys it: trimmed, spaces collapsed. */
const normalise = (text: string) => text.trim().replace(/\s+/g, " ");

/** FNV-1a, 32 bit, as 8 hex digits: small, stable, and the same in the browser and in a build script. */
export function textHash(text: string): string {
  let hash = 0x811c9dc5;
  for (const char of normalise(text)) {
    for (const unit of [char.charCodeAt(0), ...(char.length > 1 ? [char.charCodeAt(1)] : [])]) {
      hash ^= unit;
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
  }
  return hash.toString(16).padStart(8, "0");
}

/** The URL of the recording for `text`, or null when there is none. */
export function audioUrl(manifest: AudioManifest | null, text: string): string | null {
  const file = manifest?.[textHash(text)];
  return typeof file === "string" && file !== "" ? `/audio/${file}` : null;
}

/** Tolerant parse: anything that is not an object of strings gives an empty manifest. */
export function parseManifest(data: unknown): AudioManifest {
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  return Object.fromEntries(Object.entries(data).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
}
