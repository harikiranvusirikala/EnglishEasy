import type { Lesson } from "../../types";

/** Week 31, Day 1 (CURRICULUM §4): have / has just + the third form, for something that happened a moment ago. */
export const day: Lesson = {
  id: "i-have-just",
  kind: "lesson",
  title: { en: "I Have Just …", te: "ఇప్పుడే" },
  subtitle: "have / has just + done",
  summary: {
    en: "Learn to say what happened a moment ago: I have just finished lunch. She has just left.",
    te: "ఇప్పుడే జరిగిన పని చెప్పడం నేర్చుకుందాం: I have just finished lunch. She has just left.",
  },
  seo: {
    title: "Using Just in English for Telugu Speakers",
    description:
      "Say I have just finished lunch and She has just left. Simple lessons for Telugu speakers on saying what happened a moment ago.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have just finished", role: "action" },
    { text: "lunch.", role: "what" },
  ],
  core: [
    { en: "I have just finished lunch.", te: "నేను ఇప్పుడే భోజనం చేశాను.", extra: ["finish"] },
    { en: "She has just left.", te: "ఆవిడ ఇప్పుడే వెళ్ళిపోయారు.", extra: ["have"] },
    { en: "The doctor has just come.", te: "డాక్టర్ గారు ఇప్పుడే వచ్చారు.", extra: ["came"] },
    { en: "I've just reached home.", te: "నేను ఇప్పుడే ఇంటికి చేరుకున్నాను.", extra: ["am"] },
    { en: "Ramesh has just called me.", te: "రమేష్ ఇప్పుడే నాకు ఫోన్ చేశారు.", extra: ["have"] },
    { en: "The rain has just stopped.", te: "వర్షం ఇప్పుడే ఆగింది.", extra: ["stop"] },
    { en: "Sorry, you have just missed him.", te: "అయ్యో, ఆయన ఇప్పుడే వెళ్ళారు; మీరు కొంచెంలో మిస్ అయ్యారు.", extra: ["has"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "After your next meal, tell someone: I have just had lunch.",
    te: "ఈ రోజు భోజనం అయ్యాక ఎవరికైనా చెప్పండి: I have just had lunch.",
  },
  words: [
    { en: "just", te: "ఇప్పుడే" },
    { en: "finished", te: "పూర్తి చేశారు, అయిపోయింది" },
    { en: "missed", te: "కొంచెంలో తప్పిపోయింది, మిస్ అయ్యారు" },
    { en: "stepped out", te: "బయటికి వెళ్ళారు" },
    { en: "a moment ago", te: "కాసేపటి క్రితం, ఇప్పుడే" },
  ],
  grammar: ["present-perfect"],
  topics: ["home", "time", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Just: a moment ago", te: "just: ఇప్పుడే" },
      body: {
        en: "For something that happened a moment ago, use have or has, then just, then the third form of the verb. I have just finished lunch. She has just left.",
        te: "ఇప్పుడే జరిగిన పనికి have లేదా has, తర్వాత just, తర్వాత verb మూడో రూపం. ఉదా: I have just finished lunch. She has just left.",
      },
      bridge: {
        te: ["నేను", "ఇప్పుడే", "భోజనం", "చేశాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have just finished", role: "action" },
          { text: "lunch.", role: "what" },
        ],
      },
      examples: [
        { en: "I have just finished lunch.", te: "నేను ఇప్పుడే భోజనం చేశాను." },
        { en: "The rain has just stopped.", te: "వర్షం ఇప్పుడే ఆగింది." },
        { en: "Sorry, you have just missed him.", te: "అయ్యో, ఆయన ఇప్పుడే వెళ్ళారు; మీరు కొంచెంలో మిస్ అయ్యారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Have just or has just?", te: "have just ఆ, has just ఆ?" },
      items: [
        {
          form: "I / you / we / they + have just",
          useFor: { en: "I, you, we, they and many people.", te: "I, you, we, they, చాలా మందికి." },
          example: { en: "I have just finished lunch.", te: "నేను ఇప్పుడే భోజనం చేశాను." },
        },
        {
          form: "he / she / it + has just",
          useFor: { en: "One person or one thing.", te: "ఒక్క మనిషికి లేదా ఒక్క వస్తువుకి." },
          example: { en: "Ramesh has just called me.", te: "రమేష్ ఇప్పుడే నాకు ఫోన్ చేశారు." },
        },
        {
          form: "I've / she's + just",
          useFor: { en: "The short way to say it.", te: "మాట్లాడేటప్పుడు చిన్నగా అనే విధానం." },
          example: { en: "I've just reached home.", te: "నేను ఇప్పుడే ఇంటికి చేరుకున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "She have just left.",
      right: "She has just left.",
      why: {
        en: "With he, she or one person's name, use has, never have.",
        te: "he, she లేదా ఒకరి పేరు ఉంటే has వాడాలి, have కాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I have just finish lunch.",
      right: "I have just finished lunch.",
      why: {
        en: "After have just, the verb takes its third form, finished, not finish.",
        te: "have just తర్వాత verb మూడో రూపంలో ఉండాలి: finish కాదు, finished.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A friend asks you to eat with her. You ate five minutes ago. What do you say?",
        te: "ఒక స్నేహితురాలు భోజనానికి రమ్మంటున్నారు. మీరు ఐదు నిమిషాల క్రితమే తిన్నారు. ఏమంటారు?",
      },
      options: ["Sorry, I have just had lunch.", "Sorry, I am just had lunch.", "Sorry, I have just have lunch."],
      answer: 0,
      why: {
        en: "Use have, then just, then the third form had; am does not go here.",
        te: "have, తర్వాత just, తర్వాత మూడో రూపం had; ఇక్కడ am రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Padma ___ just left for the temple.",
      te: "పద్మ గారు ఇప్పుడే గుడికి బయలుదేరారు.",
      options: ["has", "have", "is"],
      answer: 0,
      why: {
        en: "Padma is one person, like she, so use has.",
        te: "పద్మ ఒక్కరే (she లాగా), అందుకే has.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The nurse says: The doctor has just come. What does it mean?",
        te: "నర్సు The doctor has just come అన్నారు. అర్థం ఏంటి?",
      },
      options: ["The doctor came a moment ago.", "The doctor will come soon.", "The doctor comes every day."],
      answer: 0,
      why: {
        en: "Has just with the third form means it happened a moment ago.",
        te: "has just + మూడో రూపం అంటే ఆ పని ఇప్పుడే జరిగింది అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Sita has just came home.",
      wrongIndex: 3,
      fix: "Sita has just come home.",
      why: {
        en: "After has, use the third form come; came is the past.",
        te: "has తర్వాత మూడో రూపం come వాడాలి; came అనేది past.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend phones you. You came home a moment ago. Tell him.",
        te: "ఒక స్నేహితుడు ఫోన్ చేశారు. మీరు ఇప్పుడే ఇంటికి వచ్చారు. ఆయనకి చెప్పండి.",
      },
      expected: ["I have just come home.", "I've just come home.", "I have just reached home.", "I've just reached home."],
      options: ["I have just come home.", "I am just come home.", "I just coming home."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "A visitor asks for Prasad. He went out a moment ago. Tell the visitor.",
        te: "ఒకరు ప్రసాద్ గారి కోసం వచ్చారు. ఆయన ఇప్పుడే బయటికి వెళ్ళారు. వచ్చినవారికి చెప్పండి.",
      },
      expected: ["Sorry, he has just stepped out.", "He has just stepped out.", "Sorry, he's just stepped out.", "He has just gone out."],
      options: ["Sorry, he has just stepped out.", "Sorry, he have just stepped out.", "Sorry, he just stepping out."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "You just missed him", te: "కొంచెంలో మిస్ అయ్యారు" },
    scene: {
      en: "You visit your friend Srinivas. His neighbour Kamala is at her gate. He is not at home.",
      te: "మీరు మీ స్నేహితుడు శ్రీనివాస్ ఇంటికి వెళ్ళారు. పక్కింటి కమల గారు గేటు దగ్గర ఉన్నారు. శ్రీనివాస్ ఇంట్లో లేరు.",
    },
    partner: { en: "Kamala (your friend's neighbour)", te: "కమల (మీ స్నేహితుడి పక్కింటావిడ)" },
    skills: [
      { id: "just", label: { en: "Saying just", te: "just వాడటం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Are you looking for someone?",
        te: "నమస్కారం! ఎవరి కోసమైనా వచ్చారా?",
        hint: { en: "Greet her, and ask if Srinivas is at home.", te: "ఆవిడని పలకరించి, శ్రీనివాస్ ఇంట్లో ఉన్నారా అని అడగండి." },
        replies: [
          { say: "Namaste, aunty. Is Srinivas at home?", good: true, skill: "polite" },
          { say: "Namaste, aunty. Srinivas is there?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
      {
        partner: "Sorry, he has just stepped out.",
        te: "సారీ, ఆయన ఇప్పుడే బయటికి వెళ్ళారు.",
        hint: { en: "Say you have missed him, and ask when he went.", te: "కొంచెంలో మిస్ అయ్యానని చెప్పి, ఎప్పుడు వెళ్ళారో అడగండి." },
        replies: [
          { say: "Oh, I've just missed him! When did he go?", good: true, skill: "just" },
          { say: "Oh, I have just miss him! When he went?", good: false, skill: "just" },
        ],
      },
      {
        partner: "Only five minutes ago. Sit down. Will you have tea?",
        te: "ఐదు నిమిషాలే అయింది. కూర్చోండి. టీ తాగుతారా?",
        hint: { en: "Thank her, and say you ate a moment ago.", te: "థాంక్స్ చెప్పి, ఇప్పుడే భోజనం చేశానని చెప్పండి." },
        replies: [
          { say: "Thank you, aunty, but I have just had lunch.", good: true, skill: "just" },
          { say: "Thank you, aunty, but I am just had lunch.", good: false, skill: "just" },
          {
            say: "No tea. I don't want.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Okay. Some water, then?", te: "ఓ! సరే. కనీసం మంచినీళ్ళు?" },
          },
        ],
      },
      {
        partner: "I'll tell him you came.",
        te: "మీరు వచ్చారని ఆయనకి చెప్తాను.",
        hint: { en: "Thank her, and say you will phone him later.", te: "థాంక్స్ చెప్పి, తర్వాత ఆయనకి ఫోన్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you, aunty. I'll call him later.", good: true, skill: "polite" },
          { say: "Thank you, aunty. I will calling him later.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
