import type { Lesson } from "../../types";

/** Week 62, Day 2 (CURRICULUM §5): Is it OK if + present? Would it be possible to …? — booking an appointment with a bank manager. */
export const day: Lesson = {
  id: "is-it-ok-if-appointments",
  kind: "lesson",
  title: { en: "Is It OK If I Come on Thursday?", te: "గురువారం రావొచ్చా?" },
  subtitle: "Is it OK if …? Would it be possible to …?",
  summary: {
    en: "Learn to fix an appointment politely: Is it OK if I come on Thursday instead? Would it be possible to meet the manager?",
    te: "మర్యాదగా appointment తీసుకోవడం నేర్చుకుందాం: Is it OK if I come on Thursday instead? Would it be possible to meet the manager?",
  },
  seo: {
    title: "Is It OK If and Would It Be Possible in English for Telugu Speakers",
    description:
      "Say Is it OK if I come on Thursday instead? and Would it be possible to meet the manager? Appointment English for Telugu speakers.",
  },
  pattern: [
    { text: "Is it OK", role: "action" },
    { text: "if I", role: "who" },
    { text: "come", role: "action" },
    { text: "on Thursday?", role: "when" },
  ],
  core: [
    { en: "Is it OK if I come on Thursday instead?", te: "బదులుగా గురువారం రావొచ్చా?", extra: ["coming"] },
    { en: "Would it be possible to meet the manager?", te: "మేనేజర్ గారిని కలవడం వీలవుతుందా?", extra: ["meeting"] },
    { en: "Is it OK if a friend comes with me?", te: "నాతో ఒక ఫ్రెండ్ వస్తే పర్వాలేదా?", extra: ["come"] },
    { en: "Is it OK if I come a little late?", te: "కొంచెం ఆలస్యంగా వస్తే పర్వాలేదా?", extra: ["will"] },
    { en: "Would it be possible to get a locker here?", te: "ఇక్కడ లాకర్ తీసుకోవడం వీలవుతుందా?", extra: ["getting"] },
    { en: "Sorry, Tuesday is fully booked. Is Thursday OK?", te: "సారీ, మంగళవారం అంతా బుక్ అయిపోయింది. గురువారం కుదురుతుందా?", extra: ["full"] },
    { en: "I'd like to add a nominee to my account, please.", te: "నా అకౌంట్‌కి ఒక నామినీని చేర్చాలి అండీ.", extra: ["adding"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of an appointment you have, or may need. Say aloud how you would ask to change the day.",
    te: "మీకు ఉన్న, లేదా కావాల్సిన ఒక appointment గురించి ఆలోచించండి. రోజు మార్చమని ఎలా అడుగుతారో గట్టిగా చెప్పి చూడండి.",
  },
  words: [
    { en: "possible", te: "వీలు, సాధ్యం" },
    { en: "locker", te: "బ్యాంక్ లాకర్" },
    { en: "personally", te: "స్వయంగా" },
    { en: "diary", te: "డైరీ, appointments రాసుకునే పుస్తకం" },
    { en: "fully booked", te: "అంతా బుక్ అయిపోయింది, ఖాళీ లేదు" },
  ],
  grammar: ["can-could", "present-simple", "politeness-softening"],
  topics: ["bank", "offices", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Is it OK if … and Would it be possible to …", te: "… పర్వాలేదా? … వీలవుతుందా?" },
      body: {
        en: "Is it OK if …? asks if you may do something. After if, use the present, even for the future: if I come. Would it be possible to …? is more formal, with the plain verb.",
        te: "Is it OK if …? అంటే '… పర్వాలేదా?'; if తర్వాత రేపటి పనికైనా present: if I come. Would it be possible to …? ఇంకా formal; దాని తర్వాత verb అలాగే.",
      },
      bridge: {
        te: ["బదులుగా", "గురువారం", "రావొచ్చా?"],
        en: [
          { text: "Is it OK", role: "action" },
          { text: "if I", role: "who" },
          { text: "come", role: "action" },
          { text: "on Thursday instead?", role: "when" },
        ],
      },
      examples: [
        { en: "Is it OK if I come on Thursday instead?", te: "బదులుగా గురువారం రావొచ్చా?" },
        { en: "Would it be possible to meet the manager?", te: "మేనేజర్ గారిని కలవడం వీలవుతుందా?" },
        { en: "Is it OK if I come a little late?", te: "కొంచెం ఆలస్యంగా వస్తే పర్వాలేదా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking to fix a time", te: "టైమ్ కుదుర్చుకోవడానికి అడగడం" },
      items: [
        {
          form: "Is it OK if I …?",
          useFor: { en: "Ask if you may do something.", te: "మీరు ఏదైనా చేయొచ్చా అని అడగడానికి." },
          example: { en: "Is it OK if I come on Thursday instead?", te: "బదులుగా గురువారం రావొచ్చా?" },
        },
        {
          form: "Is it OK if a friend comes …?",
          useFor: { en: "Ask about one other person: the verb takes s.", te: "ఇంకొకరి గురించి అడగడానికి: verb కి s వస్తుంది." },
          example: { en: "Is it OK if a friend comes with me?", te: "నాతో ఒక ఫ్రెండ్ వస్తే పర్వాలేదా?" },
        },
        {
          form: "Would it be possible to …?",
          useFor: { en: "Ask a bank or an office, very politely.", te: "బ్యాంక్‌ని గానీ ఆఫీసుని గానీ చాలా మర్యాదగా అడగడానికి." },
          example: { en: "Would it be possible to get a locker here?", te: "ఇక్కడ లాకర్ తీసుకోవడం వీలవుతుందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Is it OK if my friend come with me?",
      right: "Is it OK if my friend comes with me?",
      why: {
        en: "My friend is one person, so the verb after if takes s.",
        te: "my friend ఒక్కరే కాబట్టి if తర్వాత verb కి s వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Can I prepone my appointment?",
      right: "Is it OK if I come earlier?",
      why: {
        en: "Prepone is used only in India; people elsewhere say come earlier or bring forward.",
        te: "prepone మన దేశంలోనే వాడతారు; బయటివాళ్ళు come earlier లేదా bring forward అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask the bank if you may come on Thursday instead.",
        te: "బదులుగా గురువారం రావొచ్చా అని బ్యాంక్‌వాళ్ళని అడగండి.",
      },
      options: ["Is it OK if I come on Thursday instead?", "It is OK if I come on Thursday instead?", "Is it OK I come on Thursday instead?"],
      answer: 0,
      why: {
        en: "A question starts with Is it, and if joins the two parts; Telugu needs neither.",
        te: "ప్రశ్న Is it తో మొదలవుతుంది, రెండు భాగాల్ని if కలుపుతుంది; తెలుగులో ఈ రెండూ ఉండవు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Would it be possible ___ the manager today?",
      te: "ఈ రోజు మేనేజర్ గారిని కలవడం వీలవుతుందా?",
      options: ["to meet", "meeting", "meet"],
      answer: 0,
      why: {
        en: "Would it be possible is followed by to and the plain verb, never -ing.",
        te: "Would it be possible తర్వాత to, ఆ తర్వాత verb అలాగే వస్తుంది; -ing రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "The clerk asks: Is Thursday at eleven OK for you? It suits you. What do you say?",
        te: "Is Thursday at eleven OK for you? అని క్లర్క్ అడిగారు. మీకు కుదురుతుంది. ఏమంటారు?",
      },
      options: ["Yes, eleven is fine. Thank you.", "Yes, I'll come on eleven.", "Okay. Done."],
      answer: 0,
      why: {
        en: "Agree and thank the clerk. A clock time takes at, and Okay. Done. sounds rude.",
        te: "ఒప్పుకుని థాంక్స్ చెప్పండి. గంటల టైమ్‌కి at వస్తుంది; Okay. Done. అంటే మొరటుగా ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Is it OK if I will bring the papers on Monday?",
      wrongIndex: 5,
      fix: "Is it OK if I bring the papers on Monday?",
      why: {
        en: "After if, the present already talks about the future, so will is not needed. Telugu తెస్తాను makes people add it.",
        te: "if తర్వాత present తోనే రేపటి పని చెప్తాం, will అక్కర్లేదు. తెలుగు 'తెస్తాను' వల్ల will చేర్చేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your appointment is on Friday, but you want to come on Wednesday. Ask the bank politely.",
        te: "మీ appointment శుక్రవారం, కానీ మీరు బుధవారం రావాలనుకుంటున్నారు. బ్యాంక్‌వాళ్ళని మర్యాదగా అడగండి.",
      },
      expected: [
        "Is it OK if I come on Wednesday instead?",
        "Would it be possible to come on Wednesday instead?",
        "Could I come on Wednesday instead?",
      ],
      options: ["Is it OK if I come on Wednesday instead?", "Can I prepone my appointment to Wednesday?", "I'm coming on Wednesday, not Friday."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Ask the bank if your friend may come with you to the meeting.",
        te: "మీటింగ్‌కి మీతో మీ ఫ్రెండ్ రావొచ్చా అని బ్యాంక్‌వాళ్ళని అడగండి.",
      },
      expected: ["Is it OK if my friend comes with me?", "Is it OK if a friend comes with me?", "Can my friend come with me?"],
      options: ["Is it OK if my friend comes with me?", "Is it OK if my friend come with me?", "My friend also coming, OK?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "An appointment with the manager", te: "మేనేజర్ గారితో appointment" },
    scene: {
      en: "You want to add a nominee to your bank account. You call your bank branch. Usha answers.",
      te: "మీ బ్యాంక్ అకౌంట్‌కి నామినీని చేర్చాలనుకుంటున్నారు. మీ బ్యాంక్ బ్రాంచ్‌కి ఫోన్ చేశారు. ఉష గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Usha (at the bank)", te: "ఉష (బ్యాంక్‌లో)" },
    skills: [
      { id: "ask", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, State Bank, Gandhi Nagar branch. How can I help you?",
        te: "నమస్కారం, స్టేట్ బ్యాంక్, గాంధీ నగర్ బ్రాంచ్. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Greet her, and ask very politely to meet the manager.", te: "నమస్కారం చెప్పి, మేనేజర్ గారిని కలవడం వీలవుతుందా అని చాలా మర్యాదగా అడగండి." },
        replies: [
          { say: "Good morning. Would it be possible to meet the manager?", good: true, skill: "ask" },
          { say: "Good morning. Is it OK if I meet the manager this week?", good: true, skill: "ask" },
          { say: "Good morning. Would it be possible meeting the manager?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "Of course. May I know what it is about?",
        te: "తప్పకుండా. ఏ విషయం గురించో చెప్తారా?",
        hint: { en: "Say you want to add a nominee to your account.", te: "మీ అకౌంట్‌కి నామినీని చేర్చాలని చెప్పండి." },
        replies: [
          { say: "I'd like to add a nominee to my account.", good: true, skill: "polite" },
          { say: "I am wanting to add a nominee to my account.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
      {
        partner: "The manager would like to meet you personally. Is Tuesday at three OK?",
        te: "మేనేజర్ గారు మిమ్మల్ని స్వయంగా కలవాలనుకుంటున్నారు. మంగళవారం మూడింటికి కుదురుతుందా?",
        hint: { en: "Tuesday is difficult for you. Ask politely to come on Thursday instead.", te: "మంగళవారం మీకు కష్టం. బదులుగా గురువారం రావొచ్చా అని మర్యాదగా అడగండి." },
        replies: [
          { say: "Is it OK if I come on Thursday instead?", good: true, skill: "ask" },
          { say: "Would it be possible to come on Thursday instead?", good: true, skill: "ask" },
          {
            say: "Tuesday is no good. Make it Thursday.",
            good: false,
            skill: "polite",
            react: { en: "All right, all right. Let me check the manager's diary.", te: "సరే, సరే. మేనేజర్ గారి డైరీ చూస్తాను." },
          },
        ],
      },
      {
        partner: "Thursday afternoon is fully booked. Is eleven in the morning OK?",
        te: "గురువారం మధ్యాహ్నం అంతా బుక్ అయిపోయింది. పొద్దున పదకొండింటికి కుదురుతుందా?",
        hint: { en: "Agree, thank her, and say you will see her on Thursday.", te: "ఒప్పుకుని, థాంక్స్ చెప్పి, గురువారం కలుస్తానని చెప్పండి." },
        replies: [
          { say: "Eleven is fine. Thank you so much. See you on Thursday.", good: true, skill: "polite" },
          { say: "Eleven is fine. Thank you so much. See you in Thursday.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
