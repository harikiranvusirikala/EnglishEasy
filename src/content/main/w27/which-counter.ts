import type { Lesson } from "../../types";

/** Week 27, Day 5 (CURRICULUM §4): a busy office — Which counter is for …? Where do I get a token? queues and counters. */
export const day: Lesson = {
  id: "which-counter",
  kind: "lesson",
  title: { en: "Which Counter?", te: "ఏ కౌంటర్?" },
  subtitle: "Which counter …? Where do I get …?",
  summary: {
    en: "Learn to find your way in a busy office: Which counter is for pensions? Where do I get a token?",
    te: "రద్దీగా ఉన్న ఆఫీసులో దారి తెలుసుకోవడం నేర్చుకుందాం: Which counter is for pensions? Where do I get a token?",
  },
  seo: {
    title: "Counters, Tokens and Queues in English for Telugu Speakers",
    description:
      "Ask Which counter is for pensions? and Where do I get a token? Simple lessons for Telugu speakers on finding help at a busy office.",
  },
  pattern: [
    { text: "Which counter", role: "who" },
    { text: "is", role: "action" },
    { text: "for pensions?", role: "what" },
  ],
  core: [
    { en: "Which counter is for pensions?", te: "పెన్షన్లకి ఏ కౌంటర్?", extra: ["are"] },
    { en: "Where do I get a token?", te: "టోకెన్ ఎక్కడ తీసుకోవాలి?", extra: ["am"] },
    { en: "Is this the queue for water bills?", te: "నీటి బిల్లుల క్యూ ఇదేనా?", extra: ["of"] },
    { en: "Please go to counter number five.", te: "దయచేసి ఐదో నంబర్ కౌంటర్‌కి వెళ్ళండి.", extra: ["at"] },
    { en: "My token number is forty-two.", te: "నా టోకెన్ నంబర్ నలభై రెండు.", extra: ["are"] },
    { en: "The officer comes at eleven o'clock.", te: "ఆఫీసర్ పదకొండు గంటలకి వస్తారు.", extra: ["come"] },
    { en: "Excuse me, is this the end of the queue?", te: "ఎక్స్‌క్యూజ్ మీ, క్యూ చివర ఇక్కడేనా?", extra: ["last"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you see a queue, ask: Excuse me, is this the end of the queue?",
    te: "ఈసారి క్యూ కనిపిస్తే అడగండి: Excuse me, is this the end of the queue?",
  },
  words: [
    { en: "counter", te: "కౌంటర్" },
    { en: "enquiry desk", te: "ఎంక్వయిరీ డెస్క్, వివరాలు చెప్పే చోటు" },
    { en: "water bill", te: "నీటి బిల్లు" },
    { en: "officer", te: "ఆఫీసర్, అధికారి" },
    { en: "municipal office", te: "మున్సిపల్ ఆఫీసు" },
  ],
  grammar: ["question-words", "am-is-are", "present-simple"],
  topics: ["offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Finding the right counter", te: "సరైన కౌంటర్ తెలుసుకోవడం" },
      body: {
        en: "In a big office, first ask: Which counter is for pensions? Then ask what to do: Where do I get a token? Telugu ఏ కౌంటర్? has no verb, but English needs is.",
        te: "పెద్ద ఆఫీసులో ముందు అడగండి: Which counter is for pensions? తర్వాత ఏం చేయాలో: Where do I get a token? తెలుగులో 'ఏ కౌంటర్?' కి verb అక్కర్లేదు, ఇంగ్లీష్‌లో is కావాలి.",
      },
      bridge: {
        te: ["పెన్షన్లకి", "ఏ కౌంటర్?"],
        en: [
          { text: "Which counter", role: "who" },
          { text: "is", role: "action" },
          { text: "for pensions?", role: "what" },
        ],
      },
      examples: [
        { en: "Which counter is for pensions?", te: "పెన్షన్లకి ఏ కౌంటర్?" },
        { en: "Where do I get a token?", te: "టోకెన్ ఎక్కడ తీసుకోవాలి?" },
        { en: "Please go to counter number five.", te: "దయచేసి ఐదో నంబర్ కౌంటర్‌కి వెళ్ళండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Token, queue, counter", te: "టోకెన్, క్యూ, కౌంటర్" },
      items: [
        {
          form: "token",
          useFor: { en: "A slip with your number; wait for your turn.", te: "మీ నంబర్ ఉన్న చీటీ; మీ వంతు కోసం ఆగండి." },
          example: { en: "My token number is forty-two.", te: "నా టోకెన్ నంబర్ నలభై రెండు." },
        },
        {
          form: "queue",
          useFor: { en: "People standing one behind another.", te: "ఒకరి వెనక ఒకరు నిలబడిన వరుస." },
          example: { en: "Excuse me, is this the end of the queue?", te: "ఎక్స్‌క్యూజ్ మీ, క్యూ చివర ఇక్కడేనా?" },
        },
        {
          form: "counter",
          useFor: { en: "The window where a clerk does your work.", te: "క్లర్క్ మీ పని చేసే కిటికీ." },
          example: { en: "Is this the counter for water bills?", te: "నీటి బిల్లుల కౌంటర్ ఇదేనా?" },
        },
        {
          form: "enquiry desk",
          useFor: { en: "Where you ask which counter to go to.", te: "ఏ కౌంటర్‌కి వెళ్ళాలో అడిగే చోటు." },
          example: { en: "Excuse me, where is the enquiry desk?", te: "ఎక్స్‌క్యూజ్ మీ, ఎంక్వయిరీ డెస్క్ ఎక్కడ?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "Which counter for pensions?",
      right: "Which counter is for pensions?",
      why: {
        en: "Telugu ఏ కౌంటర్? has no verb, but English needs is after counter.",
        te: "'ఏ కౌంటర్?' లో verb లేదు; ఇంగ్లీష్‌లో counter తర్వాత is కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The officer come at eleven.",
      right: "The officer comes at eleven.",
      why: {
        en: "One person, like he or she, needs s on the verb: come changes to comes.",
        te: "ఒక్కరే (he, she లాగా) అయితే verb కి s చేర్చాలి: come కాదు, comes.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "You want the counter for water bills. What do you ask?", te: "నీటి బిల్లు కౌంటర్ ఏదో తెలుసుకోవాలి. ఏమని అడుగుతారు?" },
      options: ["Which counter is for water bills?", "Which counter for water bills?", "Which counter is water bills for?"],
      answer: 0,
      why: {
        en: "The question needs is right after counter, though Telugu uses no verb.",
        te: "counter తర్వాతే is రావాలి; తెలుగులో verb లేకపోయినా.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The officer ___ at eleven o'clock.",
      te: "ఆఫీసర్ పదకొండు గంటలకి వస్తారు.",
      options: ["comes", "come", "coming"],
      answer: 0,
      why: {
        en: "One person, like he or she, takes s on the verb.",
        te: "ఒక్కరే (he, she లాగా) అయితే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Your token is 42. The board shows 41. What does it mean?", te: "మీ టోకెన్ 42. బోర్డు మీద 41 ఉంది. అంటే ఏంటి?" },
      options: ["You are next.", "It is your turn now.", "You missed your turn."],
      answer: 0,
      why: {
        en: "The board shows the number at the counter now, and 42 comes right after 41.",
        te: "బోర్డు మీద ఇప్పుడు జరుగుతున్న నంబర్ 41; దాని తర్వాతే 42, అంటే మీరే.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "Where I can get a token?",
      wrongIndex: 1,
      fix: "Where can I get a token?",
      why: {
        en: "In a question, can comes before I, not after it.",
        te: "ప్రశ్నలో can, I కంటే ముందు రావాలి; తర్వాత కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You need a token. Ask where to get one.",
        te: "మీకు టోకెన్ కావాలి. ఎక్కడ తీసుకోవాలో అడగండి.",
      },
      expected: ["Where do I get a token?", "Excuse me, where do I get a token?", "Where can I get a token?"],
      options: ["Where do I get a token?", "Where I get a token?", "Token where?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask a man in the line if this is the queue for pensions.",
        te: "లైన్‌లో ఉన్న ఒకాయనని, ఈ క్యూ పెన్షన్ల కోసమేనా అని అడగండి.",
      },
      expected: ["Is this the queue for pensions?", "Excuse me, is this the queue for pensions?"],
      options: ["Is this the queue for pensions?", "This is the queue for pensions?", "Is this queue of pensions?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the municipal office", te: "మున్సిపల్ ఆఫీసులో" },
    scene: {
      en: "You want to pay your water bill at the municipal office. Joseph works at the enquiry desk.",
      te: "మీరు మున్సిపల్ ఆఫీసులో నీటి బిల్లు కట్టాలి. జోసెఫ్ ఎంక్వయిరీ డెస్క్ దగ్గర పని చేస్తారు.",
    },
    partner: { en: "Joseph (enquiry desk)", te: "జోసెఫ్ (ఎంక్వయిరీ డెస్క్)" },
    voice: "b",
    skills: [{ id: "find", label: { en: "Finding the counter", te: "కౌంటర్ కనుక్కోవడం" } }],
    turns: [
      {
        partner: "Good morning. Yes, tell me.",
        te: "నమస్కారం. చెప్పండి.",
        hint: { en: "Greet him, and ask where to pay your water bill.", te: "నమస్కారం చెప్పి, నీటి బిల్లు ఎక్కడ కట్టాలో అడగండి." },
        replies: [
          { say: "Good morning. Which counter is for water bills?", good: true, skill: "find" },
          { say: "Good morning. Which counter for water bills?", good: false, skill: "find", fixIt: "be" },
        ],
      },
      {
        partner: "Counter number five. But first, take a token.",
        te: "ఐదో నంబర్ కౌంటర్. కానీ ముందు టోకెన్ తీసుకోండి.",
        hint: { en: "Ask where to get one.", te: "అది ఎక్కడ తీసుకోవాలో అడగండి." },
        replies: [
          { say: "Where do I get a token?", good: true, skill: "find" },
          { say: "Where I get the token?", good: false, skill: "find" },
        ],
      },
      {
        partner: "From that machine near the door.",
        te: "తలుపు దగ్గర ఉన్న ఆ మెషిన్ నుంచి.",
        hint: { en: "Thank him, and ask when the officer comes.", te: "థాంక్స్ చెప్పి, ఆఫీసర్ ఎప్పుడు వస్తారో అడగండి." },
        replies: [
          { say: "Thank you. When does the officer come?", good: true, skill: "find" },
          { say: "Thank you. When the officer comes?", good: false, skill: "find", fixIt: "question" },
        ],
      },
      {
        partner: "He comes at eleven. Please wait there.",
        te: "ఆయన పదకొండు గంటలకి వస్తారు. అక్కడ ఆగండి.",
        hint: { en: "Say you will wait, and thank him.", te: "ఆగుతానని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I will wait. Thank you.", good: true },
          {
            say: "Eleven? I can't wait so long!",
            good: false,
            react: { en: "Sorry, the officer is in a meeting now.", te: "సారీ అండీ, ఆఫీసర్ ఇప్పుడు మీటింగ్‌లో ఉన్నారు." },
          },
        ],
      },
    ],
  },
};
