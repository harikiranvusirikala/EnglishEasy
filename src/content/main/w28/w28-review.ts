import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 28, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick want to / need to / have to round and a follow-up round. */

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
  id: "w28-review",
  kind: "review",
  title: { en: "Getting Things Done", te: "పనులు చక్కబెట్టుకోవడం" },
  extras: [
    pick("q1", "I want ___ my mobile number.", "నా మొబైల్ నంబర్ మార్చుకోవాలనుకుంటున్నాను.", ["to change", "change", "changing"], 0, {
      en: "After want, add to before the next verb.",
      te: "want తర్వాత verb వస్తే మధ్యలో to చేర్చాలి.",
    }),
    pick(
      "q2",
      "My neighbour ___ to give his life certificate.",
      "మా పక్కింటాయన లైఫ్ సర్టిఫికెట్ ఇవ్వాలి.",
      ["needs", "need", "needing"],
      0,
      { en: "One person, like he or she, so need takes s.", te: "ఒక్కరే, he లేదా she లాగా; అందుకే need కి s." },
      "he-she-s",
    ),
    pick("q3", "Do I ___ to come in person?", "నేను స్వయంగా రావాలా?", ["need", "needs", "am"], 0, {
      en: "After do, need stays plain, with no s.",
      te: "do తర్వాత need మారదు, s రాదు.",
    }),
    pick(
      "q4",
      "She ___ to give her fingerprint. It is the rule.",
      "ఆవిడ వేలిముద్ర వేయాలి. అది నియమం.",
      ["has", "have", "having"],
      0,
      { en: "A rule takes have to, and with she, have becomes has.", te: "నియమానికి have to; she తో have → has." },
      "he-she-s",
    ),
    pick("q5", "I ___ on the tenth. Is it ready?", "నేను పదో తారీఖున అప్లై చేశాను. రెడీ అయిందా?", ["applied", "apply", "am apply"], 0, {
      en: "The tenth is already past, so use applied.",
      te: "పదో తారీఖు అయిపోయింది, అందుకే applied.",
    }),
    pick(
      "q6",
      "I applied ___ the tenth of October.",
      "అక్టోబర్ పదో తారీఖున అప్లై చేశాను.",
      ["on", "in", "at"],
      0,
      { en: "A date takes on; a month alone takes in.", te: "తేదీ ముందు on; నెల ఒక్కటే అయితే in." },
      "preposition",
    ),
    pick(
      "q7",
      "How many ___ will it take?",
      "ఎన్ని రోజులు పడుతుంది?",
      ["days", "day"],
      0,
      { en: "How many asks about more than one, so day takes s.", te: "How many అంటే ఒకటి కంటే ఎక్కువ; అందుకే day కి s." },
      "plural",
    ),
  ],
};
