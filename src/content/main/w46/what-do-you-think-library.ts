import type { Lesson } from "../../types";

/** Week 46, Day 5 (CURRICULUM §5): asking for opinions — What do you think about the new library timings? */
export const day: Lesson = {
  id: "what-do-you-think-library",
  kind: "lesson",
  title: { en: "What Do You Think?", te: "మీకేమనిపిస్తుంది?" },
  subtitle: "What do you think about …?",
  summary: {
    en: "Learn to ask other people's opinions: What do you think about the new library timings? How do you feel about the parking rule?",
    te: "ఇతరుల అభిప్రాయం అడగడం నేర్చుకుందాం: What do you think about the new library timings? How do you feel about the parking rule?",
  },
  seo: {
    title: "Asking for Opinions in English for Telugu Speakers",
    description:
      "Ask What do you think about the new library timings? and How do you feel about the parking rule? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "What do", role: "action" },
    { text: "you", role: "who" },
    { text: "think", role: "action" },
    { text: "about the new timings?", role: "what" },
  ],
  core: [
    { en: "What do you think about the new library timings?", te: "కొత్త లైబ్రరీ టైమింగ్స్ గురించి మీకేమనిపిస్తోంది?", extra: ["are"] },
    { en: "How do you feel about the parking rule?", te: "పార్కింగ్ రూల్ గురించి మీకు ఎలా అనిపిస్తోంది?", extra: ["feeling"] },
    { en: "Do you think the library should open on Sundays?", te: "లైబ్రరీ ఆదివారాలు కూడా తెరవాలని మీకు అనిపిస్తోందా?", extra: ["Are"] },
    { en: "What does Ramesh think about it?", te: "దాని గురించి రమేష్ గారు ఏమనుకుంటున్నారు?", extra: ["thinks"] },
    { en: "The library closes at six, but many people work till six.", te: "లైబ్రరీ ఆరింటికే మూసేస్తారు, కానీ చాలామంది ఆరు దాకా పని చేస్తారు.", extra: ["close"] },
    { en: "What's your view? We'll discuss it at the residents' meeting.", te: "మీ అభిప్రాయం ఏంటి? రెసిడెంట్స్ మీటింగ్‌లో దాని గురించి మాట్లాడుకుంటాం.", extra: ["about"] },
    { en: "Do the residents want more parking near the gate?", te: "గేటు దగ్గర ఇంకా పార్కింగ్ కావాలని రెసిడెంట్స్ అనుకుంటున్నారా?", extra: ["Does"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask one neighbour or friend today: What do you think about …? Listen to the answer, and say That's true or I see your point.",
    te: "ఈ రోజు ఒక పక్కింటివారిని లేదా స్నేహితులని అడగండి: What do you think about …? జవాబు విని, That's true లేదా I see your point అనండి.",
  },
  words: [
    { en: "what do you think about", te: "… గురించి మీకేమనిపిస్తుంది?" },
    { en: "how do you feel about", te: "… గురించి మీకు ఎలా అనిపిస్తుంది?" },
    { en: "timings", te: "టైమింగ్స్, తెరిచే మూసే వేళలు" },
    { en: "vote", te: "ఓటు వేయడం, చేతులెత్తి నిర్ణయించడం" },
    { en: "discuss", te: "చర్చించడం, దాని గురించి మాట్లాడుకోవడం" },
  ],
  grammar: ["question-words", "yes-no-questions", "present-simple", "politeness-softening"],
  topics: ["neighbours", "people", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for an opinion", te: "అభిప్రాయం అడగడం" },
      body: {
        en: "To ask someone's opinion, say What do you think about …? or How do you feel about …? In English, do comes before you.",
        te: "ఇతరుల అభిప్రాయం అడగాలంటే What do you think about …? లేదా How do you feel about …? అనండి. ఇంగ్లీష్‌లో do, you కంటే ముందు వస్తుంది.",
      },
      bridge: {
        te: ["కొత్త టైమింగ్స్ గురించి", "మీకు", "ఏమనిపిస్తోంది?"],
        en: [
          { text: "What do", role: "action" },
          { text: "you", role: "who" },
          { text: "think", role: "action" },
          { text: "about the new timings?", role: "what" },
        ],
      },
      examples: [
        { en: "What do you think about the new library timings?", te: "కొత్త లైబ్రరీ టైమింగ్స్ గురించి మీకేమనిపిస్తోంది?" },
        { en: "How do you feel about the parking rule?", te: "పార్కింగ్ రూల్ గురించి మీకు ఎలా అనిపిస్తోంది?" },
        { en: "Do you think the library should open on Sundays?", te: "లైబ్రరీ ఆదివారాలు కూడా తెరవాలని మీకు అనిపిస్తోందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which question?", te: "ఏ ప్రశ్న అడగాలి?" },
      items: [
        {
          form: "What do you think about …?",
          useFor: { en: "Ask for an opinion on a plan or a change.", te: "ఒక ప్లాన్ లేదా మార్పు గురించి అభిప్రాయం అడగడానికి." },
          example: { en: "What do you think about the new library timings?", te: "కొత్త లైబ్రరీ టైమింగ్స్ గురించి మీకేమనిపిస్తోంది?" },
        },
        {
          form: "How do you feel about …?",
          useFor: { en: "Ask how a change feels to someone. It sounds warm.", te: "ఒక మార్పు వాళ్ళకి ఎలా అనిపిస్తోందో అడగడానికి. ఆప్యాయంగా ఉంటుంది." },
          example: { en: "How do you feel about the parking rule?", te: "పార్కింగ్ రూల్ గురించి మీకు ఎలా అనిపిస్తోంది?" },
        },
        {
          form: "Do you think …?",
          useFor: { en: "A yes or no question about an opinion.", te: "అభిప్రాయం గురించి అవును / కాదు ప్రశ్న." },
          example: { en: "Do you think the library should open on Sundays?", te: "లైబ్రరీ ఆదివారాలు కూడా తెరవాలని మీకు అనిపిస్తోందా?" },
        },
        {
          form: "What does he think …?",
          useFor: { en: "Another person's opinion: does, and think with no s.", te: "ఇంకొకరి అభిప్రాయం: does వస్తుంది, think కి s రాదు." },
          example: { en: "What does Ramesh think about it?", te: "దాని గురించి రమేష్ గారు ఏమనుకుంటున్నారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What you think about the new timings?",
      right: "What do you think about the new timings?",
      why: {
        en: "A what question needs do before you; Telugu adds no such word, but English does.",
        te: "what ప్రశ్నలో you కంటే ముందు do కావాలి; తెలుగులో అలాంటి పదం ఉండదు, ఇంగ్లీష్‌లో ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Let's discuss about the timings at the meeting.",
      right: "Let's discuss the timings at the meeting.",
      why: {
        en: "Discuss means talk about, so about is already inside it; Telugu గురించి makes people add it.",
        te: "discuss అంటేనే 'దాని గురించి మాట్లాడటం'; తెలుగు 'గురించి' వల్ల about కలుపుతారు, కానీ అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask your neighbour Fatima how she feels about the parking rule.",
        te: "పార్కింగ్ రూల్ గురించి ఎలా అనిపిస్తోందని మీ పక్కింటి ఫాతిమా గారిని అడగండి.",
      },
      options: ["How do you feel about the parking rule?", "How you feel about the parking rule?", "How do you feel the parking rule?"],
      answer: 0,
      why: {
        en: "A how question needs do before you, and feel takes about before the thing.",
        te: "how ప్రశ్నలో you కంటే ముందు do కావాలి; feel తర్వాత విషయానికి ముందు about వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Green Park Colony Residents' Association",
      lines: [
        "Dear Residents,",
        "Our monthly meeting is this Sunday at 5 pm.",
        "Place: the community hall, near Gate 2.",
        "We will discuss three things:",
        "the new library timings, from 8 am to 8 pm,",
        "a parking rule for visitors' cars,",
        "and cleaning the water tank.",
        "Please come, share your views and vote.",
        "We will serve tea and snacks.",
        "Secretary, Green Park Colony",
      ],
      questions: [
        {
          prompt: { en: "When is the meeting?", te: "మీటింగ్ ఎప్పుడు?" },
          options: ["This Sunday at 5 pm", "This Saturday at 8 am", "Every day at 8 pm"],
          answer: 0,
          why: { en: "The second line gives the day and the time of the meeting.", te: "రెండో లైన్‌లో మీటింగ్ రోజు, టైమ్ ఉన్నాయి." },
        },
        {
          prompt: { en: "What are the new library timings?", te: "కొత్త లైబ్రరీ టైమింగ్స్ ఏంటి?" },
          options: ["From 8 am to 8 pm", "From 5 am to 5 pm", "Only on Sundays"],
          answer: 0,
          why: { en: "The fifth line gives the new opening and closing times.", te: "ఐదో లైన్‌లో లైబ్రరీ తెరిచే, మూసే కొత్త టైమ్ ఉంది." },
        },
        {
          prompt: { en: "What does the notice ask residents to do?", te: "నోటీసులో రెసిడెంట్స్‌ని ఏం చేయమని అడుగుతున్నారు?" },
          options: ["Come, share their views and vote", "Pay for the water tank", "Park outside the gate"],
          answer: 0,
          why: { en: "Near the end, the notice invites everyone to come, speak and decide together.", te: "చివర్లో, అందరినీ వచ్చి మాట్లాడి, కలిసి నిర్ణయించమని నోటీసు పిలుస్తోంది." },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "What ___ Ramesh think about the new timings?",
      te: "కొత్త టైమింగ్స్ గురించి రమేష్ గారు ఏమనుకుంటున్నారు?",
      options: ["does", "do", "is"],
      answer: 0,
      why: {
        en: "With one person, like he, the question uses does, and think stays plain.",
        te: "ఒక్కరి గురించి (he లాగా) అడిగితే does వస్తుంది; think మామూలుగానే ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Many resident want more parking near the gate.",
      wrongIndex: 1,
      fix: "Many residents want more parking near the gate.",
      why: {
        en: "After many, a word for people or things takes s.",
        te: "many తర్వాత మనుషులకీ, వస్తువులకీ s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You meet your neighbour Ayesha. Ask her opinion of the new library timings.",
        te: "మీ పక్కింటి ఆయేషా గారు కలిశారు. కొత్త లైబ్రరీ టైమింగ్స్ గురించి ఆవిడ అభిప్రాయం అడగండి.",
      },
      expected: [
        "What do you think about the new library timings?",
        "What do you think about the new timings?",
        "How do you feel about the new library timings?",
      ],
      options: [
        "What do you think about the new library timings?",
        "What you think about the new library timings?",
        "What do you think the new library timings?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell your neighbour that the colony will talk about parking at the residents' meeting.",
        te: "రెసిడెంట్స్ మీటింగ్‌లో పార్కింగ్ గురించి మాట్లాడుకుంటామని పక్కింటివారికి చెప్పండి.",
      },
      expected: [
        "We'll discuss parking at the residents' meeting.",
        "We'll discuss it at the meeting.",
        "We'll talk about parking at the meeting.",
      ],
      options: [
        "We'll discuss parking at the residents' meeting.",
        "We'll discuss about parking at the residents' meeting.",
        "We'll discussing parking at the residents' meeting.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Before the meeting", te: "మీటింగ్‌కి ముందు" },
    scene: {
      en: "The residents' meeting is on Sunday. You meet your neighbour Srinivas and ask his views.",
      te: "రెసిడెంట్స్ మీటింగ్ ఆదివారం. మీ పక్కింటి శ్రీనివాస్ గారిని కలిసి ఆయన అభిప్రాయాలు అడుగుతున్నారు.",
    },
    partner: { en: "Srinivas (your neighbour)", te: "శ్రీనివాస్ (పక్కింటివారు)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking for opinions", te: "అభిప్రాయం అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Are you coming to the residents' meeting on Sunday?",
        te: "హలో! ఆదివారం రెసిడెంట్స్ మీటింగ్‌కి వస్తున్నారా?",
        hint: { en: "Say yes, and ask his opinion of the new library timings.", te: "వస్తున్నానని చెప్పి, కొత్త లైబ్రరీ టైమింగ్స్ గురించి ఆయన అభిప్రాయం అడగండి." },
        replies: [
          { say: "Yes. What do you think about the new library timings?", good: true, skill: "ask" },
          { say: "Yes. What you think about the new library timings?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "I like them. It opens at eight now, so I read the newspaper there.",
        te: "నాకు నచ్చాయి. ఇప్పుడు ఎనిమిదింటికే తెరుస్తారు, అందుకే అక్కడ పేపర్ చదువుతాను.",
        hint: { en: "Say that's good, and ask how he feels about the parking rule.", te: "మంచిదని చెప్పి, పార్కింగ్ రూల్ గురించి ఎలా అనిపిస్తోందని అడగండి." },
        replies: [
          { say: "That's good. How do you feel about the parking rule?", good: true, skill: "ask" },
          { say: "That's good. How are you feel about the parking rule?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "I don't like it. Where will my relatives park their cars?",
        te: "నాకు నచ్చలేదు. మా బంధువులు కార్లు ఎక్కడ పెడతారు?",
        hint: { en: "Say it's a good point, and ask him to say it at the meeting.", te: "మంచి విషయం అని చెప్పి, మీటింగ్‌లో అదే చెప్పమని అడగండి." },
        replies: [
          { say: "That's a good point. Please say it at the meeting.", good: true, skill: "polite" },
          {
            say: "That's your problem, not mine.",
            good: false,
            skill: "polite",
            react: { en: "Oh! I thought we were good neighbours.", te: "అయ్యో! మనం మంచి పొరుగువాళ్ళం అనుకున్నాను." },
          },
        ],
      },
      {
        partner: "Sure. Thanks for asking. Let's vote on it together on Sunday!",
        te: "తప్పకుండా. అడిగినందుకు థాంక్స్. ఆదివారం దాని మీద కలిసి ఓటు వేద్దాం!",
        hint: { en: "Say goodbye, and say you will see him at the meeting.", te: "బై చెప్పి, మీటింగ్‌లో కలుద్దామని చెప్పండి." },
        replies: [
          { say: "You're welcome. See you at the meeting!", good: true, skill: "polite" },
          { say: "You're welcome. See you at meeting!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
