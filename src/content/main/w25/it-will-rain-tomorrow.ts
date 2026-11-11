import type { Lesson } from "../../types";

/** Week 25, Day 2 (CURRICULUM §4): will for predictions — I think it will rain tomorrow. It won't be hot. */
export const day: Lesson = {
  id: "it-will-rain-tomorrow",
  kind: "lesson",
  title: { en: "It Will Rain Tomorrow", te: "రేపు వర్షం పడుతుంది" },
  subtitle: "will for predictions",
  summary: {
    en: "Learn to say what the weather will be: I think it will rain tomorrow. It won't be hot this week.",
    te: "వాతావరణం ఎలా ఉంటుందో చెప్పడం నేర్చుకుందాం: I think it will rain tomorrow. It won't be hot this week.",
  },
  seo: {
    title: "Will for Weather Predictions in English for Telugu Speakers",
    description:
      "Say I think it will rain tomorrow and It won't be hot this week. Simple lessons for Telugu speakers on the weather forecast.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "will rain", role: "action" },
    { text: "tomorrow", role: "when" },
  ],
  core: [
    { en: "I think it will rain tomorrow.", te: "రేపు వర్షం పడుతుందని నాకు అనిపిస్తోంది.", extra: ["raining"] },
    { en: "It won't be hot this week.", te: "ఈ వారం వేడిగా ఉండదు.", extra: ["being"] },
    { en: "The forecast says heavy rain on Friday.", te: "శుక్రవారం భారీ వర్షం పడుతుందని ఫోర్‌కాస్ట్‌లో చెప్తున్నారు.", extra: ["say"] },
    { en: "Will it be sunny on Sunday?", te: "ఆదివారం ఎండగా ఉంటుందా?", extra: ["Is"] },
    { en: "The temperature will be forty degrees today.", te: "ఈ రోజు టెంపరేచర్ నలభై డిగ్రీలు ఉంటుంది.", extra: ["degree"] },
    { en: "I don't think it will rain today.", te: "ఈ రోజు వర్షం పడుతుందని నాకు అనిపించడం లేదు.", extra: ["won't"] },
    { en: "It will be cooler in the evening.", te: "సాయంత్రం కొంచెం చల్లగా ఉంటుంది.", extra: ["more"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Check the weather on TV or your phone, and say: I think it will …",
    te: "TV లో లేదా ఫోన్‌లో వాతావరణం చూసి చెప్పండి: I think it will …",
  },
  words: [
    { en: "forecast", te: "వాతావరణ సూచన, ఫోర్‌కాస్ట్" },
    { en: "temperature", te: "టెంపరేచర్, ఉష్ణోగ్రత" },
    { en: "degrees", te: "డిగ్రీలు" },
    { en: "heavy rain", te: "భారీ వర్షం" },
    { en: "light rain", te: "చిన్న వర్షం, జల్లులు" },
  ],
  grammar: ["will"],
  topics: ["weather"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying what will happen", te: "ఏం జరుగుతుందో చెప్పడం" },
      body: {
        en: "To guess the weather, use will: It will rain. It will be hot. Start with I think to sound soft. For no, say won't: It won't rain. After will, the verb stays plain.",
        te: "వాతావరణం ఎలా ఉంటుందో ఊహించి చెప్పడానికి will: It will rain. I think తో మొదలుపెడితే మెత్తగా ఉంటుంది. 'ఉండదు, పడదు' అంటే won't: It won't rain.",
      },
      bridge: {
        te: ["రేపు", "వర్షం పడుతుంది"],
        en: [
          { text: "It", role: "who" },
          { text: "will rain", role: "action" },
          { text: "tomorrow", role: "when" },
        ],
      },
      examples: [
        { en: "I think it will rain tomorrow.", te: "రేపు వర్షం పడుతుందని నాకు అనిపిస్తోంది." },
        { en: "It won't be hot this week.", te: "ఈ వారం వేడిగా ఉండదు." },
        { en: "Will it be sunny on Sunday?", te: "ఆదివారం ఎండగా ఉంటుందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Sure, or only a guess?", te: "ఖచ్చితమా, ఊహా?" },
      items: [
        {
          form: "It will …",
          useFor: { en: "You are quite sure.", te: "మీకు దాదాపు ఖచ్చితంగా తెలుసు." },
          example: { en: "The temperature will be forty degrees today.", te: "ఈ రోజు టెంపరేచర్ నలభై డిగ్రీలు ఉంటుంది." },
        },
        {
          form: "I think it will …",
          useFor: { en: "Your guess, said softly.", te: "మీ ఊహ, మెత్తగా చెప్పడం." },
          example: { en: "I think it will rain tomorrow.", te: "రేపు వర్షం పడుతుందని నాకు అనిపిస్తోంది." },
        },
        {
          form: "I don't think it will …",
          useFor: { en: "Your guess that it will not happen.", te: "జరగదని మీ ఊహ." },
          example: { en: "I don't think it will rain today.", te: "ఈ రోజు వర్షం పడుతుందని నాకు అనిపించడం లేదు." },
        },
        {
          form: "The forecast says …",
          useFor: { en: "What the TV or your phone says.", te: "TV లో, ఫోన్‌లో చెప్పింది." },
          example: { en: "The forecast says heavy rain on Friday.", te: "శుక్రవారం భారీ వర్షం పడుతుందని ఫోర్‌కాస్ట్‌లో చెప్తున్నారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am thinking it will rain.",
      right: "I think it will rain.",
      why: {
        en: "For an opinion, think takes no -ing, even though Telugu says అనుకుంటున్నాను.",
        te: "అభిప్రాయం చెప్పేటప్పుడు think కి -ing రాదు, తెలుగులో 'అనుకుంటున్నాను' అన్నా కూడా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Tomorrow it will raining.",
      right: "Tomorrow it will rain.",
      why: {
        en: "After will, the verb stays plain, with no -ing at the end.",
        te: "will తర్వాత verb మారదు; చివర -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Say your guess: rain tomorrow.", te: "మీ ఊహ చెప్పండి: రేపు వర్షం." },
      options: ["I think it will rain tomorrow.", "I think it will raining tomorrow.", "I think tomorrow rain will come."],
      answer: 0,
      why: {
        en: "Weather starts with it, and after will the verb stays plain.",
        te: "వాతావరణం it తో మొదలవుతుంది; will తర్వాత verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The forecast ___ heavy rain on Friday.",
      te: "శుక్రవారం భారీ వర్షం పడుతుందని ఫోర్‌కాస్ట్‌లో చెప్తున్నారు.",
      options: ["says", "say", "saying"],
      answer: 0,
      why: {
        en: "The forecast is one thing, like he or she, so the verb takes s.",
        te: "forecast ఒక్కటే, he లేదా she లాగా; అందుకే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "You think there will be no rain today. What do you say?", te: "ఈ రోజు వర్షం పడదని మీకు అనిపిస్తోంది. ఏమంటారు?" },
      options: ["I don't think it will rain today.", "I am not thinking it will rain today.", "I don't think it will raining today."],
      answer: 0,
      why: {
        en: "Think takes no -ing for an opinion, and will takes a plain verb.",
        te: "అభిప్రాయానికి think కి -ing రాదు; will తర్వాత verb మారదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "The temperature will be forty degree today.",
      wrongIndex: 5,
      fix: "The temperature will be forty degrees today.",
      why: {
        en: "Forty is more than one, so degree takes s.",
        te: "నలభై అంటే ఒకటి కంటే ఎక్కువ, అందుకే degree కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "A friend asks about tomorrow. Say you think it will rain.",
        te: "రేపు ఎలా ఉంటుందని స్నేహితులు అడుగుతున్నారు. వర్షం పడుతుందని అనిపిస్తోందని చెప్పండి.",
      },
      expected: ["I think it will rain tomorrow.", "I think it will rain."],
      options: ["I think it will rain tomorrow.", "I am thinking it will rain tomorrow.", "I think tomorrow will rain."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your friend if it will be sunny on Sunday.",
        te: "ఆదివారం ఎండగా ఉంటుందా అని మీ స్నేహితులని అడగండి.",
      },
      expected: ["Will it be sunny on Sunday?", "Will it be sunny this Sunday?"],
      options: ["Will it be sunny on Sunday?", "It will be sunny on Sunday?", "Is it will be sunny on Sunday?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A trip and the weather", te: "ప్రయాణం, వాతావరణం" },
    scene: {
      en: "Your friend Satish wants to go to Srisailam with you this weekend.",
      te: "మీ స్నేహితులు సతీష్ ఈ వారాంతం మీతో కలిసి శ్రీశైలం వెళ్ళాలనుకుంటున్నారు.",
    },
    partner: { en: "Satish (friend)", te: "సతీష్ (స్నేహితులు)" },
    voice: "b",
    skills: [{ id: "predict", label: { en: "Talking about tomorrow", te: "రాబోయే వాతావరణం" } }],
    turns: [
      {
        partner: "Are you free on Saturday? I'm going to Srisailam.",
        te: "శనివారం మీరు ఖాళీగా ఉన్నారా? నేను శ్రీశైలం వెళ్తున్నాను.",
        hint: { en: "Say yes, but ask about the weather that day.", te: "అవునని చెప్పి, ఆ రోజు వాతావరణం ఎలా ఉంటుందో అడగండి." },
        replies: [
          { say: "Yes, but what will the weather be like?", good: true, skill: "predict" },
          { say: "Yes, but how will be the weather?", good: false, skill: "predict", fixIt: "question" },
        ],
      },
      {
        partner: "The forecast says heavy rain on Saturday.",
        te: "శనివారం భారీ వర్షం అని ఫోర్‌కాస్ట్‌లో చెప్తున్నారు.",
        hint: { en: "Ask about the forecast for Sunday.", te: "ఆదివారం ఫోర్‌కాస్ట్ ఎలా ఉందో అడగండి." },
        replies: [
          { say: "What does it say for Sunday?", good: true, skill: "predict" },
          { say: "What it says for Sunday?", good: false, skill: "predict", fixIt: "question" },
        ],
      },
      {
        partner: "Sunday will be sunny, with light rain at night.",
        te: "ఆదివారం ఎండగా ఉంటుంది, రాత్రికి చిన్న వర్షం.",
        hint: { en: "Say Sunday is better, and that you'll come.", te: "ఆదివారం మంచిదని, మీరు వస్తారని చెప్పండి." },
        replies: [
          { say: "Then Sunday is better. I'll come.", good: true, skill: "predict" },
          { say: "Then Sunday is more better. I'll come.", good: false, skill: "predict" },
          {
            say: "Rain on Saturday? You never check anything!",
            good: false,
            skill: "predict",
            react: { en: "Sorry, sorry! I didn't check before.", te: "సారీ, సారీ! ముందు చూడలేదు." },
          },
        ],
      },
      {
        partner: "Great. I'll pick you up at six.",
        te: "మంచిది. ఆరింటికి మిమ్మల్ని పికప్ చేసుకుంటాను.",
        hint: { en: "Thank him, and say you will bring an umbrella.", te: "థాంక్స్ చెప్పి, గొడుగు తెస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll bring an umbrella.", good: true },
          { say: "Thank you. I'll bring umbrella.", good: false, fixIt: "article" },
        ],
      },
    ],
  },
};
