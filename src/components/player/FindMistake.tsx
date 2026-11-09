"use client";

import { BiText } from "@/components/ui/BiText";
import { ContentText } from "@/components/ui/ContentText";
import { focusRing } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { ListenInline } from "./Narrate";
import { BottomBar, FeedbackPanel, Instruction, MainButton, OPTION, toneOf, type OptionState } from "./parts";
import { useQuestion } from "./useQuestion";
import { useRevealAbove } from "./Question";
import { useRef } from "react";

type Props = { activity: Extract<Activity, { type: "findMistake" }>; onAnswer: (correct: boolean) => void; onNext: () => void };

/** The sentence as tappable words in a card: tap the wrong one, then see the fix and the reason. */
export function FindMistake({ activity, onAnswer, onNext }: Props) {
  const { selected, setSelected, result, check, retry } = useQuestion(activity.wrongIndex, onAnswer);
  const judged = result === "correct" || result === "failed";
  const kind = result === "correct" ? "correct" : result ? "almost" : null;
  const tone = toneOf(kind);
  const words = activity.sentence.split(" ");
  const box = useRef<HTMLDivElement>(null);
  useRevealAbove(box, result);

  const stateOf = (i: number): OptionState => {
    if (judged && i === activity.wrongIndex) return "right";
    if (result && selected === i && i !== activity.wrongIndex) return "wrong";
    return selected === i ? "selected" : "idle";
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <Instruction>
          <BiText text={strings.mistakePrompt} />
        </Instruction>
        <div ref={box} role="group" className="flex flex-wrap gap-2.5 rounded-[1.25rem] border border-line bg-surface p-4 shadow-card">
          {words.map((w, i) => (
            <button
              key={i}
              type="button"
              aria-pressed={stateOf(i) === "selected"}
              disabled={result !== null}
              onClick={() => setSelected(i)}
              className={`flex min-h-13 items-center gap-2 rounded-2xl border-2 px-4 py-2 text-xl font-medium transition-[background-color,border-color] duration-150 disabled:pointer-events-none ${focusRing} ${OPTION[stateOf(i)]}`}
            >
              {w}
              {stateOf(i) === "right" && <Icon name="check" className="size-5" strokeWidth={2.6} />}
              {stateOf(i) === "wrong" && <Icon name="retry" className="size-5" />}
            </button>
          ))}
        </div>
      </div>
      <BottomBar tone={tone}>
        {kind && (
          <FeedbackPanel kind={kind} label={result === "failed" ? strings.sayItLike : undefined} answer={result === "failed" ? <span className="font-bold">{activity.fix}</span> : undefined}>
            {judged && (
              <>
                {result === "correct" && <p className="text-lg font-semibold">{activity.fix}</p>}
                <p className="text-lg">
                  <ContentText text={activity.why} />
                  <ListenInline read={[activity.fix, activity.why]} auto={[activity.fix, activity.why]} />
                </p>
              </>
            )}
          </FeedbackPanel>
        )}
        {result === null && <MainButton label={strings.check} onClick={check} disabled={selected === null} />}
        {result === "almost" && <MainButton label={strings.tryAgain} onClick={retry} tone="almost" icon="retry" />}
        {judged && <MainButton label={strings.continue} onClick={onNext} tone={tone} />}
      </BottomBar>
    </>
  );
}
