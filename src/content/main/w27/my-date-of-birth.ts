import type { Lesson } from "../../types";

/** Week 27, Day 1 (CURRICULUM §4): dates in full — the fifth of June, on a date, in a year, the year in two parts. */
export const day: Lesson = {
  id: "my-date-of-birth",
  kind: "lesson",
  title: { en: "My Date of Birth", te: "పుట్టిన తేదీ" },
  subtitle: "the fifth of June",
  summary: {
    en: "Learn to say dates in full: My date of birth is the fifth of June. I was born in 1958.",
    te: "తేదీలు పూర్తిగా చెప్పడం నేర్చుకుందాం: My date of birth is the fifth of June. I was born in 1958.",
  },
  seo: {
    title: "Saying Your Date of Birth in English for Telugu Speakers",
    description:
      "Say My date of birth is the fifth of June and I was born in 1958. Simple lessons for Telugu speakers on saying dates at an office.",
  },
  pattern: [
    { text: "My date of birth", role: "who" },
    { text: "is", role: "action" },
    { text: "the fifth of June", role: "what" },
  ],
  core: [
    { en: "My date of birth is the fifth of June.", te: "నా పుట్టిన తేదీ జూన్ ఐదు.", extra: ["five"] },
    { en: "I was born in nineteen fifty-eight.", te: "నేను 1958 లో పుట్టాను.", extra: ["am"] },
    { en: "What is your date of birth?", te: "మీ పుట్టిన తేదీ ఏంటి?", extra: ["are"] },
    { en: "I was born on the twelfth of March.", te: "నేను మార్చి పన్నెండున పుట్టాను.", extra: ["in"] },
    { en: "My sister was born on the third of May.", te: "మా అక్క మే మూడున పుట్టారు.", extra: ["three"] },
    { en: "Please write the date in full.", te: "దయచేసి తేదీని పూర్తిగా రాయండి.", extra: ["fully"] },
    { en: "Today is the twenty-first of October.", te: "ఈ రోజు అక్టోబర్ ఇరవై ఒకటో తేదీ.", extra: ["twenty-one"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say your own date of birth aloud in English, in full, with the year in two parts.",
    te: "మీ పుట్టిన తేదీని ఇంగ్లీష్‌లో పూర్తిగా, సంవత్సరాన్ని రెండు ముక్కలుగా గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "date of birth", te: "పుట్టిన తేదీ" },
    { en: "born", te: "పుట్టడం" },
    { en: "fifth", te: "ఐదో" },
    { en: "twelfth", te: "పన్నెండో" },
    { en: "in full", te: "పూర్తిగా" },
  ],
  grammar: ["prepositions", "was-were", "question-words"],
  topics: ["offices", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Dates in full", te: "తేదీ పూర్తిగా" },
      body: {
        en: "Say a date like this: the fifth of June. The first three days are the first, the second, the third; after that, add th: fifth, twelfth, twentieth. Say a year in two parts: 1958 is nineteen fifty-eight.",
        te: "తేదీని ఇలా చెప్పండి: the fifth of June. మొదటి మూడు first, second, third; ఆ తర్వాత చివర th చేర్చండి: fifth, twelfth, twentieth. సంవత్సరాన్ని రెండు ముక్కలుగా: 1958 అంటే nineteen fifty-eight.",
      },
      bridge: {
        te: ["నా పుట్టిన తేదీ", "జూన్ ఐదు"],
        en: [
          { text: "My date of birth", role: "who" },
          { text: "is", role: "action" },
          { text: "the fifth of June", role: "what" },
        ],
      },
      examples: [
        { en: "My date of birth is the fifth of June.", te: "నా పుట్టిన తేదీ జూన్ ఐదు." },
        { en: "I was born on the twelfth of March.", te: "నేను మార్చి పన్నెండున పుట్టాను." },
        { en: "Today is the twenty-first of October.", te: "ఈ రోజు అక్టోబర్ ఇరవై ఒకటో తేదీ." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "On or in?", te: "on ఆ, in ఆ?" },
      items: [
        {
          form: "on the fifth of June",
          useFor: { en: "One day, a date: use on.", te: "ఒక రోజు, ఒక తేదీ అయితే on." },
          example: { en: "My sister was born on the third of May.", te: "మా అక్క మే మూడున పుట్టారు." },
        },
        {
          form: "in June, in 1958",
          useFor: { en: "A month or a year: use in.", te: "నెల లేదా సంవత్సరం అయితే in." },
          example: { en: "I was born in nineteen fifty-eight.", te: "నేను 1958 లో పుట్టాను." },
        },
        {
          form: "the first, the second, the third",
          useFor: { en: "The first three days have their own words.", te: "మొదటి మూడు తేదీలకి వేరే పదాలు ఉన్నాయి." },
          example: { en: "The meeting is on the first of July.", te: "మీటింగ్ జూలై ఒకటో తేదీన." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "My date of birth the fifth of June.",
      right: "My date of birth is the fifth of June.",
      why: {
        en: "Telugu needs no verb here, but English needs is after date of birth.",
        te: "తెలుగులో 'నా పుట్టిన తేదీ జూన్ ఐదు' లో verb లేదు; ఇంగ్లీష్‌లో date of birth తర్వాత is కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am born in nineteen sixty-two.",
      right: "I was born in nineteen sixty-two.",
      why: {
        en: "Being born happened long ago, so say was born, never am born.",
        te: "పుట్టడం ఎప్పుడో జరిగిపోయింది, అందుకే was born; am born అనకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The clerk asks your date of birth: 5 June. What do you say?", te: "క్లర్క్ మీ పుట్టిన తేదీ అడుగుతున్నారు: జూన్ 5. ఏమంటారు?" },
      options: ["The fifth of June.", "The fiveth of June.", "The five of June."],
      answer: 0,
      why: {
        en: "For a date, five changes to fifth; fiveth is not a word.",
        te: "తేదీకి five, fifth అవుతుంది; fiveth అనే పదం లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I was born ___ the twelfth of March.",
      te: "నేను మార్చి పన్నెండున పుట్టాను.",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "A day or a date takes on; in is for a month or a year.",
        te: "రోజు లేదా తేదీకి on; నెల, సంవత్సరానికి in.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "How do you say the year 1962 in English?", te: "1962 సంవత్సరాన్ని ఇంగ్లీష్‌లో ఎలా చెప్తారు?" },
      options: ["Nineteen sixty-two.", "One thousand nine hundred sixty-two.", "One nine six two."],
      answer: 0,
      why: {
        en: "Say a year in two parts, as two small numbers, not one big number.",
        te: "సంవత్సరాన్ని రెండు చిన్న సంఖ్యలుగా చెప్పాలి; ఒక పెద్ద సంఖ్యగా, లేదా ఒక్కో అంకెగా కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Today is the twenty-one of October.",
      wrongIndex: 3,
      fix: "Today is the twenty-first of October.",
      why: {
        en: "A date takes forms like first, second and third, so twenty-one becomes twenty-first.",
        te: "తేదీకి first, second, third లాంటి రూపం కావాలి; twenty-one కాదు, twenty-first.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A clerk asks for your date of birth: 5 June. Tell her.",
        te: "క్లర్క్ మీ పుట్టిన తేదీ అడుగుతున్నారు: జూన్ 5. ఆవిడకి చెప్పండి.",
      },
      expected: ["My date of birth is the fifth of June.", "It is the fifth of June.", "The fifth of June."],
      options: ["My date of birth is the fifth of June.", "My date of birth the fifth of June.", "My date of birth is five June."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell the clerk you were born in 1960.",
        te: "మీరు 1960 లో పుట్టారని క్లర్క్‌కి చెప్పండి.",
      },
      expected: ["I was born in nineteen sixty.", "Nineteen sixty."],
      options: ["I was born in nineteen sixty.", "I am born in nineteen sixty.", "I was born on nineteen sixty."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The pension form", te: "పెన్షన్ ఫారం" },
    scene: {
      en: "You are at the pension office. Srinivas, the clerk, is filling in your form.",
      te: "మీరు పెన్షన్ ఆఫీసులో ఉన్నారు. క్లర్క్ శ్రీనివాస్ మీ ఫారం నింపుతున్నారు.",
    },
    partner: { en: "Srinivas (clerk)", te: "శ్రీనివాస్ (క్లర్క్)" },
    voice: "b",
    skills: [{ id: "date", label: { en: "Dates in full", te: "తేదీలు పూర్తిగా" } }],
    turns: [
      {
        partner: "Good morning. Please sit. Your full name, please?",
        te: "నమస్కారం. కూర్చోండి. మీ పూర్తి పేరు చెప్తారా?",
        hint: { en: "Greet him, and say your own full name.", te: "నమస్కారం చెప్పి, మీ పూర్తి పేరు చెప్పండి." },
        replies: [
          { say: "Good morning. My name is Kiran Rao.", good: true },
          { say: "Good morning. Myself Kiran Rao.", good: false, fixIt: "indian-english" },
        ],
      },
      {
        partner: "Thank you. What is your date of birth?",
        te: "థాంక్యూ. మీ పుట్టిన తేదీ ఏంటి?",
        hint: { en: "Say the day and the month in full.", te: "తేదీ, నెల పూర్తిగా చెప్పండి." },
        replies: [
          { say: "It is the fifth of June.", good: true, skill: "date" },
          { say: "It is five June.", good: false, skill: "date" },
          {
            say: "Why ask? It is on my Aadhaar card.",
            good: false,
            skill: "date",
            react: { en: "Yes, but I have to write it here too.", te: "అవును, కానీ ఇక్కడ కూడా రాయాలి కదండీ." },
          },
        ],
      },
      {
        partner: "And the year?",
        te: "సంవత్సరం?",
        hint: { en: "Say the year in two parts.", te: "సంవత్సరాన్ని రెండు ముక్కలుగా చెప్పండి." },
        replies: [
          { say: "Nineteen fifty-eight.", good: true, skill: "date" },
          { say: "One thousand nine hundred fifty-eight.", good: false, skill: "date" },
        ],
      },
      {
        partner: "That's all. Your form is complete.",
        te: "అంతే. మీ ఫారం పూర్తయింది.",
        hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you very much. Have a nice day.", good: true },
          { say: "Thank you. Kindly do the needful.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
