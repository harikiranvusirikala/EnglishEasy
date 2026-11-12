import type { Lesson } from "../../types";

/** Week 58, Day 4 (CURRICULUM §5): direct or indirect questions — choosing by who you ask, with a falling tone. */
export const day: Lesson = {
  id: "polite-or-direct-questions",
  kind: "lesson",
  title: { en: "Polite or Direct?", te: "సూటిగా ఆ, మర్యాదగా ఆ?" },
  subtitle: "Where's the ATM? / Do you know where the ATM is?",
  summary: {
    en: "Learn when to ask directly and when to ask politely: Where's the ATM? Excuse me, do you know where the ATM is?",
    te: "ఎప్పుడు సూటిగా, ఎప్పుడు మర్యాదగా అడగాలో నేర్చుకుందాం: Where's the ATM? Excuse me, do you know where the ATM is?",
  },
  seo: {
    title: "Polite and Direct Questions in English for Telugu Speakers",
    description:
      "Know when to say Where's the ATM? and when to say Excuse me, do you know where the ATM is? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Do you know", role: "action" },
    { text: "where", role: "what" },
    { text: "the ATM", role: "who" },
    { text: "is?", role: "action" },
  ],
  core: [
    { en: "Where's the ATM?", te: "ATM ఎక్కడ?", extra: ["is"] },
    { en: "Excuse me, do you know where the ATM is?", te: "ఎక్స్‌క్యూజ్ మీ, ATM ఎక్కడ ఉందో మీకు తెలుసా?", extra: ["does"] },
    { en: "When is the next bus?", te: "తర్వాతి బస్సు ఎప్పుడు?", extra: ["does"] },
    { en: "Sorry to bother you. Do you know when the next bus comes?", te: "ఇబ్బంది పెడుతున్నందుకు సారీ. తర్వాతి బస్సు ఎప్పుడు వస్తుందో మీకు తెలుసా?", extra: ["come"] },
    { en: "The ATM is next to the bus stand.", te: "ATM బస్ స్టాండ్ పక్కన ఉంది.", extra: ["at"] },
    { en: "Excuse me, could you tell me what time it is?", te: "ఎక్స్‌క్యూజ్ మీ, టైమ్ ఎంత అయిందో చెప్తారా?" },
    { en: "Prasad, where's the medical shop?", te: "ప్రసాద్ గారూ, మెడికల్ షాప్ ఎక్కడ?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask one stranger something politely today, with Excuse me, do you know …? Let your voice go down at the end.",
    te: "ఈ రోజు తెలియని ఒకరిని Excuse me, do you know …? అని మర్యాదగా ఏదైనా అడగండి. చివర స్వరం కిందికి దించండి.",
  },
  words: [
    { en: "polite", te: "మర్యాదగా" },
    { en: "rude", te: "మొరటుగా, అమర్యాదగా" },
    { en: "stranger", te: "తెలియని వ్యక్తి" },
    { en: "ATM", te: "ATM, డబ్బులు తీసే మెషీన్" },
    { en: "tone", te: "స్వరం, మాట తీరు" },
  ],
  grammar: ["indirect-tag-questions", "question-words", "politeness-softening", "pronunciation"],
  topics: ["directions", "transport", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Direct or polite?", te: "సూటిగా ఆ, మర్యాదగా ఆ?" },
      body: {
        en: "With friends, a short question is fine: Where's the ATM? With a stranger, say Excuse me, do you know …? Let your voice go down at the end.",
        te: "స్నేహితులతో చిన్న ప్రశ్న చాలు: Where's the ATM? తెలియనివారితో Excuse me, do you know …? అని అడగండి; చివర స్వరం కిందికి దించండి.",
      },
      bridge: {
        te: ["ATM", "ఎక్కడ ఉందో", "తెలుసా?"],
        en: [
          { text: "Do you know", role: "action" },
          { text: "where", role: "what" },
          { text: "the ATM", role: "who" },
          { text: "is?", role: "action" },
        ],
      },
      examples: [
        { en: "Where's the ATM?", te: "ATM ఎక్కడ?" },
        { en: "Excuse me, do you know where the ATM is?", te: "ఎక్స్‌క్యూజ్ మీ, ATM ఎక్కడ ఉందో మీకు తెలుసా?" },
        { en: "Sorry to bother you. Do you know when the next bus comes?", te: "ఇబ్బంది పెడుతున్నందుకు సారీ. తర్వాతి బస్సు ఎప్పుడు వస్తుందో మీకు తెలుసా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Who are you asking?", te: "ఎవరిని అడుగుతున్నారు?" },
      items: [
        {
          form: "Where's …? When's …?",
          useFor: { en: "Friends, neighbours, people you know well.", te: "స్నేహితులు, పక్కింటివారు, బాగా తెలిసినవారు." },
          example: { en: "Prasad, where's the medical shop?", te: "ప్రసాద్ గారూ, మెడికల్ షాప్ ఎక్కడ?" },
        },
        {
          form: "Excuse me, do you know …?",
          useFor: { en: "A stranger on the road or at the bus stand.", te: "రోడ్డు మీద, బస్ స్టాండ్‌లో తెలియనివారు." },
          example: { en: "Excuse me, do you know where the ATM is?", te: "ఎక్స్‌క్యూజ్ మీ, ATM ఎక్కడ ఉందో మీకు తెలుసా?" },
        },
        {
          form: "Excuse me, could you tell me …?",
          useFor: { en: "Someone busy, or an older person.", te: "పనిలో ఉన్నవారు, పెద్దవారు." },
          example: { en: "Excuse me, could you tell me what time it is?", te: "ఎక్స్‌క్యూజ్ మీ, టైమ్ ఎంత అయిందో చెప్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Do you know when comes the bus?",
      right: "Do you know when the bus comes?",
      why: {
        en: "Inside do you know, the bus comes first, then the verb with s.",
        te: "do you know లోపల ముందు the bus, తర్వాత s ఉన్న verb వస్తాయి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Hey, ATM where?",
      right: "Excuse me, do you know where the ATM is?",
      why: {
        en: "Telugu ATM ఎక్కడ? is fine, but in English it sounds rude to a stranger.",
        te: "తెలుగులో 'ATM ఎక్కడ?' పర్లేదు; కానీ ఇంగ్లీష్‌లో తెలియనివారికి అది మొరటుగా వినిపిస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "At the bus stand, ask a stranger when the next bus to Guntur comes.",
        te: "బస్ స్టాండ్‌లో, గుంటూరుకి తర్వాతి బస్సు ఎప్పుడు వస్తుందో తెలియనివారిని అడగండి.",
      },
      options: [
        "Excuse me, do you know when the next bus to Guntur comes?",
        "Excuse me, do you know when does the next bus to Guntur come?",
        "Hey, when next bus to Guntur?",
      ],
      answer: 0,
      why: {
        en: "To a stranger, start with Excuse me, and keep normal order after do you know.",
        te: "తెలియనివారిని Excuse me తో మొదలుపెట్టండి; do you know తర్వాత మామూలు వరుసే.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "be",
      sentence: "Prasad, ___ the medical shop?",
      te: "ప్రసాద్ గారూ, మెడికల్ షాప్ ఎక్కడ?",
      options: ["where's", "where", "where are"],
      answer: 0,
      why: {
        en: "Telugu ఎక్కడ? needs no verb, but English needs is for one shop.",
        te: "తెలుగు 'ఎక్కడ?' కి verb అక్కర్లేదు; కానీ ఇంగ్లీష్‌లో ఒక్క షాపుకి is కావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend Rani asks you: Where's the ATM? How does it sound?",
        te: "మీ స్నేహితురాలు రాణి గారు మిమ్మల్ని Where's the ATM? అని అడిగారు. అది ఎలా వినిపిస్తుంది?",
      },
      options: ["Fine between friends", "Very rude", "Like an office letter"],
      answer: 0,
      why: {
        en: "A short question is normal between friends; strangers need the polite form.",
        te: "స్నేహితుల మధ్య చిన్న ప్రశ్న మామూలే; తెలియనివారికే మర్యాద రూపం కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Do you know where I can get some changes?",
      wrongIndex: 8,
      fix: "Do you know where I can get some change?",
      why: {
        en: "Coins for money are change, with no s; changes means things that become different.",
        te: "చిల్లర డబ్బులకి change అనాలి, s లేకుండా; changes అంటే మార్పులు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You don't know where the ATM is? You don't know.",
        te: "'ATM ఎక్కడుందో మీకు తెలీదా?' అని స్నేహితులు అడిగారు. మీకు నిజంగా తెలీదు.",
      },
      expected: ["No, I don't. Let's ask someone.", "No, I don't know.", "No, I don't."],
      options: ["No, I don't. Let's ask someone.", "Yes, I don't. Let's ask someone.", "Yes. Let's ask someone."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You need the time. Ask an older man at the bus stand, very politely.",
        te: "మీకు టైమ్ తెలియాలి. బస్ స్టాండ్‌లో ఒక పెద్దాయనని చాలా మర్యాదగా అడగండి.",
      },
      expected: ["Excuse me, could you tell me what time it is?", "Excuse me, do you know what time it is?", "Sorry to bother you. What time is it, please?"],
      options: ["Excuse me, could you tell me what time it is?", "Excuse me, could you tell me what time is it?", "What is the time? Tell me."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A stranger at the bus stand", te: "బస్ స్టాండ్‌లో తెలియనివారు" },
    scene: {
      en: "You are at the Guntur bus stand. You need cash and the bus to Tenali. A woman is standing near you.",
      te: "మీరు గుంటూరు బస్ స్టాండ్‌లో ఉన్నారు. మీకు డబ్బులు, తెనాలి బస్సు కావాలి. మీ దగ్గర ఒకావిడ నిలబడి ఉన్నారు.",
    },
    partner: { en: "A woman at the bus stand", te: "బస్ స్టాండ్‌లో ఒకావిడ" },
    skills: [
      { id: "ask", label: { en: "Polite questions", te: "మర్యాదగా అడగడం" } },
      { id: "answer", label: { en: "Answering clearly", te: "స్పష్టంగా జవాబు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "దయగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Yes? Are you looking for something?",
        te: "ఏంటండీ? ఏమైనా వెతుకుతున్నారా?",
        hint: { en: "Say Excuse me, and ask if she knows the way to an ATM.", te: "Excuse me అని, ATM ఎక్కడ ఉందో ఆవిడకి తెలుసా అని అడగండి." },
        replies: [
          { say: "Excuse me, do you know where the ATM is?", good: true, skill: "ask" },
          {
            say: "ATM where? Tell me.",
            good: false,
            skill: "polite",
            react: { en: "Hmm. You could ask a little more politely.", te: "హ్మ్. కొంచెం మర్యాదగా అడగొచ్చు కదండీ." },
          },
        ],
      },
      {
        partner: "Yes, it's outside, next to the main gate.",
        te: "తెలుసు, బయట, మెయిన్ గేట్ పక్కన ఉంది.",
        hint: { en: "Thank her, and ask about the time of the Tenali bus.", te: "థాంక్స్ చెప్పి, తెనాలి బస్సు ఎప్పుడు వస్తుందో అడగండి." },
        replies: [
          { say: "Thank you. Do you know when the Tenali bus comes?", good: true, skill: "ask" },
          { say: "Thank you. Do you know when comes the Tenali bus?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "It comes every half an hour. You're not from Guntur?",
        te: "ప్రతి అరగంటకీ వస్తుంది. మీది గుంటూరు కాదా?",
        hint: { en: "Say you are not, and name your own town.", te: "మీరు ఆ ఊరి వారు కాదు అని, మీ సొంత ఊరి పేరు చెప్పండి." },
        replies: [
          { say: "No, I'm not. I'm from Nellore.", good: true, skill: "answer" },
          {
            say: "Yes, I'm not. I'm from Nellore.",
            good: false,
            skill: "answer",
            fixIt: "negative-answer",
            react: { en: "Sorry? Yes or no?", te: "అంటే? అవునా, కాదా?" },
          },
        ],
      },
      {
        partner: "Oh, nice! Look, your bus is coming. Have a safe trip.",
        te: "ఓ, బాగుంది! అదిగో, మీ బస్సు వస్తోంది. జాగ్రత్తగా వెళ్ళండి.",
        hint: { en: "Thank her warmly, and say goodbye.", te: "ఆవిడకి మనస్ఫూర్తిగా థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you so much for your help. Bye!", good: true, skill: "polite" },
          { say: "Thanks a lot. You've been very helpful.", good: true, skill: "polite" },
          { say: "Thank you for the informations. Bye!", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
