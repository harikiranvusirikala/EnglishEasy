import type { Lesson } from "../../types";

/** Week 79, Day 1 (CURRICULUM §5): persuading a friend kindly — You should really try the yoga class. */
export const day: Lesson = {
  id: "you-should-really-try-it",
  kind: "lesson",
  title: { en: "You Should Really Try It", te: "ఒక్కసారి try చేయండి" },
  subtitle: "You should really …",
  summary: {
    en: "Learn to persuade a friend kindly: You should really try the yoga class. Trust me, you'll really enjoy it.",
    te: "స్నేహితుల్ని మెల్లగా ఒప్పించడం నేర్చుకుందాం: You should really try the yoga class. Trust me, you'll really enjoy it.",
  },
  seo: {
    title: "Persuading a Friend in English for Telugu Speakers",
    description:
      "Say You should really try it and Trust me, you'll enjoy it. Simple lessons for Telugu speakers on persuading a friend kindly.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "should really try", role: "action" },
    { text: "the yoga class", role: "what" },
  ],
  core: [
    { en: "You should really try it.", te: "మీరు ఒక్కసారి తప్పకుండా try చేయాలి.", extra: ["trying"] },
    { en: "You should really try the yoga class.", te: "మీరు యోగా క్లాస్ ఒక్కసారి తప్పకుండా try చేయాలి.", extra: ["to"] },
    { en: "You should really see a doctor about that cough.", te: "ఆ దగ్గు గురించి మీరు తప్పకుండా డాక్టర్‌కి చూపించుకోవాలి.", extra: ["seeing"] },
    { en: "Why don't you come with me tomorrow?", te: "రేపు నాతో రావొచ్చు కదా?", extra: ["coming"] },
    { en: "Trust me, you'll really enjoy it.", te: "నన్ను నమ్మండి, మీకు నిజంగా బాగా నచ్చుతుంది.", extra: ["enjoying"] },
    { en: "It's only an hour, and it's really good for your knees.", te: "ఒక్క గంటే, పైగా మీ మోకాళ్ళకి చాలా మంచిది.", extra: ["a"] },
    { en: "You should really give it a try. You'll love it.", te: "ఒక్కసారి try చేసి చూడండి. మీకు చాలా నచ్చుతుంది.", extra: ["loving"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one good habit you have. Tell a friend about it today: You should really try …",
    te: "మీకున్న ఒక మంచి అలవాటు గుర్తు చేసుకోండి. ఈ రోజు ఒక స్నేహితులకి దాని గురించి చెప్పండి: You should really try …",
  },
  words: [
    { en: "you should really", te: "మీరు తప్పకుండా … చేయాలి" },
    { en: "give it a try", te: "ఒకసారి ప్రయత్నించి చూడటం" },
    { en: "trust me", te: "నన్ను నమ్మండి" },
    { en: "persuade", te: "ఒప్పించడం" },
    { en: "you'll love it", te: "మీకు చాలా నచ్చుతుంది" },
  ],
  grammar: ["should-must-have-to", "politeness-softening", "question-words"],
  topics: ["people", "health", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "You should really …", te: "తప్పకుండా … చేయండి" },
      body: {
        en: "To persuade a friend kindly, say You should really and the plain verb: You should really try it. Say really a little stronger, to show you mean it.",
        te: "స్నేహితుల్ని మెల్లగా ఒప్పించాలంటే You should really తర్వాత verb అలాగే వాడండి: You should really try it. really ని కొంచెం గట్టిగా అంటే మనస్ఫూర్తిగా చెప్తున్నారని తెలుస్తుంది.",
      },
      bridge: {
        te: ["మీరు", "యోగా క్లాస్", "తప్పకుండా try చేయాలి"],
        en: [
          { text: "You", role: "who" },
          { text: "should really try", role: "action" },
          { text: "the yoga class", role: "what" },
        ],
      },
      examples: [
        { en: "You should really try it.", te: "మీరు ఒక్కసారి తప్పకుండా try చేయాలి." },
        { en: "You should really try the yoga class.", te: "మీరు యోగా క్లాస్ ఒక్కసారి తప్పకుండా try చేయాలి." },
        { en: "You should really see a doctor about that cough.", te: "ఆ దగ్గు గురించి మీరు తప్పకుండా డాక్టర్‌కి చూపించుకోవాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to persuade kindly", te: "మెల్లగా ఒప్పించే మాటలు" },
      items: [
        {
          form: "You should really …",
          useFor: { en: "Give strong, friendly advice.", te: "గట్టిగా, స్నేహంగా సలహా ఇవ్వడానికి." },
          example: { en: "You should really see a doctor about that cough.", te: "ఆ దగ్గు గురించి మీరు తప్పకుండా డాక్టర్‌కి చూపించుకోవాలి." },
        },
        {
          form: "Why don't you …?",
          useFor: { en: "Suggest it softly, as a question.", te: "ప్రశ్నలాగా మెల్లగా సూచించడానికి." },
          example: { en: "Why don't you come with me tomorrow?", te: "రేపు నాతో రావొచ్చు కదా?" },
        },
        {
          form: "Trust me, …",
          useFor: { en: "Say you know it is good.", te: "అది మంచిదని మీకు తెలుసని చెప్పడానికి." },
          example: { en: "Trust me, you'll really enjoy it.", te: "నన్ను నమ్మండి, మీకు నిజంగా బాగా నచ్చుతుంది." },
        },
        {
          form: "Give it a try.",
          useFor: { en: "Ask your friend to try it once.", te: "ఒక్కసారి ప్రయత్నించమని అడగడానికి." },
          example: { en: "You should really give it a try. You'll love it.", te: "ఒక్కసారి try చేసి చూడండి. మీకు చాలా నచ్చుతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Why you don't try the yoga class?",
      right: "Why don't you try the yoga class?",
      why: {
        en: "A Why question puts don't before you, unlike the Telugu order.",
        te: "Why ప్రశ్నలో don't, you కంటే ముందు వస్తుంది; తెలుగు వరుస వేరు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am doing yoga daily.",
      right: "I do yoga every day.",
      why: {
        en: "A habit takes the simple verb; am + -ing is only for now or a fixed plan.",
        te: "అలవాటుకి verb మామూలుగానే వస్తుంది; am + -ing ఇప్పుడు జరుగుతున్నదానికి, ఖాయమైన ప్లాన్‌కి మాత్రమే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Your friend Gopal has had a cough for two weeks. Persuade him to see a doctor.",
        te: "మీ స్నేహితుడు గోపాల్ గారికి రెండు వారాలుగా దగ్గు ఉంది. డాక్టర్‌కి చూపించుకోమని ఆయన్ని ఒప్పించండి.",
      },
      options: ["You should really see a doctor about it.", "You should really see doctor about it.", "You should really to see a doctor about it."],
      answer: 0,
      why: {
        en: "One doctor needs a before it, and should takes the plain verb with no to.",
        te: "ఒక డాక్టర్ కాబట్టి ముందు a కావాలి; should తర్వాత to లేకుండా verb వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "You should really ___ the yoga class.",
      te: "మీరు యోగా క్లాస్ ఒక్కసారి తప్పకుండా try చేయాలి.",
      options: ["try", "trying", "to try"],
      answer: 0,
      why: {
        en: "After should, the verb stays plain, with no -ing and no to.",
        te: "should తర్వాత verb అలాగే ఉంటుంది; -ing గానీ to గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour says: Trust me, you'll really enjoy it. What does she mean?",
        te: "పక్కింటావిడ Trust me, you'll really enjoy it. అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["She is sure you will like it.", "She thinks you won't like it.", "She is asking if you liked it."],
      answer: 0,
      why: {
        en: "Trust me shows she is sure, and really makes her promise stronger.",
        te: "Trust me అంటే ఆవిడకి గట్టి నమ్మకం ఉంది; really ఆ మాటని ఇంకా బలంగా చేస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My friend Usha come to the class every morning.",
      wrongIndex: 3,
      fix: "My friend Usha comes to the class every morning.",
      why: {
        en: "One person, like Usha, takes s on the verb: comes, goes, does.",
        te: "ఒక్కరి గురించి అయితే (ఉష గారి లాగా) verb కి s వస్తుంది: comes, goes, does.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend Mohan sits at home all day. Suggest softly that he comes for a walk with you.",
        te: "మీ స్నేహితుడు మోహన్ గారు రోజంతా ఇంట్లోనే కూర్చుంటారు. మీతో నడకకి రమ్మని మెల్లగా సూచించండి.",
      },
      expected: ["Why don't you come for a walk with me?", "You should really come for a walk with me.", "Why don't you come with me for a walk?"],
      options: ["Why don't you come for a walk with me?", "Why you don't come for a walk with me?", "Why don't you coming for a walk with me?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend Kavitha is not sure about the new library. Tell her she should really try it.",
        te: "కొత్త లైబ్రరీ గురించి మీ స్నేహితురాలు కవిత గారికి నమ్మకం లేదు. ఒక్కసారి తప్పకుండా try చేయమని చెప్పండి.",
      },
      expected: ["You should really try it. You'll love it.", "You should really give it a try.", "Trust me, you'll love it.", "You should really try it."],
      options: ["You should really try it. You'll love it.", "You should really trying it. You'll love it.", "Try it if you want. I don't care."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Join the yoga class!", te: "యోగా క్లాస్‌లో చేరండి!" },
    scene: {
      en: "A yoga class meets at the community hall every morning. You meet your friend Sarala at the vegetable stall. Her knees are stiff.",
      te: "ప్రతి రోజు పొద్దున కమ్యూనిటీ హాల్‌లో యోగా క్లాస్ జరుగుతుంది. కూరగాయల బండి దగ్గర మీ స్నేహితురాలు సరళ గారు కలిశారు. ఆవిడ మోకాళ్ళు బిగుసుకుపోయాయి.",
    },
    partner: { en: "Sarala (your friend)", te: "సరళ (మీ స్నేహితురాలు)" },
    skills: [
      { id: "persuade", label: { en: "Persuading kindly", te: "మెల్లగా ఒప్పించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! You look very fresh these days. What's the secret?",
        te: "హలో! ఈ మధ్య మీరు చాలా హుషారుగా కనిపిస్తున్నారు. రహస్యం ఏంటి?",
        hint: { en: "Say you go to a yoga class every morning.", te: "రోజూ పొద్దున యోగా క్లాస్‌కి వెళ్తారని చెప్పండి." },
        replies: [
          { say: "Thank you! I go to a yoga class every morning.", good: true, skill: "persuade" },
          { say: "Thank you! I go to yoga class every morning.", good: false, skill: "persuade", fixIt: "article" },
        ],
      },
      {
        partner: "Yoga? My knees hurt. I don't think I can do it.",
        te: "యోగానా? నా మోకాళ్ళు నొప్పి. నేను చేయగలనని అనుకోవట్లేదు.",
        hint: { en: "Tell her kindly she should really try it, because it helps the knees.", te: "మోకాళ్ళకి మంచిది కాబట్టి ఒక్కసారి తప్పకుండా try చేయమని మెల్లగా చెప్పండి." },
        replies: [
          { say: "You should really try it. It's very good for your knees.", good: true, skill: "persuade" },
          { say: "Trust me, it really helps the knees.", good: true, skill: "persuade" },
          {
            say: "Then stay at home with your bad knees.",
            good: false,
            skill: "polite",
            react: { en: "Oh! That's not very kind.", te: "అయ్యో! అలా అనడం బాగాలేదు." },
          },
        ],
      },
      {
        partner: "But I'm sixty-eight. Are there people my age?",
        te: "కానీ నాకు అరవై ఎనిమిదేళ్ళు. నా వయసువాళ్ళు ఉంటారా?",
        hint: { en: "Say many people your age come, and invite her to come with you tomorrow.", te: "మీ వయసువాళ్ళు చాలామంది వస్తారని చెప్పి, రేపు మీతో రమ్మని పిలవండి." },
        replies: [
          { say: "Yes, many people our age come. Why don't you come with me tomorrow?", good: true, skill: "persuade" },
          { say: "Yes, many people our age come. Why you don't come with me tomorrow?", good: false, skill: "persuade", fixIt: "question" },
        ],
      },
      {
        partner: "All right, I'll give it a try. See you at six!",
        te: "సరే, ఒకసారి try చేస్తాను. ఆరింటికి కలుద్దాం!",
        hint: { en: "Say you are happy, and say goodbye.", te: "సంతోషంగా ఉందని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Wonderful! See you tomorrow at six. Bye!", good: true, skill: "polite" },
          { say: "Wonderful! See you on tomorrow at six. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
