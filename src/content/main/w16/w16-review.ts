import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 16, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick "for + time" round. */

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
  id: "w16-review",
  kind: "review",
  title: { en: "Health Check", te: "ఆరోగ్య పరీక్ష" },
  extras: [
    pick(
      "q1",
      "I've had this cough ___ a week.",
      "ఈ దగ్గు వారం రోజులుగా ఉంది.",
      ["for", "since", "from"],
      0,
      {
        en: "A length of time, like a week, always takes for in English.",
        te: "వారం లాంటి కాల వ్యవధికి ఇంగ్లీష్‌లో ఎప్పుడూ for వాడాలి.",
      },
      "preposition",
    ),
    pick("q2", "How long have you ___ this pain?", "ఈ నొప్పి ఎన్ని రోజులుగా ఉంది?", ["had", "have", "has"], 0, {
      en: "The doctor's question is fixed: have you, then had.",
      te: "ఇది స్థిరమైన ప్రశ్న: have you, తర్వాత had.",
    }),
    pick("q3", "Walk ___ thirty minutes every day.", "రోజూ అరగంట నడవండి.", ["for", "in", "since"], 0, {
      en: "For tells how long you do something each time.",
      te: "ఎంతసేపు చేయాలో for చెప్తుంది.",
    }),
    pick(
      "q4",
      "I stayed in hospital ___ two nights.",
      "నేను రెండు రాత్రులు ఆసుపత్రిలో ఉన్నాను.",
      ["for", "since", "from"],
      0,
      {
        en: "For works with the past too: it tells how long.",
        te: "past లో కూడా ఎంత కాలమో చెప్పడానికి for.",
      },
      "preposition",
    ),
    pick("q5", "Please come ___ an empty stomach.", "ఖాళీ కడుపుతో రండి.", ["on", "with", "in"], 0, {
      en: "Telugu says కడుపుతో, but English says on an empty stomach.",
      te: "తెలుగులో 'కడుపుతో' అంటాం; ఇంగ్లీష్‌లో on an empty stomach అనాలి.",
    }),
    pick(
      "q6",
      "I've had diabetes ___ ten years.",
      "నాకు పదేళ్ళుగా షుగర్ ఉంది.",
      ["for", "since", "from"],
      0,
      {
        en: "Telugu says పదేళ్ళ నుంచి, but English uses for with a number of years.",
        te: "'పదేళ్ళ నుంచి' అన్నా, సంవత్సరాల లెక్కకి ఇంగ్లీష్‌లో for వాడాలి.",
      },
      "preposition",
    ),
  ],
};
