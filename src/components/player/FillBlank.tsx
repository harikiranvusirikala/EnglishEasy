"use client";

import { BiText } from "@/components/ui/BiText";
import { Meaning } from "@/components/ui/ContentText";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { Instruction } from "./parts";
import { Question } from "./Question";

/**
 * Tap the word that completes the sentence. The sentence has one `___`: it shows as a slot that fills with the word
 * the learner picks, so they can read the whole sentence before checking. The Telugu meaning (if any) sits under it.
 */
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
  const [before, after] = activity.sentence.split("___");
  return (
    <Question options={activity.options} answer={activity.answer} answerText={full} why={activity.why} onAnswer={onAnswer} onNext={onNext}>
      {(selected) => (
        <>
          <Instruction>
            <BiText text={strings.fillBlankPrompt} />
          </Instruction>
          <div className="rounded-[1.25rem] border border-line bg-surface p-5 shadow-card">
            <p className="font-display text-[1.7rem] leading-relaxed font-semibold text-ink">
              {before}
              <span
                className={`mx-1 inline-flex min-w-24 justify-center rounded-xl border-b-4 px-2 align-baseline transition-colors duration-150 ${
                  selected === null ? "border-dashed border-line-strong bg-sunken text-transparent" : "border-brand bg-brand-soft text-brand-ink"
                }`}
              >
                {selected === null ? "_____" : activity.options[selected]}
              </span>
              {after}
            </p>
            {activity.te && <Meaning className="mt-2 text-lg text-ink-2">{activity.te}</Meaning>}
          </div>
        </>
      )}
    </Question>
  );
}
