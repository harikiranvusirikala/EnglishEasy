import type { Lesson } from "../../types";

/** Week 77, Day 5 (CURRICULUM §5): telling about a film — It's a classic full of humour. I liked it because … I've seen it ten times. */
export const day: Lesson = {
  id: "my-favourite-old-telugu-film",
  kind: "lesson",
  title: { en: "My Favourite Old Film", te: "నాకు ఇష్టమైన పాత సినిమా" },
  subtitle: "It's about … I've seen it … times",
  summary: {
    en: "Learn to tell someone about a film you love: It's full of magic and humour. I've seen it more than ten times.",
    te: "మీకు ఎంతో ఇష్టమైన సినిమా గురించి చెప్పడం నేర్చుకుందాం: It's full of magic and humour. I've seen it more than ten times.",
  },
  seo: {
    title: "Talking About Your Favourite Film in English for Telugu Speakers",
    description:
      "Say It's full of magic and humour and I've seen it more than ten times. Simple lessons for Telugu speakers on telling about an old film.",
  },
  pattern: [
    { text: "I've", role: "who" },
    { text: "seen", role: "action" },
    { text: "it", role: "what" },
    { text: "more than ten times", role: "when" },
  ],
  core: [
    { en: "My favourite old film is a black-and-white classic.", te: "నాకు ఇష్టమైన పాత సినిమా ఒక బ్లాక్ అండ్ వైట్ క్లాసిక్.", extra: ["an"] },
    { en: "I've seen it more than ten times.", te: "ఆ సినిమాని పదిసార్లకి పైగా చూశాను.", extra: ["saw"] },
    { en: "It's full of magic and humour.", te: "అందులో మాయలు, హాస్యం నిండుగా ఉంటాయి.", extra: ["with"] },
    { en: "I love it because the songs are evergreen.", te: "అందులో పాటలు ఎప్పటికీ కొత్తగానే ఉంటాయి, అందుకే నాకు ఇష్టం.", extra: ["so"] },
    { en: "It's a film that people of every age enjoy.", te: "అది అన్ని వయసులవాళ్ళూ ఇష్టపడే సినిమా.", extra: ["who"] },
    { en: "The director made it in the nineteen sixties.", te: "దర్శకుడు దాన్ని 1960లలో తీశారు.", extra: ["make"] },
    { en: "Have you ever seen an old black-and-white film?", te: "మీరు ఎప్పుడైనా పాత బ్లాక్ అండ్ వైట్ సినిమా చూశారా?", extra: ["Did"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone about a film you love in three sentences: what it is, why you like it, and how many times you've seen it.",
    te: "మీకు ఇష్టమైన ఒక సినిమా గురించి మూడు వాక్యాల్లో ఎవరికైనా చెప్పండి: అది ఏ సినిమా, ఎందుకు నచ్చింది, ఎన్నిసార్లు చూశారు.",
  },
  words: [
    { en: "classic", te: "క్లాసిక్, ఎప్పటికీ నిలిచిపోయే సినిమా" },
    { en: "humour", te: "హాస్యం" },
    { en: "full of", te: "… తో నిండిన, నిండుగా" },
    { en: "director", te: "దర్శకుడు, డైరెక్టర్" },
    { en: "evergreen", te: "ఎప్పటికీ కొత్తగా ఉండే" },
  ],
  grammar: ["present-perfect", "relative-clauses", "connectors"],
  topics: ["feelings", "people", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Telling about a film you love", te: "మీకు నచ్చిన సినిమా గురించి చెప్పడం" },
      body: {
        en: "Say what the film is, what it's full of, and why you like it. To say how many times you have watched it, use have seen: I've seen it ten times.",
        te: "అది ఏ సినిమానో, అందులో ఏం ఉంటాయో, ఎందుకు నచ్చిందో చెప్పండి. ఎన్నిసార్లు చూశారో చెప్పడానికి have seen: I've seen it ten times.",
      },
      bridge: {
        te: ["ఆ సినిమాని", "పదిసార్లకి పైగా", "చూశాను"],
        en: [
          { text: "I've", role: "who" },
          { text: "seen", role: "action" },
          { text: "it", role: "what" },
          { text: "more than ten times", role: "when" },
        ],
      },
      examples: [
        { en: "My favourite old film is a black-and-white classic.", te: "నాకు ఇష్టమైన పాత సినిమా ఒక బ్లాక్ అండ్ వైట్ క్లాసిక్." },
        { en: "I've seen it more than ten times.", te: "ఆ సినిమాని పదిసార్లకి పైగా చూశాను." },
        { en: "It's full of magic and humour.", te: "అందులో మాయలు, హాస్యం నిండుగా ఉంటాయి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Four steps", te: "నాలుగు మెట్లు" },
      items: [
        {
          form: "It's a …",
          useFor: { en: "Say what kind of film it is.", te: "అది ఎలాంటి సినిమానో చెప్పడానికి." },
          example: { en: "It's a family film from the nineteen sixties.", te: "అది 1960ల నాటి కుటుంబ కథా చిత్రం." },
        },
        {
          form: "It's about …",
          useFor: { en: "Say the story in one line.", te: "కథని ఒక్క లైన్‌లో చెప్పడానికి." },
          example: { en: "It's about a poor boy who becomes a famous singer.", te: "అది ఒక పేద కుర్రాడు పేరున్న గాయకుడు అయ్యే కథ." },
        },
        {
          form: "I like it because …",
          useFor: { en: "Give your reason.", te: "మీ కారణం చెప్పడానికి." },
          example: { en: "I like it because the humour is so gentle.", te: "అందులో హాస్యం సున్నితంగా ఉంటుంది, అందుకే నాకు ఇష్టం." },
        },
        {
          form: "I've seen it … times",
          useFor: { en: "Say how many times, up to now.", te: "ఇప్పటిదాకా ఎన్నిసార్లు చూశారో చెప్పడానికి." },
          example: { en: "I've seen it at least five times.", te: "కనీసం ఐదుసార్లు చూశాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I watched it again yesterday night.",
      right: "I watched it again last night.",
      why: {
        en: "English says last night; yesterday night comes from Telugu నిన్న రాత్రి.",
        te: "ఇంగ్లీష్‌లో last night అంటారు; yesterday night అనేది 'నిన్న రాత్రి' నుంచి వచ్చిన అలవాటు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I've seen it ten times last year.",
      right: "I saw it ten times last year.",
      why: {
        en: "With a finished time like last year, use the past, not have seen.",
        te: "last year లాంటి ముగిసిపోయిన కాలంతో past వాడాలి; have seen రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "A young neighbour asks how many times you've watched your favourite film. What do you say?",
        te: "మీకు ఇష్టమైన సినిమాని ఎన్నిసార్లు చూశారని పక్కింట్లో ఉండే ఒక యువకుడు అడుగుతున్నారు. ఏమంటారు?",
      },
      options: ["I've seen it more than ten times.", "I am seeing it more than ten times.", "I've saw it more than ten times."],
      answer: 0,
      why: {
        en: "For how many times up to now, use have seen; -ing does not count times.",
        te: "ఇప్పటిదాకా ఎన్నిసార్లో చెప్పడానికి have seen; -ing తో సార్లు లెక్కపెట్టరు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It's a film ___ people of every age enjoy.",
      te: "అది అన్ని వయసులవాళ్ళూ ఇష్టపడే సినిమా.",
      options: ["that", "who", "where"],
      answer: 0,
      why: {
        en: "For a thing like a film, use that or which; who is only for people.",
        te: "సినిమా లాంటి వస్తువుకి that లేదా which; who మనుషులకి మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Sri Lakshmi Theatre, Guntur",
      lines: [
        "Old Classics Week, 10 to 16 March",
        "Every morning at 10, we show one black-and-white Telugu classic.",
        "All the films are from the nineteen fifties and sixties.",
        "Tickets are only 50 rupees.",
        "Senior citizens get a free cup of tea.",
        "Wheelchair users can sit in the front row.",
        "Booking opens at 9 am at the theatre counter.",
        "Sorry, no booking on the phone.",
        "Theatre Manager",
      ],
      questions: [
        {
          prompt: { en: "What time do the films start?", te: "సినిమాలు ఎన్ని గంటలకి మొదలవుతాయి?" },
          options: ["At 10 in the morning", "At 9 in the morning", "In the evening"],
          answer: 0,
          why: {
            en: "The second line says one classic is shown every morning, at ten.",
            te: "రెండో లైన్‌లో ప్రతి రోజు పొద్దున పదింటికి ఒక క్లాసిక్ వేస్తారని ఉంది.",
          },
        },
        {
          prompt: { en: "What do senior citizens get?", te: "సీనియర్ సిటిజన్లకి ఏం దొరుకుతుంది?" },
          options: ["A free cup of tea", "A free ticket", "A seat in the front row"],
          answer: 0,
          why: {
            en: "The fifth line offers older people tea at no cost.",
            te: "ఐదో లైన్‌లో పెద్దవాళ్ళకి టీ ఉచితం అని ఉంది.",
          },
        },
        {
          prompt: { en: "How can you book a ticket?", te: "టికెట్ ఎలా బుక్ చేసుకోవచ్చు?" },
          options: ["At the theatre counter", "On the phone", "On a website"],
          answer: 0,
          why: {
            en: "The notice says booking is only in person, and not by phone.",
            te: "బుకింగ్ నేరుగా వెళ్ళి మాత్రమే, ఫోన్‌లో కాదని నోటీసులో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "It's classic full of magic and humour.",
      wrongIndex: 1,
      fix: "It's a classic full of magic and humour.",
      why: {
        en: "One film needs a before classic; Telugu has no word like a.",
        te: "ఒక్క సినిమా అంటే classic ముందు a కావాలి; తెలుగులో a లాంటి మాట లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A young neighbour asks: Have you ever seen an old black-and-white film? Say yes, many times.",
        te: "మీరు ఎప్పుడైనా పాత బ్లాక్ అండ్ వైట్ సినిమా చూశారా అని పక్కింటి యువకుడు అడుగుతున్నారు. అవును, చాలాసార్లు అని చెప్పండి.",
      },
      expected: ["Yes, I have. Many times.", "Yes, many times.", "Yes, I've seen many old black-and-white films."],
      options: ["Yes, I have. Many times.", "Yes, I did. Many times.", "Yes, I seen. Many times."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell your neighbour why you love your favourite old film: the songs are still fresh.",
        te: "మీకు ఇష్టమైన పాత సినిమా ఎందుకు ఇష్టమో పక్కింటివారికి చెప్పండి: పాటలు ఇప్పటికీ కొత్తగా ఉంటాయి.",
      },
      expected: ["I love it because the songs are still fresh.", "Because the songs are still fresh.", "The songs are still fresh. That's why I love it."],
      options: ["I love it because the songs are still fresh.", "Because the songs are still fresh, so I love it.", "I am loving it because the songs are still fresh."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A classic for a young neighbour", te: "పక్కింటి యువకుడికి ఒక క్లాసిక్" },
    scene: {
      en: "Satish, a young man who lives next door, says old films are boring. You tell him about your favourite.",
      te: "పక్కింట్లో ఉండే యువకుడు సతీష్ గారు పాత సినిమాలు బోరింగ్ అంటున్నారు. మీకు ఇష్టమైన సినిమా గురించి ఆయనకి చెప్తున్నారు.",
    },
    partner: { en: "Satish (your young neighbour)", te: "సతీష్ (పక్కింటి యువకుడు)" },
    voice: "b",
    skills: [
      { id: "film", label: { en: "Telling about a film", te: "సినిమా గురించి చెప్పడం" } },
      { id: "polite", label: { en: "Disagreeing kindly", te: "మర్యాదగా ఒప్పుకోకపోవడం" } },
    ],
    turns: [
      {
        partner: "Old films are so slow. Aren't they boring?",
        te: "పాత సినిమాలు చాలా నెమ్మదిగా ఉంటాయి. బోరింగ్ కాదా?",
        hint: { en: "Disagree gently, and say some old films are full of interest.", te: "మెల్లగా ఒప్పుకోకుండా, కొన్ని పాత సినిమాలు చాలా ఆసక్తిగా ఉంటాయని చెప్పండి." },
        replies: [
          { say: "I don't think so. Some old films are really interesting.", good: true, skill: "polite" },
          { say: "I don't think so. Some old films are really interested.", good: false, skill: "film" },
          {
            say: "Young people know nothing about good films.",
            good: false,
            skill: "polite",
            react: { en: "That's not fair! I just haven't seen many.", te: "అలా అనకండి! నేను ఎక్కువ చూడలేదు, అంతే." },
          },
        ],
      },
      {
        partner: "Really? Then tell me about your favourite. What's it about?",
        te: "నిజమా? అయితే మీకు ఇష్టమైన సినిమా గురించి చెప్పండి. అది దేని గురించి?",
        hint: { en: "Say it's about a village wedding, and that it's full of humour.", te: "అది ఒక పల్లెటూరి పెళ్ళి కథ అని, అందులో హాస్యం నిండుగా ఉంటుందని చెప్పండి." },
        replies: [
          { say: "It's about a village wedding, and it's full of humour.", good: true, skill: "film" },
          { say: "It's about a village wedding, and it's full with humour.", good: false, skill: "film" },
        ],
      },
      {
        partner: "Sounds nice. How many times have you seen it?",
        te: "బాగుంది. మీరు దాన్ని ఎన్నిసార్లు చూశారు?",
        hint: { en: "Say how many times you've watched it: more than ten.", te: "ఎన్నిసార్లు చూశారో చెప్పండి: పదికి పైగా." },
        replies: [
          { say: "I've seen it more than ten times!", good: true, skill: "film" },
          { say: "I am seeing it more than ten times!", good: false, skill: "film", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Wow! Then I'll watch it this weekend. Is it on YouTube?",
        te: "అబ్బో! అయితే ఈ వీకెండ్ చూస్తాను. YouTube లో ఉందా?",
        hint: { en: "Say yes, and suggest watching it together on Sunday.", te: "అవునని చెప్పి, ఆదివారం కలిసి చూద్దామని సూచించండి." },
        replies: [
          { say: "Yes, it is. Why don't we watch it together on Sunday?", good: true, skill: "polite" },
          { say: "Yes, it is. Why we don't watch it together on Sunday?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
    ],
  },
};
