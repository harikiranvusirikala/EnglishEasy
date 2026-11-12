import type { Lesson } from "../../types";

/** Week 57, Day 4 (CURRICULUM §5): reported messages — They asked me to bring my passbook. The electrician said he would come tomorrow. */
export const day: Lesson = {
  id: "passing-on-office-messages",
  kind: "lesson",
  title: { en: "The Bank Called", te: "బ్యాంక్ నుంచి ఫోన్" },
  subtitle: "They asked me to …; He said he would …",
  summary: {
    en: "Learn to take a message and pass it on: The bank called. They asked me to bring my passbook. The electrician said he would come tomorrow.",
    te: "మెసేజ్ తీసుకుని ఇంకొకరికి అందించడం నేర్చుకుందాం: The bank called. They asked me to bring my passbook. The electrician said he would come tomorrow.",
  },
  seo: {
    title: "Passing On Phone Messages in English for Telugu Speakers",
    description:
      "Say They asked me to bring my passbook and The electrician said he would come tomorrow. Simple lessons for Telugu speakers on messages.",
  },
  pattern: [
    { text: "They", role: "who" },
    { text: "asked me", role: "action" },
    { text: "to bring my passbook", role: "what" },
  ],
  core: [
    { en: "They asked me to bring my passbook.", te: "నా passbook తీసుకురమ్మని వాళ్ళు అడిగారు.", extra: ["bringing"] },
    { en: "The electrician said he would come tomorrow.", te: "రేపు వస్తానని ఎలక్ట్రీషియన్ గారు చెప్పారు.", extra: ["will"] },
    { en: "The bank called this morning.", te: "ఈ రోజు పొద్దున బ్యాంక్ నుంచి ఫోన్ వచ్చింది.", extra: ["today"] },
    { en: "The gas agency asked you to call them back.", te: "మిమ్మల్ని తిరిగి ఫోన్ చేయమని గ్యాస్ ఏజెన్సీ వాళ్ళు అడిగారు.", extra: ["calling"] },
    { en: "The postman said he would come again on Monday.", te: "సోమవారం మళ్ళీ వస్తానని పోస్ట్‌మ్యాన్ గారు చెప్పారు.", extra: ["will"] },
    { en: "They asked me to tell you it was urgent.", te: "అది అర్జెంట్ అని మీకు చెప్పమని వాళ్ళు అడిగారు.", extra: ["say"] },
    { en: "The clerk said your new card was ready.", te: "మీ కొత్త కార్డు రెడీ అయిందని క్లర్క్ గారు చెప్పారు.", extra: ["is"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time a call or a visitor comes for someone else, pass on the message: They asked you to …",
    te: "ఈసారి వేరేవాళ్ళ కోసం ఫోన్ గానీ, ఎవరైనా గానీ వస్తే, ఆ మెసేజ్‌ని అందించండి: They asked you to …",
  },
  words: [
    { en: "asked me to", te: "… చేయమని అడిగారు" },
    { en: "gas agency", te: "గ్యాస్ ఏజెన్సీ" },
    { en: "while you were out", te: "మీరు బయటికి వెళ్ళినప్పుడు" },
    { en: "left a message", te: "మెసేజ్ చెప్పి పెట్టారు" },
    { en: "get back to", te: "మళ్ళీ సంప్రదించడం, తిరిగి ఫోన్ చేయడం" },
  ],
  grammar: ["reported-speech", "will", "politeness-softening"],
  topics: ["phone", "bank", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Messages from offices and callers", te: "ఆఫీసుల నుంచి, ఫోన్ చేసినవాళ్ళ నుంచి మెసేజ్‌లు" },
      body: {
        en: "For a request, say asked me to and the plain verb: They asked me to bring my passbook. For a promise, say said he would: He said he would come tomorrow.",
        te: "అడిగిన పనికి asked me to తర్వాత verb అలాగే: They asked me to bring my passbook. ఇచ్చిన మాటకి said he would: He said he would come tomorrow.",
      },
      bridge: {
        te: ["నా passbook", "తీసుకురమ్మని", "వాళ్ళు", "అడిగారు"],
        en: [
          { text: "They", role: "who" },
          { text: "asked me", role: "action" },
          { text: "to bring my passbook", role: "what" },
        ],
      },
      examples: [
        { en: "They asked me to bring my passbook.", te: "నా passbook తీసుకురమ్మని వాళ్ళు అడిగారు." },
        { en: "The electrician said he would come tomorrow.", te: "రేపు వస్తానని ఎలక్ట్రీషియన్ గారు చెప్పారు." },
        { en: "The gas agency asked you to call them back.", te: "మిమ్మల్ని తిరిగి ఫోన్ చేయమని గ్యాస్ ఏజెన్సీ వాళ్ళు అడిగారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "A request, an order or a promise", te: "అడగడం, చెప్పడం, మాట ఇవ్వడం" },
      items: [
        {
          form: "asked me to",
          useFor: { en: "A polite request: Please bring your passbook.", te: "మర్యాదగా అడిగినది: Please bring your passbook." },
          example: { en: "The bank asked me to update my KYC.", te: "నా KYC update చేయమని బ్యాంక్ వాళ్ళు అడిగారు." },
        },
        {
          form: "told me to",
          useFor: { en: "An order or clear advice: Come at ten.", te: "ఆదేశం, స్పష్టమైన సలహా: Come at ten." },
          example: { en: "The clerk told me to come at ten.", te: "పది గంటలకి రమ్మని క్లర్క్ గారు చెప్పారు." },
        },
        {
          form: "said he would",
          useFor: { en: "A promise: I will come tomorrow.", te: "ఇచ్చిన మాట: I will come tomorrow." },
          example: { en: "The plumber said he would come at nine.", te: "తొమ్మిదింటికి వస్తానని ప్లంబర్ గారు చెప్పారు." },
        },
        {
          form: "said it was",
          useFor: { en: "News or a fact: Your card is ready.", te: "వార్త, విషయం: Your card is ready." },
          example: { en: "The clerk said your new card was ready.", te: "మీ కొత్త కార్డు రెడీ అయిందని క్లర్క్ గారు చెప్పారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "The manager said he would revert back today.",
      right: "The manager said he would get back to you today.",
      why: {
        en: "Revert already means come back, so back is extra; get back to you sounds natural everywhere.",
        te: "revert అంటేనే తిరిగి రావడం, back అక్కర్లేదు; get back to you అనడం ఎక్కడైనా సహజం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "They asked me to bring photo and my passbook.",
      right: "They asked me to bring a photo and my passbook.",
      why: {
        en: "One photo needs a before it; Telugu ఫోటో needs no extra word, so a gets dropped.",
        te: "ఒక్క ఫోటో ముందు a కావాలి; తెలుగులో 'ఫోటో' కి ఏ మాటా అక్కర్లేదు, అందుకే a మర్చిపోతాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The gas agency phoned for your neighbour Venkat. They said: Please call us back. Tell him.",
        te: "పక్కింటి వెంకట్ గారి కోసం గ్యాస్ ఏజెన్సీ నుంచి ఫోన్ వచ్చింది. Please call us back అన్నారు. ఆయనకి చెప్పండి.",
      },
      options: [
        "The gas agency asked you to call them back.",
        "The gas agency asked you call them back.",
        "The gas agency asked to you to call them back.",
      ],
      answer: 0,
      why: {
        en: "After asked you, put to before the plain verb; Telugu చేయమన్నారు hides it inside one word.",
        te: "asked you తర్వాత verb ముందు to కావాలి; తెలుగులో 'చేయమన్నారు' అనే ఒక్క మాటలోనే అది దాగి ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "They asked me ___ my passbook.",
      te: "నా passbook తీసుకురమ్మని వాళ్ళు అడిగారు.",
      options: ["to bring", "bring", "bringing"],
      answer: 0,
      why: {
        en: "After asked me, the action takes to and the plain verb.",
        te: "asked me తర్వాత పనికి to, ఆ తర్వాత verb అలాగే వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "A caller asks for your neighbour, but he is out. Offer to take a message.",
        te: "ఫోన్ చేసినవారు పక్కింటాయన కోసం అడుగుతున్నారు, కానీ ఆయన బయటికి వెళ్ళారు. మెసేజ్ తీసుకుంటానని చెప్పండి.",
      },
      options: ["Can I take a message?", "I can take a message?", "Can I take message?"],
      answer: 0,
      why: {
        en: "An offer starts with can before I; Telugu keeps the normal order and adds a question tone.",
        te: "ఇలా అడిగేటప్పుడు I కంటే ముందు can వస్తుంది; తెలుగులో వరుస మారదు, గొంతు మాత్రమే మారుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "indian-english",
      sentence: "The bank called today morning about your card.",
      wrongIndex: 3,
      fix: "The bank called this morning about your card.",
      why: {
        en: "English says this morning and this evening; today morning is a Telugu-style mix.",
        te: "ఇంగ్లీష్‌లో this morning, this evening అంటారు; today morning అనేది 'ఈ రోజు పొద్దున' నుంచి వచ్చిన మాట.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The electrician left a message for your neighbour Rani. He will come tomorrow at ten. Tell her.",
        te: "పక్కింటి రాణి గారి కోసం ఎలక్ట్రీషియన్ ఒక మెసేజ్ చెప్పి పెట్టారు. ఆయన రేపు పదింటికి వస్తారట. ఆవిడకి చెప్పండి.",
      },
      expected: [
        "The electrician said he would come tomorrow at ten.",
        "The electrician called. He said he would come tomorrow at ten.",
        "The electrician will come tomorrow at ten.",
      ],
      options: [
        "The electrician said he would come tomorrow at ten.",
        "The electrician said he would coming tomorrow at ten.",
        "The electrician told he would come tomorrow at ten.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your neighbour Gopal was out. The bank wants him to bring a photo. Tell him.",
        te: "పక్కింటి గోపాల్ గారు బయటికి వెళ్ళారు. ఒక ఫోటో తీసుకురమ్మని బ్యాంక్ వాళ్ళు అంటున్నారు. ఆయనకి చెప్పండి.",
      },
      expected: [
        "The bank asked you to bring a photo.",
        "The bank called. They asked you to bring a photo.",
        "The bank wants you to bring a photo.",
      ],
      options: ["The bank asked you to bring a photo.", "The bank asked you to bring photo.", "The bank asked you bring a photo."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Messages for a neighbour", te: "పక్కింటాయనకి మెసేజ్‌లు" },
    scene: {
      en: "Your neighbour Narayana was out all day. You took two messages for him. Now he is back.",
      te: "పక్కింటి నారాయణ గారు రోజంతా బయటే ఉన్నారు. ఆయన కోసం మీరు రెండు మెసేజ్‌లు తీసుకున్నారు. ఇప్పుడు ఆయన తిరిగి వచ్చారు.",
    },
    partner: { en: "Narayana (your neighbour)", te: "నారాయణ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "pass", label: { en: "Passing on messages", te: "మెసేజ్‌లు అందించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I was out all day. Did anyone call for me?",
        te: "హలో! రోజంతా నేను బయటే ఉన్నాను. నా కోసం ఎవరైనా ఫోన్ చేశారా?",
        hint: { en: "Say yes, and tell him who called and when.", te: "అవునని, ఎవరు, ఎప్పుడు ఫోన్ చేశారో చెప్పండి." },
        replies: [
          { say: "Yes, the bank called this morning, while you were out.", good: true, skill: "pass" },
          { say: "Yes, the bank called today morning, while you were out.", good: false, skill: "pass", fixIt: "indian-english" },
        ],
      },
      {
        partner: "The bank? What did they say?",
        te: "బ్యాంకా? వాళ్ళు ఏం చెప్పారు?",
        hint: { en: "Pass on their request about his passbook.", te: "ఆయన passbook గురించి వాళ్ళు అడిగింది చెప్పండి." },
        replies: [
          { say: "They asked you to bring your passbook tomorrow.", good: true, skill: "pass" },
          { say: "They asked you bring your passbook tomorrow.", good: false, skill: "pass" },
        ],
      },
      {
        partner: "Oh, I think it's for the KYC. Anything else?",
        te: "ఓ, KYC కోసం అనుకుంటా. ఇంకేమైనా ఉందా?",
        hint: { en: "Say the electrician called too, and pass on his promise about Thursday.", te: "ఎలక్ట్రీషియన్ కూడా ఫోన్ చేశారని చెప్పి, గురువారం గురించి ఆయన ఇచ్చిన మాట చెప్పండి." },
        replies: [
          { say: "Yes, the electrician said he would come on Thursday.", good: true, skill: "pass" },
          {
            say: "I'm not your secretary. Ask them yourself.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Sorry for the trouble. Thank you anyway.", te: "అయ్యో! ఇబ్బంది పెట్టినందుకు సారీ. ఏదేమైనా థాంక్స్." },
          },
        ],
      },
      {
        partner: "Thank you so much for taking these messages.",
        te: "ఈ మెసేజ్‌లు తీసుకున్నందుకు చాలా థాంక్స్.",
        hint: { en: "Say it was no trouble, and say good night.", te: "ఇబ్బందేమీ లేదని చెప్పి, గుడ్ నైట్ చెప్పండి." },
        replies: [
          { say: "It's no trouble at all. Good night!", good: true, skill: "polite" },
          { say: "It's not a trouble at all. Good night!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};
