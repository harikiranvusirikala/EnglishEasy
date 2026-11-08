# EnglishEasy
## Product Vision & Learning Architecture (v3, 2026-11-07)

The original vision is kept unchanged in [INITIAL_VISION.md](INITIAL_VISION.md). This version adds the owner's decisions, a tighter lesson design and a 150-week course structure. The full course map is in [CURRICULUM.md](CURRICULUM.md); how the app is built is in [BUILD_PLAN.md](BUILD_PLAN.md); features planned for after launch are in [FUTURE_FEATURES.md](FUTURE_FEATURES.md).

### What changed from the initial vision

- **A long course:** about **150 weeks** in five stages (Foundations → Natural English), released step by step. The app launches with Week 1; more weeks are added on request.
- **Lesson arc:** six short sections (Warm-up, Learn, Practice, Listen & Speak, Role Play, Wrap-up), 10–15 minutes per lesson.
- **Weekly rhythm:** from Week 2, five lessons + a **Conversation Day** + an automatic **Review** day.
- **Optional tracks:** family-specific courses (Talking with Grandchildren, Visiting Family Abroad) that learners turn on only if they fit their life. The main path never assumes the learner has children.
- **Learn in Telugu or English:** explanations in Telugu (with English words where natural) or in simple English, chosen with a toggle.
- **Audio everywhere:** explanations are read aloud too (Telugu and English voices together), and each new card, question and conversation line plays automatically, with 🔊 and 🐢 to listen again.
- **New learning features:** colour-coded sentence patterns, Telugu → English word-order bridge, "Don't say / Say" cards, recognise → build → produce ordering, warm-up recall, Practice again, My Sentences, "Try it today".
- **No typing anywhere.** Buttons, word tiles or voice only.
- **Speaking never blocks progress.** "Choose instead" is always available.
- **Day numbers, not weekdays.** "Day 3", never "Wednesday".
- **Daily reminders:** an optional notification at the learner's chosen time, skipped on days they already practised.
- **Product decisions:** optional Google sign-in (guest first), the phone's built-in voices, installable web app, larger text option, Day/Night theme, search-engine-ready landing and lesson pages, no AI while the app runs.

---

# 1. Core Vision

EnglishEasy is a **structured, mobile-first English learning and speaking practice app for Telugu-speaking adults and elders**.

It combines a structured daily journey, practical grammar taught through everyday sentence patterns, Telugu explanations, many learning and practice formats, listening, speaking, role play, repetition and simple visual progress.

The learner never has to decide:

> "What should I learn today?"

EnglishEasy answers that for them — while never locking them into a rigid course.

---

# 2. Who It Is For & Design Principles

**The learner:** a Telugu-speaking adult, often 50+. Reads Telugu comfortably, knows some English words, uses WhatsApp and YouTube on an Android phone, may have weaker eyesight, may be nervous about "getting it wrong". They may or may not have children or grandchildren; the main course never assumes either.

Principles every screen follows:

1. **One clear next step.** Every screen has one obvious primary button.
2. **No typing.** Answers are buttons, word tiles or voice. There are no text fields in the app.
3. **Learner's choice of explanation language.** Telugu mode shows buttons as the English word with its Telugu meaning (**Continue** · కొనసాగించు); English mode shows English only.
4. **Hear everything.** Every English sentence and every explanation can be heard; new content plays automatically.
5. **Big and calm.** Large text (A- / A / A+ / A++), large touch targets, generous spacing, high contrast in Day and Night themes.
6. **Never blocked, never punished.** No lives, no hearts, no streak that resets, no red "wrong" screens. Mistakes say "Almost" and show the right answer with a short reason.
7. **Encouraging, not competitive.** "You practised 4 days this week", never leaderboards.
8. **Works on a basic phone, on patchy data.** Installable, fast, works offline for the lessons in use.
9. **Free to run.** No AI or paid service is called while the app is used.

---

# 3. Learning Journey

```text
Course (≈150 weeks)
  └── Stage (5: Foundations … Natural English)
       └── Week (one life theme + one grammar focus)
            └── Day: Lesson, Conversation Day or Review
                 └── Section (Warm-up, Learn, Practice, Listen & Speak, Role Play, Wrap-up)
                      └── Activity (one card, question or conversation)

Optional Tracks (short courses the learner turns on)
  └── Week → Day → Section → Activity (same structure)
```

