import type { Lesson } from "../../types";

/** Week 73, Day 4 (CURRICULUM §5): must be / might be + -ing for guessing what someone is doing — He must be sleeping. */
export const day: Lesson = {
  id: "he-must-be-sleeping-guesses",
  kind: "lesson",
  title: { en: "He Must Be Sleeping", te: "నిద్రపోతూ ఉంటారు" },
  subtitle: "must be / might be + -ing",
  summary: {
    en: "Learn to guess what someone is doing now: He must be sleeping. They might be having lunch.",
    te: "ఎవరైనా ఇప్పుడు ఏం చేస్తున్నారో ఊహించడం నేర్చుకుందాం: He must be sleeping. They might be having lunch.",
  },
  seo: {
    title: "Guessing What Someone Is Doing in English for Telugu Speakers",
    description:
      "Say He must be sleeping and They might be having lunch now. Simple lessons for Telugu speakers on guessing what someone is doing.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "must be", role: "action" },
    { text: "sleeping", role: "action" },
    { text: "now", role: "when" },
  ],
  core: [
    { en: "He must be sleeping.", te: "ఆయన నిద్రపోతూ ఉంటారు.", extra: ["sleep"] },
    { en: "They might be having lunch now.", te: "వాళ్ళు ఇప్పుడు భోజనం చేస్తూ ఉండొచ్చు.", extra: ["have"] },
    { en: "She must be doing her puja.", te: "ఆవిడ పూజ చేసుకుంటూ ఉంటారు.", extra: ["do"] },
    { en: "He might be watching TV. Ring the bell again.", te: "ఆయన టీవీ చూస్తూ ఉండొచ్చు. మళ్ళీ బెల్ కొట్టండి.", extra: ["is"] },
    { en: "Nobody is answering. They must be out.", te: "ఎవరూ పలకట్లేదు. వాళ్ళు బయటికి వెళ్ళి ఉంటారు.", extra: ["answer"] },
    { en: "It's two o'clock. He must be taking his afternoon nap.", te: "రెండు అయింది. ఆయన మధ్యాహ్నం కునుకు తీస్తూ ఉంటారు.", extra: ["take"] },
    { en: "Let's not ring the bell again. We can come back later.", te: "మళ్ళీ బెల్ కొట్టొద్దు. తర్వాత మళ్ళీ రావొచ్చు.", extra: ["don't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a friend right now. Guess aloud what he or she is doing: He must be … / She might be …",
    te: "ఇప్పుడు ఒక స్నేహితుల్ని గుర్తు చేసుకోండి. వాళ్ళు ఏం చేస్తున్నారో గట్టిగా ఊహించి చెప్పండి: He must be … / She might be …",
  },
  words: [
    { en: "doorbell", te: "కాలింగ్ బెల్, తలుపు బెల్" },
    { en: "knock", te: "తలుపు తట్టడం" },
    { en: "no answer", te: "ఎవరూ పలకలేదు, జవాబు లేదు" },
    { en: "fast asleep", te: "గాఢ నిద్రలో" },
    { en: "come back later", te: "తర్వాత మళ్ళీ రావడం" },
  ],
  grammar: ["might-may", "present-continuous", "present-simple"],
  topics: ["neighbours", "home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Guessing what someone is doing", te: "ఎవరైనా ఏం చేస్తున్నారో ఊహించడం" },
      body: {
        en: "To guess what someone is doing now, use must be or might be with the -ing verb: He must be sleeping. They might be having lunch.",
        te: "ఎవరైనా ఇప్పుడు ఏం చేస్తున్నారో ఊహించాలంటే must be లేదా might be తర్వాత verb కి -ing చేర్చండి: He must be sleeping (నిద్రపోతూ ఉంటారు).",
      },
      bridge: {
        te: ["ఆయన", "ఇప్పుడు", "నిద్రపోతూ ఉంటారు"],
        en: [
          { text: "He", role: "who" },
          { text: "must be", role: "action" },
          { text: "sleeping", role: "action" },
          { text: "now", role: "when" },
        ],
      },
      examples: [
        { en: "He must be sleeping.", te: "ఆయన నిద్రపోతూ ఉంటారు." },
        { en: "They might be having lunch now.", te: "వాళ్ళు ఇప్పుడు భోజనం చేస్తూ ఉండొచ్చు." },
        { en: "She must be doing her puja.", te: "ఆవిడ పూజ చేసుకుంటూ ఉంటారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "An action, or how someone is?", te: "చేస్తున్న పనా, ఎలా ఉన్నారా?" },
      items: [
        {
          form: "must be + -ing",
          useFor: { en: "A guess about an action now.", te: "ఇప్పుడు జరుగుతున్న పనిని ఊహించడానికి." },
          example: { en: "No answer. He must be fast asleep.", te: "ఎవరూ పలకట్లేదు. ఆయన గాఢ నిద్రలో ఉంటారు." },
        },
        {
          form: "must be + tired, out, busy",
          useFor: { en: "A guess about how or where someone is.", te: "ఎవరైనా ఎలా ఉన్నారో, ఎక్కడ ఉన్నారో ఊహించడానికి." },
          example: { en: "She must be tired after the trip.", te: "ప్రయాణం తర్వాత ఆవిడ అలసిపోయి ఉంటారు." },
        },
        {
          form: "must + know, like, have",
          useFor: { en: "Words like know never take -ing.", te: "know లాంటి పదాలకి -ing ఎప్పుడూ రాదు." },
          example: { en: "She must know the address.", te: "ఆవిడకి అడ్రస్ తెలిసే ఉంటుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "She must be knowing the address.",
      right: "She must know the address.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing, even when Telugu says తెలిసే ఉంటుంది.",
        te: "know ఒక స్థితి, పని కాదు; తెలుగులో 'తెలిసే ఉంటుంది' అన్నా, దానికి -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Ring the calling bell again.",
      right: "Ring the doorbell again.",
      why: {
        en: "Calling bell is our Indian word; people from other places say doorbell.",
        te: "calling bell అనేది మన దగ్గరి మాట; బయటి ప్రాంతాలవాళ్ళు doorbell అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Mohan has lived in this colony for thirty years. A visitor asks you for the post office. What do you say?",
        te: "మోహన్ గారు ముప్ఫై ఏళ్ళుగా ఈ కాలనీలో ఉంటున్నారు. ఒక విజిటర్ పోస్ట్ ఆఫీసు ఎక్కడని మిమ్మల్ని అడుగుతున్నారు. ఏమంటారు?",
      },
      options: ["Ask Mohan. He must know the way.", "Ask Mohan. He must be knowing the way.", "Ask Mohan. He must knows the way."],
      answer: 0,
      why: {
        en: "Know is a state, so after must it stays plain, with no -ing or s.",
        te: "know ఒక స్థితి; must తర్వాత అది మారదు, -ing గానీ s గానీ రావు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Venkat ___ a nap every afternoon. He must be sleeping now.",
      te: "వెంకట్ గారు రోజూ మధ్యాహ్నం కునుకు తీస్తారు. ఇప్పుడు నిద్రపోతూ ఉంటారు.",
      options: ["takes", "take", "is taking"],
      answer: 0,
      why: {
        en: "Every afternoon is a habit, so no -ing; one person, like he, takes s.",
        te: "every afternoon అంటే అలవాటు, అందుకే -ing రాదు; ఒక్కరైతే (he లాగా) verb కి s.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "It's one o'clock. Your neighbours' door is shut, and you hear plates. What do you guess?",
        te: "ఒంటి గంట అయింది. పక్కింటివాళ్ళ తలుపు మూసి ఉంది, లోపల నుంచి ప్లేట్ల శబ్దం వినిపిస్తోంది. ఏమని ఊహిస్తారు?",
      },
      options: ["They might be having lunch.", "They might having lunch.", "They might be have lunch."],
      answer: 0,
      why: {
        en: "A guess about an action now needs might be and the -ing verb together.",
        te: "ఇప్పుడు జరుగుతున్న పనిని ఊహించాలంటే might be, verb కి -ing రెండూ కలిసి రావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He must be sleep. Let's call later.",
      wrongIndex: 3,
      fix: "He must be sleeping. Let's call later.",
      why: {
        en: "After must be, an action happening now needs the -ing form.",
        te: "must be తర్వాత ఇప్పుడు జరుగుతున్న పనికి verb కి -ing కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You call your friend Prasad at six in the morning. There's no answer. Guess what he is doing.",
        te: "పొద్దున ఆరింటికి మీ స్నేహితుడు ప్రసాద్ గారికి ఫోన్ చేశారు. ఆయన ఎత్తలేదు. ఆయన ఏం చేస్తున్నారో ఊహించండి.",
      },
      expected: ["He must be sleeping.", "He might be sleeping.", "He must be walking.", "He might be on his morning walk."],
      options: ["He must be sleeping.", "He must sleeping.", "He must be sleep."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend Rani isn't answering. She goes to the temple at six every evening, and it's six now. Guess where she is.",
        te: "మీ స్నేహితురాలు రాణి గారు ఫోన్ ఎత్తట్లేదు. రోజూ సాయంత్రం ఆరింటికి ఆవిడ గుడికి వెళ్తారు, ఇప్పుడు ఆరు అయింది. ఆవిడ ఎక్కడ ఉన్నారో ఊహించండి.",
      },
      expected: ["She must be at the temple.", "She might be at the temple.", "She must be praying at the temple."],
      options: ["She must be at the temple.", "She must be in temple.", "She must at the temple."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Nobody opens the door", te: "ఎవరూ తలుపు తీయట్లేదు" },
    scene: {
      en: "You go to return a book to your neighbour Narayana. You ring the doorbell twice. Usha from next door comes out.",
      te: "మీ పక్కింటి నారాయణ గారికి ఒక పుస్తకం తిరిగి ఇవ్వడానికి వెళ్ళారు. రెండుసార్లు బెల్ కొట్టారు. పక్కింటి ఉష గారు బయటికి వచ్చారు.",
    },
    partner: { en: "Usha (a neighbour)", te: "ఉష (పక్కింటావిడ)" },
    skills: [
      { id: "guess", label: { en: "Guessing", te: "ఊహించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Are you looking for Mr Narayana?",
        te: "హలో! నారాయణ గారి కోసం చూస్తున్నారా?",
        hint: { en: "Say yes, and that nobody is opening the door.", te: "అవునని, ఎవరూ తలుపు తీయట్లేదని చెప్పండి." },
        replies: [
          { say: "Yes. I rang the doorbell twice, but nobody is answering.", good: true, skill: "guess" },
          { say: "Yes. I rang the doorbell twice, but nobody answering.", good: false, skill: "guess", fixIt: "be" },
        ],
      },
      {
        partner: "He usually sleeps after lunch, from two to four.",
        te: "ఆయన మామూలుగా భోజనం తర్వాత రెండు నుంచి నాలుగు వరకు పడుకుంటారు.",
        hint: { en: "Guess what he is doing now.", te: "ఆయన ఇప్పుడు ఏం చేస్తున్నారో ఊహించండి." },
        replies: [
          { say: "Oh, then he must be sleeping.", good: true, skill: "guess" },
          { say: "Then he might be taking a nap.", good: true, skill: "guess" },
          { say: "Oh, then he must be sleep.", good: false, skill: "guess" },
        ],
      },
      {
        partner: "Shall I knock loudly for you?",
        te: "మీ కోసం గట్టిగా తలుపు తట్టనా?",
        hint: { en: "Say no kindly, and say you will come back later.", te: "వద్దని మర్యాదగా చెప్పి, తర్వాత మళ్ళీ వస్తానని చెప్పండి." },
        replies: [
          { say: "No, please don't wake him. I'll come back later.", good: true, skill: "polite" },
          {
            say: "Yes, knock hard. He sleeps too much.",
            good: false,
            skill: "polite",
            react: { en: "Oh! He's eighty. Let him rest, poor man.", te: "అయ్యో! ఆయనకి ఎనభై ఏళ్ళు. పాపం, విశ్రాంతి తీసుకోనివ్వండి." },
          },
        ],
      },
      {
        partner: "Okay. I'll tell him you came.",
        te: "సరే. మీరు వచ్చారని ఆయనకి చెప్తాను.",
        hint: { en: "Thank her, and say when you will come again.", te: "ఆవిడకి థాంక్స్ చెప్పి, మళ్ళీ ఎప్పుడు వస్తారో చెప్పండి." },
        replies: [
          { say: "Thank you! Please tell him I'll come at five.", good: true, skill: "polite" },
          { say: "Thank you! Please tell him I'll coming at five.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
