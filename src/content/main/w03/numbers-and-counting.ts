import type { Lesson } from "../../types";

/** Week 3, Day 1 (CURRICULUM §3): numbers 1–100, age, house and phone numbers. */
export const day: Lesson = {
  id: "numbers-and-counting",
  kind: "lesson",
  title: { en: "Numbers", te: "సంఖ్యలు" },
  subtitle: "numbers 1–100",
  summary: {
    en: "Learn to say numbers, your age, your house number and your phone number in English.",
    te: "సంఖ్యలు, మీ వయసు, ఇంటి నంబర్, ఫోన్ నంబర్ ఇంగ్లీష్‌లో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Numbers in English for Telugu Speakers: Age and Phone Numbers",
    description:
      "Say numbers, your age, your house number and your phone number in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "am", role: "action" },
    { text: "sixty years old", role: "what" },
  ],
  core: [
    { en: "I am sixty years old.", te: "నాకు అరవై ఏళ్ళు.", extra: ["have"] },
    { en: "My house number is twenty-five.", te: "మా ఇంటి నంబర్ ఇరవై ఐదు.", extra: ["are"] },
    { en: "I have two brothers.", te: "నాకు ఇద్దరు అన్నదమ్ములు ఉన్నారు.", extra: ["brother"] },
    { en: "We need five chairs.", te: "మాకు ఐదు కుర్చీలు కావాలి.", extra: ["chair"] },
    { en: "Count from one to ten.", te: "ఒకటి నుండి పది వరకు లెక్కపెట్టండి.", extra: ["at"] },
    { en: "What is your phone number?", te: "మీ ఫోన్ నంబర్ ఏంటి?", extra: ["Where"] },
    { en: "She is seventy-two years old.", te: "ఆవిడ వయసు డెబ్బై రెండు.", extra: ["has"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Say your age and your phone number in English, one digit at a time.",
    te: "మీ వయసు, మీ ఫోన్ నంబర్ ఇంగ్లీష్‌లో చెప్పండి. ఫోన్ నంబర్ ఒక్కో అంకె విడిగా చెప్పండి.",
  },
  words: [
    { en: "number", te: "నంబర్, సంఖ్య" },
    { en: "count", te: "లెక్కపెట్టడం" },
    { en: "years old", te: "ఏళ్ళ వయసు" },
    { en: "chair", te: "కుర్చీ" },
    { en: "twenty", te: "ఇరవై" },
  ],
  grammar: ["big-numbers", "am-is-are", "plurals-countable"],
  topics: ["people", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying your age", te: "వయసు చెప్పడం" },
      body: {
        en: "In Telugu we say నాకు అరవై ఏళ్ళు. In English, use am, not have: I am sixty years old.",
        te: "తెలుగులో 'నాకు అరవై ఏళ్ళు' అంటాం. ఇంగ్లీష్‌లో have కాదు, am వాడాలి: I am sixty years old.",
      },
      bridge: {
        te: ["నాకు", "అరవై", "ఏళ్ళు"],
        en: [
          { text: "I", role: "who" },
          { text: "am", role: "action" },
          { text: "sixty years old", role: "what" },
        ],
      },
      examples: [
        { en: "I am sixty years old.", te: "నాకు అరవై ఏళ్ళు." },
        { en: "She is seventy-two years old.", te: "ఆవిడ వయసు డెబ్బై రెండు." },
        { en: "My house number is twenty-five.", te: "మా ఇంటి నంబర్ ఇరవై ఐదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How to say numbers", te: "సంఖ్యలు ఎలా చెప్పాలి" },
      items: [
        {
          form: "20, 30, 40 → -ty",
          useFor: { en: "Tens end in -ty: twenty, thirty, forty.", te: "పదులు -ty తో ముగుస్తాయి: twenty, thirty, forty." },
          example: { en: "My house number is twenty-five.", te: "మా ఇంటి నంబర్ ఇరవై ఐదు." },
        },
        {
          form: "two, five … + s",
          useFor: { en: "After a number bigger than one, add s to the thing.", te: "ఒకటి కంటే ఎక్కువ అయితే ఆ వస్తువుకి s చేర్చాలి." },
          example: { en: "We need five chairs.", te: "మాకు ఐదు కుర్చీలు కావాలి." },
        },
        {
          form: "phone number",
          useFor: { en: "Say a phone number one digit at a time.", te: "ఫోన్ నంబర్ ఒక్కో అంకె విడిగా చెప్పాలి." },
          example: { en: "Nine eight four eight zero.", te: "తొమ్మిది ఎనిమిది నాలుగు ఎనిమిది సున్నా." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I have sixty years.",
      right: "I am sixty years old.",
      why: {
        en: "For age, English uses am, is or are, and adds old at the end.",
        te: "వయసు చెప్పడానికి am, is, are వాడాలి, చివర old చేర్చాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I have two brother.",
      right: "I have two brothers.",
      why: {
        en: "More than one, so add s: brothers.",
        te: "ఒకరి కంటే ఎక్కువ, కాబట్టి s చేర్చాలి: brothers.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I have sixty years.", "I am sixty years old.", "I sixty years old."],
      answer: 1,
      why: {
        en: "Say your age with am: I am sixty years old.",
        te: "వయసుని am తో చెప్పాలి: I am sixty years old.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We need five ___.",
      te: "మాకు ఐదు కుర్చీలు కావాలి.",
      options: ["chair", "chairs", "a chair"],
      answer: 1,
      why: {
        en: "Five is more than one, so add s: chairs.",
        te: "ఐదు అంటే ఒకటి కంటే ఎక్కువ, కాబట్టి s: chairs.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which word is 40?", te: "40 ని ఇంగ్లీష్‌లో ఏమంటారు?" },
      options: ["fourteen", "forty", "four"],
      answer: 1,
      why: {
        en: "Forty is 40. Fourteen is 14.",
        te: "forty అంటే 40. fourteen అంటే 14.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She has seventy years old.",
      wrongIndex: 1,
      fix: "She is seventy years old.",
      why: {
        en: "For age, use is with she, not has.",
        te: "వయసుకి she తో has కాదు, is వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A nurse asks: How old are you? Say your age in English.",
        te: "నర్సు అడుగుతున్నారు: How old are you? మీ వయసు ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["I am sixty years old.", "I am sixty-five years old.", "I am seventy years old."],
      options: ["I have sixty years.", "I am sixty years old.", "I sixty years."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A delivery man asks your house number. It is twenty-five. Tell him.",
        te: "డెలివరీ అతను మీ ఇంటి నంబర్ అడుగుతున్నాడు. అది ఇరవై ఐదు. చెప్పండి.",
      },
      expected: ["My house number is twenty-five.", "It is twenty-five."],
      options: ["My house number is twenty-five.", "My house number twenty-five.", "My house number are twenty-five."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A home delivery", te: "ఇంటికి డెలివరీ" },
    scene: {
      en: "Mohan is bringing your parcel. He calls to ask your house number and phone number.",
      te: "మోహన్ మీ పార్సిల్ తీసుకొస్తున్నాడు. మీ ఇంటి నంబర్, ఫోన్ నంబర్ అడగడానికి ఫోన్ చేశాడు.",
    },
    partner: { en: "Mohan (a delivery man)", te: "మోహన్ (డెలివరీ అతను)" },
    skills: [{ id: "numbers", label: { en: "Numbers", te: "సంఖ్యలు" } }],
    turns: [
      {
        partner: "Hello, I have your parcel.",
        te: "హలో, మీ పార్సిల్ నా దగ్గర ఉంది.",
        hint: { en: "Say: My house number is twenty-five.", te: "ఇలా చెప్పండి: My house number is twenty-five." },
        replies: [
          { say: "My house number is twenty-five.", good: true, skill: "numbers" },
          { say: "My house number twenty-five.", good: false, skill: "numbers" },
        ],
      },
      {
        partner: "And your phone number, please?",
        te: "మీ ఫోన్ నంబర్ కూడా చెప్పండి.",
        hint: { en: "Say the first five digits one by one: nine eight four eight zero.", te: "మొదటి ఐదు అంకెలు ఒక్కొక్కటిగా చెప్పండి: nine eight four eight zero." },
        replies: [
          { say: "Nine eight four eight zero.", good: true, skill: "numbers" },
          { say: "Ninety-eight thousand four hundred eighty.", good: false, skill: "numbers" },
        ],
      },
      {
        partner: "Yes, and then?",
        te: "ఆ, తర్వాత?",
        hint: { en: "Say the last five digits: one two three four five.", te: "చివరి ఐదు అంకెలు చెప్పండి: one two three four five." },
        replies: [
          { say: "One two three four five.", good: true, skill: "numbers" },
          { say: "Twelve thousand three hundred forty-five.", good: false, skill: "numbers" },
        ],
      },
      {
        partner: "Thank you. I will come at four.",
        te: "థాంక్యూ. నేను నాలుగు గంటలకు వస్తాను.",
        hint: { en: "Say: Okay. Thank you very much.", te: "ఇలా చెప్పండి: Okay. Thank you very much." },
        replies: [
          { say: "Okay. Thank you very much.", good: true },
          { say: "Okay. Thanks you very much.", good: false },
        ],
      },
    ],
  },
};
