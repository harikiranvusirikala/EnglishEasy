import type { Lesson } from "../../types";

/** Week 54, Day 4 (CURRICULUM §5): Fix-It Clinic — all ten Fix-it errors (§2), checked again in Weeks 41–53 sentences. */
export const day: Lesson = {
  id: "fix-it-clinic-3",
  kind: "lesson",
  title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" },
  subtitle: "the ten mistakes in longer sentences",
  summary: {
    en: "Fix the ten mistakes Telugu speakers make most, now in longer sentences: have been waiting, used to, Where were you going? and more.",
    te: "తెలుగువాళ్ళు ఎక్కువగా చేసే పది తప్పులు, ఈసారి పెద్ద వాక్యాల్లో సరిచేసుకుందాం: have been waiting, used to, Where were you going?, ఇంకా మరికొన్ని.",
  },
  seo: {
    title: "Fixing Common English Mistakes for Telugu Speakers",
    description:
      "Say I have been waiting since ten and We used to go every day. A lesson for Telugu speakers on fixing the ten most common mistakes.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have been waiting", role: "action" },
    { text: "here", role: "what" },
    { text: "since ten", role: "when" },
  ],
  core: [
    { en: "I have been waiting here since ten.", te: "నేను పది గంటల నుంచి ఇక్కడ ఎదురుచూస్తున్నాను.", extra: ["am"] },
    { en: "We used to go to the temple every day.", te: "మేము ఒకప్పుడు రోజూ గుడికి వెళ్ళేవాళ్ళం.", extra: ["going"] },
    { en: "Where were you going when it happened?", te: "అది జరిగినప్పుడు మీరు ఎక్కడికి వెళ్తున్నారు?", extra: ["did"] },
    { en: "Usha teaches music at the temple every Sunday.", te: "ఉష గారు ప్రతి ఆదివారం గుడిలో సంగీతం నేర్పిస్తారు.", extra: ["teach"] },
    { en: "No, I didn't go. I was at the hospital.", te: "లేదు, నేను వెళ్ళలేదు. ఆసుపత్రిలో ఉన్నాను." },
    { en: "The nurse gave me some useful advice.", te: "నర్సు గారు నాకు కొన్ని మంచి సలహాలు ఇచ్చారు.", extra: ["advices"] },
    { en: "Please call me an hour before you come.", te: "మీరు రావడానికి గంట ముందు నాకు ఫోన్ చేయండి.", extra: ["a"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Rehearse a short story aloud once, then tell it to a friend. Check the small words: a, the, is, have been.",
    te: "ఒక చిన్న కథని ఒకసారి గట్టిగా ప్రాక్టీస్ చేసి, తర్వాత స్నేహితులకి చెప్పండి. చిన్న పదాలు సరిచూసుకోండి: a, the, is, have been.",
  },
  words: [
    { en: "common", te: "చాలామంది చేసే, మామూలు" },
    { en: "error", te: "తప్పు, పొరపాటు" },
    { en: "fix", te: "సరిచేయడం" },
    { en: "rehearse", te: "ముందే ప్రాక్టీస్ చేసుకోవడం" },
    { en: "get it right", te: "సరిగ్గా చెప్పడం, సరిగ్గా చేయడం" },
  ],
  grammar: ["present-perfect-continuous", "used-to-would", "question-words", "articles", "plurals-countable", "prepositions"],
  topics: ["people", "health", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ten mistakes, one more check", te: "పది తప్పులు, మరోసారి చూసుకుందాం" },
      body: {
        en: "Your sentences are longer now, and the old mistakes hide inside them. Before you speak, check the small parts: have been, used to, were you, an s, a or the.",
        te: "ఇప్పుడు మీ వాక్యాలు పెద్దవి; పాత తప్పులు వాటిలోనే దాక్కుంటాయి. మాట్లాడే ముందు చిన్న భాగాలు చూసుకోండి: have been, used to, were you, s, a / the.",
      },
      bridge: {
        te: ["నేను", "పది నుంచి", "ఇక్కడ", "ఎదురుచూస్తున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have been waiting", role: "action" },
          { text: "here", role: "what" },
          { text: "since ten", role: "when" },
        ],
      },
      examples: [
        { en: "I have been waiting here since ten.", te: "నేను పది గంటల నుంచి ఇక్కడ ఎదురుచూస్తున్నాను." },
        { en: "We used to go to the temple every day.", te: "మేము ఒకప్పుడు రోజూ గుడికి వెళ్ళేవాళ్ళం." },
        { en: "Where were you going when it happened?", te: "అది జరిగినప్పుడు మీరు ఎక్కడికి వెళ్తున్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Check these before you speak", te: "మాట్లాడే ముందు ఇవి చూసుకోండి" },
      items: [
        {
          form: "have been + -ing + since / for",
          useFor: { en: "It started earlier and is still going on.", te: "ముందే మొదలై, ఇప్పటికీ జరుగుతున్నది." },
          example: { en: "My neighbour has been learning yoga for a year.", te: "మా పక్కింటివారు ఏడాదిగా యోగా నేర్చుకుంటున్నారు." },
        },
        {
          form: "used to + verb",
          useFor: { en: "A habit long ago; never was going daily.", te: "చాలా కాలం క్రితం అలవాటు; was going daily కాదు." },
          example: { en: "We used to cycle to school every day.", te: "మేము రోజూ సైకిల్ మీద స్కూల్‌కి వెళ్ళేవాళ్ళం." },
        },
        {
          form: "No, I didn't.",
          useFor: { en: "Answering You didn't …? when you did not.", te: "'You didn't …?' అని అడిగితే, మీరు చేయకపోతే." },
          example: { en: "You didn't eat breakfast? No, I didn't. I was late.", te: "టిఫిన్ తినలేదా? లేదు, తినలేదు. ఆలస్యమైంది." },
        },
        {
          form: "an hour, an X-ray",
          useFor: { en: "An before a vowel sound, even when the letter is h or X.", te: "అచ్చు శబ్దం ముందు an; అక్షరం h, X అయినా సరే." },
          example: { en: "Please call me an hour before you come.", te: "మీరు రావడానికి గంట ముందు నాకు ఫోన్ చేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "You didn't get the refund? Yes, I didn't.",
      right: "You didn't get the refund? No, I didn't.",
      why: {
        en: "No goes with didn't in English, though Telugu starts with అవును, రాలేదు.",
        te: "తెలుగులో 'అవును, రాలేదు' అంటాం; ఇంగ్లీష్‌లో didn't తో No రావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I was out of station last week.",
      right: "I was out of town last week.",
      why: {
        en: "Out of station is old Indian English; people everywhere say out of town.",
        te: "out of station పాత అలవాటు మాట; అందరికీ అర్థమయ్యేది out of town.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your friend Rani saw an accident on the road. Ask where she was going.",
        te: "మీ స్నేహితురాలు రాణి గారు రోడ్డు మీద ఒక ప్రమాదం చూశారు. అప్పుడు ఆవిడ ఎక్కడికి వెళ్తున్నారో అడగండి.",
      },
      options: ["Where were you going when it happened?", "Where you were going when it happened?", "Where are you going when it happened?"],
      answer: 0,
      why: {
        en: "In a question, were comes before you; Telugu keeps the same order, so we forget.",
        te: "ప్రశ్నలో were ని you కంటే ముందు పెట్టాలి; తెలుగులో వరుస మారదు, అందుకే మర్చిపోతాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "The doctor gave me some good ___ about walking.",
      te: "నడక గురించి డాక్టర్ గారు నాకు మంచి సలహా ఇచ్చారు.",
      options: ["advice", "advices", "an advice"],
      answer: 0,
      why: {
        en: "Advice is never counted in English, so it takes no s and no an.",
        te: "ఇంగ్లీష్‌లో advice ని లెక్కపెట్టరు; దానికి s గానీ an గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Tell the clerk the queue is too long for the elders.", te: "పెద్దవాళ్ళకి క్యూ చాలా పొడుగ్గా ఉందని క్లర్క్‌కి చెప్పండి." },
      options: ["The queue is too long for the elders here.", "The queue too long for the elders here.", "The queue is too much long for the elders here."],
      answer: 0,
      why: {
        en: "Telugu can say క్యూ చాలా పొడుగు with no verb, but English needs is.",
        te: "తెలుగులో 'క్యూ చాలా పొడుగు' అని verb లేకుండా అనొచ్చు; ఇంగ్లీష్‌లో is తప్పనిసరి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "We reached to the hospital at seven.",
      wrongIndex: 2,
      fix: "We reached the hospital at seven.",
      why: {
        en: "Reach takes no to after it; Telugu ఆసుపత్రికి makes us add one.",
        te: "reach తర్వాత to రాదు; 'ఆసుపత్రికి' లోని 'కి' వల్ల to చేర్చేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell a new neighbour about your friend Usha: she teaches music at the temple.",
        te: "కొత్త పొరుగువారికి మీ స్నేహితురాలు ఉష గారి గురించి చెప్పండి: ఆవిడ గుడిలో సంగీతం నేర్పిస్తారు.",
      },
      expected: ["Usha teaches music at the temple.", "She teaches music at the temple.", "Usha teaches music at the temple every Sunday."],
      options: ["Usha teaches music at the temple.", "Usha teach music at the temple.", "Usha is teaching music at the temple daily."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The clerk asks how long you have been waiting. You came at ten.",
        te: "ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారని క్లర్క్ అడుగుతున్నారు. మీరు పదింటికి వచ్చారు.",
      },
      expected: ["I've been waiting since ten.", "I have been waiting since ten.", "Since ten o'clock.", "I have been waiting here since ten."],
      options: ["I've been waiting since ten.", "I am waiting since ten.", "I have been waited since ten."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Checking a story", te: "కథ సరిచూడటం" },
    scene: {
      en: "Your friend Gopal will tell a story at the senior citizens' club tomorrow. He rehearses it with you first. Listen carefully.",
      te: "మీ స్నేహితుడు గోపాల్ గారు రేపు senior citizens club లో ఒక కథ చెప్పబోతున్నారు. ముందుగా మీ ముందు ప్రాక్టీస్ చేస్తున్నారు. జాగ్రత్తగా వినండి.",
    },
    partner: { en: "Gopal (a friend)", te: "గోపాల్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "fix", label: { en: "Correcting kindly", te: "మర్యాదగా సరిచేయడం" } },
      { id: "kind", label: { en: "Encouraging", te: "ధైర్యం చెప్పడం" } },
    ],
    turns: [
      {
        partner: "First line: When I was young, I was going to the river daily.",
        te: "మొదటి లైన్: 'When I was young, I was going to the river daily.'",
        hint: { en: "Correct it kindly: it was a habit long ago.", te: "మర్యాదగా సరిచేయండి: అది చాలా కాలం క్రితం అలవాటు." },
        replies: [
          { say: "Nice start! But say: I used to go to the river every day.", good: true, skill: "fix" },
          { say: "That's fine. Was going daily is correct.", good: false, skill: "fix", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Next: One day I saw snake near the water.",
        te: "తర్వాత: 'One day I saw snake near the water.'",
        hint: { en: "Tell him one small word is missing before snake.", te: "snake ముందు ఒక చిన్న పదం లేదని చెప్పండి." },
        replies: [
          { say: "Good, but add a: I saw a snake near the water.", good: true, skill: "fix" },
          { say: "Very good. Every word is correct.", good: false, skill: "fix", fixIt: "article" },
        ],
      },
      {
        partner: "Last line: Since that day, I am afraid of snakes.",
        te: "చివరి లైన్: 'Since that day, I am afraid of snakes.'",
        hint: { en: "Correct it kindly: the fear started that day and goes on now.", te: "మర్యాదగా సరిచేయండి: ఆ భయం ఆ రోజు మొదలై ఇప్పటికీ ఉంది." },
        replies: [
          { say: "Almost. Say: Since that day, I have been afraid of snakes.", good: true, skill: "fix" },
          { say: "Fine. I am afraid since that day is correct.", good: false, skill: "fix", fixIt: "duration" },
        ],
      },
      {
        partner: "Thank you! Do you think the club will like it?",
        te: "థాంక్యూ! club లో వాళ్ళకి నచ్చుతుందంటారా?",
        hint: { en: "Say yes, and encourage him kindly.", te: "అవునని చెప్పి, ఆయనకి ధైర్యం చెప్పండి." },
        replies: [
          { say: "Yes! It's a lovely story. They will enjoy it.", good: true, skill: "kind" },
          {
            say: "Maybe. Your stories are usually boring.",
            good: false,
            skill: "kind",
            react: { en: "Oh! Then I'll practice more tonight.", te: "అయ్యో! అయితే ఈ రాత్రి ఇంకా ప్రాక్టీస్ చేస్తాను." },
          },
        ],
      },
    ],
  },
};
