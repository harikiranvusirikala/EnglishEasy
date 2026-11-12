import type { Lesson } from "../../types";

/** Week 68, Day 4 (CURRICULUM §5): ought to, should and must — how strong the advice is. You ought to get your eyes checked. */
export const day: Lesson = {
  id: "you-ought-to-health-advice",
  kind: "lesson",
  title: { en: "You Ought To", te: "చేయడం మంచిది" },
  subtitle: "ought to, should, must",
  summary: {
    en: "Learn to give and understand health advice: You ought to get your eyes checked every year. You must take your tablets on time.",
    te: "ఆరోగ్య సలహా ఇవ్వడం, అర్థం చేసుకోవడం నేర్చుకుందాం: You ought to get your eyes checked every year. You must take your tablets on time.",
  },
  seo: {
    title: "Ought To, Should and Must in English for Telugu Speakers",
    description:
      "Say You ought to get your eyes checked and You must take your tablets on time. Simple lessons for Telugu speakers on giving advice.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "ought to get", role: "action" },
    { text: "your eyes checked", role: "what" },
    { text: "every year", role: "when" },
  ],
  core: [
    { en: "You ought to check your BP regularly.", te: "మీరు BP రెగ్యులర్‌గా చెక్ చేయించుకోవడం మంచిది.", extra: ["checking"] },
    { en: "You ought to get your eyes checked every year.", te: "ప్రతి సంవత్సరం కళ్ళు చెక్ చేయించుకోవడం మంచిది.", extra: ["getting"] },
    { en: "You must take your tablets on time.", te: "మీరు టాబ్లెట్లు టైమ్‌కి తప్పకుండా వేసుకోవాలి.", extra: ["taking"] },
    { en: "You should eat more fruit.", te: "మీరు పండ్లు ఇంకా ఎక్కువగా తినాలి.", extra: ["fruits"] },
    { en: "People over forty ought to get a check-up every year.", te: "నలభై ఏళ్ళు దాటినవాళ్ళు ప్రతి సంవత్సరం check-up చేయించుకోవడం మంచిది.", extra: ["peoples"] },
    { en: "Should I get my sugar checked too?", te: "నా షుగర్ కూడా చెక్ చేయించుకోవాలా?", extra: ["Do"] },
    { en: "You ought to drink more water in summer.", te: "ఎండాకాలంలో నీళ్ళు ఇంకా ఎక్కువగా తాగడం మంచిది.", extra: ["drinking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one check-up you need. Say it aloud: I ought to get my … checked.",
    te: "మీకు కావాల్సిన ఒక check-up గురించి ఆలోచించండి. గట్టిగా చెప్పండి: I ought to get my … checked.",
  },
  words: [
    { en: "ought to", te: "… చేయడం మంచిది" },
    { en: "get checked", te: "చెక్ చేయించుకోవడం" },
    { en: "eyesight", te: "కంటిచూపు" },
    { en: "health camp", te: "హెల్త్ క్యాంప్, ఉచిత వైద్య శిబిరం" },
    { en: "screening", te: "పరీక్ష చేసి చూడటం, స్క్రీనింగ్" },
  ],
  grammar: ["should-must-have-to"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "ought to: good advice", te: "ought to: మంచి సలహా" },
      body: {
        en: "Ought to means it is a good idea, like should. Must is stronger: it is very important. After all three, use the plain verb.",
        te: "ought to అంటే చేయడం మంచిది (should లాగే). must ఇంకా గట్టిగా: తప్పకుండా చేయాలి. మూడింటి తర్వాత verb మారదు.",
      },
      bridge: {
        te: ["మీరు", "ప్రతి సంవత్సరం", "కళ్ళు చెక్ చేయించుకోవడం", "మంచిది"],
        en: [
          { text: "You", role: "who" },
          { text: "ought to get", role: "action" },
          { text: "your eyes checked", role: "what" },
          { text: "every year", role: "when" },
        ],
      },
      examples: [
        { en: "You ought to check your BP regularly.", te: "మీరు BP రెగ్యులర్‌గా చెక్ చేయించుకోవడం మంచిది." },
        { en: "You ought to get your eyes checked every year.", te: "ప్రతి సంవత్సరం కళ్ళు చెక్ చేయించుకోవడం మంచిది." },
        { en: "You must take your tablets on time.", te: "మీరు టాబ్లెట్లు టైమ్‌కి తప్పకుండా వేసుకోవాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How strong is the advice?", te: "సలహా ఎంత గట్టిగా?" },
      items: [
        {
          form: "should",
          useFor: { en: "Friendly advice.", te: "స్నేహంగా ఇచ్చే సలహా." },
          example: { en: "You should go to bed early tonight.", te: "ఈ రాత్రి త్వరగా పడుకుంటే మంచిది." },
        },
        {
          form: "ought to",
          useFor: { en: "Good advice, a little more serious.", te: "మంచి సలహా, కొంచెం గట్టిగా." },
          example: { en: "You ought to check your BP regularly.", te: "మీరు BP రెగ్యులర్‌గా చెక్ చేయించుకోవడం మంచిది." },
        },
        {
          form: "must",
          useFor: { en: "Very important, like a doctor's rule.", te: "చాలా ముఖ్యం, డాక్టర్ పెట్టిన నియమం లాగా." },
          example: { en: "You must finish all the tablets the doctor gave you.", te: "డాక్టర్ ఇచ్చిన టాబ్లెట్లన్నీ తప్పకుండా పూర్తి చేయాలి." },
        },
        {
          form: "mustn't",
          useFor: { en: "Don't do it at all.", te: "అస్సలు చేయకూడదు." },
          example: { en: "You mustn't drive without your glasses.", te: "కళ్ళద్దాలు లేకుండా అస్సలు డ్రైవ్ చేయకూడదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Take rest for two days.",
      right: "Get some rest for two days.",
      why: {
        en: "English says rest or get some rest; take rest is heard only in Indian English.",
        te: "ఇంగ్లీష్‌లో rest లేదా get some rest అంటారు; take rest అనేది మన దగ్గర మాత్రమే వినిపిస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You must to take your tablets on time.",
      right: "You must take your tablets on time.",
      why: {
        en: "Must never takes to after it, but ought always does.",
        te: "must తర్వాత ఎప్పుడూ to రాదు; ought తర్వాత మాత్రం to తప్పకుండా వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend tells you what her doctor said. What does she say?",
        te: "మీ స్నేహితురాలు వాళ్ళ డాక్టర్ ఏం చెప్పారో మీకు చెప్తున్నారు. ఏమంటారు?",
      },
      options: ["The doctor says I ought to walk more.", "The doctor say I ought to walk more.", "The doctor says I ought walk more."],
      answer: 0,
      why: {
        en: "One doctor takes says with s, and ought always needs to after it.",
        te: "ఒక్క డాక్టర్ కాబట్టి says (s తో); ought తర్వాత to ఎప్పుడూ కావాలి.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Free Health Camp",
      lines: [
        "Green Park Colony Welfare Association",
        "Free health camp this Sunday, 9 am to 1 pm.",
        "Place: the community hall, near the water tank.",
        "Free BP, sugar and eye screening for everyone.",
        "People over forty ought to get checked once a year.",
        "For the sugar test, please come on an empty stomach.",
        "Bring your old reports and your list of tablets.",
        "Doctors from the government hospital will be there.",
      ],
      questions: [
        {
          prompt: { en: "Where is the health camp?", te: "హెల్త్ క్యాంప్ ఎక్కడ?" },
          options: ["In the community hall", "At the government hospital", "Near the bus stand"],
          answer: 0,
          why: {
            en: "The third line gives the place, and it is near the water tank.",
            te: "మూడో లైన్‌లో చోటు ఉంది; అది వాటర్ ట్యాంక్ దగ్గర.",
          },
        },
        {
          prompt: { en: "What should you do before the sugar test?", te: "షుగర్ టెస్ట్ ముందు ఏం చేయాలి?" },
          options: ["Come without eating", "Drink a lot of tea", "Walk for an hour"],
          answer: 0,
          why: {
            en: "An empty stomach means you eat nothing before the test.",
            te: "empty stomach అంటే టెస్ట్ ముందు ఏమీ తినకూడదు.",
          },
        },
        {
          prompt: { en: "What should you bring?", te: "ఏం తీసుకెళ్ళాలి?" },
          options: ["Old reports and a list of tablets", "An Aadhaar card and money", "Nothing at all"],
          answer: 0,
          why: {
            en: "The seventh line asks for two things from your home.",
            te: "ఏడో లైన్‌లో ఇంటి నుంచి తెచ్చుకోవాల్సిన రెండు వస్తువులు ఉన్నాయి.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      sentence: "You ___ take these tablets on time. It's very important.",
      te: "ఈ టాబ్లెట్లు టైమ్‌కి తప్పకుండా వేసుకోవాలి. ఇది చాలా ముఖ్యం.",
      options: ["must", "ought", "should to"],
      answer: 0,
      why: {
        en: "A very important rule takes must; ought needs to, and should never takes to.",
        te: "చాలా ముఖ్యమైన నియమానికి must; ought కి to కావాలి, should కి to రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Should I to get my sugar checked too?",
      wrongIndex: 2,
      fix: "Should I get my sugar checked too?",
      why: {
        en: "Should never takes to after it, in questions too.",
        te: "should తర్వాత to రాదు; ప్రశ్నలో కూడా రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your neighbour has a bad cold. Advise him kindly to rest at home.",
        te: "పక్కింటి ఆయనకి బాగా జలుబు చేసింది. ఇంట్లో విశ్రాంతి తీసుకోమని మర్యాదగా సలహా ఇవ్వండి.",
      },
      expected: ["You ought to get some rest at home.", "You should get some rest.", "You ought to rest at home."],
      options: ["You ought to get some rest at home.", "You ought to take rest at home.", "You ought rest at home."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the doctor if you should get your eyes checked.",
        te: "కళ్ళు చెక్ చేయించుకోవాలా అని డాక్టర్‌ని అడగండి.",
      },
      expected: ["Should I get my eyes checked?", "Do I need an eye check-up?", "Should I get my eyesight checked?"],
      options: ["Should I get my eyes checked?", "I should get my eyes checked?", "Should I to get my eyes checked?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Time for a check-up", te: "check-up టైమ్" },
    scene: {
      en: "Your friend Usha visits you. She notices you holding the newspaper far from your eyes.",
      te: "మీ స్నేహితురాలు ఉష గారు మీ ఇంటికి వచ్చారు. మీరు పేపర్‌ని కళ్ళకి దూరంగా పట్టుకుని చదవడం ఆవిడ గమనించారు.",
    },
    partner: { en: "Usha (your friend)", te: "ఉష (మీ స్నేహితురాలు)" },
    skills: [
      { id: "advice", label: { en: "Talking about advice", te: "సలహా గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "You look tired these days. Is everything okay?",
        te: "ఈ మధ్య మీరు అలసిపోయినట్టు కనిపిస్తున్నారు. అంతా బాగానే ఉందా?",
        hint: { en: "Say you are fine, but reading gives you headaches.", te: "బాగానే ఉన్నానని, కానీ చదివితే తలనొప్పి వస్తోందని చెప్పండి." },
        replies: [
          { say: "I'm fine, thanks. But I get headaches when I read.", good: true, skill: "advice" },
          { say: "I'm fine, thanks. But I get headache when I read.", good: false, skill: "advice", fixIt: "article" },
        ],
      },
      {
        partner: "Then you ought to get your eyesight checked. When did you last go?",
        te: "అయితే కంటిచూపు చెక్ చేయించుకోవడం మంచిది. చివరిసారి ఎప్పుడు వెళ్ళారు?",
        hint: { en: "Say it has been two years since your last visit.", te: "చివరిసారి వెళ్ళి రెండేళ్ళయిందని చెప్పండి." },
        replies: [
          { say: "I haven't been for two years.", good: true, skill: "advice" },
          { say: "I didn't go since two years.", good: false, skill: "advice", fixIt: "duration" },
        ],
      },
      {
        partner: "Two years is too long! There's a free health camp on Sunday.",
        te: "రెండేళ్ళు అంటే మరీ ఎక్కువ! ఆదివారం ఒక ఉచిత హెల్త్ క్యాంప్ ఉంది.",
        hint: { en: "Sound pleased, and ask her the starting time.", te: "సంతోషంగా, అది ఎన్ని గంటలకి మొదలవుతుందో అడగండి." },
        replies: [
          { say: "Oh, good! What time does it start?", good: true, skill: "advice" },
          { say: "Oh, good! What time it starts?", good: false, skill: "advice", fixIt: "question" },
          {
            say: "Free? Free camps are useless.",
            good: false,
            skill: "polite",
            react: { en: "Not this one. Doctors are coming from the government hospital.", te: "ఇది అలాంటిది కాదు. ప్రభుత్వ ఆసుపత్రి నుంచి డాక్టర్లు వస్తున్నారు." },
          },
        ],
      },
      {
        partner: "At nine. Shall we go together?",
        te: "తొమ్మిదింటికి. కలిసి వెళ్దామా?",
        hint: { en: "Say yes, and thank her for the advice.", te: "సరే అని, సలహాకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, let's go together. Thank you for the advice.", good: true, skill: "polite" },
          { say: "Yes, let's go together. Thank you for the advices.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
