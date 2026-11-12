import type { Lesson } from "../../types";

/** Week 72, Day 2 (CURRICULUM §5): might / may for things that are possible — It might rain later, so take an umbrella. */
export const day: Lesson = {
  id: "it-might-rain-later-plans",
  kind: "lesson",
  title: { en: "It Might Rain Later", te: "వర్షం పడొచ్చు" },
  subtitle: "It might … / It may …",
  summary: {
    en: "Learn to talk about things that are possible: It might rain later, so take an umbrella.",
    te: "జరగొచ్చు అనిపించే వాటి గురించి చెప్పడం నేర్చుకుందాం: It might rain later, so take an umbrella.",
  },
  seo: {
    title: "Might and May in English for Telugu Speakers",
    description:
      "Say It might rain later and The train may be late. Simple lessons for Telugu speakers on talking about things that are possible.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "might rain", role: "action" },
    { text: "later", role: "when" },
  ],
  core: [
    { en: "It might rain later, so take an umbrella.", te: "తర్వాత వర్షం పడొచ్చు, కాబట్టి గొడుగు తీసుకెళ్ళండి.", extra: ["rains"] },
    { en: "The train may be late because of the fog.", te: "పొగమంచు వల్ల రైలు ఆలస్యం కావచ్చు.", extra: ["for"] },
    { en: "The temple might be crowded on Saturday.", te: "శనివారం గుడి దగ్గర రద్దీగా ఉండొచ్చు.", extra: ["in"] },
    { en: "We may get a seat if we leave early.", te: "తొందరగా బయలుదేరితే మనకి సీటు దొరకొచ్చు.", extra: ["will"] },
    { en: "Take a shawl, just in case. It might get cold.", te: "ఎందుకైనా మంచిది, శాలువా తీసుకెళ్ళండి. చలిగా ఉండొచ్చు.", extra: ["gets"] },
    { en: "There's a chance of rain in the afternoon.", te: "మధ్యాహ్నం వర్షం పడే అవకాశం ఉంది.", extra: ["on"] },
    { en: "The roads might be slippery after the rain.", te: "వర్షం తర్వాత రోడ్లు జారుడుగా ఉండొచ్చు.", extra: ["slip"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at the sky, or the weather on your phone. Say one sentence with It might …",
    te: "ఆకాశం గానీ ఫోన్‌లో వాతావరణం గానీ చూడండి. It might … తో ఒక వాక్యం చెప్పండి.",
  },
  words: [
    { en: "might", te: "…వచ్చు (జరిగే అవకాశం ఉంది)" },
    { en: "fog", te: "పొగమంచు" },
    { en: "just in case", te: "ఎందుకైనా మంచిది" },
    { en: "chance of rain", te: "వర్షం పడే అవకాశం" },
    { en: "slippery", te: "జారుడుగా" },
  ],
  grammar: ["might-may", "will", "conditionals"],
  topics: ["weather", "travel", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Might and may: it is possible", te: "might, may: జరగొచ్చు" },
      body: {
        en: "Use might or may for something that is possible, but not sure. The verb after them stays plain: It might rain.",
        te: "జరగొచ్చు, కానీ ఖచ్చితం కాదు అనిపిస్తే might లేదా may వాడండి. వాటి తర్వాత verb మారదు: It might rain (వర్షం పడొచ్చు).",
      },
      bridge: {
        te: ["తర్వాత", "వర్షం", "పడొచ్చు"],
        en: [
          { text: "It", role: "who" },
          { text: "might rain", role: "action" },
          { text: "later", role: "when" },
        ],
      },
      examples: [
        { en: "It might rain later, so take an umbrella.", te: "తర్వాత వర్షం పడొచ్చు, కాబట్టి గొడుగు తీసుకెళ్ళండి." },
        { en: "The train may be late because of the fog.", te: "పొగమంచు వల్ల రైలు ఆలస్యం కావచ్చు." },
        { en: "The temple might be crowded on Saturday.", te: "శనివారం గుడి దగ్గర రద్దీగా ఉండొచ్చు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Will or might?", te: "will ఆ, might ఆ?" },
      items: [
        {
          form: "It will …",
          useFor: { en: "You are sure it will happen.", te: "ఖచ్చితంగా జరుగుతుంది అనుకున్నప్పుడు." },
          example: { en: "The forecast says it will rain all day.", te: "రోజంతా వర్షం పడుతుందని forecast చెప్తోంది." },
        },
        {
          form: "It might … or It may …",
          useFor: { en: "It is possible, but not sure.", te: "జరగొచ్చు, కానీ ఖచ్చితం కాదు." },
          example: { en: "It might rain this evening.", te: "ఈ సాయంత్రం వర్షం పడొచ్చు." },
        },
        {
          form: "… just in case",
          useFor: { en: "Get ready now for a problem that might come.", te: "రాబోయే ఇబ్బంది కోసం ముందే జాగ్రత్త పడటానికి." },
          example: { en: "Take a torch, just in case.", te: "ఎందుకైనా మంచిది, టార్చ్ తీసుకెళ్ళండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "It might rains later.",
      right: "It might rain later.",
      why: {
        en: "After might or may, the verb takes no s, even with it.",
        te: "might, may తర్వాత verb కి s రాదు, it తో కూడా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "It may be rain today.",
      right: "It may rain today.",
      why: {
        en: "Rain is the action here, so be is not needed; Telugu పడొచ్చు is one verb.",
        te: "ఇక్కడ rain అనేదే పని, అందుకే be అక్కర్లేదు; తెలుగు 'పడొచ్చు' లాగే ఒక్క verb.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Your neighbour is going out, and the sky is cloudy. Give advice.",
        te: "పక్కింటివారు బయటికి వెళ్తున్నారు, ఆకాశం మబ్బుగా ఉంది. సలహా ఇవ్వండి.",
      },
      options: ["It might rain, so take an umbrella.", "It might rain, so take umbrella.", "It might raining, so take an umbrella."],
      answer: 0,
      why: {
        en: "One umbrella needs an, and might takes the plain verb; Telugu has no word like an.",
        te: "ఒక గొడుగు కాబట్టి an కావాలి; might తర్వాత verb మారదు. తెలుగులో an లాంటి పదం లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The train may ___ late because of the fog.",
      te: "పొగమంచు వల్ల రైలు ఆలస్యం కావచ్చు.",
      options: ["be", "is", "to be"],
      answer: 0,
      why: {
        en: "After may, use the plain verb be, never is or to be.",
        te: "may తర్వాత verb అలాగే వస్తుంది: be; is గానీ to be గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Weather Alert",
      lines: [
        "Heavy rain is likely in Guntur district tonight.",
        "Strong winds may blow near the coast.",
        "Fishermen should not go to sea for two days.",
        "Please stay indoors if possible.",
      ],
      prompt: { en: "You got this SMS. What might happen near the coast?", te: "మీకు ఈ SMS వచ్చింది. సముద్ర తీరం దగ్గర ఏం జరగొచ్చు?" },
      options: ["Strong winds", "A heat wave", "Fog in the morning"],
      answer: 0,
      why: {
        en: "The second line says the wind may be strong by the sea.",
        te: "రెండో లైన్‌లో సముద్రం దగ్గర గట్టిగా గాలులు వీయొచ్చని ఉంది.",
      },
      say: "Strong winds may blow near the coast.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "The bus might be two hour late today.",
      wrongIndex: 5,
      fix: "The bus might be two hours late today.",
      why: {
        en: "After two, hour takes s; Telugu గంటలు also shows more than one.",
        te: "రెండు తర్వాత hour కి s వస్తుంది; తెలుగులో కూడా 'గంట' కాదు, 'గంటలు' అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend wants to go out now, but dark clouds are coming. Warn her kindly.",
        te: "స్నేహితురాలు ఇప్పుడు బయటికి వెళ్ళాలనుకుంటున్నారు, కానీ నల్ల మబ్బులు వస్తున్నాయి. ఆవిడని మర్యాదగా హెచ్చరించండి.",
      },
      expected: ["It might rain, so take an umbrella.", "It might rain later.", "It may rain. Take an umbrella, just in case."],
      options: ["It might rain, so take an umbrella.", "It might rains, so take an umbrella.", "It is might rain, so take an umbrella."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You are going to the station tomorrow. Ask your friend if the train will be late.",
        te: "రేపు మీరు స్టేషన్‌కి వెళ్తున్నారు. రైలు ఆలస్యం అవుతుందా అని స్నేహితుల్ని అడగండి.",
      },
      expected: ["Do you think the train will be late?", "Will the train be late tomorrow?", "Will the train be late?"],
      options: ["Do you think the train will be late?", "You think the train will be late?", "Do you think the train will late?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A temple visit", te: "గుడికి వెళ్దాం" },
    scene: {
      en: "Your neighbour Usha wants to visit the Kanaka Durga temple with you on Saturday morning.",
      te: "మీ పక్కింటి ఉష గారు శనివారం పొద్దున మీతో కలిసి కనకదుర్గ గుడికి వెళ్ళాలనుకుంటున్నారు.",
    },
    partner: { en: "Usha (your neighbour)", te: "ఉష (మీ పక్కింటావిడ)" },
    skills: [
      { id: "possible", label: { en: "Saying what might happen", te: "జరగొచ్చు అని చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Shall we go to the Durga temple on Saturday?",
        te: "నమస్తే! శనివారం దుర్గ గుడికి వెళ్దామా?",
        hint: { en: "Say yes, but warn her there could be a big crowd that day.", te: "సరే అని, కానీ ఆ రోజు బాగా రద్దీ ఉండొచ్చని చెప్పండి." },
        replies: [
          { say: "Yes, let's go. But it might be crowded on Saturday.", good: true, skill: "possible" },
          { say: "Yes, let's go. But it might crowded on Saturday.", good: false, skill: "possible", fixIt: "be" },
        ],
      },
      {
        partner: "True. What time shall we leave?",
        te: "నిజమే. ఎన్ని గంటలకి బయలుదేరుదాం?",
        hint: { en: "Suggest six; say you may find seats on the bus then.", te: "ఆరింటికి అని సూచించి, అప్పుడైతే బస్సులో సీట్లు దొరకొచ్చని చెప్పండి." },
        replies: [
          { say: "Let's leave at six. We may get seats on the bus.", good: true, skill: "possible" },
          {
            say: "Six. And don't be late like last time.",
            good: false,
            skill: "polite",
            react: { en: "Late? That was only once! Okay, six.", te: "ఆలస్యమా? ఒక్కసారే కదండీ! సరే, ఆరు." },
          },
        ],
      },
      {
        partner: "Good idea. The forecast says showers in the afternoon.",
        te: "మంచి ఆలోచన. మధ్యాహ్నం జల్లులు పడతాయని forecast చెప్తోంది.",
        hint: { en: "Say rain is possible, and suggest carrying an umbrella to be safe.", te: "వర్షం పడొచ్చని చెప్పి, ఎందుకైనా మంచిదని గొడుగు తీసుకెళ్దామని సూచించండి." },
        replies: [
          { say: "Then it might rain later. Let's take an umbrella, just in case.", good: true, skill: "possible" },
          { say: "Then it might rain later. Let's take umbrella, just in case.", good: false, skill: "possible", fixIt: "article" },
        ],
      },
      {
        partner: "Okay! See you at six on Saturday.",
        te: "సరే! శనివారం ఆరింటికి కలుద్దాం.",
        hint: { en: "Agree, and say goodbye.", te: "ఒప్పుకుని, బై చెప్పండి." },
        replies: [
          { say: "Okay, see you on Saturday at six. Bye!", good: true, skill: "polite" },
          { say: "Okay, see you at Saturday at six. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
