import type { Lesson } from "../../types";

/** Week 70, Day 5 (CURRICULUM §5): wishes and regrets in a short talk, with I'm glad I … — I'm glad I learned to use a smartphone. */
export const day: Lesson = {
  id: "looking-back-on-choices",
  kind: "lesson",
  title: { en: "Looking Back", te: "వెనక్కి తిరిగి చూస్తే" },
  subtitle: "I'm glad I … / I should have …",
  summary: {
    en: "Learn to talk about your choices, the good ones and the small regrets: I'm glad I learned to use a smartphone. I should have started learning English sooner.",
    te: "మీ నిర్ణయాల గురించి, మంచివీ చిన్న బాధలూ, చెప్పడం నేర్చుకుందాం: I'm glad I learned to use a smartphone. I should have started learning English sooner.",
  },
  seo: {
    title: "Talking About Life Choices in English for Telugu Speakers",
    description:
      "Say I'm glad I learned to use a smartphone and I should have started sooner. Simple lessons for Telugu speakers on looking back.",
  },
  pattern: [
    { text: "I'm glad", role: "who" },
    { text: "I learned", role: "action" },
    { text: "to use a smartphone", role: "what" },
  ],
  core: [
    { en: "I'm glad I learned to use a smartphone.", te: "స్మార్ట్‌ఫోన్ వాడటం నేర్చుకున్నందుకు సంతోషంగా ఉంది.", extra: ["learn"] },
    { en: "I should have started learning English sooner.", te: "ఇంగ్లీష్ ఇంకా ముందే నేర్చుకోవడం మొదలుపెట్టాల్సింది.", extra: ["start"] },
    { en: "When I look back, I'm happy with my choices.", te: "వెనక్కి తిరిగి చూసుకుంటే, నా నిర్ణయాలతో సంతోషంగా ఉన్నాను.", extra: ["choice"] },
    { en: "I used to be shy, but now I talk to everyone.", te: "ఒకప్పుడు నాకు బిడియం ఎక్కువ, కానీ ఇప్పుడు అందరితో మాట్లాడుతున్నాను.", extra: ["use"] },
    { en: "I'm proud I learned to drive at sixty.", te: "అరవై ఏళ్ళకి డ్రైవింగ్ నేర్చుకున్నందుకు గర్వంగా ఉంది.", extra: ["proudly"] },
    { en: "I wish I saw my school friends more often.", te: "స్కూల్ స్నేహితుల్ని ఇంకా ఎక్కువసార్లు కలుస్తుంటే బాగుండేది.", extra: ["see"] },
    { en: "If I could start again, I would choose the same work.", te: "మళ్ళీ మొదటి నుంచి మొదలుపెట్టగలిగితే, ఇదే పని ఎంచుకుంటాను.", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud one choice you are happy about: I'm glad I … Then one small regret: I should have …",
    te: "మీకు సంతోషం ఇచ్చిన ఒక నిర్ణయం గట్టిగా చెప్పండి: I'm glad I … తర్వాత ఒక చిన్న బాధ: I should have …",
  },
  words: [
    { en: "glad", te: "సంతోషం, ఆనందం" },
    { en: "look back", te: "వెనక్కి తిరిగి చూసుకోవడం" },
    { en: "choice", te: "ఎంపిక, నిర్ణయం" },
    { en: "sooner", te: "ఇంకా ముందే" },
    { en: "proud", te: "గర్వంగా" },
  ],
  grammar: ["wish-hope-regret", "used-to-would", "conditionals"],
  topics: ["feelings", "people", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Looking back: glad or should have", te: "వెనక్కి చూస్తే: సంతోషమా, బాధా" },
      body: {
        en: "For a choice you are happy about, say I'm glad I and the past: I'm glad I learned. For a small regret, say I should have.",
        te: "సంతోషపడే నిర్ణయానికి I'm glad I తర్వాత past: I'm glad I learned (నేర్చుకున్నందుకు సంతోషం). చిన్న బాధకి I should have (…చేయాల్సింది).",
      },
      bridge: {
        te: ["స్మార్ట్‌ఫోన్ వాడటం", "నేర్చుకున్నందుకు", "సంతోషంగా ఉంది"],
        en: [
          { text: "I'm glad", role: "who" },
          { text: "I learned", role: "action" },
          { text: "to use a smartphone", role: "what" },
        ],
      },
      examples: [
        { en: "I'm glad I learned to use a smartphone.", te: "స్మార్ట్‌ఫోన్ వాడటం నేర్చుకున్నందుకు సంతోషంగా ఉంది." },
        { en: "I should have started learning English sooner.", te: "ఇంగ్లీష్ ఇంకా ముందే నేర్చుకోవడం మొదలుపెట్టాల్సింది." },
        { en: "When I look back, I'm happy with my choices.", te: "వెనక్కి తిరిగి చూసుకుంటే, నా నిర్ణయాలతో సంతోషంగా ఉన్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Talking about your choices", te: "మీ నిర్ణయాల గురించి" },
      items: [
        {
          form: "I'm glad I + past",
          useFor: { en: "A choice you are happy about.", te: "సంతోషపడే నిర్ణయం." },
          example: { en: "I'm glad I learned to use a smartphone.", te: "స్మార్ట్‌ఫోన్ వాడటం నేర్చుకున్నందుకు సంతోషంగా ఉంది." },
        },
        {
          form: "I should have …",
          useFor: { en: "A small thing you didn't do.", te: "చేయకుండా వదిలేసిన చిన్న పని." },
          example: { en: "I should have started learning English sooner.", te: "ఇంగ్లీష్ ఇంకా ముందే నేర్చుకోవడం మొదలుపెట్టాల్సింది." },
        },
        {
          form: "I used to …, but now …",
          useFor: { en: "How you have changed.", te: "మీరు ఎలా మారారో చెప్పడానికి." },
          example: { en: "I used to be shy, but now I talk to everyone.", te: "ఒకప్పుడు నాకు బిడియం ఎక్కువ, కానీ ఇప్పుడు అందరితో మాట్లాడుతున్నాను." },
        },
        {
          form: "I wish I could …",
          useFor: { en: "Something you would like now.", te: "ఇప్పుడు కావాలనిపించేది." },
          example: { en: "I wish I could visit my old school again.", te: "మా పాత స్కూల్‌ని మళ్ళీ చూడగలిగితే బాగుండేది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am liking my life now.",
      right: "I like my life now.",
      why: {
        en: "Like is a feeling, so it takes no -ing, even when you mean now.",
        te: "like మనసులోని భావం, అందుకే ఇప్పటి గురించైనా -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I'm glad I learn to use a smartphone.",
      right: "I'm glad I learned to use a smartphone.",
      why: {
        en: "The learning is over, so after I'm glad I, use the past form learned.",
        te: "నేర్చుకోవడం అయిపోయింది కాబట్టి I'm glad I తర్వాత past form learned వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell a friend about your neighbour Gopal. He goes to the yoga class every day now.",
        te: "పక్కింటి గోపాల్ గారి గురించి స్నేహితులకి చెప్పండి. ఆయన ఇప్పుడు రోజూ యోగా క్లాస్‌కి వెళ్తున్నారు.",
      },
      options: ["Gopal goes to the yoga class every day now.", "Gopal go to the yoga class every day now.", "Gopal going to the yoga class every day now."],
      answer: 0,
      why: {
        en: "One person, like he or she, takes s on the verb; Telugu has no such s.",
        te: "ఒక్కరైతే (he, she లాగా) verb కి s వస్తుంది; తెలుగులో ఇలాంటి s ఉండదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I should have started learning English ___.",
      te: "ఇంగ్లీష్ ఇంకా ముందే నేర్చుకోవడం మొదలుపెట్టాల్సింది.",
      options: ["sooner", "soon", "more soon"],
      answer: 0,
      why: {
        en: "To compare with when you really started, use sooner, never more soon.",
        te: "నిజంగా మొదలుపెట్టిన టైమ్‌తో పోల్చడానికి sooner; more soon అనరు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "An old friend asks how long you have had a smartphone. Say five years.",
        te: "మీ దగ్గర స్మార్ట్‌ఫోన్ ఎన్నాళ్ళ నుంచి ఉందని పాత స్నేహితులు అడుగుతున్నారు. ఐదేళ్ళు అని చెప్పండి.",
      },
      options: ["For five years now.", "For five year now.", "Since five years now."],
      answer: 0,
      why: {
        en: "After five, year takes s, and a length of time takes for.",
        te: "five తర్వాత year కి s వస్తుంది; ఎంత కాలమో చెప్పడానికి for వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "I'm glad I joined computer class at sixty.",
      wrongIndex: 4,
      fix: "I'm glad I joined a computer class at sixty.",
      why: {
        en: "One class needs a before it; Telugu has no word like a.",
        te: "ఒక క్లాస్ కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "An old friend asks: Are you happy you learned to use a smartphone? Say yes.",
        te: "స్మార్ట్‌ఫోన్ వాడటం నేర్చుకున్నందుకు సంతోషమేనా? అని పాత స్నేహితులు అడుగుతున్నారు. అవునని చెప్పండి.",
      },
      expected: ["Yes, I'm glad I learned to use a smartphone.", "Yes, I'm glad I learned.", "Yes, I'm very glad."],
      options: ["Yes, I'm glad I learned to use a smartphone.", "Yes, I'm glad I learn to use a smartphone.", "Yes, I'm glad I learned using a smartphone."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your old friend if he is happy with his choices in life.",
        te: "జీవితంలో తీసుకున్న నిర్ణయాలతో సంతోషంగా ఉన్నారా అని మీ పాత స్నేహితుడిని అడగండి.",
      },
      expected: ["Are you happy with your choices?", "Are you happy with your life now?", "Are you happy with your choices in life?"],
      options: ["Are you happy with your choices?", "You are happy with your choices?", "Are you happy on your choices?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "An old friend", te: "పాత స్నేహితురాలు" },
    scene: {
      en: "At a wedding in Rajahmundry, you meet Kamala, your friend from school. You haven't met for twenty years.",
      te: "రాజమండ్రిలో ఒక పెళ్ళిలో మీ స్కూల్ స్నేహితురాలు కమల గారిని కలిశారు. ఇరవై ఏళ్ళుగా మీరు కలవలేదు.",
    },
    partner: { en: "Kamala (your school friend)", te: "కమల (మీ స్కూల్ స్నేహితురాలు)" },
    skills: [
      { id: "lookback", label: { en: "Talking about choices", te: "నిర్ణయాల గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Is that you? It's so good to see you after twenty years!",
        te: "మీరేనా? ఇరవై ఏళ్ళ తర్వాత మిమ్మల్ని చూడటం చాలా సంతోషంగా ఉంది!",
        hint: { en: "Say you are happy to see her too.", te: "ఆవిడని చూసి మీకూ సంతోషంగా ఉందని చెప్పండి." },
        replies: [
          { say: "It's so good to see you too, Kamala!", good: true, skill: "polite" },
          { say: "Same to you, Kamala!", good: false, skill: "polite" },
        ],
      },
      {
        partner: "I hear you use WhatsApp now! You used to hate phones.",
        te: "మీరు ఇప్పుడు WhatsApp వాడుతున్నారట! ఒకప్పుడు మీకు ఫోన్లంటే అస్సలు ఇష్టం ఉండేది కాదు.",
        hint: { en: "Laugh, and say you are happy about learning it.", te: "నవ్వి, అది నేర్చుకున్నందుకు సంతోషంగా ఉందని చెప్పండి." },
        replies: [
          { say: "Yes! I'm glad I learned to use a smartphone.", good: true, skill: "lookback" },
          { say: "Yes! I'm glad I learn to use a smartphone.", good: false, skill: "lookback" },
        ],
      },
      {
        partner: "And you're learning English too? That's wonderful!",
        te: "ఇంగ్లీష్ కూడా నేర్చుకుంటున్నారా? చాలా గొప్ప విషయం!",
        hint: { en: "Thank her, and say you are sorry you didn't start earlier.", te: "థాంక్స్ చెప్పి, ఇంకా ముందే మొదలుపెట్టలేదని బాధపడుతూ చెప్పండి." },
        replies: [
          { say: "Thank you. I should have started sooner!", good: true, skill: "lookback" },
          { say: "Thank you. I should've started learning sooner.", good: true, skill: "lookback" },
          {
            say: "Why? You think I'm too old?",
            good: false,
            skill: "polite",
            react: { en: "No, no! I think it's great. I'm proud of you.", te: "లేదు, లేదు! చాలా గొప్ప విషయం. మిమ్మల్ని చూసి గర్వంగా ఉంది." },
          },
        ],
      },
      {
        partner: "It's never too late. I'd like to learn too!",
        te: "ఎప్పుడూ ఆలస్యం కాదు. నాకూ నేర్చుకోవాలని ఉంది!",
        hint: { en: "Invite her to come to your class next week.", te: "వచ్చే వారం మీ క్లాస్‌కి రమ్మని ఆవిడని పిలవండి." },
        replies: [
          { say: "Then join my class! Let's go together next week.", good: true, skill: "polite" },
          { say: "Then join to my class! Let's go together next week.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
