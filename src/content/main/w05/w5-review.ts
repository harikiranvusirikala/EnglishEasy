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
      en: "Many rooms: there are.",
      te: "చాలా గదులు: there are.",
    }),
    pick("q2", "It is ___ old house.", "అది ఒక పాత ఇల్లు.", ["a", "an", "the"], 1, {
      en: "Before a vowel sound: an.",
      te: "అచ్చు శబ్దం ముందు an.",
    }),
    pick("q3", "The keys are ___ the table.", "తాళాలు టేబుల్ మీద ఉన్నాయి.", ["in", "on", "under"], 1, {
      en: "On top of: on.",
      te: "మీద అంటే on.",
    }),
    pick("q4", "The milk is ___ the fridge.", "పాలు ఫ్రిజ్‌లో ఉన్నాయి.", ["in", "on", "under"], 0, {
      en: "Inside: in.",
      te: "లోపల అంటే in.",
    }),
    pick("q5", "Fifty ___ are coming.", "యాభై మంది వస్తున్నారు.", ["people", "peoples", "person"], 0, {
      en: "Many persons are people.",
      te: "చాలా మంది అంటే people.",
    }),
    pick("q6", "Please switch ___ the fan.", "దయచేసి ఫ్యాన్ వేయండి.", ["on", "open", "in"], 0, {
      en: "A fan is switched on.",
      te: "ఫ్యాన్‌ని switch on చేస్తాం.",
    }),
  ],
};
