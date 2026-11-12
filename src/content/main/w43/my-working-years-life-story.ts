import type { Lesson } from "../../types";

/** Week 43, Day 2 (CURRICULUM §5): worked as / at for finished periods; retired, still working — I worked as a clerk for thirty years. */
export const day: Lesson = {
  id: "my-working-years-life-story",
  kind: "lesson",
  title: { en: "My Working Years", te: "నేను పని చేసిన రోజులు" },
  subtitle: "I worked as … for …",
  summary: {
    en: "Learn to talk about your work, finished or still going on: I worked as a clerk for thirty years. I retired in 2018.",
    te: "అయిపోయిన పని, ఇంకా చేస్తున్న పని గురించి చెప్పడం నేర్చుకుందాం: I worked as a clerk for thirty years. I retired in 2018.",
  },
  seo: {
    title: "Talking About Your Work in English for Telugu Speakers",
    description:
      "Say I worked as a clerk for thirty years and I retired in 2018. Simple lessons for Telugu speakers on talking about work and retirement.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "worked as", role: "action" },
    { text: "a clerk", role: "what" },
    { text: "for thirty years", role: "when" },
  ],
  core: [
    { en: "I worked as a clerk.", te: "నేను క్లర్క్‌గా పని చేశాను.", extra: ["work"] },
    { en: "I worked in a sugar factory for thirty years.", te: "నేను ముప్పై ఏళ్ళు ఒక షుగర్ ఫ్యాక్టరీలో పని చేశాను.", extra: ["since"] },
    { en: "What did you do before you retired?", te: "రిటైర్ అవ్వక ముందు మీరు ఏం చేసేవారు?", extra: ["retire"] },
    { en: "I retired in two thousand eighteen.", te: "నేను 2018 లో రిటైర్ అయ్యాను.", extra: ["have"] },
    { en: "I still help at the library on Saturdays.", te: "ఇప్పటికీ శనివారాలు లైబ్రరీలో సాయం చేస్తుంటాను.", extra: ["helping"] },
    { en: "I worked at home and looked after the house.", te: "నేను ఇంట్లోనే ఉండి ఇంటి బాధ్యతలు చూసుకున్నాను.", extra: ["work"] },
    { en: "My friend Imran is still working at the bank.", te: "మా స్నేహితుడు ఇమ్రాన్ గారు ఇంకా బ్యాంక్‌లో పని చేస్తున్నారు.", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone about your working years in two sentences: I worked as … or I worked at home …",
    te: "మీరు పని చేసిన రోజుల గురించి ఎవరికైనా రెండు వాక్యాల్లో చెప్పండి: I worked as … లేదా I worked at home …",
  },
  words: [
    { en: "clerk", te: "క్లర్క్, గుమాస్తా" },
    { en: "factory", te: "ఫ్యాక్టరీ, కర్మాగారం" },
    { en: "colleague", te: "కలిసి పని చేసినవారు, సహోద్యోగి" },
    { en: "homemaker", te: "ఇంటి బాధ్యతలు చూసుకునేవారు" },
    { en: "still", te: "ఇప్పటికీ, ఇంకా" },
  ],
  grammar: ["past-simple", "present-simple", "articles"],
  topics: ["people", "offices", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Work you did", te: "మీరు చేసిన పని" },
      body: {
        en: "For work that is over, use the past: I worked. Say as before the job, in or at before the place, and for before how long.",
        te: "అయిపోయిన పనికి past: I worked. ఉద్యోగం ముందు as, చోటు ముందు in లేదా at, ఎంత కాలమో చెప్పడానికి for.",
      },
      bridge: {
        te: ["నేను", "ముప్పై ఏళ్ళు", "క్లర్క్‌గా", "పని చేశాను"],
        en: [
          { text: "I", role: "who" },
          { text: "worked as", role: "action" },
          { text: "a clerk", role: "what" },
          { text: "for thirty years", role: "when" },
        ],
      },
      examples: [
        { en: "I worked as a clerk.", te: "నేను క్లర్క్‌గా పని చేశాను." },
        { en: "I worked in a sugar factory for thirty years.", te: "నేను ముప్పై ఏళ్ళు ఒక షుగర్ ఫ్యాక్టరీలో పని చేశాను." },
        { en: "I retired in two thousand eighteen.", te: "నేను 2018 లో రిటైర్ అయ్యాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Then and now", te: "అప్పుడు, ఇప్పుడు" },
      items: [
        {
          form: "worked as … for …",
          useFor: { en: "A job that is over.", te: "అయిపోయిన ఉద్యోగం." },
          example: { en: "Venkat worked as a bus driver for thirty years.", te: "వెంకట్ గారు ముప్పై ఏళ్ళు బస్ డ్రైవర్‌గా పని చేశారు." },
        },
        {
          form: "retired in …",
          useFor: { en: "The year your job ended.", te: "ఉద్యోగం ఆగిపోయిన సంవత్సరం." },
          example: { en: "Lakshmi retired from the post office in two thousand fifteen.", te: "లక్ష్మి గారు 2015 లో పోస్టాఫీసు నుంచి రిటైర్ అయ్యారు." },
        },
        {
          form: "still working",
          useFor: { en: "Work that goes on today.", te: "ఈ రోజుకీ జరుగుతున్న పని." },
          example: { en: "I'm still working as a tailor.", te: "నేను ఇప్పటికీ టైలర్‌గా పని చేస్తున్నాను." },
        },
        {
          form: "worked at home",
          useFor: { en: "Running a house is work too.", te: "ఇల్లు నడపడం కూడా పనే." },
          example: { en: "I was a homemaker for many years.", te: "చాలా ఏళ్ళు నేను ఇంటి బాధ్యతలు చూసుకున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I worked as clerk.",
      right: "I worked as a clerk.",
      why: {
        en: "A job after as needs a or an; Telugu క్లర్క్‌గా has no such word.",
        te: "as తర్వాత ఉద్యోగం పేరు ముందు a లేదా an కావాలి; తెలుగు 'క్లర్క్‌గా' లో అలాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I have retired in two thousand eighteen.",
      right: "I retired in two thousand eighteen.",
      why: {
        en: "When you say the year, use the plain past; have does not go with a finished time.",
        te: "సంవత్సరం చెప్తే past మాత్రమే; అయిపోయిన సమయంతో have రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "A new friend asks what work you did. You were a teacher for many years. What do you say?",
        te: "మీరు ఏం పని చేసేవారని ఒక కొత్త స్నేహితులు అడుగుతున్నారు. మీరు చాలా ఏళ్ళు టీచర్‌గా పని చేశారు. ఏమంటారు?",
      },
      options: ["I was a teacher in a government school.", "I am a teacher in a government school.", "I was teacher in a government school."],
      answer: 0,
      why: {
        en: "Your job is over, so use was; a job also needs a before it.",
        te: "ఉద్యోగం అయిపోయింది కాబట్టి was; ఉద్యోగం పేరు ముందు a కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I worked in the factory ___ thirty years.",
      te: "నేను ముప్పై ఏళ్ళు ఆ ఫ్యాక్టరీలో పని చేశాను.",
      options: ["for", "since", "from"],
      answer: 0,
      why: {
        en: "For goes with a length of time; since needs the point where it started.",
        te: "ఎంత కాలమో చెప్పడానికి for; since తర్వాత మొదలైన సమయం రావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "An old colleague asks: Are you still working? You stopped some years ago, but you help at a library now. Answer.",
        te: "ఇంకా పని చేస్తున్నారా అని పాత సహోద్యోగి అడుగుతున్నారు. మీరు కొన్నేళ్ళ క్రితం రిటైర్ అయ్యారు, కానీ ఇప్పుడు లైబ్రరీలో సాయం చేస్తున్నారు. జవాబు చెప్పండి.",
      },
      options: ["No, I retired, but I help at the library.", "No, I am retired since many years.", "Yes, I'm still working at the factory."],
      answer: 0,
      why: {
        en: "The job is over, so retired is past; the library help is today, so it is present.",
        te: "ఉద్యోగం అయిపోయింది కాబట్టి retired (past); లైబ్రరీ సాయం ఇప్పటిది, అందుకే present.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My colleague Mary still teach at the school.",
      wrongIndex: 4,
      fix: "My colleague Mary still teaches at the school.",
      why: {
        en: "Mary is one person, so the verb takes es, as with he or she.",
        te: "మేరీ గారు ఒక్కరే (he, she లాగా), అందుకే verb కి es: teach కాదు, teaches.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A new friend asks about your work. Say you were a clerk for thirty years.",
        te: "కొత్త స్నేహితులు మీ పని గురించి అడుగుతున్నారు. ముప్పై ఏళ్ళు క్లర్క్‌గా పని చేశానని చెప్పండి.",
      },
      expected: ["I worked as a clerk for thirty years.", "I was a clerk for thirty years.", "I worked as a clerk for thirty years. Now I'm retired."],
      options: ["I worked as a clerk for thirty years.", "I worked as clerk for thirty years.", "I am working as a clerk since thirty years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone asks: Are you still working? Say no, you retired in 2018.",
        te: "ఇంకా పని చేస్తున్నారా అని ఎవరో అడుగుతున్నారు. లేదు, 2018 లో రిటైర్ అయ్యానని చెప్పండి.",
      },
      expected: ["No, I retired in two thousand eighteen.", "I retired in two thousand eighteen.", "No, I'm retired now."],
      options: ["No, I retired in two thousand eighteen.", "No, I have retired in two thousand eighteen.", "No, I am retire in two thousand eighteen."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new member at the club", te: "క్లబ్‌లో కొత్త సభ్యుడు" },
    scene: {
      en: "Joseph has just joined your senior citizens club. You chat with him over tea.",
      te: "జోసెఫ్ గారు ఈ మధ్యే మీ సీనియర్ సిటిజన్స్ క్లబ్‌లో చేరారు. టీ తాగుతూ ఆయనతో మాట్లాడుతున్నారు.",
    },
    partner: { en: "Joseph (a new club member)", te: "జోసెఫ్ (క్లబ్‌లో కొత్త సభ్యుడు)" },
    voice: "b",
    skills: [
      { id: "work", label: { en: "Talking about work", te: "పని గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello, I'm Joseph. I joined the club this week.",
        te: "హలో, నేను జోసెఫ్. ఈ వారమే క్లబ్‌లో చేరాను.",
        hint: { en: "Welcome him, and ask what work he did.", te: "ఆయనకి స్వాగతం చెప్పి, ఏం పని చేసేవారో అడగండి." },
        replies: [
          { say: "Welcome, Joseph! What did you do before you retired?", good: true, skill: "work" },
          { say: "Welcome! What work did you do?", good: true, skill: "work" },
          { say: "Welcome! What you did before you retired?", good: false, skill: "work", fixIt: "question" },
        ],
      },
      {
        partner: "I was a nurse at the government hospital. And you?",
        te: "నేను ప్రభుత్వ ఆసుపత్రిలో నర్సుగా పని చేశాను. మరి మీరు?",
        hint: { en: "Tell him about your own working years.", te: "మీరు పని చేసిన రోజుల గురించి చెప్పండి." },
        replies: [
          { say: "I worked as a clerk in a sugar factory.", good: true, skill: "work" },
          { say: "I worked at home for many years.", good: true, skill: "work" },
          { say: "I worked as clerk in a sugar factory.", good: false, skill: "work", fixIt: "article" },
        ],
      },
      {
        partner: "How nice! Are you still working?",
        te: "బాగుంది! ఇంకా పని చేస్తున్నారా?",
        hint: { en: "Say you retired, but you still help at the library.", te: "రిటైర్ అయ్యారని, కానీ ఇప్పటికీ లైబ్రరీలో సాయం చేస్తున్నారని చెప్పండి." },
        replies: [
          { say: "No, I retired, but I still help at the library.", good: true, skill: "work" },
          {
            say: "Working? At my age? What a silly question!",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry! I didn't mean to upset you.", te: "అయ్యో, సారీ! మిమ్మల్ని బాధపెట్టాలని అనలేదండీ." },
          },
        ],
      },
      {
        partner: "That's wonderful. Maybe I can help there too.",
        te: "చాలా బాగుంది. బహుశా నేను కూడా అక్కడ సాయం చేయొచ్చు.",
        hint: { en: "Say yes, and offer to take him there on Saturday.", te: "సరే అని, శనివారం ఆయన్ని అక్కడికి తీసుకెళ్తానని చెప్పండి." },
        replies: [
          { say: "Yes! Come with me on Saturday.", good: true, skill: "polite" },
          { say: "Of course. Let's go together on Saturday.", good: true, skill: "polite" },
          { say: "Yes! Come with me in Saturday.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
