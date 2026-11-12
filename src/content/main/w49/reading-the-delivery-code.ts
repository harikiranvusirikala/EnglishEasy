import type { Lesson } from "../../types";

/** Week 49, Day 3 (CURRICULUM §5): reading a delivery code aloud, and giving it only at the door — four double five zero. */
export const day: Lesson = {
  id: "reading-the-delivery-code",
  kind: "lesson",
  title: { en: "Reading the Code", te: "కోడ్ చెప్పడం" },
  subtitle: "double five, zero",
  summary: {
    en: "Learn to read a code aloud, and to give it only at your door: Your delivery code is four double five zero.",
    te: "కోడ్‌ని గట్టిగా చదవడం, అది ఇంటి దగ్గరే చెప్పడం నేర్చుకుందాం: Your delivery code is four double five zero.",
  },
  seo: {
    title: "Reading a Delivery Code in English for Telugu Speakers",
    description:
      "Say four double five zero, and give a delivery code only at your door. Simple lessons for Telugu speakers on codes, OTPs and safety.",
  },
  pattern: [
    { text: "Your delivery code", role: "what" },
    { text: "is", role: "action" },
    { text: "four double five zero", role: "what" },
  ],
  core: [
    { en: "Your delivery code is four double five zero.", te: "మీ delivery code 4550.", extra: ["o"] },
    { en: "I give this code only to the delivery person at my door.", te: "ఈ కోడ్ నేను మా ఇంటి దగ్గరికి వచ్చిన డెలివరీ వ్యక్తికి మాత్రమే చెప్తాను.", extra: ["in"] },
    { en: "Please give me the parcel first.", te: "ముందు పార్సెల్ నాకు ఇవ్వండి.", extra: ["firstly"] },
    { en: "I never share my bank OTP with anyone.", te: "నా బ్యాంక్ OTP ఎప్పుడూ ఎవరికీ చెప్పను.", extra: ["nobody"] },
    { en: "Your order is here. Please tell me the code.", te: "మీ ఆర్డర్ వచ్చింది. కోడ్ చెప్పండి.", extra: ["say"] },
    { en: "Sorry, was that double five or five nine?", te: "సారీ, అది 55 ఆ, 59 ఆ?", extra: ["does"] },
    { en: "The code is seven zero three one.", te: "కోడ్ 7031.", extra: ["thousand"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Read your mobile number or your pin code aloud, digit by digit. Say double where two digits are the same.",
    te: "మీ మొబైల్ నంబర్ గానీ, pin code గానీ ఒక్కో అంకె విడిగా గట్టిగా చదవండి. ఒకే అంకె రెండుసార్లు వస్తే double అనండి.",
  },
  words: [
    { en: "delivery code", te: "డెలివరీ కోడ్ (పార్సెల్ తీసుకునేటప్పుడు చెప్పే నంబర్)" },
    { en: "digit", te: "అంకె" },
    { en: "zero", te: "సున్నా" },
    { en: "triple", te: "మూడుసార్లు (ఒకే అంకె)" },
    { en: "delivery person", te: "డెలివరీ చేసే వ్యక్తి" },
  ],
  grammar: ["pronunciation", "imperatives", "articles"],
  topics: ["shopping", "phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Reading a code aloud", te: "కోడ్‌ని గట్టిగా చదవడం" },
      body: {
        en: "Read a code one digit at a time. For two same digits, say double; for three, say triple. Say zero for 0, clearly.",
        te: "కోడ్‌ని ఒక్కో అంకె విడిగా చదవండి; ఒకే అంకె రెండుసార్లు అయితే double, మూడుసార్లు అయితే triple. 0 ని స్పష్టంగా zero అనండి.",
      },
      bridge: {
        te: ["మీ delivery code", "4550"],
        en: [
          { text: "Your delivery code", role: "what" },
          { text: "is", role: "action" },
          { text: "four double five zero", role: "what" },
        ],
      },
      examples: [
        { en: "Your delivery code is four double five zero.", te: "మీ delivery code 4550." },
        { en: "The code is seven zero three one.", te: "కోడ్ 7031." },
        { en: "Sorry, was that double five or five nine?", te: "సారీ, అది 55 ఆ, 59 ఆ?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Double, triple, zero, and who gets it", te: "double, triple, zero, ఎవరికి చెప్పాలి" },
      items: [
        {
          form: "double",
          useFor: { en: "Two same digits side by side.", te: "ఒకే అంకె పక్కపక్కనే రెండుసార్లు." },
          example: { en: "Your delivery code is four double five zero.", te: "మీ delivery code 4550." },
        },
        {
          form: "triple",
          useFor: { en: "Three same digits side by side.", te: "ఒకే అంకె పక్కపక్కనే మూడుసార్లు." },
          example: { en: "The code is triple seven two.", te: "కోడ్ 7772." },
        },
        {
          form: "zero",
          useFor: { en: "For 0 in codes and phone numbers.", te: "కోడ్‌లలో, ఫోన్ నంబర్లలో 0 కి." },
          example: { en: "The code is seven zero three one.", te: "కోడ్ 7031." },
        },
        {
          form: "the delivery code",
          useFor: {
            en: "Only to the person at your door, once the parcel is in your hand. A bank or UPI OTP, never.",
            te: "పార్సెల్ చేతికి వచ్చాక, ఇంటి దగ్గర ఉన్న వ్యక్తికి మాత్రమే. బ్యాంక్ OTP, UPI OTP మాత్రం ఎప్పుడూ ఎవరికీ చెప్పకూడదు.",
          },
          example: { en: "I give this code only to the delivery person at my door.", te: "ఈ కోడ్ నేను మా ఇంటి దగ్గరికి వచ్చిన డెలివరీ వ్యక్తికి మాత్రమే చెప్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "Sorry, I am not knowing the code.",
      right: "Sorry, I don't know the code.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing.",
        te: "know ఒక స్థితి, పని కాదు; అందుకే దానికి ఎప్పుడూ -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Code is four double five zero.",
      right: "The code is four double five zero.",
      why: {
        en: "One code you both know takes the; Telugu has no word like the.",
        te: "ఇద్దరికీ తెలిసిన ఆ ఒక్క కోడ్ ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The code on your phone is 3009. Read it to the delivery person.", te: "మీ ఫోన్‌లో కోడ్ 3009. దాన్ని డెలివరీ వ్యక్తికి చదివి చెప్పండి." },
      options: ["Three double zero nine.", "Three thousand nine.", "Three zero nine."],
      answer: 0,
      why: {
        en: "Read a code digit by digit; two zeros side by side make double zero.",
        te: "కోడ్‌ని ఒక్కో అంకె చదవాలి, పెద్ద నంబర్‌లా కాదు; పక్కపక్కనే రెండు సున్నాలు ఉంటే double zero.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "be",
      sentence: "I ___ at your gate with the parcel.",
      te: "మీ గేట్ దగ్గర పార్సెల్‌తో ఉన్నాను.",
      options: ["am", "is", "are"],
      answer: 0,
      why: {
        en: "With I, always use am; Telugu ఉన్నాను hides it inside the verb.",
        te: "I తో ఎప్పుడూ am; తెలుగులో 'ఉన్నాను' లోనే అది కలిసిపోతుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "ShopKart",
      lines: [
        "Your order is out for delivery today.",
        "Delivery code: 4550",
        "Share the code only after you get the parcel.",
        "We never ask for your bank OTP or PIN.",
      ],
      prompt: { en: "This message came from ShopKart. When should you give the delivery code?", te: "ShopKart నుంచి ఈ మెసేజ్ వచ్చింది. delivery code ఎప్పుడు చెప్పాలి?" },
      options: ["After the parcel is in your hand", "When someone calls and asks for it", "Before the delivery person comes"],
      answer: 0,
      why: {
        en: "The third line says the code is for after the parcel reaches you.",
        te: "పార్సెల్ మీ చేతికి వచ్చాకే కోడ్ చెప్పాలని మూడో లైన్‌లో ఉంది.",
      },
      say: "Share the code only after you get the parcel.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The delivery person always ask for the code at the door.",
      wrongIndex: 4,
      fix: "The delivery person always asks for the code at the door.",
      why: {
        en: "One person, like he or she, needs s on the verb: asks, not ask.",
        te: "ఒక్కరి గురించి (he, she లాగా) చెప్తే verb కి s వస్తుంది; ask కాదు, asks.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "The parcel is in your hand, and the delivery person asks for the code. Your code is 7031. Say it.",
        te: "పార్సెల్ మీ చేతికి వచ్చింది, డెలివరీ వ్యక్తి కోడ్ అడుగుతున్నారు. మీ కోడ్ 7031. చెప్పండి.",
      },
      expected: ["The code is seven zero three one.", "It's seven zero three one.", "Seven zero three one."],
      options: ["The code is seven zero three one.", "Code is seven zero three one.", "The code is seven thousand thirty-one."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A caller says he is from the delivery company. He asks for the OTP your bank just sent. Say no.",
        te: "డెలివరీ కంపెనీ నుంచి అంటూ ఒకాయన ఫోన్ చేశారు. మీ బ్యాంక్ ఇప్పుడే పంపిన OTP అడుగుతున్నారు. చెప్పనని చెప్పండి.",
      },
      expected: ["Sorry, I never share my bank OTP.", "Sorry, I don't share my OTP.", "No, I never share my OTP with anyone."],
      options: ["Sorry, I never share my bank OTP.", "Okay, wait. I'll read it out.", "Sorry, I never share my bank OTP with nobody."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The code at the gate", te: "గేట్ దగ్గర కోడ్" },
    scene: {
      en: "A delivery person, Kavitha, is at your gate with your parcel. Your delivery code is four double five zero.",
      te: "డెలివరీ చేసే కవిత గారు మీ పార్సెల్‌తో గేట్ దగ్గర ఉన్నారు. మీ delivery code: four double five zero.",
    },
    partner: { en: "Kavitha (delivery person)", te: "కవిత (డెలివరీ చేసే ఆవిడ)" },
    skills: [
      { id: "code", label: { en: "Reading a code", te: "కోడ్ చదవడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Your ShopKart parcel is here. Please tell me the delivery code.",
        te: "హలో! మీ ShopKart పార్సెల్ వచ్చింది. delivery code చెప్పండి.",
        hint: { en: "Greet her, and ask politely for the parcel first.", te: "పలకరించి, ముందు పార్సెల్ ఇవ్వమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Hello! Please give me the parcel first.", good: true, skill: "polite" },
          { say: "Hello. Could you give me the parcel first, please?", good: true, skill: "polite" },
          {
            say: "No parcel, no code. Give it first!",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! Here it is. Please check it.", te: "సరే సరే! ఇదిగోండి. చూసుకోండి." },
          },
        ],
      },
      {
        partner: "Sure, here it is. Now the code, please?",
        te: "తప్పకుండా, ఇదిగోండి. ఇప్పుడు కోడ్ చెప్తారా?",
        hint: { en: "Read out your code, digit by digit.", te: "మీ కోడ్‌ని ఒక్కో అంకె విడిగా చదవండి." },
        replies: [
          { say: "It's four double five zero.", good: true, skill: "code" },
          { say: "The code is four double five zero.", good: true, skill: "code" },
          { say: "It's four thousand five hundred fifty.", good: false, skill: "code" },
        ],
      },
      {
        partner: "Sorry, was that double five or five nine?",
        te: "సారీ, అది 55 ఆ, 59 ఆ?",
        hint: { en: "Say it was two fives, and say the whole code again slowly.", te: "రెండు ఐదులని చెప్పి, కోడ్ మొత్తం మళ్ళీ నెమ్మదిగా చెప్పండి." },
        replies: [
          { say: "Double five. Four, double five, zero.", good: true, skill: "code" },
          { say: "Two fives. The code is four double five zero.", good: true, skill: "code" },
          { say: "It double five. Four double five zero.", good: false, skill: "code", fixIt: "be" },
        ],
      },
      {
        partner: "Got it, thank you. That's done. Have a nice day!",
        te: "అర్థమైంది, థాంక్స్. అయిపోయింది. మీ రోజు బాగా గడవాలి!",
        hint: { en: "Thank her, and say goodbye.", te: "ఆవిడకి థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you. You too!", good: true, skill: "polite" },
          { say: "Thank you very much. Have a nice day!", good: true, skill: "polite" },
          { say: "Thank you. Same to you, have nice day.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
