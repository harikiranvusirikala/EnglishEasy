import type { Bi, Day } from "./types";

/** The course map (BUILD_PLAN A4). Only released weeks list their days. "Day N" is computed from position, never stored. */

export type DayRef = { id: string; kind: Day["kind"]; title: Bi };
export type Week = { n: number; title: Bi; released: boolean; days: DayRef[] }; // days empty until released
export type Stage = { n: number; title: Bi; canDo: Bi /* the stage-end checkpoint (CURRICULUM §2b) */; firstWeek: number; lastWeek: number; weeks: Week[] };
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
  { id: "what-and-where", kind: "lesson", title: { en: "What, Where & Who", te: "ఏంటి, ఎక్కడ, ఎవరు" } },
  { id: "when-and-what-time", kind: "lesson", title: { en: "When & What Time", te: "ఎప్పుడు, ఎన్ని గంటలకు" } },
  { id: "sorry-can-you-repeat", kind: "lesson", title: { en: "Sorry? Say It Again", te: "అర్థం కాకపోతే" } },
  { id: "how-questions", kind: "lesson", title: { en: "How Questions", te: "ఎలా, ఎంత" } },
  { id: "why-and-because", kind: "lesson", title: { en: "Why & Because", te: "ఎందుకు, ఎందుకంటే" } },
  { id: "w2-conversation", kind: "conversation", title: { en: "Meeting Someone at a Wedding", te: "పెళ్లిలో పరిచయం" } },
  { id: "w2-review", kind: "review", title: { en: "Question Time", te: "ప్రశ్నల సమయం" } },
];

// Week 3 (CURRICULUM §3).
const week3Days: DayRef[] = [
  { id: "numbers-and-counting", kind: "lesson", title: { en: "Numbers", te: "సంఖ్యలు" } },
  { id: "telling-the-time", kind: "lesson", title: { en: "Telling the Time", te: "సమయం చెప్పడం" } },
  { id: "days-and-dates", kind: "lesson", title: { en: "Days, Months & Dates", te: "రోజులు, నెలలు, తేదీలు" } },
  { id: "prices-and-money", kind: "lesson", title: { en: "Prices & Money", te: "ధరలు, డబ్బు" } },
  { id: "my-address", kind: "lesson", title: { en: "My Address", te: "నా అడ్రస్" } },
  { id: "w3-conversation", kind: "conversation", title: { en: "At the Vegetable Market", te: "కూరగాయల మార్కెట్‌లో" } },
  { id: "w3-review", kind: "review", title: { en: "Numbers Everywhere", te: "అంతటా సంఖ్యలు" } },
];

// Week 4 (CURRICULUM §3).
const week4Days: DayRef[] = [
  { id: "have-and-has", kind: "lesson", title: { en: "Have & Has", te: "నాకు ఉంది, ఆయనకి ఉంది" } },
  { id: "my-your-his-her", kind: "lesson", title: { en: "My, Your, His, Her", te: "నా, మీ, ఆయన, ఆవిడ" } },
  { id: "possessive-s", kind: "lesson", title: { en: "Whose Is It? Ravi's", te: "ఎవరిది? రవి గారిది" } },
  { id: "describing-people", kind: "lesson", title: { en: "Describing People", te: "మనుషులు ఎలా ఉంటారు" } },
  { id: "this-that-these-those", kind: "lesson", title: { en: "This, That, These, Those", te: "ఇది, అది, ఇవి, అవి" } },
  { id: "w4-conversation", kind: "conversation", title: { en: "A New Friend at the Park", te: "పార్క్‌లో కొత్త స్నేహితులు" } },
  { id: "w4-review", kind: "review", title: { en: "People Around Me", te: "నా చుట్టూ మనుషులు" } },
];

