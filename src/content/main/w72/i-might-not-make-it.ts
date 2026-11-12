import type { Lesson } from "../../types";

/** Week 72, Day 3 (CURRICULUM §5): might not / may not, and I'm not sure yet — saying gently that you may miss something. */
export const day: Lesson = {
  id: "i-might-not-make-it",
  kind: "lesson",
  title: { en: "I Might Not Make It", te: "రాలేకపోవచ్చు" },
  subtitle: "I might not … / I'm not sure yet",
  summary: {
    en: "Learn to say gently that you may not come: I might not make it on Sunday. I'm not sure yet.",
    te: "రాకపోవచ్చని మెల్లగా చెప్పడం నేర్చుకుందాం: I might not make it on Sunday. I'm not sure yet.",
  },
  seo: {
    title: "Might Not and Not Sure Yet in English for Telugu Speakers",
    description:
      "Say I might not make it and I'm not sure yet. I'll let you know. Simple lessons for Telugu speakers on saying no gently.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "might not make it", role: "action" },
    { text: "on Sunday", role: "when" },
  ],
  core: [
    { en: "I might not make it on Sunday.", te: "ఆదివారం నేను రాలేకపోవచ్చు.", extra: ["don't"] },
    { en: "I'm not sure yet. I'll let you know tonight.", te: "ఇంకా ఖచ్చితంగా తెలీదు. ఈ రాత్రికి మీకు చెప్తాను.", extra: ["still"] },
    { en: "I may not come to the meeting.", te: "నేను మీటింగ్‌కి రాకపోవచ్చు.", extra: ["at"] },
    { en: "It depends on my health.", te: "అది నా ఆరోగ్యాన్ని బట్టి ఉంటుంది.", extra: ["depend"] },
    { en: "My brother might not get leave from work.", te: "మా అన్నయ్యకి ఆఫీస్‌లో సెలవు దొరక్కపోవచ్చు.", extra: ["gets"] },
    { en: "Sorry, I might have to cancel at the last minute.", te: "సారీ, చివరి నిమిషంలో cancel చేయాల్సి రావచ్చు.", extra: ["in"] },
    { en: "Please don't wait for me if I'm late.", te: "నేను ఆలస్యమైతే నా కోసం ఆగకండి, ప్లీజ్.", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one plan you are not sure about. Say aloud: I might not … I'll let you know.",
    te: "ఖచ్చితంగా తెలీని ఒక ప్లాన్ గుర్తు చేసుకోండి. గట్టిగా చెప్పండి: I might not … I'll let you know.",
  },
  words: [
    { en: "might not", te: "…కపోవచ్చు" },
    { en: "may not", te: "…కపోవచ్చు (కొంచెం మర్యాదగా)" },
    { en: "make it", te: "రాగలగడం, అందుకోగలగడం" },
    { en: "it depends", te: "అది … ని బట్టి ఉంటుంది" },
    { en: "last minute", te: "చివరి నిమిషం" },
  ],
  grammar: ["might-may", "will", "yes-no-questions"],
  topics: ["people", "time", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Might not: maybe no", te: "might not: రాకపోవచ్చు" },
      body: {
        en: "Use might not or may not when you are not sure you can do something. Not comes after might: I might not make it.",
        te: "చేయగలరో లేదో ఖచ్చితంగా తెలీనప్పుడు might not లేదా may not వాడండి. not, might తర్వాత వస్తుంది: I might not make it (నేను రాలేకపోవచ్చు).",
      },
      bridge: {
        te: ["ఆదివారం", "నేను", "రాలేకపోవచ్చు"],
        en: [
          { text: "I", role: "who" },
          { text: "might not make it", role: "action" },
          { text: "on Sunday", role: "when" },
        ],
      },
      examples: [
        { en: "I might not make it on Sunday.", te: "ఆదివారం నేను రాలేకపోవచ్చు." },
        { en: "I'm not sure yet. I'll let you know tonight.", te: "ఇంకా ఖచ్చితంగా తెలీదు. ఈ రాత్రికి మీకు చెప్తాను." },
        { en: "I may not come to the meeting.", te: "నేను మీటింగ్‌కి రాకపోవచ్చు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying no gently", te: "మెల్లగా లేదు అని చెప్పడం" },
      items: [
        {
          form: "I might not …",
          useFor: { en: "You are not sure you can do it.", te: "చేయగలరో లేదో ఖచ్చితంగా తెలీనప్పుడు." },
          example: { en: "I might not come for the walk tomorrow.", te: "రేపు నేను నడకకి రాకపోవచ్చు." },
        },
        {
          form: "I'm not sure yet.",
          useFor: { en: "You will decide later.", te: "తర్వాత నిర్ణయిస్తారు." },
          example: { en: "I'm not sure yet. I'll call you in the evening.", te: "ఇంకా ఖచ్చితంగా తెలీదు. సాయంత్రం ఫోన్ చేస్తాను." },
        },
        {
          form: "It depends on …",
          useFor: { en: "Say what your answer depends on.", te: "మీ జవాబు దేని మీద ఆధారపడి ఉందో చెప్పడానికి." },
          example: { en: "It depends on the weather.", te: "అది వాతావరణాన్ని బట్టి ఉంటుంది." },
        },
        {
          form: "I won't …",
          useFor: { en: "You are sure you will not come.", te: "రానని ఖచ్చితంగా తెలిసినప్పుడు." },
          example: { en: "Sorry, I won't be there this time.", te: "సారీ, ఈసారి నేను రాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "Aren't you coming? Yes, I might not.",
      right: "Aren't you coming? No, I might not.",
      why: {
        en: "Answer the fact: you may not come, so start with No, not Yes like Telugu అవును.",
        te: "జవాబు నిజాన్ని బట్టి ఉండాలి: మీరు రాకపోవచ్చు కాబట్టి No తో మొదలుపెట్టండి; తెలుగులో లాగా 'అవును' అని Yes అనకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I might not to come on Sunday.",
      right: "I might not come on Sunday.",
      why: {
        en: "After might not, use the plain verb, with no to before it.",
        te: "might not తర్వాత verb అలాగే వస్తుంది; ముందు to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your friend asks: You're not coming tomorrow? You probably can't come. Answer.",
        te: "'రేపు మీరు రావట్లేదా?' అని స్నేహితులు అడుగుతున్నారు. మీరు బహుశా రాలేరు. జవాబు చెప్పండి.",
      },
      options: ["No, I might not make it.", "Yes, I might not make it.", "No, I might not making it."],
      answer: 0,
      why: {
        en: "You may not come, so the answer starts with No, whatever the question's form.",
        te: "మీరు రాకపోవచ్చు కాబట్టి జవాబు No తో మొదలవుతుంది; ప్రశ్న ఎలా ఉన్నా సరే.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "It ___ on my health.",
      te: "అది నా ఆరోగ్యాన్ని బట్టి ఉంటుంది.",
      options: ["depends", "depend", "is depend"],
      answer: 0,
      why: {
        en: "It is like he or she, so the verb takes s.",
        te: "it కూడా he, she లాంటిదే; అందుకే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You are not sure you can come to the meeting. What do you tell the secretary?",
        te: "మీటింగ్‌కి రాగలరో లేదో మీకు ఖచ్చితంగా తెలీదు. సెక్రటరీ గారికి ఏం చెప్తారు?",
      },
      options: ["I'm not sure yet. I'll let you know tonight.", "I'm not sure still. I'll let you know tonight.", "No idea. Don't call me about it."],
      answer: 0,
      why: {
        en: "For something not decided, a not sentence takes yet, not still.",
        te: "ఇంకా నిర్ణయించని దానికి, not వాక్యంలో yet వాడతారు; still కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I may not attend to the meeting tomorrow.",
      wrongIndex: 4,
      fix: "I may not attend the meeting tomorrow.",
      why: {
        en: "Attend takes no to; Telugu మీటింగ్‌కి makes us add one.",
        te: "attend తర్వాత to రాదు; తెలుగులో 'మీటింగ్‌కి' అనడం వల్ల to కలుపుతాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend invites you to the colony meeting on Sunday. You might be busy. Answer politely.",
        te: "ఆదివారం కాలనీ మీటింగ్‌కి రమ్మని స్నేహితులు పిలుస్తున్నారు. మీరు బిజీగా ఉండొచ్చు. మర్యాదగా జవాబు చెప్పండి.",
      },
      expected: ["Sorry, I might not make it on Sunday.", "I might not make it on Sunday.", "I'm not sure yet. I'll let you know."],
      options: ["Sorry, I might not make it on Sunday.", "Sorry, I might not to make it on Sunday.", "Sorry, I not might make it on Sunday."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your friend if he is coming to the meeting.",
        te: "మీటింగ్‌కి వస్తున్నారా అని స్నేహితుడిని అడగండి.",
      },
      expected: ["Are you coming to the meeting?", "Will you come to the meeting?", "Are you coming to the meeting on Sunday?"],
      options: ["Are you coming to the meeting?", "You are coming to the meeting?", "Are you come to the meeting?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Missing the meeting", te: "మీటింగ్‌కి రాలేకపోవచ్చు" },
    scene: {
      en: "Your friend Ramesh calls about the senior citizens' meeting on Sunday. You might have a hospital check-up that day.",
      te: "ఆదివారం సీనియర్ సిటిజన్స్ మీటింగ్ గురించి మీ స్నేహితుడు రమేష్ గారు ఫోన్ చేశారు. ఆ రోజు మీకు ఆసుపత్రిలో చెకప్ ఉండొచ్చు.",
    },
    partner: { en: "Ramesh (your friend)", te: "రమేష్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "unsure", label: { en: "Saying you might not come", te: "రాకపోవచ్చని చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! You're coming to Sunday's meeting, right?",
        te: "హలో! ఆదివారం మీటింగ్‌కి వస్తున్నారు కదా?",
        hint: { en: "Say gently that you may not be able to come.", te: "రాలేకపోవచ్చని మెల్లగా చెప్పండి." },
        replies: [
          { say: "Sorry, I might not make it on Sunday.", good: true, skill: "unsure" },
          { say: "I'm not sure yet, actually.", good: true, skill: "unsure" },
          {
            say: "Meetings are boring. I'm not coming.",
            good: false,
            skill: "polite",
            react: { en: "Boring? But we need your vote this time!", te: "బోరింగా? కానీ ఈసారి మీ ఓటు కావాలి కదండీ!" },
          },
        ],
      },
      {
        partner: "Oh! Why? Is everything okay?",
        te: "అయ్యో! ఎందుకు? అంతా బాగానే ఉందా?",
        hint: { en: "Explain you have a hospital check-up, and the time is not fixed.", te: "ఆసుపత్రిలో చెకప్ ఉందని, టైమ్ ఇంకా ఖాయం కాలేదని చెప్పండి." },
        replies: [
          { say: "Yes, I have a check-up. It depends on the doctor's time.", good: true, skill: "unsure" },
          { say: "Yes, I have a check-up. It depend on the doctor's time.", good: false, skill: "unsure", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "I see. Can you tell me by Saturday?",
        te: "అర్థమైంది. శనివారానికల్లా చెప్తారా?",
        hint: { en: "Promise to tell him tonight.", te: "ఈ రాత్రికే చెప్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "Sure, I'll let you know tonight.", good: true, skill: "polite" },
          { say: "Sure, I'll let you know in tonight.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
      {
        partner: "Thanks. Take care, and I hope it's nothing serious.",
        te: "థాంక్స్. జాగ్రత్తగా ఉండండి, ఏమీ సీరియస్ కాదనుకుంటాను.",
        hint: { en: "Say it is only a normal check-up, thank him and end the call.", te: "మామూలు చెకప్ మాత్రమే అని చెప్పి, థాంక్స్ చెప్పి, ఫోన్ పెట్టేయండి." },
        replies: [
          { say: "Thank you. It's just a routine check-up. Bye!", good: true, skill: "polite" },
          { say: "Thank you. It's just routine check-up. Bye!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
