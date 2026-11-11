import { describe, expect, it } from "vitest";
import { accentOf, audioKey, audioUrl, clipFile, isManVoice, parseManifest, speechText, textHash, type AudioVoice } from "./audio-manifest";

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
  });

  it("files a clip under the first two digits of its hash, for either voice", () => {
    expect(clipFile("3f9a12bc")).toBe("3f/3f9a12bc.mp3");
    expect(clipFile("b-3f9a12bc")).toBe("3f/b-3f9a12bc.mp3");
    expect(audioUrl({ [audioKey("Hi.")]: clipFile(audioKey("Hi.")) }, "Hi.")).toBe(`/audio/${textHash("Hi.").slice(0, 2)}/${textHash("Hi.")}.mp3`);
    expect(parseManifest(null)).toEqual({});
    expect(parseManifest([1])).toEqual({});
    expect(parseManifest("x")).toEqual({});
  });
});

describe("speechText numbers (content review 2026-11-09)", () => {
  it("reads numbers and times in English text as words", async () => {
    const { speechText, numberWords } = await import("./audio-manifest");
    expect(speechText("That comes to 240 rupees.")).toBe("That comes to two hundred and forty rupees.");
    expect(speechText("It is 7:30. The bus is at 9:05, not 10:00.")).toBe("It is seven thirty. The bus is at nine oh five, not ten o'clock.");
    expect(speechText("It costs 1,500 rupees, or 30 each.")).toBe("It costs one thousand five hundred rupees, or thirty each.");
    expect(speechText("I am going to Dr Prasad's clinic.")).toBe("I am going to Doctor Prasad's clinic.");
    expect(numberWords(21)).toBe("twenty-one");
    expect(numberWords(1005)).toBe("one thousand and five");
  });
  it("keeps digits in Telugu text and in decimals", async () => {
    const { speechText } = await import("./audio-manifest");
    expect(speechText("మొత్తం 130 రూపాయలు అయింది.")).toBe("మొత్తం 130 రూపాయలు అయింది.");
    expect(speechText("It is 2.5 kilos.")).toBe("It is 2.5 kilos.");
  });
});

describe("accent voices (owner, 2026-11-11)", () => {
  it("keep the keys of the usual voices and prefix the accent ones", () => {
    const hash = textHash("Take the lift.");
    expect(audioKey("Take the lift.")).toBe(hash);
    expect(audioKey("Take the lift.", "b")).toBe(`b-${hash}`);
    expect(audioKey("Take the lift.", "us-f")).toBe(`us-f-${hash}`);
    expect(clipFile(audioKey("Take the lift.", "gb-m"))).toBe(`${hash.slice(0, 2)}/gb-m-${hash}.mp3`);
  });

  it("know who is a man and which accent a voice has", () => {
    expect(["a", "b", "us-f", "us-m", "gb-f", "gb-m"].map((v) => isManVoice(v as AudioVoice))).toEqual([false, true, false, true, false, true]);
    expect(["a", "b", "us-f", "gb-m"].map((v) => accentOf(v as AudioVoice))).toEqual([null, null, "us", "gb"]);
  });
});
