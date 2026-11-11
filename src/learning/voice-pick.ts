/** Which voice reads what (BUILD_PLAN A6). Pure: works on a list of voices, so it is tested with fake lists. */

export type VoiceInfo = { voiceURI: string; name: string; lang: string };

const MALE = ["rishi", "ravi", "prabhat", "hemant"];
const FEMALE_IN = ["veena", "isha", "neerja", "heera", "kajal", "google"]; // Google's English (India) is a female voice
const FEMALE_OTHER = ["samantha", "karen", "moira", "tessa", "serena", "google uk english female", "aria", "zira"];

const lang = (voice: VoiceInfo) => voice.lang.toLowerCase().replace("_", "-");
const has = (voice: VoiceInfo, names: string[]) => names.some((name) => voice.name.toLowerCase().includes(name));
const isIndian = (voice: VoiceInfo) => lang(voice) === "en-in";
const isEnglish = (voice: VoiceInfo) => lang(voice).startsWith("en");

/** Lower is better. */
function rank(voice: VoiceInfo): number {
  if (has(voice, MALE)) return isIndian(voice) ? 6 : 8;
  if (isIndian(voice)) return has(voice, FEMALE_IN) ? 0 : 1;
  if (isEnglish(voice) && has(voice, FEMALE_OTHER) && /^en-(gb|us)$/.test(lang(voice))) return 2;
  if (isEnglish(voice) && has(voice, FEMALE_OTHER)) return 3;
  return isEnglish(voice) ? 4 : 99;
}

/** All English voices, best first (Indian-English female voices at the top), for the Settings list. */
export function englishVoices<T extends VoiceInfo>(voices: readonly T[]): T[] {
  return voices
    .map((voice, order) => ({ voice, order }))
    .filter(({ voice }) => isEnglish(voice))
    .sort((a, b) => rank(a.voice) - rank(b.voice) || a.order - b.order)
    .map(({ voice }) => voice);
}

/** The English voice: the saved one if it still exists, else the best English voice, else none. */
export function pickEnglishVoice<T extends VoiceInfo>(voices: readonly T[], savedURI: string | null): T | null {
  const saved = savedURI ? voices.find((voice) => voice.voiceURI === savedURI) : undefined;
  return saved ?? englishVoices(voices)[0] ?? null;
}

/** The Telugu voice: the saved one if it still exists, else any Telugu voice, else none ("missing"). */
export function pickTeluguVoice<T extends VoiceInfo>(voices: readonly T[], savedURI: string | null): T | null {
  const telugu = voices.filter((voice) => lang(voice).startsWith("te"));
  return telugu.find((voice) => voice.voiceURI === savedURI) ?? telugu[0] ?? null;
}

/** A second English voice for the other speaker of a dialogue: the best one that differs from `first`, else null (use a lower pitch). */
export function pickPartnerVoice<T extends VoiceInfo>(voices: readonly T[], first: T | null): T | null {
  const others = englishVoices(voices).filter((voice) => voice.voiceURI !== first?.voiceURI);
  return others.find((voice) => has(voice, MALE)) ?? others[0] ?? null;
}

/** An American ("us") or British ("gb") English voice for an accent lesson's lines, else null (the usual voice reads it). */
export function pickAccentVoice<T extends VoiceInfo>(voices: readonly T[], accent: "us" | "gb"): T | null {
  const want = accent === "us" ? "en-us" : "en-gb";
  return voices.find((voice) => lang(voice) === want) ?? null;
}
