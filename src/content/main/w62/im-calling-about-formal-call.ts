import type { Lesson } from "../../types";

/** Week 62, Day 4 (CURRICULUM §5): opening a formal call — My name is …; I'm calling about …; on behalf of — calling an office for a neighbour. */
export const day: Lesson = {
  id: "im-calling-about-formal-call",
  kind: "lesson",
  title: { en: "I'm Calling About", te: "… గురించి ఫోన్ చేశాను" },
  subtitle: "My name is …; I'm calling about …; on behalf of",
  summary: {
    en: "Learn to start a call to an office clearly: Good morning. I'm calling about complaint number 2471.",
    te: "ఆఫీసుకి చేసే ఫోన్‌ని స్పష్టంగా మొదలుపెట్టడం నేర్చుకుందాం: Good morning. I'm calling about complaint number 2471.",
  },
  seo: {
    title: "Starting a Formal Phone Call in English for Telugu Speakers",
    description:
      "Say I'm calling about my water bill and I'm calling on behalf of my neighbour. Formal phone English for Telugu speakers.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "calling", role: "action" },
    { text: "about my water bill", role: "what" },
  ],
  core: [
    { en: "Good morning. I'm calling about my water bill.", te: "నమస్కారం. నా water bill గురించి ఫోన్ చేశాను.", extra: ["for"] },
    { en: "I'm calling about complaint number two four seven one.", te: "complaint నంబర్ 2471 గురించి ఫోన్ చేశాను.", extra: ["of"] },
    { en: "I'm calling on behalf of my neighbour, Mrs Grace.", te: "మా పక్కింటి గ్రేస్ గారి తరఫున ఫోన్ చేస్తున్నాను.", extra: ["for"] },
    { en: "She is elderly and can't come to the office.", te: "ఆవిడ పెద్దవారు, ఆఫీసుకి రాలేరు.", extra: ["elder"] },
    { en: "Her consumer number is four double five zero.", te: "ఆవిడ consumer నంబర్ 4550.", extra: ["His"] },
    { en: "Could you tell me when the engineer will come?", te: "ఇంజనీర్ గారు ఎప్పుడు వస్తారో చెప్తారా?", extra: ["does"] },
    { en: "She asked me to call for her.", te: "ఆవిడ తరఫున ఫోన్ చేయమని ఆవిడే నన్ను అడిగారు.", extra: ["calling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick one bill at home. Say aloud how you would start a call about it: Good morning. I'm calling about …",
    te: "ఇంట్లో ఉన్న ఒక బిల్లు తీసుకోండి. దాని గురించి ఫోన్ ఎలా మొదలుపెడతారో గట్టిగా చెప్పి చూడండి: Good morning. I'm calling about …",
  },
  words: [
    { en: "regarding", te: "… గురించి (formal)" },
    { en: "department", te: "విభాగం, డిపార్ట్‌మెంట్" },
    { en: "registered", te: "నమోదైంది, రిజిస్టర్ అయింది" },
    { en: "elderly", te: "వయసు పైబడిన, పెద్దవారు" },
    { en: "engineer", te: "ఇంజనీర్" },
  ],
  grammar: ["present-continuous", "indirect-tag-questions", "politeness-softening"],
  topics: ["offices", "phone", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Starting a formal call", te: "formal ఫోన్ కాల్ మొదలుపెట్టడం" },
      body: {
        en: "Start a call to an office in three steps: greet, give your name, and say why you called with I'm calling about …. For someone else, say on behalf of.",
        te: "ఆఫీసుకి ఫోన్ మూడు అడుగుల్లో మొదలుపెట్టండి: నమస్కారం, మీ పేరు, ఆ తర్వాత I'm calling about … అని ఎందుకు చేశారో. ఇంకొకరి కోసమైతే on behalf of అనండి.",
      },
      bridge: {
        te: ["నా water bill", "గురించి", "ఫోన్ చేశాను"],
        en: [
          { text: "I'm", role: "who" },
          { text: "calling", role: "action" },
          { text: "about my water bill", role: "what" },
        ],
      },
      examples: [
        { en: "Good morning. I'm calling about my water bill.", te: "నమస్కారం. నా water bill గురించి ఫోన్ చేశాను." },
        { en: "I'm calling about complaint number two four seven one.", te: "complaint నంబర్ 2471 గురించి ఫోన్ చేశాను." },
        { en: "I'm calling on behalf of my neighbour, Mrs Grace.", te: "మా పక్కింటి గ్రేస్ గారి తరఫున ఫోన్ చేస్తున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The first lines of a call", te: "ఫోన్‌లో మొదటి మాటలు" },
      items: [
        {
          form: "My name is …",
          useFor: { en: "Give your name first, slowly.", te: "ముందు మీ పేరు, నెమ్మదిగా చెప్పండి." },
          example: { en: "Good afternoon. My name is Mohan Rao.", te: "నమస్కారం. నా పేరు మోహన్ రావు." },
        },
        {
          form: "I'm calling about …",
          useFor: { en: "Say why you called.", te: "ఎందుకు ఫోన్ చేశారో చెప్పడానికి." },
          example: { en: "Good morning. I'm calling about my water bill.", te: "నమస్కారం. నా water bill గురించి ఫోన్ చేశాను." },
        },
        {
          form: "I'm calling regarding …",
          useFor: { en: "The same, but a little more formal.", te: "అదే అర్థం, కానీ కొంచెం ఎక్కువ formal." },
          example: { en: "I'm calling regarding the letter you sent me.", te: "మీరు నాకు పంపిన లెటర్ గురించి ఫోన్ చేశాను." },
        },
        {
          form: "on behalf of …",
          useFor: { en: "Call for someone else.", te: "ఇంకొకరి తరఫున ఫోన్ చేయడానికి." },
          example: { en: "I'm calling on behalf of my neighbour, Mrs Grace.", te: "మా పక్కింటి గ్రేస్ గారి తరఫున ఫోన్ చేస్తున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Could you tell me when will the engineer come?",
      right: "Could you tell me when the engineer will come?",
      why: {
        en: "After Could you tell me, the second part keeps normal order: the engineer, then will.",
        te: "Could you tell me తర్వాత రెండో భాగం మామూలు వరుసలో ఉంటుంది: ముందు the engineer, తర్వాత will.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'm calling on behalf for my neighbour.",
      right: "I'm calling on behalf of my neighbour.",
      why: {
        en: "The phrase is always on behalf of. Telugu కోసం makes people say for.",
        te: "ఈ మాట ఎప్పుడూ on behalf of. తెలుగు 'కోసం' వల్ల for అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "You call the electricity office about your bill. Choose the best start.",
        te: "మీ బిల్లు గురించి ఎలక్ట్రిసిటీ ఆఫీసుకి ఫోన్ చేశారు. ఏ మొదలు బాగుంది?",
      },
      options: [
        "Good morning. I'm calling about my electricity bill.",
        "Good morning. I'm calling about electricity bill.",
        "Hello. Bill problem. Who is there?",
      ],
      answer: 0,
      why: {
        en: "Greet first, then say why you called. Bill needs my or the before it.",
        te: "ముందు నమస్కారం, తర్వాత ఎందుకు ఫోన్ చేశారో. bill ముందు my గానీ the గానీ రావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Good morning. I'm calling ___ my gas connection.",
      te: "నమస్కారం. నా gas connection గురించి ఫోన్ చేశాను.",
      options: ["about", "for", "on"],
      answer: 0,
      why: {
        en: "Use about to say why you are calling; it means గురించి.",
        te: "ఎందుకు ఫోన్ చేశారో చెప్పడానికి about వాడండి; అంటే 'గురించి'.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Water Board",
      lines: [
        "Dear Customer,",
        "Your complaint No. 2471 is registered.",
        "Problem: no water supply.",
        "Our staff will visit within 48 hours.",
        "Please keep this number for any follow-up.",
      ],
      prompt: {
        en: "Mrs Grace got this message. When will the staff come?",
        te: "గ్రేస్ గారికి ఈ మెసేజ్ వచ్చింది. సిబ్బంది ఎప్పుడు వస్తారు?",
      },
      options: ["Within 48 hours", "Within 24 hours", "Next week"],
      answer: 0,
      why: {
        en: "The fourth line gives the time for the visit, in hours.",
        te: "నాలుగో లైన్‌లో వాళ్ళు వచ్చే టైమ్ గంటల్లో ఉంది.",
      },
      say: "Our staff will visit within 48 hours.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My neighbour live alone and can't come to the office.",
      wrongIndex: 2,
      fix: "My neighbour lives alone and can't come to the office.",
      why: {
        en: "My neighbour is one person, so the verb takes s. Telugu ఉంటారు doesn't change like this.",
        te: "my neighbour ఒక్కరే కాబట్టి verb కి s వస్తుంది. తెలుగు 'ఉంటారు' ఇలా మారదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "You call the gas agency for your neighbour, Mr Rahim. Say who you are calling for.",
        te: "మీ పక్కింటి రహీమ్ గారి కోసం గ్యాస్ ఏజెన్సీకి ఫోన్ చేశారు. ఎవరి తరఫున చేశారో చెప్పండి.",
      },
      expected: [
        "I'm calling on behalf of my neighbour, Mr Rahim.",
        "I'm calling for my neighbour, Mr Rahim.",
        "I'm calling on behalf of Mr Rahim.",
      ],
      options: ["I'm calling on behalf of my neighbour, Mr Rahim.", "I'm calling on behalf for my neighbour, Mr Rahim.", "Myself calling for neighbour Rahim."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The clerk asks for Mrs Grace's consumer number. Read it from her bill: four double five zero.",
        te: "గ్రేస్ గారి consumer నంబర్ అడిగారు. ఆవిడ బిల్లు మీద చూసి చదవండి: 4550.",
      },
      expected: ["Her consumer number is four double five zero.", "It's four double five zero.", "Four double five zero."],
      options: ["Her consumer number is four double five zero.", "Her consumer number four double five zero.", "His consumer number is four double five zero."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling for Mrs Grace", te: "గ్రేస్ గారి తరఫున ఫోన్" },
    scene: {
      en: "Your elderly neighbour, Mrs Grace, has had no water for two days. She asked you to call the Water Board. Ramesh answers.",
      te: "మీ పక్కింటి పెద్దావిడ గ్రేస్ గారికి రెండు రోజులుగా నీళ్ళు రావట్లేదు. Water Board కి ఫోన్ చేయమని ఆవిడ మిమ్మల్ని అడిగారు. రమేష్ గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Ramesh (at the Water Board)", te: "రమేష్ (Water Board లో)" },
    voice: "b",
    skills: [
      { id: "open", label: { en: "Starting the call", te: "ఫోన్ మొదలుపెట్టడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, Water Board, complaints department. How may I help you?",
        te: "నమస్కారం, Water Board, ఫిర్యాదుల విభాగం. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Greet him, give your name, and say you are calling for your neighbour.", te: "నమస్కారం చెప్పి, మీ పేరు చెప్పి, మీ పక్కింటివారి తరఫున ఫోన్ చేశారని చెప్పండి." },
        replies: [
          { say: "Good morning. My name is Kiran. I'm calling on behalf of my neighbour.", good: true, skill: "open" },
          { say: "Good morning. Myself Kiran, calling for my neighbour.", good: false, skill: "open", fixIt: "indian-english" },
        ],
      },
      {
        partner: "All right. What is her name, and what is the problem?",
        te: "సరే. ఆవిడ పేరేంటి, సమస్య ఏంటి?",
        hint: { en: "Say her name, and that she has had no water for two days.", te: "ఆవిడ పేరు చెప్పి, రెండు రోజులుగా నీళ్ళు లేవని చెప్పండి." },
        replies: [
          { say: "Her name is Mrs Grace. She has had no water for two days.", good: true, skill: "open" },
          { say: "Her name is Mrs Grace. She is not having water for two days.", good: false, skill: "open", fixIt: "duration" },
        ],
      },
      {
        partner: "Has she registered a complaint already?",
        te: "ఆవిడ ఇప్పటికే complaint నమోదు చేశారా?",
        hint: { en: "Say yes, and give the complaint number from her SMS.", te: "అవును అని, ఆవిడ SMS లో ఉన్న complaint నంబర్ చెప్పండి." },
        replies: [
          { say: "Yes. The complaint number is two four seven one.", good: true, skill: "open" },
          {
            say: "Yes, two days ago! Don't you people check anything?",
            good: false,
            skill: "polite",
            react: { en: "I understand you're upset. Let me check it now.", te: "మీరు బాధలో ఉన్నారని అర్థమైంది. ఇప్పుడే చూస్తాను." },
          },
        ],
      },
      {
        partner: "Thank you. The engineer will visit her this afternoon, between two and four.",
        te: "థాంక్స్. ఇంజనీర్ గారు ఈ మధ్యాహ్నం రెండు నుంచి నాలుగు లోపు ఆవిడ ఇంటికి వస్తారు.",
        hint: { en: "Thank him, and say you will tell her at once.", te: "థాంక్స్ చెప్పి, వెంటనే ఆవిడకి చెప్తానని చెప్పండి." },
        replies: [
          { say: "Thank you very much. I'll tell her right away.", good: true, skill: "polite" },
          { say: "Thank you very much. I'll telling her right away.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
