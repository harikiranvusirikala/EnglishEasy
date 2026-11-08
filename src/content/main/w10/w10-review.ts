import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 10, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a will / going to round. */

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
  id: "w10-review",
  kind: "review",
  title: { en: "Plans Ahead", te: "ముందున్న ప్రణాళికలు" },
  extras: [
    pick("q1", "I am going ___ visit my cousin.", "నేను మా కజిన్ ఇంటికి వెళ్ళబోతున్నాను.", ["to", "for", "will"], 0, {
      en: "Going to + the action.",
      te: "going to తర్వాత పని పదం.",
    }),
    pick("q2", "The phone is ringing. I ___ answer it.", "ఫోన్ మోగుతోంది. నేను ఎత్తుతాను.", ["will", "am", "going"], 0, {
      en: "Decided right now: will.",
      te: "ఇప్పుడే నిర్ణయం: will.",
    }),
    pick("q3", "I promise I ___ be late.", "ఆలస్యం చేయనని మాటిస్తున్నాను.", ["won't", "don't", "not"], 0, {
      en: "A promise for later: won't.",
      te: "రాబోయే దానికి మాట: won't.",
    }),
    pick("q4", "Would you like ___ come for lunch?", "మీరు భోజనానికి వస్తారా?", ["to", "for", "coming"], 0, {
      en: "Would you like to come?",
      te: "Would you like to come అని పిలవాలి.",
    }),
    pick("q5", "The doctor will come ___ two days.", "డాక్టర్ రెండు రోజుల్లో వస్తారు.", ["in", "after", "on"], 0, {
      en: "From now: in two days.",
      te: "ఇప్పటి నుండి: in two days.",
    }),
    pick("q6", "I'll see you ___ week.", "వచ్చే వారం మిమ్మల్ని కలుస్తాను.", ["next", "last", "after"], 0, {
      en: "The coming week: next week.",
      te: "వచ్చే వారం: next week.",
    }),
  ],
};
