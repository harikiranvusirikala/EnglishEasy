import type { Lesson } from "../../types";

/** Week 16, Day 4 (CURRICULUM §4): tests and reports — blood test, X-ray, an empty stomach, When will the report be ready? */
export const day: Lesson = {
  id: "tests-and-reports",
  kind: "lesson",
  title: { en: "Tests and Reports", te: "పరీక్షలు, రిపోర్టులు" },
  subtitle: "blood test, X-ray, empty stomach",
  summary: {
    en: "Learn to get a test done and ask about the report: Please come on an empty stomach. When will the report be ready?",
    te: "టెస్ట్ చేయించుకోవడం, రిపోర్ట్ గురించి అడగడం నేర్చుకుందాం: Please come on an empty stomach. When will the report be ready?",
  },
  seo: {
    title: "Blood Tests and Reports in English for Telugu Speakers",
    description:
      "Understand Please come on an empty stomach and ask When will the report be ready? Simple lessons for Telugu speakers on tests and reports.",
  },
  pattern: [
    { text: "When", role: "when" },
    { text: "will", role: "action" },
    { text: "the report", role: "who" },
    { text: "be ready?", role: "what" },
  ],
  core: [
    { en: "Do I need a blood test?", te: "నాకు బ్లడ్ టెస్ట్ అవసరమా?", extra: ["Am"] },
    { en: "Please come on an empty stomach.", te: "ఖాళీ కడుపుతో రండి.", extra: ["with"] },
    { en: "When will the report be ready?", te: "రిపోర్ట్ ఎప్పుడు రెడీ అవుతుంది?", extra: ["come"] },
    { en: "Where is the X-ray room?", te: "X-ray రూమ్ ఎక్కడ ఉంది?", extra: ["are"] },
    { en: "Don't eat anything after ten tonight.", te: "ఈ రాత్రి పది తర్వాత ఏమీ తినకండి.", extra: ["nothing"] },
    { en: "The report is normal. Don't worry.", te: "రిపోర్ట్ నార్మల్‌గా ఉంది. కంగారు పడకండి.", extra: ["are"] },
    { en: "Can I have a copy of the report?", te: "రిపోర్ట్ కాపీ ఒకటి ఇస్తారా?", extra: ["give"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find any old medical report or bill at home, and read its heading aloud in English.",
    te: "ఇంట్లో ఏదైనా పాత మెడికల్ రిపోర్ట్ లేదా బిల్లు తీసి, దాని పైన ఉన్న హెడింగ్ ఇంగ్లీష్‌లో గట్టిగా చదవండి.",
  },
  words: [
    { en: "blood test", te: "బ్లడ్ టెస్ట్, రక్త పరీక్ష" },
    { en: "X-ray", te: "ఎక్స్-రే" },
    { en: "report", te: "రిపోర్ట్" },
    { en: "fasting", te: "ఏమీ తినకుండా, పరగడుపున" },
    { en: "sample", te: "శాంపిల్ (టెస్ట్ కోసం తీసేది)" },
  ],
  grammar: ["will", "imperatives", "articles"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Getting a test done", te: "టెస్ట్ చేయించుకోవడం" },
      body: {
        en: "The lab tells you what to do: Please come on an empty stomach. Don't eat anything after ten. Ask about the report with will: When will the report be ready?",
        te: "ఏం చేయాలో ల్యాబ్ వాళ్ళు చెప్తారు: Please come on an empty stomach. రిపోర్ట్ గురించి will తో అడగండి: When will the report be ready?",
      },
      bridge: {
        te: ["రిపోర్ట్", "ఎప్పుడు", "రెడీ అవుతుంది?"],
        en: [
          { text: "When", role: "when" },
          { text: "will", role: "action" },
          { text: "the report", role: "who" },
          { text: "be ready?", role: "what" },
        ],
      },
      examples: [
        { en: "Please come on an empty stomach.", te: "ఖాళీ కడుపుతో రండి." },
        { en: "When will the report be ready?", te: "రిపోర్ట్ ఎప్పుడు రెడీ అవుతుంది?" },
        { en: "Do I need a blood test?", te: "నాకు బ్లడ్ టెస్ట్ అవసరమా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "At the lab", te: "ల్యాబ్‌లో" },
      items: [
        {
          form: "Please come …",
          useFor: { en: "The lab tells you how to come.", te: "ఎలా రావాలో ల్యాబ్ వాళ్ళు చెప్పేది." },
          example: { en: "Please come on an empty stomach.", te: "ఖాళీ కడుపుతో రండి." },
        },
        {
          form: "Don't …",
          useFor: { en: "What not to do before the test.", te: "టెస్ట్ ముందు చేయకూడనిది." },
          example: { en: "Don't eat anything after ten tonight.", te: "ఈ రాత్రి పది తర్వాత ఏమీ తినకండి." },
        },
        {
          form: "When will …?",
          useFor: { en: "Asking when something will happen.", te: "ఏదైనా ఎప్పుడు అవుతుందో అడగడానికి." },
          example: { en: "When will the report be ready?", te: "రిపోర్ట్ ఎప్పుడు రెడీ అవుతుంది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Come with empty stomach.",
      right: "Please come on an empty stomach.",
      why: {
        en: "Telugu ఖాళీ కడుపుతో makes us say with, but English says on an empty stomach.",
        te: "'కడుపుతో' లోని 'తో' వల్ల with అంటాం; ఇంగ్లీష్‌లో on an empty stomach అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "When the report will come?",
      right: "When will the report be ready?",
      why: {
        en: "In a question, will comes before the report, not after it.",
        te: "ప్రశ్నలో will ముందు, the report తర్వాత వస్తాయి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Ask the doctor if you need a test of your blood.", te: "బ్లడ్ టెస్ట్ అవసరమా అని డాక్టర్‌ని అడగండి." },
      options: ["Do I need a blood test?", "Do I need blood test?", "I need blood test?"],
      answer: 0,
      why: {
        en: "Telugu has no a, but one test needs a before it in English.",
        te: "తెలుగులో a ఉండదు; ఒక టెస్ట్ అంటే ఇంగ్లీష్‌లో ముందు a వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "City Diagnostics",
      lines: ["Your blood test is on Tuesday at 8:00 am.", "Please come fasting.", "No food after 10 pm on Monday.", "You can drink water."],
      prompt: { en: "What can you have before the test?", te: "టెస్ట్ ముందు మీరు ఏం తీసుకోవచ్చు?" },
      options: ["Only water", "Tea and biscuits", "A light breakfast"],
      answer: 0,
      why: {
        en: "Fasting means no food at all; the message allows only water.",
        te: "fasting అంటే ఏమీ తినకూడదు; మెసేజ్ ప్రకారం నీళ్ళు మాత్రమే తాగొచ్చు.",
      },
      say: "You can drink water.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The lab assistant says: The report will be ready at five. What does it mean?",
        te: "ల్యాబ్ అసిస్టెంట్ The report will be ready at five అన్నారు. అర్థం ఏంటి?",
      },
      options: ["You can collect it at five.", "The test is at five.", "The lab closes at five."],
      answer: 0,
      why: {
        en: "Ready means it is done, so you can take it at five.",
        te: "ready అంటే తయారైపోయింది; ఐదింటికి తీసుకోవచ్చు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Don't eat nothing after ten tonight.",
      wrongIndex: 2,
      fix: "Don't eat anything after ten tonight.",
      why: {
        en: "Don't already says no, so use anything, not nothing.",
        te: "Don't లోనే 'వద్దు' ఉంది; అందుకే anything, nothing కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the lab what time you can collect your report.",
        te: "రిపోర్ట్ ఎప్పుడు తీసుకోవచ్చో ల్యాబ్‌లో అడగండి.",
      },
      expected: ["When will the report be ready?", "When will my report be ready?", "When can I collect the report?"],
      options: ["When will the report be ready?", "When the report will be ready?", "When will the report ready?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You can't find the X-ray room. Ask a nurse.",
        te: "X-ray రూమ్ కనిపించడం లేదు. నర్సుని అడగండి.",
      },
      expected: ["Excuse me, where is the X-ray room?", "Where is the X-ray room?"],
      options: ["Excuse me, where is the X-ray room?", "Excuse me, where the X-ray room is?", "Excuse me, X-ray room where?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Getting a blood test", te: "బ్లడ్ టెస్ట్ చేయించుకోవడం" },
    scene: {
      en: "You are at a lab for a blood test. Salma, the lab assistant, helps you.",
      te: "మీరు బ్లడ్ టెస్ట్ కోసం ల్యాబ్‌కి వచ్చారు. ల్యాబ్ అసిస్టెంట్ సల్మా సహాయం చేస్తున్నారు.",
    },
    partner: { en: "Salma (lab assistant)", te: "సల్మా (ల్యాబ్ అసిస్టెంట్)" },
    skills: [{ id: "test", label: { en: "Tests and reports", te: "టెస్టులు, రిపోర్టులు" } }],
    turns: [
      {
        partner: "Good morning. Which test is it?",
        te: "నమస్కారం. ఏ టెస్ట్ చేయాలి?",
        hint: { en: "Greet her, and say which test the doctor wrote.", te: "నమస్కారం చెప్పి, డాక్టర్ ఏ టెస్ట్ రాశారో చెప్పండి." },
        replies: [
          { say: "Good morning. The doctor wrote a fasting sugar test.", good: true, skill: "test" },
          { say: "Good morning. Fasting sugar test, do the needful.", good: false, skill: "test", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Okay. Did you eat anything this morning?",
        te: "సరే. పొద్దున ఏమైనా తిన్నారా?",
        hint: { en: "Say no, you only had water.", te: "లేదని, నీళ్ళు మాత్రమే తాగారని చెప్పండి." },
        replies: [
          { say: "No, only water. Nothing else.", good: true, skill: "test" },
          { say: "No, I am not eat anything.", good: false, skill: "test" },
        ],
      },
      {
        partner: "Good. Please sit here. I'll take a blood sample.",
        te: "మంచిది. ఇక్కడ కూర్చోండి. బ్లడ్ శాంపిల్ తీసుకుంటాను.",
        hint: { en: "Agree, and say how you feel about needles.", te: "సరే అని, సూది అంటే కొంచెం భయంగా ఉందని చెప్పండి." },
        replies: [
          { say: "Okay. I'm a little nervous.", good: true, skill: "test" },
          {
            say: "Do it properly this time, okay?",
            good: false,
            skill: "test",
            react: { en: "Don't worry. I do this every day.", te: "కంగారు పడకండి. నేను రోజూ ఇదే చేస్తాను." },
          },
        ],
      },
      {
        partner: "All done. The report will be ready by five.",
        te: "అయిపోయింది. ఐదింటికల్లా రిపోర్ట్ రెడీ అవుతుంది.",
        hint: { en: "Thank her, and ask if she can send it on your phone.", te: "థాంక్స్ చెప్పి, వాట్సాప్‌లో కూడా పంపుతారా అని అడగండి." },
        replies: [
          { say: "Thank you. Can I get it on WhatsApp too?", good: true, skill: "test" },
          { say: "Thank you. I can get it on WhatsApp?", good: false, skill: "test", fixIt: "question" },
        ],
      },
    ],
  },
};
