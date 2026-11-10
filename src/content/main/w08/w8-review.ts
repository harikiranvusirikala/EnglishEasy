import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 8, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a can / could and calling-for-help round. The clarifying phrases come back from Week 2 as warm-ups. */

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
  id: "w8-review",
  kind: "review",
  title: { en: "Asking for Help", te: "సహాయం అడగడం" },
  extras: [
    pick("q1", "I can ___ pulihora.", "నేను పులిహోర చేయగలను.", ["cook", "cooks", "to cook"], 0, {
      en: "After can, the verb stays plain, with no s or to.",
      te: "can తర్వాత verb కి s, to రావు.",
    }),
    pick("q2", "___ I sit here?", "నేను ఇక్కడ కూర్చోవచ్చా?", ["Can", "Do", "Am"], 0, {
      en: "To ask if something is okay, start with Can.",
      te: "చేయవచ్చా అని అడగడానికి Can తో మొదలుపెట్టాలి.",
    }),
    pick("q3", "Could you ___ me, please?", "నాకు కొంచెం సహాయం చేస్తారా అండీ?", ["help", "helping", "helps"], 0, {
      en: "After could, the verb stays plain, with no -ing or s.",
      te: "could తర్వాత verb కి -ing, s రావు.",
    }),
    pick("q4", "When I was young, I ___ swim.", "చిన్నప్పుడు నాకు ఈత వచ్చేది.", ["can", "could", "can't"], 1, {
      en: "When I was young is the past, so can becomes could: I could swim.",
      te: "When I was young అంటే గతం, అందుకే can కాదు, could: I could swim.",
    }),
    pick("q5", "Please ___ one zero eight.", "ప్లీజ్, 108 కి ఫోన్ చేయండి.", ["call", "calling", "to call"], 0, {
      en: "After please, use the plain action word, with no to.",
      te: "please తర్వాత మామూలు verb, to వద్దు.",
    }),
    pick("q6", "I ___ down on the road.", "నేను రోడ్డు మీద పడిపోయాను.", ["fell", "fall", "falled"], 0, {
      en: "It already happened, so use the past of fall, which is fell.",
      te: "ఇది జరిగిపోయింది, కాబట్టి fall కి past అయిన fell వాడాలి.",
    }),
  ],
};