// Week 5 (CURRICULUM §3).
const week5Days: DayRef[] = [
  { id: "there-is-there-are", kind: "lesson", title: { en: "There Is, There Are", te: "ఉంది, ఉన్నాయి" } },
  { id: "a-an-the", kind: "lesson", title: { en: "A, An, The", te: "a, an, the (ఒక, ఆ)" } },
  { id: "in-on-under-next-to", kind: "lesson", title: { en: "In, On, Under, Next To", te: "ఎక్కడ ఉంది" } },
  { id: "one-and-many", kind: "lesson", title: { en: "One and Many", te: "ఒకటి, చాలా" } },
  { id: "rooms-and-things", kind: "lesson", title: { en: "Around the House", te: "ఇంట్లో" } },
  { id: "w5-conversation", kind: "conversation", title: { en: "A Guest at Home", te: "ఇంటికి అతిథి" } },
  { id: "w5-review", kind: "review", title: { en: "My Home, My Words", te: "నా ఇల్లు, నా మాటలు" } },
];

// Week 6 (CURRICULUM §3).
const week6Days: DayRef[] = [
  { id: "i-like-i-dont-like", kind: "lesson", title: { en: "I Like, I Don't Like", te: "నాకు ఇష్టం, ఇష్టం లేదు" } },
  { id: "i-would-like", kind: "lesson", title: { en: "I Would Like", te: "నాకు … కావాలి (మర్యాదగా)" } },
  { id: "some-and-any", kind: "lesson", title: { en: "Some & Any", te: "కొంచెం, ఏమైనా" } },
  { id: "how-much-how-many", kind: "lesson", title: { en: "How Much, How Many", te: "ఎంత, ఎన్ని" } },
  { id: "cooking-instructions", kind: "lesson", title: { en: "Cooking Steps", te: "వంట సూచనలు" } },
  { id: "w6-conversation", kind: "conversation", title: { en: "Lunch at a Friend's House", te: "స్నేహితుల ఇంట్లో భోజనం" } },
  { id: "w6-review", kind: "review", title: { en: "Food Talk", te: "భోజనం మాటలు" } },
];

// Week 7 (CURRICULUM §3).
const week7Days: DayRef[] = [
  { id: "always-usually-never", kind: "lesson", title: { en: "Always, Usually, Never", te: "ఎప్పుడూ, మామూలుగా, ఎన్నడూ" } },
  { id: "he-goes-she-watches", kind: "lesson", title: { en: "He Goes, She Watches", te: "he/she తో verb" } },
  { id: "routine-questions", kind: "lesson", title: { en: "Do You …? Does She …?", te: "రోజువారీ ప్రశ్నలు" } },
  { id: "morning-to-night", kind: "lesson", title: { en: "Morning to Night", te: "ఉదయం నుండి రాత్రి వరకు" } },
  { id: "weekdays-and-weekends", kind: "lesson", title: { en: "Weekdays and Weekends", te: "వారం రోజులు, వారాంతం" } },
  { id: "w7-conversation", kind: "conversation", title: { en: "A Day in Your Life", te: "మీ రోజు" } },
  { id: "w7-review", kind: "review", title: { en: "My Routine", te: "నా దినచర్య" } },
];

// Week 8 (CURRICULUM §3).
const week8Days: DayRef[] = [
  { id: "can-and-cant", kind: "lesson", title: { en: "Can & Can't", te: "చేయగలను" } },
  { id: "can-i", kind: "lesson", title: { en: "Can I …?", te: "అనుమతి" } },
  { id: "can-could-would", kind: "lesson", title: { en: "Can, Could, Would", te: "మర్యాదగా అడగడం" } },
  { id: "could-in-the-past", kind: "lesson", title: { en: "I Could … (before)", te: "ఒకప్పుడు చేయగలిగేవాళ్ళం" } },
  { id: "please-help-me", kind: "lesson", title: { en: "Please Help Me!", te: "సహాయం చేయండి!" } },
  { id: "w8-conversation", kind: "conversation", title: { en: "Help at the Railway Station", te: "రైల్వే స్టేషన్‌లో సహాయం" } },
  { id: "w8-review", kind: "review", title: { en: "Asking for Help", te: "సహాయం అడగడం" } },
];

