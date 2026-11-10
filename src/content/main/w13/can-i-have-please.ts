import type { Lesson } from "../../types";

/** Week 13, Day 1 (CURRICULUM §4): Can I have …? — asking for things politely at the market. */
export const day: Lesson = {
  id: "can-i-have-please",
  kind: "lesson",
  title: { en: "Can I Have …, Please?", te: "… ఇస్తారా?" },
  subtitle: "Can I have …?",
  summary: {
    en: "Learn to ask for things politely at the market: Can I have a kilo of onions, please?",
    te: "మార్కెట్‌లో మర్యాదగా అడగడం నేర్చుకుందాం: Can I have a kilo of onions, please?",
  },
  seo: {
    title: "Asking Politely at the Market in English for Telugu Speakers",
    description:
      "Say Can I have a kilo of onions, please? and Can I have a bag? Simple lessons for Telugu speakers on asking politely at the market.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "I", role: "who" },
    { text: "have", role: "action" },
    { text: "a kilo of onions, please?", role: "what" },
  ],
  core: [
    { en: "Can I have a bag, please?", te: "ఒక సంచి ఇస్తారా?", extra: ["has"] },
    { en: "Can I have a kilo of onions, please?", te: "ఒక కిలో ఉల్లిపాయలు ఇస్తారా?", extra: ["give"] },
    { en: "Can I have two kilos of tomatoes?", te: "రెండు కిలోల టమాటాలు ఇస్తారా?", extra: ["kilo"] },
    { en: "Can I have one cabbage, please?", te: "ఒక క్యాబేజీ ఇస్తారా?", extra: ["give"] },
    { en: "Yes, of course. Here you are.", te: "తప్పకుండా. ఇదిగోండి.", extra: ["Take"] },
    { en: "Can I have some green chillies too?", te: "కొన్ని పచ్చిమిర్చి కూడా ఇస్తారా?", extra: ["chilli"] },
    { en: "Can I have the change, please?", te: "చిల్లర ఇస్తారా, ప్లీజ్?", extra: ["give"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At a shop today, ask for one thing with Can I have …, please?",
    te: "ఈ రోజు షాప్‌లో Can I have …, please? అని ఒక వస్తువు అడగండి.",
  },
  words: [
    { en: "please", te: "ప్లీజ్" },
    { en: "onions", te: "ఉల్లిపాయలు" },
    { en: "tomatoes", te: "టమాటాలు" },
    { en: "potatoes", te: "బంగాళాదుంపలు" },
    { en: "stall", te: "బండి, అంగడి" },
  ],
  grammar: ["can-could", "politeness-softening"],
  topics: ["market", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking politely", te: "మర్యాదగా అడగడం" },
      body: {
        en: "To ask for something in a shop, say Can I have …? and add please at the end: Can I have a kilo of onions, please? It is the most polite and the easiest way.",
        te: "షాప్‌లో ఏదైనా అడగాలంటే Can I have …? అని, చివర please చేర్చండి: Can I have a kilo of onions, please? ఇది మర్యాదగా, సులభంగా ఉంటుంది.",
      },
      bridge: {
        te: ["ఒక కిలో ఉల్లిపాయలు", "ఇస్తారా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "I", role: "who" },
          { text: "have", role: "action" },
          { text: "a kilo of onions?", role: "what" },
        ],
      },
      examples: [
        { en: "Can I have a kilo of onions, please?", te: "ఒక కిలో ఉల్లిపాయలు ఇస్తారా?" },
        { en: "Can I have a bag, please?", te: "ఒక సంచి ఇస్తారా?" },
        { en: "Can I have one cabbage, please?", te: "ఒక క్యాబేజీ ఇస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say when", te: "ఎప్పుడు ఏం అనాలి" },
      items: [
        {
          form: "Can I have …?",
          useFor: { en: "Asking for something.", te: "ఏదైనా అడగడానికి." },
          example: { en: "Can I have two kilos of tomatoes?", te: "రెండు కిలోల టమాటాలు ఇస్తారా?" },
        },
        {
          form: "… too?",
          useFor: { en: "Asking for one more thing.", te: "ఇంకో వస్తువు కూడా అడగడానికి." },
          example: { en: "Can I have some green chillies too?", te: "కొన్ని పచ్చిమిర్చి కూడా ఇస్తారా?" },
        },
        {
          form: "Here you are.",
          useFor: { en: "What the seller says when giving it.", te: "ఇచ్చేటప్పుడు అమ్మేవారు అనే మాట." },
          example: { en: "Yes, of course. Here you are.", te: "తప్పకుండా. ఇదిగోండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I want one kilo onion.",
      right: "Can I have a kilo of onions, please?",
      why: {
        en: "I want sounds like an order; ask with Can I have, add of, and say onions: Can I have a kilo of onions, please?",
        te: "I want అంటే ఆర్డర్ లా ఉంటుంది; Can I have తో అడిగి, of చేర్చి, onions అనండి: Can I have a kilo of onions, please?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Give one cover.",
      right: "Can I have a bag, please?",
      why: {
        en: "Cover for a bag is heard only in India, and Give sounds like an order: Can I have a bag, please?",
        te: "సంచిని cover అనడం మన దగ్గరే; Give అంటే ఆర్డర్ లా ఉంటుంది: Can I have a bag, please?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the polite question.", te: "మర్యాదైన ప్రశ్నను ఎంచుకోండి." },
      options: ["Can I have a bag, please?", "I want bag.", "Can I has a bag?"],
      answer: 0,
      why: {
        en: "Can I have and please make it a kind request.",
        te: "Can I have, please కలిస్తే మర్యాదగా అడిగినట్టు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Can I ___ two kilos of tomatoes?",
      te: "రెండు కిలోల టమాటాలు ఇస్తారా?",
      options: ["have", "has", "having"],
      answer: 0,
      why: {
        en: "After can, the verb stays plain, so use have.",
        te: "can తర్వాత verb మారదు, అందుకే have.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The seller gives you the bag. What does she say?", te: "అమ్మే ఆవిడ సంచి ఇస్తున్నారు. ఏమంటారు?" },
      options: ["Here you are.", "Here is you.", "You take."],
      answer: 0,
      why: {
        en: "This fixed phrase is said while handing something over.",
        te: "ఏదైనా చేతికి ఇచ్చేటప్పుడు అనే మాట ఇదే.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Can I have two kilo of onions?",
      wrongIndex: 4,
      fix: "Can I have two kilos of onions?",
      why: {
        en: "Two is more than one, so kilo takes s.",
        te: "రెండు అంటే ఒకటి కంటే ఎక్కువ, కాబట్టి kilo కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At a stall, ask for a kilo of onions politely.",
        te: "బండి దగ్గర ఒక కిలో ఉల్లిపాయలు మర్యాదగా అడగండి.",
      },
      expected: ["Can I have a kilo of onions, please?", "Can I have a kilo of onions?"],
      options: ["Can I have a kilo of onions, please?", "Give one kilo onion.", "Can I has a kilo of onions?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Ask the seller for a bag.",
        te: "అమ్మేవారిని ఒక సంచి అడగండి.",
      },
      expected: ["Can I have a bag, please?", "Can I have a bag?"],
      options: ["Can I have a bag, please?", "Give one cover.", "I am having a bag?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Onions and tomatoes", te: "ఉల్లిపాయలు, టమాటాలు" },
    scene: {
      en: "You are at a vegetable stall. Rahim, the seller, helps you.",
      te: "మీరు కూరగాయల బండి దగ్గర ఉన్నారు. అమ్మే రహీమ్ సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Rahim (vegetable seller)", te: "రహీమ్ (కూరగాయలు అమ్మేవారు)" },
    voice: "b",
    skills: [{ id: "ask", label: { en: "Can I have …?", te: "Can I have … అని అడగడం" } }],
    turns: [
      {
        partner: "Good morning! What do you need?",
        te: "నమస్కారం! మీకు ఏం కావాలి?",
        hint: { en: "Ask politely for one kilo of onions.", te: "ఒక కిలో ఉల్లిపాయలు మర్యాదగా అడగండి." },
        replies: [
          { say: "Can I have a kilo of onions, please?", good: true, skill: "ask" },
          { say: "I want one kilo onion.", good: false, skill: "ask" },
          {
            say: "Onions. One kilo. Quick.",
            good: false,
            skill: "ask",
            react: { en: "Coming! One minute, please.", te: "వస్తున్నా! ఒక్క నిమిషం అండీ." },
          },
        ],
      },
      {
        partner: "Here you are. Anything else?",
        te: "ఇదిగోండి. ఇంకేమైనా?",
        hint: { en: "Ask for tomatoes too: two kilos.", te: "టమాటాలు కూడా అడగండి: రెండు కిలోలు." },
        replies: [
          { say: "Can I have two kilos of tomatoes?", good: true, skill: "ask" },
          { say: "Can I have two kilo tomato?", good: false, skill: "ask", fixIt: "plural" },
        ],
      },
      {
        partner: "Sure. Do you need a bag?",
        te: "సరే. సంచి కావాలా?",
        hint: { en: "Say yes, and ask for one politely.", te: "అవునని, ఒక సంచి మర్యాదగా అడగండి." },
        replies: [
          { say: "Yes, can I have a bag, please?", good: true, skill: "ask" },
          { say: "Yes, give one cover.", good: false, skill: "ask", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Here you are. Is that all?",
        te: "ఇదిగోండి. అంతేనా?",
        hint: { en: "Say that is all, and thank him.", te: "అంతే అని, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, that's all. Thank you.", good: true },
          { say: "Yes, that is all only. Thank you.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
