"use client";

import { useState } from "react";
import { focusRing } from "@/components/ui/button";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { ListenInline } from "./Narrate";
import { BottomBar, FeedbackPanel, MainButton, OPTION, Prompt, toneOf, type OptionState } from "./parts";
import { ListenHero } from "./Question";

/**
 * Which word did you hear? (Sound of the week, CURRICULUM §2a.) The word plays from the big button; two big word cards
 * with their Telugu meanings. With only two choices there is no second try: after Check both words play, one after
 * the other, so the difference is heard.
 */
export function SoundPair({ activity, onAnswer, onNext }: { activity: Extract<Activity, { type: "soundPair" }>; onAnswer: (correct: boolean) => void; onNext: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const right = selected === activity.answer;
  const words = activity.words.map((w) => w.en);
  const heard = activity.words[activity.answer].en;

  const check = () => {
    if (selected === null) return;
    onAnswer(selected === activity.answer);
    setChecked(true);
  };
  const stateOf = (i: number): OptionState => (checked ? (i === activity.answer ? "right" : i === selected ? "wrong" : "idle") : selected === i ? "selected" : "idle");

  return (
    <>
      <div className="flex flex-col gap-5">
        <Prompt>{strings.soundPairPrompt.en}</Prompt>
        <ListenHero say={heard} />
        <div role="group" className="grid grid-cols-2 gap-3">
          {activity.words.map((word, i) => (
            <button
              key={word.en}
              type="button"
              aria-pressed={selected === i}
              disabled={checked}
              onClick={() => setSelected(i)}
              className={`flex min-h-36 flex-col items-center justify-center gap-1 rounded-3xl border-2 p-3 transition-[background-color,border-color,box-shadow,transform] duration-150 active:translate-y-0.5 active:shadow-none disabled:pointer-events-none motion-reduce:transition-none ${focusRing} ${OPTION[stateOf(i)]}`}
            >
              <span className="font-display text-4xl font-bold">{word.en}</span>
              <span lang="te" className="text-base text-ink-2">
                {word.te}
              </span>
            </button>
          ))}
        </div>
      </div>
      <BottomBar tone={toneOf(checked ? (right ? "correct" : "answer") : null)}>
        {checked && (
          <FeedbackPanel kind={right ? "correct" : "answer"} label={right ? undefined : strings.answerIs} answer={right ? undefined : <span className="font-bold">{heard}</span>}>
            <p className="text-lg">
              <span className="font-semibold">{words.join(" — ")}</span>
              <ListenInline read={words} auto={words} />
            </p>
          </FeedbackPanel>
        )}
        {checked ? <MainButton label={strings.continue} onClick={onNext} tone={right ? "good" : "almost"} /> : <MainButton label={strings.check} onClick={check} disabled={selected === null} />}
      </BottomBar>
    </>
  );
}
