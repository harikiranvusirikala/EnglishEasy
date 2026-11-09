"use client";

import { Suspense, use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Stage, Week } from "@/content/course";
import type { Course } from "@/learning/recommend";
import { offerableTracks, recommendedDay } from "@/learning/recommend";
import { currentStageIndex, dayNumber, locateDay } from "@/learning/home";
import { dayStarted, dayStats, stageStats, weekStats, type State } from "@/learning/stats";
import type { Progress } from "@/learning/progress";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Skeleton } from "@/components/ui/Skeleton";
import { badge } from "@/components/ui/badge";
import { button, focusRing } from "@/components/ui/button";
import { card, cardPath } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { loadLesson } from "@/lib/lesson-data";
import { useProgress } from "@/lib/progress-store";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";

const SR: Record<State, BiLabel> = { complete: strings.stepDone, "in-progress": strings.stepCurrent, "not-started": strings.stepTodo };

/**
 * A week or day on the path: a tick when complete; otherwise its number in a circle, with an arc for the part done
 * (in progress) or faint (not written yet). Sized in rem, so it grows with the text size.
 */
function Node({ n, state, percent = 0, soon, size = "md" }: { n: number; state: State; percent?: number; soon?: boolean; size?: "md" | "sm" }) {
  // A week is a big filled station; a day a small stop on the line (owner, 2026-11-09).
  const week = size === "md";
  const box = week ? "size-12 text-lg" : "size-7 text-xs";
  const ring = week ? "ring-2" : "ring-[1.5px]";
  const style = soon
    ? `bg-sunken text-ink-3 ${ring} ring-inset ring-line`
    : state === "complete"
      ? "bg-good text-surface"
      : state === "in-progress"
        ? `${week ? "bg-sunken" : "bg-surface"} text-brand-ink ring-[3px] ring-inset ring-brand/20`
        : `${week ? "bg-sunken" : "bg-surface"} text-ink-2 ${ring} ring-inset ring-line-strong`;
  return (
    <>
      <span aria-hidden="true" className={`relative z-[1] flex shrink-0 items-center justify-center rounded-full font-bold tabular-nums ${box} ${style}`}>
        {!soon && state === "in-progress" && (
          <svg viewBox="0 0 36 36" className="absolute inset-0 size-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="16.5"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100 - Math.max(percent, 8)}
              className="transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none"
            />
          </svg>
        )}
        {!soon && state === "complete" ? <Icon name="check" className={week ? "size-5" : "size-3.5"} strokeWidth={3} /> : n}
      </span>
      <span className="sr-only">{SR[state].en}. </span>
    </>
  );
}

// Rows line their circles up on one path line (WeekPath): a week's circle (3rem) sits 0.5rem in, a day's
// (1.75rem) 1.125rem in, so both centres are 2rem from the left.
const ROW = `relative flex min-h-16 w-full items-center gap-3 rounded-2xl px-2 py-2 text-left ${focusRing}`;
const DAY_ROW = `relative flex min-h-16 w-full items-center gap-3 rounded-2xl py-2 pr-2 pl-[1.125rem] text-left ${focusRing}`;

/** A name with a small line under it ("Day 2 · 41% done"), so the name gets the row's whole width. */
function RowText({ title, caption, status, statusTone = "text-ink-3", big }: { title: string; caption: string; status?: string; statusTone?: string; big?: boolean }) {
  return (
    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
      <span className={`leading-snug font-semibold text-ink ${big ? "text-lg" : "text-base"}`}>{title}</span>
      <span className="text-sm text-ink-3">
        {caption}
        {status && (
          <>
            <span aria-hidden="true"> ·</span> <span className={statusTone}>{status}</span>
          </>
        )}
      </span>
    </span>
  );
}

type DayView = { id: string; title: BiLabel; number: number; state: State; percent?: number; next: boolean };

function DayLink({ day }: { day: DayView }) {
  const { state, percent } = day;
  const status =
    state === "complete"
      ? strings.stepDone.en
      : state === "in-progress"
        ? !percent
          ? strings.stepCurrent.en
          : fill(strings.journeyPercentDone, { n: percent }).en
        : day.next
          ? strings.homeUpNext.en
          : undefined;
  const tone = state === "complete" ? "font-semibold text-good" : "font-semibold text-brand-ink";
  return (
    <Link href={`/lessons/${encodeURIComponent(day.id)}`} className={`${DAY_ROW} ${day.next ? "hover:bg-brand-soft-hover" : "hover:bg-sunken"}`}>
      <Node n={day.number} state={state} percent={percent} size="sm" />
      <RowText title={day.title.en} caption={fill(strings.homeDayChip, { n: day.number }).en} status={status} statusTone={tone} />
      <Icon name="chevron" className="size-5 shrink-0 text-ink-3" />
    </Link>
  );
}

