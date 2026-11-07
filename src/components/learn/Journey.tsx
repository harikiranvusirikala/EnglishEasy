"use client";

import { Suspense, use, useState } from "react";
import Link from "next/link";
import type { Stage, Week } from "@/content/course";
import type { Course } from "@/learning/recommend";
import { recommendedDay } from "@/learning/recommend";
import { currentStageIndex, dayNumber, locateDay } from "@/learning/home";
import { dayStats, stageStats, weekStats, type State } from "@/learning/stats";
import type { Progress } from "@/learning/progress";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Skeleton } from "@/components/ui/Skeleton";
import { card, cardText } from "@/components/ui/card";
import { loadLesson } from "@/lib/lesson-data";
import { useProgress } from "@/lib/progress-store";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";

const MARK: Record<State, { glyph: string; sr: BiLabel; style: string }> = {
  complete: { glyph: "✓", sr: strings.stepDone, style: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200" },
  "in-progress": { glyph: "●", sr: strings.stepCurrent, style: "bg-teal-700 text-white dark:bg-teal-400 dark:text-stone-950" },
  "not-started": { glyph: "○", sr: strings.stepTodo, style: "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300" },
};

function Mark({ state }: { state: State }) {
  const mark = MARK[state];
  return (
    <>
      <span aria-hidden="true" className={`flex size-9 shrink-0 items-center justify-center rounded-full text-base font-bold ${mark.style}`}>
        {mark.glyph}
      </span>
      <span className="sr-only">{mark.sr.en}. </span>
    </>
  );
}

const ROW = "flex min-h-13 w-full items-center gap-3 rounded-xl px-2 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-teal-300";
const muted = "text-sm text-stone-600 dark:text-stone-400";

function Percent({ value }: { value: number }) {
  return <span className="text-base font-semibold tabular-nums text-stone-800 dark:text-stone-200">{fill(strings.journeyPercent, { n: value }).en}</span>;
}

function LoadedDayPercent({ id, progress }: { id: string; progress: Progress }) {
  return <Percent value={dayStats(use(loadLesson(id)), progress).percent} />;
}

/** One day in an opened week: its title and %, a link to its overview. Days not written yet say "coming soon". */
function DayRow({ id, title, number, progress, written }: { id: string; title: BiLabel; number: number; progress: Progress; written: boolean }) {
  const done = id in progress.completed;
  const state: State = done ? "complete" : "not-started";
  const name = (
    <span className="flex-1">
      <span className={muted}>{fill(strings.homeDayChip, { n: number }).en}</span>
      <span className="block text-base font-semibold text-stone-900 dark:text-stone-100">
        <BiText text={title} />
      </span>
    </span>
  );
  if (!written) {
    return (
      <li>
        <span className={`${ROW} opacity-70`}>
          <Mark state={state} />
          {name}
          <span className={muted}>
            <Bi label={strings.journeyComingSoon} />
          </span>
        </span>
      </li>
    );
  }
  return (
    <li>
      <Link href={`/lessons/${encodeURIComponent(id)}`} className={`${ROW} hover:bg-stone-100 dark:hover:bg-stone-800`}>
        <Mark state={state} />
        {name}
        {done ? (
          <Percent value={100} />
        ) : (
          <Suspense fallback={<Skeleton className="h-6 w-10" />}>
            <LoadedDayPercent id={id} progress={progress} />
          </Suspense>
        )}
      </Link>
    </li>
  );
}

function WeekRow({ week, progress, written, open, onToggle }: { week: Week; progress: Progress; written: string[]; open: boolean; onToggle: () => void }) {
  const title = (
    <span className="flex-1">
      <span className={muted}>{fill(strings.journeyWeek, { n: week.n }).en}</span>
      <span className="block text-base font-semibold text-stone-900 dark:text-stone-100">
        <BiText text={week.title} />
      </span>
    </span>
  );
  if (!week.released) {
    return (
      <li>
        <span className={`${ROW} opacity-70`}>
          <Mark state="not-started" />
          {title}
          <span className={muted}>
            <Bi label={strings.journeyComingSoon} />
          </span>
        </span>
      </li>
    );
  }
  const stats = weekStats(week, progress);
  return (
    <li>
      <button type="button" aria-expanded={open} onClick={onToggle} className={`${ROW} hover:bg-stone-100 dark:hover:bg-stone-800`}>
        <Mark state={stats.state} />
        {title}
        <Percent value={stats.percent} />
      </button>
      {open && (
        <ul aria-label={strings.journeyDays.en} className="ml-4 border-l border-stone-200 pl-2 dark:border-stone-800">
          {week.days.map((ref, i) => (
            <DayRow key={ref.id} id={ref.id} title={ref.title} number={dayNumber(week, i)} progress={progress} written={written.includes(ref.id)} />
          ))}
        </ul>
      )}
    </li>
  );
}

function StageHeader({ stage, progress }: { stage: Stage; progress: Progress }) {
  const stats = stageStats(stage, progress);
  return (
    <>
      <Mark state={stats.state} />
      <span className="flex-1">
        <span className="block text-lg font-semibold text-stone-900 dark:text-stone-100">
          <BiText text={fill(strings.journeyStage, { n: stage.n, title: stage.title })} />
        </span>
        <span className={muted}>{fill(strings.journeyWeeks, { n: stage.weeks.length }).en}</span>
      </span>
      <Percent value={stats.percent} />
    </>
  );
}

function JourneyBody({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const current = currentStageIndex(course, progress);
  const target = recommendedDay(course, progress);
  const [openWeek, setOpenWeek] = useState<number | null>(() => (target ? (locateDay(course, target.dayId)?.week.n ?? null) : null));
  return (
    <div className="flex flex-col gap-3">
      {course.stages.map((stage, i) => {
        if (i > current) {
          // Future stages are one card each: name, the "can do" line, week count.
          return (
            <section key={stage.n} aria-label={fill(strings.journeyStage, { n: stage.n, title: stage.title }).en} className={`${card} flex flex-col gap-2`}>
              <div className="flex items-center gap-3">
                <Mark state="not-started" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                    <BiText text={fill(strings.journeyStage, { n: stage.n, title: stage.title })} />
                  </h2>
                  <p className={muted}>
                    {fill(strings.journeyWeeks, { n: stage.weeks.length }).en} · <Bi label={strings.journeyComingLater} className="inline" />
                  </p>
                </div>
              </div>
              <p className={cardText}>
                <BiText text={stage.canDo} />
              </p>
            </section>
          );
        }
        return (
          <details key={stage.n} open={i === current} className={`${card} p-2`}>
            <summary className={`${ROW} cursor-pointer list-none`}>
              <StageHeader stage={stage} progress={progress} />
            </summary>
            <ul className="mt-1 flex flex-col">
              {stage.weeks.map((week) => (
                <WeekRow
                  key={week.n}
                  week={week}
                  progress={progress}
                  written={written}
                  open={openWeek === week.n}
                  onToggle={() => setOpenWeek(openWeek === week.n ? null : week.n)}
                />
              ))}
            </ul>
          </details>
        );
      })}
    </div>
  );
}

/** Journey (VISION §10.3): stages, weeks with status and %, a week opens its days. */
export function Journey({ course, written }: { course: Course; written: string[] }) {
  const progress = useProgress();
  return (
    <main className="flex flex-col gap-4 p-4 pt-6">
      <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
        <Bi label={strings.journeyTitle} className="items-start" />
      </h1>
      {progress ? (
        <JourneyBody course={course} progress={progress} written={written} />
      ) : (
        <div aria-busy="true" className="flex flex-col gap-3">
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      )}
    </main>
  );
}
