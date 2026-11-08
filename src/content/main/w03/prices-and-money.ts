import type { Lesson } from "../../types";

/** Week 3, Day 4 (CURRICULUM §3): prices in rupees, How much is / are, change. */
export const day: Lesson = {
  id: "prices-and-money",
  kind: "lesson",
  title: { en: "Prices & Money", te: "ధరలు, డబ్బు" },
  subtitle: "rupees / change",
  summary: {
    en: "Learn to say prices in rupees, ask for change and say when something is too expensive.",
    te: "ధరలు రూపాయల్లో చెప్పడం, చిల్లర అడగడం, ఏదైనా ఖరీదు ఎక్కువైతే చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Prices and Money in English for Telugu Speakers: Rupees and Change",
    description:
      "Say It is fifty rupees, ask Do you have change? and pay at a shop in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "is", role: "action" },
    { text: "fifty rupees", role: "what" },
  ],
  core: [
    { en: "It is fifty rupees.", te: "అది యాభై రూపాయలు.", extra: ["are"] },
    { en: "How much is this saree?", te: "ఈ చీర ఎంత?", extra: ["are"] },
    { en: "How much are these mangoes?", te: "ఈ మామిడిపళ్ళు ఎంత?", extra: ["is"] },
    { en: "It is 1,500 rupees.", te: "అది 1,500 రూపాయలు.", extra: ["rupee"] },
    { en: "Do you have change?", te: "మీ దగ్గర చిల్లర ఉందా?", extra: ["chance"] },
    { en: "Please give me the change.", te: "దయచేసి చిల్లర ఇవ్వండి.", extra: ["a"] },
    { en: "That is too expensive.", te: "అది చాలా ఖరీదు.", extra: ["much"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "At a shop today, ask the price in English and say the rupees aloud.",
    te: "ఈ రోజు షాప్‌లో ధర ఇంగ్లీష్‌లో అడిగి, రూపాయలు గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "rupees", te: "రూపాయలు" },
    { en: "change", te: "చిల్లర" },
    { en: "price", te: "ధర" },
    { en: "expensive", te: "ఖరీదైన" },
    { en: "cheap", te: "చవక" },
  ],
  grammar: ["question-words", "am-is-are", "plurals-countable"],
  topics: ["money", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying a price", te: "ధర చెప్పడం" },
      body: {
        en: "Give a price with It is, then the number, then rupees: It is fifty rupees. More than one rupee, so rupees has an s.",
        te: "ధర చెప్పడానికి It is, తర్వాత సంఖ్య, తర్వాత rupees: It is fifty rupees. ఒకటి కంటే ఎక్కువ కాబట్టి rupees కి s ఉంటుంది.",
      },
      bridge: {
        te: ["అది", "యాభై", "రూపాయలు"],
        en: [
          { text: "It", role: "who" },
          { text: "is", role: "action" },
          { text: "fifty rupees", role: "what" },
        ],
      },
      examples: [
        { en: "It is fifty rupees.", te: "అది యాభై రూపాయలు." },
        { en: "It is 1,500 rupees.", te: "అది 1,500 రూపాయలు." },
        { en: "That is too expensive.", te: "అది చాలా ఖరీదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Is or are, and change", te: "is ఆ, are ఆ, చిల్లర" },
      items: [
        {
          form: "How much is …?",
          useFor: { en: "For one thing.", te: "ఒక్క వస్తువుకి." },
          example: { en: "How much is this saree?", te: "ఈ చీర ఎంత?" },
        },
        {
          form: "How much are …?",
          useFor: { en: "For more than one thing.", te: "ఒకటి కంటే ఎక్కువ వస్తువులకు." },
          example: { en: "How much are these mangoes?", te: "ఈ మామిడిపళ్ళు ఎంత?" },
        },
        {
          form: "change",
          useFor: { en: "The money you get back, or small notes and coins.", te: "తిరిగి వచ్చే డబ్బు, లేదా చిన్న నోట్లు, నాణేలు." },
          example: { en: "Do you have change?", te: "మీ దగ్గర చిల్లర ఉందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "It is fifty rupee.",
      right: "It is fifty rupees.",
      why: {
        en: "More than one rupee, so say rupees.",
        te: "ఒకటి కంటే ఎక్కువ రూపాయలు, కాబట్టి rupees అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Give change.",
      right: "Please give me the change.",
      why: {
        en: "Add please and me. It sounds polite, not rude.",
        te: "please, me చేర్చండి. అప్పుడు మర్యాదగా ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You want the price of the tomatoes. What do you ask?", te: "టమాటాల ధర తెలుసుకోవాలి. ఏమని అడుగుతారు?" },
      options: ["How much is the tomatoes?", "How much are the tomatoes?", "How much the tomatoes?"],
      answer: 1,
      why: {
        en: "Tomatoes are more than one, so use are.",
        te: "టమాటాలు ఒకటి కంటే ఎక్కువ, కాబట్టి are.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It is ninety ___.",
      te: "అది తొంభై రూపాయలు.",
      options: ["rupee", "rupees", "money"],
      answer: 1,
      why: {
        en: "Ninety is more than one, so rupees.",
        te: "తొంభై అంటే ఒకటి కంటే ఎక్కువ, కాబట్టి rupees.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence asks for change?", te: "చిల్లర అడిగే వాక్యం ఏది?" },
      options: ["Do you have change?", "Do you have chance?", "Are you have change?"],
      answer: 0,
      why: {
        en: "Change is money. Chance is a different word.",
        te: "change అంటే చిల్లర. chance వేరే పదం (అవకాశం).",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "It is two hundred rupee.",
      wrongIndex: 4,
      fix: "It is two hundred rupees.",
      why: {
        en: "Two hundred is more than one, so rupees.",
        te: "రెండు వందలు అంటే ఒకటి కంటే ఎక్కువ, కాబట్టి rupees.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The shopkeeper asks too much for a bag. Say it is too expensive.",
        te: "షాప్ అతను ఒక సంచికి చాలా ఎక్కువ అడుగుతున్నాడు. ఖరీదు ఎక్కువని చెప్పండి.",
      },
      expected: ["That is too expensive.", "It is too expensive."],
      options: ["That is too expensive.", "That is very much expensive.", "That too expensive."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask the price of this saree.",
        te: "ఈ చీర ధర అడగండి.",
      },
      expected: ["How much is this saree?"],
      options: ["How much this saree?", "How much is this saree?", "How many is this saree?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Paying at a shop", te: "షాప్‌లో డబ్బు కట్టడం" },
    scene: {
      en: "You are buying things at Suresh's shop. Pay, check your change and buy a bag.",
      te: "మీరు సురేష్ షాప్‌లో సామాన్లు కొంటున్నారు. డబ్బు కట్టి, చిల్లర చూసుకుని, ఒక సంచి కొనండి.",
    },
    partner: { en: "Suresh (a shopkeeper)", te: "సురేష్ (షాప్ యజమాని)" },
    skills: [
      { id: "money", label: { en: "Money", te: "డబ్బు మాటలు" } },
      { id: "ask", label: { en: "Ask the price", te: "ధర అడగడం" } },
    ],
    turns: [
      {
        partner: "That is three hundred rupees.",
        te: "మొత్తం మూడు వందల రూపాయలు.",
        hint: { en: "Give 500 and say: Here is five hundred rupees.", te: "500 ఇచ్చి చెప్పండి: Here is five hundred rupees." },
        replies: [
          { say: "Here is five hundred rupees.", good: true, skill: "money" },
          { say: "Here five hundred rupees.", good: false, skill: "money" },
        ],
      },
      {
        partner: "Here is your change. Two hundred.",
        te: "ఇదిగోండి మీ చిల్లర. రెండు వందలు.",
        hint: { en: "Count it and say: Yes, two hundred. Thank you.", te: "లెక్కపెట్టి చెప్పండి: Yes, two hundred. Thank you." },
        replies: [
          { say: "Yes, two hundred. Thank you.", good: true, skill: "money" },
          { say: "Yes, two hundreds. Thank you.", good: false, skill: "money" },
        ],
      },
      {
        partner: "Do you want a bag?",
        te: "సంచి కావాలా?",
        hint: { en: "Ask the price: How much is the bag?", te: "ధర అడగండి: How much is the bag?" },
        replies: [
          { say: "How much is the bag?", good: true, skill: "ask" },
          { say: "How much the bag is?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "It is five rupees.",
        te: "ఐదు రూపాయలు.",
        hint: { en: "Say: Okay, one bag, please.", te: "ఇలా చెప్పండి: Okay, one bag, please." },
        replies: [
          { say: "Okay, one bag, please.", good: true, skill: "money" },
          { say: "Okay, one bags, please.", good: false, skill: "money" },
        ],
      },
    ],
  },
};
