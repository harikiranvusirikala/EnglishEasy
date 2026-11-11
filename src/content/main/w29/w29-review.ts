import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 29, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick has / have + done-form round. */

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
  id: "w29-review",
  kind: "review",
  title: { en: "Repair Day", te: "రిపేర్ రోజు" },
  extras: [
    pick("q1", "My fridge ___ stopped working.", "మా ఫ్రిజ్ పని చేయడం ఆగిపోయింది.", ["has", "have", "is"], 0, {
      en: "A fridge is one thing, like he or she, so it takes has.",
      te: "ఫ్రిజ్ ఒక్కటే (he, she లాగా), అందుకే has.",
    }),
    pick("q2", "I have ___ the bill.", "నేను బిల్ కట్టేశాను.", ["paid", "pay", "paying"], 0, {
      en: "After have, pay changes to its done form, paid.",
      te: "have తర్వాత pay కాస్తా పూర్తయిన రూపం paid అవుతుంది.",
    }),
    pick("q3", "We ___ called three times.", "మేము మూడుసార్లు ఫోన్ చేశాం.", ["have", "has", "are"], 0, {
      en: "With we, use have; has is only for one person or thing.",
      te: "we తో have; has అనేది ఒక్కరికి లేదా ఒక్క వస్తువుకి మాత్రమే.",
    }),
    pick("q4", "I have ___ the screenshot.", "నేను screenshot పంపించాను.", ["sent", "send", "sended"], 0, {
      en: "Send changes to sent after have; sended is not a word.",
      te: "have తర్వాత send కాస్తా sent; sended అనే మాటే లేదు.",
    }),
    pick("q5", "The bathroom pipe has ___.", "బాత్రూమ్ పైపు పగిలిపోయింది.", ["burst", "bursted", "bursting"], 0, {
      en: "Burst stays the same in every form, so never add -ed.",
      te: "burst ఏ రూపంలోనూ మారదు; -ed చేర్చకూడదు.",
    }),
    pick("q6", "It ___ working yesterday.", "నిన్న పని చేయడం ఆగిపోయింది.", ["stopped", "has stopped", "stops"], 0, {
      en: "Yesterday is a past time, so use the past, without has.",
      te: "yesterday గడిచిపోయిన సమయం, అందుకే has లేకుండా past.",
    }),
  ],
};
