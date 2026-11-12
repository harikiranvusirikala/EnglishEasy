import type { Lesson } from "../../types";

/** Week 43, Day 5 (CURRICULUM §5): a short life story in order, with both tenses and after, since — After school, I joined a bank in Nellore. */
export const day: Lesson = {
  id: "my-life-story-in-brief",
  kind: "lesson",
  title: { en: "My Life in a Few Sentences", te: "నా జీవితం కొన్ని మాటల్లో" },
  subtitle: "After …, I … / since I moved here",
  summary: {
    en: "Learn to tell your life story in order, in a few sentences: After school, I joined a bank. I have made many good friends since I moved here.",
    te: "మీ జీవిత కథని వరుసగా, కొన్ని వాక్యాల్లో చెప్పడం నేర్చుకుందాం: After school, I joined a bank. I have made many good friends since I moved here.",
  },
  seo: {
    title: "Telling Your Life Story in English for Telugu Speakers",
    description:
      "Say After school, I joined a bank and I have made many friends since I moved here. Simple lessons for Telugu speakers on a short life story.",
  },
  pattern: [
    { text: "After school,", role: "when" },
    { text: "I", role: "who" },
    { text: "joined", role: "action" },
    { text: "a bank in Nellore", role: "what" },
  ],
  core: [
    { en: "I joined a bank in Nellore.", te: "నేను నెల్లూరులో ఒక బ్యాంక్‌లో చేరాను.", extra: ["join"] },
    { en: "After school, I worked on my father's farm.", te: "స్కూల్ అయ్యాక నేను మా నాన్నగారి పొలంలో పని చేశాను.", extra: ["have"] },
    { en: "I have made many good friends since I moved here.", te: "ఇక్కడికి వచ్చినప్పటి నుంచి నాకు చాలా మంది మంచి స్నేహితులు అయ్యారు.", extra: ["make"] },
    { en: "Let me tell you a little about myself.", te: "నా గురించి కొంచెం చెప్తాను.", extra: ["say"] },
    { en: "I came to Hyderabad after I retired.", te: "రిటైర్ అయ్యాక నేను హైదరాబాద్ వచ్చాను.", extra: ["come"] },
    { en: "Now I live here with my sister.", te: "ఇప్పుడు నేను మా అక్కతో కలిసి ఇక్కడ ఉంటున్నాను.", extra: ["living"] },
    { en: "After that, I moved to Guntur for work.", te: "ఆ తర్వాత పని కోసం గుంటూరుకి మారాను.", extra: ["moving"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell your life story in three sentences, to a friend or aloud to yourself: I was born … After …, I … I have …",
    te: "మీ జీవిత కథని మూడు వాక్యాల్లో ఒక స్నేహితులకి గానీ, మీకు మీరే గట్టిగా గానీ చెప్పండి: I was born … After …, I … I have …",
  },
  words: [
    { en: "joined", te: "చేరాను, చేరారు" },
    { en: "after school", te: "స్కూల్ చదువు అయ్యాక" },
    { en: "make friends", te: "స్నేహితులను సంపాదించుకోవడం" },
    { en: "walking group", te: "వాకింగ్ గ్రూప్, కలిసి నడిచే బృందం" },
    { en: "life story", te: "జీవిత కథ" },
  ],
  grammar: ["past-simple", "present-perfect", "connectors"],
  topics: ["people", "neighbours", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A life in order", te: "జీవితం వరుసగా" },
      body: {
        en: "Tell your story in order with after, and use the past for each step. For what is still true today, use have: I have made many friends.",
        te: "after తో వరుసగా చెప్పండి; ప్రతి దశకి past వాడండి. ఈ రోజుకీ నిజమైనదానికి have: I have made many friends.",
      },
      bridge: {
        te: ["స్కూల్ అయ్యాక", "నేను", "నెల్లూరులో ఒక బ్యాంక్‌లో", "చేరాను"],
        en: [
          { text: "After school,", role: "when" },
          { text: "I", role: "who" },
          { text: "joined", role: "action" },
          { text: "a bank in Nellore", role: "what" },
        ],
      },
      examples: [
        { en: "I joined a bank in Nellore.", te: "నేను నెల్లూరులో ఒక బ్యాంక్‌లో చేరాను." },
        { en: "After school, I worked on my father's farm.", te: "స్కూల్ అయ్యాక నేను మా నాన్నగారి పొలంలో పని చేశాను." },
        { en: "I have made many good friends since I moved here.", te: "ఇక్కడికి వచ్చినప్పటి నుంచి నాకు చాలా మంది మంచి స్నేహితులు అయ్యారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Joining the steps", te: "దశలను కలపడం" },
      items: [
        {
          form: "Let me tell you …",
          useFor: { en: "A polite way to start your story.", te: "మీ కథ మర్యాదగా మొదలుపెట్టడానికి." },
          example: { en: "Let me tell you a little about myself.", te: "నా గురించి కొంచెం చెప్తాను." },
        },
        {
          form: "After school, I …",
          useFor: { en: "The next step in your life.", te: "జీవితంలో తర్వాతి దశ." },
          example: { en: "After school, I worked on my father's farm.", te: "స్కూల్ అయ్యాక నేను మా నాన్నగారి పొలంలో పని చేశాను." },
        },
        {
          form: "after I retired",
          useFor: { en: "After can take a whole sentence too.", te: "after తర్వాత పూర్తి వాక్యం కూడా రావొచ్చు." },
          example: { en: "I came to Hyderabad after I retired.", te: "రిటైర్ అయ్యాక నేను హైదరాబాద్ వచ్చాను." },
        },
        {
          form: "since I moved here",
          useFor: { en: "From that time to now; use have before it.", te: "అప్పటి నుంచి ఇప్పటి దాకా; ముందు have వాడాలి." },
          example: { en: "Sita has made many friends since she moved here.", te: "ఇక్కడికి వచ్చినప్పటి నుంచి సీత గారికి చాలా మంది స్నేహితులు అయ్యారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Myself Sai. I am from Nellore.",
      right: "I'm Sai. I'm from Nellore.",
      why: {
        en: "An introduction never starts with Myself; say I'm and then your name.",
        te: "పరిచయం Myself తో మొదలవదు; I'm అని, తర్వాత మీ పేరు చెప్పండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am here since two thousand ten.",
      right: "I have been here since two thousand ten.",
      why: {
        en: "With since, English needs have been, not am, even though Telugu says ఉన్నాను.",
        te: "since ఉంటే am కాదు, have been కావాలి; తెలుగులో 'ఉన్నాను' అన్నా సరే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "You join a new walking group. Introduce yourself.", te: "మీరు కొత్త వాకింగ్ గ్రూప్‌లో చేరారు. మిమ్మల్ని మీరు పరిచయం చేసుకోండి." },
      options: ["Good morning, everyone. I'm Kiran.", "Good morning, everyone. Myself Kiran.", "Good morning, everyone. I Kiran."],
      answer: 0,
      why: {
        en: "To introduce yourself, say I'm and your name, never Myself.",
        te: "పరిచయం చేసుకోవడానికి I'm తర్వాత పేరు; Myself అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I have made many friends ___ I moved here.",
      te: "ఇక్కడికి వచ్చినప్పటి నుంచి నాకు చాలా మంది స్నేహితులు అయ్యారు.",
      options: ["since", "for", "from"],
      answer: 0,
      why: {
        en: "Since joins the moment it all started; for needs a length of time.",
        te: "మొదలైన సమయాన్ని కలపడానికి since; for తర్వాత ఎంత కాలమో రావాలి.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "news",
      heading: "Colony News: Meet Our Neighbour",
      lines: [
        "This month, we meet Gopal Rao of Block B.",
        "He was born in Kurnool in nineteen fifty-four.",
        "After college, he joined the Railways as a booking clerk.",
        "He worked at Kurnool and Guntur stations for thirty-two years.",
        "He retired in two thousand twelve.",
        "He has lived in our colony since two thousand thirteen.",
        "Since then, he has planted over fifty trees in our park.",
        "He has also taught many neighbours to play chess.",
        "Thank you, Gopal, for all your work!",
      ],
      questions: [
        {
          prompt: { en: "When did Gopal retire?", te: "గోపాల్ గారు ఎప్పుడు రిటైర్ అయ్యారు?" },
          options: ["In two thousand twelve", "In two thousand thirteen", "In nineteen fifty-four"],
          answer: 0,
          why: {
            en: "The fifth line gives the year his railway work ended.",
            te: "ఐదో లైన్‌లో ఆయన రైల్వే ఉద్యోగం అయిపోయిన సంవత్సరం ఉంది.",
          },
        },
        {
          prompt: { en: "Does Gopal still live in the colony?", te: "గోపాల్ గారు ఇప్పటికీ ఈ కాలనీలో ఉంటున్నారా?" },
          options: ["Yes, he has lived there since two thousand thirteen", "No, he lived there until two thousand twelve", "No, he lives in Kurnool now"],
          answer: 0,
          why: {
            en: "Has lived since means it started then and is still true today.",
            te: "has lived since అంటే అప్పుడు మొదలై, ఈ రోజుకీ నిజమని అర్థం.",
          },
        },
        {
          prompt: { en: "What has Gopal done for the park?", te: "పార్క్ కోసం గోపాల్ గారు ఏం చేశారు?" },
          options: ["He has planted over fifty trees", "He has built a new gate", "He has started a chess club"],
          answer: 0,
          why: {
            en: "The seventh line tells us what he did in the park.",
            te: "ఏడో లైన్‌లో పార్క్‌లో ఆయన ఏం చేశారో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "After school, I joined bank in Nellore.",
      wrongIndex: 4,
      fix: "After school, I joined a bank in Nellore.",
      why: {
        en: "Bank is something you can count, so it needs a; Telugu has no such word.",
        te: "bank లెక్కపెట్టగలిగేది, అందుకే ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Start telling a new friend about your life, politely.",
        te: "కొత్త స్నేహితులకి మీ జీవితం గురించి మర్యాదగా చెప్పడం మొదలుపెట్టండి.",
      },
      expected: ["Let me tell you a little about myself.", "Let me tell you about myself.", "Let me tell you a little about my life."],
      options: ["Let me tell you a little about myself.", "Let me say you a little about myself.", "I will tell about myself a little."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Tell the walking group you have made many good friends since you moved here.",
        te: "ఇక్కడికి వచ్చినప్పటి నుంచి చాలా మంది మంచి స్నేహితులు అయ్యారని వాకింగ్ గ్రూప్‌కి చెప్పండి.",
      },
      expected: ["I have made many good friends since I moved here.", "I've made many friends since I moved here.", "I have made many friends here."],
      options: [
        "I have made many good friends since I moved here.",
        "I am making many good friends since I moved here.",
        "I made many good friends since I am moving here.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new walking group", te: "కొత్త వాకింగ్ గ్రూప్" },
    scene: {
      en: "You join a morning walking group in the park. Mohan, who leads it, welcomes you.",
      te: "మీరు పార్క్‌లో ఒక పొద్దుటి వాకింగ్ గ్రూప్‌లో చేరారు. ఆ గ్రూప్‌ని నడిపే మోహన్ గారు మీకు స్వాగతం చెప్తున్నారు.",
    },
    partner: { en: "Mohan (the group leader)", te: "మోహన్ (గ్రూప్ లీడర్)" },
    voice: "b",
    skills: [
      { id: "story", label: { en: "Telling your story", te: "మీ కథ చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Welcome to our walking group. Please tell us about yourself.",
        te: "నమస్తే! మా వాకింగ్ గ్రూప్‌కి స్వాగతం. మీ గురించి చెప్పండి.",
        hint: { en: "Greet everyone, and say your name.", te: "అందరికీ నమస్తే చెప్పి, మీ పేరు చెప్పండి." },
        replies: [
          { say: "Good morning, everyone. I'm Kiran.", good: true, skill: "polite" },
          { say: "Good morning, everyone. Myself Kiran.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Nice to meet you, Kiran. Where are you from?",
        te: "మిమ్మల్ని కలవడం సంతోషం, కిరణ్ గారూ. మీది ఏ ఊరు?",
        hint: { en: "Say you were born in Nellore, and the year you came here: 2010.", te: "నెల్లూరులో పుట్టారని, ఇక్కడికి వచ్చిన సంవత్సరం చెప్పండి: 2010." },
        replies: [
          { say: "I was born in Nellore, and I came here in two thousand ten.", good: true, skill: "story" },
          { say: "I born in Nellore, and I came here in two thousand ten.", good: false, skill: "story", fixIt: "be" },
        ],
      },
      {
        partner: "What did you do in Nellore?",
        te: "నెల్లూరులో ఏం చేసేవారు?",
        hint: { en: "Say you worked at a bank for thirty years, and you are retired now.", te: "ముప్పై ఏళ్ళు బ్యాంక్‌లో పని చేశారని, ఇప్పుడు రిటైర్ అయ్యారని చెప్పండి." },
        replies: [
          { say: "I worked at a bank for thirty years. Now I'm retired.", good: true, skill: "story" },
          {
            say: "That's my private business.",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry. You don't have to tell us.", te: "అయ్యో, సారీ. చెప్పక్కర్లేదు లెండి." },
          },
        ],
      },
      {
        partner: "Lovely! We walk here every morning at six. See you tomorrow!",
        te: "బాగుంది! మేము రోజూ పొద్దున ఆరింటికి ఇక్కడ నడుస్తాం. రేపు కలుద్దాం!",
        hint: { en: "Thank him, and say you will come tomorrow.", te: "థాంక్స్ చెప్పి, రేపు వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you! I'll be here tomorrow at six.", good: true, skill: "polite" },
          { say: "Thanks! See you tomorrow.", good: true, skill: "polite" },
          { say: "Thank you! I will coming tomorrow.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
