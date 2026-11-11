"use client";

import { useEffect, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { ContentText } from "@/components/ui/ContentText";
import { button, inlineListenButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { card, cardSnug } from "@/components/ui/card";
import type { Activity } from "@/content/types";
import { useLearnIn, useSettings } from "@/lib/settings-store";
import { speak, stopSpeaking } from "@/lib/speak";
import { fill, strings } from "@/lib/strings";
import { accentOf, isManVoice } from "@/learning/audio-manifest";
import { AccentLabel } from "./Accent";
import { Bubble } from "./Bubble";
import { ListenInline } from "./Narrate";
import { BottomBar, MainButton } from "./parts";
import { Question } from "./Question";
import { MeaningToggle } from "./RolePlay";

type DialogueActivity = Extract<Activity, { type: "dialogue" }>;
type Line = DialogueActivity["lines"][number];

export const LINE_PAUSE_MS = 500;

/** The two (or more) people talking, in order of their first line. */
function speakersOf(lines: Line[]): Line["speaker"][] {
  const seen = new Map<string, Line["speaker"]>();
  for (const line of lines) if (!seen.has(line.speaker.en)) seen.set(line.speaker.en, line.speaker);
  return [...seen.values()];
}

/** Who is talking while the words are hidden: a round avatar per person, the speaking one ringed, and a sound wave under them. */
function Speakers({ lines, playing }: { lines: Line[]; playing: number | null }) {
  const active = playing === null ? null : lines[playing].speaker.en;
  return (
    <div className="flex flex-col items-center gap-4 py-4" aria-hidden="true">
      <div className="flex justify-center gap-12">
        {speakersOf(lines).map((person) => {
          const on = person.en === active;
          return (
            <div key={person.en} className="flex flex-col items-center gap-2">
              <span
                className={`font-display flex size-20 items-center justify-center rounded-full text-3xl font-bold transition-shadow duration-200 motion-reduce:transition-none ${
                  on ? "bg-brand-soft text-brand-ink ring-4 ring-brand ring-offset-4 ring-offset-page" : "bg-accent-soft text-accent-ink"
                }`}
              >
                {person.en.trim().charAt(0).toUpperCase()}
              </span>
              <span className="text-lg font-semibold text-ink">{person.en}</span>
              <span className={`flex h-6 items-center gap-1 ${on ? "" : "invisible"}`}>
                {[10, 18, 26, 14, 22, 12, 8].map((h, i) => (
                  <span key={i} className="w-1 animate-pulse rounded-full bg-brand motion-reduce:animate-none" style={{ height: h, animationDelay: `${i * 90}ms` }} />
                ))}
              </span>
            </div>
          );
        })}
      </div>
      {playing !== null && (
        <>
          <p className="text-base font-semibold text-ink-2">{fill(strings.lineOf, { n: playing + 1, total: lines.length }).en}</p>
          <div className="flex gap-1.5">
            {lines.map((_, i) => (
              <span key={i} className={`size-2.5 rounded-full ${i <= playing ? "bg-brand" : "bg-line"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/** One line once the words are shown: its Listen (and Slow) and, in Telugu mode, "అ" for its meaning, on the name row. */
function LineBubble({ line, active, withAccents }: { line: Line; active: boolean; withAccents: boolean }) {
  const learnIn = useLearnIn();
  const [meaning, setMeaning] = useState(false);
  const man = isManVoice(line.voice);
  return (
    <Bubble
      side={man ? "right" : "left"}
      name={
        <span className="flex items-center gap-2.5">
          {line.speaker.en}
          <AccentLabel voice={line.voice} withAccents={withAccents} />
          <span className="inline-flex items-center gap-2.5 text-lg font-normal">
            <ListenInline read={[line.en]} voice={line.voice} slow place="row" />
            {learnIn === "te" && <MeaningToggle on={meaning} onToggle={() => setMeaning((m) => !m)} />}
          </span>
        </span>
      }
      initial={man ? undefined : line.speaker.en.trim().charAt(0).toUpperCase()}
      active={active}
    >
      <p>{line.en}</p>
      {meaning && learnIn === "te" && (
        <p lang="te" className="mt-1 text-base opacity-80">
          {line.te}
        </p>
      )}
    </Bubble>
  );
}

/**
 * Two people talking, heard before it is read (content review, 2026-11-09): the lines play one after another (each
 * speaker in their own voice) while only who is speaking shows; question 1 (a big-picture one) is answered by ear,
 * with "Listen again"; then the words appear for the detail questions. With Auto-play off the talk starts on "Play".
 */
export function Dialogue({ activity, onNext }: { activity: DialogueActivity; onAnswer?: (correct: boolean) => void; onNext: () => void }) {
  const { lines, questions } = activity;
  const settings = useSettings();
  const [asking, setAsking] = useState<number | null>(null); // index of the question, null while still listening
  const [shown, setShown] = useState(false); // the words are shown (after question 1)
  // `cursor` = the line being read; undefined until the learner acts (then Auto-play decides), null when stopped.
  const [cursor, setCursor] = useState<number | null | undefined>(undefined);
  const [run, setRun] = useState(0); // a replay while the cursor is already 0 still restarts the effect
  const [heard, setHeard] = useState(false); // the whole talk has played once
  const at = cursor === undefined ? (settings?.autoPlay === true ? 0 : null) : cursor;
  const playing = at !== null && at < lines.length ? at : null;
  const question = asking === null ? undefined : questions[asking];
  const withAccents = lines.some((line) => accentOf(line.voice) !== null); // an accent lesson names every line's accent

  useEffect(() => {
    if (playing === null) return;
    const line = lines[playing];
    let pause: ReturnType<typeof setTimeout> | undefined;
    speak(line.en, {
      voice: line.voice,
      onEnd: () =>
        (pause = setTimeout(() => {
          if (playing + 1 >= lines.length) setHeard(true);
          setCursor(playing + 1);
        }, LINE_PAUSE_MS)),
    });
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
    if (questions.length === 0) {
      setShown(true);
      return;
    }
    setAsking(0);
  };

  const afterQuestion = () => {
    if (asking === null) return;
    setShown(true);
    if (asking + 1 < questions.length) setAsking(asking + 1);
    else setAsking(questions.length); // all asked: the words stay, Continue goes on
  };

  const header = (
    <div className={`${card} flex items-center gap-4`}>
      <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
        <Icon name="headphones" className="size-7" />
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <p className="text-base font-semibold text-brand">
          {asking === 0 && !shown ? fill(strings.questionByEar, { total: questions.length }).en : <Bi label={strings.dialogueListen} className="items-start" />}
        </p>
        <h1 className="font-display text-2xl leading-tight font-semibold text-ink">{activity.title.en}</h1>
      </div>
    </div>
  );

  // 1 · Listening: no words, only who is speaking.
  if (asking === null && !shown)
    return (
      <>
        <div className="flex flex-col gap-4">
          {header}
          <Speakers lines={lines} playing={playing} />
        </div>
        <BottomBar>
          {playing === null && (
            <button type="button" onClick={replay} className={`${button("secondary", "lg")} w-full`}>
              <Icon name="speaker" />
              <Bi label={heard || cursor !== undefined ? strings.replay : strings.listen} />
            </button>
          )}
          <MainButton label={strings.continue} onClick={startQuestions} />
        </BottomBar>
      </>
    );

  // 2 · Question 1, by ear (still no words), then 3 · the words and the detail questions.
  return (
    <>
      <div className="flex flex-col gap-4">
        {header}
        {shown && (
          <div className="flex flex-col gap-3" aria-label={activity.title.en}>
            {lines.map((line, i) => (
              <LineBubble key={i} line={line} active={playing === i} withAccents={withAccents} />
            ))}
          </div>
        )}
        {!shown && (
          <div className={`${cardSnug} flex items-center gap-2 self-start`}>
            <button type="button" onClick={replay} className={`${inlineListenButton} gap-2 text-lg font-semibold`}>
              <Icon name="speaker" className="size-[1.15em]" />
              <Bi label={strings.listenAgain} />
            </button>
          </div>
        )}
        {question && shown && (
          <p className="pt-2 text-base font-semibold text-brand">
            {(asking ?? 0) + 1} / {questions.length}
          </p>
        )}
      </div>

      {question ? (
        <Question key={asking} options={question.options} answer={question.answer} answerText={question.options[question.answer]} onAnswer={() => {}} onNext={afterQuestion}>
          <p className="text-xl font-semibold">
            <ContentText text={question.prompt} />
          </p>
        </Question>
      ) : (
        <BottomBar>
          <MainButton label={strings.continue} onClick={onNext} />
        </BottomBar>
      )}
    </>
  );
}
