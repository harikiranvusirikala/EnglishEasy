/**
 * How complex an English sentence is to hear, by its number of words (owner's rule, 2026-11-08): simple (up to 5
 * words), medium (6–10) or high (11 or more). The Slow button is offered only for medium and high sentences —
 * on questions too, but not on simple ones.
 */
export type SentenceLevel = "simple" | "medium" | "high";

export function sentenceLevel(text: string): SentenceLevel {
  const words = text.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  return words <= 5 ? "simple" : words <= 10 ? "medium" : "high";
}

/** Whether a sentence is worth a Slow button. */
export const needsSlow = (text: string) => sentenceLevel(text) !== "simple";
