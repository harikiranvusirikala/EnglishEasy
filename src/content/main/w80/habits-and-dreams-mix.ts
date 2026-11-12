import type { Lesson } from "../../types";

/**
 * Week 80, Day 1 (CURRICULUM §5): Checkpoint mix — healthy habits (Week 68), If I had … (Week 69), I wish … and
 * I should have … (Week 70).
 */
export const day: Lesson = {
  id: "habits-and-dreams-mix",
  kind: "lesson",
  title: { en: "Habits and Dreams", te: "అలవాట్లు, కలలు" },
  subtitle: "habits, dreams, wishes and regrets",
  summary: {
    en: "Talk about the habits you have changed, what you would do with more time, what you wish, and what you should have done.",
    te: "మీరు మార్చుకున్న అలవాట్లు, టైమ్ ఉంటే ఏం చేస్తారో, ఏం ఉంటే బాగుండో, ఏం చేయాల్సిందో చెప్పడం.",
  },
  seo: {
    title: "Habits, Dreams and Regrets in English for Telugu Speakers",
    description:
      "Say I've decided to cut down on sweets and If I had more time, I'd learn to swim. A review lesson for Telugu speakers.",
  },
  pattern: [
    { text: "I've", role: "who" },
    { text: "decided to cut down on", role: "action" },
    { text: "sweets", role: "what" },
  ],
  core: [
    { en: "I've decided to cut down on sweets.", te: "స్వీట్లు తగ్గించాలని నిర్ణయించుకున్నాను.", extra: ["cutting"] },
    { en: "If I had more time, I'd learn to swim.", te: "నాకు ఇంకా టైమ్ ఉంటే, ఈత నేర్చుకుంటాను.", extra: ["have"] },
    { en: "I wish I could walk faster.", te: "ఇంకా వేగంగా నడవగలిగితే బాగుండు.", extra: ["can"] },
    { en: "I should have started yoga much earlier.", te: "యోగా ఇంకా చాలా ముందే మొదలుపెట్టాల్సింది.", extra: ["start"] },
    { en: "I've stopped drinking tea after six in the evening.", te: "సాయంత్రం ఆరు తర్వాత టీ తాగడం మానేశాను.", extra: ["to"] },
    { en: "If I were you, I'd join the morning walking group.", te: "నేను మీ స్థానంలో ఉంటే, పొద్దుటి వాకింగ్ గ్రూప్‌లో చేరతాను.", extra: ["am"] },
    { en: "I don't get enough exercise, but I'm trying.", te: "నేను సరిపడా వ్యాయామం చేయట్లేదు, కానీ ప్రయత్నిస్తున్నాను.", extra: ["try"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell a friend your health goal: one habit you have changed, and one thing you would do if you had more time.",
    te: "మీ ఆరోగ్య లక్ష్యం ఎవరైనా స్నేహితులకి ఇంగ్లీష్‌లో చెప్పండి: మీరు మార్చుకున్న ఒక అలవాటు, టైమ్ ఉంటే చేసే ఒక పని.",
  },
  words: [
    { en: "willpower", te: "మనోబలం, పట్టుదల" },
    { en: "fitness", te: "ఫిట్‌నెస్, ఒంట్లో చురుకుదనం" },
    { en: "resolution", te: "గట్టి నిర్ణయం" },
    { en: "stamina", te: "ఓపిక, ఎక్కువసేపు చేయగలిగే శక్తి" },
    { en: "health goal", te: "ఆరోగ్యం కోసం పెట్టుకున్న లక్ష్యం" },
  ],
  grammar: ["gerunds-infinitives", "conditionals", "wish-hope-regret", "modal-perfects"],
  topics: ["health", "feelings", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Habits, dreams, wishes, regrets", te: "అలవాట్లు, కలలు, కోరికలు, బాధలు" },
      body: {
        en: "A change you made: decided to, stopped + -ing. A dream: If I had …, I'd …. A wish for now: I wish I could …. A small regret: I should have + past form.",
        te: "మార్చుకున్న అలవాటు: decided to, stopped + -ing. కల: If I had …, I'd …. ఇప్పటి కోరిక: I wish I could …. చిన్న బాధ: I should have + past form.",
      },
      bridge: {
        te: ["నేను", "స్వీట్లు", "తగ్గించాలని నిర్ణయించుకున్నాను"],
        en: [
          { text: "I've", role: "who" },
          { text: "decided to cut down on", role: "action" },
          { text: "sweets", role: "what" },
        ],
      },
      examples: [
        { en: "I've decided to cut down on sweets.", te: "స్వీట్లు తగ్గించాలని నిర్ణయించుకున్నాను." },
        { en: "If I had more time, I'd learn to swim.", te: "నాకు ఇంకా టైమ్ ఉంటే, ఈత నేర్చుకుంటాను." },
        { en: "I wish I could walk faster.", te: "ఇంకా వేగంగా నడవగలిగితే బాగుండు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Four ways to talk about your health", te: "ఆరోగ్యం గురించి నాలుగు రకాలుగా" },
      items: [
        {
          form: "decided to / stopped + -ing",
          useFor: { en: "A change you have made.", te: "మీరు చేసుకున్న మార్పు." },
          example: { en: "I've stopped drinking tea after six in the evening.", te: "సాయంత్రం ఆరు తర్వాత టీ తాగడం మానేశాను." },
        },
        {
          form: "If I had …, I'd …",
          useFor: { en: "A dream that is not true now.", te: "ఇప్పుడు నిజం కాని కల." },
          example: { en: "If I had more stamina, I'd climb the Tirumala steps.", te: "నాకు ఇంకా ఓపిక ఉంటే, తిరుమల మెట్లు ఎక్కుతాను." },
        },
        {
          form: "I wish I could …",
          useFor: { en: "Something you can't do now, but want to.", te: "ఇప్పుడు చేయలేనిది, కానీ చేయాలని ఉన్నది." },
          example: { en: "I wish I could sleep through the night.", te: "రాత్రంతా మెలకువ లేకుండా నిద్రపోగలిగితే బాగుండు." },
        },
        {
          form: "I should have …",
          useFor: { en: "A small regret about the past.", te: "జరిగిపోయిన దాని గురించి చిన్న బాధ." },
          example: { en: "I should have started yoga much earlier.", te: "యోగా ఇంకా చాలా ముందే మొదలుపెట్టాల్సింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am going for a walk daily.",
      right: "I go for a walk every day.",
      why: {
        en: "A daily habit takes the simple form; am + -ing is only for right now.",
        te: "రోజూ చేసే అలవాటుకి మామూలు form వాడాలి; am + -ing ఇప్పుడు జరుగుతున్న పనికి మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "If I would have more time, I'd learn to swim.",
      right: "If I had more time, I'd learn to swim.",
      why: {
        en: "After if, use the past form had; would goes only in the other half.",
        te: "if తర్వాత past form had వాడాలి; would రెండో భాగంలో మాత్రమే వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "The dietitian asks about your tea. You drink five cups a day. Say it is more than is good for you.",
        te: "మీరు ఎంత టీ తాగుతారని dietitian అడుగుతున్నారు. రోజుకి ఐదు కప్పులు తాగుతారు. అది ఎక్కువే అని చెప్పండి.",
      },
      options: ["I drink too many cups of tea.", "I drink too much cups of tea.", "I drink too many cup of tea."],
      answer: 0,
      why: {
        en: "Cups can be counted, so say too many and add s to cup.",
        te: "కప్పుల్ని లెక్కపెట్టొచ్చు, అందుకే too many అని, cup కి s చేర్చాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "If I ___ near a park, I'd walk there every evening.",
      te: "నేను ఏదైనా పార్క్ దగ్గర ఉంటే, రోజూ సాయంత్రం అక్కడ నడుస్తాను.",
      options: ["lived", "live", "would live"],
      answer: 0,
      why: {
        en: "An imagined situation takes the past form after if; would goes in the other half.",
        te: "ఊహించిన విషయంలో if తర్వాత past form వస్తుంది; would రెండో భాగంలో మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You missed the free health camp yesterday. Now you are sorry. What do you say?",
        te: "నిన్న ఉచిత హెల్త్ క్యాంప్‌కి వెళ్ళలేదు. ఇప్పుడు బాధగా ఉంది. ఏమంటారు?",
      },
      options: ["I should have gone to the camp.", "I should have went to the camp.", "I should go to the camp yesterday."],
      answer: 0,
      why: {
        en: "A regret uses should have with the third form gone; went never follows have.",
        te: "బాధ చెప్పడానికి should have తర్వాత మూడో రూపం gone; have తర్వాత went రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My friend Ramesh walk for an hour every morning.",
      wrongIndex: 3,
      fix: "My friend Ramesh walks for an hour every morning.",
      why: {
        en: "A habit of one person, like Ramesh, takes s on the verb.",
        te: "ఒక్క మనిషి (రమేష్) అలవాటు చెప్పేటప్పుడు verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You haven't started walking again? You have not started yet.",
        te: "'You haven't started walking again?' అని స్నేహితులు అడుగుతున్నారు. మీరు ఇంకా మొదలుపెట్టలేదు.",
      },
      expected: ["No, I haven't. I'll start tomorrow.", "No, I haven't.", "No, not yet. I'll start soon."],
      options: ["No, I haven't. I'll start tomorrow.", "Yes, I haven't. I'll start tomorrow.", "No, I haven't. I'll starting tomorrow."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend Geetha wants to do yoga, but she says she has no time. Tell her what you would do in her place.",
        te: "మీ స్నేహితురాలు గీత గారు యోగా చేయాలనుకుంటున్నారు, కానీ టైమ్ లేదంటున్నారు. మీరు ఆవిడ స్థానంలో ఉంటే ఏం చేస్తారో చెప్పండి.",
      },
      expected: ["If I were you, I'd go early in the morning.", "If I were you, I'd start with ten minutes a day.", "If I were you, I'd try an evening class."],
      options: ["If I were you, I'd go early in the morning.", "If I am you, I'd go early in the morning.", "If I were you, I'll go early in the morning."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Health goals", te: "ఆరోగ్య లక్ష్యాలు" },
    scene: {
      en: "You meet your friend Salma at the vegetable market. She says you look fresh these days.",
      te: "కూరగాయల మార్కెట్‌లో మీ స్నేహితురాలు సల్మా గారు కలిశారు. ఈ మధ్య మీరు హుషారుగా కనిపిస్తున్నారని అంటున్నారు.",
    },
    partner: { en: "Salma (your friend)", te: "సల్మా (మీ స్నేహితురాలు)" },
    skills: [
      { id: "habits", label: { en: "Talking about habits", te: "అలవాట్ల గురించి చెప్పడం" } },
      { id: "dreams", label: { en: "Wishes and dreams", te: "కోరికలు, కలలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! You look so fresh these days. What's your secret?",
        te: "హాయ్! ఈ మధ్య మీరు చాలా హుషారుగా కనిపిస్తున్నారు. రహస్యం ఏంటి?",
        hint: { en: "Thank her, and say you made a decision to walk every day.", te: "థాంక్స్ చెప్పి, రోజూ నడవాలని నిర్ణయించుకున్నారని చెప్పండి." },
        replies: [
          { say: "Thanks! I've decided to walk for half an hour every day.", good: true, skill: "habits" },
          { say: "Thanks! I made a resolution to walk every morning.", good: true, skill: "habits" },
          { say: "Thanks! I've decided walking for half an hour every day.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "That's great. Isn't it hard to get up early?",
        te: "చాలా మంచిది. పొద్దున్నే లేవడం కష్టం కాదా?",
        hint: { en: "Say yes, and that you would like to sleep a little longer.", te: "అవునని, ఇంకొంచెం సేపు నిద్రపోగలిగితే బాగుండని చెప్పండి." },
        replies: [
          { say: "Yes! I wish I could sleep a little longer.", good: true, skill: "dreams" },
          { say: "Yes, it takes willpower. I wish I could sleep longer.", good: true, skill: "dreams" },
          { say: "Yes! I wish I can sleep a little longer.", good: false, skill: "dreams" },
        ],
      },
      {
        partner: "And what would you do if you had more time?",
        te: "మరి మీకు ఇంకా టైమ్ ఉంటే ఏం చేస్తారు?",
        hint: { en: "Name one thing you would learn.", te: "మీరు నేర్చుకునే ఒక విషయం చెప్పండి." },
        replies: [
          { say: "If I had more time, I'd learn to swim.", good: true, skill: "dreams" },
          { say: "I'd learn to play the veena. I've always wanted to.", good: true, skill: "dreams" },
          {
            say: "Why do you ask so many questions?",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry! I was only curious.", te: "అయ్యో, సారీ! ఊరికే తెలుసుకుందామని అడిగాను." },
          },
        ],
      },
      {
        partner: "Swimming is so good for fitness. Let's find a pool together!",
        te: "ఫిట్‌నెస్‌కి ఈత చాలా మంచిది. కలిసి ఏదైనా pool చూద్దాం!",
        hint: { en: "Agree happily, add a small regret about starting late, and say bye.", te: "సంతోషంగా ఒప్పుకుని, ఆలస్యంగా మొదలుపెట్టినందుకు చిన్న బాధ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Yes, let's! I should have started long ago. Bye for now!", good: true, skill: "habits" },
          { say: "Yes, let's! I should have start long ago. Bye for now!", good: false, skill: "habits" },
        ],
      },
    ],
  },
};
