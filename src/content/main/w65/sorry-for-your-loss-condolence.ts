import type { Lesson } from "../../types";

/** Week 65, Day 3 (CURRICULUM §5): gentle condolences, said softly and slowly — I'm so sorry to hear about your father. He was a very kind man. */
export const day: Lesson = {
  id: "sorry-for-your-loss-condolence",
  kind: "lesson",
  title: { en: "I'm Sorry for Your Loss", te: "పరామర్శ" },
  subtitle: "condolences: I'm so sorry to hear about …",
  summary: {
    en: "Learn to offer condolences gently: I'm so sorry to hear about your father. He was a very kind man.",
    te: "మృదువుగా పరామర్శించడం నేర్చుకుందాం: I'm so sorry to hear about your father. He was a very kind man.",
  },
  seo: {
    title: "Condolences in English for Telugu Speakers",
    description:
      "Say I'm so sorry to hear about your father and He was a very kind man. Gentle lessons for Telugu speakers on visiting a family after a loss.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "so sorry to hear", role: "action" },
    { text: "about your father", role: "what" },
  ],
  core: [
    { en: "I'm so sorry to hear about your father.", te: "మీ నాన్నగారి గురించి విని చాలా బాధగా ఉంది.", extra: ["for"] },
    { en: "He was a very kind man.", te: "ఆయన చాలా మంచి మనిషి.", extra: ["is"] },
    { en: "I'm sorry for your loss.", te: "మీకు ఈ లోటు కలిగినందుకు చాలా బాధగా ఉంది.", extra: ["lose"] },
    { en: "We will all miss him.", te: "ఆయన లేని లోటు మా అందరికీ తెలుస్తుంది.", extra: ["missing"] },
    { en: "He passed away peacefully last night.", te: "ఆయన నిన్న రాత్రి ప్రశాంతంగా కన్నుమూశారు.", extra: ["passes"] },
    { en: "Please accept my heartfelt condolences.", te: "నా ప్రగాఢ సానుభూతి తెలియజేస్తున్నాను.", extra: ["condolence"] },
    { en: "He always greeted everyone with a smile.", te: "ఆయన ఎప్పుడూ అందరినీ నవ్వుతూ పలకరించేవారు.", extra: ["greet"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say these softly and slowly, three times: I'm so sorry to hear about … He was a very kind man.",
    te: "ఈ మాటల్ని మెల్లగా, నెమ్మదిగా మూడుసార్లు చెప్పండి: I'm so sorry to hear about … He was a very kind man.",
  },
  words: [
    { en: "loss", te: "లోటు, ఆప్తుల్ని పోగొట్టుకోవడం" },
    { en: "passed away", te: "కన్నుమూశారు, చనిపోయారు" },
    { en: "condolences", te: "సానుభూతి, సంతాపం" },
    { en: "funeral", te: "అంత్యక్రియలు" },
    { en: "strength", te: "ధైర్యం, శక్తి" },
  ],
  grammar: ["was-were", "past-simple", "politeness-softening"],
  topics: ["feelings", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Gentle words after a loss", te: "ఎవరైనా కన్నుమూసినప్పుడు మృదువైన మాటలు" },
      body: {
        en: "Start with I'm so sorry to hear about … Then say one good thing about the person, with was, because he is no more. Speak softly and slowly.",
        te: "ముందు I'm so sorry to hear about … అనండి. తర్వాత ఆ వ్యక్తి గురించి ఒక మంచి మాట was తో చెప్పండి; ఆయన ఇప్పుడు లేరు కదా. మెల్లగా మాట్లాడండి.",
      },
      bridge: {
        te: ["మీ నాన్నగారి గురించి", "విని", "చాలా బాధగా ఉంది"],
        en: [
          { text: "I'm", role: "who" },
          { text: "so sorry to hear", role: "action" },
          { text: "about your father", role: "what" },
        ],
      },
      examples: [
        { en: "I'm so sorry to hear about your father.", te: "మీ నాన్నగారి గురించి విని చాలా బాధగా ఉంది." },
        { en: "He was a very kind man.", te: "ఆయన చాలా మంచి మనిషి." },
        { en: "I'm sorry for your loss.", te: "మీకు ఈ లోటు కలిగినందుకు చాలా బాధగా ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say, and when", te: "ఏ మాట, ఎప్పుడు" },
      items: [
        {
          form: "I'm so sorry to hear about …",
          useFor: { en: "When you first meet the family, or on the phone.", te: "కుటుంబాన్ని మొదట కలిసినప్పుడు, లేదా ఫోన్‌లో." },
          example: { en: "I'm so sorry to hear about your father.", te: "మీ నాన్నగారి గురించి విని చాలా బాధగా ఉంది." },
        },
        {
          form: "I'm sorry for your loss.",
          useFor: { en: "A short, gentle line when you did not know the person well.", te: "ఆ వ్యక్తి మీకు అంత బాగా తెలియనప్పుడు చిన్న, మృదువైన మాట." },
          example: { en: "I'm sorry for your loss.", te: "మీకు ఈ లోటు కలిగినందుకు చాలా బాధగా ఉంది." },
        },
        {
          form: "He was …",
          useFor: { en: "A good memory of the person; use was, not is.", te: "ఆ వ్యక్తి గురించి ఒక మంచి జ్ఞాపకం; is కాదు, was వాడండి." },
          example: { en: "He always greeted everyone with a smile.", te: "ఆయన ఎప్పుడూ అందరినీ నవ్వుతూ పలకరించేవారు." },
        },
        {
          form: "May God give you strength.",
          useFor: { en: "A prayer for the family, right for any faith.", te: "కుటుంబానికి ధైర్యం కోరే ప్రార్థన; ఏ మతం వారికైనా సరిపోతుంది." },
          example: { en: "May God give you strength at this time.", te: "ఈ సమయంలో దేవుడు మీకు ధైర్యం ఇవ్వాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I heard your father expired.",
      right: "I heard your father passed away.",
      why: {
        en: "Expired is for tickets and medicines; for a person, passed away is the gentle word.",
        te: "expired అనేది టికెట్లకి, మందులకి; మనిషి గురించి మృదువుగా passed away అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "He was knowing everyone in the colony.",
      right: "He knew everyone in the colony.",
      why: {
        en: "Know never takes -ing, even in the past; the past form knew is enough.",
        te: "know కి గతంలో కూడా -ing రాదు; past form knew అంటే చాలు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your neighbour Ramesh's father has passed away. What do you say first?",
        te: "పక్కింటి రమేష్ గారి నాన్నగారు కన్నుమూశారు. ముందుగా ఏమంటారు?",
      },
      options: ["I'm so sorry to hear about your father.", "So sorry. How did he die?", "I so sorry to hear about your father."],
      answer: 0,
      why: {
        en: "Begin gently with I am sorry and never drop am; questions about how it happened can wait.",
        te: "I am sorry తో మెల్లగా మొదలుపెట్టండి, am వదలకూడదు; ఎలా జరిగిందని వెంటనే అడగడం మర్యాద కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Your father ___ a very kind man.",
      te: "మీ నాన్నగారు చాలా మంచి మనిషి.",
      options: ["was", "is", "were"],
      answer: 0,
      why: {
        en: "Telugu మంచి మనిషి shows no time, but English needs the past, because he has passed away.",
        te: "తెలుగులో 'మంచి మనిషి' కి కాలం కనిపించదు; ఆయన కన్నుమూశారు కాబట్టి ఇంగ్లీష్‌లో past కావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Ramesh's mother is very sad. Tell a friend what she needs now.",
        te: "రమేష్ గారి అమ్మగారు చాలా బాధలో ఉన్నారు. ఆవిడకి ఇప్పుడు ఏం కావాలో స్నేహితులకి చెప్పండి.",
      },
      options: ["She needs people around her now.", "She need people around her now.", "She is needing people around her now."],
      answer: 0,
      why: {
        en: "One person, like she, takes s on need, and need is a state, so it takes no -ing.",
        te: "ఒక్కరైతే (she) need కి s వస్తుంది; need అనేది అవసరం, జరుగుతున్న పని కాదు, అందుకే -ing రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "His father was retired teacher from Guntur.",
      wrongIndex: 3,
      fix: "His father was a retired teacher from Guntur.",
      why: {
        en: "A job needs a before it, even with a word like retired; Telugu has no word like a.",
        te: "retired లాంటి పదం ఉన్నా, ఉద్యోగం ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the condolence visit, tell the family that all of you will miss him.",
        te: "పరామర్శకి వెళ్ళినప్పుడు, ఆయన లేని లోటు మీ అందరికీ తెలుస్తుందని కుటుంబానికి చెప్పండి.",
      },
      expected: ["We will all miss him.", "We will miss him very much.", "We will all miss him very much."],
      options: ["We will all miss him.", "We all will missing him.", "We will all miss to him."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Say one good thing about the man who passed away: in his life, he always helped people.",
        te: "కన్నుమూసిన ఆయన గురించి ఒక మంచి మాట చెప్పండి: జీవితమంతా ఆయన ఎప్పుడూ అందరికీ సహాయం చేసేవారు.",
      },
      expected: ["He always helped people.", "He always helped everyone.", "He was always ready to help."],
      options: ["He always helped people.", "He always helping people.", "He is always helping people."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A condolence visit", te: "పరామర్శకి వెళ్ళడం" },
    scene: {
      en: "Your neighbour Ramesh's father passed away two days ago. You visit Ramesh at his home.",
      te: "మీ పక్కింటి రమేష్ గారి నాన్నగారు రెండు రోజుల క్రితం కన్నుమూశారు. రమేష్ గారిని పరామర్శించడానికి వాళ్ళింటికి వెళ్ళారు.",
    },
    partner: { en: "Ramesh (your neighbour)", te: "రమేష్ (మీ పక్కింటివారు)" },
    voice: "b",
    skills: [
      { id: "comfort", label: { en: "Comforting gently", te: "మృదువుగా ఓదార్చడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Please come in. Thank you for coming.",
        te: "లోపలికి రండి. వచ్చినందుకు థ్యాంక్స్.",
        hint: { en: "Say softly how sorry you are about his father.", te: "ఆయన నాన్నగారి గురించి ఎంత బాధగా ఉందో మెల్లగా చెప్పండి." },
        replies: [
          { say: "I'm so sorry to hear about your father.", good: true, skill: "comfort" },
          { say: "I'm so sorry for your loss.", good: true, skill: "comfort" },
          { say: "I heard your father expired. So sad.", good: false, skill: "comfort", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Thank you. It was very sudden. The funeral was yesterday.",
        te: "థ్యాంక్స్. చాలా హఠాత్తుగా జరిగింది. నిన్న అంత్యక్రియలు అయ్యాయి.",
        hint: { en: "Say one good thing you remember about his father.", te: "ఆయన నాన్నగారి గురించి మీకు గుర్తున్న ఒక మంచి విషయం చెప్పండి." },
        replies: [
          { say: "He was a very kind man. He always greeted me with a smile.", good: true, skill: "comfort" },
          { say: "He is a very kind man. He always greets me with a smile.", good: false, skill: "comfort" },
          {
            say: "Was he taking his tablets properly?",
            good: false,
            skill: "polite",
            react: { en: "Please, let's not talk about that now.", te: "ప్లీజ్, ఇప్పుడు ఆ విషయం వద్దండీ." },
          },
        ],
      },
      {
        partner: "Yes. Everyone in the colony loved him.",
        te: "అవును. కాలనీలో అందరికీ ఆయనంటే చాలా ఇష్టం.",
        hint: { en: "Agree, and say all of you will miss him.", te: "ఒప్పుకుని, ఆయన లేని లోటు మీ అందరికీ తెలుస్తుందని చెప్పండి." },
        replies: [
          { say: "Yes. We will all miss him very much.", good: true, skill: "comfort" },
          { say: "Yes. We all will missing him very much.", good: false, skill: "comfort" },
        ],
      },
      {
        partner: "Thank you for coming. It means a lot to us.",
        te: "వచ్చినందుకు థ్యాంక్స్. అది మాకు చాలా ఓదార్పు.",
        hint: { en: "Say a short prayer for the family, and take leave gently.", te: "కుటుంబం కోసం ఒక చిన్న ప్రార్థన చెప్పి, మెల్లగా సెలవు తీసుకోండి." },
        replies: [
          { say: "May God give you all strength. Please take care.", good: true, skill: "polite" },
          { say: "Okay, I'm getting late. Bye!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
