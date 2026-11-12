import type { Lesson } from "../../types";

/** Week 59, Day 4 (CURRICULUM §5): recommending people and places with who, which and where — Do you know a dentist who works on Sundays? */
export const day: Lesson = {
  id: "recommend-a-dentist-who",
  kind: "lesson",
  title: { en: "Do You Know a Good Dentist?", te: "మంచి డెంటిస్ట్ తెలుసా?" },
  subtitle: "Do you know a … who …?",
  summary: {
    en: "Learn to ask for and recommend good people and places: Do you know a dentist who works on Sundays?",
    te: "మంచి మనుషులు, చోట్ల గురించి అడగడం, చెప్పడం నేర్చుకుందాం: Do you know a dentist who works on Sundays?",
  },
  seo: {
    title: "Recommending a Dentist in English for Telugu Speakers",
    description:
      "Say Do you know a dentist who works on Sundays? Simple lessons for Telugu speakers on asking for and recommending people and places.",
  },
  pattern: [
    { text: "Do you", role: "who" },
    { text: "know", role: "action" },
    { text: "a dentist who works", role: "what" },
    { text: "on Sundays", role: "when" },
  ],
  core: [
    { en: "Do you know a dentist who works on Sundays?", te: "ఆదివారం కూడా చూసే డెంటిస్ట్ ఎవరైనా మీకు తెలుసా?", extra: ["work"] },
    { en: "There's a clinic near the bus stand which is very clean.", te: "బస్ స్టాండ్ దగ్గర ఒక క్లినిక్ ఉంది, అది చాలా శుభ్రంగా ఉంటుంది.", extra: ["who"] },
    { en: "I know a good dentist who doesn't charge much.", te: "ఎక్కువ ఫీజు తీసుకోని ఒక మంచి డెంటిస్ట్ నాకు తెలుసు.", extra: ["don't"] },
    { en: "I'd recommend the clinic where my friend goes.", te: "మా స్నేహితులు వెళ్ళే క్లినిక్‌కి వెళ్ళమని నేను చెప్తాను.", extra: ["which"] },
    { en: "She's a dentist who is very gentle with older patients.", te: "ఆవిడ పెద్దవాళ్ళతో చాలా మెల్లగా, జాగ్రత్తగా ఉండే డెంటిస్ట్.", extra: ["are"] },
    { en: "Is there a lab nearby which does blood tests?", te: "దగ్గర్లో blood tests చేసే ల్యాబ్ ఏదైనా ఉందా?", extra: ["do"] },
    { en: "Dr Ayesha is the dentist whose clinic opens at eight.", te: "పొద్దున ఎనిమిదింటికే క్లినిక్ తెరిచే డెంటిస్ట్ డాక్టర్ ఆయేషా గారు.", extra: ["who"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a good doctor or shop you trust. Say aloud how you would recommend it: I'd recommend …",
    te: "మీకు నమ్మకమైన ఒక మంచి డాక్టర్‌నో షాపునో గుర్తు చేసుకోండి. ఎవరికైనా ఎలా చెప్తారో గట్టిగా అనండి: I'd recommend …",
  },
  words: [
    { en: "dentist", te: "పళ్ళ డాక్టర్, డెంటిస్ట్" },
    { en: "toothache", te: "పంటి నొప్పి" },
    { en: "gentle", te: "మెల్లగా, సున్నితంగా చూసే" },
    { en: "filling", te: "పంటికి ఫిల్లింగ్, పన్ను పూడ్చడం" },
    { en: "painless", te: "నొప్పి లేని" },
  ],
  grammar: ["relative-clauses", "present-simple", "would-like"],
  topics: ["health", "doctor", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for a good name", te: "మంచి మనిషి గురించి అడగడం" },
      body: {
        en: "To ask for help, say Do you know a … who …? To recommend, use who for people, and which or where for places.",
        te: "ఎవరైనా మంచివారు కావాలంటే Do you know a … who …? అని అడగండి. చెప్పేటప్పుడు మనుషులకి who, చోట్లకి which లేదా where వాడండి.",
      },
      bridge: {
        te: ["ఆదివారం కూడా", "చూసే", "డెంటిస్ట్ ఎవరైనా", "మీకు తెలుసా?"],
        en: [
          { text: "Do you", role: "who" },
          { text: "know", role: "action" },
          { text: "a dentist who works", role: "what" },
          { text: "on Sundays", role: "when" },
        ],
      },
      examples: [
        { en: "Do you know a dentist who works on Sundays?", te: "ఆదివారం కూడా చూసే డెంటిస్ట్ ఎవరైనా మీకు తెలుసా?" },
        { en: "There's a clinic near the bus stand which is very clean.", te: "బస్ స్టాండ్ దగ్గర ఒక క్లినిక్ ఉంది, అది చాలా శుభ్రంగా ఉంటుంది." },
        { en: "I'd recommend the clinic where my friend goes.", te: "మా స్నేహితులు వెళ్ళే క్లినిక్‌కి వెళ్ళమని నేను చెప్తాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "who, which or where", te: "who, which, where ఎప్పుడు" },
      items: [
        {
          form: "a … who",
          useFor: { en: "People: a dentist, a tailor, a plumber.", te: "మనుషులు: డెంటిస్ట్, టైలర్, ప్లంబర్." },
          example: { en: "She's a dentist who is very gentle with older patients.", te: "ఆవిడ పెద్దవాళ్ళతో చాలా మెల్లగా, జాగ్రత్తగా ఉండే డెంటిస్ట్." },
        },
        {
          form: "a … which",
          useFor: { en: "A place, and what it is like or does.", te: "ఒక చోటు, అది ఎలా ఉంటుందో లేదా ఏం చేస్తుందో." },
          example: { en: "Is there a lab nearby which does blood tests?", te: "దగ్గర్లో blood tests చేసే ల్యాబ్ ఏదైనా ఉందా?" },
        },
        {
          form: "the … where",
          useFor: { en: "A place, and what people do there.", te: "ఒక చోటు, అక్కడ మనుషులు చేసే పని." },
          example: { en: "That's the clinic where I had my filling.", te: "నేను పంటికి ఫిల్లింగ్ చేయించుకున్న క్లినిక్ అదే." },
        },
        {
          form: "I'd recommend …",
          useFor: { en: "Suggest someone you trust, politely.", te: "మీకు నమ్మకమైనవారిని మర్యాదగా సూచించడానికి." },
          example: { en: "I'd recommend Dr Ayesha. Her treatment is almost painless.", te: "డాక్టర్ ఆయేషా గారి దగ్గరికి వెళ్ళండి. ఆవిడ ట్రీట్‌మెంట్‌లో దాదాపు నొప్పే ఉండదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am knowing a good dentist.",
      right: "I know a good dentist.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing.",
        te: "know అంటే తెలిసి ఉండటం, అది ఒక పని కాదు; అందుకే దానికి -ing ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "There's a clinic near bus stand which is very clean.",
      right: "There's a clinic near the bus stand which is very clean.",
      why: {
        en: "A place everyone knows, like the bus stand, takes the; Telugu has no such word.",
        te: "అందరికీ తెలిసిన చోటు ముందు, bus stand లాగా, the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "You need a dentist on a Sunday. Ask a friend for help.",
        te: "ఆదివారం మీకు డెంటిస్ట్ కావాలి. సహాయం కోసం స్నేహితులని అడగండి.",
      },
      options: [
        "Do you know a dentist who works on Sundays?",
        "Do you know a dentist who work on Sundays?",
        "Do you know a dentist which works on Sundays?",
      ],
      answer: 0,
      why: {
        en: "A dentist is a person, so use who, and one dentist takes works with s.",
        te: "డెంటిస్ట్ ఒక మనిషి, అందుకే who; ఒక్కరే కాబట్టి works కి s వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "There's a clinic near the bus stand ___ is very clean.",
      te: "బస్ స్టాండ్ దగ్గర ఒక క్లినిక్ ఉంది, అది చాలా శుభ్రంగా ఉంటుంది.",
      options: ["which", "who", "where"],
      answer: 0,
      why: {
        en: "The clinic itself is clean, so use which; where needs a person doing something there.",
        te: "క్లినిక్కే శుభ్రంగా ఉంది, అందుకే which; where తర్వాత అక్కడ ఎవరో ఏదో చేయాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "A friend needs a blood test. Tell him about the lab you know.",
        te: "ఒక స్నేహితుడికి blood test కావాలి. మీకు తెలిసిన ల్యాబ్ గురించి ఆయనకి చెప్పండి.",
      },
      options: [
        "There's a lab nearby which does blood tests.",
        "There's a lab nearby where does blood tests.",
        "There's a lab nearby who does blood tests.",
      ],
      answer: 0,
      why: {
        en: "The lab itself does the tests, so use which; who is only for people.",
        te: "ల్యాబే టెస్టులు చేస్తుంది, అందుకే which; who మనుషులకి మాత్రమే.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'd recommend the clinic which my friend goes.",
      wrongIndex: 4,
      fix: "I'd recommend the clinic where my friend goes.",
      why: {
        en: "Your friend goes to that place, so use where; which would need to at the end.",
        te: "మీ స్నేహితులు ఆ చోటుకి వెళ్తారు, అందుకే where; which అంటే చివర to కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You have a bad toothache. Ask your neighbour about a good dentist.",
        te: "మీకు పంటి నొప్పి బాగా ఉంది. మంచి డెంటిస్ట్ గురించి పక్కింటివారిని అడగండి.",
      },
      expected: [
        "Do you know a good dentist?",
        "Do you know a good dentist nearby?",
        "Can you recommend a good dentist?",
        "Do you know a dentist who is good?",
      ],
      options: ["Do you know a good dentist?", "You know a good dentist?", "Do you know good dentist?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A friend wants a clean clinic. Tell her about the one near the bus stand.",
        te: "స్నేహితురాలికి శుభ్రంగా ఉండే క్లినిక్ కావాలి. బస్ స్టాండ్ దగ్గర ఉన్నదాని గురించి ఆవిడకి చెప్పండి.",
      },
      expected: [
        "There's a clinic near the bus stand which is very clean.",
        "There's a clinic near the bus stand that is very clean.",
        "The clinic near the bus stand is very clean.",
      ],
      options: [
        "There's a clinic near the bus stand which is very clean.",
        "There's a clinic near the bus stand which very clean.",
        "There's a clinic near the bus stand who is very clean.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new neighbour with a toothache", te: "పంటి నొప్పితో కొత్త పక్కింటావిడ" },
    scene: {
      en: "Salma moved in next door last week. She knocks on your door one morning.",
      te: "సల్మా గారు పోయిన వారం పక్కింట్లోకి వచ్చారు. ఒక రోజు పొద్దున మీ తలుపు తట్టారు.",
    },
    partner: { en: "Salma (a new neighbour)", te: "సల్మా (కొత్త పక్కింటావిడ)" },
    skills: [
      { id: "recommend", label: { en: "Recommending someone", te: "మంచివారిని సూచించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Sorry to bother you. I'm Salma, your new neighbour.",
        te: "హలో! ఇబ్బంది పెడుతున్నందుకు సారీ. నేను సల్మా, మీ కొత్త పక్కింటావిడని.",
        hint: { en: "Greet her warmly, and ask how you can help.", te: "ఆవిడని ఆప్యాయంగా పలకరించి, ఏం సహాయం కావాలని అడగండి." },
        replies: [
          { say: "Hello, Salma! Welcome. How can I help you?", good: true, skill: "polite" },
          { say: "Nice to meet you. What can I do for you?", good: true, skill: "polite" },
          {
            say: "Yes? What do you want?",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry. Is this a bad time?", te: "అయ్యో, సారీ. ఇప్పుడు మీకు కుదరదా?" },
          },
        ],
      },
      {
        partner: "I have a terrible toothache. Do you know a good dentist?",
        te: "నాకు పంటి నొప్పి భరించలేకుండా ఉంది. మంచి డెంటిస్ట్ ఎవరైనా మీకు తెలుసా?",
        hint: { en: "Say yes, and recommend the dentist you go to.", te: "తెలుసు అని, మీరు వెళ్ళే డెంటిస్ట్‌ని సూచించండి." },
        replies: [
          { say: "Yes, I'd recommend Dr Ayesha. She's very gentle.", good: true, skill: "recommend" },
          { say: "Yes. Dr Ayesha is a dentist who is very gentle.", good: true, skill: "recommend" },
          { say: "Yes. Dr Ayesha is dentist who is very gentle.", good: false, skill: "recommend", fixIt: "article" },
        ],
      },
      {
        partner: "That's good to hear. How long have you been going to her?",
        te: "విని సంతోషం. మీరు ఎన్నాళ్ళుగా ఆవిడ దగ్గరికి వెళ్తున్నారు?",
        hint: { en: "Say for about ten years.", te: "దాదాపు పదేళ్ళుగా అని చెప్పండి." },
        replies: [
          { say: "I've been going to her for about ten years.", good: true, skill: "recommend" },
          { say: "For about ten years now. She's very good.", good: true, skill: "recommend" },
          { say: "I am going to her for about ten years.", good: false, skill: "recommend", fixIt: "duration" },
        ],
      },
      {
        partner: "Thank you so much! I'll call her right now.",
        te: "చాలా థాంక్స్! ఇప్పుడే ఆవిడకి ఫోన్ చేస్తాను.",
        hint: { en: "Say she is welcome, and wish her well.", te: "పర్లేదని చెప్పి, త్వరగా తగ్గిపోవాలని కోరుకోండి." },
        replies: [
          { say: "You're welcome. I hope you feel better soon.", good: true, skill: "polite" },
          { say: "You're welcome. Take rest and get well soon.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
