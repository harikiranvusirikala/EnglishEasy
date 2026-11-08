"use client";

import { useEffect, useState } from "react";
import { Meaning } from "@/components/ui/ContentText";
import { useRouter } from "next/navigation";
import { ReminderCard } from "@/components/learn/Reminder";
import { SaveProgressCard } from "@/components/learn/SaveProgressCard";
import { ShareLesson } from "@/components/learn/ShareLesson";
import { Bi } from "@/components/ui/Bi";
import { ContentText } from "@/components/ui/ContentText";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { button } from "@/components/ui/button";
import { accentCard, card, cardFlush, sectionTitle } from "@/components/ui/card";
import { badge } from "@/components/ui/badge";
import { Illustration } from "@/components/illustrations/Illustration";
import { activityCount } from "@/content/generate";
import { Icon, type IconName } from "@/components/ui/icons";
import { dayAfter, findDay } from "@/content/course";
import type { PlayableDay } from "@/content/types";
import { loadLesson } from "@/lib/lesson-data";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";
import { Narrate } from "./Narrate";
import { BottomBar, MainButton } from "./parts";
import { SECTION_NAME } from "./sections";

const PIECES = ["bg-brand", "bg-accent", "bg-who-ink", "bg-what-ink", "bg-good"];

/** A short burst of falling pieces, CSS only; not shown when the phone asks for less motion. */
export function Confetti() {
  return (
    <div aria-hidden="true" data-testid="confetti" className="pointer-events-none fixed inset-0 z-20 overflow-hidden motion-reduce:hidden">
      {Array.from({ length: 28 }, (_, i) => (
        <span
          key={i}
          style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 7) * 110}ms`, animationDuration: `${1900 + (i % 5) * 320}ms` }}
          className={`absolute top-0 animate-[confetti-fall_2s_ease-in_forwards] ${i % 3 === 0 ? "size-2.5 rounded-full" : "h-3.5 w-2 rounded-sm"} ${PIECES[i % PIECES.length]}`}
        />
      ))}
    </div>
  );
}

/** The next day's button only appears once its lesson file can be loaded (days are added over time). */
export function useNextReady(id: string | undefined): boolean {
  const [ready, setReady] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    let live = true;
    loadLesson(id).then(
      () => live && setReady(id),
      () => {},
    );
    return () => {
      live = false;
    };
  }, [id]);
  return !!id && ready === id;
}

/** Lesson complete (VISION §10.6): confetti, what was done, the key sentences, new words, Try it today, and what is next. */
export function LessonComplete({ day, onReview }: { day: PlayableDay; onReview: () => void }) {
  const router = useRouter();
  const here = findDay(day.id);
  const after = dayAfter(day.id);
  const nextReady = useNextReady(after?.ref.id);
  const done = day.sections.filter((s) => s.kind !== "wrapup" && s.activities.length > 0);

  const words = day.wrapup?.words.length ?? 0;
  const sentences = day.wrapup?.key.length ?? 0;

  return (
    <>
      <Confetti />
      <div className="flex flex-col gap-5">
        <header className="flex flex-col items-center gap-1 text-center">
          <Illustration name="complete" className="w-52 animate-pop-in motion-reduce:animate-none" />
          <h1 className="font-display mt-2 text-[2.3rem] leading-tight font-bold text-ink">
            <Bi label={here ? fill(strings.dayComplete, { n: here.number }) : strings.lessonCompleteLabel} />
          </h1>
          <p className="text-xl text-ink-2">
            {day.title.en}
          </p>
        </header>

        <div className="grid grid-cols-3 gap-3">
          <Stat value={activityCount(day)} label={strings.statActivities} icon="tiles" />
          <Stat value={sentences} label={strings.statSentences} icon="book" />
          <Stat value={words} label={strings.statWords} icon="sparkle" />
        </div>

        <ul className="flex flex-wrap justify-center gap-2">
          {done.map((s) => (
            <li key={s.kind} className={badge("good")}>
              <Icon name="check" className="size-4" strokeWidth={3} />
              {s.kind === "practice" ? <Bi label={fill(strings.practiceQuestions, { n: s.activities.length })} /> : <Bi label={SECTION_NAME[s.kind]} />}
            </li>
          ))}
        </ul>
        <ProgressBar label={strings.progressLabel.en} value={1} max={1} />

        {day.wrapup && (
          <>
            <section className="flex flex-col gap-3">
              <h2 className={sectionTitle}>
                <Bi label={strings.yourSentencesToday} className="items-start" />
              </h2>
              <ul className={`${cardFlush} divide-y divide-line`}>
                {day.wrapup.key.map((sentence, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 px-4 py-3.5">
                    <div className="min-w-0">
                      <p className="text-xl font-semibold text-ink">{sentence.en}</p>
                      <Meaning>{sentence.te}</Meaning>
                    </div>
                    <Narrate text={sentence.en} variant="compact" />
                  </li>
                ))}
              </ul>
            </section>
            {day.wrapup.words.length > 0 && (
              <section className="flex flex-col gap-3">
                <h2 className={sectionTitle}>
                  <Bi label={strings.wrapupWords} className="items-start" />
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {day.wrapup.words.map((word, i) => (
                    <li key={i} className="flex flex-col rounded-2xl border border-line bg-surface px-4 py-2.5 shadow-card">
                      <span className="text-lg font-semibold text-ink">{word.en}</span>
                      <Meaning as="span">{word.te}</Meaning>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section className={`${accentCard} flex items-start gap-4`}>
              <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-on-accent">
                <Icon name="chat" />
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="font-display text-xl font-semibold text-accent-ink">
                  <Bi label={strings.wrapupTry} className="items-start" />
                </h2>
                <p className="text-lg text-ink">
                  <ContentText text={day.wrapup.tryToday} />
                </p>
              </div>
            </section>
          </>
        )}

        {after && nextReady && (
          <p className={`${card} flex items-center gap-3 text-lg font-semibold text-ink`}>
            <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <Icon name="arrowRight" />
            </span>
            {(fill(strings.nextDay, { n: after.number, title: after.ref.title })).en}
          </p>
        )}
        <ReminderCard finishedLessons={1} />
        <SaveProgressCard />
        <ShareLesson id={day.id} title={day.title} />
      </div>

      <BottomBar>
        {after && nextReady ? (
          <MainButton label={fill(strings.continueToDay, { n: after.number })} onClick={() => router.push(`/learn/play?l=${encodeURIComponent(after.ref.id)}`)} icon="arrowRight" />
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

/** A number in a tile (the complete screens). */
export function Stat({ value, label, icon }: { value: number | string; label: BiLabel; icon: IconName }) {
  return (
    <div className={`${card} flex flex-col items-center gap-1 px-2 py-4 text-center`}>
      <Icon name={icon} className="size-6 text-brand" />
      <span className="font-display text-3xl font-bold text-ink tabular-nums">{value}</span>
      <span className="text-sm leading-tight text-ink-2">
        <Bi label={label} />
      </span>
    </div>
  );
}
