"use client";

import { useMemo, useRef, useState } from "react";
import { Meaning } from "@/components/ui/ContentText";
import { BiText } from "@/components/ui/BiText";
import { focusRing } from "@/components/ui/button";
import type { Activity } from "@/content/types";
import { makeTiles, sameSentence, wordsOf } from "@/learning/tiles";
import { strings } from "@/lib/strings";
import { Narrate } from "./Narrate";
import { BottomBar, FeedbackPanel, Instruction, MainButton, toneOf } from "./parts";
import { HintLine, useRevealAbove } from "./Question";

type Props = {
  activity: Extract<Activity, { type: "arrange" | "translate" }>;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
};

/** A word tile, drawn like a key (a firm bottom edge that presses down). */
const TILE = `flex min-h-13 items-center rounded-2xl border-2 px-4 py-2 text-xl font-medium transition-[transform,box-shadow,background-color] duration-100 active:translate-y-0.5 active:shadow-none disabled:pointer-events-none motion-reduce:transition-none ${focusRing}`;
const TILE_TONE = {
  bank: "border-line-strong bg-surface text-ink shadow-[0_3px_0_var(--line-strong)] hover:bg-sunken",
  placed: "border-brand bg-brand-soft text-brand-ink shadow-[0_3px_0_var(--brand)]",
  right: "border-good bg-good-soft text-good shadow-[0_3px_0_var(--good)]",
  almost: "border-almost bg-almost-soft text-almost shadow-[0_3px_0_var(--almost-line)]",
};

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
  const kind = result === "correct" ? "correct" : result ? "almost" : null;
  const tone = toneOf(kind);
  const tray = useRef<HTMLDivElement>(null);
  useRevealAbove(tray, result);

  const check = () => {
    if (placed.length === 0 || locked) return;
    const correct = accepted.some((a) => sameSentence(placed.map(word).join(" "), a));
    onAnswer(correct);
    setTries(tries + 1);
    setResult(correct ? "correct" : tries === 0 ? "almost" : "failed");
  };

  const prompt = activity.type === "translate" ? strings.translatePrompt : strings.arrangePrompt;
  const placedTone = result === "correct" ? TILE_TONE.right : result === "almost" || result === "failed" ? TILE_TONE.almost : TILE_TONE.placed;

  return (
    <>
      <div className="flex flex-col gap-5">
        <Instruction>
          <BiText text={prompt} />
        </Instruction>
        {/* Translate is built on the Telugu sentence; Arrange shows its meaning only in Telugu mode. */}
        {activity.te && activity.type === "translate" && (
          <p lang="te" className="font-display text-[1.7rem] leading-snug font-semibold text-ink">
            {activity.te}
          </p>
        )}
        {activity.te && activity.type === "arrange" && <Meaning className="text-lg text-ink-2">{activity.te}</Meaning>}

        <div
          ref={tray}
          role="group"
          aria-label={strings.yourSentence.en}
          className={`flex min-h-24 flex-wrap content-start items-start gap-2 rounded-[1.25rem] border-2 border-dashed p-3 transition-colors ${
            placed.length === 0 ? "border-line-strong bg-sunken/60" : "border-brand/40 bg-surface"
          }`}
        >
          {placed.length === 0 && <p className="self-center px-1 text-base text-ink-3">{strings.tapWordsBelow.en}</p>}
          {placed.map((id) => (
            <button key={id} type="button" disabled={locked} onClick={() => setPlaced(placed.filter((p) => p !== id))} className={`${TILE} animate-pop-in motion-reduce:animate-none ${placedTone}`}>
              {word(id)}
            </button>
          ))}
        </div>

        <div role="group" aria-label={strings.wordBank.en} className="flex min-h-16 flex-wrap gap-2.5">
          {tiles.map((t) =>
            placed.includes(t.id) ? (
              // The tile's place stays, empty, so the others don't jump.
              <span key={t.id} aria-hidden="true" className="min-h-13 rounded-2xl border-2 border-dashed border-line bg-sunken/50 px-4 py-2 text-xl text-transparent select-none">
                {t.word}
              </span>
            ) : (
              <button key={t.id} type="button" disabled={locked} onClick={() => setPlaced([...placed, t.id])} className={`${TILE} ${TILE_TONE.bank}`}>
                {t.word}
              </button>
            ),
          )}
        </div>

        {!locked && (
          <HintLine hinted={hinted} onHint={() => setHinted(true)}>
            <BiText text={strings.hintStarts} /> <strong className="text-lg">{wordsOf(activity.answer)[0]}</strong>
          </HintLine>
        )}
      </div>

      <BottomBar tone={tone}>
        {kind && (
          <FeedbackPanel kind={kind} action={judged && <Narrate text={activity.answer} auto variant="compact" />}>
            {result === "failed" && (
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg">
                <span>{strings.answerIs.en}:</span>
                <span className="font-semibold">{activity.answer}</span>
              </p>
            )}
          </FeedbackPanel>
        )}
        {result === null && <MainButton label={strings.check} onClick={check} disabled={placed.length === 0} />}
        {result === "almost" && <MainButton label={strings.tryAgain} onClick={() => setResult(null)} tone="almost" icon="retry" />}
        {judged && <MainButton label={strings.continue} onClick={onNext} tone={tone} />}
      </BottomBar>
    </>
  );
}
