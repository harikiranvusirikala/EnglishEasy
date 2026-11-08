import type { Bi as BiLabel } from "@/lib/strings";
import type { LearnIn } from "@/learning/settings";

/**
 * A button, menu or heading label. The app's own words are English only (owner's decision, 2026-11-08); Telugu
 * appears only in lesson content (`ContentText`, `Meaning`) when the learner learns in Telugu. `mode` is accepted
 * for older callers and ignored.
 */
export function Bi({ label, className = "" }: { label: BiLabel; mode?: LearnIn; className?: string }) {
  return <span className={`inline-flex flex-col items-center ${className}`}>{label.en}</span>;
}
