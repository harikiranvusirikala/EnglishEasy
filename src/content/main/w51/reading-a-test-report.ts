import type { Lesson } from "../../types";

/** Week 51, Day 4 (CURRICULUM §5): report words — normal, high, low, borderline, slightly; Is it serious? */
export const day: Lesson = {
  id: "reading-a-test-report",
  kind: "lesson",
  title: { en: "My Test Report", te: "టెస్ట్ రిపోర్ట్" },
  subtitle: "slightly high, borderline, normal",
  summary: {
    en: "Learn the words on a test report and ask about them: Your cholesterol is slightly high. Is it serious?",
    te: "టెస్ట్ రిపోర్ట్‌లోని పదాలు, వాటి గురించి అడగడం నేర్చుకుందాం: Your cholesterol is slightly high. Is it serious?",
  },
  seo: {
    title: "Understanding a Test Report in English for Telugu Speakers",
    description: "Learn report words like normal, high, low and borderline, and ask the doctor: Is it serious? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Your cholesterol", role: "who" },
    { text: "is", role: "action" },
    { text: "slightly high", role: "what" },
  ],
  core: [
    { en: "Your cholesterol is slightly high.", te: "మీ కొలెస్ట్రాల్ కొంచెం ఎక్కువగా ఉంది.", extra: ["are"] },
    { en: "Is it serious, or can I control it with diet?", te: "ఇది ప్రమాదమా, లేక తిండితో అదుపులో పెట్టుకోవచ్చా?", extra: ["Does"] },
    { en: "Your haemoglobin is a little low.", te: "మీ హిమోగ్లోబిన్ కొంచెం తక్కువగా ఉంది." },
    { en: "My fasting sugar is borderline.", te: "నా fasting sugar బోర్డర్‌లైన్‌లో ఉంది." },
    { en: "All the other results are normal.", te: "మిగతా రిజల్ట్స్ అన్నీ నార్మల్‌గా ఉన్నాయి.", extra: ["is"] },
    { en: "What is the normal range for this test?", te: "ఈ టెస్ట్‌కి నార్మల్ రేంజ్ ఎంత?" },
    { en: "Do I need to repeat the test after three months?", te: "మూడు నెలల తర్వాత ఈ టెస్ట్ మళ్ళీ చేయించుకోవాలా?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at any old test report at home. Find one result and say it aloud: My … is normal.",
    te: "ఇంట్లో ఉన్న ఏదైనా పాత టెస్ట్ రిపోర్ట్ చూడండి. ఒక రిజల్ట్ తీసుకుని గట్టిగా చెప్పండి: My … is normal.",
  },
  words: [
    { en: "borderline", te: "బోర్డర్‌లైన్, సరిగ్గా అంచులో" },
    { en: "slightly", te: "కొంచెం" },
    { en: "cholesterol", te: "కొలెస్ట్రాల్, రక్తంలో కొవ్వు" },
    { en: "haemoglobin", te: "హిమోగ్లోబిన్, రక్తం శాతం" },
    { en: "serious", te: "ప్రమాదకరమైన, సీరియస్" },
  ],
  grammar: ["am-is-are", "yes-no-questions"],
  topics: ["doctor", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Words on a report", te: "రిపోర్ట్‌లో పదాలు" },
      body: {
        en: "Each result is normal, high or low. Borderline means just at the edge. Slightly or a little makes it smaller.",
        te: "ప్రతి రిజల్ట్ normal, high లేదా low. borderline అంటే సరిగ్గా అంచులో ఉందని. slightly, a little అంటే కొంచెం మాత్రమే.",
      },
      bridge: {
        te: ["మీ కొలెస్ట్రాల్", "కొంచెం ఎక్కువగా", "ఉంది"],
        en: [
          { text: "Your cholesterol", role: "who" },
          { text: "is", role: "action" },
          { text: "slightly high", role: "what" },
        ],
      },
      examples: [
        { en: "Your cholesterol is slightly high.", te: "మీ కొలెస్ట్రాల్ కొంచెం ఎక్కువగా ఉంది." },
        { en: "All the other results are normal.", te: "మిగతా రిజల్ట్స్ అన్నీ నార్మల్‌గా ఉన్నాయి." },
        { en: "What is the normal range for this test?", te: "ఈ టెస్ట్‌కి నార్మల్ రేంజ్ ఎంత?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How high is it?", te: "ఎంత ఎక్కువ?" },
      items: [
        {
          form: "normal",
          useFor: { en: "Inside the normal range. No problem.", te: "నార్మల్ రేంజ్ లోపలే ఉంది. ఏ సమస్యా లేదు." },
          example: { en: "Your thyroid test is normal.", te: "మీ థైరాయిడ్ టెస్ట్ నార్మల్‌గా ఉంది." },
        },
        {
          form: "borderline",
          useFor: { en: "Just at the edge. Be careful from now.", te: "సరిగ్గా అంచులో ఉంది. ఇప్పట్నుంచే జాగ్రత్త." },
          example: { en: "Your BP is borderline.", te: "మీ BP బోర్డర్‌లైన్‌లో ఉంది." },
        },
        {
          form: "slightly high / low",
          useFor: { en: "A little outside the range.", te: "రేంజ్‌కి కొంచెం బయట." },
          example: { en: "Your vitamin D is slightly low.", te: "మీ విటమిన్ D కొంచెం తక్కువగా ఉంది." },
        },
        {
          form: "very high / low",
          useFor: { en: "Far outside the range. Ask what to do.", te: "రేంజ్‌కి చాలా బయట. ఏం చేయాలో అడగండి." },
          example: { en: "His sugar is very high today.", te: "ఈ రోజు ఆయన షుగర్ చాలా ఎక్కువగా ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "My cholesterol slightly high.",
      right: "My cholesterol is slightly high.",
      why: {
        en: "Telugu can say కొంచెం ఎక్కువ with no verb, but English always needs is.",
        te: "తెలుగులో 'కొంచెం ఎక్కువ' అని verb లేకుండా అనొచ్చు; ఇంగ్లీష్‌లో is తప్పకుండా కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am not understanding this report.",
      right: "I don't understand this report.",
      why: {
        en: "Understand is a state of mind, so it does not take -ing.",
        te: "understand అనేది మనసులోని స్థితి; దానికి -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The report says: Haemoglobin LOW. What does it mean?",
        te: "రిపోర్ట్‌లో Haemoglobin LOW అని ఉంది. దాని అర్థం ఏంటి?",
      },
      options: ["My haemoglobin is less than normal.", "My haemoglobin is more than normal.", "My haemoglobin is normal."],
      answer: 0,
      why: {
        en: "Low means under the normal range, and high means over it.",
        te: "low అంటే నార్మల్ రేంజ్ కంటే తక్కువ; high అంటే ఎక్కువ.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "label",
      heading: "City Diagnostics: Blood Report",
      lines: [
        "Patient: Sai, 62 years",
        "Fasting sugar: 96   (Normal 70 to 100)",
        "Haemoglobin: 10.5   (Normal 12 to 16)   LOW",
        "Cholesterol: 230   (Normal below 200)   HIGH",
      ],
      prompt: { en: "Which result is inside the normal range?", te: "ఏ రిజల్ట్ నార్మల్ రేంజ్ లోపల ఉంది?" },
      options: ["Fasting sugar", "Haemoglobin", "Cholesterol"],
      answer: 0,
      why: {
        en: "Ninety-six is between seventy and a hundred, and it has no LOW or HIGH.",
        te: "96 అనేది 70, 100 మధ్యలో ఉంది; దాని పక్కన LOW గానీ HIGH గానీ లేదు.",
      },
      say: "Fasting sugar is normal.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "article",
      sentence: "My haemoglobin is ___ little low.",
      te: "నా హిమోగ్లోబిన్ కొంచెం తక్కువగా ఉంది.",
      options: ["a", "the", "an"],
      answer: 0,
      why: {
        en: "A little means slightly; little without a means almost nothing.",
        te: "a little అంటే కొంచెం; a లేకుండా little అంటే దాదాపు ఏమీ లేదని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "My sugar and BP is normal.",
      wrongIndex: 4,
      fix: "My sugar and BP are normal.",
      why: {
        en: "Two things joined by and take are, not is.",
        te: "and తో రెండు విషయాలు కలిస్తే is కాదు, are వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You are with your neighbour Rani. The doctor says her haemoglobin is low. Ask if it is serious.",
        te: "మీరు పక్కింటి రాణి గారితో ఉన్నారు. ఆవిడ హిమోగ్లోబిన్ తక్కువగా ఉందని డాక్టర్ చెప్పారు. అది ప్రమాదమా అని అడగండి.",
      },
      expected: ["Is it serious, doctor?", "Is it serious?", "Doctor, is it serious?"],
      options: ["Is it serious, doctor?", "It serious, doctor?", "Does it serious, doctor?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "At a check-up, the doctor says your cholesterol is slightly high. Ask if food can control it.",
        te: "చెకప్‌లో మీ కొలెస్ట్రాల్ కొంచెం ఎక్కువగా ఉందని డాక్టర్ చెప్పారు. తిండితో అదుపులో పెట్టొచ్చా అని అడగండి.",
      },
      expected: ["Can I control it with diet?", "Can I control it with food?", "Can I control it with diet, doctor?", "Is it serious, or can I control it with diet?"],
      options: ["Can I control it with diet?", "Can I controlling it with diet?", "Can I to control it with diet?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The blood report", te: "బ్లడ్ రిపోర్ట్" },
    scene: {
      en: "You had a full check-up last week. Dr Kavitha explains your blood report.",
      te: "పోయిన వారం మీరు ఫుల్ చెకప్ చేయించుకున్నారు. డాక్టర్ కవిత గారు మీ బ్లడ్ రిపోర్ట్ వివరిస్తున్నారు.",
    },
    partner: { en: "Dr Kavitha (the doctor)", te: "డాక్టర్ కవిత (డాక్టర్)" },
    skills: [
      { id: "report", label: { en: "Asking about a report", te: "రిపోర్ట్ గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Your reports are ready. Please sit down.",
        te: "నమస్కారం! మీ రిపోర్టులు వచ్చాయి. కూర్చోండి.",
        hint: { en: "Greet her, and ask if everything is fine.", te: "నమస్కారం చెప్పి, అంతా బాగానే ఉందా అని అడగండి." },
        replies: [
          { say: "Good morning, doctor. Is everything normal?", good: true, skill: "report" },
          {
            say: "Normal or not? Tell me quickly, I'm in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "Please relax. Let me explain one by one.", te: "కంగారు పడకండి. ఒక్కొక్కటీ చెప్తాను." },
          },
        ],
      },
      {
        partner: "Most results are normal. But your cholesterol is slightly high.",
        te: "చాలా రిజల్ట్స్ నార్మల్‌గా ఉన్నాయి. కానీ మీ కొలెస్ట్రాల్ కొంచెం ఎక్కువగా ఉంది.",
        hint: { en: "Ask whether you should worry about it.", te: "దాని గురించి భయపడాలా అని అడగండి." },
        replies: [
          { say: "Is it serious, doctor?", good: true, skill: "report" },
          { say: "Should I be worried about it?", good: true, skill: "report" },
          { say: "It serious, doctor?", good: false, skill: "report", fixIt: "be" },
        ],
      },
      {
        partner: "Not serious. It's borderline. Diet and walking can bring it down.",
        te: "ప్రమాదం ఏమీ లేదు. బోర్డర్‌లైన్‌లో ఉంది. తిండి, నడకతో తగ్గించొచ్చు.",
        hint: { en: "Check that you understand: ask about oily food.", te: "అర్థమైందో లేదో సరిచూసుకోండి: నూనె వస్తువుల గురించి అడగండి." },
        replies: [
          { say: "So I should avoid oily food and walk every day?", good: true, skill: "report" },
          { say: "Do you mean I should eat less fried food?", good: true, skill: "report" },
          { say: "So I should avoiding oily food?", good: false, skill: "report" },
        ],
      },
      {
        partner: "Exactly. Let's repeat the test after three months.",
        te: "సరిగ్గా. మూడు నెలల తర్వాత టెస్ట్ మళ్ళీ చేద్దాం.",
        hint: { en: "Agree, and thank her for explaining.", te: "సరే అని, వివరించినందుకు ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll come back in three months. Thank you for explaining.", good: true, skill: "polite" },
          { say: "Okay, I'll come back in three month. Thank you.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
