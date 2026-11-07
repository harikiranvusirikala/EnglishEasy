"use client";

import { BiText } from "@/components/ui/BiText";
import type { Activity } from "@/content/types";
import { Question } from "./Question";

type Props<T extends Activity["type"]> = { activity: Extract<Activity, { type: T }>; onAnswer: (correct: boolean) => void; onNext: () => void };

/** Pick the right sentence or meaning. `say` (when given) is the sentence to hear. */
export function Choose({ activity, onAnswer, onNext }: Props<"choose">) {
  return (
    <Question
      options={activity.options}
      answer={activity.answer}
      answerText={activity.options[activity.answer]}
      why={activity.why}
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
