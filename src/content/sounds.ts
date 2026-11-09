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
};

export const soundOfWeek = (week: number): SoundWeek | undefined => sounds[week];
