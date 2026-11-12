import type { Lesson } from "../../types";

/** Week 43, Day 4 (CURRICULUM §5): present perfect (no time said) vs past simple (with a time) — I have learned to use a smartphone. I started a shop in 2002. */
export const day: Lesson = {
  id: "biggest-changes-in-my-life",
  kind: "lesson",
  title: { en: "The Biggest Changes", te: "పెద్ద మార్పులు" },
  subtitle: "I have learned … / I started … in …",
  summary: {
    en: "Learn to talk about the changes in your life: with no time, I have learned to use a smartphone; with a time, I started a shop in 2002.",
    te: "మీ జీవితంలో మార్పుల గురించి చెప్పడం నేర్చుకుందాం: సమయం లేకుండా I have learned to use a smartphone; సమయంతో I started a shop in 2002.",
  },
  seo: {
    title: "Talking About Life Changes in English for Telugu Speakers",
    description:
      "Say I have learned to use a smartphone and I started a shop in 2002. Simple lessons for Telugu speakers on have learned and the past.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have learned", role: "action" },
    { text: "to use a smartphone", role: "what" },
  ],
  core: [
    { en: "I have learned to use a smartphone.", te: "నేను smartphone వాడటం నేర్చుకున్నాను.", extra: ["learn"] },
    { en: "I started a small tailoring shop in two thousand two.", te: "నేను 2002 లో ఒక చిన్న టైలరింగ్ షాపు మొదలుపెట్టాను.", extra: ["have"] },
    { en: "My life has changed a lot.", te: "నా జీవితం చాలా మారిపోయింది.", extra: ["is"] },
    { en: "When did you buy your first phone?", te: "మీ మొదటి ఫోన్ ఎప్పుడు కొన్నారు?", extra: ["have"] },
    { en: "I moved into my own house in nineteen ninety-eight.", te: "1998 లో నేను సొంత ఇంటికి మారాను.", extra: ["have"] },
    { en: "The town has grown a lot since then.", te: "అప్పటి నుంచి ఊరు చాలా పెరిగింది.", extra: ["grew"] },
    { en: "I stopped smoking in two thousand ten.", te: "నేను 2010 లో సిగరెట్ మానేశాను.", extra: ["stop"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone one change in your life: I have learned … or I started … in …",
    te: "మీ జీవితంలో ఒక మార్పు గురించి ఎవరికైనా చెప్పండి: I have learned … లేదా I started … in …",
  },
  words: [
    { en: "smartphone", te: "smartphone, టచ్ ఫోన్" },
    { en: "tailoring", te: "టైలరింగ్, బట్టలు కుట్టే పని" },
    { en: "turning point", te: "జీవితంలో మలుపు" },
    { en: "since then", te: "అప్పటి నుంచి" },
    { en: "grown", te: "పెరిగింది (has grown)" },
  ],
  grammar: ["present-perfect", "past-simple"],
  topics: ["people", "technology", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "With a time, or without?", te: "సమయంతోనా, లేకుండానా?" },
      body: {
        en: "For a change with no time said, use have: I have learned to use a smartphone. Say when, and switch to the past: I started a shop in 2002.",
        te: "సమయం చెప్పని మార్పుకి have: I have learned … . ఎప్పుడో చెప్తే past కి మారండి: I started a shop in 2002.",
      },
      bridge: {
        te: ["నేను", "2002 లో", "ఒక చిన్న షాపు", "మొదలుపెట్టాను"],
        en: [
          { text: "I", role: "who" },
          { text: "started", role: "action" },
          { text: "a small shop", role: "what" },
          { text: "in 2002", role: "when" },
        ],
      },
      examples: [
        { en: "I have learned to use a smartphone.", te: "నేను smartphone వాడటం నేర్చుకున్నాను." },
        { en: "I started a small tailoring shop in two thousand two.", te: "నేను 2002 లో ఒక చిన్న టైలరింగ్ షాపు మొదలుపెట్టాను." },
        { en: "My life has changed a lot.", te: "నా జీవితం చాలా మారిపోయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Have learned or learned?", te: "have learned ఆ, learned ఆ?" },
      items: [
        {
          form: "have learned …",
          useFor: { en: "A change; the time is not said.", te: "ఒక మార్పు; సమయం చెప్పలేదు." },
          example: { en: "Geetha has learned to ride a scooter.", te: "గీత గారు స్కూటర్ నడపడం నేర్చుకున్నారు." },
        },
        {
          form: "started … in 2002",
          useFor: { en: "You say when: a year, ago, last month.", te: "ఎప్పుడో చెప్తున్నారు: సంవత్సరం, ago, last month." },
          example: { en: "I stopped smoking in two thousand ten.", te: "నేను 2010 లో సిగరెట్ మానేశాను." },
        },
        {
          form: "since then",
          useFor: { en: "From that time to now; it goes with have.", te: "అప్పటి నుంచి ఇప్పటి దాకా; దానితో have వస్తుంది." },
          example: { en: "I retired in two thousand twelve. Since then, I have learned yoga.", te: "నేను 2012 లో రిటైర్ అయ్యాను. అప్పటి నుంచి యోగా నేర్చుకున్నాను." },
        },
        {
          form: "a turning point",
          useFor: { en: "An event that changed your life.", te: "జీవితాన్ని మార్చేసిన సంఘటన." },
          example: { en: "Moving to Hyderabad was a turning point for me.", te: "హైదరాబాద్‌కి మారడం నా జీవితంలో ఒక మలుపు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I have started a shop in two thousand two.",
      right: "I started a shop in two thousand two.",
      why: {
        en: "Once you say the year, drop have and use the past.",
        te: "సంవత్సరం చెప్పగానే have తీసేసి past వాడండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "Now I am having a smartphone.",
      right: "Now I have a smartphone.",
      why: {
        en: "Have for owning is a state, so it takes no -ing; Telugu says ఉంది.",
        te: "'నా దగ్గర ఉంది' అనే అర్థంలో have ఒక స్థితి; దానికి -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A friend asks what is new in your life. You can now send WhatsApp messages. What do you say?",
        te: "మీ జీవితంలో కొత్తగా ఏంటని స్నేహితులు అడుగుతున్నారు. మీరు ఇప్పుడు WhatsApp మెసేజ్‌లు పంపగలరు. ఏమంటారు?",
      },
      options: [
        "I have learned to send WhatsApp messages.",
        "I am learned to send WhatsApp messages.",
        "I learned to send WhatsApp messages in last year.",
      ],
      answer: 0,
      why: {
        en: "A change with no time said takes have, not am.",
        te: "సమయం చెప్పని మార్పుకి have వస్తుంది, am కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ a small tailoring shop in two thousand two.",
      te: "నేను 2002 లో ఒక చిన్న టైలరింగ్ షాపు మొదలుపెట్టాను.",
      options: ["started", "have started", "am starting"],
      answer: 0,
      why: {
        en: "The year is said, so only the plain past fits here.",
        te: "సంవత్సరం చెప్పారు కాబట్టి ఇక్కడ past మాత్రమే సరిపోతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Tell an old friend you bought a new phone last month.",
        te: "పోయిన నెల కొత్త ఫోన్ కొన్నారని ఒక పాత స్నేహితులకి చెప్పండి.",
      },
      options: ["I bought a smartphone last month.", "I bought smartphone last month.", "I have bought a smartphone last month."],
      answer: 0,
      why: {
        en: "One phone needs a, and last month is finished, so use the past.",
        te: "ఒక్క ఫోన్ కాబట్టి a కావాలి; last month అయిపోయిన సమయం, అందుకే past.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Since then, my life changed a lot.",
      wrongIndex: 4,
      fix: "Since then, my life has changed a lot.",
      why: {
        en: "Since then runs up to now, so changed needs has before it.",
        te: "since then అంటే ఇప్పటి దాకా; అందుకే changed ముందు has కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "An old friend asks: What's new? Say you have learned to use a smartphone.",
        te: "కొత్త విషయాలేంటని పాత స్నేహితులు అడుగుతున్నారు. smartphone వాడటం నేర్చుకున్నారని చెప్పండి.",
      },
      expected: ["I have learned to use a smartphone.", "I've learned to use a smartphone.", "I have learned to use a smartphone now."],
      options: ["I have learned to use a smartphone.", "I am learning use a smartphone.", "I have learn to use a smartphone."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell your friend you started a tailoring shop in 2002.",
        te: "2002 లో ఒక టైలరింగ్ షాపు మొదలుపెట్టారని స్నేహితులకి చెప్పండి.",
      },
      expected: [
        "I started a tailoring shop in two thousand two.",
        "I started a small tailoring shop in two thousand two.",
        "In two thousand two, I started a tailoring shop.",
      ],
      options: [
        "I started a tailoring shop in two thousand two.",
        "I started tailoring shop in two thousand two.",
        "I have started a tailoring shop in two thousand two.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "An old friend visits", te: "పాత స్నేహితురాలు వచ్చారు" },
    scene: {
      en: "Your old friend Kamala visits after many years. You talk over coffee.",
      te: "చాలా ఏళ్ళ తర్వాత మీ పాత స్నేహితురాలు కమల గారు వచ్చారు. కాఫీ తాగుతూ మాట్లాడుకుంటున్నారు.",
    },
    partner: { en: "Kamala (your old friend)", te: "కమల (మీ పాత స్నేహితురాలు)" },
    skills: [
      { id: "changes", label: { en: "Talking about changes", te: "మార్పుల గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "It's so good to see you! You look well.",
        te: "మిమ్మల్ని చూడటం చాలా సంతోషంగా ఉంది! బాగున్నారు.",
        hint: { en: "Thank her, and say you are happy to see her too.", te: "థాంక్స్ చెప్పి, ఆవిడని చూడటం మీకూ సంతోషమని చెప్పండి." },
        replies: [
          { say: "Thank you! It's good to see you too.", good: true, skill: "polite" },
          {
            say: "Thanks. But you look very old now!",
            good: false,
            skill: "polite",
            react: { en: "Old? Well, we are both older now!", te: "వయసైపోయిందా? సరేలెండి, మన ఇద్దరికీ వయసు పెరిగింది కదా!" },
          },
        ],
      },
      {
        partner: "So, what has changed in your life?",
        te: "చెప్పండి, మీ జీవితంలో ఏం మారింది?",
        hint: { en: "Say you started a small shop, and say the year: 2002.", te: "ఒక చిన్న షాపు మొదలుపెట్టారని, ఆ సంవత్సరం చెప్పండి: 2002." },
        replies: [
          { say: "I started a small tailoring shop in two thousand two.", good: true, skill: "changes" },
          { say: "I have started a small tailoring shop in two thousand two.", good: false, skill: "changes" },
        ],
      },
      {
        partner: "Wonderful! Anything new these days?",
        te: "చాలా బాగుంది! ఈ మధ్య కొత్తగా ఏమైనా?",
        hint: { en: "Say you can now use a smartphone. Don't say when.", te: "ఇప్పుడు smartphone వాడగలరని చెప్పండి. ఎప్పుడో చెప్పకండి." },
        replies: [
          { say: "Yes, I have learned to use a smartphone!", good: true, skill: "changes" },
          { say: "Yes, I am having a smartphone now!", good: false, skill: "changes", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Me too! Let's keep in touch on WhatsApp.",
        te: "నేను కూడా! WhatsApp లో టచ్‌లో ఉందాం.",
        hint: { en: "Agree happily, and ask for her number.", te: "సంతోషంగా ఒప్పుకుని, ఆవిడ నంబర్ అడగండి." },
        replies: [
          { say: "Yes, let's! Please give me your number.", good: true, skill: "polite" },
          { say: "Sure! What's your number?", good: true, skill: "polite" },
          { say: "Sure! What is your good number?", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
