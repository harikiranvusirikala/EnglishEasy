import type { Lesson } from "../../types";

/** Week 1, Day 5 (CURRICULUM §3): past simple, with irregular verbs first; didn't + verb; Did ...? */
export const day: Lesson = {
  id: "past-simple-yesterday",
  kind: "lesson",
  title: { en: "Yesterday", te: "నిన్న" },
  subtitle: "Past simple",
  summary: {
    en: "Talk about things you did yesterday. Learn went, bought and ate, and how to say didn't and Did.",
    te: "నిన్న మీరు చేసిన పనుల గురించి చెప్పడం నేర్చుకుందాం. went, bought, ate, అలాగే didn't, Did.",
  },
  seo: {
    title: "Past Simple in English for Telugu Speakers: Yesterday",
    description:
      "Learn the past simple: went, bought, ate, didn't go, Did you eat? Say what you did yesterday, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "went", role: "action" },
    { text: "to the market", role: "what" },
    { text: "yesterday", role: "when" },
  ],
  core: [
    { en: "I went to the market.", te: "నేను మార్కెట్‌కి వెళ్లాను.", extra: ["go"] },
    { en: "I bought vegetables.", te: "నేను కూరగాయలు కొన్నాను.", extra: ["buy"] },
    { en: "I ate idli.", te: "నేను ఇడ్లీ తిన్నాను.", extra: ["eat"] },
    { en: "She came by bus.", te: "ఆమె బస్సులో వచ్చింది.", extra: ["come"] },
    { en: "We watched a film.", te: "మేము సినిమా చూశాం.", extra: ["watch"] },
    { en: "I didn't go out.", te: "నేను బయటికి వెళ్లలేదు.", extra: ["went"] },
    { en: "Did you eat?", te: "మీరు తిన్నారా?", extra: ["Do"] },
  ],
  key: [0, 1, 5, 6],
  tryToday: {
    en: "Tell someone what you did yesterday. For example: I went to the market. I ate idli. I didn't go out.",
    te: "నిన్న మీరు ఏం చేశారో ఎవరికైనా చెప్పండి. ఉదాహరణ: I went to the market. I ate idli. I didn't go out.",
  },
  words: [
    { en: "market", te: "మార్కెట్" },
    { en: "yesterday", te: "నిన్న" },
    { en: "film", te: "సినిమా" },
    { en: "bus", te: "బస్సు" },
    { en: "idli", te: "ఇడ్లీ" },
  ],
  grammar: ["past-simple", "yes-no-questions"],
  topics: ["market", "food", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What you did yesterday", te: "నిన్న మీరు చేసినది" },
      body: {
        en: "For finished actions, like yesterday or last week, use the past form of the action. Some change a lot: go becomes went, buy becomes bought, eat becomes ate.",
        te: "yesterday, last week లాంటి పదాలు వస్తే verb ని past form లో వాడాలి. కొన్ని verbs పూర్తిగా మారతాయి: go కాదు, went. buy కాదు, bought. eat కాదు, ate.",
      },
      bridge: {
        te: ["నేను", "నిన్న", "మార్కెట్‌కి", "వెళ్లాను"],
        en: [
          { text: "I", role: "who" },
          { text: "yesterday", role: "when" },
          { text: "to the market", role: "what" },
          { text: "went", role: "action" },
        ],
      },
      examples: [
        { en: "I went to the market.", te: "నేను మార్కెట్‌కి వెళ్లాను." },
        { en: "I bought vegetables.", te: "నేను కూరగాయలు కొన్నాను." },
        { en: "I ate idli.", te: "నేను ఇడ్లీ తిన్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Two kinds of past verbs", te: "రెండు రకాల past verbs" },
      items: [
        {
          form: "watch → watched",
          useFor: { en: "Most verbs just add -ed.", te: "చాలా verbs కి చివర -ed చేర్చితే చాలు." },
          example: { en: "We watched a film.", te: "మేము సినిమా చూశాం." },
        },
        {
          form: "go → went",
          useFor: { en: "Some verbs change. Learn them one by one.", te: "కొన్ని verbs మారిపోతాయి. వాటిని ఒక్కొక్కటిగా నేర్చుకోవాలి." },
          example: { en: "I went to the market.", te: "నేను మార్కెట్‌కి వెళ్లాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Yesterday I go.",
      right: "Yesterday I went.",
      why: {
        en: "Yesterday means it is finished. Use the past: went.",
        te: "Yesterday అంటే పని అయిపోయింది. past form వాడాలి: went.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I didn't went.",
      right: "I didn't go.",
      why: {
        en: "After didn't, use the simple action: go. Didn't already shows the past.",
        te: "didn't తర్వాత మామూలు verb వాడాలి: go. didn't లోనే past ఉంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "What is the past of go?", te: "go కి past form ఏది?" },
      options: ["goed", "went", "going"],
      answer: 1,
      why: {
        en: "Go is special. The past is went.",
        te: "go ప్రత్యేకమైనది. దాని past form went.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ vegetables yesterday.",
      te: "నేను నిన్న కూరగాయలు కొన్నాను.",
      options: ["buyed", "bought", "buy"],
      answer: 1,
      why: {
        en: "The past of buy is bought.",
        te: "buy కి past form bought.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I didn't went out.", "I didn't go out.", "I not go out."],
      answer: 1,
      why: {
        en: "After didn't, use go.",
        te: "didn't తర్వాత go వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Yesterday I go to the market.",
      wrongIndex: 2,
      fix: "Yesterday I went to the market.",
      why: {
        en: "Yesterday needs the past: went.",
        te: "Yesterday తో past form వాడాలి: went.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: Did you eat? Say yes, in English.",
        te: "స్నేహితులు అడుగుతున్నారు: Did you eat? అవును అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["Yes, I did.", "Yes, I ate idli."],
      options: ["Yes, I do.", "Yes, I did.", "Yes, I eated."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A neighbour asks: Did you go out? Say no, in English.",
        te: "పొరుగు వాళ్లు అడుగుతున్నారు: Did you go out? కాదు అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["No, I didn't.", "No, I didn't go out."],
      options: ["No, I didn't.", "No, I didn't went.", "No, I not go."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "What did you do yesterday?", te: "నిన్న ఏం చేశావు?" },
    scene: {
      en: "A friend asks what you did yesterday. Answer with short sentences in the past.",
      te: "స్నేహితులు నిన్న మీరు ఏం చేశారని అడుగుతున్నారు. past form తో చిన్న వాక్యాలలో జవాబు చెప్పండి.",
    },
    partner: { en: "Friend", te: "స్నేహితుడు" },
    skills: [{ id: "past", label: { en: "Saying what you did", te: "చేసిన పని చెప్పడం" } }],
    turns: [
      {
        partner: "What did you do yesterday?",
        te: "నిన్న నువ్వు ఏం చేశావు?",
        hint: { en: "Say: I went to the market.", te: "ఇలా చెప్పండి: I went to the market." },
        replies: [
          { say: "I went to the market.", good: true, skill: "past" },
          { say: "I go to the market.", good: false, skill: "past" },
          { say: "I goed to the market.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Did you buy vegetables?",
        te: "నువ్వు కూరగాయలు కొన్నావా?",
        hint: { en: "Say yes: Yes, I did.", te: "అవును అని చెప్పండి: Yes, I did." },
        replies: [
          { say: "Yes, I did.", good: true, skill: "past" },
          { say: "Yes, I bought vegetables.", good: true, skill: "past" },
          { say: "Yes, I buyed.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Did you go out in the evening?",
        te: "సాయంత్రం బయటికి వెళ్లావా?",
        hint: { en: "Say: No, I didn't go out.", te: "ఇలా చెప్పండి: No, I didn't go out." },
        replies: [
          { say: "No, I didn't go out.", good: true, skill: "past" },
          { say: "No, I didn't went out.", good: false, skill: "past" },
          { say: "No, I not go out.", good: false, skill: "past" },
        ],
      },
    ],
  },
};
