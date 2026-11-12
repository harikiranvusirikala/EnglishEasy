import type { Lesson } from "../../types";

/** Week 68, Day 5 (CURRICULUM §5): habits then and now — used to, the present, enjoy + -ing. I used to skip breakfast, but now I eat on time. */
export const day: Lesson = {
  id: "my-healthy-routine-now",
  kind: "lesson",
  title: { en: "My Healthy Routine", te: "నా మంచి అలవాట్లు" },
  subtitle: "used to … but now …; enjoy + -ing",
  summary: {
    en: "Learn to talk about how your habits have changed: I used to skip breakfast, but now I eat on time.",
    te: "మీ అలవాట్లు ఎలా మారాయో చెప్పడం నేర్చుకుందాం: I used to skip breakfast, but now I eat on time.",
  },
  seo: {
    title: "Talking About Healthy Habits in English for Telugu Speakers",
    description:
      "Say I used to skip breakfast, but now I eat on time and I enjoy doing yoga. Simple lessons for Telugu speakers on habits then and now.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "enjoy doing", role: "action" },
    { text: "yoga", role: "what" },
    { text: "every morning", role: "when" },
  ],
  core: [
    { en: "I used to skip breakfast.", te: "ఇదివరకు నాకు టిఫిన్ మానేసే అలవాటు ఉండేది.", extra: ["use"] },
    { en: "I used to skip breakfast, but now I eat on time.", te: "ఇదివరకు టిఫిన్ మానేసే అలవాటు ఉండేది, కానీ ఇప్పుడు టైమ్‌కి తింటాను.", extra: ["use"] },
    { en: "I enjoy doing yoga with my neighbours.", te: "పక్కింటివాళ్ళతో కలిసి యోగా చేయడం నాకు చాలా ఇష్టం.", extra: ["to"] },
    { en: "Now I go to bed before ten.", te: "ఇప్పుడు పది లోపే పడుకుంటాను.", extra: ["at"] },
    { en: "I don't eat fried snacks anymore.", te: "నేను ఇక వేయించిన చిరుతిళ్ళు తినను.", extra: ["any"] },
    { en: "These days, I walk to the market instead of taking an auto.", te: "ఈ మధ్య ఆటో ఎక్కకుండా మార్కెట్‌కి నడిచే వెళ్తున్నాను.", extra: ["take"] },
    { en: "Meditation helps me feel calm.", te: "ధ్యానం చేస్తే నాకు ప్రశాంతంగా అనిపిస్తుంది.", extra: ["feeling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell a friend or neighbour one habit you have changed: I used to …, but now I …",
    te: "మీరు మార్చుకున్న ఒక అలవాటు గురించి ఒక స్నేహితులకి గానీ పక్కింటివారికి గానీ చెప్పండి: I used to …, but now I …",
  },
  words: [
    { en: "healthy", te: "ఆరోగ్యకరమైన" },
    { en: "unhealthy", te: "ఆరోగ్యానికి మంచిది కాని" },
    { en: "meditation", te: "ధ్యానం" },
    { en: "lifestyle", te: "జీవన విధానం, రోజువారీ అలవాట్లు" },
    { en: "energy", te: "శక్తి, ఉత్సాహం" },
  ],
  grammar: ["used-to-would", "gerunds-infinitives", "present-simple"],
  topics: ["health", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Then and now", te: "అప్పుడు, ఇప్పుడు" },
      body: {
        en: "For an old habit, say used to: I used to skip breakfast. For your habit today, use the present: Now I eat on time.",
        te: "పాత అలవాటుకి used to: I used to skip breakfast. ఇప్పటి అలవాటుకి present: Now I eat on time.",
      },
      bridge: {
        te: ["నాకు", "రోజూ పొద్దున", "యోగా చేయడం", "ఇష్టం"],
        en: [
          { text: "I", role: "who" },
          { text: "enjoy doing", role: "action" },
          { text: "yoga", role: "what" },
          { text: "every morning", role: "when" },
        ],
      },
      examples: [
        { en: "I used to skip breakfast.", te: "ఇదివరకు నాకు టిఫిన్ మానేసే అలవాటు ఉండేది." },
        { en: "I used to skip breakfast, but now I eat on time.", te: "ఇదివరకు టిఫిన్ మానేసే అలవాటు ఉండేది, కానీ ఇప్పుడు టైమ్‌కి తింటాను." },
        { en: "I enjoy doing yoga with my neighbours.", te: "పక్కింటివాళ్ళతో కలిసి యోగా చేయడం నాకు చాలా ఇష్టం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Habits, then and now", te: "అలవాట్లు: అప్పుడు, ఇప్పుడు" },
      items: [
        {
          form: "used to + verb",
          useFor: { en: "A habit in the past, not now.", te: "ఇదివరకటి అలవాటు, ఇప్పుడు లేదు." },
          example: { en: "We used to eat dinner very late.", te: "ఇదివరకు మేము రాత్రి భోజనం చాలా ఆలస్యంగా చేసేవాళ్ళం." },
        },
        {
          form: "now, these days + present",
          useFor: { en: "Your habit today.", te: "ఇప్పటి అలవాటు." },
          example: { en: "These days, I eat dinner at eight.", te: "ఈ మధ్య ఎనిమిదింటికే రాత్రి భోజనం చేస్తున్నాను." },
        },
        {
          form: "enjoy, like + -ing",
          useFor: { en: "Something you are happy to do.", te: "ఇష్టంగా చేసే పని." },
          example: { en: "I enjoy cooking healthy food.", te: "ఆరోగ్యకరమైన వంట చేయడం నాకు ఇష్టం." },
        },
        {
          form: "not … anymore",
          useFor: { en: "You have left the old habit.", te: "పాత అలవాటు వదిలేశారు." },
          example: { en: "I don't buy unhealthy snacks anymore.", te: "ఆరోగ్యానికి మంచిది కాని చిరుతిళ్ళు నేను ఇక కొనను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am walking daily.",
      right: "I walk every day.",
      why: {
        en: "A daily habit takes the simple present; am walking is only for right now.",
        te: "రోజూ చేసే పనికి simple present; am walking అంటే ఈ క్షణం జరుగుతున్నది మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am used to skip breakfast.",
      right: "I used to skip breakfast.",
      why: {
        en: "For an old habit, used to has no am before it; am used to means something else.",
        te: "పాత అలవాటుకి used to ముందు am రాదు; am used to అంటే వేరే అర్థం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "You skipped breakfast in the past. Now you eat on time. Tell your friend.",
        te: "ఇదివరకు మీరు టిఫిన్ మానేసేవారు. ఇప్పుడు టైమ్‌కి తింటున్నారు. స్నేహితులకి చెప్పండి.",
      },
      options: [
        "I used to skip breakfast, but now I eat on time.",
        "I am used to skip breakfast, but now I eat on time.",
        "I used to skipping breakfast, but now I eat on time.",
      ],
      answer: 0,
      why: {
        en: "An old habit takes used to and the plain verb, with no am.",
        te: "పాత అలవాటుకి used to + verb; am రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I enjoy ___ yoga with my neighbours.",
      te: "పక్కింటివాళ్ళతో కలిసి యోగా చేయడం నాకు చాలా ఇష్టం.",
      options: ["doing", "to do", "do"],
      answer: 0,
      why: {
        en: "Enjoy is followed by the -ing form, never by to.",
        te: "enjoy తర్వాత -ing రూపం వస్తుంది; to రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your friend asks: Don't you drink coffee anymore? You stopped last month. What do you say?",
        te: "మీ స్నేహితులు Don't you drink coffee anymore? అని అడిగారు. మీరు పోయిన నెల మానేశారు. ఏమంటారు?",
      },
      options: ["No, I don't. I stopped last month.", "Yes, I don't. I stopped last month.", "No, I didn't. I stopped last month."],
      answer: 0,
      why: {
        en: "English answers the fact: you don't drink it now, so say no with don't. Telugu అవును doesn't fit.",
        te: "ఇంగ్లీష్‌లో జవాబు నిజాన్ని బట్టి: ఇప్పుడు తాగట్లేదు కాబట్టి No, don't తో. తెలుగులో లాగా అవును అనకూడదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Now I do yoga in every morning.",
      wrongIndex: 4,
      fix: "Now I do yoga every morning.",
      why: {
        en: "Every morning, every day and every week take no in or on before them.",
        te: "every morning, every day, every week ముందు in, on రావు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your friend asks how often you do yoga. Say every day.",
        te: "యోగా ఎన్నిసార్లు చేస్తారని స్నేహితులు అడుగుతున్నారు. రోజూ అని చెప్పండి.",
      },
      expected: ["I do yoga every day.", "Every day.", "I do it every day."],
      options: ["I do yoga every day.", "I am doing yoga daily.", "I doing yoga every day."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell your friend about an old habit: you slept late. Now you go to bed early.",
        te: "ఒక పాత అలవాటు గురించి స్నేహితులకి చెప్పండి: ఇదివరకు ఆలస్యంగా పడుకునేవారు. ఇప్పుడు త్వరగా పడుకుంటున్నారు.",
      },
      expected: ["I used to sleep late, but now I go to bed early.", "I used to go to bed late. Now I go early.", "I used to sleep late. Now I sleep early."],
      options: [
        "I used to sleep late, but now I go to bed early.",
        "I use to sleeping late, but now I go to bed early.",
        "I was sleep late, but now I go to bed early.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "After the yoga class", te: "యోగా క్లాస్ తర్వాత" },
    scene: {
      en: "After the morning yoga class, Ruth, a friend from the class, chats with you.",
      te: "పొద్దుటి యోగా క్లాస్ అయిపోయాక, క్లాస్‌లో మీ స్నేహితురాలు రూత్ గారు మీతో మాట్లాడుతున్నారు.",
    },
    partner: { en: "Ruth (a friend from the yoga class)", te: "రూత్ (యోగా క్లాస్ స్నేహితురాలు)" },
    skills: [
      { id: "habits", label: { en: "Then and now", te: "అప్పుడు, ఇప్పుడు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! You come every day now. That's wonderful!",
        te: "హలో! ఇప్పుడు మీరు రోజూ వస్తున్నారు. చాలా బాగుంది!",
        hint: { en: "Thank her, and say you like the class a lot.", te: "థాంక్స్ చెప్పి, క్లాస్ మీకు చాలా ఇష్టమని చెప్పండి." },
        replies: [
          { say: "Thank you! I really enjoy doing yoga here.", good: true, skill: "habits" },
          { say: "Thank you! I really enjoy to do yoga here.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "You have so much energy! Did you always get up early?",
        te: "మీలో చాలా ఉత్సాహం ఉంది! మీరు ఎప్పుడూ పొద్దున్నే లేచేవారా?",
        hint: { en: "Say no: in the past you slept late, but now you get up at five.", te: "లేదు అని చెప్పండి: ఇదివరకు ఆలస్యంగా పడుకునేవారు, ఇప్పుడు ఐదింటికే లేస్తారు." },
        replies: [
          { say: "No, I used to sleep late. Now I get up at five.", good: true, skill: "habits" },
          { say: "No, I am used to sleep late. Now I get up at five.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "What else have you changed in your lifestyle?",
        te: "మీ రోజువారీ అలవాట్లలో ఇంకా ఏం మార్చుకున్నారు?",
        hint: { en: "Say you have given up fried snacks, and you walk to the market now.", te: "వేయించిన చిరుతిళ్ళు మానేశారని, ఇప్పుడు మార్కెట్‌కి నడిచి వెళ్తున్నారని చెప్పండి." },
        replies: [
          { say: "I've stopped eating fried snacks. And I walk to the market now.", good: true, skill: "habits" },
          { say: "I've stopped eat fried snacks. And I walk to the market now.", good: false, skill: "habits" },
          {
            say: "Why are you asking? Mind your own business.",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I only wanted to learn from you.", te: "సారీ అండీ! మీ నుంచి నేర్చుకుందామని అడిగాను, అంతే." },
          },
        ],
      },
      {
        partner: "That's very healthy. See you tomorrow at six!",
        te: "అది చాలా మంచి అలవాటు. రేపు ఆరింటికి కలుద్దాం!",
        hint: { en: "Agree, and say goodbye kindly.", te: "ఒప్పుకుని, మర్యాదగా బై చెప్పండి." },
        replies: [
          { say: "Yes, see you tomorrow. Have a nice day!", good: true, skill: "polite" },
          { say: "Yes, I will seeing you tomorrow. Bye!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
