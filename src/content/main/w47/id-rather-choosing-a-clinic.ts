import type { Lesson } from "../../types";

/** Week 47, Day 4 (CURRICULUM §5): would rather + verb; would rather not — choosing a clinic for a check-up with a neighbour. */
export const day: Lesson = {
  id: "id-rather-choosing-a-clinic",
  kind: "lesson",
  title: { en: "I'd Rather", te: "దానికంటే ఇదే మేలు" },
  subtitle: "would rather + verb; would rather not",
  summary: {
    en: "Learn to choose politely: I'd rather see a doctor near home. I'd rather not take an auto in this rain.",
    te: "మర్యాదగా ఎంచుకోవడం నేర్చుకుందాం: I'd rather see a doctor near home. I'd rather not take an auto in this rain.",
  },
  seo: {
    title: "I'd Rather in English for Telugu Speakers",
    description:
      "Say I'd rather see a doctor near home, and I'd rather not take an auto in this rain. Simple lessons for Telugu speakers on choosing politely.",
  },
  pattern: [
    { text: "I'd", role: "who" },
    { text: "rather see", role: "action" },
    { text: "a doctor", role: "what" },
    { text: "near home", role: "what" },
  ],
  core: [
    { en: "I'd rather see a doctor near home.", te: "ఇంటి దగ్గర డాక్టర్‌కి చూపించుకోవడమే మేలు.", extra: ["to"] },
    { en: "I'd rather not take an auto in this rain.", te: "ఈ వర్షంలో ఆటోలో వెళ్ళడం నాకు వద్దు.", extra: ["don't"] },
    { en: "Would you rather go in the morning?", te: "మీకు పొద్దున వెళ్ళడమే బాగుంటుందా?", extra: ["going"] },
    { en: "I'd rather go on Monday morning.", te: "సోమవారం పొద్దున వెళ్ళడమే మేలు.", extra: ["in"] },
    { en: "I'd rather pay a little more for a clean clinic.", te: "శుభ్రంగా ఉండే క్లినిక్ కోసం కొంచెం ఎక్కువ ఇవ్వడమే మేలు.", extra: ["paying"] },
    { en: "I'd rather not wait two hours at the big hospital.", te: "పెద్ద ఆసుపత్రిలో రెండు గంటలు ఎదురుచూడటం నాకు వద్దు.", extra: ["for"] },
    {
      en: "Dr Usha is as good as the city doctors, and her clinic is closer.",
      te: "డాక్టర్ ఉష గారు సిటీ డాక్టర్లంత బాగా చూస్తారు, పైగా ఆవిడ క్లినిక్ దగ్గర.",
      extra: ["than"],
    },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Choose between two things today, and say your choice aloud with I'd rather …",
    te: "ఈ రోజు రెండిట్లో ఒకటి ఎంచుకుని, I'd rather … అని మీ ఎంపిక గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "would rather", te: "… నే మేలు, అదే ఇష్టం" },
    { en: "would rather not", te: "… వద్దు, చేయకపోవడమే మేలు" },
    { en: "consultation fee", te: "డాక్టర్ ఫీజు" },
    { en: "experienced", te: "అనుభవం ఉన్న" },
    { en: "facilities", te: "సౌకర్యాలు, వసతులు" },
  ],
  grammar: ["would-like", "politeness-softening", "comparatives-superlatives"],
  topics: ["doctor", "health", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I'd rather", te: "… నే మేలు" },
      body: {
        en: "To choose politely, say I'd rather and the plain verb: I'd rather see a doctor near home. To say no politely, say I'd rather not.",
        te: "మర్యాదగా ఎంచుకోవాలంటే I'd rather తర్వాత verb అలాగే: I'd rather see (చూపించుకోవడమే మేలు). మర్యాదగా వద్దు అనాలంటే I'd rather not.",
      },
      bridge: {
        te: ["ఇంటి దగ్గర", "డాక్టర్‌కి", "చూపించుకోవడమే మేలు"],
        en: [
          { text: "I'd", role: "who" },
          { text: "rather see", role: "action" },
          { text: "a doctor", role: "what" },
          { text: "near home", role: "what" },
        ],
      },
      examples: [
        { en: "I'd rather see a doctor near home.", te: "ఇంటి దగ్గర డాక్టర్‌కి చూపించుకోవడమే మేలు." },
        { en: "I'd rather not take an auto in this rain.", te: "ఈ వర్షంలో ఆటోలో వెళ్ళడం నాకు వద్దు." },
        { en: "Would you rather go in the morning?", te: "మీకు పొద్దున వెళ్ళడమే బాగుంటుందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "rather or prefer?", te: "rather నా, prefer ఆ?" },
      items: [
        {
          form: "I'd rather + verb",
          useFor: { en: "Your choice this time, with the plain verb.", te: "ఈసారి మీ ఎంపిక; verb మారదు." },
          example: { en: "I'd rather go on Monday morning.", te: "సోమవారం పొద్దున వెళ్ళడమే మేలు." },
        },
        {
          form: "I'd rather not + verb",
          useFor: { en: "Say no politely.", te: "మర్యాదగా వద్దు అనడానికి." },
          example: { en: "I'd rather not wait two hours at the big hospital.", te: "పెద్ద ఆసుపత్రిలో రెండు గంటలు ఎదురుచూడటం నాకు వద్దు." },
        },
        {
          form: "I prefer + -ing",
          useFor: { en: "What you like in general.", te: "మామూలుగా ఏది ఇష్టమో చెప్పడానికి." },
          example: { en: "I prefer walking to the clinic.", te: "క్లినిక్‌కి నడిచి వెళ్ళడమే నాకు ఇష్టం." },
        },
        {
          form: "Would you rather …?",
          useFor: { en: "Ask for someone's choice.", te: "ఎదుటివారి ఎంపిక అడగడానికి." },
          example: { en: "Would you rather go in the morning?", te: "మీకు పొద్దున వెళ్ళడమే బాగుంటుందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I'd rather to see a doctor near home.",
      right: "I'd rather see a doctor near home.",
      why: {
        en: "After I'd rather, the verb stays plain, with no to before it.",
        te: "I'd rather తర్వాత verb అలాగే వస్తుంది; ముందు to రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I'd rather go today evening.",
      right: "I'd rather go this evening.",
      why: {
        en: "Say this evening or this morning; today evening is an Indian habit that others find odd.",
        te: "ఈ సాయంత్రం అంటే this evening; today evening అనేది మన అలవాటు, బయటివాళ్ళకి వింతగా అనిపిస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask your neighbour if the morning is better for her.",
        te: "పొద్దున వెళ్ళడమే బాగుంటుందా అని పక్కింటావిడని అడగండి.",
      },
      options: ["Would you rather go in the morning?", "You would rather go in the morning?", "Would you rather going in the morning?"],
      answer: 0,
      why: {
        en: "In a question, would comes before you, and the verb stays plain.",
        te: "ప్రశ్నలో would, you కంటే ముందు వస్తుంది; verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I'd rather ___ take an auto in this rain.",
      te: "ఈ వర్షంలో ఆటోలో వెళ్ళడం నాకు వద్దు.",
      options: ["not", "don't", "no"],
      answer: 0,
      why: {
        en: "With I'd rather, say no with not alone, never with don't or no.",
        te: "I'd rather తో వద్దు అనాలంటే not ఒక్కటే చాలు; don't, no రావు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Sai Health Clinic",
      lines: ["Dr K. Usha, MBBS", "Health check-ups: 9 am to 1 pm", "Evening OP: 5 pm to 8 pm", "Consultation fee: 300 rupees", "Sunday holiday"],
      prompt: {
        en: "You want a check-up in the morning. When can you go?",
        te: "మీకు పొద్దున check-up చేయించుకోవాలి. ఎప్పుడు వెళ్ళొచ్చు?",
      },
      options: ["Between 9 am and 1 pm", "Between 5 pm and 8 pm", "On Sunday morning"],
      answer: 0,
      why: {
        en: "The board gives morning check-up hours from nine to one, and Sunday is a holiday.",
        te: "board మీద పొద్దున check-ups 9 నుంచి 1 దాకా అని ఉంది; ఆదివారం సెలవు.",
      },
      say: "Health check-ups: 9 am to 1 pm.",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'd not rather take an auto in this rain.",
      wrongIndex: 1,
      fix: "I'd rather not take an auto in this rain.",
      why: {
        en: "Not comes after rather, never before it.",
        te: "not ఎప్పుడూ rather తర్వాతే వస్తుంది; ముందు రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your neighbour asks why you like Dr Usha's clinic. Say it is clean and close to home.",
        te: "డాక్టర్ ఉష గారి క్లినిక్ మీకు ఎందుకు ఇష్టమని పక్కింటివారు అడుగుతున్నారు. శుభ్రంగా ఉంటుందని, ఇంటికి దగ్గరని చెప్పండి.",
      },
      expected: ["It's clean and close to home.", "It is clean and close to home.", "Her clinic is clean and near home."],
      options: ["It's clean and close to home.", "It clean and close to home.", "It's clean and close from home."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend offers you a ride on his bike in the heavy rain. Say no, politely.",
        te: "భారీ వర్షంలో మీ స్నేహితుడు తన బైక్ మీద తీసుకెళ్తానంటున్నారు. మర్యాదగా వద్దని చెప్పండి.",
      },
      expected: ["Thank you, but I'd rather not.", "I'd rather not go on the bike in this rain.", "Thanks, but I'd rather wait for the rain to stop."],
      options: ["Thank you, but I'd rather not.", "Thank you, but I'd not rather.", "Thank you, but I'd rather not to."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Which clinic?", te: "ఏ క్లినిక్?" },
    scene: {
      en: "Your neighbour Kavitha wants a full health check-up. She asks where you go for yours.",
      te: "మీ పక్కింటావిడ కవిత గారు full health check-up చేయించుకోవాలనుకుంటున్నారు. మీరు ఎక్కడ చేయించుకుంటారని అడుగుతున్నారు.",
    },
    partner: { en: "Kavitha (your neighbour)", te: "కవిత (మీ పక్కింటావిడ)" },
    skills: [
      { id: "choose", label: { en: "Choosing with I'd rather", te: "I'd rather తో ఎంచుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! I want a full check-up. Shall I go to the big hospital?",
        te: "హాయ్! నాకు full check-up చేయించుకోవాలని ఉంది. పెద్ద ఆసుపత్రికి వెళ్ళనా?",
        hint: { en: "Say you would choose the clinic near home.", te: "మీరైతే ఇంటి దగ్గర క్లినిక్‌కే వెళ్తారని చెప్పండి." },
        replies: [
          { say: "I'd rather go to the clinic near home.", good: true, skill: "choose" },
          { say: "I'd rather going to the clinic near home.", good: false, skill: "choose" },
        ],
      },
      {
        partner: "Why? The big hospital has more facilities.",
        te: "ఎందుకు? పెద్ద ఆసుపత్రిలో సౌకర్యాలు ఎక్కువ కదా.",
        hint: { en: "Say politely that you don't want to wait there for hours.", te: "అక్కడ గంటల తరబడి ఎదురుచూడటం మీకు ఇష్టం లేదని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "That's true, but I'd rather not wait there for two hours.", good: true, skill: "choose" },
          {
            say: "Big hospitals are only for rich show-offs.",
            good: false,
            skill: "polite",
            react: { en: "Show-offs? My cousin works there!", te: "గొప్పలు చెప్పుకునేవాళ్ళా? మా కజిన్ అక్కడే పని చేస్తారు!" },
          },
        ],
      },
      {
        partner: "Okay. And is the clinic doctor good?",
        te: "సరే. క్లినిక్ డాక్టర్ బాగా చూస్తారా?",
        hint: { en: "Say Dr Usha is very experienced and equal to the city doctors.", te: "డాక్టర్ ఉష గారికి చాలా అనుభవం ఉందని, సిటీ డాక్టర్లకి సమానమని చెప్పండి." },
        replies: [
          { say: "Yes. Dr Usha is very experienced. She's as good as the city doctors.", good: true, skill: "choose" },
          { say: "Yes. Dr Usha very experienced. She's as good as the city doctors.", good: false, skill: "choose", fixIt: "be" },
        ],
      },
      {
        partner: "Good! Then let's go together. Monday morning?",
        te: "బాగుంది! అయితే కలిసి వెళ్దాం. సోమవారం పొద్దునా?",
        hint: { en: "Agree, and say a time to meet.", te: "ఒప్పుకుని, కలిసే టైమ్ చెప్పండి." },
        replies: [
          { say: "Yes, Monday morning is fine. See you at eight.", good: true, skill: "polite" },
          { say: "Yes, in Monday morning. See you at eight.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
