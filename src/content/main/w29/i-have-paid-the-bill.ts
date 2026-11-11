import type { Lesson } from "../../types";

/** Week 29, Day 2 (CURRICULUM §4): have + paid, sent, called — I have paid the bill, but the line is cut. */
export const day: Lesson = {
  id: "i-have-paid-the-bill",
  kind: "lesson",
  title: { en: "I Have Paid the Bill", te: "బిల్ కట్టేశాను" },
  subtitle: "have paid / have sent / have called",
  summary: {
    en: "Learn to say what you have done: I have paid the bill. I have sent the screenshot.",
    te: "మీరు చేసేసిన పని చెప్పడం నేర్చుకుందాం: I have paid the bill. I have sent the screenshot.",
  },
  seo: {
    title: "I Have Paid the Bill in English for Telugu Speakers",
    description:
      "Say I have paid the bill, but the line is cut. Simple lessons for Telugu speakers on talking to customer care about a bill.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have paid", role: "action" },
    { text: "the bill", role: "what" },
  ],
  core: [
    { en: "I have paid the bill.", te: "నేను బిల్ కట్టేశాను.", extra: ["has"] },
    { en: "I have paid the bill, but the line is cut.", te: "బిల్ కట్టేశాను, కానీ లైన్ కట్ అయింది.", extra: ["pay"] },
    { en: "I have called three times.", te: "నేను మూడుసార్లు ఫోన్ చేశాను.", extra: ["time"] },
    { en: "Have you received my payment?", te: "నా payment మీకు అందిందా?", extra: ["Has"] },
    { en: "I have sent the screenshot on WhatsApp.", te: "WhatsApp లో screenshot పంపించాను.", extra: ["send"] },
    { en: "Please reconnect the line today.", te: "ఈ రోజు లైన్ మళ్ళీ కనెక్ట్ చేయండి.", extra: ["again"] },
    { en: "I paid it before the due date.", te: "due date కంటే ముందే కట్టాను.", extra: ["has"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one bill you have paid this month. Say: I have paid the bill.",
    te: "ఈ నెల మీరు కట్టిన ఒక బిల్ గుర్తు చేసుకుని చెప్పండి: I have paid the bill.",
  },
  words: [
    { en: "screenshot", te: "స్క్రీన్‌షాట్ (ఫోన్ తెర ఫొటో)" },
    { en: "received", te: "అందింది, అందుకున్నారు" },
    { en: "transaction ID", te: "లావాదేవీ నంబర్, transaction ID" },
    { en: "reconnect", te: "మళ్ళీ కనెక్ట్ చేయడం" },
    { en: "due date", te: "కట్టాల్సిన చివరి తేదీ" },
  ],
  grammar: ["present-perfect", "have-has-possessives"],
  topics: ["money", "phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Done, and it matters now", te: "అయిపోయింది, అది ఇప్పుడు ముఖ్యం" },
      body: {
        en: "To say a job is done and it matters now, say have with paid, sent or called. It is like Telugu కట్టేశాను: done, finished. I, you, we and they take have; he, she and it take has.",
        te: "పని అయిపోయింది, దాని ఫలితం ఇప్పుడు ముఖ్యం అంటే have తో paid, sent, called వాడండి; తెలుగులో 'కట్టేశాను' లాగా. I, you, we, they కి have; he, she, it కి has.",
      },
      bridge: {
        te: ["నేను", "బిల్", "కట్టేశాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have paid", role: "action" },
          { text: "the bill", role: "what" },
        ],
      },
      examples: [
        { en: "I have paid the bill.", te: "నేను బిల్ కట్టేశాను." },
        { en: "I have called three times.", te: "నేను మూడుసార్లు ఫోన్ చేశాను." },
        { en: "I have sent the screenshot on WhatsApp.", te: "WhatsApp లో screenshot పంపించాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Have or has?", te: "have ఆ, has ఆ?" },
      items: [
        {
          form: "I / you / we / they + have",
          useFor: { en: "Most people: have paid.", te: "I, you, we, they అయితే: have paid." },
          example: { en: "I have paid the bill.", te: "నేను బిల్ కట్టేశాను." },
        },
        {
          form: "he / she / it + has",
          useFor: { en: "One person or one thing: has paid.", te: "ఒక్కరు లేదా ఒక్క వస్తువు: has paid." },
          example: { en: "My brother has paid it online.", te: "మా అన్నయ్య online లో కట్టేశారు." },
        },
        {
          form: "Have you …?",
          useFor: { en: "Ask if it is done.", te: "అయిపోయిందా అని అడగడానికి." },
          example: { en: "Have you received my payment?", te: "నా payment మీకు అందిందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I have paid bill.",
      right: "I have paid the bill.",
      why: {
        en: "Telugu has no word for the, but English needs the for a bill you both know.",
        te: "తెలుగులో the లాంటి మాట లేదు; ఇద్దరికీ తెలిసిన బిల్ అయితే ఇంగ్లీష్‌లో the కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I have pay the bill.",
      right: "I have paid the bill.",
      why: {
        en: "After have, use the done form paid, not pay; it shows the job is finished.",
        te: "have తర్వాత pay కాదు, paid; పని అయిపోయిందని అదే చెప్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: { en: "Your sister paid the bill this morning. Tell the agent.", te: "మీ అక్కయ్య ఈ ఉదయం బిల్ కట్టారు. ఏజెంట్‌కి చెప్పండి." },
      options: ["My sister has paid the bill.", "My sister have paid the bill.", "My sister has pay the bill."],
      answer: 0,
      why: {
        en: "Sister is one person, like she, so has; have is for I, you, we and they.",
        te: "అక్కయ్య ఒక్కరే (she లాగా), అందుకే has; have అనేది I, you, we, they కి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I have ___ the screenshot on WhatsApp.",
      te: "WhatsApp లో screenshot పంపించాను.",
      options: ["sent", "send", "sending"],
      answer: 0,
      why: {
        en: "After have, use the done form: send changes to sent.",
        te: "have తర్వాత పూర్తయిన రూపం కావాలి: send కాస్తా sent అవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The agent asks: Have you paid the bill? Say yes, short.", te: "ఏజెంట్ Have you paid the bill? అని అడిగారు. చిన్నగా అవునని చెప్పండి." },
      options: ["Yes, I have.", "Yes, I am.", "Yes, I has."],
      answer: 0,
      why: {
        en: "A have question gets a have answer, and I always takes have, never has.",
        te: "have తో అడిగితే have తోనే జవాబు; I కి ఎప్పుడూ have, has కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I have called to customer care.",
      wrongIndex: 3,
      fix: "I have called customer care.",
      why: {
        en: "Call needs no to before a person or an office; Telugu కి makes us add to.",
        te: "call తర్వాత మనిషికి గానీ ఆఫీస్‌కి గానీ to అక్కర్లేదు; తెలుగు 'కి' వల్ల to వచ్చేస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell customer care you have paid the bill.",
        te: "బిల్ కట్టేశారని కస్టమర్ కేర్‌కి చెప్పండి.",
      },
      expected: ["I have paid the bill.", "I have paid it."],
      options: ["I have paid the bill.", "I have pay the bill.", "I am paid the bill."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the agent if they have got your payment.",
        te: "మీ payment అందిందా అని ఏజెంట్‌ని అడగండి.",
      },
      expected: ["Have you received my payment?", "Have you got my payment?"],
      options: ["Have you received my payment?", "You received my payment?", "Have you receive my payment?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Paid, but the line is cut", te: "బిల్ కట్టినా లైన్ కట్" },
    scene: {
      en: "You paid your internet bill on Monday, but the line is cut. You call Fast Net. Venkat answers.",
      te: "సోమవారం ఇంటర్నెట్ బిల్ కట్టారు, అయినా లైన్ కట్ అయింది. Fast Net కి ఫోన్ చేశారు. వెంకట్ మాట్లాడుతున్నారు.",
    },
    partner: { en: "Venkat (customer care)", te: "వెంకట్ (కస్టమర్ కేర్)" },
    voice: "b",
    skills: [{ id: "done", label: { en: "Saying what you have done", te: "చేసిన పని చెప్పడం" } }],
    turns: [
      {
        partner: "Good afternoon, Fast Net. This is Venkat.",
        te: "నమస్కారం, Fast Net నుండి వెంకట్ మాట్లాడుతున్నాను.",
        hint: { en: "Greet him. Say you have paid, but the line is cut.", te: "నమస్కారం చెప్పి, బిల్ కట్టారని, కానీ లైన్ కట్ అయిందని చెప్పండి." },
        replies: [
          { say: "Hello. I have paid, but the line is cut.", good: true, skill: "done" },
          { say: "Hello. I have pay, but the line is cut.", good: false, skill: "done" },
          {
            say: "Why is my line cut? Very bad service!",
            good: false,
            skill: "done",
            react: { en: "I'm sorry. Let me check it for you.", te: "Sorry అండీ. నేను చెక్ చేస్తాను." },
          },
        ],
      },
      {
        partner: "When did you pay?",
        te: "ఎప్పుడు కట్టారు?",
        hint: { en: "Say the day you paid, and how: through UPI.", te: "ఏ రోజు కట్టారో, ఎలా కట్టారో చెప్పండి: UPI ద్వారా." },
        replies: [
          { say: "I paid on Monday, through UPI.", good: true, skill: "done" },
          { say: "I have paid on Monday, through UPI.", good: false, skill: "done" },
        ],
      },
      {
        partner: "I can't see it. Do you have the transaction ID?",
        te: "నాకు కనిపించట్లేదు. మీ దగ్గర transaction ID ఉందా?",
        hint: { en: "Say yes, and that you have sent a screenshot on WhatsApp.", te: "ఉందని, WhatsApp లో screenshot పంపించారని చెప్పండి." },
        replies: [
          { say: "Yes. I have sent a screenshot on WhatsApp.", good: true, skill: "done" },
          { say: "Yes. I have sended a screenshot on WhatsApp.", good: false, skill: "done" },
        ],
      },
      {
        partner: "Got it. Your line will work in one hour.",
        te: "అందింది. ఒక గంటలో మీ లైన్ పని చేస్తుంది.",
        hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you so much. Goodbye.", good: true },
          { say: "Thanks you. Goodbye.", good: false },
        ],
      },
    ],
  },
};
