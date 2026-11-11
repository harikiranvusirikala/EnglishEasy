import type { Lesson } from "../../types";

/** Week 28, Day 3 (CURRICULUM §4): pension words; I came to …; Can I do it online? — the life certificate, for yourself or a neighbour. */
export const day: Lesson = {
  id: "my-life-certificate",
  kind: "lesson",
  title: { en: "My Life Certificate", te: "లైఫ్ సర్టిఫికెట్" },
  subtitle: "I came to …; Can I do it online?",
  summary: {
    en: "Learn to give a pension life certificate, for yourself or a neighbour: I came to give my life certificate. Can I do it online?",
    te: "పెన్షన్ లైఫ్ సర్టిఫికెట్ ఇవ్వడం నేర్చుకుందాం, మీకైనా పక్కింటివాళ్ళకైనా: I came to give my life certificate. Can I do it online?",
  },
  seo: {
    title: "Pension Life Certificate in English for Telugu Speakers",
    description:
      "Say I came to give my life certificate and Can I do it online? at the bank. Simple lessons for Telugu speakers on pension work.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "came to give", role: "action" },
    { text: "my life certificate", role: "what" },
  ],
  core: [
    { en: "I came to give my life certificate.", te: "నా లైఫ్ సర్టిఫికెట్ ఇవ్వడానికి వచ్చాను.", extra: ["for"] },
    { en: "Can I do it online?", te: "ఇది ఆన్‌లైన్‌లో చేయొచ్చా?", extra: ["in"] },
    { en: "Pensioners have to give it every November.", te: "పెన్షన్ తీసుకునేవాళ్ళు ప్రతి నవంబర్‌లో ఇది ఇవ్వాలి.", extra: ["has"] },
    { en: "He needs to give his life certificate.", te: "ఆయన తన లైఫ్ సర్టిఫికెట్ ఇవ్వాలి.", extra: ["need"] },
    { en: "You can give it with your fingerprint.", te: "మీ వేలిముద్రతో ఇవ్వొచ్చు.", extra: ["by"] },
    { en: "Do I have to come in person?", te: "నేను స్వయంగా రావాలా?", extra: ["coming"] },
    { en: "My neighbour cannot walk to the bank.", te: "మా పక్కింటాయన బ్యాంక్ దాకా నడవలేరు.", extra: ["can"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone you know with a pension: Did you give your life certificate?",
    te: "మీకు తెలిసిన పెన్షన్ తీసుకునేవాళ్ళని అడగండి: Did you give your life certificate?",
  },
  words: [
    { en: "life certificate", te: "లైఫ్ సర్టిఫికెట్ (బతికే ఉన్నారని రుజువు)" },
    { en: "pensioner", te: "పెన్షన్ తీసుకునేవారు" },
    { en: "online", te: "ఆన్‌లైన్‌లో, ఇంటర్నెట్‌లో" },
    { en: "in person", te: "స్వయంగా, నేరుగా వచ్చి" },
    { en: "November", te: "నవంబర్" },
  ],
  grammar: ["should-must-have-to", "can-could", "present-simple"],
  topics: ["bank", "offices", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I came to …", te: "I came to … వాడకం" },
      body: {
        en: "To say why you came, use came to and the plain verb: I came to give my life certificate. Pensioners give it every November, at the bank or online.",
        te: "ఎందుకు వచ్చారో చెప్పాలంటే came to + verb: I came to give my life certificate. పెన్షన్ తీసుకునేవాళ్ళు ప్రతి నవంబర్‌లో బ్యాంక్‌లో గానీ ఆన్‌లైన్‌లో గానీ ఇది ఇస్తారు.",
      },
      bridge: {
        te: ["నా లైఫ్ సర్టిఫికెట్", "ఇవ్వడానికి", "వచ్చాను"],
        en: [
          { text: "I", role: "who" },
          { text: "came to give", role: "action" },
          { text: "my life certificate", role: "what" },
        ],
      },
      examples: [
        { en: "I came to give my life certificate.", te: "నా లైఫ్ సర్టిఫికెట్ ఇవ్వడానికి వచ్చాను." },
        { en: "Pensioners have to give it every November.", te: "పెన్షన్ తీసుకునేవాళ్ళు ప్రతి నవంబర్‌లో ఇది ఇవ్వాలి." },
        { en: "Do I have to come in person?", te: "నేను స్వయంగా రావాలా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to give it", te: "లైఫ్ సర్టిఫికెట్ ఇచ్చే పద్ధతులు" },
      items: [
        {
          form: "At the bank",
          useFor: { en: "The bank where the pension comes.", te: "పెన్షన్ పడే బ్యాంక్‌లో." },
          example: { en: "I came to give my life certificate.", te: "నా లైఫ్ సర్టిఫికెట్ ఇవ్వడానికి వచ్చాను." },
        },
        {
          form: "Online: Jeevan Pramaan",
          useFor: { en: "With your fingerprint or your face.", te: "జీవన్ ప్రమాణ్: వేలిముద్రతో లేదా ముఖంతో." },
          example: { en: "You can give it with your fingerprint.", te: "మీ వేలిముద్రతో ఇవ్వొచ్చు." },
        },
        {
          form: "He / She needs to …",
          useFor: { en: "Talking about someone you help. Needs has s.", te: "మీరు సహాయం చేసేవాళ్ళ గురించి. needs కి s ఉంటుంది." },
          example: { en: "He needs to give his life certificate.", te: "ఆయన తన లైఫ్ సర్టిఫికెట్ ఇవ్వాలి." },
        },
        {
          form: "Do I have to …?",
          useFor: { en: "Asking about a rule.", te: "నియమం గురించి అడగడం." },
          example: { en: "Do I have to come in person?", te: "నేను స్వయంగా రావాలా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "He need to give his life certificate.",
      right: "He needs to give his life certificate.",
      why: {
        en: "With he or she, need takes s, and have becomes has.",
        te: "he లేదా she తో need కి s వస్తుంది; have కూడా has అవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I came for giving my life certificate.",
      right: "I came to give my life certificate.",
      why: {
        en: "Telugu ఇవ్వడానికి becomes to give in English, never for giving.",
        te: "'ఇవ్వడానికి' ఇంగ్లీష్‌లో to give అవుతుంది, for giving కాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "At the bank, say why you came.", te: "బ్యాంక్‌లో మీరు ఎందుకు వచ్చారో చెప్పండి." },
      options: ["I came to give my life certificate.", "I came for give my life certificate.", "I am come to give my life certificate."],
      answer: 0,
      why: {
        en: "Came is the past of come, and to with the plain verb tells why.",
        te: "came అంటే come కి past; ఎందుకో చెప్పడానికి to + verb.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Pensioners ___ to give it every November.",
      te: "పెన్షన్ తీసుకునేవాళ్ళు ప్రతి నవంబర్‌లో ఇది ఇవ్వాలి.",
      options: ["have", "has", "having"],
      answer: 0,
      why: {
        en: "Pensioners are many people, so use have; has is only for one.",
        te: "pensioners అంటే చాలామంది, అందుకే have; has ఒక్కరికే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The clerk says: You can give it with your fingerprint. What does it mean?",
        te: "క్లర్క్ You can give it with your fingerprint అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Your fingerprint is enough, no paper.", "You have to sign a paper.", "You have to come again in December."],
      answer: 0,
      why: {
        en: "With your fingerprint means the machine checks your finger instead of a paper.",
        te: "వేలిముద్రతో అంటే కాగితం బదులు మెషిన్ మీ వేలిని చూస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I give my life certificate on November.",
      wrongIndex: 5,
      fix: "I give my life certificate in November.",
      why: {
        en: "Telugu says నవంబర్‌లో, and English months also take in.",
        te: "తెలుగులో 'నవంబర్‌లో' అన్నట్టే, ఇంగ్లీష్‌లో నెలల ముందు in వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the bank clerk if you can do it online.",
        te: "ఆన్‌లైన్‌లో చేయొచ్చా అని బ్యాంక్ క్లర్క్‌ని అడగండి.",
      },
      expected: ["Can I do it online?", "Can I give it online?"],
      options: ["Can I do it online?", "I can do it online?", "Can I do it in online?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell the clerk your neighbour needs to give his life certificate.",
        te: "మీ పక్కింటాయన లైఫ్ సర్టిఫికెట్ ఇవ్వాలని క్లర్క్‌కి చెప్పండి.",
      },
      expected: ["My neighbour needs to give his life certificate.", "My neighbour needs to give his certificate."],
      options: [
        "My neighbour needs to give his life certificate.",
        "My neighbour need to give his life certificate.",
        "My neighbour needs giving his life certificate.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the bank in November", te: "నవంబర్‌లో బ్యాంక్‌లో" },
    scene: {
      en: "It is November. Imagine you get a pension. Satish, the bank clerk, helps you.",
      te: "ఇది నవంబర్ నెల. మీకు పెన్షన్ వస్తుందనుకోండి. బ్యాంక్ క్లర్క్ సతీష్ సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Satish (bank clerk)", te: "సతీష్ (బ్యాంక్ క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "why", label: { en: "Saying why you came", te: "ఎందుకు వచ్చారో చెప్పడం" } },
      { id: "ask", label: { en: "Asking about the rules", te: "నియమాల గురించి అడగడం" } },
    ],
    turns: [
      {
        partner: "Good morning. What can I do for you?",
        te: "నమస్కారం. మీకు ఏం కావాలి?",
        hint: { en: "Say why you came today.", te: "ఈ రోజు ఎందుకు వచ్చారో చెప్పండి." },
        replies: [
          { say: "I came to give my life certificate.", good: true, skill: "why" },
          { say: "I came for giving my life certificate.", good: false, skill: "why" },
        ],
      },
      {
        partner: "Okay. Please give me your passbook.",
        te: "సరే. మీ పాస్‌బుక్ ఇవ్వండి.",
        hint: { en: "Hand it over, and ask about doing it online next year.", te: "పాస్‌బుక్ ఇచ్చి, వచ్చే ఏడాది ఆన్‌లైన్‌లో చేయొచ్చా అని అడగండి." },
        replies: [
          { say: "Here it is. Can I do it online next year?", good: true, skill: "ask" },
          { say: "Here it is. I can do it online next year?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Yes. With Jeevan Pramaan, you can use your fingerprint.",
        te: "అవును. జీవన్ ప్రమాణ్‌తో మీ వేలిముద్ర వాడొచ్చు.",
        hint: { en: "Ask if you must come to the bank for that.", te: "దానికి బ్యాంక్‌కి రావాలా అని అడగండి." },
        replies: [
          { say: "Do I have to come to the bank?", good: true, skill: "ask" },
          { say: "Do I have to coming to the bank?", good: false, skill: "ask" },
          {
            say: "Online? I don't trust all that.",
            good: false,
            skill: "ask",
            react: { en: "It is safe. Many pensioners use it now.", te: "అది సురక్షితమే. చాలామంది పెన్షనర్లు ఇప్పుడు అదే వాడుతున్నారు." },
          },
        ],
      },
      {
        partner: "No. You can do it on a phone at home.",
        te: "అవసరం లేదు. ఇంట్లోనే ఫోన్‌లో చేయొచ్చు.",
        hint: { en: "Say it is very helpful, and thank him.", te: "చాలా ఉపయోగపడుతుందని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "That's very helpful. Thank you so much.", good: true },
          { say: "That's very helpful. Thanks you so much.", good: false },
        ],
      },
    ],
  },
};
