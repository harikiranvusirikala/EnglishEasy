"use client";

import type { ReactNode } from "react";
import { Bi } from "@/components/ui/Bi";
import { Icon } from "@/components/ui/icons";
import { Skeleton } from "@/components/ui/Skeleton";
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
    <div className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)]">
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
  correct: "border-good-line bg-good-soft text-good",
  almost: "border-almost-line bg-almost-soft text-almost",
  answer: "border-almost-line bg-almost-soft text-almost",
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
  idle: "border-line-strong bg-surface text-ink hover:bg-sunken",
  selected: "border-brand bg-brand-soft text-ink ring-2 ring-brand",
  right: "border-good-line bg-good-soft text-good",
  wrong: "border-almost-line bg-almost-soft text-almost",
};

/** One answer button. A ✓ or ↻ goes with the colour once the answer is judged. */
export function OptionButton({ text, state, disabled, onClick }: { text: string; state: OptionState; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={state === "selected"}
      disabled={disabled}
      onClick={onClick}
      className={`flex min-h-13 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-lg font-medium outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none ${OPTION[state]}`}
    >
      <Text>{text}</Text>
      {state === "right" && <Icon name="check" />}
      {state === "wrong" && <Icon name="retry" />}
    </button>
  );
}

/** The player's shape while the lesson or saved progress is loading. */
export function PlayerSkeleton() {
  return (
    <div className="mx-auto flex h-dvh max-w-xl flex-col gap-4 p-4" aria-busy="true">
      <Skeleton className="h-13 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-13 w-full" />
      <Skeleton className="h-13 w-full" />
    </div>
  );
}
