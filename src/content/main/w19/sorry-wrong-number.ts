import type { Lesson } from "../../types";

/** Week 19, Day 4 (CURRICULUM §4): a wrong number and a bad line — Sorry, you have the wrong number. The line is not clear. */
export const day: Lesson = {
  id: "sorry-wrong-number",
  kind: "lesson",
  title: { en: "Sorry, Wrong Number", te: "రాంగ్ నంబర్" },
  subtitle: "wrong number, a bad line",
  summary: {
    en: "Learn to handle a wrong number and a bad line: Sorry, you have the wrong number. Please speak a little louder.",
    te: "రాంగ్ నంబర్, సరిగ్గా వినిపించని లైన్ వస్తే ఏమనాలో నేర్చుకుందాం: Sorry, you have the wrong number. Please speak a little louder.",
  },
  seo: {
    title: "Wrong Number and a Bad Line in English for Telugu Speakers",
    description:
      "Say Sorry, you have the wrong number and The line is not clear. Simple lessons for Telugu speakers on phone problems.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "have", role: "action" },
    { text: "the wrong number", role: "what" },
  ],
  core: [
    { en: "Sorry, you have the wrong number.", te: "Sorry అండీ, మీరు రాంగ్ నంబర్‌కి చేశారు.", extra: ["a"] },
    { en: "The line is not clear.", te: "లైన్ సరిగ్గా లేదు, వినిపించట్లేదు.", extra: ["clearly"] },
    { en: "Please speak a little louder.", te: "కొంచెం గట్టిగా మాట్లాడండి.", extra: ["more"] },
    { en: "Which number did you dial?", te: "మీరు ఏ నంబర్‌కి చేశారు?", extra: ["dialled"] },
    { en: "Sorry, I can't hear you well.", te: "Sorry అండీ, మీ మాట సరిగ్గా వినిపించట్లేదు.", extra: ["hearing"] },
    { en: "This is not Venkat's number.", te: "ఇది వెంకట్ గారి నంబర్ కాదు.", extra: ["Venkat"] },
    { en: "Let me call you again.", te: "నేనే మళ్ళీ ఫోన్ చేస్తాను.", extra: ["calling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud three times: Sorry, you have the wrong number. Then use it when a wrong call comes.",
    te: "Sorry, you have the wrong number అని మూడుసార్లు గట్టిగా చెప్పండి. రాంగ్ కాల్ వచ్చినప్పుడు ఇదే అనండి.",
  },
  words: [
    { en: "wrong number", te: "రాంగ్ నంబర్" },
    { en: "line", te: "ఫోన్ లైన్" },
    { en: "louder", te: "ఇంకా గట్టిగా" },
    { en: "dial", te: "నంబర్ నొక్కడం, డయల్ చేయడం" },
    { en: "speak up", te: "గట్టిగా మాట్లాడటం" },
  ],
  grammar: ["articles", "question-words", "past-simple"],
  topics: ["phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Wrong number or bad line", te: "రాంగ్ నంబర్, సరిగ్గా లేని లైన్" },
      body: {
        en: "If the caller wants someone else, say it kindly: Sorry, you have the wrong number. If you can't hear well, say: The line is not clear. Please speak a little louder.",
        te: "ఫోన్ చేసినవాళ్ళకి వేరే మనిషి కావాలంటే మర్యాదగా చెప్పండి: Sorry, you have the wrong number. సరిగ్గా వినిపించకపోతే: The line is not clear. Please speak a little louder.",
      },
      bridge: {
        te: ["మీరు", "రాంగ్ నంబర్‌కి", "చేశారు"],
        en: [
          { text: "You", role: "who" },
          { text: "have", role: "action" },
          { text: "the wrong number", role: "what" },
        ],
      },
      examples: [
        { en: "Sorry, you have the wrong number.", te: "Sorry అండీ, మీరు రాంగ్ నంబర్‌కి చేశారు." },
        { en: "This is not Venkat's number.", te: "ఇది వెంకట్ గారి నంబర్ కాదు." },
        { en: "Please speak a little louder.", te: "కొంచెం గట్టిగా మాట్లాడండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What is the problem?", te: "సమస్య ఏంటి?" },
      items: [
        {
          form: "the wrong number",
          useFor: { en: "They want someone else.", te: "వాళ్ళకి వేరే మనిషి కావాలి." },
          example: { en: "Sorry, you have the wrong number.", te: "Sorry అండీ, మీరు రాంగ్ నంబర్‌కి చేశారు." },
        },
        {
          form: "The line is not clear.",
          useFor: { en: "The sound is bad.", te: "శబ్దం సరిగ్గా లేదు." },
          example: { en: "The line is not clear.", te: "లైన్ సరిగ్గా లేదు, వినిపించట్లేదు." },
        },
        {
          form: "louder / speak up",
          useFor: { en: "Their voice is too soft.", te: "వాళ్ళ గొంతు మరీ మెల్లగా ఉంది." },
          example: { en: "Please speak a little louder.", te: "కొంచెం గట్టిగా మాట్లాడండి." },
        },
        {
          form: "call you again",
          useFor: { en: "The call is very bad; try once more.", te: "కాల్ అసలు బాగోలేదు; మళ్ళీ చేయడానికి." },
          example: { en: "Let me call you again.", te: "నేనే మళ్ళీ ఫోన్ చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Sorry, you have wrong number.",
      right: "Sorry, you have the wrong number.",
      why: {
        en: "Telugu has no word like the, but English needs it before wrong number.",
        te: "తెలుగులో the లాంటి పదం లేదు, కానీ ఇంగ్లీష్‌లో wrong number ముందు the కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "May I know your good name?",
      right: "May I know your name, please?",
      why: {
        en: "Good name is a word-for-word copy of శుభనామం, heard only in India. Your name is enough.",
        te: "good name అనేది 'శుభనామం' కి మాటకి మాట అనువాదం; మన దగ్గరే వింటాం. your name చాలు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the caller which number they dialled.", te: "ఏ నంబర్‌కి చేశారో ఫోన్ చేసినవాళ్ళని అడగండి." },
      options: ["Which number did you dial?", "Which number you dialled?", "Which number are you dial?"],
      answer: 0,
      why: {
        en: "A past question needs did before you, and the verb stays plain after it.",
        te: "గతం గురించి ప్రశ్నకి you ముందు did కావాలి; దాని తర్వాత verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Please speak a little ___.",
      te: "కొంచెం గట్టిగా మాట్లాడండి.",
      options: ["louder", "more louder", "loud more"],
      answer: 0,
      why: {
        en: "Louder already means more loud, so never add more before it.",
        te: "louder అంటేనే 'ఇంకా గట్టిగా'; దాని ముందు more అక్కర్లేదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The caller says: Please speak up. What does it mean?",
        te: "ఫోన్ చేసినవాళ్ళు Please speak up అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Speak louder, please.", "Stand up, please.", "Speak faster, please."],
      answer: 0,
      why: {
        en: "Speak up means talk in a louder voice.",
        te: "speak up అంటే ఇంకా గట్టిగా మాట్లాడమని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The line is not clearly.",
      wrongIndex: 4,
      fix: "The line is not clear.",
      why: {
        en: "After is, use clear. Clearly goes with an action, like speak clearly.",
        te: "is తర్వాత clear వస్తుంది. clearly అనేది speak clearly లాగా verb తో వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A caller asks for Venkat. No Venkat lives here. Tell him kindly.",
        te: "ఫోన్ చేసిన ఆయన వెంకట్ గారిని అడిగారు. ఇక్కడ వెంకట్ అనేవాళ్ళు లేరు. మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, you have the wrong number.", "Sorry, I think you have the wrong number.", "Sorry, wrong number."],
      options: ["Sorry, you have the wrong number.", "Sorry, you have wrong number.", "No Venkat here. Don't call again."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You can't hear the caller well. Say so.",
        te: "ఫోన్ చేసినవాళ్ళ మాట సరిగ్గా వినిపించట్లేదు. అదే చెప్పండి.",
      },
      expected: ["Sorry, the line is not clear.", "The line is not clear.", "Sorry, I can't hear you well."],
      options: ["Sorry, the line is not clear.", "Sorry, the line not clear.", "Sorry, your voice is very bad."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A wrong number and a bad line", te: "రాంగ్ నంబర్, సరిగ్గా లేని లైన్" },
    scene: {
      en: "Your phone rings. A man named Ramesh is calling for Venkat. You don't know any Venkat.",
      te: "మీ ఫోన్ మోగింది. రమేష్ అనే ఆయన వెంకట్ కోసం ఫోన్ చేశారు. మీకు వెంకట్ అనేవాళ్ళు ఎవరూ తెలియదు.",
    },
    partner: { en: "Ramesh (caller)", te: "రమేష్ (ఫోన్ చేసిన ఆయన)" },
    voice: "b",
    skills: [{ id: "problem", label: { en: "Phone problems", te: "ఫోన్ సమస్యలు" } }],
    turns: [
      {
        partner: "Hello, Venkat? It's me, Ramesh!",
        te: "హలో, వెంకట్? నేనే, రమేష్‌ని!",
        hint: { en: "Tell him kindly that he has the wrong number.", te: "ఆయన రాంగ్ నంబర్‌కి చేశారని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "Sorry, I think you have the wrong number.", good: true, skill: "problem" },
          { say: "Sorry, you have wrong number.", good: false, skill: "problem", fixIt: "article" },
          {
            say: "Who is Venkat? Don't disturb me!",
            good: false,
            skill: "problem",
            react: { en: "Oh, sorry! I didn't do it on purpose.", te: "అయ్యో, sorry అండీ! కావాలని చేయలేదు." },
          },
        ],
      },
      {
        partner: "Oh! Which number is this, please?",
        te: "అయ్యో! ఇది ఏ నంబర్ అండీ?",
        hint: { en: "Say it is not Venkat's number, and ask which number he dialled.", te: "ఇది వెంకట్ నంబర్ కాదని చెప్పి, ఆయన ఏ నంబర్‌కి చేశారో అడగండి." },
        replies: [
          { say: "It's not Venkat's number. Which number did you dial?", good: true, skill: "problem" },
          { say: "It's not Venkat's number. Which number you dialled?", good: false, skill: "problem", fixIt: "question" },
        ],
      },
      {
        partner: "Sorry? The line is not clear.",
        te: "ఏంటండీ? లైన్ సరిగ్గా లేదు.",
        hint: { en: "Ask him to say his number again, slowly.", te: "ఆయన నంబర్ మళ్ళీ నెమ్మదిగా చెప్పమని అడగండి." },
        replies: [
          { say: "Please say the number again slowly.", good: true, skill: "problem" },
          { say: "Please tell again slowly the number.", good: false, skill: "problem" },
        ],
      },
      {
        partner: "Oh, my mistake! Sorry to trouble you.",
        te: "అయ్యో, నా పొరపాటే! ఇబ్బంది పెట్టినందుకు sorry అండీ.",
        hint: { en: "Tell him it's okay, and say goodbye.", te: "పర్లేదని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "It's okay, no problem. Bye.", good: true },
          { say: "Okay. Next time check the number properly!", good: false },
        ],
      },
    ],
  },
};
