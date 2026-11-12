import type { Lesson } from "../../types";

/** Week 42, Day 2 (CURRICULUM §5): didn't use to and Did you use to …? — comparing childhood homes. */
export const day: Lesson = {
  id: "didnt-use-to-have-a-tv",
  kind: "lesson",
  title: { en: "We Didn't Use to Have a TV", te: "అప్పుడు TV లేదు" },
  subtitle: "didn't use to / Did you use to …?",
  summary: {
    en: "Learn to say what you didn't have long ago, and to ask about it: Did you use to walk to school?",
    te: "ఒకప్పుడు లేనివి చెప్పడం, ఎదుటివారిని అడగడం నేర్చుకుందాం: Did you use to walk to school?",
  },
  seo: {
    title: "Didn't Use To in English for Telugu Speakers",
    description:
      "Say We didn't use to have a TV and ask Did you use to walk to school? Simple lessons for Telugu speakers on childhood homes.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "didn't use to have", role: "action" },
    { text: "a TV", role: "what" },
    { text: "back then", role: "when" },
  ],
  core: [
    { en: "We didn't use to have a TV.", te: "అప్పట్లో మాకు TV లేదు.", extra: ["used"] },
    { en: "Did you use to walk to school?", te: "మీరు చిన్నప్పుడు నడిచి స్కూల్‌కి వెళ్ళేవారా?", extra: ["Do"] },
    { en: "We didn't use to have electricity.", te: "అప్పట్లో మాకు కరెంట్ లేదు.", extra: ["had"] },
    { en: "We used to listen to the radio.", te: "మేము రేడియో వినేవాళ్ళం.", extra: ["listening"] },
    { en: "We used to study under a lantern at night.", te: "రాత్రిపూట లాంతరు వెలుగులో చదువుకునేవాళ్ళం.", extra: ["on"] },
    { en: "We didn't use to have a tap. We had a hand pump.", te: "అప్పట్లో మాకు కుళాయి లేదు. చేతి పంపు ఉండేది.", extra: ["has"] },
    { en: "Our first TV was black and white.", te: "మా మొదటి TV బ్లాక్ అండ్ వైట్ TV.", extra: ["were"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a friend or neighbour one question about their childhood home: Did you use to …?",
    te: "ఈ రోజు ఎవరైనా స్నేహితులని గానీ పక్కింటివారిని గానీ వారి చిన్నప్పటి ఇంటి గురించి ఒక ప్రశ్న అడగండి: Did you use to …?",
  },
  words: [
    { en: "didn't use to", te: "ఒకప్పుడు …లేదు, …ఏవాళ్ళం కాదు" },
    { en: "radio", te: "రేడియో" },
    { en: "lantern", te: "లాంతరు" },
    { en: "hand pump", te: "చేతి పంపు, బోరు పంపు" },
    { en: "black and white", te: "బ్లాక్ అండ్ వైట్, రంగులు లేని" },
  ],
  grammar: ["used-to-would", "yes-no-questions", "past-simple"],
  topics: ["home", "technology", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "No and asking with use to", te: "లేదు అనడం, అడగడం" },
      body: {
        en: "After didn't or did, write use to, not used to: We didn't use to have a TV. Did you use to walk to school?",
        te: "didn't, did తర్వాత used కాదు, use to: We didn't use to have a TV (అప్పట్లో మాకు TV లేదు). అడగాలంటే Did you use to …?",
      },
      bridge: {
        te: ["అప్పట్లో", "మాకు", "TV", "లేదు"],
        en: [
          { text: "We", role: "who" },
          { text: "didn't use to have", role: "action" },
          { text: "a TV", role: "what" },
          { text: "back then", role: "when" },
        ],
      },
      examples: [
        { en: "We didn't use to have a TV.", te: "అప్పట్లో మాకు TV లేదు." },
        { en: "Did you use to walk to school?", te: "మీరు చిన్నప్పుడు నడిచి స్కూల్‌కి వెళ్ళేవారా?" },
        { en: "We didn't use to have electricity.", te: "అప్పట్లో మాకు కరెంట్ లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Had, didn't have, or asking", te: "ఉండేది, లేదు, అడగడం" },
      items: [
        {
          form: "used to",
          useFor: { en: "Something you had or did long ago.", te: "ఒకప్పుడు ఉన్నది, చేసినది." },
          example: { en: "We used to listen to the radio.", te: "మేము రేడియో వినేవాళ్ళం." },
        },
        {
          form: "didn't use to",
          useFor: { en: "Something you did not have or do long ago.", te: "ఒకప్పుడు లేనిది, చేయనిది." },
          example: { en: "We didn't use to have a tap. We had a hand pump.", te: "అప్పట్లో మాకు కుళాయి లేదు. చేతి పంపు ఉండేది." },
        },
        {
          form: "Did you use to …?",
          useFor: { en: "Ask someone about their life long ago.", te: "ఎదుటివారి ఒకప్పటి జీవితం గురించి అడగడానికి." },
          example: { en: "Did you use to have a radio at home?", te: "మీ ఇంట్లో రేడియో ఉండేదా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You used to walk to school?",
      right: "Did you use to walk to school?",
      why: {
        en: "An English question starts with did; Telugu only adds ఆ at the end.",
        te: "తెలుగులో చివర 'ఆ?' చేరిస్తే ప్రశ్న అవుతుంది; ఇంగ్లీష్‌లో ముందు did రావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "We didn't used to have a TV.",
      right: "We didn't use to have a TV.",
      why: {
        en: "After didn't, the verb stays plain, so write use, not used.",
        te: "didn't తర్వాత verb మారదు, అందుకే used కాదు, use అని రాయాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your friend asks: You didn't have a TV as a child? You had no TV. What do you say?",
        te: "'చిన్నప్పుడు మీకు TV లేదా?' అని స్నేహితులు అడిగారు. మీకు TV లేదు. ఏమంటారు?",
      },
      options: ["No, we didn't.", "Yes, we didn't.", "No, we don't."],
      answer: 0,
      why: {
        en: "When the answer is not, English starts with No, even after a not question. Telugu says అవును here.",
        te: "జవాబు 'లేదు' అయితే ఇంగ్లీష్‌లో No తో మొదలుపెట్టాలి. తెలుగులో 'అవును, లేదు' అంటాం కాబట్టి ఇక్కడ పొరపాటు వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We didn't ___ to have electricity.",
      te: "అప్పట్లో మాకు కరెంట్ లేదు.",
      options: ["use", "used", "using"],
      answer: 0,
      why: {
        en: "After didn't, the verb stays plain, so use has no d here.",
        te: "didn't తర్వాత verb మారదు, అందుకే ఇక్కడ use కి d రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask a new friend if they walked to school as a child.", te: "చిన్నప్పుడు నడిచి స్కూల్‌కి వెళ్ళేవారా అని కొత్త స్నేహితులని అడగండి." },
      options: ["Did you use to walk to school?", "Do you use to walk to school?", "Did you used to walk to school?"],
      answer: 0,
      why: {
        en: "A question about long ago starts with did, and then use to comes with no d.",
        te: "ఒకప్పటి సంగతి అడిగే ప్రశ్న did తో మొదలవుతుంది; ఆ తర్వాత d లేకుండా use to.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "We used to listen to radio every evening.",
      wrongIndex: 5,
      fix: "We used to listen to the radio every evening.",
      why: {
        en: "English says listen to the radio, with the; Telugu has no word like the.",
        te: "ఇంగ్లీష్‌లో the radio అంటారు; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A walker asks: You didn't have electricity in your village? You had none. Answer.",
        te: "'మీ ఊర్లో కరెంట్ లేదా?' అని నడకలో ఒకరు అడిగారు. మీకు కరెంట్ లేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, we didn't.", "No, we didn't have electricity.", "No, we didn't use to have electricity."],
      options: ["No, we didn't.", "Yes, we didn't.", "No, we weren't."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "You want to know if your friend had a radio at home as a child. Ask.",
        te: "మీ స్నేహితుల ఇంట్లో చిన్నప్పుడు రేడియో ఉండేదో లేదో తెలుసుకోవాలి. అడగండి.",
      },
      expected: ["Did you use to have a radio at home?", "Did you use to have a radio?", "Did you have a radio at home?"],
      options: ["Did you use to have a radio at home?", "Were you having a radio at home?", "Did you use to had a radio at home?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Old homes on the morning walk", te: "పొద్దుటి నడకలో పాత ఇళ్ళ కబుర్లు" },
    scene: {
      en: "On the morning walk, Kavitha points at some new flats and starts talking about old homes.",
      te: "పొద్దుటి నడకలో కవిత గారు కొత్త ఫ్లాట్లు చూపిస్తూ పాత ఇళ్ళ గురించి మాట్లాడుతున్నారు.",
    },
    partner: { en: "Kavitha (a walking friend)", te: "కవిత (నడకలో స్నేహితురాలు)" },
    skills: [
      { id: "past", label: { en: "didn't use to and Did you use to", te: "లేదు అనడం, అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Look at these new flats! Our old home was so different.",
        te: "ఈ కొత్త ఫ్లాట్లు చూడండి! మా పాత ఇల్లు చాలా వేరుగా ఉండేది.",
        hint: { en: "Agree, and say there was no TV in your old home.", te: "ఒప్పుకుని, మీ పాత ఇంట్లో TV లేదని చెప్పండి." },
        replies: [
          { say: "Ours too. We didn't use to have a TV.", good: true, skill: "past" },
          { say: "Ours too. We didn't used to have a TV.", good: false, skill: "past" },
        ],
      },
      {
        partner: "We didn't have one either. Did you use to have electricity?",
        te: "మాకూ లేదు. మీకు కరెంట్ ఉండేదా?",
        hint: { en: "Say no, and tell her how you studied at night.", te: "లేదని చెప్పి, రాత్రిపూట ఎలా చదువుకునేవారో చెప్పండి." },
        replies: [
          { say: "No, we didn't. We used to study under a lantern.", good: true, skill: "past" },
          { say: "Yes, we didn't. We used to study under a lantern.", good: false, skill: "past", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Same here! And did you have a tap at home?",
        te: "మాకూ అంతే! మీ ఇంట్లో కుళాయి ఉండేదా?",
        hint: { en: "Say no, and say what you used for water.", te: "లేదని చెప్పి, నీళ్ళకి ఏం వాడేవారో చెప్పండి." },
        replies: [
          { say: "No. We had a hand pump outside the house.", good: true, skill: "past" },
          { say: "No, we didn't. We used to get water from a hand pump.", good: true, skill: "past" },
          {
            say: "Why are you asking so many questions?",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I just like old stories.", te: "సారీ అండీ! నాకు పాత కథలంటే ఇష్టం, అంతే." },
          },
        ],
      },
      {
        partner: "Those were simple days. Same time tomorrow?",
        te: "అవి సింపుల్ రోజులు. రేపు ఇదే టైమ్‌కా?",
        hint: { en: "Agree, and say goodbye.", te: "ఒప్పుకుని, బై చెప్పండి." },
        replies: [
          { say: "Yes, same time tomorrow. Bye!", good: true, skill: "polite" },
          { say: "Yes, same time on tomorrow. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
