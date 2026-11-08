import type { Bi, Day } from "./types";

/** The course map (BUILD_PLAN A4). Only released weeks list their days. "Day N" is computed from position, never stored. */

export type DayRef = { id: string; kind: Day["kind"]; title: Bi };
export type Week = { n: number; title: Bi; released: boolean; days: DayRef[] }; // days empty until released
export type Stage = { n: number; title: Bi; canDo: Bi; firstWeek: number; lastWeek: number; weeks: Week[] };
export type Track = { id: "grandchildren" | "abroad"; title: Bi; forWho: Bi; offerAtWeek: 13; weeks: Week[] };

type T = [en: string, te: string];

const bi = ([en, te]: T): Bi => ({ en, te });
const week = (n: number, t: T): Week => ({ n, title: bi(t), released: false, days: [] });
const weeks = (first: number, titles: T[]): Week[] => titles.map((t, i) => week(first + i, t));

// Week 1 (CURRICULUM §3). Day 7 is the weekly review. Day files are registered in `load.ts` as they are written.
const week1Days: DayRef[] = [
  { id: "sentence-basics", kind: "lesson", title: { en: "Who Does What", te: "వాక్య నిర్మాణం" } },
  { id: "i-am-you-are", kind: "lesson", title: { en: "I Am, You Are", te: "నేను, మీరు" } },
  { id: "present-simple-every-day", kind: "lesson", title: { en: "Every Day", te: "రోజూ" } },
  { id: "present-continuous-right-now", kind: "lesson", title: { en: "Right Now", te: "ఇప్పుడు" } },
  { id: "past-simple-yesterday", kind: "lesson", title: { en: "Yesterday", te: "నిన్న" } },
  { id: "future-will-tomorrow", kind: "lesson", title: { en: "Tomorrow", te: "రేపు" } },
  { id: "w1-review", kind: "review", title: { en: "My Day", te: "నా రోజు" } },
];

// Week 2 (CURRICULUM §3): the question words, a Conversation Day and the review.
const week2Days: DayRef[] = [
  { id: "what-and-where", kind: "lesson", title: { en: "What & Where", te: "ఏమిటి, ఎక్కడ" } },
  { id: "when-and-what-time", kind: "lesson", title: { en: "When & What Time", te: "ఎప్పుడు, ఎన్ని గంటలకు" } },
  { id: "who-and-whose", kind: "lesson", title: { en: "Who & Whose", te: "ఎవరు, ఎవరిది" } },
  { id: "how-questions", kind: "lesson", title: { en: "How Questions", te: "ఎలా, ఎంత" } },
  { id: "why-and-because", kind: "lesson", title: { en: "Why & Because", te: "ఎందుకు, ఎందుకంటే" } },
  { id: "w2-conversation", kind: "conversation", title: { en: "Meeting Someone at a Wedding", te: "పెళ్లిలో పరిచయం" } },
  { id: "w2-review", kind: "review", title: { en: "Question Time", te: "ప్రశ్నల సమయం" } },
];

const stage1Weeks: Week[] = [
  { ...week(1, ["English Foundations", "ఇంగ్లీష్ పునాది"]), released: true, days: week1Days },
  { ...week(2, ["Asking Questions", "ప్రశ్నలు అడగడం"]), released: true, days: week2Days },
  ...weeks(3, [
    ["Numbers, Time & Money", "సంఖ్యలు, సమయం, డబ్బు"],
    ["People", "మనుషులు"],
    ["My Home", "నా ఇల్లు"],
    ["Food & Cooking", "ఆహారం, వంట"],
    ["My Daily Routine", "నా దినచర్య"],
    ["Can & Asking for Help", "సహాయం అడగడం"],
    ["Yesterday & Last Week", "నిన్న, పోయిన వారం"],
    ["Plans & Future", "ప్రణాళికలు"],
    ["Feelings & Health", "భావాలు, ఆరోగ్యం"],
    ["Putting It Together", "అన్నీ కలిపి"],
  ]),
];

