import type { Lesson } from "../../types";

/** Week 12, Day 3 (CURRICULUM §3): speaking for one minute about yourself, in short sentences. */
export const day: Lesson = {
  id: "all-about-me",
  kind: "lesson",
  title: { en: "All About Me", te: "నా గురించి" },
  subtitle: "speaking for one minute",
  summary: {
    en: "Learn to talk about yourself for one minute with short, clear sentences.",
    te: "చిన్న, స్పష్టమైన వాక్యాలతో మీ గురించి ఒక నిమిషం మాట్లాడటం నేర్చుకుందాం.",
  },
  seo: {
    title: "All About Me: Introducing Yourself in English for Telugu Speakers",
    description:
      "Say My name is …, I live in …, Every day I … and I am learning English. Simple lessons for Telugu speakers on introducing yourself.",
  },
  pattern: [
    { text: "My name", role: "who" },
    { text: "is", role: "action" },
    { text: "Lakshmi", role: "what" },
  ],
  core: [
    { en: "My name is Lakshmi.", te: "నా పేరు లక్ష్మి.", extra: ["am"] },
    { en: "I live in Vijayawada.", te: "నేను విజయవాడలో ఉంటాను.", extra: ["at"] },
    { en: "Every day I walk in the morning.", te: "నేను రోజూ ఉదయం నడుస్తాను.", extra: ["walking"] },
    { en: "I like cooking and music.", te: "నాకు వంట, సంగీతం ఇష్టం.", extra: ["but"] },
    { en: "I am sixty-five years old.", te: "నా వయసు అరవై ఐదు.", extra: ["have"] },
    { en: "I have two brothers and a sister.", te: "నాకు ఇద్దరు అన్నదమ్ములు, ఒక చెల్లెలు ఉన్నారు.", extra: ["has"] },
    { en: "I am learning English now.", te: "నేను ఇప్పుడు ఇంగ్లీష్ నేర్చుకుంటున్నాను.", extra: ["learn"] },
  ],
  key: [0, 1, 2, 6],
  tryToday: {
    en: "Talk about yourself for one minute in English: name, town, every day, likes, now.",
    te: "మీ గురించి ఒక నిమిషం ఇంగ్లీష్‌లో మాట్లాడండి: పేరు, ఊరు, రోజూ ఏం చేస్తారు, ఏం ఇష్టం, ఇప్పుడు ఏం చేస్తున్నారు.",
  },
  words: [
    { en: "introduce", te: "పరిచయం చేయడం" },
    { en: "myself", te: "నా గురించి, నన్ను" },
    { en: "learn", te: "నేర్చుకోవడం" },
    { en: "community", te: "సమాజం, కాలనీ" },
    { en: "everyone", te: "అందరూ" },
  ],
  grammar: ["word-order", "present-simple", "present-continuous", "am-is-are"],
  topics: ["people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Short sentences, one idea each", te: "చిన్న వాక్యాలు, ఒక్కోదానిలో ఒక విషయం" },
      body: {
        en: "To talk about yourself, use short sentences, one idea each: My name is … I live in … Every day I … I like … I am learning English. Short sentences are easy to say and easy to follow.",
        te: "మీ గురించి చెప్పడానికి చిన్న వాక్యాలు వాడండి, ఒక్కోదానిలో ఒక విషయం: My name is … I live in … Every day I … I like … I am learning English. చిన్న వాక్యాలు చెప్పడానికీ, వినడానికీ సులభం.",
      },
      bridge: {
        te: ["నా పేరు", "లక్ష్మి"],
        en: [
          { text: "My name", role: "who" },
          { text: "is", role: "action" },
          { text: "Lakshmi", role: "what" },
        ],
      },
      examples: [
        { en: "My name is Lakshmi.", te: "నా పేరు లక్ష్మి." },
        { en: "Every day I walk in the morning.", te: "నేను రోజూ ఉదయం నడుస్తాను." },
        { en: "I am learning English now.", te: "నేను ఇప్పుడు ఇంగ్లీష్ నేర్చుకుంటున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Building your minute", te: "మీ ఒక్క నిమిషం" },
      items: [
        {
          form: "who you are",
          useFor: { en: "Name, age, town.", te: "పేరు, వయసు, ఊరు." },
          example: { en: "I am sixty-five years old.", te: "నా వయసు అరవై ఐదు." },
        },
        {
          form: "every day (present)",
          useFor: { en: "What you do every day, what you like.", te: "రోజూ ఏం చేస్తారు, ఏం ఇష్టం." },
          example: { en: "I like cooking and music.", te: "నాకు వంట, సంగీతం ఇష్టం." },
        },
        {
          form: "now (am … -ing)",
          useFor: { en: "What you are doing these days.", te: "ఈ మధ్య ఏం చేస్తున్నారు." },
          example: { en: "I am learning English now.", te: "నేను ఇప్పుడు ఇంగ్లీష్ నేర్చుకుంటున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Myself Lakshmi.",
      right: "My name is Lakshmi.",
      why: {
        en: "Say My name is …, or I am …",
        te: "My name is … లేదా I am … అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am having two brothers.",
      right: "I have two brothers.",
      why: {
        en: "For family and things you have, say I have.",
        te: "కుటుంబం, మీకు ఉన్నవి చెప్పడానికి I have.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Myself Lakshmi.", "My name is Lakshmi.", "I am name Lakshmi."],
      answer: 1,
      why: {
        en: "My name is Lakshmi.",
        te: "My name is Lakshmi అనాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I am ___ English now.",
      te: "నేను ఇప్పుడు ఇంగ్లీష్ నేర్చుకుంటున్నాను.",
      options: ["learning", "learn", "learned"],
      answer: 0,
      why: {
        en: "Now: am learning.",
        te: "ఇప్పుడు: am learning.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence is about every day?", te: "రోజూ జరిగేదాని గురించిన వాక్యం ఏది?" },
      options: ["I walk every morning.", "I am walking now.", "I walked yesterday."],
      answer: 0,
      why: {
        en: "Every day: I walk.",
        te: "రోజూ: I walk.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I am having two brothers.",
      wrongIndex: 2,
      fix: "I have two brothers.",
      why: {
        en: "Say I have, not I am having.",
        te: "I am having కాదు, I have.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At a community meeting, say your name.",
        te: "కాలనీ మీటింగ్‌లో మీ పేరు చెప్పండి.",
      },
      expected: ["My name is Lakshmi.", "My name is Ramana.", "I am Lakshmi."],
      options: ["Myself Lakshmi.", "My name is Lakshmi.", "Me Lakshmi."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say what you are learning these days.",
        te: "ఈ మధ్య ఏం నేర్చుకుంటున్నారో చెప్పండి.",
      },
      expected: ["I am learning English.", "I am learning English now."],
      options: ["I am learning English.", "I learning English.", "I am learn English."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Introduce yourself", te: "మిమ్మల్ని పరిచయం చేసుకోండి" },
    scene: {
      en: "At a community meeting, Mohan asks you to introduce yourself to everyone.",
      te: "కాలనీ మీటింగ్‌లో, అందరికీ మిమ్మల్ని పరిచయం చేసుకోమని మోహన్ అడుగుతున్నారు.",
    },
    partner: { en: "Mohan (colony leader)", te: "మోహన్ (కాలనీ పెద్ద)" },
    skills: [{ id: "me", label: { en: "About me", te: "నా గురించి" } }],
    turns: [
      {
        partner: "Welcome! Please introduce yourself.",
        te: "స్వాగతం! మీ పరిచయం చెప్పండి.",
        hint: { en: "Say: My name is Padma.", te: "ఇలా చెప్పండి: My name is Padma." },
        replies: [
          { say: "My name is Padma.", good: true, skill: "me" },
          { say: "Myself Padma.", good: false, skill: "me" },
        ],
      },
      {
        partner: "Where do you live?",
        te: "మీరు ఎక్కడ ఉంటారు?",
        hint: { en: "Say: I live in Gandhi Nagar.", te: "ఇలా చెప్పండి: I live in Gandhi Nagar." },
        replies: [
          { say: "I live in Gandhi Nagar.", good: true, skill: "me" },
          { say: "I lives in Gandhi Nagar.", good: false, skill: "me" },
        ],
      },
      {
        partner: "What do you like to do?",
        te: "మీకు ఏం చేయడం ఇష్టం?",
        hint: { en: "Say: I like cooking and music.", te: "ఇలా చెప్పండి: I like cooking and music." },
        replies: [
          { say: "I like cooking and music.", good: true, skill: "me" },
          { say: "I like cooking but music.", good: false, skill: "me" },
        ],
      },
      {
        partner: "What are you doing these days?",
        te: "ఈ మధ్య ఏం చేస్తున్నారు?",
        hint: { en: "Say: I am learning English!", te: "ఇలా చెప్పండి: I am learning English!" },
        replies: [
          { say: "I am learning English!", good: true, skill: "me" },
          { say: "I am learn English!", good: false, skill: "me" },
        ],
      },
      {
        partner: "Wonderful! Thank you, Padma.",
        te: "చాలా బాగుంది! థాంక్యూ పద్మ.",
        hint: { en: "Say: Thank you, everyone.", te: "ఇలా చెప్పండి: Thank you, everyone." },
        replies: [
          { say: "Thank you, everyone.", good: true },
          { say: "Thanks you, everyone.", good: false },
        ],
      },
    ],
  },
};
