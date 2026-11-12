import type { Lesson } from "../../types";

/** Week 55, Day 1 (CURRICULUM §5): the present continuous and going to for travel plans — We're leaving for Tirupati on Friday night. */
export const day: Lesson = {
  id: "travelling-to-tirupati-plans",
  kind: "lesson",
  title: { en: "We're Going to Tirupati", te: "తిరుపతి వెళ్తున్నాం" },
  subtitle: "We're leaving … / We're going to …",
  summary: {
    en: "Learn to tell your trip plans: We're leaving for Tirupati on Friday night. We're going to stay two nights near the temple.",
    te: "మీ ప్రయాణం ప్లాన్లు చెప్పడం నేర్చుకుందాం: We're leaving for Tirupati on Friday night. We're going to stay two nights near the temple.",
  },
  seo: {
    title: "Talking About Travel Plans in English for Telugu Speakers",
    description:
      "Say We're leaving for Tirupati on Friday night and We're going to stay two nights. Simple lessons for Telugu speakers on trip plans.",
  },
  pattern: [
    { text: "We're", role: "who" },
    { text: "leaving", role: "action" },
    { text: "for Tirupati", role: "what" },
    { text: "on Friday night", role: "when" },
  ],
  core: [
    { en: "We're leaving for Tirupati on Friday night.", te: "శుక్రవారం రాత్రి మేము తిరుపతికి బయలుదేరుతున్నాం.", extra: ["to"] },
    { en: "We're going to stay two nights near the temple.", te: "గుడి దగ్గర రెండు రాత్రులు ఉండబోతున్నాం.", extra: ["night"] },
    { en: "We're taking the night train from Vijayawada.", te: "విజయవాడ నుంచి రాత్రి రైలు ఎక్కుతున్నాం.", extra: ["by"] },
    { en: "Are you going by bus or by train?", te: "మీరు బస్సులో వెళ్తున్నారా, రైల్లోనా?", extra: ["Do"] },
    { en: "We're going to climb the hill on foot.", te: "కొండ కాలినడకన ఎక్కబోతున్నాం.", extra: ["by"] },
    { en: "I'll be out of town till Monday.", te: "సోమవారం దాకా నేను ఊళ్ళో ఉండను.", extra: ["station"] },
    { en: "We're coming back on Sunday evening.", te: "ఆదివారం సాయంత్రం తిరిగి వస్తున్నాం.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a trip you would like to take. Say aloud: We're leaving for … on … We're going to …",
    te: "మీరు వెళ్ళాలనుకునే ఒక ప్రయాణం గుర్తు చేసుకోండి. గట్టిగా చెప్పండి: We're leaving for … on … We're going to …",
  },
  words: [
    { en: "leave for", te: "…కి బయలుదేరడం" },
    { en: "devotee", te: "భక్తులు" },
    { en: "hill", te: "కొండ" },
    { en: "ghat road", te: "ఘాట్ రోడ్డు, కొండ దారి" },
    { en: "holy place", te: "పుణ్యక్షేత్రం" },
  ],
  grammar: ["present-continuous", "going-to", "prepositions"],
  topics: ["travel", "transport", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Plans for a trip", te: "ప్రయాణం ప్లాన్లు" },
      body: {
        en: "For a trip you have fixed, with tickets or a day, use am, is, are + -ing: We're leaving on Friday. For what you plan to do there, use going to: We're going to stay two nights.",
        te: "టికెట్లు, రోజు ఖాయమైన ప్రయాణానికి am, is, are + -ing వాడండి: We're leaving on Friday. అక్కడ ఏం చేయాలనుకుంటున్నారో చెప్పడానికి going to: We're going to stay two nights.",
      },
      bridge: {
        te: ["శుక్రవారం రాత్రి", "తిరుపతికి", "బయలుదేరుతున్నాం"],
        en: [
          { text: "We're", role: "who" },
          { text: "leaving", role: "action" },
          { text: "for Tirupati", role: "what" },
          { text: "on Friday night", role: "when" },
        ],
      },
      examples: [
        { en: "We're leaving for Tirupati on Friday night.", te: "శుక్రవారం రాత్రి మేము తిరుపతికి బయలుదేరుతున్నాం." },
        { en: "We're going to stay two nights near the temple.", te: "గుడి దగ్గర రెండు రాత్రులు ఉండబోతున్నాం." },
        { en: "We're coming back on Sunday evening.", te: "ఆదివారం సాయంత్రం తిరిగి వస్తున్నాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Fixed, planned or timetable?", te: "ఖాయమైనదా, అనుకున్నదా, టైమ్‌టేబులా?" },
      items: [
        {
          form: "We're + -ing",
          useFor: { en: "A trip you have fixed: tickets, a day, a time.", te: "ఖాయమైన ప్రయాణం: టికెట్లు, రోజు, టైమ్." },
          example: { en: "We're taking the night train from Vijayawada.", te: "విజయవాడ నుంచి రాత్రి రైలు ఎక్కుతున్నాం." },
        },
        {
          form: "We're going to + verb",
          useFor: { en: "What you plan to do there.", te: "అక్కడ ఏం చేయాలనుకుంటున్నారో చెప్పడానికి." },
          example: { en: "We're going to climb the hill on foot.", te: "కొండ కాలినడకన ఎక్కబోతున్నాం." },
        },
        {
          form: "The train leaves at …",
          useFor: { en: "A timetable. One train, so the verb takes s.", te: "టైమ్‌టేబుల్. ఒక్క రైలు, అందుకే verb కి s." },
          example: { en: "The train leaves at half past ten.", te: "రైలు పదిన్నరకి బయలుదేరుతుంది." },
        },
        {
          form: "leave for · reach",
          useFor: { en: "Leave for a place; reach a place, with no to.", te: "ఊరికి బయలుదేరడం leave for; ఊరు చేరడం reach, to లేకుండా." },
          example: { en: "We reach Tirupati early in the morning.", te: "పొద్దున్నే తిరుపతి చేరుకుంటాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We'll reach to Tirupati by six.",
      right: "We'll reach Tirupati by six.",
      why: {
        en: "Reach takes no to. Telugu తిరుపతికి has కి, but English reach does not need it.",
        te: "reach తర్వాత to రాదు. తెలుగులో 'తిరుపతికి' లో కి ఉంది, కానీ ఇంగ్లీష్ reach కి అది అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I'll be out of station till Monday.",
      right: "I'll be out of town till Monday.",
      why: {
        en: "Out of station is old Indian office English; everyone understands out of town.",
        te: "out of station అనేది పాత ఇండియన్ ఆఫీసు ఇంగ్లీష్; out of town అంటే అందరికీ అర్థమవుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your neighbour asks about your weekend. Your train tickets are booked. What do you say?",
        te: "పక్కింటివారు మీ వీకెండ్ గురించి అడుగుతున్నారు. మీ రైలు టికెట్లు బుక్ అయ్యాయి. ఏమంటారు?",
      },
      options: ["We're leaving for Tirupati on Friday.", "We leaving for Tirupati on Friday.", "We are leave for Tirupati on Friday."],
      answer: 0,
      why: {
        en: "A fixed trip needs are with the -ing form; Telugu keeps it inside the verb.",
        te: "ఖాయమైన ప్రయాణానికి are తో పాటు -ing కావాలి; తెలుగులో అది verb లోనే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We're going ___ stay two nights near the temple.",
      te: "గుడి దగ్గర రెండు రాత్రులు ఉండబోతున్నాం.",
      options: ["to", "for", "and"],
      answer: 0,
      why: {
        en: "Going to is always followed by to and the plain verb.",
        te: "going తర్వాత ఎప్పుడూ to, ఆ తర్వాత verb అలాగే వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your friend Swapna how she is travelling to Srisailam.", te: "శ్రీశైలానికి ఎలా వెళ్తున్నారని మీ స్నేహితురాలు స్వప్న గారిని అడగండి." },
      options: ["How are you going to Srisailam?", "How you are going to Srisailam?", "How do you going to Srisailam?"],
      answer: 0,
      why: {
        en: "In a how question, are comes before you, and do never goes with -ing.",
        te: "how ప్రశ్నలో are, you కంటే ముందు వస్తుంది; -ing తో do ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "We're taking night train from Vijayawada.",
      wrongIndex: 2,
      fix: "We're taking the night train from Vijayawada.",
      why: {
        en: "One particular train needs the before it; Telugu has no word like the.",
        te: "ఒక ప్రత్యేకమైన రైలు గురించి చెప్తే ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A friend asks when you will get to Tirupati. Say early on Saturday morning.",
        te: "తిరుపతి ఎప్పుడు చేరుకుంటారని స్నేహితులు అడుగుతున్నారు. శనివారం పొద్దున్నే అని చెప్పండి.",
      },
      expected: ["We'll reach Tirupati early on Saturday morning.", "We're reaching Tirupati early on Saturday morning.", "Early on Saturday morning."],
      options: ["We'll reach Tirupati early on Saturday morning.", "We'll reach to Tirupati early on Saturday morning.", "We'll reach Tirupati early in Saturday morning."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend asks what you plan to do in Tirupati. Say you'll climb the hill on foot.",
        te: "తిరుపతిలో ఏం చేయాలనుకుంటున్నారని స్నేహితులు అడుగుతున్నారు. కొండ కాలినడకన ఎక్కుతామని చెప్పండి.",
      },
      expected: ["We're going to climb the hill on foot.", "We're going to walk up the hill.", "We're going to go up on foot."],
      options: ["We're going to climb the hill on foot.", "We going to climb the hill on foot.", "We're going to climbing the hill on foot."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Before the trip", te: "ప్రయాణానికి ముందు" },
    scene: {
      en: "You are going to Tirupati for a few days. Your neighbour Imran sees you at the gate with a bag.",
      te: "మీరు కొన్ని రోజులు తిరుపతి వెళ్తున్నారు. మీ పక్కింటి ఇమ్రాన్ గారు మిమ్మల్ని బ్యాగ్‌తో గేటు దగ్గర చూశారు.",
    },
    partner: { en: "Imran (your neighbour)", te: "ఇమ్రాన్ (మీ పక్కింటివారు)" },
    voice: "b",
    skills: [
      { id: "plans", label: { en: "Telling trip plans", te: "ప్రయాణం ప్లాన్లు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! You look busy. Are you going somewhere?",
        te: "నమస్తే! బిజీగా ఉన్నట్టున్నారు. ఎక్కడికైనా వెళ్తున్నారా?",
        hint: { en: "Tell him about your trip to Tirupati, and the day you leave.", te: "తిరుపతి ప్రయాణం గురించి, ఏ రోజు బయలుదేరుతున్నారో ఆయనకి చెప్పండి." },
        replies: [
          { say: "Yes, we're leaving for Tirupati on Friday night.", good: true, skill: "plans" },
          { say: "Yes, we leaving for Tirupati on Friday night.", good: false, skill: "plans", fixIt: "be" },
        ],
      },
      {
        partner: "How nice! How long are you staying there?",
        te: "ఎంత బాగుంది! అక్కడ ఎన్ని రోజులు ఉంటున్నారు?",
        hint: { en: "Say two nights, and when you are coming back.", te: "రెండు రాత్రులు అని, ఎప్పుడు తిరిగి వస్తున్నారో చెప్పండి." },
        replies: [
          { say: "Two nights. We're coming back on Sunday evening.", good: true, skill: "plans" },
          { say: "Two night. We're coming back on Sunday evening.", good: false, skill: "plans", fixIt: "plural" },
        ],
      },
      {
        partner: "Is there anything I can do for you?",
        te: "నేను మీకు ఏమైనా సాయం చేయాలా?",
        hint: { en: "Ask him politely to watch your house while you are away.", te: "మీరు లేనప్పుడు మీ ఇంటిని చూసుకోమని ఆయన్ని మర్యాదగా అడగండి." },
        replies: [
          { say: "Could you please keep an eye on the house?", good: true, skill: "polite" },
          { say: "Would you mind keeping an eye on the house?", good: true, skill: "polite" },
          {
            say: "Watch my house. Don't forget.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Sure, I'll look after it.", te: "ఓ! సరే, నేను చూసుకుంటాను." },
          },
        ],
      },
      {
        partner: "Of course. Have a good trip, and a good darshan!",
        te: "తప్పకుండా. ప్రయాణం బాగా జరగాలి, దర్శనం బాగా అవ్వాలి!",
        hint: { en: "Thank him, and say you will be away till Monday.", te: "థాంక్స్ చెప్పి, సోమవారం దాకా ఊళ్ళో ఉండరని చెప్పండి." },
        replies: [
          { say: "Thank you! I'll be out of town till Monday.", good: true, skill: "polite" },
          { say: "Thank you! I'll be out of station till Monday.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
