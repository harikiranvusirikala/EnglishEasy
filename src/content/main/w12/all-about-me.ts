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
    { text: "Kiran", role: "what" },
  ],
  core: [
    { en: "My name is Kiran.", te: "నా పేరు కిరణ్.", extra: ["am"] },
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
        en: "To talk about yourself, use short sentences, one idea each: My name is … I live in … Every day I … I like … I am learning English. Use your own name and town. Short sentences are easy to say and easy to follow.",
        te: "మీ గురించి చెప్పడానికి చిన్న వాక్యాలు వాడండి, ఒక్కోదానిలో ఒక విషయం: My name is … I live in … Every day I … I like … I am learning English. మీ సొంత పేరు, ఊరు చెప్పండి. చిన్న వాక్యాలు చెప్పడానికీ, వినడానికీ సులభం.",
      },
      bridge: {
        te: ["నా పేరు", "కిరణ్"],
        en: [
          { text: "My name", role: "who" },
          { text: "is", role: "action" },
          { text: "Kiran", role: "what" },
        ],
      },
      examples: [
        { en: "My name is Kiran.", te: "నా పేరు కిరణ్." },
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
      wrong: "Myself Kiran.",
      right: "My name is Kiran.",
      why: {
        en: "Myself is not used to give your name; say My name is Kiran, or I am Kiran.",
        te: "పేరు చెప్పడానికి myself వాడరు; My name is Kiran లేదా I am Kiran అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am having two brothers.",
      right: "I have two brothers.",
      why: {
        en: "For family and things you own, say I have, not I am having: I have two brothers.",
        te: "కుటుంబం, మీకు ఉన్నవి చెప్పడానికి am having కాదు, have: I have two brothers.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Myself Kiran.", "My name is Kiran.", "I am name Kiran."],
      answer: 1,
      why: {
        en: "Give your name with My name is, not Myself: My name is Kiran.",
        te: "పేరు My name is తో చెప్పండి, Myself తో కాదు: My name is Kiran.",
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
        en: "It is happening these days, so am with -ing: I am learning English now.",
        te: "ఈ మధ్య జరుగుతోంది, అందుకే am తో -ing: I am learning English now.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence is about every day?", te: "రోజూ జరిగేదాని గురించిన వాక్యం ఏది?" },
      options: ["I walk every morning.", "I am walking now.", "I walked yesterday."],
      answer: 0,
      why: {
        en: "For every day, use the plain verb, with no am or -ing: I walk every morning.",
        te: "రోజూ జరిగేదానికి verb మామూలుగా, am గానీ -ing గానీ లేకుండా: I walk every morning.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I am having two brothers.",
      wrongIndex: 2,
      fix: "I have two brothers.",
      why: {
        en: "Have for family is not an action, so no -ing: I have two brothers.",
        te: "కుటుంబం గురించి చెప్పే have కి -ing రాదు: I have two brothers.",
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
      expected: ["My name is Kiran.", "My name is Sai.", "I am Kiran."],
      options: ["Myself Kiran.", "My name is Kiran.", "Me Kiran."],
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
      en: "At a community meeting, Mary asks you to introduce yourself to everyone.",
      te: "కాలనీ మీటింగ్‌లో, అందరికీ మిమ్మల్ని పరిచయం చేసుకోమని మేరీ అడుగుతున్నారు.",
    },
    partner: { en: "Mary (colony leader)", te: "మేరీ (కాలనీ పెద్ద)" },
    skills: [{ id: "me", label: { en: "About me", te: "నా గురించి" } }],
    turns: [
      {
        partner: "Welcome! Please introduce yourself.",
        te: "స్వాగతం! మీ పరిచయం చెప్పండి.",
        hint: { en: "Say your name.", te: "మీ పేరు చెప్పండి." },
        replies: [
          { say: "My name is Kiran.", good: true, skill: "me" },
          { say: "Myself Kiran.", good: false, skill: "me" },
        ],
      },
      {
        partner: "Where do you live?",
        te: "మీరు ఎక్కడ ఉంటారు?",
        hint: { en: "Say your own area.", te: "మీరు ఉండే ఏరియా పేరు చెప్పండి." },
        replies: [
          { say: "I live in Gandhi Nagar.", good: true, skill: "me" },
          { say: "I lives in Gandhi Nagar.", good: false, skill: "me" },
          {
            say: "Why do you want to know?",
            good: false,
            skill: "me",
            react: { en: "Just to know our neighbours!", te: "మన పొరుగువాళ్ళెవరో తెలుసుకోవడానికి అంతే!" },
          },
        ],
      },
      {
        partner: "What do you like to do?",
        te: "మీకు ఏం చేయడం ఇష్టం?",
        hint: { en: "Say two things you like.", te: "మీకు ఇష్టమైన రెండు పనులు చెప్పండి." },
        replies: [
          { say: "I like cooking and music.", good: true, skill: "me" },
          { say: "I like cooking but music.", good: false, skill: "me" },
        ],
      },
      {
        partner: "What are you doing these days?",
        te: "ఈ మధ్య ఏం చేస్తున్నారు?",
        hint: { en: "Say what you are learning now.", te: "ఇప్పుడు ఏం నేర్చుకుంటున్నారో చెప్పండి." },
        replies: [
          { say: "I am learning English!", good: true, skill: "me" },
          { say: "I am learn English!", good: false, skill: "me" },
        ],
      },
      {
        partner: "Wonderful! Thank you, Kiran.",
        te: "చాలా బాగుంది! థాంక్యూ కిరణ్.",
        hint: { en: "Thank everyone.", te: "అందరికీ థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you, everyone.", good: true },
          { say: "Thanks you, everyone.", good: false },
        ],
      },
    ],
  },
};
