import { describe, expect, it } from "vitest";
import { audioKey, audioUrl, parseManifest, speechText, textHash } from "./audio-manifest";

describe("audio manifest", () => {
  it("hashes the same text to the same 8 hex digits, ignoring extra spaces", () => {
    expect(textHash("I eat rice.")).toMatch(/^[0-9a-f]{8}$/);
    expect(textHash("I eat rice.")).toBe(textHash("  I  eat rice. "));
    expect(textHash("I eat rice.")).not.toBe(textHash("I eat tea."));
  });

  it("reads without quote marks, keeping apostrophes, and hashes the text as read", () => {
    expect(speechText('  "I walk every morning."  అంటే ఏమిటి? ')).toBe("I walk every morning. అంటే ఏమిటి?");
    expect(speechText("“Don't” go.")).toBe("Don't go.");
    expect(textHash('"I eat rice."')).toBe(textHash("I eat rice."));
  });

  it("keys the second dialogue voice apart", () => {
    expect(audioKey("Hello.", "b")).toBe(`b-${textHash("Hello.")}`);
    const manifest = { [audioKey("Hello.")]: "a.mp3", [audioKey("Hello.", "b")]: "b.mp3" };
    expect(audioUrl(manifest, "Hello.")).toBe("/audio/a.mp3");
    expect(audioUrl(manifest, "Hello.", "b")).toBe("/audio/b.mp3");
  });

  it("finds a recording by text, or null", () => {
    const manifest = { [textHash("I eat rice.")]: "a1.mp3" };
    expect(audioUrl(manifest, "I eat rice.")).toBe("/audio/a1.mp3");
    expect(audioUrl(manifest, "I eat tea.")).toBeNull();
    expect(audioUrl(null, "I eat rice.")).toBeNull();
  });

  it("parses tolerantly", () => {
    expect(parseManifest({ a: "x.mp3", b: 3 })).toEqual({ a: "x.mp3" });
    expect(parseManifest(null)).toEqual({});
    expect(parseManifest([1])).toEqual({});
    expect(parseManifest("x")).toEqual({});
  });
});
