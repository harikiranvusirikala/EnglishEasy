import type { Lesson } from "../../types";

/** Week 30, Day 2 (CURRICULUM §4): I have never …; once, twice, three times — what you have and haven't done. */
export const day: Lesson = {
  id: "i-have-never",
  kind: "lesson",
  title: { en: "I Have Never …", te: "ఎప్పుడూ … లేదు" },
  subtitle: "never; once, twice",
  summary: {
    en: "Learn to say what you have never done, and how many times: I have never flown in a plane. I've been to Tirupati twice.",
    te: "ఎప్పుడూ చేయనిది, ఎన్నిసార్లు చేశారో చెప్పడం నేర్చుకుందాం: I have never flown in a plane. I've been to Tirupati twice.",
  },
  seo: {
    title: "I Have Never … in English for Telugu Speakers",
    description:
      "Say I have never flown in a plane and I've been to Tirupati twice. Simple lessons for Telugu speakers on never, once and twice.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have never flown", role: "action" },
    { text: "in a plane", role: "what" },
  ],
  core: [
    { en: "I have never flown in a plane.", te: "నేను ఎప్పుడూ విమానం ఎక్కలేదు.", extra: ["flew"] },
    { en: "I've been to Tirupati twice.", te: "నేను రెండుసార్లు తిరుపతి వెళ్ళొచ్చాను.", extra: ["two"] },
    { en: "I have been to Hyderabad once.", te: "నేను ఒకసారి హైదరాబాద్ వెళ్ళొచ్చాను.", extra: ["one"] },
    { en: "I have never seen snow.", te: "నేను ఎప్పుడూ మంచు చూడలేదు.", extra: ["not"] },
    { en: "She has been to Delhi three times.", te: "ఆవిడ మూడుసార్లు ఢిల్లీ వెళ్ళొచ్చారు.", extra: ["time"] },
    { en: "I have never been to an airport.", te: "నేను ఎప్పుడూ ఎయిర్‌పోర్ట్‌కి వెళ్ళలేదు.", extra: ["a"] },
    { en: "I've travelled by train many times.", te: "నేను చాలాసార్లు రైల్లో ప్రయాణం చేశాను.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing you have never done, and say it: I have never …",
    te: "మీరు ఎప్పుడూ చేయని ఒక పని గుర్తు చేసుకుని చెప్పండి: I have never …",
  },
  words: [
    { en: "plane", te: "విమానం" },
    { en: "flown", te: "విమానంలో వెళ్ళారు (fly మూడో రూపం)" },
    { en: "airport", te: "ఎయిర్‌పోర్ట్, విమానాశ్రయం" },
    { en: "snow", te: "మంచు" },
    { en: "many times", te: "చాలాసార్లు" },
  ],
  grammar: ["present-perfect", "adverbs-frequency"],
  topics: ["travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Never, once, twice", te: "ఎప్పుడూ లేదు, ఒకసారి, రెండుసార్లు" },
      body: {
        en: "For something you have not done even once in your life, say I have never and the third form: I have never flown. Never already means no, so don't add not. To say how many times, put once, twice or three times at the end.",
        te: "జీవితంలో ఒక్కసారి కూడా చేయకపోతే I have never + మూడో రూపం: I have never flown. never లోనే 'లేదు' ఉంది, not అక్కర్లేదు. ఎన్నిసార్లో చెప్పాలంటే చివర once, twice, three times.",
      },
      bridge: {
        te: ["నేను", "ఎప్పుడూ", "విమానం", "ఎక్కలేదు"],
        en: [
          { text: "I", role: "who" },
          { text: "have never flown", role: "action" },
          { text: "in a plane", role: "what" },
        ],
      },
      examples: [
        { en: "I have never flown in a plane.", te: "నేను ఎప్పుడూ విమానం ఎక్కలేదు." },
        { en: "I've been to Tirupati twice.", te: "నేను రెండుసార్లు తిరుపతి వెళ్ళొచ్చాను." },
        { en: "I have never seen snow.", te: "నేను ఎప్పుడూ మంచు చూడలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How many times?", te: "ఎన్నిసార్లు?" },
      items: [
        {
          form: "never",
          useFor: { en: "Not even one time in your life.", te: "జీవితంలో ఒక్కసారి కూడా లేదు." },
          example: { en: "I have never seen snow.", te: "నేను ఎప్పుడూ మంచు చూడలేదు." },
        },
        {
          form: "once",
          useFor: { en: "One time.", te: "ఒకసారి." },
          example: { en: "I have been to Hyderabad once.", te: "నేను ఒకసారి హైదరాబాద్ వెళ్ళొచ్చాను." },
        },
        {
          form: "twice",
          useFor: { en: "Two times.", te: "రెండుసార్లు." },
          example: { en: "I've been to Tirupati twice.", te: "నేను రెండుసార్లు తిరుపతి వెళ్ళొచ్చాను." },
        },
        {
          form: "three times, many times",
          useFor: { en: "Three or more: add times.", te: "మూడు, అంతకంటే ఎక్కువ: times చేర్చండి." },
          example: { en: "She has been to Delhi three times.", te: "ఆవిడ మూడుసార్లు ఢిల్లీ వెళ్ళొచ్చారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I never flown in a plane.",
      right: "I have never flown in a plane.",
      why: {
        en: "Flown needs have before it; never goes between have and flown.",
        te: "flown ముందు have తప్పకుండా రావాలి; never ఆ రెండింటి మధ్యలో వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "She has been to Delhi three time.",
      right: "She has been to Delhi three times.",
      why: {
        en: "After three, time takes s; for two, English usually says twice.",
        te: "మూడు తర్వాత time కి s చేరుతుంది; రెండుసార్లు అంటే మామూలుగా twice అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Say you have not flown, not even once.", te: "మీరు ఒక్కసారి కూడా విమానం ఎక్కలేదని చెప్పండి." },
      options: ["I have never flown in a plane.", "I have never flown in plane.", "I have never flew in a plane."],
      answer: 0,
      why: {
        en: "Plane needs a before it, and have takes flown, not flew.",
        te: "plane ముందు a కావాలి; have తర్వాత flown వస్తుంది, flew రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "I have been to Tirupati ___.",
      te: "నేను రెండుసార్లు తిరుపతి వెళ్ళొచ్చాను.",
      options: ["twice", "two time", "second time"],
      answer: 0,
      why: {
        en: "Two times is usually said in one word, twice.",
        te: "రెండుసార్లు అని చెప్పడానికి ఒక్క మాట twice చాలు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "You have not seen snow in your life. What do you say?", te: "మీరు జీవితంలో మంచు చూడలేదు. ఏమంటారు?" },
      options: ["I have never seen snow.", "I have not never seen snow.", "I never have see snow."],
      answer: 0,
      why: {
        en: "Never already means not, so it needs no second not.",
        te: "never లోనే 'లేదు' ఉంది; ఇంకో not అక్కర్లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I've travelled in train many times.",
      wrongIndex: 2,
      fix: "I've travelled by train many times.",
      why: {
        en: "Telugu says రైల్లో, but English travels by train, with no the.",
        te: "తెలుగులో 'రైల్లో' అంటాం; ఇంగ్లీష్‌లో by train అంటారు, the లేకుండా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a friend you have never flown in a plane.",
        te: "మీరు ఎప్పుడూ విమానం ఎక్కలేదని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I have never flown in a plane.", "I've never flown in a plane.", "I have never been on a plane."],
      options: ["I have never flown in a plane.", "I never flown in plane.", "I have not never flown."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Say you have been to Tirupati three times.",
        te: "మీరు మూడుసార్లు తిరుపతి వెళ్ళొచ్చారని చెప్పండి.",
      },
      expected: ["I have been to Tirupati three times.", "I've been to Tirupati three times."],
      options: ["I have been to Tirupati three times.", "I have been to Tirupati three time.", "I have went to Tirupati three times."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Waiting for the bus", te: "బస్సు కోసం ఎదురు చూస్తూ" },
    scene: {
      en: "At the RTC bus stand, Joseph waits next to you. He likes to talk about travel.",
      te: "RTC బస్ స్టాండ్‌లో జోసెఫ్ గారు మీ పక్కన బస్సు కోసం ఎదురు చూస్తున్నారు. ఆయనకి ప్రయాణాల గురించి మాట్లాడటం ఇష్టం.",
    },
    partner: { en: "Joseph (traveller at the bus stand)", te: "జోసెఫ్ (బస్ స్టాండ్‌లో తోటి ప్రయాణికులు)" },
    voice: "b",
    skills: [{ id: "times", label: { en: "Never, once, twice", te: "ఎప్పుడూ లేదు, ఎన్నిసార్లు" } }],
    turns: [
      {
        partner: "Hello! Are you also going to Tirupati?",
        te: "నమస్కారం! మీరు కూడా తిరుపతి వెళ్తున్నారా?",
        hint: { en: "Say yes, and how many times you have been before.", te: "అవునని, ఇంతకు ముందు ఎన్నిసార్లు వెళ్ళొచ్చారో చెప్పండి." },
        replies: [
          { say: "Yes. I have been there twice before.", good: true, skill: "times" },
          { say: "Yes. I have gone there two time.", good: false, skill: "times", fixIt: "plural" },
        ],
      },
      {
        partner: "I go every year. Have you ever flown there?",
        te: "నేను ప్రతి సంవత్సరం వెళ్తాను. మీరు ఎప్పుడైనా అక్కడికి విమానంలో వెళ్ళారా?",
        hint: { en: "Say no: you have not travelled by plane, not even once.", te: "లేదని చెప్పండి: ఒక్కసారి కూడా విమానం ఎక్కలేదు." },
        replies: [
          { say: "No, I have never flown in a plane.", good: true, skill: "times" },
          { say: "No, I never flown in plane.", good: false, skill: "times", fixIt: "article" },
        ],
      },
      {
        partner: "Really? It takes only one hour!",
        te: "అవునా? ఒక్క గంటే పడుతుంది!",
        hint: { en: "Say you like trains, and you have taken the train a lot.", te: "మీకు రైళ్ళు ఇష్టమని, చాలాసార్లు రైల్లో వెళ్ళారని చెప్పండి." },
        replies: [
          { say: "I like trains. I've travelled by train many times.", good: true, skill: "times" },
          { say: "I like trains. I am travelling in train always.", good: false, skill: "times", fixIt: "preposition" },
          {
            say: "Why are you telling me all this?",
            good: false,
            react: { en: "Sorry! I like to talk while I wait.", te: "సారీ అండీ! ఎదురు చూసేటప్పుడు మాట్లాడటం నాకు ఇష్టం." },
          },
        ],
      },
      {
        partner: "Oh, here is our bus. Have a good trip!",
        te: "ఓ, మన బస్సు వచ్చింది. మీ ప్రయాణం బాగా జరగాలి!",
        hint: { en: "Thank him, and wish him the same.", te: "ఆయనకి థాంక్స్ చెప్పి, ఆయనకీ అలాగే జరగాలని చెప్పండి." },
        replies: [
          { say: "Thank you. You too!", good: true },
          { say: "Thanks you. You too!", good: false },
        ],
      },
    ],
  },
};
