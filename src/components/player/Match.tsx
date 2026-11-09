"use client";

import { useMemo, useState } from "react";
import { BiText } from "@/components/ui/BiText";
import { focusRing } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import type { Activity } from "@/content/types";
import { shuffle } from "@/learning/shuffle";
import { strings } from "@/lib/strings";
import { BottomBar, FeedbackPanel, Instruction, MainButton, OPTION, Text } from "./parts";

type Props = { activity: Extract<Activity, { type: "match" }>; onAnswer: (correct: boolean) => void; onNext: () => void };

/** Tap a Telugu card, then its English card. Pairs lock with ✓; a wrong pair shakes (and shows ↻, so colour and motion are not the only signal). */
export function Match({ activity, onAnswer, onNext }: Props) {
  const { pairs } = activity;
  const order = useMemo(() => shuffle(pairs.map((_, i) => i), activity.id), [pairs, activity.id]);
  const [te, setTe] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrong, setWrong] = useState<{ te: number; en: number } | null>(null);
  const [slips, setSlips] = useState(0);
  const done = matched.length === pairs.length;

  const pickTe = (i: number) => {
    setWrong(null);
    setTe(te === i ? null : i);
  };
  const pickEn = (i: number) => {
    if (te === null) return;
    if (te === i) {
      const now = [...matched, i];
      setMatched(now);
      setWrong(null);
      setTe(null);
      if (now.length === pairs.length) onAnswer(slips === 0);
    } else {
      setSlips(slips + 1);
      setWrong({ te, en: i });
      setTe(null);
    }
  };

  const base = `flex min-h-16 w-full items-center justify-between gap-2 rounded-2xl border-2 px-3 py-2.5 text-left text-base font-medium transition-[background-color,border-color,opacity] duration-150 disabled:pointer-events-none ${focusRing}`;
  const card = (i: number, side: "te" | "en") => {
    const locked = matched.includes(i);
    const bad = wrong !== null && wrong[side] === i;
    const style = locked ? `${OPTION.right} opacity-80` : bad ? OPTION.wrong : side === "te" && te === i ? OPTION.selected : OPTION.idle;
    return `${base} ${style} ${bad ? "animate-[shake_300ms_ease-in-out] motion-reduce:animate-none" : ""}`;
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <Instruction>
          <BiText text={strings.matchPrompt} />
        </Instruction>
        <div className="grid grid-cols-2 gap-3">
          <div role="group" aria-label={strings.matchTelugu.en} className="flex flex-col gap-3">
            {pairs.map((p, i) => (
              <button key={i} type="button" disabled={done || matched.includes(i)} aria-pressed={te === i} onClick={() => pickTe(i)} className={card(i, "te")}>
                <Text centered>{p.te}</Text>
                {matched.includes(i) && <Icon name="check" className="size-5 shrink-0" strokeWidth={2.6} />}
                {wrong?.te === i && <Icon name="retry" className="size-5 shrink-0" />}
              </button>
            ))}
          </div>
          <div role="group" aria-label={strings.matchEnglish.en} className="flex flex-col gap-3">
            {order.map((i) => (
              <button key={i} type="button" disabled={done || matched.includes(i)} onClick={() => pickEn(i)} className={card(i, "en")}>
                <Text>{pairs[i].en}</Text>
                {matched.includes(i) && <Icon name="check" className="size-5 shrink-0" strokeWidth={2.6} />}
                {wrong?.en === i && <Icon name="retry" className="size-5 shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      </div>
      <BottomBar tone={done ? "good" : "neutral"}>
        {done && <FeedbackPanel kind="correct" />}
        {done && <MainButton label={strings.continue} onClick={onNext} tone="good" />}
      </BottomBar>
    </>
  );
}
