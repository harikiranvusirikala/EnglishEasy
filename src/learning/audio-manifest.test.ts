import { describe, expect, it } from "vitest";
import { audioUrl, parseManifest, textHash } from "./audio-manifest";

describe("audio manifest", () => {
  it("hashes the same text to the same 8 hex digits, ignoring extra spaces", () => {
    expect(textHash("I eat rice.")).toMatch(/^[0-9a-f]{8}$/);
    expect(textHash("I eat rice.")).toBe(textHash("  I  eat rice. "));
    expect(textHash("I eat rice.")).not.toBe(textHash("I eat tea."));
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
