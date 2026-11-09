import type { Lesson } from "../../types";

/** Week 4, Day 3 (CURRICULUM §3): name + 's for owning (Ravi's house). */
export const day: Lesson = {
  id: "possessive-s",
  kind: "lesson",
  title: { en: "Ravi's House", te: "ఒకరి వస్తువు ('s)" },
  subtitle: "name + 's",
  summary: {
    en: "Learn to say whose something is with a name and 's: Ravi's house, Sita's bag.",
    te: "పేరు తర్వాత 's చేర్చి ఏదైనా ఎవరిదో చెప్పడం నేర్చుకుందాం: Ravi's house, Sita's bag.",
  },
  seo: {
    title: "Possessive 's in English for Telugu Speakers: Ravi's House",
    description:
      "Say This is Ravi's house and My friend's son is a doctor in English. Simple lessons for Telugu speakers on 's, with Telugu explanations.",
  },
  pattern: [
    { text: "This", role: "who" },
    { text: "is", role: "action" },
    { text: "Ravi's house", role: "what" },
  ],
  core: [
    { en: "This is Ravi's house.", te: "ఇది రవి ఇల్లు.", extra: ["Ravi"] },
    { en: "Sita's bag is red.", te: "సీత బ్యాగ్ ఎర్రగా ఉంది.", extra: ["Sita"] },
    { en: "My friend's son is a doctor.", te: "మా స్నేహితుడి కొడుకు డాక్టర్.", extra: ["friend"] },
    { en: "Is this Padma's phone?", te: "ఇది పద్మ ఫోనా?", extra: ["Padma"] },
    { en: "The doctor's clinic is closed.", te: "డాక్టర్ గారి క్లినిక్ మూసి ఉంది.", extra: ["doctor"] },
    { en: "It is Suresh's car.", te: "అది సురేష్ కారు.", extra: ["Suresh"] },
    { en: "My brother's name is Venkat.", te: "మా అన్నయ్య పేరు వెంకట్.", extra: ["brother"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Point to three things at home and say whose they are: This is …'s phone.",
    te: "ఇంట్లో మూడు వస్తువులు చూపించి, అవి ఎవరివో చెప్పండి: This is …'s phone.",
  },
  words: [
    { en: "house", te: "ఇల్లు" },
    { en: "car", te: "కారు" },
    { en: "clinic", te: "క్లినిక్, ఆసుపత్రి" },
    { en: "red", te: "ఎరుపు" },
    { en: "wedding", te: "పెళ్లి" },
  ],
  grammar: ["have-has-possessives", "am-is-are"],
  topics: ["people", "family"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Name + 's", te: "పేరు + 's" },
      body: {
        en: "In Telugu we say రవి ఇల్లు: the name, then the thing. English does the same, but adds 's to the name: Ravi's house.",
        te: "తెలుగులో 'రవి ఇల్లు' అంటాం: ముందు పేరు, తర్వాత వస్తువు. ఇంగ్లీష్‌లోనూ అదే వరుస, కానీ పేరుకి 's చేర్చాలి: Ravi's house.",
      },
      bridge: {
        te: ["ఇది", "రవి", "ఇల్లు"],
        en: [
          { text: "This", role: "who" },
          { text: "is", role: "action" },
          { text: "Ravi's house", role: "what" },
        ],
      },
      examples: [
        { en: "This is Ravi's house.", te: "ఇది రవి ఇల్లు." },
        { en: "Sita's bag is red.", te: "సీత బ్యాగ్ ఎర్రగా ఉంది." },
        { en: "It is Suresh's car.", te: "అది సురేష్ కారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Where 's goes", te: "'s ఎక్కడ వస్తుంది" },
      items: [
        {
          form: "name + 's",
          useFor: { en: "After a person's name.", te: "ఒకరి పేరు తర్వాత." },
          example: { en: "Is this Padma's phone?", te: "ఇది పద్మ ఫోనా?" },
        },
        {
          form: "friend's, brother's, doctor's",
          useFor: { en: "After a word for a person.", te: "మనిషిని సూచించే పదం తర్వాత." },
          example: { en: "My brother's name is Venkat.", te: "మా అన్నయ్య పేరు వెంకట్." },
        },
        {
          form: "Whose …? → …'s",
          useFor: { en: "To answer a whose question.", te: "whose ప్రశ్నకి జవాబుగా." },
          example: { en: "It is Suresh's car.", te: "అది సురేష్ కారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "This is Ravi house.",
      right: "This is Ravi's house.",
      why: {
        en: "Telugu says రవి ఇల్లు with no ending, but English adds 's: Ravi's house.",
        te: "తెలుగులో 'రవి ఇల్లు' అంటాం, కానీ ఇంగ్లీష్‌లో పేరుకి 's చేర్చాలి: Ravi's house.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "This is the house of Ravi.",
      right: "This is Ravi's house.",
      why: {
        en: "For a person, English uses 's, not of: Ravi's house.",
        te: "మనుషులకి of కాదు, 's వాడతారు: Ravi's house.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["This is Sita bag.", "This is Sita's bag.", "This bag is Sita."],
      answer: 1,
      why: {
        en: "The bag belongs to Sita, so add 's: Sita's bag.",
        te: "బ్యాగ్ సీతది, కాబట్టి పేరుకి 's: Sita's bag.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "That car is ___.",
      te: "ఆ కారు సురేష్‌ది.",
      options: ["Suresh", "Suresh's", "of Suresh"],
      answer: 1,
      why: {
        en: "Telugu సురేష్‌ది becomes Suresh's in English, not of Suresh.",
        te: "తెలుగులో 'సురేష్‌ది' అంటే ఇంగ్లీష్‌లో Suresh's. of Suresh అనరు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Whose phone is this? It belongs to Padma.", te: "ఈ ఫోన్ ఎవరిది? అది పద్మది." },
      options: ["It is Padma's phone.", "It is Padma phone.", "It is the phone of Padma."],
      answer: 0,
      why: {
        en: "Padma's phone: name + 's, then the thing.",
        te: "Padma's phone: పేరు + 's, తర్వాత వస్తువు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "My brother name is Venkat.",
      wrongIndex: 1,
      fix: "My brother's name is Venkat.",
      why: {
        en: "The name belongs to my brother: brother's.",
        te: "పేరు మా అన్నయ్యది: brother's.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A guest asks: Whose house is this? It is your friend Ravi's. Answer.",
        te: "ఒక అతిథి అడుగుతున్నారు: Whose house is this? అది మీ స్నేహితులు రవి గారిది. జవాబు చెప్పండి.",
      },
      expected: ["It is Ravi's house.", "This is Ravi's house."],
      options: ["It is Ravi house.", "It is Ravi's house.", "It is the house of Ravi."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You find a phone. Ask if it is Padma's phone.",
        te: "మీకు ఒక ఫోన్ దొరికింది. అది పద్మదా అని అడగండి.",
      },
      expected: ["Is this Padma's phone?"],
      options: ["Is this Padma phone?", "Is this Padma's phone?", "Padma's phone is this?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Who's who at the wedding", te: "పెళ్లిలో ఎవరెవరు" },
    scene: {
      en: "At your cousin's wedding, Kamala asks you about the people and things she sees.",
      te: "మీ కజిన్ పెళ్లిలో, కమల గారు ఆవిడకి కనిపించే మనుషులు, వస్తువుల గురించి మిమ్మల్ని అడుగుతున్నారు.",
    },
    partner: { en: "Kamala (a guest)", te: "కమల (అతిథి)" },
    skills: [{ id: "owner", label: { en: "name + 's", te: "పేరు + 's" } }],
    turns: [
      {
        partner: "Who is that tall man?",
        te: "ఆ పొడుగ్గా ఉన్న ఆయన ఎవరు?",
        hint: { en: "Say whose brother he is. He is Ravi's.", te: "ఆయన ఎవరి బ్రదరో చెప్పండి: రవి గారి." },
        replies: [
          { say: "He is Ravi's brother.", good: true, skill: "owner" },
          { say: "He is Ravi brother.", good: false, skill: "owner" },
        ],
      },
      {
        partner: "And the woman in the green saree?",
        te: "మరి ఆకుపచ్చ చీరలో ఉన్న ఆవిడ?",
        hint: { en: "Say she is the sister of your friend. Use 's.", te: "ఆవిడ మీ స్నేహితుల చెల్లెలు అని చెప్పండి. 's వాడండి." },
        replies: [
          { say: "She is my friend's sister.", good: true, skill: "owner" },
          { say: "She is my friend sister.", good: false, skill: "owner" },
        ],
      },
      {
        partner: "Whose car is that outside?",
        te: "బయట ఉన్న కారు ఎవరిది?",
        hint: { en: "Say it belongs to the doctor. Use 's.", te: "కారు డాక్టర్ గారిది అని చెప్పండి. 's వాడండి." },
        replies: [
          { say: "It is the doctor's car.", good: true, skill: "owner" },
          { say: "It is the doctor car.", good: false, skill: "owner" },
        ],
      },
      {
        partner: "You know everyone here!",
        te: "ఇక్కడ అందరూ మీకు తెలుసే!",
        hint: { en: "Agree, and say whose wedding it is.", te: "అవునని చెప్పి, ఇది ఎవరి పెళ్లో చెప్పండి." },
        replies: [
          { say: "Yes, it is my cousin's wedding.", good: true, skill: "owner" },
          { say: "Yes, it is my cousin wedding.", good: false, skill: "owner" },
          {
            say: "Of course. Don't you know anyone?",
            good: false,
            react: { en: "Ha ha, no! Only the bride.", te: "హహ, లేదండీ! పెళ్లికూతురు ఒక్కరే తెలుసు." },
          },
        ],
      },
    ],
  },
};
