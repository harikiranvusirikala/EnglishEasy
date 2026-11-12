import type { Lesson } from "../../types";

/** Week 62, Day 5 (CURRICULUM §5): following up — I called last week; I haven't heard back; Could you give me an update? — the municipal office and a certificate. */
export const day: Lesson = {
  id: "following-up-a-formal-request",
  kind: "lesson",
  title: { en: "Following Up", te: "మళ్ళీ గుర్తు చేయడం" },
  subtitle: "I called last week; I haven't heard back",
  summary: {
    en: "Learn to follow up politely with an office: I called last Monday, but I haven't heard back. Could you give me an update?",
    te: "ఆఫీసువాళ్ళకి మర్యాదగా మళ్ళీ గుర్తు చేయడం నేర్చుకుందాం: I called last Monday, but I haven't heard back. Could you give me an update?",
  },
  seo: {
    title: "Following Up With an Office in English for Telugu Speakers",
    description:
      "Say I called last Monday, but I haven't heard back and Could you give me an update? Polite follow-up English for Telugu speakers.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "called", role: "action" },
    { text: "last Monday,", role: "when" },
    { text: "but I haven't heard back", role: "what" },
  ],
  core: [
    { en: "I called last Monday, but I haven't heard back.", te: "పోయిన సోమవారం ఫోన్ చేశాను, కానీ ఇంకా ఏ సమాచారం రాలేదు.", extra: ["call"] },
    { en: "Could you give me an update, please?", te: "ఏమైందో కొంచెం చెప్తారా?", extra: ["giving"] },
    { en: "I applied for the certificate on the tenth of June.", te: "జూన్ పదో తారీఖున certificate కి apply చేశాను.", extra: ["in"] },
    { en: "Could you tell me when it will be ready?", te: "అది ఎప్పుడు రెడీ అవుతుందో చెప్తారా?", extra: ["is"] },
    { en: "My application number is three one eight six.", te: "నా application నంబర్ 3186.", extra: ["are"] },
    { en: "It has been three weeks. Is there any progress?", te: "మూడు వారాలైంది. ఏమైనా ముందుకు కదిలిందా?", extra: ["since"] },
    { en: "Could you put that in writing, please?", te: "అది కొంచెం రాతపూర్వకంగా ఇస్తారా?", extra: ["by"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of something you asked for and are still waiting for. Say aloud how you would follow up: I called …, but I haven't heard back.",
    te: "మీరు అడిగి, ఇంకా ఎదురుచూస్తున్న ఒక పని గుర్తు చేసుకోండి. ఎలా గుర్తు చేస్తారో గట్టిగా చెప్పి చూడండి: I called …, but I haven't heard back.",
  },
  words: [
    { en: "hear back", te: "తిరిగి సమాచారం రావడం" },
    { en: "progress", te: "పని ముందుకు కదలడం, ప్రోగ్రెస్" },
    { en: "reminder", te: "గుర్తు చేయడం, రిమైండర్" },
    { en: "by now", te: "ఈపాటికి" },
    { en: "in writing", te: "రాతపూర్వకంగా" },
  ],
  grammar: ["past-simple", "present-perfect", "indirect-tag-questions"],
  topics: ["offices", "phone", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Following up politely", te: "మర్యాదగా గుర్తు చేయడం" },
      body: {
        en: "First say when you asked, in the past: I called last Monday. Then say there is no answer up to now: I haven't heard back. Then ask for an update.",
        te: "ముందు ఎప్పుడు అడిగారో past లో చెప్పండి: I called last Monday. తర్వాత ఇప్పటివరకు జవాబు లేదని: I haven't heard back. ఆ తర్వాత update అడగండి.",
      },
      bridge: {
        te: ["పోయిన సోమవారం", "ఫోన్ చేశాను,", "కానీ ఇంకా ఏ సమాచారం రాలేదు"],
        en: [
          { text: "I", role: "who" },
          { text: "called", role: "action" },
          { text: "last Monday,", role: "when" },
          { text: "but I haven't heard back", role: "what" },
        ],
      },
      examples: [
        { en: "I called last Monday, but I haven't heard back.", te: "పోయిన సోమవారం ఫోన్ చేశాను, కానీ ఇంకా ఏ సమాచారం రాలేదు." },
        { en: "Could you give me an update, please?", te: "ఏమైందో కొంచెం చెప్తారా?" },
        { en: "I applied for the certificate on the tenth of June.", te: "జూన్ పదో తారీఖున certificate కి apply చేశాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Past or up to now?", te: "గతమా, ఇప్పటివరకా?" },
      items: [
        {
          form: "I called last …",
          useFor: { en: "A finished time, like last Monday or on the tenth: use the past.", te: "అయిపోయిన టైమ్, last Monday, on the tenth లాంటివి: past వాడండి." },
          example: { en: "I applied for the certificate on the tenth of June.", te: "జూన్ పదో తారీఖున certificate కి apply చేశాను." },
        },
        {
          form: "I haven't heard back.",
          useFor: { en: "No answer up to now: use have or haven't.", te: "ఇప్పటివరకు జవాబు లేదు: have లేదా haven't వాడండి." },
          example: { en: "I called last Monday, but I haven't heard back.", te: "పోయిన సోమవారం ఫోన్ చేశాను, కానీ ఇంకా ఏ సమాచారం రాలేదు." },
        },
        {
          form: "Is there any progress?",
          useFor: { en: "Ask if the work has moved forward.", te: "పని ఏమైనా ముందుకు కదిలిందా అని అడగడానికి." },
          example: { en: "It has been three weeks. Is there any progress?", te: "మూడు వారాలైంది. ఏమైనా ముందుకు కదిలిందా?" },
        },
        {
          form: "This is just a reminder …",
          useFor: { en: "Remind the office gently.", te: "ఆఫీసువాళ్ళకి మెల్లగా గుర్తు చేయడానికి." },
          example: { en: "This is just a reminder about my application.", te: "నా application గురించి ఒకసారి గుర్తు చేస్తున్నాను అంతే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Kindly revert at the earliest.",
      right: "Could you let me know soon, please?",
      why: {
        en: "Revert really means go back to an old state, not reply. Say let me know instead.",
        te: "revert అంటే నిజానికి 'పాత స్థితికి వెళ్ళడం', జవాబు ఇవ్వడం కాదు. బదులుగా let me know అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am waiting since three weeks.",
      right: "I have been waiting for three weeks.",
      why: {
        en: "For time up to now, use have been with -ing, and for with a length of time. Telugu uses the present here.",
        te: "ఇప్పటివరకు సాగుతున్న సమయానికి have been + -ing, ఎంతకాలం అనడానికి for. తెలుగులో ఇక్కడ present వాడతాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Ask the clerk politely when your certificate will be ready.",
        te: "మీ certificate ఎప్పుడు రెడీ అవుతుందో క్లర్క్‌ని మర్యాదగా అడగండి.",
      },
      options: ["Could you tell me when it will be ready?", "Could you tell me when will it be ready?", "Could you tell me when it ready?"],
      answer: 0,
      why: {
        en: "After Could you tell me, the second part keeps normal order, and it needs will be.",
        te: "Could you tell me తర్వాత రెండో భాగం మామూలు వరుసలో ఉంటుంది; will be కూడా కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I called last week, but I ___ heard back.",
      te: "పోయిన వారం ఫోన్ చేశాను, కానీ ఇంకా ఏ సమాచారం రాలేదు.",
      options: ["haven't", "didn't", "am not"],
      answer: 0,
      why: {
        en: "No answer up to now takes haven't with heard. Didn't goes with hear, not heard.",
        te: "ఇప్పటివరకు జవాబు లేదు అంటే haven't + heard. didn't తో hear వస్తుంది, heard కాదు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Gandhi Nagar Ward Office",
      lines: [
        "Notice to the Public",
        "Birth and residence certificates are given within seven working days.",
        "You can check the status online with your application number.",
        "If there is a delay, please call the help desk.",
        "Help desk hours: 10 am to 1 pm, Monday to Saturday.",
        "Please keep your receipt safe.",
        "For a follow-up visit, bring the receipt and an ID proof.",
      ],
      questions: [
        {
          prompt: { en: "How long does a certificate usually take?", te: "certificate కి మామూలుగా ఎంత టైమ్ పడుతుంది?" },
          options: ["Seven working days", "Seven weeks", "One day"],
          answer: 0,
          why: {
            en: "The second line gives the time, and it counts only working days.",
            te: "రెండో లైన్‌లో టైమ్ ఉంది; అది పని దినాలు మాత్రమే లెక్కపెడుతుంది.",
          },
        },
        {
          prompt: { en: "When can you call the help desk?", te: "help desk కి ఎప్పుడు ఫోన్ చేయొచ్చు?" },
          options: ["In the morning, from 10 to 1", "Any time of the day", "Only on Sunday"],
          answer: 0,
          why: {
            en: "The help desk line shows morning hours only, from Monday to Saturday.",
            te: "help desk లైన్‌లో పొద్దుటి గంటలు మాత్రమే ఉన్నాయి, సోమవారం నుంచి శనివారం వరకు.",
          },
        },
        {
          prompt: { en: "What should you bring for a follow-up visit?", te: "మళ్ళీ వెళ్ళేటప్పుడు ఏం తీసుకెళ్ళాలి?" },
          options: ["The receipt and an ID proof", "Only a photo", "Nothing at all"],
          answer: 0,
          why: {
            en: "The last line lists two things to carry when you go back.",
            te: "చివరి లైన్‌లో మళ్ళీ వెళ్ళేటప్పుడు తీసుకెళ్ళాల్సిన రెండు వస్తువులు ఉన్నాయి.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "I applied for certificate on the tenth of June.",
      wrongIndex: 3,
      fix: "I applied for the certificate on the tenth of June.",
      why: {
        en: "One known certificate needs the before it. Telugu has no word for the.",
        te: "ఇద్దరికీ తెలిసిన ఒక certificate ముందు the రావాలి. తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You called the office last week. Nobody called you back. Say this politely.",
        te: "పోయిన వారం ఆఫీసుకి ఫోన్ చేశారు. ఎవరూ తిరిగి ఫోన్ చేయలేదు. ఈ విషయం మర్యాదగా చెప్పండి.",
      },
      expected: [
        "I called last week, but I haven't heard back.",
        "I called last week, but nobody called me back.",
        "I called last week. I haven't heard back yet.",
      ],
      options: ["I called last week, but I haven't heard back.", "I call last week, but I haven't heard back.", "I called last week. Why you didn't call me back?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "The clerk asks: You haven't got an SMS yet? You haven't. Answer clearly.",
        te: "You haven't got an SMS yet? అని క్లర్క్ అడిగారు. మీకు రాలేదు. స్పష్టంగా జవాబు చెప్పండి.",
      },
      expected: ["No, I haven't.", "No, not yet.", "No, I haven't got any SMS."],
      options: ["No, I haven't.", "Yes, I haven't.", "Yes, not got."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Asking about a certificate", te: "certificate గురించి అడగడం" },
    scene: {
      en: "Three weeks ago, you applied for a residence certificate at the municipal office. You call to follow up. Anitha answers.",
      te: "మూడు వారాల క్రితం మున్సిపల్ ఆఫీసులో residence certificate కి apply చేశారు. గుర్తు చేయడానికి ఫోన్ చేశారు. అనిత గారు ఫోన్ ఎత్తారు.",
    },
    partner: { en: "Anitha (at the municipal office)", te: "అనిత (మున్సిపల్ ఆఫీసులో)" },
    skills: [
      { id: "follow", label: { en: "Following up", te: "గుర్తు చేయడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, municipal office, certificates section.",
        te: "నమస్కారం, మున్సిపల్ ఆఫీస్, certificates విభాగం.",
        hint: { en: "Greet her. Say you applied three weeks ago and have had no answer.", te: "నమస్కారం చెప్పండి. మూడు వారాల క్రితం apply చేశారని, ఇంకా జవాబు రాలేదని చెప్పండి." },
        replies: [
          { say: "Good morning. I applied three weeks ago, but I haven't heard back.", good: true, skill: "follow" },
          { say: "Good morning. I applied three weeks before, but I haven't heard back.", good: false, skill: "follow" },
        ],
      },
      {
        partner: "May I have your application number, please?",
        te: "మీ application నంబర్ చెప్తారా?",
        hint: { en: "Read the number from your receipt, digit by digit.", te: "రసీదు మీద ఉన్న నంబర్‌ని ఒక్కో అంకె చదవండి." },
        replies: [
          { say: "Yes, it's three one eight six.", good: true, skill: "follow" },
          { say: "Yes, it's three thousand one hundred and eighty-six.", good: false, skill: "follow" },
        ],
      },
      {
        partner: "It's still pending. The officer is on leave this week.",
        te: "ఇంకా pending లో ఉంది. ఆఫీసర్ గారు ఈ వారం సెలవులో ఉన్నారు.",
        hint: { en: "Say you expected it already. Ask politely for news next week.", te: "ఇప్పటికే రావాల్సిందని చెప్పండి. వచ్చే వారం ఏమైందో చెప్పమని మర్యాదగా అడగండి." },
        replies: [
          { say: "It should be ready by now. Could you give me an update next week?", good: true, skill: "follow" },
          {
            say: "Always on leave! Nobody in this office works.",
            good: false,
            skill: "polite",
            react: { en: "Please don't say that. I will remind the officer today.", te: "అలా అనకండి అండీ. ఈ రోజే ఆఫీసర్ గారికి గుర్తు చేస్తాను." },
          },
        ],
      },
      {
        partner: "Of course. I'll call you on Monday with an update.",
        te: "తప్పకుండా. సోమవారం మీకు ఫోన్ చేసి చెప్తాను.",
        hint: { en: "Thank her, and say goodbye politely.", te: "థాంక్స్ చెప్పి, మర్యాదగా బై చెప్పండి." },
        replies: [
          { say: "Thank you very much for your help. Goodbye.", good: true, skill: "polite" },
          { say: "Okay, thanks. Kindly revert on Monday.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
