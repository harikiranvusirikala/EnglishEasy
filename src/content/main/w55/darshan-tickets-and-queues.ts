import type { Lesson } from "../../types";

/** Week 55, Day 4 (CURRICULUM §5): asking about tickets, timings and queues at holy places — What time does darshan start tomorrow? */
export const day: Lesson = {
  id: "darshan-tickets-and-queues",
  kind: "lesson",
  title: { en: "Darshan Tickets and Queues", te: "దర్శనం టికెట్లు, క్యూలు" },
  subtitle: "What time does … start? Is there …?",
  summary: {
    en: "Learn to ask about timings and queues at a holy place: What time does darshan start tomorrow? Is there a separate queue for senior citizens?",
    te: "పుణ్యక్షేత్రంలో టైమింగ్స్, క్యూల గురించి అడగడం నేర్చుకుందాం: What time does darshan start tomorrow? Is there a separate queue for senior citizens?",
  },
  seo: {
    title: "Asking About Darshan and Queues in English for Telugu Speakers",
    description:
      "Say What time does darshan start tomorrow? and Is there a separate queue for senior citizens? Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "What time", role: "when" },
    { text: "does darshan", role: "who" },
    { text: "start", role: "action" },
    { text: "tomorrow?", role: "when" },
  ],
  core: [
    { en: "What time does darshan start tomorrow?", te: "రేపు దర్శనం ఎన్ని గంటలకి మొదలవుతుంది?", extra: ["starts"] },
    { en: "Is there a separate queue for senior citizens?", te: "సీనియర్ సిటిజన్లకి వేరే క్యూ ఉందా?", extra: ["are"] },
    { en: "Where can I keep my phone and bag?", te: "నా ఫోన్, బ్యాగ్ ఎక్కడ పెట్టొచ్చు?", extra: ["keeping"] },
    { en: "How long is the wait in the queue now?", te: "ఇప్పుడు క్యూలో ఎంతసేపు పడుతుంది?", extra: ["much"] },
    { en: "Where do we get the prasadam after darshan?", te: "దర్శనం తర్వాత ప్రసాదం ఎక్కడ తీసుకోవాలి?", extra: ["take"] },
    { en: "We've been standing in the queue for two hours.", te: "మేము రెండు గంటల నుంచి క్యూలో నిలబడి ఉన్నాం.", extra: ["since"] },
    { en: "Is there a dress code for the temple?", te: "గుడికి ఏదైనా డ్రెస్ కోడ్ ఉందా?", extra: ["any"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a temple, church, mosque or dargah near you. Say aloud one question about its timings: What time does … open?",
    te: "మీ దగ్గర్లో ఉన్న ఒక గుడి, చర్చి, మసీదు లేదా దర్గా గుర్తు చేసుకోండి. దాని టైమింగ్స్ గురించి ఒక ప్రశ్న గట్టిగా అడగండి: What time does … open?",
  },
  words: [
    { en: "time slot", te: "టైమ్ స్లాట్, కేటాయించిన సమయం" },
    { en: "separate queue", te: "వేరే క్యూ, ప్రత్యేక వరుస" },
    { en: "prasadam", te: "ప్రసాదం" },
    { en: "cloakroom", te: "సామాన్లు దాచుకునే గది, cloakroom" },
    { en: "dress code", te: "డ్రెస్ కోడ్, వేసుకోవాల్సిన బట్టల నియమం" },
  ],
  grammar: ["question-words", "there-is-are", "present-perfect-continuous"],
  topics: ["travel", "festivals", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking at a holy place", te: "పుణ్యక్షేత్రంలో అడగడం" },
      body: {
        en: "To ask about a time, say What time does … start or open? To ask what they have, say Is there …? These work at any temple, church, mosque or dargah.",
        te: "టైమ్ అడగాలంటే What time does … start? లేదా open? అనండి. ఏదైనా ఉందా అని అడగాలంటే Is there …? అనండి. ఇవి గుడి, చర్చి, మసీదు, దర్గా, ఎక్కడైనా పనికొస్తాయి.",
      },
      bridge: {
        te: ["రేపు", "దర్శనం", "ఎన్ని గంటలకి", "మొదలవుతుంది?"],
        en: [
          { text: "What time", role: "when" },
          { text: "does darshan", role: "who" },
          { text: "start", role: "action" },
          { text: "tomorrow?", role: "when" },
        ],
      },
      examples: [
        { en: "What time does darshan start tomorrow?", te: "రేపు దర్శనం ఎన్ని గంటలకి మొదలవుతుంది?" },
        { en: "Is there a separate queue for senior citizens?", te: "సీనియర్ సిటిజన్లకి వేరే క్యూ ఉందా?" },
        { en: "What time does Medak Church open on Sunday?", te: "ఆదివారం మెదక్ చర్చి ఎన్ని గంటలకి తెరుస్తారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which question?", te: "ఏ ప్రశ్న?" },
      items: [
        {
          form: "What time does … open?",
          useFor: { en: "A time: darshan, prayers, the doors.", te: "టైమ్: దర్శనం, ప్రార్థనలు, తలుపులు తెరవడం." },
          example: { en: "What time does the Kadapa Dargah open?", te: "కడప దర్గా ఎన్ని గంటలకి తెరుస్తారు?" },
        },
        {
          form: "Is there …?",
          useFor: { en: "Ask if there is something: a queue, a cloakroom, a lift.", te: "ఏదైనా ఉందా అని: క్యూ, cloakroom, లిఫ్ట్." },
          example: { en: "Is there a cloakroom near the gate?", te: "గేటు దగ్గర cloakroom ఉందా?" },
        },
        {
          form: "How long is the wait?",
          useFor: { en: "Ask how much time you will stand in the queue.", te: "క్యూలో ఎంతసేపు నిలబడాలో అడగడానికి." },
          example: { en: "How long is the wait in the queue now?", te: "ఇప్పుడు క్యూలో ఎంతసేపు పడుతుంది?" },
        },
        {
          form: "Where can I …?",
          useFor: { en: "Ask where to keep or get things.", te: "వస్తువులు ఎక్కడ పెట్టాలో, ఎక్కడ తీసుకోవాలో అడగడానికి." },
          example: { en: "Where can I keep my phone and bag?", te: "నా ఫోన్, బ్యాగ్ ఎక్కడ పెట్టొచ్చు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What time darshan starts tomorrow?",
      right: "What time does darshan start tomorrow?",
      why: {
        en: "A what time question needs does, and then start has no s; Telugu has no such word.",
        te: "what time ప్రశ్నకి does కావాలి, అప్పుడు start కి s రాదు; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "duration",
      wrong: "We are standing here for two hours.",
      right: "We've been standing here for two hours.",
      why: {
        en: "For a wait that started earlier and goes on now, use have been + -ing with for.",
        te: "ముందు మొదలై ఇప్పటికీ సాగుతున్న ఎదురుచూపుకి, for తో have been + -ing వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "A friend phones and asks about the queue. It goes forward slowly. What do you say?",
        te: "స్నేహితులు ఫోన్ చేసి క్యూ గురించి అడుగుతున్నారు. అది మెల్లగా కదులుతోంది. ఏమంటారు?",
      },
      options: ["The queue moves very slowly here.", "The queue move very slowly here.", "The queue moving very slowly here."],
      answer: 0,
      why: {
        en: "One queue is like he or she, so the verb takes s; Telugu needs no change.",
        te: "ఒక్క క్యూ he, she లాంటిదే, అందుకే verb కి s; తెలుగులో మార్పు అక్కర్లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "How long ___ the wait in the queue now?",
      te: "ఇప్పుడు క్యూలో ఎంతసేపు పడుతుంది?",
      options: ["is", "does", "are"],
      answer: 0,
      why: {
        en: "The wait is one thing, not an action, so the question uses is.",
        te: "wait ఒక్కటే, అది action కాదు; అందుకే ప్రశ్నలో is వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "At the temple gate, ask where to leave your footwear.", te: "గుడి గేటు దగ్గర, చెప్పులు ఎక్కడ వదలాలో అడగండి." },
      options: ["Where can I leave my footwear?", "Where I can leave my footwear?", "Where can I leave my footwears?"],
      answer: 0,
      why: {
        en: "In a question, can comes before I, and footwear never takes s.",
        te: "ప్రశ్నలో can, I కంటే ముందు వస్తుంది; footwear కి ఎప్పుడూ s రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Please keep your phone in cloakroom near the gate.",
      wrongIndex: 5,
      fix: "Please keep your phone in the cloakroom near the gate.",
      why: {
        en: "A place both people know needs the before it; Telugu has no word for the.",
        te: "ఇద్దరికీ తెలిసిన చోటుకి ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "You have stood in the queue since six. A volunteer asks how long. Tell him.",
        te: "ఆరు గంటల నుంచి మీరు క్యూలో నిలబడి ఉన్నారు. ఎంతసేపైందని ఒక వాలంటీర్ అడుగుతున్నారు. ఆయనకి చెప్పండి.",
      },
      expected: ["We've been standing here since six.", "We've been waiting since six.", "We've been in the queue since six."],
      options: ["We've been standing here since six.", "We are standing here since six.", "We standing here since six."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend is seventy-five. Ask at the counter about a queue for older people.",
        te: "మీ స్నేహితులకి డెబ్బై ఐదేళ్ళు. పెద్దవాళ్ళకి క్యూ గురించి కౌంటర్‌లో అడగండి.",
      },
      expected: ["Is there a separate queue for senior citizens?", "Is there a queue for senior citizens?", "Do you have a separate queue for senior citizens?"],
      options: ["Is there a separate queue for senior citizens?", "Is there separate queue for senior citizens?", "Are there a separate queue for senior citizens?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the information counter", te: "ఇన్ఫర్మేషన్ కౌంటర్ దగ్గర" },
    scene: {
      en: "You are in a temple town with your friend Narayana, who is seventy-two. You go to the information counter.",
      te: "మీరు డెబ్బై రెండేళ్ళ మీ స్నేహితుడు నారాయణ గారితో ఒక పుణ్యక్షేత్రానికి వచ్చారు. ఇన్ఫర్మేషన్ కౌంటర్ దగ్గరికి వెళ్ళారు.",
    },
    partner: { en: "Usha (at the information counter)", te: "ఉష (ఇన్ఫర్మేషన్ కౌంటర్‌లో)" },
    skills: [
      { id: "ask", label: { en: "Asking for information", te: "వివరాలు అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Namaskaram. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her, and ask when darshan begins tomorrow.", te: "ఆవిడని పలకరించి, రేపు దర్శనం ఎప్పుడు మొదలవుతుందో అడగండి." },
        replies: [
          { say: "Namaskaram. What time does darshan start tomorrow?", good: true, skill: "ask" },
          { say: "Namaskaram. What time darshan starts tomorrow?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "The first darshan is at six in the morning. Do you have tickets?",
        te: "మొదటి దర్శనం పొద్దున ఆరింటికి. మీ దగ్గర టికెట్లు ఉన్నాయా?",
        hint: { en: "Say not yet, and ask about a queue for your elderly friend.", te: "ఇంకా లేవని చెప్పి, పెద్దవారైన మీ స్నేహితుడి కోసం క్యూ గురించి అడగండి." },
        replies: [
          { say: "Not yet. Is there a separate queue for senior citizens?", good: true, skill: "ask" },
          { say: "Not yet. Is there separate queue for senior citizens?", good: false, skill: "ask", fixIt: "article" },
        ],
      },
      {
        partner: "Yes, there is. Please bring his ID card. He'll get a time slot.",
        te: "ఉందండీ. ఆయన ID కార్డు తీసుకురండి. ఆయనకి ఒక టైమ్ స్లాట్ ఇస్తారు.",
        hint: { en: "Thank her, and ask where you can keep your phones and bags.", te: "థాంక్స్ చెప్పి, ఫోన్లు, బ్యాగులు ఎక్కడ పెట్టొచ్చో అడగండి." },
        replies: [
          { say: "Thank you. Where can we keep our phones and bags?", good: true, skill: "ask" },
          {
            say: "Just send us in quickly. We can't wait long.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, everyone waits for their turn here.", te: "సారీ అండీ, ఇక్కడ అందరూ వరుసలోనే వెళ్ళాలి." },
          },
        ],
      },
      {
        partner: "There's a free cloakroom near Gate 2. Phones are not allowed inside.",
        te: "గేట్ 2 దగ్గర ఉచిత cloakroom ఉంది. లోపలికి ఫోన్లు తీసుకెళ్ళకూడదు.",
        hint: { en: "Thank her warmly for her help.", te: "ఆవిడ సాయానికి మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much for your help.", good: true, skill: "polite" },
          { say: "Thank you so much for your helps.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
