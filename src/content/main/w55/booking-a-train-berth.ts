import type { Lesson } from "../../types";

/** Week 55, Day 2 (CURRICULUM §5): booking words at the reservation counter — I'd like two lower berths in sleeper class. */
export const day: Lesson = {
  id: "booking-a-train-berth",
  kind: "lesson",
  title: { en: "Booking a Train Ticket", te: "రైలు టికెట్ బుకింగ్" },
  subtitle: "I'd like two lower berths …",
  summary: {
    en: "Learn to book a train ticket and understand it: I'd like two lower berths in sleeper class. My ticket is on the waiting list.",
    te: "రైలు టికెట్ బుక్ చేయడం, దాన్ని అర్థం చేసుకోవడం నేర్చుకుందాం: I'd like two lower berths in sleeper class. My ticket is on the waiting list.",
  },
  seo: {
    title: "Booking a Train Ticket in English for Telugu Speakers",
    description:
      "Say I'd like two lower berths in sleeper class and understand waiting list, Tatkal and PNR. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I'd", role: "who" },
    { text: "like", role: "action" },
    { text: "two lower berths", role: "what" },
    { text: "in sleeper class", role: "what" },
  ],
  core: [
    { en: "I'd like two lower berths in sleeper class.", te: "స్లీపర్ క్లాస్‌లో రెండు లోయర్ బెర్తులు కావాలి.", extra: ["berth"] },
    { en: "My ticket is on the waiting list.", te: "నా టికెట్ వెయిటింగ్ లిస్ట్‌లో ఉంది.", extra: ["in"] },
    { en: "Will it be confirmed before the journey?", te: "ప్రయాణం లోపు కన్ఫర్మ్ అవుతుందా?", extra: ["confirm"] },
    { en: "Can I book a Tatkal ticket for tomorrow?", te: "రేపటికి తత్కాల్ టికెట్ బుక్ చేయొచ్చా?", extra: ["booking"] },
    { en: "You can check the PNR status on the app.", te: "app లో PNR స్టేటస్ చూసుకోవచ్చు.", extra: ["in"] },
    { en: "Senior citizens can ask for a lower berth.", te: "సీనియర్ సిటిజన్లు లోయర్ బెర్త్ అడగొచ్చు.", extra: ["asking"] },
    { en: "We're travelling on the twelfth of March.", te: "మేము మార్చి పన్నెండున ప్రయాణం చేస్తున్నాం.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a train trip you know. Say aloud how you would book it: I'd like … berth in … class.",
    te: "మీకు తెలిసిన ఒక రైలు ప్రయాణం గుర్తు చేసుకోండి. దాన్ని ఎలా బుక్ చేస్తారో గట్టిగా చెప్పండి: I'd like … berth in … class.",
  },
  words: [
    { en: "sleeper class", te: "స్లీపర్ క్లాస్" },
    { en: "lower berth", te: "లోయర్ బెర్త్, కింది బెర్త్" },
    { en: "waiting list", te: "వెయిటింగ్ లిస్ట్" },
    { en: "Tatkal", te: "తత్కాల్, అప్పటికప్పుడు బుకింగ్" },
    { en: "PNR", te: "PNR నంబర్, టికెట్ బుకింగ్ నంబర్" },
  ],
  grammar: ["would-like", "will", "articles"],
  topics: ["travel", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for a berth", te: "బెర్త్ అడగడం" },
      body: {
        en: "At the counter, say what you'd like: how many, which berth, which class. I'd like is softer than I want.",
        te: "కౌంటర్ దగ్గర మీకు ఏం కావాలో చెప్పండి: ఎన్ని, ఏ బెర్త్, ఏ క్లాస్. I want కంటే I'd like మర్యాదగా ఉంటుంది.",
      },
      bridge: {
        te: ["స్లీపర్ క్లాస్‌లో", "రెండు లోయర్ బెర్తులు", "కావాలి"],
        en: [
          { text: "I'd", role: "who" },
          { text: "like", role: "action" },
          { text: "two lower berths", role: "what" },
          { text: "in sleeper class", role: "what" },
        ],
      },
      examples: [
        { en: "I'd like two lower berths in sleeper class.", te: "స్లీపర్ క్లాస్‌లో రెండు లోయర్ బెర్తులు కావాలి." },
        { en: "I'd like an upper berth in third AC.", te: "థర్డ్ AC లో ఒక అప్పర్ బెర్త్ కావాలి." },
        { en: "We're travelling on the twelfth of March.", te: "మేము మార్చి పన్నెండున ప్రయాణం చేస్తున్నాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words on a train ticket", te: "రైలు టికెట్ మీద పదాలు" },
      items: [
        {
          form: "confirmed",
          useFor: { en: "You have a berth. It is yours.", te: "మీకు బెర్త్ దొరికింది. అది మీదే." },
          example: { en: "My ticket is confirmed, berth twenty-one.", te: "నా టికెట్ కన్ఫర్మ్ అయ్యింది, బెర్త్ ఇరవై ఒకటి." },
        },
        {
          form: "waiting list",
          useFor: { en: "No berth yet. You wait for someone to cancel.", te: "ఇంకా బెర్త్ లేదు. ఎవరైనా cancel చేస్తారేమోనని ఎదురుచూడాలి." },
          example: { en: "My ticket is on the waiting list.", te: "నా టికెట్ వెయిటింగ్ లిస్ట్‌లో ఉంది." },
        },
        {
          form: "Tatkal",
          useFor: { en: "A last-minute booking, a day before the journey, at a higher fare.", te: "చివరి నిమిషం బుకింగ్: ప్రయాణానికి ఒక రోజు ముందు, ఎక్కువ ఛార్జీతో." },
          example: { en: "Can I book a Tatkal ticket for tomorrow?", te: "రేపటికి తత్కాల్ టికెట్ బుక్ చేయొచ్చా?" },
        },
        {
          form: "PNR",
          useFor: { en: "The number of your booking. Use it to check the status.", te: "మీ బుకింగ్ నంబర్. స్టేటస్ చూడటానికి ఇది వాడతారు." },
          example: { en: "You can check the PNR status on the app.", te: "app లో PNR స్టేటస్ చూసుకోవచ్చు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I'd like lower berth, please.",
      right: "I'd like a lower berth, please.",
      why: {
        en: "One berth needs a before it; Telugu లోయర్ బెర్త్ has no such word.",
        te: "ఒక్క బెర్త్ అయితే ముందు a కావాలి; తెలుగులో 'లోయర్ బెర్త్' కి అలాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Can I prepone my ticket to Thursday?",
      right: "Can I change my ticket to Thursday?",
      why: {
        en: "Prepone is used only in India; elsewhere people say change or bring forward.",
        te: "prepone అనేది ఇండియాలో మాత్రమే వాడతారు; బయట change లేదా bring forward అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "You and a friend need two berths in sleeper class. Ask at the counter.",
        te: "మీకు, మీ స్నేహితులకి స్లీపర్ క్లాస్‌లో రెండు బెర్తులు కావాలి. కౌంటర్ దగ్గర అడగండి.",
      },
      options: ["I'd like two lower berths in sleeper class.", "I'd like two lower berth in sleeper class.", "I like two lower berths in sleeper class."],
      answer: 0,
      why: {
        en: "After two, berth takes s, and I'd like is the polite way to ask.",
        te: "రెండు తర్వాత berth కి s వస్తుంది; అడగడానికి I'd like మర్యాదైన మాట.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Railway Booking",
      lines: ["PNR 4521873610", "Narayanadri Express, 14 March", "Sleeper class", "Passenger 1: WL 12", "Passenger 2: CNF, S5, berth 23"],
      prompt: {
        en: "You booked two tickets, and this message came. What does it tell you?",
        te: "మీరు రెండు టికెట్లు బుక్ చేశారు, ఈ మెసేజ్ వచ్చింది. ఇది ఏం చెప్తోంది?",
      },
      options: ["One ticket is confirmed, and one is on the waiting list.", "Both tickets are confirmed.", "Both tickets are on the waiting list."],
      answer: 0,
      why: {
        en: "WL means waiting list, and CNF means confirmed, with a coach and a berth number.",
        te: "WL అంటే వెయిటింగ్ లిస్ట్; CNF అంటే కన్ఫర్మ్, దానికి కోచ్, బెర్త్ నంబర్ కూడా ఉంటాయి.",
      },
      say: "Passenger one is on the waiting list. Passenger two is confirmed.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your ticket is on the waiting list. Ask the clerk if you will get a berth before Friday.",
        te: "మీ టికెట్ వెయిటింగ్ లిస్ట్‌లో ఉంది. శుక్రవారం లోపు బెర్త్ దొరుకుతుందా అని క్లర్క్‌ని అడగండి.",
      },
      options: ["Will it be confirmed before Friday?", "Will it confirmed before Friday?", "It will confirm before Friday?"],
      answer: 0,
      why: {
        en: "After will, add be before confirmed; Telugu అవుతుందా has no extra word.",
        te: "will తర్వాత confirmed ముందు be కావాలి; తెలుగు 'అవుతుందా' లో అలాంటి పదం ఉండదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My friend Ruth is seventy, so she need a lower berth.",
      wrongIndex: 7,
      fix: "My friend Ruth is seventy, so she needs a lower berth.",
      why: {
        en: "With she, the verb takes s; Telugu ఆవిడకి కావాలి does not change.",
        te: "she తో verb కి s వస్తుంది; తెలుగు 'ఆవిడకి కావాలి' లో అలాంటి మార్పు ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Ask the clerk if you can book a last-minute ticket for tomorrow's train.",
        te: "రేపటి రైలుకి అప్పటికప్పుడు టికెట్ బుక్ చేయొచ్చా అని క్లర్క్‌ని అడగండి.",
      },
      expected: ["Can I book a Tatkal ticket for tomorrow?", "Is there a Tatkal ticket for tomorrow?", "Can I get a Tatkal ticket for tomorrow?"],
      options: ["Can I book a Tatkal ticket for tomorrow?", "Can I book Tatkal ticket for tomorrow?", "Can I booking a Tatkal ticket for tomorrow?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A friend asks about your ticket. Say it is on the waiting list.",
        te: "మీ టికెట్ గురించి స్నేహితులు అడుగుతున్నారు. అది వెయిటింగ్ లిస్ట్‌లో ఉందని చెప్పండి.",
      },
      expected: ["My ticket is on the waiting list.", "It's on the waiting list.", "It's still on the waiting list."],
      options: ["My ticket is on the waiting list.", "My ticket on the waiting list.", "My ticket is on waiting list."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the reservation counter", te: "రిజర్వేషన్ కౌంటర్ దగ్గర" },
    scene: {
      en: "You are at the railway reservation counter in Guntur. You need two tickets to Tirupati for Friday night.",
      te: "మీరు గుంటూరులో రైల్వే రిజర్వేషన్ కౌంటర్ దగ్గర ఉన్నారు. శుక్రవారం రాత్రికి తిరుపతికి రెండు టికెట్లు కావాలి.",
    },
    partner: { en: "Kavitha (the booking clerk)", te: "కవిత (బుకింగ్ క్లర్క్)" },
    skills: [
      { id: "book", label: { en: "Booking a ticket", te: "టికెట్ బుక్ చేయడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Next, please. Where are you travelling?",
        te: "తర్వాత ఎవరండీ. ఎక్కడికి ప్రయాణం?",
        hint: { en: "Greet her, and say you need two tickets to Tirupati for Friday.", te: "ఆవిడని పలకరించి, శుక్రవారానికి తిరుపతికి రెండు టికెట్లు కావాలని చెప్పండి." },
        replies: [
          { say: "Good morning. I'd like two tickets to Tirupati for Friday, please.", good: true, skill: "book" },
          {
            say: "Two tickets, Tirupati, Friday. Quick.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. Please be patient.", te: "సరే, సరే. కొంచెం ఓపిక పట్టండి." },
          },
        ],
      },
      {
        partner: "Which class? Sleeper or AC?",
        te: "ఏ క్లాస్? స్లీపరా, AC నా?",
        hint: { en: "Ask for sleeper class, and two lower berths if she can.", te: "స్లీపర్ క్లాస్ అడిగి, వీలైతే రెండు లోయర్ బెర్తులు అడగండి." },
        replies: [
          { say: "Sleeper class, please. Two lower berths, if possible.", good: true, skill: "book" },
          { say: "Sleeper class, please. Two lower berth, if possible.", good: false, skill: "book", fixIt: "plural" },
        ],
      },
      {
        partner: "Sorry, sleeper is full. You'll be on the waiting list, five and six.",
        te: "సారీ, స్లీపర్ ఫుల్. మీరు వెయిటింగ్ లిస్ట్‌లో ఐదు, ఆరు నంబర్లలో ఉంటారు.",
        hint: { en: "Ask if the tickets may get confirmed before Friday.", te: "శుక్రవారం లోపు టికెట్లు కన్ఫర్మ్ అవుతాయా అని అడగండి." },
        replies: [
          { say: "Will they be confirmed before Friday?", good: true, skill: "book" },
          { say: "Is there a good chance they'll be confirmed?", good: true, skill: "book" },
          { say: "Will they confirmed before Friday?", good: false, skill: "book", fixIt: "be" },
        ],
      },
      {
        partner: "Often, yes. Here's your ticket. Check the PNR status on Thursday.",
        te: "చాలాసార్లు అవుతాయి. ఇదిగోండి మీ టికెట్. గురువారం PNR స్టేటస్ చూసుకోండి.",
        hint: { en: "Thank her, and say when you will check it.", te: "థాంక్స్ చెప్పి, ఎప్పుడు చూసుకుంటారో చెప్పండి." },
        replies: [
          { say: "Thank you. I'll check the status on Thursday.", good: true, skill: "polite" },
          { say: "Thank you. I'll check the status in Thursday.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
