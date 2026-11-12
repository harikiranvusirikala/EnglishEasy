import type { Lesson } from "../../types";

/** Week 63, Day 5 (CURRICULUM §5): checking a letter or message before acting — A real office never asks you to pay through a link. */
export const day: Lesson = {
  id: "is-this-letter-real",
  kind: "lesson",
  title: { en: "Is This Letter Real?", te: "ఇది నిజమైన ఉత్తరమేనా?" },
  subtitle: "checking letters and messages",
  summary: {
    en: "Learn to check a letter or message before you act: A real office never asks you to pay through a link.",
    te: "ఏదైనా చేసే ముందు ఉత్తరం, మెసేజ్ నిజమో కాదో చూసుకోవడం నేర్చుకుందాం: A real office never asks you to pay through a link.",
  },
  seo: {
    title: "Spotting a Fake Letter or Message in English for Telugu Speakers",
    description:
      "Check a letter before you pay: A real office never asks you to pay through a link. Simple, safe English lessons for Telugu speakers.",
  },
  pattern: [
    { text: "A real office", role: "who" },
    { text: "never asks", role: "action" },
    { text: "you to pay through a link", role: "what" },
  ],
  core: [
    { en: "Is this letter real?", te: "ఈ ఉత్తరం నిజమైనదేనా?", extra: ["Does"] },
    { en: "A real office never asks you to pay through a link.", te: "నిజమైన ఆఫీసు లింక్ ద్వారా డబ్బు కట్టమని ఎప్పుడూ అడగదు.", extra: ["ask"] },
    { en: "Let me call the office and check this reference number.", te: "నేను ఆఫీసుకి ఫోన్ చేసి ఈ reference నంబర్ కనుక్కుంటాను.", extra: ["checking"] },
    { en: "Please don't click on the link.", te: "దయచేసి ఆ లింక్ మీద నొక్కకండి.", extra: ["not"] },
    { en: "This message has many spelling mistakes.", te: "ఈ మెసేజ్‌లో చాలా స్పెల్లింగ్ తప్పులు ఉన్నాయి.", extra: ["have"] },
    { en: "Use the number on your passbook, not the one in the message.", te: "మెసేజ్‌లోని నంబర్ కాదు, మీ పాస్‌బుక్ మీద ఉన్న నంబర్ వాడండి.", extra: ["at"] },
    { en: "Nobody from a real office will ask for your OTP.", te: "నిజమైన ఆఫీసు నుంచి ఎవరూ మీ OTP అడగరు.", extra: ["asks"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Save your bank's number and the electricity office's number in your phone today, from your passbook and bill.",
    te: "మీ పాస్‌బుక్, కరెంట్ బిల్లు చూసి, బ్యాంక్ నంబర్, కరెంట్ ఆఫీసు నంబర్ ఈ రోజే ఫోన్‌లో సేవ్ చేసుకోండి.",
  },
  words: [
    { en: "genuine", te: "నిజమైన, అసలైన" },
    { en: "suspicious", te: "అనుమానంగా ఉన్న" },
    { en: "link", te: "మెసేజ్‌లో నొక్కే లింక్" },
    { en: "verify", te: "నిజమో కాదో చూసుకోవడం" },
    { en: "spelling mistakes", te: "స్పెల్లింగ్ తప్పులు" },
  ],
  grammar: ["present-simple", "imperatives", "should-must-have-to"],
  topics: ["phone", "money", "offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Check before you pay", te: "కట్టే ముందు చెక్ చేయండి" },
      body: {
        en: "Before you pay, check who sent it and how to reach them. A real office never asks you to pay through a link.",
        te: "డబ్బు కట్టే ముందు, ఎవరు పంపారో, వాళ్ళని ఎలా సంప్రదించాలో చూడండి. నిజమైన ఆఫీసు లింక్ ద్వారా డబ్బు కట్టమని అడగదు.",
      },
      bridge: {
        te: ["నిజమైన ఆఫీసు", "లింక్ ద్వారా డబ్బు కట్టమని", "ఎప్పుడూ అడగదు"],
        en: [
          { text: "A real office", role: "who" },
          { text: "never asks", role: "action" },
          { text: "you to pay through a link", role: "what" },
        ],
      },
      examples: [
        { en: "A real office never asks you to pay through a link.", te: "నిజమైన ఆఫీసు లింక్ ద్వారా డబ్బు కట్టమని ఎప్పుడూ అడగదు." },
        { en: "Use the number on your passbook, not the one in the message.", te: "మెసేజ్‌లోని నంబర్ కాదు, మీ పాస్‌బుక్ మీద ఉన్న నంబర్ వాడండి." },
        { en: "Nobody from a real office will ask for your OTP.", te: "నిజమైన ఆఫీసు నుంచి ఎవరూ మీ OTP అడగరు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Real or fake?", te: "నిజమా, మోసమా?" },
      items: [
        {
          form: "A genuine letter",
          useFor: { en: "It has the office's name, address and a reference number.", te: "ఆఫీసు పేరు, అడ్రస్, reference నంబర్ ఉంటాయి." },
          example: { en: "This letter has a reference number and the branch address.", te: "ఈ ఉత్తరంలో reference నంబర్, బ్రాంచ్ అడ్రస్ ఉన్నాయి." },
        },
        {
          form: "A suspicious message",
          useFor: { en: "It wants money fast, has a link and frightens you.", te: "త్వరగా డబ్బు అడుగుతుంది, లింక్ ఉంటుంది, భయపెడుతుంది." },
          example: { en: "Pay in two hours, or your power will be cut.", te: "రెండు గంటల్లో కట్టకపోతే కరెంట్ కట్ చేస్తాం." },
        },
        {
          form: "To verify",
          useFor: { en: "Call the office on a number you already have.", te: "మీ దగ్గర ముందే ఉన్న నంబర్‌తో ఆఫీసుకి ఫోన్ చేయండి." },
          example: { en: "Use the number on your passbook, not the one in the message.", te: "మెసేజ్‌లోని నంబర్ కాదు, మీ పాస్‌బుక్ మీద ఉన్న నంబర్ వాడండి." },
        },
        {
          form: "If money is lost",
          useFor: { en: "Call 1930, the cyber crime helpline, at once.", te: "వెంటనే 1930 కి ఫోన్ చేయండి, అది cyber crime helpline." },
          example: { en: "Please call one nine three zero at once.", te: "వెంటనే 1930 కి ఫోన్ చేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "This message fake.",
      right: "This message is fake.",
      why: {
        en: "English needs is between the thing and the word that describes it; Telugu needs no verb here.",
        te: "వస్తువుకి, దాన్ని వర్ణించే మాటకి మధ్య ఇంగ్లీష్‌లో is కావాలి; తెలుగులో ఇక్కడ verb అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I got a message in my phone.",
      right: "I got a message on my phone.",
      why: {
        en: "Messages and calls come on a phone; Telugu ఫోన్‌లో makes people say in.",
        te: "మెసేజ్‌లు, కాల్స్ ఫోన్ on లో వస్తాయి; తెలుగులో 'ఫోన్‌లో' అంటాం కాబట్టి in అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A message says your power will be cut tonight, so pay now through a link. What should you do?",
        te: "ఈ రాత్రి కరెంట్ కట్ చేస్తామని, ఇప్పుడే లింక్ ద్వారా కట్టమని మెసేజ్ వచ్చింది. మీరు ఏం చేయాలి?",
      },
      options: [
        "Call the electricity office on the number on my bill.",
        "Pay quickly through the link before tonight.",
        "Call the number given in the message.",
      ],
      answer: 0,
      why: {
        en: "A number you already have is safe; the link and the number in the message may belong to cheats.",
        te: "మీ దగ్గర ఉన్న నంబర్ సురక్షితం; మెసేజ్‌లోని లింక్, నంబర్ మోసగాళ్ళవి కావొచ్చు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "duration",
      sentence: "I ___ this bank account since two thousand five.",
      te: "2005 నుంచి నాకు ఈ బ్యాంక్ అకౌంట్ ఉంది.",
      options: ["have had", "am having", "have"],
      answer: 0,
      why: {
        en: "For something from the past till now, use have had with since; Telugu uses the present here.",
        te: "గతం నుంచి ఇప్పటి వరకు ఉన్నదానికి since తో have had వాడాలి; తెలుగులో ఇక్కడ present వాడతాం.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Unknown number",
      lines: [
        "Dear Custmer, your electricity will be disconected",
        "tonight at 9:30 pm, because your last bill is not updated.",
        "Pay 10 rupees now to stop it. Click here:",
        "pay-elec-bill-now.in",
        "Do not call the office. Pay in one hour.",
      ],
      prompt: {
        en: "This message came on your neighbour's phone. Why is it suspicious?",
        te: "ఈ మెసేజ్ పక్కింటివారి ఫోన్‌కి వచ్చింది. ఇది ఎందుకు అనుమానంగా ఉంది?",
      },
      options: ["It asks you to pay through a link.", "It uses the word electricity.", "It came in the evening."],
      answer: 0,
      why: {
        en: "Electricity offices never ask you to pay through a link, and the spelling mistakes are a warning too.",
        te: "కరెంట్ ఆఫీసులు లింక్ ద్వారా డబ్బు అడగవు; స్పెల్లింగ్ తప్పులు కూడా ఒక హెచ్చరికే.",
      },
      say: "A real office never asks you to pay through a link.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "A real bank never ask for your PIN.",
      wrongIndex: 4,
      fix: "A real bank never asks for your PIN.",
      why: {
        en: "A bank is one, like it, so the verb takes s, even after never.",
        te: "బ్యాంక్ ఒక్కటి (it లాగా), కాబట్టి never తర్వాత కూడా verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend Rahim wants to pay a fine through a link in a message. Stop him kindly.",
        te: "మెసేజ్‌లోని లింక్ ద్వారా ఫైన్ కట్టాలని మీ స్నేహితుడు రహీమ్ గారు అనుకుంటున్నారు. మర్యాదగా ఆపండి.",
      },
      expected: [
        "Please don't click on the link.",
        "Wait, please don't click on that link.",
        "Don't click the link. Let's check first.",
        "Please don't pay through the link.",
      ],
      options: ["Please don't click on the link.", "Please not click on the link.", "Please don't clicking on the link."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A caller says he is from your bank and asks for your OTP. Say no politely.",
        te: "బ్యాంక్ నుంచి అంటూ ఒకాయన ఫోన్ చేసి మీ OTP అడుగుతున్నారు. మర్యాదగా కుదరదని చెప్పండి.",
      },
      expected: [
        "Sorry, I don't share my OTP with anyone.",
        "Sorry, I will not share my OTP.",
        "No, I don't share my OTP. I'll call my branch myself.",
      ],
      options: ["Sorry, I don't share my OTP with anyone.", "Sorry, I don't share my OTP to anyone.", "Okay, wait. I'll read it out to you."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A message from the tax office?", te: "టాక్స్ ఆఫీసు నుంచి మెసేజా?" },
    scene: {
      en: "Your neighbour Gopal got a message that says it is from the income tax office. He shows it to you.",
      te: "పక్కింటి గోపాల్ గారికి income tax ఆఫీసు నుంచి అంటూ ఒక మెసేజ్ వచ్చింది. ఆయన దాన్ని మీకు చూపిస్తున్నారు.",
    },
    partner: { en: "Gopal (your neighbour)", te: "గోపాల్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "warn", label: { en: "Warning kindly", te: "మర్యాదగా హెచ్చరించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening. Please look at this message. Is it from the tax office?",
        te: "నమస్కారం. ఈ మెసేజ్ ఒకసారి చూడండి. ఇది టాక్స్ ఆఫీసు నుంచేనా?",
        hint: { en: "Greet him, and say yes, you will look at it.", te: "నమస్కారం చెప్పి, సరే, చూస్తానని చెప్పండి." },
        replies: [
          { say: "Good evening. Sure, let me have a look.", good: true, skill: "polite" },
          { say: "Of course. Please show me.", good: true, skill: "polite" },
          {
            say: "Tax office? What did you do wrong?",
            good: false,
            skill: "polite",
            react: { en: "Nothing at all! That's why I'm so worried.", te: "ఏమీ చేయలేదు! అందుకే ఇంత కంగారుగా ఉంది." },
          },
        ],
      },
      {
        partner: "It says I'll get a refund. I just have to click this link.",
        te: "నాకు refund వస్తుందట. ఈ లింక్ నొక్కితే చాలట.",
        hint: { en: "Ask him to wait, and warn him about links in messages.", te: "ఆగమని చెప్పి, మెసేజ్‌లలోని లింక్‌ల గురించి హెచ్చరించండి." },
        replies: [
          { say: "Please wait. Don't click on the link.", good: true, skill: "warn" },
          { say: "Stop! Real offices don't send links like this.", good: true, skill: "warn" },
          { say: "Please wait. Not click on the link.", good: false, skill: "warn" },
        ],
      },
      {
        partner: "But it has the tax office's name on it. How do I know?",
        te: "కానీ దీని మీద టాక్స్ ఆఫీసు పేరు ఉంది కదా. నాకెలా తెలుస్తుంది?",
        hint: { en: "Show him what looks wrong: the spelling and the sender's number.", te: "ఏం తప్పుగా ఉందో చూపించండి: స్పెల్లింగ్, పంపిన నంబర్." },
        replies: [
          { say: "Look, it has many spelling mistakes. And it came from a mobile number.", good: true, skill: "warn" },
          { say: "The sender is a mobile number. That's not an official number.", good: true, skill: "warn" },
          { say: "Look, it have many spelling mistakes.", good: false, skill: "warn", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "You're right! Thank you. What should I do with it now?",
        te: "మీరు చెప్పింది నిజమే! థాంక్స్. ఇప్పుడు దీన్నేం చేయాలి?",
        hint: { en: "Tell him to delete it, and to verify with the office on a number he already has.", te: "దాన్ని delete చేయమని, తన దగ్గర ఉన్న నంబర్‌తో ఆఫీసుకి ఫోన్ చేసి కనుక్కోమని చెప్పండి." },
        replies: [
          { say: "Just delete it. If you're worried, call the office on its official number.", good: true, skill: "warn" },
          { say: "Don't reply. If anyone loses money, call one nine three zero.", good: true, skill: "warn" },
          {
            say: "Call the number in the message and ask them.",
            good: false,
            skill: "warn",
            react: { en: "Hmm, but that number may belong to the cheats.", te: "అయ్యో, కానీ ఆ నంబర్ మోసగాళ్ళదే కావొచ్చు కదా." },
          },
        ],
      },
    ],
  },
};
