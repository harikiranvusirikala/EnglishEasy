import type { RolePlay } from "@/content/types";

/** What the learner did in one turn. `speech` (0–1, from `judgeSpeech`) is set only when the reply was spoken. */
export type TurnResult = { good: boolean; skill?: string; speech?: number };

export type RolePlayScore = {
  /** Out of 10: how well spoken replies matched. `null` when nothing was spoken. */
  speaking: number | null;
  /** Out of 10: good replies chosen or spoken. */
  conversation: number;
  /** Skill ids where every reply was good / where some reply was not. */
  good: string[];
  practiceMore: string[];
};

const outOfTen = (fraction: number) => Math.round(Math.min(Math.max(fraction, 0), 1) * 10);

/** Scores a finished role play from its turns' results (VISION §7). Pure. */
export function scoreRolePlay(roleplay: Pick<RolePlay, "skills">, results: TurnResult[]): RolePlayScore {
  const spoken = results.filter((r) => r.speech !== undefined);
  const speaking = spoken.length > 0 ? outOfTen(spoken.reduce((sum, r) => sum + (r.speech ?? 0), 0) / spoken.length) : null;
  const conversation = results.length > 0 ? outOfTen(results.filter((r) => r.good).length / results.length) : 0;

  const good: string[] = [];
  const practiceMore: string[] = [];
  for (const skill of roleplay.skills) {
    const turns = results.filter((r) => r.skill === skill.id);
    if (turns.length === 0) continue;
    (turns.every((r) => r.good) ? good : practiceMore).push(skill.id);
  }
  return { speaking, conversation, good, practiceMore };
}
