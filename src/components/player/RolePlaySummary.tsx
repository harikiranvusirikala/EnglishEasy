"use client";

import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Icon } from "@/components/ui/icons";
import type { RolePlay } from "@/content/types";
import type { RolePlayScore } from "@/learning/roleplay-score";
import { strings } from "@/lib/strings";
import { BottomBar, MainButton } from "./parts";

/** "Role play complete": what went well, what to practise, and the Speaking and Conversation scores out of 10 (VISION §7). */
export function RolePlaySummary({ roleplay, score, onNext }: { roleplay: Pick<RolePlay, "skills">; score: RolePlayScore; onNext: () => void }) {
  const label = (id: string) => roleplay.skills.find((s) => s.id === id)?.label;
  return (
    <div className="flex flex-col gap-5 pt-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-good-soft text-good">
          <Icon name="check" className="size-9" />
        </span>
        <h1 className="text-2xl">
          <Bi label={strings.rolePlayComplete} />
        </h1>
      </div>

      {score.good.length > 0 && (
        <section className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">
            <Bi label={strings.summaryGood} className="items-start" />
          </h2>
          <ul className="flex flex-col gap-1">
            {score.good.map((id) => (
              <li key={id} className="flex items-center gap-2 text-lg text-good">
                <Icon name="check" className="size-5 shrink-0" />
                {label(id) && <BiText text={label(id)!} />}
              </li>
            ))}
          </ul>
        </section>
      )}

      {score.practiceMore.length > 0 && (
        <section className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">
            <Bi label={strings.summaryPracticeMore} className="items-start" />
          </h2>
          <ul className="flex flex-col gap-1">
            {score.practiceMore.map((id) => (
              <li key={id} className="flex items-center gap-2 text-lg text-almost">
                <Icon name="retry" className="size-5 shrink-0" />
                {label(id) && <BiText text={label(id)!} />}
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="flex flex-wrap gap-x-6 gap-y-1 text-lg">
        {score.speaking !== null && (
          <span>
            {strings.summarySpeaking.en}: <b className="tabular-nums">{score.speaking} / 10</b>
          </span>
        )}
        <span>
          {strings.summaryConversation.en}: <b className="tabular-nums">{score.conversation} / 10</b>
        </span>
      </p>

      <BottomBar>
        <MainButton label={strings.continue} onClick={onNext} />
      </BottomBar>
    </div>
  );
}
