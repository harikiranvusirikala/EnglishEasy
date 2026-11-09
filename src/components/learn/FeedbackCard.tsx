"use client";

import { useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button, choiceButton } from "@/components/ui/button";
import { well } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { MicButton } from "@/components/player/MicButton";
import { useClock } from "@/lib/clock";
import { APP_VERSION, submitFeedback, useFeedbackState, type FeedbackRating, type FeedbackTopic } from "@/lib/feedback";
import { listen, stopListening, useListenSupport } from "@/lib/listen";
import { useSettings } from "@/lib/settings-store";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { SettingsCard } from "./SettingsCard";

const FACES: { value: FeedbackRating; face: string; label: BiLabel }[] = [
  { value: "love", face: "😍", label: strings.feedbackLove },
  { value: "good", face: "🙂", label: strings.feedbackGood },
  { value: "okay", face: "😐", label: strings.feedbackOkay },
  { value: "bad", face: "🙁", label: strings.feedbackBad },
];

const TOPICS: { value: FeedbackTopic; label: BiLabel }[] = [
  { value: "too-hard", label: strings.feedbackTooHard },
  { value: "too-easy", label: strings.feedbackTooEasy },
  { value: "voice", label: strings.feedbackVoice },
  { value: "speaking", label: strings.feedbackSpeaking },
  { value: "telugu", label: strings.feedbackTelugu },
  { value: "slow", label: strings.feedbackSlow },
  { value: "more-lessons", label: strings.feedbackMoreLessons },
];

/** A spoken message can be long; the phone stops listening after this. */
export const SAY_TIMEOUT_MS = 30_000;
const MAX_SAID = 1000;

/**
 * Settings → Send feedback (BUILD_PLAN "feedback in the app"): a face, topics, and an optional spoken message (the
 * phone's speech recognition turns it into text the learner sees first; only the text is sent). No typing anywhere.
 * One message a day; after sending, a thank-you until tomorrow.
 */
export function FeedbackCard() {
  const settings = useSettings();
  const clock = useClock();
  const state = useFeedbackState();
  const support = useListenSupport();
  const [rating, setRating] = useState<FeedbackRating | null>(null);
  const [topics, setTopics] = useState<FeedbackTopic[]>([]);
  const [said, setSaid] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [micProblem, setMicProblem] = useState(false);

  if (!settings || !clock || !state) return null;
  const sentToday = state.sentOn === clock.today;

  const toggle = (topic: FeedbackTopic) => setTopics((list) => (list.includes(topic) ? list.filter((t) => t !== topic) : [...list, topic]));

  async function speak() {
    setMicProblem(false);
    setListening(true);
    const result = await listen({ lang: settings?.learnIn === "te" ? "te-IN" : "en-IN", continuous: true, timeoutMs: SAY_TIMEOUT_MS });
    setListening(false);
    if (result.kind === "heard") setSaid(result.transcripts[0].slice(0, MAX_SAID));
    else setMicProblem(true);
  }

  function send() {
    if (!settings || !clock) return;
    stopListening();
    submitFeedback(
      { kind: "app", ...(rating && { rating }), topics, ...(said && { said }), learnIn: settings.learnIn, appVersion: APP_VERSION, at: new Date().toISOString() },
      clock.today,
    );
  }

  return (
    <SettingsCard icon="chat" title={strings.feedbackTitle} hint={sentToday ? undefined : strings.feedbackHint}>
      {sentToday ? (
        <div role="status" className="flex items-start gap-3 rounded-2xl bg-good-soft p-4 text-good">
          <Icon name="heart" className="mt-0.5 size-6 shrink-0" />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">
              <BiText text={strings.feedbackThanks} />
            </p>
            <p className="text-base text-ink-2">
              <BiText text={strings.feedbackTomorrow} />
            </p>
          </div>
        </div>
      ) : (
        <>
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-base font-semibold text-ink">
              <Bi label={strings.feedbackHow} className="items-start" />
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {FACES.map((f) => (
                <button key={f.value} type="button" aria-pressed={rating === f.value} onClick={() => setRating(rating === f.value ? null : f.value)} className={`${choiceButton(rating === f.value)} flex flex-col items-center justify-center gap-0.5 py-2`}>
                  <span aria-hidden="true" className="text-2xl leading-none">
                    {f.face}
                  </span>
                  <Bi label={f.label} />
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-base font-semibold text-ink">
              <Bi label={strings.feedbackImprove} className="items-start" />
            </legend>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button key={t.value} type="button" aria-pressed={topics.includes(t.value)} onClick={() => toggle(t.value)} className={`${choiceButton(topics.includes(t.value))} inline-flex items-center gap-1.5`}>
                  {topics.includes(t.value) && <Icon name="check" className="size-4" strokeWidth={3} />}
                  <Bi label={t.label} />
                </button>
              ))}
            </div>
          </fieldset>

          {support && (
            <section aria-label={strings.feedbackSayTitle.en} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-ink">
                  <Bi label={strings.feedbackSayTitle} className="items-start" />
                </h3>
                <p className="text-base text-ink-2">
                  <BiText text={strings.feedbackSayHint} />
                </p>
              </div>
              {said ? (
                <div className={`${well} flex flex-col gap-3`}>
                  <p className="text-sm font-semibold text-ink-3">
                    <Bi label={strings.feedbackHeard} />
                  </p>
                  <p className="text-lg text-ink" lang={settings.learnIn === "te" ? "te" : undefined} data-testid="feedback-said">
                    {said}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => void speak()} disabled={listening} className={button("secondary")}>
                      <Icon name="mic" className="size-5" />
                      <Bi label={strings.feedbackSayAgain} />
                    </button>
                    <button type="button" onClick={() => setSaid(null)} className={button("ghost")}>
                      <Icon name="close" className="size-5" />
                      <Bi label={strings.feedbackRemove} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <MicButton listening={listening} onStart={() => void speak()} label={strings.feedbackSay} variant="secondary" />
                  {listening && (
                    <button type="button" onClick={stopListening} className={button("secondary")}>
                      <Icon name="check" className="size-5" />
                      <Bi label={strings.feedbackDoneSpeaking} />
                    </button>
                  )}
                </div>
              )}
              {micProblem && (
                <p role="alert" className="text-base text-almost">
                  <BiText text={strings.feedbackMicProblem} />
                </p>
              )}
            </section>
          )}

          <button type="button" onClick={send} disabled={!rating && topics.length === 0 && !said} className={`${button("primary")} w-full`}>
            <Icon name="arrowRight" className="size-5" />
            <Bi label={strings.feedbackSend} />
          </button>
        </>
      )}
    </SettingsCard>
  );
}
