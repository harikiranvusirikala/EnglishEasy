"use client";

import { useLearnIn } from "@/lib/settings-store";
import type { Bi } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/** Explanation text (body, why, hint, situation): shows the Telugu or the English half by the Learn in setting. Telugu is marked `lang="te"`. */
export function BiText({ text, mode, className = "" }: { text: Bi; mode?: LearnIn; className?: string }) {
  const learnIn = useLearnIn();
  const shown = mode ?? learnIn;
  return (
    <span lang={shown === "te" ? "te" : undefined} className={className}>
      {text[shown]}
    </span>
  );
}
