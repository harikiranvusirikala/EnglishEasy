"use client";

import { BiText } from "@/components/ui/BiText";
import type { Activity } from "@/content/types";
import { Question } from "./Question";

/** Hear an English sentence (it plays by itself) and choose what it means. The sentence is not shown, only played. */
export function ListenChoose({
  activity,
  onAnswer,
  onNext,
}: {
  activity: Extract<Activity, { type: "listenChoose" }>;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}) {
  return (
    <Question
      options={activity.options}
      answer={activity.answer}
      answerText={activity.options[activity.answer]}
      say={activity.say}
      onAnswer={onAnswer}
      onNext={onNext}
    >
      <p className="text-xl font-semibold">
        <BiText text={activity.prompt} />
      </p>
    </Question>
  );
}
