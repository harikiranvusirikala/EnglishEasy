"use client";

import { useEffect } from "react";
import { iconButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { getSettings, useLearnIn, useSettings } from "@/lib/settings-store";
import { hasTeluguVoice, isAndroid, narrate, useVoices, type SpeakOptions } from "@/lib/speak";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { showTeluguHelp, TELUGU_HELP_ID } from "./TeluguVoiceHelp";

const HAS_TELUGU = /[ఀ-౿]/;

/**
 * 🔊 (normal) and 🐢 (slow) for a text. `text` is read aloud: a plain string, or a Bi whose half follows Learn in.
 * Mixed Telugu–English text is read with two voices. With `auto`, it plays by itself when it appears (if Auto-play is on).
 */
export function Narrate({ text, auto = false, voice }: { text: string | BiLabel; auto?: boolean; voice?: SpeakOptions["voice"] }) {
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

  return (
    <span className="inline-flex items-center" data-say={say}>
      <button type="button" disabled={voices === null} onClick={() => play(false)} aria-label={strings.listen.en} className={iconButton}>
        <Icon name="speaker" />
      </button>
      <button type="button" disabled={voices === null} onClick={() => play(true)} aria-label={strings.listenSlow.en} className={iconButton}>
        <Icon name="turtle" />
      </button>
    </span>
  );
}
