import type { Lesson } from "../../types";

/** Week 31, Day 2 (CURRICULUM §4): have / has already + the third form, for jobs that are done. */
export const day: Lesson = {
  id: "already",
  kind: "lesson",
  title: { en: "Already", te: "ఇప్పటికే" },
  subtitle: "have / has already + done",
  summary: {
    en: "Learn to say a job is done, maybe sooner than expected: I have already paid the electricity bill.",
    te: "పని ఎప్పుడో అయిపోయిందని చెప్పడం నేర్చుకుందాం: I have already paid the electricity bill.",
  },
  seo: {
    title: "Using Already in English for Telugu Speakers",
    description:
      "Say I have already paid the electricity bill and We have already booked the tickets. Simple lessons for Telugu speakers on jobs that are done.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have already paid", role: "action" },
    { text: "the electricity bill.", role: "what" },
  ],
  core: [
    { en: "I have already paid the electricity bill.", te: "నేను ఇప్పటికే కరెంట్ బిల్ కట్టేశాను.", extra: ["pay"] },
    { en: "Gopal has already cooked dinner.", te: "గోపాల్ గారు ఇప్పటికే రాత్రి వంట చేసేశారు.", extra: ["have"] },
    { en: "We have already booked the tickets.", te: "మేము ఇప్పటికే టికెట్లు బుక్ చేసేశాం.", extra: ["book"] },
    { en: "I have already told him.", te: "నేను ఆయనకి ఇప్పటికే చెప్పేశాను.", extra: ["to"] },
    { en: "The gas cylinder has already come.", te: "గ్యాస్ సిలిండర్ ఇప్పటికే వచ్చేసింది.", extra: ["came"] },
    { en: "Don't worry, I have already locked the door.", te: "కంగారు పడకండి, నేను ఇప్పటికే తలుపుకి తాళం వేసేశాను.", extra: ["lock"] },
    { en: "Have you already watered the plants?", te: "మీరు అప్పుడే మొక్కలకి నీళ్ళు పోసేశారా?", extra: ["did"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one job you did today. Say it with already: I have already …",
    te: "ఈ రోజు మీరు చేసిన ఒక పని గుర్తు తెచ్చుకుని already తో చెప్పండి: I have already …",
  },
  words: [
    { en: "already", te: "ఇప్పటికే, అప్పుడే" },
    { en: "booked", te: "బుక్ చేశారు" },
    { en: "locked", te: "తాళం వేశారు" },
    { en: "watered", te: "నీళ్ళు పోశారు" },
    { en: "plants", te: "మొక్కలు" },
  ],
  grammar: ["present-perfect"],
  topics: ["home", "money", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Already: it is done", te: "already: పని అయిపోయింది" },
      body: {
        en: "Already says a job is done, often sooner than someone thought. Put it between have or has and the third form of the verb.",
        te: "already అంటే పని అయిపోయింది, అనుకున్నదానికంటే ముందే. దాన్ని have / has కీ verb మూడో రూపానికీ మధ్యలో పెట్టండి.",
      },
      bridge: {
        te: ["నేను", "ఇప్పటికే", "కరెంట్ బిల్", "కట్టేశాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have already paid", role: "action" },
          { text: "the electricity bill.", role: "what" },
        ],
      },
      examples: [
        { en: "I have already paid the electricity bill.", te: "నేను ఇప్పటికే కరెంట్ బిల్ కట్టేశాను." },
        { en: "The gas cylinder has already come.", te: "గ్యాస్ సిలిండర్ ఇప్పటికే వచ్చేసింది." },
        { en: "Don't worry, I have already locked the door.", te: "కంగారు పడకండి, నేను ఇప్పటికే తలుపుకి తాళం వేసేశాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Where already goes", te: "already ఎక్కడ వస్తుంది" },
      items: [
        {
          form: "have / has already + done",
          useFor: { en: "A job that is done.", te: "అయిపోయిన పని." },
          example: { en: "We have already booked the tickets.", te: "మేము ఇప్పటికే టికెట్లు బుక్ చేసేశాం." },
        },
        {
          form: "is / are already …",
          useFor: { en: "Something that is so now.", te: "ఇప్పుడు అలా ఉన్న విషయం." },
          example: { en: "The milk is already in the fridge.", te: "పాలు ఇప్పటికే ఫ్రిజ్‌లో ఉన్నాయి." },
        },
        {
          form: "Have you already …?",
          useFor: { en: "Surprise that it is done so soon.", te: "ఇంత త్వరగా అయిపోయిందా అని ఆశ్చర్యం." },
          example: { en: "Have you already watered the plants?", te: "మీరు అప్పుడే మొక్కలకి నీళ్ళు పోసేశారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I have already paid electricity bill.",
      right: "I have already paid the electricity bill.",
      why: {
        en: "A bill both of you know about needs the; Telugu has no word for the.",
        te: "ఇద్దరికీ తెలిసిన బిల్ ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am already knowing that.",
      right: "I already know that.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing, even with already.",
        te: "know అనేది ఒక స్థితి, పని కాదు; already ఉన్నా -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your neighbour Sarala says: Please pay the water bill. You paid it this morning. What do you say?",
        te: "పక్కింటి సరళ గారు నీళ్ళ బిల్ కట్టమంటున్నారు. మీరు ఈ ఉదయమే కట్టేశారు. ఏమంటారు?",
      },
      options: ["I have already paid it.", "I am already paid it.", "I have already pay it."],
      answer: 0,
      why: {
        en: "Use have already with the third form paid; am and pay do not fit.",
        te: "have already తర్వాత మూడో రూపం paid; am గానీ pay గానీ సరిపోవు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Electricity Office",
      lines: ["Dear customer, we have received ₹850", "for your electricity bill.", "Date: 05-11-2026. Thank you."],
      prompt: { en: "Your brother asks: Is the electricity bill paid?", te: "మీ అన్నయ్య కరెంట్ బిల్ కట్టారా అని అడుగుతున్నారు." },
      options: ["Yes, I have already paid it.", "No, it is not paid yet.", "No, I have to pay 850 more."],
      answer: 0,
      why: {
        en: "The office has received the money, so the bill is paid.",
        te: "ఆఫీస్‌కి డబ్బు అందింది, అంటే బిల్ కట్టేసినట్టే.",
      },
      say: "Yes, I have already paid it.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Usha says: The gas cylinder has already come. What does it mean?",
        te: "ఉష గారు The gas cylinder has already come అన్నారు. అర్థం ఏంటి?",
      },
      options: ["The cylinder is here now.", "The cylinder will come later.", "The cylinder never comes on time."],
      answer: 0,
      why: {
        en: "Already means it is done, maybe sooner than you thought.",
        te: "already అంటే పని అయిపోయింది, మీరు అనుకున్నదానికంటే ముందే కావచ్చు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Imran have already cleaned the kitchen.",
      wrongIndex: 1,
      fix: "Imran has already cleaned the kitchen.",
      why: {
        en: "Imran is one person, like he, so use has, not have.",
        te: "ఇమ్రాన్ ఒక్కరే (he లాగా), అందుకే have కాదు, has.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks you to call the gas agency. You called them this morning. Tell her.",
        te: "గ్యాస్ ఏజెన్సీకి ఫోన్ చేయమని ఒక స్నేహితురాలు చెప్తున్నారు. మీరు ఈ ఉదయమే చేశారు. ఆవిడకి చెప్పండి.",
      },
      expected: ["I have already called them.", "I've already called them.", "I have already called the agency."],
      options: ["I have already called them.", "I am already called them.", "Already I calling them."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour says: Lock the door before you go! You did it. Tell him.",
        te: "వెళ్ళే ముందు తలుపుకి తాళం వేయండి అని పక్కింటాయన అంటున్నారు. మీరు వేసేశారు. ఆయనకి చెప్పండి.",
      },
      expected: ["Don't worry, I have already locked it.", "I have already locked it.", "I've already locked it.", "I have already locked the door."],
      options: ["Don't worry, I have already locked it.", "Don't worry, I already locking it.", "Don't worry, I have already lock it."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Before the trip", te: "ప్రయాణానికి ముందు" },
    scene: {
      en: "You and your brother Satish leave for Tirupati early tomorrow. He checks the jobs at home.",
      te: "మీరూ మీ అన్నయ్య సతీష్ రేపు పొద్దున్నే తిరుపతి వెళ్తున్నారు. ఇంట్లో పనులు అయ్యాయో లేదో ఆయన చూస్తున్నారు.",
    },
    partner: { en: "Satish (your brother)", te: "సతీష్ (మీ అన్నయ్య)" },
    voice: "b",
    skills: [
      { id: "already", label: { en: "Saying already", te: "already వాడటం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "We leave at five tomorrow. Have you paid the bill?",
        te: "రేపు ఐదింటికి బయలుదేరుతున్నాం. బిల్ కట్టారా?",
        hint: { en: "Say yes, it is done.", te: "అవును, ఆ పని అయిపోయిందని చెప్పండి." },
        replies: [
          { say: "Yes, I have already paid it.", good: true, skill: "already" },
          { say: "Yes, I am already paid it.", good: false, skill: "already" },
        ],
      },
      {
        partner: "Good. Where is the milk packet?",
        te: "మంచిది. పాల ప్యాకెట్ ఎక్కడ?",
        hint: { en: "Say it is in the fridge, with already.", te: "already వాడి, అది ఫ్రిజ్‌లో ఉందని చెప్పండి." },
        replies: [
          { say: "It is already in the fridge.", good: true, skill: "already" },
          { say: "It already in the fridge.", good: false, skill: "already", fixIt: "be" },
        ],
      },
      {
        partner: "And the milkman? Did you tell him to stop?",
        te: "మరి పాలబ్బాయి? రావద్దని ఆయనకి చెప్పారా?",
        hint: { en: "Say yes, that is done too.", te: "అవును, అది కూడా అయిపోయిందని చెప్పండి." },
        replies: [
          { say: "Yes, I have already told him.", good: true, skill: "already" },
          { say: "Yes, I have already told to him.", good: false, skill: "already", fixIt: "preposition" },
          {
            say: "Why are you asking so many questions?",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I just don't want any trouble on the trip.", te: "సారీ! ప్రయాణంలో ఏ ఇబ్బందీ రాకూడదని అంతే." },
          },
        ],
      },
      {
        partner: "Great. Then we are ready to go!",
        te: "బాగుంది. అయితే మనం బయలుదేరడానికి రెడీ!",
        hint: { en: "Agree, and say good night.", te: "ఒప్పుకుని, గుడ్ నైట్ చెప్పండి." },
        replies: [
          { say: "Yes. See you in the morning. Good night!", good: true, skill: "polite" },
          { say: "Yes. See you in tomorrow morning. Good night!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
