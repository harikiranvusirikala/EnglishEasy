import type { Lesson } from "../../types";

/** Week 24, Day 1 (CURRICULUM §4): was / were + -ing — what you were doing at a time in the past. */
export const day: Lesson = {
  id: "i-was-cooking",
  kind: "lesson",
  title: { en: "I Was Cooking", te: "వండుతూ ఉన్నాను" },
  subtitle: "was / were + -ing",
  summary: {
    en: "Learn to say what you were doing at a time in the past: I was cooking at seven.",
    te: "గతంలో ఒక సమయానికి మీరు ఏం చేస్తూ ఉన్నారో చెప్పడం నేర్చుకుందాం: I was cooking at seven.",
  },
  seo: {
    title: "I Was Cooking: Was and Were + -ing in English for Telugu Speakers",
    description:
      "Say I was cooking at seven and They were watching TV. Simple lessons for Telugu speakers on what you were doing in the past.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was cooking", role: "action" },
    { text: "at seven", role: "when" },
  ],
  core: [
    { en: "I was cooking at seven.", te: "ఏడింటికి నేను వంట చేస్తూ ఉన్నాను.", extra: ["am"] },
    { en: "They were watching TV.", te: "వాళ్ళు TV చూస్తూ ఉన్నారు.", extra: ["was"] },
    { en: "I was having a bath.", te: "నేను స్నానం చేస్తూ ఉన్నాను.", extra: ["were"] },
    { en: "She was sleeping in the afternoon.", te: "మధ్యాహ్నం ఆవిడ నిద్రపోతూ ఉన్నారు.", extra: ["sleep"] },
    { en: "We were doing pooja at six.", te: "ఆరింటికి మేము పూజ చేస్తూ ఉన్నాం.", extra: ["was"] },
    { en: "At that time, I was ironing clothes.", te: "ఆ సమయంలో నేను బట్టలు ఇస్త్రీ చేస్తూ ఉన్నాను.", extra: ["iron"] },
    { en: "He was taking a nap after lunch.", te: "భోజనం తర్వాత ఆయన కాసేపు కునుకు తీస్తూ ఉన్నారు.", extra: ["take"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tonight, say aloud what you were doing at seven this evening.",
    te: "ఈ రాత్రి, ఈ సాయంత్రం ఏడింటికి మీరు ఏం చేస్తూ ఉన్నారో పైకి చెప్పండి.",
  },
  words: [
    { en: "bath", te: "స్నానం" },
    { en: "nap", te: "కునుకు, కాసేపు నిద్ర" },
    { en: "iron", te: "ఇస్త్రీ చేయడం" },
    { en: "pooja", te: "పూజ" },
    { en: "at that time", te: "ఆ సమయంలో" },
  ],
  grammar: ["past-continuous", "was-were"],
  topics: ["home", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Was or were + -ing", te: "was / were తో -ing" },
      body: {
        en: "To say what you were busy with at a time in the past, use was or were and a verb with -ing: I was cooking at seven. Use was with I, he and she. Use were with you, we and they.",
        te: "గతంలో ఒక సమయానికి ఏ పని మధ్యలో ఉన్నారో చెప్పాలంటే was / were, తర్వాత verb కి -ing. I, he, she కి was; you, we, they కి were.",
      },
      bridge: {
        te: ["ఏడింటికి", "నేను", "వంట చేస్తూ ఉన్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "was cooking", role: "action" },
          { text: "at seven", role: "when" },
        ],
      },
      examples: [
        { en: "I was cooking at seven.", te: "ఏడింటికి నేను వంట చేస్తూ ఉన్నాను." },
        { en: "They were watching TV.", te: "వాళ్ళు TV చూస్తూ ఉన్నారు." },
        { en: "He was taking a nap after lunch.", te: "భోజనం తర్వాత ఆయన కాసేపు కునుకు తీస్తూ ఉన్నారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Was, were, or the past?", te: "was, were, లేదా past?" },
      items: [
        {
          form: "I / he / she was …ing",
          useFor: { en: "One person, in the middle of something.", te: "ఒక్కరు, ఏదో పని మధ్యలో ఉన్నారు." },
          example: { en: "She was sleeping in the afternoon.", te: "మధ్యాహ్నం ఆవిడ నిద్రపోతూ ఉన్నారు." },
        },
        {
          form: "you / we / they were …ing",
          useFor: { en: "You, or more than one person.", te: "మీరు, లేదా ఒకరి కంటే ఎక్కువ మంది." },
          example: { en: "We were doing pooja at six.", te: "ఆరింటికి మేము పూజ చేస్తూ ఉన్నాం." },
        },
        {
          form: "I cooked",
          useFor: { en: "Done and finished.", te: "పని అయిపోయింది." },
          example: { en: "I cooked rice and dal.", te: "నేను అన్నం, పప్పు వండాను." },
        },
        {
          form: "I was cooking",
          useFor: { en: "Busy with it at that time.", te: "ఆ సమయానికి ఆ పని మధ్యలో ఉన్నారు." },
          example: { en: "At that time, I was ironing clothes.", te: "ఆ సమయంలో నేను బట్టలు ఇస్త్రీ చేస్తూ ఉన్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I was cook at seven.",
      right: "I was cooking at seven.",
      why: {
        en: "After was or were, the verb needs -ing, like the తూ in చేస్తూ.",
        te: "was / were తర్వాత verb కి -ing తప్పదు; 'చేస్తూ' లో 'తూ' లాంటిదే -ing.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I was watching film at nine.",
      right: "I was watching a film at nine.",
      why: {
        en: "One film needs a before it; Telugu has no word like a.",
        te: "ఒక సినిమా అంటే film ముందు a కావాలి; తెలుగులో ఇలాంటి మాట ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I was cooking at seven.", "I was cook at seven.", "I cooking at seven."],
      answer: 0,
      why: {
        en: "Say was, then the verb with -ing; you need both parts.",
        te: "was కూడా కావాలి, verb కి -ing కూడా కావాలి; రెండూ ఉండాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We were ___ pooja at six.",
      te: "ఆరింటికి మేము పూజ చేస్తూ ఉన్నాం.",
      options: ["doing", "do", "did"],
      answer: 0,
      why: {
        en: "After were, the verb takes -ing, never the plain or past form.",
        te: "were తర్వాత verb కి -ing; do గానీ did గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend asks why you didn't answer at nine. You were in the bath.",
        te: "తొమ్మిదింటికి ఫోన్ ఎందుకు ఎత్తలేదని మీ స్నేహితులు అడుగుతున్నారు. అప్పుడు మీరు స్నానం చేస్తున్నారు.",
      },
      options: ["Sorry, I was having a bath.", "Sorry, I am having a bath.", "Sorry, I was have a bath."],
      answer: 0,
      why: {
        en: "Nine o'clock is over now, so use was, not am, with -ing.",
        te: "తొమ్మిది అయిపోయింది, అందుకే am కాదు, was; దానితో -ing.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "They was watching TV at eight.",
      wrongIndex: 1,
      fix: "They were watching TV at eight.",
      why: {
        en: "They means more than one person, so use were, not was.",
        te: "they అంటే ఒకరి కంటే ఎక్కువ మంది, అందుకే was కాదు, were.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend asks what you were doing at seven. You were cooking.",
        te: "ఏడింటికి ఏం చేస్తున్నారని మీ స్నేహితులు అడిగారు. మీరు వంట చేస్తూ ఉన్నారు.",
      },
      expected: ["I was cooking at seven.", "I was cooking."],
      options: ["I was cooking at seven.", "I am cooking at seven.", "I was cook at seven."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say your neighbours were watching TV at eight.",
        te: "ఎనిమిదింటికి మీ పక్కింటివాళ్ళు TV చూస్తూ ఉన్నారని చెప్పండి.",
      },
      expected: ["They were watching TV at eight.", "My neighbours were watching TV at eight."],
      options: ["They were watching TV at eight.", "They was watching TV at eight.", "They were watch TV at eight."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Why didn't you answer?", te: "ఫోన్ ఎందుకు ఎత్తలేదు?" },
    scene: {
      en: "Your friend Satish called you three times last evening. Now he calls again.",
      te: "మీ స్నేహితుడు సతీష్ నిన్న సాయంత్రం మీకు మూడుసార్లు ఫోన్ చేశారు. ఇప్పుడు మళ్ళీ చేస్తున్నారు.",
    },
    partner: { en: "Satish (friend)", te: "సతీష్ (స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "was-ing", label: { en: "Was + -ing", te: "was తో -ing" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I called you three times yesterday evening.",
        te: "హలో! నిన్న సాయంత్రం మీకు మూడుసార్లు ఫోన్ చేశాను.",
        hint: { en: "Say sorry, and say what you were busy with: cooking.", te: "Sorry చెప్పి, అప్పుడు ఏ పనిలో ఉన్నారో చెప్పండి: వంట." },
        replies: [
          { say: "Sorry, I was cooking at that time.", good: true, skill: "was-ing" },
          { say: "Sorry, I was cook at that time.", good: false, skill: "was-ing" },
          {
            say: "So? I don't answer every call.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. I was only worried.", te: "సరే, సరే. కంగారుపడ్డాను, అంతే." },
          },
        ],
      },
      {
        partner: "I called again at eight. What were you doing then?",
        te: "ఎనిమిదింటికి మళ్ళీ చేశాను. అప్పుడు ఏం చేస్తున్నారు?",
        hint: { en: "Tell him you were in the bathroom, washing.", te: "అప్పుడు స్నానం చేస్తూ ఉన్నారని చెప్పండి." },
        replies: [
          { say: "I was having a bath then.", good: true, skill: "was-ing" },
          { say: "I am having a bath then.", good: false, skill: "was-ing" },
        ],
      },
      {
        partner: "Oh, okay. Are you free now?",
        te: "ఓ, సరే. ఇప్పుడు ఖాళీగా ఉన్నారా?",
        hint: { en: "Say yes, and ask why he called.", te: "అవునని, ఎందుకు ఫోన్ చేశారో అడగండి." },
        replies: [
          { say: "Yes, I'm free now. Why did you call?", good: true, skill: "polite" },
          { say: "Yes, I'm free now. Why you called?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
      {
        partner: "Our colony meeting is at six tomorrow. Please come.",
        te: "రేపు ఆరింటికి మన కాలనీ మీటింగ్ ఉంది. తప్పకుండా రండి.",
        hint: { en: "Say you will come, and thank him for telling you.", te: "వస్తానని చెప్పి, చెప్పినందుకు థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, I'll come. Thanks for telling me.", good: true, skill: "polite" },
          { say: "Sure, I'll coming. Thanks for telling me.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};
