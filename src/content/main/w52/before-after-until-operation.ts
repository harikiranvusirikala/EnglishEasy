import type { Lesson } from "../../types";

/** Week 52, Day 4 (CURRICULUM §5): before, after and until with a time or -ing — Don't eat anything until the operation. */
export const day: Lesson = {
  id: "before-after-until-operation",
  kind: "lesson",
  title: { en: "Before, After, Until", te: "ముందు, తర్వాత, అప్పటివరకు" },
  subtitle: "before, after, until",
  summary: {
    en: "Learn to follow the rules before and after an operation: Don't eat anything until the operation. You can walk a little after two days.",
    te: "ఆపరేషన్ ముందు, తర్వాత నియమాలు అర్థం చేసుకుందాం: Don't eat anything until the operation. You can walk a little after two days.",
  },
  seo: {
    title: "Before, After and Until in English for Telugu Speakers",
    description:
      "Say Don't eat anything until the operation and You can walk a little after two days. Simple lessons for Telugu speakers in hospital.",
  },
  pattern: [
    { text: "Don't eat", role: "action" },
    { text: "anything", role: "what" },
    { text: "until the operation", role: "when" },
  ],
  core: [
    { en: "Don't eat anything until the operation.", te: "ఆపరేషన్ అయ్యేదాకా ఏమీ తినకండి.", extra: ["something"] },
    { en: "You can walk a little after two days.", te: "రెండు రోజుల తర్వాత కొంచెం నడవొచ్చు.", extra: ["day"] },
    { en: "Please rest for a week after the operation.", te: "ఆపరేషన్ తర్వాత ఒక వారం విశ్రాంతి తీసుకోండి.", extra: ["take"] },
    { en: "Don't drink water after ten tonight.", te: "ఈ రాత్రి పది తర్వాత నీళ్ళు తాగకండి.", extra: ["drinking"] },
    { en: "The nurse will change the dressing every two days.", te: "ప్రతి రెండు రోజులకి నర్సు గారు డ్రెస్సింగ్ మారుస్తారు.", extra: ["changes"] },
    { en: "Wait here until the doctor comes.", te: "డాక్టర్ గారు వచ్చేదాకా ఇక్కడే ఉండండి.", extra: ["will"] },
    { en: "The doctor will remove the stitches after ten days.", te: "పది రోజుల తర్వాత డాక్టర్ గారు కుట్లు తీసేస్తారు.", extra: ["removing"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say three of your own daily rules aloud with before, after and until: I drink tea after my walk.",
    te: "మీ రోజువారీ అలవాట్లలో మూడు before, after, until తో గట్టిగా చెప్పండి: I drink tea after my walk.",
  },
  words: [
    { en: "until", te: "అప్పటిదాకా, … వరకు" },
    { en: "stitches", te: "కుట్లు" },
    { en: "dressing", te: "గాయానికి కట్టే కట్టు, డ్రెస్సింగ్" },
    { en: "operation theatre", te: "ఆపరేషన్ థియేటర్" },
    { en: "liquids", te: "జావ, జ్యూస్ లాంటి ద్రవాలు" },
  ],
  grammar: ["prepositions", "imperatives", "gerunds-infinitives"],
  topics: ["health", "doctor", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Before, after and until", te: "before, after, until వాడకం" },
      body: {
        en: "Before and after take a time or an event: after the operation. Until means up to that time, and then it stops.",
        te: "before, after తర్వాత టైమ్ గానీ ఒక సంఘటన గానీ వస్తుంది: after the operation. until అంటే ఆ టైమ్ వచ్చేదాకా; తర్వాత ఆగిపోతుంది.",
      },
      bridge: {
        te: ["ఆపరేషన్ అయ్యేదాకా", "ఏమీ", "తినకండి"],
        en: [
          { text: "Don't eat", role: "action" },
          { text: "anything", role: "what" },
          { text: "until the operation", role: "when" },
        ],
      },
      examples: [
        { en: "Don't eat anything until the operation.", te: "ఆపరేషన్ అయ్యేదాకా ఏమీ తినకండి." },
        { en: "You can walk a little after two days.", te: "రెండు రోజుల తర్వాత కొంచెం నడవొచ్చు." },
        { en: "Please rest for a week after the operation.", te: "ఆపరేషన్ తర్వాత ఒక వారం విశ్రాంతి తీసుకోండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which word for the time?", te: "టైమ్‌కి ఏ పదం?" },
      items: [
        {
          form: "before + -ing",
          useFor: { en: "Do this first, then the other thing.", te: "ఇది ముందు చేసి, తర్వాత ఆ పని." },
          example: { en: "Remove your chain before going to the operation theatre.", te: "ఆపరేషన్ థియేటర్‌కి వెళ్ళే ముందు మీ చైన్ తీసేయండి." },
        },
        {
          form: "after + a time",
          useFor: { en: "Later than that time or event.", te: "ఆ టైమ్ లేదా సంఘటన అయ్యాక." },
          example: { en: "You can go home after the doctor's rounds.", te: "డాక్టర్ గారి రౌండ్స్ అయ్యాక మీరు ఇంటికి వెళ్ళొచ్చు." },
        },
        {
          form: "until + a time",
          useFor: { en: "Up to that time, and then it stops.", te: "ఆ టైమ్ వచ్చేదాకా; తర్వాత ఆగిపోతుంది." },
          example: { en: "You can have only liquids until tomorrow.", te: "రేపటి దాకా జావ, జ్యూస్ లాంటివి మాత్రమే తీసుకోవాలి." },
        },
        {
          form: "until he comes",
          useFor: { en: "After until, use the present, even for later today.", te: "until తర్వాత, ఈ రోజు తర్వాత జరిగేదైనా present వాడాలి." },
          example: { en: "Wait here until the doctor comes.", te: "డాక్టర్ గారు వచ్చేదాకా ఇక్కడే ఉండండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I had the operation before two days.",
      right: "I had the operation two days ago.",
      why: {
        en: "For time counted back from now, English puts ago after it; Telugu ముందు makes us say before.",
        te: "ఇప్పటి నుంచి వెనక్కి లెక్కపెట్టే టైమ్‌కి చివర ago వస్తుంది; తెలుగు 'రెండు రోజుల ముందు' వల్ల before అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "Didn't you eat? Yes, I didn't.",
      right: "Didn't you eat? No, I didn't.",
      why: {
        en: "Answer the fact: if you did not eat, start with No, unlike Telugu అవును.",
        te: "జరిగిన దాన్ని బట్టి జవాబు చెప్పండి: తినకపోతే No తో మొదలుపెట్టాలి; తెలుగులో లాగా 'అవును' అనకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Before the operation, the nurse asks: Didn't you drink any water this morning? You didn't drink any. Answer.",
        te: "ఆపరేషన్‌కి ముందు నర్సు గారు 'ఈ రోజు పొద్దున నీళ్ళు తాగలేదా?' అని అడుగుతున్నారు. మీరు తాగలేదు. జవాబు చెప్పండి.",
      },
      options: ["No, I didn't. Not even water.", "Yes, I didn't. Not even water.", "No, I don't. Not even water."],
      answer: 0,
      why: {
        en: "You did not drink, so start with No, and use didn't for this morning.",
        te: "మీరు తాగలేదు, అందుకే No తో మొదలుపెట్టాలి; ఈ రోజు పొద్దున జరిగింది కాబట్టి didn't.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Please wait here ___ the doctor comes.",
      te: "డాక్టర్ గారు వచ్చేదాకా ఇక్కడే ఉండండి.",
      options: ["until", "since", "from"],
      answer: 0,
      why: {
        en: "Until means up to that moment; then the waiting stops.",
        te: "until అంటే ఆ క్షణం వచ్చేదాకా; తర్వాత ఎదురుచూపు ఆగుతుంది.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Before Your Operation",
      lines: [
        "City Hospital, Surgery Ward",
        "Please read these rules the day before your operation.",
        "Do not eat anything after 10 pm.",
        "You can drink a little water until 6 am.",
        "Take a bath and remove your jewellery before coming.",
        "Bring all your tablets and show them to the nurse.",
        "After the operation, only liquids until the next morning.",
        "One attendant has to stay with you on the first night.",
        "Please follow your own doctor's advice first.",
      ],
      questions: [
        {
          prompt: { en: "Until when can you drink a little water?", te: "కొంచెం నీళ్ళు ఎప్పటి దాకా తాగొచ్చు?" },
          options: ["Until 6 am", "Until 10 pm", "Until the next morning"],
          answer: 0,
          why: {
            en: "The line about water gives an early morning time as the limit.",
            te: "నీళ్ళ గురించిన లైన్‌లో తెల్లవారుజాము టైమ్ దాకా అని ఉంది.",
          },
        },
        {
          prompt: { en: "What can you have after the operation?", te: "ఆపరేషన్ తర్వాత ఏం తీసుకోవచ్చు?" },
          options: ["Only liquids", "A full meal", "Nothing at all"],
          answer: 0,
          why: {
            en: "The notice allows only drinks like juice or soup until the next morning.",
            te: "మరుసటి రోజు పొద్దున దాకా జ్యూస్, జావ లాంటివి మాత్రమే అని నోటీసులో ఉంది.",
          },
        },
        {
          prompt: { en: "Who has to stay with you on the first night?", te: "మొదటి రాత్రి మీతో ఎవరు ఉండాలి?" },
          options: ["One attendant", "Two visitors", "The doctor"],
          answer: 0,
          why: {
            en: "The notice says one person has to stay with you that night.",
            te: "ఆ రాత్రి ఒక్కరు మీతో ఉండాలని నోటీసులో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "The nurse will change the dressing every two day.",
      wrongIndex: 8,
      fix: "The nurse will change the dressing every two days.",
      why: {
        en: "After two, day takes s, even when every comes before it.",
        te: "రెండు తర్వాత day కి s వస్తుంది; ముందు every ఉన్నా సరే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "The doctor asks: Didn't you eat anything after ten last night? You didn't. Answer.",
        te: "'నిన్న రాత్రి పది తర్వాత ఏమీ తినలేదా?' అని డాక్టర్ గారు అడుగుతున్నారు. మీరు తినలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I didn't eat anything.", "No, I didn't.", "No, doctor, I didn't eat anything."],
      options: ["No, I didn't eat anything.", "Yes, I didn't eat anything.", "No, I didn't ate anything."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A friend calls and asks when you had the operation. It was three days ago. Answer.",
        te: "స్నేహితులు ఫోన్ చేసి, ఆపరేషన్ ఎప్పుడు జరిగిందని అడుగుతున్నారు. మూడు రోజుల క్రితం. జవాబు చెప్పండి.",
      },
      expected: ["I had the operation three days ago.", "Three days ago.", "It was three days ago."],
      options: ["I had the operation three days ago.", "I had the operation before three days.", "I have the operation three days ago."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The rules before and after", te: "ముందు, తర్వాత నియమాలు" },
    scene: {
      en: "Your small operation is tomorrow morning. Nurse Kavitha comes to your bed to explain the rules.",
      te: "రేపు పొద్దున మీకు చిన్న ఆపరేషన్. నియమాలు చెప్పడానికి నర్సు కవిత గారు మీ బెడ్ దగ్గరికి వచ్చారు.",
    },
    partner: { en: "Kavitha (nurse)", te: "కవిత (నర్సు)" },
    skills: [
      { id: "rules", label: { en: "Asking about the rules", te: "నియమాలు అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening. Your operation is at eight tomorrow morning.",
        te: "నమస్కారం. రేపు పొద్దున ఎనిమిదింటికి మీ ఆపరేషన్.",
        hint: { en: "Greet her, and ask up to what time you can eat tonight.", te: "పలకరించి, ఈ రాత్రి ఎన్ని గంటల దాకా తినొచ్చో అడగండి." },
        replies: [
          { say: "Good evening. Until what time can I eat tonight?", good: true, skill: "rules" },
          { say: "Good evening. When do I have to stop eating?", good: true, skill: "rules" },
          { say: "Good evening. Until what time can I eating tonight?", good: false, skill: "rules" },
        ],
      },
      {
        partner: "You can eat until ten. After that, don't eat anything.",
        te: "పది దాకా తినొచ్చు. ఆ తర్వాత ఏమీ తినకండి.",
        hint: { en: "Ask if you can drink water after ten.", te: "పది తర్వాత నీళ్ళు తాగొచ్చా అని అడగండి." },
        replies: [
          { say: "Okay. Can I drink water after ten?", good: true, skill: "rules" },
          {
            say: "Ten? I always eat late. I won't do that.",
            good: false,
            skill: "polite",
            react: { en: "I know it's hard, but it's for your safety.", te: "కష్టమే అని తెలుసు, కానీ ఇది మీ క్షేమం కోసమే." },
          },
        ],
      },
      {
        partner: "Only a little, until six in the morning. Then nothing at all.",
        te: "పొద్దున ఆరు దాకా కొంచెం మాత్రమే. ఆ తర్వాత ఏమీ వద్దు.",
        hint: { en: "Ask when you can walk after the operation.", te: "ఆపరేషన్ తర్వాత ఎప్పుడు నడవొచ్చో అడగండి." },
        replies: [
          { say: "I see. When can I walk after the operation?", good: true, skill: "rules" },
          { say: "I see. When I can walk after the operation?", good: false, skill: "rules", fixIt: "question" },
        ],
      },
      {
        partner: "After two days. And the stitches come out after ten days.",
        te: "రెండు రోజుల తర్వాత. కుట్లు పది రోజుల తర్వాత తీసేస్తారు.",
        hint: { en: "Thank her, and promise to follow everything she said.", te: "థాంక్స్ చెప్పి, ఆవిడ చెప్పినవన్నీ పాటిస్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "Thank you. I'll follow all the rules.", good: true, skill: "polite" },
          { say: "Thank you. I'll follow all the rule.", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};
