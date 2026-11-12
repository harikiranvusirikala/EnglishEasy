import type { Lesson } from "../../types";

/** Week 56, Day 2 (CURRICULUM §5): label words and was + the done form — This oil was packed in May. The MRP is printed on the back. */
export const day: Lesson = {
  id: "best-before-reading-labels",
  kind: "lesson",
  title: { en: "Best Before", te: "ఎప్పటిలోపు వాడాలి" },
  subtitle: "packed on, best before, MRP",
  summary: {
    en: "Learn to read the dates and the price on a packet: This oil was packed in May. The MRP is printed on the back.",
    te: "ప్యాకెట్ మీద తేదీలు, ధర చదవడం నేర్చుకుందాం: This oil was packed in May. The MRP is printed on the back.",
  },
  seo: {
    title: "Reading Food Labels in English for Telugu Speakers",
    description:
      "Read packed on, best before, MRP and net weight on a packet. Simple lessons for Telugu speakers: This oil was packed in May.",
  },
  pattern: [
    { text: "This oil", role: "who" },
    { text: "was packed", role: "action" },
    { text: "in May", role: "when" },
  ],
  core: [
    { en: "This oil was packed in May.", te: "ఈ నూనె మేలో ప్యాక్ చేశారు.", extra: ["on"] },
    { en: "The MRP is printed on the back.", te: "MRP వెనకవైపు ప్రింట్ చేసి ఉంది.", extra: ["in"] },
    { en: "Please check the date before you buy.", te: "కొనే ముందు తేదీ ఒకసారి చూడండి.", extra: ["after"] },
    { en: "The net weight is 500 grams.", te: "లోపల సరుకు బరువు 500 గ్రాములు.", extra: ["gram"] },
    { en: "This bread was made yesterday.", te: "ఈ బ్రెడ్ నిన్న తయారు చేశారు.", extra: ["is"] },
    { en: "Sorry, this packet is old. Can I have a fresh one?", te: "సారీ, ఈ ప్యాకెట్ పాతది. కొత్తది ఇస్తారా?", extra: ["an"] },
    { en: "Shops can't charge more than the MRP.", te: "షాపువాళ్ళు MRP కంటే ఎక్కువ తీసుకోకూడదు.", extra: ["then"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick up one packet at home. Find the packed on date, the best before and the MRP, and read them aloud.",
    te: "ఇంట్లో ఒక ప్యాకెట్ తీసుకోండి. packed on తేదీ, best before, MRP వెతికి గట్టిగా చదవండి.",
  },
  words: [
    { en: "MRP", te: "గరిష్ఠ అమ్మకం ధర, MRP" },
    { en: "best before", te: "ఈ తేదీ లోపు వాడితే బాగుంటుంది" },
    { en: "net weight", te: "లోపల సరుకు బరువు" },
    { en: "packed on", te: "ప్యాక్ చేసిన తేదీ" },
    { en: "ingredients", te: "లోపల వాడిన పదార్థాలు" },
  ],
  grammar: ["passive-voice", "was-were", "prepositions"],
  topics: ["shopping", "food", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "It was packed in May", te: "మేలో ప్యాక్ చేశారు" },
      body: {
        en: "For something done before, use was or were with the done form: This oil was packed in May. Was is for one thing, were for many.",
        te: "ఇంతకుముందు జరిగిన పనికి was లేదా were, తర్వాత పూర్తయిన రూపం: This oil was packed in May. ఒక్కదానికి was, చాలావాటికి were.",
      },
      bridge: {
        te: ["ఈ నూనె", "మేలో", "ప్యాక్ చేశారు"],
        en: [
          { text: "This oil", role: "who" },
          { text: "was packed", role: "action" },
          { text: "in May", role: "when" },
        ],
      },
      examples: [
        { en: "This oil was packed in May.", te: "ఈ నూనె మేలో ప్యాక్ చేశారు." },
        { en: "The MRP is printed on the back.", te: "MRP వెనకవైపు ప్రింట్ చేసి ఉంది." },
        { en: "This bread was made yesterday.", te: "ఈ బ్రెడ్ నిన్న తయారు చేశారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words on a label", te: "లేబుల్ మీద పదాలు" },
      items: [
        {
          form: "Packed on",
          useFor: { en: "The day it was put in the packet.", te: "ప్యాకెట్‌లో పెట్టిన రోజు." },
          example: { en: "These biscuits were packed last week.", te: "ఈ బిస్కెట్లు పోయిన వారం ప్యాక్ చేశారు." },
        },
        {
          form: "Best before",
          useFor: { en: "Use it before this date for the best taste.", te: "మంచి రుచి కోసం ఈ తేదీ లోపు వాడాలి." },
          example: { en: "It's best before the end of June.", te: "జూన్ చివరి లోపు వాడితే బాగుంటుంది." },
        },
        {
          form: "MRP",
          useFor: { en: "The highest price. A shop can't ask for more.", te: "అత్యధిక ధర. షాపువాళ్ళు దీని కంటే ఎక్కువ అడగకూడదు." },
          example: { en: "Shops can't charge more than the MRP.", te: "షాపువాళ్ళు MRP కంటే ఎక్కువ తీసుకోకూడదు." },
        },
        {
          form: "Net weight",
          useFor: { en: "How much food is inside, without the packet.", te: "ప్యాకెట్ కాకుండా, లోపల ఎంత సరుకు ఉందో." },
          example: { en: "The net weight is 500 grams.", te: "లోపల సరుకు బరువు 500 గ్రాములు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "It was packed on May.",
      right: "It was packed in May.",
      why: {
        en: "Months take in, but dates take on, like on 5 May.",
        te: "నెలలకి in, తేదీలకి on వస్తుంది: on 5 May లాగా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Two packet of milk, please.",
      right: "Two packets of milk, please.",
      why: {
        en: "After two, packet takes s; milk itself never takes s.",
        te: "రెండు తర్వాత packet కి s కావాలి; milk కి మాత్రం ఎప్పుడూ s రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your friend asks when these biscuits were packed. The label says last week. Answer.",
        te: "ఈ బిస్కెట్లు ఎప్పుడు ప్యాక్ చేశారని స్నేహితులు అడుగుతున్నారు. లేబుల్ మీద పోయిన వారం అని ఉంది. జవాబు చెప్పండి.",
      },
      options: ["They were packed last week.", "They packed last week.", "They was packed last week."],
      answer: 0,
      why: {
        en: "Many biscuits take were, and the done form packed comes after it.",
        te: "చాలా బిస్కెట్లు కాబట్టి were, దాని తర్వాత పూర్తయిన రూపం packed.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Please give me two kilos of ___.",
      te: "రెండు కిలోల పంచదార ఇవ్వండి.",
      options: ["sugar", "sugars", "a sugar"],
      answer: 0,
      why: {
        en: "Sugar, rice and oil take no s and no a, even for two kilos.",
        te: "sugar, rice, oil లాంటి వాటికి, రెండు కిలోలైనా, s గానీ a గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "label",
      heading: "Sunrise Ragi Flour",
      lines: ["Ingredients: whole ragi", "Net weight: 500 g", "Packed on: 12 May", "Best before: 4 months from packing", "MRP Rs. 65, incl. of all taxes", "Made in India"],
      prompt: { en: "Until when is this flour best to use?", te: "ఈ పిండి ఎప్పటిలోపు వాడితే బాగుంటుంది?" },
      options: ["Until September", "Until May", "Until April"],
      answer: 0,
      why: {
        en: "It was packed in May, and it stays good for four months after that.",
        te: "మేలో ప్యాక్ చేశారు; దాని తర్వాత నాలుగు నెలల వరకు బాగుంటుంది.",
      },
      say: "It's best before September.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The MRP is printed on back.",
      wrongIndex: 5,
      fix: "The MRP is printed on the back.",
      why: {
        en: "Say on the back or on the front; Telugu వెనకవైపు has no word like the.",
        te: "on the back, on the front అనాలి; తెలుగు 'వెనకవైపు' లో the లాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your neighbour asks when her cough syrup was made. The label says MFG March. Answer.",
        te: "తన దగ్గు సిరప్ ఎప్పుడు తయారైందని పక్కింటావిడ అడుగుతున్నారు. లేబుల్ మీద MFG March అని ఉంది. జవాబు చెప్పండి.",
      },
      expected: ["It was made in March.", "It was made in March, so it's new.", "It was made in March this year."],
      options: ["It was made in March.", "It was made on March.", "It made in March."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The biscuit packet in your hand looks old. Ask the shopkeeper politely for a fresh one.",
        te: "మీ చేతిలో ఉన్న బిస్కెట్ ప్యాకెట్ పాతదిలా ఉంది. కొత్తది ఇవ్వమని షాపు వాళ్ళని మర్యాదగా అడగండి.",
      },
      expected: [
        "Sorry, this packet is old. Can I have a fresh one?",
        "Can I have a fresh one, please?",
        "This one is old. Could you give me a fresh one?",
      ],
      options: ["Can I have a fresh one, please?", "I can have a fresh one, please?", "Give me fresh one, quickly."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "An old packet", te: "పాత ప్యాకెట్" },
    scene: {
      en: "You are buying biscuits and milk at Salma's kirana shop. You check the dates on the packets.",
      te: "సల్మా గారి కిరాణా షాపులో బిస్కెట్లు, పాలు కొంటున్నారు. ప్యాకెట్ల మీద తేదీలు చూస్తున్నారు.",
    },
    partner: { en: "Salma (shopkeeper)", te: "సల్మా (షాపు యజమాని)" },
    skills: [
      { id: "check", label: { en: "Checking a label", te: "లేబుల్ చూడటం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! What can I give you?",
        te: "నమస్తే! ఏం ఇవ్వమంటారు?",
        hint: { en: "Ask for two packets of biscuits and one packet of milk.", te: "రెండు బిస్కెట్ ప్యాకెట్లు, ఒక పాల ప్యాకెట్ అడగండి." },
        replies: [
          { say: "Two packets of biscuits and one packet of milk, please.", good: true, skill: "polite" },
          { say: "Two packet of biscuits and one packet of milk, please.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
      {
        partner: "Here you are. That's 90 rupees.",
        te: "ఇదిగోండి. 90 రూపాయలు.",
        hint: {
          en: "You see the biscuits are from January. Tell her kindly, and ask for a fresh packet.",
          te: "బిస్కెట్లు జనవరివని మీకు కనిపించింది. ఆవిడకి మర్యాదగా చెప్పి, కొత్త ప్యాకెట్ అడగండి.",
        },
        replies: [
          { say: "Sorry, these were packed in January. Can I have a fresh packet?", good: true, skill: "check" },
          { say: "Sorry, these packed in January. Can I have a fresh packet?", good: false, skill: "check", fixIt: "be" },
          {
            say: "These are old! Are you cheating me?",
            good: false,
            skill: "polite",
            react: { en: "No, no! I didn't see the date. I'll change it.", te: "లేదండీ! నేను తేదీ చూడలేదు. మార్చి ఇస్తాను." },
          },
        ],
      },
      {
        partner: "Sorry! This one was packed last week. Here you are.",
        te: "సారీ! ఇది పోయిన వారం ప్యాక్ చేశారు. ఇదిగోండి.",
        hint: { en: "Thank her, and ask where the price is on the milk packet.", te: "థాంక్స్ చెప్పి, పాల ప్యాకెట్ మీద ధర ఎక్కడ ఉందో అడగండి." },
        replies: [
          { say: "Thank you. Where is the MRP on this milk packet?", good: true, skill: "check" },
          { say: "Thank you. Where the MRP is on this milk packet?", good: false, skill: "check", fixIt: "question" },
        ],
      },
      {
        partner: "It's printed on the top, next to the date.",
        te: "పైన, తేదీ పక్కన ప్రింట్ చేసి ఉంది.",
        hint: { en: "Say you can see it now, and say goodbye.", te: "ఇప్పుడు కనిపించిందని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Yes, I see it now. Thank you, bye!", good: true, skill: "polite" },
          { say: "Yes, I am seeing it now. Thank you, bye!", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