const stage2Weeks = weeks(13, [
  ["Shopping at the Market", "మార్కెట్‌లో షాపింగ్"],
  ["Shops & Supermarket", "షాపులు, సూపర్ మార్కెట్"],
  ["Clothes & Colours", "బట్టలు, రంగులు"],
  ["Restaurant & Eating Out", "హోటల్‌లో భోజనం"],
  ["Getting Around Town", "ఊరిలో తిరగడం"],
  ["Buses, Trains & Autos", "బస్సులు, రైళ్లు, ఆటోలు"],
  ["Phone Calls", "ఫోన్ కాల్స్"],
  ["What Were You Doing?", "మీరు ఏం చేస్తున్నారు?"],
  ["At the Doctor", "డాక్టర్ దగ్గర"],
  ["Pharmacy & Medicines", "మందుల షాపు, మందులు"],
  ["Weather & Seasons", "వాతావరణం, కాలాలు"],
  ["Festivals & Celebrations", "పండుగలు, వేడుకలు"],
  ["Neighbours & Community", "ఇరుగు పొరుగు, సమాజం"],
  ["At the Bank", "బ్యాంక్‌లో"],
  ["Offices & Forms", "ఆఫీసులు, ఫారాలు"],
  ["Customer Care Calls", "కస్టమర్ కేర్ కాల్స్"],
  ["Have You Ever …?", "మీరు ఎప్పుడైనా …?"],
  ["Just, Already, Yet", "ఇప్పుడే, ఇప్పటికే, ఇంకా"],
  ["Repairs at Home", "ఇంట్లో రిపేర్లు"],
  ["Recipes & Kitchen", "వంటకాలు, వంటగది"],
  ["Free Time & Hobbies", "ఖాళీ సమయం, అభిరుచులు"],
  ["Describing Places", "ప్రదేశాల వర్ణన"],
  ["Describing People & Character", "మనుషులు, స్వభావం"],
  ["Rules & Advice", "నియమాలు, సలహాలు"],
  ["Making Plans with Friends", "స్నేహితులతో ప్లాన్లు"],
  ["Sorry & Thank You", "క్షమించండి, ధన్యవాదాలు"],
  ["Phone & Apps", "ఫోన్, యాప్‌లు"],
  ["Everyday Life Review", "రోజువారీ జీవితం పునశ్చరణ"],
]);

const stage3Weeks = weeks(41, [
  ["Telling a Story", "కథ చెప్పడం"],
  ["When I Was Young", "నేను చిన్నప్పుడు"],
  ["My Life Story", "నా జీవిత కథ"],
  ["Giving Opinions", "అభిప్రాయాలు చెప్పడం"],
  ["Comparing & Choosing", "పోల్చడం, ఎంచుకోవడం"],
  ["If It Rains …", "వర్షం పడితే …"],
  ["Explaining Problems", "సమస్యలు వివరించడం"],
  ["Making a Complaint", "ఫిర్యాదు చేయడం"],
  ["Formal Requests", "మర్యాదపూర్వక అభ్యర్థనలు"],
  ["I Have Been Waiting", "నేను ఎదురు చూస్తున్నాను"],
  ["Health in Depth", "ఆరోగ్యం వివరంగా"],
  ["Hospital & Emergencies", "ఆసుపత్రి, అత్యవసరాలు"],
  ["Travel in India", "భారతదేశంలో ప్రయాణం"],
  ["It Is Made in …", "ఇది … లో తయారైంది"],
  ["He Said That …", "అతను అన్నాడు …"],
  ["Can You Tell Me Where …?", "… ఎక్కడో చెప్పగలరా?"],
  ["The Man Who …", "ఎవరైతే … ఆ మనిషి"],
  ["Money & Prices", "డబ్బు, ధరలు"],
  ["News Headlines", "వార్తా శీర్షికలు"],
  ["If I Were …", "నేను … అయితే"],
  ["Wishes & Regrets", "కోరికలు, పశ్చాత్తాపాలు"],
  ["How Things Work", "వస్తువులు ఎలా పనిచేస్తాయి"],
  ["Things Have Changed", "అన్నీ మారిపోయాయి"],
  ["Maybe, Probably, Definitely", "బహుశా, తప్పకుండా"],
  ["It Must Be …", "అది … అయి ఉంటుంది"],
  ["Social Occasions", "శుభకార్యాలు, సామాజిక సందర్భాలు"],
  ["Hosting Guests", "అతిథులను ఆహ్వానించడం"],
  ["Phrasal Verbs I", "Phrasal Verbs – భాగం 1"],
  ["Phrasal Verbs II", "Phrasal Verbs – భాగం 2"],
  ["Want to or Enjoy -ing?", "Want to లేదా Enjoy -ing?"],
  ["Neighbourhood Problems", "ఇరుగు పొరుగు సమస్యలు"],
  ["Staying Safe from Scams", "మోసాల నుండి జాగ్రత్త"],
  ["Online Shopping & Deliveries", "ఆన్‌లైన్ షాపింగ్, డెలివరీలు"],
  ["Healthy Habits", "ఆరోగ్యకరమైన అలవాట్లు"],
  ["Old Memories", "పాత జ్ఞాపకాలు"],
  ["Isn't It? So Do I", "అవును కదా? నేనూ అంతే"],
  ["Bored or Boring?", "Bored లేదా Boring?"],
  ["Persuading Gently", "మృదువుగా ఒప్పించడం"],
  ["Calling Offices", "ఆఫీసులకు ఫోన్ చేయడం"],
  ["Confident Conversations Review", "ధైర్యంగా మాట్లాడటం పునశ్చరణ"],
]);

