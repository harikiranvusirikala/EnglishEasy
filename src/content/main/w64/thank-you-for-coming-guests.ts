import type { Lesson } from "../../types";

/** Week 64, Day 5 (CURRICULUM §5): seeing guests off — Thank you for coming; Please visit again; Have a safe journey. */
export const day: Lesson = {
  id: "thank-you-for-coming-guests",
  kind: "lesson",
  title: { en: "Thank You for Coming", te: "వచ్చినందుకు థ్యాంక్స్" },
  subtitle: "Thank you for coming / Have a safe journey",
  summary: {
    en: "Learn to see your guests off warmly: Thank you for coming. Please visit again soon. Have a safe journey.",
    te: "అతిథులను ఆప్యాయంగా సాగనంపడం నేర్చుకుందాం: Thank you for coming. Please visit again soon. Have a safe journey.",
  },
  seo: {
    title: "Seeing Guests Off in English for Telugu Speakers",
    description:
      "Say Thank you for coming, Please visit again soon and Have a safe journey. Simple lessons for Telugu speakers on seeing guests off.",
  },
  pattern: [
    { text: "Thank you", role: "action" },
    { text: "for coming", role: "what" },
    { text: "today", role: "when" },
  ],
  core: [
    { en: "Thank you for coming.", te: "వచ్చినందుకు థ్యాంక్స్.", extra: ["come"] },
    { en: "Please visit again soon.", te: "మళ్ళీ త్వరలో రండి.", extra: ["visiting"] },
    { en: "Have a safe journey.", te: "జాగ్రత్తగా వెళ్ళిరండి.", extra: ["the"] },
    { en: "Send me a message when you reach home.", te: "ఇంటికి చేరుకున్నాక నాకు ఒక మెసేజ్ పెట్టండి.", extra: ["will"] },
    { en: "It was lovely to have you here.", te: "మీరు రావడం చాలా సంతోషంగా ఉంది.", extra: ["is"] },
    { en: "Let me walk you to the gate.", te: "గేటు దాకా మీతో వస్తాను.", extra: ["till"] },
    { en: "Thank you for the lovely lunch. We enjoyed it.", te: "మంచి భోజనం పెట్టినందుకు థ్యాంక్స్. మాకు చాలా నచ్చింది.", extra: ["enjoy"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When a visitor leaves today, say Thank you for coming, or send the words in a message.",
    te: "ఈ రోజు ఎవరైనా వచ్చి వెళ్ళేటప్పుడు Thank you for coming అనండి, లేదా మెసేజ్‌లో పంపండి.",
  },
  words: [
    { en: "see off", te: "సాగనంపడం" },
    { en: "thanks for coming", te: "వచ్చినందుకు థ్యాంక్స్" },
    { en: "visit again", te: "మళ్ళీ రండి" },
    { en: "have a safe journey", te: "జాగ్రత్తగా వెళ్ళిరండి" },
    { en: "my pleasure", te: "నాకు సంతోషం, అదేం పెద్ద విషయం కాదు" },
  ],
  grammar: ["gerunds-infinitives", "politeness-softening", "prepositions"],
  topics: ["home", "people", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Seeing guests off", te: "అతిథులను సాగనంపడం" },
      body: {
        en: "When guests leave, say Thank you for coming. After for, an action takes -ing. Then ask them to visit again.",
        te: "అతిథులు వెళ్ళేటప్పుడు Thank you for coming అనండి. for తర్వాత పని వస్తే -ing చేరుతుంది. తర్వాత మళ్ళీ రమ్మని చెప్పండి.",
      },
      bridge: {
        te: ["వచ్చినందుకు", "థ్యాంక్స్"],
        en: [
          { text: "Thank you", role: "action" },
          { text: "for coming", role: "what" },
        ],
      },
      examples: [
        { en: "Thank you for coming.", te: "వచ్చినందుకు థ్యాంక్స్." },
        { en: "Please visit again soon.", te: "మళ్ళీ త్వరలో రండి." },
        { en: "Have a safe journey.", te: "జాగ్రత్తగా వెళ్ళిరండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "At the gate", te: "గేటు దగ్గర" },
      items: [
        {
          form: "Thank you for coming.",
          useFor: { en: "The host thanks the guests.", te: "ఇంటివారు అతిథులకు థ్యాంక్స్ చెప్పడానికి." },
          example: { en: "It was lovely to have you here.", te: "మీరు రావడం చాలా సంతోషంగా ఉంది." },
        },
        {
          form: "Thank you for the …",
          useFor: { en: "The guest thanks the host for the food.", te: "అతిథి భోజనానికి థ్యాంక్స్ చెప్పడానికి." },
          example: { en: "Thank you for the lovely lunch. We enjoyed it.", te: "మంచి భోజనం పెట్టినందుకు థ్యాంక్స్. మాకు చాలా నచ్చింది." },
        },
        {
          form: "My pleasure.",
          useFor: { en: "Reply when a guest thanks you.", te: "అతిథి థ్యాంక్స్ చెప్తే జవాబుగా." },
          example: { en: "My pleasure. Please visit again soon.", te: "నాకు సంతోషం. మళ్ళీ త్వరలో రండి." },
        },
        {
          form: "Have a safe journey.",
          useFor: { en: "For a guest going far by bus, train or car.", te: "బస్సు, రైలు, కారులో దూరం వెళ్ళే అతిథికి." },
          example: { en: "Have a safe journey back to Guntur.", te: "గుంటూరుకి జాగ్రత్తగా వెళ్ళిరండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Thank you for come.",
      right: "Thank you for coming.",
      why: {
        en: "After for, an action takes -ing; Telugu వచ్చినందుకు hides this.",
        te: "for తర్వాత పని వస్తే -ing చేర్చాలి; తెలుగు 'వచ్చినందుకు' లో ఇది కనిపించదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Mention not. Please visit again.",
      right: "My pleasure. Please visit again.",
      why: {
        en: "Mention not is old Indian English; people now say my pleasure or you're welcome.",
        te: "Mention not అనేది పాత ఇండియన్ ఇంగ్లీష్; ఇప్పుడు my pleasure లేదా you're welcome అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your host asks: Won't you stay for dinner? You can't stay. What do you say?",
        te: "ఇంటివారు Won't you stay for dinner? అని అడిగారు. మీరు ఉండలేరు. ఏమంటారు?",
      },
      options: ["No, I can't. I have to catch my bus.", "Yes, I can't. I have to catch my bus.", "No. I don't want to stay."],
      answer: 0,
      why: {
        en: "You are not staying, so start with No; Telugu అవును here would mean you agree to stay.",
        te: "మీరు ఉండట్లేదు కాబట్టి No తో మొదలుపెట్టాలి; ఇక్కడ 'అవును' అంటే ఉంటానని అర్థమవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Srinivas",
      lines: ["Reached Guntur safely.", "Thank you for the lovely dinner!", "The biryani was excellent.", "Please visit us next month."],
      prompt: { en: "What does Srinivas tell you first?", te: "శ్రీనివాస్ గారు ముందు ఏం చెప్తున్నారు?" },
      options: ["He has reached home safely.", "He has missed his bus.", "He is coming back tomorrow."],
      answer: 0,
      why: {
        en: "Reached Guntur safely means he got home with no trouble on the way.",
        te: "Reached Guntur safely అంటే దారిలో ఏ ఇబ్బందీ లేకుండా ఇంటికి చేరుకున్నారు అని.",
      },
    },
    {
      id: "p3",
      type: "fillBlank",
      sentence: "Send me a message when you ___ home.",
      te: "ఇంటికి చేరుకున్నాక నాకు ఒక మెసేజ్ పెట్టండి.",
      options: ["reach", "will reach", "reaching"],
      answer: 0,
      why: {
        en: "After when, English talks about the future with the plain verb, never with will.",
        te: "when తర్వాత జరగబోయేది చెప్పినా verb అలాగే వస్తుంది; will రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Let me walk you till the gate.",
      wrongIndex: 4,
      fix: "Let me walk you to the gate.",
      why: {
        en: "Till is for time; for a place, use to. Telugu దాకా covers both.",
        te: "till టైమ్‌కి మాత్రమే; చోటు దాకా అంటే to వాడాలి. తెలుగులో 'దాకా' రెండింటికీ వాడతాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your cousin is going back to Guntur by bus tonight. Wish him a good trip.",
        te: "మీ కజిన్ ఈ రాత్రి బస్సులో గుంటూరు తిరిగి వెళ్తున్నారు. ప్రయాణం బాగా జరగాలని చెప్పండి.",
      },
      expected: ["Have a safe journey.", "Have a safe journey back to Guntur.", "Have a safe trip."],
      options: ["Have a safe journey.", "Have safe journey.", "Do a safe journey."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend thanks you for the lunch. Reply kindly, and ask her to visit again.",
        te: "భోజనానికి మీ స్నేహితురాలు థ్యాంక్స్ చెప్పారు. మర్యాదగా జవాబిచ్చి, మళ్ళీ రమ్మనండి.",
      },
      expected: ["My pleasure. Please visit again.", "My pleasure. Please come again soon.", "You're welcome. Please visit again soon."],
      options: ["My pleasure. Please visit again.", "Mention not. Please visit again.", "No thanks. Please visit again."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the gate", te: "గేటు దగ్గర" },
    scene: {
      en: "Your cousin Srinivas came to your home for dinner. Now he is leaving to catch the last bus to Guntur.",
      te: "మీ కజిన్ శ్రీనివాస్ గారు భోజనానికి మీ ఇంటికి వచ్చారు. ఇప్పుడు గుంటూరు వెళ్ళే ఆఖరి బస్సు అందుకోడానికి బయల్దేరుతున్నారు.",
    },
    partner: { en: "Srinivas (your cousin)", te: "శ్రీనివాస్ (మీ కజిన్)" },
    voice: "b",
    skills: [
      { id: "seeoff", label: { en: "Seeing a guest off", te: "అతిథిని సాగనంపడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "It's getting late. I should leave now, or I'll miss my bus.",
        te: "ఆలస్యం అవుతోంది. ఇప్పుడు బయల్దేరాలి, లేకపోతే బస్సు వెళ్ళిపోతుంది.",
        hint: { en: "Thank him for coming.", te: "వచ్చినందుకు ఆయనకి థ్యాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much for coming, Srinivas.", good: true, skill: "seeoff" },
          { say: "Thank you so much for come, Srinivas.", good: false, skill: "seeoff" },
        ],
      },
      {
        partner: "Thank you for the lovely dinner. The biryani was excellent!",
        te: "మంచి భోజనం పెట్టినందుకు థ్యాంక్స్. బిర్యానీ అద్భుతంగా ఉంది!",
        hint: { en: "Reply kindly, and ask him to visit again soon.", te: "మర్యాదగా జవాబిచ్చి, మళ్ళీ త్వరలో రమ్మనండి." },
        replies: [
          { say: "My pleasure. Please visit again soon.", good: true, skill: "polite" },
          {
            say: "Okay, okay. Go now, or you'll miss the bus.",
            good: false,
            skill: "polite",
            react: { en: "Ha! Are you sending me away so fast?", te: "హహ! ఇంత త్వరగా పంపించేస్తున్నారా?" },
          },
        ],
      },
      {
        partner: "I will. And next time, you must come to Guntur!",
        te: "తప్పకుండా. ఈసారి మీరు గుంటూరు రావాల్సిందే!",
        hint: { en: "Say yes, and offer to walk with him to the gate.", te: "సరే అని, గేటు దాకా ఆయనతో వస్తానని చెప్పండి." },
        replies: [
          { say: "Sure! Let me walk you to the gate.", good: true, skill: "seeoff" },
          { say: "Sure! Let me walk you till the gate.", good: false, skill: "seeoff", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thank you. Okay, bye! Take care.",
        te: "థ్యాంక్స్. సరే, బై! జాగ్రత్త.",
        hint: { en: "Wish him a safe journey, and ask for a message when he gets home.", te: "జాగ్రత్తగా వెళ్ళమని చెప్పి, ఇంటికి చేరాక మెసేజ్ పెట్టమనండి." },
        replies: [
          { say: "Have a safe journey. Message me when you reach home.", good: true, skill: "seeoff" },
          { say: "Have a safe journey. Message me when you will reach home.", good: false, skill: "seeoff" },
        ],
      },
    ],
  },
};
