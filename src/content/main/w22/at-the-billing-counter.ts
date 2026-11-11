import type { Lesson } from "../../types";

/** Week 22, Day 5 (CURRICULUM §4): at the billing counter — carry bags, offers, paying by card or UPI, the receipt. */
export const day: Lesson = {
  id: "at-the-billing-counter",
  kind: "lesson",
  title: { en: "At the Billing Counter", te: "బిల్లింగ్ కౌంటర్ దగ్గర" },
  subtitle: "carry bags, offers, receipts",
  summary: {
    en: "Learn to pay at the supermarket: Do you have a carry bag? Is there any offer on this?",
    te: "సూపర్ మార్కెట్‌లో బిల్లు కట్టడం నేర్చుకుందాం: Do you have a carry bag? Is there any offer on this?",
  },
  seo: {
    title: "At the Billing Counter in English for Telugu Speakers",
    description:
      "Ask Is there any offer on this? and Can I pay by card? Simple lessons for Telugu speakers on paying at a supermarket billing counter.",
  },
  pattern: [
    { text: "Is", role: "action" },
    { text: "there", role: "who" },
    { text: "any offer", role: "what" },
    { text: "on this?", role: "what" },
  ],
  core: [
    { en: "Do you have a carry bag?", te: "క్యారీ బ్యాగ్ ఉందా?", extra: ["cover"] },
    { en: "Is there any offer on this?", te: "దీని మీద ఏమైనా ఆఫర్ ఉందా?", extra: ["are"] },
    { en: "Can I pay by card?", te: "కార్డుతో కట్టొచ్చా?", extra: ["in"] },
    { en: "Can I have the receipt, please?", te: "రసీదు ఇస్తారా?", extra: ["give"] },
    { en: "Buy one, get one free on this soap.", te: "ఈ సబ్బు ఒకటి కొంటే, ఇంకొకటి ఫ్రీ.", extra: ["buys"] },
    { en: "Your total is 840 rupees.", te: "మీ మొత్తం బిల్లు 840 రూపాయలు.", extra: ["rupee"] },
    { en: "Two carry bags, please. How much are they?", te: "రెండు క్యారీ బ్యాగులు ఇవ్వండి. అవి ఎంత?", extra: ["bag"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you pay at a shop, ask: Is there any offer on this?",
    te: "ఈసారి షాపులో బిల్లు కట్టేటప్పుడు అడగండి: Is there any offer on this?",
  },
  words: [
    { en: "carry bag", te: "క్యారీ బ్యాగ్, సంచి" },
    { en: "offer", te: "ఆఫర్" },
    { en: "receipt", te: "రసీదు" },
    { en: "billing counter", te: "బిల్లింగ్ కౌంటర్" },
    { en: "total", te: "మొత్తం" },
  ],
  grammar: ["there-is-are", "can-could", "plurals-countable"],
  topics: ["shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Paying at the counter", te: "కౌంటర్ దగ్గర బిల్లు కట్టడం" },
      body: {
        en: "At the billing counter, ask about offers: Is there any offer on this? Ask for a carry bag, and say how you will pay: by card, by UPI or in cash.",
        te: "బిల్లింగ్ కౌంటర్ దగ్గర ఆఫర్ గురించి అడగండి: Is there any offer on this? క్యారీ బ్యాగ్ అడగండి, ఎలా కడతారో చెప్పండి: by card, by UPI, లేదా in cash.",
      },
      bridge: {
        te: ["దీని మీద", "ఏమైనా ఆఫర్", "ఉందా?"],
        en: [
          { text: "Is", role: "action" },
          { text: "there", role: "who" },
          { text: "any offer", role: "what" },
          { text: "on this?", role: "what" },
        ],
      },
      examples: [
        { en: "Is there any offer on this?", te: "దీని మీద ఏమైనా ఆఫర్ ఉందా?" },
        { en: "Do you have a carry bag?", te: "క్యారీ బ్యాగ్ ఉందా?" },
        { en: "Can I pay by card?", te: "కార్డుతో కట్టొచ్చా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How will you pay?", te: "ఎలా కడతారు?" },
      items: [
        {
          form: "by card",
          useFor: { en: "With a debit or credit card.", te: "డెబిట్ లేదా క్రెడిట్ కార్డుతో." },
          example: { en: "Can I pay by card?", te: "కార్డుతో కట్టొచ్చా?" },
        },
        {
          form: "by UPI",
          useFor: { en: "Scanning the QR code with your phone.", te: "ఫోన్‌తో QR code స్కాన్ చేసి." },
          example: { en: "Can I pay by UPI?", te: "UPI తో కట్టొచ్చా?" },
        },
        {
          form: "in cash",
          useFor: { en: "With notes and coins.", te: "నోట్లు, చిల్లరతో." },
          example: { en: "I'll pay in cash.", te: "క్యాష్ ఇస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Can I pay in card?",
      right: "Can I pay by card?",
      why: {
        en: "Cash takes in, but a card or UPI takes by.",
        te: "cash కి in వస్తుంది; కానీ card, UPI కి by వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "Any offer is there?",
      right: "Is there any offer?",
      why: {
        en: "Telugu puts ఉందా? at the end, but English starts with Is there.",
        te: "తెలుగులో 'ఉందా?' చివర వస్తుంది; ఇంగ్లీష్‌లో ప్రశ్న Is there తో మొదలవుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask if there is an offer on this rice.", te: "ఈ బియ్యం మీద ఏమైనా ఆఫర్ ఉందా అని అడగండి." },
      options: ["Is there any offer on this rice?", "Any offer is there on this rice?", "Are there any offer on this rice?"],
      answer: 0,
      why: {
        en: "The question starts with Is there, and one offer takes is.",
        te: "ప్రశ్న Is there తో మొదలవుతుంది; offer ఒకటే కాబట్టి is.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Today's Offers",
      lines: ["Soap: Buy 1 Get 1 Free", "Toothpaste: ₹20 off", "Sona rice, 5 kg: ₹50 off", "Offers till Sunday"],
      prompt: { en: "You buy one soap. How many soaps do you get?", te: "మీరు ఒక సబ్బు కొన్నారు. మీకు ఎన్ని సబ్బులు వస్తాయి?" },
      options: ["Two soaps", "One soap", "Three soaps"],
      answer: 0,
      why: {
        en: "Buy 1 Get 1 Free means one more comes at no cost.",
        te: "Buy 1 Get 1 Free అంటే ఒకటి కొంటే ఇంకొకటి ఫ్రీగా వస్తుంది.",
      },
      say: "You get two soaps.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "The cashier asks: Do you need a carry bag? You need two.",
        te: "క్యాషియర్ Do you need a carry bag? అని అడిగారు. మీకు రెండు కావాలి.",
      },
      options: ["Yes, two carry bags, please.", "Yes, two carry bag, please.", "Yes, two cover, please."],
      answer: 0,
      why: {
        en: "More than one bag, so bag takes s.",
        te: "ఒకటి కంటే ఎక్కువ సంచులు, అందుకే bags.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Can I pay by UPI in this counter?",
      wrongIndex: 5,
      fix: "Can I pay by UPI at this counter?",
      why: {
        en: "A counter is one point in the shop, so it takes at.",
        te: "counter షాపులో ఒక చోటు, అందుకే at వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "You need a bag for your things. Ask the cashier.",
        te: "మీ సరుకులకి ఒక సంచి కావాలి. క్యాషియర్‌ని అడగండి.",
      },
      expected: ["Do you have a carry bag?", "Can I have a carry bag, please?", "Can I have a bag, please?"],
      options: ["Do you have a carry bag?", "Give one cover.", "Do you have carry bag?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Ask if you can pay by UPI.",
        te: "UPI తో కట్టొచ్చా అని అడగండి.",
      },
      expected: ["Can I pay by UPI?", "Can I pay with UPI?"],
      options: ["Can I pay by UPI?", "Can I pay in UPI?", "I can pay by UPI?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Paying at the supermarket", te: "సూపర్ మార్కెట్‌లో బిల్లు" },
    scene: {
      en: "Your shopping is done. Imran is the cashier at the billing counter.",
      te: "మీ షాపింగ్ అయిపోయింది. బిల్లింగ్ కౌంటర్ దగ్గర క్యాషియర్ ఇమ్రాన్ ఉన్నారు.",
    },
    partner: { en: "Imran (cashier)", te: "ఇమ్రాన్ (క్యాషియర్)" },
    voice: "b",
    skills: [
      { id: "pay", label: { en: "Paying", te: "బిల్లు కట్టడం" } },
      { id: "offer", label: { en: "Offers", te: "ఆఫర్లు" } },
    ],
    turns: [
      {
        partner: "Good evening! Do you need a carry bag?",
        te: "నమస్కారం! క్యారీ బ్యాగ్ కావాలా?",
        hint: { en: "Say yes, you need two.", te: "అవునని, రెండు కావాలని చెప్పండి." },
        replies: [
          { say: "Yes, two carry bags, please.", good: true, skill: "pay" },
          { say: "Yes, two carry bag, please.", good: false, skill: "pay", fixIt: "plural" },
          { say: "Yes, I am wanting two bags.", good: false, skill: "pay", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Okay. Five rupees each.",
        te: "సరే. ఒక్కొక్కటి ఐదు రూపాయలు.",
        hint: { en: "Ask if there is an offer on the rice.", te: "బియ్యం మీద ఏమైనా ఆఫర్ ఉందా అని అడగండి." },
        replies: [
          { say: "Is there any offer on this rice?", good: true, skill: "offer" },
          { say: "Any offer is there on this rice?", good: false, skill: "offer", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, fifty rupees off. Your total is 840 rupees.",
        te: "ఉంది, యాభై రూపాయలు తగ్గింపు. మీ మొత్తం బిల్లు 840 రూపాయలు.",
        hint: { en: "Ask if you can pay by card.", te: "కార్డుతో కట్టొచ్చా అని అడగండి." },
        replies: [
          { say: "Can I pay by card?", good: true, skill: "pay" },
          { say: "Can I pay in card?", good: false, skill: "pay", fixIt: "preposition" },
          {
            say: "Only fifty off? Your offers are useless.",
            good: false,
            skill: "offer",
            react: { en: "Sorry! The offers change every week.", te: "Sorry అండీ! ఆఫర్లు ప్రతి వారం మారుతాయి." },
          },
        ],
      },
      {
        partner: "Yes, of course. Here is your receipt.",
        te: "తప్పకుండా. ఇదిగోండి మీ రసీదు.",
        hint: { en: "Thank him, and say goodbye.", te: "థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. See you next time.", good: true },
          { say: "Thanks you. See you next time.", good: false },
        ],
      },
    ],
  },
};
