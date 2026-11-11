import type { Lesson } from "../../types";

/** Week 24, Day 5 (CURRICULUM §4): past simple + past continuous in a short story — telling a doctor how you fell. */
export const day: Lesson = {
  id: "telling-what-happened",
  kind: "lesson",
  title: { en: "Telling What Happened", te: "ఏం జరిగిందో చెప్పడం" },
  subtitle: "a short story in the past",
  summary: {
    en: "Learn to tell a short story of what happened: I was crossing the road when a bike hit me.",
    te: "జరిగినదాన్ని చిన్న కథలా చెప్పడం నేర్చుకుందాం: I was crossing the road when a bike hit me.",
  },
  seo: {
    title: "Telling What Happened in English for Telugu Speakers",
    description:
      "Say I was crossing the road when a bike hit me and I slipped while I was getting off the bus. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was crossing", role: "action" },
    { text: "the road", role: "what" },
    { text: "when a bike hit me", role: "when" },
  ],
  core: [
    { en: "I was crossing the road when a bike hit me.", te: "నేను రోడ్డు దాటుతూ ఉంటే ఒక బైక్ నన్ను గుద్దింది.", extra: ["hitting"] },
    { en: "I slipped while I was getting off the bus.", te: "బస్సు దిగుతూ ఉండగా జారిపడ్డాను.", extra: ["from"] },
    { en: "I hurt my ankle.", te: "నా చీలమండకి దెబ్బ తగిలింది.", extra: ["hurted"] },
    { en: "The floor was wet, and I fell.", te: "నేల తడిగా ఉంది, నేను పడిపోయాను.", extra: ["falled"] },
    { en: "I twisted my ankle in a pothole.", te: "గుంటలో కాలు పడి చీలమండ బెణికింది.", extra: ["on"] },
    { en: "It happened at about six in the evening.", te: "సాయంత్రం దాదాపు ఆరింటికి జరిగింది.", extra: ["on"] },
    { en: "First I fell, then I called my friend.", te: "ముందు పడిపోయాను, తర్వాత నా స్నేహితులకి ఫోన్ చేశాను.", extra: ["calling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Remember a small fall or slip. Tell it in two sentences: what you were doing, and what happened.",
    te: "ఎప్పుడో జరిగిన చిన్న జారుడు గుర్తు చేసుకోండి. రెండు వాక్యాల్లో చెప్పండి: అప్పుడు ఏం చేస్తున్నారు, ఏం జరిగింది.",
  },
  words: [
    { en: "ankle", te: "చీలమండ" },
    { en: "hurt", te: "దెబ్బ తగలడం, నొప్పి పెట్టడం" },
    { en: "twisted", te: "బెణికింది, మెలిక పడింది" },
    { en: "floor", te: "నేల" },
    { en: "pothole", te: "రోడ్డు మీద గుంట" },
  ],
  grammar: ["past-continuous", "past-simple"],
  topics: ["health", "doctor", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Telling a short story", te: "చిన్న కథలా చెప్పడం" },
      body: {
        en: "Start with what was going on, with -ing: I was crossing the road. Then say what happened, in the past: a bike hit me. Then say what you did next.",
        te: "ముందు అప్పుడు జరుగుతున్నది -ing తో: I was crossing the road. తర్వాత ఏం జరిగిందో past లో: a bike hit me. ఆ తర్వాత మీరు ఏం చేశారో చెప్పండి.",
      },
      bridge: {
        te: ["నేను", "రోడ్డు దాటుతూ ఉంటే", "ఒక బైక్ నన్ను గుద్దింది"],
        en: [
          { text: "I", role: "who" },
          { text: "was crossing the road", role: "action" },
          { text: "when a bike hit me", role: "when" },
        ],
      },
      examples: [
        { en: "I was crossing the road when a bike hit me.", te: "నేను రోడ్డు దాటుతూ ఉంటే ఒక బైక్ నన్ను గుద్దింది." },
        { en: "I slipped while I was getting off the bus.", te: "బస్సు దిగుతూ ఉండగా జారిపడ్డాను." },
        { en: "It happened at about six in the evening.", te: "సాయంత్రం దాదాపు ఆరింటికి జరిగింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The parts of your story", te: "మీ కథలో భాగాలు" },
      items: [
        {
          form: "was / were …ing",
          useFor: { en: "What was going on.", te: "అప్పుడు జరుగుతూ ఉన్నది." },
          example: { en: "I was getting off the bus.", te: "నేను బస్సు దిగుతూ ఉన్నాను." },
        },
        {
          form: "the past: slipped, fell",
          useFor: { en: "What happened suddenly.", te: "ఒక్కసారిగా జరిగినది." },
          example: { en: "The floor was wet, and I fell.", te: "నేల తడిగా ఉంది, నేను పడిపోయాను." },
        },
        {
          form: "First …, then …",
          useFor: { en: "What happened next, in order.", te: "తర్వాత ఏం జరిగిందో వరుసగా." },
          example: { en: "First I fell, then I called my friend.", te: "ముందు పడిపోయాను, తర్వాత నా స్నేహితులకి ఫోన్ చేశాను." },
        },
        {
          form: "It happened at …",
          useFor: { en: "The time it happened.", te: "జరిగిన సమయం." },
          example: { en: "It happened at about six in the evening.", te: "సాయంత్రం దాదాపు ఆరింటికి జరిగింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I was getting off from the bus.",
      right: "I was getting off the bus.",
      why: {
        en: "Off already means from, so do not add from after it.",
        te: "off అంటేనే 'నుంచి'; దాని తర్వాత from అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I hurted my ankle.",
      right: "I hurt my ankle.",
      why: {
        en: "Hurt stays hurt in the past; there is no word hurted.",
        te: "hurt కి past కూడా hurt; hurted అనే మాటే లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: [
        "I was crossing the road when a bike hit me.",
        "I am crossing the road when a bike hit me.",
        "I was crossing the road when a bike hitting me.",
      ],
      answer: 0,
      why: {
        en: "Crossing went on for a while; the hit was sudden, so it takes the past.",
        te: "రోడ్డు దాటడం కాసేపు జరిగింది (was, -ing); గుద్దడం ఒక్కసారిగా జరిగింది, అందుకే past.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I slipped while I ___ getting off the bus.",
      te: "బస్సు దిగుతూ ఉండగా జారిపడ్డాను.",
      options: ["was", "am", "did"],
      answer: 0,
      why: {
        en: "The story is in the past, so use was before the -ing verb.",
        te: "కథ గతంలో జరిగింది, అందుకే -ing verb ముందు was.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The doctor asks: How did this happen? What do you say?", te: "'ఇది ఎలా జరిగింది?' అని డాక్టర్ అడిగారు. ఏమంటారు?" },
      options: ["The floor was wet, and I fell.", "The floor is wet, and I fall.", "The floor was wet, and I falled."],
      answer: 0,
      why: {
        en: "A story about yesterday stays in the past, and fall becomes fell.",
        te: "నిన్న జరిగిన కథ అంతా past లోనే; fall కి past fell.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "I was crossing road when a bike hit me.",
      wrongIndex: 3,
      fix: "I was crossing the road when a bike hit me.",
      why: {
        en: "The road you mean needs the before it; Telugu has no such word.",
        te: "మీరు చెప్తున్న ఆ రోడ్డుకి ముందు the కావాలి; తెలుగులో ఇలాంటి మాట ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell the doctor you slipped while you were getting off the bus.",
        te: "బస్సు దిగుతూ ఉండగా జారిపడ్డారని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["I slipped while I was getting off the bus.", "I slipped when I was getting off the bus."],
      options: [
        "I slipped while I was getting off the bus.",
        "I slipped while I was getting off from the bus.",
        "I slipped while I am getting off the bus.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell your friend a bike hit you while you were crossing the road.",
        te: "రోడ్డు దాటుతూ ఉండగా బైక్ గుద్దిందని మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["I was crossing the road when a bike hit me.", "A bike hit me while I was crossing the road."],
      options: [
        "I was crossing the road when a bike hit me.",
        "I was crossing the road when a bike hitting me.",
        "I crossing the road when a bike hit me.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "How did you fall?", te: "ఎలా పడ్డారు?" },
    scene: {
      en: "Your ankle is swollen. At the clinic, you tell Dr Swapna how it happened.",
      te: "మీ చీలమండ వాచింది. క్లినిక్‌లో డాక్టర్ స్వప్న గారికి ఎలా జరిగిందో చెప్తున్నారు.",
    },
    partner: { en: "Dr Swapna", te: "డాక్టర్ స్వప్న" },
    skills: [
      { id: "story", label: { en: "Telling what happened", te: "జరిగింది చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Please sit down. What happened to your foot?",
        te: "కూర్చోండి. మీ కాలికి ఏమైంది?",
        hint: { en: "Say which part hurts, and when it happened.", te: "ఏ భాగానికి దెబ్బ తగిలిందో, ఎప్పుడు జరిగిందో చెప్పండి." },
        replies: [
          { say: "I hurt my ankle yesterday, doctor.", good: true, skill: "story" },
          { say: "I hurted my ankle yesterday, doctor.", good: false, skill: "story" },
        ],
      },
      {
        partner: "I see. How did it happen?",
        te: "అలాగా. ఎలా జరిగింది?",
        hint: { en: "Say what you were doing, and what happened suddenly.", te: "అప్పుడు ఏం చేస్తున్నారో, ఒక్కసారిగా ఏం జరిగిందో చెప్పండి." },
        replies: [
          { say: "I was getting off the bus, and I slipped.", good: true, skill: "story" },
          { say: "I was getting off from the bus, and I slipped.", good: false, skill: "story", fixIt: "preposition" },
        ],
      },
      {
        partner: "Did you fall on the road?",
        te: "రోడ్డు మీద పడ్డారా?",
        hint: { en: "Say yes, and give the reason: a hole in the road.", te: "అవునని, కారణం చెప్పండి: రోడ్డు మీద గుంట." },
        replies: [
          { say: "Yes. I twisted my ankle in a pothole.", good: true, skill: "story" },
          { say: "Yes. I twisted my ankle in pothole.", good: false, skill: "story", fixIt: "article" },
          {
            say: "Why so many questions? Just give me tablets.",
            good: false,
            skill: "polite",
            react: { en: "I need to know, so I can help you.", te: "మీకు సరిగ్గా సహాయం చేయాలంటే నాకు తెలియాలి కదండీ." },
          },
        ],
      },
      {
        partner: "It's not broken. Rest your foot for three days.",
        te: "ఎముక విరగలేదు. మూడు రోజులు కాలికి విశ్రాంతి ఇవ్వండి.",
        hint: { en: "Thank the doctor, and promise to rest your foot.", te: "డాక్టర్‌కి థాంక్స్ చెప్పి, కాలికి విశ్రాంతి ఇస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you, doctor. I will rest it.", good: true, skill: "polite" },
          { say: "Thank you, doctor. I will take rest.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
