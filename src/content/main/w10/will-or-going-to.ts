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
    { en: "I'm going to paint the house.", te: "నేను ఇంటికి రంగులు వేయబోతున్నాను.", extra: ["will"] },
    { en: "The phone is ringing. I'll answer it.", te: "ఫోన్ మోగుతోంది. నేను ఎత్తుతాను.", extra: ["going"] },
    { en: "We're going to Tirupati in May.", te: "మేము మేలో తిరుపతికి వెళ్తున్నాం.", extra: ["will"] },
    { en: "It's hot. I'll open the window.", te: "వేడిగా ఉంది. నేను కిటికీ తెరుస్తాను.", extra: ["going"] },
    { en: "He's going to start a shop.", te: "ఆయన ఒక షాప్ పెట్టబోతున్నారు.", extra: ["will"] },
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
        en: "Say will (I'll) for something you decide right now: The phone is ringing. I'll answer it. Say going to for a plan you made before: I'm going to paint the house. In We're going to Tirupati, going is just go: a trip planned before.",
        te: "ఇప్పుడే నిర్ణయించిన పనికి will (I'll): The phone is ringing. I'll answer it. ముందే చేసుకున్న ప్లాన్‌కి going to: I'm going to paint the house. We're going to Tirupati లో going అంటే వెళ్ళడమే: ముందే ప్లాన్ చేసుకున్న ప్రయాణం.",
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
        { en: "I'm going to paint the house.", te: "నేను ఇంటికి రంగులు వేయబోతున్నాను." },
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
          example: { en: "He's going to start a shop.", te: "ఆయన ఒక షాప్ పెట్టబోతున్నారు." },
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
      wrong: "I will going to visit Tirupati.",
      right: "I'm going to visit Tirupati.",
      why: {
        en: "Use will or going to, never both together: I'm going to visit Tirupati.",
        te: "will, going to రెండూ కలిపి వాడకూడదు, ఏదో ఒకటే: I'm going to visit Tirupati.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I'll to help you.",
      right: "I'll help you.",
      why: {
        en: "Will is followed by the plain verb, with no to: I'll help you.",
        te: "will తర్వాత to రాదు, నేరుగా verb వస్తుంది: I'll help you.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The phone rings now. What do you say?", te: "ఇప్పుడే ఫోన్ మోగింది. ఏమంటారు?" },
      options: ["I'll answer it.", "I answered it.", "I answer it."],
      answer: 0,
      why: {
        en: "The phone rings now, so you decide now and say I'll: I'll answer it.",
        te: "ఫోన్ ఇప్పుడే మోగింది, ఇప్పుడే నిర్ణయం, అందుకే I'll: I'll answer it.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We made a plan. We're ___ to visit Tirupati in May.",
      te: "మేము ప్లాన్ చేశాం. మేలో తిరుపతి వెళ్ళబోతున్నాం.",
      options: ["going", "will", "go"],
      answer: 0,
      why: {
        en: "You made this plan before, so use going to: We're going to visit Tirupati in May.",
        te: "ఈ ప్లాన్ ముందే చేసుకున్నారు, అందుకే going to: We're going to visit Tirupati in May.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Your friend's bag is heavy. Offer to help.", te: "మీ స్నేహితురాలి బ్యాగ్ బరువుగా ఉంది. సహాయం చేస్తానని చెప్పండి." },
      options: ["I'll carry it.", "I will to carry it.", "I carrying it."],
      answer: 0,
      why: {
        en: "An offer made right now takes I'll and the plain verb: I'll carry it.",
        te: "అప్పటికప్పుడు సహాయం చేస్తానంటే I'll, తర్వాత మామూలు verb: I'll carry it.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I will going to visit Tirupati.",
      wrongIndex: 1,
      fix: "I'm going to visit Tirupati.",
      why: {
        en: "A plan takes am going to, not will going to: I'm going to visit Tirupati.",
        te: "ప్లాన్‌కి will going to కాదు, am going to: I'm going to visit Tirupati.",
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
        te: "మీ ప్లాన్ స్నేహితులకు చెప్పండి: ఇంటికి రంగులు వేయబోతున్నారని.",
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
        hint: { en: "Tell her one plan you made already.", te: "మీరు ముందే అనుకున్న ఒక ప్లాన్ చెప్పండి." },
        replies: [
          { say: "I'm going to clean the house.", good: true, skill: "plan" },
          { say: "I'm going to cleaning the house.", good: false, skill: "plan" },
        ],
      },
      {
        partner: "Oh. I have no plans.",
        te: "ఓహ్. నాకు ఏ ప్లాన్స్ లేవు.",
        hint: { en: "Decide now to phone her later.", te: "తర్వాత ఆవిడకి ఫోన్ చేస్తానని ఇప్పుడే నిర్ణయించి చెప్పండి." },
        replies: [
          { say: "I'll call you in the evening.", good: true, skill: "now" },
          { say: "I'll call to you in the evening.", good: false, skill: "now" },
        ],
      },
      {
        partner: "Good! Let's see a film.",
        te: "బాగుంది! సినిమా చూద్దాం.",
        hint: { en: "Agree, and offer to get the tickets.", te: "సరే అని, టికెట్లు మీరే బుక్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "Okay, I'll book the tickets.", good: true, skill: "now" },
          { say: "Okay, I book the tickets.", good: false, skill: "now" },
          {
            say: "Okay. You book the tickets.",
            good: false,
            react: { en: "Oh! Okay, I'll do it, then.", te: "ఓ! సరే, అయితే నేనే బుక్ చేస్తాను." },
          },
        ],
      },
      {
        partner: "Great. I'll come at six.",
        te: "సరే. నేను ఆరు గంటలకు వస్తాను.",
        hint: { en: "Say okay, and goodbye till tomorrow.", te: "సరే అని, రేపు కలుద్దాం అని చెప్పండి." },
        replies: [
          { say: "Okay. See you tomorrow.", good: true },
          { say: "Okay. See you on tomorrow.", good: false },
        ],
      },
    ],
  },
};