/** The next lesson stands out on the path: tinted, with its own Start / Continue button straight into the lesson (full width on phones, so it stays one line at A++). */
function DayBody({ day }: { day: DayView }) {
  if (!day.next) return <DayLink day={day} />;
  const action = day.state === "in-progress" ? strings.homeContinueLesson : fill(strings.homeStartDay, { n: day.number });
  return (
    <div className="my-1 rounded-2xl bg-brand-soft ring-1 ring-brand/25 ring-inset">
      <DayLink day={day} />
      <div className="px-3 pb-3 sm:pl-[3.625rem]">
        <Link href={`/learn/play?l=${encodeURIComponent(day.id)}`} className={`${button("primary", "md")} w-full`}>
          <Icon name="play" className="size-5" />
          {action.en}
        </Link>
      </div>
    </div>
  );
}

function LoadedDay({ day, progress }: { day: DayView; progress: Progress }) {
  return <DayBody day={{ ...day, percent: dayStats(use(loadLesson(day.id)), progress).percent }} />;
}

/**
 * One day in an opened week, a link to its overview. A started day loads its lesson for the % (a day not started
 * loads nothing); days not written yet say "coming soon". `scrollTo` brings it into view once, if it is off screen.
 */
function DayRow({ id, title, number, progress, written, next, scrollTo }: { id: string; title: BiLabel; number: number; progress: Progress; written: boolean; next: boolean; scrollTo: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!scrollTo || !el) return;
    const box = el.getBoundingClientRect();
    if (box.top < 0 || box.bottom > window.innerHeight) el.scrollIntoView?.({ block: "center" });
  }, [scrollTo]);
  const done = id in progress.completed;
  const started = !done && dayStarted(id, progress);
  const state: State = done ? "complete" : started ? "in-progress" : "not-started";
  if (!written) {
    return (
      <li ref={ref}>
        <span className={`${DAY_ROW} opacity-75`}>
          <Node n={number} state={state} soon size="sm" />
          <RowText title={title.en} caption={fill(strings.homeDayChip, { n: number }).en} status={strings.journeyComingSoon.en} />
        </span>
      </li>
    );
  }
  const day: DayView = { id, title, number, state, percent: done ? 100 : undefined, next: next && !done };
  return (
    <li ref={ref}>
      {started ? (
        <Suspense fallback={<DayBody day={day} />}>
          <LoadedDay day={day} progress={progress} />
        </Suspense>
      ) : (
        <DayBody day={day} />
      )}
    </li>
  );
}

