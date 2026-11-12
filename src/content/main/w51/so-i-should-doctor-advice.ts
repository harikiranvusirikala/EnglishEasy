import type { Lesson } from "../../types";

/** Week 51, Day 3 (CURRICULUM §5): repeating advice back to check it — So I should …? Let me repeat that. */
export const day: Lesson = {
  id: "so-i-should-doctor-advice",
  kind: "lesson",
  title: { en: "So I Should Walk Every Day?", te: "అంటే రోజూ నడవాలా?" },
  subtitle: "So I should …? Let me repeat that.",
  summary: {
    en: "Learn to repeat the doctor's advice to check it: So I should take this tablet before breakfast? Let me repeat that.",
    te: "డాక్టర్ సలహాని మళ్ళీ చెప్పి సరిచూసుకోవడం నేర్చుకుందాం: So I should take this tablet before breakfast? Let me repeat that.",
  },
  seo: {
    title: "Repeating the Doctor's Advice in English for Telugu Speakers",
    description: "Check the doctor's instructions: So I should take this tablet before breakfast? Let me repeat that. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "So I", role: "who" },
    { text: "should take", role: "action" },
    { text: "this tablet", role: "what" },
    { text: "before breakfast?", role: "when" },
  ],
  core: [
    { en: "So I should take this tablet before breakfast?", te: "అంటే ఈ టాబ్లెట్ టిఫిన్‌కి ముందు వేసుకోవాలా?", extra: ["taking"] },
    { en: "Let me repeat that, so I don't make a mistake.", te: "తప్పు జరగకుండా, ఒకసారి నేను మళ్ళీ చెప్తాను.", extra: ["repeats"] },
    { en: "So I should walk for at least thirty minutes?", te: "అంటే కనీసం అరగంట నడవాలా?" },
    { en: "Should I take it at bedtime or after dinner?", te: "దీన్ని పడుకునే ముందు వేసుకోవాలా, రాత్రి భోజనం తర్వాతా?" },
    { en: "So I should come back after two weeks?", te: "అంటే రెండు వారాల తర్వాత మళ్ళీ రావాలా?", extra: ["will"] },
    { en: "Let me repeat that: one tablet, morning and night.", te: "ఒకసారి మళ్ళీ చెప్తాను: పొద్దున ఒకటి, రాత్రి ఒకటి." },
    { en: "If I miss a tablet, should I take two next time?", te: "ఒక టాబ్లెట్ మర్చిపోతే, తర్వాత రెండు వేసుకోవాలా?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone gives you instructions today, repeat them back: So I should …?",
    te: "ఈ రోజు ఎవరైనా మీకు ఏదైనా చెప్తే, So I should …? అని మళ్ళీ చెప్పి సరిచూసుకోండి.",
  },
  words: [
    { en: "vitamin D", te: "విటమిన్ D" },
    { en: "let me repeat", te: "ఒకసారి మళ్ళీ చెప్తాను" },
    { en: "at least", te: "కనీసం" },
    { en: "at bedtime", te: "పడుకునే ముందు" },
    { en: "warm water", te: "గోరువెచ్చని నీళ్ళు" },
  ],
  grammar: ["should-must-have-to", "yes-no-questions"],
  topics: ["doctor", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Say it back to check", te: "మళ్ళీ చెప్పి సరిచూసుకోండి" },
      body: {
        en: "Say the doctor's advice back as a question, So I should …?, with your voice going up. If you are wrong, the doctor will correct you.",
        te: "డాక్టర్ సలహాని So I should …? అని ప్రశ్నలా మళ్ళీ చెప్పండి; చివర స్వరం పైకి. తప్పుంటే డాక్టర్ సరిచేస్తారు.",
      },
      bridge: {
        te: ["అంటే", "ఈ టాబ్లెట్", "టిఫిన్‌కి ముందు", "వేసుకోవాలా?"],
        en: [
          { text: "So I", role: "who" },
          { text: "should take", role: "action" },
          { text: "this tablet", role: "what" },
          { text: "before breakfast?", role: "when" },
        ],
      },
      examples: [
        { en: "So I should take this tablet before breakfast?", te: "అంటే ఈ టాబ్లెట్ టిఫిన్‌కి ముందు వేసుకోవాలా?" },
        { en: "So I should walk for at least thirty minutes?", te: "అంటే కనీసం అరగంట నడవాలా?" },
        { en: "Let me repeat that: one tablet, morning and night.", te: "ఒకసారి మళ్ళీ చెప్తాను: పొద్దున ఒకటి, రాత్రి ఒకటి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which one to use?", te: "ఏది ఎప్పుడు?" },
      items: [
        {
          form: "So I should …?",
          useFor: { en: "Check one piece of advice.", te: "ఒక సలహాని సరిచూసుకోవడానికి." },
          example: { en: "So I should drink more water?", te: "అంటే ఎక్కువ నీళ్ళు తాగాలా?" },
        },
        {
          form: "So I shouldn't …?",
          useFor: { en: "Check something you must not do.", te: "చేయకూడనిది సరిచూసుకోవడానికి." },
          example: { en: "So I shouldn't eat sweets at all?", te: "అంటే స్వీట్లు అస్సలు తినకూడదా?" },
        },
        {
          form: "Let me repeat that.",
          useFor: { en: "Check a long list of instructions.", te: "చాలా సూచనలు ఉన్నప్పుడు సరిచూసుకోవడానికి." },
          example: { en: "Let me repeat the instructions, doctor.", te: "డాక్టర్ గారూ, సూచనలు ఒకసారి మళ్ళీ చెప్తాను." },
        },
        {
          form: "Should I …?",
          useFor: { en: "Ask when you don't know at all.", te: "అస్సలు తెలియనప్పుడు అడగడానికి." },
          example: { en: "Should I take it with warm water?", te: "దీన్ని గోరువెచ్చని నీళ్ళతో వేసుకోవాలా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "So I should take rest for two days?",
      right: "So I should rest for two days?",
      why: {
        en: "English says rest or get some rest; take rest is only an Indian habit.",
        te: "ఇంగ్లీష్‌లో rest లేదా get some rest అంటారు; take rest అనేది మన అలవాటు మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "So I should take tablet after lunch?",
      right: "So I should take the tablet after lunch?",
      why: {
        en: "The doctor has just shown you the tablet, so say the; Telugu has no such word.",
        te: "డాక్టర్ అప్పుడే చూపించిన టాబ్లెట్ కాబట్టి the tablet; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: {
        en: "The doctor says: Rest at home this week. You repeat it to check. What do you say?",
        te: "ఈ వారం ఇంట్లోనే విశ్రాంతి తీసుకోండి అని డాక్టర్ చెప్పారు. మీరు మళ్ళీ చెప్పి సరిచూసుకుంటున్నారు. ఏమంటారు?",
      },
      options: ["So I should rest at home this week?", "So I should take rest at home this week?", "So I should resting at home this week?"],
      answer: 0,
      why: {
        en: "Say rest, not take rest, and after should the verb stays plain.",
        te: "take rest కాదు, rest అనాలి; should తర్వాత verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "So I should walk for ___ thirty minutes?",
      te: "అంటే కనీసం అరగంట నడవాలా?",
      options: ["at least", "at last", "last"],
      answer: 0,
      why: {
        en: "At least means not less than; at last means finally, after a long wait.",
        te: "at least అంటే కనీసం; at last అంటే చాలాసేపు ఎదురుచూశాక, చివరికి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "The doctor asks: Do you walk every morning? You do. What do you say?",
        te: "మీరు రోజూ పొద్దున నడుస్తారా అని డాక్టర్ అడుగుతున్నారు. మీరు నడుస్తారు. ఏమంటారు?",
      },
      options: ["Yes, I walk every morning.", "Yes, I am walking every morning.", "Yes, I walking every morning."],
      answer: 0,
      why: {
        en: "A daily habit takes the simple form, not -ing; Telugu నడుస్తుంటాను leads to am walking.",
        te: "రోజూ చేసే అలవాటుకి -ing రాదు; తెలుగు 'నడుస్తుంటాను' చూసి am walking అనకండి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "So I should comes back after two weeks?",
      wrongIndex: 3,
      fix: "So I should come back after two weeks?",
      why: {
        en: "After should, the verb never takes s, for any person.",
        te: "should తర్వాత verb కి ఎప్పుడూ s రాదు, ఎవరి గురించైనా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The doctor tells you to walk for thirty minutes every day. Repeat it back to check.",
        te: "రోజూ అరగంట నడవమని డాక్టర్ చెప్పారు. మళ్ళీ చెప్పి సరిచూసుకోండి.",
      },
      expected: ["So I should walk for thirty minutes every day?", "So I should walk thirty minutes every day?", "So, thirty minutes every day?"],
      options: ["So I should walk for thirty minutes every day?", "So I should walking for thirty minutes every day?", "So I should to walk for thirty minutes every day?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The doctor wants you to rest for two days. Your neighbour asks what the doctor said. Tell her.",
        te: "రెండు రోజులు విశ్రాంతి తీసుకోమని డాక్టర్ చెప్పారు. డాక్టర్ ఏమన్నారని పక్కింటావిడ అడుగుతున్నారు. ఆవిడకి చెప్పండి.",
      },
      expected: ["The doctor says I should rest for two days.", "I should rest for two days.", "The doctor wants me to rest for two days."],
      options: ["The doctor says I should rest for two days.", "The doctor says I should take rest for two days.", "The doctor say I should rest for two days."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Before you leave", te: "బయలుదేరే ముందు" },
    scene: {
      en: "Your check-up shows low vitamin D. Dr Imran gives you tablets and some advice. You check before you leave.",
      te: "మీ చెకప్‌లో విటమిన్ D తక్కువగా ఉందని వచ్చింది. డాక్టర్ ఇమ్రాన్ గారు టాబ్లెట్లు, కొన్ని సలహాలు ఇచ్చారు. బయలుదేరే ముందు మీరు సరిచూసుకుంటున్నారు.",
    },
    partner: { en: "Dr Imran (the doctor)", te: "డాక్టర్ ఇమ్రాన్ (డాక్టర్)" },
    voice: "b",
    skills: [
      { id: "repeat", label: { en: "Repeating to check", te: "మళ్ళీ చెప్పి సరిచూసుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Take one tablet a week, after lunch, for eight weeks.",
        te: "వారానికి ఒక టాబ్లెట్, మధ్యాహ్నం భోజనం తర్వాత, ఎనిమిది వారాల పాటు వేసుకోండి.",
        hint: { en: "Repeat the instructions back to check them.", te: "సూచనలు మళ్ళీ చెప్పి సరిచూసుకోండి." },
        replies: [
          { say: "Let me repeat that: one tablet a week, after lunch.", good: true, skill: "repeat" },
          { say: "So I should take one tablet every week, after lunch?", good: true, skill: "repeat" },
          {
            say: "So I should take one tablet every day?",
            good: false,
            skill: "repeat",
            react: { en: "No, no. Only once a week, not every day.", te: "లేదు, లేదు. వారానికి ఒక్కసారే, రోజూ కాదు." },
          },
        ],
      },
      {
        partner: "Right. Also get fifteen minutes of sun on most days.",
        te: "సరిగ్గా. అలాగే చాలా రోజులు పదిహేను నిమిషాలు ఎండ తగిలేలా చూసుకోండి.",
        hint: { en: "Check what he means: ask if your daily walk in the sun is enough.", te: "ఆయన ఉద్దేశం సరిచూసుకోండి: ఎండలో మీ రోజూ నడక సరిపోతుందా అని అడగండి." },
        replies: [
          { say: "Do you mean my brisk walk in the sun is enough?", good: true, skill: "repeat" },
          { say: "So I should be in the sun for fifteen minutes a day?", good: true, skill: "repeat" },
          {
            say: "Fifteen minutes in the sun? I don't have time for that.",
            good: false,
            skill: "polite",
            react: { en: "It's only fifteen minutes, but it really helps your bones.", te: "పదిహేను నిమిషాలే అండీ, కానీ మీ ఎముకలకి చాలా మంచిది." },
          },
        ],
      },
      {
        partner: "Yes, your walk is enough. Any other questions?",
        te: "అవును, మీ నడక సరిపోతుంది. ఇంకా ఏమైనా ప్రశ్నలు ఉన్నాయా?",
        hint: { en: "Ask if milk is fine with the tablet.", te: "టాబ్లెట్‌ని పాలతో వేసుకోవచ్చా అని అడగండి." },
        replies: [
          { say: "Can I take the tablet with milk?", good: true, skill: "repeat" },
          { say: "Should I take it with milk or water?", good: true, skill: "repeat" },
          { say: "Can I taking the tablet with milk?", good: false, skill: "repeat" },
        ],
      },
      {
        partner: "Yes, milk is fine. Come back after eight weeks for a test.",
        te: "పాలతో వేసుకోవచ్చు. ఎనిమిది వారాల తర్వాత టెస్ట్ కోసం మళ్ళీ రండి.",
        hint: { en: "Say you will come back, and thank him.", te: "మళ్ళీ వస్తానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll come back after eight weeks. Thank you, doctor.", good: true, skill: "polite" },
          { say: "Okay, I'll come back after eight week. Thank you, doctor.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
