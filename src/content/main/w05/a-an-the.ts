import type { Lesson } from "../../types";

/** Week 5, Day 2 (CURRICULUM §3): articles a / an / the. */
export const day: Lesson = {
  id: "a-an-the",
  kind: "lesson",
  title: { en: "A, An, The", te: "a, an, the (ఒక, ఆ)" },
  subtitle: "a / an / the",
  summary: {
    en: "Learn when to say a, an or the before a thing. Telugu has no such words, so this is new.",
    te: "వస్తువు ముందు a, an, the ఎప్పుడు వాడాలో నేర్చుకుందాం. తెలుగులో ఇలాంటి పదాలు లేవు, కాబట్టి ఇది కొత్త.",
  },
  seo: {
    title: "A, An, The in English for Telugu Speakers",
    description:
      "Say I want a pen, It is an old house and The kitchen is small. Simple lessons for Telugu speakers on a, an and the, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "want", role: "action" },
    { text: "a pen", role: "what" },
  ],
  core: [
    { en: "I want a pen.", te: "నాకు ఒక పెన్ కావాలి.", extra: ["an"] },
    { en: "It is an old house.", te: "అది ఒక పాత ఇల్లు.", extra: ["a"] },
    { en: "The kitchen is small.", te: "వంటగది చిన్నది.", extra: ["A"] },
    { en: "I have an umbrella.", te: "నా దగ్గర ఒక గొడుగు ఉంది.", extra: ["a"] },
    { en: "Please give me a notebook.", te: "ఒక నోట్‌బుక్ ఇవ్వండి అండీ.", extra: ["an"] },
    { en: "The shop near the bank is closed.", te: "బ్యాంక్ దగ్గర ఉన్న షాప్ మూసి ఉంది.", extra: ["A"] },
    { en: "He is an honest man.", te: "ఆయన నిజాయితీ గల మనిషి.", extra: ["a"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Name three things around you with a or an: a cup, an egg, a phone.",
    te: "మీ చుట్టూ ఉన్న మూడు వస్తువులను a లేదా an తో చెప్పండి: a cup, an egg, a phone.",
  },
  words: [
    { en: "pen", te: "పెన్" },
    { en: "notebook", te: "నోట్‌బుక్" },
    { en: "kitchen", te: "వంటగది" },
    { en: "old", te: "పాత" },
    { en: "honest", te: "నిజాయితీ గల" },
  ],
  grammar: ["articles"],
  topics: ["home", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Telugu has no a or the", te: "తెలుగులో a, the లేవు" },
      body: {
        en: "Telugu says పెన్ or ఒక పెన్. English needs a small word before one thing: a pen. Say an before a vowel sound (a, e, i, o, u): an old house. Say the for a thing you both know: the kitchen.",
        te: "తెలుగులో 'పెన్' లేదా 'ఒక పెన్' అంటాం. ఇంగ్లీష్‌లో ఒక్క వస్తువు ముందు చిన్న పదం కావాలి: a pen. అచ్చు శబ్దం (a, e, i, o, u) ముందు an: an old house. ఇద్దరికీ తెలిసిన వస్తువుకి the: the kitchen.",
      },
      bridge: {
        te: ["నాకు", "ఒక పెన్", "కావాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "want", role: "action" },
          { text: "a pen", role: "what" },
        ],
      },
      examples: [
        { en: "I want a pen.", te: "నాకు ఒక పెన్ కావాలి." },
        { en: "It is an old house.", te: "అది ఒక పాత ఇల్లు." },
        { en: "The kitchen is small.", te: "వంటగది చిన్నది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "A, an or the?", te: "a, an, the — ఏది?" },
      items: [
        {
          form: "a + one thing",
          useFor: { en: "Any one thing, before most words.", te: "ఏదైనా ఒక వస్తువు, చాలా పదాల ముందు." },
          example: { en: "Please give me a notebook.", te: "ఒక నోట్‌బుక్ ఇవ్వండి అండీ." },
        },
        {
          form: "an + vowel sound",
          useFor: { en: "Before a, e, i, o, u sounds.", te: "a, e, i, o, u శబ్దాల ముందు." },
          example: { en: "I have an umbrella.", te: "నా దగ్గర ఒక గొడుగు ఉంది." },
        },
        {
          form: "the + the one we know",
          useFor: { en: "A thing you both know about.", te: "ఇద్దరికీ తెలిసిన వస్తువు." },
          example: { en: "The shop near the bank is closed.", te: "బ్యాంక్ దగ్గర ఉన్న షాప్ మూసి ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I want pen.",
      right: "I want a pen.",
      why: {
        en: "Telugu needs no word before పెన్, but English needs a for one thing: I want a pen.",
        te: "తెలుగులో 'పెన్' ముందు ఏమీ అక్కర్లేదు, కానీ ఇంగ్లీష్‌లో ఒక్క వస్తువు ముందు a: I want a pen.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "It is a old house.",
      right: "It is an old house.",
      why: {
        en: "Old starts with a vowel sound, so an.",
        te: "old అచ్చు శబ్దంతో మొదలవుతుంది, కాబట్టి an.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I have a umbrella.", "I have an umbrella.", "I have umbrella."],
      answer: 1,
      why: {
        en: "Umbrella starts with a vowel sound: an umbrella.",
        te: "umbrella అచ్చు శబ్దంతో మొదలవుతుంది: an umbrella.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It is ___ old house.",
      te: "అది ఒక పాత ఇల్లు.",
      options: ["a", "an", "the"],
      answer: 1,
      why: {
        en: "Old starts with a vowel sound, so say an: an old house.",
        te: "old అచ్చు శబ్దంతో మొదలవుతుంది, కాబట్టి an: an old house.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You and a guest are in your house. Which sentence is right?",
        te: "మీరు, ఒక అతిథి మీ ఇంట్లో ఉన్నారు. ఏ వాక్యం సరైనది?",
      },
      options: ["Kitchen is small.", "The kitchen is small.", "A kitchen is small."],
      answer: 1,
      why: {
        en: "You both know which kitchen, so say the: The kitchen is small.",
        te: "ఏ వంటగదో ఇద్దరికీ తెలుసు, కాబట్టి the: The kitchen is small.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Please give me an notebook.",
      wrongIndex: 3,
      fix: "Please give me a notebook.",
      why: {
        en: "Notebook does not start with a vowel sound, so a.",
        te: "notebook అచ్చు శబ్దంతో మొదలవదు, కాబట్టి a.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At a shop, ask for one pen.",
        te: "షాప్‌లో ఒక పెన్ అడగండి.",
      },
      expected: ["I want a pen.", "A pen, please.", "Please give me a pen."],
      options: ["I want pen.", "I want a pen.", "I want an pen."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "It is raining. Tell your friend you have an umbrella.",
        te: "వర్షం పడుతోంది. మీ దగ్గర గొడుగు ఉందని మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["I have an umbrella."],
      options: ["I have a umbrella.", "I have an umbrella.", "I have umbrella."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the stationery shop", te: "స్టేషనరీ షాప్‌లో" },
    scene: {
      en: "You need a few things from Rahim's stationery shop. Ask for them with a, an and the.",
      te: "రహీమ్ గారి స్టేషనరీ షాపు నుండి మీకు కొన్ని వస్తువులు కావాలి. a, an, the వాడుతూ అడగండి.",
    },
    partner: { en: "Rahim (a shopkeeper)", te: "రహీమ్ (షాపు యజమాని)" },
    voice: "b",
    skills: [{ id: "articles", label: { en: "a / an / the", te: "a / an / the వాడకం" } }],
    turns: [
      {
        partner: "Good morning! What do you need?",
        te: "గుడ్ మార్నింగ్! మీకు ఏం కావాలి?",
        hint: { en: "Ask for one notebook politely.", te: "ఒక నోట్‌బుక్ మర్యాదగా అడగండి." },
        replies: [
          { say: "A notebook, please.", good: true, skill: "articles" },
          { say: "An notebook, please.", good: false, skill: "articles" },
        ],
      },
      {
        partner: "Anything else?",
        te: "ఇంకా ఏమైనా?",
        hint: { en: "Ask for one eraser too. Think: a or an?", te: "ఒక ఎరేజర్ కూడా అడగండి. a నా, an నా? ఆలోచించండి." },
        replies: [
          { say: "And an eraser, please.", good: true, skill: "articles" },
          { say: "And a eraser, please.", good: false, skill: "articles" },
        ],
      },
      {
        partner: "Here you are.",
        te: "ఇదిగోండి.",
        hint: { en: "Ask the price of the notebook he gave you.", te: "ఆయన ఇచ్చిన నోట్‌బుక్ ధర అడగండి." },
        replies: [
          { say: "How much is the notebook?", good: true, skill: "articles" },
          { say: "How much is notebook?", good: false, skill: "articles" },
        ],
      },
      {
        partner: "Thirty rupees.",
        te: "ముప్పై రూపాయలు.",
        hint: { en: "Now ask for something to carry them in.", te: "ఇప్పుడు వాటిని తీసుకెళ్ళడానికి ఒక సంచి అడగండి." },
        replies: [
          { say: "Please give me a bag.", good: true, skill: "articles" },
          { say: "Please give me an bag.", good: false, skill: "articles" },
          {
            say: "Thirty? Give it for twenty.",
            good: false,
            react: { en: "Sorry, prices are fixed here.", te: "సారీ అండీ, ఇక్కడ ధరలు ఫిక్స్‌డ్." },
          },
        ],
      },
    ],
  },
};
