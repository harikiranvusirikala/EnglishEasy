import type { Lesson } from "../../types";

/** Week 22, Day 4 (CURRICULUM §4): Where can I find …? — aisles and shelves: in aisle three, on the top shelf, at the back. */
export const day: Lesson = {
  id: "where-can-i-find",
  kind: "lesson",
  title: { en: "Where Can I Find …?", te: "… ఎక్కడ దొరుకుతుంది?" },
  subtitle: "Where can I find …?",
  summary: {
    en: "Learn to find things in a supermarket: Where can I find the soap? It's in aisle three, on the top shelf.",
    te: "సూపర్ మార్కెట్‌లో వస్తువులు వెతకడం నేర్చుకుందాం: Where can I find the soap? It's in aisle three, on the top shelf.",
  },
  seo: {
    title: "Finding Things in a Supermarket in English for Telugu Speakers",
    description:
      "Ask Where can I find the soap? and understand It's in aisle three, on the top shelf. Simple lessons for Telugu speakers in a supermarket.",
  },
  pattern: [
    { text: "Where", role: "what" },
    { text: "can", role: "action" },
    { text: "I", role: "who" },
    { text: "find", role: "action" },
    { text: "the soap?", role: "what" },
  ],
  core: [
    { en: "Where can I find the soap?", te: "సబ్బు ఎక్కడ దొరుకుతుంది?", extra: ["What"] },
    { en: "It's in aisle three, on the top shelf.", te: "మూడో వరుసలో, పై అరలో ఉంది.", extra: ["at"] },
    { en: "The rice is at the back.", te: "బియ్యం వెనక వైపు ఉన్నాయి.", extra: ["on"] },
    { en: "Excuse me, where is the oil?", te: "Excuse me అండీ, నూనె ఎక్కడ ఉంది?", extra: ["are"] },
    { en: "Biscuits are on the bottom shelf.", te: "బిస్కెట్లు కింది అరలో ఉన్నాయి.", extra: ["in"] },
    { en: "Can you show me, please?", te: "కొంచెం చూపిస్తారా?", extra: ["to"] },
    { en: "Is the dal next to the rice?", te: "పప్పు బియ్యం పక్కనే ఉందా?", extra: ["Are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "In any shop today, ask where one thing is: Where can I find …?",
    te: "ఈ రోజు ఏదైనా షాపులో ఒక వస్తువు ఎక్కడ ఉందో అడగండి: Where can I find …?",
  },
  words: [
    { en: "aisle", te: "అరల మధ్య దారి, వరుస" },
    { en: "top shelf", te: "పై అర" },
    { en: "bottom shelf", te: "కింది అర" },
    { en: "at the back", te: "వెనక వైపు" },
    { en: "soap", te: "సబ్బు" },
  ],
  grammar: ["prepositions", "question-words", "can-could"],
  topics: ["shopping", "directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Finding things", te: "వస్తువులు వెతకడం" },
      body: {
        en: "In a supermarket, ask the staff: Where can I find the soap? They may say in aisle three, on the top shelf, or at the back. An aisle takes in, a shelf takes on, and the back takes at.",
        te: "సూపర్ మార్కెట్‌లో అక్కడ పనిచేసేవారిని అడగండి: Where can I find the soap? వాళ్ళు in aisle three, on the top shelf, at the back అనొచ్చు. వరుసకి in, అరకి on, వెనక వైపుకి at.",
      },
      bridge: {
        te: ["సబ్బు", "ఎక్కడ", "దొరుకుతుంది?"],
        en: [
          { text: "Where", role: "what" },
          { text: "can", role: "action" },
          { text: "I", role: "who" },
          { text: "find", role: "action" },
          { text: "the soap?", role: "what" },
        ],
      },
      examples: [
        { en: "Where can I find the soap?", te: "సబ్బు ఎక్కడ దొరుకుతుంది?" },
        { en: "It's in aisle three, on the top shelf.", te: "మూడో వరుసలో, పై అరలో ఉంది." },
        { en: "The rice is at the back.", te: "బియ్యం వెనక వైపు ఉన్నాయి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "In, on or at?", te: "in ఆ, on ఆ, at ఆ?" },
      items: [
        {
          form: "in aisle three",
          useFor: { en: "Inside a row of shelves.", te: "అరల వరుస లోపల." },
          example: { en: "The soap is in aisle three.", te: "సబ్బు మూడో వరుసలో ఉంది." },
        },
        {
          form: "on the top shelf",
          useFor: { en: "On a shelf, high or low.", te: "అర మీద, పైన గానీ కింద గానీ." },
          example: { en: "Biscuits are on the bottom shelf.", te: "బిస్కెట్లు కింది అరలో ఉన్నాయి." },
        },
        {
          form: "at the back, at the front",
          useFor: { en: "A part of the shop.", te: "షాపులోని ఒక భాగం." },
          example: { en: "The rice is at the back.", te: "బియ్యం వెనక వైపు ఉన్నాయి." },
        },
        {
          form: "next to",
          useFor: { en: "Just beside something.", te: "దేని పక్కనైనా." },
          example: { en: "Is the dal next to the rice?", te: "పప్పు బియ్యం పక్కనే ఉందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "It's in the top shelf.",
      right: "It's on the top shelf.",
      why: {
        en: "Telugu అరలో sounds like in, but things sit on a shelf.",
        te: "తెలుగులో 'అరలో' అంటాం కాబట్టి in అనిపిస్తుంది; కానీ వస్తువులు shelf మీద ఉంటాయి, అందుకే on.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "Where I can find the soap?",
      right: "Where can I find the soap?",
      why: {
        en: "In a question, can comes before I, right after where.",
        te: "ప్రశ్నలో can, I కంటే ముందు, where తర్వాతే వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask where the soap is.", te: "సబ్బు ఎక్కడ ఉందో అడగండి." },
      options: ["Where can I find the soap?", "Where I can find the soap?", "Where can I finding the soap?"],
      answer: 0,
      why: {
        en: "In a question, can moves before I, and find stays plain.",
        te: "ప్రశ్నలో can, I ముందుకి వస్తుంది; find మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "The biscuits are ___ the bottom shelf.",
      te: "బిస్కెట్లు కింది అరలో ఉన్నాయి.",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "Things sit on a shelf, even though Telugu says అరలో.",
        te: "తెలుగులో 'అరలో' అన్నా, ఇంగ్లీష్‌లో shelf కి on వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The staff member says: It's at the back. Where do you go?",
        te: "అక్కడ పనిచేసేవారు It's at the back అన్నారు. ఎక్కడికి వెళ్తారు?",
      },
      options: ["To the far end of the shop", "Outside the shop", "To the billing counter"],
      answer: 0,
      why: {
        en: "At the back means the far end of the shop, away from the door.",
        te: "at the back అంటే షాపు చివర, తలుపుకి దూరంగా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "The rice is on the back.",
      wrongIndex: 3,
      fix: "The rice is at the back.",
      why: {
        en: "A part of the shop, like the back or the front, takes at.",
        te: "షాపులో ఒక భాగానికి, back లేదా front కి, at వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the staff where you can find the oil.",
        te: "నూనె ఎక్కడ దొరుకుతుందో అక్కడ పనిచేసేవారిని అడగండి.",
      },
      expected: ["Where can I find the oil?", "Excuse me, where is the oil?", "Where is the oil?"],
      options: ["Where can I find the oil?", "Where I can find the oil?", "Where are the oil?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Another shopper asks for the soap. Say it is in aisle three.",
        te: "ఇంకొకరు సబ్బు ఎక్కడ అని అడిగారు. మూడో వరుసలో ఉందని చెప్పండి.",
      },
      expected: ["It's in aisle three.", "The soap is in aisle three.", "It is in aisle three."],
      options: ["It's in aisle three.", "It's on aisle three.", "It's aisle three in."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Finding things in a supermarket", te: "సూపర్ మార్కెట్‌లో వస్తువులు వెతకడం" },
    scene: {
      en: "You are in a big supermarket. Geetha works there. Ask her for help.",
      te: "మీరు ఒక పెద్ద సూపర్ మార్కెట్‌లో ఉన్నారు. గీత అక్కడ పనిచేస్తారు. ఆవిడ సహాయం అడగండి.",
    },
    partner: { en: "Geetha (supermarket staff)", te: "గీత (సూపర్ మార్కెట్‌లో పనిచేసేవారు)" },
    skills: [{ id: "find", label: { en: "Finding things", te: "వస్తువులు వెతకడం" } }],
    turns: [
      {
        partner: "Hello! Can I help you?",
        te: "హలో! ఏమైనా సహాయం కావాలా?",
        hint: { en: "Say yes, and ask where you can find the soap.", te: "అవునని, సబ్బు ఎక్కడ దొరుకుతుందో అడగండి." },
        replies: [
          { say: "Yes, please. Where can I find the soap?", good: true, skill: "find" },
          { say: "Yes. Where I can find the soap?", good: false, skill: "find", fixIt: "question" },
          {
            say: "Soap. Where? Tell me fast.",
            good: false,
            skill: "find",
            react: { en: "One minute, please. I'll show you.", te: "ఒక్క నిమిషం అండీ. చూపిస్తాను." },
          },
        ],
      },
      {
        partner: "It's in aisle three, on the top shelf.",
        te: "మూడో వరుసలో, పై అరలో ఉంది.",
        hint: { en: "Thank her, and ask where the rice is.", te: "థాంక్స్ చెప్పి, బియ్యం ఎక్కడ ఉన్నాయో అడగండి." },
        replies: [
          { say: "Thank you. And where is the rice?", good: true, skill: "find" },
          { say: "Thank you. And where are the rice?", good: false, skill: "find", fixIt: "plural" },
        ],
      },
      {
        partner: "The rice is at the back, next to the dal.",
        te: "బియ్యం వెనక వైపు, పప్పు పక్కన ఉన్నాయి.",
        hint: { en: "Ask her politely to show you.", te: "కొంచెం చూపించమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Can you show me, please?", good: true, skill: "find" },
          { say: "Could you show me, please?", good: true, skill: "find" },
          { say: "Can you show to me, please?", good: false, skill: "find", fixIt: "preposition" },
        ],
      },
      {
        partner: "Of course. Come with me.",
        te: "తప్పకుండా. నాతో రండి.",
        hint: { en: "Thank her, and say she is kind.", te: "థాంక్స్ చెప్పి, ఆవిడ చాలా మంచివారని చెప్పండి." },
        replies: [
          { say: "Thank you. You're very kind.", good: true },
          { say: "Thank you. You are very kind person.", good: false, fixIt: "article" },
        ],
      },
    ],
  },
};
