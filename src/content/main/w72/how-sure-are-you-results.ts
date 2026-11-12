import type { Lesson } from "../../types";

/** Week 72, Day 4 (CURRICULUM §5): degrees of certainty — definitely, probably, might, probably won't, definitely won't. */
export const day: Lesson = {
  id: "how-sure-are-you-results",
  kind: "lesson",
  title: { en: "How Sure Are You?", te: "ఎంత ఖచ్చితంగా?" },
  subtitle: "definitely, probably, might, won't",
  summary: {
    en: "Learn to show how sure you are: The lab results will probably come tomorrow. The shop definitely won't open on Sunday.",
    te: "మీకు ఎంత ఖచ్చితంగా తెలుసో చూపించడం నేర్చుకుందాం: The lab results will probably come tomorrow. The shop definitely won't open on Sunday.",
  },
  seo: {
    title: "Definitely, Probably and Might in English for Telugu Speakers",
    description:
      "Say The results will probably come tomorrow and The shop definitely won't open. Lessons for Telugu speakers on saying how sure you are.",
  },
  pattern: [
    { text: "The results", role: "who" },
    { text: "will probably come", role: "action" },
    { text: "tomorrow", role: "when" },
  ],
  core: [
    { en: "The lab results will probably come tomorrow.", te: "ల్యాబ్ రిజల్ట్స్ బహుశా రేపు వస్తాయి.", extra: ["comes"] },
    { en: "The shop definitely won't open on Sunday.", te: "ఆదివారం షాపు ఖచ్చితంగా తెరవరు.", extra: ["in"] },
    { en: "The doctor might call you this evening.", te: "ఈ సాయంత్రం డాక్టర్ గారు మీకు ఫోన్ చేయొచ్చు.", extra: ["calls"] },
    { en: "It probably won't take long.", te: "బహుశా ఎక్కువసేపు పట్టదు.", extra: ["don't"] },
    { en: "Your report will definitely be ready by five.", te: "మీ రిపోర్ట్ ఖచ్చితంగా ఐదింటికల్లా రెడీ అవుతుంది.", extra: ["until"] },
    { en: "Heavy rain is likely tomorrow.", te: "రేపు భారీ వర్షం పడే అవకాశం ఎక్కువ.", extra: ["like"] },
    { en: "Are you certain the clinic opens at nine?", te: "క్లినిక్ తొమ్మిదింటికి తెరుస్తారని మీకు ఖచ్చితంగా తెలుసా?", extra: ["open"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think about tomorrow. Say three sentences: one with definitely, one with probably and one with might.",
    te: "రేపటి గురించి ఆలోచించండి. మూడు వాక్యాలు చెప్పండి: ఒకటి definitely తో, ఒకటి probably తో, ఒకటి might తో.",
  },
  words: [
    { en: "certain", te: "ఖచ్చితంగా తెలిసిన" },
    { en: "likely", te: "జరిగే అవకాశం ఎక్కువ" },
    { en: "probably won't", te: "బహుశా … కాదు, బహుశా జరగదు" },
    { en: "definitely won't", te: "ఖచ్చితంగా జరగదు, అస్సలు జరగదు" },
    { en: "results", te: "ఫలితాలు, రిజల్ట్స్" },
  ],
  grammar: ["will", "might-may", "present-simple"],
  topics: ["health", "doctor", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "From sure to not sure", te: "ఖచ్చితం నుంచి అనుమానం దాకా" },
      body: {
        en: "One word shows how sure you are: definitely, probably, might, probably won't, definitely won't. Choose the one that matches what you know.",
        te: "ఎంత ఖచ్చితమో ఒక్క మాటతో చెప్పొచ్చు: definitely, probably, might, probably won't, definitely won't. మీకు తెలిసినదాన్ని బట్టి ఎంచుకోండి.",
      },
      bridge: {
        te: ["ల్యాబ్ రిజల్ట్స్", "బహుశా", "రేపు", "వస్తాయి"],
        en: [
          { text: "The lab results", role: "who" },
          { text: "will probably come", role: "action" },
          { text: "tomorrow", role: "when" },
        ],
      },
      examples: [
        { en: "The lab results will probably come tomorrow.", te: "ల్యాబ్ రిజల్ట్స్ బహుశా రేపు వస్తాయి." },
        { en: "The shop definitely won't open on Sunday.", te: "ఆదివారం షాపు ఖచ్చితంగా తెరవరు." },
        { en: "The doctor might call you this evening.", te: "ఈ సాయంత్రం డాక్టర్ గారు మీకు ఫోన్ చేయొచ్చు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How sure?", te: "ఎంత ఖచ్చితం?" },
      items: [
        {
          form: "will definitely",
          useFor: { en: "Sure: yes.", te: "ఖచ్చితంగా అవును." },
          example: { en: "The lab will definitely open at seven.", te: "ల్యాబ్ ఖచ్చితంగా ఏడింటికి తెరుస్తారు." },
        },
        {
          form: "will probably",
          useFor: { en: "Almost sure: yes.", te: "దాదాపు అవును." },
          example: { en: "The doctor will probably see you at ten.", te: "డాక్టర్ గారు బహుశా పదింటికి మిమ్మల్ని చూస్తారు." },
        },
        {
          form: "might",
          useFor: { en: "Maybe yes, maybe no.", te: "అవ్వొచ్చు, అవ్వకపోవచ్చు." },
          example: { en: "The report might come today.", te: "రిపోర్ట్ ఈ రోజు రావచ్చు." },
        },
        {
          form: "probably won't, definitely won't",
          useFor: { en: "Almost sure, or sure: no.", te: "దాదాపు లేదు, లేదా ఖచ్చితంగా లేదు." },
          example: { en: "It probably won't rain today.", te: "ఈ రోజు బహుశా వర్షం పడదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "The report will come in two day.",
      right: "The report will come in two days.",
      why: {
        en: "After two, day takes s; Telugu రెండు రోజుల్లో also shows more than one.",
        te: "రెండు తర్వాత day కి s వస్తుంది; తెలుగులో కూడా 'రోజు' కాదు, 'రోజుల్లో' అంటాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The shop won't definitely open on Sunday.",
      right: "The shop definitely won't open on Sunday.",
      why: {
        en: "Definitely goes before won't; after it, the meaning becomes not sure.",
        te: "definitely, won't కి ముందు రావాలి; తర్వాత పెడితే 'ఖచ్చితం కాదు' అనే అర్థం వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the lab assistant when the report will be ready.", te: "రిపోర్ట్ ఎప్పుడు రెడీ అవుతుందో ల్యాబ్ అసిస్టెంట్‌ని అడగండి." },
      options: ["When will the report be ready?", "When the report will be ready?", "When will be the report ready?"],
      answer: 0,
      why: {
        en: "In a question, will comes before the report, and be stays next to ready.",
        te: "ప్రశ్నలో will, the report కంటే ముందు వస్తుంది; be, ready పక్కనే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The lab never opens on Sundays, so it ___ open this Sunday.",
      te: "ల్యాబ్ ఆదివారాలు ఎప్పుడూ తెరవరు, కాబట్టి ఈ ఆదివారం ఖచ్చితంగా తెరవరు.",
      options: ["definitely won't", "might", "will probably"],
      answer: 0,
      why: {
        en: "Never means every Sunday, so you are sure the answer is no.",
        te: "never అంటే ప్రతి ఆదివారం మూసే ఉంటుంది; అందుకే తెరవరని ఖచ్చితంగా చెప్పొచ్చు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Sri Sai Diagnostics",
      lines: [
        "Dear patients,",
        "Blood test reports will usually be ready by 6 pm on the same day.",
        "Some special tests may take two or three days.",
        "Reports might be late on festival days.",
        "On Sundays, the lab will be open only till 1 pm.",
        "The lab will definitely stay closed on Ugadi.",
        "You can also get your report on WhatsApp.",
        "Please bring your bill when you collect your report.",
      ],
      questions: [
        {
          prompt: { en: "When are blood test reports usually ready?", te: "blood test రిపోర్ట్స్ మామూలుగా ఎప్పుడు రెడీ అవుతాయి?" },
          options: ["By 6 pm the same day", "After two or three days", "Only on Sundays"],
          answer: 0,
          why: {
            en: "The second line gives the time for blood tests: the same evening.",
            te: "రెండో లైన్‌లో blood test టైమ్ ఉంది: అదే రోజు సాయంత్రం.",
          },
        },
        {
          prompt: { en: "What might happen on festival days?", te: "పండగ రోజుల్లో ఏం జరగొచ్చు?" },
          options: ["Reports might be late", "The lab will open early", "Reports will be free"],
          answer: 0,
          why: {
            en: "The fourth line uses might, so a delay is possible but not sure.",
            te: "నాలుగో లైన్‌లో might ఉంది; అంటే ఆలస్యం అవ్వొచ్చు, కానీ ఖచ్చితం కాదు.",
          },
        },
        {
          prompt: { en: "Will the lab open on Ugadi?", te: "ఉగాది రోజు ల్యాబ్ తెరుస్తారా?" },
          options: ["No, definitely not", "Yes, till 1 pm", "Maybe in the evening"],
          answer: 0,
          why: {
            en: "The sixth line says definitely closed, so you can be sure about that day.",
            te: "ఆరో లైన్‌లో definitely closed అని ఉంది; ఆ రోజు గురించి ఖచ్చితంగా చెప్పొచ్చు.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The lab usually open at seven in the morning.",
      wrongIndex: 3,
      fix: "The lab usually opens at seven in the morning.",
      why: {
        en: "One lab is like he or she, so the verb takes s.",
        te: "ఒక్క ల్యాబ్ he, she లాంటిదే; అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your neighbour asks if it will rain today. The sky is clear and sunny. Answer.",
        te: "ఈ రోజు వర్షం పడుతుందా అని పక్కింటివారు అడుగుతున్నారు. ఆకాశం నిర్మలంగా, ఎండగా ఉంది. జవాబు చెప్పండి.",
      },
      expected: ["It probably won't rain today.", "No, it probably won't rain.", "I don't think it will rain today."],
      options: ["It probably won't rain today.", "It won't probably rain today.", "It probably won't rains today."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A friend asks when your results will come. The lab said two or three days. Answer.",
        te: "మీ రిజల్ట్స్ ఎప్పుడు వస్తాయని స్నేహితులు అడుగుతున్నారు. రెండు మూడు రోజులు పడుతుందని ల్యాబ్‌లో చెప్పారు. జవాబు చెప్పండి.",
      },
      expected: ["They'll probably come in two or three days.", "Probably in two or three days.", "The results will probably come in two or three days."],
      options: ["They'll probably come in two or three days.", "They'll probably come in two or three day.", "They probably will coming in two or three days."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the lab counter", te: "ల్యాబ్ కౌంటర్ దగ్గర" },
    scene: {
      en: "You gave a blood sample yesterday. Now you ask Grace at the lab counter about your reports.",
      te: "నిన్న మీరు blood sample ఇచ్చారు. ఇప్పుడు ల్యాబ్ కౌంటర్ దగ్గర గ్రేస్ గారిని మీ రిపోర్ట్స్ గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Grace (lab assistant)", te: "గ్రేస్ (ల్యాబ్ అసిస్టెంట్)" },
    skills: [
      { id: "sure", label: { en: "Asking how sure", te: "ఎంత ఖచ్చితమో అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "నమస్తే. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her, and ask about your blood test report.", te: "నమస్తే చెప్పి, మీ blood test రిపోర్ట్ గురించి అడగండి." },
        replies: [
          { say: "Good morning. Is my blood test report ready?", good: true, skill: "polite" },
          {
            say: "My report! Quickly, I have no time.",
            good: false,
            skill: "polite",
            react: { en: "Please be patient. I'll check for you.", te: "కొంచెం ఓపిక పట్టండి. నేను చూస్తాను." },
          },
        ],
      },
      {
        partner: "Your sugar report is ready. The thyroid report will probably come this evening.",
        te: "మీ షుగర్ రిపోర్ట్ రెడీ. థైరాయిడ్ రిపోర్ట్ బహుశా ఈ సాయంత్రం వస్తుంది.",
        hint: { en: "Check how certain she is about today.", te: "ఈ రోజే వస్తుందని ఆవిడకి ఎంత ఖచ్చితంగా తెలుసో అడగండి." },
        replies: [
          { say: "Are you sure it will come today?", good: true, skill: "sure" },
          { say: "Will it definitely come today?", good: true, skill: "sure" },
          { say: "You are sure it will come today?", good: false, skill: "sure", fixIt: "question" },
        ],
      },
      {
        partner: "Probably, but it might be late. The machine is very busy today.",
        te: "బహుశా వస్తుంది, కానీ ఆలస్యం కావచ్చు. ఈ రోజు మెషిన్ మీద చాలా పని ఉంది.",
        hint: { en: "Ask politely if they can send it to your phone on WhatsApp.", te: "WhatsApp లో మీ ఫోన్‌కి పంపిస్తారా అని మర్యాదగా అడగండి." },
        replies: [
          { say: "Can you send it on WhatsApp, please?", good: true, skill: "polite" },
          { say: "Can you send it in WhatsApp, please?", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, definitely. We'll send it by eight tonight.",
        te: "తప్పకుండా. ఈ రాత్రి ఎనిమిదింటికల్లా పంపిస్తాం.",
        hint: { en: "Thank her, and say goodbye.", te: "థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you so much. Have a nice day!", good: true, skill: "polite" },
          { say: "Thank you so much. Have nice day!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
