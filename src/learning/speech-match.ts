/** Judging what the learner said against the expected sentences (BUILD_PLAN A6): forgiving, never a numeric score on screen. */

export type SpeechLevel = "great" | "good" | "retry";
export const GREAT_AT = 0.85;
export const GOOD_AT = 0.6;

const FILLERS = new Set(["um", "umm", "uh", "uhh", "er", "erm", "ah", "hmm", "hm", "mm", "mmm", "eh", "oh"]);

/** Spoken forms recognisers write differently from the text on screen. */
const WORDS: Record<string, string[]> = {
  gonna: ["going", "to"],
  wanna: ["want", "to"],
  gotta: ["got", "to"],
  lemme: ["let", "me"],
  cannot: ["can", "not"],
  ok: ["okay"],
  "let's": ["let", "us"],
  "won't": ["will", "not"],
  "can't": ["can", "not"],
  "shan't": ["shall", "not"],
  "ain't": ["am", "not"],
  "y'all": ["you", "all"],
  "0": ["zero"],
  "1": ["one"],
  "2": ["two"],
  "3": ["three"],
  "4": ["four"],
  "5": ["five"],
  "6": ["six"],
  "7": ["seven"],
  "8": ["eight"],
  "9": ["nine"],
  "10": ["ten"],
};

const SUFFIXES: [string, string][] = [
  ["n't", "not"],
  ["'m", "am"],
  ["'re", "are"],
  ["'ve", "have"],
  ["'ll", "will"],
  ["'d", "would"],
  ["'s", "is"],
];

/** "it's" → it is. A possessive 's (Ravi's) is also read as "is" on both sides, so the comparison still agrees. */
function expand(word: string): string[] {
  if (WORDS[word]) return WORDS[word];
  for (const [suffix, full] of SUFFIXES) {
    if (word.length > suffix.length && word.endsWith(suffix)) {
      const stem = word.slice(0, -suffix.length);
      return stem ? [stem, full] : [full];
    }
  }
  return [word];
}

/** Lower-case words with punctuation, fillers and contractions removed: "I'm going." → ["i", "am", "going"]. */
export function speechWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[^a-z0-9'\s]/g, " ")
    .split(/\s+/)
    .map((w) => w.replace(/^'+|'+$/g, ""))
    .filter((w) => w !== "" && !FILLERS.has(w))
    .flatMap(expand);
}

/** Length of the longest run of expected words that appear in the same order in what was heard. */
function commonLength(a: string[], b: string[]): number {
  let row = new Array<number>(b.length + 1).fill(0);
  for (const x of a) {
    const next = [0];
    b.forEach((y, j) => next.push(x === y ? row[j] + 1 : Math.max(row[j + 1], next[j])));
    row = next;
  }
  return row[b.length];
}

export type SpeechJudgement = { level: SpeechLevel; score: number; /** index into `expected` of the sentence that matched best */ best: number; /** the transcript that matched best */ heard: string };

/** Best match over every accepted sentence and every recognition alternative: common words ÷ expected words. */
export function judgeSpeech(expected: string[], heard: string[]): SpeechJudgement {
  let result: SpeechJudgement = { level: "retry", score: 0, best: 0, heard: heard[0] ?? "" };
  const spoken = heard.map((h) => ({ text: h, words: speechWords(h) }));
  expected.forEach((sentence, best) => {
    const want = speechWords(sentence);
    if (want.length === 0) return;
    for (const h of spoken) {
      const score = commonLength(want, h.words) / want.length;
      if (score > result.score) result = { level: "retry", score, best, heard: h.text };
    }
  });
  result.level = result.score >= GREAT_AT ? "great" : result.score >= GOOD_AT ? "good" : "retry";
  return result;
}
