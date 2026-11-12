import type { Lesson } from "../../types";

/** Week 47, Day 2 (CURRICULUM §5): not as … as; much / a bit + comparative — choosing a recharge plan. */
export const day: Lesson = {
  id: "not-as-cheap-as-recharge-plans",
  kind: "lesson",
  title: { en: "Not as Cheap As", te: "అంత చవక కాదు" },
  subtitle: "not as … as; much / a bit + comparative",
  summary: {
    en: "Learn to say one thing is less than another: This plan is not as cheap as the old one. The second plan is a bit more expensive.",
    te: "ఒకటి ఇంకోదానంత లేదని చెప్పడం నేర్చుకుందాం: This plan is not as cheap as the old one. The second plan is a bit more expensive.",
  },
  seo: {
    title: "Not As … As in English for Telugu Speakers",
    description:
      "Say This plan is not as cheap as the old one, and a bit more expensive. Simple lessons for Telugu speakers on choosing a recharge plan.",
  },
  pattern: [
    { text: "This plan", role: "who" },
    { text: "is not", role: "action" },
    { text: "as cheap as", role: "what" },
    { text: "the old one", role: "what" },
  ],
  core: [
    { en: "This plan is not as cheap as the old one.", te: "ఈ ప్లాన్ పాత దానంత చవకగా లేదు.", extra: ["than"] },
    { en: "The second plan is a bit more expensive.", te: "రెండో ప్లాన్ ధర కొంచెం ఎక్కువ.", extra: ["most"] },
    { en: "This one is much cheaper.", te: "ఇది దానికంటే చాలా చవక.", extra: ["very"] },
    { en: "The network is not as good in my village.", te: "మా ఊర్లో network అంత బాగా లేదు.", extra: ["on"] },
    { en: "The yearly plan is much better for me.", te: "సంవత్సరం ప్లాన్ నాకు చాలా మంచిది.", extra: ["more"] },
    { en: "This plan is a bit cheaper, but the validity is not as long.", te: "ఈ ప్లాన్ కొంచెం చవక, కానీ validity అంత ఎక్కువ రోజులు లేదు.", extra: ["than"] },
    { en: "My cousin's plan is much cheaper than mine.", te: "మా కజిన్ ప్లాన్ నా ప్లాన్ కంటే చాలా చవక.", extra: ["more"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your phone's recharge plan today, and say one thing about it with not as … as.",
    te: "ఈ రోజు మీ ఫోన్ రీఛార్జ్ ప్లాన్ చూసి, దాని గురించి not as … as తో ఒక మాట చెప్పండి.",
  },
  words: [
    { en: "validity", te: "వాలిడిటీ, ఎన్ని రోజులు పనిచేస్తుందో" },
    { en: "data", te: "డేటా, ఇంటర్నెట్" },
    { en: "unlimited", te: "లెక్క లేకుండా, ఎంతైనా" },
    { en: "prepaid", te: "ముందే డబ్బు కట్టే" },
    { en: "yearly", te: "సంవత్సరానికి ఒకసారి" },
  ],
  grammar: ["comparatives-superlatives", "plurals-countable", "present-simple"],
  topics: ["phone", "money", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "not as … as", te: "… అంత లేదు" },
      body: {
        en: "To say one thing is less, put not before as … as: not as cheap as. For a small difference say a bit, and for a big one say much: a bit cheaper, much cheaper.",
        te: "ఒకటి తక్కువ అని చెప్పాలంటే as … as ముందు not పెట్టండి: not as cheap as (అంత చవకగా లేదు). తేడా కొంచెమైతే a bit, ఎక్కువైతే much.",
      },
      bridge: {
        te: ["ఈ ప్లాన్", "పాత దానంత", "చవకగా లేదు"],
        en: [
          { text: "This plan", role: "who" },
          { text: "is not", role: "action" },
          { text: "as cheap as", role: "what" },
          { text: "the old one", role: "what" },
        ],
      },
      examples: [
        { en: "This plan is not as cheap as the old one.", te: "ఈ ప్లాన్ పాత దానంత చవకగా లేదు." },
        { en: "The second plan is a bit more expensive.", te: "రెండో ప్లాన్ ధర కొంచెం ఎక్కువ." },
        { en: "This one is much cheaper.", te: "ఇది దానికంటే చాలా చవక." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "A little or a lot?", te: "కొంచెమా, చాలానా?" },
      items: [
        {
          form: "a bit + cheaper / more expensive",
          useFor: { en: "A small difference.", te: "తేడా కొంచెమే అయితే." },
          example: { en: "The second plan is a bit more expensive.", te: "రెండో ప్లాన్ ధర కొంచెం ఎక్కువ." },
        },
        {
          form: "much + cheaper / better",
          useFor: { en: "A big difference.", te: "తేడా చాలా ఉంటే." },
          example: { en: "The yearly plan is much better for me.", te: "సంవత్సరం ప్లాన్ నాకు చాలా మంచిది." },
        },
        {
          form: "not as … as",
          useFor: { en: "Less than the other one.", te: "ఇంకోదానంత లేనప్పుడు." },
          example: {
            en: "This plan is a bit cheaper, but the validity is not as long.",
            te: "ఈ ప్లాన్ కొంచెం చవక, కానీ validity అంత ఎక్కువ రోజులు లేదు.",
          },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "This plan is not cheap as the old one.",
      right: "This plan is not as cheap as the old one.",
      why: {
        en: "Put as on both sides of cheap; Telugu says it with one word, అంత, so one as gets lost.",
        te: "cheap కి ముందూ వెనకా as రావాలి; తెలుగులో 'అంత' ఒక్కటే చాలు, అందుకే ఒక as మర్చిపోతాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "The validity is 28 day.",
      right: "The validity is 28 days.",
      why: {
        en: "After a number above one, the word takes s: 28 days, three months.",
        te: "ఒకటి కంటే ఎక్కువ సంఖ్య తర్వాత s రావాలి: 28 days, three months; తెలుగులో 'రోజులు' అన్నట్టే.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend asks about your plan. Say that it gives unlimited calls.",
        te: "మీ ప్లాన్ గురించి స్నేహితులు అడుగుతున్నారు. అది అన్‌లిమిటెడ్ కాల్స్ ఇస్తుందని చెప్పండి.",
      },
      options: ["It gives unlimited calls.", "It give unlimited calls.", "It giving unlimited calls."],
      answer: 0,
      why: {
        en: "One plan is it, and with it the verb takes s.",
        te: "ఒక ప్లాన్ అంటే it; it తో verb కి s వస్తుంది: gives.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This one is ___ cheaper.",
      te: "ఇది దానికంటే చాలా చవక.",
      options: ["much", "very", "more"],
      answer: 0,
      why: {
        en: "Before cheaper or better, say much, never very or more.",
        te: "cheaper, better ముందు much వస్తుంది; very గానీ more గానీ రావు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Sri Lakshmi Mobiles: Recharge Plans",
      lines: [
        "Prepaid plans for this month",
        "Plan A: 199 rupees for 28 days.",
        "Unlimited calls and one GB data a day.",
        "Plan B: 299 rupees for 28 days.",
        "Unlimited calls and two GB data a day.",
        "Yearly plan: 1,999 rupees for 365 days.",
        "Unlimited calls and one GB data a day.",
        "The yearly plan is much cheaper than Plan A every month.",
        "Ask at the counter for help.",
      ],
      questions: [
        {
          prompt: { en: "Which plan has the longest validity?", te: "ఏ ప్లాన్‌కి validity ఎక్కువ రోజులు ఉంది?" },
          options: ["The yearly plan", "Plan A", "Plan B"],
          answer: 0,
          why: {
            en: "The yearly plan runs for 365 days, and the others run for 28.",
            te: "yearly plan 365 రోజులు పనిచేస్తుంది; మిగతా రెండూ 28 రోజులే.",
          },
        },
        {
          prompt: { en: "Is Plan A as good as Plan B for data?", te: "డేటాలో Plan A, Plan B అంత బాగుందా?" },
          options: ["No, Plan A gives less data.", "Yes, they give the same data.", "No, Plan A gives more data."],
          answer: 0,
          why: {
            en: "Plan A gives one GB a day, but Plan B gives two.",
            te: "Plan A రోజుకి ఒక GB ఇస్తుంది, Plan B రెండు GB ఇస్తుంది.",
          },
        },
        {
          prompt: { en: "Which costs less for a whole year?", te: "ఒక సంవత్సరం మొత్తానికి ఏది తక్కువ ఖర్చు?" },
          options: ["The yearly plan", "Plan A every month", "Plan B every month"],
          answer: 0,
          why: {
            en: "The notice says the yearly plan is much cheaper than paying every month.",
            te: "నెల నెలా కట్టడం కంటే yearly plan చాలా చవక అని notice లో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "My cousin's plan is more cheaper than mine.",
      wrongIndex: 4,
      fix: "My cousin's plan is cheaper than mine.",
      why: {
        en: "Cheaper already means more cheap, so the word more is extra.",
        te: "cheaper లోనే 'ఎక్కువ చవక' అర్థం ఉంది; ముందు more అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The shopkeeper suggests a new plan, but it costs more than your old plan. Tell him.",
        te: "షాపు ఆయన కొత్త ప్లాన్ చూపిస్తున్నారు, కానీ అది మీ పాత ప్లాన్ కంటే ఎక్కువ ధర. ఆయనకి చెప్పండి.",
      },
      expected: ["This plan is not as cheap as my old one.", "It's not as cheap as my old plan.", "It's a bit more expensive than my old plan."],
      options: ["This plan is not as cheap as my old one.", "This plan not as cheap as my old one.", "This plan is not cheap as my old one."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour asks if the yearly plan is good. Say it is much better for you.",
        te: "సంవత్సరం ప్లాన్ బాగుంటుందా అని పక్కింటివారు అడుగుతున్నారు. మీకు అది చాలా మంచిదని చెప్పండి.",
      },
      expected: ["The yearly plan is much better for me.", "It's much better for me.", "Yes, it's much better for me."],
      options: ["The yearly plan is much better for me.", "The yearly plan is very better for me.", "The yearly plan is much more better for me."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A recharge plan", te: "రీఛార్జ్ ప్లాన్" },
    scene: {
      en: "Your phone plan ends tomorrow. You go to Rahim's mobile shop to recharge.",
      te: "మీ ఫోన్ ప్లాన్ రేపటితో అయిపోతుంది. రీఛార్జ్ కోసం రహీమ్ గారి మొబైల్ షాపుకి వెళ్ళారు.",
    },
    partner: { en: "Rahim (shopkeeper)", te: "రహీమ్ (షాపు యజమాని)" },
    voice: "b",
    skills: [
      { id: "compare", label: { en: "Comparing plans", te: "ప్లాన్లు పోల్చడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Recharge? Which plan would you like?",
        te: "హలో! రీఛార్జా? ఏ ప్లాన్ కావాలి?",
        hint: { en: "Say you want a cheap plan with a long validity.", te: "ఎక్కువ రోజుల validity ఉన్న చవక ప్లాన్ కావాలని చెప్పండి." },
        replies: [
          { say: "I'd like a cheap plan with a long validity.", good: true, skill: "compare" },
          { say: "I like a cheap plan with a long validity.", good: false, skill: "compare" },
        ],
      },
      {
        partner: "This 299 plan gives two GB a day. Many people take it.",
        te: "ఈ 299 ప్లాన్ రోజుకి రెండు GB ఇస్తుంది. చాలా మంది ఇదే తీసుకుంటారు.",
        hint: { en: "Say how long you have used the 199 plan: three years.", te: "199 ప్లాన్ ఎన్నాళ్ళుగా వాడుతున్నారో చెప్పండి: మూడేళ్ళు." },
        replies: [
          { say: "I've used the 199 plan for three years.", good: true, skill: "compare" },
          { say: "I am using the 199 plan since three years.", good: false, skill: "compare", fixIt: "duration" },
        ],
      },
      {
        partner: "But the 199 plan is not as good. Only one GB a day.",
        te: "కానీ 199 ప్లాన్ అంత బాగుండదు. రోజుకి ఒక GB మాత్రమే.",
        hint: {
          en: "Say one GB is enough for you, and the other plan costs a little more.",
          te: "ఒక GB మీకు సరిపోతుందని, రెండో ప్లాన్ ధర కొంచెం ఎక్కువ అని చెప్పండి.",
        },
        replies: [
          { say: "One GB is enough for me. The 299 plan is a bit more expensive.", good: true, skill: "compare" },
          {
            say: "Don't push costly plans on me. I'm not a fool.",
            good: false,
            skill: "polite",
            react: { en: "Sorry! I only wanted to help. The 199 plan is fine.", te: "సారీ అండీ! సాయం చేద్దామనే చెప్పాను. 199 ప్లాన్ కూడా బాగుంటుంది." },
          },
        ],
      },
      {
        partner: "Okay, done! Your 199 recharge is successful.",
        te: "సరే, అయిపోయింది! మీ 199 రీఛార్జ్ successful.",
        hint: { en: "Thank him, and say goodbye.", te: "థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you, Rahim. Have a nice day!", good: true, skill: "polite" },
          { say: "Thank you. Do the needful next month also.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};
