import type { Day } from "./types";

/**
 * Maps a day id to its content file (BUILD_PLAN A4). Used by the build script, overview pages and tests.
 * Add one line per day file as it is written; a day listed in `course.ts` but not here is planned, not written yet.
 */
const dayFiles: Record<string, () => Promise<{ day: Day }>> = {
  "sentence-basics": () => import("./main/w01/sentence-basics"),
  "i-am-you-are": () => import("./main/w01/i-am-you-are"),
  "present-simple-every-day": () => import("./main/w01/present-simple-every-day"),
};

/** Ids of every written day, in registry order (which is course order). */
export function writtenDayIds(): string[] {
  return Object.keys(dayFiles);
}

export function isWritten(id: string): boolean {
  return Object.hasOwn(dayFiles, id);
}

export async function loadDay(id: string): Promise<Day> {
  if (!isWritten(id)) throw new Error(`No content file for day "${id}" (register it in src/content/load.ts)`);
  return (await dayFiles[id]()).day;
}
