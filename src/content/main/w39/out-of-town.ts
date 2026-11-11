import type { Lesson } from "../../types";

/** Week 39, Day 5 (CURRICULUM §4): Indian-English fixes II — out of station, cousin brother, today itself, I am having a car. */
export const day: Lesson = {
  id: "out-of-town",
  kind: "lesson",
  title: { en: "I'm Out of Town", te: "\"Out of station\" వద్దు" },
  subtitle: "I'm out of town till Monday.",
  summary: {
    en: "Learn to say you are away and talk about people clearly: I'm out of town till Monday. He is my cousin.",
    te: "ఊళ్ళో లేనని, మనుషుల గురించి స్పష్టంగా చెప్పడం నేర్చుకుందాం: I'm out of town till Monday. He is my cousin.",
  },
  seo: {
    title: "Out of Town, Not Out of Station, in English for Telugu Speakers",
    description:
      "Say I'm out of town till Monday, my cousin and I have a car. Simple lessons for Telugu speakers on clear everyday English.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "out of town", role: "what" },
    { text: "till Monday.", role: "when" },
  ],
  core: [
    { en: "I'm out of town till Monday.", te: "నేను సోమవారం వరకు ఊళ్ళో లేను.", extra: ["station"] },
    { en: "Satish is my elder cousin. He lives in Guntur.", te: "సతీష్ మా పెద్ద కజిన్. ఆయన గుంటూరులో ఉంటారు.", extra: ["brother"] },
    { en: "I have a small car.", te: "నా దగ్గర ఒక చిన్న కారు ఉంది.", extra: ["having"] },
    { en: "I need it today, please.", te: "నాకు ఇది ఈ రోజే కావాలి.", extra: ["itself"] },
    { en: "I'll be back the day after tomorrow.", te: "ఎల్లుండి తిరిగి వచ్చేస్తాను.", extra: ["on"] },
    { en: "Can I come to the office on Tuesday?", te: "మంగళవారం ఆఫీస్‌కి రావచ్చా?", extra: ["in"] },
    { en: "My younger cousin is on leave this week.", te: "మా చిన్న కజిన్ ఈ వారం సెలవులో ఉన్నారు.", extra: ["sister"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud when you will next be away: I'm out of town till …",
    te: "మళ్ళీ ఎప్పుడు ఊరికి వెళ్తారో గట్టిగా చెప్పండి: I'm out of town till …",
  },
  words: [
    { en: "till", te: "వరకు" },
    { en: "the day after tomorrow", te: "ఎల్లుండి" },
    { en: "elder", te: "పెద్ద (వయసులో)" },
    { en: "younger", te: "చిన్న (వయసులో)" },
    { en: "on leave", te: "సెలవులో" },
  ],
  grammar: ["politeness-softening", "have-has-possessives", "prepositions"],
  topics: ["phone", "offices", "time", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Away from home, said clearly", te: "ఊళ్ళో లేనప్పుడు, స్పష్టంగా" },
      body: {
        en: "Some everyday Indian phrases confuse others. Say out of town, not out of station; my cousin, not cousin brother; today, not today itself; I have a car, not I am having a car.",
        te: "బయటివారికి అర్థమయ్యేలా: out of station కాదు out of town; cousin brother కాదు cousin; today itself కాదు today; am having a car కాదు have a car.",
      },
      bridge: {
        te: ["నేను", "సోమవారం వరకు", "ఊళ్ళో లేను"],
        en: [
          { text: "I'm", role: "who" },
          { text: "out of town", role: "what" },
          { text: "till Monday.", role: "when" },
        ],
      },
      examples: [
        { en: "I'm out of town till Monday.", te: "నేను సోమవారం వరకు ఊళ్ళో లేను." },
        { en: "I have a small car.", te: "నా దగ్గర ఒక చిన్న కారు ఉంది." },
        { en: "I need it today, please.", te: "నాకు ఇది ఈ రోజే కావాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Say it the clear way", te: "స్పష్టంగా ఇలా అనండి" },
      items: [
        {
          form: "out of town, not out of station",
          useFor: { en: "You are away from your town.", te: "మీరు మీ ఊళ్ళో లేనప్పుడు." },
          example: { en: "Sorry, I'm out of town this week.", te: "Sorry, ఈ వారం నేను ఊళ్ళో లేను." },
        },
        {
          form: "my elder cousin, not my cousin brother",
          useFor: { en: "Cousin is for a man or a woman; add elder or younger.", te: "cousin మగవారైనా ఆడవారైనా; పెద్దా చిన్నా అంటే elder, younger చేర్చండి." },
          example: { en: "Satish is my elder cousin. He lives in Guntur.", te: "సతీష్ మా పెద్ద కజిన్. ఆయన గుంటూరులో ఉంటారు." },
        },
        {
          form: "today, not today itself",
          useFor: { en: "Something must happen today.", te: "ఏదైనా ఈ రోజే జరగాలంటే." },
          example: { en: "I need it today, please.", te: "నాకు ఇది ఈ రోజే కావాలి." },
        },
        {
          form: "the day after tomorrow",
          useFor: { en: "Two days from today.", te: "ఎల్లుండి." },
          example: { en: "I'll be back the day after tomorrow.", te: "ఎల్లుండి తిరిగి వచ్చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I'm out of station till Monday.",
      right: "I'm out of town till Monday.",
      why: {
        en: "Out of station is an old Indian office phrase; outside India, people say out of town.",
        te: "out of station పాత ఆఫీస్ మాట, మన దగ్గరే వింటాం; బయట అందరూ out of town అంటారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am having a car.",
      right: "I have a car.",
      why: {
        en: "Have for things you own never takes -ing; am having is an Indian habit.",
        te: "మనకి ఉన్న వస్తువుల గురించి చెప్పేటప్పుడు have కి -ing రాదు; am having మన దగ్గరి అలవాటు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A caller asks you to come today. You are in Tirupati till Monday. What do you say?",
        te: "ఈ రోజు రమ్మని ఒకరు ఫోన్ చేశారు. మీరు సోమవారం వరకు తిరుపతిలో ఉంటారు. ఏమంటారు?",
      },
      options: ["Sorry, I'm out of town till Monday.", "Sorry, I'm out of station till Monday.", "Sorry, I out of town till Monday."],
      answer: 0,
      why: {
        en: "Out of town is understood everywhere, and with I you always need am.",
        te: "out of town అందరికీ అర్థమవుతుంది; I తో ఎప్పుడూ am కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "indian-english",
      sentence: "He is my ___.",
      te: "ఆయన మా కజిన్.",
      options: ["cousin", "cousin brother", "cousins"],
      answer: 0,
      why: {
        en: "Cousin is one word for a man or a woman, so English adds no brother or sister.",
        te: "cousin అనే మాట మగవారికీ ఆడవారికీ ఒకటే; ఇంగ్లీష్‌లో brother, sister చేర్చరు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The bank calls: Please come today itself. What do they mean?",
        te: "బ్యాంక్ నుండి ఫోన్: Please come today itself. అంటే ఏంటి?",
      },
      options: ["Come today, not later.", "Come any day this week.", "Come alone, by yourself."],
      answer: 0,
      why: {
        en: "Today itself is Indian English for today, not later; others simply say today.",
        te: "today itself అంటే ఆలస్యం చేయకుండా ఈ రోజే; బయటివారు today అని మాత్రమే అంటారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I'll come back on the day after tomorrow.",
      wrongIndex: 3,
      fix: "I'll come back the day after tomorrow.",
      why: {
        en: "Like tomorrow, the day after tomorrow needs no on before it.",
        te: "tomorrow లాగే the day after tomorrow ముందు కూడా on రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A friend invites you to a function on Saturday. You are away till Sunday. Tell him.",
        te: "శనివారం ఒక ఫంక్షన్‌కి మీ స్నేహితుడు పిలిచారు. మీరు ఆదివారం వరకు ఊళ్ళో ఉండరు. ఆయనకి చెప్పండి.",
      },
      expected: ["Sorry, I'm out of town till Sunday.", "I'm out of town till Sunday."],
      options: ["Sorry, I'm out of town till Sunday.", "Sorry, I'm out of station till Sunday.", "Sorry, I'm out of town since Sunday."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The bank wants you today. Ask to come on Tuesday instead.",
        te: "బ్యాంక్ వాళ్ళు ఈ రోజే రమ్మంటున్నారు. బదులుగా మంగళవారం రావచ్చా అని అడగండి.",
      },
      expected: ["Can I come on Tuesday instead?", "Can I come to the office on Tuesday?", "Could I come on Tuesday, please?"],
      options: ["Can I come on Tuesday instead?", "I can come on Tuesday instead?", "Tuesday I will come, okay?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call from the office", te: "ఆఫీస్ నుండి ఫోన్" },
    scene: {
      en: "You are on a trip to Tirupati. Joseph from the insurance office calls you.",
      te: "మీరు తిరుపతి యాత్రలో ఉన్నారు. ఇన్సూరెన్స్ ఆఫీస్ నుండి జోసెఫ్ గారు ఫోన్ చేశారు.",
    },
    partner: { en: "Joseph (insurance office)", te: "జోసెఫ్ (ఇన్సూరెన్స్ ఆఫీస్)" },
    voice: "b",
    skills: [
      { id: "away", label: { en: "Saying you are away", te: "ఊళ్ళో లేనని చెప్పడం" } },
      { id: "time", label: { en: "Fixing another day", te: "వేరే రోజు చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Hello, this is Joseph from the insurance office.",
        te: "హలో, నేను ఇన్సూరెన్స్ ఆఫీస్ నుండి జోసెఫ్‌ని.",
        hint: { en: "Greet him, and ask how you can help.", te: "నమస్కారం చెప్పి, ఏం కావాలో అడగండి." },
        replies: [
          { say: "Hello, Joseph. How can I help you?", good: true },
          {
            say: "Hello. Who is this? Tell quickly.",
            good: false,
            react: { en: "Sorry to disturb you. It's about your policy papers.", te: "ఇబ్బంది పెడుతున్నందుకు sorry. మీ policy కాగితాల గురించి." },
          },
        ],
      },
      {
        partner: "We need your signature. Please come today itself.",
        te: "మీ సంతకం కావాలి. ఈ రోజే రండి.",
        hint: { en: "Say sorry, and tell him you are away till Monday.", te: "sorry చెప్పి, సోమవారం వరకు ఊళ్ళో ఉండనని చెప్పండి." },
        replies: [
          { say: "Sorry, I'm out of town till Monday.", good: true, skill: "away" },
          { say: "Sorry, I'm out of station till Monday.", good: false, skill: "away", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Oh. When can you come to the office?",
        te: "అలాగా. ఆఫీస్‌కి ఎప్పుడు రాగలరు?",
        hint: { en: "Say when you will be back, and ask to come the day after.", te: "ఎప్పుడు తిరిగి వస్తారో చెప్పి, ఆ మరుసటి రోజు రావచ్చా అని అడగండి." },
        replies: [
          { say: "I'll be back on Monday. Can I come on Tuesday?", good: true, skill: "time" },
          { say: "I'll be back on Monday. I can come Tuesday?", good: false, skill: "time", fixIt: "question" },
        ],
      },
      {
        partner: "Tuesday is fine. Please bring your Aadhaar card.",
        te: "మంగళవారం పర్వాలేదు. మీ ఆధార్ కార్డ్ తీసుకురండి.",
        hint: { en: "Agree, and thank him for calling.", te: "సరే అని, ఫోన్ చేసినందుకు థ్యాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, I'll bring it. Thank you for calling.", good: true },
          { say: "Sure, I'll bring it. Thank you for call.", good: false },
        ],
      },
    ],
  },
};
