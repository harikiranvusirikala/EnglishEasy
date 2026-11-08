"use client";

import { useRouter } from "next/navigation";
import { ShareLesson } from "@/components/learn/ShareLesson";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { button } from "@/components/ui/button";
import { brandCard, card, cardFlush, sectionTitle } from "@/components/ui/card";
import { badge } from "@/components/ui/badge";
import { Illustration } from "@/components/illustrations/Illustration";
import { Icon } from "@/components/ui/icons";
import { course as realCourse } from "@/content/course";
import type { PlayableDay } from "@/content/types";
import { weekEnd } from "@/learning/week-complete";
import type { Course } from "@/learning/recommend";
import { fill, strings } from "@/lib/strings";
import { Confetti, useNextReady } from "./LessonComplete";
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
          <Illustration name={stageEnd ? "complete" : "week"} className="w-56 animate-pop-in motion-reduce:animate-none" />
          <h1 className="font-display mt-2 text-[2.3rem] leading-tight font-bold text-ink">
            <Bi label={fill(strings.weekComplete, { n: week.n })} />
          </h1>
          <p className="text-xl text-ink-2">
            {week.title.en}
          </p>
        </header>

        <div className={`${card} flex flex-col gap-3`}>
          <p className="flex items-center justify-between gap-3 text-lg font-semibold text-ink">
            <Bi label={fill(strings.weekDays, { done: days.length, total: days.length })} className="items-start" />
            <span className={badge("good")}>100%</span>
          </p>
          <ProgressBar label={strings.progressLabel.en} value={1} max={1} />
        </div>

        <section className="flex flex-col gap-3">
          <h2 className={sectionTitle}>
            <Bi label={strings.youPractised} className="items-start" />
          </h2>
          <ul className={`${cardFlush} divide-y divide-line`}>
            {days.map((d) => (
              <li key={d.id} className="flex items-center gap-3 px-4 py-3 text-lg text-ink">
                <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-good text-good-soft">
                  <Icon name="check" className="size-4" strokeWidth={3} />
                </span>
                {d.title.en}
              </li>
            ))}
          </ul>
        </section>

        {stageEnd && stage && (
          <section className={`${brandCard} flex flex-col gap-3`} data-testid="stage-complete">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
              <Icon name="trophy" className="size-4" />
              {stage.title.en}
            </span>
            <h2 className="font-display text-3xl font-bold">
              <Bi label={fill(strings.stageComplete, { n: stage.n })} className="items-start" />
            </h2>
            <p className="text-base font-semibold text-[#fde68a]">
              <Bi label={strings.stageCanDo} className="items-start" />
            </p>
            <p className="text-lg text-white/95">
              <BiText text={stage.canDo} />
            </p>
          </section>
        )}

        <ShareLesson id={day.id} title={week.title} label={strings.shareWeek} line={strings.shareWeekLine} path="/" />
      </div>

      <BottomBar>
        {nextWeek && nextFirst && nextReady ? (
          <MainButton label={fill(strings.startWeek, { n: nextWeek.n })} onClick={() => router.push(`/learn/play?l=${encodeURIComponent(nextFirst.id)}`)} icon="arrowRight" />
        ) : (
          <MainButton label={strings.finish} onClick={() => router.push("/learn")} />
        )}
        <button type="button" onClick={onReview} className={`${button("secondary")} w-full`}>
          <Icon name="retry" className="size-5" />
          <Bi label={strings.reviewToday} />
        </button>
      </BottomBar>
    </>
  );
}
