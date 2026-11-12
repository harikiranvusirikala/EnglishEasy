import type { Lesson } from "../../types";

/** Week 41, Day 1 (CURRICULUM §5): sequence words in the past — First I locked the door, then I walked to the bus stand. */
export const day: Lesson = {
  id: "first-then-story-steps",
  kind: "lesson",
  title: { en: "First, Then, After That", te: "ముందు, తర్వాత" },
  subtitle: "First … then … after that …",
  summary: {
    en: "Learn to tell what you did, step by step: First I locked the door, then I walked to the bus stand.",
    te: "మీరు చేసిన పనులు ఒక్కొక్కటిగా, వరుసగా చెప్పడం నేర్చుకుందాం: First I locked the door, then I walked to the bus stand.",
  },
  seo: {
    title: "Telling Events in Order in English for Telugu Speakers",
    description:
      "Say First I locked the door, then I walked to the bus stand. Simple lessons for Telugu speakers on telling a story in order.",
  },
  pattern: [
    { text: "First", role: "when" },
    { text: "I", role: "who" },
    { text: "locked", role: "action" },
    { text: "the door", role: "what" },
  ],
  core: [
    { en: "First I locked the door.", te: "ముందు తలుపుకి తాళం వేశాను.", extra: ["lock"] },
    { en: "Then I walked to the bus stand.", te: "తర్వాత బస్ స్టాండ్‌కి నడిచి వెళ్ళాను.", extra: ["walk"] },
    { en: "After that, I bought a ticket and found a seat.", te: "ఆ తర్వాత టికెట్ కొని, ఒక సీటు చూసుకున్నాను.", extra: ["buy"] },
    { en: "Finally, I reached Guntur at ten.", te: "చివరికి పది గంటలకి గుంటూరు చేరుకున్నాను.", extra: ["to"] },
    { en: "We set off early in the morning.", te: "మేము పొద్దున్నే బయలుదేరాం." },
    { en: "On the way, we stopped for tea.", te: "దారిలో టీ కోసం ఆగాం." },
    { en: "How was your trip to Guntur?", te: "మీ గుంటూరు ప్రయాణం ఎలా జరిగింది?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone three things you did this morning, with First, Then and After that.",
    te: "ఈ రోజు పొద్దున మీరు చేసిన మూడు పనుల్ని First, Then, After that వాడి ఎవరికైనా చెప్పండి.",
  },
  words: [
    { en: "first", te: "ముందు, మొదట" },
    { en: "then", te: "తర్వాత, అప్పుడు" },
    { en: "after that", te: "ఆ తర్వాత" },
    { en: "set off", te: "బయలుదేరడం" },
    { en: "on the way", te: "దారిలో" },
  ],
  grammar: ["past-simple", "connectors"],
  topics: ["travel", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Telling things in order", te: "జరిగినవి వరుసగా చెప్పడం" },
      body: {
        en: "To tell a story in order, start each step with First, Then, After that or Finally. The verbs stay in the past: locked, walked, bought.",
        te: "కథని వరుసగా చెప్పడానికి ప్రతి పని ముందు First, Then, After that, Finally వాడండి. verb లు past లోనే ఉంటాయి: locked, walked, bought.",
      },
      bridge: {
        te: ["ముందు", "తలుపుకి", "తాళం వేశాను"],
        en: [
          { text: "First", role: "when" },
          { text: "I", role: "who" },
          { text: "locked", role: "action" },
          { text: "the door", role: "what" },
        ],
      },
      examples: [
        { en: "First I locked the door.", te: "ముందు తలుపుకి తాళం వేశాను." },
        { en: "Then I walked to the bus stand.", te: "తర్వాత బస్ స్టాండ్‌కి నడిచి వెళ్ళాను." },
        { en: "After that, I bought a ticket and found a seat.", te: "ఆ తర్వాత టికెట్ కొని, ఒక సీటు చూసుకున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which step word?", te: "ఏ పదం ఎప్పుడు?" },
      items: [
        {
          form: "First …",
          useFor: { en: "The first thing you did.", te: "మొదట చేసిన పని." },
          example: { en: "First I had a bath.", te: "ముందు స్నానం చేశాను." },
        },
        {
          form: "Then … / After that …",
          useFor: { en: "The next things, one by one.", te: "తర్వాతి పనులు, ఒక్కొక్కటిగా." },
          example: { en: "After that, I called my cousin.", te: "ఆ తర్వాత మా కజిన్‌కి ఫోన్ చేశాను." },
        },
        {
          form: "Finally …",
          useFor: { en: "The last step of the story.", te: "కథలో చివరి పని." },
          example: { en: "Finally, I reached Guntur at ten.", te: "చివరికి పది గంటలకి గుంటూరు చేరుకున్నాను." },
        },
        {
          form: "On the way …",
          useFor: { en: "Something that happened during the journey.", te: "ప్రయాణం మధ్యలో జరిగినది." },
          example: { en: "On the way, we stopped for tea.", te: "దారిలో టీ కోసం ఆగాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Today morning I set off for Guntur.",
      right: "This morning I set off for Guntur.",
      why: {
        en: "English says this morning; today morning is Telugu ఈ రోజు పొద్దున said word for word.",
        te: "ఇంగ్లీష్‌లో this morning అంటారు; today morning అనేది 'ఈ రోజు పొద్దున' ని పదానికి పదం అనువదించడం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Then I walked to bus stand.",
      right: "Then I walked to the bus stand.",
      why: {
        en: "Places like the bus stand and the market take the; Telugu has no word like the.",
        te: "bus stand, market లాంటి చోట్ల ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend asks about your trip yesterday. Tell him the first thing you did.",
        te: "నిన్నటి ప్రయాణం గురించి స్నేహితుడు అడుగుతున్నారు. మీరు మొదట చేసిన పని చెప్పండి.",
      },
      options: ["First I locked the door.", "First I lock the door.", "First I was lock the door."],
      answer: 0,
      why: {
        en: "A story about yesterday needs the past form, so lock becomes locked.",
        te: "నిన్నటి కథ కాబట్టి verb past లో ఉండాలి: lock కాదు, locked.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "First I locked the door, ___ I walked to the bus stand.",
      te: "ముందు తలుపుకి తాళం వేశాను, తర్వాత బస్ స్టాండ్‌కి నడిచి వెళ్ళాను.",
      options: ["then", "after", "than"],
      answer: 0,
      why: {
        en: "Then gives the next step; after alone is not used this way, and than is only for comparing.",
        te: "తర్వాతి పనికి then; after ఒక్కటే ఇలా రాదు, than పోల్చడానికి మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Tell your friend what time you got to Guntur.", te: "గుంటూరు ఎన్ని గంటలకి చేరుకున్నారో స్నేహితులకి చెప్పండి." },
      options: ["Finally, I reached Guntur at ten.", "Finally, I reached to Guntur at ten.", "Finally, I reach Guntur at ten."],
      answer: 0,
      why: {
        en: "Reach needs no to after it; Telugu గుంటూరుకి makes people add to.",
        te: "reach తర్వాత to రాదు; 'గుంటూరుకి' లోని 'కి' వల్ల to చేర్చేస్తాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "After that, I bought ticket and found a seat.",
      wrongIndex: 4,
      fix: "After that, I bought a ticket and found a seat.",
      why: {
        en: "One ticket needs a before it, just like one seat; Telugu has no word like a.",
        te: "ఒక్క టికెట్ కాబట్టి ముందు a కావాలి, seat లాగే; తెలుగులో a లాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your neighbour asks what you did at the bus stand. Say you bought a ticket, then found a seat.",
        te: "బస్ స్టాండ్‌లో ఏం చేశారని పక్కింటివారు అడుగుతున్నారు. టికెట్ కొని, తర్వాత సీటు చూసుకున్నారని చెప్పండి.",
      },
      expected: [
        "First I bought a ticket, then I found a seat.",
        "I bought a ticket and found a seat.",
        "I bought a ticket, then I found a seat.",
      ],
      options: ["First I bought a ticket, then I found a seat.", "First I buy a ticket, then I find a seat.", "First I bought ticket, then I found seat."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend asks when you came back from Guntur. You came back yesterday, late at night.",
        te: "గుంటూరు నుంచి ఎప్పుడు తిరిగి వచ్చారని స్నేహితులు అడుగుతున్నారు. మీరు నిన్న రాత్రి వచ్చారు.",
      },
      expected: ["I came back last night.", "I came back from Guntur last night.", "Last night I came back."],
      options: ["I came back last night.", "I came back yesterday night.", "I come back last night."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "My trip to Guntur", te: "నా గుంటూరు ప్రయాణం" },
    scene: {
      en: "Your friend Prasad meets you at the tea stall. You went to Guntur yesterday.",
      te: "టీ కొట్టు దగ్గర మీ స్నేహితుడు ప్రసాద్ గారు కలిశారు. మీరు నిన్న గుంటూరు వెళ్ళొచ్చారు.",
    },
    partner: { en: "Prasad (your friend)", te: "ప్రసాద్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "order", label: { en: "Telling it in order", te: "వరుసగా చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! You went to Guntur yesterday, right? How was the trip?",
        te: "హలో! నిన్న గుంటూరు వెళ్ళారు కదా? ప్రయాణం ఎలా జరిగింది?",
        hint: { en: "Say it was good, and say when you started.", te: "బాగా జరిగిందని, ఎప్పుడు బయలుదేరారో చెప్పండి." },
        replies: [
          { say: "It was good. We set off early in the morning.", good: true, skill: "order" },
          { say: "It was good. We set off early in morning.", good: false, skill: "order", fixIt: "article" },
        ],
      },
      {
        partner: "So early! Did you go by bus?",
        te: "అంత పొద్దున్నేనా! బస్సులో వెళ్ళారా?",
        hint: { en: "Say yes, and tell him your first two steps at the bus stand.", te: "అవునని చెప్పి, బస్ స్టాండ్‌లో మొదట చేసిన రెండు పనులు చెప్పండి." },
        replies: [
          { say: "Yes. First I bought a ticket, then I found a seat.", good: true, skill: "order" },
          { say: "Yes. First I buy a ticket, then I find a seat.", good: false, skill: "order" },
        ],
      },
      {
        partner: "And what time did you reach Guntur?",
        te: "మరి గుంటూరు ఎన్ని గంటలకి చేరుకున్నారు?",
        hint: { en: "Say you had a tea break during the journey, and give the time you got there.", te: "ప్రయాణం మధ్యలో టీ కోసం ఆగారని, ఎన్ని గంటలకి చేరారో చెప్పండి." },
        replies: [
          { say: "We stopped for tea on the way, and reached at ten.", good: true, skill: "order" },
          { say: "We stopped for tea on the way, and reached to Guntur at ten.", good: false, skill: "order", fixIt: "preposition" },
          {
            say: "Why do you want to know all this?",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I was just curious.", te: "సారీ! ఊరికే తెలుసుకుందామని అడిగాను." },
          },
        ],
      },
      {
        partner: "Ten? Not bad at all. Come, let's have some tea now.",
        te: "పదింటికా? బాగానే చేరారు. రండి, ఇప్పుడు టీ తాగుదాం.",
        hint: { en: "Agree happily, and thank him.", te: "సంతోషంగా ఒప్పుకుని, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, thank you. That's kind of you.", good: true, skill: "polite" },
          { say: "Sure, thanks you. That's kind of you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
