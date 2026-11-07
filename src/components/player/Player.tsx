"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { button, iconButton } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import type { Activity, PlayableDay, SectionKind } from "@/content/types";
import { activityCount } from "@/content/generate";
import { emptyProgress, markViewed, recordAnswer, skipActivity, type Progress } from "@/learning/progress";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { Build } from "./Build";
import { Choose } from "./Choose";
import { ComingSoon, DontSayCard, ExplainCard, WhenToUseCard } from "./cards";
import { FillBlank } from "./FillBlank";
import { FindMistake } from "./FindMistake";
import { Match } from "./Match";
import { Narrate } from "./Narrate";
import { BottomBar, MainButton } from "./parts";

const SECTION_NAME: Record<SectionKind, BiLabel> = {
  warmup: strings.sectionWarmup,
  learn: strings.sectionLearn,
  practice: strings.sectionPractice,
  speak: strings.sectionSpeak,
  roleplay: strings.sectionRoleplay,
  wrapup: strings.sectionWrapup,
};

const CARD_TYPES: Activity["type"][] = ["explain", "whenToUse", "dontSay"];
const SCORED_SECTIONS: SectionKind[] = ["warmup", "practice", "speak"];
/** Questions have a right answer; cards, dialogues and role plays do not. */
const isQuestion = (activity: Activity) => !CARD_TYPES.includes(activity.type) && activity.type !== "roleplay" && activity.type !== "dialogue";

type Step =
  | { kind: "intro"; section: number }
  | { kind: "activity"; section: number; activity: number }
  | { kind: "summary"; section: number }
  | { kind: "wrapup"; section: number };

/** Intro screen, the activities, then a score screen for question sections; Wrap-up is one screen. */
function buildSteps(day: PlayableDay): Step[] {
  const steps: Step[] = [];
  day.sections.forEach((section, s) => {
    if (section.kind === "wrapup") return void steps.push({ kind: "wrapup", section: s });
    if (section.activities.length === 0) return;
    steps.push({ kind: "intro", section: s });
    section.activities.forEach((_, a) => steps.push({ kind: "activity", section: s, activity: a }));
    if (SCORED_SECTIONS.includes(section.kind)) steps.push({ kind: "summary", section: s });
  });
  return steps;
}

export function Player({ day }: { day: PlayableDay }) {
  const router = useRouter();
  const steps = useMemo(() => buildSteps(day), [day]);
  const total = activityCount(day);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => emptyProgress());
  const [leaving, setLeaving] = useState(false);
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    main.current?.focus({ preventScroll: true });
    if (main.current) main.current.scrollTop = 0;
  }, [index]);

  const step = steps[index];
  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  const now = () => new Date().toISOString();

  const done = steps.slice(0, index).filter((s) => s.kind === "activity").length;
  const shown = Math.min(total, done + (step.kind === "activity" ? 1 : 0));
  const section = day.sections[step.section];

  return (
    <div className="mx-auto flex h-dvh max-w-xl flex-col">
      <header className="flex flex-col gap-1 px-2 pt-2">
        <div className="flex items-center gap-2">
          <button type="button" aria-label={strings.close.en} onClick={() => setLeaving(true)} className={iconButton}>
            <Icon name="close" />
          </button>
          <ProgressBar label={strings.progressLabel.en} value={done} max={total} className="flex-1" />
          <span className="min-w-14 text-right text-base font-semibold tabular-nums">
            {shown} / {total}
          </span>
        </div>
        <p className="px-3 text-sm text-stone-600 dark:text-stone-400">
          <Bi label={SECTION_NAME[section.kind]} className="items-start" />
        </p>
      </header>

      <main ref={main} tabIndex={-1} className="flex-1 overflow-y-auto px-4 pt-4 pb-72 outline-none">
        {step.kind === "intro" && (
          <div className="flex flex-col items-center gap-4 pt-12 text-center">
            <h1 className="text-3xl">
              <Bi label={SECTION_NAME[section.kind]} />
            </h1>
            <BottomBar>
              <MainButton label={strings.start} onClick={next} />
            </BottomBar>
          </div>
        )}

        {step.kind === "activity" && (
          <ActivityView
            key={section.activities[step.activity].id}
            activity={section.activities[step.activity]}
            onAnswer={(correct) => setProgress((p) => recordAnswer(p, section.activities[step.activity].id, correct, now()))}
            onNext={() => {
              const id = section.activities[step.activity].id;
              setProgress((p) => (isQuestion(section.activities[step.activity]) ? p : markViewed(p, id, now())));
              next();
            }}
            onSkip={() => {
              const id = section.activities[step.activity].id;
              setProgress((p) => skipActivity(p, id, now()));
              next();
            }}
          />
        )}

        {step.kind === "summary" && <Summary section={section} progress={progress} onNext={next} />}

        {step.kind === "wrapup" && day.wrapup && <Wrapup wrapup={day.wrapup} onFinish={() => router.push("/learn")} />}
        {step.kind === "wrapup" && !day.wrapup && (
          <BottomBar>
            <MainButton label={strings.finish} onClick={() => router.push("/learn")} />
          </BottomBar>
        )}
      </main>

      <Dialog open={leaving} onClose={() => setLeaving(false)} title={strings.leaveTitle.en}>
        <p className="mb-4 text-lg">
          <BiText text={strings.leaveBody} />
        </p>
        <div className="flex flex-col gap-2">
          <button type="button" onClick={() => setLeaving(false)} className={button("primary")}>
            <Bi label={strings.keepGoing} />
          </button>
          <button type="button" onClick={() => router.push("/learn")} className={button("secondary")}>
            <Bi label={strings.leave} />
          </button>
        </div>
      </Dialog>
    </div>
  );
}

