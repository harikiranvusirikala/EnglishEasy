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
  41: {
    card: {
      title: "Linking in stories: went out, and then",
      tip: {
        en: "In a story, English joins a word to the next one. Don't add a u sound or stop in between.",
        te: "కథ చెప్పేటప్పుడు ఇంగ్లీష్‌లో ఒక పదాన్ని తర్వాతి పదంతో కలిపి అంటారు. మధ్యలో 'ఉ' చేర్చకండి, ఆగకండి.",
      },
      sides: [
        {
          label: "t, d, k + vowel",
          how: {
            en: "Carry the last sound on: went out sounds like wen-tout, locked it like lock-tit.",
            te: "చివరి శబ్దాన్ని తర్వాతి పదానికి కలపండి: went out 'వెన్-టౌట్' లాగా, locked it 'లాక్-టిట్' లాగా.",
          },
          words: ["went out", "got up", "picked it up"],
        },
        {
          label: "and then",
          how: {
            en: "and is short and soft, almost only n: and then sounds like n-then.",
            te: "and చాలా చిన్నగా, మెల్లగా, దాదాపు 'న్' లాగా: and then 'న్-దెన్' లాగా.",
          },
          words: ["and then", "and after that", "tea and biscuits"],
        },
      ],
      pair: ["We locked it", "We lock it"],
    },
    pairs: [
      [w("We locked it", "మేము దానికి తాళం వేశాం"), w("We lock it", "మేము దానికి తాళం వేస్తాం")],
      [w("They walked in", "వాళ్ళు లోపలికి వచ్చారు"), w("They walk in", "వాళ్ళు లోపలికి వస్తారు")],
      [w("I picked it up", "నేను దాన్ని తీసుకున్నాను"), w("I pick it up", "నేను దాన్ని తీసుకుంటాను")],
      [w("He got out", "ఆయన బయటికి వచ్చారు"), w("He got up", "ఆయన లేచారు")],
      [w("We stopped at Guntur", "మేము గుంటూరులో ఆగాం"), w("We stop at Guntur", "మేము గుంటూరులో ఆగుతాం")],
    ],
  },
  42: {
    card: {
      title: "used to: yoos-tə",
      tip: {
        en: "In used to, the d is not heard and to is very short: yoos-tə. Telugu speakers often say yoozd too.",
        te: "used to లో d వినిపించదు, to చాలా చిన్నగా వస్తుంది: యూస్-ట. మనం చాలాసార్లు 'యూజ్డ్ టూ' అని పూర్తిగా అంటాం.",
      },
      sides: [
        {
          label: "used to: yoos-tə",
          how: { en: "A soft s, no d, and a tiny tə.", te: "మెత్తటి s, d వినిపించదు, చివర చిన్న 'ట'." },
          words: ["used to live", "used to play", "used to go"],
        },
        {
          label: "used: yoozd",
          how: { en: "Before a thing, used ends with a z sound and a soft d.", te: "ఒక వస్తువు ముందు used చివర z శబ్దం, మెత్తటి d వస్తాయి." },
          words: ["used a pen", "used the phone", "used it"],
        },
      ],
      pair: ["We used to go", "We have to go"],
    },
    pairs: [
      [w("We used to go", "మేము వెళ్ళేవాళ్ళం"), w("We have to go", "మేము వెళ్ళాలి")],
      [w("She used to sing", "ఆవిడ పాడేవారు"), w("She has to sing", "ఆవిడ పాడాలి")],
      [w("They used to walk", "వాళ్ళు నడిచేవారు"), w("They want to walk", "వాళ్ళు నడవాలనుకుంటున్నారు")],
      [w("He used to cook", "ఆయన వంట చేసేవారు"), w("He likes to cook", "ఆయనకి వంట చేయడం ఇష్టం")],
      [w("It used to rain", "ఒకప్పుడు వర్షం బాగా పడేది"), w("It's going to rain", "వర్షం పడబోతోంది")],
    ],
  },
  43: {
    card: {
      title: "saying years",
      tip: {
        en: "Say a year in two halves, not as one big number: nineteen sixty, not one thousand nine hundred sixty.",
        te: "సంవత్సరాన్ని ఒక పెద్ద సంఖ్యలా కాదు, రెండు భాగాలుగా చెప్పండి: nineteen sixty అని; one thousand nine hundred sixty అని కాదు.",
      },
      sides: [
        {
          label: "1900s: nineteen …",
          how: { en: "Two halves: nineteen, then the rest.", te: "రెండు భాగాలు: ముందు nineteen, తర్వాత మిగతాది." },
          words: ["nineteen sixty", "nineteen eighty-five", "nineteen ninety-five"],
        },
        {
          label: "2000s: two thousand …",
          how: { en: "From 2000, say two thousand, then the rest.", te: "2000 నుంచి ముందు two thousand, తర్వాత మిగతాది." },
          words: ["two thousand", "two thousand two", "two thousand eighteen"],
        },
      ],
      pair: ["nineteen sixty", "nineteen sixteen"],
    },
    pairs: [
      [w("nineteen eighty-five", "1985 సంవత్సరం"), w("nineteen ninety-five", "1995 సంవత్సరం")],
      [w("nineteen seventy", "1970 సంవత్సరం"), w("nineteen seventeen", "1917 సంవత్సరం")],
      [w("two thousand two", "2002 సంవత్సరం"), w("two thousand twelve", "2012 సంవత్సరం")],
      [w("nineteen fifty-eight", "1958 సంవత్సరం"), w("nineteen sixty-eight", "1968 సంవత్సరం")],
      [w("nineteen sixty", "1960 సంవత్సరం"), w("nineteen sixteen", "1916 సంవత్సరం")],
    ],
  },
  44: {
    card: {
      title: "-st at the end: biggest, cheapest",
      tip: {
        en: "We often drop the t, or add u after it: cheapestu. English ends on a short t.",
        te: "మనం చివరి t వదిలేస్తాం, లేదా దాని తర్వాత 'ఉ' చేరుస్తాం: 'చీపెస్టు'. ఇంగ్లీష్‌లో చిన్న t దగ్గర ఆపేస్తారు.",
      },
      sides: [
        {
          label: "-er",
          how: { en: "It ends softly, with no t.", te: "మెల్లగా ముగుస్తుంది; చివర t ఉండదు." },
          words: ["bigger", "cheaper", "nicer"],
        },
        {
          label: "-est",
          how: { en: "Say s, then a short t, and stop. No u after it.", te: "s తర్వాత చిన్న t పలికి ఆపేయండి. తర్వాత 'ఉ' వద్దు." },
          words: ["biggest", "cheapest", "best"],
        },
      ],
      pair: ["cheaper", "cheapest"],
    },
    pairs: [
      [w("cheaper", "ఇంకా చవక"), w("cheapest", "అన్నిటికంటే చవక")],
      [w("bigger", "ఇంకా పెద్దది"), w("biggest", "అన్నిటికంటే పెద్దది")],
      [w("nicer", "ఇంకా బాగున్నది"), w("nicest", "అన్నిటికంటే బాగున్నది")],
      [w("guess", "ఊహించడం"), w("guest", "అతిథి")],
      [w("loss", "నష్టం"), w("lost", "పోయింది")],
    ],
  },
  45: {
    card: {
      title: "FA-mous: a strong first part",
      tip: {
        en: "Describing words like famous and beautiful are strong at the start. Telugu says every part evenly.",
        te: "famous, beautiful లాంటి పదాల్లో మొదటి భాగం గట్టిగా వస్తుంది. తెలుగులో అన్ని భాగాలూ సమానంగా అంటాం.",
      },
      sides: [
        {
          label: "FA-mous",
          how: { en: "First part strong and long; the rest short and soft.", te: "మొదటి భాగం గట్టిగా, పొడుగ్గా; మిగతాది చిన్నగా, మెల్లగా." },
          words: ["famous", "beautiful", "crowded"],
        },
        {
          label: "his-TOR-ic",
          how: { en: "In these words, the middle part is strong.", te: "ఈ పదాల్లో మధ్య భాగం గట్టిగా." },
          words: ["historic", "important", "expensive"],
        },
      ],
      pair: ["history", "historic"],
    },
    pairs: [
      [w("history", "చరిత్ర"), w("historic", "చారిత్రక")],
      [w("popular", "అందరూ ఇష్టపడే"), w("population", "జనాభా")],
      [w("industry", "పరిశ్రమ"), w("industrial", "పరిశ్రమలున్న")],
      [w("family", "కుటుంబం"), w("familiar", "బాగా తెలిసిన")],
      [w("colony", "కాలనీ"), w("colonial", "బ్రిటిష్ కాలం నాటి")],
    ],
  },
  46: {
    card: {
      title: "th and t again: I think",
      tip: {
        en: "In fast speech, listen for th in think and three. With a t, think would sound like tink.",
        te: "వేగంగా మాట్లాడినప్పుడు think, three లో th ని జాగ్రత్తగా వినండి. t అంటే think 'టింక్' లాగా వినిపిస్తుంది.",
      },
      sides: [
        { label: "th", how: { en: "Tongue tip between the teeth; soft air comes out.", te: "నాలుక కొన పళ్ళ మధ్య; మెల్లగా గాలి వస్తుంది." }, words: ["I think", "through", "fourth"] },
        { label: "t", how: { en: "Tongue behind the top teeth; a short tap.", te: "నాలుక పై పళ్ళ వెనక; చిన్న తట్టు." }, words: ["true", "fort", "tent"] },
      ],
      pair: ["true", "through"],
    },
    pairs: [
      [w("true", "నిజం"), w("through", "గుండా, ద్వారా")],
      [w("fort", "కోట"), w("fourth", "నాలుగో")],
      [w("tick", "టిక్ గుర్తు"), w("thick", "మందంగా")],
      [w("torn", "చిరిగిపోయిన"), w("thorn", "ముల్లు")],
      [w("tent", "టెంట్, గుడారం"), w("tenth", "పదో")],
    ],
  },
  47: {
    card: {
      title: "THIS one, not THAT one",
      tip: {
        en: "When you choose or correct, the word that is different is loud and long. Telugu adds ఏ (ఇదే); English uses the voice.",
        te: "ఎంచుకునేటప్పుడు, సరిచేసేటప్పుడు తేడా ఉన్న పదాన్ని గట్టిగా, సాగదీసి అంటారు. తెలుగులో 'ఇదే' అని ఏ చేరుస్తాం; ఇంగ్లీష్‌లో గొంతుతోనే చెప్తారు.",
      },
      sides: [
        {
          label: "THIS one",
          how: { en: "The word you choose: loud and long.", te: "మీరు ఎంచుకున్న పదం: గట్టిగా, సాగదీసి." },
          words: ["I want this one", "I'll take the big fan", "I prefer the train"],
        },
        {
          label: "not THAT one",
          how: { en: "After not, the other word is strong too.", te: "not తర్వాత వచ్చే రెండో పదం కూడా గట్టిగానే." },
          words: ["this one, not that one", "the big one, not the small one", "the train, not the bus"],
        },
      ],
      pair: ["I want this one", "I want that one"],
    },
    pairs: [
      [w("I want this one", "నాకు ఇది కావాలి"), w("I want that one", "నాకు అది కావాలి")],
      [w("the big fan", "పెద్ద ఫ్యాన్"), w("the small fan", "చిన్న ఫ్యాన్")],
      [w("I prefer the train", "నాకు రైలే ఇష్టం"), w("I prefer the bus", "నాకు బస్సే ఇష్టం")],
      [w("the old plan", "పాత ప్లాన్"), w("the new plan", "కొత్త ప్లాన్")],
      [w("the white phone", "తెల్ల ఫోన్"), w("the black phone", "నల్ల ఫోన్")],
    ],
  },
  48: {
    card: {
      title: "'ll in if sentences",
      tip: {
        en: "In If it rains, I'll stay, the 'll is small but it means later. Don't drop it.",
        te: "If it rains, I'll stay లో 'll చిన్నదే, కానీ దానికి 'తర్వాత చేస్తాను' అని అర్థం. దాన్ని వదిలేయకండి.",
      },
      sides: [
        {
          label: "If it rains",
          how: { en: "The if part: no will, no 'll.", te: "if భాగం: will గానీ 'll గానీ రావు." },
          words: ["if it rains", "if the train is late", "if you feel dizzy"],
        },
        {
          label: "I'll stay",
          how: { en: "The other part: a soft l after I, we or you.", te: "రెండో భాగం: I, we, you తర్వాత మెల్లని l." },
          words: ["I'll stay", "we'll wait", "you'll feel better"],
        },
      ],
      pair: ["I stay at home", "I'll stay at home"],
    },
    pairs: [
      [w("I stay at home", "నేను ఇంట్లోనే ఉంటుంటాను"), w("I'll stay at home", "నేను ఇంట్లోనే ఉంటాను, తర్వాత")],
      [w("We wait", "మేము ఆగుతుంటాం"), w("We'll wait", "మేము ఆగుతాం, తర్వాత")],
      [w("You feel better", "మీకు బాగనిపిస్తుంటుంది"), w("You'll feel better", "మీకు బాగనిపిస్తుంది, తర్వాత")],
      [w("I take an auto", "నేను ఆటోలో వెళ్తుంటాను"), w("I'll take an auto", "నేను ఆటోలో వెళ్తాను, తర్వాత")],
      [w("We send a message", "మేము మెసేజ్ పెడుతుంటాం"), w("We'll send a message", "మేము మెసేజ్ పెడతాం, తర్వాత")],
    ],
  },
  49: {
    card: {
      title: "double five, zero: reading a code",
      tip: {
        en: "Say a code one digit at a time, never as a big number. Two same digits together: double. 0 is zero.",
        te: "కోడ్‌ని పెద్ద నంబర్‌లా కాకుండా, ఒక్కో అంకె విడిగా చెప్పండి. ఒకే అంకె పక్కపక్కనే రెండుసార్లు వస్తే double. 0 అంటే zero.",
      },
      sides: [
        {
          label: "double",
          how: { en: "Two same digits side by side: say double once, then the digit.", te: "ఒకే అంకె పక్కపక్కనే రెండుసార్లు వస్తే, ఒక్కసారి double అని ఆ అంకె చెప్పండి." },
          words: ["double five", "four double two", "double zero"],
        },
        {
          label: "zero",
          how: { en: "Say zero for 0, with a buzzing z. On the phone it is clearer than o.", te: "0 ని zero అనండి, z ఝుమ్మనేలా. ఫోన్‌లో o కంటే zero బాగా అర్థమవుతుంది." },
          words: ["zero one", "five zero", "seven zero three"],
        },
      ],
      pair: ["four double five zero", "four five double zero"],
    },
    pairs: [
      [w("four double five zero", "కోడ్ 4550"), w("four five double zero", "కోడ్ 4500")],
      [w("double two seven", "కోడ్ 227"), w("two double seven", "కోడ్ 277")],
      [w("double five", "రెండు ఐదులు, 55"), w("double nine", "రెండు తొమ్మిదులు, 99")],
      [w("three zero six", "కోడ్ 306"), w("three double six", "కోడ్ 366")],
      [w("seven zero one", "కోడ్ 701"), w("seven double one", "కోడ్ 711")],
    ],
  },
  50: {
    card: {
      title: "It's broken. Firm, polite and down",
      tip: {
        en: "When you report a problem, let your voice fall at the end. Going up sounds unsure; shouting sounds angry.",
        te: "సమస్య చెప్పేటప్పుడు వాక్యం చివర గొంతు కిందికి దిగాలి. పైకి లేస్తే అనుమానంగా, అరిస్తే కోపంగా వినిపిస్తుంది.",
      },
      sides: [
        {
          label: "It's broken.",
          how: { en: "Telling: calm and clear, down at the end.", te: "చెప్పడం: ప్రశాంతంగా, స్పష్టంగా, చివర కిందికి." },
          words: ["It's broken.", "The bill is wrong.", "I'd like a refund."],
        },
        {
          label: "Is it broken?",
          how: { en: "Asking yes or no: up at the end.", te: "అవునా కాదా అని అడగడం: చివర పైకి." },
          words: ["Is it broken?", "Is the bill wrong?", "Can I get a refund?"],
        },
      ],
      pair: ["It's broken.", "Is it broken?"],
    },
    pairs: [
      [w("It's broken.", "అది పాడైపోయింది."), w("Is it broken?", "అది పాడైపోయిందా?")],
      [w("The bill is wrong.", "బిల్లు తప్పుగా ఉంది."), w("Is the bill wrong?", "బిల్లు తప్పుగా ఉందా?")],
      [w("It was faulty.", "అందులో లోపం ఉంది."), w("Was it faulty?", "అందులో లోపం ఉందా?")],
      [w("It doesn't work.", "అది పని చేయట్లేదు."), w("Does it work?", "అది పని చేస్తుందా?")],
      [w("You charged me twice.", "నాకు రెండుసార్లు బిల్లు వేశారు."), w("Did you charge me twice?", "నాకు రెండుసార్లు బిల్లు వేశారా?")],
    ],
  },
  51: {
    card: {
      title: "di-a-BE-tes and pre-SCRIP-tion",
      tip: {
        en: "A long medical word has one strong part. Say it loud and long; say the other parts quickly.",
        te: "పొడవైన మెడికల్ పదంలో ఒక్క భాగమే గట్టిగా వస్తుంది. దాన్ని గట్టిగా, పొడుగ్గా అనండి; మిగతా భాగాలు త్వరగా.",
      },
      sides: [
        {
          label: "pre-SCRIP-tion",
          how: { en: "The second part is strong. The first part is tiny.", te: "రెండో భాగం గట్టిగా. మొదటి భాగం చాలా చిన్నగా." },
          words: ["prescription", "cholesterol", "appointment"],
        },
        {
          label: "di-a-BE-tes",
          how: { en: "The third part is strong. Say the first two quickly.", te: "మూడో భాగం గట్టిగా. మొదటి రెండు భాగాలు త్వరగా అనండి." },
          words: ["diabetes", "medication", "speciality"],
        },
      ],
      pair: ["medical", "medication"],
    },
    pairs: [
      [w("medical", "వైద్యానికి సంబంధించిన"), w("medication", "వాడే మందులు")],
      [w("diabetes", "షుగర్ వ్యాధి"), w("diabetic", "షుగర్ ఉన్నవారు")],
      [w("prescribe", "మందు రాయడం"), w("prescription", "డాక్టర్ రాసిన చీటీ")],
      [w("specialist", "స్పెషలిస్ట్ డాక్టర్"), w("speciality", "ప్రత్యేక విభాగం")],
      [w("hospital", "ఆసుపత్రి"), w("hospitality", "ఆతిథ్యం, మర్యాద")],
    ],
  },
  52: {
    card: {
      title: "op-er-A-tion: the -tion ending",
      tip: {
        en: "Say -tion as one short shən, never ti-on. The part just before it is strong.",
        te: "-tion ని 'టి-యాన్' అనకుండా, ఒకే చిన్న 'షన్' లాగా అనాలి. దాని ముందు భాగం గట్టిగా వస్తుంది.",
      },
      sides: [
        {
          label: "OP-er-ate",
          how: { en: "The action word: no shən at the end.", te: "పని చెప్పే పదం: చివర 'షన్' ఉండదు." },
          words: ["operate", "inject", "admit"],
        },
        {
          label: "op-er-A-tion",
          how: { en: "Add a short shən; the part before it is strong.", te: "చివర చిన్న 'షన్' వస్తుంది; దాని ముందు భాగం గట్టిగా." },
          words: ["operation", "injection", "admission"],
        },
      ],
      pair: ["operate", "operation"],
    },
    pairs: [
      [w("operate", "ఆపరేషన్ చేయడం"), w("operation", "ఆపరేషన్")],
      [w("inject", "ఇంజెక్షన్ ఇవ్వడం"), w("injection", "ఇంజెక్షన్")],
      [w("admit", "ఆసుపత్రిలో చేర్చుకోవడం"), w("admission", "ఆసుపత్రిలో చేరడం")],
      [w("inform", "తెలియజేయడం"), w("information", "సమాచారం")],
      [w("examine", "పరీక్షించడం"), w("examination", "పరీక్ష")],
    ],
  },
  53: {
    card: {
      title: "weak been: I've been waiting",
      tip: {
        en: "In I've been waiting, been is quick and soft, almost bin. Listen for it: it tells you the wait started earlier.",
        te: "I've been waiting లో been చాలా త్వరగా, మెల్లగా, దాదాపు 'బిన్' లాగా వస్తుంది. దాన్ని జాగ్రత్తగా వినండి: పని ముందే మొదలైందని అదే చెప్తుంది.",
      },
      sides: [
        {
          label: "I've been + -ing",
          how: { en: "Been is short and soft: aiv-bin waiting.", te: "been చిన్నగా, మెల్లగా: 'ఐవ్-బిన్ వెయిటింగ్'." },
          words: ["I've been waiting", "we've been standing", "she's been working"],
        },
        {
          label: "I'm + -ing",
          how: { en: "No been: only now.", te: "been లేదు: ఇప్పుడు మాత్రమే." },
          words: ["I'm waiting", "we're standing", "she's working"],
        },
      ],
      pair: ["I've been waiting", "I'm waiting"],
    },
    pairs: [
      [w("I've been waiting", "నేను చాలాసేపట్నుంచి ఎదురుచూస్తున్నాను"), w("I'm waiting", "నేను ఎదురుచూస్తున్నాను")],
      [w("She's been working", "ఆవిడ ఎప్పట్నుంచో పనిచేస్తున్నారు"), w("She's working", "ఆవిడ పనిచేస్తున్నారు")],
      [w("We've been standing", "మేము చాలాసేపట్నుంచి నిలబడి ఉన్నాం"), w("We're standing", "మేము నిలబడి ఉన్నాం")],
      [w("He's been calling", "ఆయన ఎప్పట్నుంచో ఫోన్ చేస్తున్నారు"), w("He's calling", "ఆయన ఫోన్ చేస్తున్నారు")],
      [w("They've been sitting", "వాళ్ళు చాలాసేపట్నుంచి కూర్చుని ఉన్నారు"), w("They're sitting", "వాళ్ళు కూర్చుని ఉన్నారు")],
    ],
  },
  54: {
    card: {
      title: "swim and swam: hear the past",
      tip: {
        en: "Many past forms have no -ed: the middle sound changes. In a story, that one sound tells you it is the past.",
        te: "చాలా past forms కి -ed రాదు; మధ్యలోని శబ్దం మారుతుంది. కథలో ఆ ఒక్క శబ్దమే అది past అని చెప్తుంది.",
      },
      sides: [
        {
          label: "now: swim, sit",
          how: { en: "A short ఇ sound in the middle.", te: "మధ్యలో చిన్న 'ఇ' శబ్దం." },
          words: ["swim", "sit", "begin"],
        },
        {
          label: "past: swam, sat",
          how: { en: "Open the mouth wide, as in cap.", te: "cap లో లాగా నోరు వెడల్పుగా తెరవండి." },
          words: ["swam", "sat", "began"],
        },
      ],
      pair: ["We swim in the canal", "We swam in the canal"],
    },
    pairs: [
      [w("We swim in the canal", "మేము కాలువలో ఈత కొడతాం"), w("We swam in the canal", "మేము కాలువలో ఈత కొట్టాం")],
      [w("The water rises", "నీళ్ళు పెరుగుతాయి"), w("The water rose", "నీళ్ళు పెరిగాయి")],
      [w("It begins to rain", "వర్షం మొదలవుతుంది"), w("It began to rain", "వర్షం మొదలైంది")],
      [w("They sit by the river", "వాళ్ళు నది పక్కన కూర్చుంటారు"), w("They sat by the river", "వాళ్ళు నది పక్కన కూర్చున్నారు")],
      [w("We ride our cycles", "మేము సైకిళ్ళు తొక్కుతాం"), w("We rode our cycles", "మేము సైకిళ్ళు తొక్కాం")],
    ],
  },
  55: {
    card: {
      title: "platform five or nine?",
      tip: {
        en: "Announcements are fast. The number comes right after platform. Listen to its first sound and its length.",
        te: "అనౌన్స్‌మెంట్లు వేగంగా ఉంటాయి. platform తర్వాతే నంబర్ వస్తుంది. దాని మొదటి శబ్దం, పొడవు జాగ్రత్తగా వినండి.",
      },
      sides: [
        {
          label: "five · nine",
          how: {
            en: "Same middle sound. Listen to the start: f has air on the lip, n comes through the nose.",
            te: "మధ్య శబ్దం ఒకటే. మొదలు వినండి: f లో పెదవి మీద గాలి, n ముక్కులోంచి వస్తుంది.",
          },
          words: ["platform five", "platform nine", "platform seven"],
        },
        {
          label: "three · thirteen",
          how: {
            en: "-teen numbers are longer, with a strong end: thir-TEEN.",
            te: "-teen నంబర్లు పొడుగ్గా ఉంటాయి, చివర గట్టిగా: thir-TEEN.",
          },
          words: ["platform three", "platform thirteen", "platform sixteen"],
        },
      ],
      pair: ["platform five", "platform nine"],
    },
    pairs: [
      [w("platform five", "ఐదో నంబర్ ప్లాట్‌ఫామ్"), w("platform nine", "తొమ్మిదో నంబర్ ప్లాట్‌ఫామ్")],
      [w("platform three", "మూడో నంబర్ ప్లాట్‌ఫామ్"), w("platform thirteen", "పదమూడో నంబర్ ప్లాట్‌ఫామ్")],
      [w("platform six", "ఆరో నంబర్ ప్లాట్‌ఫామ్"), w("platform sixteen", "పదహారో నంబర్ ప్లాట్‌ఫామ్")],
      [w("forty minutes late", "నలభై నిమిషాలు ఆలస్యం"), w("fourteen minutes late", "పద్నాలుగు నిమిషాలు ఆలస్యం")],
      [w("platform seven", "ఏడో నంబర్ ప్లాట్‌ఫామ్"), w("platform eleven", "పదకొండో నంబర్ ప్లాట్‌ఫామ్")],
    ],
  },
  56: {
    card: {
      title: "It's made, it was made",
      tip: {
        en: "In speech, is becomes a small s, and was becomes short and quick. Listen for them: they tell you now or before.",
        te: "మాట్లాడేటప్పుడు is ఒక చిన్న s గా, was చిన్నగా, త్వరగా అయిపోతాయి. జాగ్రత్తగా వినండి: ఇప్పుడా, ఇంతకుముందా అనేది అవే చెప్తాయి.",
      },
      sides: [
        {
          label: "it's",
          how: { en: "Join a soft s to it, with no gap.", te: "it కి ఒక చిన్న s కలిపి, ఆగకుండా అనండి." },
          words: ["It's made", "It's sold", "It's packed"],
        },
        {
          label: "it was",
          how: { en: "Say was short and quick, like wuz.", te: "was ని చిన్నగా, త్వరగా అనండి: 'వజ్' లాగా." },
          words: ["It was made", "It was sold", "It was packed"],
        },
      ],
      pair: ["It's made in India", "It was made in India"],
    },
    pairs: [
      [w("It's made in India", "ఇది ఇండియాలో తయారవుతుంది"), w("It was made in India", "ఇది ఇండియాలో తయారైంది")],
      [w("It's sold here", "ఇది ఇక్కడ అమ్ముతారు"), w("It was sold here", "ఇది ఇక్కడ అమ్మారు")],
      [w("It's grown here", "ఇది ఇక్కడ పండిస్తారు"), w("It was grown here", "ఇది ఇక్కడ పండించారు")],
      [w("It's woven by hand", "ఇది చేతితో నేస్తారు"), w("It was woven by hand", "ఇది చేతితో నేశారు")],
      [w("It's sent today", "ఇది ఈ రోజు పంపిస్తారు"), w("It was sent today", "ఇది ఈ రోజు పంపించారు")],
    ],
  },
  57: {
    card: {
      title: "said and told",
      tip: {
        en: "said is short, like bed: sed, not sayd. told has a long o, then a soft l and d.",
        te: "said ని bed లాగా చిన్నగా 'సెడ్' అంటారు, 'సేయిడ్' కాదు. told లో 'ఓ' పొడుగ్గా, తర్వాత మెల్లగా l, d వినిపిస్తాయి.",
      },
      sides: [
        {
          label: "said: sed",
          how: { en: "A short e, like bed and red.", te: "bed, red లాగా చిన్న 'ఎ'." },
          words: ["said", "says", "head"],
        },
        {
          label: "told",
          how: { en: "A long o, then a soft l and d at the end.", te: "పొడుగాటి 'ఓ', చివర మెల్లగా l, d." },
          words: ["told", "sold", "cold"],
        },
      ],
      pair: ["say", "said"],
    },
    pairs: [
      [w("say", "చెప్పడం, అనడం"), w("said", "చెప్పారు, అన్నారు")],
      [w("tell", "ఒకరికి చెప్పడం"), w("told", "చెప్పారు")],
      [w("toll", "టోల్ గేట్ దగ్గర కట్టే డబ్బు"), w("told", "ఒకరికి చెప్పారు")],
      [w("sold", "అమ్మేశారు"), w("told", "తెలియజేశారు, చెప్పారు")],
      [w("says", "చెప్తారు"), w("sees", "చూస్తారు")],
    ],
  },
  58: {
    card: {
      title: "where it is: the voice goes down",
      tip: {
        en: "Can you tell me where …? asks for facts, so the voice goes gently down at the end. A yes or no question goes up.",
        te: "Can you tell me where …? అంటే వివరాలు అడుగుతున్నాం, అందుకే చివర స్వరం మెల్లగా కిందికి దిగుతుంది. అవునా కాదా ప్రశ్న చివర పైకి లేస్తుంది.",
      },
      sides: [
        {
          label: "Can you tell me where …?",
          how: { en: "The voice goes down at the end.", te: "చివర స్వరం కిందికి దిగుతుంది." },
          words: ["Can you tell me where the lab is?", "Do you know when it leaves?", "Could you tell me which ward he is in?"],
        },
        {
          label: "Is it …? Does it …?",
          how: { en: "A yes or no question: the voice goes up.", te: "అవునా కాదా ప్రశ్న: చివర స్వరం పైకి లేస్తుంది." },
          words: ["Is the lab open?", "Does it leave now?", "Is he in this ward?"],
        },
      ],
      pair: ["Do you know where it is?", "Is it here?"],
    },
    pairs: [
      [w("Can you tell me where the lab is?", "ల్యాబ్ ఎక్కడ ఉందో చెప్తారా?"), w("Is the lab open?", "ల్యాబ్ తెరిచి ఉందా?")],
      [w("Do you know when it leaves?", "అది ఎప్పుడు బయలుదేరుతుందో తెలుసా?"), w("Does it leave now?", "అది ఇప్పుడు బయలుదేరుతుందా?")],
      [w("Could you tell me which ward he is in?", "ఆయన ఏ వార్డులో ఉన్నారో చెప్తారా?"), w("Is he in this ward?", "ఆయన ఈ వార్డులో ఉన్నారా?")],
      [w("Do you know where it is?", "అది ఎక్కడ ఉందో తెలుసా?"), w("Is it here?", "అది ఇక్కడ ఉందా?")],
      [w("Do you know what time it opens?", "ఎన్నింటికి తెరుస్తారో తెలుసా?"), w("Is it open now?", "ఇప్పుడు తెరిచి ఉందా?")],
    ],
  },
  59: {
    card: {
      title: "where, wear and were",
      tip: {
        en: "where and wear sound the same, like air. were is different: short, like her. We often say all three the same way.",
        te: "where, wear రెండూ ఒకేలా పలుకుతారు, air లాగా. were వేరు: చిన్నగా, her లాగా. మనం మూడింటినీ ఒకేలా అనేస్తుంటాం.",
      },
      sides: [
        {
          label: "where, wear",
          how: { en: "Open your mouth, as in air: wair.", te: "air అన్నట్టు నోరు తెరిచి: 'వెయర్'." },
          words: ["where", "wear", "chair"],
        },
        {
          label: "were",
          how: { en: "Short, with a relaxed mouth, as in her: wur.", te: "నోరు వదులుగా ఉంచి, her లాగా చిన్నగా: 'వర్'." },
          words: ["were", "her", "first"],
        },
      ],
      pair: ["where", "were"],
    },
    pairs: [
      [w("where", "ఎక్కడ"), w("were", "అప్పట్లో ఉన్నారు")],
      [w("wear", "వేసుకోవడం, కట్టుకోవడం"), w("were", "అప్పుడు ఉన్నాయి")],
      [w("hair", "జుట్టు"), w("her", "ఆవిడ, ఆవిడది")],
      [w("Where are they?", "వాళ్ళు ఎక్కడ ఉన్నారు?"), w("Were they there?", "వాళ్ళు అక్కడ ఉన్నారా?")],
      [w("chair", "కుర్చీ"), w("church", "చర్చి")],
    ],
  },
  60: {
    card: {
      title: "one point five lakh",
      tip: {
        en: "Listen for point. One point five lakh is one and a half lakh. Fifteen lakh is ten times more.",
        te: "point ని జాగ్రత్తగా వినండి. one point five lakh అంటే ఒకటిన్నర లక్ష. fifteen lakh అంటే పదిహేను లక్షలు, పది రెట్లు ఎక్కువ.",
      },
      sides: [
        {
          label: "one point five",
          how: { en: "Three short words. Say point clearly, with a tiny pause.", te: "మూడు చిన్న పదాలు. point ని స్పష్టంగా, కొంచెం ఆగి అనండి." },
          words: ["one point five lakh", "two point five lakh", "seven point five per cent"],
        },
        {
          label: "fifteen",
          how: { en: "One number, no point: fif-TEEN, twen-ty-FIVE.", te: "ఒకే సంఖ్య, point లేదు: fif-TEEN, twen-ty-FIVE." },
          words: ["fifteen lakh", "twenty-five lakh", "seventy-five per cent"],
        },
      ],
      pair: ["one point five lakh", "fifteen lakh"],
    },
    pairs: [
      [w("one point five lakh", "ఒకటిన్నర లక్ష"), w("fifteen lakh", "పదిహేను లక్షలు")],
      [w("seven point five per cent", "ఏడున్నర శాతం"), w("seventy-five per cent", "డెబ్భై ఐదు శాతం")],
      [w("two point five lakh", "రెండున్నర లక్షలు"), w("twenty-five lakh", "ఇరవై ఐదు లక్షలు")],
      [w("one point two crore", "ఒక కోటి ఇరవై లక్షలు"), w("twelve crore", "పన్నెండు కోట్లు")],
      [w("four point five lakh", "నాలుగున్నర లక్షలు"), w("forty-five lakh", "నలభై ఐదు లక్షలు")],
    ],
  },
  61: {
    card: {
      title: "Strong news words, quick small words",
      tip: {
        en: "English says the news words strong and long: names, actions, numbers. Small words like the, is and was are quick and soft.",
        te: "ఇంగ్లీష్‌లో వార్తలోని ముఖ్యమైన పదాలు (పేర్లు, పనులు, అంకెలు) గట్టిగా, పొడుగ్గా అంటారు. the, is, was లాంటి చిన్న పదాలు చిన్నగా, త్వరగా వస్తాయి.",
      },
      sides: [
        {
          label: "headline",
          how: { en: "Only strong words, each one with a clear beat.", te: "గట్టి పదాలు మాత్రమే; ప్రతి పదం స్పష్టంగా, ఒక్కో దెబ్బతో." },
          words: ["Flyover opened", "Two men arrested", "Rains hit Guntur"],
        },
        {
          label: "full sentence",
          how: { en: "The small words come back, quick and soft, between the beats.", te: "చిన్న పదాలు మళ్ళీ వస్తాయి; గట్టి పదాల మధ్యలో చిన్నగా, త్వరగా." },
          words: ["The flyover was opened", "Two men were arrested", "It rained in Guntur"],
        },
      ],
      pair: ["Flyover opened", "The flyover was opened"],
    },
    pairs: [
      [w("Flyover opened", "ఫ్లైఓవర్ ప్రారంభం"), w("The flyover was opened", "ఫ్లైఓవర్‌ని ప్రారంభించారు")],
      [w("Two men arrested", "ఇద్దరి అరెస్ట్"), w("Two men were arrested", "ఇద్దరిని అరెస్ట్ చేశారు")],
      [w("Fares to go up", "ఛార్జీలు పెరగనున్నాయి"), w("Fares are going up", "ఛార్జీలు పెరుగుతున్నాయి")],
      [w("Metro to start in May", "మే నుంచి మెట్రో"), w("The metro will start in May", "మే నెలలో మెట్రో మొదలవుతుంది")],
      [w("School closed today", "ఈ రోజు స్కూల్ బంద్"), w("The school is closed today", "ఈ రోజు స్కూల్ మూసి ఉంది")],
    ],
  },
  62: {
    card: {
      title: "A polite tone on the phone",
      tip: {
        en: "On the phone, the office cannot see your face. Your voice must sound polite: soft, steady and not too fast.",
        te: "ఫోన్‌లో ఆఫీసువాళ్ళకి మీ ముఖం కనిపించదు. మీ గొంతే మర్యాదగా వినిపించాలి: మెల్లగా, నిలకడగా, మరీ వేగంగా కాకుండా.",
      },
      sides: [
        {
          label: "Would you mind …?",
          how: { en: "A longer request, said softly. The voice rises a little, then gently falls.", te: "కొంచెం పొడుగైన అభ్యర్థన, మెల్లగా. స్వరం కొంచెం పైకి లేచి, మెల్లగా దిగుతుంది." },
          words: ["Would you mind checking?", "Could you possibly send it?", "Is it OK if I come on Thursday?"],
        },
        {
          label: "Check it.",
          how: { en: "Short and sharp. On a call to an office, it sounds rude.", te: "చిన్నగా, గట్టిగా. ఆఫీసుకి చేసే ఫోన్‌లో ఇది మొరటుగా వినిపిస్తుంది." },
          words: ["Check it.", "Send it.", "I'm coming on Thursday."],
        },
      ],
      pair: ["Would you mind checking?", "Check it."],
    },
    pairs: [
      [w("Would you mind checking?", "కొంచెం చూస్తారా?"), w("Check it.", "చూడండి.")],
      [w("Could you possibly send it?", "వీలైతే పంపిస్తారా?"), w("Send it.", "పంపించండి.")],
      [w("Is it OK if I come on Thursday?", "గురువారం రావొచ్చా?"), w("I'm coming on Thursday.", "గురువారం వస్తున్నాను.")],
      [w("Could you give me an update, please?", "ఏమైందో కొంచెం చెప్తారా?"), w("Give me an update.", "ఏమైందో చెప్పండి.")],
      [w("I'm calling about my bill.", "నా బిల్లు గురించి ఫోన్ చేశాను."), w("What about my bill?", "నా బిల్లు సంగతేంటి?")],
    ],
  },
  63: {
    card: {
      title: "dates and titles on letters",
      tip: {
        en: "Telugu reads a date as a plain number. English reads the fifth of March, and says Mr and Mrs in full.",
        te: "తెలుగులో తేదీని మామూలు సంఖ్యలా, మార్చి ఐదు అని చదువుతాం. ఇంగ్లీష్‌లో the fifth of March అంటారు; Mr, Mrs ని పూర్తిగా చదువుతారు.",
      },
      sides: [
        {
          label: "5 March: the fifth of March",
          how: { en: "Say the, then the number with -th, then of and the month.", te: "ముందు the, తర్వాత -th తో సంఖ్య, తర్వాత of, ఆ తర్వాత నెల." },
          words: ["the first of April", "the fifth of March", "the thirty-first of May"],
        },
        {
          label: "Mr, Mrs, Dr",
          how: { en: "Mr is read Mister, Mrs is read Missus, Dr is read Doctor.", te: "Mr ని Mister అని, Mrs ని Missus అని, Dr ని Doctor అని చదవాలి." },
          words: ["Mr Rao", "Mrs Rao", "Dr Rao"],
        },
      ],
      pair: ["the fifth of March", "the fifteenth of March"],
    },
    pairs: [
      [w("the fifth of March", "మార్చి 5వ తేదీ"), w("the fifteenth of March", "మార్చి 15వ తేదీ")],
      [w("the third of May", "మే 3వ తేదీ"), w("the thirtieth of May", "మే 30వ తేదీ")],
      [w("the twelfth of April", "ఏప్రిల్ 12వ తేదీ"), w("the twentieth of April", "ఏప్రిల్ 20వ తేదీ")],
      [w("Mr Rao", "శ్రీ రావు గారు"), w("Mrs Rao", "శ్రీమతి రావు గారు")],
      [w("Dear Sir", "గౌరవనీయులైన సార్"), w("Dear Madam", "గౌరవనీయులైన మేడమ్")],
    ],
  },
  64: {
    card: {
      title: "Some MORE? A warm offer",
      tip: {
        en: "A flat offer sounds like you don't care. A warm offer goes up at the end.",
        te: "ఒకే స్వరంలో అడిగితే పట్టించుకోనట్టు వినిపిస్తుంది. ఆప్యాయంగా అడిగేటప్పుడు చివర స్వరం పైకి లేస్తుంది.",
      },
      sides: [
        {
          label: "an offer",
          how: { en: "Your voice goes up warmly at the end.", te: "చివర స్వరం ఆప్యాయంగా పైకి లేస్తుంది." },
          words: ["Some more?", "More coffee?", "Would you like some tea?"],
        },
        {
          label: "a reply",
          how: { en: "Your voice goes down at the end.", te: "చివర స్వరం కిందికి దిగుతుంది." },
          words: ["Some more, please.", "No more, thank you.", "I'd like some tea."],
        },
      ],
      pair: ["More coffee?", "No more coffee."],
    },
    pairs: [
      [w("More coffee?", "ఇంకా కాఫీ కావాలా?"), w("No more coffee.", "ఇంక కాఫీ వద్దు.")],
      [w("Some more rice?", "ఇంకొంచెం అన్నం వేయనా?"), w("Some more rice, please.", "ఇంకొంచెం అన్నం వేయండి.")],
      [w("Would you like some water?", "మంచినీళ్ళు కావాలా?"), w("I'd like some water.", "నాకు మంచినీళ్ళు కావాలి.")],
      [w("Another dosa?", "ఇంకో దోసె వేయనా?"), w("Just one dosa.", "ఒక్క దోసె చాలు.")],
      [w("A little more sambar?", "ఇంకొంచెం సాంబార్ వేయనా?"), w("Just a little sambar.", "కొంచెం సాంబారే చాలు.")],
    ],
  },
  65: {
    card: {
      title: "He was a kind man. Soft, slow and down",
      tip: {
        en: "For wishes and condolences, speak a little slower and softer, and let your voice go gently down. A quick rise sounds like a question.",
        te: "శుభాకాంక్షలు, పరామర్శ చెప్పేటప్పుడు కొంచెం నెమ్మదిగా, మెల్లగా మాట్లాడి, చివర స్వరం మెల్లగా కిందికి దించండి. త్వరగా పైకి లేస్తే ప్రశ్నలా వినిపిస్తుంది.",
      },
      sides: [
        {
          label: "a wish or kind words",
          how: { en: "Slow and soft; the voice goes gently down at the end.", te: "నెమ్మదిగా, మెల్లగా; చివర స్వరం మెల్లగా కిందికి దిగుతుంది." },
          words: ["He was a kind man.", "We will miss him.", "Wishing you both a happy life."],
        },
        {
          label: "a yes or no question",
          how: { en: "The voice goes up at the end.", te: "చివర స్వరం పైకి లేస్తుంది." },
          words: ["Was he a kind man?", "Will you come?", "Is it beautiful?"],
        },
      ],
      pair: ["He was a kind man.", "Was he a kind man?"],
    },
    pairs: [
      [w("He was a kind man.", "ఆయన చాలా మంచి మనిషి."), w("Was he a kind man?", "ఆయన మంచి మనిషా?")],
      [w("It's beautiful.", "చాలా అందంగా ఉంది."), w("Is it beautiful?", "అందంగా ఉందా?")],
      [w("She looks so happy.", "ఆవిడ చాలా సంతోషంగా కనిపిస్తున్నారు."), w("Is she happy?", "ఆవిడ సంతోషంగా ఉన్నారా?")],
      [w("You can call me anytime.", "మీరు నాకు ఎప్పుడైనా ఫోన్ చేయొచ్చు."), w("Can I call you anytime?", "నేను మీకు ఎప్పుడైనా ఫోన్ చేయొచ్చా?")],
      [w("The rooms are bright.", "గదులు వెలుతురుగా ఉన్నాయి."), w("Are the rooms bright?", "గదులు వెలుతురుగా ఉన్నాయా?")],
    ],
  },
  66: {
    card: {
      title: "turn OFF: a strong little word",
      tip: {
        en: "In turn off and pick up, the little word is strong. If you say it softly, people miss it: on or off?",
        te: "turn off, pick up లో చిన్న పదం (off, up) గట్టిగా వస్తుంది. దాన్ని మెల్లగా అంటే on అన్నారో off అన్నారో వినేవాళ్ళకి అర్థం కాదు.",
      },
      sides: [
        {
          label: "turn OFF",
          how: { en: "The verb is quick; the little word is strong and clear.", te: "verb త్వరగా; చిన్న పదం గట్టిగా, స్పష్టంగా." },
          words: ["turn off", "pick up", "put away"],
        },
        {
          label: "turn it OFF",
          how: { en: "It in the middle is tiny; the last word is strong.", te: "మధ్యలో it చాలా చిన్నగా; చివరి పదం గట్టిగా." },
          words: ["turn it off", "pick it up", "put it away"],
        },
      ],
      pair: ["Turn it on", "Turn it off"],
    },
    pairs: [
      [w("Turn it on", "దాన్ని ఆన్ చేయండి"), w("Turn it off", "దాన్ని ఆఫ్ చేయండి")],
      [w("Turn it up", "సౌండ్ పెంచండి"), w("Turn it down", "సౌండ్ తగ్గించండి")],
      [w("Put it away", "దాన్ని లోపల సర్దేయండి"), w("Put it back", "దాన్ని మళ్ళీ అక్కడే పెట్టండి")],
      [w("Give it away", "దాన్ని ఎవరికైనా ఇచ్చేయండి"), w("Give it back", "దాన్ని తిరిగి ఇచ్చేయండి")],
      [w("Take it out", "దాన్ని బయటికి తీయండి"), w("Take it off", "దాన్ని తీసేయండి")],
    ],
  },
  67: {
    card: {
      title: "is or was: now or before?",
      tip: {
        en: "In notices and messages, is and was are small and fast. Catch them: is means now or always; was means it already happened.",
        te: "నోటీసుల్లో, మెసేజ్‌ల్లో is, was చిన్నగా, త్వరగా వినిపిస్తాయి. జాగ్రత్తగా వినండి: is అంటే ఇప్పుడు లేదా ఎప్పుడూ; was అంటే అప్పటికే అయిపోయింది.",
      },
      sides: [
        {
          label: "is: now",
          how: { en: "A short, soft iz, joined to the next word.", te: "చిన్నగా, మెల్లగా 'ఇజ్', తర్వాతి పదంతో కలిపి." },
          words: ["is closed", "is served", "is sent"],
        },
        {
          label: "was: before",
          how: { en: "A quick wuz. Listen for the w at the start.", te: "త్వరగా 'వజ్'. మొదట్లో w శబ్దం వినండి." },
          words: ["was closed", "was served", "was sent"],
        },
      ],
      pair: ["The office is closed on Monday", "The office was closed on Monday"],
    },
    pairs: [
      [w("The office is closed on Monday", "సోమవారం ఆఫీసు మూసి ఉంటుంది"), w("The office was closed on Monday", "సోమవారం ఆఫీసు మూసేశారు")],
      [w("The card is sent by post", "కార్డు పోస్టులో పంపిస్తారు"), w("The card was sent by post", "కార్డు పోస్టులో పంపించారు")],
      [w("Tea is served at four", "నాలుగింటికి టీ ఇస్తారు"), w("Tea was served at four", "నాలుగింటికి టీ ఇచ్చారు")],
      [w("The gate is locked at ten", "పదింటికి గేటుకి తాళం వేస్తారు"), w("The gate was locked at ten", "పదింటికి గేటుకి తాళం వేశారు")],
      [w("The bill is paid online", "బిల్లు ఆన్‌లైన్‌లో కడతారు"), w("The bill was paid online", "బిల్లు ఆన్‌లైన్‌లో కట్టారు")],
    ],
  },
  68: {
    card: {
      title: "s-clusters: stop, smoke, sleep",
      tip: {
        en: "Telugu puts a vowel before or after the s: istop, sumoke. English joins the s straight to the next sound.",
        te: "తెలుగులో s ముందు గానీ, తర్వాత గానీ అచ్చు చేరుస్తాం: 'ఇస్టాప్', 'సుమోక్'. ఇంగ్లీష్‌లో s నేరుగా తర్వాతి అక్షరంతో కలిసిపోతుంది.",
      },
      sides: [
        {
          label: "s joined on",
          how: { en: "A soft hiss, then the next sound at once, with no vowel in between.", te: "ముందు మెల్లగా 'స్', వెంటనే తర్వాతి అక్షరం; మధ్యలో అచ్చు వద్దు." },
          words: ["stop", "smoke", "sleep"],
        },
        {
          label: "no s",
          how: { en: "Drop the s and it becomes another word.", te: "s వదిలేస్తే అది వేరే పదం అయిపోతుంది." },
          words: ["mile", "team", "pill"],
        },
      ],
      pair: ["smile", "mile"],
    },
    pairs: [
      [w("smile", "చిరునవ్వు"), w("mile", "మైలు")],
      [w("steam", "ఆవిరి"), w("team", "టీమ్, జట్టు")],
      [w("spill", "ఒలికిపోవడం"), w("pill", "మాత్ర")],
      [w("scold", "తిట్టడం"), w("cold", "చల్లని, జలుబు")],
      [w("sweat", "చెమట"), w("wet", "తడి")],
    ],
  },
  69: {
    card: {
      title: "weak were: If I were you",
      tip: {
        en: "In If I were you, were is quick and soft, almost wə. The strong word is you. Listen for the small wə: it tells you were.",
        te: "If I were you లో were చాలా త్వరగా, మెల్లగా, దాదాపు 'వ' లాగా వస్తుంది. గట్టిగా వినిపించేది you. ఆ చిన్న 'వ' ని జాగ్రత్తగా వినండి: అదే were.",
      },
      sides: [
        {
          label: "were (weak)",
          how: { en: "Two beats, the second tiny: if-ai-wə-YOU, wee-wə LATE.", te: "రెండు భాగాలు, రెండోది చాలా చిన్నది: 'ఇఫ్-ఐ-వ-యూ', 'వీ-వ లేట్'." },
          words: ["If I were you", "if you were here", "we were late"],
        },
        {
          label: "'re (no were)",
          how: { en: "One quick beat, joined to the word before: weer, yor.", te: "ఒకే భాగం, ముందు పదానికి అతుక్కుని: 'వీర్', 'యోర్'." },
          words: ["if you're here", "we're late", "they're ready"],
        },
      ],
      pair: ["We were late", "We're late"],
    },
    pairs: [
      [w("If you were here", "మీరు ఇక్కడ ఉంటే (కానీ లేరు)"), w("If you're here", "మీరు ఇక్కడ ఉంటే (ఉండొచ్చు)")],
      [w("We were late", "మేము ఆలస్యంగా వచ్చాం"), w("We're late", "మాకు ఆలస్యమైంది, ఇప్పుడు")],
      [w("They were ready", "వాళ్ళు అప్పుడు రెడీగా ఉన్నారు"), w("They're ready", "వాళ్ళు ఇప్పుడు రెడీగా ఉన్నారు")],
      [w("You were right", "అప్పుడు మీరు చెప్పింది నిజమే"), w("You're right", "మీరు చెప్పేది నిజమే")],
      [w("If it were closer", "అది దగ్గరగా ఉంటే (కానీ దూరం)"), w("If it's closer", "అది దగ్గరగా ఉంటే (అవ్వొచ్చు)")],
    ],
  },
  70: {
    card: {
      title: "should and should've",
      tip: {
        en: "In fast speech, should have becomes should've, like shud-uv. That tiny uv tells you it is about the past.",
        te: "త్వరగా మాట్లాడేటప్పుడు should have ని should've (షుడ్-అవ్) అంటారు. ఆ చిన్న 'అవ్' వినిపిస్తే, అది జరిగిపోయిన దాని గురించి.",
      },
      sides: [
        {
          label: "should: now or later",
          how: { en: "Should, then the plain verb: advice for now.", te: "should తర్వాత verb అలాగే: ఇప్పటికి సలహా." },
          words: ["I should go", "you should ask", "we should leave"],
        },
        {
          label: "should've: too late",
          how: { en: "A soft uv after should, then the past form: a small regret.", te: "should తర్వాత మెల్లగా 'అవ్', ఆ తర్వాత past form: చిన్న బాధ." },
          words: ["I should've gone", "you should've asked", "we should've left"],
        },
      ],
      pair: ["I should go", "I should've gone"],
    },
    pairs: [
      [w("I should go", "నేను వెళ్ళాలి"), w("I should've gone", "నేను వెళ్ళాల్సింది")],
      [w("You should ask", "మీరు అడిగితే మంచిది"), w("You should've asked", "మీరు అడగాల్సింది")],
      [w("We should leave early", "మనం త్వరగా బయలుదేరాలి"), w("We should've left early", "మనం త్వరగా బయలుదేరాల్సింది")],
      [w("I should check", "నేను చూసుకోవాలి"), w("I should've checked", "నేను చూసుకోవాల్సింది")],
      [w("She should call", "ఆవిడ ఫోన్ చేస్తే మంచిది"), w("She should've called", "ఆవిడ ఫోన్ చేయాల్సింది")],
    ],
  },
  71: {
    card: {
      title: "gone up: join the little word",
      tip: {
        en: "English joins a verb to the little word after it: gone up sounds like go-nup. Don't add a u sound or stop in between.",
        te: "ఇంగ్లీష్‌లో verb ని దాని తర్వాతి చిన్న పదంతో కలిపి అంటారు: gone up 'గా-నప్' లాగా. మధ్యలో 'ఉ' చేర్చకండి, ఆగకండి.",
      },
      sides: [
        {
          label: "gone up",
          how: {
            en: "The last sound of the verb moves on to the little word: go-nup, ge-ton.",
            te: "verb చివరి శబ్దం చిన్న పదానికి కలిసిపోతుంది: 'గా-నప్', 'గె-టాన్'.",
          },
          words: ["gone up", "get on", "fill it up"],
        },
        {
          label: "went down",
          how: {
            en: "Before d or b, the t is very short, almost not heard: wen-down.",
            te: "d, b ముందు t చాలా చిన్నగా, దాదాపు వినిపించకుండా వస్తుంది: 'వెన్-డౌన్'.",
          },
          words: ["went down", "cut down", "put back"],
        },
      ],
      pair: ["Prices have gone up", "Prices have gone down"],
    },
    pairs: [
      [w("Prices have gone up", "ధరలు పెరిగాయి"), w("Prices have gone down", "ధరలు తగ్గాయి")],
      [w("Petrol went up", "పెట్రోల్ ధర పెరిగింది"), w("Petrol went down", "పెట్రోల్ ధర తగ్గింది")],
      [w("Get on the bus", "బస్సు ఎక్కండి"), w("Get off the bus", "బస్సు దిగండి")],
      [w("Fill it up", "పూర్తిగా నింపండి"), w("Fill it in", "ఫారం నింపండి")],
      [w("Cut it up", "దాన్ని ముక్కలుగా కోయండి"), w("Cut it out", "దాన్ని కత్తిరించి తీయండి")],
    ],
  },
  72: {
    card: {
      title: "PROB-ab-ly and per-HAPS",
      tip: {
        en: "A long word has one strong part, and the other parts are quick. Telugu says every part evenly.",
        te: "పొడుగు పదంలో ఒక్క భాగమే గట్టిగా వస్తుంది, మిగతావి త్వరగా. తెలుగులో అన్ని భాగాలూ సమానంగా అంటాం.",
      },
      sides: [
        {
          label: "PROB-ab-ly",
          how: { en: "First part strong; the middle is quick, almost lost.", te: "మొదటి భాగం గట్టిగా; మధ్యది చాలా త్వరగా, దాదాపు వినపడదు." },
          words: ["probably", "definitely", "certainly"],
        },
        {
          label: "per-HAPS",
          how: { en: "First part tiny, like a quick pə; the second part strong.", te: "మొదటి భాగం చాలా చిన్నది, ఒక చిన్న 'ప' లాగా; రెండో భాగం గట్టిగా." },
          words: ["perhaps", "tonight", "about"],
        },
      ],
      pair: ["probably", "perhaps"],
    },
    pairs: [
      [w("I'll probably come", "బహుశా వస్తాను"), w("I'll definitely come", "తప్పకుండా వస్తాను")],
      [w("It'll probably rain", "బహుశా వర్షం పడుతుంది"), w("It probably won't rain", "బహుశా వర్షం పడదు")],
      [w("Perhaps tomorrow", "రేపు కావచ్చు"), w("Probably tomorrow", "బహుశా రేపే")],
      [w("Maybe next week", "వచ్చే వారం కావచ్చు"), w("Definitely next week", "ఖచ్చితంగా వచ్చే వారమే")],
      [w("It might rain", "వర్షం పడొచ్చు"), w("It will rain", "వర్షం పడుతుంది")],
    ],
  },
  73: {
    card: {
      title: "must be: the t goes quiet",
      tip: {
        en: "In fast speech, the t in must be is almost silent: mus-bi. Listen for must or might: it tells you how sure someone is.",
        te: "త్వరగా మాట్లాడేటప్పుడు must be లో t దాదాపు వినిపించదు: 'మస్-బి'. must అన్నారో might అన్నారో జాగ్రత్తగా వినండి: ఎంత ఖచ్చితంగా చెప్తున్నారో అదే చెప్తుంది.",
      },
      sides: [
        {
          label: "must be: sure",
          how: { en: "A short u, like అ, and almost no t: mus-bi.", te: "చిన్న 'అ' శబ్దం, t దాదాపు లేదు: 'మస్-బి'." },
          words: ["must be busy", "must be closed", "must be sleeping"],
        },
        {
          label: "might be: not sure",
          how: { en: "A long ai, like ఐ, and a soft t: mait-bi.", te: "పొడుగాటి 'ఐ' శబ్దం, t మెల్లగా: 'మైట్-బి'." },
          words: ["might be busy", "might be closed", "might be sleeping"],
        },
      ],
      pair: ["It must be closed", "It might be closed"],
    },
    pairs: [
      [w("It must be closed", "మూసేసి ఉంటుంది"), w("It might be closed", "మూసేసి ఉండొచ్చు")],
      [w("He must be busy", "ఆయన బిజీగా ఉండి ఉంటారు"), w("He can't be busy", "ఆయన బిజీగా ఉండే ఛాన్స్ లేదు")],
      [w("She must be sleeping", "ఆవిడ నిద్రపోతూ ఉంటారు"), w("She might be sleeping", "ఆవిడ నిద్రపోతూ ఉండొచ్చు")],
      [w("There must be a power cut", "కరెంట్ పోయి ఉంటుంది"), w("There might be a power cut", "కరెంట్ పోయి ఉండొచ్చు")],
      [w("That must be the postman", "వచ్చింది పోస్ట్‌మ్యాన్ అయ్యుంటారు"), w("That can't be the postman", "వచ్చింది పోస్ట్‌మ్యాన్ అయ్యుండరు")],
    ],
  },
  74: {
    card: {
      title: "FIRST, THEN: strong step words",
      tip: {
        en: "Listeners follow your steps by the strong step word and the short pause after it. Without them, the steps run together.",
        te: "step మాట గట్టిగా వినిపించి, దాని తర్వాత చిన్న విరామం ఉంటేనే వినేవాళ్ళకి steps అర్థమవుతాయి. లేకపోతే అన్నీ కలిసిపోతాయి.",
      },
      sides: [
        {
          label: "FIRST",
          how: { en: "Say the step word loud and clear.", te: "step మాటని గట్టిగా, స్పష్టంగా అనండి." },
          words: ["first", "then", "finally"],
        },
        {
          label: "pause",
          how: { en: "Stop for a moment after the step word, at the comma.", te: "step మాట తర్వాత, కామా దగ్గర, ఒక్క క్షణం ఆగండి." },
          words: ["First, wash the mangoes.", "Then, cut them.", "Finally, add the oil."],
        },
      ],
      pair: ["First, add the salt", "Then, add the salt"],
    },
    pairs: [
      [w("First, add the salt", "ముందు ఉప్పు వేయండి"), w("Then, add the salt", "తర్వాత ఉప్పు వేయండి")],
      [w("First, press start", "ముందు start నొక్కండి"), w("Finally, press start", "చివరగా start నొక్కండి")],
      [w("After that, close the lid", "ఆ తర్వాత మూత మూయండి"), w("Before that, close the lid", "దానికి ముందు మూత మూయండి")],
      [w("Next, insert the card", "తర్వాత కార్డు పెట్టండి"), w("First, insert the card", "ముందు కార్డు పెట్టండి")],
      [w("Now, mix it well", "ఇప్పుడు బాగా కలపండి"), w("Then, mix it well", "తర్వాత బాగా కలపండి")],
    ],
  },
  75: {
    card: {
      title: "Firm, not angry",
      tip: {
        en: "When you complain, keep your voice steady and not too loud. Stress the facts: the days, the numbers, the problem. Shouting makes people stop listening.",
        te: "ఫిర్యాదు చేసేటప్పుడు గొంతు నిలకడగా, మరీ గట్టిగా కాకుండా ఉండాలి. వాస్తవాల్ని నొక్కి చెప్పండి: రోజులు, అంకెలు, సమస్య. అరిస్తే వినేవాళ్ళు వినడం మానేస్తారు.",
      },
      sides: [
        {
          label: "Firm",
          how: { en: "Steady and calm. Stress the facts, and let the voice fall at the end.", te: "నిలకడగా, ప్రశాంతంగా. వాస్తవాల్ని నొక్కి చెప్పి, చివర గొంతు కిందికి దించండి." },
          words: ["It hasn't been fixed for two weeks.", "We have complained three times.", "Please send someone this week."],
        },
        {
          label: "Angry",
          how: { en: "Loud and fast, every word hit hard. It sounds like blame.", te: "గట్టిగా, వేగంగా, ప్రతి మాటా కొట్టినట్టు. నింద వేస్తున్నట్టు వినిపిస్తుంది." },
          words: ["Nobody does anything here!", "How many times must we complain?", "Send someone right now!"],
        },
      ],
      pair: ["Please send someone this week.", "Send someone right now!"],
    },
    pairs: [
      [w("Please send someone this week.", "ఈ వారం ఎవరినైనా కొంచెం పంపించండి."), w("Send someone right now!", "వెంటనే ఎవరినైనా పంపించండి!")],
      [w("We have complained three times.", "మూడుసార్లు ఫిర్యాదు చేశాం."), w("How many times must we complain?", "ఇంకా ఎన్నిసార్లు ఫిర్యాదు చేయాలి?")],
      [w("It hasn't been fixed for two weeks.", "రెండు వారాలుగా బాగు చేయలేదు."), w("Nobody does anything here!", "ఇక్కడ ఎవరూ ఏమీ చేయరు!")],
      [w("Could you tell me by when?", "ఎప్పటిలోగా చేస్తారో చెప్తారా?"), w("When will you ever do it?", "అసలు ఎప్పుడు చేస్తారు?")],
      [w("We request you to act soon.", "త్వరగా చర్య తీసుకోమని కోరుతున్నాం."), w("Do your job properly!", "మీ పని సరిగ్గా చేయండి!")],
    ],
  },
  76: {
    card: {
      title: "tags: down to agree, up to ask",
      tip: {
        en: "Telugu కదా? sounds the same every time. In English, a tag that agrees goes down; a real question goes up.",
        te: "తెలుగులో 'కదా?' ఎప్పుడూ ఒకేలా వినిపిస్తుంది. ఇంగ్లీష్‌లో ఒప్పుకోమనే tag చివర స్వరం కిందికి; నిజమైన ప్రశ్న పైకి.",
      },
      sides: [
        {
          label: "agreeing: down",
          how: { en: "You expect yes: the voice goes down on the tag.", te: "అవును అంటారని తెలుసు: tag దగ్గర స్వరం కిందికి దిగుతుంది." },
          words: ["You're new here, aren't you?", "You live nearby, don't you?", "It was hot yesterday, wasn't it?"],
        },
        {
          label: "asking: up",
          how: { en: "You are not sure: the voice goes up, like a yes or no question.", te: "మీకు తెలీదు: అవునా కాదా ప్రశ్నలో లాగా స్వరం పైకి లేస్తుంది." },
          words: ["Are you new here?", "Do you live nearby?", "Was it hot yesterday?"],
        },
      ],
      pair: ["You're new here, aren't you?", "Are you new here?"],
    },
    pairs: [
      [w("You're new here, aren't you?", "మీరు ఇక్కడికి కొత్త కదా?"), w("Are you new here?", "మీరు ఇక్కడికి కొత్తా?")],
      [w("You live nearby, don't you?", "మీరు దగ్గర్లోనే ఉంటారు కదా?"), w("Do you live nearby?", "మీరు దగ్గర్లో ఉంటారా?")],
      [w("The park closes at eight, doesn't it?", "పార్క్ ఎనిమిదింటికి మూసేస్తారు కదా?"), w("Does the park close at eight?", "పార్క్ ఎనిమిదింటికి మూసేస్తారా?")],
      [w("It was hot yesterday, wasn't it?", "నిన్న ఎండగా ఉంది కదా?"), w("Was it hot yesterday?", "నిన్న ఎండగా ఉందా?")],
      [w("Suresh went to Shirdi, didn't he?", "సురేష్ గారు షిరిడీ వెళ్ళారు కదా?"), w("Did Suresh go to Shirdi?", "సురేష్ గారు షిరిడీ వెళ్ళారా?")],
    ],
  },
  77: {
    card: {
      title: "IN-ter-est-ed, BOR-ing: the ending is quick",
      tip: {
        en: "Telugu speakers often push the ending: inter-EST-ed, bor-ING. English keeps the strong part where it was; -ed and -ing are short and soft.",
        te: "మనం చాలాసార్లు చివరి భాగాన్ని గట్టిగా అంటాం: inter-EST-ed, bor-ING. ఇంగ్లీష్‌లో గట్టి భాగం మారదు; -ed, -ing చిన్నగా, మెత్తగా వస్తాయి.",
      },
      sides: [
        {
          label: "-ed: how you feel",
          how: { en: "Strong at the start, then a quick -ed: IN-ter-est-ed, ex-CIT-ed.", te: "మొదట్లో గట్టిగా, తర్వాత -ed త్వరగా: IN-ter-est-ed, ex-CIT-ed." },
          words: ["interested", "excited", "bored"],
        },
        {
          label: "-ing: what makes you feel it",
          how: { en: "The same strong part, then a soft -ing: IN-ter-est-ing, BOR-ing.", te: "అదే గట్టి భాగం, తర్వాత మెత్తగా -ing: IN-ter-est-ing, BOR-ing." },
          words: ["interesting", "exciting", "boring"],
        },
      ],
      pair: ["bored", "boring"],
    },
    pairs: [
      [w("bored", "బోర్ కొట్టిన"), w("boring", "బోర్ కొట్టించే")],
      [w("interested", "ఆసక్తి ఉన్న"), w("interesting", "ఆసక్తికరమైన")],
      [w("excited", "ఉత్సాహంగా ఉన్న"), w("exciting", "ఉత్సాహం కలిగించే")],
      [w("surprised", "ఆశ్చర్యపోయిన"), w("surprising", "ఆశ్చర్యపరిచే")],
      [w("tired", "అలసిపోయిన"), w("tiring", "అలసట కలిగించే")],
    ],
  },
  78: {
    card: {
      title: "the American t and the British r",
      tip: {
        en: "Americans often say a t between two vowels softly, almost like d. Many British people don't say an r after a vowel; they make the vowel long.",
        te: "అమెరికా వాళ్ళు రెండు అచ్చుల మధ్య t ని మెత్తగా, దాదాపు d లాగా అంటారు. చాలామంది బ్రిటిష్ వాళ్ళు అచ్చు తర్వాత r అనరు; ఆ అచ్చుని లాగి అంటారు.",
      },
      sides: [
        {
          label: "American t",
          how: { en: "The t in the middle is quick and soft, like a light d: wah-der.", te: "మధ్యలో t చిన్నగా, మెత్తగా, తేలికైన d లాగా: వా-డర్." },
          words: ["water", "better", "city"],
        },
        {
          label: "British r",
          how: { en: "No r after the vowel; the vowel is long: car sounds like kaa.", te: "అచ్చు తర్వాత r ఉండదు; అచ్చు పొడుగ్గా: car 'కా' లాగా వినిపిస్తుంది." },
          words: ["car", "park", "here"],
        },
      ],
      pair: ["water", "waiter"],
    },
    pairs: [
      [w("water", "నీళ్ళు"), w("waiter", "వెయిటర్, హోటల్‌లో వడ్డించేవారు")],
      [w("better", "ఇంకా బాగా"), w("butter", "వెన్న")],
      [w("letter", "ఉత్తరం"), w("later", "తర్వాత")],
      [w("park", "పార్క్"), w("pack", "సర్దడం, ప్యాక్ చేయడం")],
      [w("heart", "గుండె"), w("hat", "టోపీ")],
    ],
  },
  79: {
    card: {
      title: "You should REALLY try it: the persuading word strong",
      tip: {
        en: "Telugu adds తప్పకుండా to persuade. English also makes one word strong and long: You should REALLY try it.",
        te: "తెలుగులో ఒప్పించడానికి 'తప్పకుండా' అని చేరుస్తాం. ఇంగ్లీష్‌లో ఒక మాటను గట్టిగా, సాగదీసి అంటారు: You should REALLY try it.",
      },
      sides: [
        {
          label: "REALLY: strong",
          how: { en: "Really, so, do: strong, long and a little higher.", te: "really, so, do: గట్టిగా, సాగదీసి, కొంచెం పైకి." },
          words: ["You should really try it", "It's so easy", "Please do come"],
        },
        {
          label: "plain",
          how: { en: "No extra word: every word stays light and even.", te: "అదనపు మాట లేదు: అన్ని మాటలూ తేలికగా, సమానంగా." },
          words: ["You should try it", "It's easy", "Please come"],
        },
      ],
      pair: ["You should really try it", "You should try it"],
    },
    pairs: [
      [w("You should really try it", "మీరు తప్పకుండా try చేయాలి"), w("You should try it", "మీరు try చేయండి")],
      [w("It's so easy", "ఇది చాలా తేలిక"), w("It's easy", "ఇది తేలిక")],
      [w("Please do come", "తప్పకుండా రండి"), w("Please come", "రండి")],
      [w("You'll really like it", "మీకు నిజంగా బాగా నచ్చుతుంది"), w("You'll like it", "మీకు నచ్చుతుంది")],
      [w("It's really good for you", "ఇది మీకు చాలా మంచిది"), w("It's good for you", "ఇది మీకు మంచిది")],
    ],
  },
  80: {
    card: {
      title: "s-clusters again: street, school",
      tip: {
        en: "Telugu adds a vowel before or inside st, sk, sp: istreet, sukool. Join the s straight on.",
        te: "తెలుగులో st, sk, sp ముందు గానీ మధ్యలో గానీ అచ్చు చేరుస్తాం: 'ఇస్ట్రీట్', 'సుకూల్'. s ని నేరుగా తర్వాతి అక్షరానికి కలపండి.",
      },
      sides: [
        {
          label: "s joined on",
          how: { en: "A soft hiss, then the next sound at once, with no vowel before it.", te: "మెల్లగా 'స్', వెంటనే తర్వాతి అక్షరం; ముందు 'ఇ' వద్దు." },
          words: ["street", "school", "stray"],
        },
        {
          label: "no s",
          how: { en: "Without the s, it is a different word.", te: "s లేకపోతే అది వేరే పదం అయిపోతుంది." },
          words: ["treat", "cool", "tray"],
        },
      ],
      pair: ["street", "treat"],
    },
    pairs: [
      [w("street", "వీధి"), w("treat", "ట్రీట్, విందు")],
      [w("school", "బడి, స్కూల్"), w("cool", "చల్లని")],
      [w("stray", "వీధుల్లో తిరిగే (కుక్కలు)"), w("tray", "ట్రే, పళ్ళెం")],
      [w("spray", "స్ప్రే, మందు చల్లడం"), w("pray", "ప్రార్థించడం")],
      [w("stall", "స్టాల్, బడ్డీ కొట్టు"), w("tall", "పొడుగైన")],
    ],
  },
};

export const soundOfWeek = (week: number): SoundWeek | undefined => sounds[week];
