"use client";

import { useEffect, useState } from "react";
import type { PlayableDay } from "@/content/types";
import { loadLesson } from "./lesson-data";

/**
 * Loads several days' content (after hydration). `null` while loading; a day that cannot be loaded is left out and
 * `failed` says so. `ids` null waits (for example until saved progress is known).
 */
export function useDays(ids: string[] | null): { days: PlayableDay[]; failed: boolean } | null {
  const key = ids ? ids.join("|") : null;
  const [loaded, setLoaded] = useState<{ key: string; days: PlayableDay[]; failed: boolean } | null>(null);

  useEffect(() => {
    if (key === null) return;
    let live = true;
    const list = key === "" ? [] : key.split("|");
    Promise.allSettled(list.map(loadLesson)).then((results) => {
      if (!live) return;
      const days = results.flatMap((r) => (r.status === "fulfilled" ? [r.value] : []));
      setLoaded({ key, days, failed: days.length < list.length });
    });
    return () => {
      live = false;
    };
  }, [key]);

  return loaded && loaded.key === key ? loaded : null;
}
