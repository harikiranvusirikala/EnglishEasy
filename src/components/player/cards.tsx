"use client";

import { PatternChips } from "@/components/learn/PatternChips";
import { useLearnIn } from "@/lib/settings-store";
import { Meaning } from "@/components/ui/ContentText";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ContentText } from "@/components/ui/ContentText";
import { card, cardFlush } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import type { Activity, CoreSentence } from "@/content/types";
import { strings } from "@/lib/strings";
import { BottomBar, MainButton, Prompt } from "./parts";
import { ListenInline } from "./Narrate";

type CardProps<T extends Activity["type"]> = { activity: Extract<Activity, { type: T }>; onNext: () => void };

function Next({ onNext }: { onNext: () => void }) {
  return (
    <BottomBar>
      <MainButton label={strings.continue} onClick={onNext} />
    </BottomBar>
  );
}

/** An English sentence with its Telugu meaning (a row in a list of examples), its text-sized Listen first. */
function Example({ sentence }: { sentence: CoreSentence }) {
  return (
    <li className="flex items-start gap-3 px-4 py-3.5 text-xl">
      <ListenInline read={[sentence.en]} place="start" />
      <div className="min-w-0">
        <p className="font-semibold text-ink">{sentence.en}</p>
        <Meaning>{sentence.te}</Meaning>
      </div>
    </li>
  );
}

/** A small heading inside a card ("In Telugu", "Examples"). */
function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-ink-3">{children}</p>;
}

/** The pattern: heading, explanation (heard by itself), the Telugu → English bridge as coloured blocks, and examples. */
export function ExplainCard({ activity, onNext }: CardProps<"explain">) {
  const learnIn = useLearnIn();
  return (
    <>
      <div className="flex flex-col gap-5">
        <Prompt>
          <ContentText text={activity.heading} />
        </Prompt>
        <div className="text-lg leading-relaxed text-ink">
          <ContentText text={activity.body} />
        </div>
        {activity.bridge && learnIn === "en" && (
          <div className={card}>
            <PatternChips chips={activity.bridge.en} animate />
          </div>
        )}
        {activity.bridge && learnIn === "te" && (
          <div className={`${card} flex flex-col gap-3`}>
            <Label>
              <Bi label={strings.bridgeTelugu} className="items-start" />
            </Label>
            <ul className="flex flex-wrap gap-2">
              {activity.bridge.te.map((word, i) => (
                <li key={i} lang="te" className="rounded-xl border border-line-strong bg-sunken px-3 py-2 text-lg text-ink">
                  {word}
                </li>
              ))}
            </ul>
            <div aria-hidden="true" className="flex items-center gap-2 text-ink-3">
              <span className="h-px flex-1 bg-line" />
              <Icon name="chevronDown" className="size-6 text-brand" />
              <span className="h-px flex-1 bg-line" />
            </div>
            <Label>
              <Bi label={strings.bridgeEnglish} className="items-start" />
            </Label>
            <PatternChips chips={activity.bridge.en} animate />
          </div>
        )}
        {activity.examples.length > 0 && (
          <ul className={`${cardFlush} divide-y divide-line`}>
            {activity.examples.map((example, i) => (
              <Example key={i} sentence={example} />
            ))}
          </ul>
        )}
      </div>
      <Next onNext={onNext} />
    </>
  );
}

/** Compare forms: what each is for, with an example. */
export function WhenToUseCard({ activity, onNext }: CardProps<"whenToUse">) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Prompt>
          <ContentText text={activity.heading} />
        </Prompt>
        <ul className="flex flex-col gap-4">
          {activity.items.map((item, i) => (
            <li key={i} className={`${cardFlush} flex flex-col`}>
              <div className="flex flex-col gap-2 p-5">
                <p className="font-display self-start rounded-xl bg-brand-soft px-3 py-1 text-2xl font-bold text-brand-ink">{item.form}</p>
                <p className="text-lg text-ink">
                  <ContentText text={item.useFor} />
                </p>
              </div>
              <ul className="border-t border-line bg-sunken/50">
                <Example sentence={item.example} />
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Next onNext={onNext} />
    </>
  );
}

/** ✗ the common mistake, ✓ the fix, and why. */
export function DontSayCard({ activity, onNext }: CardProps<"dontSay">) {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* The ✗ and ✓ say it: no "Don't say" / "Say" line (screen readers still hear them), to save space on phones. */}
        <div className="flex items-center gap-3 rounded-[1.25rem] border-2 border-almost-line bg-almost-soft px-4 py-3.5">
          <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-almost text-almost-soft">
            <Icon name="close" className="size-4" strokeWidth={3} />
          </span>
          <p className="min-w-0 flex-1 text-2xl text-almost line-through decoration-2">
            <span className="sr-only">{strings.dontSay.en}: </span>
            {activity.wrong}
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-[1.25rem] border-2 border-good-line bg-good-soft px-4 py-3.5">
          <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-good text-good-soft">
            <Icon name="check" className="size-4" strokeWidth={3} />
          </span>
          <p className="min-w-0 flex-1 text-2xl font-semibold text-good">
            <span className="sr-only">{strings.say.en}: </span>
            {activity.right}
          </p>
          <span className="text-2xl">
            <ListenInline read={[activity.right]} auto={[activity.right]} place="row" />
          </span>
        </div>
        <div className={`${card} flex items-start gap-3`}>
          <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
            <Icon name="hint" />
          </span>
          <p className="flex-1 pt-1 text-lg text-ink">
            <ContentText text={activity.why} />
          </p>
        </div>
      </div>
      <Next onNext={onNext} />
    </>
  );
}

/** Stands in for an activity type that a later step builds, so a day can be played end to end. */
export function ComingSoon({ onSkip }: { onSkip: () => void }) {
  return (
    <>
      <div className={`${card} flex flex-col gap-1 text-center`}>
        <p className="text-xl font-semibold">
          <Bi label={strings.comingSoon} />
        </p>
        <p className="text-base text-ink-2">
          <BiText text={strings.comingSoonCard} />
        </p>
      </div>
      <BottomBar>
        <MainButton label={strings.comingSoonSkip} onClick={onSkip} />
      </BottomBar>
    </>
  );
}