function ActivityView({
  activity,
  onAnswer,
  onNext,
  onSkip,
}: {
  activity: Activity;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  onSkip: () => void;
}) {
  switch (activity.type) {
    case "explain":
      return <ExplainCard activity={activity} onNext={onNext} />;
    case "whenToUse":
      return <WhenToUseCard activity={activity} onNext={onNext} />;
    case "dontSay":
      return <DontSayCard activity={activity} onNext={onNext} />;
    case "choose":
      return <Choose activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    case "fillBlank":
      return <FillBlank activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    case "arrange":
    case "translate":
      return <Build activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    case "match":
      return <Match activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    case "findMistake":
      return <FindMistake activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    default:
      return <ComingSoon onSkip={onSkip} />; // built in Steps 7–9
  }
}

/** "Practice complete · 7 / 8 correct", and how many sentences went to Practice again. */
function Summary({ section, progress, onNext }: { section: PlayableDay["sections"][number]; progress: Progress; onNext: () => void }) {
  const scored = section.activities.filter((a) => isQuestion(a) && progress.activities[a.id] && !progress.activities[a.id].skipped);
  const correct = scored.filter((a) => progress.activities[a.id].correct && progress.activities[a.id].attempts === 1).length;
  const added = section.activities.filter((a) => a.id in progress.mistakes).length;
  return (
    <div className="flex flex-col items-center gap-3 pt-12 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
        <Icon name="check" className="size-9" />
      </span>
      <h1 className="text-2xl">
        <Bi label={SECTION_NAME[section.kind]} />
      </h1>
      <p className="text-lg">
        <BiText text={strings.sectionComplete} />
      </p>
      {scored.length > 0 && (
        <p className="text-3xl font-bold tabular-nums">
          {correct} / {scored.length} <span className="text-lg font-semibold">
            <BiText text={strings.correctCount} />
          </span>
        </p>
      )}
      {added > 0 && (
        <p className="text-base text-stone-600 dark:text-stone-400">
          {added} <BiText text={strings.addedToPracticeAgain} />
        </p>
      )}
      <BottomBar>
        <MainButton label={strings.continue} onClick={onNext} />
      </BottomBar>
    </div>
  );
}

function Wrapup({ wrapup, onFinish }: { wrapup: NonNullable<PlayableDay["wrapup"]>; onFinish: () => void }) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">
          <Bi label={strings.wrapupToday} className="items-start" />
        </h1>
        <ul className="flex flex-col gap-2">
          {wrapup.key.map((sentence, i) => (
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
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">
            <Bi label={strings.wrapupWords} className="items-start" />
          </h2>
          <ul className="grid grid-cols-2 gap-2">
            {wrapup.words.map((word, i) => (
              <li key={i} className={card}>
                <p className="text-lg font-semibold">{word.en}</p>
                <p lang="te" className="text-base text-stone-600 dark:text-stone-400">
                  {word.te}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className={`${card} flex flex-col gap-1`}>
          <h2 className="text-lg font-bold">
            <Bi label={strings.wrapupTry} className="items-start" />
          </h2>
          <p className="text-lg">
            <BiText text={wrapup.tryToday} />
          </p>
        </section>
      </div>
      <BottomBar>
        <MainButton label={strings.finish} onClick={onFinish} />
      </BottomBar>
    </>
  );
}
