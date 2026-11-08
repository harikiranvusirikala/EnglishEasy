import type { Lesson } from "../../types";

/** Week 3, Day 5 (CURRICULUM §3): thousand, lakh, crore, million. */
export const day: Lesson = {
  id: "big-numbers-lakh",
  kind: "lesson",
  title: { en: "Big Numbers", te: "పెద్ద సంఖ్యలు" },
  subtitle: "thousand / lakh / crore",
  summary: {
    en: "Learn to say big prices with thousand, lakh and crore, and how they match million.",
    te: "thousand, lakh, crore తో పెద్ద ధరలు చెప్పడం, అవి million తో ఎలా సరిపోతాయో నేర్చుకుందాం.",
  },
  seo: {
    title: "Lakh, Crore, Thousand and Million in English for Telugu Speakers",
    description:
      "One lakh is one hundred thousand; ten lakh is one million. Say big prices in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "One lakh", role: "who" },
    { text: "is", role: "action" },
    { text: "one hundred thousand", role: "what" },
  ],
  core: [
    { en: "One lakh is one hundred thousand.", te: "ఒక లక్ష అంటే వంద వేలు.", extra: ["hundreds"] },
    { en: "The flat costs fifty lakh rupees.", te: "ఆ ఫ్లాట్ ధర యాభై లక్షల రూపాయలు.", extra: ["lakhs"] },
    { en: "This TV costs thirty thousand rupees.", te: "ఈ TV ధర ముప్పై వేల రూపాయలు.", extra: ["thousands"] },
    { en: "One crore is ten million.", te: "ఒక కోటి అంటే పది మిలియన్లు.", extra: ["millions"] },
    { en: "Ten lakh is one million.", te: "పది లక్షలు అంటే ఒక మిలియన్.", extra: ["lakhs"] },
    { en: "How much does the house cost?", te: "ఆ ఇంటి ధర ఎంత?", extra: ["is"] },
    { en: "It costs one crore rupees.", te: "దాని ధర ఒక కోటి రూపాయలు.", extra: ["crores"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Think of something big, like a house or a car, and say its price in English.",
    te: "ఇల్లు, కారు లాంటి పెద్ద వస్తువు గురించి ఆలోచించి, దాని ధర ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "thousand", te: "వెయ్యి" },
    { en: "lakh", te: "లక్ష" },
    { en: "crore", te: "కోటి" },
    { en: "million", te: "మిలియన్ (పది లక్షలు)" },
    { en: "cost", te: "ధర, ఖరీదు అవ్వడం" },
  ],
  grammar: ["big-numbers", "present-simple"],
  topics: ["money", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Lakh and crore in English", te: "ఇంగ్లీష్‌లో లక్ష, కోటి" },
      body: {
        en: "In India we count in lakhs and crores, and you can use these words in English too. People abroad count in thousands and millions: one lakh is one hundred thousand, and ten lakh is one million.",
        te: "మన దేశంలో లక్షలు, కోట్లలో లెక్కపెడతాం; ఇంగ్లీష్‌లో కూడా lakh, crore అనొచ్చు. విదేశాల్లో thousand, million లో లెక్కపెడతారు: ఒక లక్ష = one hundred thousand, పది లక్షలు = one million.",
      },
      bridge: {
        te: ["ఒక లక్ష", "అంటే", "వంద వేలు"],
        en: [
          { text: "One lakh", role: "who" },
          { text: "is", role: "action" },
          { text: "one hundred thousand", role: "what" },
        ],
      },
      examples: [
        { en: "One lakh is one hundred thousand.", te: "ఒక లక్ష అంటే వంద వేలు." },
        { en: "Ten lakh is one million.", te: "పది లక్షలు అంటే ఒక మిలియన్." },
        { en: "One crore is ten million.", te: "ఒక కోటి అంటే పది మిలియన్లు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Thousand, lakh, crore", te: "వెయ్యి, లక్ష, కోటి" },
      items: [
        {
          form: "thousand = 1,000",
          useFor: { en: "For prices like a TV or a phone.", te: "TV, ఫోన్ లాంటి ధరలకు." },
          example: { en: "This TV costs thirty thousand rupees.", te: "ఈ TV ధర ముప్పై వేల రూపాయలు." },
        },
        {
          form: "lakh = 1,00,000",
          useFor: { en: "For prices like a car or a flat.", te: "కారు, ఫ్లాట్ లాంటి ధరలకు." },
          example: { en: "The flat costs fifty lakh rupees.", te: "ఆ ఫ్లాట్ ధర యాభై లక్షల రూపాయలు." },
        },
        {
          form: "crore = 1,00,00,000",
          useFor: { en: "For very big prices, like a house or land.", te: "ఇల్లు, భూమి లాంటి చాలా పెద్ద ధరలకు." },
          example: { en: "It costs one crore rupees.", te: "దాని ధర ఒక కోటి రూపాయలు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "The flat costs fifty lakhs rupees.",
      right: "The flat costs fifty lakh rupees.",
      why: {
        en: "Before rupees, lakh, thousand and crore have no s.",
        te: "rupees ముందు lakh, thousand, crore కి s ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "It costs two thousands rupees.",
      right: "It costs two thousand rupees.",
      why: {
        en: "Say two thousand, not two thousands.",
        te: "two thousands కాదు, two thousand అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["It costs three thousands rupees.", "It costs three thousand rupees.", "It cost three thousand rupee."],
      answer: 1,
      why: {
        en: "Thousand has no s before rupees, and it costs has an s.",
        te: "rupees ముందు thousand కి s ఉండదు; it తో costs కి s ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "One lakh is one hundred ___.",
      te: "ఒక లక్ష అంటే వంద వేలు.",
      options: ["thousand", "million", "crore"],
      answer: 0,
      why: {
        en: "One lakh is one hundred thousand.",
        te: "ఒక లక్ష = one hundred thousand.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ten lakh is the same as …", te: "పది లక్షలు అంటే …" },
      options: ["one thousand", "one million", "one crore"],
      answer: 1,
      why: {
        en: "Ten lakh is one million.",
        te: "పది లక్షలు = one million.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The house costs two crores rupees.",
      wrongIndex: 4,
      fix: "The house costs two crore rupees.",
      why: {
        en: "Before rupees, crore has no s.",
        te: "rupees ముందు crore కి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: How much is your phone? It is twenty thousand rupees. Answer.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: How much is your phone? అది ఇరవై వేల రూపాయలు. జవాబు చెప్పండి.",
      },
      expected: ["It is twenty thousand rupees.", "It costs twenty thousand rupees.", "Twenty thousand rupees."],
      options: ["It is twenty thousands rupees.", "It is twenty thousand rupees.", "It is twenty thousand rupee."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask a friend the price of the house.",
        te: "ఆ ఇంటి ధర ఎంతో మీ స్నేహితుడిని అడగండి.",
      },
      expected: ["How much does the house cost?", "How much is the house?"],
      options: ["How much does the house cost?", "How much the house costs?", "How many is the house?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The price of a flat", te: "ఫ్లాట్ ధర" },
    scene: {
      en: "You bought a new flat. Your friend Ramana asks you about it.",
      te: "మీరు కొత్త ఫ్లాట్ కొన్నారు. మీ స్నేహితుడు రమణ దాని గురించి అడుగుతున్నాడు.",
    },
    partner: { en: "Ramana (a friend)", te: "రమణ (స్నేహితుడు)" },
    skills: [{ id: "numbers", label: { en: "Big numbers", te: "పెద్ద సంఖ్యలు" } }],
    turns: [
      {
        partner: "Is your new flat ready?",
        te: "మీ కొత్త ఫ్లాట్ రెడీ అయిందా?",
        hint: { en: "Say: Yes, it is ready.", te: "ఇలా చెప్పండి: Yes, it is ready." },
        replies: [
          { say: "Yes, it is ready.", good: true },
          { say: "Yes, it ready.", good: false },
        ],
      },
      {
        partner: "How much does it cost?",
        te: "దాని ధర ఎంత?",
        hint: { en: "Say: It costs forty lakh rupees.", te: "ఇలా చెప్పండి: It costs forty lakh rupees." },
        replies: [
          { say: "It costs forty lakh rupees.", good: true, skill: "numbers" },
          { say: "It costs forty lakhs rupees.", good: false, skill: "numbers" },
        ],
      },
      {
        partner: "What is that in millions?",
        te: "మిలియన్లలో అది ఎంత?",
        hint: { en: "Ten lakh is one million. Say: It is four million.", te: "పది లక్షలు ఒక మిలియన్. చెప్పండి: It is four million." },
        replies: [
          { say: "It is four million.", good: true, skill: "numbers" },
          { say: "It is four millions.", good: false, skill: "numbers" },
          { say: "It is forty million.", good: false, skill: "numbers" },
        ],
      },
      {
        partner: "Wow! Congratulations!",
        te: "వావ్! అభినందనలు!",
        hint: { en: "Say: Thank you. Please come and see it.", te: "ఇలా చెప్పండి: Thank you. Please come and see it." },
        replies: [
          { say: "Thank you. Please come and see it.", good: true },
          { say: "Thank you. Please come and see.", good: false },
        ],
      },
    ],
  },
};
