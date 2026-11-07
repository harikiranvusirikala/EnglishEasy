"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SaveProgressCard } from "@/components/learn/SaveProgressCard";
import { ShareLesson } from "@/components/learn/ShareLesson";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { dayAfter, findDay } from "@/content/course";
import type { PlayableDay } from "@/content/types";
import { loadLesson } from "@/lib/lesson-data";
import { fill, strings } from "@/lib/strings";
import { Narrate } from "./Narrate";
import { BottomBar, MainButton } from "./parts";
import { SECTION_NAME } from "./sections";

const PIECES = [
  "bg-teal-600 dark:bg-teal-300",
  "bg-amber-500 dark:bg-amber-300",
  "bg-sky-500 dark:bg-sky-300",
  "bg-violet-500 dark:bg-violet-300",
  "bg-emerald-500 dark:bg-emerald-300",
];

/** A short burst of falling pieces, CSS only; not shown when the phone asks for less motion. */
export function Confetti() {
  return (
    <div aria-hidden="true" data-testid="confetti" className="pointer-events-none fixed inset-0 z-20 overflow-hidden motion-reduce:hidden">
      {Array.from({ length: 18 }, (_, i) => (
        <span
          key={i}
          style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 6) * 120}ms`, animationDuration: `${1800 + (i % 5) * 300}ms` }}
          className={`absolute top-0 h-3 w-2 animate-[confetti-fall_2s_ease-in_forwards] rounded-sm ${PIECES[i % PIECES.length]}`}
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

  return (
    <>
      <Confetti />
      <div className="flex flex-col gap-5">
        <header className="flex flex-col items-center gap-1 text-center">
          <span aria-hidden="true" className="text-5xl">
            🎉
          </span>
          <h1 className="text-3xl font-bold">
            <Bi label={here ? fill(strings.dayComplete, { n: here.number }) : strings.lessonCompleteLabel} />
          </h1>
          <p className="text-xl">
            <BiText text={day.title} />
          </p>
        </header>

        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-base">
          {done.map((s) => (
            <li key={s.kind} className="flex items-center gap-1 text-emerald-900 dark:text-emerald-200">
              <Icon name="check" className="size-5" />
              {s.kind === "practice" ? <Bi label={fill(strings.practiceQuestions, { n: s.activities.length })} /> : <Bi label={SECTION_NAME[s.kind]} />}
            </li>
          ))}
        </ul>
        <ProgressBar label={strings.progressLabel.en} value={1} max={1} />
        <p className="text-center text-lg font-semibold">100%</p>

        {day.wrapup && (
          <>
            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">
                <Bi label={strings.yourSentencesToday} className="items-start" />
              </h2>
              <ul className="flex flex-col gap-2">
                {day.wrapup.key.map((sentence, i) => (
                  <li key={i} className={`${card} flex items-center justify-between gap-2`}>
                    <div>
                      <p className="text-xl font-semibold">{sentence.en}</p>
                      <p lang="te" className="text-base text-stone-600 dark:text-stone-400">
                        {sentence.te}
                      </p>
                    </div>
                    <Narrate text={sentence.en} />
                  </li>
                ))}
              </ul>
            </section>
            {day.wrapup.words.length > 0 && (
              <section className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">
                  <Bi label={strings.wrapupWords} className="items-start" />
                </h2>
                <ul className="grid grid-cols-2 gap-2">
                  {day.wrapup.words.map((word, i) => (
                    <li key={i} className={card}>
                      <p className="text-lg font-semibold">{word.en}</p>
                      <p lang="te" className="text-base text-stone-600 dark:text-stone-400">
                        {word.te}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section className={`${card} flex flex-col gap-1`}>
              <h2 className="text-lg font-bold">
                <Bi label={strings.wrapupTry} className="items-start" />
              </h2>
              <p className="text-lg">
                <BiText text={day.wrapup.tryToday} />
              </p>
            </section>
          </>
        )}

        {after && nextReady && (
          <p className="text-center text-lg font-semibold">
            <BiText text={fill(strings.nextDay, { n: after.number, title: after.ref.title })} />
          </p>
        )}
        <SaveProgressCard />
        <ShareLesson id={day.id} title={day.title} />
      </div>

      <BottomBar>
        {after && nextReady ? (
          <MainButton label={fill(strings.continueToDay, { n: after.number })} onClick={() => router.push(`/learn/play?l=${encodeURIComponent(after.ref.id)}`)} />
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
