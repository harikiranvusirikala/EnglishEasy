import type { Lesson } from "../../types";

/** Week 53, Day 1 (CURRICULUM §5): the present perfect continuous with for / since — I've been waiting here for an hour. */
export const day: Lesson = {
  id: "ive-been-waiting-for-an-hour",
  kind: "lesson",
  title: { en: "I've Been Waiting for an Hour", te: "గంట నుంచి ఎదురుచూస్తున్నాను" },
  subtitle: "I've been … -ing for / since …",
  summary: {
    en: "Learn to say how long something has been going on: I've been waiting here for an hour. We have been standing in this line since nine.",
    te: "ముందే మొదలై ఇంకా జరుగుతున్న పని ఎంతసేపట్నుంచో చెప్పడం నేర్చుకుందాం: I've been waiting here for an hour. We have been standing in this line since nine.",
  },
  seo: {
    title: "Saying How Long You Have Been Waiting in English for Telugu Speakers",
    description:
      "Say I've been waiting here for an hour and We have been standing in this line since nine. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I've", role: "who" },
    { text: "been waiting", role: "action" },
    { text: "here", role: "what" },
    { text: "for an hour", role: "when" },
  ],
  core: [
    { en: "I've been waiting here for an hour.", te: "నేను గంట నుంచి ఇక్కడ ఎదురుచూస్తున్నాను.", extra: ["since"] },
    { en: "We have been standing in this line since nine.", te: "తొమ్మిది నుంచి మేము ఈ లైన్లో నిలబడి ఉన్నాం.", extra: ["from"] },
    { en: "The doctor has been seeing patients since eight.", te: "డాక్టర్ గారు ఎనిమిది నుంచి పేషెంట్లని చూస్తున్నారు.", extra: ["have"] },
    { en: "She has been waiting for two hours.", te: "ఆవిడ రెండు గంటలుగా ఎదురుచూస్తున్నారు.", extra: ["hour"] },
    { en: "We've been sitting here for half an hour.", te: "మేము అరగంట నుంచి ఇక్కడ కూర్చుని ఉన్నాం.", extra: ["sit"] },
    { en: "The line hasn't moved for twenty minutes.", te: "ఇరవై నిమిషాలుగా లైన్ అస్సలు కదలలేదు.", extra: ["since"] },
    { en: "I've been feeling dizzy since this morning.", te: "ఈ రోజు పొద్దున్నుంచి నాకు కళ్ళు తిరుగుతున్నాయి.", extra: ["from"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud one thing you have been doing since morning: I've been … since …",
    te: "పొద్దున్నుంచి మీరు చేస్తూ ఉన్న ఒక పనిని గట్టిగా చెప్పండి: I've been … since …",
  },
  words: [
    { en: "wait", te: "ఎదురుచూడటం, వేచి ఉండటం" },
    { en: "outpatient", te: "ఔట్‌పేషెంట్ (OP): ఆసుపత్రిలో చేరకుండా చూపించుకునేవారు" },
    { en: "my turn", te: "నా వంతు" },
    { en: "stand in line", te: "లైన్లో నిలబడటం" },
    { en: "half an hour", te: "అరగంట" },
  ],
  grammar: ["present-perfect-continuous", "present-perfect", "prepositions"],
  topics: ["doctor", "health", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Started before, still going on", te: "ముందే మొదలై, ఇంకా జరుగుతోంది" },
      body: {
        en: "For something that started earlier and is still going on, say have been or has been + -ing: I've been waiting for an hour.",
        te: "ముందే మొదలై ఇప్పటికీ జరుగుతున్న పనికి have been లేదా has been + -ing వాడండి. తెలుగులో 'గంట నుంచి ఎదురుచూస్తున్నాను' అంటాం: I've been waiting for an hour.",
      },
      bridge: {
        te: ["నేను", "గంట నుంచి", "ఇక్కడ", "ఎదురుచూస్తున్నాను"],
        en: [
          { text: "I've", role: "who" },
          { text: "been waiting", role: "action" },
          { text: "here", role: "what" },
          { text: "for an hour", role: "when" },
        ],
      },
      examples: [
        { en: "I've been waiting here for an hour.", te: "నేను గంట నుంచి ఇక్కడ ఎదురుచూస్తున్నాను." },
        { en: "We have been standing in this line since nine.", te: "తొమ్మిది నుంచి మేము ఈ లైన్లో నిలబడి ఉన్నాం." },
        { en: "The doctor has been seeing patients since eight.", te: "డాక్టర్ గారు ఎనిమిది నుంచి పేషెంట్లని చూస్తున్నారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "for or since?", te: "for వాడాలా, since వాడాలా?" },
      items: [
        {
          form: "for + how long",
          useFor: { en: "A length of time: an hour, two days.", te: "ఎంతసేపు అనేది: an hour, two days." },
          example: { en: "She has been waiting for two hours.", te: "ఆవిడ రెండు గంటలుగా ఎదురుచూస్తున్నారు." },
        },
        {
          form: "since + the start",
          useFor: { en: "The time it started: nine, Monday, this morning.", te: "మొదలైన టైమ్: nine, Monday, this morning." },
          example: { en: "I've been feeling dizzy since this morning.", te: "ఈ రోజు పొద్దున్నుంచి నాకు కళ్ళు తిరుగుతున్నాయి." },
        },
        {
          form: "I've been + -ing",
          useFor: { en: "Something still going on now.", te: "ఇప్పటికీ జరుగుతూనే ఉన్న పని." },
          example: { en: "We've been sitting here for half an hour.", te: "మేము అరగంట నుంచి ఇక్కడ కూర్చుని ఉన్నాం." },
        },
        {
          form: "hasn't + moved + for",
          useFor: { en: "Something that has not happened for a while.", te: "కొంతసేపట్నుంచి జరగని పని." },
          example: { en: "The line hasn't moved for twenty minutes.", te: "ఇరవై నిమిషాలుగా లైన్ అస్సలు కదలలేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am waiting here for an hour.",
      right: "I've been waiting here for an hour.",
      why: {
        en: "Telugu uses the -ing verb here, but with for or since, English needs have been + -ing.",
        te: "తెలుగులో 'ఎదురుచూస్తున్నాను' అనే అంటాం; కానీ for, since ఉంటే ఇంగ్లీష్‌లో have been + -ing కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We have been standing in this line from nine.",
      right: "We have been standing in this line since nine.",
      why: {
        en: "Telugu నుంచి sounds like from, but a starting time with have been takes since.",
        te: "తెలుగు 'నుంచి' కి from అనిపిస్తుంది; కానీ have been తో మొదలైన టైమ్ చెప్తే since వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "The nurse asks how long you have been here. You came an hour ago, and you are still waiting. What do you say?",
        te: "ఎంతసేపట్నుంచి ఉన్నారని నర్స్ గారు అడుగుతున్నారు. మీరు గంట క్రితం వచ్చారు, ఇంకా ఎదురుచూస్తున్నారు. ఏమంటారు?",
      },
      options: ["I've been waiting for an hour.", "I am waiting since one hour.", "I have been wait for an hour."],
      answer: 0,
      why: {
        en: "You are still waiting, so use have been + -ing; a length of time takes for.",
        te: "మీరు ఇంకా ఎదురుచూస్తున్నారు, అందుకే have been + -ing; ఎంతసేపు అనేదానికి for.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "OP Block, Counter 2",
      lines: ["Now serving: Token 36", "Dr Kavitha, General Medicine", "Consultation: 9 am to 1 pm", "Senior citizens, please show your ID at the desk."],
      prompt: { en: "This board is at the OP block. Until what time does the doctor see patients?", te: "ఈ బోర్డు OP బ్లాక్ దగ్గర ఉంది. డాక్టర్ గారు ఎన్ని గంటల వరకు పేషెంట్లని చూస్తారు?" },
      options: ["1 pm", "9 am", "2 pm"],
      answer: 0,
      why: {
        en: "The third line gives the consultation hours; the second time is when they end.",
        te: "మూడో లైన్‌లో consultation టైమ్ ఉంది; రెండో టైమ్ అది అయిపోయే టైమ్.",
      },
      say: "Consultation: 9 am to 1 pm.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Another patient asks if the doctor has come. The doctor's room is still empty. What do you say?",
        te: "డాక్టర్ గారు వచ్చారా అని ఇంకో పేషెంట్ అడుగుతున్నారు. డాక్టర్ గది ఇంకా ఖాళీగానే ఉంది. ఏమంటారు?",
      },
      options: ["The doctor is not here yet.", "The doctor not here yet.", "The doctor is not come yet."],
      answer: 0,
      why: {
        en: "English needs is before not here; Telugu రాలేదు has no such word inside it.",
        te: "not here ముందు ఇంగ్లీష్‌లో is కావాలి; తెలుగు 'రాలేదు' లో అలాంటి పదం ఉండదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "She has been waiting for two hour.",
      wrongIndex: 6,
      fix: "She has been waiting for two hours.",
      why: {
        en: "After two, the word needs s, just as Telugu says గంటలు for more than one.",
        te: "two తర్వాత పదానికి s కావాలి; తెలుగులో కూడా ఒకటి కంటే ఎక్కువైతే 'గంటలు' అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A nurse asks: How long have you been waiting? You came at nine. Answer.",
        te: "How long have you been waiting? అని నర్స్ గారు అడుగుతున్నారు. మీరు తొమ్మిదింటికి వచ్చారు. జవాబు చెప్పండి.",
      },
      expected: ["I've been waiting since nine.", "I have been waiting since nine.", "Since nine o'clock."],
      options: ["I've been waiting since nine.", "I am waiting from nine.", "I have been wait since nine."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Tell the nurse you have had a cough since Monday, and it is still there.",
        te: "సోమవారం నుంచి దగ్గు వస్తోందని, ఇంకా తగ్గలేదని నర్స్ గారికి చెప్పండి.",
      },
      expected: ["I've been coughing since Monday.", "I have been coughing since Monday.", "I've had a cough since Monday."],
      options: ["I've been coughing since Monday.", "I am coughing since Monday.", "I've been coughing for Monday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "In the OP queue", te: "OP క్యూలో" },
    scene: {
      en: "You are at the hospital for a check-up. You have been in the outpatient queue for a long time. Usha, the nurse, comes to you.",
      te: "మీరు check-up కోసం ఆసుపత్రికి వచ్చారు. చాలాసేపట్నుంచి OP క్యూలో ఉన్నారు. నర్స్ ఉష గారు మీ దగ్గరికి వచ్చారు.",
    },
    partner: { en: "Usha (the OP nurse)", te: "ఉష (OP నర్స్)" },
    skills: [
      { id: "how-long", label: { en: "Saying how long", te: "ఎంతసేపో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Please show me your OP token.",
        te: "గుడ్ మార్నింగ్. మీ OP టోకెన్ చూపించండి.",
        hint: { en: "Greet her, give it to her, and say the number: thirty-nine.", te: "పలకరించి, టోకెన్ ఇచ్చి, నంబర్ చెప్పండి: ముప్పై తొమ్మిది." },
        replies: [
          { say: "Good morning. Here's my token. It's thirty-nine.", good: true, skill: "polite" },
          { say: "Good morning. Here's token. Thirty-nine.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "Thank you. How long have you been waiting?",
        te: "థాంక్యూ. మీరు ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారు?",
        hint: { en: "Tell her how long: you came at half past eight.", te: "ఎంతసేపో చెప్పండి: మీరు ఎనిమిదిన్నరకి వచ్చారు." },
        replies: [
          { say: "I've been waiting since half past eight.", good: true, skill: "how-long" },
          { say: "I've been here since half past eight.", good: true, skill: "how-long" },
          { say: "I am waiting since half past eight.", good: false, skill: "how-long", fixIt: "duration" },
        ],
      },
      {
        partner: "Sorry, the doctor has an emergency. Your turn will come in twenty minutes.",
        te: "సారీ అండీ, డాక్టర్ గారికి ఒక ఎమర్జెన్సీ వచ్చింది. ఇంకో ఇరవై నిమిషాల్లో మీ వంతు వస్తుంది.",
        hint: { en: "Say that is okay, but tell her you have felt dizzy since morning.", te: "పర్లేదని చెప్పి, పొద్దున్నుంచి కళ్ళు తిరుగుతున్నాయని ఆవిడకి చెప్పండి." },
        replies: [
          { say: "That's okay. But I've been feeling dizzy since morning.", good: true, skill: "how-long" },
          {
            say: "Twenty more minutes? This hospital is useless!",
            good: false,
            skill: "polite",
            react: { en: "I understand, but please be patient. It's a real emergency.", te: "అర్థమైంది అండీ, కానీ కొంచెం ఓపిక పట్టండి. నిజంగా ఎమర్జెన్సీ." },
          },
        ],
      },
      {
        partner: "Oh! Please sit here. I'll check your BP now.",
        te: "అయ్యో! ఇక్కడ కూర్చోండి. ఇప్పుడే మీ BP చూస్తాను.",
        hint: { en: "Thank her warmly.", te: "ఆవిడకి మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you, that's very kind of you.", good: true, skill: "polite" },
          { say: "Thank you, that very kind of you.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};
