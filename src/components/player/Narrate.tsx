"use client";

import { useEffect } from "react";
import { inlineListenButton, listenButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { getSettings, useLearnIn, useSettings } from "@/lib/settings-store";
import { hasRecording, hasTeluguVoice, isAndroid, loadManifest, narrate, narrateAll, useVoices, type SpeakOptions } from "@/lib/speak";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { needsSlow } from "@/learning/complexity";
import { showTeluguHelp, TELUGU_HELP_ID } from "./TeluguVoiceHelp";

const HAS_TELUGU = /[ఀ-౿]/;

/**
 * Listen (normal) and Slow for a text. `text` is read aloud: a plain string, or a Bi whose half follows Learn in.
 * Mixed Telugu–English text is read with two voices. With `auto`, it plays by itself when it appears (if Auto-play is on).
 * Round icon buttons: Listen (a speaker), and with `slow` also Slow (a turtle) — owner's choice: icons only, Listen
 * only where it helps (the sentence to learn, the question, role play), Slow only where listening is the task. `variant="pill"` (the default) puts
 * them on their own line in a bigger size; `"compact"` keeps them inline for rows of sentences and chat bubbles.
 * Their names are "Listen" and "Listen slowly" (screen readers, tests, and the tooltip).
 */
export function Narrate({
  text,
  auto = false,
  voice,
  variant = "pill",
  slow = false,
}: {
  text: string | BiLabel;
  auto?: boolean;
  voice?: SpeakOptions["voice"];
  variant?: "pill" | "compact" | "hidden";
  /** Allow the Slow button (never on questions); it shows only when the sentence is medium or high complexity (`needsSlow`). */
  slow?: boolean;
}) {
  const learnIn = useLearnIn();
  const settings = useSettings();
  const voices = useVoices();
  const say = typeof text === "string" ? text : text[learnIn];
  const autoPlay = auto && settings?.autoPlay === true;

  useEffect(() => {
    void loadManifest(); // the recordings list, so the first tap already plays the recorded voice
  }, []);

  useEffect(() => {
    if (autoPlay) narrate(say, { voice });
  }, [autoPlay, say, voice]);

  const play = (slow: boolean) => {
    narrate(say, { slow, voice });
    // Android phones usually have a Telugu voice that only needs installing: say how, once.
    if (HAS_TELUGU.test(say) && !hasRecording(say, voice) && isAndroid() && !hasTeluguVoice() && !getSettings().dismissed.includes(TELUGU_HELP_ID)) showTeluguHelp();
  };

  // "hidden": only the auto-play (the screen has its own buttons, like the big Listen button).
  if (variant === "hidden") return <span hidden data-say={say} />;
  const size = variant === "compact" ? "md" : "lg";
  return (
    <span className={variant === "compact" ? "inline-flex shrink-0 items-center gap-2 align-middle" : "mt-3 flex items-center gap-3"} data-say={say}>
      <button type="button" disabled={voices === null} onClick={() => play(false)} aria-label={strings.listen.en} title={strings.listen.en} className={listenButton(size)}>
        <Icon name="speaker" className={size === "lg" ? "size-7" : "size-6"} />
      </button>
      {slow && needsSlow(say) && (
        <button type="button" disabled={voices === null} onClick={() => play(true)} aria-label={strings.listenSlow.en} title={strings.listenSlow.en} className={listenButton(size)}>
          <Icon name="turtle" className={size === "lg" ? "size-7" : "size-6"} />
        </button>
      )}
    </span>
  );
}

const PLACE = { end: "ml-1.5", start: "shrink-0", row: "" } as const;

/**
 * A text-sized Listen at the end of the line it reads (owner, 2026-11-09): the question's prompt, or the feedback's
 * line after Check. `read` plays in order on a tap (the sentence, then the reason); `auto` (if given) plays by itself
 * when it appears, with Auto-play on. `slow` adds a text-sized Slow when the first text needs it (`needsSlow`).
 * Bi texts follow Learn in. The icons look small, but each keeps a finger-sized tap area.
 */
export function ListenInline({
  read,
  auto,
  slow = false,
  place = "end",
  voice,
}: {
  read: (string | BiLabel)[];
  auto?: (string | BiLabel)[];
  slow?: boolean;
  /** "end": after the last word of the line; "start": at the start of a list row (its own column); "row": on a row of its own (a name row). */
  place?: "end" | "start" | "row";
  voice?: SpeakOptions["voice"];
}) {
  const learnIn = useLearnIn();
  const settings = useSettings();
  const voices = useVoices();
  const texts = read.map((t) => (typeof t === "string" ? t : t[learnIn]));
  const autoTexts = (auto ?? []).map((t) => (typeof t === "string" ? t : t[learnIn]));
  const autoKey = settings?.autoPlay === true ? autoTexts.join("\n") : "";

  useEffect(() => {
    void loadManifest();
  }, []);

  useEffect(() => {
    if (autoKey) narrateAll(autoKey.split("\n"), { voice });
  }, [autoKey, voice]);

  const play = (slowly: boolean) => {
    if (slowly) narrate(texts[0], { slow: true, voice });
    else narrateAll(texts, { voice });
    const telugu = texts.find((t) => HAS_TELUGU.test(t) && !hasRecording(t));
    if (telugu && isAndroid() && !hasTeluguVoice() && !getSettings().dismissed.includes(TELUGU_HELP_ID)) showTeluguHelp();
  };

  return (
    <span className={`inline-flex items-baseline gap-2 whitespace-nowrap ${PLACE[place]}`} data-say={texts.join(" | ")}>
      <button type="button" disabled={voices === null} onClick={() => play(false)} aria-label={strings.listen.en} title={strings.listen.en} className={inlineListenButton}>
        <Icon name="speaker" className="size-[1.15em]" />
      </button>
      {slow && needsSlow(texts[0]) && (
        <button type="button" disabled={voices === null} onClick={() => play(true)} aria-label={strings.listenSlow.en} title={strings.listenSlow.en} className={inlineListenButton}>
          <Icon name="turtle" className="size-[1.15em]" />
        </button>
      )}
    </span>
  );
}
