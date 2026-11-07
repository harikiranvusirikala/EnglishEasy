import { shuffle } from "./shuffle";

export type Tile = { id: number; word: string };

/** The words of a sentence, as written. */
export const wordsOf = (text: string): string[] => text.split(/\s+/).filter(Boolean);

/** A word for comparing: lower case, no punctuation (so "rice." = "Rice"). */
const plain = (word: string) => word.toLowerCase().replace(/[^\p{L}\p{N}']/gu, "");

/** True when two sentences have the same words in the same order, ignoring case and punctuation. */
export function sameSentence(a: string, b: string): boolean {
  const x = wordsOf(a).map(plain).filter(Boolean);
  const y = wordsOf(b).map(plain).filter(Boolean);
  return x.length === y.length && x.every((word, i) => word === y[i]);
}

/** The answer's words plus the distractors, in a seeded shuffle that never starts out already solved. Ids are unique even for repeated words. */
export function makeTiles(answer: string, extra: string[] = [], seed: string): Tile[] {
  const tiles = [...wordsOf(answer), ...extra].map((word, id) => ({ id, word }));
  let out = shuffle(tiles, seed);
  if (tiles.length > 1 && sameSentence(out.map((t) => t.word).join(" "), answer)) out = [...out.slice(1), out[0]];
  return out;
}
