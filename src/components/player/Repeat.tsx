"use client";

import { useMemo } from "react";
import { BiText } from "@/components/ui/BiText";
import type { Activity } from "@/content/types";
import { strings } from "@/lib/strings";
import { Build } from "./Build";
import { Narrate } from "./Narrate";
import { SpeakBar, useChoosing, ChooseNote } from "./SpeakFlow";
import { card } from "@/components/ui/card";

/** Hear an English sentence and say it. Choosing instead turns it into arranging the same sentence's words. */
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
        <p className="text-base text-stone-600 dark:text-stone-400">
          <BiText text={strings.repeatPrompt} />
        </p>
        <div className={`${card} flex flex-col gap-2`}>
          <p className="text-2xl font-semibold">{activity.say}</p>
          <p lang="te" className="text-base text-stone-600 dark:text-stone-400">
            {activity.te}
          </p>
          <Narrate text={activity.say} auto />
        </div>
      </div>
      <SpeakBar expected={[activity.say]} onAnswer={onAnswer} onNext={onNext} onChoose={choose} />
    </>
  );
}
