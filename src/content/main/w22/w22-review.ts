import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 22, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick comparatives round. */

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
  id: "w22-review",
  kind: "review",
  title: { en: "Shopping Day", te: "షాపింగ్ రోజు" },
  extras: [
    pick("q1", "This packet is ___ than that one.", "దాని కంటే ఈ ప్యాకెట్ చవక.", ["cheaper", "more cheaper", "cheap"], 0, {
      en: "Short words add -er, and never take more as well.",
      te: "చిన్న పదాలకు -er చేరుతుంది; దానితో పాటు more రాదు.",
    }),
    pick("q2", "That bag is ___ than this one.", "దీని కంటే ఆ సంచి పెద్దది.", ["bigger", "more bigger", "big"], 0, {
      en: "Big doubles its g and adds -er, with no more.",
      te: "big కి g రెండుసార్లు వచ్చి -er చేరుతుంది; more రాదు.",
    }),
    pick("q3", "This cooker is ___ expensive than that one.", "దాని కంటే ఈ కుక్కర్ ధర ఎక్కువ.", ["more", "most", "very"], 0, {
      en: "Expensive is a long word, so more goes before it.",
      te: "expensive పొడవైన పదం, అందుకే దాని ముందు more.",
    }),
    pick("q4", "This oil is ___ than that one.", "ఆ నూనె కంటే ఈ నూనె మంచిది.", ["better", "more better", "more good"], 0, {
      en: "Good changes fully to better, and never takes more.",
      te: "good పూర్తిగా మారి better అవుతుంది; more రాదు.",
    }),
    pick("q5", "The cheap one is ___. It breaks quickly.", "చవకది నాసిరకం. త్వరగా పాడైపోతుంది.", ["worse", "more worse", "more bad"], 0, {
      en: "Bad changes fully to worse, with no more before it.",
      te: "bad పూర్తిగా మారి worse అవుతుంది; ముందు more రాదు.",
    }),
    pick("q6", "This bag is heavier ___ that one.", "దాని కంటే ఈ సంచి బరువు ఎక్కువ.", ["than", "from", "to"], 0, {
      en: "When you compare two things, Telugu కంటే becomes than.",
      te: "రెండింటిని పోల్చేటప్పుడు తెలుగు 'కంటే' ఇంగ్లీష్‌లో than.",
    }),
  ],
};
