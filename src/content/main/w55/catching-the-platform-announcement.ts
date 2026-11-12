import type { Lesson } from "../../types";

/** Week 55, Day 5 (CURRICULUM §5): catching platform numbers and delays, and checking — Sorry, did they say platform five or nine? */
export const day: Lesson = {
  id: "catching-the-platform-announcement",
  kind: "lesson",
  title: { en: "Listen to the Announcement", te: "అనౌన్స్‌మెంట్ వినండి" },
  subtitle: "Sorry, did they say …?",
  summary: {
    en: "Learn to catch the platform and the delay in an announcement, and to check: Sorry, did they say platform five or nine?",
    te: "అనౌన్స్‌మెంట్‌లో ప్లాట్‌ఫామ్ నంబర్, ఆలస్యం పట్టుకోవడం, అనుమానం ఉంటే అడగడం నేర్చుకుందాం: Sorry, did they say platform five or nine?",
  },
  seo: {
    title: "Understanding Railway Announcements in English for Telugu Speakers",
    description:
      "Catch the platform number and the delay, and ask Sorry, did they say platform five or nine? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Sorry, did they", role: "who" },
    { text: "say", role: "action" },
    { text: "platform five", role: "what" },
    { text: "or nine?", role: "what" },
  ],
  core: [
    { en: "Sorry, did they say platform five or nine?", te: "సారీ, ప్లాట్‌ఫామ్ ఐదు అన్నారా, తొమ్మిదా?", extra: ["said"] },
    { en: "The Narayanadri Express is arriving on platform number five.", te: "నారాయణాద్రి ఎక్స్‌ప్రెస్ ఐదో నంబర్ ప్లాట్‌ఫామ్ మీదకి వస్తోంది.", extra: ["at"] },
    { en: "Is the train running late?", te: "రైలు ఆలస్యంగా నడుస్తోందా?", extra: ["does"] },
    { en: "Where does our coach stop on the platform?", te: "మన కోచ్ ప్లాట్‌ఫామ్ మీద ఎక్కడ ఆగుతుంది?", extra: ["stops"] },
    { en: "The train is late by forty minutes.", te: "రైలు నలభై నిమిషాలు ఆలస్యం.", extra: ["minute"] },
    { en: "May I have your attention, please?", te: "అందరూ దయచేసి ఒక్కసారి వినండి.", extra: ["can"] },
    { en: "I didn't catch the platform number. Did you?", te: "ప్లాట్‌ఫామ్ నంబర్ నాకు సరిగ్గా వినపడలేదు. మీకు వినపడిందా?", extra: ["caught"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud three platform numbers, then ask yourself: Sorry, did they say platform … or …?",
    te: "మూడు ప్లాట్‌ఫామ్ నంబర్లు గట్టిగా చెప్పండి, తర్వాత ఇలా అడిగి చూడండి: Sorry, did they say platform … or …?",
  },
  words: [
    { en: "announcement", te: "అనౌన్స్‌మెంట్, ప్రకటన" },
    { en: "attention", te: "శ్రద్ధ, గమనించడం" },
    { en: "coach", te: "రైలు బోగీ, కోచ్" },
    { en: "late by", te: "… ఆలస్యం" },
    { en: "catch", te: "సరిగ్గా వినడం, అర్థం చేసుకోవడం" },
  ],
  grammar: ["present-continuous", "past-simple", "yes-no-questions"],
  topics: ["travel", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Checking what you heard", te: "విన్నది సరిచూసుకోవడం" },
      body: {
        en: "Announcements are fast. Listen for the train's name, then platform number and a number. If you missed it, ask the person next to you: Sorry, did they say …?",
        te: "అనౌన్స్‌మెంట్లు వేగంగా ఉంటాయి. ముందు రైలు పేరు, తర్వాత platform number, ఆ వెంటనే నంబర్ వినండి. వినపడకపోతే పక్కవారిని అడగండి: Sorry, did they say …?",
      },
      bridge: {
        te: ["సారీ", "ప్లాట్‌ఫామ్ ఐదు", "అన్నారా?"],
        en: [
          { text: "Sorry, did they", role: "who" },
          { text: "say", role: "action" },
          { text: "platform five", role: "what" },
          { text: "or nine?", role: "what" },
        ],
      },
      examples: [
        { en: "Sorry, did they say platform five or nine?", te: "సారీ, ప్లాట్‌ఫామ్ ఐదు అన్నారా, తొమ్మిదా?" },
        { en: "The train is late by forty minutes.", te: "రైలు నలభై నిమిషాలు ఆలస్యం." },
        { en: "I didn't catch the platform number. Did you?", te: "ప్లాట్‌ఫామ్ నంబర్ నాకు సరిగ్గా వినపడలేదు. మీకు వినపడిందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words in announcements", te: "అనౌన్స్‌మెంట్లలో పదాలు" },
      items: [
        {
          form: "is arriving on platform …",
          useFor: { en: "The train is coming in now.", te: "రైలు ఇప్పుడే వస్తోంది." },
          example: { en: "The Narayanadri Express is arriving on platform number five.", te: "నారాయణాద్రి ఎక్స్‌ప్రెస్ ఐదో నంబర్ ప్లాట్‌ఫామ్ మీదకి వస్తోంది." },
        },
        {
          form: "is late by · is running late",
          useFor: { en: "The train will come after its time.", te: "రైలు దాని టైమ్ కంటే ఆలస్యంగా వస్తుంది." },
          example: { en: "The train is late by forty minutes.", te: "రైలు నలభై నిమిషాలు ఆలస్యం." },
        },
        {
          form: "coach",
          useFor: { en: "One part of the train. Your coach is on your ticket.", te: "రైలులో ఒక బోగీ. మీ కోచ్ మీ టికెట్ మీద ఉంటుంది." },
          example: { en: "Our coach is near the end of the train.", te: "మన కోచ్ రైలు చివర్లో ఉంది." },
        },
        {
          form: "Did they say …?",
          useFor: { en: "Check a number you did not catch.", te: "సరిగ్గా వినపడని నంబర్‌ని సరిచూసుకోవడానికి." },
          example: { en: "Excuse me, did they say platform eight?", te: "ఎక్స్‌క్యూజ్ మీ, ప్లాట్‌ఫామ్ ఎనిమిది అన్నారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Sorry, did they said platform five?",
      right: "Sorry, did they say platform five?",
      why: {
        en: "After did, the verb stays plain, because did already shows the past.",
        te: "did తర్వాత verb అలాగే ఉంటుంది; ఎందుకంటే గతం అని did లోనే ఉంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "The train late by forty minutes.",
      right: "The train is late by forty minutes.",
      why: {
        en: "English needs is before late; Telugu ఆలస్యం needs no verb.",
        te: "ఇంగ్లీష్‌లో late ముందు is కావాలి; తెలుగులో 'ఆలస్యం' కి verb అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "A passenger asks when the Tirupati train leaves. The board says 10:15. What do you say?",
        te: "తిరుపతి రైలు ఎప్పుడు బయలుదేరుతుందని ఒక ప్రయాణికుడు అడుగుతున్నారు. బోర్డు మీద 10:15 ఉంది. ఏమంటారు?",
      },
      options: ["It leaves at 10:15.", "It leave at 10:15.", "It leaving at 10:15."],
      answer: 0,
      why: {
        en: "A timetable uses the present; one train, like he or she, takes s.",
        te: "టైమ్‌టేబుల్‌కి present; ఒక్క రైలు he, she లాంటిదే, అందుకే verb కి s.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "The train is late ___ forty minutes.",
      te: "రైలు నలభై నిమిషాలు ఆలస్యం.",
      options: ["by", "for", "with"],
      answer: 0,
      why: {
        en: "Late by tells how much after its time; Telugu adds no word here.",
        te: "ఎంత ఆలస్యమో చెప్పడానికి late by; తెలుగులో ఇక్కడ అదనపు పదం ఉండదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: { en: "You see your train coming. Tell your friend.", te: "మీ రైలు వస్తుండటం చూశారు. మీ స్నేహితులకి చెప్పండి." },
      options: ["The train is coming. Let's go.", "Train is coming. Let's go.", "The train coming. Let's go."],
      answer: 0,
      why: {
        en: "A train you both know takes the, and -ing needs is with it.",
        te: "ఇద్దరికీ తెలిసిన రైలుకి the కావాలి; -ing తో is కూడా కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "state-ing",
      sentence: "Sorry, I am not understanding the announcement.",
      wrongIndex: 4,
      fix: "Sorry, I don't understand the announcement.",
      why: {
        en: "Understand is a state, not an action, so it takes no -ing.",
        te: "understand అనేది ఒక స్థితి, పని కాదు; అందుకే దానికి -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The announcement was fast. Ask the woman next to you if they said platform six.",
        te: "అనౌన్స్‌మెంట్ వేగంగా అయిపోయింది. ప్లాట్‌ఫామ్ ఆరు అన్నారా అని పక్కనున్న ఆవిడని అడగండి.",
      },
      expected: ["Sorry, did they say platform six?", "Excuse me, did they say platform six?", "Did they say platform six?"],
      options: ["Sorry, did they say platform six?", "Sorry, did they said platform six?", "Sorry, they told platform six?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend calls you at the station. Tell him your train is forty minutes late.",
        te: "స్టేషన్‌లో ఉన్నప్పుడు స్నేహితుడు ఫోన్ చేశారు. మీ రైలు నలభై నిమిషాలు ఆలస్యమని ఆయనకి చెప్పండి.",
      },
      expected: ["My train is forty minutes late.", "The train is late by forty minutes.", "My train is running forty minutes late."],
      options: ["My train is forty minutes late.", "My train forty minutes late.", "My train is forty minute late."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Which platform?", te: "ఏ ప్లాట్‌ఫామ్?" },
    scene: {
      en: "You are at the station, waiting for the Narayanadri Express. An announcement comes, but it is fast. Joseph is waiting next to you.",
      te: "మీరు స్టేషన్‌లో నారాయణాద్రి ఎక్స్‌ప్రెస్ కోసం ఎదురుచూస్తున్నారు. ఒక అనౌన్స్‌మెంట్ వచ్చింది, కానీ చాలా వేగంగా. మీ పక్కన జోసెఫ్ గారు ఎదురుచూస్తున్నారు.",
    },
    partner: { en: "Joseph (a passenger)", te: "జోసెఫ్ (ఒక ప్రయాణికుడు)" },
    voice: "b",
    skills: [
      { id: "check", label: { en: "Checking what you heard", te: "విన్నది సరిచూసుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Did you hear that? It was about the Narayanadri Express.",
        te: "అది విన్నారా? నారాయణాద్రి ఎక్స్‌ప్రెస్ గురించే.",
        hint: { en: "Say you missed it, and check if it was platform five or nine.", te: "మీకు వినపడలేదని చెప్పి, ప్లాట్‌ఫామ్ ఐదా తొమ్మిదా అని సరిచూసుకోండి." },
        replies: [
          { say: "I didn't catch it. Did they say platform five or nine?", good: true, skill: "check" },
          { say: "I didn't catch it. Did they said platform five or nine?", good: false, skill: "check", fixIt: "question" },
        ],
      },
      {
        partner: "Platform five, I think. And the train is late.",
        te: "ప్లాట్‌ఫామ్ ఐదు అనుకుంటా. రైలు ఆలస్యం కూడా.",
        hint: { en: "Ask how late it is.", te: "ఎంత ఆలస్యమో అడగండి." },
        replies: [
          { say: "Oh no. How late is it?", good: true, skill: "check" },
          { say: "Oh no. How much late it is?", good: false, skill: "check", fixIt: "question" },
        ],
      },
      {
        partner: "Late by forty minutes, they said. Which coach are you in?",
        te: "నలభై నిమిషాలు ఆలస్యమని చెప్పారు. మీరు ఏ కోచ్?",
        hint: { en: "Say you are in the last coach, and ask where it stops.", te: "మీరు చివరి కోచ్ అని చెప్పి, అది ఎక్కడ ఆగుతుందో అడగండి." },
        replies: [
          { say: "We're in the last coach. Where does it stop?", good: true, skill: "check" },
          {
            say: "Why are you asking? That's my business.",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I only wanted to help.", te: "సారీ! సాయం చేద్దామనే అడిగాను." },
          },
        ],
      },
      {
        partner: "The last coach stops near the bridge. I'm going there too.",
        te: "చివరి కోచ్ బ్రిడ్జ్ దగ్గర ఆగుతుంది. నేను కూడా అక్కడికే వెళ్తున్నాను.",
        hint: { en: "Thank him, and suggest walking there together.", te: "థాంక్స్ చెప్పి, కలిసి నడుద్దామని సూచించండి." },
        replies: [
          { say: "Thank you! Shall we walk there together?", good: true, skill: "polite" },
          { say: "Thank you! Shall we walking there together?", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
