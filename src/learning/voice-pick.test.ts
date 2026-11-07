import { describe, expect, it } from "vitest";
import { englishVoices, pickEnglishVoice, pickPartnerVoice, pickTeluguVoice, type VoiceInfo } from "./voice-pick";

const v = (name: string, lang: string, voiceURI = name): VoiceInfo => ({ name, lang, voiceURI });

const ANDROID = [
  v("English United States", "en-US"),
  v("Google हिन्दी", "hi-IN"),
  v("Google English (India)", "en-IN", "Google English (India)"),
  v("Google UK English Female", "en-GB"),
  v("Google తెలుగు", "te-IN"),
];
const IPHONE = [v("Samantha", "en-US"), v("Rishi", "en-IN"), v("Veena", "en-IN"), v("Daniel", "en-GB"), v("Alex", "en-US")];
const WINDOWS = [v("Microsoft Zira - English (United States)", "en-US"), v("Microsoft Ravi - English (India)", "en-IN"), v("Microsoft Heera - English (India)", "en-IN")];
const MAC = [v("Alex", "en-US"), v("Rishi", "en-IN"), v("Karen", "en-AU"), v("Moira", "en-IE"), v("Tessa", "en-ZA")];

describe("pickEnglishVoice", () => {
  it("prefers a female Indian-English voice on every platform", () => {
    expect(pickEnglishVoice(ANDROID, null)?.name).toBe("Google English (India)");
    expect(pickEnglishVoice(IPHONE, null)?.name).toBe("Veena");
    expect(pickEnglishVoice(WINDOWS, null)?.name).toContain("Heera");
  });

  it("skips the known male Indian voice when a female English voice exists", () => {
    expect(pickEnglishVoice(MAC, null)?.name).not.toBe("Rishi");
    expect(pickEnglishVoice(MAC, null)?.name).toBe("Karen");
  });

  it("uses a known female en-GB/en-US voice when there is no Indian-English one", () => {
    expect(pickEnglishVoice([v("Alex", "en-US"), v("Samantha", "en-US")], null)?.name).toBe("Samantha");
    expect(pickEnglishVoice([v("Daniel", "en-GB"), v("Microsoft Zira", "en-US")], null)?.name).toBe("Microsoft Zira");
  });

  it("falls back to any English voice, even a male one, and to none", () => {
    expect(pickEnglishVoice([v("Alex", "en-US"), v("Thomas", "fr-FR")], null)?.name).toBe("Alex");
    expect(pickEnglishVoice([v("Rishi", "en-IN")], null)?.name).toBe("Rishi");
    expect(pickEnglishVoice([v("Thomas", "fr-FR")], null)).toBeNull();
    expect(pickEnglishVoice([], null)).toBeNull();
  });

  it("honours the saved voice, but not one that has disappeared", () => {
    expect(pickEnglishVoice(IPHONE, "Alex")?.name).toBe("Alex");
    expect(pickEnglishVoice(IPHONE, "Gone")?.name).toBe("Veena");
  });

  it("accepts lang codes with an underscore", () => {
    expect(pickEnglishVoice([v("Alex", "en_US"), v("Veena", "en_IN")], null)?.name).toBe("Veena");
  });
});

describe("englishVoices", () => {
  it("lists only English voices, Indian female ones first", () => {
    expect(englishVoices(IPHONE).map((x) => x.name)).toEqual(["Veena", "Samantha", "Daniel", "Alex", "Rishi"]);
    expect(englishVoices(ANDROID).map((x) => x.name)).not.toContain("Google हिन्दी");
  });
});

describe("pickTeluguVoice", () => {
  it("finds a Telugu voice, or reports none", () => {
    expect(pickTeluguVoice(ANDROID, null)?.name).toBe("Google తెలుగు");
    expect(pickTeluguVoice(IPHONE, null)).toBeNull();
  });

  it("honours the saved Telugu voice", () => {
    const two = [v("A", "te-IN"), v("B", "te_IN")];
    expect(pickTeluguVoice(two, "B")?.name).toBe("B");
    expect(pickTeluguVoice(two, "Gone")?.name).toBe("A");
  });
});

describe("pickPartnerVoice", () => {
  it("picks a different voice (a male one first) or none", () => {
    const first = pickEnglishVoice(IPHONE, null);
    expect(pickPartnerVoice(IPHONE, first)?.name).toBe("Rishi");
    expect(pickPartnerVoice([v("Veena", "en-IN")], v("Veena", "en-IN"))).toBeNull();
  });
});
