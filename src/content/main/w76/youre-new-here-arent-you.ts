import type { Lesson } from "../../types";

/** Week 76, Day 1 (CURRICULUM §5): tag questions with be — You're new here, aren't you? It was very hot yesterday, wasn't it? */
export const day: Lesson = {
  id: "youre-new-here-arent-you",
  kind: "lesson",
  title: { en: "You're New Here, Aren't You?", te: "మీరు ఇక్కడికి కొత్త కదా?" },
  subtitle: "aren't you? isn't it? wasn't it?",
  summary: {
    en: "Learn the English కదా?: You're new here, aren't you? It was very hot yesterday, wasn't it?",
    te: "ఇంగ్లీష్‌లో 'కదా?' ఎలా అనాలో నేర్చుకుందాం: You're new here, aren't you? It was very hot yesterday, wasn't it?",
  },
  seo: {
    title: "Tag Questions With Be in English for Telugu Speakers",
    description:
      "Say You're new here, aren't you? and It was hot yesterday, wasn't it? Simple lessons for Telugu speakers on tag questions.",
  },
  pattern: [
    { text: "You're", role: "who" },
    { text: "new here,", role: "what" },
    { text: "aren't you?", role: "action" },
  ],
  core: [
    { en: "You're new here, aren't you?", te: "మీరు ఇక్కడికి కొత్త కదా?", extra: ["isn't"] },
    { en: "It was very hot yesterday, wasn't it?", te: "నిన్న చాలా ఎండగా ఉంది కదా?", extra: ["isn't"] },
    { en: "The park is very clean, isn't it?", te: "పార్క్ చాలా శుభ్రంగా ఉంది కదా?", extra: ["aren't"] },
    { en: "These walking paths are new, aren't they?", te: "ఈ నడక దారులు కొత్తవి కదా?", extra: ["isn't"] },
    { en: "You were at the temple yesterday, weren't you?", te: "నిన్న మీరు గుడిలో ఉన్నారు కదా?", extra: ["wasn't"] },
    { en: "Satish is a retired teacher, isn't he?", te: "సతీష్ గారు రిటైర్డ్ టీచర్ కదా?", extra: ["it?"] },
    { en: "Padma is an early riser, isn't she?", te: "పద్మ గారు పొద్దున్నే లేస్తారు కదా?", extra: ["a"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say one friendly sentence about today's weather to someone, and end it with isn't it? or wasn't it?",
    te: "ఈ రోజు వాతావరణం గురించి ఎవరితోనైనా ఒక మాట చెప్పి, చివర isn't it? లేదా wasn't it? చేర్చండి.",
  },
  words: [
    { en: "new here", te: "ఇక్కడికి కొత్త" },
    { en: "walker", te: "నడిచేవారు, వాకింగ్‌కి వచ్చేవారు" },
    { en: "lap", te: "ఒక రౌండ్ (నడక దారి చుట్టూ)" },
    { en: "familiar face", te: "ఎక్కడో చూసినట్టున్న ముఖం" },
    { en: "early riser", te: "పొద్దున్నే లేచేవారు" },
  ],
  grammar: ["indirect-tag-questions", "am-is-are", "was-were"],
  topics: ["people", "neighbours", "weather"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The English కదా?", te: "ఇంగ్లీష్‌లో 'కదా?'" },
      body: {
        en: "Telugu adds కదా? to any sentence. English repeats the sentence's own is, are or was, adds not, and keeps the same person: You're new, aren't you?",
        te: "తెలుగులో ఏ వాక్యానికైనా 'కదా?' చేరుస్తాం. ఇంగ్లీష్‌లో వాక్యంలోని is, are, was నే not తో, అదే మనిషితో మళ్ళీ అంటారు: You're new, aren't you?",
      },
      bridge: {
        te: ["మీరు", "ఇక్కడికి కొత్త", "కదా?"],
        en: [
          { text: "You're", role: "who" },
          { text: "new here,", role: "what" },
          { text: "aren't you?", role: "action" },
        ],
      },
      examples: [
        { en: "You're new here, aren't you?", te: "మీరు ఇక్కడికి కొత్త కదా?" },
        { en: "It was very hot yesterday, wasn't it?", te: "నిన్న చాలా ఎండగా ఉంది కదా?" },
        { en: "The park is very clean, isn't it?", te: "పార్క్ చాలా శుభ్రంగా ఉంది కదా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which tag?", te: "ఏ tag వాడాలి?" },
      items: [
        {
          form: "You're …, aren't you?",
          useFor: { en: "With you are.", te: "you are ఉన్నప్పుడు." },
          example: { en: "You're new here, aren't you?", te: "మీరు ఇక్కడికి కొత్త కదా?" },
        },
        {
          form: "It's …, isn't it? / He's …, isn't he?",
          useFor: { en: "With one thing or one person: it, he, she.", te: "ఒక వస్తువు, ఒక మనిషి: it, he, she." },
          example: { en: "Satish is a retired teacher, isn't he?", te: "సతీష్ గారు రిటైర్డ్ టీచర్ కదా?" },
        },
        {
          form: "They're …, aren't they?",
          useFor: { en: "With more than one thing or person.", te: "ఒకటి కంటే ఎక్కువ వస్తువులు, మనుషులు." },
          example: { en: "These walking paths are new, aren't they?", te: "ఈ నడక దారులు కొత్తవి కదా?" },
        },
        {
          form: "It was …, wasn't it?",
          useFor: { en: "For yesterday or before: was and were.", te: "నిన్న, అంతకుముందు: was, were." },
          example: { en: "You were at the temple yesterday, weren't you?", te: "నిన్న మీరు గుడిలో ఉన్నారు కదా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "You're coming for the walk tomorrow, isn't it?",
      right: "You're coming for the walk tomorrow, aren't you?",
      why: {
        en: "Telugu కదా? fits every sentence, but isn't it? fits only it is. With you are, the tag is aren't you.",
        te: "'కదా?' ప్రతి వాక్యానికీ సరిపోతుంది, కానీ isn't it? it is కి మాత్రమే. you are ఉంటే tag aren't you.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "It was very hot yesterday, isn't it?",
      right: "It was very hot yesterday, wasn't it?",
      why: {
        en: "The tag keeps the time of the sentence: was takes wasn't, and is takes isn't.",
        te: "tag వాక్యం కాలాన్నే పాటిస్తుంది: was ఉంటే wasn't, is ఉంటే isn't.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "You haven't seen this walker before. Check that he is new here.",
        te: "ఈ వాకర్ని మీరు ఇంతకుముందు చూడలేదు. ఆయన ఇక్కడికి కొత్తా అని నిర్ధారించుకోండి.",
      },
      options: ["You're new here, aren't you?", "You new here, aren't you?", "You're new here, isn't it?"],
      answer: 0,
      why: {
        en: "You needs are, and the tag repeats it with not; Telugu needs no word for are.",
        te: "you తో are కావాలి, tag లో అదే are not తో వస్తుంది; తెలుగులో are లాంటి పదం అక్కర్లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "These walking paths are new, ___?",
      te: "ఈ నడక దారులు కొత్తవి కదా?",
      options: ["aren't they", "isn't it", "don't they"],
      answer: 0,
      why: {
        en: "Paths are more than one, so the tag uses aren't they, from the are before it.",
        te: "దారులు ఒకటి కంటే ఎక్కువ, ముందు are ఉంది; అందుకే tag aren't they.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "A new walker asks about the park. Tell her it has a good walking track.",
        te: "కొత్తగా వచ్చిన వాకర్ పార్క్ గురించి అడుగుతున్నారు. ఇక్కడ మంచి walking track ఉందని చెప్పండి.",
      },
      options: ["It has a nice walking track.", "It has nice walking track.", "It is having a nice walking track."],
      answer: 0,
      why: {
        en: "One track needs a before it, and has is a state, so no -ing.",
        te: "ఒక track కాబట్టి ముందు a కావాలి; has ఒక స్థితి, అందుకే -ing రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "indian-english",
      sentence: "Satish is a retired teacher, isn't it?",
      wrongIndex: 6,
      fix: "Satish is a retired teacher, isn't he?",
      why: {
        en: "For a man, the tag uses he; it is only for things, never for people.",
        te: "మగవారి గురించి అయితే tag లో he వస్తుంది; it వస్తువులకే, మనుషులకి కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Last night was very windy. Say this to the walker next to you, expecting a yes.",
        te: "నిన్న రాత్రి చాలా గాలి వీచింది. పక్కన నడుస్తున్నవారికి ఇది చెప్పండి; వాళ్ళు అవును అంటారని తెలుసు.",
      },
      expected: ["It was very windy last night, wasn't it?", "It was windy last night, wasn't it?", "Very windy last night, wasn't it?"],
      options: ["It was very windy last night, wasn't it?", "It was very windy last night, isn't it?", "It was very windy in last night, wasn't it?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You think the new walker is from Guntur. Check with her.",
        te: "కొత్త వాకర్ గారు గుంటూరు నుంచి వచ్చారని మీకు అనిపిస్తోంది. ఆవిడని అడిగి నిర్ధారించుకోండి.",
      },
      expected: ["You're from Guntur, aren't you?", "You are from Guntur, aren't you?", "Are you from Guntur?"],
      options: ["You're from Guntur, aren't you?", "You from Guntur, aren't you?", "You're from Guntur, isn't it?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new walker", te: "కొత్త వాకర్" },
    scene: {
      en: "It is early morning at the park. A woman you have never seen before walks up to you.",
      te: "పొద్దున్నే పార్క్‌లో ఉన్నారు. ఇంతకుముందు ఎప్పుడూ చూడని ఒకావిడ మీ దగ్గరికి వచ్చారు.",
    },
    partner: { en: "Ayesha (a new walker)", te: "ఆయేషా (కొత్త వాకర్)" },
    skills: [
      { id: "tags", label: { en: "Tag questions", te: "కదా? ప్రశ్నలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Is this the way to the walking track?",
        te: "గుడ్ మార్నింగ్! walking track కి ఇదేనా దారి?",
        hint: { en: "Say yes, and check that she is new here.", te: "అవును అని చెప్పి, ఆవిడ ఇక్కడికి కొత్తా అని నిర్ధారించుకోండి." },
        replies: [
          { say: "Yes, it is. You're new here, aren't you?", good: true, skill: "tags" },
          { say: "Yes, it is. You're new here, isn't it?", good: false, skill: "tags", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Yes, I moved here from Kurnool last week.",
        te: "అవునండి, పోయిన వారమే కర్నూలు నుంచి ఇక్కడికి వచ్చాను.",
        hint: { en: "Welcome her, and say something about the summer heat in Kurnool, expecting a yes.", te: "ఆవిడకి స్వాగతం చెప్పి, కర్నూలు ఎండల గురించి ఒక మాట అనండి; ఆవిడ అవును అంటారు." },
        replies: [
          { say: "Welcome! Kurnool is very hot in summer, isn't it?", good: true, skill: "tags" },
          {
            say: "Kurnool? Such a hot place. I could never live there.",
            good: false,
            skill: "polite",
            react: { en: "Well, it was my home for forty years!", te: "అదేంటండీ, నలభై ఏళ్ళు అదే మా ఊరు!" },
          },
        ],
      },
      {
        partner: "Very hot! How many laps do you walk every day?",
        te: "చాలా ఎండ! మీరు రోజూ ఎన్ని రౌండ్లు నడుస్తారు?",
        hint: { en: "Say four, and say what time you start.", te: "నాలుగు అని చెప్పి, ఎన్నింటికి మొదలుపెడతారో చెప్పండి." },
        replies: [
          { say: "I walk four laps. I start at six.", good: true, skill: "tags" },
          { say: "I walk four lap. I start at six.", good: false, skill: "tags", fixIt: "plural" },
        ],
      },
      {
        partner: "That's a good habit. Nice to meet you. I'm Ayesha.",
        te: "మంచి అలవాటు. మిమ్మల్ని కలవడం సంతోషం. నా పేరు ఆయేషా.",
        hint: { en: "Say you are happy to meet her too, and give your name.", te: "మిమ్మల్ని కలవడం నాకూ సంతోషం అని చెప్పి, మీ పేరు చెప్పండి." },
        replies: [
          { say: "Nice to meet you too. I'm Kiran.", good: true, skill: "polite" },
          { say: "Myself Kiran. Nice to meet you.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
