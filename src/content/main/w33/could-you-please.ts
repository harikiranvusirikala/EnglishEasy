import type { Lesson } from "../../types";

/** Week 33, Day 1 (CURRICULUM §4): Could you please …? / Would you …? — asking a neighbour for a bigger favour. */
export const day: Lesson = {
  id: "could-you-please",
  kind: "lesson",
  title: { en: "Could You Please …?", te: "కొంచెం … చేస్తారా?" },
  subtitle: "Could you please …? / Would you …?",
  summary: {
    en: "Learn to ask a neighbour for help politely: Could you please water my plants this week?",
    te: "పక్కింటివారిని మర్యాదగా సహాయం అడగడం నేర్చుకుందాం: Could you please water my plants this week?",
  },
  seo: {
    title: "Polite Requests in English for Telugu Speakers",
    description:
      "Ask Could you please water my plants? and Would you collect my newspaper? Simple lessons for Telugu speakers on asking neighbours for help.",
  },
  pattern: [
    { text: "Could", role: "action" },
    { text: "you", role: "who" },
    { text: "please water", role: "action" },
    { text: "my plants", role: "what" },
    { text: "this week?", role: "when" },
  ],
  core: [
    { en: "Could you do me a small favour?", te: "నాకు ఒక చిన్న సహాయం చేస్తారా?", extra: ["make"] },
    { en: "Could you please water my plants this week?", te: "ఈ వారం కొంచెం మా మొక్కలకి నీళ్ళు పోస్తారా?", extra: ["watering"] },
    { en: "Could you keep an eye on my house?", te: "మా ఇంటిని కొంచెం ఒక కంట కనిపెడతారా?", extra: ["at"] },
    { en: "Would you collect my newspaper, please?", te: "మా పేపర్ కొంచెం తీసి ఉంచుతారా?", extra: ["collecting"] },
    { en: "I am going to Tirupati for three days.", te: "నేను మూడు రోజులు తిరుపతి వెళ్తున్నాను.", extra: ["go"] },
    { en: "Of course. I'll look after everything.", te: "తప్పకుండా. అన్నీ నేను చూసుకుంటాను.", extra: ["looking"] },
    { en: "Here is the spare key. Thank you so much.", te: "ఇదిగోండి ఇంకో తాళం చెవి. చాలా థాంక్స్.", extra: ["Thanks"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone for a small favour today with Could you please …?",
    te: "ఈ రోజు Could you please …? తో ఎవరినైనా ఒక చిన్న సహాయం అడగండి.",
  },
  words: [
    { en: "favour", te: "సహాయం, ఉపకారం" },
    { en: "keep an eye on", te: "ఒక కంట కనిపెట్టడం" },
    { en: "look after", te: "జాగ్రత్తగా చూసుకోవడం" },
    { en: "spare key", te: "ఇంకో తాళం చెవి" },
    { en: "request", te: "మర్యాదగా అడగడం, విన్నపం" },
  ],
  grammar: ["can-could", "politeness-softening"],
  topics: ["neighbours", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking a bigger favour", te: "కొంచెం పెద్ద సహాయం అడగడం" },
      body: {
        en: "You know Can you …? already. For a bigger favour, a request with Could you please …? or Would you …? sounds softer. After could or would, the verb stays plain: water, keep, collect.",
        te: "పెద్ద సహాయం అడిగేటప్పుడు Can you …? కంటే Could you please …? లేదా Would you …? మృదువుగా ఉంటుంది. could, would తర్వాత verb మారదు: water, keep, collect.",
      },
      bridge: {
        te: ["ఈ వారం", "మా మొక్కలకి నీళ్ళు", "కొంచెం పోస్తారా?"],
        en: [
          { text: "Could", role: "action" },
          { text: "you", role: "who" },
          { text: "please water", role: "action" },
          { text: "my plants", role: "what" },
          { text: "this week?", role: "when" },
        ],
      },
      examples: [
        { en: "Could you please water my plants this week?", te: "ఈ వారం కొంచెం మా మొక్కలకి నీళ్ళు పోస్తారా?" },
        { en: "Could you keep an eye on my house?", te: "మా ఇంటిని కొంచెం ఒక కంట కనిపెడతారా?" },
        { en: "Would you collect my newspaper, please?", te: "మా పేపర్ కొంచెం తీసి ఉంచుతారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Can, could or would?", te: "can, could, would: ఏది ఎప్పుడు?" },
      items: [
        {
          form: "Can you …?",
          useFor: { en: "A small, quick thing, with people you know well.", te: "చిన్న, త్వరగా అయ్యే పని; బాగా తెలిసినవాళ్ళతో." },
          example: { en: "Can you hold this for a minute?", te: "ఒక్క నిమిషం ఇది పట్టుకుంటారా?" },
        },
        {
          form: "Could you please …?",
          useFor: { en: "A bigger favour, or someone you don't know well.", te: "కొంచెం పెద్ద సహాయం, లేదా అంతగా పరిచయం లేనివాళ్ళని అడగడానికి." },
          example: { en: "Could you please water my plants this week?", te: "ఈ వారం కొంచెం మా మొక్కలకి నీళ్ళు పోస్తారా?" },
        },
        {
          form: "Would you …?",
          useFor: { en: "Asking kindly if someone is willing.", te: "వీలుంటే చేస్తారా అని మర్యాదగా అడగడానికి." },
          example: { en: "Would you collect my newspaper, please?", te: "మా పేపర్ కొంచెం తీసి ఉంచుతారా?" },
        },
        {
          form: "Could you do me a favour?",
          useFor: { en: "Starting, before you say what you need.", te: "ఏం కావాలో చెప్పే ముందు, మొదలుపెట్టడానికి." },
          example: { en: "Could you do me a small favour?", te: "నాకు ఒక చిన్న సహాయం చేస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Kindly water my plants.",
      right: "Could you please water my plants?",
      why: {
        en: "Kindly sounds like an office letter and gives an order; a question with could is warmer.",
        te: "Kindly అనేది ఆఫీసు ఉత్తరం మాట, ఆర్డర్ లా ఉంటుంది; could తో ప్రశ్నగా అడిగితే ఆప్యాయంగా ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "You water my plants?",
      right: "Could you water my plants?",
      why: {
        en: "Telugu asks with the voice alone, but an English request starts with could or would.",
        te: "తెలుగులో స్వరంతోనే అడుగుతాం; ఇంగ్లీష్‌లో అడిగేటప్పుడు ముందు could లేదా would రావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "You are going out of town. Ask your neighbour to water your plants.",
        te: "మీరు ఊరికి వెళ్తున్నారు. మీ మొక్కలకి నీళ్ళు పోయమని పక్కింటివారిని అడగండి.",
      },
      options: ["Could you please water my plants?", "Could you please to water my plants?", "You must water my plants, okay?"],
      answer: 0,
      why: {
        en: "After could, the verb comes with no to; must sounds like an order.",
        te: "could తర్వాత to లేకుండా verb వస్తుంది; must అంటే ఆర్డర్ లా ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Could you keep an eye ___ my house?",
      te: "మా ఇంటిని కొంచెం ఒక కంట కనిపెడతారా?",
      options: ["on", "at", "in"],
      answer: 0,
      why: {
        en: "Keep an eye on is a fixed phrase, and it always takes on.",
        te: "keep an eye on అనేది మారని మాట; ఎప్పుడూ on తోనే వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour says: Of course. I'll look after everything. What does she mean?",
        te: "పక్కింటావిడ Of course. I'll look after everything అన్నారు. అర్థం ఏంటి?",
      },
      options: ["She will take care of things for you.", "She wants to look at your things.", "She is busy and can't help."],
      answer: 0,
      why: {
        en: "Look after means take care of, and of course means yes, gladly.",
        te: "look after అంటే జాగ్రత్తగా చూసుకోవడం; of course అంటే తప్పకుండా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Could you please water to my plants?",
      wrongIndex: 4,
      fix: "Could you please water my plants?",
      why: {
        en: "Telugu says మొక్కలకి, but in English water takes the plants with no to.",
        te: "తెలుగులో 'మొక్కలకి' అంటాం, కానీ ఇంగ్లీష్‌లో water తర్వాత to లేకుండా నేరుగా plants వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Ask your neighbour Jyothi to collect your newspaper this week.",
        te: "ఈ వారం మీ పేపర్ తీసి ఉంచమని పక్కింటి జ్యోతి గారిని అడగండి.",
      },
      expected: [
        "Could you please collect my newspaper this week?",
        "Would you collect my newspaper, please?",
        "Could you collect my newspaper, please?",
      ],
      options: ["Could you please collect my newspaper this week?", "Kindly collect my newspaper this week.", "You collect my newspaper this week?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Before you ask for help, start politely.",
        te: "సహాయం అడిగే ముందు మర్యాదగా మొదలుపెట్టండి.",
      },
      expected: ["Could you do me a small favour?", "Could you do me a favour?"],
      options: ["Could you do me a small favour?", "Could you make me a small favour?", "Do one help for me."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Before the trip", te: "ఊరు వెళ్ళే ముందు" },
    scene: {
      en: "You are going to Tirupati tomorrow. You meet Sarala, your neighbour, at her gate.",
      te: "మీరు రేపు తిరుపతి వెళ్తున్నారు. పక్కింటి సరళ గారు వాళ్ళ గేటు దగ్గర కనిపించారు.",
    },
    partner: { en: "Sarala (neighbour)", te: "సరళ (పక్కింటావిడ)" },
    skills: [
      { id: "ask", label: { en: "Polite requests", te: "మర్యాదగా అడగడం" } },
      { id: "plans", label: { en: "Saying your plans", te: "మీ ప్లాన్ చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Good morning! You look busy. Going somewhere?",
        te: "నమస్కారం! హడావిడిగా ఉన్నారు. ఎక్కడికైనా వెళ్తున్నారా?",
        hint: { en: "Say where you are going, and for how long.", te: "ఎక్కడికి, ఎన్ని రోజులు వెళ్తున్నారో చెప్పండి." },
        replies: [
          { say: "Yes, I'm going to Tirupati for three days.", good: true, skill: "plans" },
          { say: "Yes, I am out of station for three days.", good: false, skill: "plans", fixIt: "indian-english" },
          { say: "Yes, I going to Tirupati for three days.", good: false, skill: "plans", fixIt: "be" },
        ],
      },
      {
        partner: "Oh, nice! Do you need anything?",
        te: "ఓ, బాగుంది! మీకు ఏమైనా కావాలా?",
        hint: { en: "Ask her politely to water your plants.", te: "మీ మొక్కలకి నీళ్ళు పోయమని ఆవిడని మర్యాదగా అడగండి." },
        replies: [
          { say: "Could you please water my plants?", good: true, skill: "ask" },
          { say: "Would you water my plants, please?", good: true, skill: "ask" },
          {
            say: "Water my plants every day. Don't forget.",
            good: false,
            skill: "ask",
            react: { en: "Okay, okay! But please ask a little more nicely.", te: "సరే, సరే! కానీ కొంచెం మర్యాదగా అడగండి." },
          },
        ],
      },
      {
        partner: "Sure, I'll do it. Anything else?",
        te: "సరే, పోస్తాను. ఇంకేమైనా?",
        hint: { en: "Ask her to watch your house too.", te: "మీ ఇంటిని కూడా కనిపెట్టి చూడమని అడగండి." },
        replies: [
          { say: "Could you keep an eye on my house too?", good: true, skill: "ask" },
          { say: "Could you keep an eye at my house too?", good: false, skill: "ask", fixIt: "preposition" },
        ],
      },
      {
        partner: "No problem. Have a good trip!",
        te: "పర్లేదు. ప్రయాణం బాగా జరగాలి!",
        hint: { en: "Give her the spare key, and thank her warmly.", te: "ఇంకో తాళం చెవి ఇచ్చి, మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Here is the spare key. That's very kind of you.", good: true },
          { say: "Here is spare key. Thank you.", good: false, fixIt: "article" },
        ],
      },
    ],
  },
};
