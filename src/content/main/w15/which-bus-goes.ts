import type { Lesson } from "../../types";

/** Week 15, Day 1 (CURRICULUM §4): Which bus goes to …? Does this bus stop at …? — at an RTC bus stop. */
export const day: Lesson = {
  id: "which-bus-goes",
  kind: "lesson",
  title: { en: "Which Bus Goes There?", te: "ఏ బస్ వెళ్తుంది?" },
  subtitle: "Which bus goes to …?",
  summary: {
    en: "Learn to ask about buses: Which bus goes to Benz Circle? Does it stop at the hospital?",
    te: "బస్సుల గురించి అడగడం నేర్చుకుందాం: Which bus goes to Benz Circle? Does it stop at the hospital?",
  },
  seo: {
    title: "Asking Which Bus in English for Telugu Speakers",
    description:
      "Ask Which bus goes to Benz Circle? and Does this bus stop at the hospital? Simple lessons for Telugu speakers on taking the bus.",
  },
  pattern: [
    { text: "Which bus", role: "who" },
    { text: "goes", role: "action" },
    { text: "to Benz Circle?", role: "what" },
  ],
  core: [
    { en: "Which bus goes to Benz Circle?", te: "బెంజ్ సర్కిల్‌కి ఏ బస్ వెళ్తుంది?", extra: ["go"] },
    { en: "Does this bus stop at the hospital?", te: "ఈ బస్ హాస్పిటల్ దగ్గర ఆగుతుందా?", extra: ["Is"] },
    { en: "Where do I get off for the temple?", te: "గుడికి వెళ్ళాలంటే నేను ఎక్కడ దిగాలి?", extra: ["on"] },
    { en: "Please tell me when my stop comes.", te: "నా స్టాప్ వచ్చినప్పుడు కొంచెం చెప్పండి.", extra: ["come"] },
    { en: "No, take the next bus.", te: "లేదండీ, తర్వాతి బస్ ఎక్కండి.", extra: ["a"] },
    { en: "Bus number 25 goes via the railway station.", te: "25 నంబర్ బస్ రైల్వే స్టేషన్ మీదుగా వెళ్తుంది.", extra: ["going"] },
    { en: "Get on quickly, please. The bus is leaving.", te: "త్వరగా ఎక్కండి. బస్ బయల్దేరుతోంది.", extra: ["off"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a bus in your town. Say aloud where it goes: This bus goes to …",
    te: "మీ ఊరిలో ఒక బస్ గురించి ఆలోచించండి. అది ఎక్కడికి వెళ్తుందో గట్టిగా చెప్పండి: This bus goes to …",
  },
  words: [
    { en: "which", te: "ఏ, ఏది" },
    { en: "stop", te: "స్టాప్, ఆగడం" },
    { en: "get on", te: "ఎక్కడం (బస్, రైలు)" },
    { en: "get off", te: "దిగడం (బస్, రైలు)" },
    { en: "via", te: "మీదుగా" },
  ],
  grammar: ["present-simple", "question-words", "yes-no-questions"],
  topics: ["transport", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Which bus? Does it stop?", te: "ఏ బస్? అక్కడ ఆగుతుందా?" },
      body: {
        en: "Ask Which bus goes to …? One bus is like he or she, so goes has s. To check a bus, ask Does this bus stop at …?",
        te: "Which bus goes to …? అని అడగండి. ఒక్క బస్ he, she లాంటిదే, అందుకే goes లో s. ఒక బస్ ఆగుతుందో లేదో తెలుసుకోవాలంటే Does this bus stop at …? అనండి.",
      },
      bridge: {
        te: ["బెంజ్ సర్కిల్‌కి", "ఏ బస్", "వెళ్తుంది?"],
        en: [
          { text: "Which bus", role: "who" },
          { text: "goes", role: "action" },
          { text: "to Benz Circle?", role: "what" },
        ],
      },
      examples: [
        { en: "Which bus goes to Benz Circle?", te: "బెంజ్ సర్కిల్‌కి ఏ బస్ వెళ్తుంది?" },
        { en: "Does this bus stop at the hospital?", te: "ఈ బస్ హాస్పిటల్ దగ్గర ఆగుతుందా?" },
        { en: "Bus number 25 goes via the railway station.", te: "25 నంబర్ బస్ రైల్వే స్టేషన్ మీదుగా వెళ్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking about a bus", te: "బస్ గురించి అడగడం" },
      items: [
        {
          form: "Which bus goes to …?",
          useFor: { en: "You don't know the bus number.", te: "బస్ నంబర్ తెలియనప్పుడు." },
          example: { en: "Which bus goes to Benz Circle?", te: "బెంజ్ సర్కిల్‌కి ఏ బస్ వెళ్తుంది?" },
        },
        {
          form: "Does this bus stop at …?",
          useFor: { en: "The bus is here; you want to check.", te: "బస్ వచ్చింది; అక్కడ ఆగుతుందో లేదో తెలుసుకోవాలి." },
          example: { en: "Does this bus stop at the hospital?", te: "ఈ బస్ హాస్పిటల్ దగ్గర ఆగుతుందా?" },
        },
        {
          form: "Where do I get off for …?",
          useFor: { en: "Inside the bus: where to get down.", te: "బస్ లోపల: ఎక్కడ దిగాలో అడగడానికి." },
          example: { en: "Where do I get off for the temple?", te: "గుడికి వెళ్ళాలంటే నేను ఎక్కడ దిగాలి?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Where this bus goes?",
      right: "Where does this bus go?",
      why: {
        en: "Telugu keeps the same order for a question. English puts does before the bus, and go loses its s.",
        te: "తెలుగులో ప్రశ్నకి వరుస మారదు. ఇంగ్లీష్‌లో does బస్ ముందుకు వస్తుంది, go కి s ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Does this bus stop at hospital?",
      right: "Does this bus stop at the hospital?",
      why: {
        en: "A place everyone knows, like the hospital or the station, takes the.",
        te: "అందరికీ తెలిసిన చోటు ముందు the కావాలి: the hospital, the station.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "In the bus, ask where to get off for the temple.", te: "బస్‌లో, గుడికి వెళ్ళాలంటే ఎక్కడ దిగాలో అడగండి." },
      options: ["Where do I get off for the temple?", "Where I get off for the temple?", "Where do I get on for the temple?"],
      answer: 0,
      why: {
        en: "A where question needs do before I, and get off means leaving the bus.",
        te: "Where ప్రశ్నలో I ముందు do కావాలి; బస్ దిగడాన్ని get off అంటారు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Which bus ___ to Benz Circle?",
      te: "బెంజ్ సర్కిల్‌కి ఏ బస్ వెళ్తుంది?",
      options: ["goes", "go", "going"],
      answer: 0,
      why: {
        en: "Which bus means one bus, like he or she, so the verb takes s.",
        te: "Which bus అంటే ఒక్క బస్, he, she లాగా; అందుకే verb కి s.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The conductor says: Get off at the next stop. What does he mean?",
        te: "కండక్టర్ Get off at the next stop అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Leave the bus at the next stop.", "Get into the bus at the next stop.", "The bus does not stop here."],
      answer: 0,
      why: {
        en: "Get off means leave a bus or train; get on means climb in.",
        te: "get off అంటే బస్ లేదా రైలు దిగడం; get on అంటే ఎక్కడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Does this bus stops at the hospital?",
      wrongIndex: 3,
      fix: "Does this bus stop at the hospital?",
      why: {
        en: "After does, the verb has no s, because does already has it.",
        te: "does తర్వాత verb కి s రాదు; s ఇప్పటికే does లో ఉంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the bus stop, ask which bus goes to the railway station.",
        te: "బస్ స్టాప్‌లో, రైల్వే స్టేషన్‌కి ఏ బస్ వెళ్తుందో అడగండి.",
      },
      expected: ["Which bus goes to the railway station?", "Excuse me, which bus goes to the railway station?"],
      options: ["Which bus goes to the railway station?", "Which bus go to the railway station?", "Railway station which bus?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "In the bus, ask the conductor to tell you when your stop comes.",
        te: "బస్‌లో, మీ స్టాప్ వచ్చినప్పుడు చెప్పమని కండక్టర్‌ని అడగండి.",
      },
      expected: ["Please tell me when my stop comes.", "Could you tell me when my stop comes?", "Please tell me my stop."],
      options: ["Please tell me when my stop comes.", "Please tell me when my stop come.", "Tell me my stop, okay?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the bus stop", te: "బస్ స్టాప్‌లో" },
    scene: {
      en: "You are at an RTC bus stop in Vijayawada. You need to go to Benz Circle. Sarala is also waiting.",
      te: "మీరు విజయవాడలో RTC బస్ స్టాప్‌లో ఉన్నారు. బెంజ్ సర్కిల్‌కి వెళ్ళాలి. సరళ కూడా బస్ కోసం ఎదురుచూస్తున్నారు.",
    },
    partner: { en: "Sarala (at the bus stop)", te: "సరళ (బస్ స్టాప్‌లో)" },
    skills: [
      { id: "ask", label: { en: "Asking about buses", te: "బస్సుల గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Are you waiting for a bus too?",
        te: "నమస్కారం. మీరు కూడా బస్ కోసం ఎదురుచూస్తున్నారా?",
        hint: { en: "Say yes, and ask her the bus for Benz Circle.", te: "అవునని చెప్పి, బెంజ్ సర్కిల్‌కి ఏ బస్సో అడగండి." },
        replies: [
          { say: "Yes. Excuse me, which bus goes to Benz Circle?", good: true, skill: "ask" },
          { say: "Yes. Which bus go to Benz Circle?", good: false, skill: "ask", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Number 5 goes there. It comes every ten minutes.",
        te: "5 నంబర్ బస్ అక్కడికి వెళ్తుంది. పది నిమిషాలకి ఒకటి వస్తుంది.",
        hint: { en: "Ask her if it stops at the hospital too.", te: "అది హాస్పిటల్ దగ్గర కూడా ఆగుతుందా అని అడగండి." },
        replies: [
          { say: "Does it stop at the hospital too?", good: true, skill: "ask" },
          { say: "Is it stop at the hospital too?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, right at the hospital gate. Look, it's here!",
        te: "అవును, సరిగ్గా హాస్పిటల్ గేటు దగ్గరే. చూడండి, బస్ వచ్చింది!",
        hint: { en: "Thank her, and let her get on first.", te: "థాంక్స్ చెప్పి, ఆవిడని ముందు ఎక్కమనండి." },
        replies: [
          { say: "Thank you! Please, you get on first.", good: true, skill: "polite" },
          {
            say: "Move, move! Let me get on first.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! No need to push.", te: "సరే, సరే! తోయాల్సిన అవసరం లేదు." },
          },
        ],
      },
      {
        partner: "Thank you, that's kind. Have a good day!",
        te: "థాంక్యూ, మీరు చాలా మంచివారు. మీ రోజు బాగా గడవాలి!",
        hint: { en: "Wish her a good day too.", te: "ఆవిడ రోజు కూడా బాగా గడవాలని చెప్పండి." },
        replies: [
          { say: "You too. Have a nice day!", good: true, skill: "polite" },
          { say: "You too. Have nice day!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
