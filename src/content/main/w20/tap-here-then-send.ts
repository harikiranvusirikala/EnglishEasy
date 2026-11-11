import type { Lesson } from "../../types";

/** Week 20, Day 2 (CURRICULUM §4): app steps — tap, scroll, press; first, then, after that. */
export const day: Lesson = {
  id: "tap-here-then-send",
  kind: "lesson",
  title: { en: "Tap Here, Then Send", te: "ఇక్కడ నొక్కండి" },
  subtitle: "first, then, after that",
  summary: {
    en: "Learn to follow and give phone steps in order: First, open the chat. Tap the camera icon, then press send.",
    te: "ఫోన్ దశలు వరుసగా అర్థం చేసుకోవడం, చెప్పడం నేర్చుకుందాం: First, open the chat. Tap the camera icon, then press send.",
  },
  seo: {
    title: "Phone Steps: Tap, Scroll, Press in English for Telugu Speakers",
    description:
      "Say First, open the chat and Tap the camera icon, then press send. Simple lessons for Telugu speakers on following phone steps.",
  },
  pattern: [
    { text: "Tap", role: "action" },
    { text: "the camera icon,", role: "what" },
    { text: "then", role: "when" },
    { text: "press send", role: "action" },
  ],
  core: [
    { en: "Tap the camera icon, then press send.", te: "camera icon మీద నొక్కండి, తర్వాత send నొక్కండి.", extra: ["than"] },
    { en: "First, open the chat with Usha.", te: "ముందు, ఉష గారి chat ఓపెన్ చేయండి.", extra: ["opens"] },
    { en: "Then choose a photo.", te: "తర్వాత ఒక ఫోటో ఎంచుకోండి.", extra: ["chose"] },
    { en: "After that, press the send button.", te: "ఆ తర్వాత send button నొక్కండి.", extra: ["sends"] },
    { en: "Scroll down and tap the green button.", te: "కిందకి scroll చేసి, ఆకుపచ్చ button నొక్కండి.", extra: ["below"] },
    { en: "The letters on the screen are too small.", te: "screen మీద అక్షరాలు మరీ చిన్నగా ఉన్నాయి.", extra: ["is"] },
    { en: "Wait, which icon do I tap?", te: "ఆగండి, ఏ icon నొక్కాలి?", extra: ["does"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Send one photo to a friend today. Say each step aloud: First, then, after that.",
    te: "ఈ రోజు ఒక స్నేహితులకి ఫోటో పంపండి. ప్రతి దశ పైకి చెప్పండి: First, then, after that.",
  },
  words: [
    { en: "tap", te: "తాకడం, మెల్లగా నొక్కడం" },
    { en: "press", te: "నొక్కడం" },
    { en: "scroll", te: "screen ని వేలితో జరపడం" },
    { en: "icon", te: "ఐకాన్ (screen మీద చిన్న బొమ్మ)" },
    { en: "screen", te: "స్క్రీన్, తెర" },
  ],
  grammar: ["imperatives", "connectors"],
  topics: ["phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Steps in order", te: "వరుసగా దశలు" },
      body: {
        en: "For phone steps, use First, Then and After that. Each step starts with the action: Tap the camera icon, then press send.",
        te: "ఫోన్ దశలు చెప్పాలంటే First, Then, After that వాడండి. ప్రతి దశ verb తో మొదలవుతుంది: Tap the camera icon, then press send.",
      },
      bridge: {
        te: ["camera icon మీద", "నొక్కండి,", "తర్వాత", "send నొక్కండి"],
        en: [
          { text: "Tap", role: "action" },
          { text: "the camera icon,", role: "what" },
          { text: "then", role: "when" },
          { text: "press send", role: "action" },
        ],
      },
      examples: [
        { en: "First, open the chat with Usha.", te: "ముందు, ఉష గారి chat ఓపెన్ చేయండి." },
        { en: "Then choose a photo.", te: "తర్వాత ఒక ఫోటో ఎంచుకోండి." },
        { en: "After that, press the send button.", te: "ఆ తర్వాత send button నొక్కండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Tap, press or scroll?", te: "tap, press, scroll తేడా" },
      items: [
        {
          form: "tap",
          useFor: { en: "Touch the screen once, lightly.", te: "screen ని ఒకసారి మెల్లగా తాకడం." },
          example: { en: "Tap the camera icon, then press send.", te: "camera icon మీద నొక్కండి, తర్వాత send నొక్కండి." },
        },
        {
          form: "press",
          useFor: { en: "Push a button. Press and hold means keep your finger there.", te: "button నొక్కడం. press and hold అంటే వేలు అలాగే నొక్కి ఉంచడం." },
          example: { en: "After that, press the send button.", te: "ఆ తర్వాత send button నొక్కండి." },
        },
        {
          form: "scroll down",
          useFor: { en: "Move the screen with your finger to see more.", te: "ఇంకా చూడాలంటే వేలితో screen ని జరపడం." },
          example: { en: "Scroll down and tap the green button.", te: "కిందకి scroll చేసి, ఆకుపచ్చ button నొక్కండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Tap camera icon, then press send button.",
      right: "Tap the camera icon, then press the send button.",
      why: {
        en: "A thing on your screen needs the before it. Telugu has no word like the.",
        te: "screen మీద ఉన్న ఆ వస్తువుని చెప్పేటప్పుడు ముందు the కావాలి. తెలుగులో the లాంటి మాట ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Scroll below and tap the button.",
      right: "Scroll down and tap the button.",
      why: {
        en: "With scroll, say down or up. Below means under something else.",
        te: "scroll తో down లేదా up అనాలి. below అంటే దేనికైనా కింద అని.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Tell your friend the first step.", te: "మీ స్నేహితులకి మొదటి దశ చెప్పండి." },
      options: ["First, open WhatsApp.", "First, WhatsApp open.", "First, you opening WhatsApp."],
      answer: 0,
      why: {
        en: "An English step starts with the action; Telugu puts it at the end.",
        te: "ఇంగ్లీష్‌లో దశ verb తో మొదలవుతుంది; తెలుగులో verb చివర వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Swapna",
      lines: ["How to send a photo:", "1. First, open the chat.", "2. Then tap the camera icon.", "3. After that, choose the photo.", "4. Then press send."],
      prompt: {
        en: "Swapna sent you these steps. What do you do after you tap the camera icon?",
        te: "స్వప్న గారు ఈ దశలు పంపారు. camera icon నొక్కిన తర్వాత ఏం చేయాలి?",
      },
      options: ["Choose the photo.", "Open the chat.", "Press send."],
      answer: 0,
      why: {
        en: "The camera icon is step 2, so the next step is number 3.",
        te: "camera icon రెండో దశ, కాబట్టి తర్వాతిది మూడో దశ.",
      },
      say: "After that, choose the photo.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: Press and hold the photo. What do you do?",
        te: "మీ స్నేహితులు Press and hold the photo అన్నారు. ఏం చేయాలి?",
      },
      options: ["Keep your finger on the photo.", "Touch the photo once, quickly.", "Move the photo up the screen."],
      answer: 0,
      why: {
        en: "Hold means keep your finger there for a moment.",
        te: "hold అంటే వేలు కాసేపు అలాగే ఉంచడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "First, opening the chat with Usha.",
      wrongIndex: 1,
      fix: "First, open the chat with Usha.",
      why: {
        en: "A step uses the plain action word, never the -ing form.",
        te: "దశలు చెప్పేటప్పుడు verb మామూలుగానే ఉంటుంది, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend asks how to send a photo. Tell her the first step.",
        te: "ఫోటో ఎలా పంపాలని మీ స్నేహితురాలు అడుగుతున్నారు. మొదటి దశ చెప్పండి.",
      },
      expected: ["First, open the chat.", "First, open WhatsApp.", "First, open the chat with Usha."],
      options: ["First, open the chat.", "First, the chat open.", "First, opening the chat."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Now tell her the last step: the send button.",
        te: "ఇప్పుడు చివరి దశ చెప్పండి: send button.",
      },
      expected: ["After that, press the send button.", "Then press the send button.", "Then press send."],
      options: ["After that, press the send button.", "After that, press send button.", "After that, you pressing send."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Step by step on the phone", te: "ఫోన్‌లో ఒక్కో దశ" },
    scene: {
      en: "Your friend Geetha tells you on a call how to send a photo to Usha.",
      te: "ఉష గారికి ఫోటో ఎలా పంపాలో మీ స్నేహితురాలు గీత ఫోన్‌లో చెప్తున్నారు.",
    },
    partner: { en: "Geetha (friend)", te: "గీత (స్నేహితురాలు)" },
    skills: [
      { id: "steps", label: { en: "Following steps", te: "దశలు పాటించడం" } },
      { id: "ask", label: { en: "Asking what next", te: "తర్వాత ఏంటో అడగడం" } },
    ],
    turns: [
      {
        partner: "Are you ready? First, open WhatsApp.",
        te: "రెడీగా ఉన్నారా? ముందు WhatsApp ఓపెన్ చేయండి.",
        hint: { en: "Say it is open, and ask what comes next.", te: "ఓపెన్ అయిందని చెప్పి, తర్వాత ఏం చేయాలో అడగండి." },
        replies: [
          { say: "Okay, it's open. What do I do next?", good: true, skill: "ask" },
          { say: "Okay, it open. What I do next?", good: false, skill: "ask", fixIt: "be" },
        ],
      },
      {
        partner: "Open the chat with Usha, then tap the camera icon.",
        te: "ఉష గారి chat ఓపెన్ చేసి, camera icon నొక్కండి.",
        hint: { en: "Ask where the camera icon is.", te: "camera icon ఎక్కడ ఉందో అడగండి." },
        replies: [
          { say: "Where is the camera icon?", good: true, skill: "ask" },
          { say: "Where camera icon is?", good: false, skill: "ask", fixIt: "question" },
          {
            say: "Slow down! You talk too fast.",
            good: false,
            skill: "ask",
            react: { en: "Oh, sorry! I'll go slowly.", te: "అయ్యో, sorry! మెల్లగా చెప్తాను." },
          },
        ],
      },
      {
        partner: "It's at the bottom of the screen, on the right.",
        te: "screen కింద, కుడి వైపు ఉంటుంది.",
        hint: { en: "Say you tapped it, and ask what to do after that.", te: "నొక్కానని చెప్పి, ఆ తర్వాత ఏం చేయాలో అడగండి." },
        replies: [
          { say: "Okay, I tapped it. What do I do after that?", good: true, skill: "steps" },
          { say: "Okay, I tapped it. After that what I do?", good: false, skill: "steps" },
        ],
      },
      {
        partner: "Choose the photo, then press send. Done?",
        te: "ఫోటో ఎంచుకుని, send నొక్కండి. అయిపోయిందా?",
        hint: { en: "Say yes, it went, and thank her.", te: "అవును, వెళ్ళిందని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, done! Thank you for your help.", good: true, skill: "steps" },
          { say: "Yes, it sended! Thank you.", good: false, skill: "steps" },
        ],
      },
    ],
  },
};
