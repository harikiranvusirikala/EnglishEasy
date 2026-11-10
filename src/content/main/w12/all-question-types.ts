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
    { en: "When will he come?", te: "ఆయన ఎప్పుడు వస్తారు?", extra: ["comes"] },
    { en: "Do you live here?", te: "మీరు ఇక్కడే ఉంటారా?", extra: ["Are"] },
    { en: "How many people live in your house?", te: "మీ ఇంట్లో ఎంత మంది ఉంటారు?", extra: ["much"] },
    { en: "Is this your first time here?", te: "మీరు ఇక్కడికి రావడం ఇదే మొదటిసారా?", extra: ["Are"] },
    { en: "Can you write your name here?", te: "ఇక్కడ మీ పేరు రాస్తారా?", extra: ["to"] },
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
        te: "Yes/no ప్రశ్నలు helper word తో మొదలవుతాయి: Do, Does, Did, Is, Are, Can, Will. Wh- ప్రశ్నలు question word తో, ఆ తర్వాత helper: Where are you going? When will he come? ఎప్పటి మాటో helper చూపిస్తుంది: past కి did, రాబోయేదానికి will.",
      },
      bridge: {
        te: ["ఆయన", "ఎప్పుడు", "వస్తారు?"],
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
        { en: "When will he come?", te: "ఆయన ఎప్పుడు వస్తారు?" },
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
          useFor: { en: "What, where, when, how many, then the helper.", te: "what, where, when, how many, ఆ తర్వాత helper." },
          example: { en: "How many people live in your house?", te: "మీ ఇంట్లో ఎంత మంది ఉంటారు?" },
        },
        {
          form: "the helper shows the time",
          useFor: { en: "Do (every day), did (past), will (future).", te: "do (రోజూ), did (past), will (రాబోయేది)." },
          example: { en: "Do you live here?", te: "మీరు ఇక్కడే ఉంటారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You ate?",
      right: "Did you eat?",
      why: {
        en: "Telugu asks తిన్నారా? with no helper, but English starts with did: Did you eat?",
        te: "తెలుగులో 'తిన్నారా?' అంటే చాలు; ఇంగ్లీష్‌లో did తో మొదలుపెట్టాలి: Did you eat?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "When he will come?",
      right: "When will he come?",
      why: {
        en: "In a question, the helper comes before the person: When will he come?",
        te: "ప్రశ్నలో helper (will) ముందు, he తర్వాత: When will he come?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["You ate?", "Did you eat?", "Did you ate?"],
      answer: 1,
      why: {
        en: "Did already shows the past, so eat stays plain: Did you eat?",
        te: "did తోనే past తెలుస్తుంది, అందుకే eat మారదు: Did you eat?",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "When ___ he come?",
      te: "ఆయన ఎప్పుడు వస్తారు?",
      options: ["will", "is", "are"],
      answer: 0,
      why: {
        en: "His coming is still ahead, so ask with will: When will he come?",
        te: "ఆయన రావడం ఇంకా జరగలేదు, అందుకే will: When will he come?",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask a new neighbour if she lives here.", te: "కొత్త పొరుగావిడ ఇక్కడే ఉంటారా అని అడగండి." },
      options: ["Do you live here?", "Are you live here?", "Does you live here?"],
      answer: 0,
      why: {
        en: "For every day, ask with do, and with you it is do: Do you live here?",
        te: "రోజూ జరిగేది do తో అడగాలి; you తో are, does కాదు, do: Do you live here?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "How many people lives in your house?",
      wrongIndex: 3,
      fix: "How many people live in your house?",
      why: {
        en: "People means many, so the verb has no s: How many people live in your house?",
        te: "people అంటే చాలా మంది, అందుకే verb కి s రాదు: How many people live in your house?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend looks hungry. Ask if she ate.",
        te: "మీ స్నేహితురాలు ఆకలిగా ఉన్నట్టున్నారు. తిన్నారా అని అడగండి.",
      },
      expected: ["Did you eat?", "Did you eat lunch?"],
      options: ["You ate?", "Did you eat?", "Did you ate?"],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
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
      te: "స్వచ్ఛంద సేవకురాలు అనిత మీ కాలనీలో సర్వే చేస్తున్నారు. ఆవిడ ప్రశ్నలకు జవాబు చెప్పి, మీరూ ఒకటి అడగండి.",
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
        hint: { en: "Say yes, gladly.", te: "సంతోషంగా సరే అనండి." },
        replies: [
          { say: "Yes, of course.", good: true, skill: "answer" },
          { say: "Yes, of sure.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "How many people live in your house?",
        te: "మీ ఇంట్లో ఎంత మంది ఉంటారు?",
        hint: { en: "Say how many live in your house.", te: "మీ ఇంట్లో ఎంత మంది ఉంటారో చెప్పండి." },
        replies: [
          { say: "Three people live here.", good: true, skill: "answer" },
          { say: "Three peoples live here.", good: false, skill: "answer", fixIt: "plural" },
        ],
      },
      {
        partner: "Do you take the bus every day?",
        te: "మీరు రోజూ బస్ ఎక్కుతారా?",
        hint: { en: "Say no with don't, and how you go.", te: "don't తో లేదని చెప్పి, ఎలా వెళ్తారో చెప్పండి." },
        replies: [
          { say: "No, I don't. I walk.", good: true, skill: "answer" },
          { say: "No, I doesn't. I walk.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "Thank you! That's all.",
        te: "థాంక్యూ! అంతే.",
        hint: { en: "Ask her the reason for the survey.", te: "ఈ సర్వే ఎందుకో ఆవిడని అడగండి." },
        replies: [
          { say: "What is this survey for?", good: true, skill: "ask" },
          { say: "This survey is for what?", good: false, skill: "ask", fixIt: "question" },
          {
            say: "Finally! That took so long.",
            good: false,
            skill: "ask",
            react: { en: "Sorry! Thank you for your time.", te: "Sorry అండీ! టైమ్ ఇచ్చినందుకు థాంక్స్." },
          },
        ],
      },
    ],
  },
};
