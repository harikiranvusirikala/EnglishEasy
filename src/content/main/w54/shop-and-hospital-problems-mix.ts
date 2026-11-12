import type { Lesson } from "../../types";

/** Week 54, Day 3 (CURRICULUM §5): Checkpoint 4 mix — returns and refunds, the doctor, the ward and queues (Weeks 50–53). */
export const day: Lesson = {
  id: "shop-and-hospital-problems-mix",
  kind: "lesson",
  title: { en: "Problems Sorted", te: "సమస్యలు తీరాయి" },
  subtitle: "returns, the doctor, the ward and queues",
  summary: {
    en: "Sort out everyday problems: return a faulty thing, check what the doctor said, and ask politely in a queue.",
    te: "రోజువారీ సమస్యలు తీర్చుకుందాం: పాడైన వస్తువు వాపస్ ఇవ్వడం, డాక్టర్ చెప్పింది సరిచూసుకోవడం, క్యూలో మర్యాదగా అడగడం.",
  },
  seo: {
    title: "Returns, the Doctor and Queues in English for Telugu Speakers",
    description:
      "Say I'd like to return this, because it's faulty and So I should rest for a week? Lessons for Telugu speakers on sorting out problems.",
  },
  pattern: [
    { text: "I'd like to return", role: "action" },
    { text: "this rice cooker", role: "what" },
    { text: "because it's faulty", role: "what" },
  ],
  core: [
    { en: "I'd like to return this rice cooker, because it's faulty.", te: "ఈ రైస్ కుక్కర్ పాడైంది, అందుకే వాపస్ ఇవ్వాలనుకుంటున్నాను.", extra: ["back"] },
    { en: "So I should rest for a week?", te: "అంటే ఒక వారం విశ్రాంతి తీసుకోవాలా?", extra: ["take"] },
    { en: "How many days will the refund take?", te: "రీఫండ్ రావడానికి ఎన్ని రోజులు పడుతుంది?", extra: ["much"] },
    { en: "I've been waiting for the doctor for two hours.", te: "డాక్టర్ కోసం రెండు గంటలుగా ఎదురుచూస్తున్నాను.", extra: ["since"] },
    { en: "Do you mean I have to come back tomorrow?", te: "అంటే నేను రేపు మళ్ళీ రావాలా?" },
    { en: "Am I allowed to stay with him at night?", te: "రాత్రి ఆయనతో పాటు నేను ఉండొచ్చా?", extra: ["allow"] },
    { en: "I'm afraid there's a mistake in the bill.", te: "బిల్లులో ఏదో పొరపాటు ఉన్నట్టుంది అండీ.", extra: ["an"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one problem you need to sort out this week. Say aloud the first sentence you will use.",
    te: "ఈ వారం మీరు తీర్చుకోవాల్సిన ఒక సమస్య గుర్తు చేసుకోండి. దానికి మీరు అనే మొదటి వాక్యాన్ని గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "rice cooker", te: "రైస్ కుక్కర్" },
    { en: "sort out", te: "సమస్య తీర్చుకోవడం, చక్కబెట్టడం" },
    { en: "same day", te: "అదే రోజు" },
    { en: "a long day", te: "చాలా పనులున్న, అలసిపోయిన రోజు" },
    { en: "double-check", te: "మళ్ళీ సరిచూసుకోవడం" },
  ],
  grammar: ["connectors", "should-must-have-to", "present-perfect-continuous", "politeness-softening"],
  topics: ["shopping", "doctor", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Sorting out a problem", te: "సమస్య తీర్చుకోవడం" },
      body: {
        en: "Say the problem politely with I'm afraid or I'd like to, and give the reason with because. To check the doctor's words, ask So I should rest? or Do you mean tomorrow?",
        te: "సమస్యని I'm afraid లేదా I'd like to తో మర్యాదగా చెప్పి, because తో కారణం చెప్పండి. డాక్టర్ మాట సరిచూసుకోవడానికి So I should rest? లేదా Do you mean tomorrow? అని అడగండి.",
      },
      bridge: {
        te: ["ఈ రైస్ కుక్కర్", "పాడైంది, అందుకే", "వాపస్ ఇవ్వాలనుకుంటున్నాను"],
        en: [
          { text: "I'd like to return", role: "action" },
          { text: "this rice cooker", role: "what" },
          { text: "because it's faulty", role: "what" },
        ],
      },
      examples: [
        { en: "I'd like to return this rice cooker, because it's faulty.", te: "ఈ రైస్ కుక్కర్ పాడైంది, అందుకే వాపస్ ఇవ్వాలనుకుంటున్నాను." },
        { en: "So I should rest for a week?", te: "అంటే ఒక వారం విశ్రాంతి తీసుకోవాలా?" },
        { en: "I've been waiting for the doctor for two hours.", te: "డాక్టర్ కోసం రెండు గంటలుగా ఎదురుచూస్తున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Four sentences for problems", te: "సమస్యలకి నాలుగు వాక్యాలు" },
      items: [
        {
          form: "I'd like to return …, because …",
          useFor: { en: "Giving a thing back, with the reason.", te: "కారణం చెప్పి వస్తువు వాపస్ ఇవ్వడానికి." },
          example: { en: "I'd like to return this rice cooker, because it's faulty.", te: "ఈ రైస్ కుక్కర్ పాడైంది, అందుకే వాపస్ ఇవ్వాలనుకుంటున్నాను." },
        },
        {
          form: "So I should …? Do you mean …?",
          useFor: { en: "Checking what the doctor said.", te: "డాక్టర్ చెప్పింది సరిగ్గా అర్థమైందో లేదో చూసుకోవడానికి." },
          example: { en: "Do you mean I have to come back tomorrow?", te: "అంటే నేను రేపు మళ్ళీ రావాలా?" },
        },
        {
          form: "Am I allowed to …?",
          useFor: { en: "Asking about a hospital rule.", te: "ఆసుపత్రి నియమం గురించి అడగడానికి." },
          example: { en: "Am I allowed to stay with him at night?", te: "రాత్రి ఆయనతో పాటు నేను ఉండొచ్చా?" },
        },
        {
          form: "I've been waiting for / since …",
          useFor: { en: "Something that started earlier and still goes on.", te: "ముందే మొదలై ఇంకా జరుగుతున్నది." },
          example: { en: "I've been waiting for the doctor for two hours.", te: "డాక్టర్ కోసం రెండు గంటలుగా ఎదురుచూస్తున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Doctor, should I take rest for a week?",
      right: "Doctor, should I rest for a week?",
      why: {
        en: "English says rest, or get some rest; take rest is only Indian English.",
        te: "ఇంగ్లీష్‌లో rest లేదా get some rest అంటారు; take rest అనేది మన అలవాటు మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'd like to return back this rice cooker.",
      right: "I'd like to return this rice cooker.",
      why: {
        en: "Return already means give back, so back is extra.",
        te: "return అంటేనే 'తిరిగి ఇవ్వడం'; back అదనం, అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "You came to the OP at nine. It is eleven now. Tell the nurse politely.",
        te: "మీరు తొమ్మిదింటికి OP కి వచ్చారు. ఇప్పుడు పదకొండు అయింది. నర్సుకి మర్యాదగా చెప్పండి.",
      },
      options: ["Excuse me, I've been waiting since nine.", "Excuse me, I am waiting since nine.", "Excuse me, I've been waiting from nine."],
      answer: 0,
      why: {
        en: "Waiting that began at nine and goes on now needs have been with -ing, and since.",
        te: "తొమ్మిదింటికి మొదలై ఇప్పటికీ సాగుతున్న ఎదురుచూపుకి have been + -ing, since కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Please don't eat anything ___ the operation.",
      te: "ఆపరేషన్ అయ్యే దాకా ఏమీ తినకండి.",
      options: ["until", "since", "by"],
      answer: 0,
      why: {
        en: "Until means up to that time; since counts from a time in the past.",
        te: "until అంటే ఆ సమయం దాకా; since గతంలో ఒక సమయం నుంచి లెక్కపెడుతుంది.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Green Valley Hospital: Discharge Day",
      lines: [
        "Discharge day: please read this before you go home.",
        "The doctor will see you on the morning round.",
        "Your discharge summary will be ready by 12 noon.",
        "Please collect it from the nurses' station.",
        "Pay the final bill at the billing counter, on the ground floor.",
        "Senior citizens can use counter number 2.",
        "Most patients go home the same day, after lunch.",
        "Keep all your reports and the summary safe.",
        "Your follow-up visit is after seven days.",
        "Please book it at the OP desk before you leave.",
      ],
      questions: [
        {
          prompt: { en: "Where do you collect the discharge summary?", te: "discharge summary ఎక్కడ తీసుకోవాలి?" },
          options: ["At the nurses' station", "At the billing counter", "At the OP desk"],
          answer: 0,
          why: {
            en: "The fourth line says the nurses keep it ready for you.",
            te: "నాలుగో లైన్‌లో, అది నర్సుల దగ్గర తీసుకోవాలని ఉంది.",
          },
        },
        {
          prompt: { en: "When is the follow-up visit?", te: "follow-up visit ఎప్పుడు?" },
          options: ["After seven days", "After two days", "The next morning"],
          answer: 0,
          why: {
            en: "The notice says to come back one week after you go home.",
            te: "ఇంటికి వెళ్ళిన వారం తర్వాత మళ్ళీ రావాలని నోటీసులో ఉంది.",
          },
        },
        {
          prompt: { en: "Which counter can senior citizens use?", te: "senior citizens ఏ కౌంటర్ వాడొచ్చు?" },
          options: ["Counter number 2", "Counter number 12", "The OP desk"],
          answer: 0,
          why: {
            en: "One line gives senior citizens a counter of their own.",
            te: "senior citizens కి వేరే కౌంటర్ ఉందని ఒక లైన్‌లో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "I have been waiting here for two hour.",
      wrongIndex: 7,
      fix: "I have been waiting here for two hours.",
      why: {
        en: "After two, hour needs an s, just like Telugu గంటలు.",
        te: "two తర్వాత hour కి s రావాలి, తెలుగులో 'గంటలు' లాగానే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "The doctor says your report comes tomorrow. Double-check if you have to come back then.",
        te: "మీ రిపోర్ట్ రేపు వస్తుందని డాక్టర్ గారు అన్నారు. రేపు మళ్ళీ రావాలా అని ఒకసారి సరిచూసుకోండి.",
      },
      expected: [
        "Do you mean I have to come back tomorrow?",
        "Do you mean tomorrow?",
        "So I should come back tomorrow?",
        "So I have to come back tomorrow?",
      ],
      options: [
        "Do you mean I have to come back tomorrow?",
        "You are meaning I have to come back tomorrow?",
        "Do you mean I have to coming back tomorrow?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the shop, ask how many days the refund will take.",
        te: "షాపులో, రీఫండ్ రావడానికి ఎన్ని రోజులు పడుతుందో అడగండి.",
      },
      expected: ["How many days will the refund take?", "How long will the refund take?", "When will I get my refund?"],
      options: ["How many days will the refund take?", "How much days will the refund take?", "How many days the refund will take?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A busy day", te: "పనుల రోజు" },
    scene: {
      en: "It's evening. Your friend Imran calls. Today you returned a faulty rice cooker and saw the doctor about your knee.",
      te: "సాయంత్రం అయింది. మీ స్నేహితుడు ఇమ్రాన్ గారు ఫోన్ చేశారు. ఈ రోజు మీరు పాడైన రైస్ కుక్కర్ వాపస్ ఇచ్చారు, మోకాలి కోసం డాక్టర్‌ని కూడా కలిశారు.",
    },
    partner: { en: "Imran (your friend)", te: "ఇమ్రాన్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "explain", label: { en: "Explaining", te: "వివరించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! You sound tired. How was your day?",
        te: "హలో! అలసిపోయినట్టున్నారు. ఈ రోజు ఎలా గడిచింది?",
        hint: { en: "Say it was a tiring day, and say you have been busy since the morning.", te: "అలసిపోయిన రోజని, పొద్దున్నుంచి బిజీగా ఉన్నారని చెప్పండి." },
        replies: [
          { say: "It's been a long day! I've been busy since morning.", good: true, skill: "explain" },
          { say: "It's a long day! I am busy since morning.", good: false, skill: "explain", fixIt: "duration" },
        ],
      },
      {
        partner: "Oh? What happened?",
        te: "అవునా? ఏమైంది?",
        hint: { en: "Say you took the rice cooker back to the shop, and why.", te: "రైస్ కుక్కర్ షాపుకి తిరిగి తీసుకెళ్ళారని, ఎందుకో చెప్పండి." },
        replies: [
          { say: "I returned the rice cooker, because it stopped working.", good: true, skill: "explain" },
          { say: "I returned back the rice cooker, because it stopped working.", good: false, skill: "explain", fixIt: "preposition" },
        ],
      },
      {
        partner: "Did they give you your money back?",
        te: "మీ డబ్బులు తిరిగి ఇచ్చారా?",
        hint: { en: "Say yes, and when the money will come.", te: "అవునని, డబ్బులు ఎప్పుడు వస్తాయో చెప్పండి." },
        replies: [
          { say: "Yes. I'll get a refund in five working days.", good: true, skill: "explain" },
          {
            say: "Yes, but only after I shouted at the manager.",
            good: false,
            skill: "polite",
            react: { en: "Oh dear! Firm and polite works better, you know.", te: "అయ్యో! గట్టిగా, కానీ మర్యాదగా అడిగితేనే బాగుంటుంది కదా." },
          },
        ],
      },
      {
        partner: "Good. And what did the doctor say about your knee?",
        te: "మంచిది. మరి మీ మోకాలి గురించి డాక్టర్ గారు ఏమన్నారు?",
        hint: { en: "Say you have to rest your knee for a week, so no walks.", te: "ఒక వారం మోకాలికి విశ్రాంతి ఇవ్వాలని, అందుకే నడక లేదని చెప్పండి." },
        replies: [
          { say: "I have to rest my knee for a week. So, no walks!", good: true, skill: "explain" },
          { say: "I have to take rest for one week. So, no walks!", good: false, skill: "explain", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Take care. Shall I bring you some fruit tomorrow?",
        te: "జాగ్రత్త. రేపు మీకు కొన్ని పండ్లు తీసుకురానా?",
        hint: { en: "Thank him, and say yes kindly.", te: "ఆయనకి థాంక్స్ చెప్పి, మర్యాదగా సరే అనండి." },
        replies: [
          { say: "That's very kind of you. Yes, please!", good: true, skill: "polite" },
          {
            say: "No need. Don't come, I'm busy.",
            good: false,
            skill: "polite",
            react: { en: "Oh, okay. Call me if you need anything.", te: "ఓ, సరే. ఏమైనా కావాలంటే ఫోన్ చేయండి." },
          },
        ],
      },
    ],
  },
};
