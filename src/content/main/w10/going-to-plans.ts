import type { Lesson } from "../../types";

/** Week 10, Day 1 (CURRICULUM §3): going to for plans. */
export const day: Lesson = {
  id: "going-to-plans",
  kind: "lesson",
  title: { en: "Going To", te: "ప్రణాళికలు" },
  subtitle: "am / is / are going to",
  summary: {
    en: "Learn to talk about your plans with going to: I am going to visit my cousin.",
    te: "going to తో మీ ప్రణాళికల గురించి మాట్లాడటం నేర్చుకుందాం: I am going to visit my cousin.",
  },
  seo: {
    title: "Going To for Plans in English for Telugu Speakers",
    description:
      "Say I am going to visit my cousin and What are you going to do? in English. Simple lessons for Telugu speakers on plans with going to.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "am going to visit", role: "action" },
    { text: "my cousin", role: "what" },
  ],
  core: [
    { en: "I am going to visit my cousin.", te: "నేను మా కజిన్ ఇంటికి వెళ్ళబోతున్నాను.", extra: ["will"] },
    { en: "We are going to paint the house.", te: "మేము ఇంటికి రంగులు వేయించబోతున్నాం.", extra: ["will"] },
    { en: "She is going to cook biryani.", te: "ఆమె బిర్యానీ వండబోతోంది.", extra: ["are"] },
    { en: "Are you going to come?", te: "మీరు రాబోతున్నారా?", extra: ["Is"] },
    { en: "I am not going to go out.", te: "నేను బయటకు వెళ్ళబోవడం లేదు.", extra: ["don't"] },
    { en: "What are you going to do?", te: "మీరు ఏం చేయబోతున్నారు?", extra: ["will"] },
    { en: "He is going to retire soon.", te: "అతను త్వరలో రిటైర్ అవబోతున్నాడు.", extra: ["are"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Tell someone one plan for this weekend: I am going to …",
    te: "ఈ వారాంతానికి మీ ఒక ప్లాన్ ఎవరికైనా చెప్పండి: I am going to …",
  },
  words: [
    { en: "going to", te: "…బోతున్నాను (ప్లాన్)" },
    { en: "plan", te: "ప్రణాళిక, ప్లాన్" },
    { en: "paint", te: "రంగు వేయడం" },
    { en: "biryani", te: "బిర్యానీ" },
    { en: "retire", te: "రిటైర్ అవ్వడం" },
  ],
  grammar: ["going-to", "am-is-are"],
  topics: ["home", "family"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Going to for plans", te: "ప్లాన్‌కి going to" },
      body: {
        en: "For a plan you have already made, say am, is or are, then going to, then the action: I am going to visit my cousin. It is like వెళ్ళబోతున్నాను in Telugu.",
        te: "ముందే చేసుకున్న ప్లాన్ చెప్పడానికి am, is, are, తర్వాత going to, తర్వాత పని పదం: I am going to visit my cousin. ఇది తెలుగులో 'వెళ్ళబోతున్నాను' లాంటిది.",
      },
      bridge: {
        te: ["నేను", "మా కజిన్ ఇంటికి", "వెళ్ళబోతున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "am going to visit", role: "action" },
          { text: "my cousin", role: "what" },
        ],
      },
      examples: [
        { en: "I am going to visit my cousin.", te: "నేను మా కజిన్ ఇంటికి వెళ్ళబోతున్నాను." },
        { en: "She is going to cook biryani.", te: "ఆమె బిర్యానీ వండబోతోంది." },
        { en: "What are you going to do?", te: "మీరు ఏం చేయబోతున్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Am, is or are going to?", te: "am, is, are going to — ఏది?" },
      items: [
        {
          form: "I am going to",
          useFor: { en: "Your own plan.", te: "మీ ప్లాన్." },
          example: { en: "I am not going to go out.", te: "నేను బయటకు వెళ్ళబోవడం లేదు." },
        },
        {
          form: "he / she is going to",
          useFor: { en: "One person's plan.", te: "ఒక్కరి ప్లాన్." },
          example: { en: "He is going to retire soon.", te: "అతను త్వరలో రిటైర్ అవబోతున్నాడు." },
        },
        {
          form: "Are you going to …?",
          useFor: { en: "To ask about a plan.", te: "ప్లాన్ గురించి అడగడానికి." },
          example: { en: "Are you going to come?", te: "మీరు రాబోతున్నారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I going to visit my cousin.",
      right: "I am going to visit my cousin.",
      why: {
        en: "Do not leave out am, is or are.",
        te: "am, is, are ని వదిలేయకండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She is going to cooking biryani.",
      right: "She is going to cook biryani.",
      why: {
        en: "After going to, the plain action word: cook.",
        te: "going to తర్వాత మామూలు పని పదం: cook.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I going to visit my cousin.", "I am going to visit my cousin.", "I am go to visit my cousin."],
      answer: 1,
      why: {
        en: "I am going to + visit.",
        te: "I am going to తర్వాత visit.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "She ___ going to cook biryani.",
      te: "ఆమె బిర్యానీ వండబోతోంది.",
      options: ["is", "are", "am"],
      answer: 0,
      why: {
        en: "She + is.",
        te: "she తో is.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ask a friend about her plans for Sunday.", te: "ఆదివారం ఏం చేయబోతుందో మీ స్నేహితురాలిని అడగండి." },
      options: ["What are you going to do on Sunday?", "What you going to do on Sunday?", "What are you go to do on Sunday?"],
      answer: 0,
      why: {
        en: "What + are + you + going to + do.",
        te: "వరుస: What + are + you + going to + do.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "We are going to painting the house.",
      wrongIndex: 4,
      fix: "We are going to paint the house.",
      why: {
        en: "After going to, paint.",
        te: "going to తర్వాత paint.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks about your weekend. Say you are going to visit your cousin.",
        te: "మీ స్నేహితులు మీ వారాంతం గురించి అడుగుతున్నారు. మీ కజిన్ ఇంటికి వెళ్ళబోతున్నారని చెప్పండి.",
      },
      expected: ["I am going to visit my cousin."],
      options: ["I going to visit my cousin.", "I am going to visit my cousin.", "I am going to visiting my cousin."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask your neighbour if he is going to come to the function.",
        te: "ఫంక్షన్‌కి వస్తున్నారా అని పొరుగాయనను అడగండి.",
      },
      expected: ["Are you going to come?", "Are you coming?"],
      options: ["Are you going to come?", "You going to come?", "Are you going to coming?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Weekend plans", te: "వారాంతపు ప్లాన్స్" },
    scene: {
      en: "Your friend Ravi asks about your plans for the weekend.",
      te: "మీ స్నేహితుడు రవి మీ వారాంతపు ప్లాన్స్ గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Ravi (a friend)", te: "రవి (స్నేహితుడు)" },
    skills: [{ id: "plan", label: { en: "going to", te: "going to వాడకం" } }],
    turns: [
      {
        partner: "Any plans for the weekend?",
        te: "వారాంతానికి ఏమైనా ప్లాన్స్ ఉన్నాయా?",
        hint: { en: "Say: I am going to visit my cousin.", te: "ఇలా చెప్పండి: I am going to visit my cousin." },
        replies: [
          { say: "I am going to visit my cousin.", good: true, skill: "plan" },
          { say: "I going to visit my cousin.", good: false, skill: "plan" },
        ],
      },
      {
        partner: "Where does he live?",
        te: "అతను ఎక్కడ ఉంటాడు?",
        hint: { en: "Say: In Warangal. I am going by bus.", te: "ఇలా చెప్పండి: In Warangal. I am going by bus." },
        replies: [
          { say: "In Warangal. I am going by bus.", good: true, skill: "plan" },
          { say: "In Warangal. I am going in bus.", good: false, skill: "plan" },
        ],
      },
      {
        partner: "What are you going to do there?",
        te: "అక్కడ ఏం చేయబోతున్నారు?",
        hint: { en: "Say: We are going to see a film.", te: "ఇలా చెప్పండి: We are going to see a film." },
        replies: [
          { say: "We are going to see a film.", good: true, skill: "plan" },
          { say: "We are going to saw a film.", good: false, skill: "plan" },
        ],
      },
      {
        partner: "Nice! When are you coming back?",
        te: "బాగుంది! ఎప్పుడు తిరిగి వస్తారు?",
        hint: { en: "Say: I am coming back on Monday.", te: "ఇలా చెప్పండి: I am coming back on Monday." },
        replies: [
          { say: "I am coming back on Monday.", good: true, skill: "plan" },
          { say: "I am come back on Monday.", good: false, skill: "plan" },
        ],
      },
    ],
  },
};
