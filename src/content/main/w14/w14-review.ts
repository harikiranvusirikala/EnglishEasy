import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 14, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick directions round on a little map. */

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
  id: "w14-review",
  kind: "review",
  title: { en: "Finding the Way", te: "దారి కనుక్కోవడం" },
  extras: [
    {
      id: "m1",
      type: "readIt",
      kind: "sign",
      heading: "Gandhi Nagar Colony Map",
      lines: [
        "The bus stand is at the corner of Main Road.",
        "The bank is opposite the bus stand.",
        "The school is behind the bank.",
        "The temple is between the bank and the park.",
      ],
      prompt: { en: "Read the colony map. What is behind the bank?", te: "కాలనీ మ్యాప్ చదవండి. బ్యాంక్ వెనకాల ఏం ఉంది?" },
      options: ["The temple", "The school", "The bus stand"],
      answer: 1,
      why: {
        en: "Behind means at the back of a place, hidden by it.",
        te: "behind అంటే ఒక చోటు వెనకాల; ముందు నుంచి కనిపించదు.",
      },
      say: "The school is behind the bank.",
    },
    pick("q1", "The temple is ___ the bank and the park.", "గుడి బ్యాంక్‌కీ పార్క్‌కీ మధ్యలో ఉంది.", ["between", "among", "middle"], 0, {
      en: "Between joins two places with and; Telugu మధ్యలో comes last.",
      te: "రెండు చోట్ల మధ్య అంటే between, and తో; తెలుగులో 'మధ్యలో' చివర వస్తుంది.",
    }),
    pick("q2", "The bank is ___ the bus stand, across the road.", "బ్యాంక్ రోడ్డుకి అవతల, బస్ స్టాండ్‌కి ఎదురుగా ఉంది.", ["opposite", "opposite to", "front"], 0, {
      en: "Opposite needs no to, even though Telugu says కి.",
      te: "తెలుగులో 'కి' అంటాం, కానీ opposite తర్వాత to అక్కర్లేదు.",
    }, "preposition"),
    pick("q3", "Walk ___ Main Road to the end.", "మెయిన్ రోడ్ వెంబడి చివరి దాకా నడవండి.", ["along", "across", "past"], 0, {
      en: "Along keeps you on the same road all the way.",
      te: "along అంటే అదే రోడ్డు వెంబడి, చివరి దాకా.",
    }),
    pick("q4", "Go ___ the school and turn left.", "స్కూల్ దాటి వెళ్ళి ఎడమకు తిరగండి.", ["past", "pass", "along"], 0, {
      en: "Past, with t, means you go by a place and keep going.",
      te: "past (t తో) అంటే ఒక చోటుని దాటి ముందుకు.",
    }),
    pick("q5", "Turn right ___ the signal.", "సిగ్నల్ దగ్గర కుడివైపు తిరగండి.", ["at", "in", "on"], 0, {
      en: "The point where you turn takes at, like a spot on the road.",
      te: "తిరగాల్సిన చోటుకి at; అది దారిలో ఒక గుర్తు.",
    }),
    pick("q6", "The bus stand is ___ the corner.", "బస్ స్టాండ్ మూలన ఉంది.", ["at", "in", "into"], 0, {
      en: "Where two roads meet is at the corner; in the corner is inside a room.",
      te: "రెండు రోడ్లు కలిసే చోటు at the corner; in the corner అంటే గది లోపలి మూల.",
    }),
  ],
};
