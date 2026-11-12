import type { Lesson } from "../../types";

/** Week 78, Day 1 (CURRICULUM §5): British, American and Indian words — In America, a lift is called an elevator. */
export const day: Lesson = {
  id: "lift-or-elevator-accents",
  kind: "lesson",
  title: { en: "Lift or Elevator?", te: "లిఫ్ట్ ఆ, ఎలివేటర్ ఆ?" },
  subtitle: "British, American and Indian words",
  summary: {
    en: "Learn that some everyday words change from country to country: In America, a lift is called an elevator.",
    te: "కొన్ని రోజువారీ పదాలు దేశాన్ని బట్టి మారతాయి, అవి నేర్చుకుందాం: In America, a lift is called an elevator.",
  },
  seo: {
    title: "American and British Words in English for Telugu Speakers",
    description:
      "Learn that a lift is an elevator in America and petrol is gas. Simple lessons for Telugu speakers on British, American and Indian words.",
  },
  pattern: [
    { text: "A lift", role: "who" },
    { text: "is called", role: "action" },
    { text: "an elevator", role: "what" },
    { text: "in America", role: "what" },
  ],
  core: [
    { en: "In America, a lift is called an elevator.", te: "అమెరికాలో లిఫ్ట్‌ని ఎలివేటర్ అంటారు.", extra: ["call"] },
    { en: "Americans say gas for petrol.", te: "అమెరికా వాళ్ళు పెట్రోల్‌ని gas అంటారు.", extra: ["says"] },
    { en: "In London, an apartment is called a flat.", te: "లండన్‌లో అపార్ట్‌మెంట్‌ని ఫ్లాట్ అంటారు.", extra: ["calls"] },
    { en: "Where is the elevator, please?", te: "ఎలివేటర్ ఎక్కడ ఉందండీ?", extra: ["are"] },
    { en: "We say lift in India, like the British.", te: "బ్రిటిష్ వాళ్ళ లాగే మన దేశంలో కూడా లిఫ్ట్ అంటాం.", extra: ["likes"] },
    { en: "Is there a gas station near the hotel?", te: "హోటల్ దగ్గర పెట్రోల్ బంక్ ఉందా?", extra: ["any"] },
    { en: "Could you tell me where the elevator is?", te: "ఎలివేటర్ ఎక్కడ ఉందో చెప్తారా?", extra: ["does"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of three words: lift, flat and petrol. Say the American word for each one aloud.",
    te: "lift, flat, petrol అనే మూడు పదాలు గుర్తు చేసుకోండి. ఒక్కోదానికి అమెరికా వాళ్ళు ఏమంటారో గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "elevator", te: "లిఫ్ట్, అమెరికాలో అనే పేరు" },
    { en: "flat", te: "ఫ్లాట్, అపార్ట్‌మెంట్" },
    { en: "petrol", te: "పెట్రోల్" },
    { en: "gas", te: "అమెరికాలో పెట్రోల్" },
    { en: "British", te: "బ్రిటన్ వాళ్ళు, బ్రిటిష్" },
  ],
  grammar: ["passive-voice", "articles", "present-simple"],
  topics: ["travel", "people", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "One thing, two names", te: "ఒకే వస్తువు, రెండు పేర్లు" },
      body: {
        en: "English is spoken in many countries, and some everyday words change. Americans say elevator for lift, and gas for petrol. In India, we mostly use the British words.",
        te: "ఇంగ్లీష్ చాలా దేశాల్లో మాట్లాడతారు, కొన్ని రోజువారీ పదాలు మారతాయి. అమెరికాలో lift ని elevator అని, petrol ని gas అని అంటారు. మన దేశంలో ఎక్కువగా బ్రిటిష్ పదాలే వాడతాం.",
      },
      bridge: {
        te: ["అమెరికాలో", "లిఫ్ట్‌ని", "ఎలివేటర్", "అంటారు"],
        en: [
          { text: "In America,", role: "what" },
          { text: "a lift", role: "who" },
          { text: "is called", role: "action" },
          { text: "an elevator", role: "what" },
        ],
      },
      examples: [
        { en: "In America, a lift is called an elevator.", te: "అమెరికాలో లిఫ్ట్‌ని ఎలివేటర్ అంటారు." },
        { en: "Americans say gas for petrol.", te: "అమెరికా వాళ్ళు పెట్రోల్‌ని gas అంటారు." },
        { en: "In London, an apartment is called a flat.", te: "లండన్‌లో అపార్ట్‌మెంట్‌ని ఫ్లాట్ అంటారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Indian, British or American?", te: "మన పదమా, బ్రిటిష్ పదమా, అమెరికన్ పదమా?" },
      items: [
        {
          form: "lift, elevator",
          useFor: { en: "We say lift. In America, you will hear elevator.", te: "మనం lift అంటాం. అమెరికాలో elevator అని వినిపిస్తుంది." },
          example: { en: "Where is the elevator, please?", te: "ఎలివేటర్ ఎక్కడ ఉందండీ?" },
        },
        {
          form: "flat, apartment",
          useFor: { en: "Both are fine in India. The British say flat; Americans say apartment.", te: "మన దేశంలో రెండూ వాడతాం. బ్రిటిష్ వాళ్ళు flat అంటారు; అమెరికా వాళ్ళు apartment అంటారు." },
          example: { en: "My flat is on the third floor.", te: "నా ఫ్లాట్ మూడో అంతస్తులో ఉంది." },
        },
        {
          form: "petrol, gas",
          useFor: { en: "In America, gas means petrol, and a petrol pump is a gas station.", te: "అమెరికాలో gas అంటే పెట్రోల్; పెట్రోల్ బంక్‌ని gas station అంటారు." },
          example: { en: "Is there a gas station near the hotel?", te: "హోటల్ దగ్గర పెట్రోల్ బంక్ ఉందా?" },
        },
        {
          form: "an accent",
          useFor: { en: "The way people from one place say words.", te: "ఒక ప్రాంతం వాళ్ళు పదాలు పలికే తీరు." },
          example: { en: "He speaks English with an American accent.", te: "ఆయన అమెరికన్ యాసలో ఇంగ్లీష్ మాట్లాడతారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Excuse me, where is elevator?",
      right: "Excuse me, where is the elevator?",
      why: {
        en: "You ask about the one lift in the building, so English needs the; Telugu has no such word.",
        te: "బిల్డింగ్‌లో ఉన్న ఆ ఒక్క లిఫ్ట్ గురించి అడుగుతున్నారు, అందుకే the కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "My friend in America say elevator.",
      right: "My friend in America says elevator.",
      why: {
        en: "One friend is like he or she, so the verb takes s.",
        te: "ఒక్క స్నేహితుడు అంటే he లాంటిది, అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You are in a hotel in New York. Ask the man at the desk where the lift is.",
        te: "మీరు న్యూయార్క్‌లో ఒక హోటల్‌లో ఉన్నారు. లిఫ్ట్ ఎక్కడుందో డెస్క్ దగ్గర ఉన్న ఆయన్ని అడగండి.",
      },
      options: ["Excuse me, where is the elevator?", "Excuse me, where the elevator is?", "Excuse me, elevator is where?"],
      answer: 0,
      why: {
        en: "In a where question, is comes before the thing you ask about; Telugu puts ఉంది at the end.",
        te: "where ప్రశ్నలో is ముందు వస్తుంది, తర్వాత ఆ వస్తువు; తెలుగులో 'ఉంది' చివర వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "In America, a lift ___ an elevator.",
      te: "అమెరికాలో లిఫ్ట్‌ని ఎలివేటర్ అంటారు.",
      options: ["is called", "is call", "calls"],
      answer: 0,
      why: {
        en: "To give the name of a thing, say is called, with -ed on call.",
        te: "ఒక వస్తువు పేరు చెప్పడానికి is called అనాలి; call కి -ed తప్పకుండా వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Hotel Notice",
      lines: ["Elevator out of order", "Please use the stairs.", "We are sorry for the trouble."],
      prompt: {
        en: "You see this sign in a hotel in America. What does it tell you?",
        te: "అమెరికాలో ఒక హోటల్‌లో ఈ బోర్డు కనిపించింది. అది మీకు ఏం చెప్తోంది?",
      },
      options: ["The lift is not working.", "The lift is on the top floor.", "The stairs are closed."],
      answer: 0,
      why: {
        en: "Elevator is the American word for lift, and out of order means it does not work.",
        te: "అమెరికాలో lift ని elevator అంటారు; out of order అంటే పనిచేయట్లేదు అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "My cousin stayed in a flat for two week in London.",
      wrongIndex: 8,
      fix: "My cousin stayed in a flat for two weeks in London.",
      why: {
        en: "After two or more, the word takes s; Telugu also says వారాలు, not వారం.",
        te: "రెండు, మూడు తర్వాత పదానికి s చేర్చాలి; తెలుగులో కూడా వారం కాదు, వారాలు అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You are at a hotel in America. Politely ask the man at the desk where the lift is.",
        te: "మీరు అమెరికాలో ఒక హోటల్‌లో ఉన్నారు. లిఫ్ట్ ఎక్కడుందో డెస్క్ దగ్గర ఉన్న ఆయన్ని మర్యాదగా అడగండి.",
      },
      expected: ["Excuse me, where is the elevator?", "Where is the elevator, please?", "Could you tell me where the elevator is?", "Excuse me, where is the lift?"],
      options: ["Excuse me, where is the elevator?", "Excuse me, where the elevator is?", "Elevator where? Tell me."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend in Guntur asks what Americans call petrol. Tell her.",
        te: "అమెరికా వాళ్ళు పెట్రోల్‌ని ఏమంటారని గుంటూరులో ఒక స్నేహితురాలు అడుగుతున్నారు. ఆవిడకి చెప్పండి.",
      },
      expected: ["They call it gas.", "Americans say gas.", "In America, petrol is called gas.", "They say gas for petrol."],
      options: ["They call it gas.", "They calls it gas.", "It is calling gas."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The elevator?", te: "ఎలివేటర్ ఆ?" },
    scene: {
      en: "You are sitting in a hotel lobby in Hyderabad. Grace, a visitor from America, comes up to you.",
      te: "మీరు హైదరాబాద్‌లో ఒక హోటల్ లాబీలో కూర్చున్నారు. అమెరికా నుంచి వచ్చిన గ్రేస్ గారు మీ దగ్గరికి వచ్చారు.",
    },
    partner: { en: "Grace (a visitor from America)", te: "గ్రేస్ (అమెరికా నుంచి వచ్చిన అతిథి)" },
    voice: "us-f",
    skills: [
      { id: "words", label: { en: "American and Indian words", te: "అమెరికన్ పదాలు, మన పదాలు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi there! Sorry to bother you. Do you know where the elevator is?",
        te: "హాయ్! ఇబ్బంది పెడుతున్నందుకు సారీ. ఎలివేటర్ ఎక్కడుందో మీకు తెలుసా?",
        hint: { en: "Check politely that she means the lift.", te: "ఆవిడ అంటున్నది లిఫ్ట్ గురించేనా అని మర్యాదగా సరిచూసుకోండి." },
        replies: [
          { say: "Sorry, do you mean the lift?", good: true, skill: "words" },
          { say: "The elevator? You mean the lift, right?", good: true, skill: "words" },
          {
            say: "What? Speak properly. I can't understand you.",
            good: false,
            skill: "polite",
            react: { en: "Oh, I'm sorry! I meant the lift.", te: "అయ్యో, సారీ! నేను లిఫ్ట్ గురించి అడిగాను." },
          },
        ],
      },
      {
        partner: "Yes, the lift! Sorry, we say elevator back home.",
        te: "అవును, లిఫ్ట్! సారీ, మా దేశంలో ఎలివేటర్ అంటాం.",
        hint: { en: "Tell her it is near the reception, on the left.", te: "అది రిసెప్షన్ దగ్గర, ఎడమ వైపు ఉందని చెప్పండి." },
        replies: [
          { say: "No problem. It's near the reception, on the left.", good: true, skill: "words" },
          { say: "No problem. It's near the reception, in the left.", good: false, skill: "words", fixIt: "preposition" },
        ],
      },
      {
        partner: "Great. And is there a gas station near here? My rental car needs gas.",
        te: "సూపర్. ఇక్కడ దగ్గర్లో gas station ఉందా? నా అద్దె కారులో పెట్రోల్ పోయించాలి.",
        hint: { en: "Say yes, there is one on the main road.", te: "ఉంది, మెయిన్ రోడ్ మీద ఉందని చెప్పండి." },
        replies: [
          { say: "Yes, there's a petrol station on the main road.", good: true, skill: "words" },
          { say: "Yes, there's a gas station on the main road.", good: true, skill: "words" },
          { say: "Yes, there is petrol station on main road.", good: false, skill: "words", fixIt: "article" },
        ],
      },
      {
        partner: "Thank you so much! You've been really helpful.",
        te: "చాలా థాంక్స్! మీరు బాగా సాయం చేశారు.",
        hint: { en: "Reply kindly, and wish her a good stay.", te: "మర్యాదగా జవాబిచ్చి, ఆవిడ బస బాగా జరగాలని చెప్పండి." },
        replies: [
          { say: "You're welcome. Enjoy your stay in Hyderabad!", good: true, skill: "polite" },
          { say: "Welcome. Enjoy your stay in Hyderabad!", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
