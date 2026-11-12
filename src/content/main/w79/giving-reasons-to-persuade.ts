import type { Lesson } from "../../types";

/** Week 79, Day 3 (CURRICULUM §5): reasons that persuade — The good thing is, it's free. Not only that, … */
export const day: Lesson = {
  id: "giving-reasons-to-persuade",
  kind: "lesson",
  title: { en: "The Good Thing Is", te: "ఇందులో మంచి ఏంటంటే" },
  subtitle: "The good thing is … / Not only that, …",
  summary: {
    en: "Learn to give reasons that persuade: The good thing is, it's free for senior citizens. Not only that, it's very close to your house.",
    te: "ఒప్పించే కారణాలు చెప్పడం నేర్చుకుందాం: The good thing is, it's free for senior citizens. Not only that, it's very close to your house.",
  },
  seo: {
    title: "Giving Reasons to Persuade in English for Telugu Speakers",
    description:
      "Say The good thing is, it's free and Not only that, it's close by. Simple lessons for Telugu speakers on giving good reasons.",
  },
  pattern: [
    { text: "The good thing is,", role: "what" },
    { text: "it's", role: "who" },
    { text: "free", role: "action" },
    { text: "for senior citizens", role: "what" },
  ],
  core: [
    { en: "The good thing is, it's free.", te: "ఇందులో మంచి ఏంటంటే, ఇది ఉచితం.", extra: ["a"] },
    { en: "Not only that, it's very close to your house.", te: "అంతే కాదు, ఇది మీ ఇంటికి చాలా దగ్గర.", extra: ["near"] },
    { en: "The tests take only an hour.", te: "పరీక్షలకి ఒక్క గంటే పడుతుంది.", extra: ["takes"] },
    { en: "The good thing is, you don't need an appointment.", te: "ఇందులో మంచి ఏంటంటే, appointment అక్కర్లేదు.", extra: ["doesn't"] },
    { en: "Not only that, they give the reports the same day.", te: "అంతే కాదు, రిపోర్టులు అదే రోజు ఇస్తారు.", extra: ["gives"] },
    { en: "It's free for senior citizens, and the doctors are very kind.", te: "పెద్దవాళ్ళకి ఉచితం, డాక్టర్లు కూడా చాలా మంచిగా మాట్లాడతారు.", extra: ["is"] },
    { en: "If we go early, we won't have to wait long.", te: "ముందుగా వెళ్తే, ఎక్కువసేపు ఎదురుచూడాల్సిన అవసరం ఉండదు.", extra: ["waiting"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a good place near you, like a park or a clinic. Say two reasons aloud: The good thing is … Not only that, …",
    te: "మీ దగ్గర్లో ఒక మంచి చోటు గుర్తు చేసుకోండి, పార్క్ లేదా clinic లాంటిది. రెండు కారణాలు గట్టిగా చెప్పండి: The good thing is … Not only that, …",
  },
  words: [
    { en: "the good thing is", te: "ఇందులో మంచి ఏంటంటే" },
    { en: "not only that", te: "అంతే కాదు" },
    { en: "benefit", te: "లాభం, ఉపయోగం" },
    { en: "free of cost", te: "ఉచితంగా, డబ్బులు లేకుండా" },
    { en: "nothing to lose", te: "పోయేదేమీ లేదు" },
  ],
  grammar: ["connectors", "present-simple", "present-perfect"],
  topics: ["health", "people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Reasons that persuade", te: "ఒప్పించే కారణాలు" },
      body: {
        en: "People agree more easily when they hear a good reason. Start with The good thing is, and add one more with Not only that.",
        te: "మంచి కారణం వింటే ఎవరైనా తేలికగా ఒప్పుకుంటారు. The good thing is తో మొదలుపెట్టి, Not only that తో ఇంకో కారణం చేర్చండి.",
      },
      bridge: {
        te: ["ఇందులో మంచి ఏంటంటే,", "ఇది", "ఉచితం"],
        en: [
          { text: "The good thing is,", role: "what" },
          { text: "it's", role: "who" },
          { text: "free", role: "action" },
        ],
      },
      examples: [
        { en: "The good thing is, it's free.", te: "ఇందులో మంచి ఏంటంటే, ఇది ఉచితం." },
        { en: "Not only that, it's very close to your house.", te: "అంతే కాదు, ఇది మీ ఇంటికి చాలా దగ్గర." },
        { en: "The good thing is, you don't need an appointment.", te: "ఇందులో మంచి ఏంటంటే, appointment అక్కర్లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Adding reasons", te: "కారణాలు చేర్చడం" },
      items: [
        {
          form: "The good thing is, …",
          useFor: { en: "Give your best reason first.", te: "మీ ముఖ్యమైన కారణం ముందు చెప్పడానికి." },
          example: { en: "The good thing is, the tests are free of cost.", te: "ఇందులో మంచి ఏంటంటే, పరీక్షలు ఉచితంగా చేస్తారు." },
        },
        {
          form: "Not only that, …",
          useFor: { en: "Add a second reason.", te: "రెండో కారణం చేర్చడానికి." },
          example: { en: "Not only that, they give the reports the same day.", te: "అంతే కాదు, రిపోర్టులు అదే రోజు ఇస్తారు." },
        },
        {
          form: "The benefit is …",
          useFor: { en: "Say what your friend gets from it.", te: "దీని వల్ల స్నేహితులకి ఏం లాభమో చెప్పడానికి." },
          example: { en: "The benefit is, they find problems early.", te: "దీని లాభం ఏంటంటే, సమస్యలు ముందే తెలుస్తాయి." },
        },
        {
          form: "You have nothing to lose.",
          useFor: { en: "Say there is no harm in trying.", te: "ప్రయత్నిస్తే నష్టమేమీ లేదని చెప్పడానికి." },
          example: { en: "It's free, so you have nothing to lose.", te: "ఉచితమే, కాబట్టి మీకు పోయేదేమీ లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "It's free health camp.",
      right: "It's a free health camp.",
      why: {
        en: "One camp needs a before it; Telugu ఉచిత క్యాంప్ has no such word.",
        te: "ఒక క్యాంప్ కాబట్టి ముందు a కావాలి; తెలుగు 'ఉచిత క్యాంప్' లో a లాంటి పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I have a doubt about the camp.",
      right: "I have a question about the camp.",
      why: {
        en: "In English, a doubt means you are not sure; for something to ask, say a question.",
        te: "ఇంగ్లీష్‌లో doubt అంటే అనుమానం, నమ్మకం లేకపోవడం; ఏదైనా అడగాలంటే question అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "Your friend asks about Dr Rao at the camp. He started there ten years ago, and he still works there.",
        te: "క్యాంప్‌లో డాక్టర్ రావు గారి గురించి స్నేహితులు అడుగుతున్నారు. ఆయన పదేళ్ళ క్రితం అక్కడ చేరారు, ఇప్పటికీ అక్కడే పని చేస్తున్నారు.",
      },
      options: ["He has worked there for ten years.", "He is working there since ten years.", "He works there from ten years."],
      answer: 0,
      why: {
        en: "From the past up to now takes has worked, and a length of time takes for. Telugu పదేళ్ళుగా tempts is working.",
        te: "గతం నుంచి ఇప్పటివరకు అంటే has worked; ఎంతకాలం అనేదానికి for. తెలుగు 'పదేళ్ళుగా' వల్ల is working అనేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Free Health Camp",
      lines: [
        "Free Health Camp for Senior Citizens",
        "Sunday, 14 December, 8 am to 1 pm",
        "Community Hall, Gandhi Nagar",
        "Free tests for blood sugar, BP and eyes.",
        "Doctors from the government hospital will be there.",
        "No appointment is needed. Just bring your Aadhaar card.",
        "Please do not eat breakfast before the sugar test.",
        "Reports will be given the same day.",
        "Residents' Welfare Association, Gandhi Nagar",
      ],
      questions: [
        {
          prompt: { en: "Who is the camp for?", te: "ఈ క్యాంప్ ఎవరి కోసం?" },
          options: ["Senior citizens", "Schoolchildren", "Office workers"],
          answer: 0,
          why: {
            en: "The first line of the notice names the older residents it is meant for.",
            te: "నోటీసు మొదటి లైన్‌లోనే ఇది ఎవరి కోసమో ఉంది: పెద్దవాళ్ళ కోసం.",
          },
        },
        {
          prompt: { en: "What should you do before the sugar test?", te: "sugar test కి ముందు ఏం చేయాలి?" },
          options: ["Not eat breakfast", "Pay a small fee", "Book an appointment"],
          answer: 0,
          why: {
            en: "One line asks people to come without their morning meal for that test.",
            te: "ఆ పరీక్షకి పొద్దున ఏమీ తినకుండా రమ్మని ఒక లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "What must you bring?", te: "మీతో ఏం తీసుకెళ్ళాలి?" },
          options: ["Your Aadhaar card", "Your old reports", "Some money"],
          answer: 0,
          why: {
            en: "The line about appointments also asks you to bring just one card.",
            te: "appointment గురించి ఉన్న లైన్‌లోనే ఒక్క కార్డు తెమ్మని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      sentence: "It's free, so you have nothing ___ lose.",
      te: "ఉచితమే, కాబట్టి మీకు పోయేదేమీ లేదు.",
      options: ["to", "for", "of"],
      answer: 0,
      why: {
        en: "Nothing to lose is a fixed phrase: there is no harm in trying.",
        te: "nothing to lose అనేది అలవాటైన మాట: ప్రయత్నిస్తే నష్టం ఏమీ లేదు అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The doctor check your BP and sugar for free.",
      wrongIndex: 2,
      fix: "The doctor checks your BP and sugar for free.",
      why: {
        en: "One doctor, like he or she, takes s on the verb; Telugu shows this in a different way.",
        te: "ఒక్క డాక్టర్ (he, she లాగా) కాబట్టి verb కి s కావాలి; తెలుగులో ఇది వేరేలా ఉంటుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend Venkat doesn't want to go to the camp. Tell him the good thing: it's a free camp.",
        te: "మీ స్నేహితుడు వెంకట్ గారు క్యాంప్‌కి రానంటున్నారు. మంచి విషయం చెప్పండి: ఇది ఉచిత క్యాంప్.",
      },
      expected: ["The good thing is, it's a free camp.", "The good thing is, it's free.", "It's a free camp, and it's very close."],
      options: ["The good thing is, it's a free camp.", "The good thing is, it's free camp.", "It's free. Come or don't come, your choice."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your neighbour Anitha worries about the cost of the tests. Tell her it's free, so she has nothing to lose.",
        te: "పక్కింటావిడ అనిత గారు పరీక్షల ఖర్చు గురించి కంగారు పడుతున్నారు. ఉచితమే, కాబట్టి పోయేదేమీ లేదని చెప్పండి.",
      },
      expected: ["It's free, so you have nothing to lose.", "Don't worry, it's free. You have nothing to lose.", "The good thing is, it's free."],
      options: ["It's free, so you have nothing to lose.", "It's free, so you are having nothing to lose.", "It's free, so you have nothing for lose."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Come to the health camp", te: "హెల్త్ క్యాంప్‌కి రండి" },
    scene: {
      en: "There is a free health camp at the community hall on Sunday. Your friend Kamala hasn't had a check-up for years.",
      te: "ఆదివారం కమ్యూనిటీ హాల్‌లో ఉచిత హెల్త్ క్యాంప్ ఉంది. మీ స్నేహితురాలు కమల గారు ఏళ్ళుగా check-up చేయించుకోలేదు.",
    },
    partner: { en: "Kamala (your friend)", te: "కమల (మీ స్నేహితురాలు)" },
    skills: [
      { id: "reasons", label: { en: "Giving good reasons", te: "మంచి కారణాలు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! What's that paper in your hand?",
        te: "హలో! మీ చేతిలో ఆ కాగితం ఏంటి?",
        hint: { en: "Say it is about a free health camp on Sunday.", te: "ఆదివారం ఉచిత హెల్త్ క్యాంప్ గురించి అని చెప్పండి." },
        replies: [
          { say: "It's about a free health camp on Sunday.", good: true, skill: "reasons" },
          { say: "It's about free health camp on Sunday.", good: false, skill: "reasons", fixIt: "article" },
        ],
      },
      {
        partner: "A health camp? I'm fine. I don't need any tests.",
        te: "హెల్త్ క్యాంపా? నేను బాగానే ఉన్నాను. నాకు ఏ పరీక్షలూ అక్కర్లేదు.",
        hint: { en: "Agree she looks well, but give one good reason to go.", te: "ఆవిడ బాగానే కనిపిస్తున్నారని ఒప్పుకుని, వెళ్ళడానికి ఒక మంచి కారణం చెప్పండి." },
        replies: [
          { say: "You look well. The good thing is, they find problems early.", good: true, skill: "reasons" },
          { say: "I know, but a check-up once a year is a good idea.", good: true, skill: "reasons" },
          {
            say: "At your age, nobody is fine. Just go!",
            good: false,
            skill: "polite",
            react: { en: "My age? Well, thank you very much!", te: "నా వయసా? బాగుంది, చాలా థాంక్స్ అండీ!" },
          },
        ],
      },
      {
        partner: "But tests are costly. And I hate long queues.",
        te: "కానీ పరీక్షలు ఖరీదు. పైగా పెద్ద క్యూలు అంటే నాకు అస్సలు ఇష్టం లేదు.",
        hint: { en: "Say it is free, and add a second reason with Not only that.", te: "ఉచితమని చెప్పి, Not only that తో ఇంకో కారణం చేర్చండి." },
        replies: [
          { say: "It's free for senior citizens. Not only that, they give reports the same day.", good: true, skill: "reasons" },
          { say: "It's free for senior citizens. Not only that, they gives reports the same day.", good: false, skill: "reasons", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Hmm, that's good. Okay, I'll come with you.",
        te: "హ్మ్, అది బాగుంది. సరే, మీతో వస్తాను.",
        hint: { en: "Say you are happy, and suggest going early, before the crowd.", te: "సంతోషంగా ఉందని చెప్పి, రద్దీ కంటే ముందే వెళ్దామని సూచించండి." },
        replies: [
          { say: "Wonderful! Let's go at eight, before the crowd.", good: true, skill: "polite" },
          { say: "Wonderful! Let's going at eight, before the crowd.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
