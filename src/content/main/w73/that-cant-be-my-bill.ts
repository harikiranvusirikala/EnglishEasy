import type { Lesson } from "../../types";

/** Week 73, Day 3 (CURRICULUM §5): can't be for something you are sure is not true — That can't be my bill. It's far too high. */
export const day: Lesson = {
  id: "that-cant-be-my-bill",
  kind: "lesson",
  title: { en: "That Can't Be Right", te: "అలా అయ్యుండదు" },
  subtitle: "can't be: sure it is not true",
  summary: {
    en: "Learn to say you are sure something is not true: That can't be my bill. It's far too high.",
    te: "ఏదైనా నిజం కాదని గట్టిగా అనిపించినప్పుడు చెప్పడం నేర్చుకుందాం: That can't be my bill. It's far too high.",
  },
  seo: {
    title: "Can't Be in English for Telugu Speakers",
    description:
      "Say That can't be my bill and She can't be at home. Simple lessons for Telugu speakers on saying politely that something is surely not true.",
  },
  pattern: [
    { text: "That", role: "who" },
    { text: "can't be", role: "action" },
    { text: "my bill", role: "what" },
  ],
  core: [
    { en: "That can't be right.", te: "అలా అయ్యుండదు.", extra: ["mustn't"] },
    { en: "That can't be my bill. It's far too high.", te: "ఇది నా బిల్లు అయ్యుండదు. మరీ ఎక్కువగా ఉంది.", extra: ["very"] },
    { en: "She can't be at home. Her scooter isn't here.", te: "ఆవిడ ఇంట్లో ఉండే ఛాన్స్ లేదు. ఆవిడ స్కూటర్ ఇక్కడ లేదు.", extra: ["in"] },
    { en: "There are only two of us at home.", te: "ఇంట్లో మేము ఇద్దరమే.", extra: ["is"] },
    { en: "It can't be two thousand rupees for one month.", te: "ఒక్క నెలకి రెండు వేల రూపాయలు అయ్యుండదు.", extra: ["months"] },
    { en: "Could you check the meter reading again, please?", te: "కొంచెం మీటర్ రీడింగ్ మళ్ళీ చూస్తారా?", extra: ["readings"] },
    { en: "There must be a mistake in the reading.", te: "రీడింగ్‌లో ఏదో పొరపాటు జరిగి ఉంటుంది.", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your last electricity or water bill. Say aloud if it looks right, or if it can't be right.",
    te: "మీ చివరి కరెంట్ బిల్లు గానీ నీటి బిల్లు గానీ చూడండి. సరిగ్గా ఉందో, లేక అలా అయ్యుండదో గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "can't be", te: "… అయ్యుండదు" },
    { en: "far too", te: "మరీ, అవసరానికి మించి" },
    { en: "meter reading", te: "మీటర్ రీడింగ్" },
    { en: "impossible", te: "అసాధ్యం, అలా జరగదు" },
    { en: "recheck", te: "మళ్ళీ చెక్ చేయడం" },
  ],
  grammar: ["might-may", "politeness-softening", "there-is-are"],
  topics: ["money", "offices", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Sure it's not true: can't be", te: "కాదని గట్టి నమ్మకం: can't be" },
      body: {
        en: "When the signs show something is surely not true, say can't be. It is the opposite of must be: That can't be my bill.",
        te: "ఏదైనా నిజం కాదని గుర్తులు చెప్తుంటే can't be అనండి. ఇది must be కి వ్యతిరేకం: That can't be my bill (ఇది నా బిల్లు అయ్యుండదు).",
      },
      bridge: {
        te: ["ఇది", "నా బిల్లు", "అయ్యుండదు"],
        en: [
          { text: "That", role: "who" },
          { text: "can't be", role: "action" },
          { text: "my bill", role: "what" },
        ],
      },
      examples: [
        { en: "That can't be right.", te: "అలా అయ్యుండదు." },
        { en: "That can't be my bill. It's far too high.", te: "ఇది నా బిల్లు అయ్యుండదు. మరీ ఎక్కువగా ఉంది." },
        { en: "She can't be at home. Her scooter isn't here.", te: "ఆవిడ ఇంట్లో ఉండే ఛాన్స్ లేదు. ఆవిడ స్కూటర్ ఇక్కడ లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Must be, might be or can't be?", te: "must be, might be, can't be: ఏది?" },
      items: [
        {
          form: "must be",
          useFor: { en: "Almost sure it is true.", te: "నిజమేనని దాదాపు ఖచ్చితంగా అనిపిస్తుంది." },
          example: { en: "Her scooter is here. She must be at home.", te: "ఆవిడ స్కూటర్ ఇక్కడే ఉంది. ఇంట్లోనే ఉండి ఉంటారు." },
        },
        {
          form: "might be",
          useFor: { en: "Not sure either way.", te: "అవునో కాదో తెలియదు." },
          example: { en: "She might be at the market.", te: "ఆవిడ మార్కెట్‌లో ఉండొచ్చు." },
        },
        {
          form: "can't be",
          useFor: { en: "Almost sure it is not true.", te: "నిజం కాదని దాదాపు ఖచ్చితంగా అనిపిస్తుంది." },
          example: { en: "Two thousand rupees? That's impossible. It can't be right.", te: "రెండు వేల రూపాయలా? అసాధ్యం. అలా అయ్యుండదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "That mustn't be my bill.",
      right: "That can't be my bill.",
      why: {
        en: "Mustn't means do not do it; a guess that something is not true uses can't be.",
        te: "mustn't అంటే 'చేయకూడదు'; నిజం కాదని ఊహించాలంటే can't be వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "She always park her scooter here.",
      right: "She always parks her scooter here.",
      why: {
        en: "For a habit of one person, like she, the verb takes s.",
        te: "ఒక్కరి అలవాటు (she లాగా) చెప్పేటప్పుడు verb కి s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your water bill says 3,000 rupees. It is usually about 300. What do you say at the counter?",
        te: "మీ నీటి బిల్లు 3,000 రూపాయలు అని ఉంది. మామూలుగా 300 దాకా వస్తుంది. కౌంటర్ దగ్గర ఏమంటారు?",
      },
      options: ["Sorry, this can't be right. It's far too high.", "Sorry, this mustn't be right. It's far too high.", "This is wrong. You people are cheating."],
      answer: 0,
      why: {
        en: "Can't be shows you are sure it's wrong, and sorry keeps it polite.",
        te: "can't be తో అది తప్పని గట్టిగా చెప్తారు; sorry తో మర్యాదగా ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The gate is locked. They can't ___ at home.",
      te: "గేటుకి తాళం వేసి ఉంది. వాళ్ళు ఇంట్లో ఉండే ఛాన్స్ లేదు.",
      options: ["be", "are", "is"],
      answer: 0,
      why: {
        en: "After can't, the verb stays plain, so be is used, never are or is.",
        te: "can't తర్వాత verb మారదు; అందుకే are, is కాదు, be వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Someone says your friend Raju is in Hyderabad today. But you just saw him at the tea stall. What do you say?",
        te: "మీ స్నేహితుడు రాజు గారు ఈ రోజు హైదరాబాద్‌లో ఉన్నారని ఎవరో అన్నారు. కానీ మీరు ఇప్పుడే ఆయన్ని టీ కొట్టు దగ్గర చూశారు. ఏమంటారు?",
      },
      options: ["He can't be in Hyderabad. I just saw him.", "He can't in Hyderabad. I just saw him.", "He must be in Hyderabad. I just saw him."],
      answer: 0,
      why: {
        en: "You saw him here, so the guess is can't be, and be is never dropped.",
        te: "ఆయన్ని ఇక్కడే చూశారు కాబట్టి can't be; be ని వదలకూడదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "That can't be right. We pay same amount every month.",
      wrongIndex: 6,
      fix: "That can't be right. We pay the same amount every month.",
      why: {
        en: "Same always takes the before it; Telugu అంతే has no such word.",
        te: "same ముందు ఎప్పుడూ the వస్తుంది; తెలుగులో అలాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your water bill says 2,000 rupees for one month. Tell the clerk politely that you are sure it is wrong.",
        te: "మీ నీటి బిల్లు ఒక్క నెలకి 2,000 రూపాయలు అని ఉంది. అది తప్పని మీకు ఖచ్చితంగా తెలుసని క్లర్క్‌కి మర్యాదగా చెప్పండి.",
      },
      expected: [
        "Sorry, this can't be right.",
        "Sorry, this can't be my bill.",
        "This can't be right. It's far too high.",
        "Sorry, there must be a mistake.",
      ],
      options: ["Sorry, this can't be right.", "Sorry, this mustn't be right.", "This is wrong. Give me a new bill."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Ask the clerk to check the meter reading again.",
        te: "మీటర్ రీడింగ్ మళ్ళీ చూడమని క్లర్క్‌ని అడగండి.",
      },
      expected: [
        "Could you check the meter reading again, please?",
        "Can you check the meter reading again, please?",
        "Could you please recheck the meter reading?",
      ],
      options: ["Could you check the meter reading again, please?", "Could you check meter reading again, please?", "You check the meter reading again."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A very high water bill", te: "చాలా ఎక్కువ నీటి బిల్లు" },
    scene: {
      en: "Your water bill for May is 2,400 rupees. It is usually about 300. You go to the water board office.",
      te: "మే నెల మీ నీటి బిల్లు 2,400 రూపాయలు. మామూలుగా 300 దాకా వస్తుంది. మీరు వాటర్ బోర్డ్ ఆఫీసుకి వెళ్ళారు.",
    },
    partner: { en: "Srinivas (the clerk)", te: "శ్రీనివాస్ (క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "complain", label: { en: "Saying it's wrong", te: "తప్పని చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet him, and say there is a problem with your water bill.", te: "నమస్కారం చెప్పి, మీ నీటి బిల్లులో సమస్య ఉందని చెప్పండి." },
        replies: [
          { say: "Good morning. I have a problem with my water bill.", good: true, skill: "polite" },
          { say: "Good morning. I am having a problem with my water bill.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Let me see. Yes, it says 2,400 rupees.",
        te: "చూస్తాను. అవును, 2,400 రూపాయలు అని ఉంది.",
        hint: { en: "Say politely that you are sure it is wrong, and give the usual amount.", te: "అది తప్పని మర్యాదగా చెప్పి, మామూలుగా ఎంత వస్తుందో చెప్పండి." },
        replies: [
          { say: "That can't be right, sir. It's usually about 300.", good: true, skill: "complain" },
          { say: "That mustn't be right, sir. It's usually about 300.", good: false, skill: "complain" },
          {
            say: "Are you mad? Who uses so much water?",
            good: false,
            skill: "polite",
            react: { en: "Please don't shout. Let me check it for you.", te: "దయచేసి గట్టిగా మాట్లాడకండి. నేను చెక్ చేస్తాను." },
          },
        ],
      },
      {
        partner: "Hmm. Is there a leak in your pipes?",
        te: "హ్మ్. మీ పైపుల్లో ఎక్కడైనా లీక్ ఉందా?",
        hint: { en: "Say no, and say how many people live in your home.", te: "లేదని చెప్పి, మీ ఇంట్లో ఎంతమంది ఉంటారో చెప్పండి." },
        replies: [
          { say: "No, there's no leak. There are only two of us at home.", good: true, skill: "complain" },
          { say: "No, there's no leak. We are only two peoples at home.", good: false, skill: "complain", fixIt: "plural" },
        ],
      },
      {
        partner: "Then the meter reading might be wrong. I'll send someone to recheck it.",
        te: "అయితే మీటర్ రీడింగ్ తప్పు అయ్యుండొచ్చు. మళ్ళీ చెక్ చేయడానికి ఒకరిని పంపిస్తాను.",
        hint: { en: "Thank him, and ask when the person will come.", te: "థాంక్స్ చెప్పి, ఆ మనిషి ఎప్పుడు వస్తారో అడగండి." },
        replies: [
          { say: "Thank you, sir. When will someone come?", good: true, skill: "polite" },
          { say: "Thank you, sir. When someone will come?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
    ],
  },
};
