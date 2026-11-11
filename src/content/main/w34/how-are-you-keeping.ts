import type { Lesson } from "../../types";

/** Week 34, Day 2 (CURRICULUM §4): asking about health and news — How are you keeping? Much better. Not bad. */
export const day: Lesson = {
  id: "how-are-you-keeping",
  kind: "lesson",
  title: { en: "How Are You Keeping?", te: "ఆరోగ్యం ఎలా ఉంది?" },
  subtitle: "much better, not bad",
  summary: {
    en: "Learn to ask about someone's health and to answer: How are you keeping? Much better, thank you.",
    te: "ఆరోగ్యం గురించి అడగడం, జవాబు చెప్పడం నేర్చుకుందాం: How are you keeping? Much better, thank you.",
  },
  seo: {
    title: "Asking About Health in English for Telugu Speakers",
    description:
      "Ask How are you keeping? and answer Much better, thank you or Not bad. Simple lessons for Telugu speakers on friendly health talk.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "much better", role: "what" },
    { text: "now", role: "when" },
  ],
  core: [
    { en: "How are you keeping?", te: "మీ ఆరోగ్యం ఎలా ఉంది?", extra: ["is"] },
    { en: "Much better now, thank you.", te: "ఇప్పుడు చాలా నయం, థాంక్యూ.", extra: ["more"] },
    { en: "Not bad. And you?", te: "పర్వాలేదు. మీరు ఎలా ఉన్నారు?", extra: ["also"] },
    { en: "How is your knee now?", te: "ఇప్పుడు మీ మోకాలు ఎలా ఉంది?", extra: ["are"] },
    { en: "I was not well last week.", te: "పోయిన వారం నాకు ఒంట్లో బాగాలేదు.", extra: ["am"] },
    { en: "Has your father recovered from the fever?", te: "మీ నాన్నగారు జ్వరం నుండి కోలుకున్నారా?", extra: ["Have"] },
    { en: "As usual. Nothing to worry about.", te: "మామూలుగానే ఉన్నాను. కంగారు పడాల్సిందేమీ లేదు.", extra: ["worrying"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Call or meet someone you know today and ask: How are you keeping?",
    te: "ఈ రోజు తెలిసిన ఒకరికి ఫోన్ చేసి గానీ, కలిసి గానీ అడగండి: How are you keeping?",
  },
  words: [
    { en: "How are you keeping?", te: "ఆరోగ్యం ఎలా ఉంది?" },
    { en: "much better", te: "చాలా నయం" },
    { en: "not bad", te: "పర్వాలేదు" },
    { en: "recovered", te: "కోలుకున్నారు" },
    { en: "as usual", te: "మామూలుగానే, ఎప్పటిలాగే" },
  ],
  grammar: ["am-is-are", "present-perfect", "question-words"],
  topics: ["health", "people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking about health", te: "ఆరోగ్యం గురించి అడగడం" },
      body: {
        en: "When you meet someone you know, ask How are you keeping? It means How is your health these days? Answer Much better or Not bad, then ask back: And you?",
        te: "తెలిసినవారు కలిస్తే How are you keeping? అని అడగండి; అంటే 'ఈ మధ్య ఆరోగ్యం ఎలా ఉంది?' అని. Much better, Not bad అని జవాబు చెప్పి, తిరిగి అడగండి: And you?",
      },
      bridge: {
        te: ["నేను", "ఇప్పుడు", "చాలా నయం"],
        en: [
          { text: "I'm", role: "who" },
          { text: "much better", role: "what" },
          { text: "now", role: "when" },
        ],
      },
      examples: [
        { en: "How are you keeping?", te: "మీ ఆరోగ్యం ఎలా ఉంది?" },
        { en: "Much better now, thank you.", te: "ఇప్పుడు చాలా నయం, థాంక్యూ." },
        { en: "Not bad. And you?", te: "పర్వాలేదు. మీరు ఎలా ఉన్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How do you feel?", te: "ఎలా ఉన్నారు?" },
      items: [
        {
          form: "Much better",
          useFor: { en: "You were sick, and now you are well.", te: "ఒంట్లో బాగాలేదు, ఇప్పుడు బాగున్నారు." },
          example: { en: "Much better now, thank you.", te: "ఇప్పుడు చాలా నయం, థాంక్యూ." },
        },
        {
          form: "Not bad",
          useFor: { en: "You are okay.", te: "బాగానే ఉన్నారు, పర్వాలేదు." },
          example: { en: "Not bad. And you?", te: "పర్వాలేదు. మీరు ఎలా ఉన్నారు?" },
        },
        {
          form: "As usual",
          useFor: { en: "Nothing new; the same as always.", te: "కొత్తగా ఏమీ లేదు; ఎప్పటిలాగే." },
          example: { en: "As usual. Nothing to worry about.", te: "మామూలుగానే ఉన్నాను. కంగారు పడాల్సిందేమీ లేదు." },
        },
        {
          form: "I was not well",
          useFor: { en: "You were sick some days ago.", te: "కొన్ని రోజుల క్రితం ఒంట్లో బాగాలేదు." },
          example: { en: "I was not well last week.", te: "పోయిన వారం నాకు ఒంట్లో బాగాలేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "My father walk every day now.",
      right: "My father walks every day now.",
      why: {
        en: "One person, like he, she or my father, takes s on the verb. Telugu shows respect with -ారు instead.",
        te: "ఒక్కరి గురించి (he, she, my father) చెప్తే verb కి s చేర్చాలి. తెలుగులో గౌరవానికి -ారు చేరుస్తాం, ఇంగ్లీష్‌లో s.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Nothing to worry.",
      right: "Nothing to worry about.",
      why: {
        en: "Worry needs about after it; Telugu కంగారు పడాల్సిందేమీ లేదు has no word for it, so it gets dropped.",
        te: "worry తర్వాత about రావాలి; తెలుగులో దానికి మాట లేదు కాబట్టి వదిలేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "You were sick last week. Now you are well. A friend asks how you are.",
        te: "పోయిన వారం ఒంట్లో బాగాలేదు. ఇప్పుడు బాగున్నారు. ఎలా ఉన్నారని స్నేహితులు అడిగారు.",
      },
      options: ["Much better now, thank you.", "More better now, thank you.", "Very better now, thank you."],
      answer: 0,
      why: {
        en: "Better already means more good, so add much, never more or very.",
        te: "better అంటేనే 'ఇంకా బాగా'; ముందు much వస్తుంది, more లేదా very రావు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "My aunt ___ every morning now.",
      te: "మా అత్తయ్యగారు ఇప్పుడు రోజూ ఉదయం నడుస్తారు.",
      options: ["walks", "walk", "walking"],
      answer: 0,
      why: {
        en: "My aunt is one person, like she, so the verb takes s.",
        te: "మా అత్తయ్య ఒక్కరే (she లాగా), అందుకే verb కి s.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your friend about her knee.", te: "మీ స్నేహితురాలిని ఆవిడ మోకాలు ఎలా ఉందో అడగండి." },
      options: ["How is your knee now?", "How your knee is now?", "Your knee is how now?"],
      answer: 0,
      why: {
        en: "In an English question, is comes before the thing, not at the end like Telugu ఉంది.",
        te: "ఇంగ్లీష్ ప్రశ్నలో is ముందు వస్తుంది; తెలుగులో లాగా 'ఉంది' చివర కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I am not well last week.",
      wrongIndex: 1,
      fix: "I was not well last week.",
      why: {
        en: "Last week is in the past, so am changes to was.",
        te: "last week అంటే గడిచిపోయిన కాలం, అందుకే am కాదు was.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour asks how you are. You were ill, but now you are well.",
        te: "పక్కింటివారు ఎలా ఉన్నారని అడిగారు. ఒంట్లో బాగాలేదు, ఇప్పుడు బాగున్నారు.",
      },
      expected: ["Much better now, thank you.", "Much better, thank you.", "I'm much better now, thank you."],
      options: ["Much better now, thank you.", "More better now, thank you.", "I am well last week."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You meet an old friend. Ask about his health.",
        te: "పాత స్నేహితుడు కలిశారు. ఆయన ఆరోగ్యం గురించి అడగండి.",
      },
      expected: ["How are you keeping?", "How is your health?", "How are you?"],
      options: ["How are you keeping?", "How you are keeping?", "Your health is how?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the temple", te: "గుడిలో" },
    scene: {
      en: "At the temple you meet Sarala, your old neighbour. You have not seen her for months.",
      te: "గుడిలో మీ పాత పక్కింటావిడ సరళ గారు కలిశారు. ఆవిడని చూసి నెలలు అయింది.",
    },
    partner: { en: "Sarala (old neighbour)", te: "సరళ (పాత పక్కింటావిడ)" },
    skills: [
      { id: "health", label: { en: "Health talk", te: "ఆరోగ్యం మాటలు" } },
      { id: "kind", label: { en: "Being kind", te: "ఆప్యాయంగా" } },
    ],
    turns: [
      {
        partner: "Oh, hello! So nice to see you here!",
        te: "అరే, నమస్కారం! మిమ్మల్ని ఇక్కడ చూడటం చాలా సంతోషం!",
        hint: { en: "Say it is nice to see her too, and ask about her health.", te: "మీకూ సంతోషమే అని, ఆవిడ ఆరోగ్యం గురించి అడగండి." },
        replies: [
          { say: "Nice to see you too! How are you keeping?", good: true, skill: "health" },
          { say: "Nice to see you too! How you are keeping?", good: false, skill: "health", fixIt: "question" },
        ],
      },
      {
        partner: "Not bad. My knee hurts a little.",
        te: "పర్వాలేదు. మోకాలు కొంచెం నొప్పిగా ఉంది.",
        hint: { en: "Say you are sorry to hear it, and ask her to take care.", te: "విని బాధగా ఉందని, జాగ్రత్తగా ఉండమని చెప్పండి." },
        replies: [
          { say: "Oh, sorry to hear that. Please take care.", good: true, skill: "kind" },
          {
            say: "Old age. What can we do?",
            good: false,
            skill: "kind",
            react: { en: "Old? I still walk two kilometres every day!", te: "ముసలితనమా? నేను ఇప్పటికీ రోజూ రెండు కిలోమీటర్లు నడుస్తాను!" },
          },
        ],
      },
      {
        partner: "Thank you. I heard you were not well.",
        te: "థాంక్యూ. మీకు ఒంట్లో బాగాలేదని విన్నాను.",
        hint: { en: "Say you were sick last week, but you are well now.", te: "పోయిన వారం బాగాలేదని, ఇప్పుడు బాగున్నానని చెప్పండి." },
        replies: [
          { say: "Yes, I was not well. Now I'm much better.", good: true, skill: "health" },
          { say: "Yes, I am not well last week. Now better.", good: false, skill: "health" },
        ],
      },
      {
        partner: "Good, good. Say hello to everyone at home.",
        te: "మంచిది, మంచిది. ఇంట్లో అందరికీ నా నమస్కారం చెప్పండి.",
        hint: { en: "Say you will, and say goodbye kindly.", te: "తప్పకుండా అని, ఆప్యాయంగా వీడ్కోలు చెప్పండి." },
        replies: [
          { say: "Sure, I will. Take care!", good: true, skill: "kind" },
          { say: "Sure, I will tell to them. Take care!", good: false, skill: "kind", fixIt: "preposition" },
        ],
      },
    ],
  },
};
