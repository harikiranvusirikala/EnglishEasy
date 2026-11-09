import type { Lesson } from "../../types";

/** Week 7, Day 4 (CURRICULUM §3): times of day — in the morning, at night, before / after. */
export const day: Lesson = {
  id: "morning-to-night",
  kind: "lesson",
  title: { en: "Morning to Night", te: "ఉదయం నుండి రాత్రి వరకు" },
  subtitle: "in the morning / at night",
  summary: {
    en: "Learn to say when in the day you do things: in the morning, after lunch, at night, before bed.",
    te: "రోజులో ఏ సమయంలో ఏం చేస్తారో చెప్పడం నేర్చుకుందాం: in the morning, after lunch, at night, before bed.",
  },
  seo: {
    title: "In the Morning, At Night: Times of Day in English for Telugu Speakers",
    description:
      "Say I walk in the morning, I rest after lunch and We pray at night in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "walk", role: "action" },
    { text: "in the morning", role: "when" },
  ],
  core: [
    { en: "I walk in the morning.", te: "నేను ఉదయం నడుస్తాను.", extra: ["at"] },
    { en: "I rest after lunch.", te: "నేను భోజనం తర్వాత విశ్రాంతి తీసుకుంటాను.", extra: ["since"] },
    { en: "We pray at night.", te: "మేము రాత్రి పూజ చేస్తాం.", extra: ["in"] },
    { en: "I read before bed.", te: "నేను పడుకునే ముందు చదువుతాను.", extra: ["after"] },
    { en: "Let's meet in the evening.", te: "సాయంత్రం కలుద్దాం.", extra: ["at"] },
    { en: "She cooks in the afternoon.", te: "ఆవిడ మధ్యాహ్నం వండుతారు.", extra: ["on"] },
    { en: "Come after breakfast.", te: "టిఫిన్ తర్వాత రండి.", extra: ["since"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say what you do at four times today: in the morning, after lunch, in the evening, at night.",
    te: "ఈ రోజు నాలుగు సమయాల్లో ఏం చేస్తారో చెప్పండి: in the morning, after lunch, in the evening, at night.",
  },
  words: [
    { en: "afternoon", te: "మధ్యాహ్నం" },
    { en: "night", te: "రాత్రి" },
    { en: "breakfast", te: "టిఫిన్, ఉదయం అల్పాహారం" },
    { en: "rest", te: "విశ్రాంతి తీసుకోవడం" },
    { en: "pray", te: "పూజ చేయడం, ప్రార్థించడం" },
  ],
  grammar: ["prepositions", "present-simple"],
  topics: ["time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "In the morning, but at night", te: "in the morning, కానీ at night" },
      body: {
        en: "Say in the morning, in the afternoon and in the evening, but at night. Before and after show the order: before bed, after lunch.",
        te: "in the morning, in the afternoon, in the evening అనాలి; కానీ రాత్రికి at night. ముందు, తర్వాత చెప్పడానికి before, after: before bed, after lunch.",
      },
      bridge: {
        te: ["నేను", "ఉదయం", "నడుస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "walk", role: "action" },
          { text: "in the morning", role: "when" },
        ],
      },
      examples: [
        { en: "I walk in the morning.", te: "నేను ఉదయం నడుస్తాను." },
        { en: "We pray at night.", te: "మేము రాత్రి పూజ చేస్తాం." },
        { en: "I read before bed.", te: "నేను పడుకునే ముందు చదువుతాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "In, at, before, after", te: "in, at, before, after — ఏది?" },
      items: [
        {
          form: "in the morning / afternoon / evening",
          useFor: { en: "Parts of the day, with in the.", te: "రోజులోని భాగాలు, in the తో." },
          example: { en: "Imran cooks in the afternoon.", te: "ఇమ్రాన్ గారు మధ్యాహ్నం వంట చేస్తారు." },
        },
        {
          form: "at night",
          useFor: { en: "Night takes at, with no the.", te: "రాత్రికి at, the లేకుండా." },
          example: { en: "We pray at night.", te: "మేము రాత్రి పూజ చేస్తాం." },
        },
        {
          form: "before / after",
          useFor: { en: "Before or after something else.", te: "ఇంకొకదానికి ముందు లేదా తర్వాత." },
          example: { en: "Come after breakfast.", te: "టిఫిన్ తర్వాత రండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I walk in morning.",
      right: "I walk in the morning.",
      why: {
        en: "Telugu says just ఉదయం, but English needs in the: I walk in the morning.",
        te: "తెలుగులో 'ఉదయం' ఒక్కటే చాలు; ఇంగ్లీష్‌లో in the కావాలి: I walk in the morning.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "We pray in the night.",
      right: "We pray at night.",
      why: {
        en: "Morning, afternoon and evening take in the, but night takes at: We pray at night.",
        te: "ఉదయం, మధ్యాహ్నం, సాయంత్రానికి in the; రాత్రికి మాత్రం at: We pray at night.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I walk in morning.", "I walk in the morning.", "I walk at morning."],
      answer: 1,
      why: {
        en: "Parts of the day need in the, not at: I walk in the morning.",
        te: "రోజులోని భాగాలకు in the కావాలి, at కాదు: I walk in the morning.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We pray ___ night.",
      te: "మేము రాత్రి పూజ చేస్తాం.",
      options: ["in", "at", "on"],
      answer: 1,
      why: {
        en: "Night is the odd one: at night, with no the. We pray at night.",
        te: "రాత్రి ఒక్కటే వేరు: at night, the లేకుండా. We pray at night.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which means: పడుకునే ముందు?", te: "పడుకునే ముందు — ఇంగ్లీష్‌లో ఏది?" },
      options: ["before bed", "after bed", "in bed"],
      answer: 0,
      why: {
        en: "Before bed means just before you sleep.",
        te: "పడుకునే ముందు = before bed; after అంటే తర్వాత.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Mohan cooks on the afternoon.",
      wrongIndex: 2,
      fix: "Mohan cooks in the afternoon.",
      why: {
        en: "Parts of the day take in: in the afternoon.",
        te: "రోజులోని భాగాలకు in: in the afternoon.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: When do you walk? Say in the morning.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: When do you walk? ఉదయం అని చెప్పండి.",
      },
      expected: ["I walk in the morning.", "In the morning."],
      options: ["I walk in morning.", "I walk in the morning.", "I walk on the morning."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say that you read before bed.",
        te: "మీరు పడుకునే ముందు చదువుతారని చెప్పండి.",
      },
      expected: ["I read before bed."],
      options: ["I read before bed.", "I read before the bed time.", "I reading before bed."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A time to meet", te: "కలవడానికి సమయం" },
    scene: {
      en: "Your friend Rahim wants to meet tomorrow. Find a time that works for both of you.",
      te: "మీ స్నేహితుడు రహీం గారు రేపు కలవాలనుకుంటున్నారు. ఇద్దరికీ కుదిరే సమయం చూడండి.",
    },
    partner: { en: "Rahim (a friend)", te: "రహీం (స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "time", label: { en: "Times of day", te: "రోజులో సమయాలు" } }],
    turns: [
      {
        partner: "Let's meet tomorrow!",
        te: "రేపు కలుద్దాం!",
        hint: { en: "Say okay, and suggest the morning.", te: "సరే అని, ఉదయం కలుద్దామా అని అడగండి." },
        replies: [
          { say: "Okay. In the morning?", good: true, skill: "time" },
          { say: "Okay. In morning?", good: false, skill: "time" },
        ],
      },
      {
        partner: "Sorry, I walk in the morning.",
        te: "సారీ, ఉదయం నేను నడుస్తాను.",
        hint: { en: "Suggest a time after lunch.", te: "భోజనం తర్వాత కలుద్దామా అని అడగండి." },
        replies: [
          { say: "Then after lunch?", good: true, skill: "time" },
          { say: "Then after the lunch?", good: false, skill: "time" },
        ],
      },
      {
        partner: "I rest after lunch.",
        te: "భోజనం తర్వాత నేను విశ్రాంతి తీసుకుంటాను.",
        hint: { en: "Suggest the evening, and give a time.", te: "సాయంత్రం కలుద్దామని చెప్పి, ఒక టైం చెప్పండి." },
        replies: [
          { say: "Okay, in the evening, at five.", good: true, skill: "time" },
          { say: "Okay, in evening, on five.", good: false, skill: "time" },
          {
            say: "You rest too much!",
            good: false,
            react: { en: "Ha! At my age, rest is good.", te: "హహ! ఈ వయసులో విశ్రాంతి మంచిదే." },
          },
        ],
      },
      {
        partner: "Perfect. See you then!",
        te: "సరే. అప్పుడు కలుద్దాం!",
        hint: { en: "Say goodbye until tomorrow evening.", te: "రేపు సాయంత్రం కలుద్దామని చెప్పి వీడ్కోలు చెప్పండి." },
        replies: [
          { say: "See you tomorrow evening!", good: true, skill: "time" },
          { say: "See you tomorrow in evening!", good: false, skill: "time" },
        ],
      },
    ],
  },
};
