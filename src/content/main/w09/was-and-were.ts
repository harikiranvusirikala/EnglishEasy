import type { Lesson } from "../../types";

/** Week 9, Day 1 (CURRICULUM §3): was / were, wasn't / weren't, Were you …? */
export const day: Lesson = {
  id: "was-and-were",
  kind: "lesson",
  title: { en: "Was & Were", te: "ఉన్నాను, ఉన్నారు (గతం)" },
  subtitle: "was / were",
  summary: {
    en: "Learn to talk about where and how you were in the past with was and were.",
    te: "గతంలో మీరు ఎక్కడ, ఎలా ఉన్నారో was, were తో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Was and Were in English for Telugu Speakers",
    description:
      "Say I was at home yesterday and Were you tired? in English. Simple lessons for Telugu speakers on was and were, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was", role: "action" },
    { text: "at home yesterday", role: "what" },
  ],
  core: [
    { en: "I was at home yesterday.", te: "నేను నిన్న ఇంట్లో ఉన్నాను.", extra: ["were"] },
    { en: "Were you tired?", te: "మీకు అలసటగా అనిపించిందా?", extra: ["Was"] },
    { en: "They were at the temple.", te: "వాళ్ళు గుడిలో ఉన్నారు.", extra: ["was"] },
    { en: "The shop was closed.", te: "షాప్ మూసి ఉండింది.", extra: ["were"] },
    { en: "I wasn't well last week.", te: "పోయిన వారం నాకు ఒంట్లో బాగాలేదు.", extra: ["weren't"] },
    { en: "Where were you on Sunday?", te: "ఆదివారం మీరు ఎక్కడ ఉన్నారు?", extra: ["was"] },
    { en: "The weather was very hot.", te: "వాతావరణం చాలా వేడిగా ఉండింది.", extra: ["were"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Tell someone where you were yesterday evening: I was at …",
    te: "నిన్న సాయంత్రం మీరు ఎక్కడ ఉన్నారో ఎవరికైనా చెప్పండి: I was at …",
  },
  words: [
    { en: "was", te: "ఉన్నాను, ఉంది (గతం)" },
    { en: "were", te: "ఉన్నారు, ఉన్నాం (గతం)" },
    { en: "home", te: "ఇల్లు, ఇంటి దగ్గర" },
    { en: "weather", te: "వాతావరణం" },
    { en: "hot", te: "వేడిగా" },
  ],
  grammar: ["was-were", "past-simple"],
  topics: ["time", "weather"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Was and were", te: "was, were — గతంలో ఉండటం" },
      body: {
        en: "Was and were are am, is and are in the past. Am and is become was: I was at home. Are becomes were: They were at the temple.",
        te: "was, were అంటే am, is, are గతంలో. am, is → was: I was at home. are → were: They were at the temple.",
      },
      bridge: {
        te: ["నేను", "నిన్న", "ఇంట్లో ఉన్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "was", role: "action" },
          { text: "at home yesterday", role: "what" },
        ],
      },
      examples: [
        { en: "I was at home yesterday.", te: "నేను నిన్న ఇంట్లో ఉన్నాను." },
        { en: "They were at the temple.", te: "వాళ్ళు గుడిలో ఉన్నారు." },
        { en: "Were you tired?", te: "మీకు అలసటగా అనిపించిందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Was or were?", te: "was ఆ, were ఆ?" },
      items: [
        {
          form: "I, he, she, it → was",
          useFor: { en: "For I and one person or thing.", te: "I కి, ఒక్క మనిషి లేదా వస్తువుకి." },
          example: { en: "The shop was closed.", te: "షాప్ మూసి ఉండింది." },
        },
        {
          form: "you, we, they → were",
          useFor: { en: "For you, we, they and many.", te: "you, we, they కి, చాలా మందికి." },
          example: { en: "Where were you on Sunday?", te: "ఆదివారం మీరు ఎక్కడ ఉన్నారు?" },
        },
        {
          form: "wasn't / weren't",
          useFor: { en: "To say no in the past.", te: "గతంలో 'లేదు' అనడానికి." },
          example: { en: "I wasn't well last week.", te: "పోయిన వారం నాకు ఒంట్లో బాగాలేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "They was at the temple.",
      right: "They were at the temple.",
      why: {
        en: "They means many people, so use were, not was: They were at the temple.",
        te: "they అంటే చాలా మంది, అందుకే was కాదు, were: They were at the temple.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Yesterday I am at home.",
      right: "Yesterday I was at home.",
      why: {
        en: "Yesterday is the past, so am changes to was: Yesterday I was at home.",
        te: "yesterday అంటే గతం, కాబట్టి am కాదు, was: Yesterday I was at home.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["They was at home.", "They were at home.", "They are at home yesterday."],
      answer: 1,
      why: {
        en: "In the past, they always takes were, never was: They were at home.",
        te: "గతంలో they తో ఎప్పుడూ were వస్తుంది, was రాదు: They were at home.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ you tired yesterday?",
      te: "నిన్న మీకు అలసటగా అనిపించిందా?",
      options: ["Was", "Were", "Are"],
      answer: 1,
      why: {
        en: "In the past, you takes were, even for one person: Were you tired yesterday?",
        te: "ఒక్కరినే అడిగినా, గతంలో you తో were వస్తుంది: Were you tired yesterday?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence is about the past?", te: "గతం గురించి చెప్పే వాక్యం ఏది?" },
      options: ["The shop is closed.", "The shop was closed.", "The shop be closed."],
      answer: 1,
      why: {
        en: "Was is the past of is: The shop was closed.",
        te: "is కి గతం was: The shop was closed.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Where was you on Sunday?",
      wrongIndex: 1,
      fix: "Where were you on Sunday?",
      why: {
        en: "With you, always say were, even for one person: Where were you on Sunday?",
        te: "ఒక్కరినే అడిగినా you తో were అనాలి: Where were you on Sunday?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: Where were you yesterday? Say at home.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Where were you yesterday? ఇంట్లో అని చెప్పండి.",
      },
      expected: ["I was at home.", "I was at home yesterday."],
      options: ["I was at home.", "I were at home.", "I am at home yesterday."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend walked a lot yesterday. Ask if she was tired.",
        te: "మీ స్నేహితురాలు నిన్న చాలా నడిచారు. అలసటగా అనిపించిందా అని అడగండి.",
      },
      expected: ["Were you tired?"],
      options: ["Was you tired?", "Were you tired?", "Did you tired?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Where were you?", te: "ఎక్కడ ఉన్నారు?" },
    scene: {
      en: "Your friend Imran called you yesterday, but you did not answer. Tell him where you were.",
      te: "నిన్న మీ స్నేహితుడు ఇమ్రాన్ ఫోన్ చేశారు, మీరు ఎత్తలేదు. ఎక్కడ ఉన్నారో ఆయనకి చెప్పండి.",
    },
    partner: { en: "Imran (a friend)", te: "ఇమ్రాన్ (స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "was", label: { en: "was / were", te: "was / were వాడకం" } }],
    turns: [
      {
        partner: "I called you yesterday!",
        te: "నిన్న మీకు ఫోన్ చేశాను!",
        hint: { en: "Say sorry, and tell him where you were.", te: "Sorry చెప్పి, మీరు ఎక్కడ ఉన్నారో చెప్పండి." },
        replies: [
          { say: "Sorry, I was at the temple.", good: true, skill: "was" },
          { say: "Sorry, I were at the temple.", good: false, skill: "was" },
          {
            say: "I was busy. Don't call so much.",
            good: false,
            react: { en: "Oh. Sorry, I was only worried.", te: "అయ్యో, sorry. మీ గురించి కంగారు పడ్డాను, అంతే." },
          },
        ],
      },
      {
        partner: "Were you there all day?",
        te: "రోజంతా అక్కడే ఉన్నారా?",
        hint: { en: "Say yes, and tell him there was a festival.", te: "అవును అని, అక్కడ పండుగ జరిగిందని చెప్పండి." },
        replies: [
          { say: "Yes. It was a festival.", good: true, skill: "was" },
          { say: "Yes. It is a festival yesterday.", good: false, skill: "was" },
        ],
      },
      {
        partner: "Was it crowded?",
        te: "రద్దీగా ఉండిందా?",
        hint: { en: "Say yes, and that it was full of people.", te: "అవును అని, చాలా మంది జనం ఉన్నారని చెప్పండి." },
        replies: [
          { say: "Yes, there were many people.", good: true, skill: "was" },
          { say: "Yes, there was many people.", good: false, skill: "was" },
        ],
      },
      {
        partner: "And on Sunday?",
        te: "మరి ఆదివారం?",
        hint: { en: "Say where you were, and that you were ill.", te: "ఎక్కడ ఉన్నారో, ఒంట్లో బాగాలేదని చెప్పండి." },
        replies: [
          { say: "I was at home. I wasn't well.", good: true, skill: "was" },
          { say: "I was at home. I weren't well.", good: false, skill: "was" },
        ],
      },
    ],
  },
};
