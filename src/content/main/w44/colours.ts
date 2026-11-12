import type { Lesson } from "../../types";

/** Week 44, Day 1 (CURRICULUM §5): colours, shades and patterns — What colour is your saree? It's dark green with a gold border. */
export const day: Lesson = {
  id: "colours",
  kind: "lesson",
  title: { en: "Colours", te: "రంగులు" },
  subtitle: "colours, shades and patterns",
  summary: {
    en: "Learn to name colours, shades and patterns: What colour is your saree? It's dark green with a gold border.",
    te: "రంగులు, షేడ్స్, డిజైన్లు చెప్పడం నేర్చుకుందాం: What colour is your saree? It's dark green with a gold border.",
  },
  seo: {
    title: "Colours and Patterns in English for Telugu Speakers",
    description:
      "Say What colour is your saree? and It's dark green with a gold border. Simple lessons for Telugu speakers on colours and patterns.",
  },
  pattern: [
    { text: "My saree", role: "who" },
    { text: "is", role: "action" },
    { text: "dark green", role: "what" },
    { text: "with a gold border", role: "what" },
  ],
  core: [
    { en: "What colour is your saree?", te: "మీ చీర ఏ రంగు?", extra: ["does"] },
    { en: "It's dark green with a gold border.", te: "ముదురు ఆకుపచ్చ చీర, బంగారు రంగు అంచు.", extra: ["in"] },
    { en: "Do you have this in light blue?", te: "ఇది లేత నీలం రంగులో ఉందా?", extra: ["on"] },
    { en: "I like the plain one, not the printed one.", te: "ప్రింట్ ఉన్నది కాదు, ప్లెయిన్‌ది నాకు నచ్చింది.", extra: ["likes"] },
    { en: "It's a black bag with a brown handle.", te: "అది నల్ల బ్యాగ్, దానికి గోధుమ రంగు హ్యాండిల్ ఉంటుంది.", extra: ["cover"] },
    { en: "Dark colours are good for every day.", te: "రోజూ వాడటానికి ముదురు రంగులు బాగుంటాయి.", extra: ["colour"] },
    { en: "This checked shirt comes in three colours.", te: "ఈ గళ్ళ చొక్కా మూడు రంగుల్లో దొరుకుతుంది.", extra: ["come"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say the colours of the clothes you are wearing today aloud: My … is dark blue.",
    te: "ఈ రోజు మీరు వేసుకున్న బట్టల రంగులు గట్టిగా చెప్పండి: My … is dark blue.",
  },
  words: [
    { en: "colour", te: "రంగు" },
    { en: "dark", te: "ముదురు" },
    { en: "border", te: "అంచు" },
    { en: "checked", te: "గళ్ళ, చెక్స్ ఉన్న" },
    { en: "printed", te: "ప్రింట్ ఉన్న" },
  ],
  grammar: ["question-words", "articles", "prepositions"],
  topics: ["shopping", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Colours and patterns", te: "రంగులు, డిజైన్లు" },
      body: {
        en: "Ask What colour is it? In the answer, dark or light comes before the colour, and with adds a border or a pattern.",
        te: "What colour is it? అని అడగండి. జవాబులో dark (ముదురు), light (లేత) రంగు ముందు వస్తాయి; అంచు, డిజైన్ చెప్పడానికి with వాడండి.",
      },
      bridge: {
        te: ["నా చీర", "బంగారు అంచుతో", "ముదురు ఆకుపచ్చ", "ఉంది"],
        en: [
          { text: "My saree", role: "who" },
          { text: "is", role: "action" },
          { text: "dark green", role: "what" },
          { text: "with a gold border", role: "what" },
        ],
      },
      examples: [
        { en: "What colour is your saree?", te: "మీ చీర ఏ రంగు?" },
        { en: "It's dark green with a gold border.", te: "ముదురు ఆకుపచ్చ చీర, బంగారు రంగు అంచు." },
        { en: "Do you have this in light blue?", te: "ఇది లేత నీలం రంగులో ఉందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Dark, light, plain or printed?", te: "ముదురు, లేత, ప్లెయిన్, ప్రింట్?" },
      items: [
        {
          form: "dark / light + colour",
          useFor: { en: "Say how deep the colour is.", te: "రంగు ముదురా, లేతా అని చెప్పడానికి." },
          example: { en: "Do you have this in light blue?", te: "ఇది లేత నీలం రంగులో ఉందా?" },
        },
        {
          form: "plain",
          useFor: { en: "One colour, with no design on it.", te: "ఏ డిజైనూ లేకుండా ఒకే రంగు." },
          example: { en: "I'd like a plain white shirt.", te: "నాకు ఒక ప్లెయిన్ తెల్ల చొక్కా కావాలి." },
        },
        {
          form: "checked / printed",
          useFor: { en: "Squares on the cloth, or a printed design.", te: "బట్ట మీద గళ్ళు ఉంటే checked, ప్రింట్ డిజైన్ ఉంటే printed." },
          example: { en: "This checked shirt comes in three colours.", te: "ఈ గళ్ళ చొక్కా మూడు రంగుల్లో దొరుకుతుంది." },
        },
        {
          form: "with a … border",
          useFor: { en: "Give the colour of a border or one part.", te: "అంచు, లేదా ఒక భాగం రంగు చెప్పడానికి." },
          example: { en: "It's a black bag with a brown handle.", te: "అది నల్ల బ్యాగ్, దానికి గోధుమ రంగు హ్యాండిల్ ఉంటుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I lost a black cover on the bus.",
      right: "I lost a black bag on the bus.",
      why: {
        en: "In English a cover goes on a book or a phone; you carry things in a bag.",
        te: "ఇంగ్లీష్‌లో cover అంటే పుస్తకానికి, phone కి వేసేది; వస్తువులు పెట్టుకునేది bag.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "What colour your saree is?",
      right: "What colour is your saree?",
      why: {
        en: "In a question, is comes before the thing you ask about, not at the end as in Telugu.",
        te: "ప్రశ్నలో is ముందే వస్తుంది; తెలుగులోలా చివర్లో కాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You like a shirt, but you want it in light blue. Ask the shop assistant.",
        te: "మీకు ఒక చొక్కా నచ్చింది, కానీ లేత నీలం రంగులో కావాలి. షాపులో అసిస్టెంట్‌ని అడగండి.",
      },
      options: ["Do you have this in light blue?", "You have this in light blue?", "Do you have this on light blue?"],
      answer: 0,
      why: {
        en: "A yes or no question starts with Do, and a colour takes in.",
        te: "అవును, కాదు ప్రశ్న Do తో మొదలవుతుంది; రంగు ముందు in వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Dark ___ are good for every day.",
      te: "రోజూ వాడటానికి ముదురు రంగులు బాగుంటాయి.",
      options: ["colours", "colour", "coloured"],
      answer: 0,
      why: {
        en: "We mean all dark colours, so add s; Telugu రంగులు also shows many.",
        te: "అన్ని ముదురు రంగుల గురించి చెప్తున్నాం, అందుకే s; తెలుగులోనూ 'రంగులు' అంటాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Your friend asks about your new saree. Describe it.",
        te: "మీ కొత్త చీర గురించి స్నేహితులు అడుగుతున్నారు. అది ఎలా ఉందో చెప్పండి.",
      },
      options: ["It's dark green with a gold border.", "It's dark green with gold border.", "It's dark green in a gold border."],
      answer: 0,
      why: {
        en: "One border needs a, and a border comes after with, not in.",
        te: "ఒక్క అంచు కాబట్టి a కావాలి; అంచు చెప్పడానికి in కాదు, with వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "This shirt come in three colours.",
      wrongIndex: 2,
      fix: "This shirt comes in three colours.",
      why: {
        en: "One shirt, like he or she, takes s on the verb.",
        te: "ఒక్క చొక్కా (he, she లాగా), అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your friend the colour of her new saree.",
        te: "మీ స్నేహితురాలి కొత్త చీర ఏ రంగో ఆవిడని అడగండి.",
      },
      expected: ["What colour is your new saree?", "What colour is your saree?", "What colour is it?"],
      options: ["What colour is your new saree?", "What colour your new saree is?", "How is the colour of your new saree?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You left your bag in a shop. Tell the shopkeeper what it looks like: black, with a brown handle.",
        te: "మీ బ్యాగ్ ఒక షాపులో మర్చిపోయారు. అది ఎలా ఉంటుందో షాపు వాళ్ళకి చెప్పండి: నల్లది, గోధుమ రంగు హ్యాండిల్.",
      },
      expected: ["It's a black bag with a brown handle.", "It's black with a brown handle.", "My bag is black with a brown handle."],
      options: ["It's a black bag with a brown handle.", "It's black bag with a brown handle.", "It's a black cover with a brown handle."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A lost bag", te: "మర్చిపోయిన బ్యాగ్" },
    scene: {
      en: "This morning you left your bag at a shop. You go back in the evening and talk to Geetha, the owner.",
      te: "ఈ రోజు పొద్దున మీ బ్యాగ్ ఒక షాపులో మర్చిపోయారు. సాయంత్రం మళ్ళీ వెళ్ళి, షాపు ఓనర్ గీత గారితో మాట్లాడుతున్నారు.",
    },
    partner: { en: "Geetha (shop owner)", te: "గీత (షాపు ఓనర్)" },
    skills: [
      { id: "describe", label: { en: "Saying what it looks like", te: "అది ఎలా ఉంటుందో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Tell her you forgot your bag in her shop this morning.", te: "పొద్దున ఆవిడ షాపులో మీ బ్యాగ్ మర్చిపోయారని చెప్పండి." },
        replies: [
          { say: "I think I left my bag here this morning.", good: true, skill: "describe" },
          { say: "I think I left my cover here this morning.", good: false, skill: "describe", fixIt: "indian-english" },
          {
            say: "Where is my bag? Give it back now.",
            good: false,
            skill: "polite",
            react: { en: "Please don't worry. Let's look for it together.", te: "కంగారు పడకండి. ఇద్దరం కలిసి వెతుకుదాం." },
          },
        ],
      },
      {
        partner: "Oh! What colour is it?",
        te: "అయ్యో! అది ఏ రంగు?",
        hint: { en: "Say its colour, and the colour of its handle.", te: "దాని రంగు, దాని హ్యాండిల్ రంగు చెప్పండి." },
        replies: [
          { say: "It's black, with a brown handle.", good: true, skill: "describe" },
          { say: "It's black, with brown handle.", good: false, skill: "describe", fixIt: "article" },
        ],
      },
      {
        partner: "Is it a big bag or a small one?",
        te: "పెద్ద బ్యాగా, చిన్నదా?",
        hint: { en: "Say it is small, and that your glasses are inside.", te: "చిన్నదని, లోపల మీ కళ్ళద్దాలు ఉన్నాయని చెప్పండి." },
        replies: [
          { say: "It's a small one. My glasses are inside.", good: true, skill: "describe" },
          { say: "It's a small one. My glasses is inside.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Is this your bag? We found it near the counter.",
        te: "ఇదేనా మీ బ్యాగ్? కౌంటర్ దగ్గర దొరికింది.",
        hint: { en: "Say yes happily, and thank her.", te: "సంతోషంగా అవునని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, that's my bag! Thank you so much.", good: true, skill: "polite" },
          { say: "Yes, it's mine! Thank you very much.", good: true, skill: "polite" },
          { say: "Yes, that's my bag. Okay, bye.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
