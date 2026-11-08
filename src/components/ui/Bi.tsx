import type { Bi as BiLabel } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/**
 * A button, menu or heading label. The app's own words are English only (owner's decision, 2026-11-08); Telugu
 * appears only in lesson content (`ContentText`, `Meaning`) when the learner learns in Telugu. `mode` is accepted
 * for older callers and ignored. A label whose English half is in Telugu letters (a language's own name) gets
 * `lang="te"`.
 */
export function Bi({ label, className = "" }: { label: BiLabel; mode?: LearnIn; className?: string }) {
  // A label written in Telugu letters (the "తెలుగు" choice) is marked, so it gets the Telugu font.
  const te = /[\u0C00-\u0C7F]/.test(label.en);
  return (
    <span lang={te ? "te" : undefined} className={`inline-flex flex-col items-center ${className}`}>
      {label.en}
    </span>
  );
}
