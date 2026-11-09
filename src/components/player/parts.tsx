"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Bi } from "@/components/ui/Bi";
import { Icon, type IconName } from "@/components/ui/icons";
import { Skeleton } from "@/components/ui/Skeleton";
import { button, focusRing } from "@/components/ui/button";
import type { SectionKind } from "@/content/types";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import { SECTION_ICON, SECTION_NAME } from "./sections";

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

export type BarTone = "neutral" | "good" | "almost";

const BAR_TONE: Record<BarTone, string> = {
  neutral: "border-line bg-surface/95 backdrop-blur-md",
  good: "border-good-line bg-good-soft",
  almost: "border-almost-line bg-almost-soft",
};

/**
 * The bottom of the player, fixed to the screen's foot: the main button, and after Check the feedback. The whole bar
 * turns green (correct) or amber (almost) with the feedback in it, so the result is impossible to miss.
 */
/**
 * The fixed bar at the bottom of a step (feedback and the main button). Its height is published as `--bar-h`, so the
 * step above leaves just that much room at its end (Player and PracticeRunner) and nothing is hidden under it.
 */
export function BottomBar({ children, tone = "neutral" }: { children: ReactNode; tone?: BarTone }) {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = bar.current;
    const root = document.documentElement;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => root.style.setProperty("--bar-h", `${el.offsetHeight}px`));
    observer.observe(el);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--bar-h");
    };
  }, []);
  return (
    <div
      ref={bar}
      data-bottom-bar
      className={`fixed inset-x-0 bottom-0 z-10 border-t pb-[env(safe-area-inset-bottom)] transition-colors duration-200 motion-reduce:transition-none ${BAR_TONE[tone]}`}
    >
      <div className="mx-auto flex max-w-xl flex-col gap-3 px-4 pt-4 pb-4">{children}</div>
    </div>
  );
}

export function MainButton({ label, onClick, disabled, tone = "neutral", icon }: { label: BiLabel; onClick: () => void; disabled?: boolean; tone?: BarTone; icon?: IconName }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`${button(tone === "almost" ? "accent" : "primary", "lg")} w-full`}>
      {icon && <Icon name={icon} />}
      <Bi label={label} />
    </button>
  );
}

export type FeedbackKind = "correct" | "almost" | "answer";

/** The tone of the bottom bar for a feedback kind (or none yet). */
export const toneOf = (kind: FeedbackKind | null | undefined): BarTone => (kind ? (kind === "correct" ? "good" : "almost") : "neutral");

/**
 * The feedback at the top of the tinted bottom bar: ✓ Correct! (green) or ↻ Almost (amber) in a badge, announced to
 * screen readers; `children` hold the answer, Listen / Slow and the reason. `label` replaces the heading (Great, Good, Try again).
 */
/**
 * The feedback after Check (owner, 2026-11-09): a compact mark and title (with the answer in bold after "The answer is"),
 * then the line under it: the reason, or the sentence when there is none, ending in its text-sized Listen
 * (`ListenInline`). Nothing else in the bar reads aloud.
 */
export function FeedbackPanel({ kind, label, answer, children }: { kind: FeedbackKind; label?: BiLabel; answer?: ReactNode; children?: ReactNode }) {
  const good = kind === "correct";
  return (
    <div aria-live="polite" className={`flex animate-panel-in flex-col gap-1.5 motion-reduce:animate-none ${good ? "text-good" : "text-almost"}`}>
      <div className="flex items-start gap-2.5">
        <span aria-hidden="true" className={`flex size-8 shrink-0 animate-pop-in items-center justify-center rounded-full motion-reduce:animate-none ${good ? "bg-good text-good-soft" : "bg-almost text-almost-soft"}`}>
          <Icon name={good ? "check" : "retry"} className="size-5" strokeWidth={2.8} />
        </span>
        <p className="font-display min-w-0 flex-1 pt-0.5 text-xl leading-snug font-bold">
          <Bi label={label ?? (good ? strings.correct : strings.almost)} className="items-start" />
          {answer && <span className="ml-1.5 text-ink">{answer}</span>}
        </p>
      </div>
      {children && <div className="flex flex-col gap-1 text-ink">{children}</div>}
    </div>
  );
}

export type OptionState = "idle" | "selected" | "right" | "wrong";

export const OPTION: Record<OptionState, string> = {
  idle: "border-line-strong bg-surface text-ink shadow-[0_2px_0_var(--line)] hover:border-brand/50 hover:bg-sunken",
  selected: "border-brand bg-brand-soft text-ink shadow-[0_2px_0_var(--brand)] ring-1 ring-brand",
  right: "border-good bg-good-soft text-good shadow-[0_2px_0_var(--good)]",
  wrong: "border-almost bg-almost-soft text-almost shadow-[0_2px_0_var(--almost-line)]",
};

