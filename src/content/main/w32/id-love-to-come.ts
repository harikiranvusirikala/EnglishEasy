import type { Lesson } from "../../types";

/** Week 32, Day 4 (CURRICULUM §4): accepting and declining invitations — Thank you, I'd love to come. Sorry, I can't make it. */
export const day: Lesson = {
  id: "id-love-to-come",
  kind: "lesson",
  title: { en: "I'd Love to Come", te: "వస్తాను / రాలేను" },
  subtitle: "accepting and declining invitations",
  summary: {
    en: "Learn to say yes or no to an invitation kindly: Thank you, I'd love to come. Sorry, I can't make it.",
    te: "ఆహ్వానానికి మర్యాదగా వస్తానని లేదా రాలేనని చెప్పడం నేర్చుకుందాం: Thank you, I'd love to come. Sorry, I can't make it.",
  },
  seo: {
    title: "Accepting and Declining Invitations in English for Telugu Speakers",
    description:
      "Say Thank you, I'd love to come and Sorry, I can't make it. Simple lessons for Telugu speakers on replying to invitations kindly.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "'d love to come", role: "action" },
    { text: "to the housewarming", role: "what" },
  ],
  core: [
    { en: "Thank you, I'd love to come.", te: "థాంక్యూ, తప్పకుండా వస్తాను.", extra: ["coming"] },
    { en: "Sorry, I can't make it on Sunday.", te: "Sorry అండీ, ఆదివారం రాలేను.", extra: ["in"] },
    { en: "I'm sorry, I have a hospital appointment.", te: "Sorry అండీ, నాకు హాస్పిటల్‌లో appointment ఉంది.", extra: ["having"] },
    { en: "What time is the function?", te: "ఫంక్షన్ ఎన్ని గంటలకి?", extra: ["does"] },
    { en: "Thank you for the invitation.", te: "పిలిచినందుకు థాంక్యూ.", extra: ["to"] },
    { en: "Can I bring my cousin along?", te: "నాతో పాటు మా కజిన్‌ని తీసుకురావచ్చా?", extra: ["with"] },
    { en: "I'll come for the pooja in the morning.", te: "పొద్దున్న పూజకి వస్తాను.", extra: ["on"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say both replies aloud once: I'd love to come. Sorry, I can't make it.",
    te: "రెండు జవాబులూ ఒకసారి గట్టిగా చెప్పండి: I'd love to come. Sorry, I can't make it.",
  },
  words: [
    { en: "invitation", te: "ఆహ్వానం, పిలుపు" },
    { en: "housewarming", te: "గృహప్రవేశం" },
    { en: "reason", te: "కారణం" },
    { en: "venue", te: "జరిగే చోటు" },
    { en: "presence", te: "రాక, హాజరు" },
  ],
  grammar: ["would-like", "can-could", "politeness-softening"],
  topics: ["festivals", "people", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Yes or no, kindly", te: "వస్తానన్నా, రాలేనన్నా మర్యాదగా" },
      body: {
        en: "To say yes, thank them and say I'd love to come. To say no, say sorry, then give a reason: Sorry, I can't make it. I have a hospital appointment. A reason makes a no kind.",
        te: "వస్తానంటే: థాంక్స్ చెప్పి I'd love to come అనండి. రాలేకపోతే: ముందు sorry, తర్వాత కారణం: Sorry, I can't make it. I have a hospital appointment. కారణం చెప్తే మర్యాదగా ఉంటుంది.",
      },
      bridge: {
        te: ["నేను", "గృహప్రవేశానికి", "తప్పకుండా వస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "'d love to come", role: "action" },
          { text: "to the housewarming", role: "what" },
        ],
      },
      examples: [
        { en: "Thank you, I'd love to come.", te: "థాంక్యూ, తప్పకుండా వస్తాను." },
        { en: "Sorry, I can't make it on Sunday.", te: "Sorry అండీ, ఆదివారం రాలేను." },
        { en: "I'm sorry, I have a hospital appointment.", te: "Sorry అండీ, నాకు హాస్పిటల్‌లో appointment ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying yes, saying no", te: "వస్తాను, రాలేను" },
      items: [
        {
          form: "I'd love to come.",
          useFor: { en: "A warm yes.", te: "సంతోషంగా ఒప్పుకోవడానికి." },
          example: { en: "Thank you, I'd love to come.", te: "థాంక్యూ, తప్పకుండా వస్తాను." },
        },
        {
          form: "I can't make it.",
          useFor: { en: "A soft no: you can't be there.", te: "మెత్తగా 'రాలేను' అనడానికి." },
          example: { en: "Sorry, I can't make it on Sunday.", te: "Sorry అండీ, ఆదివారం రాలేను." },
        },
        {
          form: "I have …",
          useFor: { en: "The reason for your no.", te: "రాలేకపోవడానికి కారణం." },
          example: { en: "I'm sorry, I have a hospital appointment.", te: "Sorry అండీ, నాకు హాస్పిటల్‌లో appointment ఉంది." },
        },
        {
          form: "What time is …?",
          useFor: { en: "Asking the details before you go.", te: "వెళ్ళే ముందు వివరాలు అడగడానికి." },
          example: { en: "What time is the function?", te: "ఫంక్షన్ ఎన్ని గంటలకి?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Sorry, I can't able to come.",
      right: "Sorry, I can't come.",
      why: {
        en: "Can't and not able mean the same thing, so use only one of them.",
        te: "can't, not able రెండింటికీ ఒకటే అర్థం; ఒక్కటే వాడండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "No. I am busy.",
      right: "Sorry, I'm busy that day.",
      why: {
        en: "A plain no sounds rude to the person who invited you. Start with sorry.",
        te: "పిలిచిన వారికి ఉత్త 'No' మొరటుగా వినిపిస్తుంది. Sorry తో మొదలుపెట్టండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend Grace invites you to her housewarming. Say yes warmly.",
        te: "మీ స్నేహితురాలు గ్రేస్ గృహప్రవేశానికి పిలిచారు. సంతోషంగా వస్తానని చెప్పండి.",
      },
      options: ["Thank you, I'd love to come.", "Thank you, I'd love coming.", "Thank you, I love to come."],
      answer: 0,
      why: {
        en: "For one invitation, use I'd love to; I love to means every time, as a habit.",
        te: "ఒక్క ఆహ్వానానికి I'd love to; I love to అంటే ఎప్పుడూ, అలవాటుగా అని అర్థం.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Housewarming Invitation",
      lines: [
        "Venkat and family invite you",
        "to our housewarming.",
        "Sunday, 14 December",
        "Pooja at 7 am, lunch at 12:30 pm",
        "Venue: 4-12, Gandhi Nagar, Warangal",
        "Your presence is our blessing.",
      ],
      prompt: {
        en: "You want to see the pooja. What time should you reach?",
        te: "మీరు పూజ చూడాలనుకుంటున్నారు. ఎన్ని గంటలకి చేరుకోవాలి?",
      },
      options: ["Before 7 in the morning", "At 12:30 in the afternoon", "On Saturday evening"],
      answer: 0,
      why: {
        en: "The card says the pooja is at 7 am; lunch comes later, at 12:30.",
        te: "కార్డు మీద పూజ ఉదయం 7 కి అని ఉంది; భోజనం తర్వాత, 12:30 కి.",
      },
      say: "The pooja is at 7 in the morning.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Sorry, I can't make it ___ Sunday.",
      te: "Sorry అండీ, ఆదివారం రాలేను.",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "Days of the week take on; in is for months and years.",
        te: "వారం రోజులకి on వస్తుంది; in నెలలకీ, సంవత్సరాలకీ.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "What time does the function starts?",
      wrongIndex: 5,
      fix: "What time does the function start?",
      why: {
        en: "After does, the verb loses its s, because does already carries it.",
        te: "does లోనే s ఉంది, అందుకే దాని తర్వాత verb కి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour invites you for Bathukamma on Saturday. Say yes warmly.",
        te: "పక్కింటి వారు శనివారం బతుకమ్మకి పిలిచారు. సంతోషంగా వస్తానని చెప్పండి.",
      },
      expected: ["Thank you, I'd love to come.", "I'd love to come.", "Thank you, I'd love to."],
      options: ["Thank you, I'd love to come.", "Thank you, I'd love to coming.", "Okay, okay. I come."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A friend invites you to a wedding, but you have a hospital appointment. Say no kindly.",
        te: "ఒక స్నేహితులు పెళ్ళికి పిలిచారు, కానీ మీకు హాస్పిటల్‌లో appointment ఉంది. మర్యాదగా రాలేనని చెప్పండి.",
      },
      expected: [
        "Sorry, I can't make it. I have a hospital appointment.",
        "I'm sorry, I can't come. I have a hospital appointment.",
        "Sorry, I can't come.",
      ],
      options: [
        "Sorry, I can't make it. I have a hospital appointment.",
        "Sorry, I can't able to come. I have an appointment.",
        "No. I am not coming to the wedding.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A housewarming invitation", te: "గృహప్రవేశం పిలుపు" },
    scene: {
      en: "Your neighbour Krishna comes to your door with a housewarming invitation card.",
      te: "పక్కింటి కృష్ణ గారు గృహప్రవేశం ఆహ్వాన పత్రికతో మీ ఇంటికి వచ్చారు.",
    },
    partner: { en: "Krishna (neighbour)", te: "కృష్ణ (పక్కింటి ఆయన)" },
    voice: "b",
    skills: [{ id: "reply", label: { en: "Replying to an invitation", te: "ఆహ్వానానికి జవాబు" } }],
    turns: [
      {
        partner: "Hello! We have built a new house.",
        te: "నమస్కారం! మేము కొత్త ఇల్లు కట్టుకున్నాం.",
        hint: { en: "Congratulate him on the house.", te: "కొత్త ఇంటికి ఆయనకి అభినందనలు చెప్పండి." },
        replies: [
          { say: "Congratulations on your new house!", good: true, skill: "reply" },
          { say: "Congratulations for your new house!", good: false, skill: "reply", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thank you! The housewarming is on Sunday. Please come.",
        te: "థాంక్యూ! ఆదివారం గృహప్రవేశం. తప్పకుండా రండి.",
        hint: { en: "Thank him, and say yes warmly.", te: "థాంక్స్ చెప్పి, సంతోషంగా వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you, I'd love to come.", good: true, skill: "reply" },
          { say: "Thank you, I'd love coming.", good: false, skill: "reply" },
          {
            say: "Will there be lunch? Then I'll come.",
            good: false,
            skill: "reply",
            react: { en: "Ha! Yes, there is lunch for everyone.", te: "హహ! అవునండీ, అందరికీ భోజనం ఉంది." },
          },
        ],
      },
      {
        partner: "Very happy! The pooja is early in the morning.",
        te: "చాలా సంతోషం! పూజ పొద్దున్నే ఉంది.",
        hint: { en: "Ask him the time of the pooja.", te: "పూజ ఎన్ని గంటలకో అడగండి." },
        replies: [
          { say: "What time does the pooja start?", good: true, skill: "reply" },
          { say: "What time is the pooja?", good: true, skill: "reply" },
          { say: "What time the pooja starts?", good: false, skill: "reply", fixIt: "question" },
        ],
      },
      {
        partner: "At seven. Lunch is at half past twelve.",
        te: "ఏడు గంటలకి. భోజనం పన్నెండున్నరకి.",
        hint: { en: "Say you'll come for the pooja, and thank him for the card.", te: "పూజకి వస్తానని చెప్పి, పిలిచినందుకు థాంక్స్ చెప్పండి." },
        replies: [
          { say: "I'll come for the pooja. Thank you for the invitation.", good: true, skill: "reply" },
          { say: "I'll come for pooja. Thanks for invitation.", good: false, skill: "reply", fixIt: "article" },
        ],
      },
    ],
  },
};
