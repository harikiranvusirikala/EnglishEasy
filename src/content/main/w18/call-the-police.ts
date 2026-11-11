import type { Lesson } from "../../types";

/** Week 18, Day 5 (CURRICULUM §4): theft and chain snatching — call 100 or 112, say what happened (stole, took) and describe the person. */
export const day: Lesson = {
  id: "call-the-police",
  kind: "lesson",
  title: { en: "Call the Police", te: "పోలీసులకు ఫోన్" },
  subtitle: "Someone stole …",
  summary: {
    en: "Learn to report a theft calmly: say what happened, Someone stole my bag, and what the person looked like.",
    te: "దొంగతనం జరిగితే నిదానంగా చెప్పడం నేర్చుకుందాం: ఏం జరిగిందో (Someone stole my bag), ఆ మనిషి ఎలా ఉన్నారో.",
  },
  seo: {
    title: "Reporting a Theft in English for Telugu Speakers",
    description:
      "Call 100 or 112 and say Someone stole my bag. A man on a bike took her chain. Simple lessons for Telugu speakers on reporting a theft.",
  },
  pattern: [
    { text: "Someone", role: "who" },
    { text: "stole", role: "action" },
    { text: "my bag", role: "what" },
    { text: "last night", role: "when" },
  ],
  core: [
    { en: "Someone stole my bag.", te: "ఎవరో నా బ్యాగ్ దొంగిలించారు.", extra: ["steal"] },
    { en: "A man on a bike took her chain.", te: "బైక్ మీద వచ్చిన ఒకాయన ఆవిడ గొలుసు లాక్కెళ్ళారు.", extra: ["taked"] },
    { en: "He was tall. He had a black helmet.", te: "ఆయన పొడుగ్గా ఉన్నారు. నల్ల హెల్మెట్ పెట్టుకున్నారు.", extra: ["were"] },
    { en: "It happened outside the vegetable market.", te: "కూరగాయల మార్కెట్ బయట జరిగింది.", extra: ["happen"] },
    { en: "They snatched my phone and ran away.", te: "వాళ్ళు నా ఫోన్ లాక్కుని పారిపోయారు.", extra: ["run"] },
    { en: "I want to file a complaint.", te: "నేను కంప్లైంట్ ఇవ్వాలనుకుంటున్నాను.", extra: ["give"] },
    { en: "My purse had 2,000 rupees and my Aadhaar card.", te: "నా పర్సులో 2,000 రూపాయలు, నా ఆధార్ కార్డు ఉన్నాయి.", extra: ["rupee"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Look at one person near you and describe them in two short sentences: He is tall. He is wearing a blue shirt.",
    te: "మీ దగ్గర ఉన్న ఒకరిని చూసి, రెండు చిన్న వాక్యాల్లో వారి గురించి చెప్పండి: He is tall. He is wearing a blue shirt.",
  },
  words: [
    { en: "stole", te: "దొంగిలించారు (steal గతం)" },
    { en: "thief", te: "దొంగ" },
    { en: "chain", te: "గొలుసు, చైన్" },
    { en: "snatched", te: "లాక్కెళ్ళారు (snatch గతం)" },
    { en: "helmet", te: "హెల్మెట్" },
  ],
  grammar: ["past-simple", "was-were", "have-has-possessives"],
  topics: ["people", "phone", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Reporting a theft", te: "దొంగతనం గురించి చెప్పడం" },
      body: {
        en: "Call one zero zero or one one two. Say what happened in the past: Someone stole my bag. Then say what the thief looked like: He was tall.",
        te: "100 లేదా 112 కి ఫోన్ చేయండి. జరిగినది past లో చెప్పండి: Someone stole my bag. తర్వాత ఆ దొంగ ఎలా ఉన్నారో చెప్పండి: He was tall.",
      },
      bridge: {
        te: ["ఎవరో", "నా బ్యాగ్", "దొంగిలించారు"],
        en: [
          { text: "Someone", role: "who" },
          { text: "stole", role: "action" },
          { text: "my bag", role: "what" },
        ],
      },
      examples: [
        { en: "Someone stole my bag.", te: "ఎవరో నా బ్యాగ్ దొంగిలించారు." },
        { en: "A man on a bike took her chain.", te: "బైక్ మీద వచ్చిన ఒకాయన ఆవిడ గొలుసు లాక్కెళ్ళారు." },
        { en: "My purse had 2,000 rupees and my Aadhaar card.", te: "నా పర్సులో 2,000 రూపాయలు, నా ఆధార్ కార్డు ఉన్నాయి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Describing the person", te: "ఆ మనిషి ఎలా ఉన్నారో చెప్పడం" },
      items: [
        {
          form: "He was …",
          useFor: { en: "How he looked: tall, short, young, old.", te: "ఆయన ఎలా ఉన్నారు: పొడుగు, పొట్టి, చిన్నవయసు, పెద్దవయసు." },
          example: { en: "He was young and thin.", te: "ఆయన వయసులో చిన్నవారు, సన్నగా ఉన్నారు." },
        },
        {
          form: "He had …",
          useFor: { en: "Something on him or with him.", te: "ఆయన దగ్గర గానీ, ఒంటి మీద గానీ ఉన్నది." },
          example: { en: "He had a beard and a black bag.", te: "ఆయనకి గడ్డం ఉంది, చేతిలో నల్ల బ్యాగ్ ఉంది." },
        },
        {
          form: "on a bike / on foot",
          useFor: { en: "How he came and went.", te: "ఆయన ఎలా వచ్చి, ఎలా వెళ్ళారు." },
          example: { en: "They ran away on a red bike.", te: "వాళ్ళు ఎర్ర బైక్ మీద పారిపోయారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Yesterday night someone stole my bike.",
      right: "Last night someone stole my bike.",
      why: {
        en: "Yesterday night is heard only in India; everyone understands last night.",
        te: "Yesterday night అనేది మన దగ్గరే వింటాం; అందరికీ అర్థమయ్యేది last night.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I want to give a complaint.",
      right: "I want to file a complaint.",
      why: {
        en: "Give a complaint is a word-for-word copy of Telugu ఇవ్వడం; English says file.",
        te: "'కంప్లైంట్ ఇవ్వడం' ని మాటకి మాట మార్చితే give వస్తుంది; ఇంగ్లీష్‌లో file a complaint అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Your bag is gone from the bus seat. Tell the conductor.", te: "బస్సు సీటు మీద పెట్టిన మీ బ్యాగ్ కనిపించట్లేదు. కండక్టర్‌కి చెప్పండి." },
      options: ["Someone stole my bag.", "Someone stealed my bag.", "Someone is steal my bag."],
      answer: 0,
      why: {
        en: "Steal has a special past form, and it never takes -ed.",
        te: "steal కి past ప్రత్యేకంగా ఉంటుంది: stole. దానికి -ed రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Two men ___ my phone and ran away.",
      te: "ఇద్దరు మగవాళ్ళు నా ఫోన్ లాక్కుని పారిపోయారు.",
      options: ["snatched", "snatch", "snatching"],
      answer: 0,
      why: {
        en: "Ran away shows it is the past, so snatch takes -ed too.",
        te: "ran away వల్ల ఇది జరిగిపోయినది అని తెలుస్తుంది, అందుకే snatch కి కూడా -ed.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The police ask: What did he look like? What do they want to know?",
        te: "పోలీసులు What did he look like? అని అడిగారు. వాళ్ళు ఏం తెలుసుకోవాలనుకుంటున్నారు?",
      },
      options: ["How the man looked.", "What the man liked.", "Where the man went."],
      answer: 0,
      why: {
        en: "Look like asks about the face, the body and the clothes.",
        te: "look like అంటే మొహం, ఒళ్ళు, బట్టలు ఎలా ఉన్నాయని అడగడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Two man snatched my phone and ran away.",
      wrongIndex: 1,
      fix: "Two men snatched my phone and ran away.",
      why: {
        en: "After two, man changes to men; it never takes s.",
        te: "రెండు తర్వాత man కాదు men; దానికి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You call one zero zero. Say that someone took your bag.",
        te: "మీరు 100 కి ఫోన్ చేశారు. ఎవరో మీ బ్యాగ్ తీసుకెళ్ళారని చెప్పండి.",
      },
      expected: ["Someone stole my bag.", "Somebody stole my bag.", "Someone stole my bag. Please help."],
      options: ["Someone stole my bag.", "Somebody is stole my bag.", "My bag someone stole."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell the police the man was tall and had a helmet.",
        te: "ఆ మనిషి పొడుగ్గా ఉన్నారని, హెల్మెట్ పెట్టుకున్నారని పోలీసులకు చెప్పండి.",
      },
      expected: ["He was tall. He had a helmet.", "He was tall and had a helmet.", "He was tall, with a helmet."],
      options: ["He was tall. He had a helmet.", "He was tall. He had helmet.", "He tall. He had a helmet."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the police station", te: "పోలీస్ స్టేషన్‌లో" },
    scene: {
      en: "Someone stole your bag at the bus stand last night. You are at the police station. Sub-Inspector Anitha helps you.",
      te: "నిన్న రాత్రి బస్ స్టాండ్‌లో ఎవరో మీ బ్యాగ్ దొంగిలించారు. మీరు పోలీస్ స్టేషన్‌లో ఉన్నారు. సబ్-ఇన్స్‌పెక్టర్ అనిత సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Anitha (sub-inspector)", te: "అనిత (సబ్-ఇన్స్‌పెక్టర్)" },
    skills: [
      { id: "report", label: { en: "What happened", te: "ఏం జరిగిందో" } },
      { id: "describe", label: { en: "Describing", te: "ఎలా ఉన్నారో చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Good evening. Please sit down. What happened?",
        te: "నమస్కారం. కూర్చోండి. ఏం జరిగింది?",
        hint: { en: "Say what happened to your bag.", te: "మీ బ్యాగ్‌కి ఏం జరిగిందో చెప్పండి." },
        replies: [
          { say: "Someone stole my bag at the bus stand.", good: true, skill: "report" },
          { say: "Someone stealed my bag at the bus stand.", good: false, skill: "report" },
          {
            say: "My bag is gone! What are you police doing?",
            good: false,
            skill: "report",
            react: { en: "Please stay calm. We will help you. Tell me everything.", te: "కంగారు పడకండి. మేము సహాయం చేస్తాం. అంతా చెప్పండి." },
          },
        ],
      },
      {
        partner: "I see. Did you see the thief?",
        te: "అలాగా. దొంగను చూశారా?",
        hint: { en: "Say yes, and describe him in two short sentences.", te: "అవునని, రెండు చిన్న వాక్యాల్లో ఆయన ఎలా ఉన్నారో చెప్పండి." },
        replies: [
          { say: "Yes. He was young. He had a red cap.", good: true, skill: "describe" },
          { say: "Yes. He young. He had a red cap.", good: false, skill: "describe", fixIt: "be" },
        ],
      },
      {
        partner: "What was in the bag?",
        te: "బ్యాగ్‌లో ఏమేం ఉన్నాయి?",
        hint: { en: "Say what was in it: some money and a card.", te: "అందులో ఏమేం ఉన్నాయో చెప్పండి: కొంత డబ్బు, ఒక కార్డు." },
        replies: [
          { say: "My purse, 2,000 rupees and my Aadhaar card.", good: true, skill: "report" },
          { say: "My purse, 2,000 rupee and my Aadhaar card.", good: false, skill: "report", fixIt: "plural" },
        ],
      },
      {
        partner: "Okay. We will try to find him. Please sign here.",
        te: "సరే. ఆయన్ని పట్టుకోవడానికి ప్రయత్నిస్తాం. ఇక్కడ సంతకం చేయండి.",
        hint: { en: "Say okay, and thank her.", te: "సరే అని, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure. Thank you for your help, madam.", good: true, skill: "report" },
          { say: "Sure. But find it today itself, madam.", good: false, skill: "report", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
