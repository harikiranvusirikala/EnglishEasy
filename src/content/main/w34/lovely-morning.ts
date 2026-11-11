import type { Lesson } from "../../types";

/** Week 34, Day 1 (CURRICULUM §4): starting a chat — the weather, the walk; isn't it? as a fixed phrase. */
export const day: Lesson = {
  id: "lovely-morning",
  kind: "lesson",
  title: { en: "Lovely Morning, Isn't It?", te: "బాగుంది కదా?" },
  subtitle: "openers: …, isn't it?",
  summary: {
    en: "Learn to start a friendly chat on your walk: Lovely morning, isn't it? It's cooler today.",
    te: "నడకలో మాట మొదలుపెట్టడం నేర్చుకుందాం: Lovely morning, isn't it? It's cooler today.",
  },
  seo: {
    title: "Starting Small Talk in English for Telugu Speakers",
    description:
      "Say Lovely morning, isn't it? and It's cooler today. Simple lessons for Telugu speakers on starting a friendly chat on the morning walk.",
  },
  pattern: [
    { text: "It's", role: "who" },
    { text: "cooler", role: "what" },
    { text: "today,", role: "when" },
    { text: "isn't it?", role: "action" },
  ],
  core: [
    { en: "Lovely morning, isn't it?", te: "ఉదయం చాలా బాగుంది కదా?", extra: ["is"] },
    { en: "It's cooler today, isn't it?", te: "ఈ రోజు కొంచెం చల్లగా ఉంది కదా?", extra: ["is"] },
    { en: "Yes, it's very pleasant.", te: "అవును, చాలా హాయిగా ఉంది.", extra: ["much"] },
    { en: "Do you walk here every day?", te: "మీరు రోజూ ఇక్కడ నడుస్తారా?", extra: ["are"] },
    { en: "There's a nice breeze this morning.", te: "ఈ రోజు ఉదయం మంచి చల్లగాలి వీస్తోంది.", extra: ["today"] },
    { en: "Yes, I come here every morning.", te: "అవును, రోజూ ఉదయం ఇక్కడికి వస్తాను.", extra: ["coming"] },
    { en: "It's a bit chilly, isn't it?", te: "కొంచెం చలిగా ఉంది కదా?", extra: ["little"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "On your walk or at a shop, start a chat: Lovely morning, isn't it?",
    te: "నడకలో గానీ, షాపులో గానీ ఒకరితో మాట మొదలుపెట్టండి: Lovely morning, isn't it?",
  },
  words: [
    { en: "lovely", te: "చాలా బాగున్న" },
    { en: "isn't it?", te: "కదా?" },
    { en: "breeze", te: "చల్లగాలి, పిల్లగాలి" },
    { en: "chilly", te: "చలిగా" },
    { en: "small talk", te: "చిన్న చిన్న కబుర్లు" },
  ],
  grammar: ["indirect-tag-questions", "yes-no-questions"],
  topics: ["weather", "people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Starting a chat", te: "మాట మొదలుపెట్టడం" },
      body: {
        en: "To start a chat, say something nice about the weather and add isn't it? It works like Telugu కదా?: you expect a yes. The other person says Yes, it is, and the chat begins.",
        te: "మాట మొదలుపెట్టాలంటే వాతావరణం గురించి ఒక మంచి మాట చెప్పి, చివర isn't it? చేర్చండి. ఇది మన 'కదా?' లాంటిదే: అవతలివారు Yes, it is అంటారు, కబుర్లు మొదలవుతాయి.",
      },
      bridge: {
        te: ["ఈ రోజు", "చల్లగా ఉంది", "కదా?"],
        en: [
          { text: "It's", role: "who" },
          { text: "cooler", role: "what" },
          { text: "today,", role: "when" },
          { text: "isn't it?", role: "action" },
        ],
      },
      examples: [
        { en: "Lovely morning, isn't it?", te: "ఉదయం చాలా బాగుంది కదా?" },
        { en: "It's cooler today, isn't it?", te: "ఈ రోజు కొంచెం చల్లగా ఉంది కదా?" },
        { en: "It's a bit chilly, isn't it?", te: "కొంచెం చలిగా ఉంది కదా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Start, reply, keep going", te: "మొదలు, జవాబు, కొనసాగింపు" },
      items: [
        {
          form: "…, isn't it?",
          useFor: { en: "Start a chat. You expect a yes.", te: "మాట మొదలుపెట్టడానికి. అవును అనే జవాబు వస్తుంది." },
          example: { en: "Lovely morning, isn't it?", te: "ఉదయం చాలా బాగుంది కదా?" },
        },
        {
          form: "Yes, it is. / Yes, very …",
          useFor: { en: "Agree, and add a few words.", te: "ఒప్పుకుని, ఇంకో రెండు మాటలు చేర్చడానికి." },
          example: { en: "Yes, it's very pleasant.", te: "అవును, చాలా హాయిగా ఉంది." },
        },
        {
          form: "Do you … every day?",
          useFor: { en: "Ask a simple question to keep the chat going.", te: "కబుర్లు సాగడానికి ఒక చిన్న ప్రశ్న." },
          example: { en: "Do you walk here every day?", te: "మీరు రోజూ ఇక్కడ నడుస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You are coming tomorrow, isn't it?",
      right: "Are you coming tomorrow?",
      why: {
        en: "Telugu కదా? fits any sentence, but isn't it? only goes with it is. To really ask, put are first.",
        te: "'కదా?' ఏ వాక్యానికైనా సరిపోతుంది, కానీ isn't it? it is ఉన్న మాటకే. నిజంగా అడగాలంటే are ముందు పెట్టండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Lovely morning, is it?",
      right: "Lovely morning, isn't it?",
      why: {
        en: "Is it? sounds like you doubt it, like Telugu అవునా? For a friendly yes, add not.",
        te: "is it? అంటే 'అవునా?' అని అనుమానంగా అడిగినట్టు. స్నేహంగా ఒప్పుకోమనాలంటే not చేర్చి isn't it? అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A walker says: Lovely morning, isn't it? Agree with him.",
        te: "నడిచే ఒకాయన Lovely morning, isn't it? అన్నారు. ఆయనతో ఒప్పుకోండి.",
      },
      options: ["Yes, it is. Very pleasant.", "Yes, it isn't. Very pleasant.", "Thank you very much."],
      answer: 0,
      why: {
        en: "To agree, say Yes, it is, with no not, then add a few words.",
        te: "ఒప్పుకోవాలంటే not లేకుండా Yes, it is అని, తర్వాత ఇంకో రెండు మాటలు చేర్చండి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It's a bit chilly, ___ it?",
      te: "కొంచెం చలిగా ఉంది కదా?",
      options: ["isn't", "is", "doesn't"],
      answer: 0,
      why: {
        en: "After it's, the friendly ending is isn't it, with not; doesn't never follows it's.",
        te: "it's తర్వాత స్నేహంగా అడిగే మాట isn't it, not తో; it's తర్వాత doesn't రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["It's a lovely morning, isn't it?", "It's lovely morning, isn't it?", "It's a lovely morning, is it?"],
      answer: 0,
      why: {
        en: "One morning needs a before it; Telugu has no word like a, so it often slips.",
        te: "ఒక ఉదయం అంటే ముందు a కావాలి; తెలుగులో a లాంటి మాట లేదు, అందుకే మర్చిపోతాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "We meet here in every morning.",
      wrongIndex: 3,
      fix: "We meet here every morning.",
      why: {
        en: "Every morning needs no in or on before it, just like Telugu రోజూ ఉదయం.",
        te: "'రోజూ ఉదయం' లాగే every morning ముందు in, on ఏవీ రావు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "On your morning walk, start a chat about the weather.",
        te: "మార్నింగ్ వాక్‌లో వాతావరణం గురించి మాట మొదలుపెట్టండి.",
      },
      expected: ["Lovely morning, isn't it?", "It's a lovely morning, isn't it?", "It's cooler today, isn't it?"],
      options: ["Lovely morning, isn't it?", "Lovely morning, is it?", "Morning lovely, isn't it?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A neighbour says: It's cooler today, isn't it? Agree.",
        te: "పక్కింటివారు It's cooler today, isn't it? అన్నారు. ఒప్పుకోండి.",
      },
      expected: ["Yes, it is.", "Yes, it's very pleasant.", "Yes, it is. Very pleasant."],
      options: ["Yes, it is.", "Yes, it isn't.", "Yes, I am."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "On the morning walk", te: "మార్నింగ్ వాక్‌లో" },
    scene: {
      en: "It is six in the morning at the park. Narayana walks here every day too.",
      te: "ఉదయం ఆరు గంటలు, పార్కులో ఉన్నారు. నారాయణ గారు కూడా రోజూ ఇక్కడ నడుస్తారు.",
    },
    partner: { en: "Narayana (a walker)", te: "నారాయణ (నడకకి వచ్చేవారు)" },
    voice: "b",
    skills: [
      { id: "start", label: { en: "Starting a chat", te: "మాట మొదలుపెట్టడం" } },
      { id: "reply", label: { en: "Keeping it going", te: "కబుర్లు కొనసాగించడం" } },
    ],
    turns: [
      {
        partner: "Good morning! I see you here every day.",
        te: "నమస్కారం! మిమ్మల్ని రోజూ ఇక్కడ చూస్తుంటాను.",
        hint: { en: "Greet him, and say something nice about the morning.", te: "నమస్కారం చెప్పి, ఉదయం గురించి ఒక మంచి మాట చెప్పండి." },
        replies: [
          { say: "Good morning! Lovely morning, isn't it?", good: true, skill: "start" },
          { say: "Good morning! Lovely morning, is it?", good: false, skill: "start" },
          {
            say: "I'm walking. Please don't disturb me.",
            good: false,
            skill: "start",
            react: { en: "Oh! Sorry, sorry. Please carry on.", te: "అయ్యో! sorry, sorry. మీరు నడవండి." },
          },
        ],
      },
      {
        partner: "Yes, it is! And there's a nice breeze.",
        te: "అవును! మంచి చల్లగాలి కూడా వీస్తోంది.",
        hint: { en: "Agree, and compare today with yesterday.", te: "ఒప్పుకుని, ఈ రోజుని నిన్నటితో పోల్చండి." },
        replies: [
          { say: "Yes, it's much cooler than yesterday.", good: true, skill: "reply" },
          { say: "Yes, it's more cooler than yesterday.", good: false, skill: "reply" },
        ],
      },
      {
        partner: "Do you walk here every day?",
        te: "మీరు రోజూ ఇక్కడ నడుస్తారా?",
        hint: { en: "Say yes, and tell him what time you come.", te: "అవునని, ఏ టైంకి వస్తారో చెప్పండి." },
        replies: [
          { say: "Yes, I come here every morning at six.", good: true, skill: "reply" },
          { say: "Yes, I am coming here daily at six.", good: false, skill: "reply", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Nice! I'm Narayana. I live in Lane 3.",
        te: "మంచిది! నా పేరు నారాయణ. మూడో లేన్‌లో ఉంటాను.",
        hint: { en: "Tell him your name, and say you are glad to meet him.", te: "మీ పేరు చెప్పి, కలిసినందుకు సంతోషం అని చెప్పండి." },
        replies: [
          { say: "I'm Kiran. Nice to meet you.", good: true },
          { say: "Myself Kiran. Nice to meet you.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
