import type { Lesson } from "../../types";

/** Week 12, Day 5 (CURRICULUM §3): all kinds of questions — yes/no and wh-, across tenses. */
export const day: Lesson = {
  id: "all-question-types",
  kind: "lesson",
  title: { en: "All Kinds of Questions", te: "అన్ని ప్రశ్నలు" },
  subtitle: "yes/no and wh- questions",
  summary: {
    en: "Learn to ask all kinds of questions, in every tense: Did you eat? Where are you going? When will he come?",
    te: "అన్ని కాలాల్లో అన్ని రకాల ప్రశ్నలు అడగడం నేర్చుకుందాం: Did you eat? Where are you going? When will he come?",
  },
  seo: {
    title: "All Kinds of Questions in English for Telugu Speakers",
    description:
      "Ask Did you eat?, Where are you going? and When will he come? in English. Simple lessons for Telugu speakers on questions in every tense.",
  },
  pattern: [
    { text: "When", role: "what" },
    { text: "will", role: "action" },
    { text: "he", role: "who" },
    { text: "come?", role: "action" },
  ],
  core: [
    { en: "Did you eat?", te: "మీరు తిన్నారా?", extra: ["ate"] },
    { en: "Where are you going?", te: "మీరు ఎక్కడికి వెళ్తున్నారు?", extra: ["do"] },
    { en: "When will he come?", te: "అతను ఎప్పుడు వస్తాడు?", extra: ["comes"] },
    { en: "Do you live here?", te: "మీరు ఇక్కడే ఉంటారా?", extra: ["Are"] },
    { en: "How many people live in your house?", te: "మీ ఇంట్లో ఎంత మంది ఉంటారు?", extra: ["much"] },
    { en: "Is this your first time here?", te: "మీరు ఇక్కడికి రావడం ఇదే మొదటిసారా?", extra: ["Are"] },
    { en: "Can you write your name here?", te: "ఇక్కడ మీ పేరు రాయగలరా?", extra: ["to"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone three questions today: one with did, one with are, one with will.",
    te: "ఈ రోజు ఎవరినైనా మూడు ప్రశ్నలు అడగండి: ఒకటి did తో, ఒకటి are తో, ఒకటి will తో.",
  },
  words: [
    { en: "survey", te: "సర్వే" },
    { en: "volunteer", te: "స్వచ్ఛంద సేవకులు" },
    { en: "first time", te: "మొదటిసారి" },
    { en: "question", te: "ప్రశ్న" },
  ],
  grammar: ["yes-no-questions", "question-words", "present-simple", "past-simple", "will"],
  topics: ["people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Two kinds of questions", te: "రెండు రకాల ప్రశ్నలు" },
      body: {
        en: "Yes/no questions start with a helper word: Do, Does, Did, Is, Are, Can or Will. Wh- questions start with a question word, then the helper: Where are you going? When will he come? The helper shows the time: did for the past, will for the future.",
        te: "అవును/కాదు ప్రశ్నలు సహాయ పదంతో మొదలవుతాయి: Do, Does, Did, Is, Are, Can, Will. Wh- ప్రశ్నలు ప్రశ్న పదంతో, తర్వాత సహాయ పదం: Where are you going? When will he come? సహాయ పదం కాలం చూపిస్తుంది: గతానికి did, భవిష్యత్తుకి will.",
      },
      bridge: {
        te: ["అతను", "ఎప్పుడు", "వస్తాడు?"],
        en: [
          { text: "When", role: "what" },
          { text: "will", role: "action" },
          { text: "he", role: "who" },
          { text: "come?", role: "action" },
        ],
      },
      examples: [
        { en: "Did you eat?", te: "మీరు తిన్నారా?" },
        { en: "Where are you going?", te: "మీరు ఎక్కడికి వెళ్తున్నారు?" },
        { en: "When will he come?", te: "అతను ఎప్పుడు వస్తాడు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How to build a question", te: "ప్రశ్న ఎలా కట్టాలి" },
      items: [
        {
          form: "helper first (yes/no)",
          useFor: { en: "Do, Did, Is, Are, Can, Will first.", te: "Do, Did, Is, Are, Can, Will ముందు." },
          example: { en: "Is this your first time here?", te: "మీరు ఇక్కడికి రావడం ఇదే మొదటిసారా?" },
        },
        {
          form: "question word + helper",
          useFor: { en: "What, where, when, how many, then the helper.", te: "what, where, when, how many, తర్వాత సహాయ పదం." },
          example: { en: "How many people live in your house?", te: "మీ ఇంట్లో ఎంత మంది ఉంటారు?" },
        },
        {
          form: "the helper shows the time",
          useFor: { en: "Do (every day), did (past), will (future).", te: "do (రోజూ), did (గతం), will (భవిష్యత్తు)." },
          example: { en: "Do you live here?", te: "మీరు ఇక్కడే ఉంటారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "You ate?",
      right: "Did you eat?",
      why: {
        en: "A past question starts with did.",
        te: "గతం ప్రశ్న did తో మొదలవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "When he will come?",
      right: "When will he come?",
      why: {
        en: "Put will before he.",
        te: "he కంటే ముందు will పెట్టాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["You ate?", "Did you eat?", "Did you ate?"],
      answer: 1,
      why: {
        en: "Did + you + eat.",
        te: "వరుస: Did + you + eat.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "When ___ he come?",
      te: "అతను ఎప్పుడు వస్తాడు?",
      options: ["will", "is", "are"],
      answer: 0,
      why: {
        en: "The future: will.",
        te: "భవిష్యత్తు: will.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ask a new neighbour if she lives here.", te: "కొత్త పొరుగావిడ ఇక్కడే ఉంటారా అని అడగండి." },
      options: ["Do you live here?", "Are you live here?", "You are living here is?"],
      answer: 0,
      why: {
        en: "Every day: Do you …?",
        te: "రోజూ జరిగేది: Do you …?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "How many people lives in your house?",
      wrongIndex: 3,
      fix: "How many people live in your house?",
      why: {
        en: "People are many: live, not lives.",
        te: "people అంటే చాలా మంది: lives కాదు, live.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend looks hungry. Ask if she ate.",
        te: "మీ స్నేహితురాలు ఆకలిగా ఉన్నట్టుంది. తిన్నదా అని అడగండి.",
      },
      expected: ["Did you eat?", "Did you eat lunch?"],
      options: ["You ate?", "Did you eat?", "Did you ate?"],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask when the doctor will come.",
        te: "డాక్టర్ ఎప్పుడు వస్తారో అడగండి.",
      },
      expected: ["When will the doctor come?"],
      options: ["When the doctor will come?", "When will the doctor come?", "When will the doctor comes?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A volunteer's survey", te: "స్వచ్ఛంద సేవకుల సర్వే" },
    scene: {
      en: "Anitha, a volunteer, is doing a survey in your colony. Answer her questions, then ask one.",
      te: "స్వచ్ఛంద సేవకురాలు అనిత మీ కాలనీలో సర్వే చేస్తోంది. ఆమె ప్రశ్నలకు జవాబు చెప్పి, మీరూ ఒకటి అడగండి.",
    },
    partner: { en: "Anitha (a volunteer)", te: "అనిత (స్వచ్ఛంద సేవకురాలు)" },
    skills: [
      { id: "answer", label: { en: "Answers", te: "జవాబులు" } },
      { id: "ask", label: { en: "Questions", te: "ప్రశ్నలు" } },
    ],
    turns: [
      {
        partner: "Hello! Can I ask you some questions?",
        te: "నమస్తే! మిమ్మల్ని కొన్ని ప్రశ్నలు అడగవచ్చా?",
        hint: { en: "Say: Yes, of course.", te: "ఇలా చెప్పండి: Yes, of course." },
        replies: [
          { say: "Yes, of course.", good: true, skill: "answer" },
          { say: "Yes, of sure.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "How many people live in your house?",
        te: "మీ ఇంట్లో ఎంత మంది ఉంటారు?",
        hint: { en: "Say: Three people live here.", te: "ఇలా చెప్పండి: Three people live here." },
        replies: [
          { say: "Three people live here.", good: true, skill: "answer" },
          { say: "Three peoples live here.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "Do you take the bus every day?",
        te: "మీరు రోజూ బస్ ఎక్కుతారా?",
        hint: { en: "Say: No, I don't. I walk.", te: "ఇలా చెప్పండి: No, I don't. I walk." },
        replies: [
          { say: "No, I don't. I walk.", good: true, skill: "answer" },
          { say: "No, I doesn't. I walk.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "Thank you! That's all.",
        te: "థాంక్యూ! అంతే.",
        hint: { en: "Ask: What is this survey for?", te: "అడగండి: What is this survey for?" },
        replies: [
          { say: "What is this survey for?", good: true, skill: "ask" },
          { say: "This survey is for what?", good: false, skill: "ask" },
        ],
      },
    ],
  },
};
