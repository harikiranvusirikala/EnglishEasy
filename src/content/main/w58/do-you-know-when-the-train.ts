import type { Lesson } from "../../types";

/** Week 58, Day 2 (CURRICULUM §5): Do you know when / what time / if …? — statement order at the railway enquiry counter. */
export const day: Lesson = {
  id: "do-you-know-when-the-train",
  kind: "lesson",
  title: { en: "Do You Know When?", te: "ఎప్పుడో తెలుసా?" },
  subtitle: "Do you know when / if …?",
  summary: {
    en: "Learn to ask about trains politely: Do you know when the next train leaves? Do you know if it stops at Tenali?",
    te: "రైళ్ళ గురించి మర్యాదగా అడగడం నేర్చుకుందాం: Do you know when the next train leaves? Do you know if it stops at Tenali?",
  },
  seo: {
    title: "Do You Know When and If in English for Telugu Speakers",
    description:
      "Ask Do you know when the next train leaves? and Do you know if it stops at Tenali? Simple railway enquiry lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Do you know", role: "action" },
    { text: "when", role: "when" },
    { text: "the train", role: "who" },
    { text: "leaves?", role: "action" },
  ],
  core: [
    { en: "Do you know when the next train leaves?", te: "తర్వాతి రైలు ఎప్పుడు బయలుదేరుతుందో మీకు తెలుసా?", extra: ["does"] },
    { en: "Do you know if it stops at Tenali?", te: "అది తెనాలిలో ఆగుతుందో లేదో మీకు తెలుసా?", extra: ["stop"] },
    { en: "Do you know what time it reaches Guntur?", te: "అది ఎన్నింటికి గుంటూరు చేరుతుందో తెలుసా?", extra: ["to"] },
    { en: "Do you know which platform it leaves from?", te: "అది ఏ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుందో తెలుసా?", extra: ["does"] },
    { en: "The express to Guntur leaves from platform three.", te: "గుంటూరు వెళ్ళే ఎక్స్‌ప్రెస్ మూడో ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది.", extra: ["leave"] },
    { en: "Do you know if the express is running late?", te: "ఎక్స్‌ప్రెస్ ఆలస్యంగా నడుస్తోందో లేదో తెలుసా?" },
    { en: "Do you know how long it halts at Tenali?", te: "అది తెనాలిలో ఎంతసేపు ఆగుతుందో తెలుసా?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone today when a shop, the bank or the post office opens: Do you know when … opens?",
    te: "ఈ రోజు ఎవరినైనా ఒక షాపు, బ్యాంక్, పోస్ట్ ఆఫీస్ ఎప్పుడు తెరుస్తారో Do you know when … opens? అని అడగండి.",
  },
  words: [
    { en: "Do you know", te: "… మీకు తెలుసా?" },
    { en: "timetable", te: "టైమ్‌టేబుల్, రైళ్ళ వేళల పట్టిక" },
    { en: "express", te: "ఎక్స్‌ప్రెస్ (కొన్ని స్టేషన్లలోనే ఆగే రైలు, బస్సు)" },
    { en: "halt", te: "రైలు కొంచెంసేపు ఆగడం" },
    { en: "departure", te: "బయలుదేరే సమయం" },
  ],
  grammar: ["indirect-tag-questions", "question-words", "present-simple"],
  topics: ["transport", "travel", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Do you know when …? Do you know if …?", te: "ఎప్పుడో తెలుసా? ఆగుతుందో లేదో తెలుసా?" },
      body: {
        en: "Start with Do you know, then say the rest like a normal sentence: when the train leaves. For a yes or no question, use if.",
        te: "Do you know తో మొదలుపెట్టి, మిగతాది మామూలు వాక్యంలా చెప్పండి: when the train leaves. 'ఆగుతుందో లేదో' లాంటి ప్రశ్నకి if వాడండి.",
      },
      bridge: {
        te: ["రైలు", "ఎప్పుడు బయలుదేరుతుందో", "తెలుసా?"],
        en: [
          { text: "Do you know", role: "action" },
          { text: "when", role: "when" },
          { text: "the train", role: "who" },
          { text: "leaves?", role: "action" },
        ],
      },
      examples: [
        { en: "Do you know when the next train leaves?", te: "తర్వాతి రైలు ఎప్పుడు బయలుదేరుతుందో మీకు తెలుసా?" },
        { en: "Do you know if it stops at Tenali?", te: "అది తెనాలిలో ఆగుతుందో లేదో మీకు తెలుసా?" },
        { en: "Do you know what time it reaches Guntur?", te: "అది ఎన్నింటికి గుంటూరు చేరుతుందో తెలుసా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "when, which, where, if", te: "when, which, where, if వాడకం" },
      items: [
        {
          form: "Do you know when …?",
          useFor: { en: "Ask about a time or a day.", te: "టైమ్ గానీ రోజు గానీ అడగడానికి." },
          example: { en: "Do you know when the counter opens?", te: "కౌంటర్ ఎప్పుడు తెరుస్తారో తెలుసా?" },
        },
        {
          form: "Do you know which …?",
          useFor: { en: "Ask for one out of many: a platform, a bus.", te: "చాలా వాటిలో ఒకటి అడగడానికి: ప్లాట్‌ఫామ్, బస్సు." },
          example: { en: "Do you know which platform it leaves from?", te: "అది ఏ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుందో తెలుసా?" },
        },
        {
          form: "Do you know where …?",
          useFor: { en: "Ask for a place.", te: "ఒక చోటు అడగడానికి." },
          example: { en: "Do you know where the timetable is?", te: "టైమ్‌టేబుల్ ఎక్కడ ఉందో తెలుసా?" },
        },
        {
          form: "Do you know if …?",
          useFor: { en: "A yes or no question, asked politely.", te: "అవునా కాదా ప్రశ్నని మర్యాదగా అడగడానికి." },
          example: { en: "Do you know if the express is running late?", te: "ఎక్స్‌ప్రెస్ ఆలస్యంగా నడుస్తోందో లేదో తెలుసా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Do you know when does the train leave?",
      right: "Do you know when the train leaves?",
      why: {
        en: "After Do you know, drop does; the verb gets its s back, as in a normal sentence.",
        te: "Do you know తర్వాత does రాదు; మామూలు వాక్యంలా verb కి s తిరిగి వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Do you know when next train leaves?",
      right: "Do you know when the next train leaves?",
      why: {
        en: "Next train means one known train, so it needs the; Telugu తర్వాతి రైలు has no such word.",
        te: "next train అంటే ఒక తెలిసిన రైలు, అందుకే the కావాలి; తెలుగు 'తర్వాతి రైలు' లో అలాంటి పదం ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask the person next to you politely when the Guntur train leaves.",
        te: "గుంటూరు రైలు ఎప్పుడు బయలుదేరుతుందో పక్కన ఉన్నవారిని మర్యాదగా అడగండి.",
      },
      options: ["Do you know when the Guntur train leaves?", "Do you know when leaves the Guntur train?", "You know when the Guntur train leaves?"],
      answer: 0,
      why: {
        en: "The question needs Do at the start, and the part after know keeps normal order.",
        te: "ప్రశ్న మొదట్లో Do ఉండాలి; know తర్వాత భాగం మామూలు వరుసలోనే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "question",
      sentence: "Do you know ___ it stops at Tenali?",
      te: "అది తెనాలిలో ఆగుతుందో లేదో మీకు తెలుసా?",
      options: ["if", "does", "is"],
      answer: 0,
      why: {
        en: "A yes or no question inside Do you know joins with if, never with does.",
        te: "Do you know లోపల అవునా కాదా ప్రశ్న if తో కలుస్తుంది; does రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You ask: Do you know if this train stops at Tenali? A man says: Yes, it does. What does he mean?",
        te: "Do you know if this train stops at Tenali? అని మీరు అడిగారు. ఒకాయన Yes, it does అన్నారు. ఆయన ఉద్దేశం ఏంటి?",
      },
      options: ["The train stops at Tenali.", "He knows Tenali very well.", "The train does not stop there."],
      answer: 0,
      why: {
        en: "His answer is about the train stopping, not about what he knows.",
        te: "ఆయన జవాబు రైలు ఆగడం గురించి; ఆయనకి తెలుసా లేదా అని కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Do you know what time it reaches to Guntur?",
      wrongIndex: 7,
      fix: "Do you know what time it reaches Guntur?",
      why: {
        en: "Reach takes no to; Telugu గుంటూరుకి makes people add to.",
        te: "reach తర్వాత to రాదు; తెలుగు 'గుంటూరుకి' వల్ల to చేర్చేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the clerk at the counter if the express is running late.",
        te: "ఎక్స్‌ప్రెస్ ఆలస్యంగా నడుస్తోందో లేదో కౌంటర్‌లో ఉన్న క్లర్క్ గారిని అడగండి.",
      },
      expected: ["Do you know if the express is running late?", "Is the express running late?", "Can you tell me if the express is late?"],
      options: ["Do you know if the express is running late?", "Do you know is the express running late?", "Do you know if the express running late?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A passenger asks how long the train halts at Tenali. Say two minutes.",
        te: "రైలు తెనాలిలో ఎంతసేపు ఆగుతుందని ఒకరు అడిగారు. రెండు నిమిషాలు అని చెప్పండి.",
      },
      expected: ["It halts for two minutes.", "Only two minutes.", "It stops for two minutes."],
      options: ["It halts for two minutes.", "It halts for two minute.", "It halt for two minutes."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the railway enquiry counter", te: "రైల్వే ఎంక్వయిరీ కౌంటర్ దగ్గర" },
    scene: {
      en: "You are at Vijayawada station. You want a train to Nellore. Ramesh is at the enquiry counter.",
      te: "మీరు విజయవాడ స్టేషన్‌లో ఉన్నారు. నెల్లూరుకి రైలు కావాలి. ఎంక్వయిరీ కౌంటర్‌లో రమేష్ గారు ఉన్నారు.",
    },
    partner: { en: "Ramesh (at the enquiry counter)", te: "రమేష్ (ఎంక్వయిరీ కౌంటర్‌లో)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Do you know …?", te: "Do you know తో అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good afternoon. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Ask politely about the time of the next train to Nellore.", te: "నెల్లూరుకి తర్వాతి రైలు ఎప్పుడో మర్యాదగా అడగండి." },
        replies: [
          { say: "Do you know when the next train to Nellore leaves?", good: true, skill: "ask" },
          { say: "Can you tell me when the next train to Nellore leaves?", good: true, skill: "ask" },
          { say: "When leaves the next train to Nellore?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "The departure is at 4:15, from platform three.",
        te: "4:15 కి, మూడో ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది.",
        hint: { en: "Ask whether it has a halt at Ongole.", te: "దానికి ఒంగోలులో హాల్ట్ ఉందో లేదో అడగండి." },
        replies: [
          { say: "Do you know if it stops at Ongole?", good: true, skill: "ask" },
          { say: "Could you tell me if it stops at Ongole?", good: true, skill: "ask" },
          { say: "Do you know if it stop at Ongole?", good: false, skill: "ask", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Yes, it halts there for two minutes.",
        te: "అవును, అక్కడ రెండు నిమిషాలు ఆగుతుంది.",
        hint: { en: "Ask about its arrival time in Nellore.", te: "అది నెల్లూరు ఎన్నింటికి చేరుతుందో అడగండి." },
        replies: [
          { say: "Do you know what time it reaches Nellore?", good: true, skill: "ask" },
          {
            say: "Just tell me the time it reaches. I'm in a hurry!",
            good: false,
            skill: "polite",
            react: { en: "Please be patient. I'm checking the timetable.", te: "కొంచెం ఓపిక పట్టండి. టైమ్‌టేబుల్ చూస్తున్నాను." },
          },
        ],
      },
      {
        partner: "It reaches Nellore at 8:30 tonight.",
        te: "ఈ రాత్రి 8:30 కి నెల్లూరు చేరుతుంది.",
        hint: { en: "Thank him, and end politely.", te: "థాంక్స్ చెప్పి, మర్యాదగా ముగించండి." },
        replies: [
          { say: "Thank you very much. That's very helpful.", good: true, skill: "polite" },
          { say: "Thanks you very much. That's very helpful.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
