// Writes public/content/<dayId>.json for every written day (BUILD_PLAN A3). Run by predev and prebuild.
// Run with: node --import tsx --env-file-if-exists=.env.local scripts/build-content.mts
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { buildAll } from "../src/content/build";

const outDir = join(process.cwd(), "public", "content");
await mkdir(outDir, { recursive: true });
for (const file of await readdir(outDir)) {
  if (file.endsWith(".json")) await rm(join(outDir, file));
}

const days = await buildAll();
for (const { playable } of days) {
  await writeFile(join(outDir, `${playable.id}.json`), JSON.stringify(playable));
}
console.log(`build-content: wrote ${days.length} day file(s) to public/content/`);
