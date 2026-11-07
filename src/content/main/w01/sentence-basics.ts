import type { Lesson } from "../../types";

/** Week 1, Day 1 (CURRICULUM §3): Who + Action + What. Only I / we / they here; he / she come on Day 3. */
export const day: Lesson = {
  id: "sentence-basics",
  kind: "lesson",
  title: { en: "Who Does What", te: "వాక్య నిర్మాణం" },
  subtitle: "Sentence basics",
  summary: {
    en: "See how an English sentence is built: first who, then the action, then what.",
    te: "ఇంగ్లీష్ వాక్యం ఎలా ఉంటుందో చూద్దాం: ముందు ఎవరు, తర్వాత ఏం చేస్తారు, తర్వాత ఏమిటి.",
  },
  seo: {
    title: "English Sentence Basics for Telugu Speakers: Who Does What",
    description:
      "Learn how an English sentence is built, from a Telugu speaker's point of view: who, then the action, then what. Simple examples with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "eat", role: "action" },
    { text: "rice", role: "what" },
  ],
  core: [
    { en: "I eat rice.", te: "నేను అన్నం తింటాను.", extra: ["am"] },
    { en: "I drink tea.", te: "నేను టీ తాగుతాను.", extra: ["am"] },
    { en: "We speak Telugu.", te: "మనం తెలుగు మాట్లాడతాం.", extra: ["are"] },
    { en: "They play cricket.", te: "వాళ్లు క్రికెట్ ఆడతారు.", extra: ["are"] },
    { en: "I read the newspaper.", te: "నేను పేపర్ చదువుతాను.", extra: ["am"] },
    { en: "We watch the news.", te: "మేము వార్తలు చూస్తాం.", extra: ["are"] },
    { en: "They sell vegetables.", te: "వాళ్లు కూరగాయలు అమ్ముతారు.", extra: ["are"] },
  ],
  key: [0, 2, 3, 4],
  tryToday: {
    en: "Say three things you do, in English. For example: I eat idli. I drink tea. I read the newspaper.",
    te: "మీరు చేసే మూడు పనులను ఇంగ్లీష్‌లో చెప్పండి. ఉదాహరణ: I eat idli. I drink tea. I read the newspaper.",
  },
  words: [
    { en: "rice", te: "అన్నం" },
    { en: "tea", te: "టీ" },
    { en: "newspaper", te: "పేపర్" },
    { en: "vegetables", te: "కూరగాయలు" },
    { en: "speak", te: "మాట్లాడటం" },
  ],
  grammar: ["word-order"],
  topics: ["food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Who + Action + What", te: "ఎవరు + ఏం చేస్తారు + ఏమిటి" },
      body: {
        en: "In Telugu, the action word (verb) comes last. In English, the action comes second. First say who, then the action, then what.",
        te: "తెలుగులో verb చివర వస్తుంది: నేను అన్నం తింటాను. ఇంగ్లీష్‌లో verb రెండో స్థానంలో వస్తుంది: I eat rice. ముందు ఎవరు, తర్వాత ఏం చేస్తారు, చివర ఏమిటి — ఇదే వరుస.",
      },
      bridge: {
        te: ["నేను", "అన్నం", "తింటాను"],
        en: [
          { text: "I", role: "who" },
          { text: "eat", role: "action" },
          { text: "rice", role: "what" },
        ],
      },
      examples: [
        { en: "I eat rice.", te: "నేను అన్నం తింటాను." },
        { en: "I drink tea.", te: "నేను టీ తాగుతాను." },
        { en: "I read the newspaper.", te: "నేను పేపర్ చదువుతాను." },
      ],
    },
    {
      id: "l2",
      type: "explain",
      heading: { en: "I, we, they: the action stays the same", te: "I, we, they: verb మారదు" },
      body: {
        en: "With I, we and they, the action word does not change. I eat. We eat. They eat. (He and she come on Day 3.)",
        te: "I, we, they తో verb మారదు: I eat, we eat, they eat. (He, she గురించి 3వ రోజు నేర్చుకుంటాం.)",
      },
      examples: [
        { en: "We speak Telugu.", te: "మనం తెలుగు మాట్లాడతాం." },
        { en: "They play cricket.", te: "వాళ్లు క్రికెట్ ఆడతారు." },
        { en: "We watch the news.", te: "మేము వార్తలు చూస్తాం." },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I rice eat.",
      right: "I eat rice.",
      why: {
        en: "Do not use the Telugu order. In English the action must come second.",
        te: "తెలుగు వరుసను ఇంగ్లీష్‌లో వాడకండి. ఇంగ్లీష్‌లో verb రెండో స్థానంలో రావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am eat rice.",
      right: "I eat rice.",
      why: {
        en: "Do not add am. For something you do, just say I eat.",
        te: "ఇక్కడ am వద్దు. మీరు చేసే పనికి I eat అంటే చాలు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I rice eat.", "I eat rice.", "Eat I rice."],
      answer: 1,
      why: {
        en: "Who first (I), then the action (eat), then what (rice).",
        te: "ముందు ఎవరు (I), తర్వాత ఏం చేస్తారు (eat), తర్వాత ఏమిటి (rice).",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We ___ Telugu.",
      te: "మనం తెలుగు మాట్లాడతాం.",
      options: ["speak", "speaks", "speaking"],
      answer: 0,
      why: {
        en: "With we, the action stays the same: we speak.",
        te: "we తో verb మారదు: we speak.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: వాళ్లు క్రికెట్ ఆడతారు?", te: "వాళ్లు క్రికెట్ ఆడతారు — ఇంగ్లీష్‌లో ఏది సరైనది?" },
      options: ["Cricket they play.", "They play cricket.", "They cricket play."],
      answer: 1,
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "We are speak Telugu.",
      wrongIndex: 1,
      fix: "We speak Telugu.",
      why: {
        en: "Take out are. We speak Telugu.",
        te: "are తీసేయండి. We speak Telugu అంటే సరిపోతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: What do you drink in the morning? Answer in English.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: ఉదయం మీరు ఏం తాగుతారు? ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["I drink tea.", "I drink coffee.", "I drink milk."],
      options: ["I tea drink.", "I drink tea.", "I am drink tea."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A neighbour asks: Which language do you speak at home? Answer in English.",
        te: "పక్కింటి వాళ్లు అడుగుతున్నారు: ఇంట్లో మీరు ఏ భాష మాట్లాడతారు? ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["We speak Telugu.", "I speak Telugu."],
      options: ["We Telugu speak.", "Telugu we are speak.", "We speak Telugu."],
      answer: 2,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "What do you drink?", te: "మీరు ఏం తాగుతారు?" },
    scene: {
      en: "Padma, a friend, asks about your morning. Answer with short sentences.",
      te: "మీ స్నేహితురాలు పద్మ మీ ఉదయం గురించి అడుగుతోంది. చిన్న వాక్యాలతో జవాబు చెప్పండి.",
    },
    partner: { en: "Padma (a friend)", te: "పద్మ (స్నేహితురాలు)" },
    skills: [{ id: "order", label: { en: "Word order", te: "పదాల వరుస" } }],
    turns: [
      {
        partner: "What do you drink in the morning?",
        te: "ఉదయం మీరు ఏం తాగుతారు?",
        hint: { en: "Say who, then the action, then what: I drink …", te: "ముందు ఎవరు, తర్వాత ఏం చేస్తారు, తర్వాత ఏమిటి: I drink …" },
        replies: [
          { say: "I drink tea.", good: true, skill: "order" },
          { say: "I tea drink.", good: false, skill: "order" },
          { say: "I am drink tea.", good: false },
        ],
      },
      {
        partner: "And what do you eat?",
        te: "మరి మీరు ఏం తింటారు?",
        hint: { en: "Start with I, then eat, then the food.", te: "ముందు I, తర్వాత eat, తర్వాత తినేది." },
        replies: [
          { say: "I eat idli.", good: true, skill: "order" },
          { say: "I eat rice.", good: true, skill: "order" },
          { say: "I idli eat.", good: false, skill: "order" },
        ],
      },
      {
        partner: "What do you read?",
        te: "మీరు ఏం చదువుతారు?",
        hint: { en: "Start with I read, then say what.", te: "ముందు I read, తర్వాత ఏం చదువుతారో చెప్పండి." },
        replies: [
          { say: "I read the newspaper.", good: true, skill: "order" },
          { say: "I newspaper read.", good: false, skill: "order" },
        ],
      },
    ],
  },
};
