import type { Lesson } from "../../types";

/** Week 4, Day 1 (CURRICULUM §3): have / has, don't have / doesn't have. */
export const day: Lesson = {
  id: "have-and-has",
  kind: "lesson",
  title: { en: "Have & Has", te: "నాకు ఉంది, ఆయనకి ఉంది" },
  subtitle: "have / has",
  summary: {
    en: "Learn to say what you and others have with have and has, and what you don't have.",
    te: "మీకు, ఇతరులకు ఏమి ఉందో have, has తో, ఏమి లేదో don't have తో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Have and Has in English for Telugu Speakers",
    description:
      "Say I have a sister and He has a small shop in English. Simple lessons for Telugu speakers on have, has and don't have, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have", role: "action" },
    { text: "a sister", role: "what" },
  ],
  core: [
    { en: "I have a sister.", te: "నాకు ఒక చెల్లెలు ఉంది.", extra: ["has"] },
    { en: "He has a small shop.", te: "ఆయనకి ఒక చిన్న షాపు ఉంది.", extra: ["have"] },
    { en: "We have a car.", te: "మాకు ఒక కారు ఉంది.", extra: ["has"] },
    { en: "She has a good job.", te: "ఆవిడకి మంచి ఉద్యోగం ఉంది.", extra: ["have"] },
    { en: "I don't have a bike.", te: "నాకు బైక్ లేదు.", extra: ["doesn't"] },
    { en: "Do you have a pen?", te: "మీ దగ్గర పెన్ ఉందా?", extra: ["Does"] },
    { en: "He doesn't have time.", te: "ఆయనకి టైమ్ లేదు.", extra: ["has"] },
  ],
  key: [0, 1, 4, 5],
  tryToday: {
    en: "Tell someone two things you have and one thing you don't have.",
    te: "మీకు ఉన్న రెండు విషయాలు, లేని ఒక విషయం ఎవరికైనా ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "sister", te: "అక్క, చెల్లెలు" },
    { en: "brother", te: "అన్నయ్య, తమ్ముడు" },
    { en: "cousin", te: "కజిన్ (పెదనాన్న, బాబాయి, మామయ్య, అత్తయ్యల పిల్లలు)" },
    { en: "job", te: "ఉద్యోగం" },
    { en: "bike", te: "బైక్" },
  ],
  grammar: ["have-has-possessives", "present-simple"],
  topics: ["people", "family"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I have, he has", te: "నాకు ఉంది, ఆయనకి ఉంది" },
      body: {
        en: "In Telugu we say నాకు ఒక చెల్లెలు ఉంది. In English the person comes first, then have: I have a sister. With he, she or one name, say has.",
        te: "తెలుగులో 'నాకు ఒక చెల్లెలు ఉంది' అంటాం. ఇంగ్లీష్‌లో మనిషి ముందు, తర్వాత have: I have a sister. he, she లేదా ఒక్కరి పేరు అయితే has అనాలి.",
      },
      bridge: {
        te: ["నాకు", "ఒక చెల్లెలు", "ఉంది"],
        en: [
          { text: "I", role: "who" },
          { text: "have", role: "action" },
          { text: "a sister", role: "what" },
        ],
      },
      examples: [
        { en: "I have a sister.", te: "నాకు ఒక చెల్లెలు ఉంది." },
        { en: "He has a small shop.", te: "ఆయనకి ఒక చిన్న షాపు ఉంది." },
        { en: "We have a car.", te: "మాకు ఒక కారు ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Have, has or don't have?", te: "have, has, don't have — ఏది?" },
      items: [
        {
          form: "I, you, we, they → have",
          useFor: { en: "Use have with I, you, we and they.", te: "I, you, we, they తో have." },
          example: { en: "We have a car.", te: "మాకు ఒక కారు ఉంది." },
        },
        {
          form: "he, she → has",
          useFor: { en: "Use has with he, she or one name.", te: "he, she, లేదా ఒక్కరి పేరుతో has." },
          example: { en: "She has a good job.", te: "ఆవిడకి మంచి ఉద్యోగం ఉంది." },
        },
        {
          form: "don't / doesn't + have",
          useFor: { en: "To say no, use don't have or doesn't have.", te: "లేదు అని చెప్పడానికి don't have, doesn't have." },
          example: { en: "He doesn't have time.", te: "ఆయనకి టైమ్ లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "He have a shop.",
      right: "He has a shop.",
      why: {
        en: "For one person (he, she), use has.",
        te: "ఒక్కరికి (he, she) has వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "He doesn't has time.",
      right: "He doesn't have time.",
      why: {
        en: "Doesn't already has the s, so then say have: He doesn't have time.",
        te: "doesn't లోనే s ఉంది, కాబట్టి తర్వాత have: He doesn't have time.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["She have a good job.", "She has a good job.", "She is have a good job."],
      answer: 1,
      why: {
        en: "She is one person, so use has: She has a good job.",
        te: "she ఒక్కరే, కాబట్టి has: She has a good job.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Do you ___ a pen?",
      te: "మీ దగ్గర పెన్ ఉందా?",
      options: ["have", "has", "having"],
      answer: 0,
      why: {
        en: "After do or does, always use have: Do you have a pen?",
        te: "do, does తర్వాత ఎప్పుడూ have: Do you have a pen?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: నాకు ఒక చెల్లెలు ఉంది?", te: "నాకు ఒక చెల్లెలు ఉంది — ఇంగ్లీష్‌లో ఏది సరైనది?" },
      options: ["I am having a sister.", "I have a sister.", "I has a sister."],
      answer: 1,
      why: {
        en: "Use have with I, never am having: I have a sister.",
        te: "I తో have వాడాలి, am having కాదు: I have a sister.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He doesn't has a car.",
      wrongIndex: 2,
      fix: "He doesn't have a car.",
      why: {
        en: "After doesn't, say have, not has.",
        te: "doesn't తర్వాత has కాదు, have.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A neighbour asks: Do you have a brother? Say yes, you have two brothers.",
        te: "పొరుగువారు అడుగుతున్నారు: Do you have a brother? అవును, మీకు ఇద్దరు అన్నదమ్ములు ఉన్నారని చెప్పండి.",
      },
      expected: ["Yes, I have two brothers.", "I have two brothers."],
      options: ["Yes, I has two brothers.", "Yes, I have two brothers.", "Yes, two brothers are there."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend asks for a pen. You don't have one. Tell your friend.",
        te: "మీ స్నేహితులు పెన్ అడుగుతున్నారు. మీ దగ్గర లేదు. చెప్పండి.",
      },
      expected: ["Sorry, I don't have a pen.", "I don't have a pen."],
      options: ["Sorry, I don't have a pen.", "Sorry, I not have a pen.", "Sorry, I doesn't have a pen."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Brothers and sisters", te: "అన్నదమ్ములు, అక్కచెల్లెళ్ళు" },
    scene: {
      en: "Ayesha, your neighbour, asks about your brothers and sisters. Answer with have and has.",
      te: "పొరుగింటి ఆయేషా గారు మీ అన్నదమ్ముల, అక్కచెల్లెళ్ళ గురించి అడుగుతున్నారు. have, has తో జవాబు చెప్పండి.",
    },
    partner: { en: "Ayesha (a neighbour)", te: "ఆయేషా (పొరుగింటావిడ)" },
    skills: [{ id: "have", label: { en: "have / has", te: "have / has వాడకం" } }],
    turns: [
      {
        partner: "Do you have brothers or sisters?",
        te: "మీకు అన్నదమ్ములు, అక్కచెల్లెళ్ళు ఉన్నారా?",
        hint: { en: "Say how many brothers and sisters you have.", te: "మీకు ఎంతమంది అన్నదమ్ములు, అక్కచెల్లెళ్ళు ఉన్నారో చెప్పండి." },
        replies: [
          { say: "I have one brother and two sisters.", good: true, skill: "have" },
          { say: "I has one brother and two sisters.", good: false, skill: "have" },
        ],
      },
      {
        partner: "Where does your brother live?",
        te: "మీ అన్నయ్య ఎక్కడ ఉంటారు?",
        hint: { en: "Say the city he lives in, like Hyderabad.", te: "ఆయన ఉండే ఊరు చెప్పండి, ఉదాహరణకి హైదరాబాద్." },
        replies: [
          { say: "He lives in Hyderabad.", good: true },
          { say: "He live in Hyderabad.", good: false },
        ],
      },
      {
        partner: "What does he do there?",
        te: "అక్కడ ఆయన ఏం చేస్తారు?",
        hint: { en: "Say he owns a small shop. Use has.", te: "ఆయనకి ఒక చిన్న షాపు ఉందని చెప్పండి. has వాడండి." },
        replies: [
          { say: "He has a small shop.", good: true, skill: "have" },
          { say: "He have a small shop.", good: false, skill: "have" },
        ],
      },
      {
        partner: "Do you have a car?",
        te: "మీకు కారు ఉందా?",
        hint: { en: "Say no politely. Use don't.", te: "లేదని మర్యాదగా చెప్పండి. don't వాడండి." },
        replies: [
          { say: "No, I don't have a car.", good: true, skill: "have" },
          { say: "No, I don't has a car.", good: false, skill: "have" },
          {
            say: "Why do you ask so many questions?",
            good: false,
            react: { en: "Oh, sorry! I was just curious.", te: "అయ్యో, సారీ! ఊరికే తెలుసుకుందామని." },
          },
        ],
      },
    ],
  },
};
