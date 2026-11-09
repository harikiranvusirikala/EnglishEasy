"use client";

import { useEffect, useRef, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button, pillButton } from "@/components/ui/button";
import { judgeSpeech, type SpeechJudgement } from "@/learning/speech-match";
import { listen, stopListening, useListenSupport } from "@/lib/listen";
import { useSettings } from "@/lib/settings-store";
import { strings } from "@/lib/strings";
import { MicButton } from "./MicButton";
import { ListenInline } from "./Narrate";
import { BottomBar, FeedbackPanel, MainButton, Text, toneOf } from "./parts";

type Note = "denied" | "unsupported";
export const TRIES = 2;

/**
 * Speaking never blocks progress: the learner is choosing instead when they asked to ("Choose instead"), when the
 * microphone was refused, when the phone cannot listen, or when "I can't speak now" is on.
 */
export function useChoosing() {
  const settings = useSettings();
  const support = useListenSupport();
  const [chosen, setChosen] = useState(false);
  const [reason, setReason] = useState<Note | null>(null);
  const note: Note | null = reason ?? (support === false ? "unsupported" : null);
  return {
    choosing: chosen || note !== null || settings?.noSpeaking === true,
    note,
    choose: (why?: Note) => {
      setChosen(true);
      if (why) setReason(why);
    },
  };
}

/** The short note above a choosing activity when speaking was not possible. */
export function ChooseNote({ note }: { note: Note | null }) {
  if (!note) return null;
  return (
    <p className="flex items-start gap-2 rounded-2xl border border-almost-line bg-almost-soft p-4 text-base text-almost">
      <BiText text={note === "denied" ? strings.micDeniedNote : strings.micUnsupportedNote} />
    </p>
  );
}

type Outcome = SpeechJudgement | "none";

/**
 * The bottom of a speaking activity: the microphone, then Great / Good / Try again with what was heard. A good enough
 * answer continues; after two poor tries "Choose instead" becomes the main button (it is always offered).
 */
export function SpeakBar({
  expected,
  onAnswer,
  onNext,
  onChoose,
}: {
  expected: string[];
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  onChoose: (reason?: Note) => void;
}) {
  const [listening, setListening] = useState(false);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [tries, setTries] = useState(0);
  const gone = useRef(false);

  useEffect(() => {
    gone.current = false;
    return () => {
      gone.current = true;
      stopListening();
    };
  }, []);

  const start = async () => {
    setListening(true);
    setOutcome(null);
    const result = await listen();
    if (gone.current) return;
    setListening(false);
    if (result.kind === "denied" || result.kind === "unsupported") return onChoose(result.kind);
    if (result.kind === "no-speech") return setOutcome("none");
    const judged = judgeSpeech(expected, result.transcripts);
    setTries((t) => t + 1);
    onAnswer(judged.level !== "retry");
    setOutcome(judged);
  };

  const accepted = outcome !== null && outcome !== "none" && outcome.level !== "retry";
  const spent = tries >= TRIES && !accepted;

  const kind = outcome === null ? null : outcome === "none" || !accepted ? "almost" : "correct";

  return (
    <BottomBar tone={toneOf(kind)}>
      {outcome === "none" && (
        <FeedbackPanel kind="almost" label={strings.tryAgain}>
          <p className="text-base">
            <BiText text={strings.micNoSpeech} />
          </p>
        </FeedbackPanel>
      )}
      {outcome !== null && outcome !== "none" && (
        <FeedbackPanel kind={accepted ? "correct" : "almost"} label={outcome.level === "great" ? strings.great : outcome.level === "good" ? strings.good : strings.tryAgain}>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg">
            <span>{strings.youSaid.en}:</span>
            <Text className="font-semibold">{outcome.heard}</Text>
          </p>
          {(accepted || spent) && (
            <p className="text-lg">
              <span>{strings.youCouldSay.en}: </span>
              <Text className="font-semibold">{expected[outcome.best]}</Text>
              <ListenInline read={[expected[outcome.best]]} auto={[expected[outcome.best]]} />
            </p>
          )}
        </FeedbackPanel>
      )}
      {accepted && <MainButton label={strings.continue} onClick={onNext} tone="good" />}
      {!accepted && spent && (
        <button type="button" onClick={() => onChoose()} className={`${button("primary", "lg")} w-full`}>
          <Bi label={strings.chooseInstead} />
        </button>
      )}
      {!accepted && (
        // One row (owner, 2026-11-09): "Choose instead" beside a 76 px microphone, so the bar stays short.
        // Wraps to two rows only when the text is too big for one (A++ on a small phone).
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {!spent && (
            <button type="button" onClick={() => onChoose()} className={pillButton}>
              <Bi label={strings.chooseInstead} />
            </button>
          )}
          <MicButton listening={listening} onStart={start} size="md" variant={spent ? "secondary" : "primary"} label={tries > 0 || outcome === "none" ? strings.speakAgain : strings.speak} />
        </div>
      )}
    </BottomBar>
  );
}
