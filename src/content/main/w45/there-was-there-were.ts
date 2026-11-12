import type { Lesson } from "../../types";

/** Week 45, Day 1 (CURRICULUM §5): there was / there were — how a place was long ago. */
export const day: Lesson = {
  id: "there-was-there-were",
  kind: "lesson",
  title: { en: "There Was, There Were", te: "ఉండేది, ఉండేవి" },
  subtitle: "There was … / There were …",
  summary: {
    en: "Learn to say how a place was long ago: There was a big pond in our village. There were no buses in those days.",
    te: "ఒకప్పుడు ఒక ఊరు ఎలా ఉండేదో చెప్పడం నేర్చుకుందాం: There was a big pond in our village. There were no buses in those days.",
  },
  seo: {
    title: "There Was and There Were in English for Telugu Speakers",
    description:
      "Say There was a big pond in our village and There were no buses in those days. Simple lessons for Telugu speakers on places long ago.",
  },
  pattern: [
    { text: "There was", role: "action" },
    { text: "a big pond", role: "who" },
    { text: "in our village", role: "what" },
  ],
  core: [
    { en: "There was a big pond in our village.", te: "మా ఊర్లో ఒక పెద్ద చెరువు ఉండేది.", extra: ["were"] },
    { en: "There were no buses in those days.", te: "ఆ రోజుల్లో బస్సులు లేవు.", extra: ["was"] },
    { en: "There was only one school.", te: "ఒకే ఒక్క బడి ఉండేది.", extra: ["were"] },
    { en: "Was there a hospital nearby?", te: "దగ్గర్లో ఆసుపత్రి ఉండేదా?", extra: ["Were"] },
    { en: "There were paddy fields all around the village.", te: "ఊరి చుట్టూ వరి పొలాలు ఉండేవి.", extra: ["was"] },
    { en: "There was no hospital, so people went to Guntur.", te: "ఆసుపత్రి లేదు, అందుకే జనం గుంటూరు వెళ్ళేవారు." },
    { en: "There were no streetlights, so the nights were very dark.", te: "వీధి దీపాలు లేవు, అందుకే రాత్రులు చాలా చీకటిగా ఉండేవి." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone one thing your town or village had long ago: There was …",
    te: "మీ ఊర్లో ఒకప్పుడు ఉండే ఒక దాని గురించి ఎవరికైనా చెప్పండి: There was …",
  },
  words: [
    { en: "pond", te: "చెరువు, కుంట" },
    { en: "in those days", te: "ఆ రోజుల్లో" },
    { en: "paddy field", te: "వరి పొలం" },
    { en: "streetlight", te: "వీధి దీపం, స్ట్రీట్ లైట్" },
    { en: "mud road", te: "మట్టి రోడ్డు" },
  ],
  grammar: ["there-is-are", "was-were", "articles"],
  topics: ["home", "people", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "There was, there were", te: "ఉండేది, ఉండేవి" },
      body: {
        en: "You know there is and there are. For the past, there is becomes there was, and there are becomes there were: There was a big pond.",
        te: "there is, there are మీకు తెలుసు. గతం గురించి అయితే there is → there was, there are → there were: There was a big pond.",
      },
      bridge: {
        te: ["మా ఊర్లో", "ఒక పెద్ద చెరువు", "ఉండేది"],
        en: [
          { text: "There was", role: "action" },
          { text: "a big pond", role: "who" },
          { text: "in our village", role: "what" },
        ],
      },
      examples: [
        { en: "There was a big pond in our village.", te: "మా ఊర్లో ఒక పెద్ద చెరువు ఉండేది." },
        { en: "There were no buses in those days.", te: "ఆ రోజుల్లో బస్సులు లేవు." },
        { en: "There was only one school.", te: "ఒకే ఒక్క బడి ఉండేది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Was or were?", te: "was ఆ, were ఆ?" },
      items: [
        {
          form: "There was a …",
          useFor: { en: "One thing in the past.", te: "గతంలో ఒక్కటి ఉంటే." },
          example: { en: "There was only one mud road to the next town.", te: "పక్క ఊరికి ఒకే ఒక మట్టి రోడ్డు ఉండేది." },
        },
        {
          form: "There were …",
          useFor: { en: "Two or more things in the past.", te: "గతంలో రెండు, అంతకంటే ఎక్కువ ఉంటే." },
          example: { en: "There were paddy fields all around the village.", te: "ఊరి చుట్టూ వరి పొలాలు ఉండేవి." },
        },
        {
          form: "There was no … / There were no …",
          useFor: { en: "Say something was not there.", te: "ఏదైనా లేదని చెప్పడానికి." },
          example: { en: "There were no streetlights, so the nights were very dark.", te: "వీధి దీపాలు లేవు, అందుకే రాత్రులు చాలా చీకటిగా ఉండేవి." },
        },
        {
          form: "Was there …? / Were there …?",
          useFor: { en: "Ask about a place long ago.", te: "ఒకప్పటి ఊరి గురించి అడగడానికి." },
          example: { en: "Was there a hospital nearby?", te: "దగ్గర్లో ఆసుపత్రి ఉండేదా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "There was big pond in our village.",
      right: "There was a big pond in our village.",
      why: {
        en: "One thing needs a before it, even with big in front; Telugu has no word like a.",
        te: "ఒక్కటే అయితే, ముందు big ఉన్నా a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "One big pond was there in our village.",
      right: "There was a big pond in our village.",
      why: {
        en: "English starts with there was; Telugu puts ఉండేది at the end, so we copy that order.",
        te: "ఇంగ్లీష్‌లో there was తో మొదలుపెడతారు; తెలుగులో 'ఉండేది' చివర వస్తుంది, అందుకే ఆ వరుస అలాగే అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A young neighbour asks how people travelled long ago. There were no buses then. What do you say?",
        te: "ఒకప్పుడు జనం ఎలా ప్రయాణం చేసేవారని పక్కింటివారు అడుగుతున్నారు. అప్పట్లో బస్సులు లేవు. ఏమంటారు?",
      },
      options: ["There were no buses in those days.", "There was no buses in those days.", "No buses there in those days."],
      answer: 0,
      why: {
        en: "Buses are more than one, so use were; English cannot leave the word out.",
        te: "buses ఒకటి కంటే ఎక్కువ, అందుకే were; ఇంగ్లీష్‌లో ఆ పదం వదిలేయకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "question",
      sentence: "___ there a hospital nearby?",
      te: "దగ్గర్లో ఆసుపత్రి ఉండేదా?",
      options: ["Was", "Were", "Did"],
      answer: 0,
      why: {
        en: "One hospital takes was, and the question puts was before there.",
        te: "ఒక్క ఆసుపత్రి కాబట్టి was; ప్రశ్నలో was, there కంటే ముందు వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend asks: Was there a cinema hall in your village? There was none. Answer.",
        te: "మీ ఊర్లో సినిమా హాల్ ఉండేదా? అని స్నేహితులు అడుగుతున్నారు. ఒక్కటీ లేదు. జవాబు చెప్పండి.",
      },
      options: ["No, there wasn't.", "No, there weren't.", "No, there didn't."],
      answer: 0,
      why: {
        en: "A short answer uses the same word as the question; one hall takes was.",
        te: "చిన్న జవాబులో ప్రశ్నలోని పదమే వస్తుంది; ఒక్క హాల్ కాబట్టి was.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "There was many shops near the bus stand.",
      wrongIndex: 1,
      fix: "There were many shops near the bus stand.",
      why: {
        en: "Many shops are more than one, so the past form is were.",
        te: "many shops అంటే ఒకటి కంటే ఎక్కువ, అందుకే గతంలో were వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A neighbour asks about the village where you grew up. Say there was a big pond.",
        te: "మీరు పెరిగిన ఊరి గురించి పక్కింటివారు అడుగుతున్నారు. అక్కడ ఒక పెద్ద చెరువు ఉండేదని చెప్పండి.",
      },
      expected: ["There was a big pond in our village.", "There was a big pond in my village.", "There was a big pond."],
      options: ["There was a big pond in our village.", "There was big pond in our village.", "There were a big pond in our village."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend asks if there were many shops in your village. There was only one. Answer.",
        te: "మీ ఊర్లో చాలా షాపులు ఉండేవా అని స్నేహితులు అడుగుతున్నారు. ఒక్కటే ఉండేది. జవాబు చెప్పండి.",
      },
      expected: ["No, there was only one shop.", "There was only one shop.", "No, only one shop."],
      options: ["No, there was only one shop.", "No, there were only one shop.", "No, only one shop was there."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "My old village", te: "మా పాత ఊరు" },
    scene: {
      en: "Your friend Kavitha grew up in Hyderabad. She asks about the village near Tenali where you grew up.",
      te: "మీ స్నేహితురాలు కవిత గారు హైదరాబాద్‌లో పెరిగారు. మీరు పెరిగిన తెనాలి దగ్గరి ఊరి గురించి ఆవిడ అడుగుతున్నారు.",
    },
    partner: { en: "Kavitha (your friend)", te: "కవిత (మీ స్నేహితురాలు)" },
    skills: [
      { id: "past", label: { en: "Saying how it was", te: "ఒకప్పుడు ఎలా ఉండేదో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "You grew up in a village, right? Tell me about it.",
        te: "మీరు ఒక ఊర్లో పెరిగారు కదా? దాని గురించి చెప్పండి.",
        hint: { en: "Say yes, and tell her about the big pond.", te: "అవును అని, అక్కడి పెద్ద చెరువు గురించి చెప్పండి." },
        replies: [
          { say: "Yes. There was a big pond in our village.", good: true, skill: "past" },
          { say: "Yes. There was big pond in our village.", good: false, skill: "past", fixIt: "article" },
        ],
      },
      {
        partner: "How lovely! Were there any buses?",
        te: "ఎంత బాగుంది! బస్సులు ఉండేవా?",
        hint: { en: "Say no, and that people walked to the next town.", te: "లేదని, జనం పక్క ఊరికి నడిచి వెళ్ళేవారని చెప్పండి." },
        replies: [
          { say: "No, there were no buses. We walked to the next town.", good: true, skill: "past" },
          { say: "No, there was no buses. We walked to the next town.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Walking! Was there a school, at least?",
        te: "నడిచేనా! కనీసం బడి అయినా ఉండేదా?",
        hint: { en: "Say yes, and tell her about the small school near the temple.", te: "అవును అని, గుడి దగ్గర ఉండే చిన్న బడి గురించి చెప్పండి." },
        replies: [
          { say: "Yes, there was a small school near the temple.", good: true, skill: "past" },
          {
            say: "What a question! Do you think we lived in a forest?",
            good: false,
            skill: "polite",
            react: { en: "Sorry, sorry! I only wanted to know.", te: "సారీ, సారీ! ఊరికే తెలుసుకుందామని అడిగాను." },
          },
        ],
      },
      {
        partner: "It sounds beautiful. I'd love to see it one day.",
        te: "చాలా అందంగా ఉన్నట్టుంది. ఎప్పుడైనా చూడాలని ఉంది.",
        hint: { en: "Invite her to go there with you some day.", te: "ఎప్పుడైనా మీతో పాటు అక్కడికి రమ్మని ఆవిడని పిలవండి." },
        replies: [
          { say: "Sure, let's go together some day.", good: true, skill: "polite" },
          { say: "Please come with me next time. You'll like it.", good: true, skill: "polite" },
          { say: "Sure, let's going together some day.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
