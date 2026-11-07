import type { PlayableDay } from "@/content/types";

// Fetches a day's expanded content (`public/content/<id>.json`, written by `npm run content`) and keeps it in memory.
// The cache holds the promise, so React's `use()` gets the same one on every render.

const cache = new Map<string, Promise<PlayableDay>>();

export function loadLesson(id: string): Promise<PlayableDay> {
  let found = cache.get(id);
  if (!found) {
    found = fetch(`/content/${encodeURIComponent(id)}.json`).then((response) => {
      if (!response.ok) throw new Error(`Lesson "${id}" could not be loaded (${response.status})`);
      return response.json() as Promise<PlayableDay>;
    });
    cache.set(id, found);
    found.catch(() => cache.delete(id)); // a failed load can be retried
  }
  return found;
}
