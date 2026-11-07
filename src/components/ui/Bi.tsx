"use client";

import { useLearnIn } from "@/lib/settings-store";
import type { Bi as BiLabel } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/**
 * A button or menu label. English (bold) always comes first in the DOM, so tests and screen readers find
 * it by its English name; the Telugu meaning follows, smaller and marked `lang="te"`, in Telugu mode only.
 * `mode` forces a mode (the component gallery shows both). Before hydration the Telugu part is in the HTML
 * and CSS hides it for English mode (`data-bi-te`, see globals.css), so nothing flashes.
 */
export function Bi({ label, mode, className = "" }: { label: BiLabel; mode?: LearnIn; className?: string }) {
  const learnIn = useLearnIn();
  const showTelugu = (mode ?? learnIn) === "te" && label.te !== label.en;
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <span className="font-semibold">{label.en}</span>
      {showTelugu && (
        <span lang="te" data-bi-te="" className="text-[0.8em] leading-snug font-normal">
          {label.te}
        </span>
      )}
    </span>
  );
}
