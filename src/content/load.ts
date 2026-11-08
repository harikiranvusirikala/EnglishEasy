import type { Day } from "./types";

/**
 * Maps a day id to its content file (BUILD_PLAN A4). Used by the build script, overview pages and tests.
 * Add one line per day file as it is written; a day listed in `course.ts` but not here is planned, not written yet.
 */
const dayFiles: Record<string, () => Promise<{ day: Day }>> = {
  "sentence-basics": () => import("./main/w01/sentence-basics"),
  "i-am-you-are": () => import("./main/w01/i-am-you-are"),
  "present-simple-every-day": () => import("./main/w01/present-simple-every-day"),
  "present-continuous-right-now": () => import("./main/w01/present-continuous-right-now"),
  "past-simple-yesterday": () => import("./main/w01/past-simple-yesterday"),
  "future-will-tomorrow": () => import("./main/w01/future-will-tomorrow"),
  "w1-review": () => import("./main/w01/w1-review"),
  "what-and-where": () => import("./main/w02/what-and-where"),
  "when-and-what-time": () => import("./main/w02/when-and-what-time"),
  "who-and-whose": () => import("./main/w02/who-and-whose"),
  "how-questions": () => import("./main/w02/how-questions"),
  "why-and-because": () => import("./main/w02/why-and-because"),
  "w2-conversation": () => import("./main/w02/w2-conversation"),
  "w2-review": () => import("./main/w02/w2-review"),
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
