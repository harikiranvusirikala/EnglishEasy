import type { Lesson } from "../../types";

/** Week 62, Day 1 (CURRICULUM §5): Would you mind + -ing? in formal calls — calling the electricity office about a new connection. */
export const day: Lesson = {
  id: "would-you-mind-office-call",
  kind: "lesson",
  title: { en: "Would You Mind Checking?", te: "కొంచెం చూస్తారా?" },
  subtitle: "Would you mind + -ing?",
  summary: {
    en: "Learn to ask an office politely on the phone: Would you mind checking the status of my application?",
    te: "ఫోన్‌లో ఆఫీసువాళ్ళని మర్యాదగా అడగడం నేర్చుకుందాం: Would you mind checking the status of my application?",
  },
  seo: {
    title: "Would You Mind in English for Telugu Speakers",
    description:
      "Say Would you mind checking the status of my application? and Would you mind spelling that? Formal phone English for Telugu speakers.",
  },
  pattern: [
    { text: "Would you mind", role: "action" },
    { text: "checking", role: "action" },
    { text: "the status", role: "what" },
    { text: "of my application?", role: "what" },
  ],
  core: [
    { en: "Would you mind speaking a little slowly?", te: "కొంచెం నెమ్మదిగా మాట్లాడతారా?", extra: ["speak"] },
    { en: "Would you mind checking the status of my application?", te: "నా application స్టేటస్ ఏంటో కొంచెం చూస్తారా?", extra: ["check"] },
    { en: "Would you mind spelling that, please?", te: "అది కొంచెం స్పెల్లింగ్ చెప్తారా?", extra: ["spell"] },
    { en: "Not at all. Please give me your application number.", te: "అభ్యంతరం ఏమీ లేదు. మీ application నంబర్ చెప్పండి.", extra: ["Yes,"] },
    { en: "Would you mind sending the lineman this week?", te: "ఈ వారం లైన్‌మన్‌ని కొంచెం పంపిస్తారా?", extra: ["send"] },
    { en: "The inspection is done, but the connection is not sanctioned yet.", te: "తనిఖీ అయిపోయింది, కానీ connection ఇంకా మంజూరు కాలేదు.", extra: ["still"] },
    { en: "Would you mind giving me the extension number?", te: "extension నంబర్ కొంచెం ఇస్తారా?", extra: ["give"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one office you may call. Say aloud two questions for them with Would you mind …?",
    te: "మీరు ఫోన్ చేయాల్సిన ఒక ఆఫీసు గురించి ఆలోచించండి. Would you mind …? తో వాళ్ళని అడిగే రెండు ప్రశ్నలు గట్టిగా చెప్పి చూడండి.",
  },
  words: [
    { en: "lineman", te: "లైన్‌మన్, కరెంట్ లైన్లు చూసే ఉద్యోగి" },
    { en: "inspection", te: "తనిఖీ, ఇన్‌స్పెక్షన్" },
    { en: "sanctioned", te: "మంజూరైంది" },
    { en: "extension", te: "ఆఫీసులో ఒకరి ఫోన్ లైన్ నంబర్, ఎక్స్‌టెన్షన్" },
    { en: "office hours", te: "ఆఫీసు పనివేళలు" },
  ],
  grammar: ["would-like", "gerunds-infinitives", "politeness-softening"],
  topics: ["offices", "phone", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Would you mind + -ing", te: "Would you mind + -ing (కొంచెం … చేస్తారా?)" },
      body: {
        en: "Would you mind …? is a very polite way to ask an office for something. The verb after it takes -ing. If someone asks you, say Not at all to mean yes.",
        te: "Would you mind …? అంటే 'కొంచెం … చేస్తారా?' అని చాలా మర్యాదగా అడగడం; దాని తర్వాత verb కి -ing వస్తుంది. మిమ్మల్ని అడిగితే, సరే అనడానికి Not at all అనండి.",
      },
      bridge: {
        te: ["నా application స్టేటస్", "కొంచెం చూస్తారా?"],
        en: [
          { text: "Would you mind", role: "action" },
          { text: "checking", role: "action" },
          { text: "the status", role: "what" },
          { text: "of my application?", role: "what" },
        ],
      },
      examples: [
        { en: "Would you mind checking the status of my application?", te: "నా application స్టేటస్ ఏంటో కొంచెం చూస్తారా?" },
        { en: "Would you mind speaking a little slowly?", te: "కొంచెం నెమ్మదిగా మాట్లాడతారా?" },
        { en: "Would you mind spelling that, please?", te: "అది కొంచెం స్పెల్లింగ్ చెప్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "On a call to an office", te: "ఆఫీసుకి ఫోన్ చేసినప్పుడు" },
      items: [
        {
          form: "Would you mind checking …?",
          useFor: { en: "Ask the clerk to look at your file.", te: "మీ ఫైల్ చూడమని క్లర్క్‌ని అడగడానికి." },
          example: { en: "Would you mind checking the status of my application?", te: "నా application స్టేటస్ ఏంటో కొంచెం చూస్తారా?" },
        },
        {
          form: "Would you mind spelling …?",
          useFor: { en: "Get a name or a word right.", te: "పేరు గానీ పదం గానీ సరిగ్గా రాసుకోవడానికి." },
          example: { en: "Would you mind spelling that, please?", te: "అది కొంచెం స్పెల్లింగ్ చెప్తారా?" },
        },
        {
          form: "Would you mind giving me …?",
          useFor: { en: "Ask for a number or a detail.", te: "ఏదైనా నంబర్ గానీ వివరం గానీ అడగడానికి." },
          example: { en: "Would you mind giving me the extension number?", te: "extension నంబర్ కొంచెం ఇస్తారా?" },
        },
        {
          form: "Not at all.",
          useFor: { en: "Say yes when someone asks you Would you mind …?", te: "మిమ్మల్ని Would you mind …? అని అడిగితే సరే అనడానికి." },
          example: { en: "Not at all. Please give me your application number.", te: "అభ్యంతరం ఏమీ లేదు. మీ application నంబర్ చెప్పండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am wanting a new connection.",
      right: "I'd like a new connection, please.",
      why: {
        en: "Want is a wish, not an action, so it never takes -ing. I'd like sounds more polite.",
        te: "want ఒక కోరిక, జరుగుతున్న పని కాదు, అందుకే -ing రాదు. I'd like అంటే ఇంకా మర్యాదగా ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Would you mind to check my application?",
      right: "Would you mind checking my application?",
      why: {
        en: "After Would you mind, the verb takes -ing, never to and the plain verb.",
        te: "Would you mind తర్వాత verb కి -ing వస్తుంది; to check అనకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "On the phone, ask the clerk politely to check your application.",
        te: "ఫోన్‌లో, మీ application చూడమని క్లర్క్‌ని మర్యాదగా అడగండి.",
      },
      options: [
        "Would you mind checking my application?",
        "You would mind checking my application?",
        "Would you mind check my application?",
      ],
      answer: 0,
      why: {
        en: "In a question, would comes before you, and the verb after mind takes -ing.",
        te: "ప్రశ్నలో would, you కంటే ముందు వస్తుంది; mind తర్వాత verb కి -ing.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Would you mind ___ that, please?",
      te: "అది కొంచెం స్పెల్లింగ్ చెప్తారా?",
      options: ["spelling", "to spell", "spell"],
      answer: 0,
      why: {
        en: "After Would you mind, the action takes -ing, so no to and no plain verb.",
        te: "Would you mind తర్వాత పనికి -ing వస్తుంది; to గానీ, అలాగే verb గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "The clerk asks: Would you mind holding for a minute? You are happy to wait. What do you say?",
        te: "Would you mind holding for a minute? అని క్లర్క్ అడిగారు. మీరు ఆగడానికి సిద్ధమే. ఏమంటారు?",
      },
      options: ["No, not at all.", "Yes, I mind.", "Yes, I am minding."],
      answer: 0,
      why: {
        en: "Mind means you don't like it, so No means you are happy to wait. Telugu సరే makes people say Yes.",
        te: "mind అంటే 'ఇష్టం లేకపోవడం', అందుకే No అంటే ఆగడానికి సిద్ధం అని. తెలుగు 'సరే' వల్ల Yes అనేస్తాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I applied for a new connection in 5 March.",
      wrongIndex: 6,
      fix: "I applied for a new connection on 5 March.",
      why: {
        en: "A date takes on, just like a day of the week; in is for a month alone.",
        te: "తారీఖుకి on వస్తుంది, వారం పేరులాగే; in నెల పేరు ఒక్కటే ఉన్నప్పుడు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "On the phone, the clerk speaks very fast. Ask her politely to speak slowly.",
        te: "ఫోన్‌లో క్లర్క్ గారు చాలా వేగంగా మాట్లాడుతున్నారు. నెమ్మదిగా మాట్లాడమని ఆవిడని మర్యాదగా అడగండి.",
      },
      expected: ["Would you mind speaking a little slowly?", "Would you mind speaking slowly, please?", "Could you speak a little slowly, please?"],
      options: ["Would you mind speaking a little slowly?", "Would you mind to speak a little slowly?", "Speak slowly. I can't follow you."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "The clerk asks when you applied. Say you applied ten days ago.",
        te: "మీరు ఎప్పుడు apply చేశారని క్లర్క్ అడిగారు. పది రోజుల క్రితం apply చేశానని చెప్పండి.",
      },
      expected: ["I applied ten days ago.", "Ten days ago.", "I applied about ten days ago."],
      options: ["I applied ten days ago.", "I applied ten day ago.", "I applied before ten days."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new connection", te: "కొత్త కరెంట్ కనెక్షన్" },
    scene: {
      en: "You moved to a new house and applied for an electricity connection. You call the electricity office. Kavitha answers.",
      te: "మీరు కొత్త ఇంటికి మారి, కరెంట్ కనెక్షన్‌కి apply చేశారు. ఎలక్ట్రిసిటీ ఆఫీసుకి ఫోన్ చేశారు. కవిత గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Kavitha (at the electricity office)", te: "కవిత (ఎలక్ట్రిసిటీ ఆఫీసులో)" },
    skills: [
      { id: "ask", label: { en: "Would you mind …?", te: "Would you mind …? తో అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, electricity office. How may I help you?",
        te: "నమస్కారం, ఎలక్ట్రిసిటీ ఆఫీస్. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Greet her, and say you applied for a new connection two weeks ago.", te: "నమస్కారం చెప్పి, రెండు వారాల క్రితం కొత్త కనెక్షన్‌కి apply చేశానని చెప్పండి." },
        replies: [
          { say: "Good morning. I applied for a new connection two weeks ago.", good: true, skill: "polite" },
          { say: "Good morning. I applied for new connection two weeks ago.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "Would you mind giving me your application number?",
        te: "మీ application నంబర్ కొంచెం చెప్తారా?",
        hint: { en: "Say yes politely, and read the number on your slip: 4 0 9 1.", te: "మర్యాదగా సరే అని, మీ స్లిప్ మీద ఉన్న నంబర్ చదవండి: 4 0 9 1." },
        replies: [
          { say: "Not at all. It's four zero nine one.", good: true, skill: "ask" },
          { say: "Yes, I mind. It's four zero nine one.", good: false, skill: "ask", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Thank you. The inspection is done, but it is not sanctioned yet.",
        te: "థాంక్స్. తనిఖీ అయిపోయింది, కానీ ఇంకా మంజూరు కాలేదు.",
        hint: { en: "Ask her very politely to check when the lineman can come.", te: "లైన్‌మన్ ఎప్పుడు రాగలరో చూడమని చాలా మర్యాదగా అడగండి." },
        replies: [
          { say: "Would you mind checking when the lineman can come?", good: true, skill: "ask" },
          {
            say: "Two weeks already! Why are you people so slow?",
            good: false,
            skill: "polite",
            react: { en: "Please don't shout. I'm trying to help you.", te: "అరవకండి అండీ. నేను మీకు సహాయం చేయడానికే ప్రయత్నిస్తున్నాను." },
          },
        ],
      },
      {
        partner: "He will come on Friday. Call me during office hours if he doesn't.",
        te: "శుక్రవారం వస్తారు. రాకపోతే ఆఫీసు పనివేళల్లో నాకు ఫోన్ చేయండి.",
        hint: { en: "Ask for her extension number, and thank her.", te: "ఆవిడ extension నంబర్ అడిగి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Would you mind giving me your extension number? Thank you.", good: true, skill: "ask" },
          { say: "Would you mind to give me your extension number? Thank you.", good: false, skill: "ask" },
        ],
      },
    ],
  },
};