const stage4Weeks = weeks(81, [
  ["Present Tenses in Real Talk", "మాటల్లో వర్తమాన కాలాలు"],
  ["The Train Had Left", "రైలు వెళ్లిపోయింది"],
  ["Telling Longer Stories", "పెద్ద కథలు చెప్పడం"],
  ["If I Had Known …", "నాకు తెలిసి ఉంటే …"],
  ["Unless & In Case", "Unless, In Case అంటే"],
  ["She Asked Me …", "ఆమె నన్ను అడిగింది …"],
  ["Passive in All Tenses", "అన్ని కాలాల్లో Passive"],
  ["I Got It Repaired", "నేను రిపేర్ చేయించాను"],
  ["Everyday Idioms I", "రోజువారీ Idioms I"],
  ["Everyday Idioms II", "రోజువారీ Idioms II"],
  ["Make or Do?", "Make లేదా Do?"],
  ["Phrasal Verbs III", "Phrasal Verbs – భాగం 3"],
  ["Health Systems & Insurance", "ఆరోగ్య సేవలు, ఇన్సూరెన్స్"],
  ["Making Decisions Together", "కలిసి నిర్ణయాలు తీసుకోవడం"],
  ["News & Society", "వార్తలు, సమాజం"],
  ["Although, However", "Although, However వాడకం"],
  ["Explaining Traditions", "సంప్రదాయాలు వివరించడం"],
  ["Indian Food & Culture", "భారతీయ ఆహారం, సంస్కృతి"],
  ["Travel Experiences", "ప్రయాణ అనుభవాలు"],
  ["Week 100 Celebration", "100వ వారం వేడుక"],
  ["Listening to Longer Talks", "పెద్ద ప్రసంగాలు వినడం"],
  ["Speaking for One Minute", "ఒక నిమిషం మాట్లాడటం"],
  ["Formal or Informal?", "Formal లేదా Informal?"],
  ["Saying No Nicely", "మర్యాదగా కాదు అనడం"],
  ["Bargaining & Negotiating", "బేరం ఆడటం, చర్చించడం"],
  ["Solving Problems Together", "కలిసి సమస్యలు పరిష్కరించడం"],
  ["Describing Pictures", "చిత్రాలను వర్ణించడం"],
  ["Should Have, Could Have", "Should Have, Could Have వాడకం"],
  ["This Time Tomorrow", "రేపు ఈ సమయానికి"],
  ["Hope or Wish?", "Hope లేదా Wish?"],
  ["A Few, A Little", "A Few, A Little తేడా"],
  ["Articles Again", "Articles మళ్లీ"],
  ["In, On, At Again", "In, On, At మళ్లీ"],
  ["Clear Sounds", "స్పష్టమైన ఉచ్చారణ"],
  ["Tone of Voice", "స్వరం, ధోరణి"],
  ["Better Phone & Video Calls", "మెరుగైన ఫోన్, వీడియో కాల్స్"],
  ["Small Talk & Humour", "చిన్న మాటలు, హాస్యం"],
  ["Technology & Change", "టెక్నాలజీ, మార్పు"],
  ["Sharing Experience", "అనుభవాన్ని పంచుకోవడం"],
  ["Fluent Everyday Review", "సులభంగా ఇంగ్లీష్ పునశ్చరణ"],
]);

