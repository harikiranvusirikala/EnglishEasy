import type { Lesson } from "../../types";

/** Week 61, Day 4 (CURRICULUM §5): sharing news — Did you hear that the market is moving? According to the paper, onion prices will fall. */
export const day: Lesson = {
  id: "did-you-hear-the-local-news",
  kind: "lesson",
  title: { en: "Did You Hear?", te: "విన్నారా?" },
  subtitle: "Did you hear that …? Apparently …",
  summary: {
    en: "Learn to share local news: Did you hear that the market is moving? According to the paper, onion prices will fall.",
    te: "ఊరి వార్తలు పంచుకోవడం నేర్చుకుందాం: Did you hear that the market is moving? According to the paper, onion prices will fall.",
  },
  seo: {
    title: "Sharing Local News in English for Telugu Speakers",
    description:
      "Say Did you hear that the market is moving? and According to the paper … Simple lessons for Telugu speakers on sharing news.",
  },
  pattern: [
    { text: "Did you", role: "who" },
    { text: "hear", role: "action" },
    { text: "that the market is moving?", role: "what" },
  ],
  core: [
    { en: "Did you hear that the market is moving?", te: "మార్కెట్ వేరే చోటికి మారుతోందని విన్నారా?", extra: ["heard"] },
    { en: "According to the paper, onion prices will fall.", te: "పేపర్ ప్రకారం, ఉల్లిపాయ ధరలు తగ్గుతాయి.", extra: ["falls"] },
    { en: "Apparently, the new hospital will open next month.", te: "వచ్చే నెల కొత్త ఆసుపత్రి తెరుస్తారట.", extra: ["opens"] },
    { en: "Really? Where did you hear that?", te: "నిజమా? మీకు ఎక్కడ తెలిసింది?", extra: ["heard"] },
    { en: "I heard it on the TV news this morning.", te: "పొద్దున టీవీ వార్తల్లో విన్నాను.", extra: ["today"] },
    { en: "Did you hear about the new bus to Srisailam?", te: "శ్రీశైలానికి కొత్త బస్సు గురించి విన్నారా?", extra: ["for"] },
    { en: "According to the news channel, it will rain on Sunday.", te: "న్యూస్ ఛానల్ ప్రకారం, ఆదివారం వర్షం పడుతుంది.", extra: ["rains"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Share one piece of local news with a friend or neighbour today. Start with Did you hear that …?",
    te: "ఈ రోజు ఒక ఊరి వార్త స్నేహితులతో గానీ పక్కింటివారితో గానీ పంచుకోండి. Did you hear that …? తో మొదలుపెట్టండి.",
  },
  words: [
    { en: "apparently", te: "…అట, విన్నదాని ప్రకారం" },
    { en: "according to", te: "… ప్రకారం" },
    { en: "harvest", te: "పంట, పంట కోత" },
    { en: "news channel", te: "న్యూస్ ఛానల్" },
    { en: "gossip", te: "గాలి కబుర్లు, ఊరి ముచ్చట్లు" },
  ],
  grammar: ["reported-speech", "present-continuous", "will"],
  topics: ["market", "neighbours", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Sharing news", te: "వార్త పంచుకోవడం" },
      body: {
        en: "To share news, ask Did you hear that … and say the news as a full sentence. Say where it came from with According to the paper. Apparently means you heard it from someone.",
        te: "వార్త చెప్పాలంటే Did you hear that … అని అడిగి, ఆ వార్తని పూర్తి వాక్యంగా చెప్పండి. ఎక్కడ తెలిసిందో According to the paper తో చెప్పండి. Apparently అంటే తెలుగులో '…అట'.",
      },
      bridge: {
        te: ["మార్కెట్", "మారుతోందని", "విన్నారా?"],
        en: [
          { text: "Did you", role: "who" },
          { text: "hear", role: "action" },
          { text: "that the market is moving?", role: "what" },
        ],
      },
      examples: [
        { en: "Did you hear that the market is moving?", te: "మార్కెట్ వేరే చోటికి మారుతోందని విన్నారా?" },
        { en: "According to the paper, onion prices will fall.", te: "పేపర్ ప్రకారం, ఉల్లిపాయ ధరలు తగ్గుతాయి." },
        { en: "Apparently, the new hospital will open next month.", te: "వచ్చే నెల కొత్త ఆసుపత్రి తెరుస్తారట." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to share news", te: "వార్త చెప్పే పద్ధతులు" },
      items: [
        {
          form: "Did you hear that …?",
          useFor: { en: "Start a piece of news.", te: "ఒక వార్త మొదలుపెట్టడానికి." },
          example: { en: "Did you hear that the market is moving?", te: "మార్కెట్ వేరే చోటికి మారుతోందని విన్నారా?" },
        },
        {
          form: "Did you hear about …?",
          useFor: { en: "Ask about one thing in the news.", te: "వార్తల్లో ఒక విషయం గురించి అడగడానికి." },
          example: { en: "Did you hear about the new bus to Srisailam?", te: "శ్రీశైలానికి కొత్త బస్సు గురించి విన్నారా?" },
        },
        {
          form: "According to …",
          useFor: { en: "Say where the news came from.", te: "వార్త ఎక్కడి నుంచి వచ్చిందో చెప్పడానికి." },
          example: { en: "According to the news channel, it will rain on Sunday.", te: "న్యూస్ ఛానల్ ప్రకారం, ఆదివారం వర్షం పడుతుంది." },
        },
        {
          form: "Apparently, …",
          useFor: { en: "News you heard, but did not see yourself.", te: "మీరు విన్న వార్త, మీరే చూసింది కాదు." },
          example: { en: "Apparently, it's only gossip.", te: "అవి ఉత్త గాలి కబుర్లేనట." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I heard it on the TV news today morning.",
      right: "I heard it on the TV news this morning.",
      why: {
        en: "English says this morning, not today morning; Telugu ఈ రోజు పొద్దున is word for word.",
        te: "ఇంగ్లీష్‌లో this morning అంటారు, today morning అనరు; 'ఈ రోజు పొద్దున' ని పదం పదం మార్చకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "Did you hear that the market moving?",
      right: "Did you hear that the market is moving?",
      why: {
        en: "After that, the news is a full sentence, so -ing needs is before it.",
        te: "that తర్వాత వార్త పూర్తి వాక్యం; అందుకే -ing ముందు is కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your friend says the market is moving. Ask her where she heard it.",
        te: "మార్కెట్ మారుతోందని మీ స్నేహితురాలు అన్నారు. ఆవిడకి ఎక్కడ తెలిసిందో అడగండి.",
      },
      options: ["Where did you hear that?", "Where you heard that?", "Where did you heard that?"],
      answer: 0,
      why: {
        en: "A past question needs did before you, and the verb after did stays plain.",
        te: "past ప్రశ్నలో you ముందు did కావాలి; did తర్వాత verb అలాగే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Apparently, the new bus to Srisailam ___ at six every morning.",
      te: "శ్రీశైలానికి కొత్త బస్సు రోజూ పొద్దున ఆరింటికి బయలుదేరుతుందట.",
      options: ["leaves", "leave", "leaving"],
      answer: 0,
      why: {
        en: "One bus, like he or she, takes s for something that happens every day.",
        te: "ఒక్క బస్సు (he, she లాగా); రోజూ జరిగే పనికి verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "news",
      heading: "Vegetable Market to Move Next Month",
      lines: [
        "Guntur: The old vegetable market near the clock tower will move next month.",
        "The new market is near the RTC bus stand.",
        "It has two hundred stalls, clean washrooms and parking.",
        "According to the municipal office, the move will start on the first of June.",
        "Shops in the old market will stay open until then.",
        "Some sellers said they needed more time.",
        "The office said it would help them move their goods.",
        "Onion prices will also fall this week, after a good harvest.",
      ],
      questions: [
        {
          prompt: { en: "Where is the new market?", te: "కొత్త మార్కెట్ ఎక్కడ ఉంది?" },
          options: ["Near the RTC bus stand", "Near the clock tower", "Near the railway station"],
          answer: 0,
          why: {
            en: "The second line gives the new place; the clock tower is where the old market is.",
            te: "రెండో లైన్‌లో కొత్త చోటు ఉంది; క్లాక్ టవర్ దగ్గర ఉన్నది పాత మార్కెట్.",
          },
        },
        {
          prompt: { en: "When will the move start?", te: "మార్కెట్ మారడం ఎప్పుడు మొదలవుతుంది?" },
          options: ["On the first of June", "This week", "Today"],
          answer: 0,
          why: {
            en: "The municipal office gives the date in the fourth line, after According to.",
            te: "నాలుగో లైన్‌లో, According to తర్వాత, మున్సిపల్ ఆఫీస్ తేదీ చెప్పింది.",
          },
        },
        {
          prompt: { en: "Why will onion prices fall?", te: "ఉల్లిపాయ ధరలు ఎందుకు తగ్గుతాయి?" },
          options: ["Because of a good harvest", "Because the market is moving", "Because of the rain"],
          answer: 0,
          why: {
            en: "The last line gives the reason after the word after: the crop was good.",
            te: "చివరి లైన్‌లో after తర్వాత కారణం ఉంది: పంట బాగా వచ్చింది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Apparently, new hospital will open next month.",
      wrongIndex: 1,
      fix: "Apparently, the new hospital will open next month.",
      why: {
        en: "A hospital everyone knows about takes the; Telugu has no word like it.",
        te: "అందరికీ తెలిసిన ఆసుపత్రి కాబట్టి ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Tell your friend some news: the bus fare is going up. Start with Did you hear.",
        te: "మీ స్నేహితులకి ఒక వార్త చెప్పండి: బస్ ఛార్జీ పెరుగుతోంది. Did you hear తో మొదలుపెట్టండి.",
      },
      expected: [
        "Did you hear that the bus fare is going up?",
        "Did you hear that bus fares are going up?",
        "Did you hear the bus fare is going up?",
      ],
      options: [
        "Did you hear that the bus fare is going up?",
        "Did you hear that the bus fare going up?",
        "Do you heard that the bus fare is going up?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend asks where you got the news. You read it in the paper this morning. Answer.",
        te: "ఈ వార్త ఎక్కడ తెలిసిందని మీ స్నేహితులు అడుగుతున్నారు. ఈ రోజు పొద్దున పేపర్‌లో చదివారు. జవాబు చెప్పండి.",
      },
      expected: ["I read it in the paper this morning.", "I saw it in the paper this morning.", "In the paper, this morning."],
      options: ["I read it in the paper this morning.", "I read it in the paper today morning.", "I am reading it in the paper this morning."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "News on the morning walk", te: "పొద్దుటి నడకలో వార్తలు" },
    scene: {
      en: "You meet your friend Venkat on your morning walk in the park.",
      te: "పార్కులో పొద్దుటి నడకలో మీ స్నేహితుడు వెంకట్ గారు కలిశారు.",
    },
    partner: { en: "Venkat (your friend)", te: "వెంకట్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "share", label: { en: "Sharing news", te: "వార్త పంచుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Lovely weather today, isn't it?",
        te: "గుడ్ మార్నింగ్! ఈ రోజు వాతావరణం చాలా బాగుంది కదా?",
        hint: { en: "Agree, and ask if he has heard the news about the vegetable market.", te: "ఒప్పుకుని, కూరగాయల మార్కెట్ వార్త విన్నారా అని అడగండి." },
        replies: [
          { say: "Yes, it is! Did you hear that the market is moving?", good: true, skill: "share" },
          { say: "Yes, it is! You heard the market is moving?", good: false, skill: "share", fixIt: "question" },
        ],
      },
      {
        partner: "No! Where is it moving to?",
        te: "లేదే! ఎక్కడికి మారుతోంది?",
        hint: { en: "Tell him the new place, and say where you read it.", te: "కొత్త చోటు చెప్పి, మీరు ఎక్కడ చదివారో చెప్పండి." },
        replies: [
          { say: "Near the bus stand, according to the paper.", good: true, skill: "share" },
          { say: "Near the bus stand, according to paper.", good: false, skill: "share", fixIt: "article" },
        ],
      },
      {
        partner: "Really? Apparently, onion prices are falling too.",
        te: "నిజమా? ఉల్లిపాయ ధరలు కూడా తగ్గుతున్నాయట.",
        hint: { en: "Say that is good news for everyone.", te: "అందరికీ అది మంచి వార్త అని చెప్పండి." },
        replies: [
          { say: "That's good news for everyone!", good: true, skill: "polite" },
          {
            say: "Who told you? You believe all the gossip.",
            good: false,
            skill: "polite",
            react: { en: "Ha! This time, it's in the paper.", te: "హహ! ఈసారి పేపర్‌లోనే వచ్చింది." },
          },
        ],
      },
      {
        partner: "Well, I must go now. See you tomorrow!",
        te: "సరే, నేను వెళ్ళాలి. రేపు కలుద్దాం!",
        hint: { en: "Say goodbye, and say you will see him at the park tomorrow.", te: "బై చెప్పి, రేపు పార్కులో కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Bye! See you at the park tomorrow.", good: true, skill: "polite" },
          { say: "Bye! See you tomorrow morning at park.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
