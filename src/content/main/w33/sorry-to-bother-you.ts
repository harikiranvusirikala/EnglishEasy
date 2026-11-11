import type { Lesson } from "../../types";

/** Week 33, Day 4 (CURRICULUM §4): complaining politely to a neighbour — noise, parking, garbage. */
export const day: Lesson = {
  id: "sorry-to-bother-you",
  kind: "lesson",
  title: { en: "Sorry to Bother You", te: "ఒక చిన్న సమస్య" },
  subtitle: "Sorry to bother you. Could you …?",
  summary: {
    en: "Learn to raise a problem with a neighbour calmly: Sorry to bother you. Your car is blocking my gate.",
    te: "పక్కింటివారికి ఒక సమస్యని ప్రశాంతంగా చెప్పడం నేర్చుకుందాం: Sorry to bother you. Your car is blocking my gate.",
  },
  seo: {
    title: "Complaining Politely in English for Telugu Speakers",
    description:
      "Say Sorry to bother you. Your car is blocking my gate. Simple lessons for Telugu speakers on raising noise and parking problems politely.",
  },
  pattern: [
    { text: "Your car", role: "who" },
    { text: "is blocking", role: "action" },
    { text: "my gate.", role: "what" },
  ],
  core: [
    { en: "Your car is blocking my gate.", te: "మీ కారు మా గేటుకి అడ్డంగా ఉంది.", extra: ["are"] },
    { en: "Sorry to bother you. Could you move your car?", te: "ఇబ్బంది పెడుతున్నందుకు సారీ. కొంచెం మీ కారు తీస్తారా?", extra: ["remove"] },
    { en: "Could you turn down the music, please?", te: "కొంచెం మ్యూజిక్ సౌండ్ తగ్గిస్తారా?", extra: ["low"] },
    { en: "Please don't park in front of my gate.", te: "కొంచెం మా గేటు ముందు బండి పెట్టకండి.", extra: ["parking"] },
    { en: "The music upstairs is very loud at night.", te: "పైన మ్యూజిక్ రాత్రిపూట చాలా గట్టిగా వస్తోంది.", extra: ["are"] },
    { en: "Sorry, I didn't know. I'll move it now.", te: "సారీ, నాకు తెలియలేదు. ఇప్పుడే తీసేస్తాను.", extra: ["knew"] },
    { en: "Please don't leave garbage on the stairs.", te: "మెట్ల మీద చెత్త పెట్టకండి.", extra: ["garbages"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one small problem near your home. Say it aloud the polite way: Sorry to bother you …",
    te: "మీ ఇంటి దగ్గర ఒక చిన్న సమస్య గురించి ఆలోచించండి. Sorry to bother you … అంటూ మర్యాదగా పైకి చెప్పి చూడండి.",
  },
  words: [
    { en: "bother", te: "ఇబ్బంది పెట్టడం" },
    { en: "blocking", te: "అడ్డంగా ఉండటం" },
    { en: "parking", te: "బండి పెట్టే చోటు, పార్కింగ్" },
    { en: "turn down", te: "సౌండ్ తగ్గించడం" },
    { en: "garbage", te: "చెత్త" },
  ],
  grammar: ["present-continuous", "can-could", "imperatives", "politeness-softening"],
  topics: ["neighbours", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Raising a problem politely", te: "సమస్యని మర్యాదగా చెప్పడం" },
      body: {
        en: "Start softly with Sorry to bother you. Then say the problem calmly, and ask for one thing with Could you …? Neighbours help more when you stay polite.",
        te: "ముందు Sorry to bother you అని మెల్లగా మొదలుపెట్టండి. తర్వాత సమస్యని ప్రశాంతంగా చెప్పి, Could you …? తో ఒక్కటి అడగండి.",
      },
      bridge: {
        te: ["మీ కారు", "మా గేటుకి", "అడ్డంగా ఉంది"],
        en: [
          { text: "Your car", role: "who" },
          { text: "is blocking", role: "action" },
          { text: "my gate.", role: "what" },
        ],
      },
      examples: [
        { en: "Your car is blocking my gate.", te: "మీ కారు మా గేటుకి అడ్డంగా ఉంది." },
        { en: "Sorry to bother you. Could you move your car?", te: "ఇబ్బంది పెడుతున్నందుకు సారీ. కొంచెం మీ కారు తీస్తారా?" },
        { en: "Could you turn down the music, please?", te: "కొంచెం మ్యూజిక్ సౌండ్ తగ్గిస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three steps, and a kind end", te: "మూడు అడుగులు, చివర్లో ఒక మంచి మాట" },
      items: [
        {
          form: "Sorry to bother you.",
          useFor: { en: "First, start softly.", te: "ముందు, మెల్లగా మొదలుపెట్టడం." },
          example: { en: "Sorry to bother you. Do you have a minute?", te: "ఇబ్బంది పెడుతున్నందుకు సారీ. ఒక్క నిమిషం ఉందా?" },
        },
        {
          form: "The music is …",
          useFor: { en: "Next, say the problem calmly.", te: "తర్వాత, సమస్య ఏంటో ప్రశాంతంగా చెప్పడం." },
          example: { en: "The music upstairs is very loud at night.", te: "పైన మ్యూజిక్ రాత్రిపూట చాలా గట్టిగా వస్తోంది." },
        },
        {
          form: "Could you …, please?",
          useFor: { en: "Then, ask for one clear thing.", te: "ఆ తర్వాత, ఏం చేయాలో స్పష్టంగా ఒక్కటి అడగడం." },
          example: { en: "Could you turn down the music, please?", te: "కొంచెం మ్యూజిక్ సౌండ్ తగ్గిస్తారా?" },
        },
        {
          form: "Thank you for understanding.",
          useFor: { en: "End kindly.", te: "ఆప్యాయంగా ముగించడం." },
          example: { en: "Thank you for understanding.", te: "అర్థం చేసుకున్నందుకు థాంక్స్." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "Sorry, your car blocking my gate.",
      right: "Sorry, your car is blocking my gate.",
      why: {
        en: "Telugu అడ్డంగా ఉంది has no separate helper word, but English needs is before blocking.",
        te: "తెలుగులో 'అడ్డంగా ఉంది' అంటాం; ఇంగ్లీష్‌లో blocking ముందు is తప్పనిసరి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Remove your car from my gate!",
      right: "Could you move your car, please?",
      why: {
        en: "Remove is not used for a car, and it sounds like an order; move with could is polite.",
        te: "కారుకి remove అనరు, పైగా అది ఆర్డర్ లా ఉంటుంది; could తో move అంటే మర్యాదగా ఉంటుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Loud music comes from upstairs every night. What do you say?",
        te: "రోజూ రాత్రి పైనుండి గట్టిగా మ్యూజిక్ వినిపిస్తోంది. ఏమంటారు?",
      },
      options: [
        "Sorry to bother you. Could you turn down the music?",
        "Stop that music! People are sleeping here!",
        "Sorry to bother you. Could you turn low the music?",
      ],
      answer: 0,
      why: {
        en: "Start softly, then ask for one thing; turn down means make it quieter.",
        te: "మెల్లగా మొదలుపెట్టి, ఒక్కటి అడగండి; turn down అంటే సౌండ్ తగ్గించడం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The dog next door ___ all night.",
      te: "పక్కింటి కుక్క రాత్రంతా మొరుగుతుంది.",
      options: ["barks", "bark", "barking"],
      answer: 0,
      why: {
        en: "One dog is like he or she, so the verb takes s.",
        te: "ఒక్క కుక్క అంటే he / she లాగా, అందుకే verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour says: Sorry, I didn't know. I'll move it now. What will he do?",
        te: "పక్కింటాయన Sorry, I didn't know. I'll move it now అన్నారు. ఆయన ఏం చేస్తారు?",
      },
      options: ["Move his car at once.", "Move his car tomorrow.", "Leave his car there."],
      answer: 0,
      why: {
        en: "Now means at once, and I'll move it is a promise to do it.",
        te: "now అంటే వెంటనే; I'll move it అంటే తీస్తానని మాట ఇవ్వడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Please don't leave garbages on the stairs.",
      wrongIndex: 3,
      fix: "Please don't leave garbage on the stairs.",
      why: {
        en: "Garbage cannot be counted, so it never takes s.",
        te: "garbage ని లెక్కపెట్టలేం, అందుకే దానికి ఎప్పుడూ s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A car is blocking your gate. Ask the owner politely to move it.",
        te: "ఒక కారు మీ గేటుకి అడ్డంగా ఉంది. తీయమని కారు ఓనర్‌ని మర్యాదగా అడగండి.",
      },
      expected: ["Sorry to bother you. Could you move your car?", "Could you move your car, please?", "Could you please move your car?"],
      options: ["Sorry to bother you. Could you move your car?", "Remove your car. It is blocking!", "Sorry to bother you. Could you moving your car?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone keeps leaving garbage on the stairs. Ask them kindly to stop.",
        te: "ఎవరో మెట్ల మీద చెత్త పెడుతున్నారు. పెట్టొద్దని మర్యాదగా అడగండి.",
      },
      expected: ["Please don't leave garbage on the stairs.", "Please don't leave the garbage on the stairs."],
      options: ["Please don't leave garbage on the stairs.", "Please don't leave garbages on the stairs.", "Who is putting garbage here? Shame!"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A car at the gate", te: "గేటు ముందు కారు" },
    scene: {
      en: "You need to take out your scooter, but Kavitha's car is blocking your gate. You ring her bell.",
      te: "మీరు స్కూటర్ బయటికి తీయాలి, కానీ కవిత గారి కారు మీ గేటుకి అడ్డంగా ఉంది. ఆవిడ ఇంటి బెల్ కొట్టారు.",
    },
    partner: { en: "Kavitha (neighbour)", te: "కవిత (పక్కింటావిడ)" },
    skills: [
      { id: "problem", label: { en: "Raising a problem", te: "సమస్య చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Oh, good morning! Is anything wrong?",
        te: "ఓ, నమస్కారం! ఏమైనా సమస్యా?",
        hint: { en: "Say sorry for troubling her, and say the problem.", te: "ఇబ్బంది పెడుతున్నందుకు సారీ చెప్పి, సమస్య ఏంటో చెప్పండి." },
        replies: [
          { say: "Sorry to bother you. Your car is blocking my gate.", good: true, skill: "problem" },
          { say: "Sorry to bother you. Your car blocking my gate.", good: false, skill: "problem", fixIt: "be" },
          {
            say: "Is this your car? Can't you see my gate?",
            good: false,
            skill: "polite",
            react: { en: "Oh! Please don't get angry. I'm sorry.", te: "అయ్యో! కోపం తెచ్చుకోకండి. సారీ." },
          },
        ],
      },
      {
        partner: "Oh no! I'm so sorry. I didn't know.",
        te: "అయ్యో! సారీ అండీ. నాకు తెలియలేదు.",
        hint: { en: "Say it is okay, and ask her to move it.", te: "పర్లేదని చెప్పి, కారు తీయమని అడగండి." },
        replies: [
          { say: "It's okay. Could you move it, please?", good: true, skill: "problem" },
          { say: "It's okay. Could you remove it, please?", good: false, skill: "problem", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Of course. I'll move it right now.",
        te: "తప్పకుండా. ఇప్పుడే తీసేస్తాను.",
        hint: { en: "Thank her, and tell her where there is space to park.", te: "థాంక్స్ చెప్పి, కారు ఎక్కడ పెట్టొచ్చో చెప్పండి." },
        replies: [
          { say: "Thank you. There is parking space near the temple.", good: true, skill: "polite" },
          { say: "Thank you. There is parking space near temple.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "Thank you. Sorry again for the trouble.",
        te: "థాంక్యూ. ఇబ్బంది పెట్టినందుకు మళ్ళీ సారీ.",
        hint: { en: "Say it is no problem, and end kindly.", te: "పర్లేదని చెప్పి, ఆప్యాయంగా ముగించండి." },
        replies: [
          { say: "No problem at all. Have a nice day.", good: true, skill: "polite" },
          {
            say: "Okay. Don't do it again.",
            good: false,
            skill: "polite",
            react: { en: "Okay. But I said sorry already.", te: "సరే. కానీ సారీ చెప్పాను కదా." },
          },
        ],
      },
    ],
  },
};
