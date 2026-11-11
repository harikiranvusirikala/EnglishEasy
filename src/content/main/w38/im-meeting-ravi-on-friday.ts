import type { Lesson } from "../../types";

/** Week 38, Day 3 (CURRICULUM §4): the present continuous for fixed plans — I'm meeting Ravi on Friday. */
export const day: Lesson = {
  id: "im-meeting-ravi-on-friday",
  kind: "lesson",
  title: { en: "I'm Meeting Ravi on Friday", te: "శుక్రవారం రవిని కలుస్తున్నాను" },
  subtitle: "I'm meeting … on …",
  summary: {
    en: "Learn to talk about plans you have already fixed: I'm meeting Ravi on Friday. We're going to the cinema.",
    te: "ఖాయం చేసుకున్న ప్లాన్ల గురించి చెప్పడం నేర్చుకుందాం: I'm meeting Ravi on Friday. We're going to the cinema.",
  },
  seo: {
    title: "Talking About Fixed Plans in English for Telugu Speakers",
    description:
      "Say I'm meeting Ravi on Friday and We're going to the cinema. Simple lessons for Telugu speakers on plans with a day and a time.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "meeting", role: "action" },
    { text: "Ravi", role: "what" },
    { text: "on Friday", role: "when" },
  ],
  core: [
    { en: "I'm meeting Ravi on Friday.", te: "శుక్రవారం రవిని కలుస్తున్నాను.", extra: ["meet"] },
    { en: "We're going to the cinema on Saturday.", te: "శనివారం మేము సినిమాకి వెళ్తున్నాం.", extra: ["in"] },
    { en: "What are you doing on Sunday?", te: "ఆదివారం మీరు ఏం చేస్తున్నారు?", extra: ["do"] },
    { en: "I'm visiting a sick friend tomorrow.", te: "రేపు ఒంట్లో బాగాలేని ఒక స్నేహితుడిని చూడటానికి వెళ్తున్నాను.", extra: ["visit"] },
    { en: "The evening show starts at half past six.", te: "సాయంత్రం షో ఆరున్నరకి మొదలవుతుంది.", extra: ["start"] },
    { en: "Are you free on Saturday evening?", te: "శనివారం సాయంత్రం మీరు ఖాళీగా ఉన్నారా?", extra: ["Do"] },
    { en: "I'm picking you up at six.", te: "ఆరింటికి నేను మిమ్మల్ని పికప్ చేసుకుంటాను.", extra: ["pick"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say one plan for this week aloud: I'm … on …",
    te: "ఈ వారం మీ ఒక ప్లాన్‌ని గట్టిగా చెప్పండి: I'm … on …",
  },
  words: [
    { en: "cinema", te: "సినిమా హాల్" },
    { en: "show", te: "షో, ఆట" },
    { en: "calendar", te: "క్యాలెండర్" },
    { en: "get-together", te: "అందరూ కలవడం, గెట్-టుగెదర్" },
    { en: "pick up", te: "పికప్ చేసుకోవడం, తీసుకెళ్ళడం" },
  ],
  grammar: ["present-continuous", "prepositions"],
  topics: ["people", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Plans you have fixed", te: "ఖాయమైన ప్లాన్లు" },
      body: {
        en: "You know am, is, are + -ing for now. Use it also for a plan already fixed, with a day or a time: I'm meeting Ravi on Friday.",
        te: "ఇప్పుడు జరుగుతున్న పనికి am, is, are + -ing అని మీకు తెలుసు. రోజు, టైమ్ ఖాయమైన ప్లాన్‌కి కూడా ఇదే వాడతారు: I'm meeting Ravi on Friday.",
      },
      bridge: {
        te: ["శుక్రవారం", "రవిని", "కలుస్తున్నాను"],
        en: [
          { text: "I'm", role: "who" },
          { text: "meeting", role: "action" },
          { text: "Ravi", role: "what" },
          { text: "on Friday", role: "when" },
        ],
      },
      examples: [
        { en: "I'm meeting Ravi on Friday.", te: "శుక్రవారం రవిని కలుస్తున్నాను." },
        { en: "We're going to the cinema on Saturday.", te: "శనివారం మేము సినిమాకి వెళ్తున్నాం." },
        { en: "What are you doing on Sunday?", te: "ఆదివారం మీరు ఏం చేస్తున్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Plan or timetable?", te: "ప్లానా, టైమ్‌టేబులా?" },
      items: [
        {
          form: "I'm + -ing + day",
          useFor: { en: "A plan you have fixed with someone.", te: "ఎవరితోనైనా ఖాయం చేసుకున్న ప్లాన్." },
          example: { en: "We're having a get-together on Sunday.", te: "ఆదివారం మా అందరి గెట్-టుగెదర్ ఉంది." },
        },
        {
          form: "Are you free on …?",
          useFor: { en: "Ask if a friend has no plans.", te: "స్నేహితులకి ఏ ప్లానూ లేదా అని అడగడానికి." },
          example: { en: "Are you free on Saturday evening?", te: "శనివారం సాయంత్రం మీరు ఖాళీగా ఉన్నారా?" },
        },
        {
          form: "The show starts at …",
          useFor: { en: "A timetable: a show, a bus, a train. The verb takes s.", te: "టైమ్‌టేబుల్: షో, బస్సు, రైలు. verb కి s వస్తుంది." },
          example: { en: "The evening show starts at half past six.", te: "సాయంత్రం షో ఆరున్నరకి మొదలవుతుంది." },
        },
        {
          form: "this Friday / next week",
          useFor: { en: "No on before this or next.", te: "this, next ముందు on రాదు." },
          example: { en: "I'm busy this Friday.", te: "ఈ శుక్రవారం నేను బిజీ." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'm meeting Ravi on this Friday.",
      right: "I'm meeting Ravi this Friday.",
      why: {
        en: "Days take on, but this, next and last need no on.",
        te: "రోజులకి on వస్తుంది; కానీ this, next, last ముందు on రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "I meeting Ravi on Friday.",
      right: "I'm meeting Ravi on Friday.",
      why: {
        en: "With -ing, English needs am, is or are; Telugu కలుస్తున్నాను has it inside the verb.",
        te: "-ing తో am, is, are తప్పకుండా కావాలి; తెలుగులో 'కలుస్తున్నాను' లో అది verb లోనే ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your neighbour asks about your Sunday. You have a fixed plan. What do you say?",
        te: "పక్కింటివారు మీ ఆదివారం గురించి అడుగుతున్నారు. మీకు ఒక ఖాయమైన ప్లాన్ ఉంది. ఏమంటారు?",
      },
      options: ["I'm visiting my cousin on Sunday.", "I visiting my cousin on Sunday.", "I am visit my cousin on Sunday."],
      answer: 0,
      why: {
        en: "A fixed plan uses am with the -ing form; both parts are needed.",
        te: "ఖాయమైన ప్లాన్‌కి am తో పాటు -ing; రెండూ కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The evening show ___ at half past six.",
      te: "సాయంత్రం షో ఆరున్నరకి మొదలవుతుంది.",
      options: ["starts", "start", "starting"],
      answer: 0,
      why: {
        en: "A timetable uses the present simple; one show, like he or she, takes s.",
        te: "టైమ్‌టేబుల్‌కి present simple; ఒక్క షో (he, she లాగా), అందుకే verb కి s.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your friend about his plans for Sunday.", te: "ఆదివారం ప్లాన్ ఏంటని స్నేహితుడిని అడగండి." },
      options: ["What are you doing on Sunday?", "What you are doing on Sunday?", "What are you do on Sunday?"],
      answer: 0,
      why: {
        en: "A question with what puts are before you, unlike the Telugu order.",
        te: "what ప్రశ్నలో are, you కంటే ముందు వస్తుంది; తెలుగులో వరుస అలా మారదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "We're going to cinema on Saturday.",
      wrongIndex: 3,
      fix: "We're going to the cinema on Saturday.",
      why: {
        en: "Places like the cinema and the temple take the; Telugu has no such word.",
        te: "cinema, temple లాంటి చోట్ల ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend asks: Are you free on Friday? You are meeting Ravi that day. Answer.",
        te: "శుక్రవారం ఖాళీగా ఉన్నారా అని స్నేహితులు అడుగుతున్నారు. ఆ రోజు మీరు రవిని కలుస్తున్నారు. జవాబు చెప్పండి.",
      },
      expected: ["Sorry, I'm meeting Ravi on Friday.", "No, I'm meeting Ravi on Friday.", "Sorry, I'm meeting Ravi that day."],
      options: ["Sorry, I'm meeting Ravi on Friday.", "Sorry, I meeting Ravi on Friday.", "Sorry, I'm meeting Ravi in Friday."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your friend what time the film starts.",
        te: "సినిమా ఎన్ని గంటలకి మొదలవుతుందో స్నేహితుల్ని అడగండి.",
      },
      expected: ["What time does the film start?", "When does the film start?", "What time does the show start?"],
      options: ["What time does the film start?", "What time the film starts?", "What time does the film starts?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A busy week", te: "బిజీ వారం" },
    scene: {
      en: "Your friend Swapna wants to meet you this week. You check your calendar.",
      te: "మీ స్నేహితురాలు స్వప్న గారు ఈ వారం మిమ్మల్ని కలవాలనుకుంటున్నారు. మీరు క్యాలెండర్ చూస్తున్నారు.",
    },
    partner: { en: "Swapna (your friend)", te: "స్వప్న (మీ స్నేహితురాలు)" },
    skills: [
      { id: "plans", label: { en: "Saying your plans", te: "మీ ప్లాన్లు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! Can we meet this week? Are you free?",
        te: "హాయ్! ఈ వారం కలుద్దామా? ఖాళీగా ఉన్నారా?",
        hint: { en: "Ask her to wait while you look at your calendar.", te: "క్యాలెండర్ చూసేదాకా ఆగమని ఆవిడని అడగండి." },
        replies: [
          { say: "One minute, let me check my calendar.", good: true, skill: "polite" },
          { say: "One minute, let me check calendar.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "How about Wednesday evening?",
        te: "బుధవారం సాయంత్రం ఎలా ఉంటుంది?",
        hint: { en: "Say sorry: a friend is ill, and you are going to see him then.", te: "సారీ చెప్పండి: ఒక స్నేహితుడికి ఒంట్లో బాగాలేదు, ఆ రోజు ఆయన్ని చూడటానికి వెళ్తున్నారు." },
        replies: [
          { say: "Sorry, I'm visiting a sick friend on Wednesday.", good: true, skill: "plans" },
          { say: "Sorry, I am visit a sick friend on Wednesday.", good: false, skill: "plans" },
          {
            say: "Wednesday? No. I have better things to do.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Okay, no problem.", te: "ఓ! సరే, పర్లేదు." },
          },
        ],
      },
      {
        partner: "Oh, I hope he gets well soon. What about Friday?",
        te: "అయ్యో, ఆయన త్వరగా కోలుకోవాలి. శుక్రవారం ఎలా?",
        hint: { en: "Say you have a plan with Ravi: the cinema.", te: "శుక్రవారం రవితో ప్లాన్ ఉందని చెప్పండి: సినిమా." },
        replies: [
          { say: "I'm meeting Ravi on Friday. We're going to the cinema.", good: true, skill: "plans" },
          { say: "I'm meeting Ravi on Friday. We're going to cinema.", good: false, skill: "plans", fixIt: "article" },
        ],
      },
      {
        partner: "Then Saturday morning? Let's have coffee.",
        te: "అయితే శనివారం పొద్దున? కాఫీ తాగుదాం.",
        hint: { en: "Agree happily, and say goodbye.", te: "సంతోషంగా ఒప్పుకుని, బై చెప్పండి." },
        replies: [
          { say: "Yes, I'm free on Saturday. See you then!", good: true, skill: "polite" },
          { say: "Yes, I'm free in Saturday. See you then!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
