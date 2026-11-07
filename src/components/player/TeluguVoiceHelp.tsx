"use client";

import { useSyncExternalStore } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { strings } from "@/lib/strings";

export const TELUGU_HELP_ID = "telugu-voice-help";
const STEPS = [strings.voiceTeluguHelpStep1, strings.voiceTeluguHelpStep2, strings.voiceTeluguHelpStep3];

/** How to install the Telugu voice on Android: the steps, as a card in Settings or inside the dialog. */
export function TeluguVoiceHelp({ framed = true }: { framed?: boolean }) {
  return (
    <div className={`${framed ? card : ""} flex flex-col gap-2`}>
      {framed && (
        <p className="text-lg font-semibold">
          <Bi label={strings.voiceTeluguHelpTitle} className="items-start" />
        </p>
      )}
      <p className="text-base">
        <BiText text={strings.voiceTeluguHelpIntro} />
      </p>
      <ol className="flex list-decimal flex-col gap-1 ps-6 text-base">
        {STEPS.map((step, i) => (
          <li key={i}>
            <BiText text={step} />
          </li>
        ))}
      </ol>
      <p className="text-base">
        <BiText text={strings.voiceTeluguHelpAfter} />
      </p>
    </div>
  );
}

// One dialog for the whole app (a <dialog> inside every 🔊 would sit inside paragraphs): 🔊 opens it, "Got it" closes it.
let open = false;
const listeners = new Set<() => void>();
const set = (value: boolean) => {
  open = value;
  listeners.forEach((listener) => listener());
};
export const showTeluguHelp = () => set(true);

export function TeluguHelpDialog({ onDismiss }: { onDismiss: () => void }) {
  const isOpen = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => void listeners.delete(listener);
    },
    () => open,
    () => false,
  );
  const close = () => {
    set(false);
    onDismiss();
  };
  return (
    <Dialog open={isOpen} onClose={close} title={strings.voiceTeluguHelpTitle.en}>
      <TeluguVoiceHelp framed={false} />
      <button type="button" onClick={close} className={`${button("primary")} mt-4 w-full`}>
        <Bi label={strings.gotIt} />
      </button>
    </Dialog>
  );
}
