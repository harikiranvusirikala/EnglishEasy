"use client";

import { Suspense, use } from "react";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { Skeleton } from "@/components/ui/Skeleton";
import { StepList, type StepState } from "@/components/ui/StepList";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
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
      <Skeleton className="h-72 w-full" />
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
      <section aria-label={strings.overviewProgress.en} className={`${card} flex flex-col gap-5`}>
        <div className="flex items-center gap-4">
          <ProgressRing label={strings.progressLabel.en} value={stats.done} max={stats.total} size={76} stroke={7} tone={stats.state === "complete" ? "good" : "brand"}>
            <span className="font-display text-lg font-bold text-ink tabular-nums">{stats.percent}%</span>
          </ProgressRing>
          <div className="flex flex-col">
            <p className="font-display text-2xl font-bold text-ink tabular-nums">{fill(strings.overviewPercent, { n: stats.percent }).en}</p>
            <p className="text-base text-ink-2">{fill(strings.overviewCount, { done: stats.done, total: stats.total, left }).en}</p>
          </div>
        </div>
        <StepList steps={stats.sections.map((s) => ({ id: s.kind, label: SECTION_NAME[s.kind], state: STEP_STATE[s.state] }))} />
      </section>
      <Link href={`/learn/play?l=${encodeURIComponent(id)}`} className={`${button("primary", "lg")} w-full`}>
        <Icon name={stats.state === "complete" ? "retry" : "play"} />
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
