import type { Lesson } from "../../types";

/** Week 43, Day 3 (CURRICULUM §5): present perfect with since / for (still true) vs past simple (finished) — I have lived in this colony since 1995. */
export const day: Lesson = {
  id: "lived-here-since-life-story",
  kind: "lesson",
  title: { en: "I've Lived Here Since 1995", te: "1995 నుంచి ఇక్కడే" },
  subtitle: "I have lived here since … / for …",
  summary: {
    en: "Learn to tell what is still true and what is finished: I have lived in this colony since 1995. Before that, I lived in Warangal.",
    te: "ఇంకా నిజమైనదీ, అయిపోయినదీ వేరుగా చెప్పడం నేర్చుకుందాం: I have lived in this colony since 1995. Before that, I lived in Warangal.",
  },
  seo: {
    title: "I Have Lived Here Since in English for Telugu Speakers",
    description:
      "Say I have lived here since 1995 and Before that, I lived in Warangal. Simple lessons for Telugu speakers on since, for and the past.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have lived", role: "action" },
    { text: "in this colony", role: "what" },
    { text: "since 1995", role: "when" },
  ],
  core: [
    { en: "I have lived in this colony since nineteen ninety-five.", te: "నేను 1995 నుంచి ఈ కాలనీలో ఉంటున్నాను.", extra: ["am"] },
    { en: "Before that, I lived in Warangal for ten years.", te: "అంతకు ముందు నేను పదేళ్ళు వరంగల్‌లో ఉన్నాను.", extra: ["have"] },
    { en: "How long have you lived in this house?", te: "మీరు ఈ ఇంట్లో ఎంత కాలంగా ఉంటున్నారు?", extra: ["are"] },
    { en: "We have had this house for twenty years.", te: "ఈ ఇల్లు ఇరవై ఏళ్ళుగా మాదే.", extra: ["since"] },
    { en: "I lived in a rented house until two thousand three.", te: "2003 వరకు నేను అద్దె ఇంట్లో ఉన్నాను.", extra: ["have"] },
    { en: "I have known Prasad since nineteen ninety-five.", te: "ప్రసాద్ గారు నాకు 1995 నుంచి తెలుసు.", extra: ["knowing"] },
    { en: "Four people live in this house.", te: "ఈ ఇంట్లో నలుగురు ఉంటారు.", extra: ["lives"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud how long you have lived in your home: I have lived here since … or for …",
    te: "మీ ఇంట్లో ఎంత కాలంగా ఉంటున్నారో గట్టిగా చెప్పండి: I have lived here since … లేదా for …",
  },
  words: [
    { en: "before that", te: "అంతకు ముందు" },
    { en: "rented house", te: "అద్దె ఇల్లు" },
    { en: "own house", te: "సొంత ఇల్లు" },
    { en: "known", te: "తెలుసు (have known: ఇంత కాలంగా తెలుసు)" },
    { en: "resident", te: "అక్కడ నివసించేవారు" },
  ],
  grammar: ["present-perfect", "past-simple", "prepositions"],
  topics: ["home", "neighbours", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Still true, or finished?", te: "ఇంకా నిజమా, అయిపోయిందా?" },
      body: {
        en: "If you still live there, say have lived, with since or for. If that time is over, use the past: I lived in Warangal for ten years.",
        te: "ఇంకా అక్కడే ఉంటే have lived, since లేదా for తో. ఆ కాలం అయిపోయి ఉంటే past: I lived in Warangal for ten years.",
      },
      bridge: {
        te: ["నేను", "1995 నుంచి", "ఈ కాలనీలో", "ఉంటున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have lived", role: "action" },
          { text: "in this colony", role: "what" },
          { text: "since 1995", role: "when" },
        ],
      },
      examples: [
        { en: "I have lived in this colony since nineteen ninety-five.", te: "నేను 1995 నుంచి ఈ కాలనీలో ఉంటున్నాను." },
        { en: "Before that, I lived in Warangal for ten years.", te: "అంతకు ముందు నేను పదేళ్ళు వరంగల్‌లో ఉన్నాను." },
        { en: "How long have you lived in this house?", te: "మీరు ఈ ఇంట్లో ఎంత కాలంగా ఉంటున్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Since, for, or the past?", te: "since ఆ, for ఆ, past ఆ?" },
      items: [
        {
          form: "have lived … since 1995",
          useFor: { en: "Still true: since and the year it started.", te: "ఇంకా నిజం: since తర్వాత మొదలైన సంవత్సరం." },
          example: { en: "Kavitha has lived in Karimnagar since two thousand one.", te: "కవిత గారు 2001 నుంచి కరీంనగర్‌లో ఉంటున్నారు." },
        },
        {
          form: "have had … for 20 years",
          useFor: { en: "Still true: for and how long.", te: "ఇంకా నిజం: for తర్వాత ఎంత కాలమో." },
          example: { en: "We have had this house for twenty years.", te: "ఈ ఇల్లు ఇరవై ఏళ్ళుగా మాదే." },
        },
        {
          form: "lived … for 10 years",
          useFor: { en: "Finished: you don't live there now.", te: "అయిపోయింది: ఇప్పుడు అక్కడ ఉండట్లేదు." },
          example: { en: "Before that, I lived in Warangal for ten years.", te: "అంతకు ముందు నేను పదేళ్ళు వరంగల్‌లో ఉన్నాను." },
        },
        {
          form: "How long have you …?",
          useFor: { en: "Ask about something still true.", te: "ఇంకా జరుగుతున్నదాని గురించి అడగడానికి." },
          example: { en: "How long have you known Prasad?", te: "ప్రసాద్ గారు మీకు ఎంత కాలంగా తెలుసు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am living here since nineteen ninety-five.",
      right: "I have lived here since nineteen ninety-five.",
      why: {
        en: "Telugu ఉంటున్నాను sounds like now, but with since or for, English uses have lived.",
        te: "తెలుగు 'ఉంటున్నాను' ఇప్పటిలా వినిపిస్తుంది; కానీ since, for ఉంటే ఇంగ్లీష్‌లో have lived వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am knowing all my neighbours.",
      right: "I know all my neighbours.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing.",
        te: "know ఒక పని కాదు, ఒక స్థితి; అందుకే దానికి -ing ఎప్పుడూ రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "A survey worker asks how long you have lived here. You came in 1995 and still live here. Answer.",
        te: "మీరు ఇక్కడ ఎంత కాలంగా ఉంటున్నారని survey చేసేవారు అడుగుతున్నారు. మీరు 1995 లో వచ్చారు, ఇప్పటికీ ఇక్కడే ఉన్నారు. జవాబు చెప్పండి.",
      },
      options: [
        "I have lived here since nineteen ninety-five.",
        "I am living here since nineteen ninety-five.",
        "I lived here since nineteen ninety-five.",
      ],
      answer: 0,
      why: {
        en: "You still live here, and since needs have with lived.",
        te: "మీరు ఇంకా ఇక్కడే ఉంటున్నారు; since తో have lived కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Before that, I ___ in Warangal for ten years.",
      te: "అంతకు ముందు నేను పదేళ్ళు వరంగల్‌లో ఉన్నాను.",
      options: ["lived", "have lived", "am living"],
      answer: 0,
      why: {
        en: "Before that shows the time is over, so use the plain past.",
        te: "before that అంటే ఆ కాలం అయిపోయింది; అందుకే past మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour Rani says: I lived in Nellore for ten years. Does she live in Nellore now?",
        te: "మీ పక్కింటావిడ రాణి గారు I lived in Nellore for ten years అన్నారు. ఆవిడ ఇప్పుడు నెల్లూరులో ఉంటున్నారా?",
      },
      options: ["No, she lives somewhere else now.", "Yes, she still lives in Nellore.", "Yes, she has just moved to Nellore."],
      answer: 0,
      why: {
        en: "Lived is the past, so that time is over; has lived would mean she is still there.",
        te: "lived (past) అంటే ఆ కాలం అయిపోయింది; has lived అయితే ఇంకా అక్కడే ఉన్నారని అర్థం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Prasad have lived next door since two thousand.",
      wrongIndex: 1,
      fix: "Prasad has lived next door since two thousand.",
      why: {
        en: "One person takes has, not have, just like he has.",
        te: "ఒక్క వ్యక్తికి have కాదు, has వస్తుంది (he has లాగా).",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your new neighbour asks how long you have lived in this colony. Say twenty years.",
        te: "ఈ కాలనీలో ఎంత కాలంగా ఉంటున్నారని కొత్త పక్కింటివారు అడుగుతున్నారు. ఇరవై ఏళ్ళు అని చెప్పండి.",
      },
      expected: ["I have lived here for twenty years.", "For twenty years.", "I've lived in this colony for twenty years."],
      options: ["I have lived here for twenty years.", "I am living here for twenty years.", "I have lived here since twenty years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell the survey worker that before this, you lived in Warangal for ten years.",
        te: "ఇంతకు ముందు పదేళ్ళు వరంగల్‌లో ఉన్నారని survey చేసేవారికి చెప్పండి.",
      },
      expected: ["Before that, I lived in Warangal for ten years.", "I lived in Warangal for ten years.", "Before this, I lived in Warangal for ten years."],
      options: [
        "Before that, I lived in Warangal for ten years.",
        "Before that, I have lived in Warangal for ten years.",
        "Before that, I lived in Warangal since ten years.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A survey at your door", te: "ఇంటి దగ్గర survey" },
    scene: {
      en: "A survey worker from the municipal office knocks at your door with a form.",
      te: "మున్సిపల్ ఆఫీస్ నుంచి survey చేసేవారు ఒక ఫారంతో మీ తలుపు తట్టారు.",
    },
    partner: { en: "Rahim (a survey worker)", te: "రహీమ్ (survey చేసేవారు)" },
    voice: "b",
    skills: [
      { id: "since", label: { en: "Since, for and the past", te: "since, for, past వాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I'm Rahim, from the municipal office. Are you a resident here?",
        te: "నమస్తే! నేను రహీమ్, మున్సిపల్ ఆఫీస్ నుంచి వచ్చాను. మీరు ఇక్కడే ఉంటారా?",
        hint: { en: "Greet him, and say yes, you live here.", te: "నమస్తే చెప్పి, అవును, ఇక్కడే ఉంటానని చెప్పండి." },
        replies: [
          { say: "Good morning. Yes, I live here.", good: true, skill: "polite" },
          { say: "Yes, I am. How can I help you?", good: true, skill: "polite" },
          {
            say: "Why? What do you want?",
            good: false,
            skill: "polite",
            react: { en: "Sorry, it's only a short survey for the colony.", te: "సారీ అండీ, కాలనీ కోసం ఒక చిన్న survey అంతే." },
          },
        ],
      },
      {
        partner: "Thank you. How long have you lived at this address?",
        te: "థాంక్స్. ఈ అడ్రస్‌లో మీరు ఎంత కాలంగా ఉంటున్నారు?",
        hint: { en: "Tell him you came here in 1995 and still live here.", te: "1995 లో ఇక్కడికి వచ్చారని, ఇప్పటికీ ఇక్కడే ఉన్నారని చెప్పండి." },
        replies: [
          { say: "I have lived here since nineteen ninety-five.", good: true, skill: "since" },
          { say: "Since nineteen ninety-five.", good: true, skill: "since" },
          { say: "I am living here since nineteen ninety-five.", good: false, skill: "since", fixIt: "duration" },
        ],
      },
      {
        partner: "And before that? Where did you live?",
        te: "మరి అంతకు ముందు? ఎక్కడ ఉండేవారు?",
        hint: { en: "Say Warangal, and for how many years: ten.", te: "వరంగల్ అని, ఎన్నేళ్ళో చెప్పండి: పది." },
        replies: [
          { say: "Before that, I lived in Warangal for ten years.", good: true, skill: "since" },
          { say: "Before that, I have lived in Warangal for ten years.", good: false, skill: "since" },
        ],
      },
      {
        partner: "Last question. Is this your own house or a rented house?",
        te: "చివరి ప్రశ్న. ఇది మీ సొంత ఇల్లా, అద్దె ఇల్లా?",
        hint: { en: "Say it is your own, and thank him for coming.", te: "సొంత ఇల్లే అని చెప్పి, వచ్చినందుకు థాంక్స్ చెప్పండి." },
        replies: [
          { say: "It's our own house. Thank you for coming.", good: true, skill: "polite" },
          { say: "It's our own house. Okay, you can go now.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
