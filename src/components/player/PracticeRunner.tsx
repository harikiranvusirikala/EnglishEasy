"use client";

import { useRef, useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { iconButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { addPracticeDay, dateKey, recordAnswer, type Progress } from "@/learning/progress";
import type { PracticeItem } from "@/learning/practice";
import { updateProgress } from "@/lib/progress-store";
import { fill, strings } from "@/lib/strings";
import { ActivityView, isQuestion } from "./Player";
import { BottomBar, MainButton } from "./parts";

/**
 * Plays a list of activities outside a lesson with the player's own components, over the whole screen (it covers the
 * tab bar). In `mistakes` mode a correct answer removes the mistake (Practice again); otherwise only the practice day
 * is saved. `onExit` closes it.
 */
export function PracticeRunner({ items, mode, onExit }: { items: PracticeItem[]; mode: "mistakes" | "plain"; onExit: () => void }) {
  const [index, setIndex] = useState(0);
  const [right, setRight] = useState<Set<string>>(() => new Set());
  const main = useRef<HTMLElement>(null);
  const finished = index >= items.length;
  const item = items[index];
  const questions = items.filter((i) => isQuestion(i.activity)).length;

  const save = (fn: (p: Progress) => Progress) => {
    const now = new Date().toISOString();
    updateProgress((p) => addPracticeDay(fn(p), dateKey(new Date()), now));
  };
  const next = () => {
    setIndex((i) => i + 1);
    if (main.current) main.current.scrollTop = 0;
  };

  return (
    <div role="dialog" aria-modal="true" aria-label={strings.practiceTitle.en} className="fixed inset-0 z-30 bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto flex h-dvh max-w-xl flex-col">
        <header className="flex items-center gap-2 px-2 pt-2">
          <button type="button" aria-label={strings.close.en} onClick={onExit} className={iconButton}>
            <Icon name="close" />
          </button>
          <ProgressBar label={strings.progressLabel.en} value={Math.min(index, items.length)} max={items.length} className="flex-1" />
          <span className="min-w-14 text-right text-base font-semibold tabular-nums">
            {Math.min(index + 1, items.length)} / {items.length}
          </span>
        </header>
        <main ref={main} tabIndex={-1} className="flex-1 overflow-y-auto px-4 pt-4 pb-72 outline-none">
          {!finished ? (
            <ActivityView
              key={item.activity.id}
              activity={item.activity}
              onAnswer={(correct) => {
                const id = item.activity.id;
                if (correct) setRight((r) => new Set(r).add(id));
                save((p) => (mode === "mistakes" ? recordAnswer(p, id, correct, new Date().toISOString(), { practice: true }) : p));
              }}
              onNext={() => {
                if (!isQuestion(item.activity)) save((p) => p);
                next();
              }}
              onSkip={next}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 pt-12 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
                <Icon name="check" className="size-9" />
              </span>
              <h1 className="text-2xl">
                <Bi label={strings.practiceDone} />
              </h1>
              {questions > 0 && mode === "mistakes" && (
                <p className="text-3xl font-bold tabular-nums">
                  <BiText text={fill(strings.practiceDoneCount, { n: right.size, total: questions })} />
                </p>
              )}
              <BottomBar>
                <MainButton label={strings.practiceFinish} onClick={onExit} />
              </BottomBar>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

