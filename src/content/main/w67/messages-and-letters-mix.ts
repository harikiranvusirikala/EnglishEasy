import type { Lesson } from "../../types";

/**
 * Week 67, Day 2 (CURRICULUM §5): Checkpoint mix — passing on messages (Week 57), passive phrases in letters and notices
 * (Weeks 56, 63) and formal calls to offices (Week 62).
 */
export const day: Lesson = {
  id: "messages-and-letters-mix",
  kind: "lesson",
  title: { en: "Messages and Letters", te: "మెసేజ్‌లు, ఉత్తరాలు" },
  subtitle: "passing on, reading and calling offices",
  summary: {
    en: "Pass on what an office or a doctor said, understand a letter, and call the office politely about it.",
    te: "ఆఫీసు వాళ్ళో, డాక్టర్ గారో చెప్పింది ఇంకొకరికి చెప్పడం, ఉత్తరం అర్థం చేసుకోవడం, దాని గురించి ఆఫీసుకి మర్యాదగా ఫోన్ చేయడం.",
  },
  seo: {
    title: "Messages, Letters and Office Calls in English for Telugu Speakers",
    description:
      "Say The bank said the card would come by post and You are requested to bring two photographs. A review lesson for Telugu speakers.",
  },
  pattern: [
    { text: "The bank", role: "who" },
    { text: "said", role: "action" },
    { text: "the card would come by post", role: "what" },
  ],
  core: [
    { en: "The bank said the card would come by post.", te: "కార్డు పోస్టులో వస్తుందని బ్యాంక్ వాళ్ళు చెప్పారు.", extra: ["will"] },
    { en: "You are requested to bring two photographs.", te: "దయచేసి రెండు ఫోటోలు తీసుకురావాలి.", extra: ["photograph"] },
    { en: "The clerk told me to come back on Thursday.", te: "గురువారం మళ్ళీ రమ్మని క్లర్క్ గారు నాకు చెప్పారు.", extra: ["said"] },
    { en: "Could you possibly send me a copy by post?", te: "వీలైతే ఒక కాపీ పోస్టులో పంపిస్తారా?", extra: ["sending"] },
    { en: "The office will be closed on Monday for Ugadi.", te: "ఉగాది సందర్భంగా సోమవారం ఆఫీసు మూసి ఉంటుంది.", extra: ["close"] },
    { en: "Dr Usha said your report would be ready on Friday.", te: "మీ రిపోర్ట్ శుక్రవారం రెడీ అవుతుందని డాక్టర్ ఉష గారు చెప్పారు.", extra: ["will"] },
    { en: "I'm calling on behalf of my neighbour, Mrs Kamala.", te: "మా పక్కింటి కమల గారి తరఫున ఫోన్ చేస్తున్నాను.", extra: ["for"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find one letter, bill or notice at home. Tell someone in English what it asks you to do.",
    te: "ఇంట్లో ఉన్న ఒక ఉత్తరం, బిల్లు లేదా నోటీసు తీసుకోండి. అది మిమ్మల్ని ఏం చేయమంటోందో ఎవరికైనా ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "by post", te: "పోస్టులో" },
    { en: "passport-size", te: "పాస్‌పోర్ట్ సైజు" },
    { en: "postman", te: "పోస్ట్‌మ్యాన్" },
    { en: "speed post", te: "స్పీడ్ పోస్ట్" },
    { en: "envelope", te: "కవరు" },
  ],
  grammar: ["reported-speech", "passive-voice", "politeness-softening"],
  topics: ["offices", "bank", "phone", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Pass it on, read it, call", te: "చెప్పడం, చదవడం, ఫోన్ చేయడం" },
      body: {
        en: "To pass on a message, move the verb one step back: will becomes would. Letters say are requested and will be closed; on the phone, ask with Could you possibly …?",
        te: "ఒకరు చెప్పింది ఇంకొకరికి చెప్పేటప్పుడు verb ఒక అడుగు వెనక్కి: will → would. ఉత్తరాల్లో are requested, will be closed లాంటివి ఉంటాయి; ఫోన్‌లో Could you possibly …? అని అడగండి.",
      },
      bridge: {
        te: ["బ్యాంక్ వాళ్ళు", "కార్డు పోస్టులో వస్తుందని", "చెప్పారు"],
        en: [
          { text: "The bank", role: "who" },
          { text: "said", role: "action" },
          { text: "the card would come by post", role: "what" },
        ],
      },
      examples: [
        { en: "The bank said the card would come by post.", te: "కార్డు పోస్టులో వస్తుందని బ్యాంక్ వాళ్ళు చెప్పారు." },
        { en: "You are requested to bring two photographs.", te: "దయచేసి రెండు ఫోటోలు తీసుకురావాలి." },
        { en: "The clerk told me to come back on Thursday.", te: "గురువారం మళ్ళీ రమ్మని క్లర్క్ గారు నాకు చెప్పారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Four kinds of message", te: "నాలుగు రకాల మెసేజ్‌లు" },
      items: [
        {
          form: "said … would",
          useFor: { en: "Passing on what someone said.", te: "ఒకరు చెప్పింది ఇంకొకరికి చెప్పడానికి." },
          example: { en: "Dr Usha said your report would be ready on Friday.", te: "మీ రిపోర్ట్ శుక్రవారం రెడీ అవుతుందని డాక్టర్ ఉష గారు చెప్పారు." },
        },
        {
          form: "told me to …",
          useFor: { en: "Passing on what someone asked you to do.", te: "ఏం చేయమని చెప్పారో ఇంకొకరికి చెప్పడానికి." },
          example: { en: "The clerk told me to come back on Thursday.", te: "గురువారం మళ్ళీ రమ్మని క్లర్క్ గారు నాకు చెప్పారు." },
        },
        {
          form: "You are requested to …",
          useFor: { en: "Letters and notices: a polite order.", te: "ఉత్తరాల్లో, నోటీసుల్లో: మర్యాదగా చేయమని చెప్పడం." },
          example: { en: "You are requested to bring two photographs.", te: "దయచేసి రెండు ఫోటోలు తీసుకురావాలి." },
        },
        {
          form: "Could you possibly …?",
          useFor: { en: "A formal request on the phone.", te: "ఫోన్‌లో మర్యాదగా అడగడానికి." },
          example: { en: "Could you possibly send me a copy by post?", te: "వీలైతే ఒక కాపీ పోస్టులో పంపిస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "The clerk said me to come back on Thursday.",
      right: "The clerk told me to come back on Thursday.",
      why: {
        en: "Said never takes me straight after it; use told me, or said to me.",
        te: "said తర్వాత me నేరుగా రాదు; told me లేదా said to me అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Kindly do the needful and send the card.",
      right: "Could you please send the card?",
      why: {
        en: "Do the needful is old office English; say clearly and politely what you need.",
        te: "do the needful పాత ఆఫీసు ఇంగ్లీష్; మీకు ఏం కావాలో స్పష్టంగా, మర్యాదగా చెప్పండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A notice says the office shuts on Monday for Ugadi. Read it out to your friend Swapna.",
        te: "ఉగాదికి సోమవారం ఆఫీసు మూసేస్తారని నోటీసులో ఉంది. మీ స్నేహితురాలు స్వప్న గారికి చదివి చెప్పండి.",
      },
      options: [
        "The office will be closed on Monday for Ugadi.",
        "The office will closed on Monday for Ugadi.",
        "The office will be close on Monday for Ugadi.",
      ],
      answer: 0,
      why: {
        en: "Notices use will be with the -ed form; Telugu has no word for be, so we drop it.",
        te: "నోటీసుల్లో will be తర్వాత -ed form వస్తుంది; తెలుగులో be లాంటి పదం లేదు, అందుకే వదిలేస్తాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "You are requested ___ a self-attested copy of your Aadhaar.",
      te: "దయచేసి మీ ఆధార్ జిరాక్స్ మీద మీరే సంతకం చేసి ఇవ్వాలి.",
      options: ["to submit", "submit", "submitting"],
      answer: 0,
      why: {
        en: "After are requested, the action takes to, just like asked me to.",
        te: "are requested తర్వాత to + verb వస్తుంది, asked me to లాగానే.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "letter",
      heading: "Canara Bank, Main Road Branch, Guntur",
      lines: [
        "Dear Customer,",
        "Your new debit card will be sent to you by speed post.",
        "It will reach your address within ten working days.",
        "Please sign for it when the postman brings it.",
        "Your PIN will come in a separate envelope.",
        "Please do not share your PIN or OTP with anyone.",
        "Bank staff will never ask for them on the phone.",
        "If the card does not come, please visit the branch with your passbook.",
        "Branch Manager",
      ],
      questions: [
        {
          prompt: { en: "How will the new card come?", te: "కొత్త కార్డు ఎలా వస్తుంది?" },
          options: ["By speed post", "By email", "Only from the branch"],
          answer: 0,
          why: {
            en: "The second line says the bank will send it to your address.",
            te: "బ్యాంక్ దాన్ని మీ అడ్రస్‌కి పంపిస్తుందని రెండో లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "What will bank staff never ask for on the phone?", te: "బ్యాంక్ సిబ్బంది ఫోన్‌లో ఎప్పుడూ ఏం అడగరు?" },
          options: ["Your PIN or OTP", "Your address", "Your name"],
          answer: 0,
          why: {
            en: "A real bank never asks for these secret numbers, and the letter says so.",
            te: "నిజమైన బ్యాంక్ ఈ రహస్య నంబర్లు ఎప్పుడూ అడగదు; ఉత్తరంలో కూడా అదే ఉంది.",
          },
        },
        {
          prompt: { en: "What should you do if the card does not come?", te: "కార్డు రాకపోతే ఏం చేయాలి?" },
          options: ["Visit the branch with your passbook", "Call the number in an SMS", "Wait for one more year"],
          answer: 0,
          why: {
            en: "The eighth line tells you to go to the branch yourself, taking the passbook along.",
            te: "ఎనిమిదో లైన్‌లో, పాస్‌బుక్ తీసుకుని మీరే బ్రాంచ్‌కి వెళ్ళమని ఉంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "The bank said the card would come in post.",
      wrongIndex: 7,
      fix: "The bank said the card would come by post.",
      why: {
        en: "Things come by post in English; Telugu పోస్టులో makes us say in.",
        te: "ఇంగ్లీష్‌లో by post అంటాం; తెలుగు 'పోస్టులో' వల్ల in అనేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "You are on the phone with the bank. Ask politely if they could send you a copy of the letter by post.",
        te: "బ్యాంక్‌కి ఫోన్ చేశారు. ఉత్తరం కాపీ పోస్టులో పంపిస్తారా అని మర్యాదగా అడగండి.",
      },
      expected: [
        "Could you possibly send me a copy by post?",
        "Could you please send me a copy by post?",
        "Could you send me a copy of the letter by post, please?",
      ],
      options: ["Could you possibly send me a copy by post?", "Kindly do the needful and send a copy.", "Could you possibly sending me a copy by post?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "The electricity office called for your neighbour Rahim while he was out. Tell him they want him to bring his old bill.",
        te: "పక్కింటి రహీమ్ గారు బయటికి వెళ్ళినప్పుడు కరెంట్ ఆఫీసు నుంచి ఫోన్ వచ్చింది. పాత బిల్లు తీసుకురమ్మన్నారని ఆయనకి చెప్పండి.",
      },
      expected: [
        "The electricity office asked you to bring your old bill.",
        "They asked you to bring your old bill.",
        "They said you should bring your old bill.",
      ],
      options: ["They asked you to bring your old bill.", "They asked to you to bring your old bill.", "They asked you bring your old bill."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call about a letter", te: "ఒక ఉత్తరం గురించి ఫోన్" },
    scene: {
      en: "You read a gas agency letter to your neighbour Kamala and explained it. Now you call the agency for her.",
      te: "గ్యాస్ ఏజెన్సీ నుంచి వచ్చిన ఉత్తరం పక్కింటి కమల గారికి చదివి వివరించారు. ఇప్పుడు ఆవిడ తరఫున ఏజెన్సీకి ఫోన్ చేస్తున్నారు.",
    },
    partner: { en: "Ayesha (at the gas agency)", te: "ఆయేషా (గ్యాస్ ఏజెన్సీలో)" },
    skills: [
      { id: "call", label: { en: "A formal call", te: "మర్యాదగా ఫోన్ చేయడం" } },
      { id: "pass", label: { en: "Passing on a message", te: "మెసేజ్ చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, Sri Sai Gas Agency. How can I help you?",
        te: "గుడ్ మార్నింగ్, శ్రీ సాయి గ్యాస్ ఏజెన్సీ. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her, and say you are calling for your neighbour.", te: "పలకరించి, మీ పక్కింటివారి తరఫున ఫోన్ చేస్తున్నారని చెప్పండి." },
        replies: [
          { say: "Good morning. I'm calling on behalf of my neighbour, Mrs Kamala.", good: true, skill: "call" },
          { say: "Myself Sai. I am calling for my neighbour Kamala.", good: false, skill: "call", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Okay. How can I help her?",
        te: "సరే. ఆవిడకి ఏం సహాయం కావాలి?",
        hint: { en: "Say her letter asks her to bring two photographs, and ask why.", te: "రెండు ఫోటోలు తీసుకురమ్మని ఆవిడ ఉత్తరంలో ఉందని చెప్పి, ఎందుకో అడగండి." },
        replies: [
          { say: "Her letter asks her to bring two photographs. Could you tell me why?", good: true, skill: "pass" },
          { say: "Her letter says she requested to bring two photographs. Why?", good: false, skill: "pass", fixIt: "be" },
        ],
      },
      {
        partner: "It's for the yearly KYC check. They must be passport-size photos.",
        te: "ఏడాదికోసారి చేసే KYC చెక్ కోసం. పాస్‌పోర్ట్ సైజు ఫోటోలే తీసుకురావాలి.",
        hint: { en: "Ask politely if she can come next Monday.", te: "ఆవిడ వచ్చే సోమవారం రావొచ్చా అని మర్యాదగా అడగండి." },
        replies: [
          { say: "I see. Is it OK if she comes next Monday?", good: true, skill: "call" },
          { say: "I see. Could she possibly come next Monday?", good: true, skill: "call" },
          {
            say: "So many papers? This is a big headache.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, these are the rules. It takes only five minutes.", te: "సారీ అండీ, ఇవి రూల్స్. ఐదు నిమిషాలే పడుతుంది." },
          },
        ],
      },
      {
        partner: "Monday is fine. The office is open from ten to five.",
        te: "సోమవారం పర్వాలేదు. ఆఫీసు పది నుంచి ఐదు దాకా తెరిచి ఉంటుంది.",
        hint: { en: "Thank her, say you will pass it on, and end the call.", te: "థాంక్స్ చెప్పి, ఆవిడకి చెప్తానని చెప్పి, ఫోన్ ముగించండి." },
        replies: [
          { say: "Thank you. I'll tell her. Have a nice day.", good: true, skill: "polite" },
          { say: "Thank you. I'll say her. Have a nice day.", good: false, skill: "pass", fixIt: "preposition" },
        ],
      },
    ],
  },
};
