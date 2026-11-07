"use client";

import { useEffect, useMemo, useState } from "react";
import { Toast } from "@/components/ui/Toast";
import type { Course } from "@/learning/recommend";
import { lessonsToKeep } from "@/learning/offline";
import { keepFiles, listenForInstall, registerServiceWorker } from "@/lib/pwa";
import { useProgress } from "@/lib/progress-store";
import { Bi } from "@/components/ui/Bi";
import { strings } from "@/lib/strings";

/** Behind every learning screen: registers the service worker, offers updates, and keeps this week's and next week's lessons for offline use. */
export function PwaShell({ course, written }: { course: Course; written: string[] }) {
  const progress = useProgress();
  const [apply, setApply] = useState<(() => void) | null>(null);

  useEffect(() => {
    listenForInstall();
    void registerServiceWorker((reload) => setApply(() => reload));
  }, []);

  const urls = useMemo(() => (progress ? lessonsToKeep(course, progress, written) : []), [course, progress, written]);
  const key = urls.join(" ");
  useEffect(() => {
    if (key) void keepFiles(key.split(" "));
  }, [key]);

  if (!apply) return null;
  return (
    <Toast className="fixed inset-x-0 bottom-24 z-30 px-4">
      <button type="button" onClick={apply} className="min-h-13 font-semibold underline-offset-2 outline-none hover:underline focus-visible:underline">
        <Bi label={strings.updatedReload} />
      </button>
    </Toast>
  );
}
