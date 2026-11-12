import type { Lesson } from "../../types";

/** Week 65, Day 4 (CURRICULUM §5): offering real help after bad news — Please let me know if you need anything. I can bring food over this evening. */
export const day: Lesson = {
  id: "offering-help-after-bad-news",
  kind: "lesson",
  title: { en: "Is There Anything I Can Do?", te: "నా వల్ల ఏమైనా సహాయం కావాలా?" },
  subtitle: "Please let me know if …; I can …",
  summary: {
    en: "Learn to offer real help after bad news: Please let me know if you need anything. I can bring food over this evening.",
    te: "చెడ్డ వార్త విన్నప్పుడు నిజమైన సహాయం చేస్తానని చెప్పడం నేర్చుకుందాం: Please let me know if you need anything. I can bring food over this evening.",
  },
  seo: {
    title: "Offering Help in English for Telugu Speakers",
    description:
      "Say Please let me know if you need anything and I can bring food over this evening. Simple lessons for Telugu speakers on helping a friend.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "can bring", role: "action" },
    { text: "food over", role: "what" },
    { text: "this evening", role: "when" },
  ],
  core: [
    { en: "Please let me know if you need anything.", te: "మీకు ఏమైనా కావాలంటే నాకు చెప్పండి.", extra: ["needs"] },
    { en: "I can bring food over this evening.", te: "ఈ సాయంత్రం నేను భోజనం తీసుకొస్తాను.", extra: ["bringing"] },
    { en: "Is there anything I can do?", te: "నా వల్ల ఏమైనా సహాయం కావాలా?", extra: ["Are"] },
    { en: "Call me anytime, even at night.", te: "రాత్రయినా సరే, ఎప్పుడైనా నాకు ఫోన్ చేయండి.", extra: ["to"] },
    { en: "I can pick up your relatives from the station.", te: "మీ బంధువుల్ని స్టేషన్ నుంచి నేను తీసుకొస్తాను.", extra: ["picking"] },
    { en: "Take your time. We are all with you.", te: "తొందరేమీ లేదు. మేమంతా మీకు తోడుగా ఉన్నాం.", extra: ["is"] },
    { en: "Shall I drop by tomorrow morning?", te: "రేపు పొద్దున ఒకసారి వచ్చి వెళ్ళనా?", extra: ["Will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a friend or neighbour who is having a hard time. Send a short message, or say it aloud: Please let me know if you need anything.",
    te: "కష్టంలో ఉన్న ఒక స్నేహితుడిని గానీ పక్కింటివారిని గానీ గుర్తు చేసుకోండి. చిన్న మెసేజ్ పంపండి, లేదా గట్టిగా చెప్పండి: Please let me know if you need anything.",
  },
  words: [
    { en: "let me know", te: "నాకు చెప్పండి, తెలియజేయండి" },
    { en: "drop by", te: "ఒకసారి వచ్చి వెళ్ళడం" },
    { en: "support", te: "అండగా ఉండటం, తోడు" },
    { en: "hesitate", te: "సంకోచించడం, మొహమాటపడటం" },
    { en: "take your time", te: "తొందరేమీ లేదు, నిదానంగా చేయండి" },
  ],
  grammar: ["can-could", "conditionals", "will"],
  topics: ["neighbours", "feelings", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Offering real help", te: "నిజమైన సహాయం చెప్పడం" },
      body: {
        en: "After bad news, offer help in two steps. First say Please let me know if you need anything. Then offer one real thing with I can.",
        te: "చెడ్డ వార్త తర్వాత రెండు అడుగుల్లో సహాయం చెప్పండి. ముందు Please let me know if you need anything అనండి. తర్వాత I can తో ఒక పని చేస్తానని చెప్పండి.",
      },
      bridge: {
        te: ["ఈ సాయంత్రం", "నేను", "భోజనం", "తీసుకొస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "can bring", role: "action" },
          { text: "food over", role: "what" },
          { text: "this evening", role: "when" },
        ],
      },
      examples: [
        { en: "Please let me know if you need anything.", te: "మీకు ఏమైనా కావాలంటే నాకు చెప్పండి." },
        { en: "I can bring food over this evening.", te: "ఈ సాయంత్రం నేను భోజనం తీసుకొస్తాను." },
        { en: "Is there anything I can do?", te: "నా వల్ల ఏమైనా సహాయం కావాలా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ask, offer or reassure", te: "అడగడం, సహాయం చెప్పడం, ధైర్యం చెప్పడం" },
      items: [
        {
          form: "Is there anything I can do?",
          useFor: { en: "Ask how you can help.", te: "ఏ విధంగా సహాయం చేయొచ్చో అడగడానికి." },
          example: { en: "Is there anything I can do?", te: "నా వల్ల ఏమైనా సహాయం కావాలా?" },
        },
        {
          form: "I can …",
          useFor: { en: "Offer one clear thing you will do.", te: "మీరు చేసే ఒక పనిని స్పష్టంగా చెప్పడానికి." },
          example: { en: "I can bring food over this evening.", te: "ఈ సాయంత్రం నేను భోజనం తీసుకొస్తాను." },
        },
        {
          form: "Shall I …?",
          useFor: { en: "Ask if they want your help with one thing.", te: "ఒక పనిలో మీ సహాయం కావాలా అని అడగడానికి." },
          example: { en: "Shall I drop by tomorrow morning?", te: "రేపు పొద్దున ఒకసారి వచ్చి వెళ్ళనా?" },
        },
        {
          form: "Please don't hesitate to …",
          useFor: { en: "Tell them to call you without feeling shy.", te: "మొహమాటపడకుండా ఫోన్ చేయమని చెప్పడానికి." },
          example: { en: "Please don't hesitate to call me.", te: "మొహమాటపడకుండా నాకు ఫోన్ చేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "If you need anything, I will do the needful.",
      right: "If you need anything, I will take care of it.",
      why: {
        en: "Do the needful sounds like an old office letter; say in plain words what you will do.",
        te: "do the needful పాత ఆఫీసు ఉత్తరంలా వినిపిస్తుంది; ఏం చేస్తారో మామూలు మాటల్లో చెప్పండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "She is staying with her sister since Monday.",
      right: "She has been staying with her sister since Monday.",
      why: {
        en: "From a past day until now, English needs has been with -ing; Telugu uses the present.",
        te: "గతంలో ఒక రోజు నుంచి ఇప్పటిదాకా సాగుతుంటే has been + -ing కావాలి; తెలుగులో present తో అంటాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your friend Jyothi's aunt has passed away. Ask how you can help.",
        te: "మీ స్నేహితురాలు జ్యోతి గారి అత్తయ్య గారు కన్నుమూశారు. మీ వల్ల ఏమైనా సహాయం కావాలా అని అడగండి.",
      },
      options: ["Is there anything I can do?", "There is anything I can do?", "Is there anything I can doing?"],
      answer: 0,
      why: {
        en: "A yes or no question starts with is; Telugu keeps the same order, but English moves is first.",
        te: "అవునా కాదా ప్రశ్న is తో మొదలవుతుంది; తెలుగులో వరుస మారదు, ఇంగ్లీష్‌లో is ముందుకి వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Please let me know if Jyothi ___ anything.",
      te: "జ్యోతి గారికి ఏమైనా కావాలంటే నాకు చెప్పండి.",
      options: ["needs", "need", "needing"],
      answer: 0,
      why: {
        en: "Even after if, one person like Jyothi takes s on the verb.",
        te: "if తర్వాత కూడా, ఒక్కరైతే (జ్యోతి గారు లాగా) verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Sai Nagar Colony group",
      lines: [
        "Sad news: Mr Ramana of flat 12 passed away this morning.",
        "The funeral is at 4 pm today.",
        "His sister is coming from Nellore tonight.",
        "Please support the family in any way you can.",
        "Kumar is arranging food for them for three days.",
      ],
      prompt: { en: "Who is arranging food for the family?", te: "ఆ కుటుంబానికి భోజనం ఎవరు ఏర్పాటు చేస్తున్నారు?" },
      options: ["Kumar", "Mr Ramana's sister", "Everyone in flat 12"],
      answer: 0,
      why: {
        en: "The last line names the neighbour who is taking care of meals for three days.",
        te: "మూడు రోజుల భోజనం ఏ పొరుగువారు చూసుకుంటున్నారో చివరి లైన్‌లో ఉంది.",
      },
      say: "Kumar is arranging food for them for three days.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Please call to me anytime, even at night.",
      wrongIndex: 2,
      fix: "Please call me anytime, even at night.",
      why: {
        en: "Call takes no to before the person; Telugu నాకు makes us add one.",
        te: "call తర్వాత మనిషి ముందు to రాదు; తెలుగులో 'నాకు' అనడం వల్ల to చేరుస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour's mother is in hospital. Offer to bring dinner for the family tonight.",
        te: "పక్కింటివారి అమ్మగారు ఆసుపత్రిలో ఉన్నారు. ఈ రాత్రి ఆ కుటుంబానికి భోజనం తెస్తానని చెప్పండి.",
      },
      expected: ["I can bring dinner over tonight.", "I can bring dinner for you tonight.", "Shall I bring dinner tonight?"],
      options: ["I can bring dinner over tonight.", "I can bringing dinner over tonight.", "I can to bring dinner over tonight."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell your friend not to feel shy: she can call you at any time.",
        te: "మొహమాటపడొద్దని స్నేహితురాలికి చెప్పండి: ఎప్పుడైనా మీకు ఫోన్ చేయొచ్చు.",
      },
      expected: ["Please don't hesitate to call me.", "Call me anytime.", "Please call me anytime, even at night."],
      options: ["Please don't hesitate to call me.", "Please don't hesitate to call to me.", "Please don't hesitate for calling me."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A friend in need", te: "కష్టంలో ఉన్న స్నేహితురాలు" },
    scene: {
      en: "Your friend Jyothi's aunt passed away in Kurnool. Jyothi has to travel there tonight. You call her.",
      te: "మీ స్నేహితురాలు జ్యోతి గారి అత్తయ్య గారు కర్నూలులో కన్నుమూశారు. జ్యోతి గారు ఈ రాత్రే అక్కడికి వెళ్ళాలి. మీరు ఆవిడకి ఫోన్ చేశారు.",
    },
    partner: { en: "Jyothi (your friend)", te: "జ్యోతి (మీ స్నేహితురాలు)" },
    skills: [
      { id: "help", label: { en: "Offering help", te: "సహాయం చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello. Did you hear the news about my aunt?",
        te: "హలో. మా అత్తయ్య గారి గురించి విన్నారా?",
        hint: { en: "Say you heard, and say how sorry you are.", te: "విన్నానని చెప్పి, ఎంత బాధగా ఉందో చెప్పండి." },
        replies: [
          { say: "Yes, I heard. I'm so sorry for your loss.", good: true, skill: "polite" },
          { say: "Yes, I heard. I so sorry for your loss.", good: false, skill: "polite", fixIt: "be" },
        ],
      },
      {
        partner: "Thank you. I'm leaving for Kurnool tonight.",
        te: "థ్యాంక్స్. ఈ రాత్రికే కర్నూలు బయలుదేరుతున్నాను.",
        hint: { en: "Ask if there is any way you can help.", te: "మీ వల్ల ఏమైనా సహాయం కావాలా అని అడగండి." },
        replies: [
          { say: "Is there anything I can do?", good: true, skill: "help" },
          { say: "Please let me know if you need anything.", good: true, skill: "help" },
          {
            say: "Oh, Kurnool! Bring me some sweets from there.",
            good: false,
            skill: "polite",
            react: { en: "Oh. I'm not going there for fun.", te: "అయ్యో. నేను సరదాకి వెళ్ళట్లేదు కదండీ." },
          },
        ],
      },
      {
        partner: "Can you water my plants while I'm away?",
        te: "నేను లేనప్పుడు మా మొక్కలకి నీళ్ళు పోస్తారా?",
        hint: { en: "Say yes, and offer to drop her at the bus stand too.", te: "సరే అని, ఆవిడని బస్ స్టాండ్ దగ్గర కూడా దింపుతానని చెప్పండి." },
        replies: [
          { say: "Of course. I can drop you at the bus stand too.", good: true, skill: "help" },
          { say: "Of course. I can dropping you at the bus stand too.", good: false, skill: "help" },
        ],
      },
      {
        partner: "Thank you so much. You're a true friend.",
        te: "చాలా థ్యాంక్స్. మీరు నిజమైన స్నేహితులు.",
        hint: { en: "Tell her there is no hurry, and that she can call you anytime.", te: "తొందరేమీ లేదని, ఎప్పుడైనా మీకు ఫోన్ చేయొచ్చని చెప్పండి." },
        replies: [
          { say: "Take your time. Call me anytime.", good: true, skill: "polite" },
          { say: "Take your time. Call to me anytime.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
