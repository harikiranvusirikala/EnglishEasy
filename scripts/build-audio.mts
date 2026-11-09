// Makes the recorded voice (BUILD_PLAN "one recorded voice"): public/audio/<2 digits>/<key>.mp3 for every text the app reads
// aloud, and public/audio/manifest.json (text key → file) that speak() looks up. Texts already recorded are skipped;
// files no text uses any more are deleted. Run with `npm run audio` after adding or changing content, then commit
// public/audio/. Needs the internet (the Claude Code sandbox blocks the voice host, so the owner runs it).
// The voices are Microsoft Edge's free read-aloud voices, through msedge-tts (installed in tools/audio only).
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { pathToFileURL } from "node:url";
import { buildAll } from "../src/content/build";
import { audioKey, clipFile, speechText, type AudioVoice } from "../src/learning/audio-manifest";
import { spokenTexts, type Spoken } from "../src/learning/spoken";

/** Shruti reads Telugu and the English inside it with an Indian accent; Mohan is the second dialogue voice. */
const VOICES: Record<AudioVoice, string> = { a: "te-IN-ShrutiNeural", b: "te-IN-MohanNeural" };
const AT_ONCE = 4;
const outDir = join(process.cwd(), "public", "audio");

const fromTools = createRequire(join(process.cwd(), "tools", "audio", "package.json"));
const loaded = await import(pathToFileURL(fromTools.resolve("msedge-tts")).href);
const tts = loaded.MsEdgeTTS ? loaded : loaded.default;

/** One clip: the text as read (no quote marks), as a 24 kHz mono MP3. Retries twice; an empty answer counts as a failure. */
async function record(text: string, voice: AudioVoice): Promise<Buffer> {
  for (let attempt = 1; ; attempt++) {
    try {
      const client = new tts.MsEdgeTTS();
      await client.setMetadata(VOICES[voice], tts.OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      const { audioStream } = client.toStream(speechText(text));
      const chunks: Buffer[] = [];
      await new Promise<void>((done, fail) => {
        audioStream.on("data", (chunk: Buffer) => chunks.push(chunk));
        audioStream.on("end", () => done());
        audioStream.on("error", fail);
      });
      client.close();
      const audio = Buffer.concat(chunks);
      if (audio.length < 1000) throw new Error("no audio came back");
      return audio;
    } catch (error) {
      if (attempt >= 3) throw error;
      await new Promise((wait) => setTimeout(wait, 1500 * attempt));
    }
  }
}

// Everything the app reads aloud: every released day (the Settings voice sample is the phone's voice on purpose).
const wanted = new Map<string, Spoken>();
const want = (item: Spoken) => wanted.set(audioKey(item.text, item.voice), item);
for (const { playable } of await buildAll()) spokenTexts(playable).forEach(want);

await mkdir(outDir, { recursive: true });
const todo = [...wanted].filter(([key]) => !existsSync(join(outDir, clipFile(key))));
const failed: string[] = [];
let made = 0;
let next = 0;
async function worker() {
  while (next < todo.length) {
    const [key, { text, voice }] = todo[next++];
    try {
      const file = join(outDir, clipFile(key));
      const audio = await record(text, voice);
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, audio);
      made++;
      if (made % 25 === 0) console.log(`build-audio: ${made} of ${todo.length} made`);
    } catch (error) {
      failed.push(`${JSON.stringify(text)}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}
await Promise.all(Array.from({ length: Math.min(AT_ONCE, todo.length) }, worker));

// The manifest lists only clips that exist; clips nothing uses any more are removed (and folders left empty).
const manifest = Object.fromEntries([...wanted.keys()].filter((key) => existsSync(join(outDir, clipFile(key)))).sort().map((key) => [key, clipFile(key)]));
const keep = new Set(Object.values(manifest));
let removed = 0;
for (const entry of await readdir(outDir, { withFileTypes: true, recursive: true })) {
  const file = relative(outDir, join(entry.parentPath, entry.name));
  if (entry.isFile() && file.endsWith(".mp3") && !keep.has(file)) {
    await rm(join(outDir, file));
    removed++;
  }
}
for (const entry of await readdir(outDir, { withFileTypes: true })) {
  const folder = join(outDir, entry.name);
  if (entry.isDirectory() && (await readdir(folder)).length === 0) await rm(folder, { recursive: true });
}
await writeFile(join(outDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`build-audio: ${made} made, ${keep.size - made} already there, ${removed} removed; ${keep.size} clips in public/audio/manifest.json`);
if (failed.length > 0) {
  console.error(`build-audio: ${failed.length} could not be made (they use the phone's voice until the next run):\n  ${failed.slice(0, 10).join("\n  ")}`);
  process.exitCode = 1;
}
