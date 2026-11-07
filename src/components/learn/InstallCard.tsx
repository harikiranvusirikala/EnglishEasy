"use client";

import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { installMode } from "@/learning/offline";
import { promptInstall, useInstallState } from "@/lib/pwa";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { strings } from "@/lib/strings";

export const INSTALL_CARD_ID = "install-card";

const STEPS = [
  { text: strings.installIosStep1, icon: "share" as const },
  { text: strings.installIosStep2, icon: "plus" as const },
  { text: strings.installIosStep3, icon: "check" as const },
];

/** The iPhone's three picture steps for adding the app to the Home screen (also shown by Settings → Daily reminder). */
export function IosInstallSteps() {
  return (
    <>
      <p className={cardText}>
        <BiText text={strings.installIosIntro} />
      </p>
      <ol className="flex flex-col gap-2">
        {STEPS.map((s, i) => (
          <li key={s.text.en} className="flex items-center gap-3">
            <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-teal-800 dark:bg-stone-800 dark:text-teal-300">
              <Icon name={s.icon} />
            </span>
            <span className="text-base text-stone-900 dark:text-stone-100">
              <span className="font-semibold">{i + 1}. </span>
              <BiText text={s.text} />
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

/** Home's one-time "Install EnglishEasy" card: Android's Install button, or the iPhone's Share steps in pictures. Hidden once installed or dismissed. */
export function InstallCard() {
  const settings = useSettings();
  const state = useInstallState();
  if (!settings || !state) return null;
  const mode = installMode({ ...state, dismissed: settings.dismissed.includes(INSTALL_CARD_ID) });
  if (mode === "none") return null;
  const dismiss = () => updateSettings({ dismissed: [...new Set([...settings.dismissed, INSTALL_CARD_ID])] });
  return (
    <section aria-label={strings.installTitle.en} className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <Bi label={strings.installTitle} className="items-start" />
      </h2>
      {mode === "prompt" ? (
        <>
          <p className={cardText}>
            <BiText text={strings.installText} />
          </p>
          <button type="button" onClick={() => void promptInstall()} className={`${button("primary")} w-full`}>
            <Bi label={strings.installButton} />
          </button>
        </>
      ) : (
        <IosInstallSteps />
      )}
      <button type="button" onClick={dismiss} className={`${button("ghost")} w-full`}>
        <Bi label={strings.installNotNow} />
      </button>
    </section>
  );
}
