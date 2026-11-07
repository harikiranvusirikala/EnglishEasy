/** Splits mixed Telugu–English text into runs by script, so each run can be read by the matching voice. */

export type Script = "te" | "en";
export type Run = { text: string; script: Script };

const TELUGU = /[ఀ-౿]/;
/** Letters of a script decide a run; spaces, digits and punctuation join the run before them. */
const LETTER = /\p{L}/u;

export function splitScripts(text: string): Run[] {
  const runs: Run[] = [];
  let leading = ""; // neutral characters before the first letter
  for (const char of text) {
    const script: Script | null = TELUGU.test(char) ? "te" : LETTER.test(char) ? "en" : null;
    const last = runs[runs.length - 1];
    if (script === null) {
      if (last) last.text += char;
      else leading += char;
    } else if (last && last.script === script) {
      last.text += char;
    } else {
      runs.push({ text: runs.length === 0 ? leading + char : char, script });
    }
  }
  return runs.map((run) => ({ ...run, text: run.text.trim() })).filter((run) => run.text !== "");
}
