"use client";

import { useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { SAVE_CARD_ID, saveCardVisible } from "@/learning/account";
import { useAccount } from "@/lib/account";
import { useProgress } from "@/lib/progress-store";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { strings } from "@/lib/strings";
import { GoogleButton } from "./Account";

/** "Save your progress with Google" for guests who have done something; on the lesson complete screen and on Home. Dismissible. */
export function SaveProgressCard() {
  const account = useAccount();
  const progress = useProgress();
  const settings = useSettings();
  const [failed, setFailed] = useState(false);
  if (!progress || !settings || !saveCardVisible(account, progress, settings.dismissed)) return null;
  const dismiss = () => updateSettings({ dismissed: [...new Set([...settings.dismissed, SAVE_CARD_ID])] });
  return (
    <section aria-label={strings.saveProgressTitle.en} className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <Bi label={strings.saveProgressTitle} className="items-start" />
      </h2>
      <p className={cardText}>
        <BiText text={strings.saveProgressText} />
      </p>
      {failed && (
        <p role="alert" className="text-base text-red-700 dark:text-red-400">
          <BiText text={strings.signInFailed} />
        </p>
      )}
      <GoogleButton onFailed={() => setFailed(true)} returnTo="/learn" />
      <button type="button" onClick={dismiss} className={`${button("ghost")} w-full`}>
        <Bi label={strings.saveProgressNotNow} />
      </button>
    </section>
  );
}
