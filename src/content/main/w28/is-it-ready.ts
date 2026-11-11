import type { Lesson } from "../../types";

/** Week 28, Day 5 (CURRICULUM §4): following up with the past simple — I applied on the tenth. Is my certificate ready? */
export const day: Lesson = {
  id: "is-it-ready",
  kind: "lesson",
  title: { en: "Is It Ready?", te: "వచ్చిందా?" },
  subtitle: "I applied on …",
  summary: {
    en: "Learn to follow up an application, in person or by phone: I applied on the tenth. Is my certificate ready?",
    te: "అప్లికేషన్ గురించి ఫాలో అప్ చేయడం నేర్చుకుందాం, నేరుగా గానీ ఫోన్‌లో గానీ: I applied on the tenth. Is my certificate ready?",
  },
  seo: {
    title: "Following Up an Application in English for Telugu Speakers",
    description:
      "Say I applied on the tenth and Is my certificate ready? at the office or on the phone. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "applied", role: "action" },
    { text: "on the tenth", role: "when" },
  ],
  core: [
    { en: "I applied on the tenth.", te: "నేను పదో తారీఖున అప్లై చేశాను.", extra: ["apply"] },
    { en: "Is my certificate ready?", te: "నా సర్టిఫికెట్ రెడీ అయిందా?", extra: ["Does"] },
    { en: "Is it still pending?", te: "ఇంకా పెండింగ్‌లోనే ఉందా?", extra: ["Are"] },
    { en: "When will it be ready?", te: "ఎప్పుడు రెడీ అవుతుంది?", extra: ["is"] },
    { en: "Your application is still pending.", te: "మీ అప్లికేషన్ ఇంకా పెండింగ్‌లో ఉంది.", extra: ["are"] },
    { en: "I called last week, but nobody answered.", te: "పోయిన వారం ఫోన్ చేశాను, కానీ ఎవరూ ఎత్తలేదు.", extra: ["call"] },
    { en: "Please check the status for me.", te: "నా అప్లికేషన్ స్టేటస్ కొంచెం చూస్తారా?", extra: ["checking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell a neighbour one thing you did this month, with the date: I went to the bank on the fifth.",
    te: "ఈ నెల మీరు చేసిన ఒక పని, తేదీతో సహా పక్కింటివాళ్ళకి చెప్పండి: I went to the bank on the fifth.",
  },
  words: [
    { en: "status", te: "స్టేటస్, పని ఎంత వరకు వచ్చిందో" },
    { en: "pending", te: "పెండింగ్, ఇంకా పూర్తి కాలేదు" },
    { en: "acknowledgement", te: "రసీదు, అప్లై చేసినట్టు రుజువు" },
    { en: "application number", te: "అప్లికేషన్ నంబర్" },
    { en: "approved", te: "ఆమోదించారు, ఓకే అయింది" },
  ],
  grammar: ["past-simple", "yes-no-questions", "will"],
  topics: ["offices", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Following up: the past, then a question", te: "ఫాలో అప్: ముందు past, తర్వాత ప్రశ్న" },
      body: {
        en: "First say what you did, in the past: I applied on the tenth. Then ask about now: Is my certificate ready? Keep your acknowledgement slip and its number with you.",
        te: "ముందు మీరు చేసింది past లో చెప్పండి: I applied on the tenth. తర్వాత ఇప్పటి సంగతి అడగండి: Is my certificate ready? రసీదు, దాని నంబర్ దగ్గర ఉంచుకోండి.",
      },
      bridge: {
        te: ["నేను", "పదో తారీఖున", "అప్లై చేశాను"],
        en: [
          { text: "I", role: "who" },
          { text: "applied", role: "action" },
          { text: "on the tenth", role: "when" },
        ],
      },
      examples: [
        { en: "I applied on the tenth.", te: "నేను పదో తారీఖున అప్లై చేశాను." },
        { en: "Is my certificate ready?", te: "నా సర్టిఫికెట్ రెడీ అయిందా?" },
        { en: "I called last week, but nobody answered.", te: "పోయిన వారం ఫోన్ చేశాను, కానీ ఎవరూ ఎత్తలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the office may say", te: "ఆఫీస్ వాళ్ళు ఏమనొచ్చు" },
      items: [
        {
          form: "pending",
          useFor: { en: "Not done yet. You have to wait.", te: "ఇంకా పూర్తి కాలేదు. ఆగాలి." },
          example: { en: "Your application is still pending.", te: "మీ అప్లికేషన్ ఇంకా పెండింగ్‌లో ఉంది." },
        },
        {
          form: "approved",
          useFor: { en: "Done. You can collect it.", te: "పూర్తయింది. తీసుకోవచ్చు." },
          example: { en: "Your certificate is approved.", te: "మీ సర్టిఫికెట్ ఓకే అయింది." },
        },
        {
          form: "status",
          useFor: { en: "Where your application is now.", te: "మీ అప్లికేషన్ ఇప్పుడు ఎంత వరకు వచ్చిందో." },
          example: { en: "Please check the status for me.", te: "నా అప్లికేషన్ స్టేటస్ కొంచెం చూస్తారా?" },
        },
        {
          form: "When will …?",
          useFor: { en: "Asking for a day.", te: "ఏ రోజో అడగడం." },
          example: { en: "When will it be ready?", te: "ఎప్పుడు రెడీ అవుతుంది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "My certificate ready?",
      right: "Is my certificate ready?",
      why: {
        en: "Telugu అయిందా? needs no extra word, but an English question starts with is.",
        te: "తెలుగు 'అయిందా?' కి అదనపు పదం అక్కర్లేదు; ఇంగ్లీష్ ప్రశ్న is తో మొదలవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Myself Kiran. I applied on the tenth.",
      right: "This is Kiran. I applied on the tenth.",
      why: {
        en: "On the phone, say This is with your name; Myself alone is not English.",
        te: "ఫోన్‌లో This is + మీ పేరు అనండి; Myself Kiran అనేది సరైన ఇంగ్లీష్ కాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "You applied on the tenth. Tell the clerk.", te: "మీరు పదో తారీఖున అప్లై చేశారు. క్లర్క్‌కి చెప్పండి." },
      options: ["I applied on the tenth.", "I apply on the tenth.", "I applied at the tenth."],
      answer: 0,
      why: {
        en: "It happened before, so use applied, and a date takes on.",
        te: "ఇది జరిగిపోయింది, అందుకే applied; తేదీ ముందు on వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ last week, but nobody answered.",
      te: "పోయిన వారం ఫోన్ చేశాను, కానీ ఎవరూ ఎత్తలేదు.",
      options: ["called", "call", "am calling"],
      answer: 0,
      why: {
        en: "Last week is in the past, so call becomes called.",
        te: "last week అంటే past; అందుకే call → called.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Mee Seva",
      lines: ["Dear Citizen, your application 2811045 is approved.", "Your Income Certificate is ready.", "Please collect it at your Mee Seva centre."],
      prompt: { en: "Your neighbour Fatima got this SMS. What does it say?", te: "మీ పక్కింటావిడ ఫాతిమా గారికి ఈ SMS వచ్చింది. అందులో ఏముంది?" },
      options: ["The certificate is ready to collect.", "The application is still pending.", "She has to pay the fee again."],
      answer: 0,
      why: {
        en: "Approved and ready both mean the work is done.",
        te: "approved, ready అంటే పని పూర్తయిందని అర్థం.",
      },
      say: "Please collect it at your Mee Seva centre.",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Yesterday I go to the office again.",
      wrongIndex: 2,
      fix: "Yesterday I went to the office again.",
      why: {
        en: "Yesterday is in the past, and the past of go is went.",
        te: "yesterday అంటే past; go కి past went.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the clerk if your certificate is ready.",
        te: "మీ సర్టిఫికెట్ రెడీ అయిందా అని క్లర్క్‌ని అడగండి.",
      },
      expected: ["Is my certificate ready?", "Is my certificate ready now?"],
      options: ["Is my certificate ready?", "My certificate is ready or not?", "Is my certificate is ready?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The clerk says it is pending. Ask when it will be ready.",
        te: "పెండింగ్‌లో ఉందని క్లర్క్ చెప్పారు. ఎప్పుడు రెడీ అవుతుందో అడగండి.",
      },
      expected: ["When will it be ready?", "When will it be ready, please?"],
      options: ["When will it be ready?", "When it will be ready?", "When will it ready?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A follow-up call", te: "ఫాలో అప్ కాల్" },
    scene: {
      en: "You applied for an income certificate on the tenth. You call the Mee Seva centre. Venkat answers.",
      te: "మీరు పదో తారీఖున ఇన్‌కమ్ సర్టిఫికెట్‌కి అప్లై చేశారు. మీ సేవ సెంటర్‌కి ఫోన్ చేశారు. వెంకట్ గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Venkat (Mee Seva centre)", te: "వెంకట్ (మీ సేవ సెంటర్)" },
    voice: "b",
    skills: [
      { id: "past", label: { en: "Saying what you did", te: "మీరు చేసింది చెప్పడం" } },
      { id: "ask", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
    ],
    turns: [
      {
        partner: "Hello, Mee Seva centre. How can I help you?",
        te: "హలో, మీ సేవ సెంటర్. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say who you are, and why you are calling.", te: "మీరు ఎవరో, ఎందుకు ఫోన్ చేశారో చెప్పండి." },
        replies: [
          { say: "This is Kiran. I am calling about my application.", good: true, skill: "ask" },
          { say: "Myself Kiran. I am calling about my application.", good: false, skill: "ask", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Okay. What is your application number?",
        te: "సరే. మీ అప్లికేషన్ నంబర్ ఎంత?",
        hint: { en: "Read the number on your slip, and say when you applied.", te: "రసీదు మీది నంబర్ చదివి, ఎప్పుడు అప్లై చేశారో చెప్పండి." },
        replies: [
          { say: "Two eight one one. I applied on the tenth.", good: true, skill: "past" },
          { say: "Two eight one one. I apply on the tenth.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Sorry, it is still pending.",
        te: "సారీ అండీ, ఇంకా పెండింగ్‌లోనే ఉంది.",
        hint: { en: "Ask politely for a day.", te: "ఎప్పుడు వస్తుందో మర్యాదగా అడగండి." },
        replies: [
          { say: "Okay. When will it be ready, please?", good: true, skill: "ask" },
          { say: "Okay. When it will be ready?", good: false, skill: "ask", fixIt: "question" },
          {
            say: "Still pending? You people are so lazy!",
            good: false,
            skill: "ask",
            react: { en: "Please don't say that. Many people are waiting.", te: "అలా అనకండి. చాలామంది ఎదురుచూస్తున్నారు." },
          },
        ],
      },
      {
        partner: "Next Monday. You will get an SMS.",
        te: "వచ్చే సోమవారం. మీకు SMS వస్తుంది.",
        hint: { en: "Say you will wait for it, and thank him.", te: "ఎదురుచూస్తానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I will wait for the SMS. Thank you.", good: true, skill: "ask" },
          { say: "Okay, I will wait for SMS. Thank you.", good: false, skill: "ask", fixIt: "article" },
        ],
      },
    ],
  },
};
