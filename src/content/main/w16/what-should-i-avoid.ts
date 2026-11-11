import type { Lesson } from "../../types";

/** Week 16, Day 5 (CURRICULUM §4): asking the doctor about food, walking and rest — What should I avoid? Can I walk every day? */
export const day: Lesson = {
  id: "what-should-i-avoid",
  kind: "lesson",
  title: { en: "What Should I Avoid?", te: "ఏమి మానాలి?" },
  subtitle: "What should I eat? Can I walk?",
  summary: {
    en: "Learn to ask the doctor about food and exercise: What should I avoid? Can I walk every day?",
    te: "తిండి, వ్యాయామం గురించి డాక్టర్‌ని అడగడం నేర్చుకుందాం: What should I avoid? Can I walk every day?",
  },
  seo: {
    title: "Asking the Doctor About Food in English for Telugu Speakers",
    description:
      "Ask What should I avoid? and Can I walk every day? Simple lessons for Telugu speakers on asking the doctor about food and exercise.",
  },
  pattern: [
    { text: "What", role: "what" },
    { text: "should", role: "action" },
    { text: "I", role: "who" },
    { text: "avoid?", role: "action" },
  ],
  core: [
    { en: "What should I avoid?", te: "నేను ఏమేం మానేయాలి?", extra: ["avoiding"] },
    { en: "Can I walk every day?", te: "నేను రోజూ నడవొచ్చా?", extra: ["walking"] },
    { en: "Avoid sweets and fried food.", te: "స్వీట్లు, నూనెలో వేయించినవి మానేయండి.", extra: ["to"] },
    { en: "Is rice okay for me?", te: "నేను అన్నం తినడం పర్వాలేదా?", extra: ["are"] },
    { en: "Walk for thirty minutes every day.", te: "రోజూ అరగంట నడవండి.", extra: ["since"] },
    { en: "Eat less salt and more vegetables.", te: "ఉప్పు తక్కువ, కూరగాయలు ఎక్కువ తినండి.", extra: ["salts"] },
    { en: "What exercise is good for me?", te: "నాకు ఏ వ్యాయామం మంచిది?", extra: ["to"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Name one food you should eat less of, and one you should eat more of.",
    te: "మీరు తక్కువ తినాల్సిన ఒక ఆహారం, ఎక్కువ తినాల్సిన ఒక ఆహారం ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "avoid", te: "మానేయడం, దూరంగా ఉండటం" },
    { en: "fried", te: "నూనెలో వేయించిన" },
    { en: "sweets", te: "స్వీట్లు" },
    { en: "exercise", te: "వ్యాయామం" },
    { en: "diet", te: "తినే తిండి, డైట్" },
  ],
  grammar: ["should-must-have-to", "can-could", "imperatives"],
  topics: ["health", "doctor", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for advice", te: "సలహా అడగడం" },
      body: {
        en: "Ask the doctor with should or can: What should I avoid? Can I walk every day? The doctor answers with simple instructions: Avoid sweets. Walk for thirty minutes.",
        te: "డాక్టర్‌ని should లేదా can తో అడగండి: What should I avoid? Can I walk every day? డాక్టర్ నేరుగా చెప్తారు: Avoid sweets. Walk for thirty minutes.",
      },
      bridge: {
        te: ["నేను", "ఏమేం", "మానేయాలి?"],
        en: [
          { text: "What", role: "what" },
          { text: "should", role: "action" },
          { text: "I", role: "who" },
          { text: "avoid?", role: "action" },
        ],
      },
      examples: [
        { en: "What should I avoid?", te: "నేను ఏమేం మానేయాలి?" },
        { en: "Can I walk every day?", te: "నేను రోజూ నడవొచ్చా?" },
        { en: "Avoid sweets and fried food.", te: "స్వీట్లు, నూనెలో వేయించినవి మానేయండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Should or can?", te: "should ఆ, can ఆ?" },
      items: [
        {
          form: "What should I …?",
          useFor: { en: "Asking for the doctor's advice.", te: "డాక్టర్ సలహా అడగడానికి." },
          example: { en: "What should I eat?", te: "నేను ఏం తినాలి?" },
        },
        {
          form: "Can I …?",
          useFor: { en: "Asking if something is allowed.", te: "చేయొచ్చా అని అడగడానికి." },
          example: { en: "Can I walk every day?", te: "నేను రోజూ నడవొచ్చా?" },
        },
        {
          form: "Avoid …",
          useFor: { en: "The doctor says what to stop or cut down.", te: "ఏం మానాలో, ఏం తగ్గించాలో డాక్టర్ చెప్పేది." },
          example: { en: "Avoid sweets and fried food.", te: "స్వీట్లు, నూనెలో వేయించినవి మానేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What I should avoid?",
      right: "What should I avoid?",
      why: {
        en: "Telugu keeps నేను first, but an English question puts should before I.",
        te: "తెలుగులో 'నేను' ముందు వస్తుంది; ఇంగ్లీష్ ప్రశ్నలో I కంటే ముందు should.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Avoid to eat sweets.",
      right: "Avoid sweets.",
      why: {
        en: "After avoid, never put to; just name the thing you should stop.",
        te: "avoid తర్వాత to రాదు; మానాల్సిన దాని పేరు చెప్తే చాలు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the doctor which food is not good for you.", te: "మీకు ఏ తిండి మంచిది కాదో డాక్టర్‌ని అడగండి." },
      options: ["What should I avoid?", "What I should avoid?", "What should I to avoid?"],
      answer: 0,
      why: {
        en: "In a question, should comes before I, and the verb after it stays plain.",
        te: "ప్రశ్నలో should ముందు, I తర్వాత; ఆ తర్వాత verb మారదు, to రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Eat less ___ and more vegetables.",
      te: "ఉప్పు తక్కువ, కూరగాయలు ఎక్కువ తినండి.",
      options: ["salt", "salts", "a salt"],
      answer: 0,
      why: {
        en: "We don't count salt, so it takes no s and no a.",
        te: "ఉప్పుని లెక్కపెట్టం, అందుకే s గానీ a గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The doctor says: Walk for thirty minutes every day. What does it mean?",
        te: "డాక్టర్ Walk for thirty minutes every day అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Walk half an hour each day.", "Walk thirty times a day.", "Start walking after thirty days."],
      answer: 0,
      why: {
        en: "For thirty minutes tells how long you walk each day.",
        te: "for thirty minutes అంటే ప్రతి రోజు ఎంతసేపు నడవాలో.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Is rice okay to me?",
      wrongIndex: 3,
      fix: "Is rice okay for me?",
      why: {
        en: "Telugu నాకు becomes for me here, never to me.",
        te: "ఇక్కడ 'నాకు' అంటే for me; to me కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the doctor if walking every day is okay.",
        te: "రోజూ నడవొచ్చా అని డాక్టర్‌ని అడగండి.",
      },
      expected: ["Can I walk every day?", "Can I go for a walk every day?", "Is walking every day okay?"],
      options: ["Can I walk every day?", "Can I walking every day?", "I can walk every day?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Ask the doctor which exercise is good for you.",
        te: "మీకు ఏ వ్యాయామం మంచిదో డాక్టర్‌ని అడగండి.",
      },
      expected: ["What exercise is good for me?", "Which exercise is good for me?"],
      options: ["What exercise is good for me?", "What exercise good for me?", "Which exercise is good to me?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Food and exercise", te: "తిండి, వ్యాయామం" },
    scene: {
      en: "Your test report is back. Dr Anitha talks to you about food and exercise.",
      te: "మీ టెస్ట్ రిపోర్ట్ వచ్చింది. డాక్టర్ అనిత తిండి, వ్యాయామం గురించి మాట్లాడుతున్నారు.",
    },
    partner: { en: "Dr Anitha (a doctor)", te: "డాక్టర్ అనిత" },
    skills: [{ id: "advice", label: { en: "Asking for advice", te: "సలహా అడగడం" } }],
    turns: [
      {
        partner: "Your sugar is high. Let's look at your diet.",
        te: "మీ షుగర్ ఎక్కువగా ఉంది. మీ తిండి సంగతి చూద్దాం.",
        hint: { en: "Ask what food you should stay away from.", te: "ఏ తిండికి దూరంగా ఉండాలో అడగండి." },
        replies: [
          { say: "Okay. What should I avoid, doctor?", good: true, skill: "advice" },
          { say: "Okay. What I should avoid, doctor?", good: false, skill: "advice", fixIt: "question" },
        ],
      },
      {
        partner: "Avoid sweets and fried food. Eat less rice.",
        te: "స్వీట్లు, నూనెలో వేయించినవి మానేయండి. అన్నం తక్కువ తినండి.",
        hint: { en: "Ask if a little rice is fine.", te: "కొంచెం అన్నం తినొచ్చా అని అడగండి." },
        replies: [
          { say: "Is rice okay for me?", good: true, skill: "advice" },
          { say: "Can I eat a little rice?", good: true, skill: "advice" },
          {
            say: "Every doctor says that. It's boring.",
            good: false,
            skill: "advice",
            react: { en: "Because it's true! Small changes help a lot.", te: "ఎందుకంటే అది నిజం! చిన్న మార్పులే చాలా సాయం చేస్తాయి." },
          },
        ],
      },
      {
        partner: "A small cup of rice is fine. Have more vegetables.",
        te: "ఒక చిన్న కప్పు అన్నం పర్వాలేదు. కూరగాయలు ఎక్కువ తినండి.",
        hint: { en: "Ask if walking every day is good for you.", te: "రోజూ నడవడం మంచిదా అని అడగండి." },
        replies: [
          { say: "Can I walk every day?", good: true, skill: "advice" },
          { say: "I can walk every day?", good: false, skill: "advice", fixIt: "question" },
        ],
      },
      {
        partner: "Yes! Walk for thirty minutes every day.",
        te: "తప్పకుండా! రోజూ అరగంట నడవండి.",
        hint: { en: "Say you will, and thank her.", te: "అలాగే చేస్తానని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I will. Thank you, doctor.", good: true },
          { say: "Okay, I will. Thanks you, doctor.", good: false },
        ],
      },
    ],
  },
};
