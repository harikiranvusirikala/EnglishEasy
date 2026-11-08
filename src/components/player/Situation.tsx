"use client";

import { Bi } from "@/components/ui/Bi";
import { ContentText } from "@/components/ui/ContentText";
import { Icon } from "@/components/ui/icons";
import { strings } from "@/lib/strings";
import type { Activity } from "@/content/types";
import { Question } from "./Question";
import { ChooseNote, SpeakBar, useChoosing } from "./SpeakFlow";

/** A situation to answer aloud in English; any of `expected` is accepted. Choosing instead shows the written options. */
export function Situation({
  activity,
  onAnswer,
  onNext,
}: {
  activity: Extract<Activity, { type: "situation" }>;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}) {
  const { choosing, note, choose } = useChoosing();
  const head = (
    <div className="flex flex-col gap-3 rounded-[1.25rem] border border-line bg-surface p-5 shadow-card">
      <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent-ink">
        <Icon name="chat" className="size-4" />
        <Bi label={strings.situationLabel} className="items-start" />
      </span>
      <p className="font-display text-[1.5rem] leading-snug font-semibold text-ink">
        <ContentText text={activity.situation} />
      </p>
    </div>
  );

  if (choosing)
    return (
      <Question options={activity.options} answer={activity.answer} answerText={activity.options[activity.answer]} onAnswer={onAnswer} onNext={onNext}>
        <ChooseNote note={note} />
        {head}
      </Question>
    );

  return (
    <>
      <div className="flex flex-col gap-5">{head}</div>
      <SpeakBar expected={activity.expected} onAnswer={onAnswer} onNext={onNext} onChoose={choose} />
    </>
  );
}
