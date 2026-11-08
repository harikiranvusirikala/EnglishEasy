import type { Lesson } from "../../types";

/** Week 7, Day 2 (CURRICULUM §3): he / she + verb-s / -es; doesn't + verb. */
export const day: Lesson = {
  id: "he-goes-she-watches",
  kind: "lesson",
  title: { en: "He Goes, She Watches", te: "he/she తో verb" },
  subtitle: "he goes / she watches",
  summary: {
    en: "Learn to talk about another person's routine: he walks, she watches, he doesn't work.",
    te: "ఇంకొకరి దినచర్య గురించి మాట్లాడటం నేర్చుకుందాం: he walks, she watches, he doesn't work.",
  },
  seo: {
    title: "He Goes, She Watches: Verb -s in English for Telugu Speakers",
    description:
      "Say My neighbour walks every day and She watches TV at night in English. Simple lessons for Telugu speakers on he and she with -s and -es.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "goes", role: "action" },
    { text: "to the temple", role: "what" },
  ],
  core: [
    { en: "My neighbour walks every day.", te: "మా పొరుగాయన రోజూ నడుస్తారు.", extra: ["walk"] },
    { en: "She watches TV at night.", te: "ఆమె రాత్రి TV చూస్తుంది.", extra: ["watch"] },
    { en: "He goes to the temple.", te: "అతను గుడికి వెళ్తాడు.", extra: ["go"] },
    { en: "Ravi gets up at five.", te: "రవి ఐదు గంటలకు లేస్తాడు.", extra: ["get"] },
    { en: "She cooks lunch at noon.", te: "ఆమె మధ్యాహ్నం పన్నెండుకి భోజనం వండుతుంది.", extra: ["cook"] },
    { en: "He doesn't work on Sundays.", te: "అతను ఆదివారాలు పని చేయడు.", extra: ["works"] },
    { en: "Padma teaches music.", te: "పద్మ సంగీతం నేర్పిస్తుంది.", extra: ["teach"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Tell someone about a friend's day: He gets up at … He goes to …",
    te: "ఒక స్నేహితుడి రోజు గురించి ఎవరికైనా చెప్పండి: He gets up at … He goes to …",
  },
  words: [
    { en: "get up", te: "లేవడం" },
    { en: "noon", te: "మధ్యాహ్నం పన్నెండు" },
    { en: "lunch", te: "మధ్యాహ్న భోజనం" },
    { en: "teach", te: "నేర్పించడం" },
    { en: "music", te: "సంగీతం" },
  ],
  grammar: ["present-simple"],
  topics: ["people", "neighbours", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "He or she: add s", te: "he, she: s చేర్చండి" },
      body: {
        en: "With he, she or one person, the action word gets s: he walks, she cooks. After s, x, ch, sh or o, add es: she watches, he goes.",
        te: "he, she లేదా ఒక్కరి గురించి చెప్పేటప్పుడు పని పదానికి s చేరుతుంది: he walks, she cooks. s, x, ch, sh, o తో ముగిస్తే es: she watches, he goes.",
      },
      bridge: {
        te: ["అతను", "గుడికి", "వెళ్తాడు"],
        en: [
          { text: "He", role: "who" },
          { text: "goes", role: "action" },
          { text: "to the temple", role: "what" },
        ],
      },
      examples: [
        { en: "My neighbour walks every day.", te: "మా పొరుగాయన రోజూ నడుస్తారు." },
        { en: "She watches TV at night.", te: "ఆమె రాత్రి TV చూస్తుంది." },
        { en: "He goes to the temple.", te: "అతను గుడికి వెళ్తాడు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "-s, -es, doesn't", te: "-s, -es, doesn't — ఎప్పుడు?" },
      items: [
        {
          form: "+ s",
          useFor: { en: "Most action words add s.", te: "చాలా పని పదాలకు s." },
          example: { en: "Ravi gets up at five.", te: "రవి ఐదు గంటలకు లేస్తాడు." },
        },
        {
          form: "+ es (watch, go, teach)",
          useFor: { en: "Words ending in ch, sh, s, x or o add es.", te: "ch, sh, s, x, o తో ముగిసే పదాలకు es." },
          example: { en: "Padma teaches music.", te: "పద్మ సంగీతం నేర్పిస్తుంది." },
        },
        {
          form: "doesn't + no s",
          useFor: { en: "After doesn't, the action word has no s.", te: "doesn't తర్వాత పని పదానికి s ఉండదు." },
          example: { en: "He doesn't work on Sundays.", te: "అతను ఆదివారాలు పని చేయడు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "He go to the temple.",
      right: "He goes to the temple.",
      why: {
        en: "With he, go becomes goes.",
        te: "he తో go → goes.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She watchs TV.",
      right: "She watches TV.",
      why: {
        en: "Watch ends in ch, so add es: watches.",
        te: "watch చివర ch ఉంది, కాబట్టి es: watches.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["She watch TV at night.", "She watches TV at night.", "She watchs TV at night."],
      answer: 1,
      why: {
        en: "She + watches.",
        te: "she తో watches.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Ravi ___ up at five.",
      te: "రవి ఐదు గంటలకు లేస్తాడు.",
      options: ["get", "gets", "getting"],
      answer: 1,
      why: {
        en: "Ravi is one person: gets.",
        te: "రవి ఒక్కరు: gets.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["He doesn't works on Sundays.", "He doesn't work on Sundays.", "He don't work on Sundays."],
      answer: 1,
      why: {
        en: "He doesn't + work (no s).",
        te: "He doesn't + work (s లేకుండా).",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Padma teach music.",
      wrongIndex: 1,
      fix: "Padma teaches music.",
      why: {
        en: "Padma is one person: teaches.",
        te: "పద్మ ఒక్కరు: teaches.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a friend about your neighbour: he walks every day.",
        te: "మీ పొరుగాయన గురించి స్నేహితులకు చెప్పండి: ఆయన రోజూ నడుస్తారు.",
      },
      expected: ["He walks every day.", "My neighbour walks every day."],
      options: ["He walk every day.", "He walks every day.", "He walking every day."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say that your friend Sita watches TV at night.",
        te: "మీ స్నేహితురాలు సీత రాత్రి TV చూస్తుందని చెప్పండి.",
      },
      expected: ["Sita watches TV at night.", "She watches TV at night."],
      options: ["Sita watchs TV at night.", "Sita watches TV at night.", "Sita watch TV at night."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your neighbour's day", te: "మీ పొరుగాయన రోజు" },
    scene: {
      en: "Your friend Lakshmi asks about your neighbour Ravi's routine.",
      te: "మీ స్నేహితురాలు లక్ష్మి మీ పొరుగాయన రవి దినచర్య గురించి అడుగుతోంది.",
    },
    partner: { en: "Lakshmi (a friend)", te: "లక్ష్మి (స్నేహితురాలు)" },
    skills: [{ id: "s", label: { en: "he / she + -s", te: "he / she తో -s" } }],
    turns: [
      {
        partner: "Your neighbour Ravi is very fit!",
        te: "మీ పొరుగాయన రవి చాలా ఆరోగ్యంగా ఉంటారు!",
        hint: { en: "Say: Yes, he walks every morning.", te: "ఇలా చెప్పండి: Yes, he walks every morning." },
        replies: [
          { say: "Yes, he walks every morning.", good: true, skill: "s" },
          { say: "Yes, he walk every morning.", good: false, skill: "s" },
        ],
      },
      {
        partner: "What time does he get up?",
        te: "ఆయన ఎన్ని గంటలకు లేస్తారు?",
        hint: { en: "Say: He gets up at five.", te: "ఇలా చెప్పండి: He gets up at five." },
        replies: [
          { say: "He gets up at five.", good: true, skill: "s" },
          { say: "He get up at five.", good: false, skill: "s" },
        ],
      },
      {
        partner: "Does he work?",
        te: "ఆయన పని చేస్తారా?",
        hint: { en: "Say: Yes, he teaches music.", te: "ఇలా చెప్పండి: Yes, he teaches music." },
        replies: [
          { say: "Yes, he teaches music.", good: true, skill: "s" },
          { say: "Yes, he teach music.", good: false, skill: "s" },
        ],
      },
      {
        partner: "And his sister Padma?",
        te: "మరి ఆయన చెల్లెలు పద్మ?",
        hint: { en: "Say: She cooks and watches TV.", te: "ఇలా చెప్పండి: She cooks and watches TV." },
        replies: [
          { say: "She cooks and watches TV.", good: true, skill: "s" },
          { say: "She cook and watch TV.", good: false, skill: "s" },
        ],
      },
    ],
  },
};
