"use client";

import { useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { button, focusRing } from "@/components/ui/button";
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
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          disabled={listening}
          aria-label={listening ? strings.listening.en : label.en}
          onClick={press}
          className={`relative flex size-22 items-center justify-center rounded-full transition-[background-color,transform] duration-150 active:scale-95 disabled:pointer-events-none motion-reduce:active:scale-100 ${focusRing} ${
            listening
              ? "animate-[listen-pulse_1.2s_ease-out_infinite] bg-accent text-on-accent motion-reduce:animate-none"
              : variant === "primary"
                ? "bg-brand-fill text-on-brand shadow-[0_14px_30px_-12px_var(--brand)] ring-8 ring-brand-soft"
                : "border-2 border-line-strong bg-surface text-brand"
          }`}
        >
          <Icon name="mic" className="size-10" />
        </button>
        <span aria-hidden="true" className={`text-base font-semibold ${listening ? "text-accent-ink" : "text-ink"}`}>
          <Bi label={listening ? strings.listening : label} />
        </span>
      </div>
      <Dialog open={help} onClose={() => setHelp(false)} title={strings.micHelpTitle.en}>
        <p className="text-base">
          <BiText text={strings.micHelpBody} />
        </p>
        <p className="mt-2 text-base text-ink-2">
          <BiText text={strings.micHelpSkip} />
        </p>
        <button type="button" onClick={understood} className={`${button("primary")} mt-4 w-full`}>
          <Bi label={strings.gotIt} />
        </button>
      </Dialog>
    </>
  );
}
