import type { Lesson } from "../../types";

/** Week 57, Day 1 (CURRICULUM §5): reported speech with said that — The doctor said that my BP was normal. */
export const day: Lesson = {
  id: "she-said-that-doctor-news",
  kind: "lesson",
  title: { en: "She Said That", te: "ఆవిడ చెప్పారు" },
  subtitle: "said that + was, would",
  summary: {
    en: "Learn to pass on what the doctor said: The doctor said that my BP was normal. She said the report would come on Monday.",
    te: "డాక్టర్ గారు చెప్పింది ఇంకొకరికి చెప్పడం నేర్చుకుందాం: The doctor said that my BP was normal. She said the report would come on Monday.",
  },
  seo: {
    title: "Passing On What the Doctor Said in English for Telugu Speakers",
    description:
      "Say The doctor said that my BP was normal and She said the report would come on Monday. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "The doctor", role: "who" },
    { text: "said", role: "action" },
    { text: "that my BP was normal", role: "what" },
  ],
  core: [
    { en: "The doctor said that my BP was normal.", te: "నా BP నార్మల్‌గా ఉందని డాక్టర్ గారు చెప్పారు.", extra: ["is"] },
    { en: "She said the report would come on Monday.", te: "రిపోర్ట్ సోమవారం వస్తుందని ఆవిడ చెప్పారు.", extra: ["will"] },
    { en: "She said my sugar was a little high.", te: "నా షుగర్ కొంచెం ఎక్కువగా ఉందని ఆవిడ చెప్పారు.", extra: ["is"] },
    { en: "The doctor said it was nothing serious.", te: "పెద్ద సమస్య ఏమీ లేదని డాక్టర్ గారు చెప్పారు.", extra: ["told"] },
    { en: "She said I could start walking again.", te: "మళ్ళీ నడవడం మొదలుపెట్టొచ్చని ఆవిడ చెప్పారు.", extra: ["can"] },
    { en: "The nurse said the doctor was busy with a patient.", te: "డాక్టర్ గారు ఒక పేషెంట్‌తో బిజీగా ఉన్నారని నర్సు చెప్పారు.", extra: ["is"] },
    { en: "The doctor said I should come back in three months.", te: "మూడు నెలల తర్వాత మళ్ళీ రమ్మని డాక్టర్ గారు చెప్పారు.", extra: ["after"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing a doctor or a friend told you this week. Say it aloud: She said that …",
    te: "ఈ వారం డాక్టర్ గారో, స్నేహితులో మీకు చెప్పిన ఒక విషయం గుర్తు చేసుకోండి. దాన్ని గట్టిగా చెప్పండి: She said that …",
  },
  words: [
    { en: "said", te: "చెప్పారు, అన్నారు" },
    { en: "nothing serious", te: "పెద్ద సమస్య ఏమీ లేదు" },
    { en: "good news", te: "మంచి వార్త" },
    { en: "back to normal", te: "మళ్ళీ మామూలుగా" },
    { en: "a little high", te: "కొంచెం ఎక్కువ" },
  ],
  grammar: ["reported-speech", "was-were", "will"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Passing on what someone said", te: "ఒకరు చెప్పింది ఇంకొకరికి చెప్పడం" },
      body: {
        en: "To pass on someone's words, say said that and the news. The news usually moves one step back: is becomes was, will becomes would.",
        te: "ఒకరి మాట ఇంకొకరికి చెప్పాలంటే said that తర్వాత ఆ విషయం చెప్పండి. ఆ మాట మామూలుగా ఒక అడుగు వెనక్కి వెళ్తుంది: is బదులు was, will బదులు would.",
      },
      bridge: {
        te: ["నా BP", "నార్మల్‌గా ఉందని", "డాక్టర్ గారు", "చెప్పారు"],
        en: [
          { text: "The doctor", role: "who" },
          { text: "said", role: "action" },
          { text: "that my BP was normal", role: "what" },
        ],
      },
      examples: [
        { en: "The doctor said that my BP was normal.", te: "నా BP నార్మల్‌గా ఉందని డాక్టర్ గారు చెప్పారు." },
        { en: "She said the report would come on Monday.", te: "రిపోర్ట్ సోమవారం వస్తుందని ఆవిడ చెప్పారు." },
        { en: "The doctor said it was nothing serious.", te: "పెద్ద సమస్య ఏమీ లేదని డాక్టర్ గారు చెప్పారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "One step back", te: "ఒక అడుగు వెనక్కి" },
      items: [
        {
          form: "is → was",
          useFor: { en: "Her words: Your BP is normal.", te: "ఆవిడ మాట: Your BP is normal." },
          example: { en: "She said my BP was normal.", te: "నా BP నార్మల్‌గా ఉందని ఆవిడ చెప్పారు." },
        },
        {
          form: "are → were",
          useFor: { en: "Her words: Your reports are fine.", te: "ఆవిడ మాట: Your reports are fine." },
          example: { en: "She said my reports were fine.", te: "నా రిపోర్ట్‌లు బాగానే ఉన్నాయని ఆవిడ చెప్పారు." },
        },
        {
          form: "will → would",
          useFor: { en: "Her words: The report will come on Monday.", te: "ఆవిడ మాట: The report will come on Monday." },
          example: { en: "She said the report would come on Monday.", te: "రిపోర్ట్ సోమవారం వస్తుందని ఆవిడ చెప్పారు." },
        },
        {
          form: "can → could",
          useFor: { en: "Her words: You can start walking again.", te: "ఆవిడ మాట: You can start walking again." },
          example: { en: "She said I could start walking again.", te: "మళ్ళీ నడవడం మొదలుపెట్టొచ్చని ఆవిడ చెప్పారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The doctor said that my BP normal.",
      right: "The doctor said that my BP was normal.",
      why: {
        en: "English needs was here; Telugu often says BP నార్మల్ with no word for it.",
        te: "ఇక్కడ was తప్పకుండా కావాలి; తెలుగులో 'BP నార్మల్' అని ఉంది లేకుండానే అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "The nurse said the doctor was out of station.",
      right: "The nurse said the doctor was out of town.",
      why: {
        en: "Out of station is old Indian English; people everywhere say out of town, or away.",
        te: "out of station అనేది పాత Indian English; అందరికీ అర్థమయ్యేది out of town లేదా away.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "The doctor told you: Your BP is normal. Now your friend asks. What do you say?",
        te: "డాక్టర్ గారు Your BP is normal అన్నారు. ఇప్పుడు స్నేహితులు అడుగుతున్నారు. ఏమంటారు?",
      },
      options: ["The doctor said my BP was normal.", "The doctor said my BP normal.", "The doctor said me my BP was normal."],
      answer: 0,
      why: {
        en: "Passing on news needs was, and said takes no me straight after it.",
        te: "వార్త అందించేటప్పుడు was కావాలి; said తర్వాత నేరుగా me రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "She said the report ___ come on Monday.",
      te: "రిపోర్ట్ సోమవారం వస్తుందని ఆవిడ చెప్పారు.",
      options: ["would", "was", "is"],
      answer: 0,
      why: {
        en: "Her words had will; passing them on later, will usually becomes would.",
        te: "ఆవిడ మాటలో will ఉంది; తర్వాత ఇంకొకరికి చెప్పేటప్పుడు అది మామూలుగా would అవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend asks about your doctor. Say she always explains things clearly.",
        te: "మీ డాక్టర్ గారి గురించి స్నేహితులు అడుగుతున్నారు. ఆవిడ ఎప్పుడూ విషయాలు స్పష్టంగా వివరిస్తారని చెప్పండి.",
      },
      options: ["She always explains things clearly.", "She always explain things clearly.", "She is always explain things clearly."],
      answer: 0,
      why: {
        en: "One person, like she, takes s on the verb, even with always.",
        te: "ఒక్కరైతే (she లాగా) always ఉన్నా verb కి s వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "She said I should get blood test.",
      wrongIndex: 5,
      fix: "She said I should get a blood test.",
      why: {
        en: "One test needs a before it, like a pen; Telugu has no word for a.",
        te: "ఒక్క టెస్ట్ ముందు a కావాలి, a pen లాగా; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your neighbour asks about your check-up. The doctor said everything was fine. Tell her.",
        te: "మీ check-up గురించి పక్కింటావిడ అడుగుతున్నారు. అంతా బాగానే ఉందని డాక్టర్ గారు చెప్పారు. ఆవిడకి చెప్పండి.",
      },
      expected: [
        "The doctor said everything was fine.",
        "The doctor said that everything was fine.",
        "It went well. The doctor said everything was fine.",
      ],
      options: ["The doctor said everything was fine.", "The doctor said me everything was fine.", "The doctor told that everything was fine."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend asks when your report will come. The nurse said Monday. Tell him.",
        te: "మీ రిపోర్ట్ ఎప్పుడు వస్తుందని స్నేహితుడు అడుగుతున్నారు. సోమవారం అని నర్సు చెప్పారు. ఆయనకి చెప్పండి.",
      },
      expected: [
        "The nurse said it would come on Monday.",
        "The nurse said the report would come on Monday.",
        "The nurse said it would come on Monday. I'll know then.",
      ],
      options: ["The nurse said it would come on Monday.", "The nurse said it would come in Monday.", "The nurse said it would coming on Monday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "After the check-up", te: "check-up తర్వాత" },
    scene: {
      en: "You went for your check-up this morning. Your friend Usha calls to ask what the doctor said.",
      te: "ఈ రోజు పొద్దున మీరు check-up కి వెళ్ళారు. డాక్టర్ గారు ఏం చెప్పారని మీ స్నేహితురాలు ఉష గారు ఫోన్ చేసి అడుగుతున్నారు.",
    },
    partner: { en: "Usha (your friend)", te: "ఉష (మీ స్నేహితురాలు)" },
    skills: [
      { id: "pass", label: { en: "Passing on the news", te: "వార్త అందించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! You went for your check-up today, right? How did it go?",
        te: "హలో! ఈ రోజు మీరు check-up కి వెళ్ళారు కదా? ఎలా జరిగింది?",
        hint: { en: "Say it went well, and pass on what the doctor said about your BP.", te: "బాగా జరిగిందని చెప్పి, మీ BP గురించి డాక్టర్ గారు చెప్పింది చెప్పండి." },
        replies: [
          { say: "It went well. The doctor said my BP was normal.", good: true, skill: "pass" },
          { say: "It went well. She said my BP was back to normal.", good: true, skill: "pass" },
          { say: "It went well. The doctor said me my BP was normal.", good: false, skill: "pass", fixIt: "preposition" },
        ],
      },
      {
        partner: "That's good news! And your sugar?",
        te: "మంచి వార్త! మరి షుగర్?",
        hint: { en: "Say the doctor found it a little high, but not serious.", te: "షుగర్ కొంచెం ఎక్కువ ఉందని, కానీ పెద్ద సమస్య కాదని డాక్టర్ గారు అన్నారని చెప్పండి." },
        replies: [
          { say: "She said it was a little high, but nothing serious.", good: true, skill: "pass" },
          { say: "She said it a little high, but nothing serious.", good: false, skill: "pass", fixIt: "be" },
        ],
      },
      {
        partner: "Oh. Did she give you any new tablets?",
        te: "ఓ. ఆవిడ ఏమైనా కొత్త టాబ్లెట్లు ఇచ్చారా?",
        hint: { en: "Say no, and pass on what she said about the report.", te: "లేదని చెప్పి, రిపోర్ట్ గురించి ఆవిడ చెప్పింది చెప్పండి." },
        replies: [
          { say: "No. She said the report would come on Monday.", good: true, skill: "pass" },
          {
            say: "Why are you asking so many questions?",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I was only worried about you.", te: "సారీ! మీ గురించి కంగారు పడ్డాను, అంతే." },
          },
        ],
      },
      {
        partner: "Okay. Take care, and tell me when the report comes.",
        te: "సరే. జాగ్రత్త, రిపోర్ట్ రాగానే నాకు చెప్పండి.",
        hint: { en: "Thank her, promise to tell her, and say goodbye.", te: "థాంక్స్ చెప్పి, తప్పకుండా చెప్తానని మాట ఇచ్చి, బై చెప్పండి." },
        replies: [
          { say: "Thank you. I'll tell you on Monday. Bye!", good: true, skill: "polite" },
          { say: "Thank you. I'll tell you in Monday. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
