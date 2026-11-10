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
    { en: "She is old but very active.", te: "ఆవిడకి వయసైంది, కానీ చాలా చురుకుగా ఉంటారు.", extra: ["and"] },
    { en: "We visited the temple and the park.", te: "మేము గుడికి, పార్క్‌కి వెళ్ళాం.", extra: ["but"] },
    { en: "The food was good but expensive.", te: "భోజనం బాగుంది, కానీ ధర ఎక్కువ.", extra: ["and"] },
    { en: "I called him, but he was busy.", te: "నేను ఆయనకి ఫోన్ చేశాను, కానీ ఆయన బిజీగా ఉన్నారు.", extra: ["and"] },
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
        { en: "I called him, but he was busy.", te: "నేను ఆయనకి ఫోన్ చేశాను, కానీ ఆయన బిజీగా ఉన్నారు." },
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
          example: { en: "The food was good but expensive.", te: "భోజనం బాగుంది, కానీ ధర ఎక్కువ." },
        },
        {
          form: ", but + a sentence",
          useFor: { en: "Join two sentences: comma, then but.", te: "రెండు వాక్యాలు కలపడం: కామా, తర్వాత but." },
          example: { en: "I called him, but he was busy.", te: "నేను ఆయనకి ఫోన్ చేశాను, కానీ ఆయన బిజీగా ఉన్నారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "The food was good and expensive.",
      right: "The food was good but expensive.",
      why: {
        en: "Good is a plus and expensive is a minus, so use but: The food was good but expensive.",
        te: "good మంచి విషయం, expensive కాదు; తేడా ఉంది కాబట్టి but: The food was good but expensive.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I like tea but coffee.",
      right: "I like tea and coffee.",
      why: {
        en: "But needs a difference; you like both, so use and: I like tea and coffee.",
        te: "but కి తేడా ఉండాలి; రెండూ ఇష్టమే కాబట్టి and: I like tea and coffee.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You like tea. You also like coffee. Which sentence?", te: "మీకు టీ ఇష్టం. కాఫీ కూడా ఇష్టం. ఏ వాక్యం?" },
      options: ["I like tea and coffee.", "I like tea but coffee.", "I like tea also coffee."],
      answer: 0,
      why: {
        en: "You like both, so join them with and: I like tea and coffee.",
        te: "రెండూ ఇష్టమే, అందుకే and తో కలపాలి: I like tea and coffee.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I called him, ___ he was busy.",
      te: "నేను ఆయనకి ఫోన్ చేశాను, కానీ ఆయన బిజీగా ఉన్నారు.",
      options: ["but", "or", "so"],
      answer: 0,
      why: {
        en: "He didn't answer, which you didn't expect, so use but: I called him, but he was busy.",
        te: "అనుకున్నది జరగలేదు, అందుకే but: I called him, but he was busy.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence shows a difference?", te: "తేడా చూపించే వాక్యం ఏది?" },
      options: ["She is kind and helpful.", "She is old but very active.", "She is tall and thin."],
      answer: 1,
      why: {
        en: "Old and very active don't usually go together, so but: She is old but very active.",
        te: "వయసైనా చాలా చురుకుగా ఉన్నారు, ఇది తేడా, అందుకే but: She is old but very active.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The food was good and expensive.",
      wrongIndex: 4,
      fix: "The food was good but expensive.",
      why: {
        en: "Good is a plus, expensive a minus, so join them with but: The food was good but expensive.",
        te: "good మంచిది, expensive కాదు, అందుకే but: The food was good but expensive.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
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
        te: "మీకు టీ ఇష్టం, కానీ కాఫీ ఇష్టం లేదని చెప్పండి.",
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
      en: "Your friend David asks about the drinks and sweets you like.",
      te: "మీకు ఇష్టమైన పానీయాలు, స్వీట్ల గురించి మీ స్నేహితుడు డేవిడ్ అడుగుతున్నారు.",
    },
    partner: { en: "David (a friend)", te: "డేవిడ్ (స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "join", label: { en: "and / but", te: "and / but వాడకం" } }],
    turns: [
      {
        partner: "What do you like to drink?",
        te: "మీకు ఏం తాగడం ఇష్టం?",
        hint: { en: "Name two drinks you like.", te: "మీకు ఇష్టమైన రెండు డ్రింక్స్ చెప్పండి." },
        replies: [
          { say: "I like tea and buttermilk.", good: true, skill: "join" },
          { say: "I like tea but buttermilk.", good: false, skill: "join" },
        ],
      },
      {
        partner: "Do you like coffee?",
        te: "మీకు కాఫీ ఇష్టమా?",
        hint: { en: "Say yes, but only at one time of day.", te: "ఇష్టమే, కానీ ఒక్క పూట మాత్రమే అని చెప్పండి." },
        replies: [
          { say: "Yes, but only in the morning.", good: true, skill: "join" },
          { say: "Yes, and only in the morning.", good: false, skill: "join" },
        ],
      },
      {
        partner: "Do you like sweets?",
        te: "మీకు స్వీట్లు ఇష్టమా?",
        hint: { en: "Say yes, but you don't eat much.", te: "ఇష్టమే, కానీ కొంచెమే తింటారని చెప్పండి." },
        replies: [
          { say: "Yes, but I eat only a little.", good: true, skill: "join" },
          { say: "Yes, and I eat only a little.", good: false, skill: "join" },
          {
            say: "Sweets? At your age?",
            good: false,
            skill: "join",
            react: { en: "Ha! Age is just a number.", te: "హా! వయసు ఒక నంబర్ మాత్రమే." },
          },
        ],
      },
      {
        partner: "Me too! Let's make laddus on Sunday.",
        te: "నాకు కూడా! ఆదివారం లడ్డూలు చేద్దాం.",
        hint: { en: "Agree, and offer to bring two things.", te: "సరే అని, రెండు సామాన్లు తెస్తానని చెప్పండి." },
        replies: [
          { say: "Good idea! I'll bring sugar and ghee.", good: true, skill: "join" },
          { say: "Good idea! I'll bring sugar but ghee.", good: false, skill: "join" },
        ],
      },
    ],
  },
};
