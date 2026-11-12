import type { Lesson } from "../../types";

/** Week 51, Day 5 (CURRICULUM §5): asking about options and next steps — What are the other options? Do I need another test? */
export const day: Lesson = {
  id: "options-and-next-steps-doctor",
  kind: "lesson",
  title: { en: "What Are the Options?", te: "ఇంకా ఏ దారులు ఉన్నాయి?" },
  subtitle: "What are the options? Do I need …?",
  summary: {
    en: "Learn to ask a specialist about options and next steps: What are the other options, doctor? Do I need another test?",
    te: "స్పెషలిస్ట్‌ని వేరే దారులు, తర్వాత ఏం చేయాలి అని అడగడం నేర్చుకుందాం: What are the other options, doctor? Do I need another test?",
  },
  seo: {
    title: "Asking About Treatment Options in English for Telugu Speakers",
    description: "Ask a specialist: What are the other options? Do I need another test? Is surgery the only option? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Do", role: "action" },
    { text: "I", role: "who" },
    { text: "need", role: "action" },
    { text: "another test?", role: "what" },
  ],
  core: [
    { en: "What are the other options, doctor?", te: "డాక్టర్ గారూ, ఇంకా ఏ దారులు ఉన్నాయి?", extra: ["is"] },
    { en: "Do I need to come back for another test?", te: "ఇంకో టెస్ట్ కోసం నేను మళ్ళీ రావాలా?", extra: ["other"] },
    { en: "Is surgery the only option?", te: "ఆపరేషన్ ఒక్కటే దారా?" },
    { en: "Can physiotherapy help my knee pain?", te: "నా మోకాలి నొప్పికి ఫిజియోథెరపీ పనికొస్తుందా?" },
    { en: "What happens if I don't have the operation?", te: "ఆపరేషన్ చేయించుకోకపోతే ఏమవుతుంది?", extra: ["won't"] },
    { en: "I'd like a second opinion before I decide.", te: "నిర్ణయం తీసుకునే ముందు ఇంకో డాక్టర్ అభిప్రాయం కూడా తీసుకుంటాను." },
    { en: "When should I come for a follow-up?", te: "ఫాలో-అప్‌కి నేను ఎప్పుడు రావాలి?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one choice you must make this week. Ask a friend: What are the options?",
    te: "ఈ వారం మీరు తీసుకోవాల్సిన ఒక నిర్ణయం గురించి ఆలోచించండి. ఒక స్నేహితుడిని What are the options? అని అడగండి.",
  },
  words: [
    { en: "options", te: "దారులు, ఆప్షన్లు" },
    { en: "specialist", te: "స్పెషలిస్ట్ డాక్టర్" },
    { en: "physiotherapy", te: "ఫిజియోథెరపీ, వ్యాయామంతో చికిత్స" },
    { en: "second opinion", te: "ఇంకో డాక్టర్ అభిప్రాయం" },
    { en: "follow-up", te: "ఫాలో-అప్, మళ్ళీ చూపించుకోవడం" },
  ],
  grammar: ["question-words", "conditionals"],
  topics: ["doctor", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ask about the choices", te: "ఏ దారులు ఉన్నాయో అడగండి" },
      body: {
        en: "Before a big decision, ask: What are the options? Then ask about each one: Do I need …? What happens if …?",
        te: "పెద్ద నిర్ణయానికి ముందు What are the options? అని అడగండి. తర్వాత ఒక్కొక్క దాని గురించి: Do I need …? What happens if …?",
      },
      bridge: {
        te: ["నాకు", "ఇంకో టెస్ట్", "అవసరమా?"],
        en: [
          { text: "Do", role: "action" },
          { text: "I", role: "who" },
          { text: "need", role: "action" },
          { text: "another test?", role: "what" },
        ],
      },
      examples: [
        { en: "What are the other options, doctor?", te: "డాక్టర్ గారూ, ఇంకా ఏ దారులు ఉన్నాయి?" },
        { en: "What happens if I don't have the operation?", te: "ఆపరేషన్ చేయించుకోకపోతే ఏమవుతుంది?" },
        { en: "I'd like a second opinion before I decide.", te: "నిర్ణయం తీసుకునే ముందు ఇంకో డాక్టర్ అభిప్రాయం కూడా తీసుకుంటాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Questions for the specialist", te: "స్పెషలిస్ట్‌ని అడిగే ప్రశ్నలు" },
      items: [
        {
          form: "What are the options?",
          useFor: { en: "Hear every choice first.", te: "ముందు అన్ని దారులూ వినండి." },
          example: { en: "What are the options for my knee?", te: "నా మోకాలికి ఏ దారులు ఉన్నాయి?" },
        },
        {
          form: "Do I need …?",
          useFor: { en: "Ask if something is really needed.", te: "ఏదైనా నిజంగా అవసరమా అని అడగడానికి." },
          example: { en: "Do I need an MRI scan?", te: "నాకు MRI scan అవసరమా?" },
        },
        {
          form: "What happens if …?",
          useFor: { en: "Ask about the result of a choice.", te: "ఒక నిర్ణయం వల్ల ఏమవుతుందో అడగడానికి." },
          example: { en: "What happens if I wait a few months?", te: "కొన్ని నెలలు ఆగితే ఏమవుతుంది?" },
        },
        {
          form: "How long will it take?",
          useFor: { en: "Ask about the time it needs.", te: "ఎంత టైమ్ పడుతుందో అడగడానికి." },
          example: { en: "How long will the physiotherapy take?", te: "ఫిజియోథెరపీ ఎన్నాళ్ళు పడుతుంది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Do I need other test?",
      right: "Do I need another test?",
      why: {
        en: "One more test is another test; other alone needs the or a plural.",
        te: "ఇంకొక్క టెస్ట్ అంటే another test; other ఒక్కటే వాడకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The specialist say I need physiotherapy.",
      right: "The specialist says I need physiotherapy.",
      why: {
        en: "For one person, like he, she or the specialist, the verb takes s.",
        te: "ఒక్కరి గురించి (he, she, specialist) చెప్పేటప్పుడు verb కి s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "The specialist says surgery can help. You want to hear about other choices. What do you ask?",
        te: "ఆపరేషన్‌తో తగ్గుతుందని స్పెషలిస్ట్ చెప్పారు. వేరే దారుల గురించి కూడా వినాలనుకుంటున్నారు. ఏం అడుగుతారు?",
      },
      options: ["What are the other options?", "What is the other options?", "What the other options are?"],
      answer: 0,
      why: {
        en: "Options means more than one, so use are, and put it before the options.",
        te: "options ఒకటి కంటే ఎక్కువ కాబట్టి are; ప్రశ్నలో are ముందు వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "What happens if I ___ the operation?",
      te: "ఆపరేషన్ చేయించుకోకపోతే ఏమవుతుంది?",
      options: ["don't have", "won't have", "not have"],
      answer: 0,
      why: {
        en: "After if, use the present, even about the future; never won't.",
        te: "if తర్వాత, భవిష్యత్తు గురించైనా, present వాడాలి; won't రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "You are with your friend Raju. The specialist asks how long he has had knee pain. It started two years ago.",
        te: "మీరు మీ స్నేహితుడు రాజు గారితో ఉన్నారు. ఆయనకి ఎన్నాళ్ళ నుంచి మోకాలి నొప్పి ఉందని స్పెషలిస్ట్ అడుగుతున్నారు. రెండేళ్ళ క్రితం మొదలైంది.",
      },
      options: ["He has had knee pain for two years.", "He has knee pain since two years.", "He is having knee pain for two years."],
      answer: 0,
      why: {
        en: "Pain that started two years ago and still goes on takes has had with for.",
        te: "రెండేళ్ళ క్రితం మొదలై ఇంకా ఉన్న నొప్పికి has had, for వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Is surgery the only one option?",
      wrongIndex: 4,
      fix: "Is surgery the only option?",
      why: {
        en: "Only already means one, so don't add one after it.",
        te: "only అంటేనే ఒక్కటి; దాని తర్వాత one అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The specialist suggests an operation. You want to try physiotherapy first. Ask.",
        te: "స్పెషలిస్ట్ ఆపరేషన్ సూచిస్తున్నారు. మీరు ముందు ఫిజియోథెరపీ ప్రయత్నించాలనుకుంటున్నారు. అడగండి.",
      },
      expected: ["Can I try physiotherapy first?", "Can physiotherapy help first?", "Can I try physiotherapy before the operation?", "What about physiotherapy first?"],
      options: ["Can I try physiotherapy first?", "Can I trying physiotherapy first?", "Can I to try physiotherapy first?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You want to see another doctor before you decide. Tell the specialist politely.",
        te: "నిర్ణయం తీసుకునే ముందు ఇంకో డాక్టర్‌ని కూడా చూపించుకోవాలనుకుంటున్నారు. స్పెషలిస్ట్‌కి మర్యాదగా చెప్పండి.",
      },
      expected: ["I'd like a second opinion before I decide.", "I'd like to get a second opinion first.", "I'd like a second opinion, please."],
      options: ["I'd like a second opinion before I decide.", "I want second opinion before I decide.", "I'd like a second opinion before I will decide."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the knee specialist", te: "మోకాలి స్పెషలిస్ట్ దగ్గర" },
    scene: {
      en: "Your neighbour Sarala has knee pain. She asked you to come and talk to Dr Ramesh, the specialist, for her.",
      te: "మీ పక్కింటి సరళ గారికి మోకాలి నొప్పి ఉంది. ఆవిడ తరఫున స్పెషలిస్ట్ డాక్టర్ రమేష్ గారితో మాట్లాడమని మిమ్మల్ని అడిగారు.",
    },
    partner: { en: "Dr Ramesh (the specialist)", te: "డాక్టర్ రమేష్ (స్పెషలిస్ట్)" },
    voice: "b",
    skills: [
      { id: "options", label: { en: "Asking about options", te: "దారుల గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "The X-ray shows some wear and tear in her knee. Surgery is one choice.",
        te: "ఎక్స్-రేలో ఆవిడ మోకాలు కొంచెం అరిగినట్టు కనిపిస్తోంది. ఆపరేషన్ ఒక దారి.",
        hint: { en: "Greet him, and ask what the other choices are.", te: "నమస్కారం చెప్పి, వేరే దారులు ఏంటని అడగండి." },
        replies: [
          { say: "Hello, doctor. What are the other options?", good: true, skill: "options" },
          { say: "Hello, doctor. What the other options?", good: false, skill: "options", fixIt: "be" },
        ],
      },
      {
        partner: "Physiotherapy, losing some weight, and pain tablets when needed.",
        te: "ఫిజియోథెరపీ, కొంచెం బరువు తగ్గడం, అవసరమైనప్పుడు నొప్పి టాబ్లెట్లు.",
        hint: { en: "Ask how long the physiotherapy will take.", te: "ఫిజియోథెరపీ ఎన్నాళ్ళు పడుతుందో అడగండి." },
        replies: [
          { say: "How long will the physiotherapy take?", good: true, skill: "options" },
          { say: "How many weeks of physiotherapy does she need?", good: true, skill: "options" },
          { say: "How long the physiotherapy will take?", good: false, skill: "options", fixIt: "question" },
        ],
      },
      {
        partner: "About six weeks, three days a week.",
        te: "సుమారు ఆరు వారాలు, వారానికి మూడు రోజులు.",
        hint: { en: "Ask about the result if she says no to surgery.", te: "ఆవిడ ఆపరేషన్ వద్దంటే ఏమవుతుందో అడగండి." },
        replies: [
          { say: "What happens if she doesn't have the operation?", good: true, skill: "options" },
          {
            say: "Doctors always say surgery just to make money.",
            good: false,
            skill: "polite",
            react: { en: "I understand your worry. That's why I'm telling you every option.", te: "మీ భయం అర్థమైంది అండీ. అందుకే అన్ని దారులూ చెప్తున్నాను." },
          },
        ],
      },
      {
        partner: "If physiotherapy works, she won't need surgery. Let's see after six weeks.",
        te: "ఫిజియోథెరపీ పని చేస్తే, ఆవిడకి ఆపరేషన్ అవసరం ఉండదు. ఆరు వారాల తర్వాత చూద్దాం.",
        hint: { en: "Thank him, and say you will tell her everything.", te: "ఆయనకి థాంక్స్ చెప్పి, ఆవిడకి అంతా చెప్తానని చెప్పండి." },
        replies: [
          { say: "Thank you, doctor. I'll explain everything to her.", good: true, skill: "polite" },
          { say: "Thank you, doctor. I'll explain her everything.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