const stage5Weeks = weeks(121, [
  ["Natural Replies", "సహజమైన జవాబులు"],
  ["Thinking Time", "ఆలోచించే సమయం"],
  ["Softening", "మృదువుగా చెప్పడం"],
  ["Emphasis", "ఒత్తి చెప్పడం"],
  ["Phrasal Verbs IV", "Phrasal Verbs – భాగం 4"],
  ["Idioms About Feelings", "భావాల Idioms"],
  ["Storytelling", "కథ చెప్పే కళ"],
  ["Vivid Descriptions", "స్పష్టమైన వర్ణనలు"],
  ["Pros & Cons", "లాభాలు, నష్టాలు"],
  ["Disagreeing Diplomatically", "మర్యాదగా విభేదించడం"],
  ["What Would You Do?", "మీరైతే ఏం చేస్తారు?"],
  ["A Short Speech", "చిన్న ప్రసంగం"],
  ["Blessings & Toasts", "ఆశీస్సులు, శుభాకాంక్షలు"],
  ["Fast Natural Speech", "వేగమైన సహజ మాటలు"],
  ["Different Accents", "వేర్వేరు యాసలు"],
  ["What I Mean Is …", "నేను చెప్పేది …"],
  ["Recommending", "సిఫార్సు చేయడం"],
  ["Values & Life Lessons", "విలువలు, జీవిత పాఠాలు"],
  ["Memories", "జ్ఞాపకాలు"],
  ["Following the News", "వార్తలను అనుసరించడం"],
  ["Understanding Doctors", "డాక్టర్లను అర్థం చేసుకోవడం"],
  ["Pensions & Savings", "పెన్షన్లు, పొదుపులు"],
  ["Official Letters & Notices", "అధికారిక లేఖలు, నోటీసులు"],
  ["Community & Volunteering", "సమాజం, స్వచ్ఛంద సేవ"],
  ["Teaching Others", "ఇతరులకు నేర్పడం"],
  ["Don't You Think …?", "మీకు అనిపించడం లేదా …?"],
  ["Building Words", "పదాలను నిర్మించడం"],
  ["Confusing Pairs", "గందరగోళపరిచే జతలు"],
  ["Indian English Habits", "భారతీయ ఇంగ్లీష్ అలవాట్లు"],
  ["Grand Review & Celebration", "గొప్ప పునశ్చరణ, వేడుక"],
]);

