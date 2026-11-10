import type { Lesson } from "../../types";

/** Week 1, Day 6 (CURRICULUM §3, lightened 2026-11-09): future with will; Will you …? Yes, I will. won't is recognition only (built in Week 10). */
export const day: Lesson = {
  id: "future-will-tomorrow",
  kind: "lesson",
  title: { en: "Tomorrow", te: "రేపు" },
  subtitle: "Future with will",
  summary: {
    en: "Talk about tomorrow and plans with will, and ask with Will you.",
    te: "రేపు గురించి, ప్లాన్‌ల గురించి will తో మాట్లాడటం, Will you తో అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Future with Will in English for Telugu Speakers: Tomorrow",
    description:
      "Learn the future with will: I will call you tomorrow, Will you help me? Yes, I will. Say your plans, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "will call", role: "action" },
    { text: "you", role: "what" },
    { text: "tomorrow", role: "when" },
  ],
  core: [
    { en: "I will call you tomorrow.", te: "నేను రేపు మీకు ఫోన్ చేస్తాను.", extra: ["called"] },
    { en: "We will go to the temple.", te: "మేము గుడికి వెళ్తాం.", extra: ["going"] },
    { en: "She will come on Sunday.", te: "ఆవిడ ఆదివారం వస్తారు.", extra: ["comes"] },
    { en: "I will visit my uncle.", te: "నేను మా మామయ్య వాళ్ళింటికి వెళ్తాను.", extra: ["visited"] },
    { en: "I will come in the morning.", te: "నేను ఉదయం వస్తాను.", extra: ["coming"] },
    { en: "Will you help me?", te: "మీరు నాకు సహాయం చేస్తారా?", extra: ["Do"] },
    { en: "Yes, I will.", te: "అవును, చేస్తాను.", extra: ["do"] },
  ],
  key: [0, 1, 4, 5],
  tryToday: {
    en: "Tell someone one plan for tomorrow. For example: I will call you tomorrow. I will go to the temple.",
    te: "రేపటి కోసం మీ ఒక ప్లాన్ ఎవరికైనా చెప్పండి. ఉదాహరణ: I will call you tomorrow. I will go to the temple.",
  },
  words: [
    { en: "tomorrow", te: "రేపు" },
    { en: "call", te: "ఫోన్ చేయడం" },
    { en: "visit", te: "చూడటానికి వెళ్ళడం" },
    { en: "Sunday", te: "ఆదివారం" },
    { en: "late", te: "ఆలస్యం" },
  ],
  grammar: ["will", "yes-no-questions"],
  topics: ["time", "phone", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What you will do", te: "మీరు చేయబోయేది" },
      body: {
        en: "To talk about tomorrow or a plan, put will before the action. The action stays simple: I will go, she will come.",
        te: "tomorrow, next week లాంటి పదాలు వస్తే verb ముందు will పెట్టాలి. verb మారదు: I will go, she will come.",
      },
      bridge: {
        te: ["నేను", "రేపు", "మీకు", "ఫోన్ చేస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "will call", role: "action" },
          { text: "you", role: "what" },
          { text: "tomorrow", role: "when" },
        ],
      },
      examples: [
        { en: "I will call you tomorrow.", te: "నేను రేపు మీకు ఫోన్ చేస్తాను." },
        { en: "We will go to the temple.", te: "మేము గుడికి వెళ్తాం." },
        { en: "She will come on Sunday.", te: "ఆవిడ ఆదివారం వస్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Question, yes and no", te: "ప్రశ్న, అవును, లేదు" },
      items: [
        {
          form: "Will you + action?",
          useFor: { en: "To ask about tomorrow, put Will first.", te: "రేపటి గురించి అడగాలంటే Will ని మొదట పెట్టండి." },
          example: { en: "Will you help me?", te: "మీరు నాకు సహాయం చేస్తారా?" },
        },
        {
          form: "Yes, I will.",
          useFor: { en: "The short way to say yes to a Will you question.", te: "Will you ప్రశ్నకి అవును అని చిన్నగా చెప్పే పద్ధతి." },
          example: { en: "Will you come? Yes, I will.", te: "మీరు వస్తారా? అవును, వస్తాను." },
        },
        {
          form: "won't",
          useFor: {
            en: "You will also hear won't, which means will not. Just understand it for now; you will practice it in Week 10.",
            te: "won't అంటే will not, అది కూడా వినిపిస్తుంది. ఇప్పటికి అర్థం చేసుకుంటే చాలు; 10వ వారంలో practice చేస్తాం.",
          },
          example: { en: "I won't be late.", te: "నేను ఆలస్యం చేయను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I will going.",
      right: "I will go.",
      why: {
        en: "After will, use the simple action: go. Do not add -ing.",
        te: "will తర్వాత మామూలు verb వాడాలి: go. -ing వద్దు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She will comes.",
      right: "She will come.",
      why: {
        en: "Will already shows the future, so the action stays simple: She will come.",
        te: "will లోనే రేపు అనే అర్థం ఉంది, కాబట్టి verb మారదు: She will come.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I will going.", "I will go.", "I will goes."],
      answer: 1,
      why: {
        en: "After will, the action stays simple: I will go.",
        te: "will తర్వాత verb మారదు: I will go.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ call you tomorrow.",
      te: "నేను రేపు మీకు ఫోన్ చేస్తాను.",
      options: ["will", "am", "did"],
      answer: 0,
      why: {
        en: "For tomorrow, put will before the action: I will call you tomorrow.",
        te: "రేపు చేసే పనికి verb ముందు will: I will call you tomorrow.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: మీరు రేపు వస్తారా?", te: "మీరు రేపు వస్తారా? — ఇంగ్లీష్‌లో ఏది సరైనది?" },
      options: ["You come tomorrow?", "Will you come tomorrow?", "Will you coming tomorrow?"],
      answer: 1,
      why: {
        en: "To ask about tomorrow, put Will first, then you and the plain action word: Will you come tomorrow?",
        te: "రేపటి గురించి అడగాలంటే మొదట Will, తర్వాత you, మామూలు verb: Will you come tomorrow?",
      },
      fixIt: "question",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She will comes on Sunday.",
      wrongIndex: 2,
      fix: "She will come on Sunday.",
      why: {
        en: "After will, the action has no -s: She will come on Sunday.",
        te: "will తర్వాత verb కి -s రాదు: She will come on Sunday.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A neighbour asks: Will you help me? Say yes, in English.",
        te: "పక్కింటి వాళ్లు అడుగుతున్నారు: Will you help me? అవును అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["Yes, I will.", "Yes, I will help you."],
      options: ["Yes, I do.", "Yes, I will.", "Yes, I am."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask your neighbour Kamala if she will come on Sunday. Ask in English.",
        te: "పక్కింటి కమల గారు ఆదివారం వస్తారా అని ఇంగ్లీష్‌లో అడగండి.",
      },
      expected: ["Will you come on Sunday?"],
      options: ["Are you come on Sunday?", "Will you come on Sunday?", "Will you coming on Sunday?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Visiting a relative", te: "బంధువుల ఇంటికి వెళ్లడం" },
    scene: {
      en: "Your uncle Narayana calls and asks you to visit. Say what you will do, using will.",
      te: "మీ మామయ్య నారాయణ గారు ఫోన్ చేసి ఇంటికి రమ్మంటున్నారు. will వాడి ఏం చేస్తారో చెప్పండి.",
    },
    partner: { en: "Narayana (your uncle)", te: "నారాయణ (మామయ్య)" },
    voice: "b",
    skills: [{ id: "will", label: { en: "Saying your plans", te: "ప్లాన్‌లు చెప్పడం" } }],
    turns: [
      {
        partner: "Will you visit us on Sunday?",
        te: "ఆదివారం మా ఇంటికి వస్తారా?",
        hint: { en: "Say yes, the short way.", te: "అవును అని చిన్నగా చెప్పండి." },
        replies: [
          { say: "Yes, I will.", good: true, skill: "will" },
          { say: "Yes, I will visit you.", good: true, skill: "will" },
          { say: "Yes, I do.", good: false, skill: "will" },
        ],
      },
      {
        partner: "Great! When will you come?",
        te: "బాగుంది! ఎప్పుడు వస్తారు?",
        hint: { en: "Say what time of day you will come.", te: "ఏ పూట వస్తారో చెప్పండి." },
        replies: [
          { say: "I will come in the morning.", good: true, skill: "will" },
          { say: "I come in the morning.", good: false, skill: "will" },
          {
            say: "Whenever I like.",
            good: false,
            react: { en: "Ha! Okay, but please come before lunch.", te: "హహ! సరే, కానీ భోజనానికి ముందే రండి." },
          },
        ],
      },
      {
        partner: "Good. Will you call me on Saturday?",
        te: "మంచిది. శనివారం నాకు ఫోన్ చేస్తారా?",
        hint: { en: "Say yes in a full sentence, and that you will phone him.", te: "అవునని, ఫోన్ చేస్తానని పూర్తి వాక్యంలో చెప్పండి." },
        replies: [
          { say: "Yes, I will call you.", good: true, skill: "will" },
          { say: "Yes, I will calling you.", good: false, skill: "will" },
          { say: "Yes, I called you.", good: false, skill: "will" },
        ],
      },
    ],
  },
};
