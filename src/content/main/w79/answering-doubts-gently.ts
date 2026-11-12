import type { Lesson } from "../../types";

/** Week 79, Day 4 (CURRICULUM §5): answering doubts gently — I understand, but why not try it once? What if I come with you? */
export const day: Lesson = {
  id: "answering-doubts-gently",
  kind: "lesson",
  title: { en: "I Understand, But", te: "మీరు చెప్పేది అర్థమైంది, కానీ" },
  subtitle: "I understand, but … / What if …? / Why not …?",
  summary: {
    en: "Learn to answer a friend's worry gently: I understand, but why not try it once? What if I come with you the first time?",
    te: "స్నేహితుల భయాన్ని మెల్లగా తీర్చడం నేర్చుకుందాం: I understand, but why not try it once? What if I come with you the first time?",
  },
  seo: {
    title: "Answering Doubts Gently in English for Telugu Speakers",
    description:
      "Say I understand, but why not try it once? and What if I come with you? Simple lessons for Telugu speakers on calming a friend's worry.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "understand,", role: "action" },
    { text: "but why not try it", role: "what" },
    { text: "once?", role: "when" },
  ],
  core: [
    { en: "I understand, but why not try it once?", te: "మీరు చెప్పేది అర్థమైంది, కానీ ఒక్కసారి try చేయొచ్చు కదా?", extra: ["trying"] },
    { en: "What if I come with you the first time?", te: "మొదటిసారి నేను మీతో వస్తే ఎలా ఉంటుంది?", extra: ["will"] },
    { en: "I understand. It's normal to feel nervous.", te: "అర్థమైంది. కంగారుగా అనిపించడం మామూలే.", extra: ["feeling"] },
    { en: "Don't worry, it's very safe.", te: "కంగారు పడకండి, ఇది చాలా సురక్షితం.", extra: ["safely"] },
    { en: "Only you know your PIN, so your money is safe.", te: "PIN మీకు ఒక్కరికే తెలుసు, అందుకే మీ డబ్బు సురక్షితం.", extra: ["knows"] },
    { en: "I have been using UPI for two years now.", te: "రెండేళ్ళుగా నేను UPI వాడుతున్నాను.", extra: ["since"] },
    { en: "If you don't like it, you can always pay cash.", te: "మీకు నచ్చకపోతే, ఎప్పుడైనా cash ఇవ్వొచ్చు.", extra: ["didn't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "If someone near you is worried about something new today, answer kindly: I understand, but …",
    te: "ఈ రోజు మీ దగ్గర ఎవరైనా ఏదైనా కొత్త విషయం గురించి భయపడితే, మర్యాదగా జవాబు చెప్పండి: I understand, but …",
  },
  words: [
    { en: "I understand, but", te: "మీరు చెప్పేది అర్థమైంది, కానీ" },
    { en: "why not", te: "… చేయొచ్చు కదా?" },
    { en: "doubt", te: "అనుమానం" },
    { en: "convince", te: "నమ్మకం కలిగించి ఒప్పించడం" },
    { en: "no pressure", te: "బలవంతం ఏమీ లేదు" },
  ],
  grammar: ["conditionals", "present-perfect-continuous", "politeness-softening"],
  topics: ["technology", "money", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Answering a worry kindly", te: "భయాన్ని మెల్లగా తీర్చడం" },
      body: {
        en: "When a friend has a doubt, first show you understand: I understand, but … Then make it easy: Why not try it once? What if I come with you?",
        te: "స్నేహితులకి అనుమానం ఉంటే, ముందు వాళ్ళ భయం అర్థమైందని చెప్పండి: I understand, but … తర్వాత పని తేలిక చేయండి: Why not try it once? What if I come with you?",
      },
      bridge: {
        te: ["అర్థమైంది,", "కానీ", "ఒక్కసారి", "try చేయొచ్చు కదా?"],
        en: [
          { text: "I", role: "who" },
          { text: "understand,", role: "action" },
          { text: "but why not try it", role: "what" },
          { text: "once?", role: "when" },
        ],
      },
      examples: [
        { en: "I understand, but why not try it once?", te: "మీరు చెప్పేది అర్థమైంది, కానీ ఒక్కసారి try చేయొచ్చు కదా?" },
        { en: "What if I come with you the first time?", te: "మొదటిసారి నేను మీతో వస్తే ఎలా ఉంటుంది?" },
        { en: "I understand. It's normal to feel nervous.", te: "అర్థమైంది. కంగారుగా అనిపించడం మామూలే." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Making it easy", te: "తేలిక చేసే మాటలు" },
      items: [
        {
          form: "I understand, but …",
          useFor: { en: "Show you heard the worry first.", te: "ముందు వాళ్ళ భయం విన్నారని చూపించడానికి." },
          example: { en: "I understand, but why not try it once?", te: "మీరు చెప్పేది అర్థమైంది, కానీ ఒక్కసారి try చేయొచ్చు కదా?" },
        },
        {
          form: "Why not + verb?",
          useFor: { en: "Suggest trying, with the plain verb.", te: "ప్రయత్నించమని సూచించడానికి; verb అలాగే వస్తుంది." },
          example: { en: "Why not try it with a small amount?", te: "చిన్న amount తో try చేయొచ్చు కదా?" },
        },
        {
          form: "What if I …?",
          useFor: { en: "Offer your help.", te: "మీ సాయం అందించడానికి." },
          example: { en: "What if I come with you the first time?", te: "మొదటిసారి నేను మీతో వస్తే ఎలా ఉంటుంది?" },
        },
        {
          form: "No pressure.",
          useFor: { en: "Say your friend is free to decide.", te: "నిర్ణయం వాళ్ళదే అని చెప్పడానికి." },
          example: { en: "No pressure. Think about it and tell me.", te: "బలవంతం ఏమీ లేదు. ఆలోచించుకుని చెప్పండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am using UPI since two years.",
      right: "I have been using UPI for two years.",
      why: {
        en: "From the past up to now needs have been + -ing, and two years takes for.",
        te: "గతం నుంచి ఇప్పటిదాకా అంటే have been + -ing; ఎంతకాలం అనేదానికి since కాదు, for.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Kindly try it once.",
      right: "Please try it once.",
      why: {
        en: "In speech, kindly sounds like an office order; with a friend, say please.",
        te: "మాటల్లో kindly ఆఫీసు ఆర్డర్ లాగా వినిపిస్తుంది; స్నేహితులతో please అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Your friend Rahim says UPI is not safe. You are sure it is safe. What do you say?",
        te: "UPI సురక్షితం కాదని మీ స్నేహితుడు రహీమ్ గారు అంటున్నారు. అది సురక్షితమని మీకు గట్టిగా తెలుసు. ఏమంటారు?",
      },
      options: ["I understand, but I know it's safe.", "I understand, but I am knowing it's safe.", "I understanding, but I know it's safe."],
      answer: 0,
      why: {
        en: "Know is something in the mind, not an action, so it never takes -ing.",
        te: "know అనేది మనసులో ఉండే స్థితి, పని కాదు; అందుకే దానికి -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "What if I ___ with you the first time?",
      te: "మొదటిసారి నేను మీతో వస్తే ఎలా ఉంటుంది?",
      options: ["come", "will come", "coming"],
      answer: 0,
      why: {
        en: "After What if, use the present, just as after if; will does not come here.",
        te: "What if తర్వాత, if తర్వాత లాగానే, present వాడాలి; ఇక్కడ will రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: I'm not sure about this new thing. Which answer is kind?",
        te: "ఈ కొత్త విషయం మీద నాకు నమ్మకం లేదు అని స్నేహితులు అన్నారు. ఏ జవాబు మర్యాదగా ఉంది?",
      },
      options: ["I understand. No pressure. Think about it.", "You are too old for new things. Leave it.", "Everyone can do it. Why are you so slow?"],
      answer: 0,
      why: {
        en: "I understand shows respect, and No pressure lets your friend decide.",
        te: "I understand గౌరవం చూపిస్తుంది; No pressure అంటే నిర్ణయం స్నేహితులకే వదిలేస్తారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Just scan QR code and enter the amount.",
      wrongIndex: 2,
      fix: "Just scan the QR code and enter the amount.",
      why: {
        en: "The code in front of you takes the; Telugu has no word like the.",
        te: "ఎదురుగా కనిపిస్తున్న code కాబట్టి ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend asks how long you have used UPI. You started two years ago.",
        te: "మీరు ఎంతకాలంగా UPI వాడుతున్నారని స్నేహితులు అడుగుతున్నారు. మీరు రెండేళ్ళ క్రితం మొదలుపెట్టారు.",
      },
      expected: ["I have been using UPI for two years.", "I've been using it for two years.", "I've been using UPI for two years now."],
      options: ["I have been using UPI for two years.", "I am using UPI since two years.", "I have been using UPI since two years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour Geetha is nervous about her first video call. Offer to sit with her the first time.",
        te: "పక్కింటావిడ గీత గారికి మొదటి video call అంటే కంగారుగా ఉంది. మొదటిసారి ఆవిడ పక్కన కూర్చుంటానని చెప్పండి.",
      },
      expected: ["What if I sit with you the first time?", "Don't worry. I can sit with you the first time.", "What if I help you the first time?"],
      options: ["What if I sit with you the first time?", "What if I will sit with you the first time?", "You are scared of a phone? That's funny."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Afraid of UPI", te: "UPI అంటే భయం" },
    scene: {
      en: "Your friend Raju always carries cash. The kirana shop near you takes UPI, and you pay that way every day.",
      te: "మీ స్నేహితుడు రాజు గారు ఎప్పుడూ cash పట్టుకెళ్తారు. మీ దగ్గర్లోని కిరాణా షాపులో UPI తీసుకుంటారు, మీరు రోజూ అలాగే కడతారు.",
    },
    partner: { en: "Raju (your friend)", te: "రాజు (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "doubts", label: { en: "Answering doubts", te: "అనుమానాలు తీర్చడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Everyone at the shop pays by phone now. I still carry cash.",
        te: "షాపులో అందరూ ఇప్పుడు ఫోన్‌తోనే కడుతున్నారు. నేను ఇంకా cash తీసుకెళ్తున్నాను.",
        hint: { en: "Say UPI is easy, and suggest he tries it once.", te: "UPI తేలిక అని చెప్పి, ఒక్కసారి try చేయమని సూచించండి." },
        replies: [
          { say: "UPI is very easy. Why not try it once?", good: true, skill: "doubts" },
          { say: "You should really try UPI. It's very easy.", good: true, skill: "doubts" },
          { say: "UPI very easy. Why not try it once?", good: false, skill: "doubts", fixIt: "be" },
        ],
      },
      {
        partner: "But what if someone steals my money?",
        te: "కానీ ఎవరైనా నా డబ్బు కొట్టేస్తే?",
        hint: { en: "Say you understand, and explain that only he knows his PIN.", te: "అర్థమైందని చెప్పి, PIN ఆయనకి ఒక్కరికే తెలుసని వివరించండి." },
        replies: [
          { say: "I understand, but only you know your PIN. Never share it.", good: true, skill: "doubts" },
          {
            say: "Don't be silly. Nobody wants your money.",
            good: false,
            skill: "polite",
            react: { en: "Silly? It's my hard-earned money!", te: "సిల్లీనా? అది నేను కష్టపడి సంపాదించిన డబ్బు!" },
          },
        ],
      },
      {
        partner: "Okay. But I'm still nervous. What if I press the wrong button?",
        te: "సరే. కానీ ఇంకా భయంగానే ఉంది. తప్పు button నొక్కితే?",
        hint: { en: "Say you understand, and offer to go with him the first time.", te: "అర్థమైందని చెప్పి, మొదటిసారి ఆయనతో వెళ్తానని చెప్పండి." },
        replies: [
          { say: "I understand. What if I come with you the first time?", good: true, skill: "doubts" },
          { say: "I understand. What if I will come with you the first time?", good: false, skill: "doubts" },
        ],
      },
      {
        partner: "That would really help. Thank you, my friend!",
        te: "అది చాలా సాయం అవుతుంది. థాంక్యూ మిత్రమా!",
        hint: { en: "Say it is no trouble, and fix a time for this evening.", te: "ఇబ్బంది ఏమీ లేదని చెప్పి, ఈ సాయంత్రానికి టైమ్ ఖాయం చేయండి." },
        replies: [
          { say: "No trouble at all. Let's go this evening.", good: true, skill: "polite" },
          { say: "No trouble at all. Let's go today evening.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