// Week 9 (CURRICULUM §3).
const week9Days: DayRef[] = [
  { id: "was-and-were", kind: "lesson", title: { en: "Was & Were", te: "ఉన్నాను, ఉన్నారు (గతం)" } },
  { id: "regular-past-verbs", kind: "lesson", title: { en: "Walked, Cooked, Called", te: "-ed తో గతం" } },
  { id: "irregular-past-verbs", kind: "lesson", title: { en: "Went, Ate, Saw", te: "మారిపోయే verbs" } },
  { id: "what-did-you-do", kind: "lesson", title: { en: "What Did You Do?", te: "ఏం చేశారు?" } },
  { id: "last-week-ago", kind: "lesson", title: { en: "Last Week, Two Days Ago", te: "పోయిన వారం, రెండు రోజుల క్రితం" } },
  { id: "w9-conversation", kind: "conversation", title: { en: "Telling About a Trip", te: "ప్రయాణం గురించి" } },
  { id: "w9-review", kind: "review", title: { en: "Last Week", te: "పోయిన వారం" } },
];

// Week 10 (CURRICULUM §3).
const week10Days: DayRef[] = [
  { id: "going-to-plans", kind: "lesson", title: { en: "Going To", te: "ప్రణాళికలు" } },
  { id: "will-or-going-to", kind: "lesson", title: { en: "Will or Going To?", te: "will ఆ, going to ఆ?" } },
  { id: "ill-help-you", kind: "lesson", title: { en: "I'll Help You", te: "సహాయం, మాట" } },
  { id: "invitations", kind: "lesson", title: { en: "Would You Like to Come?", te: "ఆహ్వానాలు" } },
  { id: "next-week-soon", kind: "lesson", title: { en: "Next Week, Soon", te: "త్వరలో" } },
  { id: "w10-conversation", kind: "conversation", title: { en: "Planning a Temple Trip", te: "గుడికి ప్రయాణం" } },
  { id: "w10-review", kind: "review", title: { en: "Plans Ahead", te: "ముందున్న ప్రణాళికలు" } },
];

// Week 11 (CURRICULUM §3).
const week11Days: DayRef[] = [
  { id: "i-feel", kind: "lesson", title: { en: "I Feel …", te: "నాకు … గా ఉంది" } },
  { id: "my-head-hurts", kind: "lesson", title: { en: "My Head Hurts", te: "శరీరం, నొప్పి" } },
  { id: "should-and-shouldnt", kind: "lesson", title: { en: "Should & Shouldn't", te: "సలహా" } },
  { id: "at-the-clinic", kind: "lesson", title: { en: "At the Clinic", te: "క్లినిక్‌లో" } },
  { id: "get-well-soon", kind: "lesson", title: { en: "Get Well Soon", te: "సానుభూతి" } },
  { id: "w11-conversation", kind: "conversation", title: { en: "A Visit to the Doctor", te: "డాక్టర్ దగ్గరికి" } },
  { id: "w11-review", kind: "review", title: { en: "Take Care", te: "జాగ్రత్త" } },
];

