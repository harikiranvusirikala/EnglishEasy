"use client";

import { Bi } from "@/components/ui/Bi";
import { Icon } from "@/components/ui/icons";
import { Illustration } from "@/components/illustrations/Illustration";
import { card } from "@/components/ui/card";
import type { RolePlay } from "@/content/types";
import type { RolePlayScore } from "@/learning/roleplay-score";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { BottomBar, MainButton } from "./parts";

/** A score out of 10 in a tile. */
function Score({ label, value, testId }: { label: BiLabel; value: number; testId: string }) {
  return (
    <div data-testid={testId} className={`${card} flex flex-1 flex-col items-center gap-1 text-center`}>
      <span className="font-display text-4xl font-bold text-ink tabular-nums">
        {value}
        <span className="text-xl text-ink-3"> / 10</span>
      </span>
      <span className="text-base text-ink-2">
        <Bi label={label} />
      </span>
    </div>
  );
}

/** "Role play complete": what went well, what to practise, and the Speaking and Conversation scores out of 10 (VISION §7). */
export function RolePlaySummary({ roleplay, score, onNext }: { roleplay: Pick<RolePlay, "skills">; score: RolePlayScore; onNext: () => void }) {
  const label = (id: string) => roleplay.skills.find((s) => s.id === id)?.label;
  return (
    <div className="flex flex-col gap-5 pt-2">
      <div className="flex flex-col items-center gap-2 text-center">
        <Illustration name="complete" className="w-48 animate-pop-in motion-reduce:animate-none" />
        <h1 className="font-display text-[2rem] leading-tight font-bold text-ink">
          <Bi label={strings.rolePlayComplete} />
        </h1>
      </div>

      <div className="flex gap-3">
        {score.speaking !== null && <Score label={strings.summarySpeaking} value={score.speaking} testId="score-speaking" />}
        <Score label={strings.summaryConversation} value={score.conversation} testId="score-conversation" />
      </div>

      {score.good.length > 0 && (
        <section className={`${card} flex flex-col gap-3`}>
          <h2 className="font-display text-xl font-semibold text-good">
            <Bi label={strings.summaryGood} className="items-start" />
          </h2>
          <ul className="flex flex-col gap-2">
            {score.good.map((id) => (
              <li key={id} className="flex items-center gap-3 text-lg text-ink">
                <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-good text-good-soft">
                  <Icon name="check" className="size-4" strokeWidth={3} />
                </span>
                {label(id) && (label(id)!).en}
              </li>
            ))}
          </ul>
        </section>
      )}

      {score.practiceMore.length > 0 && (
        <section className={`${card} flex flex-col gap-3`}>
          <h2 className="font-display text-xl font-semibold text-almost">
            <Bi label={strings.summaryPracticeMore} className="items-start" />
          </h2>
          <ul className="flex flex-col gap-2">
            {score.practiceMore.map((id) => (
              <li key={id} className="flex items-center gap-3 text-lg text-ink">
                <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-almost text-almost-soft">
                  <Icon name="retry" className="size-4" strokeWidth={2.6} />
                </span>
                {label(id) && (label(id)!).en}
              </li>
            ))}
          </ul>
        </section>
      )}

      <BottomBar>
        <MainButton label={strings.continue} onClick={onNext} />
      </BottomBar>
    </div>
  );
}
