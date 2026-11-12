import type { Lesson } from "../../types";

/** Week 68, Day 3 (CURRICULUM §5): too much, too many and enough + noun — I eat too much rice and not enough vegetables. */
export const day: Lesson = {
  id: "too-much-not-enough-food-sleep",
  kind: "lesson",
  title: { en: "Too Much, Not Enough", te: "మరీ ఎక్కువ, సరిపోదు" },
  subtitle: "too much, too many, enough",
  summary: {
    en: "Learn to talk about food and sleep: I eat too much rice and not enough vegetables. Do you get enough sleep?",
    te: "తిండి, నిద్ర గురించి చెప్పడం నేర్చుకుందాం: I eat too much rice and not enough vegetables. Do you get enough sleep?",
  },
  seo: {
    title: "Too Much, Too Many and Enough in English for Telugu Speakers",
    description:
      "Say I eat too much rice and Do you get enough sleep? Simple lessons for Telugu speakers on too much, too many and enough.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "eat", role: "action" },
    { text: "too much rice", role: "what" },
    { text: "every day", role: "when" },
  ],
  core: [
    { en: "I drink too much tea.", te: "నేను టీ మరీ ఎక్కువగా తాగుతాను.", extra: ["many"] },
    { en: "I eat too much rice and not enough vegetables.", te: "నేను అన్నం మరీ ఎక్కువగా తింటాను, కూరగాయలు మాత్రం సరిపడా తినను.", extra: ["many"] },
    { en: "Do you get enough sleep at night?", te: "రాత్రిపూట మీరు సరిపడా నిద్రపోతారా?", extra: ["much"] },
    { en: "He eats too many sweets.", te: "ఆయన స్వీట్లు మరీ ఎక్కువగా తింటారు.", extra: ["much"] },
    { en: "There's too much salt in this pickle.", te: "ఈ ఊరగాయలో ఉప్పు మరీ ఎక్కువగా ఉంది.", extra: ["many"] },
    { en: "I don't drink enough water in summer.", te: "ఎండాకాలంలో నేను సరిపడా నీళ్ళు తాగను.", extra: ["much"] },
    { en: "Too much sugar is bad for your health.", te: "చక్కెర మరీ ఎక్కువైతే ఆరోగ్యానికి మంచిది కాదు.", extra: ["many"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your meals today. Say one thing you eat too much of, and one you don't eat enough of.",
    te: "ఈ రోజు మీ భోజనం చూడండి. మీరు మరీ ఎక్కువగా తినేది ఒకటి, సరిపడా తిననిది ఒకటి గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "enough", te: "సరిపడా" },
    { en: "too much", te: "మరీ ఎక్కువ (లెక్కపెట్టలేనివి)" },
    { en: "too many", te: "మరీ ఎక్కువ (లెక్కపెట్టేవి)" },
    { en: "junk food", te: "జంక్ ఫుడ్, ఆరోగ్యానికి మంచిది కాని తిండి" },
    { en: "dietitian", te: "ఆహార నిపుణులు, డైటీషియన్" },
  ],
  grammar: ["plurals-countable", "present-simple"],
  topics: ["health", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Too much, too many, enough", te: "మరీ ఎక్కువ, సరిపడా" },
      body: {
        en: "Too much and too many mean more than is good. Use much for rice, salt and sugar, and many for things you count. Enough means as much as you need.",
        te: "మరీ ఎక్కువ అంటే too much (అన్నం, ఉప్పు లాంటి లెక్కపెట్టలేనివి), too many (స్వీట్లు లాంటి లెక్కపెట్టేవి). సరిపడా అంటే enough.",
      },
      bridge: {
        te: ["నేను", "అన్నం మరీ ఎక్కువగా", "తింటాను"],
        en: [
          { text: "I", role: "who" },
          { text: "eat", role: "action" },
          { text: "too much rice", role: "what" },
        ],
      },
      examples: [
        { en: "I drink too much tea.", te: "నేను టీ మరీ ఎక్కువగా తాగుతాను." },
        { en: "I eat too much rice and not enough vegetables.", te: "నేను అన్నం మరీ ఎక్కువగా తింటాను, కూరగాయలు మాత్రం సరిపడా తినను." },
        { en: "He eats too many sweets.", te: "ఆయన స్వీట్లు మరీ ఎక్కువగా తింటారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "much, many or enough?", te: "much, many, enough లో ఏది?" },
      items: [
        {
          form: "too much + rice, salt, sugar",
          useFor: { en: "Things you don't count.", te: "లెక్కపెట్టలేనివి." },
          example: { en: "There's too much salt in this pickle.", te: "ఈ ఊరగాయలో ఉప్పు మరీ ఎక్కువగా ఉంది." },
        },
        {
          form: "too many + sweets, cups",
          useFor: { en: "Things you count; the word takes s.", te: "లెక్కపెట్టేవి; పదానికి s వస్తుంది." },
          example: { en: "I drink too many cups of coffee.", te: "నేను మరీ ఎక్కువ కప్పుల కాఫీ తాగుతాను." },
        },
        {
          form: "enough + food or sleep",
          useFor: { en: "As much as you need. Enough comes before the word.", te: "కావాల్సినంత. enough పదం ముందు వస్తుంది." },
          example: { en: "Do you eat enough fruit?", te: "మీరు సరిపడా పండ్లు తింటారా?" },
        },
        {
          form: "not enough",
          useFor: { en: "Less than you need.", te: "కావాల్సిన దానికంటే తక్కువ." },
          example: { en: "I don't drink enough water in summer.", te: "ఎండాకాలంలో నేను సరిపడా నీళ్ళు తాగను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "He eats too much sweets.",
      right: "He eats too many sweets.",
      why: {
        en: "Sweets are counted, so use many; much is for rice, salt and sugar.",
        te: "స్వీట్లని లెక్కపెడతాం, అందుకే many; much అన్నం, ఉప్పు, చక్కెర లాంటి వాటికి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I don't get sleep enough.",
      right: "I don't get enough sleep.",
      why: {
        en: "Enough comes before the thing; Telugu సరిపడా can move, but English keeps this order.",
        te: "enough ఆ వస్తువు ముందే వస్తుంది; తెలుగులో 'సరిపడా' ఎక్కడైనా రావచ్చు, ఇంగ్లీష్‌లో రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "The dietitian asks about your tea. You drink six cups a day. What do you say?",
        te: "డైటీషియన్ మీ టీ గురించి అడుగుతున్నారు. మీరు రోజుకి ఆరు కప్పులు తాగుతారు. ఏమంటారు?",
      },
      options: ["I drink too many cups of tea.", "I drink too much cups of tea.", "I drink too many cup of tea."],
      answer: 0,
      why: {
        en: "Cups are counted, so use many, and after many the word takes s.",
        te: "కప్పులని లెక్కపెడతాం, అందుకే many; many తర్వాత పదానికి s వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "There's too ___ salt in this pickle.",
      te: "ఈ ఊరగాయలో ఉప్పు మరీ ఎక్కువగా ఉంది.",
      options: ["much", "many", "more"],
      answer: 0,
      why: {
        en: "Salt is not counted, so it takes much, and too more is never used.",
        te: "ఉప్పుని లెక్కపెట్టం, అందుకే much; too more అని ఎప్పుడూ అనరు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Tell the dietitian about your fruit: one apple each morning.",
        te: "మీరు తినే పండు గురించి డైటీషియన్‌కి చెప్పండి: రోజూ పొద్దున ఒక ఆపిల్.",
      },
      options: ["I eat an apple every morning.", "I eat apple every morning.", "I eat a apple every morning."],
      answer: 0,
      why: {
        en: "One apple needs an, because apple starts with a vowel sound; Telugu has no such word.",
        te: "ఒక్క ఆపిల్ అంటే an కావాలి, apple అచ్చుతో మొదలవుతుంది కాబట్టి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "Are you get enough sleep at night?",
      wrongIndex: 0,
      fix: "Do you get enough sleep at night?",
      why: {
        en: "Get is an action verb, so the question starts with do, not are.",
        te: "get ఒక action verb, అందుకే ప్రశ్న do తో మొదలవుతుంది, are తో కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "The dietitian asks how much coffee you drink. Say two cups a day.",
        te: "మీరు ఎంత కాఫీ తాగుతారని డైటీషియన్ అడుగుతున్నారు. రోజుకి రెండు కప్పులు అని చెప్పండి.",
      },
      expected: ["I drink two cups a day.", "Two cups a day.", "Two cups of coffee a day."],
      options: ["I drink two cups a day.", "I drink two cup a day.", "I drink two cups in day."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend asks if you sleep well. Say no: only five hours, not enough.",
        te: "బాగా నిద్రపోతున్నారా అని స్నేహితులు అడుగుతున్నారు. లేదు అని చెప్పండి: ఐదు గంటలే, సరిపోదు.",
      },
      expected: ["No, I don't get enough sleep.", "Not really. I only sleep five hours.", "No, I don't sleep enough."],
      options: ["No, I don't get enough sleep.", "No, I don't get sleep enough.", "No, I don't get many sleep."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the dietitian's desk", te: "డైటీషియన్ దగ్గర" },
    scene: {
      en: "At the clinic, the doctor sends you to the dietitian, Joseph. He asks about your meals.",
      te: "క్లినిక్‌లో డాక్టర్ మిమ్మల్ని డైటీషియన్ జోసెఫ్ గారి దగ్గరికి పంపారు. ఆయన మీ భోజనం గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Joseph (the dietitian)", te: "జోసెఫ్ (డైటీషియన్)" },
    voice: "b",
    skills: [
      { id: "amounts", label: { en: "too much, too many, enough", te: "too much, too many, enough వాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Please sit down. Tell me about your meals.",
        te: "గుడ్ మార్నింగ్. కూర్చోండి. మీ భోజనం గురించి చెప్పండి.",
        hint: { en: "Greet him, and say you eat rice three times a day.", te: "నమస్కారం చెప్పి, రోజుకి మూడుసార్లు అన్నం తింటారని చెప్పండి." },
        replies: [
          { say: "Good morning. I eat rice three times a day.", good: true, skill: "polite" },
          { say: "Good morning. I am eating rice three times daily.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
      {
        partner: "That may be too much rice. Do you eat enough vegetables?",
        te: "అది మరీ ఎక్కువ అన్నం కావచ్చు. కూరగాయలు సరిపడా తింటారా?",
        hint: { en: "Say honestly that you don't, only a little at lunch.", te: "నిజాయితీగా తినను అని, మధ్యాహ్నం కొంచెమే అని చెప్పండి." },
        replies: [
          { say: "Not really. I don't eat enough vegetables. Only a little at lunch.", good: true, skill: "amounts" },
          { say: "Not really. I don't eat vegetables enough. Only little at lunch.", good: false, skill: "amounts" },
        ],
      },
      {
        partner: "I see. What about sweets and junk food?",
        te: "అలాగా. స్వీట్లు, జంక్ ఫుడ్ సంగతేంటి?",
        hint: { en: "Say you eat a lot of sweets, and ask if that is bad.", te: "స్వీట్లు బాగా తింటారని చెప్పి, అది మంచిది కాదా అని అడగండి." },
        replies: [
          { say: "I eat too many sweets. Is that bad for me?", good: true, skill: "amounts" },
          { say: "I eat too much sweets. Is that bad for me?", good: false, skill: "amounts", fixIt: "plural" },
          {
            say: "Why so many questions? Just give me some tablets.",
            good: false,
            skill: "polite",
            react: { en: "Food matters as much as tablets. Please bear with me.", te: "టాబ్లెట్లు ఎంత ముఖ్యమో తిండి కూడా అంతే. కొంచెం ఓపిక పట్టండి." },
          },
        ],
      },
      {
        partner: "Eat more vegetables and fewer sweets. Come back in a month.",
        te: "కూరగాయలు ఎక్కువగా, స్వీట్లు తక్కువగా తినండి. నెల తర్వాత మళ్ళీ రండి.",
        hint: { en: "Thank him, and promise to change your meals.", te: "థాంక్స్ చెప్పి, మీ భోజనం మార్చుకుంటానని మాటివ్వండి." },
        replies: [
          { say: "Thank you. I'll try to eat more vegetables.", good: true, skill: "amounts" },
          { say: "Thank you. I'll try eat more vegetables.", good: false, skill: "amounts" },
        ],
      },
    ],
  },
};