// Week 12 (CURRICULUM §3).
const week12Days: DayRef[] = [
  { id: "and-but", kind: "lesson", title: { en: "And, But", te: "మరియు, కానీ" } },
  { id: "because-and-so", kind: "lesson", title: { en: "Because, So", te: "ఎందుకంటే, అందుకే" } },
  { id: "all-about-me", kind: "lesson", title: { en: "All About Me", te: "నా గురించి" } },
  { id: "four-times-together", kind: "lesson", title: { en: "Every Day, Now, Yesterday, Tomorrow", te: "అన్ని కాలాలు" } },
  { id: "all-question-types", kind: "lesson", title: { en: "All Kinds of Questions", te: "అన్ని ప్రశ్నలు" } },
  { id: "w12-conversation", kind: "conversation", title: { en: "A Long Chat at a Function", te: "ఫంక్షన్‌లో మాటలు" } },
  { id: "w12-review", kind: "review", title: { en: "Stage 1 Review", te: "పునాది పునశ్చరణ" } },
];
const stage1Weeks: Week[] = [
  { ...week(1, ["English Foundations", "ఇంగ్లీష్ పునాది"]), released: true, days: week1Days },
  { ...week(2, ["Asking Questions", "ప్రశ్నలు అడగడం"]), released: true, days: week2Days },
  { ...week(3, ["Numbers, Time & Money", "సంఖ్యలు, సమయం, డబ్బు"]), released: true, days: week3Days },
  { ...week(4, ["People", "మనుషులు"]), released: true, days: week4Days },
  { ...week(5, ["My Home", "నా ఇల్లు"]), released: true, days: week5Days },
  { ...week(6, ["Food & Cooking", "ఆహారం, వంట"]), released: true, days: week6Days },
  { ...week(7, ["My Daily Routine", "నా దినచర్య"]), released: true, days: week7Days },
  { ...week(8, ["Can & Asking for Help", "సహాయం అడగడం"]), released: true, days: week8Days },
  { ...week(9, ["Yesterday & Last Week", "నిన్న, పోయిన వారం"]), released: true, days: week9Days },
  { ...week(10, ["Plans & Future", "ప్రణాళికలు"]), released: true, days: week10Days },
  { ...week(11, ["Feelings & Health", "భావాలు, ఆరోగ్యం"]), released: true, days: week11Days },
  { ...week(12, ["Putting It Together", "అన్నీ కలిపి"]), released: true, days: week12Days },
];

// Week 13 (CURRICULUM §4): the first week of Stage 2.
const week13Days: DayRef[] = [
  { id: "can-i-have-please", kind: "lesson", title: { en: "Can I Have …, Please?", te: "… ఇస్తారా?" } },
  { id: "a-kilo-of", kind: "lesson", title: { en: "A Kilo Of, A Bunch Of", te: "కిలో, కట్ట, డజను" } },
  { id: "how-much-are-they", kind: "lesson", title: { en: "How Much Are They?", te: "ఎంత అవుతుంది?" } },
  { id: "bargaining-politely", kind: "lesson", title: { en: "Can You Reduce It?", te: "ధర కొంచెం తగ్గిస్తారా?" } },
  { id: "fresh-and-ripe", kind: "lesson", title: { en: "Fresh and Ripe", te: "తాజాగా, పండినవి" } },
  { id: "w13-conversation", kind: "conversation", title: { en: "The Sunday Market", te: "ఆదివారం సంత" } },
  { id: "w13-review", kind: "review", title: { en: "Market Day", te: "సంత రోజు" } },
];
const stage2Weeks: Week[] = [
  { ...week(13, ["Shopping at the Market", "మార్కెట్‌లో షాపింగ్"]), released: true, days: week13Days },
  ...weeks(14, [
    ["Getting Around Town", "ఊరిలో తిరగడం"],
    ["Buses, Trains & Autos", "బస్సులు, రైళ్లు, ఆటోలు"],
    ["At the Doctor", "డాక్టర్ దగ్గర"],
    ["Pharmacy & Medicines", "మందుల షాపు, మందులు"],
    ["Emergencies & Safety", "అత్యవసరాలు, భద్రత"],
    ["Phone Calls", "ఫోన్ కాల్స్"],
    ["WhatsApp, Video Calls & UPI", "వాట్సాప్, వీడియో కాల్స్, UPI"],
    ["The Bank & Money Safety", "బ్యాంక్, డబ్బు జాగ్రత్త"],
    ["Shops & Supermarket", "షాపులు, సూపర్ మార్కెట్"],
    ["Restaurant & Food Delivery", "హోటల్, ఫుడ్ డెలివరీ"],
    ["What Were You Doing?", "అప్పుడు మీరు ఏం చేస్తున్నారు?"],
    ["Weather & Seasons", "వాతావరణం, కాలాలు"],
    ["Checkpoint: Out and About", "చెక్‌పాయింట్: బయట పనులు"],
    ["Offices & Forms", "ఆఫీసులు, ఫారాలు"],
    ["Government Services", "ప్రభుత్వ సేవలు"],
    ["Customer Care & Repairs", "కస్టమర్ కేర్, రిపేర్లు"],
    ["Have You Ever …?", "మీరు ఎప్పుడైనా …?"],
    ["Just, Already, Yet", "ఇప్పుడే, ఇప్పటికే, ఇంకా"],
    ["Festivals & Celebrations", "పండుగలు, వేడుకలు"],
    ["Neighbours & Community", "ఇరుగు పొరుగు, సమాజం"],
    ["Small Talk", "చిన్న చిన్న కబుర్లు"],
    ["Free Time & Hobbies", "ఖాళీ సమయం, అభిరుచులు"],
    ["Describing People & Character", "మనుషులు, స్వభావం"],
    ["Rules & Advice", "నియమాలు, సలహాలు"],
    ["Making Plans with Friends", "స్నేహితులతో ప్లాన్లు"],
    ["Polite English", "మర్యాదగా ఇంగ్లీష్"],
    ["Checkpoint: Stage 2 Review", "చెక్‌పాయింట్: రోజువారీ జీవితం పునశ్చరణ"],
  ]),
];

