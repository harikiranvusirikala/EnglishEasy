import type { Lesson } from "../../types";

/**
 * Week 21, Day 3 (CURRICULUM §4): big amounts — hundred, thousand, lakh = one hundred thousand, crore = ten million —
 * at the bank and for the price of a house. Moved here from Week 3 (id, title and topic kept).
 */
export const day: Lesson = {
  id: "big-numbers-lakh",
  kind: "lesson",
  title: { en: "Big Numbers", te: "పెద్ద సంఖ్యలు" },
  subtitle: "thousand / lakh / crore",
  summary: {
    en: "Learn to say big amounts with thousand, lakh and crore, and how they match million.",
    te: "thousand, lakh, crore తో పెద్ద మొత్తాలు చెప్పడం, అవి million తో ఎలా సరిపోతాయో నేర్చుకుందాం.",
  },
  seo: {
    title: "Lakh, Crore, Thousand and Million in English for Telugu Speakers",
    description:
      "One lakh is one hundred thousand; ten lakh is one million. Say big amounts in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "One lakh", role: "who" },
    { text: "is", role: "action" },
    { text: "one hundred thousand", role: "what" },
  ],
  core: [
    { en: "One lakh is one hundred thousand.", te: "ఒక లక్ష అంటే వంద వేలు.", extra: ["hundreds"] },
    { en: "The flat costs fifty lakh rupees.", te: "ఆ ఫ్లాట్ ధర యాభై లక్షల రూపాయలు.", extra: ["lakhs"] },
    { en: "I have two lakh rupees in my account.", te: "నా అకౌంట్‌లో రెండు లక్షల రూపాయలు ఉన్నాయి.", extra: ["lakhs"] },
    { en: "One crore is ten million.", te: "ఒక కోటి అంటే పది మిలియన్లు.", extra: ["millions"] },
    { en: "Ten lakh is one million.", te: "పది లక్షలు అంటే ఒక మిలియన్.", extra: ["lakhs"] },
    { en: "How much does the house cost?", te: "ఆ ఇంటి ధర ఎంత?", extra: ["is"] },
    { en: "It costs one crore rupees.", te: "దాని ధర ఒక కోటి రూపాయలు.", extra: ["crores"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Look at a price board or a house for sale, and say one big amount in English.",
    te: "ఏదైనా ధరల బోర్డ్ లేదా అమ్మకానికి ఉన్న ఇల్లు చూసి, ఒక పెద్ద మొత్తాన్ని ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "thousand", te: "వెయ్యి" },
    { en: "lakh", te: "లక్ష" },
    { en: "crore", te: "కోటి" },
    { en: "million", te: "మిలియన్ (పది లక్షలు)" },
    { en: "cost", te: "ధర, ఖరీదు అవ్వడం" },
  ],
  grammar: ["big-numbers", "present-simple"],
  topics: ["money", "bank", "home"],
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
          useFor: { en: "For amounts like a TV or a phone.", te: "TV, ఫోన్ లాంటి ధరలకు." },
          example: { en: "This TV costs thirty thousand rupees.", te: "ఈ TV ధర ముప్పై వేల రూపాయలు." },
        },
        {
          form: "lakh = 1,00,000",
          useFor: { en: "For amounts like savings, a car or a flat.", te: "పొదుపు, కారు, ఫ్లాట్ లాంటి మొత్తాలకు." },
          example: { en: "I have two lakh rupees in my account.", te: "నా అకౌంట్‌లో రెండు లక్షల రూపాయలు ఉన్నాయి." },
        },
        {
          form: "crore = 1,00,00,000",
          useFor: { en: "For very big amounts, like a house or land.", te: "ఇల్లు, భూమి లాంటి చాలా పెద్ద మొత్తాలకు." },
          example: { en: "It costs one crore rupees.", te: "దాని ధర ఒక కోటి రూపాయలు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "The flat costs fifty lakhs rupees.",
      right: "The flat costs fifty lakh rupees.",
      why: {
        en: "Telugu says యాభై లక్షలు, but before rupees, lakh, thousand and crore have no s.",
        te: "తెలుగులో 'యాభై లక్షలు' అన్నా, rupees ముందు lakh, thousand, crore కి s ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "It costs hundred rupees.",
      right: "It costs a hundred rupees.",
      why: {
        en: "Telugu says just వంద, but English says a hundred or one hundred, never hundred alone.",
        te: "తెలుగులో 'వంద' అంటే చాలు; ఇంగ్లీష్‌లో a hundred లేదా one hundred అనాలి, hundred ఒక్కటే అనకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["It costs three thousands rupees.", "It costs three thousand rupees.", "It costs three thousand rupee."],
      answer: 1,
      why: {
        en: "Thousand has no s after a number, but rupees always has one.",
        te: "సంఖ్య తర్వాత thousand కి s ఉండదు; rupees కి మాత్రం s ఉంటుంది.",
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
        en: "A lakh has five zeros, just like one hundred thousand.",
        te: "లక్షకి ఐదు సున్నాలు; one hundred thousand కి కూడా ఐదే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ten lakh is the same as …", te: "పది లక్షలు అంటే …" },
      options: ["one thousand", "one million", "one crore"],
      answer: 1,
      why: {
        en: "Ten lakh and one million both have six zeros.",
        te: "పది లక్షలకి, million కి రెండింటికీ ఆరు సున్నాలు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "The house costs two crores rupees.",
      wrongIndex: 4,
      fix: "The house costs two crore rupees.",
      why: {
        en: "Before rupees, crore has no s, even after two.",
        te: "rupees ముందు crore కి s ఉండదు, రెండు తర్వాత కూడా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "At the bank, the clerk asks how much you want to deposit. It is one lakh rupees. Answer.",
        te: "బ్యాంక్‌లో క్లర్క్ ఎంత డిపాజిట్ చేస్తారని అడుగుతున్నారు. ఒక లక్ష రూపాయలు. జవాబు చెప్పండి.",
      },
      expected: ["One lakh rupees, please.", "One lakh rupees.", "I'd like to deposit one lakh rupees."],
      options: ["One lakh rupees, please.", "One lakhs rupees, please.", "One lakh rupee, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Ask a friend the price of the house.",
        te: "ఆ ఇంటి ధర ఎంతో మీ స్నేహితులను అడగండి.",
      },
      expected: ["How much does the house cost?", "How much is the house?"],
      options: ["How much does the house cost?", "How much do the house cost?", "How much the house costs?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The price of a house", te: "ఇంటి ధర" },
    scene: {
      en: "A house on your street is for sale. Your friend Imran works in Dubai. He calls and asks about it.",
      te: "మీ వీధిలో ఒక ఇల్లు అమ్మకానికి ఉంది. మీ స్నేహితులు ఇమ్రాన్ దుబాయ్‌లో పని చేస్తారు. ఫోన్ చేసి దాని గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Imran (a friend in Dubai)", te: "ఇమ్రాన్ (దుబాయ్‌లో ఉండే స్నేహితులు)" },
    voice: "b",
    skills: [
      { id: "numbers", label: { en: "Big numbers", te: "పెద్ద సంఖ్యలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Is the house on your street for sale?",
        te: "హలో! మీ వీధిలో ఆ ఇల్లు అమ్మకానికి ఉందా?",
        hint: { en: "Say yes. Don't forget is.", te: "అవునని చెప్పండి. is మర్చిపోకండి." },
        replies: [
          { say: "Yes, it is for sale.", good: true },
          { say: "Yes, it for sale.", good: false, fixIt: "be" },
        ],
      },
      {
        partner: "How much does it cost?",
        te: "దాని ధర ఎంత?",
        hint: { en: "Tell him the price: 80 lakh rupees.", te: "ధర చెప్పండి: 80 లక్షల రూపాయలు." },
        replies: [
          { say: "It costs eighty lakh rupees.", good: true, skill: "numbers" },
          { say: "It costs eighty lakhs rupees.", good: false, skill: "numbers", fixIt: "plural" },
        ],
      },
      {
        partner: "What is that in millions?",
        te: "మిలియన్లలో అది ఎంత?",
        hint: { en: "Ten lakh is one million. Work it out and say it.", te: "పది లక్షలు ఒక మిలియన్. లెక్క వేసి చెప్పండి." },
        replies: [
          { say: "It is eight million.", good: true, skill: "numbers" },
          { say: "It is eight millions.", good: false, skill: "numbers" },
          {
            say: "It is eighty million.",
            good: false,
            skill: "numbers",
            react: { en: "Eighty million? That is eight crore!", te: "ఎనభై మిలియన్లా? అంటే ఎనిమిది కోట్లు!" },
          },
        ],
      },
      {
        partner: "Good price! Please send me some photos.",
        te: "మంచి ధరే! కొన్ని ఫోటోలు పంపండి.",
        hint: { en: "Agree, and say goodbye nicely.", te: "సరే అని, మర్యాదగా బై చెప్పండి." },
        replies: [
          { say: "Sure, I'll send them today. Bye!", good: true, skill: "polite" },
          {
            say: "Why? You can't buy it.",
            good: false,
            skill: "polite",
            react: { en: "Ha ha! Maybe I can. Just send them!", te: "హహ! కొనగలనేమో. మీరు పంపండి చాలు!" },
          },
        ],
      },
    ],
  },
};
