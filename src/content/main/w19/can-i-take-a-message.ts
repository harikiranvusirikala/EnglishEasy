import type { Lesson } from "../../types";

/** Week 19, Day 2 (CURRICULUM §4): taking and leaving messages — She is not at home. Can I take a message? I'll tell him. */
export const day: Lesson = {
  id: "can-i-take-a-message",
  kind: "lesson",
  title: { en: "Can I Take a Message?", te: "ఏమైనా చెప్పాలా?" },
  subtitle: "Can I take a message?",
  summary: {
    en: "Learn to take a message when someone is out: Sorry, she is not at home. Can I take a message?",
    te: "ఎవరైనా ఇంట్లో లేనప్పుడు మెసేజ్ తీసుకోవడం నేర్చుకుందాం: Sorry, she is not at home. Can I take a message?",
  },
  seo: {
    title: "Taking a Phone Message in English for Telugu Speakers",
    description:
      "Say Sorry, she is not at home. Can I take a message? Simple lessons for Telugu speakers on taking and leaving phone messages.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "I", role: "who" },
    { text: "take", role: "action" },
    { text: "a message?", role: "what" },
  ],
  core: [
    { en: "Sorry, she is not at home.", te: "Sorry అండీ, ఆవిడ ఇంట్లో లేరు.", extra: ["in"] },
    { en: "Can I take a message?", te: "ఏమైనా చెప్పాలా? మెసేజ్ రాసుకోనా?", extra: ["keep"] },
    { en: "Please tell him Kiran called.", te: "కిరణ్ ఫోన్ చేశారని ఆయనకి చెప్పండి.", extra: ["say"] },
    { en: "Okay, I'll tell him.", te: "సరే, ఆయనకి చెప్తాను.", extra: ["telling"] },
    { en: "She will be back at six.", te: "ఆవిడ ఆరు గంటలకి తిరిగి వస్తారు.", extra: ["on"] },
    { en: "Can you ask him to call me?", te: "నాకు ఫోన్ చేయమని ఆయనకి చెప్తారా?", extra: ["calling"] },
    { en: "Let me note down your number.", te: "మీ నంబర్ రాసుకుంటాను.", extra: ["notes"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Keep a pen and paper next to your phone. Practice: Can I take a message?",
    te: "మీ ఫోన్ పక్కన ఒక పెన్ను, కాగితం పెట్టుకోండి. Can I take a message? అని ప్రాక్టీస్ చేయండి.",
  },
  words: [
    { en: "message", te: "మెసేజ్, కబురు" },
    { en: "note down", te: "రాసుకోవడం" },
    { en: "be back", te: "తిరిగి రావడం" },
    { en: "urgent", te: "అర్జెంట్, వెంటనే కావలసిన" },
    { en: "remind", te: "గుర్తు చేయడం" },
  ],
  grammar: ["will", "present-simple"],
  topics: ["phone", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Taking a message", te: "మెసేజ్ తీసుకోవడం" },
      body: {
        en: "When the person is out, say so, and offer help: Sorry, she is not at home. Can I take a message? Then promise to pass it on: Okay, I'll tell her.",
        te: "కావలసిన వాళ్ళు లేకపోతే అదే చెప్పి, సహాయం చేస్తామనండి: Sorry, she is not at home. Can I take a message? తర్వాత చెప్తానని మాట ఇవ్వండి: Okay, I'll tell her.",
      },
      bridge: {
        te: ["కిరణ్ ఫోన్ చేశారని", "ఆయనకి", "చెప్పండి"],
        en: [
          { text: "Please tell", role: "action" },
          { text: "him", role: "who" },
          { text: "Kiran called", role: "what" },
        ],
      },
      examples: [
        { en: "Sorry, she is not at home.", te: "Sorry అండీ, ఆవిడ ఇంట్లో లేరు." },
        { en: "Can I take a message?", te: "ఏమైనా చెప్పాలా? మెసేజ్ రాసుకోనా?" },
        { en: "Let me note down your number.", te: "మీ నంబర్ రాసుకుంటాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Taking or leaving a message", te: "మెసేజ్ తీసుకోవడం, ఇవ్వడం" },
      items: [
        {
          form: "Can I take a message?",
          useFor: { en: "You answer, and offer to pass it on.", te: "మీరు ఫోన్ తీసి, చెప్తామనడానికి." },
          example: { en: "Can I take a message?", te: "ఏమైనా చెప్పాలా? మెసేజ్ రాసుకోనా?" },
        },
        {
          form: "Please tell him …",
          useFor: { en: "You called; leave your message.", te: "మీరు ఫోన్ చేశారు; మీ మెసేజ్ చెప్పడానికి." },
          example: { en: "Please tell him Kiran called.", te: "కిరణ్ ఫోన్ చేశారని ఆయనకి చెప్పండి." },
        },
        {
          form: "be back at …",
          useFor: { en: "Say when the person comes home.", te: "ఎప్పుడు తిరిగి వస్తారో చెప్పడానికి." },
          example: { en: "She will be back at six.", te: "ఆవిడ ఆరు గంటలకి తిరిగి వస్తారు." },
        },
        {
          form: "ask him to call me",
          useFor: { en: "Ask for a call back.", te: "మళ్ళీ ఫోన్ చేయమని అడగడానికి." },
          example: { en: "Can you ask him to call me?", te: "నాకు ఫోన్ చేయమని ఆయనకి చెప్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "She come back at six every day.",
      right: "She comes back at six every day.",
      why: {
        en: "For one person, he or she, a daily habit takes s on the verb: come becomes comes.",
        te: "ఒక్కరు (he, she) రోజూ చేసే పని అయితే verb కి s చేర్చాలి: come కాదు, comes.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Please say him Kiran called.",
      right: "Please tell him Kiran called.",
      why: {
        en: "Say never takes a person right after it. Use tell before him or her.",
        te: "say తర్వాత వెంటనే మనిషి రారు. him, her ముందు tell వాడండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "The caller asks for Sita. She is out. What do you say?", te: "ఫోన్ చేసినవాళ్ళు సీత గారిని అడిగారు. ఆవిడ బయటికి వెళ్ళారు. ఏమంటారు?" },
      options: ["Sorry, she is not at home.", "Sorry, she not at home.", "Sorry, wrong number."],
      answer: 0,
      why: {
        en: "Telugu లేరు needs no is, but English needs is before not.",
        te: "తెలుగులో 'లేరు' ఒక్కటే చాలు; ఇంగ్లీష్‌లో not ముందు is కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Can I ___ a message?",
      te: "ఏమైనా చెప్పాలా? మెసేజ్ రాసుకోనా?",
      options: ["take", "keep", "do"],
      answer: 0,
      why: {
        en: "To write down a message for someone, English says take a message.",
        te: "వేరేవాళ్ళ కోసం మెసేజ్ రాసుకోవడాన్ని ఇంగ్లీష్‌లో take a message అంటారు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Padma says on the phone: She will be back at six. What does it mean?",
        te: "పద్మ గారు ఫోన్‌లో She will be back at six అన్నారు. అర్థం ఏంటి?",
      },
      options: ["She will come home at six.", "She left home at six.", "She will call at six."],
      answer: 0,
      why: {
        en: "Be back means come back to this place.",
        te: "be back అంటే ఇక్కడికి తిరిగి రావడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Sorry, he is not in home.",
      wrongIndex: 4,
      fix: "Sorry, he is not at home.",
      why: {
        en: "Telugu says ఇంట్లో, but English says at home, not in home.",
        te: "తెలుగులో 'ఇంట్లో' అన్నా, ఇంగ్లీష్‌లో in home కాదు, at home.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The caller wants Mohan. He is out. Offer to take a message.",
        te: "ఫోన్ చేసినవాళ్ళకి మోహన్ గారు కావాలి. ఆయన బయటికి వెళ్ళారు. మెసేజ్ తీసుకుంటామనండి.",
      },
      expected: ["He's not at home. Can I take a message?", "Can I take a message?", "He is not here. Can I take a message?"],
      options: ["He's not at home. Can I take a message?", "He not at home. Can I take a message?", "He's not at home. Call some other day."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You called Sita, but she is out. Ask them to tell her you called.",
        te: "మీరు సీత గారికి ఫోన్ చేశారు, ఆవిడ లేరు. మీరు ఫోన్ చేశారని ఆవిడకి చెప్పమనండి.",
      },
      expected: ["Please tell her Kiran called.", "Please tell her Sai called.", "Please tell her I called."],
      options: ["Please tell her Kiran called.", "Please say her Kiran called.", "Please tell her Kiran is calling."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A message for a neighbour", te: "పక్కింటివారికి మెసేజ్" },
    scene: {
      en: "Your neighbour Narayana gave your number to his friends. Today his friend Imran calls, but Narayana is out.",
      te: "మీ పక్కింటి నారాయణ గారు తన స్నేహితులకి మీ నంబర్ ఇచ్చారు. ఈ రోజు ఆయన స్నేహితుడు ఇమ్రాన్ ఫోన్ చేశారు, కానీ నారాయణ గారు బయటికి వెళ్ళారు.",
    },
    partner: { en: "Imran (Narayana's friend)", te: "ఇమ్రాన్ (నారాయణ గారి స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "message", label: { en: "Taking a message", te: "మెసేజ్ తీసుకోవడం" } }],
    turns: [
      {
        partner: "Hello, may I speak to Narayana? It's urgent.",
        te: "హలో, నారాయణ గారితో మాట్లాడొచ్చా? అర్జెంట్ అండీ.",
        hint: { en: "Say he is not at home, and offer to take a message.", te: "ఆయన ఇంట్లో లేరని చెప్పి, మెసేజ్ తీసుకుంటామనండి." },
        replies: [
          { say: "Sorry, he's not at home. Can I take a message?", good: true, skill: "message" },
          { say: "Sorry, he not at home. Can I take a message?", good: false, skill: "message", fixIt: "be" },
          {
            say: "He's not here. Don't call this number.",
            good: false,
            skill: "message",
            react: { en: "Oh, sorry! He gave me this number.", te: "అయ్యో, sorry అండీ! ఆయనే ఈ నంబర్ ఇచ్చారు." },
          },
        ],
      },
      {
        partner: "Yes, please. This is Imran, his friend.",
        te: "అవునండీ. నేను ఇమ్రాన్‌ని, ఆయన స్నేహితుడిని.",
        hint: { en: "Say okay, and ask what the message is.", te: "సరే అని, మెసేజ్ ఏంటో అడగండి." },
        replies: [
          { say: "Okay. What is the message?", good: true, skill: "message" },
          { say: "Okay. What the message is?", good: false, skill: "message", fixIt: "question" },
        ],
      },
      {
        partner: "Please ask him to call me tonight.",
        te: "ఈ రాత్రికి నాకు ఫోన్ చేయమని ఆయనకి చెప్పండి.",
        hint: { en: "Promise to pass it on to him.", te: "ఆయనకి తప్పకుండా చెప్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "Okay, I'll tell him.", good: true, skill: "message" },
          { say: "Sure, I'll remind him.", good: true, skill: "message" },
          { say: "Okay, I'll say him.", good: false, skill: "message" },
        ],
      },
      {
        partner: "Thank you so much. Bye!",
        te: "చాలా థాంక్స్ అండీ. ఉంటాను!",
        hint: { en: "Answer his thanks, and say goodbye.", te: "ఆయన థాంక్స్‌కి జవాబు చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "You're welcome. Bye!", good: true },
          { say: "Okay, bye. Next time call him directly.", good: false },
        ],
      },
    ],
  },
};
