import type { Lesson } from "../../types";

/** Week 5, Day 3 (CURRICULUM §3): prepositions of place — in, on, under, next to. */
export const day: Lesson = {
  id: "in-on-under-next-to",
  kind: "lesson",
  title: { en: "In, On, Under, Next To", te: "ఎక్కడ ఉంది" },
  subtitle: "in / on / under / next to",
  summary: {
    en: "Learn to say where things are with in, on, under and next to.",
    te: "వస్తువులు ఎక్కడ ఉన్నాయో in, on, under, next to తో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "In, On, Under, Next To in English for Telugu Speakers",
    description:
      "Say The keys are on the table and My glasses are under the newspaper in English. Simple lessons for Telugu speakers on where things are.",
  },
  pattern: [
    { text: "The keys", role: "who" },
    { text: "are", role: "action" },
    { text: "on the table", role: "what" },
  ],
  core: [
    { en: "The keys are on the table.", te: "తాళాలు టేబుల్ మీద ఉన్నాయి.", extra: ["in"] },
    { en: "My glasses are under the newspaper.", te: "నా కళ్ళజోడు న్యూస్‌పేపర్ కింద ఉంది.", extra: ["on"] },
    { en: "The milk is in the fridge.", te: "పాలు ఫ్రిజ్‌లో ఉన్నాయి.", extra: ["on"] },
    { en: "The bank is next to the temple.", te: "బ్యాంక్ గుడి పక్కన ఉంది.", extra: ["under"] },
    { en: "Where are my keys?", te: "నా తాళాలు ఎక్కడ?", extra: ["is"] },
    { en: "The remote is behind the TV.", te: "రిమోట్ TV వెనకాల ఉంది.", extra: ["under"] },
    { en: "Your phone is in your bag.", te: "మీ ఫోన్ మీ బ్యాగ్‌లో ఉంది.", extra: ["on"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look around your room and say where three things are: on, in, under or next to.",
    te: "మీ గదిలో చుట్టూ చూసి మూడు వస్తువులు ఎక్కడ ఉన్నాయో చెప్పండి: on, in, under, next to.",
  },
  words: [
    { en: "keys", te: "తాళాలు" },
    { en: "table", te: "టేబుల్, బల్ల" },
    { en: "fridge", te: "ఫ్రిజ్" },
    { en: "under", te: "కింద" },
    { en: "next to", te: "పక్కన" },
  ],
  grammar: ["prepositions", "am-is-are"],
  topics: ["home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The place word comes first", te: "చోటు పదం ముందు వస్తుంది" },
      body: {
        en: "Telugu adds the place word after: టేబుల్ మీద, ఫ్రిజ్‌లో. English puts it before: on the table, in the fridge.",
        te: "తెలుగులో చోటు పదం తర్వాత వస్తుంది: టేబుల్ మీద, ఫ్రిజ్‌లో. ఇంగ్లీష్‌లో ముందు వస్తుంది: on the table, in the fridge.",
      },
      bridge: {
        te: ["తాళాలు", "టేబుల్ మీద", "ఉన్నాయి"],
        en: [
          { text: "The keys", role: "who" },
          { text: "are", role: "action" },
          { text: "on the table", role: "what" },
        ],
      },
      examples: [
        { en: "The keys are on the table.", te: "తాళాలు టేబుల్ మీద ఉన్నాయి." },
        { en: "The milk is in the fridge.", te: "పాలు ఫ్రిజ్‌లో ఉన్నాయి." },
        { en: "My glasses are under the newspaper.", te: "నా కళ్ళజోడు న్యూస్‌పేపర్ కింద ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "In, on, under, next to", te: "లో, మీద, కింద, పక్కన" },
      items: [
        {
          form: "in = లో",
          useFor: { en: "Inside something.", te: "దేనిలోపలైనా." },
          example: { en: "Your phone is in your bag.", te: "మీ ఫోన్ మీ బ్యాగ్‌లో ఉంది." },
        },
        {
          form: "on = మీద",
          useFor: { en: "On top of something.", te: "దేనిమీదైనా." },
          example: { en: "The keys are on the table.", te: "తాళాలు టేబుల్ మీద ఉన్నాయి." },
        },
        {
          form: "under = కింద",
          useFor: { en: "Below something.", te: "దేనికిందైనా." },
          example: { en: "My glasses are under the newspaper.", te: "నా కళ్ళజోడు న్యూస్‌పేపర్ కింద ఉంది." },
        },
        {
          form: "next to = పక్కన",
          useFor: { en: "Beside something.", te: "దేనిపక్కనైనా." },
          example: { en: "The bank is next to the temple.", te: "బ్యాంక్ గుడి పక్కన ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "The keys are table on.",
      right: "The keys are on the table.",
      why: {
        en: "Put on before the place, not after.",
        te: "on ని చోటు తర్వాత కాదు, ముందు పెట్టాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The bank is next the temple.",
      right: "The bank is next to the temple.",
      why: {
        en: "Say next to, with to.",
        te: "next to అనాలి, to తో కలిపి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The milk is inside the fridge. Which sentence is right?", te: "పాలు ఫ్రిజ్ లోపల ఉన్నాయి. ఏ వాక్యం సరైనది?" },
      options: ["The milk is on the fridge.", "The milk is in the fridge.", "The milk is fridge in."],
      answer: 1,
      why: {
        en: "Inside something: in.",
        te: "లోపల అంటే in.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "My glasses are ___ the newspaper.",
      te: "నా కళ్ళజోడు న్యూస్‌పేపర్ కింద ఉంది.",
      options: ["under", "in", "next"],
      answer: 0,
      why: {
        en: "Below something: under.",
        te: "కింద అంటే under.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: బ్యాంక్ గుడి పక్కన ఉంది?", te: "బ్యాంక్ గుడి పక్కన ఉంది — ఇంగ్లీష్‌లో ఏది?" },
      options: ["The bank is next to the temple.", "The bank is under the temple.", "The bank is in the temple."],
      answer: 0,
      why: {
        en: "Beside: next to.",
        te: "పక్కన అంటే next to.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The remote is the TV behind.",
      wrongIndex: 3,
      fix: "The remote is behind the TV.",
      why: {
        en: "Put behind before the TV.",
        te: "behind ని the TV కంటే ముందు పెట్టాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend asks: Where are my keys? They are on the table. Answer.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Where are my keys? అవి టేబుల్ మీద ఉన్నాయి. జవాబు చెప్పండి.",
      },
      expected: ["They are on the table.", "Your keys are on the table.", "On the table."],
      options: ["They are on the table.", "They are the table on.", "They is on the table."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You cannot find your glasses. Ask where they are.",
        te: "మీ కళ్ళజోడు కనిపించడం లేదు. ఎక్కడ ఉందో అడగండి.",
      },
      expected: ["Where are my glasses?"],
      options: ["Where is my glasses?", "Where are my glasses?", "My glasses are where?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Where are my glasses?", te: "నా కళ్ళజోడు ఎక్కడ?" },
    scene: {
      en: "You cannot find your glasses. Your neighbour Lakshmi helps you look.",
      te: "మీ కళ్ళజోడు కనిపించడం లేదు. పొరుగింటి లక్ష్మి వెతకడంలో సహాయం చేస్తోంది.",
    },
    partner: { en: "Lakshmi (a neighbour)", te: "లక్ష్మి (పొరుగింటావిడ)" },
    skills: [{ id: "place", label: { en: "in / on / under", te: "in / on / under వాడకం" } }],
    turns: [
      {
        partner: "What are you looking for?",
        te: "మీరు ఏం వెతుకుతున్నారు?",
        hint: { en: "Ask: Where are my glasses?", te: "అడగండి: Where are my glasses?" },
        replies: [
          { say: "Where are my glasses?", good: true },
          { say: "Where is my glasses?", good: false },
        ],
      },
      {
        partner: "Are they on the table?",
        te: "టేబుల్ మీద ఉన్నాయా?",
        hint: { en: "Say no: No, they are not on the table.", te: "లేవని చెప్పండి: No, they are not on the table." },
        replies: [
          { say: "No, they are not on the table.", good: true, skill: "place" },
          { say: "No, they is not on the table.", good: false, skill: "place" },
        ],
      },
      {
        partner: "Are they under the newspaper?",
        te: "న్యూస్‌పేపర్ కింద ఉన్నాయా?",
        hint: { en: "Look and say: Yes! They are under the newspaper.", te: "చూసి చెప్పండి: Yes! They are under the newspaper." },
        replies: [
          { say: "Yes! They are under the newspaper.", good: true, skill: "place" },
          { say: "Yes! They are the newspaper under.", good: false, skill: "place" },
        ],
      },
      {
        partner: "Good! Your phone is on the chair.",
        te: "మంచిది! మీ ఫోన్ కుర్చీ మీద ఉంది.",
        hint: { en: "Say: Oh, thank you. You are very kind.", te: "ఇలా చెప్పండి: Oh, thank you. You are very kind." },
        replies: [
          { say: "Oh, thank you. You are very kind.", good: true },
          { say: "Oh, thank you. You very kind.", good: false },
        ],
      },
    ],
  },
};
