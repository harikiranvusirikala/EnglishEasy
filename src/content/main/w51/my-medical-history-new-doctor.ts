import type { Lesson } from "../../types";

/** Week 51, Day 1 (CURRICULUM §5): your medical history for a new doctor — I've had high BP for about ten years. */
export const day: Lesson = {
  id: "my-medical-history-new-doctor",
  kind: "lesson",
  title: { en: "My Medical History", te: "నా ఆరోగ్య వివరాలు" },
  subtitle: "I've had … for …",
  summary: {
    en: "Learn to give a new doctor your medical history: I've had high BP for about ten years. I had a knee operation in 2019.",
    te: "కొత్త డాక్టర్‌కి మీ ఆరోగ్య వివరాలు చెప్పడం నేర్చుకుందాం: I've had high BP for about ten years. I had a knee operation in 2019.",
  },
  seo: {
    title: "Giving Your Medical History in English for Telugu Speakers",
    description: "Tell a new doctor about your health: I've had high BP for ten years. I had an operation in 2019. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I've", role: "who" },
    { text: "had", role: "action" },
    { text: "high BP", role: "what" },
    { text: "for ten years", role: "when" },
  ],
  core: [
    { en: "I've had high BP for about ten years.", te: "సుమారు పదేళ్ళ నుంచి నాకు BP ఎక్కువగా ఉంది.", extra: ["since"] },
    { en: "I had a knee operation in two thousand nineteen.", te: "2019 లో నాకు మోకాలి ఆపరేషన్ అయింది.", extra: ["have"] },
    { en: "I don't have any allergies.", te: "నాకు ఏ అలర్జీలూ లేవు.", extra: ["not"] },
    { en: "I take one tablet for my thyroid every morning.", te: "రోజూ పొద్దున థైరాయిడ్‌కి ఒక టాబ్లెట్ వేసుకుంటాను.", extra: ["taking"] },
    { en: "How long have you had asthma?", te: "మీకు ఎన్నాళ్ళ నుంచి ఆస్తమా ఉంది?", extra: ["are"] },
    { en: "My mother had diabetes, and my father had a heart problem.", te: "మా అమ్మగారికి షుగర్ ఉండేది, మా నాన్నగారికి గుండె సమస్య ఉండేది." },
    { en: "I've been on this medication since last year.", te: "పోయిన సంవత్సరం నుంచి ఈ మందులు వాడుతున్నాను." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say your own medical history aloud in three sentences. If you have no health problems, say that.",
    te: "మీ ఆరోగ్య వివరాలు మూడు వాక్యాల్లో గట్టిగా చెప్పండి. ఏ ఆరోగ్య సమస్యా లేకపోతే, అదే చెప్పండి.",
  },
  words: [
    { en: "medical history", te: "ఆరోగ్య వివరాలు, మెడికల్ హిస్టరీ" },
    { en: "surgery", te: "ఆపరేషన్, సర్జరీ" },
    { en: "asthma", te: "ఆస్తమా, ఉబ్బసం" },
    { en: "thyroid", te: "థైరాయిడ్" },
    { en: "medication", te: "వాడుతున్న మందులు" },
  ],
  grammar: ["present-perfect", "past-simple"],
  topics: ["doctor", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Your history: I've had and I had", te: "మీ ఆరోగ్య వివరాలు: I've had, I had" },
      body: {
        en: "Started in the past and still true: I've had, with for or since. Finished, with a year: I had, with in.",
        te: "ముందు మొదలై ఇంకా ఉన్నదానికి I've had, దాంతో for లేదా since. అయిపోయినదానికి, సంవత్సరంతో: I had, in.",
      },
      bridge: {
        te: ["సుమారు పదేళ్ళ నుంచి", "నాకు", "BP ఎక్కువగా", "ఉంది"],
        en: [
          { text: "I've", role: "who" },
          { text: "had", role: "action" },
          { text: "high BP", role: "what" },
          { text: "for about ten years", role: "when" },
        ],
      },
      examples: [
        { en: "I've had high BP for about ten years.", te: "సుమారు పదేళ్ళ నుంచి నాకు BP ఎక్కువగా ఉంది." },
        { en: "I've been on this medication since last year.", te: "పోయిన సంవత్సరం నుంచి ఈ మందులు వాడుతున్నాను." },
        { en: "I had a knee operation in two thousand nineteen.", te: "2019 లో నాకు మోకాలి ఆపరేషన్ అయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "for, since or in?", te: "for, since, in లో ఏది?" },
      items: [
        {
          form: "for + a length of time",
          useFor: { en: "How long: ten years, six months.", te: "ఎంత కాలం: పదేళ్ళు, ఆరు నెలలు." },
          example: { en: "I've had asthma for six months.", te: "ఆరు నెలల నుంచి నాకు ఆస్తమా ఉంది." },
        },
        {
          form: "since + a starting point",
          useFor: { en: "When it started: a year, last year, childhood.", te: "ఎప్పుడు మొదలైందో: ఒక సంవత్సరం, పోయిన సంవత్సరం, చిన్నప్పుడు." },
          example: { en: "My friend has had diabetes since two thousand fifteen.", te: "మా స్నేహితుడికి 2015 నుంచి షుగర్ ఉంది." },
        },
        {
          form: "in + a year or month",
          useFor: { en: "Something finished, like an operation.", te: "అయిపోయిన విషయం, ఆపరేషన్ లాంటిది." },
          example: { en: "I had an eye operation in March.", te: "మార్చిలో నాకు కంటి ఆపరేషన్ అయింది." },
        },
        {
          form: "I don't have any …",
          useFor: { en: "To say none: no allergies, no illness.", te: "ఏదీ లేదని చెప్పడానికి: అలర్జీలు లేవు, జబ్బు లేదు." },
          example: { en: "I don't have any health problems.", te: "నాకు ఏ ఆరోగ్య సమస్యలూ లేవు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I have high BP since ten years.",
      right: "I've had high BP for ten years.",
      why: {
        en: "For a length of time, use for, not since; it is still true, so use I've had.",
        te: "ఎంత కాలమో చెప్పేటప్పుడు since కాదు, for. ఇంకా ఉంది కాబట్టి I have కాదు, I've had.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am having asthma.",
      right: "I have asthma.",
      why: {
        en: "An illness you have is a state, so have takes no -ing here.",
        te: "జబ్బు ఉండటం ఒక స్థితి; అందుకే ఇక్కడ have కి -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "You take your friend Gopal to a new doctor. He had a knee operation in 2019. What do you tell the doctor?",
        te: "మీ స్నేహితుడు గోపాల్ గారిని కొత్త డాక్టర్ దగ్గరికి తీసుకెళ్ళారు. 2019 లో ఆయనకి మోకాలి ఆపరేషన్ అయింది. డాక్టర్‌కి ఏం చెప్తారు?",
      },
      options: [
        "He had a knee operation in two thousand nineteen.",
        "He had knee operation in two thousand nineteen.",
        "He has had a knee operation in two thousand nineteen.",
      ],
      answer: 0,
      why: {
        en: "A finished event with a year takes the past, had, and one operation needs a.",
        te: "సంవత్సరం చెప్పిన, అయిపోయిన విషయానికి past (had); ఒక్క ఆపరేషన్ కాబట్టి ముందు a కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "duration",
      sentence: "I've had a thyroid problem ___ two thousand fifteen.",
      te: "2015 నుంచి నాకు థైరాయిడ్ సమస్య ఉంది.",
      options: ["since", "for", "from"],
      answer: 0,
      why: {
        en: "A starting point, like a year, takes since; Telugu నుంచి tempts you to say from.",
        te: "సంవత్సరం లాంటి మొదలైన సమయానికి since; తెలుగు 'నుంచి' చూసి from అనకండి.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Sunrise Clinic, Guntur",
      lines: [
        "For new patients",
        "Please come fifteen minutes before your appointment.",
        "Bring all your old reports and prescriptions.",
        "Bring the medicines you take now, or a photo of them.",
        "Tell the doctor about any allergies to medicines.",
        "Tell the doctor about any surgery you have had.",
        "Please fill in the health form at the front desk.",
        "Thank you, and get well soon.",
      ],
      questions: [
        {
          prompt: { en: "When should a new patient come?", te: "కొత్త పేషెంట్ ఎప్పుడు రావాలి?" },
          options: ["Fifteen minutes before the appointment", "At the time of the appointment", "One hour before the appointment"],
          answer: 0,
          why: {
            en: "The first instruction asks new patients to arrive a little early.",
            te: "కొత్త పేషెంట్లు కొంచెం ముందే రావాలని మొదటి సూచనలో ఉంది.",
          },
        },
        {
          prompt: { en: "You don't have your medicine strips with you. What can you bring?", te: "మీ దగ్గర మందుల strips లేవు. ఏం తీసుకెళ్ళొచ్చు?" },
          options: ["A photo of the medicines", "A new prescription", "Your Aadhaar card"],
          answer: 0,
          why: {
            en: "The notice says a photo of your medicines is also fine.",
            te: "మందుల ఫోటో అయినా సరిపోతుందని నోటీసులో ఉంది.",
          },
        },
        {
          prompt: { en: "What should you tell the doctor about?", te: "డాక్టర్‌కి వేటి గురించి చెప్పాలి?" },
          options: ["Allergies and past operations", "Your diet for the last week", "The name of your old doctor"],
          answer: 0,
          why: {
            en: "Two lines ask you to tell the doctor about allergies and surgery.",
            te: "అలర్జీలు, సర్జరీల గురించి డాక్టర్‌కి చెప్పమని రెండు లైన్లలో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My mother take a tablet for her thyroid.",
      wrongIndex: 2,
      fix: "My mother takes a tablet for her thyroid.",
      why: {
        en: "For one person, like he or she, the verb takes s; Telugu changes the verb ending instead.",
        te: "ఒక్కరి గురించి (he, she) చెప్పేటప్పుడు verb కి s వస్తుంది; తెలుగులో verb చివర మారుతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "You take your neighbour Kamala to the doctor. The doctor asks how long she has had BP. Say five years.",
        te: "మీ పక్కింటి కమల గారిని డాక్టర్ దగ్గరికి తీసుకెళ్ళారు. ఆవిడకి ఎన్నాళ్ళ నుంచి BP ఉందని డాక్టర్ అడుగుతున్నారు. ఐదేళ్ళు అని చెప్పండి.",
      },
      expected: ["She's had BP for five years.", "She has had BP for five years.", "For five years.", "For about five years."],
      options: ["She's had BP for five years.", "She has BP since five years.", "She is having BP for five years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "The new doctor asks: Do you have any allergies? You have none. Answer.",
        te: "మీకు ఏవైనా అలర్జీలు ఉన్నాయా అని కొత్త డాక్టర్ అడుగుతున్నారు. మీకు ఏమీ లేవు. జవాబు చెప్పండి.",
      },
      expected: ["No, I don't have any allergies.", "No, I don't have any.", "No allergies, doctor.", "No, I have no allergies."],
      options: ["No, I don't have any allergies.", "No, I am not having any allergies.", "No, I not have any allergies."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new doctor", te: "కొత్త డాక్టర్" },
    scene: {
      en: "You are seeing a new doctor, Dr Srinivas, for a full check-up. He asks about your health.",
      te: "ఫుల్ చెకప్ కోసం మీరు కొత్త డాక్టర్, డాక్టర్ శ్రీనివాస్ గారి దగ్గరికి వెళ్ళారు. ఆయన మీ ఆరోగ్యం గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Dr Srinivas (a new doctor)", te: "డాక్టర్ శ్రీనివాస్ (కొత్త డాక్టర్)" },
    voice: "b",
    skills: [
      { id: "history", label: { en: "Giving your history", te: "మీ ఆరోగ్య వివరాలు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Please sit down. Is this your first visit here?",
        te: "నమస్కారం. కూర్చోండి. ఇక్కడికి రావడం ఇదే మొదటిసారా?",
        hint: { en: "Greet him, and say yes, it is your first time.", te: "నమస్కారం చెప్పి, అవును, ఇదే మొదటిసారి అని చెప్పండి." },
        replies: [
          { say: "Good morning, doctor. Yes, this is my first visit.", good: true, skill: "polite" },
          { say: "Good morning, doctor. Yes, this my first visit.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
      {
        partner: "Do you have any long-term health problems?",
        te: "మీకు ఏవైనా చాలా కాలంగా ఉన్న ఆరోగ్య సమస్యలు ఉన్నాయా?",
        hint: { en: "Tell him your own health problems and for how long, or say you have none.", te: "మీకున్న ఆరోగ్య సమస్యలు, ఎన్నాళ్ళ నుంచో చెప్పండి; ఏమీ లేకపోతే అదే చెప్పండి." },
        replies: [
          { say: "Yes, I've had high BP for about ten years.", good: true, skill: "history" },
          { say: "No, I don't have any health problems.", good: true, skill: "history" },
          { say: "Yes, I am having BP from ten years.", good: false, skill: "history", fixIt: "duration" },
        ],
      },
      {
        partner: "Have you had any surgery?",
        te: "మీకు ఎప్పుడైనా ఆపరేషన్ అయిందా?",
        hint: { en: "Say if you have had an operation, and when.", te: "మీకు ఆపరేషన్ అయిందో లేదో, అయితే ఎప్పుడో చెప్పండి." },
        replies: [
          { say: "Yes, I had a knee operation in two thousand nineteen.", good: true, skill: "history" },
          { say: "No, I've never had an operation.", good: true, skill: "history" },
          {
            say: "Why are you asking all this? Just give me tablets.",
            good: false,
            skill: "polite",
            react: { en: "I'm sorry, but I need your history to treat you safely.", te: "సారీ అండీ, మీకు సురక్షితంగా వైద్యం చేయాలంటే మీ వివరాలు నాకు తెలియాలి." },
          },
        ],
      },
      {
        partner: "Thank you. Last question: are you allergic to any medicine?",
        te: "థాంక్స్. చివరి ప్రశ్న: మీకు ఏదైనా మందు పడదా, అలర్జీ ఉందా?",
        hint: { en: "Answer about your own allergies, and thank him.", te: "మీ అలర్జీల గురించి జవాబు చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, I don't have any allergies. Thank you, doctor.", good: true, skill: "history" },
          { say: "Yes, one painkiller gives me a rash. Thank you, doctor.", good: true, skill: "history" },
          { say: "No, I not allergic to any medicine. Thank you.", good: false, skill: "history", fixIt: "be" },
        ],
      },
    ],
  },
};
