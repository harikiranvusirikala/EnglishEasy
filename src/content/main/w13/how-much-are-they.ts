import type { Lesson } from "../../types";

/** Week 13, Day 3 (CURRICULUM §4): How much is / are …? and understanding the answer (a kilo, each, That comes to …). */
export const day: Lesson = {
  id: "how-much-are-they",
  kind: "lesson",
  title: { en: "How Much Are They?", te: "ఎంత అవుతుంది?" },
  subtitle: "How much is / are …?",
  summary: {
    en: "Learn to ask prices, How much is this? How much are these apples?, and to understand That comes to 240 rupees.",
    te: "ధరలు అడగడం నేర్చుకుందాం: How much is this? How much are these apples? That comes to 240 rupees అంటే ఏంటో కూడా.",
  },
  seo: {
    title: "Asking Prices in English for Telugu Speakers",
    description:
      "Ask How much are these apples? and understand That comes to 240 rupees. Simple lessons for Telugu speakers on asking prices at the market.",
  },
  pattern: [
    { text: "How much", role: "what" },
    { text: "are", role: "action" },
    { text: "these apples?", role: "who" },
  ],
  core: [
    { en: "How much are these apples?", te: "ఈ ఆపిల్స్ ఎంత?", extra: ["is"] },
    { en: "How much is this pumpkin?", te: "ఈ గుమ్మడికాయ ఎంత?", extra: ["are"] },
    { en: "They are 200 rupees a kilo.", te: "కిలో 200 రూపాయలు.", extra: ["is"] },
    { en: "That comes to 240 rupees.", te: "మొత్తం 240 రూపాయలు అవుతుంది.", extra: ["come"] },
    { en: "Coconuts are 30 rupees each.", te: "కొబ్బరికాయలు ఒక్కొక్కటి 30 రూపాయలు.", extra: ["rupee"] },
    { en: "How much is it altogether?", te: "మొత్తం ఎంత అవుతుంది?", extra: ["are"] },
    { en: "Onions are 40 rupees per kilo.", te: "ఉల్లిపాయలు కిలో 40 రూపాయలు.", extra: ["kilos"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Ask the price of one thing today: How much is this?",
    te: "ఈ రోజు ఒక వస్తువు ధర అడగండి: How much is this?",
  },
  words: [
    { en: "apples", te: "ఆపిల్స్" },
    { en: "each", te: "ఒక్కొక్కటి" },
    { en: "altogether", te: "మొత్తం కలిపి" },
    { en: "comes to", te: "అవుతుంది (మొత్తం)" },
    { en: "per", te: "ఒక్కో, కి" },
  ],
  grammar: ["am-is-are", "question-words", "this-that"],
  topics: ["market", "money", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Is or are?", te: "is ఆ, are ఆ?" },
      body: {
        en: "For one thing, ask How much is this? For many things, ask How much are these? The seller may say 200 rupees a kilo, or 30 rupees each. At the end: That comes to 240 rupees.",
        te: "ఒక్క వస్తువుకి How much is this? అనండి. చాలా వస్తువులకి How much are these? అనండి. అమ్మేవారు 200 rupees a kilo (కిలో 200) లేదా 30 rupees each (ఒక్కొక్కటి 30) అనొచ్చు. చివర్లో: That comes to 240 rupees (మొత్తం 240).",
      },
      bridge: {
        te: ["ఈ ఆపిల్స్", "ఎంత?"],
        en: [
          { text: "How much", role: "what" },
          { text: "are", role: "action" },
          { text: "these apples?", role: "who" },
        ],
      },
      examples: [
        { en: "How much are these apples?", te: "ఈ ఆపిల్స్ ఎంత?" },
        { en: "How much is this pumpkin?", te: "ఈ గుమ్మడికాయ ఎంత?" },
        { en: "That comes to 240 rupees.", te: "మొత్తం 240 రూపాయలు అవుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Understanding the price", te: "ధర అర్థం చేసుకోవడం" },
      items: [
        {
          form: "… a kilo / per kilo",
          useFor: { en: "The price of one kilo.", te: "ఒక కిలో ధర." },
          example: { en: "Onions are 40 rupees per kilo.", te: "ఉల్లిపాయలు కిలో 40 రూపాయలు." },
        },
        {
          form: "… each",
          useFor: { en: "The price of one piece.", te: "ఒక్కో దాని ధర." },
          example: { en: "Coconuts are 30 rupees each.", te: "కొబ్బరికాయలు ఒక్కొక్కటి 30 రూపాయలు." },
        },
        {
          form: "That comes to …",
          useFor: { en: "The total you pay.", te: "మొత్తం కట్టాల్సింది." },
          example: { en: "That comes to 240 rupees.", te: "మొత్తం 240 రూపాయలు అవుతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "How much these apples?",
      right: "How much are these apples?",
      why: {
        en: "Telugu ఎంత? needs no verb, but English needs is or are: How much are these apples?",
        te: "తెలుగులో 'ఎంత?' కి verb అక్కర్లేదు; ఇంగ్లీష్‌లో is లేదా are కావాలి: How much are these apples?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "How much cost this?",
      right: "How much does this cost?",
      why: {
        en: "With cost, use does: How much does this cost?",
        te: "cost తో does వాడాలి: How much does this cost?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Ask the price of these apples.", te: "ఈ ఆపిల్స్ ధర అడగండి." },
      options: ["How much is these apples?", "How much are these apples?", "How much these apples?"],
      answer: 1,
      why: {
        en: "Apples are more than one, so use are: How much are these apples?",
        te: "ఆపిల్స్ ఒకటి కంటే ఎక్కువ, అందుకే are: How much are these apples?",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Today's Prices",
      lines: ["Tomatoes ₹40 a kilo", "Onions ₹30 a kilo", "Beans ₹60 a kilo", "Coconut ₹25 each"],
      prompt: { en: "You want two kilos of onions. How much is that?", te: "మీకు రెండు కిలోల ఉల్లిపాయలు కావాలి. ఎంత అవుతుంది?" },
      options: ["60 rupees", "30 rupees", "80 rupees"],
      answer: 0,
      why: {
        en: "Onions are 30 rupees a kilo, so two kilos cost double: That comes to 60 rupees.",
        te: "ఉల్లిపాయలు కిలో 30 రూపాయలు, రెండు కిలోలు అంటే రెట్టింపు: That comes to 60 rupees.",
      },
      say: "That comes to 60 rupees.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The seller says: That comes to 240 rupees. What does it mean?",
        te: "అమ్మేవారు That comes to 240 rupees అన్నారు. అర్థం ఏంటి?",
      },
      options: ["The total is 240 rupees.", "One kilo is 240 rupees.", "You get 240 rupees back."],
      answer: 0,
      why: {
        en: "Comes to tells you the total to pay: The total is 240 rupees.",
        te: "comes to అంటే మొత్తం కట్టాల్సింది: The total is 240 rupees.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Coconuts is 30 rupees each.",
      wrongIndex: 1,
      fix: "Coconuts are 30 rupees each.",
      why: {
        en: "Coconuts means more than one, so use are: Coconuts are 30 rupees each.",
        te: "coconuts అంటే ఒకటి కంటే ఎక్కువ, అందుకే are: Coconuts are 30 rupees each.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask the price of these apples.",
        te: "ఈ ఆపిల్స్ ధర అడగండి.",
      },
      expected: ["How much are these apples?", "How much are these?"],
      options: ["How much are these apples?", "How much is these apples?", "How much these apples are?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask how much you have to pay in all.",
        te: "మొత్తం ఎంత కట్టాలో అడగండి.",
      },
      expected: ["How much is it altogether?", "How much is it in total?"],
      options: ["How much is it altogether?", "How much it is altogether?", "How many is it altogether?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the fruit market", te: "పండ్ల మార్కెట్‌లో" },
    scene: {
      en: "You are buying fruit. Suresh, the fruit seller, tells you the prices.",
      te: "మీరు పండ్లు కొంటున్నారు. పండ్లు అమ్మే సురేష్ ధరలు చెప్తున్నారు.",
    },
    partner: { en: "Suresh (fruit seller)", te: "సురేష్ (పండ్లు అమ్మేవారు)" },
    voice: "b",
    skills: [{ id: "price", label: { en: "Asking prices", te: "ధరలు అడగడం" } }],
    turns: [
      {
        partner: "Good apples today! Very sweet.",
        te: "ఈ రోజు మంచి ఆపిల్స్! చాలా తియ్యగా ఉన్నాయి.",
        hint: { en: "Ask the price of the apples.", te: "ఆపిల్స్ ధర ఎంతో అడగండి." },
        replies: [
          { say: "How much are these apples?", good: true, skill: "price" },
          { say: "How much is these apples?", good: false, skill: "price" },
        ],
      },
      {
        partner: "They are 200 rupees a kilo.",
        te: "కిలో 200 రూపాయలు.",
        hint: { en: "Say okay, and how much you want.", te: "సరే అని, ఎంత కావాలో చెప్పండి." },
        replies: [
          { say: "Okay, give me one kilo.", good: true },
          { say: "Okay, give me one kilos.", good: false, fixIt: "plural" },
          {
            say: "200? Are you cheating me?",
            good: false,
            react: { en: "Cheating? No! That is the market price.", te: "మోసమా? లేదండీ! మార్కెట్ ధరే అది." },
          },
        ],
      },
      {
        partner: "Anything else? Coconuts are 30 each.",
        te: "ఇంకేమైనా? కొబ్బరికాయలు ఒక్కొక్కటి 30.",
        hint: { en: "Ask for two coconuts, and the total.", te: "రెండు కొబ్బరికాయలు అడిగి, మొత్తం ఎంతో అడగండి." },
        replies: [
          { say: "Two coconuts, please. How much altogether?", good: true, skill: "price" },
          { say: "Two coconut, please. How many altogether?", good: false, skill: "price" },
        ],
      },
      {
        partner: "That comes to 260 rupees.",
        te: "మొత్తం 260 రూపాయలు అయింది.",
        hint: { en: "Hand over the money, and thank him.", te: "డబ్బు ఇచ్చి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Here you are. Thank you.", good: true },
          { say: "Here are you. Thank you.", good: false },
        ],
      },
    ],
  },
};
