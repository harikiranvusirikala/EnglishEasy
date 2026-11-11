import type { Lesson } from "../../types";

/** Week 36, Day 2 (CURRICULUM §4): relative clauses with who — The man who lives next door is a retired teacher. */
export const day: Lesson = {
  id: "the-man-who",
  kind: "lesson",
  title: { en: "The Man Who Lives Next Door", te: "పక్కింట్లో ఉండే ఆయన" },
  subtitle: "who for people",
  summary: {
    en: "Learn to show which person you mean with who: The man who lives next door is a retired teacher.",
    te: "ఏ మనిషి గురించి అంటున్నారో who తో చెప్పడం నేర్చుకుందాం: The man who lives next door is a retired teacher.",
  },
  seo: {
    title: "Using Who for People in English for Telugu Speakers",
    description:
      "Say The man who lives next door is a retired teacher. Simple lessons for Telugu speakers on pointing out people with who.",
  },
  pattern: [
    { text: "The man who lives next door", role: "who" },
    { text: "is", role: "action" },
    { text: "a retired teacher", role: "what" },
  ],
  core: [
    { en: "She's the lady who sells flowers.", te: "పూలు అమ్మే ఆవిడ ఈవిడే.", extra: ["sell"] },
    { en: "The man who lives next door is a retired teacher.", te: "పక్కింట్లో ఉండే ఆయన రిటైర్డ్ టీచర్.", extra: ["live"] },
    { en: "Do you know the man who has a beard?", te: "గడ్డం ఉన్న ఆ ఆయన మీకు తెలుసా?", extra: ["have"] },
    { en: "Geetha is the one who is in charge.", te: "అన్నీ చూసుకునేది గీత గారే.", extra: ["which"] },
    { en: "He is the doctor who helped me.", te: "నాకు సహాయం చేసిన డాక్టర్ ఆయనే.", extra: ["helps"] },
    { en: "The man who has a moustache is my uncle.", te: "మీసం ఉన్న ఆయన మా మావయ్య.", extra: ["have"] },
    { en: "The watchman who works at night is very helpful.", te: "రాత్రి డ్యూటీ చేసే వాచ్‌మ్యాన్ గారు చాలా సహాయం చేస్తారు.", extra: ["work"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of two people on your street. Say one sentence with who for each.",
    te: "మీ వీధిలో ఇద్దరిని గుర్తు చేసుకోండి. ఒక్కొక్కరి గురించి who తో ఒక వాక్యం చెప్పండి.",
  },
  words: [
    { en: "next door", te: "పక్కింట్లో, పక్క ఇల్లు" },
    { en: "beard", te: "గడ్డం" },
    { en: "moustache", te: "మీసం" },
    { en: "in charge", te: "బాధ్యత చూసుకునే" },
    { en: "helpful", te: "సహాయం చేసే" },
  ],
  grammar: ["relative-clauses", "present-simple"],
  topics: ["people", "neighbours", "festivals"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Who shows which person", te: "who: ఏ మనిషో చెప్తుంది" },
      body: {
        en: "To show which person you mean, add who and an action: the man who lives next door. Telugu puts this before the person; English puts it after.",
        te: "ఏ మనిషో చెప్పాలంటే who + action చేర్చండి: the man who lives next door. తెలుగులో ఇది మనిషి ముందు వస్తుంది (పక్కింట్లో ఉండే ఆయన); ఇంగ్లీష్‌లో తర్వాత.",
      },
      bridge: {
        te: ["పక్కింట్లో ఉండే ఆయన", "రిటైర్డ్ టీచర్"],
        en: [
          { text: "The man who lives next door", role: "who" },
          { text: "is", role: "action" },
          { text: "a retired teacher", role: "what" },
        ],
      },
      examples: [
        { en: "The man who lives next door is a retired teacher.", te: "పక్కింట్లో ఉండే ఆయన రిటైర్డ్ టీచర్." },
        { en: "She's the lady who sells flowers.", te: "పూలు అమ్మే ఆవిడ ఈవిడే." },
        { en: "He is the doctor who helped me.", te: "నాకు సహాయం చేసిన డాక్టర్ ఆయనే." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Who and the action", te: "who తర్వాత action" },
      items: [
        {
          form: "who lives / who sells",
          useFor: { en: "One person: the action takes s.", te: "ఒక్కరే అయితే action కి s వస్తుంది." },
          example: { en: "She's the lady who sells flowers.", te: "పూలు అమ్మే ఆవిడ ఈవిడే." },
        },
        {
          form: "who has",
          useFor: { en: "Something the person has: a beard, glasses.", te: "ఆ మనిషికి ఉన్నది: గడ్డం, కళ్ళజోడు." },
          example: { en: "Do you know the man who has a beard?", te: "గడ్డం ఉన్న ఆ ఆయన మీకు తెలుసా?" },
        },
        {
          form: "who is",
          useFor: { en: "The person's job or role.", te: "ఆ మనిషి పని లేదా బాధ్యత." },
          example: { en: "Geetha is the one who is in charge.", te: "అన్నీ చూసుకునేది గీత గారే." },
        },
        {
          form: "who helped",
          useFor: { en: "Something the person did before.", te: "ఆ మనిషి ఇంతకు ముందు చేసిన పని: past." },
          example: { en: "He is the doctor who helped me.", te: "నాకు సహాయం చేసిన డాక్టర్ ఆయనే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The man who live next door is a teacher.",
      right: "The man who lives next door is a teacher.",
      why: {
        en: "Here who means one man, so the action takes s, just like he lives.",
        te: "ఇక్కడ who అంటే ఒక్క మనిషి, అందుకే he lives లాగానే action కి s వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Next door uncle is a retired teacher.",
      right: "The man who lives next door is a retired teacher.",
      why: {
        en: "Telugu puts పక్కింటి before the person. English starts with the man, then who and the action.",
        te: "తెలుగులో 'పక్కింటి' మనిషి ముందు వస్తుంది. ఇంగ్లీష్‌లో ముందు the man, తర్వాత who, action.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["The lady who sells flowers is friendly.", "The lady who sell flowers is friendly.", "The lady which sells flowers is friendly."],
      answer: 0,
      why: {
        en: "Use who for a person, and one person's action takes s.",
        te: "మనిషికి who వాడాలి; ఒక్కరి action కి s వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Do you know the man who ___ a beard?",
      te: "గడ్డం ఉన్న ఆ ఆయన మీకు తెలుసా?",
      options: ["has", "have", "is"],
      answer: 0,
      why: {
        en: "When one man has something, the word is has, not have or is.",
        te: "ఒక్క మనిషికి ఏదైనా ఉంటే has; have, is సరిపోవు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: { en: "At a function, show your friend who Geetha is. She is in a green saree.", te: "ఫంక్షన్‌లో గీత గారు ఎవరో స్నేహితులకి చూపించండి. ఆవిడ పచ్చ చీర కట్టుకున్నారు." },
      options: ["She's the lady who is wearing a green saree.", "She's the lady who wearing a green saree.", "She's the lady who is wear a green saree."],
      answer: 0,
      why: {
        en: "Like she is wearing, who is wearing needs is and the -ing form.",
        te: "she is wearing లాగానే who is wearing; is, -ing రెండూ ఉండాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He is the doctor which helped me.",
      wrongIndex: 4,
      fix: "He is the doctor who helped me.",
      why: {
        en: "Which is only for things. For a person, like a doctor, use who.",
        te: "which వస్తువులకి మాత్రమే. డాక్టర్ లాంటి మనిషికి who వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Point out your neighbour to a guest. He lives next door, and he was a teacher.",
        te: "అతిథికి మీ పక్కింటాయన్ని చూపించండి. ఆయన పక్కింట్లో ఉంటారు, ఒకప్పుడు టీచర్.",
      },
      expected: [
        "The man who lives next door is a retired teacher.",
        "He's a retired teacher who lives next door.",
        "He lives next door. He's a retired teacher.",
      ],
      options: [
        "The man who lives next door is a retired teacher.",
        "The man who live next door is a retired teacher.",
        "Next door man, he is retired teacher.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At a function, ask your friend about the man with a moustache.",
        te: "ఒక ఫంక్షన్‌లో, మీసం ఉన్న ఆయన తెలుసా అని స్నేహితులను అడగండి.",
      },
      expected: ["Do you know the man who has a moustache?", "Do you know the man with the moustache?", "Who is the man with the moustache?"],
      options: ["Do you know the man who has a moustache?", "Do you know the man which has a moustache?", "You know the man who has a moustache?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Who's who at the function", te: "ఫంక్షన్‌లో ఎవరు ఎవరు" },
    scene: {
      en: "You are at a housewarming function in your colony. Your friend Anitha doesn't know anyone.",
      te: "మీ కాలనీలో గృహప్రవేశం ఫంక్షన్‌లో ఉన్నారు. మీ స్నేహితురాలు అనిత గారికి అక్కడ ఎవరూ తెలియదు.",
    },
    partner: { en: "Anitha (friend)", te: "అనిత (స్నేహితురాలు)" },
    skills: [
      { id: "who", label: { en: "Who for people", te: "మనుషులకి who" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మంచిగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "It's a big function! I don't know anyone here.",
        te: "పెద్ద ఫంక్షన్! ఇక్కడ నాకు ఎవరూ తెలియదు.",
        hint: { en: "Tell her not to worry, and offer to help.", te: "కంగారు వద్దని, సహాయం చేస్తానని చెప్పండి." },
        replies: [
          { say: "Don't worry, I'll show you everyone.", good: true, skill: "polite" },
          { say: "Don't worry, I'll showing you everyone.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Who is the man at the gate?",
        te: "గేటు దగ్గర ఉన్న ఆయన ఎవరు?",
        hint: { en: "Say he lives next to your house, and he is retired.", te: "ఆయన మీ పక్కింట్లో ఉంటారని, రిటైర్ అయ్యారని చెప్పండి." },
        replies: [
          { say: "He's the man who lives next door. He's retired.", good: true, skill: "who" },
          { say: "He's the man who live next door. He's retired.", good: false, skill: "who", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "And the lady in the green saree?",
        te: "మరి పచ్చ చీర కట్టుకున్న ఆవిడ?",
        hint: { en: "Say what her job at the function is: the food.", te: "ఫంక్షన్‌లో ఆవిడ బాధ్యత ఏంటో చెప్పండి: భోజనం." },
        replies: [
          { say: "She's the one who is in charge of the food.", good: true, skill: "who" },
          { say: "She's the one who in charge of the food.", good: false, skill: "who", fixIt: "be" },
          {
            say: "That aunty? She talks too much. Avoid her.",
            good: false,
            skill: "polite",
            react: { en: "Oh! I hope she didn't hear that.", te: "అయ్యో! ఆవిడకి వినిపించలేదు కదా." },
          },
        ],
      },
      {
        partner: "The food is very good! I'd like to thank her.",
        te: "భోజనం చాలా బాగుంది! ఆవిడకి థాంక్స్ చెప్పాలి.",
        hint: { en: "Offer to take her to that lady now.", te: "ఇప్పుడే ఆవిడ దగ్గరకి తీసుకెళ్తానని చెప్పండి." },
        replies: [
          { say: "Come, I'll take you to her now.", good: true, skill: "polite" },
          { say: "Come, I'll take you to her now only.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
