import type { Lesson } from "../../types";

/** Week 12, Day 4 (CURRICULUM §3): mixing the four tenses — every day, now, yesterday, tomorrow. */
export const day: Lesson = {
  id: "four-times-together",
  kind: "lesson",
  title: { en: "Every Day, Now, Yesterday, Tomorrow", te: "అన్ని కాలాలు" },
  subtitle: "four tenses together",
  summary: {
    en: "Learn to use the four tenses together: what you usually do, are doing now, did yesterday and will do tomorrow.",
    te: "నాలుగు tenses కలిపి వాడటం నేర్చుకుందాం: మామూలుగా ఏం చేస్తారు, ఇప్పుడు ఏం చేస్తున్నారు, నిన్న ఏం చేశారు, రేపు ఏం చేస్తారు.",
  },
  seo: {
    title: "Every Day, Now, Yesterday, Tomorrow: Four Tenses for Telugu Speakers",
    description:
      "Say I usually walk, Today I am resting, Yesterday I went out and Tomorrow I will visit Ravi. Simple lessons for Telugu speakers on tenses.",
  },
  pattern: [
    { text: "Yesterday", role: "when" },
    { text: "I", role: "who" },
    { text: "went out", role: "action" },
  ],
  core: [
    { en: "I usually walk.", te: "నేను మామూలుగా నడుస్తాను.", extra: ["walked"] },
    { en: "Today I am resting.", te: "ఈ రోజు నేను విశ్రాంతి తీసుకుంటున్నాను.", extra: ["rest"] },
    { en: "Yesterday I went out.", te: "నిన్న నేను బయటకు వెళ్ళాను.", extra: ["go"] },
    { en: "Tomorrow I will visit Ravi.", te: "రేపు నేను రవి ఇంటికి వెళ్తాను.", extra: ["visited"] },
    { en: "She usually cooks lunch.", te: "ఆవిడ మామూలుగా మధ్యాహ్నం వంట చేస్తారు.", extra: ["cooked"] },
    { en: "Right now she is sleeping.", te: "ఇప్పుడు ఆవిడ నిద్రపోతున్నారు.", extra: ["sleeps"] },
    { en: "Last week we went to Tirupati.", te: "పోయిన వారం మేము తిరుపతి వెళ్ళాం.", extra: ["go"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say four sentences about your week: usually, now, yesterday, tomorrow.",
    te: "మీ వారం గురించి నాలుగు వాక్యాలు చెప్పండి: usually, now, yesterday, tomorrow.",
  },
  words: [
    { en: "today", te: "ఈ రోజు" },
    { en: "week", te: "వారం" },
    { en: "out", te: "బయటకు" },
    { en: "tense", te: "కాలం (tense)" },
  ],
  grammar: ["present-simple", "present-continuous", "past-simple", "will"],
  topics: ["time", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Listen for the time word", te: "ఎప్పుడో చెప్పే మాట వినండి" },
      body: {
        en: "The time word tells you the form. Every day: I walk. Right now: I am walking. Yesterday: I walked. Tomorrow: I will walk. Hear the time word first, then choose the form.",
        te: "ఎప్పుడో చెప్పే మాటని బట్టి verb మారుతుంది. రోజూ: I walk. ఇప్పుడు: I am walking. నిన్న: I walked. రేపు: I will walk. ముందు ఆ మాట విని, తర్వాత verb ఎంచుకోండి.",
      },
      bridge: {
        te: ["నిన్న", "నేను", "బయటకు వెళ్ళాను"],
        en: [
          { text: "Yesterday", role: "when" },
          { text: "I", role: "who" },
          { text: "went out", role: "action" },
        ],
      },
      examples: [
        { en: "I usually walk.", te: "నేను మామూలుగా నడుస్తాను." },
        { en: "Today I am resting.", te: "ఈ రోజు నేను విశ్రాంతి తీసుకుంటున్నాను." },
        { en: "Tomorrow I will visit Ravi.", te: "రేపు నేను రవి ఇంటికి వెళ్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which time, which form", te: "ఎప్పుడు, ఏ verb" },
      items: [
        {
          form: "every day, usually → walk",
          useFor: { en: "Habits.", te: "అలవాట్లు." },
          example: { en: "She usually cooks lunch.", te: "ఆవిడ మామూలుగా మధ్యాహ్నం వంట చేస్తారు." },
        },
        {
          form: "now, today → am walking",
          useFor: { en: "Happening now.", te: "ఇప్పుడు జరుగుతున్నది." },
          example: { en: "Right now she is sleeping.", te: "ఇప్పుడు ఆవిడ నిద్రపోతున్నారు." },
        },
        {
          form: "yesterday, last week → walked",
          useFor: { en: "Finished in the past.", te: "అయిపోయినది (past)." },
          example: { en: "Last week we went to Tirupati.", te: "పోయిన వారం మేము తిరుపతి వెళ్ళాం." },
        },
        {
          form: "tomorrow, next week → will walk",
          useFor: { en: "In the future.", te: "రాబోయేది." },
          example: { en: "Tomorrow I will visit Ravi.", te: "రేపు నేను రవి ఇంటికి వెళ్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Yesterday I go out.",
      right: "Yesterday I went out.",
      why: {
        en: "Yesterday is past, so go becomes went: Yesterday I went out.",
        te: "నిన్న అంటే past, అందుకే go కాదు went: Yesterday I went out.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Tomorrow I visited Ravi.",
      right: "Tomorrow I will visit Ravi.",
      why: {
        en: "Tomorrow is still to come, so use will with the plain verb: Tomorrow I will visit Ravi.",
        te: "రేపు ఇంకా రాలేదు, అందుకే will, verb మామూలుగా: Tomorrow I will visit Ravi.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the sentence about yesterday.", te: "నిన్న గురించిన వాక్యం ఎంచుకోండి." },
      options: ["Yesterday I go out.", "Yesterday I went out.", "Yesterday I will go out."],
      answer: 1,
      why: {
        en: "Yesterday is over, so use the past form went: Yesterday I went out.",
        te: "నిన్న అయిపోయింది, అందుకే past form went: Yesterday I went out.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Right now she ___ sleeping.",
      te: "ఇప్పుడు ఆవిడ నిద్రపోతున్నారు.",
      options: ["is", "was", "will"],
      answer: 0,
      why: {
        en: "Right now means it is happening, so is with -ing: Right now she is sleeping.",
        te: "ఇప్పుడు జరుగుతోంది, అందుకే is తో -ing: Right now she is sleeping.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the sentence about tomorrow.", te: "రేపు గురించిన వాక్యం ఎంచుకోండి." },
      options: ["Tomorrow I will visit Ravi.", "Tomorrow I visited Ravi.", "Tomorrow I am visit Ravi."],
      answer: 0,
      why: {
        en: "Tomorrow is still to come, so say will visit: Tomorrow I will visit Ravi.",
        te: "రేపు ఇంకా రాలేదు, అందుకే will visit: Tomorrow I will visit Ravi.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Last week we go to Tirupati.",
      wrongIndex: 3,
      fix: "Last week we went to Tirupati.",
      why: {
        en: "Last week is past, so go becomes went: Last week we went to Tirupati.",
        te: "పోయిన వారం అంటే past, go కాదు went: Last week we went to Tirupati.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Say what you usually do in the morning: you walk.",
        te: "ఉదయం మామూలుగా ఏం చేస్తారో చెప్పండి: నడుస్తారు.",
      },
      expected: ["I usually walk in the morning.", "I usually walk."],
      options: ["I usually walk in the morning.", "I usually walked in the morning.", "I am usually walk in the morning."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say what you will do tomorrow: visit Ravi.",
        te: "రేపు ఏం చేస్తారో చెప్పండి: రవి ఇంటికి వెళ్తారు.",
      },
      expected: ["Tomorrow I will visit Ravi.", "I will visit Ravi tomorrow."],
      options: ["Tomorrow I will visit Ravi.", "Tomorrow I visited Ravi.", "Tomorrow I will visiting Ravi."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your week", te: "మీ వారం" },
    scene: {
      en: "Your friend Usha asks about your week: usually, now, yesterday and tomorrow.",
      te: "మీ స్నేహితురాలు ఉష మీ వారం గురించి అడుగుతున్నారు: మామూలుగా, ఇప్పుడు, నిన్న, రేపు.",
    },
    partner: { en: "Usha (a friend)", te: "ఉష (స్నేహితురాలు)" },
    skills: [
      { id: "every", label: { en: "Every day", te: "రోజూ" } },
      { id: "now", label: { en: "Right now", te: "ఇప్పుడు" } },
      { id: "past", label: { en: "Yesterday", te: "నిన్న" } },
      { id: "will", label: { en: "Tomorrow", te: "రేపు" } },
    ],
    turns: [
      {
        partner: "What do you usually do on Sundays?",
        te: "ఆదివారాలు మీరు మామూలుగా ఏం చేస్తారు?",
        hint: { en: "Say where you usually go on Sundays.", te: "ఆదివారం మామూలుగా ఎక్కడికి వెళ్తారో చెప్పండి." },
        replies: [
          { say: "I usually go to the temple.", good: true, skill: "every" },
          { say: "I usually went to the temple.", good: false, skill: "every" },
        ],
      },
      {
        partner: "What are you doing now?",
        te: "ఇప్పుడు ఏం చేస్తున్నారు?",
        hint: { en: "Say what you are cooking right now.", te: "ఇప్పుడు ఏం వండుతున్నారో చెప్పండి." },
        replies: [
          { say: "I am cooking lunch.", good: true, skill: "now" },
          { say: "I cooking lunch.", good: false, skill: "now", fixIt: "be" },
          {
            say: "Why do you ask so many questions?",
            good: false,
            skill: "now",
            react: { en: "Sorry! I just like talking with you.", te: "Sorry అండీ! మీతో మాట్లాడటం ఇష్టం, అంతే." },
          },
        ],
      },
      {
        partner: "What did you do yesterday?",
        te: "నిన్న ఏం చేశారు?",
        hint: { en: "Say where you went yesterday (past).", te: "నిన్న ఎక్కడికి వెళ్ళారో చెప్పండి (past)." },
        replies: [
          { say: "I went to the market.", good: true, skill: "past" },
          { say: "I go to the market.", good: false, skill: "past" },
        ],
      },
      {
        partner: "And tomorrow?",
        te: "మరి రేపు?",
        hint: { en: "Say who you will visit tomorrow.", te: "రేపు ఎవరింటికి వెళ్తారో చెప్పండి." },
        replies: [
          { say: "I will visit my cousin.", good: true, skill: "will" },
          { say: "I visited my cousin.", good: false, skill: "will" },
        ],
      },
    ],
  },
};
