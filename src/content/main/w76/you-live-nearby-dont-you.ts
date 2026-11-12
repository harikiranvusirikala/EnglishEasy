import type { Lesson } from "../../types";

/** Week 76, Day 2 (CURRICULUM §5): tags with do, does, did and have — You live near the temple, don't you? Suresh went to Shirdi, didn't he? */
export const day: Lesson = {
  id: "you-live-nearby-dont-you",
  kind: "lesson",
  title: { en: "You Live Nearby, Don't You?", te: "మీరు దగ్గర్లోనే ఉంటారు కదా?" },
  subtitle: "don't you? didn't he? haven't they?",
  summary: {
    en: "Learn tags for sentences with no am, is or was: You live near the temple, don't you? Suresh went to Shirdi, didn't he?",
    te: "am, is, was లేని వాక్యాలకి tag నేర్చుకుందాం: You live near the temple, don't you? Suresh went to Shirdi, didn't he?",
  },
  seo: {
    title: "Tag Questions With Do and Did in English for Telugu Speakers",
    description:
      "Say You live near the temple, don't you? and He went to Shirdi, didn't he? Simple lessons for Telugu speakers on tag questions.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "live", role: "action" },
    { text: "near the temple,", role: "what" },
    { text: "don't you?", role: "action" },
  ],
  core: [
    { en: "You live near the temple, don't you?", te: "మీరు గుడి దగ్గర ఉంటారు కదా?", extra: ["aren't"] },
    { en: "Suresh went to Shirdi last week, didn't he?", te: "సురేష్ గారు పోయిన వారం షిరిడీ వెళ్ళారు కదా?", extra: ["don't"] },
    { en: "You come here every evening, don't you?", te: "మీరు రోజూ సాయంత్రం ఇక్కడికి వస్తారు కదా?", extra: ["isn't"] },
    { en: "Kamala walks very fast, doesn't she?", te: "కమల గారు చాలా వేగంగా నడుస్తారు కదా?", extra: ["walk"] },
    { en: "They have painted the benches, haven't they?", te: "బెంచీలకి రంగు వేశారు కదా?", extra: ["didn't"] },
    { en: "You've retired from the bank, haven't you?", te: "మీరు బ్యాంక్ నుంచి రిటైర్ అయ్యారు కదా?", extra: ["don't"] },
    { en: "We met at the bus stop the other day, didn't we?", te: "మొన్న మనం బస్ స్టాప్ దగ్గర కలిశాం కదా?", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a neighbour's habit. Say it aloud with a tag: Ramana walks every morning, doesn't he?",
    te: "పక్కింటివారి ఒక అలవాటు గుర్తు చేసుకోండి. దాన్ని tag తో గట్టిగా చెప్పండి: Ramana walks every morning, doesn't he?",
  },
  words: [
    { en: "regular", te: "రోజూ వచ్చేవారు" },
    { en: "around here", te: "ఇక్కడ దగ్గర్లో" },
    { en: "pass the time", te: "కాలక్షేపం చేయడం" },
    { en: "the other day", te: "మొన్న, ఈ మధ్య ఒక రోజు" },
    { en: "every now and then", te: "అప్పుడప్పుడు" },
  ],
  grammar: ["indirect-tag-questions", "present-simple", "past-simple", "present-perfect"],
  topics: ["people", "neighbours", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "No am, is or was? Use do or did", te: "am, is, was లేకపోతే do, did" },
      body: {
        en: "If the sentence has no am, is, are or was, the tag uses don't, doesn't or didn't: You live here, don't you? With have and a done word, it uses haven't.",
        te: "వాక్యంలో am, is, are, was లేకపోతే tag లో don't, doesn't, didn't వస్తాయి: You live here, don't you? have తో పాటు painted లాంటి మాట ఉంటే haven't.",
      },
      bridge: {
        te: ["మీరు", "గుడి దగ్గర", "ఉంటారు", "కదా?"],
        en: [
          { text: "You", role: "who" },
          { text: "live", role: "action" },
          { text: "near the temple,", role: "what" },
          { text: "don't you?", role: "action" },
        ],
      },
      examples: [
        { en: "You live near the temple, don't you?", te: "మీరు గుడి దగ్గర ఉంటారు కదా?" },
        { en: "Suresh went to Shirdi last week, didn't he?", te: "సురేష్ గారు పోయిన వారం షిరిడీ వెళ్ళారు కదా?" },
        { en: "Kamala walks very fast, doesn't she?", te: "కమల గారు చాలా వేగంగా నడుస్తారు కదా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "don't, doesn't, didn't or haven't?", te: "don't, doesn't, didn't, haven't: ఏది?" },
      items: [
        {
          form: "You live …, don't you?",
          useFor: { en: "Every day, with I, you, we or they.", te: "రోజూ జరిగేది; I, you, we, they తో." },
          example: { en: "You come here every evening, don't you?", te: "మీరు రోజూ సాయంత్రం ఇక్కడికి వస్తారు కదా?" },
        },
        {
          form: "She walks …, doesn't she?",
          useFor: { en: "One person: the verb has s, and the tag has doesn't.", te: "ఒక్కరైతే verb కి s, tag లో doesn't." },
          example: { en: "Kamala walks very fast, doesn't she?", te: "కమల గారు చాలా వేగంగా నడుస్తారు కదా?" },
        },
        {
          form: "He went …, didn't he?",
          useFor: { en: "The past: went, met, came.", te: "గతం: went, met, came." },
          example: { en: "We met at the bus stop the other day, didn't we?", te: "మొన్న మనం బస్ స్టాప్ దగ్గర కలిశాం కదా?" },
        },
        {
          form: "They have painted …, haven't they?",
          useFor: { en: "With have or has and a done word.", te: "have, has తో పాటు painted, retired లాంటి మాట." },
          example: { en: "They have painted the benches, haven't they?", te: "బెంచీలకి రంగు వేశారు కదా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "You come here every evening, isn't it?",
      right: "You come here every evening, don't you?",
      why: {
        en: "Isn't it? fits only it is. Come has no is in front, so the tag uses don't.",
        te: "isn't it? it is కి మాత్రమే. come ముందు is లేదు, అందుకే tag లో don't.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "You didn't come yesterday, didn't you?",
      right: "You didn't come yesterday, did you?",
      why: {
        en: "One not is enough. If the sentence has not, the tag has no not.",
        te: "ఒక్క not చాలు. వాక్యంలో not ఉంటే tag లో not రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You think Ramesh lives near the temple. Check with him.",
        te: "రమేష్ గారు గుడి దగ్గర ఉంటారని మీకు అనిపిస్తోంది. ఆయన్ని అడిగి నిర్ధారించుకోండి.",
      },
      options: ["You live near the temple, don't you?", "You live near the temple, aren't you?", "You live near the temple, isn't it?"],
      answer: 0,
      why: {
        en: "Live has no are in front, so the tag takes don't, the do of every day.",
        te: "live ముందు are లేదు; రోజూ జరిగేదానికి do, అందుకే tag లో don't.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Suresh went to Shirdi last week, ___ he?",
      te: "సురేష్ గారు పోయిన వారం షిరిడీ వెళ్ళారు కదా?",
      options: ["didn't", "doesn't", "wasn't"],
      answer: 0,
      why: {
        en: "Went is the past, so the tag uses didn't; doesn't is for every day.",
        te: "went గతం, అందుకే tag లో didn't; doesn't రోజూ జరిగేదానికి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "You saw this walker at the bus stop a few days ago. Check with him.",
        te: "కొన్ని రోజుల క్రితం ఈ వాకర్ని బస్ స్టాప్ దగ్గర చూశారు. ఆయన్ని అడిగి నిర్ధారించుకోండి.",
      },
      options: [
        "We met at the bus stop the other day, didn't we?",
        "We met in the bus stop the other day, didn't we?",
        "We met at the bus stop the other day, don't we?",
      ],
      answer: 0,
      why: {
        en: "A stop is a point, so English uses at; met is past, so the tag is didn't.",
        te: "బస్ స్టాప్ ఒక చోటు, అందుకే at; met గతం, అందుకే tag లో didn't.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Kamala walk very fast, doesn't she?",
      wrongIndex: 1,
      fix: "Kamala walks very fast, doesn't she?",
      why: {
        en: "One person, like she, adds s to the verb; Telugu has no such change.",
        te: "ఒక్కరైతే (she లాగా) verb కి s చేర్చాలి; తెలుగులో ఇలాంటి మార్పు ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You think Narayana retired from the bank. Check with him.",
        te: "నారాయణ గారు బ్యాంక్ నుంచి రిటైర్ అయ్యారని మీకు అనిపిస్తోంది. ఆయన్ని అడిగి నిర్ధారించుకోండి.",
      },
      expected: ["You've retired from the bank, haven't you?", "You have retired from the bank, haven't you?", "You retired from the bank, didn't you?"],
      options: ["You've retired from the bank, haven't you?", "You've retired from bank, haven't you?", "You've retired from the bank, didn't you?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour Anitha went to the market this morning. Check with her.",
        te: "పక్కింటి అనిత గారు ఈ రోజు పొద్దున మార్కెట్‌కి వెళ్ళారు. ఆవిడని అడిగి నిర్ధారించుకోండి.",
      },
      expected: ["You went to the market this morning, didn't you?", "You went to the market, didn't you?", "Did you go to the market this morning?"],
      options: [
        "You went to the market this morning, didn't you?",
        "You go to the market this morning, didn't you?",
        "You went to the market this morning, isn't it?",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "On the park bench", te: "పార్క్ బెంచ్ మీద" },
    scene: {
      en: "You sit down after your evening walk. Gopal, a regular at the park, is on the same bench.",
      te: "సాయంత్రం నడక తర్వాత మీరు కూర్చున్నారు. పార్క్‌కి రోజూ వచ్చే గోపాల్ గారు అదే బెంచ్ మీద ఉన్నారు.",
    },
    partner: { en: "Gopal (a regular at the park)", te: "గోపాల్ (పార్క్‌కి రోజూ వచ్చేవారు)" },
    voice: "b",
    skills: [
      { id: "tags", label: { en: "Tag questions", te: "కదా? ప్రశ్నలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! Please sit. There's space on the bench.",
        te: "గుడ్ ఈవెనింగ్! కూర్చోండి. బెంచ్ మీద చోటు ఉంది.",
        hint: { en: "Thank him, and check that he comes here every evening.", te: "థాంక్స్ చెప్పి, ఆయన రోజూ సాయంత్రం ఇక్కడికి వస్తారా అని నిర్ధారించుకోండి." },
        replies: [
          { say: "Thank you. You come here every evening, don't you?", good: true, skill: "tags" },
          { say: "Thank you. You come here every evening, isn't it?", good: false, skill: "tags", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Yes, every day at five. You live near the temple, don't you?",
        te: "అవును, రోజూ ఐదింటికి. మీరు గుడి దగ్గర ఉంటారు కదా?",
        hint: { en: "Say yes, and say how long you have lived there.", te: "అవును అని చెప్పి, అక్కడ ఎన్నేళ్ళుగా ఉంటున్నారో చెప్పండి." },
        replies: [
          { say: "Yes, I do. I've lived there for ten years.", good: true, skill: "tags" },
          { say: "Yes, I do. I am living there since ten years.", good: false, skill: "tags", fixIt: "duration" },
        ],
      },
      {
        partner: "I saw you at the eye camp the other day.",
        te: "మొన్న మిమ్మల్ని eye camp లో చూశాను.",
        hint: { en: "Say yes, and check that Suresh went there too.", te: "అవును అని చెప్పి, సురేష్ గారు కూడా అక్కడికి వెళ్ళారా అని నిర్ధారించుకోండి." },
        replies: [
          { say: "Yes. Suresh went too, didn't he?", good: true, skill: "tags" },
          { say: "Yes. Suresh went too, doesn't he?", good: false, skill: "tags" },
          {
            say: "Yes. Why were you watching me?",
            good: false,
            skill: "polite",
            react: { en: "Oh, I only saw you in the queue!", te: "అయ్యో, క్యూలో మిమ్మల్ని చూశానంతే!" },
          },
        ],
      },
      {
        partner: "Yes, he did. Well, it's getting dark. I must go now.",
        te: "అవును, వెళ్ళారు. సరే, చీకటి పడుతోంది. నేను ఇక వెళ్ళాలి.",
        hint: { en: "Say it was nice to talk, and that you will see him tomorrow.", te: "మాట్లాడటం సంతోషంగా ఉందని, రేపు కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Nice talking to you. See you tomorrow!", good: true, skill: "polite" },
          { say: "Nice talking to you. See you on tomorrow!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
