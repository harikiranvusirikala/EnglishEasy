import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 24, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick was / were + -ing vs past round. */

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
  id: "w24-review",
  kind: "review",
  title: { en: "What Happened?", te: "ఏం జరిగింది?" },
  extras: [
    pick("q1", "I ___ cooking when the phone rang.", "నేను వంట చేస్తుంటే ఫోన్ మోగింది.", ["was", "were", "am"], 0, {
      en: "With I, use was before the -ing verb in the past.",
      te: "గతంలో I తో -ing verb ముందు was వాడాలి.",
    }),
    pick("q2", "They were watching TV when the power ___ off.", "వాళ్ళు TV చూస్తుంటే కరెంట్ పోయింది.", ["went", "going", "go"], 0, {
      en: "The power going off was short and sudden, so use the past.",
      te: "కరెంట్ పోవడం ఒక్కసారిగా జరిగిన చిన్న సంఘటన, అందుకే past.",
    }),
    pick("q3", "While I was ___, I saw an old friend.", "నేను నడుస్తూ ఉండగా, పాత స్నేహితులు ఒకరు కనిపించారు.", ["walking", "walk", "walked"], 0, {
      en: "After was, the long action takes -ing.",
      te: "was తర్వాత పొడవైన పనికి -ing వస్తుంది.",
    }),
    {
      id: "q4",
      type: "fillBlank",
      fixIt: "question",
      sentence: "What ___ you doing at eight?",
      te: "ఎనిమిదింటికి మీరు ఏం చేస్తూ ఉన్నారు?",
      options: ["were", "you were", "did"],
      answer: 0,
      why: {
        en: "A question puts were before you; did never goes with -ing.",
        te: "ప్రశ్నలో you కంటే ముందు were; -ing తో did రాదు.",
      },
    },
    pick("q5", "A bike ___ me while I was crossing the road.", "నేను రోడ్డు దాటుతూ ఉండగా ఒక బైక్ నన్ను గుద్దింది.", ["hit", "hits", "hitted"], 0, {
      en: "The hit was sudden, so use the past; hit stays hit, with no -ed.",
      te: "గుద్దడం ఒక్కసారిగా జరిగింది, అందుకే past; hit కి past కూడా hit, -ed రాదు.",
    }),
    pick("q6", "She was sleeping ___ the phone rang.", "ఫోన్ మోగినప్పుడు ఆవిడ నిద్రపోతూ ఉన్నారు.", ["when", "during", "at"], 0, {
      en: "Before a short action in the past, use when; during needs a thing after it.",
      te: "చిన్న సంఘటన ముందు when; during తర్వాత ఒక విషయం రావాలి (during lunch).",
    }),
  ],
};
