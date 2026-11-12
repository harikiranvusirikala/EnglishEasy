import type { Lesson } from "../../types";

/** Week 48, Day 2 (CURRICULUM §5): travel plans that depend on transport — If the train is late, I'll call you. */
export const day: Lesson = {
  id: "if-the-train-is-late",
  kind: "lesson",
  title: { en: "If the Train Is Late", te: "రైలు ఆలస్యం అయితే" },
  subtitle: "If …, I'll call / wait / take",
  summary: {
    en: "Learn to plan for travel problems: If the train is late, I'll call you. If I miss the last bus, I'll take an auto.",
    te: "ప్రయాణంలో వచ్చే ఇబ్బందులకి ప్లాన్ చెప్పడం నేర్చుకుందాం: If the train is late, I'll call you. If I miss the last bus, I'll take an auto.",
  },
  seo: {
    title: "Travel Plans with If in English for Telugu Speakers",
    description:
      "Say If the train is late, I'll call you and If I miss the last bus, I'll take an auto. Simple lessons for Telugu speakers on travel plans.",
  },
  pattern: [
    { text: "If the train is late,", role: "when" },
    { text: "I'll", role: "who" },
    { text: "call", role: "action" },
    { text: "you", role: "what" },
  ],
  core: [
    { en: "If I miss the last bus, I'll take an auto.", te: "చివరి బస్సు మిస్ అయితే, ఆటోలో వెళ్తాను.", extra: ["will"] },
    { en: "If the train is late, I'll call you from the station.", te: "రైలు ఆలస్యం అయితే, స్టేషన్ నుంచి మీకు ఫోన్ చేస్తాను.", extra: ["at"] },
    { en: "If the bus is full, I'll wait for the next one.", te: "బస్సు నిండుగా ఉంటే, తర్వాతి బస్సు కోసం ఆగుతాను.", extra: ["to"] },
    { en: "If I'm running late, I'll send you a message.", te: "నాకు ఆలస్యం అవుతుంటే, మీకు మెసేజ్ పెడతాను.", extra: ["sending"] },
    { en: "If the train is on time, we'll reach Vijayawada by noon.", te: "రైలు టైమ్‌కి వస్తే, మధ్యాహ్నానికల్లా విజయవాడ చేరుకుంటాం.", extra: ["to"] },
    { en: "If the bus breaks down, we'll take a share auto.", te: "బస్సు దారిలో పాడైపోతే, షేర్ ఆటోలో వెళ్తాం.", extra: ["break"] },
    { en: "If the cab doesn't come, I'll take the city bus.", te: "క్యాబ్ రాకపోతే, సిటీ బస్సులో వెళ్తాను.", extra: ["won't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of your next trip. Say aloud what you'll do if the bus or train is late: If …, I'll …",
    te: "మీ తర్వాతి ప్రయాణం గుర్తు చేసుకోండి. బస్సు గానీ రైలు గానీ ఆలస్యమైతే ఏం చేస్తారో గట్టిగా చెప్పండి: If …, I'll …",
  },
  words: [
    { en: "last bus", te: "చివరి బస్సు" },
    { en: "running late", te: "ఆలస్యం అవుతుండటం" },
    { en: "cab", te: "క్యాబ్, టాక్సీ" },
    { en: "waiting room", te: "వెయిటింగ్ రూమ్, ఎదురుచూసే గది" },
    { en: "break down", te: "వాహనం దారిలో పాడైపోవడం" },
  ],
  grammar: ["conditionals", "will", "prepositions"],
  topics: ["transport", "travel", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "If the train is late …", te: "రైలు ఆలస్యం అయితే …" },
      body: {
        en: "Trips often depend on the bus or the train. Say If and the problem, then I'll and what you will do: If the train is late, I'll call you.",
        te: "ప్రయాణాలు బస్సు, రైలు మీద ఆధారపడి ఉంటాయి. If తర్వాత సమస్య, ఆ తర్వాత I'll తో మీరేం చేస్తారో చెప్పండి: If the train is late, I'll call you.",
      },
      bridge: {
        te: ["రైలు ఆలస్యం అయితే,", "మీకు", "ఫోన్ చేస్తాను"],
        en: [
          { text: "If the train is late,", role: "when" },
          { text: "I'll", role: "who" },
          { text: "call", role: "action" },
          { text: "you", role: "what" },
        ],
      },
      examples: [
        { en: "If I miss the last bus, I'll take an auto.", te: "చివరి బస్సు మిస్ అయితే, ఆటోలో వెళ్తాను." },
        { en: "If the train is late, I'll call you from the station.", te: "రైలు ఆలస్యం అయితే, స్టేషన్ నుంచి మీకు ఫోన్ చేస్తాను." },
        { en: "If the bus is full, I'll wait for the next one.", te: "బస్సు నిండుగా ఉంటే, తర్వాతి బస్సు కోసం ఆగుతాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Call, wait or take", te: "ఫోన్ చేయడం, ఆగడం, వేరే వాహనం" },
      items: [
        {
          form: "I'll call you",
          useFor: { en: "Say you'll phone if there is a delay.", te: "ఆలస్యమైతే ఫోన్ చేస్తానని చెప్పడానికి." },
          example: { en: "If the train is late, I'll call you from the station.", te: "రైలు ఆలస్యం అయితే, స్టేషన్ నుంచి మీకు ఫోన్ చేస్తాను." },
        },
        {
          form: "I'll wait for …",
          useFor: { en: "Say you'll wait. Wait takes for.", te: "ఆగుతానని చెప్పడానికి. wait తో for వస్తుంది." },
          example: { en: "If the train is late, I'll wait in the waiting room.", te: "రైలు ఆలస్యం అయితే, వెయిటింగ్ రూమ్‌లో ఆగుతాను." },
        },
        {
          form: "I'll take an auto / a cab",
          useFor: { en: "Say what you'll take instead.", te: "బదులుగా ఏ వాహనంలో వెళ్తారో చెప్పడానికి." },
          example: { en: "If the cab doesn't come, I'll take the city bus.", te: "క్యాబ్ రాకపోతే, సిటీ బస్సులో వెళ్తాను." },
        },
        {
          form: "reach + a place",
          useFor: { en: "Reach takes no to after it.", te: "reach తర్వాత to రాదు." },
          example: { en: "If the train is on time, we'll reach Vijayawada by noon.", te: "రైలు టైమ్‌కి వస్తే, మధ్యాహ్నానికల్లా విజయవాడ చేరుకుంటాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We'll reach to Vijayawada by noon.",
      right: "We'll reach Vijayawada by noon.",
      why: {
        en: "Reach already means arrive at, so it takes no to; Telugu కి makes us add one.",
        te: "reach అంటేనే 'చేరుకోవడం', దానికి to అక్కర్లేదు. 'విజయవాడకి' లోని 'కి' వల్ల to చేర్చేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "If the train is late, I'll wait you at the station.",
      right: "If the train is late, I'll wait for you at the station.",
      why: {
        en: "Wait needs for before the person; Telugu మీ కోసం has that for in it.",
        te: "wait తర్వాత మనిషి వస్తే for కావాలి; తెలుగు 'మీ కోసం' లోని 'కోసం' యే for.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "You are going to Guntur by train, and a friend is meeting you. Tell him your plan if the train is late.",
        te: "మీరు రైల్లో గుంటూరు వెళ్తున్నారు, ఒక స్నేహితుడు మిమ్మల్ని కలుస్తున్నారు. రైలు ఆలస్యమైతే మీ ప్లాన్ ఆయనకి చెప్పండి.",
      },
      options: ["If the train is late, I'll call you.", "If the train will be late, I'll call you.", "If the train late, I'll call you."],
      answer: 0,
      why: {
        en: "After if, use the present is, not will be, and never drop is.",
        te: "if తర్వాత will be కాదు, present is వాడాలి; is ని వదిలేయకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "If the train is two ___ late, I'll take a cab.",
      te: "రైలు రెండు గంటలు ఆలస్యం అయితే, క్యాబ్‌లో వెళ్తాను.",
      options: ["hours", "hour", "an hour"],
      answer: 0,
      why: {
        en: "After two, hour takes s; Telugu గంటలు also shows more than one.",
        te: "రెండు తర్వాత hour కి s వస్తుంది; తెలుగులోనూ 'గంట' కాదు, 'గంటలు' అంటాం.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Indian Railways",
      lines: ["Dear passenger,", "Your train to Vijayawada is running 2 hours late.", "New arrival time: 11:30 am.", "We are sorry for the trouble."],
      prompt: {
        en: "You get this SMS. When will the train reach Vijayawada now?",
        te: "మీకు ఈ SMS వచ్చింది. ఇప్పుడు రైలు విజయవాడ ఎప్పుడు చేరుకుంటుంది?",
      },
      options: ["At 11:30 am", "At 9:30 am", "In 2 hours"],
      answer: 0,
      why: {
        en: "The third line gives the new time, after the two hours of delay.",
        te: "మూడో లైన్‌లో, రెండు గంటల ఆలస్యం తర్వాతి కొత్త టైమ్ ఉంది.",
      },
      say: "New arrival time: 11:30 am.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "If we reach to the station early, we'll have tea.",
      wrongIndex: 3,
      fix: "If we reach the station early, we'll have tea.",
      why: {
        en: "Reach needs no to after it, though Telugu says స్టేషన్‌కి.",
        te: "తెలుగులో 'స్టేషన్‌కి' అన్నా, reach తర్వాత to రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You are leaving for the station. Your friend asks: What if the train is late? Say you'll call.",
        te: "మీరు స్టేషన్‌కి బయలుదేరుతున్నారు. రైలు ఆలస్యమైతే? అని స్నేహితులు అడుగుతున్నారు. ఫోన్ చేస్తానని చెప్పండి.",
      },
      expected: ["If the train is late, I'll call you.", "I'll call you if the train is late.", "Don't worry, I'll call you."],
      options: ["If the train is late, I'll call you.", "If the train will be late, I'll call you.", "If the train is late, I'll calling you."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your cousin asks how you'll get home tonight. Say you'll take an auto if you miss the last bus.",
        te: "ఈ రాత్రి ఇంటికి ఎలా వెళ్తారని మీ కజిన్ అడుగుతున్నారు. చివరి బస్సు మిస్ అయితే ఆటోలో వెళ్తానని చెప్పండి.",
      },
      expected: ["If I miss the last bus, I'll take an auto.", "I'll take an auto if I miss the last bus.", "If I miss the bus, I'll take an auto."],
      options: ["If I miss the last bus, I'll take an auto.", "If I miss the last bus, I'll take auto.", "If I will miss the last bus, I'll take an auto."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A pickup at the station", te: "స్టేషన్‌లో పికప్" },
    scene: {
      en: "You are going to Rajahmundry tomorrow by the night train. Your friend Srinivas will pick you up. He calls.",
      te: "మీరు రేపు రాత్రి రైల్లో రాజమండ్రి వెళ్తున్నారు. మీ స్నేహితుడు శ్రీనివాస్ గారు మిమ్మల్ని పికప్ చేసుకుంటారు. ఆయన ఫోన్ చేశారు.",
    },
    partner: { en: "Srinivas (your friend)", te: "శ్రీనివాస్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "if", label: { en: "Plans with if", te: "if తో ప్లాన్లు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! So you're coming to Rajahmundry. What time does your train arrive?",
        te: "హలో! మీరు రాజమండ్రి వస్తున్నారు కదా. మీ రైలు ఎన్ని గంటలకి వస్తుంది?",
        hint: { en: "Tell him your arrival time: six in the morning.", te: "మీరు చేరుకునే టైమ్ చెప్పండి: పొద్దున ఆరు." },
        replies: [
          { say: "I'll reach at six in the morning.", good: true, skill: "if" },
          { say: "The train reaches at six in the morning.", good: true, skill: "if" },
          { say: "I'll reach to Rajahmundry at six in the morning.", good: false, skill: "if", fixIt: "preposition" },
        ],
      },
      {
        partner: "Six? Okay, I'll come to the station.",
        te: "ఆరింటికా? సరే, నేను స్టేషన్‌కి వస్తాను.",
        hint: { en: "Thank him, and say you'll phone him if the train is late.", te: "ఆయనకి థాంక్స్ చెప్పి, రైలు ఆలస్యమైతే ఫోన్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. If the train is late, I'll call you.", good: true, skill: "if" },
          { say: "Thank you. If the train will be late, I'll call you.", good: false, skill: "if" },
        ],
      },
      {
        partner: "And what if I'm stuck in traffic?",
        te: "మరి నేను ట్రాఫిక్‌లో ఇరుక్కుపోతే?",
        hint: { en: "Say it's no problem; you'll wait for him in the waiting room.", te: "పర్లేదని, ఆయన కోసం వెయిటింగ్ రూమ్‌లో ఆగుతానని చెప్పండి." },
        replies: [
          { say: "No problem. I'll wait for you in the waiting room.", good: true, skill: "if" },
          { say: "No problem. I'll wait you in the waiting room.", good: false, skill: "if", fixIt: "preposition" },
          {
            say: "Then don't come. I'll manage.",
            good: false,
            skill: "polite",
            react: { en: "Oh! No, no, I'll come. Don't worry.", te: "అయ్యో! లేదు, లేదు, వస్తాను. కంగారు పడకండి." },
          },
        ],
      },
      {
        partner: "Perfect. Is your luggage heavy? I can help.",
        te: "సరే. మీ లగేజ్ బరువుగా ఉందా? నేను సాయం చేస్తాను.",
        hint: { en: "Say no, you have just one small bag. Then say goodbye.", te: "లేదు, ఒక్క చిన్న బ్యాగే ఉందని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "No, it's only one small bag. See you tomorrow!", good: true, skill: "polite" },
          { say: "No, it only one small bag. See you tomorrow!", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};
