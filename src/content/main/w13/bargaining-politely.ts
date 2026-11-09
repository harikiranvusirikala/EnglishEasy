import type { Lesson } from "../../types";

/** Week 13, Day 4 (CURRICULUM §4): polite bargaining — That's a bit expensive. Can you give it for fifty? */
export const day: Lesson = {
  id: "bargaining-politely",
  kind: "lesson",
  title: { en: "Can You Reduce It?", te: "ధర కొంచెం తగ్గిస్తారా?" },
  subtitle: "polite bargaining",
  summary: {
    en: "Learn to bargain politely: That's a bit expensive. Can you give it for fifty?",
    te: "మర్యాదగా బేరం చేయడం నేర్చుకుందాం: That's a bit expensive. Can you give it for fifty?",
  },
  seo: {
    title: "Bargaining Politely in English for Telugu Speakers",
    description:
      "Say That's a bit expensive and Can you give it for fifty? Simple lessons for Telugu speakers on bargaining politely at the market.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "you", role: "who" },
    { text: "give it", role: "action" },
    { text: "for fifty?", role: "what" },
  ],
  core: [
    { en: "That's a bit expensive.", te: "ధర కొంచెం ఎక్కువే.", extra: ["is"] },
    { en: "Can you give it for fifty?", te: "యాభైకి ఇస్తారా?", extra: ["in"] },
    { en: "Can you reduce the price a little?", te: "ధర కొంచెం తగ్గిస్తారా?", extra: ["less"] },
    { en: "What is your final price?", te: "మీ చివరి ధర ఎంత?", extra: ["last"] },
    { en: "Okay, I'll take it for 400.", te: "సరే, 400 కి తీసుకుంటాను.", extra: ["taking"] },
    { en: "Is there any discount?", te: "ఏమైనా డిస్కౌంట్ ఉందా?", extra: ["are"] },
    { en: "Sorry, I can't pay that much.", te: "Sorry అండీ, అంత ఇవ్వలేను.", extra: ["can"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you shop, ask: Is there any discount?",
    te: "ఈసారి షాపింగ్‌లో అడగండి: Is there any discount?",
  },
  words: [
    { en: "reduce", te: "తగ్గించడం" },
    { en: "discount", te: "డిస్కౌంట్, తగ్గింపు" },
    { en: "bedsheet", te: "బెడ్‌షీట్, దుప్పటి" },
    { en: "a bit", te: "కొంచెం" },
    { en: "final", te: "చివరి" },
  ],
  grammar: ["can-could", "politeness-softening"],
  topics: ["market", "shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Bargaining kindly", te: "మర్యాదగా బేరం" },
      body: {
        en: "At a weekly market you can bargain, but stay polite. First say the price is high: That's a bit expensive. Then offer your price: Can you give it for fifty? A bit makes it soft, not rude.",
        te: "వారపు సంతలో బేరం చేయొచ్చు, కానీ మర్యాదగా ఉండండి. ముందు ధర ఎక్కువ అని చెప్పండి: That's a bit expensive. తర్వాత మీ ధర చెప్పండి: Can you give it for fifty? a bit అంటే కొంచెం; మాట మెత్తగా ఉంటుంది.",
      },
      bridge: {
        te: ["యాభైకి", "ఇస్తారా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "you", role: "who" },
          { text: "give it", role: "action" },
          { text: "for fifty?", role: "what" },
        ],
      },
      examples: [
        { en: "That's a bit expensive.", te: "ధర కొంచెం ఎక్కువే." },
        { en: "Can you give it for fifty?", te: "యాభైకి ఇస్తారా?" },
        { en: "Can you reduce the price a little?", te: "ధర కొంచెం తగ్గిస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The steps of a bargain", te: "బేరం దశలు" },
      items: [
        {
          form: "a bit expensive",
          useFor: { en: "Say the price is high.", te: "ధర ఎక్కువ అని చెప్పడానికి." },
          example: { en: "That's a bit expensive.", te: "ధర కొంచెం ఎక్కువే." },
        },
        {
          form: "Can you give it for …?",
          useFor: { en: "Offer your price.", te: "మీ ధర చెప్పడానికి." },
          example: { en: "Can you give it for fifty?", te: "యాభైకి ఇస్తారా?" },
        },
        {
          form: "final price",
          useFor: { en: "Ask for their lowest price.", te: "వారి తక్కువ ధర అడగడానికి." },
          example: { en: "What is your final price?", te: "మీ చివరి ధర ఎంత?" },
        },
        {
          form: "I'll take it.",
          useFor: { en: "Agree and buy.", te: "ఒప్పుకుని కొనడానికి." },
          example: { en: "Okay, I'll take it for 400.", te: "సరే, 400 కి తీసుకుంటాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "What is the last price?",
      right: "What is your final price?",
      why: {
        en: "Last price is heard only in India; everyone understands final price: What is your final price?",
        te: "last price అని మన దగ్గరే అంటారు; అందరికీ అర్థమయ్యేది final price: What is your final price?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Give for fifty.",
      right: "Can you give it for fifty?",
      why: {
        en: "An order sounds rude; ask with Can you, and add it: Can you give it for fifty?",
        te: "ఆర్డర్ లాగా అంటే మొరటుగా ఉంటుంది; Can you తో అడిగి, it చేర్చండి: Can you give it for fifty?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the polite way.", te: "మర్యాదైన మాట ఎంచుకోండి." },
      options: ["Too much! Give for fifty.", "That's a bit expensive. Can you give it for fifty?", "Expensive. Fifty only."],
      answer: 1,
      why: {
        en: "A bit and Can you keep it kind, not an order: That's a bit expensive. Can you give it for fifty?",
        te: "a bit, Can you మాటని మెత్తగా చేస్తాయి: That's a bit expensive. Can you give it for fifty?",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Can you ___ the price a little?",
      te: "ధర కొంచెం తగ్గిస్తారా?",
      options: ["reduce", "less", "down"],
      answer: 0,
      why: {
        en: "Reduce is the verb for making a price less: Can you reduce the price a little?",
        te: "ధర తగ్గించడానికి verb reduce: Can you reduce the price a little?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ask for the seller's lowest price.", te: "అమ్మేవారి తక్కువ ధర అడగండి." },
      options: ["What is your final price?", "What is the last price?", "What final price is?"],
      answer: 0,
      why: {
        en: "Final price is understood everywhere, last price only in India: What is your final price?",
        te: "final price అందరికీ అర్థమవుతుంది, last price మన దగ్గరే: What is your final price?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Can you give it in fifty?",
      wrongIndex: 4,
      fix: "Can you give it for fifty?",
      why: {
        en: "Telugu says యాభైకి; in English a price takes for: Can you give it for fifty?",
        te: "'యాభైకి' లోని 'కి' ఇంగ్లీష్‌లో for అవుతుంది: Can you give it for fifty?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The seller says 500 rupees. Say it is a bit expensive.",
        te: "అమ్మేవారు 500 రూపాయలు అన్నారు. కొంచెం ఎక్కువ అని చెప్పండి.",
      },
      expected: ["That's a bit expensive.", "It's a bit expensive."],
      options: ["That's a bit expensive.", "That's a bit of expensive.", "That is bit expensive."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask the seller to give it for 400.",
        te: "400 కి ఇవ్వమని అమ్మేవారిని అడగండి.",
      },
      expected: ["Can you give it for 400?", "Can you give it for four hundred?"],
      options: ["Can you give it for 400?", "Can you give it in 400?", "You can give for 400?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A bedsheet at the weekly market", te: "వారపు సంతలో బెడ్‌షీట్" },
    scene: {
      en: "At the weekly market you like a bedsheet. Srinivas, the seller, says 500 rupees.",
      te: "వారపు సంతలో మీకు ఒక బెడ్‌షీట్ నచ్చింది. అమ్మే శ్రీనివాస్ 500 రూపాయలు అన్నారు.",
    },
    partner: { en: "Srinivas (seller)", te: "శ్రీనివాస్ (అమ్మేవారు)" },
    voice: "b",
    skills: [{ id: "bargain", label: { en: "Bargaining", te: "బేరం" } }],
    turns: [
      {
        partner: "This bedsheet is 500 rupees.",
        te: "ఈ బెడ్‌షీట్ 500 రూపాయలు.",
        hint: { en: "Say politely that the price is high.", te: "ధర ఎక్కువ అని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "That's a bit expensive.", good: true, skill: "bargain" },
          { say: "That's a bit of expensive.", good: false, skill: "bargain" },
        ],
      },
      {
        partner: "It's good cotton. Very soft!",
        te: "మంచి కాటన్. చాలా మెత్తగా ఉంది!",
        hint: { en: "Offer your price: 350.", te: "మీ ధర చెప్పండి: 350." },
        replies: [
          { say: "Can you give it for 350?", good: true, skill: "bargain" },
          { say: "Can you give it in 350?", good: false, skill: "bargain" },
          {
            say: "Soft? It looks very cheap.",
            good: false,
            skill: "bargain",
            react: { en: "Cheap? Please touch it and see.", te: "చీప్‌గానా? ఒక్కసారి పట్టుకుని చూడండి." },
          },
        ],
      },
      {
        partner: "No, no. My final price is 420.",
        te: "లేదు, లేదు. నా చివరి ధర 420.",
        hint: { en: "Ask him politely for 400.", te: "400 కి ఇవ్వమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Can you make it 400, please?", good: true, skill: "bargain" },
          { say: "Can you make it to 400, please?", good: false, skill: "bargain" },
        ],
      },
      {
        partner: "Okay, 400. Only for you!",
        te: "సరే, 400. మీ కోసమే!",
        hint: { en: "Thank him, and say you'll buy it.", te: "థాంక్స్ చెప్పి, తీసుకుంటానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll take it.", good: true },
          { say: "Thank you. I'll taking it.", good: false },
        ],
      },
    ],
  },
};
