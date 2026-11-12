import type { Lesson } from "../../types";

/** Week 70, Day 4 (CURRICULUM §5): replying kindly to a friend's regret — Never mind. It happens to everyone. */
export const day: Lesson = {
  id: "never-mind-replying-to-regrets",
  kind: "lesson",
  title: { en: "Never Mind", te: "పర్వాలేదు" },
  subtitle: "Never mind; It happens; Next time",
  summary: {
    en: "Learn to comfort a friend who is sorry about a small thing: Never mind. It happens to everyone. You can go next time.",
    te: "చిన్న విషయానికి బాధపడుతున్న స్నేహితులకి ధైర్యం చెప్పడం నేర్చుకుందాం: Never mind. It happens to everyone. You can go next time.",
  },
  seo: {
    title: "Never Mind and It Happens in English for Telugu Speakers",
    description:
      "Say Never mind. It happens to everyone. and Don't worry, you can go next time. Simple lessons for Telugu speakers on comforting a friend.",
  },
  pattern: [
    { text: "Never mind.", role: "what" },
    { text: "It", role: "who" },
    { text: "happens", role: "action" },
    { text: "to everyone", role: "what" },
  ],
  core: [
    { en: "Never mind. It happens to everyone.", te: "పర్లేదు. అందరికీ అలా జరుగుతుంది.", extra: ["happen"] },
    { en: "Don't worry, you can go next time.", te: "బాధపడకండి, ఈసారి వెళ్ళొచ్చు.", extra: ["going"] },
    { en: "Don't blame yourself. It wasn't your fault.", te: "మిమ్మల్ని మీరు నిందించుకోకండి. అది మీ తప్పు కాదు.", extra: ["yours"] },
    { en: "Cheer up! There will be another concert soon.", te: "ఉత్సాహంగా ఉండండి! త్వరలోనే ఇంకో కచేరీ ఉంటుంది.", extra: ["concerts"] },
    { en: "These things happen. At least you are safe.", te: "ఇలాంటివి జరుగుతుంటాయి. కనీసం మీరు క్షేమంగా ఉన్నారు.", extra: ["happens"] },
    { en: "Oh no, what a pity! I'm sorry you missed it.", te: "అయ్యో, పాపం! మీరు అది మిస్ అయినందుకు బాధగా ఉంది.", extra: ["miss"] },
    { en: "Next time, I'll record it on my phone for you.", te: "ఈసారి మీ కోసం నా ఫోన్‌లో రికార్డ్ చేస్తాను.", extra: ["recording"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone says sorry for a small thing today, answer kindly: Never mind. It happens.",
    te: "ఈ రోజు ఎవరైనా చిన్న విషయానికి sorry చెప్తే, మెత్తగా జవాబు ఇవ్వండి: Never mind. It happens.",
  },
  words: [
    { en: "it happens", te: "అలా జరుగుతుంటుంది" },
    { en: "next time", te: "ఈసారి, తర్వాతిసారి" },
    { en: "concert", te: "కచేరీ, సంగీత కార్యక్రమం" },
    { en: "cheer up", te: "ఉత్సాహంగా ఉండండి, బాధపడకండి" },
    { en: "blame", te: "నిందించడం, తప్పు మోపడం" },
  ],
  grammar: ["wish-hope-regret", "politeness-softening", "present-simple"],
  topics: ["feelings", "people", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When a friend has a small regret", te: "స్నేహితులు బాధపడుతుంటే" },
      body: {
        en: "When a friend says I should have …, be kind. Say Never mind or It happens, and give hope: You can go next time.",
        te: "స్నేహితులు I should have … అని బాధపడితే మెత్తగా మాట్లాడండి. Never mind, It happens అని చెప్పి, ధైర్యం ఇవ్వండి: You can go next time.",
      },
      bridge: {
        te: ["పర్లేదు.", "అందరికీ", "అలా జరుగుతుంది"],
        en: [
          { text: "Never mind.", role: "what" },
          { text: "It", role: "who" },
          { text: "happens", role: "action" },
          { text: "to everyone", role: "what" },
        ],
      },
      examples: [
        { en: "Never mind. It happens to everyone.", te: "పర్లేదు. అందరికీ అలా జరుగుతుంది." },
        { en: "Don't worry, you can go next time.", te: "బాధపడకండి, ఈసారి వెళ్ళొచ్చు." },
        { en: "Don't blame yourself. It wasn't your fault.", te: "మిమ్మల్ని మీరు నిందించుకోకండి. అది మీ తప్పు కాదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Kind replies", te: "మెత్తని జవాబులు" },
      items: [
        {
          form: "Never mind.",
          useFor: { en: "It is a small thing, so forget it.", te: "చిన్న విషయం, వదిలేయండి." },
          example: { en: "Never mind. It happens to everyone.", te: "పర్లేదు. అందరికీ అలా జరుగుతుంది." },
        },
        {
          form: "These things happen.",
          useFor: { en: "Anyone can make this mistake.", te: "ఎవరికైనా ఇలా జరగొచ్చు." },
          example: { en: "These things happen. At least you are safe.", te: "ఇలాంటివి జరుగుతుంటాయి. కనీసం మీరు క్షేమంగా ఉన్నారు." },
        },
        {
          form: "Don't blame yourself.",
          useFor: { en: "It was not their fault.", te: "అది వాళ్ళ తప్పు కాదు." },
          example: { en: "Don't blame yourself. It wasn't your fault.", te: "మిమ్మల్ని మీరు నిందించుకోకండి. అది మీ తప్పు కాదు." },
        },
        {
          form: "… next time",
          useFor: { en: "Give hope for another chance.", te: "ఇంకో అవకాశం ఉందని ధైర్యం ఇవ్వడానికి." },
          example: { en: "Don't worry, you can go next time.", te: "బాధపడకండి, ఈసారి వెళ్ళొచ్చు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Don't feel. It happens.",
      right: "Don't feel bad. It happens.",
      why: {
        en: "Feel needs a word after it, like bad; Telugu ఫీల్ అవ్వకండి stops at feel.",
        te: "feel తర్వాత bad లాంటి పదం కావాలి; తెలుగులో 'ఫీల్ అవ్వకండి' అని అక్కడే ఆపేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Is Padma angry on me?",
      right: "Is Padma angry with me?",
      why: {
        en: "English says angry with a person; Telugu నా మీద makes people say on.",
        te: "ఇంగ్లీష్‌లో మనిషి మీద కోపానికి angry with; తెలుగు 'నా మీద' వల్ల on అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your friend didn't come to the concert. Ask her gently what happened.",
        te: "మీ స్నేహితురాలు కచేరీకి రాలేదు. ఏమైందో ఆవిడని మెల్లగా అడగండి.",
      },
      options: ["What happened? Why didn't you come?", "What happened? Why you didn't come?", "What happened? Why didn't you came?"],
      answer: 0,
      why: {
        en: "In a why question, didn't comes before you, and the verb stays plain.",
        te: "why ప్రశ్నలో didn't, you కంటే ముందు వస్తుంది; verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Never mind. It ___ to everyone.",
      te: "పర్లేదు. అందరికీ అలా జరుగుతుంది.",
      options: ["happens", "happen", "is happening"],
      answer: 0,
      why: {
        en: "It, like he or she, takes s on the verb, and a general truth takes no -ing.",
        te: "it (he, she లాగా) వస్తే verb కి s; ఎప్పుడూ జరిగే విషయానికి -ing రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: I should have left earlier. I missed the bus. What do you say?",
        te: "ఇంకా ముందే బయలుదేరాల్సింది, బస్సు మిస్ అయ్యాను అని స్నేహితులు అన్నారు. మీరు ఏమంటారు?",
      },
      options: ["Never mind. There's another bus at six.", "I don't mind. There's another bus at six.", "Yes, you should have. So careless!"],
      answer: 0,
      why: {
        en: "Never mind comforts your friend; I don't mind only says it does not trouble you.",
        te: "Never mind అంటే 'పర్లేదు, బాధపడకండి' అని ఓదార్పు; I don't mind అంటే 'నాకు అభ్యంతరం లేదు' అని మాత్రమే.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "There are two more concert next month.",
      wrongIndex: 4,
      fix: "There are two more concerts next month.",
      why: {
        en: "After two, the word takes s; Telugu adds లు in the same way.",
        te: "two తర్వాత s వస్తుంది; తెలుగులోనూ కచేరీ కాదు, కచేరీలు అంటాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour forgot to buy milk and is upset with himself. Comfort him.",
        te: "పక్కింటాయన పాలు కొనడం మర్చిపోయి, తన మీద తనే విసుక్కుంటున్నారు. ఆయనకి ధైర్యం చెప్పండి.",
      },
      expected: ["Never mind. It happens to everyone.", "Never mind. It happens.", "Don't worry. These things happen.", "Don't blame yourself."],
      options: ["Never mind. It happens to everyone.", "Never mind. It is happening to everyone.", "Your mistake. Go and buy it now."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: Aren't you angry with me? You are not angry at all. Answer kindly.",
        te: "నా మీద కోపంగా లేరా? అని స్నేహితులు అడుగుతున్నారు. మీకు అసలు కోపం లేదు. మెత్తగా జవాబు చెప్పండి.",
      },
      expected: ["No, I'm not angry. Don't worry.", "No, not at all.", "No, I'm not. Never mind.", "No, I'm not angry."],
      options: ["No, I'm not angry. Don't worry.", "Yes, I'm not angry. Don't worry.", "No, I'm not angry on you."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The missed concert", te: "మిస్ అయిన కచేరీ" },
    scene: {
      en: "Yesterday there was a music concert at the town hall. Your friend Rahim had a ticket, but he didn't come. He calls you.",
      te: "నిన్న టౌన్ హాల్‌లో సంగీత కచేరీ జరిగింది. మీ స్నేహితుడు రహీమ్ గారి దగ్గర టికెట్ ఉన్నా, ఆయన రాలేదు. ఇప్పుడు మీకు ఫోన్ చేశారు.",
    },
    partner: { en: "Rahim (your friend)", te: "రహీమ్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "comfort", label: { en: "Comforting a friend", te: "ధైర్యం చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm so sorry I missed the concert yesterday.",
        te: "హలో! నిన్న కచేరీ మిస్ అయినందుకు చాలా బాధగా ఉంది.",
        hint: { en: "Say it is okay, and ask him what happened.", te: "పర్లేదని చెప్పి, ఏమైందని ఆయన్ని అడగండి." },
        replies: [
          { say: "Never mind. What happened?", good: true, skill: "comfort" },
          { say: "Never mind. Why you didn't come?", good: false, skill: "comfort", fixIt: "question" },
        ],
      },
      {
        partner: "I fell asleep after lunch. I should have set an alarm.",
        te: "భోజనం తర్వాత నిద్రపట్టేసింది. అలారం పెట్టుకోవాల్సింది.",
        hint: { en: "Tell him kindly that this can happen to anyone.", te: "ఇది ఎవరికైనా జరగొచ్చని ఆయనకి మెత్తగా చెప్పండి." },
        replies: [
          { say: "It happens to everyone. Don't blame yourself.", good: true, skill: "comfort" },
          { say: "These things happen. Don't feel bad.", good: true, skill: "comfort" },
          {
            say: "Sleeping in the afternoon? So lazy!",
            good: false,
            skill: "polite",
            react: { en: "Lazy? I was very tired, you know.", te: "బద్ధకమా? చాలా అలసిపోయానండీ." },
          },
        ],
      },
      {
        partner: "Was the singer good? I really wanted to hear her.",
        te: "గాయని బాగా పాడారా? ఆవిడ పాట వినాలని చాలా అనుకున్నాను.",
        hint: { en: "Say she was wonderful, and offer to send him a video.", te: "ఆవిడ అద్భుతంగా పాడారని చెప్పి, వీడియో పంపుతానని చెప్పండి." },
        replies: [
          { say: "She was wonderful. I'll send you a video on WhatsApp.", good: true, skill: "comfort" },
          { say: "She were wonderful. I'll send you a video on WhatsApp.", good: false, skill: "comfort" },
        ],
      },
      {
        partner: "Thank you! When is the next concert?",
        te: "థాంక్యూ! తర్వాతి కచేరీ ఎప్పుడు?",
        hint: { en: "Say it is next month, and suggest going together.", te: "వచ్చే నెల అని చెప్పి, కలిసి వెళ్దామని సూచించండి." },
        replies: [
          { say: "It's next month. Let's go together next time.", good: true, skill: "polite" },
          { say: "It's on next month. Let's go together next time.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
