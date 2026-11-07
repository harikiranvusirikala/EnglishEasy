"use client";

import { useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { strings, type Bi as BiLabel } from "@/lib/strings";

export const MIC_HELP_ID = "mic-permission-help";

/**
 * The microphone button: idle → listening (pulses) → the parent shows the result. The first time, a short card explains
 * the permission question the phone is about to ask (it follows Learn in); "Got it" closes it and starts listening.
 */
export function MicButton({
  listening,
  onStart,
  label = strings.speak,
  variant = "primary",
}: {
  listening: boolean;
  onStart: () => void;
  label?: BiLabel;
  variant?: "primary" | "secondary";
}) {
  const settings = useSettings();
  const [help, setHelp] = useState(false);

  const press = () => {
    if (settings && !settings.dismissed.includes(MIC_HELP_ID)) setHelp(true);
    else onStart();
  };
  const understood = () => {
    setHelp(false);
    if (settings) updateSettings({ dismissed: [...settings.dismissed, MIC_HELP_ID] });
    onStart();
  };

  return (
    <>
      <button
        type="button"
        disabled={listening}
        aria-label={listening ? strings.listening.en : label.en}
        onClick={press}
        className={`${button(variant, "lg")} w-full ${listening ? "animate-pulse motion-reduce:animate-none" : ""}`}
      >
        <Icon name="mic" />
        <Bi label={listening ? strings.listening : label} />
      </button>
      <Dialog open={help} onClose={() => setHelp(false)} title={strings.micHelpTitle.en}>
        <p className="text-base">
          <BiText text={strings.micHelpBody} />
        </p>
        <p className="mt-2 text-base text-stone-600 dark:text-stone-400">
          <BiText text={strings.micHelpSkip} />
        </p>
        <button type="button" onClick={understood} className={`${button("primary")} mt-4 w-full`}>
          <Bi label={strings.gotIt} />
        </button>
      </Dialog>
    </>
  );
}
