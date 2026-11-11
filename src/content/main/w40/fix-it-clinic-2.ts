import type { Lesson } from "../../types";

/** Week 40, Day 4 (CURRICULUM §4): Fix-It Clinic — all ten Fix-it errors (§2), one last check, in Stage 2 sentences. */
export const day: Lesson = {
  id: "fix-it-clinic-2",
  kind: "lesson",
  title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" },
  subtitle: "the ten mistakes, one last check",
  summary: {
    en: "Fix the ten mistakes Telugu speakers make most, one last time in Stage 2: have lived since, No, I didn't, two photocopies and more.",
    te: "తెలుగువాళ్ళు ఎక్కువగా చేసే పది తప్పులు, స్టేజ్ 2 చివర్లో మళ్ళీ ఒకసారి సరిచేసుకుందాం: have lived since, No, I didn't, two photocopies, ఇంకా మరికొన్ని.",
  },
  seo: {
    title: "Ten Common English Mistakes for Telugu Speakers",
    description:
      "Say I have lived here since 2010 and No, I didn't go. A lesson for Telugu speakers on fixing the ten most common English mistakes.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have lived", role: "action" },
    { text: "here", role: "what" },
    { text: "since 2010", role: "when" },
  ],
  core: [
    { en: "I have lived here since two thousand ten.", te: "నేను 2010 నుంచి ఇక్కడ ఉంటున్నాను.", extra: ["am"] },
    { en: "No, I didn't go to the function.", te: "లేదు, నేను ఫంక్షన్‌కి వెళ్ళలేదు.", extra: ["Yes,"] },
    { en: "Why is the office closed today?", te: "ఈ రోజు ఆఫీసు ఎందుకు మూసి ఉంది?", extra: ["does"] },
    { en: "She knows the officer at the counter.", te: "కౌంటర్ దగ్గర ఉన్న ఆఫీసర్ ఆవిడకి తెలుసు.", extra: ["knowing"] },
    { en: "I need two photocopies of my Aadhaar card.", te: "నా ఆధార్ కార్డ్‌వి రెండు జిరాక్స్ కాపీలు కావాలి.", extra: ["photocopy"] },
    { en: "Could you send an electrician tomorrow?", te: "రేపు ఒక ఎలక్ట్రీషియన్‌ని పంపిస్తారా?", extra: ["a"] },
    { en: "He is my cousin from Guntur.", te: "ఆయన గుంటూరులో ఉండే మా కజిన్.", extra: ["brother"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick the one mistake you make most. Say the correct sentence aloud five times today.",
    te: "మీరు ఎక్కువగా చేసే ఒక తప్పు ఎంచుకోండి. సరైన వాక్యాన్ని ఈ రోజు ఐదుసార్లు గట్టిగా అనండి.",
  },
  words: [
    { en: "sentence", te: "వాక్యం" },
    { en: "carefully", te: "జాగ్రత్తగా" },
    { en: "natural", te: "సహజంగా" },
    { en: "aloud", te: "గట్టిగా, పైకి" },
    { en: "improve", te: "మెరుగవడం, బాగుపడటం" },
  ],
  grammar: ["present-perfect", "yes-no-questions", "question-words", "articles", "plurals-countable", "prepositions"],
  topics: ["offices", "people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ten mistakes, one last check", te: "పది తప్పులు, చివరిసారి చూసుకుందాం" },
      body: {
        en: "You know these rules now; the old habit is the problem. Before you speak, check the small words: have lived, didn't, is, a or an, an s. Say the right sentence aloud a few times, and it becomes natural.",
        te: "ఈ నియమాలు మీకు తెలుసు; పాత అలవాటే సమస్య. మాట్లాడే ముందు చిన్న పదాలు చూసుకోండి: have lived, didn't, is, a / an, s. సరైన వాక్యాన్ని కొన్నిసార్లు గట్టిగా అంటే అదే సహజంగా వచ్చేస్తుంది.",
      },
      bridge: {
        te: ["నేను", "2010 నుంచి", "ఇక్కడ", "ఉంటున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have lived", role: "action" },
          { text: "here", role: "what" },
          { text: "since 2010", role: "when" },
        ],
      },
      examples: [
        { en: "I have lived here since two thousand ten.", te: "నేను 2010 నుంచి ఇక్కడ ఉంటున్నాను." },
        { en: "No, I didn't go to the function.", te: "లేదు, నేను ఫంక్షన్‌కి వెళ్ళలేదు." },
        { en: "Why is the office closed today?", te: "ఈ రోజు ఆఫీసు ఎందుకు మూసి ఉంది?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Check these before you speak", te: "మాట్లాడే ముందు ఇవి చూసుకోండి" },
      items: [
        {
          form: "have lived, have known + since / for",
          useFor: { en: "From a time in the past up to now.", te: "గతంలో ఒక సమయం నుంచి ఇప్పటి వరకు." },
          example: { en: "We have known each other since school.", te: "స్కూల్ రోజుల నుంచి మేము ఒకరికొకరం తెలుసు." },
        },
        {
          form: "No, I didn't.",
          useFor: { en: "Answering You didn't …? when you did not.", te: "'You didn't …?' అని అడిగితే, మీరు చేయకపోతే." },
          example: { en: "You didn't eat? No, I didn't. I wasn't hungry.", te: "తినలేదా? లేదు, తినలేదు. ఆకలిగా లేదు." },
        },
        {
          form: "Why is …? Does …?",
          useFor: { en: "In a question, is or does comes before the person or thing.", te: "ప్రశ్నలో is, does ముందు వస్తాయి, మనిషి లేదా వస్తువు తర్వాత." },
          example: { en: "Does the bank open on Saturday?", te: "శనివారం బ్యాంక్ తెరుస్తారా?" },
        },
        {
          form: "a / an / the",
          useFor: { en: "One of many: a or an. The one you both know: the.", te: "చాలా వాటిలో ఒకటి: a / an. ఇద్దరికీ తెలిసినది: the." },
          example: { en: "Please call an electrician for the kitchen light.", te: "వంటగది లైట్ కోసం ఒక ఎలక్ట్రీషియన్‌ని పిలవండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "You didn't go to the function? Yes, I didn't.",
      right: "You didn't go to the function? No, I didn't.",
      why: {
        en: "In English, didn't always goes with No, though Telugu says అవును, వెళ్ళలేదు.",
        te: "తెలుగులో 'అవును, వెళ్ళలేదు' అన్నా, ఇంగ్లీష్‌లో didn't తో ఎప్పుడూ No వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "He is my cousin brother from Guntur.",
      right: "He is my cousin from Guntur.",
      why: {
        en: "Cousin is enough in English, for a man or a woman; never add brother or sister.",
        te: "ఇంగ్లీష్‌లో cousin అంటే చాలు, మగవారైనా ఆడవారైనా; brother, sister చేర్చకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "The office is closed today. Ask the guard why.", te: "ఈ రోజు ఆఫీసు మూసి ఉంది. ఎందుకో గార్డుని అడగండి." },
      options: ["Why is the office closed today?", "Why the office is closed today?", "Why office closed today?"],
      answer: 0,
      why: {
        en: "In a question, is comes before the office, not after it.",
        te: "ప్రశ్నలో is ని the office కంటే ముందు పెట్టాలి, తర్వాత కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Can you give me some ___ about the new scheme?",
      te: "కొత్త పథకం గురించి కొంచెం సమాచారం ఇస్తారా?",
      options: ["information", "informations", "an information"],
      answer: 0,
      why: {
        en: "Information is never counted, so it takes no s and no an.",
        te: "information ని లెక్కపెట్టరు; దానికి s గానీ, an గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Tell the shop assistant your phone is very slow.", te: "మీ ఫోన్ చాలా slow గా ఉందని షాపులో చెప్పండి." },
      options: ["My phone is very slow these days.", "My phone very slow these days.", "My phone is very slowly these days."],
      answer: 0,
      why: {
        en: "Telugu can say నా ఫోన్ చాలా slow with no verb, but English needs is.",
        te: "తెలుగులో 'నా ఫోన్ చాలా slow' అని verb లేకుండా అనొచ్చు; ఇంగ్లీష్‌లో is తప్పనిసరి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Please discuss about this with the officer.",
      wrongIndex: 2,
      fix: "Please discuss this with the officer.",
      why: {
        en: "Discuss already means talk about, so about is not needed.",
        te: "discuss అంటేనే 'గురించి మాట్లాడటం'; about అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell the officer your neighbour lives alone and needs help.",
        te: "మీ పొరుగువారు ఒంటరిగా ఉంటారని, వారికి సహాయం కావాలని ఆఫీసర్‌కి చెప్పండి.",
      },
      expected: ["My neighbour lives alone and needs help.", "She lives alone and needs help.", "He lives alone and needs help."],
      options: ["My neighbour lives alone and needs help.", "My neighbour live alone and need help.", "My neighbour is living alone and needing help."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Someone asks if you know Mr Prasad at the bank. You know him well.",
        te: "బ్యాంక్‌లో ప్రసాద్ గారు మీకు తెలుసా అని ఒకరు అడిగారు. ఆయన మీకు బాగా తెలుసు.",
      },
      expected: ["Yes, I know him well.", "Yes, I know him."],
      options: ["Yes, I know him well.", "Yes, I am knowing him well.", "Yes, I knowing him well."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Checking a message", te: "మెసేజ్ సరిచూడటం" },
    scene: {
      en: "Your friend Satish is writing a WhatsApp message to the colony group. Listen carefully as he reads each line.",
      te: "మీ స్నేహితుడు సతీష్ కాలనీ గ్రూప్‌కి WhatsApp మెసేజ్ రాస్తున్నారు. పంపే ముందు ఒక్కో లైన్ చదివి వినిపిస్తున్నారు; జాగ్రత్తగా వినండి.",
    },
    partner: { en: "Satish (a friend)", te: "సతీష్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "fix", label: { en: "Correcting kindly", te: "మర్యాదగా సరిచేయడం" } },
      { id: "kind", label: { en: "Encouraging", te: "ధైర్యం చెప్పడం" } },
    ],
    turns: [
      {
        partner: "First line: I am living here since two thousand fifteen.",
        te: "మొదటి లైన్: 'I am living here since 2015.'",
        hint: { en: "Correct it kindly: it started in a year and goes on now.", te: "మర్యాదగా సరిచేయండి: ఒక సంవత్సరంలో మొదలై ఇప్పటికీ ఉన్నది." },
        replies: [
          { say: "Almost. Say: I have lived here since two thousand fifteen.", good: true, skill: "fix" },
          { say: "That's fine. Am living is right here.", good: false, skill: "fix", fixIt: "duration" },
        ],
      },
      {
        partner: "Next: Water tanker is coming on Sunday morning.",
        te: "తర్వాత: 'Water tanker is coming on Sunday morning.'",
        hint: { en: "Tell him one small word is missing at the start.", te: "మొదట్లో ఒక చిన్న పదం లేదని చెప్పండి." },
        replies: [
          { say: "Good, but start with the: The water tanker is coming.", good: true, skill: "fix" },
          { say: "It's perfect. Don't change anything.", good: false, skill: "fix", fixIt: "article" },
        ],
      },
      {
        partner: "Last line: Everybody please do the needful.",
        te: "చివరి లైన్: 'Everybody please do the needful.'",
        hint: { en: "Suggest a clear, polite line that says what to do.", te: "ఏం చేయాలో స్పష్టంగా, మర్యాదగా చెప్పే లైన్ సూచించండి." },
        replies: [
          { say: "Better: Please keep your water drums ready.", good: true, skill: "fix" },
          { say: "Fine. Do the needful is good English.", good: false, skill: "fix", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Thank you! Is my message better now?",
        te: "థాంక్యూ! ఇప్పుడు నా మెసేజ్ బాగుందా?",
        hint: { en: "Say yes, and encourage him kindly.", te: "అవునని చెప్పి, ఆయనకి ధైర్యం చెప్పండి." },
        replies: [
          { say: "Yes, much better! Your English has really improved.", good: true, skill: "kind" },
          {
            say: "Better, but you still make many mistakes.",
            good: false,
            skill: "kind",
            react: { en: "Hmm. Okay, I'll keep practicing.", te: "హ్మ్. సరే, ఇంకా ప్రాక్టీస్ చేస్తాను." },
          },
        ],
      },
    ],
  },
};
