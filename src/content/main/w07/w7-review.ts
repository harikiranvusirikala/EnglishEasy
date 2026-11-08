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
    pick("q1", "She ___ TV at night.", "ఆమె రాత్రి TV చూస్తుంది.", ["watch", "watches", "watchs"], 1, {
      en: "Watch ends in ch: watches.",
      te: "watch చివర ch: watches.",
    }),
    pick("q2", "He ___ to the temple.", "అతను గుడికి వెళ్తాడు.", ["go", "goes", "gos"], 1, {
      en: "With he, go becomes goes.",
      te: "he తో go → goes.",
    }),
    pick("q3", "I ___ drink tea in the morning.", "నేను ఎప్పుడూ ఉదయం టీ తాగుతాను.", ["always", "never", "sometimes"], 0, {
      en: "Every time is always.",
      te: "ప్రతిసారీ = always.",
    }),
    pick("q4", "___ he drink coffee?", "అతను కాఫీ తాగుతాడా?", ["Do", "Does", "Is"], 1, {
      en: "With he, ask with does.",
      te: "he తో does.",
    }),
    pick("q5", "We pray ___ night.", "మేము రాత్రి పూజ చేస్తాం.", ["in", "at", "on"], 1, {
      en: "Night takes at.",
      te: "రాత్రికి at.",
    }),
    pick("q6", "I go to the temple ___ Sundays.", "ఆదివారాలు నేను గుడికి వెళ్తాను.", ["in", "at", "on"], 2, {
      en: "Days take on.",
      te: "వారాలకు on.",
    }),
  ],
};