export const course: { stages: Stage[]; tracks: Track[] } = {
  stages: [
    {
      n: 1,
      title: { en: "Foundations", te: "పునాది" },
      canDo: {
        en: "Make simple sentences in the main tenses, ask and answer questions, and handle numbers, time, money, people, home, food, routines, plans and simple health talk.",
        te: "ముఖ్యమైన కాలాల్లో సులభమైన వాక్యాలు చెప్పగలరు, ప్రశ్నలు అడగగలరు, జవాబులు ఇవ్వగలరు; సంఖ్యలు, సమయం, డబ్బు, మనుషులు, ఇల్లు, ఆహారం, దినచర్య, ప్రణాళికలు, ఆరోగ్యం గురించి మాట్లాడగలరు.",
      },
      firstWeek: 1,
      lastWeek: 12,
      weeks: stage1Weeks,
    },
    {
      n: 2,
      title: { en: "Everyday Life", te: "రోజువారీ జీవితం" },
      canDo: {
        en: "Shop, eat out, get around, use transport and the phone, see a doctor and pharmacist, deal with the bank, offices and customer care, talk to neighbours, describe people, places and experiences, make plans and apologise.",
        te: "షాపింగ్, హోటల్, ప్రయాణం, ఫోన్, డాక్టర్, మందుల షాపు, బ్యాంక్, ఆఫీసులు, కస్టమర్ కేర్, ఇరుగు పొరుగు వారితో మాటలు; మనుషులు, ప్రదేశాలు, అనుభవాలను వర్ణించడం; ప్లాన్లు వేయడం, క్షమాపణ చెప్పడం.",
      },
      firstWeek: 13,
      lastWeek: 40,
      weeks: stage2Weeks,
    },
    {
      n: 3,
      title: { en: "Confident Conversations", te: "ధైర్యంగా మాట్లాడటం" },
      canDo: {
        en: "Tell what happened, describe your life, give opinions and reasons, solve problems and complain politely, handle officials, hospitals and travel, and understand short stories and dialogues.",
        te: "ఏం జరిగిందో చెప్పగలరు, మీ జీవితాన్ని వర్ణించగలరు, అభిప్రాయాలు, కారణాలు చెప్పగలరు, మర్యాదగా ఫిర్యాదు చేయగలరు, అధికారులు, ఆసుపత్రులు, ప్రయాణాలతో వ్యవహరించగలరు, చిన్న కథలు, సంభాషణలు అర్థం చేసుకోగలరు.",
      },
      firstWeek: 41,
      lastWeek: 80,
      weeks: stage3Weeks,
    },
    {
      n: 4,
      title: { en: "Fluent Everyday English", te: "సులభంగా ఇంగ్లీష్" },
      canDo: {
        en: "Hold longer conversations, tell detailed stories, follow announcements, news and talks, use common phrasal verbs, idioms and linking words, and choose formal or informal English.",
        te: "పెద్ద సంభాషణలు చేయగలరు, వివరంగా కథలు చెప్పగలరు, ప్రకటనలు, వార్తలు, ప్రసంగాలు అర్థం చేసుకోగలరు, phrasal verbs, idioms, linking words వాడగలరు, formal లేదా informal ఇంగ్లీష్ ఎంచుకోగలరు.",
      },
      firstWeek: 81,
      lastWeek: 120,
      weeks: stage4Weeks,
    },
    {
      n: 5,
      title: { en: "Natural English", te: "సహజమైన ఇంగ్లీష్" },
      canDo: {
        en: "Sound natural and polite in any situation, soften and emphasise, tell engaging stories, discuss and persuade, give a short speech, and understand fast natural speech and different accents.",
        te: "ఏ సందర్భంలోనైనా సహజంగా, మర్యాదగా మాట్లాడగలరు, మృదువుగా లేదా ఒత్తి చెప్పగలరు, ఆసక్తికరమైన కథలు చెప్పగలరు, చర్చించగలరు, ఒప్పించగలరు, చిన్న ప్రసంగం చేయగలరు, వేగమైన మాటలను, వేర్వేరు యాసలను అర్థం చేసుకోగలరు.",
      },
      firstWeek: 121,
      lastWeek: 150,
      weeks: stage5Weeks,
    },
  ],
  tracks: [
    {
      id: "grandchildren",
      title: { en: "Talking with Grandchildren", te: "మనవళ్లతో మాట్లాడటం" },
      forWho: {
        en: "For learners who want to chat with their grandchildren in English.",
        te: "మనవళ్లతో ఇంగ్లీష్‌లో మాట్లాడాలనుకునే వారికి.",
      },
      offerAtWeek: 13,
      weeks: weeks(1, [
        ["Hello & Video Calls", "హలో, వీడియో కాల్స్"],
        ["Playing Together", "కలిసి ఆడుకోవడం"],
        ["School Talk", "స్కూల్ కబుర్లు"],
        ["Mealtime", "భోజన సమయం"],
        ["Telling Stories", "కథలు చెప్పడం"],
        ["Praise & Care", "మెచ్చుకోలు, జాగ్రత్త"],
        ["Festivals & Traditions for Kids", "పిల్లల కోసం పండుగలు, సంప్రదాయాలు"],
        ["Their World & Review", "వాళ్ల ప్రపంచం, పునశ్చరణ"],
      ]),
    },
    {
      id: "abroad",
      title: { en: "Visiting Family Abroad", te: "విదేశాల్లో కుటుంబాన్ని కలవడం" },
      forWho: {
        en: "For learners who plan to visit family in another country.",
        te: "విదేశాల్లో ఉన్న కుటుంబాన్ని కలవడానికి వెళ్లాలనుకునే వారికి.",
      },
      offerAtWeek: 13,
      weeks: weeks(1, [
        ["Getting Ready", "సిద్ధమవడం"],
        ["Airport Check-in & Security", "ఎయిర్‌పోర్ట్ చెక్-ఇన్, సెక్యూరిటీ"],
        ["On the Flight", "విమానంలో"],
        ["Immigration & Customs", "ఇమ్మిగ్రేషన్, కస్టమ్స్"],
        ["First Days There", "అక్కడ మొదటి రోజులు"],
        ["Supermarket Abroad", "విదేశంలో సూపర్ మార్కెట్"],
        ["Doctor & Pharmacy Abroad", "విదేశంలో డాక్టర్, మందుల షాపు"],
        ["Small Talk with Neighbours", "ఇరుగు పొరుగుతో చిన్న మాటలు"],
        ["Temple & Community Abroad", "విదేశంలో గుడి, సమాజం"],
        ["Phone, Money & Safety", "ఫోన్, డబ్బు, భద్రత"],
        ["Sightseeing", "చూడదగిన ప్రదేశాలు"],
        ["Going Home & Review", "ఇంటికి తిరిగి, పునశ్చరణ"],
      ]),
    },
  ],
};

