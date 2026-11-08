# Writing a week: the content playbook

The fixed recipe for adding a week of lessons (BUILD_PLAN Part E2). Follow it top to bottom; the tests catch almost every slip. Models: `src/content/main/w02/` (five lessons, a Conversation Day and a review, written with this playbook).

Read only: CURRICULUM §1 (style guide), the §2 rows for the week's grammar, and the week's own table. Nothing else.

---

## 1. Files to create

One folder per week: `src/content/main/wNN/` (two digits: `w03`).

| Day | File | Type | Copy from |
|---|---|---|---|
| 1–5 | `<lesson-id>.ts` | `Lesson` | `w02/what-and-where.ts` |
| 6 | `wN-conversation.ts` | `ConversationDay` | `w02/w2-conversation.ts` |
| 7 | `wN-review.ts` | `ReviewDay` | `w02/w2-review.ts` |

Ids come from the CURRICULUM table and are **permanent** once released: never rename, reuse or renumber them.

## 2. A lesson, slot by slot

Fill every slot. These counts make exactly **19 activities**, the maximum the test allows (14–19). Keep them, and nothing needs counting.

| Slot | What to write | Rule the test checks |
|---|---|---|
| `title`, `subtitle`, `summary` | From the CURRICULUM row; summary is one sentence in each language | — |
| `seo` | Title: "<Topic> in English for Telugu Speakers". Description: one or two plain sentences | description ≤ 160 characters |
| `pattern` | 3–4 colour chips of the main sentence | roles: `who` · `action` · `what` (labelled "What / Where") · `when` |
| `core` | **7 sentences, ordered for the generator** (below) | 6–8; no repeat within the week; ≤ 7 words in Stage 1 |
| `key` | 4 indexes into `core` (the sentences for My Sentences) | 3–4 |
| `tryToday` | One real-life task for today | — |
| `words` | 5 new words | 4–6; **never a word an earlier lesson introduced** (see §6) |
| `grammar`, `topics` | Keys from `grammar.ts` / `topics.ts` | must exist |
| `learn` (4) | `explain` (with `bridge`: Telugu order → English chips, and 3 examples) · `whenToUse` (3–4 forms) · `dontSay` · `dontSay` | — |
| `practice` (4) | 3 recognise (`choose`, `fillBlank`, `choose`) + **exactly 1** `findMistake` (last) | answer index in range; options all different; one `___` |
| `speak` (2) | 2 `situation`s | the right option is also in `expected` |
| `roleplay` (1) | 3–4 turns, 2–3 replies each, one good | every turn has a good reply; every line ≤ 7 words in Stage 1 |

**Core order matters.** The generator turns fixed positions into activities:

| Core index | Becomes |
|---|---|
| 0 | arrange the tiles (and match) |
| 1 | translate (and match, and repeat aloud) |
| 2 | translate (and match) |
| 3 | listen and choose the meaning (and match) |
| 4–6 | used in Learn examples, role play and review only |

Put the simplest, most useful sentences at 0–3. Each core sentence's `extra` is one **distractor tile**: a real mistake (wrong question word, `do` vs `are`, `in` vs `at`), never a word already in the sentence (punctuation counts: `"this?"` ≠ `"this"`).

**Warm-up** is automatic: the key sentences of the two lessons before. Nothing to write.

## 3. Conversation Day (Day 6)

No new grammar; it reuses the week. Write:

- `dialogue`: 8–10 short lines between two speakers (`voice: "a"` female, `voice: "b"` male; names from CURRICULUM §1), each with its Telugu, and **3 questions** about it.
- `situations`: 3, by voice.
- `roleplays`: 2, of 4–6 turns.
- `summary`, `topics`. No `seo`: the lesson page uses the summary.

## 4. Review (Day 7)

The review builds itself: two items from each lesson, plus the Conversation Day's first role play. Add `extras` only for something the week needs drilled. Week 2 adds a quick question-word round: 6 `fillBlank`s with 3 options each.

Give it a real title (Week 1 "My Day", Week 2 "Question Time"), the same in `course.ts`.

## 5. Register the week

1. `src/content/load.ts`: one line per day file, in course order.
2. `src/content/course.ts`: a `weekNDays: DayRef[]` list (ids, kinds and titles exactly as in the files), then that week's entry becomes `{ ...week(N, [...]), released: true, days: weekNDays }`; the `weeks(…)` list after it starts at N + 1.
3. `src/content/course.test.ts`: the released weeks list, the day count (7 per week), and `dayAfter` of the new last day is `null`.
4. `e2e/days.spec.ts`: add the five lessons to `DAYS`; copy the Conversation-and-review test for the new week.

## 6. Check, in this order

```bash
# Words already introduced (a new lesson's words must not be in this list):
grep -h -A8 "words: \[" src/content/main/w*/*.ts | grep -o 'en: "[^"]*"'

# Check a week before registering it (every content rule, plus new words against the written course):
node --import tsx scripts/check-week.mts <week> <the seven day ids in order>

npx vitest run src/content/content.test.ts src/content/course.test.ts   # content rules, after registering
npm run audio      # record the new sentences (owner's terminal if the sandbox blocks the voice host)
npm test           # all unit tests, including the voice coverage test
npm run lint
npm run typecheck
npm run test:e2e   # run exactly like this, alone
```

The messages say what to fix:

| Message starts with | Usual fix |
|---|---|
| `sentence-length` | Shorten the line (role-play lines and replies count too) |
| `bi-identical` / `telugu-script` | Every `te` needs Telugu letters: a heading, skill label or "why" like "on / at" or "buy → bought" gets a Telugu word ("on / at వాడకం", "buy గతం bought") |
| `word-once` | Pick another new word; the old one can still be used, just not listed |
| `tiles` | The distractor is also a word of the answer; pick another |
| `sentence-length` on an expected answer | Long "expected" alternatives count too; keep each ≤ 7 words |
| `activity-count` | A slot count changed; go back to the table in §2 |
| audio coverage | Run `npm run audio` and commit `public/audio/` |

## 7. Finish

1. Look at each day on `/dev/lesson/<id>` (`npm run dev`), or ask the owner to.
2. Add a row to BUILD_PLAN Part D's "Content released" table.
3. Stop, show the results, wait for the owner's OK, then commit the day files, `public/audio/` and the test updates together.

## Writing reminders (CURRICULUM §1, short)

- Stage 1 sentences: ≤ 7 words. Natural, polite Indian English; no slang.
- Telugu: spoken, everyday (వ్యావహారిక); keep English words people already use (bus, phone, function, shop).
- English-mode explanations: short sentences, common words, saying the same as the Telugu.
- Distractors are real Telugu-speaker mistakes: missing `am/is/are/do`, Telugu word order, `in/on` for `at`, `is` for plurals.
- Main path: never assume a spouse, children or grandchildren (the test lists the banned phrases).
- Spelling: "practice" (owner's choice); otherwise the curriculum's own spelling (neighbour, colour).
