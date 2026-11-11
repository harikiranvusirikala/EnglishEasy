import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 32, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick wishes round. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi, fixIt?: FixIt): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
  ...(fixIt ? { fixIt } : {}),
});

export const day: ReviewDay = {
  id: "w32-review",
  kind: "review",
  title: { en: "Festival Time", te: "పండుగ సందడి" },
  extras: [
    pick("q1", "Wish you ___ happy Sankranti!", "మీకు సంక్రాంతి శుభాకాంక్షలు!", ["a", "the", "one"], 0, {
      en: "A wish takes a before happy, even though Telugu has no such word.",
      te: "శుభాకాంక్షలో happy ముందు a వస్తుంది; తెలుగులో అలాంటి పదం లేకపోయినా.",
    }, "article"),
    pick("q2", "Thank you! Wish you the ___.", "థాంక్యూ! మీకు కూడా అలాగే.", ["same", "also", "too"], 0, {
      en: "The same means the same wish, sent back to the person.",
      te: "the same అంటే అదే శుభాకాంక్ష, తిరిగి వారికి.",
    }),
    pick("q3", "Congratulations ___ your new house!", "మీ కొత్త ఇంటికి అభినందనలు!", ["on", "for", "to"], 0, {
      en: "Congratulations always takes on before the good news; Telugu కి is not for here.",
      te: "Congratulations తర్వాత ఎప్పుడూ on; ఇక్కడ 'కి' అంటే for కాదు.",
    }, "preposition"),
    pick("q4", "Many happy ___ of the day!", "మీకు పుట్టినరోజు శుభాకాంక్షలు!", ["returns", "return", "returned"], 0, {
      en: "This birthday wish never changes, and returns always has s.",
      te: "ఈ పుట్టినరోజు మాట ఎప్పుడూ మారదు; returns కి ఎప్పుడూ s ఉంటుంది.",
    }, "plural"),
    pick("q5", "Thank you, I'd love ___ come.", "థాంక్యూ, తప్పకుండా వస్తాను.", ["to", "for", "of"], 0, {
      en: "After I'd love, put to before the verb, as in I'd like to.",
      te: "I'd love తర్వాత verb ముందు to వస్తుంది, I'd like to లాగే.",
    }),
    pick("q6", "Sorry, I can't ___ it on Sunday.", "Sorry అండీ, ఆదివారం రాలేను.", ["make", "made", "making"], 0, {
      en: "After can't, the verb stays plain, never past and never -ing.",
      te: "can't తర్వాత verb మామూలుగానే ఉంటుంది; past కాదు, -ing కాదు.",
    }),
  ],
};
