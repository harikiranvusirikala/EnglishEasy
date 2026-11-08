import type { Lesson } from "../../types";

/** Week 10, Day 5 (CURRICULUM §3): future time words — next week, in two days, soon, later. */
export const day: Lesson = {
  id: "next-week-soon",
  kind: "lesson",
  title: { en: "Next Week, Soon", te: "త్వరలో" },
  subtitle: "next / in / soon / later",
  summary: {
    en: "Learn to say when something will happen: next week, in two days, soon, later.",
    te: "ఏదైనా ఎప్పుడు జరుగుతుందో చెప్పడం నేర్చుకుందాం: next week, in two days, soon, later.",
  },
  seo: {
    title: "Next Week, In Two Days, Soon: Future Time Words for Telugu Speakers",
    description:
      "Say I'll see you next week and The doctor will come in two days in English. Simple lessons for Telugu speakers on future time words.",
  },
  pattern: [
    { text: "The doctor", role: "who" },
    { text: "will come", role: "action" },
    { text: "in two days", role: "when" },
  ],
  core: [
    { en: "I'll see you next week.", te: "వచ్చే వారం మిమ్మల్ని కలుస్తాను.", extra: ["last"] },
    { en: "The doctor will come in two days.", te: "డాక్టర్ రెండు రోజుల్లో వస్తారు.", extra: ["after"] },
    { en: "The wedding is next month.", te: "పెళ్లి వచ్చే నెలలో.", extra: ["last"] },
    { en: "I'll call you later.", te: "తర్వాత ఫోన్ చేస్తాను.", extra: ["after"] },
    { en: "The bus will come soon.", te: "బస్ త్వరలో వస్తుంది.", extra: ["fast"] },
    { en: "Can I come next Monday?", te: "వచ్చే సోమవారం రావచ్చా?", extra: ["on"] },
    { en: "We'll meet in an hour.", te: "గంటలో కలుద్దాం.", extra: ["after"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Tell someone one thing you will do next week.",
    te: "వచ్చే వారం మీరు చేసే ఒక పని ఎవరికైనా చెప్పండి.",
  },
  words: [
    { en: "next", te: "వచ్చే, తర్వాతి" },
    { en: "soon", te: "త్వరలో" },
    { en: "later", te: "తర్వాత" },
    { en: "appointment", te: "అపాయింట్‌మెంట్" },
    { en: "busy", te: "తీరిక లేకుండా, బిజీ" },
  ],
  grammar: ["will", "prepositions"],
  topics: ["time", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Words for the future", te: "భవిష్యత్తు పదాలు" },
      body: {
        en: "Next means the coming one: next week, next month (వచ్చే). In + a time means that long from now: in two days (రెండు రోజుల్లో). Soon is త్వరలో; later is తర్వాత. Say next Monday, with no on.",
        te: "next అంటే వచ్చే: next week, next month. in + సమయం అంటే ఇప్పటి నుండి అంత సమయంలో: in two days (రెండు రోజుల్లో). soon = త్వరలో; later = తర్వాత. next Monday అనాలి, on లేకుండా.",
      },
      bridge: {
        te: ["డాక్టర్", "రెండు రోజుల్లో", "వస్తారు"],
        en: [
          { text: "The doctor", role: "who" },
          { text: "will come", role: "action" },
          { text: "in two days", role: "when" },
        ],
      },
      examples: [
        { en: "I'll see you next week.", te: "వచ్చే వారం మిమ్మల్ని కలుస్తాను." },
        { en: "The doctor will come in two days.", te: "డాక్టర్ రెండు రోజుల్లో వస్తారు." },
        { en: "The bus will come soon.", te: "బస్ త్వరలో వస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Next, in, soon, later", te: "వచ్చే, …లో, త్వరలో, తర్వాత" },
      items: [
        {
          form: "next + week / month / Monday",
          useFor: { en: "The coming one. No on before next.", te: "వచ్చేది. next ముందు on రాదు." },
          example: { en: "The wedding is next month.", te: "పెళ్లి వచ్చే నెలలో." },
        },
        {
          form: "in + time",
          useFor: { en: "That long from now.", te: "ఇప్పటి నుండి అంత సమయంలో." },
          example: { en: "We'll meet in an hour.", te: "గంటలో కలుద్దాం." },
        },
        {
          form: "soon / later",
          useFor: { en: "Not long from now / after some time.", te: "కొద్ది సేపట్లో / కొంత సేపటి తర్వాత." },
          example: { en: "I'll call you later.", te: "తర్వాత ఫోన్ చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "The doctor will come after two days.",
      right: "The doctor will come in two days.",
      why: {
        en: "From now into the future, say in: in two days.",
        te: "ఇప్పటి నుండి ముందుకు చెప్పడానికి in: in two days.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Can I come on next Monday?",
      right: "Can I come next Monday?",
      why: {
        en: "No on before next.",
        te: "next ముందు on రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I'll see you last week.", "I'll see you next week.", "I'll see you after week."],
      answer: 1,
      why: {
        en: "The future: next week.",
        te: "భవిష్యత్తు: next week.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We'll meet ___ an hour.",
      te: "గంటలో కలుద్దాం.",
      options: ["in", "after", "on"],
      answer: 0,
      why: {
        en: "From now: in an hour.",
        te: "ఇప్పటి నుండి: in an hour.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which word means: త్వరలో?", te: "త్వరలో — ఇంగ్లీష్‌లో ఏ పదం?" },
      options: ["soon", "late", "fast"],
      answer: 0,
      why: {
        en: "Soon means not long from now.",
        te: "soon అంటే త్వరలో.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Can I come on next Monday?",
      wrongIndex: 3,
      fix: "Can I come next Monday?",
      why: {
        en: "Drop on before next.",
        te: "next ముందు on తీసేయాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You are busy now. Say you will call your friend later.",
        te: "మీరు ఇప్పుడు బిజీగా ఉన్నారు. తర్వాత ఫోన్ చేస్తానని చెప్పండి.",
      },
      expected: ["I'll call you later.", "I will call you later."],
      options: ["I'll call you later.", "I'll calling you later.", "I call you after."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell a friend that the wedding is next month.",
        te: "పెళ్లి వచ్చే నెలలో అని మీ స్నేహితులకు చెప్పండి.",
      },
      expected: ["The wedding is next month."],
      options: ["The wedding is next month.", "The wedding is on next month.", "The wedding is in next month."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "An appointment at the clinic", te: "క్లినిక్‌లో అపాయింట్‌మెంట్" },
    scene: {
      en: "You call Dr Mohan's clinic for an appointment. Rani at the desk finds you a day.",
      te: "అపాయింట్‌మెంట్ కోసం డాక్టర్ మోహన్ క్లినిక్‌కి ఫోన్ చేశారు. రిసెప్షన్‌లో రాణి మీకు ఒక రోజు చూస్తోంది.",
    },
    partner: { en: "Rani (clinic receptionist)", te: "రాణి (క్లినిక్ రిసెప్షనిస్ట్)" },
    skills: [{ id: "future", label: { en: "Future time words", te: "భవిష్యత్తు పదాలు" } }],
    turns: [
      {
        partner: "Good morning. Dr Mohan's clinic.",
        te: "గుడ్ మార్నింగ్. డాక్టర్ మోహన్ క్లినిక్.",
        hint: { en: "Say: I'd like an appointment, please.", te: "ఇలా చెప్పండి: I'd like an appointment, please." },
        replies: [
          { say: "I'd like an appointment, please.", good: true },
          { say: "I'd like appointment, please.", good: false },
        ],
      },
      {
        partner: "Is next Monday okay?",
        te: "వచ్చే సోమవారం సరేనా?",
        hint: { en: "Say: Sorry, I'm busy next Monday.", te: "ఇలా చెప్పండి: Sorry, I'm busy next Monday." },
        replies: [
          { say: "Sorry, I'm busy next Monday.", good: true, skill: "future" },
          { say: "Sorry, I'm busy on next Monday.", good: false, skill: "future" },
        ],
      },
      {
        partner: "Then Wednesday, in three days?",
        te: "అయితే బుధవారం, మూడు రోజుల్లో?",
        hint: { en: "Say: Yes, Wednesday is fine.", te: "ఇలా చెప్పండి: Yes, Wednesday is fine." },
        replies: [
          { say: "Yes, Wednesday is fine.", good: true, skill: "future" },
          { say: "Yes, Wednesday are fine.", good: false, skill: "future" },
        ],
      },
      {
        partner: "Okay. Please come at ten.",
        te: "సరే. పది గంటలకు రండి.",
        hint: { en: "Promise: I'll be there at ten.", te: "మాట ఇవ్వండి: I'll be there at ten." },
        replies: [
          { say: "I'll be there at ten.", good: true, skill: "future" },
          { say: "I'll there at ten.", good: false, skill: "future" },
        ],
      },
    ],
  },
};
