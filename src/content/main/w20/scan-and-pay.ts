import type { Lesson } from "../../types";

/** Week 20, Day 4 (CURRICULUM §4): paying by UPI step by step — scan the QR code, enter the amount, check the payment. */
export const day: Lesson = {
  id: "scan-and-pay",
  kind: "lesson",
  title: { en: "Scan and Pay", te: "స్కాన్ చేసి కట్టండి" },
  subtitle: "paying by UPI",
  summary: {
    en: "Learn to pay by UPI at a shop: Can I pay by UPI? Scan the QR code and enter the amount.",
    te: "షాపులో UPI తో కట్టడం నేర్చుకుందాం: Can I pay by UPI? Scan the QR code and enter the amount.",
  },
  seo: {
    title: "Paying by UPI in English for Telugu Speakers",
    description:
      "Ask Can I pay by UPI? and say Scan the QR code and enter the amount. Simple lessons for Telugu speakers on paying by phone at a shop.",
  },
  pattern: [
    { text: "Scan", role: "action" },
    { text: "the QR code", role: "what" },
    { text: "and enter", role: "action" },
    { text: "the amount", role: "what" },
  ],
  core: [
    { en: "Can I pay by UPI?", te: "UPI లో కట్టొచ్చా?", extra: ["in"] },
    { en: "Scan the QR code and enter the amount.", te: "QR code స్కాన్ చేసి, amount ఎంటర్ చేయండి.", extra: ["scanning"] },
    { en: "Where is your QR code?", te: "మీ QR code ఎక్కడ ఉంది?", extra: ["are"] },
    { en: "The payment was successful.", te: "payment successful అయింది.", extra: ["is"] },
    { en: "I sent 250 rupees just now.", te: "ఇప్పుడే 250 రూపాయలు పంపాను.", extra: ["send"] },
    { en: "Type your PIN yourself. Don't tell anyone.", te: "PIN మీరే టైప్ చేయండి. ఎవరికీ చెప్పకండి.", extra: ["myself"] },
    { en: "Did you get the money? Please check.", te: "డబ్బులు వచ్చాయా? ఒకసారి చూడండి.", extra: ["got"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At a shop today, ask the shopkeeper: Can I pay by UPI?",
    te: "ఈ రోజు ఏదైనా షాపులో Can I pay by UPI? అని అడగండి.",
  },
  words: [
    { en: "scan", te: "స్కాన్ చేయడం" },
    { en: "QR code", te: "QR code (స్కాన్ చేసే చతురస్రం బొమ్మ)" },
    { en: "UPI", te: "UPI (ఫోన్‌తో డబ్బు కట్టే పద్ధతి)" },
    { en: "amount", te: "మొత్తం, ఎంత డబ్బు" },
    { en: "successful", te: "విజయవంతంగా అయిపోయింది" },
  ],
  grammar: ["imperatives", "connectors", "past-simple"],
  topics: ["money", "shopping", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Paying by UPI", te: "UPI తో కట్టడం" },
      body: {
        en: "Ask first: Can I pay by UPI? Then scan the QR code and enter the amount. After that, type your PIN yourself; never tell it to anyone.",
        te: "ముందు Can I pay by UPI? అని అడగండి. తర్వాత QR code స్కాన్ చేసి, amount ఎంటర్ చేయండి. ఆ తర్వాత PIN మీరే టైప్ చేయండి; ఎవరికీ చెప్పకండి.",
      },
      bridge: {
        te: ["QR code", "స్కాన్ చేసి,", "amount", "ఎంటర్ చేయండి"],
        en: [
          { text: "Scan", role: "action" },
          { text: "the QR code", role: "what" },
          { text: "and enter", role: "action" },
          { text: "the amount", role: "what" },
        ],
      },
      examples: [
        { en: "Scan the QR code and enter the amount.", te: "QR code స్కాన్ చేసి, amount ఎంటర్ చేయండి." },
        { en: "Type your PIN yourself. Don't tell anyone.", te: "PIN మీరే టైప్ చేయండి. ఎవరికీ చెప్పకండి." },
        { en: "The payment was successful.", te: "payment successful అయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "At the counter", te: "కౌంటర్ దగ్గర" },
      items: [
        {
          form: "Can I pay by UPI?",
          useFor: { en: "Asking before you pay.", te: "కట్టే ముందు అడగడానికి." },
          example: { en: "Can I pay by UPI?", te: "UPI లో కట్టొచ్చా?" },
        },
        {
          form: "Where is your QR code?",
          useFor: { en: "Finding the code to scan.", te: "స్కాన్ చేయాల్సిన code ఎక్కడుందో అడగడానికి." },
          example: { en: "Where is your QR code?", te: "మీ QR code ఎక్కడ ఉంది?" },
        },
        {
          form: "I sent …",
          useFor: { en: "Telling the shopkeeper you paid.", te: "డబ్బు పంపానని షాపు వారికి చెప్పడానికి." },
          example: { en: "I sent 250 rupees just now.", te: "ఇప్పుడే 250 రూపాయలు పంపాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I sent the money today morning.",
      right: "I sent the money this morning.",
      why: {
        en: "Today morning is heard only in India. Everyone understands this morning.",
        te: "today morning అనేది మన దగ్గరే వినిపిస్తుంది. అందరికీ అర్థమయ్యేది this morning.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Scan QR code and enter amount.",
      right: "Scan the QR code and enter the amount.",
      why: {
        en: "It is the code and the amount right in front of you, so add the.",
        te: "మీ ముందు ఉన్న ఆ code, ఆ amount గురించే చెప్తున్నాం, అందుకే the చేర్చాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Ask the shopkeeper if UPI is okay.", te: "UPI తో కట్టొచ్చా అని షాపు వారిని అడగండి." },
      options: ["Can I pay by UPI?", "Can I pay in UPI?", "I can pay UPI?"],
      answer: 0,
      why: {
        en: "English says pay by UPI; Telugu UPI లో makes people say in.",
        te: "ఇంగ్లీష్‌లో pay by UPI అంటారు; 'UPI లో' అనే అలవాటు వల్ల in అనేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The payment ___ successful. Thank you!",
      te: "payment successful అయింది. థాంక్యూ!",
      options: ["was", "were", "did"],
      answer: 0,
      why: {
        en: "The payment is one thing, and it is already over, so was.",
        te: "payment ఒక్కటే, అది అయిపోయిన విషయం, అందుకే was.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "After you pay, the shopkeeper says: Please show me the screen. Why?",
        te: "మీరు కట్టాక షాపు వారు Please show me the screen అన్నారు. ఎందుకు?",
      },
      options: ["To see that you paid.", "To take your phone number.", "To learn your PIN."],
      answer: 0,
      why: {
        en: "The screen shows the payment and the amount. Never show anyone your PIN.",
        te: "screen మీద payment, amount కనిపిస్తాయి. PIN మాత్రం ఎవరికీ చూపించకండి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I send 250 rupees just now.",
      wrongIndex: 1,
      fix: "I sent 250 rupees just now.",
      why: {
        en: "Just now is in the past, so send changes to sent.",
        te: "just now అంటే అయిపోయిన పని, అందుకే send కాదు, sent.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the shop, ask if you can pay by UPI.",
        te: "షాపులో UPI తో కట్టొచ్చా అని అడగండి.",
      },
      expected: ["Can I pay by UPI?", "Can I pay by UPI, please?", "Do you take UPI?"],
      options: ["Can I pay by UPI?", "UPI I can pay?", "Can I pay in UPI?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You paid 250 rupees by UPI. Tell the shopkeeper.",
        te: "మీరు UPI లో 250 రూపాయలు కట్టారు. షాపు వారికి చెప్పండి.",
      },
      expected: ["I sent 250 rupees just now.", "I sent 250 rupees.", "I paid 250 rupees by UPI."],
      options: ["I sent 250 rupees just now.", "I send 250 rupees just now.", "250 rupees I sent just now."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Paying at the kirana shop", te: "కిరాణా షాపులో కట్టడం" },
    scene: {
      en: "You are buying things at Imran's kirana shop. You want to pay by UPI.",
      te: "మీరు ఇమ్రాన్ గారి కిరాణా షాపులో సరుకులు కొంటున్నారు. UPI తో కట్టాలనుకుంటున్నారు.",
    },
    partner: { en: "Imran (shopkeeper)", te: "ఇమ్రాన్ (షాపు యజమాని)" },
    voice: "b",
    skills: [
      { id: "pay", label: { en: "Paying by UPI", te: "UPI తో కట్టడం" } },
      { id: "polite", label: { en: "Being polite", te: "మర్యాదగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "That comes to 340 rupees.",
        te: "మొత్తం 340 రూపాయలు అయింది.",
        hint: { en: "Ask if you can pay by phone.", te: "ఫోన్‌తో కట్టొచ్చా అని అడగండి." },
        replies: [
          { say: "Can I pay by UPI?", good: true, skill: "pay" },
          { say: "Can I pay in UPI?", good: false, skill: "pay" },
        ],
      },
      {
        partner: "Yes, of course. The QR code is here.",
        te: "తప్పకుండా. QR code ఇక్కడ ఉంది.",
        hint: { en: "Say okay, you will scan it now.", te: "సరే, ఇప్పుడే స్కాన్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "Okay, I'll scan it now.", good: true, skill: "pay" },
          { say: "Okay, I am scan it now.", good: false, skill: "pay" },
        ],
      },
      {
        partner: "Please wait. Let me check my phone.",
        te: "ఒక్క నిమిషం. నా phone చూసుకుంటాను.",
        hint: { en: "Say sure, and wait politely.", te: "సరే అని, మర్యాదగా ఆగండి." },
        replies: [
          { say: "Sure, no problem. Please check.", good: true, skill: "polite" },
          {
            say: "Why check? I paid already!",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I check every payment. Yes, it came!", te: "Sorry అండీ, ప్రతి payment చూసుకుంటాను. ఆ, వచ్చింది!" },
          },
        ],
      },
      {
        partner: "Yes, 340 rupees came. Thank you!",
        te: "ఆ, 340 రూపాయలు వచ్చాయి. థాంక్యూ!",
        hint: { en: "Thank him, and ask politely for a bag.", te: "థాంక్స్ చెప్పి, ఒక సంచి మర్యాదగా అడగండి." },
        replies: [
          { say: "Thank you. Can I have a bag, please?", good: true, skill: "polite" },
          { say: "Thank you. I want bag.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
