"use client";

import { BiText } from "@/components/ui/BiText";
import type { Activity } from "@/content/types";
import { Narrate } from "./Narrate";
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
    <p className="text-xl font-semibold">
      <BiText text={activity.situation} /> <Narrate text={activity.situation} auto={!choosing} />
    </p>
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
      <div className="flex flex-col gap-4">{head}</div>
      <SpeakBar expected={activity.expected} onAnswer={onAnswer} onNext={onNext} onChoose={choose} />
    </>
  );
}
