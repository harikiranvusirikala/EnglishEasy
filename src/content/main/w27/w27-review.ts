import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 27, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick dates and spelling round. */

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
  id: "w27-review",
  kind: "review",
  title: { en: "Name, Date, Sign", te: "పేరు, తేదీ, సంతకం" },
  extras: [
    pick("q1", "My date of birth is the ___ of June.", "నా పుట్టిన తేదీ జూన్ ఐదు.", ["fifth", "five", "fiveth"], 0, {
      en: "For a date, five changes to fifth; fiveth is not a word.",
      te: "తేదీకి five, fifth అవుతుంది; fiveth అనే పదం లేదు.",
    }),
    pick("q2", "I was born ___ nineteen sixty.", "నేను 1960 లో పుట్టాను.", ["in", "on", "at"], 0, {
      en: "A year or a month takes in; one date takes on.",
      te: "సంవత్సరం, నెలకి in; ఒక తేదీకి on.",
    }),
    pick("q3", "My cousin was born ___ the third of May.", "మా కజిన్ మే మూడున పుట్టారు.", ["on", "in", "at"], 0, {
      en: "One date takes on, like a day of the week.",
      te: "ఒక తేదీకి on, వారం పేరుకి లాగానే.",
    }),
    {
      id: "q4",
      type: "choose",
      prompt: { en: "A form says 21/10. How do you say it?", te: "ఫారం మీద 21/10 ఉంది. ఎలా చెప్తారు?" },
      options: ["The twenty-first of October.", "The twenty-one of October.", "The twentieth of October."],
      answer: 0,
      why: {
        en: "The day comes first: 21 is twenty-first, and month 10 is October.",
        te: "ముందు తేదీ: 21 అంటే twenty-first; 10వ నెల అక్టోబర్.",
      },
    },
    {
      id: "q5",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "How do you say this email: usha@gmail.com?", te: "ఈ email ఎలా చెప్తారు: usha@gmail.com?" },
      options: ["Usha at gmail dot com.", "Usha at the rate gmail dot com.", "Usha at gmail point com."],
      answer: 0,
      why: {
        en: "Say the sign as at, and the full stop as dot.",
        te: "ఆ గుర్తుని at అని, చుక్కని dot అని చెప్పాలి.",
      },
    },
    {
      id: "q6",
      type: "choose",
      prompt: { en: "Spell the name Mallesh the clear way.", te: "Mallesh అనే పేరు స్పష్టంగా స్పెల్లింగ్ చెప్పండి." },
      options: ["M, A, double L, E, S, H.", "M, A, two L, E, S, H.", "M, A, L, E, S, H."],
      answer: 0,
      why: {
        en: "Two same letters side by side are said as double.",
        te: "ఒకే అక్షరం రెండుసార్లు పక్కపక్కన వస్తే double అంటాం.",
      },
    },
    pick("q7", "Which counter ___ for pensions?", "పెన్షన్లకి ఏ కౌంటర్?", ["is", "are", "does"], 0, {
      en: "One counter takes is; Telugu needs no verb here, but English does.",
      te: "కౌంటర్ ఒకటే కాబట్టి is; తెలుగులో verb లేకపోయినా ఇంగ్లీష్‌లో కావాలి.",
    }),
    pick("q8", "I ___ my Aadhaar card with me.", "నా ఆధార్ కార్డు నా దగ్గర ఉంది.", ["have", "am having", "having"], 0, {
      en: "Have meaning own never takes -ing, even right now.",
      te: "'నా దగ్గర ఉంది' అనే అర్థంలో have కి -ing రాదు.",
    }),
  ],
};
