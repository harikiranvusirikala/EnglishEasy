import type { Lesson } from "../../types";

/** Week 26, Day 4 (CURRICULUM §4): Fix-It Clinic — the eight Fix-it errors started so far (§2), in Weeks 13–25 sentences. */
export const day: Lesson = {
  id: "fix-it-clinic-1",
  kind: "lesson",
  title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" },
  subtitle: "the mistakes we all make",
  summary: {
    en: "Fix the small mistakes Telugu speakers make most: He goes, Why are you late?, two kilos, an appointment and more.",
    te: "తెలుగువాళ్ళు ఎక్కువగా చేసే చిన్న తప్పులు సరిచేసుకుందాం: He goes, Why are you late?, two kilos, an appointment, ఇంకా మరికొన్ని.",
  },
  seo: {
    title: "Fixing Common Mistakes in English for Telugu Speakers",
    description:
      "Say He goes by bus, Why are you late? and Two kilos of rice, please. A lesson for Telugu speakers on fixing the most common English mistakes.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "goes", role: "action" },
    { text: "to the market by bus", role: "what" },
  ],
  core: [
    { en: "He goes to the market by bus.", te: "ఆయన బస్‌లో మార్కెట్‌కి వెళ్తారు.", extra: ["go"] },
    { en: "Why are you late today?", te: "ఈ రోజు ఎందుకు లేట్ అయింది?", extra: ["do"] },
    { en: "Two kilos of rice, please.", te: "రెండు కిలోల బియ్యం ఇవ్వండి.", extra: ["kilo"] },
    { en: "My BP is a little high.", te: "నా BP కొంచెం ఎక్కువగా ఉంది.", extra: ["are"] },
    { en: "I know him. He lives near the temple.", te: "ఆయన నాకు తెలుసు. గుడి దగ్గర ఉంటారు.", extra: ["knowing"] },
    { en: "I'll be out of town next week.", te: "వచ్చే వారం నేను ఊర్లో ఉండను.", extra: ["station"] },
    { en: "Can I have an appointment for Monday?", te: "సోమవారానికి అపాయింట్‌మెంట్ ఇస్తారా?", extra: ["a"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick one mistake from today. Say the correct sentence aloud five times.",
    te: "ఈ రోజు నేర్చుకున్న తప్పుల్లో ఒకటి ఎంచుకుని, సరైన వాక్యాన్ని ఐదుసార్లు గట్టిగా అనండి.",
  },
  words: [
    { en: "mistake", te: "తప్పు" },
    { en: "correct", te: "సరైన, సరిచేయడం" },
    { en: "practice", te: "ప్రాక్టీస్, సాధన" },
    { en: "nervous", te: "భయంగా, కంగారుగా" },
    { en: "confident", te: "ధైర్యంగా, నమ్మకంగా" },
  ],
  grammar: ["am-is-are", "present-simple", "question-words", "articles", "plurals-countable", "prepositions"],
  topics: ["people", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Small words, big difference", te: "చిన్న పదాలు, పెద్ద తేడా" },
      body: {
        en: "Most of our mistakes are one small word. Check three things: is or are (My BP is high), s after he or she (He goes), and the question order (Why are you late?). Fix these, and you will sound confident.",
        te: "మన తప్పుల్లో చాలావరకు ఒక చిన్న పదమే. మూడు చూసుకోండి: is / are (My BP is high), he / she తో s (He goes), ప్రశ్నలో వరుస (Why are you late?). ఇవి సరిచేస్తే ధైర్యంగా మాట్లాడతారు.",
      },
      bridge: {
        te: ["ఆయన", "బస్‌లో మార్కెట్‌కి", "వెళ్తారు"],
        en: [
          { text: "He", role: "who" },
          { text: "goes", role: "action" },
          { text: "to the market by bus", role: "what" },
        ],
      },
      examples: [
        { en: "He goes to the market by bus.", te: "ఆయన బస్‌లో మార్కెట్‌కి వెళ్తారు." },
        { en: "Why are you late today?", te: "ఈ రోజు ఎందుకు లేట్ అయింది?" },
        { en: "My BP is a little high.", te: "నా BP కొంచెం ఎక్కువగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Check before you speak", te: "మాట్లాడే ముందు చూసుకోండి" },
      items: [
        {
          form: "two kilos, three days",
          useFor: { en: "More than one: add s.", te: "ఒకటి కంటే ఎక్కువ అయితే s చేర్చండి." },
          example: { en: "Two kilos of rice, please.", te: "రెండు కిలోల బియ్యం ఇవ్వండి." },
        },
        {
          form: "a / an",
          useFor: { en: "One thing: put a or an before it.", te: "ఒక్క వస్తువు అయితే దాని ముందు a లేదా an." },
          example: { en: "Can I have an appointment for Monday?", te: "సోమవారానికి అపాయింట్‌మెంట్ ఇస్తారా?" },
        },
        {
          form: "I know, I go every day",
          useFor: { en: "Know, like, want and daily habits take no -ing.", te: "know, like, want, రోజూ చేసే పనులు: వీటికి -ing రాదు." },
          example: { en: "I know him. He lives near the temple.", te: "ఆయన నాకు తెలుసు. గుడి దగ్గర ఉంటారు." },
        },
        {
          form: "at six, on Sunday",
          useFor: { en: "Small time and place words: learn them in pairs.", te: "సమయం, చోటు చెప్పే చిన్న పదాలు: జంటగా నేర్చుకోండి." },
          example: { en: "I'll call you at six on Sunday.", te: "ఆదివారం ఆరింటికి ఫోన్ చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "My BP a little high today.",
      right: "My BP is a little high today.",
      why: {
        en: "Telugu needs no verb here, but English always needs is or are.",
        te: "తెలుగులో ఇక్కడ verb అక్కర్లేదు, కానీ ఇంగ్లీష్‌లో is లేదా are తప్పనిసరి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I will be out of station next week.",
      right: "I'll be out of town next week.",
      why: {
        en: "Out of station is heard only in India; elsewhere people say out of town.",
        te: "out of station మన దగ్గరే అంటారు; బయట అందరూ out of town అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Your friend comes very late. Ask why.", te: "మీ స్నేహితులు చాలా ఆలస్యంగా వచ్చారు. ఎందుకో అడగండి." },
      options: ["Why are you late?", "Why you are late?", "Why you late?"],
      answer: 0,
      why: {
        en: "In a question, are comes right after the question word, before you.",
        te: "ప్రశ్నలో are ని ప్రశ్న పదం తర్వాత, you కంటే ముందు పెట్టాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Can I have three ___ of sugar?",
      te: "మూడు కిలోల చక్కెర ఇస్తారా?",
      options: ["kilos", "kilo", "kilogram"],
      answer: 0,
      why: {
        en: "Telugu says కిలోలు for more than one; English adds s the same way.",
        te: "తెలుగులో 'కిలోలు' అన్నట్టే, ఇంగ్లీష్‌లో కూడా s చేర్చి kilos అనాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "At the clinic desk, ask for a time to see the doctor.",
        te: "క్లినిక్ కౌంటర్ దగ్గర డాక్టర్‌ని చూడడానికి టైం అడగండి.",
      },
      options: ["Can I have an appointment, please?", "Can I have appointment, please?", "Can I have a appointment, please?"],
      answer: 0,
      why: {
        en: "One appointment needs an before it, because it starts with a vowel sound.",
        te: "ఒక్క appointment కి ముందు an కావాలి, ఎందుకంటే అది అచ్చు శబ్దంతో మొదలవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Mohan live near the bus stand.",
      wrongIndex: 1,
      fix: "Mohan lives near the bus stand.",
      why: {
        en: "One person, like he or she, takes s on the verb, every time.",
        te: "ఒక్కరు (he, she లాగా) అయితే verb కి ఎప్పుడూ s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your friend asks if you go to the temple. You go every day.",
        te: "గుడికి వెళ్తారా అని స్నేహితులు అడిగారు. మీరు రోజూ వెళ్తారు.",
      },
      expected: ["Yes, I go every day.", "Yes, I go to the temple every day."],
      options: ["Yes, I go every day.", "Yes, I am going daily.", "Yes, I goes every day."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell your friend you will call at six.",
        te: "ఆరింటికి ఫోన్ చేస్తానని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I'll call you at six.", "I will call you at six."],
      options: ["I'll call you at six.", "I'll call to you at six.", "I'll call you on six."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Before the phone call", te: "ఫోన్ చేసే ముందు" },
    scene: {
      en: "Your friend Ramesh wants to call a clinic in English. He practices with you first.",
      te: "మీ స్నేహితుడు రమేష్ ఇంగ్లీష్‌లో క్లినిక్‌కి ఫోన్ చేయాలనుకుంటున్నారు. ముందు మీతో ప్రాక్టీస్ చేస్తున్నారు.",
    },
    partner: { en: "Ramesh (a friend)", te: "రమేష్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "fix", label: { en: "Correcting kindly", te: "మర్యాదగా సరిచేయడం" } },
      { id: "kind", label: { en: "Encouraging", te: "ధైర్యం చెప్పడం" } },
    ],
    turns: [
      {
        partner: "I'm calling the clinic. Is this right: I want appointment?",
        te: "నేను క్లినిక్‌కి ఫోన్ చేస్తున్నాను. 'I want appointment' కరెక్టేనా?",
        hint: { en: "Give him the polite way to ask, with an.", te: "an తో, మర్యాదగా ఎలా అడగాలో చెప్పండి." },
        replies: [
          { say: "Say: Can I have an appointment, please?", good: true, skill: "fix" },
          { say: "Yes, it's fine. I want appointment.", good: false, skill: "fix", fixIt: "article" },
        ],
      },
      {
        partner: "Then I say: My mother have knee pain.",
        te: "తర్వాత 'My mother have knee pain' అంటాను.",
        hint: { en: "Correct the verb for one person.", te: "ఒక్కరి గురించి కాబట్టి verb సరిచేయండి." },
        replies: [
          { say: "Almost. Say: My mother has knee pain.", good: true, skill: "fix" },
          { say: "That's fine. Have is right with mother.", good: false, skill: "fix", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "And: Doctor is coming on which day?",
        te: "ఇంకా 'Doctor is coming on which day?' అని అడుగుతాను.",
        hint: { en: "Give the right order: start with the question word.", te: "సరైన వరుస చెప్పండి: ప్రశ్న పదంతో మొదలుపెట్టండి." },
        replies: [
          { say: "Better: Which day is the doctor free?", good: true, skill: "fix" },
          { say: "Better: When is the doctor free?", good: true, skill: "fix" },
          { say: "Better: Which day doctor is free?", good: false, skill: "fix", fixIt: "question" },
        ],
      },
      {
        partner: "Thank you! I'm not so nervous now.",
        te: "థాంక్యూ! ఇప్పుడు అంత కంగారుగా లేదు.",
        hint: { en: "Wish him luck for the call.", te: "కాల్ బాగా జరగాలని చెప్పండి." },
        replies: [
          { say: "Good luck! You'll do well.", good: true, skill: "kind" },
          {
            say: "Finally! You made so many mistakes.",
            good: false,
            skill: "kind",
            react: { en: "Ha! Yes, but I'm learning.", te: "హా! అవును, కానీ నేర్చుకుంటున్నాను కదా." },
          },
        ],
      },
    ],
  },
};
