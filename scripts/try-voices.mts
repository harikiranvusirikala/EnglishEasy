// Hear sentences before they go into a lesson: reads tools/audio/try.txt (one sentence per line, # skips a line)
// and records each one in both voices into tools/audio/out/. Run with `npm run voices`.
import { createRequire } from "node:module";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { speechText } from "../src/learning/audio-manifest";

const VOICES = { shruti: "te-IN-ShrutiNeural", mohan: "te-IN-MohanNeural" }; // the app's voices a and b
const dir = join(process.cwd(), "tools", "audio");
const fromTools = createRequire(join(dir, "package.json"));
const loaded = await import(pathToFileURL(fromTools.resolve("msedge-tts")).href);
const tts = loaded.MsEdgeTTS ? loaded : loaded.default;

const lines = (await readFile(join(dir, "try.txt"), "utf8"))
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

const out = join(dir, "out");
await rm(out, { recursive: true, force: true });
await mkdir(out);
for (const [i, line] of lines.entries()) {
  for (const [name, voice] of Object.entries(VOICES)) {
    const client = new tts.MsEdgeTTS();
    await client.setMetadata(voice, tts.OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    const { audioStream } = client.toStream(speechText(line));
    const chunks: Buffer[] = [];
    await new Promise<void>((done, fail) => {
      audioStream.on("data", (chunk: Buffer) => chunks.push(chunk));
      audioStream.on("end", () => done());
      audioStream.on("error", fail);
    });
    client.close();
    await writeFile(join(out, `${i + 1}-${name}.mp3`), Buffer.concat(chunks));
  }
  console.log(`${i + 1}. ${line}`);
}
console.log(`try-voices: ${lines.length * 2} clips in tools/audio/out/`);
