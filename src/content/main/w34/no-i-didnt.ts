import type { Lesson } from "../../types";

/** Week 34, Day 4 (CURRICULUM §4): answering negative questions the English way (Fix-it 9) — You didn't go? No, I didn't. */
export const day: Lesson = {
  id: "no-i-didnt",
  kind: "lesson",
  title: { en: "No, I Didn't", te: "లేదు అంటే No" },
  subtitle: "answering negative questions",
  summary: {
    en: "Learn to answer questions with not the English way: You didn't go? No, I didn't. You didn't eat? Yes, I did.",
    te: "not ఉన్న ప్రశ్నలకి ఇంగ్లీష్ పద్ధతిలో జవాబు చెప్పడం నేర్చుకుందాం: You didn't go? No, I didn't. You didn't eat? Yes, I did.",
  },
  seo: {
    title: "Answering Negative Questions in English for Telugu Speakers",
    description:
      "You didn't go? No, I didn't. You didn't eat? Yes, I did. Simple lessons for Telugu speakers on yes and no to questions with not.",
  },
  pattern: [
    { text: "No,", role: "what" },
    { text: "I", role: "who" },
    { text: "didn't.", role: "action" },
  ],
  core: [
    { en: "You didn't go? No, I didn't.", te: "మీరు వెళ్ళలేదా? వెళ్ళలేదు.", extra: ["Yes,"] },
    { en: "You didn't eat? Yes, I did.", te: "మీరు తినలేదా? తిన్నానండీ.", extra: ["No,"] },
    { en: "Aren't you coming? Yes, I am.", te: "మీరు రావట్లేదా? వస్తున్నాను.", extra: ["No,"] },
    { en: "Haven't you met him? No, I haven't.", te: "మీరు ఆయన్ని కలవలేదా? కలవలేదు.", extra: ["Yes,"] },
    { en: "You weren't at the function? No, I wasn't.", te: "మీరు ఫంక్షన్‌లో లేరా? లేను.", extra: ["Yes,"] },
    { en: "Actually, I didn't go. I wasn't well.", te: "నిజానికి నేను వెళ్ళలేదు. ఒంట్లో బాగాలేదు.", extra: ["don't"] },
    { en: "Don't you remember me? Yes, I do!", te: "నేను గుర్తు లేనా? గుర్తున్నారండీ!", extra: ["No,"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask yourself: You didn't drink coffee today? Answer the English way, out loud.",
    te: "మిమ్మల్ని మీరే అడగండి: You didn't drink coffee today? ఇంగ్లీష్ పద్ధతిలో గట్టిగా జవాబు చెప్పండి.",
  },
  words: [
    { en: "actually", te: "నిజానికి" },
    { en: "remember", te: "గుర్తుండటం" },
    { en: "forgot", te: "మర్చిపోయాను" },
    { en: "skip", te: "మానేయడం (భోజనం లాంటివి)" },
    { en: "crowd", te: "జనం, రద్దీ" },
  ],
  grammar: ["yes-no-questions", "past-simple"],
  topics: ["people", "neighbours", "festivals"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Answer the fact", te: "జరిగిన దాన్ని బట్టి జవాబు" },
      body: {
        en: "In Telugu, అవును agrees with the question: అవును, వెళ్ళలేదు. In English, yes and no tell the fact. If you went, say Yes, I did. If you didn't go, say No, I didn't.",
        te: "తెలుగులో 'అవును' ప్రశ్నతో ఒప్పుకుంటుంది: అవును, వెళ్ళలేదు. ఇంగ్లీష్‌లో Yes, No జరిగిన దాన్ని చెప్తాయి: వెళ్తే Yes, I did; వెళ్ళకపోతే No, I didn't.",
      },
      bridge: {
        te: ["అవును,", "వెళ్ళలేదు"],
        en: [
          { text: "No,", role: "what" },
          { text: "I", role: "who" },
          { text: "didn't.", role: "action" },
        ],
      },
      examples: [
        { en: "You didn't go? No, I didn't.", te: "మీరు వెళ్ళలేదా? వెళ్ళలేదు." },
        { en: "You didn't eat? Yes, I did.", te: "మీరు తినలేదా? తిన్నానండీ." },
        { en: "Haven't you met him? No, I haven't.", te: "మీరు ఆయన్ని కలవలేదా? కలవలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Yes with did, No with didn't", te: "Yes తో did, No తో didn't" },
      items: [
        {
          form: "Yes, I did.",
          useFor: { en: "You did it, even if the question has not.", te: "మీరు చేశారు; ప్రశ్నలో not ఉన్నా సరే." },
          example: { en: "You didn't eat? Yes, I did.", te: "మీరు తినలేదా? తిన్నానండీ." },
        },
        {
          form: "No, I didn't.",
          useFor: { en: "You did not do it.", te: "మీరు చేయలేదు." },
          example: { en: "You didn't go? No, I didn't.", te: "మీరు వెళ్ళలేదా? వెళ్ళలేదు." },
        },
        {
          form: "Yes, I am. / Yes, I do.",
          useFor: { en: "It is true for you now.", te: "ఇప్పుడు మీకు అది నిజం." },
          example: { en: "Aren't you coming? Yes, I am.", te: "మీరు రావట్లేదా? వస్తున్నాను." },
        },
        {
          form: "No, I wasn't. / No, I haven't.",
          useFor: { en: "It did not happen.", te: "అది జరగలేదు." },
          example: { en: "You weren't at the function? No, I wasn't.", te: "మీరు ఫంక్షన్‌లో లేరా? లేను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "You didn't eat? Yes. (meaning I didn't)",
      right: "You didn't eat? No, I didn't.",
      why: {
        en: "Telugu అవును agrees with the question, but English No tells the fact: you did not eat.",
        te: "తెలుగులో 'అవును' ప్రశ్నతో ఒప్పుకుంటుంది; ఇంగ్లీష్‌లో జరిగింది చెప్పాలి: తినకపోతే No.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "Haven't you met him? Yes, I haven't.",
      right: "Haven't you met him? No, I haven't.",
      why: {
        en: "Yes never goes with haven't or didn't; an answer with not starts with No.",
        te: "Yes తర్వాత haven't, didn't ఎప్పుడూ రావు; not ఉన్న జవాబు No తో మొదలవుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "A friend asks: You didn't go to the wedding? You did not go.",
        te: "స్నేహితులు You didn't go to the wedding? అని అడిగారు. మీరు వెళ్ళలేదు.",
      },
      options: ["No, I didn't.", "Yes, I didn't.", "No, I did."],
      answer: 0,
      why: {
        en: "You did not go, so start with No and match it with didn't.",
        te: "మీరు వెళ్ళలేదు, అందుకే No తో మొదలుపెట్టి didn't తో ముగించాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "negative-answer",
      sentence: "You didn't eat? ___, I did. I had idli.",
      te: "మీరు తినలేదా? తిన్నానండీ. ఇడ్లీ తిన్నాను.",
      options: ["Yes", "No", "Not"],
      answer: 0,
      why: {
        en: "You did eat, so say Yes, even though the question has didn't.",
        te: "మీరు తిన్నారు, అందుకే Yes; ప్రశ్నలో didn't ఉన్నా సరే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "A neighbour asks: Doesn't Ramesh live in Guntur? He lives in Nellore.",
        te: "పక్కింటివారు Doesn't Ramesh live in Guntur? అని అడిగారు. రమేష్ గారు నెల్లూరులో ఉంటారు.",
      },
      options: ["No, he lives in Nellore.", "No, he live in Nellore.", "No, he is live in Nellore."],
      answer: 0,
      why: {
        en: "He is one person, so live takes s; is is not needed with live.",
        te: "he ఒక్కరే, అందుకే live కి s; live తో is అక్కర్లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "negative-answer",
      sentence: "You didn't skip lunch? Yes, I didn't.",
      wrongIndex: 4,
      fix: "You didn't skip lunch? No, I didn't.",
      why: {
        en: "Didn't makes it an answer with not, so it needs No in front, never Yes.",
        te: "didn't ఉంటే అది 'లేదు' జవాబు; ముందు No రావాలి, Yes కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A friend asks: You didn't go to the function? You didn't go.",
        te: "స్నేహితులు You didn't go to the function? అని అడిగారు. మీరు వెళ్ళలేదు.",
      },
      expected: ["No, I didn't.", "No, I didn't go."],
      options: ["No, I didn't.", "Yes, I didn't.", "Yes, I don't."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A neighbour asks: You haven't eaten? You have eaten.",
        te: "పక్కింటివారు You haven't eaten? అని అడిగారు. మీరు తినేశారు.",
      },
      expected: ["Yes, I have.", "Yes, I have eaten."],
      options: ["Yes, I have.", "No, I have.", "Yes, I haven't."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Did you go to the function?", te: "ఫంక్షన్‌కి వెళ్ళారా?" },
    scene: {
      en: "Your friend Kavitha calls. Last Sunday was Geetha's housewarming, and you did not go.",
      te: "మీ స్నేహితురాలు కవిత గారు ఫోన్ చేశారు. పోయిన ఆదివారం గీత గారి గృహప్రవేశం; మీరు వెళ్ళలేదు.",
    },
    partner: { en: "Kavitha (a friend)", te: "కవిత (స్నేహితురాలు)" },
    skills: [
      { id: "answer", label: { en: "Yes and no the English way", te: "ఇంగ్లీష్ పద్ధతిలో Yes, No" } },
      { id: "chat", label: { en: "Friendly chat", te: "స్నేహంగా కబుర్లు" } },
    ],
    turns: [
      {
        partner: "Hello! You didn't come to Geetha's housewarming?",
        te: "హలో! మీరు గీత గారి గృహప్రవేశానికి రాలేదా?",
        hint: { en: "Tell her the English way that you did not go, and why.", te: "వెళ్ళలేదని ఇంగ్లీష్ పద్ధతిలో, కారణంతో చెప్పండి." },
        replies: [
          { say: "No, I didn't. I wasn't well.", good: true, skill: "answer" },
          { say: "Yes, I didn't. I wasn't well.", good: false, skill: "answer", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Oh no! Aren't you feeling better now?",
        te: "అయ్యో! ఇప్పుడు కొంచెం నయం కాలేదా?",
        hint: { en: "Say that you are better now.", te: "ఇప్పుడు నయంగా ఉన్నానని చెప్పండి." },
        replies: [
          { say: "Yes, I am. Much better, thanks.", good: true, skill: "answer" },
          { say: "No, I am. Much better, thanks.", good: false, skill: "answer", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Good. There was a big crowd. You missed a lot!",
        te: "మంచిది. చాలా జనం వచ్చారు. మీరు చాలా మిస్ అయ్యారు!",
        hint: { en: "Ask her if the food was good.", te: "భోజనం బాగుందా అని అడగండి." },
        replies: [
          { say: "Was the food good?", good: true, skill: "chat" },
          { say: "The food was good?", good: false, skill: "chat", fixIt: "question" },
          {
            say: "So what? I don't care.",
            good: false,
            skill: "chat",
            react: { en: "Oh! Okay, sorry. I only wanted to tell you.", te: "అయ్యో! సరే, sorry. ఊరికే చెప్దామని." },
          },
        ],
      },
      {
        partner: "Very tasty! Didn't you call Geetha after that?",
        te: "చాలా రుచిగా ఉంది! తర్వాత గీత గారికి ఫోన్ చేయలేదా?",
        hint: { en: "Say you did not because you forgot, and say when you will.", te: "మర్చిపోయి చేయలేదని, ఎప్పుడు చేస్తారో చెప్పండి." },
        replies: [
          { say: "No, I didn't. I forgot. I'll call today.", good: true, skill: "answer" },
          { say: "Yes, I didn't. I forgot. I'll call today.", good: false, skill: "answer", fixIt: "negative-answer" },
        ],
      },
    ],
  },
};
