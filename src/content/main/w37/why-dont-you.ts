import type { Lesson } from "../../types";

/** Week 37, Day 5 (CURRICULUM §4): advice phrases — Why don't you …? (soft) and You'd better … (strong). */
export const day: Lesson = {
  id: "why-dont-you",
  kind: "lesson",
  title: { en: "Why Don't You …?", te: "… చేయొచ్చు కదా?" },
  subtitle: "Why don't you …? / You'd better …",
  summary: {
    en: "Learn to give friendly advice: Why don't you see a doctor? You'd better leave early.",
    te: "స్నేహంగా సలహా ఇవ్వడం నేర్చుకుందాం: Why don't you see a doctor? You'd better leave early.",
  },
  seo: {
    title: "Giving Advice: Why Don't You and You'd Better for Telugu Speakers",
    description:
      "Say Why don't you see a doctor? and You'd better leave early. Simple lessons for Telugu speakers on giving friendly advice in English.",
  },
  pattern: [
    { text: "Why don't", role: "action" },
    { text: "you", role: "who" },
    { text: "see", role: "action" },
    { text: "a doctor?", role: "what" },
  ],
  core: [
    { en: "Why don't you see a doctor?", te: "డాక్టర్‌కి చూపించుకోవచ్చు కదా?", extra: ["seeing"] },
    { en: "You'd better leave early.", te: "మీరు త్వరగా బయలుదేరడం మంచిది.", extra: ["leaving"] },
    { en: "Why don't you try yoga in the morning?", te: "ఉదయం యోగా చేసి చూడొచ్చు కదా?", extra: ["doing"] },
    { en: "You'd better take an umbrella today.", te: "ఈ రోజు గొడుగు తీసుకెళ్ళడం మంచిది.", extra: ["to"] },
    { en: "Why don't you ask your neighbour for help?", te: "మీ పక్కింటివాళ్ళని సహాయం అడగొచ్చు కదా?", extra: ["to"] },
    { en: "That's a good idea. I'll try it.", te: "మంచి ఆలోచన. ప్రయత్నిస్తాను.", extra: ["trying"] },
    { en: "You'd better not drive at night.", te: "రాత్రిపూట డ్రైవ్ చేయకపోవడం మంచిది.", extra: ["don't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a friend with a small problem. Say one piece of advice: Why don't you …?",
    te: "చిన్న సమస్య ఉన్న మీ స్నేహితుల్లో ఒకరిని గుర్తు తెచ్చుకోండి. ఒక సలహా చెప్పండి: Why don't you …?",
  },
  words: [
    { en: "why don't you", te: "… చేయొచ్చు కదా" },
    { en: "you'd better", te: "… చేయడం మంచిది (లేకపోతే ఇబ్బంది)" },
    { en: "habit", te: "అలవాటు" },
    { en: "advise", te: "సలహా ఇవ్వడం" },
    { en: "otherwise", te: "లేకపోతే" },
  ],
  grammar: ["should-must-have-to", "politeness-softening"],
  topics: ["health", "people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Two ways to give advice", te: "సలహా ఇచ్చే రెండు పద్ధతులు" },
      body: {
        en: "Why don't you …? is soft advice between friends; it is not a real question. You'd better … is stronger: if not, there may be trouble. After both, the verb stays plain.",
        te: "Why don't you …? అంటే '… చేయొచ్చు కదా?' అనే మెత్తటి సలహా; అది నిజమైన ప్రశ్న కాదు. You'd better … ఇంకా గట్టి సలహా: చేయకపోతే ఇబ్బంది. రెండింటి తర్వాత verb మారదు.",
      },
      bridge: {
        te: ["డాక్టర్‌కి", "చూపించుకోవచ్చు కదా?"],
        en: [
          { text: "Why don't", role: "action" },
          { text: "you", role: "who" },
          { text: "see", role: "action" },
          { text: "a doctor?", role: "what" },
        ],
      },
      examples: [
        { en: "Why don't you see a doctor?", te: "డాక్టర్‌కి చూపించుకోవచ్చు కదా?" },
        { en: "Why don't you ask your neighbour for help?", te: "మీ పక్కింటివాళ్ళని సహాయం అడగొచ్చు కదా?" },
        { en: "You'd better take an umbrella today.", te: "ఈ రోజు గొడుగు తీసుకెళ్ళడం మంచిది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Soft or strong advice", te: "మెత్తటి సలహా, గట్టి సలహా" },
      items: [
        {
          form: "Why don't you …?",
          useFor: { en: "Soft and friendly: an idea to try.", te: "మెత్తగా, స్నేహంగా: ప్రయత్నించమని ఒక ఆలోచన." },
          example: { en: "Why don't you try yoga in the morning?", te: "ఉదయం యోగా చేసి చూడొచ్చు కదా?" },
        },
        {
          form: "You should …",
          useFor: { en: "Normal advice: it is good for you.", te: "మామూలు సలహా: మీకు మంచిది." },
          example: { en: "You should walk every evening.", te: "మీరు ప్రతి సాయంత్రం నడిస్తే మంచిది." },
        },
        {
          form: "You'd better …",
          useFor: { en: "Strong: otherwise there is trouble.", te: "గట్టిగా: లేకపోతే ఇబ్బంది." },
          example: { en: "You'd better leave early, otherwise you'll miss the bus.", te: "త్వరగా బయలుదేరండి, లేకపోతే బస్సు మిస్ అవుతారు." },
        },
        {
          form: "You'd better not …",
          useFor: { en: "Strong: don't do it.", te: "గట్టిగా: అది చేయకండి." },
          example: { en: "You'd better not drive at night.", te: "రాత్రిపూట డ్రైవ్ చేయకపోవడం మంచిది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Better you leave early.",
      right: "You'd better leave early.",
      why: {
        en: "Better you is an Indian habit; English starts with you'd, then better.",
        te: "Better you అనేది మన దగ్గరి అలవాటు; ఇంగ్లీష్‌లో ముందు you'd, తర్వాత better.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You'd better to take an umbrella.",
      right: "You'd better take an umbrella.",
      why: {
        en: "After had better, the verb comes straight, with no to.",
        te: "had better (you'd better) తర్వాత verb నేరుగా వస్తుంది, to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your friend Anitha has had knee pain for a week. Advise her kindly.",
        te: "మీ స్నేహితురాలు అనితకి వారం నుండి మోకాలి నొప్పి ఉంది. ఆవిడకి మెత్తగా సలహా ఇవ్వండి.",
      },
      options: ["Why don't you see a doctor?", "Why you don't see a doctor?", "Your knee is not my problem."],
      answer: 0,
      why: {
        en: "In this advice phrase, don't comes before you, as in any question.",
        te: "ఈ సలహా మాటలో ప్రశ్నలాగే don't ముందు, you తర్వాత వస్తాయి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It's going to rain. You'd better ___ an umbrella.",
      te: "వర్షం పడేలా ఉంది. గొడుగు తీసుకెళ్ళడం మంచిది.",
      options: ["take", "to take", "taking"],
      answer: 0,
      why: {
        en: "After you'd better, the verb stays plain, with no to or -ing.",
        te: "you'd better తర్వాత verb మారదు; to గానీ -ing గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: Why don't you try yoga? What does she mean?",
        te: "మీ స్నేహితురాలు Why don't you try yoga? అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["Yoga may be good for you.", "She wants the reason you don't do yoga.", "Yoga is not allowed."],
      answer: 0,
      why: {
        en: "Why don't you is a soft suggestion, not a real question about a reason.",
        te: "Why don't you అనేది మెత్తటి సలహా; కారణం అడిగే నిజమైన ప్రశ్న కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "You'd better not to drive at night.",
      wrongIndex: 3,
      fix: "You'd better not drive at night.",
      why: {
        en: "After you'd better not, the verb comes straight, with no to.",
        te: "you'd better not తర్వాత verb నేరుగా వస్తుంది, to రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend Rahim always misses the eight o'clock bus. Advise him strongly.",
        te: "మీ స్నేహితుడు రహీమ్ ఎప్పుడూ ఎనిమిదింటి బస్సు మిస్ అవుతారు. ఆయనకి గట్టిగా సలహా ఇవ్వండి.",
      },
      expected: ["You'd better leave early.", "You'd better leave home early.", "You'd better leave a bit early."],
      options: ["You'd better leave early.", "Better you leave early.", "You'd better leaving early."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your neighbour Geetha cannot sleep well. Give her a soft suggestion.",
        te: "పక్కింటి గీత గారికి సరిగ్గా నిద్ర పట్టడం లేదు. ఆవిడకి మెత్తగా ఒక సలహా ఇవ్వండి.",
      },
      expected: ["Why don't you try yoga?", "Why don't you see a doctor?", "Why don't you walk in the evening?"],
      options: ["Why don't you try yoga?", "Why you don't try yoga?", "Why don't you trying yoga?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A friend who can't sleep", te: "నిద్ర పట్టని స్నేహితుడు" },
    scene: {
      en: "Over tea, your friend Krishna says he is tired all the time. Give him some advice.",
      te: "టీ తాగుతూ, మీ స్నేహితుడు కృష్ణ ఎప్పుడూ అలసటగా ఉందని చెప్తున్నారు. ఆయనకి సలహా ఇవ్వండి.",
    },
    partner: { en: "Krishna (your friend)", te: "కృష్ణ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "advice", label: { en: "Giving advice", te: "సలహా ఇవ్వడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మెత్తగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "I don't sleep well these days. I'm always tired.",
        te: "ఈ మధ్య సరిగ్గా నిద్ర పట్టడం లేదు. ఎప్పుడూ అలసటగా ఉంటుంది.",
        hint: { en: "Say you're sorry, and ask if he drinks coffee at night.", te: "బాధగా ఉందని చెప్పి, రాత్రి కాఫీ తాగుతారా అని అడగండి." },
        replies: [
          { say: "Sorry to hear that. Do you drink coffee at night?", good: true, skill: "polite" },
          { say: "Sorry to hear that. You drink coffee at night?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, two cups after dinner. It's an old habit.",
        te: "అవును, భోజనం తర్వాత రెండు కప్పులు. పాత అలవాటు.",
        hint: { en: "Give him a soft suggestion about the coffee.", te: "కాఫీ గురించి మెత్తగా ఒక సలహా ఇవ్వండి." },
        replies: [
          { say: "Why don't you stop coffee after six?", good: true, skill: "advice" },
          { say: "Why don't you stopping coffee after six?", good: false, skill: "advice" },
        ],
      },
      {
        partner: "I sit at home all day. What do you suggest?",
        te: "రోజంతా ఇంట్లోనే కూర్చుంటాను. మీరు ఏం సూచిస్తారు?",
        hint: { en: "Advise him strongly to go out for a walk.", te: "బయటికి నడకకి వెళ్ళమని గట్టిగా సలహా ఇవ్వండి." },
        replies: [
          { say: "You'd better go for a walk every evening.", good: true, skill: "advice" },
          { say: "Better you go for a walk every evening.", good: false, skill: "advice", fixIt: "indian-english" },
          {
            say: "You're just lazy. That's the problem.",
            good: false,
            skill: "polite",
            react: { en: "Lazy? That's not very kind.", te: "బద్ధకమా? అలా అనడం బాగాలేదు." },
          },
        ],
      },
      {
        partner: "That's a good idea. Thanks for the advice!",
        te: "మంచి ఆలోచన. సలహాకి థాంక్స్!",
        hint: { en: "Reply to his thanks, and offer to walk with him tomorrow.", te: "ఆయన థాంక్స్‌కి జవాబు చెప్పి, రేపు ఆయనతో నడుస్తానని చెప్పండి." },
        replies: [
          { say: "You're welcome. I can walk with you tomorrow.", good: true, skill: "polite" },
          { say: "You're welcome. I can walking with you tomorrow.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
