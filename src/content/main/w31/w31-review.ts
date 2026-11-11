import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 31, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick just / already / yet / since / for round. */

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
  id: "w31-review",
  kind: "review",
  title: { en: "Done or Not Yet?", te: "అయిందా, ఇంకా లేదా?" },
  extras: [
    pick("q1", "Sorry, Ravi has ___ stepped out.", "సారీ, రవి గారు ఇప్పుడే బయటికి వెళ్ళారు.", ["just", "yet", "since"], 0, {
      en: "Just means a moment ago; it goes between has and the third form.",
      te: "just అంటే ఇప్పుడే; అది has కీ మూడో రూపానికీ మధ్యలో వస్తుంది.",
    }),
    pick("q2", "Don't worry, I have ___ paid the bill.", "కంగారు పడకండి, నేను ఇప్పటికే బిల్ కట్టేశాను.", ["already", "yet", "since"], 0, {
      en: "Already says the job is done; yet is only for questions and not.",
      te: "already అంటే పని అయిపోయింది; yet ప్రశ్నలకీ not ఉన్న వాక్యాలకీ మాత్రమే.",
    }),
    pick("q3", "Has the courier come ___?", "కొరియర్ వచ్చిందా?", ["yet", "just", "since"], 0, {
      en: "At the end of a question about something you expect, use yet.",
      te: "ఎదురుచూస్తున్న పని గురించి అడిగే ప్రశ్న చివర yet వస్తుంది.",
    }),
    pick("q4", "I have lived here ___ twenty years.", "నేను ఇరవై ఏళ్ళుగా ఇక్కడ ఉంటున్నాను.", ["for", "since", "from"], 0, {
      en: "Twenty years is an amount of time, so use for.",
      te: "ఇరవై ఏళ్ళు అనేది ఎంత కాలమో చెప్తుంది, అందుకే for.",
    }, "preposition"),
    pick("q5", "We have known them ___ childhood.", "వాళ్ళు మాకు చిన్నప్పటి నుండి తెలుసు.", ["since", "for", "from"], 0, {
      en: "Childhood is when it started, so use since; here Telugu నుండి is since, not from.",
      te: "చిన్నతనం అంటే మొదలైన సమయం, అందుకే since; ఇక్కడ 'నుండి' from కాదు.",
    }),
    pick("q6", "I ___ here since two thousand ten.", "నేను 2010 నుండి ఇక్కడ ఉంటున్నాను.", ["have lived", "am living", "live"], 0, {
      en: "From a start time up to now, English needs have lived, not the present.",
      te: "మొదలైన సమయం నుండి ఇప్పటి వరకు అంటే ఇంగ్లీష్‌లో have lived కావాలి, వర్తమానం కాదు.",
    }, "duration"),
  ],
};
