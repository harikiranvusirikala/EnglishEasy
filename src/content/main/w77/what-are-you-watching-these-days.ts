import type { Lesson } from "../../types";

/** Week 77, Day 4 (CURRICULUM §5): serial and OTT words; the present continuous for these days — I'm watching an old serial on YouTube. */
export const day: Lesson = {
  id: "what-are-you-watching-these-days",
  kind: "lesson",
  title: { en: "What Are You Watching These Days?", te: "ఈ మధ్య ఏం చూస్తున్నారు?" },
  subtitle: "these days, episodes and OTT",
  summary: {
    en: "Learn to talk about what you watch now: I'm watching an old Telugu serial on YouTube these days. A new episode comes out every Friday.",
    te: "ఈ మధ్య మీరు ఏం చూస్తున్నారో చెప్పడం నేర్చుకుందాం: I'm watching an old Telugu serial on YouTube these days. A new episode comes out every Friday.",
  },
  seo: {
    title: "Talking About Serials and OTT in English for Telugu Speakers",
    description:
      "Say I'm watching an old serial on YouTube these days and A new episode comes out every Friday. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "watching", role: "action" },
    { text: "an old serial", role: "what" },
    { text: "these days", role: "when" },
  ],
  core: [
    { en: "What are you watching these days?", te: "ఈ మధ్య మీరు ఏం చూస్తున్నారు?", extra: ["do"] },
    { en: "I'm watching an old Telugu serial on YouTube these days.", te: "ఈ మధ్య YouTube లో ఒక పాత తెలుగు సీరియల్ చూస్తున్నాను.", extra: ["in"] },
    { en: "A new episode comes out every Friday.", te: "ప్రతి శుక్రవారం ఒక కొత్త ఎపిసోడ్ వస్తుంది.", extra: ["come"] },
    { en: "Is it on TV or on an OTT app?", te: "అది TV లో వస్తుందా, OTT app లోనా?", extra: ["in"] },
    { en: "I usually watch two episodes after dinner.", te: "మామూలుగా రాత్రి భోజనం తర్వాత రెండు ఎపిసోడ్లు చూస్తాను.", extra: ["episode"] },
    { en: "This web series has three seasons, and I've seen two.", te: "ఈ web series కి మూడు సీజన్లు ఉన్నాయి, రెండు చూశాను.", extra: ["saw"] },
    { en: "You can watch it free on their YouTube channel.", te: "వాళ్ళ YouTube channel లో అది ఫ్రీగా చూడొచ్చు.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a friend or neighbour today: What are you watching these days?",
    te: "ఈ రోజు ఒక స్నేహితుడిని లేదా పక్కింటివారిని అడగండి: What are you watching these days?",
  },
  words: [
    { en: "OTT", te: "OTT, ఇంటర్నెట్‌లో సినిమాలు, సీరియల్స్ చూపించే app" },
    { en: "YouTube", te: "యూట్యూబ్" },
    { en: "web series", te: "వెబ్ సిరీస్, ఇంటర్నెట్ సీరియల్" },
    { en: "channel", te: "ఛానల్" },
    { en: "comes out", te: "విడుదల అవుతుంది, వస్తుంది" },
  ],
  grammar: ["present-continuous", "present-simple", "present-perfect"],
  topics: ["technology", "home", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "These days and every Friday", te: "ఈ మధ్య, ప్రతి శుక్రవారం" },
      body: {
        en: "For something you are doing for a few weeks, use am, is, are + -ing with these days. For a fixed timetable, use the plain verb: It comes out every Friday.",
        te: "కొన్ని వారాలుగా చేస్తున్న పనికి these days తో am, is, are + -ing. ఖాయమైన టైమ్‌టేబుల్‌కి మామూలు verb: It comes out every Friday.",
      },
      bridge: {
        te: ["ఈ మధ్య", "ఒక పాత సీరియల్", "చూస్తున్నాను"],
        en: [
          { text: "I'm", role: "who" },
          { text: "watching", role: "action" },
          { text: "an old serial", role: "what" },
          { text: "these days", role: "when" },
        ],
      },
      examples: [
        { en: "What are you watching these days?", te: "ఈ మధ్య మీరు ఏం చూస్తున్నారు?" },
        { en: "I'm watching an old Telugu serial on YouTube these days.", te: "ఈ మధ్య YouTube లో ఒక పాత తెలుగు సీరియల్ చూస్తున్నాను." },
        { en: "A new episode comes out every Friday.", te: "ప్రతి శుక్రవారం ఒక కొత్త ఎపిసోడ్ వస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words for watching", te: "చూడటానికి సంబంధించిన మాటలు" },
      items: [
        {
          form: "an episode",
          useFor: { en: "One part of a serial or show.", te: "సీరియల్‌లో లేదా షోలో ఒక భాగం." },
          example: { en: "I missed yesterday's episode.", te: "నిన్నటి ఎపిసోడ్ మిస్ అయ్యాను." },
        },
        {
          form: "a season",
          useFor: { en: "A set of episodes, often one year of a show.", te: "కొన్ని ఎపిసోడ్ల సెట్, చాలాసార్లు ఒక ఏడాది షో." },
          example: { en: "The second season starts next month.", te: "రెండో సీజన్ వచ్చే నెల మొదలవుతుంది." },
        },
        {
          form: "on YouTube, on an OTT app",
          useFor: { en: "Shows on a phone or smart TV: say on, not in.", te: "ఫోన్‌లో, smart TV లో చూసే షోలు: in కాదు, on అనాలి." },
          example: { en: "My friend watches cooking shows on YouTube.", te: "నా స్నేహితురాలు YouTube లో వంట షోలు చూస్తారు." },
        },
        {
          form: "comes out",
          useFor: { en: "When a new film or episode is first shown.", te: "కొత్త సినిమా లేదా ఎపిసోడ్ మొదటిసారి వచ్చేది." },
          example: { en: "The film comes out at Sankranti.", te: "ఆ సినిమా సంక్రాంతికి విడుదల అవుతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am knowing all the songs of this serial.",
      right: "I know all the songs of this serial.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing, even these days.",
        te: "know ఒక స్థితి, పని కాదు; అందుకే these days అయినా దానికి -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "A new episode come out every Friday.",
      right: "A new episode comes out every Friday.",
      why: {
        en: "One episode works like he or she, so the verb takes s.",
        te: "ఒక ఎపిసోడ్ he, she లాంటిదే, అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your friend asks what you're watching these days. What do you say?",
        te: "ఈ మధ్య ఏం చూస్తున్నారని స్నేహితులు అడుగుతున్నారు. ఏమంటారు?",
      },
      options: ["I'm watching a cooking show on YouTube.", "I watching a cooking show on YouTube.", "I'm watching a cooking show in YouTube."],
      answer: 0,
      why: {
        en: "These days takes am with -ing, and shows are on YouTube, not in.",
        te: "ఈ మధ్య చేస్తున్న పనికి am తో -ing; YouTube కి in కాదు, on.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "My friend Ruth ___ two episodes every night.",
      te: "నా స్నేహితురాలు రూత్ గారు ప్రతి రాత్రి రెండు ఎపిసోడ్లు చూస్తారు.",
      options: ["watches", "watch", "watching"],
      answer: 0,
      why: {
        en: "Every night is a habit, and Ruth is like she, so add -es.",
        te: "ప్రతి రాత్రి అంటే అలవాటు; రూత్ she లాంటిది, అందుకే -es చేర్చాలి.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Imran",
      lines: ["Hi! Season 2 of Village Doctor is out today.", "All ten episodes are on the OTT app now.", "Episode 1 is free. Watch it tonight!"],
      prompt: {
        en: "Imran sent you this message. How many episodes does season 2 have?",
        te: "ఇమ్రాన్ గారు మీకు ఈ మెసేజ్ పంపారు. సీజన్ 2 లో ఎన్ని ఎపిసోడ్లు ఉన్నాయి?",
      },
      options: ["Ten", "Two", "One"],
      answer: 0,
      why: {
        en: "The second line says all ten episodes are on the app already.",
        te: "రెండో లైన్‌లో పది ఎపిసోడ్లూ ఇప్పటికే app లో ఉన్నాయని ఉంది.",
      },
      say: "All ten episodes are on the OTT app now.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "duration",
      sentence: "I am watching this serial since March.",
      wrongIndex: 1,
      fix: "I have been watching this serial since March.",
      why: {
        en: "Since March means from then up to now, so English needs have been with -ing.",
        te: "since March అంటే అప్పటి నుంచి ఇప్పటిదాకా, అందుకే have been తో -ing కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A friend at the tea stall asks what you are watching these days. Tell him about an old Telugu serial.",
        te: "ఈ మధ్య ఏం చూస్తున్నారని టీ కొట్టు దగ్గర ఒక స్నేహితుడు అడుగుతున్నారు. ఒక పాత తెలుగు సీరియల్ గురించి చెప్పండి.",
      },
      expected: ["I'm watching an old Telugu serial these days.", "I'm watching an old serial on YouTube these days.", "These days I'm watching an old Telugu serial."],
      options: ["I'm watching an old Telugu serial these days.", "I am watch an old Telugu serial these days.", "I watching an old Telugu serial these days."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend asks how long you have been watching the serial. You started three months ago.",
        te: "ఆ సీరియల్ ఎంతకాలంగా చూస్తున్నారని స్నేహితులు అడుగుతున్నారు. మీరు మూడు నెలల క్రితం మొదలుపెట్టారు.",
      },
      expected: ["I've been watching it for three months.", "I have been watching it for three months.", "For three months."],
      options: ["I've been watching it for three months.", "I'm watching it since three months.", "I watching it for three months."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the tea stall", te: "టీ కొట్టు దగ్గర" },
    scene: {
      en: "You meet your friend Ayesha at the tea stall in the evening, as usual.",
      te: "ఎప్పటిలాగే సాయంత్రం టీ కొట్టు దగ్గర మీ స్నేహితురాలు ఆయేషా గారిని కలిశారు.",
    },
    partner: { en: "Ayesha (your friend)", te: "ఆయేషా (మీ స్నేహితురాలు)" },
    skills: [
      { id: "watching", label: { en: "Talking about what you watch", te: "మీరు చూసేవాటి గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Two teas, please. So, what are you watching these days?",
        te: "హలో! రెండు టీలు ప్లీజ్. అయితే, ఈ మధ్య ఏం చూస్తున్నారు?",
        hint: { en: "Tell her about the old serial you watch on YouTube now.", te: "ఇప్పుడు మీరు YouTube లో చూస్తున్న పాత సీరియల్ గురించి చెప్పండి." },
        replies: [
          { say: "I'm watching an old Telugu serial on YouTube.", good: true, skill: "watching" },
          { say: "I watching an old Telugu serial on YouTube.", good: false, skill: "watching", fixIt: "be" },
        ],
      },
      {
        partner: "On YouTube? When does a new episode come out?",
        te: "YouTube లోనా? కొత్త ఎపిసోడ్ ఎప్పుడు వస్తుంది?",
        hint: { en: "Say a new one comes every Friday.", te: "ప్రతి శుక్రవారం కొత్తది వస్తుందని చెప్పండి." },
        replies: [
          { say: "A new episode comes out every Friday.", good: true, skill: "watching" },
          { say: "A new episode come out every Friday.", good: false, skill: "watching", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "I don't know how to use YouTube on my phone.",
        te: "నాకు ఫోన్‌లో YouTube ఎలా వాడాలో తెలీదు.",
        hint: { en: "Offer kindly to show her how.", te: "ఎలా వాడాలో చూపిస్తానని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "It's easy. I can show you after tea.", good: true, skill: "polite" },
          {
            say: "What? Everyone knows that! It's so easy.",
            good: false,
            skill: "polite",
            react: { en: "Not everyone knows. I'm still learning.", te: "అందరికీ తెలీదండీ. నేను ఇంకా నేర్చుకుంటున్నాను." },
          },
        ],
      },
      {
        partner: "Thank you! Then tomorrow I'll start your serial too.",
        te: "థాంక్స్! అయితే రేపటి నుంచి నేను కూడా మీ సీరియల్ మొదలుపెడతాను.",
        hint: { en: "Say you are glad, and tell her to start from episode one.", te: "సంతోషమని చెప్పి, మొదటి ఎపిసోడ్ నుంచి మొదలుపెట్టమని చెప్పండి." },
        replies: [
          { say: "Wonderful! Start from the first episode.", good: true, skill: "polite" },
          { say: "Wonderful! Start from first episode.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
