"use client";

import { useState } from "react";

export type QuestionResult = "correct" | "almost" | "failed";

/**
 * The retry-once rule (VISION §4.4) for a question with one right option: the first wrong answer gets "Almost" and
 * one more try; a second wrong answer shows the answer (`failed`). Every check is reported through `onAnswer`.
 */
export function useQuestion(answer: number, onAnswer: (correct: boolean) => void) {
  const [selected, setSelected] = useState<number | null>(null);
  const [tries, setTries] = useState(0);
  const [result, setResult] = useState<QuestionResult | null>(null);

  const check = () => {
    if (selected === null || result) return;
    const correct = selected === answer;
    onAnswer(correct);
    setTries(tries + 1);
    setResult(correct ? "correct" : tries === 0 ? "almost" : "failed");
  };
  const retry = () => {
    setSelected(null);
    setResult(null);
  };
  return { selected, setSelected, result, check, retry };
}
