import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 17, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick dosage round. */

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
  id: "w17-review",
  kind: "review",
  title: { en: "Medicine Time", te: "మందుల సమయం" },
  extras: [
    pick("q1", "Take one tablet ___ a day.", "రోజుకు రెండుసార్లు ఒక్కో మాత్ర వేసుకోండి.", ["twice", "two", "two times in"], 0, {
      en: "For how often, say twice, and a day with no in.",
      te: "ఎన్నిసార్లో చెప్పడానికి twice; a day ముందు in రాదు.",
    }),
    pick("q2", "Take it three ___ a day.", "రోజుకు మూడుసార్లు వేసుకోండి.", ["times", "time", "timings"], 0, {
      en: "Three is more than one, so time takes s.",
      te: "మూడు అంటే ఒకటి కంటే ఎక్కువ, అందుకే time కి s.",
    }),
    pick("q3", "Take one tablet ___ night.", "రాత్రి ఒక మాత్ర వేసుకోండి.", ["at", "in", "on"], 0, {
      en: "English says at night, but in the morning.",
      te: "రాత్రికి at night; ఉదయానికి in the morning.",
    }),
    pick("q4", "You ___ to finish all the tablets.", "మీరు మాత్రలన్నీ పూర్తిగా వేసుకోవాలి.", ["have", "has", "must"], 0, {
      en: "With you, use have to; must never takes to.",
      te: "you తో have to; must తర్వాత to రాదు.",
    }),
    pick("q5", "She ___ to take it after food.", "ఆవిడ భోజనం తర్వాత వేసుకోవాలి.", ["has", "have", "is"], 0, {
      en: "With he or she, have changes to has.",
      te: "he, she తో have కాదు, has వాడాలి.",
    }),
    pick("q6", "Don't take it ___ an empty stomach.", "ఖాళీ కడుపుతో వేసుకోకండి.", ["on", "in", "with"], 0, {
      en: "Telugu says కడుపుతో, but English uses on with stomach.",
      te: "తెలుగులో 'కడుపుతో' అన్నా, ఇంగ్లీష్‌లో stomach తో on వాడాలి.",
    }),
  ],
};
