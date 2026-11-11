import type { Lesson } from "../../types";

/** Week 39, Day 4 (CURRICULUM §4): Indian-English fixes I — Myself …, good name, do the needful, revert back, prepone, kindly. */
export const day: Lesson = {
  id: "not-myself-kiran",
  kind: "lesson",
  title: { en: "I'm Kiran, Not \"Myself Kiran\"", te: "\"Myself\" వద్దు" },
  subtitle: "I'm Kiran. May I know your name?",
  summary: {
    en: "Learn clear English for introductions and office work: I'm Kiran. May I know your name? Please reply soon.",
    te: "పరిచయాలకీ, ఆఫీస్ పనులకీ అందరికీ అర్థమయ్యే ఇంగ్లీష్ నేర్చుకుందాం: I'm Kiran. May I know your name? Please reply soon.",
  },
  seo: {
    title: "Myself, Good Name and Revert Back in English for Telugu Speakers",
    description:
      "Say I'm Kiran, not Myself Kiran, and May I know your name? Simple lessons for Telugu speakers on clear English at offices.",
  },
  pattern: [
    { text: "May", role: "action" },
    { text: "I", role: "who" },
    { text: "know", role: "action" },
    { text: "your name, please?", role: "what" },
  ],
  core: [
    { en: "Hello, I'm Kiran.", te: "నమస్కారం, నేను కిరణ్.", extra: ["Myself"] },
    { en: "May I know your name, please?", te: "మీ పేరు తెలుసుకోవచ్చా?", extra: ["good"] },
    { en: "Please reply soon.", te: "త్వరగా జవాబు ఇవ్వండి.", extra: ["back"] },
    { en: "Can we bring the meeting forward?", te: "మీటింగ్‌ని కొంచెం ముందుకు జరుపుదామా?", extra: ["prepone"] },
    { en: "Could you please check it and reply?", te: "కొంచెం చూసి జవాబు ఇస్తారా?", extra: ["revert"] },
    { en: "My name is Kiran. I'm here for the meeting.", te: "నా పేరు కిరణ్. మీటింగ్ కోసం వచ్చాను.", extra: ["came"] },
    { en: "Please send me the papers by Friday.", te: "శుక్రవారం లోపు కాగితాలు పంపండి.", extra: ["kindly"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Introduce yourself once today the natural way: Hello, I'm …",
    te: "ఈ రోజు ఒకసారి సహజంగా పరిచయం చేసుకోండి: Hello, I'm …",
  },
  words: [
    { en: "reply", te: "జవాబు ఇవ్వడం" },
    { en: "bring forward", te: "ముందుకు జరపడం" },
    { en: "May I know", te: "తెలుసుకోవచ్చా" },
    { en: "confusing", te: "అయోమయంగా" },
    { en: "papers", te: "కాగితాలు" },
  ],
  grammar: ["politeness-softening", "can-could"],
  topics: ["offices", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Clear English for everyone", te: "అందరికీ అర్థమయ్యే ఇంగ్లీష్" },
      body: {
        en: "Some phrases are used only in India: Myself Kiran, good name, do the needful, revert back, prepone. They are fine here, but confusing for others. Say it the natural way: I'm Kiran. Please reply.",
        te: "Myself Kiran, good name, do the needful, revert back, prepone మన దగ్గరే వాడతాం. ఇక్కడ పర్వాలేదు, బయటివారికి అయోమయం. I'm Kiran, Please reply అనండి.",
      },
      bridge: {
        te: ["మీ పేరు", "తెలుసుకోవచ్చా?"],
        en: [
          { text: "May", role: "action" },
          { text: "I", role: "who" },
          { text: "know", role: "action" },
          { text: "your name?", role: "what" },
        ],
      },
      examples: [
        { en: "Hello, I'm Kiran.", te: "నమస్కారం, నేను కిరణ్." },
        { en: "May I know your name, please?", te: "మీ పేరు తెలుసుకోవచ్చా?" },
        { en: "Please reply soon.", te: "త్వరగా జవాబు ఇవ్వండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Say this, not that", te: "ఇది అనండి, అది వద్దు" },
      items: [
        {
          form: "reply, not revert back",
          useFor: { en: "Answering a message or a letter.", te: "మెసేజ్‌కి, ఉత్తరానికి జవాబు ఇవ్వడానికి." },
          example: { en: "Could you please check it and reply?", te: "కొంచెం చూసి జవాబు ఇస్తారా?" },
        },
        {
          form: "bring forward, not prepone",
          useFor: { en: "Moving something to an earlier time.", te: "ఏదైనా ముందు సమయానికి మార్చడానికి." },
          example: { en: "Can we bring the meeting forward?", te: "మీటింగ్‌ని కొంచెం ముందుకు జరుపుదామా?" },
        },
        {
          form: "please + the job, not do the needful",
          useFor: { en: "Asking for something: say exactly what you need.", te: "ఏదైనా అడిగేటప్పుడు: ఏం కావాలో సూటిగా చెప్పండి." },
          example: { en: "Please send me the papers by Friday.", te: "శుక్రవారం లోపు కాగితాలు పంపండి." },
        },
        {
          form: "please, not kindly",
          useFor: { en: "In speech, please sounds warm; kindly sounds stiff.", te: "మాటల్లో please ఆప్యాయంగా ఉంటుంది; kindly బిగుసుకుపోయినట్టు." },
          example: { en: "Please sit down. The officer is coming.", te: "కూర్చోండి. ఆఫీసర్ గారు వస్తున్నారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Myself Kiran.",
      right: "I'm Kiran.",
      why: {
        en: "Myself never starts a name in English; it is fine in India but sounds odd to others.",
        te: "ఇంగ్లీష్‌లో పేరు myself తో మొదలవదు; మన దగ్గర పర్వాలేదు కానీ బయటివారికి వింతగా ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "What is your good name?",
      right: "May I know your name, please?",
      why: {
        en: "Good name is a word-for-word copy of శుభనామం; others find it strange, so drop good.",
        te: "good name అనేది 'శుభనామం' కి మాటకి మాట అనువాదం; బయటివారికి వింతగా ఉంటుంది, good తీసేయండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "You meet a new officer. Introduce yourself.", te: "కొత్త ఆఫీసర్ గారిని కలిశారు. మిమ్మల్ని మీరు పరిచయం చేసుకోండి." },
      options: ["Hello, I'm Kiran.", "Hello, myself Kiran.", "Hello, I Kiran."],
      answer: 0,
      why: {
        en: "In English, a name starts with I'm or My name is, never with myself.",
        te: "ఇంగ్లీష్‌లో పేరు I'm లేదా My name is తో చెప్తారు, myself తో కాదు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      fixIt: "indian-english",
      heading: "Satish, Gas Agency",
      lines: ["Dear Customer,", "Your form is not complete.", "Kindly do the needful and revert back.", "Regards, Satish"],
      prompt: { en: "What does Satish want you to do?", te: "సతీష్ గారు మిమ్మల్ని ఏం చేయమంటున్నారు?" },
      options: ["Complete the form and reply to him.", "Come back to the office today.", "Pay the gas bill."],
      answer: 0,
      why: {
        en: "Do the needful means do what is needed, and revert back means reply; both are old office habits.",
        te: "do the needful అంటే కావలసింది చేయండి, revert back అంటే జవాబు ఇవ్వండి; రెండూ పాత ఆఫీస్ అలవాట్లు.",
      },
      say: "Please complete the form and reply.",
    },
    {
      id: "p3",
      type: "fillBlank",
      sentence: "Can we bring the meeting ___ to Monday?",
      te: "మీటింగ్‌ని సోమవారానికి ముందుకు జరుపుదామా?",
      options: ["forward", "before", "front"],
      answer: 0,
      why: {
        en: "Bring forward means move to an earlier time; prepone is understood only in India.",
        te: "bring forward అంటే ముందు సమయానికి మార్చడం; prepone మన దగ్గరే అర్థమవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Please reply back by Friday.",
      wrongIndex: 2,
      fix: "Please reply by Friday.",
      why: {
        en: "Reply already means answer back, so back is extra, just like in return back.",
        te: "reply అంటేనే తిరిగి జవాబు ఇవ్వడం, back అక్కర్లేదు; return back లాగే ఇది కూడా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "At an office counter, ask the clerk's name politely.",
        te: "ఆఫీస్ కౌంటర్ దగ్గర, క్లర్క్ గారి పేరు మర్యాదగా అడగండి.",
      },
      expected: ["May I know your name, please?", "May I know your name?", "What is your name, please?"],
      options: ["May I know your name, please?", "What is your good name?", "Your name what?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask the agent politely to send the papers by Friday.",
        te: "శుక్రవారం లోపు కాగితాలు పంపమని ఏజెంట్‌ని మర్యాదగా అడగండి.",
      },
      expected: ["Please send me the papers by Friday.", "Could you send the papers by Friday, please?", "Please send the papers by Friday."],
      options: ["Please send me the papers by Friday.", "Kindly do the needful by Friday.", "Send papers Friday, okay?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the electricity office", te: "కరెంట్ ఆఫీస్‌లో" },
    scene: {
      en: "You are at the electricity office to change the address on your bill. Kavitha at the counter helps you.",
      te: "కరెంట్ బిల్లు మీద అడ్రస్ మార్చడానికి మీరు కరెంట్ ఆఫీస్‌కి వచ్చారు. కౌంటర్ దగ్గర కవిత గారు సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Kavitha (office clerk)", te: "కవిత (ఆఫీస్ క్లర్క్)" },
    skills: [
      { id: "intro", label: { en: "Introducing yourself", te: "మిమ్మల్ని పరిచయం చేసుకోవడం" } },
      { id: "clear", label: { en: "Clear English", te: "స్పష్టమైన ఇంగ్లీష్" } },
    ],
    turns: [
      {
        partner: "Good morning. May I know your name, please?",
        te: "నమస్కారం. మీ పేరు తెలుసుకోవచ్చా?",
        hint: { en: "Greet her, and give your name the clear way.", te: "నమస్కారం చెప్పి, మీ పేరు స్పష్టంగా చెప్పండి." },
        replies: [
          { say: "Good morning. I'm Kiran.", good: true, skill: "intro" },
          { say: "Good morning. My name is Kiran.", good: true, skill: "intro" },
          { say: "Good morning. Myself Kiran.", good: false, skill: "intro", fixIt: "indian-english" },
        ],
      },
      {
        partner: "How long have you lived at the new address?",
        te: "కొత్త అడ్రస్‌లో ఎంత కాలంగా ఉంటున్నారు?",
        hint: { en: "Tell her the year you moved in.", te: "ఏ సంవత్సరం నుండి అక్కడ ఉంటున్నారో చెప్పండి." },
        replies: [
          { say: "I have lived there since two thousand twenty.", good: true },
          { say: "I am living there since two thousand twenty.", good: false, fixIt: "duration" },
        ],
      },
      {
        partner: "The officer can sign it next Friday.",
        te: "ఆఫీసర్ గారు వచ్చే శుక్రవారం సంతకం చేస్తారు.",
        hint: { en: "Ask politely if it can be earlier, on Wednesday.", te: "బుధవారానికి ముందుకు జరుపుతారా అని మర్యాదగా అడగండి." },
        replies: [
          { say: "Could we bring it forward to Wednesday, please?", good: true, skill: "clear" },
          { say: "Can you prepone it to Wednesday?", good: false, skill: "clear", fixIt: "indian-english" },
          {
            say: "Friday? Too late. Do it now.",
            good: false,
            skill: "clear",
            react: { en: "Sorry, the officer is busy till then.", te: "sorry అండీ, అప్పటి వరకు ఆఫీసర్ గారు బిజీగా ఉన్నారు." },
          },
        ],
      },
      {
        partner: "Okay, Wednesday at eleven. Anything else?",
        te: "సరే, బుధవారం పదకొండింటికి. ఇంకేమైనా?",
        hint: { en: "Say that is all, and thank her for her help.", te: "అంతే అని చెప్పి, ఆవిడ సహాయానికి థ్యాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you for your help.", good: true },
          { say: "No, that's all only. Thank you.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};
