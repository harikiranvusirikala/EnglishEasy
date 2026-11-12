import type { Lesson } from "../../types";

/** Week 71, Day 3 (CURRICULUM §5): used to + now for prices then and now — A dosa used to cost two rupees. Now it's forty. */
export const day: Lesson = {
  id: "a-dosa-used-to-cost",
  kind: "lesson",
  title: { en: "A Dosa Used to Cost Two Rupees", te: "అప్పట్లో దోస రెండు రూపాయలు" },
  subtitle: "used to … now …",
  summary: {
    en: "Learn to compare prices then and now: A dosa used to cost two rupees. Now it's forty.",
    te: "అప్పటి ధరలు, ఇప్పటి ధరలు పోల్చి చెప్పడం నేర్చుకుందాం: A dosa used to cost two rupees. Now it's forty.",
  },
  seo: {
    title: "Prices Then and Now in English for Telugu Speakers",
    description: "Say A dosa used to cost two rupees. Now it's forty rupees. Simple lessons for Telugu speakers on comparing old and new prices.",
  },
  pattern: [
    { text: "A dosa", role: "who" },
    { text: "used to cost", role: "action" },
    { text: "two rupees", role: "what" },
    { text: "back then", role: "when" },
  ],
  core: [
    { en: "A dosa used to cost two rupees.", te: "అప్పట్లో దోస రెండు రూపాయలు ఉండేది.", extra: ["use"] },
    { en: "A bus ticket used to cost fifty paise.", te: "అప్పట్లో బస్ టికెట్ యాభై పైసలు ఉండేది.", extra: ["costs"] },
    { en: "Now it's forty rupees.", te: "ఇప్పుడు నలభై రూపాయలు.", extra: ["rupee"] },
    { en: "How much did a film ticket cost back then?", te: "అప్పట్లో సినిమా టికెట్ ఎంత ఉండేది?", extra: ["costed"] },
    { en: "Milk used to be much cheaper in those days.", te: "ఆ రోజుల్లో పాలు చాలా చవకగా ఉండేవి.", extra: ["more"] },
    { en: "Nowadays, a cup of tea costs ten rupees or more.", te: "ఈ రోజుల్లో ఒక కప్పు టీ పది రూపాయలు, ఇంకా ఎక్కువే.", extra: ["cost"] },
    { en: "Prices are ten times higher than back then.", te: "అప్పటి కంటే ఇప్పుడు ధరలు పది రెట్లు ఎక్కువ.", extra: ["more"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing you bought long ago. Say its old price and its price now: A … used to cost … Now it costs …",
    te: "చాలా కాలం క్రితం మీరు కొన్న ఒక వస్తువు గుర్తు చేసుకోండి. దాని పాత ధర, ఇప్పటి ధర చెప్పండి: A … used to cost … Now it costs …",
  },
  words: [
    { en: "paise", te: "పైసలు" },
    { en: "back then", te: "అప్పట్లో" },
    { en: "nowadays", te: "ఈ రోజుల్లో" },
    { en: "ten times", te: "పది రెట్లు" },
    { en: "Can you believe it?", te: "నమ్ముతారా?" },
  ],
  grammar: ["used-to-would", "comparatives-superlatives", "present-simple"],
  topics: ["money", "food", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Then and now", te: "అప్పుడు, ఇప్పుడు" },
      body: {
        en: "For an old price, say used to cost: A dosa used to cost two rupees. For today's price, use costs or it's: Now it's forty rupees.",
        te: "పాత ధరకి used to cost అనండి: A dosa used to cost two rupees. ఇప్పటి ధరకి costs లేదా it's అనండి: Now it's forty rupees.",
      },
      bridge: {
        te: ["అప్పట్లో", "దోస", "రెండు రూపాయలు", "ఉండేది"],
        en: [
          { text: "A dosa", role: "who" },
          { text: "used to cost", role: "action" },
          { text: "two rupees", role: "what" },
          { text: "back then", role: "when" },
        ],
      },
      examples: [
        { en: "A dosa used to cost two rupees.", te: "అప్పట్లో దోస రెండు రూపాయలు ఉండేది." },
        { en: "A bus ticket used to cost fifty paise.", te: "అప్పట్లో బస్ టికెట్ యాభై పైసలు ఉండేది." },
        { en: "Now it's forty rupees.", te: "ఇప్పుడు నలభై రూపాయలు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Old price or today's price?", te: "పాత ధరా, ఇప్పటి ధరా?" },
      items: [
        {
          form: "used to cost",
          useFor: { en: "A price that stayed the same for years, long ago.", te: "చాలా ఏళ్ళ క్రితం, చాలా కాలం ఉన్న పాత ధర." },
          example: { en: "A dosa used to cost two rupees.", te: "అప్పట్లో దోస రెండు రూపాయలు ఉండేది." },
        },
        {
          form: "used to be cheaper",
          useFor: { en: "Compare then with now.", te: "అప్పటిని ఇప్పటితో పోల్చడానికి." },
          example: { en: "Milk used to be much cheaper in those days.", te: "ఆ రోజుల్లో పాలు చాలా చవకగా ఉండేవి." },
        },
        {
          form: "costs",
          useFor: { en: "Today's price of one thing.", te: "ఒక వస్తువు ఇప్పటి ధర." },
          example: { en: "Nowadays, a cup of tea costs ten rupees or more.", te: "ఈ రోజుల్లో ఒక కప్పు టీ పది రూపాయలు, ఇంకా ఎక్కువే." },
        },
        {
          form: "How much did … cost?",
          useFor: { en: "Ask about an old price.", te: "పాత ధర అడగడానికి." },
          example: { en: "How much did a film ticket cost back then?", te: "అప్పట్లో సినిమా టికెట్ ఎంత ఉండేది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Now a dosa cost forty rupees.",
      right: "Now a dosa costs forty rupees.",
      why: {
        en: "For today's price of one thing, cost takes s, like he or she.",
        te: "ఒక వస్తువు ఇప్పటి ధరకి cost కి s వస్తుంది, he, she లాగా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "How much did a ticket costed back then?",
      right: "How much did a ticket cost back then?",
      why: {
        en: "After did, the verb stays plain; cost never takes -ed for a price.",
        te: "did తర్వాత verb మారదు; ధర విషయంలో cost కి -ed ఎప్పుడూ రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A young shop assistant asks about old prices. Tell him a dosa was two rupees long ago.",
        te: "ఒక షాపులో పనిచేసే యువకుడు పాత ధరల గురించి అడుగుతున్నారు. చాలా ఏళ్ళ క్రితం దోస రెండు రూపాయలని చెప్పండి.",
      },
      options: ["A dosa used to cost two rupees.", "A dosa use to cost two rupees.", "A dosa is used to cost two rupees."],
      answer: 0,
      why: {
        en: "Used to always ends in d, and needs no is before it.",
        te: "used to కి చివర d ఉంటుంది; దాని ముందు is రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "A dosa used to cost two ___.",
      te: "అప్పట్లో దోస రెండు రూపాయలు ఉండేది.",
      options: ["rupees", "rupee", "the rupees"],
      answer: 0,
      why: {
        en: "After two, rupee takes s; Telugu also says రూపాయలు, not రూపాయి.",
        te: "రెండు తర్వాత rupee కి s వస్తుంది; తెలుగులోనూ రూపాయి కాదు, రూపాయలు అంటాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Your friend shows you an old cinema ticket. You remember those days well. What do you say?",
        te: "స్నేహితులు ఒక పాత సినిమా టికెట్ చూపించారు. ఆ రోజులు మీకు బాగా గుర్తున్నాయి. ఏమంటారు?",
      },
      options: ["I remember those days!", "I am remembering those days!", "I remember that days!"],
      answer: 0,
      why: {
        en: "Remember is a state of the mind, so it takes no -ing; days needs those.",
        te: "remember మనసులో ఉండే స్థితి, అందుకే -ing రాదు; days కి those వాడాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "A bus ticket used to costs fifty paise.",
      wrongIndex: 5,
      fix: "A bus ticket used to cost fifty paise.",
      why: {
        en: "After used to, the verb stays plain, with no s.",
        te: "used to తర్వాత verb మారదు; s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A young neighbour asks how much a bus ticket was in your school days. Say fifty paise.",
        te: "మీ స్కూల్ రోజుల్లో బస్ టికెట్ ఎంత అని పక్కింటి యువకుడు అడిగారు. యాభై పైసలు అని చెప్పండి.",
      },
      expected: ["It used to cost fifty paise.", "A bus ticket used to cost fifty paise.", "It used to be fifty paise.", "Fifty paise."],
      options: ["It used to cost fifty paise.", "It use to cost fifty paise.", "It used to costs fifty paise."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend asks the price of a dosa at the hotel near you today. Say forty rupees.",
        te: "మీ దగ్గర్లోని హోటల్‌లో ఇప్పుడు దోస ఎంతని స్నేహితులు అడుగుతున్నారు. నలభై రూపాయలని చెప్పండి.",
      },
      expected: ["It costs forty rupees now.", "It costs forty rupees.", "Now it's forty rupees.", "A dosa costs forty rupees."],
      options: ["It costs forty rupees now.", "It cost forty rupees now.", "It costing forty rupees now."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The old tiffin centre", te: "పాత టిఫిన్ సెంటర్" },
    scene: {
      en: "You eat at the same tiffin centre every week. A young assistant, Kumar, brings your dosa and starts a chat.",
      te: "మీరు ప్రతి వారం ఒకే టిఫిన్ సెంటర్‌లో తింటారు. అక్కడ పనిచేసే యువకుడు కుమార్ గారు దోస తెచ్చి, మాటలు మొదలుపెట్టారు.",
    },
    partner: { en: "Kumar (shop assistant)", te: "కుమార్ (షాపులో పనిచేసేవారు)" },
    voice: "b",
    skills: [
      { id: "then", label: { en: "Then and now", te: "అప్పుడు, ఇప్పుడు" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Here's your dosa. Have you been coming here for a long time?",
        te: "ఇదిగోండి మీ దోస. మీరు చాలా కాలం నుంచి ఇక్కడికి వస్తున్నారా?",
        hint: { en: "Say yes, and how many years: thirty.", te: "అవునని, ఎన్నేళ్ళుగానో చెప్పండి: ముప్పై." },
        replies: [
          { say: "Yes, I have been coming here for thirty years.", good: true, skill: "then" },
          { say: "Yes, I am coming here for thirty years.", good: false, skill: "then", fixIt: "duration" },
        ],
      },
      {
        partner: "Thirty years! How much did a dosa cost then?",
        te: "ముప్పై ఏళ్ళా! అప్పుడు దోస ఎంత ఉండేది?",
        hint: { en: "Tell him the old price: two rupees.", te: "పాత ధర చెప్పండి: రెండు రూపాయలు." },
        replies: [
          { say: "It used to cost two rupees.", good: true, skill: "then" },
          { say: "It was costing two rupees.", good: false, skill: "then", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Two rupees? Now it's forty! Can you believe it?",
        te: "రెండు రూపాయలా? ఇప్పుడు నలభై! నమ్ముతారా?",
        hint: { en: "Agree, and say how much higher prices are now.", te: "ఒప్పుకుని, ఇప్పుడు ధరలు ఎన్ని రెట్లు పెరిగాయో చెప్పండి." },
        replies: [
          { say: "Yes, prices are ten times higher than back then.", good: true, skill: "then" },
          {
            say: "Young people waste money. That's why!",
            good: false,
            skill: "polite",
            react: { en: "Maybe, but we work hard too!", te: "కావచ్చండీ, కానీ మేము కూడా కష్టపడతాం కదా!" },
          },
        ],
      },
      {
        partner: "Enjoy your dosa. Please come again!",
        te: "దోస హాయిగా తినండి. మళ్ళీ రండి!",
        hint: { en: "Thank him, and say the dosa is still as good as before.", te: "థాంక్స్ చెప్పి, దోస ఇప్పటికీ అప్పటిలాగే బాగుందని చెప్పండి." },
        replies: [
          { say: "Thank you. It's still as good as it used to be!", good: true, skill: "polite" },
          { say: "Thank you. It still as good as it used to be!", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};
