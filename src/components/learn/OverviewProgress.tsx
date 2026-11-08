"use client";

import { Suspense, use } from "react";
import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { Skeleton } from "@/components/ui/Skeleton";
import { button } from "@/components/ui/button";
import { cardSnug } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { SECTION_ICON, SECTION_NAME } from "@/components/player/sections";
import type { Bi as ContentBi, PlayableDay } from "@/content/types";
import { dayStats, nextActivity } from "@/learning/stats";
import type { Progress } from "@/learning/progress";
import { loadLesson } from "@/lib/lesson-data";
import { useProgress } from "@/lib/progress-store";
import { fill, strings } from "@/lib/strings";
import { ShareLesson } from "./ShareLesson";

const SR = { complete: strings.stepDone, "in-progress": strings.stepCurrent, "not-started": strings.stepTodo } as const;

function Skeletons() {
  return <Skeleton aria-busy="true" className="h-48 w-full" />;
}

/**
 * One compact card (owner, 2026-11-08: less scrolling to the lesson itself): "37% done" with the count beside it,
 * a slim bar split into the lesson's parts (each as wide as its activities, filled by what is done), the part
 * Continue goes to, and Start / Continue / Review with a square Share beside it.
 */
function Loaded({ id, title, progress }: { id: string; title: ContentBi; progress: Progress }) {
  const day: PlayableDay = use(loadLesson(id));
  const stats = dayStats(day, progress);
  const left = stats.total - stats.done;
  const complete = stats.state === "complete";
  const action = complete ? strings.reviewLesson : stats.state === "in-progress" ? strings.continueLesson : strings.startLesson;
  const nextId = complete ? null : nextActivity(day, progress);
  const nextIndex = nextId ? day.sections.findIndex((s) => s.activities.some((a) => a.id === nextId)) : -1;
  const next = nextIndex >= 0 ? stats.sections[nextIndex] : null;
  return (
    <section aria-label={strings.overviewProgress.en} className={`${cardSnug} flex flex-col gap-3`}>
      <p className="flex flex-wrap items-baseline justify-between gap-x-3">
        <span className="font-display text-2xl font-bold text-ink tabular-nums">{fill(strings.overviewPercent, { n: stats.percent }).en}</span>
        <span className="text-sm text-ink-3 tabular-nums">{fill(strings.overviewShortCount, { done: stats.done, total: stats.total, left }).en}</span>
      </p>
      <div role="progressbar" aria-label={strings.progressLabel.en} aria-valuemin={0} aria-valuemax={stats.total} aria-valuenow={stats.done} className="flex gap-1.5">
        {stats.sections.map((part, i) => (
          <span key={part.kind} className={`h-2.5 overflow-hidden rounded-full bg-sunken ${i === nextIndex ? "ring-2 ring-brand/30" : ""}`} style={{ flexGrow: Math.max(part.total, 1), flexBasis: 0 }}>
            <span
              className={`block h-full rounded-full transition-[width] duration-500 ease-out motion-reduce:transition-none ${complete ? "bg-good" : "bg-[linear-gradient(90deg,var(--brand),color-mix(in_srgb,var(--brand)_75%,var(--accent)))]"}`}
              style={{ width: `${part.total > 0 ? (part.done / part.total) * 100 : 0}%` }}
            />
          </span>
        ))}
      </div>
      <ol aria-label={strings.overviewParts.en} className="sr-only">
        {stats.sections.map((part) => (
          <li key={part.kind}>
            {SECTION_NAME[part.kind].en}: {SR[part.state].en}
          </li>
        ))}
      </ol>
      <p className="flex items-center gap-2 text-base">
        {next ? (
          <>
            <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
              <Icon name={SECTION_ICON[next.kind]} className="size-4" />
            </span>
            <span className="min-w-0 flex-1 font-semibold text-ink">{fill(strings.overviewNext, { part: SECTION_NAME[next.kind] }).en}</span>
            <span className="text-sm text-ink-3 tabular-nums">{fill(strings.overviewPartCount, { done: next.done, total: next.total }).en}</span>
          </>
        ) : (
          <>
            <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-good text-surface">
              <Icon name="check" className="size-4" strokeWidth={3} />
            </span>
            <span className="font-semibold text-good">{strings.overviewAllDone.en}</span>
          </>
        )}
      </p>
      <div className="flex gap-2">
        <Link href={`/learn/play?l=${encodeURIComponent(id)}`} className={`${button("primary", "md")} flex-1`}>
          <Icon name={complete ? "retry" : "play"} className="size-5" />
          <Bi label={action} />
        </Link>
        <ShareLesson id={id} title={title} iconOnly />
      </div>
    </section>
  );
}

/** The lesson overview's client part: progress by part, Start / Continue / Review and Share. Drawn after hydration. */
export function OverviewProgress({ id, title }: { id: string; title: ContentBi }) {
  const progress = useProgress();
  return (
    <>
      {progress ? (
        <Suspense fallback={<Skeletons />}>
          <Loaded id={id} title={title} progress={progress} />
        </Suspense>
      ) : (
        <Skeletons />
      )}
    </>
  );
}