function WeekRow({ week, progress, written, open, onToggle, nextDay, scrollDay }: { week: Week; progress: Progress; written: string[]; open: boolean; onToggle: () => void; nextDay: string | null; scrollDay: string | null }) {
  const caption = fill(strings.journeyWeek, { n: week.n }).en;
  if (!week.released) {
    return (
      <li className="relative">
        <span className={`${ROW} opacity-75`}>
          <Node n={week.n} state="not-started" soon />
          <RowText title={week.title.en} caption={caption} status={strings.journeyComingSoon.en} big />
        </span>
      </li>
    );
  }
  const stats = weekStats(week, progress);
  return (
    <li className="relative">
      <button type="button" aria-expanded={open} onClick={onToggle} className={`${ROW} hover:bg-sunken`}>
        <Node n={week.n} state={stats.state} percent={stats.percent} />
        <RowText
          title={week.title.en}
          caption={caption}
          status={fill(strings.journeyDaysDone, { done: stats.done, total: stats.total }).en}
          statusTone={stats.state === "complete" ? "font-semibold text-good" : undefined}
          big
        />
        <Icon name="chevronDown" className={`size-5 shrink-0 text-ink-3 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul aria-label={strings.journeyDays.en} className="mt-1 mb-3 flex animate-fade-in flex-col gap-0.5 rounded-2xl bg-sunken/70 py-1.5 motion-reduce:animate-none">
          {week.days.map((ref, i) => (
            <DayRow
              key={ref.id}
              id={ref.id}
              title={ref.title}
              number={dayNumber(week, i)}
              progress={progress}
              written={written.includes(ref.id)}
              next={ref.id === nextDay}
              scrollTo={ref.id === scrollDay}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/** The weeks of a stage or track, and an opened week's days, joined by one line through their circles. */
function WeekPath({ children }: { children: React.ReactNode }) {
  return (
    <ul className="relative mt-3 flex flex-col gap-0.5 before:absolute before:top-8 before:bottom-8 before:left-[calc(2rem-1px)] before:w-0.5 before:rounded-full before:bg-line">
      {children}
    </ul>
  );
}

/** The day a lesson page's Journey link names (`?day=`): its week opens and it scrolls into view. Read in the browser only (the bodies render once progress has loaded). */
function linkedDay(): string | null {
  return new URLSearchParams(window.location.search).get("day");
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
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="sr-only">
            {(fill(strings.journeyStage, { n: stage.n, title: stage.title })).en}
          </span>
          <span className="text-sm text-ink-3">
            <span aria-hidden="true" className="font-semibold text-brand">
              {fill(strings.landingStageLabel, { n: stage.n }).en}
            </span>
            <span aria-hidden="true"> ·</span> {fill(strings.journeyWeeks, { n: stage.weeks.length }).en}
          </span>
          <span aria-hidden="true" className="font-display text-xl leading-snug font-semibold text-ink">
            {stage.title.en}
          </span>
        </span>
        <Icon name="chevronDown" className="size-5 shrink-0 text-ink-3 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
      </span>
      {/* One bar with its % beside it (no second % badge). */}
      <span className="flex items-center gap-3">
        <ProgressBar label={fill(strings.journeyStage, { n: stage.n, title: stage.title }).en} value={stats.percent} max={100} size="sm" className="flex-1" />
        <span className={`text-sm font-semibold tabular-nums ${stats.percent === 100 ? "text-good" : "text-ink-2"}`}>{fill(strings.journeyPercent, { n: stats.percent }).en}</span>
      </span>
    </span>
  );
}

function JourneyBody({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const current = currentStageIndex(course, progress);
  const target = recommendedDay(course, progress);
  const nextDay = target && !(target.dayId in progress.completed) ? target.dayId : null;
  const [linked] = useState(linkedDay);
  const linkedPlace = linked ? locateDay(course, linked) : null;
  // The linked day's week opens (and its stage, even a finished one); otherwise the week of the next lesson.
  const [openWeek, setOpenWeek] = useState<number | null>(() =>
    linkedPlace?.stage ? linkedPlace.week.n : target ? (locateDay(course, target.dayId)?.week.n ?? null) : null,
  );
  return (
    <div className="flex flex-col gap-4">
      {course.stages.map((stage, i) => {
        const name = fill(strings.journeyStage, { n: stage.n, title: stage.title });
        if (i > current) {
          // Future stages are one card each: name, then the "can do" line (full width) and week count.
          return (
            <section key={stage.n} aria-label={name.en} className={`${card} flex flex-col gap-3`}>
              <div className="flex items-center gap-4">
                <StageMedal n={stage.n} state="future" />
                <h2 className="flex min-w-0 flex-1 flex-col">
                  <span className="sr-only">
                    {name.en}
                  </span>
                  <span aria-hidden="true" className="text-sm font-semibold text-ink-3">
                    {(fill(strings.landingStageLabel, { n: stage.n })).en}
                  </span>
                  <span aria-hidden="true" className="font-display text-xl leading-snug font-semibold text-ink">
                    {stage.title.en}
                  </span>
                </h2>
              </div>
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
            </section>
          );
        }
        return (
          <details key={stage.n} open={i === current || stage.n === linkedPlace?.stage?.n} className={`${cardPath} group`}>
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
                  nextDay={nextDay}
                  scrollDay={linked ?? nextDay}
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
  const [linked] = useState(linkedDay);
  const [openWeek, setOpenWeek] = useState<string | null>(() => {
    const place = linked ? locateDay(course, linked) : null;
    const track = place && !place.stage ? course.tracks.find((t) => t.weeks.includes(place.week)) : undefined;
    return track && place ? `${track.id}-${place.week.n}` : null;
  });
  const chosen = offerableTracks(course).filter((t) => progress.tracks.includes(t.id));
  if (chosen.length === 0) return null;
  return (
    <section aria-label={strings.myTracks.en} className="flex flex-col gap-3">
      <h2 className="font-display text-2xl font-bold text-ink">
        <Bi label={strings.myTracks} className="items-start" />
      </h2>
      {chosen.map((track) => (
        <details key={track.id} open className={`${cardPath} group`}>
          <summary className={`flex cursor-pointer list-none items-center gap-4 rounded-2xl p-1 [&::-webkit-details-marker]:hidden ${focusRing}`}>
            <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
              <Icon name="route" className="size-7" />
            </span>
            <span className="font-display flex-1 text-xl font-semibold text-ink">
              {track.title.en}
            </span>
            <Icon name="chevronDown" className="size-5 text-ink-3 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <WeekPath>
            {track.weeks.map((week) => {
              const key = `${track.id}-${week.n}`;
              return (
                <WeekRow
                  key={key}
                  week={week}
                  progress={progress}
                  written={written}
                  open={openWeek === key}
                  onToggle={() => setOpenWeek(openWeek === key ? null : key)}
                  nextDay={null}
                  scrollDay={linked}
                />
              );
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