/** Main-path weeks in course order. */
export function mainWeeks(): Week[] {
  return course.stages.flatMap((s) => s.weeks);
}

/**
 * Every day ref of the released weeks (main path then tracks), in course order, with its week, stage (`null` for tracks)
 * and lane (`"main"` or the track id; "earlier lessons" are always taken from the same lane).
 */
export function releasedDayRefs(): { ref: DayRef; week: Week; stage: number | null; lane: string }[] {
  const main = course.stages.flatMap((s) => s.weeks.map((w) => ({ w, stage: s.n as number | null, lane: "main" })));
  const tracks = course.tracks.flatMap((t) => t.weeks.map((w) => ({ w, stage: null as number | null, lane: t.id as string })));
  return [...main, ...tracks].flatMap(({ w, stage, lane }) => w.days.map((ref) => ({ ref, week: w, stage, lane })));
}

/** A day's place in the course: "Day N" is computed from its week and position, never stored. `null` if the id is unknown. */
export function findDay(id: string): { ref: DayRef; week: Week; lane: string; number: number } | null {
  for (const { ref, week, lane } of releasedDayRefs()) {
    if (ref.id === id) return { ref, week, lane, number: (week.n - 1) * 7 + week.days.indexOf(ref) + 1 };
  }
  return null;
}

/** The day after this one in the same lane (main path or a track), or `null` at the end of what is released. */
export function dayAfter(id: string): { ref: DayRef; number: number } | null {
  const here = findDay(id);
  if (!here) return null;
  const lane = releasedDayRefs().filter((d) => d.lane === here.lane);
  const i = lane.findIndex((d) => d.ref.id === id);
  const next = lane[i + 1];
  return next ? { ref: next.ref, number: (next.week.n - 1) * 7 + next.week.days.indexOf(next.ref) + 1 } : null;
}
