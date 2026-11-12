import type { Lesson } from "../../types";

/** Week 45, Day 4 (CURRICULUM §5): superlatives review, recommending places — The best place to visit is Kondapalli Fort. */
export const day: Lesson = {
  id: "the-best-place-to-visit",
  kind: "lesson",
  title: { en: "The Best Place to Visit", te: "చూడదగ్గ ప్రదేశం" },
  subtitle: "the best …, the oldest …, the most …",
  summary: {
    en: "Learn to recommend places to a guest: The best place to visit is Kondapalli Fort. Go early, before it gets hot.",
    te: "అతిథికి చూడదగ్గ చోట్లు సూచించడం నేర్చుకుందాం: The best place to visit is Kondapalli Fort. Go early, before it gets hot.",
  },
  seo: {
    title: "Recommending Places in English for Telugu Speakers",
    description:
      "Say The best place to visit is Kondapalli Fort and Go early, before it gets hot. Simple lessons for Telugu speakers on showing guests around.",
  },
  pattern: [
    { text: "The best place to visit", role: "who" },
    { text: "is", role: "action" },
    { text: "Kondapalli Fort", role: "what" },
  ],
  core: [
    { en: "The best place to visit is Kondapalli Fort.", te: "చూడటానికి అన్నిటికంటే మంచి చోటు కొండపల్లి కోట.", extra: ["better"] },
    { en: "Go early, before it gets hot.", te: "ఎండ ఎక్కకముందే, పొద్దున్నే వెళ్ళండి.", extra: ["get"] },
    { en: "It's the oldest temple in our town.", te: "మా ఊర్లో అన్నిటికంటే పాత గుడి అదే.", extra: ["older"] },
    { en: "You must see the Kanaka Durga temple.", te: "కనకదుర్గ గుడి తప్పకుండా చూడండి.", extra: ["to"] },
    { en: "The view from the top is beautiful.", te: "పైనుంచి చూస్తే దృశ్యం చాలా అందంగా ఉంటుంది.", extra: ["are"] },
    { en: "The best time to visit is in winter.", te: "చూడటానికి అన్నిటికంటే మంచి సమయం చలికాలం." },
    { en: "It's the most famous place near Vijayawada.", te: "విజయవాడ దగ్గర అన్నిటికంటే పేరున్న చోటు అదే." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of the best place to visit in your town. Say it aloud: The best place to visit is …",
    te: "మీ ఊర్లో చూడటానికి అన్నిటికంటే మంచి చోటు ఏదో ఆలోచించండి. గట్టిగా చెప్పండి: The best place to visit is …",
  },
  words: [
    { en: "fort", te: "కోట" },
    { en: "view", te: "దృశ్యం, వ్యూ" },
    { en: "sightseeing", te: "చోట్లు చూడటం, సైట్‌సీయింగ్" },
    { en: "worth a visit", te: "ఒకసారి చూడదగ్గది" },
    { en: "the best time", te: "అన్నిటికంటే మంచి సమయం" },
  ],
  grammar: ["comparatives-superlatives", "articles", "imperatives"],
  topics: ["travel", "people", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The best place", te: "అన్నిటికంటే మంచి చోటు" },
      body: {
        en: "To recommend one place out of many, use the with -est or most: the oldest temple, the most famous place. Best is the -est form of good.",
        te: "చాలా వాటిలో ఒక చోటు సూచించాలంటే the తో -est లేదా most వాడండి: the oldest temple, the most famous place. good కి -est రూపం best.",
      },
      bridge: {
        te: ["చూడటానికి అన్నిటికంటే మంచి చోటు", "కొండపల్లి కోట"],
        en: [
          { text: "The best place to visit", role: "who" },
          { text: "is", role: "action" },
          { text: "Kondapalli Fort", role: "what" },
        ],
      },
      examples: [
        { en: "The best place to visit is Kondapalli Fort.", te: "చూడటానికి అన్నిటికంటే మంచి చోటు కొండపల్లి కోట." },
        { en: "It's the oldest temple in our town.", te: "మా ఊర్లో అన్నిటికంటే పాత గుడి అదే." },
        { en: "It's the most famous place near Vijayawada.", te: "విజయవాడ దగ్గర అన్నిటికంటే పేరున్న చోటు అదే." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Recommending a place", te: "ఒక చోటు సూచించడం" },
      items: [
        {
          form: "The best … is …",
          useFor: { en: "Your first choice.", te: "మీ మొదటి ఎంపిక చెప్పడానికి." },
          example: { en: "The best time to visit is in winter.", te: "చూడటానికి అన్నిటికంటే మంచి సమయం చలికాలం." },
        },
        {
          form: "You must see …",
          useFor: { en: "Something a visitor should not miss.", te: "వచ్చినవారు మిస్ కాకూడనిది చెప్పడానికి." },
          example: { en: "You must see the Kanaka Durga temple.", te: "కనకదుర్గ గుడి తప్పకుండా చూడండి." },
        },
        {
          form: "… is worth a visit.",
          useFor: { en: "Good enough to go and see.", te: "వెళ్ళి చూడదగ్గది అని చెప్పడానికి." },
          example: { en: "Bhavani Island is worth a visit.", te: "భవానీ ఐలాండ్ ఒకసారి చూడదగ్గది." },
        },
        {
          form: "Go early. / Take water.",
          useFor: { en: "A useful tip.", te: "ఉపయోగపడే ఒక సలహా." },
          example: { en: "Go early, before it gets hot.", te: "ఎండ ఎక్కకముందే, పొద్దున్నే వెళ్ళండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Kondapalli Fort is best place to visit.",
      right: "Kondapalli Fort is the best place to visit.",
      why: {
        en: "Best and most always need the before them; Telugu has no word like the.",
        te: "best, most ముందు ఎప్పుడూ the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Kondapalli is near to Vijayawada.",
      right: "Kondapalli is near Vijayawada.",
      why: {
        en: "Near already means దగ్గర, so it needs no to after it.",
        te: "near అంటేనే 'దగ్గర'; దాని తర్వాత to అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "A guest wants to see the fort. Give a tip about the heat.",
        te: "ఒక అతిథి కోట చూడాలనుకుంటున్నారు. ఎండ గురించి ఒక సలహా ఇవ్వండి.",
      },
      options: ["Go early, before it gets hot.", "Go early, before it get hot.", "Go early, before it will get hot."],
      answer: 0,
      why: {
        en: "After before, use the present, not will; it is one thing, so the verb takes s.",
        te: "before తర్వాత will కాదు, ఇప్పటి కాలం; it ఒక్కటే కాబట్టి verb కి s వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It's the ___ temple in our town.",
      te: "మా ఊర్లో అన్నిటికంటే పాత గుడి అదే.",
      options: ["oldest", "older", "more old"],
      answer: 0,
      why: {
        en: "For one out of many, a short word takes -est after the.",
        te: "చాలా వాటిలో ఒక్కటి అయితే, చిన్న పదానికి the తర్వాత -est వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Heritage Walk This Sunday",
      lines: [
        "Come and see the oldest places in our town.",
        "The walk starts at the clock tower at 6:30 am.",
        "It ends at the old library at 8:30 am.",
        "The walk is free for everyone.",
        "Please wear comfortable shoes and carry water.",
        "Senior citizens can join the short walk.",
        "To join, please speak to Usha at the library.",
      ],
      questions: [
        {
          prompt: { en: "Where does the walk start?", te: "నడక ఎక్కడ మొదలవుతుంది?" },
          options: ["At the clock tower", "At the old library", "At the temple"],
          answer: 0,
          why: {
            en: "The second line gives the place and the time it starts.",
            te: "రెండో లైన్‌లో నడక ఎక్కడ, ఎప్పుడు మొదలవుతుందో ఉంది.",
          },
        },
        {
          prompt: { en: "How much does the walk cost?", te: "నడకకి ఎంత ఖర్చవుతుంది?" },
          options: ["Nothing, it is free", "Twenty rupees", "Fifty rupees"],
          answer: 0,
          why: {
            en: "The fourth line says anyone can join without paying.",
            te: "నాలుగో లైన్‌లో, ఎవరైనా డబ్బు కట్టకుండా రావొచ్చని ఉంది.",
          },
        },
        {
          prompt: { en: "What should you take with you?", te: "మీతో ఏం తీసుకెళ్ళాలి?" },
          options: ["Water", "An umbrella", "A ticket"],
          answer: 0,
          why: {
            en: "The notice asks you to wear good shoes and carry something to drink.",
            te: "మంచి చెప్పులు వేసుకుని, తాగడానికి ఏదైనా తెచ్చుకోమని నోటీసులో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "You must to see the Kanaka Durga temple.",
      wrongIndex: 2,
      fix: "You must see the Kanaka Durga temple.",
      why: {
        en: "After must, the verb comes straight, with no to.",
        te: "must తర్వాత to లేకుండా verb నేరుగా వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A guest asks you for the best place to visit. Recommend Kondapalli Fort.",
        te: "చూడటానికి మంచి చోటు ఏదని ఒక అతిథి అడుగుతున్నారు. కొండపల్లి కోట సూచించండి.",
      },
      expected: [
        "The best place to visit is Kondapalli Fort.",
        "Kondapalli Fort is the best place to visit.",
        "You must see Kondapalli Fort.",
        "Kondapalli Fort.",
      ],
      options: ["The best place to visit is Kondapalli Fort.", "Best place to visit is Kondapalli Fort.", "The most best place is Kondapalli Fort."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your guest asks when to go to the fort. It gets very hot by noon. Give a tip.",
        te: "కోటకి ఎప్పుడు వెళ్ళాలని మీ అతిథి అడుగుతున్నారు. మధ్యాహ్నానికి బాగా ఎండ ఎక్కుతుంది. ఒక సలహా ఇవ్వండి.",
      },
      expected: ["Go early, before it gets hot.", "Go early in the morning.", "Please go early in the morning.", "Go early, before it gets too hot."],
      options: ["Go early, before it gets hot.", "Go early, before it is getting hot.", "Go at noon, when it gets hot."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "What should I see?", te: "ఏం చూడాలి?" },
    scene: {
      en: "Rahim, a friend's cousin from Hyderabad, is in Vijayawada for two days. He asks you what to see.",
      te: "మీ స్నేహితుడి కజిన్ రహీం గారు హైదరాబాద్ నుంచి రెండు రోజులకి విజయవాడ వచ్చారు. ఏం చూడాలని మిమ్మల్ని అడుగుతున్నారు.",
    },
    partner: { en: "Rahim (a guest)", te: "రహీం (అతిథి)" },
    voice: "b",
    skills: [
      { id: "recommend", label: { en: "Recommending places", te: "చోట్లు సూచించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I have two free days for sightseeing. What should I see?",
        te: "గుడ్ మార్నింగ్! చోట్లు చూడటానికి నాకు రెండు రోజులు ఖాళీ ఉంది. ఏం చూడాలి?",
        hint: { en: "Recommend the fort first.", te: "ముందు కోట చూడమని సూచించండి." },
        replies: [
          { say: "The best place to visit is Kondapalli Fort.", good: true, skill: "recommend" },
          { say: "You must see Kondapalli Fort.", good: true, skill: "recommend" },
          { say: "Best place to visit is Kondapalli Fort.", good: false, skill: "recommend", fixIt: "article" },
        ],
      },
      {
        partner: "Great. When is the best time to go?",
        te: "బాగుంది. వెళ్ళడానికి మంచి టైమ్ ఏది?",
        hint: { en: "Tell him to go in the morning, and say why.", te: "పొద్దున వెళ్ళమని చెప్పి, ఎందుకో చెప్పండి." },
        replies: [
          { say: "Go early, before it gets hot.", good: true, skill: "recommend" },
          { say: "Go early, before it get hot.", good: false, skill: "recommend", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "And what else? Any temples?",
        te: "ఇంకా ఏమున్నాయి? గుళ్ళు ఏమైనా?",
        hint: { en: "Tell him about the Kanaka Durga temple on the hill.", te: "కొండ మీద ఉన్న కనకదుర్గ గుడి గురించి చెప్పండి." },
        replies: [
          { say: "You must see the Kanaka Durga temple on the hill.", good: true, skill: "recommend" },
          {
            say: "Temples are everywhere. Find one yourself.",
            good: false,
            skill: "polite",
            react: { en: "Oh. Okay, I'll ask someone else.", te: "ఓ. సరే, ఇంకెవరినైనా అడుగుతాను." },
          },
        ],
      },
      {
        partner: "Thank you so much. This is very useful.",
        te: "చాలా థాంక్స్. ఇది చాలా ఉపయోగపడుతుంది.",
        hint: { en: "Answer his thanks, and wish him a good time in the city.", te: "ఆయన థాంక్స్‌కి జవాబిచ్చి, ఊర్లో బాగా గడపమని చెప్పండి." },
        replies: [
          { say: "You're welcome. Enjoy Vijayawada!", good: true, skill: "polite" },
          { say: "You're welcome. Enjoy in Vijayawada!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
