import type { Lesson } from "../../types";

/** Week 10, Day 3 (CURRICULUM §3): will for offers and promises; won't. */
export const day: Lesson = {
  id: "ill-help-you",
  kind: "lesson",
  title: { en: "I'll Help You", te: "సహాయం, మాట" },
  subtitle: "offers and promises",
  summary: {
    en: "Learn to offer help and make promises with I'll and I won't.",
    te: "I'll, I won't తో సహాయం చేస్తానని చెప్పడం, మాట ఇవ్వడం నేర్చుకుందాం.",
  },
  seo: {
    title: "I'll Help You: Offers and Promises in English for Telugu Speakers",
    description:
      "Say I'll carry that, I will call you tonight and I won't be late in English. Simple lessons for Telugu speakers on offers and promises.",
  },
  pattern: [
    { text: "I'll", role: "who" },
    { text: "carry", role: "action" },
    { text: "that", role: "what" },
  ],
  core: [
    { en: "I'll carry that.", te: "నేను అది మోస్తాను.", extra: ["carrying"] },
    { en: "I will call you tonight.", te: "నేను ఈ రాత్రి మీకు ఫోన్ చేస్తాను.", extra: ["calling"] },
    { en: "Don't worry. I'll help you.", te: "కంగారు పడకండి. నేను సహాయం చేస్తాను.", extra: ["to"] },
    { en: "I promise I won't be late.", te: "ఆలస్యం చేయనని మాటిస్తున్నాను.", extra: ["will"] },
    { en: "I'll open the door for you.", te: "మీ కోసం నేను తలుపు తెరుస్తాను.", extra: ["opening"] },
    { en: "I'll bring it tomorrow.", te: "నేను రేపు తీసుకొస్తాను.", extra: ["bringing"] },
    { en: "Thank you. That's very kind.", te: "థాంక్యూ. మీరు చాలా మంచివారు.", extra: ["kindly"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Offer help to someone today with I'll …",
    te: "ఈ రోజు ఎవరికైనా I'll … తో సహాయం చేస్తానని చెప్పండి.",
  },
  words: [
    { en: "carry", te: "మోయడం" },
    { en: "tonight", te: "ఈ రాత్రి" },
    { en: "worry", te: "కంగారు, దిగులు" },
    { en: "promise", te: "మాట ఇవ్వడం" },
    { en: "bring", te: "తీసుకురావడం" },
  ],
  grammar: ["will", "politeness-softening"],
  topics: ["neighbours", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Offers and promises", te: "సహాయం, మాట" },
      body: {
        en: "To offer help or make a promise, say I'll (I will), then the action: I'll carry that. To promise not to do something, say I won't (will not): I won't be late.",
        te: "సహాయం చేస్తానని చెప్పడానికి, మాట ఇవ్వడానికి I'll (I will), తర్వాత verb: I'll carry that. ఏదైనా చేయనని మాట ఇవ్వడానికి I won't (will not): I won't be late.",
      },
      bridge: {
        te: ["నేను", "అది", "మోస్తాను"],
        en: [
          { text: "I'll", role: "who" },
          { text: "carry", role: "action" },
          { text: "that", role: "what" },
        ],
      },
      examples: [
        { en: "I'll carry that.", te: "నేను అది మోస్తాను." },
        { en: "I will call you tonight.", te: "నేను ఈ రాత్రి మీకు ఫోన్ చేస్తాను." },
        { en: "I promise I won't be late.", te: "ఆలస్యం చేయనని మాటిస్తున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Offering and promising", te: "సహాయం చెప్పడం, మాట ఇవ్వడం" },
      items: [
        {
          form: "I'll + action (offer)",
          useFor: { en: "To offer help.", te: "సహాయం చేస్తానని చెప్పడానికి." },
          example: { en: "I'll open the door for you.", te: "మీ కోసం నేను తలుపు తెరుస్తాను." },
        },
        {
          form: "I will + action (promise)",
          useFor: { en: "To promise something.", te: "మాట ఇవ్వడానికి." },
          example: { en: "I'll bring it tomorrow.", te: "నేను రేపు తీసుకొస్తాను." },
        },
        {
          form: "I won't + action",
          useFor: { en: "To promise not to do something.", te: "ఏదైనా చేయనని మాట ఇవ్వడానికి." },
          example: { en: "I promise I won't be late.", te: "ఆలస్యం చేయనని మాటిస్తున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I'll carrying that.",
      right: "I'll carry that.",
      why: {
        en: "After will, the verb stays plain, with no -ing: I'll carry that.",
        te: "will తర్వాత verb మామూలుగానే ఉంటుంది, -ing రాదు: I'll carry that.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "I will not late.",
      right: "I won't be late.",
      why: {
        en: "Late is not a verb, so it needs be: I won't be late.",
        te: "తెలుగులో ఆలస్యం చేయను అంటాం, కానీ late verb కాదు, ముందు be కావాలి: I won't be late.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I carry that.", "I'll carry that.", "I'll to carry that."],
      answer: 1,
      why: {
        en: "An offer is I'll plus the plain verb, with no to.",
        te: "సహాయం చేస్తానంటే I'll, తర్వాత నేరుగా verb, to రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I promise I ___ be late.",
      te: "ఆలస్యం చేయనని మాటిస్తున్నాను.",
      options: ["won't", "don't", "not"],
      answer: 0,
      why: {
        en: "To promise not to do something, say won't.",
        te: "ఏదైనా చేయనని మాట ఇవ్వడానికి won't.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Your neighbour has heavy bags. Offer help.", te: "పొరుగువారి దగ్గర బరువైన సంచులు ఉన్నాయి. సహాయం చేస్తానని చెప్పండి." },
      options: ["I'll help you.", "I'll help to you.", "I'm help you."],
      answer: 0,
      why: {
        en: "Offer help with I'll and the plain verb.",
        te: "తెలుగులో మీకు అన్నా English లో to రాదు; I'll తో చెప్పండి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'll brings it tomorrow.",
      wrongIndex: 1,
      fix: "I'll bring it tomorrow.",
      why: {
        en: "After will, the verb never takes s.",
        te: "will తర్వాత verb కి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend left her umbrella at your house. Promise to bring it tomorrow.",
        te: "మీ స్నేహితురాలు గొడుగు మీ ఇంట్లో మర్చిపోయారు. రేపు తెస్తానని మాట ఇవ్వండి.",
      },
      expected: ["I'll bring it tomorrow.", "I will bring it tomorrow."],
      options: ["I'll bring it tomorrow.", "I bring it tomorrow.", "I'll bring tomorrow."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Promise your friend you will call tonight.",
        te: "ఈ రాత్రి ఫోన్ చేస్తానని మీ స్నేహితులకు మాట ఇవ్వండి.",
      },
      expected: ["I will call you tonight.", "I'll call you tonight."],
      options: ["I will call you tonight.", "I call you tonight.", "I will call you today night."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Heavy bags", te: "బరువైన సంచులు" },
    scene: {
      en: "Your neighbour Joseph is coming home with heavy bags. Offer to help.",
      te: "పొరుగింటి జోసెఫ్ గారు బరువైన సంచులతో ఇంటికి వస్తున్నారు. సహాయం చేస్తానని చెప్పండి.",
    },
    partner: { en: "Joseph (a neighbour)", te: "జోసెఫ్ (పొరుగింటాయన)" },
    voice: "b",
    skills: [{ id: "will", label: { en: "I'll / I won't", te: "I'll / I won't వాడకం" } }],
    turns: [
      {
        partner: "Oh, these bags are so heavy!",
        te: "అయ్యో, ఈ సంచులు చాలా బరువుగా ఉన్నాయి!",
        hint: { en: "Tell him not to worry, and offer to carry them.", te: "కంగారు పడొద్దని చెప్పి, మీరు మోస్తానని చెప్పండి." },
        replies: [
          { say: "Don't worry. I'll carry them.", good: true, skill: "will" },
          { say: "Don't worry. I carry them.", good: false, skill: "will" },
          {
            say: "Why did you buy so much?",
            good: false,
            react: { en: "Ha! It's all for the festival.", te: "హహ! అంతా పండుగ కోసమే అండీ." },
          },
        ],
      },
      {
        partner: "Thank you! That's very kind.",
        te: "థాంక్యూ! మీరు చాలా మంచివారు.",
        hint: { en: "Say it's nothing, and offer to open the gate.", te: "పర్వాలేదు అని, గేట్ తెరుస్తానని చెప్పండి." },
        replies: [
          { say: "No problem. I'll open the gate.", good: true, skill: "will" },
          { say: "No problem. I'll gate open.", good: false, skill: "will" },
        ],
      },
      {
        partner: "Can you help me tomorrow too?",
        te: "రేపు కూడా సహాయం చేస్తారా?",
        hint: { en: "Say yes, and promise a time.", te: "సరే అని, ఏ టైమ్‌కి వస్తారో మాట ఇవ్వండి." },
        replies: [
          { say: "Yes, I will come at ten.", good: true, skill: "will" },
          { say: "Yes, I'll come ten o'clock.", good: false, skill: "will", fixIt: "preposition" },
        ],
      },
      {
        partner: "Please don't be late!",
        te: "ఆలస్యం చేయకండి!",
        hint: { en: "Promise you will be on time.", te: "టైమ్‌కి వస్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "I won't be late.", good: true, skill: "will" },
          { say: "I won't late.", good: false, skill: "will", fixIt: "be" },
        ],
      },
    ],
  },
};