> **Weeks provide structure; lessons provide focused learning; scenarios provide real-world context.**

### Flexible pacing

The app recommends **one day per day** and enforces nothing:

- Finished Day 3 and want Day 4 now? Allowed.
- Want to redo Day 3? Allowed.
- Want only speaking or role play practice? Allowed, from the Practice tab.
- Any released lesson can be opened at any time; nothing is locked.

```text
Today's lesson
Day 3 — Every Day

You can continue to Day 4 whenever you're ready.
```

---

# 4. Lesson Design

Every lesson teaches **one sentence pattern** through **6–8 core sentences**, and every activity in the lesson reuses those sentences in a different format. Seeing the same sentences in many formats is what makes the pattern stick.

## 4.1 The six sections

| # | Section | Time | What happens |
|---|---------|------|--------------|
| 1 | **Warm-up** · గుర్తుచేసుకుందాం | 1 min | 2 quick questions built from earlier lessons' sentences (from Day 2 on). Recall makes memory stronger. |
| 2 | **Learn** · నేర్చుకుందాం | 3 min | The pattern, the Telugu bridge, examples, "When do I use this?", "Don't say / Say" — all read aloud. |
| 3 | **Practice** · సాధన | 4 min | 7–8 questions, easy to hard: recognise → build → produce → find the mistake. |
| 4 | **Listen & Speak** · విని మాట్లాడండి | 3 min | Hear and choose, listen and repeat, answer a real-life situation by voice. |
| 5 | **Role Play** · సంభాషణ | 2 min | A short conversation in a real scene (3–5 turns). |
| 6 | **Wrap-up** · ముగింపు | 1 min | "Today you learned", key sentences saved to My Sentences, "Try it today" mission. |

Total: about **15–17 activities, 10–15 minutes**. A learner can stop after any section and continue exactly where they left off.

## 4.2 Teaching tools used in every lesson

**Colour-coded sentence pattern.** Every pattern is shown as coloured blocks with labels. The same colours mean the same thing in every lesson, so the learner builds a visual grammar without grammar terms:

```text
[ I ]        [ went ]         [ to the market ]   [ yesterday ]
 ఎవరు          ఏం చేశారు          ఎక్కడికి / ఏమిటి        ఎప్పుడు
 Who          Action            What / Where          When
```

Colour is never the only signal: each block also carries its label.

**Telugu → English bridge.** Telugu puts the action at the end; English puts it second. Shown with the same coloured blocks moving into place:

```text
నేను    నిన్న     మార్కెట్‌కి     వెళ్లాను
 I    yesterday   to the market    went
           ↓
I  went  to the market  yesterday.
```

**"When do I use this?"** For every form: what it means, when to use it, how to say it, and what not to say (e.g. can / could / would; every day vs right now).

**"Don't say / Say."** One or two common mistakes Telugu speakers make with the lesson's pattern, with a one-line reason:

```text
✗ Yesterday I go to the market.
✓ Yesterday I went to the market.
"నిన్న" అంటే జరిగిపోయింది — went వాడాలి.
```

**Audio everywhere.** Every English sentence and every explanation has 🔊 (normal) and 🐢 (slow); new content plays automatically (Section 6).

**Hints.** Build and produce questions have a **Hint** · సహాయం button (shows the first word or the pattern).

## 4.3 Learn in Telugu or English

A **Learn in** toggle (first screen and Settings) decides the language of explanations:

| | **Telugu mode** (default) | **English mode** |
|---|---|---|
| Explanations, hints, reasons, instructions | Spoken-style Telugu, keeping English words where natural: "Yesterday, last week లాంటి పదాలు వస్తే verb ని past form లో వాడాలి — go కాదు, **went**." | Simple English: "When you say yesterday or last week, use the past form — not go, but **went**." |
| Buttons and menus | English + Telugu | English only |
| Practice sentences, role plays | English | English |
| Telugu meanings, translate and match activities | Telugu (they are about meaning) | Telugu |

From Stage 3, a one-time card suggests trying English mode (more English input helps then); the learner can switch back any time.

## 4.4 Mistake policy

1. Wrong answer → "Almost" · దాదాపు, the right answer (spoken), and a short reason. The learner tries once more.
2. Wrong again → show the answer, add the question to **Practice again**, move on.
3. No penalties. The lesson still completes.

