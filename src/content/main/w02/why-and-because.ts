import type { Lesson } from "../../types";

/** Week 2, Day 5 (CURRICULUM §3): why … ? because … */
export const day: Lesson = {
  id: "why-and-because",
  kind: "lesson",
  title: { en: "Why & Because", te: "ఎందుకు, ఎందుకంటే" },
  subtitle: "why / because",
  summary: {
    en: "Learn to ask the reason with why, and to give it with because.",
    te: "why తో కారణం అడగడం, because తో కారణం చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Why and Because in English for Telugu Speakers",
    description:
      "Ask Why are you late? and answer Because the bus was late. Simple lessons for Telugu speakers on why and because, with Telugu explanations.",
  },
  pattern: [
    { text: "Why", role: "what" },
    { text: "are", role: "action" },
    { text: "you", role: "who" },
    { text: "late?", role: "what" },
  ],
  core: [
    { en: "Why are you late?", te: "మీరు ఎందుకు ఆలస్యంగా వచ్చారు?", extra: ["do"] },
    { en: "Because the bus was late.", te: "ఎందుకంటే బస్ ఆలస్యంగా వచ్చింది.", extra: ["is"] },
    { en: "Why do you walk every day?", te: "మీరు రోజూ ఎందుకు నడుస్తారు?", extra: ["are"] },
    { en: "Because it is good for health.", te: "ఎందుకంటే అది ఆరోగ్యానికి మంచిది.", extra: ["are"] },
    { en: "Why didn't you come?", te: "మీరు ఎందుకు రాలేదు?", extra: ["came"] },
    { en: "I was not well.", te: "నాకు ఒంట్లో బాగాలేదు.", extra: ["did"] },
    { en: "Why is the shop closed?", te: "షాప్ ఎందుకు మూసి ఉంది?", extra: ["does"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Ask someone one why question today, and answer one with because.",
    te: "ఈ రోజు ఎవరినైనా why తో ఒక ప్రశ్న అడగండి, because తో ఒక జవాబు చెప్పండి.",
  },
  words: [
    { en: "why", te: "ఎందుకు" },
    { en: "because", te: "ఎందుకంటే" },
    { en: "health", te: "ఆరోగ్యం" },
    { en: "closed", te: "మూసి ఉంది" },
    { en: "meeting", te: "మీటింగ్, సమావేశం" },
  ],
  grammar: ["question-words", "connectors", "present-simple", "past-simple"],
  topics: ["people", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Why asks, because answers", te: "why అడుగుతుంది, because జవాబిస్తుంది" },
      body: {
        en: "Ask the reason with why, at the start of the question. Give the reason with because. It works just like ఎందుకు and ఎందుకంటే.",
        te: "కారణం అడగాలంటే why ని ప్రశ్న మొదట్లో పెట్టండి. కారణం చెప్పాలంటే because అనండి. ఇది సరిగ్గా 'ఎందుకు', 'ఎందుకంటే' లాంటిదే.",
      },
      bridge: {
        te: ["మీరు", "ఎందుకు", "ఆలస్యంగా వచ్చారు?"],
        en: [
          { text: "Why", role: "what" },
          { text: "are", role: "action" },
          { text: "you", role: "who" },
          { text: "late?", role: "what" },
        ],
      },
      examples: [
        { en: "Why are you late?", te: "మీరు ఎందుకు ఆలస్యంగా వచ్చారు?" },
        { en: "Because the bus was late.", te: "ఎందుకంటే బస్ ఆలస్యంగా వచ్చింది." },
        { en: "Why didn't you come?", te: "మీరు ఎందుకు రాలేదు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Why with am, do and didn't", te: "why తో am, do, didn't" },
      items: [
        {
          form: "why + am / is / are",
          useFor: { en: "Use with is or are, for how something is now.", te: "ఏదైనా ఇప్పుడు ఎలా ఉందో అడగడానికి, is లేదా are తో." },
          example: { en: "Why is the shop closed?", te: "షాప్ ఎందుకు మూసి ఉంది?" },
        },
        {
          form: "why + do / does",
          useFor: { en: "Use with something done every day.", te: "రోజూ చేసే పని గురించి అడగడానికి." },
          example: { en: "Why do you walk every day?", te: "మీరు రోజూ ఎందుకు నడుస్తారు?" },
        },
        {
          form: "why + didn't",
          useFor: { en: "Use when something did not happen.", te: "ఏదైనా జరగనప్పుడు అడగడానికి." },
          example: { en: "Why didn't you come?", te: "మీరు ఎందుకు రాలేదు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Why you are late?",
      right: "Why are you late?",
      why: {
        en: "In a question, are comes before you: Why are you late?",
        te: "ప్రశ్నలో are ముందు, you తర్వాత వస్తాయి: Why are you late?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Why you didn't come?",
      right: "Why didn't you come?",
      why: {
        en: "In a question, didn't comes before you: Why didn't you come?",
        te: "ప్రశ్నలో didn't ముందు, you తర్వాత వస్తాయి: Why didn't you come?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["Why you are late?", "Why are you late?", "Why is you late?"],
      answer: 1,
      why: {
        en: "Why, then are, then you: Why are you late?",
        te: "ముందు why, తర్వాత are, తర్వాత you: Why are you late?",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I am tired ___ I walked a lot.",
      te: "నేను చాలా నడిచాను, అందుకే అలసిపోయాను.",
      options: ["why", "because", "what"],
      answer: 1,
      why: {
        en: "Use because to give a reason, like ఎందుకంటే in Telugu.",
        te: "కారణం చెప్పడానికి because వాడాలి, తెలుగులో ఎందుకంటే లాగా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A friend asks: Why didn't you come? Choose the best answer.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Why didn't you come? సరైన జవాబు ఏది?",
      },
      options: ["Because I was not well.", "Because I am not well yesterday.", "Why I was not well."],
      answer: 0,
      why: {
        en: "Give the reason with because, in the past: I was not well.",
        te: "because తో కారణం చెప్పాలి. నిన్నటి సంగతి కాబట్టి was: I was not well.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Why you didn't come?",
      wrongIndex: 1,
      fix: "Why didn't you come?",
      why: {
        en: "In a question, didn't comes before you: Why didn't you come?",
        te: "ప్రశ్నలో didn't, you కంటే ముందు వస్తుంది: Why didn't you come?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: Why are you late? The bus was late. Answer.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Why are you late? బస్ ఆలస్యంగా వచ్చింది. జవాబు చెప్పండి.",
      },
      expected: ["Because the bus was late.", "The bus was late."],
      options: ["Because the bus late.", "Because the bus was late.", "Why the bus was late."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The shop is closed today. Ask the watchman why.",
        te: "ఈ రోజు షాప్ మూసి ఉంది. వాచ్‌మన్‌ని ఎందుకని అడగండి.",
      },
      expected: ["Why is the shop closed?", "Why is the shop closed today?"],
      options: ["Why the shop is closed?", "Why is the shop closed?", "Why does the shop closed?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Why didn't you come?", te: "ఎందుకు రాలేదు?" },
    scene: {
      en: "You missed yesterday's meeting at the temple. Your friend Anitha asks why.",
      te: "నిన్న గుడిలో జరిగిన మీటింగ్‌కి మీరు వెళ్లలేదు. మీ స్నేహితురాలు అనిత ఎందుకని అడుగుతున్నారు.",
    },
    partner: { en: "Anitha (a friend)", te: "అనిత (స్నేహితురాలు)" },
    skills: [
      { id: "because", label: { en: "because", te: "because తో కారణం" } },
      { id: "why", label: { en: "why", te: "why తో ప్రశ్న" } },
    ],
    turns: [
      {
        partner: "Hi! Why didn't you come yesterday?",
        te: "హాయ్! నిన్న ఎందుకు రాలేదు?",
        hint: { en: "Give the reason: you were not well.", te: "కారణం చెప్పండి: ఒంట్లో బాగాలేదు." },
        replies: [
          { say: "Because I was not well.", good: true, skill: "because" },
          { say: "Because I am not well yesterday.", good: false, skill: "because" },
          {
            say: "Why should I tell you?",
            good: false,
            react: { en: "Oh, sorry! I was only worried.", te: "అయ్యో, sorry! మీ గురించి కంగారుపడ్డాను, అంతే." },
          },
        ],
      },
      {
        partner: "Oh! Are you fine now?",
        te: "అయ్యో! ఇప్పుడు బాగున్నారా?",
        hint: { en: "Say yes, you are fine now.", te: "అవును, ఇప్పుడు బాగున్నానని చెప్పండి." },
        replies: [
          { say: "Yes, I am fine now.", good: true },
          { say: "Yes, I fine now.", good: false },
        ],
      },
      {
        partner: "The meeting was very long.",
        te: "మీటింగ్ చాలా సేపు జరిగింది.",
        hint: { en: "Ask her the reason.", te: "ఎందుకని అడగండి." },
        replies: [
          { say: "Why was it long?", good: true, skill: "why" },
          { say: "Why it was long?", good: false, skill: "why" },
        ],
      },
      {
        partner: "Because many people asked questions.",
        te: "ఎందుకంటే చాలామంది ప్రశ్నలు అడిగారు.",
        hint: { en: "Say you understand, and thank her.", te: "అర్థమైందని చెప్పి, thank you చెప్పండి." },
        replies: [
          { say: "Oh, I see. Thank you.", good: true },
          { say: "Oh, I seeing. Thank you.", good: false },
        ],
      },
    ],
  },
};
