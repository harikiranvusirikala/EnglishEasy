import type { Lesson } from "../../types";

/** Week 68, Day 1 (CURRICULUM §5): verb + -ing after stop, give up, keep and avoid — My friend Rahim stopped smoking. */
export const day: Lesson = {
  id: "stopped-smoking-healthy-habits",
  kind: "lesson",
  title: { en: "Stop Smoking, Keep Walking", te: "మానేయడం, కొనసాగించడం" },
  subtitle: "stop, give up, keep, avoid + -ing",
  summary: {
    en: "Learn to talk about habits you stop, keep or avoid: My friend Rahim stopped smoking. Keep walking every day.",
    te: "మానేసే, కొనసాగించే, దూరంగా ఉండే అలవాట్ల గురించి చెప్పడం నేర్చుకుందాం: My friend Rahim stopped smoking. Keep walking every day.",
  },
  seo: {
    title: "Stop Smoking and Keep Walking in English for Telugu Speakers",
    description:
      "Say My friend stopped smoking and Keep walking every day. Simple lessons for Telugu speakers on stop, give up, keep and avoid + -ing.",
  },
  pattern: [
    { text: "My friend Rahim", role: "who" },
    { text: "stopped", role: "action" },
    { text: "smoking", role: "what" },
    { text: "last year", role: "when" },
  ],
  core: [
    { en: "My friend Rahim stopped smoking last year.", te: "నా స్నేహితుడు రహీమ్ గారు పోయిన సంవత్సరం పొగ తాగడం మానేశారు.", extra: ["smoke"] },
    { en: "I'm trying to avoid eating late at night.", te: "రాత్రి ఆలస్యంగా తినకుండా ఉండటానికి ప్రయత్నిస్తున్నాను.", extra: ["eat"] },
    { en: "Keep walking every day.", te: "రోజూ నడుస్తూనే ఉండండి.", extra: ["walk"] },
    { en: "Padma gave up eating fried snacks.", te: "పద్మ గారు వేయించిన చిరుతిళ్ళు తినడం మానేశారు.", extra: ["give"] },
    { en: "Giving up smoking is hard, but you can do it.", te: "పొగ తాగడం మానేయడం కష్టమే, కానీ మీరు చేయగలరు.", extra: ["Give"] },
    { en: "Have you stopped drinking coffee at night?", te: "రాత్రిపూట కాఫీ తాగడం మానేశారా?", extra: ["drink"] },
    { en: "Avoid sitting in one place for too long.", te: "ఒకే చోట ఎక్కువసేపు కూర్చోకుండా చూసుకోండి.", extra: ["sit"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one habit you want to keep and one you want to avoid. Say both aloud: I keep … I avoid …",
    te: "మీరు కొనసాగించాలనుకునే ఒక అలవాటు, మానుకోవాలనుకునే ఒక అలవాటు ఆలోచించండి. రెండూ గట్టిగా చెప్పండి: I keep … I avoid …",
  },
  words: [
    { en: "give up", te: "మానేయడం (అలవాటు)" },
    { en: "quit", te: "పూర్తిగా మానేయడం" },
    { en: "cigarette", te: "సిగరెట్" },
    { en: "tobacco", te: "పొగాకు" },
    { en: "keep going", te: "ఆపకుండా కొనసాగించడం" },
  ],
  grammar: ["gerunds-infinitives", "past-simple"],
  topics: ["health", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "stop, give up, keep, avoid + -ing", te: "stop, give up, keep, avoid తర్వాత -ing" },
      body: {
        en: "After stop, give up, keep and avoid, the next verb takes -ing: Rahim stopped smoking. Keep walking. Telugu says తాగడం; English says smoking.",
        te: "stop, give up, keep, avoid తర్వాత వచ్చే verb కి -ing చేర్చాలి: Rahim stopped smoking (రహీమ్ గారు పొగ తాగడం మానేశారు).",
      },
      bridge: {
        te: ["నా స్నేహితుడు రహీమ్ గారు", "పోయిన సంవత్సరం", "పొగ తాగడం", "మానేశారు"],
        en: [
          { text: "My friend Rahim", role: "who" },
          { text: "stopped", role: "action" },
          { text: "smoking", role: "what" },
          { text: "last year", role: "when" },
        ],
      },
      examples: [
        { en: "My friend Rahim stopped smoking last year.", te: "నా స్నేహితుడు రహీమ్ గారు పోయిన సంవత్సరం పొగ తాగడం మానేశారు." },
        { en: "Keep walking every day.", te: "రోజూ నడుస్తూనే ఉండండి." },
        { en: "Padma gave up eating fried snacks.", te: "పద్మ గారు వేయించిన చిరుతిళ్ళు తినడం మానేశారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which word?", te: "ఏ మాట ఎప్పుడు?" },
      items: [
        {
          form: "stop + -ing",
          useFor: { en: "You don't do it anymore.", te: "ఇక ఆ పని చేయరు." },
          example: { en: "Sarala stopped drinking cool drinks.", te: "సరళ గారు cool drinks తాగడం మానేశారు." },
        },
        {
          form: "give up + -ing",
          useFor: { en: "You stop a habit for good, and it takes effort.", te: "కష్టపడి ఒక అలవాటుని శాశ్వతంగా మానేయడం." },
          example: { en: "Our neighbour gave up chewing tobacco.", te: "మా పక్కింటి ఆయన పొగాకు నమలడం మానేశారు." },
        },
        {
          form: "keep + -ing",
          useFor: { en: "You go on doing it, without stopping.", te: "ఆపకుండా చేస్తూనే ఉండటం." },
          example: { en: "Keep drinking water during the day.", te: "పగలంతా నీళ్ళు తాగుతూనే ఉండండి." },
        },
        {
          form: "avoid + -ing",
          useFor: { en: "You try not to do it.", te: "ఆ పని చేయకుండా జాగ్రత్తపడటం." },
          example: { en: "Avoid eating oily food at night.", te: "రాత్రిపూట నూనె పదార్థాలు తినకుండా చూసుకోండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Avoid to eat late at night.",
      right: "Avoid eating late at night.",
      why: {
        en: "Avoid is always followed by the -ing form of the verb, never by to.",
        te: "avoid తర్వాత verb కి ఎప్పుడూ -ing వస్తుంది; to రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Smoking is bad habit.",
      right: "Smoking is a bad habit.",
      why: {
        en: "One habit needs a before it; Telugu has no word like a, so we drop it.",
        te: "ఒక్క అలవాటు అంటే ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు, అందుకే వదిలేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A friend asks about Rahim. He smoked before, but not now. What do you say?",
        te: "మీ స్నేహితులు ఒకరు రహీమ్ గారి గురించి అడుగుతున్నారు. ఆయన ఇదివరకు సిగరెట్ తాగేవారు, ఇప్పుడు తాగట్లేదు. ఏమంటారు?",
      },
      options: ["Rahim stopped smoking last year.", "Rahim stopped smoke last year.", "Rahim is stopped smoking last year."],
      answer: 0,
      why: {
        en: "After stop, the verb takes -ing, and the simple past needs no is before it.",
        te: "stop తర్వాత verb కి -ing వస్తుంది; simple past ముందు is రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Please try to avoid ___ late at night.",
      te: "రాత్రి ఆలస్యంగా తినకుండా ఉండటానికి ప్రయత్నించండి.",
      options: ["eating", "to eat", "eat"],
      answer: 0,
      why: {
        en: "Avoid takes the -ing form; Telugu తినకుండా tempts us to use to.",
        te: "avoid తర్వాత -ing రూపం; 'తినకుండా' అని తెలుగులో అనడం వల్ల to వాడాలనిపిస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your friend if he still smokes.", te: "ఇంకా సిగరెట్ తాగుతున్నారా అని మీ స్నేహితుడిని అడగండి." },
      options: ["Do you still smoke?", "You still smoke?", "Are you still smoke?"],
      answer: 0,
      why: {
        en: "A question about a habit starts with do; Telugu asks with the tone alone.",
        te: "అలవాటు గురించి ప్రశ్న do తో మొదలవుతుంది; తెలుగులో గొంతు మార్చి అడిగితే చాలు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Keep walk every day, even for ten minutes.",
      wrongIndex: 1,
      fix: "Keep walking every day, even for ten minutes.",
      why: {
        en: "Keep means go on doing, and the verb after it takes -ing.",
        te: "keep అంటే చేస్తూనే ఉండటం; దాని తర్వాత verb కి -ing వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend Rahim has not smoked for a month. Praise him, and tell him not to stop now.",
        te: "మీ స్నేహితుడు రహీమ్ గారు నెల రోజులుగా సిగరెట్ ముట్టలేదు. ఆయన్ని మెచ్చుకుని, ఇప్పుడు ఆపొద్దని చెప్పండి.",
      },
      expected: ["Well done! Keep going.", "That's great! Keep going.", "Well done! Don't start again."],
      options: ["Well done! Keep going.", "Well done! Keep go.", "Well done! Keep to go."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your neighbour gave up smoking. Ask him when he stopped.",
        te: "మీ పక్కింటి ఆయన సిగరెట్ మానేశారు. ఎప్పుడు మానేశారని ఆయన్ని అడగండి.",
      },
      expected: ["When did you stop smoking?", "When did you give up smoking?", "When did you stop?"],
      options: ["When did you stop smoking?", "When you stopped smoking?", "When did you stopped smoking?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Giving up smoking", te: "సిగరెట్ మానేయడం" },
    scene: {
      en: "Your friend Venkat wants to give up smoking. He meets you at the tea stall to talk about it.",
      te: "మీ స్నేహితుడు వెంకట్ గారు సిగరెట్ మానేయాలనుకుంటున్నారు. ఆ విషయం మాట్లాడటానికి టీ కొట్టు దగ్గర మిమ్మల్ని కలిశారు.",
    },
    partner: { en: "Venkat (your friend)", te: "వెంకట్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "encourage", label: { en: "Encouraging a friend", te: "స్నేహితుడికి ధైర్యం చెప్పడం" } },
      { id: "habits", label: { en: "stop, keep, avoid + -ing", te: "stop, keep, avoid తో -ing" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "I want to give up cigarettes. But it's very hard.",
        te: "నాకు సిగరెట్లు మానేయాలని ఉంది. కానీ చాలా కష్టంగా ఉంది.",
        hint: { en: "Tell him it is a good decision, and that he can do it.", te: "అది మంచి నిర్ణయం అని, ఆయన చేయగలరని చెప్పండి." },
        replies: [
          { say: "That's a great decision. You can do it!", good: true, skill: "encourage" },
          { say: "Smoking is bad habit. You can do it!", good: false, skill: "encourage", fixIt: "article" },
        ],
      },
      {
        partner: "I've tried before, but I always started again.",
        te: "ఇంతకు ముందు ప్రయత్నించాను, కానీ ప్రతిసారీ మళ్ళీ మొదలుపెట్టాను.",
        hint: { en: "Tell him not to lose hope, and to go on trying.", te: "ఆశ వదులుకోవద్దని, ప్రయత్నిస్తూనే ఉండమని చెప్పండి." },
        replies: [
          { say: "Don't give up. Keep trying!", good: true, skill: "habits" },
          { say: "Don't give up. Keep try!", good: false, skill: "habits" },
          {
            say: "You never listen. That's your problem.",
            good: false,
            skill: "polite",
            react: { en: "That's not kind. I'm trying my best.", te: "అలా అనడం బాగాలేదు. నేను శాయశక్తులా ప్రయత్నిస్తున్నాను." },
          },
        ],
      },
      {
        partner: "Rahim quit last year. What helped him?",
        te: "రహీమ్ పోయిన సంవత్సరం మానేశారు. ఆయనకి ఏది సాయపడింది?",
        hint: { en: "Say what Rahim stayed away from, and what he did every evening.", te: "రహీమ్ గారు దేనికి దూరంగా ఉన్నారో, రోజూ సాయంత్రం ఏం చేశారో చెప్పండి." },
        replies: [
          { say: "He avoided going to the tea stall. He walked every evening instead.", good: true, skill: "habits" },
          { say: "He avoided to go to the tea stall. He walked every evening instead.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "Good idea. I'll start tomorrow. Will you walk with me?",
        te: "మంచి ఆలోచన. రేపటి నుంచి మొదలుపెడతాను. నాతో కలిసి నడుస్తారా?",
        hint: { en: "Say yes happily, and encourage him once more.", te: "సంతోషంగా సరే అని, ఇంకోసారి ధైర్యం చెప్పండి." },
        replies: [
          { say: "Of course! Let's walk together. Keep going!", good: true, skill: "encourage" },
          { say: "Of course! We will walking together every evening.", good: false, skill: "encourage" },
        ],
      },
    ],
  },
};
