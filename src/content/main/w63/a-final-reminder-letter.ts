import type { Lesson } from "../../types";

/** Week 63, Day 4 (CURRICULUM §5): reminder letters — overdue, late fee, disconnected; checking with Does this mean …? */
export const day: Lesson = {
  id: "a-final-reminder-letter",
  kind: "lesson",
  title: { en: "A Final Reminder", te: "చివరి రిమైండర్" },
  subtitle: "reminders and overdue bills",
  summary: {
    en: "Understand a reminder letter, and check what it means: Does this mean they will cut the connection?",
    te: "రిమైండర్ ఉత్తరం అర్థం చేసుకుని, దాని అర్థం అడిగి తెలుసుకుందాం: Does this mean they will cut the connection?",
  },
  seo: {
    title: "Reminder Letters and Overdue Bills in English for Telugu Speakers",
    description:
      "Understand The bill is overdue and ask Does this mean they will cut the connection? Simple lessons for Telugu speakers on reminder letters.",
  },
  pattern: [
    { text: "Does this mean", role: "action" },
    { text: "they", role: "who" },
    { text: "will cut", role: "action" },
    { text: "the connection?", role: "what" },
  ],
  core: [
    { en: "The bill is overdue.", te: "బిల్లు గడువు దాటిపోయింది.", extra: ["are"] },
    { en: "Please pay before the due date to avoid a late fee.", te: "late fee పడకుండా గడువు తేదీ లోపే కట్టండి.", extra: ["after"] },
    { en: "Does this mean they will cut the connection?", te: "అంటే కనెక్షన్ కట్ చేస్తారనా?", extra: ["Is"] },
    { en: "This is a final reminder.", te: "ఇది చివరి రిమైండర్.", extra: ["remind"] },
    { en: "I paid this bill last week.", te: "ఈ బిల్లు పోయిన వారమే కట్టాను.", extra: ["have"] },
    { en: "There is a late fee of 50 rupees.", te: "50 రూపాయల late fee ఉంది.", extra: ["for"] },
    { en: "Your water connection will be disconnected if you do not pay.", te: "మీరు కట్టకపోతే నీళ్ళ కనెక్షన్ తీసేస్తారు.", extra: ["disconnect"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your last electricity or water bill. Find the due date, and say it aloud in English.",
    te: "మీ చివరి కరెంట్ లేదా నీళ్ళ బిల్లు చూడండి. due date వెతికి, ఇంగ్లీష్‌లో గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "overdue", te: "గడువు దాటిపోయిన" },
    { en: "final reminder", te: "చివరి రిమైండర్" },
    { en: "late fee", te: "ఆలస్యంగా కడితే వేసే అదనపు డబ్బు" },
    { en: "disconnected", te: "కనెక్షన్ తీసేసిన" },
    { en: "dues", te: "కట్టాల్సిన బాకీ డబ్బు" },
  ],
  grammar: ["passive-voice", "yes-no-questions", "past-simple"],
  topics: ["home", "money", "offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Check what it means", te: "అర్థం అడిగి తెలుసుకోవడం" },
      body: {
        en: "Reminder letters use hard words like overdue and disconnected. When you are not sure, say what you think, and ask Does this mean …?",
        te: "రిమైండర్ ఉత్తరాల్లో overdue, disconnected లాంటి కష్టమైన మాటలు ఉంటాయి. అనుమానం ఉంటే, మీకు అర్థమైనది చెప్పి Does this mean …? అని అడగండి.",
      },
      bridge: {
        te: ["అంటే", "కనెక్షన్", "కట్ చేస్తారనా?"],
        en: [
          { text: "Does this mean", role: "action" },
          { text: "they", role: "who" },
          { text: "will cut", role: "action" },
          { text: "the connection?", role: "what" },
        ],
      },
      examples: [
        { en: "Does this mean they will cut the connection?", te: "అంటే కనెక్షన్ కట్ చేస్తారనా?" },
        { en: "Does this mean I have to pay today?", te: "అంటే నేను ఈ రోజే కట్టాలా?" },
        { en: "Your water connection will be disconnected if you do not pay.", te: "మీరు కట్టకపోతే నీళ్ళ కనెక్షన్ తీసేస్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words on a reminder", te: "రిమైండర్‌లోని మాటలు" },
      items: [
        {
          form: "due date",
          useFor: { en: "The last day to pay.", te: "కట్టడానికి చివరి రోజు." },
          example: { en: "Please pay before the due date to avoid a late fee.", te: "late fee పడకుండా గడువు తేదీ లోపే కట్టండి." },
        },
        {
          form: "overdue",
          useFor: { en: "The due date is over. The money is late.", te: "గడువు దాటిపోయింది. డబ్బు ఇంకా కట్టలేదు." },
          example: { en: "The bill is overdue.", te: "బిల్లు గడువు దాటిపోయింది." },
        },
        {
          form: "late fee",
          useFor: { en: "Extra money for paying late.", te: "ఆలస్యంగా కడితే వేసే అదనపు డబ్బు." },
          example: { en: "There is a late fee of 50 rupees.", te: "50 రూపాయల late fee ఉంది." },
        },
        {
          form: "disconnected",
          useFor: { en: "They will stop the supply to your house.", te: "మీ ఇంటికి సరఫరా ఆపేస్తారు." },
          example: { en: "Your water connection will be disconnected if you do not pay.", te: "మీరు కట్టకపోతే నీళ్ళ కనెక్షన్ తీసేస్తారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am not understanding this letter.",
      right: "I don't understand this letter.",
      why: {
        en: "Understand is a state, not an action, so it does not take -ing.",
        te: "understand ఒక స్థితి, పని కాదు; దానికి -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please do the needful.",
      right: "Could you please check my payment?",
      why: {
        en: "Do the needful sounds old and unclear outside India; say exactly what you want done.",
        te: "do the needful పాతగా, అస్పష్టంగా ఉంటుంది; ఏం చేయాలో స్పష్టంగా అడగండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "The clerk asks how long you have had this water connection. It is ten years. Answer.",
        te: "ఈ నీళ్ళ కనెక్షన్ ఎన్నాళ్ళుగా ఉందని క్లర్క్ అడుగుతున్నారు. పదేళ్ళుగా ఉంది. జవాబు చెప్పండి.",
      },
      options: ["I have had it for ten years.", "I am having it for ten years.", "I have it since ten years."],
      answer: 0,
      why: {
        en: "For something that started in the past and goes on, use have had with for; Telugu ఉంది stays in the present.",
        te: "గతంలో మొదలై ఇప్పటికీ ఉన్నదానికి have had, for వాడాలి; తెలుగులో 'ఉంది' అంటాం కాబట్టి present వాడేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Please pay the bill ___ the due date.",
      te: "గడువు తేదీ లోపే బిల్లు కట్టండి.",
      options: ["before", "until", "since"],
      answer: 0,
      why: {
        en: "Before means earlier than that day; until means the whole time up to it.",
        te: "before అంటే ఆ రోజు కంటే ముందు; until అంటే ఆ రోజు వరకు అంతా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A letter says: Your account is overdue. What does it mean?",
        te: "ఉత్తరంలో Your account is overdue అని ఉంది. దాని అర్థం ఏంటి?",
      },
      options: ["You did not pay by the due date.", "You paid too much money.", "Your account is closed now."],
      answer: 0,
      why: {
        en: "Overdue means the due date has passed and the money is still not paid.",
        te: "overdue అంటే గడువు తేదీ దాటిపోయింది, డబ్బు ఇంకా కట్టలేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "Is this mean they will cut the connection?",
      wrongIndex: 0,
      fix: "Does this mean they will cut the connection?",
      why: {
        en: "Mean is a verb, so the question starts with Does, not Is.",
        te: "mean ఒక verb, కాబట్టి ప్రశ్న Is తో కాదు, Does తో మొదలవుతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The letter says final reminder. Ask the clerk if you have to pay today.",
        te: "ఉత్తరం మీద final reminder అని ఉంది. ఈ రోజే కట్టాలా అని క్లర్క్‌ని అడగండి.",
      },
      expected: ["Does this mean I have to pay today?", "Do I have to pay today?", "Should I pay today?", "Do I need to pay today?"],
      options: ["Does this mean I have to pay today?", "Is this mean I have to pay today?", "Does this means I have to pay today?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You got a reminder, but you paid the bill last week. Tell the clerk.",
        te: "రిమైండర్ వచ్చింది, కానీ మీరు పోయిన వారమే బిల్లు కట్టారు. క్లర్క్‌కి చెప్పండి.",
      },
      expected: ["I paid this bill last week.", "I paid it last week.", "But I paid this bill last week.", "I already paid this bill last week."],
      options: ["I paid this bill last week.", "I have paid this bill last week.", "I am paid this bill last week."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A reminder from the water board", te: "water board నుంచి రిమైండర్" },
    scene: {
      en: "You got a final reminder about your water bill. You go to the water board office. Venkat is at the counter.",
      te: "మీ నీళ్ళ బిల్లు గురించి final reminder వచ్చింది. water board ఆఫీసుకి వెళ్ళారు. కౌంటర్ దగ్గర వెంకట్ గారు ఉన్నారు.",
    },
    partner: { en: "Venkat (clerk)", te: "వెంకట్ (క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "check", label: { en: "Checking what it means", te: "అర్థం అడిగి తెలుసుకోవడం" } },
      { id: "polite", label: { en: "Staying calm and polite", te: "శాంతంగా, మర్యాదగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "Good afternoon. Next, please. How can I help you?",
        te: "నమస్కారం. తర్వాత ఎవరు? చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet him, and say you got a final reminder about your water bill.", te: "నమస్కారం చెప్పి, నీళ్ళ బిల్లు గురించి final reminder వచ్చిందని చెప్పండి." },
        replies: [
          { say: "Good afternoon. I got a final reminder about my water bill.", good: true, skill: "polite" },
          {
            say: "Look at this letter! Your office is useless.",
            good: false,
            skill: "polite",
            react: { en: "Please stay calm. Let me see the letter first.", te: "కొంచెం శాంతంగా ఉండండి. ముందు ఉత్తరం చూడనివ్వండి." },
          },
        ],
      },
      {
        partner: "Let me see. Yes, your bill is overdue by two months.",
        te: "చూస్తాను. అవును, మీ బిల్లు రెండు నెలలుగా కట్టలేదు.",
        hint: { en: "Ask what will happen to your water connection.", te: "మీ నీళ్ళ కనెక్షన్‌కి ఏమవుతుందో అడగండి." },
        replies: [
          { say: "Does this mean you will cut the connection?", good: true, skill: "check" },
          { say: "Will my connection be cut?", good: true, skill: "check" },
          { say: "Is this mean you will cut the connection?", good: false, skill: "check" },
        ],
      },
      {
        partner: "Only if you don't pay by Friday. There is also a late fee.",
        te: "శుక్రవారం లోపు కట్టకపోతే మాత్రమే. late fee కూడా ఉంది.",
        hint: { en: "Ask how much the late fee is.", te: "late fee ఎంతో అడగండి." },
        replies: [
          { say: "How much is the late fee?", good: true, skill: "check" },
          { say: "What is the late fee, please?", good: true, skill: "check" },
          { say: "How much the late fee is?", good: false, skill: "check", fixIt: "question" },
        ],
      },
      {
        partner: "It's 50 rupees. You can pay everything here at the counter.",
        te: "50 రూపాయలు. అంతా ఇక్కడ కౌంటర్‌లోనే కట్టొచ్చు.",
        hint: { en: "Say you will pay now, and thank him.", te: "ఇప్పుడే కడతానని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll pay it now. Thank you for explaining.", good: true, skill: "polite" },
          { say: "Thank you. Let me pay all the dues right now.", good: true, skill: "polite" },
          { say: "Okay, I'll paying it now. Thank you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
