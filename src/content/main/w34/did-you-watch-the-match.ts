import type { Lesson } from "../../types";

/** Week 34, Day 3 (CURRICULUM §4): cricket, news and serials — short answers (Yes, I did. No, I haven't. Yes, I do.). */
export const day: Lesson = {
  id: "did-you-watch-the-match",
  kind: "lesson",
  title: { en: "Did You Watch the Match?", te: "మ్యాచ్ చూశారా?" },
  subtitle: "short answers: Yes, I did. No, I haven't.",
  summary: {
    en: "Learn to chat about cricket, news and serials, with short answers: Did you watch the match? Yes, I did.",
    te: "క్రికెట్, వార్తలు, సీరియల్స్ గురించి చిన్న జవాబులతో మాట్లాడటం నేర్చుకుందాం: Did you watch the match? Yes, I did.",
  },
  seo: {
    title: "Short Answers in English for Telugu Speakers",
    description:
      "Ask Did you watch the match? and answer Yes, I did or No, I haven't. Simple lessons for Telugu speakers on chatting about cricket and TV.",
  },
  pattern: [
    { text: "Did", role: "action" },
    { text: "you", role: "who" },
    { text: "watch the match", role: "what" },
    { text: "yesterday?", role: "when" },
  ],
  core: [
    { en: "Did you watch the match?", te: "మీరు మ్యాచ్ చూశారా?", extra: ["watched"] },
    { en: "Yes, I did. What a finish!", te: "అవును, చూశాను. చివర్లో భలే ఉత్కంఠ!", extra: ["do"] },
    { en: "India won by two runs.", te: "ఇండియా రెండు పరుగుల తేడాతో గెలిచింది.", extra: ["run"] },
    { en: "Have you seen today's news?", te: "ఈ రోజు వార్తలు చూశారా?", extra: ["saw"] },
    { en: "No, I haven't. What happened?", te: "లేదు, చూడలేదు. ఏం జరిగింది?", extra: ["didn't"] },
    { en: "Do you watch the new serial?", te: "మీరు కొత్త సీరియల్ చూస్తారా?", extra: ["Are"] },
    { en: "Yes, I do. It's very good.", te: "అవును, చూస్తాను. చాలా బాగుంది.", extra: ["did"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Ask a friend or shopkeeper today: Did you watch the match? Or: Have you seen today's news?",
    te: "ఈ రోజు ఒక స్నేహితుడిని గానీ, షాపు వారిని గానీ అడగండి: Did you watch the match? లేదా Have you seen today's news?",
  },
  words: [
    { en: "match", te: "మ్యాచ్ (ఆట)" },
    { en: "cricket", te: "క్రికెట్" },
    { en: "score", te: "స్కోరు" },
    { en: "won", te: "గెలిచారు" },
    { en: "What a finish!", te: "చివర్లో భలే ఉత్కంఠ!" },
  ],
  grammar: ["yes-no-questions", "past-simple", "present-perfect"],
  topics: ["people", "time", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Short answers", te: "చిన్న జవాబులు" },
      body: {
        en: "Answer a yes or no question with its first word: Did you …? Yes, I did. Have you …? No, I haven't. Do you …? Yes, I do. Then add one more thing, and the chat goes on.",
        te: "అవును, లేదు ప్రశ్నకి, ప్రశ్నలోని మొదటి మాటతోనే జవాబు చెప్పండి: Did you …? Yes, I did. Have you …? No, I haven't. Do you …? Yes, I do. ఇంకో మాట చేర్చితే కబుర్లు సాగుతాయి.",
      },
      bridge: {
        te: ["మీరు", "మ్యాచ్", "చూశారా?"],
        en: [
          { text: "Did", role: "action" },
          { text: "you", role: "who" },
          { text: "watch", role: "action" },
          { text: "the match?", role: "what" },
        ],
      },
      examples: [
        { en: "Yes, I did. What a finish!", te: "అవును, చూశాను. చివర్లో భలే ఉత్కంఠ!" },
        { en: "No, I haven't. What happened?", te: "లేదు, చూడలేదు. ఏం జరిగింది?" },
        { en: "Yes, I do. It's very good.", te: "అవును, చూస్తాను. చాలా బాగుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which short answer?", te: "ఏ చిన్న జవాబు?" },
      items: [
        {
          form: "Did you …? → I did / I didn't",
          useFor: { en: "Something in the past.", te: "జరిగిపోయిన పని." },
          example: { en: "Did you watch the match? Yes, I did.", te: "మ్యాచ్ చూశారా? అవును, చూశాను." },
        },
        {
          form: "Have you …? → I have / I haven't",
          useFor: { en: "Done or not, up to now.", te: "ఇప్పటి వరకూ చేశారా, లేదా." },
          example: { en: "Have you seen the news? No, I haven't.", te: "వార్తలు చూశారా? లేదు, చూడలేదు." },
        },
        {
          form: "Do you …? → I do / I don't",
          useFor: { en: "Habits: what you usually do.", te: "అలవాట్లు: మామూలుగా చేసేవి." },
          example: { en: "Do you watch the serial? Yes, I do.", te: "ఆ సీరియల్ చూస్తారా? అవును, చూస్తాను." },
        },
        {
          form: "Is it …? → it is / it isn't",
          useFor: { en: "How something is.", te: "ఏదైనా ఎలా ఉందో." },
          example: { en: "Is the match today? Yes, it is.", te: "మ్యాచ్ ఈ రోజేనా? అవును, ఈ రోజే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You watched the match?",
      right: "Did you watch the match?",
      why: {
        en: "Telugu asks with just the voice going up; English puts did first and keeps the plain verb.",
        te: "తెలుగులో స్వరం పెంచితే చాలు; ఇంగ్లీష్‌లో did ముందు పెట్టి, verb ని మామూలుగా ఉంచాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Have you seen the news? No, I didn't.",
      right: "Have you seen the news? No, I haven't.",
      why: {
        en: "Answer with the question's own first word: have goes with haven't, not with didn't.",
        te: "ప్రశ్నలోని మొదటి మాటతోనే జవాబు: have కి haven't, didn't కాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A friend asks: Did you watch the match? You did.",
        te: "స్నేహితులు Did you watch the match? అని అడిగారు. మీరు చూశారు.",
      },
      options: ["Yes, I did. What a finish!", "Yes, I do. What a finish!", "Yes, I was. What a finish!"],
      answer: 0,
      why: {
        en: "The question starts with did, so the short answer uses did too.",
        te: "ప్రశ్న did తో మొదలైంది, అందుకే చిన్న జవాబులోనూ did.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Final Score",
      lines: ["India 287 for 6", "Australia 285 all out", "India won by 2 runs"],
      prompt: { en: "Who won the match, and by how much?", te: "మ్యాచ్ ఎవరు గెలిచారు, ఎంత తేడాతో?" },
      options: ["India, by two runs", "Australia, by two runs", "India, by six runs"],
      answer: 0,
      why: {
        en: "The last line gives the result: India won, and only 2 runs separate the teams.",
        te: "చివరి లైన్‌లో ఫలితం ఉంది: ఇండియా గెలిచింది, తేడా 2 పరుగులే.",
      },
      say: "India won by two runs.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: { en: "Tell a friend the result.", te: "స్నేహితులకి ఫలితం చెప్పండి." },
      options: ["India won by two runs.", "India won by two run.", "India is won by two runs."],
      answer: 0,
      why: {
        en: "After a number above one, the thing takes s, just as Telugu says పరుగులు.",
        te: "ఒకటి కంటే ఎక్కువ అయితే s చేర్చాలి, తెలుగులో 'పరుగులు' అన్నట్టే.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Do you watch the serial? Yes, I am.",
      wrongIndex: 7,
      fix: "Do you watch the serial? Yes, I do.",
      why: {
        en: "A question with do gets do in the short answer, not am.",
        te: "do తో అడిగిన ప్రశ్నకి చిన్న జవాబులోనూ do వస్తుంది, am కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour asks: Did you watch the match? You did. Answer, and add a few words.",
        te: "పక్కింటివారు Did you watch the match? అని అడిగారు. మీరు చూశారు. జవాబు చెప్పి, ఇంకో మాట చేర్చండి.",
      },
      expected: ["Yes, I did. What a finish!", "Yes, I did. It was very good.", "Yes, I did."],
      options: ["Yes, I did. What a finish!", "Yes, I did watched. What a finish!", "Yes, I was. What a finish!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask a friend if she has seen today's news.",
        te: "ఈ రోజు వార్తలు చూశారా అని స్నేహితురాలిని అడగండి.",
      },
      expected: ["Have you seen today's news?", "Have you seen the news today?"],
      options: ["Have you seen today's news?", "You have seen today's news?", "Did you seen today's news?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the tea stall", te: "టీ కొట్టు దగ్గర" },
    scene: {
      en: "It is evening at the tea stall near the bus stand. Your friend Imran is there.",
      te: "సాయంత్రం, బస్ స్టాండ్ దగ్గర టీ కొట్టు. మీ స్నేహితుడు ఇమ్రాన్ అక్కడ ఉన్నారు.",
    },
    partner: { en: "Imran (a friend)", te: "ఇమ్రాన్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "short", label: { en: "Short answers", te: "చిన్న జవాబులు" } },
      { id: "chat", label: { en: "Keeping the chat going", te: "కబుర్లు కొనసాగించడం" } },
    ],
    turns: [
      {
        partner: "Hello! Have tea. Did you watch the cricket match?",
        te: "హలో! టీ తాగండి. క్రికెట్ మ్యాచ్ చూశారా?",
        hint: { en: "Say yes, and say the end was exciting.", te: "అవునని, చివర్లో చాలా ఉత్కంఠగా ఉందని చెప్పండి." },
        replies: [
          { say: "Yes, I did. What a finish!", good: true, skill: "short" },
          { say: "Yes, I do. What a finish!", good: false, skill: "short" },
        ],
      },
      {
        partner: "India needed six runs in the last over!",
        te: "చివరి ఓవర్‌లో ఇండియాకి ఆరు పరుగులు కావాలి!",
        hint: { en: "Ask about the final score.", te: "చివరి స్కోరు ఎంతో అడగండి." },
        replies: [
          { say: "Yes! What was the final score?", good: true, skill: "chat" },
          { say: "Yes! What the final score was?", good: false, skill: "chat", fixIt: "question" },
        ],
      },
      {
        partner: "287 to 285! Have you seen the new serial?",
        te: "287 కి 285! కొత్త సీరియల్ చూశారా?",
        hint: { en: "Say you have not, and ask if it is good.", te: "చూడలేదని చెప్పి, బాగుందా అని అడగండి." },
        replies: [
          { say: "No, I haven't. Is it good?", good: true, skill: "short" },
          { say: "No, I didn't. Is it good?", good: false, skill: "short" },
          {
            say: "Serials? They are all rubbish.",
            good: false,
            skill: "chat",
            react: { en: "Rubbish? This one is really good, you know!", te: "చెత్తా? ఇది నిజంగా బాగుంటుంది, తెలుసా!" },
          },
        ],
      },
      {
        partner: "Very good! Watch it tonight at eight.",
        te: "చాలా బాగుంది! ఈ రోజు రాత్రి ఎనిమిదింటికి చూడండి.",
        hint: { en: "Say you will, and thank him for the tea.", te: "చూస్తానని చెప్పి, టీకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, I will. Thanks for the tea!", good: true, skill: "chat" },
          { say: "Sure, I will watching. Thanks for the tea!", good: false, skill: "chat" },
        ],
      },
    ],
  },
};
