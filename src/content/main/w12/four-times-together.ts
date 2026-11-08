import type { Lesson } from "../../types";

/** Week 12, Day 4 (CURRICULUM §3): mixing the four tenses — every day, now, yesterday, tomorrow. */
export const day: Lesson = {
  id: "four-times-together",
  kind: "lesson",
  title: { en: "Every Day, Now, Yesterday, Tomorrow", te: "అన్ని కాలాలు" },
  subtitle: "four tenses together",
  summary: {
    en: "Learn to use the four tenses together: what you usually do, are doing now, did yesterday and will do tomorrow.",
    te: "నాలుగు కాలాలు కలిపి వాడటం నేర్చుకుందాం: సాధారణంగా ఏం చేస్తారు, ఇప్పుడు ఏం చేస్తున్నారు, నిన్న ఏం చేశారు, రేపు ఏం చేస్తారు.",
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
    { en: "I usually walk.", te: "నేను సాధారణంగా నడుస్తాను.", extra: ["walked"] },
    { en: "Today I am resting.", te: "ఈ రోజు నేను విశ్రాంతి తీసుకుంటున్నాను.", extra: ["rest"] },
    { en: "Yesterday I went out.", te: "నిన్న నేను బయటకు వెళ్ళాను.", extra: ["go"] },
    { en: "Tomorrow I will visit Ravi.", te: "రేపు నేను రవి ఇంటికి వెళ్తాను.", extra: ["visited"] },
    { en: "She usually cooks lunch.", te: "ఆమె సాధారణంగా మధ్యాహ్న భోజనం వండుతుంది.", extra: ["cooked"] },
    { en: "Right now she is sleeping.", te: "ఇప్పుడు ఆమె నిద్రపోతోంది.", extra: ["sleeps"] },
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
      heading: { en: "Listen for the time word", te: "సమయం పదం గమనించండి" },
      body: {
        en: "The time word tells you the form. Every day: I walk. Right now: I am walking. Yesterday: I walked. Tomorrow: I will walk. Hear the time word first, then choose the form.",
        te: "సమయం పదం బట్టి రూపం మారుతుంది. రోజూ: I walk. ఇప్పుడు: I am walking. నిన్న: I walked. రేపు: I will walk. ముందు సమయం పదం గమనించి, తర్వాత రూపం ఎంచుకోండి.",
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
        { en: "I usually walk.", te: "నేను సాధారణంగా నడుస్తాను." },
        { en: "Today I am resting.", te: "ఈ రోజు నేను విశ్రాంతి తీసుకుంటున్నాను." },
        { en: "Tomorrow I will visit Ravi.", te: "రేపు నేను రవి ఇంటికి వెళ్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which time, which form", te: "ఏ సమయానికి ఏ రూపం" },
      items: [
        {
          form: "every day, usually → walk",
          useFor: { en: "Habits.", te: "అలవాట్లు." },
          example: { en: "She usually cooks lunch.", te: "ఆమె సాధారణంగా మధ్యాహ్న భోజనం వండుతుంది." },
        },
        {
          form: "now, today → am walking",
          useFor: { en: "Happening now.", te: "ఇప్పుడు జరుగుతున్నది." },
          example: { en: "Right now she is sleeping.", te: "ఇప్పుడు ఆమె నిద్రపోతోంది." },
        },
        {
          form: "yesterday, last week → walked",
          useFor: { en: "Finished in the past.", te: "గతంలో అయిపోయినది." },
          example: { en: "Last week we went to Tirupati.", te: "పోయిన వారం మేము తిరుపతి వెళ్ళాం." },
        },
        {
          form: "tomorrow, next week → will walk",
          useFor: { en: "In the future.", te: "భవిష్యత్తులో." },
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
        en: "Yesterday is the past: went.",
        te: "నిన్న అంటే గతం: went.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Tomorrow I visited Ravi.",
      right: "Tomorrow I will visit Ravi.",
      why: {
        en: "Tomorrow is the future: will visit.",
        te: "రేపు అంటే భవిష్యత్తు: will visit.",
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
        en: "Past: went.",
        te: "గతం: went.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Right now she ___ sleeping.",
      te: "ఇప్పుడు ఆమె నిద్రపోతోంది.",
      options: ["is", "was", "will"],
      answer: 0,
      why: {
        en: "Now: is … -ing.",
        te: "ఇప్పుడు: is … -ing.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the sentence about tomorrow.", te: "రేపు గురించిన వాక్యం ఎంచుకోండి." },
      options: ["Tomorrow I will visit Ravi.", "Tomorrow I visited Ravi.", "Tomorrow I am visit Ravi."],
      answer: 0,
      why: {
        en: "Future: will visit.",
        te: "భవిష్యత్తు: will visit.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Last week we go to Tirupati.",
      wrongIndex: 3,
      fix: "Last week we went to Tirupati.",
      why: {
        en: "Last week is the past: went.",
        te: "పోయిన వారం అంటే గతం: went.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Say what you usually do in the morning: you walk.",
        te: "ఉదయం సాధారణంగా ఏం చేస్తారో చెప్పండి: నడుస్తారు.",
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
      te: "మీ స్నేహితురాలు ఉష మీ వారం గురించి అడుగుతోంది: సాధారణంగా, ఇప్పుడు, నిన్న, రేపు.",
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
        te: "ఆదివారాలు మీరు సాధారణంగా ఏం చేస్తారు?",
        hint: { en: "Say: I usually go to the temple.", te: "ఇలా చెప్పండి: I usually go to the temple." },
        replies: [
          { say: "I usually go to the temple.", good: true, skill: "every" },
          { say: "I usually went to the temple.", good: false, skill: "every" },
        ],
      },
      {
        partner: "What are you doing now?",
        te: "ఇప్పుడు ఏం చేస్తున్నారు?",
        hint: { en: "Say: I am cooking lunch.", te: "ఇలా చెప్పండి: I am cooking lunch." },
        replies: [
          { say: "I am cooking lunch.", good: true, skill: "now" },
          { say: "I cooking lunch.", good: false, skill: "now" },
        ],
      },
      {
        partner: "What did you do yesterday?",
        te: "నిన్న ఏం చేశారు?",
        hint: { en: "Say: I went to the market.", te: "ఇలా చెప్పండి: I went to the market." },
        replies: [
          { say: "I went to the market.", good: true, skill: "past" },
          { say: "I go to the market.", good: false, skill: "past" },
        ],
      },
      {
        partner: "And tomorrow?",
        te: "మరి రేపు?",
        hint: { en: "Say: I will visit my cousin.", te: "ఇలా చెప్పండి: I will visit my cousin." },
        replies: [
          { say: "I will visit my cousin.", good: true, skill: "will" },
          { say: "I visited my cousin.", good: false, skill: "will" },
        ],
      },
    ],
  },
};
