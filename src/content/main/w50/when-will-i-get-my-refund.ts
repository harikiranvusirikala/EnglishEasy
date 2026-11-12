import type { Lesson } from "../../types";

/** Week 50, Day 4 (CURRICULUM §5): refund words — credited, working days, account — and following up a refund by phone. */
export const day: Lesson = {
  id: "when-will-i-get-my-refund",
  kind: "lesson",
  title: { en: "When Will I Get My Refund?", te: "రీఫండ్ ఎప్పుడు?" },
  subtitle: "credited, working days",
  summary: {
    en: "Learn to follow up a refund: When will the money come back to my account? It will be credited in five to seven working days.",
    te: "రీఫండ్ గురించి మళ్ళీ అడగడం నేర్చుకుందాం: When will the money come back to my account? It will be credited in five to seven working days.",
  },
  seo: {
    title: "Asking About a Refund in English for Telugu Speakers",
    description:
      "Say When will I get my refund? and understand credited and working days. Simple lessons for Telugu speakers on following up a refund.",
  },
  pattern: [
    { text: "When will", role: "when" },
    { text: "I", role: "who" },
    { text: "get", role: "action" },
    { text: "my refund?", role: "what" },
  ],
  core: [
    { en: "When will I get my refund?", te: "నా రీఫండ్ ఎప్పుడు వస్తుంది?", extra: ["did"] },
    { en: "I'm calling about my refund for a kettle.", te: "ఒక kettle రీఫండ్ గురించి ఫోన్ చేస్తున్నాను.", extra: ["call"] },
    { en: "When will the money come back to my account?", te: "డబ్బులు నా అకౌంట్‌లోకి ఎప్పుడు తిరిగి వస్తాయి?", extra: ["comes"] },
    { en: "It will be credited in five to seven working days.", te: "ఐదు నుంచి ఏడు working days లో మీ అకౌంట్‌లో పడతాయి.", extra: ["day"] },
    { en: "Can you give me a reference number, please?", te: "ఒక reference number ఇస్తారా, please?", extra: ["an"] },
    { en: "I returned it ten days ago, but the money hasn't come.", te: "పది రోజుల క్రితం వాపస్ ఇచ్చాను, కానీ డబ్బులు ఇంకా రాలేదు.", extra: ["before"] },
    { en: "Your refund has been processed today.", te: "మీ రీఫండ్ ఈ రోజు process అయింది.", extra: ["was"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at one bank SMS on your phone. Find the amount and the words credited or debited.",
    te: "మీ ఫోన్‌లో బ్యాంక్ నుంచి వచ్చిన ఏదైనా ఒక SMS చూడండి. అందులో amount, credited లేదా debited అనే పదాలు వెతకండి.",
  },
  words: [
    { en: "credited", te: "అకౌంట్‌లో డబ్బులు పడటం" },
    { en: "debited", te: "అకౌంట్ నుంచి డబ్బులు కట్ అవ్వడం" },
    { en: "bank account", te: "బ్యాంక్ అకౌంట్, ఖాతా" },
    { en: "processed", te: "process అయింది, షాపు వైపు పని పూర్తయింది" },
    { en: "reference number", te: "reference number, తర్వాత అడగడానికి ఇచ్చే నంబర్" },
  ],
  grammar: ["will", "question-words", "present-perfect"],
  topics: ["shopping", "money", "bank", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When will …?", te: "ఎప్పుడు వస్తుంది?" },
      body: {
        en: "To ask about later, say When will, then who, then the verb. In the answer, credited means the money reaches your account.",
        te: "తర్వాత జరిగేదాని గురించి When will + ఎవరు + verb. జవాబులో credited అంటే డబ్బులు మీ అకౌంట్‌లో పడటం.",
      },
      bridge: {
        te: ["నాకు", "రీఫండ్", "ఎప్పుడు", "వస్తుంది?"],
        en: [
          { text: "When will", role: "when" },
          { text: "I", role: "who" },
          { text: "get", role: "action" },
          { text: "my refund?", role: "what" },
        ],
      },
      examples: [
        { en: "When will I get my refund?", te: "నా రీఫండ్ ఎప్పుడు వస్తుంది?" },
        { en: "I returned it ten days ago, but the money hasn't come.", te: "పది రోజుల క్రితం వాపస్ ఇచ్చాను, కానీ డబ్బులు ఇంకా రాలేదు." },
        { en: "Your refund has been processed today.", te: "మీ రీఫండ్ ఈ రోజు process అయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Refund words", te: "రీఫండ్ పదాలు" },
      items: [
        {
          form: "processed",
          useFor: { en: "The shop has done its part.", te: "షాపు వైపు నుంచి పని పూర్తయింది." },
          example: { en: "Your refund has been processed today.", te: "మీ రీఫండ్ ఈ రోజు process అయింది." },
        },
        {
          form: "credited",
          useFor: { en: "The money is in your account.", te: "డబ్బులు మీ అకౌంట్‌లో పడ్డాయి." },
          example: { en: "The refund was credited this morning.", te: "రీఫండ్ ఈ రోజు పొద్దున అకౌంట్‌లో పడింది." },
        },
        {
          form: "debited",
          useFor: { en: "The money has gone out of your account.", te: "డబ్బులు మీ అకౌంట్ నుంచి కట్ అయ్యాయి." },
          example: { en: "The money was debited twice from my account.", te: "నా అకౌంట్ నుంచి రెండుసార్లు డబ్బులు కట్ అయ్యాయి." },
        },
        {
          form: "working days",
          useFor: { en: "Days the bank works, not Sundays or holidays.", te: "బ్యాంకు పని చేసే రోజులు; ఆదివారాలు, సెలవులు లెక్కలోకి రావు." },
          example: { en: "It will be credited in five to seven working days.", te: "ఐదు నుంచి ఏడు working days లో మీ అకౌంట్‌లో పడతాయి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "When I will get my refund?",
      right: "When will I get my refund?",
      why: {
        en: "In a question, will comes before I; Telugu keeps one order, so we forget.",
        te: "ప్రశ్నలో will, I కంటే ముందు వస్తుంది; తెలుగులో వరుస మారదు, అందుకే మర్చిపోతాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "It take five to seven working days.",
      right: "It takes five to seven working days.",
      why: {
        en: "With it, he or she, the verb needs s, even in a long sentence.",
        te: "it, he, she తో verb కి s వస్తుంది, వాక్యం పెద్దదైనా సరే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Customer care says your refund is done. Ask for a number to quote later.",
        te: "మీ రీఫండ్ అయిపోయిందని customer care వాళ్ళు చెప్పారు. తర్వాత చెప్పడానికి ఒక నంబర్ అడగండి.",
      },
      options: ["Can you give me a reference number, please?", "Can you give me reference number, please?", "You give me a reference number?"],
      answer: 0,
      why: {
        en: "One number needs a before it, and a question starts with can.",
        te: "ఒక నంబర్ కాబట్టి ముందు a కావాలి; ప్రశ్న can తో మొదలవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "It will be credited in five to seven working ___.",
      te: "ఐదు నుంచి ఏడు working days లో మీ అకౌంట్‌లో పడతాయి.",
      options: ["days", "day", "day's"],
      answer: 0,
      why: {
        en: "After five to seven, day needs s, because there are many days.",
        te: "five to seven తర్వాత day కి s వస్తుంది, చాలా రోజులు కాబట్టి.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Sri Durga Electronics",
      lines: [
        "Dear Customer,",
        "Your refund of 1,850 rupees has been processed.",
        "It will be credited to your bank account in 5 to 7 working days.",
        "Ref No: RF 20931",
        "We never ask for your OTP or PIN.",
      ],
      prompt: { en: "You got this SMS. When will the money reach your account?", te: "మీకు ఈ SMS వచ్చింది. డబ్బులు మీ అకౌంట్‌లో ఎప్పుడు పడతాయి?" },
      options: ["In 5 to 7 working days", "Today", "In 2 working days"],
      answer: 0,
      why: {
        en: "The third line says how long the bank needs to add the money.",
        te: "బ్యాంకులో డబ్బులు పడటానికి ఎన్ని రోజులో మూడో లైన్‌లో ఉంది.",
      },
      say: "It will be credited to your bank account in 5 to 7 working days.",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I returned it ten days before, but the money hasn't come.",
      wrongIndex: 5,
      fix: "I returned it ten days ago, but the money hasn't come.",
      why: {
        en: "Counting back from now, English says ago; before needs another time after it.",
        te: "ఇప్పటి నుంచి వెనక్కి లెక్కపెడితే ago; before తర్వాత ఇంకో టైమ్ రావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Call the shop. Ask when the money will come back to your account.",
        te: "షాపుకి ఫోన్ చేయండి. డబ్బులు మీ అకౌంట్‌లోకి ఎప్పుడు తిరిగి వస్తాయో అడగండి.",
      },
      expected: ["When will the money come back to my account?", "When will I get my refund?", "When will my refund come?"],
      options: ["When will the money come back to my account?", "When the money will come back to my account?", "When did the money come back to my account?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Customer care asks: You haven't received the money yet? You haven't. Answer clearly.",
        te: "customer care వాళ్ళు అడిగారు: You haven't received the money yet? మీకు ఇంకా రాలేదు. స్పష్టంగా జవాబు చెప్పండి.",
      },
      expected: ["No, I haven't received it yet.", "No, I haven't.", "No, not yet."],
      options: ["No, I haven't received it yet.", "Yes, I haven't received it yet.", "No, I didn't received it yet."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Following up a refund", te: "రీఫండ్ గురించి ఫోన్" },
    scene: {
      en: "Ten days ago you returned a kettle. The money is not in your account yet, so you call the shop.",
      te: "పది రోజుల క్రితం మీరు ఒక kettle వాపస్ ఇచ్చారు. డబ్బులు ఇంకా అకౌంట్‌లో పడలేదు, అందుకే షాపుకి ఫోన్ చేశారు.",
    },
    partner: { en: "Geetha (customer care)", te: "గీత (customer care)" },
    skills: [
      { id: "follow", label: { en: "Following up", te: "మళ్ళీ అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good afternoon, Sri Durga Electronics. How may I help you?",
        te: "నమస్కారం, శ్రీ దుర్గా ఎలక్ట్రానిక్స్. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Greet her, and say why you are calling.", te: "నమస్కారం చెప్పి, ఎందుకు ఫోన్ చేశారో చెప్పండి." },
        replies: [
          { say: "Good afternoon. I'm calling about my refund for a kettle.", good: true, skill: "follow" },
          { say: "Good afternoon. Myself Sai, calling about my refund.", good: false, skill: "follow", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Sure. May I have your bill number, please?",
        te: "సరే. మీ బిల్లు నంబర్ చెప్తారా?",
        hint: { en: "Read out the number on your bill, one digit at a time.", te: "బిల్లు మీద నంబర్‌ని ఒక్కో అంకె విడిగా చదవండి." },
        replies: [
          { say: "Yes, it's four seven two one.", good: true, skill: "follow" },
          { say: "Yes, it's four thousand seven hundred twenty-one.", good: false, skill: "follow" },
        ],
      },
      {
        partner: "Thank you. Your refund was processed on Monday.",
        te: "థాంక్యూ. మీ రీఫండ్ సోమవారం process అయింది.",
        hint: { en: "Ask when the money will reach your account.", te: "డబ్బులు మీ అకౌంట్‌లో ఎప్పుడు పడతాయో అడగండి." },
        replies: [
          { say: "When will it be credited to my account?", good: true, skill: "follow" },
          { say: "When will the money come back to my account?", good: true, skill: "follow" },
          { say: "When it will come to my account?", good: false, skill: "follow", fixIt: "question" },
        ],
      },
      {
        partner: "It takes five to seven working days. Please wait till Friday.",
        te: "ఐదు నుంచి ఏడు working days పడుతుంది. శుక్రవారం దాకా ఆగండి.",
        hint: { en: "Agree, and ask politely for a reference number.", te: "సరే అని, మర్యాదగా reference number అడగండి." },
        replies: [
          { say: "Okay. Can you give me a reference number, please?", good: true, skill: "follow" },
          {
            say: "Seven days? That's too long. Do it today!",
            good: false,
            skill: "polite",
            react: { en: "Sorry, the bank needs that time. I can't make it faster.", te: "sorry అండీ, బ్యాంకుకి అంత టైమ్ పడుతుంది. నేను త్వరగా చేయలేను." },
          },
        ],
      },
      {
        partner: "Sure. It's R F two zero nine. Anything else?",
        te: "తప్పకుండా. R F two zero nine. ఇంకేమైనా కావాలా?",
        hint: { en: "Say there is nothing more, and thank her.", te: "ఇంకేమీ లేదని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you for your help.", good: true, skill: "polite" },
          { say: "Yes, nothing else. Thank you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