// Stages 3–5 (CURRICULUM §5–§7; reordered 2026-11-09 by the curriculum review: survival topics earlier, life themes for
// every grammar week, checkpoint weeks about every 12–14 weeks).
const stage3Weeks = weeks(41, [
  ["Telling a Story", "కథ చెప్పడం"],
  ["When I Was Young", "నేను చిన్నప్పుడు"],
  ["My Life Story", "నా జీవిత కథ"],
  ["Clothes & the Tailor", "బట్టలు, టైలర్"],
  ["Describing Places", "మా ఊరు ఎలా ఉంటుంది"],
  ["Giving Opinions", "అభిప్రాయాలు చెప్పడం"],
  ["Comparing & Choosing", "పోల్చి ఎంచుకోవడం"],
  ["If It Rains …", "వర్షం పడితే …"],
  ["Online Shopping & Deliveries", "ఆన్‌లైన్ షాపింగ్, డెలివరీలు"],
  ["Problems, Returns & Refunds", "సమస్యలు, రిటర్న్, రీఫండ్"],
  ["Understanding the Doctor", "డాక్టర్ చెప్పేది అర్థం చేసుకోవడం"],
  ["A Hospital Stay", "ఆసుపత్రిలో ఉండటం"],
  ["Waiting in Line", "క్యూలో ఎదురుచూపు"],
  ["Checkpoint: Telling and Explaining", "చెక్‌పాయింట్: చెప్పడం, వివరించడం"],
  ["Travel in India & Pilgrimage", "ప్రయాణాలు, తీర్థయాత్రలు"],
  ["Made in India: Labels & Signs", "మేడ్ ఇన్ ఇండియా: లేబుల్స్, బోర్డులు"],
  ["The Doctor Said …", "డాక్టర్ ఏం చెప్పారంటే …"],
  ["At the Enquiry Counter", "ఎంక్వయిరీ కౌంటర్ దగ్గర"],
  ["The Shop Where …", "… దొరికే షాపు"],
  ["Money, Savings & Pensions", "డబ్బు, పొదుపు, పెన్షన్"],
  ["News Headlines", "వార్తల హెడ్‌లైన్స్"],
  ["Formal Requests & Calling Offices", "ఆఫీసులకు మర్యాదగా అడగడం"],
  ["Official Letters & Notices", "ఆఫీసు ఉత్తరాలు, నోటీసులు"],
  ["Hosting Guests", "అతిథులకు మర్యాదలు"],
  ["Social Occasions", "శుభకార్యాలు, పరామర్శలు"],
  ["Phrasal Verbs at Home", "ఇంట్లో phrasal verbs"],
  ["Checkpoint: Getting Things Done", "చెక్‌పాయింట్: పనులు చక్కబెట్టడం"],
  ["Healthy Habits", "మంచి అలవాట్లు"],
  ["If I Had More Time …", "నాకు ఇంకా టైమ్ ఉంటే …"],
  ["Wishes & Regrets", "అలా జరిగుంటే బాగుండేది"],
  ["Prices Have Gone Up", "ధరలు పెరిగిపోయాయి"],
  ["Maybe, Probably, Definitely", "బహుశా, తప్పకుండా"],
  ["It Must Be …", "అది … అయ్యుంటుంది"],
  ["How It Works", "ఇది ఎలా పనిచేస్తుంది"],
  ["Neighbourhood Problems", "కాలనీ సమస్యలు"],
  ["Chatting at the Park", "పార్క్‌లో కబుర్లు"],
  ["Films, TV & Serials", "సినిమాలు, టీవీ, సీరియల్స్"],
  ["Different Accents", "వేర్వేరు యాసలు"],
  ["Persuading Gently", "మెల్లగా ఒప్పించడం"],
  ["Checkpoint: Stage 3 Review", "చెక్‌పాయింట్: ధైర్యంగా మాట్లాడటం పునశ్చరణ"],
]);

