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
      en: "They means many people, so the past is were: They were at the temple yesterday.",
      te: "they అంటే చాలా మంది, అందుకే గతంలో were: They were at the temple yesterday.",
    }),
    pick("q2", "I ___ my friend yesterday.", "నిన్న నేను నా స్నేహితుడికి ఫోన్ చేశాను.", ["call", "called", "calling"], 1, {
      en: "Yesterday shows the past, so add -ed: I called my friend yesterday.",
      te: "yesterday అంటే గతం, అందుకే -ed చేర్చాలి: I called my friend yesterday.",
    }),
    pick("q3", "She ___ a saree.", "ఆవిడ ఒక చీర కొన్నారు.", ["buyed", "bought", "buy"], 1, {
      en: "Buy takes no -ed; its past is bought: She bought a saree.",
      te: "buy కి -ed రాదు, దాని గతం bought: She bought a saree.",
    }),
    pick("q4", "Where did you ___?", "మీరు ఎక్కడికి వెళ్ళారు?", ["go", "went", "gone"], 0, {
      en: "Did already shows the past, so the verb stays plain: Where did you go?",
      te: "did లోనే గతం ఉంది, అందుకే go మారదు: Where did you go?",
    }),
    pick("q5", "It started two days ___.", "అది రెండు రోజుల క్రితం మొదలైంది.", ["ago", "since", "last"], 0, {
      en: "Like క్రితం in Telugu, ago comes after the time: It started two days ago.",
      te: "క్రితం లాగే ago సమయం తర్వాత వస్తుంది; since ఇక్కడ సరిపోదు: It started two days ago.",
    }),
    pick("q6", "Yesterday we ___ dosa for breakfast.", "నిన్న మేము టిఫిన్‌కి దోసె తిన్నాం.", ["ate", "eated", "eat"], 0, {
      en: "Eat takes no -ed; its past is ate: Yesterday we ate dosa for breakfast.",
      te: "eat కి -ed రాదు, దాని గతం ate: Yesterday we ate dosa for breakfast.",
    }),
  ],
};
