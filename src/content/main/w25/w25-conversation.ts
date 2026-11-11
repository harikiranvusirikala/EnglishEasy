import type { ConversationDay } from "../../types";

/** Week 25, Day 6 (CURRICULUM §4): Conversation Day at a wedding — weather talk with guests, and changing plans because of rain. */
export const day: ConversationDay = {
  id: "w25-conversation",
  kind: "conversation",
  title: { en: "Rain on the Wedding Day", te: "పెళ్లి రోజు వర్షం" },
  summary: {
    en: "Use the whole week: talk about the weather with guests at a wedding, and change a plan because of the rain.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పెళ్లిలో అతిథులతో వాతావరణం గురించి మాట్లాడండి, వర్షం వల్ల ప్లాన్ మార్చుకోండి.",
  },
  topics: ["weather", "festivals"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At a wedding in Guntur", te: "గుంటూరులో ఒక పెళ్లిలో" },
    lines: [
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Hello, Ramesh! The decorations look beautiful.", te: "హలో రమేష్ గారూ! అలంకరణలు చాలా అందంగా ఉన్నాయి." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Yes, but it's very humid this evening.", te: "అవును, కానీ ఈ సాయంత్రం చాలా ఉక్కగా ఉంది." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Look at those dark clouds. It's going to rain.", te: "ఆ నల్ల మబ్బులు చూడండి. వర్షం వచ్చేలా ఉంది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "The forecast said heavy rain tonight.", te: "ఈ రాత్రి భారీ వర్షం అని ఫోర్‌కాస్ట్‌లో చెప్పారు." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "But the dinner is outside, in the garden!", te: "కానీ భోజనాలు బయట, తోటలో పెట్టారు!" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Don't worry. I'll ask them to move the tables.", te: "కంగారు పడకండి. టేబుళ్ళు లోపలికి మార్చమని వాళ్ళకి చెప్తాను." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "I can hear thunder. Hurry, please!", te: "ఉరుము వినిపిస్తోంది. త్వరగా, ప్లీజ్!" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Done. The dinner is in the hall now.", te: "అయిపోయింది. భోజనాలు ఇప్పుడు హాల్‌లో." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Good. They say rain on a wedding day is lucky.", te: "మంచిది. పెళ్లి రోజు వర్షం పడితే మంచిదంటారు." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Then this couple will be very lucky!", te: "అయితే ఈ జంటకి బాగా కలిసొస్తుంది!" },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a wedding", "At a hospital", "At a bus stop"],
        answer: 0,
      },
      {
        prompt: { en: "What does Jyothi see in the sky?", te: "జ్యోతి ఆకాశంలో ఏం చూస్తున్నారు?" },
        options: ["Dark clouds", "A bright sun", "Lightning"],
        answer: 0,
      },
      {
        prompt: { en: "Where is the dinner at first?", te: "మొదట భోజనాలు ఎక్కడ పెట్టారు?" },
        options: ["In the garden", "In the hall", "At a hotel"],
        answer: 0,
      },
      {
        prompt: { en: "What does Ramesh do about the rain?", te: "వర్షం వస్తోందని రమేష్ ఏం చేస్తారు?" },
        options: ["He asks them to move the tables.", "He goes home early.", "He buys an umbrella."],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You see dark clouds over the wedding hall. Tell the guests.",
        te: "పెళ్లి హాల్ మీద నల్ల మబ్బులు కనిపిస్తున్నాయి. అతిథులకి చెప్పండి.",
      },
      expected: ["Look, it's going to rain.", "It's going to rain.", "Look at those clouds! It's going to rain."],
      options: ["Look, it's going to rain.", "Look, rain going to come.", "Look, it will raining."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "An old guest is tired after the wedding. Tell her to rest.",
        te: "పెళ్లయ్యాక ఒక పెద్దావిడ అలసిపోయారు. విశ్రాంతి తీసుకోమని చెప్పండి.",
      },
      expected: ["Please get some rest.", "Please rest well.", "Please go and rest."],
      options: ["Please get some rest.", "Please take rest.", "Please taking rest."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "A guest asks if it will rain at tomorrow's lunch. Say you don't think so.",
        te: "రేపటి భోజనాల సమయంలో వర్షం పడుతుందా అని ఒక అతిథి అడుగుతున్నారు. పడదని అనిపిస్తోందని చెప్పండి.",
      },
      expected: ["I don't think it will rain.", "No, I don't think so.", "I don't think it will rain tomorrow."],
      options: ["I don't think it will rain.", "I am not thinking it will rain.", "I think it won't raining."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Weather talk with a guest", te: "అతిథితో వాతావరణం కబుర్లు" },
      scene: {
        en: "You are at your cousin's wedding. Grace, a guest, starts talking to you.",
        te: "మీరు మీ కజిన్ పెళ్లిలో ఉన్నారు. గ్రేస్ అనే అతిథి మీతో మాట్లాడుతున్నారు.",
      },
      partner: { en: "Grace (wedding guest)", te: "గ్రేస్ (పెళ్లికి వచ్చిన అతిథి)" },
      skills: [
        { id: "weather", label: { en: "Weather talk", te: "వాతావరణం కబుర్లు" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Are you from the bride's side?",
          te: "హలో! మీరు పెళ్లికూతురు వైపు వాళ్ళా?",
          hint: { en: "Say yes: the bride is your cousin.", te: "అవునని చెప్పండి: పెళ్లికూతురు మీ కజిన్." },
          replies: [
            { say: "Yes, the bride is my cousin.", good: true, skill: "polite" },
            { say: "Yes, bride is my cousin.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
        {
          partner: "It's so humid today. I'm sweating!",
          te: "ఈ రోజు చాలా ఉక్కగా ఉంది. చెమటలు పడుతున్నాయి!",
          hint: { en: "Agree, and say the night will be cooler.", te: "ఒప్పుకుని, రాత్రికి చల్లబడుతుందని చెప్పండి." },
          replies: [
            { say: "Yes. I think it will be cooler tonight.", good: true, skill: "weather" },
            { say: "Yes. I think it will be more cooler tonight.", good: false, skill: "weather" },
          ],
        },
        {
          partner: "Where do you live? Is it hot there too?",
          te: "మీరు ఎక్కడ ఉంటారు? అక్కడ కూడా వేడిగా ఉందా?",
          hint: { en: "Name your own town, and say what the weather is like there.", te: "మీ ఊరి పేరు చెప్పి, అక్కడ వాతావరణం ఎలా ఉందో చెప్పండి." },
          replies: [
            { say: "I live in Warangal. It's very hot there too.", good: true, skill: "weather" },
            { say: "I live in Warangal. There also very hot.", good: false, skill: "weather", fixIt: "be" },
          ],
        },
        {
          partner: "Oh, look! The rain is starting.",
          te: "అయ్యో, చూడండి! వర్షం మొదలవుతోంది.",
          hint: { en: "Offer to share your umbrella with her.", te: "మీ గొడుగులో రమ్మని ఆవిడకి చెప్పండి." },
          replies: [
            { say: "Come, I'll share my umbrella with you.", good: true, skill: "polite" },
            { say: "Come, I'll sharing my umbrella with you.", good: false, skill: "polite" },
            {
              say: "Not my problem. Run fast!",
              good: false,
              skill: "polite",
              react: { en: "Oh! Okay, I'll run, then.", te: "ఓ! సరే, పరిగెత్తుతాను." },
            },
          ],
        },
        {
          partner: "Thank you! That's very kind of you.",
          te: "థాంక్యూ! మీరు చాలా మంచివారు.",
          hint: { en: "Answer her thanks, and show her the way to the hall.", te: "థాంక్స్‌కి జవాబిచ్చి, హాల్‌కి దారి చూపించండి." },
          replies: [
            { say: "You're welcome. Come, the hall is this way.", good: true, skill: "polite" },
            { say: "You're welcome. Come, hall is this way.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A plan and the rain", te: "ప్లాన్, వర్షం" },
      scene: {
        en: "The morning after the wedding, your friend Krishna calls. You planned to visit the temple today, but it is raining hard.",
        te: "పెళ్లి తర్వాతి రోజు ఉదయం మీ స్నేహితులు కృష్ణ ఫోన్ చేశారు. ఈ రోజు గుడికి వెళ్ళాలనుకున్నారు, కానీ వర్షం బాగా పడుతోంది.",
      },
      partner: { en: "Krishna (friend)", te: "కృష్ణ (స్నేహితులు)" },
      voice: "b",
      skills: [
        { id: "weather", label: { en: "Weather talk", te: "వాతావరణం కబుర్లు" } },
        { id: "plan", label: { en: "Changing plans", te: "ప్లాన్ మార్చడం" } },
      ],
      turns: [
        {
          partner: "Good morning! Are we still going to the temple today?",
          te: "నమస్కారం! ఈ రోజు గుడికి వెళ్తున్నాం కదా?",
          hint: { en: "Tell him about the rain right now.", te: "ఇప్పుడు వర్షం పడుతోందని చెప్పండి." },
          replies: [
            { say: "It's raining very hard now.", good: true, skill: "weather" },
            { say: "It's raining very hardly now.", good: false, skill: "weather" },
          ],
        },
        {
          partner: "Oh no. What does the forecast say?",
          te: "అయ్యో. ఫోర్‌కాస్ట్‌లో ఏం చెప్తున్నారు?",
          hint: { en: "Say the forecast is rain all day today.", te: "ఈ రోజంతా వర్షం అని ఫోర్‌కాస్ట్‌లో ఉందని చెప్పండి." },
          replies: [
            { say: "It says it will rain all day.", good: true, skill: "weather" },
            { say: "It say it will rain all day.", good: false, skill: "weather", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Then can we go tomorrow?",
          te: "అయితే రేపు వెళ్దామా?",
          hint: { en: "Say yes, and give your guess about tomorrow's weather.", te: "సరే అని, రేపు వాతావరణం ఎలా ఉంటుందో మీ ఊహ చెప్పండి." },
          replies: [
            { say: "Yes. I think tomorrow will be sunny.", good: true, skill: "plan" },
            { say: "Yes. I think tomorrow will sunny.", good: false, skill: "plan", fixIt: "be" },
            {
              say: "Ask me later. I'm busy now.",
              good: false,
              skill: "plan",
              react: { en: "Oh, sorry! I'll call you later.", te: "అయ్యో, సారీ! తర్వాత ఫోన్ చేస్తాను." },
            },
          ],
        },
        {
          partner: "Okay. I'll pick you up at seven.",
          te: "సరే. ఏడింటికి మిమ్మల్ని పికప్ చేసుకుంటాను.",
          hint: { en: "Agree, and say goodbye.", te: "సరే అని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Okay, see you tomorrow at seven.", good: true, skill: "plan" },
            { say: "Okay, see you tomorrow on seven.", good: false, skill: "plan", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};
