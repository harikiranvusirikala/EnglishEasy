"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLearnIn } from "@/lib/settings-store";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ContentText } from "@/components/ui/ContentText";
import { button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { card } from "@/components/ui/card";
import type { Activity } from "@/content/types";
import { shuffle } from "@/learning/shuffle";
import { scoreRolePlay, type TurnResult } from "@/learning/roleplay-score";
import { judgeSpeech } from "@/learning/speech-match";
import { listen, stopListening } from "@/lib/listen";
import { strings } from "@/lib/strings";
import { Bubble } from "./Bubble";
import { MicButton } from "./MicButton";
import { Narrate } from "./Narrate";
import { BottomBar, FeedbackPanel, Instruction, MainButton, OptionButton, Text } from "./parts";
import { RolePlaySummary } from "./RolePlaySummary";
import { ChooseNote, useChoosing } from "./SpeakFlow";

type RolePlayActivity = Extract<Activity, { type: "roleplay" }>;
type Reply = TurnResult & { text: string; better?: string };
type Miss = { heard: string | null }; // a spoken reply that was not understood (null: nothing heard)

/** A partner line with its Telugu meaning one tap away. The newest line plays by itself. */
function PartnerBubble({ name, english, telugu, auto }: { name: RolePlayActivity["partner"]; english: string; telugu: string; auto: boolean }) {
  const [meaning, setMeaning] = useState(false);
  const learnIn = useLearnIn(); // the Telugu meaning is offered only to learners who learn in Telugu
  return (
    <Bubble side="left" name={name.en} initial={name.en.trim().charAt(0).toUpperCase()}>
      <p>{english}</p>
      {meaning && learnIn === "te" && (
        <p lang="te" className="mt-1 text-base text-ink-2">
          {telugu}
        </p>
      )}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Narrate text={english} auto={auto} variant="compact" slow />
        {learnIn === "te" && <button type="button" onClick={() => setMeaning((m) => !m)} aria-pressed={meaning} className="min-h-12 rounded-full px-3 text-base font-semibold text-brand transition-colors hover:bg-brand-soft">
          <Bi label={meaning ? strings.hideTeluguMeaning : strings.teluguMeaning} />
        </button>}
      </div>
    </Bubble>
  );
}

/**
 * A scripted conversation (no AI): the partner's line plays, the learner speaks a reply or taps one, a not-good reply
 * gets a gentle correction, and the conversation goes on. After the last turn comes the summary.
 */
export function RolePlay({ activity, onNext }: { activity: RolePlayActivity; onAnswer?: (correct: boolean) => void; onNext: () => void }) {
  const { turns } = activity;
  const { choosing, note, choose } = useChoosing();
  const [turn, setTurn] = useState(0);
  const [log, setLog] = useState<Reply[]>([]);
  const [summary, setSummary] = useState(false);
  const [hint, setHint] = useState<number | null>(null);
  const [miss, setMiss] = useState<Miss | null>(null);
  const [listening, setListening] = useState(false);
  const gone = useRef(false);
  const end = useRef<HTMLDivElement>(null);

  const replied = log.length > turn; // this turn has its reply
  const last = turn === turns.length - 1;
  const current = turns[turn];
  const order = useMemo(() => shuffle(current.replies.map((_, i) => i), `${activity.id}.${turn}`), [activity.id, current, turn]);

  useEffect(() => {
    gone.current = false;
    return () => {
      gone.current = true;
      stopListening();
    };
  }, []);

  useEffect(() => {
    end.current?.scrollIntoView?.({ block: "nearest" });
  }, [turn, log.length, hint, miss]);

  const reply = (index: number, speech?: number) => {
    const chosen = current.replies[index];
    const better = chosen.good ? undefined : current.replies.find((r) => r.good)?.say;
    setLog((l) => [...l, { text: chosen.say, good: chosen.good, skill: chosen.skill, speech, better }]);
    setMiss(null);
  };

  const speak = async () => {
    setListening(true);
    setMiss(null);
    const result = await listen();
    if (gone.current) return;
    setListening(false);
    if (result.kind === "denied" || result.kind === "unsupported") return choose(result.kind);
    if (result.kind === "no-speech") return setMiss({ heard: null });
    const judged = judgeSpeech(current.replies.map((r) => r.say), result.transcripts);
    if (judged.level === "retry") return setMiss({ heard: judged.heard });
    reply(judged.best, judged.score);
  };

  const forward = () => {
    if (last) setSummary(true);
    else {
      setTurn((t) => t + 1);
      setHint(null);
    }
  };

  if (summary)
    return <RolePlaySummary roleplay={activity} score={scoreRolePlay(activity, log)} onNext={onNext} />;

  const lastReply = log[turn];
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className={`${card} flex items-start gap-4`}>
          <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
            <Icon name="chat" className="size-7" />
          </span>
          <div className="flex min-w-0 flex-col gap-1">
            <h1 className="font-display text-2xl leading-tight font-semibold text-ink">
              {activity.title.en}
            </h1>
            <p className="text-base text-ink-2">
              <ContentText text={activity.scene} />
            </p>
            <p className="text-base text-ink">
              {strings.rolePlayYouAre.en} <span className="font-semibold">{activity.partner.en}</span>
            </p>
          </div>
        </div>

        <ChooseNote note={note} />

        {turns.slice(0, turn + 1).map((t, i) => (
          <div key={i} className="flex flex-col gap-3">
            <PartnerBubble name={activity.partner} english={t.partner} telugu={t.te} auto={i === turn} />
            {log[i] && (
              <>
                <Bubble side="right" name={strings.youReplied.en}>
                  <p className="flex items-center gap-2">
                    <Icon name={log[i].good ? "check" : "retry"} className="size-5 shrink-0" strokeWidth={2.6} />
                    <span>{log[i].text}</span>
                  </p>
                </Bubble>
                {i < turn && log[i].better && (
                  <p className="ml-auto max-w-[85%] rounded-2xl bg-almost-soft px-4 py-2 text-right text-base text-almost">
                    {strings.betterReply.en}: <span className="font-semibold">{log[i].better}</span>
                  </p>
                )}
              </>
            )}
          </div>
        ))}

        {!replied && hint === turn && (
          <p className="flex items-start gap-2 rounded-2xl bg-accent-soft px-4 py-3 text-base text-accent-ink">
            <Icon name="hint" className="mt-0.5 size-5 shrink-0" />
            <span className="flex-1">
              <ContentText text={current.hint} />
            </span>
          </p>
        )}

        {!replied && (
          <div role="group" aria-label={strings.replyPrompt.en} className="flex flex-col gap-3 pt-2">
            <Instruction>
              <BiText text={strings.replyPrompt} />
            </Instruction>
            {order.map((i) => (
              <OptionButton key={i} text={current.replies[i].say} state="idle" onClick={() => reply(i)} />
            ))}
          </div>
        )}
        <div ref={end} />
      </div>

      <BottomBar tone={replied && lastReply ? (lastReply.good ? "good" : "almost") : miss ? "almost" : "neutral"}>
        {replied && lastReply && (
          <FeedbackPanel kind={lastReply.good ? "correct" : "almost"} label={lastReply.good ? strings.good : strings.almost}>
            {lastReply.better && (
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg">
                <span>{strings.betterReply.en}:</span>
                <Text className="font-semibold">{lastReply.better}</Text>
                <Narrate text={lastReply.better} auto variant="compact" />
              </p>
            )}
          </FeedbackPanel>
        )}
        {replied && <MainButton label={last ? strings.seeSummary : strings.continue} onClick={forward} tone={lastReply?.good ? "good" : "almost"} />}

        {!replied && miss && (
          <FeedbackPanel kind="almost" label={strings.tryAgain}>
            <p className="text-base">
              {miss.heard === null ? (
                <BiText text={strings.micNoSpeech} />
              ) : (
                <>
                  {strings.youSaid.en}: <Text className="font-semibold">{miss.heard}</Text>
                </>
              )}
            </p>
          </FeedbackPanel>
        )}
        {!replied && !choosing && <MicButton listening={listening} onStart={speak} label={miss ? strings.speakAgain : strings.speak} />}
        {!replied && (
          <button type="button" onClick={() => setHint((h) => (h === turn ? null : turn))} aria-expanded={hint === turn} className={`${button("ghost")} self-center`}>
            <Icon name="hint" />
            <Bi label={strings.hint} />
          </button>
        )}
      </BottomBar>
    </>
  );
}
