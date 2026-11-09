"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/icons";
import { Meaning } from "@/components/ui/ContentText";
import { BiText } from "@/components/ui/BiText";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { Build } from "./Build";
import { ListenInline } from "./Narrate";
import { SpeakBar, useChoosing, ChooseNote } from "./SpeakFlow";
import { card } from "@/components/ui/card";
import { Instruction } from "./parts";

/**
 * Hear an English sentence and say it. Choosing instead turns it into arranging the same sentence's words.
 * A long sentence with `steps` (back-chaining, content review 2026-11-09) is said part by part, built up from its end:
 * the parts already said stay above in green, the current part is the big line; only the whole sentence is scored.
 */
export function Repeat({
  activity,
  onAnswer,
  onNext,
}: {
  activity: Extract<Activity, { type: "repeat" }>;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}) {
  const { choosing, note, choose } = useChoosing();
  const steps = activity.steps ?? [activity.say];
  const [at, setAt] = useState(0);
  const last = at === steps.length - 1;
  const line = steps[at];
  const arrange = useMemo<Extract<Activity, { type: "arrange" }>>(
    () => ({ id: activity.id, type: "arrange", te: activity.te, answer: activity.say }),
    [activity],
  );

  if (choosing)
    return (
      <>
        <ChooseNote note={note} />
        <Build activity={arrange} onAnswer={onAnswer} onNext={onNext} />
      </>
    );

  return (
    <>
      <div className="flex flex-col gap-4">
        <Instruction>
          <BiText text={steps.length > 1 ? strings.stepsPrompt : strings.repeatPrompt} />
        </Instruction>
        {steps.slice(0, at).map((done) => (
          <p key={done} className="flex items-center gap-3 rounded-2xl border border-good-line bg-good-soft px-4 py-3 text-lg font-semibold text-good">
            <Icon name="check" className="size-5 shrink-0" strokeWidth={3} />
            {done}
          </p>
        ))}
        <div className={`${card} flex flex-col gap-2 ${steps.length > 1 ? "ring-2 ring-brand" : ""}`}>
          <p className="font-display text-[1.9rem] leading-snug font-semibold text-ink">
            {line}
            <span className="text-2xl">
              <ListenInline read={[line]} auto={[line]} slow />
            </span>
          </p>
          {last && <Meaning className="text-lg text-ink-2">{activity.te}</Meaning>}
        </div>
      </div>
      <SpeakBar key={at} expected={[line]} onAnswer={(correct) => last && onAnswer(correct)} onNext={() => (last ? onNext() : setAt(at + 1))} onChoose={choose} />
    </>
  );
}
