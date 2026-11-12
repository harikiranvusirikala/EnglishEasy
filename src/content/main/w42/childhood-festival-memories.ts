import type { Lesson } from "../../types";

/** Week 42, Day 5 (CURRICULUM §5): used to for memories in a short talk; not anymore — festivals long ago. */
export const day: Lesson = {
  id: "childhood-festival-memories",
  kind: "lesson",
  title: { en: "Festivals When I Was Young", te: "చిన్నప్పటి పండుగలు" },
  subtitle: "used to; not anymore",
  summary: {
    en: "Learn to share festival memories and say what has changed: People don't send greeting cards anymore.",
    te: "పండుగ జ్ఞాపకాలు పంచుకోవడం, ఏం మారిందో చెప్పడం నేర్చుకుందాం: People don't send greeting cards anymore.",
  },
  seo: {
    title: "Festival Memories in English for Telugu Speakers",
    description:
      "Say We used to make our own kites and People don't send greeting cards anymore. Simple lessons for Telugu speakers on festival memories.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "used to make", role: "action" },
    { text: "our own kites", role: "what" },
    { text: "for Sankranti", role: "when" },
  ],
  core: [
    { en: "We used to make our own kites.", te: "మేమే సొంతంగా గాలిపటాలు తయారు చేసుకునేవాళ్ళం.", extra: ["kite"] },
    { en: "People don't send greeting cards anymore.", te: "ఇప్పుడు జనం గ్రీటింగ్ కార్డులు పంపడం లేదు.", extra: ["sends"] },
    { en: "We used to wear new clothes for Ugadi.", te: "ఉగాదికి కొత్త బట్టలు వేసుకునేవాళ్ళం.", extra: ["in"] },
    { en: "Every house used to have a big rangoli for Sankranti.", te: "సంక్రాంతికి ప్రతి ఇంటి ముందు పెద్ద ముగ్గు ఉండేది.", extra: ["rangolis"] },
    { en: "We don't make kites at home anymore.", te: "ఇప్పుడు ఇంట్లో గాలిపటాలు చేయడం లేదు.", extra: ["any"] },
    { en: "We used to go to the village fair every year.", te: "ప్రతి సంవత్సరం ఊరి జాతరకి వెళ్ళేవాళ్ళం.", extra: ["goes"] },
    { en: "My grandfather used to make sweets for Diwali.", te: "మా తాతయ్య గారు దీపావళికి స్వీట్లు చేసేవారు.", extra: ["sweet"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell a friend or neighbour one thing you used to do for a festival, and one thing people don't do anymore.",
    te: "చిన్నప్పుడు పండక్కి మీరు చేసే ఒక పని, ఇప్పుడు జనం చేయని ఒక పని ఈ రోజు ఎవరైనా స్నేహితులకి గానీ పక్కింటివారికి గానీ చెప్పండి.",
  },
  words: [
    { en: "anymore", te: "ఇప్పుడు ఇంక (…లేదు)" },
    { en: "greeting card", te: "గ్రీటింగ్ కార్డు, శుభాకాంక్షల కార్డు" },
    { en: "rangoli", te: "ముగ్గు" },
    { en: "new clothes", te: "కొత్త బట్టలు" },
    { en: "village fair", te: "ఊరి జాతర, తిరునాళ్ళ" },
  ],
  grammar: ["used-to-would", "present-simple", "articles"],
  topics: ["festivals", "people", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Then and now", te: "అప్పుడు, ఇప్పుడు" },
      body: {
        en: "Use used to for festival habits long ago. For what has stopped now, say don't and anymore: We don't make kites anymore.",
        te: "ఒకప్పటి పండుగ అలవాట్లకి used to. ఇప్పుడు ఆగిపోయినవాటికి don't … anymore (ఇప్పుడు ఇంక చేయట్లేదు).",
      },
      bridge: {
        te: ["సంక్రాంతికి", "మేమే", "గాలిపటాలు", "చేసుకునేవాళ్ళం"],
        en: [
          { text: "We", role: "who" },
          { text: "used to make", role: "action" },
          { text: "our own kites", role: "what" },
          { text: "for Sankranti", role: "when" },
        ],
      },
      examples: [
        { en: "We used to make our own kites.", te: "మేమే సొంతంగా గాలిపటాలు తయారు చేసుకునేవాళ్ళం." },
        { en: "People don't send greeting cards anymore.", te: "ఇప్పుడు జనం గ్రీటింగ్ కార్డులు పంపడం లేదు." },
        { en: "We used to wear new clothes for Ugadi.", te: "ఉగాదికి కొత్త బట్టలు వేసుకునేవాళ్ళం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Then, stopped, or still", te: "అప్పుడు, ఆగిపోయింది, ఇంకా ఉంది" },
      items: [
        {
          form: "used to",
          useFor: { en: "Then: what you did long ago.", te: "అప్పుడు: ఒకప్పుడు చేసినది." },
          example: { en: "We used to go to the village fair every year.", te: "ప్రతి సంవత్సరం ఊరి జాతరకి వెళ్ళేవాళ్ళం." },
        },
        {
          form: "don't … anymore",
          useFor: { en: "Now: it has stopped.", te: "ఇప్పుడు: అది ఆగిపోయింది." },
          example: { en: "We don't make kites at home anymore.", te: "ఇప్పుడు ఇంట్లో గాలిపటాలు చేయడం లేదు." },
        },
        {
          form: "still",
          useFor: { en: "Now: it has not stopped.", te: "ఇప్పుడు కూడా: ఇంకా జరుగుతోంది." },
          example: { en: "We still light lamps for Diwali.", te: "దీపావళికి మేము ఇప్పటికీ దీపాలు వెలిగిస్తాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Nobody send greeting cards now.",
      right: "Nobody sends greeting cards now.",
      why: {
        en: "Nobody works like one person, so the verb takes s in English.",
        te: "nobody ని ఒక్కరి లాగా లెక్కపెడతారు, అందుకే verb కి s వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Now also we light lamps for Diwali.",
      right: "We still light lamps for Diwali.",
      why: {
        en: "For something that has not stopped, English says still, not now also.",
        te: "ఇంకా ఆగకుండా జరుగుతుంటే 'ఇప్పుడు కూడా' కి still అనాలి; now also అనరు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your neighbour grew up in Kerala. Ask her what she did for Onam as a child.",
        te: "మీ పక్కింటావిడ కేరళలో పెరిగారు. చిన్నప్పుడు ఓణం పండక్కి ఏం చేసేవారో అడగండి.",
      },
      options: ["What did you use to do for Onam?", "What you used to do for Onam?", "What did you used to do for Onam?"],
      answer: 0,
      why: {
        en: "The question word comes first, then did, and then use to with no d.",
        te: "ముందు ప్రశ్న పదం, తర్వాత did, ఆ తర్వాత d లేకుండా use to.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "People don't send greeting cards ___.",
      te: "ఇప్పుడు జనం గ్రీటింగ్ కార్డులు పంపడం లేదు.",
      options: ["anymore", "now also", "already"],
      answer: 0,
      why: {
        en: "Anymore goes at the end of a not sentence, for something that has stopped.",
        te: "ఆగిపోయిన పనికి, not ఉన్న వాక్యం చివర anymore వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Old School Friends",
      lines: [
        "Usha: Happy Sankranti, friends!",
        "Remember our kites on the school terrace?",
        "We used to fly them all day.",
        "Kite festival at the Parade Ground this Sunday, 3 pm.",
        "Shall we all go together?",
      ],
      prompt: { en: "Usha sent this to the group. Where is the kite festival?", te: "ఉష గారు గ్రూప్‌లో ఇది పంపారు. గాలిపటాల పండుగ ఎక్కడ?" },
      options: ["At the Parade Ground", "On the school terrace", "At Usha's house"],
      answer: 0,
      why: {
        en: "The fourth line gives the place and the time of the kite festival.",
        te: "నాలుగో లైన్‌లో గాలిపటాల పండుగ ఎక్కడ, ఎప్పుడో ఉంది.",
      },
      say: "Kite festival at the Parade Ground this Sunday, 3 pm.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Every house used to have big rangoli for Sankranti.",
      wrongIndex: 5,
      fix: "Every house used to have a big rangoli for Sankranti.",
      why: {
        en: "One rangoli needs a before big; Telugu ముగ్గు has no word like a.",
        te: "ఒక ముగ్గు కాబట్టి big ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell a neighbour that you used to make many kites every Sankranti.",
        te: "ప్రతి సంక్రాంతికి చాలా గాలిపటాలు చేసేవాళ్ళమని పక్కింటివారికి చెప్పండి.",
      },
      expected: ["We used to make many kites for Sankranti.", "We used to make many kites.", "I used to make many kites for Sankranti."],
      options: ["We used to make many kites for Sankranti.", "We used to make many kite for Sankranti.", "We used to made many kites for Sankranti."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend asks if people still send greeting cards. Say no, they have stopped.",
        te: "జనం ఇంకా గ్రీటింగ్ కార్డులు పంపుతున్నారా అని స్నేహితులు అడిగారు. లేదు, మానేశారని చెప్పండి.",
      },
      expected: ["No, people don't send greeting cards anymore.", "People don't send greeting cards anymore.", "No, not anymore."],
      options: [
        "No, people don't send greeting cards anymore.",
        "No, people don't send greeting cards now also.",
        "No, people doesn't send greeting cards anymore.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Festivals in two states", te: "రెండు రాష్ట్రాల పండుగలు" },
    scene: {
      en: "Grace moved here from Kerala last year. Over tea, she asks about the festivals of your childhood.",
      te: "గ్రేస్ గారు పోయిన సంవత్సరం కేరళ నుంచి ఇక్కడికి వచ్చారు. టీ తాగుతూ, మీ చిన్నప్పటి పండుగల గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Grace (a neighbour from Kerala)", te: "గ్రేస్ (కేరళ నుంచి వచ్చిన పక్కింటావిడ)" },
    skills: [
      { id: "memories", label: { en: "Sharing memories", te: "జ్ఞాపకాలు పంచుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "What was your favourite festival as a child?",
        te: "చిన్నప్పుడు మీకు ఏ పండుగంటే ఎక్కువ ఇష్టం?",
        hint: { en: "Say Sankranti, and tell her about making kites.", te: "సంక్రాంతి అని చెప్పి, గాలిపటాలు చేయడం గురించి చెప్పండి." },
        replies: [
          { say: "Sankranti! We used to make our own kites.", good: true, skill: "memories" },
          { say: "Sankranti! We were making our own kites daily.", good: false, skill: "memories", fixIt: "state-ing" },
        ],
      },
      {
        partner: "How lovely! In Kerala, we used to make flower rangoli for Onam.",
        te: "భలే! కేరళలో ఓణం పండక్కి మేము పూల ముగ్గు వేసేవాళ్ళం.",
        hint: { en: "Say it sounds wonderful, and ask what else she used to do.", te: "చాలా బాగుందని చెప్పి, ఇంకా ఏం చేసేవారో అడగండి." },
        replies: [
          { say: "That sounds wonderful! What else did you use to do?", good: true, skill: "memories" },
          { say: "That sounds wonderful! What else you used to do?", good: false, skill: "memories", fixIt: "question" },
          {
            say: "Flower rangoli? Our rangoli was much better.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Well, every state has its own beauty.", te: "అలాగా! ప్రతి రాష్ట్రానికీ దాని అందం దానిది." },
          },
        ],
      },
      {
        partner: "We used to eat lunch on banana leaves. Do you still make kites?",
        te: "అరిటాకుల మీద భోజనం చేసేవాళ్ళం. మీరు ఇంకా గాలిపటాలు చేస్తారా?",
        hint: { en: "Say no, not now, and say people buy them from shops.", te: "ఇప్పుడు లేదని చెప్పి, జనం షాపుల్లో కొంటున్నారని చెప్పండి." },
        replies: [
          { say: "No, not anymore. People buy kites from shops now.", good: true, skill: "memories" },
          { say: "No, not anymore. People buy kite from shops now.", good: false, skill: "memories", fixIt: "plural" },
        ],
      },
      {
        partner: "Things change! Thank you for the lovely chat.",
        te: "కాలం మారుతుంది కదా! ఈ చక్కటి కబుర్లకి థాంక్యూ.",
        hint: { en: "Thank her, and invite her to your house for Sankranti.", te: "ఆవిడకి థాంక్స్ చెప్పి, సంక్రాంతికి మీ ఇంటికి రమ్మని పిలవండి." },
        replies: [
          { say: "Thank you too! Please come to our house for Sankranti.", good: true, skill: "polite" },
          { say: "Thank you too! Please come to our house for the Sankranti.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
