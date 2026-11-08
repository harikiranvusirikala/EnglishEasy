import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { audioKey, parseManifest } from "@/learning/audio-manifest";
import { spokenTexts } from "@/learning/spoken";
import { buildAll } from "./build";

// The recorded voice covers everything (owner, 2026-11-08: the phone's voice is only a last-resort backup). A content
// change without `npm run audio` fails here, before it reaches the live site.

const AUDIO = join(process.cwd(), "public", "audio");

describe("recorded voice", () => {
  it("has a clip for every text a released day reads aloud (run `npm run audio` if this fails)", async () => {
    const manifest = parseManifest(JSON.parse(readFileSync(join(AUDIO, "manifest.json"), "utf8")));
    const missing = new Set<string>();
    for (const { playable } of await buildAll()) {
      for (const { text, voice } of spokenTexts(playable)) {
        const file = manifest[audioKey(text, voice)];
        if (!file || !existsSync(join(AUDIO, file))) missing.add(`${playable.id}: ${voice} ${JSON.stringify(text)}`);
      }
    }
    expect([...missing]).toEqual([]);
  });
});
