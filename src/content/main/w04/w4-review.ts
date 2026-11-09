import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 4, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a have / his / her / 's round. */

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
  id: "w4-review",
  kind: "review",
  title: { en: "People Around Me", te: "నా చుట్టూ మనుషులు" },
  extras: [
    pick("q1", "He ___ a small shop.", "ఆయనకి ఒక చిన్న షాపు ఉంది.", ["have", "has", "is"], 1, {
      en: "He is one person, so use has: He has a small shop.",
      te: "he ఒక్కరే, కాబట్టి has: He has a small shop.",
    }),
    pick("q2", "Padma is my friend. ___ house is big.", "పద్మ నా స్నేహితురాలు. ఆవిడ ఇల్లు పెద్దది.", ["His", "Her", "She"], 1, {
      en: "Padma is a woman, so use her.",
      te: "పద్మ ఆడవారు, కాబట్టి her.",
    }),
    pick("q3", "This is ___ house.", "ఇది రవి ఇల్లు.", ["Ravi", "Ravi's", "he"], 1, {
      en: "The house belongs to Ravi, so add 's: Ravi's house.",
      te: "ఇల్లు రవి గారిది, కాబట్టి పేరుకి 's: Ravi's house.",
    }),
    pick("q4", "He ___ grey hair.", "ఆయనకి నెరిసిన జుట్టు ఉంది.", ["is", "has", "have"], 1, {
      en: "Telugu says ఆయనకి … ఉంది, so English uses has.",
      te: "తెలుగులో 'ఆయనకి … ఉంది' అంటే ఇంగ్లీష్‌లో has.",
    }),
    pick("q5", "___ are my shoes.", "అవి నా షూస్.", ["That", "Those", "This"], 1, {
      en: "Shoes far away are many, so say those.",
      te: "దూరంగా ఉన్న చాలా వస్తువులకి those.",
    }),
    pick("q6", "He doesn't ___ time.", "ఆయనకి టైమ్ లేదు.", ["have", "has", "having"], 0, {
      en: "After doesn't, the verb is always have.",
      te: "doesn't తర్వాత ఎప్పుడూ have.",
    }),
  ],
};
