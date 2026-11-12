import type { Bi, Day } from "./types";

/** The course map (BUILD_PLAN A4). Only released weeks list their days. "Day N" is computed from position, never stored. */

export type DayRef = { id: string; kind: Day["kind"]; title: Bi };
export type Week = { n: number; title: Bi; released: boolean; days: DayRef[] }; // days empty until released
export type Stage = { n: number; title: Bi; canDo: Bi /* the stage-end checkpoint (CURRICULUM §2b) */; firstWeek: number; lastWeek: number; weeks: Week[] };
export type TrackId = "family" | "grandchildren" | "abroad" | "work" | "care" | "faith";
/**
 * An optional track (CURRICULUM §8). `goal` is its line in the first visit's "What do you want English for?";
 * `offerAtWeek` is the main-path week where it is offered to learners who chose it; `soonWeek` is the earlier week for
 * "My trip is soon" (Abroad).
 */
export type Track = { id: TrackId; title: Bi; goal: Bi; forWho: Bi; offerAtWeek: number; soonWeek?: number; weeks: Week[] };

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
const week14Days: DayRef[] = [
  { id: "excuse-me-where-is", kind: "lesson", title: { en: "Excuse Me, Where Is …?", te: "… ఎక్కడ ఉంది?" } },
  { id: "turn-left-go-straight", kind: "lesson", title: { en: "Turn Left, Go Straight", te: "ఎడమకు తిరగండి" } },
  { id: "along-across-past", kind: "lesson", title: { en: "Along, Across, Past", te: "వెంబడి, అవతలకు, దాటి" } },
  { id: "opposite-the-bus-stand", kind: "lesson", title: { en: "Opposite the Bus Stand", te: "ఎదురుగా, మూలన" } },
  { id: "i-think-im-lost", kind: "lesson", title: { en: "I Think I'm Lost", te: "దారి తప్పాను" } },
  { id: "w14-conversation", kind: "conversation", title: { en: "Finding the New Hospital", te: "కొత్త ఆసుపత్రి" } },
  { id: "w14-review", kind: "review", title: { en: "Finding the Way", te: "దారి కనుక్కోవడం" } },
];
const week15Days: DayRef[] = [
  { id: "which-bus-goes", kind: "lesson", title: { en: "Which Bus Goes There?", te: "ఏ బస్ వెళ్తుంది?" } },
  { id: "the-train-leaves-at", kind: "lesson", title: { en: "The Train Leaves at Six", te: "రైలు ఆరింటికి" } },
  { id: "how-long-does-it-take", kind: "lesson", title: { en: "How Long Does It Take?", te: "ఎంతసేపు పడుతుంది?" } },
  { id: "how-much-to-the-station", kind: "lesson", title: { en: "How Much to the Station?", te: "ఆటో ఛార్జీ" } },
  { id: "one-ticket-please", kind: "lesson", title: { en: "One Ticket, Please", te: "టికెట్" } },
  { id: "w15-conversation", kind: "conversation", title: { en: "A Day Trip by Train", te: "రైలులో ఒక రోజు" } },
  { id: "w15-review", kind: "review", title: { en: "Travel Day", te: "ప్రయాణం రోజు" } },
];
const week16Days: DayRef[] = [
  { id: "more-symptoms", kind: "lesson", title: { en: "Symptoms", te: "లక్షణాలు" } },
  { id: "how-long-have-you-had", kind: "lesson", title: { en: "How Long Have You Had It?", te: "ఎన్ని రోజులుగా?" } },
  { id: "bp-and-sugar", kind: "lesson", title: { en: "BP and Sugar", te: "BP, షుగర్" } },
  { id: "tests-and-reports", kind: "lesson", title: { en: "Tests and Reports", te: "పరీక్షలు, రిపోర్టులు" } },
  { id: "what-should-i-avoid", kind: "lesson", title: { en: "What Should I Avoid?", te: "ఏమి మానాలి?" } },
  { id: "w16-conversation", kind: "conversation", title: { en: "A Hospital Check-Up", te: "ఆసుపత్రిలో చెకప్" } },
  { id: "w16-review", kind: "review", title: { en: "Health Check", te: "ఆరోగ్య పరీక్ష" } },
];
const week17Days: DayRef[] = [
  { id: "twice-a-day", kind: "lesson", title: { en: "Twice a Day", te: "రోజుకు రెండుసార్లు" } },
  { id: "you-have-to-finish", kind: "lesson", title: { en: "You Have to Finish It", te: "పూర్తిగా వేసుకోవాలి" } },
  { id: "dont-take-it-with", kind: "lesson", title: { en: "Don't Take It With Milk", te: "పాలతో వద్దు" } },
  { id: "at-the-medical-shop", kind: "lesson", title: { en: "At the Medical Shop", te: "మెడికల్ షాపులో" } },
  { id: "side-effects", kind: "lesson", title: { en: "It Makes Me Sleepy", te: "సైడ్ ఎఫెక్ట్స్" } },
  { id: "w17-conversation", kind: "conversation", title: { en: "Medicines for a Neighbour", te: "పొరుగువారికి మందులు" } },
  { id: "w17-review", kind: "review", title: { en: "Medicine Time", te: "మందుల సమయం" } },
];
const week18Days: DayRef[] = [
  { id: "call-an-ambulance", kind: "lesson", title: { en: "Call an Ambulance!", te: "అంబులెన్స్‌కి ఫోన్ చేయండి!" } },
  { id: "he-fell-down", kind: "lesson", title: { en: "He Fell Down", te: "కింద పడిపోయారు" } },
  { id: "i-can-smell-gas", kind: "lesson", title: { en: "I Can Smell Gas", te: "గ్యాస్ వాసన వస్తోంది" } },
  { id: "at-the-emergency-ward", kind: "lesson", title: { en: "At the Emergency Ward", te: "ఎమర్జెన్సీ వార్డులో" } },
  { id: "call-the-police", kind: "lesson", title: { en: "Call the Police", te: "పోలీసులకు ఫోన్" } },
  { id: "w18-conversation", kind: "conversation", title: { en: "An Emergency on the Street", te: "రోడ్డు మీద అత్యవసరం" } },
  { id: "w18-review", kind: "review", title: { en: "Stay Safe", te: "జాగ్రత్తగా ఉండండి" } },
];
const week19Days: DayRef[] = [
  { id: "hello-who-is-this", kind: "lesson", title: { en: "Hello, Who's Speaking?", te: "ఎవరు మాట్లాడుతున్నారు?" } },
  { id: "can-i-take-a-message", kind: "lesson", title: { en: "Can I Take a Message?", te: "ఏమైనా చెప్పాలా?" } },
  { id: "ill-call-you-back", kind: "lesson", title: { en: "I'll Call You Back", te: "మళ్ళీ ఫోన్ చేస్తాను" } },
  { id: "sorry-wrong-number", kind: "lesson", title: { en: "Sorry, Wrong Number", te: "రాంగ్ నంబర్" } },
  { id: "booking-by-phone", kind: "lesson", title: { en: "Booking by Phone", te: "ఫోన్‌లో బుకింగ్" } },
  { id: "w19-conversation", kind: "conversation", title: { en: "A Day of Phone Calls", te: "రోజంతా ఫోన్లు" } },
  { id: "w19-review", kind: "review", title: { en: "On the Phone", te: "ఫోన్‌లో" } },
];
const week20Days: DayRef[] = [
  { id: "how-do-i-send-a-photo", kind: "lesson", title: { en: "How Do I Send a Photo?", te: "ఫోటో ఎలా పంపాలి?" } },
  { id: "tap-here-then-send", kind: "lesson", title: { en: "Tap Here, Then Send", te: "ఇక్కడ నొక్కండి" } },
  { id: "can-you-hear-me", kind: "lesson", title: { en: "Can You Hear Me?", te: "వీడియో కాల్" } },
  { id: "scan-and-pay", kind: "lesson", title: { en: "Scan and Pay", te: "స్కాన్ చేసి కట్టండి" } },
  { id: "my-phone-is-slow", kind: "lesson", title: { en: "My Phone Is Slow", te: "ఫోన్ సమస్యలు" } },
  { id: "w20-conversation", kind: "conversation", title: { en: "Learning a New App", te: "కొత్త యాప్ నేర్చుకోవడం" } },
  { id: "w20-review", kind: "review", title: { en: "Step by Step", te: "ఒక్కో దశగా" } },
];
const week21Days: DayRef[] = [
  { id: "deposit-and-withdraw", kind: "lesson", title: { en: "Deposit and Withdraw", te: "డబ్బు వేయడం, తీయడం" } },
  { id: "at-the-atm", kind: "lesson", title: { en: "At the ATM", te: "ATM దగ్గర" } },
  { id: "big-numbers-lakh", kind: "lesson", title: { en: "Big Numbers", te: "పెద్ద సంఖ్యలు" } },
  { id: "never-share-your-otp", kind: "lesson", title: { en: "Never Share Your OTP", te: "OTP ఎవరికీ చెప్పకండి" } },
  { id: "its-a-scam", kind: "lesson", title: { en: "It's a Scam!", te: "ఇది మోసం!" } },
  { id: "w21-conversation", kind: "conversation", title: { en: "A Morning at the Bank", te: "బ్యాంకులో ఒక ఉదయం" } },
  { id: "w21-review", kind: "review", title: { en: "Safe or Scam?", te: "నిజమా, మోసమా?" } },
];
const week22Days: DayRef[] = [
  { id: "do-you-have", kind: "lesson", title: { en: "Do You Have …?", te: "… ఉన్నాయా?" } },
  { id: "cheaper-and-bigger", kind: "lesson", title: { en: "Cheaper, Bigger", te: "చవకైనది, పెద్దది" } },
  { id: "more-expensive-better", kind: "lesson", title: { en: "More Expensive, Better", te: "ఎక్కువ ఖరీదు, మెరుగు" } },
  { id: "where-can-i-find", kind: "lesson", title: { en: "Where Can I Find …?", te: "… ఎక్కడ దొరుకుతుంది?" } },
  { id: "at-the-billing-counter", kind: "lesson", title: { en: "At the Billing Counter", te: "బిల్లింగ్ కౌంటర్ దగ్గర" } },
  { id: "w22-conversation", kind: "conversation", title: { en: "Monthly Shopping", te: "నెలవారీ సరుకులు" } },
  { id: "w22-review", kind: "review", title: { en: "Shopping Day", te: "షాపింగ్ రోజు" } },
];
const week23Days: DayRef[] = [
  { id: "a-table-for-two", kind: "lesson", title: { en: "A Table for Two", te: "ఇద్దరికి టేబుల్" } },
  { id: "ill-have-the-dosa", kind: "lesson", title: { en: "I'll Have the Dosa", te: "ఆర్డర్ చేయడం" } },
  { id: "less-spicy-please", kind: "lesson", title: { en: "Less Spicy, Please", te: "కారం తక్కువ" } },
  { id: "theres-a-problem", kind: "lesson", title: { en: "There's a Problem", te: "ఏదో తేడా" } },
  { id: "could-i-have-the-bill", kind: "lesson", title: { en: "Could I Have the Bill?", te: "బిల్ ఇస్తారా?" } },
  { id: "w23-conversation", kind: "conversation", title: { en: "Dinner with Friends", te: "స్నేహితులతో భోజనం" } },
  { id: "w23-review", kind: "review", title: { en: "Eating Out", te: "బయట భోజనం" } },
];
const week24Days: DayRef[] = [
  { id: "i-was-cooking", kind: "lesson", title: { en: "I Was Cooking", te: "వండుతూ ఉన్నాను" } },
  { id: "when-the-phone-rang", kind: "lesson", title: { en: "When the Phone Rang", te: "ఫోన్ మోగినప్పుడు" } },
  { id: "while-i-was-walking", kind: "lesson", title: { en: "While I Was Walking", te: "నడుస్తూ ఉండగా" } },
  { id: "what-were-you-doing", kind: "lesson", title: { en: "What Were You Doing?", te: "అప్పుడు ఏం చేస్తున్నారు?" } },
  { id: "telling-what-happened", kind: "lesson", title: { en: "Telling What Happened", te: "ఏం జరిగిందో చెప్పడం" } },
  { id: "w24-conversation", kind: "conversation", title: { en: "An Accident on the Road", te: "రోడ్డు మీద ప్రమాదం" } },
  { id: "w24-review", kind: "review", title: { en: "What Happened?", te: "ఏం జరిగింది?" } },
];
const week25Days: DayRef[] = [
  { id: "whats-the-weather-like", kind: "lesson", title: { en: "What's the Weather Like?", te: "వాతావరణం ఎలా ఉంది?" } },
  { id: "it-will-rain-tomorrow", kind: "lesson", title: { en: "It Will Rain Tomorrow", te: "రేపు వర్షం పడుతుంది" } },
  { id: "its-going-to-rain", kind: "lesson", title: { en: "It's Going to Rain", te: "వర్షం రాబోతోంది" } },
  { id: "summer-rains-winter", kind: "lesson", title: { en: "Summer, Rains, Winter", te: "వేసవి, వానలు, చలి" } },
  { id: "a-cyclone-warning", kind: "lesson", title: { en: "A Cyclone Warning", te: "తుఫాను హెచ్చరిక" } },
  { id: "w25-conversation", kind: "conversation", title: { en: "Rain on the Wedding Day", te: "పెళ్లి రోజు వర్షం" } },
  { id: "w25-review", kind: "review", title: { en: "Rain or Shine", te: "ఎండైనా, వానైనా" } },
];
const week26Days: DayRef[] = [
  { id: "around-town-again", kind: "lesson", title: { en: "Around Town Again", te: "మళ్ళీ ఊర్లో" } },
  { id: "health-and-help", kind: "lesson", title: { en: "Health and Help", te: "ఆరోగ్యం, సహాయం" } },
  { id: "phone-and-money", kind: "lesson", title: { en: "Phone, Apps and Money", te: "ఫోన్, యాప్‌లు, డబ్బు" } },
  { id: "fix-it-clinic-1", kind: "lesson", title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" } },
  { id: "my-week-in-one-minute", kind: "lesson", title: { en: "My Week in One Minute", te: "నా వారం, ఒక్క నిమిషంలో" } },
  { id: "w26-conversation", kind: "conversation", title: { en: "A Busy Day in Town", te: "ఊర్లో హడావిడి రోజు" } },
  { id: "w26-review", kind: "review", title: { en: "Checkpoint", te: "చెక్‌పాయింట్" } },
];
const week27Days: DayRef[] = [
  { id: "my-date-of-birth", kind: "lesson", title: { en: "My Date of Birth", te: "పుట్టిన తేదీ" } },
  { id: "can-you-spell-it", kind: "lesson", title: { en: "Can You Spell It?", te: "స్పెల్లింగ్ చెప్పండి" } },
  { id: "filling-a-form", kind: "lesson", title: { en: "Filling a Form", te: "ఫారం నింపడం" } },
  { id: "two-photocopies-please", kind: "lesson", title: { en: "Two Photocopies, Please", te: "రెండు జిరాక్స్ కాపీలు" } },
  { id: "which-counter", kind: "lesson", title: { en: "Which Counter?", te: "ఏ కౌంటర్?" } },
  { id: "w27-conversation", kind: "conversation", title: { en: "At the Post Office", te: "పోస్టాఫీసులో" } },
  { id: "w27-review", kind: "review", title: { en: "Name, Date, Sign", te: "పేరు, తేదీ, సంతకం" } },
];
const week28Days: DayRef[] = [
  { id: "update-my-aadhaar", kind: "lesson", title: { en: "Updating My Aadhaar", te: "ఆధార్ అప్‌డేట్" } },
  { id: "my-ration-card", kind: "lesson", title: { en: "My Ration Card", te: "నా రేషన్ కార్డు" } },
  { id: "my-life-certificate", kind: "lesson", title: { en: "My Life Certificate", te: "లైఫ్ సర్టిఫికెట్" } },
  { id: "at-mee-seva", kind: "lesson", title: { en: "At Mee Seva", te: "మీ సేవలో" } },
  { id: "is-it-ready", kind: "lesson", title: { en: "Is It Ready?", te: "వచ్చిందా?" } },
  { id: "w28-conversation", kind: "conversation", title: { en: "A Morning at the Secretariat", te: "సచివాలయంలో ఒక ఉదయం" } },
  { id: "w28-review", kind: "review", title: { en: "Getting Things Done", te: "పనులు చక్కబెట్టుకోవడం" } },
];
const week29Days: DayRef[] = [
  { id: "it-has-stopped-working", kind: "lesson", title: { en: "It Has Stopped Working", te: "పని చేయడం ఆగిపోయింది" } },
  { id: "i-have-paid-the-bill", kind: "lesson", title: { en: "I Have Paid the Bill", te: "బిల్ కట్టేశాను" } },
  { id: "press-one-for-english", kind: "lesson", title: { en: "Press One for English", te: "IVR మెనూ" } },
  { id: "the-tap-is-leaking", kind: "lesson", title: { en: "The Tap Is Leaking", te: "నీళ్ళు కారుతున్నాయి" } },
  { id: "when-will-someone-come", kind: "lesson", title: { en: "When Will Someone Come?", te: "ఎప్పుడు వస్తారు?" } },
  { id: "w29-conversation", kind: "conversation", title: { en: "A Broken Washing Machine", te: "వాషింగ్ మెషీన్ రిపేర్" } },
  { id: "w29-review", kind: "review", title: { en: "Repair Day", te: "రిపేర్ రోజు" } },
];
const week30Days: DayRef[] = [
  { id: "have-you-ever", kind: "lesson", title: { en: "Have You Ever …?", te: "ఎప్పుడైనా …?" } },
  { id: "i-have-never", kind: "lesson", title: { en: "I Have Never …", te: "ఎప్పుడూ … లేదు" } },
  { id: "been-or-gone", kind: "lesson", title: { en: "Been or Gone?", te: "been ఆ, gone ఆ?" } },
  { id: "seen-eaten-done", kind: "lesson", title: { en: "Seen, Eaten, Done", te: "మూడో రూపం" } },
  { id: "have-you-or-did-you", kind: "lesson", title: { en: "Have You …? Did You …?", te: "ఎప్పుడైనా / ఎప్పుడు" } },
  { id: "w30-conversation", kind: "conversation", title: { en: "Old Friends Meet", te: "పాత స్నేహితులు" } },
  { id: "w30-review", kind: "review", title: { en: "Travel Memories", te: "ప్రయాణ జ్ఞాపకాలు" } },
];
const week31Days: DayRef[] = [
  { id: "i-have-just", kind: "lesson", title: { en: "I Have Just …", te: "ఇప్పుడే" } },
  { id: "already", kind: "lesson", title: { en: "Already", te: "ఇప్పటికే" } },
  { id: "not-yet", kind: "lesson", title: { en: "Not Yet", te: "ఇంకా లేదు" } },
  { id: "since-and-for", kind: "lesson", title: { en: "Since and For", te: "నుండి, గా" } },
  { id: "whats-new", kind: "lesson", title: { en: "What's New?", te: "కొత్త విశేషాలు" } },
  { id: "w31-conversation", kind: "conversation", title: { en: "Getting Ready for Guests", te: "అతిథుల కోసం సిద్ధం" } },
  { id: "w31-review", kind: "review", title: { en: "Done or Not Yet?", te: "అయిందా, ఇంకా లేదా?" } },
];
const week32Days: DayRef[] = [
  { id: "happy-sankranti", kind: "lesson", title: { en: "Happy Sankranti!", te: "పండుగ శుభాకాంక్షలు" } },
  { id: "what-we-did-on-diwali", kind: "lesson", title: { en: "What We Did on Diwali", te: "దీపావళికి ఏం చేశాం" } },
  { id: "congratulations", kind: "lesson", title: { en: "Congratulations!", te: "అభినందనలు" } },
  { id: "id-love-to-come", kind: "lesson", title: { en: "I'd Love to Come", te: "వస్తాను / రాలేను" } },
  { id: "what-is-ugadi", kind: "lesson", title: { en: "What Is Ugadi?", te: "పండుగ గురించి చెప్పడం" } },
  { id: "w32-conversation", kind: "conversation", title: { en: "A Festival Visit", te: "పండుగ పలకరింపు" } },
  { id: "w32-review", kind: "review", title: { en: "Festival Time", te: "పండుగ సందడి" } },
];
const week33Days: DayRef[] = [
  { id: "could-you-please", kind: "lesson", title: { en: "Could You Please …?", te: "కొంచెం … చేస్తారా?" } },
  { id: "shall-i-carry-that", kind: "lesson", title: { en: "Shall I Carry That?", te: "మోయనా?" } },
  { id: "would-you-mind", kind: "lesson", title: { en: "Would You Mind …?", te: "అభ్యంతరం లేకపోతే" } },
  { id: "sorry-to-bother-you", kind: "lesson", title: { en: "Sorry to Bother You", te: "ఒక చిన్న సమస్య" } },
  { id: "at-the-colony-meeting", kind: "lesson", title: { en: "At the Colony Meeting", te: "కాలనీ మీటింగ్" } },
  { id: "w33-conversation", kind: "conversation", title: { en: "Helping Each Other", te: "ఒకరికొకరు సహాయం" } },
  { id: "w33-review", kind: "review", title: { en: "Good Neighbours", te: "మంచి పొరుగువాళ్ళు" } },
];
const week34Days: DayRef[] = [
  { id: "lovely-morning", kind: "lesson", title: { en: "Lovely Morning, Isn't It?", te: "బాగుంది కదా?" } },
  { id: "how-are-you-keeping", kind: "lesson", title: { en: "How Are You Keeping?", te: "ఆరోగ్యం ఎలా ఉంది?" } },
  { id: "did-you-watch-the-match", kind: "lesson", title: { en: "Did You Watch the Match?", te: "మ్యాచ్ చూశారా?" } },
  { id: "no-i-didnt", kind: "lesson", title: { en: "No, I Didn't", te: "లేదు అంటే No" } },
  { id: "nice-talking-to-you", kind: "lesson", title: { en: "Nice Talking to You", te: "మాట్లాడినందుకు సంతోషం" } },
  { id: "w34-conversation", kind: "conversation", title: { en: "At the Morning Walk", te: "మార్నింగ్ వాక్‌లో" } },
  { id: "w34-review", kind: "review", title: { en: "Let's Chat", te: "కబుర్లు చెప్పుకుందాం" } },
];
const week35Days: DayRef[] = [
  { id: "i-enjoy-gardening", kind: "lesson", title: { en: "I Enjoy Gardening", te: "నాకు తోటపని ఇష్టం" } },
  { id: "i-dont-mind-cooking", kind: "lesson", title: { en: "I Don't Mind Cooking", te: "పర్వాలేదు, ఇష్టం లేదు" } },
  { id: "twice-a-week", kind: "lesson", title: { en: "Twice a Week", te: "వారానికి రెండుసార్లు" } },
  { id: "good-at-drawing", kind: "lesson", title: { en: "I'm Good at Drawing", te: "నాకు బాగా వచ్చు" } },
  { id: "whats-it-about", kind: "lesson", title: { en: "What's It About?", te: "సినిమాలు, TV" } },
  { id: "w35-conversation", kind: "conversation", title: { en: "The Senior Citizens' Club", te: "సీనియర్ సిటిజన్స్ క్లబ్" } },
  { id: "w35-review", kind: "review", title: { en: "My Free Time", te: "నా ఖాళీ సమయం" } },
];
const week36Days: DayRef[] = [
  { id: "what-is-she-like", kind: "lesson", title: { en: "What Is She Like?", te: "ఆమె ఎలాంటి మనిషి?" } },
  { id: "the-man-who", kind: "lesson", title: { en: "The Man Who Lives Next Door", te: "పక్కింట్లో ఉండే ఆయన" } },
  { id: "the-shop-that-sells", kind: "lesson", title: { en: "The Shop That Sells Silk", te: "సిల్క్ అమ్మే షాపు" } },
  { id: "looks-like-and-is-like", kind: "lesson", title: { en: "Looks Like, Is Like", te: "రూపం, స్వభావం" } },
  { id: "a-person-i-admire", kind: "lesson", title: { en: "A Person I Admire", te: "నేను గౌరవించే వ్యక్తి" } },
  { id: "w36-conversation", kind: "conversation", title: { en: "Meeting the New Neighbours", te: "కొత్త పొరుగువారు" } },
  { id: "w36-review", kind: "review", title: { en: "People Around Me", te: "నా చుట్టూ ఉన్న మనుషులు" } },
];
const week37Days: DayRef[] = [
  { id: "you-must-wear-a-helmet", kind: "lesson", title: { en: "You Must Wear a Helmet", te: "తప్పనిసరి" } },
  { id: "you-mustnt-smoke-here", kind: "lesson", title: { en: "You Mustn't Smoke Here", te: "చేయకూడదు" } },
  { id: "should-or-must", kind: "lesson", title: { en: "Should or Must?", te: "సలహా ఆ, నియమమా?" } },
  { id: "not-allowed-inside", kind: "lesson", title: { en: "Not Allowed Inside", te: "అనుమతి లేదు" } },
  { id: "why-dont-you", kind: "lesson", title: { en: "Why Don't You …?", te: "… చేయొచ్చు కదా?" } },
  { id: "w37-conversation", kind: "conversation", title: { en: "A Government Hospital Visit", te: "ప్రభుత్వ ఆసుపత్రికి" } },
  { id: "w37-review", kind: "review", title: { en: "Do's and Don'ts", te: "చేయాల్సినవి, చేయకూడనివి" } },
];
const week38Days: DayRef[] = [
  { id: "lets-go-shall-we", kind: "lesson", title: { en: "Let's Go! Shall We?", te: "వెళ్దాం! వెళ్దామా?" } },
  { id: "how-about-saturday", kind: "lesson", title: { en: "How About Saturday?", te: "శనివారం ఎలా ఉంటుంది?" } },
  { id: "im-meeting-ravi-on-friday", kind: "lesson", title: { en: "I'm Meeting Ravi on Friday", te: "శుక్రవారం రవిని కలుస్తున్నాను" } },
  { id: "sounds-good", kind: "lesson", title: { en: "Sounds Good!", te: "బాగుంది!" } },
  { id: "can-we-change-the-time", kind: "lesson", title: { en: "Can We Change the Time?", te: "టైమ్ మారుద్దామా?" } },
  { id: "w38-conversation", kind: "conversation", title: { en: "Planning a Picnic", te: "పిక్నిక్ ప్లాన్" } },
  { id: "w38-review", kind: "review", title: { en: "Let's Make a Plan", te: "ప్లాన్ వేద్దాం" } },
];
const week39Days: DayRef[] = [
  { id: "sorry-for-being-late", kind: "lesson", title: { en: "I'm Sorry for Being Late", te: "ఆలస్యం అయింది, sorry" } },
  { id: "thats-okay", kind: "lesson", title: { en: "That's Okay", te: "పర్వాలేదు" } },
  { id: "thank-you-so-much", kind: "lesson", title: { en: "Thank You So Much", te: "చాలా థ్యాంక్స్" } },
  { id: "not-myself-kiran", kind: "lesson", title: { en: "I'm Kiran, Not \"Myself Kiran\"", te: "\"Myself\" వద్దు" } },
  { id: "out-of-town", kind: "lesson", title: { en: "I'm Out of Town", te: "\"Out of station\" వద్దు" } },
  { id: "w39-conversation", kind: "conversation", title: { en: "A Misunderstanding", te: "అపార్థం" } },
  { id: "w39-review", kind: "review", title: { en: "Say It Nicely", te: "మర్యాదగా చెప్దాం" } },
];
const week40Days: DayRef[] = [
  { id: "a-busy-morning", kind: "lesson", title: { en: "A Busy Morning", te: "హడావిడి ఉదయం" } },
  { id: "three-small-problems", kind: "lesson", title: { en: "Three Small Problems", te: "మూడు చిన్న సమస్యలు" } },
  { id: "my-life-now", kind: "lesson", title: { en: "My Life Now", te: "ఇప్పుడు నా జీవితం" } },
  { id: "fix-it-clinic-2", kind: "lesson", title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" } },
  { id: "stories-from-my-week", kind: "lesson", title: { en: "Stories From My Week", te: "ఈ వారం కబుర్లు" } },
  { id: "w40-conversation", kind: "conversation", title: { en: "A Full Day Out", te: "రోజంతా బయట" } },
  { id: "w40-review", kind: "review", title: { en: "Stage 2 Review", te: "రోజువారీ జీవితం పునశ్చరణ" } },
];
const stage2Weeks: Week[] = [
  { ...week(13, ["Shopping at the Market", "మార్కెట్‌లో షాపింగ్"]), released: true, days: week13Days },
  { ...week(14, ["Getting Around Town", "ఊరిలో తిరగడం"]), released: true, days: week14Days },
  { ...week(15, ["Buses, Trains & Autos", "బస్సులు, రైళ్లు, ఆటోలు"]), released: true, days: week15Days },
  { ...week(16, ["At the Doctor", "డాక్టర్ దగ్గర"]), released: true, days: week16Days },
  { ...week(17, ["Pharmacy & Medicines", "మందుల షాపు, మందులు"]), released: true, days: week17Days },
  { ...week(18, ["Emergencies & Safety", "అత్యవసరాలు, భద్రత"]), released: true, days: week18Days },
  { ...week(19, ["Phone Calls", "ఫోన్ కాల్స్"]), released: true, days: week19Days },
  { ...week(20, ["WhatsApp, Video Calls & UPI", "వాట్సాప్, వీడియో కాల్స్, UPI"]), released: true, days: week20Days },
  { ...week(21, ["The Bank & Money Safety", "బ్యాంక్, డబ్బు జాగ్రత్త"]), released: true, days: week21Days },
  { ...week(22, ["Shops & Supermarket", "షాపులు, సూపర్ మార్కెట్"]), released: true, days: week22Days },
  { ...week(23, ["Restaurant & Food Delivery", "హోటల్, ఫుడ్ డెలివరీ"]), released: true, days: week23Days },
  { ...week(24, ["What Were You Doing?", "అప్పుడు మీరు ఏం చేస్తున్నారు?"]), released: true, days: week24Days },
  { ...week(25, ["Weather & Seasons", "వాతావరణం, కాలాలు"]), released: true, days: week25Days },
  { ...week(26, ["Checkpoint: Out and About", "చెక్‌పాయింట్: బయట పనులు"]), released: true, days: week26Days },
  { ...week(27, ["Offices & Forms", "ఆఫీసులు, ఫారాలు"]), released: true, days: week27Days },
  { ...week(28, ["Government Services", "ప్రభుత్వ సేవలు"]), released: true, days: week28Days },
  { ...week(29, ["Customer Care & Repairs", "కస్టమర్ కేర్, రిపేర్లు"]), released: true, days: week29Days },
  { ...week(30, ["Have You Ever …?", "మీరు ఎప్పుడైనా …?"]), released: true, days: week30Days },
  { ...week(31, ["Just, Already, Yet", "ఇప్పుడే, ఇప్పటికే, ఇంకా"]), released: true, days: week31Days },
  { ...week(32, ["Festivals & Celebrations", "పండుగలు, వేడుకలు"]), released: true, days: week32Days },
  { ...week(33, ["Neighbours & Community", "ఇరుగు పొరుగు, సమాజం"]), released: true, days: week33Days },
  { ...week(34, ["Small Talk", "చిన్న చిన్న కబుర్లు"]), released: true, days: week34Days },
  { ...week(35, ["Free Time & Hobbies", "ఖాళీ సమయం, అభిరుచులు"]), released: true, days: week35Days },
  { ...week(36, ["Describing People & Character", "మనుషులు, స్వభావం"]), released: true, days: week36Days },
  { ...week(37, ["Rules & Advice", "నియమాలు, సలహాలు"]), released: true, days: week37Days },
  { ...week(38, ["Making Plans with Friends", "స్నేహితులతో ప్లాన్లు"]), released: true, days: week38Days },
  { ...week(39, ["Polite English", "మర్యాదగా ఇంగ్లీష్"]), released: true, days: week39Days },
  { ...week(40, ["Checkpoint: Stage 2 Review", "చెక్‌పాయింట్: రోజువారీ జీవితం పునశ్చరణ"]), released: true, days: week40Days },
];

// Stages 3–5 (CURRICULUM §5–§7; reordered 2026-11-09 by the curriculum review: survival topics earlier, life themes for
// every grammar week, checkpoint weeks about every 12–14 weeks).
const week41Days: DayRef[] = [
  { id: "first-then-story-steps", kind: "lesson", title: { en: "First, Then, After That", te: "ముందు, తర్వాత" } },
  { id: "story-while-i-was-waiting", kind: "lesson", title: { en: "While I Was Waiting", te: "ఎదురుచూస్తుండగా" } },
  { id: "suddenly-luckily-story-words", kind: "lesson", title: { en: "Suddenly, Luckily", te: "ఉన్నట్టుండి, అదృష్టం కొద్దీ" } },
  { id: "what-happened-next-story", kind: "lesson", title: { en: "What Happened Next?", te: "తర్వాత ఏమైంది?" } },
  { id: "story-the-purse-on-the-bus", kind: "lesson", title: { en: "The Purse on the Bus", te: "బస్సులో పర్సు" } },
  { id: "w41-conversation", kind: "conversation", title: { en: "What a Day!", te: "ఏం రోజు అది!" } },
  { id: "w41-review", kind: "review", title: { en: "Story Time", te: "కథల సమయం" } },
];
const week42Days: DayRef[] = [
  { id: "used-to-village-life", kind: "lesson", title: { en: "We Used to Live in a Village", te: "ఒకప్పుడు ఊర్లో ఉండేవాళ్ళం" } },
  { id: "didnt-use-to-have-a-tv", kind: "lesson", title: { en: "We Didn't Use to Have a TV", te: "అప్పుడు TV లేదు" } },
  { id: "school-days-teacher-used-to", kind: "lesson", title: { en: "My School Days", te: "నా స్కూల్ రోజులు" } },
  { id: "games-we-used-to-play", kind: "lesson", title: { en: "Games We Used to Play", te: "చిన్నప్పటి ఆటలు" } },
  { id: "childhood-festival-memories", kind: "lesson", title: { en: "Festivals When I Was Young", te: "చిన్నప్పటి పండుగలు" } },
  { id: "w42-conversation", kind: "conversation", title: { en: "Memories of the Village", te: "ఊరి జ్ఞాపకాలు" } },
  { id: "w42-review", kind: "review", title: { en: "Those Were the Days", te: "ఆ రోజులే వేరు" } },
];
const week43Days: DayRef[] = [
  { id: "where-i-was-born-life-story", kind: "lesson", title: { en: "Where I Was Born", te: "నేను పుట్టిన ఊరు" } },
  { id: "my-working-years-life-story", kind: "lesson", title: { en: "My Working Years", te: "నేను పని చేసిన రోజులు" } },
  { id: "lived-here-since-life-story", kind: "lesson", title: { en: "I've Lived Here Since 1995", te: "1995 నుంచి ఇక్కడే" } },
  { id: "biggest-changes-in-my-life", kind: "lesson", title: { en: "The Biggest Changes", te: "పెద్ద మార్పులు" } },
  { id: "my-life-story-in-brief", kind: "lesson", title: { en: "My Life in a Few Sentences", te: "నా జీవితం కొన్ని మాటల్లో" } },
  { id: "w43-conversation", kind: "conversation", title: { en: "An Interview for the Colony Magazine", te: "కాలనీ పత్రిక ఇంటర్వ్యూ" } },
  { id: "w43-review", kind: "review", title: { en: "My Story So Far", te: "ఇప్పటి వరకు నా కథ" } },
];
const week44Days: DayRef[] = [
  { id: "colours", kind: "lesson", title: { en: "Colours", te: "రంగులు" } },
  { id: "the-best-and-cheapest", kind: "lesson", title: { en: "The Best, The Cheapest", te: "అన్నిటికంటే" } },
  { id: "a-nice-red-saree", kind: "lesson", title: { en: "A Nice Red Saree", te: "రంగు, సైజు వరుస" } },
  { id: "does-it-fit", kind: "lesson", title: { en: "Does It Fit?", te: "సరిపోతుందా?" } },
  { id: "at-the-tailor", kind: "lesson", title: { en: "At the Tailor", te: "టైలర్ దగ్గర" } },
  { id: "w44-conversation", kind: "conversation", title: { en: "Clothes for a Wedding", te: "పెళ్లికి బట్టలు" } },
  { id: "w44-review", kind: "review", title: { en: "Choosing Clothes", te: "బట్టలు ఎంచుకోవడం" } },
];
const week45Days: DayRef[] = [
  { id: "there-was-there-were", kind: "lesson", title: { en: "There Was, There Were", te: "ఉండేది, ఉండేవి" } },
  { id: "then-and-now", kind: "lesson", title: { en: "Then and Now", te: "అప్పుడు, ఇప్పుడు" } },
  { id: "famous-for-chillies", kind: "lesson", title: { en: "Famous for Chillies", te: "మా ఊరు దేనికి ప్రసిద్ధి" } },
  { id: "the-best-place-to-visit", kind: "lesson", title: { en: "The Best Place to Visit", te: "చూడదగ్గ ప్రదేశం" } },
  { id: "whats-it-like", kind: "lesson", title: { en: "What's It Like?", te: "ఎలా ఉంటుంది?" } },
  { id: "w45-conversation", kind: "conversation", title: { en: "Showing a Visitor Around", te: "ఊరు చూపించడం" } },
  { id: "w45-review", kind: "review", title: { en: "Our Town, Then and Now", te: "మా ఊరు: అప్పుడు, ఇప్పుడు" } },
];
const week46Days: DayRef[] = [
  { id: "i-think-local-opinions", kind: "lesson", title: { en: "I Think, I Don't Think", te: "నా ఉద్దేశంలో" } },
  { id: "in-my-opinion-the-park", kind: "lesson", title: { en: "In My Opinion", te: "నా అభిప్రాయం ప్రకారం" } },
  { id: "i-agree-but-colony", kind: "lesson", title: { en: "I Agree, But", te: "ఒప్పుకుంటాను, కానీ" } },
  { id: "disagreeing-politely-plastic-ban", kind: "lesson", title: { en: "I'm Not So Sure", te: "నాకు అలా అనిపించడం లేదు" } },
  { id: "what-do-you-think-library", kind: "lesson", title: { en: "What Do You Think?", te: "మీకేమనిపిస్తుంది?" } },
  { id: "w46-conversation", kind: "conversation", title: { en: "The Residents' Meeting", te: "రెసిడెంట్స్ మీటింగ్" } },
  { id: "w46-review", kind: "review", title: { en: "What's Your Opinion?", te: "మీ అభిప్రాయం ఏంటి?" } },
];
const week47Days: DayRef[] = [
  { id: "as-good-as-comparing-phones", kind: "lesson", title: { en: "As Good As", te: "అంతే బాగుంది" } },
  { id: "not-as-cheap-as-recharge-plans", kind: "lesson", title: { en: "Not as Cheap As", te: "అంత చవక కాదు" } },
  { id: "i-prefer-the-train", kind: "lesson", title: { en: "I Prefer the Train", te: "నాకు రైలే ఇష్టం" } },
  { id: "id-rather-choosing-a-clinic", kind: "lesson", title: { en: "I'd Rather", te: "దానికంటే ఇదే మేలు" } },
  { id: "which-would-you-choose-fan", kind: "lesson", title: { en: "Which Would You Choose?", te: "మీరైతే ఏది తీసుకుంటారు?" } },
  { id: "w47-conversation", kind: "conversation", title: { en: "Buying a New TV", te: "కొత్త TV కొనడం" } },
  { id: "w47-review", kind: "review", title: { en: "Making a Choice", te: "ఎంపిక చేసుకోవడం" } },
];
const week48Days: DayRef[] = [
  { id: "if-it-rains-ill-stay-home", kind: "lesson", title: { en: "If It Rains, I'll Stay Home", te: "వర్షం పడితే ఇంట్లోనే" } },
  { id: "if-the-train-is-late", kind: "lesson", title: { en: "If the Train Is Late", te: "రైలు ఆలస్యం అయితే" } },
  { id: "if-you-feel-dizzy-advice", kind: "lesson", title: { en: "If You Feel Dizzy", te: "కళ్ళు తిరిగితే" } },
  { id: "what-if-the-power-goes-off", kind: "lesson", title: { en: "What Will You Do If …?", te: "ఒకవేళ … అయితే?" } },
  { id: "if-all-goes-well-trip-plans", kind: "lesson", title: { en: "If All Goes Well", te: "అంతా బాగుంటే" } },
  { id: "w48-conversation", kind: "conversation", title: { en: "A Trip to Araku", te: "అరకు ప్రయాణం" } },
  { id: "w48-review", kind: "review", title: { en: "If Plans Change", te: "ప్లాన్ మారితే" } },
];
const week49Days: DayRef[] = [
  { id: "placing-an-order-online", kind: "lesson", title: { en: "Placing an Order", te: "ఆర్డర్ పెట్టడం" } },
  { id: "when-will-my-order-arrive", kind: "lesson", title: { en: "When Will It Arrive?", te: "ఎప్పుడు వస్తుంది?" } },
  { id: "reading-the-delivery-code", kind: "lesson", title: { en: "Reading the Code", te: "కోడ్ చెప్పడం" } },
  { id: "parcel-says-delivered-but", kind: "lesson", title: { en: "It Says Delivered, But", te: "డెలివరీ అయిందంటోంది, కానీ" } },
  { id: "leave-the-parcel-with-the-guard", kind: "lesson", title: { en: "Leave It With the Guard", te: "సెక్యూరిటీ దగ్గర ఇవ్వండి" } },
  { id: "w49-conversation", kind: "conversation", title: { en: "The Wrong Parcel", te: "తప్పు పార్సెల్" } },
  { id: "w49-review", kind: "review", title: { en: "Your Parcel Is on the Way", te: "మీ పార్సెల్ దారిలో ఉంది" } },
];
const week50Days: DayRef[] = [
  { id: "because-so-thats-why-returns", kind: "lesson", title: { en: "Because, So, That's Why", te: "అందుకే" } },
  { id: "im-afraid-polite-complaints", kind: "lesson", title: { en: "I'm Afraid There's a Problem", te: "ఒక చిన్న సమస్య ఉంది అండీ" } },
  { id: "id-like-to-return-this-kettle", kind: "lesson", title: { en: "I'd Like to Return This", te: "ఇది వాపస్ ఇవ్వాలి" } },
  { id: "when-will-i-get-my-refund", kind: "lesson", title: { en: "When Will I Get My Refund?", te: "రీఫండ్ ఎప్పుడు?" } },
  { id: "firm-and-polite-ask-the-manager", kind: "lesson", title: { en: "Could I Speak to the Manager?", te: "మేనేజర్‌తో మాట్లాడతాను" } },
  { id: "w50-conversation", kind: "conversation", title: { en: "A Faulty Ceiling Fan", te: "పని చేయని ఫ్యాన్" } },
  { id: "w50-review", kind: "review", title: { en: "Returns and Refunds", te: "వాపస్, రీఫండ్" } },
];
const week51Days: DayRef[] = [
  { id: "my-medical-history-new-doctor", kind: "lesson", title: { en: "My Medical History", te: "నా ఆరోగ్య వివరాలు" } },
  { id: "do-you-mean-doctor-checking", kind: "lesson", title: { en: "Do You Mean …?", te: "అంటే …?" } },
  { id: "so-i-should-doctor-advice", kind: "lesson", title: { en: "So I Should Walk Every Day?", te: "అంటే రోజూ నడవాలా?" } },
  { id: "reading-a-test-report", kind: "lesson", title: { en: "My Test Report", te: "టెస్ట్ రిపోర్ట్" } },
  { id: "options-and-next-steps-doctor", kind: "lesson", title: { en: "What Are the Options?", te: "ఇంకా ఏ దారులు ఉన్నాయి?" } },
  { id: "w51-conversation", kind: "conversation", title: { en: "A Follow-Up Visit", te: "ఫాలో-అప్ విజిట్" } },
  { id: "w51-review", kind: "review", title: { en: "Checking With the Doctor", te: "డాక్టర్‌తో సరిచూసుకోవడం" } },
];
const week52Days: DayRef[] = [
  { id: "admission-day-hospital-stay", kind: "lesson", title: { en: "Admission Day", te: "ఆసుపత్రిలో చేరే రోజు" } },
  { id: "visitors-allowed-hospital-stay", kind: "lesson", title: { en: "Are Visitors Allowed?", te: "విజిటర్స్‌ని రానిస్తారా?" } },
  { id: "on-the-ward-calling-the-nurse", kind: "lesson", title: { en: "On the Ward", te: "వార్డులో" } },
  { id: "before-after-until-operation", kind: "lesson", title: { en: "Before, After, Until", te: "ముందు, తర్వాత, అప్పటివరకు" } },
  { id: "discharge-day-and-the-bill", kind: "lesson", title: { en: "Discharge and the Bill", te: "డిశ్చార్జ్, బిల్లు" } },
  { id: "w52-conversation", kind: "conversation", title: { en: "Visiting a Neighbour in Hospital", te: "ఆసుపత్రిలో పొరుగువారిని చూడటం" } },
  { id: "w52-review", kind: "review", title: { en: "Hospital Rules", te: "ఆసుపత్రి నియమాలు" } },
];
const week53Days: DayRef[] = [
  { id: "ive-been-waiting-for-an-hour", kind: "lesson", title: { en: "I've Been Waiting for an Hour", te: "గంట నుంచి ఎదురుచూస్తున్నాను" } },
  { id: "how-long-have-you-been-waiting", kind: "lesson", title: { en: "How Long Have You Been Waiting?", te: "ఎంతసేపట్నుంచి ఉన్నారు?" } },
  { id: "still-going-or-done-queue", kind: "lesson", title: { en: "Still Going or Done?", te: "ఇంకా చేస్తున్నారా, అయిపోయిందా?" } },
  { id: "someone-jumped-the-queue", kind: "lesson", title: { en: "Someone Jumped the Queue", te: "క్యూలో ముందుకు దూరారు" } },
  { id: "how-much-longer-in-the-queue", kind: "lesson", title: { en: "How Much Longer?", te: "ఇంకా ఎంతసేపు?" } },
  { id: "w53-conversation", kind: "conversation", title: { en: "A Long Wait at the Hospital", te: "ఆసుపత్రిలో చాలాసేపు" } },
  { id: "w53-review", kind: "review", title: { en: "Still in the Queue", te: "ఇంకా క్యూలోనే" } },
];
const week54Days: DayRef[] = [
  { id: "stories-and-memories-mix", kind: "lesson", title: { en: "Stories and Memories", te: "కథలు, జ్ఞాపకాలు" } },
  { id: "opinions-and-choices-mix", kind: "lesson", title: { en: "Opinions and Choices", te: "అభిప్రాయాలు, ఎంపికలు" } },
  { id: "shop-and-hospital-problems-mix", kind: "lesson", title: { en: "Problems Sorted", te: "సమస్యలు తీరాయి" } },
  { id: "fix-it-clinic-3", kind: "lesson", title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" } },
  { id: "childhood-story-in-one-minute", kind: "lesson", title: { en: "A Story From My Childhood", te: "నా చిన్నప్పటి కథ" } },
  { id: "w54-conversation", kind: "conversation", title: { en: "Tea With Old Friends", te: "పాత స్నేహితులతో టీ" } },
  { id: "w54-review", kind: "review", title: { en: "Checkpoint", te: "చెక్‌పాయింట్" } },
];
const week55Days: DayRef[] = [
  { id: "travelling-to-tirupati-plans", kind: "lesson", title: { en: "We're Going to Tirupati", te: "తిరుపతి వెళ్తున్నాం" } },
  { id: "booking-a-train-berth", kind: "lesson", title: { en: "Booking a Train Ticket", te: "రైలు టికెట్ బుకింగ్" } },
  { id: "hotel-check-in-on-a-trip", kind: "lesson", title: { en: "Checking In", te: "హోటల్‌లో చెక్-ఇన్" } },
  { id: "darshan-tickets-and-queues", kind: "lesson", title: { en: "Darshan Tickets and Queues", te: "దర్శనం టికెట్లు, క్యూలు" } },
  { id: "catching-the-platform-announcement", kind: "lesson", title: { en: "Listen to the Announcement", te: "అనౌన్స్‌మెంట్ వినండి" } },
  { id: "w55-conversation", kind: "conversation", title: { en: "A Group Trip to Srisailam", te: "శ్రీశైలం యాత్ర" } },
  { id: "w55-review", kind: "review", title: { en: "Ready for the Trip", te: "ప్రయాణానికి రెడీ" } },
];
const week56Days: DayRef[] = [
  { id: "made-in-india-labels", kind: "lesson", title: { en: "Made in India", te: "మేడ్ ఇన్ ఇండియా" } },
  { id: "best-before-reading-labels", kind: "lesson", title: { en: "Best Before", te: "ఎప్పటిలోపు వాడాలి" } },
  { id: "signs-is-not-permitted", kind: "lesson", title: { en: "Parking Is Not Permitted", te: "ఇక్కడ పార్కింగ్ చేయకూడదు" } },
  { id: "are-these-handwoven-questions", kind: "lesson", title: { en: "Are These Woven by Hand?", te: "ఇవి చేనేతవేనా?" } },
  { id: "famous-products-of-our-region", kind: "lesson", title: { en: "Famous Products", te: "మన ప్రాంతం ప్రత్యేకతలు" } },
  { id: "w56-conversation", kind: "conversation", title: { en: "At a Handloom Exhibition", te: "చేనేత ఎగ్జిబిషన్" } },
  { id: "w56-review", kind: "review", title: { en: "Read the Label", te: "లేబుల్ చదవండి" } },
];
const week57Days: DayRef[] = [
  { id: "she-said-that-doctor-news", kind: "lesson", title: { en: "She Said That", te: "ఆవిడ చెప్పారు" } },
  { id: "told-me-to-walk-doctor", kind: "lesson", title: { en: "She Told Me to Walk", te: "నడవమని చెప్పారు" } },
  { id: "said-or-told-messages", kind: "lesson", title: { en: "Said or Told?", te: "said ఆ, told ఆ?" } },
  { id: "passing-on-office-messages", kind: "lesson", title: { en: "The Bank Called", te: "బ్యాంక్ నుంచి ఫోన్" } },
  { id: "what-did-they-say-meeting", kind: "lesson", title: { en: "What Did She Say?", te: "ఆవిడ ఏం చెప్పారు?" } },
  { id: "w57-conversation", kind: "conversation", title: { en: "A Message From the Clinic", te: "క్లినిక్ నుంచి మెసేజ్" } },
  { id: "w57-review", kind: "review", title: { en: "Passing It On", te: "మాట అందించడం" } },
];
const week58Days: DayRef[] = [
  { id: "can-you-tell-me-where-enquiry", kind: "lesson", title: { en: "Can You Tell Me Where?", te: "ఎక్కడో చెప్తారా?" } },
  { id: "do-you-know-when-the-train", kind: "lesson", title: { en: "Do You Know When?", te: "ఎప్పుడో తెలుసా?" } },
  { id: "id-like-to-know-help-desk", kind: "lesson", title: { en: "I'd Like to Know", te: "తెలుసుకోవాలి అండీ" } },
  { id: "polite-or-direct-questions", kind: "lesson", title: { en: "Polite or Direct?", te: "సూటిగా ఆ, మర్యాదగా ఆ?" } },
  { id: "enquiring-for-a-neighbour", kind: "lesson", title: { en: "Asking for Someone Else", te: "ఇంకొకరి కోసం అడగడం" } },
  { id: "w58-conversation", kind: "conversation", title: { en: "At the Bus Station Enquiry", te: "బస్ స్టేషన్ ఎంక్వయిరీ" } },
  { id: "w58-review", kind: "review", title: { en: "Polite Questions", te: "మర్యాద ప్రశ్నలు" } },
];
const week59Days: DayRef[] = [
  { id: "the-shop-which-repairs-radios", kind: "lesson", title: { en: "The Shop Which Repairs Radios", te: "రేడియోలు రిపేర్ చేసే షాపు" } },
  { id: "the-place-where-we-had-lunch", kind: "lesson", title: { en: "The Place Where We Had Lunch", te: "మనం భోజనం చేసిన చోటు" } },
  { id: "the-man-whose-shop", kind: "lesson", title: { en: "The Man Whose Shop Is Near the Temple", te: "గుడి దగ్గర షాపున్న ఆయన" } },
  { id: "recommend-a-dentist-who", kind: "lesson", title: { en: "Do You Know a Good Dentist?", te: "మంచి డెంటిస్ట్ తెలుసా?" } },
  { id: "best-places-in-our-area", kind: "lesson", title: { en: "The Best Places in Our Area", te: "మా ఏరియాలో మంచి చోట్లు" } },
  { id: "w59-conversation", kind: "conversation", title: { en: "A Visitor From Chennai", te: "చెన్నై నుంచి అతిథి" } },
  { id: "w59-review", kind: "review", title: { en: "Good Places, Good People", te: "మంచి చోట్లు, మంచి మనుషులు" } },
];
const week60Days: DayRef[] = [
  { id: "lakh-and-million-money", kind: "lesson", title: { en: "Lakh and Million", te: "లక్ష, మిలియన్" } },
  { id: "interest-rate-per-cent", kind: "lesson", title: { en: "Seven Per Cent Interest", te: "ఏడు శాతం వడ్డీ" } },
  { id: "opening-a-fixed-deposit", kind: "lesson", title: { en: "Opening a Fixed Deposit", te: "FD తెరవడం" } },
  { id: "asking-about-a-pension", kind: "lesson", title: { en: "Asking About a Pension", te: "పెన్షన్ గురించి అడగడం" } },
  { id: "saving-and-spending-habits", kind: "lesson", title: { en: "Saving and Spending", te: "పొదుపు, ఖర్చు" } },
  { id: "w60-conversation", kind: "conversation", title: { en: "At the Bank Manager's Desk", te: "బ్యాంక్ మేనేజర్ దగ్గర" } },
  { id: "w60-review", kind: "review", title: { en: "Money Talk", te: "డబ్బు మాటలు" } },
];
const week61Days: DayRef[] = [
  { id: "headlines-in-the-present", kind: "lesson", title: { en: "Rains Hit the City", te: "హెడ్‌లైన్స్ చదవడం" } },
  { id: "headlines-without-is-or-was", kind: "lesson", title: { en: "Flyover Opened", te: "ఫ్లైఓవర్ ప్రారంభం" } },
  { id: "headlines-with-to-for-future", kind: "lesson", title: { en: "Metro to Start in May", te: "మే నుంచి మెట్రో" } },
  { id: "did-you-hear-the-local-news", kind: "lesson", title: { en: "Did You Hear?", te: "విన్నారా?" } },
  { id: "is-this-news-forward-true", kind: "lesson", title: { en: "Is It True?", te: "ఇది నిజమేనా?" } },
  { id: "w61-conversation", kind: "conversation", title: { en: "The Morning Paper", te: "పొద్దున పేపర్" } },
  { id: "w61-review", kind: "review", title: { en: "In the News", te: "వార్తల్లో" } },
];
const week62Days: DayRef[] = [
  { id: "would-you-mind-office-call", kind: "lesson", title: { en: "Would You Mind Checking?", te: "కొంచెం చూస్తారా?" } },
  { id: "is-it-ok-if-appointments", kind: "lesson", title: { en: "Is It OK If I Come on Thursday?", te: "గురువారం రావొచ్చా?" } },
  { id: "could-you-possibly-formal", kind: "lesson", title: { en: "Could You Possibly …?", te: "వీలైతే … చేస్తారా?" } },
  { id: "im-calling-about-formal-call", kind: "lesson", title: { en: "I'm Calling About", te: "… గురించి ఫోన్ చేశాను" } },
  { id: "following-up-a-formal-request", kind: "lesson", title: { en: "Following Up", te: "మళ్ళీ గుర్తు చేయడం" } },
  { id: "w62-conversation", kind: "conversation", title: { en: "A Call to the Electricity Office", te: "కరెంట్ ఆఫీసుకి ఫోన్" } },
  { id: "w62-review", kind: "review", title: { en: "Calling an Office", te: "ఆఫీసుకి ఫోన్ చేయడం" } },
];
const week63Days: DayRef[] = [
  { id: "parts-of-an-official-letter", kind: "lesson", title: { en: "Dear Sir or Madam", te: "ఉత్తరం మొదలు, ముగింపు" } },
  { id: "you-are-requested-to-letters", kind: "lesson", title: { en: "You Are Requested To", te: "దయచేసి … చేయండి" } },
  { id: "power-shutdown-notice", kind: "lesson", title: { en: "Supply Will Be Interrupted", te: "కరెంట్ ఉండదు" } },
  { id: "a-final-reminder-letter", kind: "lesson", title: { en: "A Final Reminder", te: "చివరి రిమైండర్" } },
  { id: "is-this-letter-real", kind: "lesson", title: { en: "Is This Letter Real?", te: "ఇది నిజమైన ఉత్తరమేనా?" } },
  { id: "w63-conversation", kind: "conversation", title: { en: "A Letter From the Bank", te: "బ్యాంక్ నుంచి ఉత్తరం" } },
  { id: "w63-review", kind: "review", title: { en: "Letters and Notices", te: "ఉత్తరాలు, నోటీసులు" } },
];
const week64Days: DayRef[] = [
  { id: "would-you-like-guest-offers", kind: "lesson", title: { en: "Would You Like Some Coffee?", te: "కాఫీ తాగుతారా?" } },
  { id: "help-yourself-make-yourself-at-home", kind: "lesson", title: { en: "Help Yourself", te: "మొహమాటపడకండి" } },
  { id: "a-little-a-few-serving-food", kind: "lesson", title: { en: "A Little, A Few", te: "కొంచెం, కొన్ని" } },
  { id: "how-to-make-pesarattu-recipe", kind: "lesson", title: { en: "How Do You Make It?", te: "ఎలా చేస్తారు?" } },
  { id: "thank-you-for-coming-guests", kind: "lesson", title: { en: "Thank You for Coming", te: "వచ్చినందుకు థ్యాంక్స్" } },
  { id: "w64-conversation", kind: "conversation", title: { en: "Guests for Lunch", te: "భోజనానికి అతిథులు" } },
  { id: "w64-review", kind: "review", title: { en: "A Warm Welcome", te: "ఆప్యాయంగా ఆహ్వానం" } },
];
const week65Days: DayRef[] = [
  { id: "best-wishes-at-a-wedding", kind: "lesson", title: { en: "Best Wishes for the Wedding", te: "పెళ్లికి శుభాకాంక్షలు" } },
  { id: "congratulations-on-the-new-home", kind: "lesson", title: { en: "Congratulations on the New Home", te: "గృహప్రవేశం" } },
  { id: "sorry-for-your-loss-condolence", kind: "lesson", title: { en: "I'm Sorry for Your Loss", te: "పరామర్శ" } },
  { id: "offering-help-after-bad-news", kind: "lesson", title: { en: "Is There Anything I Can Do?", te: "నా వల్ల ఏమైనా సహాయం కావాలా?" } },
  { id: "a-few-words-at-a-function", kind: "lesson", title: { en: "A Few Words at a Function", te: "ఫంక్షన్‌లో రెండు మాటలు" } },
  { id: "w65-conversation", kind: "conversation", title: { en: "A Week of Functions", te: "ఫంక్షన్ల వారం" } },
  { id: "w65-review", kind: "review", title: { en: "Kind Words", te: "మంచి మాటలు" } },
];
const week66Days: DayRef[] = [
  { id: "turn-on-turn-off-at-home", kind: "lesson", title: { en: "Turn On, Turn Off", te: "ఆన్ చేయడం, ఆఫ్ చేయడం" } },
  { id: "pick-up-put-away-tidying", kind: "lesson", title: { en: "Pick Up, Put Away", te: "తీయడం, సర్దడం" } },
  { id: "look-for-find-out-at-home", kind: "lesson", title: { en: "Look For, Find Out", te: "వెతకడం, తెలుసుకోవడం" } },
  { id: "weve-run-out-of-sugar", kind: "lesson", title: { en: "We've Run Out of Sugar", te: "చక్కెర అయిపోయింది" } },
  { id: "clearing-out-the-storeroom", kind: "lesson", title: { en: "Clearing Out the Storeroom", te: "స్టోర్‌రూమ్ ఖాళీ చేయడం" } },
  { id: "w66-conversation", kind: "conversation", title: { en: "Cleaning Before Ugadi", te: "ఉగాది ముందు శుభ్రం" } },
  { id: "w66-review", kind: "review", title: { en: "Jobs Around the House", te: "ఇంటి పనులు" } },
];
const week67Days: DayRef[] = [
  { id: "trips-and-enquiries-mix", kind: "lesson", title: { en: "Trips and Enquiries", te: "ప్రయాణాలు, ఎంక్వయిరీలు" } },
  { id: "messages-and-letters-mix", kind: "lesson", title: { en: "Messages and Letters", te: "మెసేజ్‌లు, ఉత్తరాలు" } },
  { id: "money-and-guests-mix", kind: "lesson", title: { en: "Money and Guests", te: "డబ్బు, అతిథులు" } },
  { id: "fix-it-clinic-4", kind: "lesson", title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" } },
  { id: "a-trip-i-took-ninety-seconds", kind: "lesson", title: { en: "A Trip I Took", te: "నేను చేసిన ప్రయాణం" } },
  { id: "w67-conversation", kind: "conversation", title: { en: "A Weekend Trip", te: "వీకెండ్ ట్రిప్" } },
  { id: "w67-review", kind: "review", title: { en: "Checkpoint", te: "చెక్‌పాయింట్" } },
];
const week68Days: DayRef[] = [
  { id: "stopped-smoking-healthy-habits", kind: "lesson", title: { en: "Stop Smoking, Keep Walking", te: "మానేయడం, కొనసాగించడం" } },
  { id: "decided-to-walk-healthy-habits", kind: "lesson", title: { en: "I've Decided to Walk", te: "నడవాలని నిర్ణయించుకున్నాను" } },
  { id: "too-much-not-enough-food-sleep", kind: "lesson", title: { en: "Too Much, Not Enough", te: "మరీ ఎక్కువ, సరిపోదు" } },
  { id: "you-ought-to-health-advice", kind: "lesson", title: { en: "You Ought To", te: "చేయడం మంచిది" } },
  { id: "my-healthy-routine-now", kind: "lesson", title: { en: "My Healthy Routine", te: "నా మంచి అలవాట్లు" } },
  { id: "w68-conversation", kind: "conversation", title: { en: "The Yoga Class", te: "యోగా క్లాస్" } },
  { id: "w68-review", kind: "review", title: { en: "Good Habits Every Day", te: "రోజూ మంచి అలవాట్లు" } },
];
const week69Days: DayRef[] = [
  { id: "if-i-had-more-time-dreams", kind: "lesson", title: { en: "If I Had More Time", te: "టైమ్ ఎక్కువ ఉంటే" } },
  { id: "what-would-you-do-if-quiz", kind: "lesson", title: { en: "What Would You Do?", te: "మీరైతే ఏం చేస్తారు?" } },
  { id: "if-i-were-you-advice", kind: "lesson", title: { en: "If I Were You", te: "నేను మీ స్థానంలో ఉంటే" } },
  { id: "real-or-imagined-if", kind: "lesson", title: { en: "Real or Imagined?", te: "జరిగేదా, ఊహించేదా?" } },
  { id: "if-i-could-change-one-thing", kind: "lesson", title: { en: "If I Could Change One Thing", te: "ఒక్కటి మార్చగలిగితే" } },
  { id: "w69-conversation", kind: "conversation", title: { en: "Dreams Over Tea", te: "టీ తాగుతూ కలలు" } },
  { id: "w69-review", kind: "review", title: { en: "Dreams and Advice", te: "కలలు, సలహాలు" } },
];
const week70Days: DayRef[] = [
  { id: "i-wish-i-could-swim", kind: "lesson", title: { en: "I Wish I Could Swim", te: "ఈత వస్తే బాగుండేది" } },
  { id: "i-wish-it-wasnt-so-hot", kind: "lesson", title: { en: "I Wish It Wasn't So Hot", te: "ఇంత ఎండ లేకపోతే బాగుండు" } },
  { id: "i-should-have-brought-an-umbrella", kind: "lesson", title: { en: "I Should Have Brought an Umbrella", te: "గొడుగు తెచ్చుకోవాల్సింది" } },
  { id: "never-mind-replying-to-regrets", kind: "lesson", title: { en: "Never Mind", te: "పర్వాలేదు" } },
  { id: "looking-back-on-choices", kind: "lesson", title: { en: "Looking Back", te: "వెనక్కి తిరిగి చూస్తే" } },
  { id: "w70-conversation", kind: "conversation", title: { en: "A Rainy Day Out", te: "వర్షంలో బయట" } },
  { id: "w70-review", kind: "review", title: { en: "Wishes and Small Regrets", te: "కోరికలు, చిన్న బాధలు" } },
];
const week71Days: DayRef[] = [
  { id: "prices-have-gone-up-market", kind: "lesson", title: { en: "Prices Have Gone Up", te: "ధరలు పెరిగాయి" } },
  { id: "getting-more-expensive-every-year", kind: "lesson", title: { en: "It's Getting Hotter", te: "రోజురోజుకీ పెరుగుతోంది" } },
  { id: "a-dosa-used-to-cost", kind: "lesson", title: { en: "A Dosa Used to Cost Two Rupees", te: "అప్పట్లో దోస రెండు రూపాయలు" } },
  { id: "the-way-we-shop-has-changed", kind: "lesson", title: { en: "The Way We Shop Has Changed", te: "మనం కొనే తీరు మారింది" } },
  { id: "managing-rising-prices", kind: "lesson", title: { en: "Managing the Budget", te: "ఖర్చులు సర్దుకోవడం" } },
  { id: "w71-conversation", kind: "conversation", title: { en: "Old Prices, New Prices", te: "పాత ధరలు, కొత్త ధరలు" } },
  { id: "w71-review", kind: "review", title: { en: "Then and Now", te: "అప్పుడు, ఇప్పుడు" } },
];
const week72Days: DayRef[] = [
  { id: "ill-definitely-come-invitation", kind: "lesson", title: { en: "I'll Definitely Come", te: "తప్పకుండా వస్తాను" } },
  { id: "it-might-rain-later-plans", kind: "lesson", title: { en: "It Might Rain Later", te: "వర్షం పడొచ్చు" } },
  { id: "i-might-not-make-it", kind: "lesson", title: { en: "I Might Not Make It", te: "రాలేకపోవచ్చు" } },
  { id: "how-sure-are-you-results", kind: "lesson", title: { en: "How Sure Are You?", te: "ఎంత ఖచ్చితంగా?" } },
  { id: "maybe-next-month-plans", kind: "lesson", title: { en: "Maybe Next Month", te: "వచ్చే నెల కావచ్చు" } },
  { id: "w72-conversation", kind: "conversation", title: { en: "Will the Function Go Ahead?", te: "ఫంక్షన్ జరుగుతుందా?" } },
  { id: "w72-review", kind: "review", title: { en: "Sure or Not Sure?", te: "ఖచ్చితమా, అనుమానమా?" } },
];
const week73Days: DayRef[] = [
  { id: "there-must-be-a-power-cut", kind: "lesson", title: { en: "There Must Be a Power Cut", te: "కరెంట్ పోయి ఉంటుంది" } },
  { id: "the-shop-might-be-closed", kind: "lesson", title: { en: "It Might Be Closed", te: "మూసేసి ఉండొచ్చు" } },
  { id: "that-cant-be-my-bill", kind: "lesson", title: { en: "That Can't Be Right", te: "అలా అయ్యుండదు" } },
  { id: "he-must-be-sleeping-guesses", kind: "lesson", title: { en: "He Must Be Sleeping", te: "నిద్రపోతూ ఉంటారు" } },
  { id: "why-is-the-road-blocked", kind: "lesson", title: { en: "Why Is the Road Blocked?", te: "రోడ్డు ఎందుకు మూసేశారు?" } },
  { id: "w73-conversation", kind: "conversation", title: { en: "Where Is Everyone?", te: "అందరూ ఎక్కడ?" } },
  { id: "w73-review", kind: "review", title: { en: "Guess the Reason", te: "కారణం ఊహించండి" } },
];
const week74Days: DayRef[] = [
  { id: "first-then-how-it-works", kind: "lesson", title: { en: "How Does It Work?", te: "ఇది ఎలా పనిచేస్తుంది?" } },
  { id: "the-milk-is-collected-dairy", kind: "lesson", title: { en: "The Milk Is Collected", te: "పాలు సేకరిస్తారు" } },
  { id: "how-your-application-is-processed", kind: "lesson", title: { en: "How Your Application Is Processed", te: "మీ అప్లికేషన్ ఎలా ముందుకు వెళ్తుంది" } },
  { id: "using-a-cash-deposit-machine", kind: "lesson", title: { en: "Using a Cash Deposit Machine", te: "క్యాష్ డిపాజిట్ మెషీన్" } },
  { id: "how-mango-pickle-is-made", kind: "lesson", title: { en: "How Avakaya Is Made", te: "ఆవకాయ ఎలా పెడతారు" } },
  { id: "w74-conversation", kind: "conversation", title: { en: "A New Water Purifier", te: "కొత్త వాటర్ ప్యూరిఫైయర్" } },
  { id: "w74-review", kind: "review", title: { en: "Step by Step", te: "ఒక్కో step గా" } },
];
const week75Days: DayRef[] = [
  { id: "garbage-hasnt-been-collected", kind: "lesson", title: { en: "The Garbage Hasn't Been Collected", te: "చెత్త తీసుకెళ్లలేదు" } },
  { id: "no-water-since-monday-complaint", kind: "lesson", title: { en: "We Haven't Had Water Since Monday", te: "సోమవారం నుంచి నీళ్ళు లేవు" } },
  { id: "the-road-is-full-of-potholes", kind: "lesson", title: { en: "The Road Is Full of Potholes", te: "రోడ్డంతా గుంతలే" } },
  { id: "registering-a-civic-complaint", kind: "lesson", title: { en: "Registering a Complaint", te: "ఫిర్యాదు చేయడం" } },
  { id: "speaking-at-the-ward-meeting", kind: "lesson", title: { en: "Speaking at the Ward Meeting", te: "వార్డ్ మీటింగ్‌లో మాట్లాడటం" } },
  { id: "w75-conversation", kind: "conversation", title: { en: "Power Cuts in Summer", te: "వేసవిలో కరెంట్ కోతలు" } },
  { id: "w75-review", kind: "review", title: { en: "Speaking Up for Our Colony", te: "మా కాలనీ కోసం మాట్లాడటం" } },
];
const week76Days: DayRef[] = [
  { id: "youre-new-here-arent-you", kind: "lesson", title: { en: "You're New Here, Aren't You?", te: "మీరు ఇక్కడికి కొత్త కదా?" } },
  { id: "you-live-nearby-dont-you", kind: "lesson", title: { en: "You Live Nearby, Don't You?", te: "మీరు దగ్గర్లోనే ఉంటారు కదా?" } },
  { id: "asking-or-agreeing-tags", kind: "lesson", title: { en: "Asking or Agreeing?", te: "అడుగుతున్నారా, ఒప్పుకుంటున్నారా?" } },
  { id: "so-do-i-neither-do-i", kind: "lesson", title: { en: "So Do I, Neither Do I", te: "నేను కూడా" } },
  { id: "keeping-the-park-chat-going", kind: "lesson", title: { en: "Keeping the Chat Going", te: "కబుర్లు కొనసాగించడం" } },
  { id: "w76-conversation", kind: "conversation", title: { en: "Evening at the Park", te: "పార్క్‌లో సాయంత్రం" } },
  { id: "w76-review", kind: "review", title: { en: "Isn't It? So Do I!", te: "కదా? నేను కూడా!" } },
];
const week77Days: DayRef[] = [
  { id: "bored-or-boring-films", kind: "lesson", title: { en: "Bored or Boring?", te: "బోర్ కొట్టిందా, బోరింగా ఉందా?" } },
  { id: "interested-or-interesting-shows", kind: "lesson", title: { en: "Interested or Interesting?", te: "ఆసక్తి" } },
  { id: "so-good-such-a-good-serial", kind: "lesson", title: { en: "So Good, Such a Good Story", te: "అంత బాగుంది" } },
  { id: "what-are-you-watching-these-days", kind: "lesson", title: { en: "What Are You Watching These Days?", te: "ఈ మధ్య ఏం చూస్తున్నారు?" } },
  { id: "my-favourite-old-telugu-film", kind: "lesson", title: { en: "My Favourite Old Film", te: "నాకు ఇష్టమైన పాత సినిమా" } },
  { id: "w77-conversation", kind: "conversation", title: { en: "A Film at the Theatre", te: "థియేటర్‌లో సినిమా" } },
  { id: "w77-review", kind: "review", title: { en: "Let's Talk About Films", te: "సినిమాల గురించి మాట్లాడుకుందాం" } },
];
const week78Days: DayRef[] = [
  { id: "lift-or-elevator-accents", kind: "lesson", title: { en: "Lift or Elevator?", te: "లిఫ్ట్ ఆ, ఎలివేటర్ ఆ?" } },
  { id: "say-that-again-other-accents", kind: "lesson", title: { en: "Could You Say That Again?", te: "మళ్ళీ చెప్తారా?" } },
  { id: "hearing-the-american-t", kind: "lesson", title: { en: "The American T, the British R", te: "అమెరికన్, బ్రిటిష్ ఉచ్చారణ" } },
  { id: "same-thing-different-words", kind: "lesson", title: { en: "Same Thing, Different Words", te: "ఒకే అర్థం, వేరే పదాలు" } },
  { id: "following-a-video-from-abroad", kind: "lesson", title: { en: "Following a Video", te: "వీడియో అర్థం చేసుకోవడం" } },
  { id: "w78-conversation", kind: "conversation", title: { en: "Visitors From Abroad", te: "విదేశీ అతిథులు" } },
  { id: "w78-review", kind: "review", title: { en: "Many Accents, One English", te: "యాసలు వేరు, ఇంగ్లీష్ ఒకటే" } },
];
const week79Days: DayRef[] = [
  { id: "you-should-really-try-it", kind: "lesson", title: { en: "You Should Really Try It", te: "ఒక్కసారి try చేయండి" } },
  { id: "it-might-be-better-to", kind: "lesson", title: { en: "It Might Be Better To", te: "అలా చేస్తే మంచిదేమో" } },
  { id: "giving-reasons-to-persuade", kind: "lesson", title: { en: "The Good Thing Is", te: "ఇందులో మంచి ఏంటంటే" } },
  { id: "answering-doubts-gently", kind: "lesson", title: { en: "I Understand, But", te: "మీరు చెప్పేది అర్థమైంది, కానీ" } },
  { id: "persuading-the-colony-together", kind: "lesson", title: { en: "Let's Do It Together", te: "కలిసి చేద్దాం" } },
  { id: "w79-conversation", kind: "conversation", title: { en: "Joining the Walking Group", te: "వాకింగ్ గ్రూప్‌లో చేరడం" } },
  { id: "w79-review", kind: "review", title: { en: "Kind Words That Persuade", te: "ఒప్పించే మంచి మాటలు" } },
];
const week80Days: DayRef[] = [
  { id: "habits-and-dreams-mix", kind: "lesson", title: { en: "Habits and Dreams", te: "అలవాట్లు, కలలు" } },
  { id: "guesses-and-plans-mix", kind: "lesson", title: { en: "Guesses and Plans", te: "ఊహలు, ప్లాన్లు" } },
  { id: "town-problems-and-persuading-mix", kind: "lesson", title: { en: "Town Problems", te: "ఊరి సమస్యలు" } },
  { id: "fix-it-clinic-5", kind: "lesson", title: { en: "Fix-It Clinic", te: "తప్పులు సరిచేసుకుందాం" } },
  { id: "my-town-in-two-minutes", kind: "lesson", title: { en: "My Town in Two Minutes", te: "రెండు నిమిషాల్లో మా ఊరు" } },
  { id: "w80-conversation", kind: "conversation", title: { en: "A Visit From the Corporator", te: "కార్పొరేటర్ సందర్శన" } },
  { id: "w80-review", kind: "review", title: { en: "Stage 3 Review", te: "ధైర్యంగా మాట్లాడటం పునశ్చరణ" } },
];
const stage3Weeks: Week[] = [
  { ...week(41, ["Telling a Story", "కథ చెప్పడం"]), released: true, days: week41Days },
  { ...week(42, ["When I Was Young", "నేను చిన్నప్పుడు"]), released: true, days: week42Days },
  { ...week(43, ["My Life Story", "నా జీవిత కథ"]), released: true, days: week43Days },
  { ...week(44, ["Clothes & the Tailor", "బట్టలు, టైలర్"]), released: true, days: week44Days },
  { ...week(45, ["Describing Places", "మా ఊరు ఎలా ఉంటుంది"]), released: true, days: week45Days },
  { ...week(46, ["Giving Opinions", "అభిప్రాయాలు చెప్పడం"]), released: true, days: week46Days },
  { ...week(47, ["Comparing & Choosing", "పోల్చి ఎంచుకోవడం"]), released: true, days: week47Days },
  { ...week(48, ["If It Rains …", "వర్షం పడితే …"]), released: true, days: week48Days },
  { ...week(49, ["Online Shopping & Deliveries", "ఆన్‌లైన్ షాపింగ్, డెలివరీలు"]), released: true, days: week49Days },
  { ...week(50, ["Problems, Returns & Refunds", "సమస్యలు, రిటర్న్, రీఫండ్"]), released: true, days: week50Days },
  { ...week(51, ["Understanding the Doctor", "డాక్టర్ చెప్పేది అర్థం చేసుకోవడం"]), released: true, days: week51Days },
  { ...week(52, ["A Hospital Stay", "ఆసుపత్రిలో ఉండటం"]), released: true, days: week52Days },
  { ...week(53, ["Waiting in Line", "క్యూలో ఎదురుచూపు"]), released: true, days: week53Days },
  { ...week(54, ["Checkpoint: Telling and Explaining", "చెక్‌పాయింట్: చెప్పడం, వివరించడం"]), released: true, days: week54Days },
  { ...week(55, ["Travel in India & Pilgrimage", "ప్రయాణాలు, తీర్థయాత్రలు"]), released: true, days: week55Days },
  { ...week(56, ["Made in India: Labels & Signs", "మేడ్ ఇన్ ఇండియా: లేబుల్స్, బోర్డులు"]), released: true, days: week56Days },
  { ...week(57, ["The Doctor Said …", "డాక్టర్ ఏం చెప్పారంటే …"]), released: true, days: week57Days },
  { ...week(58, ["At the Enquiry Counter", "ఎంక్వయిరీ కౌంటర్ దగ్గర"]), released: true, days: week58Days },
  { ...week(59, ["The Shop Where …", "… దొరికే షాపు"]), released: true, days: week59Days },
  { ...week(60, ["Money, Savings & Pensions", "డబ్బు, పొదుపు, పెన్షన్"]), released: true, days: week60Days },
  { ...week(61, ["News Headlines", "వార్తల హెడ్‌లైన్స్"]), released: true, days: week61Days },
  { ...week(62, ["Formal Requests & Calling Offices", "ఆఫీసులకు మర్యాదగా అడగడం"]), released: true, days: week62Days },
  { ...week(63, ["Official Letters & Notices", "ఆఫీసు ఉత్తరాలు, నోటీసులు"]), released: true, days: week63Days },
  { ...week(64, ["Hosting Guests", "అతిథులకు మర్యాదలు"]), released: true, days: week64Days },
  { ...week(65, ["Social Occasions", "శుభకార్యాలు, పరామర్శలు"]), released: true, days: week65Days },
  { ...week(66, ["Phrasal Verbs at Home", "ఇంట్లో phrasal verbs"]), released: true, days: week66Days },
  { ...week(67, ["Checkpoint: Getting Things Done", "చెక్‌పాయింట్: పనులు చక్కబెట్టడం"]), released: true, days: week67Days },
  { ...week(68, ["Healthy Habits", "మంచి అలవాట్లు"]), released: true, days: week68Days },
  { ...week(69, ["If I Had More Time …", "నాకు ఇంకా టైమ్ ఉంటే …"]), released: true, days: week69Days },
  { ...week(70, ["Wishes & Regrets", "అలా జరిగుంటే బాగుండేది"]), released: true, days: week70Days },
  { ...week(71, ["Prices Have Gone Up", "ధరలు పెరిగిపోయాయి"]), released: true, days: week71Days },
  { ...week(72, ["Maybe, Probably, Definitely", "బహుశా, తప్పకుండా"]), released: true, days: week72Days },
  { ...week(73, ["It Must Be …", "అది … అయ్యుంటుంది"]), released: true, days: week73Days },
  { ...week(74, ["How It Works", "ఇది ఎలా పనిచేస్తుంది"]), released: true, days: week74Days },
  { ...week(75, ["Neighbourhood Problems", "కాలనీ సమస్యలు"]), released: true, days: week75Days },
  { ...week(76, ["Chatting at the Park", "పార్క్‌లో కబుర్లు"]), released: true, days: week76Days },
  { ...week(77, ["Films, TV & Serials", "సినిమాలు, టీవీ, సీరియల్స్"]), released: true, days: week77Days },
  { ...week(78, ["Different Accents", "వేర్వేరు యాసలు"]), released: true, days: week78Days },
  { ...week(79, ["Persuading Gently", "మెల్లగా ఒప్పించడం"]), released: true, days: week79Days },
  { ...week(80, ["Checkpoint: Stage 3 Review", "చెక్‌పాయింట్: ధైర్యంగా మాట్లాడటం పునశ్చరణ"]), released: true, days: week80Days },
];

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
      id: "family",
      title: { en: "My Family", te: "నా కుటుంబం" },
      goal: { en: "Talking with my family", te: "నా కుటుంబంతో మాట్లాడటం" },
      forWho: {
        en: "For learners who want to talk about their husband or wife, children and in-laws.",
        te: "భార్య లేదా భర్త, పిల్లలు, అత్తమామల గురించి ఇంగ్లీష్‌లో మాట్లాడాలనుకునే వారికి.",
      },
      offerAtWeek: 4,
      weeks: weeks(1, [
        ["My Family", "నా కుటుంబం"],
        ["What They Do", "ఎవరు ఏం చేస్తారు"],
        ["At Home Together", "ఇంట్లో అందరం"],
        ["Family Functions", "ఇంట్లో శుభకార్యాలు"],
        ["Speaking for the Family", "కుటుంబం తరఫున మాట్లాడటం"],
        ["Family News & Review", "కుటుంబ విశేషాలు"],
      ]),
    },
    {
      id: "grandchildren",
      title: { en: "Talking with Grandchildren", te: "మనవళ్లతో మాట్లాడటం" },
      goal: { en: "Talking with my grandchildren", te: "మనవళ్లతో మాట్లాడటం" },
      forWho: {
        en: "For learners who want to chat with their grandchildren in English.",
        te: "మనవళ్లతో ఇంగ్లీష్‌లో మాట్లాడాలనుకునే వారికి.",
      },
      offerAtWeek: 8,
      weeks: weeks(1, [
        ["Hello & Video Calls", "హలో, వీడియో కాల్స్"],
        ["Playing Together", "కలిసి ఆడుకుందాం"],
        ["School Talk", "స్కూల్ కబుర్లు"],
        ["Mealtime", "భోజనం సమయం"],
        ["Telling Stories", "కథలు చెప్పడం"],
        ["Praise & Care", "మెచ్చుకోలు, జాగ్రత్త"],
        ["Festivals & Traditions for Kids", "పిల్లలకు మన పండుగలు"],
        ["Their World & Review", "వాళ్ళ ప్రపంచం"],
      ]),
    },
    {
      id: "abroad",
      title: { en: "Visiting Family Abroad", te: "విదేశాల్లో కుటుంబాన్ని కలవడం" },
      goal: { en: "Visiting family abroad", te: "విదేశాల్లో కుటుంబాన్ని కలవడం" },
      forWho: {
        en: "For learners who plan to visit family in another country: the journey, then living there.",
        te: "విదేశాల్లో ఉన్న కుటుంబాన్ని కలవడానికి వెళ్లేవారికి: ప్రయాణం, తర్వాత అక్కడి రోజులు.",
      },
      offerAtWeek: 8,
      soonWeek: 4,
      weeks: weeks(1, [
        ["Getting Ready", "ప్రయాణానికి సిద్ధం"],
        ["Airport Check-in & Security", "చెక్-ఇన్, సెక్యూరిటీ"],
        ["On the Flight", "విమానంలో"],
        ["Immigration & Customs", "ఇమ్మిగ్రేషన్, కస్టమ్స్"],
        ["Phone, Money & Safety", "ఫోన్, డబ్బు, భద్రత"],
        ["Flying Home", "తిరుగు ప్రయాణం"],
        ["First Days There", "అక్కడ మొదటి రోజులు"],
        ["Supermarket Abroad", "విదేశీ సూపర్ మార్కెట్"],
        ["Doctor & Pharmacy Abroad", "విదేశాల్లో డాక్టర్, మందులు"],
        ["Small Talk with Neighbours", "పొరుగువాళ్ళతో కబుర్లు"],
        ["Temple & Community Abroad", "విదేశాల్లో గుడి, సమాజం"],
        ["Sightseeing & Review", "చూడదగ్గ ప్రదేశాలు, పునశ్చరణ"],
      ]),
    },
    {
      id: "work",
      title: { en: "English for Work", te: "పనిలో ఇంగ్లీష్" },
      goal: { en: "My work", te: "నా పని" },
      forWho: {
        en: "For learners who use English at work: shops, driving and delivery, homes, offices, interviews.",
        te: "పనిలో ఇంగ్లీష్ వాడే వారికి: షాపులు, డ్రైవింగ్, డెలివరీ, ఇళ్ళు, ఆఫీసులు, ఇంటర్వ్యూలు.",
      },
      offerAtWeek: 12,
      weeks: weeks(1, [
        ["Introducing Yourself at Work", "పనిలో పరిచయం"],
        ["Job Interviews", "ఉద్యోగ ఇంటర్వ్యూ"],
        ["Customers in a Shop", "షాపులో కస్టమర్లు"],
        ["Drivers & Delivery", "డ్రైవర్లు, డెలివరీ"],
        ["Working in a Home", "ఇళ్ళలో పని"],
        ["Office & Phone Manners", "ఆఫీసు, ఫోన్ మర్యాదలు"],
        ["Leave, Pay & Safety", "సెలవు, జీతం, భద్రత"],
        ["My Work Story & Review", "నా పని కథ"],
      ]),
    },
    {
      id: "care",
      title: { en: "Hospital & Caregiving", te: "ఆసుపత్రి, సేవ" },
      goal: { en: "Hospital and caring for someone", te: "ఆసుపత్రి, ఒకరిని చూసుకోవడం" },
      forWho: {
        en: "For learners who stay in hospital, or look after someone who is ill or old.",
        te: "ఆసుపత్రిలో ఉండేవారికి, లేదా అనారోగ్యంతో ఉన్నవారిని, పెద్దవాళ్ళని చూసుకునే వారికి.",
      },
      offerAtWeek: 18,
      weeks: weeks(1, [
        ["Admission Day", "ఆసుపత్రిలో చేరే రోజు"],
        ["On the Ward", "వార్డులో"],
        ["Speaking for the Patient", "పేషెంట్ తరఫున మాట్లాడటం"],
        ["Medicines & Care at Home", "ఇంట్లో మందులు, జాగ్రత్త"],
        ["Caring for an Elder", "పెద్దవాళ్ళ సేవ"],
        ["Discharge, Bills & Review", "డిశ్చార్జ్, బిల్లులు"],
      ]),
    },
    {
      id: "faith",
      title: { en: "Faith & Community", te: "భక్తి, సమాజం" },
      goal: { en: "Temple, church, mosque and community", te: "గుడి, చర్చి, మసీదు, సమాజం" },
      forWho: {
        en: "For learners who want English for the temple, church or mosque, pilgrimages and community service.",
        te: "గుడి, చర్చి, మసీదు, తీర్థయాత్రలు, సేవా కార్యక్రమాల కోసం ఇంగ్లీష్ కావాలనుకునే వారికి.",
      },
      offerAtWeek: 33,
      weeks: weeks(1, [
        ["At the Temple, Church or Mosque", "గుడి, చర్చి, మసీదులో"],
        ["Pilgrimages", "తీర్థయాత్రలు"],
        ["Explaining My Faith", "మా పూజలు, పండుగల గురించి చెప్పడం"],
        ["Seva & Service", "సేవా కార్యక్రమాలు"],
        ["Prayer Groups & Review", "ప్రార్థనా సమావేశాలు, పునశ్చరణ"],
      ]),
    },
  ],
};

/**
 * Checkpoints (CURRICULUM §2b): a checkpoint week closes each block of 12–14 weeks; its Review Day is the check, and the
 * end of the week shows what the learner can now do and a certificate to share. Each checkpoint's data is added when
 * its week is written (`course.test.ts` checks every released checkpoint week has it).
 */
export const CHECKPOINT_WEEKS = [12, 26, 40, 54, 67, 80, 94, 107, 120, 135, 150] as const;
export type Checkpoint = { n: number; week: number; title: Bi; items: Bi[]; certificate: string };
export const checkpoints: Checkpoint[] = [
  {
    n: 1,
    week: 12,
    title: { en: "Foundations", te: "పునాది" },
    items: [
      { en: "introduce yourself", te: "మీ గురించి చెప్పడం" },
      { en: "give your phone number and address", te: "మీ ఫోన్ నంబర్, అడ్రస్ చెప్పడం" },
      { en: "spell your name", te: "మీ పేరు స్పెల్లింగ్ చెప్పడం" },
      { en: "ask someone to say it again slowly", te: "మళ్ళీ నెమ్మదిగా చెప్పమని అడగడం" },
      { en: "ask for help", te: "సహాయం అడగడం" },
    ],
    certificate: "I can introduce myself, give my phone number and address, spell my name, ask someone to say it again slowly, and ask for help in English.",
  },
  {
    n: 2,
    week: 26,
    title: { en: "Out and About", te: "బయట పనులు" },
    items: [
      { en: "buy things and check the change", te: "వస్తువులు కొని, చిల్లర సరిచూసుకోవడం" },
      { en: "find your way and take a bus or auto", te: "దారి కనుక్కుని, బస్ లేదా ఆటో ఎక్కడం" },
      { en: "tell a doctor what is wrong and for how long", te: "ఏం బాలేదో, ఎన్ని రోజులుగానో డాక్టర్‌కి చెప్పడం" },
      { en: "call 108 and say where you are", te: "108 కి ఫోన్ చేసి, మీరు ఎక్కడ ఉన్నారో చెప్పడం" },
      { en: "refuse an OTP caller", te: "OTP అడిగేవాళ్ళకి చెప్పకుండా ఫోన్ పెట్టేయడం" },
    ],
    certificate:
      "I can buy things and check the change, find my way and take a bus or auto, tell a doctor what is wrong and for how long, call 108 and say where I am, and refuse an OTP caller in English.",
  },
  {
    n: 3,
    week: 40,
    title: { en: "Everyday Life", te: "రోజువారీ జీవితం" },
    items: [
      { en: "fill a form and spell names aloud", te: "ఫారం నింపి, పేర్ల స్పెల్లింగ్ గట్టిగా చెప్పడం" },
      { en: "ask at a government office", te: "ప్రభుత్వ ఆఫీసులో అడిగి తెలుసుకోవడం" },
      { en: "report a broken product and get a visit date", te: "పాడైన వస్తువు గురించి చెప్పి, ఎప్పుడు వస్తారో తెలుసుకోవడం" },
      { en: "make small talk and plans", te: "చిన్న చిన్న కబుర్లు చెప్పడం, ప్లాన్లు వేయడం" },
      { en: "say sorry and thank you naturally", te: "సహజంగా sorry, thank you చెప్పడం" },
    ],
    certificate:
      "I can fill a form and spell names aloud, ask at a government office, report a broken product and get a visit date, make small talk and plans, and say sorry and thank you naturally in English.",
  },
  {
    n: 4,
    week: 54,
    title: { en: "Telling and Explaining", te: "చెప్పడం, వివరించడం" },
    items: [
      { en: "tell a story from your past", te: "మీ గతంలోని ఒక కథ చెప్పడం" },
      { en: "give an opinion with a reason", te: "కారణంతో సహా మీ అభిప్రాయం చెప్పడం" },
      { en: "return something you bought", te: "కొన్న వస్తువుని వాపస్ ఇవ్వడం" },
      { en: "follow the doctor's explanation", te: "డాక్టర్ చెప్పేది అర్థం చేసుకోవడం" },
      { en: "manage a hospital stay", te: "ఆసుపత్రిలో ఉండాల్సి వచ్చినప్పుడు పనులన్నీ చూసుకోవడం" },
    ],
    certificate:
      "I can tell a story from my past, give an opinion with a reason, return something I bought, follow the doctor's explanation and manage a hospital stay in English.",
  },
  {
    n: 5,
    week: 67,
    title: { en: "Getting Things Done", te: "పనులు చక్కబెట్టడం" },
    items: [
      { en: "book a trip and follow announcements", te: "ప్రయాణం బుక్ చేసి, అనౌన్స్‌మెంట్లు అర్థం చేసుకోవడం" },
      { en: "pass on what the doctor said", te: "డాక్టర్ చెప్పింది ఇంకొకరికి చెప్పడం" },
      { en: "ask at an enquiry counter", te: "ఎంక్వయిరీ కౌంటర్ దగ్గర మర్యాదగా అడగడం" },
      { en: "talk about savings and pensions", te: "పొదుపు, పెన్షన్ల గురించి మాట్లాడటం" },
      { en: "understand an official letter and look after guests", te: "ఆఫీసు ఉత్తరం అర్థం చేసుకోవడం, అతిథులకు మర్యాదలు చేయడం" },
    ],
    certificate:
      "I can book a trip and follow announcements, pass on what the doctor said, ask at an enquiry counter, talk about savings and pensions, understand an official letter and look after guests in English.",
  },
  {
    n: 6,
    week: 80,
    title: { en: "Confident Conversations", te: "ధైర్యంగా మాట్లాడటం" },
    items: [
      { en: "talk about healthy habits", te: "మంచి అలవాట్ల గురించి మాట్లాడటం" },
      { en: "imagine and regret", te: "ఇలా ఉంటే బాగుండు, అలా చేయాల్సింది అని చెప్పడం" },
      { en: "guess the reason for something", te: "ఏదైనా ఎందుకు జరిగిందో ఊహించి చెప్పడం" },
      { en: "complain to officials about local problems", te: "ఊరి సమస్యల గురించి అధికారులకు ఫిర్యాదు చేయడం" },
      { en: "follow other accents and persuade gently", te: "వేరే యాసలు అర్థం చేసుకోవడం, మెల్లగా ఒప్పించడం" },
    ],
    certificate:
      "I can talk about healthy habits, imagine and regret, guess the reason for something, complain to officials about local problems, follow other accents and persuade gently in English.",
  },
];

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
