import type { Lesson } from "../../types";

/** Week 33, Day 5 (CURRICULUM §4): at the colony meeting — suggesting, agreeing and disagreeing politely. */
export const day: Lesson = {
  id: "at-the-colony-meeting",
  kind: "lesson",
  title: { en: "At the Colony Meeting", te: "కాలనీ మీటింగ్" },
  subtitle: "I agree with … / I'm not sure about that.",
  summary: {
    en: "Learn to speak up at the colony meeting: I agree with Usha. I'm not sure about that. We could …",
    te: "కాలనీ మీటింగ్‌లో మాట్లాడటం నేర్చుకుందాం: I agree with Usha. I'm not sure about that. We could …",
  },
  seo: {
    title: "Speaking at a Colony Meeting in English for Telugu Speakers",
    description:
      "Say I agree with Usha, I'm not sure about that and We could clean the tank. Simple lessons for Telugu speakers at a colony meeting.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "agree", role: "action" },
    { text: "with Usha.", role: "what" },
  ],
  core: [
    { en: "I agree with Usha.", te: "ఉష గారు చెప్పినదానికి నేను ఒప్పుకుంటాను.", extra: ["am"] },
    { en: "I'm not sure about that.", te: "అది నాకు అంత సరిగ్గా అనిపించట్లేదు.", extra: ["for"] },
    { en: "That's a good point.", te: "మంచి మాట చెప్పారు.", extra: ["is"] },
    { en: "We could clean the water tank every month.", te: "నెలకోసారి వాటర్ ట్యాంక్ శుభ్రం చేయొచ్చు.", extra: ["cleaning"] },
    { en: "Water comes only for one hour a day.", te: "రోజుకి ఒక్క గంటే నీళ్ళు వస్తున్నాయి.", extra: ["come"] },
    { en: "We have had this problem for two years.", te: "రెండేళ్ళుగా ఈ సమస్య ఉంది.", extra: ["since"] },
    { en: "I suggest we buy a new motor.", te: "కొత్త మోటార్ కొందామని నా సూచన.", extra: ["to"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one problem in your street. Say one idea aloud with We could …",
    te: "మీ వీధిలో ఒక సమస్య గురించి ఆలోచించండి. We could … తో ఒక సూచన పైకి చెప్పండి.",
  },
  words: [
    { en: "agree", te: "ఒప్పుకోవడం" },
    { en: "not sure", te: "అంత ఖచ్చితంగా అనిపించట్లేదు" },
    { en: "good point", te: "మంచి మాట" },
    { en: "suggest", te: "సూచించడం" },
    { en: "water tank", te: "నీళ్ళ ట్యాంక్" },
  ],
  grammar: ["can-could", "politeness-softening", "present-perfect"],
  topics: ["neighbours", "home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Speaking at a meeting", te: "మీటింగ్‌లో మాట్లాడటం" },
      body: {
        en: "To agree, say I agree with … or That's a good point. To disagree gently, say I'm not sure about that. To give an idea, say We could … or I suggest …",
        te: "ఒప్పుకోవాలంటే I agree with … లేదా That's a good point. మెల్లగా ఒప్పుకోకపోతే I'm not sure about that. సూచనకి We could … లేదా I suggest …",
      },
      bridge: {
        te: ["నేను", "ఉష గారితో", "ఒప్పుకుంటాను"],
        en: [
          { text: "I", role: "who" },
          { text: "agree", role: "action" },
          { text: "with Usha.", role: "what" },
        ],
      },
      examples: [
        { en: "I agree with Usha.", te: "ఉష గారు చెప్పినదానికి నేను ఒప్పుకుంటాను." },
        { en: "I'm not sure about that.", te: "అది నాకు అంత సరిగ్గా అనిపించట్లేదు." },
        { en: "We could clean the water tank every month.", te: "నెలకోసారి వాటర్ ట్యాంక్ శుభ్రం చేయొచ్చు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Agree, disagree, suggest", te: "ఒప్పుకోవడం, ఒప్పుకోకపోవడం, సూచన" },
      items: [
        {
          form: "I agree with …",
          useFor: { en: "Saying you think the same as someone.", te: "ఇంకొకరి మాటే మీ మాట అని చెప్పడం." },
          example: { en: "I agree with Usha.", te: "ఉష గారు చెప్పినదానికి నేను ఒప్పుకుంటాను." },
        },
        {
          form: "That's a good point.",
          useFor: { en: "Praising someone's idea.", te: "ఎవరిదైనా ఆలోచన బాగుందని చెప్పడం." },
          example: { en: "That's a good point.", te: "మంచి మాట చెప్పారు." },
        },
        {
          form: "I'm not sure about that.",
          useFor: { en: "Disagreeing gently, without hurting anyone.", te: "ఎవరినీ నొప్పించకుండా మెల్లగా ఒప్పుకోకపోవడం." },
          example: { en: "I'm not sure about that.", te: "అది నాకు అంత సరిగ్గా అనిపించట్లేదు." },
        },
        {
          form: "We could … / I suggest …",
          useFor: { en: "Giving your own idea.", te: "మీ సొంత ఆలోచన చెప్పడం." },
          example: { en: "I suggest we buy a new motor.", te: "కొత్త మోటార్ కొందామని నా సూచన." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I am agree with Usha.",
      right: "I agree with Usha.",
      why: {
        en: "Agree is already the action word, so it needs no am before it.",
        te: "agree అనేదే verb, అందుకే దాని ముందు am అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "We are having this problem since two years.",
      right: "We have had this problem for two years.",
      why: {
        en: "Up to now needs have had, and an amount of time takes for, not since.",
        te: "ఇప్పటి వరకు అనే అర్థానికి have had కావాలి; ఎంత కాలమో చెప్తే since కాదు, for.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Gopal says the water tank is dirty. You think the same. What do you say?",
        te: "వాటర్ ట్యాంక్ మురికిగా ఉందని గోపాల్ గారు అన్నారు. మీరూ అదే అనుకుంటున్నారు. ఏమంటారు?",
      },
      options: ["I agree with Gopal.", "I am agree with Gopal.", "I agree to Gopal."],
      answer: 0,
      why: {
        en: "Agree needs no am, and with a person it takes with.",
        te: "agree ముందు am రాదు; మనిషి విషయంలో agree with అనాలి.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Colony Association Notice",
      lines: ["General body meeting: Sunday, 10 a.m.", "Place: Community hall", "Topics: water supply, tank cleaning, parking", "All residents, please attend."],
      prompt: { en: "When is the meeting?", te: "మీటింగ్ ఎప్పుడు?" },
      options: ["Sunday at 10 in the morning", "Sunday at 10 at night", "Every day at 10"],
      answer: 0,
      why: {
        en: "The notice says Sunday, 10 a.m., and a.m. means the morning.",
        te: "నోటీసులో Sunday, 10 a.m. అని ఉంది; a.m. అంటే ఉదయం.",
      },
      say: "The meeting is on Sunday at 10 in the morning.",
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Mohan says: We should lock the gate at nine. You disagree. What do you say?",
        te: "రాత్రి తొమ్మిదికే గేటుకి తాళం వేయాలని మోహన్ గారు అన్నారు. మీరు ఒప్పుకోవట్లేదు. ఏమంటారు?",
      },
      options: ["I'm not sure about that. Some people work late.", "No! That is a very bad idea.", "I am not sure for that."],
      answer: 0,
      why: {
        en: "I'm not sure about that disagrees gently, and a reason helps everyone.",
        te: "I'm not sure about that అంటే మెల్లగా ఒప్పుకోకపోవడం; కారణం కూడా చెప్తే అందరికీ అర్థమవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "We could clean a water tank every month.",
      wrongIndex: 3,
      fix: "We could clean the water tank every month.",
      why: {
        en: "Everyone knows which tank, the colony's own, so use the, not a.",
        te: "ఏ ట్యాంకో అందరికీ తెలుసు (కాలనీదే), అందుకే a కాదు, the.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Fatima suggests a cleaning drive. You like the idea. Say so.",
        te: "ఫాతిమా గారు ఒక క్లీనింగ్ డ్రైవ్ సూచించారు. మీకు నచ్చింది. అదే చెప్పండి.",
      },
      expected: ["That's a good point. I agree.", "That's a good point.", "I agree with Fatima."],
      options: ["That's a good point. I agree.", "That's is a good point.", "Okay, okay. Whatever you say."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Tell the meeting how long the water problem has gone on: two years.",
        te: "నీళ్ళ సమస్య ఎంత కాలంగా ఉందో మీటింగ్‌లో చెప్పండి: రెండేళ్ళు.",
      },
      expected: ["We have had this problem for two years.", "We've had this problem for two years."],
      options: ["We have had this problem for two years.", "We are having this problem since two years.", "We had this problem from two years."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The water problem", te: "నీళ్ళ సమస్య" },
    scene: {
      en: "It is the colony meeting. Usha, the secretary, asks everyone about the water problem.",
      te: "కాలనీ మీటింగ్ జరుగుతోంది. సెక్రటరీ ఉష గారు నీళ్ళ సమస్య గురించి అందరినీ అడుగుతున్నారు.",
    },
    partner: { en: "Usha (colony secretary)", te: "ఉష (కాలనీ సెక్రటరీ)" },
    skills: [
      { id: "problem", label: { en: "Saying the problem", te: "సమస్య చెప్పడం" } },
      { id: "agree", label: { en: "Agreeing and suggesting", te: "ఒప్పుకోవడం, సూచన ఇవ్వడం" } },
    ],
    turns: [
      {
        partner: "Good evening! First, water. How is it in your block?",
        te: "అందరికీ నమస్కారం! ముందు నీళ్ళ విషయం. మీ బ్లాక్‌లో ఎలా ఉంది?",
        hint: { en: "Tell her how long water comes each day.", te: "రోజూ ఎంతసేపు నీళ్ళు వస్తున్నాయో చెప్పండి." },
        replies: [
          { say: "Water comes only for one hour a day.", good: true, skill: "problem" },
          { say: "Water come only for one hour a day.", good: false, skill: "problem", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Oh. How long have you had this problem?",
        te: "అయ్యో. ఈ సమస్య ఎంత కాలంగా ఉంది?",
        hint: { en: "Say how long, with for: two months.", te: "for వాడి, ఎంత కాలమో చెప్పండి: రెండు నెలలు." },
        replies: [
          { say: "We have had this problem for two months.", good: true, skill: "problem" },
          { say: "We are having this problem since two months.", good: false, skill: "problem", fixIt: "duration" },
        ],
      },
      {
        partner: "Satish says we should buy a new motor.",
        te: "కొత్త మోటార్ కొనాలని సతీష్ గారు అంటున్నారు.",
        hint: { en: "Say you think the same as him.", te: "మీరూ ఆయనలాగే అనుకుంటున్నారని చెప్పండి." },
        replies: [
          { say: "I agree with Satish. That's a good point.", good: true, skill: "agree" },
          { say: "I am agree with Satish.", good: false, skill: "agree" },
          {
            say: "A motor? Who will pay? Not me!",
            good: false,
            skill: "agree",
            react: { en: "Please stay calm. We will all share the cost.", te: "కొంచెం ప్రశాంతంగా ఉండండి. ఖర్చు అందరం పంచుకుంటాం." },
          },
        ],
      },
      {
        partner: "Good. Before we finish, any other ideas?",
        te: "మంచిది. ముగించే ముందు, ఇంకేమైనా ఆలోచనలు ఉన్నాయా?",
        hint: { en: "Give an idea about the tank: how often to clean it.", te: "ట్యాంక్ గురించి ఒక సూచన ఇవ్వండి: ఎన్ని రోజులకోసారి శుభ్రం చేయాలో." },
        replies: [
          { say: "We could clean the water tank every month.", good: true, skill: "agree" },
          { say: "I suggest we clean the tank every month.", good: true, skill: "agree" },
          { say: "We could clean water tank every month.", good: false, skill: "agree", fixIt: "article" },
        ],
      },
    ],
  },
};
