"use client";

import { Bi } from "@/components/ui/Bi";
import { button } from "@/components/ui/button";
import { updateSettings } from "@/lib/settings-store";
import { strings } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/** First visit (VISION §10.1): one question, two big buttons. It covers the tab bar until the learner chooses. */
export function Onboarding() {
  const choose = (learnIn: LearnIn) => updateSettings({ learnIn, onboarded: true });
  return (
    <main className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-6 overflow-y-auto bg-stone-50 p-6 dark:bg-stone-950">
      <div className="flex w-full max-w-xl flex-col gap-6">
        <h1 className="flex flex-col gap-1 text-center text-2xl text-stone-900 dark:text-stone-100">
          <Bi label={strings.onboardTitle} mode="te" />
        </h1>
        <div className="flex flex-col gap-3">
          <button type="button" onClick={() => choose("te")} className={`${button("primary", "lg")} w-full`}>
            <Bi label={strings.onboardTelugu} mode="te" />
          </button>
          <button type="button" onClick={() => choose("en")} className={`${button("secondary", "lg")} w-full`}>
            <Bi label={strings.onboardEnglish} mode="te" />
          </button>
        </div>
        <p className="text-center text-base text-stone-600 dark:text-stone-400">
          <Bi label={strings.onboardHint} mode="te" />
        </p>
      </div>
    </main>
  );
}
