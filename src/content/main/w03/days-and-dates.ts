import type { Lesson } from "../../types";

/** Week 3, Day 3 (CURRICULUM §3): days, months and dates with on / in / at. */
export const day: Lesson = {
  id: "days-and-dates",
  kind: "lesson",
  title: { en: "Days, Months & Dates", te: "రోజులు, నెలలు, తేదీలు" },
  subtitle: "on / in / at",
  summary: {
    en: "Learn to talk about days, months and dates, with on, in and at.",
    te: "రోజులు, నెలలు, తేదీల గురించి on, in, at తో మాట్లాడటం నేర్చుకుందాం.",
  },
  seo: {
    title: "Days, Months and Dates in English for Telugu Speakers: On, In, At",
    description:
      "Say My birthday is on 15 August and Diwali is in November. Simple lessons for Telugu speakers on on, in and at, with Telugu explanations.",
  },
  pattern: [
    { text: "The temple", role: "who" },
    { text: "is closed", role: "action" },
    { text: "on Mondays", role: "when" },
  ],
  core: [
    { en: "The temple is closed on Mondays.", te: "గుడి సోమవారాలు మూసి ఉంటుంది.", extra: ["in"] },
    { en: "My birthday is on 15 August.", te: "నా పుట్టినరోజు ఆగస్టు 15న.", extra: ["in"] },
    { en: "Diwali is in November.", te: "దీపావళి నవంబర్‌లో వస్తుంది.", extra: ["on"] },
    { en: "Today is Friday.", te: "ఈ రోజు శుక్రవారం.", extra: ["on"] },
    { en: "What is the date today?", te: "ఈ రోజు తేదీ ఎంత?", extra: ["day"] },
    { en: "Come on Saturday at five.", te: "శనివారం ఐదు గంటలకు రండి.", extra: ["in"] },
    { en: "We go to Tirupati in May.", te: "మేము మేలో తిరుపతికి వెళ్తాం.", extra: ["on"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Say today's day and date in English: Today is … It is …",
    te: "ఈ రోజు వారం, తేదీ ఇంగ్లీష్‌లో చెప్పండి: Today is … It is …",
  },
  words: [
    { en: "birthday", te: "పుట్టినరోజు" },
    { en: "date", te: "తేదీ" },
    { en: "month", te: "నెల" },
    { en: "Monday", te: "సోమవారం" },
    { en: "Friday", te: "శుక్రవారం" },
  ],
  grammar: ["prepositions", "am-is-are"],
  topics: ["time", "festivals"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "On a day, in a month", te: "రోజుకి on, నెలకి in" },
      body: {
        en: "Telugu adds న or లో to the word: సోమవారాలు, నవంబర్‌లో. English puts a small word before it: on Mondays, in November, at five.",
        te: "తెలుగులో పదం చివర 'న', 'లో' చేరుస్తాం: ఆగస్టు 15న, నవంబర్‌లో. ఇంగ్లీష్‌లో ముందు ఒక చిన్న పదం పెడతారు: on Mondays, in November, at five.",
      },
      bridge: {
        te: ["గుడి", "సోమవారాలు", "మూసి ఉంటుంది"],
        en: [
          { text: "The temple", role: "who" },
          { text: "is closed", role: "action" },
          { text: "on Mondays", role: "when" },
        ],
      },
      examples: [
        { en: "The temple is closed on Mondays.", te: "గుడి సోమవారాలు మూసి ఉంటుంది." },
        { en: "My birthday is on 15 August.", te: "నా పుట్టినరోజు ఆగస్టు 15న." },
        { en: "Diwali is in November.", te: "దీపావళి నవంబర్‌లో వస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "On, in or at?", te: "on, in, at — ఏది?" },
      items: [
        {
          form: "on + day or date",
          useFor: { en: "Use on with days and dates.", te: "వారాలు, తేదీలకు on." },
          example: { en: "My birthday is on 15 August.", te: "నా పుట్టినరోజు ఆగస్టు 15న." },
        },
        {
          form: "in + month or year",
          useFor: { en: "Use in with months and years.", te: "నెలలు, సంవత్సరాలకు in." },
          example: { en: "We go to Tirupati in May.", te: "మేము మేలో తిరుపతికి వెళ్తాం." },
        },
        {
          form: "at + clock time",
          useFor: { en: "Use at with a clock time.", te: "గడియారం టైమ్‌కి at." },
          example: { en: "Come on Saturday at five.", te: "శనివారం ఐదు గంటలకు రండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The temple is closed in Monday.",
      right: "The temple is closed on Mondays.",
      why: {
        en: "Use on with days, not in. Every Monday: on Mondays.",
        te: "వారాలకి in కాదు, on వాడాలి. ప్రతి సోమవారం అంటే on Mondays.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "My birthday is in 15 August.",
      right: "My birthday is on 15 August.",
      why: {
        en: "A date takes on. Only a month alone takes in: in August.",
        te: "తేదీకి on వాడాలి. నెల ఒక్కటే అయితేనే in: in August.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Diwali is on November.", "Diwali is in November.", "Diwali is at November."],
      answer: 1,
      why: {
        en: "Use in with a month, on with a date: in November.",
        te: "నెలకి in, తేదీకి on: in November.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "The shop is closed ___ Sundays.",
      te: "షాప్ ఆదివారాలు మూసి ఉంటుంది.",
      options: ["in", "on", "at"],
      answer: 1,
      why: {
        en: "Use on with days. Every Sunday: on Sundays.",
        te: "వారాలకి on వాడాలి. ప్రతి ఆదివారం అంటే on Sundays.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which question asks the date?", te: "తేదీ అడిగే ప్రశ్న ఏది?" },
      options: ["What is the date today?", "What is the time now?", "What day is it today?"],
      answer: 0,
      why: {
        en: "Date is the number, like 15 August. Day is Monday, Tuesday and so on.",
        te: "date అంటే తేదీ, ఆగస్టు 15 లాంటిది. day అంటే వారం, సోమవారం లాంటిది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Come on Saturday on five.",
      wrongIndex: 3,
      fix: "Come on Saturday at five.",
      why: {
        en: "A clock time takes at: at five.",
        te: "గడియారం టైమ్‌కి at: at five.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A friend asks: When is your birthday? It is 15 August. Answer.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: When is your birthday? అది ఆగస్టు 15. జవాబు చెప్పండి.",
      },
      expected: ["My birthday is on 15 August.", "It is on 15 August."],
      options: ["My birthday is in 15 August.", "My birthday is on 15 August.", "My birthday on 15 August."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone asks: What day is it today? It is Friday. Answer.",
        te: "ఒకరు అడుగుతున్నారు: What day is it today? ఈ రోజు శుక్రవారం. జవాబు చెప్పండి.",
      },
      expected: ["Today is Friday.", "It is Friday."],
      options: ["Today is Friday.", "Today Friday is.", "Today in Friday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A day for the doctor", te: "డాక్టర్ దగ్గరికి ఏ రోజు?" },
    scene: {
      en: "You call Dr Prasad's clinic to book a visit. Mary answers the phone.",
      te: "మీరు డాక్టర్ ప్రసాద్ గారి క్లినిక్‌కి ఫోన్ చేసి, ఏ రోజు రావాలో అడుగుతున్నారు. మేరీ గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Mary (clinic receptionist)", te: "మేరీ (క్లినిక్ రిసెప్షనిస్ట్)" },
    skills: [
      { id: "dates", label: { en: "on / in / at", te: "on / in / at వాడకం" } },
      { id: "answer", label: { en: "Answer", te: "జవాబు చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Good morning, Dr Prasad's clinic.",
        te: "గుడ్ మార్నింగ్, డాక్టర్ ప్రసాద్ గారి క్లినిక్.",
        hint: { en: "Ask for a visit on Monday. Use on with the day.", te: "సోమవారం డాక్టర్ గారు ఖాళీగా ఉంటారా అని అడగండి. రోజుకి on." },
        replies: [
          { say: "Is the doctor free on Monday?", good: true, skill: "dates" },
          { say: "Is the doctor free in Monday?", good: false, skill: "dates", fixIt: "preposition" },
        ],
      },
      {
        partner: "Sorry, we are closed on Mondays.",
        te: "సారీ అండీ, సోమవారాలు క్లినిక్ మూసి ఉంటుంది.",
        hint: { en: "Ask about the next day, Tuesday.", te: "తర్వాతి రోజు, మంగళవారం గురించి అడగండి." },
        replies: [
          { say: "What about Tuesday?", good: true, skill: "dates" },
          { say: "What about in Tuesday?", good: false, skill: "dates", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, Tuesday at eleven. Okay?",
        te: "అవును, మంగళవారం పదకొండు గంటలకి. సరేనా?",
        hint: { en: "Say yes, the day and time are fine.", te: "ఆ రోజు, ఆ టైమ్ మీకు సరిపోతుందని చెప్పండి." },
        replies: [
          { say: "Yes, Tuesday at eleven is fine.", good: true, skill: "dates" },
          { say: "Yes, Tuesday on eleven is fine.", good: false, skill: "dates", fixIt: "preposition" },
        ],
      },
      {
        partner: "Your name and age, please?",
        te: "మీ పేరు, వయసు చెప్తారా?",
        hint: { en: "Say your name and your own age.", te: "మీ పేరు, మీ వయసు చెప్పండి." },
        replies: [
          { say: "I am Kiran, sixty years old.", good: true, skill: "answer" },
          { say: "I am Kiran, sixty years.", good: false, skill: "answer" },
          {
            say: "Why do you need my age?",
            good: false,
            skill: "answer",
            react: { en: "It is for the doctor's file.", te: "డాక్టర్ గారి ఫైల్ కోసం అండీ." },
          },
        ],
      },
    ],
  },
};
