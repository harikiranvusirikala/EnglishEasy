import type { Lesson } from "../../types";

/** Week 35, Day 4 (CURRICULUM §4): good at / interested in + -ing or a noun — I'm good at drawing rangoli. I'm interested in music. */
export const day: Lesson = {
  id: "good-at-drawing",
  kind: "lesson",
  title: { en: "I'm Good at Drawing", te: "నాకు బాగా వచ్చు" },
  subtitle: "good at / interested in",
  summary: {
    en: "Learn to say what you do well and what you want to learn: I'm good at drawing rangoli. I'm interested in music.",
    te: "మీకు ఏది బాగా వచ్చో, దేని మీద ఆసక్తి ఉందో చెప్పడం నేర్చుకుందాం: I'm good at drawing rangoli. I'm interested in music.",
  },
  seo: {
    title: "Good At, Interested In: English for Telugu Speakers",
    description:
      "Say I'm good at drawing rangoli and I'm interested in music. Simple lessons for Telugu speakers on good at and interested in.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "good at", role: "action" },
    { text: "drawing rangoli", role: "what" },
  ],
  core: [
    { en: "I'm good at drawing rangoli.", te: "నాకు ముగ్గులు వేయడం బాగా వచ్చు.", extra: ["in"] },
    { en: "I'm interested in music.", te: "నాకు సంగీతం అంటే ఆసక్తి.", extra: ["interesting"] },
    { en: "Are you good at cooking?", te: "మీకు వంట బాగా వచ్చా?", extra: ["Do"] },
    { en: "She is very good at singing.", te: "ఆవిడ చాలా బాగా పాడతారు.", extra: ["sing"] },
    { en: "I'm not very good at chess.", te: "నాకు చెస్ అంత బాగా రాదు.", extra: ["don't"] },
    { en: "Gopal is interested in learning the tabla.", te: "గోపాల్ గారికి తబలా నేర్చుకోవాలని ఆసక్తి ఉంది.", extra: ["learn"] },
    { en: "I want to join the music class.", te: "నేను మ్యూజిక్ క్లాస్‌లో చేరాలనుకుంటున్నాను.", extra: ["joining"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Say one thing you are good at and one thing you are interested in.",
    te: "మీకు బాగా వచ్చిన ఒక పని, మీకు ఆసక్తి ఉన్న ఒక విషయం పైకి చెప్పండి.",
  },
  words: [
    { en: "good at", te: "బాగా వచ్చు" },
    { en: "interested in", te: "ఆసక్తి ఉంది" },
    { en: "drawing", te: "బొమ్మలు వేయడం, డ్రాయింగ్" },
    { en: "instrument", te: "వాయిద్యం" },
    { en: "sign up", te: "పేరు నమోదు చేసుకోవడం" },
  ],
  grammar: ["gerunds-infinitives", "prepositions"],
  topics: ["people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Good at, interested in", te: "బాగా వచ్చు, ఆసక్తి ఉంది" },
      body: {
        en: "Good at means you do it well. Interested in means you want to learn or know more. After at or in, use a thing or a verb with -ing: good at drawing, interested in music.",
        te: "good at అంటే అది మీకు బాగా వచ్చు. interested in అంటే దాని మీద ఆసక్తి ఉంది. at, in తర్వాత ఒక విషయం గానీ -ing verb గానీ: good at drawing, interested in music.",
      },
      bridge: {
        te: ["నాకు", "ముగ్గులు వేయడం", "బాగా వచ్చు"],
        en: [
          { text: "I'm", role: "who" },
          { text: "good at", role: "action" },
          { text: "drawing rangoli", role: "what" },
        ],
      },
      examples: [
        { en: "I'm good at drawing rangoli.", te: "నాకు ముగ్గులు వేయడం బాగా వచ్చు." },
        { en: "I'm interested in music.", te: "నాకు సంగీతం అంటే ఆసక్తి." },
        { en: "Gopal is interested in learning the tabla.", te: "గోపాల్ గారికి తబలా నేర్చుకోవాలని ఆసక్తి ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Good at or interested in?", te: "good at ఆ, interested in ఆ?" },
      items: [
        {
          form: "good at",
          useFor: { en: "Something you do well.", te: "మీకు బాగా వచ్చిన పని." },
          example: { en: "She is very good at singing.", te: "ఆవిడ చాలా బాగా పాడతారు." },
        },
        {
          form: "not very good at",
          useFor: { en: "A polite way to say you are weak at it.", te: "అంత బాగా రాదని మర్యాదగా చెప్పడానికి." },
          example: { en: "I'm not very good at chess.", te: "నాకు చెస్ అంత బాగా రాదు." },
        },
        {
          form: "interested in",
          useFor: { en: "Something you want to learn or know about.", te: "నేర్చుకోవాలని, తెలుసుకోవాలని ఉన్నది." },
          example: { en: "Gopal is interested in learning the tabla.", te: "గోపాల్ గారికి తబలా నేర్చుకోవాలని ఆసక్తి ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "I interested in music.",
      right: "I'm interested in music.",
      why: {
        en: "Telugu says ఆసక్తి ఉంది with no am, but English needs am before interested.",
        te: "తెలుగులో am లాంటి పదం లేకుండా చెప్తాం; ఇంగ్లీష్‌లో interested ముందు am కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I am good in drawing.",
      right: "I am good at drawing.",
      why: {
        en: "For a skill, English says good at, never good in.",
        te: "ఏదైనా బాగా వస్తుందని చెప్పేటప్పుడు good at అనాలి; good in అనకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "You draw rangoli very well. What do you say?", te: "మీరు ముగ్గులు చాలా బాగా వేస్తారు. ఏమంటారు?" },
      options: ["I'm good in drawing rangoli.", "I'm good at drawing rangoli.", "I'm good at draw rangoli."],
      answer: 1,
      why: {
        en: "A skill takes good at, and the verb after at takes -ing.",
        te: "బాగా వచ్చిన పనికి good at; at తర్వాత verb కి -ing.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I'm interested ___ music.",
      te: "నాకు సంగీతం అంటే ఆసక్తి.",
      options: ["on", "at", "in"],
      answer: 2,
      why: {
        en: "Interested always takes in; good is the one that takes at.",
        te: "interested తర్వాత ఎప్పుడూ in; at వచ్చేది good తర్వాత.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I'm interested in yoga.", "I'm interesting in yoga.", "I interested in yoga."],
      answer: 0,
      why: {
        en: "Use am with interested, the feeling word; interesting describes the thing itself.",
        te: "మీ భావనకి interested, am తో కలిపి; interesting అంటే ఆ విషయమే ఆసక్తిగా ఉందని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "She is good at the singing.",
      wrongIndex: 4,
      fix: "She is good at singing.",
      why: {
        en: "A hobby in general needs no the before it.",
        te: "మామూలుగా ఒక హాబీ గురించి చెప్పేటప్పుడు దాని ముందు the అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell a friend you sing well.",
        te: "మీరు బాగా పాడతారని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I'm good at singing.", "I am good at singing.", "I'm very good at singing."],
      options: ["I'm good at singing.", "I'm good in singing.", "I'm good at sing."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask a neighbour if she cooks well.",
        te: "పక్కింటావిడకి వంట బాగా వచ్చా అని అడగండి.",
      },
      expected: ["Are you good at cooking?", "Are you a good cook?"],
      options: ["Are you good at cooking?", "Do you good at cooking?", "Are you good in cooking?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Signing up for a music class", te: "మ్యూజిక్ క్లాస్‌లో పేరు నమోదు" },
    scene: {
      en: "Sarala teaches music at the community hall. You want to sign up for her class.",
      te: "సరళ గారు కమ్యూనిటీ హాల్‌లో సంగీతం నేర్పిస్తారు. మీరు ఆవిడ క్లాస్‌లో పేరు నమోదు చేసుకోవాలనుకుంటున్నారు.",
    },
    partner: { en: "Sarala (music teacher)", te: "సరళ (సంగీతం టీచర్)" },
    skills: [{ id: "skill", label: { en: "Good at, interested in", te: "బాగా వచ్చు, ఆసక్తి" } }],
    turns: [
      {
        partner: "Hello! Are you here for the music class?",
        te: "నమస్కారం! మీరు మ్యూజిక్ క్లాస్ కోసం వచ్చారా?",
        hint: { en: "Say yes, and that you want to join.", te: "అవునని, క్లాస్‌లో చేరాలనుకుంటున్నారని చెప్పండి." },
        replies: [
          { say: "Yes, I'd like to sign up, please.", good: true },
          { say: "Yes, I want join the class.", good: false },
        ],
      },
      {
        partner: "Good. Do you sing already, or are you new?",
        te: "మంచిది. మీరు ఇప్పటికే పాడతారా, లేక కొత్తగా నేర్చుకుంటున్నారా?",
        hint: { en: "Say you are new, but music interests you a lot.", te: "కొత్తేనని, కానీ సంగీతం అంటే చాలా ఆసక్తి అని చెప్పండి." },
        replies: [
          { say: "I'm new, but I'm very interested in music.", good: true, skill: "skill" },
          { say: "I'm new, but I'm very interesting in music.", good: false, skill: "skill" },
        ],
      },
      {
        partner: "Lovely. Are you good at any instrument?",
        te: "చాలా బాగుంది. మీకు ఏదైనా వాయిద్యం బాగా వచ్చా?",
        hint: { en: "Say no politely, and say what you do well.", te: "రాదని మర్యాదగా చెప్పి, మీకు ఏది బాగా వచ్చో చెప్పండి." },
        replies: [
          { say: "Not really. But I'm good at drawing rangoli!", good: true, skill: "skill" },
          { say: "Not really. But I'm good in drawing rangoli!", good: false, skill: "skill", fixIt: "preposition" },
          {
            say: "Why are you asking so many questions?",
            good: false,
            skill: "skill",
            react: { en: "Sorry! I ask everyone, for the form.", te: "సారీ అండీ! ఫారం కోసం అందరినీ అడుగుతాను." },
          },
        ],
      },
      {
        partner: "Wonderful! The class is on Saturdays at five.",
        te: "చాలా మంచిది! క్లాస్ ప్రతి శనివారం ఐదింటికి.",
        hint: { en: "Thank her, and say you will come on Saturday.", te: "ఆవిడకి థాంక్స్ చెప్పి, శనివారం వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll come on Saturday.", good: true },
          { say: "Thank you. I come on Saturday.", good: false },
        ],
      },
    ],
  },
};
