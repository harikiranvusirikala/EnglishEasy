"use client";

import { PatternChips } from "@/components/learn/PatternChips";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import type { Activity, CoreSentence } from "@/content/types";
import { strings } from "@/lib/strings";
import { BottomBar, MainButton } from "./parts";
import { Narrate } from "./Narrate";

type CardProps<T extends Activity["type"]> = { activity: Extract<Activity, { type: T }>; onNext: () => void };

function Next({ onNext }: { onNext: () => void }) {
  return (
    <BottomBar>
      <MainButton label={strings.continue} onClick={onNext} />
    </BottomBar>
  );
}

/** An English sentence with its Telugu meaning and 🔊 🐢. */
function Example({ sentence }: { sentence: CoreSentence }) {
  return (
    <li className={`${card} flex items-center justify-between gap-2`}>
      <div>
        <p className="text-xl font-semibold">{sentence.en}</p>
        <p lang="te" className="text-base text-stone-600 dark:text-stone-400">
          {sentence.te}
        </p>
      </div>
      <Narrate text={sentence.en} />
    </li>
  );
}

/** The pattern: heading, explanation, the Telugu → English bridge as coloured blocks, and examples. */
export function ExplainCard({ activity, onNext }: CardProps<"explain">) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          <BiText text={activity.heading} />
        </h2>
        <p className="text-lg">
          <BiText text={activity.body} />
        </p>
        {activity.bridge && (
          <div className={`${card} flex flex-col gap-3`}>
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-400">
              <Bi label={strings.bridgeTelugu} className="items-start" />
            </p>
            <ul className="flex flex-wrap gap-2">
              {activity.bridge.te.map((word, i) => (
                <li key={i} lang="te" className="rounded-lg border border-stone-300 bg-stone-100 px-3 py-2 text-lg dark:border-stone-700 dark:bg-stone-800">
                  {word}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-400">
              <Bi label={strings.bridgeEnglish} className="items-start" />
            </p>
            <PatternChips chips={activity.bridge.en} animate />
          </div>
        )}
        <ul className="flex flex-col gap-2">
          {activity.examples.map((example, i) => (
            <Example key={i} sentence={example} />
          ))}
        </ul>
      </div>
      <Next onNext={onNext} />
    </>
  );
}

/** Compare forms: what each is for, with an example. */
export function WhenToUseCard({ activity, onNext }: CardProps<"whenToUse">) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          <BiText text={activity.heading} />
        </h2>
        <ul className="flex flex-col gap-3">
          {activity.items.map((item, i) => (
            <li key={i} className={`${card} flex flex-col gap-2`}>
              <p className="text-xl font-bold text-teal-800 dark:text-teal-300">{item.form}</p>
              <p className="text-base">
                <BiText text={item.useFor} />
              </p>
              <ul>
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
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Icon name="close" className="size-5" />
            <Bi label={strings.dontSay} />
          </p>
          <p className="text-xl line-through decoration-2">{activity.wrong}</p>
        </div>
        <div className="flex flex-col gap-1 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-950 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Icon name="check" className="size-5" />
            <Bi label={strings.say} />
          </p>
          <p className="flex flex-wrap items-center gap-1 text-xl font-semibold">
            {activity.right}
            <Narrate text={activity.right} />
          </p>
        </div>
        <p className="text-lg">
          <BiText text={activity.why} />
        </p>
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
        <p className="text-base text-stone-600 dark:text-stone-400">
          <BiText text={strings.comingSoonCard} />
        </p>
      </div>
      <BottomBar>
        <MainButton label={strings.comingSoonSkip} onClick={onSkip} />
      </BottomBar>
    </>
  );
}
