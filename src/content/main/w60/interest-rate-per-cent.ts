import type { Lesson } from "../../types";

/** Week 60, Day 2 (CURRICULUM §5): per cent, the interest rate and point — The interest rate is seven point five per cent. */
export const day: Lesson = {
  id: "interest-rate-per-cent",
  kind: "lesson",
  title: { en: "Seven Per Cent Interest", te: "ఏడు శాతం వడ్డీ" },
  subtitle: "per cent, point",
  summary: {
    en: "Learn to say and ask about interest rates: The interest rate is seven point five per cent. Senior citizens usually get half a per cent more.",
    te: "వడ్డీ రేట్లు చెప్పడం, అడగడం నేర్చుకుందాం: The interest rate is seven point five per cent. Senior citizens usually get half a per cent more.",
  },
  seo: {
    title: "Interest Rates and Per Cent in English for Telugu Speakers",
    description:
      "Say The interest rate is seven point five per cent, and ask about deposit rates at the bank. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "The interest rate", role: "who" },
    { text: "is", role: "action" },
    { text: "seven point five per cent", role: "what" },
  ],
  core: [
    { en: "The interest rate is seven point five per cent.", te: "వడ్డీ రేటు ఏడున్నర శాతం.", extra: ["percentage"] },
    { en: "Senior citizens usually get half a per cent more.", te: "సీనియర్ సిటిజన్లకి మామూలుగా అర శాతం ఎక్కువ వస్తుంది.", extra: ["gets"] },
    { en: "What is the interest rate for one year?", te: "ఒక సంవత్సరానికి వడ్డీ రేటు ఎంత?", extra: ["of"] },
    { en: "Is the interest paid every month or every three months?", te: "వడ్డీ ప్రతి నెలా ఇస్తారా, మూడు నెలలకి ఒకసారా?", extra: ["pay"] },
    { en: "This bank pays more interest than the other one.", te: "ఆ బ్యాంక్ కంటే ఈ బ్యాంక్ ఎక్కువ వడ్డీ ఇస్తుంది.", extra: ["most"] },
    { en: "The rate is not as high as last year.", te: "రేటు పోయిన సంవత్సరం అంత ఎక్కువ లేదు.", extra: ["than"] },
    { en: "Will the rate change next year?", te: "వచ్చే సంవత్సరం రేటు మారుతుందా?", extra: ["changes"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at a bank's rate board or an advert in the paper, and read one rate aloud with per cent.",
    te: "బ్యాంకులో రేట్ల బోర్డు గానీ పేపర్‌లో ప్రకటన గానీ చూసి, ఒక రేటుని per cent తో గట్టిగా చదవండి.",
  },
  words: [
    { en: "interest", te: "వడ్డీ" },
    { en: "per cent", te: "శాతం" },
    { en: "point", te: "పాయింట్, దశాంశం" },
    { en: "rate", te: "రేటు" },
    { en: "earn", te: "సంపాదించడం, రావడం" },
  ],
  grammar: ["big-numbers", "question-words", "comparatives-superlatives"],
  topics: ["money", "bank"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Per cent and point", te: "per cent, point అంటే" },
      body: {
        en: "Interest is the money a bank pays you for keeping your money there. Say the rate with per cent. For 7.5, say seven point five per cent. Rates change, so always ask.",
        te: "బ్యాంకులో డబ్బు ఉంచినందుకు బ్యాంక్ మీకు ఇచ్చే డబ్బే interest. రేటుని per cent తో చెప్పండి; 7.5 అయితే seven point five per cent. రేట్లు మారుతుంటాయి, అందుకే అడగండి.",
      },
      bridge: {
        te: ["వడ్డీ రేటు", "ఏడున్నర శాతం"],
        en: [
          { text: "The interest rate", role: "who" },
          { text: "is", role: "action" },
          { text: "seven point five per cent", role: "what" },
        ],
      },
      examples: [
        { en: "The interest rate is seven point five per cent.", te: "వడ్డీ రేటు ఏడున్నర శాతం." },
        { en: "Senior citizens usually get half a per cent more.", te: "సీనియర్ సిటిజన్లకి మామూలుగా అర శాతం ఎక్కువ వస్తుంది." },
        { en: "What is the interest rate for one year?", te: "ఒక సంవత్సరానికి వడ్డీ రేటు ఎంత?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying a rate", te: "రేటు చెప్పడం" },
      items: [
        {
          form: "seven per cent",
          useFor: { en: "A number, then per cent.", te: "ముందు సంఖ్య, తర్వాత per cent." },
          example: { en: "The savings account gives about three per cent.", te: "savings account కి సుమారు మూడు శాతం వస్తుంది." },
        },
        {
          form: "six point two five",
          useFor: { en: "Read the dot as point, then say each number after it.", te: "చుక్కని point అని చదివి, తర్వాత ఒక్కో అంకె విడిగా చెప్పండి." },
          example: { en: "It is six point two five per cent for two years.", te: "రెండేళ్ళకి ఆరు పాయింట్ రెండు ఐదు శాతం." },
        },
        {
          form: "half a per cent",
          useFor: { en: "0.5 per cent, said simply.", te: "0.5 శాతం, సులభంగా చెప్పడం." },
          example: { en: "Senior citizens usually get half a per cent more.", te: "సీనియర్ సిటిజన్లకి మామూలుగా అర శాతం ఎక్కువ వస్తుంది." },
        },
        {
          form: "… a year",
          useFor: { en: "Rates are for one year; say a year at the end.", te: "రేట్లు ఒక సంవత్సరానికి; చివర a year అనండి." },
          example: { en: "How much interest will I earn in a year?", te: "ఒక సంవత్సరంలో నాకు ఎంత వడ్డీ వస్తుంది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Senior citizens get half per cent more.",
      right: "Senior citizens get half a per cent more.",
      why: {
        en: "Half needs a before per cent; Telugu అర శాతం is short, so the a gets lost.",
        te: "half తర్వాత per cent ముందు a కావాలి; తెలుగులో 'అర శాతం' చిన్నగా ఉంటుంది, అందుకే a మర్చిపోతాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The rate is seven point five percentage.",
      right: "The rate is seven point five per cent.",
      why: {
        en: "After a number, say per cent; percentage is used with no number.",
        te: "సంఖ్య తర్వాత per cent అనాలి; percentage అనేది సంఖ్య లేకుండా వాడతారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend asks about the bank near your house. Say it gives seven per cent a year.",
        te: "మీ ఇంటి దగ్గర బ్యాంక్ గురించి స్నేహితులు అడుగుతున్నారు. అది సంవత్సరానికి ఏడు శాతం ఇస్తుందని చెప్పండి.",
      },
      options: ["The bank gives seven per cent a year.", "The bank give seven per cent a year.", "The bank giving seven per cent a year."],
      answer: 0,
      why: {
        en: "One bank is like he or she, so give takes s; Telugu ఇస్తుంది changes its end too.",
        te: "ఒక బ్యాంక్ అంటే he, she లాగా, అందుకే give కి s; తెలుగులో కూడా 'ఇస్తుంది' అని చివర మారుతుంది.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Lotus Bank: Deposit Rates",
      lines: [
        "Fixed deposit interest rates from 1 April",
        "One year: six point five per cent a year.",
        "Two years: seven per cent a year.",
        "Three years: seven point two five per cent a year.",
        "Senior citizens get half a per cent more.",
        "Savings account: three per cent a year.",
        "Interest is paid every three months.",
        "Rates may change. Please ask at the counter.",
      ],
      questions: [
        {
          prompt: { en: "What is the rate for two years?", te: "రెండేళ్ళకి రేటు ఎంత?" },
          options: ["Seven per cent", "Six point five per cent", "Three per cent"],
          answer: 0,
          why: {
            en: "The line for two years gives this rate, between the one-year and three-year lines.",
            te: "రెండేళ్ళ లైన్‌లో ఈ రేటు ఉంది, ఒక సంవత్సరం, మూడేళ్ళ లైన్ల మధ్యలో.",
          },
        },
        {
          prompt: {
            en: "A senior citizen keeps money here for one year. What rate does she get?",
            te: "ఒక సీనియర్ సిటిజన్ ఇక్కడ ఒక సంవత్సరం డబ్బు ఉంచుతారు. ఆవిడకి ఎంత రేటు వస్తుంది?",
          },
          options: ["Seven per cent", "Six point five per cent", "Seven point five per cent"],
          answer: 0,
          why: {
            en: "One year gives six point five, and seniors get half a per cent more.",
            te: "ఒక సంవత్సరానికి ఆరున్నర; సీనియర్లకి అర శాతం ఎక్కువ, కలిపితే ఏడు.",
          },
        },
        {
          prompt: { en: "How often is the interest paid?", te: "వడ్డీ ఎన్ని రోజులకి ఒకసారి ఇస్తారు?" },
          options: ["Every three months", "Every month", "Once a year"],
          answer: 0,
          why: {
            en: "The notice says the bank pays it four times in a year.",
            te: "బ్యాంక్ సంవత్సరంలో నాలుగుసార్లు ఇస్తుందని notice లో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "question",
      sentence: "___ the interest paid every month?",
      te: "వడ్డీ ప్రతి నెలా ఇస్తారా?",
      options: ["Is", "Does", "Are"],
      answer: 0,
      why: {
        en: "Paid needs is before it, not does, and the interest is one thing.",
        te: "paid తో does రాదు, is వస్తుంది; interest ఒక్కటే కాబట్టి are కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Senior citizens gets half a per cent more.",
      wrongIndex: 2,
      fix: "Senior citizens get half a per cent more.",
      why: {
        en: "Senior citizens are many people, so get has no s.",
        te: "సీనియర్ సిటిజన్లు చాలామంది, అందుకే get కి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your neighbour wants to know about the bank's rates. Tell her senior citizens get half a per cent more.",
        te: "బ్యాంక్ రేట్ల గురించి పక్కింటావిడ అడుగుతున్నారు. సీనియర్ సిటిజన్లకి అర శాతం ఎక్కువ వస్తుందని చెప్పండి.",
      },
      expected: [
        "Senior citizens get half a per cent more.",
        "Senior citizens get half a per cent more here.",
        "Senior citizens usually get half a per cent more.",
        "Senior citizens get half a per cent extra.",
      ],
      options: ["Senior citizens get half a per cent more.", "Senior citizens get half per cent more.", "Senior citizens gets half a per cent more."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the bank, ask the clerk the interest rate for one year.",
        te: "బ్యాంకులో ఒక సంవత్సరానికి వడ్డీ రేటు ఎంతో క్లర్క్‌ని అడగండి.",
      },
      expected: ["What is the interest rate for one year?", "What's the interest rate for one year?", "What is the rate for one year?"],
      options: ["What is the interest rate for one year?", "What the interest rate is for one year?", "What is the interest rate of one year?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Asking about deposit rates", te: "డిపాజిట్ రేట్లు అడగడం" },
    scene: {
      en: "You want to know the deposit rates at Lotus Bank. Joseph, the clerk, is at the enquiry counter.",
      te: "లోటస్ బ్యాంక్‌లో డిపాజిట్ రేట్లు తెలుసుకోవాలనుకుంటున్నారు. ఎంక్వయిరీ కౌంటర్ దగ్గర క్లర్క్ జోసెఫ్ గారు ఉన్నారు.",
    },
    partner: { en: "Joseph (the bank clerk)", te: "జోసెఫ్ (బ్యాంక్ క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking about rates", te: "రేట్ల గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "గుడ్ మార్నింగ్. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet him, and ask about the rates for fixed deposits.", te: "నమస్కారం చెప్పి, fixed deposit రేట్ల గురించి అడగండి." },
        replies: [
          { say: "Good morning. What are the interest rates for fixed deposits?", good: true, skill: "ask" },
          { say: "Good morning. Could you tell me the FD rates, please?", good: true, skill: "ask" },
          { say: "Good morning. What the interest rates are for fixed deposits?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "For one year, it's six point five per cent. For two years, it's seven.",
        te: "ఒక సంవత్సరానికి ఆరున్నర శాతం. రెండేళ్ళకి ఏడు.",
        hint: { en: "Ask what senior citizens get.", te: "సీనియర్ సిటిజన్లకి ఎంత వస్తుందో అడగండి." },
        replies: [
          { say: "What do senior citizens get?", good: true, skill: "ask" },
          { say: "Is it higher for senior citizens?", good: true, skill: "ask" },
          { say: "What does senior citizens get?", good: false, skill: "ask" },
        ],
      },
      {
        partner: "They get half a per cent more, so seven per cent for one year.",
        te: "వాళ్ళకి అర శాతం ఎక్కువ. అంటే ఒక సంవత్సరానికి ఏడు శాతం.",
        hint: { en: "Ask if the interest comes every month.", te: "వడ్డీ ప్రతి నెలా వస్తుందా అని అడగండి." },
        replies: [
          { say: "Is the interest paid every month?", good: true, skill: "ask" },
          {
            say: "Only seven? The bank next door gives much more.",
            good: false,
            skill: "polite",
            react: {
              en: "Rates are almost the same everywhere. Please compare and decide.",
              te: "రేట్లు అన్ని చోట్లా దాదాపు ఒకేలా ఉంటాయి. పోల్చి చూసి నిర్ణయించుకోండి.",
            },
          },
        ],
      },
      {
        partner: "Every three months. You can also choose every month.",
        te: "మూడు నెలలకి ఒకసారి. కావాలంటే ప్రతి నెలా కూడా తీసుకోవచ్చు.",
        hint: { en: "Thank him, and say you will think and come back.", te: "థాంక్స్ చెప్పి, ఆలోచించి మళ్ళీ వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll think about it and come back.", good: true, skill: "polite" },
          { say: "Thank you. I will come back after I will decide.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