const stage4Weeks = weeks(81, [
  ["Catching Up with an Old Friend", "పాత స్నేహితులతో కబుర్లు"],
  ["The Train Had Left", "రైలు వెళ్లిపోయింది"],
  ["Telling Longer Stories", "పెద్ద కథలు చెప్పడం"],
  ["If I Had Known …", "ముందే తెలిసుంటే …"],
  ["Just in Case", "ముందు జాగ్రత్తగా"],
  ["What Did They Ask?", "వాళ్ళు ఏం అడిగారు?"],
  ["Has It Been Sent?", "పంపించారా?"],
  ["I Got It Repaired", "రిపేర్ చేయించాను"],
  ["Everyday Idioms", "రోజువారీ idioms"],
  ["Make or Do?", "Make ఆ, Do ఆ?"],
  ["Phrasal Verbs with People", "మనుషులతో phrasal verbs"],
  ["Health Insurance & Schemes", "హెల్త్ ఇన్సూరెన్స్, పథకాలు"],
  ["Making Decisions Together", "కలిసి నిర్ణయం తీసుకోవడం"],
  ["Checkpoint: Longer Talk", "చెక్‌పాయింట్: పెద్ద సంభాషణలు"],
  ["News & Society", "వార్తలు, సమాజం"],
  ["Village or City?", "పల్లెటూరా, సిటీనా?"],
  ["Explaining Traditions", "మన సంప్రదాయాలు"],
  ["Indian Food & Culture", "మన భోజనం, సంస్కృతి"],
  ["Travel Experiences", "ప్రయాణ అనుభవాలు"],
  ["Week 100: My English Journey", "100వ వారం: నా ఇంగ్లీష్ ప్రయాణం"],
  ["Announcements & Longer Talks", "అనౌన్స్‌మెంట్లు, పెద్ద ప్రసంగాలు"],
  ["Speaking for One Minute", "ఒక నిమిషం మాట్లాడటం"],
  ["Formal or Informal?", "ఫార్మల్‌గానా, మామూలుగానా?"],
  ["Saying No Nicely", "మర్యాదగా వద్దనడం"],
  ["Bargaining & Negotiating", "బేరం, మాట్లాడి ఒప్పించడం"],
  ["Solving Problems Together", "కలిసి సమస్య తీర్చడం"],
  ["Checkpoint: Speaking Up", "చెక్‌పాయింట్: ధైర్యంగా చెప్పడం"],
  ["Should Have, Could Have", "అలా చేసుంటే …"],
  ["I'll Be Waiting", "నేను ఎదురుచూస్తుంటాను"],
  ["Hope or Wish?", "Hope ఆ, Wish ఆ?"],
  ["Both, Either, Neither", "రెండూ, ఏదో ఒకటి, ఏదీ కాదు"],
  ["Describing Photos", "ఫోటోలు చూసి చెప్పడం"],
  ["Clear Speech", "స్పష్టంగా మాట్లాడటం"],
  ["Tone of Voice", "మాట తీరు"],
  ["Technology & Change", "టెక్నాలజీ, మార్పులు"],
  ["Sharing Experience", "అనుభవం పంచుకోవడం"],
  ["Folk Tales & Proverbs", "జానపద కథలు, సామెతలు"],
  ["Teaching Others", "ఇతరులకు నేర్పించడం"],
  ["Stories from My Life", "నా జీవితంలో సంఘటనలు"],
  ["Checkpoint: Stage 4 Review", "చెక్‌పాయింట్: సులభంగా ఇంగ్లీష్ పునశ్చరణ"],
]);

