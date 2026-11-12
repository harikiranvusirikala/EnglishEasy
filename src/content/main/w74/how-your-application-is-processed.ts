import type { Lesson } from "../../types";

/** Week 74, Day 3 (CURRICULUM §5): the passive for services — Your form is checked first, then sent to the officer. The card is sent by post in two weeks. */
export const day: Lesson = {
  id: "how-your-application-is-processed",
  kind: "lesson",
  title: { en: "How Your Application Is Processed", te: "మీ అప్లికేషన్ ఎలా ముందుకు వెళ్తుంది" },
  subtitle: "is checked, is approved, is sent by post",
  summary: {
    en: "Learn to follow the steps at an office: Your form is checked first, then sent to the officer.",
    te: "ఆఫీసులో మీ పని ఏ steps లో జరుగుతుందో అర్థం చేసుకోవడం నేర్చుకుందాం: Your form is checked first, then sent to the officer.",
  },
  seo: {
    title: "Following Office Steps in English for Telugu Speakers",
    description:
      "Say Your form is checked first, then sent to the officer. Simple lessons for Telugu speakers on how an application is processed.",
  },
  pattern: [
    { text: "Your form", role: "who" },
    { text: "is sent", role: "action" },
    { text: "to the officer", role: "what" },
    { text: "after that", role: "when" },
  ],
  core: [
    { en: "Your form is checked first.", te: "ముందు మీ ఫారమ్‌ని చెక్ చేస్తారు.", extra: ["check"] },
    { en: "Then it is sent to the officer for approval.", te: "తర్వాత approval కోసం దాన్ని ఆఫీసర్‌కి పంపుతారు.", extra: ["send"] },
    { en: "How long does the whole process take?", te: "మొత్తం పని అవ్వడానికి ఎంత టైమ్ పడుతుంది?", extra: ["much"] },
    { en: "The card is sent by post in two weeks.", te: "రెండు వారాల్లో కార్డు పోస్ట్‌లో పంపుతారు.", extra: ["week"] },
    { en: "You will get an SMS when it is approved.", te: "అప్రూవ్ అయినప్పుడు మీకు SMS వస్తుంది.", extra: ["a"] },
    { en: "If anything is missing, the application is sent back.", te: "ఏదైనా లేకపోతే అప్లికేషన్ వెనక్కి పంపేస్తారు.", extra: ["are"] },
    { en: "Can I check the status online with this number?", te: "ఈ నంబర్‌తో status ఆన్‌లైన్‌లో చూసుకోవచ్చా?", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find any slip from an office or a bank at home. Look for its number, and say: Can I check the status with this number?",
    te: "ఇంట్లో ఏదైనా ఆఫీసు లేదా బ్యాంకు slip వెతకండి. దాని మీద నంబర్ చూసి చెప్పండి: Can I check the status with this number?",
  },
  words: [
    { en: "verification", te: "వెరిఫికేషన్, సరిచూడటం" },
    { en: "approval", te: "అప్రూవల్, ఆమోదం" },
    { en: "under process", te: "పని జరుగుతోంది" },
    { en: "reject", te: "తిరస్కరించడం, reject చేయడం" },
    { en: "applicant", te: "అప్లై చేసినవారు" },
  ],
  grammar: ["passive-voice", "question-words", "prepositions"],
  topics: ["offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What happens to your form", te: "మీ ఫారమ్‌కి ఏం జరుగుతుంది" },
      body: {
        en: "Offices explain their steps with is and the done form. The form matters, not who does the work: Your form is checked first.",
        te: "ఆఫీసుల్లో steps ని is, పూర్తయిన రూపంతో చెప్తారు. ఎవరు చేస్తారన్నది కాదు, ఫారమ్ ముఖ్యం: Your form is checked first.",
      },
      bridge: {
        te: ["ముందు", "మీ ఫారమ్‌ని", "చెక్ చేస్తారు"],
        en: [
          { text: "Your form", role: "who" },
          { text: "is checked", role: "action" },
          { text: "first", role: "when" },
        ],
      },
      examples: [
        { en: "Your form is checked first.", te: "ముందు మీ ఫారమ్‌ని చెక్ చేస్తారు." },
        { en: "Then it is sent to the officer for approval.", te: "తర్వాత approval కోసం దాన్ని ఆఫీసర్‌కి పంపుతారు." },
        { en: "The card is sent by post in two weeks.", te: "రెండు వారాల్లో కార్డు పోస్ట్‌లో పంపుతారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words you hear at the counter", te: "కౌంటర్ దగ్గర వినే మాటలు" },
      items: [
        {
          form: "under verification",
          useFor: { en: "Someone is checking your papers now.", te: "ఇప్పుడు మీ కాగితాలు సరిచూస్తున్నారు." },
          example: { en: "Your application is under verification.", te: "మీ అప్లికేషన్ వెరిఫికేషన్‌లో ఉంది." },
        },
        {
          form: "is approved",
          useFor: { en: "The officer has said yes.", te: "ఆఫీసర్ సరే అన్నారు." },
          example: { en: "You will get an SMS when it is approved.", te: "అప్రూవ్ అయినప్పుడు మీకు SMS వస్తుంది." },
        },
        {
          form: "was rejected",
          useFor: { en: "The officer has said no. Ask for the reason.", te: "ఆఫీసర్ ఒప్పుకోలేదు. కారణం అడగండి." },
          example: { en: "The applicant's photo was missing, so it was rejected.", te: "అప్లై చేసినవారి ఫోటో లేదు, అందుకే reject చేశారు." },
        },
        {
          form: "is sent by post",
          useFor: { en: "It comes to your address. You need not go back.", te: "అది మీ అడ్రస్‌కి వస్తుంది. మళ్ళీ వెళ్ళక్కర్లేదు." },
          example: { en: "The card is sent by post in two weeks.", te: "రెండు వారాల్లో కార్డు పోస్ట్‌లో పంపుతారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "When I will get my card?",
      right: "When will I get my card?",
      why: {
        en: "In a question, will comes before I; Telugu keeps the normal order.",
        te: "ప్రశ్నలో will, I కంటే ముందు వస్తుంది; తెలుగులో మాటల వరుస మారదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The card is sent in post.",
      right: "The card is sent by post.",
      why: {
        en: "For how something travels, English uses by: by post, by bus. Telugu says పోస్ట్‌లో, but in is wrong here.",
        te: "ఎలా వస్తుందో చెప్పడానికి by: by post, by bus. తెలుగులో 'పోస్ట్‌లో' అంటాం, కానీ ఇక్కడ in తప్పు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask the clerk what happens to your form after this.",
        te: "దీని తర్వాత మీ ఫారమ్‌కి ఏం జరుగుతుందో క్లర్క్ గారిని అడగండి.",
      },
      options: ["What happens to my form after this?", "What is happen to my form after this?", "What happening to my form after this?"],
      answer: 0,
      why: {
        en: "Here what is the subject, so happens takes s and needs no is.",
        te: "ఇక్కడ what నే subject, అందుకే happens కి s వస్తుంది; is అక్కర్లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "The card is sent by post in two ___.",
      te: "రెండు వారాల్లో కార్డు పోస్ట్‌లో పంపుతారు.",
      options: ["weeks", "week", "week's"],
      answer: 0,
      why: {
        en: "After two, the word takes s, just as Telugu says వారాలు, not వారం.",
        te: "రెండు తర్వాత s కావాలి; తెలుగులోనూ 'వారం' కాదు, 'వారాలు' అంటాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The clerk says: Your application is under process. What does it mean?",
        te: "క్లర్క్ గారు Your application is under process అన్నారు. దాని అర్థం ఏంటి?",
      },
      options: ["They are still working on it.", "The officer has said no.", "Your card is ready now."],
      answer: 0,
      why: {
        en: "Under process means the work has started but is not finished yet.",
        te: "under process అంటే పని మొదలైంది, కానీ ఇంకా పూర్తి కాలేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "You will get a SMS when it is approved.",
      wrongIndex: 3,
      fix: "You will get an SMS when it is approved.",
      why: {
        en: "SMS starts with the sound es, a vowel sound, so it takes an.",
        te: "SMS 'ఎస్' అనే అచ్చు శబ్దంతో మొదలవుతుంది; అందుకే a కాదు, an.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You gave your form at the Mee Seva counter. Ask how long the whole thing takes.",
        te: "మీ సేవా కౌంటర్‌లో ఫారమ్ ఇచ్చారు. మొత్తం పనికి ఎంత టైమ్ పడుతుందో అడగండి.",
      },
      expected: ["How long does the whole process take?", "How long does it take?", "How many days does it take?", "How long will it take?"],
      options: ["How long does the whole process take?", "How long the whole process takes?", "How much long does the whole process take?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend asks how the new card will come. Say it comes by post.",
        te: "కొత్త కార్డు ఎలా వస్తుందని స్నేహితులు అడుగుతున్నారు. పోస్ట్‌లో వస్తుందని చెప్పండి.",
      },
      expected: ["It is sent by post.", "It comes by post.", "They send it by post."],
      options: ["It is sent by post.", "It is sent in post.", "It sent by post."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the Mee Seva counter", te: "మీ సేవా కౌంటర్ దగ్గర" },
    scene: {
      en: "You are applying for an income certificate at the Mee Seva centre. The clerk, Rahim, takes your form.",
      te: "మీరు మీ సేవా కేంద్రంలో ఇన్‌కమ్ సర్టిఫికెట్‌కి అప్లై చేస్తున్నారు. క్లర్క్ రహీమ్ గారు మీ ఫారమ్ తీసుకుంటున్నారు.",
    },
    partner: { en: "Rahim (the clerk)", te: "రహీమ్ (క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "process", label: { en: "Asking about the steps", te: "steps గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Your form and documents, please.",
        te: "నమస్కారం. మీ ఫారమ్, documents ఇవ్వండి.",
        hint: { en: "Give them, and ask what happens next.", te: "అవి ఇచ్చి, తర్వాత ఏం జరుగుతుందో అడగండి." },
        replies: [
          { say: "Here they are. What are the next steps?", good: true, skill: "process" },
          { say: "Here you are. What happens after this?", good: true, skill: "process" },
          {
            say: "Here. Do it fast, I'm busy.",
            good: false,
            skill: "polite",
            react: { en: "Everyone here is busy. I'll do it as fast as I can.", te: "ఇక్కడ అందరూ బిజీనే. వీలైనంత త్వరగా చేస్తాను." },
          },
        ],
      },
      {
        partner: "First, your documents are checked here. Then the form goes to the officer.",
        te: "ముందు మీ documents ఇక్కడ చెక్ చేస్తాం. తర్వాత ఫారమ్ ఆఫీసర్‌కి వెళ్తుంది.",
        hint: { en: "Ask about the number of days.", te: "ఎన్ని రోజులు పడుతుందో అడగండి." },
        replies: [
          { say: "How long does it take?", good: true, skill: "process" },
          { say: "How many days does it take?", good: true, skill: "process" },
          { say: "How many days it takes?", good: false, skill: "process", fixIt: "question" },
        ],
      },
      {
        partner: "About two weeks. Didn't you get an SMS with your application number?",
        te: "సుమారు రెండు వారాలు. మీ application number తో SMS రాలేదా?",
        hint: { en: "You have not got one. Answer him correctly, and ask him to check.", te: "మీకు రాలేదు. సరిగ్గా జవాబు చెప్పి, చూడమని అడగండి." },
        replies: [
          { say: "No, I didn't. Can you check, please?", good: true, skill: "process" },
          { say: "Yes, I didn't get it. Can you check, please?", good: false, skill: "process", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Ah, I've sent it now. You'll get another SMS when it is approved.",
        te: "ఆ, ఇప్పుడు పంపాను. approve అయినప్పుడు ఇంకో SMS వస్తుంది.",
        hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you very much. Goodbye!", good: true, skill: "polite" },
          { say: "Thank you for your help.", good: true, skill: "polite" },
          { say: "Thanks you very much. Bye!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
