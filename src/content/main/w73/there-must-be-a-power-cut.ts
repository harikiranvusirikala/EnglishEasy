import type { Lesson } from "../../types";

/** Week 73, Day 1 (CURRICULUM §5): must be for a sure guess — All the lights are off. There must be a power cut. */
export const day: Lesson = {
  id: "there-must-be-a-power-cut",
  kind: "lesson",
  title: { en: "There Must Be a Power Cut", te: "కరెంట్ పోయి ఉంటుంది" },
  subtitle: "must be: a sure guess",
  summary: {
    en: "Learn to make a sure guess from what you see: All the lights are off. There must be a power cut.",
    te: "కళ్ళముందు కనిపించేదాన్ని బట్టి గట్టిగా ఊహించడం నేర్చుకుందాం: All the lights are off. There must be a power cut.",
  },
  seo: {
    title: "Must Be for Guessing in English for Telugu Speakers",
    description:
      "Say There must be a power cut and He must be busy. Simple lessons for Telugu speakers on making a sure guess from what you see.",
  },
  pattern: [
    { text: "There", role: "who" },
    { text: "must be", role: "action" },
    { text: "a power cut", role: "what" },
  ],
  core: [
    { en: "There must be a power cut.", te: "కరెంట్ పోయి ఉంటుంది.", extra: ["is"] },
    { en: "All the lights are off in our street.", te: "మా వీధిలో లైట్లన్నీ ఆరిపోయాయి.", extra: ["is"] },
    { en: "He's not answering. He must be busy.", te: "ఆయన ఫోన్ ఎత్తట్లేదు. బిజీగా ఉండి ఉంటారు.", extra: ["to"] },
    { en: "That must be the postman.", te: "వచ్చింది పోస్ట్‌మ్యాన్ అయ్యుంటారు.", extra: ["a"] },
    { en: "It must be the transformer again.", te: "మళ్ళీ ట్రాన్స్‌ఫార్మర్ సమస్యే అయ్యుంటుంది.", extra: ["a"] },
    { en: "The house next door has power. It must be our fuse.", te: "పక్కింట్లో కరెంట్ ఉంది. మన ఫ్యూజ్ పోయి ఉంటుంది.", extra: ["have"] },
    { en: "Her lights are on. She must be at home.", te: "ఆవిడ ఇంట్లో లైట్లు వెలుగుతున్నాయి. ఇంట్లోనే ఉండి ఉంటారు.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When you see or hear something today, guess the reason aloud: It must be …",
    te: "ఈ రోజు ఏదైనా చూసినప్పుడో విన్నప్పుడో, కారణాన్ని గట్టిగా ఊహించి చెప్పండి: It must be …",
  },
  words: [
    { en: "must be", te: "… అయ్యుంటుంది (గట్టి ఊహ)" },
    { en: "guess", te: "ఊహించడం, గెస్ చేయడం" },
    { en: "transformer", te: "ట్రాన్స్‌ఫార్మర్" },
    { en: "fuse", te: "ఫ్యూజ్" },
    { en: "power supply", te: "కరెంట్ సరఫరా" },
  ],
  grammar: ["might-may", "there-is-are", "am-is-are"],
  topics: ["home", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A sure guess: must be", te: "గట్టి ఊహ: must be" },
      body: {
        en: "When you see a clear sign and feel almost sure, say must be. All the lights are off, so there must be a power cut.",
        te: "ఒక స్పష్టమైన గుర్తు చూసి, దాదాపు ఖచ్చితంగా అనిపిస్తే must be అనండి. తెలుగులో '… అయ్యుంటుంది' లాగా: There must be a power cut.",
      },
      bridge: {
        te: ["కరెంట్", "పోయి ఉంటుంది"],
        en: [
          { text: "There", role: "who" },
          { text: "must be", role: "action" },
          { text: "a power cut", role: "what" },
        ],
      },
      examples: [
        { en: "There must be a power cut.", te: "కరెంట్ పోయి ఉంటుంది." },
        { en: "He's not answering. He must be busy.", te: "ఆయన ఫోన్ ఎత్తట్లేదు. బిజీగా ఉండి ఉంటారు." },
        { en: "Her lights are on. She must be at home.", te: "ఆవిడ ఇంట్లో లైట్లు వెలుగుతున్నాయి. ఇంట్లోనే ఉండి ఉంటారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Know or guess?", te: "తెలుసా, ఊహా?" },
      items: [
        {
          form: "is / are",
          useFor: { en: "You know it: you read it or someone told you.", te: "మీకు తెలుసు: చదివారు, లేదా ఎవరో చెప్పారు." },
          example: { en: "There is a power cut till two. It's in the notice.", te: "రెండింటి వరకు కరెంట్ ఉండదు. నోటీసులో ఉంది." },
        },
        {
          form: "must be",
          useFor: { en: "You don't know, but the signs make you almost sure.", te: "మీకు తెలియదు, కానీ గుర్తుల్ని బట్టి దాదాపు ఖచ్చితంగా అనిపిస్తుంది." },
          example: { en: "There must be a power cut.", te: "కరెంట్ పోయి ఉంటుంది." },
        },
        {
          form: "must be + tired, busy, hungry",
          useFor: { en: "A guess about how someone feels.", te: "ఎవరైనా ఎలా ఉన్నారో ఊహించడానికి." },
          example: { en: "He must be tired. He walked from the bus stand.", te: "ఆయన అలసిపోయి ఉంటారు. బస్ స్టాండ్ నుంచి నడిచి వచ్చారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "He must busy.",
      right: "He must be busy.",
      why: {
        en: "A guess needs must be, not must alone; Telugu ఉండి ఉంటారు hides be inside the verb.",
        te: "ఊహకి must తో పాటు be కూడా కావాలి; తెలుగులో 'ఉండి ఉంటారు' లో అది verb లోనే ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "There must be power cut.",
      right: "There must be a power cut.",
      why: {
        en: "One power cut needs a before it; Telugu కరెంట్ పోయింది has no such word.",
        te: "ఒక power cut కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "All the lights in your street go off. You don't know why, but you can guess. What do you say?",
        te: "మీ వీధిలో లైట్లన్నీ ఆరిపోయాయి. ఎందుకో తెలియదు, కానీ ఊహించగలరు. ఏమంటారు?",
      },
      options: ["There must be a power cut.", "There must a power cut.", "Power cut must be there."],
      answer: 0,
      why: {
        en: "A sure guess starts with There must be, and be is never dropped.",
        te: "గట్టి ఊహ There must be తో మొదలవుతుంది; be ని వదలకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Mohan always ___ my calls. He must be busy now.",
      te: "మోహన్ గారు ఎప్పుడూ నా ఫోన్ ఎత్తుతారు. ఇప్పుడు బిజీగా ఉండి ఉంటారు.",
      options: ["answers", "answer", "answering"],
      answer: 0,
      why: {
        en: "Always shows a habit, and one person, like he, adds s to the verb.",
        te: "always అంటే అలవాటు; ఒక్కరైతే (he లాగా) verb కి s చేర్చాలి.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Electricity Department Notice",
      lines: [
        "Dear residents of Gandhi Nagar,",
        "There will be no power supply on Sunday, 14 April.",
        "The power will be off from 9 am to 2 pm.",
        "Our staff will put up a new transformer near the main road.",
        "Please charge your phones and store water before 9 am.",
        "Lifts in the apartments will not work during this time.",
        "We are sorry for the trouble.",
        "Assistant Engineer, Gandhi Nagar",
      ],
      questions: [
        {
          prompt: { en: "Why will the power be off on Sunday?", te: "ఆదివారం కరెంట్ ఎందుకు ఉండదు?" },
          options: ["For work on a new transformer", "Because of heavy rain", "For a festival in the town"],
          answer: 0,
          why: {
            en: "The fourth line says what the staff will do near the main road.",
            te: "మెయిన్ రోడ్ దగ్గర సిబ్బంది ఏం చేస్తారో నాలుగో లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "How long will the power be off?", te: "ఎంతసేపు కరెంట్ ఉండదు?" },
          options: ["Five hours", "Two hours", "The whole day"],
          answer: 0,
          why: {
            en: "Count the hours from nine in the morning to two in the afternoon.",
            te: "పొద్దున తొమ్మిది నుంచి మధ్యాహ్నం రెండు వరకు గంటలు లెక్కపెట్టండి.",
          },
        },
        {
          prompt: { en: "What should you do before 9 am?", te: "పొద్దున 9 లోపు మీరు ఏం చేయాలి?" },
          options: ["Charge your phone and store water", "Call the electricity office", "Go to the main road"],
          answer: 0,
          why: {
            en: "The notice asks people to get ready before the power goes off.",
            te: "కరెంట్ పోయే ముందే సిద్ధంగా ఉండమని నోటీసు అడుగుతోంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The whole street is dark. It must be transformer.",
      wrongIndex: 8,
      fix: "The whole street is dark. It must be the transformer.",
      why: {
        en: "The street has one transformer everybody knows, so it takes the.",
        te: "వీధికి ఉండే ఆ ఒక్క transformer అందరికీ తెలుసు, అందుకే ముందు the కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend calls Ravi three times, but there's no answer. Your friend asks you why. Guess.",
        te: "మీ స్నేహితులు రవి గారికి మూడుసార్లు ఫోన్ చేశారు, కానీ ఆయన ఎత్తలేదు. ఎందుకని మిమ్మల్ని అడుగుతున్నారు. ఊహించి చెప్పండి.",
      },
      expected: ["He must be busy.", "He must be busy right now.", "He's not answering. He must be busy."],
      options: ["He must be busy.", "He must busy.", "He must to be busy."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A visitor asks if your neighbour Padma is in. Her lights are on. Tell him your guess.",
        te: "మీ పక్కింటి పద్మ గారు ఉన్నారా అని ఒక విజిటర్ అడుగుతున్నారు. ఆవిడ ఇంట్లో లైట్లు వెలుగుతున్నాయి. మీ ఊహ చెప్పండి.",
      },
      expected: ["She must be at home.", "Her lights are on. She must be at home.", "She must be inside."],
      options: ["She must be at home.", "She must be in home.", "She must at home."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A dark street", te: "చీకటి వీధి" },
    scene: {
      en: "It's eight at night. Suddenly all the lights go off. You step outside and meet your neighbour Kamala.",
      te: "రాత్రి ఎనిమిది అయింది. ఒక్కసారిగా లైట్లన్నీ ఆరిపోయాయి. మీరు బయటికి వచ్చారు, పక్కింటి కమల గారు కనిపించారు.",
    },
    partner: { en: "Kamala (your neighbour)", te: "కమల (మీ పక్కింటావిడ)" },
    skills: [
      { id: "guess", label: { en: "Making a guess", te: "ఊహించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Oh, it's you! Has your power gone too?",
        te: "ఓ, మీరా! మీ ఇంట్లో కూడా కరెంట్ పోయిందా?",
        hint: { en: "Say yes, and guess the reason from the dark street.", te: "అవునని చెప్పి, చీకటి వీధిని బట్టి కారణం ఊహించండి." },
        replies: [
          { say: "Yes. The whole street is dark. There must be a power cut.", good: true, skill: "guess" },
          { say: "Yes. The whole street is dark. There must be power cut.", good: false, skill: "guess", fixIt: "article" },
        ],
      },
      {
        partner: "But the streetlights near the temple are on.",
        te: "కానీ గుడి దగ్గర వీధి దీపాలు వెలుగుతున్నాయి.",
        hint: { en: "Make a new guess about the transformer on your street.", te: "మీ వీధిలోని transformer గురించి కొత్తగా ఊహించండి." },
        replies: [
          { say: "Then it must be our transformer again.", good: true, skill: "guess" },
          { say: "Then it must our transformer again.", good: false, skill: "guess", fixIt: "be" },
          {
            say: "How do I know? Go and ask the office.",
            good: false,
            skill: "polite",
            react: { en: "Arre, why so angry? I was only asking.", te: "అరె, ఎందుకంత కోపం? ఊరికే అడిగాను అంతే." },
          },
        ],
      },
      {
        partner: "You're right. Last month also, it was the transformer.",
        te: "మీరు చెప్పింది నిజమే. పోయిన నెల కూడా transformer వల్లే పోయింది.",
        hint: { en: "Offer to call the electricity office.", te: "కరెంట్ ఆఫీసుకి ఫోన్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "I'll call the electricity office and ask.", good: true, skill: "polite" },
          { say: "Shall I call the electricity office?", good: true, skill: "polite" },
          { say: "I'll calling the electricity office and ask.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Thank you. I have an inverter. Do you want to charge your phone here?",
        te: "థాంక్యూ. మా ఇంట్లో inverter ఉంది. మీ ఫోన్ ఇక్కడ ఛార్జ్ చేసుకుంటారా?",
        hint: { en: "Say yes, and thank her for being so kind.", te: "సరే అని, ఇంత మంచిగా అడిగినందుకు ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, please. That's very kind of you.", good: true, skill: "polite" },
          { say: "Yes, please. I am needing it badly.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
