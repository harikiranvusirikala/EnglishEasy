"use client";

import { useLearnIn } from "@/lib/settings-store";
import type { Bi } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/**
 * A sentence that explains something (help, instructions, messages, a section's purpose): Telugu in Telugu mode,
 * English otherwise (owner's decision, 2026-11-08: simple words — buttons, labels, titles, counts — are English only,
 * through `Bi` or plain `.en`; things that need understanding follow Learn in). Telugu is marked `lang="te"`.
 */
export function BiText({ text, mode, className = "" }: { text: Bi; mode?: LearnIn; className?: string }) {
  const learnIn = useLearnIn();
  const shown = mode ?? learnIn;
  return (
    <span lang={shown === "te" ? "te" : undefined} className={className}>
      {text[shown]}
    </span>
  );
}
