import type { Lesson } from "../../types";

/** Week 6, Day 3 (CURRICULUM §3): some / any; uncountable food words (rice, milk, sugar). */
export const day: Lesson = {
  id: "some-and-any",
  kind: "lesson",
  title: { en: "Some & Any", te: "కొంచెం, ఏమైనా" },
  subtitle: "some / any",
  summary: {
    en: "Learn to use some in normal sentences and any in questions and with not.",
    te: "మామూలు వాక్యాల్లో some, ప్రశ్నల్లో, 'లేదు' అనే వాక్యాల్లో any వాడటం నేర్చుకుందాం.",
  },
  seo: {
    title: "Some and Any in English for Telugu Speakers",
    description:
      "Say I need some rice, Is there any milk? and There isn't any sugar in English. Simple lessons for Telugu speakers on some and any.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "need", role: "action" },
    { text: "some rice", role: "what" },
  ],
  core: [
    { en: "I need some rice.", te: "నాకు కొంచెం బియ్యం కావాలి.", extra: ["any"] },
    { en: "Is there any milk?", te: "పాలు ఏమైనా ఉన్నాయా?", extra: ["some"] },
    { en: "There isn't any sugar.", te: "చక్కెర అస్సలు లేదు.", extra: ["some"] },
    { en: "We have some eggs.", te: "మన దగ్గర కొన్ని గుడ్లు ఉన్నాయి.", extra: ["any"] },
    { en: "Do we need any oil?", te: "మనకు నూనె ఏమైనా కావాలా?", extra: ["some"] },
    { en: "Buy some onions, please.", te: "దయచేసి కొన్ని ఉల్లిపాయలు కొనండి.", extra: ["any"] },
    { en: "There is no salt.", te: "ఉప్పు లేదు.", extra: ["any"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look in your kitchen and say what there is: There is some … There isn't any …",
    te: "మీ వంటగదిలో చూసి ఏమి ఉందో చెప్పండి: There is some … There isn't any …",
  },
  words: [
    { en: "milk", te: "పాలు" },
    { en: "sugar", te: "చక్కెర" },
    { en: "eggs", te: "గుడ్లు" },
    { en: "oil", te: "నూనె" },
    { en: "salt", te: "ఉప్పు" },
  ],
  grammar: ["plurals-countable", "there-is-are"],
  topics: ["food", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Some and any", te: "some, any — కొంచెం, ఏమైనా" },
      body: {
        en: "Use some in normal sentences: I need some rice. Use any in questions and with not: Is there any milk? There isn't any sugar. Rice, milk, sugar and oil are not counted, so they have no s.",
        te: "మామూలు వాక్యాల్లో some: I need some rice. ప్రశ్నల్లో, not ఉన్న వాక్యాల్లో any: Is there any milk? There isn't any sugar. బియ్యం, పాలు, చక్కెర, నూనె లెక్కపెట్టేవి కావు, కాబట్టి వాటికి s ఉండదు.",
      },
      bridge: {
        te: ["నాకు", "కొంచెం బియ్యం", "కావాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "need", role: "action" },
          { text: "some rice", role: "what" },
        ],
      },
      examples: [
        { en: "I need some rice.", te: "నాకు కొంచెం బియ్యం కావాలి." },
        { en: "Is there any milk?", te: "పాలు ఏమైనా ఉన్నాయా?" },
        { en: "There isn't any sugar.", te: "చక్కెర అస్సలు లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Some or any?", te: "some ఆ, any ఆ?" },
      items: [
        {
          form: "some",
          useFor: { en: "In normal sentences.", te: "మామూలు వాక్యాల్లో." },
          example: { en: "We have some eggs.", te: "మన దగ్గర కొన్ని గుడ్లు ఉన్నాయి." },
        },
        {
          form: "any",
          useFor: { en: "In questions.", te: "ప్రశ్నల్లో." },
          example: { en: "Do we need any oil?", te: "మనకు నూనె ఏమైనా కావాలా?" },
        },
        {
          form: "not any / no",
          useFor: { en: "To say there is none.", te: "అస్సలు లేదని చెప్పడానికి." },
          example: { en: "There is no salt.", te: "ఉప్పు లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "There isn't some sugar.",
      right: "There isn't any sugar.",
      why: {
        en: "With not, use any.",
        te: "not ఉంటే any వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I need some rices.",
      right: "I need some rice.",
      why: {
        en: "Rice is not counted one by one, so no s.",
        te: "బియ్యం ఒక్కొక్కటిగా లెక్కపెట్టం, కాబట్టి s ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["There isn't some sugar.", "There isn't any sugar.", "There isn't sugars."],
      answer: 1,
      why: {
        en: "With not, any.",
        te: "not తో any.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Is there ___ milk?",
      te: "పాలు ఏమైనా ఉన్నాయా?",
      options: ["some", "any", "a"],
      answer: 1,
      why: {
        en: "In a question, any.",
        te: "ప్రశ్నలో any.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["We need some oils.", "We need some oil.", "We need a oil."],
      answer: 1,
      why: {
        en: "Oil is not counted: some oil.",
        te: "నూనె లెక్కపెట్టం: some oil.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Please buy some rices.",
      wrongIndex: 3,
      fix: "Please buy some rice.",
      why: {
        en: "Rice has no s.",
        te: "rice కి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend is going to the shop and asks what you need. Say some eggs.",
        te: "మీ స్నేహితులు షాప్‌కి వెళ్తూ మీకు ఏం కావాలని అడుగుతున్నారు. కొన్ని గుడ్లు అని చెప్పండి.",
      },
      expected: ["I need some eggs.", "Some eggs, please."],
      options: ["I need any eggs.", "I need some eggs.", "I need some egg."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask your relative if there is any milk at home.",
        te: "ఇంట్లో పాలు ఏమైనా ఉన్నాయా అని మీ బంధువుని అడగండి.",
      },
      expected: ["Is there any milk?"],
      options: ["Is there some milks?", "Is there any milk?", "Are there any milk?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A shopping list", te: "సామాన్ల జాబితా" },
    scene: {
      en: "Your aunt Kamala is going to the shop. Help her make a list.",
      te: "మీ అత్త కమల షాప్‌కి వెళ్తోంది. ఆమెకు సామాన్ల జాబితా చెప్పండి.",
    },
    partner: { en: "Kamala (your aunt)", te: "కమల (మీ అత్త)" },
    skills: [{ id: "some", label: { en: "some / any", te: "some / any వాడకం" } }],
    turns: [
      {
        partner: "I am going to the shop.",
        te: "నేను షాప్‌కి వెళ్తున్నాను.",
        hint: { en: "Say: We need some rice.", te: "ఇలా చెప్పండి: We need some rice." },
        replies: [
          { say: "We need some rice.", good: true, skill: "some" },
          { say: "We need some rices.", good: false, skill: "some" },
        ],
      },
      {
        partner: "Is there any oil?",
        te: "నూనె ఏమైనా ఉందా?",
        hint: { en: "Say no: No, there isn't any oil.", te: "లేదని చెప్పండి: No, there isn't any oil." },
        replies: [
          { say: "No, there isn't any oil.", good: true, skill: "some" },
          { say: "No, there isn't some oil.", good: false, skill: "some" },
        ],
      },
      {
        partner: "Okay, rice and oil. Anything else?",
        te: "సరే, బియ్యం, నూనె. ఇంకా ఏమైనా?",
        hint: { en: "Say: Please buy some eggs.", te: "ఇలా చెప్పండి: Please buy some eggs." },
        replies: [
          { say: "Please buy some eggs.", good: true, skill: "some" },
          { say: "Please buy some egg.", good: false, skill: "some" },
        ],
      },
      {
        partner: "Do we need any sugar?",
        te: "మనకు చక్కెర ఏమైనా కావాలా?",
        hint: { en: "Say: No, we have some sugar.", te: "ఇలా చెప్పండి: No, we have some sugar." },
        replies: [
          { say: "No, we have some sugar.", good: true, skill: "some" },
          { say: "No, we have any sugar.", good: false, skill: "some" },
        ],
      },
    ],
  },
};
