import type { Lesson } from "../../types";

/** Week 4, Day 5 (CURRICULUM §3): this / that / these / those — near or far, one or many. */
export const day: Lesson = {
  id: "this-that-these-those",
  kind: "lesson",
  title: { en: "This, That, These, Those", te: "ఇది, అది, ఇవి, అవి" },
  subtitle: "this / that / these / those",
  summary: {
    en: "Learn to point to things near and far, one or many, with this, that, these and those.",
    te: "దగ్గర, దూరం, ఒకటి, చాలా వస్తువులను this, that, these, those తో చూపించడం నేర్చుకుందాం.",
  },
  seo: {
    title: "This, That, These, Those in English for Telugu Speakers",
    description:
      "Say This is my bag and Those are my shoes in English. Simple lessons for Telugu speakers on this, that, these and those, with Telugu explanations.",
  },
  pattern: [
    { text: "Those", role: "who" },
    { text: "are", role: "action" },
    { text: "my shoes", role: "what" },
  ],
  core: [
    { en: "This is my bag.", te: "ఇది నా బ్యాగ్.", extra: ["These"] },
    { en: "Those are my shoes.", te: "అవి నా షూస్.", extra: ["That"] },
    { en: "That is our temple.", te: "అది మా గుడి.", extra: ["Those"] },
    { en: "These mangoes are sweet.", te: "ఈ మామిడిపళ్ళు తియ్యగా ఉన్నాయి.", extra: ["This"] },
    { en: "Is this your umbrella?", te: "ఇది మీ గొడుగా?", extra: ["these"] },
    { en: "Are those your sandals?", te: "అవి మీ చెప్పులా?", extra: ["that"] },
    { en: "I want these two sarees.", te: "నాకు ఈ రెండు చీరలు కావాలి.", extra: ["this"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Point to things around you and say: This is … That is … These are … Those are …",
    te: "మీ చుట్టూ ఉన్న వస్తువులు చూపిస్తూ చెప్పండి: This is … That is … These are … Those are …",
  },
  words: [
    { en: "shoes", te: "షూస్, బూట్లు" },
    { en: "sandals", te: "చెప్పులు" },
    { en: "umbrella", te: "గొడుగు" },
    { en: "saree", te: "చీర" },
    { en: "those", te: "అవి (దూరంగా, చాలా)" },
  ],
  grammar: ["this-that", "am-is-are", "plurals-countable"],
  topics: ["shopping", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Near or far, one or many", te: "దగ్గరా, దూరమా; ఒకటా, చాలానా" },
      body: {
        en: "This is one thing near you (ఇది). That is one thing far away (అది). These are many things near you (ఇవి). Those are many things far away (అవి).",
        te: "this = దగ్గర ఉన్న ఒక వస్తువు (ఇది). that = దూరంగా ఉన్న ఒక వస్తువు (అది). these = దగ్గర ఉన్న చాలా వస్తువులు (ఇవి). those = దూరంగా ఉన్న చాలా వస్తువులు (అవి).",
      },
      bridge: {
        te: ["అవి", "నా", "షూస్"],
        en: [
          { text: "Those", role: "who" },
          { text: "are", role: "action" },
          { text: "my shoes", role: "what" },
        ],
      },
      examples: [
        { en: "This is my bag.", te: "ఇది నా బ్యాగ్." },
        { en: "That is our temple.", te: "అది మా గుడి." },
        { en: "Those are my shoes.", te: "అవి నా షూస్." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "This, that, these, those", te: "ఇది, అది, ఇవి, అవి" },
      items: [
        {
          form: "this (one, near)",
          useFor: { en: "One thing near you, with is.", te: "దగ్గర ఉన్న ఒక వస్తువు, is తో." },
          example: { en: "Is this your umbrella?", te: "ఇది మీ గొడుగా?" },
        },
        {
          form: "that (one, far)",
          useFor: { en: "One thing far from you, with is.", te: "దూరంగా ఉన్న ఒక వస్తువు, is తో." },
          example: { en: "That is our temple.", te: "అది మా గుడి." },
        },
        {
          form: "these (many, near)",
          useFor: { en: "Many things near you, with are.", te: "దగ్గర ఉన్న చాలా వస్తువులు, are తో." },
          example: { en: "These mangoes are sweet.", te: "ఈ మామిడిపళ్ళు తియ్యగా ఉన్నాయి." },
        },
        {
          form: "those (many, far)",
          useFor: { en: "Many things far from you, with are.", te: "దూరంగా ఉన్న చాలా వస్తువులు, are తో." },
          example: { en: "Are those your sandals?", te: "అవి మీ చెప్పులా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "This mangoes are sweet.",
      right: "These mangoes are sweet.",
      why: {
        en: "Mangoes are many, so say these.",
        te: "మామిడిపళ్ళు చాలా ఉన్నాయి, కాబట్టి these.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Those is my shoes.",
      right: "Those are my shoes.",
      why: {
        en: "Those and these take are.",
        te: "those, these తో are వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The shoes are far from you. Which sentence is right?", te: "షూస్ మీకు దూరంగా ఉన్నాయి. ఏ వాక్యం సరైనది?" },
      options: ["These are my shoes.", "Those are my shoes.", "That are my shoes."],
      answer: 1,
      why: {
        en: "Many things far away: those.",
        te: "దూరంగా ఉన్న చాలా వస్తువులు: those.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ mangoes are sweet.",
      te: "ఈ మామిడిపళ్ళు తియ్యగా ఉన్నాయి.",
      options: ["This", "These", "That"],
      answer: 1,
      why: {
        en: "Many things near you: these.",
        te: "దగ్గర ఉన్న చాలా వస్తువులు: these.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You are holding one umbrella. Ask if it is your friend's.",
        te: "మీ చేతిలో ఒక గొడుగు ఉంది. అది మీ స్నేహితుడిదా అని అడగండి.",
      },
      options: ["Is this your umbrella?", "Are these your umbrella?", "Is those your umbrella?"],
      answer: 0,
      why: {
        en: "One thing in your hand: this.",
        te: "చేతిలో ఉన్న ఒక వస్తువు: this.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I want this two sarees.",
      wrongIndex: 2,
      fix: "I want these two sarees.",
      why: {
        en: "Two sarees are many: these.",
        te: "రెండు చీరలు అంటే చాలా: these.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At a shop, two sarees are in front of you. Say you want them.",
        te: "షాప్‌లో మీ ముందు రెండు చీరలు ఉన్నాయి. అవి కావాలని చెప్పండి.",
      },
      expected: ["I want these two sarees.", "I want these sarees."],
      options: ["I want this two sarees.", "I want these two sarees.", "I want those two saree."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Some sandals are near the door, far from you. Ask your friend if they are hers.",
        te: "తలుపు దగ్గర, మీకు దూరంగా కొన్ని చెప్పులు ఉన్నాయి. అవి మీ స్నేహితురాలివా అని అడగండి.",
      },
      expected: ["Are those your sandals?"],
      options: ["Is those your sandals?", "Are those your sandals?", "Are that your sandals?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Pointing at a shop", te: "షాప్‌లో చూపించి అడగడం" },
    scene: {
      en: "You are at Srinivas's shop. Point to things near you and far away, and buy one.",
      te: "మీరు శ్రీనివాస్ షాప్‌లో ఉన్నారు. దగ్గర, దూరంగా ఉన్న వస్తువులు చూపించి, ఒకటి కొనండి.",
    },
    partner: { en: "Srinivas (a shopkeeper)", te: "శ్రీనివాస్ (షాప్ యజమాని)" },
    skills: [{ id: "point", label: { en: "this / that / these / those", te: "ఇది, అది, ఇవి, అవి" } }],
    turns: [
      {
        partner: "Welcome! What do you need?",
        te: "రండి! మీకు ఏం కావాలి?",
        hint: { en: "Point to one near you: How much is this umbrella?", te: "దగ్గర ఉన్నది చూపించండి: How much is this umbrella?" },
        replies: [
          { say: "How much is this umbrella?", good: true, skill: "point" },
          { say: "How much is these umbrella?", good: false, skill: "point" },
        ],
      },
      {
        partner: "Two hundred rupees.",
        te: "రెండు వందల రూపాయలు.",
        hint: { en: "Point far away: How much are those sandals?", te: "దూరంగా ఉన్నవి చూపించండి: How much are those sandals?" },
        replies: [
          { say: "How much are those sandals?", good: true, skill: "point" },
          { say: "How much is that sandals?", good: false, skill: "point" },
        ],
      },
      {
        partner: "Those are three hundred rupees.",
        te: "అవి మూడు వందల రూపాయలు.",
        hint: { en: "Say: I will take this umbrella.", te: "ఇలా చెప్పండి: I will take this umbrella." },
        replies: [
          { say: "I will take this umbrella.", good: true, skill: "point" },
          { say: "I will take these umbrella.", good: false, skill: "point" },
        ],
      },
      {
        partner: "Anything else?",
        te: "ఇంకా ఏమైనా కావాలా?",
        hint: { en: "Say: No, that is all. Thank you.", te: "ఇలా చెప్పండి: No, that is all. Thank you." },
        replies: [
          { say: "No, that is all. Thank you.", good: true, skill: "point" },
          { say: "No, those is all. Thank you.", good: false, skill: "point" },
        ],
      },
    ],
  },
};
