import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 19, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick phone-phrases round. */

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
  id: "w19-review",
  kind: "review",
  title: { en: "On the Phone", te: "ఫోన్‌లో" },
  extras: [
    pick(
      "q1",
      "Hello, ___ is Kiran.",
      "హలో, నేను కిరణ్‌ని మాట్లాడుతున్నాను.",
      ["this", "myself", "here"],
      0,
      {
        en: "On the phone, give your name with this is; myself is never used for names.",
        te: "ఫోన్‌లో this is తో పేరు చెప్పండి; పేరు చెప్పడానికి myself వాడరు.",
      },
      "indian-english",
    ),
    pick(
      "q2",
      "May I speak ___ Mohan, please?",
      "మోహన్ గారితో మాట్లాడొచ్చా?",
      ["to", "on", "at"],
      0,
      {
        en: "After speak, use to before the person you want.",
        te: "speak తర్వాత, కావలసిన మనిషి పేరు ముందు to వస్తుంది.",
      },
      "preposition",
    ),
    pick("q3", "Can I ___ a message?", "ఏమైనా చెప్పాలా? మెసేజ్ రాసుకోనా?", ["take", "keep", "do"], 0, {
      en: "To write down a message for someone, English says take a message.",
      te: "వేరేవాళ్ళ కోసం మెసేజ్ రాసుకోవడాన్ని ఇంగ్లీష్‌లో take a message అంటారు.",
    }),
    pick(
      "q4",
      "I'll call you back ___ ten minutes.",
      "పది నిమిషాల్లో మళ్ళీ ఫోన్ చేస్తాను.",
      ["in", "on", "at"],
      0,
      {
        en: "For time from now, use in, like in an hour.",
        te: "ఇప్పటి నుంచి ఎంతసేపట్లో అని చెప్పడానికి in: in an hour.",
      },
      "preposition",
    ),
    pick(
      "q5",
      "Sorry, you have ___ wrong number.",
      "Sorry అండీ, మీరు రాంగ్ నంబర్‌కి చేశారు.",
      ["the", "one", "an"],
      0,
      {
        en: "Telugu has no word like the, but English needs it before wrong number.",
        te: "తెలుగులో the లాంటి పదం లేదు, కానీ ఇంగ్లీష్‌లో wrong number ముందు the కావాలి.",
      },
      "article",
    ),
    pick(
      "q6",
      "Which number ___ you dial?",
      "మీరు ఏ నంబర్‌కి చేశారు?",
      ["did", "are", "is"],
      0,
      {
        en: "A past question needs did before you, and the verb stays plain after it.",
        te: "గతం గురించి ప్రశ్నకి you ముందు did కావాలి; దాని తర్వాత verb మారదు.",
      },
      "question",
    ),
  ],
};
