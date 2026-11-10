import type { Lesson } from "../../types";

/** Week 4, Day 3 (CURRICULUM §3): Whose …? and name + 's for owning (Ravi's house). Whose folded in from the retired who-and-whose (2026-11-10). */
export const day: Lesson = {
  id: "possessive-s",
  kind: "lesson",
  title: { en: "Whose Is It? Ravi's", te: "ఎవరిది? రవి గారిది" },
  subtitle: "Whose …? + name + 's",
  summary: {
    en: "Learn to ask whose something is with whose, and to answer with a name and 's: Ravi's house, Sita's bag.",
    te: "ఏదైనా ఎవరిదో whose తో అడగడం, పేరు తర్వాత 's చేర్చి జవాబు చెప్పడం నేర్చుకుందాం: Ravi's house, Sita's bag.",
  },
  seo: {
    title: "Whose and Possessive 's in English for Telugu Speakers",
    description:
      "Ask Whose bag is this? and say This is Ravi's house in English. Simple lessons for Telugu speakers on whose and 's, with Telugu explanations.",
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
    { en: "Whose bag is this?", te: "ఇది ఎవరి బ్యాగ్?", extra: ["Who"] },
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
    { en: "whose", te: "ఎవరి, ఎవరిది" },
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
          form: "Whose + thing?",
          useFor: {
            en: "Whose asks who owns a thing, and the thing comes right after it.",
            te: "వస్తువు ఎవరిదో అడగడానికి whose; whose తర్వాత వెంటనే ఆ వస్తువు వస్తుంది.",
          },
          example: { en: "Whose bag is this?", te: "ఇది ఎవరి బ్యాగ్?" },
        },
        {
          form: "…'s, alone",
          useFor: { en: "In a short answer, you can leave out the thing.", te: "చిన్న జవాబులో వస్తువు పేరు వదిలేయొచ్చు." },
          example: { en: "Whose car is that? It's Suresh's.", te: "ఆ కారు ఎవరిది? సురేష్ గారిది." },
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
      wrong: "Who is this bag?",
      right: "Whose bag is this?",
      why: {
        en: "Who asks about a person. To ask about the owner, say whose, then the thing: Whose bag is this?",
        te: "who మనిషి గురించి. వస్తువు ఎవరిదో అడగాలంటే whose, తర్వాత ఆ వస్తువు: Whose bag is this?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "You find a bag on a chair. What do you ask?", te: "కుర్చీ మీద ఒక బ్యాగ్ కనిపించింది. ఏమని అడుగుతారు?" },
      options: ["Who bag is this?", "Whose bag is this?", "Whose this bag is?"],
      answer: 1,
      why: {
        en: "Whose asks about the owner, the thing comes right after it, then is: Whose bag is this?",
        te: "యజమాని గురించి whose; దాని తర్వాత వెంటనే వస్తువు, తర్వాత is: Whose bag is this?",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "label",
      heading: "Parcel",
      lines: ["To: Mohan Rao", "Door No. 12, Gandhi Road, Vijayawada", "From: Kavitha, Hyderabad"],
      prompt: { en: "You find this parcel at the gate. Whose parcel is it?", te: "గేట్ దగ్గర ఈ పార్సెల్ దొరికింది. ఇది ఎవరిది?" },
      options: ["It's Mohan's.", "It's Kavitha's.", "It's Mohan."],
      answer: 0,
      why: {
        en: "The parcel belongs to the name after To, and we add 's to it: It's Mohan's.",
        te: "To తర్వాత ఉన్న పేరు వారిదే పార్సెల్; ఆ పేరుకి 's కలపాలి: It's Mohan's.",
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
      fixIt: "question",
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
