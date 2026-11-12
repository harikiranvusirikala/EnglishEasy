import type { Lesson } from "../../types";

/**
 * Week 60, Day 4 (CURRICULUM §5): pension words — credited, arrears, life certificate; Has it been credited? as a fixed
 * phrase. The learner helps a retired neighbour; a pension is never assumed.
 */
export const day: Lesson = {
  id: "asking-about-a-pension",
  kind: "lesson",
  title: { en: "Asking About a Pension", te: "పెన్షన్ గురించి అడగడం" },
  subtitle: "Has it been credited?",
  summary: {
    en: "Learn to ask the bank about a late pension, for a neighbour or for yourself if you have one: Has it been credited? When will the arrears be paid?",
    te: "ఆలస్యమైన పెన్షన్ గురించి బ్యాంకులో అడగడం నేర్చుకుందాం, పక్కింటివారి కోసం, లేదా మీకు పెన్షన్ ఉంటే మీ కోసం: Has it been credited? When will the arrears be paid?",
  },
  seo: {
    title: "Asking About a Pension in English for Telugu Speakers",
    description:
      "Ask Has the pension been credited? and When will the arrears be paid? Simple lessons for Telugu speakers helping a neighbour at the bank.",
  },
  pattern: [
    { text: "This month's pension", role: "who" },
    { text: "hasn't been credited", role: "action" },
    { text: "yet", role: "when" },
  ],
  core: [
    { en: "This month's pension hasn't been credited yet.", te: "ఈ నెల పెన్షన్ ఇంకా అకౌంట్‌లో పడలేదు.", extra: ["didn't"] },
    { en: "Has the pension been credited this month?", te: "ఈ నెల పెన్షన్ అకౌంట్‌లో పడిందా?", extra: ["Did"] },
    { en: "When will the arrears be paid?", te: "బాకీ ఉన్న డబ్బు ఎప్పుడు ఇస్తారు?", extra: ["pay"] },
    { en: "He gave his life certificate in November.", te: "ఆయన నవంబర్‌లో life certificate ఇచ్చారు.", extra: ["gives"] },
    { en: "He hasn't got his pension for two months.", te: "రెండు నెలలుగా ఆయనకి పెన్షన్ రాలేదు.", extra: ["from"] },
    { en: "Can you please check his account?", te: "కొంచెం ఆయన అకౌంట్ చెక్ చేస్తారా?", extra: ["checking"] },
    { en: "The pension usually comes on the first of the month.", te: "పెన్షన్ మామూలుగా నెల మొదటి తేదీన వస్తుంది.", extra: ["come"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "If a retired neighbour or relative gets a pension, ask them kindly: Has it been credited this month?",
    te: "పక్కింట్లో గానీ బంధువుల్లో గానీ పెన్షన్ వచ్చేవారు ఉంటే, మర్యాదగా అడగండి: Has it been credited this month?",
  },
  words: [
    { en: "pension", te: "పెన్షన్, రిటైర్ అయ్యాక ప్రతి నెలా వచ్చే డబ్బు" },
    { en: "arrears", te: "బకాయి, వెనకటి నెలల బాకీ డబ్బు" },
    { en: "mini statement", te: "అకౌంట్‌లో చివరి లావాదేవీల చిన్న చీటీ" },
    { en: "Has it been credited?", te: "అకౌంట్‌లో పడిందా?" },
    { en: "the first of the month", te: "నెల మొదటి తేదీ" },
  ],
  grammar: ["present-perfect", "passive-voice", "prepositions"],
  topics: ["bank", "money", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Has it been credited?", te: "అకౌంట్‌లో పడిందా?" },
      body: {
        en: "Credited means the money has come into the account. Ask Has it been credited? If not, say It hasn't been credited yet. Arrears is money from earlier months, paid late.",
        te: "credited అంటే డబ్బు అకౌంట్‌లో పడిందని. Has it been credited? అని అడగండి; రాకపోతే It hasn't been credited yet. arrears అంటే వెనకటి నెలల బాకీ డబ్బు.",
      },
      bridge: {
        te: ["ఈ నెల పెన్షన్", "ఇంకా", "పడలేదు"],
        en: [
          { text: "This month's pension", role: "who" },
          { text: "hasn't been credited", role: "action" },
          { text: "yet", role: "when" },
        ],
      },
      examples: [
        { en: "This month's pension hasn't been credited yet.", te: "ఈ నెల పెన్షన్ ఇంకా అకౌంట్‌లో పడలేదు." },
        { en: "Has the pension been credited this month?", te: "ఈ నెల పెన్షన్ అకౌంట్‌లో పడిందా?" },
        { en: "When will the arrears be paid?", te: "బాకీ ఉన్న డబ్బు ఎప్పుడు ఇస్తారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Pension talk at the bank", te: "బ్యాంకులో పెన్షన్ మాటలు" },
      items: [
        {
          form: "Has it been credited?",
          useFor: { en: "Ask if the money has come.", te: "డబ్బు వచ్చిందా అని అడగడానికి." },
          example: { en: "Has the pension been credited this month?", te: "ఈ నెల పెన్షన్ అకౌంట్‌లో పడిందా?" },
        },
        {
          form: "It hasn't been credited yet.",
          useFor: { en: "Say the money has not come.", te: "డబ్బు ఇంకా రాలేదని చెప్పడానికి." },
          example: { en: "This month's pension hasn't been credited yet.", te: "ఈ నెల పెన్షన్ ఇంకా అకౌంట్‌లో పడలేదు." },
        },
        {
          form: "arrears",
          useFor: { en: "Money from earlier months, paid late. It always has s.", te: "వెనకటి నెలల డబ్బు, ఆలస్యంగా వచ్చేది. దానికి ఎప్పుడూ s ఉంటుంది." },
          example: { en: "The arrears will come with this month's pension.", te: "బాకీ డబ్బు ఈ నెల పెన్షన్‌తో కలిపి వస్తుంది." },
        },
        {
          form: "mini statement",
          useFor: { en: "A short slip with the last few entries.", te: "చివరి కొన్ని లావాదేవీలు ఉండే చిన్న చీటీ." },
          example: { en: "Can I get a mini statement, please?", te: "ఒక mini statement ఇస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "His pension is not coming from two months.",
      right: "He hasn't got his pension for two months.",
      why: {
        en: "For time that is still going on, use hasn't with for; Telugu రెండు నెలల నుంచి makes people say from.",
        te: "ఇంకా కొనసాగుతున్న సమయానికి hasn't, for వాడాలి; తెలుగు 'రెండు నెలల నుంచి' వల్ల from అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "When will the arrear be paid?",
      right: "When will the arrears be paid?",
      why: {
        en: "For money, arrears always has s, even for one month.",
        te: "డబ్బు విషయంలో arrears కి ఎప్పుడూ s ఉంటుంది, ఒక్క నెలదైనా.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "You are helping your neighbour Kamala. The clerk asks: She hasn't given her life certificate yet? It's true, she hasn't. What do you say?",
        te: "పక్కింటి కమల గారికి సాయం చేస్తున్నారు. 'ఆవిడ ఇంకా life certificate ఇవ్వలేదా?' అని క్లర్క్ అడుగుతున్నారు. నిజమే, ఇవ్వలేదు. ఏమంటారు?",
      },
      options: ["No, she hasn't. She'll give it today.", "Yes, she hasn't. She'll give it today.", "No, she didn't gave it. She'll give it today."],
      answer: 0,
      why: {
        en: "To agree with a not question, start with No; Telugu అవును, ఇవ్వలేదు makes people say Yes.",
        te: "not ఉన్న ప్రశ్నకి ఒప్పుకుంటే No తో మొదలుపెట్టాలి; తెలుగు 'అవును, ఇవ్వలేదు' వల్ల Yes అనేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Lotus Bank",
      lines: [
        "Dear Customer,",
        "Your account XX4821 is credited with Rs 31,200.",
        "Pension for November: Rs 27,200.",
        "Arrears for October: Rs 4,000.",
        "Never share your OTP or PIN with anyone.",
      ],
      prompt: { en: "Narayana gets this SMS. How much are the arrears?", te: "నారాయణ గారికి ఈ SMS వచ్చింది. arrears ఎంత?" },
      options: ["4,000 rupees", "27,200 rupees", "31,200 rupees"],
      answer: 0,
      why: {
        en: "The fourth line shows the late money from October, apart from the November pension.",
        te: "నాలుగో లైన్‌లో అక్టోబర్ బాకీ డబ్బు, నవంబర్ పెన్షన్ నుంచి విడిగా ఉంది.",
      },
      say: "Arrears for October: 4,000 rupees.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Narayana ___ his pension at this branch.",
      te: "నారాయణ గారు ఈ బ్రాంచ్‌లో పెన్షన్ తీసుకుంటారు.",
      options: ["gets", "get", "getting"],
      answer: 0,
      why: {
        en: "Narayana is one person, so get takes s; Telugu తీసుకుంటారు changes its end too.",
        te: "నారాయణ గారు ఒక్కరే, అందుకే get కి s; తెలుగులో కూడా 'తీసుకుంటారు' అని చివర మారుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "He hasn't got his pension since two months.",
      wrongIndex: 5,
      fix: "He hasn't got his pension for two months.",
      why: {
        en: "Since needs a starting point, like October; a length of time takes for.",
        te: "since కి October లాంటి మొదలు కావాలి; ఎంత కాలమో చెప్తే for వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the bank, ask if your neighbour's pension has come this month.",
        te: "బ్యాంకులో, పక్కింటివారి పెన్షన్ ఈ నెల వచ్చిందా అని అడగండి.",
      },
      expected: ["Has his pension been credited this month?", "Has his pension been credited?", "Has the pension been credited?", "Has it been credited?"],
      options: ["Has his pension been credited this month?", "His pension has credited this month?", "Is his pension been credited this month?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Tell the clerk your neighbour has not got his pension for two months.",
        te: "పక్కింటాయనకి రెండు నెలలుగా పెన్షన్ రాలేదని క్లర్క్‌కి చెప్పండి.",
      },
      expected: ["He hasn't got his pension for two months.", "His pension hasn't come for two months.", "He has not got his pension for two months."],
      options: ["He hasn't got his pension for two months.", "He is not getting his pension from two months.", "He hasn't got his pension since two months."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A late pension", te: "ఆలస్యమైన పెన్షన్" },
    scene: {
      en: "Your retired neighbour Narayana is worried: his pension has not come this month. You go to the bank with him. Geetha, the clerk, helps you.",
      te: "రిటైర్ అయిన మీ పక్కింటి నారాయణ గారు బాధపడుతున్నారు: ఈ నెల పెన్షన్ రాలేదు. మీరు ఆయనతో బ్యాంక్‌కి వెళ్ళారు. క్లర్క్ గీత గారు సాయం చేస్తున్నారు.",
    },
    partner: { en: "Geetha (the bank clerk)", te: "గీత (బ్యాంక్ క్లర్క్)" },
    skills: [
      { id: "pension", label: { en: "Asking about a pension", te: "పెన్షన్ గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "గుడ్ మార్నింగ్. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her, and say you are here with your neighbour about his pension.", te: "నమస్కారం చెప్పి, పక్కింటాయన పెన్షన్ గురించి ఆయనతో వచ్చానని చెప్పండి." },
        replies: [
          { say: "Good morning. I'm here with my neighbour about his pension.", good: true, skill: "pension" },
          {
            say: "Your bank is always late! Where is his pension?",
            good: false,
            skill: "polite",
            react: { en: "Please stay calm. Let me check it for you.", te: "కొంచెం శాంతంగా ఉండండి. నేను చెక్ చేస్తాను." },
          },
        ],
      },
      {
        partner: "Of course. What is the problem?",
        te: "తప్పకుండా. సమస్య ఏంటి?",
        hint: { en: "Say this month's pension has not come into his account.", te: "ఈ నెల పెన్షన్ ఆయన అకౌంట్‌లో పడలేదని చెప్పండి." },
        replies: [
          { say: "This month's pension hasn't been credited yet.", good: true, skill: "pension" },
          { say: "His pension hasn't been credited this month.", good: true, skill: "pension" },
          { say: "This month's pension didn't credited yet.", good: false, skill: "pension" },
        ],
      },
      {
        partner: "Let me check. Has he given his life certificate this year?",
        te: "చూస్తాను. ఈ సంవత్సరం ఆయన life certificate ఇచ్చారా?",
        hint: { en: "Say yes, and tell her the month: November.", te: "ఇచ్చారని చెప్పి, ఏ నెలలోనో చెప్పండి: నవంబర్." },
        replies: [
          { say: "Yes, he gave it in November.", good: true, skill: "pension" },
          { say: "Yes, he gave it on November.", good: false, skill: "pension", fixIt: "preposition" },
        ],
      },
      {
        partner: "There was a delay at the head office. It will come by Friday.",
        te: "హెడ్ ఆఫీస్‌లో ఆలస్యం అయింది. శుక్రవారం లోపు వస్తుంది.",
        hint: { en: "Thank her, and ask about the money from last month too.", te: "థాంక్స్ చెప్పి, పోయిన నెల బాకీ డబ్బు గురించి కూడా అడగండి." },
        replies: [
          { say: "Thank you. When will the arrears be paid?", good: true, skill: "pension" },
          { say: "Thank you. When the arrears will be paid?", good: false, skill: "pension", fixIt: "question" },
        ],
      },
      {
        partner: "The arrears will come with the pension. Please check his account on Friday.",
        te: "బాకీ డబ్బు పెన్షన్‌తో కలిపి వస్తుంది. శుక్రవారం ఆయన అకౌంట్ చెక్ చేసుకోండి.",
        hint: { en: "Thank her for both of you, and say goodbye.", te: "మీ ఇద్దరి తరఫున థాంక్స్ చెప్పి, వెళ్ళొస్తామని చెప్పండి." },
        replies: [
          { say: "Thank you so much. We'll check on Friday. Goodbye!", good: true, skill: "polite" },
          { say: "Thank you so much. We'll check in Friday. Goodbye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
