import type { Lesson } from "../../types";

/** Week 18, Day 2 (CURRICULUM §4): past simple for what happened (fell, slipped, fainted), and injuries now (is bleeding, can't stand up). */
export const day: Lesson = {
  id: "he-fell-down",
  kind: "lesson",
  title: { en: "He Fell Down", te: "కింద పడిపోయారు" },
  subtitle: "fell, slipped, fainted",
  summary: {
    en: "Learn to say what happened, He fell down the stairs, and how the person is now, His leg is bleeding.",
    te: "ఏం జరిగిందో చెప్పడం (He fell down the stairs), ఆ మనిషి ఇప్పుడు ఎలా ఉన్నారో చెప్పడం (His leg is bleeding) నేర్చుకుందాం.",
  },
  seo: {
    title: "Saying What Happened in English for Telugu Speakers",
    description:
      "Say He fell down the stairs, His leg is bleeding and He can't stand up. Simple lessons for Telugu speakers on telling what happened.",
  },
  pattern: [
    { text: "He", role: "who" },
    { text: "fell down", role: "action" },
    { text: "the stairs", role: "what" },
    { text: "this morning", role: "when" },
  ],
  core: [
    { en: "He fell down the stairs.", te: "ఆయన మెట్ల మీద నుంచి కింద పడిపోయారు.", extra: ["fall"] },
    { en: "She slipped in the bathroom.", te: "ఆవిడ బాత్‌రూంలో జారి పడ్డారు.", extra: ["slip"] },
    { en: "His leg is bleeding.", te: "ఆయన కాలికి రక్తం కారుతోంది.", extra: ["He"] },
    { en: "He can't stand up.", te: "ఆయన లేచి నిలబడలేకపోతున్నారు.", extra: ["not"] },
    { en: "She fainted in the hot sun.", te: "ఎండ వేడికి ఆవిడ కళ్ళు తిరిగి పడిపోయారు.", extra: ["faint"] },
    { en: "I think his arm is broken.", te: "ఆయన చెయ్యి విరిగిందని అనుకుంటున్నాను.", extra: ["break"] },
    { en: "He hit his head on the wall.", te: "ఆయన తల గోడకి తగిలింది.", extra: ["hitted"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud one thing that happened to you or a friend, with fell, slipped or hit.",
    te: "మీకు గానీ మీ స్నేహితులు ఎవరికైనా గానీ జరిగిన ఒక సంఘటనను fell, slipped లేదా hit తో పైకి చెప్పండి.",
  },
  words: [
    { en: "bleeding", te: "రక్తం కారడం" },
    { en: "stairs", te: "మెట్లు" },
    { en: "slipped", te: "జారి పడ్డారు (slip గతం)" },
    { en: "fainted", te: "కళ్ళు తిరిగి పడిపోయారు (faint గతం)" },
    { en: "stand up", te: "లేచి నిలబడటం" },
  ],
  grammar: ["past-simple", "present-continuous", "can-could"],
  topics: ["health", "home", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying what happened", te: "ఏం జరిగిందో చెప్పడం" },
      body: {
        en: "For what happened, use the past: fell, slipped, hit. For what is happening now, use is and -ing: His leg is bleeding.",
        te: "జరిగిపోయినది చెప్పడానికి past వాడండి: fell, slipped, hit. ఇప్పుడు జరుగుతున్నది చెప్పడానికి is, -ing: His leg is bleeding.",
      },
      bridge: {
        te: ["ఆయన", "మెట్ల మీద నుంచి", "కింద పడిపోయారు"],
        en: [
          { text: "He", role: "who" },
          { text: "fell down", role: "action" },
          { text: "the stairs", role: "what" },
        ],
      },
      examples: [
        { en: "He fell down the stairs.", te: "ఆయన మెట్ల మీద నుంచి కింద పడిపోయారు." },
        { en: "He hit his head on the wall.", te: "ఆయన తల గోడకి తగిలింది." },
        { en: "I think his arm is broken.", te: "ఆయన చెయ్యి విరిగిందని అనుకుంటున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Then, now, or can't?", te: "అప్పుడు, ఇప్పుడు, చేయలేనిది" },
      items: [
        {
          form: "fell / slipped / fainted",
          useFor: { en: "What happened a little before.", te: "కొంచెం ముందు జరిగిపోయినది." },
          example: { en: "He slipped on the wet floor.", te: "ఆయన తడి నేల మీద జారి పడ్డారు." },
        },
        {
          form: "is bleeding / is shaking",
          useFor: { en: "What is happening now.", te: "ఇప్పుడు జరుగుతున్నది." },
          example: { en: "His nose is bleeding.", te: "ఆయన ముక్కు నుంచి రక్తం కారుతోంది." },
        },
        {
          form: "can't + verb",
          useFor: { en: "What the person can't do now.", te: "ఆ మనిషి ఇప్పుడు చేయలేనిది." },
          example: { en: "She can't move her leg.", te: "ఆవిడ కాలు కదపలేకపోతున్నారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "His leg bleeding.",
      right: "His leg is bleeding.",
      why: {
        en: "Telugu needs no is here, but English needs is before an -ing verb.",
        te: "తెలుగులో is లాంటి పదం అక్కర్లేదు; ఇంగ్లీష్‌లో -ing verb ముందు is తప్పకుండా రావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "He was fell down.",
      right: "He fell down.",
      why: {
        en: "For what happened, fell alone is enough; do not add was before it.",
        te: "జరిగిపోయినది చెప్పడానికి fell ఒక్కటే చాలు; ముందు was అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Your neighbour fell this morning. Tell the ambulance staff.", te: "మీ పక్కింటాయన ఈ రోజు ఉదయం పడిపోయారు. అంబులెన్స్ వాళ్ళకి చెప్పండి." },
      options: ["He fell down this morning.", "He falled down this morning.", "He is fall down this morning."],
      answer: 0,
      why: {
        en: "Fall has a special past form, and it never takes -ed.",
        te: "fall కి past ప్రత్యేకంగా ఉంటుంది: fell. దానికి -ed రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "be",
      sentence: "His leg ___ bleeding.",
      te: "ఆయన కాలికి రక్తం కారుతోంది.",
      options: ["is", "are", "has"],
      answer: 0,
      why: {
        en: "Leg is one thing, and an -ing verb needs is before it.",
        te: "leg ఒక్కటే; -ing verb ముందు is రావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The nurse says: She fainted. What does it mean?", te: "నర్స్ She fainted అన్నారు. అంటే ఏంటి?" },
      options: ["She felt dizzy and fell.", "She slipped on water.", "She hit her head."],
      answer: 0,
      why: {
        en: "Fainted means a person suddenly falls, often after feeling dizzy.",
        te: "fainted అంటే కళ్ళు తిరిగి ఒక్కసారిగా పడిపోవడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He hitted his head on the wall.",
      wrongIndex: 1,
      fix: "He hit his head on the wall.",
      why: {
        en: "Hit stays the same in the past, so never add -ed.",
        te: "hit కి past లో కూడా hit యే; -ed చేర్చకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour Kamala slipped in the bathroom. Tell the doctor.",
        te: "మీ పక్కింటి కమల గారు బాత్‌రూంలో జారి పడ్డారు. డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["She slipped in the bathroom.", "Kamala slipped in the bathroom."],
      options: ["She slipped in the bathroom.", "She is slip in the bathroom.", "She slipping in the bathroom."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The man can't get up from the floor. Tell the ambulance staff.",
        te: "ఆయన నేల మీద నుంచి లేవలేకపోతున్నారు. అంబులెన్స్ వాళ్ళకి చెప్పండి.",
      },
      expected: ["He can't stand up.", "He cannot stand up.", "He can't get up."],
      options: ["He can't stand up.", "He can't standing up.", "He not able stand up."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "When the ambulance comes", te: "అంబులెన్స్ వచ్చినప్పుడు" },
    scene: {
      en: "Your neighbour, Narayana, fell down the stairs. The ambulance is here. Imran asks you what happened.",
      te: "మీ పక్కింటి నారాయణ గారు మెట్ల మీద నుంచి పడిపోయారు. అంబులెన్స్ వచ్చింది. ఏం జరిగిందని ఇమ్రాన్ అడుగుతున్నారు.",
    },
    partner: { en: "Imran (ambulance staff)", te: "ఇమ్రాన్ (అంబులెన్స్ సిబ్బంది)" },
    voice: "b",
    skills: [
      { id: "past", label: { en: "What happened", te: "ఏం జరిగిందో" } },
      { id: "now", label: { en: "How he is now", te: "ఇప్పుడు ఎలా ఉన్నారో" } },
    ],
    turns: [
      {
        partner: "Hello, I'm Imran. What happened to him?",
        te: "నమస్కారం, నేను ఇమ్రాన్. ఆయనకి ఏం జరిగింది?",
        hint: { en: "Tell him how your neighbour fell.", te: "మీ పక్కింటాయన ఎలా పడిపోయారో చెప్పండి." },
        replies: [
          { say: "He fell down the stairs.", good: true, skill: "past" },
          { say: "He falled down the stairs.", good: false, skill: "past" },
          {
            say: "Can't you see? Just take him!",
            good: false,
            skill: "past",
            react: { en: "Yes, we will. First I need to know what happened.", te: "తీసుకెళ్తామండీ. ముందు ఏం జరిగిందో నాకు తెలియాలి." },
          },
        ],
      },
      {
        partner: "When did he fall?",
        te: "ఆయన ఎప్పుడు పడిపోయారు?",
        hint: { en: "Say how long ago it happened.", te: "ఎంత సేపటి క్రితం జరిగిందో చెప్పండి." },
        replies: [
          { say: "About half an hour ago.", good: true, skill: "past" },
          { say: "Before half an hour.", good: false, skill: "past", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Is he hurt anywhere?",
        te: "ఆయనకి ఎక్కడైనా దెబ్బ తగిలిందా?",
        hint: { en: "Say where he is bleeding, and what he can't do.", te: "ఎక్కడ రక్తం కారుతోందో, ఆయన ఏం చేయలేకపోతున్నారో చెప్పండి." },
        replies: [
          { say: "His leg is bleeding. He can't stand up.", good: true, skill: "now" },
          { say: "His leg bleeding. He can't stand up.", good: false, skill: "now", fixIt: "be" },
        ],
      },
      {
        partner: "Okay. We are taking him to the government hospital.",
        te: "సరే. ఆయన్ని గవర్నమెంట్ హాస్పిటల్‌కి తీసుకెళ్తున్నాం.",
        hint: { en: "Say you will come with him, and thank him.", te: "మీరు కూడా ఆయనతో వస్తానని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay. I'll come with him. Thank you.", good: true },
          { say: "Okay. I'll coming with him. Thank you.", good: false },
        ],
      },
    ],
  },
};
