"use client";

import type { ReactNode } from "react";
import { BiText } from "@/components/ui/BiText";
import { strings, type Bi } from "@/lib/strings";
import { BottomBar, FeedbackPanel, MainButton, OptionButton, Text, type OptionState } from "./parts";
import { Narrate } from "./Narrate";
import { useQuestion } from "./useQuestion";

/**
 * The shared body of a one-right-answer question: options, the Check → Continue button and the feedback panel.
 * `answerText` is the answer shown after two wrong tries; `why` is the reason (follows Learn in).
 */
export function Question({
  options,
  answer,
  answerText,
  why,
  say,
  onAnswer,
  onNext,
  children,
}: {
  options: string[];
  answer: number;
  answerText: string;
  why?: Bi;
  say?: string;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  children?: ReactNode;
}) {
  const { selected, setSelected, result, check, retry } = useQuestion(answer, onAnswer);
  const judged = result === "correct" || result === "failed";

  const stateOf = (i: number): OptionState => {
    if (judged && i === answer) return "right";
    if (result && selected === i && i !== answer) return "wrong";
    return selected === i ? "selected" : "idle";
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {children}
        {say && <Narrate text={say} />}
        <div role="group" className="flex flex-col gap-2">
          {options.map((option, i) => (
            <OptionButton key={i} text={option} state={stateOf(i)} disabled={result !== null} onClick={() => setSelected(i)} />
          ))}
        </div>
      </div>
      <BottomBar>
        {result && (
          <FeedbackPanel kind={result === "correct" ? "correct" : result === "almost" ? "almost" : "answer"}>
            {result === "failed" && (
              <p className="flex flex-wrap items-center gap-1 text-lg">
                <span>{strings.answerIs.en}:</span>
                <Text className="font-semibold">{answerText}</Text>
                <Narrate text={answerText} />
              </p>
            )}
            {why && (
              <p className="text-base">
                <BiText text={why} />
              </p>
            )}
          </FeedbackPanel>
        )}
        {result === null && <MainButton label={strings.check} onClick={check} disabled={selected === null} />}
        {result === "almost" && <MainButton label={strings.tryAgain} onClick={retry} />}
        {judged && <MainButton label={strings.continue} onClick={onNext} />}
      </BottomBar>
    </>
  );
}
