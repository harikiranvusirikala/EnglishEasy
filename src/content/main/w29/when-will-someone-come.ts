import type { Lesson } from "../../types";

/** Week 29, Day 5 (CURRICULUM §4): following up firmly and politely — When will the technician come? Is it working now? */
export const day: Lesson = {
  id: "when-will-someone-come",
  kind: "lesson",
  title: { en: "When Will Someone Come?", te: "ఎప్పుడు వస్తారు?" },
  subtitle: "following up; checking the repair",
  summary: {
    en: "Learn to follow up firmly but politely: Nobody has come to fix it. When will the technician come?",
    te: "మర్యాదగానే గట్టిగా గుర్తుచేయడం నేర్చుకుందాం: Nobody has come to fix it. When will the technician come?",
  },
  seo: {
    title: "Following Up a Repair in English for Telugu Speakers",
    description:
      "Say Nobody has come to fix it and When will the technician come? Simple lessons for Telugu speakers on following up a repair politely.",
  },
  pattern: [
    { text: "When", role: "when" },
    { text: "will", role: "action" },
    { text: "the technician", role: "who" },
    { text: "come?", role: "action" },
  ],
  core: [
    { en: "When will the technician come?", te: "technician ఎప్పుడు వస్తారు?", extra: ["comes"] },
    { en: "Nobody has come to fix it.", te: "బాగు చేయడానికి ఇంకా ఎవరూ రాలేదు.", extra: ["not"] },
    { en: "Can you tell me the exact time?", te: "సరిగ్గా ఎన్ని గంటలకో చెప్తారా?", extra: ["say"] },
    { en: "Is it working now?", te: "ఇప్పుడు పని చేస్తోందా?", extra: ["Does"] },
    { en: "I have waited at home all day.", te: "రోజంతా ఇంట్లోనే ఎదురుచూశాను.", extra: ["wait"] },
    { en: "Is it still under warranty?", te: "దీనికి ఇంకా వారంటీ ఉందా?", extra: ["on"] },
    { en: "How much is the spare part?", te: "స్పేర్ పార్ట్ ఎంత?", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a repair you are waiting for. Say: When will someone come?",
    te: "మీరు ఎదురుచూస్తున్న ఏదైనా రిపేర్ గుర్తు చేసుకుని చెప్పండి: When will someone come?",
  },
  words: [
    { en: "technician", te: "టెక్నీషియన్, రిపేర్ చేసేవారు" },
    { en: "exact", te: "సరిగ్గా, ఖచ్చితమైన" },
    { en: "warranty", te: "వారంటీ" },
    { en: "visit charge", te: "విజిట్ ఛార్జ్, వచ్చినందుకు ఫీజు" },
    { en: "spare part", te: "స్పేర్ పార్ట్, విడి భాగం" },
  ],
  grammar: ["will", "present-perfect", "politeness-softening"],
  topics: ["home", "phone", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Firm and polite", te: "గట్టిగా, మర్యాదగా" },
      body: {
        en: "When nobody comes, stay polite but firm. Say what has happened: Nobody has come. Ask for a time: When will the technician come? After the repair, check before you pay: Is it working now? Then ask about the visit charge and the spare part.",
        te: "ఎవరూ రాకపోతే మర్యాదగానే, కానీ గట్టిగా మాట్లాడండి. ఏం జరిగిందో చెప్పి (Nobody has come), టైమ్ అడగండి: When will the technician come? రిపేర్ అయ్యాక డబ్బులు ఇచ్చే ముందు చూడండి: Is it working now? తర్వాత visit charge, spare part ధర అడగండి.",
      },
      bridge: {
        te: ["technician", "ఎప్పుడు", "వస్తారు?"],
        en: [
          { text: "When", role: "when" },
          { text: "will", role: "action" },
          { text: "the technician", role: "who" },
          { text: "come?", role: "action" },
        ],
      },
      examples: [
        { en: "When will the technician come?", te: "technician ఎప్పుడు వస్తారు?" },
        { en: "Nobody has come to fix it.", te: "బాగు చేయడానికి ఇంకా ఎవరూ రాలేదు." },
        { en: "Can you tell me the exact time?", te: "సరిగ్గా ఎన్ని గంటలకో చెప్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ask, push, check", te: "అడగడం, గుర్తుచేయడం, సరిచూడటం" },
      items: [
        {
          form: "When will … come?",
          useFor: { en: "Ask for the visit time.", te: "ఎప్పుడు వస్తారో అడగడానికి." },
          example: { en: "When will the technician come?", te: "technician ఎప్పుడు వస్తారు?" },
        },
        {
          form: "Nobody has come.",
          useFor: { en: "Say there is still no visit.", te: "ఇంకా ఎవరూ రాలేదని చెప్పడానికి." },
          example: { en: "Nobody has come to fix it.", te: "బాగు చేయడానికి ఇంకా ఎవరూ రాలేదు." },
        },
        {
          form: "I'm sorry, but …",
          useFor: { en: "Be firm without being rude.", te: "మొరటుగా కాకుండా గట్టిగా చెప్పడానికి." },
          example: { en: "I'm sorry, but this is urgent.", te: "Sorry అండీ, కానీ ఇది అర్జెంట్." },
        },
        {
          form: "Is it working now?",
          useFor: { en: "Check the repair before you pay.", te: "డబ్బులు ఇచ్చే ముందు రిపేర్ సరిచూడటానికి." },
          example: { en: "Is it working now?", te: "ఇప్పుడు పని చేస్తోందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please revert back soon.",
      right: "Please call me back soon.",
      why: {
        en: "Revert back is office English heard only in India; call me back is clear everywhere.",
        te: "revert back అనేది మన దగ్గరి ఆఫీస్ మాట; call me back అందరికీ అర్థమవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "He don't pick up my calls.",
      right: "He doesn't pick up my calls.",
      why: {
        en: "With he or she, the not-word is doesn't; don't is for I, you, we and they.",
        te: "he, she తో doesn't వస్తుంది; don't అనేది I, you, we, they కి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the time of the visit.", te: "ఎప్పుడు వస్తారో అడగండి." },
      options: ["When will the technician come?", "When the technician will come?", "When will the technician comes?"],
      answer: 0,
      why: {
        en: "In a question, will comes before the person, and the verb stays plain.",
        te: "ప్రశ్నలో will మనిషి కంటే ముందు వస్తుంది; verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Nobody ___ come to fix it.",
      te: "బాగు చేయడానికి ఇంకా ఎవరూ రాలేదు.",
      options: ["has", "have", "is"],
      answer: 0,
      why: {
        en: "Nobody counts as one, so it takes has, like he or she.",
        te: "nobody ని ఒక్కరిగా లెక్కిస్తాం, అందుకే he, she లాగా has.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The technician says the work is done. What do you ask first?", te: "పని అయిపోయిందని technician అన్నారు. ముందు ఏం అడుగుతారు?" },
      options: ["Is it working now?", "When will you come?", "What is the problem?"],
      answer: 0,
      why: {
        en: "The work is done, so check that it works before you pay.",
        te: "పని అయిపోయింది కాబట్టి డబ్బులు ఇచ్చే ముందు పని చేస్తోందో లేదో చూడండి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I have wait at home all day.",
      wrongIndex: 2,
      fix: "I have waited at home all day.",
      why: {
        en: "After have, the verb takes its done form: wait becomes waited.",
        te: "have తర్వాత verb పూర్తయిన రూపంలో ఉండాలి: wait కాస్తా waited.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Two days have passed and no one has come. Tell customer care politely.",
        te: "రెండు రోజులైంది, ఎవరూ రాలేదు. కస్టమర్ కేర్‌కి మర్యాదగా చెప్పండి.",
      },
      expected: ["Nobody has come to fix it.", "Nobody has come.", "The technician has not come."],
      options: ["Nobody has come to fix it.", "Nobody has not come to fix it.", "Nobody came. What are you doing?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The technician has finished. Check the machine before you pay.",
        te: "technician పని ముగించారు. డబ్బులు ఇచ్చే ముందు మెషీన్ సరిచూడండి.",
      },
      expected: ["Is it working now?", "Is it working properly now?"],
      options: ["Is it working now?", "It is working now?", "Is it work now?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Still waiting", te: "ఇంకా ఎదురుచూపే" },
    scene: {
      en: "Your AC has stopped cooling. You complained two days ago, but nobody has come. You call again. Satish answers.",
      te: "మీ AC చల్లబడటం ఆగిపోయింది. రెండు రోజుల క్రితం complaint ఇచ్చారు, కానీ ఎవరూ రాలేదు. మళ్ళీ ఫోన్ చేశారు. సతీష్ మాట్లాడుతున్నారు.",
    },
    partner: { en: "Satish (customer care)", te: "సతీష్ (కస్టమర్ కేర్)" },
    voice: "b",
    skills: [
      { id: "firm", label: { en: "Firm and polite", te: "గట్టిగా, మర్యాదగా" } },
      { id: "time", label: { en: "Asking for a time", te: "టైమ్ అడగడం" } },
    ],
    turns: [
      {
        partner: "Good morning, Cool Air customer care. How can I help?",
        te: "నమస్కారం, Cool Air కస్టమర్ కేర్. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Give your complaint number: 3087.", te: "మీ complaint నంబర్ చెప్పండి: 3087." },
        replies: [
          { say: "My complaint number is three zero eight seven.", good: true, skill: "firm" },
          { say: "My complaint number three zero eight seven.", good: false, skill: "firm", fixIt: "be" },
        ],
      },
      {
        partner: "Thank you. Yes, I can see it here.",
        te: "థాంక్స్. అవును, ఇక్కడ కనిపిస్తోంది.",
        hint: { en: "Say politely but firmly that nobody has come.", te: "ఇంకా ఎవరూ రాలేదని మర్యాదగానే గట్టిగా చెప్పండి." },
        replies: [
          { say: "I'm sorry, but nobody has come to fix it.", good: true, skill: "firm" },
          {
            say: "Nobody came! You people are useless.",
            good: false,
            skill: "firm",
            react: { en: "I understand. I am sorry for the delay.", te: "అర్థమైంది. ఆలస్యం అయినందుకు sorry అండీ." },
          },
        ],
      },
      {
        partner: "The technician will come today.",
        te: "technician ఈ రోజు వస్తారు.",
        hint: { en: "Ask for the exact time.", te: "సరిగ్గా ఎన్ని గంటలకో అడగండి." },
        replies: [
          { say: "Can you tell me the exact time?", good: true, skill: "time" },
          { say: "What time will he come?", good: true, skill: "time" },
          { say: "Can you say me the exact time?", good: false, skill: "time" },
        ],
      },
      {
        partner: "He will come at four o'clock. Is that okay?",
        te: "నాలుగు గంటలకి వస్తారు. సరేనా?",
        hint: { en: "Say yes. Ask that the technician phones you before he comes.", te: "సరే అని, వచ్చే ముందు technician ఫోన్ చేయాలని చెప్పండి." },
        replies: [
          { say: "Yes. Please ask him to call me first.", good: true, skill: "time" },
          { say: "Yes. Tell him call me first.", good: false, skill: "time" },
        ],
      },
    ],
  },
};
