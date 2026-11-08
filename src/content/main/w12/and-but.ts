import type { Lesson } from "../../types";

/** Week 12, Day 1 (CURRICULUM §3): joining ideas with and / but. */
export const day: Lesson = {
  id: "and-but",
  kind: "lesson",
  title: { en: "And, But", te: "మరియు, కానీ" },
  subtitle: "and / but",
  summary: {
    en: "Learn to join ideas: and adds something, but shows a difference.",
    te: "ఆలోచనలను కలపడం నేర్చుకుందాం: and ఇంకోటి చేరుస్తుంది, but తేడా చూపిస్తుంది.",
  },
  seo: {
    title: "And and But in English for Telugu Speakers",
    description:
      "Say I like tea and coffee, and I like tea, but not coffee in English. Simple lessons for Telugu speakers on joining ideas with and and but.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "like", role: "action" },
    { text: "tea and coffee", role: "what" },
  ],
  core: [
    { en: "I like tea and coffee.", te: "నాకు టీ, కాఫీ ఇష్టం.", extra: ["but"] },
    { en: "I like tea, but not coffee.", te: "నాకు టీ ఇష్టం, కానీ కాఫీ ఇష్టం లేదు.", extra: ["and"] },
    { en: "She is old but very active.", te: "ఆమెకు వయసైంది, కానీ చాలా చురుకుగా ఉంటుంది.", extra: ["and"] },
    { en: "We visited the temple and the park.", te: "మేము గుడికి, పార్క్‌కి వెళ్ళాం.", extra: ["but"] },
    { en: "The food was good but expensive.", te: "భోజనం బాగుంది, కానీ ఖరీదు.", extra: ["and"] },
    { en: "I called him, but he was busy.", te: "నేను ఫోన్ చేశాను, కానీ అతను బిజీగా ఉన్నాడు.", extra: ["and"] },
    { en: "I can read and write English.", te: "నాకు ఇంగ్లీష్ చదవడం, రాయడం వచ్చు.", extra: ["but"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Say one sentence with and and one with but about the food you like.",
    te: "మీకు ఇష్టమైన ఆహారం గురించి and తో ఒక వాక్యం, but తో ఒక వాక్యం చెప్పండి.",
  },
  words: [
    { en: "and", te: "మరియు, …ను" },
    { en: "but", te: "కానీ" },
    { en: "active", te: "చురుకుగా" },
    { en: "write", te: "రాయడం" },
    { en: "buttermilk", te: "మజ్జిగ" },
  ],
  grammar: ["connectors", "word-order"],
  topics: ["food", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "And adds, but shows a difference", te: "and చేరుస్తుంది, but తేడా చూపిస్తుంది" },
      body: {
        en: "And joins two things that go together: tea and coffee. But shows a difference: I like tea, but not coffee. In a longer sentence, put a comma before but.",
        te: "and కలిసి వెళ్ళే రెండింటిని కలుపుతుంది: tea and coffee. but తేడా చూపిస్తుంది: I like tea, but not coffee. పెద్ద వాక్యంలో but ముందు కామా పెట్టండి.",
      },
      bridge: {
        te: ["నాకు", "టీ, కాఫీ", "ఇష్టం"],
        en: [
          { text: "I", role: "who" },
          { text: "like", role: "action" },
          { text: "tea and coffee", role: "what" },
        ],
      },
      examples: [
        { en: "I like tea and coffee.", te: "నాకు టీ, కాఫీ ఇష్టం." },
        { en: "I like tea, but not coffee.", te: "నాకు టీ ఇష్టం, కానీ కాఫీ ఇష్టం లేదు." },
        { en: "I called him, but he was busy.", te: "నేను ఫోన్ చేశాను, కానీ అతను బిజీగా ఉన్నాడు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "And or but?", te: "and ఆ, but ఆ?" },
      items: [
        {
          form: "and",
          useFor: { en: "Two things that go together.", te: "కలిసి వెళ్ళే రెండు విషయాలు." },
          example: { en: "I can read and write English.", te: "నాకు ఇంగ్లీష్ చదవడం, రాయడం వచ్చు." },
        },
        {
          form: "but",
          useFor: { en: "Two things that are different.", te: "వేరు వేరుగా ఉండే రెండు విషయాలు." },
          example: { en: "The food was good but expensive.", te: "భోజనం బాగుంది, కానీ ఖరీదు." },
        },
        {
          form: ", but + a sentence",
          useFor: { en: "Join two sentences: comma, then but.", te: "రెండు వాక్యాలు కలపడం: కామా, తర్వాత but." },
          example: { en: "I called him, but he was busy.", te: "నేను ఫోన్ చేశాను, కానీ అతను బిజీగా ఉన్నాడు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "The food was good and expensive.",
      right: "The food was good but expensive.",
      why: {
        en: "Good is happy, expensive is not. Different, so but.",
        te: "good మంచి విషయం, expensive కాదు. తేడా ఉంది, కాబట్టి but.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I like tea but coffee.",
      right: "I like tea and coffee.",
      why: {
        en: "You like both, so and.",
        te: "రెండూ ఇష్టమే, కాబట్టి and.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You like tea. You also like coffee. Which sentence?", te: "మీకు టీ ఇష్టం. కాఫీ కూడా ఇష్టం. ఏ వాక్యం?" },
      options: ["I like tea and coffee.", "I like tea but coffee.", "I like tea, coffee also and."],
      answer: 0,
      why: {
        en: "Both: and.",
        te: "రెండూ: and.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I called him, ___ he was busy.",
      te: "నేను ఫోన్ చేశాను, కానీ అతను బిజీగా ఉన్నాడు.",
      options: ["but", "and", "so"],
      answer: 0,
      why: {
        en: "Something different happened: but.",
        te: "అనుకున్నది జరగలేదు: but.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence shows a difference?", te: "తేడా చూపించే వాక్యం ఏది?" },
      options: ["She is kind and helpful.", "She is old but very active.", "She is tall and thin."],
      answer: 1,
      why: {
        en: "Old but active: a difference.",
        te: "old but active: తేడా ఉంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The food was good and expensive.",
      wrongIndex: 4,
      fix: "The food was good but expensive.",
      why: {
        en: "Good and expensive are different: but.",
        te: "good, expensive వేరు: but.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Say that you like idli and dosa.",
        te: "మీకు ఇడ్లీ, దోసె ఇష్టమని చెప్పండి.",
      },
      expected: ["I like idli and dosa."],
      options: ["I like idli and dosa.", "I like idli but dosa.", "I like idli, dosa also."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say that you like tea, but not coffee.",
        te: "మీకు టీ ఇష్టం, కానీ కాఫీ కాదని చెప్పండి.",
      },
      expected: ["I like tea, but not coffee.", "I like tea but not coffee."],
      options: ["I like tea, but not coffee.", "I like tea and not coffee.", "I like tea, but coffee."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "What do you like?", te: "మీకు ఏం ఇష్టం?" },
    scene: {
      en: "Your friend Anitha asks about the drinks and sweets you like.",
      te: "మీకు ఇష్టమైన పానీయాలు, స్వీట్ల గురించి మీ స్నేహితురాలు అనిత అడుగుతోంది.",
    },
    partner: { en: "Anitha (a friend)", te: "అనిత (స్నేహితురాలు)" },
    skills: [{ id: "join", label: { en: "and / but", te: "and / but వాడకం" } }],
    turns: [
      {
        partner: "What do you like to drink?",
        te: "మీకు ఏం తాగడం ఇష్టం?",
        hint: { en: "Say: I like tea and buttermilk.", te: "ఇలా చెప్పండి: I like tea and buttermilk." },
        replies: [
          { say: "I like tea and buttermilk.", good: true, skill: "join" },
          { say: "I like tea but buttermilk.", good: false, skill: "join" },
        ],
      },
      {
        partner: "Do you like coffee?",
        te: "మీకు కాఫీ ఇష్టమా?",
        hint: { en: "Say: Yes, but only in the morning.", te: "ఇలా చెప్పండి: Yes, but only in the morning." },
        replies: [
          { say: "Yes, but only in the morning.", good: true, skill: "join" },
          { say: "Yes, and only in the morning.", good: false, skill: "join" },
        ],
      },
      {
        partner: "Do you like sweets?",
        te: "మీకు స్వీట్లు ఇష్టమా?",
        hint: { en: "Say: Yes, but I eat only a little.", te: "ఇలా చెప్పండి: Yes, but I eat only a little." },
        replies: [
          { say: "Yes, but I eat only a little.", good: true, skill: "join" },
          { say: "Yes, and I eat only a little.", good: false, skill: "join" },
        ],
      },
      {
        partner: "Me too! Let's make laddus on Sunday.",
        te: "నాకు కూడా! ఆదివారం లడ్డూలు చేద్దాం.",
        hint: { en: "Say: Good idea! I'll bring sugar and ghee.", te: "ఇలా చెప్పండి: Good idea! I'll bring sugar and ghee." },
        replies: [
          { say: "Good idea! I'll bring sugar and ghee.", good: true, skill: "join" },
          { say: "Good idea! I'll bring sugar but ghee.", good: false, skill: "join" },
        ],
      },
    ],
  },
};
