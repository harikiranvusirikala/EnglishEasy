import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 30, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick have you / did you round. */

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
  id: "w30-review",
  kind: "review",
  title: { en: "Travel Memories", te: "ప్రయాణ జ్ఞాపకాలు" },
  extras: [
    pick("q1", "___ you ever been to Delhi?", "మీరు ఎప్పుడైనా ఢిల్లీ వెళ్ళారా?", ["Have", "Did", "Are"], 0, {
      en: "With ever and been, the question starts with have.",
      te: "ever, been ఉన్న ప్రశ్న have తో మొదలవుతుంది.",
    }),
    pick("q2", "When ___ you go to Goa?", "మీరు గోవా ఎప్పుడు వెళ్ళారు?", ["did", "have", "are"], 0, {
      en: "When asks about a finished time, so use did.",
      te: "When అయిపోయిన సమయం గురించి అడుగుతుంది; అందుకే did.",
    }),
    pick("q3", "I ___ to Tirupati last year.", "నేను పోయిన సంవత్సరం తిరుపతి వెళ్ళాను.", ["went", "have been", "have gone"], 0, {
      en: "Last year is a finished time, so use the past.",
      te: "last year అయిపోయిన సమయం; అందుకే past రూపం.",
    }),
    pick("q4", "I have never ___ in a plane.", "నేను ఎప్పుడూ విమానం ఎక్కలేదు.", ["flown", "flew", "fly"], 0, {
      en: "After have, fly changes to its third form.",
      te: "have తర్వాత fly మూడో రూపంలోకి మారుతుంది.",
    }),
    pick("q5", "Venkat is in Chennai now. He has ___ to Chennai.", "వెంకట్ గారు ఇప్పుడు చెన్నైలో ఉన్నారు. ఆయన చెన్నై వెళ్ళారు.", ["gone", "been", "went"], 0, {
      en: "He is still there, so use gone, not been.",
      te: "ఆయన ఇంకా అక్కడే ఉన్నారు; అందుకే gone, been కాదు.",
    }),
    pick("q6", "___ you seen the new Telugu film?", "మీరు కొత్త తెలుగు సినిమా చూశారా?", ["Have", "Did", "Do"], 0, {
      en: "Seen is a third form, so the question needs have.",
      te: "seen మూడో రూపం; అందుకే ప్రశ్నకి have కావాలి.",
    }),
  ],
};
