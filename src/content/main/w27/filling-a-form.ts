import type { Lesson } from "../../types";

/** Week 27, Day 3 (CURRICULUM §4): filling a form — Where do I sign? Do I need a photo? signature, capital letters, tick. */
export const day: Lesson = {
  id: "filling-a-form",
  kind: "lesson",
  title: { en: "Filling a Form", te: "ఫారం నింపడం" },
  subtitle: "Where do I …? Do I need …?",
  summary: {
    en: "Learn to ask for help with a form: Where do I sign? Do I need a photo?",
    te: "ఫారం నింపేటప్పుడు సహాయం అడగడం నేర్చుకుందాం: Where do I sign? Do I need a photo?",
  },
  seo: {
    title: "Filling a Form in English for Telugu Speakers",
    description:
      "Ask Where do I sign? and Do I need a photo? Simple lessons for Telugu speakers on filling a form at an office, with Telugu explanations.",
  },
  pattern: [
    { text: "Where", role: "what" },
    { text: "do", role: "action" },
    { text: "I", role: "who" },
    { text: "sign?", role: "action" },
  ],
  core: [
    { en: "Where do I sign?", te: "ఎక్కడ సంతకం పెట్టాలి?", extra: ["am"] },
    { en: "Do I need a photo?", te: "ఫోటో కావాలా?", extra: ["Is"] },
    { en: "Please fill in this form.", te: "దయచేసి ఈ ఫారం నింపండి.", extra: ["full"] },
    { en: "Can you help me with this form?", te: "ఈ ఫారం నింపడంలో కొంచెం సహాయం చేస్తారా?", extra: ["for"] },
    { en: "Write your name in capital letters.", te: "మీ పేరు capital letters లో రాయండి.", extra: ["on"] },
    { en: "Do I tick this box?", te: "ఈ డబ్బాలో టిక్ పెట్టాలా?", extra: ["Am"] },
    { en: "Sign here, and write today's date.", te: "ఇక్కడ సంతకం పెట్టి, ఈ రోజు తేదీ రాయండి.", extra: ["signature"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Write your own name in capital letters, then sign under it, as on a form.",
    te: "ఫారం మీద లాగా, మీ పేరు capital letters లో రాసి, కింద సంతకం పెట్టండి.",
  },
  words: [
    { en: "form", te: "ఫారం" },
    { en: "fill in", te: "నింపడం" },
    { en: "signature", te: "సంతకం" },
    { en: "capital letters", te: "పెద్ద అక్షరాలు" },
    { en: "tick", te: "టిక్ పెట్టడం, గుర్తు పెట్టడం" },
  ],
  grammar: ["question-words", "yes-no-questions", "imperatives"],
  topics: ["offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking about a form", te: "ఫారం గురించి అడగడం" },
      body: {
        en: "To ask what to do, start with Where do I or Do I: Where do I sign? Do I need a photo? Telugu says ఎక్కడ పెట్టాలి? with no extra word, but English needs do before I.",
        te: "ఏం చేయాలో అడగాలంటే Where do I లేదా Do I తో మొదలుపెట్టండి: Where do I sign? Do I need a photo? తెలుగులో 'ఎక్కడ పెట్టాలి?' అంటే చాలు, కానీ ఇంగ్లీష్‌లో I ముందు do కావాలి.",
      },
      bridge: {
        te: ["ఎక్కడ", "సంతకం పెట్టాలి?"],
        en: [
          { text: "Where", role: "what" },
          { text: "do", role: "action" },
          { text: "I", role: "who" },
          { text: "sign?", role: "action" },
        ],
      },
      examples: [
        { en: "Where do I sign?", te: "ఎక్కడ సంతకం పెట్టాలి?" },
        { en: "Do I need a photo?", te: "ఫోటో కావాలా?" },
        { en: "Do I tick this box?", te: "ఈ డబ్బాలో టిక్ పెట్టాలా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words on a form", te: "ఫారం మీద పదాలు" },
      items: [
        {
          form: "Signature",
          useFor: { en: "Sign your name here.", te: "ఇక్కడ సంతకం పెట్టాలి." },
          example: { en: "Sign here, and write today's date.", te: "ఇక్కడ సంతకం పెట్టి, ఈ రోజు తేదీ రాయండి." },
        },
        {
          form: "CAPITAL LETTERS",
          useFor: { en: "Big letters: KIRAN, not kiran.", te: "పెద్ద అక్షరాలు: KIRAN, kiran కాదు." },
          example: { en: "Write your name in capital letters.", te: "మీ పేరు capital letters లో రాయండి." },
        },
        {
          form: "Tick",
          useFor: { en: "Put a small ✓ mark in the box.", te: "డబ్బాలో చిన్న ✓ గుర్తు పెట్టండి." },
          example: { en: "Tick the box for yes.", te: "అవును అయితే డబ్బాలో టిక్ పెట్టండి." },
        },
        {
          form: "Photo",
          useFor: { en: "Paste a passport size photo here.", te: "ఇక్కడ passport size ఫోటో అతికించండి." },
          example: { en: "Paste your photo in this box.", te: "ఈ డబ్బాలో మీ ఫోటో అతికించండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Do I need photo?",
      right: "Do I need a photo?",
      why: {
        en: "One photo needs a before it; Telugu has no word for a.",
        te: "ఒక్క ఫోటో అంటే ముందు a కావాలి; తెలుగులో a లాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Please full this form.",
      right: "Please fill in this form.",
      why: {
        en: "Full means nothing is empty; the action word for a form is fill in.",
        te: "full అంటే నిండుగా ఉంది అని; ఫారం నింపడానికి verb fill in.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "You want to know where to sign. What do you ask?", te: "ఎక్కడ సంతకం పెట్టాలో తెలుసుకోవాలి. ఏమని అడుగుతారు?" },
      options: ["Where do I sign?", "Where I sign?", "Where is I sign?"],
      answer: 0,
      why: {
        en: "A where question needs do before I, though Telugu adds no word.",
        te: "Where ప్రశ్నలో I ముందు do రావాలి; తెలుగులో ఆ పదం ఉండదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Write your name ___ capital letters.",
      te: "మీ పేరు capital letters లో రాయండి.",
      options: ["in", "on", "with"],
      answer: 0,
      why: {
        en: "Letters and languages take in, as in English or in Telugu.",
        te: "అక్షరాలకి, భాషలకి in వాడతాం: in English, in Telugu లాగా.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "label",
      heading: "Application Form",
      lines: ["Name: KIRAN RAO", "Date of Birth: 05/06/1958", "Mobile No.: 98480 12345", "Address: 4-12, Gandhi Road, Guntur", "Signature:"],
      prompt: { en: "What is the date of birth on this form?", te: "ఈ ఫారంలో పుట్టిన తేదీ ఏంటి?" },
      options: ["The fifth of June, nineteen fifty-eight", "The sixth of May, nineteen fifty-eight", "The fifth of June, nineteen eighty-five"],
      answer: 0,
      why: {
        en: "In India the day comes first, then the month, so this is June.",
        te: "మన దగ్గర ముందు తేదీ, తర్వాత నెల రాస్తాం; అందుకే ఇది జూన్.",
      },
      say: "The fifth of June, nineteen fifty-eight.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Can you help me for this form?",
      wrongIndex: 4,
      fix: "Can you help me with this form?",
      why: {
        en: "You help someone with a thing; Telugu దీనికి makes people say for.",
        te: "help me తర్వాత with వాడాలి; 'దీనికి' అని for అనకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You don't know where to sign the form. Ask the clerk.",
        te: "ఫారం మీద ఎక్కడ సంతకం పెట్టాలో తెలియదు. క్లర్క్‌ని అడగండి.",
      },
      expected: ["Where do I sign?", "Excuse me, where do I sign?", "Where do I sign, please?"],
      options: ["Where do I sign?", "Where I sign?", "Sign where?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Ask if you need a photo for the form.",
        te: "ఫారానికి ఫోటో కావాలా అని అడగండి.",
      },
      expected: ["Do I need a photo?", "Do I need a photo for this form?"],
      options: ["Do I need a photo?", "Do I need photo?", "I need photo?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Help with a form", te: "ఫారం నింపడంలో సహాయం" },
    scene: {
      en: "You are at the electricity office with a form for a new connection. Imran, the clerk, helps you.",
      te: "మీరు కొత్త కనెక్షన్ ఫారంతో కరెంట్ ఆఫీసులో ఉన్నారు. క్లర్క్ ఇమ్రాన్ సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Imran (clerk)", te: "ఇమ్రాన్ (క్లర్క్)" },
    voice: "b",
    skills: [{ id: "ask", label: { en: "Asking about a form", te: "ఫారం గురించి అడగడం" } }],
    turns: [
      {
        partner: "Yes, please. How can I help you?",
        te: "చెప్పండి. మీకు ఏం సహాయం కావాలి?",
        hint: { en: "Ask him politely for help with the form.", te: "ఫారం నింపడంలో సహాయం చేయమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Can you help me with this form, please?", good: true, skill: "ask" },
          { say: "Can you help me for this form?", good: false, skill: "ask", fixIt: "preposition" },
          {
            say: "Fill this form for me.",
            good: false,
            skill: "ask",
            react: { en: "I can help, but you have to fill it.", te: "సహాయం చేస్తాను, కానీ మీరే నింపాలి." },
          },
        ],
      },
      {
        partner: "Sure. First, write your name in capital letters.",
        te: "తప్పకుండా. ముందు మీ పేరు capital letters లో రాయండి.",
        hint: { en: "Say okay, and ask if you need a photo too.", te: "సరే అని, ఫోటో కూడా కావాలా అని అడగండి." },
        replies: [
          { say: "Okay. Do I need a photo too?", good: true, skill: "ask" },
          { say: "Okay. Photo also need?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, paste one photo in this box.",
        te: "అవును, ఈ డబ్బాలో ఒక ఫోటో అతికించండి.",
        hint: { en: "Ask where to put your signature.", te: "సంతకం ఎక్కడ పెట్టాలో అడగండి." },
        replies: [
          { say: "Okay. And where do I sign?", good: true, skill: "ask" },
          { say: "Okay. And where I sign?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "Sign at the bottom, and write today's date.",
        te: "కింద సంతకం పెట్టి, ఈ రోజు తేదీ రాయండి.",
        hint: { en: "Say okay, and thank him for his help.", te: "సరే అని, సహాయం చేసినందుకు థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay. Thank you for your help.", good: true },
          { say: "Okay. Thank you for your helping.", good: false },
        ],
      },
    ],
  },
};
