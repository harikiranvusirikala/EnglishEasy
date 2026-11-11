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
