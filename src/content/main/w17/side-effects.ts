import type { Lesson } from "../../types";

/** Week 17, Day 5 (CURRICULUM §4): describing side effects — It makes me sleepy. Is that normal? */
export const day: Lesson = {
  id: "side-effects",
  kind: "lesson",
  title: { en: "It Makes Me Sleepy", te: "సైడ్ ఎఫెక్ట్స్" },
  subtitle: "It makes me …",
  summary: {
    en: "Learn to tell the doctor about side effects: This tablet makes me sleepy. Is that normal?",
    te: "మందుల సైడ్ ఎఫెక్ట్స్ గురించి డాక్టర్‌కి చెప్పడం నేర్చుకుందాం: This tablet makes me sleepy. Is that normal?",
  },
  seo: {
    title: "Side Effects of Medicines in English for Telugu Speakers",
    description:
      "Say This tablet makes me sleepy. Is that normal? Simple lessons for Telugu speakers on telling the doctor about side effects.",
  },
  pattern: [
    { text: "This tablet", role: "who" },
    { text: "makes", role: "action" },
    { text: "me sleepy", role: "what" },
  ],
  core: [
    { en: "This tablet makes me sleepy.", te: "ఈ మాత్ర వేసుకుంటే నాకు నిద్ర వస్తుంది.", extra: ["make"] },
    { en: "Is that normal, doctor?", te: "డాక్టర్, అది మామూలేనా?", extra: ["Are"] },
    { en: "I took it this morning.", te: "ఈ రోజు ఉదయం వేసుకున్నాను.", extra: ["today"] },
    { en: "I have an upset stomach after this tablet.", te: "ఈ మాత్ర వేసుకున్నాక కడుపు బాగాలేదు.", extra: ["a"] },
    { en: "Should I stop the tablet?", te: "మాత్ర ఆపేయాలా?", extra: ["stopping"] },
    { en: "I have an allergy to this medicine.", te: "నాకు ఈ మందు allergy.", extra: ["with"] },
    { en: "Don't worry. It will go away in two days.", te: "కంగారు పడకండి. రెండు రోజుల్లో తగ్గిపోతుంది.", extra: ["goes"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Say one thing that makes you sleepy, in English: Hot food makes me sleepy.",
    te: "మీకు నిద్ర తెప్పించే ఒక విషయం ఇంగ్లీష్‌లో చెప్పండి: Hot food makes me sleepy.",
  },
  words: [
    { en: "side effect", te: "సైడ్ ఎఫెక్ట్, మందు వల్ల వచ్చే ఇబ్బంది" },
    { en: "sleepy", te: "నిద్ర మత్తుగా" },
    { en: "normal", te: "మామూలు" },
    { en: "allergy", te: "allergy, పడకపోవడం" },
    { en: "upset stomach", te: "కడుపు బాగాలేకపోవడం" },
  ],
  grammar: ["present-simple", "should-must-have-to"],
  topics: ["pharmacy", "health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "It makes me …", te: "It makes me … (నాకు … అవుతుంది)" },
      body: {
        en: "To say what a medicine does to you, say It makes me and how you feel: It makes me sleepy. Then ask Is that normal?",
        te: "మందు వల్ల ఎలా ఉందో చెప్పాలంటే It makes me తర్వాత మీకు ఎలా ఉందో చెప్పండి: It makes me sleepy. తర్వాత Is that normal? (ఇది మామూలేనా?) అని అడగండి.",
      },
      bridge: {
        te: ["ఈ మాత్ర వేసుకుంటే", "నాకు", "నిద్ర వస్తుంది"],
        en: [
          { text: "This tablet", role: "who" },
          { text: "makes", role: "action" },
          { text: "me sleepy", role: "what" },
        ],
      },
      examples: [
        { en: "This tablet makes me sleepy.", te: "ఈ మాత్ర వేసుకుంటే నాకు నిద్ర వస్తుంది." },
        { en: "I have an upset stomach after this tablet.", te: "ఈ మాత్ర వేసుకున్నాక కడుపు బాగాలేదు." },
        { en: "I have an allergy to this medicine.", te: "నాకు ఈ మందు allergy." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Talking about side effects", te: "సైడ్ ఎఫెక్ట్స్ గురించి చెప్పడం" },
      items: [
        {
          form: "It makes me …",
          useFor: { en: "How the medicine makes you feel.", te: "మందు వల్ల మీకు ఎలా అనిపిస్తుందో." },
          example: { en: "This syrup makes me dizzy.", te: "ఈ సిరప్ తాగితే నాకు కళ్ళు తిరుగుతాయి." },
        },
        {
          form: "I have …",
          useFor: { en: "A problem in your body.", te: "ఒంట్లో ఏదైనా ఇబ్బంది." },
          example: { en: "I have an upset stomach after this tablet.", te: "ఈ మాత్ర వేసుకున్నాక కడుపు బాగాలేదు." },
        },
        {
          form: "Is that normal?",
          useFor: { en: "Asking if it is okay or a worry.", te: "ఇది మామూలేనా, భయపడాలా అని అడగడానికి." },
          example: { en: "Is that normal, doctor?", te: "డాక్టర్, అది మామూలేనా?" },
        },
        {
          form: "Should I stop …?",
          useFor: { en: "Ask first. Never stop a medicine on your own.", te: "ముందు అడగండి. మీ అంతట మీరు మందు ఆపకండి." },
          example: { en: "Should I stop the tablet?", te: "మాత్ర ఆపేయాలా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I took it today morning.",
      right: "I took it this morning.",
      why: {
        en: "Today morning is heard only in India; English says this morning.",
        te: "today morning అనేది మన దగ్గరే; ఇంగ్లీష్‌లో this morning అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "It normal, doctor?",
      right: "Is it normal, doctor?",
      why: {
        en: "Telugu మామూలేనా? needs no verb, but this English question needs is first.",
        te: "తెలుగులో 'మామూలేనా?' కి verb అక్కర్లేదు; ఇంగ్లీష్ ప్రశ్నకు ముందు is కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You get a rash after a new tablet. Tell the doctor.", te: "కొత్త మాత్ర వేసుకున్నాక ఒంటి మీద దద్దుర్లు వచ్చాయి. డాక్టర్‌కి చెప్పండి." },
      options: ["I have an allergy to this tablet.", "I am allergy to this tablet.", "This tablet is allergy for me."],
      answer: 0,
      why: {
        en: "Allergy is something you have, so it goes with I have.",
        te: "allergy అనేది మనకు ఉండేది; అందుకే I have తో చెప్పాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Should I ___ the tablet?",
      te: "మాత్ర ఆపేయాలా?",
      options: ["stop", "stopping", "stopped"],
      answer: 0,
      why: {
        en: "After should, the action word stays plain, with no -ing.",
        te: "should తర్వాత verb మారదు; -ing రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The doctor says: It will go away in two days. What does it mean?",
        te: "డాక్టర్ It will go away in two days అన్నారు. అంటే ఏంటి?",
      },
      options: ["The problem will stop soon.", "You have to leave for two days.", "Take the tablet for two more days."],
      answer: 0,
      why: {
        en: "Here go away means the problem will stop by itself.",
        te: "ఇక్కడ go away అంటే ఇబ్బంది దానంతట అదే తగ్గిపోతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "This syrup make me dizzy.",
      wrongIndex: 2,
      fix: "This syrup makes me dizzy.",
      why: {
        en: "Syrup is one thing, like he or she, so make takes s.",
        te: "syrup ఒక్కటే (he, she లాగా), అందుకే make కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Tell the doctor you took the new tablet this morning.",
        te: "కొత్త మాత్ర ఈ రోజు ఉదయం వేసుకున్నానని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["I took it this morning.", "I took the new tablet this morning."],
      options: ["I took it this morning.", "I took it today morning.", "I am taking it this morning."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the doctor if feeling sleepy is normal.",
        te: "నిద్ర రావడం మామూలేనా అని డాక్టర్‌ని అడగండి.",
      },
      expected: ["Is that normal, doctor?", "Is that normal?", "Is it normal?"],
      options: ["Is that normal, doctor?", "That is normal, doctor?", "Is normal that, doctor?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling the doctor", te: "డాక్టర్‌కి ఫోన్ చేయడం" },
    scene: {
      en: "Your new tablet makes you sleepy all day. You call Dr Anitha.",
      te: "కొత్త మాత్ర వల్ల మీకు రోజంతా నిద్ర వస్తోంది. మీరు డాక్టర్ అనితకి ఫోన్ చేశారు.",
    },
    partner: { en: "Dr Anitha (doctor, on the phone)", te: "డాక్టర్ అనిత (ఫోన్‌లో)" },
    skills: [
      { id: "tell", label: { en: "Telling side effects", te: "సైడ్ ఎఫెక్ట్స్ చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello, Dr Anitha here. Tell me.",
        te: "హలో, డాక్టర్ అనిత మాట్లాడుతున్నాను. చెప్పండి.",
        hint: { en: "Say your name, and that you have a small problem.", te: "మీ పేరు చెప్పి, చిన్న సమస్య ఉందని చెప్పండి." },
        replies: [
          { say: "Hello doctor, this is Kiran. I have a small problem.", good: true, skill: "polite" },
          {
            say: "Doctor, your tablet is very bad!",
            good: false,
            skill: "polite",
            react: { en: "Please don't worry. Tell me what happened.", te: "కంగారు పడకండి. ఏం జరిగిందో చెప్పండి." },
          },
        ],
      },
      {
        partner: "Okay. What is the problem?",
        te: "సరే. సమస్య ఏంటి?",
        hint: { en: "Say the new tablet makes you sleepy all day.", te: "కొత్త మాత్ర వల్ల రోజంతా నిద్ర వస్తోందని చెప్పండి." },
        replies: [
          { say: "The new tablet makes me sleepy all day.", good: true, skill: "tell" },
          { say: "The new tablet make me sleepy all day.", good: false, skill: "tell", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "I see. When did you start it?",
        te: "అలాగా. ఎప్పుడు మొదలుపెట్టారు?",
        hint: { en: "Say it was three days ago, and ask if this is normal.", te: "మూడు రోజుల క్రితం అని చెప్పి, ఇది మామూలేనా అని అడగండి." },
        replies: [
          { say: "Three days ago. Is that normal?", good: true, skill: "tell" },
          { say: "Three days back. That is normal?", good: false, skill: "tell" },
        ],
      },
      {
        partner: "Yes, it's common. Don't stop it. Take it at night.",
        te: "అవును, ఇది మామూలే. ఆపకండి. రాత్రి వేసుకోండి.",
        hint: { en: "Say okay, and thank the doctor.", te: "సరే అని చెప్పి, డాక్టర్‌కి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll take it at night. Thank you, doctor.", good: true, skill: "polite" },
          { say: "Okay, I'll take it in night. Thank you.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
