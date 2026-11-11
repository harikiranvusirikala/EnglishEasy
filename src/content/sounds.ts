import type { SoundCard, Word } from "./types";

/**
 * Sound of the week (CURRICULUM §2a; owner, 2026-11-09): one sound Telugu speakers find hard, per main-path week.
 * The week's first lesson shows the card at the end of Learn; every lesson of the week asks one pair ("Which word did
 * you hear?", lesson n of the week takes `pairs[n % pairs.length]`). Words are recorded like any other text.
 * A week without an entry has neither. Pairs are append-only once released (they feed activity content, not ids).
 */
export type SoundWeek = { card: SoundCard; pairs: [Word, Word][] };

const w = (en: string, te: string): Word => ({ en, te });

export const sounds: Record<number, SoundWeek> = {
  1: {
    card: {
      title: "v and w",
      tip: { en: "Telugu has one వ. English has two different sounds: v and w.", te: "తెలుగులో వ ఒక్కటే. ఇంగ్లీష్‌లో v, w రెండు వేర్వేరు శబ్దాలు." },
      sides: [
        { label: "v", how: { en: "Top teeth touch the lower lip.", te: "పై పళ్ళు కింది పెదవిని తాకుతాయి." }, words: ["very", "vegetables", "seven"] },
        { label: "w", how: { en: "Round your lips. No teeth.", te: "పెదాలు గుండ్రంగా. పళ్ళు తాకవు." }, words: ["water", "week", "window"] },
      ],
      pair: ["vest", "west"],
    },
    pairs: [
      [w("vest", "బనీను"), w("west", "పడమర")],
      [w("vet", "పశువుల డాక్టర్"), w("wet", "తడి")],
      [w("verse", "పద్యం"), w("worse", "ఇంకా ఘోరం")],
      [w("viper", "ఒక రకం పాము"), w("wiper", "కారు అద్దం తుడిచేది")],
      [w("vent", "గాలి వచ్చే రంధ్రం"), w("went", "వెళ్ళారు")],
    ],
  },
  2: {
    card: {
      title: "ship and sheep",
      tip: { en: "A short i and a long ee change the meaning.", te: "పొట్టి ఇ, పొడుగు ఈ: అర్థమే మారిపోతుంది." },
      sides: [
        { label: "i", how: { en: "Short and quick, like ఇ.", te: "పొట్టిగా, త్వరగా: ఇ." }, words: ["ship", "sit", "live"] },
        { label: "ee", how: { en: "Long, with a smile, like ఈ.", te: "పొడుగ్గా, నవ్వుతున్నట్టు: ఈ." }, words: ["sheep", "seat", "leave"] },
      ],
      pair: ["ship", "sheep"],
    },
    pairs: [
      [w("ship", "ఓడ"), w("sheep", "గొర్రె")],
      [w("sit", "కూర్చోవడం"), w("seat", "సీటు")],
      [w("live", "ఉండటం"), w("leave", "వెళ్ళిపోవడం")],
      [w("fill", "నింపడం"), w("feel", "అనిపించడం")],
      [w("hill", "కొండ"), w("heel", "మడమ")],
    ],
  },
  3: {
    card: {
      title: "thirteen and thirty",
      tip: { en: "Say -teen strong at the end and -ty strong at the start, or 13 and 30 sound the same.", te: "-teen చివర గట్టిగా, -ty మొదట గట్టిగా. లేకపోతే 13, 30 ఒకేలా వినిపిస్తాయి." },
      sides: [
        { label: "-teen", how: { en: "Strong at the end: thir-TEEN.", te: "చివర గట్టిగా: thir-TEEN." }, words: ["thirteen", "fifteen", "eighteen"] },
        { label: "-ty", how: { en: "Strong at the start: THIR-ty.", te: "మొదట గట్టిగా: THIR-ty." }, words: ["thirty", "fifty", "eighty"] },
      ],
      pair: ["thirteen", "thirty"],
    },
    pairs: [
      [w("thirteen", "పదమూడు"), w("thirty", "ముప్పై")],
      [w("fourteen", "పద్నాలుగు"), w("forty", "నలభై")],
      [w("fifteen", "పదిహేను"), w("fifty", "యాభై")],
      [w("sixteen", "పదహారు"), w("sixty", "అరవై")],
      [w("eighteen", "పద్దెనిమిది"), w("eighty", "ఎనభై")],
    ],
  },
  4: {
    card: {
      title: "z and s",
      tip: { en: "z buzzes like a bee. Don't say it like j.", te: "z తేనెటీగలా ఝుమ్మంటుంది. దాన్ని 'జ' అనకండి." },
      sides: [
        { label: "z", how: { en: "Buzz, like a bee: zzz.", te: "తేనెటీగలా: zzz." }, words: ["zero", "zoo", "size"] },
        { label: "s", how: { en: "Only air, like a snake: sss.", te: "గాలి మాత్రమే, పాములా: sss." }, words: ["six", "see", "rice"] },
      ],
      pair: ["prize", "price"],
    },
    pairs: [
      [w("prize", "బహుమతి"), w("price", "ధర")],
      [w("rise", "పెరగడం"), w("rice", "బియ్యం")],
      [w("eyes", "కళ్ళు"), w("ice", "ఐస్")],
      [w("zip", "జిప్"), w("sip", "కొంచెం తాగడం")],
      [w("buzz", "ఝుమ్మనే శబ్దం"), w("bus", "బస్సు")],
    ],
  },
  5: {
    card: {
      title: "f and p",
      tip: { en: "For f, top teeth on the lower lip. Don't close your lips like ఫ.", te: "f కి పై పళ్ళు కింది పెదవి మీద. 'ఫ' లాగా పెదాలు మూయకండి." },
      sides: [
        { label: "f", how: { en: "Top teeth on the lower lip; air comes out.", te: "పై పళ్ళు కింది పెదవి మీద, గాలి బయటికి." }, words: ["fan", "five", "coffee"] },
        { label: "p", how: { en: "Close both lips, then open.", te: "రెండు పెదాలు మూసి, తెరవండి." }, words: ["pan", "pay", "paper"] },
      ],
      pair: ["fan", "pan"],
    },
    pairs: [
      [w("fan", "ఫ్యాన్"), w("pan", "పెనం")],
      [w("fine", "బాగుంది"), w("pine", "ఒక రకం చెట్టు")],
      [w("full", "నిండుగా"), w("pull", "లాగండి")],
      [w("fast", "వేగంగా"), w("past", "గతం")],
      [w("fair", "న్యాయం"), w("pair", "జత")],
    ],
  },
  6: {
    card: {
      title: "a and e",
      tip: { en: "bad and bed are different: open your mouth wide for a, a little for e.", te: "bad, bed వేర్వేరు: a కి నోరు బాగా తెరవండి, e కి కొంచెమే." },
      sides: [
        { label: "a", how: { en: "Mouth wide open: bad.", te: "నోరు బాగా తెరిచి: బ్యా." }, words: ["bad", "man", "pan"] },
        { label: "e", how: { en: "Mouth a little open: bed.", te: "నోరు కొంచెం తెరిచి: బె." }, words: ["bed", "men", "pen"] },
      ],
      pair: ["bad", "bed"],
    },
    pairs: [
      [w("bad", "చెడ్డ"), w("bed", "మంచం")],
      [w("man", "ఒక మనిషి"), w("men", "మనుషులు")],
      [w("pan", "పెనం"), w("pen", "పెన్ను")],
      [w("sad", "బాధగా"), w("said", "చెప్పారు")],
      [w("had", "ఉండేది"), w("head", "తల")],
    ],
  },
  7: {
    card: {
      title: "the s at the end",
      tip: { en: "In he walks, the s at the end must be heard.", te: "he walks లో చివర s వినిపించాలి." },
      sides: [
        { label: "walk", how: { en: "I, you, we, they: no s.", te: "I, you, we, they: s ఉండదు." }, words: ["I walk", "we cook", "they eat"] },
        { label: "walks", how: { en: "He, she: an s at the end.", te: "He, she: చివర s." }, words: ["he walks", "she cooks", "he eats"] },
      ],
      pair: ["walk", "walks"],
    },
    pairs: [
      [w("walk", "నేను నడుస్తాను"), w("walks", "ఆయన నడుస్తారు")],
      [w("cook", "నేను వండుతాను"), w("cooks", "ఆవిడ వండుతారు")],
      [w("eat", "నేను తింటాను"), w("eats", "ఆయన తింటారు")],
      [w("sleep", "నేను నిద్రపోతాను"), w("sleeps", "ఆవిడ నిద్రపోతారు")],
      [w("read", "నేను చదువుతాను"), w("reads", "ఆయన చదువుతారు")],
    ],
  },
  8: {
    card: {
      title: "can and can't",
      tip: { en: "can is short and soft; can't is long and strong. The t is often not heard.", te: "can చిన్నగా, మెల్లగా. can't పొడుగ్గా, గట్టిగా. చివర t చాలాసార్లు వినిపించదు." },
      sides: [
        { label: "can", how: { en: "Short and soft.", te: "చిన్నగా, మెల్లగా." }, words: ["I can swim", "she can cook", "we can come"] },
        { label: "can't", how: { en: "Long and strong.", te: "పొడుగ్గా, గట్టిగా." }, words: ["I can't swim", "she can't cook", "we can't come"] },
      ],
      pair: ["I can come", "I can't come"],
    },
    pairs: [
      [w("I can come", "నేను రాగలను"), w("I can't come", "నేను రాలేను")],
      [w("She can drive", "ఆవిడ డ్రైవ్ చేయగలరు"), w("She can't drive", "ఆవిడ డ్రైవ్ చేయలేరు")],
      [w("He can read", "ఆయన చదవగలరు"), w("He can't read", "ఆయన చదవలేరు")],
      [w("We can walk", "మేము నడవగలం"), w("We can't walk", "మేము నడవలేం")],
      [w("I can hear", "నాకు వినిపిస్తోంది"), w("I can't hear", "నాకు వినిపించట్లేదు")],
    ],
  },
  9: {
    card: {
      title: "the -ed at the end",
      tip: { en: "For the past, the -ed at the end must be heard: walked sounds like walkt.", te: "జరిగిపోయినది చెప్పేటప్పుడు చివర -ed వినిపించాలి: walked అంటే 'వాక్ట్'." },
      sides: [
        { label: "walk", how: { en: "Every day.", te: "రోజూ." }, words: ["I walk", "I cook", "I clean"] },
        { label: "walked", how: { en: "Yesterday: a t or d sound at the end.", te: "నిన్న: చివర t లేదా d శబ్దం." }, words: ["I walked", "I cooked", "I cleaned"] },
      ],
      pair: ["I walk", "I walked"],
    },
    pairs: [
      [w("I walk", "నేను నడుస్తాను"), w("I walked", "నేను నడిచాను")],
      [w("I cook", "నేను వండుతాను"), w("I cooked", "నేను వండాను")],
      [w("We play", "మేము ఆడతాం"), w("We played", "మేము ఆడాం")],
      [w("I clean", "నేను శుభ్రం చేస్తాను"), w("I cleaned", "నేను శుభ్రం చేశాను")],
      [w("They wait", "వాళ్ళు ఎదురుచూస్తారు"), w("They waited", "వాళ్ళు ఎదురుచూశారు")],
    ],
  },
  10: {
    card: {
      title: "I go and I'll go",
      tip: { en: "The 'll in I'll is small but important: it means later.", te: "I'll లో 'll చిన్నదే, కానీ ముఖ్యం: అంటే తర్వాత చేస్తాను అని." },
      sides: [
        { label: "I go", how: { en: "Every day.", te: "రోజూ." }, words: ["I go", "we eat", "they come"] },
        { label: "I'll go", how: { en: "Later: a soft l after the first word.", te: "తర్వాత: మొదటి పదం తర్వాత మెల్లని l." }, words: ["I'll go", "we'll eat", "they'll come"] },
      ],
      pair: ["I go", "I'll go"],
    },
    pairs: [
      [w("I go", "నేను వెళ్తుంటాను"), w("I'll go", "నేను వెళ్తాను, తర్వాత")],
      [w("We eat", "మేము తింటుంటాం"), w("We'll eat", "మేము తింటాం, తర్వాత")],
      [w("They come", "వాళ్ళు వస్తుంటారు"), w("They'll come", "వాళ్ళు వస్తారు, తర్వాత")],
      [w("I call", "నేను ఫోన్ చేస్తుంటాను"), w("I'll call", "నేను ఫోన్ చేస్తాను, తర్వాత")],
      [w("I help", "నేను సహాయం చేస్తుంటాను"), w("I'll help", "నేను సహాయం చేస్తాను, తర్వాత")],
    ],
  },
  11: {
    card: {
      title: "th and t",
      tip: { en: "For th, the tongue tip goes between the teeth, or three sounds like tree.", te: "th కి నాలుక కొన పళ్ళ మధ్య. లేకపోతే three, tree ఒకేలా వినిపిస్తాయి." },
      sides: [
        { label: "th", how: { en: "Tongue between the teeth; blow.", te: "నాలుక కొన పళ్ళ మధ్య, గాలి ఊదండి." }, words: ["three", "thank you", "month"] },
        { label: "t", how: { en: "Tongue behind the teeth.", te: "నాలుక పళ్ళ వెనక." }, words: ["tree", "tank", "ten"] },
      ],
      pair: ["three", "tree"],
    },
    pairs: [
      [w("three", "మూడు"), w("tree", "చెట్టు")],
      [w("thank", "థాంక్స్ చెప్పడం"), w("tank", "ట్యాంకు")],
      [w("thin", "సన్నగా"), w("tin", "డబ్బా")],
      [w("both", "రెండూ"), w("boat", "పడవ")],
      [w("thought", "అనుకున్నాను"), w("taught", "నేర్పించారు")],
    ],
  },
  12: {
    card: {
      title: "sh and s",
      tip: { en: "For sh, push your lips forward; for s, smile. she and see are different.", te: "sh కి పెదాలు ముందుకు, s కి నవ్వుతూ. she, see వేర్వేరు." },
      sides: [
        { label: "sh", how: { en: "Lips forward: shh.", te: "పెదాలు ముందుకు: ష్." }, words: ["she", "shop", "wash"] },
        { label: "s", how: { en: "Smile: sss.", te: "నవ్వుతూ: స్." }, words: ["see", "sun", "bus"] },
      ],
      pair: ["she", "see"],
    },
    pairs: [
      [w("she", "ఆవిడ"), w("see", "చూడటం")],
      [w("ship", "ఓడ"), w("sip", "కొంచెం తాగడం")],
      [w("shell", "గవ్వ"), w("sell", "అమ్మడం")],
      [w("sheet", "దుప్పటి"), w("seat", "సీటు")],
      [w("shave", "గడ్డం గీసుకోవడం"), w("save", "దాచుకోవడం")],
    ],
  },
  13: {
    card: {
      title: "cap and cup",
      tip: { en: "cap opens the mouth wide; cup is a short, relaxed sound, like అ.", te: "cap లో నోరు వెడల్పుగా. cup లో చిన్నగా, 'అ' లాగా." },
      sides: [
        { label: "a", how: { en: "Mouth wide: cap.", te: "నోరు వెడల్పుగా: క్యాప్." }, words: ["cap", "bag", "cash"] },
        { label: "u", how: { en: "Short and relaxed: cup.", te: "చిన్నగా, 'అ' లాగా: కప్." }, words: ["cup", "bus", "money"] },
      ],
      pair: ["cap", "cup"],
    },
    pairs: [
      [w("cap", "టోపీ"), w("cup", "కప్పు")],
      [w("bag", "సంచి"), w("bug", "పురుగు")],
      [w("cat", "పిల్లి"), w("cut", "కోయడం")],
      [w("ran", "పరిగెత్తారు"), w("run", "పరిగెత్తడం")],
      [w("hat", "టోపీ"), w("hut", "గుడిసె")],
    ],
  },
  14: {
    card: {
      title: "STA-tion: a strong first part",
      tip: {
        en: "Telugu says every part of a word evenly. English makes one part strong: STA-tion, MAR-ket.",
        te: "తెలుగులో పదంలోని ప్రతి భాగం సమానంగా అంటాం. ఇంగ్లీష్‌లో ఒక భాగం గట్టిగా: STA-tion, MAR-ket.",
      },
      sides: [
        {
          label: "STA-tion",
          how: { en: "First part strong and long; the rest short and soft.", te: "మొదటి భాగం గట్టిగా, పొడుగ్గా; మిగతాది చిన్నగా, మెల్లగా." },
          words: ["station", "market", "temple"],
        },
        {
          label: "ho-TEL",
          how: { en: "In these words, the second part is strong.", te: "ఈ పదాల్లో రెండో భాగం గట్టిగా." },
          words: ["hotel", "police", "behind"],
        },
      ],
      pair: ["hostel", "hotel"],
    },
    pairs: [
      [w("hostel", "హాస్టల్"), w("hotel", "హోటల్")],
      [w("petrol", "పెట్రోల్"), w("patrol", "పోలీసుల గస్తీ")],
      [w("policy", "పాలసీ, నియమం"), w("police", "పోలీసులు")],
      [w("channel", "TV ఛానెల్"), w("canal", "కాలువ")],
      [w("carton", "అట్టపెట్టె"), w("cartoon", "కార్టూన్")],
    ],
  },
  15: {
    card: {
      title: "ho-TEL, de-LAY",
      tip: {
        en: "Some words are strong on the second part. We often make the start strong, as in Telugu.",
        te: "కొన్ని పదాల్లో రెండో భాగం గట్టిగా పలకాలి. తెలుగులో లాగా మనం మొదటి భాగాన్నే గట్టిగా అంటాం.",
      },
      sides: [
        { label: "DE-sert", how: { en: "Strong at the start.", te: "మొదటి భాగం గట్టిగా." }, words: ["desert", "daily", "palace"] },
        { label: "de-SSERT", how: { en: "Soft start, strong second part.", te: "మొదలు మెల్లగా, రెండో భాగం గట్టిగా." }, words: ["dessert", "delay", "arrive"] },
      ],
      pair: ["desert", "dessert"],
    },
    pairs: [
      [w("insect", "పురుగు"), w("inside", "లోపల")],
      [w("daily", "రోజూ"), w("delay", "ఆలస్యం")],
      [w("palace", "రాజభవనం"), w("police", "పోలీసులు")],
      [w("carrier", "టిఫిన్ క్యారియర్"), w("career", "ఉద్యోగ జీవితం")],
      [w("desert", "ఎడారి"), w("dessert", "భోజనం తర్వాత తీపి")],
    ],
  },
  16: {
    card: {
      title: "HOS-pi-tal and to-MA-to",
      tip: {
        en: "In a long word, one part is strong and long. Telugu says every part evenly.",
        te: "పొడవైన పదంలో ఒక భాగం గట్టిగా, పొడుగ్గా వస్తుంది. తెలుగులో అన్ని భాగాలూ సమానంగా అంటాం.",
      },
      sides: [
        { label: "HOS-pi-tal", how: { en: "The first part is strong; the other two are short.", te: "మొదటి భాగం గట్టిగా; మిగతా రెండూ చిన్నగా." }, words: ["hospital", "medicine", "exercise"] },
        { label: "to-MA-to", how: { en: "The middle part is strong; the first is short.", te: "మధ్య భాగం గట్టిగా; మొదటిది చిన్నగా." }, words: ["tomato", "examine", "injection"] },
      ],
      pair: ["medicine", "mechanic"],
    },
    pairs: [
      [w("medicine", "మందు"), w("mechanic", "మెకానిక్")],
      [w("exercise", "వ్యాయామం"), w("examine", "పరీక్షించడం")],
      [w("injury", "దెబ్బ"), w("injection", "ఇంజెక్షన్")],
      [w("positive", "పాజిటివ్"), w("position", "స్థానం")],
      [w("allergy", "అలర్జీ"), w("allergic", "అలర్జీ ఉన్న")],
    ],
  },
  17: {
    card: {
      title: "-s endings: s, z and iz",
      tip: {
        en: "For more than one, the ending sounds like s, z or iz. Never drop it.",
        te: "ఒకటి కంటే ఎక్కువ అయితే చివర s, z లేదా iz శబ్దం వస్తుంది. దాన్ని వదిలేయకండి.",
      },
      sides: [
        {
          label: "s / z",
          how: { en: "No extra beat: tablets ends in s, bottles in z.", te: "అదనపు అక్షరం లేదు: tablets చివర 'స్', bottles చివర 'జ్'." },
          words: ["tablets", "drops", "bottles"],
        },
        {
          label: "iz",
          how: { en: "After s, x, ch or sh: one more beat, iz.", te: "s, x, ch, sh తర్వాత ఇంకో అక్షరం: 'ఇజ్'." },
          words: ["boxes", "doses", "prices"],
        },
      ],
      pair: ["box", "boxes"],
    },
    pairs: [
      [w("tablet", "ఒక మాత్ర"), w("tablets", "మాత్రలు")],
      [w("bottle", "ఒక సీసా"), w("bottles", "సీసాలు")],
      [w("box", "ఒక డబ్బా"), w("boxes", "డబ్బాలు")],
      [w("drop", "ఒక చుక్క"), w("drops", "చుక్కలు")],
      [w("dose", "ఒక మోతాదు"), w("doses", "మోతాదులు")],
    ],
  },
  18: {
    card: {
      title: "the key word",
      tip: {
        en: "In English, the most important word is said louder and longer. Small words like an, the, is are quick.",
        te: "ఇంగ్లీష్‌లో ముఖ్యమైన పదాన్ని గట్టిగా, సాగదీసి అంటారు. an, the, is లాంటి చిన్న పదాలు త్వరగా అయిపోతాయి.",
      },
      sides: [
        { label: "key word", how: { en: "Loud and long: am in ambulance is the strongest.", te: "గట్టిగా, సాగదీసి: ambulance లో 'am' బలంగా." }, words: ["ambulance", "police", "fire"] },
        { label: "whole sentence", how: { en: "Small words quick, the key word strong.", te: "చిన్న పదాలు త్వరగా, ముఖ్యమైన పదం గట్టిగా." }, words: ["Call an ambulance", "Call the police", "There's a fire"] },
      ],
      pair: ["Call an ambulance", "Call the police"],
    },
    pairs: [
      [w("Call an ambulance", "అంబులెన్స్‌కి ఫోన్ చేయండి"), w("Call the police", "పోలీసులకు ఫోన్ చేయండి")],
      [w("He fell down", "ఆయన కింద పడిపోయారు"), w("He sat down", "ఆయన కూర్చున్నారు")],
      [w("I can smell gas", "గ్యాస్ వాసన వస్తోంది"), w("I can smell smoke", "పొగ వాసన వస్తోంది")],
      [w("His leg is bleeding", "ఆయన కాలికి రక్తం కారుతోంది"), w("His hand is bleeding", "ఆయన చేతికి రక్తం కారుతోంది")],
      [w("Call one zero eight", "108 కి ఫోన్ చేయండి"), w("Call one zero one", "101 కి ఫోన్ చేయండి")],
    ],
  },
  19: {
    card: {
      title: "questions: down and up",
      tip: {
        en: "Telugu questions end the same way; English questions go down or up at the end.",
        te: "తెలుగు ప్రశ్నల చివర స్వరం మారదు; ఇంగ్లీష్ ప్రశ్నల చివర స్వరం కిందికో, పైకో వెళ్తుంది.",
      },
      sides: [
        {
          label: "who, what, where …",
          how: { en: "The voice goes down at the end.", te: "చివర స్వరం కిందికి దిగుతుంది." },
          words: ["Who is speaking?", "Where are you?", "When will he come?"],
        },
        {
          label: "yes or no",
          how: { en: "The voice goes up at the end.", te: "చివర స్వరం పైకి లేస్తుంది." },
          words: ["Is Kumar there?", "Are you free?", "Will he come?"],
        },
      ],
      pair: ["Where are you?", "Are you there?"],
    },
    pairs: [
      [w("Where are you?", "మీరు ఎక్కడ ఉన్నారు?"), w("Are you there?", "మీరు లైన్‌లో ఉన్నారా?")],
      [w("Who is this?", "ఎవరు మాట్లాడుతున్నారు?"), w("Is this Sita?", "సీత గారేనా?")],
      [w("When will he come?", "ఆయన ఎప్పుడు వస్తారు?"), w("Will he come?", "ఆయన వస్తారా?")],
      [w("What is his number?", "ఆయన నంబర్ ఏంటి?"), w("Is this his number?", "ఇది ఆయన నంబరేనా?")],
      [w("Where is Mohan?", "మోహన్ గారు ఎక్కడ ఉన్నారు?"), w("Is Mohan there?", "మోహన్ గారు ఉన్నారా?")],
    ],
  },
  20: {
    card: {
      title: "s + consonant",
      tip: {
        en: "Telugu adds a vowel before st, sk or sp: iskool. English starts straight with s.",
        te: "తెలుగులో st, sk, sp ముందు 'ఇ' చేర్చి 'ఇస్కూల్' అంటాం. ఇంగ్లీష్‌లో నేరుగా s తోనే మొదలవుతుంది.",
      },
      sides: [
        {
          label: "s first",
          how: { en: "Start with a soft hiss, then the next sound at once.", te: "ముందు 'స్' అని, వెంటనే తర్వాతి అక్షరం. ముందు 'ఇ' వద్దు." },
          words: ["school", "station", "screen"],
        },
        {
          label: "vowel first",
          how: { en: "Only these words really have a vowel there.", te: "ఈ పదాల్లో మాత్రమే నిజంగా అచ్చు ఉంటుంది." },
          words: ["estate", "asleep", "support"],
        },
      ],
      pair: ["state", "estate"],
    },
    pairs: [
      [w("state", "రాష్ట్రం"), w("estate", "ఎస్టేట్, తోటల భూమి")],
      [w("sport", "ఆట"), w("support", "మద్దతు")],
      [w("sleep", "నిద్రపోవడం"), w("asleep", "నిద్రలో ఉన్న")],
      [w("slow", "నెమ్మది"), w("low", "తక్కువ")],
      [w("stop", "ఆపడం"), w("top", "పైభాగం")],
    ],
  },
  21: {
    card: {
      title: "fifteen thousand and fifty thousand",
      tip: {
        en: "In fast money talk, -teen is strong at the end and -ty at the start. Then listen for lakh or thousand.",
        te: "వేగంగా చెప్పే డబ్బు మాటల్లో -teen చివర గట్టిగా, -ty మొదట గట్టిగా. తర్వాత lakh ఆ, thousand ఆ వినండి.",
      },
      sides: [
        { label: "-teen", how: { en: "Strong at the end: fif-TEEN thousand.", te: "చివర గట్టిగా: fif-TEEN thousand." }, words: ["fifteen thousand", "fourteen lakh", "thirteen rupees"] },
        { label: "-ty", how: { en: "Strong at the start: FIF-ty thousand.", te: "మొదట గట్టిగా: FIF-ty thousand." }, words: ["fifty thousand", "forty lakh", "thirty rupees"] },
      ],
      pair: ["fifteen thousand", "fifty thousand"],
    },
    pairs: [
      [w("fifteen thousand", "పదిహేను వేలు"), w("fifty thousand", "యాభై వేలు")],
      [w("fourteen lakh", "పద్నాలుగు లక్షలు"), w("forty lakh", "నలభై లక్షలు")],
      [w("sixteen thousand", "పదహారు వేలు"), w("sixty thousand", "అరవై వేలు")],
      [w("eighteen lakh", "పద్దెనిమిది లక్షలు"), w("eighty lakh", "ఎనభై లక్షలు")],
      [w("ten thousand", "పది వేలు"), w("ten lakh", "పది లక్షలు")],
    ],
  },
  22: {
    card: {
      title: "pull and pool",
      tip: {
        en: "Telugu ఉ and ఊ differ only in length. In English, pull is short and loose; pool is long, with round lips.",
        te: "తెలుగులో ఉ, ఊ తేడా పొడవు మాత్రమే. ఇంగ్లీష్‌లో pull చిన్నగా, వదులుగా; pool పొడుగ్గా, పెదాలు గుండ్రంగా.",
      },
      sides: [
        { label: "short u", how: { en: "Short and loose, like a quick ఉ: pull.", te: "చిన్నగా, వదులుగా, గబుక్కున 'ఉ' లాగా: పుల్." }, words: ["pull", "full", "book"] },
        { label: "long oo", how: { en: "Long, with tight round lips, like ఊ: pool.", te: "పొడుగ్గా, పెదాలు గట్టిగా గుండ్రంగా, 'ఊ' లాగా: పూల్." }, words: ["pool", "food", "school"] },
      ],
      pair: ["pull", "pool"],
    },
    pairs: [
      [w("pull", "లాగండి"), w("pool", "నీటి కొలను, స్విమ్మింగ్ పూల్")],
      [w("full", "నిండుగా"), w("fool", "తెలివి తక్కువ మనిషి")],
      [w("foot", "పాదం"), w("food", "తిండి, ఆహారం")],
      [w("book", "పుస్తకం"), w("boot", "బూటు")],
      [w("cook", "వంట చేయడం"), w("cool", "చల్లగా")],
    ],
  },
  23: {
    card: {
      title: "j and z",
      tip: {
        en: "Telugu has జ but no z, so many people say jero for zero. z is a buzz; j is a quick jump.",
        te: "తెలుగులో 'జ' ఉంది కానీ z లేదు; అందుకే చాలామంది zero ని 'జీరో' అంటారు. z ఝుమ్మనే శబ్దం; j గబుక్కున వచ్చే 'జ'.",
      },
      sides: [
        { label: "j", how: { en: "Tongue up, then a quick jump, like జ: jam.", te: "నాలుక పైకి ఆనించి, గబుక్కున 'జ' లాగా: జామ్." }, words: ["jam", "juice", "page"] },
        { label: "z", how: { en: "Teeth close, tongue free, buzz like a bee: zzz.", te: "పళ్ళు దగ్గరగా, నాలుక ఎక్కడా ఆనించకుండా, తేనెటీగలా: zzz." }, words: ["zero", "size", "pays"] },
      ],
      pair: ["page", "pays"],
    },
    pairs: [
      [w("page", "పేజీ"), w("pays", "కడతారు")],
      [w("stage", "స్టేజీ, వేదిక"), w("stays", "ఉంటారు")],
      [w("wage", "కూలి, జీతం"), w("ways", "దారులు, పద్ధతులు")],
      [w("rage", "విపరీతమైన కోపం"), w("raise", "పెంచడం, ఎత్తడం")],
      [w("fridge", "ఫ్రిజ్"), w("freeze", "గడ్డకట్టడం")],
    ],
  },
  24: {
    card: {
      title: "-ed: t, d or id",
      tip: {
        en: "In a story, the -ed must be heard. After t or d, it is one more beat.",
        te: "కథ చెప్పేటప్పుడు చివర -ed వినిపించాలి. t లేదా d తర్వాత అది ఇంకో అక్షరం అవుతుంది.",
      },
      sides: [
        {
          label: "t / d",
          how: { en: "No extra beat: walked sounds like walkt, called like calld.", te: "అదనపు అక్షరం లేదు: walked అంటే 'వాక్ట్', called అంటే 'కాల్డ్'." },
          words: ["walked", "called", "crossed"],
        },
        {
          label: "id",
          how: { en: "After t or d: one more beat, id.", te: "t, d తర్వాత ఇంకో అక్షరం: 'ఇడ్'." },
          words: ["waited", "started", "needed"],
        },
      ],
      pair: ["I want", "I wanted"],
    },
    pairs: [
      [w("I call", "నేను ఫోన్ చేస్తాను"), w("I called", "నేను ఫోన్ చేశాను")],
      [w("We want", "మాకు కావాలి"), w("We wanted", "మాకు కావాలనిపించింది")],
      [w("I cross", "నేను దాటుతాను"), w("I crossed", "నేను దాటాను")],
      [w("They start", "వాళ్ళు మొదలుపెడతారు"), w("They started", "వాళ్ళు మొదలుపెట్టారు")],
      [w("I need", "నాకు కావాలి"), w("I needed", "నాకు అవసరమైంది")],
    ],
  },
  25: {
    card: {
      title: "hot and warm",
      tip: {
        en: "We say hot and warm with the same ఆ. In English, o is short; aw is long, with round lips.",
        te: "మనం hot, warm రెండింటినీ ఒకే 'ఆ' తో అంటాం. ఇంగ్లీష్‌లో o చిన్నగా; aw పొడుగ్గా, పెదాలు గుండ్రంగా.",
      },
      sides: [
        { label: "o", how: { en: "Short and quick, mouth open: hot.", te: "చిన్నగా, గబుక్కున, నోరు తెరిచి: హాట్." }, words: ["hot", "shop", "clock"] },
        { label: "aw", how: { en: "Long, with round lips: warm.", te: "పొడుగ్గా, పెదాలు గుండ్రంగా: వార్మ్." }, words: ["warm", "saw", "walk"] },
      ],
      pair: ["shot", "short"],
    },
    pairs: [
      [w("shot", "షాట్ (క్రికెట్‌లో)"), w("short", "పొట్టి")],
      [w("cot", "మంచం"), w("caught", "పట్టుకున్నారు")],
      [w("pot", "కుండ, గిన్నె"), w("port", "ఓడరేవు")],
      [w("spot", "మచ్చ, చోటు"), w("sport", "ఆట")],
      [w("fox", "నక్క"), w("forks", "ఫోర్కులు")],
    ],
  },
  26: {
    card: {
      title: "STA-tion, ho-TEL, HOS-pi-tal",
      tip: {
        en: "Every English word has one strong part. Say it strong and long, and keep the rest soft.",
        te: "ప్రతి ఇంగ్లీష్ పదంలో ఒక భాగం గట్టిగా ఉంటుంది. దాన్ని గట్టిగా, పొడుగ్గా అనండి; మిగతాది మెల్లగా.",
      },
      sides: [
        {
          label: "STA-tion",
          how: { en: "Strong at the start: the first part is long and loud.", te: "మొదలు గట్టిగా: మొదటి భాగం పొడుగ్గా, గట్టిగా." },
          words: ["station", "hospital", "doctor"],
        },
        {
          label: "ho-TEL",
          how: { en: "A soft start, then a strong later part.", te: "మొదలు మెల్లగా, తర్వాతి భాగం గట్టిగా." },
          words: ["hotel", "tomato", "receipt"],
        },
      ],
      pair: ["balance", "balloon"],
    },
    pairs: [
      [w("balance", "అకౌంట్‌లో మిగిలిన డబ్బు"), w("balloon", "బెలూన్")],
      [w("recent", "ఈ మధ్య జరిగిన"), w("receipt", "రసీదు")],
      [w("relative", "బంధువు"), w("relation", "సంబంధం")],
      [w("doctor", "డాక్టర్"), w("director", "డైరెక్టర్")],
      [w("photograph", "ఫోటో"), w("photographer", "ఫోటోలు తీసేవారు")],
    ],
  },
  27: {
    card: {
      title: "letters that sound alike",
      tip: {
        en: "Some letter names sound alike: B, P and V; M and N; G and J. Say them clearly, and add a word: B for Bus.",
        te: "కొన్ని అక్షరాల పేర్లు ఒకేలా వినిపిస్తాయి: B, P, V; M, N; G, J. స్పష్టంగా చెప్పి, ఒక పదం చేర్చండి: B for Bus.",
      },
      sides: [
        {
          label: "B, P, V",
          how: { en: "B and P: close your lips first. V: top teeth touch the lower lip.", te: "B, P: ముందు పెదాలు మూసుకుంటాయి. V: పై పళ్ళు కింది పెదవిని తాకుతాయి." },
          words: ["B for Bus", "P for Pen", "V for Van"],
        },
        {
          label: "M, N, G, J",
          how: { en: "M closes the lips; N does not. G ends like see; J ends like day.", te: "M కి పెదాలు మూసుకుంటాయి; N కి మూసుకోవు. G అంటే 'జీ', J అంటే 'జే'." },
          words: ["M for Mango", "N for Nellore", "G for Guntur", "J for Joseph"],
        },
      ],
      pair: ["B", "V"],
    },
    pairs: [
      [w("B", "బీ అక్షరం"), w("V", "వీ అక్షరం")],
      [w("P", "పీ అక్షరం"), w("B", "బీ అక్షరం")],
      [w("M", "ఎమ్ అక్షరం"), w("N", "ఎన్ అక్షరం")],
      [w("G", "జీ అక్షరం"), w("J", "జే అక్షరం")],
      [w("double M", "రెండు M లు"), w("double N", "రెండు N లు")],
    ],
  },
  28: {
    card: {
      title: "h at the start",
      tip: {
        en: "Some words start with h, some do not. Don't drop the h, and don't add one.",
        te: "కొన్ని పదాలు h తో మొదలవుతాయి, కొన్ని కాదు. h ని వదలకండి, లేని చోట చేర్చకండి.",
      },
      sides: [
        { label: "h", how: { en: "Breathe out softly first, like హ.", te: "ముందు మెల్లగా గాలి వదలండి, 'హ' లాగా." }, words: ["his", "hair", "home"] },
        { label: "no h", how: { en: "Start straight on the vowel, like అ or ఇ.", te: "నేరుగా అచ్చుతో మొదలుపెట్టండి, 'అ' లేదా 'ఇ' లాగా." }, words: ["is", "air", "old"] },
      ],
      pair: ["hair", "air"],
    },
    pairs: [
      [w("hair", "జుట్టు"), w("air", "గాలి")],
      [w("his", "ఆయన, ఆయనది"), w("is", "ఉంది, ఉన్నారు")],
      [w("heat", "వేడి"), w("eat", "తినడం")],
      [w("hold", "పట్టుకోవడం"), w("old", "పాత, వయసైన")],
      [w("hear", "వినడం"), w("ear", "చెవి")],
    ],
  },
  29: {
    card: {
      title: "fixed and months",
      tip: {
        en: "Telugu words end in a vowel, so we add u: fixedu, monthsu. English stops on the last consonant.",
        te: "తెలుగు పదాలు అచ్చుతో ముగుస్తాయి, అందుకే 'ఫిక్స్‌డు', 'మంత్సు' అంటాం. ఇంగ్లీష్‌లో చివరి హల్లు దగ్గరే ఆపేయాలి.",
      },
      sides: [
        {
          label: "one end sound",
          how: { en: "The word ends on one consonant: fix.", te: "చివర ఒక్క హల్లు: fix." },
          words: ["fix", "ask", "month"],
        },
        {
          label: "two or three",
          how: { en: "Say every end sound, then stop. No u after them.", te: "చివరి హల్లులన్నీ పలికి ఆపేయండి. తర్వాత 'ఉ' వద్దు." },
          words: ["fixed", "asked", "months"],
        },
      ],
      pair: ["fix", "fixed"],
    },
    pairs: [
      [w("fix", "బాగు చేయడం"), w("fixed", "బాగు చేశారు")],
      [w("ask", "అడగడం"), w("asked", "అడిగారు")],
      [w("month", "నెల"), w("months", "నెలలు")],
      [w("help", "సహాయం చేయడం"), w("helped", "సహాయం చేశారు")],
      [w("check", "చెక్ చేయడం"), w("checked", "చెక్ చేశారు")],
    ],
  },
  30: {
    card: {
      title: "been and bin",
      tip: {
        en: "Been, seen and eaten have a long ee. Said short, been sounds like bin.",
        te: "been, seen, eaten లో 'ఈ' పొడుగ్గా. పొట్టిగా అంటే been కాస్తా bin (చెత్త డబ్బా) లా వినిపిస్తుంది.",
      },
      sides: [
        { label: "ee", how: { en: "Long, with a smile, like ఈ.", te: "పొడుగ్గా, నవ్వుతున్నట్టు: ఈ." }, words: ["been", "seen", "eaten"] },
        { label: "i", how: { en: "Short and quick, like ఇ.", te: "పొట్టిగా, త్వరగా: ఇ." }, words: ["bin", "sit", "it"] },
      ],
      pair: ["been", "bin"],
    },
    pairs: [
      [w("been", "వెళ్ళొచ్చారు (be మూడో రూపం)"), w("bin", "చెత్త డబ్బా")],
      [w("seen", "చూశారు (see మూడో రూపం)"), w("sin", "పాపం")],
      [w("eat", "తినడం"), w("it", "అది")],
      [w("sleep", "నిద్రపోవడం"), w("slip", "జారడం")],
      [w("feet", "పాదాలు"), w("fit", "సరిపోవడం")],
    ],
  },
  31: {
    card: {
      title: "I've, she's, hasn't",
      tip: {
        en: "In speech, have and has become small sounds. Listen for them: they change the meaning.",
        te: "మాట్లాడేటప్పుడు have, has చిన్న శబ్దాలుగా అయిపోతాయి. వాటిని జాగ్రత్తగా వినండి: అర్థం మారిపోతుంది.",
      },
      sides: [
        {
          label: "'ve / 's",
          how: { en: "Join a soft v or z to the first word.", te: "మొదటి పదానికి ఒక చిన్న v లేదా z శబ్దం కలపండి." },
          words: ["I've", "we've", "she's"],
        },
        {
          label: "n't",
          how: { en: "Has or have + nt, said as one word.", te: "has లేదా have కి nt కలిపి, ఒకే పదంలా అనండి." },
          words: ["hasn't", "haven't", "isn't"],
        },
      ],
      pair: ["I've finished", "I finished"],
    },
    pairs: [
      [w("I've finished", "నేను పూర్తి చేసేశాను"), w("I finished", "నేను పూర్తి చేశాను")],
      [w("She's left", "ఆవిడ వెళ్ళిపోయారు"), w("She left", "ఆవిడ వెళ్ళారు")],
      [w("He has paid", "ఆయన డబ్బు కట్టారు"), w("He hasn't paid", "ఆయన డబ్బు కట్టలేదు")],
      [w("We've eaten", "మేము తినేశాం"), w("We haven't eaten", "మేము ఇంకా తినలేదు")],
      [w("It has started", "అది మొదలైంది"), w("It hasn't started", "అది ఇంకా మొదలు కాలేదు")],
    ],
  },
  32: {
    card: {
      title: "Linking: an apple, light a lamp",
      tip: {
        en: "When a word ends in a consonant and the next starts with a vowel, join them. Don't add a sound or a gap.",
        te: "ఒక పదం హల్లుతో ముగిసి, తర్వాతి పదం అచ్చుతో మొదలైతే రెండూ కలిపి అనండి. మధ్యలో 'ఉ' లేదా ఆగడం వద్దు.",
      },
      sides: [
        {
          label: "n + vowel",
          how: { en: "Carry the n to the next word: an apple sounds like a-napple.", te: "n ని తర్వాతి పదానికి కలపండి: an apple, 'అ-న్యాపుల్' లాగా." },
          words: ["an apple", "an invitation", "an old friend"],
        },
        {
          label: "t, d, k + vowel",
          how: { en: "No u after the t: light a lamp, not light-u a lamp.", te: "t తర్వాత 'ఉ' చేర్చకండి: light a lamp, 'లైటు ఎ ల్యాంప్' కాదు." },
          words: ["light a lamp", "visit a temple", "pick it up"],
        },
      ],
      pair: ["light a lamp", "light lamps"],
    },
    pairs: [
      [w("light a lamp", "ఒక దీపం వెలిగించండి"), w("light lamps", "దీపాలు వెలిగించండి")],
      [w("an apple", "ఒక ఆపిల్"), w("apples", "ఆపిల్స్")],
      [w("bought a gift", "ఒక బహుమతి కొన్నారు"), w("bought gifts", "బహుమతులు కొన్నారు")],
      [w("We met a friend", "మేము ఒక ఫ్రెండ్‌ని కలిశాం"), w("We met friends", "మేము ఫ్రెండ్స్‌ని కలిశాం")],
      [w("sent a card", "ఒక కార్డు పంపారు"), w("sent cards", "కార్డులు పంపారు")],
    ],
  },
  33: {
    card: {
      title: "a kind tone for requests",
      tip: {
        en: "A flat, short line sounds like an order. A request goes up on the main word, then gently down.",
        te: "ఒకే స్వరంలో చిన్నగా అంటే ఆర్డర్ లా వినిపిస్తుంది. అడిగేటప్పుడు ముఖ్యమైన పదం దగ్గర స్వరం పైకి లేపి, మెల్లగా దించండి.",
      },
      sides: [
        {
          label: "Could you …?",
          how: { en: "Up on the main word, then gently down.", te: "ముఖ్యమైన పదం దగ్గర పైకి, తర్వాత మెల్లగా కిందికి." },
          words: ["Could you help me?", "Would you wait, please?", "Could you close the gate?"],
        },
        {
          label: "an order",
          how: { en: "Short and flat: it sounds rude.", te: "చిన్నగా, ఒకే స్వరంలో: మొరటుగా వినిపిస్తుంది." },
          words: ["Help me.", "Wait here.", "Close the gate."],
        },
      ],
      pair: ["Could you close the gate?", "Close the gate."],
    },
    pairs: [
      [w("Could you close the gate?", "కొంచెం గేటు వేస్తారా?"), w("Close the gate.", "గేటు వేయండి.")],
      [w("Would you wait, please?", "కొంచెం ఆగుతారా?"), w("Wait here.", "ఇక్కడ ఆగండి.")],
      [w("Could you move your car?", "కొంచెం మీ కారు తీస్తారా?"), w("Move your car.", "మీ కారు తీయండి.")],
      [w("Could you help me?", "కొంచెం సాయం చేస్తారా?"), w("Help me.", "నాకు సాయం చేయండి.")],
      [w("Would you sit down, please?", "కొంచెం కూర్చుంటారా?"), w("Sit down.", "కూర్చోండి.")],
    ],
  },
  34: {
    card: {
      title: "agreeing: isn't it?",
      tip: {
        en: "When you agree, isn't it? goes down at the end: you expect a yes. A real question goes up.",
        te: "ఒప్పుకుంటూ అనే isn't it? చివర స్వరం కిందికి దిగుతుంది: అవును అనే జవాబు వస్తుందని తెలుసు. నిజమైన ప్రశ్న అయితే స్వరం పైకి లేస్తుంది.",
      },
      sides: [
        {
          label: "…, isn't it?",
          how: { en: "You agree: the voice goes down.", te: "ఒప్పుకుంటున్నారు: స్వరం కిందికి దిగుతుంది." },
          words: ["Lovely morning, isn't it?", "It's hot, isn't it?", "It's late, isn't it?"],
        },
        {
          label: "Is it …?",
          how: { en: "You really ask: the voice goes up.", te: "నిజంగా అడుగుతున్నారు: స్వరం పైకి లేస్తుంది." },
          words: ["Is it hot?", "Is it raining?", "Is it late?"],
        },
      ],
      pair: ["It's hot, isn't it?", "Is it hot?"],
    },
    pairs: [
      [w("It's hot, isn't it?", "వేడిగా ఉంది కదా?"), w("Is it hot?", "వేడిగా ఉందా?")],
      [w("It's raining, isn't it?", "వర్షం పడుతోంది కదా?"), w("Is it raining?", "వర్షం పడుతోందా?")],
      [w("It's late, isn't it?", "ఆలస్యం అయింది కదా?"), w("Is it late?", "ఆలస్యం అయిందా?")],
      [w("It's cooler today, isn't it?", "ఈ రోజు కొంచెం చల్లగా ఉంది కదా?"), w("Is it cooler today?", "ఈ రోజు కొంచెం చల్లగా ఉందా?")],
      [w("It's lovely, isn't it?", "చాలా బాగుంది కదా?"), w("Is it lovely?", "బాగుందా?")],
    ],
  },
  35: {
    card: {
      title: "the -ing at the end",
      tip: {
        en: "Say -ing fully and softly: not walkin, and no hard g after it.",
        te: "-ing పూర్తిగా, మెత్తగా అనండి: 'వాకిన్' అనకండి, చివర గట్టిగా 'గ్' కూడా అనకండి.",
      },
      sides: [
        { label: "walk", how: { en: "The plain verb.", te: "మామూలు verb." }, words: ["walk", "cook", "sing"] },
        {
          label: "walking",
          how: { en: "Add -ing: end softly through the nose, no hard g.", te: "-ing చేర్చండి: ముక్కుతో మెత్తగా ముగించండి, గట్టి 'గ్' వద్దు." },
          words: ["walking", "cooking", "singing"],
        },
      ],
      pair: ["walk", "walking"],
    },
    pairs: [
      [w("garden", "తోట"), w("gardening", "తోటపని")],
      [w("I cook", "నేను వంట చేస్తాను"), w("I'm cooking", "నేను వంట చేస్తున్నాను")],
      [w("I read", "నేను చదువుతాను"), w("I'm reading", "నేను చదువుతున్నాను")],
      [w("We sing", "మేము పాడతాం"), w("We're singing", "మేము పాడుతున్నాం")],
      [w("I draw", "నేను బొమ్మలు వేస్తాను"), w("I'm drawing", "నేను బొమ్మ వేస్తున్నాను")],
    ],
  },
  36: {
    card: {
      title: "r and l after a consonant",
      tip: {
        en: "Telugu adds a vowel in pr, fr or pl: parood. English joins them, and r and l change the word.",
        te: "తెలుగులో pr, fr, pl మధ్య అచ్చు చేర్చి 'పరౌడ్' అంటాం. ఇంగ్లీష్‌లో కలిపి పలకాలి; r, l మారితే పదమే మారుతుంది.",
      },
      sides: [
        {
          label: "pr, fr, gr",
          how: { en: "Tongue curls back and touches nothing. No vowel before r.", te: "నాలుక వెనక్కి మడుస్తుంది, ఎక్కడా తాకదు. r ముందు అచ్చు వద్దు." },
          words: ["friendly", "proud", "crowd"],
        },
        {
          label: "pl, cl, gl",
          how: { en: "Tongue tip touches just behind the top teeth.", te: "నాలుక కొన పై పళ్ళ వెనక తాకుతుంది." },
          words: ["play", "clever", "glass"],
        },
      ],
      pair: ["pray", "play"],
    },
    pairs: [
      [w("pray", "ప్రార్థించడం"), w("play", "ఆడటం")],
      [w("fry", "వేయించడం"), w("fly", "ఎగరడం")],
      [w("crowd", "జనం, గుంపు"), w("cloud", "మేఘం")],
      [w("grass", "గడ్డి"), w("glass", "గ్లాసు")],
      [w("grow", "పెరగడం"), w("glow", "మెరవడం")],
    ],
  },
  37: {
    card: {
      title: "v and w again",
      tip: {
        en: "Week 1's sound again. Telugu వ is in between; English needs a clear v or a clear w.",
        te: "మొదటి వారం శబ్దం మళ్ళీ. తెలుగు వ రెండింటి మధ్యలో ఉంటుంది; ఇంగ్లీష్‌లో v, w స్పష్టంగా వేరుగా పలకాలి.",
      },
      sides: [
        { label: "v", how: { en: "Top teeth touch the lower lip.", te: "పై పళ్ళు కింది పెదవిని తాకుతాయి." }, words: ["very", "vehicle", "visit"] },
        { label: "w", how: { en: "Round your lips. No teeth.", te: "పెదాలు గుండ్రంగా. పళ్ళు తాకవు." }, words: ["well", "wear", "wait"] },
      ],
      pair: ["vine", "wine"],
    },
    pairs: [
      [w("V", "వీ అక్షరం"), w("we", "మేము, మనం")],
      [w("vine", "తీగ"), w("wine", "వైన్")],
      [w("vile", "అసహ్యమైన"), w("while", "ఉండగా, అంతలో")],
      [w("veil", "ముసుగు"), w("whale", "తిమింగలం")],
      [w("vow", "మొక్కు, ప్రమాణం"), w("wow", "ఆహా, వావ్")],
    ],
  },
  38: {
    card: {
      title: "SAT-ur-day: the tiny middle",
      tip: {
        en: "English says the weak part of a word very short, like a quick అ. Telugu says every part fully.",
        te: "ఇంగ్లీష్‌లో పదంలోని బలహీనమైన భాగాన్ని చాలా చిన్నగా, ఒక చిన్న 'అ' లాగా అంటారు. తెలుగులో ప్రతి భాగాన్నీ పూర్తిగా అంటాం.",
      },
      sides: [
        {
          label: "to-MOR-row",
          how: { en: "The first part is tiny: tə, not too.", te: "మొదటి భాగం చాలా చిన్నది: 'ట', 'టూ' కాదు." },
          words: ["tomorrow", "together", "police"],
        },
        {
          label: "SAT-ur-day",
          how: { en: "The middle part is tiny and quick.", te: "మధ్య భాగం చాలా చిన్నగా, త్వరగా వస్తుంది." },
          words: ["Saturday", "family", "cinema"],
        },
      ],
      pair: ["round", "around"],
    },
    pairs: [
      [w("port", "ఓడరేవు"), w("report", "రిపోర్ట్")],
      [w("please", "ప్లీజ్"), w("police", "పోలీసులు")],
      [w("blow", "ఊదడం"), w("below", "కింద")],
      [w("visit", "చూడటానికి వెళ్ళడం"), w("visitor", "చూడటానికి వచ్చినవారు")],
      [w("round", "గుండ్రని"), w("around", "చుట్టూ")],
    ],
  },
  39: {
    card: {
      title: "I'm SO sorry: the kind word strong",
      tip: {
        en: "Telugu adds words to sound kind. English also makes the kind word strong and long: I'm SO sorry, THANK you.",
        te: "తెలుగులో మర్యాదకి మాటలు చేరుస్తాం. ఇంగ్లీష్‌లో మర్యాద మాటను గట్టిగా, సాగదీసి అంటారు: I'm SO sorry, THANK you.",
      },
      sides: [
        {
          label: "SO sorry",
          how: { en: "So, really, very: strong, long and a little higher.", te: "so, really, very: గట్టిగా, సాగదీసి, కొంచెం పైకి." },
          words: ["I'm so sorry", "thank you so much", "that's so kind"],
        },
        {
          label: "THANK you",
          how: { en: "Thank is strong; you is short and soft.", te: "thank గట్టిగా; you చిన్నగా, మెల్లగా." },
          words: ["thank you", "thanks a lot", "you're welcome"],
        },
      ],
      pair: ["I'm so sorry", "I'm sorry"],
    },
    pairs: [
      [w("I'm so sorry", "చాలా sorry"), w("I'm sorry", "sorry")],
      [w("Thank you so much", "చాలా చాలా థ్యాంక్స్"), w("Thank you", "థ్యాంక్యూ")],
      [w("That's so kind of you", "మీరు ఎంత మంచివారో"), w("That's kind of you", "మీరు మంచివారు")],
      [w("No problem at all", "అస్సలు ఇబ్బంది లేదు"), w("No problem", "ఇబ్బంది లేదు")],
      [w("Thanks a lot", "బోలెడు థ్యాంక్స్"), w("Thanks", "థ్యాంక్స్")],
    ],
  },
  40: {
    card: {
      title: "is and isn't",
      tip: {
        en: "Yes or no often hangs on one small sound, n't. Listen for it, and say it clearly.",
        te: "అవునా, లేదా అనేది చాలాసార్లు n't అనే ఒక చిన్న శబ్దం మీదే ఆధారపడుతుంది. దాన్ని జాగ్రత్తగా విని, స్పష్టంగా పలకండి.",
      },
      sides: [
        {
          label: "yes",
          how: { en: "Short and light: is, was, does.", te: "చిన్నగా, తేలికగా: is, was, does." },
          words: ["it's ready", "he was there", "it works"],
        },
        {
          label: "no: n't",
          how: { en: "Add a clear n, then a soft t: isn't, wasn't, doesn't.", te: "స్పష్టంగా n, తర్వాత మెల్లగా t: isn't, wasn't, doesn't." },
          words: ["it isn't ready", "he wasn't there", "it doesn't work"],
        },
      ],
      pair: ["It's ready", "It isn't ready"],
    },
    pairs: [
      [w("It's ready", "అది రెడీగా ఉంది"), w("It isn't ready", "అది ఇంకా రెడీ కాలేదు")],
      [w("It works now", "ఇప్పుడు పని చేస్తోంది"), w("It doesn't work now", "ఇప్పుడు పని చేయట్లేదు")],
      [w("He was at home", "ఆయన ఇంట్లో ఉన్నారు"), w("He wasn't at home", "ఆయన ఇంట్లో లేరు")],
      [w("You should go", "మీరు వెళ్తే మంచిది"), w("You shouldn't go", "మీరు వెళ్ళకపోవడమే మంచిది")],
      [w("They were late", "వాళ్ళు ఆలస్యంగా వచ్చారు"), w("They weren't late", "వాళ్ళు ఆలస్యంగా రాలేదు")],
    ],
  },
};

export const soundOfWeek = (week: number): SoundWeek | undefined => sounds[week];
