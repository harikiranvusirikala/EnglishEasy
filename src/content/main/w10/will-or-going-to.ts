import type { Lesson } from "../../types";

/** Week 10, Day 2 (CURRICULUM §3): will or going to? (When do I use this?) — decided now vs planned before. */
export const day: Lesson = {
  id: "will-or-going-to",
  kind: "lesson",
  title: { en: "Will or Going To?", te: "will ఆ, going to ఆ?" },
  subtitle: "will / going to",
  summary: {
    en: "Learn when to say will (decided now) and when to say going to (planned before).",
    te: "will (ఇప్పుడే నిర్ణయించినది) ఎప్పుడు, going to (ముందే ప్లాన్ చేసినది) ఎప్పుడు అనాలో నేర్చుకుందాం.",
  },
  seo: {
    title: "Will or Going To? in English for Telugu Speakers",
    description:
      "Say I'll help you (decided now) and I'm going to paint the house (planned). Simple lessons for Telugu speakers on will and going to.",
  },
  pattern: [
    { text: "I'll", role: "who" },
    { text: "help", role: "action" },
    { text: "you", role: "what" },
  ],
  core: [
    { en: "I'll help you.", te: "నేను మీకు సహాయం చేస్తాను.", extra: ["going"] },
    { en: "I'm going to paint the house.", te: "నేను ఇంటికి రంగులు వేయించబోతున్నాను.", extra: ["will"] },
    { en: "The phone is ringing. I'll answer it.", te: "ఫోన్ మోగుతోంది. నేను ఎత్తుతాను.", extra: ["going"] },
    { en: "We're going to Tirupati in May.", te: "మేము మేలో తిరుపతికి వెళ్తున్నాం.", extra: ["will"] },
    { en: "It's hot. I'll open the window.", te: "వేడిగా ఉంది. నేను కిటికీ తెరుస్తాను.", extra: ["going"] },
    { en: "He's going to start a shop.", te: "అతను ఒక షాప్ పెట్టబోతున్నాడు.", extra: ["will"] },
    { en: "Wait, I'll get some water.", te: "ఆగండి, నేను నీళ్ళు తెస్తాను.", extra: ["going"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say one plan with going to, and one quick decision with I'll.",
    te: "going to తో ఒక ప్లాన్, I'll తో ఒక వెంటనే తీసుకున్న నిర్ణయం చెప్పండి.",
  },
  words: [
    { en: "decide", te: "నిర్ణయించడం" },
    { en: "answer", te: "ఫోన్ ఎత్తడం, జవాబు చెప్పడం" },
    { en: "ring", te: "మోగడం" },
    { en: "get", te: "తేవడం, తీసుకురావడం" },
    { en: "holiday", te: "సెలవు" },
  ],
  grammar: ["will", "going-to"],
  topics: ["home", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Decided now, or planned before?", te: "ఇప్పుడే నిర్ణయమా, ముందే ప్లానా?" },
      body: {
        en: "Say will (I'll) for something you decide right now: The phone is ringing. I'll answer it. Say going to for a plan you made before: I'm going to paint the house.",
        te: "ఇప్పుడే నిర్ణయించిన పనికి will (I'll): The phone is ringing. I'll answer it. ముందే చేసుకున్న ప్లాన్‌కి going to: I'm going to paint the house.",
      },
      bridge: {
        te: ["నేను", "మీకు సహాయం", "చేస్తాను"],
        en: [
          { text: "I'll", role: "who" },
          { text: "help", role: "action" },
          { text: "you", role: "what" },
        ],
      },
      examples: [
        { en: "The phone is ringing. I'll answer it.", te: "ఫోన్ మోగుతోంది. నేను ఎత్తుతాను." },
        { en: "I'm going to paint the house.", te: "నేను ఇంటికి రంగులు వేయించబోతున్నాను." },
        { en: "Wait, I'll get some water.", te: "ఆగండి, నేను నీళ్ళు తెస్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "When do I use this?", te: "ఏది ఎప్పుడు వాడాలి?" },
      items: [
        {
          form: "will (I'll)",
          useFor: { en: "A decision you make right now.", te: "ఇప్పుడే తీసుకునే నిర్ణయం." },
          example: { en: "It's hot. I'll open the window.", te: "వేడిగా ఉంది. నేను కిటికీ తెరుస్తాను." },
        },
        {
          form: "going to",
          useFor: { en: "A plan you made before.", te: "ముందే చేసుకున్న ప్లాన్." },
          example: { en: "He's going to start a shop.", te: "అతను ఒక షాప్ పెట్టబోతున్నాడు." },
        },
        {
          form: "will for offers",
          useFor: { en: "Offering help, right now.", te: "అప్పటికప్పుడు సహాయం చేస్తానని చెప్పడం." },
          example: { en: "I'll help you.", te: "నేను మీకు సహాయం చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I will going to Tirupati.",
      right: "I'm going to Tirupati.",
      why: {
        en: "Do not mix will and going. Use one of them.",
        te: "will, going కలపకండి. ఏదో ఒకటి వాడండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I'll to help you.",
      right: "I'll help you.",
      why: {
        en: "No to after will.",
        te: "will తర్వాత to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The phone rings now. What do you say?", te: "ఇప్పుడే ఫోన్ మోగింది. ఏమంటారు?" },
      options: ["I'll answer it.", "I answered it.", "I answer it yesterday."],
      answer: 0,
      why: {
        en: "A decision right now: I'll.",
        te: "ఇప్పుడే నిర్ణయం: I'll.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We made a plan. We're ___ to Tirupati in May.",
      te: "మేము ప్లాన్ చేశాం. మేలో తిరుపతికి వెళ్తున్నాం.",
      options: ["going", "will", "go"],
      answer: 0,
      why: {
        en: "A plan made before: going to.",
        te: "ముందే చేసిన ప్లాన్: going to.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Your friend's bag is heavy. Offer to help.", te: "మీ స్నేహితురాలి బ్యాగ్ బరువుగా ఉంది. సహాయం చేస్తానని చెప్పండి." },
      options: ["I'll carry it.", "I carry it yesterday.", "I will carrying it."],
      answer: 0,
      why: {
        en: "An offer right now: I'll carry it.",
        te: "అప్పటికప్పుడు సహాయం: I'll carry it.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I will going to Tirupati.",
      wrongIndex: 1,
      fix: "I'm going to Tirupati.",
      why: {
        en: "Use am going, not will going.",
        te: "will going కాదు, am going.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your guest is thirsty. Say you will get some water.",
        te: "మీ అతిథికి దాహంగా ఉంది. నీళ్ళు తెస్తానని చెప్పండి.",
      },
      expected: ["I'll get some water.", "Wait, I'll get some water.", "I will get some water."],
      options: ["I'll get some water.", "I'll getting some water.", "I getting some water."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell a friend your plan: you are going to paint the house.",
        te: "మీ ప్లాన్ స్నేహితులకు చెప్పండి: ఇంటికి రంగులు వేయించబోతున్నారు.",
      },
      expected: ["I'm going to paint the house.", "I am going to paint the house."],
      options: ["I'm going to paint the house.", "I will going to paint the house.", "I'm going to painting the house."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A holiday tomorrow", te: "రేపు సెలవు" },
    scene: {
      en: "Tomorrow is a holiday. Talk with your friend Sita about your plans and decide what to do.",
      te: "రేపు సెలవు. మీ ప్లాన్స్ గురించి మీ స్నేహితురాలు సీతతో మాట్లాడి, ఏం చేయాలో నిర్ణయించుకోండి.",
    },
    partner: { en: "Sita (a friend)", te: "సీత (స్నేహితురాలు)" },
    skills: [
      { id: "plan", label: { en: "going to (plans)", te: "going to (ప్లాన్స్)" } },
      { id: "now", label: { en: "I'll (decided now)", te: "I'll (ఇప్పుడే నిర్ణయం)" } },
    ],
    turns: [
      {
        partner: "Tomorrow is a holiday!",
        te: "రేపు సెలవు!",
        hint: { en: "Say your plan: I'm going to clean the house.", te: "మీ ప్లాన్ చెప్పండి: I'm going to clean the house." },
        replies: [
          { say: "I'm going to clean the house.", good: true, skill: "plan" },
          { say: "I'm going to cleaning the house.", good: false, skill: "plan" },
        ],
      },
      {
        partner: "Oh. I have no plans.",
        te: "ఓహ్. నాకు ఏ ప్లాన్స్ లేవు.",
        hint: { en: "Decide now: I'll call you in the evening.", te: "ఇప్పుడే నిర్ణయించండి: I'll call you in the evening." },
        replies: [
          { say: "I'll call you in the evening.", good: true, skill: "now" },
          { say: "I'll calling you in the evening.", good: false, skill: "now" },
        ],
      },
      {
        partner: "Good! Let's see a film.",
        te: "బాగుంది! సినిమా చూద్దాం.",
        hint: { en: "Decide now: Okay, I'll book the tickets.", te: "ఇప్పుడే నిర్ణయించండి: Okay, I'll book the tickets." },
        replies: [
          { say: "Okay, I'll book the tickets.", good: true, skill: "now" },
          { say: "Okay, I'll booking the tickets.", good: false, skill: "now" },
        ],
      },
      {
        partner: "Great. I'll come at six.",
        te: "సరే. నేను ఆరు గంటలకు వస్తాను.",
        hint: { en: "Say: Okay. See you tomorrow.", te: "ఇలా చెప్పండి: Okay. See you tomorrow." },
        replies: [
          { say: "Okay. See you tomorrow.", good: true },
          { say: "Okay. Seeing you tomorrow.", good: false },
        ],
      },
    ],
  },
};
