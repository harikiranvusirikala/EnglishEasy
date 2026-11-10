import type { Lesson } from "../../types";

/** Week 1, Day 5 (CURRICULUM §3, lightened 2026-11-09): past simple, irregular verbs first; Did you …? Yes, I did. didn't is recognition only (built in Week 9). */
export const day: Lesson = {
  id: "past-simple-yesterday",
  kind: "lesson",
  title: { en: "Yesterday", te: "నిన్న" },
  subtitle: "Past simple",
  summary: {
    en: "Talk about things you did yesterday. Learn went, bought and ate, and how to ask with Did.",
    te: "నిన్న మీరు చేసిన పనుల గురించి చెప్పడం నేర్చుకుందాం. went, bought, ate, అలాగే Did తో ప్రశ్న.",
  },
  seo: {
    title: "Past Simple in English for Telugu Speakers: Yesterday",
    description:
      "Learn the past simple: went, bought, ate, and Did you eat? Say what you did yesterday, with Telugu explanations.",
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
    { en: "She came by bus.", te: "ఆవిడ బస్సులో వచ్చారు.", extra: ["come"] },
    { en: "We watched a film.", te: "మేము సినిమా చూశాం.", extra: ["watch"] },
    { en: "I went out in the evening.", te: "సాయంత్రం నేను బయటికి వెళ్లాను.", extra: ["go"] },
    { en: "Did you eat?", te: "మీరు తిన్నారా?", extra: ["Do"] },
  ],
  key: [0, 1, 5, 6],
  tryToday: {
    en: "Tell someone what you did yesterday. For example: I went to the market. I ate idli. I watched TV.",
    te: "నిన్న మీరు ఏం చేశారో ఎవరికైనా చెప్పండి. ఉదాహరణ: I went to the market. I ate idli. I watched TV.",
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
          { text: "went", role: "action" },
          { text: "to the market", role: "what" },
          { text: "yesterday", role: "when" },
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
      heading: { en: "Past verbs, a question, and no", te: "past verbs, ప్రశ్న, లేదు" },
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
        {
          form: "Did you + eat?",
          useFor: {
            en: "To ask, put Did first and keep the plain action word. Answer: Yes, I did.",
            te: "అడగాలంటే Did ముందు పెట్టి, మామూలు verb వాడాలి. జవాబు: Yes, I did.",
          },
          example: { en: "Did you eat? Yes, I did.", te: "మీరు తిన్నారా? అవును, తిన్నాను." },
        },
        {
          form: "didn't + go",
          useFor: {
            en: "You will also hear didn't for no. Just understand it for now; you will practice it in Week 9.",
            te: "లేదు అనడానికి didn't వినిపిస్తుంది. ఇప్పటికి అర్థం చేసుకుంటే చాలు; 9వ వారంలో practice చేస్తాం.",
          },
          example: { en: "I didn't go out.", te: "నేను బయటికి వెళ్లలేదు." },
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
      wrong: "Did you ate?",
      right: "Did you eat?",
      why: {
        en: "After Did, use the plain action word, because Did already shows the past: Did you eat?",
        te: "Did తర్వాత మామూలు verb వాడాలి, ఎందుకంటే Did లోనే past ఉంది: Did you eat?",
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
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["Did you ate?", "Did you eat?", "Did you eating?"],
      answer: 1,
      why: {
        en: "Did already shows the past, so the action word stays plain: Did you eat?",
        te: "Did లోనే past ఉంది, కాబట్టి verb మారదు: Did you eat?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Yesterday I go to the market.",
      wrongIndex: 2,
      fix: "Yesterday I went to the market.",
      why: {
        en: "Yesterday is finished time, so use the past: Yesterday I went to the market.",
        te: "Yesterday అంటే అయిపోయిన సమయం, కాబట్టి past: Yesterday I went to the market.",
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
        en: "A friend visits you at lunch time. Ask her if she ate, in English.",
        te: "భోజనం సమయానికి మీ స్నేహితురాలు ఇంటికి వచ్చారు. ఆవిడ తిన్నారా అని ఇంగ్లీష్‌లో అడగండి.",
      },
      expected: ["Did you eat?"],
      options: ["Did you eat?", "Did you ate?", "Do you ate?"],
      answer: 0,
      fixIt: "question",
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "What did you do yesterday?", te: "నిన్న ఏం చేశారు?" },
    scene: {
      en: "Your friend Mary asks what you did yesterday. Answer with short sentences in the past.",
      te: "మీ స్నేహితురాలు మేరీ నిన్న మీరు ఏం చేశారని అడుగుతున్నారు. past form తో చిన్న వాక్యాలలో జవాబు చెప్పండి.",
    },
    partner: { en: "Mary (a friend)", te: "మేరీ (స్నేహితురాలు)" },
    skills: [{ id: "past", label: { en: "Saying what you did", te: "చేసిన పని చెప్పడం" } }],
    turns: [
      {
        partner: "What did you do yesterday?",
        te: "నిన్న మీరు ఏం చేశారు?",
        hint: { en: "Say where you went. Use the past.", te: "మీరు ఎక్కడికి వెళ్లారో past form లో చెప్పండి." },
        replies: [
          { say: "I went to the market.", good: true, skill: "past" },
          { say: "I go to the market.", good: false, skill: "past" },
          { say: "I goed to the market.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Did you buy vegetables?",
        te: "మీరు కూరగాయలు కొన్నారా?",
        hint: { en: "Say yes, the short way or the full way.", te: "అవును అని చిన్నగా గానీ, పూర్తి వాక్యంగా గానీ చెప్పండి." },
        replies: [
          { say: "Yes, I did.", good: true, skill: "past" },
          { say: "Yes, I bought vegetables.", good: true, skill: "past" },
          { say: "Yes, I buyed.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Did you go out in the evening?",
        te: "సాయంత్రం బయటికి వెళ్లారా?",
        hint: { en: "Say yes, and where you went: the temple.", te: "అవునని, ఎక్కడికి వెళ్లారో చెప్పండి: గుడికి." },
        replies: [
          { say: "Yes, I went to the temple.", good: true, skill: "past" },
          { say: "Yes, I go to the temple.", good: false, skill: "past" },
          {
            say: "Why are you asking so much?",
            good: false,
            react: { en: "Oh, sorry! I was only asking.", te: "అయ్యో, sorry అండీ! ఊరికే అడిగాను." },
          },
        ],
      },
    ],
  },
};
