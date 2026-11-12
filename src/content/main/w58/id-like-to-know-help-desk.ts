import type { Lesson } from "../../types";

/** Week 58, Day 3 (CURRICULUM §5): I'd like to know …; I was wondering if … — polite questions at the municipal office help desk. */
export const day: Lesson = {
  id: "id-like-to-know-help-desk",
  kind: "lesson",
  title: { en: "I'd Like to Know", te: "తెలుసుకోవాలి అండీ" },
  subtitle: "I'd like to know …; I was wondering if …",
  summary: {
    en: "Learn to ask an office politely: I'd like to know how long the certificate will take. I was wondering if I could pay online.",
    te: "ఆఫీసులో మర్యాదగా అడగడం నేర్చుకుందాం: I'd like to know how long the certificate will take. I was wondering if I could pay online.",
  },
  seo: {
    title: "I'd Like to Know in English for Telugu Speakers",
    description:
      "Say I'd like to know how long it will take and I was wondering if I could pay online. Polite office English for Telugu speakers.",
  },
  pattern: [
    { text: "I'd like to know", role: "action" },
    { text: "how long", role: "when" },
    { text: "the certificate", role: "who" },
    { text: "will take", role: "action" },
  ],
  core: [
    { en: "I'd like to know how long the certificate will take.", te: "సర్టిఫికెట్‌కి ఎన్ని రోజులు పడుతుందో తెలుసుకోవాలి అండీ.", extra: ["does"] },
    { en: "I was wondering if I could pay online.", te: "ఆన్‌లైన్‌లో కట్టొచ్చేమో అని అడుగుదామనుకున్నాను.", extra: ["do"] },
    { en: "I'd like to know which documents I need.", te: "ఏ documents కావాలో తెలుసుకోవాలి అండీ.", extra: ["do"] },
    { en: "I'd like to know where I can apply.", te: "ఎక్కడ అప్లై చేయొచ్చో తెలుసుకోవాలి అండీ.", extra: ["to"] },
    { en: "The certificate will be ready in seven working days.", te: "సర్టిఫికెట్ ఏడు పని రోజుల్లో రెడీ అవుతుంది.", extra: ["day"] },
    { en: "I was wondering if someone could help me with this form.", te: "ఈ ఫారమ్ విషయంలో ఎవరైనా కొంచెం సహాయం చేస్తారేమో అని అడుగుతున్నాను." },
    { en: "I'd like to know if I need to come again.", te: "నేను మళ్ళీ రావాలో లేదో తెలుసుకోవాలి అండీ." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one office you need to visit. Say aloud what you will ask there: I'd like to know …",
    te: "మీరు వెళ్ళాల్సిన ఒక ఆఫీసు గురించి ఆలోచించండి. అక్కడ ఏం అడుగుతారో I'd like to know … అని గట్టిగా చెప్పి చూడండి.",
  },
  words: [
    { en: "I'd like to know", te: "… తెలుసుకోవాలి అండీ" },
    { en: "I was wondering if", te: "… అని అడుగుదామని (చాలా మర్యాదగా)" },
    { en: "help desk", te: "హెల్ప్ డెస్క్, సహాయ కేంద్రం" },
    { en: "birth certificate", te: "బర్త్ సర్టిఫికెట్, పుట్టిన తేదీ పత్రం" },
    { en: "working days", te: "పని రోజులు (సెలవులు కాకుండా)" },
  ],
  grammar: ["indirect-tag-questions", "would-like", "politeness-softening"],
  topics: ["offices", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I'd like to know …", te: "… తెలుసుకోవాలి అండీ" },
      body: {
        en: "In an office, I'd like to know sounds polite and calm. After it, use normal order: how long it will take, not how long will it take.",
        te: "ఆఫీసులో I'd like to know అంటే మర్యాదగా, ప్రశాంతంగా ఉంటుంది. దాని తర్వాత మామూలు వరుస: how long it will take; how long will it take కాదు.",
      },
      bridge: {
        te: ["సర్టిఫికెట్‌కి", "ఎన్ని రోజులు పడుతుందో", "తెలుసుకోవాలి"],
        en: [
          { text: "I'd like to know", role: "action" },
          { text: "how long", role: "when" },
          { text: "the certificate", role: "who" },
          { text: "will take", role: "action" },
        ],
      },
      examples: [
        { en: "I'd like to know how long the certificate will take.", te: "సర్టిఫికెట్‌కి ఎన్ని రోజులు పడుతుందో తెలుసుకోవాలి అండీ." },
        { en: "I was wondering if I could pay online.", te: "ఆన్‌లైన్‌లో కట్టొచ్చేమో అని అడుగుదామనుకున్నాను." },
        { en: "I'd like to know which documents I need.", te: "ఏ documents కావాలో తెలుసుకోవాలి అండీ." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three polite ways to ask", te: "మర్యాదగా అడిగే మూడు పద్ధతులు" },
      items: [
        {
          form: "Can you tell me …?",
          useFor: { en: "A simple polite question.", te: "మామూలు మర్యాద ప్రశ్న." },
          example: { en: "Can you tell me which counter is for tax?", te: "పన్నుకి ఏ కౌంటరో చెప్తారా?" },
        },
        {
          form: "I'd like to know …",
          useFor: { en: "Ask for information in an office.", te: "ఆఫీసులో వివరాలు అడగడానికి." },
          example: { en: "I'd like to know where I can apply.", te: "ఎక్కడ అప్లై చేయొచ్చో తెలుసుకోవాలి అండీ." },
        },
        {
          form: "I was wondering if …",
          useFor: { en: "The softest way: a small favour or a request.", te: "చాలా మెత్తగా: చిన్న సహాయం, ఒక విన్నపం అడగడానికి." },
          example: {
            en: "I was wondering if someone could help me with this form.",
            te: "ఈ ఫారమ్ విషయంలో ఎవరైనా కొంచెం సహాయం చేస్తారేమో అని అడుగుతున్నాను.",
          },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "I'd like to know how long will it take.",
      right: "I'd like to know how long it will take.",
      why: {
        en: "After I'd like to know, it comes before will, as in a normal sentence.",
        te: "I'd like to know తర్వాత మామూలు వాక్యంలా it ముందు, will తర్వాత వస్తాయి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "It takes seven working day.",
      right: "It takes seven working days.",
      why: {
        en: "After seven, day takes s; Telugu రోజులు also shows more than one.",
        te: "ఏడు తర్వాత day కి s వస్తుంది; తెలుగులోనూ 'రోజు' కాదు, 'రోజులు' అంటాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "At the help desk, ask which documents you need.", te: "హెల్ప్ డెస్క్ దగ్గర, ఏ documents కావాలో అడగండి." },
      options: ["I'd like to know which documents I need.", "I'd like to know which documents do I need.", "I like to know which documents I need."],
      answer: 0,
      why: {
        en: "After I'd like to know, drop do and keep I before need; I like means you enjoy it.",
        te: "I'd like to know తర్వాత do రాదు, I ముందు need తర్వాత; I like అంటే ఇష్టం అని అర్థం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I was wondering ___ I could pay online.",
      te: "ఆన్‌లైన్‌లో కట్టొచ్చేమో అని అడుగుదామనుకున్నాను.",
      options: ["if", "that", "what"],
      answer: 0,
      why: {
        en: "Wondering joins a yes or no question with if; that and what don't fit here.",
        te: "wondering తర్వాత అవునా కాదా ప్రశ్న if తో కలుస్తుంది; that, what ఇక్కడ రావు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Municipal Office Help Desk",
      lines: [
        "Copies of birth certificates are given at Counter 4.",
        "You can also apply at any Mee Seva centre.",
        "Please bring an ID proof and the date and place of birth.",
        "The fee is fifty rupees for each copy.",
        "Pay only at the cash counter, not to any staff member.",
        "Copies are ready in seven working days.",
        "Help desk timings: 10 am to 5 pm, Monday to Saturday.",
        "Commissioner, Municipal Corporation",
      ],
      questions: [
        {
          prompt: { en: "How long do the copies take?", te: "కాపీలు రావడానికి ఎన్ని రోజులు పడుతుంది?" },
          options: ["Seven working days", "Fifty days", "Four days"],
          answer: 0,
        },
        {
          prompt: { en: "Where should you pay the fee?", te: "ఫీజు ఎక్కడ కట్టాలి?" },
          options: ["At the cash counter", "To any staff member", "At the help desk"],
          answer: 0,
          why: {
            en: "The notice says to pay at one place only, and never to the staff.",
            te: "ఒక్క చోటే కట్టాలని, స్టాఫ్ చేతికి ఇవ్వొద్దని నోటీసులో ఉంది.",
          },
        },
        {
          prompt: { en: "How much is one copy?", te: "ఒక కాపీకి ఎంత?" },
          options: ["Fifty rupees", "Four rupees", "Five hundred rupees"],
          answer: 0,
          why: {
            en: "The fourth line gives the fee for each copy.",
            te: "నాలుగో లైన్‌లో ఒక్కో కాపీకి ఫీజు ఎంతో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Could you give me a application form, please?",
      wrongIndex: 4,
      fix: "Could you give me an application form, please?",
      why: {
        en: "Before a vowel sound, like the a in application, use an, not a.",
        te: "application లాగా అచ్చు శబ్దంతో మొదలయ్యే పదం ముందు an వస్తుంది, a కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the help desk politely how long the certificate will take.",
        te: "సర్టిఫికెట్‌కి ఎన్ని రోజులు పడుతుందో హెల్ప్ డెస్క్‌లో మర్యాదగా అడగండి.",
      },
      expected: [
        "I'd like to know how long the certificate will take.",
        "Can you tell me how long the certificate will take?",
        "How long will the certificate take, please?",
      ],
      options: [
        "I'd like to know how long the certificate will take.",
        "I'd like to know how long will the certificate take.",
        "I'd like to know how long the certificate take.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Ask very politely if you could pay the fee online.",
        te: "ఫీజు ఆన్‌లైన్‌లో కట్టొచ్చేమో అని చాలా మర్యాదగా అడగండి.",
      },
      expected: ["I was wondering if I could pay the fee online.", "I was wondering if I could pay online.", "Can I pay the fee online?"],
      options: [
        "I was wondering if I could pay the fee online.",
        "I was wondering could I pay the fee online.",
        "I was wondering if I could pay the fee in online.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the municipal help desk", te: "మున్సిపల్ ఆఫీసు హెల్ప్ డెస్క్ దగ్గర" },
    scene: {
      en: "You need a copy of your birth certificate for a passport. Gopal is at the help desk.",
      te: "పాస్‌పోర్ట్ కోసం మీ బర్త్ సర్టిఫికెట్ కాపీ కావాలి. హెల్ప్ డెస్క్‌లో గోపాల్ గారు ఉన్నారు.",
    },
    partner: { en: "Gopal (at the help desk)", te: "గోపాల్ (హెల్ప్ డెస్క్‌లో)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "I'd like to know …", te: "I'd like to know తో అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Please sit down. How can I help you?",
        te: "నమస్కారం. కూర్చోండి. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say you need a copy of your birth certificate for your passport.", te: "పాస్‌పోర్ట్ కోసం మీ బర్త్ సర్టిఫికెట్ కాపీ కావాలని చెప్పండి." },
        replies: [
          { say: "I need a copy of my birth certificate for my passport.", good: true, skill: "ask" },
          { say: "I need copy of my birth certificate for my passport.", good: false, skill: "ask", fixIt: "article" },
        ],
      },
      {
        partner: "Okay. You can apply at counter four.",
        te: "సరే. నాలుగో నంబర్ కౌంటర్‌లో అప్లై చేయొచ్చు.",
        hint: { en: "Ask politely which documents you need.", te: "ఏ documents కావాలో మర్యాదగా అడగండి." },
        replies: [
          { say: "I'd like to know which documents I need.", good: true, skill: "ask" },
          { say: "Could you tell me which documents I need?", good: true, skill: "ask" },
          { say: "I'd like to know which documents do I need.", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Just your Aadhaar card. It takes seven working days.",
        te: "మీ ఆధార్ కార్డు చాలు. ఏడు పని రోజులు పడుతుంది.",
        hint: { en: "Ask very politely if you could pay the fee online.", te: "ఫీజు ఆన్‌లైన్‌లో కట్టొచ్చేమో అని చాలా మర్యాదగా అడగండి." },
        replies: [
          { say: "I was wondering if I could pay the fee online.", good: true, skill: "ask" },
          {
            say: "Seven days? That's too long. Do it faster!",
            good: false,
            skill: "polite",
            react: { en: "Sorry, it's the same time for everyone.", te: "సారీ అండీ, అందరికీ అంతే టైమ్ పడుతుంది." },
          },
        ],
      },
      {
        partner: "Yes, you can pay online. You'll get an SMS.",
        te: "అవును, ఆన్‌లైన్‌లో కట్టొచ్చు. మీకు SMS వస్తుంది.",
        hint: { en: "Thank him for his help, and say goodbye.", te: "సహాయం చేసినందుకు థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you for helping me. Have a good day.", good: true, skill: "polite" },
          { say: "Thank you for help me. Have a good day.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
