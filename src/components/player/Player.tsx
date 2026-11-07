"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { button, iconButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Activity, PlayableDay, SectionKind } from "@/content/types";
import { activityCount } from "@/content/generate";
import { addPracticeDay, completeDay, dateKey, emptyProgress, markViewed, recordAnswer, setPosition, skipActivity, type Progress } from "@/learning/progress";
import { nextActivity } from "@/learning/stats";
import { getProgress, updateProgress, useProgress } from "@/lib/progress-store";
import { strings } from "@/lib/strings";
import { Build } from "./Build";
import { Choose } from "./Choose";
import { ComingSoon, DontSayCard, ExplainCard, WhenToUseCard } from "./cards";
import { FillBlank } from "./FillBlank";
import { FindMistake } from "./FindMistake";
import { ListenChoose } from "./ListenChoose";
import { Dialogue } from "./Dialogue";
import { Match } from "./Match";
import { Repeat } from "./Repeat";
import { RolePlay } from "./RolePlay";
import { Situation } from "./Situation";
import { course } from "@/content/course";
import { weekEnd } from "@/learning/week-complete";
import { LessonComplete } from "./LessonComplete";
import { WeekComplete } from "./WeekComplete";
import { ReportButton } from "./ReportButton";
import { BottomBar, MainButton, PlayerSkeleton } from "./parts";
import { SECTION_NAME } from "./sections";

export const CARD_TYPES: Activity["type"][] = ["explain", "whenToUse", "dontSay"];
const SCORED_SECTIONS: SectionKind[] = ["warmup", "practice", "speak"];
/** Questions have a right answer; cards, dialogues and role plays do not. */
export const isQuestion = (activity: Activity) => !CARD_TYPES.includes(activity.type) && activity.type !== "roleplay" && activity.type !== "dialogue";

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

/** Where to start: the first activity not done yet (its section intro if it opens a section), the end if all are done, the start on a replay. */
function startIndex(day: PlayableDay, steps: Step[], p: Progress): number {
  if (day.id in p.completed) return 0;
  const id = nextActivity(day, p);
  if (id === null) {
    const wrapup = steps.findIndex((s) => s.kind === "wrapup");
    return wrapup >= 0 ? wrapup : 0;
  }
  const i = steps.findIndex((s) => s.kind === "activity" && day.sections[s.section].activities[s.activity].id === id);
  if (i < 0) return 0;
  return steps[i - 1]?.kind === "intro" ? i - 1 : i;
}

/** Waits for saved progress (after hydration), then plays. "Review" starts a fresh pass over a finished day. */
export function Player({ day }: { day: PlayableDay }) {
  const saved = useProgress();
  const [pass, setPass] = useState(0);
  if (!saved) return <PlayerSkeleton />;
  return <PlayerInner key={pass} day={day} initial={saved} onReview={() => setPass((n) => n + 1)} />;
}

function PlayerInner({ day, initial, onReview }: { day: PlayableDay; initial: Progress; onReview: () => void }) {
  const router = useRouter();
  const steps = useMemo(() => buildSteps(day), [day]);
  const total = activityCount(day);
  // A finished day replayed keeps its completion: answers stay in this pass and nothing about the day is saved.
  const [replay] = useState(() => day.id in initial.completed);
  const [index, setIndex] = useState(() => startIndex(day, steps, initial));
  const [local, setLocal] = useState<Progress>(() => emptyProgress());
  const stored = useProgress() ?? initial;
  const progress = replay ? local : stored;
  const [leaving, setLeaving] = useState(false);
  const main = useRef<HTMLElement>(null);

  const now = () => new Date().toISOString();
  /** Change this pass's progress; the practice day is always recorded. */
  const change = (fn: (p: Progress) => Progress) => {
    if (replay) setLocal(fn);
    else updateProgress(fn);
    updateProgress((p) => addPracticeDay(p, dateKey(new Date()), now()));
  };

  const step = steps[index];
  const currentId = step.kind === "activity" ? day.sections[step.section].activities[step.activity].id : null;

  useEffect(() => {
    main.current?.focus({ preventScroll: true });
    if (main.current) main.current.scrollTop = 0;
  }, [index]);

  // Remember where the learner is, so Continue returns to this activity.
  useEffect(() => {
    if (!replay && currentId) updateProgress((p) => setPosition(p, day.id, currentId, new Date().toISOString()));
  }, [replay, currentId, day.id]);

  // Reaching the end finishes the day (once).
  const atEnd = step.kind === "wrapup";
  useEffect(() => {
    if (atEnd && !replay && !(day.id in getProgress().completed)) updateProgress((p) => completeDay(p, day, new Date().toISOString()));
  }, [atEnd, replay, day]);

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));

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
          <ReportButton dayId={day.id} activityId={currentId} />
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
            onAnswer={(correct) => change((p) => recordAnswer(p, section.activities[step.activity].id, correct, now()))}
            onNext={() => {
              const id = section.activities[step.activity].id;
              change((p) => (isQuestion(section.activities[step.activity]) ? p : markViewed(p, id, now())));
              next();
            }}
            onSkip={() => {
              const id = section.activities[step.activity].id;
              change((p) => skipActivity(p, id, now()));
              next();
            }}
          />
        )}

        {step.kind === "summary" && <Summary section={section} progress={progress} onNext={next} />}

        {step.kind === "wrapup" && (weekEnd(course, day.id) ? <WeekComplete day={day} onReview={onReview} /> : <LessonComplete day={day} onReview={onReview} />)}
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

export function ActivityView({
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
    case "listenChoose":
      return <ListenChoose activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    case "repeat":
      return <Repeat activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    case "situation":
      return <Situation activity={activity} onAnswer={onAnswer} onNext={onNext} />;
    case "dialogue":
      return <Dialogue activity={activity} onNext={onNext} />;
    case "roleplay":
      return <RolePlay activity={activity} onNext={onNext} />;
    default:
      return <ComingSoon onSkip={onSkip} />;
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
