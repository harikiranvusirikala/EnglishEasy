"use client";

import { useRouter } from "next/navigation";
import { ShareLesson } from "@/components/learn/ShareLesson";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { course as realCourse } from "@/content/course";
import type { PlayableDay } from "@/content/types";
import { weekEnd } from "@/learning/week-complete";
import type { Course } from "@/learning/recommend";
import { fill, strings } from "@/lib/strings";
import { Confetti, useNextReady } from "./LessonComplete";
import { Narrate } from "./Narrate";
import { BottomBar, MainButton } from "./parts";

/** Week complete (VISION §10.7), or Stage complete when the week ends its stage. Shown instead of Lesson complete after a week's last day. */
export function WeekComplete({ day, onReview, course = realCourse }: { day: PlayableDay; onReview: () => void; course?: Course }) {
  const router = useRouter();
  const end = weekEnd(course, day.id);
  const nextFirst = end?.nextWeek?.days[0];
  const nextReady = useNextReady(nextFirst?.id);
  if (!end) return null;
  const { week, stage, stageEnd, days, nextWeek } = end;

  return (
    <>
      <Confetti />
      <div className="flex flex-col gap-5">
        <header className="flex flex-col items-center gap-1 text-center">
          <span aria-hidden="true" className={stageEnd ? "text-6xl" : "text-5xl"}>
            {stageEnd ? "🏆" : "🎉"}
          </span>
          <h1 className="text-3xl font-bold">
            <Bi label={fill(strings.weekComplete, { n: week.n })} />
          </h1>
          <p className="text-xl">
            <BiText text={week.title} />
          </p>
        </header>

        <p className="text-center text-lg font-semibold">
          <Bi label={fill(strings.weekDays, { done: days.length, total: days.length })} />
        </p>
        <ProgressBar label={strings.progressLabel.en} value={1} max={1} />
        <p className="text-center text-lg font-semibold">100%</p>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">
            <Bi label={strings.youPractised} className="items-start" />
          </h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-base">
            {days.map((d) => (
              <li key={d.id} className="flex items-center gap-1 text-emerald-900 dark:text-emerald-200">
                <Icon name="check" className="size-5" />
                <BiText text={d.title} />
              </li>
            ))}
          </ul>
        </section>

        {stageEnd && stage && (
          <section className={`${card} flex flex-col gap-2 border-teal-300 dark:border-teal-700`} data-testid="stage-complete">
            <h2 className="text-2xl font-bold">
              <Bi label={fill(strings.stageComplete, { n: stage.n })} className="items-start" />
            </h2>
            <p className="text-lg font-semibold">
              <BiText text={stage.title} />
            </p>
            <p className="text-base font-semibold">
              <Bi label={strings.stageCanDo} className="items-start" />
            </p>
            <div className="flex items-start justify-between gap-2">
              <p className="text-lg">
                <BiText text={stage.canDo} />
              </p>
              <Narrate text={stage.canDo} />
            </div>
          </section>
        )}

        <ShareLesson id={day.id} title={week.title} label={strings.shareWeek} line={strings.shareWeekLine} path="/" />
      </div>

      <BottomBar>
        {nextWeek && nextFirst && nextReady ? (
          <MainButton label={fill(strings.startWeek, { n: nextWeek.n })} onClick={() => router.push(`/learn/play?l=${encodeURIComponent(nextFirst.id)}`)} />
        ) : (
          <MainButton label={strings.finish} onClick={() => router.push("/learn")} />
        )}
        <button type="button" onClick={onReview} className={`${button("secondary")} w-full`}>
          <Bi label={strings.reviewToday} />
        </button>
      </BottomBar>
    </>
  );
}
