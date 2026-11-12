import type { Lesson } from "../../types";

/** Week 64, Day 3 (CURRICULUM §5): a little + things you can't count, a few + plurals (Fix-it 5) — serving more food and saying no politely. */
export const day: Lesson = {
  id: "a-little-a-few-serving-food",
  kind: "lesson",
  title: { en: "A Little, A Few", te: "కొంచెం, కొన్ని" },
  subtitle: "a little / a few",
  summary: {
    en: "Learn to ask for a small amount and to offer more: Just a little rice, please. Have a few more pootharekulu.",
    te: "కొంచెమే అడగడం, ఇంకొన్ని తీసుకోమని చెప్పడం నేర్చుకుందాం: Just a little rice, please. Have a few more pootharekulu.",
  },
  seo: {
    title: "A Little and A Few in English for Telugu Speakers",
    description:
      "Say Just a little rice, please and Have a few more chapatis. Simple lessons for Telugu speakers on serving food and saying no politely.",
  },
  pattern: [
    { text: "Have", role: "action" },
    { text: "a few more", role: "what" },
    { text: "pootharekulu", role: "what" },
  ],
  core: [
    { en: "Just a little rice, please.", te: "అన్నం కొంచెమే వేయండి.", extra: ["few"] },
    { en: "Have a few more pootharekulu.", te: "ఇంకొన్ని పూతరేకులు తీసుకోండి.", extra: ["little"] },
    { en: "No more, thank you. I'm full.", te: "ఇంక చాలు, థ్యాంక్స్. కడుపు నిండిపోయింది.", extra: ["any"] },
    { en: "Would you like a little more sambar?", te: "ఇంకొంచెం సాంబార్ వేయనా?", extra: ["few"] },
    { en: "Just a few chapatis for me.", te: "నాకు కొన్ని చపాతీలు చాలు.", extra: ["chapati"] },
    { en: "Have a few more. They're from Atreyapuram.", te: "ఇంకొన్ని తీసుకోండి. ఇవి ఆత్రేయపురం నుంచి తెచ్చినవి.", extra: ["little"] },
    { en: "Only a little ghee, please. My doctor said so.", te: "నెయ్యి కొంచెమే వేయండి. డాక్టర్ అలా చెప్పారు.", extra: ["few"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At your next meal, ask for a little or a few in English: Just a little rice, please.",
    te: "ఈ రోజు భోజనం దగ్గర ఇంగ్లీష్‌లో a little లేదా a few వాడి అడగండి: Just a little rice, please.",
  },
  words: [
    { en: "a little", te: "కొంచెం (లెక్కపెట్టలేనివి)" },
    { en: "a few", te: "కొన్ని (లెక్కపెట్టగలిగేవి)" },
    { en: "full", te: "కడుపు నిండింది" },
    { en: "chapati", te: "చపాతీ" },
    { en: "no more", te: "ఇంక చాలు, ఇంక వద్దు" },
  ],
  grammar: ["plurals-countable", "articles", "would-like"],
  topics: ["food", "home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "a little or a few", te: "a little, a few: కొంచెం, కొన్ని" },
      body: {
        en: "Use a little with things you cannot count: a little rice. Use a few with things you can count: a few chapatis.",
        te: "లెక్కపెట్టలేని వాటికి a little (కొంచెం): a little rice. లెక్కపెట్టగలిగే వాటికి a few (కొన్ని): a few chapatis.",
      },
      bridge: {
        te: ["ఇంకొన్ని", "పూతరేకులు", "తీసుకోండి"],
        en: [
          { text: "Have", role: "action" },
          { text: "a few more", role: "what" },
          { text: "pootharekulu", role: "what" },
        ],
      },
      examples: [
        { en: "Just a little rice, please.", te: "అన్నం కొంచెమే వేయండి." },
        { en: "Have a few more pootharekulu.", te: "ఇంకొన్ని పూతరేకులు తీసుకోండి." },
        { en: "Would you like a little more sambar?", te: "ఇంకొంచెం సాంబార్ వేయనా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Can you count it?", te: "లెక్కపెట్టగలమా?" },
      items: [
        {
          form: "a little",
          useFor: { en: "Things you can't count: rice, sambar, ghee, coffee.", te: "లెక్కపెట్టలేనివి: అన్నం, సాంబార్, నెయ్యి, కాఫీ." },
          example: { en: "Only a little ghee, please. My doctor said so.", te: "నెయ్యి కొంచెమే వేయండి. డాక్టర్ అలా చెప్పారు." },
        },
        {
          form: "a few",
          useFor: { en: "Things you can count: chapatis, idlis, sweets.", te: "లెక్కపెట్టగలిగేవి: చపాతీలు, ఇడ్లీలు, స్వీట్లు." },
          example: { en: "Just a few chapatis for me.", te: "నాకు కొన్ని చపాతీలు చాలు." },
        },
        {
          form: "No more, thank you.",
          useFor: { en: "Say no to more food, kindly.", te: "ఇంక వద్దని మర్యాదగా చెప్పడానికి." },
          example: { en: "No more, thank you. I'm full.", te: "ఇంక చాలు, థ్యాంక్స్. కడుపు నిండిపోయింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Just a few chapati, please.",
      right: "Just a few chapatis, please.",
      why: {
        en: "After a few, the thing takes s; Telugu చపాతీలు has a plural ending too.",
        te: "a few తర్వాత s కావాలి; తెలుగులోనూ చపాతీ కాదు, చపాతీలు అంటాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Just little rice, please.",
      right: "Just a little rice, please.",
      why: {
        en: "Without a, little means almost nothing; a little means some.",
        te: "a లేకుండా little అంటే 'దాదాపు ఏమీ లేదు'; a little అంటే 'కొంచెం'.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "Your guest wants only a small amount of rice. What does she say?",
        te: "మీ అతిథికి అన్నం కొంచెమే కావాలి. ఆవిడ ఏమంటారు?",
      },
      options: ["Just a little rice, please.", "Just a few rice, please.", "Just a little rices, please."],
      answer: 0,
      why: {
        en: "Rice is a thing you can't count, so use a little and no s.",
        te: "అన్నం లెక్కపెట్టలేం కాబట్టి a little వాడాలి; rice కి s రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Have ___ more idlis.",
      te: "ఇంకొన్ని ఇడ్లీలు తీసుకోండి.",
      options: ["a few", "a little", "much"],
      answer: 0,
      why: {
        en: "Idlis can be counted one by one, so use a few, not a little.",
        te: "ఇడ్లీలు ఒక్కొక్కటిగా లెక్కపెట్టొచ్చు కాబట్టి a few వాడాలి, a little కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your guest Venkat never eats sweets. Tell your friend who is serving.",
        te: "మీ అతిథి వెంకట్ గారు స్వీట్లు అస్సలు తినరు. వడ్డిస్తున్న స్నేహితులకి చెప్పండి.",
      },
      options: ["Venkat doesn't eat sweets.", "Venkat don't eat sweets.", "Venkat not eating sweets."],
      answer: 0,
      why: {
        en: "For one person, use doesn't, not don't, and keep the verb plain.",
        te: "ఒక్కరి గురించి చెప్తే don't కాదు, doesn't వాడాలి; తర్వాత verb అలాగే ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "How many rice do you want?",
      wrongIndex: 1,
      fix: "How much rice do you want?",
      why: {
        en: "Rice can't be counted, so ask how much; how many is for things like idlis.",
        te: "అన్నం లెక్కపెట్టలేం కాబట్టి how much అనాలి; how many ఇడ్లీల లాంటి లెక్కపెట్టగలిగే వాటికి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your host wants to give you more rice. You want only a small amount.",
        te: "మీకు ఇంకా అన్నం వేస్తామంటున్నారు. మీకు కొంచెమే కావాలి.",
      },
      expected: ["Just a little, please.", "Just a little rice, please.", "Only a little, please."],
      options: ["Just a little rice, please.", "Just a few rice, please.", "Just little rice, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You have eaten enough. Say no to more food, politely.",
        te: "మీరు కడుపు నిండా తినేశారు. ఇంక వద్దని మర్యాదగా చెప్పండి.",
      },
      expected: ["No more, thank you. I'm full.", "No, thank you. I'm full.", "I'm full, thank you."],
      options: ["No more, thank you. I'm full.", "No more, thank you. I full.", "No. Stop giving."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Lunch at a friend's house", te: "స్నేహితుడి ఇంట్లో భోజనం" },
    scene: {
      en: "Your friend Prasad has cooked lunch for you at his house. He keeps serving more food.",
      te: "మీ స్నేహితుడు ప్రసాద్ గారు వాళ్ళింట్లో మీకోసం వంట చేశారు. ఇంకా ఇంకా వడ్డిస్తూనే ఉన్నారు.",
    },
    partner: { en: "Prasad (your friend)", te: "ప్రసాద్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "amount", label: { en: "A little and a few", te: "కొంచెం, కొన్ని" } },
      { id: "polite", label: { en: "Saying no kindly", te: "మర్యాదగా వద్దనడం" } },
    ],
    turns: [
      {
        partner: "Welcome! Sit down, sit down. Lunch is ready.",
        te: "రండి! కూర్చోండి, కూర్చోండి. భోజనం రెడీ.",
        hint: { en: "Thank him, and say the food smells good.", te: "ఆయనకి థ్యాంక్స్ చెప్పి, వాసన బాగుందని చెప్పండి." },
        replies: [
          { say: "Thank you, Prasad. It smells wonderful!", good: true, skill: "polite" },
          {
            say: "Thanks. I'm very hungry. Serve fast.",
            good: false,
            skill: "polite",
            react: { en: "Ha ha! Okay, okay, it's coming!", te: "హహ! సరే, సరే, వచ్చేస్తోంది!" },
          },
        ],
      },
      {
        partner: "Would you like some more rice?",
        te: "ఇంకొంచెం అన్నం వేయనా?",
        hint: { en: "Say yes, but only a small amount.", te: "సరే అనండి, కానీ కొంచెమే." },
        replies: [
          { say: "Yes, please. Just a little.", good: true, skill: "amount" },
          { say: "Yes, please. Just a few.", good: false, skill: "amount", fixIt: "plural" },
        ],
      },
      {
        partner: "Have a few more pootharekulu. They're from Atreyapuram.",
        te: "ఇంకొన్ని పూతరేకులు తీసుకోండి. ఇవి ఆత్రేయపురం నుంచి తెచ్చినవి.",
        hint: { en: "Say no politely: you are full.", te: "మర్యాదగా వద్దనండి: కడుపు నిండిపోయింది." },
        replies: [
          { say: "No more, thank you. I'm full.", good: true, skill: "polite" },
          { say: "They're lovely, but I'm full. Thank you.", good: true, skill: "polite" },
          { say: "No more, thank you. I full.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
      {
        partner: "Then take some home for later!",
        te: "అయితే తర్వాత తినడానికి కొన్ని ఇంటికి తీసుకెళ్ళండి!",
        hint: { en: "Thank him, and say you will take just a small number.", te: "థ్యాంక్స్ చెప్పి, కొన్నే తీసుకెళ్తానని చెప్పండి." },
        replies: [
          { say: "Thank you so much. Just a few, please.", good: true, skill: "amount" },
          { say: "Thank you so much. Just a little pootharekulu, please.", good: false, skill: "amount", fixIt: "plural" },
        ],
      },
    ],
  },
};
