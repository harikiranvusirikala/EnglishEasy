import type { Lesson } from "../../types";

/** Week 2, Day 1 (CURRICULUM §3): what / where, with be and do. The question word comes first. */
export const day: Lesson = {
  id: "what-and-where",
  kind: "lesson",
  title: { en: "What & Where", te: "ఏంటి, ఎక్కడ" },
  subtitle: "what / where",
  summary: {
    en: "Learn to ask what something is and where something is, with the question word first.",
    te: "ఏదైనా ఏంటో, ఎక్కడ ఉందో అడగడం నేర్చుకుందాం. ఇంగ్లీష్‌లో ప్రశ్న పదం ముందు వస్తుంది.",
  },
  seo: {
    title: "What and Where Questions in English for Telugu Speakers",
    description:
      "Ask What is this? and Where do you live? in English. Simple lessons for Telugu speakers on what and where questions, with Telugu explanations.",
  },
  pattern: [
    { text: "Where", role: "what" },
    { text: "do", role: "action" },
    { text: "you", role: "who" },
    { text: "live?", role: "action" },
  ],
  core: [
    { en: "What is this?", te: "ఇది ఏంటి?", extra: ["Where"] },
    { en: "Where is the bus stand?", te: "బస్ స్టాండ్ ఎక్కడ ఉంది?", extra: ["What"] },
    { en: "Where do you live?", te: "మీరు ఎక్కడ ఉంటారు?", extra: ["are"] },
    { en: "What is your name?", te: "మీ పేరు ఏంటి?", extra: ["Where"] },
    { en: "What do you do?", te: "మీరు ఏం పని చేస్తారు?", extra: ["are"] },
    { en: "I live in Guntur.", te: "నేను గుంటూరులో ఉంటాను.", extra: ["at"] },
    { en: "Where are you going?", te: "మీరు ఎక్కడికి వెళ్తున్నారు?", extra: ["do"] },
  ],
  key: [0, 2, 3, 6],
  tryToday: {
    en: "Ask someone two questions in English: What is your name? Where do you live?",
    te: "ఎవరినైనా ఇంగ్లీష్‌లో రెండు ప్రశ్నలు అడగండి: What is your name? Where do you live?",
  },
  words: [
    { en: "what", te: "ఏంటి" },
    { en: "where", te: "ఎక్కడ" },
    { en: "live", te: "ఉండటం, నివసించడం" },
    { en: "name", te: "పేరు" },
    { en: "bus stand", te: "బస్ స్టాండ్" },
  ],
  grammar: ["question-words", "am-is-are", "present-simple"],
  topics: ["people", "directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The question word comes first", te: "ప్రశ్న పదం ముందు వస్తుంది" },
      body: {
        en: "In Telugu, the question word is in the middle: మీరు ఎక్కడ ఉంటారు? In English, the question word comes first: Where do you live?",
        te: "తెలుగులో ప్రశ్న పదం మధ్యలో ఉంటుంది: మీరు ఎక్కడ ఉంటారు? ఇంగ్లీష్‌లో ప్రశ్న పదం మొదట్లో వస్తుంది: Where do you live?",
      },
      bridge: {
        te: ["మీరు", "ఎక్కడ", "ఉంటారు?"],
        en: [
          { text: "Where", role: "what" },
          { text: "do", role: "action" },
          { text: "you", role: "who" },
          { text: "live?", role: "action" },
        ],
      },
      examples: [
        { en: "What is this?", te: "ఇది ఏంటి?" },
        { en: "Where is the bus stand?", te: "బస్ స్టాండ్ ఎక్కడ ఉంది?" },
        { en: "Where do you live?", te: "మీరు ఎక్కడ ఉంటారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What or where?", te: "what ఆ, where ఆ?" },
      items: [
        {
          form: "what",
          useFor: { en: "Use what for a thing, a name or work.", te: "ఒక వస్తువు, పేరు లేదా పని గురించి అడగడానికి what." },
          example: { en: "What is your name?", te: "మీ పేరు ఏంటి?" },
        },
        {
          form: "where",
          useFor: { en: "Use where for a place.", te: "ఒక చోటు గురించి అడగడానికి where." },
          example: { en: "Where is the bus stand?", te: "బస్ స్టాండ్ ఎక్కడ ఉంది?" },
        },
        {
          form: "where + do",
          useFor: {
            en: "With an action word like live or work, add do after where.",
            te: "live, work లాంటి verbs ఉంటే where తర్వాత do పెట్టాలి.",
          },
          example: { en: "Where do you live?", te: "మీరు ఎక్కడ ఉంటారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Where you live?",
      right: "Where do you live?",
      why: {
        en: "Telugu needs no extra word, but with an action like live, English needs do: Where do you live?",
        te: "తెలుగులో ప్రశ్నకి అదనపు పదం అక్కర్లేదు, కానీ live లాంటి verb ఉంటే ఇంగ్లీష్‌లో do కావాలి: Where do you live?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "This is what?",
      right: "What is this?",
      why: {
        en: "Do not keep the Telugu order. Put the question word first: What is this?",
        te: "తెలుగు వరుసలో అడగకండి. ప్రశ్న పదం ముందు పెట్టండి: What is this?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["Where you live?", "Where do you live?", "Where does you live?"],
      answer: 1,
      why: {
        en: "With you and an action word, use do: Where do you live?",
        te: "you తో, live లాంటి verb ఉంటే do వాడాలి: Where do you live?",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ is your name?",
      te: "మీ పేరు ఏంటి?",
      options: ["What", "Where", "Who"],
      answer: 0,
      why: {
        en: "We ask for a name with what: What is your name?",
        te: "పేరు అడగడానికి what వాడతాం: What is your name?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You want to find the bus stand. What do you ask?",
        te: "బస్ స్టాండ్ ఎక్కడ ఉందో తెలుసుకోవాలి. ఏమని అడుగుతారు?",
      },
      options: ["What is the bus stand?", "Where is the bus stand?", "Where the bus stand?"],
      answer: 1,
      why: {
        en: "For a place, ask with where, and keep is: Where is the bus stand?",
        te: "చోటు కోసం where వాడాలి, is కూడా ఉండాలి: Where is the bus stand?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Where you are going?",
      wrongIndex: 1,
      fix: "Where are you going?",
      why: {
        en: "In a question, are comes before you: Where are you going?",
        te: "ప్రశ్నలో are ముందు, you తర్వాత వస్తాయి: Where are you going?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Someone on the bus asks: Where do you live? Say your own town in English.",
        te: "బస్సులో ఒకరు అడుగుతున్నారు: Where do you live? మీ ఊరి పేరు ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["I live in Guntur.", "I live in Vijayawada.", "I live in Hyderabad."],
      options: ["I live in Guntur.", "I living in Guntur.", "I am live in Guntur."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You see a new fruit at the shop. Ask what it is.",
        te: "షాప్‌లో ఒక కొత్త పండు కనిపించింది. అది ఏంటో అడగండి.",
      },
      expected: ["What is this?", "What is this fruit?"],
      options: ["This is what?", "What is this?", "Where is this?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new neighbour", te: "కొత్త పొరుగువారు" },
    scene: {
      en: "Imran has just moved in next door. He asks about you. Answer, then ask him a question.",
      te: "ఇమ్రాన్ గారు పక్కింటికి కొత్తగా వచ్చారు. మీ గురించి అడుగుతున్నారు. జవాబు చెప్పి, మీరూ ఒక ప్రశ్న అడగండి.",
    },
    partner: { en: "Imran (a new neighbour)", te: "ఇమ్రాన్ (కొత్త పొరుగువారు)" },
    voice: "b",
    skills: [
      { id: "answer", label: { en: "Answer", te: "జవాబు చెప్పడం" } },
      { id: "ask", label: { en: "Ask", te: "ప్రశ్న అడగడం" } },
    ],
    turns: [
      {
        partner: "Hello! What is your name?",
        te: "నమస్తే! మీ పేరు ఏంటి?",
        hint: { en: "Say your name. Start with My name is.", te: "మీ పేరు చెప్పండి. My name is తో మొదలుపెట్టండి." },
        replies: [
          { say: "My name is Kiran.", good: true, skill: "answer" },
          { say: "My name Kiran.", good: false, skill: "answer" },
          {
            say: "Why? Who are you?",
            good: false,
            react: { en: "Sorry! I am Imran, from next door.", te: "sorry అండీ! నేను ఇమ్రాన్, పక్కింట్లోకి వచ్చాను." },
          },
        ],
      },
      {
        partner: "Where do you live?",
        te: "మీరు ఎక్కడ ఉంటారు?",
        hint: { en: "Say where you live. It is this street.", te: "మీరు ఇదే వీధిలో ఉంటారని చెప్పండి." },
        replies: [
          { say: "I live in this street.", good: true, skill: "answer" },
          { say: "I am live in this street.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "What do you do?",
        te: "మీరు ఏం పని చేస్తారు?",
        hint: { en: "Say your own work. Retired is fine too.", te: "మీ పని చెప్పండి. retired అయినా అలాగే చెప్పండి." },
        replies: [
          { say: "I am a teacher.", good: true, skill: "answer" },
          { say: "I am retired.", good: true, skill: "answer" },
          { say: "I teacher.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "Nice to meet you!",
        te: "మిమ్మల్ని కలవడం సంతోషం!",
        hint: { en: "Now ask where he works.", te: "ఇప్పుడు ఆయన ఎక్కడ పని చేస్తారో అడగండి." },
        replies: [
          { say: "Where do you work?", good: true, skill: "ask" },
          { say: "Where you work?", good: false, skill: "ask" },
          { say: "What you work?", good: false, skill: "ask" },
        ],
      },
    ],
  },
};
