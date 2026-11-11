import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 25, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick will / going to round. */

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
  id: "w25-review",
  kind: "review",
  title: { en: "Rain or Shine", te: "ఎండైనా, వానైనా" },
  extras: [
    pick(
      "q1",
      "Look at those clouds! It's ___ to rain.",
      "ఆ మబ్బులు చూడండి! వర్షం వచ్చేలా ఉంది.",
      ["going", "go", "gone"],
      0,
      { en: "For rain you can see coming, the form is going to.", te: "కళ్ళ ముందే కనిపిస్తున్న వర్షానికి going to వాడతాం." },
      "be",
    ),
    pick("q2", "I think it ___ rain tomorrow.", "రేపు వర్షం పడుతుందని నాకు అనిపిస్తోంది.", ["will", "is", "going"], 0, {
      en: "For your guess about tomorrow, use will with a plain verb.",
      te: "రేపటి గురించి మీ ఊహకి will, దాని తర్వాత verb మారదు.",
    }),
    pick("q3", "It ___ be hot this week. The rains are here.", "ఈ వారం వేడిగా ఉండదు. వానలు వచ్చేశాయి.", ["won't", "don't", "isn't"], 0, {
      en: "No about the future is won't, and the verb after it stays plain.",
      te: "రాబోయే దానికి 'ఉండదు' అంటే won't; దాని తర్వాత verb మారదు.",
    }),
    pick(
      "q4",
      "Summer ___ in March here.",
      "ఇక్కడ వేసవి మార్చిలో మొదలవుతుంది.",
      ["starts", "start", "starting"],
      0,
      { en: "Summer is one thing, like he or she, and this happens every year.", te: "summer ఒక్కటే, he లేదా she లాగా; ఇది ప్రతి ఏడాదీ జరిగేది." },
      "he-she-s",
    ),
    pick(
      "q5",
      "There is ___ heat wave warning today.",
      "ఈ రోజు వడగాలుల హెచ్చరిక ఉంది.",
      ["a", "an", "many"],
      0,
      { en: "One warning takes a, and heat starts with a consonant sound.", te: "ఒక్క హెచ్చరికకి a; heat హల్లు శబ్దంతో మొదలవుతుంది, అందుకే an రాదు." },
      "article",
    ),
    pick("q6", "Hurry up! We're going to ___ wet.", "త్వరగా పదండి! తడిసిపోతాం.", ["get", "getting", "got"], 0, {
      en: "After going to, the verb stays plain, with no -ing.",
      te: "going to తర్వాత verb మారదు; -ing రాదు.",
    }),
  ],
};
