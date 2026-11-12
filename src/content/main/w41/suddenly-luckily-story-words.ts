import type { Lesson } from "../../types";

/** Week 41, Day 3 (CURRICULUM §5): story words — Suddenly a dog ran across the road. Luckily nobody was hurt, and in the end we laughed. */
export const day: Lesson = {
  id: "suddenly-luckily-story-words",
  kind: "lesson",
  title: { en: "Suddenly, Luckily", te: "ఉన్నట్టుండి, అదృష్టం కొద్దీ" },
  subtitle: "Suddenly … Luckily … In the end …",
  summary: {
    en: "Learn the words that bring a story to life: Suddenly a dog ran across the road. Luckily nobody was hurt.",
    te: "కథకి ప్రాణం పోసే పదాలు నేర్చుకుందాం: Suddenly a dog ran across the road. Luckily nobody was hurt.",
  },
  seo: {
    title: "Story Words in English for Telugu Speakers",
    description:
      "Say Suddenly a dog ran across the road and Luckily nobody was hurt. Simple lessons for Telugu speakers on words that bring a story to life.",
  },
  pattern: [
    { text: "Suddenly", role: "when" },
    { text: "a dog", role: "who" },
    { text: "ran", role: "action" },
    { text: "across the road", role: "what" },
  ],
  core: [
    { en: "Suddenly a dog ran across the road.", te: "ఉన్నట్టుండి ఒక కుక్క రోడ్డుకి అడ్డంగా పరిగెత్తింది.", extra: ["run"] },
    { en: "Luckily nobody was hurt, and in the end we laughed.", te: "అదృష్టం కొద్దీ ఎవరికీ ఏమీ కాలేదు, చివరికి అందరం నవ్వుకున్నాం.", extra: ["laugh"] },
    { en: "The driver braked just in time.", te: "డ్రైవర్ గారు సరిగ్గా సమయానికి బ్రేక్ వేశారు.", extra: ["brake"] },
    { en: "Unfortunately, my bag fell on the road.", te: "దురదృష్టం కొద్దీ నా బ్యాగ్ రోడ్డు మీద పడిపోయింది.", extra: ["fall"] },
    { en: "I was very scared for a moment.", te: "ఒక్క క్షణం నాకు చాలా భయం వేసింది." },
    { en: "Fortunately, my phone was not broken.", te: "అదృష్టం బాగుండి నా ఫోన్ పగలలేదు." },
    { en: "We were going to the market in an auto.", te: "మేము ఆటోలో మార్కెట్‌కి వెళ్తున్నాం." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Remember a small surprise from this month. Tell it in three sentences with Suddenly, Luckily and In the end.",
    te: "ఈ నెలలో జరిగిన ఒక చిన్న అనుకోని సంఘటన గుర్తు చేసుకోండి. Suddenly, Luckily, In the end వాడి మూడు వాక్యాల్లో చెప్పండి.",
  },
  words: [
    { en: "unfortunately", te: "దురదృష్టం కొద్దీ" },
    { en: "fortunately", te: "అదృష్టం బాగుండి" },
    { en: "brake", te: "బ్రేక్ వేయడం" },
    { en: "scared", te: "భయపడటం, భయం వేయడం" },
    { en: "laugh", te: "నవ్వడం" },
  ],
  grammar: ["past-simple", "past-continuous", "connectors"],
  topics: ["transport", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Words that tell how it felt", te: "కథకి రంగు తెచ్చే పదాలు" },
      body: {
        en: "Story words come at the start: Suddenly for a surprise, Luckily for good news, Unfortunately for bad news, In the end for how it finished.",
        te: "ఈ పదాలు వాక్యం మొదట్లో వస్తాయి: అనుకోనిదానికి Suddenly, మంచి వార్తకి Luckily, చెడు వార్తకి Unfortunately, ఎలా ముగిసిందో చెప్పడానికి In the end.",
      },
      bridge: {
        te: ["ఉన్నట్టుండి", "ఒక కుక్క", "రోడ్డుకి అడ్డంగా", "పరిగెత్తింది"],
        en: [
          { text: "Suddenly", role: "when" },
          { text: "a dog", role: "who" },
          { text: "ran", role: "action" },
          { text: "across the road", role: "what" },
        ],
      },
      examples: [
        { en: "Suddenly a dog ran across the road.", te: "ఉన్నట్టుండి ఒక కుక్క రోడ్డుకి అడ్డంగా పరిగెత్తింది." },
        { en: "Luckily nobody was hurt, and in the end we laughed.", te: "అదృష్టం కొద్దీ ఎవరికీ ఏమీ కాలేదు, చివరికి అందరం నవ్వుకున్నాం." },
        { en: "The driver braked just in time.", te: "డ్రైవర్ గారు సరిగ్గా సమయానికి బ్రేక్ వేశారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Good news or bad news?", te: "మంచి వార్తా, చెడు వార్తా?" },
      items: [
        {
          form: "Suddenly …",
          useFor: { en: "Something nobody expected.", te: "ఎవరూ ఊహించనిది జరిగినప్పుడు." },
          example: { en: "Suddenly the bus stopped.", te: "ఉన్నట్టుండి బస్సు ఆగిపోయింది." },
        },
        {
          form: "Luckily … / Fortunately …",
          useFor: { en: "Something good, after a problem.", te: "సమస్య తర్వాత ఏదైనా మంచి జరిగితే." },
          example: { en: "Fortunately, my phone was not broken.", te: "అదృష్టం బాగుండి నా ఫోన్ పగలలేదు." },
        },
        {
          form: "Unfortunately …",
          useFor: { en: "Something bad or sad.", te: "ఏదైనా చెడు జరిగితే." },
          example: { en: "Unfortunately, my bag fell on the road.", te: "దురదృష్టం కొద్దీ నా బ్యాగ్ రోడ్డు మీద పడిపోయింది." },
        },
        {
          form: "In the end …",
          useFor: { en: "How the story finished.", te: "కథ చివరికి ఎలా ముగిసిందో." },
          example: { en: "In the end, we reached home safely.", te: "చివరికి క్షేమంగా ఇంటికి చేరుకున్నాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Suddenly dog ran across the road.",
      right: "Suddenly a dog ran across the road.",
      why: {
        en: "One dog you have not talked about yet needs a; in Telugu we often say just కుక్క.",
        te: "ఇంతకుముందు చెప్పని ఒక కుక్క కాబట్టి a కావాలి; తెలుగులో 'ఒక' లేకుండా 'కుక్క' అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Yesterday night an auto almost hit me.",
      right: "Last night an auto almost hit me.",
      why: {
        en: "English says last night, never yesterday night; yesterday morning and yesterday evening are fine.",
        te: "'నిన్న రాత్రి' ని last night అంటారు, yesterday night అనరు; yesterday morning, yesterday evening మాత్రం సరైనవే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your bag fell on the road, but your phone inside was fine. Tell your friend the good part.",
        te: "మీ బ్యాగ్ రోడ్డు మీద పడింది, కానీ లోపల ఫోన్ బాగానే ఉంది. ఆ మంచి విషయం స్నేహితులకి చెప్పండి.",
      },
      options: ["Luckily, my phone didn't break.", "Unfortunately, my phone didn't break.", "Suddenly, my phone didn't break."],
      answer: 0,
      why: {
        en: "Luckily brings good news after a problem; unfortunately is only for bad news.",
        te: "సమస్య తర్వాత మంచి వార్తకి Luckily; Unfortunately చెడు వార్తకి మాత్రమే.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Luckily nobody ___ hurt, and in the end we laughed.",
      te: "అదృష్టం కొద్దీ ఎవరికీ ఏమీ కాలేదు, చివరికి అందరం నవ్వుకున్నాం.",
      options: ["was", "did", "were"],
      answer: 0,
      why: {
        en: "Nobody takes was, like one person, and hurt needs was before it here.",
        te: "nobody కి was వస్తుంది, ఒక్కరికి లాగా; ఇక్కడ hurt ముందు was కావాలి.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "news",
      heading: "Tree Falls on Main Road in Guntur",
      lines: [
        "Guntur, 12 July.",
        "A big neem tree fell on Brodipet main road on Monday evening.",
        "It was raining heavily at that time.",
        "An RTC bus was coming down the road.",
        "Luckily, the driver saw the tree and stopped the bus in time.",
        "Unfortunately, the tree fell on two parked bikes.",
        "Nobody was hurt.",
        "Traffic was slow for three hours.",
        "In the end, municipal workers cut the tree and cleared the road.",
      ],
      questions: [
        {
          prompt: { en: "What did the bus driver do?", te: "బస్సు డ్రైవర్ గారు ఏం చేశారు?" },
          options: ["He stopped the bus in time.", "He drove around the tree.", "He called the police."],
          answer: 0,
          why: {
            en: "The fifth line starts with Luckily and tells us what the driver did.",
            te: "Luckily తో మొదలయ్యే ఐదో లైన్‌లో డ్రైవర్ గారు ఏం చేశారో ఉంది.",
          },
        },
        {
          prompt: { en: "Was anyone hurt?", te: "ఎవరికైనా దెబ్బలు తగిలాయా?" },
          options: ["No, nobody was hurt.", "Yes, the driver was hurt.", "Yes, two people were hurt."],
          answer: 0,
          why: {
            en: "The short line after the bikes gives the good news about people.",
            te: "బైక్‌ల లైన్ తర్వాత వచ్చే చిన్న లైన్‌లో మనుషుల గురించి మంచి వార్త ఉంది.",
          },
        },
        {
          prompt: { en: "Who cleared the road?", te: "రోడ్డుని ఎవరు ఖాళీ చేశారు?" },
          options: ["Municipal workers", "The bus driver", "The police"],
          answer: 0,
          why: {
            en: "The last line, after In the end, names the people who cut the tree.",
            te: "In the end తో మొదలయ్యే చివరి లైన్‌లో చెట్టుని నరికినవాళ్ళ పేరు ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Unfortunately, my bag fall on the road.",
      wrongIndex: 3,
      fix: "Unfortunately, my bag fell on the road.",
      why: {
        en: "The story is in the past, so fall changes to fell.",
        te: "కథ గతంలోది కాబట్టి fall కాదు, fell.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your friend asks: Were you scared? Say yes, you were very scared for a moment.",
        te: "భయం వేసిందా అని స్నేహితులు అడుగుతున్నారు. అవును, ఒక్క క్షణం చాలా భయం వేసిందని చెప్పండి.",
      },
      expected: ["Yes, I was very scared for a moment.", "Yes, I was very scared.", "Yes, I was scared for a moment."],
      options: ["Yes, I was very scared for a moment.", "Yes, I was fearing for a moment.", "Yes, I scared for a moment."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell your friend how the story ended: everyone was fine, and you all laughed.",
        te: "కథ ఎలా ముగిసిందో స్నేహితులకి చెప్పండి: అందరూ బాగానే ఉన్నారు, అందరూ నవ్వుకున్నారు.",
      },
      expected: ["In the end, we all laughed.", "Luckily nobody was hurt, and in the end we laughed.", "In the end everyone was fine, and we laughed."],
      options: ["In the end, we all laughed.", "In the end, we all laugh.", "In end, we all laughed."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A near accident", te: "తృటిలో తప్పిన ప్రమాదం" },
    scene: {
      en: "At the tea stall, your friend Mohan sees a bandage on your hand.",
      te: "టీ కొట్టు దగ్గర మీ చేతికి ఉన్న కట్టుని మీ స్నేహితుడు మోహన్ గారు చూశారు.",
    },
    partner: { en: "Mohan (your friend)", te: "మోహన్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "story", label: { en: "Story words", te: "కథ పదాలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! What happened to your hand?",
        te: "హలో! మీ చేతికి ఏమైంది?",
        hint: { en: "Say it is nothing serious, and say where you were going in the auto.", te: "పెద్ద విషయం కాదని చెప్పి, ఆటోలో ఎక్కడికి వెళ్తున్నారో చెప్పండి." },
        replies: [
          { say: "Nothing serious. We were going to the market in an auto.", good: true, skill: "story" },
          { say: "Nothing serious. We going to the market in an auto.", good: false, skill: "story", fixIt: "be" },
        ],
      },
      {
        partner: "And then?",
        te: "తర్వాత?",
        hint: { en: "Say a dog ran in front of the auto, with no warning.", te: "ఉన్నట్టుండి ఒక కుక్క ఆటోకి అడ్డంగా వచ్చిందని చెప్పండి." },
        replies: [
          { say: "Suddenly a dog ran across the road.", good: true, skill: "story" },
          { say: "Suddenly dog ran across the road.", good: false, skill: "story", fixIt: "article" },
        ],
      },
      {
        partner: "Oh no! Did the auto hit it?",
        te: "అయ్యో! ఆటో దాన్ని గుద్దేసిందా?",
        hint: { en: "Say no, and give the good news about the driver.", te: "లేదని చెప్పి, డ్రైవర్ గారి గురించి మంచి వార్త చెప్పండి." },
        replies: [
          { say: "No. Luckily the driver braked just in time.", good: true, skill: "story" },
          {
            say: "Of course not! Don't ask silly questions.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, sorry! I was worried about you.", te: "సారీ, సారీ! మీ గురించి కంగారు పడ్డాను." },
          },
        ],
      },
      {
        partner: "Thank God! Are you okay now?",
        te: "హమ్మయ్య! ఇప్పుడు బాగానే ఉన్నారా?",
        hint: { en: "Say you are fine now, and say how the story ended for everyone.", te: "ఇప్పుడు బాగానే ఉన్నారని, చివరికి అందరికీ ఎలా ముగిసిందో చెప్పండి." },
        replies: [
          { say: "Yes, I'm fine. In the end, we all laughed about it.", good: true, skill: "story" },
          { say: "Yes, I fine. In the end, we all laughed about it.", good: false, skill: "story", fixIt: "be" },
        ],
      },
    ],
  },
};
