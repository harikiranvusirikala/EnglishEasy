import type { Lesson } from "../../types";

/** Week 27, Day 4 (CURRICULUM §4): documents — the original, photocopies, ID proof and address proof. */
export const day: Lesson = {
  id: "two-photocopies-please",
  kind: "lesson",
  title: { en: "Two Photocopies, Please", te: "రెండు జిరాక్స్ కాపీలు" },
  subtitle: "original, photocopy, proof",
  summary: {
    en: "Learn to talk about your documents: Do I need the original? Here are two photocopies.",
    te: "మీ డాక్యుమెంట్ల గురించి మాట్లాడటం నేర్చుకుందాం: Do I need the original? Here are two photocopies.",
  },
  seo: {
    title: "Documents and Photocopies in English for Telugu Speakers",
    description:
      "Ask Do I need the original? and say Here are two photocopies. Simple lessons for Telugu speakers on bringing the right documents to an office.",
  },
  pattern: [
    { text: "Do", role: "action" },
    { text: "I", role: "who" },
    { text: "need", role: "action" },
    { text: "the original?", role: "what" },
  ],
  core: [
    { en: "Do I need the original?", te: "ఒరిజినల్ కావాలా?", extra: ["a"] },
    { en: "Here are two photocopies.", te: "ఇవిగోండి రెండు జిరాక్స్ కాపీలు.", extra: ["is"] },
    { en: "I have my Aadhaar card with me.", te: "నా ఆధార్ కార్డు నా దగ్గర ఉంది.", extra: ["having"] },
    { en: "Which documents do I need?", te: "ఏ ఏ డాక్యుమెంట్లు కావాలి?", extra: ["document"] },
    { en: "Two photocopies of my ration card, please.", te: "నా రేషన్ కార్డు రెండు జిరాక్స్ కాపీలు ఇవ్వండి.", extra: ["photocopy"] },
    { en: "Is a gas bill okay for address proof?", te: "అడ్రస్ ప్రూఫ్‌కి గ్యాస్ బిల్లు సరిపోతుందా?", extra: ["are"] },
    { en: "Can I have the original back, please?", te: "ఒరిజినల్ తిరిగి ఇస్తారా?", extra: ["return"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Put your ID card and one photocopy of it in a file, ready for your next office visit.",
    te: "మీ ID కార్డు, దాని ఒక జిరాక్స్ కాపీ ఒక ఫైల్‌లో పెట్టుకోండి, తర్వాతి ఆఫీసు పనికి సిద్ధంగా.",
  },
  words: [
    { en: "photocopy", te: "జిరాక్స్ కాపీ" },
    { en: "original", te: "ఒరిజినల్, అసలు కాగితం" },
    { en: "documents", te: "డాక్యుమెంట్లు, పత్రాలు" },
    { en: "address proof", te: "అడ్రస్ ప్రూఫ్" },
    { en: "ID proof", te: "గుర్తింపు కార్డు, ID ప్రూఫ్" },
  ],
  grammar: ["articles", "plurals-countable", "have-has-possessives"],
  topics: ["offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Originals and copies", te: "ఒరిజినల్, కాపీ" },
      body: {
        en: "Offices keep a photocopy and only look at the original. Ask before you go: Which documents do I need? Do I need the original? Many of us say xerox; photocopy is understood everywhere.",
        te: "ఆఫీసుల్లో జిరాక్స్ కాపీ ఉంచుకుంటారు, ఒరిజినల్ చూసి ఇచ్చేస్తారు. వెళ్ళే ముందే అడగండి: Which documents do I need? Do I need the original? మనం xerox అంటాం; photocopy అంటే అందరికీ అర్థమవుతుంది.",
      },
      bridge: {
        te: ["ఒరిజినల్", "కావాలా?"],
        en: [
          { text: "Do", role: "action" },
          { text: "I", role: "who" },
          { text: "need", role: "action" },
          { text: "the original?", role: "what" },
        ],
      },
      examples: [
        { en: "Which documents do I need?", te: "ఏ ఏ డాక్యుమెంట్లు కావాలి?" },
        { en: "Do I need the original?", te: "ఒరిజినల్ కావాలా?" },
        { en: "Two photocopies of my ration card, please.", te: "నా రేషన్ కార్డు రెండు జిరాక్స్ కాపీలు ఇవ్వండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "ID proof or address proof?", te: "ID ప్రూఫ్ ఆ, అడ్రస్ ప్రూఫ్ ఆ?" },
      items: [
        {
          form: "ID proof",
          useFor: { en: "Shows who you are: Aadhaar, voter ID, PAN card.", te: "మీరు ఎవరో చూపిస్తుంది: ఆధార్, ఓటర్ ID, పాన్ కార్డు." },
          example: { en: "Here is my voter ID for ID proof.", te: "ID ప్రూఫ్ కోసం ఇదిగోండి నా ఓటర్ ID." },
        },
        {
          form: "address proof",
          useFor: { en: "Shows where you live: a gas bill, a ration card.", te: "మీరు ఎక్కడ ఉంటారో చూపిస్తుంది: గ్యాస్ బిల్లు, రేషన్ కార్డు." },
          example: { en: "Is a gas bill okay for address proof?", te: "అడ్రస్ ప్రూఫ్‌కి గ్యాస్ బిల్లు సరిపోతుందా?" },
        },
        {
          form: "the original",
          useFor: { en: "The real paper: they check it and give it back.", te: "అసలు కాగితం: చూసి తిరిగి ఇచ్చేస్తారు." },
          example: { en: "Can I have the original back, please?", te: "ఒరిజినల్ తిరిగి ఇస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am having my Aadhaar card.",
      right: "I have my Aadhaar card.",
      why: {
        en: "Have meaning own never takes -ing, though Telugu ఉంది feels like now.",
        te: "'నా దగ్గర ఉంది' అనే అర్థంలో have కి -ing రాదు; I am having అనకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Give two xerox.",
      right: "Two photocopies, please.",
      why: {
        en: "Xerox is a company name, and Give sounds like an order; say photocopies, and add please.",
        te: "Xerox ఒక కంపెనీ పేరు, Give అంటే ఆర్డర్ లా ఉంటుంది; photocopies అని, please చేర్చి అడగండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: { en: "You give the clerk two copies. What do you say?", te: "క్లర్క్‌కి రెండు కాపీలు ఇస్తున్నారు. ఏమంటారు?" },
      options: ["Here are two photocopies.", "Here are two photocopy.", "Here is two photocopies."],
      answer: 0,
      why: {
        en: "Two means more than one, so use are, and photocopy changes to photocopies.",
        te: "రెండు అంటే ఒకటి కంటే ఎక్కువ: are వాడాలి, photocopy కాదు photocopies.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Is a gas bill okay ___ address proof?",
      te: "అడ్రస్ ప్రూఫ్‌కి గ్యాస్ బిల్లు సరిపోతుందా?",
      options: ["for", "to", "in"],
      answer: 0,
      why: {
        en: "Okay for a use takes for; the Telugu కి here becomes for.",
        te: "'అడ్రస్ ప్రూఫ్‌కి' లోని 'కి' ఇక్కడ for అవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The clerk says: Leave the photocopy, and show me the original. What do you do?", te: "క్లర్క్ 'Leave the photocopy, and show me the original' అన్నారు. మీరు ఏం చేయాలి?" },
      options: ["Leave the copy, and show the real paper.", "Leave the real paper, and keep the copy.", "Show only the copy, and go."],
      answer: 0,
      why: {
        en: "Offices keep the photocopy and only look at the original.",
        te: "జిరాక్స్ కాపీ వాళ్ళు ఉంచుకుంటారు; ఒరిజినల్ చూసి మీకే ఇచ్చేస్తారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Can I have original back, please?",
      wrongIndex: 3,
      fix: "Can I have the original back, please?",
      why: {
        en: "We both know which original, so it needs the; Telugu has no such word.",
        te: "మనం మాట్లాడుతున్న ఆ ఒరిజినలే, అందుకే the కావాలి; తెలుగులో the ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "The clerk asks if you have your Aadhaar card. You do.",
        te: "మీ దగ్గర ఆధార్ కార్డు ఉందా అని క్లర్క్ అడుగుతున్నారు. ఉంది.",
      },
      expected: ["Yes, I have my Aadhaar card.", "Yes, I have it with me.", "Yes, I have it."],
      options: ["Yes, I have my Aadhaar card.", "Yes, I am having my Aadhaar card.", "Yes, I having Aadhaar card."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask the clerk which documents you need.",
        te: "ఏ ఏ డాక్యుమెంట్లు కావాలో క్లర్క్‌ని అడగండి.",
      },
      expected: ["Which documents do I need?", "Which documents do I need, please?"],
      options: ["Which documents do I need?", "Which documents I need?", "Which document do I needs?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your bus pass documents", te: "బస్ పాస్ డాక్యుమెంట్లు" },
    scene: {
      en: "You are applying for an RTC bus pass. Radha, the clerk, checks your documents.",
      te: "మీరు RTC బస్ పాస్ కోసం అప్లై చేస్తున్నారు. క్లర్క్ రాధ మీ డాక్యుమెంట్లు చూస్తున్నారు.",
    },
    partner: { en: "Radha (clerk)", te: "రాధ (క్లర్క్)" },
    skills: [{ id: "docs", label: { en: "Documents", te: "డాక్యుమెంట్లు" } }],
    turns: [
      {
        partner: "Good morning. Did you bring your documents?",
        te: "నమస్కారం. మీ డాక్యుమెంట్లు తెచ్చారా?",
        hint: { en: "Say yes, and hand over your two copies.", te: "అవునని చెప్పి, మీ రెండు కాపీలు ఇవ్వండి." },
        replies: [
          { say: "Yes. Here are two photocopies.", good: true, skill: "docs" },
          { say: "Yes. Here is two photocopy.", good: false, skill: "docs", fixIt: "plural" },
        ],
      },
      {
        partner: "Thank you. Do you have the original Aadhaar?",
        te: "థాంక్యూ. ఒరిజినల్ ఆధార్ ఉందా?",
        hint: { en: "Say yes, you have it with you.", te: "అవును, మీ దగ్గర ఉందని చెప్పండి." },
        replies: [
          { say: "Yes, I have it with me.", good: true, skill: "docs" },
          { say: "Yes, I am having it with me.", good: false, skill: "docs", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Good. I also need address proof.",
        te: "సరే. అడ్రస్ ప్రూఫ్ కూడా కావాలి.",
        hint: { en: "Ask if your gas bill will do.", te: "మీ గ్యాస్ బిల్లు సరిపోతుందా అని అడగండి." },
        replies: [
          { say: "Is a gas bill okay?", good: true, skill: "docs" },
          { say: "Gas bill is okay?", good: false, skill: "docs", fixIt: "question" },
          {
            say: "Nobody told me that before!",
            good: false,
            skill: "docs",
            react: { en: "Sorry, it is on the notice board.", te: "సారీ అండీ, నోటీస్ బోర్డ్ మీద రాసి ఉంది." },
          },
        ],
      },
      {
        partner: "Yes, that is fine. Here is your original.",
        te: "సరే, అది సరిపోతుంది. ఇదిగోండి మీ ఒరిజినల్.",
        hint: { en: "Take it, and thank her.", te: "తీసుకుని, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much.", good: true },
          { say: "Okay, okay. Give it fast.", good: false },
        ],
      },
    ],
  },
};
