"use client";

import { useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Nudge } from "@/components/ui/Nudge";
import { Toast } from "@/components/ui/Toast";
import { button } from "@/components/ui/button";
import type { Course } from "@/learning/recommend";
import { ENGLISH_CARD_ID, englishCardVisible } from "@/learning/home";
import type { Progress } from "@/learning/progress";
import { getSettings, updateSettings, useSettings } from "@/lib/settings-store";
import { strings } from "@/lib/strings";

const dismiss = () => updateSettings({ dismissed: [...new Set([...getSettings().dismissed, ENGLISH_CARD_ID])] });

/** The card itself (also in the /dev/ui gallery): Try English, or Not now (✕ too). */
export function EnglishModeCardView({ onTry, onNotNow }: { onTry: () => void; onNotNow: () => void }) {
  return (
    <Nudge
      label={strings.englishCardTitle.en}
      icon="globe"
      tone="accent"
      title={<Bi label={strings.englishCardTitle} className="items-start" />}
      onDismiss={onNotNow}
      dismissLabel={strings.englishCardNotNow.en}
      actions={
        <>
          <button type="button" onClick={onTry} className={`${button("primary", "lg")} w-full`}>
            <Bi label={strings.englishCardTry} />
          </button>
          <button type="button" onClick={onNotNow} className={`${button("ghost")} w-full`}>
            <Bi label={strings.englishCardNotNow} />
          </button>
        </>
      }
    >
      <BiText text={strings.englishCardText} />
    </Nudge>
  );
}

/**
 * Home, once (VISION §4.3; owner, 2026-11-11): from Stage 3 a learner in Telugu mode is offered English explanations.
 * "Try English" switches Learn in at once and says how to switch back; "Not now" hides the card for good.
 */
export function EnglishModeCard({ course, progress }: { course: Course; progress: Progress }) {
  const settings = useSettings();
  const [switched, setSwitched] = useState(false);
  if (switched) return <Toast>{strings.englishCardDone.en}</Toast>;
  if (!settings || !englishCardVisible(course, progress, settings)) return null;
  return (
    <EnglishModeCardView
      onTry={() => {
        updateSettings({ learnIn: "en", dismissed: [...new Set([...settings.dismissed, ENGLISH_CARD_ID])] });
        setSwitched(true);
      }}
      onNotNow={dismiss}
    />
  );
}
