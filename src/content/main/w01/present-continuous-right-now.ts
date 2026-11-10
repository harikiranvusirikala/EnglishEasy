import type { Lesson } from "../../types";

/** Week 1, Day 4 (CURRICULUM §3, lightened 2026-11-09): am / is / are + verb-ing for now, and Are you …ing? I am not … is recognition only. */
export const day: Lesson = {
  id: "present-continuous-right-now",
  kind: "lesson",
  title: { en: "Right Now", te: "ఇప్పుడు" },
  subtitle: "Present continuous",
  summary: {
    en: "Say what is happening right now with am, is or are and a verb ending in -ing, and ask Are you coming?",
    te: "ఇప్పుడు జరుగుతున్న పని గురించి చెప్పడం నేర్చుకుందాం: am, is, are తో -ing verb. Are you coming? అని అడగడం కూడా.",
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
    { en: "She is sleeping.", te: "ఆవిడ నిద్రపోతున్నారు.", extra: ["sleep"] },
    { en: "They are watching TV.", te: "వాళ్లు TV చూస్తున్నారు.", extra: ["watch"] },
    { en: "He is talking on the phone.", te: "ఆయన ఫోన్‌లో మాట్లాడుతున్నారు.", extra: ["talk"] },
    { en: "I am reading the newspaper.", te: "నేను పేపర్ చదువుతున్నాను.", extra: ["read"] },
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
        { en: "She is sleeping.", te: "ఆవిడ నిద్రపోతున్నారు." },
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
        {
          form: "I am not + -ing",
          useFor: {
            en: "You will also hear the no form. Just understand it for now; you will practice it later.",
            te: "లేదు అనే రూపం కూడా వినిపిస్తుంది. ఇప్పటికి అర్థం చేసుకుంటే చాలు; తర్వాత practice చేస్తాం.",
          },
          example: { en: "I am not working now.", te: "నేను ఇప్పుడు పని చేయడం లేదు." },
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
      fixIt: "state-ing",
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
      fixIt: "be",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["She sleeping.", "She is sleeping.", "She is sleep."],
      answer: 1,
      why: {
        en: "For right now, use is with -ing.",
        te: "ఇప్పుడు జరుగుతున్న పనికి is తో -ing.",
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
        en: "They means many people, so use are.",
        te: "they అంటే చాలా మంది, కాబట్టి are.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: { en: "Which sentence is correct?", te: "ఏ వాక్యం సరైనది?" },
      options: ["I am knowing him.", "I know him.", "I knowing him."],
      answer: 1,
      why: {
        en: "Know does not take -ing: say know, not am knowing.",
        te: "know కి -ing రాదు: am knowing కాదు, know అనాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He is cook now.",
      wrongIndex: 2,
      fix: "He is cooking now.",
      why: {
        en: "After is, the action needs -ing.",
        te: "is తర్వాత verb కి -ing రావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
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
        te: "పక్కింటి వాళ్లు అడుగుతున్నారు: Are you coming? అవును అని ఇంగ్లీష్‌లో చెప్పండి.",
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
      en: "Your friend John calls and asks what you are doing. Say what is happening now.",
      te: "మీ స్నేహితుడు జాన్ ఫోన్ చేసి మీరు ఏం చేస్తున్నారని అడుగుతున్నారు. ఇప్పుడు జరుగుతున్న పని చెప్పండి.",
    },
    partner: { en: "John (a friend)", te: "జాన్ (స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "now", label: { en: "Saying what is happening now", te: "ఇప్పుడు జరుగుతున్న పని చెప్పడం" } }],
    turns: [
      {
        partner: "What are you doing?",
        te: "మీరు ఏం చేస్తున్నారు?",
        hint: { en: "Say that you are cooking right now.", te: "మీరు ఇప్పుడు వంట చేస్తున్నారని చెప్పండి." },
        replies: [
          { say: "I am cooking.", good: true, skill: "now" },
          { say: "I cook now.", good: false, skill: "now" },
          { say: "I am busy. Bye.", good: false, react: { en: "Oh! Sorry. Call me later, then.", te: "అయ్యో, sorry! సరే, తర్వాత ఫోన్ చేయండి." } },
        ],
      },
      {
        partner: "Oh, nice! What are you cooking?",
        te: "అరె, బాగుంది! ఏం వండుతున్నారు?",
        hint: { en: "Tell him what is on the stove: rice.", te: "పొయ్యి మీద ఏం ఉందో చెప్పండి: అన్నం." },
        replies: [
          { say: "I am cooking rice.", good: true, skill: "now" },
          { say: "I cooking rice.", good: false, skill: "now", fixIt: "be" },
          { say: "I am cook rice.", good: false, skill: "now" },
        ],
      },
      {
        partner: "Are you coming to the temple?",
        te: "మీరు గుడికి వస్తున్నారా?",
        hint: { en: "Say yes, and that you are on the way.", te: "అవును, వస్తున్నానని చెప్పండి." },
        replies: [
          { say: "Yes, I am coming.", good: true, skill: "now" },
          { say: "Yes, I coming.", good: false, skill: "now", fixIt: "be" },
          { say: "Yes, I am come.", good: false, skill: "now" },
        ],
      },
    ],
  },
};
