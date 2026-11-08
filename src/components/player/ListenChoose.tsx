"use client";

import { ContentText } from "@/components/ui/ContentText";
import type { Activity } from "@/content/types";
import { Prompt } from "./parts";
import { Question } from "./Question";

/** Hear an English sentence (it plays by itself, from a big play button) and choose what it means. The sentence is not shown, only played. */
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
      hero
      onAnswer={onAnswer}
      onNext={onNext}
    >
      <Prompt>
        <ContentText text={activity.prompt} />
      </Prompt>
    </Question>
  );
}
