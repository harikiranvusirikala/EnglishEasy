"use client";

import { Suspense, use } from "react";
import Link from "next/link";
import type { Course } from "@/learning/recommend";
import { recommendedDay } from "@/learning/recommend";
import { dayStats } from "@/learning/stats";
import { firstName, greetWithName } from "@/learning/account";
import { useAccount } from "@/lib/account";
import { isFirstVisit, locateDay, practisedThisWeek, timeOfDay, weekStrip, type DayPlace } from "@/learning/home";
import type { Progress } from "@/learning/progress";
import { dueKeys } from "@/learning/review";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Logo } from "@/components/ui/Logo";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { Skeleton } from "@/components/ui/Skeleton";
import { badge } from "@/components/ui/badge";
import { button, focusRing } from "@/components/ui/button";
import { brandCard, card, cardFlush, sectionTitle } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icons";
import { useClock } from "@/lib/clock";
import { loadLesson } from "@/lib/lesson-data";
import { useProgress } from "@/lib/progress-store";
import { useSettings } from "@/lib/settings-store";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";
import { InstallCard } from "./InstallCard";
import { ReminderCard } from "./Reminder";
import { SaveProgressCard } from "./SaveProgressCard";
import { Onboarding } from "./Onboarding";
import { TrackOfferCard, TrackSuggestionCard } from "./Tracks";

const GREETING = { morning: strings.greetMorning, afternoon: strings.greetAfternoon, evening: strings.greetEvening };

/** The day's progress and button once its content is known. */
function LoadedToday({ place, progress, first }: { place: DayPlace; progress: Progress; first: boolean }) {
  const day = use(loadLesson(place.ref.id));
  const stats = dayStats(day, progress);
  const left = stats.total - stats.done;
  const action = stats.state === "complete" ? strings.homeReviewLesson : stats.state === "in-progress" ? strings.homeContinueLesson : first ? fill(strings.homeStartDay, { n: place.number }) : strings.homeStartLesson;
  return (
    <>
      <div className="flex items-center gap-4">
        <ProgressRing label={strings.progressLabel.en} value={stats.done} max={stats.total} size={64} stroke={6} tone="onBrand">
          <span className="font-display text-base font-bold tabular-nums">{stats.percent}%</span>
        </ProgressRing>
        <p className="text-base text-white/90">
          {(fill(strings.overviewCount, { done: stats.done, total: stats.total, left })).en}
        </p>
      </div>
      <Link href={`/learn/play?l=${encodeURIComponent(place.ref.id)}`} className={`${button("onBrand", "lg")} w-full`}>
        <Icon name={stats.state === "complete" ? "retry" : "play"} className="size-6" />
        <Bi label={action} />
      </Link>
    </>
  );
}

