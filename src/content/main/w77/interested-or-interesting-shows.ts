import type { Lesson } from "../../types";

/** Week 77, Day 2 (CURRICULUM §5): more -ed / -ing pairs — interested or interesting, excited or exciting, tired or tiring. */
export const day: Lesson = {
  id: "interested-or-interesting-shows",
  kind: "lesson",
  title: { en: "Interested or Interesting?", te: "ఆసక్తి" },
  subtitle: "interested, interesting, excited, exciting",
  summary: {
    en: "Learn more -ed and -ing pairs: I'm very interested in old Telugu songs. The cricket match was really exciting.",
    te: "-ed, -ing జంట మాటలు ఇంకొన్ని నేర్చుకుందాం: I'm very interested in old Telugu songs. The cricket match was really exciting.",
  },
  seo: {
    title: "Interested or Interesting in English for Telugu Speakers",
    description:
      "Say I'm interested in old Telugu songs and The match was really exciting. Simple lessons for Telugu speakers on -ed and -ing words.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "very interested in", role: "action" },
    { text: "old Telugu songs", role: "what" },
  ],
  core: [
    { en: "The quiz show is very interesting.", te: "ఆ క్విజ్ షో చాలా ఆసక్తికరంగా ఉంటుంది.", extra: ["interested"] },
    { en: "I'm very interested in old Telugu songs.", te: "నాకు పాత తెలుగు పాటలంటే చాలా ఆసక్తి.", extra: ["on"] },
    { en: "The cricket match was really exciting.", te: "క్రికెట్ మ్యాచ్ భలే ఉత్సాహంగా సాగింది.", extra: ["excited"] },
    { en: "We were all excited about the final.", te: "ఫైనల్ గురించి మేమంతా చాలా ఉత్సాహంగా ఉన్నాం.", extra: ["exciting"] },
    { en: "The contestants on this quiz show are very clever.", te: "ఈ క్విజ్ షోలో పోటీదారులు చాలా తెలివైనవారు.", extra: ["is"] },
    { en: "Are you interested in quiz shows?", te: "మీకు క్విజ్ షోలంటే ఆసక్తి ఉందా?", extra: ["Do"] },
    { en: "It was a tiring day, so I just watched TV.", te: "ఆ రోజు చాలా అలసటగా గడిచింది, అందుకే ఊరికే TV చూస్తూ కూర్చున్నాను.", extra: ["tired"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone today one thing you are interested in, and one show you find interesting.",
    te: "ఈ రోజు ఎవరికైనా మీకు ఆసక్తి ఉన్న ఒక విషయం, మీకు ఆసక్తికరంగా అనిపించే ఒక షో గురించి చెప్పండి.",
  },
  words: [
    { en: "interesting", te: "ఆసక్తికరమైన" },
    { en: "excited", te: "ఉత్సాహంగా ఉండటం" },
    { en: "exciting", te: "ఉత్సాహం కలిగించే, థ్రిల్లింగ్" },
    { en: "quiz show", te: "క్విజ్ షో, ప్రశ్నలు-జవాబుల పోటీ" },
    { en: "contestant", te: "పోటీదారు" },
  ],
  grammar: ["am-is-are", "prepositions", "yes-no-questions"],
  topics: ["feelings", "home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "More pairs: interested, interesting", te: "ఇంకొన్ని జంటలు: interested, interesting" },
      body: {
        en: "The rule is the same: your feeling takes -ed, and the thing that gives it takes -ing. After interested, always use in.",
        te: "రూల్ అదే: మీకు కలిగే భావానికి -ed, ఆ భావం కలిగించే దానికి -ing. interested తర్వాత ఎప్పుడూ in వస్తుంది.",
      },
      bridge: {
        te: ["నాకు", "పాత తెలుగు పాటలంటే", "చాలా ఆసక్తి"],
        en: [
          { text: "I'm", role: "who" },
          { text: "very interested in", role: "action" },
          { text: "old Telugu songs", role: "what" },
        ],
      },
      examples: [
        { en: "The quiz show is very interesting.", te: "ఆ క్విజ్ షో చాలా ఆసక్తికరంగా ఉంటుంది." },
        { en: "I'm very interested in old Telugu songs.", te: "నాకు పాత తెలుగు పాటలంటే చాలా ఆసక్తి." },
        { en: "The cricket match was really exciting.", te: "క్రికెట్ మ్యాచ్ భలే ఉత్సాహంగా సాగింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three pairs", te: "మూడు జంటలు" },
      items: [
        {
          form: "interested in, interesting",
          useFor: { en: "You want to know more; the thing that makes you want to know.", te: "మీకు ఇంకా తెలుసుకోవాలని ఉంటే interested in; అలా అనిపించేలా చేసేది interesting." },
          example: { en: "This programme on old temples is interesting.", te: "పాత గుడుల గురించి ఈ ప్రోగ్రామ్ ఆసక్తికరంగా ఉంది." },
        },
        {
          form: "excited, exciting",
          useFor: { en: "Happy and eager; the match or news that makes you feel so.", te: "సంతోషంగా, ఆత్రంగా ఉండటం excited; అలా అనిపించేలా చేసే మ్యాచ్, వార్త exciting." },
          example: { en: "Kumar is excited about his trip to Kashi.", te: "కుమార్ గారు కాశీ ప్రయాణం గురించి చాలా ఉత్సాహంగా ఉన్నారు." },
        },
        {
          form: "tired, tiring",
          useFor: { en: "You need rest; the day or journey that made you so.", te: "మీకు విశ్రాంతి కావాలనిపిస్తే tired; అలా చేసిన రోజు, ప్రయాణం tiring." },
          example: { en: "The long queue at the temple was tiring.", te: "గుడిలో పొడవాటి క్యూ చాలా అలసట కలిగించింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'm very interested on quiz shows.",
      right: "I'm very interested in quiz shows.",
      why: {
        en: "Interested always takes in, never on or about; Telugu అంటే gives no clue.",
        te: "interested తర్వాత ఎప్పుడూ in వస్తుంది; on, about రావు. తెలుగు 'అంటే' నుంచి ఇది తెలియదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I'm very interesting in old songs.",
      right: "I'm very interested in old songs.",
      why: {
        en: "The feeling is yours, so use -ed; interesting is for the songs themselves.",
        te: "ఆ భావం మీది, అందుకే -ed; interesting అనేది పాటల గురించి చెప్పడానికి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your neighbour asks about the quiz show on TV last night. You enjoyed it. What do you say?",
        te: "నిన్న రాత్రి TV లో వచ్చిన క్విజ్ షో గురించి పక్కింటివారు అడుగుతున్నారు. మీకు అది నచ్చింది. ఏమంటారు?",
      },
      options: ["It was very interesting.", "It was very interested.", "It was very interest."],
      answer: 0,
      why: {
        en: "The show made you want to know more, so use the -ing word for it.",
        te: "ఆ షో మీకు ఆసక్తి కలిగించింది, అందుకే దానికి -ing మాట వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We were all ___ about the final.",
      te: "ఫైనల్ గురించి మేమంతా చాలా ఉత్సాహంగా ఉన్నాం.",
      options: ["excited", "exciting", "excite"],
      answer: 0,
      why: {
        en: "We are the people who feel it, so use the -ed word after were.",
        te: "ఆ ఉత్సాహం మాది, అంటే మనుషులది; అందుకే were తర్వాత -ed మాట వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: The bus journey to Tirupati was tiring. What does she mean?",
        te: "The bus journey to Tirupati was tiring అని స్నేహితురాలు అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["The journey made her very tired.", "She enjoyed the journey a lot.", "The journey was very short."],
      answer: 0,
      why: {
        en: "Tiring describes the thing that makes you tired, here the long journey.",
        te: "tiring అంటే అలసట కలిగించేది; ఇక్కడ అది ఆ పొడవైన ప్రయాణం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "state-ing",
      sentence: "I am liking this quiz show very much.",
      wrongIndex: 2,
      fix: "I like this quiz show very much.",
      why: {
        en: "Like is a feeling, not an action, so it does not take -ing.",
        te: "like ఒక భావం, పని కాదు; అందుకే దానికి -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your neighbour asks: Do you watch quiz shows? Say yes, they really interest you.",
        te: "మీరు క్విజ్ షోలు చూస్తారా అని పక్కింటివారు అడుగుతున్నారు. అవును, అవంటే మీకు చాలా ఆసక్తి అని చెప్పండి.",
      },
      expected: ["Yes, I'm very interested in quiz shows.", "Yes, I find them very interesting.", "Yes, quiz shows are very interesting."],
      options: ["Yes, I'm very interested in quiz shows.", "Yes, I'm very interested on quiz shows.", "Yes, I'm very interesting in quiz shows."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend missed yesterday's cricket match. Tell him it was a thrilling game.",
        te: "నిన్నటి క్రికెట్ మ్యాచ్ మీ స్నేహితుడు చూడలేదు. అది చాలా థ్రిల్లింగ్‌గా సాగిందని ఆయనకి చెప్పండి.",
      },
      expected: ["The match was really exciting.", "It was a really exciting match.", "Yesterday's match was very exciting."],
      options: ["The match was really exciting.", "The match was really excited.", "The match really exciting."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A quiz show on TV", te: "TV లో క్విజ్ షో" },
    scene: {
      en: "Your neighbour Kavitha meets you at the gate. She wants to tell you about a new quiz show.",
      te: "మీ పక్కింటావిడ కవిత గారు గేట్ దగ్గర కలిశారు. ఒక కొత్త క్విజ్ షో గురించి మీకు చెప్పాలనుకుంటున్నారు.",
    },
    partner: { en: "Kavitha (your neighbour)", te: "కవిత (మీ పక్కింటావిడ)" },
    skills: [
      { id: "interest", label: { en: "Showing interest", te: "ఆసక్తి చూపించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Do you watch that new quiz show at eight?",
        te: "హలో! రాత్రి ఎనిమిదింటికి వచ్చే ఆ కొత్త క్విజ్ షో చూస్తారా?",
        hint: { en: "Say you haven't seen it yet, and ask what it's like.", te: "ఇంకా చూడలేదని చెప్పి, అది ఎలా ఉంటుందో అడగండి." },
        replies: [
          { say: "No, I haven't seen it yet. Is it good?", good: true, skill: "interest" },
          { say: "Not yet. What's it like?", good: true, skill: "interest" },
          { say: "No, I didn't see it yet. Is it good?", good: false, skill: "interest" },
        ],
      },
      {
        partner: "It's very interesting. The contestants are all over sixty!",
        te: "చాలా ఆసక్తికరంగా ఉంటుంది. పోటీదారులంతా అరవై ఏళ్ళు దాటినవారే!",
        hint: { en: "Say this makes you curious, and ask what kind of questions they ask.", te: "ఇది వింటే మీకు ఆసక్తి కలుగుతోందని చెప్పి, ఎలాంటి ప్రశ్నలు అడుగుతారో అడగండి." },
        replies: [
          { say: "Oh, I'm interested now! What kind of questions do they ask?", good: true, skill: "interest" },
          { say: "Oh, I'm interesting now! What kind of questions do they ask?", good: false, skill: "interest" },
        ],
      },
      {
        partner: "Questions on old films, songs and history. Last night's final was really exciting!",
        te: "పాత సినిమాలు, పాటలు, చరిత్ర మీద ప్రశ్నలు. నిన్న రాత్రి ఫైనల్ భలే ఉత్సాహంగా సాగింది!",
        hint: { en: "Say it sounds good, and that you will watch it tonight.", te: "బాగుందని చెప్పి, ఈ రాత్రి చూస్తానని చెప్పండి." },
        replies: [
          { say: "That sounds interesting. I'll watch it tonight.", good: true, skill: "polite" },
          { say: "That sounds interested. I'll watch it tonight.", good: false, skill: "interest" },
          {
            say: "Quiz shows are for children. I don't watch such things.",
            good: false,
            skill: "polite",
            react: { en: "Oh! But it's really for people our age.", te: "అయ్యో! కానీ ఇది నిజంగా మన వయసువాళ్ళ కోసమేనండీ." },
          },
        ],
      },
      {
        partner: "Good! Tell me tomorrow if you liked it.",
        te: "మంచిది! నచ్చిందో లేదో రేపు చెప్పండి.",
        hint: { en: "Promise to tell her, and thank her for the idea.", te: "చెప్తానని మాట ఇచ్చి, ఈ ఆలోచనకి ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, I will. Thanks for telling me, Kavitha!", good: true, skill: "polite" },
          { say: "Sure, I will. Thanks for tell me, Kavitha!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
