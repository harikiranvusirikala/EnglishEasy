import type { Lesson } from "../../types";

/** Week 1, Day 4 (CURRICULUM §3): am / is / are + verb-ing for what is happening now. */
export const day: Lesson = {
  id: "present-continuous-right-now",
  kind: "lesson",
  title: { en: "Right Now", te: "ఇప్పుడు" },
  subtitle: "Present continuous",
  summary: {
    en: "Say what is happening right now. Use am, is or are with a verb ending in -ing.",
    te: "ఇప్పుడు జరుగుతున్న పని గురించి చెప్పడం నేర్చుకుందాం. am, is, are తో -ing verb వాడతాం.",
  },
  seo: {
    title: "Present Continuous in English for Telugu Speakers: Right Now",
    description:
      "Learn to say what is happening now: I am cooking, she is sleeping. Present continuous with simple examples and Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "am cooking", role: "action" },
    { text: "now", role: "when" },
  ],
  core: [
    { en: "I am cooking.", te: "నేను వంట చేస్తున్నాను.", extra: ["cook"] },
    { en: "She is sleeping.", te: "ఆమె నిద్రపోతోంది.", extra: ["sleep"] },
    { en: "They are watching TV.", te: "వాళ్లు TV చూస్తున్నారు.", extra: ["watch"] },
    { en: "He is talking on the phone.", te: "అతను ఫోన్‌లో మాట్లాడుతున్నాడు.", extra: ["talk"] },
    { en: "I am not working now.", te: "నేను ఇప్పుడు పని చేయడం లేదు.", extra: ["no"] },
    { en: "Are you coming?", te: "మీరు వస్తున్నారా?", extra: ["Is"] },
    { en: "Yes, I am coming.", te: "అవును, వస్తున్నాను.", extra: ["do"] },
  ],
  key: [0, 1, 4, 5],
  tryToday: {
    en: "Say what you are doing right now. For example: I am sitting. I am reading. I am drinking tea.",
    te: "మీరు ఇప్పుడు ఏం చేస్తున్నారో చెప్పండి. ఉదాహరణ: I am sitting. I am reading. I am drinking tea.",
  },
  words: [
    { en: "cook", te: "వంట చేయడం" },
    { en: "sleep", te: "నిద్రపోవడం" },
    { en: "phone", te: "ఫోన్" },
    { en: "now", te: "ఇప్పుడు" },
    { en: "TV", te: "టీవీ" },
  ],
  grammar: ["present-continuous", "yes-no-questions"],
  topics: ["home", "phone", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What is happening now", te: "ఇప్పుడు జరుగుతున్న పని" },
      body: {
        en: "Use am, is or are and a verb with -ing for something happening right now. I am cooking. She is sleeping. They are watching TV.",
        te: "ఇప్పుడు జరుగుతున్న పనికి am, is, are తో పాటు -ing verb వాడతాం. I am cooking. She is sleeping. They are watching TV.",
      },
      bridge: {
        te: ["నేను", "వంట చేస్తున్నాను", "ఇప్పుడు"],
        en: [
          { text: "I", role: "who" },
          { text: "am cooking", role: "action" },
          { text: "now", role: "when" },
        ],
      },
      examples: [
        { en: "I am cooking.", te: "నేను వంట చేస్తున్నాను." },
        { en: "She is sleeping.", te: "ఆమె నిద్రపోతోంది." },
        { en: "They are watching TV.", te: "వాళ్లు TV చూస్తున్నారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Every day or right now?", te: "రోజూ లేదా ఇప్పుడు?" },
      items: [
        {
          form: "every day → I walk",
          useFor: { en: "For habits, use the present simple.", te: "అలవాట్లకు present simple వాడాలి." },
          example: { en: "I walk every morning.", te: "నేను ప్రతి ఉదయం నడుస్తాను." },
        },
        {
          form: "right now → I am walking",
          useFor: { en: "For this moment, use am, is or are with -ing.", te: "ఇప్పుడు జరుగుతున్న పనికి am, is, are తో -ing వాడాలి." },
          example: { en: "I am cooking.", te: "నేను వంట చేస్తున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Now I cook.",
      right: "I am cooking now.",
      why: {
        en: "For something happening now, use am with -ing: I am cooking.",
        te: "ఇప్పుడు జరుగుతున్న పనికి am తో -ing వాడాలి: I am cooking.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am knowing him.",
      right: "I know him.",
      why: {
        en: "Some verbs, like know, do not use -ing. Say: I know him.",
        te: "know లాంటి కొన్ని verbs కి -ing రాదు. ఇలా చెప్పాలి: I know him.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["She sleeping.", "She is sleeping.", "She sleeps now."],
      answer: 1,
      why: {
        en: "Right now: is + sleeping.",
        te: "ఇప్పుడు జరుగుతున్న పని: is + sleeping.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "They ___ watching TV.",
      te: "వాళ్లు TV చూస్తున్నారు.",
      options: ["is", "are", "am"],
      answer: 1,
      why: {
        en: "With they, use are.",
        te: "they తో are వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence is correct?", te: "ఏ వాక్యం సరైనది?" },
      options: ["I am knowing him.", "I know him.", "I knowing him."],
      answer: 1,
      why: {
        en: "Know does not use -ing. Say: I know him.",
        te: "know కి -ing రాదు. ఇలా చెప్పాలి: I know him.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She is cook now.",
      wrongIndex: 2,
      fix: "She is cooking now.",
      why: {
        en: "After is, the action needs -ing: cooking.",
        te: "is తర్వాత verb కి -ing రావాలి: cooking.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend calls: What are you doing? Say that you are cooking, in English.",
        te: "స్నేహితులు ఫోన్ చేసి అడుగుతున్నారు: What are you doing? మీరు వంట చేస్తున్నారని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["I am cooking.", "I am cooking now."],
      options: ["I cooking.", "I am cooking.", "I cook now."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A neighbour asks: Are you coming? Say yes, in English.",
        te: "పొరుగు వాళ్లు అడుగుతున్నారు: Are you coming? అవును అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["Yes, I am.", "Yes, I am coming."],
      options: ["Yes, I do.", "Yes, I am.", "Yes, I coming."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call from a friend", te: "స్నేహితుల ఫోన్" },
    scene: {
      en: "A friend calls and asks what you are doing. Say what is happening now.",
      te: "స్నేహితులు ఫోన్ చేసి మీరు ఏం చేస్తున్నారని అడుగుతున్నారు. ఇప్పుడు జరుగుతున్న పని చెప్పండి.",
    },
    partner: { en: "Friend", te: "స్నేహితుడు" },
    skills: [{ id: "now", label: { en: "Saying what is happening now", te: "ఇప్పుడు జరుగుతున్న పని చెప్పడం" } }],
    turns: [
      {
        partner: "What are you doing?",
        te: "నువ్వు ఏం చేస్తున్నావు?",
        hint: { en: "Say: I am cooking.", te: "ఇలా చెప్పండి: I am cooking." },
        replies: [
          { say: "I am cooking.", good: true, skill: "now" },
          { say: "I cooking.", good: false, skill: "now" },
          { say: "I cook now.", good: false, skill: "now" },
        ],
      },
      {
        partner: "Are you watching TV?",
        te: "నువ్వు TV చూస్తున్నావా?",
        hint: { en: "Say no: No, I am not.", te: "కాదు అని చెప్పండి: No, I am not." },
        replies: [
          { say: "No, I am not.", good: true, skill: "now" },
          { say: "No, I don't.", good: false, skill: "now" },
          { say: "No, I not watching.", good: false, skill: "now" },
        ],
      },
      {
        partner: "Are you coming to the temple?",
        te: "నువ్వు గుడికి వస్తున్నావా?",
        hint: { en: "Say: Yes, I am coming.", te: "ఇలా చెప్పండి: Yes, I am coming." },
        replies: [
          { say: "Yes, I am coming.", good: true, skill: "now" },
          { say: "Yes, I coming.", good: false, skill: "now" },
          { say: "Yes, I am come.", good: false, skill: "now" },
        ],
      },
    ],
  },
};
