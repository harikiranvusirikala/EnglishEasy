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

// Week 3 (CURRICULUM §3).
const week3Days: DayRef[] = [
  { id: "numbers-and-counting", kind: "lesson", title: { en: "Numbers", te: "సంఖ్యలు" } },
  { id: "telling-the-time", kind: "lesson", title: { en: "Telling the Time", te: "సమయం చెప్పడం" } },
  { id: "days-and-dates", kind: "lesson", title: { en: "Days, Months & Dates", te: "రోజులు, నెలలు, తేదీలు" } },
  { id: "prices-and-money", kind: "lesson", title: { en: "Prices & Money", te: "ధరలు, డబ్బు" } },
  { id: "big-numbers-lakh", kind: "lesson", title: { en: "Big Numbers", te: "పెద్ద సంఖ్యలు" } },
  { id: "w3-conversation", kind: "conversation", title: { en: "At the Vegetable Market", te: "కూరగాయల మార్కెట్‌లో" } },
  { id: "w3-review", kind: "review", title: { en: "Numbers Everywhere", te: "అంతటా సంఖ్యలు" } },
];

// Week 4 (CURRICULUM §3).
const week4Days: DayRef[] = [
  { id: "have-and-has", kind: "lesson", title: { en: "Have & Has", te: "నాకు ఉంది, అతనికి ఉంది" } },
  { id: "my-your-his-her", kind: "lesson", title: { en: "My, Your, His, Her", te: "నా, మీ, అతని, ఆమె" } },
  { id: "possessive-s", kind: "lesson", title: { en: "Ravi's House", te: "ఒకరి వస్తువు ('s)" } },
  { id: "describing-people", kind: "lesson", title: { en: "Describing People", te: "మనుషుల వర్ణన" } },
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
  { id: "always-usually-never", kind: "lesson", title: { en: "Always, Usually, Never", te: "ఎప్పుడూ, సాధారణంగా, ఎప్పుడూ కాదు" } },
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
  { id: "sorry-can-you-repeat", kind: "lesson", title: { en: "Sorry, Can You Repeat?", te: "అర్థం కాకపోతే" } },
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
  { id: "can-i-have-please", kind: "lesson", title: { en: "Can I Have …, Please?", te: "… ఇవ్వగలరా?" } },
  { id: "a-kilo-of", kind: "lesson", title: { en: "A Kilo Of, A Bunch Of", te: "కిలో, కట్ట, డజను" } },
  { id: "how-much-are-they", kind: "lesson", title: { en: "How Much Are They?", te: "ఎంత అవుతుంది?" } },
  { id: "bargaining-politely", kind: "lesson", title: { en: "Can You Reduce It?", te: "ధర తగ్గించగలరా?" } },
  { id: "fresh-and-ripe", kind: "lesson", title: { en: "Fresh and Ripe", te: "తాజాగా, పండినవి" } },
  { id: "w13-conversation", kind: "conversation", title: { en: "The Sunday Market", te: "ఆదివారం సంత" } },
  { id: "w13-review", kind: "review", title: { en: "Market Day", te: "సంత రోజు" } },
];
const stage2Weeks: Week[] = [
  { ...week(13, ["Shopping at the Market", "మార్కెట్‌లో షాపింగ్"]), released: true, days: week13Days },
  ...weeks(14, [
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
  ]),
];

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
