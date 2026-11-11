import type { Lesson } from "../../types";

/** Week 24, Day 2 (CURRICULUM §4): past continuous + when — a long action and the short thing that stopped it. */
export const day: Lesson = {
  id: "when-the-phone-rang",
  kind: "lesson",
  title: { en: "When the Phone Rang", te: "ఫోన్ మోగినప్పుడు" },
  subtitle: "was …ing + when",
  summary: {
    en: "Learn to say what you were doing when something stopped it: I was sleeping when the phone rang.",
    te: "ఒక పని మధ్యలో ఉండగా ఏదో జరిగితే ఎలా చెప్పాలో నేర్చుకుందాం: I was sleeping when the phone rang.",
  },
  seo: {
    title: "When the Phone Rang: Was + -ing with When in English for Telugu Speakers",
    description:
      "Say I was sleeping when the phone rang and We were eating when the power went off. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was sleeping", role: "action" },
    { text: "when the phone rang", role: "when" },
  ],
  core: [
    { en: "I was sleeping when the phone rang.", te: "నేను నిద్రపోతుంటే ఫోన్ మోగింది.", extra: ["ringing"] },
    { en: "We were eating when the power went off.", te: "మేము భోజనం చేస్తుంటే కరెంట్ పోయింది.", extra: ["was"] },
    { en: "There was a power cut last night.", te: "నిన్న రాత్రి కరెంట్ పోయింది.", extra: ["yesterday"] },
    { en: "Suddenly, the lights went off.", te: "ఒక్కసారిగా లైట్లు ఆరిపోయాయి.", extra: ["gone"] },
    { en: "He was cooking when the gas finished.", te: "ఆయన వంట చేస్తుంటే గ్యాస్ అయిపోయింది.", extra: ["finishing"] },
    { en: "I was looking for a candle.", te: "నేను కొవ్వొత్తి కోసం వెతుకుతూ ఉన్నాను.", extra: ["look"] },
    { en: "Luckily, I had a torch near my bed.", te: "అదృష్టం కొద్దీ, నా మంచం పక్కన ఒక టార్చ్ ఉంది.", extra: ["have"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of the last time the power went off. Say what you were doing.",
    te: "చివరిసారి కరెంట్ పోయినప్పుడు గుర్తు చేసుకోండి. అప్పుడు మీరు ఏం చేస్తూ ఉన్నారో పైకి చెప్పండి.",
  },
  words: [
    { en: "power cut", te: "కరెంట్ పోవడం" },
    { en: "suddenly", te: "ఒక్కసారిగా, హఠాత్తుగా" },
    { en: "went off", te: "ఆగిపోయింది, పోయింది (కరెంట్, లైట్)" },
    { en: "candle", te: "కొవ్వొత్తి" },
    { en: "torch", te: "టార్చ్ లైట్" },
  ],
  grammar: ["past-continuous", "past-simple"],
  topics: ["home", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A long action, then a short one", te: "పొడవైన పని, మధ్యలో చిన్న సంఘటన" },
      body: {
        en: "The long action takes was or were and -ing: I was sleeping. The short thing that stopped it takes the past: the phone rang. Join the two with when.",
        te: "జరుగుతూ ఉన్న పొడవైన పనికి was / were, -ing: I was sleeping. మధ్యలో జరిగిన చిన్న సంఘటనకి past: the phone rang. రెండింటినీ when తో కలపండి.",
      },
      bridge: {
        te: ["నేను", "నిద్రపోతుంటే", "ఫోన్ మోగింది"],
        en: [
          { text: "I", role: "who" },
          { text: "was sleeping", role: "action" },
          { text: "when the phone rang", role: "when" },
        ],
      },
      examples: [
        { en: "I was sleeping when the phone rang.", te: "నేను నిద్రపోతుంటే ఫోన్ మోగింది." },
        { en: "He was cooking when the gas finished.", te: "ఆయన వంట చేస్తుంటే గ్యాస్ అయిపోయింది." },
        { en: "I was looking for a candle.", te: "నేను కొవ్వొత్తి కోసం వెతుకుతూ ఉన్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which verb takes -ing?", te: "ఏ verb కి -ing?" },
      items: [
        {
          form: "was / were …ing",
          useFor: { en: "The long action: it was going on.", te: "జరుగుతూ ఉన్న పొడవైన పని." },
          example: { en: "We were eating when the power went off.", te: "మేము భోజనం చేస్తుంటే కరెంట్ పోయింది." },
        },
        {
          form: "the past: rang, went off",
          useFor: { en: "The short thing that broke in.", te: "మధ్యలో వచ్చిన చిన్న సంఘటన." },
          example: { en: "Suddenly, the lights went off.", te: "ఒక్కసారిగా లైట్లు ఆరిపోయాయి." },
        },
        {
          form: "when + the past",
          useFor: { en: "Joins the short thing to the long one.", te: "చిన్న సంఘటనని పొడవైన పనితో కలుపుతుంది." },
          example: { en: "I was sleeping when the phone rang.", te: "నేను నిద్రపోతుంటే ఫోన్ మోగింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Yesterday night there was a power cut.",
      right: "There was a power cut last night.",
      why: {
        en: "Yesterday night is heard only in India; everyone understands last night.",
        te: "yesterday night అని మన దగ్గరే అంటారు; అందరికీ అర్థమయ్యేది last night.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I was sleeping when the phone was ringing.",
      right: "I was sleeping when the phone rang.",
      why: {
        en: "The ring was short and stopped your sleep, so it takes the past, not -ing.",
        te: "ఫోన్ మోగడం చిన్న సంఘటన, నిద్రని ఆపింది; అందుకే -ing కాదు, past.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I was sleeping when the phone rang.", "I am sleeping when the phone rang.", "I was sleeping when the phone ringing."],
      answer: 0,
      why: {
        en: "The long sleep takes was with -ing; the short ring takes the past.",
        te: "పొడవైన నిద్రకి was, -ing; చిన్న సంఘటన అయిన మోగడానికి past.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Electricity Office",
      lines: ["Dear customer,", "Power cut in your area on Sunday,", "from 10 AM to 1 PM, for repair work.", "Sorry for the trouble."],
      prompt: { en: "When will the power be off?", te: "కరెంట్ ఎప్పుడు ఉండదు?" },
      options: ["Sunday, 10 AM to 1 PM", "Every day, 10 AM to 1 PM", "Sunday, 1 PM to 10 PM"],
      answer: 0,
      why: {
        en: "The message gives the day, Sunday, and the hours of the repair work.",
        te: "మెసేజ్‌లో రోజు (ఆదివారం), రిపేర్ పని జరిగే సమయం రెండూ ఉన్నాయి.",
      },
      say: "The power cut is on Sunday, from 10 AM to 1 PM.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Mohan says: I was cooking when the gas finished. What happened first?",
        te: "మోహన్ I was cooking when the gas finished అన్నారు. ముందు ఏం జరిగింది?",
      },
      options: ["Mohan was cooking first.", "The gas finished first.", "Both started at the same time."],
      answer: 0,
      say: "I was cooking when the gas finished.",
      why: {
        en: "The -ing action was already going on when the short thing happened.",
        te: "-ing పని అప్పటికే జరుగుతూ ఉంది; ఆ మధ్యలో చిన్న సంఘటన జరిగింది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "The power was off for two hour.",
      wrongIndex: 6,
      fix: "The power was off for two hours.",
      why: {
        en: "After two or more, hour takes s, in speech too.",
        te: "రెండు, మూడు అంటే hour కి s చేర్చాలి; మాట్లాడేటప్పుడు కూడా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The phone woke you up last night. Tell your neighbour.",
        te: "నిన్న రాత్రి ఫోన్ మోగి మీకు మెలకువ వచ్చింది. పక్కింటివారికి చెప్పండి.",
      },
      expected: ["I was sleeping when the phone rang.", "I was sleeping when my phone rang."],
      options: ["I was sleeping when the phone rang.", "I am sleeping when the phone rang.", "I was sleeping when the phone was ring."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Tell a friend the power went off last night.",
        te: "నిన్న రాత్రి కరెంట్ పోయిందని స్నేహితులకి చెప్పండి.",
      },
      expected: ["There was a power cut last night.", "The power went off last night."],
      options: ["There was a power cut last night.", "Yesterday night there was a power cut.", "There is a power cut last night."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Last night's power cut", te: "నిన్న రాత్రి కరెంట్ పోయింది" },
    scene: {
      en: "This morning, your neighbour Geetha asks you about last night's power cut.",
      te: "ఈ రోజు ఉదయం పక్కింటి గీత గారు నిన్న రాత్రి కరెంట్ పోవడం గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Geetha (neighbour)", te: "గీత (పక్కింటావిడ)" },
    skills: [
      { id: "story", label: { en: "Telling what happened", te: "జరిగింది చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Did the power go off at your house?",
        te: "నమస్కారం! మీ ఇంట్లో కూడా కరెంట్ పోయిందా?",
        hint: { en: "Say yes, and say what you were doing then: TV.", te: "అవునని, అప్పుడు మీరు ఏం చేస్తున్నారో చెప్పండి: TV." },
        replies: [
          { say: "Yes. I was watching TV when it went off.", good: true, skill: "story" },
          { say: "Yes. I watching TV when it went off.", good: false, skill: "story", fixIt: "be" },
        ],
      },
      {
        partner: "Oh no! How long was it off at your house?",
        te: "అయ్యో! మీ ఇంట్లో ఎంతసేపు పోయింది?",
        hint: { en: "Say how long: two hours.", te: "ఎంతసేపో చెప్పండి: రెండు గంటలు." },
        replies: [
          { say: "It was off for two hours.", good: true, skill: "story" },
          { say: "It was off for two hour.", good: false, skill: "story", fixIt: "plural" },
        ],
      },
      {
        partner: "So long! What did you do in the dark?",
        te: "అంతసేపా! చీకట్లో ఏం చేశారు?",
        hint: { en: "Say you searched for a candle, and then found your torch.", te: "కొవ్వొత్తి కోసం వెతికి, తర్వాత టార్చ్ దొరికిందని చెప్పండి." },
        replies: [
          { say: "I looked for a candle. Then I found my torch.", good: true, skill: "story" },
          { say: "I looked a candle. Then I found my torch.", good: false, skill: "story", fixIt: "preposition" },
        ],
      },
      {
        partner: "I called the power office. It was a repair.",
        te: "నేను కరెంట్ ఆఫీసుకి ఫోన్ చేశాను. ఏదో రిపేర్ అట.",
        hint: { en: "Thank her for calling them, and say it is fine now.", te: "వాళ్ళకి ఫోన్ చేసినందుకు థాంక్స్ చెప్పి, ఇప్పుడు బాగానే ఉందని చెప్పండి." },
        replies: [
          { say: "Thank you for calling them. It's fine now.", good: true, skill: "polite" },
          {
            say: "Those office people are useless. Always the same!",
            good: false,
            skill: "polite",
            react: { en: "Please don't say that. They work hard in the rain.", te: "అలా అనకండి. వర్షంలో కూడా వాళ్ళు కష్టపడతారు." },
          },
        ],
      },
    ],
  },
};
