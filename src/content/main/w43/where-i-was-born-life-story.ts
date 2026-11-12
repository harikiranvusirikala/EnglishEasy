import type { Lesson } from "../../types";

/** Week 43, Day 1 (CURRICULUM §5): was born, grew up, moved to + years — I was born in Eluru in 1960. */
export const day: Lesson = {
  id: "where-i-was-born-life-story",
  kind: "lesson",
  title: { en: "Where I Was Born", te: "నేను పుట్టిన ఊరు" },
  subtitle: "I was born in … in …",
  summary: {
    en: "Learn to say where you were born, where you grew up and when you moved: I was born in Eluru in 1960.",
    te: "మీరు ఎక్కడ పుట్టారో, ఎక్కడ పెరిగారో, ఎప్పుడు ఊరు మారారో చెప్పడం నేర్చుకుందాం: I was born in Eluru in 1960.",
  },
  seo: {
    title: "Saying Where You Were Born in English for Telugu Speakers",
    description:
      "Say I was born in Eluru in 1960 and I moved to Vijayawada in 1985. Simple lessons for Telugu speakers on telling your life story.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was born", role: "action" },
    { text: "in Eluru", role: "what" },
    { text: "in 1960", role: "when" },
  ],
  core: [
    { en: "I was born in Eluru.", te: "నేను ఏలూరులో పుట్టాను.", extra: ["am"] },
    { en: "I was born in nineteen sixty.", te: "నేను 1960 లో పుట్టాను.", extra: ["on"] },
    { en: "Where were you born?", te: "మీరు ఎక్కడ పుట్టారు?", extra: ["did"] },
    { en: "I grew up in a small village near Eluru.", te: "నేను ఏలూరు దగ్గర ఒక చిన్న ఊర్లో పెరిగాను.", extra: ["grow"] },
    { en: "I moved to Vijayawada in nineteen eighty-five.", te: "1985 లో నేను విజయవాడకి మారిపోయాను.", extra: ["move"] },
    { en: "My father was a teacher in the village school.", te: "మా నాన్నగారు ఊరి స్కూల్లో టీచర్‌గా ఉండేవారు.", extra: ["is"] },
    { en: "I studied in a Telugu-medium school.", te: "నేను తెలుగు మీడియం స్కూల్లో చదువుకున్నాను.", extra: ["study"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud where and when you were born, and where you grew up: I was born in … in …",
    te: "మీరు ఎక్కడ, ఎప్పుడు పుట్టారో, ఎక్కడ పెరిగారో గట్టిగా చెప్పండి: I was born in … in …",
  },
  words: [
    { en: "village school", te: "ఊరి స్కూల్" },
    { en: "studied", te: "చదువుకున్నాను, చదువుకున్నారు" },
    { en: "Telugu-medium", te: "తెలుగు మీడియం" },
    { en: "place of birth", te: "పుట్టిన ఊరు (ఫారంలో)" },
    { en: "year of birth", te: "పుట్టిన సంవత్సరం (ఫారంలో)" },
  ],
  grammar: ["past-simple", "was-were", "prepositions"],
  topics: ["people", "home", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Born, grew up, moved", te: "పుట్టడం, పెరగడం, ఊరు మారడం" },
      body: {
        en: "Your life story uses the past. Say I was born, with was. Then say where you grew up and where you moved to, with the year: in 1985.",
        te: "జీవిత కథకి past వాడతాం. 'పుట్టాను' అంటే I was born; was తప్పకుండా కావాలి. తర్వాత grew up (పెరిగాను), moved to (మారాను), సంవత్సరంతో: in 1985.",
      },
      bridge: {
        te: ["నేను", "1960 లో", "ఏలూరులో", "పుట్టాను"],
        en: [
          { text: "I", role: "who" },
          { text: "was born", role: "action" },
          { text: "in Eluru", role: "what" },
          { text: "in 1960", role: "when" },
        ],
      },
      examples: [
        { en: "I was born in Eluru.", te: "నేను ఏలూరులో పుట్టాను." },
        { en: "I was born in nineteen sixty.", te: "నేను 1960 లో పుట్టాను." },
        { en: "Where were you born?", te: "మీరు ఎక్కడ పుట్టారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Years and dates", te: "సంవత్సరాలు, తేదీలు" },
      items: [
        {
          form: "in 1960",
          useFor: { en: "A year takes in. Say it in two halves: nineteen sixty.", te: "సంవత్సరానికి in వస్తుంది. రెండు భాగాలుగా చెప్పండి: nineteen sixty." },
          example: { en: "I was born in nineteen sixty.", te: "నేను 1960 లో పుట్టాను." },
        },
        {
          form: "in 2010",
          useFor: { en: "From 2000, say two thousand, then the rest.", te: "2000 నుంచి ముందు two thousand, తర్వాత మిగతాది." },
          example: { en: "My brother moved to Hyderabad in two thousand ten.", te: "మా అన్నయ్య 2010 లో హైదరాబాద్‌కి మారారు." },
        },
        {
          form: "on the fifth of May",
          useFor: { en: "A full date takes on, not in.", te: "పూర్తి తేదీకి on వస్తుంది, in కాదు." },
          example: { en: "I was born on the fifth of May.", te: "నేను మే ఐదో తేదీన పుట్టాను." },
        },
        {
          form: "grew up in …",
          useFor: { en: "The place where you spent your childhood.", te: "మీ చిన్నతనం గడిచిన చోటు చెప్పడానికి." },
          example: { en: "I grew up in a small village near Eluru.", te: "నేను ఏలూరు దగ్గర ఒక చిన్న ఊర్లో పెరిగాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "I born in Eluru.",
      right: "I was born in Eluru.",
      why: {
        en: "Telugu పుట్టాను is one word, but English needs was before born.",
        te: "తెలుగులో 'పుట్టాను' ఒకే పదం; ఇంగ్లీష్‌లో born ముందు was తప్పకుండా కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I grew up in small village.",
      right: "I grew up in a small village.",
      why: {
        en: "One village needs a before it; Telugu ఊర్లో has no word like a.",
        te: "ఒక్క ఊరు కాబట్టి ముందు a కావాలి; తెలుగు 'ఊర్లో' లో a లాంటి పదం ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your neighbour asks: Where were you born? You were born in Guntur. Answer.",
        te: "మీరు ఎక్కడ పుట్టారని పక్కింటివారు అడుగుతున్నారు. మీరు గుంటూరులో పుట్టారు. జవాబు చెప్పండి.",
      },
      options: ["I was born in Guntur.", "I am born in Guntur.", "I have born in Guntur."],
      answer: 0,
      why: {
        en: "Being born is finished, so use was with born, never am or have.",
        te: "పుట్టడం అయిపోయిన విషయం; born తో was వాడాలి, am గానీ have గానీ కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ up in a small village near Eluru.",
      te: "నేను ఏలూరు దగ్గర ఒక చిన్న ఊర్లో పెరిగాను.",
      options: ["grew", "grow", "was grow"],
      answer: 0,
      why: {
        en: "Grow has a special past form, grew, with no -ed and no was.",
        te: "grow కి past ప్రత్యేకం: grew; -ed గానీ was గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "label",
      heading: "Senior Citizens Club: Member Form",
      lines: ["Name: S. RAMANA", "Place of Birth: Eluru", "Year of Birth: 1956", "In Vijayawada since: 1984", "Signature:"],
      prompt: { en: "Read Ramana's form. When was he born?", te: "రమణ గారి ఫారం చదవండి. ఆయన ఎప్పుడు పుట్టారు?" },
      options: ["In nineteen fifty-six", "In nineteen sixty-five", "In nineteen eighty-four"],
      answer: 0,
      why: {
        en: "The Year of Birth line shows it, and a year is said in two halves.",
        te: "Year of Birth లైన్‌లో ఉంది; సంవత్సరాన్ని రెండు భాగాలుగా చెప్తాం.",
      },
      say: "He was born in nineteen fifty-six.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I was born in Eluru on nineteen sixty.",
      wrongIndex: 5,
      fix: "I was born in Eluru in nineteen sixty.",
      why: {
        en: "A year takes in; on is only for a date or a day.",
        te: "సంవత్సరానికి in వస్తుంది; on తేదీకి, రోజుకి మాత్రమే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A new neighbour asks where you grew up. Say a small village near Eluru.",
        te: "మీరు ఎక్కడ పెరిగారని కొత్త పక్కింటివారు అడుగుతున్నారు. ఏలూరు దగ్గర ఒక చిన్న ఊరు అని చెప్పండి.",
      },
      expected: ["I grew up in a small village near Eluru.", "I grew up in a village near Eluru.", "In a small village near Eluru."],
      options: ["I grew up in a small village near Eluru.", "I grow up in a small village near Eluru.", "I grew up in small village near Eluru."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your new neighbour where she was born.",
        te: "కొత్త పక్కింటావిడని ఆవిడ ఎక్కడ పుట్టారో అడగండి.",
      },
      expected: ["Where were you born?", "Where are you from?"],
      options: ["Where were you born?", "Where did you born?", "Where you were born?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new neighbour", te: "కొత్త పక్కింటావిడ" },
    scene: {
      en: "Fatima has just moved in next door. She stops at your gate to say hello.",
      te: "ఫాతిమా గారు ఈ మధ్యే పక్కింట్లోకి వచ్చారు. పలకరించడానికి మీ గేటు దగ్గర ఆగారు.",
    },
    partner: { en: "Fatima (your new neighbour)", te: "ఫాతిమా (మీ కొత్త పక్కింటావిడ)" },
    skills: [
      { id: "story", label: { en: "Saying where you are from", te: "మీ ఊరు గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm Fatima. We moved in last week.",
        te: "హలో! నేను ఫాతిమా. మేము పోయిన వారమే ఇక్కడికి వచ్చాం.",
        hint: { en: "Welcome her, and say your name.", te: "ఆవిడకి స్వాగతం చెప్పి, మీ పేరు చెప్పండి." },
        replies: [
          { say: "Welcome! I'm Kiran. Nice to meet you.", good: true, skill: "polite" },
          { say: "Welcome! Myself Kiran.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Nice to meet you too. Are you from Vijayawada?",
        te: "మిమ్మల్ని కలవడం నాకూ సంతోషం. మీది విజయవాడేనా?",
        hint: { en: "Say no: you were born in Eluru.", te: "కాదు అని, మీరు ఏలూరులో పుట్టారని చెప్పండి." },
        replies: [
          { say: "No, I was born in Eluru.", good: true, skill: "story" },
          { say: "No, I am born in Eluru.", good: false, skill: "story" },
        ],
      },
      {
        partner: "Oh, Eluru! When did you come here?",
        te: "ఓ, ఏలూరా! ఇక్కడికి ఎప్పుడు వచ్చారు?",
        hint: { en: "Tell her the year you moved to this city: 1985.", te: "ఈ ఊరికి ఏ సంవత్సరం వచ్చారో చెప్పండి: 1985." },
        replies: [
          { say: "I moved here in nineteen eighty-five.", good: true, skill: "story" },
          {
            say: "Why do you want to know that?",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry! I was only asking.", te: "అయ్యో, సారీ! ఊరికే అడిగానండీ." },
          },
        ],
      },
      {
        partner: "So you know this area well! Please come for tea some day.",
        te: "అయితే ఈ ప్రాంతం మీకు బాగా తెలుసు! ఎప్పుడైనా టీకి రండి.",
        hint: { en: "Thank her, and welcome her to the colony.", te: "థాంక్స్ చెప్పి, కాలనీకి స్వాగతం చెప్పండి." },
        replies: [
          { say: "Thank you! Welcome to our colony.", good: true, skill: "polite" },
          { say: "Thank you! Welcome to colony.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
