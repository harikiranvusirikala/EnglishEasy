import type { Lesson } from "../../types";

/** Week 66, Day 4 (CURRICULUM §5): run out of, use up, top up — We've run out of sugar. */
export const day: Lesson = {
  id: "weve-run-out-of-sugar",
  kind: "lesson",
  title: { en: "We've Run Out of Sugar", te: "చక్కెర అయిపోయింది" },
  subtitle: "run out of, use up, top up",
  summary: {
    en: "Learn to say when something is finished at home: We've run out of sugar. Please don't use up all the hot water.",
    te: "ఇంట్లో ఏదైనా అయిపోతే చెప్పడం నేర్చుకుందాం: We've run out of sugar. Please don't use up all the hot water.",
  },
  seo: {
    title: "Run Out Of and Use Up in English for Telugu Speakers",
    description:
      "Say We've run out of sugar and Please don't use up all the hot water. Simple lessons for Telugu speakers on groceries at home.",
  },
  pattern: [
    { text: "We've", role: "who" },
    { text: "run out of", role: "action" },
    { text: "sugar", role: "what" },
  ],
  core: [
    { en: "We've run out of sugar.", te: "చక్కెర అయిపోయింది.", extra: ["from"] },
    { en: "Please don't use up all the hot water.", te: "వేడి నీళ్ళన్నీ వాడేయకండి.", extra: ["using"] },
    { en: "I'll get some from the kirana shop.", te: "కిరాణా షాప్ నుంచి కొంచెం తెస్తాను.", extra: ["any"] },
    { en: "Have we run out of milk again?", te: "పాలు మళ్ళీ అయిపోయాయా?", extra: ["Has"] },
    { en: "The gas is running out. Let's book a new cylinder.", te: "గ్యాస్ అయిపోవస్తోంది. కొత్త సిలిండర్ బుక్ చేద్దాం.", extra: ["booked"] },
    { en: "I need to top up my phone today.", te: "ఈ రోజు నా ఫోన్ రీఛార్జ్ చేయాలి.", extra: ["topped"] },
    { en: "Could you send one kilo of sugar and two packets of milk?", te: "ఒక కిలో చక్కెర, రెండు పాల ప్యాకెట్లు పంపిస్తారా?", extra: ["packet"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look in your kitchen today. Say aloud one thing you have run out of: We've run out of tea powder.",
    te: "ఈ రోజు మీ వంటగదిలో చూడండి. అయిపోయిన ఒక వస్తువు గురించి గట్టిగా చెప్పండి: We've run out of tea powder.",
  },
  words: [
    { en: "run out of", te: "అయిపోవడం" },
    { en: "use up", te: "మొత్తం వాడేయడం" },
    { en: "top up", te: "రీఛార్జ్ చేయడం, మళ్ళీ నింపడం" },
    { en: "running low", te: "తక్కువగా ఉండటం" },
    { en: "kirana shop", te: "కిరాణా షాప్" },
  ],
  grammar: ["phrasal-verbs", "present-perfect", "plurals-countable"],
  topics: ["home", "shopping", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Run out of", te: "అయిపోవడం: run out of" },
      body: {
        en: "When nothing is left, say We've run out of and the thing. Use up means use all of it, so none is left.",
        te: "ఏదైనా పూర్తిగా అయిపోతే We've run out of తర్వాత ఆ వస్తువు పేరు చెప్పండి. use up అంటే ఏమీ మిగలకుండా మొత్తం వాడేయడం.",
      },
      bridge: {
        te: ["చక్కెర", "అయిపోయింది"],
        en: [
          { text: "We've", role: "who" },
          { text: "run out of", role: "action" },
          { text: "sugar", role: "what" },
        ],
      },
      examples: [
        { en: "We've run out of sugar.", te: "చక్కెర అయిపోయింది." },
        { en: "Please don't use up all the hot water.", te: "వేడి నీళ్ళన్నీ వాడేయకండి." },
        { en: "The gas is running out. Let's book a new cylinder.", te: "గ్యాస్ అయిపోవస్తోంది. కొత్త సిలిండర్ బుక్ చేద్దాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Finished, low or used up?", te: "అయిపోయింది, తక్కువుంది, వాడేశారు" },
      items: [
        {
          form: "We've run out of",
          useFor: { en: "Nothing is left now.", te: "ఇప్పుడు అస్సలు లేదు." },
          example: { en: "We've run out of sugar.", te: "చక్కెర అయిపోయింది." },
        },
        {
          form: "We're running low on",
          useFor: { en: "A little is left; buy more soon.", te: "కొంచెమే మిగిలింది; త్వరగా కొనాలి." },
          example: { en: "We're running low on rice.", te: "బియ్యం తక్కువగా ఉంది." },
        },
        {
          form: "use up",
          useFor: { en: "Use all of it, so nothing is left for others.", te: "ఇతరులకి ఏమీ మిగలకుండా మొత్తం వాడేయడం." },
          example: { en: "Please don't use up all the hot water.", te: "వేడి నీళ్ళన్నీ వాడేయకండి." },
        },
        {
          form: "top up",
          useFor: { en: "Add more money to a phone or a card.", te: "ఫోన్‌కి, కార్డుకి మళ్ళీ డబ్బు వేయడం." },
          example: { en: "I need to top up my phone today.", te: "ఈ రోజు నా ఫోన్ రీఛార్జ్ చేయాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We've run out sugar.",
      right: "We've run out of sugar.",
      why: {
        en: "Run out needs of before the thing; Telugu అయిపోయింది has no extra word.",
        te: "run out తర్వాత వస్తువు పేరుకి ముందు of కావాలి; తెలుగు 'అయిపోయింది' లో అలాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Please send two milks.",
      right: "Please send two packets of milk.",
      why: {
        en: "Milk takes no s; count it with packets or litres.",
        te: "milk కి s రాదు; packets, litres తో లెక్కపెట్టాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell your friend about Suresh, who runs the kirana shop near your house.",
        te: "మీ ఇంటి దగ్గర కిరాణా షాప్ నడిపే సురేష్ గారి గురించి మీ స్నేహితులకి చెప్పండి.",
      },
      options: ["He delivers groceries to our door.", "He deliver groceries to our door.", "He is deliver groceries to our door."],
      answer: 0,
      why: {
        en: "One person, like he, takes s on the verb, and there is no is before it.",
        te: "ఒక్కరు (he) అయితే verb కి s వస్తుంది; దాని ముందు is రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Please don't ___ all the hot water. Others need a bath too.",
      te: "వేడి నీళ్ళన్నీ వాడేయకండి. మిగతావాళ్ళు కూడా స్నానం చేయాలి.",
      options: ["use up", "run out", "top up"],
      answer: 0,
      why: {
        en: "Use up means use all of something, so nothing is left for others.",
        te: "use up అంటే మొత్తం వాడేయడం; ఇతరులకి ఏమీ మిగలదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You can't see any rice in the tin. Ask your friend who is staying with you.",
        te: "డబ్బాలో బియ్యం కనిపించట్లేదు. మీ ఇంట్లో ఉంటున్న స్నేహితులని అడగండి.",
      },
      options: ["Have we run out of rice?", "Have we run out from rice?", "Did we ran out of rice?"],
      answer: 0,
      why: {
        en: "This question starts with have, then we, and run out always takes of.",
        te: "ఈ ప్రశ్న have తో మొదలై, తర్వాత we వస్తుంది; run out తర్వాత ఎప్పుడూ of.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "I'll get some from shop near the bus stop.",
      wrongIndex: 4,
      fix: "I'll get some from the shop near the bus stop.",
      why: {
        en: "A shop you both know takes the; Telugu has no such word, so we forget it.",
        te: "ఇద్దరికీ తెలిసిన షాప్ కాబట్టి the కావాలి; తెలుగులో అలాంటి పదం లేక మర్చిపోతాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend wants to make tea, but there is no milk. Tell her.",
        te: "మీ స్నేహితురాలు టీ పెట్టాలనుకుంటున్నారు, కానీ పాలు లేవు. ఆవిడకి చెప్పండి.",
      },
      expected: ["Sorry, we've run out of milk.", "We've run out of milk.", "There's no milk. We've run out."],
      options: ["Sorry, we've run out of milk.", "Sorry, we've run out milk.", "Sorry, we have finish the milk."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Call the kirana shop. Ask them to send two kilos of rice.",
        te: "కిరాణా షాప్‌కి ఫోన్ చేయండి. రెండు కిలోల బియ్యం పంపమని అడగండి.",
      },
      expected: ["Could you send two kilos of rice, please?", "Please send two kilos of rice.", "Can you send two kilos of rice?"],
      options: ["Could you send two kilos of rice, please?", "Could you send two kilo of rice, please?", "Could you send two kilos rice, please?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A home delivery", te: "హోమ్ డెలివరీ" },
    scene: {
      en: "You have run out of a few things. You call Venkat at the kirana shop for a home delivery.",
      te: "ఇంట్లో కొన్ని సామాన్లు అయిపోయాయి. హోమ్ డెలివరీ కోసం కిరాణా షాప్‌లో వెంకట్ గారికి ఫోన్ చేస్తున్నారు.",
    },
    partner: { en: "Venkat (the shopkeeper)", te: "వెంకట్ (షాప్ యజమాని)" },
    voice: "b",
    skills: [
      { id: "order", label: { en: "Ordering on the phone", te: "ఫోన్‌లో ఆర్డర్ చేయడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello, Lakshmi Kirana Stores. Venkat speaking.",
        te: "హలో, లక్ష్మి కిరాణా స్టోర్స్. వెంకట్ మాట్లాడుతున్నాను.",
        hint: { en: "Greet him, and say you would like a home delivery.", te: "ఆయనకి నమస్కారం చెప్పి, హోమ్ డెలివరీ కావాలని చెప్పండి." },
        replies: [
          { say: "Hello! I'd like a home delivery, please.", good: true, skill: "polite" },
          {
            say: "Send my things quickly. I'm in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. First, please tell me what you need.", te: "సరే, సరే. ముందు ఏం కావాలో చెప్పండి." },
          },
        ],
      },
      {
        partner: "Sure. What do you need?",
        te: "తప్పకుండా. ఏం కావాలి?",
        hint: { en: "Say there is no sugar left at home, and you need one kilo.", te: "ఇంట్లో చక్కెర అయిపోయిందని, ఒక కిలో కావాలని చెప్పండి." },
        replies: [
          { say: "We've run out of sugar. One kilo, please.", good: true, skill: "order" },
          { say: "We've run out sugar. One kilo, please.", good: false, skill: "order", fixIt: "preposition" },
        ],
      },
      {
        partner: "One kilo of sugar. Anything else?",
        te: "ఒక కిలో చక్కెర. ఇంకేమైనా?",
        hint: { en: "Ask for two packets of milk too.", te: "రెండు పాల ప్యాకెట్లు కూడా అడగండి." },
        replies: [
          { say: "Yes, two packets of milk, please.", good: true, skill: "order" },
          { say: "Yes, two packet of milk, please.", good: false, skill: "order", fixIt: "plural" },
        ],
      },
      {
        partner: "Okay. Our delivery person will come in twenty minutes.",
        te: "సరే. మా డెలివరీ మనిషి ఇరవై నిమిషాల్లో వస్తారు.",
        hint: { en: "Thank him, and say you will pay by UPI.", te: "థాంక్స్ చెప్పి, UPI తో కడతానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll pay by UPI.", good: true, skill: "polite" },
          { say: "Thank you. I'll paying by UPI.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