## 4.5 Practice order inside a lesson

```text
Recognise       →  Build              →  Produce              →  Check
choose, listen     arrange word tiles     Telugu → English tiles   find the mistake
                   fill the blank         speak the answer
```

## 4.6 Conversation Day and Review Day

- **Conversation Day** (Day 6 of each week from Week 2): a listening dialogue with questions, 2 role plays and 2–3 situations that use the whole week's language. No new grammar.
- **Review Day** (Day 7): built automatically from the week's lessons — mixed questions from every day, then a role play replay. Week 1's Day 7 adds a timeline activity and the longest role play so far.

---

# 5. Activity Types

No activity needs typing.

| Activity | The learner… | Used in |
|----------|--------------|---------|
| **Explain card** | reads and hears the pattern, the Telugu bridge and examples | Learn |
| **When-to-use card** | compares forms (can / could / would) with examples | Learn |
| **Don't say / Say card** | sees a common mistake and its fix | Learn |
| **Choose** | picks the right sentence or meaning (2–4 buttons) | Warm-up, Practice |
| **Choose the response** | someone says something; picks the right reply ("Yes, please." not "Yes, I am.") | Practice |
| **Fill the blank** | taps the word that completes the sentence | Practice |
| **Arrange** | taps word tiles in order to build the sentence | Practice |
| **Translate** | sees Telugu, builds the English with word tiles (a few extra tiles as distractors) | Practice |
| **Match** | pairs Telugu meanings with English sentences | Practice |
| **Find the mistake** | taps the wrong word in a sentence, sees the fix | Practice |
| **Listen and choose** | hears a sentence (no text), picks its meaning | Listen & Speak |
| **Listen and repeat** | hears a sentence, says it aloud | Listen & Speak |
| **Situation** | reads and hears a situation ("You are at a shop. Ask the price."), answers by voice — or taps one of the choices | Listen & Speak |
| **Dialogue** | listens to a short conversation between two people, then answers questions | Conversation Day |
| **Role play** | takes part in a short conversation by voice or by tapping a reply | Role Play |

Later stages add **Listen to a story** and **Read a short passage** (both answered by tapping) when their content is written.

Many activities are **built automatically from a lesson's core sentences** (arrange, translate, match, listen and choose, listen and repeat, warm-ups, review days), so every lesson gets the same variety and lessons are quicker to write.

Every multi-question part shows progress:

```text
Practice
Question 6 of 8
████████████░░░░
```

and ends with a short summary:

```text
Practice complete 🎉
7 / 8 correct
1 sentence added to Practice again.

[Continue]
```

---

# 6. Listening & Speaking

**English voice.** The phone's built-in voice, preferring a clear **female Indian-English voice** (en-IN); if none, the best available female English voice. Learners can pick another in Settings and hear a sample. Normal speed is slightly slower than conversation; 🐢 is slower still.

**Telugu voice for explanations.** In Telugu mode, explanations are read aloud with the phone's Telugu voice. Mixed sentences are split by script: Telugu parts go to the Telugu voice, English words to the English voice, played one after another, so "verb ని past form లో వాడాలి" sounds natural.

