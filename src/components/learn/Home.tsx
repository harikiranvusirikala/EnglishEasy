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
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Skeleton } from "@/components/ui/Skeleton";
import { button } from "@/components/ui/button";
import { card, cardLink, cardText, cardTitle } from "@/components/ui/card";
import { useClock } from "@/lib/clock";
import { loadLesson } from "@/lib/lesson-data";
import { useProgress } from "@/lib/progress-store";
import { useSettings } from "@/lib/settings-store";
import { fill, strings } from "@/lib/strings";
import { InstallCard } from "./InstallCard";
import { SaveProgressCard } from "./SaveProgressCard";
import { Onboarding } from "./Onboarding";
import { TrackSuggestionCard, TracksCard } from "./Tracks";

const GREETING = { morning: strings.greetMorning, afternoon: strings.greetAfternoon, evening: strings.greetEvening };

function TodaySkeleton() {
  return <Skeleton className="h-56 w-full" />;
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">{children}</h2>;
}

/** The day's card once its content is known: title, percent, counts and the button. */
function LoadedToday({ place, progress, first }: { place: DayPlace; progress: Progress; first: boolean }) {
  const day = use(loadLesson(place.ref.id));
  const stats = dayStats(day, progress);
  const left = stats.total - stats.done;
  const action = stats.state === "complete" ? strings.homeReviewLesson : stats.state === "in-progress" ? strings.homeContinueLesson : first ? fill(strings.homeStartDay, { n: place.number }) : strings.homeStartLesson;
  return (
    <>
      <ProgressBar label={strings.progressLabel.en} value={stats.done} max={stats.total} />
      <p className={cardText}>
        <BiText text={fill(strings.overviewCount, { done: stats.done, total: stats.total, left })} />
      </p>
      <Link href={`/learn/play?l=${encodeURIComponent(place.ref.id)}`} className={`${button("primary", "lg")} w-full`}>
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
      <section className={card}>
        <p className={cardText}>
          <BiText text={strings.homeAllDone} />
        </p>
      </section>
    );
  }
  const first = isFirstVisit(progress);
  const label = first ? strings.homeFirstTitle : target.reason === "resume" || Object.keys(progress.completed).length > 0 ? strings.homeWelcomeBack : strings.homeToday;
  const ready = written.includes(place.ref.id);
  return (
    <section aria-label={label.en} className={`${card} flex flex-col gap-3`}>
      <p className="text-base font-semibold text-teal-800 dark:text-teal-300">
        <BiText text={label} />
      </p>
      <div>
        <p className={cardText}>
          <BiText text={fill(strings.homeWeekDay, { week: place.week.n, n: place.number })} />
        </p>
        <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
          <BiText text={place.ref.title} />
        </h2>
      </div>
      {ready ? (
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <LoadedToday place={place} progress={progress} first={first} />
        </Suspense>
      ) : (
        <p className={cardText}>
          <BiText text={strings.overviewPlanned} />
        </p>
      )}
      {target.reason === "next" && !first && ready && (
        <p className={cardText}>
          <BiText text={strings.homeNextWhenReady} />
        </p>
      )}
    </section>
  );
}

const MARK = {
  done: { glyph: "✓", sr: strings.stepDone, style: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200" },
  current: { glyph: "●", sr: strings.stepCurrent, style: "bg-teal-700 text-white dark:bg-teal-400 dark:text-stone-950" },
  todo: { glyph: "○", sr: strings.stepTodo, style: "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300" },
};

function WeekStrip({ course, progress, written }: { course: Course; progress: Progress; written: string[] }) {
  const target = recommendedDay(course, progress);
  const place = target ? locateDay(course, target.dayId) : null;
  if (!place) return null;
  const current = target && !(target.dayId in progress.completed) ? target.dayId : null;
  const days = weekStrip(place.week, progress, current);
  return (
    <section aria-label={strings.homeThisWeek.en} className="flex flex-col gap-2">
      <Heading>
        <Bi label={strings.homeThisWeek} className="items-start" />
      </Heading>
      <ul className="grid grid-cols-7 gap-2">
        {days.map((d) => {
          const mark = MARK[d.state];
          const content = (
            <>
              <span aria-hidden="true" className={`flex size-8 items-center justify-center rounded-full text-sm font-bold ${mark.style}`}>
                {mark.glyph}
              </span>
              <span className="text-xs font-semibold">{fill(strings.homeDayChip, { n: d.number }).en}</span>
              <span className="sr-only"> — {mark.sr.en}</span>
            </>
          );
          const style = "flex min-h-13 flex-col items-center justify-center gap-0.5 rounded-xl text-stone-900 outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:text-stone-100 dark:focus-visible:ring-teal-300";
          return (
            <li key={d.ref.id}>
              {written.includes(d.ref.id) ? (
                <Link href={`/lessons/${encodeURIComponent(d.ref.id)}`} className={`${style} hover:bg-stone-200/70 dark:hover:bg-stone-800`}>
                  {content}
                </Link>
              ) : (
                <span className={`${style} opacity-70`}>{content}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function PracticeTiles({ progress }: { progress: Progress }) {
  const finished = Object.keys(progress.completed).length;
  const tiles = [
    { label: strings.homePracticeAgain, count: Object.keys(progress.mistakes).length, href: "/learn/practice/again" },
    { label: strings.homeRolePlays, count: finished, href: "/learn/practice/roleplays" },
    { label: strings.homeMySentences, count: finished, href: "/learn/practice/sentences" },
  ];
  return (
    <section aria-label={strings.homePracticeMore.en} className="flex flex-col gap-2">
      <Heading>
        <Bi label={strings.homePracticeMore} className="items-start" />
      </Heading>
      <ul className="grid grid-cols-3 gap-2">
        {tiles.map((t) => (
          <li key={t.label.en}>
            <Link href={t.href} className={`${cardLink} flex h-full min-h-20 flex-col items-center justify-center gap-1 p-2 text-center`}>
              <span className={`${cardTitle} text-base`}>
                <Bi label={t.label} />
              </span>
              {t.count > 0 && <span className="text-sm font-semibold text-teal-800 tabular-nums dark:text-teal-300">({t.count})</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Home (VISION §10.2): "What should I do now?" Everything that depends on the learner or the clock waits for hydration. */
export function Home({ course, written }: { course: Course; written: string[] }) {
  const settings = useSettings();
  const progress = useProgress();
  const clock = useClock();
  const name = firstName(useAccount());
  if (settings && !settings.onboarded) return <Onboarding />;
  const practised = progress && clock ? practisedThisWeek(progress.practiceDays, clock.today) : 0;
  return (
    <main className="flex flex-col gap-5 p-4 pt-6">
      <h1 className="min-h-8 text-2xl font-bold text-stone-900 dark:text-stone-100">
        {clock ? <Bi label={greetWithName(GREETING[timeOfDay(clock.hour)], name)} className="items-start" /> : <span className="sr-only">{strings.homeTitle.en}</span>}
      </h1>
      {progress && settings ? (
        <>
          <TodayCard course={course} progress={progress} written={written} />
          <SaveProgressCard />
          <InstallCard />
          <TrackSuggestionCard course={course} progress={progress} written={written} />
          <TracksCard course={course} progress={progress} />
          <WeekStrip course={course} progress={progress} written={written} />
          {practised > 0 && (
            <p className="text-base text-stone-700 dark:text-stone-300">
              <BiText text={practised === 1 ? strings.homePractisedOne : fill(strings.homePractised, { n: practised })} />
            </p>
          )}
          <PracticeTiles progress={progress} />
        </>
      ) : (
        <TodaySkeleton />
      )}
    </main>
  );
}
