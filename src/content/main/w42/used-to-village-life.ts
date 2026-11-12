import type { Lesson } from "../../types";

/** Week 42, Day 1 (CURRICULUM §5): used to + verb for past habits and states — life in the village long ago. */
export const day: Lesson = {
  id: "used-to-village-life",
  kind: "lesson",
  title: { en: "We Used to Live in a Village", te: "ఒకప్పుడు ఊర్లో ఉండేవాళ్ళం" },
  subtitle: "used to + verb",
  summary: {
    en: "Learn to talk about life long ago with used to: We used to fetch water from the well every morning.",
    te: "ఒకప్పటి జీవితం గురించి used to తో చెప్పడం నేర్చుకుందాం: We used to fetch water from the well every morning.",
  },
  seo: {
    title: "Used To in English for Telugu Speakers",
    description:
      "Say We used to live in a village and We used to fetch water from the well. Simple lessons for Telugu speakers on life long ago.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "used to fetch", role: "action" },
    { text: "water from the well", role: "what" },
    { text: "every morning", role: "when" },
  ],
  core: [
    { en: "We used to live in a village.", te: "మేము ఒకప్పుడు ఒక పల్లెటూర్లో ఉండేవాళ్ళం.", extra: ["living"] },
    { en: "We used to fetch water from the well every morning.", te: "మేము రోజూ పొద్దున బావి నుంచి నీళ్ళు తెచ్చుకునేవాళ్ళం.", extra: ["fetching"] },
    { en: "We used to have two cows.", te: "మాకు రెండు ఆవులు ఉండేవి.", extra: ["cow"] },
    { en: "My father used to grow rice.", te: "మా నాన్నగారు వరి పండించేవారు.", extra: ["grows"] },
    { en: "There used to be a well near our house.", te: "మా ఇంటి దగ్గర ఒక బావి ఉండేది.", extra: ["was"] },
    { en: "We grew up in a village near Ongole.", te: "మేము ఒంగోలు దగ్గర ఒక పల్లెటూర్లో పెరిగాం.", extra: ["grow"] },
    { en: "Every evening, we used to sit outside and talk.", te: "రోజూ సాయంత్రం మేము బయట కూర్చుని కబుర్లు చెప్పుకునేవాళ్ళం.", extra: ["sitting"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell a friend or neighbour one thing you used to do as a child: I used to …",
    te: "మీరు చిన్నప్పుడు చేసే ఒక పని ఈ రోజు ఎవరైనా స్నేహితులకి గానీ పక్కింటివారికి గానీ చెప్పండి: I used to …",
  },
  words: [
    { en: "used to", te: "ఒకప్పుడు …ఏవాళ్ళం (ఇప్పుడు కాదు)" },
    { en: "village", te: "ఊరు, పల్లెటూరు" },
    { en: "well", te: "బావి" },
    { en: "fetch", te: "వెళ్ళి తెచ్చుకోవడం" },
    { en: "grow up", te: "పెరగడం, పెరిగి పెద్దవడం" },
  ],
  grammar: ["used-to-would", "past-simple", "was-were"],
  topics: ["home", "people", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "used to: life long ago", te: "used to: ఒకప్పటి జీవితం" },
      body: {
        en: "For habits long ago that have stopped now, say used to and the plain verb: We used to live in a village.",
        te: "ఒకప్పుడు అలవాటుగా చేసి, ఇప్పుడు చేయని పనులకి used to + verb వాడండి. తెలుగులో 'ఉండేవాళ్ళం, తెచ్చుకునేవాళ్ళం' అనే మాటే used to.",
      },
      bridge: {
        te: ["మేము", "రోజూ పొద్దున", "బావి నుంచి నీళ్ళు", "తెచ్చుకునేవాళ్ళం"],
        en: [
          { text: "We", role: "who" },
          { text: "used to fetch", role: "action" },
          { text: "water from the well", role: "what" },
          { text: "every morning", role: "when" },
        ],
      },
      examples: [
        { en: "We used to live in a village.", te: "మేము ఒకప్పుడు ఒక పల్లెటూర్లో ఉండేవాళ్ళం." },
        { en: "We used to fetch water from the well every morning.", te: "మేము రోజూ పొద్దున బావి నుంచి నీళ్ళు తెచ్చుకునేవాళ్ళం." },
        { en: "We used to have two cows.", te: "మాకు రెండు ఆవులు ఉండేవి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Three ways to use it", te: "used to మూడు రకాలుగా" },
      items: [
        {
          form: "used to + action",
          useFor: { en: "Something you did again and again long ago.", te: "ఒకప్పుడు మళ్ళీ మళ్ళీ చేసిన పని." },
          example: { en: "Every evening, we used to sit outside and talk.", te: "రోజూ సాయంత్రం మేము బయట కూర్చుని కబుర్లు చెప్పుకునేవాళ్ళం." },
        },
        {
          form: "used to have",
          useFor: { en: "Something you had long ago, but not now.", te: "ఒకప్పుడు ఉండి, ఇప్పుడు లేనిది." },
          example: { en: "My father used to grow rice.", te: "మా నాన్నగారు వరి పండించేవారు." },
        },
        {
          form: "There used to be …",
          useFor: { en: "Something that was in a place before.", te: "ఒకప్పుడు ఒక చోట ఉండేది." },
          example: { en: "There used to be a well near our house.", te: "మా ఇంటి దగ్గర ఒక బావి ఉండేది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I was going to the temple daily.",
      right: "I used to go to the temple every day.",
      why: {
        en: "A habit long ago takes used to, not -ing; Telugu వెళ్ళేవాళ్ళం is used to.",
        te: "చాలా కాలం ఉన్న అలవాటుకి -ing కాదు, used to వాడాలి; 'వెళ్ళేవాళ్ళం' అంటే used to go.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "We used to went to the fields.",
      right: "We used to go to the fields.",
      why: {
        en: "After used to, the verb stays plain: go, not went or going.",
        te: "used to తర్వాత verb మారదు: went కాదు, going కాదు, go.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Tell a new friend that you lived in a village long ago, but not now.",
        te: "ఒకప్పుడు మీరు పల్లెటూర్లో ఉండేవారని, ఇప్పుడు కాదని కొత్త స్నేహితులకి చెప్పండి.",
      },
      options: ["I used to live in a village.", "Before I am living in a village.", "I used to living in a village."],
      answer: 0,
      why: {
        en: "For life long ago that has changed, say used to with the plain verb.",
        te: "ఒకప్పుడు ఉండి ఇప్పుడు మారిపోయిన జీవితానికి used to + verb (మారకుండా) వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "We used to fetch water ___ the well.",
      te: "మేము బావి నుంచి నీళ్ళు తెచ్చుకునేవాళ్ళం.",
      options: ["from", "in", "on"],
      answer: 0,
      why: {
        en: "The water comes out of the well, so English says from; Telugu నుంచి is from.",
        te: "నీళ్ళు బావిలోంచి బయటికి వస్తాయి, అందుకే from; 'నుంచి' అంటే from.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "A friend asks about animals at your old home. You had two cows. What do you say?",
        te: "మీ పాత ఇంట్లో జంతువులు ఉండేవా అని స్నేహితులు అడిగారు. మీకు రెండు ఆవులు ఉండేవి. ఏమంటారు?",
      },
      options: ["We used to have two cows.", "We used to have two cow.", "We used to had two cows."],
      answer: 0,
      why: {
        en: "After two, the animal takes s; Telugu changes the end too, ఆవు to ఆవులు.",
        te: "రెండు తర్వాత s కావాలి; తెలుగులోనూ ఆవు కాదు, ఆవులు అంటాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "My father used to grows rice and cotton.",
      wrongIndex: 4,
      fix: "My father used to grow rice and cotton.",
      why: {
        en: "After used to, the verb takes no s, even for he or she.",
        te: "used to తర్వాత verb కి s రాదు, he, she అయినా సరే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A new friend asks: Where did you grow up? You grew up in a village. Answer.",
        te: "'మీరు ఎక్కడ పెరిగారు?' అని కొత్త స్నేహితులు అడిగారు. మీరు ఒక పల్లెటూర్లో పెరిగారు. జవాబు చెప్పండి.",
      },
      expected: ["I grew up in a village.", "I grew up in a small village.", "I used to live in a village.", "We used to live in a village."],
      options: ["I grew up in a village.", "I grew up in village.", "I am growing up in a village."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell a friend that long ago, you got water from the well every morning.",
        te: "ఒకప్పుడు రోజూ పొద్దున బావి నుంచి నీళ్ళు తెచ్చుకునేవారని స్నేహితులకి చెప్పండి.",
      },
      expected: [
        "I used to fetch water from the well every morning.",
        "We used to fetch water from the well every morning.",
        "We used to fetch water from the well.",
      ],
      options: [
        "I used to fetch water from the well every morning.",
        "I was fetching water from the well daily.",
        "Every morning I am fetching water from the well.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new friend at the park", te: "పార్క్‌లో కొత్త స్నేహితుడు" },
    scene: {
      en: "On your morning walk in the park, you meet Gopal. He has just moved to your colony.",
      te: "పార్క్‌లో పొద్దుటి నడకలో మీకు గోపాల్ గారు కలిశారు. ఆయన ఈ మధ్యే మీ కాలనీకి వచ్చారు.",
    },
    partner: { en: "Gopal (a new neighbour)", te: "గోపాల్ (కొత్త పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "past", label: { en: "Talking about long ago", te: "ఒకప్పటి సంగతులు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I'm Gopal. I've just moved to this colony.",
        te: "నమస్కారం! నేను గోపాల్. ఈ మధ్యే ఈ కాలనీకి వచ్చాను.",
        hint: { en: "Greet him, say your name and welcome him.", te: "నమస్కారం చెప్పి, మీ పేరు చెప్పి, ఆయనకి స్వాగతం చెప్పండి." },
        replies: [
          { say: "Good morning! I'm Kiran. Welcome to our colony.", good: true, skill: "polite" },
          { say: "Myself Kiran. Welcome to our colony.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Thank you! Did you grow up here in Hyderabad?",
        te: "థాంక్యూ! మీరు ఇక్కడ హైదరాబాద్‌లోనే పెరిగారా?",
        hint: { en: "Say no, and tell him about the village near Ongole.", te: "లేదని చెప్పి, ఒంగోలు దగ్గర ఉన్న ఊరి గురించి చెప్పండి." },
        replies: [
          { say: "No, I grew up in a small village near Ongole.", good: true, skill: "past" },
          { say: "No. I used to live in a village near Ongole.", good: true, skill: "past" },
          { say: "No, I grew up in small village near Ongole.", good: false, skill: "past", fixIt: "article" },
        ],
      },
      {
        partner: "How nice! What was life like in the village?",
        te: "ఎంత బాగుంది! ఊర్లో జీవితం ఎలా ఉండేది?",
        hint: { en: "Tell him about getting water from the well each morning.", te: "రోజూ పొద్దున బావి నుంచి నీళ్ళు తెచ్చుకోవడం గురించి చెప్పండి." },
        replies: [
          { say: "We used to fetch water from the well every morning.", good: true, skill: "past" },
          { say: "We were fetching water from the well daily.", good: false, skill: "past", fixIt: "state-ing" },
        ],
      },
      {
        partner: "I grew up in a village too. I really miss those days.",
        te: "నేను కూడా పల్లెటూర్లోనే పెరిగాను. ఆ రోజులు చాలా గుర్తొస్తాయి.",
        hint: { en: "Agree kindly, and suggest walking together tomorrow.", te: "మర్యాదగా ఒప్పుకుని, రేపు కలిసి నడుద్దామని చెప్పండి." },
        replies: [
          { say: "Me too. Let's walk together tomorrow morning.", good: true, skill: "polite" },
          { say: "Me too! Shall we walk together tomorrow?", good: true, skill: "polite" },
          {
            say: "Villages are boring. City life is much better.",
            good: false,
            skill: "polite",
            react: { en: "Oh! But I loved my village life.", te: "అయ్యో! నాకు మా ఊరి జీవితం చాలా ఇష్టం." },
          },
        ],
      },
    ],
  },
};
