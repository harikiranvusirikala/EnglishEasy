import type { Lesson } from "../../types";

/** Week 1, Day 6 (CURRICULUM §3): future with will; won't; Will ...? */
export const day: Lesson = {
  id: "future-will-tomorrow",
  kind: "lesson",
  title: { en: "Tomorrow", te: "రేపు" },
  subtitle: "Future with will",
  summary: {
    en: "Talk about tomorrow and plans. Use will, won't, and ask Will you ...?",
    te: "రేపు గురించి, ప్లాన్‌ల గురించి మాట్లాడటం నేర్చుకుందాం. will, won't, Will you ...?",
  },
  seo: {
    title: "Future with Will in English for Telugu Speakers: Tomorrow",
    description:
      "Learn the future with will: I will call you tomorrow, I won't be late, Will you help me? Say your plans, with Telugu explanations.",
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
    { en: "She will come on Sunday.", te: "ఆమె ఆదివారం వస్తుంది.", extra: ["comes"] },
    { en: "I will visit my uncle.", te: "నేను మా మామయ్యని కలుస్తాను.", extra: ["visited"] },
    { en: "I won't be late.", te: "నేను ఆలస్యం చేయను.", extra: ["don't"] },
    { en: "Will you help me?", te: "మీరు నాకు సహాయం చేస్తారా?", extra: ["Do"] },
    { en: "Yes, I will.", te: "అవును, చేస్తాను.", extra: ["do"] },
  ],
  key: [0, 1, 4, 5],
  tryToday: {
    en: "Tell someone one plan for tomorrow. For example: I will call you tomorrow. I won't be late.",
    te: "రేపటి కోసం మీ ఒక ప్లాన్ ఎవరికైనా చెప్పండి. ఉదాహరణ: I will call you tomorrow. I won't be late.",
  },
  words: [
    { en: "tomorrow", te: "రేపు" },
    { en: "call", te: "ఫోన్ చేయడం" },
    { en: "visit", te: "కలవడం" },
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
        te: "tomorrow, next week లాంటి పదాలు వస్తే verb ముందు will పెట్టాలి. verb మారదు: I will go, she will come. అన్ని Who లకి will ఒకటే.",
      },
      bridge: {
        te: ["నేను", "రేపు", "మీకు", "ఫోన్ చేస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "tomorrow", role: "when" },
          { text: "you", role: "what" },
          { text: "will call", role: "action" },
        ],
      },
      examples: [
        { en: "I will call you tomorrow.", te: "నేను రేపు మీకు ఫోన్ చేస్తాను." },
        { en: "We will go to the temple.", te: "మేము గుడికి వెళ్తాం." },
        { en: "She will come on Sunday.", te: "ఆమె ఆదివారం వస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Yes, no and question", te: "అవును, కాదు, ప్రశ్న" },
      items: [
        {
          form: "won't",
          useFor: { en: "Say no. Won't means will not.", te: "కాదు అని చెప్పడానికి. won't అంటే will not." },
          example: { en: "I won't be late.", te: "నేను ఆలస్యం చేయను." },
        },
        {
          form: "Will ...?",
          useFor: { en: "Ask a question. Put Will first.", te: "ప్రశ్న అడగడానికి. Will ని మొదట పెట్టండి." },
          example: { en: "Will you help me?", te: "మీరు నాకు సహాయం చేస్తారా?" },
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
        en: "Will already shows the future. The action stays simple: come.",
        te: "will లోనే భవిష్యత్తు ఉంది. verb మామూలుగానే ఉండాలి: come.",
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
        en: "After will, use go.",
        te: "will తర్వాత go వాడాలి.",
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
        en: "Tomorrow is the future. Use will.",
        te: "tomorrow అంటే భవిష్యత్తు. will వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "How do you say no? I ___ be late.", te: "కాదు అని ఎలా చెప్తారు? I ___ be late." },
      options: ["won't", "don't", "didn't"],
      answer: 0,
      why: {
        en: "Won't means will not. It is for the future.",
        te: "won't అంటే will not. ఇది భవిష్యత్తు కోసం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She will comes on Sunday.",
      wrongIndex: 2,
      fix: "She will come on Sunday.",
      why: {
        en: "After will, use come, not comes.",
        te: "will తర్వాత come వాడాలి, comes కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A neighbour asks: Will you help me? Say yes, in English.",
        te: "పొరుగు వాళ్లు అడుగుతున్నారు: Will you help me? అవును అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["Yes, I will.", "Yes, I will help you."],
      options: ["Yes, I do.", "Yes, I will.", "Yes, I am will."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend asks: Will you be late? Say no, in English.",
        te: "స్నేహితులు అడుగుతున్నారు: Will you be late? కాదు అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["No, I won't.", "No, I won't be late."],
      options: ["No, I won't.", "No, I don't will.", "No, I not will."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Visiting a relative", te: "బంధువుల ఇంటికి వెళ్లడం" },
    scene: {
      en: "You plan to visit a relative's house. Say what you will do, using will.",
      te: "మీరు బంధువుల ఇంటికి వెళ్లాలని అనుకుంటున్నారు. will వాడి ఏం చేస్తారో చెప్పండి.",
    },
    partner: { en: "Relative", te: "బంధువు" },
    skills: [{ id: "will", label: { en: "Saying your plans", te: "ప్లాన్‌లు చెప్పడం" } }],
    turns: [
      {
        partner: "Will you visit us on Sunday?",
        te: "ఆదివారం మా ఇంటికి వస్తావా?",
        hint: { en: "Say yes: Yes, I will.", te: "అవును అని చెప్పండి: Yes, I will." },
        replies: [
          { say: "Yes, I will.", good: true, skill: "will" },
          { say: "Yes, I will visit you.", good: true, skill: "will" },
          { say: "Yes, I do.", good: false, skill: "will" },
        ],
      },
      {
        partner: "Great! When will you come?",
        te: "బాగుంది! ఎప్పుడు వస్తావు?",
        hint: { en: "Say: I will come in the morning.", te: "ఇలా చెప్పండి: I will come in the morning." },
        replies: [
          { say: "I will come in the morning.", good: true, skill: "will" },
          { say: "I will coming in the morning.", good: false, skill: "will" },
          { say: "I come in the morning.", good: false, skill: "will" },
        ],
      },
      {
        partner: "Will you be late?",
        te: "నువ్వు ఆలస్యం అవుతావా?",
        hint: { en: "Say: No, I won't be late.", te: "ఇలా చెప్పండి: No, I won't be late." },
        replies: [
          { say: "No, I won't be late.", good: true, skill: "will" },
          { say: "No, I don't be late.", good: false, skill: "will" },
          { say: "No, I will not late.", good: false, skill: "will" },
        ],
      },
    ],
  },
};
