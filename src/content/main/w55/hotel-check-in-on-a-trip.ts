import type { Lesson } from "../../types";

/** Week 55, Day 3 (CURRICULUM §5): hotel words at the reception — I have a booking in the name of Sai. What time is checkout? */
export const day: Lesson = {
  id: "hotel-check-in-on-a-trip",
  kind: "lesson",
  title: { en: "Checking In", te: "హోటల్‌లో చెక్-ఇన్" },
  subtitle: "I have a booking in the name of …",
  summary: {
    en: "Learn to check in at a hotel and ask about the room: I have a booking in the name of Sai. What time is checkout?",
    te: "హోటల్‌లో చెక్-ఇన్ చేయడం, రూమ్ గురించి అడగడం నేర్చుకుందాం: I have a booking in the name of Sai. What time is checkout?",
  },
  seo: {
    title: "Checking In at a Hotel in English for Telugu Speakers",
    description:
      "Say I have a booking in the name of Sai and What time is checkout? Simple lessons for Telugu speakers on hotels during a trip.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have", role: "action" },
    { text: "a booking", role: "what" },
    { text: "in the name of Sai", role: "what" },
  ],
  core: [
    { en: "I have a booking in the name of Sai.", te: "సాయి పేరు మీద బుకింగ్ ఉంది.", extra: ["am"] },
    { en: "What time is checkout?", te: "చెక్ఔట్ ఎన్ని గంటలకి?", extra: ["does"] },
    { en: "Is there hot water in the morning?", te: "పొద్దున వేడి నీళ్ళు వస్తాయా?", extra: ["are"] },
    { en: "Can we have an extra bed in the room?", te: "రూమ్‌లో ఇంకో బెడ్ వేస్తారా?", extra: ["a"] },
    { en: "We're staying for two nights, till Sunday.", te: "ఆదివారం దాకా, రెండు రాత్రులు ఉంటున్నాం.", extra: ["since"] },
    { en: "Could you send some drinking water to the room?", te: "రూమ్‌కి కొంచెం తాగే నీళ్ళు పంపిస్తారా?", extra: ["waters"] },
    { en: "We've been waiting for the room since eleven.", te: "పదకొండు గంటల నుంచి రూమ్ కోసం ఎదురుచూస్తున్నాం.", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Imagine you reach a hotel. Say aloud your first two sentences at the reception: I have a booking … What time is …?",
    te: "మీరు ఒక హోటల్‌కి చేరుకున్నారనుకోండి. రిసెప్షన్‌లో మీరు చెప్పే మొదటి రెండు మాటలు గట్టిగా చెప్పండి: I have a booking … What time is …?",
  },
  words: [
    { en: "check in", te: "చెక్-ఇన్, హోటల్‌లో దిగడం" },
    { en: "checkout", te: "చెక్ఔట్, రూమ్ ఖాళీ చేయడం" },
    { en: "extra bed", te: "అదనపు బెడ్" },
    { en: "hot water", te: "వేడి నీళ్ళు" },
    { en: "double room", te: "ఇద్దరు ఉండే రూమ్, డబుల్ రూమ్" },
  ],
  grammar: ["have-has-possessives", "there-is-are", "present-perfect-continuous"],
  topics: ["travel", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "At the reception", te: "రిసెప్షన్ దగ్గర" },
      body: {
        en: "Give your booking first: I have a booking in the name of … Then ask about the room with Is there …? and What time …?",
        te: "ముందు మీ బుకింగ్ చెప్పండి: I have a booking in the name of … తర్వాత రూమ్ గురించి Is there …?, What time …? అని అడగండి.",
      },
      bridge: {
        te: ["సాయి పేరు మీద", "బుకింగ్", "ఉంది"],
        en: [
          { text: "I", role: "who" },
          { text: "have", role: "action" },
          { text: "a booking", role: "what" },
          { text: "in the name of Sai", role: "what" },
        ],
      },
      examples: [
        { en: "I have a booking in the name of Sai.", te: "సాయి పేరు మీద బుకింగ్ ఉంది." },
        { en: "What time is checkout?", te: "చెక్ఔట్ ఎన్ని గంటలకి?" },
        { en: "Is there hot water in the morning?", te: "పొద్దున వేడి నీళ్ళు వస్తాయా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking at a hotel", te: "హోటల్‌లో అడగడం" },
      items: [
        {
          form: "Is there …?",
          useFor: { en: "Ask if the hotel has something.", te: "హోటల్‌లో ఏదైనా ఉందా అని అడగడానికి." },
          example: { en: "Is there a lift in the hotel?", te: "హోటల్‌లో లిఫ్ట్ ఉందా?" },
        },
        {
          form: "What time is …?",
          useFor: { en: "Ask about times: checkout, breakfast.", te: "టైమ్ అడగడానికి: చెక్ఔట్, బ్రేక్‌ఫాస్ట్." },
          example: { en: "What time is breakfast?", te: "బ్రేక్‌ఫాస్ట్ ఎన్ని గంటలకి?" },
        },
        {
          form: "Can we have …?",
          useFor: { en: "Ask for something extra.", te: "అదనంగా ఏదైనా అడగడానికి." },
          example: { en: "Can we have an extra bed in the room?", te: "రూమ్‌లో ఇంకో బెడ్ వేస్తారా?" },
        },
        {
          form: "We're staying for …",
          useFor: { en: "Say how long you will stay.", te: "ఎన్ని రోజులు ఉంటారో చెప్పడానికి." },
          example: { en: "We're staying for two nights, till Sunday.", te: "ఆదివారం దాకా, రెండు రాత్రులు ఉంటున్నాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am having a booking for two nights.",
      right: "I have a booking for two nights.",
      why: {
        en: "Have for something you own takes no -ing; Telugu ఉంది does not need it either.",
        te: "మీకు ఉన్నదాన్ని చెప్పే have కి -ing రాదు; తెలుగు 'ఉంది' లో కూడా అది ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "We are waiting here since eleven.",
      right: "We've been waiting here since eleven.",
      why: {
        en: "With since or for, English uses have been + -ing, not the present.",
        te: "since, for ఉంటే ఇంగ్లీష్‌లో have been + -ing వాడాలి, present కాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Your cousin is coming too. Ask the reception for one more bed.",
        te: "మీ కజిన్ కూడా వస్తున్నారు. ఇంకో బెడ్ కావాలని రిసెప్షన్‌లో అడగండి.",
      },
      options: ["Can we have an extra bed, please?", "Can we have a extra bed, please?", "Can we have extra bed, please?"],
      answer: 0,
      why: {
        en: "Extra starts with a vowel sound, so one extra bed takes an, not a.",
        te: "extra అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే a కాదు, an వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Sri Lakshmi Residency",
      lines: [
        "Welcome to Tirupati! Information for our guests.",
        "Check in from 12 noon. Checkout by 11 am.",
        "Hot water comes from 5 am to 9 am every day.",
        "Breakfast is in the dining hall, from 7 to 10 am.",
        "An extra bed costs 300 rupees a night.",
        "Please leave your room key at the reception when you go out.",
        "Please switch off the AC and the lights when you go out.",
        "For help, dial nine from your room phone.",
      ],
      questions: [
        {
          prompt: { en: "What time is checkout?", te: "చెక్ఔట్ ఎన్ని గంటలకి?" },
          options: ["By 11 am", "From 12 noon", "By 9 am"],
          answer: 0,
          why: {
            en: "The second line gives two times; checkout is the second one.",
            te: "రెండో లైన్‌లో రెండు టైమ్‌లు ఉన్నాయి; చెక్ఔట్ రెండోది.",
          },
        },
        {
          prompt: { en: "When can you get hot water?", te: "వేడి నీళ్ళు ఎప్పుడు వస్తాయి?" },
          options: ["From 5 to 9 in the morning", "All day and all night", "From 7 to 10 in the morning"],
          answer: 0,
          why: {
            en: "The third line says hot water comes only early in the morning.",
            te: "మూడో లైన్‌లో వేడి నీళ్ళు పొద్దున్నే మాత్రమే వస్తాయని ఉంది.",
          },
        },
        {
          prompt: { en: "What should you do with the key when you go out?", te: "బయటికి వెళ్ళేటప్పుడు తాళం ఏం చేయాలి?" },
          options: ["Leave it at the reception", "Take it with you", "Leave it in the room"],
          answer: 0,
          why: {
            en: "The sixth line asks guests to give the key to the front desk.",
            te: "ఆరో లైన్‌లో, బయటికి వెళ్ళేటప్పుడు తాళం రిసెప్షన్‌లో ఇవ్వమని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the receptionist when you must leave the room.", te: "రూమ్ ఎప్పుడు ఖాళీ చేయాలని రిసెప్షనిస్ట్‌ని అడగండి." },
      options: ["What time is checkout?", "What time checkout is?", "What is time of checkout?"],
      answer: 0,
      why: {
        en: "In a question, is comes before checkout, not at the end as in Telugu.",
        te: "ప్రశ్నలో is, checkout కంటే ముందు వస్తుంది; తెలుగులో లాగా చివర రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The manager say breakfast is free for guests.",
      wrongIndex: 2,
      fix: "The manager says breakfast is free for guests.",
      why: {
        en: "The manager is one person, like he or she, so the verb takes s.",
        te: "మేనేజర్ ఒక్కరే, he లేదా she లాగా; అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "At the reception, say you booked a room. The booking is in your name, Kiran.",
        te: "రిసెప్షన్‌లో మీరు రూమ్ బుక్ చేశారని చెప్పండి. బుకింగ్ మీ పేరు మీద ఉంది: కిరణ్.",
      },
      expected: ["I have a booking in the name of Kiran.", "I have a room booked in the name of Kiran.", "I have a booking. My name is Kiran."],
      options: ["I have a booking in the name of Kiran.", "I am having a booking in the name of Kiran.", "I have booking in the name of Kiran."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "You have waited at the reception for an hour. Tell the manager politely.",
        te: "మీరు రిసెప్షన్‌లో గంట నుంచి ఎదురుచూస్తున్నారు. మేనేజర్‌కి మర్యాదగా చెప్పండి.",
      },
      expected: ["Excuse me, we've been waiting for an hour.", "Sorry, we've been waiting for an hour.", "We've been waiting for an hour. Is the room ready?"],
      options: ["Excuse me, we've been waiting for an hour.", "Excuse me, we are waiting since one hour.", "Hey, how long do we wait? Hurry up."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the hotel reception", te: "హోటల్ రిసెప్షన్ దగ్గర" },
    scene: {
      en: "You reach a hotel in Tirupati early in the morning, after the night train. Srinivas is at the reception.",
      te: "రాత్రి రైలు దిగి, పొద్దున్నే తిరుపతిలో ఒక హోటల్‌కి చేరుకున్నారు. రిసెప్షన్‌లో శ్రీనివాస్ గారు ఉన్నారు.",
    },
    partner: { en: "Srinivas (at the reception)", te: "శ్రీనివాస్ (రిసెప్షన్‌లో)" },
    voice: "b",
    skills: [
      { id: "hotel", label: { en: "Checking in", te: "చెక్-ఇన్ చేయడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Welcome to Tirupati. How can I help you?",
        te: "గుడ్ మార్నింగ్! తిరుపతికి స్వాగతం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet him, and say you have a booking in your name.", te: "ఆయన్ని పలకరించి, మీ పేరు మీద బుకింగ్ ఉందని చెప్పండి." },
        replies: [
          { say: "Good morning. I have a booking in the name of Sai.", good: true, skill: "hotel" },
          { say: "Good morning. I am having a booking in the name of Sai.", good: false, skill: "hotel", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Yes, a double room for two nights. Your room is ready.",
        te: "అవును, రెండు రాత్రులకి డబుల్ రూమ్. మీ రూమ్ రెడీగా ఉంది.",
        hint: { en: "Thank him, and ask when you have to leave the room.", te: "థాంక్స్ చెప్పి, రూమ్ ఎప్పుడు ఖాళీ చేయాలో అడగండి." },
        replies: [
          { say: "Thank you. What time is checkout?", good: true, skill: "hotel" },
          { say: "Thank you. What time checkout is?", good: false, skill: "hotel", fixIt: "question" },
        ],
      },
      {
        partner: "Checkout is at eleven. Anything else?",
        te: "చెక్ఔట్ పదకొండు గంటలకి. ఇంకేమైనా కావాలా?",
        hint: { en: "Ask about hot water in the morning.", te: "పొద్దున వేడి నీళ్ళ గురించి అడగండి." },
        replies: [
          { say: "Is there hot water in the morning?", good: true, skill: "hotel" },
          { say: "Do you have hot water in the morning?", good: true, skill: "hotel" },
          {
            say: "The water had better be hot. Last time it was cold.",
            good: false,
            skill: "polite",
            react: { en: "Don't worry, it's hot from five to nine.", te: "కంగారు పడకండి, ఐదు నుంచి తొమ్మిది దాకా వేడి నీళ్ళు వస్తాయి." },
          },
        ],
      },
      {
        partner: "Yes, from five to nine. Here's your key, room twelve.",
        te: "వస్తాయి, ఐదు నుంచి తొమ్మిది దాకా. ఇదిగోండి మీ తాళం, రూమ్ నంబర్ పన్నెండు.",
        hint: { en: "Thank him, and ask him to send drinking water to the room.", te: "థాంక్స్ చెప్పి, రూమ్‌కి తాగే నీళ్ళు పంపమని అడగండి." },
        replies: [
          { say: "Thanks. Could you send some drinking water, please?", good: true, skill: "polite" },
          { say: "Thanks. Could you send some drinking waters, please?", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
