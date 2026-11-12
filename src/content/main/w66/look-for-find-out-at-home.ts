import type { Lesson } from "../../types";

/** Week 66, Day 3 (CURRICULUM §5): look for, look after, find out — I'm looking for my reading glasses. */
export const day: Lesson = {
  id: "look-for-find-out-at-home",
  kind: "lesson",
  title: { en: "Look For, Find Out", te: "వెతకడం, తెలుసుకోవడం" },
  subtitle: "look for, look after, find out",
  summary: {
    en: "Learn to talk about searching and checking: I'm looking for my reading glasses. Can you find out when the plumber is coming?",
    te: "వెతకడం, కనుక్కోవడం గురించి మాట్లాడటం నేర్చుకుందాం: I'm looking for my reading glasses. Can you find out when the plumber is coming?",
  },
  seo: {
    title: "Look For and Find Out in English for Telugu Speakers",
    description:
      "Say I'm looking for my reading glasses and Can you find out when the plumber is coming? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "looking for", role: "action" },
    { text: "my reading glasses", role: "what" },
  ],
  core: [
    { en: "I'm looking for my reading glasses.", te: "నా చదువుకునే కళ్ళజోడు కోసం వెతుకుతున్నాను.", extra: ["glass"] },
    { en: "Can you find out when the plumber is coming?", te: "ప్లంబర్ ఎప్పుడు వస్తున్నారో కనుక్కుంటారా?", extra: ["does"] },
    { en: "Have you seen my phone anywhere?", te: "నా ఫోన్ ఎక్కడైనా చూశారా?", extra: ["saw"] },
    { en: "I'll look after the house this weekend.", te: "ఈ వీకెండ్ ఇల్లు నేను చూసుకుంటాను.", extra: ["for"] },
    { en: "They were behind the sofa all the time!", te: "అవి ఇంతసేపూ సోఫా వెనకాలే ఉన్నాయి!", extra: ["was"] },
    { en: "Let me find out the price first.", te: "ముందు ధర ఎంతో కనుక్కుంటాను.", extra: ["know"] },
    { en: "Could you look for my keys in the bedroom?", te: "కొంచెం బెడ్‌రూమ్‌లో నా తాళాలు వెతుకుతారా?", extra: ["search"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find out one thing today, like a shop's closing time, and say: I found out that the shop closes at nine.",
    te: "ఈ రోజు ఒక విషయం కనుక్కోండి, ఉదాహరణకి షాప్ ఎప్పుడు మూస్తారో. తర్వాత చెప్పండి: I found out that the shop closes at nine.",
  },
  words: [
    { en: "look for", te: "వెతకడం" },
    { en: "find out", te: "కనుక్కోవడం, తెలుసుకోవడం" },
    { en: "reading glasses", te: "చదువుకునే కళ్ళజోడు" },
    { en: "misplaced", te: "ఎక్కడో పెట్టి మర్చిపోయిన" },
    { en: "sofa", te: "సోఫా" },
  ],
  grammar: ["phrasal-verbs", "indirect-tag-questions", "present-perfect"],
  topics: ["home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Look for and find out", te: "వెతకడం, కనుక్కోవడం" },
      body: {
        en: "Look for means try to find a thing. Find out means learn a fact, like a time or a price. Look after means take care of.",
        te: "look for అంటే ఒక వస్తువు కోసం వెతకడం. find out అంటే టైమ్, ధర లాంటి విషయం కనుక్కోవడం. look after అంటే జాగ్రత్తగా చూసుకోవడం.",
      },
      bridge: {
        te: ["నా", "కళ్ళజోడు కోసం", "వెతుకుతున్నాను"],
        en: [
          { text: "I'm", role: "who" },
          { text: "looking for", role: "action" },
          { text: "my reading glasses", role: "what" },
        ],
      },
      examples: [
        { en: "I'm looking for my reading glasses.", te: "నా చదువుకునే కళ్ళజోడు కోసం వెతుకుతున్నాను." },
        { en: "Can you find out when the plumber is coming?", te: "ప్లంబర్ ఎప్పుడు వస్తున్నారో కనుక్కుంటారా?" },
        { en: "Could you look for my keys in the bedroom?", te: "కొంచెం బెడ్‌రూమ్‌లో నా తాళాలు వెతుకుతారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Look for, find or find out?", te: "look for, find, find out: తేడా" },
      items: [
        {
          form: "look for",
          useFor: { en: "While you are still searching.", te: "ఇంకా వెతుకుతున్నప్పుడు." },
          example: { en: "I'm looking for my reading glasses.", te: "నా చదువుకునే కళ్ళజోడు కోసం వెతుకుతున్నాను." },
        },
        {
          form: "find",
          useFor: { en: "When you get it at last.", te: "చివరికి దొరికినప్పుడు." },
          example: { en: "I found them behind the sofa.", te: "అవి సోఫా వెనకాల దొరికాయి." },
        },
        {
          form: "find out",
          useFor: { en: "Learn a fact: a time, a price, a date.", te: "ఒక విషయం తెలుసుకోవడానికి: టైమ్, ధర, తేదీ." },
          example: { en: "Let me find out the price first.", te: "ముందు ధర ఎంతో కనుక్కుంటాను." },
        },
        {
          form: "look after",
          useFor: { en: "Take care of a person, a plant or a house.", te: "మనిషిని, మొక్కలని, ఇంటిని జాగ్రత్తగా చూసుకోవడానికి." },
          example: { en: "I'll look after the house this weekend.", te: "ఈ వీకెండ్ ఇల్లు నేను చూసుకుంటాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Can you find out when is the plumber coming?",
      right: "Can you find out when the plumber is coming?",
      why: {
        en: "Inside a request, the when part keeps the normal order, with is after the person.",
        te: "ఒక అడగడం లోపల వచ్చే when భాగంలో మామూలు వరుసే: మనిషి తర్వాత is.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'm searching my glasses.",
      right: "I'm looking for my glasses.",
      why: {
        en: "You search a place, like a room or a bag; for a lost thing, say look for.",
        te: "search తర్వాత చోటు వస్తుంది (గది, బ్యాగ్); పోయిన వస్తువు కోసం అయితే look for అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your friend asks: Haven't you found your glasses yet? You have not. What do you say?",
        te: "ఇంకా మీ కళ్ళజోడు దొరకలేదా? అని స్నేహితులు అడుగుతున్నారు. దొరకలేదు. ఏమంటారు?",
      },
      options: ["No, not yet.", "Yes, not yet.", "Yes, I haven't."],
      answer: 0,
      why: {
        en: "English answers the fact, not the question: nothing found, so say no. Telugu అవును does not fit here.",
        te: "ఇంగ్లీష్‌లో జవాబు నిజాన్ని బట్టి: దొరకలేదు కాబట్టి No. తెలుగులో లాగా 'అవును' అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Could you ___ my plants while I'm in Tirupati?",
      te: "నేను తిరుపతిలో ఉన్నప్పుడు నా మొక్కలని కొంచెం చూసుకుంటారా?",
      options: ["look after", "look for", "find out"],
      answer: 0,
      why: {
        en: "Look after means take care of; look for means search for something lost.",
        te: "look after అంటే జాగ్రత్తగా చూసుకోవడం; look for అంటే పోయినదాని కోసం వెతకడం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "The electrician will come today, but you don't know the time. Ask your neighbour Sarala to check.",
        te: "ఎలక్ట్రీషియన్ ఈ రోజు వస్తారు, కానీ టైమ్ తెలీదు. కనుక్కోమని మీ పక్కింటి సరళ గారిని అడగండి.",
      },
      options: ["Could you find out when he is coming?", "Could you find out when is he coming?", "Could you find when he is coming?"],
      answer: 0,
      why: {
        en: "Inside a request, he comes before is; and a fact needs find out, not find.",
        te: "అడగడం లోపల he తర్వాతే is; ఒక విషయం తెలుసుకోవడానికి find కాదు, find out.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "My reading glasses was on the table.",
      wrongIndex: 3,
      fix: "My reading glasses were on the table.",
      why: {
        en: "Glasses is always plural in English, so it takes were, even for one pair.",
        te: "ఇంగ్లీష్‌లో glasses ఎప్పుడూ plural, ఒక్క జత అయినా were వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: Didn't you see my phone? You didn't see it. Answer.",
        te: "నా ఫోన్ చూడలేదా? అని మీ స్నేహితులు అడుగుతున్నారు. మీరు చూడలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I didn't see it.", "No, I didn't.", "No, sorry, I didn't see it."],
      options: ["No, I didn't see it.", "Yes, I didn't see it.", "No, I didn't saw it."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "You can't find your house keys. Ask your friend to help you search.",
        te: "మీ ఇంటి తాళాలు కనిపించట్లేదు. వెతకడానికి సాయం చేయమని స్నేహితులని అడగండి.",
      },
      expected: [
        "Could you help me look for my keys?",
        "Can you help me look for my keys?",
        "I'm looking for my keys. Can you help me?",
      ],
      options: ["Could you help me look for my keys?", "Could you help me search my keys?", "Could you help me look my keys?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Where are my glasses?", te: "నా కళ్ళజోడు ఎక్కడ?" },
    scene: {
      en: "Your friend Fatima has come to visit. You want to read her a letter, but your glasses are missing.",
      te: "మీ స్నేహితురాలు ఫాతిమా గారు మిమ్మల్ని చూడటానికి వచ్చారు. ఆవిడకి ఒక ఉత్తరం చదివి వినిపించాలి, కానీ మీ కళ్ళజోడు కనిపించట్లేదు.",
    },
    partner: { en: "Fatima (your friend)", te: "ఫాతిమా (మీ స్నేహితురాలు)" },
    skills: [
      { id: "search", label: { en: "Asking for help", te: "సాయం అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "You look worried. Is something wrong?",
        te: "మీరు కంగారుగా ఉన్నారు. ఏమైనా సమస్యా?",
        hint: { en: "Say you are searching for your reading glasses.", te: "మీ చదువుకునే కళ్ళజోడు కోసం వెతుకుతున్నారని చెప్పండి." },
        replies: [
          { say: "I'm looking for my reading glasses.", good: true, skill: "search" },
          { say: "I've misplaced my reading glasses.", good: true, skill: "search" },
          { say: "I'm searching my reading glasses.", good: false, skill: "search", fixIt: "preposition" },
        ],
      },
      {
        partner: "Oh no. Where did you last see them?",
        te: "అయ్యో. చివరిసారి ఎక్కడ చూశారు?",
        hint: { en: "Say you were reading the newspaper on the sofa.", te: "సోఫా మీద కూర్చుని పేపర్ చదువుతున్నారని చెప్పండి." },
        replies: [
          { say: "I was reading the paper on the sofa.", good: true, skill: "search" },
          { say: "I was read the paper on the sofa.", good: false, skill: "search" },
        ],
      },
      {
        partner: "Let me look. Here they are, behind the cushion!",
        te: "నేను చూస్తాను. ఇదిగో, కుషన్ వెనకాల ఉన్నాయి!",
        hint: { en: "Thank her happily.", te: "సంతోషంగా ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Oh, thank you! You've found them!", good: true, skill: "polite" },
          {
            say: "Finally. Why did you take so long?",
            good: false,
            skill: "polite",
            react: { en: "Long? I found them in one minute!", te: "ఆలస్యమా? ఒక్క నిమిషంలో వెతికి పెట్టాను!" },
          },
        ],
      },
      {
        partner: "Haven't you checked your eyes recently? These look old.",
        te: "ఈ మధ్య కళ్ళు చెక్ చేయించుకోలేదా? ఇవి పాతవిలా ఉన్నాయి.",
        hint: { en: "Say no, and that you will check when the eye clinic is open.", te: "లేదని చెప్పి, కళ్ళ క్లినిక్ ఎప్పుడు తెరుస్తారో కనుక్కుంటానని చెప్పండి." },
        replies: [
          { say: "No, I haven't. I'll find out the clinic timings.", good: true, skill: "search" },
          { say: "Yes, I haven't. I'll find out the clinic timings.", good: false, skill: "search", fixIt: "negative-answer" },
        ],
      },
    ],
  },
};
