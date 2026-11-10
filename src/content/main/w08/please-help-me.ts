import type { Lesson } from "../../types";

/**
 * Week 8, Day 5 (CURRICULUM §3): NEW 2026-11-10, replacing sorry-can-you-repeat (moved to Week 2). Asking for help in
 * an emergency: Help! Please call one zero eight (ambulance) or one one two (any emergency). I am lost. I fell down.
 * Giving your address. Never assumes a family: "Please call this number", "Please call my neighbour".
 */
export const day: Lesson = {
  id: "please-help-me",
  kind: "lesson",
  title: { en: "Please Help Me!", te: "సహాయం చేయండి!" },
  subtitle: "emergencies",
  summary: {
    en: "Learn to ask for help fast when something goes wrong: Please help me, Please call one zero eight, I am lost.",
    te: "ఏదైనా అనుకోనిది జరిగితే త్వరగా సహాయం అడగడం నేర్చుకుందాం: Please help me, Please call one zero eight, I am lost.",
  },
  seo: {
    title: "Asking for Help in an Emergency in English for Telugu Speakers",
    description:
      "Say Please help me, Please call 108, I am lost and I fell down in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "Please call", role: "action" },
    { text: "one zero eight", role: "what" },
  ],
  core: [
    { en: "Please help me.", te: "ప్లీజ్, నాకు సహాయం చేయండి.", extra: ["helping"] },
    { en: "Please call one zero eight.", te: "ప్లీజ్, 108 కి ఫోన్ చేయండి.", extra: ["hundred"] },
    { en: "I am lost.", te: "నేను దారి తప్పిపోయాను.", extra: ["have"] },
    { en: "I fell down.", te: "నేను కింద పడిపోయాను.", extra: ["fall"] },
    { en: "My address is ten, Station Road.", te: "నా అడ్రస్ పది, స్టేషన్ రోడ్.", extra: ["are"] },
    { en: "Please call this number.", te: "ప్లీజ్, ఈ నంబర్‌కి ఫోన్ చేయండి.", extra: ["to"] },
    { en: "Please call my neighbour, Rani.", te: "ప్లీజ్, మా పక్కింటి రాణి గారికి ఫోన్ చేయండి.", extra: ["to"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Save one zero eight and one one two in your phone. Write your address on a card and keep it in your bag.",
    te: "108, 112 నంబర్లు మీ ఫోన్‌లో సేవ్ చేసుకోండి. మీ అడ్రస్ ఒక కార్డు మీద రాసి మీ బ్యాగ్‌లో పెట్టుకోండి.",
  },
  words: [
    { en: "lost", te: "దారి తప్పిపోవడం" },
    { en: "fell", te: "పడిపోయాను (fall గతం)" },
    { en: "ambulance", te: "అంబులెన్స్" },
    { en: "police", te: "పోలీసులు" },
    { en: "emergency", te: "అత్యవసరం" },
  ],
  grammar: ["imperatives", "politeness-softening", "past-simple"],
  topics: ["health", "phone", "directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for help fast", te: "త్వరగా సహాయం అడగడం" },
      body: {
        en: "In an emergency, short sentences are best. Start with Please and the action word: Please help me. Please call one zero eight.",
        te: "అత్యవసరంలో చిన్న వాక్యాలు చాలు. Please తో మొదలుపెట్టి verb చెప్పండి: Please help me. Please call one zero eight.",
      },
      bridge: {
        te: ["ప్లీజ్,", "నాకు", "సహాయం చేయండి"],
        en: [
          { text: "Please help", role: "action" },
          { text: "me", role: "what" },
        ],
      },
      examples: [
        { en: "Please help me.", te: "ప్లీజ్, నాకు సహాయం చేయండి." },
        { en: "Please call one zero eight.", te: "ప్లీజ్, 108 కి ఫోన్ చేయండి." },
        { en: "I am lost.", te: "నేను దారి తప్పిపోయాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which number?", te: "ఏ నంబర్‌కి?" },
      items: [
        {
          form: "one zero eight",
          useFor: { en: "For an ambulance, when someone is hurt or very sick.", te: "ఎవరికైనా దెబ్బ తగిలినా, బాగా ఒంట్లో బాగోకపోయినా: అంబులెన్స్ కోసం." },
          example: { en: "Please call one zero eight.", te: "ప్లీజ్, 108 కి ఫోన్ చేయండి." },
        },
        {
          form: "one one two",
          useFor: { en: "For any emergency: police, fire or ambulance, anywhere in India.", te: "ఏ అత్యవసరానికైనా: పోలీస్, ఫైర్, అంబులెన్స్, దేశంలో ఎక్కడైనా." },
          example: { en: "Please call one one two.", te: "ప్లీజ్, 112 కి ఫోన్ చేయండి." },
        },
        {
          form: "this number",
          useFor: {
            en: "Show a number saved in your phone or written on a card: a friend or a neighbour you trust.",
            te: "ఫోన్‌లో సేవ్ చేసిన, లేదా కార్డు మీద రాసిన నంబర్ చూపించండి: మీకు నమ్మకమైన స్నేహితులు, పక్కింటి వాళ్ళు.",
          },
          example: { en: "Please call this number.", te: "ప్లీజ్, ఈ నంబర్‌కి ఫోన్ చేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please call to this number.",
      right: "Please call this number.",
      why: {
        en: "Telugu says నంబర్‌కి, with కి, but English call needs no to after it: Please call this number.",
        te: "తెలుగులో 'నంబర్‌కి' అని కి వస్తుంది, కానీ ఇంగ్లీష్‌లో call తర్వాత to రాదు: Please call this number.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am fall down.",
      right: "I fell down.",
      why: {
        en: "It already happened, so use the past fell, with no am. Telugu పడిపోయాను is past too: I fell down.",
        te: "ఇది జరిగిపోయింది, కాబట్టి past fell వాడాలి, am వద్దు. 'పడిపోయాను' కూడా గతమే: I fell down.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "An old man falls on the road and cannot get up. What do you shout?",
        te: "ఒక పెద్దాయన రోడ్డు మీద పడిపోయారు, లేవలేకపోతున్నారు. మీరు గట్టిగా ఏమంటారు?",
      },
      options: ["Help! Please call one zero eight.", "Help! Please call one hundred eight.", "Help! Please calling one zero eight."],
      answer: 0,
      why: {
        en: "Say an emergency number one digit at a time, so people understand it fast: Please call one zero eight.",
        te: "అత్యవసర నంబర్‌ను ఒక్కో అంకె విడిగా చెప్పాలి, అప్పుడే త్వరగా అర్థమవుతుంది: Please call one zero eight.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ lost. Please help me.",
      te: "నేను దారి తప్పిపోయాను. ప్లీజ్, సహాయం చేయండి.",
      options: ["am", "is", "are"],
      answer: 0,
      why: {
        en: "Telugu తప్పిపోయాను sounds like an action, but English says how you are now, with am: I am lost.",
        te: "'తప్పిపోయాను' పనిలా అనిపిస్తుంది, కానీ ఇంగ్లీష్‌లో ఇప్పుడు మీరు ఎలా ఉన్నారో am తో చెప్తాం: I am lost.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "You want a stranger to call your friend. You show your phone. What do you say?",
        te: "మీ స్నేహితులకి ఫోన్ చేయమని ఒకరిని అడగాలి. మీ ఫోన్ చూపిస్తున్నారు. ఏమంటారు?",
      },
      options: ["Please call to this number.", "Please call this number.", "Call this number, fast."],
      answer: 1,
      why: {
        en: "Call needs no to after it, and please makes it polite: Please call this number.",
        te: "call తర్వాత to రాదు, please తో అడిగితే మర్యాదగా ఉంటుంది: Please call this number.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Yesterday I fall down.",
      wrongIndex: 2,
      fix: "Yesterday I fell down.",
      why: {
        en: "Yesterday is finished time, so fall becomes fell: Yesterday I fell down.",
        te: "Yesterday అంటే అయిపోయిన సమయం, కాబట్టి fall కాదు, fell: Yesterday I fell down.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You are in a new town and cannot find your way. Ask a shopkeeper for help.",
        te: "కొత్త ఊరిలో దారి తెలియడం లేదు. ఒక షాపు ఆయన్ని సహాయం అడగండి.",
      },
      expected: ["Please help me. I am lost.", "I am lost. Please help me."],
      options: ["Please help me. I lost.", "Please help me. I am lost.", "Please help me. I am losing."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You called one zero eight. The operator asks for your address. It is ten, Station Road.",
        te: "మీరు 108 కి ఫోన్ చేశారు. ఆపరేటర్ మీ అడ్రస్ అడుగుతున్నారు. అది పది, స్టేషన్ రోడ్.",
      },
      expected: ["My address is ten, Station Road.", "Ten, Station Road."],
      options: ["My address ten, Station Road.", "Station Road ten is address.", "My address is ten, Station Road."],
      answer: 2,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A fall on the road", te: "రోడ్డు మీద పడిపోయారు" },
    scene: {
      en: "You slip and fall on the road. Satish, a stranger, stops to help you.",
      te: "మీరు రోడ్డు మీద జారి పడిపోయారు. సతీష్ అనే ఒకాయన సహాయం చేయడానికి ఆగారు.",
    },
    partner: { en: "Satish (a stranger)", te: "సతీష్ (తెలియని వ్యక్తి)" },
    voice: "b",
    skills: [
      { id: "help", label: { en: "Asking for help", te: "సహాయం అడగడం" } },
      { id: "polite", label: { en: "Polite words", te: "మర్యాద మాటలు" } },
    ],
    turns: [
      {
        partner: "Oh! Are you okay?",
        te: "అయ్యో! మీరు బాగానే ఉన్నారా?",
        hint: { en: "Tell him what happened, and ask for help.", te: "ఏం జరిగిందో చెప్పి, సహాయం అడగండి." },
        replies: [
          { say: "I fell down. Please help me.", good: true, skill: "help" },
          { say: "I fall down. Please help me.", good: false, skill: "help" },
          {
            say: "Go away! Don't touch me.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. I only want to help.", te: "సరే, సరే. సహాయం చేద్దామనే ఆగాను." },
          },
        ],
      },
      {
        partner: "Can you stand up?",
        te: "లేచి నిలబడగలరా?",
        hint: { en: "Say you can't, because of the pain in your leg.", te: "కాలు నొప్పి వల్ల నిలబడలేనని చెప్పండి." },
        replies: [
          { say: "No, I can't. My leg hurts.", good: true, skill: "help" },
          { say: "No, I can't. My leg is paining.", good: false, skill: "help", fixIt: "indian-english" },
        ],
      },
      {
        partner: "I will call an ambulance. Which number?",
        te: "అంబులెన్స్‌కి ఫోన్ చేస్తాను. ఏ నంబర్?",
        hint: { en: "Tell him the ambulance number, one digit at a time.", te: "అంబులెన్స్ నంబర్ ఒక్కో అంకె విడిగా చెప్పండి." },
        replies: [
          { say: "Please call one zero eight.", good: true, skill: "help" },
          { say: "Please call one hundred eight.", good: false, skill: "help" },
        ],
      },
      {
        partner: "They are coming. Your address, please?",
        te: "వాళ్ళు వస్తున్నారు. మీ అడ్రస్ చెప్తారా?",
        hint: { en: "Give your door number and road: 10, Station Road.", te: "మీ డోర్ నంబర్, రోడ్ చెప్పండి: 10, స్టేషన్ రోడ్." },
        replies: [
          { say: "My address is ten, Station Road.", good: true, skill: "help" },
          { say: "My address ten, Station Road.", good: false, skill: "help", fixIt: "be" },
        ],
      },
    ],
  },
};
