import type { Lesson } from "../../types";

/** Week 29, Day 3 (CURRICULUM §4): phone menus (IVR) — Press one for English; noting a complaint number said as digits. */
export const day: Lesson = {
  id: "press-one-for-english",
  kind: "lesson",
  title: { en: "Press One for English", te: "IVR మెనూ" },
  subtitle: "phone menus and complaint numbers",
  summary: {
    en: "Learn to get through a customer care menu: Press one for English. Your complaint number is four five two one.",
    te: "కస్టమర్ కేర్ మెనూ దాటడం నేర్చుకుందాం: Press one for English. Your complaint number is four five two one.",
  },
  seo: {
    title: "Customer Care Phone Menus in English for Telugu Speakers",
    description:
      "Understand Press one for English, talk to an agent and note your complaint number. Simple lessons for Telugu speakers on customer care calls.",
  },
  pattern: [
    { text: "Press", role: "action" },
    { text: "one", role: "what" },
    { text: "for English", role: "what" },
  ],
  core: [
    { en: "Press one for English.", te: "ఇంగ్లీష్ కోసం ఒకటి నొక్కండి.", extra: ["on"] },
    { en: "Your complaint number is four five two one.", te: "మీ complaint నంబర్ 4521.", extra: ["are"] },
    { en: "I want to talk to an agent.", te: "నేను ఏజెంట్‌తో మాట్లాడాలి.", extra: ["a"] },
    { en: "Can you repeat the number, please?", te: "నంబర్ మళ్ళీ ఒకసారి చెప్తారా?", extra: ["again"] },
    { en: "I have noted the complaint number.", te: "complaint నంబర్ రాసుకున్నాను.", extra: ["note"] },
    { en: "Press star to go back to the main menu.", te: "మెయిన్ మెనూకి వెనక్కి వెళ్ళాలంటే star నొక్కండి.", extra: ["going"] },
    { en: "We have noted your complaint.", te: "మీ complaint నమోదు చేసుకున్నాం.", extra: ["has"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Keep a pen and paper next to your phone, to note complaint numbers.",
    te: "complaint నంబర్లు రాసుకోవడానికి మీ ఫోన్ పక్కన ఒక పెన్ను, కాగితం పెట్టుకోండి.",
  },
  words: [
    { en: "complaint number", te: "కంప్లైంట్ నంబర్" },
    { en: "agent", te: "ఏజెంట్ (ఫోన్‌లో మాట్లాడే మనిషి)" },
    { en: "main menu", te: "మెయిన్ మెనూ, మొదటి జాబితా" },
    { en: "star", te: "స్టార్ బటన్" },
    { en: "hash", te: "హ్యాష్ బటన్" },
  ],
  grammar: ["imperatives", "present-perfect"],
  topics: ["phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Listen, then press", te: "విని, నొక్కండి" },
      body: {
        en: "A recorded voice gives choices: Press one for English. Press two for complaints. Wait for your choice, then press that number. Write down the complaint number they give you.",
        te: "రికార్డ్ చేసిన గొంతు ఎంపికలు చెప్తుంది: Press one for English, Press two for complaints. మీకు కావలసింది వచ్చాక ఆ నంబర్ నొక్కండి. వాళ్ళు ఇచ్చే complaint నంబర్ రాసుకోండి.",
      },
      bridge: {
        te: ["ఇంగ్లీష్ కోసం", "ఒకటి", "నొక్కండి"],
        en: [
          { text: "Press", role: "action" },
          { text: "one", role: "what" },
          { text: "for English", role: "what" },
        ],
      },
      examples: [
        { en: "Press one for English.", te: "ఇంగ్లీష్ కోసం ఒకటి నొక్కండి." },
        { en: "I want to talk to an agent.", te: "నేను ఏజెంట్‌తో మాట్లాడాలి." },
        { en: "Can you repeat the number, please?", te: "నంబర్ మళ్ళీ ఒకసారి చెప్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the voice says", te: "రికార్డ్ గొంతు ఏమంటుంది" },
      items: [
        {
          form: "Press one for …",
          useFor: { en: "Choose by pressing that number.", te: "ఆ నంబర్ నొక్కి ఎంచుకోండి." },
          example: { en: "Press one for English.", te: "ఇంగ్లీష్ కోసం ఒకటి నొక్కండి." },
        },
        {
          form: "Press star / Press hash",
          useFor: { en: "Star often goes back; hash often says yes to your choice.", te: "star తో మామూలుగా వెనక్కి; hash తో మీ ఎంపిక ఖాయం." },
          example: { en: "Press star to go back to the main menu.", te: "మెయిన్ మెనూకి వెనక్కి వెళ్ళాలంటే star నొక్కండి." },
        },
        {
          form: "Your complaint number is …",
          useFor: { en: "Write it down; you need it later.", te: "రాసుకోండి; తర్వాత అవసరం అవుతుంది." },
          example: { en: "Your complaint number is four five two one.", te: "మీ complaint నంబర్ 4521." },
        },
        {
          form: "We have noted …",
          useFor: { en: "Your complaint is with them now.", te: "మీ complaint వాళ్ళ దగ్గర నమోదైంది." },
          example: { en: "We have noted your complaint.", te: "మీ complaint నమోదు చేసుకున్నాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Can you repeat again?",
      right: "Can you repeat that, please?",
      why: {
        en: "Repeat already means say again, so again is extra; Telugu మళ్ళీ చెప్పండి makes us add it.",
        te: "repeat అంటేనే మళ్ళీ చెప్పడం; again అదనం. 'మళ్ళీ చెప్పండి' వల్ల again చేర్చేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I want to talk to agent.",
      right: "I want to talk to an agent.",
      why: {
        en: "One person needs a or an, and agent starts with a vowel sound, so an.",
        te: "ఒక్క మనిషి అంటే a లేదా an కావాలి; agent అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే an.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      say: "Press one for English. Press two for Telugu.",
      prompt: { en: "Listen. You want English. What do you press?", te: "వినండి. మీకు ఇంగ్లీష్ కావాలి. ఏ నంబర్ నొక్కుతారు?" },
      options: ["One", "Two", "Star"],
      answer: 0,
      why: {
        en: "The voice gives one for English and two for Telugu.",
        te: "ఇంగ్లీష్‌కి ఒకటి, తెలుగుకి రెండు అని గొంతు చెప్పింది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Press two ___ complaints.",
      te: "complaints కోసం రెండు నొక్కండి.",
      options: ["for", "to", "in"],
      answer: 0,
      why: {
        en: "Each choice in the menu takes for; Telugu కోసం becomes for.",
        te: "మెనూలో ప్రతి ఎంపికకి for వస్తుంది; తెలుగు 'కోసం' ఇంగ్లీష్‌లో for.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "VM-SUNPWR",
      lines: [
        "Dear customer, we have noted your complaint.",
        "Complaint No. 4521",
        "A technician will visit within 48 hours.",
        "Customer care: 1800 425 1234",
      ],
      prompt: { en: "What is your complaint number?", te: "మీ complaint నంబర్ ఏది?" },
      options: ["4521", "1800", "48"],
      answer: 0,
      why: {
        en: "The number after Complaint No. is the one to note down.",
        te: "Complaint No. తర్వాత ఉన్న నంబరే రాసుకోవాల్సింది.",
      },
      say: "Your complaint number is four five two one.",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Your complaint number are four five two one.",
      wrongIndex: 3,
      fix: "Your complaint number is four five two one.",
      why: {
        en: "It is one number, so use is; its four digits do not make it many.",
        te: "అది ఒక్క నంబరే, అందుకే is; నాలుగు అంకెలు ఉన్నా అది ఒక్కటే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The agent says the number too fast. Ask her to say it again.",
        te: "ఏజెంట్ నంబర్ చాలా వేగంగా చెప్పారు. మళ్ళీ చెప్పమని అడగండి.",
      },
      expected: ["Can you repeat the number, please?", "Can you say the number again, please?", "Sorry, can you repeat that?"],
      options: ["Can you repeat the number, please?", "Can you repeat again the number?", "Repeat number."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "You want to talk to a person, not the machine.",
        te: "మీకు మెషీన్ కాదు, ఒక మనిషితో మాట్లాడాలి.",
      },
      expected: ["I want to talk to an agent.", "Can I talk to an agent, please?"],
      options: ["I want to talk to an agent.", "I am wanting to talk to an agent.", "I want talk to agent."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Through the menu", te: "మెనూ దాటి" },
    scene: {
      en: "Your water purifier has stopped working. You pressed one for English, then two for complaints. Usha, an agent, answers.",
      te: "మీ water purifier పని చేయడం ఆగిపోయింది. ఇంగ్లీష్‌కి ఒకటి, complaints కి రెండు నొక్కారు. ఏజెంట్ ఉష మాట్లాడుతున్నారు.",
    },
    partner: { en: "Usha (customer care agent)", te: "ఉష (కస్టమర్ కేర్ ఏజెంట్)" },
    skills: [
      { id: "fault", label: { en: "Saying what is wrong", te: "సమస్య చెప్పడం" } },
      { id: "number", label: { en: "The complaint number", te: "complaint నంబర్" } },
    ],
    turns: [
      {
        partner: "Thank you for waiting. How can I help?",
        te: "ఎదురుచూసినందుకు థాంక్స్. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Say what has happened to your water purifier.", te: "మీ water purifier కి ఏమైందో చెప్పండి." },
        replies: [
          { say: "My water purifier has stopped working.", good: true, skill: "fault" },
          { say: "My water purifier is stopped working.", good: false, skill: "fault" },
        ],
      },
      {
        partner: "I'm sorry. Is this your registered number?",
        te: "అయ్యో, sorry. ఇది మీ రిజిస్టర్డ్ నంబరేనా?",
        hint: { en: "Say yes, it is your registered number.", te: "అవును, ఇదే మీ రిజిస్టర్డ్ నంబర్ అని చెప్పండి." },
        replies: [
          { say: "Yes, this is my registered number.", good: true, skill: "number" },
          {
            say: "Why all these questions? Just fix it!",
            good: false,
            skill: "number",
            react: { en: "I need it to find your account, please.", te: "మీ account చూడాలంటే ఇది కావాలి అండీ." },
          },
        ],
      },
      {
        partner: "We have noted it. It is four five two one.",
        te: "నమోదు చేసుకున్నాం. మీ నంబర్ 4521.",
        hint: { en: "You did not catch it. Ask her to say the number again.", te: "మీకు సరిగ్గా వినపడలేదు. నంబర్ మళ్ళీ చెప్పమని అడగండి." },
        replies: [
          { say: "Sorry, can you repeat the number, please?", good: true, skill: "number" },
          { say: "Sorry, can you repeat again?", good: false, skill: "number", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Sure. Four five two one. A technician will call you.",
        te: "తప్పకుండా. 4521. ఒక technician మీకు ఫోన్ చేస్తారు.",
        hint: { en: "Say you have written it down, and thank her.", te: "రాసుకున్నారని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "I have noted it. Thank you.", good: true, skill: "number" },
          { say: "I have note it. Thank you.", good: false, skill: "number" },
        ],
      },
    ],
  },
};
