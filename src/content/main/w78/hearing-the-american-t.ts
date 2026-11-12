import type { Lesson } from "../../types";

/** Week 78, Day 3 (CURRICULUM §5): hearing the American t (water, better) and the British r (car, park). */
export const day: Lesson = {
  id: "hearing-the-american-t",
  kind: "lesson",
  title: { en: "The American T, the British R", te: "అమెరికన్, బ్రిటిష్ ఉచ్చారణ" },
  subtitle: "hearing the American t and the British r",
  summary: {
    en: "Learn to understand two sounds: the soft American t in water, and the British car with no r.",
    te: "రెండు శబ్దాలు అర్థం చేసుకోవడం నేర్చుకుందాం: water లో అమెరికా వాళ్ళ మెత్తని t, బ్రిటిష్ వాళ్ళు r లేకుండా అనే car.",
  },
  seo: {
    title: "American and British Pronunciation in English for Telugu Speakers",
    description:
      "Hear the soft American t in water and the British car with no r. Simple lessons for Telugu speakers on understanding other accents.",
  },
  pattern: [
    { text: "Could", role: "action" },
    { text: "I", role: "who" },
    { text: "get", role: "action" },
    { text: "some water?", role: "what" },
  ],
  core: [
    { en: "Could I get some water, please?", te: "కొంచెం మంచినీళ్ళు ఇస్తారా, ప్లీజ్?", extra: ["a"] },
    { en: "How far is the car park from here?", te: "ఇక్కడి నుంచి car park ఎంత దూరం?", extra: ["much"] },
    { en: "Americans say parking lot for car park.", te: "అమెరికా వాళ్ళు car park ని parking lot అంటారు.", extra: ["called"] },
    { en: "It's a ten-minute walk from here.", te: "ఇక్కడి నుంచి పది నిమిషాల నడక.", extra: ["minutes"] },
    { en: "Turn left at the second traffic light.", te: "రెండో ట్రాఫిక్ లైట్ దగ్గర ఎడమకి తిరగండి.", extra: ["in"] },
    { en: "Americans say the t in water softly, almost like a d.", te: "అమెరికా వాళ్ళు water లో t ని మెత్తగా, దాదాపు d లాగా అంటారు.", extra: ["says"] },
    { en: "Many British people don't say the r in car.", te: "చాలామంది బ్రిటిష్ వాళ్ళు car లో r అనరు.", extra: ["doesn't"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Watch a short American or British video on YouTube. Listen for the words water and car.",
    te: "YouTube లో ఒక చిన్న అమెరికన్ లేదా బ్రిటిష్ వీడియో చూడండి. water, car అనే మాటలు ఎలా వినిపిస్తాయో గమనించండి.",
  },
  words: [
    { en: "tourist", te: "పర్యాటకులు, టూరిస్ట్" },
    { en: "car park", te: "కార్లు పార్క్ చేసే చోటు" },
    { en: "parking lot", te: "అమెరికాలో car park" },
    { en: "pronounce", te: "పలకడం, ఉచ్చరించడం" },
    { en: "American", te: "అమెరికా వాళ్ళు, అమెరికన్" },
  ],
  grammar: ["pronunciation", "can-could", "prepositions"],
  topics: ["directions", "travel", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Two sounds to listen for", te: "వినాల్సిన రెండు శబ్దాలు" },
      body: {
        en: "Americans say the t in water almost like a d. Many British people drop the r in car and park. You don't need to copy them; just understand them.",
        te: "అమెరికా వాళ్ళు water లో t ని దాదాపు d లాగా అంటారు. చాలామంది బ్రిటిష్ వాళ్ళు car, park లో r అనరు. మీరు అలా అనక్కర్లేదు, అర్థమైతే చాలు.",
      },
      bridge: {
        te: ["కొంచెం", "మంచినీళ్ళు", "ఇస్తారా?"],
        en: [
          { text: "Could", role: "action" },
          { text: "I", role: "who" },
          { text: "get", role: "action" },
          { text: "some water?", role: "what" },
        ],
      },
      examples: [
        { en: "Americans say the t in water softly, almost like a d.", te: "అమెరికా వాళ్ళు water లో t ని మెత్తగా, దాదాపు d లాగా అంటారు." },
        { en: "Many British people don't say the r in car.", te: "చాలామంది బ్రిటిష్ వాళ్ళు car లో r అనరు." },
        { en: "Could I get some water, please?", te: "కొంచెం మంచినీళ్ళు ఇస్తారా, ప్లీజ్?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What you may hear", te: "మీకు ఇలా వినిపించొచ్చు" },
      items: [
        {
          form: "water, better, city",
          useFor: { en: "An American says the middle t softly, like a quick d.", te: "అమెరికా వాళ్ళు మధ్యలో ఉన్న t ని మెత్తగా, చిన్న d లాగా అంటారు." },
          example: { en: "The weather is much better today.", te: "ఈ రోజు వాతావరణం చాలా మెరుగ్గా ఉంది." },
        },
        {
          form: "car, park, here",
          useFor: { en: "A British speaker drops the r and makes the sound before it long.", te: "బ్రిటిష్ వాళ్ళు r అనరు; దాని ముందు శబ్దాన్ని లాగి అంటారు." },
          example: { en: "How far is the car park from here?", te: "ఇక్కడి నుంచి car park ఎంత దూరం?" },
        },
        {
          form: "car park, parking lot",
          useFor: { en: "A place to leave your car: car park in Britain, parking lot in America.", te: "కారు పెట్టే చోటు: బ్రిటన్‌లో car park, అమెరికాలో parking lot." },
          example: { en: "The parking lot is behind the hotel.", te: "parking lot హోటల్ వెనకాల ఉంది." },
        },
        {
          form: "Could I get …?",
          useFor: { en: "Americans often ask for things in shops and hotels this way.", te: "అమెరికా వాళ్ళు షాపుల్లో, హోటళ్ళలో ఎక్కువగా ఇలా అడుగుతారు." },
          example: { en: "Could I get a cup of coffee, please?", te: "ఒక కప్పు కాఫీ ఇస్తారా, ప్లీజ్?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Could I get some informations, please?",
      right: "Could I get some information, please?",
      why: {
        en: "Information is never counted in English, so it never takes s.",
        te: "ఇంగ్లీష్‌లో information ని లెక్కపెట్టరు, అందుకే దానికి ఎప్పుడూ s రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Turn left in the second traffic light.",
      right: "Turn left at the second traffic light.",
      why: {
        en: "A point on the road takes at, like at the corner; in is for inside a place.",
        te: "రోడ్డు మీద ఒక చోటుకి at వస్తుంది, at the corner లాగా; in అంటే ఏదైనా లోపల.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "An American tourist asks: Is there a parking lot near here? What is she looking for?",
        te: "ఒక అమెరికన్ టూరిస్ట్ Is there a parking lot near here? అని అడిగారు. ఆవిడ దేని కోసం చూస్తున్నారు?",
      },
      options: ["A place to park a car", "A big piece of land", "A ticket counter"],
      answer: 0,
      why: {
        en: "Parking lot is the American name for a car park, a place for cars.",
        te: "అమెరికాలో car park ని parking lot అంటారు, అంటే కార్లు పెట్టే చోటు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "How ___ is the car park from here?",
      te: "ఇక్కడి నుంచి car park ఎంత దూరం?",
      options: ["far", "much far", "many"],
      answer: 0,
      why: {
        en: "To ask about distance, say How far, with no much before far.",
        te: "దూరం అడగడానికి How far అనాలి; far ముందు much రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend asks about the American tourist. Say that she comes from Texas.",
        te: "ఆ అమెరికన్ టూరిస్ట్ గురించి మీ స్నేహితులు అడుగుతున్నారు. ఆవిడ టెక్సస్ నుంచి వచ్చారని చెప్పండి.",
      },
      options: ["She comes from Texas.", "She come from Texas.", "She is come from Texas."],
      answer: 0,
      why: {
        en: "One person, like she, takes s on the verb in the present.",
        te: "ఒక్కరి గురించి (she లాగా) చెప్పేటప్పుడు, ఇప్పటి కాలంలో verb కి s వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The car park is behind hotel.",
      wrongIndex: 5,
      fix: "The car park is behind the hotel.",
      why: {
        en: "A hotel you can both see needs the before it; Telugu has no such word.",
        te: "ఇద్దరికీ తెలిసిన ఆ హోటల్ కాబట్టి ముందు the కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You are at a restaurant in London. Ask the waiter for some water.",
        te: "మీరు లండన్‌లో ఒక restaurant లో ఉన్నారు. waiter ని కొంచెం మంచినీళ్ళు అడగండి.",
      },
      expected: ["Could I get some water, please?", "Could I have some water, please?", "Some water, please."],
      options: ["Could I get some water, please?", "Water. Bring it fast.", "Could I getting some water, please?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "An American tourist looks lost. Ask her where she wants to go.",
        te: "ఒక అమెరికన్ టూరిస్ట్ దారి తప్పినట్టు కనిపిస్తున్నారు. ఎక్కడికి వెళ్ళాలని ఆవిడని అడగండి.",
      },
      expected: ["Where do you want to go?", "Can I help you? Where do you want to go?", "Where are you going?"],
      options: ["Where do you want to go?", "Where you want to go?", "Where are you want to go?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Directions near Charminar", te: "చార్మినార్ దగ్గర దారి చెప్పడం" },
    scene: {
      en: "You are near Charminar in Hyderabad. David, a tourist from America, stops you.",
      te: "మీరు హైదరాబాద్‌లో చార్మినార్ దగ్గర ఉన్నారు. అమెరికా నుంచి వచ్చిన టూరిస్ట్ డేవిడ్ గారు మిమ్మల్ని ఆపారు.",
    },
    partner: { en: "David (a tourist from America)", te: "డేవిడ్ (అమెరికా నుంచి వచ్చిన టూరిస్ట్)" },
    voice: "us-m",
    skills: [
      { id: "way", label: { en: "Giving directions", te: "దారి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Excuse me! Could you help me? I'm looking for Laad Bazaar.",
        te: "ఎక్స్‌క్యూజ్ మీ! కొంచెం సాయం చేస్తారా? నేను లాడ్ బజార్ కోసం చూస్తున్నాను.",
        hint: { en: "Say yes, and tell him it is very close.", te: "సరే అని, అది చాలా దగ్గర అని చెప్పండి." },
        replies: [
          { say: "Sure. It's very close, just two minutes from here.", good: true, skill: "way" },
          { say: "Sure. It's very close, just two minute from here.", good: false, skill: "way", fixIt: "plural" },
        ],
      },
      {
        partner: "Great! Sorry, could you tell me the way?",
        te: "సూపర్! సారీ, దారి చెప్తారా?",
        hint: { en: "Give him the way: straight on, then left at the first corner.", te: "దారి చెప్పండి: నేరుగా వెళ్ళి, మొదటి మలుపు దగ్గర ఎడమకి." },
        replies: [
          { say: "Walk straight and turn left at the first corner.", good: true, skill: "way" },
          { say: "Walk straight and turn left in the first corner.", good: false, skill: "way", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thanks! Oh, and where can I get some water? It's so hot!",
        te: "థాంక్స్! అలాగే, కొంచెం మంచినీళ్ళు ఎక్కడ దొరుకుతాయి? చాలా ఎండగా ఉంది!",
        hint: { en: "He said water. Tell him where he can buy it, near the corner.", te: "ఆయన water అన్నారు. మలుపు దగ్గర ఎక్కడ కొనుక్కోవచ్చో చెప్పండి." },
        replies: [
          { say: "The small shop at the corner sells water.", good: true, skill: "way" },
          { say: "The small shop at the corner sell water.", good: false, skill: "way", fixIt: "he-she-s" },
          {
            say: "Water? Ask somebody else.",
            good: false,
            skill: "polite",
            react: { en: "Oh. Okay, sorry to bother you.", te: "ఓ. సరే, ఇబ్బంది పెట్టినందుకు సారీ." },
          },
        ],
      },
      {
        partner: "You've been so helpful. Thank you, and have a great day!",
        te: "మీరు చాలా సాయం చేశారు. థాంక్యూ, మీ రోజు బాగా గడవాలి!",
        hint: { en: "Say goodbye, and wish him a nice time in Hyderabad.", te: "బై చెప్పి, హైదరాబాద్‌లో ఆయనకి బాగా గడవాలని చెప్పండి." },
        replies: [
          { say: "You're welcome. Enjoy your time in Hyderabad!", good: true, skill: "polite" },
          { say: "Mention not. Enjoy your time in Hyderabad!", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
