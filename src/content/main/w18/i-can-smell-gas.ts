import type { Lesson } from "../../types";

/** Week 18, Day 3 (CURRICULUM §4): gas leaks, sparks and fire — orders and warnings (Turn off …, Don't …), call 101. */
export const day: Lesson = {
  id: "i-can-smell-gas",
  kind: "lesson",
  title: { en: "I Can Smell Gas", te: "గ్యాస్ వాసన వస్తోంది" },
  subtitle: "Turn off … / Don't …",
  summary: {
    en: "Learn what to say and do if you smell gas or see smoke: Turn off the regulator. Don't switch on the light.",
    te: "గ్యాస్ వాసన వచ్చినా, పొగ కనిపించినా ఏం చెప్పాలో, ఏం చేయాలో నేర్చుకుందాం: Turn off the regulator. Don't switch on the light.",
  },
  seo: {
    title: "Gas Leak and Fire Safety in English for Telugu Speakers",
    description:
      "Say I can smell gas, Turn off the regulator and Don't switch on the light. Simple lessons for Telugu speakers on gas and fire safety.",
  },
  pattern: [
    { text: "Don't", role: "action" },
    { text: "switch on", role: "action" },
    { text: "the light", role: "what" },
  ],
  core: [
    { en: "I can smell gas.", te: "గ్యాస్ వాసన వస్తోంది.", extra: ["smelling"] },
    { en: "Don't switch on the light.", te: "లైట్ వేయకండి.", extra: ["Not"] },
    { en: "Turn off the regulator.", te: "రెగ్యులేటర్ ఆపేయండి.", extra: ["of"] },
    { en: "Open all the doors and windows.", te: "తలుపులు, కిటికీలు అన్నీ తెరవండి.", extra: ["window"] },
    { en: "There is smoke in the kitchen.", te: "వంటగదిలో పొగ వస్తోంది.", extra: ["smokes"] },
    { en: "Don't light a match or a lamp.", te: "అగ్గిపుల్ల గానీ దీపం గానీ వెలిగించకండి.", extra: ["lighting"] },
    { en: "There's a fire. Please call one zero one.", te: "మంటలు అంటుకున్నాయి. ప్లీజ్, 101 కి ఫోన్ చేయండి.", extra: ["to"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find the regulator on your gas cylinder and the main switch at home. Point and say: Turn off the regulator.",
    te: "మీ ఇంట్లో గ్యాస్ సిలిండర్ రెగ్యులేటర్, మెయిన్ స్విచ్ ఎక్కడ ఉన్నాయో చూడండి. వేలుతో చూపిస్తూ Turn off the regulator అనండి.",
  },
  words: [
    { en: "smell", te: "వాసన" },
    { en: "cylinder", te: "సిలిండర్" },
    { en: "regulator", te: "రెగ్యులేటర్" },
    { en: "smoke", te: "పొగ" },
    { en: "fire", te: "మంటలు, అగ్ని ప్రమాదం" },
  ],
  grammar: ["imperatives", "can-could", "there-is-are"],
  topics: ["home", "phone", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Telling people what to do", te: "ఏం చేయాలో చెప్పడం" },
      body: {
        en: "In danger, give short orders: start with the action word. Turn off the regulator. To stop someone, put Don't first: Don't switch on the light.",
        te: "ప్రమాదంలో చిన్న మాటలు చాలు: verb తో మొదలుపెట్టండి. Turn off the regulator. ఏదైనా చేయొద్దని చెప్పాలంటే ముందు Don't: Don't switch on the light.",
      },
      bridge: {
        te: ["లైట్", "వేయకండి"],
        en: [
          { text: "Don't switch on", role: "action" },
          { text: "the light", role: "what" },
        ],
      },
      examples: [
        { en: "Turn off the regulator.", te: "రెగ్యులేటర్ ఆపేయండి." },
        { en: "Don't switch on the light.", te: "లైట్ వేయకండి." },
        { en: "Don't light a match or a lamp.", te: "అగ్గిపుల్ల గానీ దీపం గానీ వెలిగించకండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Gas, sparks or fire?", te: "గ్యాస్, నిప్పురవ్వలు, మంటలు?" },
      items: [
        {
          form: "A gas smell",
          useFor: { en: "Turn off the regulator, open the windows, and go out.", te: "రెగ్యులేటర్ ఆపి, కిటికీలు తెరిచి, బయటికి వెళ్ళండి." },
          example: { en: "Turn off the regulator on the cylinder.", te: "సిలిండర్ మీద ఉన్న రెగ్యులేటర్ ఆపేయండి." },
        },
        {
          form: "Sparks from a switch",
          useFor: { en: "Turn off the main switch. Don't touch the wire.", te: "మెయిన్ స్విచ్ ఆపేయండి. వైర్ ముట్టుకోకండి." },
          example: { en: "Turn off the main switch.", te: "మెయిన్ స్విచ్ ఆపేయండి." },
        },
        {
          form: "A fire",
          useFor: { en: "Go out first, then call one zero one or one one two.", te: "ముందు బయటికి వెళ్ళండి, తర్వాత 101 లేదా 112 కి ఫోన్ చేయండి." },
          example: { en: "Everyone, please go outside now.", te: "అందరూ, ప్లీజ్ ఇప్పుడే బయటికి వెళ్ళండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Don't on the light.",
      right: "Don't switch on the light.",
      why: {
        en: "On alone is not an action word, so say switch on.",
        te: "on ఒక్కటే verb కాదు; switch on అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Not switch on the light.",
      right: "Please don't switch on the light.",
      why: {
        en: "Telugu says no at the end, వేయకండి; English starts with Don't.",
        te: "తెలుగులో 'వద్దు' అనేది చివర వస్తుంది (వేయకండి); ఇంగ్లీష్‌లో Don't మొదట్లోనే వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You smell gas. What is the first safe thing to do?", te: "గ్యాస్ వాసన వస్తోంది. ముందుగా చేయాల్సిన సురక్షితమైన పని ఏంటి?" },
      options: ["Turn off the regulator.", "Turn on the stove to check.", "Switch on the fan."],
      answer: 0,
      why: {
        en: "Turning off the regulator stops more gas from coming out.",
        te: "రెగ్యులేటర్ ఆపేస్తే ఇంకా గ్యాస్ బయటికి రాదు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "label",
      heading: "Gas Safety",
      lines: ["If you smell gas:", "Turn off the regulator.", "Open all doors and windows.", "Don't switch on lights or fans.", "LPG Emergency: 1906"],
      prompt: { en: "It is dark, and you smell gas. What does the label say?", te: "చీకటిగా ఉంది, గ్యాస్ వాసన వస్తోంది. లేబుల్ మీద ఏం రాసి ఉంది?" },
      options: ["Don't switch on the light.", "Switch on the light to see.", "Light a lamp to see."],
      answer: 0,
      why: {
        en: "A spark from a switch or a flame can start a fire.",
        te: "స్విచ్ నుంచి వచ్చే చిన్న నిప్పురవ్వ గానీ, మంట గానీ వల్ల మంటలు అంటుకోవచ్చు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Sparks are coming from a switch. Tell your neighbour what to do.", te: "స్విచ్ నుంచి నిప్పురవ్వలు వస్తున్నాయి. ఏం చేయాలో పక్కింటివారికి చెప్పండి." },
      options: ["Please turn off the main switch.", "Please off the main switch.", "Please turn off main switch."],
      answer: 0,
      why: {
        en: "Off alone is not an action, and main switch needs the before it.",
        te: "off ఒక్కటే verb కాదు; main switch ముందు the కూడా కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "There is smokes in the kitchen.",
      wrongIndex: 2,
      fix: "There is smoke in the kitchen.",
      why: {
        en: "Smoke cannot be counted, so it never takes s.",
        te: "పొగను లెక్కపెట్టలేం, అందుకే smoke కి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "You smell gas at home. Tell your neighbour.",
        te: "ఇంట్లో గ్యాస్ వాసన వస్తోంది. పక్కింటివారికి చెప్పండి.",
      },
      expected: ["I can smell gas.", "I smell gas.", "I can smell gas at home."],
      options: ["I can smell gas.", "I am smelling gas.", "Gas smell is coming."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour wants to switch on the light. Stop him.",
        te: "పక్కింటాయన లైట్ వేయబోతున్నారు. ఆయన్ని ఆపండి.",
      },
      expected: ["Please don't switch on the light.", "Don't switch on the light.", "Stop! Don't switch on the light."],
      options: ["Please don't switch on the light.", "Please not switch on the light.", "Please don't on the light."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A gas smell in the kitchen", te: "వంటగదిలో గ్యాస్ వాసన" },
    scene: {
      en: "You smell gas in your kitchen. You go outside and call the gas emergency number. Sarala answers.",
      te: "మీ వంటగదిలో గ్యాస్ వాసన వస్తోంది. బయటికి వచ్చి గ్యాస్ ఎమర్జెన్సీ నంబర్‌కి ఫోన్ చేశారు. సరళ మాట్లాడుతున్నారు.",
    },
    partner: { en: "Sarala (gas emergency service)", te: "సరళ (గ్యాస్ ఎమర్జెన్సీ సర్వీస్)" },
    skills: [
      { id: "problem", label: { en: "Saying the problem", te: "సమస్య చెప్పడం" } },
      { id: "ask", label: { en: "Asking questions", te: "ప్రశ్నలు అడగడం" } },
    ],
    turns: [
      {
        partner: "Hello, gas emergency service. How can I help you?",
        te: "హలో, గ్యాస్ ఎమర్జెన్సీ సర్వీస్. ఏం సహాయం కావాలి?",
        hint: { en: "Tell her the problem in your kitchen.", te: "మీ వంటగదిలో ఉన్న సమస్య చెప్పండి." },
        replies: [
          { say: "I can smell gas in my kitchen.", good: true, skill: "problem" },
          { say: "I am smelling gas in my kitchen.", good: false, skill: "problem", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Did you turn off the regulator?",
        te: "రెగ్యులేటర్ ఆపేశారా?",
        hint: { en: "Say yes, you did it (past).", te: "అవునని, ఆపేశానని చెప్పండి (past)." },
        replies: [
          { say: "Yes, I turned it off.", good: true, skill: "problem" },
          { say: "Yes, I turn off it.", good: false, skill: "problem" },
        ],
      },
      {
        partner: "Good. Open the windows. Don't use any switches.",
        te: "మంచిది. కిటికీలు తెరవండి. ఏ స్విచ్‌లూ వాడకండి.",
        hint: { en: "Say okay, and ask when the mechanic will come.", te: "సరే అని, మెకానిక్ ఎప్పుడు వస్తారో అడగండి." },
        replies: [
          { say: "Okay. When will the mechanic come?", good: true, skill: "ask" },
          { say: "Okay. When the mechanic will come?", good: false, skill: "ask", fixIt: "question" },
          {
            say: "Come fast, or I will complain!",
            good: false,
            skill: "ask",
            react: { en: "Please don't worry. Someone will come very soon.", te: "కంగారు పడకండి. ఎవరో ఒకరు త్వరలోనే వస్తారు." },
          },
        ],
      },
      {
        partner: "In thirty minutes. Please wait outside the house.",
        te: "అరగంటలో వస్తారు. ప్లీజ్, ఇంటి బయటే ఉండండి.",
        hint: { en: "Say okay, and thank her.", te: "సరే అని, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll wait outside. Thank you.", good: true },
          { say: "Okay, I'll wait outside. Thanks you.", good: false },
        ],
      },
    ],
  },
};
