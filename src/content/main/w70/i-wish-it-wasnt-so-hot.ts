import type { Lesson } from "../../types";

/** Week 70, Day 2 (CURRICULUM §5): I wish + a negative past for complaining gently — I wish it wasn't so hot today. */
export const day: Lesson = {
  id: "i-wish-it-wasnt-so-hot",
  kind: "lesson",
  title: { en: "I Wish It Wasn't So Hot", te: "ఇంత ఎండ లేకపోతే బాగుండు" },
  subtitle: "I wish + wasn't / didn't",
  summary: {
    en: "Learn to complain gently about the heat and the wait: I wish it wasn't so hot today. I wish the bus didn't take so long.",
    te: "ఎండ గురించి, ఎదురుచూపు గురించి మెల్లగా చెప్పడం నేర్చుకుందాం: I wish it wasn't so hot today. I wish the bus didn't take so long.",
  },
  seo: {
    title: "Complaining Gently with I Wish in English for Telugu Speakers",
    description:
      "Say I wish it wasn't so hot today and I wish the bus didn't take so long. Simple lessons for Telugu speakers on gentle complaints.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "wish", role: "action" },
    { text: "it wasn't so hot", role: "what" },
    { text: "today", role: "when" },
  ],
  core: [
    { en: "I wish it wasn't so hot today.", te: "ఈ రోజు ఇంత ఎండ లేకపోతే బాగుండు.", extra: ["isn't"] },
    { en: "I wish the bus didn't take so long.", te: "బస్సు ఇంత ఆలస్యం చేయకపోతే బాగుండు.", extra: ["doesn't"] },
    { en: "I wish there was some shade here.", te: "ఇక్కడ కొంచెం నీడ ఉంటే బాగుండు.", extra: ["is"] },
    { en: "I wish I didn't have to go out in this heat.", te: "ఈ ఎండలో బయటికి వెళ్ళాల్సిన పని లేకపోతే బాగుండు.", extra: ["don't"] },
    { en: "This heat is unbearable. Let's stand in the shade.", te: "ఈ ఎండ భరించలేనంతగా ఉంది. నీడలో నిలబడదాం.", extra: ["on"] },
    { en: "I wish this bus stop had a roof.", te: "ఈ బస్ స్టాప్‌కి పైకప్పు ఉంటే బాగుండు.", extra: ["has"] },
    { en: "It's so stuffy inside. I wish the fan was working.", te: "లోపల గాలి ఆడట్లేదు. ఫ్యాన్ పనిచేస్తుంటే బాగుండు.", extra: ["is"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When you go out today, say one gentle wish about the weather: I wish it wasn't so …",
    te: "ఈ రోజు బయటికి వెళ్ళినప్పుడు వాతావరణం గురించి ఒక చిన్న కోరిక చెప్పండి: I wish it wasn't so …",
  },
  words: [
    { en: "heat", te: "వేడి, ఎండ" },
    { en: "shade", te: "నీడ" },
    { en: "unbearable", te: "భరించలేని" },
    { en: "sunstroke", te: "వడదెబ్బ" },
    { en: "stuffy", te: "గాలి ఆడని, ఉక్కగా ఉన్న" },
  ],
  grammar: ["wish-hope-regret", "past-simple", "politeness-softening"],
  topics: ["weather", "transport", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I wish … wasn't, didn't", te: "ఇలా లేకపోతే బాగుండు" },
      body: {
        en: "For something you don't like now, say I wish with wasn't or didn't: I wish it wasn't so hot. It is a gentle way to complain.",
        te: "ఇప్పుడు నచ్చని దాని గురించి I wish తర్వాత wasn't లేదా didn't వాడండి: I wish it wasn't so hot (ఇంత ఎండ లేకపోతే బాగుండు). ఇది మెల్లగా చెప్పే పద్ధతి.",
      },
      bridge: {
        te: ["ఈ రోజు", "ఇంత ఎండ", "లేకపోతే", "బాగుండు"],
        en: [
          { text: "I", role: "who" },
          { text: "wish", role: "action" },
          { text: "it wasn't so hot", role: "what" },
          { text: "today", role: "when" },
        ],
      },
      examples: [
        { en: "I wish it wasn't so hot today.", te: "ఈ రోజు ఇంత ఎండ లేకపోతే బాగుండు." },
        { en: "I wish the bus didn't take so long.", te: "బస్సు ఇంత ఆలస్యం చేయకపోతే బాగుండు." },
        { en: "I wish there was some shade here.", te: "ఇక్కడ కొంచెం నీడ ఉంటే బాగుండు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which no after I wish?", te: "I wish తర్వాత ఏ 'లేదు'?" },
      items: [
        {
          form: "I wish it wasn't …",
          useFor: { en: "With a describing word: hot, crowded, late.", te: "ఎలా ఉందో చెప్పే పదంతో: hot, crowded, late." },
          example: { en: "I wish it wasn't so hot today.", te: "ఈ రోజు ఇంత ఎండ లేకపోతే బాగుండు." },
        },
        {
          form: "I wish … didn't + verb",
          useFor: { en: "With an action word: take, close, rain.", te: "verb తో: take, close, rain." },
          example: { en: "I wish the bus didn't take so long.", te: "బస్సు ఇంత ఆలస్యం చేయకపోతే బాగుండు." },
        },
        {
          form: "I wish I didn't have to …",
          useFor: { en: "Something you must do but don't want to.", te: "చేయాల్సి వస్తున్నా, చేయాలనిపించని పని." },
          example: { en: "I wish I didn't have to go out in this heat.", te: "ఈ ఎండలో బయటికి వెళ్ళాల్సిన పని లేకపోతే బాగుండు." },
        },
        {
          form: "It's very hot, isn't it?",
          useFor: { en: "Start a friendly chat about the weather.", te: "వాతావరణం గురించి స్నేహంగా మాట మొదలుపెట్టడానికి." },
          example: { en: "It's very hot today, isn't it?", te: "ఈ రోజు చాలా ఎండగా ఉంది కదా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I wish the bus doesn't take so long.",
      right: "I wish the bus didn't take so long.",
      why: {
        en: "After I wish, doesn't changes to its past form, didn't, for a wish about now.",
        te: "I wish తర్వాత doesn't కాదు, didn't వస్తుంది; కోరిక ఇప్పటిదైనా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I drink four or five glass of water in summer.",
      right: "I drink four or five glasses of water in summer.",
      why: {
        en: "After four or five, glass takes es, but water itself never takes s.",
        te: "four, five తర్వాత glass కి es వస్తుంది (glasses); water కి మాత్రం ఎప్పుడూ s రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell another passenger about this bus. It is late every day.",
        te: "ఈ బస్సు గురించి ఇంకో ప్రయాణికుడికి చెప్పండి. అది రోజూ ఆలస్యంగా వస్తుంది.",
      },
      options: ["This bus comes late every day.", "This bus come late every day.", "This bus is coming late every day."],
      answer: 0,
      why: {
        en: "One bus, like he or she, takes s, and a daily habit takes no -ing.",
        te: "ఒక్క బస్సు (he, she లాగా), అందుకే verb కి s; రోజూ జరిగే అలవాటుకి -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I wish the bus ___ take so long.",
      te: "బస్సు ఇంత ఆలస్యం చేయకపోతే బాగుండు.",
      options: ["didn't", "doesn't", "won't"],
      answer: 0,
      why: {
        en: "After I wish, use the past form didn't, though you mean the bus today.",
        te: "I wish తర్వాత past form didn't వస్తుంది; అర్థం ఈ రోజు బస్సు గురించే.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Heat Wave Alert",
      lines: [
        "Dear citizens,",
        "Very hot days are expected from 10 to 15 May.",
        "Please stay indoors from 12 noon to 3 pm.",
        "Drink plenty of water, buttermilk or lemon water.",
        "Wear light cotton clothes and cover your head.",
        "Free drinking water is kept at all bus stops.",
        "Signs of sunstroke: a bad headache, dizziness and hot, dry skin.",
        "For sunstroke, call one zero eight at once.",
        "Commissioner, Guntur Municipal Corporation",
      ],
      questions: [
        {
          prompt: { en: "When should people stay indoors?", te: "జనం ఎప్పుడు ఇంట్లోనే ఉండాలి?" },
          options: ["From 12 noon to 3 pm", "From 10 am to 12 noon", "All day on 15 May"],
          answer: 0,
          why: {
            en: "The third line gives the hottest hours, from noon until three.",
            te: "మూడో లైన్‌లో బాగా ఎండ ఉండే టైమ్ ఉంది: మధ్యాహ్నం పన్నెండు నుంచి మూడు దాకా.",
          },
        },
        {
          prompt: { en: "Where can you get free drinking water?", te: "ఉచితంగా మంచినీళ్ళు ఎక్కడ దొరుకుతాయి?" },
          options: ["At all bus stops", "At the municipal office", "At the hospital"],
          answer: 0,
          why: {
            en: "The sixth line says the water is kept where people wait for buses.",
            te: "ఆరో లైన్‌లో, బస్సుల కోసం జనం ఎదురుచూసే చోట నీళ్ళు ఉంచుతారని ఉంది.",
          },
        },
        {
          prompt: { en: "What should you do for sunstroke?", te: "వడదెబ్బ తగిలితే ఏం చేయాలి?" },
          options: ["Call one zero eight at once", "Drink buttermilk and wait", "Walk to the bus stop"],
          answer: 0,
          why: {
            en: "The eighth line asks you to call the ambulance number without waiting.",
            te: "ఎనిమిదో లైన్‌లో, ఆలస్యం చేయకుండా ambulance నంబర్‌కి ఫోన్ చేయమని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Let's wait under tree over there.",
      wrongIndex: 3,
      fix: "Let's wait under the tree over there.",
      why: {
        en: "A tree you can both see takes the; Telugu has no word like the.",
        te: "ఇద్దరికీ కనిపిస్తున్న ఆ చెట్టు కాబట్టి the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You are waiting at the bus stop in May. Say gently to another passenger that the heat is too much.",
        te: "మే నెలలో బస్ స్టాప్‌లో ఎదురుచూస్తున్నారు. ఎండ మరీ ఎక్కువగా ఉందని పక్కన ఉన్న ప్రయాణికులకి మెల్లగా చెప్పండి.",
      },
      expected: ["I wish it wasn't so hot today.", "I wish it wasn't so hot.", "It's very hot today, isn't it?", "This heat is unbearable."],
      options: ["I wish it wasn't so hot today.", "I wish it isn't so hot today.", "So hot! This town is useless."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A passenger asks: Hasn't the ten o'clock bus come yet? It hasn't. Answer.",
        te: "పది గంటల బస్సు ఇంకా రాలేదా? అని పక్కన ఉన్న ఒకాయన అడుగుతున్నారు. బస్సు రాలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, it hasn't come yet.", "No, not yet.", "No, it hasn't."],
      options: ["No, it hasn't come yet.", "Yes, it hasn't come yet.", "No, it didn't came yet."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A hot day at the bus stop", te: "ఎండలో బస్ స్టాప్ దగ్గర" },
    scene: {
      en: "It is May in Vijayawada. You are waiting for a bus at noon. Another passenger, Venkat, starts talking.",
      te: "మే నెల, విజయవాడ. మధ్యాహ్నం బస్సు కోసం ఎదురుచూస్తున్నారు. పక్కనే నిలబడ్డ వెంకట్ గారు మీతో మాట కలిపారు.",
    },
    partner: { en: "Venkat (another passenger)", te: "వెంకట్ (తోటి ప్రయాణికుడు)" },
    voice: "b",
    skills: [
      { id: "wish", label: { en: "Complaining gently", te: "మెల్లగా చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Phew! It's very hot today, isn't it?",
        te: "అబ్బా! ఈ రోజు చాలా ఎండగా ఉంది కదా?",
        hint: { en: "Agree, and wish the weather was cooler.", te: "ఒప్పుకుని, ఇంత ఎండ లేకపోతే బాగుండని అనండి." },
        replies: [
          { say: "Yes! I wish it wasn't so hot.", good: true, skill: "wish" },
          { say: "Yes, this heat is unbearable.", good: true, skill: "wish" },
          { say: "Yes! I wish it isn't so hot.", good: false, skill: "wish" },
        ],
      },
      {
        partner: "And this bus is always late. I've been waiting for half an hour.",
        te: "పైగా ఈ బస్సు ఎప్పుడూ ఆలస్యమే. అరగంట నుంచి ఎదురుచూస్తున్నాను.",
        hint: { en: "Agree gently, and say you wish the bus came faster.", te: "మెల్లగా ఒప్పుకుని, బస్సు త్వరగా వస్తే బాగుండని అనండి." },
        replies: [
          { say: "I know. I wish the bus didn't take so long.", good: true, skill: "wish" },
          {
            say: "Then take an auto. Why complain to me?",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry. I was only making conversation.", te: "ఓ, సారీ. ఊరికే మాట్లాడుతున్నాను అంతే." },
          },
          { say: "I know. I wish the bus doesn't take so long.", good: false, skill: "wish" },
        ],
      },
      {
        partner: "Come, stand here in the shade. Do you have water?",
        te: "రండి, ఇక్కడ నీడలో నిలబడండి. మీ దగ్గర నీళ్ళు ఉన్నాయా?",
        hint: { en: "Thank him. Say you have two bottles, and offer him one.", te: "థాంక్స్ చెప్పండి. మీ దగ్గర రెండు సీసాలు ఉన్నాయని చెప్పి, ఒకటి ఆయనకి ఇవ్వండి." },
        replies: [
          { say: "Thank you. Yes, I have two bottles. Please take one.", good: true, skill: "polite" },
          { say: "Thank you. Yes, I have two bottle. Please take one.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
      {
        partner: "Thank you! Look, the bus is coming at last.",
        te: "థాంక్యూ! చూడండి, ఎట్టకేలకు బస్సు వస్తోంది.",
        hint: { en: "Say you are glad, and let him get on first.", te: "సంతోషమని చెప్పి, ఆయన్ని ముందు ఎక్కమనండి." },
        replies: [
          { say: "At last! Please go ahead, after you.", good: true, skill: "polite" },
          { say: "At last! This bus always come late.", good: false, skill: "wish", fixIt: "he-she-s" },
        ],
      },
    ],
  },
};
