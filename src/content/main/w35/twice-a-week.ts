import type { Lesson } from "../../types";

/** Week 35, Day 3 (CURRICULUM §4): how often, with hobbies — I go to the library twice a week. How often do you …? */
export const day: Lesson = {
  id: "twice-a-week",
  kind: "lesson",
  title: { en: "Twice a Week", te: "వారానికి రెండుసార్లు" },
  subtitle: "How often? once / twice a week",
  summary: {
    en: "Learn to ask and say how often you do your hobbies: How often do you play carrom? Twice a week.",
    te: "హాబీలు ఎన్నిసార్లు చేస్తారో అడగడం, చెప్పడం నేర్చుకుందాం: How often do you play carrom? Twice a week.",
  },
  seo: {
    title: "How Often: Twice a Week in English for Telugu Speakers",
    description:
      "Ask How often do you play carrom? and say I go to the library twice a week. Simple lessons for Telugu speakers on how often.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "go", role: "action" },
    { text: "to the library", role: "what" },
    { text: "twice a week", role: "when" },
  ],
  core: [
    { en: "I go to the library twice a week.", te: "నేను వారానికి రెండుసార్లు లైబ్రరీకి వెళ్తాను.", extra: ["in"] },
    { en: "How often do you play carrom?", te: "మీరు క్యారమ్ ఎన్నిసార్లు ఆడుతుంటారు?", extra: ["are"] },
    { en: "We play chess three times a week.", te: "మేము వారానికి మూడుసార్లు చెస్ ఆడతాం.", extra: ["time"] },
    { en: "I do yoga every morning.", te: "నేను రోజూ ఉదయం యోగా చేస్తాను.", extra: ["am"] },
    { en: "She goes to the temple once a week.", te: "ఆవిడ వారానికి ఒకసారి గుడికి వెళ్తారు.", extra: ["go"] },
    { en: "The laughter club meets every day at six.", te: "లాఫ్టర్ క్లబ్ రోజూ ఆరింటికి జరుగుతుంది.", extra: ["meet"] },
    { en: "I don't go very often, only on Sundays.", te: "నేను ఎక్కువగా వెళ్ళను, ఆదివారాలు మాత్రమే.", extra: ["daily"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Say how often you do three things: walk, watch TV, call a friend.",
    te: "మూడు పనులు ఎన్నిసార్లు చేస్తారో చెప్పండి: నడక, TV చూడటం, స్నేహితులకి ఫోన్ చేయడం.",
  },
  words: [
    { en: "how often", te: "ఎన్నిసార్లు (ఎంత ఎక్కువగా)" },
    { en: "every other day", te: "రోజు విడిచి రోజు" },
    { en: "laughter club", te: "లాఫ్టర్ క్లబ్, నవ్వుల క్లబ్" },
    { en: "carrom", te: "క్యారమ్" },
    { en: "chess", te: "చెస్, చదరంగం" },
  ],
  grammar: ["adverbs-frequency", "question-words"],
  topics: ["time", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How often?", te: "ఎన్నిసార్లు?" },
      body: {
        en: "Ask How often do you …? The answer goes at the end: once a week, twice a week, three times a week, every day. For వారానికి, say a week, with no in.",
        te: "ఎన్నిసార్లో అడగాలంటే How often do you …? జవాబు వాక్యం చివర వస్తుంది: once a week, twice a week, three times a week, every day. 'వారానికి' అంటే a week; in అక్కర్లేదు.",
      },
      bridge: {
        te: ["నేను", "వారానికి రెండుసార్లు", "లైబ్రరీకి", "వెళ్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "go", role: "action" },
          { text: "to the library", role: "what" },
          { text: "twice a week", role: "when" },
        ],
      },
      examples: [
        { en: "I go to the library twice a week.", te: "నేను వారానికి రెండుసార్లు లైబ్రరీకి వెళ్తాను." },
        { en: "The laughter club meets every day at six.", te: "లాఫ్టర్ క్లబ్ రోజూ ఆరింటికి జరుగుతుంది." },
        { en: "I don't go very often, only on Sundays.", te: "నేను ఎక్కువగా వెళ్ళను, ఆదివారాలు మాత్రమే." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How many times?", te: "ఎన్నిసార్లు?" },
      items: [
        {
          form: "once a week",
          useFor: { en: "One time every week.", te: "వారానికి ఒకసారి." },
          example: { en: "She goes to the temple once a week.", te: "ఆవిడ వారానికి ఒకసారి గుడికి వెళ్తారు." },
        },
        {
          form: "twice a week",
          useFor: { en: "Two times every week.", te: "వారానికి రెండుసార్లు." },
          example: { en: "I go to the library twice a week.", te: "నేను వారానికి రెండుసార్లు లైబ్రరీకి వెళ్తాను." },
        },
        {
          form: "three times a week",
          useFor: { en: "Three or more: say times, with s.", te: "మూడు, అంతకంటే ఎక్కువ: times అనాలి, s తో." },
          example: { en: "We play chess three times a week.", te: "మేము వారానికి మూడుసార్లు చెస్ ఆడతాం." },
        },
        {
          form: "every day / every other day",
          useFor: { en: "Each day, or one day yes and one day no.", te: "ప్రతి రోజూ, లేదా రోజు విడిచి రోజు." },
          example: { en: "I go walking every other day.", te: "నేను రోజు విడిచి రోజు వాకింగ్‌కి వెళ్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am going to the library daily.",
      right: "I go to the library every day.",
      why: {
        en: "For a habit, use I go, not I am going; am going means right now.",
        te: "అలవాటు చెప్పేటప్పుడు I go; I am going అంటే ఇప్పుడు వెళ్తున్నాను అని.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We play chess three times in a week.",
      right: "We play chess three times a week.",
      why: {
        en: "Telugu says వారానికి, but English says a week, with no in.",
        te: "తెలుగులో 'వారానికి' అంటాం; ఇంగ్లీష్‌లో a week చాలు, in అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your neighbour how often she does yoga.", te: "పక్కింటావిడ ఎన్నిసార్లు యోగా చేస్తారో అడగండి." },
      options: ["How often you do yoga?", "How often do you do yoga?", "How much do you do yoga?"],
      answer: 1,
      why: {
        en: "A how often question needs do before you, like every do question.",
        te: "How often ప్రశ్నలో you ముందు do కావాలి, మిగతా do ప్రశ్నల లాగే.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Yoga Class for Seniors",
      lines: ["Community Hall, Gandhi Nagar", "Every Tuesday and Friday", "6:30 am to 7:30 am", "No fee. All are welcome."],
      prompt: { en: "How often is the yoga class?", te: "యోగా క్లాస్ ఎన్నిసార్లు జరుగుతుంది?" },
      options: ["Once a week", "Twice a week", "Every day"],
      answer: 1,
      why: {
        en: "It is on Tuesday and Friday, so two days every week.",
        te: "క్లాస్ మంగళవారం, శుక్రవారం ఉంది, అంటే ప్రతి వారం రెండు రోజులు.",
      },
      say: "The yoga class is twice a week.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "You play carrom on Monday, Wednesday and Friday. What do you say?",
        te: "మీరు సోమ, బుధ, శుక్రవారాల్లో క్యారమ్ ఆడతారు. ఏమంటారు?",
      },
      options: ["I play carrom three time a week.", "I play carrom three times a week.", "I play carrom thrice in a week."],
      answer: 1,
      why: {
        en: "After three, time needs s, and English says a week, not in a week.",
        te: "మూడు తర్వాత times, s తో; 'వారానికి' అంటే a week, in a week కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "How often does she goes to the temple?",
      wrongIndex: 4,
      fix: "How often does she go to the temple?",
      why: {
        en: "After does, the verb stays plain, because does already has the s.",
        te: "does తర్వాత verb మారదు; s ఇప్పటికే does లో ఉంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell a friend you go to the library two days every week.",
        te: "మీరు ప్రతి వారం రెండు రోజులు లైబ్రరీకి వెళ్తారని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I go to the library twice a week.", "I go to the library two times a week."],
      options: ["I go to the library twice a week.", "I am going to the library twice a week.", "I go to the library twice in a week."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask a friend how often he plays chess.",
        te: "ఆయన ఎన్నిసార్లు చెస్ ఆడతారో స్నేహితుడిని అడగండి.",
      },
      expected: ["How often do you play chess?"],
      options: ["How often do you play chess?", "How often you play chess?", "How many do you play chess?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Joining a laughter club", te: "లాఫ్టర్ క్లబ్‌లో చేరడం" },
    scene: {
      en: "In the park, Narayana runs a laughter club for seniors. You want to join.",
      te: "పార్కులో నారాయణ గారు పెద్దవాళ్ళ కోసం లాఫ్టర్ క్లబ్ నడుపుతున్నారు. మీరు చేరాలనుకుంటున్నారు.",
    },
    partner: { en: "Narayana (club leader)", te: "నారాయణ (క్లబ్ నడిపేవారు)" },
    voice: "b",
    skills: [{ id: "often", label: { en: "How often", te: "ఎన్నిసార్లు" } }],
    turns: [
      {
        partner: "Good morning! Are you new here?",
        te: "నమస్కారం! మీరు ఇక్కడ కొత్తా?",
        hint: { en: "Say yes, give your name, and say you want to join.", te: "అవునని, మీ పేరు చెప్పి, క్లబ్‌లో చేరాలనుకుంటున్నారని చెప్పండి." },
        replies: [
          { say: "Yes. I'm Kiran. I'd like to join the club.", good: true },
          { say: "Yes. Myself Kiran. I'd like to join the club.", good: false, fixIt: "indian-english" },
        ],
      },
      {
        partner: "Welcome! We meet every morning at six.",
        te: "స్వాగతం! మేము రోజూ ఉదయం ఆరింటికి కలుస్తాం.",
        hint: { en: "Ask if you must come on all seven days.", te: "వారంలో ఏడు రోజులూ రావాలా అని అడగండి." },
        replies: [
          { say: "Do I have to come every day?", good: true, skill: "often" },
          { say: "I have to come every day?", good: false, skill: "often", fixIt: "question" },
          {
            say: "Six? That's too early. No way.",
            good: false,
            skill: "often",
            react: { en: "Don't worry, you can start slowly.", te: "కంగారు పడకండి, నెమ్మదిగా మొదలుపెట్టొచ్చు." },
          },
        ],
      },
      {
        partner: "No, come when you can. How often do you walk?",
        te: "లేదండీ, వీలైనప్పుడు రండి. మీరు ఎన్నిసార్లు వాకింగ్ చేస్తుంటారు?",
        hint: { en: "Say how often you walk: three days every week.", te: "ఎన్నిసార్లు నడుస్తారో చెప్పండి: ప్రతి వారం మూడు రోజులు." },
        replies: [
          { say: "I walk three times a week.", good: true, skill: "often" },
          { say: "I am walking three times a week.", good: false, skill: "often", fixIt: "state-ing" },
          { say: "I walk three time a week.", good: false, skill: "often", fixIt: "plural" },
        ],
      },
      {
        partner: "Very good! See you tomorrow morning, then.",
        te: "చాలా మంచిది! అయితే రేపు ఉదయం కలుద్దాం.",
        hint: { en: "Thank him, and say you will come tomorrow.", te: "ఆయనకి థాంక్స్ చెప్పి, రేపు వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll come tomorrow.", good: true },
          { say: "Thank you. I will coming tomorrow.", good: false },
        ],
      },
    ],
  },
};
