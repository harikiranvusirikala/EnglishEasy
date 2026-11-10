import type { Lesson } from "../../types";

/**
 * Week 2, Day 3 (CURRICULUM §3): clarifying phrases, at Week 2 level. MOVED from Week 8 and simplified (2026-11-10):
 * Sorry? Please say it again. Please speak slowly. What does … mean? How do you say … in English? (no can / could yet).
 */
export const day: Lesson = {
  id: "sorry-can-you-repeat",
  kind: "lesson",
  title: { en: "Sorry? Say It Again", te: "అర్థం కాకపోతే" },
  subtitle: "say it again / speak slowly",
  summary: {
    en: "Learn what to say when you don't catch something: ask people to say it again, to speak slowly, or what a word means.",
    te: "అర్థం కానప్పుడు ఏమనాలో నేర్చుకుందాం: మళ్ళీ చెప్పమని, నెమ్మదిగా మాట్లాడమని, ఒక పదానికి అర్థం ఏంటని అడగండి.",
  },
  seo: {
    title: "Sorry? Please Say It Again: Asking to Repeat in English for Telugu Speakers",
    description:
      "Say Sorry? Please say it again and What does this word mean? in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "Please say", role: "action" },
    { text: "it", role: "what" },
    { text: "again", role: "when" },
  ],
  core: [
    { en: "Sorry? Please say it again.", te: "sorry అండీ? మళ్ళీ ఒకసారి చెప్పండి.", extra: ["tell"] },
    { en: "Please speak slowly.", te: "కొంచెం నెమ్మదిగా మాట్లాడండి.", extra: ["slow"] },
    { en: "What does this word mean?", te: "ఈ పదానికి అర్థం ఏంటి?", extra: ["means"] },
    { en: "How do you say this in English?", te: "దీన్ని ఇంగ్లీష్‌లో ఎలా అంటారు?", extra: ["What"] },
    { en: "Please say the number again.", te: "ఆ నంబర్ మళ్ళీ ఒకసారి చెప్పండి.", extra: ["tell"] },
    { en: "Again, please.", te: "మళ్ళీ ఒకసారి, ప్లీజ్.", extra: ["once"] },
    { en: "Thank you. Now I understand.", te: "థాంక్యూ. ఇప్పుడు అర్థమైంది.", extra: ["understanding"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "If you miss a word today, say: Sorry? Please say it again. Then try: What does this word mean?",
    te: "ఈ రోజు ఏదైనా మాట అర్థం కాకపోతే ఇలా అనండి: Sorry? Please say it again. తర్వాత: What does this word mean?",
  },
  words: [
    { en: "understand", te: "అర్థం చేసుకోవడం" },
    { en: "again", te: "మళ్ళీ" },
    { en: "mean", te: "అర్థం" },
    { en: "word", te: "పదం, మాట" },
    { en: "English", te: "ఇంగ్లీష్" },
  ],
  grammar: ["question-words", "imperatives", "politeness-softening"],
  topics: ["people", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When you don't catch it", te: "అర్థం కానప్పుడు" },
      body: {
        en: "Everyone misses words sometimes. Say Sorry? and ask: Please say it again. Please speak slowly. People are happy to help.",
        te: "అందరికీ అప్పుడప్పుడు మాటలు అర్థం కావు. Sorry? అని, అడగండి: Please say it again. Please speak slowly.",
      },
      bridge: {
        te: ["ప్లీజ్,", "మళ్ళీ", "చెప్పండి"],
        en: [
          { text: "Please say", role: "action" },
          { text: "it", role: "what" },
          { text: "again", role: "when" },
        ],
      },
      examples: [
        { en: "Sorry? Please say it again.", te: "sorry అండీ? మళ్ళీ ఒకసారి చెప్పండి." },
        { en: "Please speak slowly.", te: "కొంచెం నెమ్మదిగా మాట్లాడండి." },
        { en: "Please say the number again.", te: "ఆ నంబర్ మళ్ళీ ఒకసారి చెప్పండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to ask", te: "ఏమని అడగాలి" },
      items: [
        {
          form: "say it again",
          useFor: { en: "When you did not hear well.", te: "సరిగ్గా వినిపించనప్పుడు." },
          example: { en: "Please say the number again.", te: "ఆ నంబర్ మళ్ళీ ఒకసారి చెప్పండి." },
        },
        {
          form: "speak slowly",
          useFor: { en: "When it is too fast.", te: "చాలా వేగంగా మాట్లాడుతున్నప్పుడు." },
          example: { en: "Please speak slowly.", te: "కొంచెం నెమ్మదిగా మాట్లాడండి." },
        },
        {
          form: "What does … mean?",
          useFor: { en: "When you don't know an English word.", te: "ఒక ఇంగ్లీష్ పదం తెలియనప్పుడు." },
          example: { en: "What does this word mean?", te: "ఈ పదానికి అర్థం ఏంటి?" },
        },
        {
          form: "How do you say … in English?",
          useFor: { en: "When you know the Telugu word, but not the English one.", te: "తెలుగు పదం తెలుసు, ఇంగ్లీష్ పదం తెలియనప్పుడు." },
          example: { en: "How do you say this in English?", te: "దీన్ని ఇంగ్లీష్‌లో ఎలా అంటారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please tell again.",
      right: "Please say it again.",
      why: {
        en: "Telugu చెప్పండి can be tell or say, but for words, English uses say, with it: Please say it again.",
        te: "తెలుగులో 'చెప్పండి' అంటే tell, say రెండూ; మాటలు మళ్ళీ అడగడానికి say it వాడాలి: Please say it again.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "What this word means?",
      right: "What does this word mean?",
      why: {
        en: "This question needs does after what, and then mean has no s: What does this word mean?",
        te: "ఈ ప్రశ్నలో what తర్వాత does రావాలి, అప్పుడు mean కి s రాదు: What does this word mean?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "You did not hear the shopkeeper. What do you say?", te: "షాపు ఆయన చెప్పింది మీకు వినిపించలేదు. ఏమంటారు?" },
      options: ["Sorry? Please say it again.", "Hey! Say it again.", "Sorry? Please tell again."],
      answer: 0,
      why: {
        en: "Start with Sorry? and please so it sounds polite, and use say it for words: Sorry? Please say it again.",
        te: "మర్యాదగా ఉండాలంటే Sorry?, please తో మొదలుపెట్టండి; మాటలకి say it వాడండి: Sorry? Please say it again.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "What does this word ___?",
      te: "ఈ పదానికి అర్థం ఏంటి?",
      options: ["mean", "means", "meaning"],
      answer: 0,
      why: {
        en: "After does, the action word stays plain, with no s or -ing: What does this word mean?",
        te: "does తర్వాత verb కి s, -ing రావు: What does this word mean?",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You know the Telugu word, but not the English one. What do you ask?",
        te: "తెలుగు పదం తెలుసు, కానీ ఇంగ్లీష్ పదం తెలియదు. ఏమని అడుగుతారు?",
      },
      options: ["What do you say this in English?", "How do you say this in English?", "How you say this in English?"],
      answer: 1,
      why: {
        en: "Telugu ఎలా అంటారు? is How do you say in English, not What: How do you say this in English?",
        te: "'ఎలా అంటారు?' అంటే ఇంగ్లీష్‌లో How do you say, What కాదు: How do you say this in English?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Please say again it.",
      wrongIndex: 2,
      fix: "Please say it again.",
      why: {
        en: "Telugu puts మళ్ళీ first, but English puts it right after say and again at the end: Please say it again.",
        te: "తెలుగులో 'మళ్ళీ' ముందు వస్తుంది, ఇంగ్లీష్‌లో say తర్వాత it, చివర again: Please say it again.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You did not hear a phone number. Ask the person to say it again.",
        te: "ఒక ఫోన్ నంబర్ మీకు సరిగ్గా వినిపించలేదు. మళ్ళీ చెప్పమని అడగండి.",
      },
      expected: ["Please say the number again.", "Sorry? Please say it again.", "Again, please."],
      options: ["Please say the number again.", "Please say again the number.", "Please tell again number."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The shopkeeper speaks very fast. Ask her to speak slowly.",
        te: "షాపు ఆవిడ చాలా వేగంగా మాట్లాడుతున్నారు. నెమ్మదిగా మాట్లాడమని అడగండి.",
      },
      expected: ["Please speak slowly.", "Sorry? Please speak slowly."],
      options: ["You speak too fast!", "Please speak slowly.", "Please slowly speak."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A fast shopkeeper", te: "వేగంగా మాట్లాడే షాపు ఆయన" },
    scene: {
      en: "You go to Gopal's shop to buy soap. He speaks very fast. Ask him politely to help you understand.",
      te: "సబ్బు కొనడానికి గోపాల్ గారి షాపుకి వెళ్లారు. ఆయన చాలా వేగంగా మాట్లాడతారు. అర్థమయ్యేలా చెప్పమని మర్యాదగా అడగండి.",
    },
    partner: { en: "Gopal (a shopkeeper)", te: "గోపాల్ (షాపు ఆయన)" },
    voice: "b",
    skills: [
      { id: "clarify", label: { en: "Asking again", te: "మళ్ళీ అడగడం" } },
      { id: "polite", label: { en: "Polite words", te: "మర్యాద మాటలు" } },
    ],
    turns: [
      {
        partner: "Hello! What do you need today?",
        te: "నమస్తే! ఈ రోజు ఏం కావాలి?",
        hint: { en: "Ask for soap, politely.", te: "సబ్బు కావాలని మర్యాదగా అడగండి." },
        replies: [
          { say: "Soap, please.", good: true, skill: "polite" },
          {
            say: "Give soap.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. Which soap?", te: "సరే, సరే. ఏ సబ్బు?" },
          },
        ],
      },
      {
        partner: "Which one, small or big?",
        te: "ఏది, చిన్నదా పెద్దదా?",
        hint: { en: "He said it too fast. Ask him to speak slowly.", te: "ఆయన చాలా వేగంగా అన్నారు. నెమ్మదిగా మాట్లాడమని అడగండి." },
        replies: [
          { say: "Sorry? Please speak slowly.", good: true, skill: "clarify" },
          {
            say: "You talk too fast!",
            good: false,
            skill: "polite",
            react: { en: "Sorry! Small or big?", te: "sorry అండీ! చిన్నదా, పెద్దదా?" },
          },
        ],
      },
      {
        partner: "Take this one. It is herbal.",
        te: "ఇది తీసుకోండి. ఇది హెర్బల్.",
        hint: { en: "You don't know the word herbal. Ask what it means.", te: "herbal అనే పదం మీకు తెలియదు. దాని అర్థం అడగండి." },
        replies: [
          { say: "What does herbal mean?", good: true, skill: "clarify" },
          { say: "What herbal means?", good: false, skill: "clarify", fixIt: "question" },
        ],
      },
      {
        partner: "Herbal means made from plants.",
        te: "హెర్బల్ అంటే మొక్కలతో చేసింది.",
        hint: { en: "Thank him, and say it is clear to you now.", te: "థాంక్స్ చెప్పి, ఇప్పుడు అర్థమైందని చెప్పండి." },
        replies: [
          { say: "Thank you. Now I understand.", good: true, skill: "polite" },
          { say: "Thank you. Now I am understanding.", good: false, skill: "clarify", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
