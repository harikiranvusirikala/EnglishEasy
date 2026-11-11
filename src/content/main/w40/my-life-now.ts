import type { Lesson } from "../../types";

/** Week 40, Day 3 (CURRICULUM §4): My Life Now — present perfect, present simple, present continuous and going to, about yourself. */
export const day: Lesson = {
  id: "my-life-now",
  kind: "lesson",
  title: { en: "My Life Now", te: "ఇప్పుడు నా జీవితం" },
  subtitle: "mixed tenses about yourself",
  summary: {
    en: "Talk about your life now: how long you have lived here, what you do every day, what you are learning, and your plans.",
    te: "ఇప్పటి మీ జీవితం గురించి చెప్పడం నేర్చుకుందాం: ఎన్నాళ్ళుగా ఇక్కడ ఉంటున్నారో, రోజూ ఏం చేస్తారో, ఈ మధ్య ఏం నేర్చుకుంటున్నారో, మీ ప్లాన్లు.",
  },
  seo: {
    title: "Talking About Your Life in English for Telugu Speakers",
    description:
      "Say I have lived here for many years, I enjoy walking and These days I am learning English. A lesson for Telugu speakers on talking about yourself.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have lived", role: "action" },
    { text: "here", role: "what" },
    { text: "for many years", role: "when" },
  ],
  core: [
    { en: "I have lived here for many years.", te: "నేను చాలా ఏళ్ళుగా ఇక్కడ ఉంటున్నాను.", extra: ["am"] },
    { en: "I enjoy walking in the park every morning.", te: "రోజూ ఉదయం పార్క్‌లో నడవడం నాకు చాలా ఇష్టం.", extra: ["walk"] },
    { en: "These days I am learning English.", te: "ఈ మధ్య నేను ఇంగ్లీష్ నేర్చుకుంటున్నాను.", extra: ["learn"] },
    { en: "I live with my younger sister.", te: "నేను మా చెల్లెలితో కలిసి ఉంటాను.", extra: ["lives"] },
    { en: "I keep busy with my plants and books.", te: "మొక్కలు, పుస్తకాలతో నాకు బాగా కాలక్షేపం అవుతుంది.", extra: ["keeping"] },
    { en: "At my age, a daily walk is important.", te: "ఈ వయసులో రోజూ నడక చాలా ముఖ్యం.", extra: ["in"] },
    { en: "My life is simple and peaceful now.", te: "ఇప్పుడు నా జీవితం సాదాసీదాగా, ప్రశాంతంగా ఉంది.", extra: ["peace"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Tell yourself about your life now in four sentences: how long, every day, these days, and next month.",
    te: "ఇప్పటి మీ జీవితం గురించి నాలుగు వాక్యాలు గట్టిగా చెప్పండి: ఎన్నాళ్ళుగా, రోజూ, ఈ మధ్య, వచ్చే నెల.",
  },
  words: [
    { en: "these days", te: "ఈ మధ్య, ఈ రోజుల్లో" },
    { en: "alone", te: "ఒంటరిగా, ఒక్కరే" },
    { en: "peaceful", te: "ప్రశాంతంగా" },
    { en: "keep busy", te: "పనుల్లో ఉండటం, కాలక్షేపం" },
    { en: "at my age", te: "ఈ వయసులో" },
  ],
  grammar: ["present-perfect", "present-simple", "present-continuous", "gerunds-infinitives", "going-to"],
  topics: ["people", "home", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Your life in four forms", te: "నాలుగు రూపాల్లో మీ జీవితం" },
      body: {
        en: "To talk about your life now, mix four forms. How long: I have lived here for many years. Every day: I walk in the park. These days: I am learning English. Soon: I am going to visit Tirupati.",
        te: "ఇప్పటి మీ జీవితం గురించి చెప్పడానికి నాలుగు రూపాలు కలపండి. ఎన్నాళ్ళుగా: I have lived here for many years. రోజూ: I walk in the park. ఈ మధ్య: I am learning English. త్వరలో: I am going to visit Tirupati.",
      },
      bridge: {
        te: ["నేను", "చాలా ఏళ్ళుగా", "ఇక్కడ", "ఉంటున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have lived", role: "action" },
          { text: "here", role: "what" },
          { text: "for many years", role: "when" },
        ],
      },
      examples: [
        { en: "I have lived here for many years.", te: "నేను చాలా ఏళ్ళుగా ఇక్కడ ఉంటున్నాను." },
        { en: "I enjoy walking in the park every morning.", te: "రోజూ ఉదయం పార్క్‌లో నడవడం నాకు చాలా ఇష్టం." },
        { en: "These days I am learning English.", te: "ఈ మధ్య నేను ఇంగ్లీష్ నేర్చుకుంటున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which form when?", te: "ఏ రూపం ఎప్పుడు?" },
      items: [
        {
          form: "I have lived … for / since …",
          useFor: { en: "It started in the past and is still true.", te: "గతంలో మొదలై, ఇప్పటికీ ఉన్నది." },
          example: { en: "I have lived in Nellore since two thousand twelve.", te: "నేను 2012 నుంచి నెల్లూరులో ఉంటున్నాను." },
        },
        {
          form: "I live, I walk",
          useFor: { en: "Every day, and things that are always true.", te: "రోజూ చేసేవి, ఎప్పుడూ నిజమైనవి." },
          example: { en: "I live alone, but my cousin visits often.", te: "నేను ఒంటరిగా ఉంటాను, కానీ మా కజిన్ ఎక్కువగా వస్తుంటారు." },
        },
        {
          form: "These days I am …-ing",
          useFor: { en: "Something new you are doing for a while.", te: "ఈ మధ్య కొంత కాలంగా చేస్తున్న కొత్త పని." },
          example: { en: "These days I am learning to use WhatsApp.", te: "ఈ మధ్య WhatsApp వాడటం నేర్చుకుంటున్నాను." },
        },
        {
          form: "I'm going to …",
          useFor: { en: "A plan for soon.", te: "త్వరలో చేయాలనుకున్న పని." },
          example: { en: "Next month I'm going to visit Tirupati.", te: "వచ్చే నెల తిరుపతి వెళ్ళబోతున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am living here for many years.",
      right: "I have lived here for many years.",
      why: {
        en: "For a time up to now, English needs have lived; Telugu ఉంటున్నాను makes us say am living.",
        te: "ఇప్పటి వరకు ఎంత కాలమో చెప్తే have lived కావాలి; 'ఉంటున్నాను' వల్ల am living అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am having two brothers.",
      right: "I have two brothers.",
      why: {
        en: "Have for the people or things in your life takes no -ing.",
        te: "మనకి ఉన్న మనుషుల గురించి, వస్తువుల గురించి చెప్పే have కి -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Say a daily walk is important for people your age.", te: "మీ వయసువారికి రోజూ నడక ముఖ్యమని చెప్పండి." },
      options: ["At my age, a daily walk is important.", "In my age, a daily walk is important.", "At my age, daily walk is important."],
      answer: 0,
      why: {
        en: "With age, English uses at; Telugu వయసులో tempts us to say in.",
        te: "వయసు గురించి ఇంగ్లీష్‌లో at వాడతారు; 'వయసులో' అని in అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I really enjoy ___ old Telugu songs.",
      te: "పాత తెలుగు పాటలు వినడం నాకు చాలా ఇష్టం.",
      options: ["listening to", "to listen", "listen"],
      answer: 0,
      why: {
        en: "After enjoy, the next verb takes -ing, never to.",
        te: "enjoy తర్వాత వచ్చే verb కి -ing వస్తుంది; to రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Padma says: These days I am learning yoga. What does she mean?",
        te: "పద్మ గారు 'These days I am learning yoga' అన్నారు. అంటే ఏంటి?",
      },
      options: ["She started it recently and still goes.", "She learned it many years ago.", "She will start it next year."],
      answer: 0,
      why: {
        en: "These days with am learning means something new that is going on now.",
        te: "These days తో am learning అంటే ఈ మధ్య మొదలై, ఇప్పుడు జరుగుతున్న పని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My cousin visit me every Sunday.",
      wrongIndex: 2,
      fix: "My cousin visits me every Sunday.",
      why: {
        en: "My cousin is one person, like he or she, so the verb needs s.",
        te: "My cousin అంటే ఒక్కరే (he, she లాగా), అందుకే verb కి s కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Someone asks how long you have lived in this town. Say: many years.",
        te: "ఈ ఊర్లో ఎన్నాళ్ళుగా ఉంటున్నారని ఒకరు అడిగారు. చాలా ఏళ్ళుగా అని చెప్పండి.",
      },
      expected: ["I have lived here for many years.", "I've lived here for many years.", "For many years."],
      options: ["I have lived here for many years.", "I am living here since many years.", "I live here from many years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Say what you enjoy doing every evening: walking.",
        te: "రోజూ సాయంత్రం మీకు ఏం చేయడం ఇష్టమో చెప్పండి: నడవడం.",
      },
      expected: ["I enjoy walking every evening.", "I enjoy walking in the evening."],
      options: ["I enjoy walking every evening.", "I enjoy to walk every evening.", "I am enjoying walk every evening."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The new walking group", te: "కొత్త వాకింగ్ గ్రూప్" },
    scene: {
      en: "You have joined a morning walking group in the park. Grace, the leader, asks you to introduce yourself.",
      te: "పార్క్‌లో ఉదయం నడిచే ఒక గ్రూప్‌లో మీరు చేరారు. గ్రూప్ నడిపే గ్రేస్ గారు మీ గురించి చెప్పమని అడుగుతున్నారు.",
    },
    partner: { en: "Grace (the group leader)", te: "గ్రేస్ (గ్రూప్ నడిపేవారు)" },
    skills: [
      { id: "me", label: { en: "Talking about yourself", te: "మీ గురించి చెప్పడం" } },
      { id: "howlong", label: { en: "How long", te: "ఎన్నాళ్ళుగా" } },
    ],
    turns: [
      {
        partner: "Welcome! Please tell us a little about yourself.",
        te: "స్వాగతం! మీ గురించి మాకు కొంచెం చెప్పండి.",
        hint: { en: "Give your name the natural way, and where you live.", te: "మీ పేరు సహజంగా చెప్పి, ఎక్కడ ఉంటారో చెప్పండి." },
        replies: [
          { say: "Thank you. I'm Kiran. I live in Gandhi Nagar.", good: true, skill: "me" },
          { say: "Thank you. Myself Kiran. I live in Gandhi Nagar.", good: false, skill: "me", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Nice! How long have you lived there?",
        te: "బాగుంది! అక్కడ ఎన్నాళ్ళుగా ఉంటున్నారు?",
        hint: { en: "Say how long, with for.", te: "for తో ఎన్నాళ్ళుగానో చెప్పండి." },
        replies: [
          { say: "I have lived there for fifteen years.", good: true, skill: "howlong" },
          { say: "I am living there since fifteen years.", good: false, skill: "howlong", fixIt: "duration" },
        ],
      },
      {
        partner: "And what do you do these days?",
        te: "ఈ మధ్య ఏం చేస్తున్నారు?",
        hint: { en: "Say your work, or that you are retired, and what you are learning.", te: "మీ పని, లేదా రిటైర్ అయ్యారని, ఇంకా ఏం నేర్చుకుంటున్నారో చెప్పండి." },
        replies: [
          { say: "I'm retired. These days I'm learning English.", good: true, skill: "me" },
          { say: "I run a small shop. I'm also learning English.", good: true, skill: "me" },
          { say: "I'm retired. These days I learning English.", good: false, skill: "me", fixIt: "be" },
        ],
      },
      {
        partner: "Wonderful! We walk at six every day. Is that okay?",
        te: "చాలా బాగుంది! మేము రోజూ ఆరింటికి నడుస్తాం. మీకు సరిపోతుందా?",
        hint: { en: "Say yes happily, and thank her for the welcome.", te: "సంతోషంగా సరే అని, స్వాగతానికి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, that's perfect. Thank you for the warm welcome.", good: true, skill: "me" },
          {
            say: "Six? Too early. Change it to eight.",
            good: false,
            skill: "me",
            react: { en: "Sorry, everyone likes six. Maybe try it once?", te: "సారీ, అందరికీ ఆరే బాగుంటుంది. ఒకసారి వచ్చి చూస్తారా?" },
          },
        ],
      },
    ],
  },
};
