import type { Lesson } from "../../types";

/** Week 72, Day 1 (CURRICULUM §5): will + definitely / probably, and where they go — I'll definitely come. I probably won't stay. */
export const day: Lesson = {
  id: "ill-definitely-come-invitation",
  kind: "lesson",
  title: { en: "I'll Definitely Come", te: "తప్పకుండా వస్తాను" },
  subtitle: "I'll definitely … / I'll probably …",
  summary: {
    en: "Learn to say how sure you are about a plan: I'll definitely come to the function. I'll probably reach by seven.",
    te: "ఒక ప్లాన్ గురించి మీకు ఎంత ఖచ్చితంగా తెలుసో చెప్పడం నేర్చుకుందాం: I'll definitely come to the function. I'll probably reach by seven.",
  },
  seo: {
    title: "Definitely and Probably in English for Telugu Speakers",
    description:
      "Say I'll definitely come and I'll probably reach by seven. Simple lessons for Telugu speakers on replying to invitations.",
  },
  pattern: [
    { text: "I'll", role: "who" },
    { text: "definitely come", role: "action" },
    { text: "to the function", role: "what" },
    { text: "on Sunday", role: "when" },
  ],
  core: [
    { en: "I'll definitely come to the function.", te: "నేను తప్పకుండా ఫంక్షన్‌కి వస్తాను.", extra: ["at"] },
    { en: "I'll probably reach by seven.", te: "బహుశా ఏడింటికల్లా చేరుకుంటాను.", extra: ["to"] },
    { en: "I probably won't stay for dinner.", te: "బహుశా భోజనానికి ఉండను.", extra: ["don't"] },
    { en: "Thank you for the invitation. I'll definitely be there.", te: "ఆహ్వానించినందుకు థాంక్యూ. తప్పకుండా వస్తాను.", extra: ["invite"] },
    { en: "What time will you reach the hall?", te: "మీరు హాల్‌కి ఎన్ని గంటలకి చేరుకుంటారు?", extra: ["are"] },
    { en: "My cousin will probably come with me.", te: "బహుశా మా కజిన్ కూడా నాతో వస్తారు.", extra: ["probable"] },
    { en: "I definitely won't miss the function this time.", te: "ఈసారి ఫంక్షన్ అస్సలు మిస్ అవ్వను.", extra: ["not"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Reply to one message or call today with I'll definitely … or I'll probably …",
    te: "ఈ రోజు ఒక మెసేజ్‌కి గానీ ఫోన్‌కి గానీ I'll definitely … లేదా I'll probably … అని జవాబు ఇవ్వండి.",
  },
  words: [
    { en: "definitely", te: "తప్పకుండా, ఖచ్చితంగా" },
    { en: "probably", te: "బహుశా" },
    { en: "attend", te: "హాజరవడం, వెళ్ళడం" },
    { en: "count me in", te: "నన్నూ లెక్కలో వేసుకోండి, నేనూ వస్తాను" },
    { en: "for sure", te: "ఖచ్చితంగా, తప్పకుండా" },
  ],
  grammar: ["will", "adverbs-frequency"],
  topics: ["neighbours", "festivals", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Sure or almost sure", te: "ఖచ్చితమా, దాదాపు ఖచ్చితమా" },
      body: {
        en: "Definitely means you are sure; probably means you are almost sure. Put them after I'll, but before won't: I probably won't stay.",
        te: "definitely అంటే ఖచ్చితంగా; probably అంటే బహుశా. ఇవి I'll తర్వాత వస్తాయి, కానీ won't కి ముందు: I probably won't stay (బహుశా ఉండను).",
      },
      bridge: {
        te: ["నేను", "తప్పకుండా", "ఫంక్షన్‌కి", "వస్తాను"],
        en: [
          { text: "I'll", role: "who" },
          { text: "definitely come", role: "action" },
          { text: "to the function", role: "what" },
        ],
      },
      examples: [
        { en: "I'll definitely come to the function.", te: "నేను తప్పకుండా ఫంక్షన్‌కి వస్తాను." },
        { en: "I'll probably reach by seven.", te: "బహుశా ఏడింటికల్లా చేరుకుంటాను." },
        { en: "I probably won't stay for dinner.", te: "బహుశా భోజనానికి ఉండను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How sure are you?", te: "మీకు ఎంత ఖచ్చితంగా తెలుసు?" },
      items: [
        {
          form: "I'll definitely …",
          useFor: { en: "You are sure you will do it.", te: "చేస్తానని మీకు ఖచ్చితంగా తెలుసు." },
          example: { en: "I'll definitely attend the colony meeting.", te: "కాలనీ మీటింగ్‌కి తప్పకుండా వస్తాను." },
        },
        {
          form: "I'll probably …",
          useFor: { en: "You are almost sure you will do it.", te: "చేస్తానని దాదాపు ఖచ్చితంగా తెలుసు." },
          example: { en: "I'll probably bring some sweets.", te: "బహుశా కొన్ని స్వీట్లు తెస్తాను." },
        },
        {
          form: "I probably won't …",
          useFor: { en: "You are almost sure you will not do it.", te: "చేయనని దాదాపు ఖచ్చితంగా తెలుసు." },
          example: { en: "I probably won't come by car.", te: "బహుశా కారులో రాను." },
        },
        {
          form: "I definitely won't …",
          useFor: { en: "You are sure you will not do it.", te: "చేయనని ఖచ్చితంగా తెలుసు." },
          example: { en: "I definitely won't be late this time.", te: "ఈసారి అస్సలు ఆలస్యం చేయను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I won't probably stay for dinner.",
      right: "I probably won't stay for dinner.",
      why: {
        en: "Probably and definitely go before won't, never after it.",
        te: "probably, definitely లు won't కి ముందే వస్తాయి, తర్వాత ఎప్పుడూ రావు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'll probably reach to the hall by seven.",
      right: "I'll probably reach the hall by seven.",
      why: {
        en: "Reach takes no to; Telugu హాల్‌కి makes us add one.",
        te: "reach తర్వాత to రాదు; తెలుగులో 'హాల్‌కి' అనడం వల్ల to కలుపుతాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the colony secretary what time the function will start.", te: "ఫంక్షన్ ఎన్ని గంటలకి మొదలవుతుందో కాలనీ సెక్రటరీ గారిని అడగండి." },
      options: ["What time will the function start?", "What time the function will start?", "What time will the function starts?"],
      answer: 0,
      why: {
        en: "In a question, will comes before the function, and the verb stays plain.",
        te: "ప్రశ్నలో will, the function కంటే ముందు వస్తుంది; verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ won't stay for dinner.",
      te: "బహుశా భోజనానికి ఉండను.",
      options: ["probably", "probable", "maybe"],
      answer: 0,
      why: {
        en: "Probably goes inside the sentence, before won't; maybe goes at the start.",
        te: "probably వాక్యం మధ్యలో, won't కి ముందు వస్తుంది; maybe అయితే మొదట్లో వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Rani invites you to her housewarming. You are sure you can go. What do you say?",
        te: "రాణి గారు వాళ్ళ గృహప్రవేశానికి పిలిచారు. మీరు వెళ్ళగలరని ఖచ్చితంగా తెలుసు. ఏమంటారు?",
      },
      options: ["Thank you! I'll definitely come.", "Thank you! I'll probably come.", "Thank you! I definitely come."],
      answer: 0,
      why: {
        en: "You are sure, so say definitely, and keep will for the future.",
        te: "మీకు ఖచ్చితంగా తెలుసు కాబట్టి definitely; రాబోయేదానికి will కూడా ఉండాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My friend Suresh always come late to functions.",
      wrongIndex: 4,
      fix: "My friend Suresh always comes late to functions.",
      why: {
        en: "One person, like he or she, takes s on the verb; Telugu has no such s.",
        te: "ఒక్కరైతే (he, she లాగా) verb కి s వస్తుంది; తెలుగులో ఇలాంటి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour invites you to a function on Sunday. You are sure you can come. Reply.",
        te: "పక్కింటివారు ఆదివారం ఫంక్షన్‌కి పిలిచారు. మీరు రాగలరని ఖచ్చితంగా తెలుసు. జవాబు చెప్పండి.",
      },
      expected: ["Thank you! I'll definitely come.", "Thanks, I'll definitely be there.", "Thank you for the invitation. I'll definitely come."],
      options: ["Thank you! I'll definitely come.", "Thank you! Definitely I come.", "Okay, okay. I'll see."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend asks when you will reach the hall. You think around seven. Answer.",
        te: "మీరు హాల్‌కి ఎప్పుడు చేరుకుంటారని స్నేహితులు అడుగుతున్నారు. దాదాపు ఏడు అనుకుంటున్నారు. జవాబు చెప్పండి.",
      },
      expected: ["I'll probably reach by seven.", "I'll probably be there by seven.", "Probably by seven."],
      options: ["I'll probably reach by seven.", "I'll probably reach to there by seven.", "I'll probably reaching by seven."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "An invitation at the door", te: "గుమ్మం దగ్గర ఆహ్వానం" },
    scene: {
      en: "Imran, the colony secretary, comes to your door with an invitation to the colony's Ugadi function.",
      te: "కాలనీ సెక్రటరీ ఇమ్రాన్ గారు కాలనీ ఉగాది ఫంక్షన్ ఆహ్వానంతో మీ ఇంటికి వచ్చారు.",
    },
    partner: { en: "Imran (colony secretary)", te: "ఇమ్రాన్ (కాలనీ సెక్రటరీ)" },
    voice: "b",
    skills: [
      { id: "sure", label: { en: "Saying how sure you are", te: "ఎంత ఖచ్చితమో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Namaste! Our colony's Ugadi function is on Sunday. Here's your invitation.",
        te: "నమస్తే! మన కాలనీ ఉగాది ఫంక్షన్ ఆదివారం. ఇదిగోండి మీ ఆహ్వానం.",
        hint: { en: "Thank him, and tell him you are sure you will be there.", te: "థాంక్స్ చెప్పి, మీరు ఖచ్చితంగా వస్తారని చెప్పండి." },
        replies: [
          { say: "Thank you! I'll definitely come.", good: true, skill: "sure" },
          { say: "For sure! Count me in.", good: true, skill: "sure" },
          {
            say: "Another function? I'm very busy, you know.",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry to trouble you. Please come if you can.", te: "అయ్యో, ఇబ్బంది పెట్టినందుకు సారీ. వీలైతే రండి." },
          },
        ],
      },
      {
        partner: "Wonderful! It starts at six. Will you come on time?",
        te: "చాలా బాగుంది! ఆరింటికి మొదలవుతుంది. టైమ్‌కి వస్తారా?",
        hint: { en: "Say you are almost sure to arrive a little late, around half past six.", te: "కొంచెం ఆలస్యంగా, దాదాపు ఆరున్నరకి వస్తారని చెప్పండి." },
        replies: [
          { say: "I'll probably reach by half past six.", good: true, skill: "sure" },
          { say: "I'll probably reach to the hall by half past six.", good: false, skill: "sure", fixIt: "preposition" },
        ],
      },
      {
        partner: "No problem. Will you stay for dinner after the function?",
        te: "పర్లేదు. ఫంక్షన్ అయ్యాక భోజనానికి ఉంటారా?",
        hint: { en: "Say you are almost sure you can't stay, and give a reason.", te: "బహుశా ఉండలేరని చెప్పి, కారణం చెప్పండి." },
        replies: [
          { say: "I probably won't stay. I have an early train on Monday.", good: true, skill: "sure" },
          { say: "I won't probably stay. I have an early train on Monday.", good: false, skill: "sure" },
        ],
      },
      {
        partner: "That's fine. Please bring your cousins too, if they're free.",
        te: "పర్లేదు. మీ కజిన్స్ ఖాళీగా ఉంటే, వాళ్ళని కూడా తీసుకురండి.",
        hint: { en: "Say they will probably come, thank him and say goodbye.", te: "వాళ్ళు బహుశా వస్తారని చెప్పి, థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Sure, they'll probably come. Thank you for the invitation!", good: true, skill: "polite" },
          { say: "Sure, they'll probably come. Thank you for invitation!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
