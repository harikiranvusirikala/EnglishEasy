import type { Lesson } from "../../types";

/** Week 30, Day 4 (CURRICULUM §4): common third forms — seen, eaten, done, tried, heard — for films, food and things you have done. */
export const day: Lesson = {
  id: "seen-eaten-done",
  kind: "lesson",
  title: { en: "Seen, Eaten, Done", te: "మూడో రూపం" },
  subtitle: "seen, eaten, done",
  summary: {
    en: "Learn the third forms you use most: I have seen that film. Have you eaten Hyderabadi biryani?",
    te: "ఎక్కువగా వాడే మూడో రూపాలు నేర్చుకుందాం: I have seen that film. Have you eaten Hyderabadi biryani?",
  },
  seo: {
    title: "Seen, Eaten, Done in English for Telugu Speakers",
    description:
      "Say I have seen that film and Have you eaten Hyderabadi biryani? Simple lessons for Telugu speakers on seen, eaten and done.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have seen", role: "action" },
    { text: "that film", role: "what" },
  ],
  core: [
    { en: "I have seen that film.", te: "నేను ఆ సినిమా చూశాను.", extra: ["saw"] },
    { en: "Have you eaten Hyderabadi biryani?", te: "మీరు హైదరాబాదీ బిర్యానీ రుచి చూశారా?", extra: ["ate"] },
    { en: "I have never done yoga.", te: "నేను ఎప్పుడూ యోగా చేయలేదు.", extra: ["did"] },
    { en: "Have you tried pesarattu?", te: "మీరు ఎప్పుడైనా పెసరట్టు తిని చూశారా?", extra: ["try"] },
    { en: "I have heard that song many times.", te: "ఆ పాట నేను చాలాసార్లు విన్నాను.", extra: ["hear"] },
    { en: "Have you ever met a film star?", te: "మీరు ఎప్పుడైనా సినిమా స్టార్‌ని కలిశారా?", extra: ["meet"] },
    { en: "Yes, I have eaten it. It was very tasty.", te: "ఆ, తిన్నాను. చాలా రుచిగా ఉంది.", extra: ["ate"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Name one film you have seen and one food you have never eaten: I have seen … I have never eaten …",
    te: "మీరు చూసిన ఒక సినిమా, ఎప్పుడూ తినని ఒక పదార్థం చెప్పండి: I have seen … I have never eaten …",
  },
  words: [
    { en: "seen", te: "చూశారు (see మూడో రూపం)" },
    { en: "eaten", te: "తిన్నారు (eat మూడో రూపం)" },
    { en: "done", te: "చేశారు (do మూడో రూపం)" },
    { en: "tried", te: "ప్రయత్నించారు, రుచి చూశారు (try మూడో రూపం)" },
    { en: "heard", te: "విన్నారు (hear మూడో రూపం)" },
  ],
  grammar: ["present-perfect"],
  topics: ["food", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The third form", te: "verb మూడో రూపం" },
      body: {
        en: "After have or has, use the verb's third form. Some end in -ed, like tried. Many common verbs change: see, saw, seen; eat, ate, eaten; do, did, done. Learn them in threes.",
        te: "have, has తర్వాత verb మూడో రూపం వస్తుంది. కొన్ని -ed తో: tried. చాలా verbs మారిపోతాయి: see, saw, seen; eat, ate, eaten; do, did, done. మూడూ కలిపి నేర్చుకోండి.",
      },
      bridge: {
        te: ["నేను", "ఆ సినిమా", "చూశాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have seen", role: "action" },
          { text: "that film", role: "what" },
        ],
      },
      examples: [
        { en: "I have seen that film.", te: "నేను ఆ సినిమా చూశాను." },
        { en: "Have you eaten Hyderabadi biryani?", te: "మీరు హైదరాబాదీ బిర్యానీ రుచి చూశారా?" },
        { en: "I have never done yoga.", te: "నేను ఎప్పుడూ యోగా చేయలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three forms", te: "మూడు రూపాలు" },
      items: [
        {
          form: "see, saw, seen",
          useFor: { en: "Films, places, the sea.", te: "సినిమాలు, ఊళ్ళు, సముద్రం." },
          example: { en: "I have seen that film.", te: "నేను ఆ సినిమా చూశాను." },
        },
        {
          form: "eat, ate, eaten",
          useFor: { en: "Food you have tasted.", te: "రుచి చూసిన పదార్థాలు." },
          example: { en: "Yes, I have eaten it. It was very tasty.", te: "ఆ, తిన్నాను. చాలా రుచిగా ఉంది." },
        },
        {
          form: "do, did, done",
          useFor: { en: "Things like yoga or a course.", te: "యోగా, కోర్స్ లాంటివి." },
          example: { en: "I have never done yoga.", te: "నేను ఎప్పుడూ యోగా చేయలేదు." },
        },
        {
          form: "hear, heard, heard",
          useFor: { en: "Songs, news, a name.", te: "పాటలు, వార్తలు, పేర్లు." },
          example: { en: "I have heard that song many times.", te: "ఆ పాట నేను చాలాసార్లు విన్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I have saw that film.",
      right: "I have seen that film.",
      why: {
        en: "Saw is the past form; have always takes the third form, seen.",
        te: "saw అనేది past రూపం; have తర్వాత ఎప్పుడూ మూడో రూపం seen వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I have heard that song many time.",
      right: "I have heard that song many times.",
      why: {
        en: "Many means more than one, so time takes s.",
        te: "many అంటే ఒకటి కంటే ఎక్కువ; అందుకే time కి s చేరుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Say you have watched that film before.", te: "ఆ సినిమా ఇంతకు ముందే చూశానని చెప్పండి." },
      options: ["I have seen that film.", "I have saw that film.", "I have see that film."],
      answer: 0,
      why: {
        en: "Have takes the third form of see, and that form is seen.",
        te: "have తర్వాత see మూడో రూపం వస్తుంది; అది seen.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "question",
      sentence: "___ you eaten Hyderabadi biryani?",
      te: "మీరు హైదరాబాదీ బిర్యానీ రుచి చూశారా?",
      options: ["Have", "Did", "Are"],
      answer: 0,
      why: {
        en: "Eaten is a third form, so the question needs have, not did.",
        te: "eaten మూడో రూపం; అందుకే ప్రశ్నకి have కావాలి, did కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Say you have never done yoga.", te: "మీరు ఎప్పుడూ యోగా చేయలేదని చెప్పండి." },
      options: ["I have never done yoga.", "I have never did yoga.", "I never done yoga."],
      answer: 0,
      why: {
        en: "Done needs have before it, and did never follows have.",
        te: "done ముందు have కావాలి; have తర్వాత did ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Have you seen new Telugu film?",
      wrongIndex: 3,
      fix: "Have you seen the new Telugu film?",
      why: {
        en: "Telugu has no word for the; English needs it for one film everyone knows.",
        te: "తెలుగులో the లాంటి పదం లేదు; అందరికీ తెలిసిన ఒక సినిమా అయితే ఇంగ్లీష్‌లో the కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a friend you have seen the film Baahubali.",
        te: "బాహుబలి సినిమా చూశానని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I have seen Baahubali.", "I have seen that film.", "I've seen Baahubali."],
      options: ["I have seen Baahubali.", "I have saw Baahubali.", "I seen Baahubali."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "A guest from Delhi is with you. Ask if he has tried pesarattu.",
        te: "ఢిల్లీ నుంచి ఒక అతిథి వచ్చారు. పెసరట్టు ఎప్పుడైనా తిని చూశారా అని అడగండి.",
      },
      expected: ["Have you tried pesarattu?", "Have you ever tried pesarattu?", "Have you ever eaten pesarattu?"],
      options: ["Have you tried pesarattu?", "You have tried pesarattu?", "Did you tried pesarattu?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Films and food", te: "సినిమాలు, భోజనం" },
    scene: {
      en: "At the tea stall, your friend Imran talks about films and food.",
      te: "టీ కొట్టు దగ్గర మీ స్నేహితులు ఇమ్రాన్ గారు సినిమాలు, భోజనం గురించి మాట్లాడుతున్నారు.",
    },
    partner: { en: "Imran (friend)", te: "ఇమ్రాన్ (స్నేహితులు)" },
    voice: "b",
    skills: [{ id: "forms", label: { en: "Seen, eaten, tried", te: "మూడో రూపం: seen, eaten, tried" } }],
    turns: [
      {
        partner: "Hi! Have you seen the new Telugu film?",
        te: "హాయ్! కొత్త తెలుగు సినిమా చూశారా?",
        hint: { en: "Say yes, and that you liked it.", te: "చూశానని, మీకు నచ్చిందని చెప్పండి." },
        replies: [
          { say: "Yes, I have. I liked it a lot.", good: true, skill: "forms" },
          { say: "Yes, I have saw it. I liked it.", good: false, skill: "forms" },
        ],
      },
      {
        partner: "Me too! Have you eaten at the new biryani place?",
        te: "నాకూ నచ్చింది! కొత్త బిర్యానీ హోటల్‌లో తిన్నారా?",
        hint: { en: "Say no, not even once.", te: "లేదని చెప్పండి, ఒక్కసారి కూడా వెళ్ళలేదు." },
        replies: [
          { say: "No, I have never been there.", good: true, skill: "forms" },
          { say: "No, I have never went there.", good: false, skill: "forms" },
        ],
      },
      {
        partner: "Let's go tomorrow. Their biryani is famous!",
        te: "రేపు వెళ్దాం. అక్కడి బిర్యానీ చాలా ఫేమస్!",
        hint: { en: "Agree, and ask if he has tried their haleem too.", te: "సరే అని, అక్కడి హలీమ్ కూడా రుచి చూశారా అని అడగండి." },
        replies: [
          { say: "Okay! Have you tried their haleem too?", good: true, skill: "forms" },
          { say: "Okay! You have tried their haleem also?", good: false, skill: "forms", fixIt: "question" },
          {
            say: "Biryani again? You only think about food!",
            good: false,
            react: { en: "Ha! Good food makes me happy.", te: "హ! మంచి భోజనం అంటే నాకు సంతోషం." },
          },
        ],
      },
      {
        partner: "Yes, I have. It's very tasty. See you tomorrow!",
        te: "ఆ, తిన్నాను. చాలా రుచిగా ఉంటుంది. రేపు కలుద్దాం!",
        hint: { en: "Agree to meet tomorrow, and say goodbye.", te: "రేపు కలుద్దామని, బై చెప్పండి." },
        replies: [
          { say: "Okay, see you tomorrow. Bye!", good: true },
          { say: "Okay, we will meet tomorrow only.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
