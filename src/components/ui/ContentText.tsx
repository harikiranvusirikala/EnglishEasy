"use client";

import { useLearnIn } from "@/lib/settings-store";
import type { Bi } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/**
 * Lesson content that follows the Learn in setting: explanations, prompts, reasons, hints, situations. Shows the
 * Telugu or the English half; Telugu is marked `lang="te"`. `mode` forces one (the component gallery shows both).
 */
export function ContentText({ text, mode, className = "" }: { text: Bi; mode?: LearnIn; className?: string }) {
  const learnIn = useLearnIn();
  const shown = mode ?? learnIn;
  return (
    <span lang={shown === "te" ? "te" : undefined} className={className}>
      {text[shown]}
    </span>
  );
}

/** A sentence's Telugu meaning, shown only when the learner learns in Telugu. */
export function Meaning({ children, className = "text-base text-ink-2", as: Tag = "p" }: { children: string; className?: string; as?: "p" | "span" }) {
  const learnIn = useLearnIn();
  if (learnIn !== "te") return null;
  return (
    <Tag lang="te" className={className}>
      {children}
    </Tag>
  );
}
