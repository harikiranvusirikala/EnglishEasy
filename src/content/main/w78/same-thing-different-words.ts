import type { Lesson } from "../../types";

/** Week 78, Day 4 (CURRICULUM §5): more British and American pairs — mobile and cell phone, bill and check, holiday and vacation, queue and line. */
export const day: Lesson = {
  id: "same-thing-different-words",
  kind: "lesson",
  title: { en: "Same Thing, Different Words", te: "ఒకే అర్థం, వేరే పదాలు" },
  subtitle: "more British and American pairs",
  summary: {
    en: "Learn four more pairs: mobile and cell phone, bill and check, holiday and vacation, queue and line.",
    te: "ఇంకో నాలుగు జంటలు నేర్చుకుందాం: mobile, cell phone; bill, check; holiday, vacation; queue, line.",
  },
  seo: {
    title: "British and American Word Pairs in English for Telugu Speakers",
    description:
      "In the US they say vacation, not holiday, and check for the bill. Simple lessons for Telugu speakers on words that change between countries.",
  },
  pattern: [
    { text: "In the US,", role: "what" },
    { text: "they", role: "who" },
    { text: "say", role: "action" },
    { text: "vacation", role: "what" },
  ],
  core: [
    { en: "In the US, they say vacation, not holiday.", te: "అమెరికాలో holiday అనరు, vacation అంటారు.", extra: ["says"] },
    { en: "In America, the check means the bill.", te: "అమెరికాలో check అంటే బిల్.", extra: ["mean"] },
    { en: "Americans call a mobile a cell phone.", te: "అమెరికా వాళ్ళు మొబైల్‌ని cell phone అంటారు.", extra: ["calls"] },
    { en: "Can I have the check, please?", te: "బిల్ ఇస్తారా, ప్లీజ్?", extra: ["a"] },
    { en: "My cousin in London is on holiday in Goa.", te: "లండన్‌లో ఉండే నా కజిన్ సెలవులకి గోవాలో ఉన్నారు.", extra: ["at"] },
    { en: "Joseph's vacation in India starts next week.", te: "జోసెఫ్ గారి ఇండియా vacation వచ్చే వారం మొదలవుతుంది.", extra: ["start"] },
    { en: "There was a long line at the ticket counter.", te: "టికెట్ కౌంటర్ దగ్గర పెద్ద క్యూ ఉంది.", extra: ["were"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say two pairs aloud today: holiday and vacation, bill and check.",
    te: "ఈ రోజు రెండు జంటలు గట్టిగా చెప్పండి: holiday, vacation; bill, check.",
  },
  words: [
    { en: "cell phone", te: "అమెరికాలో మొబైల్ ఫోన్" },
    { en: "vacation", te: "అమెరికాలో సెలవులు" },
    { en: "the check", te: "అమెరికాలో హోటల్ బిల్" },
    { en: "the US", te: "అమెరికా, యునైటెడ్ స్టేట్స్" },
    { en: "restroom", te: "అమెరికాలో టాయిలెట్, washroom" },
  ],
  grammar: ["present-simple", "articles", "plurals-countable"],
  topics: ["phone", "travel", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Four more pairs", te: "ఇంకో నాలుగు జంటలు" },
      body: {
        en: "Americans say cell phone for mobile, check for bill, vacation for holiday and line for queue. Both words are right; only the country is different.",
        te: "అమెరికాలో mobile ని cell phone అని, bill ని check అని, holiday ని vacation అని, queue ని line అని అంటారు. రెండూ సరైనవే; దేశం మాత్రమే వేరు.",
      },
      bridge: {
        te: ["అమెరికాలో", "holiday అనరు,", "vacation", "అంటారు"],
        en: [
          { text: "In the US,", role: "what" },
          { text: "they", role: "who" },
          { text: "say", role: "action" },
          { text: "vacation, not holiday", role: "what" },
        ],
      },
      examples: [
        { en: "In the US, they say vacation, not holiday.", te: "అమెరికాలో holiday అనరు, vacation అంటారు." },
        { en: "In America, the check means the bill.", te: "అమెరికాలో check అంటే బిల్." },
        { en: "Americans call a mobile a cell phone.", te: "అమెరికా వాళ్ళు మొబైల్‌ని cell phone అంటారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which word where?", te: "ఏ పదం ఎక్కడ?" },
      items: [
        {
          form: "mobile, cell phone",
          useFor: { en: "India and Britain say mobile; Americans say cell phone.", te: "మన దేశంలో, బ్రిటన్‌లో mobile; అమెరికాలో cell phone." },
          example: { en: "What's your cell phone number?", te: "మీ మొబైల్ నంబర్ ఏంటి?" },
        },
        {
          form: "bill, check",
          useFor: { en: "After a meal: the bill here and in Britain, the check in America.", te: "భోజనం అయ్యాక: ఇక్కడ, బ్రిటన్‌లో bill; అమెరికాలో check." },
          example: { en: "Can I have the check, please?", te: "బిల్ ఇస్తారా, ప్లీజ్?" },
        },
        {
          form: "holiday, vacation",
          useFor: { en: "Time away from work: holiday in Britain, vacation in America.", te: "పని నుంచి సెలవు: బ్రిటన్‌లో holiday, అమెరికాలో vacation." },
          example: { en: "Joseph's vacation in India starts next week.", te: "జోసెఫ్ గారి ఇండియా vacation వచ్చే వారం మొదలవుతుంది." },
        },
        {
          form: "queue, line",
          useFor: { en: "People waiting one behind another: queue in Britain, line in America.", te: "ఒకరి వెనక ఒకరు ఎదురుచూడటం: బ్రిటన్‌లో queue, అమెరికాలో line." },
          example: { en: "Please stand in line for tickets.", te: "టికెట్ల కోసం దయచేసి క్యూలో నిలబడండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "My cousin in London say holiday, not vacation.",
      right: "My cousin in London says holiday, not vacation.",
      why: {
        en: "One cousin is like he or she, so the verb takes s in the present.",
        te: "ఒక్క కజిన్ అంటే he, she లాంటిది; అందుకే ఇప్పటి కాలంలో verb కి s వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "My friend is in holiday in Goa.",
      right: "My friend is on holiday in Goa.",
      why: {
        en: "Holiday and vacation take on; in is used for the place.",
        te: "holiday, vacation కి on వస్తుంది; in అనేది ఊరి పేరుకి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "In a mall in America, you ask for the toilet. A man says: The restroom is on the left. What is on the left?",
        te: "అమెరికాలో ఒక mall లో టాయిలెట్ ఎక్కడని అడిగారు. The restroom is on the left అని ఒకాయన చెప్పారు. ఎడమవైపు ఏముంది?",
      },
      options: ["The toilet", "A room to rest and sleep", "The way out"],
      answer: 0,
      why: {
        en: "Restroom is the polite American word for a toilet, not a room for rest.",
        te: "అమెరికాలో టాయిలెట్‌ని మర్యాదగా restroom అంటారు; విశ్రాంతి గది కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "We stood in line for two ___ at the passport office.",
      te: "పాస్‌పోర్ట్ ఆఫీస్‌లో రెండు గంటలు క్యూలో నిలబడ్డాం.",
      options: ["hours", "hour", "the hour"],
      answer: 0,
      why: {
        en: "After two, the word takes s; Telugu also says గంటలు, not గంట.",
        te: "రెండు తర్వాత s చేర్చాలి; తెలుగులో కూడా గంట కాదు, గంటలు అంటాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask your American friend what she calls a mobile.",
        te: "మొబైల్‌ని ఏమంటారని మీ అమెరికన్ స్నేహితురాలిని అడగండి.",
      },
      options: ["What do you call a mobile in America?", "What you call a mobile in America?", "How you call a mobile in America?"],
      answer: 0,
      why: {
        en: "A question with what needs do before you; Telugu adds no such word.",
        te: "what ప్రశ్నలో you ముందు do వస్తుంది; తెలుగులో అలాంటి పదం ఉండదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "My cousin bought new cell phone in London.",
      wrongIndex: 3,
      fix: "My cousin bought a new cell phone in London.",
      why: {
        en: "One thing needs a before it, even with new in between; Telugu has no word like a.",
        te: "ఒక్క వస్తువుకి ముందు a కావాలి, మధ్యలో new ఉన్నా సరే; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You have finished your tea at a cafe in London. Ask for the bill.",
        te: "లండన్‌లో ఒక cafe లో టీ తాగడం అయిపోయింది. బిల్ అడగండి.",
      },
      expected: ["Could I have the bill, please?", "Can I have the bill, please?", "The bill, please."],
      options: ["Could I have the bill, please?", "Could I have bill, please?", "Bill. Bring it."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your American friend asks what Indians call a cell phone. Tell him.",
        te: "మనవాళ్ళు cell phone ని ఏమంటారని మీ అమెరికన్ స్నేహితుడు అడుగుతున్నారు. ఆయనకి చెప్పండి.",
      },
      expected: ["We call it a mobile.", "In India, we say mobile.", "We say mobile phone."],
      options: ["We call it a mobile.", "We are calling it a mobile.", "We calls it a mobile."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A video call to London", te: "లండన్‌కి వీడియో కాల్" },
    scene: {
      en: "Your friend Mary has lived in London all her life. She is on a video call with you.",
      te: "మీ స్నేహితురాలు మేరీ గారు జీవితమంతా లండన్‌లోనే ఉన్నారు. ఆవిడ మీతో వీడియో కాల్‌లో ఉన్నారు.",
    },
    partner: { en: "Mary (your friend in London)", te: "మేరీ (లండన్‌లో ఉండే మీ స్నేహితురాలు)" },
    voice: "gb-f",
    skills: [
      { id: "words", label: { en: "British and American words", te: "బ్రిటిష్, అమెరికన్ పదాలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Can you hear me? The connection is a bit slow today.",
        te: "హలో! నా మాట వినిపిస్తోందా? ఈ రోజు connection కొంచెం నెమ్మదిగా ఉంది.",
        hint: { en: "Greet her, and say you can hear her well.", te: "ఆవిడని పలకరించి, బాగానే వినిపిస్తోందని చెప్పండి." },
        replies: [
          { say: "Hello, Mary! Yes, I can hear you well.", good: true, skill: "polite" },
          { say: "Hello, Mary! Yes, I am hearing you well.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Lovely. I'm on holiday next week. I'm going to the seaside.",
        te: "బాగుంది. వచ్చే వారం నాకు సెలవులు. సముద్ర తీరానికి వెళ్తున్నాను.",
        hint: { en: "Check that holiday means the same as vacation. Use a short tag at the end.", te: "holiday అంటే vacation ఏనా అని సరిచూసుకోండి. చివర చిన్న tag వాడండి." },
        replies: [
          { say: "So holiday means vacation, doesn't it?", good: true, skill: "words" },
          { say: "So holiday means vacation, isn't it?", good: false, skill: "words", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Exactly! Americans say vacation. So, what's new with you?",
        te: "అంతే! అమెరికా వాళ్ళు vacation అంటారు. సరే, మీ కబుర్లేంటి?",
        hint: { en: "Tell her you waited in a long queue at the bank today.", te: "ఈ రోజు బ్యాంక్‌లో పెద్ద క్యూలో ఎదురుచూశారని చెప్పండి." },
        replies: [
          { say: "Today I waited in a long queue at the bank.", good: true, skill: "words" },
          { say: "Today I waited in a long queue on the bank.", good: false, skill: "words", fixIt: "preposition" },
          {
            say: "Nothing. Why do you ask so many questions?",
            good: false,
            skill: "polite",
            react: { en: "Oh! Sorry, I was only asking.", te: "అయ్యో! సారీ, ఊరికే అడిగాను అంతే." },
          },
        ],
      },
      {
        partner: "Oh no! Queues are the same everywhere. Well, I must go now. Bye!",
        te: "అయ్యో! క్యూలు ఎక్కడైనా ఒకటే. సరే, ఇక నేను వెళ్ళాలి. బై!",
        hint: { en: "Wish her a lovely holiday, and say goodbye.", te: "ఆవిడ సెలవులు బాగా గడవాలని చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Have a lovely holiday, Mary. Bye!", good: true, skill: "polite" },
          { say: "Have a lovely holiday, Mary. Take rest. Bye!", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