const MARKER: Record<OptionState, string> = {
  idle: "bg-sunken text-ink-2 ring-1 ring-inset ring-line-strong",
  selected: "bg-brand-fill text-on-brand",
  right: "bg-good text-good-soft",
  wrong: "bg-almost text-almost-soft",
};

/** One answer card: a letter marker (A, B, C; hidden from screen readers, so the name is the answer), then ✓ or ↻ once judged. */
export function OptionButton({ text, state, disabled, onClick, index }: { text: string; state: OptionState; disabled?: boolean; onClick: () => void; index?: number }) {
  return (
    <button
      type="button"
      aria-pressed={state === "selected"}
      disabled={disabled}
      onClick={onClick}
      className={`flex min-h-15 w-full items-center gap-3 rounded-2xl border-2 px-3 py-3 text-left text-lg font-medium transition-[background-color,border-color,box-shadow,transform] duration-150 active:translate-y-0.5 active:shadow-none disabled:pointer-events-none motion-reduce:transition-none ${focusRing} ${OPTION[state]}`}
    >
      {index !== undefined && (
        <span aria-hidden="true" className={`font-display flex size-9 shrink-0 items-center justify-center rounded-xl text-base font-bold ${MARKER[state]}`}>
          {state === "right" ? <Icon name="check" className="size-5" strokeWidth={3} /> : state === "wrong" ? <Icon name="retry" className="size-5" strokeWidth={2.6} /> : String.fromCharCode(65 + index)}
        </span>
      )}
      <Text className="flex-1">{text}</Text>
      {index === undefined && state === "right" && <Icon name="check" />}
      {index === undefined && state === "wrong" && <Icon name="retry" />}
    </button>
  );
}

/** The small instruction above an activity ("Choose the correct sentence."), in the brand colour. */
export function Instruction({ children }: { children: ReactNode }) {
  return <p className="text-base font-semibold text-brand">{children}</p>;
}

/** The activity's main line (a prompt, a sentence), big. */
export function Prompt({ children, as: Tag = "h2" }: { children: ReactNode; as?: "h1" | "h2" | "p" }) {
  return <Tag className="font-display text-[1.7rem] leading-snug font-semibold text-ink">{children}</Tag>;
}

/** The section chip under the top bar: its icon and name. */
export function SectionChip({ kind }: { kind: SectionKind }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft py-1 pr-3 pl-2 text-sm font-semibold text-brand-ink">
      <Icon name={SECTION_ICON[kind]} className="size-4.5" />
      <Bi label={SECTION_NAME[kind]} className="items-start" />
    </span>
  );
}

/**
 * The lesson's progress bar, split into its sections (Warm-up, Learn, Practice…): each part fills as its activities
 * are done, so the learner sees both how far they are and how the lesson is built. One progressbar for screen readers.
 */
export function SegmentedProgress({ label, parts, done, total }: { label: string; parts: number[]; done: number; total: number }) {
  const starts = parts.map((_, i) => parts.slice(0, i).reduce((a, b) => a + b, 0));
  return (
    <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} className="flex flex-1 gap-1">
      {parts.map((size, i) => {
        const filled = Math.min(size, Math.max(0, done - starts[i]));
        return (
          <span key={i} className="h-3 overflow-hidden rounded-full bg-sunken ring-1 ring-inset ring-line" style={{ flexGrow: size, flexBasis: 0 }}>
            <span
              className="block h-full rounded-full bg-[linear-gradient(90deg,var(--brand),color-mix(in_srgb,var(--brand)_75%,var(--accent)))] transition-[width] duration-500 ease-out motion-reduce:transition-none"
              style={{ width: `${size > 0 ? (filled / size) * 100 : 0}%` }}
            />
          </span>
        );
      })}
    </div>
  );
}

/** The player's shape while the lesson or saved progress is loading. */
export function PlayerSkeleton() {
  return (
    <div className="mx-auto flex h-dvh max-w-xl flex-col gap-5 p-4" aria-busy="true">
      <Skeleton className="h-13 w-full" />
      <Skeleton className="h-8 w-40" />
      <Skeleton className="h-28 w-full" />
      <Skeleton className="h-15 w-full" />
      <Skeleton className="h-15 w-full" />
      <Skeleton className="h-15 w-full" />
    </div>
  );
}
