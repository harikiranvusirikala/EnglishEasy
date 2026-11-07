"use client";

import type { ReactNode } from "react";
import { Bi } from "@/components/ui/Bi";
import { Icon } from "@/components/ui/icons";
import { button } from "@/components/ui/button";
import { strings, type Bi as BiLabel } from "@/lib/strings";

/** Text that may be Telugu (a meaning shown as an option): marked `lang="te"` when it is. */
export function Text({ children, className = "" }: { children: string; className?: string }) {
  return /[ఀ-౿]/.test(children) ? (
    <span lang="te" className={className}>
      {children}
    </span>
  ) : (
    <span className={className}>{children}</span>
  );
}

/** The bottom of the player: the main button (and the feedback panel above it) fixed to the screen's foot. */
export function BottomBar({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 border-t border-stone-200 bg-white pb-[env(safe-area-inset-bottom)] dark:border-stone-800 dark:bg-stone-900">
      <div className="mx-auto flex max-w-xl flex-col gap-3 p-4">{children}</div>
    </div>
  );
}

export function MainButton({ label, onClick, disabled }: { label: BiLabel; onClick: () => void; disabled?: boolean }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`${button("primary", "lg")} w-full`}>
      <Bi label={label} />
    </button>
  );
}

export type FeedbackKind = "correct" | "almost" | "answer";

const PANEL: Record<FeedbackKind, string> = {
  correct: "border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100",
  almost: "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100",
  answer: "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100",
};

/** ✓ Correct! (green) or ↻ Almost (amber), announced to screen readers; `children` hold the reason and the answer. `label` replaces the heading (Great, Good, Try again). */
export function FeedbackPanel({ kind, label, children }: { kind: FeedbackKind; label?: BiLabel; children?: ReactNode }) {
  return (
    <div
      aria-live="polite"
      className={`flex animate-[panel-in_180ms_ease-out] flex-col gap-2 rounded-xl border p-3 motion-reduce:animate-none ${PANEL[kind]}`}
    >
      <p className="flex items-center gap-2 text-lg font-bold">
        <Icon name={kind === "correct" ? "check" : "retry"} />
        <Bi label={label ?? (kind === "correct" ? strings.correct : strings.almost)} className="items-start" />
      </p>
      {children}
    </div>
  );
}

export type OptionState = "idle" | "selected" | "right" | "wrong";

export const OPTION: Record<OptionState, string> = {
  idle: "border-stone-300 bg-white text-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800",
  selected: "border-teal-700 bg-teal-50 text-stone-900 ring-2 ring-teal-700 dark:border-teal-400 dark:bg-teal-950 dark:text-stone-100 dark:ring-teal-400",
  right: "border-emerald-500 bg-emerald-50 text-emerald-950 dark:border-emerald-600 dark:bg-emerald-950 dark:text-emerald-100",
  wrong: "border-amber-500 bg-amber-50 text-amber-950 dark:border-amber-600 dark:bg-amber-950 dark:text-amber-100",
};

/** One answer button. A ✓ or ↻ goes with the colour once the answer is judged. */
export function OptionButton({ text, state, disabled, onClick }: { text: string; state: OptionState; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={state === "selected"}
      disabled={disabled}
      onClick={onClick}
      className={`flex min-h-13 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-lg font-medium outline-none focus-visible:ring-2 focus-visible:ring-teal-700 disabled:pointer-events-none dark:focus-visible:ring-teal-300 ${OPTION[state]}`}
    >
      <Text>{text}</Text>
      {state === "right" && <Icon name="check" />}
      {state === "wrong" && <Icon name="retry" />}
    </button>
  );
}
