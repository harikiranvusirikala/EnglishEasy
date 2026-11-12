import type { Lesson } from "../../types";

/** Week 57, Day 5 (CURRICULUM §5): asking about news and passing it on — What did the nurse say? She said visiting time was from four to six. */
export const day: Lesson = {
  id: "what-did-they-say-meeting",
  kind: "lesson",
  title: { en: "What Did She Say?", te: "ఆవిడ ఏం చెప్పారు?" },
  subtitle: "What did … say? She said that …",
  summary: {
    en: "Learn to ask about news and pass it on: What did the nurse say? She said visiting time was from four to six.",
    te: "వార్త గురించి అడగడం, దాన్ని ఇంకొకరికి చెప్పడం నేర్చుకుందాం: What did the nurse say? She said visiting time was from four to six.",
  },
  seo: {
    title: "What Did She Say? in English for Telugu Speakers",
    description:
      "Ask What did the nurse say? and answer She said visiting time was from four to six. Simple lessons for Telugu speakers on passing on news.",
  },
  pattern: [
    { text: "What", role: "what" },
    { text: "did", role: "action" },
    { text: "the nurse", role: "who" },
    { text: "say?", role: "action" },
  ],
  core: [
    { en: "What did the nurse say?", te: "నర్సు ఏం చెప్పారు?", extra: ["said"] },
    { en: "She said visiting time was from four to six.", te: "విజిటింగ్ టైమ్ నాలుగు నుంచి ఆరు దాకా అని ఆవిడ చెప్పారు.", extra: ["is"] },
    { en: "What did the secretary say about the water?", te: "నీళ్ళ గురించి సెక్రటరీ గారు ఏం చెప్పారు?", extra: ["told"] },
    { en: "She said the tanker would come at seven.", te: "ట్యాంకర్ ఏడింటికి వస్తుందని ఆవిడ చెప్పారు.", extra: ["will"] },
    { en: "He said the lift would be closed on Sunday.", te: "ఆదివారం లిఫ్ట్ మూసి ఉంటుందని ఆయన చెప్పారు.", extra: ["will"] },
    { en: "What did they decide at the meeting?", te: "మీటింగ్‌లో ఏం నిర్ణయించారు?", extra: ["decided"] },
    { en: "They said everyone had to pay 500 rupees.", te: "అందరూ 500 రూపాయలు కట్టాలని వాళ్ళు చెప్పారు.", extra: ["has"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a friend or a neighbour about some news today: What did … say?",
    te: "ఈ రోజు స్నేహితులనో, పక్కింటివారినో ఏదైనా వార్త గురించి అడగండి: What did … say?",
  },
  words: [
    { en: "secretary", te: "సెక్రటరీ" },
    { en: "tanker", te: "నీళ్ళ ట్యాంకర్" },
    { en: "maintenance charge", te: "మెయింటెనెన్స్ చార్జీ" },
    { en: "announced", te: "ప్రకటించారు, అందరికీ చెప్పారు" },
    { en: "decision", te: "నిర్ణయం" },
  ],
  grammar: ["reported-speech", "question-words", "past-simple"],
  topics: ["neighbours", "health", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking about news, passing it on", te: "వార్త అడగడం, అందించడం" },
      body: {
        en: "To ask, say What did … say? Did already shows the past, so say stays the same. To answer, say She said that … and the news.",
        te: "అడగాలంటే What did … say? అనండి; did లోనే past ఉంది, అందుకే say మారదు. జవాబుకి She said that … తర్వాత వార్త చెప్పండి.",
      },
      bridge: {
        te: ["నర్సు", "ఏం", "చెప్పారు?"],
        en: [
          { text: "What", role: "what" },
          { text: "did", role: "action" },
          { text: "the nurse", role: "who" },
          { text: "say?", role: "action" },
        ],
      },
      examples: [
        { en: "What did the nurse say?", te: "నర్సు ఏం చెప్పారు?" },
        { en: "She said visiting time was from four to six.", te: "విజిటింగ్ టైమ్ నాలుగు నుంచి ఆరు దాకా అని ఆవిడ చెప్పారు." },
        { en: "What did the secretary say about the water?", te: "నీళ్ళ గురించి సెక్రటరీ గారు ఏం చెప్పారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ask and answer", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "What did … say?",
          useFor: { en: "Ask what someone said.", te: "ఎవరైనా ఏం చెప్పారో అడగడానికి." },
          example: { en: "What did the doctor say?", te: "డాక్టర్ గారు ఏం చెప్పారు?" },
        },
        {
          form: "What did … say about …?",
          useFor: { en: "Ask about one thing only.", te: "ఒక్క విషయం గురించే అడగడానికి." },
          example: { en: "What did the nurse say about the timings?", te: "టైమింగ్స్ గురించి నర్సు ఏం చెప్పారు?" },
        },
        {
          form: "Did … say anything about …?",
          useFor: { en: "A yes or no question about the news.", te: "అవునా, లేదా అని అడిగే ప్రశ్న." },
          example: { en: "Did she say anything about the fee?", te: "ఫీజు గురించి ఆవిడ ఏమైనా చెప్పారా?" },
        },
        {
          form: "She said that …",
          useFor: { en: "Pass on the answer.", te: "జవాబు అందించడానికి." },
          example: { en: "She said that the fee was 200 rupees.", te: "ఫీజు 200 రూపాయలు అని ఆవిడ చెప్పారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What the nurse said?",
      right: "What did the nurse say?",
      why: {
        en: "An English question needs did before the person; Telugu ఏం చెప్పారు? has no such word.",
        te: "ఇంగ్లీష్ ప్రశ్నలో మనిషి కంటే ముందు did కావాలి; తెలుగు 'ఏం చెప్పారు?' లో అలాంటి మాట ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "What did the nurse said?",
      right: "What did the nurse say?",
      why: {
        en: "Did already shows the past, so the verb after it stays plain.",
        te: "did లోనే past ఉంది; అందుకే దాని తర్వాత verb అలాగే ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You missed the colony meeting. Ask your friend about the water.",
        te: "మీరు కాలనీ మీటింగ్‌కి వెళ్ళలేకపోయారు. నీళ్ళ గురించి మీ స్నేహితులని అడగండి.",
      },
      options: [
        "What did the secretary say about the water?",
        "What the secretary said about the water?",
        "What did the secretary said about the water?",
      ],
      answer: 0,
      why: {
        en: "A past question needs did before the person, and the verb after did stays plain.",
        te: "past ప్రశ్నలో మనిషి కంటే ముందు did వస్తుంది; did తర్వాత verb అలాగే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Radha ___ our colony meeting every month.",
      te: "ప్రతి నెలా మా కాలనీ మీటింగ్‌ని రాధ గారు నడిపిస్తారు.",
      options: ["leads", "lead", "leading"],
      answer: 0,
      why: {
        en: "One person, like Radha, takes s on the verb for things done every month.",
        te: "ఒక్కరైతే (రాధ గారు లాగా), ప్రతి నెలా చేసే పనికి verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Sai Nagar Colony: Notes From Sunday's Meeting",
      lines: [
        "Dear residents,",
        "Here is the news from Sunday's colony meeting.",
        "Our secretary, Radha, said the new water tank was ready.",
        "She said the tanker would not come from next week.",
        "Kumar said the streetlight on the main road would be fixed by Friday.",
        "The members made one decision: twenty new trees in the park.",
        "Everyone was asked to pay the maintenance charge by the 10th.",
        "The next meeting is on the first Sunday of next month, at 6 pm.",
        "Treasurer, Sai Nagar Residents' Association",
      ],
      questions: [
        {
          prompt: { en: "What did the secretary say about the water tank?", te: "నీళ్ళ ట్యాంక్ గురించి సెక్రటరీ గారు ఏం చెప్పారు?" },
          options: ["It was ready", "It needed repairs", "It was too small"],
          answer: 0,
          why: {
            en: "In the third line, Radha said the new tank was finished, so no repairs are needed.",
            te: "మూడో లైన్‌లో, కొత్త ట్యాంక్ పూర్తయిందని రాధ గారు చెప్పారు; అంటే రిపేర్లు అక్కర్లేదు.",
          },
        },
        {
          prompt: { en: "When will the streetlight be fixed?", te: "వీధి లైట్ ఎప్పటికి బాగు చేస్తారు?" },
          options: ["By Friday", "Next month", "On Sunday"],
          answer: 0,
          why: {
            en: "Kumar's words had will; the notice passes them on with would, and gives the day.",
            te: "కుమార్ గారి మాటలో will ఉంది; నోటీసు దాన్ని would తో చెప్పి, ఆ రోజు కూడా చెప్పింది.",
          },
        },
        {
          prompt: { en: "What must everyone do by the 10th?", te: "10వ తేదీ లోపు అందరూ ఏం చేయాలి?" },
          options: ["Pay the maintenance charge", "Plant a tree", "Come to the meeting"],
          answer: 0,
          why: {
            en: "The seventh line says everyone was asked to pay before that date.",
            te: "ఆ తేదీ లోపు అందరినీ డబ్బు కట్టమని అడిగారని ఏడో లైన్‌లో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The secretary said the meeting was in community hall.",
      wrongIndex: 7,
      fix: "The secretary said the meeting was in the community hall.",
      why: {
        en: "A known place, like the hall in your colony, takes the; Telugu has no word for it.",
        te: "అందరికీ తెలిసిన చోటుకి, మీ కాలనీ హాల్ లాగా, the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend visited a patient at the hospital. Ask what the nurse said about visiting time.",
        te: "మీ స్నేహితులు ఆసుపత్రిలో ఒక పేషెంట్‌ని చూసి వచ్చారు. విజిటింగ్ టైమ్ గురించి నర్సు ఏం చెప్పారని అడగండి.",
      },
      expected: ["What did the nurse say about visiting time?", "What did the nurse say about the timings?", "What did the nurse say?"],
      options: [
        "What did the nurse say about visiting time?",
        "What the nurse said about visiting time?",
        "What did the nurse told about visiting time?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour missed the meeting. The secretary said: The tanker will come at seven. Tell him.",
        te: "పక్కింటాయన మీటింగ్‌కి రాలేదు. The tanker will come at seven అని సెక్రటరీ గారు చెప్పారు. ఆయనకి చెప్పండి.",
      },
      expected: [
        "The secretary said the tanker would come at seven.",
        "She said the tanker would come at seven.",
        "The secretary said that the tanker would come at seven.",
      ],
      options: [
        "The secretary said the tanker would come at seven.",
        "The secretary said the tanker would comes at seven.",
        "The secretary told the tanker would come at seven.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "After the colony meeting", te: "కాలనీ మీటింగ్ తర్వాత" },
    scene: {
      en: "Your friend Rahim missed yesterday's colony meeting. He meets you at the gate and asks about it.",
      te: "మీ స్నేహితుడు రహీమ్ గారు నిన్నటి కాలనీ మీటింగ్‌కి రాలేకపోయారు. గేటు దగ్గర మిమ్మల్ని కలిసి దాని గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Rahim (your friend)", te: "రహీమ్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "pass", label: { en: "Passing on news", te: "వార్త అందించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! I missed the colony meeting yesterday. Was it a long meeting?",
        te: "హాయ్! నిన్న కాలనీ మీటింగ్‌కి రాలేకపోయాను. మీటింగ్ చాలాసేపు జరిగిందా?",
        hint: { en: "Say yes, it was long, and there was a lot of news.", te: "అవును, చాలాసేపు జరిగిందని, చాలా విషయాలు చెప్పారని చెప్పండి." },
        replies: [
          { say: "Yes, it was quite long. There was a lot of news.", good: true, skill: "pass" },
          { say: "Yes, it quite long. There was a lot of news.", good: false, skill: "pass", fixIt: "be" },
        ],
      },
      {
        partner: "What did the secretary say about the water problem?",
        te: "నీళ్ళ సమస్య గురించి సెక్రటరీ గారు ఏం చెప్పారు?",
        hint: { en: "Pass on her news about the new tank.", te: "కొత్త ట్యాంక్ గురించి ఆవిడ చెప్పిన వార్త చెప్పండి." },
        replies: [
          { say: "She said the new water tank was ready.", good: true, skill: "pass" },
          { say: "She said me the new water tank was ready.", good: false, skill: "pass", fixIt: "preposition" },
        ],
      },
      {
        partner: "Good! Did they say anything about money?",
        te: "మంచిది! డబ్బుల గురించి ఏమైనా చెప్పారా?",
        hint: { en: "Pass on what they announced about the maintenance charge and the date.", te: "మెయింటెనెన్స్ చార్జీ, తేదీ గురించి వాళ్ళు ప్రకటించింది చెప్పండి." },
        replies: [
          { say: "Yes. They said we had to pay the maintenance charge by the 10th.", good: true, skill: "pass" },
          {
            say: "Why didn't you come? Then you would know.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I was at the hospital with my father.", te: "సారీ అండీ, మా నాన్నగారితో ఆసుపత్రిలో ఉన్నాను." },
          },
        ],
      },
      {
        partner: "Thank you for telling me. I'll pay it this week.",
        te: "చెప్పినందుకు థాంక్స్. ఈ వారమే కట్టేస్తాను.",
        hint: { en: "Answer his thanks, and say goodbye.", te: "ఆయన థాంక్స్‌కి జవాబు చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "You're welcome. See you at the next meeting!", good: true, skill: "polite" },
          { say: "You're welcome. See you in next meeting!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
