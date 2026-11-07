"use client";

import { Suspense, use } from "react";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Skeleton } from "@/components/ui/Skeleton";
import { StepList, type StepState } from "@/components/ui/StepList";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { SECTION_NAME } from "@/components/player/sections";
import type { Bi as ContentBi, PlayableDay } from "@/content/types";
import { dayStats } from "@/learning/stats";
import type { Progress } from "@/learning/progress";
import { loadLesson } from "@/lib/lesson-data";
import { useProgress } from "@/lib/progress-store";
import { fill, strings } from "@/lib/strings";
import { ShareLesson } from "./ShareLesson";

const STEP_STATE = { complete: "done", "in-progress": "current", "not-started": "todo" } as const satisfies Record<string, StepState>;

function Skeletons() {
  return (
    <div className="flex flex-col gap-3" aria-busy="true">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-14 w-full" />
    </div>
  );
}

function Loaded({ id, progress }: { id: string; progress: Progress }) {
  const day: PlayableDay = use(loadLesson(id));
  const stats = dayStats(day, progress);
  const left = stats.total - stats.done;
  const action = stats.state === "complete" ? strings.reviewLesson : stats.state === "in-progress" ? strings.continueLesson : strings.startLesson;
  return (
    <>
      <section aria-label={strings.overviewProgress.en} className={`${card} flex flex-col gap-3`}>
        <p className="text-2xl font-bold tabular-nums">
          <BiText text={fill(strings.overviewPercent, { n: stats.percent })} />
        </p>
        <ProgressBar label={strings.progressLabel.en} value={stats.done} max={stats.total} />
        <p className="text-base text-stone-600 dark:text-stone-400">
          <BiText text={fill(strings.overviewCount, { done: stats.done, total: stats.total, left })} />
        </p>
        <StepList steps={stats.sections.map((s) => ({ id: s.kind, label: SECTION_NAME[s.kind], state: STEP_STATE[s.state] }))} />
      </section>
      <Link href={`/learn/play?l=${encodeURIComponent(id)}`} className={`${button("primary", "lg")} w-full`}>
        <Bi label={action} />
      </Link>
    </>
  );
}

/** The lesson overview's client part: progress, section checklist, Start / Continue / Review and Share. Drawn after hydration. */
export function OverviewProgress({ id, title }: { id: string; title: ContentBi }) {
  const progress = useProgress();
  return (
    <div className="flex flex-col gap-3">
      {progress ? (
        <Suspense fallback={<Skeletons />}>
          <Loaded id={id} progress={progress} />
        </Suspense>
      ) : (
        <Skeletons />
      )}
      <ShareLesson id={id} title={title} />
    </div>
  );
}
