import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 8, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a can / could round. */

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
  id: "w8-review",
  kind: "review",
  title: { en: "Asking for Help", te: "సహాయం అడగడం" },
  extras: [
    pick("q1", "I can ___ pulihora.", "నేను పులిహోర చేయగలను.", ["cook", "cooks", "to cook"], 0, {
      en: "After can, the verb stays plain, with no s or to: I can cook pulihora.",
      te: "can తర్వాత verb కి s, to రావు: I can cook pulihora.",
    }),
    pick("q2", "___ I sit here?", "నేను ఇక్కడ కూర్చోవచ్చా?", ["Can", "Do", "Am"], 0, {
      en: "To ask if something is okay, start with Can: Can I sit here?",
      te: "చేయవచ్చా అని అడగడానికి Can తో మొదలుపెట్టాలి: Can I sit here?",
    }),
    pick("q3", "Could you ___ me, please?", "నాకు కొంచెం సహాయం చేస్తారా అండీ?", ["help", "helping", "helps"], 0, {
      en: "After could, the verb stays plain, with no -ing or s: Could you help me, please?",
      te: "could తర్వాత verb కి -ing, s రావు: Could you help me, please?",
    }),
    pick("q4", "When I was young, I ___ swim.", "చిన్నప్పుడు నాకు ఈత వచ్చేది.", ["can", "could", "can't"], 1, {
      en: "When I was young is the past, so can becomes could: I could swim.",
      te: "When I was young అంటే గతం, అందుకే can కాదు, could: I could swim.",
    }),
    pick("q5", "Sorry, I don't ___.", "sorry అండీ, నాకు అర్థం కావడం లేదు.", ["understand", "understanding", "understands"], 0, {
      en: "After don't, the verb stays plain: Sorry, I don't understand.",
      te: "don't తర్వాత verb మారదు: Sorry, I don't understand.",
    }),
    pick("q6", "Could you say that ___?", "మళ్ళీ ఒకసారి చెప్తారా?", ["again", "repeat", "more"], 0, {
      en: "Telugu మళ్ళీ is again, and it goes at the end: Could you say that again?",
      te: "'మళ్ళీ' = again, అది చివర వస్తుంది: Could you say that again?",
    }),
  ],
};
