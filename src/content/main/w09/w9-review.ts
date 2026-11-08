import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 9, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a was / past-verb round. */

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
  id: "w9-review",
  kind: "review",
  title: { en: "Last Week", te: "పోయిన వారం" },
  extras: [
    pick("q1", "They ___ at the temple yesterday.", "వాళ్ళు నిన్న గుడిలో ఉన్నారు.", ["was", "were", "are"], 1, {
      en: "They, in the past: were.",
      te: "గతంలో they తో were.",
    }),
    pick("q2", "I ___ my friend yesterday.", "నిన్న నేను నా స్నేహితుడికి ఫోన్ చేశాను.", ["call", "called", "calling"], 1, {
      en: "Past: add -ed.",
      te: "గతం: -ed చేర్చాలి.",
    }),
    pick("q3", "She ___ a saree.", "ఆమె ఒక చీర కొన్నది.", ["buyed", "bought", "buy"], 1, {
      en: "Buy changes to bought.",
      te: "buy గతం bought.",
    }),
    pick("q4", "Where did you ___?", "మీరు ఎక్కడికి వెళ్ళారు?", ["go", "went", "gone"], 0, {
      en: "After did, the plain word: go.",
      te: "did తర్వాత మామూలు పదం: go.",
    }),
    pick("q5", "It started two days ___.", "అది రెండు రోజుల క్రితం మొదలైంది.", ["ago", "before", "last"], 0, {
      en: "Two days ago.",
      te: "two days ago అనాలి.",
    }),
    pick("q6", "We ___ dosa for breakfast.", "మేము టిఫిన్‌కి దోసె తిన్నాం.", ["ate", "eated", "eat"], 0, {
      en: "Eat changes to ate.",
      te: "eat గతం ate.",
    }),
  ],
};
