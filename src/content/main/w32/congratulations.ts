import type { Lesson } from "../../types";

/** Week 32, Day 3 (CURRICULUM §4): wishes for birthdays, new homes and retirement — Congratulations on …! Many happy returns of the day! */
export const day: Lesson = {
  id: "congratulations",
  kind: "lesson",
  title: { en: "Congratulations!", te: "అభినందనలు" },
  subtitle: "wishes: birthdays, new homes, retirement",
  summary: {
    en: "Learn to wish people on their happy days: Congratulations on your new house! Many happy returns of the day!",
    te: "సంతోషకరమైన రోజుల్లో శుభాకాంక్షలు చెప్పడం నేర్చుకుందాం: Congratulations on your new house! Many happy returns of the day!",
  },
  seo: {
    title: "Congratulations and Birthday Wishes in English for Telugu Speakers",
    description:
      "Say Congratulations on your new house! and Many happy returns of the day! Simple lessons for Telugu speakers on wishes for happy days.",
  },
  pattern: [
    { text: "Congratulations", role: "action" },
    { text: "on your new house!", role: "what" },
  ],
  core: [
    { en: "Congratulations on your new house!", te: "మీ కొత్త ఇంటికి అభినందనలు!", extra: ["for"] },
    { en: "Many happy returns of the day!", te: "మీకు పుట్టినరోజు శుభాకాంక్షలు!", extra: ["return"] },
    { en: "Congratulations on your retirement!", te: "రిటైర్ అయినందుకు అభినందనలు!", extra: ["of"] },
    { en: "Thank you so much for your wishes.", te: "మీ శుభాకాంక్షలకి చాలా థాంక్స్.", extra: ["wish"] },
    { en: "Our blessings are always with you.", te: "మా ఆశీస్సులు ఎప్పుడూ మీకు ఉంటాయి.", extra: ["blessing"] },
    { en: "Usha got a promotion last week.", te: "ఉష గారికి పోయిన వారం promotion వచ్చింది.", extra: ["get"] },
    { en: "Enjoy your retirement! You worked very hard.", te: "రిటైర్‌మెంట్‌ని బాగా ఆనందించండి! మీరు చాలా కష్టపడ్డారు.", extra: ["work"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of someone with good news: a birthday, a new house or a new job. Wish them in English.",
    te: "మంచి వార్త ఉన్న ఒకరిని గుర్తు చేసుకోండి: పుట్టినరోజు, కొత్త ఇల్లు, కొత్త ఉద్యోగం. ఇంగ్లీష్‌లో వారికి శుభాకాంక్షలు చెప్పండి.",
  },
  words: [
    { en: "congratulations", te: "అభినందనలు" },
    { en: "many happy returns", te: "పుట్టినరోజు శుభాకాంక్షలు" },
    { en: "retirement", te: "రిటైర్‌మెంట్, ఉద్యోగ విరమణ" },
    { en: "promotion", te: "ఉద్యోగంలో ప్రమోషన్" },
    { en: "blessings", te: "ఆశీస్సులు, దీవెనలు" },
  ],
  grammar: ["prepositions", "politeness-softening"],
  topics: ["festivals", "people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Wishing someone on a happy day", te: "సంతోషకరమైన రోజున శుభాకాంక్షలు" },
      body: {
        en: "For good news, say Congratulations on, then the news: Congratulations on your new house! On a birthday, say Happy birthday! or Many happy returns of the day!",
        te: "మంచి వార్తకి Congratulations on, తర్వాత ఆ విషయం: Congratulations on your new house! పుట్టినరోజుకి Happy birthday! లేదా Many happy returns of the day!",
      },
      bridge: {
        te: ["మీ కొత్త ఇంటికి", "అభినందనలు"],
        en: [
          { text: "Congratulations", role: "action" },
          { text: "on your new house!", role: "what" },
        ],
      },
      examples: [
        { en: "Congratulations on your new house!", te: "మీ కొత్త ఇంటికి అభినందనలు!" },
        { en: "Many happy returns of the day!", te: "మీకు పుట్టినరోజు శుభాకాంక్షలు!" },
        { en: "Congratulations on your retirement!", te: "రిటైర్ అయినందుకు అభినందనలు!" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which wish when", te: "ఏ రోజు ఏ మాట" },
      items: [
        {
          form: "Congratulations on …!",
          useFor: { en: "Good news: a house, a job, a retirement.", te: "మంచి వార్తకి: ఇల్లు, ఉద్యోగం, రిటైర్‌మెంట్." },
          example: { en: "Congratulations on your retirement!", te: "రిటైర్ అయినందుకు అభినందనలు!" },
        },
        {
          form: "Many happy returns!",
          useFor: { en: "Birthdays: it wishes many more birthdays.", te: "పుట్టినరోజుకి: ఇలాంటి రోజులు ఇంకా చాలా రావాలని." },
          example: { en: "Many happy returns of the day!", te: "మీకు పుట్టినరోజు శుభాకాంక్షలు!" },
        },
        {
          form: "Thank you for your wishes.",
          useFor: { en: "Your reply when people wish you.", te: "మీకు శుభాకాంక్షలు చెప్పినప్పుడు మీ జవాబు." },
          example: { en: "Thank you so much for your wishes.", te: "మీ శుభాకాంక్షలకి చాలా థాంక్స్." },
        },
        {
          form: "Our blessings …",
          useFor: { en: "Elders wishing a younger person well.", te: "పెద్దవాళ్ళు చిన్నవాళ్ళని దీవించేటప్పుడు." },
          example: { en: "Our blessings are always with you.", te: "మా ఆశీస్సులు ఎప్పుడూ మీకు ఉంటాయి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Congratulations for your new house!",
      right: "Congratulations on your new house!",
      why: {
        en: "Congratulations always takes on before the news. Telugu కి makes us say for.",
        te: "Congratulations తర్వాత ఎప్పుడూ on వస్తుంది; తెలుగులో 'కి' ఉండటం వల్ల for అనేస్తుంటాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Congratulation on your promotion!",
      right: "Congratulations on your promotion!",
      why: {
        en: "This word always ends in s, even for one person and one piece of news.",
        te: "ఒక్కరికి చెప్పినా, ఒక్క వార్త అయినా ఈ పదం చివర ఎప్పుడూ s ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Your friend Kumar retired today. What do you say?", te: "మీ స్నేహితులు కుమార్ ఈ రోజు రిటైర్ అయ్యారు. ఏమంటారు?" },
      options: ["Congratulations on your retirement!", "Congratulations for your retirement!", "Many happy returns of the day!"],
      answer: 0,
      why: {
        en: "Retirement is good news, so congratulations with on; happy returns is only for birthdays.",
        te: "రిటైర్‌మెంట్ మంచి వార్త, అందుకే congratulations, దానితో on; happy returns పుట్టినరోజుకి మాత్రమే.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Many happy ___ of the day!",
      te: "మీకు పుట్టినరోజు శుభాకాంక్షలు!",
      options: ["returns", "return", "returned"],
      answer: 0,
      why: {
        en: "This birthday wish never changes, and many always needs returns with s.",
        te: "ఈ పుట్టినరోజు మాట ఎప్పుడూ మారదు; many ఉంది కాబట్టి returns, s తో.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Many friends wished you on your birthday. Thank them.",
        te: "మీ పుట్టినరోజుకి చాలామంది స్నేహితులు శుభాకాంక్షలు చెప్పారు. వారికి థాంక్స్ చెప్పండి.",
      },
      options: ["Thank you so much for your wishes.", "Thank you so much to your wishes.", "Thank you! Wish you the same."],
      answer: 0,
      why: {
        en: "You thank someone for something; Telugu కి pulls us to say to. The same does not fit your own birthday.",
        te: "థాంక్స్ దేనికైనా అంటే for; 'కి' వల్ల to అనేస్తాం. మీ పుట్టినరోజుకి the same సరిపోదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "We bought two gift for his retirement.",
      wrongIndex: 3,
      fix: "We bought two gifts for his retirement.",
      why: {
        en: "After two, the thing takes s; Telugu బహుమతులు shows more than one too.",
        te: "రెండు అంటే s చేర్చాలి; తెలుగులో బహుమతులు అన్నట్టే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your neighbour Satish moved into a new house. Congratulate him.",
        te: "పక్కింటి సతీష్ గారు కొత్త ఇంట్లోకి మారారు. ఆయనకి అభినందనలు చెప్పండి.",
      },
      expected: ["Congratulations on your new house!", "Congratulations on the new house!", "Congratulations!"],
      options: ["Congratulations on your new house!", "Congratulations for your new house!", "Happy new house to you!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "It is your friend Jyothi's birthday. Wish her.",
        te: "ఈ రోజు మీ స్నేహితురాలు జ్యోతి గారి పుట్టినరోజు. ఆవిడకి శుభాకాంక్షలు చెప్పండి.",
      },
      expected: ["Many happy returns of the day!", "Happy birthday, Jyothi!", "Happy birthday!"],
      options: ["Many happy returns of the day!", "Many happy return of the day!", "Many happy returns on the day!"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A friend's retirement", te: "స్నేహితుల రిటైర్‌మెంట్" },
    scene: {
      en: "Your friend Narayana retired today from the post office. You meet him at his farewell.",
      te: "మీ స్నేహితులు నారాయణ గారు ఈ రోజు పోస్ట్ ఆఫీసు నుండి రిటైర్ అయ్యారు. ఆయన వీడ్కోలు సభలో కలిశారు.",
    },
    partner: { en: "Narayana (friend)", te: "నారాయణ (స్నేహితులు)" },
    voice: "b",
    skills: [{ id: "wish", label: { en: "Wishing", te: "శుభాకాంక్షలు" } }],
    turns: [
      {
        partner: "Ah, you came! Thank you for coming.",
        te: "అరే, వచ్చారా! వచ్చినందుకు థాంక్స్.",
        hint: { en: "Congratulate him on the big day.", te: "ఈ ముఖ్యమైన రోజుకి ఆయనకి అభినందనలు చెప్పండి." },
        replies: [
          { say: "Congratulations on your retirement!", good: true, skill: "wish" },
          { say: "Congratulations for your retirement!", good: false, skill: "wish", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thank you! Thirty-five years in one office!",
        te: "థాంక్యూ! ఒకే ఆఫీసులో ముప్పై ఐదు సంవత్సరాలు!",
        hint: { en: "Praise his hard work, and tell him to enjoy his free time.", te: "ఆయన కష్టాన్ని మెచ్చుకుని, ఖాళీ సమయాన్ని ఆనందించమని చెప్పండి." },
        replies: [
          { say: "You worked very hard. Enjoy your free time now!", good: true, skill: "wish" },
          { say: "You work very hard. Enjoy your free time now!", good: false, skill: "wish" },
          {
            say: "Finally! Now you can sit at home all day.",
            good: false,
            skill: "wish",
            react: { en: "Ha! No, I have many plans.", te: "హహ! లేదండీ, నాకు చాలా ప్లాన్లు ఉన్నాయి." },
          },
        ],
      },
      {
        partner: "My colleagues gave me this watch. Look!",
        te: "నా సహోద్యోగులు ఈ వాచ్ ఇచ్చారు. చూడండి!",
        hint: { en: "Say something nice about the watch.", te: "వాచ్ గురించి మంచి మాట చెప్పండి." },
        replies: [
          { say: "It's beautiful! It looks very nice on you.", good: true, skill: "wish" },
          { say: "It's beautiful! It look very nice on you.", good: false, skill: "wish", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Please have some sweets before you go.",
        te: "వెళ్ళే ముందు కొన్ని స్వీట్లు తీసుకోండి.",
        hint: { en: "Thank him, and wish him well for the years ahead.", te: "థాంక్స్ చెప్పి, రాబోయే రోజులు బాగుండాలని కోరుకోండి." },
        replies: [
          { say: "Thank you! All the best for the future.", good: true, skill: "wish" },
          { say: "Thank you! All the best for future.", good: false, skill: "wish", fixIt: "article" },
        ],
      },
    ],
  },
};
