"use client";

import { useEffect } from "react";
import { listenButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { getSettings, useLearnIn, useSettings } from "@/lib/settings-store";
import { hasTeluguVoice, isAndroid, narrate, useVoices, type SpeakOptions } from "@/lib/speak";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { showTeluguHelp, TELUGU_HELP_ID } from "./TeluguVoiceHelp";

const HAS_TELUGU = /[ఀ-౿]/;

/**
 * Listen (normal) and Slow for a text. `text` is read aloud: a plain string, or a Bi whose half follows Learn in.
 * Mixed Telugu–English text is read with two voices. With `auto`, it plays by itself when it appears (if Auto-play is on).
 * Two round icon buttons (a speaker and a turtle; owner's choice: icons only). `variant="pill"` (the default) puts
 * them on their own line in a bigger size; `"compact"` keeps them inline for rows of sentences and chat bubbles.
 * Their names are "Listen" and "Listen slowly" (screen readers, tests, and the tooltip).
 */
export function Narrate({
  text,
  auto = false,
  voice,
  variant = "pill",
}: {
  text: string | BiLabel;
  auto?: boolean;
  voice?: SpeakOptions["voice"];
  variant?: "pill" | "compact";
}) {
  const learnIn = useLearnIn();
  const settings = useSettings();
  const voices = useVoices();
  const say = typeof text === "string" ? text : text[learnIn];
  const autoPlay = auto && settings?.autoPlay === true;

  useEffect(() => {
    if (autoPlay) narrate(say, { voice });
  }, [autoPlay, say, voice]);

  const play = (slow: boolean) => {
    narrate(say, { slow, voice });
    // Android phones usually have a Telugu voice that only needs installing: say how, once.
    if (HAS_TELUGU.test(say) && isAndroid() && !hasTeluguVoice() && !getSettings().dismissed.includes(TELUGU_HELP_ID)) showTeluguHelp();
  };

  const size = variant === "compact" ? "md" : "lg";
  return (
    <span className={variant === "compact" ? "inline-flex shrink-0 items-center gap-2 align-middle" : "mt-3 flex items-center gap-3"} data-say={say}>
      <button type="button" disabled={voices === null} onClick={() => play(false)} aria-label={strings.listen.en} title={strings.listen.en} className={listenButton(size)}>
        <Icon name="speaker" className={size === "lg" ? "size-7" : "size-6"} />
      </button>
      <button type="button" disabled={voices === null} onClick={() => play(true)} aria-label={strings.listenSlow.en} title={strings.listenSlow.en} className={listenButton(size)}>
        <Icon name="turtle" className={size === "lg" ? "size-7" : "size-6"} />
      </button>
    </span>
  );
}
