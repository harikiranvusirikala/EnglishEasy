import type { Lesson } from "../../types";

/** Week 67, Day 4 (CURRICULUM §5): Fix-It Clinic — all ten Fix-it errors (§2), checked again in Weeks 55–66 sentences. */
export const day: Lesson = {
  id: "fix-it-clinic-4",
  kind: "lesson",
  title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" },
  subtitle: "the ten mistakes in everyday jobs",
  summary: {
    en: "Fix the ten mistakes Telugu speakers make most, in sentences from trips, offices and guests: where the lift is, is made, turn on and more.",
    te: "తెలుగువాళ్ళు ఎక్కువగా చేసే పది తప్పులు, ప్రయాణాలు, ఆఫీసులు, అతిథుల వాక్యాల్లో సరిచేసుకుందాం: where the lift is, is made, turn on, ఇంకా మరికొన్ని.",
  },
  seo: {
    title: "Fixing Common English Mistakes for Telugu Speakers",
    description:
      "Say Can you tell me where the lift is? and Please turn on the light. A lesson for Telugu speakers on the ten most common mistakes.",
  },
  pattern: [
    { text: "Can you tell me", role: "action" },
    { text: "where", role: "what" },
    { text: "the lift", role: "who" },
    { text: "is?", role: "action" },
  ],
  core: [
    { en: "Can you tell me where the lift is?", te: "లిఫ్ట్ ఎక్కడ ఉందో చెప్తారా?", extra: ["does"] },
    { en: "This pressure cooker is made in India.", te: "ఈ ప్రెషర్ కుక్కర్ ఇండియాలో తయారైంది.", extra: ["make"] },
    { en: "Please turn on the light in the hall.", te: "హాల్లో లైట్ వేయండి.", extra: ["open"] },
    { en: "My cousin works at the bank near the bus stand.", te: "మా కజిన్ బస్ స్టాండ్ దగ్గర ఉన్న బ్యాంక్‌లో పని చేస్తారు.", extra: ["work"] },
    { en: "I have known Mohan for twenty years.", te: "మోహన్ గారు నాకు ఇరవై ఏళ్ళుగా తెలుసు.", extra: ["since"] },
    { en: "You didn't get the letter? No, I didn't.", te: "మీకు ఉత్తరం రాలేదా? లేదు, రాలేదు." },
    { en: "We reached Srisailam at six in the evening.", te: "మేము సాయంత్రం ఆరింటికి శ్రీశైలం చేరుకున్నాం.", extra: ["to"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Before your next call to an office, go through your first two lines aloud. Check the small words: is, the, a, to.",
    te: "ఈసారి ఏదైనా ఆఫీసుకి ఫోన్ చేసే ముందు, మొదటి రెండు లైన్లు ఒకసారి గట్టిగా చెప్పి చూసుకోండి. చిన్న పదాలు సరిచూసుకోండి: is, the, a, to.",
  },
  words: [
    { en: "script", te: "ముందే రాసుకున్న మాటలు" },
    { en: "grammar", te: "వ్యాకరణం, grammar" },
    { en: "small words", te: "a, the, is లాంటి చిన్న పదాలు" },
    { en: "clearly", te: "స్పష్టంగా" },
    { en: "go through", te: "ఒకసారి మొత్తం చూసుకోవడం" },
  ],
  grammar: ["indirect-tag-questions", "passive-voice", "phrasal-verbs", "present-simple", "present-perfect", "prepositions"],
  topics: ["offices", "phone", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ten mistakes, one last check", te: "పది తప్పులు, చివరిసారి చూసుకుందాం" },
      body: {
        en: "Trips, letters and guests gave you new patterns, and the old grammar mistakes hide inside them. Before you speak, check the small parts: where the lift is, is made, an s, a or the.",
        te: "ప్రయాణాలు, ఉత్తరాలు, అతిథుల వారాల్లో కొత్త pattern లు వచ్చాయి; పాత grammar తప్పులు వాటిలోనే దాక్కుంటాయి. మాట్లాడే ముందు చిన్న భాగాలు చూసుకోండి: where the lift is, is made, s, a / the.",
      },
      bridge: {
        te: ["లిఫ్ట్", "ఎక్కడ", "ఉందో", "చెప్తారా?"],
        en: [
          { text: "Can you tell me", role: "action" },
          { text: "where", role: "what" },
          { text: "the lift", role: "who" },
          { text: "is?", role: "action" },
        ],
      },
      examples: [
        { en: "Can you tell me where the lift is?", te: "లిఫ్ట్ ఎక్కడ ఉందో చెప్తారా?" },
        { en: "This pressure cooker is made in India.", te: "ఈ ప్రెషర్ కుక్కర్ ఇండియాలో తయారైంది." },
        { en: "Please turn on the light in the hall.", te: "హాల్లో లైట్ వేయండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Check these before you speak", te: "మాట్లాడే ముందు ఇవి చూసుకోండి" },
      items: [
        {
          form: "Do you know when + normal order",
          useFor: { en: "A polite question; the verb goes after who or what.", te: "మర్యాద ప్రశ్న; verb తర్వాతే వస్తుంది." },
          example: { en: "Do you know when the bank opens?", te: "బ్యాంక్ ఎప్పుడు తెరుస్తారో మీకు తెలుసా?" },
        },
        {
          form: "is made, are woven",
          useFor: { en: "Where something comes from; never drop is or are.", te: "ఏది ఎక్కడి నుంచి వస్తుందో; is / are వదలకూడదు." },
          example: { en: "Pochampally sarees are woven by hand.", te: "పోచంపల్లి చీరలు చేత్తో నేస్తారు." },
        },
        {
          form: "have lived, have known + for",
          useFor: { en: "It started long ago and is still true.", te: "చాలా కాలం క్రితం మొదలై, ఇప్పటికీ నిజమైనది." },
          example: { en: "I have lived in Warangal for thirty years.", te: "నేను ముప్పై ఏళ్ళుగా వరంగల్‌లో ఉంటున్నాను." },
        },
        {
          form: "No, I didn't.",
          useFor: { en: "Answering You didn't …? when you did not.", te: "'You didn't …?' అని అడిగితే, మీరు చేయకపోతే." },
          example: { en: "You didn't get the letter? No, I didn't.", te: "మీకు ఉత్తరం రాలేదా? లేదు, రాలేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Can you tell me where is the lift?",
      right: "Can you tell me where the lift is?",
      why: {
        en: "After Can you tell me, keep the order of a normal sentence, so is moves to the end.",
        te: "Can you tell me తర్వాత మామూలు వాక్యం వరుసే; అందుకే is చివరికి వెళ్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please open the light. It's dark here.",
      right: "Please turn on the light. It's dark here.",
      why: {
        en: "Lights and fans are turned on; open is only for doors, windows and boxes.",
        te: "లైట్, ఫ్యాన్ కి turn on అంటాం; open అనేది తలుపులు, కిటికీలు, పెట్టెలకి మాత్రమే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A visitor from Chennai asks about your pressure cooker. Say it comes from an Indian factory.",
        te: "చెన్నై నుంచి వచ్చిన అతిథి మీ ప్రెషర్ కుక్కర్ గురించి అడుగుతున్నారు. అది ఇండియాలోనే తయారైందని చెప్పండి.",
      },
      options: ["It is made in India.", "It made in India.", "It is make in India."],
      answer: 0,
      why: {
        en: "English needs is before made; Telugu తయారైంది has no separate word for it, so we drop it.",
        te: "ఇంగ్లీష్‌లో made ముందు is తప్పనిసరి; 'తయారైంది' లో విడిగా is లాంటి పదం ఉండదు, అందుకే వదిలేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Please have a few more ___. They're still hot.",
      te: "ఇంకొన్ని చపాతీలు తీసుకోండి. ఇంకా వేడిగానే ఉన్నాయి.",
      options: ["chapatis", "chapati", "rice"],
      answer: 0,
      why: {
        en: "A few goes with things you count, so chapati takes an s; rice is never counted.",
        te: "a few లెక్కపెట్టేవాటితో వస్తుంది, అందుకే chapati కి s; rice ని లెక్కపెట్టం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell a new neighbour about your friend Kumar: he drives an auto near the station.",
        te: "కొత్త పొరుగువారికి మీ స్నేహితుడు కుమార్ గారి గురించి చెప్పండి: ఆయన స్టేషన్ దగ్గర ఆటో నడుపుతారు.",
      },
      options: ["Kumar drives an auto near the station.", "Kumar drive an auto near the station.", "Kumar is driving an auto near the station daily."],
      answer: 0,
      why: {
        en: "With one person, like Kumar, the verb takes s, just as Telugu changes నడుపు to నడుపుతారు.",
        te: "ఒక్క మనిషి (కుమార్) అయితే verb కి s వస్తుంది; తెలుగులో కూడా నడుపు, నడుపుతారు గా మారుతుంది కదా.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "I waited for a hour at the gas agency.",
      wrongIndex: 3,
      fix: "I waited for an hour at the gas agency.",
      why: {
        en: "The h in hour is silent, so the word starts with a vowel sound and takes an.",
        te: "hour లో h పలకదు; పదం అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే an వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You didn't go to Srisailam this year? You did not go.",
        te: "'You didn't go to Srisailam this year?' అని స్నేహితులు అడుగుతున్నారు. మీరు వెళ్ళలేదు.",
      },
      expected: ["No, I didn't. Maybe next year.", "No, I didn't.", "No, I couldn't go this year."],
      options: ["No, I didn't. Maybe next year.", "Yes, I didn't. Maybe next year.", "No, I didn't went. Maybe next year."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A new neighbour asks how long you have known Mohan. You met him twenty years ago.",
        te: "మోహన్ గారు మీకు ఎన్నాళ్ళుగా తెలుసని కొత్త పొరుగువారు అడుగుతున్నారు. మీరు ఆయన్ని ఇరవై ఏళ్ళ క్రితం కలిశారు.",
      },
      expected: ["I have known him for twenty years.", "I've known Mohan for twenty years.", "For twenty years."],
      options: ["I have known him for twenty years.", "I know him since twenty years.", "I am knowing him for twenty years."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Getting ready for a call", te: "ఫోన్ కాల్‌కి సిద్ధం" },
    scene: {
      en: "Your friend Radha will call the electricity office about a new meter. She reads her script to you first. Listen carefully.",
      te: "మీ స్నేహితురాలు రాధ గారు కొత్త మీటర్ కోసం కరెంట్ ఆఫీసుకి ఫోన్ చేయబోతున్నారు. ముందుగా రాసుకున్న మాటలు మీకు చదివి వినిపిస్తున్నారు. జాగ్రత్తగా వినండి.",
    },
    partner: { en: "Radha (a friend)", te: "రాధ (స్నేహితురాలు)" },
    skills: [
      { id: "fix", label: { en: "Correcting kindly", te: "మర్యాదగా సరిచేయడం" } },
      { id: "kind", label: { en: "Encouraging", te: "ధైర్యం చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Thanks for helping! First line: Good morning. Myself Radha, from Gandhi Nagar.",
        te: "సాయం చేస్తున్నందుకు థాంక్స్! మొదటి లైన్: 'Good morning. Myself Radha, from Gandhi Nagar.'",
        hint: { en: "Correct her kindly: the way she gives her name is not English.", te: "మర్యాదగా సరిచేయండి: ఆవిడ పేరు చెప్పిన తీరు ఇంగ్లీష్ కాదు." },
        replies: [
          { say: "Good start! But on the phone, say: This is Radha, from Gandhi Nagar.", good: true, skill: "fix" },
          { say: "Perfect. Myself Radha sounds very polite.", good: false, skill: "fix", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Next: I am wanting a new meter for my shop.",
        te: "తర్వాత: 'I am wanting a new meter for my shop.'",
        hint: { en: "Correct it kindly: want never takes -ing.", te: "మర్యాదగా సరిచేయండి: want కి -ing రాదు." },
        replies: [
          { say: "Good, but say: I want a new meter for my shop.", good: true, skill: "fix" },
          { say: "Or say: I'd like a new meter for my shop. It's more polite.", good: true, skill: "fix" },
          { say: "That's correct. I am wanting is fine.", good: false, skill: "fix", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Then: I also want to discuss about my last bill.",
        te: "తర్వాత: 'I also want to discuss about my last bill.'",
        hint: { en: "Tell her one small word is extra after discuss.", te: "discuss తర్వాత ఒక చిన్న పదం ఎక్కువైందని చెప్పండి." },
        replies: [
          { say: "Almost. Drop about: I also want to discuss my last bill.", good: true, skill: "fix" },
          { say: "Very good. Every word is correct.", good: false, skill: "fix", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thank you! Do you think I'm ready to call now?",
        te: "థాంక్యూ! ఇప్పుడు ఫోన్ చేయడానికి సిద్ధంగా ఉన్నానంటారా?",
        hint: { en: "Say yes, and encourage her kindly.", te: "అవునని చెప్పి, ఆవిడకి ధైర్యం చెప్పండి." },
        replies: [
          { say: "Yes! You speak clearly and politely. You'll be fine.", good: true, skill: "kind" },
          {
            say: "Maybe. Your English is still very weak.",
            good: false,
            skill: "kind",
            react: { en: "Oh. Then let me go through it once more.", te: "అయ్యో. అయితే ఇంకోసారి మొత్తం చూసుకుంటాను." },
          },
        ],
      },
    ],
  },
};
