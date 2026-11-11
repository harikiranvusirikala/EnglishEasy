import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 38, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick Let's / Shall we / How about round. */

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
  id: "w38-review",
  kind: "review",
  title: { en: "Let's Make a Plan", te: "ప్లాన్ వేద్దాం" },
  extras: [
    pick("q1", "___ go for a walk this evening.", "ఈ సాయంత్రం నడకకి వెళ్దాం.", ["Let's", "Let", "Shall"], 0, {
      en: "To suggest doing something together, start with Let's, which means let us.",
      te: "కలిసి చేద్దాం అని చెప్పడానికి Let's (let us) తో మొదలుపెట్టాలి.",
    }),
    pick(
      "q2",
      "___ we take an auto?",
      "ఆటోలో వెళ్దామా?",
      ["Shall", "Let's", "Are"],
      0,
      {
        en: "To ask your friend about a plan, start the question with Shall we.",
        te: "స్నేహితుల్ని ప్లాన్ గురించి అడగాలంటే ప్రశ్న Shall we తో మొదలవుతుంది.",
      },
      "question",
    ),
    pick("q3", "How about ___ to Araku next month?", "వచ్చే నెల అరకు వెళ్తే ఎలా ఉంటుంది?", ["going", "go", "to go"], 0, {
      en: "After How about, an action always takes -ing.",
      te: "How about తర్వాత పని వస్తే ఎప్పుడూ -ing.",
    }),
    pick("q4", "Why don't we ___ at the bus stand?", "బస్ స్టాండ్ దగ్గర కలవొచ్చు కదా?", ["meet", "meeting", "to meet"], 0, {
      en: "After Why don't we, use the plain verb with no -ing.",
      te: "Why don't we తర్వాత verb అలాగే వస్తుంది; -ing రాదు.",
    }),
    pick("q5", "I'm ___ Ravi on Friday.", "శుక్రవారం రవిని కలుస్తున్నాను.", ["meeting", "meet", "met"], 0, {
      en: "A fixed plan uses am with the -ing form, even for the future.",
      te: "ఖాయమైన ప్లాన్‌కి, రేపటిదైనా, am తో పాటు -ing.",
    }),
    pick(
      "q6",
      "Can we meet ___ Monday instead?",
      "బదులుగా సోమవారం కలుద్దామా?",
      ["on", "in", "at"],
      0,
      {
        en: "Telugu సోమవారం needs no extra word, but English days take on.",
        te: "తెలుగులో 'సోమవారం' కి ఏమీ అక్కర్లేదు; ఇంగ్లీష్‌లో రోజుల ముందు on వస్తుంది.",
      },
      "preposition",
    ),
  ],
};
