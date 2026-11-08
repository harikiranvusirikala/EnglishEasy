"use client";

import { Suspense, use, useState } from "react";
import Link from "next/link";
import type { Stage, Week } from "@/content/course";
import type { Course } from "@/learning/recommend";
import { offerableTracks, recommendedDay } from "@/learning/recommend";
import { currentStageIndex, dayNumber, locateDay } from "@/learning/home";
import { dayStats, stageStats, weekStats, type State } from "@/learning/stats";
import type { Progress } from "@/learning/progress";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Skeleton } from "@/components/ui/Skeleton";
import { badge } from "@/components/ui/badge";
import { focusRing } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { loadLesson } from "@/lib/lesson-data";
import { useProgress } from "@/lib/progress-store";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";

const SR: Record<State, BiLabel> = { complete: strings.stepDone, "in-progress": strings.stepCurrent, "not-started": strings.stepTodo };

/** A node on the path: ✓ complete, a ringed dot in progress, an empty ring not started, a faint dot not written yet. */
function Node({ state, soon, size = "md" }: { state: State; soon?: boolean; size?: "md" | "sm" }) {
  const box = size === "md" ? "size-10" : "size-8";
  const style = soon
    ? "bg-sunken ring-2 ring-inset ring-line"
    : state === "complete"
      ? "bg-good text-surface"
      : state === "in-progress"
        ? "bg-surface ring-[3px] ring-brand"
        : "bg-surface ring-2 ring-inset ring-line-strong";
  return (
    <>
      <span aria-hidden="true" className={`relative z-[1] flex shrink-0 items-center justify-center rounded-full ${box} ${style}`}>
        {!soon && state === "complete" && <Icon name="check" className={size === "md" ? "size-5" : "size-4"} strokeWidth={3} />}
        {!soon && state === "in-progress" && <span className="size-3 rounded-full bg-brand" />}
      </span>
      <span className="sr-only">{SR[state].en}. </span>
    </>
  );
}

const ROW = `relative flex min-h-16 w-full items-center gap-3 rounded-2xl px-2 py-2 text-left ${focusRing}`;

function Percent({ value }: { value: number }) {
  return <span className={badge(value === 100 ? "good" : value > 0 ? "brand" : "neutral")}>{fill(strings.journeyPercent, { n: value }).en}</span>;
}

function Soon() {
  return (
    <span className={badge("neutral")}>
      <Bi label={strings.journeyComingSoon} />
    </span>
  );
}

function LoadedDayPercent({ id, progress }: { id: string; progress: Progress }) {
  return <Percent value={dayStats(use(loadLesson(id)), progress).percent} />;
}

/** One day in an opened week: its title and %, a link to its overview. Days not written yet say "coming soon". */
function DayRow({ id, title, number, progress, written }: { id: string; title: BiLabel; number: number; progress: Progress; written: boolean }) {
  const done = id in progress.completed;
  const state: State = done ? "complete" : "not-started";
  const name = (
    <span className="flex min-w-0 flex-1 flex-col">
      <span className="text-sm text-ink-3">{fill(strings.homeDayChip, { n: number }).en}</span>
      <span className="text-base font-semibold text-ink">
        <BiText text={title} />
      </span>
    </span>
  );
  if (!written) {
    return (
      <li>
        <span className={`${ROW} opacity-70`}>
          <Node state={state} soon size="sm" />
          {name}
          <Soon />
        </span>
      </li>
    );
  }
  return (
    <li>
      <Link href={`/lessons/${encodeURIComponent(id)}`} className={`${ROW} hover:bg-sunken`}>
        <Node state={state} size="sm" />
        {name}
        {done ? (
          <Percent value={100} />
        ) : (
          <Suspense fallback={<Skeleton className="h-7 w-12" />}>
            <LoadedDayPercent id={id} progress={progress} />
          </Suspense>
        )}
        <Icon name="chevron" className="size-5 text-ink-3" />
      </Link>
    </li>
  );
}

