import type { Lesson } from "../../types";

/** Week 58, Day 1 (CURRICULUM §5): Can you tell me where … is? — polite questions at a hospital enquiry desk. */
export const day: Lesson = {
  id: "can-you-tell-me-where-enquiry",
  kind: "lesson",
  title: { en: "Can You Tell Me Where?", te: "ఎక్కడో చెప్తారా?" },
  subtitle: "Can you tell me where … is?",
  summary: {
    en: "Learn to ask politely at a hospital desk: Can you tell me where the lab is?",
    te: "ఆసుపత్రి డెస్క్ దగ్గర మర్యాదగా అడగడం నేర్చుకుందాం: Can you tell me where the lab is?",
  },
  seo: {
    title: "Can You Tell Me Where in English for Telugu Speakers",
    description:
      "Ask Can you tell me where the lab is? in the right order. Simple lessons for Telugu speakers on polite questions at a hospital desk.",
  },
  pattern: [
    { text: "Can you tell me", role: "action" },
    { text: "where", role: "what" },
    { text: "the lab", role: "who" },
    { text: "is?", role: "action" },
  ],
  core: [
    { en: "Can you tell me where the lab is?", te: "ల్యాబ్ ఎక్కడ ఉందో చెప్తారా?", extra: ["are"] },
    { en: "Could you tell me where I can get a wheelchair?", te: "వీల్‌చెయిర్ ఎక్కడ దొరుకుతుందో కొంచెం చెప్తారా?", extra: ["do"] },
    { en: "Can you tell me where the reception is?", te: "రిసెప్షన్ ఎక్కడ ఉందో చెప్తారా?", extra: ["in"] },
    { en: "Could you tell me where the washroom is, please?", te: "వాష్‌రూమ్ ఎక్కడ ఉందో కొంచెం చెప్తారా?", extra: ["are"] },
    { en: "The lab is on the first floor, near the lift.", te: "ల్యాబ్ మొదటి అంతస్తులో, లిఫ్ట్ దగ్గర ఉంది.", extra: ["in"] },
    { en: "Can you tell me where I should pay the bill?", te: "బిల్లు ఎక్కడ కట్టాలో చెప్తారా?" },
    { en: "Excuse me, could you tell me where the canteen is?", te: "ఎక్స్‌క్యూజ్ మీ, క్యాంటీన్ ఎక్కడ ఉందో చెప్తారా?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask one shopkeeper or guard today: Can you tell me where … is?",
    te: "ఈ రోజు ఒక షాపు వారిని గానీ సెక్యూరిటీ గార్డుని గానీ Can you tell me where … is? అని అడగండి.",
  },
  words: [
    { en: "Can you tell me", te: "… చెప్తారా?" },
    { en: "Could you tell me", te: "… కొంచెం చెప్తారా? (ఇంకా మర్యాదగా)" },
    { en: "lab", te: "ల్యాబ్, పరీక్షలు చేసే చోటు" },
    { en: "reception", te: "రిసెప్షన్, లోపలికి రాగానే ఉండే డెస్క్" },
    { en: "washroom", te: "వాష్‌రూమ్, బాత్‌రూమ్" },
  ],
  grammar: ["indirect-tag-questions", "can-could", "politeness-softening"],
  topics: ["health", "directions", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Can you tell me where …?", te: "… ఎక్కడ ఉందో చెప్తారా?" },
      body: {
        en: "Where is the lab? is a direct question. To ask more politely, start with Can you tell me. Then put the thing first and is last: where the lab is.",
        te: "Where is the lab? అనేది సూటి ప్రశ్న. మర్యాదగా అడగాలంటే Can you tell me తో మొదలుపెట్టి, ముందు వస్తువు, చివర is పెట్టండి: where the lab is.",
      },
      bridge: {
        te: ["ల్యాబ్", "ఎక్కడ ఉందో", "చెప్తారా?"],
        en: [
          { text: "Can you tell me", role: "action" },
          { text: "where", role: "what" },
          { text: "the lab", role: "who" },
          { text: "is?", role: "action" },
        ],
      },
      examples: [
        { en: "Can you tell me where the lab is?", te: "ల్యాబ్ ఎక్కడ ఉందో చెప్తారా?" },
        { en: "Could you tell me where I can get a wheelchair?", te: "వీల్‌చెయిర్ ఎక్కడ దొరుకుతుందో కొంచెం చెప్తారా?" },
        { en: "Can you tell me where the reception is?", te: "రిసెప్షన్ ఎక్కడ ఉందో చెప్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Direct or polite", te: "సూటిగా, మర్యాదగా" },
      items: [
        {
          form: "Where is …?",
          useFor: { en: "A quick question to a friend.", te: "స్నేహితుల్ని త్వరగా అడగడానికి." },
          example: { en: "Where is the canteen?", te: "క్యాంటీన్ ఎక్కడ?" },
        },
        {
          form: "Can you tell me where … is?",
          useFor: { en: "Polite: a stranger, or anyone at a desk.", te: "మర్యాదగా: తెలియనివారిని, డెస్క్ దగ్గర ఉన్నవారిని." },
          example: { en: "Can you tell me where I should pay the bill?", te: "బిల్లు ఎక్కడ కట్టాలో చెప్తారా?" },
        },
        {
          form: "Could you tell me where … is?",
          useFor: { en: "Even more polite: a hospital or an office.", te: "ఇంకా మర్యాదగా: ఆసుపత్రిలో, ఆఫీసులో." },
          example: { en: "Excuse me, could you tell me where the canteen is?", te: "ఎక్స్‌క్యూజ్ మీ, క్యాంటీన్ ఎక్కడ ఉందో చెప్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Can you tell me where is the lab?",
      right: "Can you tell me where the lab is?",
      why: {
        en: "After Can you tell me, use normal order: the thing first, then is. Telugu ఎక్కడ ఉందో also puts the verb last.",
        te: "Can you tell me తర్వాత మామూలు వరుస: ముందు వస్తువు, తర్వాత is. తెలుగు 'ఎక్కడ ఉందో' లో కూడా verb చివరే వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The lab is in the first floor.",
      right: "The lab is on the first floor.",
      why: {
        en: "Floors take on in English, never in; Telugu అంతస్తులో makes people say in.",
        te: "అంతస్తులకి ఇంగ్లీష్‌లో on వస్తుంది; తెలుగు 'అంతస్తులో' వల్ల in అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You are at the hospital desk. Ask politely where the X-ray room is.",
        te: "మీరు ఆసుపత్రి డెస్క్ దగ్గర ఉన్నారు. X-ray రూమ్ ఎక్కడ ఉందో మర్యాదగా అడగండి.",
      },
      options: ["Can you tell me where the X-ray room is?", "Can you tell me where is the X-ray room?", "Tell me where X-ray room is."],
      answer: 0,
      why: {
        en: "Inside Can you tell me, the question turns into normal order, so is goes last.",
        te: "Can you tell me లోపల ప్రశ్న మామూలు వరుసలోకి మారుతుంది, అందుకే is చివరికి వెళ్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Could you tell me where ___ get a wheelchair?",
      te: "వీల్‌చెయిర్ ఎక్కడ దొరుకుతుందో కొంచెం చెప్తారా?",
      options: ["I can", "can I", "do I"],
      answer: 0,
      why: {
        en: "After Could you tell me where, put I before can, as in a normal sentence.",
        te: "Could you tell me where తర్వాత మామూలు వాక్యం లాగే I ముందు, can తర్వాత వస్తాయి.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "City Care Hospital",
      lines: ["Ground Floor: Reception, Pharmacy, Billing", "First Floor: Lab, X-ray", "Second Floor: Wards", "Washrooms near the lift on every floor"],
      prompt: { en: "You read the board at the hospital gate. Where is the lab?", te: "ఆసుపత్రి గేటు దగ్గర బోర్డు చదివారు. ల్యాబ్ ఎక్కడ ఉంది?" },
      options: ["On the first floor", "On the ground floor", "On the second floor"],
      answer: 0,
      why: {
        en: "The board lists the lab with the X-ray room, one floor above the reception.",
        te: "బోర్డులో ల్యాబ్, X-ray రెండూ ఒకే లైన్‌లో, రిసెప్షన్ కంటే ఒక అంతస్తు పైన ఉన్నాయి.",
      },
      say: "The lab is on the first floor.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "Could you tell me where does the doctor sit?",
      wrongIndex: 5,
      fix: "Could you tell me where the doctor sits?",
      why: {
        en: "Inside Could you tell me, drop does and add s to the verb, as in a statement.",
        te: "Could you tell me లోపల does రాదు; మామూలు వాక్యం లాగే verb కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend needs a wheelchair at the hospital. Ask at the desk.",
        te: "ఆసుపత్రిలో మీ స్నేహితులకి వీల్‌చెయిర్ కావాలి. డెస్క్ దగ్గర అడగండి.",
      },
      expected: [
        "Could you tell me where I can get a wheelchair?",
        "Can you tell me where I can get a wheelchair?",
        "Where can I get a wheelchair, please?",
      ],
      options: [
        "Could you tell me where I can get a wheelchair?",
        "Could you tell me where can I get a wheelchair?",
        "Could you tell me where I can get wheelchair?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A visitor asks you where the washroom is. Tell her it is near the lift.",
        te: "ఒకావిడ వాష్‌రూమ్ ఎక్కడ అని మిమ్మల్ని అడిగారు. లిఫ్ట్ దగ్గర ఉందని చెప్పండి.",
      },
      expected: ["It's near the lift.", "The washroom is near the lift.", "It is near the lift."],
      options: ["It's near the lift.", "It's near lift.", "It near the lift."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the hospital enquiry desk", te: "ఆసుపత్రి ఎంక్వయిరీ డెస్క్ దగ్గర" },
    scene: {
      en: "You have come to the hospital for a blood test. Swapna is at the enquiry desk.",
      te: "మీరు blood test కోసం ఆసుపత్రికి వచ్చారు. ఎంక్వయిరీ డెస్క్ దగ్గర స్వప్న గారు ఉన్నారు.",
    },
    partner: { en: "Swapna (at the enquiry desk)", te: "స్వప్న (ఎంక్వయిరీ డెస్క్ దగ్గర)" },
    skills: [
      { id: "ask", label: { en: "Polite questions", te: "Can you tell me తో అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her, and ask politely where the lab is.", te: "నమస్కారం చెప్పి, ల్యాబ్ ఎక్కడ ఉందో మర్యాదగా అడగండి." },
        replies: [
          { say: "Good morning. Can you tell me where the lab is?", good: true, skill: "ask" },
          { say: "Good morning. Can you tell me where is the lab?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "It's on the first floor. Do you have the doctor's slip?",
        te: "మొదటి అంతస్తులో ఉంది. డాక్టర్ గారు రాసిన చీటీ మీ దగ్గర ఉందా?",
        hint: { en: "Say yes, and ask where you should pay first.", te: "ఉంది అని చెప్పి, ముందు డబ్బులు ఎక్కడ కట్టాలో అడగండి." },
        replies: [
          { say: "Yes. Could you tell me where I should pay?", good: true, skill: "ask" },
          { say: "Yes. Can you tell me where I should pay first?", good: true, skill: "ask" },
          {
            say: "Yes, yes. Just tell me where to pay. Quickly!",
            good: false,
            skill: "polite",
            react: { en: "One moment, please. I'm telling you.", te: "ఒక్క నిమిషం ఆగండి. మీకే చెప్తున్నాను కదా." },
          },
        ],
      },
      {
        partner: "Pay at the billing counter, next to the pharmacy.",
        te: "ఫార్మసీ పక్కన ఉన్న బిల్లింగ్ కౌంటర్‌లో కట్టండి.",
        hint: { en: "Thank her, and ask where the lift is.", te: "థాంక్స్ చెప్పి, లిఫ్ట్ ఎక్కడ ఉందో అడగండి." },
        replies: [
          { say: "Thank you. Can you tell me where the lift is?", good: true, skill: "ask" },
          { say: "Thank you. Can you tell me where the lift?", good: false, skill: "ask", fixIt: "be" },
        ],
      },
      {
        partner: "Go straight. The lift is on your left.",
        te: "నేరుగా వెళ్ళండి. లిఫ్ట్ మీ ఎడమ వైపు ఉంది.",
        hint: { en: "Thank her again, and wish her a good day.", te: "మళ్ళీ థాంక్స్ చెప్పి, ఆవిడకి మంచి రోజు కావాలని చెప్పండి." },
        replies: [
          { say: "Thank you so much. Have a nice day.", good: true, skill: "polite" },
          { say: "Thank you so much. Have nice day.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
