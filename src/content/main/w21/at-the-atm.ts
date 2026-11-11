import type { Lesson } from "../../types";

/** Week 21, Day 2 (CURRICULUM §4): at the ATM — the screen's steps (Insert your card, Enter your PIN), and a stuck card. */
export const day: Lesson = {
  id: "at-the-atm",
  kind: "lesson",
  title: { en: "At the ATM", te: "ATM దగ్గర" },
  subtitle: "ATM steps; a stuck card",
  summary: {
    en: "Learn to follow the ATM's steps, Insert your card and Enter your PIN, and to say My card is stuck in the machine.",
    te: "ATM దశలు అర్థం చేసుకోవడం (Insert your card, Enter your PIN), My card is stuck in the machine అని చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "At the ATM in English for Telugu Speakers",
    description:
      "Understand Insert your card and Enter your PIN, and say My card is stuck in the machine. Simple ATM lessons for Telugu speakers.",
  },
  pattern: [
    { text: "My card", role: "who" },
    { text: "is stuck", role: "action" },
    { text: "in the machine", role: "what" },
  ],
  core: [
    { en: "My card is stuck in the machine.", te: "నా కార్డ్ మెషీన్‌లో ఇరుక్కుపోయింది.", extra: ["on"] },
    { en: "Insert your card and enter your PIN.", te: "మీ కార్డ్ పెట్టి, PIN ఎంటర్ చేయండి.", extra: ["entering"] },
    { en: "The ATM is not working.", te: "ATM పని చేయట్లేదు.", extra: ["no"] },
    { en: "How do I check my balance?", te: "నా బ్యాలెన్స్ ఎలా చూడాలి?", extra: ["does"] },
    { en: "Please take your card and cash.", te: "మీ కార్డ్, డబ్బు తీసుకోండి.", extra: ["took"] },
    { en: "Don't take help from strangers at the ATM.", te: "ATM దగ్గర తెలియని వాళ్ళ సహాయం తీసుకోకండి.", extra: ["Not"] },
    { en: "The machine took my card.", te: "మెషీన్ నా కార్డ్‌ని లోపలికి లాగేసుకుంది.", extra: ["take"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you pass an ATM, read the words on its screen or door.",
    te: "ఈసారి ATM దగ్గరికి వెళ్ళినప్పుడు, స్క్రీన్ మీద లేదా డోర్ మీద ఉన్న మాటలు చదవండి.",
  },
  words: [
    { en: "PIN", te: "PIN, రహస్య నంబర్" },
    { en: "insert", te: "లోపల పెట్టడం" },
    { en: "stuck", te: "ఇరుక్కుపోయిన" },
    { en: "guard", te: "గార్డ్, కాపలా ఉండేవారు" },
    { en: "balance", te: "బ్యాలెన్స్, అకౌంట్‌లో మిగిలిన డబ్బు" },
  ],
  grammar: ["imperatives", "am-is-are", "should-must-have-to"],
  topics: ["bank", "money", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "ATM steps", te: "ATM దశలు" },
      body: {
        en: "The ATM screen gives short orders: Insert your card. Enter your PIN. Take your cash. If something goes wrong, tell the guard: My card is stuck in the machine.",
        te: "ATM స్క్రీన్ చిన్న ఆదేశాలు ఇస్తుంది: Insert your card, Enter your PIN, Take your cash. సమస్య వస్తే గార్డ్‌కి చెప్పండి: My card is stuck in the machine.",
      },
      bridge: {
        te: ["నా కార్డ్", "మెషీన్‌లో", "ఇరుక్కుపోయింది"],
        en: [
          { text: "My card", role: "who" },
          { text: "is stuck", role: "action" },
          { text: "in the machine", role: "what" },
        ],
      },
      examples: [
        { en: "Insert your card and enter your PIN.", te: "మీ కార్డ్ పెట్టి, PIN ఎంటర్ చేయండి." },
        { en: "Please take your card and cash.", te: "మీ కార్డ్, డబ్బు తీసుకోండి." },
        { en: "My card is stuck in the machine.", te: "నా కార్డ్ మెషీన్‌లో ఇరుక్కుపోయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the screen says", te: "స్క్రీన్ మీద వచ్చే మాటలు" },
      items: [
        {
          form: "Insert your card",
          useFor: { en: "Put your card in the machine.", te: "కార్డ్‌ని మెషీన్‌లో పెట్టండి." },
          example: { en: "Insert your card and enter your PIN.", te: "మీ కార్డ్ పెట్టి, PIN ఎంటర్ చేయండి." },
        },
        {
          form: "Enter your PIN",
          useFor: { en: "Type your secret number. Cover the keys.", te: "మీ రహస్య నంబర్ నొక్కండి. కీస్‌ని చేత్తో మూయండి." },
          example: { en: "Cover the keypad when you enter your PIN.", te: "PIN ఎంటర్ చేసేటప్పుడు కీప్యాడ్‌ని చేత్తో మూయండి." },
        },
        {
          form: "Balance",
          useFor: { en: "See how much money is in your account.", te: "అకౌంట్‌లో ఎంత డబ్బు ఉందో చూడటం." },
          example: { en: "How do I check my balance?", te: "నా బ్యాలెన్స్ ఎలా చూడాలి?" },
        },
        {
          form: "Take your cash",
          useFor: { en: "Collect the money and your card.", te: "డబ్బు, కార్డ్ రెండూ తీసుకోండి." },
          example: { en: "Please take your card and cash.", te: "మీ కార్డ్, డబ్బు తీసుకోండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The ATM not working.",
      right: "The ATM is not working.",
      why: {
        en: "Telugu పని చేయట్లేదు has no is, but English needs is before not working.",
        te: "'పని చేయట్లేదు' లో is లేదు, కానీ ఇంగ్లీష్‌లో is not working అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Cash not came.",
      right: "The cash did not come out.",
      why: {
        en: "For a past no, use did not with the plain verb: come, not came.",
        te: "past లో 'రాలేదు' అంటే did not come; came వాడకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The ATM screen says: Enter your PIN. What do you do?", te: "ATM స్క్రీన్ మీద Enter your PIN అని ఉంది. మీరు ఏం చేయాలి?" },
      options: ["Type your secret number.", "Put your card in.", "Take your money."],
      answer: 0,
      why: {
        en: "Enter your PIN means typing your secret number on the keys.",
        te: "Enter your PIN అంటే మీ రహస్య నంబర్ కీస్ మీద నొక్కడం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "My card is stuck ___ the machine.",
      te: "నా కార్డ్ మెషీన్‌లో ఇరుక్కుపోయింది.",
      options: ["in", "on", "at"],
      answer: 0,
      why: {
        en: "Something caught inside a thing takes in, like లో in మెషీన్‌లో.",
        te: "లోపల ఇరుక్కుంటే in వాడాలి, 'మెషీన్‌లో' లోని 'లో' లాగా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: { en: "The ATM gives no cash. Tell the guard.", te: "ATM డబ్బు ఇవ్వట్లేదు. గార్డ్‌కి చెప్పండి." },
      options: ["The ATM is not working.", "ATM is not working.", "The ATM is not work."],
      answer: 0,
      why: {
        en: "You both know which ATM, so put the before it, and say working.",
        te: "ఏ ATM అనేది ఇద్దరికీ తెలుసు, అందుకే ముందు the; తర్వాత working అనాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The machine take my card yesterday.",
      wrongIndex: 2,
      fix: "The machine took my card yesterday.",
      why: {
        en: "Yesterday is in the past, so take becomes took.",
        te: "yesterday అంటే past, అందుకే take కాదు, took.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your card is stuck in the ATM. Tell the guard politely.",
        te: "మీ కార్డ్ ATM లో ఇరుక్కుపోయింది. గార్డ్‌కి మర్యాదగా చెప్పండి.",
      },
      expected: ["Excuse me, my card is stuck in the machine.", "My card is stuck in the machine.", "Excuse me, my card is stuck in the ATM."],
      options: ["Excuse me, my card is stuck in the machine.", "Excuse me, my card is stuck on the machine.", "Excuse me, machine my card stuck."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A stranger at the ATM offers to help you. Say no politely.",
        te: "ATM దగ్గర తెలియని ఒకరు సహాయం చేస్తామంటున్నారు. మర్యాదగా వద్దని చెప్పండి.",
      },
      expected: ["No, thank you. I can do it myself.", "No, thank you."],
      options: ["No, thank you. I can do it myself.", "No, thank you. I can do myself.", "Okay, here is my card. Please help."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A card stuck in the ATM", te: "ATM లో ఇరుక్కున్న కార్డ్" },
    scene: {
      en: "You are at an ATM. Your card does not come out. Narayana, the guard, comes to help.",
      te: "మీరు ATM దగ్గర ఉన్నారు. మీ కార్డ్ బయటికి రావట్లేదు. గార్డ్ నారాయణ సహాయానికి వచ్చారు.",
    },
    partner: { en: "Narayana (security guard)", te: "నారాయణ (సెక్యూరిటీ గార్డ్)" },
    voice: "b",
    skills: [
      { id: "problem", label: { en: "Saying what went wrong", te: "ఏం జరిగిందో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Is there a problem?",
        te: "ఏమైనా సమస్యా అండీ?",
        hint: { en: "Say politely that your card is stuck.", te: "మీ కార్డ్ ఇరుక్కుపోయిందని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "Excuse me, my card is stuck in the machine.", good: true, skill: "problem" },
          { say: "Excuse me, my card is stuck in machine.", good: false, skill: "problem", fixIt: "article" },
          {
            say: "Hey! Your machine ate my card!",
            good: false,
            skill: "polite",
            react: { en: "Please don't shout. Let me see.", te: "అరవకండి అండీ. నన్ను చూడనివ్వండి." },
          },
        ],
      },
      {
        partner: "Did you take your cash?",
        te: "మీ డబ్బు తీసుకున్నారా?",
        hint: { en: "Say no, and explain that no cash came.", te: "లేదని చెప్పి, డబ్బు రాలేదని చెప్పండి." },
        replies: [
          { say: "No, the cash did not come out.", good: true, skill: "problem" },
          { say: "No, cash not came.", good: false, skill: "problem" },
        ],
      },
      {
        partner: "Don't worry. You have to call the bank.",
        te: "భయపడకండి. మీరు బ్యాంక్‌కి ఫోన్ చేయాలి.",
        hint: { en: "Ask him for the bank's phone number.", te: "బ్యాంక్ ఫోన్ నంబర్ ఇవ్వమని ఆయన్ని అడగండి." },
        replies: [
          { say: "Can you give me the bank's number, please?", good: true, skill: "polite" },
          { say: "Bank number tell me.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "It is here, on the machine. Call them now.",
        te: "ఇదిగో, మెషీన్ మీదే ఉంది. ఇప్పుడే ఫోన్ చేయండి.",
        hint: { en: "Thank him for his help.", te: "సహాయం చేసినందుకు ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you for your help.", good: true, skill: "polite" },
          { say: "Thank you for your helping.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
