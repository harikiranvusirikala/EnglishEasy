"use client";

import { useState } from "react";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { button } from "@/components/ui/button";
import type { Course } from "@/learning/recommend";
import { chooseTracks } from "@/learning/progress";
import { updateProgress } from "@/lib/progress-store";
import { GoalList } from "./Tracks";
import { Illustration } from "@/components/illustrations/Illustration";
import { Logo } from "@/components/ui/Logo";
import { focusRing } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { updateSettings } from "@/lib/settings-store";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/** One big choice: the language's name and a sample explanation in it, so the learner sees what they are choosing. */
function Choice({ label, sample, sampleLang, onClick, primary }: { label: BiLabel; sample: string; sampleLang?: "te"; onClick: () => void; primary?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-4 rounded-[1.25rem] border-2 p-5 text-left transition-[border-color,box-shadow,transform] duration-150 active:scale-[0.99] motion-reduce:active:scale-100 ${focusRing} ${
        primary ? "border-brand bg-brand-soft shadow-card" : "border-line-strong bg-surface shadow-card hover:border-brand/60"
      }`}
    >
      <span className="flex min-w-0 flex-1 flex-col gap-1.5">
        <span className="font-display text-xl leading-snug font-semibold text-ink">
          <Bi label={label} mode="te" className="items-start" />
        </span>
        <span lang={sampleLang} className="text-base text-ink-2">
          {sample}
        </span>
      </span>
      <span aria-hidden="true" className={`flex size-11 shrink-0 items-center justify-center rounded-full ${primary ? "bg-brand-fill text-on-brand" : "bg-sunken text-ink-2 group-hover:text-brand"}`}>
        <Icon name="arrowRight" className="size-5" />
      </span>
    </button>
  );
}

/**
 * First visit (VISION §10.1): how to learn (Telugu or English explanations), then what English is for (the tracks as
 * goals, CURRICULUM §8; taps only, changeable in Settings). It covers the tab bar until both are answered.
 */
export function Onboarding({ course }: { course: Course }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [goals, setGoals] = useState<string[]>([]);
  const [tripSoon, setTripSoon] = useState(false);
  const choose = (learnIn: LearnIn) => {
    updateSettings({ learnIn });
    setStep(2);
  };
  const finish = () => {
    updateProgress((p) => chooseTracks(p, goals, new Date().toISOString(), tripSoon));
    updateSettings({ onboarded: true });
  };
  return (
    <main className="fixed inset-0 z-30 overflow-y-auto bg-page">
      <div className="mx-auto flex min-h-full w-full max-w-xl flex-col gap-6 px-5 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <Logo size="sm" />
        {step === 1 ? (
          <div className="flex flex-1 flex-col justify-center gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <Illustration name="welcome" className="w-56 animate-pop-in motion-reduce:animate-none" />
              <p className="text-base font-semibold text-brand">
                <Bi label={strings.onboardWelcome} mode="te" />
              </p>
              <h1 className="font-display text-[1.9rem] leading-tight font-bold text-ink">
                <Bi label={strings.onboardTitle} mode="te" />
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <Choice label={strings.onboardTelugu} sample={strings.onboardTeluguSample.en} sampleLang="te" onClick={() => choose("te")} primary />
              <Choice label={strings.onboardEnglish} sample={strings.onboardEnglishSample.en} onClick={() => choose("en")} />
            </div>
            <p className="flex items-center justify-center gap-2 text-center text-base text-ink-2">
              <Icon name="gear" className="size-5" />
              <Bi label={strings.onboardHint} mode="te" />
            </p>
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-brand">
                <Bi label={strings.goalStep} className="items-start" />
              </p>
              <h1 className="font-display text-[1.9rem] leading-tight font-bold text-ink">
                <BiText text={strings.goalTitle} />
              </h1>
              <p className="text-lg text-ink-2">
                <BiText text={strings.goalHint} />
              </p>
            </div>
            <GoalList
              tracks={course.tracks}
              selected={goals}
              tripSoon={tripSoon}
              onToggle={(id) => setGoals((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]))}
              onTripSoon={() => setTripSoon((t) => !t)}
            />
            <div className="mt-auto flex flex-col gap-2 pt-2">
              <button type="button" onClick={finish} className={`${button("primary", "lg")} w-full`}>
                <Bi label={strings.goalStart} />
              </button>
              <p className="text-center text-base text-ink-2">
                <BiText text={strings.onboardHint} />
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
