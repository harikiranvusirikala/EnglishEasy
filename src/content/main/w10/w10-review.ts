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
      en: "Going to is one phrase, and the plain verb comes after it: I am going to visit my cousin.",
      te: "going to కలిపే వాడాలి, తర్వాత మామూలు verb: I am going to visit my cousin.",
    }),
    pick("q2", "The phone is ringing. I ___ answer it.", "ఫోన్ మోగుతోంది. నేను ఎత్తుతాను.", ["will", "am", "going"], 0, {
      en: "You decide right now as the phone rings, so use will: I will answer it.",
      te: "ఫోన్ మోగుతుండగా ఇప్పుడే నిర్ణయం, అందుకే will: I will answer it.",
    }),
    pick("q3", "I promise I ___ be late.", "ఆలస్యం చేయనని మాటిస్తున్నాను.", ["won't", "don't", "not"], 0, {
      en: "To promise not to do something, use won't: I promise I won't be late.",
      te: "ఏదైనా చేయనని మాట ఇవ్వడానికి won't: I promise I won't be late.",
    }),
    pick("q4", "Would you like ___ come for lunch?", "మీరు భోజనానికి వస్తారా?", ["to", "for", "coming"], 0, {
      en: "To invite politely, say like to with the plain verb: Would you like to come for lunch?",
      te: "మర్యాదగా పిలవడానికి like to, తర్వాత మామూలు verb: Would you like to come for lunch?",
    }),
    pick("q5", "The doctor will come ___ two days.", "డాక్టర్ రెండు రోజుల్లో వస్తారు.", ["in", "after", "on"], 0, {
      en: "Counting from now, English uses in, not after: The doctor will come in two days.",
      te: "ఇప్పటి నుండి లెక్కపెడితే in, after కాదు: The doctor will come in two days.",
    }),
    pick("q6", "I'll see you ___ week.", "వచ్చే వారం మిమ్మల్ని కలుస్తాను.", ["next", "last", "after"], 0, {
      en: "For the coming week, say next week, not last week: I'll see you next week.",
      te: "వచ్చే వారం అంటే next week; last week గతం: I'll see you next week.",
    }),
  ],
};
