"use client";

import { useEffect, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Activity } from "@/content/types";
import { useLearnIn, useSettings } from "@/lib/settings-store";
import { speak, stopSpeaking } from "@/lib/speak";
import { strings } from "@/lib/strings";
import { Bubble } from "./Bubble";
import { Narrate } from "./Narrate";
import { BottomBar, MainButton } from "./parts";
import { Question } from "./Question";

type DialogueActivity = Extract<Activity, { type: "dialogue" }>;

export const LINE_PAUSE_MS = 500;

/**
 * Two people talking: the lines play one after another (speaker B in a second voice) and each bubble appears as its
 * line plays. With Auto-play off all bubbles show at once and "Replay" plays them. Then the questions, one at a time.
 */
export function Dialogue({ activity, onNext }: { activity: DialogueActivity; onAnswer?: (correct: boolean) => void; onNext: () => void }) {
  const { lines, questions } = activity;
  const learnIn = useLearnIn();
  const settings = useSettings();
  const [asking, setAsking] = useState<number | null>(null); // index of the question, null while still listening
  // `cursor` = the line being read; undefined until the learner acts (then Auto-play decides), null when stopped.
  const [cursor, setCursor] = useState<number | null | undefined>(undefined);
  const [run, setRun] = useState(0); // a replay while the cursor is already 0 still restarts the effect
  const at = cursor === undefined ? (settings?.autoPlay === true ? 0 : null) : cursor;
  const playing = at !== null && at < lines.length ? at : null;
  const visible = playing === null ? lines.length : playing + 1;
  const listening = playing !== null;
  const question = asking === null ? undefined : questions[asking];

  useEffect(() => {
    if (playing === null) return;
    const line = lines[playing];
    let pause: ReturnType<typeof setTimeout> | undefined;
    speak(line.en, { voice: line.voice, onEnd: () => (pause = setTimeout(() => setCursor(playing + 1), LINE_PAUSE_MS)) });
    return () => clearTimeout(pause);
  }, [playing, run, lines]);

  useEffect(() => stopSpeaking, []);

  const replay = () => {
    setCursor(0);
    setRun((r) => r + 1);
  };

  const startQuestions = () => {
    stopSpeaking();
    setCursor(null);
    if (questions.length === 0) onNext();
    else setAsking(0);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">
          <BiText text={activity.title} />
        </h1>
        <div className="flex flex-col gap-3" aria-label={activity.title[learnIn]}>
          {lines.slice(0, visible).map((line, i) => (
            <Bubble key={i} side={line.voice === "b" ? "right" : "left"} name={<BiText text={line.speaker} />} active={playing === i}>
              <p className="flex flex-wrap items-center gap-x-1">
                <span>{line.en}</span>
                {!listening && <Narrate text={line.en} voice={line.voice} />}
              </p>
              {learnIn === "te" && (
                <p lang="te" className="mt-1 text-base opacity-80">
                  {line.te}
                </p>
              )}
            </Bubble>
          ))}
        </div>
        {asking !== null && (
          <p className="pt-2 text-sm font-semibold text-stone-600 dark:text-stone-400">
            {asking + 1} / {questions.length}
          </p>
        )}
      </div>

      {question ? (
        <Question
          key={asking}
          options={question.options}
          answer={question.answer}
          answerText={question.options[question.answer]}
          onAnswer={() => {}}
          onNext={() => (asking !== null && asking + 1 < questions.length ? setAsking(asking + 1) : onNext())}
        >
          <p className="text-xl font-semibold">
            <BiText text={question.prompt} />
          </p>
        </Question>
      ) : (
        <BottomBar>
          {!listening && (
            <button type="button" onClick={replay} className={`${button("secondary", "lg")} w-full`}>
              <Icon name="speaker" />
              <Bi label={strings.replay} />
            </button>
          )}
          <MainButton label={strings.continue} onClick={startQuestions} />
        </BottomBar>
      )}
    </>
  );
}
