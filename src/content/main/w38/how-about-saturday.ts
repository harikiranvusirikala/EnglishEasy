import type { Lesson } from "../../types";

/** Week 38, Day 2 (CURRICULUM §4): How about …? and Why don't we …? — fixing a day with a friend. */
export const day: Lesson = {
  id: "how-about-saturday",
  kind: "lesson",
  title: { en: "How About Saturday?", te: "శనివారం ఎలా ఉంటుంది?" },
  subtitle: "How about …? Why don't we …?",
  summary: {
    en: "Learn to suggest a day, a place or an idea: How about Saturday? Why don't we meet at the temple?",
    te: "ఒక రోజు, ఒక చోటు, ఒక ఆలోచన సూచించడం నేర్చుకుందాం: How about Saturday? Why don't we meet at the temple?",
  },
  seo: {
    title: "How About and Why Don't We in English for Telugu Speakers",
    description:
      "Say How about Saturday? and Why don't we meet at the temple? Simple lessons for Telugu speakers on fixing a day with friends.",
  },
  pattern: [
    { text: "How about", role: "action" },
    { text: "going", role: "action" },
    { text: "to Srisailam", role: "what" },
    { text: "on Saturday?", role: "when" },
  ],
  core: [
    { en: "How about Saturday?", te: "శనివారం ఎలా ఉంటుంది?", extra: ["in"] },
    { en: "Why don't we meet at the temple?", te: "గుడి దగ్గర కలవొచ్చు కదా?", extra: ["doesn't"] },
    { en: "How about going to Srisailam?", te: "శ్రీశైలం వెళ్తే ఎలా ఉంటుంది?", extra: ["go"] },
    { en: "Is Saturday okay for you?", te: "మీకు శనివారం కుదురుతుందా?", extra: ["Are"] },
    { en: "Why don't we go in the evening?", te: "సాయంత్రం వెళ్ళొచ్చు కదా?", extra: ["going"] },
    { en: "Does Saturday morning suit you?", te: "శనివారం పొద్దున మీకు వీలవుతుందా?", extra: ["Do"] },
    { en: "Let's fix a day for the temple visit.", te: "గుడికి వెళ్ళే రోజు ఖాయం చేద్దాం.", extra: ["fixing"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Suggest a day to someone today with How about …?",
    te: "ఈ రోజు ఎవరికైనా How about …? అని ఒక రోజు సూచించండి.",
  },
  words: [
    { en: "how about", te: "… ఎలా ఉంటుంది?" },
    { en: "why don't we", te: "… చేయొచ్చు కదా?" },
    { en: "suit", te: "వీలవడం, కుదరడం" },
    { en: "fix a day", te: "రోజు ఖాయం చేయడం" },
    { en: "convenient", te: "వీలుగా, అనుకూలంగా" },
  ],
  grammar: ["question-words", "gerunds-infinitives", "politeness-softening"],
  topics: ["people", "time", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How about …? Why don't we …?", te: "… ఎలా ఉంటుంది? … చేయొచ్చు కదా?" },
      body: {
        en: "To suggest a day or a place, say How about and the thing: How about Saturday? With an action, add -ing: How about going? Or say Why don't we and the plain verb.",
        te: "రోజు, చోటు సూచించాలంటే How about తర్వాత ఆ మాట చెప్పండి: How about Saturday? (శనివారం ఎలా ఉంటుంది?). పని అయితే -ing చేర్చండి: How about going? లేదా Why don't we తర్వాత verb అలాగే: Why don't we meet? (కలవొచ్చు కదా?)",
      },
      bridge: {
        te: ["శనివారం", "ఎలా ఉంటుంది?"],
        en: [
          { text: "How about", role: "action" },
          { text: "Saturday?", role: "when" },
        ],
      },
      examples: [
        { en: "How about Saturday?", te: "శనివారం ఎలా ఉంటుంది?" },
        { en: "Why don't we meet at the temple?", te: "గుడి దగ్గర కలవొచ్చు కదా?" },
        { en: "How about going to Srisailam?", te: "శ్రీశైలం వెళ్తే ఎలా ఉంటుంది?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to suggest", te: "సూచించే మాటలు" },
      items: [
        {
          form: "How about + a day or place?",
          useFor: { en: "Suggest a day, a time or a place.", te: "ఒక రోజు, టైమ్, చోటు సూచించడానికి." },
          example: { en: "How about ten o'clock?", te: "పది గంటలకి ఎలా ఉంటుంది?" },
        },
        {
          form: "How about + -ing?",
          useFor: { en: "Suggest an action.", te: "ఒక పని సూచించడానికి." },
          example: { en: "How about going to Srisailam?", te: "శ్రీశైలం వెళ్తే ఎలా ఉంటుంది?" },
        },
        {
          form: "Why don't we …?",
          useFor: { en: "Suggest an action, with the plain verb.", te: "ఒక పని సూచించడానికి; verb మారదు." },
          example: { en: "Why don't we go in the evening?", te: "సాయంత్రం వెళ్ళొచ్చు కదా?" },
        },
        {
          form: "Does … suit you?",
          useFor: { en: "Ask if the day works for your friend.", te: "ఆ రోజు వాళ్ళకి వీలవుతుందా అని అడగడానికి." },
          example: { en: "Does Saturday morning suit you?", te: "శనివారం పొద్దున మీకు వీలవుతుందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Why we don't meet at the temple?",
      right: "Why don't we meet at the temple?",
      why: {
        en: "In a question, don't comes before we; Telugu keeps the normal order.",
        te: "ప్రశ్నలో don't, we కంటే ముందు వస్తుంది; తెలుగులో మాటల వరుస మారదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "How about go to Srisailam?",
      right: "How about going to Srisailam?",
      why: {
        en: "After How about, an action takes -ing, never the plain verb.",
        te: "How about తర్వాత పని వస్తే -ing చేర్చాలి; verb అలాగే రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Suggest meeting your friend on Saturday.", te: "శనివారం కలుద్దామని స్నేహితులకి సూచించండి." },
      options: ["Shall we meet on Saturday?", "Shall we meet in Saturday?", "Shall we meet at Saturday?"],
      answer: 0,
      why: {
        en: "Days take on: on Saturday, on Monday; in and at are not for days.",
        te: "రోజులకి on వస్తుంది: on Saturday, on Monday; in, at రోజులకి రావు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Why don't we ___ in the evening?",
      te: "సాయంత్రం వెళ్ళొచ్చు కదా?",
      options: ["go", "going", "to go"],
      answer: 0,
      why: {
        en: "After Why don't we, the verb stays plain, with no -ing.",
        te: "Why don't we తర్వాత verb అలాగే ఉంటుంది; -ing రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: Why don't we meet at the temple? What does she mean?",
        te: "స్నేహితురాలు Why don't we meet at the temple? అన్నారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["Let's meet at the temple.", "Why didn't you come to the temple?", "We can't meet at the temple."],
      answer: 0,
      why: {
        en: "Why don't we is a friendly suggestion, not a question about a reason.",
        te: "Why don't we అంటే కారణం అడగడం కాదు; ఇది స్నేహంగా చెప్పే సూచన.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Does Saturday morning suits you?",
      wrongIndex: 3,
      fix: "Does Saturday morning suit you?",
      why: {
        en: "After does, the verb loses its s; does already carries it.",
        te: "does తర్వాత verb కి s రాదు; ఆ s, does లోనే ఉంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend asks when to visit the temple. Suggest Saturday.",
        te: "గుడికి ఎప్పుడు వెళ్దామని స్నేహితులు అడుగుతున్నారు. శనివారం అని సూచించండి.",
      },
      expected: ["How about Saturday?", "Why don't we go on Saturday?", "Shall we go on Saturday?", "How about on Saturday?"],
      options: ["How about Saturday?", "How about in Saturday?", "Saturday how is it?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Suggest a trip to Srisailam to your friends.",
        te: "శ్రీశైలం వెళ్దామని స్నేహితులకి సూచించండి.",
      },
      expected: ["How about going to Srisailam?", "Why don't we go to Srisailam?", "Let's go to Srisailam."],
      options: ["How about going to Srisailam?", "Why we don't go to Srisailam?", "How about go to Srisailam?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Fixing a day", te: "రోజు ఖాయం చేయడం" },
    scene: {
      en: "Your friend Geetha calls. She wants to go to the temple with you this week.",
      te: "మీ స్నేహితురాలు గీత గారు ఫోన్ చేశారు. ఈ వారం మీతో కలిసి గుడికి వెళ్ళాలని ఆవిడకి ఉంది.",
    },
    partner: { en: "Geetha (your friend)", te: "గీత (మీ స్నేహితురాలు)" },
    skills: [
      { id: "suggest", label: { en: "How about and Why don't we", te: "How about, Why don't we వాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Shall we go to the temple this week?",
        te: "హలో! ఈ వారం గుడికి వెళ్దామా?",
        hint: { en: "Say yes, and suggest Saturday.", te: "సరే అని, శనివారం సూచించండి." },
        replies: [
          { say: "Yes! How about Saturday?", good: true, skill: "suggest" },
          { say: "Yes! How about in Saturday?", good: false, skill: "suggest", fixIt: "preposition" },
        ],
      },
      {
        partner: "Saturday is good. What time?",
        te: "శనివారం బాగుంది. ఏ టైమ్‌కి?",
        hint: { en: "Suggest going early, at six, before the crowd.", te: "రద్దీ కంటే ముందే, ఆరింటికి వెళ్దామని సూచించండి." },
        replies: [
          { say: "How about going early, at six?", good: true, skill: "suggest" },
          { say: "Why don't we go early, at six?", good: true, skill: "suggest" },
          { say: "How about go early, at six?", good: false, skill: "suggest" },
        ],
      },
      {
        partner: "Six is very early for me! Is seven convenient?",
        te: "ఆరు నాకు చాలా పొద్దున్నే! ఏడు మీకు వీలవుతుందా?",
        hint: { en: "Agree to seven, and suggest a place to meet.", te: "ఏడుకి ఒప్పుకుని, కలిసే చోటు సూచించండి." },
        replies: [
          { say: "Okay, seven. Why don't we meet at the bus stand?", good: true, skill: "suggest" },
          {
            say: "Six is not early. Don't be lazy!",
            good: false,
            skill: "polite",
            react: { en: "Lazy? I'm not lazy! Seven, please.", te: "బద్ధకమా? కాదండీ! ఏడు, ప్లీజ్." },
          },
        ],
      },
      {
        partner: "Okay. Seven o'clock at the bus stand. Bye!",
        te: "సరే. ఏడింటికి బస్ స్టాండ్ దగ్గర. బై!",
        hint: { en: "Agree, and end the call kindly.", te: "ఒప్పుకుని, ఫోన్ మర్యాదగా పెట్టేయండి." },
        replies: [
          { say: "Great. See you on Saturday. Bye!", good: true, skill: "polite" },
          { say: "Great. I will meeting you on Saturday.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
