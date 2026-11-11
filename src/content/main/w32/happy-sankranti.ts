import type { Lesson } from "../../types";

/** Week 32, Day 1 (CURRICULUM §4): festival greetings and replies — Happy Sankranti! Wish you the same. */
export const day: Lesson = {
  id: "happy-sankranti",
  kind: "lesson",
  title: { en: "Happy Sankranti!", te: "పండుగ శుభాకాంక్షలు" },
  subtitle: "festival greetings and replies",
  summary: {
    en: "Learn to wish people on a festival and to reply kindly: Wish you a happy Sankranti! Thank you! Wish you the same.",
    te: "పండుగ రోజు శుభాకాంక్షలు చెప్పడం, తిరిగి జవాబు ఇవ్వడం నేర్చుకుందాం: Wish you a happy Sankranti! Thank you! Wish you the same.",
  },
  seo: {
    title: "Festival Greetings in English for Telugu Speakers",
    description:
      "Say Wish you a happy Sankranti! and reply Thank you! Wish you the same. Simple lessons for Telugu speakers on festival wishes.",
  },
  pattern: [
    { text: "Wish", role: "action" },
    { text: "you", role: "who" },
    { text: "a happy Sankranti!", role: "what" },
  ],
  core: [
    { en: "Wish you a happy Sankranti!", te: "మీకు సంక్రాంతి శుభాకాంక్షలు!", extra: ["the"] },
    { en: "Thank you! Wish you the same.", te: "థాంక్యూ! మీకు కూడా అలాగే.", extra: ["also"] },
    { en: "Happy Dasara to you too!", te: "మీకు కూడా దసరా శుభాకాంక్షలు!", extra: ["for"] },
    { en: "Merry Christmas to you and your family!", te: "మీకు, మీ కుటుంబానికి క్రిస్మస్ శుభాకాంక్షలు!", extra: ["with"] },
    { en: "Eid Mubarak! Thank you for the sweets.", te: "ఈద్ ముబారక్! స్వీట్లు ఇచ్చినందుకు థాంక్యూ.", extra: ["sweet"] },
    { en: "Did you fly kites this year?", te: "ఈ సంవత్సరం గాలిపటాలు ఎగరేశారా?", extra: ["flew"] },
    { en: "Your rangoli looks beautiful!", te: "మీ ముగ్గు చాలా అందంగా ఉంది!", extra: ["look"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Send one friend a festival wish in English today, on WhatsApp or by phone.",
    te: "ఈ రోజు మీ స్నేహితుల్లో ఒకరికి ఇంగ్లీష్‌లో పండుగ శుభాకాంక్షలు పంపండి, WhatsApp లో లేదా ఫోన్‌లో.",
  },
  words: [
    { en: "festival", te: "పండుగ" },
    { en: "wish", te: "శుభాకాంక్షలు చెప్పడం" },
    { en: "the same", te: "మీకు కూడా అలాగే" },
    { en: "kite", te: "గాలిపటం" },
    { en: "Dasara", te: "దసరా" },
  ],
  grammar: ["articles", "politeness-softening"],
  topics: ["festivals", "people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Festival wishes", te: "పండుగ శుభాకాంక్షలు" },
      body: {
        en: "On a festival, say Happy and the festival's name: Happy Sankranti! Or say Wish you a happy Sankranti! When someone wishes you, thank them and send the wish back: Wish you the same.",
        te: "పండుగ రోజు Happy తర్వాత పండుగ పేరు చెప్పండి: Happy Sankranti! లేదా Wish you a happy Sankranti! ఎవరైనా మీకు చెప్తే, థాంక్స్ చెప్పి తిరిగి అదే కోరుకోండి: Wish you the same.",
      },
      bridge: {
        te: ["మీకు", "సంక్రాంతి శుభాకాంక్షలు"],
        en: [
          { text: "Wish", role: "action" },
          { text: "you", role: "who" },
          { text: "a happy Sankranti!", role: "what" },
        ],
      },
      examples: [
        { en: "Wish you a happy Sankranti!", te: "మీకు సంక్రాంతి శుభాకాంక్షలు!" },
        { en: "Thank you! Wish you the same.", te: "థాంక్యూ! మీకు కూడా అలాగే." },
        { en: "Happy Dasara to you too!", te: "మీకు కూడా దసరా శుభాకాంక్షలు!" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which wish for which festival", te: "ఏ పండుగకి ఏ మాట" },
      items: [
        {
          form: "Happy …!",
          useFor: {
            en: "Most festivals: Sankranti, Ugadi, Diwali, Dasara, Bathukamma.",
            te: "చాలా పండుగలకి: సంక్రాంతి, ఉగాది, దీపావళి, దసరా, బతుకమ్మ.",
          },
          example: { en: "Happy Dasara to you too!", te: "మీకు కూడా దసరా శుభాకాంక్షలు!" },
        },
        {
          form: "Merry Christmas!",
          useFor: { en: "Christmas: most people say Merry.", te: "క్రిస్మస్‌కి: ఎక్కువగా Merry అంటారు." },
          example: { en: "Merry Christmas to you and your family!", te: "మీకు, మీ కుటుంబానికి క్రిస్మస్ శుభాకాంక్షలు!" },
        },
        {
          form: "Eid Mubarak!",
          useFor: { en: "Ramzan, or Eid: Mubarak means blessed.", te: "రంజాన్ (ఈద్) కి: Mubarak అంటే శుభం." },
          example: { en: "Eid Mubarak! Thank you for the sweets.", te: "ఈద్ ముబారక్! స్వీట్లు ఇచ్చినందుకు థాంక్యూ." },
        },
        {
          form: "Wish you the same.",
          useFor: { en: "Your reply when someone wishes you.", te: "ఎవరైనా మీకు శుభాకాంక్షలు చెప్తే మీ జవాబు." },
          example: { en: "Thank you! Wish you the same.", te: "థాంక్యూ! మీకు కూడా అలాగే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Wish you happy Sankranti!",
      right: "Wish you a happy Sankranti!",
      why: {
        en: "A wish needs a before happy. Telugu has no word for a, so we often drop it.",
        te: "wish లో happy ముందు a తప్పకుండా రావాలి. తెలుగులో a లాంటి పదం లేదు, అందుకే మర్చిపోతుంటాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Same to you also.",
      right: "Thank you! Same to you.",
      why: {
        en: "Same to you already means you too, so also is extra. Say thank you first.",
        te: "Same to you అంటేనే మీకు కూడా; also అక్కర్లేదు. ముందు thank you అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Your neighbour says Happy Sankranti! What do you say?", te: "పక్కింటి వారు Happy Sankranti! అన్నారు. మీరేమంటారు?" },
      options: ["Thank you! Wish you the same.", "Thank you! You also same.", "Thank you! Same to me."],
      answer: 0,
      why: {
        en: "Wish you the same sends their wish back; word-for-word Telugu gives you also same.",
        te: "Wish you the same అంటే అదే శుభాకాంక్ష వారికి తిరిగి; తెలుగు మాట మాటకీ అనువదిస్తే you also same అవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "article",
      sentence: "Wish you ___ happy Diwali!",
      te: "మీకు దీపావళి శుభాకాంక్షలు!",
      options: ["a", "the", "one"],
      answer: 0,
      why: {
        en: "A festival wish takes a before happy, though Telugu has no such word.",
        te: "పండుగ శుభాకాంక్షలో happy ముందు a వస్తుంది; తెలుగులో అలాంటి పదం ఉండదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "It is Christmas. Your friend Mary is at the door. What do you say?", te: "ఈ రోజు క్రిస్మస్. మీ స్నేహితురాలు మేరీ గుమ్మం దగ్గర ఉన్నారు. ఏమంటారు?" },
      options: ["Merry Christmas, Mary!", "Wish you Christmas, Mary!", "Congratulations, Mary!"],
      answer: 0,
      why: {
        en: "Christmas has its own wish with merry; congratulations is for good news, like a new job.",
        te: "క్రిస్మస్‌కి merry తో ప్రత్యేకమైన మాట ఉంది; congratulations కొత్త ఉద్యోగం లాంటి మంచి వార్తకి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Your rangoli look beautiful!",
      wrongIndex: 2,
      fix: "Your rangoli looks beautiful!",
      why: {
        en: "One rangoli is like it, so the verb takes s.",
        te: "ఒక్క ముగ్గు అంటే it లాంటిది, అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "It is Sankranti. Wish your neighbour Usha.",
        te: "ఈ రోజు సంక్రాంతి. పక్కింటి ఉష గారికి శుభాకాంక్షలు చెప్పండి.",
      },
      expected: ["Wish you a happy Sankranti!", "Happy Sankranti!", "Happy Sankranti, Usha!"],
      options: ["Wish you a happy Sankranti!", "Wish you happy Sankranti!", "Today happy Sankranti to you!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend Imran says Eid Mubarak! Thank him and wish him back.",
        te: "మీ స్నేహితులు ఇమ్రాన్ Eid Mubarak! అన్నారు. థాంక్స్ చెప్పి, ఆయనకి తిరిగి శుభాకాంక్షలు చెప్పండి.",
      },
      expected: ["Thank you! Eid Mubarak to you too!", "Thank you! Eid Mubarak!", "Thank you! Wish you the same."],
      options: ["Thank you! Eid Mubarak to you too!", "Thank you! You also same.", "Thanks you! Eid Mubarak!"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Sankranti morning", te: "సంక్రాంతి ఉదయం" },
    scene: {
      en: "It is Sankranti morning. Your neighbour Geetha is drawing a rangoli outside her house.",
      te: "సంక్రాంతి ఉదయం. పక్కింటి గీత గారు ఇంటి ముందు ముగ్గు వేస్తున్నారు.",
    },
    partner: { en: "Geetha (neighbour)", te: "గీత (పక్కింటి ఆవిడ)" },
    skills: [{ id: "wish", label: { en: "Festival wishes", te: "పండుగ శుభాకాంక్షలు" } }],
    turns: [
      {
        partner: "Good morning! Happy Sankranti!",
        te: "నమస్కారం అండీ! సంక్రాంతి శుభాకాంక్షలు!",
        hint: { en: "Thank her, and send the wish back.", te: "థాంక్స్ చెప్పి, తిరిగి శుభాకాంక్షలు చెప్పండి." },
        replies: [
          { say: "Thank you! Wish you the same.", good: true, skill: "wish" },
          { say: "Thank you! Wish you happy Sankranti also.", good: false, skill: "wish", fixIt: "article" },
        ],
      },
      {
        partner: "Thank you! Do you like my rangoli?",
        te: "థాంక్యూ! నా ముగ్గు నచ్చిందా?",
        hint: { en: "Say something kind about her rangoli.", te: "ఆవిడ ముగ్గు గురించి మంచి మాట చెప్పండి." },
        replies: [
          { say: "Yes! Your rangoli looks beautiful!", good: true, skill: "wish" },
          { say: "Yes! Your rangoli look beautiful!", good: false, skill: "wish", fixIt: "he-she-s" },
          {
            say: "It's okay. Last year's was better.",
            good: false,
            skill: "wish",
            react: { en: "Oh! I tried my best this year.", te: "అయ్యో! ఈ సారి చాలా కష్టపడి వేశానండీ." },
          },
        ],
      },
      {
        partner: "Thank you! Did you fly kites this year?",
        te: "థాంక్యూ! ఈ సంవత్సరం గాలిపటాలు ఎగరేశారా?",
        hint: { en: "Say yes, and who you flew them with.", te: "అవునని, ఎవరితో కలిసి ఎగరేశారో చెప్పండి." },
        replies: [
          { say: "Yes, I flew kites with my cousins yesterday.", good: true },
          { say: "Yes, I fly kites with my cousins yesterday.", good: false },
        ],
      },
      {
        partner: "Lovely! Please come and have pongal later.",
        te: "చాలా బాగుంది! తర్వాత పొంగలి తినడానికి రండి.",
        hint: { en: "Thank her, and say when you will come.", te: "థాంక్స్ చెప్పి, ఎప్పుడు వస్తారో చెప్పండి." },
        replies: [
          { say: "Thank you! I'll come in the evening.", good: true },
          { say: "Thank you, I'd love to. I'll come at noon.", good: true },
          { say: "Thank you! I'll coming in the evening.", good: false },
        ],
      },
    ],
  },
};
