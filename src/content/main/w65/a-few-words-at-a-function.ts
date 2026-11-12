import type { Lesson } from "../../types";

/** Week 65, Day 5 (CURRICULUM §5): a short formal wish in front of people — On behalf of the colony, I wish Mr Joseph a happy retirement. */
export const day: Lesson = {
  id: "a-few-words-at-a-function",
  kind: "lesson",
  title: { en: "A Few Words at a Function", te: "ఫంక్షన్‌లో రెండు మాటలు" },
  subtitle: "On behalf of …, I wish …",
  summary: {
    en: "Learn to say a short formal wish in front of people: On behalf of the colony, I wish Mr Joseph a happy retirement.",
    te: "అందరి ముందు చిన్న, మర్యాదైన శుభాకాంక్ష చెప్పడం నేర్చుకుందాం: On behalf of the colony, I wish Mr Joseph a happy retirement.",
  },
  seo: {
    title: "A Short Speech at a Function in English for Telugu Speakers",
    description:
      "Say On behalf of the colony, I wish Mr Joseph a happy retirement. Simple lessons for Telugu speakers on a few words at a function.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "wish", role: "action" },
    { text: "Mr Joseph", role: "what" },
    { text: "a happy retirement", role: "what" },
  ],
  core: [
    { en: "On behalf of the colony, I wish Mr Joseph a happy retirement.", te: "కాలనీ అందరి తరఫున, జోసెఫ్ గారి రిటైర్మెంట్ జీవితం సంతోషంగా సాగాలని కోరుకుంటున్నాను.", extra: ["wishes"] },
    { en: "He has helped all of us for many years.", te: "ఎన్నో ఏళ్ళుగా ఆయన మా అందరికీ సహాయం చేస్తూ వచ్చారు.", extra: ["since"] },
    { en: "Good evening, everyone. I'd like to say a few words.", te: "అందరికీ నమస్కారం. నేను రెండు మాటలు చెప్పాలనుకుంటున్నాను.", extra: ["little"] },
    { en: "Let's give him a big round of applause.", te: "ఆయన కోసం అందరం గట్టిగా చప్పట్లు కొడదాం.", extra: ["an"] },
    { en: "He has worked at the post office for thirty-five years.", te: "ముప్ఫై అయిదేళ్ళుగా ఆయన పోస్ట్ ఆఫీసులో పనిచేశారు.", extra: ["is"] },
    { en: "We wish him good health and a peaceful life.", te: "ఆయనకి మంచి ఆరోగ్యం, ప్రశాంతమైన జీవితం ఉండాలని కోరుకుంటున్నాం.", extra: ["healthy"] },
    { en: "Thank you all for being here on this special occasion.", te: "ఈ ప్రత్యేక సందర్భంలో ఇక్కడికి వచ్చినందుకు అందరికీ థ్యాంక్స్.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Imagine a friend's retirement or birthday function. Say three sentences aloud: a greeting, one good thing about your friend, and your wish.",
    te: "ఒక స్నేహితుల రిటైర్మెంట్ లేదా పుట్టినరోజు ఫంక్షన్ ఊహించుకోండి. మూడు వాక్యాలు గట్టిగా చెప్పండి: నమస్కారం, ఆ స్నేహితుల గురించి ఒక మంచి మాట, మీ శుభాకాంక్ష.",
  },
  words: [
    { en: "speech", te: "ప్రసంగం, స్పీచ్" },
    { en: "occasion", te: "సందర్భం" },
    { en: "dedication", te: "అంకితభావం, శ్రద్ధ" },
    { en: "honour", te: "గౌరవం, సన్మానం" },
    { en: "memento", te: "జ్ఞాపిక, memento" },
  ],
  grammar: ["present-perfect", "would-like", "politeness-softening"],
  topics: ["people", "neighbours", "festivals"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A short speech in three steps", te: "మూడు అడుగుల్లో చిన్న స్పీచ్" },
      body: {
        en: "Greet everyone and say you'd like to say a few words. Say one good thing the person has done. End with your wish, on behalf of the group.",
        te: "అందరికీ నమస్కారం చెప్పి, రెండు మాటలు చెప్తానని అనండి. ఆ వ్యక్తి చేసిన ఒక మంచి పని చెప్పండి. చివర అందరి తరఫున శుభాకాంక్ష చెప్పండి.",
      },
      bridge: {
        te: ["కాలనీ తరఫున", "జోసెఫ్ గారికి", "సంతోషకరమైన రిటైర్మెంట్", "కోరుకుంటున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "wish", role: "action" },
          { text: "Mr Joseph", role: "what" },
          { text: "a happy retirement", role: "what" },
        ],
      },
      examples: [
        { en: "On behalf of the colony, I wish Mr Joseph a happy retirement.", te: "కాలనీ అందరి తరఫున, జోసెఫ్ గారి రిటైర్మెంట్ జీవితం సంతోషంగా సాగాలని కోరుకుంటున్నాను." },
        { en: "He has helped all of us for many years.", te: "ఎన్నో ఏళ్ళుగా ఆయన మా అందరికీ సహాయం చేస్తూ వచ్చారు." },
        { en: "Good evening, everyone. I'd like to say a few words.", te: "అందరికీ నమస్కారం. నేను రెండు మాటలు చెప్పాలనుకుంటున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The parts of a short speech", te: "చిన్న స్పీచ్‌లో భాగాలు" },
      items: [
        {
          form: "I'd like to say a few words.",
          useFor: { en: "The start, after you greet everyone.", te: "మొదట్లో, అందరికీ నమస్కారం చెప్పాక." },
          example: { en: "Good evening, everyone. I'd like to say a few words.", te: "అందరికీ నమస్కారం. నేను రెండు మాటలు చెప్పాలనుకుంటున్నాను." },
        },
        {
          form: "He has … for … years.",
          useFor: { en: "What the person has done, up to now.", te: "ఆ వ్యక్తి ఇప్పటిదాకా చేసిన పని." },
          example: { en: "He has worked at the post office for thirty-five years.", te: "ముప్ఫై అయిదేళ్ళుగా ఆయన పోస్ట్ ఆఫీసులో పనిచేశారు." },
        },
        {
          form: "On behalf of …, I wish …",
          useFor: { en: "Your wish, for the whole group.", te: "అందరి తరఫున మీ శుభాకాంక్ష." },
          example: { en: "We wish him good health and a peaceful life.", te: "ఆయనకి మంచి ఆరోగ్యం, ప్రశాంతమైన జీవితం ఉండాలని కోరుకుంటున్నాం." },
        },
        {
          form: "Let's give him a big round of applause.",
          useFor: { en: "The end: ask everyone to clap.", te: "చివర్లో: అందరినీ చప్పట్లు కొట్టమని అడగడం." },
          example: { en: "Let's give him a big round of applause.", te: "ఆయన కోసం అందరం గట్టిగా చప్పట్లు కొడదాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Myself Kiran, from the colony committee.",
      right: "I'm Kiran, from the colony committee.",
      why: {
        en: "Myself cannot start a sentence; to give your name, say I am.",
        te: "myself తో వాక్యం మొదలుపెట్టకూడదు; పేరు చెప్పడానికి I am అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "He is working in the post office for thirty years.",
      right: "He has worked in the post office for thirty years.",
      why: {
        en: "For time from the past up to now, use has with the verb; Telugu uses the present.",
        te: "గతం నుంచి ఇప్పటిదాకా సాగిన కాలానికి verb తో has వాడాలి; తెలుగులో present తో అంటాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Start your speech at the function.", te: "ఫంక్షన్‌లో మీ స్పీచ్ మొదలుపెట్టండి." },
      options: [
        "Good evening, everyone. I'd like to say a few words.",
        "Good evening, everyone. I'd like to say few words.",
        "Good evening, everyone. I like to say a few words.",
      ],
      answer: 0,
      why: {
        en: "A few means some, but few alone means almost none; I'd like is the polite form.",
        te: "a few అంటే కొన్ని; a లేకుండా few అంటే దాదాపు లేవు అని అర్థం. I'd like మర్యాదైన మాట.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "duration",
      sentence: "Mr Joseph ___ helped all of us for many years.",
      te: "ఎన్నో ఏళ్ళుగా జోసెఫ్ గారు మా అందరికీ సహాయం చేస్తూ వచ్చారు.",
      options: ["has", "is", "have"],
      answer: 0,
      why: {
        en: "From the past up to now takes has with the verb, and one person takes has, not have.",
        te: "గతం నుంచి ఇప్పటిదాకా అయితే verb తో has; ఒక్కరైతే have కాదు, has.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Sai Nagar Colony: A Retirement Function",
      lines: [
        "Dear residents,",
        "Our neighbour, Mr Joseph, retires from the post office this month.",
        "He has served the people of our area for thirty-five years.",
        "The colony is holding a small function in his honour.",
        "Date and time: Saturday, 20 December, at 6 pm.",
        "Place: the community hall, near the park.",
        "Our secretary, Radha, will say a few words on behalf of everyone.",
        "Everyone is welcome. Tea and snacks will be served.",
        "Committee, Sai Nagar Residents' Association",
      ],
      questions: [
        {
          prompt: { en: "Why is the colony holding a function?", te: "కాలనీ వాళ్ళు ఫంక్షన్ ఎందుకు చేస్తున్నారు?" },
          options: ["Mr Joseph is retiring", "Mr Joseph is getting married", "Mr Joseph has a new home"],
          answer: 0,
          why: {
            en: "The second line says he finishes his work at the post office this month.",
            te: "ఈ నెల పోస్ట్ ఆఫీసులో ఆయన ఉద్యోగం పూర్తవుతుందని రెండో లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "Who will speak for the colony?", te: "కాలనీ తరఫున ఎవరు మాట్లాడతారు?" },
          options: ["Radha, the secretary", "Mr Joseph", "The postmaster"],
          answer: 0,
          why: {
            en: "The seventh line names the person who will speak on behalf of everyone.",
            te: "అందరి తరఫున ఎవరు మాట్లాడతారో ఏడో లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "Where is the function?", te: "ఫంక్షన్ ఎక్కడ?" },
          options: ["In the community hall", "At the post office", "In Mr Joseph's house"],
          answer: 0,
          why: {
            en: "The line that starts with Place gives the hall near the park.",
            te: "Place తో మొదలయ్యే లైన్‌లో పార్క్ దగ్గరి హాల్ అని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Mr Joseph always help everyone in the colony.",
      wrongIndex: 3,
      fix: "Mr Joseph always helps everyone in the colony.",
      why: {
        en: "One person, like Mr Joseph, takes s on the verb for something he does again and again.",
        te: "ఒక్కరైతే (జోసెఫ్ గారు లాగా), మళ్ళీ మళ్ళీ చేసే పనికి verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Before your speech, tell everyone your own name and that you are from the colony committee.",
        te: "స్పీచ్ ముందు, మీ పేరు, మీరు కాలనీ కమిటీ నుంచి అని అందరికీ చెప్పండి.",
      },
      expected: ["I'm Kiran, from the colony committee.", "I'm Sai, from the colony committee.", "My name is Kiran. I'm from the colony committee."],
      options: ["I'm Kiran, from the colony committee.", "Myself Kiran, from the colony committee.", "I Kiran, from the colony committee."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "End your speech: wish Mr Joseph good health and a peaceful life.",
        te: "స్పీచ్ ముగించండి: జోసెఫ్ గారికి మంచి ఆరోగ్యం, ప్రశాంతమైన జీవితం కోరుకోండి.",
      },
      expected: ["We wish him good health and a peaceful life.", "We wish him good health.", "I wish him good health and a happy retirement."],
      options: ["We wish him good health and a peaceful life.", "We wish him a good health and peaceful life.", "We wish to him good health and a peaceful life."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the retirement function", te: "రిటైర్మెంట్ ఫంక్షన్‌లో" },
    scene: {
      en: "At Mr Joseph's retirement function, the colony president, Srinivas, calls you up to the stage.",
      te: "జోసెఫ్ గారి రిటైర్మెంట్ ఫంక్షన్‌లో, కాలనీ ప్రెసిడెంట్ శ్రీనివాస్ గారు మిమ్మల్ని స్టేజ్ మీదికి పిలిచారు.",
    },
    partner: { en: "Srinivas (the colony president)", te: "శ్రీనివాస్ (కాలనీ ప్రెసిడెంట్)" },
    voice: "b",
    skills: [
      { id: "speech", label: { en: "A short speech", te: "చిన్న స్పీచ్" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Now I request our neighbour to say a few words. Please come.",
        te: "ఇప్పుడు మన పొరుగువారిని రెండు మాటలు చెప్పమని కోరుతున్నాను. రండి.",
        hint: { en: "Greet everyone, and say you'd like to say a few words.", te: "అందరికీ నమస్కారం చెప్పి, రెండు మాటలు చెప్తానని అనండి." },
        replies: [
          { say: "Good evening, everyone. I'd like to say a few words.", good: true, skill: "speech" },
          { say: "Good evening, everyone. Myself Kiran, from the colony committee.", good: false, skill: "speech", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Tell us, how long have you known Mr Joseph?",
        te: "జోసెఫ్ గారు మీకు ఎంత కాలంగా తెలుసో చెప్పండి.",
        hint: { en: "Say you have known him for twenty years.", te: "ఇరవై ఏళ్ళుగా ఆయన తెలుసని చెప్పండి." },
        replies: [
          { say: "I have known him for twenty years.", good: true, skill: "speech" },
          { say: "I am knowing him for twenty years.", good: false, skill: "speech", fixIt: "state-ing" },
          { say: "I know him since twenty years.", good: false, skill: "speech", fixIt: "duration" },
        ],
      },
      {
        partner: "What do you remember most about him?",
        te: "ఆయన గురించి మీకు ఎక్కువగా ఏం గుర్తుంది?",
        hint: { en: "Say he has helped everyone in the colony for many years.", te: "ఎన్నో ఏళ్ళుగా ఆయన కాలనీలో అందరికీ సహాయం చేశారని చెప్పండి." },
        replies: [
          { say: "He has helped all of us for many years.", good: true, skill: "speech" },
          { say: "He has served us all with great dedication.", good: true, skill: "speech" },
          {
            say: "He talks too much, but he is okay.",
            good: false,
            skill: "polite",
            react: { en: "Ha! Let's keep it kind today.", te: "హా! ఈ రోజు మంచి మాటలే చెప్దాం." },
          },
        ],
      },
      {
        partner: "Lovely. Please give him this memento, and end with a wish.",
        te: "బాగుంది. ఈ memento ఆయనకి ఇచ్చి, ఒక శుభాకాంక్షతో ముగించండి.",
        hint: { en: "Give him the memento, and wish him a happy retirement for the whole colony.", te: "memento ఇచ్చి, కాలనీ అందరి తరఫున రిటైర్మెంట్ శుభాకాంక్షలు చెప్పండి." },
        replies: [
          { say: "On behalf of the colony, I wish him a happy retirement.", good: true, skill: "speech" },
          { say: "On behalf of the colony, I wishing him a happy retirement.", good: false, skill: "speech" },
        ],
      },
    ],
  },
};
