import type { Lesson } from "../../types";

/**
 * Week 67, Day 1 (CURRICULUM §5): Checkpoint mix — travel bookings and plans (Week 55), announcements (Weeks 55–56) and
 * polite indirect questions at the counter (Week 58).
 */
export const day: Lesson = {
  id: "trips-and-enquiries-mix",
  kind: "lesson",
  title: { en: "Trips and Enquiries", te: "ప్రయాణాలు, ఎంక్వయిరీలు" },
  subtitle: "booking, announcements and polite questions",
  summary: {
    en: "Bring the travel weeks together: book a trip, follow an announcement and ask politely at the station.",
    te: "ప్రయాణాల వారాలన్నీ కలిపి చూద్దాం: ప్రయాణం బుక్ చేయడం, అనౌన్స్‌మెంట్ అర్థం చేసుకోవడం, స్టేషన్‌లో మర్యాదగా అడగడం.",
  },
  seo: {
    title: "Booking Trips and Asking at Stations in English for Telugu Speakers",
    description:
      "Say Could you tell me which platform it leaves from? and I'd like two tickets. A review lesson for Telugu speakers on trips and enquiries.",
  },
  pattern: [
    { text: "Could you tell me", role: "action" },
    { text: "which platform", role: "what" },
    { text: "the train", role: "who" },
    { text: "leaves from?", role: "action" },
  ],
  core: [
    { en: "We're taking the Godavari Express on Friday night.", te: "శుక్రవారం రాత్రి మేము గోదావరి ఎక్స్‌ప్రెస్‌లో వెళ్తున్నాం.", extra: ["in"] },
    {
      en: "Could you tell me which platform the Godavari Express leaves from?",
      te: "గోదావరి ఎక్స్‌ప్రెస్ ఏ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుందో చెప్తారా?",
      extra: ["does"],
    },
    { en: "Do you know if our tickets are confirmed?", te: "మా టికెట్లు కన్ఫర్మ్ అయ్యాయో లేదో మీకు తెలుసా?", extra: ["is"] },
    { en: "I'd like two tickets to Hyderabad for Friday.", te: "శుక్రవారానికి హైదరాబాద్‌కి రెండు టికెట్లు కావాలి.", extra: ["ticket"] },
    { en: "The train to Hyderabad will leave from platform six.", te: "హైదరాబాద్ వెళ్ళే రైలు ఆరో నంబర్ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది.", extra: ["on"] },
    { en: "Excuse me, do you know where the AC coaches stop?", te: "ఏమండీ, AC బోగీలు ఎక్కడ ఆగుతాయో మీకు తెలుసా?", extra: ["does"] },
    { en: "We're coming back on Monday, so I need a return ticket too.", te: "సోమవారం తిరిగి వస్తున్నాం, అందుకే రిటర్న్ టికెట్ కూడా కావాలి.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud one polite question you could ask at a station or bus stand: Could you tell me which platform …?",
    te: "స్టేషన్‌లో గానీ బస్ స్టాండ్‌లో గానీ అడగగలిగే ఒక మర్యాద ప్రశ్న గట్టిగా చెప్పండి: Could you tell me which platform …?",
  },
  words: [
    { en: "reservation counter", te: "రిజర్వేషన్ కౌంటర్" },
    { en: "boarding station", te: "రైలు ఎక్కే స్టేషన్" },
    { en: "AC coach", te: "AC బోగీ" },
    { en: "upper berth", te: "పై బెర్త్" },
    { en: "seat number", te: "సీటు నంబర్" },
  ],
  grammar: ["present-continuous", "indirect-tag-questions", "passive-voice", "will"],
  topics: ["travel", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Book, listen, ask", te: "బుక్ చేయడం, వినడం, అడగడం" },
      body: {
        en: "For a trip you have planned, use are with -ing: We're taking the train on Friday. To ask a stranger, start with Could you tell me or Do you know, then keep the normal order.",
        te: "ప్లాన్ చేసుకున్న ప్రయాణానికి are + -ing: We're taking the train on Friday. తెలియనివాళ్ళని అడిగేటప్పుడు Could you tell me / Do you know తో మొదలుపెట్టి, తర్వాత మామూలు వరుసే ఉంచండి.",
      },
      bridge: {
        te: ["గోదావరి ఎక్స్‌ప్రెస్", "ఏ ప్లాట్‌ఫామ్ నుంచి", "బయలుదేరుతుందో", "చెప్తారా?"],
        en: [
          { text: "Could you tell me", role: "action" },
          { text: "which platform", role: "what" },
          { text: "the Godavari Express", role: "who" },
          { text: "leaves from?", role: "action" },
        ],
      },
      examples: [
        { en: "We're taking the Godavari Express on Friday night.", te: "శుక్రవారం రాత్రి మేము గోదావరి ఎక్స్‌ప్రెస్‌లో వెళ్తున్నాం." },
        { en: "Could you tell me which platform the Godavari Express leaves from?", te: "గోదావరి ఎక్స్‌ప్రెస్ ఏ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుందో చెప్తారా?" },
        { en: "Do you know if our tickets are confirmed?", te: "మా టికెట్లు కన్ఫర్మ్ అయ్యాయో లేదో మీకు తెలుసా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which form for which job?", te: "ఏ పనికి ఏ రూపం?" },
      items: [
        {
          form: "We're + -ing",
          useFor: { en: "A trip you have already planned.", te: "ముందే ప్లాన్ చేసుకున్న ప్రయాణం." },
          example: { en: "We're taking the Godavari Express on Friday night.", te: "శుక్రవారం రాత్రి మేము గోదావరి ఎక్స్‌ప్రెస్‌లో వెళ్తున్నాం." },
        },
        {
          form: "I'd like …",
          useFor: { en: "Asking for tickets at the counter.", te: "కౌంటర్ దగ్గర టికెట్లు అడగడానికి." },
          example: { en: "I'd like two tickets to Hyderabad for Friday.", te: "శుక్రవారానికి హైదరాబాద్‌కి రెండు టికెట్లు కావాలి." },
        },
        {
          form: "Do you know where …?",
          useFor: { en: "A polite question to a stranger; the order stays normal.", te: "తెలియనివాళ్ళని మర్యాదగా అడగడానికి; వరుస మామూలుగానే." },
          example: { en: "Excuse me, do you know where the AC coaches stop?", te: "ఏమండీ, AC బోగీలు ఎక్కడ ఆగుతాయో మీకు తెలుసా?" },
        },
        {
          form: "will + verb",
          useFor: { en: "Announcements about what happens next.", te: "తర్వాత ఏం జరుగుతుందో చెప్పే అనౌన్స్‌మెంట్లు." },
          example: { en: "The train to Hyderabad will leave from platform six.", te: "హైదరాబాద్ వెళ్ళే రైలు ఆరో నంబర్ ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Could you tell me which platform does it leave from?",
      right: "Could you tell me which platform it leaves from?",
      why: {
        en: "After Could you tell me, drop does and keep the order of a normal sentence.",
        te: "Could you tell me తర్వాత does రాదు; మామూలు వాక్యం వరుసే ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We're leaving to Hyderabad on Friday.",
      right: "We're leaving for Hyderabad on Friday.",
      why: {
        en: "Leave takes for before the place you are going; Telugu హైదరాబాద్‌కి makes us say to.",
        te: "leave తర్వాత వెళ్ళే ఊరి ముందు for వస్తుంది; 'హైదరాబాద్‌కి' లోని 'కి' వల్ల to అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "At the reservation counter, ask for tickets to Hyderabad for you and your friend Ramana.",
        te: "రిజర్వేషన్ కౌంటర్ దగ్గర, మీకు, మీ స్నేహితుడు రమణ గారికి హైదరాబాద్ టికెట్లు అడగండి.",
      },
      options: ["I'd like two tickets to Hyderabad, please.", "I'd like two ticket to Hyderabad, please.", "Give two tickets to Hyderabad. Quickly."],
      answer: 0,
      why: {
        en: "Two or more tickets need an s, just as Telugu says టికెట్లు, not టికెట్.",
        te: "రెండు అంటే s కావాలి; తెలుగులో కూడా టికెట్ కాదు, టికెట్లు అంటాం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Do you know if the seats ___ booked?",
      te: "సీట్లు బుక్ అయ్యాయో లేదో మీకు తెలుసా?",
      options: ["are", "is", "does"],
      answer: 0,
      why: {
        en: "Seats is more than one, so the passive takes are, not is.",
        te: "seats ఒకటి కంటే ఎక్కువ, అందుకే is కాదు, are వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "IRCTC",
      lines: [
        "Ticket booked: Godavari Express",
        "From Rajahmundry to Hyderabad, Friday 14 March",
        "Coach B2, seat numbers 33 and 36",
        "Status: Confirmed",
        "Boarding station: Rajahmundry",
        "Please carry an ID card while travelling.",
      ],
      prompt: { en: "This SMS came after you booked. What must you take on the train?", te: "బుక్ చేశాక ఈ SMS వచ్చింది. రైల్లో మీ దగ్గర ఏం ఉండాలి?" },
      options: ["An ID card", "A printed ticket", "Two photographs"],
      answer: 0,
      why: {
        en: "The last line asks every passenger to carry an ID card.",
        te: "చివరి లైన్‌లో, ప్రతి ప్రయాణికుడి దగ్గర ID కార్డు ఉండాలని ఉంది.",
      },
      say: "Please carry an ID card while travelling.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The train to Hyderabad will leave from the platform six.",
      wrongIndex: 7,
      fix: "The train to Hyderabad will leave from platform six.",
      why: {
        en: "Platform with a number after it takes no the before it.",
        te: "ప్లాట్‌ఫామ్ తర్వాత నంబర్ ఉంటే, దాని ముందు the రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the station, you want to know where the AC coaches stop. Ask a railway staff member politely.",
        te: "స్టేషన్‌లో AC బోగీలు ఎక్కడ ఆగుతాయో తెలుసుకోవాలి. రైల్వే సిబ్బందిని మర్యాదగా అడగండి.",
      },
      expected: [
        "Excuse me, do you know where the AC coaches stop?",
        "Could you tell me where the AC coaches stop?",
        "Excuse me, where do the AC coaches stop?",
      ],
      options: [
        "Excuse me, do you know where the AC coaches stop?",
        "Excuse me, do you know where do the AC coaches stop?",
        "Tell me where the AC coaches stop.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your neighbour Geetha asks about your trip. Say you are leaving for Hyderabad on Friday night.",
        te: "మీ ప్రయాణం గురించి పక్కింటి గీత గారు అడుగుతున్నారు. శుక్రవారం రాత్రి హైదరాబాద్ బయలుదేరుతున్నామని చెప్పండి.",
      },
      expected: ["We're leaving for Hyderabad on Friday night.", "I'm leaving for Hyderabad on Friday night.", "We're going to Hyderabad on Friday night."],
      options: ["We're leaving for Hyderabad on Friday night.", "We're leaving to Hyderabad on Friday night.", "We leaving for Hyderabad on Friday night."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the reservation counter", te: "రిజర్వేషన్ కౌంటర్ దగ్గర" },
    scene: {
      en: "You are at the railway reservation counter in Rajahmundry. You and your friend Ramana want to go to Hyderabad on Friday.",
      te: "మీరు రాజమండ్రి రైల్వే రిజర్వేషన్ కౌంటర్ దగ్గర ఉన్నారు. మీరు, మీ స్నేహితుడు రమణ గారు శుక్రవారం హైదరాబాద్ వెళ్ళాలనుకుంటున్నారు.",
    },
    partner: { en: "Kumar (the booking clerk)", te: "కుమార్ (బుకింగ్ క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "book", label: { en: "Booking tickets", te: "టికెట్లు బుక్ చేయడం" } },
      { id: "ask", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Next, please. Where would you like to go?",
        te: "గుడ్ మార్నింగ్. తర్వాత ఎవరు? ఎక్కడికి వెళ్ళాలి?",
        hint: { en: "Greet him, and ask for tickets for two people to Hyderabad on Friday.", te: "పలకరించి, శుక్రవారం హైదరాబాద్‌కి ఇద్దరికి టికెట్లు అడగండి." },
        replies: [
          { say: "Good morning. I'd like two tickets to Hyderabad for Friday, please.", good: true, skill: "book" },
          {
            say: "Give me two tickets fast. I'm in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "Please be patient. Everyone in the line is waiting.", te: "కొంచెం ఓపిక పట్టండి. లైన్‌లో అందరూ ఎదురుచూస్తున్నారు." },
          },
        ],
      },
      {
        partner: "The Godavari Express has one lower berth and one upper berth left.",
        te: "గోదావరి ఎక్స్‌ప్రెస్‌లో ఒక లోయర్ బెర్త్, ఒక అప్పర్ బెర్త్ మిగిలి ఉన్నాయి.",
        hint: { en: "Say that is fine, and ask if both are in the same coach.", te: "సరేనని చెప్పి, రెండూ ఒకే బోగీలో ఉన్నాయా అని అడగండి." },
        replies: [
          { say: "That's fine. Are both berths in the same coach?", good: true, skill: "ask" },
          { say: "That's fine. Both berths are in same coach?", good: false, skill: "ask", fixIt: "article" },
        ],
      },
      {
        partner: "Yes, both are in coach B2. Your boarding station is Rajahmundry, right?",
        te: "అవును, రెండూ B2 బోగీలోనే. మీరు రాజమండ్రిలో ఎక్కుతారు, కదా?",
        hint: { en: "Say yes, and ask politely which platform the train goes from.", te: "అవునని చెప్పి, రైలు ఏ ప్లాట్‌ఫామ్ నుంచి వెళ్తుందో మర్యాదగా అడగండి." },
        replies: [
          { say: "Yes. Could you tell me which platform it leaves from?", good: true, skill: "ask" },
          { say: "Yes. Do you know which platform it leaves from?", good: true, skill: "ask" },
          { say: "Yes. Could you tell me which platform does it leave from?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "It's shown on the board an hour before. Here are your tickets.",
        te: "బయలుదేరడానికి గంట ముందు బోర్డు మీద చూపిస్తారు. ఇవిగోండి మీ టికెట్లు.",
        hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you very much. Have a good day.", good: true, skill: "polite" },
          { say: "Thank you. I'll check the board in Friday.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};
