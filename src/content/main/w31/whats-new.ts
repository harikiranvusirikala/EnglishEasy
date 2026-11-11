import type { Lesson } from "../../types";

/** Week 31, Day 5 (CURRICULUM §4): giving and asking for news with the present perfect. */
export const day: Lesson = {
  id: "whats-new",
  kind: "lesson",
  title: { en: "What's New?", te: "కొత్త విశేషాలు" },
  subtitle: "News: has / have + done",
  summary: {
    en: "Learn to ask for news and to share it: What's new with you? My neighbour has bought a new car.",
    te: "విశేషాలు అడగడం, చెప్పడం నేర్చుకుందాం: What's new with you? My neighbour has bought a new car.",
  },
  seo: {
    title: "Sharing News in English for Telugu Speakers",
    description:
      "Ask What's new with you? and say My neighbour has bought a new car. Simple lessons for Telugu speakers on sharing colony news.",
  },
  pattern: [
    { text: "My neighbour", role: "who" },
    { text: "has bought", role: "action" },
    { text: "a new car.", role: "what" },
  ],
  core: [
    { en: "My neighbour has bought a new car.", te: "మా పక్కింటివాళ్ళు కొత్త కారు కొన్నారు.", extra: ["buyed"] },
    { en: "The old kirana shop has closed.", te: "పాత కిరాణా షాపు మూతపడింది.", extra: ["closing"] },
    { en: "A new hospital has opened near the bus stand.", te: "బస్ స్టాండ్ దగ్గర కొత్త హాస్పిటల్ వచ్చింది.", extra: ["opening"] },
    { en: "What's new with you?", te: "మీ విశేషాలు ఏంటి?", extra: ["news"] },
    { en: "My cousin has got a new job.", te: "మా కజిన్‌కి కొత్త ఉద్యోగం వచ్చింది.", extra: ["have"] },
    { en: "Have you heard? Venkat has retired.", te: "విన్నారా? వెంకట్ గారు రిటైర్ అయ్యారు.", extra: ["retire"] },
    { en: "Lakshmi's son has got engaged.", te: "లక్ష్మి గారి అబ్బాయికి నిశ్చితార్థం అయింది.", extra: ["have"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Meet a neighbour or friend today and ask: What's new with you?",
    te: "ఈ రోజు ఒక పక్కింటివారిని లేదా స్నేహితుడిని కలిసి అడగండి: What's new with you?",
  },
  words: [
    { en: "What's new?", te: "ఏంటి విశేషాలు?" },
    { en: "Have you heard?", te: "విన్నారా?" },
    { en: "nothing much", te: "పెద్దగా ఏమీ లేదు" },
    { en: "engaged", te: "నిశ్చితార్థం అయింది" },
    { en: "graduated", te: "డిగ్రీ పూర్తి చేశారు" },
  ],
  grammar: ["present-perfect", "past-simple"],
  topics: ["neighbours", "people", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Giving news", te: "వార్త చెప్పడం" },
      body: {
        en: "For fresh news, use has or have + the third form, with no time. If you say when, like yesterday, use the past: He bought it yesterday.",
        te: "కొత్త వార్తకి has / have + మూడో రూపం, సమయం చెప్పకుండా. ఎప్పుడో చెబితే (yesterday) past వాడండి: He bought it yesterday.",
      },
      bridge: {
        te: ["మా పక్కింటివాళ్ళు", "కొత్త కారు", "కొన్నారు"],
        en: [
          { text: "My neighbour", role: "who" },
          { text: "has bought", role: "action" },
          { text: "a new car.", role: "what" },
        ],
      },
      examples: [
        { en: "My neighbour has bought a new car.", te: "మా పక్కింటివాళ్ళు కొత్త కారు కొన్నారు." },
        { en: "The old kirana shop has closed.", te: "పాత కిరాణా షాపు మూతపడింది." },
        { en: "Lakshmi's son has got engaged.", te: "లక్ష్మి గారి అబ్బాయికి నిశ్చితార్థం అయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking for news and answering", te: "విశేషాలు అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "What's new?",
          useFor: { en: "Asking a friend for news.", te: "స్నేహితుడిని విశేషాలు అడగడానికి." },
          example: { en: "What's new with you?", te: "మీ విశేషాలు ఏంటి?" },
        },
        {
          form: "Have you heard?",
          useFor: { en: "Starting to tell some news.", te: "ఒక వార్త చెప్పడం మొదలుపెట్టడానికి." },
          example: { en: "Have you heard? Venkat has retired.", te: "విన్నారా? వెంకట్ గారు రిటైర్ అయ్యారు." },
        },
        {
          form: "Nothing much.",
          useFor: { en: "When you have no news.", te: "చెప్పడానికి కొత్తగా ఏమీ లేనప్పుడు." },
          example: { en: "Nothing much. Everything is fine.", te: "పెద్దగా ఏమీ లేదు. అంతా బాగానే ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "My cousin has passed out from college.",
      right: "My cousin has graduated from college.",
      why: {
        en: "In India passed out means finished college, but elsewhere it means fainted.",
        te: "మన దగ్గర passed out అంటే కాలేజ్ పూర్తి చేయడం; బయట దేశాల్లో దాని అర్థం స్పృహ తప్పడం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Rani has bought new scooter.",
      right: "Rani has bought a new scooter.",
      why: {
        en: "One thing named for the first time needs a; Telugu has no such word.",
        te: "మొదటిసారి చెప్పే ఒక్క వస్తువు ముందు a కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "A neighbour asks: What's new? You have no news. Choose a natural answer.", te: "పక్కింటివారు What's new? అని అడిగారు. మీ దగ్గర కొత్త విశేషాలు లేవు. సరైన జవాబు ఎంచుకోండి." },
      options: ["Nothing much. What about you?", "Nothing much only.", "No new."],
      answer: 0,
      why: {
        en: "Nothing much is a full answer; adding only is an Indian habit, and No new is not English.",
        te: "Nothing much అంటేనే పూర్తి జవాబు; only చేర్చడం మన అలవాటు, No new ఇంగ్లీష్ కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "My neighbour ___ bought a new car.",
      te: "మా పక్కింటివాళ్ళు కొత్త కారు కొన్నారు.",
      options: ["has", "have", "is"],
      answer: 0,
      why: {
        en: "My neighbour is one person, like he or she, so use has.",
        te: "పక్కింటివారు ఒక్కరే (he, she లాగా), అందుకే has.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Kumar says: The old kirana shop has closed. What does he mean?",
        te: "కుమార్ గారు The old kirana shop has closed అన్నారు. ఆయన ఉద్దేశం ఏంటి?",
      },
      options: ["The shop is not open any more.", "The shop closes at night.", "The shop will close next week."],
      answer: 0,
      why: {
        en: "Has closed is news about now: from now on, it is not open.",
        te: "has closed అంటే ఇప్పటి వార్త: ఇక నుండి ఆ షాపు తెరవరు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He has bought a new car yesterday.",
      wrongIndex: 1,
      fix: "He bought a new car yesterday.",
      why: {
        en: "With a time like yesterday, English uses the past bought, not has bought.",
        te: "yesterday లాంటి సమయం చెబితే has bought కాదు, past bought వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell a friend some news: there is now a new hospital near the bus stand.",
        te: "స్నేహితుడికి ఒక వార్త చెప్పండి: బస్ స్టాండ్ దగ్గర కొత్త హాస్పిటల్ వచ్చింది.",
      },
      expected: ["A new hospital has opened near the bus stand.", "A new hospital has opened.", "Have you heard? A new hospital has opened."],
      options: ["A new hospital has opened near the bus stand.", "New hospital has opened near the bus stand.", "A new hospital has open near the bus stand."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You meet a friend after a long time. Ask for her news.",
        te: "చాలా రోజుల తర్వాత ఒక స్నేహితురాలిని కలిశారు. ఆవిడ విశేషాలు అడగండి.",
      },
      expected: ["What's new with you?", "What's new?", "What is new with you?"],
      options: ["What's new with you?", "What new with you?", "What is your new?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Colony news", te: "కాలనీ కబుర్లు" },
    scene: {
      en: "In the evening, you meet your neighbour Fatima at the gate. You share the colony news.",
      te: "సాయంత్రం గేటు దగ్గర పక్కింటి ఫాతిమా గారు కలిశారు. కాలనీ కబుర్లు చెప్పుకుంటున్నారు.",
    },
    partner: { en: "Fatima (neighbour)", te: "ఫాతిమా (పక్కింటావిడ)" },
    skills: [
      { id: "news", label: { en: "Giving news", te: "వార్త చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! I haven't seen you for days.",
        te: "నమస్కారం! చాలా రోజులైంది మిమ్మల్ని చూసి.",
        hint: { en: "Greet her, and ask about her news.", te: "ఆవిడని పలకరించి, ఆవిడ విశేషాలు అడగండి." },
        replies: [
          { say: "Good evening! What's new with you?", good: true, skill: "news" },
          { say: "Good evening! What new with you?", good: false, skill: "news", fixIt: "be" },
        ],
      },
      {
        partner: "Have you heard? The old kirana shop has closed.",
        te: "విన్నారా? పాత కిరాణా షాపు మూతపడింది.",
        hint: { en: "Say you didn't know, and ask why.", te: "మీకు తెలియదని చెప్పి, ఎందుకో అడగండి." },
        replies: [
          { say: "Oh no, I didn't know! Why has it closed?", good: true, skill: "news" },
          { say: "Oh no, I didn't know! Why it has closed?", good: false, skill: "news", fixIt: "question" },
        ],
      },
      {
        partner: "The owner has moved to Hyderabad. Any news from you?",
        te: "ఓనర్ గారు హైదరాబాద్ వెళ్ళిపోయారు. మీ దగ్గర ఏమైనా విశేషాలు?",
        hint: { en: "Tell her your cousin's good news about a job.", te: "ఉద్యోగం గురించి మీ కజిన్ మంచి వార్త చెప్పండి." },
        replies: [
          { say: "Yes! My cousin has got a new job.", good: true, skill: "news" },
          { say: "Yes! My cousin have got a new job.", good: false, skill: "news", fixIt: "he-she-s" },
          {
            say: "Why do you want to know everything?",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I was only asking.", te: "సారీ! ఊరికే అడిగానంతే." },
          },
        ],
      },
      {
        partner: "That's wonderful! Please give him my best wishes.",
        te: "చాలా మంచి వార్త! ఆయనకి నా శుభాకాంక్షలు చెప్పండి.",
        hint: { en: "Thank her, and say goodbye for now.", te: "థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you, I will. See you later!", good: true, skill: "polite" },
          { say: "Thanks you, I will. See you later!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
