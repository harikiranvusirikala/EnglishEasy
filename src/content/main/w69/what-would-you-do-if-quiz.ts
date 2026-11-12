import type { Lesson } from "../../types";

/** Week 69, Day 2 (CURRICULUM §5): What would you do if …? questions and answers — a quiz game at the club. */
export const day: Lesson = {
  id: "what-would-you-do-if-quiz",
  kind: "lesson",
  title: { en: "What Would You Do?", te: "మీరైతే ఏం చేస్తారు?" },
  subtitle: "What would you do if …?",
  summary: {
    en: "Learn to ask and answer about imagined situations: What would you do if you found a wallet? I would take it to the police station.",
    te: "ఊహించిన సంఘటనల గురించి అడగడం, జవాబు చెప్పడం నేర్చుకుందాం: What would you do if you found a wallet? I would take it to the police station.",
  },
  seo: {
    title: "What Would You Do If in English for Telugu Speakers",
    description:
      "Ask What would you do if you found a wallet? and answer I would take it to the police. Simple lessons for Telugu speakers on imagined questions.",
  },
  pattern: [
    { text: "What", role: "what" },
    { text: "would you do", role: "action" },
    { text: "if you found a wallet?", role: "when" },
  ],
  core: [
    { en: "What would you do if you found a wallet?", te: "మీకు ఒక పర్సు దొరికితే ఏం చేస్తారు?", extra: ["will"] },
    { en: "I would take it to the police station.", te: "దాన్ని పోలీస్ స్టేషన్‌కి తీసుకెళ్తాను.", extra: ["taking"] },
    { en: "What would you do if the lift stopped?", te: "లిఫ్ట్ మధ్యలో ఆగిపోతే ఏం చేస్తారు?", extra: ["stops"] },
    { en: "I would press the alarm button and wait calmly.", te: "అలారం బటన్ నొక్కి, ప్రశాంతంగా ఎదురుచూస్తాను.", extra: ["waiting"] },
    { en: "If a shopkeeper gave you extra change, would you tell him?", te: "షాపు ఆయన మీకు ఎక్కువ చిల్లర ఇస్తే, ఆయనకి చెప్తారా?", extra: ["will"] },
    { en: "Yes, of course. I would give it back at once.", te: "అవును, తప్పకుండా. వెంటనే తిరిగి ఇచ్చేస్తాను.", extra: ["gave"] },
    { en: "If a stranger asked for your OTP, what would you say?", te: "ఎవరో తెలియనివాళ్ళు మీ OTP అడిగితే, మీరు ఏమంటారు?", extra: ["asks"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a friend or neighbour one quiz question today: What would you do if …?",
    te: "ఈ రోజు ఎవరైనా స్నేహితుల్ని గానీ పక్కింటివారిని గానీ ఒక క్విజ్ ప్రశ్న అడగండి: What would you do if …?",
  },
  words: [
    { en: "quiz", te: "క్విజ్, ప్రశ్నల ఆట" },
    { en: "wallet", te: "పర్సు (డబ్బులు పెట్టుకునేది)" },
    { en: "hand over", te: "అప్పగించడం" },
    { en: "what would you do", te: "మీరైతే ఏం చేస్తారు" },
    { en: "in that case", te: "అలాగైతే, అప్పుడైతే" },
  ],
  grammar: ["conditionals", "question-words", "past-simple"],
  topics: ["people", "neighbours", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What would you do if …?", te: "… అయితే మీరేం చేస్తారు?" },
      body: {
        en: "To ask about an imagined situation, say What would you do if, then the past: What would you do if you found a wallet? Answer with I would or I'd.",
        te: "ఊహించిన సంఘటన గురించి అడగాలంటే What would you do if తర్వాత past వాడండి. జవాబు I would లేదా I'd తో మొదలవుతుంది.",
      },
      bridge: {
        te: ["మీకు ఒక పర్సు దొరికితే", "ఏం", "చేస్తారు?"],
        en: [
          { text: "What", role: "what" },
          { text: "would you do", role: "action" },
          { text: "if you found a wallet?", role: "when" },
        ],
      },
      examples: [
        { en: "What would you do if you found a wallet?", te: "మీకు ఒక పర్సు దొరికితే ఏం చేస్తారు?" },
        { en: "I would take it to the police station.", te: "దాన్ని పోలీస్ స్టేషన్‌కి తీసుకెళ్తాను." },
        { en: "What would you do if the lift stopped?", te: "లిఫ్ట్ మధ్యలో ఆగిపోతే ఏం చేస్తారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and answering", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "What would you do if …?",
          useFor: { en: "Ask about an imagined situation.", te: "ఊహించిన సంఘటన గురించి అడగడానికి." },
          example: { en: "What would you do if the lift stopped?", te: "లిఫ్ట్ మధ్యలో ఆగిపోతే ఏం చేస్తారు?" },
        },
        {
          form: "I would … / I'd …",
          useFor: { en: "Answer it.", te: "దానికి జవాబు చెప్పడానికి." },
          example: { en: "I would press the alarm button and wait calmly.", te: "అలారం బటన్ నొక్కి, ప్రశాంతంగా ఎదురుచూస్తాను." },
        },
        {
          form: "Would you …?",
          useFor: { en: "A yes or no question about it.", te: "అవును, కాదు అని జవాబు వచ్చే ప్రశ్న." },
          example: { en: "Would you tell the shopkeeper?", te: "షాపు ఆయనకి చెప్తారా?" },
        },
        {
          form: "In that case, I'd …",
          useFor: { en: "Answer when someone adds a new detail.", te: "ఎవరైనా కొత్త విషయం చేర్చినప్పుడు జవాబు చెప్పడానికి." },
          example: { en: "In that case, I'd call the bank at once.", te: "అలాగైతే, వెంటనే బ్యాంకుకి ఫోన్ చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What you would do if you found a wallet?",
      right: "What would you do if you found a wallet?",
      why: {
        en: "In a question, would comes before you; Telugu keeps the normal order.",
        te: "ప్రశ్నలో would, you కంటే ముందు వస్తుంది; తెలుగులో మాటల వరుస మారదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "If I would find a wallet, I would take it to the police.",
      right: "If I found a wallet, I would take it to the police.",
      why: {
        en: "After if, use the past form; would belongs only in the other half.",
        te: "if తర్వాత past వాడాలి; would రెండో భాగంలో మాత్రమే వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "At the club quiz, ask your friend Mohan about finding a wallet.", te: "క్లబ్ క్విజ్‌లో, పర్సు దొరికితే ఏం చేస్తారని మీ స్నేహితుడు మోహన్ గారిని అడగండి." },
      options: ["What would you do if you found a wallet?", "What you would do if you found a wallet?", "What would you do if you would find a wallet?"],
      answer: 0,
      why: {
        en: "In a question, would comes before you, and after if comes the past.",
        te: "ప్రశ్నలో would, you కంటే ముందు వస్తుంది; if తర్వాత past వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "What would you do if the lift ___?",
      te: "లిఫ్ట్ మధ్యలో ఆగిపోతే ఏం చేస్తారు?",
      options: ["stopped", "would stop", "stopping"],
      answer: 0,
      why: {
        en: "After if in an imagined question, use the past, never would.",
        te: "ఊహించి అడిగే ప్రశ్నలో if తర్వాత past వస్తుంది; would ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "At the quiz, everyone says Rani is very honest. Tell a new member why.",
        te: "క్విజ్‌లో అందరూ రాణి గారు చాలా నిజాయితీపరులు అంటున్నారు. ఎందుకో కొత్త సభ్యులకి చెప్పండి.",
      },
      options: ["Rani always gives back extra change.", "Rani always give back extra change.", "Rani always gives back extra changes."],
      answer: 0,
      why: {
        en: "One person, like she, adds s to the verb; change takes no s.",
        te: "ఒక్కరైతే (she లాగా) verb కి s వస్తుంది; change (చిల్లర) కి s రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "If you found a wallet, will you take it to the police?",
      wrongIndex: 5,
      fix: "If you found a wallet, would you take it to the police?",
      why: {
        en: "With found in the if part, the question takes would, not will.",
        te: "if భాగంలో found ఉంటే, ప్రశ్నలో will కాదు, would వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The quiz master asks: What would you do if you found a wallet on the bus? Answer.",
        te: "బస్సులో పర్సు దొరికితే ఏం చేస్తారని క్విజ్ మాస్టర్ అడుగుతున్నారు. జవాబు చెప్పండి.",
      },
      expected: ["I would give it to the conductor.", "I'd give it to the conductor.", "I would take it to the police station.", "I'd hand it over to the conductor."],
      options: ["I would give it to the conductor.", "I would keep it for myself.", "I would gave it to the conductor."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Ask your friend a quiz question: what would she do if she saw a snake?",
        te: "స్నేహితురాలిని ఒక క్విజ్ ప్రశ్న అడగండి: పాము కనిపిస్తే ఆవిడ ఏం చేస్తారు?",
      },
      expected: ["What would you do if you saw a snake?", "What would you do if you saw a snake at home?"],
      options: ["What would you do if you saw a snake?", "What would you do if you saw snake?", "What you would do if you saw a snake?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The club quiz", te: "క్లబ్‌లో క్విజ్" },
    scene: {
      en: "It is quiz day at the senior citizens' club. Your friend Mohan is the quiz master, and it is your turn.",
      te: "ఈ రోజు సీనియర్ సిటిజన్స్ క్లబ్‌లో క్విజ్. మీ స్నేహితుడు మోహన్ గారు క్విజ్ మాస్టర్, ఇప్పుడు మీ వంతు.",
    },
    partner: { en: "Mohan (the quiz master)", te: "మోహన్ (క్విజ్ మాస్టర్)" },
    voice: "b",
    skills: [
      { id: "answer", label: { en: "Answering with I would", te: "I would తో జవాబు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Welcome to our quiz! Here is your first question. Are you ready?",
        te: "మన క్విజ్‌కి స్వాగతం! ఇదిగో మీ మొదటి ప్రశ్న. రెడీయేనా?",
        hint: { en: "Say you are ready, and ask him to begin.", te: "రెడీ అని చెప్పి, మొదలుపెట్టమని ఆయన్ని అడగండి." },
        replies: [
          { say: "Yes, I'm ready. Please go ahead.", good: true, skill: "polite" },
          { say: "Yes, I ready. Please go ahead.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
      {
        partner: "What would you do if you found a wallet in the park?",
        te: "పార్క్‌లో మీకు ఒక పర్సు దొరికితే ఏం చేస్తారు?",
        hint: { en: "Say where you would take it.", te: "దాన్ని ఎక్కడికి తీసుకెళ్తారో చెప్పండి." },
        replies: [
          { say: "I would take it to the police station.", good: true, skill: "answer" },
          { say: "I'd hand it over to the park guard.", good: true, skill: "answer" },
          {
            say: "I would keep the money. Nobody would know!",
            good: false,
            skill: "polite",
            react: { en: "Oh no! That's not honest. Please try again!", te: "అయ్యో! అది నిజాయితీ కాదు. మళ్ళీ ప్రయత్నించండి!" },
          },
        ],
      },
      {
        partner: "Good answer! And if the wallet had a phone number inside?",
        te: "మంచి జవాబు! మరి ఆ పర్సులో ఒక ఫోన్ నంబర్ ఉంటే?",
        hint: { en: "Start with In that case, and say who you would phone.", te: "In that case తో మొదలుపెట్టి, ఎవరికి ఫోన్ చేస్తారో చెప్పండి." },
        replies: [
          { say: "In that case, I'd call the owner.", good: true, skill: "answer" },
          { say: "Then I would call the number and tell them.", good: true, skill: "answer" },
          { say: "In that case, I'd calling the owner.", good: false, skill: "answer" },
        ],
      },
      {
        partner: "Very good! That's the end of your round. Thank you for playing.",
        te: "చాలా బాగుంది! మీ రౌండ్ అయిపోయింది. ఆడినందుకు థాంక్స్.",
        hint: { en: "Thank him, and say you enjoyed it.", te: "ఆయనకి థాంక్స్ చెప్పి, మీకు నచ్చిందని చెప్పండి." },
        replies: [
          { say: "Thank you, Mohan. I really enjoyed it.", good: true, skill: "polite" },
          { say: "Thanks you, Mohan. I really enjoyed it.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
