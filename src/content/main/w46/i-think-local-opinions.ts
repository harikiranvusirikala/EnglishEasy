import type { Lesson } from "../../types";

/** Week 46, Day 1 (CURRICULUM §5): giving an opinion with a reason — I think the new bus stand is very useful. */
export const day: Lesson = {
  id: "i-think-local-opinions",
  kind: "lesson",
  title: { en: "I Think, I Don't Think", te: "నా ఉద్దేశంలో" },
  subtitle: "I think … because …",
  summary: {
    en: "Learn to give your opinion and a reason: I think the new bus stand is very useful because the buses come on time.",
    te: "మీ అభిప్రాయం, దానికి కారణం చెప్పడం నేర్చుకుందాం: I think the new bus stand is very useful because the buses come on time.",
  },
  seo: {
    title: "Giving Your Opinion in English for Telugu Speakers",
    description:
      "Say I think the new bus stand is very useful and I don't think the market should close at eight. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "think", role: "action" },
    { text: "the new bus stand is useful", role: "what" },
  ],
  core: [
    { en: "I think the new bus stand is very useful.", te: "కొత్త బస్ స్టాండ్ చాలా ఉపయోగంగా ఉందని నాకు అనిపిస్తోంది.", extra: ["thinking"] },
    { en: "I don't think the market should close at eight.", te: "మార్కెట్ ఎనిమిదింటికే మూసేయాలని నాకు అనిపించట్లేదు.", extra: ["not"] },
    { en: "I think it's useful because the buses come on time.", te: "బస్సులు టైమ్‌కి వస్తాయి కాబట్టి అది ఉపయోగంగా ఉందని నా ఉద్దేశం.", extra: ["comes"] },
    { en: "I don't think it's a waste of money.", te: "అది డబ్బు వృథా అని నాకు అనిపించట్లేదు.", extra: ["not"] },
    { en: "Many people think the new shelter is too small.", te: "కొత్త షెల్టర్ మరీ చిన్నగా ఉందని చాలామంది అనుకుంటున్నారు.", extra: ["thinks"] },
    { en: "My neighbour Suresh thinks the market is too crowded now.", te: "ఇప్పుడు మార్కెట్ మరీ రద్దీగా ఉందని మా పక్కింటి సురేష్ గారు అనుకుంటున్నారు.", extra: ["think"] },
    { en: "I think we should ask the municipal office for a bigger shelter.", te: "పెద్ద షెల్టర్ కోసం మున్సిపల్ ఆఫీసుని అడగాలని నా ఉద్దేశం.", extra: ["asking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one new thing in your area: a road, a shop or a bus. Say aloud: I think it's … because …",
    te: "మీ ఏరియాలో కొత్తగా వచ్చిన ఒక దాన్ని గుర్తు చేసుకోండి: రోడ్డు, షాపు, బస్సు. గట్టిగా చెప్పండి: I think it's … because …",
  },
  words: [
    { en: "I think", te: "నాకు అనిపిస్తోంది, నా ఉద్దేశంలో" },
    { en: "I don't think", te: "నాకు అలా అనిపించట్లేదు" },
    { en: "useful", te: "ఉపయోగకరమైన, పనికొచ్చే" },
    { en: "waste of money", te: "డబ్బు వృథా" },
    { en: "shelter", te: "షెల్టర్, ఎండా వానల నుంచి నీడ" },
  ],
  grammar: ["connectors", "present-simple", "should-must-have-to", "politeness-softening"],
  topics: ["neighbours", "transport", "market"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Giving your opinion", te: "మీ అభిప్రాయం చెప్పడం" },
      body: {
        en: "To give your opinion, start with I think. Then give the reason with because. If your opinion is a no, say I don't think.",
        te: "అభిప్రాయం చెప్పాలంటే I think తో మొదలుపెట్టి, కారణం because తో చెప్పండి. 'కాదు' అనిపిస్తే I don't think అనండి.",
      },
      bridge: {
        te: ["కొత్త బస్ స్టాండ్", "ఉపయోగంగా ఉందని", "నాకు అనిపిస్తోంది"],
        en: [
          { text: "I", role: "who" },
          { text: "think", role: "action" },
          { text: "the new bus stand is useful", role: "what" },
        ],
      },
      examples: [
        { en: "I think the new bus stand is very useful.", te: "కొత్త బస్ స్టాండ్ చాలా ఉపయోగంగా ఉందని నాకు అనిపిస్తోంది." },
        { en: "I don't think the market should close at eight.", te: "మార్కెట్ ఎనిమిదింటికే మూసేయాలని నాకు అనిపించట్లేదు." },
        { en: "I think it's useful because the buses come on time.", te: "బస్సులు టైమ్‌కి వస్తాయి కాబట్టి అది ఉపయోగంగా ఉందని నా ఉద్దేశం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Yes, no, and why", te: "అవును, కాదు, ఎందుకు" },
      items: [
        {
          form: "I think …",
          useFor: { en: "Say what you believe.", te: "మీకు ఏమనిపిస్తోందో చెప్పడానికి." },
          example: { en: "I think the new bus stand is very useful.", te: "కొత్త బస్ స్టాండ్ చాలా ఉపయోగంగా ఉందని నాకు అనిపిస్తోంది." },
        },
        {
          form: "I don't think …",
          useFor: { en: "Say you believe it is not so. Put don't with think.", te: "అలా కాదని అనిపిస్తే. don't ని think తోనే పెట్టండి." },
          example: { en: "I don't think it's a waste of money.", te: "అది డబ్బు వృథా అని నాకు అనిపించట్లేదు." },
        },
        {
          form: "… because …",
          useFor: { en: "Give the reason after your opinion.", te: "అభిప్రాయం తర్వాత కారణం చెప్పడానికి." },
          example: { en: "I think it's useful because the buses come on time.", te: "బస్సులు టైమ్‌కి వస్తాయి కాబట్టి అది ఉపయోగంగా ఉందని నా ఉద్దేశం." },
        },
        {
          form: "He thinks … / She thinks …",
          useFor: { en: "Another person's opinion. Think takes s.", te: "ఇంకొకరి అభిప్రాయం. think కి s వస్తుంది." },
          example: { en: "My neighbour Suresh thinks the market is too crowded now.", te: "ఇప్పుడు మార్కెట్ మరీ రద్దీగా ఉందని మా పక్కింటి సురేష్ గారు అనుకుంటున్నారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am thinking the bus stand is useful.",
      right: "I think the bus stand is useful.",
      why: {
        en: "For an opinion, think never takes -ing; Telugu అనిపిస్తోంది sounds like -ing, but English does not.",
        te: "అభిప్రాయానికి think కి -ing రాదు; తెలుగులో 'అనిపిస్తోంది' లా ఉన్నా, ఇంగ్లీష్‌లో I think చాలు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Suresh think the market is too crowded.",
      right: "Suresh thinks the market is too crowded.",
      why: {
        en: "For one person, like he or she, the verb takes s, so think becomes thinks.",
        te: "ఒక్కరైతే (he, she లాగా) verb కి s వస్తుంది; think కాదు, thinks.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend Padma likes the new bus stand. Tell another friend her opinion.",
        te: "మీ స్నేహితురాలు పద్మ గారికి కొత్త బస్ స్టాండ్ నచ్చింది. ఆవిడ అభిప్రాయం ఇంకో స్నేహితులకి చెప్పండి.",
      },
      options: ["Padma thinks the new bus stand is useful.", "Padma think the new bus stand is useful.", "Padma is thinking the new bus stand is useful."],
      answer: 0,
      why: {
        en: "One person, like she, takes thinks with s; an opinion never takes -ing.",
        te: "ఒక్కరైతే (she లాగా) thinks, s తో; అభిప్రాయానికి -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I think the new bus stand is useful ___ the buses come on time.",
      te: "బస్సులు టైమ్‌కి వస్తాయి కాబట్టి కొత్త బస్ స్టాండ్ ఉపయోగంగా ఉందని నా ఉద్దేశం.",
      options: ["because", "so", "but"],
      answer: 0,
      why: {
        en: "Because brings the reason. Telugu says కాబట్టి after the reason, but English says because before it.",
        te: "కారణం చెప్పడానికి because. తెలుగులో కాబట్టి కారణం తర్వాత వస్తుంది; ఇంగ్లీష్‌లో because కారణానికి ముందు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "You feel the new shelter cost too much. Say it softly to a friend.",
        te: "కొత్త షెల్టర్‌కి మరీ ఎక్కువ ఖర్చు పెట్టారని మీకు అనిపిస్తోంది. స్నేహితులకి మెత్తగా చెప్పండి.",
      },
      options: ["I think it was a waste of money.", "I think it was waste of money.", "I think it was a waste of moneys."],
      answer: 0,
      why: {
        en: "A waste of money always takes a, and money never takes s.",
        te: "a waste of money అనే అంటారు, a తప్పకుండా కావాలి; money కి s రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I don't think the market should closes at eight.",
      wrongIndex: 6,
      fix: "I don't think the market should close at eight.",
      why: {
        en: "After should, the verb stays plain, with no s.",
        te: "should తర్వాత verb మామూలుగానే వస్తుంది; s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend at the tea stall asks about the new bus stand. Say you like it, and give a reason.",
        te: "టీ కొట్టు దగ్గర ఒక స్నేహితులు కొత్త బస్ స్టాండ్ గురించి అడుగుతున్నారు. మీకు నచ్చిందని చెప్పి, కారణం చెప్పండి.",
      },
      expected: [
        "I think it's very useful because the buses come on time.",
        "I think the new bus stand is very useful.",
        "I think it's useful because it's very clean.",
        "I think it's very useful.",
      ],
      options: [
        "I think it's very useful because the buses come on time.",
        "I am thinking it's very useful because the buses come on time.",
        "I think it's very useful so the buses come on time.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour says the market should close at eight. You feel it should stay open later. Say so politely.",
        te: "మార్కెట్ ఎనిమిదింటికే మూసేయాలని పక్కింటివారు అంటున్నారు. ఇంకా ఆలస్యంగా మూయాలని మీకు అనిపిస్తోంది. మర్యాదగా చెప్పండి.",
      },
      expected: [
        "I don't think it should close at eight.",
        "I don't think the market should close at eight.",
        "I don't think so. It should stay open till ten.",
      ],
      options: ["I don't think it should close at eight.", "I am not thinking it should close at eight.", "No! You are wrong about the market."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Talk at the tea stall", te: "టీ కొట్టు దగ్గర కబుర్లు" },
    scene: {
      en: "You stop for tea in the morning. Narayana, the tea stall owner, wants to know what you think of the new bus stand.",
      te: "పొద్దున టీ కోసం ఆగారు. టీ కొట్టు యజమాని నారాయణ గారు కొత్త బస్ స్టాండ్ గురించి మీ అభిప్రాయం అడుగుతున్నారు.",
    },
    partner: { en: "Narayana (the tea stall owner)", te: "నారాయణ (టీ కొట్టు యజమాని)" },
    voice: "b",
    skills: [
      { id: "opinion", label: { en: "Giving an opinion", te: "అభిప్రాయం చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Your usual tea? Have you seen the new bus stand?",
        te: "నమస్కారం! ఎప్పటిలాగే టీనా? కొత్త బస్ స్టాండ్ చూశారా?",
        hint: { en: "Say yes to the tea, and say you saw it yesterday.", te: "టీకి సరే అని, నిన్న చూశానని చెప్పండి." },
        replies: [
          { say: "Yes, please. I saw it yesterday.", good: true, skill: "polite" },
          { say: "Yes, please. I have seen it yesterday.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "So, what do you think of it?",
        te: "మరి, మీకేమనిపించింది?",
        hint: { en: "Say you think it is very useful, and give a reason.", te: "చాలా ఉపయోగంగా ఉందని చెప్పి, కారణం చెప్పండి." },
        replies: [
          { say: "I think it's very useful because the buses come on time.", good: true, skill: "opinion" },
          { say: "I am thinking it's very useful.", good: false, skill: "opinion", fixIt: "state-ing" },
        ],
      },
      {
        partner: "But the shelter is too small. People stand in the sun.",
        te: "కానీ షెల్టర్ మరీ చిన్నది. జనం ఎండలో నిలబడుతున్నారు.",
        hint: { en: "Agree, and say the town should make it bigger.", te: "ఒప్పుకుని, దాన్ని పెద్దది చేయాలని చెప్పండి." },
        replies: [
          { say: "Yes, I think they should make it bigger.", good: true, skill: "opinion" },
          { say: "Yes, I think they should to make it bigger.", good: false, skill: "opinion" },
          {
            say: "That's not my problem. Just give me my tea.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Okay, okay. Here's your tea.", te: "ఓ! సరే, సరే. ఇదిగోండి మీ టీ." },
          },
        ],
      },
      {
        partner: "Here's your tea. Ten rupees, please.",
        te: "ఇదిగోండి టీ. పది రూపాయలు.",
        hint: { en: "Pay, thank him, and say you will see him tomorrow.", te: "డబ్బులిచ్చి, థాంక్స్ చెప్పి, రేపు కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Here you are. Thank you. See you tomorrow!", good: true, skill: "polite" },
          { say: "Here you are. Thank you. See you on tomorrow!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
