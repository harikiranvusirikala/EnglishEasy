import { describe, expect, it } from "vitest";
import { DEFAULT_SETTINGS, isDark, parseSettings } from "./settings";

describe("parseSettings", () => {
  it("gives the defaults for nothing, junk or damaged data", () => {
    expect(parseSettings(null)).toEqual(DEFAULT_SETTINGS);
    expect(parseSettings("")).toEqual(DEFAULT_SETTINGS);
    expect(parseSettings("{nope")).toEqual(DEFAULT_SETTINGS);
    expect(parseSettings("[1,2]")).toEqual(DEFAULT_SETTINGS);
    expect(parseSettings("42")).toEqual(DEFAULT_SETTINGS);
  });

  it("keeps valid values", () => {
    const saved = { ...DEFAULT_SETTINGS, theme: "dark", textSize: "A++", learnIn: "en", autoPlay: false, voiceURI: "v1", dismissed: ["x"] };
    expect(parseSettings(JSON.stringify(saved))).toEqual(saved);
  });

  it("replaces only the invalid fields", () => {
    const parsed = parseSettings(JSON.stringify({ theme: "purple", textSize: "A+", autoPlay: "yes", dismissed: ["a", 3] }));
    expect(parsed.theme).toBe("system");
    expect(parsed.textSize).toBe("A+");
    expect(parseSettings(JSON.stringify({ textSize: "A-" })).textSize).toBe("A-");
    expect(parsed.autoPlay).toBe(true);
    expect(parsed.dismissed).toEqual(["a"]);
  });
});

describe("isDark", () => {
  it("follows the phone only for 'system'", () => {
    expect(isDark("dark", false)).toBe(true);
    expect(isDark("light", true)).toBe(false);
    expect(isDark("system", true)).toBe(true);
    expect(isDark("system", false)).toBe(false);
  });
});
