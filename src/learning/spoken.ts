import type { Activity, Bi, PlayableDay } from "@/content/types";
import type { AudioVoice } from "./audio-manifest";

/**
 * Everything the player reads aloud for a day, in both Learn-in languages, so `npm run audio` can record it all ahead
 * of time and the player can fetch a lesson's clips for offline (BUILD_PLAN "one recorded voice"). It mirrors what the
 * screens pass to `speak` / `narrate`; anything missed still plays, in the phone's own voice. After Check, the feedback's
 * speaker also reads the question's reason (`why`), and a role play reads its scene, in the Learn-in language (owner,
 * 2026-11-09), so both languages are listed.
 */
export type Spoken = { text: string; voice: AudioVoice };

/**
 * What a question's Listen reads: the whole prompt when it contains the sentence (`"I walk every morning." అంటే ఏంటి?`,
 * owner 2026-11-08), else just the sentence. Listening questions keep the sentence alone (their prompt gives nothing more).
 */
export function askText(prompt: Bi, say: string | undefined): Bi | string | undefined {
  return say && prompt.en.includes(say) && prompt.te.includes(say) ? prompt : say;
}

function ofActivity(activity: Activity): (string | Bi | Spoken | undefined)[] {
  switch (activity.type) {
    case "explain":
      return activity.examples.map((e) => e.en);
    case "whenToUse":
      return activity.items.map((item) => item.example.en);
    case "dontSay":
      return [activity.right];
    case "choose":
      return [askText(activity.prompt, activity.say), activity.say ?? activity.options[activity.answer], activity.why];
    case "fillBlank":
      return [activity.sentence.replace("___", activity.options[activity.answer]), activity.why];
    case "arrange":
    case "translate":
      return [activity.answer];
    case "findMistake":
      return [activity.fix, activity.why];
    case "listenChoose":
      return [activity.say];
    case "repeat":
      return [activity.say, ...(activity.steps ?? [])];
    case "sound":
      return [...activity.sound.sides.flatMap((side) => side.words), ...activity.sound.pair];
    case "soundPair":
      return activity.words.map((w) => w.en);
    case "situation":
      return [activity.options[activity.answer], ...activity.expected];
    case "dialogue":
      return [...activity.lines.map((line) => ({ text: line.en, voice: line.voice })), ...activity.questions.map((q) => q.options[q.answer])];
    case "roleplay": {
      // The partner speaks in their own voice (a man: "b"); the scene and the learner's good replies in voice "a".
      const voice = activity.voice ?? "a";
      return [
        activity.scene,
        ...activity.turns.flatMap((turn) => [
          { text: turn.partner, voice },
          ...turn.replies.filter((r) => r.good).map((r) => r.say),
          ...turn.replies.flatMap((r) => (r.react ? [{ text: r.react.en, voice }] : [])),
        ]),
      ];
    }
    case "match":
      return [];
  }
}

export function spokenTexts(day: PlayableDay): Spoken[] {
  const items = [...day.sections.flatMap((section) => section.activities.flatMap(ofActivity)), ...(day.wrapup?.key.map((k) => k.en) ?? [])];
  const out = new Map<string, Spoken>();
  const add = (text: string, voice: AudioVoice = "a") => {
    if (text.trim()) out.set(`${voice}:${text}`, { text, voice });
  };
  for (const item of items) {
    if (item === undefined) continue;
    if (typeof item === "string") add(item);
    else if ("voice" in item) add(item.text, item.voice);
    else {
      add(item.en);
      add(item.te);
    }
  }
  return [...out.values()];
}
