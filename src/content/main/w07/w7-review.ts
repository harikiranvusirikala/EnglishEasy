import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 7, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus an -s / frequency / time round. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
});

export const day: ReviewDay = {
  id: "w7-review",
  kind: "review",
  title: { en: "My Routine", te: "నా దినచర్య" },
  extras: [
    pick("q1", "She ___ TV at night.", "ఆవిడ రాత్రి TV చూస్తారు.", ["watch", "watches", "watching"], 1, {
      en: "She is one person, and watch ends in ch, so add es: watches.",
      te: "she ఒక్కరు, watch చివర ch, అందుకే es.",
    }),
    pick("q2", "He ___ to the temple.", "ఆయన గుడికి వెళ్తారు.", ["go", "goes", "going"], 1, {
      en: "For one person (he), go becomes goes.",
      te: "ఒక్కరి గురించి (he) అయితే go → goes.",
    }),
    pick("q3", "I ___ drink tea in the morning.", "నేను రోజూ ఉదయం తప్పకుండా టీ తాగుతాను.", ["always", "never", "sometimes"], 0, {
      en: "Every day without fail is always.",
      te: "రోజూ తప్పకుండా = always.",
    }),
    pick("q4", "___ he drink coffee?", "ఆయన కాఫీ తాగుతారా?", ["Do", "Does", "Is"], 1, {
      en: "Telugu just ends with ఆ (తాగుతారా?); English starts with Does for he.",
      te: "తెలుగులో చివర 'ఆ' (తాగుతారా?); ఇంగ్లీష్‌లో he కి ముందు Does.",
    }),
    pick("q5", "We pray ___ night.", "మేము రాత్రి పూజ చేస్తాం.", ["in", "at", "on"], 1, {
      en: "Morning and evening take in the, but night takes at.",
      te: "ఉదయం, సాయంత్రానికి in the; రాత్రికి మాత్రం at.",
    }),
    pick("q6", "I go to the temple ___ Sundays.", "ఆదివారాలు నేను గుడికి వెళ్తాను.", ["in", "at", "on"], 2, {
      en: "Days of the week take on, not in or at: on Sundays.",
      te: "వారంలోని రోజులకు on, in లేదా at కాదు: on Sundays.",
    }),
  ],
};
