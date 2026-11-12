import type { Lesson } from "../../types";

/** Week 80, Day 4 (CURRICULUM §5): Fix-It Clinic — all ten Fix-it errors (§2), checked one last time in Stage 3 sentences. */
export const day: Lesson = {
  id: "fix-it-clinic-5",
  kind: "lesson",
  title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" },
  subtitle: "the ten mistakes in Stage 3 sentences",
  summary: {
    en: "Fix the ten mistakes Telugu speakers make most, in the longer sentences of Stage 3: has been, must be, Why don't you and more.",
    te: "తెలుగువాళ్ళు ఎక్కువగా చేసే పది తప్పులు, స్టేజ్ 3 లోని పొడుగు వాక్యాల్లో సరిచేసుకుందాం: has been, must be, Why don't you, ఇంకా మరికొన్ని.",
  },
  seo: {
    title: "Fixing Common English Mistakes for Telugu Speakers",
    description:
      "Say The road has been broken since May and Why don't you try? A lesson for Telugu speakers on the ten most common mistakes.",
  },
  pattern: [
    { text: "The road", role: "who" },
    { text: "has been broken", role: "action" },
    { text: "since May", role: "when" },
  ],
  core: [
    { en: "The road has been broken since May.", te: "మే నుంచి రోడ్డు పాడైపోయి ఉంది.", extra: ["is"] },
    { en: "Why don't you try the morning yoga class?", te: "మీరు పొద్దుటి యోగా క్లాస్‌కి ఒకసారి వెళ్ళి చూడొచ్చు కదా?", extra: ["do"] },
    { en: "The ward member must be busy. He isn't answering.", te: "వార్డ్ మెంబర్ గారు బిజీగా ఉండి ఉంటారు. ఫోన్ ఎత్తట్లేదు.", extra: ["is"] },
    { en: "My neighbour Kumar walks to the temple every day.", te: "మా పక్కింటి కుమార్ గారు రోజూ గుడికి నడిచి వెళ్తారు.", extra: ["walk"] },
    { en: "I have known the corporator for ten years.", te: "కార్పొరేటర్ గారు నాకు పదేళ్ళుగా తెలుసు.", extra: ["since"] },
    { en: "You haven't signed the petition? No, I haven't.", te: "మీరు అర్జీ మీద సంతకం పెట్టలేదా? లేదు, పెట్టలేదు." },
    { en: "We need two more chairs and some water for the meeting.", te: "మీటింగ్‌కి ఇంకో రెండు కుర్చీలు, కొంచెం నీళ్ళు కావాలి.", extra: ["waters"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Before you speak to an official, say your first two lines aloud once. Check the small parts: has been, be, an s, a or the.",
    te: "ఏ అధికారితోనైనా మాట్లాడే ముందు మీ మొదటి రెండు లైన్లు ఒకసారి గట్టిగా చెప్పి చూసుకోండి. చిన్న భాగాలు సరిచూసుకోండి: has been, be, s, a / the.",
  },
  words: [
    { en: "slip of the tongue", te: "నోరు జారి వచ్చిన చిన్న తప్పు" },
    { en: "confidence", te: "ఆత్మవిశ్వాసం, ధైర్యం" },
    { en: "practice run", te: "ముందుగా ఒకసారి చేసి చూసుకోవడం" },
    { en: "polish", te: "మెరుగుపరచడం" },
    { en: "word by word", te: "ఒక్కో పదం" },
  ],
  grammar: ["present-perfect", "might-may", "question-words", "present-simple", "articles", "prepositions"],
  topics: ["neighbours", "offices", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ten mistakes, the last check of Stage 3", te: "పది తప్పులు, స్టేజ్ 3 చివరి చెకప్" },
      body: {
        en: "Your sentences have grown longer, and the old mistakes hide inside them. Don't check word by word while you speak; before you speak, polish the small parts: has been, be, does, an s, a or the.",
        te: "మీ వాక్యాలు పొడుగయ్యాయి; పాత తప్పులు వాటిలోనే దాక్కుంటాయి. మాట్లాడుతూ ఒక్కో పదం చూసుకోకండి; మాట్లాడే ముందే చిన్న భాగాలు సరిచేసుకోండి: has been, be, does, s, a / the.",
      },
      bridge: {
        te: ["మే నుంచి", "రోడ్డు", "పాడైపోయి ఉంది"],
        en: [
          { text: "The road", role: "who" },
          { text: "has been broken", role: "action" },
          { text: "since May", role: "when" },
        ],
      },
      examples: [
        { en: "The road has been broken since May.", te: "మే నుంచి రోడ్డు పాడైపోయి ఉంది." },
        { en: "Why don't you try the morning yoga class?", te: "మీరు పొద్దుటి యోగా క్లాస్‌కి ఒకసారి వెళ్ళి చూడొచ్చు కదా?" },
        { en: "The ward member must be busy. He isn't answering.", te: "వార్డ్ మెంబర్ గారు బిజీగా ఉండి ఉంటారు. ఫోన్ ఎత్తట్లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Check these before you speak", te: "మాట్లాడే ముందు ఇవి చూసుకోండి" },
      items: [
        {
          form: "has been + since / for",
          useFor: { en: "A problem that started earlier and is still there.", te: "ముందే మొదలై, ఇప్పటికీ ఉన్న సమస్య." },
          example: { en: "The street light has been off for two weeks.", te: "రెండు వారాలుగా వీధి దీపం వెలగట్లేదు." },
        },
        {
          form: "Why don't you …?",
          useFor: { en: "A gentle suggestion; don't comes before you.", te: "మెత్తని సలహా; don't, you కంటే ముందు వస్తుంది." },
          example: { en: "Why don't you come to the meeting with me?", te: "నాతో పాటు మీటింగ్‌కి రావొచ్చు కదా?" },
        },
        {
          form: "must be, might be",
          useFor: { en: "A guess; never drop be.", te: "ఊహ; be ఎప్పుడూ వదలకూడదు." },
          example: { en: "She might be late because of the traffic.", te: "ట్రాఫిక్ వల్ల ఆవిడ ఆలస్యంగా రావచ్చు." },
        },
        {
          form: "No, I haven't.",
          useFor: { en: "Answering You haven't …? when you have not.", te: "'You haven't …?' అని అడిగితే, మీరు చేయకపోతే." },
          example: { en: "You haven't signed the petition? No, I haven't.", te: "మీరు అర్జీ మీద సంతకం పెట్టలేదా? లేదు, పెట్టలేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Why you don't come to the meeting?",
      right: "Why don't you come to the meeting?",
      why: {
        en: "In a question, don't comes before you; Telugu keeps you first, so we copy that order.",
        te: "ప్రశ్నలో don't, you కంటే ముందు వస్తుంది; తెలుగులో 'మీరు' ముందే ఉంటుంది కాబట్టి అదే వరుస వాడేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please prepone the meeting to Friday.",
      right: "Please bring the meeting forward to Friday.",
      why: {
        en: "Prepone is not understood outside India; say bring forward, or move it earlier.",
        te: "prepone అనే మాట ఇండియా బయట అర్థం కాదు; bring forward లేదా move it earlier అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "You called the ward member twice, but he doesn't pick up. Guess why, kindly.",
        te: "వార్డ్ మెంబర్ గారికి రెండుసార్లు ఫోన్ చేశారు, కానీ ఆయన ఎత్తట్లేదు. ఎందుకో మర్యాదగా ఊహించండి.",
      },
      options: ["He must be busy.", "He must busy.", "He is must busy."],
      answer: 0,
      why: {
        en: "After must, English needs be before busy; Telugu బిజీగా ఉంటారు hides it in the verb.",
        te: "must తర్వాత busy ముందు be తప్పనిసరి; తెలుగులో 'బిజీగా ఉంటారు' లో అది verb లోనే కలిసిపోతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Please bring some ___ for the elders at the meeting.",
      te: "మీటింగ్‌లో పెద్దవాళ్ళ కోసం కొంచెం నీళ్ళు తీసుకురండి.",
      options: ["water", "waters", "a water"],
      answer: 0,
      why: {
        en: "Water cannot be counted, so it takes no s and no a, even though Telugu says నీళ్ళు.",
        te: "నీళ్ళని లెక్కపెట్టలేం, అందుకే water కి s గానీ a గానీ రావు; తెలుగులో 'నీళ్ళు' అన్నా సరే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell the meeting about your neighbour Kumar: every Sunday, he cleans the park.",
        te: "మీటింగ్‌లో పక్కింటి కుమార్ గారి గురించి చెప్పండి: ప్రతి ఆదివారం ఆయన పార్క్ శుభ్రం చేస్తారు.",
      },
      options: ["Kumar cleans the park every Sunday.", "Kumar clean the park every Sunday.", "Kumar is cleaning the park every Sunday."],
      answer: 0,
      why: {
        en: "A habit of one person takes the simple form with s; -ing is only for right now.",
        te: "ఒక్క మనిషి అలవాటుకి మామూలు form తో పాటు s; -ing ఇప్పుడు జరుగుతున్న పనికి మాత్రమే.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The corporator gave us a appointment for Monday.",
      wrongIndex: 4,
      fix: "The corporator gave us an appointment for Monday.",
      why: {
        en: "Appointment starts with a vowel sound, so it takes an, not a.",
        te: "appointment అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే a కాదు, an వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You haven't signed the petition? You have not signed it yet.",
        te: "'You haven't signed the petition?' అని స్నేహితులు అడుగుతున్నారు. మీరు ఇంకా సంతకం పెట్టలేదు.",
      },
      expected: ["No, I haven't. I'll sign it today.", "No, I haven't.", "No, not yet. I'll do it today."],
      options: ["No, I haven't. I'll sign it today.", "Yes, I haven't. I'll sign it today.", "No, I haven't sign it. I'll sign it today."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The corporator asks how long you have lived in this colony. You came here twenty years ago.",
        te: "ఈ కాలనీలో ఎన్నాళ్ళుగా ఉంటున్నారని కార్పొరేటర్ గారు అడుగుతున్నారు. మీరు ఇరవై ఏళ్ళ క్రితం వచ్చారు.",
      },
      expected: ["I have lived here for twenty years.", "I've lived in this colony for twenty years.", "For twenty years."],
      options: ["I have lived here for twenty years.", "I am living here since twenty years.", "I live here for twenty years."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A practice run for the ward meeting", te: "వార్డ్ మీటింగ్‌కి ముందు రిహార్సల్" },
    scene: {
      en: "Your friend Ramesh will speak at the ward meeting tonight. He reads his notes to you first. Listen carefully.",
      te: "మీ స్నేహితుడు రమేష్ గారు ఈ రాత్రి వార్డ్ మీటింగ్‌లో మాట్లాడబోతున్నారు. ముందుగా ఆయన రాసుకున్నది మీకు చదివి వినిపిస్తున్నారు. జాగ్రత్తగా వినండి.",
    },
    partner: { en: "Ramesh (a friend)", te: "రమేష్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "fix", label: { en: "Correcting kindly", te: "మర్యాదగా సరిచేయడం" } },
      { id: "kind", label: { en: "Encouraging", te: "ధైర్యం చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Thanks for listening! First line: Good evening, everyone. I am knowing most of you.",
        te: "విన్నందుకు థాంక్స్! మొదటి లైన్: 'Good evening, everyone. I am knowing most of you.'",
        hint: { en: "Correct him kindly: know never takes -ing.", te: "మర్యాదగా సరిచేయండి: know కి -ing రాదు." },
        replies: [
          { say: "Good start! But say: I know most of you.", good: true, skill: "fix" },
          { say: "Perfect. I am knowing sounds very polite.", good: false, skill: "fix", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Next: The workers came in May, but they never returned back.",
        te: "తర్వాత: 'The workers came in May, but they never returned back.'",
        hint: { en: "Tell him one small word is extra at the end.", te: "చివర్లో ఒక చిన్న పదం ఎక్కువైందని చెప్పండి." },
        replies: [
          { say: "Almost. Drop back: they never returned.", good: true, skill: "fix" },
          { say: "Or say: they never came back.", good: true, skill: "fix" },
          { say: "Very good. Every word is correct.", good: false, skill: "fix", fixIt: "preposition" },
        ],
      },
      {
        partner: "Last line: Please do the needful at the earliest.",
        te: "చివరి లైన్: 'Please do the needful at the earliest.'",
        hint: { en: "Suggest a clearer way: ask for exactly what you want, and by when.", te: "ఇంకా స్పష్టంగా చెప్పమనండి: ఏం కావాలో, ఎప్పటిలోగానో సూటిగా అడగాలి." },
        replies: [
          { say: "Better to say: Could you please send someone this week?", good: true, skill: "fix" },
          { say: "That's perfect. Do the needful sounds very polite.", good: false, skill: "fix", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Thank you! Am I ready for the meeting now?",
        te: "థాంక్యూ! ఇప్పుడు మీటింగ్‌కి సిద్ధంగా ఉన్నానంటారా?",
        hint: { en: "Say yes, and give him confidence.", te: "అవునని చెప్పి, ఆయనకి ధైర్యం చెప్పండి." },
        replies: [
          { say: "Yes! You sound clear and confident. You'll do well.", good: true, skill: "kind" },
          { say: "Yes. A slip of the tongue is fine. Just speak slowly.", good: true, skill: "kind" },
          {
            say: "Not really. You make too many mistakes.",
            good: false,
            skill: "kind",
            react: { en: "Oh. Then let me do one more practice run.", te: "అయ్యో. అయితే ఇంకోసారి చదివి చూసుకుంటాను." },
          },
        ],
      },
    ],
  },
};
