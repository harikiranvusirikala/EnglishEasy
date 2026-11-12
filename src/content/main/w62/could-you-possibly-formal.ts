import type { Lesson } from "../../types";

/** Week 62, Day 3 (CURRICULUM §5): Could you possibly …? and I'd be grateful if you could … — asking an office for a copy of a document. */
export const day: Lesson = {
  id: "could-you-possibly-formal",
  kind: "lesson",
  title: { en: "Could You Possibly …?", te: "వీలైతే … చేస్తారా?" },
  subtitle: "Could you possibly …? I'd be grateful if you could …",
  summary: {
    en: "Learn to ask an office for something extra, very politely: Could you possibly send it by email?",
    te: "ఆఫీసువాళ్ళని కొంచెం ఎక్కువ సహాయం చాలా మర్యాదగా అడగడం నేర్చుకుందాం: Could you possibly send it by email?",
  },
  seo: {
    title: "Could You Possibly in English for Telugu Speakers",
    description:
      "Say Could you possibly send it by email? and I'd be grateful if you could call me back. Formal requests in English for Telugu speakers.",
  },
  pattern: [
    { text: "Could you possibly", role: "action" },
    { text: "send", role: "action" },
    { text: "it", role: "what" },
    { text: "by email?", role: "what" },
  ],
  core: [
    { en: "Could you possibly send it by email?", te: "వీలైతే దాన్ని email లో పంపిస్తారా?", extra: ["sending"] },
    { en: "I'd be grateful if you could call me back.", te: "మీరు నాకు మళ్ళీ ఫోన్ చేస్తే చాలా సంతోషిస్తాను.", extra: ["kindly"] },
    { en: "Could you possibly give me a copy of the receipt?", te: "వీలైతే ఆ రసీదు కాపీ ఒకటి ఇస్తారా?", extra: ["giving"] },
    { en: "Could you possibly keep it ready by Friday?", te: "వీలైతే శుక్రవారానికల్లా దాన్ని రెడీగా ఉంచుతారా?", extra: ["on"] },
    { en: "I'd be grateful if you could post it to my address.", te: "దాన్ని నా అడ్రస్‌కి పోస్ట్ చేస్తే చాలా సంతోషిస్తాను.", extra: ["posting"] },
    { en: "I lost the original, so I need a duplicate copy.", te: "అసలుది పోయింది, అందుకే నాకు ఒక duplicate కాపీ కావాలి.", extra: ["lose"] },
    { en: "Sorry, the old records are kept in another office.", te: "సారీ, పాత రికార్డులు వేరే ఆఫీసులో ఉంటాయి.", extra: ["keep"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one paper you may need a copy of. Say aloud how you would ask for it: Could you possibly …?",
    te: "మీకు కాపీ కావాల్సిన ఒక కాగితం గురించి ఆలోచించండి. దాన్ని ఎలా అడుగుతారో గట్టిగా చెప్పి చూడండి: Could you possibly …?",
  },
  words: [
    { en: "possibly", te: "వీలైతే" },
    { en: "copy", te: "కాపీ, నకలు" },
    { en: "duplicate", te: "duplicate, పోయిన దానికి బదులు ఇచ్చే కాపీ" },
    { en: "scanned copy", te: "scan చేసిన కాపీ" },
    { en: "records", te: "ఆఫీసు రికార్డులు, పాత కాగితాలు" },
  ],
  grammar: ["can-could", "politeness-softening", "would-like"],
  topics: ["offices", "phone", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Very polite requests", te: "చాలా మర్యాదగా అడగడం" },
      body: {
        en: "Could you possibly …? asks very politely for something extra or a little difficult. I'd be grateful if you could … is even more formal. After both, the verb stays plain.",
        te: "Could you possibly …? అంటే 'వీలైతే … చేస్తారా?' అని, కొంచెం కష్టమైన పనిని చాలా మర్యాదగా అడగడం. I'd be grateful if you could … ఇంకా formal; రెండింటి తర్వాత verb అలాగే ఉంటుంది.",
      },
      bridge: {
        te: ["వీలైతే", "దాన్ని email లో", "పంపిస్తారా?"],
        en: [
          { text: "Could you possibly", role: "action" },
          { text: "send", role: "action" },
          { text: "it", role: "what" },
          { text: "by email?", role: "what" },
        ],
      },
      examples: [
        { en: "Could you possibly send it by email?", te: "వీలైతే దాన్ని email లో పంపిస్తారా?" },
        { en: "I'd be grateful if you could call me back.", te: "మీరు నాకు మళ్ళీ ఫోన్ చేస్తే చాలా సంతోషిస్తాను." },
        { en: "Could you possibly give me a copy of the receipt?", te: "వీలైతే ఆ రసీదు కాపీ ఒకటి ఇస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How polite?", te: "ఎంత మర్యాదగా?" },
      items: [
        {
          form: "Could you …?",
          useFor: { en: "A normal polite request, to anyone.", te: "ఎవరినైనా మామూలుగా మర్యాదగా అడగడానికి." },
          example: { en: "Could you speak a little louder, please?", te: "కొంచెం గట్టిగా మాట్లాడతారా?" },
        },
        {
          form: "Could you possibly …?",
          useFor: { en: "Ask for something extra or difficult.", te: "కొంచెం ఎక్కువ, లేదా కష్టమైన పని అడగడానికి." },
          example: { en: "Could you possibly keep it ready by Friday?", te: "వీలైతే శుక్రవారానికల్లా దాన్ని రెడీగా ఉంచుతారా?" },
        },
        {
          form: "I'd be grateful if you could …",
          useFor: { en: "Very formal: to an office or an officer.", te: "చాలా formal: ఆఫీసుకి, ఆఫీసర్‌కి." },
          example: { en: "I'd be grateful if you could post it to my address.", te: "దాన్ని నా అడ్రస్‌కి పోస్ట్ చేస్తే చాలా సంతోషిస్తాను." },
        },
        {
          form: "Would you mind + -ing?",
          useFor: { en: "Also very polite, but the verb takes -ing.", te: "ఇది కూడా చాలా మర్యాదే, కానీ verb కి -ing వస్తుంది." },
          example: { en: "Would you mind sending it by post?", te: "దాన్ని కొంచెం పోస్ట్‌లో పంపిస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please do the needful.",
      right: "Could you possibly send me a copy, please?",
      why: {
        en: "Do the needful is old office English, and people outside India find it strange. Say clearly what you need.",
        te: "do the needful పాత ఆఫీసు ఇంగ్లీష్; బయటివాళ్ళకి వింతగా ఉంటుంది. మీకు ఏం కావాలో స్పష్టంగా చెప్పండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Could you possibly give me copy of the receipt?",
      right: "Could you possibly give me a copy of the receipt?",
      why: {
        en: "One copy needs a before it. Telugu కాపీ needs no such word, so people drop it.",
        te: "ఒక కాపీ అంటే ముందు a రావాలి. తెలుగులో 'కాపీ' కి అలాంటి పదం ఉండదు, అందుకే వదిలేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask the office very politely to send the copy by email.",
        te: "కాపీని email లో పంపమని ఆఫీసువాళ్ళని చాలా మర్యాదగా అడగండి.",
      },
      options: ["Could you possibly send it by email?", "You could possibly send it by email?", "Could you possibly sending it by email?"],
      answer: 0,
      why: {
        en: "A question puts could before you, and the verb after could stays plain.",
        te: "ప్రశ్నలో could, you కంటే ముందు వస్తుంది; could తర్వాత verb అలాగే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I'd be grateful ___ you could call me back.",
      te: "మీరు నాకు మళ్ళీ ఫోన్ చేస్తే చాలా సంతోషిస్తాను.",
      options: ["if", "that", "when"],
      answer: 0,
      why: {
        en: "After grateful, if brings in the request. Telugu puts this at the end, as చేస్తే.",
        te: "grateful తర్వాత if తో అభ్యర్థన వస్తుంది. తెలుగులో అది చివర 'చేస్తే' గా వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "The clerk asks how many copies you need. Say two, politely.",
        te: "ఎన్ని కాపీలు కావాలని క్లర్క్ అడిగారు. రెండు అని మర్యాదగా చెప్పండి.",
      },
      options: ["Two copies, please.", "Two copy, please.", "Give two. Quickly."],
      answer: 0,
      why: {
        en: "After two, the word changes to copies. Telugu రెండు కాపీ keeps one form, so people forget.",
        te: "రెండు అంటే copy, copies గా మారుతుంది. తెలుగులో 'రెండు కాపీ' అనే అంటాం, అందుకే మర్చిపోతాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Could you possibly send it on my email?",
      wrongIndex: 4,
      fix: "Could you possibly send it to my email?",
      why: {
        en: "You send something to an email address, so use to. On is for WhatsApp or the phone.",
        te: "email అడ్రస్‌కి పంపడం అంటే to వాడాలి. on అనేది WhatsApp, phone కి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The clerk can't find your file now. Ask her, very formally, to call you back tomorrow.",
        te: "క్లర్క్ గారికి ఇప్పుడు మీ ఫైల్ దొరకలేదు. రేపు మళ్ళీ ఫోన్ చేయమని ఆవిడని చాలా formal గా అడగండి.",
      },
      expected: [
        "I'd be grateful if you could call me back tomorrow.",
        "Could you possibly call me back tomorrow?",
        "Could you call me back tomorrow, please?",
      ],
      options: ["I'd be grateful if you could call me back tomorrow.", "Kindly revert back tomorrow.", "Call me back tomorrow, okay?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You lost your house tax receipt. Tell the clerk you need a duplicate copy.",
        te: "మీ ఇంటి పన్ను రసీదు పోయింది. మీకు duplicate కాపీ కావాలని క్లర్క్‌కి చెప్పండి.",
      },
      expected: [
        "I lost the original, so I need a duplicate copy.",
        "I lost my receipt. I need a duplicate copy, please.",
        "I need a duplicate copy, please.",
      ],
      options: ["I lost the original, so I need a duplicate copy.", "I lost the original, so I need duplicate copy.", "I am losing the original, so I need a duplicate copy."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A copy of the tax receipt", te: "పన్ను రసీదు కాపీ" },
    scene: {
      en: "You lost your house tax receipt for last year. You call the municipal office. Satish answers.",
      te: "పోయిన సంవత్సరం ఇంటి పన్ను రసీదు మీ దగ్గర పోయింది. మున్సిపల్ ఆఫీసుకి ఫోన్ చేశారు. సతీష్ గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Satish (at the municipal office)", te: "సతీష్ (మున్సిపల్ ఆఫీసులో)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking very politely", te: "చాలా మర్యాదగా అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good afternoon, municipal office, tax section. How can I help you?",
        te: "నమస్కారం, మున్సిపల్ ఆఫీస్, పన్నుల విభాగం. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Greet him, say your name, and say you lost your house tax receipt.", te: "నమస్కారం చెప్పి, మీ పేరు చెప్పి, ఇంటి పన్ను రసీదు పోయిందని చెప్పండి." },
        replies: [
          { say: "Good afternoon. This is Kiran. I lost my house tax receipt.", good: true, skill: "polite" },
          { say: "Good afternoon. Myself Kiran. I lost my house tax receipt.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "I see. We can give you a duplicate, but you have to come here.",
        te: "అలాగా. మీకు duplicate ఇవ్వగలం, కానీ మీరు ఇక్కడికి రావాలి.",
        hint: { en: "You can't go there. Ask him very politely for it by email.", te: "మీరు అక్కడికి వెళ్ళలేరు. email లో పంపమని ఆయన్ని చాలా మర్యాదగా అడగండి." },
        replies: [
          { say: "Could you possibly send it by email instead?", good: true, skill: "ask" },
          { say: "I'd be grateful if you could email it to me.", good: true, skill: "ask" },
          { say: "Could you possibly to send it by email instead?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "We can email a scanned copy today. The stamped copy takes a week.",
        te: "ఈ రోజు scan చేసిన కాపీ email చేయగలం. స్టాంప్ వేసిన కాపీకి ఒక వారం పడుతుంది.",
        hint: { en: "Say the scanned copy is fine for now. Ask for the stamped one by Friday.", te: "ఇప్పటికి scan కాపీ చాలని చెప్పండి. స్టాంప్ కాపీ శుక్రవారానికల్లా అడగండి." },
        replies: [
          { say: "That's fine. Could you possibly keep the stamped one ready by Friday?", good: true, skill: "ask" },
          {
            say: "One week? Your office is always so slow!",
            good: false,
            skill: "polite",
            react: { en: "Please understand, it needs the officer's signature.", te: "కొంచెం అర్థం చేసుకోండి అండీ, దానికి ఆఫీసర్ గారి సంతకం కావాలి." },
          },
        ],
      },
      {
        partner: "I'll try my best. Is there anything else?",
        te: "నా వంతు ప్రయత్నం చేస్తాను. ఇంకేమైనా కావాలా?",
        hint: { en: "Say that is all, and thank him for his help.", te: "అంతే అని చెప్పి, సహాయం చేసినందుకు థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you very much for your help.", good: true, skill: "polite" },
          { say: "No, that's all. Thank you very much for your helps.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
