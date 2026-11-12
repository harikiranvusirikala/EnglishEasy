import type { Lesson } from "../../types";

/** Week 41, Day 4 (CURRICULUM §5): listener questions in the past — What happened next? Where were you going at that time? (Fix-it 3). */
export const day: Lesson = {
  id: "what-happened-next-story",
  kind: "lesson",
  title: { en: "What Happened Next?", te: "తర్వాత ఏమైంది?" },
  subtitle: "What happened next? / Where were you going?",
  summary: {
    en: "Learn to ask good questions while a friend tells a story: What happened next? Where were you going?",
    te: "స్నేహితులు కథ చెప్తుంటే మంచి ప్రశ్నలు అడగడం నేర్చుకుందాం: What happened next? Where were you going?",
  },
  seo: {
    title: "Asking About a Story in English for Telugu Speakers",
    description:
      "Ask What happened next? and Where were you going at that time? Simple lessons for Telugu speakers on being a good listener.",
  },
  pattern: [
    { text: "What", role: "what" },
    { text: "happened", role: "action" },
    { text: "next", role: "when" },
  ],
  core: [
    { en: "What happened next?", te: "తర్వాత ఏమైంది?", extra: ["did"] },
    { en: "Where were you going at that time?", te: "ఆ సమయంలో మీరు ఎక్కడికి వెళ్తున్నారు?", extra: ["was"] },
    { en: "Did anyone help you?", te: "ఎవరైనా మీకు సహాయం చేశారా?", extra: ["helped"] },
    { en: "Oh no! Were you hurt?", te: "అయ్యో! మీకు దెబ్బలు తగిలాయా?", extra: ["Did"] },
    { en: "Go on, I'm listening.", te: "చెప్పండి, వింటున్నాను." },
    { en: "Thank God you are safe.", te: "దేవుడి దయ, మీరు క్షేమంగా ఉన్నారు." },
    { en: "Who was with you?", te: "మీతో ఎవరున్నారు?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone tells you about their day, ask two questions: one with What happened, and one with Did.",
    te: "ఎవరైనా వాళ్ళ రోజు గురించి చెప్తుంటే రెండు ప్రశ్నలు అడగండి: ఒకటి What happened తో, ఇంకొకటి Did తో.",
  },
  words: [
    { en: "What happened next?", te: "తర్వాత ఏమైంది?" },
    { en: "anyone", te: "ఎవరైనా" },
    { en: "Oh no!", te: "అయ్యో!" },
    { en: "Thank God", te: "హమ్మయ్య, దేవుడి దయ" },
    { en: "go on", te: "చెప్పండి, కొనసాగించండి" },
  ],
  grammar: ["question-words", "yes-no-questions", "past-simple"],
  topics: ["people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Questions that keep a story going", te: "కథని ముందుకి నడిపించే ప్రశ్నలు" },
      body: {
        en: "Good listeners ask short questions. What happened? needs no did. Other questions put did, was or were before you: Where were you going?",
        te: "బాగా వినేవాళ్ళు చిన్న ప్రశ్నలు అడుగుతారు. What happened? లో did రాదు. మిగతా ప్రశ్నల్లో did, was, were అనేవి you కంటే ముందు వస్తాయి: Where were you going?",
      },
      bridge: {
        te: ["తర్వాత", "ఏమైంది?"],
        en: [
          { text: "What", role: "what" },
          { text: "happened", role: "action" },
          { text: "next", role: "when" },
        ],
      },
      examples: [
        { en: "What happened next?", te: "తర్వాత ఏమైంది?" },
        { en: "Where were you going at that time?", te: "ఆ సమయంలో మీరు ఎక్కడికి వెళ్తున్నారు?" },
        { en: "Did anyone help you?", te: "ఎవరైనా మీకు సహాయం చేశారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "did or no did?", te: "did కావాలా, వద్దా?" },
      items: [
        {
          form: "What happened? / Who called?",
          useFor: { en: "Asking who or what did it: no did.", te: "ఎవరు చేశారు, ఏం జరిగింది అని అడిగితే: did రాదు." },
          example: { en: "Who called the ambulance?", te: "ambulance కి ఎవరు ఫోన్ చేశారు?" },
        },
        {
          form: "Did … + plain verb?",
          useFor: { en: "Yes or no about an action: the verb stays plain.", te: "ఒక పని జరిగిందా లేదా అని: verb మారదు." },
          example: { en: "Did anyone help you?", te: "ఎవరైనా మీకు సహాయం చేశారా?" },
        },
        {
          form: "Where were you …-ing?",
          useFor: { en: "Asking about the background: were comes before you.", te: "అప్పుడు జరుగుతున్నదాని గురించి: were, you కంటే ముందు." },
          example: { en: "Where were you going at that time?", te: "ఆ సమయంలో మీరు ఎక్కడికి వెళ్తున్నారు?" },
        },
        {
          form: "Oh no! / Go on",
          useFor: { en: "Short words that show you are listening.", te: "మీరు వింటున్నారని చూపించే చిన్న మాటలు." },
          example: { en: "Go on, I'm listening.", te: "చెప్పండి, వింటున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What did happen next?",
      right: "What happened next?",
      why: {
        en: "When what is the thing that happened, the question needs no did; the verb takes the past form.",
        te: "జరిగినదే what అయినప్పుడు did రాదు; verb నేరుగా past లో వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "Where you were going at that time?",
      right: "Where were you going at that time?",
      why: {
        en: "In a question, were comes before you; Telugu keeps the same order for a question.",
        te: "ప్రశ్నలో were, you కంటే ముందు వస్తుంది; తెలుగులో ప్రశ్నకీ వాక్యానికీ వరుస మారదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your friend stops in the middle of her story. Ask her to tell the next part.",
        te: "మీ స్నేహితురాలు కథ మధ్యలో ఆగారు. తర్వాతి భాగం చెప్పమని అడగండి.",
      },
      options: ["What happened next?", "What did happen next?", "What happen next?"],
      answer: 0,
      why: {
        en: "Here what is the thing that happened, so there is no did, and happen takes -ed.",
        te: "ఇక్కడ జరిగినదే what, అందుకే did రాదు; happen కి past -ed వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "question",
      sentence: "___ anyone help you?",
      te: "ఎవరైనా మీకు సహాయం చేశారా?",
      options: ["Did", "Was", "Do"],
      answer: 0,
      why: {
        en: "A yes or no question about a past action starts with did, and help stays plain.",
        te: "గతంలో జరిగిన పని గురించి అవునా కాదా ప్రశ్న did తో మొదలవుతుంది; help మారదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend asks about the man who helped you. He drives an auto near the temple every day. What do you say?",
        te: "మీకు సహాయం చేసిన ఆయన గురించి స్నేహితులు అడుగుతున్నారు. ఆయన రోజూ గుడి దగ్గర ఆటో నడుపుతారు. ఏమంటారు?",
      },
      options: ["He drives an auto near the temple.", "He drive an auto near the temple.", "He is drive an auto near the temple."],
      answer: 0,
      why: {
        en: "For one man doing a daily job, the verb takes s; Telugu shows it in నడుపుతారు instead.",
        te: "ఒక వ్యక్తి రోజూ చేసే పనికి verb కి s వస్తుంది; తెలుగులో అది 'నడుపుతారు' లోనే ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Where was you going at that time?",
      wrongIndex: 1,
      fix: "Where were you going at that time?",
      why: {
        en: "You always takes were, never was, even when you talk to one person.",
        te: "you తో ఎప్పుడూ were; ఒక్కరితో మాట్లాడినా was రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your neighbour says: I fell down at the market yesterday! Ask if someone helped her.",
        te: "నిన్న మార్కెట్‌లో పడిపోయాను అని పక్కింటావిడ చెప్పారు. ఎవరైనా సహాయం చేశారా అని అడగండి.",
      },
      expected: ["Oh no! Did anyone help you?", "Did anyone help you?", "Did someone help you?"],
      options: ["Oh no! Did anyone help you?", "Oh no! Anyone helped you?", "Oh no! Did anyone helped you?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend says a bus nearly hit him last week. Ask where he was going.",
        te: "పోయిన వారం ఒక బస్సు తనని దాదాపు గుద్దేసిందని మీ స్నేహితుడు చెప్పారు. ఎక్కడికి వెళ్తున్నారని అడగండి.",
      },
      expected: ["Where were you going at that time?", "Where were you going?", "Oh no! Where were you going?"],
      options: ["Where were you going at that time?", "Where you were going at that time?", "Where did you going at that time?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Kavitha's story", te: "కవిత గారి కథ" },
    scene: {
      en: "Your friend Kavitha calls you. Something happened to her on the way to the temple.",
      te: "మీ స్నేహితురాలు కవిత గారు ఫోన్ చేశారు. గుడికి వెళ్ళే దారిలో ఆవిడకి ఏదో జరిగింది.",
    },
    partner: { en: "Kavitha (your friend)", te: "కవిత (మీ స్నేహితురాలు)" },
    skills: [
      { id: "ask", label: { en: "Asking about a story", te: "కథ గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! You won't believe what happened this morning!",
        te: "హలో! ఈ రోజు పొద్దున ఏం జరిగిందో మీరు నమ్మలేరు!",
        hint: { en: "Show surprise, and ask her to tell you about it.", te: "ఆశ్చర్యం చూపించి, ఏం జరిగిందో చెప్పమని అడగండి." },
        replies: [
          { say: "Oh! What happened? Tell me.", good: true, skill: "ask" },
          { say: "Oh! What happen? Tell me.", good: false, skill: "ask" },
        ],
      },
      {
        partner: "I was walking to the temple. Suddenly a bike hit me, and I fell.",
        te: "నేను గుడికి నడుచుకుంటూ వెళ్తున్నాను. ఉన్నట్టుండి ఒక bike నన్ను గుద్దింది, నేను పడిపోయాను.",
        hint: { en: "Show you are worried, and ask if she got hurt.", te: "కంగారు చూపించి, దెబ్బలు తగిలాయా అని అడగండి." },
        replies: [
          { say: "Oh no! Were you hurt?", good: true, skill: "ask" },
          { say: "Oh no! Did you hurt?", good: false, skill: "ask" },
          {
            say: "Why were you walking on the road, then?",
            good: false,
            skill: "polite",
            react: { en: "That's not kind! There is no footpath there.", te: "అలా అనకండి! అక్కడ footpath లేదు." },
          },
        ],
      },
      {
        partner: "Just a small cut on my knee. But my flowers fell everywhere!",
        te: "మోకాలికి చిన్న గాయం, అంతే. కానీ నా పూలన్నీ కింద పడిపోయాయి!",
        hint: { en: "Tell her to keep going with the story.", te: "కథ కొనసాగించమని చెప్పండి." },
        replies: [
          { say: "Go on, I'm listening. What happened next?", good: true, skill: "ask" },
          { say: "Go on, I'm listening you. What happened next?", good: false, skill: "ask", fixIt: "preposition" },
        ],
      },
      {
        partner: "A young man stopped and helped me. He even bought me new flowers!",
        te: "ఒక యువకుడు ఆగి నాకు సహాయం చేశారు. కొత్త పూలు కూడా కొనిచ్చారు!",
        hint: { en: "Say you are glad she is safe, and praise the young man.", te: "ఆవిడ క్షేమంగా ఉన్నందుకు సంతోషమని చెప్పి, ఆ యువకుడిని మెచ్చుకోండి." },
        replies: [
          { say: "Thank God you are safe. He was a very kind man!", good: true, skill: "polite" },
          { say: "Thank God you are safe. He was very kind man!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
