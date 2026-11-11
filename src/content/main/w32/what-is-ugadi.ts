import type { Lesson } from "../../types";

/** Week 32, Day 5 (CURRICULUM §4): explaining customs simply — Ugadi is the Telugu New Year. We eat pachadi. */
export const day: Lesson = {
  id: "what-is-ugadi",
  kind: "lesson",
  title: { en: "What Is Ugadi?", te: "పండుగ గురించి చెప్పడం" },
  subtitle: "explaining customs simply",
  summary: {
    en: "Learn to explain a festival in simple words: Ugadi is the Telugu New Year. We eat pachadi.",
    te: "పండుగ గురించి సులభమైన మాటల్లో చెప్పడం నేర్చుకుందాం: Ugadi is the Telugu New Year. We eat pachadi.",
  },
  seo: {
    title: "Explaining Our Festivals in English for Telugu Speakers",
    description:
      "Say Ugadi is the Telugu New Year and We eat pachadi with six tastes. Simple lessons for Telugu speakers on explaining festivals.",
  },
  pattern: [
    { text: "Ugadi", role: "who" },
    { text: "is", role: "action" },
    { text: "the Telugu New Year", role: "what" },
  ],
  core: [
    { en: "Ugadi is the Telugu New Year.", te: "ఉగాది తెలుగు వారి కొత్త సంవత్సరం.", extra: ["a"] },
    { en: "We eat pachadi with six tastes.", te: "ఆరు రుచుల పచ్చడి తింటాం.", extra: ["taste"] },
    { en: "It is sweet, sour and bitter.", te: "అది తియ్యగా, పుల్లగా, చేదుగా ఉంటుంది.", extra: ["are"] },
    { en: "People wear new clothes and visit the temple.", te: "అందరూ కొత్త బట్టలు వేసుకుని గుడికి వెళ్తారు.", extra: ["wears"] },
    { en: "Bathukamma is a flower festival in Telangana.", te: "బతుకమ్మ తెలంగాణలో పూల పండుగ.", extra: ["an"] },
    { en: "Eid comes after a month of fasting.", te: "నెల రోజుల ఉపవాసం తర్వాత రంజాన్ పండుగ వస్తుంది.", extra: ["in"] },
    { en: "My father makes the pachadi every year.", te: "మా నాన్నగారు ప్రతి సంవత్సరం పచ్చడి చేస్తారు.", extra: ["make"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Choose your favourite festival. Say two sentences about it: what it is, and what people do.",
    te: "మీకు ఇష్టమైన పండుగ ఒకటి ఎంచుకోండి. దాని గురించి రెండు వాక్యాలు చెప్పండి: అది ఏంటి, ఆ రోజు ఏం చేస్తారు.",
  },
  words: [
    { en: "Ugadi", te: "ఉగాది" },
    { en: "New Year", te: "కొత్త సంవత్సరం" },
    { en: "pachadi", te: "పచ్చడి (ఉగాది పచ్చడి)" },
    { en: "bitter", te: "చేదు" },
    { en: "sour", te: "పులుపు" },
  ],
  grammar: ["present-simple", "articles"],
  topics: ["festivals", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Explaining a festival", te: "పండుగ గురించి చెప్పడం" },
      body: {
        en: "First say what the festival is, with is: Ugadi is the Telugu New Year. Then say what people do every year, with the plain verb: We eat pachadi.",
        te: "ముందు పండుగ ఏంటో is తో చెప్పండి: Ugadi is the Telugu New Year. తర్వాత ప్రతి సంవత్సరం ఏం చేస్తారో, verb మామూలుగా: We eat pachadi.",
      },
      bridge: {
        te: ["ఉగాది", "తెలుగు వారి కొత్త సంవత్సరం"],
        en: [
          { text: "Ugadi", role: "who" },
          { text: "is", role: "action" },
          { text: "the Telugu New Year", role: "what" },
        ],
      },
      examples: [
        { en: "Ugadi is the Telugu New Year.", te: "ఉగాది తెలుగు వారి కొత్త సంవత్సరం." },
        { en: "We eat pachadi with six tastes.", te: "ఆరు రుచుల పచ్చడి తింటాం." },
        { en: "It is sweet, sour and bitter.", te: "అది తియ్యగా, పుల్లగా, చేదుగా ఉంటుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three steps to explain", te: "చెప్పడానికి మూడు అడుగులు" },
      items: [
        {
          form: "… is …",
          useFor: { en: "What the festival is.", te: "పండుగ ఏంటో." },
          example: { en: "Bathukamma is a flower festival in Telangana.", te: "బతుకమ్మ తెలంగాణలో పూల పండుగ." },
        },
        {
          form: "We … / People …",
          useFor: { en: "What everyone does: the plain verb.", te: "అందరూ ఏం చేస్తారో: verb మామూలుగా." },
          example: { en: "People wear new clothes and visit the temple.", te: "అందరూ కొత్త బట్టలు వేసుకుని గుడికి వెళ్తారు." },
        },
        {
          form: "It is …",
          useFor: { en: "How the festival food tastes.", te: "పండుగ వంట రుచి ఎలా ఉంటుందో." },
          example: { en: "It is sweet, sour and bitter.", te: "అది తియ్యగా, పుల్లగా, చేదుగా ఉంటుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Ugadi is Telugu New Year.",
      right: "Ugadi is the Telugu New Year.",
      why: {
        en: "There is only one Telugu New Year, so it takes the. Telugu has no word for the.",
        te: "తెలుగు కొత్త సంవత్సరం ఒక్కటే, అందుకే the వస్తుంది. తెలుగులో the లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "People wears new clothes.",
      right: "People wear new clothes.",
      why: {
        en: "People means many, like they, so the verb has no s.",
        te: "people అంటే చాలామంది, they లాగా; అందుకే verb కి s ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "A visitor asks: What is Ugadi? Choose the best answer.", te: "ఒక అతిథి What is Ugadi? అని అడిగారు. సరైన జవాబు ఎంచుకోండి." },
      options: ["Ugadi is the Telugu New Year.", "Ugadi is Telugu New Year.", "Ugadi is a Telugu New Year."],
      answer: 0,
      why: {
        en: "Only one day is the Telugu New Year, so use the, not a and not nothing.",
        te: "తెలుగు కొత్త సంవత్సరం ఒక్క రోజే, అందుకే the; a కాదు, ఖాళీ కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "We eat pachadi with six ___.",
      te: "ఆరు రుచుల పచ్చడి తింటాం.",
      options: ["tastes", "taste", "tasty"],
      answer: 0,
      why: {
        en: "After six, the thing takes s, just like six rupees or six kilos.",
        te: "ఆరు తర్వాత s వస్తుంది, six rupees, six kilos లాగా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The visitor asks: How does the pachadi taste?", te: "అతిథి How does the pachadi taste? అని అడిగారు." },
      options: ["It is sweet, sour and bitter.", "It tastes like sweet, sour and bitter.", "It has sweet, sour and bitter."],
      answer: 0,
      why: {
        en: "Taste words come straight after is; like needs a thing after it, such as like mango.",
        te: "రుచి మాటలు is తర్వాత నేరుగా వస్తాయి; like తర్వాత ఒక వస్తువు కావాలి, like mango లాగా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My father make the pachadi every year.",
      wrongIndex: 2,
      fix: "My father makes the pachadi every year.",
      why: {
        en: "Father is one person, like he, so a verb for every year takes s.",
        te: "నాన్నగారు ఒక్కరు, he లాంటి వారు; ప్రతి సంవత్సరం చేసే పనికి verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A visitor asks you what Ugadi is. Tell her.",
        te: "ఒక అతిథి ఉగాది అంటే ఏంటని అడిగారు. ఆవిడకి చెప్పండి.",
      },
      expected: ["Ugadi is the Telugu New Year.", "It is the Telugu New Year."],
      options: ["Ugadi is the Telugu New Year.", "Ugadi is Telugu New Year.", "Ugadi was the Telugu New Year."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell a friend what people do on Ugadi.",
        te: "ఉగాది రోజు అందరూ ఏం చేస్తారో ఒక స్నేహితులకి చెప్పండి.",
      },
      expected: ["People wear new clothes and visit the temple.", "We eat pachadi with six tastes.", "We eat pachadi."],
      options: [
        "People wear new clothes and visit the temple.",
        "People wears new clothes and visits the temple.",
        "People wearing new clothes and visiting the temple.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Ugadi for a visitor", te: "అతిథికి ఉగాది గురించి" },
    scene: {
      en: "Ruth, a visitor from England, is staying next door. She sees mango leaves over your door.",
      te: "ఇంగ్లాండ్ నుండి వచ్చిన రూత్ గారు పక్కింట్లో ఉంటున్నారు. మీ గుమ్మానికి మామిడి తోరణం చూశారు.",
    },
    partner: { en: "Ruth (visitor)", te: "రూత్ (అతిథి)" },
    skills: [{ id: "explain", label: { en: "Explaining a festival", te: "పండుగ గురించి చెప్పడం" } }],
    turns: [
      {
        partner: "Good morning! Why are there leaves over your door?",
        te: "గుడ్ మార్నింగ్! మీ గుమ్మానికి ఆకులు ఎందుకు కట్టారు?",
        hint: { en: "Say they are for Ugadi, and explain what Ugadi is.", te: "ఉగాది కోసమని చెప్పి, ఉగాది అంటే ఏంటో చెప్పండి." },
        replies: [
          { say: "They are for Ugadi, the Telugu New Year.", good: true, skill: "explain" },
          { say: "They are for Ugadi, Telugu New Year.", good: false, skill: "explain", fixIt: "article" },
          {
            say: "You don't know Ugadi? Everyone knows it!",
            good: false,
            skill: "explain",
            react: { en: "Sorry! It is my first time in India.", te: "Sorry అండీ! ఇండియాకి రావడం ఇదే మొదటిసారి." },
          },
        ],
      },
      {
        partner: "How lovely! What do you do on Ugadi?",
        te: "ఎంత బాగుంది! ఉగాది రోజు మీరు ఏం చేస్తారు?",
        hint: { en: "Tell her about the special food and its tastes.", te: "ప్రత్యేకమైన వంట గురించి, దాని రుచుల గురించి చెప్పండి." },
        replies: [
          { say: "We eat pachadi. It is sweet, sour and bitter.", good: true, skill: "explain" },
          { say: "We eat pachadi. It tastes like sweet and bitter.", good: false, skill: "explain" },
        ],
      },
      {
        partner: "Bitter? In a festival food?",
        te: "చేదా? పండుగ వంటలోనా?",
        hint: { en: "Explain that life has good and bad days too.", te: "జీవితంలో కూడా మంచి రోజులు, కష్టమైన రోజులు ఉంటాయని చెప్పండి." },
        replies: [
          { say: "Yes. Life has happy and sad days too.", good: true, skill: "explain" },
          { say: "Yes. Life have happy and sad days too.", good: false, skill: "explain", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "What a beautiful idea! Can I try some?",
        te: "ఎంత మంచి ఆలోచన! నేను కొంచెం రుచి చూడొచ్చా?",
        hint: { en: "Say yes, of course, and offer to bring her some.", te: "తప్పకుండా అని, కొంచెం తెచ్చిస్తానని చెప్పండి." },
        replies: [
          { say: "Of course! I'll bring you some now.", good: true, skill: "explain" },
          { say: "Of course! I'll brought you some now.", good: false, skill: "explain" },
        ],
      },
    ],
  },
};
