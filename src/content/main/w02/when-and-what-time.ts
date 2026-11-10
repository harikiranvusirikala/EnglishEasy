import type { Lesson } from "../../types";

/** Week 2, Day 2 (CURRICULUM §3): when / what time, and at with clock times. */
export const day: Lesson = {
  id: "when-and-what-time",
  kind: "lesson",
  title: { en: "When & What Time", te: "ఎప్పుడు, ఎన్ని గంటలకు" },
  subtitle: "when / what time",
  summary: {
    en: "Learn to ask when something happens and what time it is, and to answer with at.",
    te: "ఏదైనా ఎప్పుడు జరుగుతుందో, టైమ్ ఎంతో అడగడం, at తో జవాబు చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "When and What Time Questions in English for Telugu Speakers",
    description:
      "Ask When is the function? and What time does the shop open? in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "What time", role: "when" },
    { text: "does", role: "action" },
    { text: "the shop", role: "who" },
    { text: "open?", role: "action" },
  ],
  core: [
    { en: "When is the function?", te: "ఫంక్షన్ ఎప్పుడు?", extra: ["What"] },
    { en: "What time is it?", te: "టైమ్ ఎంత అయింది?", extra: ["When"] },
    { en: "When do you wake up?", te: "మీరు ఎప్పుడు నిద్ర లేస్తారు?", extra: ["are"] },
    { en: "What time does the shop open?", te: "షాప్ ఎన్ని గంటలకు తెరుస్తారు?", extra: ["do"] },
    { en: "The shop opens at nine.", te: "షాప్ తొమ్మిది గంటలకు తెరుస్తారు.", extra: ["on"] },
    { en: "When will you come?", te: "మీరు ఎప్పుడు వస్తారు?", extra: ["do"] },
    { en: "It is six o'clock.", te: "ఆరు గంటలు అయింది.", extra: ["at"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Ask someone: What time is it? Then say the time in English: It is … o'clock.",
    te: "ఎవరినైనా అడగండి: What time is it? తర్వాత టైమ్ ఇంగ్లీష్‌లో చెప్పండి: It is … o'clock.",
  },
  words: [
    { en: "when", te: "ఎప్పుడు" },
    { en: "function", te: "ఫంక్షన్, వేడుక" },
    { en: "open", te: "తెరవడం" },
    { en: "wake up", te: "నిద్ర లేవడం" },
    { en: "o'clock", te: "గంటలు (టైమ్)" },
  ],
  grammar: ["question-words", "present-simple", "prepositions"],
  topics: ["time", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When or what time", te: "when లేదా what time" },
      body: {
        en: "When asks about a day or a time in general. What time asks for the exact clock time. Both come first in the question.",
        te: "when అంటే ఎప్పుడు: రోజు గానీ, సమయం గానీ. what time అంటే ఎన్ని గంటలకు: గడియారంలో టైమ్. రెండూ ప్రశ్నలో మొదట వస్తాయి.",
      },
      bridge: {
        te: ["షాప్", "ఎన్ని గంటలకు", "తెరుస్తారు?"],
        en: [
          { text: "What time", role: "when" },
          { text: "does", role: "action" },
          { text: "the shop", role: "who" },
          { text: "open?", role: "action" },
        ],
      },
      examples: [
        { en: "When is the function?", te: "ఫంక్షన్ ఎప్పుడు?" },
        { en: "What time is it?", te: "టైమ్ ఎంత అయింది?" },
        { en: "What time does the shop open?", te: "షాప్ ఎన్ని గంటలకు తెరుస్తారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "When, what time, at", te: "when, what time, at — ఎప్పుడు ఏది?" },
      items: [
        {
          form: "when",
          useFor: { en: "Use when for a day, a date or any time.", te: "రోజు, తేదీ, ఏ సమయమైనా అడగడానికి when." },
          example: { en: "When will you come?", te: "మీరు ఎప్పుడు వస్తారు?" },
        },
        {
          form: "what time",
          useFor: { en: "Use what time for the clock time.", te: "గడియారంలో టైమ్ అడగడానికి what time." },
          example: { en: "What time is it?", te: "టైమ్ ఎంత అయింది?" },
        },
        {
          form: "at + time",
          useFor: { en: "Answer with at before a clock time.", te: "జవాబులో గడియారం టైమ్ ముందు at పెట్టాలి." },
          example: { en: "The shop opens at nine.", te: "షాప్ తొమ్మిది గంటలకు తెరుస్తారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What time the shop opens?",
      right: "What time does the shop open?",
      why: {
        en: "In the question, add does, and open has no s: What time does the shop open?",
        te: "ప్రశ్నలో does పెట్టాలి, అప్పుడు open కి s ఉండదు: What time does the shop open?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The shop opens on nine.",
      right: "The shop opens at nine.",
      why: {
        en: "Before a clock time, say at: at nine, at six o'clock.",
        te: "గడియారం టైమ్ ముందు at అనాలి: at nine, at six o'clock.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["What time the shop opens?", "What time does the shop open?", "What time does the shop opens?"],
      answer: 1,
      why: {
        en: "With does, the action has no s.",
        te: "does ఉంటే verb కి s రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The bus comes ___ seven.",
      te: "బస్ ఏడు గంటలకు వస్తుంది.",
      options: ["in", "on", "at"],
      answer: 2,
      why: {
        en: "Before a clock time, use at.",
        te: "గడియారం టైమ్ ముందు at వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which question asks for the clock time?", te: "గడియారంలో టైమ్ అడిగే ప్రశ్న ఏది?" },
      options: ["When is the function?", "What time is it?", "Where is the clock?"],
      answer: 1,
      why: {
        en: "What time asks for the exact time on the clock.",
        te: "what time గడియారంలో టైమ్ అడుగుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "When you will come?",
      wrongIndex: 1,
      fix: "When will you come?",
      why: {
        en: "In a question, will comes before you.",
        te: "ప్రశ్నలో will ముందు, you తర్వాత వస్తాయి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: What time do you wake up? Answer in English.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: What time do you wake up? ఇంగ్లీష్‌లో జవాబు చెప్పండి.",
      },
      expected: ["I wake up at six.", "I wake up at five.", "I wake up at seven."],
      options: ["I wake up on six.", "I wake up at six.", "I waking up at six."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You want to know the day of the function. Ask your neighbour.",
        te: "ఫంక్షన్ ఎప్పుడో తెలుసుకోవాలి. పక్కింటి వాళ్లని అడగండి.",
      },
      expected: ["When is the function?"],
      options: ["When the function is?", "When is the function?", "What is the function?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "When does the shop open?", te: "షాప్ ఎప్పుడు తెరుస్తారు?" },
    scene: {
      en: "You reach the kirana shop, but Srinivas is closing it. Ask him about the shop's times.",
      te: "మీరు కిరాణా షాప్‌కి వెళ్లారు, కానీ శ్రీనివాస్ షాప్ మూసేస్తున్నారు. షాప్ టైమింగ్స్ గురించి అడగండి.",
    },
    partner: { en: "Srinivas (a shopkeeper)", te: "శ్రీనివాస్ (షాప్ యజమాని)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Ask when", te: "ఎప్పుడు అని అడగడం" } },
      { id: "time", label: { en: "at + time", te: "at + టైమ్" } },
    ],
    turns: [
      {
        partner: "Sorry, we are closing now.",
        te: "sorry అండీ, ఇప్పుడు షాప్ మూసేస్తున్నాం.",
        hint: { en: "Ask what time the shop opens tomorrow.", te: "రేపు షాప్ ఎన్ని గంటలకు తెరుస్తారో అడగండి." },
        replies: [
          { say: "What time do you open tomorrow?", good: true, skill: "ask" },
          { say: "What time you open tomorrow?", good: false, skill: "ask", fixIt: "question" },
          {
            say: "Open now. I need sugar.",
            good: false,
            react: { en: "Sorry, it is late. Please come tomorrow.", te: "sorry అండీ, ఆలస్యమైంది. రేపు రండి." },
          },
        ],
      },
      {
        partner: "We open at eight.",
        te: "మేము ఎనిమిది గంటలకు తెరుస్తాం.",
        hint: { en: "Now ask about closing time.", te: "ఇప్పుడు ఎప్పుడు మూసేస్తారో అడగండి." },
        replies: [
          { say: "When do you close?", good: true, skill: "ask" },
          { say: "What time do you close?", good: true, skill: "ask" },
          { say: "When you close?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "At nine at night.",
        te: "రాత్రి తొమ్మిది గంటలకు.",
        hint: { en: "Say thank you, and that you will come at eight.", te: "థాంక్స్ చెప్పి, ఎనిమిది గంటలకు వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I will come at eight.", good: true, skill: "time" },
          { say: "Thank you. I will come on eight.", good: false, skill: "time" },
          { say: "Thank you. I will coming at eight.", good: false, skill: "time" },
        ],
      },
    ],
  },
};
