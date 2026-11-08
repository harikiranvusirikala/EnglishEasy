"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
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
import { BottomBar, FeedbackPanel, MainButton, OptionButton, Text } from "./parts";
import { RolePlaySummary } from "./RolePlaySummary";
import { ChooseNote, useChoosing } from "./SpeakFlow";

type RolePlayActivity = Extract<Activity, { type: "roleplay" }>;
type Reply = TurnResult & { text: string; better?: string };
type Miss = { heard: string | null }; // a spoken reply that was not understood (null: nothing heard)

/** A partner line with its Telugu meaning one tap away. The newest line plays by itself. */
function PartnerBubble({ name, english, telugu, auto }: { name: RolePlayActivity["partner"]; english: string; telugu: string; auto: boolean }) {
  const [meaning, setMeaning] = useState(false);
  return (
    <Bubble side="left" name={<BiText text={name} />}>
      <p className="flex flex-wrap items-center gap-x-1">
        <span>{english}</span>
        <Narrate text={english} auto={auto} variant="compact" />
      </p>
      {meaning && (
        <p lang="te" className="mt-1 text-base text-ink-2">
          {telugu}
        </p>
      )}
      <button type="button" onClick={() => setMeaning((m) => !m)} aria-pressed={meaning} className={`${button("ghost")} -mx-3 mt-1 min-h-11 text-base`}>
        <Bi label={meaning ? strings.hideTeluguMeaning : strings.teluguMeaning} />
      </button>
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
        <div className={`${card} flex flex-col gap-1`}>
          <h1 className="text-xl font-bold">
            <BiText text={activity.title} />
          </h1>
          <p className="text-base text-ink-2">
            <BiText text={activity.scene} />
          </p>
          <p className="text-base">
            {strings.rolePlayYouAre.en} <BiText text={activity.partner} className="font-semibold" />
          </p>
        </div>

        <ChooseNote note={note} />

        {turns.slice(0, turn + 1).map((t, i) => (
          <div key={i} className="flex flex-col gap-3">
            <PartnerBubble name={activity.partner} english={t.partner} telugu={t.te} auto={i === turn} />
            {log[i] && (
              <>
                <Bubble side="right" name={strings.youReplied.en}>
                  <p className="flex items-center gap-2">
                    <Icon name={log[i].good ? "check" : "retry"} className="size-5 shrink-0" />
                    <span>{log[i].text}</span>
                  </p>
                </Bubble>
                {i < turn && log[i].better && (
                  <p className="px-1 text-base text-almost">
                    {strings.betterReply.en}: <span className="font-semibold">{log[i].better}</span>
                  </p>
                )}
              </>
            )}
          </div>
        ))}

        {!replied && hint === turn && (
          <p className={`${card} flex flex-wrap items-center gap-1 text-base`}>
            <BiText text={current.hint} /> <Narrate text={current.hint} />
          </p>
        )}

        {!replied && (
          <div role="group" aria-label={strings.replyPrompt.en} className="flex flex-col gap-2">
            <p className="text-base text-ink-2">
              <BiText text={strings.replyPrompt} />
            </p>
            {order.map((i) => (
              <OptionButton key={i} text={current.replies[i].say} state="idle" onClick={() => reply(i)} />
            ))}
          </div>
        )}
        <div ref={end} />
      </div>

      <BottomBar>
        {replied && lastReply && (
          <FeedbackPanel kind={lastReply.good ? "correct" : "almost"} label={lastReply.good ? strings.good : strings.almost}>
            {lastReply.better && (
              <p className="flex flex-wrap items-center gap-1 text-lg">
                <span>{strings.betterReply.en}:</span>
                <Text className="font-semibold">{lastReply.better}</Text>
                <Narrate text={lastReply.better} auto />
              </p>
            )}
          </FeedbackPanel>
        )}
        {replied && <MainButton label={last ? strings.seeSummary : strings.continue} onClick={forward} />}

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
          <button type="button" onClick={() => setHint((h) => (h === turn ? null : turn))} aria-expanded={hint === turn} className={`${button("ghost")} w-full`}>
            <Icon name="hint" />
            <Bi label={strings.hint} />
          </button>
        )}
      </BottomBar>
    </>
  );
}
