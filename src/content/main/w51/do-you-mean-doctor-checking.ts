import type { Lesson } from "../../types";

/** Week 51, Day 2 (CURRICULUM §5): checking questions — Do you mean …? Sorry, what does … mean? */
export const day: Lesson = {
  id: "do-you-mean-doctor-checking",
  kind: "lesson",
  title: { en: "Do You Mean …?", te: "అంటే …?" },
  subtitle: "Do you mean …? What does … mean?",
  summary: {
    en: "Learn to check what the doctor means: Do you mean I should stop sugar completely? Sorry, what does fasting sugar mean?",
    te: "డాక్టర్ చెప్పింది సరిగ్గా అర్థమైందో లేదో అడిగి తెలుసుకోవడం నేర్చుకుందాం: Do you mean …? Sorry, what does … mean?",
  },
  seo: {
    title: "Asking the Doctor to Explain in English for Telugu Speakers",
    description: "Check what the doctor means: Do you mean I should stop sugar? What does fasting sugar mean? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Do you", role: "who" },
    { text: "mean", role: "action" },
    { text: "I should stop sugar?", role: "what" },
  ],
  core: [
    { en: "Do you mean I should stop sugar completely?", te: "అంటే నేను షుగర్ పూర్తిగా మానేయాలనా?", extra: ["Are"] },
    { en: "Sorry, what does fasting sugar mean?", te: "సారీ, fasting sugar అంటే ఏంటి?", extra: ["means"] },
    { en: "Could you explain that in simple words, please?", te: "దాన్ని కొంచెం సులభమైన మాటల్లో చెప్తారా?", extra: ["me"] },
    { en: "Do you mean before food or after food?", te: "అంటే భోజనానికి ముందా, తర్వాతా?" },
    { en: "Sorry, I didn't understand. Could you say that again?", te: "సారీ, నాకు అర్థం కాలేదు. ఇంకోసారి చెప్తారా?", extra: ["understood"] },
    { en: "So, do you mean my sugar level is a little high?", te: "అంటే నా షుగర్ లెవెల్ కొంచెం ఎక్కువగా ఉందనా?" },
    { en: "Do you mean I should cut down on rice?", te: "అంటే నేను అన్నం తగ్గించాలనా?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone today: What does … mean? Use any English word you heard and didn't understand.",
    te: "ఈ రోజు ఎవరినైనా What does … mean? అని అడగండి. మీరు విని అర్థం కాని ఏదైనా ఇంగ్లీష్ పదంతో.",
  },
  words: [
    { en: "Do you mean", te: "అంటే … అనా?" },
    { en: "explain", te: "అర్థమయ్యేలా చెప్పడం, వివరించడం" },
    { en: "in simple words", te: "సులభమైన మాటల్లో" },
    { en: "chronic", te: "చాలా కాలంగా ఉండే (జబ్బు)" },
    { en: "sugar level", te: "షుగర్ లెవెల్, రక్తంలో చక్కెర" },
  ],
  grammar: ["question-words", "should-must-have-to"],
  topics: ["doctor", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Check what the doctor means", te: "డాక్టర్ చెప్పింది సరిచూసుకోండి" },
      body: {
        en: "Doctors use hard words. To check the idea, say Do you mean …? in your own words. For one word, ask What does … mean?",
        te: "డాక్టర్లు కష్టమైన పదాలు వాడతారు. విషయం సరిచూసుకోవడానికి మీ మాటల్లో Do you mean …? అనండి. ఒక పదం తెలియకపోతే What does … mean? అని అడగండి.",
      },
      bridge: {
        te: ["అంటే", "నేను", "షుగర్", "పూర్తిగా", "మానేయాలనా?"],
        en: [
          { text: "Do you mean", role: "action" },
          { text: "I", role: "who" },
          { text: "should stop", role: "action" },
          { text: "sugar completely?", role: "what" },
        ],
      },
      examples: [
        { en: "Do you mean I should stop sugar completely?", te: "అంటే నేను షుగర్ పూర్తిగా మానేయాలనా?" },
        { en: "Sorry, what does fasting sugar mean?", te: "సారీ, fasting sugar అంటే ఏంటి?" },
        { en: "So, do you mean my sugar level is a little high?", te: "అంటే నా షుగర్ లెవెల్ కొంచెం ఎక్కువగా ఉందనా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which question?", te: "ఏ ప్రశ్న అడగాలి?" },
      items: [
        {
          form: "What does … mean?",
          useFor: { en: "One word you don't know.", te: "తెలియని ఒక పదానికి." },
          example: { en: "Sorry, what does chronic mean?", te: "సారీ, chronic అంటే ఏంటి?" },
        },
        {
          form: "Do you mean …?",
          useFor: { en: "Check the whole idea in your own words.", te: "మొత్తం విషయాన్ని మీ మాటల్లో సరిచూసుకోవడానికి." },
          example: { en: "Do you mean I can eat rice at night?", te: "అంటే రాత్రి అన్నం తినొచ్చనా?" },
        },
        {
          form: "Could you explain that?",
          useFor: { en: "When you didn't understand anything.", te: "ఏమీ అర్థం కానప్పుడు." },
          example: { en: "Could you explain that slowly, please?", te: "కొంచెం నెమ్మదిగా అర్థమయ్యేలా చెప్తారా?" },
        },
        {
          form: "Could you write it down?",
          useFor: { en: "For the names of tests and medicines.", te: "టెస్టులు, మందుల పేర్లకి." },
          example: { en: "Could you write the name down, please?", te: "ఆ పేరు కొంచెం రాసి ఇస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Sorry, what fasting sugar means?",
      right: "Sorry, what does fasting sugar mean?",
      why: {
        en: "A what question with mean needs does, and then mean has no s.",
        te: "mean తో what ప్రశ్నకి does కావాలి; అప్పుడు mean కి s రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Doctor, I have one doubt.",
      right: "Doctor, I have a question.",
      why: {
        en: "Outside India, a doubt means you don't believe something; to ask, say a question.",
        te: "భారతదేశం బయట doubt అంటే నమ్మకం లేదని అర్థం; ఏదైనా అడగాలంటే a question అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your neighbour asks what the doctor told you about walking. What do you say?",
        te: "నడక గురించి డాక్టర్ ఏం చెప్పారని పక్కింటివారు అడుగుతున్నారు. ఏమంటారు?",
      },
      options: ["The doctor says I should walk more.", "The doctor say I should walk more.", "The doctor saying I should walk more."],
      answer: 0,
      why: {
        en: "One doctor is like he or she, so say takes s.",
        te: "ఒక్క డాక్టర్ (he, she లాగా) కాబట్టి say కి s వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "question",
      sentence: "Sorry, what ___ this word mean?",
      te: "సారీ, ఈ పదానికి అర్థం ఏంటి?",
      options: ["does", "is", "do"],
      answer: 0,
      why: {
        en: "Mean is an action, so one word takes does, never is.",
        te: "mean ఒక action; ఒక్క పదం కాబట్టి does వస్తుంది, is రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The doctor says: Cut down on salt. You want to check. What do you ask?",
        te: "ఉప్పు తగ్గించండి అని డాక్టర్ చెప్పారు. మీరు సరిచూసుకోవాలి. ఏం అడుగుతారు?",
      },
      options: ["Do you mean I should eat less salt?", "Are you mean I should eat less salt?", "Do you mean I should eats less salt?"],
      answer: 0,
      why: {
        en: "Mean is an action, so start with Do; after should, the verb stays plain.",
        te: "mean ఒక action కాబట్టి Do తో మొదలుపెట్టాలి; should తర్వాత verb మారదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Could you explain me this report, please?",
      wrongIndex: 3,
      fix: "Could you explain this report to me, please?",
      why: {
        en: "Explain takes the thing first, then to me; Telugu నాకు చెప్పండి leads to explain me.",
        te: "explain తర్వాత ముందు విషయం, తర్వాత to me; తెలుగు 'నాకు చెప్పండి' చూసి explain me అనకండి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The doctor uses the word chronic. You don't know it. Ask what it means.",
        te: "డాక్టర్ chronic అనే పదం వాడారు. మీకు అది తెలియదు. దాని అర్థం ఏంటని అడగండి.",
      },
      expected: ["Sorry, what does chronic mean?", "What does chronic mean?", "What does chronic mean, doctor?"],
      options: ["Sorry, what does chronic mean?", "Sorry, what chronic means?", "Sorry, what is mean chronic?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The doctor says: Take it on an empty stomach. Check if that means before breakfast.",
        te: "దీన్ని పరగడుపున వేసుకోండి అని డాక్టర్ చెప్పారు. అంటే టిఫిన్‌కి ముందా అని సరిచూసుకోండి.",
      },
      expected: ["Do you mean before breakfast?", "Do you mean I should take it before breakfast?", "So, before breakfast?"],
      options: ["Do you mean before breakfast?", "Are you mean before breakfast?", "You meaning before breakfast?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new word", te: "ఒక కొత్త పదం" },
    scene: {
      en: "You took your friend Narayana for a check-up. He isn't comfortable in English, so you talk to Dr Anitha for him.",
      te: "మీ స్నేహితుడు నారాయణ గారిని చెకప్‌కి తీసుకెళ్ళారు. ఆయనకి ఇంగ్లీష్ అంతగా రాదు, అందుకే ఆయన తరఫున మీరు డాక్టర్ అనిత గారితో మాట్లాడుతున్నారు.",
    },
    partner: { en: "Dr Anitha (the doctor)", te: "డాక్టర్ అనిత (డాక్టర్)" },
    skills: [
      { id: "check", label: { en: "Checking what she means", te: "ఆవిడ చెప్పింది సరిచూసుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Your friend's report is here. His sugar is in the prediabetes range.",
        te: "మీ స్నేహితుడి రిపోర్ట్ వచ్చింది. ఆయన షుగర్ prediabetes range లో ఉంది.",
        hint: { en: "Say sorry, and ask what that new word means.", te: "సారీ చెప్పి, ఆ కొత్త పదానికి అర్థం ఏంటని అడగండి." },
        replies: [
          { say: "Sorry, doctor, what does prediabetes mean?", good: true, skill: "check" },
          { say: "Sorry, doctor, what prediabetes means?", good: false, skill: "check", fixIt: "question" },
        ],
      },
      {
        partner: "It means his sugar is a little high, but it's not diabetes yet.",
        te: "అంటే ఆయన షుగర్ కొంచెం ఎక్కువగా ఉంది, కానీ ఇంకా డయాబెటిస్ కాదు.",
        hint: { en: "Check that you understand: ask if food can control it.", te: "అర్థమైందో లేదో సరిచూసుకోండి: తిండితో అదుపులో పెట్టొచ్చా అని అడగండి." },
        replies: [
          { say: "Do you mean he can control it with diet?", good: true, skill: "check" },
          { say: "So, can he control it with diet and walking?", good: true, skill: "check" },
          { say: "Do you mean he can controls it with diet?", good: false, skill: "check" },
        ],
      },
      {
        partner: "Yes. He should cut down on sweets and rice, and walk daily.",
        te: "అవును. ఆయన స్వీట్లు, అన్నం తగ్గించాలి, రోజూ నడవాలి.",
        hint: { en: "Check one point: ask if he must stop rice completely.", te: "ఒక విషయం సరిచూసుకోండి: అన్నం పూర్తిగా మానేయాలా అని అడగండి." },
        replies: [
          { say: "Do you mean he should stop rice completely?", good: true, skill: "check" },
          {
            say: "Just give him a tablet. Diet is too much trouble.",
            good: false,
            skill: "polite",
            react: { en: "A tablet alone won't help. Small changes in food really work.", te: "ఒక్క టాబ్లెట్‌తో సరిపోదు అండీ. తిండిలో చిన్న మార్పులు బాగా పని చేస్తాయి." },
          },
        ],
      },
      {
        partner: "No, not completely. Just a little less rice. Any other questions?",
        te: "లేదు, పూర్తిగా కాదు. అన్నం కొంచెం తగ్గిస్తే చాలు. ఇంకా ఏమైనా ప్రశ్నలు ఉన్నాయా?",
        hint: { en: "Say it is clear now, and thank her.", te: "ఇప్పుడు అర్థమైందని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's clear now. Thank you, doctor.", good: true, skill: "polite" },
          { say: "No, that clear now. Thank you, doctor.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};
