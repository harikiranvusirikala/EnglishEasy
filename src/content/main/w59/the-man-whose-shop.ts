import type { Lesson } from "../../types";

/** Week 59, Day 3 (CURRICULUM §5): whose for people and their things — Mohan is the man whose shop is near the temple. */
export const day: Lesson = {
  id: "the-man-whose-shop",
  kind: "lesson",
  title: { en: "The Man Whose Shop Is Near the Temple", te: "గుడి దగ్గర షాపున్న ఆయన" },
  subtitle: "whose for people and their things",
  summary: {
    en: "Learn to point people out by what they have: Mohan is the man whose shop is near the temple.",
    te: "మనుషులని వారికి ఉన్నదాన్ని బట్టి చూపించడం నేర్చుకుందాం: Mohan is the man whose shop is near the temple.",
  },
  seo: {
    title: "Whose for People in English for Telugu Speakers",
    description:
      "Say Mohan is the man whose shop is near the temple. Simple lessons for Telugu speakers on whose for people and their things.",
  },
  pattern: [
    { text: "Mohan", role: "who" },
    { text: "is", role: "action" },
    { text: "the man whose shop", role: "what" },
    { text: "is near the temple", role: "what" },
  ],
  core: [
    { en: "Mohan is the man whose shop is near the temple.", te: "మోహన్ గారంటే గుడి దగ్గర షాపున్న ఆయన.", extra: ["his"] },
    { en: "I met a lady whose tailoring class is very popular.", te: "టైలరింగ్ క్లాస్ బాగా పాపులర్ అయిన ఒకావిడని కలిశాను.", extra: ["who"] },
    { en: "Do you know the man whose car is parked outside?", te: "బయట కారు పార్క్ చేసిన ఆయన మీకు తెలుసా?", extra: ["park"] },
    { en: "Fatima is the lady whose shop sells the best bangles.", te: "అన్నిటికంటే మంచి గాజులు అమ్మే షాపు ఫాతిమా గారిదే.", extra: ["sell"] },
    { en: "The man whose house is next to ours is a retired engineer.", te: "మా ఇంటి పక్కన ఇల్లున్న ఆయన రిటైర్డ్ ఇంజనీర్.", extra: ["our"] },
    { en: "Imran is the man whose biryani everyone loves.", te: "అందరూ ఇష్టపడే బిర్యానీ చేసేది ఇమ్రాన్ గారే.", extra: ["love"] },
    { en: "She's the lady whose name I always forget.", te: "ఈవిడ పేరే నేను ఎప్పుడూ మర్చిపోతుంటాను.", extra: ["her"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Point out one neighbour or shopkeeper in your mind, and say: … is the person whose …",
    te: "మీకు తెలిసిన ఒక పక్కింటివారిని గానీ షాపువారిని గానీ గుర్తు చేసుకుని ఇలా చెప్పండి: … is the person whose …",
  },
  words: [
    { en: "popular", te: "పాపులర్, అందరికీ నచ్చిన" },
    { en: "owner", te: "యజమాని, ఓనర్" },
    { en: "point out", te: "చూపించడం, వేలు పెట్టి చూపడం" },
    { en: "chief guest", te: "ముఖ్య అతిథి" },
    { en: "organiser", te: "నిర్వాహకులు, ఏర్పాట్లు చూసేవారు" },
  ],
  grammar: ["relative-clauses", "have-has-possessives", "comparatives-superlatives"],
  topics: ["neighbours", "people", "festivals"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "whose for a person and their thing", te: "మనిషి, వారి వస్తువు: whose" },
      body: {
        en: "Whose joins a person and something they have: the man whose shop is near the temple. Whose takes the place of his or her.",
        te: "whose ఒక మనిషిని, వారికి ఉన్నదాన్ని కలుపుతుంది: the man whose shop is near the temple (గుడి దగ్గర షాపున్న ఆయన). his, her బదులు whose వస్తుంది.",
      },
      bridge: {
        te: ["మోహన్ గారంటే", "గుడి దగ్గర", "షాపున్న", "ఆయన"],
        en: [
          { text: "Mohan", role: "who" },
          { text: "is", role: "action" },
          { text: "the man whose shop", role: "what" },
          { text: "is near the temple", role: "what" },
        ],
      },
      examples: [
        { en: "Mohan is the man whose shop is near the temple.", te: "మోహన్ గారంటే గుడి దగ్గర షాపున్న ఆయన." },
        { en: "I met a lady whose tailoring class is very popular.", te: "టైలరింగ్ క్లాస్ బాగా పాపులర్ అయిన ఒకావిడని కలిశాను." },
        { en: "Fatima is the lady whose shop sells the best bangles.", te: "అన్నిటికంటే మంచి గాజులు అమ్మే షాపు ఫాతిమా గారిదే." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "who, whose or which", te: "who, whose, which ఎప్పుడు" },
      items: [
        {
          form: "who + verb",
          useFor: { en: "A person and what they do.", te: "ఒక మనిషి, వారు చేసే పని." },
          example: { en: "Srinivas is the man who runs the kirana shop.", te: "కిరాణా షాపు నడిపేది శ్రీనివాస్ గారే." },
        },
        {
          form: "whose + thing",
          useFor: { en: "A person and what they have.", te: "ఒక మనిషి, వారికి ఉన్నది." },
          example: { en: "Imran is the man whose biryani everyone loves.", te: "అందరూ ఇష్టపడే బిర్యానీ చేసేది ఇమ్రాన్ గారే." },
        },
        {
          form: "Whose … is this?",
          useFor: { en: "A question: who is the owner?", te: "ప్రశ్న: ఇది ఎవరిది, ఓనర్ ఎవరు?" },
          example: { en: "Whose car is parked outside?", te: "బయట పార్క్ చేసిన కారు ఎవరిది?" },
        },
        {
          form: "which + verb",
          useFor: { en: "A thing or a shop, and what it does.", te: "ఒక వస్తువు గానీ షాపు గానీ, అది చేసే పని." },
          example: { en: "That's the shop which opened last week.", te: "పోయిన వారం తెరిచిన షాపు అదే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Mohan is the man who his shop is near the temple.",
      right: "Mohan is the man whose shop is near the temple.",
      why: {
        en: "Telugu says ఆయన షాపు, but in English whose already means his, so do not add his.",
        te: "తెలుగులో 'ఆయన షాపు' అంటాం; ఇంగ్లీష్‌లో whose అంటేనే his, అందుకే మళ్ళీ his చేర్చకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "Sita is the lady whose tailoring class very popular.",
      right: "Sita is the lady whose tailoring class is very popular.",
      why: {
        en: "Telugu క్లాస్ పాపులర్ needs no verb, but English needs is after the class.",
        te: "తెలుగులో 'క్లాస్ పాపులర్' అంటే చాలు; ఇంగ్లీష్‌లో class తర్వాత is తప్పకుండా కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "At a function, a friend asks who Mohan is. His shop is near the temple. What do you say?",
        te: "ఒక ఫంక్షన్‌లో మోహన్ గారు ఎవరని స్నేహితులు అడిగారు. ఆయన షాపు గుడి దగ్గర ఉంది. ఏమంటారు?",
      },
      options: [
        "He's the man whose shop is near the temple.",
        "He's the man who his shop is near the temple.",
        "He's the man whose shop near the temple.",
      ],
      answer: 0,
      why: {
        en: "Whose already means his, and the shop part still needs is.",
        te: "whose అంటేనే his; షాపు గురించి చెప్పే భాగంలో is కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I met a lady ___ tailoring class is very popular.",
      te: "టైలరింగ్ క్లాస్ బాగా పాపులర్ అయిన ఒకావిడని కలిశాను.",
      options: ["whose", "who", "her"],
      answer: 0,
      why: {
        en: "The class belongs to the lady, so use whose; who needs an action word after it.",
        te: "క్లాస్ ఆవిడది కాబట్టి whose; who తర్వాత ఒక పని (verb) రావాలి.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Green Park Colony",
      lines: [
        "Usha: Thank you all for coming to the function!",
        "A black umbrella was left near the stage.",
        "The person whose umbrella it is can collect it from me.",
        "I'm in flat 12, next to the lift.",
      ],
      prompt: {
        en: "Usha sent this to the colony group. What should the umbrella's owner do?",
        te: "ఉష గారు కాలనీ గ్రూప్‌లో ఇది పంపారు. గొడుగు ఓనర్ ఏం చేయాలి?",
      },
      options: ["Collect it from Usha's flat", "Look for it near the stage", "Buy a new umbrella"],
      answer: 0,
      why: {
        en: "The third line asks the owner to collect it, and the last line gives her flat.",
        te: "మూడో లైన్‌లో ఓనర్‌ని వచ్చి తీసుకెళ్ళమని ఉంది; చివరి లైన్‌లో ఆవిడ ఫ్లాట్ నంబర్ ఉంది.",
      },
      say: "The person whose umbrella it is can collect it from me.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Fatima is the lady whose shop sell the best bangles.",
      wrongIndex: 6,
      fix: "Fatima is the lady whose shop sells the best bangles.",
      why: {
        en: "One shop is like he or she, so sell takes s here.",
        te: "ఒక్క షాపు he, she లాంటిది, అందుకే sell కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "A white car is blocking your gate. Ask the people near you about its owner.",
        te: "ఒక తెల్ల కారు మీ గేటుకి అడ్డంగా ఉంది. దాని ఓనర్ గురించి దగ్గర్లో ఉన్నవారిని అడగండి.",
      },
      expected: [
        "Do you know the man whose car is parked outside?",
        "Whose car is parked outside?",
        "Do you know whose car this is?",
        "Excuse me, whose car is this?",
      ],
      options: [
        "Do you know the man whose car is parked outside?",
        "You know the man whose car is parked outside?",
        "Do you know the man whose car parked outside?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A friend asks who the chief guest is. It is Dr Rahim, whose clinic is on Main Road. Tell her.",
        te: "ముఖ్య అతిథి ఎవరని స్నేహితురాలు అడుగుతున్నారు. మెయిన్ రోడ్‌లో క్లినిక్ ఉన్న డాక్టర్ రహీమ్ గారు. ఆవిడకి చెప్పండి.",
      },
      expected: [
        "The chief guest is Dr Rahim, whose clinic is on Main Road.",
        "It's Dr Rahim, whose clinic is on Main Road.",
        "It's Dr Rahim. His clinic is on Main Road.",
      ],
      options: [
        "The chief guest is Dr Rahim, whose clinic is on Main Road.",
        "Chief guest is Dr Rahim, whose clinic is on Main Road.",
        "The chief guest is Dr Rahim, who his clinic is on Main Road.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Who's who at the function", te: "ఫంక్షన్‌లో ఎవరెవరు" },
    scene: {
      en: "It is your colony's Sankranti function. Joseph moved in last week, and he doesn't know anyone yet.",
      te: "మీ కాలనీ సంక్రాంతి ఫంక్షన్ జరుగుతోంది. జోసెఫ్ గారు పోయిన వారమే వచ్చారు, ఇంకా ఆయనకి ఎవరూ తెలీదు.",
    },
    partner: { en: "Joseph (a new neighbour)", te: "జోసెఫ్ (కొత్త పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "point", label: { en: "Pointing people out", te: "మనుషులని చూపించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm Joseph. I moved in last week. I don't know anyone here.",
        te: "హలో! నేను జోసెఫ్. పోయిన వారమే ఇక్కడికి వచ్చాను. ఇక్కడ నాకు ఎవరూ తెలీదు.",
        hint: { en: "Welcome him, and say your own name.", te: "ఆయనకి స్వాగతం చెప్పి, మీ పేరు చెప్పండి." },
        replies: [
          { say: "Welcome! I'm Sai. Nice to meet you.", good: true, skill: "polite" },
          { say: "Welcome! Myself Sai. Nice to meet you.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Nice to meet you too. Who is that man near the stage?",
        te: "మిమ్మల్ని కలవడం నాకూ సంతోషం. స్టేజ్ దగ్గర ఉన్న ఆయన ఎవరు?",
        hint: { en: "Say he is Mohan, and say where his shop is.", te: "ఆయన మోహన్ గారని, ఆయన షాపు ఎక్కడుందో చెప్పండి." },
        replies: [
          { say: "That's Mohan. He's the man whose shop is near the temple.", good: true, skill: "point" },
          { say: "That's Mohan, whose shop is near the temple.", good: true, skill: "point" },
          { say: "That's Mohan. He's the man who his shop is near the temple.", good: false, skill: "point" },
        ],
      },
      {
        partner: "And the lady in the green saree? She seems to be the organiser.",
        te: "మరి ఆకుపచ్చ చీరలో ఉన్న ఆవిడ? ఆవిడే ఏర్పాట్లు చూస్తున్నట్టున్నారు.",
        hint: { en: "Say she is Padma, and tell him about her popular tailoring class.", te: "ఆవిడ పద్మ గారని, ఆవిడ పాపులర్ టైలరింగ్ క్లాస్ గురించి చెప్పండి." },
        replies: [
          { say: "Yes, that's Padma, whose tailoring class is very popular.", good: true, skill: "point" },
          { say: "Yes, that's Padma. She runs a very popular tailoring class.", good: true, skill: "point" },
          {
            say: "Padma? She talks too much. Stay away from her.",
            good: false,
            skill: "polite",
            react: { en: "Oh! I think I'll talk to her and see for myself.", te: "అవునా! నేనే ఆవిడతో మాట్లాడి చూస్తాను." },
          },
        ],
      },
      {
        partner: "Thank you so much. I feel at home already.",
        te: "చాలా థాంక్స్. అప్పుడే సొంత ఇంట్లో ఉన్నట్టు అనిపిస్తోంది.",
        hint: { en: "Say you are glad, and tell him to ask you if he needs anything.", te: "సంతోషమని చెప్పి, ఏం కావాలన్నా మిమ్మల్ని అడగమని చెప్పండి." },
        replies: [
          { say: "I'm glad. Please ask me if you need anything.", good: true, skill: "polite" },
          { say: "I'm glad. Please ask me if you are needing anything.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};
