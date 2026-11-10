import type { Lesson } from "../../types";

/** Week 6, Day 4 (CURRICULUM §3): how much / how many for quantities; kilo, litre, dozen, packet. */
export const day: Lesson = {
  id: "how-much-how-many",
  kind: "lesson",
  title: { en: "How Much, How Many", te: "ఎంత, ఎన్ని" },
  subtitle: "how much / how many",
  summary: {
    en: "Learn to ask about quantity: how many for things you count, how much for things you don't.",
    te: "పరిమాణం అడగడం నేర్చుకుందాం: లెక్కపెట్టే వాటికి how many, లెక్కపెట్టని వాటికి how much.",
  },
  seo: {
    title: "How Much and How Many in English for Telugu Speakers",
    description:
      "Ask How much rice do you want? and How many eggs? in English, and buy by the kilo, litre and dozen. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "How many eggs", role: "what" },
    { text: "do", role: "action" },
    { text: "you", role: "who" },
    { text: "want?", role: "action" },
  ],
  core: [
    { en: "How many eggs do you want?", te: "మీకు ఎన్ని గుడ్లు కావాలి?", extra: ["much"] },
    { en: "How much rice do you want?", te: "మీకు ఎంత బియ్యం కావాలి?", extra: ["many"] },
    { en: "I want two kilos of rice.", te: "నాకు రెండు కిలోల బియ్యం కావాలి.", extra: ["kilo"] },
    { en: "Give me one dozen eggs.", te: "నాకు ఒక డజను గుడ్లు ఇవ్వండి.", extra: ["dozens"] },
    { en: "How many people are eating?", te: "ఎంత మంది తింటున్నారు?", extra: ["much"] },
    { en: "How much milk is there?", te: "పాలు ఎంత ఉన్నాయి?", extra: ["many"] },
    { en: "Half a litre of milk, please.", te: "అర లీటరు పాలు ఇవ్వండి.", extra: ["litres"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At the shop, ask for things with amounts: one kilo, half a litre, one dozen.",
    te: "షాప్‌లో పరిమాణంతో అడగండి: one kilo, half a litre, one dozen.",
  },
  words: [
    { en: "how many", te: "ఎన్ని" },
    { en: "kilo", te: "కిలో" },
    { en: "litre", te: "లీటరు" },
    { en: "dozen", te: "డజను" },
    { en: "packet", te: "ప్యాకెట్" },
  ],
  grammar: ["question-words", "plurals-countable"],
  topics: ["food", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Count it or not?", te: "లెక్కపెడతామా, లేదా?" },
      body: {
        en: "Things you count, like eggs and people, take how many. Things you don't count, like rice and milk, take how much. It is the same how much you use for prices.",
        te: "గుడ్లు, మనుషులు లాంటి లెక్కపెట్టే వాటికి how many. బియ్యం, పాలు లాంటి లెక్కపెట్టని వాటికి how much. ధర అడిగే how much కూడా ఇదే.",
      },
      bridge: {
        te: ["మీకు", "ఎన్ని గుడ్లు", "కావాలి?"],
        en: [
          { text: "How many eggs", role: "what" },
          { text: "do", role: "action" },
          { text: "you", role: "who" },
          { text: "want?", role: "action" },
        ],
      },
      examples: [
        { en: "How many eggs do you want?", te: "మీకు ఎన్ని గుడ్లు కావాలి?" },
        { en: "How much rice do you want?", te: "మీకు ఎంత బియ్యం కావాలి?" },
        { en: "I want two kilos of rice.", te: "నాకు రెండు కిలోల బియ్యం కావాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How many, how much, amounts", te: "ఎన్ని, ఎంత, పరిమాణాలు" },
      items: [
        {
          form: "how many + eggs, people",
          useFor: { en: "For things you can count.", te: "లెక్కపెట్టగలిగే వాటికి." },
          example: { en: "How many people are eating?", te: "ఎంత మంది తింటున్నారు?" },
        },
        {
          form: "how much + rice, milk",
          useFor: { en: "For things you don't count.", te: "లెక్కపెట్టని వాటికి." },
          example: { en: "How much milk is there?", te: "పాలు ఎంత ఉన్నాయి?" },
        },
        {
          form: "a kilo of, a litre of, a dozen",
          useFor: { en: "To give an amount.", te: "పరిమాణం చెప్పడానికి." },
          example: { en: "Half a litre of milk, please.", te: "అర లీటరు పాలు ఇవ్వండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "How much eggs do you want?",
      right: "How many eggs do you want?",
      why: {
        en: "In Telugu we ask ఎన్ని for eggs, and ఎన్ని is how many: How many eggs do you want?",
        te: "గుడ్లు 'ఎన్ని?' అని అడుగుతాం; ఎన్ని = how many: How many eggs do you want?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I want two kilo rice.",
      right: "I want two kilos of rice.",
      why: {
        en: "Telugu says రెండు కిలోల బియ్యం; English needs kilos, then of: two kilos of rice.",
        te: "తెలుగులో 'రెండు కిలోల బియ్యం'; ఇంగ్లీష్‌లో kilos, తర్వాత of: two kilos of rice.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "readIt",
      kind: "label",
      heading: "Glucose Biscuits",
      lines: ["Pieces: 12", "Net weight: 100 g", "MRP: ₹20", "Best before: 03/2027"],
      prompt: { en: "How many biscuits are in this packet?", te: "ఈ ప్యాకెట్‌లో ఎన్ని బిస్కెట్లు ఉన్నాయి?" },
      options: ["12 biscuits", "100 biscuits", "20 biscuits"],
      answer: 0,
      why: {
        en: "Pieces tells you how many; grams is the weight and MRP is the price.",
        te: "Pieces ఎన్ని ఉన్నాయో చెప్తుంది; grams బరువు, MRP ధర.",
      },
      say: "There are twelve biscuits in this packet.",
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "How ___ rice do you want?",
      te: "మీకు ఎంత బియ్యం కావాలి?",
      options: ["much", "many", "more"],
      answer: 0,
      why: {
        en: "We ask ఎంత for rice, not ఎన్ని, so it is how much.",
        te: "బియ్యం 'ఎంత?' అని అడుగుతాం, 'ఎన్ని?' కాదు; అందుకే how much.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: { en: "Choose the correct sentence at the shop.", te: "షాప్‌లో సరైన వాక్యం ఎంచుకోండి." },
      options: ["Give me one dozen eggs.", "Give me one dozens eggs.", "Give me one dozen egg."],
      answer: 0,
      why: {
        en: "One dozen eggs: dozen has no s, eggs has s.",
        te: "one dozen eggs: dozen కి s లేదు, eggs కి s ఉంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "How much people are eating?",
      wrongIndex: 1,
      fix: "How many people are eating?",
      why: {
        en: "Telugu says ఎంత మంది, but people are counted, so use how many.",
        te: "తెలుగులో 'ఎంత మంది' అన్నా, మనుషులను లెక్కపెడతాం; అందుకే how many.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "The shopkeeper asks: How much rice? Say two kilos.",
        te: "షాప్ ఆయన అడుగుతున్నారు: How much rice? రెండు కిలోలు అని చెప్పండి.",
      },
      expected: ["Two kilos, please.", "I want two kilos of rice.", "Two kilos of rice, please."],
      options: ["Two kilo, please.", "Two kilos, please.", "Two kilos rices, please."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask your friend how many people are coming for lunch.",
        te: "భోజనానికి ఎంత మంది వస్తున్నారో మీ స్నేహితుడిని అడగండి.",
      },
      expected: ["How many people are coming?", "How many people are coming for lunch?"],
      options: ["How much people are coming?", "How many people are coming?", "How many peoples are coming?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the kirana shop", te: "కిరాణా షాప్‌లో" },
    scene: {
      en: "You are buying groceries at Fatima's kirana shop. Ask for the right amounts.",
      te: "మీరు ఫాతిమా గారి కిరాణా షాప్‌లో సామాన్లు కొంటున్నారు. సరైన పరిమాణాలతో అడగండి.",
    },
    partner: { en: "Fatima (a shopkeeper)", te: "ఫాతిమా (షాప్ యజమాని)" },
    skills: [{ id: "amount", label: { en: "Amounts", te: "పరిమాణాలు" } }],
    turns: [
      {
        partner: "Yes? What do you need?",
        te: "చెప్పండి, ఏం కావాలి?",
        hint: { en: "Ask for rice, and say how many kilos.", te: "బియ్యం అడగండి, ఎన్ని కిలోలో చెప్పండి." },
        replies: [
          { say: "I want two kilos of rice.", good: true, skill: "amount" },
          { say: "I want two kilo rice.", good: false, skill: "amount", fixIt: "plural" },
        ],
      },
      {
        partner: "Anything else?",
        te: "ఇంకా ఏమైనా?",
        hint: { en: "Ask for a dozen eggs.", te: "ఒక డజను గుడ్లు అడగండి." },
        replies: [
          { say: "One dozen eggs, please.", good: true, skill: "amount" },
          { say: "One dozens eggs, please.", good: false, skill: "amount", fixIt: "plural" },
        ],
      },
      {
        partner: "How many packets of milk?",
        te: "ఎన్ని పాల ప్యాకెట్లు?",
        hint: { en: "Say how many packets you want.", te: "ఎన్ని ప్యాకెట్లు కావాలో చెప్పండి." },
        replies: [
          { say: "Two packets, please.", good: true, skill: "amount" },
          { say: "Two packet, please.", good: false, skill: "amount", fixIt: "plural" },
        ],
      },
      {
        partner: "Is that all?",
        te: "అంతేనా?",
        hint: { en: "Say yes, and ask the total price politely.", te: "అవునని చెప్పి, మొత్తం ఎంతో మర్యాదగా అడగండి." },
        replies: [
          { say: "Yes. How much is it?", good: true, skill: "amount" },
          { say: "Yes. How many is it?", good: false, skill: "amount" },
          {
            say: "Yes. Give the bill fast.",
            good: false,
            react: { en: "One minute, please. I am counting.", te: "ఒక్క నిమిషం అండీ. లెక్క వేస్తున్నాను." },
          },
        ],
      },
    ],
  },
};
