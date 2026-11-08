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
    pick("q1", "He ___ a small shop.", "అతనికి ఒక చిన్న షాప్ ఉంది.", ["have", "has", "is"], 1, {
      en: "For one person, has.",
      te: "ఒక్కరికి has.",
    }),
    pick("q2", "Padma is my friend. ___ house is big.", "పద్మ నా స్నేహితురాలు. ఆమె ఇల్లు పెద్దది.", ["His", "Her", "She"], 1, {
      en: "Padma is a woman, so her.",
      te: "పద్మ ఆడవారు, కాబట్టి her.",
    }),
    pick("q3", "This is ___ house.", "ఇది రవి ఇల్లు.", ["Ravi", "Ravi's", "Ravi house"], 1, {
      en: "Add 's to the owner's name.",
      te: "ఎవరిదో ఆ పేరుకి 's.",
    }),
    pick("q4", "He ___ grey hair.", "అతనికి నెరిసిన జుట్టు ఉంది.", ["is", "has", "have"], 1, {
      en: "Hair is something he has.",
      te: "జుట్టు అతనికి ఉన్నది: has.",
    }),
    pick("q5", "___ are my shoes.", "అవి నా షూస్.", ["That", "Those", "This"], 1, {
      en: "Many things far away: those.",
      te: "దూరంగా ఉన్న చాలా వస్తువులు: those.",
    }),
    pick("q6", "He doesn't ___ time.", "అతనికి టైమ్ లేదు.", ["have", "has", "having"], 0, {
      en: "After doesn't, have.",
      te: "doesn't తర్వాత have.",
    }),
  ],
};
