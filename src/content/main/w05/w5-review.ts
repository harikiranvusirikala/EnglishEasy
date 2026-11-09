import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 5, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a there is / a-an / in-on round. */

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
  id: "w5-review",
  kind: "review",
  title: { en: "My Home, My Words", te: "నా ఇల్లు, నా మాటలు" },
  extras: [
    pick("q1", "There ___ three rooms.", "మూడు గదులు ఉన్నాయి.", ["is", "are", "have"], 1, {
      en: "Three rooms are many, so say there are.",
      te: "మూడు గదులు అంటే చాలా, కాబట్టి there are.",
    }),
    pick("q2", "It is ___ old house.", "అది ఒక పాత ఇల్లు.", ["a", "an", "the"], 1, {
      en: "Old starts with a vowel sound, so say an.",
      te: "old అచ్చు శబ్దంతో మొదలవుతుంది, కాబట్టి an.",
    }),
    pick("q3", "The keys are ___ the table.", "తాళాలు టేబుల్ మీద ఉన్నాయి.", ["in", "on", "under"], 1, {
      en: "The keys are on top of the table: on.",
      te: "తాళాలు టేబుల్ పైన ఉన్నాయి, కాబట్టి on.",
    }),
    pick("q4", "The milk is ___ the fridge.", "పాలు ఫ్రిజ్‌లో ఉన్నాయి.", ["in", "on", "under"], 0, {
      en: "The milk is inside the fridge, so say in.",
      te: "పాలు ఫ్రిజ్ లోపల ఉన్నాయి, కాబట్టి in.",
    }),
    pick("q5", "Fifty ___ are coming.", "యాభై మంది వస్తున్నారు.", ["people", "peoples", "person"], 0, {
      en: "For many persons, say people, with no s.",
      te: "చాలా మంది అయితే people. దానికి s రాదు.",
    }),
    pick("q6", "Please switch ___ the fan.", "కొంచెం ఫ్యాన్ వేయండి.", ["on", "open", "in"], 0, {
      en: "A fan is switched on, not opened.",
      te: "ఫ్యాన్‌కి open కాదు, switch on.",
    }),
  ],
};
