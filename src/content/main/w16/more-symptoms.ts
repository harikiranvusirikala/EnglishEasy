import type { Lesson } from "../../types";

/** Week 16, Day 1 (CURRICULUM §4): more symptoms — breathless, swollen, itchy, a rash (I feel … / My … is … / I have a …). */
export const day: Lesson = {
  id: "more-symptoms",
  kind: "lesson",
  title: { en: "Symptoms", te: "లక్షణాలు" },
  subtitle: "breathless, swollen, itchy",
  summary: {
    en: "Learn to tell a nurse or doctor more symptoms: I feel breathless on the stairs. My feet are swollen.",
    te: "నర్సుకి, డాక్టర్‌కి మరిన్ని లక్షణాలు చెప్పడం నేర్చుకుందాం: I feel breathless on the stairs. My feet are swollen.",
  },
  seo: {
    title: "Telling Symptoms in English for Telugu Speakers",
    description:
      "Say I feel breathless on the stairs and My feet are swollen. Simple lessons for Telugu speakers on telling a doctor your symptoms.",
  },
  pattern: [
    { text: "My feet", role: "who" },
    { text: "are", role: "action" },
    { text: "swollen", role: "what" },
  ],
  core: [
    { en: "My feet are swollen.", te: "నా పాదాలు వాచాయి.", extra: ["is"] },
    { en: "I feel breathless on the stairs.", te: "మెట్లు ఎక్కుతుంటే నాకు ఆయాసం వస్తుంది.", extra: ["am"] },
    { en: "I have a rash on my arm.", te: "నా చేతి మీద దద్దుర్లు వచ్చాయి.", extra: ["in"] },
    { en: "My skin is very itchy.", te: "నా చర్మం బాగా దురద పెడుతోంది.", extra: ["itching"] },
    { en: "My legs feel weak in the evening.", te: "సాయంత్రం పూట నా కాళ్ళు నీరసంగా ఉంటాయి.", extra: ["feels"] },
    { en: "I get tired very quickly these days.", te: "ఈ మధ్య నేను చాలా త్వరగా అలసిపోతున్నాను.", extra: ["am"] },
    { en: "I have a pain in my chest.", te: "నా ఛాతీలో నొప్పిగా ఉంది.", extra: ["on"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say how your body feels today in one English sentence: I feel … or My … is ….",
    te: "ఈ రోజు మీ ఒంట్లో ఎలా ఉందో ఒక ఇంగ్లీష్ వాక్యంలో చెప్పుకోండి: I feel … లేదా My … is ….",
  },
  words: [
    { en: "symptoms", te: "లక్షణాలు" },
    { en: "breathless", te: "ఆయాసంగా, ఊపిరి ఆడనట్టు" },
    { en: "swollen", te: "వాచిన, వాపు" },
    { en: "itchy", te: "దురదగా" },
    { en: "rash", te: "దద్దుర్లు" },
  ],
  grammar: ["am-is-are", "have-has-possessives"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Telling a symptom", te: "లక్షణం చెప్పడం" },
      body: {
        en: "Tell a symptom in one of three ways: I feel breathless. I have a rash. My feet are swollen. Feet means two, so use are.",
        te: "లక్షణం మూడు రకాలుగా చెప్పొచ్చు: I feel breathless. I have a rash. My feet are swollen. feet అంటే రెండు పాదాలు, అందుకే are.",
      },
      bridge: {
        te: ["నా పాదాలు", "వాచాయి"],
        en: [
          { text: "My feet", role: "who" },
          { text: "are", role: "action" },
          { text: "swollen", role: "what" },
        ],
      },
      examples: [
        { en: "My feet are swollen.", te: "నా పాదాలు వాచాయి." },
        { en: "I feel breathless on the stairs.", te: "మెట్లు ఎక్కుతుంటే నాకు ఆయాసం వస్తుంది." },
        { en: "I have a pain in my chest.", te: "నా ఛాతీలో నొప్పిగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which way to say it", te: "ఏ రకంగా చెప్పాలి" },
      items: [
        {
          form: "I feel …",
          useFor: { en: "How your whole body feels.", te: "ఒళ్ళంతా ఎలా ఉందో చెప్పడానికి." },
          example: { en: "I feel breathless on the stairs.", te: "మెట్లు ఎక్కుతుంటే నాకు ఆయాసం వస్తుంది." },
        },
        {
          form: "I have a …",
          useFor: { en: "Something you can see or name: a rash, a pain.", te: "కనిపించేది, పేరున్నది: దద్దుర్లు, నొప్పి." },
          example: { en: "I have a rash on my arm.", te: "నా చేతి మీద దద్దుర్లు వచ్చాయి." },
        },
        {
          form: "My … is / are …",
          useFor: { en: "One part of the body: is for one, are for two or more.", te: "ఒంట్లో ఒక భాగం గురించి: ఒకటైతే is, ఎక్కువైతే are." },
          example: { en: "My skin is very itchy.", te: "నా చర్మం బాగా దురద పెడుతోంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "My feet swollen.",
      right: "My feet are swollen.",
      why: {
        en: "In Telugu వాచాయి is enough, but English needs are before swollen.",
        te: "తెలుగులో 'వాచాయి' ఒక్కటే చాలు; ఇంగ్లీష్‌లో swollen ముందు are తప్పనిసరి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I have rash on my arm.",
      right: "I have a rash on my arm.",
      why: {
        en: "Telugu has no word like a, but English puts a before a rash or a pain.",
        te: "తెలుగులో a లాంటి పదం లేదు; ఇంగ్లీష్‌లో rash, pain ముందు a వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "Your feet look bigger than usual. What do you tell the nurse?",
        te: "మీ పాదాలు మామూలు కంటే పెద్దగా కనిపిస్తున్నాయి. నర్సుకి ఏం చెప్తారు?",
      },
      options: ["My feet are swollen.", "My feet is swollen.", "My foots are swollen."],
      answer: 0,
      why: {
        en: "Feet means two, so use are; one foot, two feet, never foots.",
        te: "feet అంటే రెండు పాదాలు, అందుకే are. ఒకటి foot, రెండు feet; foots అనరు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I feel breathless ___ the stairs.",
      te: "మెట్లు ఎక్కుతుంటే నాకు ఆయాసం వస్తుంది.",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "Telugu needs no small word here; English uses on for stairs, like on the road.",
        te: "తెలుగులో ఇక్కడ చిన్న పదం అక్కర్లేదు; ఇంగ్లీష్‌లో మెట్లకి on, on the road లాగే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You want to scratch your arm all the time. What do you say?",
        te: "మీకు చేయి ఎప్పుడూ గోక్కోవాలనిపిస్తోంది. ఏమంటారు?",
      },
      options: ["My arm is very itchy.", "My arm is very itching.", "My arm is very swollen."],
      answer: 0,
      why: {
        en: "Itchy describes the skin, like hot or cold; very goes with itchy, never with itching.",
        te: "itchy అంటే దురదగా ఉంది (hot, cold లాగా); very తర్వాత itching రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "My legs feels weak in the evening.",
      wrongIndex: 2,
      fix: "My legs feel weak in the evening.",
      why: {
        en: "Legs means more than one, so feel takes no s; only he, she or it adds s.",
        te: "legs అంటే రెండు, కాబట్టి feel కి s రాదు; he, she, it కి మాత్రమే s.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell the nurse you can't breathe easily when you climb stairs.",
        te: "మెట్లు ఎక్కుతుంటే ఆయాసం వస్తుందని నర్సుకి చెప్పండి.",
      },
      expected: ["I feel breathless on the stairs.", "I get breathless on the stairs."],
      options: ["I feel breathless on the stairs.", "I breathless on the stairs.", "I feel breathless in the stairs."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Show the nurse the red marks on your arm, and name them.",
        te: "చేతి మీద ఎర్రటి మచ్చలు నర్సుకి చూపించి, అవి ఏంటో చెప్పండి.",
      },
      expected: ["I have a rash on my arm.", "There is a rash on my arm."],
      options: ["I have a rash on my arm.", "I have rash on my arm.", "I have a rash in my arm."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Telling the nurse", te: "నర్సుకి చెప్పడం" },
    scene: {
      en: "You are at the hospital. Joseph, the nurse, asks about your problem before the doctor sees you.",
      te: "మీరు ఆసుపత్రిలో ఉన్నారు. డాక్టర్ చూసే ముందు నర్సు జోసెఫ్ మీ సమస్య గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Joseph (nurse)", te: "జోసెఫ్ (నర్సు)" },
    voice: "b",
    skills: [{ id: "symptom", label: { en: "Telling symptoms", te: "లక్షణాలు చెప్పడం" } }],
    turns: [
      {
        partner: "Good morning. Please sit. What's the problem today?",
        te: "నమస్కారం. కూర్చోండి. ఈ రోజు ఏంటి సమస్య?",
        hint: { en: "Greet him, and say you get out of breath when you climb.", te: "నమస్కారం చెప్పి, మెట్లు ఎక్కితే ఆయాసం వస్తుందని చెప్పండి." },
        replies: [
          { say: "Good morning. I feel breathless on the stairs.", good: true, skill: "symptom" },
          { say: "Good morning. I feel breathless in the stairs.", good: false, skill: "symptom", fixIt: "preposition" },
        ],
      },
      {
        partner: "I see. Do you have any other problems?",
        te: "అలాగా. ఇంకేమైనా సమస్యలు ఉన్నాయా?",
        hint: { en: "Say your feet look big and puffy.", te: "మీ పాదాలు వాచాయని చెప్పండి." },
        replies: [
          { say: "Yes, my feet are swollen.", good: true, skill: "symptom" },
          { say: "Yes, my feet swollen.", good: false, skill: "symptom", fixIt: "be" },
        ],
      },
      {
        partner: "Let me see. Yes, they are. Anything else?",
        te: "చూడనివ్వండి. అవును, వాచాయి. ఇంకేమైనా?",
        hint: { en: "Show your arm. Name the red marks, and say how they feel.", te: "చేయి చూపించి, దద్దుర్లు వచ్చాయని, దురదగా ఉందని చెప్పండి." },
        replies: [
          { say: "I have a rash on my arm. It's very itchy.", good: true, skill: "symptom" },
          { say: "I have rash on my arm. Very itching.", good: false, skill: "symptom", fixIt: "article" },
          {
            say: "Just look and give me some cream, quickly.",
            good: false,
            skill: "symptom",
            react: { en: "The doctor will decide that. First, I'll note it.", te: "అది డాక్టర్ గారు నిర్ణయిస్తారు. ముందు నేను రాసుకుంటాను." },
          },
        ],
      },
      {
        partner: "Okay. Please wait. The doctor will see you soon.",
        te: "సరే. కాసేపు ఆగండి. డాక్టర్ గారు త్వరలో చూస్తారు.",
        hint: { en: "Say okay, thank him, and say you'll wait.", te: "సరే అని, ఆయనకి థాంక్స్ చెప్పి, ఇక్కడే ఆగుతానని చెప్పండి." },
        replies: [
          { say: "Okay, thank you. I'll wait here.", good: true },
          { say: "Okay, thank you. I'll waiting here.", good: false },
        ],
      },
    ],
  },
};
