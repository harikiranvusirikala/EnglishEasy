import type { Lesson } from "../../types";

/** Week 22, Day 1 (CURRICULUM §4): Do you have …? — asking a shop for an item; Yes, we do / Sorry, we don't. */
export const day: Lesson = {
  id: "do-you-have",
  kind: "lesson",
  title: { en: "Do You Have …?", te: "… ఉన్నాయా?" },
  subtitle: "Do you have …?",
  summary: {
    en: "Learn to ask a shop for what you need, Do you have brown rice?, and to understand Yes, we do and Sorry, we don't.",
    te: "షాపులో మీకు కావలసింది అడగడం నేర్చుకుందాం: Do you have brown rice? Yes, we do, Sorry, we don't అంటే ఏంటో కూడా.",
  },
  seo: {
    title: "Asking for Things in a Shop in English for Telugu Speakers",
    description:
      "Ask Do you have brown rice? and understand Sorry, we don't have it today. Simple lessons for Telugu speakers on asking for things in a shop.",
  },
  pattern: [
    { text: "Do", role: "action" },
    { text: "you", role: "who" },
    { text: "have", role: "action" },
    { text: "brown rice?", role: "what" },
  ],
  core: [
    { en: "Do you have brown rice?", te: "బ్రౌన్ రైస్ ఉందా?", extra: ["Are"] },
    { en: "Sorry, we don't have it today.", te: "Sorry అండీ, ఈ రోజు అది లేదు.", extra: ["not"] },
    { en: "Yes, we do. How much do you need?", te: "ఉంది అండీ. ఎంత కావాలి?", extra: ["are"] },
    { en: "Do you have any other brand?", te: "వేరే బ్రాండ్ ఏమైనా ఉందా?", extra: ["has"] },
    { en: "It's out of stock. It will come tomorrow.", te: "స్టాక్ అయిపోయింది. రేపు వస్తుంది.", extra: ["coming"] },
    { en: "Do you have toothpaste in a small size?", te: "టూత్‌పేస్ట్ చిన్న సైజులో ఉందా?", extra: ["on"] },
    { en: "Do you sell wheat flour here?", te: "ఇక్కడ గోధుమ పిండి అమ్ముతారా?", extra: ["selling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At a shop today, ask for one thing with Do you have …?",
    te: "ఈ రోజు ఏదైనా షాపులో Do you have …? అని ఒక వస్తువు అడగండి.",
  },
  words: [
    { en: "brown rice", te: "బ్రౌన్ రైస్, దంపుడు బియ్యం" },
    { en: "brand", te: "బ్రాండ్, కంపెనీ పేరు" },
    { en: "out of stock", te: "స్టాక్ అయిపోయింది, ప్రస్తుతం లేదు" },
    { en: "toothpaste", te: "టూత్‌పేస్ట్" },
    { en: "wheat flour", te: "గోధుమ పిండి" },
  ],
  grammar: ["yes-no-questions", "present-simple"],
  topics: ["shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for a thing", te: "ఒక వస్తువు అడగడం" },
      body: {
        en: "To ask a shop for something, start with Do you have …? The shopkeeper says Yes, we do, or Sorry, we don't. Telugu just adds ఉందా? at the end, but English needs Do at the start.",
        te: "షాపులో ఏదైనా అడగాలంటే Do you have …? తో మొదలుపెట్టండి. షాపువారు Yes, we do (ఉంది) లేదా Sorry, we don't (లేదు) అంటారు. తెలుగులో చివర 'ఉందా?' చాలు; ఇంగ్లీష్‌లో ముందు Do కావాలి.",
      },
      bridge: {
        te: ["బ్రౌన్ రైస్", "ఉందా?"],
        en: [
          { text: "Do", role: "action" },
          { text: "you", role: "who" },
          { text: "have", role: "action" },
          { text: "brown rice?", role: "what" },
        ],
      },
      examples: [
        { en: "Do you have brown rice?", te: "బ్రౌన్ రైస్ ఉందా?" },
        { en: "Yes, we do. How much do you need?", te: "ఉంది అండీ. ఎంత కావాలి?" },
        { en: "Sorry, we don't have it today.", te: "Sorry అండీ, ఈ రోజు అది లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the shop says", te: "షాపువారు ఏమంటారు" },
      items: [
        {
          form: "Yes, we do.",
          useFor: { en: "They have it.", te: "వారి దగ్గర ఉంది." },
          example: { en: "Yes, we do. How much do you need?", te: "ఉంది అండీ. ఎంత కావాలి?" },
        },
        {
          form: "Sorry, we don't.",
          useFor: { en: "They don't have it.", te: "వారి దగ్గర లేదు." },
          example: { en: "Sorry, we don't have it today.", te: "Sorry అండీ, ఈ రోజు అది లేదు." },
        },
        {
          form: "out of stock",
          useFor: { en: "It is finished for now. It will come again.", te: "ప్రస్తుతం అయిపోయింది. మళ్ళీ వస్తుంది." },
          example: { en: "It's out of stock. It will come tomorrow.", te: "స్టాక్ అయిపోయింది. రేపు వస్తుంది." },
        },
        {
          form: "any other brand?",
          useFor: { en: "Ask for another company's one.", te: "వేరే కంపెనీది అడగడానికి." },
          example: { en: "Do you have any other brand?", te: "వేరే బ్రాండ్ ఏమైనా ఉందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You have brown rice?",
      right: "Do you have brown rice?",
      why: {
        en: "Telugu makes a question with ఉందా? at the end; an English question starts with Do.",
        te: "తెలుగులో చివర 'ఉందా?' తో ప్రశ్న అవుతుంది; ఇంగ్లీష్‌లో ప్రశ్న Do తో మొదలవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Do you have this in small size?",
      right: "Do you have this in a small size?",
      why: {
        en: "Telugu has no word like a, but English puts a before one size.",
        te: "తెలుగులో a లాంటి పదం లేదు; ఇంగ్లీష్‌లో ఒక size ముందు a వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the shopkeeper for brown rice.", te: "షాపువారిని బ్రౌన్ రైస్ అడగండి." },
      options: ["Do you have brown rice?", "Are you have brown rice?", "Brown rice is there?"],
      answer: 0,
      why: {
        en: "A question with have starts with Do; are never goes with have.",
        te: "have తో ప్రశ్న Do తో మొదలవుతుంది; have తో are రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Sorry, we ___ have it today.",
      te: "Sorry అండీ, ఈ రోజు అది లేదు.",
      options: ["don't", "aren't", "not"],
      answer: 0,
      why: {
        en: "Telugu లేదు with have becomes don't have; not alone is never enough.",
        te: "have తో 'లేదు' అంటే don't have; not ఒక్కటే సరిపోదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The shopkeeper says: It's out of stock. What does it mean?",
        te: "షాపువారు It's out of stock అన్నారు. అర్థం ఏంటి?",
      },
      options: ["They don't have it now.", "It is outside the shop.", "It is very cheap now."],
      answer: 0,
      why: {
        en: "Out of stock means it is finished for now and will come again.",
        te: "out of stock అంటే ప్రస్తుతం అయిపోయింది, మళ్ళీ వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Do you has any other brand?",
      wrongIndex: 2,
      fix: "Do you have any other brand?",
      why: {
        en: "After do, the verb stays plain, so it is have, never has.",
        te: "do తర్వాత verb మారదు, అందుకే have; has రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the shopkeeper for wheat flour.",
        te: "షాపువారిని గోధుమ పిండి అడగండి.",
      },
      expected: ["Do you have wheat flour?", "Do you sell wheat flour?", "Do you have any wheat flour?"],
      options: ["Do you have wheat flour?", "You have wheat flour?", "Are you having wheat flour?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You don't like this brand of toothpaste. Ask for a different one.",
        te: "ఈ బ్రాండ్ టూత్‌పేస్ట్ మీకు నచ్చలేదు. వేరే బ్రాండ్ అడగండి.",
      },
      expected: ["Do you have any other brand?", "Do you have another brand?"],
      options: ["Do you have any other brand?", "Other brand is there?", "Does you have any other brand?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the kirana shop", te: "కిరాణా షాపులో" },
    scene: {
      en: "You need a few things. Narayana runs the kirana shop on your street.",
      te: "మీకు కొన్ని సరుకులు కావాలి. మీ వీధిలోని కిరాణా షాపు నారాయణ గారు నడుపుతారు.",
    },
    partner: { en: "Narayana (shopkeeper)", te: "నారాయణ (షాపు యజమాని)" },
    voice: "b",
    skills: [{ id: "ask", label: { en: "Do you have …?", te: "Do you have … అని అడగడం" } }],
    turns: [
      {
        partner: "Namaste! Come in. What do you need?",
        te: "నమస్తే! రండి. ఏం కావాలి?",
        hint: { en: "Ask if he has brown rice.", te: "బ్రౌన్ రైస్ ఉందా అని ఆయనని అడగండి." },
        replies: [
          { say: "Do you have brown rice?", good: true, skill: "ask" },
          { say: "You have brown rice?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Sorry, we don't have it today.",
        te: "Sorry అండీ, ఈ రోజు లేదు.",
        hint: { en: "Ask when it will come.", te: "అది ఎప్పుడు వస్తుందో అడగండి." },
        replies: [
          { say: "When will it come?", good: true, skill: "ask" },
          { say: "When it will come?", good: false, skill: "ask", fixIt: "question" },
          {
            say: "No brown rice? What kind of shop is this?",
            good: false,
            skill: "ask",
            react: { en: "Sorry! It comes every week. Tomorrow, for sure.", te: "Sorry అండీ! ప్రతి వారం వస్తుంది. రేపు తప్పకుండా." },
          },
        ],
      },
      {
        partner: "It will come tomorrow morning. Anything else?",
        te: "రేపు ఉదయం వస్తుంది. ఇంకేమైనా?",
        hint: { en: "Ask for toothpaste in a small size.", te: "చిన్న సైజు టూత్‌పేస్ట్ ఉందా అని అడగండి." },
        replies: [
          { say: "Do you have toothpaste in a small size?", good: true, skill: "ask" },
          { say: "Do you have toothpaste in small size?", good: false, skill: "ask", fixIt: "article" },
        ],
      },
      {
        partner: "Yes, we do. Here you are.",
        te: "ఉంది అండీ. ఇదిగోండి.",
        hint: { en: "Thank him, and say you'll come back tomorrow.", te: "థాంక్స్ చెప్పి, రేపు మళ్ళీ వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll come back tomorrow.", good: true },
          { say: "Thank you. I'll coming back tomorrow.", good: false },
        ],
      },
    ],
  },
};
