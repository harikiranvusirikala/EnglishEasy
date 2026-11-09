"use client";

import { useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { choiceButton } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { useClock } from "@/lib/clock";
import { submitFeedback, useFeedbackState, type LessonLevel } from "@/lib/feedback";
import { useSettings } from "@/lib/settings-store";
import { strings, type Bi as BiLabel } from "@/lib/strings";

const LEVELS: { value: LessonLevel; label: BiLabel }[] = [
  { value: "easy", label: strings.rateEasy },
  { value: "right", label: strings.rateRight },
  { value: "hard", label: strings.rateHard },
];

/**
 * "How was this lesson?" on Lesson complete (BUILD_PLAN "feedback in the app"): one optional tap, once per lesson per
 * phone. A lesson rated on an earlier visit shows nothing.
 */
export function RateLesson({ dayId }: { dayId: string }) {
  const settings = useSettings();
  const clock = useClock();
  const state = useFeedbackState();
  const [chosen, setChosen] = useState<LessonLevel | null>(null);
  if (!settings || !clock || !state) return null;
  if (dayId in state.rated && !chosen) return null;

  function rate(level: LessonLevel) {
    if (!settings || !clock) return;
    if (submitFeedback({ kind: "lesson", dayId, level, learnIn: settings.learnIn, at: new Date().toISOString() }, clock.today)) setChosen(level);
  }

  return (
    <section aria-label={strings.rateLessonTitle.en} className={`${card} flex flex-col gap-3`}>
      <h2 className="font-display text-xl font-semibold text-ink">
        <Bi label={strings.rateLessonTitle} className="items-start" />
      </h2>
      <div role="group" aria-label={strings.rateLessonTitle.en} className="grid grid-cols-3 gap-2">
        {LEVELS.map((l) => (
          <button key={l.value} type="button" aria-pressed={chosen === l.value} disabled={chosen !== null} onClick={() => rate(l.value)} className={choiceButton(chosen === l.value)}>
            <Bi label={l.label} />
          </button>
        ))}
      </div>
      {chosen && (
        <p role="status" className="text-base text-good">
          <BiText text={strings.rateThanks} />
        </p>
      )}
    </section>
  );
}
