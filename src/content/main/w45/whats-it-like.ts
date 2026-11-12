import type { Lesson } from "../../types";

/** Week 45, Day 5 (CURRICULUM §5): What's … like? — asking and telling about a city. */
export const day: Lesson = {
  id: "whats-it-like",
  kind: "lesson",
  title: { en: "What's It Like?", te: "ఎలా ఉంటుంది?" },
  subtitle: "What's … like?",
  summary: {
    en: "Learn to ask about a new place and answer: What's Hyderabad like? Is it very expensive to live there?",
    te: "కొత్త ఊరి గురించి అడగడం, జవాబు చెప్పడం నేర్చుకుందాం: What's Hyderabad like? Is it very expensive to live there?",
  },
  seo: {
    title: "What's It Like? in English for Telugu Speakers",
    description:
      "Say What's Hyderabad like? and Is it very expensive to live there? Simple lessons for Telugu speakers on asking about a new city.",
  },
  pattern: [
    { text: "What's", role: "action" },
    { text: "Hyderabad", role: "who" },
    { text: "like?", role: "what" },
  ],
  core: [
    { en: "What's Hyderabad like?", te: "హైదరాబాద్ ఎలా ఉంటుంది?", extra: ["How"] },
    { en: "Is it very expensive to live there?", te: "అక్కడ ఉండటానికి చాలా ఖర్చు అవుతుందా?", extra: ["living"] },
    { en: "What's the weather like in summer?", te: "ఎండాకాలంలో వాతావరణం ఎలా ఉంటుంది?", extra: ["on"] },
    { en: "It's a big, busy city with good hospitals.", te: "అది మంచి ఆసుపత్రులున్న పెద్ద, రద్దీ సిటీ.", extra: ["hospital"] },
    { en: "What are the people like?", te: "అక్కడి జనం ఎలా ఉంటారు?", extra: ["is"] },
    { en: "The rent is higher than in Guntur.", te: "గుంటూరు కంటే అక్కడ అద్దె ఎక్కువ." },
    { en: "The metro makes it easy to get around.", te: "మెట్రో వల్ల ఊర్లో తిరగడం సులువు." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone about a place they know: What's … like?",
    te: "ఎవరికైనా తెలిసిన ఒక ఊరి గురించి వాళ్ళని అడగండి: What's … like?",
  },
  words: [
    { en: "What's it like?", te: "అది ఎలా ఉంటుంది?" },
    { en: "rent", te: "అద్దె" },
    { en: "metro", te: "మెట్రో రైలు" },
    { en: "get around", te: "ఊర్లో అటూ ఇటూ తిరగడం" },
    { en: "traffic jam", te: "ట్రాఫిక్ జామ్" },
  ],
  grammar: ["question-words", "comparatives-superlatives", "present-simple"],
  topics: ["travel", "people", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What's it like?", te: "ఎలా ఉంటుంది?" },
      body: {
        en: "To ask about a place, say What's … like? It means tell me about it; it is not about liking. Answer with It's and describing words.",
        te: "ఒక ఊరి గురించి అడగాలంటే What's … like? అనండి. దాని అర్థం 'అది ఎలా ఉంటుంది?'; ఇష్టం గురించి కాదు. జవాబు It's … తో చెప్పండి.",
      },
      bridge: {
        te: ["హైదరాబాద్", "ఎలా ఉంటుంది?"],
        en: [
          { text: "What's", role: "action" },
          { text: "Hyderabad", role: "who" },
          { text: "like?", role: "what" },
        ],
      },
      examples: [
        { en: "What's Hyderabad like?", te: "హైదరాబాద్ ఎలా ఉంటుంది?" },
        { en: "What's the weather like in summer?", te: "ఎండాకాలంలో వాతావరణం ఎలా ఉంటుంది?" },
        { en: "What are the people like?", te: "అక్కడి జనం ఎలా ఉంటారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking about a new place", te: "కొత్త ఊరి గురించి అడగడం" },
      items: [
        {
          form: "What's … like?",
          useFor: { en: "Ask about one place or thing.", te: "ఒక ఊరి గురించి, ఒక విషయం గురించి అడగడానికి." },
          example: { en: "What's Hyderabad like?", te: "హైదరాబాద్ ఎలా ఉంటుంది?" },
        },
        {
          form: "What are … like?",
          useFor: { en: "Ask about many things or people.", te: "చాలా వాటి గురించి, మనుషుల గురించి అడగడానికి." },
          example: { en: "What are the roads like? Are there traffic jams?", te: "రోడ్లు ఎలా ఉంటాయి? ట్రాఫిక్ జామ్‌లు ఉంటాయా?" },
        },
        {
          form: "Is it … to …?",
          useFor: { en: "Ask about one point: cost, safety, travel.", te: "ఒక్క విషయం అడగడానికి: ఖర్చు, భద్రత, ప్రయాణం." },
          example: { en: "Is it very expensive to live there?", te: "అక్కడ ఉండటానికి చాలా ఖర్చు అవుతుందా?" },
        },
        {
          form: "Do you like …?",
          useFor: { en: "Ask if someone enjoys it.", te: "ఎవరికైనా అది నచ్చిందా అని అడగడానికి." },
          example: { en: "Do you like living in Hyderabad?", te: "మీకు హైదరాబాద్‌లో ఉండటం నచ్చిందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "How is Hyderabad like?",
      right: "What is Hyderabad like?",
      why: {
        en: "Like here goes with what, never with how; Telugu ఎలా makes us say how.",
        te: "ఇక్కడ like తో what వస్తుంది, how రాదు; తెలుగు 'ఎలా' వల్ల how అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "My native is Guntur.",
      right: "I'm from Guntur.",
      why: {
        en: "Native alone is not a place word in English; say I'm from or my hometown is.",
        te: "ఇంగ్లీష్‌లో native ఒక్కటే ఊరు అనే అర్థం ఇవ్వదు; I'm from లేదా my hometown is అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "You moved to a new city last year. A friend asks if you enjoy it. You do. What do you say?",
        te: "పోయిన సంవత్సరం మీరు కొత్త ఊరికి వెళ్ళారు. అది నచ్చిందా అని స్నేహితులు అడుగుతున్నారు. నచ్చింది. ఏమంటారు?",
      },
      options: ["Yes, I like it very much.", "Yes, I am liking it very much.", "Yes, I like very much."],
      answer: 0,
      why: {
        en: "Like is a feeling, so it takes no -ing, and it needs it after it.",
        te: "like ఒక భావన, అందుకే -ing రాదు; దాని తర్వాత it కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "What ___ the people like?",
      te: "అక్కడి జనం ఎలా ఉంటారు?",
      options: ["are", "is", "do"],
      answer: 0,
      why: {
        en: "People means many persons, so it takes are, not is.",
        te: "people అంటే చాలామంది, అందుకే is కాదు, are.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend asks: What's Visakhapatnam like? Which answer fits?",
        te: "విశాఖపట్నం ఎలా ఉంటుంది? అని స్నేహితులు అడుగుతున్నారు. ఏ జవాబు సరిపోతుంది?",
      },
      options: ["It's a lovely city by the sea.", "Yes, I like Visakhapatnam.", "I'm going there next week."],
      answer: 0,
      why: {
        en: "What's it like asks you to describe the place, not to say if you like it.",
        te: "What's it like? అంటే ఆ ఊరు ఎలా ఉంటుందో చెప్పమని; నచ్చిందా అని కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "The rent higher than in Guntur.",
      wrongIndex: 2,
      fix: "The rent is higher than in Guntur.",
      why: {
        en: "English needs is before higher; Telugu అద్దె ఎక్కువ needs no such word.",
        te: "higher ముందు is కావాలి; తెలుగు 'అద్దె ఎక్కువ' లో అలాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your cousin lives in Warangal. Ask what the city is like.",
        te: "మీ కజిన్ వరంగల్‌లో ఉంటారు. ఆ ఊరు ఎలా ఉంటుందో అడగండి.",
      },
      expected: ["What's Warangal like?", "What is Warangal like?", "What's it like?", "What is it like there?"],
      options: ["What's Warangal like?", "How is Warangal like?", "What Warangal is like?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A friend asks about Hyderabad. Say it is big and busy, but the metro is good.",
        te: "హైదరాబాద్ గురించి స్నేహితులు అడుగుతున్నారు. పెద్దది, రద్దీగా ఉంటుంది, కానీ మెట్రో బాగుంటుందని చెప్పండి.",
      },
      expected: ["It's big and busy, but the metro is good.", "It's a big, busy city, but the metro is good.", "It's very big and busy."],
      options: ["It's big and busy, but the metro is good.", "It's big and busy, but metro is good.", "It big and busy, but the metro is good."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Moving to Hyderabad", te: "హైదరాబాద్‌కి మారడం" },
    scene: {
      en: "Your friend Ruth is moving from Nellore to Hyderabad next month. You lived there for ten years.",
      te: "మీ స్నేహితురాలు రూత్ గారు వచ్చే నెల నెల్లూరు నుంచి హైదరాబాద్‌కి మారుతున్నారు. మీరు అక్కడ పదేళ్ళు ఉన్నారు.",
    },
    partner: { en: "Ruth (your friend)", te: "రూత్ (మీ స్నేహితురాలు)" },
    skills: [
      { id: "describe", label: { en: "Describing a city", te: "ఒక ఊరి గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "I'm moving to Hyderabad next month! You lived there, right?",
        te: "వచ్చే నెల నేను హైదరాబాద్‌కి మారుతున్నాను! మీరు అక్కడ ఉన్నారు కదా?",
        hint: { en: "Say yes, and how long you lived there.", te: "అవును అని, అక్కడ ఎన్నేళ్ళు ఉన్నారో చెప్పండి." },
        replies: [
          { say: "Yes, I lived there for ten years.", good: true, skill: "describe" },
          { say: "Yes, I am living there for ten years.", good: false, skill: "describe", fixIt: "duration" },
        ],
      },
      {
        partner: "So what's it like?",
        te: "అయితే అది ఎలా ఉంటుంది?",
        hint: { en: "Describe the city: its size, and its people.", te: "ఆ ఊరి గురించి చెప్పండి: దాని సైజు, అక్కడి జనం." },
        replies: [
          { say: "It's big and busy, but the people are very kind.", good: true, skill: "describe" },
          { say: "Yes, I like it very much.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Is it very expensive to live there?",
        te: "అక్కడ ఉండటానికి చాలా ఖర్చు అవుతుందా?",
        hint: { en: "Say yes: compare the rent with Nellore.", te: "అవును అని, అద్దెని నెల్లూరుతో పోల్చి చెప్పండి." },
        replies: [
          { say: "Yes, the rent is higher than in Nellore.", good: true, skill: "describe" },
          {
            say: "Of course! Can you really manage there?",
            good: false,
            skill: "polite",
            react: { en: "Oh! Now I'm really worried.", te: "అయ్యో! ఇప్పుడు నాకు నిజంగా భయంగా ఉంది." },
          },
        ],
      },
      {
        partner: "Thanks! I feel much better now.",
        te: "థాంక్స్! ఇప్పుడు నాకు చాలా ధైర్యంగా ఉంది.",
        hint: { en: "Wish her luck in her new city.", te: "కొత్త ఊర్లో అంతా బాగుండాలని ఆవిడకి చెప్పండి." },
        replies: [
          { say: "Good luck in Hyderabad! Call me anytime.", good: true, skill: "polite" },
          { say: "All the best for your new home!", good: true, skill: "polite" },
          { say: "All the best for new home!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
