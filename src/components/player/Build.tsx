"use client";

import { useMemo, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import type { Activity } from "@/content/types";
import { makeTiles, sameSentence, wordsOf } from "@/learning/tiles";
import { strings } from "@/lib/strings";
import { Narrate } from "./Narrate";
import { BottomBar, FeedbackPanel, MainButton, OPTION } from "./parts";

type Props = {
  activity: Extract<Activity, { type: "arrange" | "translate" }>;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
};

const TILE = `flex min-h-13 items-center rounded-xl border px-4 py-2 text-xl font-medium outline-none focus-visible:ring-2 focus-visible:ring-teal-700 disabled:pointer-events-none dark:focus-visible:ring-teal-300`;

/** Arrange the English words, or build the English for a Telugu sentence (Translate): tap a tile to place it, tap it again to take it back. */
export function Build({ activity, onAnswer, onNext }: Props) {
  const tiles = useMemo(() => makeTiles(activity.answer, activity.extra, activity.id), [activity]);
  const [placed, setPlaced] = useState<number[]>([]);
  const [tries, setTries] = useState(0);
  const [result, setResult] = useState<"correct" | "almost" | "failed" | null>(null);
  const [hinted, setHinted] = useState(false);

  const word = (id: number) => tiles.find((t) => t.id === id)!.word;
  const accepted = [activity.answer, ...(activity.type === "translate" ? (activity.accept ?? []) : [])];
  const judged = result === "correct" || result === "failed";
  const locked = result !== null;

  const check = () => {
    if (placed.length === 0 || locked) return;
    const correct = accepted.some((a) => sameSentence(placed.map(word).join(" "), a));
    onAnswer(correct);
    setTries(tries + 1);
    setResult(correct ? "correct" : tries === 0 ? "almost" : "failed");
  };

  const prompt = activity.type === "translate" ? strings.translatePrompt : strings.arrangePrompt;
  const style = result === "correct" ? OPTION.right : result === "almost" ? OPTION.wrong : OPTION.idle;

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-base text-stone-600 dark:text-stone-400">
          <BiText text={prompt} />
        </p>
        {activity.te && (
          <p lang="te" className="text-2xl font-semibold">
            {activity.te}
          </p>
        )}

        <div
          role="group"
          aria-label={strings.yourSentence.en}
          className="flex min-h-20 flex-wrap content-start gap-2 border-b-2 border-stone-300 pb-3 dark:border-stone-700"
        >
          {placed.length === 0 && <p className="self-center text-base text-stone-600 dark:text-stone-400">{strings.tapWordsBelow.en}</p>}
          {placed.map((id) => (
            <button key={id} type="button" disabled={locked} onClick={() => setPlaced(placed.filter((p) => p !== id))} className={`${TILE} ${locked ? style : OPTION.selected}`}>
              {word(id)}
            </button>
          ))}
        </div>

        <div role="group" aria-label={strings.wordBank.en} className="flex flex-wrap gap-2">
          {tiles
            .filter((t) => !placed.includes(t.id))
            .map((t) => (
              <button key={t.id} type="button" disabled={locked} onClick={() => setPlaced([...placed, t.id])} className={`${TILE} ${OPTION.idle}`}>
                {t.word}
              </button>
            ))}
        </div>

        {!locked && (
          <div className="flex flex-wrap items-center gap-3">
            {hinted ? (
              <p className="text-base">
                <BiText text={strings.hintStarts} /> <strong className="text-lg">{wordsOf(activity.answer)[0]}</strong>
              </p>
            ) : (
              <button type="button" onClick={() => setHinted(true)} className={button("secondary")}>
                <Bi label={strings.hint} />
              </button>
            )}
          </div>
        )}
      </div>

      <BottomBar>
        {result && (
          <FeedbackPanel kind={result === "correct" ? "correct" : "almost"}>
            {result === "failed" && (
              <p className="flex flex-wrap items-center gap-1 text-lg">
                <span>{strings.answerIs.en}:</span>
                <span className="font-semibold">{activity.answer}</span>
                <Narrate text={activity.answer} />
              </p>
            )}
          </FeedbackPanel>
        )}
        {result === null && <MainButton label={strings.check} onClick={check} disabled={placed.length === 0} />}
        {result === "almost" && (
          <MainButton
            label={strings.tryAgain}
            onClick={() => {
              setResult(null);
            }}
          />
        )}
        {judged && <MainButton label={strings.continue} onClick={onNext} />}
      </BottomBar>
    </>
  );
}