function TodayCard({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const target = recommendedDay(course, progress);
  const place = target ? locateDay(course, target.dayId) : null;
  if (!target || !place) {
    return (
      <section className={`${card} text-base text-ink-2`}>
        <BiText text={strings.homeAllDone} />
      </section>
    );
  }
  const first = isFirstVisit(progress);
  const label = first ? strings.homeFirstTitle : target.reason === "resume" || Object.keys(progress.completed).length > 0 ? strings.homeWelcomeBack : strings.homeToday;
  const ready = written.includes(place.ref.id);
  return (
    <section aria-label={label.en} className={`${brandCard} flex flex-col gap-5 p-6`}>
      <div className="relative flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className={badge("onBrand")}>
            {(fill(strings.homeWeekDay, { week: place.week.n, n: place.number })).en}
          </span>
        </div>
        <p className="mt-1 text-base font-semibold text-[#fde68a]">
          {label.en}
        </p>
        <h2 className="font-display text-[2rem] leading-[1.15] font-bold">
          {place.ref.title.en}
        </h2>
      </div>
      <div className="relative flex flex-col gap-4">
        {ready ? (
          <Suspense fallback={<Skeleton tone="onBrand" className="h-36 w-full" />}>
            <LoadedToday place={place} progress={progress} first={first} />
          </Suspense>
        ) : (
          <p className="text-base text-white/85">
            <BiText text={strings.overviewPlanned} />
          </p>
        )}
        {target.reason === "next" && !first && ready && (
          <p className="text-sm text-white/75">
            <BiText text={strings.homeNextWhenReady} />
          </p>
        )}
      </div>
    </section>
  );
}

const DAY_STYLE = {
  done: "bg-good text-surface",
  current: "bg-brand-fill text-on-brand ring-4 ring-accent/50",
  todo: "bg-surface text-ink-2 ring-2 ring-inset ring-line-strong",
};

/**
 * This week: the week's name and how many lessons are done, the seven days as a connected row (✓ done, the current day
 * ringed in marigold with "Next" under it; the line turns green between finished days), and a quiet line with the days
 * practised. The numbers are the day numbers; each written day links to its overview page.
 */
function WeekCard({ course, progress, written, practised }: { course: Course; progress: Progress; written: string[]; practised: number }) {
  const target = recommendedDay(course, progress);
  const place = target ? locateDay(course, target.dayId) : null;
  if (!place) return null;
  const current = target && !(target.dayId in progress.completed) ? target.dayId : null;
  const days = weekStrip(place.week, progress, current);
  const done = days.filter((d) => d.state === "done").length;
  const joined = (i: number) => days[i]?.state === "done" && days[i + 1]?.state !== "todo"; // the line from day i to day i + 1 is green
  return (
    <section aria-label={strings.homeThisWeek.en} className={`${card} flex flex-col gap-5`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <h2 className={sectionTitle}>
            <Bi label={strings.homeThisWeek} className="items-start" />
          </h2>
          <p className="text-base text-ink-2">
            {fill(strings.journeyWeek, { n: place.week.n }).en} · {place.week.title.en}
          </p>
        </div>
        <span className={`${badge(done > 0 ? "good" : "neutral")} shrink-0`}>{fill(strings.homeWeekDone, { done, total: days.length }).en}</span>
      </div>
      <ul className="grid grid-cols-7">
        {days.map((d, i) => {
          const content = (
            <>
              <span aria-hidden="true" className="relative flex w-full justify-center">
                {i > 0 && <span className={`absolute top-1/2 right-1/2 left-0 h-1 -translate-y-1/2 ${joined(i - 1) ? "bg-good" : "bg-line"}`} />}
                {i < days.length - 1 && <span className={`absolute top-1/2 right-0 left-1/2 h-1 -translate-y-1/2 ${joined(i) ? "bg-good" : "bg-line"}`} />}
                <span className={`relative flex aspect-square w-[78%] max-w-10 items-center justify-center rounded-full font-display text-base font-bold ${DAY_STYLE[d.state]}`}>
                  {d.state === "done" ? <Icon name="check" className="size-[55%]" strokeWidth={3} /> : d.number}
                </span>
              </span>
              <span aria-hidden="true" className="min-h-5 text-sm leading-5 font-bold text-accent-ink">
                {d.state === "current" ? strings.homeUpNext.en : ""}
              </span>
              <span className="sr-only">
                {fill(strings.homeDayChip, { n: d.number }).en} — {(d.state === "done" ? strings.stepDone : d.state === "current" ? strings.stepCurrent : strings.stepTodo).en}
              </span>
            </>
          );
          const style = `flex min-h-14 flex-col items-center justify-start gap-1.5 rounded-xl pt-1 ${focusRing}`;
          return (
            <li key={d.ref.id}>
              {written.includes(d.ref.id) ? (
                <Link href={`/lessons/${encodeURIComponent(d.ref.id)}`} className={`${style} hover:bg-sunken`}>
                  {content}
                </Link>
              ) : (
                <span className={`${style} opacity-60`}>{content}</span>
              )}
            </li>
          );
        })}
      </ul>
      {practised > 0 && (
        <p className="flex items-center gap-2 border-t border-line pt-4 text-base text-ink-2">
          <Icon name="leaf" className="size-5 shrink-0 text-good" />
          {(practised === 1 ? strings.homePractisedOne : fill(strings.homePractised, { n: practised })).en}
        </p>
      )}
    </section>
  );
}

const TILE_TONE = {
  accent: "bg-accent-soft text-accent-ink",
  brand: "bg-brand-soft text-brand",
  who: "bg-who-bg text-who-ink",
};

/** Practice something else: rows with an icon, a hint and the count. */
function PracticeList({ progress }: { progress: Progress }) {
  const finished = Object.keys(progress.completed).length;
  const rows: { label: BiLabel; count: number; href: string; icon: IconName; tone: keyof typeof TILE_TONE }[] = [
    { label: strings.homePracticeAgain, count: Object.keys(progress.mistakes).length, href: "/learn/practice/again", icon: "retry", tone: "accent" },
    { label: strings.homeRolePlays, count: finished, href: "/learn/practice/roleplays", icon: "chat", tone: "brand" },
    { label: strings.homeMySentences, count: finished, href: "/learn/practice/sentences", icon: "book", tone: "who" },
  ];
  return (
    <section aria-label={strings.homePracticeMore.en} className="flex flex-col gap-3">
      <h2 className={sectionTitle}>
        <Bi label={strings.homePracticeMore} className="items-start" />
      </h2>
      <ul className={`${cardFlush} divide-y divide-line`}>
        {rows.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className={`flex min-h-18 items-center gap-4 px-4 py-3 transition-colors hover:bg-sunken ${focusRing} focus-visible:ring-inset`}>
              <span aria-hidden="true" className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${TILE_TONE[r.tone]}`}>
                <Icon name={r.icon} />
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2 text-lg font-semibold text-ink">
                <Bi label={r.label} className="items-start" />
                {r.count > 0 && <span className={badge(r.tone === "accent" ? "accent" : "brand")}>{r.count}</span>}
              </span>
              <Icon name="chevron" className="size-5 text-ink-3" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Daily review (content review, 2026-11-09), under the lesson card once a lesson is finished: how many key sentences
 * are due today, or "All done for today".
 */
function ReviewCard({ progress, today }: { progress: Progress; today: string }) {
  if (Object.keys(progress.review ?? {}).length === 0) return null;
  const due = dueKeys(progress, today).length;
  return (
    <Link href="/learn/practice/review" className={`${card} flex items-center gap-4 transition-colors hover:bg-sunken ${focusRing}`}>
      <span aria-hidden="true" className={`flex size-13 shrink-0 items-center justify-center rounded-2xl ${due > 0 ? TILE_TONE.accent : "bg-good-soft text-good"}`}>
        <Icon name={due > 0 ? "retry" : "check"} className="size-7" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="flex items-center gap-2 text-lg font-semibold text-ink">
          <Bi label={strings.dailyReview} className="items-start" />
          {due > 0 && <span className={badge("accent")}>{fill(strings.dailyReviewDue, { n: due }).en}</span>}
        </span>
        <span className="text-base text-ink-2">
          <BiText text={due > 0 ? strings.dailyReviewHint : strings.dailyReviewDone} />
        </span>
      </span>
      <Icon name="chevron" className="size-5 text-ink-3" />
    </Link>
  );
}

function HomeSkeleton() {
  return (
    <div aria-busy="true" className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
      <Skeleton className="h-80 w-full" />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-44 w-full" />
        <Skeleton className="h-56 w-full" />
      </div>
    </div>
  );
}

/** Home (VISION §10.2): "What should I do now?" Everything that depends on the learner or the clock waits for hydration. */
export function Home({ course, written }: { course: Course; written: string[] }) {
  const settings = useSettings();
  const progress = useProgress();
  const clock = useClock();
  const name = firstName(useAccount());
  if (settings && !settings.onboarded) return <Onboarding course={course} />;
  const practised = progress && clock ? practisedThisWeek(progress.practiceDays, clock.today) : 0;
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-6 px-4 pt-5 pb-6 md:max-w-6xl md:px-6 md:pt-8">
      <div className="flex items-center justify-between md:hidden">
        <Logo size="sm" />
      </div>
      <header className="flex flex-col gap-1">
        <h1 className="font-display min-h-10 text-[2rem] leading-tight font-bold text-ink">
          {clock ? <Bi label={greetWithName(GREETING[timeOfDay(clock.hour)], name)} className="items-start" /> : <span className="sr-only">{strings.homeTitle.en}</span>}
        </h1>
        <p className="text-lg text-ink-2">
          {strings.homeReady.en}
        </p>
      </header>
      {progress && settings ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <TodayCard course={course} progress={progress} written={written} />
            {clock && <ReviewCard progress={progress} today={clock.today} />}
            <TrackSuggestionCard course={course} progress={progress} written={written} />
            <SaveProgressCard />
            <ReminderCard finishedLessons={Object.keys(progress.completed).length} />
            <TrackOfferCard course={course} progress={progress} />
            <InstallCard />
          </div>
          <div className="flex flex-col gap-5">
            <WeekCard course={course} progress={progress} written={written} practised={practised} />
            <PracticeList progress={progress} />
          </div>
        </div>
      ) : (
        <HomeSkeleton />
      )}
    </main>
  );
}
