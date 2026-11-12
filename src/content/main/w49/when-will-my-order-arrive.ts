import type { Lesson } from "../../types";

/** Week 49, Day 2 (CURRICULUM §5): will for delivery dates, and the app's tracking words — It will arrive by Friday. */
export const day: Lesson = {
  id: "when-will-my-order-arrive",
  kind: "lesson",
  title: { en: "When Will It Arrive?", te: "ఎప్పుడు వస్తుంది?" },
  subtitle: "will, shipped, out for delivery",
  summary: {
    en: "Learn to ask and say when a parcel will come, and the app's words: Your order has been shipped. It will arrive by Friday.",
    te: "పార్సెల్ ఎప్పుడు వస్తుందో అడగడం, చెప్పడం, app లో కనిపించే మాటలు నేర్చుకుందాం: Your order has been shipped. It will arrive by Friday.",
  },
  seo: {
    title: "Delivery Dates and Tracking in English for Telugu Speakers",
    description:
      "Say When will my order arrive? and understand shipped and out for delivery. Simple lessons for Telugu speakers on tracking a parcel.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "will arrive", role: "action" },
    { text: "by Friday", role: "when" },
  ],
  core: [
    { en: "When will my order arrive?", te: "నా ఆర్డర్ ఎప్పుడు వస్తుంది?", extra: ["arriving"] },
    { en: "Your order has been shipped. It will arrive by Friday.", te: "మీ ఆర్డర్ పంపించారు. శుక్రవారం లోపు వస్తుంది.", extra: ["until"] },
    { en: "The parcel is out for delivery today.", te: "పార్సెల్ ఈ రోజు డెలివరీకి బయలుదేరింది.", extra: ["of"] },
    { en: "Can I track my order on the app?", te: "నా ఆర్డర్ ఎక్కడుందో app లో చూడొచ్చా?", extra: ["tracking"] },
    { en: "It will reach you in two days.", te: "రెండు రోజుల్లో మీకు చేరుతుంది.", extra: ["to"] },
    { en: "Please tell me your order ID.", te: "మీ order ID చెప్పండి.", extra: ["say"] },
    { en: "The delivery date has changed to Monday.", te: "డెలివరీ తేదీ సోమవారానికి మారింది.", extra: ["changing"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of something you are waiting for, like a gas cylinder or a letter. Say aloud: It will arrive by …",
    te: "మీరు ఎదురుచూస్తున్న ఏదైనా ఒకటి (gas cylinder, ఉత్తరం లాంటిది) గుర్తు చేసుకోండి. గట్టిగా చెప్పండి: It will arrive by …",
  },
  words: [
    { en: "shipped", te: "పంపించారు, బయలుదేరింది" },
    { en: "out for delivery", te: "ఈ రోజే ఇంటికి తెస్తున్నారు" },
    { en: "track", te: "ఎక్కడుందో చూడటం, ట్రాక్ చేయడం" },
    { en: "delivery date", te: "డెలివరీ తేదీ" },
    { en: "order ID", te: "ఆర్డర్ నంబర్, order ID" },
  ],
  grammar: ["will", "present-perfect", "prepositions"],
  topics: ["shopping", "technology", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When will it come?", te: "ఎప్పుడు వస్తుంది?" },
      body: {
        en: "For a delivery day, use will + verb: It will arrive by Friday. By Friday means on Friday or before. Learn the app's words as they are: shipped, out for delivery.",
        te: "డెలివరీ రోజు చెప్పడానికి will + verb: It will arrive by Friday. by Friday అంటే శుక్రవారం గానీ, అంతకు ముందే గానీ; shipped, out for delivery లాంటి app మాటలు అలాగే నేర్చుకోండి.",
      },
      bridge: {
        te: ["శుక్రవారం లోపు", "వస్తుంది"],
        en: [
          { text: "It", role: "who" },
          { text: "will arrive", role: "action" },
          { text: "by Friday", role: "when" },
        ],
      },
      examples: [
        { en: "When will my order arrive?", te: "నా ఆర్డర్ ఎప్పుడు వస్తుంది?" },
        { en: "Your order has been shipped. It will arrive by Friday.", te: "మీ ఆర్డర్ పంపించారు. శుక్రవారం లోపు వస్తుంది." },
        { en: "It will reach you in two days.", te: "రెండు రోజుల్లో మీకు చేరుతుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the app says", te: "app లో ఏం చూపిస్తుంది" },
      items: [
        {
          form: "has been shipped",
          useFor: { en: "The shop has sent it on its way.", te: "షాపు వాళ్ళు దాన్ని పంపించేశారు." },
          example: { en: "Your order has been shipped. It will arrive by Friday.", te: "మీ ఆర్డర్ పంపించారు. శుక్రవారం లోపు వస్తుంది." },
        },
        {
          form: "out for delivery",
          useFor: { en: "It is coming to your door today.", te: "ఈ రోజే మీ ఇంటికి తెస్తున్నారు." },
          example: { en: "The parcel is out for delivery today.", te: "పార్సెల్ ఈ రోజు డెలివరీకి బయలుదేరింది." },
        },
        {
          form: "by + a day",
          useFor: { en: "On that day, or any day before it.", te: "ఆ రోజు గానీ, అంతకు ముందు ఏ రోజైనా గానీ." },
          example: { en: "Your parcel will come by Thursday.", te: "మీ పార్సెల్ గురువారం లోపు వస్తుంది." },
        },
        {
          form: "in + time",
          useFor: { en: "That much time from now.", te: "ఇప్పటి నుంచి అంత టైమ్‌లో." },
          example: { en: "It will reach you in two days.", te: "రెండు రోజుల్లో మీకు చేరుతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The parcel out for delivery.",
      right: "The parcel is out for delivery.",
      why: {
        en: "English needs is before out for delivery; the Telugu sentence has no word like is.",
        te: "out for delivery ముందు is తప్పనిసరి; తెలుగు వాక్యంలో is లాంటి పదం ఉండదు, అందుకే వదిలేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "It will come today evening.",
      right: "It will come this evening.",
      why: {
        en: "English says this morning and this evening; today evening is ఈ రోజు సాయంత్రం word for word.",
        te: "ఇంగ్లీష్‌లో this morning, this evening అంటారు; today evening అనేది 'ఈ రోజు సాయంత్రం' కి మాటకి మాట.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask customer care about the day your order will come.", te: "మీ ఆర్డర్ ఏ రోజు వస్తుందో customer care ని అడగండి." },
      options: ["When will my order arrive?", "When my order will arrive?", "When will my order arriving?"],
      answer: 0,
      why: {
        en: "In a question, will comes before my order; Telugu never moves the words.",
        te: "ప్రశ్నలో will ముందుకు వస్తుంది, my order తర్వాత; తెలుగులో పదాల వరుస మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The app ___ it will arrive by Friday.",
      te: "శుక్రవారం లోపు వస్తుందని app చూపిస్తోంది.",
      options: ["says", "say", "telling"],
      answer: 0,
      why: {
        en: "One thing, like it, needs s on the verb; Telugu has no such s.",
        te: "app ఒక్కటే (it లాగా), అందుకే verb కి s కావాలి; తెలుగులో ఇలాంటి s ఉండదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The message says: It will arrive by Friday. What does it mean?",
        te: "It will arrive by Friday అని మెసేజ్ వచ్చింది. దాని అర్థం ఏంటి?",
      },
      options: ["On Friday or before", "Only after Friday", "Every Friday"],
      answer: 0,
      why: {
        en: "By a day means on that day or earlier, never later than it.",
        te: "by + రోజు అంటే ఆ రోజు గానీ, అంతకు ముందు గానీ; ఆ తర్వాత కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Your order will arrives tomorrow.",
      wrongIndex: 3,
      fix: "Your order will arrive tomorrow.",
      why: {
        en: "After will, the verb stays plain, with no s and no -ed.",
        te: "will తర్వాత verb అలాగే ఉంటుంది; s గానీ, -ed గానీ రావు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your parcel will come today, after five. Tell your friend when it will come.",
        te: "మీ పార్సెల్ ఈ రోజు ఐదింటి తర్వాత వస్తుంది. ఎప్పుడు వస్తుందో స్నేహితులకి చెప్పండి.",
      },
      expected: ["It will come this evening.", "It will arrive this evening.", "My parcel will come this evening.", "It's coming this evening."],
      options: ["It will come this evening.", "It will come today evening.", "It will coming this evening."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The app shows Out for delivery. Tell your neighbour your parcel is coming today.",
        te: "app లో Out for delivery అని ఉంది. మీ పార్సెల్ ఈ రోజు వస్తోందని పక్కింటివారికి చెప్పండి.",
      },
      expected: ["My parcel is out for delivery today.", "My parcel is coming today.", "It's out for delivery today.", "It will come today."],
      options: ["My parcel is out for delivery today.", "My parcel out for delivery today.", "My parcel is out of delivery today."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "When will my mixer come?", te: "నా mixer ఎప్పుడు వస్తుంది?" },
    scene: {
      en: "You ordered a mixer last week. You call ShopKart customer care. Your order ID is four seven double two.",
      te: "పోయిన వారం మీరు ఒక mixer ఆర్డర్ చేశారు. ShopKart customer care కి ఫోన్ చేశారు. మీ order ID: four seven double two.",
    },
    partner: { en: "David (customer care)", te: "డేవిడ్ (customer care)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking about a delivery", te: "డెలివరీ గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Thank you for calling ShopKart. This is David. How may I help you?",
        te: "ShopKart కి ఫోన్ చేసినందుకు థాంక్స్. నేను డేవిడ్. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say you ordered a mixer last week, and ask when it will come.", te: "పోయిన వారం mixer ఆర్డర్ చేశారని చెప్పి, అది ఎప్పుడు వస్తుందని అడగండి." },
        replies: [
          { say: "I ordered a mixer last week. When will it arrive?", good: true, skill: "ask" },
          { say: "Hello. I'd like to know when my mixer will arrive.", good: true, skill: "ask" },
          { say: "I ordered a mixer last week. When it will arrive?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Sure. Can you tell me your order ID, please?",
        te: "తప్పకుండా. మీ order ID చెప్తారా?",
        hint: { en: "Give him your order ID, digit by digit.", te: "మీ order ID ని ఒక్కో అంకె విడిగా చెప్పండి." },
        replies: [
          { say: "Yes. It's four seven double two.", good: true, skill: "ask" },
          { say: "It's four seven two two.", good: true, skill: "ask" },
          {
            say: "Why do you need it? Just check.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I need the ID to find your order.", te: "సారీ అండీ, మీ ఆర్డర్ వెతకడానికి ID కావాలి." },
          },
        ],
      },
      {
        partner: "Thank you. Your order has been shipped. It will arrive by Friday.",
        te: "థాంక్స్. మీ ఆర్డర్ పంపించారు. శుక్రవారం లోపు వస్తుంది.",
        hint: { en: "Ask if you can follow it on the app.", te: "app లో అది ఎక్కడుందో చూడొచ్చా అని అడగండి." },
        replies: [
          { say: "Thank you. Can I track it on the app?", good: true, skill: "ask" },
          { say: "Can I track my order on the app?", good: true, skill: "ask" },
          { say: "Thank you. I can track it on the app?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Yes. Tap My Orders, and you'll see where it is.",
        te: "చూడొచ్చు. My Orders నొక్కితే అది ఎక్కడుందో కనిపిస్తుంది.",
        hint: { en: "Thank him, and end the call politely.", te: "ఆయనకి థాంక్స్ చెప్పి, మర్యాదగా ఫోన్ పెట్టేయండి." },
        replies: [
          { say: "Thank you, David. That's very helpful.", good: true, skill: "polite" },
          { say: "Thank you for your help. Bye.", good: true, skill: "polite" },
          { say: "Thanks you, David. Bye.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
