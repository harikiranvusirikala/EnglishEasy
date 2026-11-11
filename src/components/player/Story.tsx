"use client";

import { useEffect, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { ContentText } from "@/components/ui/ContentText";
import { button, inlineListenButton, listenButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { card, cardSnug } from "@/components/ui/card";
import type { Activity } from "@/content/types";
import { useLearnIn, useSettings } from "@/lib/settings-store";
import { speak, stopSpeaking } from "@/lib/speak";
import { fill, strings } from "@/lib/strings";
import { AccentLabel } from "./Accent";
import { LINE_PAUSE_MS } from "./Dialogue";
import { ListenInline } from "./Narrate";
import { BottomBar, MainButton } from "./parts";
import { Question } from "./Question";
import { MeaningToggle } from "./RolePlay";

type StoryActivity = Extract<Activity, { type: "story" }>;

/** The teller while the words are hidden: their avatar (ringed while a part plays), name, a sound wave, and "Part 2 of 5". */
function Teller({ activity, playing }: { activity: StoryActivity; playing: number | null }) {
  const on = playing !== null;
  return (
    <div className="flex items-center justify-center gap-5 py-2" aria-hidden="true">
      <span
        className={`font-display flex size-20 shrink-0 items-center justify-center rounded-full text-3xl font-bold transition-shadow duration-200 motion-reduce:transition-none ${
          on ? "bg-brand-soft text-brand-ink ring-4 ring-brand ring-offset-4 ring-offset-page" : "bg-accent-soft text-accent-ink"
        }`}
      >
        {activity.teller.en.trim().charAt(0).toUpperCase()}
      </span>
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className="flex items-center gap-2 text-lg font-semibold text-ink">
          {activity.teller.en}
          <AccentLabel voice={activity.voice} />
        </span>
        <span className={`flex h-6 items-center gap-1 ${on ? "" : "invisible"}`}>
          {[10, 18, 26, 14, 22, 12, 8].map((h, i) => (
            <span key={i} className="w-1 animate-pulse rounded-full bg-brand motion-reduce:animate-none" style={{ height: h, animationDelay: `${i * 90}ms` }} />
          ))}
        </span>
        <div className={`flex flex-col gap-1.5 ${on ? "" : "invisible"}`}>
          <p className="text-base font-semibold text-ink-2">{fill(strings.storyPartOf, { n: (playing ?? 0) + 1, total: activity.parts.length }).en}</p>
          <div className="flex gap-1.5">
            {activity.parts.map((_, i) => (
              <span key={i} className={`size-2.5 rounded-full ${playing !== null && i <= playing ? "bg-brand" : "bg-line"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** One part once the words are shown: a paragraph with its Listen (and Slow) and, in Telugu mode, "అ" for its meaning. */
function Part({ part, voice, active }: { part: StoryActivity["parts"][number]; voice: StoryActivity["voice"]; active: boolean }) {
  const learnIn = useLearnIn();
  const [meaning, setMeaning] = useState(false);
  return (
    <div className={`${cardSnug} flex flex-col gap-2 ${active ? "ring-[3px] ring-accent" : ""}`}>
      <p className="text-xl leading-relaxed text-ink">
        {part.en}
        <span className="ml-2 inline-flex items-center gap-2.5 align-middle text-lg">
          <ListenInline read={[part.en]} voice={voice} slow place="row" />
          {learnIn === "te" && <MeaningToggle on={meaning} onToggle={() => setMeaning((m) => !m)} />}
        </span>
      </p>
      {meaning && learnIn === "te" && (
        <p lang="te" className="text-base text-ink-2">
          {part.te}
        </p>
      )}
    </div>
  );
}

/**
 * Listen to a story (CURRICULUM §1a; owner, 2026-11-11): one teller, heard before it is read. The parts play one after
 * another (Slow plays them slowly) while only the teller shows; question 1 (the big picture) is answered by ear, with
 * "Listen again"; then the story appears as paragraphs for the detail questions. Like a dialogue, it is not scored.
 */
export function Story({ activity, onNext }: { activity: StoryActivity; onNext: () => void }) {
  const { parts, questions, voice } = activity;
  const settings = useSettings();
  const [asking, setAsking] = useState<number | null>(null);
  const [shown, setShown] = useState(false);
  const [cursor, setCursor] = useState<number | null | undefined>(undefined);
  const [run, setRun] = useState(0);
  const [slow, setSlow] = useState(false);
  const [heard, setHeard] = useState(false);
  const [resumeAt, setResumeAt] = useState<number | null>(null);
  const at = cursor === undefined ? (settings?.autoPlay === true ? 0 : null) : cursor;
  const playing = at !== null && at < parts.length ? at : null;
  const question = asking === null ? undefined : questions[asking];

  useEffect(() => {
    if (playing === null) return;
    let pause: ReturnType<typeof setTimeout> | undefined;
    speak(parts[playing].en, {
      voice,
      slow,
      onEnd: () =>
        (pause = setTimeout(() => {
          if (playing + 1 >= parts.length) {
            setHeard(true);
            setResumeAt(null);
          }
          setCursor(playing + 1);
        }, LINE_PAUSE_MS)),
    });
    return () => clearTimeout(pause);
  }, [playing, run, parts, voice, slow]);

  useEffect(() => stopSpeaking, []);

  // Play goes on from where Pause stopped (or from the start once the whole story was heard); Slow re-reads the current part slowly.
  const play = (fromStart: boolean) => {
    setCursor(fromStart ? 0 : (resumeAt ?? 0));
    setRun((r) => r + 1);
  };
  const pause = () => {
    stopSpeaking();
    setResumeAt(playing);
    setCursor(null);
  };

  const startQuestions = () => {
    stopSpeaking();
    setCursor(null);
    if (questions.length === 0) return setShown(true);
    setAsking(0);
  };
  const afterQuestion = () => {
    if (asking === null) return;
    setShown(true);
    setAsking(asking + 1 < questions.length ? asking + 1 : questions.length);
  };

  const header = (
    <div className={`${card} flex items-center gap-4`}>
      <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
        <Icon name="book" className="size-7" />
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <p className="text-base font-semibold text-brand">
          {asking === 0 && !shown ? fill(strings.questionByEar, { total: questions.length }).en : <Bi label={strings.storyListen} className="items-start" />}
        </p>
        <h1 className="font-display text-2xl leading-tight font-semibold text-ink">{activity.title.en}</h1>
      </div>
    </div>
  );

  // 1 · Listening: no words, only the teller; play / pause and Slow.
  if (asking === null && !shown)
    return (
      <>
        <div className="flex flex-col gap-4">
          {header}
          <Teller activity={activity} playing={playing} />
        </div>
        <BottomBar>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setSlow((on) => !on)} aria-pressed={slow} aria-label={strings.listenSlow.en} title={strings.listenSlow.en} className={`${listenButton("lg")} ${slow ? "ring-4 ring-brand" : ""}`}>
              <Icon name="turtle" className="size-7" />
            </button>
            {playing === null ? (
              <button type="button" onClick={() => play(resumeAt === null)} className={`${button("secondary", "lg")} flex-1`}>
                <Icon name="speaker" />
                <Bi label={resumeAt !== null ? strings.resume : heard ? strings.replay : strings.listen} />
              </button>
            ) : (
              <button type="button" onClick={pause} className={`${button("secondary", "lg")} flex-1`}>
                <Bi label={strings.pause} />
              </button>
            )}
          </div>
          <MainButton label={strings.continue} onClick={startQuestions} />
        </BottomBar>
      </>
    );

  // 2 · Question 1, by ear, then 3 · the story as paragraphs and the detail questions.
  return (
    <>
      <div className="flex flex-col gap-4">
        {header}
        {shown && (
          <div className="flex flex-col gap-3" aria-label={activity.title.en}>
            <p className="text-base font-semibold text-ink-2">{fill(strings.storyTold, { name: activity.teller.en }).en}</p>
            {parts.map((part, i) => (
              <Part key={i} part={part} voice={voice} active={playing === i} />
            ))}
          </div>
        )}
        {!shown && (
          <div className={`${cardSnug} flex items-center gap-2 self-start`}>
            <button type="button" onClick={() => play(true)} className={`${inlineListenButton} gap-2 text-lg font-semibold`}>
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
