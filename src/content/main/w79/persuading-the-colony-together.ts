import type { Lesson } from "../../types";

/** Week 79, Day 5 (CURRICULUM §5): persuading a group — If we all give a little, we can fix the gate. It would help everyone if … */
export const day: Lesson = {
  id: "persuading-the-colony-together",
  kind: "lesson",
  title: { en: "Let's Do It Together", te: "కలిసి చేద్దాం" },
  subtitle: "If we all … / It would help everyone if …",
  summary: {
    en: "Learn to persuade your neighbours as a group: If we all give a little, we can fix the gate. It would help everyone if we planted trees here.",
    te: "కాలనీవాళ్ళని అందరినీ కలిపి ఒప్పించడం నేర్చుకుందాం: If we all give a little, we can fix the gate. It would help everyone if we planted trees here.",
  },
  seo: {
    title: "Persuading Neighbours Together in English for Telugu Speakers",
    description:
      "Say If we all give a little, we can fix the gate. Simple lessons for Telugu speakers on persuading the colony to work together.",
  },
  pattern: [
    { text: "If we all", role: "who" },
    { text: "give a little,", role: "action" },
    { text: "we can fix the gate", role: "what" },
  ],
  core: [
    { en: "If we all help, it will be easy.", te: "మనమందరం సాయం చేస్తే, పని తేలికగా అయిపోతుంది.", extra: ["helps"] },
    { en: "If we all give a little, we can fix the gate.", te: "అందరం తలా కొంచెం ఇస్తే, గేట్ బాగు చేయించొచ్చు.", extra: ["gives"] },
    { en: "It would help everyone if we planted trees here.", te: "ఇక్కడ చెట్లు నాటితే అందరికీ మేలు జరుగుతుంది.", extra: ["plant"] },
    { en: "Each of us can bring one sapling.", te: "మనలో ప్రతి ఒక్కరూ ఒక్కో మొక్క తేవచ్చు.", extra: ["saplings"] },
    { en: "Let's ask the secretary to call a meeting.", te: "మీటింగ్ పెట్టమని సెక్రటరీ గారిని అడుగుదాం.", extra: ["for"] },
    { en: "If we all work together, the colony will be cooler in summer.", te: "అందరం కలిసి పని చేస్తే, ఎండాకాలంలో కాలనీ చల్లగా ఉంటుంది.", extra: ["more"] },
    { en: "It would be nice if everyone joined on Sunday.", te: "ఆదివారం అందరూ వస్తే బాగుంటుంది.", extra: ["join"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one small thing your street needs. Say aloud how you would ask your neighbours: If we all …",
    te: "మీ వీధికి కావాల్సిన ఒక చిన్న పని గుర్తు చేసుకోండి. ఇరుగుపొరుగుని ఎలా అడుగుతారో గట్టిగా చెప్పండి: If we all …",
  },
  words: [
    { en: "if we all", te: "మనమందరం … చేస్తే" },
    { en: "it would help everyone", te: "అందరికీ మేలు జరుగుతుంది" },
    { en: "sapling", te: "మొక్క, చిన్న మొక్క" },
    { en: "contribute", te: "తలా కొంత ఇవ్వడం" },
    { en: "each of us", te: "మనలో ప్రతి ఒక్కరూ" },
  ],
  grammar: ["conditionals", "can-could", "articles"],
  topics: ["neighbours", "people", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Persuading a group", te: "అందరినీ ఒప్పించడం" },
      body: {
        en: "To persuade a group, say we, not you: If we all give a little, we can fix the gate. For a softer idea, say It would help everyone if we, with a past verb.",
        te: "అందరినీ ఒప్పించాలంటే you కాదు, we అనండి: If we all give a little, we can fix the gate. మెత్తగా చెప్పాలంటే It would help everyone if we తర్వాత verb past లో వాడండి.",
      },
      bridge: {
        te: ["అందరం", "తలా కొంచెం ఇస్తే,", "గేట్ బాగు చేయించొచ్చు"],
        en: [
          { text: "If we all", role: "who" },
          { text: "give a little,", role: "action" },
          { text: "we can fix the gate", role: "what" },
        ],
      },
      examples: [
        { en: "If we all help, it will be easy.", te: "మనమందరం సాయం చేస్తే, పని తేలికగా అయిపోతుంది." },
        { en: "If we all give a little, we can fix the gate.", te: "అందరం తలా కొంచెం ఇస్తే, గేట్ బాగు చేయించొచ్చు." },
        { en: "It would help everyone if we planted trees here.", te: "ఇక్కడ చెట్లు నాటితే అందరికీ మేలు జరుగుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "A real plan or an idea?", te: "నిజమైన ప్లానా, ఒక ఆలోచనా?" },
      items: [
        {
          form: "If we all + verb, we can …",
          useFor: { en: "A real plan that can happen soon.", te: "త్వరలో జరగగల నిజమైన ప్లాన్." },
          example: { en: "If we all contribute 200 rupees, we can fix the gate.", te: "అందరం తలా 200 రూపాయలు ఇస్తే, గేట్ బాగు చేయించొచ్చు." },
        },
        {
          form: "It would help everyone if we + past verb",
          useFor: { en: "A softer idea for the group to think about.", te: "అందరూ ఆలోచించడానికి ఒక మెత్తని సూచన." },
          example: { en: "It would help everyone if we planted trees here.", te: "ఇక్కడ చెట్లు నాటితే అందరికీ మేలు జరుగుతుంది." },
        },
        {
          form: "Each of us can …",
          useFor: { en: "Show the work is small for one person.", te: "ఒక్కొక్కరికీ పని కొంచెమేనని చూపించడానికి." },
          example: { en: "Each of us can bring one sapling.", te: "మనలో ప్రతి ఒక్కరూ ఒక్కో మొక్క తేవచ్చు." },
        },
        {
          form: "Let's ask …",
          useFor: { en: "Suggest the next step together.", te: "తర్వాతి అడుగు కలిసి వేద్దామని చెప్పడానికి." },
          example: { en: "Let's ask the secretary to call a meeting.", te: "మీటింగ్ పెట్టమని సెక్రటరీ గారిని అడుగుదాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The gate broken. We need a new one.",
      right: "The gate is broken. We need a new one.",
      why: {
        en: "Telugu గేట్ విరిగిపోయింది needs no extra word, but English needs is before broken.",
        te: "తెలుగులో 'గేట్ విరిగిపోయింది' అంటే చాలు; ఇంగ్లీష్‌లో broken ముందు is కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Our secretary agree with the plan.",
      right: "Our secretary agrees with the plan.",
      why: {
        en: "One person, like he or she, takes s on the verb: agrees, says, wants.",
        te: "ఒక్కరి గురించి (he, she లాగా) అయితే verb కి s వస్తుంది: agrees, says, wants.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "At the colony meeting, say that if everyone gives some money, you can repair the gate.",
        te: "కాలనీ మీటింగ్‌లో, అందరూ కొంచెం డబ్బు ఇస్తే గేట్ రిపేర్ చేయించొచ్చని చెప్పండి.",
      },
      options: ["If we all give a little, we can repair the gate.", "If we all give little, we can repair the gate.", "If we all will give a little, we can repair the gate."],
      answer: 0,
      why: {
        en: "A little means some, but little alone means almost nothing; and the if part never takes will.",
        te: "a little అంటే కొంచెం; a లేకుండా little అంటే దాదాపు ఏమీ లేదు అని. if భాగంలో will రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It ___ help everyone if we planted trees here.",
      te: "ఇక్కడ చెట్లు నాటితే అందరికీ మేలు జరుగుతుంది.",
      options: ["would", "will", "is"],
      answer: 0,
      why: {
        en: "With a past verb like planted in the if part, the other part takes would.",
        te: "if భాగంలో planted లాంటి past verb ఉంటే, రెండో భాగంలో would వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Vidya Nagar Colony",
      lines: [
        "Usha: Namaste, neighbours!",
        "Tree-planting drive this Sunday at 7 am.",
        "Meet at the park gate.",
        "The forest office is giving saplings free.",
        "Please bring a spade if you have one.",
        "Tea and biscuits after the work!",
      ],
      prompt: { en: "Usha sent this to the colony group. What should you bring?", te: "ఉష గారు కాలనీ గ్రూప్‌లో ఇది పంపారు. మీరు ఏం తీసుకెళ్ళాలి?" },
      options: ["A spade, if you have one", "A sapling from the shop", "Tea and biscuits"],
      answer: 0,
      why: {
        en: "The saplings are free, and one line asks for a digging tool if possible.",
        te: "మొక్కలు ఉచితంగా ఇస్తున్నారు; తవ్వే పనిముట్టు ఉంటే తెమ్మని ఒక లైన్‌లో ఉంది.",
      },
      say: "Please bring a spade if you have one.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Each of us can bring two sapling.",
      wrongIndex: 6,
      fix: "Each of us can bring two saplings.",
      why: {
        en: "After two, the thing takes s; Telugu also changes మొక్క to మొక్కలు.",
        te: "రెండు తర్వాత s కావాలి; తెలుగులోనూ మొక్క కాదు, మొక్కలు అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell your neighbours that Mary, the colony secretary, agrees with the tree plan.",
        te: "కాలనీ సెక్రటరీ మేరీ గారు చెట్ల ప్లాన్‌కి ఒప్పుకున్నారని ఇరుగుపొరుగుకి చెప్పండి.",
      },
      expected: ["Mary agrees with the tree plan.", "Our secretary Mary agrees with the plan.", "Mary agrees with the plan."],
      options: ["Mary agrees with the tree plan.", "Mary agree with the tree plan.", "Mary is agreeing with the tree plan."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Some neighbours say the work is too much. Tell them each of you can bring just one sapling.",
        te: "పని చాలా ఎక్కువని కొంతమంది ఇరుగుపొరుగువాళ్ళు అంటున్నారు. ప్రతి ఒక్కరూ ఒక్క మొక్క తెస్తే చాలని చెప్పండి.",
      },
      expected: ["Each of us can bring just one sapling.", "Each of us can bring one sapling.", "If we all help, it will be easy."],
      options: ["Each of us can bring just one sapling.", "Each of us can brings just one sapling.", "You people never help. Just bring one!"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Trees for the park", te: "పార్క్‌కి చెట్లు" },
    scene: {
      en: "The colony park has no shade. You want neighbours to plant trees there on Sunday. Your neighbour Narayana is not sure.",
      te: "కాలనీ పార్క్‌లో నీడ లేదు. ఆదివారం అక్కడ ఇరుగుపొరుగు అందరూ కలిసి చెట్లు నాటాలని మీ ఆలోచన. పక్కింటాయన నారాయణ గారికి ఇంకా నమ్మకం లేదు.",
    },
    partner: { en: "Narayana (your neighbour)", te: "నారాయణ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "group", label: { en: "Persuading the group", te: "అందరినీ ఒప్పించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I hear you want to plant trees in the park?",
        te: "నమస్కారం! పార్క్‌లో చెట్లు నాటాలనుకుంటున్నారని విన్నాను?",
        hint: { en: "Say yes, and say it would be good for everyone.", te: "అవునని చెప్పి, అది అందరికీ మంచిదని చెప్పండి." },
        replies: [
          { say: "Yes! It would help everyone if we planted trees there.", good: true, skill: "group" },
          {
            say: "Yes. And you should help. You sit at home all day.",
            good: false,
            skill: "polite",
            react: { en: "Excuse me? I'm busy too, you know!", te: "అదేంటండీ? నేను కూడా బిజీనే!" },
          },
        ],
      },
      {
        partner: "But who will water them every day? It's a lot of work.",
        te: "కానీ రోజూ వాటికి నీళ్ళు ఎవరు పోస్తారు? చాలా పని.",
        hint: { en: "Say if everyone takes turns, it will be easy.", te: "అందరూ వంతుల వారీగా చేస్తే తేలికేనని చెప్పండి." },
        replies: [
          { say: "If we all take turns, it will be easy.", good: true, skill: "group" },
          { say: "If we all will take turns, it will be easy.", good: false, skill: "group" },
        ],
      },
      {
        partner: "And the saplings? They must be costly.",
        te: "మరి మొక్కలు? ఖరీదుగా ఉంటాయేమో.",
        hint: { en: "Say the forest office gives them free, and each person can bring one.", te: "forest office ఉచితంగా ఇస్తుందని, ఒక్కొక్కరూ ఒకటి తేవచ్చని చెప్పండి." },
        replies: [
          { say: "The forest office gives them free. Each of us can bring one.", good: true, skill: "group" },
          { say: "The forest office give them free. Each of us can bring one.", good: false, skill: "group", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Hmm. That's not bad. What time on Sunday?",
        te: "హ్మ్. బాగానే ఉంది. ఆదివారం ఎన్ని గంటలకి?",
        hint: { en: "Say seven, at the gate, and thank him for joining.", te: "ఏడింటికి, గేట్ దగ్గర అని చెప్పి, వస్తున్నందుకు థాంక్స్ చెప్పండి." },
        replies: [
          { say: "At seven, near the gate. Thank you for joining!", good: true, skill: "polite" },
          { say: "At seven, near the gate. Thanks you for joining!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