const stage5Weeks = weeks(121, [
  ["Natural Replies", "సహజమైన జవాబులు"],
  ["Thinking Time", "ఆలోచించే టైమ్"],
  ["Softening", "మెత్తగా చెప్పడం"],
  ["Making Your Point", "గట్టిగా చెప్పడం"],
  ["Vivid Descriptions", "కళ్ళకు కట్టినట్టు చెప్పడం"],
  ["Storytelling", "కథ చెప్పే పద్ధతి"],
  ["Memories", "జ్ఞాపకాలు"],
  ["Pros & Cons", "లాభాలు, నష్టాలు"],
  ["Disagreeing Politely", "ఒప్పుకోకపోయినా మర్యాదగా"],
  ["What Would You Do?", "మీరైతే ఏం చేస్తారు?"],
  ["Fast Natural Speech", "వేగంగా మాట్లాడే ఇంగ్లీష్"],
  ["Following the News", "వార్తలు అర్థం చేసుకోవడం"],
  ["Water, Power & the Environment", "నీళ్ళు, కరెంట్, పర్యావరణం"],
  ["Elections & Public Life", "ఎన్నికలు, ప్రజా జీవితం"],
  ["Checkpoint: Natural Talk", "చెక్‌పాయింట్: సహజంగా మాట్లాడటం"],
  ["What I Mean Is …", "నేను చెప్పేది ఏంటంటే …"],
  ["Recommending", "సిఫార్సు చేయడం"],
  ["Values & Life Lessons", "విలువలు, జీవిత పాఠాలు"],
  ["Online Services", "ఆన్‌లైన్ సేవలు"],
  ["Your Rights as a Customer", "కస్టమర్‌గా మీ హక్కులు"],
  ["Cricket, Sports & Games", "క్రికెట్, ఆటలు"],
  ["Our Town's History", "మా ఊరి చరిత్ర"],
  ["Interviews", "ఇంటర్వ్యూలు"],
  ["Community & Volunteering", "సమాజ సేవ"],
  ["Don't You Think …?", "మీకు అలా అనిపించట్లేదా?"],
  ["Building Words", "పదాలు ఎలా తయారవుతాయి"],
  ["Confusing Pairs", "తికమక పెట్టే జంటలు"],
  ["A Short Speech", "చిన్న ప్రసంగం"],
  ["Blessings & Toasts", "ఆశీస్సులు, శుభాకాంక్షలు"],
  ["Grand Review & Celebration", "చివరి పునశ్చరణ, వేడుక"],
]);