| Phone | Telugu voice |
|-------|--------------|
| Android (most learners) | usually available (Google's Telugu voice; sometimes a one-time download) |
| iPhone, most computers | not available |

Without a Telugu voice, English parts are still spoken and Telugu text is shown without audio; on Android, 🔊 shows a short help card on installing the Telugu voice. (Pre-recorded Telugu audio files are a possible later improvement — Section 16.)

**Auto-play.** When a new card, question, situation or conversation line appears, its audio plays automatically; after the learner answers in a role play, the partner's next line plays straight away; after **Check**, the correct English sentence is spoken. 🔊 and 🐢 replay at any time. An **Auto-play audio** switch in Settings (on by default) turns this off. Phones allow sound only after a tap; every step in a lesson starts with a tap (Continue or Check), so auto-play works throughout.

**Speech recognition (speaking).** The phone's built-in recognition (Indian English). Judging is forgiving:

- Matches the expected words, ignoring punctuation, filler words and contractions ("I am" = "I'm").
- **Great** · చాలా బాగుంది / **Good** · బాగుంది / **Try again** · మళ్ళీ ప్రయత్నించండి — no numeric scores on single attempts.
- After two tries, **Choose instead** · ఎంచుకోండి appears, and the learner continues.

**When speaking is not possible** (no microphone permission, unsupported phone, noisy room): every speaking activity offers **Choose instead**, and a Settings switch "I can't speak now" turns speaking activities into choosing activities. Speaking never blocks lesson completion.

---

# 7. Role Play

Role play makes the learner feel they are really in a scene.

```text
Restaurant — You are the customer.

🧑‍🍳 Waiter: Good evening. What would you like?   🔊 🐢   (plays automatically)
                 (శుభ సాయంత్రం. మీకు ఏమి కావాలి?)

🎤 Speak your reply      or tap:
  [ I would like a dosa and coffee. ]
  [ I am a dosa. ]
  [ Yes, please. ]
```

- Conversations are **predefined turns with acceptable replies** — no AI.
- The partner's line plays automatically; its Telugu meaning is one tap away.
- A Hint shows the start of a good reply.
- Conversations are linear (3–6 turns); a not-good reply gets a gentle correction and the conversation continues.
- **Main-path scenes use people everyone meets**: a friend, a neighbour, a relative, a shopkeeper, a doctor, a bank clerk, an auto driver, a customer-care agent. Scenes with children or grandchildren live only in tracks (Section 11.4).

**Role-play summary:**

```text
Role play complete 🎉

Good:
✓ Greeting
✓ Ordering food

Practice more:
• "Would you like…?"

Speaking: 8 / 10      Conversation: 7 / 10
```

Speaking = how well spoken replies matched; conversation = right replies chosen or spoken.

---

# 8. Review & Repetition

| Tool | How it works |
|------|--------------|
| **Warm-up** | Each lesson (from Day 2) starts with 2 questions built from earlier lessons' sentences. |
| **Practice again** | Questions answered wrong twice are kept here; one correct answer removes them. |
| **Review Day** | Day 7 of each week mixes the week's lessons in new combinations. |
| **Grammar spiral** | Each grammar point returns 3–4 times across the course, deeper each time (CURRICULUM.md). |
| **My Sentences** | A phrasebook of each finished lesson's key sentences, with 🔊 and 🎤 — quick speaking practice and a handy reference. |
| **Try it today** | Each lesson ends with one real-life mission: "Today, tell someone what you did yesterday — in English." |

---

# 9. Progress & Completion

## 9.1 What the learner always sees

- **Where am I?** — Stage 1 · Week 1 · Day 4
- **How much is done?** — 70%
- **What remains?** — 5 activities remaining

```text
Day 4 — Right Now                75%
████████████░░░░
12 of 16 done · 4 left

✓ Warm-up
✓ Learn
✓ Practice
● Listen & Speak
○ Role Play
○ Wrap-up
```

## 9.2 Completion rule

- An activity is **done** when it was answered (right or wrong), a card was viewed to the end, a speaking activity was attempted (spoken or "Choose instead"), or a role play or dialogue was finished.
- **Lesson %** = done activities ÷ all activities in the lesson.
- A **lesson is complete** when every activity in its required sections is done. Each lesson's content may mark a section optional; the rule lives in content, not code.
- Opening a lesson never completes it.

## 9.3 What is tracked (hidden from the learner)

Per activity in lessons being worked on: done, correct, attempts, last time. Finished lessons are kept as a compact summary (completed date, score), so progress stays small over 1,000+ lessons. Plus the Practice-again queue, practice days, the exact resume position and the chosen tracks. Week, stage and course progress are calculated from this; states shown are **Not started ○ / In progress ● / Complete ✓**.

## 9.4 Continue experience

```text
Welcome back 👋
You were learning Past Tense — Yesterday.
6 of 15 done · 9 left

[Continue]
```

Continue returns to the exact activity the learner left.

---

# 10. Screens

Bottom tab bar on every learning screen: **Home** · హోమ్ | **Journey** · ప్రయాణం | **Practice** · సాధన | **Settings** · సెట్టింగ్స్.

## 10.1 First visit

One screen, two big buttons: **How would you like to learn?** · ఎలా నేర్చుకోవాలనుకుంటున్నారు? → [ తెలుగులో వివరణలు · Explanations in Telugu ] [ Explanations in English ]. Then Home with "Start Day 1".

## 10.2 Home

```text
Good morning, Lakshmi 👋          (name only when signed in)

┌─────────────────────────────┐
│ Week 1 • Day 3              │
│ Every Day                   │
│ రోజూ చేసే పనులు             │
│ ██████████░░░░ 60%          │
│ 9 of 15 done · 6 left       │
│ [Continue Lesson]           │
└─────────────────────────────┘

This week
✓ Day 1  ✓ Day 2  ● Day 3  ○ Day 4  ○ Day 5  ○ Day 6  ○ Day 7

You practised 3 days this week 🌱

Practice something else
[Practice again (4)]  [Role plays]  [My Sentences]
```

Also on Home, when relevant (one at a time): the one-time **tracks** card (Section 11.4), the one-time **Install the app** card, the one-time **daily reminder** card (after the first finished lesson), and for guests with progress, **Save your progress with Google**. The learner should immediately know: **What should I do now?**

## 10.3 Journey

Grouped by stage:

```text
✓ Stage 1 · Foundations                    12 weeks   (folded)
● Stage 2 · Everyday Life                  28 weeks
    ✓ Week 13  Shopping at the Market
    ● Week 14  Shops & Supermarket          60%
    ○ Week 15  Clothes & Describing Things
    ○ Week 16  Restaurant & Eating Out      coming soon
    …
○ Stage 3 · Confident Conversations        40 weeks   coming later
○ Stage 4 · Fluent Everyday English        40 weeks   coming later
○ Stage 5 · Natural English                30 weeks   coming later

My tracks
● Visiting Family Abroad                   2 of 12 weeks
```

The current stage is open; finished stages are folded; future stages are one card each (name, "the learner can…" line, week count). Unreleased weeks show "coming soon". Tapping a week shows its days with % each.

## 10.4 Lesson overview

Title (English + Telugu), the pattern, % and section checklist, **Start / Continue / Review**, and **Share this lesson** (WhatsApp). The Learn content is shown on this page too, so search engines can find "past tense explained in Telugu".

## 10.5 Lesson player

```text
[✕]  ██████████░░░░░░  9 / 15       [⚑]
     Practice · సాధన

  (activity)

[        Check · సరిచూడు        ]   ← fixed at the bottom
```

After **Check**, a feedback panel slides up: ✓ **Correct!** · సరైనది (green) or ↻ **Almost** · దాదాపు (amber) with the right answer spoken, 🔊 🐢 and the reason; then **Continue**. ⚑ **Report a problem** opens tap-only reasons: Telugu wrong · English wrong · Audio problem · Something else.

## 10.6 Lesson complete

```text
🎉 Day 5 Complete!
Yesterday — Past Tense

✓ Learn  ✓ 8 practice questions  ✓ Listening  ✓ Speaking  ✓ Role play
████████████████ 100%

Your sentences today (saved to My Sentences)
🔊 I went to the market yesterday.
🔊 Did you eat?

Try it today 💬
Tell someone what you did yesterday — in English.

Next: Day 6 — Tomorrow
[Continue to Day 6]        [Review today's lesson]
```

The complete screen also lists today's new words and offers **Share this lesson**. A gentle confetti burst plays (not with reduced motion). After the first lesson, cards offer **Save your progress with Google** and a **daily reminder** (both dismissible).

## 10.7 Week and stage complete

```text
Week 1 Complete 🎉
7 / 7 days
████████████████ 100%

You practised:
✓ Sentence basics  ✓ am / is / are  ✓ Every day
✓ Right now  ✓ Yesterday  ✓ Tomorrow  ✓ Role play

[Share with family]   [Start Week 2]
```

Share uses the phone's share sheet (WhatsApp) with a short message and the app's link. Finishing a stage shows a bigger celebration with the stage's "can do" list.

## 10.8 Practice

Practice again (count), Role plays (from any finished lesson), My Sentences, and Speaking only (listen-and-repeat drills from finished lessons).

## 10.9 Settings

All choices are buttons or switches:

- **Learn in:** Telugu / English
- **Theme:** Day / Night / Follow phone
- **Text size:** A- / A / A+ / A++
- **Voice:** English voice (pick + sample); Telugu voice (status, help if missing)
- **Auto-play audio:** on / off; **I can't speak now:** on / off
- **Daily reminder:** Off / Morning 8:00 / Afternoon 1:00 / Evening 6:00 / Night 8:00 (iPhones: only in the installed app)
- **My tracks:** which optional courses are on
- **Account:** Save progress with Google / signed in as … / Sign out
- Privacy, Buy me a coffee

---

# 11. Curriculum

The full map — every week of every stage, Stage 1 lesson by lesson, the tracks, the grammar spiral and the content style guide — is in **[CURRICULUM.md](CURRICULUM.md)**. This section describes its structure.

## 11.1 Two threads in every week

- **Grammar thread** — in a fixed order; each point returns 3–4 times, deeper each time (past tense: Week 1 "I went" → Week 20 "I was going when…" → Week 43 "I have been to…" → Week 83 storytelling).
- **Life thread** — real situations everyone meets: home, food, health, market, bank, transport, phone calls, offices, neighbours, festivals, technology.

**Each week = one life theme + one grammar focus + about 25 new words** (about 3,000 useful words by Week 150).

## 11.2 Five stages

No level labels are shown to learners; each stage promises what the learner **can do**.

| Stage | Weeks | The learner can… |
|---|---|---|
| 1. **Foundations** · పునాది | 1–12 | make simple sentences in the main tenses, ask questions, handle numbers, time, money, people and home |
| 2. **Everyday Life** · రోజువారీ జీవితం | 13–40 | shop, see a doctor, use transport, make phone calls, bank, talk to neighbours, describe people and places |
| 3. **Confident Conversations** · ధైర్యంగా మాట్లాడటం | 41–80 | tell what happened, explain a problem, give an opinion, handle officials and travel |
| 4. **Fluent Everyday English** · సులభంగా ఇంగ్లీష్ | 81–120 | hold longer conversations, follow news and stories, use common phrasal verbs and idioms |
| 5. **Natural English** · సహజమైన ఇంగ్లీష్ | 121–150 | speak politely or casually as needed, persuade, tell stories, understand fast natural speech |

Target: confident everyday English by about Week 120 and natural, polished English by Week 150 (roughly CEFR B1 → B1+/B2; listening may reach B2 before speaking does).

## 11.3 Weekly rhythm

| Days | Week 1 | Week 2 onwards |
|------|--------|----------------|
| 1–5 | Lessons | Lessons |
| 6 | Lesson | **Conversation Day** |
| 7 | Review + timeline + long role play | **Review Day** (automatic) |

## 11.4 Optional tracks

Short courses for learners whose life they fit; the main path never depends on them.

| Track | For learners who… | Length |
|---|---|---|
| **Talking with Grandchildren** · మనవళ్లతో మాట్లాడటం | have grandchildren (in India or abroad) who mostly speak English | ~8 weeks |
| **Visiting Family Abroad** · విదేశాల్లో కుటుంబాన్ని కలవడం | have children or relatives abroad and plan to visit | ~12 weeks |

**How a learner chooses (taps only):** when they reach Week 13, and any time in Settings → My tracks:

> **Want extra lessons for your life?** (tap all that fit)
> [ I have grandchildren who speak English ]
> [ My family lives abroad ]
> [ None of these ]

Chosen tracks appear in Journey, and Home suggests their lessons after the day's main lesson. Only tracks with released content are offered. More tracks can be added later the same way.

## 11.5 Grammar meets real life

Every concept travels the same path, and reappears in later weeks in new scenes:

**Pattern → Sentence → Situation → Conversation**

```text
Past tense → "I went to the market yesterday." → "What did you buy?" → Role play: tell a friend about yesterday
```

## 11.6 Releasing content

The app launches with **Week 1**. After launch, weeks are added on request, one week per content session (BUILD_PLAN Part E). Before a stage's content is written, its weeks are detailed lesson by lesson in CURRICULUM.md. The week map is a plan, not a contract: weeks can be refined, merged or added, and saved progress is never lost because lessons are identified by stable ids, not by their position.

---

# 12. Difficulty Progression

| Stage | Sentences look like | Example |
|-------|---------------------|---------|
| 1 | very simple, one idea | I am hungry. I need water. |
| 2 | two short sentences | I am hungry. Can we have lunch now? |
| 3 | connected ideas | I am hungry because I haven't eaten since morning. |
| 4–5 | natural conversation | I haven't eaten since morning. Shall we have lunch somewhere nearby? |

---

# 13. Accounts & Data

- **Guest first.** Anyone can start Day 1 immediately. Progress is saved on the phone.
- **Optional Google sign-in** ("Save your progress with Google"), offered after the first lesson and in Settings. On sign-in, the phone's progress is merged into the account (nothing is lost on either side); from then on it stays in sync across devices.
- Stored per account: learning progress (including chosen tracks) plus the Google name, email and photo for the greeting and Settings. Learn-in language, theme, text size, voices and audio switches stay on the device.
- **Problem reports** store the activity, the reason tapped and the time — nothing personal. **Error logs** store the error message, the page and the phone/browser type, to fix crashes.
- **Daily reminders** store the phone's notification address, the chosen time, the time zone and the last day practised — nothing personal; turning reminders off deletes it.
- A plain-language privacy page explains this, including that the phone's speech recognition may send audio to the phone maker's service (Google on Android) to turn speech into text.

---

# 14. Look & Feel

- **Production quality:** consistent spacing, one set of reusable components, smooth short animations, skeletons while loading, no layout jumps.
- **Themes:** Day, Night, Follow phone — no flash of the wrong theme on load.
- **Text:** large base size; A- / A / A+ / A++; Telugu set in Noto Sans Telugu with comfortable line spacing.
- **Colours:** calm and warm. Correct = green with ✓; try again = amber with ↻ (never red for a learner's answer); pattern colours are the same in every lesson; colour is never the only signal.
- **Delight, lightly:** confetti on lesson, week and stage completion; friendly messages; no noise.
- **Accessible:** large touch targets, visible focus, screen-reader names, respects reduced motion.
- **Calm when things break:** a friendly "Something went wrong — Continue" screen; progress is never lost.

---

# 15. Reach

- **Search engines:** a static landing page (what it is, how it works, a lesson preview, FAQ) and indexable lesson overview pages with readable addresses (`/lessons/past-simple-yesterday`), structured data, sitemap and robots for production only, and Google Search Console verification. Every released week adds more pages.
- **WhatsApp sharing:** a good link preview image, **Share this lesson** on every lesson page and complete screen, and the Week-complete "Share with family" button.
- **Daily reminders:** "Today's English is ready 🌱" at the learner's chosen time, only on days they haven't practised yet.
- **Installable app:** "Add to Home screen" gives an app icon, full-screen app and offline lessons. Home shows a one-time "Install EnglishEasy" card with the right instructions for Android or iPhone.
- **Analytics:** Google Tag Manager on the landing page only, never inside lessons.
- **Support:** a "Buy me a coffee" link in the landing footer and Settings.

---

# 16. Not in V1

Everything in FUTURE_FEATURES.md, runtime AI of any kind, paid voices, pre-recorded Telugu audio (possible later via a free text-to-speech tier, generated once at build time), sound effects, leaderboards and streak penalties, typing answers, branching role plays, placement tests, a native Play Store app, story and reading activities (added with Stage 3 content), content beyond Week 1 at launch.

---

# 17. Product North Star

The measure of EnglishEasy is not how many grammar topics the learner completed. It is:

> **Can the learner understand and confidently use English in more everyday situations than before?**

The first 7-day journey succeeds when a Telugu-speaking learner thinks:

> **"I understand this. I can say this. I want to practise again tomorrow."**

Every feature should support that goal.

---

# 18. Decision Log

| Date | Decision |
|------|----------|
| 2026-11-07 | Progress: guest first on the device; optional Google sign-in syncs it to the account (merge on sign-in). |
| 2026-11-07 | Audio: the phone's built-in voices only — a female Indian-English voice preferred, selectable in Settings. |
| 2026-11-07 | App type: installable web app (PWA), one codebase, search-engine friendly. |
| 2026-11-07 | Telugu text: drafted by Claude, not reviewed before release; learners can report problems from any activity. |
| 2026-11-07 | No typing anywhere: buttons, word tiles or voice only. |
| 2026-11-07 | Extras taken from the owner's other projects: Day/Night theme, production UI kit, landing page + SEO, WhatsApp link preview, Google Tag Manager (landing only), Buy me a coffee link. Not taken: security-header/CSP work, CI workflow (can be added later). |
| 2026-11-07 | Lesson arc of six sections; Week 1 revised (CURRICULUM.md). |
| 2026-11-07 | Build: Sonnet 5.5 at medium effort, one BUILD_PLAN step per session, to fit the daily Claude budget. Commits go straight to `master` during initial development. |
| 2026-11-07 | No AI while the app runs, ever (cost). Claude is used only to build the app and write lesson content ahead of time. Voices and speech recognition are the phone's free built-in features; role plays use predefined turns. |
| 2026-11-07 | Course of about 150 weeks in five stages, each week = life theme + grammar focus; launch with Week 1, add weeks on request; full map in CURRICULUM.md. |
| 2026-11-07 | Weekly rhythm from Week 2: five lessons + Conversation Day + automatic Review Day. |
| 2026-11-07 | Main path never assumes children or grandchildren; family-specific content lives in optional tracks (Talking with Grandchildren, Visiting Family Abroad), chosen by tapping at Week 13 or in Settings. |
| 2026-11-07 | Journey grouped by stage; future stages shown as one card each. |
| 2026-11-07 | Learn-in toggle: Telugu (with English words where natural) or English explanations; English mode shows English-only buttons. |
| 2026-11-07 | Explanations read aloud: Telugu parts with the phone's Telugu voice, English parts with the English voice; where no Telugu voice exists, Telugu is text only (with Android install help). Auto-play on by default. |
| 2026-11-07 | Lessons have stable ids used in addresses and saved progress; many activities and review days are generated from core sentences by code. |
| 2026-11-07 | Added before launch because they are cheap now and costly later: lesson tags (new words, grammar, topics), automatic content quality checks, a content preview page, all UI text in one file, an audio hook for future recorded audio, friendly error screen + error log, Share this lesson, and content updates that reach phones with cached lessons. |
| 2026-11-07 | Daily reminders (web push) at the learner's chosen time in their own time zone, skipped on days already practised; triggered hourly by a free GitHub Actions job. |
| 2026-11-07 | Features for after launch are kept in FUTURE_FEATURES.md and built one at a time, each getting a BUILD_PLAN section first. |
| 2026-11-08 | A production look across the app and a full landing page, to the standard of the owner's Family Tree app (BUILD_PLAN "a production look"): teal + marigold design tokens, a calm Night theme, spot illustrations, a real layout from tablets up, the whole flow reworked; features unchanged. |
| 2026-11-08 | Language: simple words (buttons, labels, titles, counts) English only; sentences that explain something in Telugu when Learn in is Telugu; Telugu meanings only in Telugu mode. Replaces "English + Telugu labels" (§2 point 3, §4.3). |
| 2026-11-08 | Audio: Listen / Slow are icon buttons. Listen only where it helps (sentences to learn, the question, the answer, role-play and dialogue lines); explanations are no longer read aloud (replaces §6 "Telugu voice for explanations" and explanation narration); Slow only for medium- and high-complexity sentences (6+ words), on questions too. |
| 2026-11-08 | Role play: a good reply moves straight to the partner's next line (and the last one to the summary) after a short pause; no "Good" panel or Continue. A not-good reply still shows the better reply and waits for Continue (§7). |
| 2026-11-08 | Phone-first space: compact suggestion cards (× for Not now), feedback with Listen on the "Correct!" row, Don't say / Say shown by ✗ / ✓ alone, one-line days on Journey, "This week" as a connected row of days. American spelling "practice" everywhere; the theme choice is Day / Night / Device; Learn in offers "తెలుగు" by its own name. |
| 2026-11-08 | Voice (owner): one consistent voice on every device instead of the phone's own voices. Audio is made ahead of time as files (like lesson text, so still no AI or paid service at runtime): an Indian female voice reads each question in full, English and Telugu together ("I walk every morning." అంటే ఏమిటి?), without quote marks. The Telugu part of questions is read aloud from now on (changes the 2026-11-08 audio row for questions). The device voice stays as the fallback for any sentence without a file. Chosen route: Microsoft Edge's free voices via `msedge-tts` at build time (te-IN Shruti, en-IN Neerja), samples first. |
| 2026-11-08 | Recorded clips in every case (owner): Settings no longer offers a voice choice or sample (replaces §10.9's Voice line). The phone's voice is only an automatic, silent backup (an Indian English voice picked by itself) for a clip that can't load or play; a unit test fails if any sentence a released day reads aloud has no clip, so `npm run audio` is part of every content change. |
