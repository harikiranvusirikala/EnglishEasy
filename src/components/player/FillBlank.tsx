"use client";

import { BiText } from "@/components/ui/BiText";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { Question } from "./Question";
import { Narrate } from "./Narrate";

/** Tap the word that completes the sentence. The sentence has one `___`; the Telugu meaning (if any) sits under it. */
export function FillBlank({
  activity,
  onAnswer,
  onNext,
}: {
  activity: Extract<Activity, { type: "fillBlank" }>;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}) {
  const answerWord = activity.options[activity.answer];
  const full = activity.sentence.replace("___", answerWord);
  return (
    <Question options={activity.options} answer={activity.answer} answerText={full} why={activity.why} onAnswer={onAnswer} onNext={onNext}>
      <p className="text-base text-stone-600 dark:text-stone-400">
        <BiText text={strings.fillBlankPrompt} />
      </p>
      <div className="flex flex-wrap items-center gap-1">
        <p className="text-2xl font-semibold">{activity.sentence.replace("___", "_____")}</p>
        <Narrate text={full} />
      </div>
      {activity.te && (
        <p lang="te" className="text-lg text-stone-600 dark:text-stone-400">
          {activity.te}
        </p>
      )}
    </Question>
  );
}
