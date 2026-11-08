"use client";

import { useMemo, useState } from "react";
import { BiText } from "@/components/ui/BiText";
import { Icon } from "@/components/ui/icons";
import type { Activity } from "@/content/types";
import { shuffle } from "@/learning/shuffle";
import { strings } from "@/lib/strings";
import { BottomBar, FeedbackPanel, MainButton, OPTION, Text } from "./parts";

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

  const base = "flex min-h-13 w-full items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-base font-medium outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none";
  const card = (i: number, side: "te" | "en") => {
    const locked = matched.includes(i);
    const bad = wrong !== null && wrong[side] === i;
    const style = locked ? OPTION.right : bad ? OPTION.wrong : side === "te" && te === i ? OPTION.selected : OPTION.idle;
    return `${base} ${style} ${bad ? "animate-[shake_300ms_ease-in-out] motion-reduce:animate-none" : ""}`;
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-base text-ink-2">
          <BiText text={strings.matchPrompt} />
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div role="group" aria-label={strings.matchTelugu.en} className="flex flex-col gap-2">
            {pairs.map((p, i) => (
              <button key={i} type="button" disabled={done || matched.includes(i)} aria-pressed={te === i} onClick={() => pickTe(i)} className={card(i, "te")}>
                <Text>{p.te}</Text>
                {matched.includes(i) && <Icon name="check" />}
                {wrong?.te === i && <Icon name="retry" />}
              </button>
            ))}
          </div>
          <div role="group" aria-label={strings.matchEnglish.en} className="flex flex-col gap-2">
            {order.map((i) => (
              <button key={i} type="button" disabled={done || matched.includes(i)} onClick={() => pickEn(i)} className={card(i, "en")}>
                <Text>{pairs[i].en}</Text>
                {matched.includes(i) && <Icon name="check" />}
                {wrong?.en === i && <Icon name="retry" />}
              </button>
            ))}
          </div>
        </div>
      </div>
      <BottomBar>
        {done && <FeedbackPanel kind="correct" />}
        {done && <MainButton label={strings.continue} onClick={onNext} />}
      </BottomBar>
    </>
  );
}
