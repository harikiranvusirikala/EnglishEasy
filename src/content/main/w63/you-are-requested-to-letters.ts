import type { Lesson } from "../../types";

/** Week 63, Day 2 (CURRICULUM §5): formal passive phrases in letters — You are requested to …; must be submitted; on or before. */
export const day: Lesson = {
  id: "you-are-requested-to-letters",
  kind: "lesson",
  title: { en: "You Are Requested To", te: "దయచేసి … చేయండి" },
  subtitle: "formal phrases in letters",
  summary: {
    en: "Understand formal letter phrases: You are requested to visit the branch. The form must be submitted on or before the thirty-first of March.",
    te: "ఉత్తరాల్లోని మర్యాద మాటలు అర్థం చేసుకుందాం: You are requested to visit the branch. The form must be submitted on or before the thirty-first of March.",
  },
  seo: {
    title: "Formal Letter Phrases in English for Telugu Speakers",
    description:
      "Understand You are requested to and must be submitted on or before in bank and office letters. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "are requested", role: "action" },
    { text: "to visit the branch", role: "what" },
  ],
  core: [
    { en: "You are requested to visit the branch.", te: "మీరు బ్రాంచ్‌కి రావాలని కోరుతున్నాం.", extra: ["for"] },
    {
      en: "The form must be submitted on or before the thirty-first of March.",
      te: "మార్చి 31 లేదా అంతకంటే ముందే ఫారం ఇచ్చేయాలి.",
      extra: ["after"],
    },
    { en: "Please bring a self-attested copy of your ID.", te: "మీరే సంతకం చేసిన మీ ID కాపీ ఒకటి తీసుకురండి.", extra: ["copies"] },
    { en: "What does on or before mean?", te: "on or before అంటే ఏంటి?", extra: ["is"] },
    { en: "Your KYC details must be updated.", te: "మీ KYC వివరాలు అప్‌డేట్ చేయించాలి.", extra: ["update"] },
    { en: "This is mandatory for all customers.", te: "ఇది ఖాతాదారులందరికీ తప్పనిసరి.", extra: ["customer"] },
    { en: "So I have to go before the thirty-first?", te: "అంటే ముప్పై ఒకటో తేదీ లోపు నేను వెళ్ళాలా?", extra: ["going"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at any bill or form at home. Find its last date, and say aloud: It must be paid on or before …",
    te: "ఇంట్లో ఏదైనా బిల్లు లేదా ఫారం చూడండి. దాని చివరి తేదీ వెతికి, గట్టిగా చెప్పండి: It must be paid on or before …",
  },
  words: [
    { en: "on or before", te: "ఆ తేదీ లేదా అంతకంటే ముందు" },
    { en: "last date", te: "చివరి తేదీ" },
    { en: "mandatory", te: "తప్పనిసరి" },
    { en: "requested", te: "(ఉత్తరాల్లో) చేయమని కోరడం" },
    { en: "valid", te: "చెల్లుబాటు అయ్యే" },
  ],
  grammar: ["passive-voice", "should-must-have-to", "prepositions"],
  topics: ["bank", "offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How letters ask", te: "ఉత్తరాలు ఎలా అడుగుతాయి" },
      body: {
        en: "Letters ask politely with be + done form. You are requested to … means please do it. Must be submitted means you have to give it.",
        te: "ఉత్తరాలు be + పూర్తయిన రూపంతో మర్యాదగా అడుగుతాయి. You are requested to … అంటే 'దయచేసి చేయండి'. must be submitted అంటే తప్పకుండా ఇవ్వాలి.",
      },
      bridge: {
        te: ["మీరు", "బ్రాంచ్‌కి రావాలని", "కోరుతున్నాం"],
        en: [
          { text: "You", role: "who" },
          { text: "are requested", role: "action" },
          { text: "to visit the branch", role: "what" },
        ],
      },
      examples: [
        { en: "You are requested to visit the branch.", te: "మీరు బ్రాంచ్‌కి రావాలని కోరుతున్నాం." },
        { en: "Your KYC details must be updated.", te: "మీ KYC వివరాలు అప్‌డేట్ చేయించాలి." },
        { en: "This is mandatory for all customers.", te: "ఇది ఖాతాదారులందరికీ తప్పనిసరి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the letter really means", te: "ఉత్తరం అసలు అర్థం" },
      items: [
        {
          form: "You are requested to …",
          useFor: { en: "Please do this.", te: "దయచేసి ఇది చేయండి." },
          example: { en: "You are requested to bring a valid ID.", te: "చెల్లుబాటు అయ్యే ID ఒకటి తీసుకురావాలని కోరుతున్నాం." },
        },
        {
          form: "… must be submitted",
          useFor: { en: "You have to give it. It is not a choice.", te: "తప్పకుండా ఇవ్వాలి. ఇష్టం ఉంటేనే అని కాదు." },
          example: { en: "The form must be submitted on or before the thirty-first of March.", te: "మార్చి 31 లేదా అంతకంటే ముందే ఫారం ఇచ్చేయాలి." },
        },
        {
          form: "on or before + a date",
          useFor: { en: "That day is the last date. Earlier is fine too.", te: "ఆ రోజే చివరి తేదీ. ముందే ఇచ్చినా పర్లేదు." },
          example: { en: "Please pay on or before the tenth of April.", te: "ఏప్రిల్ 10 లేదా అంతకంటే ముందే కట్టండి." },
        },
        {
          form: "mandatory",
          useFor: { en: "Everyone must do it.", te: "అందరూ తప్పకుండా చేయాలి." },
          example: { en: "This is mandatory for all customers.", te: "ఇది ఖాతాదారులందరికీ తప్పనిసరి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I will revert back tomorrow.",
      right: "I will get back to you tomorrow.",
      why: {
        en: "Revert means go back to an old state; to answer later, use get back to you.",
        te: "revert అంటే పాత స్థితికి వెళ్ళడం; తర్వాత జవాబు చెప్తాను అనడానికి get back to you అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "You are requested to visit to the branch.",
      right: "You are requested to visit the branch.",
      why: {
        en: "Visit takes the place straight after it; Telugu బ్రాంచ్‌కి makes people add to.",
        te: "visit తర్వాత చోటు నేరుగా వస్తుంది; తెలుగులో 'బ్రాంచ్‌కి' అంటాం కాబట్టి to చేర్చేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "The letter says you have to give the form by Friday. Which sentence is right?",
        te: "శుక్రవారం లోపు ఫారం ఇవ్వాలని ఉత్తరంలో ఉంది. ఏ వాక్యం సరైనది?",
      },
      options: ["The form must be submitted by Friday.", "The form must submitted by Friday.", "The form must be submit by Friday."],
      answer: 0,
      why: {
        en: "A rule about the form needs must, then be, then the done form submitted.",
        te: "ఫారం గురించిన నియమానికి must, తర్వాత be, తర్వాత పూర్తయిన రూపం submitted రావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Please pay the bill ___ or before the tenth of April.",
      te: "ఏప్రిల్ 10 లేదా అంతకంటే ముందే బిల్లు కట్టండి.",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "A date with a day number takes on, so the fixed phrase starts with on.",
        te: "రోజు సంఖ్య ఉన్న తేదీకి on వస్తుంది; అందుకే ఈ మాట on తో మొదలవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The letter says: A valid ID is mandatory. What does it mean?",
        te: "ఉత్తరంలో A valid ID is mandatory అని ఉంది. దాని అర్థం ఏంటి?",
      },
      options: ["You must bring an ID that is not out of date.", "You can bring an ID if you like.", "You must not bring any ID."],
      answer: 0,
      why: {
        en: "Mandatory means there is no choice, and valid means the card still works.",
        te: "mandatory అంటే తప్పనిసరి, ఇష్టం కాదు; valid అంటే ఆ కార్డు ఇంకా చెల్లుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Please bring self-attested copy of your ID.",
      wrongIndex: 2,
      fix: "Please bring a self-attested copy of your ID.",
      why: {
        en: "One copy needs a before it; Telugu has no word like a.",
        te: "ఒక కాపీ కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The clerk says your KYC details must be updated. Ask what you have to bring.",
        te: "మీ KYC వివరాలు అప్‌డేట్ చేయాలని క్లర్క్ చెప్తున్నారు. ఏం తీసుకురావాలో అడగండి.",
      },
      expected: ["What do I have to bring?", "What documents do I have to bring?", "What should I bring?", "What do I need to bring?"],
      options: ["What do I have to bring?", "What I have to bring?", "What do I have to brought?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A letter says on or before the thirty-first of March. Your neighbour asks what it means. Explain.",
        te: "ఉత్తరంలో on or before the thirty-first of March అని ఉంది. దాని అర్థం ఏంటని పక్కింటివారు అడుగుతున్నారు. వివరించండి.",
      },
      expected: [
        "It means the thirty-first is the last date.",
        "The thirty-first is the last date.",
        "You can go on the thirty-first or before it.",
        "It means by the thirty-first.",
      ],
      options: ["It means the thirty-first is the last date.", "It means you can go after the thirty-first.", "It means the thirty-first is the first date."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A letter about KYC", te: "KYC గురించి ఉత్తరం" },
    scene: {
      en: "You got a letter from your bank about KYC. You take it to the branch. Ayesha is at the desk.",
      te: "మీ బ్యాంక్ నుంచి KYC గురించి ఉత్తరం వచ్చింది. దాన్ని తీసుకుని బ్రాంచ్‌కి వెళ్ళారు. డెస్క్ దగ్గర ఆయేషా గారు ఉన్నారు.",
    },
    partner: { en: "Ayesha (bank clerk)", te: "ఆయేషా (బ్యాంక్ క్లర్క్)" },
    skills: [
      { id: "ask", label: { en: "Asking what to do", te: "ఏం చేయాలో అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her, and say the bank sent you a letter about KYC.", te: "నమస్కారం చెప్పి, బ్యాంక్ నుంచి KYC గురించి ఉత్తరం వచ్చిందని చెప్పండి." },
        replies: [
          { say: "Good morning. I got this letter from the bank about KYC.", good: true, skill: "polite" },
          {
            say: "Your bank sent me this. What is this nonsense?",
            good: false,
            skill: "polite",
            react: { en: "Please don't worry. Let me read it and explain.", te: "కంగారు పడకండి. చదివి వివరిస్తాను." },
          },
        ],
      },
      {
        partner: "I see. Your KYC details must be updated this month.",
        te: "అర్థమైంది. ఈ నెలలో మీ KYC వివరాలు అప్‌డేట్ చేయించాలి.",
        hint: { en: "Ask what you have to do.", te: "మీరు ఏం చేయాలో అడగండి." },
        replies: [
          { say: "What do I have to do?", good: true, skill: "ask" },
          { say: "What should I do, madam?", good: true, skill: "ask" },
          { say: "What I have to do?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Just bring a self-attested copy of your Aadhaar card.",
        te: "మీరే సంతకం చేసిన మీ ఆధార్ కార్డు కాపీ ఒకటి తీసుకురండి, చాలు.",
        hint: { en: "You don't know the word self-attested. Ask its meaning.", te: "self-attested అనే మాట మీకు తెలియదు. దాని అర్థం అడగండి." },
        replies: [
          { say: "Sorry, what does self-attested mean?", good: true, skill: "ask" },
          { say: "Sorry, what is self-attested mean?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "You sign the copy yourself. Please submit it on or before the thirty-first.",
        te: "కాపీ మీద మీరే సంతకం చేయాలి. ముప్పై ఒకటో తేదీ లేదా అంతకంటే ముందే ఇవ్వండి.",
        hint: { en: "Thank her, and say you will bring it tomorrow.", te: "థాంక్స్ చెప్పి, రేపు తీసుకొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll bring it tomorrow.", good: true, skill: "polite" },
          { say: "Thank you. I'll revert back tomorrow.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
