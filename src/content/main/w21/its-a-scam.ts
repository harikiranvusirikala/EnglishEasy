import type { Lesson } from "../../types";

/**
 * Week 21, Day 5 (CURRICULUM §4): "digital arrest" and prize calls — This is a scam; the police never arrest anyone on a
 * video call; hang up and call 1930 (cyber fraud helpline).
 */
export const day: Lesson = {
  id: "its-a-scam",
  kind: "lesson",
  title: { en: "It's a Scam!", te: "ఇది మోసం!" },
  subtitle: "hang up and call 1930",
  summary: {
    en: "Learn to spot a scam call and stop it: This is a scam. The police never arrest anyone on a video call.",
    te: "మోసపు కాల్‌ని గుర్తించి ఆపడం నేర్చుకుందాం: This is a scam. The police never arrest anyone on a video call.",
  },
  seo: {
    title: "Spotting Scam Calls in English for Telugu Speakers",
    description:
      "Say This is a scam and I will call 1930. Learn that police never arrest anyone on a video call. Simple safety lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "will call", role: "action" },
    { text: "one nine three zero", role: "what" },
  ],
  core: [
    { en: "This is a scam. I'm hanging up.", te: "ఇది మోసం. నేను ఫోన్ పెట్టేస్తున్నాను.", extra: ["hang"] },
    { en: "The police never arrest anyone on a video call.", te: "పోలీసులు ఎవరినీ వీడియో కాల్‌లో అరెస్ట్ చేయరు.", extra: ["arrests"] },
    { en: "I will call one nine three zero.", te: "నేను 1930 కి ఫోన్ చేస్తాను.", extra: ["calling"] },
    { en: "I didn't win any prize.", te: "నేను ఏ బహుమతీ గెలవలేదు.", extra: ["won"] },
    { en: "Hang up and tell someone you trust.", te: "ఫోన్ పెట్టేసి, మీరు నమ్మే వాళ్ళకి చెప్పండి.", extra: ["hanging"] },
    { en: "You won a prize. Pay a small fee first.", te: "మీకు బహుమతి వచ్చింది. ముందు చిన్న ఫీజు కట్టండి.", extra: ["paid"] },
    { en: "Don't send money to strangers.", te: "తెలియని వాళ్ళకి డబ్బు పంపకండి.", extra: ["Not"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Save one nine three zero in your phone as Cyber Fraud Helpline.",
    te: "1930 ని మీ ఫోన్‌లో Cyber Fraud Helpline అని సేవ్ చేసుకోండి.",
  },
  words: [
    { en: "scam", te: "మోసం, స్కామ్" },
    { en: "arrest", te: "అరెస్ట్ చేయడం" },
    { en: "fraud", te: "మోసం, ఫ్రాడ్" },
    { en: "hang up", te: "ఫోన్ పెట్టేయడం, కాల్ కట్ చేయడం" },
    { en: "prize", te: "బహుమతి, ప్రైజ్" },
  ],
  grammar: ["will", "imperatives", "past-simple"],
  topics: ["phone", "money", "bank"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Spot the scam", te: "మోసాన్ని గుర్తించండి" },
      body: {
        en: "Some callers say they are police and threaten you on a video call. This is called digital arrest, and it is never real. Say This is a scam, hang up, and call 1930.",
        te: "కొందరు పోలీసులమని వీడియో కాల్‌లో బెదిరిస్తారు; దీన్ని digital arrest అంటారు, ఇది ఎప్పుడూ నిజం కాదు. This is a scam అని ఫోన్ పెట్టేసి, 1930 కి ఫోన్ చేయండి.",
      },
      bridge: {
        te: ["నేను", "1930 కి", "ఫోన్ చేస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "will call", role: "action" },
          { text: "one nine three zero", role: "what" },
        ],
      },
      examples: [
        { en: "This is a scam. I'm hanging up.", te: "ఇది మోసం. నేను ఫోన్ పెట్టేస్తున్నాను." },
        { en: "The police never arrest anyone on a video call.", te: "పోలీసులు ఎవరినీ వీడియో కాల్‌లో అరెస్ట్ చేయరు." },
        { en: "I will call one nine three zero.", te: "నేను 1930 కి ఫోన్ చేస్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Two common scams", te: "రెండు మామూలు మోసాలు" },
      items: [
        {
          form: "digital arrest",
          useFor: { en: "A fake officer on a video call wants money.", te: "వీడియో కాల్‌లో ఫేక్ ఆఫీసర్ డబ్బు అడుగుతారు." },
          example: { en: "The police never arrest anyone on a video call.", te: "పోలీసులు ఎవరినీ వీడియో కాల్‌లో అరెస్ట్ చేయరు." },
        },
        {
          form: "prize call",
          useFor: { en: "A caller says you won, but you must pay first.", te: "మీరు గెలిచారు అంటారు, కానీ ముందు డబ్బు కట్టమంటారు." },
          example: { en: "You won a prize. Pay a small fee first.", te: "మీకు బహుమతి వచ్చింది. ముందు చిన్న ఫీజు కట్టండి." },
        },
        {
          form: "1930",
          useFor: { en: "The cyber fraud helpline. Call it the same day.", te: "సైబర్ మోసాల హెల్ప్‌లైన్. అదే రోజు ఫోన్ చేయండి." },
          example: { en: "I will call one nine three zero.", te: "నేను 1930 కి ఫోన్ చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Why you are calling me?",
      right: "Why are you calling me?",
      why: {
        en: "In a question, are comes before you, not after it.",
        te: "ప్రశ్నలో are ని you కంటే ముందు పెట్టాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I didn't won any prize.",
      right: "I didn't win any prize.",
      why: {
        en: "After didn't, the verb stays plain: win, not won.",
        te: "didn't తర్వాత verb మారదు: won కాదు, win.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A caller says: You won a prize. Pay a small fee first. What do you do?",
        te: "ఫోన్‌లో ఒకరు You won a prize. Pay a small fee first అంటున్నారు. మీరు ఏం చేస్తారు?",
      },
      options: ["Hang up. It's a scam.", "Pay the fee quickly.", "Give my bank details."],
      answer: 0,
      why: {
        en: "A real prize never asks you to pay money first.",
        te: "నిజమైన బహుమతికి ముందు డబ్బు కట్టమని ఎవరూ అడగరు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "The police never ___ anyone on a video call.",
      te: "పోలీసులు ఎవరినీ వీడియో కాల్‌లో అరెస్ట్ చేయరు.",
      options: ["arrest", "arrests", "arresting"],
      answer: 0,
      why: {
        en: "Police always means many people, so arrest has no s.",
        te: "police అంటే ఎప్పుడూ చాలా మంది, అందుకే arrest కి s రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A man on a video call says: You are under digital arrest. What is this?",
        te: "వీడియో కాల్‌లో ఒకాయన You are under digital arrest అంటున్నారు. ఇది ఏంటి?",
      },
      options: ["A scam. Real police never do this.", "A real arrest. I must pay.", "A bank call about my KYC."],
      answer: 0,
      why: {
        en: "Digital arrest is not real; police never arrest anyone on a call.",
        te: "digital arrest అనేది లేనే లేదు; పోలీసులు ఫోన్‌లో ఎవరినీ అరెస్ట్ చేయరు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The caller say he is a police officer.",
      wrongIndex: 2,
      fix: "The caller says he is a police officer.",
      why: {
        en: "The caller is one person, like he or she, so say takes s.",
        te: "ఫోన్ చేసినాయన ఒక్కరే, he లేదా she లాగా; అందుకే says.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A fake police officer on a video call asks for money. Say it is a scam, and end the call.",
        te: "వీడియో కాల్‌లో ఫేక్ పోలీస్ ఆఫీసర్ డబ్బు అడుగుతున్నారు. ఇది మోసం అని చెప్పి, కాల్ ముగించండి.",
      },
      expected: ["This is a scam. I'm hanging up.", "This is a scam. I am hanging up.", "It's a scam. I'm hanging up."],
      options: ["This is a scam. I'm hanging up.", "This is scam. I'm hanging up.", "Sorry, sir. I will pay now."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You got a fraud call. Say you will call the cyber helpline, one nine three zero.",
        te: "మీకు మోసపు కాల్ వచ్చింది. సైబర్ హెల్ప్‌లైన్ 1930 కి ఫోన్ చేస్తానని చెప్పండి.",
      },
      expected: ["I'll call one nine three zero.", "I will call one nine three zero."],
      options: ["I'll call one nine three zero.", "I'll calling one nine three zero.", "I calling one nine three zero."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A fake police officer", te: "ఫేక్ పోలీస్ ఆఫీసర్" },
    scene: {
      en: "A video call comes from an unknown number. A man in a police uniform starts talking.",
      te: "తెలియని నంబర్ నుంచి వీడియో కాల్ వచ్చింది. పోలీస్ యూనిఫాంలో ఉన్న ఒకాయన మాట్లాడుతున్నారు.",
    },
    partner: { en: "Fake police officer (video call)", te: "ఫేక్ పోలీస్ ఆఫీసర్ (వీడియో కాల్)" },
    voice: "b",
    skills: [
      { id: "scam", label: { en: "Stopping a scam", te: "మోసాన్ని ఆపడం" } },
      { id: "calm", label: { en: "Staying calm", te: "ప్రశాంతంగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "This is the police. You are under digital arrest.",
        te: "పోలీసుల నుంచి మాట్లాడుతున్నాం. మీరు digital arrest లో ఉన్నారు.",
        hint: { en: "Stay calm, and ask why he is calling you.", te: "ప్రశాంతంగా ఉండి, ఎందుకు ఫోన్ చేశారో అడగండి." },
        replies: [
          { say: "Why are you calling me?", good: true, skill: "calm" },
          { say: "Why you are calling me?", good: false, skill: "calm", fixIt: "question" },
        ],
      },
      {
        partner: "Your name is in a case. Pay one lakh now.",
        te: "మీ పేరు ఒక కేసులో ఉంది. ఇప్పుడే లక్ష రూపాయలు కట్టండి.",
        hint: { en: "Refuse, and say what real police never do.", te: "లేదు అని, నిజమైన పోలీసులు ఏం చేయరో చెప్పండి." },
        replies: [
          { say: "No. The police never arrest anyone on a video call.", good: true, skill: "scam" },
          { say: "No. The police never arrests anyone on a video call.", good: false, skill: "scam", fixIt: "plural" },
          {
            say: "Okay, sir. I will pay one lakh now.",
            good: false,
            skill: "scam",
            react: { en: "Good. Send it to this account now.", te: "మంచిది. ఇప్పుడే ఈ అకౌంట్‌కి పంపండి." },
          },
        ],
      },
      {
        partner: "Don't end the call! Don't tell anyone!",
        te: "కాల్ కట్ చేయకండి! ఎవరికీ చెప్పకండి!",
        hint: { en: "Say it is a scam, and end the call.", te: "ఇది మోసం అని చెప్పి, కాల్ ముగించండి." },
        replies: [
          { say: "This is a scam. I'm hanging up now.", good: true, skill: "scam" },
          {
            say: "You are a liar and a thief!",
            good: false,
            skill: "calm",
            react: { en: "Watch your words! I am a police officer!", te: "మాటలు జాగ్రత్త! నేను పోలీస్ ఆఫీసర్‌ని!" },
          },
        ],
      },
      {
        partner: "Wait! Wait! Listen to me!",
        te: "ఆగండి! ఆగండి! నా మాట వినండి!",
        hint: { en: "Say what you will do next, and say goodbye.", te: "ఇప్పుడు ఏం చేస్తారో చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "No. I will call one nine three zero. Goodbye.", good: true, skill: "scam" },
          { say: "No. I will call to one nine three zero. Goodbye.", good: false, skill: "scam", fixIt: "preposition" },
        ],
      },
    ],
  },
};