function WeekRow({ week, progress, written, open, onToggle }: { week: Week; progress: Progress; written: string[]; open: boolean; onToggle: () => void }) {
  const title = (
    <span className="flex min-w-0 flex-1 flex-col">
      <span className="text-sm text-ink-3">{fill(strings.journeyWeek, { n: week.n }).en}</span>
      <span className="text-lg leading-snug font-semibold text-ink">
        <BiText text={week.title} />
      </span>
    </span>
  );
  if (!week.released) {
    return (
      <li className="relative">
        <span className={`${ROW} opacity-75`}>
          <Node state="not-started" soon />
          {title}
          <Soon />
        </span>
      </li>
    );
  }
  const stats = weekStats(week, progress);
  return (
    <li className="relative">
      <button type="button" aria-expanded={open} onClick={onToggle} className={`${ROW} hover:bg-sunken ${open ? "bg-sunken/60" : ""}`}>
        <Node state={stats.state} />
        {title}
        <Percent value={stats.percent} />
        <Icon name="chevronDown" className={`size-5 text-ink-3 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul aria-label={strings.journeyDays.en} className="mt-1 mb-2 ml-[1.15rem] flex animate-fade-in flex-col border-l-2 border-dashed border-line-strong pl-4 motion-reduce:animate-none">
          {week.days.map((ref, i) => (
            <DayRow key={ref.id} id={ref.id} title={ref.title} number={dayNumber(week, i)} progress={progress} written={written.includes(ref.id)} />
          ))}
        </ul>
      )}
    </li>
  );
}

/** The weeks of a stage or track, joined by a line down their circles. */
function WeekPath({ children }: { children: React.ReactNode }) {
  return (
    <ul className="relative mt-3 flex flex-col before:absolute before:top-6 before:bottom-6 before:left-[1.75rem] before:w-0.5 before:rounded-full before:bg-line">{children}</ul>
  );
}

function StageMedal({ n, state }: { n: number; state: State | "future" }) {
  const style =
    state === "complete"
      ? "bg-good text-surface"
      : state === "future"
        ? "bg-sunken text-ink-3 ring-2 ring-inset ring-line-strong"
        : "bg-[linear-gradient(135deg,#14b8a6,#0f766e)] text-white shadow-[0_8px_20px_-10px_#0f766e]";
  return (
    <span aria-hidden="true" className={`font-display flex size-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold ${style}`}>
      {state === "complete" ? <Icon name="check" className="size-7" strokeWidth={3} /> : n}
    </span>
  );
}

function StageHeader({ stage, progress }: { stage: Stage; progress: Progress }) {
  const stats = stageStats(stage, progress);
  return (
    <span className="flex w-full flex-col gap-3">
      <span className="flex items-center gap-4">
        <StageMedal n={stage.n} state={stats.state} />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="font-display text-xl leading-snug font-semibold text-ink">
            <BiText text={fill(strings.journeyStage, { n: stage.n, title: stage.title })} />
          </span>
          <span className="text-base text-ink-2">{fill(strings.journeyWeeks, { n: stage.weeks.length }).en}</span>
        </span>
        <Percent value={stats.percent} />
        <Icon name="chevronDown" className="size-5 text-ink-3 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
      </span>
      <ProgressBar label={fill(strings.journeyStage, { n: stage.n, title: stage.title }).en} value={stats.percent} max={100} size="sm" />
    </span>
  );
}

function JourneyBody({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const current = currentStageIndex(course, progress);
  const target = recommendedDay(course, progress);
  const [openWeek, setOpenWeek] = useState<number | null>(() => (target ? (locateDay(course, target.dayId)?.week.n ?? null) : null));
  return (
    <div className="flex flex-col gap-4">
      {course.stages.map((stage, i) => {
        const name = fill(strings.journeyStage, { n: stage.n, title: stage.title });
        if (i > current) {
          // Future stages are one card each: name, the "can do" line, week count.
          return (
            <section key={stage.n} aria-label={name.en} className={`${card} flex gap-4`}>
              <StageMedal n={stage.n} state="future" />
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <h2 className="font-display text-xl leading-snug font-semibold text-ink">
                  <BiText text={name} />
                </h2>
                <p className="text-base text-ink-2">
                  <BiText text={stage.canDo} />
                </p>
                <p className="flex flex-wrap gap-2">
                  <span className={badge("neutral")}>{fill(strings.journeyWeeks, { n: stage.weeks.length }).en}</span>
                  <span className={badge("neutral")}>
                    <Icon name="lock" className="size-4" />
                    <Bi label={strings.journeyComingLater} />
                  </span>
                </p>
              </div>
            </section>
          );
        }
        return (
          <details key={stage.n} open={i === current} className={`${card} group p-4`}>
            <summary className={`cursor-pointer list-none rounded-2xl p-1 [&::-webkit-details-marker]:hidden ${focusRing}`}>
              <StageHeader stage={stage} progress={progress} />
            </summary>
            <WeekPath>
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
            </WeekPath>
          </details>
        );
      })}
    </div>
  );
}

/** "My tracks": each chosen track that has released lessons, with its weeks. Hidden when none. */
function TracksSection({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const [openWeek, setOpenWeek] = useState<string | null>(null);
  const chosen = offerableTracks(course).filter((t) => progress.tracks.includes(t.id));
  if (chosen.length === 0) return null;
  return (
    <section aria-label={strings.myTracks.en} className="flex flex-col gap-3">
      <h2 className="font-display text-2xl font-bold text-ink">
        <Bi label={strings.myTracks} className="items-start" />
      </h2>
      {chosen.map((track) => (
        <details key={track.id} open className={`${card} group p-4`}>
          <summary className={`flex cursor-pointer list-none items-center gap-4 rounded-2xl p-1 [&::-webkit-details-marker]:hidden ${focusRing}`}>
            <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
              <Icon name="route" className="size-7" />
            </span>
            <span className="font-display flex-1 text-xl font-semibold text-ink">
              <BiText text={track.title} />
            </span>
            <Icon name="chevronDown" className="size-5 text-ink-3 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <WeekPath>
            {track.weeks.map((week) => {
              const key = `${track.id}-${week.n}`;
              return <WeekRow key={key} week={week} progress={progress} written={written} open={openWeek === key} onToggle={() => setOpenWeek(openWeek === key ? null : key)} />;
            })}
          </WeekPath>
        </details>
      ))}
    </section>
  );
}

/** Journey (VISION §10.3): stages, weeks with status and %, a week opens its days. */
export function Journey({ course, written }: { course: Course; written: string[] }) {
  const progress = useProgress();
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 pt-6 pb-6 md:px-6 md:pt-8">
      <PageHeader title={<Bi label={strings.journeyTitle} className="items-start" />}>
        <BiText text={strings.journeyIntro} />
      </PageHeader>
      {progress ? (
        <>
          <JourneyBody course={course} progress={progress} written={written} />
          <TracksSection course={course} progress={progress} written={written} />
        </>
      ) : (
        <div aria-busy="true" className="flex flex-col gap-4">
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      )}
    </main>
  );
}
