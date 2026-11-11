import type { Lesson } from "../../types";

/** Week 17, Day 3 (CURRICULUM §4): warnings with Don't and Keep; reading a medicine label (EXP, Shake well). */
export const day: Lesson = {
  id: "dont-take-it-with",
  kind: "lesson",
  title: { en: "Don't Take It With Milk", te: "పాలతో వద్దు" },
  subtitle: "Don't … / Keep …",
  summary: {
    en: "Learn the warnings on medicines and labels: Don't take this on an empty stomach. Keep it in the fridge.",
    te: "మందుల హెచ్చరికలు, లేబుల్ చదవడం నేర్చుకుందాం: Don't take this on an empty stomach. Keep it in the fridge.",
  },
  seo: {
    title: "Medicine Warnings in English for Telugu Speakers",
    description:
      "Understand Don't take this on an empty stomach, Keep it in the fridge and EXP on a label. Simple lessons for Telugu speakers on medicine warnings.",
  },
  pattern: [
    { text: "Don't take", role: "action" },
    { text: "this", role: "what" },
    { text: "on an empty stomach", role: "when" },
  ],
  core: [
    { en: "Don't take it with milk.", te: "పాలతో వేసుకోకండి.", extra: ["not"] },
    { en: "Don't take this on an empty stomach.", te: "ఖాళీ కడుపుతో ఇది వేసుకోకండి.", extra: ["in"] },
    { en: "Keep it in the fridge.", te: "దీన్ని fridge లో పెట్టండి.", extra: ["keeping"] },
    { en: "Keep it away from children.", te: "పిల్లలకు అందకుండా పెట్టండి.", extra: ["of"] },
    { en: "Shake the bottle well before use.", te: "వాడే ముందు సీసాను బాగా కుదపండి.", extra: ["good"] },
    { en: "Can I take it with tea?", te: "దీన్ని టీతో వేసుకోవచ్చా?", extra: ["eat"] },
    { en: "Don't use it after the expiry date.", te: "expiry date దాటాక వాడకండి.", extra: ["expire"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find the expiry date on one medicine or food packet at home, and read it aloud.",
    te: "ఇంట్లో ఏదైనా ఒక మందు లేదా ఆహార ప్యాకెట్ మీద expiry date వెతికి, గట్టిగా చదవండి.",
  },
  words: [
    { en: "label", te: "లేబుల్, మందు మీద రాసిన చీటీ" },
    { en: "expiry date", te: "గడువు తేదీ" },
    { en: "shake", te: "కుదపడం" },
    { en: "swallow", te: "మింగడం" },
    { en: "syrup", te: "సిరప్, ద్రవ రూపంలో మందు" },
  ],
  grammar: ["imperatives", "articles"],
  topics: ["pharmacy", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Warnings: Don't and Keep", te: "హెచ్చరికలు: Don't, Keep" },
      body: {
        en: "A warning starts with the action word: Don't take it with milk. Keep it in the fridge. A label needs no you or please.",
        te: "హెచ్చరిక verb తోనే మొదలవుతుంది: Don't (వద్దు), Keep (పెట్టండి). లేబుల్ మీద you, please ఉండవు.",
      },
      bridge: {
        te: ["పాలతో", "వేసుకోకండి"],
        en: [
          { text: "Don't take", role: "action" },
          { text: "it", role: "what" },
          { text: "with milk", role: "what" },
        ],
      },
      examples: [
        { en: "Don't take it with milk.", te: "పాలతో వేసుకోకండి." },
        { en: "Don't take this on an empty stomach.", te: "ఖాళీ కడుపుతో ఇది వేసుకోకండి." },
        { en: "Keep it in the fridge.", te: "దీన్ని fridge లో పెట్టండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Reading a medicine label", te: "మందుల లేబుల్ చదవడం" },
      items: [
        {
          form: "EXP",
          useFor: { en: "The expiry date: do not use it after this.", te: "expiry date: ఈ తేదీ తర్వాత వాడకూడదు." },
          example: { en: "Don't use it after the expiry date.", te: "expiry date దాటాక వాడకండి." },
        },
        {
          form: "Keep away from children",
          useFor: { en: "Keep it high, where children can't reach.", te: "పిల్లలకు అందనంత ఎత్తులో పెట్టాలి." },
          example: { en: "Keep it away from children.", te: "పిల్లలకు అందకుండా పెట్టండి." },
        },
        {
          form: "Shake well",
          useFor: { en: "For a syrup: shake the bottle first.", te: "సిరప్ అయితే ముందు సీసాను కుదపాలి." },
          example: { en: "Shake the bottle well before use.", te: "వాడే ముందు సీసాను బాగా కుదపండి." },
        },
        {
          form: "Swallow whole",
          useFor: { en: "Don't chew it or break it.", te: "నమలకుండా, విరవకుండా మింగాలి." },
          example: { en: "Swallow it with water. Don't chew it.", te: "నీళ్ళతో మింగండి. నమలకండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Don't take it on empty stomach.",
      right: "Don't take it on an empty stomach.",
      why: {
        en: "Telugu has no a or an, but English needs an before empty.",
        te: "తెలుగులో a, an ఉండవు; ఇంగ్లీష్‌లో empty ముందు an కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "This syrup not for children.",
      right: "This syrup is not for children.",
      why: {
        en: "In Telugu కాదు is enough, but English needs is before not.",
        te: "తెలుగులో 'కాదు' చాలు; ఇంగ్లీష్‌లో not ముందు is కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Warn your neighbour: this tablet and milk must not go together.",
        te: "ఈ మాత్ర, పాలు కలిపి వేసుకోకూడదని మీ పొరుగువారికి చెప్పండి.",
      },
      options: ["Don't take it with milk.", "Not take it with milk.", "Don't taking it with milk."],
      answer: 0,
      why: {
        en: "A warning is Don't plus the plain action word, with no -ing.",
        te: "హెచ్చరిక అంటే Don't తర్వాత verb మారకుండా వస్తుంది; -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "label",
      heading: "Cough Syrup",
      lines: ["Shake well before use", "Store in a cool, dry place", "Keep away from children", "MFG 03/26   EXP 02/28"],
      prompt: { en: "Until when can you use this syrup?", te: "ఈ సిరప్ ఎప్పటి వరకు వాడొచ్చు?" },
      options: ["Until February 2028", "Until March 2026", "For 28 days"],
      answer: 0,
      why: {
        en: "EXP is the expiry date; MFG is the date it was made.",
        te: "EXP అంటే expiry date; MFG అంటే తయారైన తేదీ.",
      },
      say: "You can use it until February 2028.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The pharmacist says: Swallow it. Don't chew it. What do you do?",
        te: "pharmacist Swallow it. Don't chew it అన్నారు. మీరు ఏం చేయాలి?",
      },
      options: ["Take it whole, with water.", "Bite it into small pieces.", "Mix it in milk and drink it."],
      answer: 0,
      why: {
        en: "Swallow means it goes down whole; chew means biting it.",
        te: "swallow అంటే మింగడం; chew అంటే పళ్ళతో నమలడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Don't take it in an empty stomach.",
      wrongIndex: 3,
      fix: "Don't take it on an empty stomach.",
      why: {
        en: "Telugu says కడుపుతో, but with stomach English uses on, never in.",
        te: "తెలుగులో 'కడుపుతో' అంటాం; ఇంగ్లీష్‌లో stomach తో on వాడాలి, in కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the pharmacist if you can take the tablet with tea.",
        te: "ఈ మాత్ర టీతో వేసుకోవచ్చా అని pharmacist ని అడగండి.",
      },
      expected: ["Can I take it with tea?", "Can I take this with tea?"],
      options: ["Can I take it with tea?", "I can take it with tea?", "Can I taking it with tea?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend Mary's insulin has to stay cold. Tell her where to keep it.",
        te: "మీ స్నేహితురాలు మేరీ insulin చల్లగా ఉండాలి. ఎక్కడ పెట్టాలో ఆవిడకి చెప్పండి.",
      },
      expected: ["Keep it in the fridge.", "Please keep it in the fridge."],
      options: ["Keep it in the fridge.", "Keep it in fridge.", "Keeping it in the fridge."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Warnings about a new medicine", te: "కొత్త మందు హెచ్చరికలు" },
    scene: {
      en: "You bought a new medicine. Swapna, the pharmacist, tells you the warnings.",
      te: "మీరు కొత్త మందు కొన్నారు. pharmacist స్వప్న దాని హెచ్చరికలు చెప్తున్నారు.",
    },
    partner: { en: "Swapna (pharmacist)", te: "స్వప్న (pharmacist)" },
    skills: [
      { id: "warn", label: { en: "Understanding warnings", te: "హెచ్చరికలు అర్థం చేసుకోవడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "This is your new tablet. Please listen carefully.",
        te: "ఇది మీ కొత్త మాత్ర. జాగ్రత్తగా వినండి.",
        hint: { en: "Say you are ready to listen.", te: "వినడానికి సిద్ధంగా ఉన్నానని చెప్పండి." },
        replies: [
          { say: "Yes, please tell me.", good: true, skill: "polite" },
          {
            say: "Just give it. I know everything.",
            good: false,
            skill: "polite",
            react: { en: "Please listen. These warnings are important.", te: "కొంచెం వినండి. ఈ హెచ్చరికలు ముఖ్యం." },
          },
        ],
      },
      {
        partner: "Don't take it on an empty stomach.",
        te: "ఖాళీ కడుపుతో వేసుకోకండి.",
        hint: { en: "Ask about having it with milk.", te: "పాలతో వేసుకోవచ్చా అని అడగండి." },
        replies: [
          { say: "Can I take it with milk?", good: true, skill: "warn" },
          { say: "I can take with milk?", good: false, skill: "warn" },
        ],
      },
      {
        partner: "No. Don't take it with milk or curd.",
        te: "లేదు. పాలతో గానీ, పెరుగుతో గానీ వేసుకోకండి.",
        hint: { en: "Repeat the warning to check you understood.", te: "అర్థమైందో లేదో చూసుకోవడానికి హెచ్చరికను మళ్ళీ చెప్పండి." },
        replies: [
          { say: "Okay, no milk or curd with this tablet.", good: true, skill: "warn" },
          { say: "Okay, so no milk and no curd only.", good: false, skill: "warn", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Right. And keep it away from children.",
        te: "సరిగ్గా. పిల్లలకు అందకుండా పెట్టండి.",
        hint: { en: "Say you will, and thank her.", te: "అలాగే చేస్తానని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, I will. Thank you.", good: true, skill: "polite" },
          { say: "Sure, I will keep. Thank you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