export const course: { stages: Stage[]; tracks: Track[] } = {
  stages: [
    {
      n: 1,
      title: { en: "Foundations", te: "పునాది" },
      canDo: {
        en: "Introduce yourself, give your phone number and address, spell your name, ask people to say it again slowly, and ask for help.",
        te: "మీ గురించి చెప్పగలరు, మీ ఫోన్ నంబర్, అడ్రస్ చెప్పగలరు, మీ పేరు స్పెల్లింగ్ చెప్పగలరు, మళ్ళీ నెమ్మదిగా చెప్పమని అడగగలరు, సహాయం అడగగలరు.",
      },
      firstWeek: 1,
      lastWeek: 12,
      weeks: stage1Weeks,
    },
    {
      n: 2,
      title: { en: "Everyday Life", te: "రోజువారీ జీవితం" },
      canDo: {
        en: "Shop and check the change, get around by bus or auto, see a doctor, call for help in an emergency, stay safe from scam calls, fill forms and ask at offices, and make small talk and plans.",
        te: "షాపింగ్ చేసి చిల్లర సరిచూసుకోగలరు, బస్సులో, ఆటోలో వెళ్ళగలరు, డాక్టర్‌కి సమస్య చెప్పగలరు, అత్యవసరంలో సహాయం కోసం ఫోన్ చేయగలరు, మోసపు కాల్స్ నుండి జాగ్రత్తగా ఉండగలరు, ఫారాలు నింపి ఆఫీసుల్లో అడగగలరు, కబుర్లు చెప్పి ప్లాన్లు వేయగలరు.",
      },
      firstWeek: 13,
      lastWeek: 40,
      weeks: stage2Weeks,
    },
    {
      n: 3,
      title: { en: "Confident Conversations", te: "ధైర్యంగా మాట్లాడటం" },
      canDo: {
        en: "Tell stories from your life, give opinions with reasons, return things and complain politely, follow doctors, officials and announcements, and persuade gently.",
        te: "మీ జీవితంలోని సంగతులు చెప్పగలరు, కారణంతో అభిప్రాయం చెప్పగలరు, వస్తువులు తిరిగి ఇచ్చి మర్యాదగా ఫిర్యాదు చేయగలరు, డాక్టర్లు, అధికారులు, అనౌన్స్‌మెంట్లు చెప్పేది అర్థం చేసుకోగలరు, మెల్లగా ఒప్పించగలరు.",
      },
      firstWeek: 41,
      lastWeek: 80,
      weeks: stage3Weeks,
    },
    {
      n: 4,
      title: { en: "Fluent Everyday English", te: "సులభంగా ఇంగ్లీష్" },
      canDo: {
        en: "Hold longer conversations, tell long stories in order, follow talks and the news, speak for a minute at a meeting, choose formal or informal English, and say no nicely.",
        te: "పెద్ద సంభాషణలు చేయగలరు, పెద్ద కథలు వరుసగా చెప్పగలరు, ప్రసంగాలు, వార్తలు అర్థం చేసుకోగలరు, మీటింగ్‌లో ఒక నిమిషం మాట్లాడగలరు, ఫార్మల్‌గానో మామూలుగానో మాట్లాడగలరు, మర్యాదగా వద్దనగలరు.",
      },
      firstWeek: 81,
      lastWeek: 120,
      weeks: stage4Weeks,
    },
    {
      n: 5,
      title: { en: "Natural English", te: "సహజమైన ఇంగ్లీష్" },
      canDo: {
        en: "Reply naturally, disagree politely, follow fast speech and the news, stand up for your rights as a customer, and give a short speech at a function.",
        te: "సహజంగా జవాబు ఇవ్వగలరు, ఒప్పుకోకపోయినా మర్యాదగా చెప్పగలరు, వేగమైన మాటలు, వార్తలు అర్థం చేసుకోగలరు, కస్టమర్‌గా మీ హక్కుల కోసం మాట్లాడగలరు, శుభకార్యంలో చిన్న ప్రసంగం చేయగలరు.",
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
