import type { Lesson } from "../../types";

/** Week 2, Day 4 (CURRICULUM §3): how, how much, how old, how far. */
export const day: Lesson = {
  id: "how-questions",
  kind: "lesson",
  title: { en: "How Questions", te: "ఎలా, ఎంత" },
  subtitle: "how / how much / how old / how far",
  summary: {
    en: "Learn to ask how someone is, and the price, age and distance with how much, how old and how far.",
    te: "ఒకరు ఎలా ఉన్నారో, ధర, వయసు, దూరం ఎంతో how, how much, how old, how far తో అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "How, How Much, How Old, How Far in English for Telugu Speakers",
    description:
      "Ask How much is this? How old are you? How far is it? in English. Simple lessons for Telugu speakers on how questions, with Telugu explanations.",
  },
  pattern: [
    { text: "How much", role: "what" },
    { text: "is", role: "action" },
    { text: "this?", role: "who" },
  ],
  core: [
    { en: "How are you?", te: "మీరు ఎలా ఉన్నారు?", extra: ["is"] },
    { en: "How much is this?", te: "ఇది ఎంత?", extra: ["many"] },
    { en: "How old are you?", te: "మీ వయసు ఎంత?", extra: ["is"] },
    { en: "How far is the bus stand?", te: "బస్ స్టాండ్ ఎంత దూరం?", extra: ["much"] },
    { en: "How do you go to the temple?", te: "మీరు గుడికి ఎలా వెళ్తారు?", extra: ["are"] },
    { en: "I go by auto.", te: "నేను ఆటోలో వెళ్తాను.", extra: ["in"] },
    { en: "How much are these bananas?", te: "ఈ అరటిపళ్ళు ఎంత?", extra: ["is"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When you buy something today, ask the price in English: How much is this?",
    te: "ఈ రోజు ఏదైనా కొనేటప్పుడు ధర ఇంగ్లీష్‌లో అడగండి: How much is this?",
  },
  words: [
    { en: "how", te: "ఎలా" },
    { en: "how much", te: "ఎంత (ధర)" },
    { en: "far", te: "దూరం" },
    { en: "auto", te: "ఆటో" },
    { en: "banana", te: "అరటిపండు" },
  ],
  grammar: ["question-words", "am-is-are", "this-that"],
  topics: ["shopping", "money", "directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How, and how + one word", te: "how, how + ఒక పదం" },
      body: {
        en: "How alone asks how someone is, or the way you do something. Add one word to ask more: how much is the price, how old is the age, how far is the distance.",
        te: "how ఒక్కటే అంటే ఎలా: ఒకరు ఎలా ఉన్నారో, లేదా ఏదైనా ఎలా చేస్తారో. దాని తర్వాత ఒక పదం చేర్చితే: how much = ధర ఎంత, how old = వయసు ఎంత, how far = ఎంత దూరం.",
      },
      bridge: {
        te: ["ఇది", "ఎంత?"],
        en: [
          { text: "How much", role: "what" },
          { text: "is", role: "action" },
          { text: "this?", role: "who" },
        ],
      },
      examples: [
        { en: "How are you?", te: "మీరు ఎలా ఉన్నారు?" },
        { en: "How much is this?", te: "ఇది ఎంత?" },
        { en: "How far is the bus stand?", te: "బస్ స్టాండ్ ఎంత దూరం?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which how?", te: "ఏ how వాడాలి?" },
      items: [
        {
          form: "how",
          useFor: { en: "Use how for the way, or how someone is.", te: "ఎలా చేస్తారో, ఒకరు ఎలా ఉన్నారో అడగడానికి how." },
          example: { en: "How do you go to the temple?", te: "మీరు గుడికి ఎలా వెళ్తారు?" },
        },
        {
          form: "how much",
          useFor: { en: "Use how much for the price.", te: "ధర అడగడానికి how much." },
          example: { en: "How much is this?", te: "ఇది ఎంత?" },
        },
        {
          form: "how old",
          useFor: { en: "Use how old for age.", te: "వయసు అడగడానికి how old." },
          example: { en: "How old are you?", te: "మీ వయసు ఎంత?" },
        },
        {
          form: "how far",
          useFor: { en: "Use how far for distance.", te: "దూరం అడగడానికి how far." },
          example: { en: "How far is the bus stand?", te: "బస్ స్టాండ్ ఎంత దూరం?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "How much is these bananas?",
      right: "How much are these bananas?",
      why: {
        en: "For more than one thing, use these and are.",
        te: "ఒకటి కంటే ఎక్కువ వస్తువులకు these, are వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "How much far is the bus stand?",
      right: "How far is the bus stand?",
      why: {
        en: "For distance, say how far. Do not add much.",
        te: "దూరం అడగడానికి how far చాలు. much చేర్చకండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You want to know the price of a saree. What do you ask?", te: "ఒక చీర ధర తెలుసుకోవాలి. ఏమని అడుగుతారు?" },
      options: ["How much is this saree?", "How old is this saree?", "How far is this saree?"],
      answer: 0,
      why: {
        en: "For a price, ask how much.",
        te: "ధర కోసం how much అడగాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "How ___ is the temple?",
      te: "గుడి ఎంత దూరం?",
      options: ["much", "far", "old"],
      answer: 1,
      why: {
        en: "For distance, use how far.",
        te: "దూరం అడగడానికి how far.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which question asks a person's age?", te: "ఒకరి వయసు అడిగే ప్రశ్న ఏది?" },
      options: ["How are you?", "How old are you?", "How much are you?"],
      answer: 1,
      why: {
        en: "For age, ask how old.",
        te: "వయసు కోసం how old అడగాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "How much is these bananas?",
      wrongIndex: 2,
      fix: "How much are these bananas?",
      why: {
        en: "Bananas are more than one, so use are.",
        te: "అరటిపళ్ళు ఒకటి కంటే ఎక్కువ, కాబట్టి are వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: How are you? Answer in English.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: How are you? ఇంగ్లీష్‌లో జవాబు చెప్పండి.",
      },
      expected: ["I am fine, thank you.", "I am fine.", "Fine, thank you."],
      options: ["I fine, thank you.", "I am fine, thank you.", "I am fine, thanks you."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "At a fruit cart, ask the price of the bananas.",
        te: "పళ్ల బండి దగ్గర అరటిపళ్ళ ధర అడగండి.",
      },
      expected: ["How much are these bananas?", "How much are the bananas?"],
      options: ["How much is these bananas?", "How much are these bananas?", "How many are these bananas?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Buying fruit from a cart", te: "పళ్ల బండి దగ్గర కొనడం" },
    scene: {
      en: "Venkat sells fruit from a cart near your house. Ask the prices and buy some bananas.",
      te: "మీ ఇంటి దగ్గర వెంకట్ బండి మీద పళ్ళు అమ్ముతున్నారు. ధరలు అడిగి, అరటిపళ్ళు కొనండి.",
    },
    partner: { en: "Venkat (a fruit seller)", te: "వెంకట్ (పళ్ళు అమ్మేవారు)" },
    skills: [
      { id: "how", label: { en: "how much", te: "how much వాడకం" } },
      { id: "polite", label: { en: "Polite words", te: "మర్యాద పదాలు" } },
    ],
    turns: [
      {
        partner: "Good morning! Fresh fruit today.",
        te: "గుడ్ మార్నింగ్! ఈ రోజు తాజా పళ్ళు.",
        hint: { en: "Ask the price of the bananas.", te: "అరటిపళ్ళ ధర అడగండి." },
        replies: [
          { say: "How much are these bananas?", good: true, skill: "how" },
          { say: "How much is these bananas?", good: false, skill: "how" },
          { say: "How many are these bananas?", good: false, skill: "how" },
        ],
      },
      {
        partner: "Sixty rupees a dozen.",
        te: "డజను అరవై రూపాయలు.",
        hint: { en: "Ask about the mangoes: How much are the mangoes?", te: "మామిడిపళ్ళ గురించి అడగండి: How much are the mangoes?" },
        replies: [
          { say: "How much are the mangoes?", good: true, skill: "how" },
          { say: "How much mangoes?", good: false, skill: "how" },
        ],
      },
      {
        partner: "One hundred rupees a kilo.",
        te: "కిలో వంద రూపాయలు.",
        hint: { en: "Ask for bananas: One dozen bananas, please.", te: "అరటిపళ్ళు అడగండి: One dozen bananas, please." },
        replies: [
          { say: "One dozen bananas, please.", good: true, skill: "polite" },
          { say: "Give one dozen banana.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Here you are. Anything else?",
        te: "ఇదిగోండి. ఇంకా ఏమైనా కావాలా?",
        hint: { en: "Say no, politely: No, thank you.", te: "మర్యాదగా వద్దని చెప్పండి: No, thank you." },
        replies: [
          { say: "No, thank you.", good: true, skill: "polite" },
          { say: "No, thanks you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
