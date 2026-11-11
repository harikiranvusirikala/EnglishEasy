import type { Lesson } from "../../types";

/** Week 23, Day 1 (CURRICULUM §4): arriving at a restaurant — A table for two, please. Can we sit near the window? */
export const day: Lesson = {
  id: "a-table-for-two",
  kind: "lesson",
  title: { en: "A Table for Two", te: "ఇద్దరికి టేబుల్" },
  subtitle: "A table for two, please.",
  summary: {
    en: "Learn to ask for a table at a restaurant: A table for two, please. Can we sit near the window?",
    te: "హోటల్‌లో టేబుల్ అడగడం నేర్చుకుందాం: A table for two, please. Can we sit near the window?",
  },
  seo: {
    title: "Asking for a Table in English for Telugu Speakers",
    description:
      "Say A table for two, please and Can we sit near the window? Simple lessons for Telugu speakers on arriving at a restaurant.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "we", role: "who" },
    { text: "sit", role: "action" },
    { text: "near the window?", role: "what" },
  ],
  core: [
    { en: "A table for two, please.", te: "ఇద్దరికి ఒక టేబుల్ కావాలి.", extra: ["to"] },
    { en: "Can we sit near the window?", te: "కిటికీ దగ్గర కూర్చోవచ్చా?", extra: ["sitting"] },
    { en: "Is this table free?", te: "ఈ టేబుల్ ఖాళీగా ఉందా?", extra: ["Are"] },
    { en: "How long is the wait?", te: "ఎంతసేపు ఆగాలి?", extra: ["much"] },
    { en: "There are four of us.", te: "మేము నలుగురం ఉన్నాం.", extra: ["members"] },
    { en: "Sorry, this table is reserved.", te: "Sorry అండీ, ఈ టేబుల్ ముందే బుక్ అయింది.", extra: ["reserve"] },
    { en: "Can we have the menu, please?", te: "మెనూ ఇస్తారా?", extra: ["give"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud: A table for two, please. Then say it for three and for four.",
    te: "గట్టిగా చెప్పండి: A table for two, please. తర్వాత ముగ్గురికి, నలుగురికి కూడా చెప్పండి.",
  },
  words: [
    { en: "restaurant", te: "హోటల్, రెస్టారెంట్" },
    { en: "waiter", te: "వెయిటర్, వడ్డించేవారు" },
    { en: "menu", te: "మెనూ, వంటకాల జాబితా" },
    { en: "reserved", te: "ముందే బుక్ చేసినది" },
    { en: "self-service", te: "సెల్ఫ్ సర్వీస్, మీరే తెచ్చుకోవడం" },
  ],
  grammar: ["can-could", "there-is-are", "politeness-softening"],
  topics: ["food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for a table", te: "టేబుల్ అడగడం" },
      body: {
        en: "At a restaurant door, say how many you are: A table for two, please. For a big group, say There are four of us. To choose a place, ask Can we sit …? In a self-service place, you pay first and take your own food.",
        te: "హోటల్‌లోకి వెళ్ళగానే ఎంత మందో చెప్పండి: A table for two, please. ఎక్కువ మంది అయితే There are four of us. ఎక్కడ కూర్చోవాలో Can we sit …? అని అడగండి. self-service అంటే ముందు డబ్బు కట్టి, మీరే తెచ్చుకోవాలి.",
      },
      bridge: {
        te: ["కిటికీ దగ్గర", "కూర్చోవచ్చా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "we", role: "who" },
          { text: "sit", role: "action" },
          { text: "near the window?", role: "what" },
        ],
      },
      examples: [
        { en: "A table for two, please.", te: "ఇద్దరికి ఒక టేబుల్ కావాలి." },
        { en: "Can we sit near the window?", te: "కిటికీ దగ్గర కూర్చోవచ్చా?" },
        { en: "There are four of us.", te: "మేము నలుగురం ఉన్నాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say at the door", te: "లోపలికి వెళ్ళగానే ఏం అనాలి" },
      items: [
        {
          form: "A table for …",
          useFor: { en: "Say how many people.", te: "ఎంత మందో చెప్పడానికి." },
          example: { en: "A table for two, please.", te: "ఇద్దరికి ఒక టేబుల్ కావాలి." },
        },
        {
          form: "Is this table free?",
          useFor: { en: "Check if you can sit there.", te: "అక్కడ కూర్చోవచ్చో లేదో అడగడానికి." },
          example: { en: "Is this table free?", te: "ఈ టేబుల్ ఖాళీగా ఉందా?" },
        },
        {
          form: "How long is the wait?",
          useFor: { en: "All tables are full. Ask the time.", te: "టేబుల్స్ అన్నీ నిండిపోయాయి. ఎంతసేపో అడగడానికి." },
          example: { en: "How long is the wait?", te: "ఎంతసేపు ఆగాలి?" },
        },
        {
          form: "reserved",
          useFor: { en: "Booked by someone else. Choose another table.", te: "ఇంకెవరో బుక్ చేశారు. వేరే టేబుల్ చూసుకోండి." },
          example: { en: "Sorry, this table is reserved.", te: "Sorry అండీ, ఈ టేబుల్ ముందే బుక్ అయింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "We are four members.",
      right: "There are four of us.",
      why: {
        en: "Members is for a club or a group; for people at a table, say four of us.",
        te: "members అనేది సంఘానికి, క్లబ్‌కి వాడే మాట; భోజనానికి వచ్చినవాళ్ళకి four of us అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "This table free?",
      right: "Is this table free?",
      why: {
        en: "Telugu puts ఉందా? at the end, but an English question starts with is.",
        te: "తెలుగులో 'ఉందా?' చివర్లో వస్తుంది; ఇంగ్లీష్ ప్రశ్న is తో మొదలవుతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "You are two people. What do you say at the door?", te: "మీరు ఇద్దరు. లోపలికి వెళ్ళగానే ఏమంటారు?" },
      options: ["A table for two, please.", "A table to two, please.", "Two persons table, give."],
      answer: 0,
      why: {
        en: "Telugu ఇద్దరికి has కి, but a table for people takes for.",
        te: "'ఇద్దరికి' లో 'కి' ఉంది; కానీ ఇంగ్లీష్‌లో మనుషుల కోసం టేబుల్ అంటే for.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Can we sit ___ the window?",
      te: "కిటికీ దగ్గర కూర్చోవచ్చా?",
      options: ["near", "nearly", "at near"],
      answer: 0,
      why: {
        en: "Near means close to a place; nearly means almost.",
        te: "near అంటే దగ్గర; nearly అంటే దాదాపు. at near అని అనరు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The waiter says: Sorry, this table is reserved. What does it mean?",
        te: "వెయిటర్ Sorry, this table is reserved అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Someone booked it before you.", "It is free. Please sit.", "The table is broken."],
      answer: 0,
      why: {
        en: "Reserved means it is kept for people who booked it.",
        te: "reserved అంటే ముందే బుక్ చేసుకున్నవాళ్ళ కోసం ఉంచారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "There is four of us.",
      wrongIndex: 1,
      fix: "There are four of us.",
      why: {
        en: "Four people are more than one, so use are, not is.",
        te: "నలుగురు అంటే ఒకరి కంటే ఎక్కువ, అందుకే is కాదు, are.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "There are two of you. Ask the waiter for a table.",
        te: "మీరు ఇద్దరు ఉన్నారు. వెయిటర్‌ని టేబుల్ అడగండి.",
      },
      expected: ["A table for two, please.", "Can we have a table for two?", "Can we have a table for two, please?"],
      options: ["A table for two, please.", "Two members table, please.", "A table to two, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You like the table near the window. Ask if you can sit there.",
        te: "కిటికీ దగ్గర టేబుల్ మీకు నచ్చింది. అక్కడ కూర్చోవచ్చా అని అడగండి.",
      },
      expected: ["Can we sit near the window?", "Can we sit there?", "Can I sit near the window?"],
      options: ["Can we sit near the window?", "We can sit near the window?", "Can we sitting near the window?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Lunch at a busy restaurant", te: "రద్దీగా ఉన్న హోటల్‌లో భోజనం" },
    scene: {
      en: "It is lunch time. You come to a restaurant with two friends. Imran, the waiter, meets you at the door.",
      te: "మధ్యాహ్నం భోజనం సమయం. మీరు ఇద్దరు స్నేహితులతో హోటల్‌కి వచ్చారు. వెయిటర్ ఇమ్రాన్ ద్వారం దగ్గర ఎదురొచ్చారు.",
    },
    partner: { en: "Imran (waiter)", te: "ఇమ్రాన్ (వెయిటర్)" },
    voice: "b",
    skills: [{ id: "table", label: { en: "Asking for a table", te: "టేబుల్ అడగడం" } }],
    turns: [
      {
        partner: "Welcome! How many people?",
        te: "రండి! ఎంత మంది?",
        hint: { en: "Say how many you are: three.", te: "మీరు ఎంత మందో చెప్పండి: ముగ్గురు." },
        replies: [
          { say: "There are three of us.", good: true, skill: "table" },
          { say: "A table for three, please.", good: true, skill: "table" },
          { say: "We are three members.", good: false, skill: "table", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Sorry, all the tables are full now.",
        te: "Sorry అండీ, ఇప్పుడు టేబుల్స్ అన్నీ నిండిపోయాయి.",
        hint: { en: "Ask how long you have to wait.", te: "ఎంతసేపు ఆగాలో అడగండి." },
        replies: [
          { say: "How long is the wait?", good: true, skill: "table" },
          { say: "How long do we have to wait?", good: true, skill: "table" },
          {
            say: "Full? What kind of restaurant is this?",
            good: false,
            skill: "table",
            react: { en: "Sorry! Lunch time is always busy here.", te: "Sorry అండీ! మధ్యాహ్నం ఇక్కడ ఎప్పుడూ రద్దీగా ఉంటుంది." },
          },
        ],
      },
      {
        partner: "About ten minutes. Please wait here.",
        te: "సుమారు పది నిమిషాలు. ఇక్కడ కాసేపు ఆగండి.",
        hint: { en: "Say okay, and ask for a place by the window.", te: "సరే అని, కిటికీ దగ్గర చోటు అడగండి." },
        replies: [
          { say: "Okay. Can we sit near the window?", good: true, skill: "table" },
          { say: "Okay. We can sit near the window?", good: false, skill: "table", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, that table is free now. Please come.",
        te: "సరే, ఆ టేబుల్ ఇప్పుడు ఖాళీ అయింది. రండి.",
        hint: { en: "Thank him, and ask for the menu.", te: "ఆయనకి థాంక్స్ చెప్పి, మెనూ అడగండి." },
        replies: [
          { say: "Thank you. Can we have the menu, please?", good: true, skill: "table" },
          { say: "Thank you. Can we have menu, please?", good: false, skill: "table", fixIt: "article" },
        ],
      },
    ],
  },
};
