import type { Lesson } from "../../types";

/** Week 50, Day 5 (CURRICULUM §5): staying firm and polite when the answer is no — I understand, but …; Could I speak to the manager? */
export const day: Lesson = {
  id: "firm-and-polite-ask-the-manager",
  kind: "lesson",
  title: { en: "Could I Speak to the Manager?", te: "మేనేజర్‌తో మాట్లాడతాను" },
  subtitle: "I understand, but …",
  summary: {
    en: "Learn to stay firm and polite when a shop says no: I understand, but the product was faulty from day one. Could I speak to the manager, please?",
    te: "షాపువాళ్ళు కాదన్నప్పుడు గట్టిగా, మర్యాదగా మాట్లాడటం నేర్చుకుందాం: I understand, but the product was faulty from day one. Could I speak to the manager, please?",
  },
  seo: {
    title: "Asking for the Manager Politely in English for Telugu Speakers",
    description:
      "Say I understand, but it was faulty from day one, and Could I speak to the manager? Simple lessons for Telugu speakers on firm, polite talk.",
  },
  pattern: [
    { text: "I understand, but", role: "who" },
    { text: "the product", role: "what" },
    { text: "was faulty", role: "action" },
    { text: "from day one", role: "when" },
  ],
  core: [
    { en: "I'm sorry, but that's not fair.", te: "sorry అండీ, కానీ అది న్యాయం కాదు.", extra: ["is"] },
    { en: "I understand, but the product was faulty from day one.", te: "అర్థమైంది, కానీ ఆ వస్తువు మొదటి రోజు నుంచే సరిగ్గా లేదు.", extra: ["understanding"] },
    { en: "Could I speak to the manager, please?", te: "మేనేజర్ గారితో ఒకసారి మాట్లాడొచ్చా?", extra: ["speaking"] },
    { en: "Please check it in front of me.", te: "నా ముందే ఒకసారి చెక్ చేయండి.", extra: ["at"] },
    { en: "I'd like a refund, not a credit note.", te: "నాకు రీఫండ్ కావాలి, credit note కాదు.", extra: ["an"] },
    { en: "I bought it only three days ago. It's still under warranty.", te: "మూడు రోజుల క్రితమే కొన్నాను. ఇంకా warranty లోనే ఉంది.", extra: ["before"] },
    { en: "I'll wait. Please ask the manager to come.", te: "నేను ఆగుతాను. మేనేజర్ గారిని ఒకసారి రమ్మని చెప్పండి.", extra: ["coming"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say I understand, but … and Could I speak to the manager, please? aloud three times, calm and slow, with your voice falling at the end.",
    te: "I understand, but … , Could I speak to the manager, please? అని మూడుసార్లు గట్టిగా చెప్పండి: ప్రశాంతంగా, నెమ్మదిగా, చివర గొంతు కిందికి దిగేలా.",
  },
  words: [
    { en: "faulty", te: "లోపం ఉన్న, సరిగ్గా పని చేయని" },
    { en: "from day one", te: "మొదటి రోజు నుంచే" },
    { en: "fair", te: "న్యాయమైన, సరైన" },
    { en: "credit note", te: "credit note, అదే షాపులో తర్వాత వాడుకోవడానికి ఇచ్చే చీటీ" },
    { en: "refuse", te: "కాదనడం, ఒప్పుకోకపోవడం" },
  ],
  grammar: ["politeness-softening", "can-could", "connectors"],
  topics: ["shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I understand, but …", te: "అర్థమైంది, కానీ …" },
      body: {
        en: "When the shop says no, first say I understand. Then add but and your reason. Keep your voice calm, and let it fall at the end.",
        te: "షాపువాళ్ళు కాదంటే ముందు I understand (అర్థమైంది) అనండి, తర్వాత but తో మీ కారణం చెప్పండి. గొంతు ప్రశాంతంగా, చివర కిందికి దిగేలా.",
      },
      bridge: {
        te: ["అర్థమైంది, కానీ", "ఆ వస్తువు", "సరిగ్గా లేదు", "మొదటి రోజు నుంచే"],
        en: [
          { text: "I understand, but", role: "who" },
          { text: "the product", role: "what" },
          { text: "was faulty", role: "action" },
          { text: "from day one", role: "when" },
        ],
      },
      examples: [
        { en: "I understand, but the product was faulty from day one.", te: "అర్థమైంది, కానీ ఆ వస్తువు మొదటి రోజు నుంచే సరిగ్గా లేదు." },
        { en: "I bought it only three days ago. It's still under warranty.", te: "మూడు రోజుల క్రితమే కొన్నాను. ఇంకా warranty లోనే ఉంది." },
        { en: "I'll wait. Please ask the manager to come.", te: "నేను ఆగుతాను. మేనేజర్ గారిని ఒకసారి రమ్మని చెప్పండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Firm, not rude", te: "గట్టిగా, కానీ మర్యాదగా" },
      items: [
        {
          form: "I understand, but …",
          useFor: { en: "Show you heard them, then give your reason.", te: "వాళ్ళు చెప్పింది విన్నామని చూపించి, తర్వాత మీ కారణం చెప్పడానికి." },
          example: { en: "I understand, but the product was faulty from day one.", te: "అర్థమైంది, కానీ ఆ వస్తువు మొదటి రోజు నుంచే సరిగ్గా లేదు." },
        },
        {
          form: "Could I speak to …?",
          useFor: { en: "Ask for someone senior, politely.", te: "పై అధికారిని మర్యాదగా అడగడానికి." },
          example: { en: "Could I speak to the manager, please?", te: "మేనేజర్ గారితో ఒకసారి మాట్లాడొచ్చా?" },
        },
        {
          form: "I'd like …, not …",
          useFor: { en: "Say clearly what you want.", te: "మీకు ఏం కావాలో స్పష్టంగా చెప్పడానికి." },
          example: { en: "I'd like a refund, not a credit note.", te: "నాకు రీఫండ్ కావాలి, credit note కాదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The salesman say I can't return it.",
      right: "The salesman says I can't return it.",
      why: {
        en: "For one person, the verb takes s: he says, she says.",
        te: "ఒక్కరి గురించి చెప్తే verb కి s వస్తుంది: he says, she says.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Call your manager now!",
      right: "Could I speak to the manager, please?",
      why: {
        en: "An order sounds angry, but a calm question usually gets better help.",
        te: "ఆర్డర్ వేస్తే కోపంగా వినిపిస్తుంది; ప్రశాంతంగా అడిగితే ఎక్కువ సహాయం దొరుకుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "The manager asks: You didn't drop it? You didn't. What do you say?",
        te: "మేనేజర్ అడిగారు: You didn't drop it? మీరు కింద పడేయలేదు. ఏమంటారు?",
      },
      options: ["No, I didn't. It was faulty from day one.", "Yes, I didn't. It was faulty from day one.", "No, I don't. It was faulty from day one."],
      answer: 0,
      why: {
        en: "English says No with didn't; Telugu says అవును, పడేయలేదు, but English does not.",
        te: "ఇంగ్లీష్‌లో didn't తో No వస్తుంది; తెలుగులో 'అవును, పడేయలేదు' అంటాం, ఇంగ్లీష్‌లో అలా కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I understand, ___ the product was faulty from day one.",
      te: "అర్థమైంది, కానీ ఆ వస్తువు మొదటి రోజు నుంచే సరిగ్గా లేదు.",
      options: ["but", "so", "because"],
      answer: 0,
      why: {
        en: "But brings a different view after I understand, like Telugu కానీ.",
        te: "I understand తర్వాత వేరే మాట చెప్పడానికి but, తెలుగు 'కానీ' లాగా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The shop says: Sorry, no returns. Which reply is firm and polite?",
        te: "షాపువాళ్ళు అన్నారు: Sorry, no returns. ఏ జవాబు గట్టిగా, మర్యాదగా ఉంది?",
      },
      options: ["I understand, but it was faulty from day one.", "This is cheating. I'll call the police!", "I understand, so it was faulty from day one."],
      answer: 0,
      why: {
        en: "It is calm, shows you listened, and still gives your reason with but.",
        te: "ప్రశాంతంగా ఉంది, విన్నారని చూపిస్తుంది, but తో మీ కారణం కూడా చెప్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "I'd like an refund, not a credit note.",
      wrongIndex: 2,
      fix: "I'd like a refund, not a credit note.",
      why: {
        en: "Refund starts with an r sound, so use a; an is only for vowel sounds.",
        te: "refund 'ర' శబ్దంతో మొదలవుతుంది, అందుకే a; an అచ్చు శబ్దాల ముందు మాత్రమే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The shop wants to repair your new fan. You want your money back. Say it firmly and politely.",
        te: "మీ కొత్త ఫ్యాన్‌ని repair చేస్తామంటున్నారు. మీకు డబ్బులు తిరిగి కావాలి. గట్టిగా, మర్యాదగా చెప్పండి.",
      },
      expected: ["I understand, but I'd like a refund, please.", "I'd like a refund, not a repair.", "I'm afraid I can't accept a repair. I'd like a refund."],
      options: ["I understand, but I'd like a refund, please.", "Repair? No way. Give my money now!", "I understand, so I'd like a refund, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The salesperson still refuses to take it back. Ask politely to speak to the manager.",
        te: "సేల్స్‌మన్ ఇంకా కాదనే అంటున్నారు. మేనేజర్‌తో మాట్లాడొచ్చా అని మర్యాదగా అడగండి.",
      },
      expected: ["Could I speak to the manager, please?", "Can I speak to the manager, please?", "May I speak to the manager, please?"],
      options: ["Could I speak to the manager, please?", "I could speak to the manager, please?", "Call the manager. I'm waiting."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "No returns?", te: "వాపస్ తీసుకోరా?" },
    scene: {
      en: "Your new mixer has smelled of burning since the first day. You take it back to the shop.",
      te: "మీ కొత్త mixer నుంచి మొదటి రోజు నుంచే కాలిన వాసన వస్తోంది. దాన్ని షాపుకి తీసుకెళ్ళారు.",
    },
    partner: { en: "Joseph (the salesperson)", te: "జోసెఫ్ (సేల్స్‌మన్)" },
    voice: "b",
    skills: [
      { id: "firm", label: { en: "Staying firm", te: "గట్టిగా నిలబడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! How can I help you?",
        te: "నమస్కారం! చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say you want to return the mixer, and what has been wrong since the first day.", te: "mixer వాపస్ ఇవ్వాలని, మొదటి రోజు నుంచే ఏం సమస్యో చెప్పండి." },
        replies: [
          { say: "I'd like to return this mixer. It smells of burning.", good: true, skill: "firm" },
          {
            say: "Your mixer is useless. Take it back now.",
            good: false,
            skill: "polite",
            react: { en: "Please stay calm. Let me see the problem first.", te: "కాస్త ప్రశాంతంగా ఉండండి. ముందు సమస్య ఏంటో చూడనివ్వండి." },
          },
        ],
      },
      {
        partner: "Sorry, we don't take back used mixers. We can only repair it.",
        te: "sorry అండీ, వాడిన mixer లు వాపస్ తీసుకోం. repair మాత్రమే చేయగలం.",
        hint: { en: "Show you heard him, then say you want your money back, not a repair.", te: "ఆయన చెప్పింది విన్నానని చూపించి, repair కాదు, డబ్బులు కావాలని చెప్పండి." },
        replies: [
          { say: "I understand, but I'd like a refund, not a repair.", good: true, skill: "firm" },
          { say: "I understand, but I'd like an refund, not a repair.", good: false, skill: "firm", fixIt: "article" },
        ],
      },
      {
        partner: "I'm sorry, that's the shop's rule.",
        te: "sorry అండీ, అది షాపు రూల్.",
        hint: { en: "Ask politely to speak to the manager.", te: "మేనేజర్‌తో మాట్లాడొచ్చా అని మర్యాదగా అడగండి." },
        replies: [
          { say: "Could I speak to the manager, please?", good: true, skill: "firm" },
          { say: "Then may I speak to the manager, please?", good: true, skill: "firm" },
          { say: "Then I could speak to the manager, please?", good: false, skill: "firm", fixIt: "question" },
        ],
      },
      {
        partner: "Okay. The manager will come in five minutes.",
        te: "సరే. ఐదు నిమిషాల్లో మేనేజర్ గారు వస్తారు.",
        hint: { en: "Say you will wait, and thank him.", te: "ఆగుతానని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No problem, I'll wait. Thank you.", good: true, skill: "polite" },
          {
            say: "Five minutes? Tell him to hurry up.",
            good: false,
            skill: "polite",
            react: { en: "He is with a customer. He'll come soon.", te: "ఆయన ఒక customer తో ఉన్నారు. త్వరలోనే వస్తారు." },
          },
        ],
      },
    ],
  },
};
