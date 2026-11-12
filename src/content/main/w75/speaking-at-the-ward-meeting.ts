import type { Lesson } from "../../types";

/** Week 75, Day 5 (CURRICULUM §5): stating a problem and a request to an official, firm without anger — We request you to send someone this week. */
export const day: Lesson = {
  id: "speaking-at-the-ward-meeting",
  kind: "lesson",
  title: { en: "Speaking at the Ward Meeting", te: "వార్డ్ మీటింగ్‌లో మాట్లాడటం" },
  subtitle: "a problem and a request, firm without anger",
  summary: {
    en: "Learn to raise a problem with an official, firmly and calmly: This problem has been going on for months. We request you to send someone this week.",
    te: "అధికారి ముందు సమస్యని గట్టిగా, ప్రశాంతంగా చెప్పడం నేర్చుకుందాం: This problem has been going on for months. We request you to send someone this week.",
  },
  seo: {
    title: "Speaking at a Ward Meeting in English for Telugu Speakers",
    description:
      "Say This problem has been going on for months and We request you to send someone this week. Firm, polite English for Telugu speakers.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "request you to send", role: "action" },
    { text: "someone", role: "what" },
    { text: "this week", role: "when" },
  ],
  core: [
    { en: "Sir, this problem has been going on for months.", te: "సార్, ఈ సమస్య నెలల తరబడి సాగుతోంది.", extra: ["since"] },
    { en: "We request you to send someone this week.", te: "ఈ వారమే ఎవరినైనా పంపించమని మిమ్మల్ని కోరుతున్నాం.", extra: ["for"] },
    { en: "Thank you for giving me a chance to speak.", te: "మాట్లాడటానికి అవకాశం ఇచ్చినందుకు ధన్యవాదాలు.", extra: ["give"] },
    { en: "I live in Lane Three, near the water tank.", te: "నేను వాటర్ ట్యాంక్ దగ్గర, మూడో లేన్‌లో ఉంటాను.", extra: ["am"] },
    { en: "We have complained three times, but nothing has been done.", te: "మూడుసార్లు ఫిర్యాదు చేశాం, కానీ ఏమీ చేయలేదు.", extra: ["complain"] },
    { en: "Elders have to carry water up the stairs every day.", te: "పెద్దవాళ్ళు రోజూ మెట్లు ఎక్కి నీళ్ళు మోయాల్సి వస్తోంది.", extra: ["has"] },
    { en: "Could you please take action before the summer?", te: "ఎండాకాలం రాకముందే కొంచెం చర్య తీసుకుంటారా?", extra: ["takes"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Think of one problem in your area. Say it aloud in three calm sentences: the problem, how long, and your request.",
    te: "మీ ఏరియాలో ఒక సమస్య గుర్తు చేసుకోండి. మూడు ప్రశాంతమైన వాక్యాల్లో గట్టిగా చెప్పండి: సమస్య, ఎంతకాలంగా, మీ అభ్యర్థన.",
  },
  words: [
    { en: "corporator", te: "కార్పొరేటర్" },
    { en: "ward meeting", te: "వార్డ్ మీటింగ్, వార్డు సభ" },
    { en: "we request", te: "మేము కోరుతున్నాం" },
    { en: "going on", te: "సాగుతూ ఉండటం, జరుగుతూ ఉండటం" },
    { en: "take action", te: "చర్య తీసుకోవడం" },
  ],
  grammar: ["present-perfect-continuous", "politeness-softening", "passive-voice"],
  topics: ["neighbours", "offices", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Speaking to an official", te: "అధికారితో మాట్లాడటం" },
      body: {
        en: "Say where you live, the problem, how long it has been going on, and one clear request. Keep your voice firm and calm: We request you to send someone this week.",
        te: "మీరు ఎక్కడ ఉంటారో, సమస్య, ఎంతకాలంగా సాగుతోందో, ఒక స్పష్టమైన అభ్యర్థన చెప్పండి. గొంతు గట్టిగా, ప్రశాంతంగా ఉంచండి: We request you to send someone this week.",
      },
      bridge: {
        te: ["ఈ వారమే", "ఎవరినైనా", "పంపించమని కోరుతున్నాం"],
        en: [
          { text: "We", role: "who" },
          { text: "request you to send", role: "action" },
          { text: "someone", role: "what" },
          { text: "this week", role: "when" },
        ],
      },
      examples: [
        { en: "Sir, this problem has been going on for months.", te: "సార్, ఈ సమస్య నెలల తరబడి సాగుతోంది." },
        { en: "We have complained three times, but nothing has been done.", te: "మూడుసార్లు ఫిర్యాదు చేశాం, కానీ ఏమీ చేయలేదు." },
        { en: "We request you to send someone this week.", te: "ఈ వారమే ఎవరినైనా పంపించమని మిమ్మల్ని కోరుతున్నాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Firm, not angry", te: "గట్టిగా, కానీ కోపం లేకుండా" },
      items: [
        {
          form: "This problem has been going on for …",
          useFor: { en: "Say how long, calmly.", te: "ఎంతకాలంగానో ప్రశాంతంగా చెప్పడానికి." },
          example: { en: "Sir, this problem has been going on for months.", te: "సార్, ఈ సమస్య నెలల తరబడి సాగుతోంది." },
        },
        {
          form: "We have complained … times",
          useFor: { en: "Give facts, not blame.", te: "నింద కాదు, వాస్తవాలు చెప్పడానికి." },
          example: { en: "We have complained three times, but nothing has been done.", te: "మూడుసార్లు ఫిర్యాదు చేశాం, కానీ ఏమీ చేయలేదు." },
        },
        {
          form: "We request you to …",
          useFor: { en: "A formal request at a meeting.", te: "మీటింగ్‌లో అధికారికంగా అడగడానికి." },
          example: { en: "We request you to send someone this week.", te: "ఈ వారమే ఎవరినైనా పంపించమని మిమ్మల్ని కోరుతున్నాం." },
        },
        {
          form: "Could you please …?",
          useFor: { en: "A softer request, face to face.", te: "ఎదురుగా ఉన్నప్పుడు కొంచెం మెత్తగా అడగడానికి." },
          example: { en: "Could you please take action before the summer?", te: "ఎండాకాలం రాకముందే కొంచెం చర్య తీసుకుంటారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Myself Kiran, from Lane Three.",
      right: "I'm Kiran, from Lane Three.",
      why: {
        en: "Myself is not used to give your name. Telugu నేను … feels like myself, but English says I'm.",
        te: "పేరు చెప్పడానికి myself వాడరు. తెలుగు 'నేను …' myself లాగా అనిపిస్తుంది, కానీ ఇంగ్లీష్‌లో I'm అంటారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You people are doing nothing!",
      right: "Nothing has been done so far.",
      why: {
        en: "Blaming sounds angry and stops the talk. Giving the fact with has been is firm and still polite.",
        te: "నింద వేస్తే కోపంగా వినిపిస్తుంది, మాట ఆగిపోతుంది. has been తో వాస్తవం చెప్తే గట్టిగా ఉంటుంది, మర్యాదగానూ ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "Tell the corporator the problem started months ago and is still there.",
        te: "సమస్య నెలల క్రితం మొదలై ఇప్పటికీ ఉందని కార్పొరేటర్‌కి చెప్పండి.",
      },
      options: ["This problem has been going on for months.", "This problem is going on for months.", "This problem has been going on since months."],
      answer: 0,
      why: {
        en: "A problem still going on takes has been with -ing, and for comes before a length of time.",
        te: "ఇంకా సాగుతున్న సమస్యకి has been + -ing; ఎంతకాలం అనేదాని ముందు for వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The tanker ___ only once a week now.",
      te: "ఇప్పుడు tanker వారానికి ఒక్కసారే వస్తోంది.",
      options: ["comes", "come", "coming"],
      answer: 0,
      why: {
        en: "One tanker, like he or she, takes s for a habit. Telugu verbs have no such ending.",
        te: "ఒక్క tanker (he, she లాగా), అలవాటుగా జరిగే పనికి verb కి s వస్తుంది. తెలుగులో ఇలాంటి చివర ఉండదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "At the meeting, ask the corporator firmly but politely to act this week.",
        te: "మీటింగ్‌లో, ఈ వారమే చర్య తీసుకోమని కార్పొరేటర్‌ని గట్టిగా, కానీ మర్యాదగా అడగండి.",
      },
      options: ["We request you to send someone this week.", "Send someone this week, otherwise see.", "We request you for sending someone this week."],
      answer: 0,
      why: {
        en: "Request you to is the formal pattern. A threat sounds angry, and for sending is wrong English.",
        te: "request you to అనేది అధికారికంగా అడిగే పద్ధతి. బెదిరింపు కోపంగా వినిపిస్తుంది; for sending తప్పు ఇంగ్లీష్.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "Many elders not able to carry water upstairs.",
      wrongIndex: 2,
      fix: "Many elders are not able to carry water upstairs.",
      why: {
        en: "Telugu మోయలేకపోతున్నారు has no separate be word, but English needs are before not able.",
        te: "తెలుగు 'మోయలేకపోతున్నారు' లో వేరే పదం ఉండదు; ఇంగ్లీష్‌లో not able ముందు are కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Start your turn at the meeting. Give your name, Sai, and say you are from Lane Three.",
        te: "మీటింగ్‌లో మీ వంతు మొదలుపెట్టండి. మీ పేరు సాయి అని, మూడో లేన్ నుంచి వచ్చారని చెప్పండి.",
      },
      expected: ["I'm Sai, from Lane Three.", "My name is Sai. I live in Lane Three.", "I'm Sai. I live in Lane Three."],
      options: ["I'm Sai, from Lane Three.", "Myself Sai, from Lane Three.", "Hello, I Sai, from Lane Three."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The corporator says the office will look into it. Ask politely for action before the summer.",
        te: "ఆఫీసువాళ్ళు చూస్తారని కార్పొరేటర్ అన్నారు. ఎండాకాలం రాకముందే చర్య తీసుకోమని మర్యాదగా అడగండి.",
      },
      expected: ["Could you please take action before the summer?", "Please take action before the summer.", "Could you please do something before the summer?"],
      options: ["Could you please take action before the summer?", "Could you please taking action before the summer?", "You must act now. That's all."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the ward meeting", te: "వార్డ్ మీటింగ్‌లో" },
    scene: {
      en: "It's the monthly ward meeting at the community hall. Ramesh, the corporator, calls you up to speak about the water problem.",
      te: "కమ్యూనిటీ హాల్‌లో నెలవారీ వార్డ్ మీటింగ్ జరుగుతోంది. కార్పొరేటర్ రమేష్ గారు నీళ్ళ సమస్య గురించి మాట్లాడమని మిమ్మల్ని పిలిచారు.",
    },
    partner: { en: "Ramesh (the corporator)", te: "రమేష్ (కార్పొరేటర్)" },
    voice: "b",
    skills: [
      { id: "raise", label: { en: "Raising a problem", te: "సమస్య చెప్పడం" } },
      { id: "calm", label: { en: "Firm and calm", te: "గట్టిగా, ప్రశాంతంగా" } },
    ],
    turns: [
      {
        partner: "Next, please. Yes, tell me your problem.",
        te: "తర్వాతి వారు రండి. చెప్పండి, మీ సమస్య ఏంటి?",
        hint: { en: "Thank him for the chance to speak, and say where you live.", te: "మాట్లాడే అవకాశం ఇచ్చినందుకు థాంక్స్ చెప్పి, మీరు ఎక్కడ ఉంటారో చెప్పండి." },
        replies: [
          { say: "Thank you for giving me a chance to speak. I live in Lane Three.", good: true, skill: "raise" },
          { say: "Thank you, sir. Myself Kiran, from Lane Three.", good: false, skill: "raise", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Okay. What is the problem in Lane Three?",
        te: "సరే. మూడో లేన్‌లో సమస్య ఏంటి?",
        hint: { en: "Explain the water problem, and how long it has lasted.", te: "నీళ్ళ సమస్య, అది ఎంతకాలంగా ఉందో చెప్పండి." },
        replies: [
          { say: "Water comes only every other day. This has been going on for months.", good: true, skill: "raise" },
          { say: "Water comes only every other day. This is going on for months.", good: false, skill: "raise", fixIt: "duration" },
        ],
      },
      {
        partner: "I know. The new pipeline work is still pending.",
        te: "నాకు తెలుసు. కొత్త పైప్‌లైన్ పని ఇంకా pending లో ఉంది.",
        hint: { en: "Say you understand, but give the facts about your complaints, without blaming him.", te: "అర్థమైందని చెప్పి, మీరు చేసిన ఫిర్యాదుల గురించి వాస్తవాలు చెప్పండి; ఆయన్ని నిందించకండి." },
        replies: [
          { say: "We understand, sir. But we have complained three times, and nothing has been done.", good: true, skill: "calm" },
          {
            say: "Pending, pending! You people only talk, sir.",
            good: false,
            skill: "calm",
            react: { en: "I understand your anger. Please let me finish.", te: "మీ కోపం అర్థమైంది. నన్ను కొంచెం పూర్తి చేయనివ్వండి." },
          },
        ],
      },
      {
        partner: "I'll send the engineer to Lane Three on Friday.",
        te: "శుక్రవారం మూడో లేన్‌కి ఇంజనీర్‌ని పంపిస్తాను.",
        hint: { en: "Thank him, and firmly ask him to keep his word.", te: "థాంక్స్ చెప్పి, ఇచ్చిన మాట నిలబెట్టుకోమని గట్టిగా కోరండి." },
        replies: [
          { say: "Thank you, sir. We request you to make sure he comes on Friday.", good: true, skill: "raise" },
          { say: "Thank you, sir. We'll wait for him on Friday.", good: true, skill: "calm" },
          { say: "Thank you, sir. We request you to make sure he come on Friday.", good: false, skill: "raise", fixIt: "he-she-s" },
        ],
      },
    ],
  },
};
