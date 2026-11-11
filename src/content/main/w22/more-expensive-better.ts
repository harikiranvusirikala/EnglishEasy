import type { Lesson } from "../../types";

/** Week 22, Day 3 (CURRICULUM §4): more + long words (more expensive); good → better, bad → worse. */
export const day: Lesson = {
  id: "more-expensive-better",
  kind: "lesson",
  title: { en: "More Expensive, Better", te: "ఎక్కువ ఖరీదు, మెరుగు" },
  subtitle: "more expensive, better, worse",
  summary: {
    en: "Learn to compare with long words, and with good and bad: This cooker is more expensive. This oil is better for health.",
    te: "పొడవైన పదాలతో, good, bad తో పోల్చడం నేర్చుకుందాం: This cooker is more expensive. This oil is better for health.",
  },
  seo: {
    title: "More Expensive and Better in English for Telugu Speakers",
    description:
      "Say This cooker is more expensive and This oil is better for health. Simple lessons for Telugu speakers on comparing things in a shop.",
  },
  pattern: [
    { text: "This cooker", role: "who" },
    { text: "is", role: "action" },
    { text: "more expensive", role: "what" },
  ],
  core: [
    { en: "This cooker is more expensive.", te: "ఈ కుక్కర్ ధర ఎక్కువ.", extra: ["most"] },
    { en: "This oil is better for health.", te: "ఈ నూనె ఆరోగ్యానికి ఇంకా మంచిది.", extra: ["more"] },
    { en: "Is this one better than that one?", te: "దాని కంటే ఇది మంచిదా?", extra: ["Does"] },
    { en: "The cheap one is worse. It breaks quickly.", te: "చవకది నాసిరకం. త్వరగా పాడైపోతుంది.", extra: ["break"] },
    { en: "This one is more expensive, but it lasts longer.", te: "ఇది ధర ఎక్కువ, కానీ ఎక్కువ కాలం మన్నుతుంది.", extra: ["last"] },
    { en: "Which one is better, steel or aluminium?", te: "ఏది మంచిది, స్టీల్‌దా అల్యూమినియందా?", extra: ["more"] },
    { en: "Is groundnut oil more expensive than this?", te: "దీని కంటే పల్లీ నూనె ధర ఎక్కువా?", extra: ["Are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of two things you use at home. Say which one is better.",
    te: "ఇంట్లో మీరు వాడే రెండు వస్తువులు తలుచుకోండి. ఏది మంచిదో ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "better", te: "ఇంకా మంచి, మెరుగైన" },
    { en: "lasts longer", te: "ఎక్కువ కాలం మన్నుతుంది" },
    { en: "pressure cooker", te: "ప్రెషర్ కుక్కర్" },
    { en: "steel", te: "స్టీల్" },
    { en: "groundnut oil", te: "పల్లీ నూనె, వేరుశనగ నూనె" },
  ],
  grammar: ["comparatives-superlatives"],
  topics: ["shopping", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Long words, good and bad", te: "పొడవైన పదాలు, good, bad" },
      body: {
        en: "Long words don't take -er. Put more before them: expensive becomes more expensive. Good and bad change fully: good becomes better, and bad becomes worse.",
        te: "పొడవైన పదాలకు -er రాదు; వాటి ముందు more పెట్టండి: more expensive. good, bad పూర్తిగా మారిపోతాయి: good → better, bad → worse.",
      },
      bridge: {
        te: ["ఈ కుక్కర్", "ధర ఎక్కువ"],
        en: [
          { text: "This cooker", role: "who" },
          { text: "is", role: "action" },
          { text: "more expensive", role: "what" },
        ],
      },
      examples: [
        { en: "This cooker is more expensive.", te: "ఈ కుక్కర్ ధర ఎక్కువ." },
        { en: "This oil is better for health.", te: "ఈ నూనె ఆరోగ్యానికి ఇంకా మంచిది." },
        { en: "This one is more expensive, but it lasts longer.", te: "ఇది ధర ఎక్కువ, కానీ ఎక్కువ కాలం మన్నుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "-er or more?", te: "-er ఆ, more ఆ?" },
      items: [
        {
          form: "cheaper, bigger",
          useFor: { en: "Short words: add -er.", te: "చిన్న పదాలకు -er." },
          example: { en: "The cheap one is smaller.", te: "చవకది చిన్నది." },
        },
        {
          form: "more expensive",
          useFor: { en: "Long words: put more before them.", te: "పొడవైన పదాలకు ముందు more." },
          example: { en: "This cooker is more expensive.", te: "ఈ కుక్కర్ ధర ఎక్కువ." },
        },
        {
          form: "better",
          useFor: { en: "Good becomes better.", te: "good మారి better అవుతుంది." },
          example: { en: "This oil is better for health.", te: "ఈ నూనె ఆరోగ్యానికి ఇంకా మంచిది." },
        },
        {
          form: "worse",
          useFor: { en: "Bad becomes worse.", te: "bad మారి worse అవుతుంది." },
          example: { en: "The cheap one is worse. It breaks quickly.", te: "చవకది నాసిరకం. త్వరగా పాడైపోతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "This oil is more better.",
      right: "This oil is better.",
      why: {
        en: "Better already means more good, so never put more before it.",
        te: "better అంటేనే 'ఇంకా మంచి'; దాని ముందు more పెట్టకండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "This cooker is very better.",
      right: "This cooker is much better.",
      why: {
        en: "Telugu చాలా is usually very, but before better English says much.",
        te: "తెలుగు 'చాలా' మామూలుగా very; కానీ better ముందు much వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["This cooker is more expensive.", "This cooker is more costlier.", "This cooker expensive more."],
      answer: 0,
      why: {
        en: "Expensive is a long word, so more goes before it, with no -er.",
        te: "expensive పొడవైన పదం; ముందు more వస్తుంది, -er రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This oil is ___ for health than that one.",
      te: "ఆ నూనె కంటే ఈ నూనె ఆరోగ్యానికి మంచిది.",
      options: ["better", "more better", "more good"],
      answer: 0,
      why: {
        en: "Good changes fully to better, and it never takes more.",
        te: "good పూర్తిగా మారి better అవుతుంది; దానికి more రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: { en: "Say the cheap cooker breaks quickly.", te: "చవక కుక్కర్ త్వరగా పాడైపోతుందని చెప్పండి." },
      options: ["The cheap one breaks quickly.", "The cheap one break quickly.", "The cheap one is break quickly."],
      answer: 0,
      why: {
        en: "One cooker is like he or she, so the verb takes s.",
        te: "ఒక్క కుక్కర్ he, she లాంటిది; అందుకే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "This one is very better than that one.",
      wrongIndex: 3,
      fix: "This one is much better than that one.",
      why: {
        en: "Telugu చాలా is usually very, but before better use much.",
        te: "'చాలా' మామూలుగా very; కానీ better ముందు much వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The shopkeeper shows you two cookers. Ask which one is better.",
        te: "షాపువారు రెండు కుక్కర్లు చూపించారు. ఏది మంచిదో అడగండి.",
      },
      expected: ["Which one is better?", "Which cooker is better?"],
      options: ["Which one is better?", "Which one is more better?", "Which one better is?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say this oil costs more, but it is good for health.",
        te: "ఈ నూనె ధర ఎక్కువ, కానీ ఆరోగ్యానికి ఇంకా మంచిదని చెప్పండి.",
      },
      expected: ["This oil is more expensive, but better for health.", "It is more expensive, but better for health."],
      options: [
        "This oil is more expensive, but better for health.",
        "This oil is more expensive, but more better for health.",
        "This oil is expensive more, but better for health.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Two pressure cookers", te: "రెండు ప్రెషర్ కుక్కర్లు" },
    scene: {
      en: "You want a new pressure cooker. Joseph, at the steel shop, shows you two.",
      te: "మీకు కొత్త ప్రెషర్ కుక్కర్ కావాలి. స్టీల్ షాపులో జోసెఫ్ రెండు చూపిస్తున్నారు.",
    },
    partner: { en: "Joseph (salesperson)", te: "జోసెఫ్ (షాపులో పనిచేసేవారు)" },
    voice: "b",
    skills: [{ id: "compare", label: { en: "Comparing", te: "పోల్చడం" } }],
    turns: [
      {
        partner: "Welcome! This steel cooker is 2000 rupees.",
        te: "రండి! ఈ స్టీల్ కుక్కర్ 2000 రూపాయలు.",
        hint: { en: "Ask if the other one is cheaper.", te: "రెండోది చవకా అని అడగండి." },
        replies: [
          { say: "Is the other one cheaper?", good: true, skill: "compare" },
          { say: "The other one is cheaper?", good: false, skill: "compare", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, 1400 rupees. But the steel one is better.",
        te: "అవును, 1400 రూపాయలు. కానీ స్టీల్‌ది ఇంకా మంచిది.",
        hint: { en: "Ask him why the steel one is better.", te: "స్టీల్‌ది ఎందుకు మంచిదో ఆయనని అడగండి." },
        replies: [
          { say: "Why is the steel one better?", good: true, skill: "compare" },
          { say: "Why the steel one is better?", good: false, skill: "compare", fixIt: "question" },
          {
            say: "You just want to sell the costly one!",
            good: false,
            skill: "compare",
            react: { en: "No, no! Let me show you the difference.", te: "లేదండీ! తేడా ఏంటో చూపిస్తాను." },
          },
        ],
      },
      {
        partner: "It's heavier, and it lasts longer.",
        te: "అది బరువు ఎక్కువ, ఎక్కువ కాలం మన్నుతుంది కూడా.",
        hint: { en: "Say the price is higher, but you'll take it.", te: "ధర ఎక్కువే అయినా తీసుకుంటానని చెప్పండి." },
        replies: [
          { say: "It's more expensive, but I'll take it.", good: true, skill: "compare" },
          { say: "It's more costlier, but I'll take it.", good: false, skill: "compare" },
        ],
      },
      {
        partner: "Good choice! It's much better for daily cooking.",
        te: "మంచి ఎంపిక! రోజూ వంటకి ఇది చాలా మంచిది.",
        hint: { en: "Thank him for his help.", te: "ఆయన సహాయానికి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you very much for your help.", good: true },
          { say: "Thank you very much for your helps.", good: false, fixIt: "plural" },
        ],
      },
    ],
  },
};
