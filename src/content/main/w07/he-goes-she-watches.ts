import type { Lesson } from "../../types";

/** Week 7, Day 2 (CURRICULUM §3): he / she + verb-s / -es; doesn't + verb. */
export const day: Lesson = {
  id: "he-goes-she-watches",
  kind: "lesson",
  title: { en: "He Goes, She Watches", te: "he/she తో verb" },
  subtitle: "he goes / she watches",
  summary: {
    en: "Learn to talk about another person's routine: he walks, she watches, he doesn't work.",
    te: "ఇంకొకరి దినచర్య గురించి మాట్లాడటం నేర్చుకుందాం: he walks, she watches, he doesn't work.",
  },
  seo: {
    title: "He Goes, She Watches: Verb -s in English for Telugu Speakers",
    description:
      "Say My neighbour walks every day and She watches TV at night in English. Simple lessons for Telugu speakers on he and she with -s and -es.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "goes", role: "action" },
    { text: "to the temple", role: "what" },
  ],
  core: [
    { en: "My neighbour walks every day.", te: "మా పొరుగాయన రోజూ నడుస్తారు.", extra: ["walk"] },
    { en: "She watches TV at night.", te: "ఆవిడ రాత్రి TV చూస్తారు.", extra: ["watch"] },
    { en: "He goes to the temple.", te: "ఆయన గుడికి వెళ్తారు.", extra: ["go"] },
    { en: "Ravi gets up at five.", te: "రవి గారు ఐదు గంటలకు లేస్తారు.", extra: ["get"] },
    { en: "She cooks lunch at noon.", te: "ఆవిడ మధ్యాహ్నం పన్నెండుకి భోజనం వండుతారు.", extra: ["cook"] },
    { en: "He doesn't work on Sundays.", te: "ఆయన ఆదివారాలు పని చేయరు.", extra: ["works"] },
    { en: "Padma teaches music.", te: "పద్మ గారు సంగీతం నేర్పిస్తారు.", extra: ["teach"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Tell someone about a friend's day: He gets up at … He goes to …",
    te: "ఒక స్నేహితుడి రోజు గురించి ఎవరికైనా చెప్పండి: He gets up at … He goes to …",
  },
  words: [
    { en: "get up", te: "లేవడం" },
    { en: "noon", te: "మధ్యాహ్నం పన్నెండు" },
    { en: "lunch", te: "మధ్యాహ్న భోజనం" },
    { en: "teach", te: "నేర్పించడం" },
    { en: "music", te: "సంగీతం" },
  ],
  grammar: ["present-simple"],
  topics: ["people", "neighbours", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "He or she: add s", te: "he, she: s చేర్చండి" },
      body: {
        en: "With he, she or one person, the action word gets s: he walks, she cooks. After s, x, ch, sh or o, add es: she watches, he goes.",
        te: "he, she లేదా ఒక్కరి గురించి చెప్పేటప్పుడు verb కి s చేరుతుంది: he walks, she cooks. s, x, ch, sh, o తో ముగిస్తే es: she watches, he goes.",
      },
      bridge: {
        te: ["ఆయన", "గుడికి", "వెళ్తారు"],
        en: [
          { text: "He", role: "who" },
          { text: "goes", role: "action" },
          { text: "to the temple", role: "what" },
        ],
      },
      examples: [
        { en: "My neighbour walks every day.", te: "మా పొరుగాయన రోజూ నడుస్తారు." },
        { en: "She watches TV at night.", te: "ఆవిడ రాత్రి TV చూస్తారు." },
        { en: "He goes to the temple.", te: "ఆయన గుడికి వెళ్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "-s, -es, doesn't", te: "-s, -es, doesn't — ఎప్పుడు?" },
      items: [
        {
          form: "+ s",
          useFor: { en: "Most action words add s.", te: "చాలా verbs కి s చేరుతుంది." },
          example: { en: "Ravi gets up at five.", te: "రవి గారు ఐదు గంటలకు లేస్తారు." },
        },
        {
          form: "+ es (watch, go, teach)",
          useFor: { en: "Words ending in ch, sh, s, x or o add es.", te: "ch, sh, s, x, o తో ముగిసే పదాలకు es." },
          example: { en: "Padma teaches music.", te: "పద్మ గారు సంగీతం నేర్పిస్తారు." },
        },
        {
          form: "doesn't + no s",
          useFor: { en: "After doesn't, the action word has no s.", te: "doesn't తర్వాత verb కి s ఉండదు." },
          example: { en: "He doesn't work on Sundays.", te: "ఆయన ఆదివారాలు పని చేయరు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "He go to the temple.",
      right: "He goes to the temple.",
      why: {
        en: "Telugu changes the verb for he (వెళ్తారు), and English does too: He goes to the temple.",
        te: "తెలుగులో ఆయన గురించి verb మారుతుంది (వెళ్తారు); ఇంగ్లీష్‌లో కూడా go → goes: He goes to the temple.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She watchs TV.",
      right: "She watches TV.",
      why: {
        en: "Watch ends in ch, so it takes es, not s: She watches TV.",
        te: "watch చివర ch ఉంది, అందుకే s కాదు, es: She watches TV.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["She watch TV at night.", "She watches TV at night.", "She watchs TV at night."],
      answer: 1,
      why: {
        en: "She is one person, and watch ends in ch, so add es: She watches TV at night.",
        te: "she ఒక్కరు, watch చివర ch, అందుకే es: She watches TV at night.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Ravi ___ up at five.",
      te: "రవి గారు ఐదు గంటలకు లేస్తారు.",
      options: ["get", "gets", "getting"],
      answer: 1,
      why: {
        en: "Ravi is one person, so the verb takes s: Ravi gets up at five.",
        te: "రవి గారు ఒక్కరు, అందుకే verb కి s: Ravi gets up at five.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["He doesn't works on Sundays.", "He doesn't work on Sundays.", "He don't work on Sundays."],
      answer: 1,
      why: {
        en: "Doesn't already carries the s, so work stays plain: He doesn't work on Sundays.",
        te: "doesn't లోనే s ఉంది, అందుకే work కి s రాదు: He doesn't work on Sundays.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Padma teach music.",
      wrongIndex: 1,
      fix: "Padma teaches music.",
      why: {
        en: "Padma is one person, and teach ends in ch, so: Padma teaches music.",
        te: "పద్మ గారు ఒక్కరు, teach చివర ch, అందుకే es: Padma teaches music.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell a friend about your neighbour: he walks every day.",
        te: "మీ పొరుగాయన గురించి స్నేహితులకు చెప్పండి: ఆయన రోజూ నడుస్తారు.",
      },
      expected: ["He walks every day.", "My neighbour walks every day."],
      options: ["He walk every day.", "He walks every day.", "He walking every day."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Say that your friend Mary watches TV at night.",
        te: "మీ స్నేహితురాలు మేరీ రాత్రి TV చూస్తారని చెప్పండి.",
      },
      expected: ["Mary watches TV at night.", "She watches TV at night."],
      options: ["Mary watchs TV at night.", "Mary watches TV at night.", "Mary watch TV at night."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your neighbour's day", te: "మీ పొరుగాయన రోజు" },
    scene: {
      en: "Your friend Jyothi asks about your neighbour Ravi's routine.",
      te: "మీ స్నేహితురాలు జ్యోతి మీ పొరుగాయన రవి గారి దినచర్య గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Jyothi (a friend)", te: "జ్యోతి (స్నేహితురాలు)" },
    skills: [{ id: "s", label: { en: "he / she + -s", te: "he / she తో -s" } }],
    turns: [
      {
        partner: "Your neighbour Ravi is very fit!",
        te: "మీ పొరుగాయన రవి గారు చాలా ఆరోగ్యంగా ఉంటారు!",
        hint: { en: "Say yes, and tell her about his morning walk.", te: "అవునని చెప్పి, ఆయన ఉదయం నడక గురించి చెప్పండి." },
        replies: [
          { say: "Yes, he walks every morning.", good: true, skill: "s" },
          { say: "Yes, he walk every morning.", good: false, skill: "s", fixIt: "he-she-s" },
          {
            say: "Him? He is old and fat.",
            good: false,
            react: { en: "Oh, that is not nice to say!", te: "అయ్యో, అలా అనకూడదండీ!" },
          },
        ],
      },
      {
        partner: "What time does he get up?",
        te: "ఆయన ఎన్ని గంటలకు లేస్తారు?",
        hint: { en: "Tell her the time he gets up. Remember the s.", te: "ఆయన ఎన్ని గంటలకు లేస్తారో చెప్పండి. s మర్చిపోకండి." },
        replies: [
          { say: "He gets up at five.", good: true, skill: "s" },
          { say: "He get up at five.", good: false, skill: "s", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Does he work?",
        te: "ఆయన ఉద్యోగం చేస్తారా?",
        hint: { en: "Say no, and what he does at home.", te: "లేదని, ఆయన ఇంట్లో ఏం చేస్తారో చెప్పండి." },
        replies: [
          { say: "No. He cooks and watches TV.", good: true, skill: "s" },
          { say: "No. He cook and watch TV.", good: false, skill: "s", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "And his sister Padma?",
        te: "మరి ఆయన చెల్లెలు పద్మ గారు?",
        hint: { en: "Tell her what work Padma does.", te: "పద్మ గారు ఏం పని చేస్తారో చెప్పండి." },
        replies: [
          { say: "She teaches music at a school.", good: true, skill: "s" },
          { say: "She teach music at a school.", good: false, skill: "s", fixIt: "he-she-s" },
        ],
      },
    ],
  },
};
