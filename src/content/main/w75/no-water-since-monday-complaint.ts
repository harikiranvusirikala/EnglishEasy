import type { Lesson } from "../../types";

/** Week 75, Day 2 (CURRICULUM §5): since / for in complaints, and has been + -ing — We haven't had water since Monday. */
export const day: Lesson = {
  id: "no-water-since-monday-complaint",
  kind: "lesson",
  title: { en: "We Haven't Had Water Since Monday", te: "సోమవారం నుంచి నీళ్ళు లేవు" },
  subtitle: "since / for in complaints; has been + -ing",
  summary: {
    en: "Learn to say how long a problem has lasted: We haven't had water since Monday. The tap has been dry for three days.",
    te: "సమస్య ఎంతకాలంగా ఉందో చెప్పడం నేర్చుకుందాం: We haven't had water since Monday. The tap has been dry for three days.",
  },
  seo: {
    title: "Complaining About Water Supply in English for Telugu Speakers",
    description:
      "Say We haven't had water since Monday and The tap has been dry for three days. Simple lessons for Telugu speakers at the water board.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "haven't had", role: "action" },
    { text: "water", role: "what" },
    { text: "since Monday", role: "when" },
  ],
  core: [
    { en: "We haven't had water since Monday.", te: "సోమవారం నుంచి మాకు నీళ్ళు రాలేదు.", extra: ["from"] },
    { en: "The tap has been dry for three days.", te: "మూడు రోజులుగా కుళాయిలో చుక్క నీళ్ళు రావట్లేదు.", extra: ["since"] },
    { en: "There has been no water since Monday.", te: "సోమవారం నుంచి అసలు నీళ్ళే లేవు.", extra: ["is"] },
    { en: "We have been buying water from a tanker.", te: "అప్పటి నుంచి tanker నీళ్ళు కొనుక్కుంటున్నాం.", extra: ["buy"] },
    { en: "The water pressure has been very low for a month.", te: "నెల రోజులుగా నీళ్ళ ప్రెజర్ చాలా తక్కువగా ఉంది.", extra: ["is"] },
    { en: "The water has been muddy since the rain.", te: "వర్షం పడినప్పటి నుంచి నీళ్ళు బురదగా వస్తున్నాయి.", extra: ["from"] },
    { en: "Our borewell has gone dry this summer.", te: "ఈ ఎండాకాలం మా బోరు ఎండిపోయింది.", extra: ["was"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing at home that hasn't worked well for some time. Say since when: The … has been … since …",
    te: "ఇంట్లో కొంతకాలంగా సరిగ్గా పని చేయని ఒక వస్తువు గుర్తు చేసుకోండి. ఎప్పటి నుంచో గట్టిగా చెప్పండి: The … has been … since …",
  },
  words: [
    { en: "water board", te: "వాటర్ బోర్డ్, నీటి సరఫరా ఆఫీసు" },
    { en: "drinking water", te: "తాగే నీళ్ళు, మంచినీళ్ళు" },
    { en: "low pressure", te: "నీళ్ళు సన్నగా రావడం, తక్కువ ప్రెజర్" },
    { en: "muddy", te: "బురదగా" },
    { en: "borewell", te: "బోరు, బోర్‌వెల్" },
  ],
  grammar: ["present-perfect", "present-perfect-continuous", "prepositions"],
  topics: ["neighbours", "offices", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Since Monday, for three days", te: "ఎప్పటి నుంచి, ఎంతకాలంగా" },
      body: {
        en: "A problem that started before and is still going on takes have or has: We haven't had water since Monday. Since goes with the start, for with how long.",
        te: "ఇంతకుముందు మొదలై ఇంకా సాగుతున్న సమస్యకి have లేదా has వాడాలి: We haven't had water since Monday. మొదలైన రోజుకి since, ఎంతకాలం అనడానికి for.",
      },
      bridge: {
        te: ["సోమవారం నుంచి", "మాకు", "నీళ్ళు రాలేదు"],
        en: [
          { text: "We", role: "who" },
          { text: "haven't had", role: "action" },
          { text: "water", role: "what" },
          { text: "since Monday", role: "when" },
        ],
      },
      examples: [
        { en: "We haven't had water since Monday.", te: "సోమవారం నుంచి మాకు నీళ్ళు రాలేదు." },
        { en: "The tap has been dry for three days.", te: "మూడు రోజులుగా కుళాయిలో చుక్క నీళ్ళు రావట్లేదు." },
        { en: "There has been no water since Monday.", te: "సోమవారం నుంచి అసలు నీళ్ళే లేవు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "since, for or has been + -ing?", te: "since, for, has been + -ing ఎప్పుడు?" },
      items: [
        {
          form: "since + the start",
          useFor: { en: "The day or time the problem began.", te: "సమస్య మొదలైన రోజు లేదా టైమ్." },
          example: { en: "We haven't had water since Monday.", te: "సోమవారం నుంచి మాకు నీళ్ళు రాలేదు." },
        },
        {
          form: "for + how long",
          useFor: { en: "The length of time, like three days or a month.", te: "ఎంతకాలం అనేది: మూడు రోజులు, ఒక నెల లాగా." },
          example: { en: "The tap has been dry for three days.", te: "మూడు రోజులుగా కుళాయిలో చుక్క నీళ్ళు రావట్లేదు." },
        },
        {
          form: "have been + -ing",
          useFor: { en: "Something you have been doing again and again, up to now.", te: "ఇప్పటివరకు మళ్ళీ మళ్ళీ చేస్తూనే ఉన్న పని." },
          example: { en: "We have been buying water from a tanker.", te: "అప్పటి నుంచి tanker నీళ్ళు కొనుక్కుంటున్నాం." },
        },
        {
          form: "There has been no …",
          useFor: { en: "Something missing, from a day up to now.", te: "ఒక రోజు నుంచి ఇప్పటివరకు ఏదో లేకపోవడం." },
          example: { en: "There has been no water since Monday.", te: "సోమవారం నుంచి అసలు నీళ్ళే లేవు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "There is no water since Monday.",
      right: "There has been no water since Monday.",
      why: {
        en: "When since shows the start, English needs has been, not is. Telugu says లేవు in the present.",
        te: "since తో మొదలైన రోజు చెప్తే is కాదు, has been కావాలి. తెలుగులో 'లేవు' అని present లోనే అంటాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "We are having a borewell, but it's dry.",
      right: "We have a borewell, but it's dry.",
      why: {
        en: "Have for owning something never takes -ing. Telugu ఉంది has no such change.",
        te: "ఏదైనా మనకి ఉంది అనే అర్థంలో have కి ఎప్పుడూ -ing రాదు. తెలుగు 'ఉంది' లో అలాంటి మార్పు ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "Tell the clerk your taps have had no water from Monday up to today.",
        te: "సోమవారం నుంచి ఈ రోజు వరకు మీ కుళాయిల్లో నీళ్ళు రాలేదని క్లర్క్‌కి చెప్పండి.",
      },
      options: ["We haven't had water since Monday.", "We don't have water since Monday.", "We haven't had water from Monday."],
      answer: 0,
      why: {
        en: "From Monday up to now takes haven't had, and since goes with a starting day. Telugu నుంచి tempts from.",
        te: "సోమవారం నుంచి ఇప్పటివరకు అంటే haven't had; మొదలైన రోజుకి since. తెలుగు 'నుంచి' వల్ల from అనేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Water Board Notice",
      lines: [
        "Notice to the residents of Ward 12",
        "There will be no water supply on Tuesday and Wednesday.",
        "Workers are repairing the main pipe near the bus stand.",
        "Please store enough drinking water before Tuesday.",
        "Free tankers will come to every lane at 7 am and 5 pm.",
        "The supply will start again on Thursday morning.",
        "If the water is muddy after that, please call the ward office.",
        "We are sorry for the inconvenience.",
        "Assistant Engineer, Water Board",
      ],
      questions: [
        {
          prompt: { en: "Why will there be no water?", te: "నీళ్ళు ఎందుకు రావు?" },
          options: ["Workers are repairing the main pipe", "The borewell has gone dry", "The water bill is not paid"],
          answer: 0,
          why: {
            en: "The third line gives the reason: work on the pipe near the bus stand.",
            te: "మూడో లైన్‌లో కారణం ఉంది: బస్ స్టాండ్ దగ్గర పైప్ పని జరుగుతోంది.",
          },
        },
        {
          prompt: { en: "What should residents do before Tuesday?", te: "మంగళవారం లోపు అక్కడ ఉండేవాళ్ళు ఏం చేయాలి?" },
          options: ["Store enough drinking water", "Pay for a tanker", "Call the ward office"],
          answer: 0,
          why: {
            en: "The notice asks everyone to keep water ready before the supply stops.",
            te: "సరఫరా ఆగేలోపు నీళ్ళు పట్టి ఉంచుకోమని నోటీసు అందరినీ అడుగుతోంది.",
          },
        },
        {
          prompt: { en: "When will the free tankers come?", te: "ఉచిత tankers ఎప్పుడు వస్తాయి?" },
          options: ["Twice a day, at 7 and at 5", "Once, at noon", "Only on Thursday"],
          answer: 0,
          why: {
            en: "The tanker line gives two times, one in the morning and one in the evening.",
            te: "tanker లైన్‌లో రెండు టైమ్‌లు ఉన్నాయి: ఒకటి పొద్దున, ఒకటి సాయంత్రం.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "The tap has been dry ___ three days.",
      te: "మూడు రోజులుగా కుళాయిలో చుక్క నీళ్ళు రావట్లేదు.",
      options: ["for", "since", "from"],
      answer: 0,
      why: {
        en: "For goes with a length of time; since goes with a start, like Monday.",
        te: "ఎంతకాలం అనేదానికి for; మొదలైన రోజుకి since, Monday లాగా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "The water from our tap muddy today.",
      wrongIndex: 5,
      fix: "The water from our tap is muddy today.",
      why: {
        en: "Telugu says నీళ్ళు బురదగా with no extra word, but English needs is before a describing word.",
        te: "తెలుగులో 'నీళ్ళు బురదగా' అని ఏ పదమూ లేకుండా అంటాం; ఇంగ్లీష్‌లో describing word ముందు is కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "At the water board office, say your colony has had no water from Monday until now.",
        te: "వాటర్ బోర్డ్ ఆఫీసులో, సోమవారం నుంచి ఇప్పటివరకు మీ కాలనీకి నీళ్ళు రాలేదని చెప్పండి.",
      },
      expected: ["We haven't had water since Monday.", "There has been no water since Monday.", "Our colony hasn't had water since Monday."],
      options: ["We haven't had water since Monday.", "We are not having water since Monday.", "We haven't had water since three days."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The clerk asks how you are managing. Say you have been buying water from a tanker.",
        te: "ఎలా గడుపుతున్నారని క్లర్క్ అడిగారు. tanker నుంచి నీళ్ళు కొనుక్కుంటున్నామని చెప్పండి.",
      },
      expected: ["We've been buying water from a tanker.", "We have been buying water from a tanker.", "We've been buying tanker water."],
      options: ["We've been buying water from a tanker.", "We've been buy water from a tanker.", "We've buying water from a tanker."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the water board office", te: "వాటర్ బోర్డ్ ఆఫీసులో" },
    scene: {
      en: "Your lane has had no water since Monday. You go to the water board office. Venkat, the clerk, is at the desk.",
      te: "సోమవారం నుంచి మీ లేన్‌కి నీళ్ళు రాలేదు. మీరు వాటర్ బోర్డ్ ఆఫీసుకి వెళ్ళారు. క్లర్క్ వెంకట్ గారు డెస్క్ దగ్గర ఉన్నారు.",
    },
    partner: { en: "Venkat (the clerk)", te: "వెంకట్ (క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "report", label: { en: "Saying how long", te: "ఎంతకాలమో చెప్పడం" } },
      { id: "polite", label: { en: "Firm and polite", te: "గట్టిగా, మర్యాదగా" } },
    ],
    turns: [
      {
        partner: "Good morning. Please sit down. What is the problem?",
        te: "నమస్కారం. కూర్చోండి. సమస్య ఏంటి?",
        hint: { en: "Greet him, and say from which day your lane has had no water.", te: "నమస్కారం చెప్పి, ఏ రోజు నుంచి మీ లేన్‌కి నీళ్ళు లేవో చెప్పండి." },
        replies: [
          { say: "Good morning, sir. We haven't had water since Monday.", good: true, skill: "report" },
          { say: "Good morning, sir. We are not having water since Monday.", good: false, skill: "report", fixIt: "duration" },
        ],
      },
      {
        partner: "Which area are you from?",
        te: "మీది ఏ ఏరియా?",
        hint: { en: "Give your lane and colony, and say how many houses have no water.", te: "మీ లేన్, కాలనీ చెప్పి, ఎన్ని ఇళ్ళకి నీళ్ళు లేవో చెప్పండి." },
        replies: [
          { say: "Lane Two, Srinagar Colony. About forty houses have no water.", good: true, skill: "report" },
          { say: "Lane Two, Srinagar Colony. About forty house have no water.", good: false, skill: "report", fixIt: "plural" },
        ],
      },
      {
        partner: "The motor at the pump house has broken down. We are repairing it.",
        te: "పంప్ హౌస్‌లో మోటార్ పాడైపోయింది. రిపేర్ చేస్తున్నాం.",
        hint: { en: "Say how you have been managing, and ask calmly when the supply will start.", te: "ఇన్ని రోజులు ఎలా గడుపుతున్నారో చెప్పి, సరఫరా ఎప్పుడు మొదలవుతుందో ప్రశాంతంగా అడగండి." },
        replies: [
          { say: "We've been buying tanker water. When will the supply start again?", good: true, skill: "report" },
          {
            say: "Every summer the same story! You people never do anything.",
            good: false,
            skill: "polite",
            react: { en: "I understand you're upset. We are working on it day and night.", te: "మీ బాధ అర్థమైంది. రాత్రింబవళ్ళు పని చేస్తున్నాం." },
          },
        ],
      },
      {
        partner: "By Thursday, I hope. I'll send a tanker to your lane tomorrow.",
        te: "గురువారానికల్లా వస్తాయనుకుంటున్నాను. రేపు మీ లేన్‌కి ఒక tanker పంపిస్తాను.",
        hint: { en: "Thank him, and say goodbye politely.", te: "థాంక్స్ చెప్పి, మర్యాదగా బై చెప్పండి." },
        replies: [
          { say: "Thank you, sir. That will be a big help. Goodbye.", good: true, skill: "polite" },
          { say: "Thank you, sir. Tanker is coming tomorrow, no?", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
