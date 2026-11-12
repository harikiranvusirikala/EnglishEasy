import type { Lesson } from "../../types";

/** Week 75, Day 1 (CURRICULUM §5): the present perfect passive for jobs not done — The garbage hasn't been collected for four days. */
export const day: Lesson = {
  id: "garbage-hasnt-been-collected",
  kind: "lesson",
  title: { en: "The Garbage Hasn't Been Collected", te: "చెత్త తీసుకెళ్లలేదు" },
  subtitle: "hasn't been collected, hasn't been repaired",
  summary: {
    en: "Learn to report a job that nobody has done yet: The garbage hasn't been collected for four days.",
    te: "ఇంకా ఎవరూ చేయని పని గురించి ఫిర్యాదు చేయడం నేర్చుకుందాం: The garbage hasn't been collected for four days.",
  },
  seo: {
    title: "Complaining About Garbage in English for Telugu Speakers",
    description:
      "Say The garbage hasn't been collected for four days. Simple lessons for Telugu speakers on calling the municipal helpline.",
  },
  pattern: [
    { text: "The garbage", role: "who" },
    { text: "hasn't been collected", role: "action" },
    { text: "for four days", role: "when" },
  ],
  core: [
    { en: "The garbage hasn't been collected for four days.", te: "నాలుగు రోజులుగా చెత్త తీసుకెళ్లలేదు.", extra: ["since"] },
    { en: "The streetlight hasn't been repaired yet.", te: "వీధి లైట్ ఇంకా రిపేర్ చేయలేదు.", extra: ["repair"] },
    { en: "The dustbin on our street is overflowing.", te: "మా వీధిలో చెత్త డబ్బా నిండి పొర్లిపోతోంది.", extra: ["overflow"] },
    { en: "Please send the garbage truck tomorrow.", te: "రేపు చెత్త బండి కొంచెం పంపించండి.", extra: ["sending"] },
    { en: "The garbage is piling up, and the smell is terrible.", te: "చెత్త పేరుకుపోతోంది, వాసన భరించలేకపోతున్నాం.", extra: ["are"] },
    { en: "There are a lot of mosquitoes because of the garbage.", te: "ఆ చెత్త వల్ల దోమలు చాలా ఉన్నాయి.", extra: ["is"] },
    { en: "I'm calling about the garbage in Lane Four, Gandhi Nagar.", te: "గాంధీ నగర్, నాలుగో లేన్‌లో చెత్త గురించి ఫోన్ చేస్తున్నాను.", extra: ["for"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your street today. Say aloud one job that hasn't been done: The … hasn't been … for …",
    te: "ఈ రోజు మీ వీధిని ఒకసారి చూడండి. ఇంకా జరగని ఒక పనిని గట్టిగా చెప్పండి: The … hasn't been … for …",
  },
  words: [
    { en: "helpline", te: "హెల్ప్‌లైన్, సహాయం కోసం ఫోన్ నంబర్" },
    { en: "dustbin", te: "చెత్త డబ్బా" },
    { en: "overflowing", te: "నిండి పొర్లిపోవడం" },
    { en: "mosquitoes", te: "దోమలు" },
    { en: "pile up", te: "పేరుకుపోవడం" },
  ],
  grammar: ["passive-voice", "present-perfect"],
  topics: ["neighbours", "offices", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A job not done yet: hasn't been + done form", te: "ఇంకా జరగని పని: hasn't been + పూర్తయిన రూపం" },
      body: {
        en: "When a job is still not done and the worker doesn't matter, start with the thing. Then say hasn't been and the done form: The garbage hasn't been collected.",
        te: "ఒక పని ఇంకా జరగకపోతే, ఎవరు చేయాలో ముఖ్యం కాకపోతే, ఆ వస్తువుతో మొదలుపెట్టండి. తర్వాత hasn't been, దాని తర్వాత పూర్తయిన రూపం: The garbage hasn't been collected.",
      },
      bridge: {
        te: ["నాలుగు రోజులుగా", "చెత్త", "తీసుకెళ్లలేదు"],
        en: [
          { text: "The garbage", role: "who" },
          { text: "hasn't been collected", role: "action" },
          { text: "for four days", role: "when" },
        ],
      },
      examples: [
        { en: "The garbage hasn't been collected for four days.", te: "నాలుగు రోజులుగా చెత్త తీసుకెళ్లలేదు." },
        { en: "The streetlight hasn't been repaired yet.", te: "వీధి లైట్ ఇంకా రిపేర్ చేయలేదు." },
        { en: "The drain hasn't been cleaned for two weeks.", te: "రెండు వారాలుగా కాలువ శుభ్రం చేయలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Not done, or done?", te: "జరగలేదా, జరిగిందా?" },
      items: [
        {
          form: "hasn't been + done form",
          useFor: { en: "The job is still not done, up to now.", te: "ఆ పని ఇప్పటివరకు ఇంకా జరగలేదు." },
          example: { en: "The garbage hasn't been collected for four days.", te: "నాలుగు రోజులుగా చెత్త తీసుకెళ్లలేదు." },
        },
        {
          form: "has been + done form",
          useFor: { en: "The job is done now, and the problem is over.", te: "పని ఇప్పుడు అయిపోయింది, సమస్య తీరిపోయింది." },
          example: { en: "The streetlight has been repaired at last.", te: "చివరికి వీధి లైట్ రిపేర్ చేశారు." },
        },
        {
          form: "for + how long",
          useFor: { en: "Say how long the problem has lasted.", te: "సమస్య ఎంతకాలంగా ఉందో చెప్పడానికి." },
          example: { en: "The drain hasn't been cleaned for two weeks.", te: "రెండు వారాలుగా కాలువ శుభ్రం చేయలేదు." },
        },
        {
          form: "… yet",
          useFor: { en: "At the end of a not-done sentence: you are still waiting.", te: "జరగని పని చెప్పే వాక్యం చివర: ఇంకా ఎదురుచూస్తున్నారు అని." },
          example: { en: "The streetlight hasn't been repaired yet.", te: "వీధి లైట్ ఇంకా రిపేర్ చేయలేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "The garbage is not collected for four days.",
      right: "The garbage hasn't been collected for four days.",
      why: {
        en: "A problem that started earlier and is still there takes hasn't been, not is not. Telugu uses the present here.",
        te: "ఇంతకుముందు మొదలై ఇప్పటికీ ఉన్న సమస్యకి is not కాదు, hasn't been వాడాలి. తెలుగులో ఇక్కడ present వాడతాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The garbage hasn't been collected since four days.",
      right: "The garbage hasn't been collected for four days.",
      why: {
        en: "Use for with a length of time, like four days. Since is only for a starting point, like Monday.",
        te: "four days లాంటి ఎంతకాలం అనేదానికి for వాడాలి. since మొదలైన రోజుకి మాత్రమే, Monday లాగా.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Tell the helpline that the dustbin near your gate is full and spilling over.",
        te: "మీ గేట్ దగ్గర చెత్త డబ్బా నిండి పొర్లిపోతోందని హెల్ప్‌లైన్‌కి చెప్పండి.",
      },
      options: ["The dustbin near my gate is overflowing.", "Dustbin near my gate is overflowing.", "The dustbin near my gate overflowing."],
      answer: 0,
      why: {
        en: "One known dustbin needs the, and -ing needs is before it. Telugu has neither word.",
        te: "ఇద్దరికీ తెలిసిన ఒక డబ్బా ముందు the కావాలి; -ing ముందు is కావాలి. తెలుగులో ఈ రెండు పదాలూ ఉండవు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The streetlight hasn't ___ repaired yet.",
      te: "వీధి లైట్ ఇంకా రిపేర్ చేయలేదు.",
      options: ["been", "be", "being"],
      answer: 0,
      why: {
        en: "After has or hasn't, use been, and then the done form of the verb.",
        te: "has, hasn't తర్వాత been వస్తుంది, దాని తర్వాత verb పూర్తయిన రూపం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The helpline asks: Has the garbage been collected? It hasn't. Answer.",
        te: "Has the garbage been collected? అని హెల్ప్‌లైన్‌వాళ్ళు అడిగారు. ఇంకా తీసుకెళ్లలేదు. జవాబు చెప్పండి.",
      },
      options: ["No, it hasn't been collected yet.", "No, it hasn't collected yet.", "No, it not been collected yet."],
      answer: 0,
      why: {
        en: "The garbage collects nothing; someone collects it. So English needs been, with has before it.",
        te: "చెత్త ఏమీ తీసుకెళ్లదు; దాన్ని ఎవరో తీసుకెళ్తారు. అందుకే been కావాలి, దాని ముందు has కూడా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The garbage truck come to our lane only on Mondays.",
      wrongIndex: 3,
      fix: "The garbage truck comes to our lane only on Mondays.",
      why: {
        en: "One truck, like he or she, takes s for a habit. Telugu verbs have no such ending.",
        te: "ఒక్క బండి (he, she లాగా), అలవాటుగా జరిగే పనికి verb కి s వస్తుంది. తెలుగులో ఇలాంటి చివర ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Call the helpline. Say the garbage in your lane has not been taken away for a week.",
        te: "హెల్ప్‌లైన్‌కి ఫోన్ చేయండి. వారం రోజులుగా మీ లేన్‌లో చెత్త తీసుకెళ్లలేదని చెప్పండి.",
      },
      expected: [
        "The garbage in our lane hasn't been collected for a week.",
        "The garbage hasn't been collected for a week.",
        "Our garbage hasn't been collected for a week.",
      ],
      options: [
        "The garbage in our lane hasn't been collected for a week.",
        "The garbage in our lane is not collected for a week.",
        "The garbage in our lane hasn't collected for a week.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The streetlight outside your house still doesn't work. Ask politely when someone will come to repair it.",
        te: "మీ ఇంటి బయట వీధి లైట్ ఇంకా పని చేయట్లేదు. ఎవరైనా ఎప్పుడు వచ్చి రిపేర్ చేస్తారో మర్యాదగా అడగండి.",
      },
      expected: ["When will someone come to repair it?", "Could you tell me when someone will come?", "When can someone come to repair it?"],
      options: ["When will someone come to repair it?", "When someone will come to repair it?", "Come and repair it today itself."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling the municipal helpline", te: "మున్సిపల్ హెల్ప్‌లైన్‌కి ఫోన్" },
    scene: {
      en: "The garbage in your lane hasn't been collected for four days. You call the municipal helpline. Usha answers.",
      te: "నాలుగు రోజులుగా మీ లేన్‌లో చెత్త తీసుకెళ్లలేదు. మీరు మున్సిపల్ హెల్ప్‌లైన్‌కి ఫోన్ చేశారు. ఉష గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Usha (at the municipal helpline)", te: "ఉష (మున్సిపల్ హెల్ప్‌లైన్‌లో)" },
    skills: [
      { id: "report", label: { en: "Reporting a problem", te: "సమస్య చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, municipal helpline. How can I help you?",
        te: "నమస్కారం, మున్సిపల్ హెల్ప్‌లైన్. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Greet her. Say what the problem is and how long it has lasted.", te: "నమస్కారం చెప్పండి. సమస్య ఏంటో, ఎన్ని రోజులుగా ఉందో చెప్పండి." },
        replies: [
          { say: "Good morning. The garbage in our lane hasn't been collected for four days.", good: true, skill: "report" },
          { say: "Good morning. The garbage in our lane is not collected for four days.", good: false, skill: "report", fixIt: "duration" },
        ],
      },
      {
        partner: "I'm sorry about that. Could you tell me your area, please?",
        te: "అయ్యో, సారీ అండీ. మీ ఏరియా కొంచెం చెప్తారా?",
        hint: { en: "Give your lane, your colony and a landmark.", te: "మీ లేన్, కాలనీ పేరు, ఒక గుర్తు చెప్పండి." },
        replies: [
          { say: "It's Lane Four, Gandhi Nagar, near the water tank.", good: true, skill: "report" },
          {
            say: "Why should I tell you? Just send the truck!",
            good: false,
            skill: "polite",
            react: { en: "I need the address to send the truck, please.", te: "బండి పంపాలంటే నాకు అడ్రస్ కావాలి కదండీ." },
          },
        ],
      },
      {
        partner: "Thank you. Is there any other problem in your lane?",
        te: "థాంక్యూ. మీ లేన్‌లో ఇంకేమైనా సమస్య ఉందా?",
        hint: { en: "Mention the broken streetlight and the mosquitoes too.", te: "పాడైన వీధి లైట్, దోమల గురించి కూడా చెప్పండి." },
        replies: [
          { say: "Yes, the streetlight hasn't been repaired yet, and there are many mosquitoes.", good: true, skill: "report" },
          { say: "Yes, the streetlight hasn't been repaired yet, and there is many mosquitoes.", good: false, skill: "report" },
        ],
      },
      {
        partner: "I've noted both. Your complaint number is four two seven one.",
        te: "రెండూ రాసుకున్నాను. మీ ఫిర్యాదు నంబర్ 4271.",
        hint: { en: "Repeat the number to check it, thank her and say goodbye.", te: "నంబర్ సరిగ్గా ఉందో లేదో మళ్ళీ చెప్పి, థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Four two seven one. Thank you very much. Goodbye.", good: true, skill: "polite" },
          { say: "Okay. Please do the needful.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
