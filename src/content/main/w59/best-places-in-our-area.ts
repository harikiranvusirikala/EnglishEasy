import type { Lesson } from "../../types";

/** Week 59, Day 5 (CURRICULUM §5): relative clauses with superlatives — The best saree shop is the one that opened last year. */
export const day: Lesson = {
  id: "best-places-in-our-area",
  kind: "lesson",
  title: { en: "The Best Places in Our Area", te: "మా ఏరియాలో మంచి చోట్లు" },
  subtitle: "the best … is the one that …",
  summary: {
    en: "Learn to tell a newcomer about the best places nearby: The best saree shop is the one that opened last year.",
    te: "కొత్తగా వచ్చినవారికి దగ్గర్లో ఉన్న మంచి చోట్ల గురించి చెప్పడం నేర్చుకుందాం: The best saree shop is the one that opened last year.",
  },
  seo: {
    title: "The Best Places Nearby in English for Telugu Speakers",
    description:
      "Say The best saree shop is the one that opened last year. Simple lessons for Telugu speakers on recommending the best places nearby.",
  },
  pattern: [
    { text: "The best saree shop", role: "who" },
    { text: "is", role: "action" },
    { text: "the one that opened", role: "what" },
    { text: "last year", role: "when" },
  ],
  core: [
    { en: "The best saree shop is the one that opened last year.", te: "అన్నిటికంటే మంచి చీరల షాపు పోయిన సంవత్సరం తెరిచిందే.", extra: ["who"] },
    { en: "Venkat's is the place where everyone buys sweets.", te: "అందరూ స్వీట్లు కొనేది వెంకట్ గారి షాపులోనే.", extra: ["buy"] },
    { en: "This is the cheapest shop that sells fresh vegetables.", te: "తాజా కూరగాయలు అమ్మే షాపుల్లో ఇదే అన్నిటికంటే చవక.", extra: ["sell"] },
    { en: "It's the best tiffin centre that I know.", te: "నాకు తెలిసిన వాటిలో ఇదే అన్నిటికంటే మంచి టిఫిన్ సెంటర్.", extra: ["knowing"] },
    { en: "The most famous temple in our area is the one near the lake.", te: "మా ఏరియాలో అన్నిటికంటే ఫేమస్ గుడి చెరువు దగ్గర ఉన్నదే.", extra: ["more"] },
    { en: "The friendliest shopkeeper is the man whose kirana shop is on our lane.", te: "అందరికంటే స్నేహంగా ఉండే షాపువారు మా లేన్‌లో కిరాణా షాపున్న ఆయనే.", extra: ["who"] },
    { en: "The oldest building here is the one which was built in nineteen twenty.", te: "ఇక్కడ అన్నిటికంటే పాత బిల్డింగ్ 1920 లో కట్టినదే.", extra: ["build"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Name the best shop near your home for one thing, and say why: The best … is the one that …",
    te: "మీ ఇంటి దగ్గర ఏదో ఒక వస్తువుకి అన్నిటికంటే మంచి షాపు ఏదో, ఎందుకో చెప్పండి: The best … is the one that …",
  },
  words: [
    { en: "tenant", te: "అద్దెకి ఉండేవారు" },
    { en: "bakery", te: "బేకరీ" },
    { en: "supermarket", te: "సూపర్ మార్కెట్" },
    { en: "sweet shop", te: "స్వీట్ షాపు, మిఠాయి కొట్టు" },
    { en: "flour mill", te: "పిండి మర" },
  ],
  grammar: ["relative-clauses", "comparatives-superlatives", "articles"],
  topics: ["shopping", "neighbours", "directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "the best … is the one that …", te: "అన్నిటికంటే మంచిది: the one that" },
      body: {
        en: "To name the best place, say the best, then the one that or the place where. The one saves you saying shop again.",
        te: "అన్నిటికంటే మంచి చోటు చెప్పాలంటే the best, తర్వాత the one that లేదా the place where అనండి. the one అంటే 'అదే షాపు'; మళ్ళీ shop అనక్కర్లేదు.",
      },
      bridge: {
        te: ["అన్నిటికంటే మంచి చీరల షాపు", "పోయిన సంవత్సరం", "తెరిచిందే"],
        en: [
          { text: "The best saree shop", role: "who" },
          { text: "is", role: "action" },
          { text: "the one that opened", role: "what" },
          { text: "last year", role: "when" },
        ],
      },
      examples: [
        { en: "The best saree shop is the one that opened last year.", te: "అన్నిటికంటే మంచి చీరల షాపు పోయిన సంవత్సరం తెరిచిందే." },
        { en: "Venkat's is the place where everyone buys sweets.", te: "అందరూ స్వీట్లు కొనేది వెంకట్ గారి షాపులోనే." },
        { en: "This is the cheapest shop that sells fresh vegetables.", te: "తాజా కూరగాయలు అమ్మే షాపుల్లో ఇదే అన్నిటికంటే చవక." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Naming the best place", te: "మంచి చోటు ఎలా చెప్పాలి" },
      items: [
        {
          form: "the one that …",
          useFor: { en: "So you don't say shop or place again.", te: "shop, place అని మళ్ళీ మళ్ళీ అనకుండా." },
          example: { en: "The best bakery is the one near the school.", te: "అన్నిటికంటే మంచి బేకరీ స్కూల్ దగ్గర ఉన్నదే." },
        },
        {
          form: "the place where …",
          useFor: { en: "Say what people do there.", te: "అక్కడ అందరూ ఏం చేస్తారో చెప్పడానికి." },
          example: { en: "The flour mill is the place where we grind rice for idli.", te: "ఇడ్లీకి బియ్యం పట్టించేది ఆ పిండి మరలోనే." },
        },
        {
          form: "the cheapest, the oldest",
          useFor: { en: "Number one of all; short words take -est, always with the.", te: "అన్నిటికంటే ఒకటి; చిన్న పదాలకి -est, ముందు ఎప్పుడూ the." },
          example: { en: "The supermarket is the cheapest place for rice.", te: "బియ్యానికి సూపర్ మార్కెట్టే అన్నిటికంటే చవక." },
        },
        {
          form: "the most famous",
          useFor: { en: "Long words take most, not -est.", te: "పెద్ద పదాలకి -est కాదు, most వస్తుంది." },
          example: { en: "The most famous temple in our area is the one near the lake.", te: "మా ఏరియాలో అన్నిటికంటే ఫేమస్ గుడి చెరువు దగ్గర ఉన్నదే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "This is the most cheapest shop.",
      right: "This is the cheapest shop.",
      why: {
        en: "Short words take -est alone, so do not add most as well.",
        te: "చిన్న పదాలకి -est ఒక్కటే చాలు; దానితో పాటు most కూడా చేర్చకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "This shop is having the best sweets.",
      right: "This shop has the best sweets.",
      why: {
        en: "Have for owning is not an action, so it does not take -ing.",
        te: "'ఉంది' అనే అర్థంలో have ఒక పని కాదు, అందుకే దానికి -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your new tenant asks where to buy sweets. Tell him about Venkat's.",
        te: "మీ ఇంట్లో కొత్తగా అద్దెకి వచ్చిన ఆయన స్వీట్లు ఎక్కడ కొనాలని అడుగుతున్నారు. వెంకట్ గారి షాపు గురించి చెప్పండి.",
      },
      options: [
        "Venkat's is the place where everyone buys sweets.",
        "Venkat's is the place where everyone buy sweets.",
        "Venkat's is the place which everyone buys sweets.",
      ],
      answer: 0,
      why: {
        en: "Everyone takes the s form like he or she, and a place where people do something takes where.",
        te: "everyone కి he, she లాగా s వస్తుంది; అందరూ ఏదో చేసే చోటుకి where వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The best saree shop is the one ___ opened last year.",
      te: "అన్నిటికంటే మంచి చీరల షాపు పోయిన సంవత్సరం తెరిచిందే.",
      options: ["that", "where", "who"],
      answer: 0,
      why: {
        en: "The shop itself opened, so use that or which; where needs someone doing something there.",
        te: "షాపే తెరుచుకుంది, అందుకే that లేదా which; where తర్వాత అక్కడ ఎవరో ఏదో చేయాలి.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Welcome to Lakshmi Nagar Colony",
      lines: [
        "Dear new residents, welcome to our colony!",
        "Here are some places that everyone here uses.",
        "The ration shop is the one opposite the water tank.",
        "The best place for vegetables is the Sunday market near the school.",
        "Venkat's Sweets is the shop where everyone buys sweets for festivals.",
        "Dr Usha's clinic, which is behind the temple, is open till 9 pm.",
        "The colony office is open from 10 am to 1 pm.",
        "Gopal, Colony Secretary",
      ],
      questions: [
        {
          prompt: { en: "Where is the best place for vegetables?", te: "కూరగాయలకి అన్నిటికంటే మంచి చోటు ఏది?" },
          options: ["The Sunday market near the school", "The ration shop", "Venkat's Sweets"],
          answer: 0,
          why: {
            en: "The fourth line names the best place for vegetables and says where it is.",
            te: "నాలుగో లైన్‌లో కూరగాయలకి మంచి చోటు ఏదో, అది ఎక్కడుందో ఉంది.",
          },
        },
        {
          prompt: { en: "Until what time is the clinic open?", te: "క్లినిక్ ఎన్ని గంటల దాకా తెరిచి ఉంటుంది?" },
          options: ["Till 9 pm", "Till 1 pm", "Till 10 am"],
          answer: 0,
          why: {
            en: "The sixth line gives the clinic's closing time, late in the evening.",
            te: "ఆరో లైన్‌లో క్లినిక్ ఎప్పుడు మూస్తారో ఉంది, రాత్రి పూట.",
          },
        },
        {
          prompt: { en: "Where is the ration shop?", te: "రేషన్ షాపు ఎక్కడ ఉంది?" },
          options: ["Opposite the water tank", "Behind the temple", "Near the school"],
          answer: 0,
          why: {
            en: "The third line says the ration shop faces the water tank.",
            te: "మూడో లైన్‌లో రేషన్ షాపు వాటర్ ట్యాంక్‌కి ఎదురుగా ఉందని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Sai Bakery is best bakery in our area.",
      wrongIndex: 3,
      fix: "Sai Bakery is the best bakery in our area.",
      why: {
        en: "Best picks out only one, so it always needs the before it.",
        te: "best అంటే ఒక్కటే, అందుకే దాని ముందు ఎప్పుడూ the కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A new tenant asks about the best saree shop. The best one opened last year. Tell her.",
        te: "కొత్తగా అద్దెకి వచ్చిన ఆవిడ మంచి చీరల షాపు గురించి అడుగుతున్నారు. అన్నిటికంటే మంచిది పోయిన సంవత్సరం తెరిచారు. ఆవిడకి చెప్పండి.",
      },
      expected: [
        "The best saree shop is the one that opened last year.",
        "The best one is the shop that opened last year.",
        "The best saree shop is the one which opened last year.",
      ],
      options: [
        "The best saree shop is the one that opened last year.",
        "Best saree shop is the one that opened last year.",
        "The best saree shop is the one who opened last year.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend wants fresh vegetables at a low price. Recommend the shop in front of you.",
        te: "స్నేహితులకి తాజా కూరగాయలు తక్కువ ధరకి కావాలి. మీ ముందున్న షాపుని సూచించండి.",
      },
      expected: [
        "This is the cheapest shop that sells fresh vegetables.",
        "This shop is the cheapest for fresh vegetables.",
        "This is the cheapest shop which sells fresh vegetables.",
      ],
      options: [
        "This is the cheapest shop that sells fresh vegetables.",
        "This is the most cheapest shop that sells fresh vegetables.",
        "This is the cheapest shop that sell fresh vegetables.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A tour for the new tenant", te: "కొత్త అద్దెదారుకి షాపుల పరిచయం" },
    scene: {
      en: "Satish has rented the flat upstairs. You meet him on the stairs on his first morning.",
      te: "సతీష్ గారు పైన ఫ్లాట్ అద్దెకి తీసుకున్నారు. ఆయన వచ్చిన మొదటి రోజు పొద్దున మెట్ల దగ్గర కలిశారు.",
    },
    partner: { en: "Satish (the new tenant)", te: "సతీష్ (కొత్త అద్దెదారు)" },
    voice: "b",
    skills: [
      { id: "best", label: { en: "Naming the best places", te: "మంచి చోట్లు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I'm Satish. I've just moved in upstairs.",
        te: "గుడ్ మార్నింగ్! నేను సతీష్. ఇప్పుడే పైన ఫ్లాట్‌లోకి వచ్చాను.",
        hint: { en: "Welcome him, and offer to show him the shops nearby.", te: "ఆయనకి స్వాగతం చెప్పి, దగ్గర్లో ఉన్న షాపులు చూపిస్తానని చెప్పండి." },
        replies: [
          { say: "Welcome! Shall I show you the shops nearby?", good: true, skill: "polite" },
          { say: "Welcome! Let me show you around the shops.", good: true, skill: "polite" },
          { say: "Welcome! Shall I show you the shops which nearby?", good: false, skill: "polite", fixIt: "be" },
        ],
      },
      {
        partner: "Yes, please! Where's the best place for vegetables?",
        te: "అలాగే, ప్లీజ్! కూరగాయలకి అన్నిటికంటే మంచి చోటు ఏది?",
        hint: { en: "Tell him about the Sunday market near the school.", te: "స్కూల్ దగ్గర జరిగే ఆదివారం సంత గురించి చెప్పండి." },
        replies: [
          { say: "The best place is the Sunday market near the school.", good: true, skill: "best" },
          { say: "The Sunday market near the school is the best.", good: true, skill: "best" },
          { say: "Best place is the Sunday market near the school.", good: false, skill: "best", fixIt: "article" },
        ],
      },
      {
        partner: "And is there a good bakery?",
        te: "మరి మంచి బేకరీ ఏదైనా ఉందా?",
        hint: { en: "Recommend the bakery that opened last month.", te: "పోయిన నెల తెరిచిన బేకరీని సూచించండి." },
        replies: [
          { say: "Yes, the best bakery is the one that opened last month.", good: true, skill: "best" },
          {
            say: "Bakery food is not healthy. You should cook at home.",
            good: false,
            skill: "polite",
            react: { en: "Ha! I can't cook, so the bakery will have to do.", te: "హహ! నాకు వంట రాదు, అందుకే బేకరీనే దిక్కు." },
          },
        ],
      },
      {
        partner: "Thank you so much. This is very helpful.",
        te: "చాలా థాంక్స్. ఇది చాలా ఉపయోగపడుతుంది.",
        hint: { en: "Say it is nothing, and tell him to ask anytime.", te: "అదేం పెద్ద విషయం కాదని చెప్పి, ఎప్పుడైనా అడగమని చెప్పండి." },
        replies: [
          { say: "Don't mention it. Please ask me anytime.", good: true, skill: "polite" },
          { say: "No problem at all. Ask me anytime.", good: true, skill: "polite" },
          { say: "No mention. Please ask me anytime.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
