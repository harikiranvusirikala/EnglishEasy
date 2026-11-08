"use client";

import { BiText } from "@/components/ui/BiText";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { Narrate } from "./Narrate";
import { BottomBar, FeedbackPanel, MainButton, OPTION, type OptionState } from "./parts";
import { Icon } from "@/components/ui/icons";
import { useQuestion } from "./useQuestion";

type Props = { activity: Extract<Activity, { type: "findMistake" }>; onAnswer: (correct: boolean) => void; onNext: () => void };

/** The sentence as tappable words: tap the wrong one, then see the fix and the reason. */
export function FindMistake({ activity, onAnswer, onNext }: Props) {
  const { selected, setSelected, result, check, retry } = useQuestion(activity.wrongIndex, onAnswer);
  const judged = result === "correct" || result === "failed";
  const words = activity.sentence.split(" ");

  const stateOf = (i: number): OptionState => {
    if (judged && i === activity.wrongIndex) return "right";
    if (result && selected === i && i !== activity.wrongIndex) return "wrong";
    return selected === i ? "selected" : "idle";
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-base text-ink-2">
          <BiText text={strings.mistakePrompt} />
        </p>
        <div role="group" className="flex flex-wrap gap-2">
          {words.map((w, i) => (
            <button
              key={i}
              type="button"
              aria-pressed={stateOf(i) === "selected"}
              disabled={result !== null}
              onClick={() => setSelected(i)}
              className={`flex min-h-13 items-center gap-2 rounded-xl border px-4 py-2 text-xl font-medium outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none ${OPTION[stateOf(i)]}`}
            >
              {w}
              {stateOf(i) === "right" && <Icon name="check" />}
              {stateOf(i) === "wrong" && <Icon name="retry" />}
            </button>
          ))}
        </div>
      </div>
      <BottomBar>
        {result && (
          <FeedbackPanel kind={result === "correct" ? "correct" : "almost"}>
            {judged && (
              <>
                <p className="flex flex-wrap items-center gap-1 text-lg">
                  <span>{strings.sayItLike.en}:</span>
                  <span className="font-semibold">{activity.fix}</span>
                  <Narrate text={activity.fix} auto />
                </p>
                <p className="text-base">
                  <BiText text={activity.why} /> <Narrate text={activity.why} />
                </p>
              </>
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
