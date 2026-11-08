# EnglishEasy — Build Plan

The product is described in [VISION.md](VISION.md) and the course in [CURRICULUM.md](CURRICULUM.md) (§ numbers below refer to them). This file says **how** it is built: architecture (Part A), rules every step follows (Part B), the build steps up to launch (Part C), the Progress table (Part D), and how content is added after launch (Part E). Status lives only in the Progress table.

The build runs on **Sonnet 5.5 at medium effort**, one step per session, to fit a daily Claude budget. Steps are small, list exactly what to read, and end with checks.

**Order:** app features (Steps 1–12) → Week 1 content (Steps 13–15) → landing and search engines, installable app, sign-in, sync, problem reports and error log, daily reminders, polish and launch (Steps 16–22). Features for after launch are listed in [FUTURE_FEATURES.md](FUTURE_FEATURES.md). After launch, content is added week by week with the Part E prompts.

---

# Part A — Architecture

## A1. Stack

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**, **Tailwind CSS v4** (wired like Family Tree: `@tailwindcss/turbopack` in `next.config.ts`, no PostCSS config). Don't enable `cacheComponents`.
- **Vercel** free tier (Hobby). The landing page and lesson overview pages are static; the player is one client page that loads lesson data files.
- **zod** for content and API validation.
- **Better Auth** + Google + **MongoDB Atlas** free cluster (M0) — only for optional sign-in, progress sync and problem reports (Steps 18–20). Everything before that works without a server.
- Browser APIs: `speechSynthesis` (English and Telugu voices), `SpeechRecognition` / `webkitSpeechRecognition` (speaking), `localStorage` (progress, settings), service worker (offline), `navigator.share` (sharing).
- Fonts: system stack for Latin text, **Noto Sans Telugu** self-hosted from npm (`@fontsource-variable/noto-sans-telugu` or `@fontsource/noto-sans-telugu`, whichever the mirror has). No Google Fonts CDN (blocked on the owner's machine).
- Tests: **Vitest** (+ Testing Library, jsdom) and **Playwright** (installed Chrome locally).
- No UI library, no icon package, no state library, no PWA library. One exception: `web-push` on the server for daily reminders (Step 21).
- **GitHub Actions** runs an hourly job that triggers reminder sending (Step 21); no other scheduled work.
- **No AI at runtime** (VISION §18): no AI SDK, no paid speech service. Claude writes code and content at build time only. The running cost is zero apart from free tiers.

## A2. Folder layout

```text
src/app/
  layout.tsx                      root: <html lang="en">, fonts, settings script (theme, text size), metadataBase
  page.tsx                        landing page (static, SEO)                              Step 16
  privacy/page.tsx                privacy page                                            Step 16
  lessons/[id]/page.tsx           lesson overview (static params, metadata, SEO)          Step 10
  learn/layout.tsx                app shell: bottom tab bar                               Step 2
  learn/page.tsx                  Home (+ first-visit language choice)                    Step 11
  learn/journey/page.tsx          Journey (stages → weeks → days)                         Step 11
  learn/play/page.tsx             the player: ?l=<lessonId> (one page for every lesson)   Step 5
  learn/practice/…                Practice hub, mistakes, role plays, sentences, speaking Step 12
  learn/settings/page.tsx         Settings                                                Step 2
  dev/ui/page.tsx                 component gallery, 404 outside dev/e2e                  Step 2
  dev/lesson/[id]/page.tsx        whole day on one page, both languages (content review)  Step 5
  error.tsx, learn/error.tsx      friendly error screens (progress kept)                  Step 2
  api/auth/[...all]/route.ts      Better Auth                                             Step 18
  api/progress/route.ts           GET/PUT synced progress                                 Step 19
  api/report/route.ts             POST a problem report                                   Step 20
  api/client-error/route.ts       POST a client error                                     Step 20
  api/reminders/route.ts          PUT/DELETE a push subscription                          Step 21
  api/reminders/send/route.ts     hourly sender (secret-protected)                        Step 21
  manifest.ts, robots.ts, sitemap.ts, icon.svg, apple-icon.png, opengraph-image.png
src/content/
  types.ts, schema.ts             content types (A3) and their zod schema
  course.ts                       the course map: stages, weeks, day refs, tracks (A4)
  grammar.ts, topics.ts           fixed tag lists (A3)
  generate.ts                     PURE: expand a lesson (generated activities, warm-up), build a review day
  load.ts                         server/build-side: import a lesson file by id
  main/w01/sentence-basics.ts …   one file per day; tracks in tracks/<track>/<week>/
src/learning/                     PURE logic, no browser APIs, fully unit-tested
  progress.ts, stats.ts, recommend.ts, merge.ts, speech-match.ts, voice-pick.ts,
  split-scripts.ts, roleplay-score.ts, shuffle.ts, reminder-due.ts
src/lib/                          browser services (thin wrappers, mockable)
  strings.ts (every UI label as Bi, one place), settings-store.ts, progress-store.ts,
  lesson-data.ts (fetch + cache lesson JSON), speak.ts, listen.ts, sync.ts, reminders.ts, report-error.ts
src/components/ui/                design kit (Step 2)
src/components/player/            Player + one file per activity type (Steps 5–9)
src/components/learn/             Home, Journey, overview, completion pieces (Steps 10–12)
src/components/landing/           landing page parts + content.ts (Step 16)
src/server/                       server-only: db.ts, auth.ts, auth-options.ts, progress-repo.ts, reports-repo.ts, reminders-repo.ts
scripts/build-content.mts         writes public/content/<id>.json for every released day (A3)
scripts/site-images.mts           icons and link preview from icon.svg (Step 16)
public/sw.js                      service worker (Step 17)
e2e/                              Playwright specs + fixtures (speech stubs)
.github/workflows/reminders.yml   hourly call to /api/reminders/send (Step 21)
```

## A3. Content model (`src/content/types.ts`)

Content is TypeScript data, separate from the engine. **A content file holds only what needs judgment**; `generate.ts` builds the rest from the core sentences.

```ts
export type Bi = { en: string; te: string };   // English + Telugu (Telugu mode text may mix in English words)
export type Chip = { text: string; role: "who" | "action" | "what" | "when" };
export type CoreSentence = { en: string; te: string; extra?: string[] };  // extra = distractor tiles

type Base = { id: string };  // short id unique within the day ("p1", "s1"); full id = `${dayId}.${id}`

export type Activity = Base & (
  | { type: "explain"; heading: Bi; body: Bi; bridge?: { te: string[]; en: Chip[] }; examples: CoreSentence[] }
  | { type: "whenToUse"; heading: Bi; items: { form: string; useFor: Bi; example: CoreSentence }[] }
  | { type: "dontSay"; wrong: string; right: string; why: Bi }
  | { type: "choose"; prompt: Bi; say?: string; options: string[]; answer: number; why?: Bi }
  | { type: "fillBlank"; sentence: string /* one ___ */; te?: string; options: string[]; answer: number; why?: Bi }
  | { type: "arrange"; te?: string; answer: string; extra?: string[] }
  | { type: "translate"; te: string; answer: string; accept?: string[]; extra?: string[] }
  | { type: "match"; pairs: { en: string; te: string }[] }                 // 3–4 pairs
  | { type: "findMistake"; sentence: string; wrongIndex: number; fix: string; why: Bi }
  | { type: "listenChoose"; say: string; prompt: Bi; options: string[]; answer: number }
  | { type: "repeat"; say: string; te: string }
  | { type: "situation"; situation: Bi; expected: string[]; options: string[]; answer: number }
  | { type: "dialogue"; title: Bi; lines: { speaker: Bi; voice: "a" | "b"; en: string; te: string }[];
      questions: { prompt: Bi; options: string[]; answer: number }[] }
  | RolePlay
);

export type RolePlay = { type: "roleplay"; title: Bi; scene: Bi; partner: Bi;
  skills: { id: string; label: Bi }[]; turns: Turn[] };
export type Turn = { partner: string; te: string; hint: Bi;
  replies: { say: string; good: boolean; skill?: string }[] };   // 2–3 tap options; good ones also accepted by voice

export type SectionKind = "warmup" | "learn" | "practice" | "speak" | "roleplay" | "wrapup";

export type Lesson = {
  id: string; kind: "lesson";
  title: Bi; subtitle: string; summary: Bi;
  seo: { title: string; description: string };     // description ≤ 160 chars
  pattern: Chip[];
  core: CoreSentence[];                              // 6–8, simplest first; append-only after release
  key: number[];                                     // 3–4 indexes into core → My Sentences
  tryToday: Bi;
  words: { en: string; te: string }[];               // 4–6 new words, each introduced once in the course
  grammar: string[];                                 // keys from grammar.ts (one per CURRICULUM §2 row)
  topics: string[];                                  // keys from topics.ts (doctor, bank, market, phone, …)
  learn: Activity[];                                 // explain, whenToUse, dontSay
  practice: Activity[];                              // 3–4 authored (choose, fillBlank, findMistake, …)
  speak: Activity[];                                 // 1–2 authored situations
  roleplay: RolePlay & { id: string };
  optional?: SectionKind[];
};
export type ConversationDay = { id: string; kind: "conversation"; title: Bi; summary: Bi; topics: string[];
  dialogue: Activity; roleplays: Activity[]; situations: Activity[] };
export type ReviewDay = { id: string; kind: "review"; title: Bi; extras?: Activity[] };
export type Day = Lesson | ConversationDay | ReviewDay;
```

**Generated by `generate.ts` (pure, deterministic, no randomness without a seed):**
- `expandLesson(lesson, earlier)` → a `PlayableDay` with sections in order: warm-up (2 items from the previous lessons' core sentences; none on the course's first lesson), learn, practice (authored + `arrange` ×1, `translate` ×2, `match` ×1 from core), speak (`listenChoose` ×1 and `repeat` ×1 from core + authored situations), roleplay, wrap-up. Which core sentence feeds which generated activity is a fixed, documented mapping (so authors put the simplest sentences first).
- `buildReview(review, weekDays)` → 10–12 mixed items (two per lesson, mixing authored and generated), one role play from the Conversation Day, then `extras`.
- Generated ids: `${dayId}.g-<kind>-<coreIndex>` (warm-up `${dayId}.g-warm-<n>`, review `${dayId}.g-<n>`).
- **The fixed core-sentence mapping** (indexes into `core`; also in the header of `generate.ts`): `arrange` core[0]; `translate` core[1] and core[2]; `match` core[0..3]; `listenChoose` core[3] (Telugu meanings as options); `repeat` core[1]; warm-up = the key sentences of the two most recent earlier lessons. Practice order: authored (except find-the-mistake), match, arrange, translate ×2, find-the-mistake. Speak order: listenChoose, repeat, authored situations. Shuffles are seeded by the activity id.

**Ids are permanent.** Day ids are kebab-case, unique across the course, ≤ 40 characters, descriptive (they are the address: `/lessons/past-simple-yesterday`); never renamed after release. Authored activity ids are never reused or renumbered (add `p5`, never shift `p2`). Core sentences are append-only after release (fix wording freely; never reorder or delete).

**Lesson data files.** `scripts/build-content.mts` (run by `predev` and `prebuild`) expands every released day and writes `public/content/<dayId>.json` (git-ignored). The player fetches these, so the app's code stays small with 1,000+ lessons and the service worker can cache lessons individually. Overview pages and tests import the TypeScript directly.

**Content rules** (checked by `src/content/content.test.ts` for every released day): ids unique; `answer`/`wrongIndex` in range; one `___` per fillBlank; seo description ≤ 160 chars; arrange/translate tiles = answer words (punctuation stays on its word) + `extra`; each role-play turn has a good reply; `key` indexes valid; 6–8 core sentences; every `Bi` has both languages; Telugu text contains Telugu script; expanded lessons have 14–19 activities; `grammar`/`topics` keys exist; each new word is introduced only once in the course.

**Content quality checks** (same test file, catching typical writing mistakes): main-path days contain none of the words in a family-assumption list (`your son`, `your daughter`, `your grandchild`, `your husband`, `your wife`, `my grandson`, …; tracks are exempt); English sentences stay within the stage's length limit (CURRICULUM §1); wrong options never equal the answer and options are distinct; no duplicate core sentences within a week; every `Bi` pair is non-empty and not identical.

**Tags** (`words`, `grammar`, `topics`) are not shown much at launch (words appear on the lesson complete screen), but they let future features (FUTURE_FEATURES.md) work across all lessons without editing them again.

## A4. Course map (`src/content/course.ts`)

```ts
export type DayRef = { id: string; kind: Day["kind"]; title: Bi };
export type Week = { n: number; title: Bi; released: boolean; days: DayRef[] };   // days empty until released
export type Stage = { n: number; title: Bi; canDo: Bi; firstWeek: number; lastWeek: number; weeks: Week[] };
export type Track = { id: "grandchildren" | "abroad"; title: Bi; forWho: Bi; offerAtWeek: 13; weeks: Week[] };
export const course: { stages: Stage[]; tracks: Track[] };
```

- Stage 1's twelve weeks are listed with titles (CURRICULUM §3); Stages 2–5 list their week titles from CURRICULUM §4–§7 (English + Telugu); tracks list their weeks (CURRICULUM §8). Only released weeks have `days`.
- "Day N" numbers shown to learners are computed from position (week × 7), never stored.
- `src/content/load.ts` maps day id → file (`main/w01/sentence-basics.ts`), used by the build script, overview pages and tests.

## A5. Progress model (`src/learning/progress.ts`)

```ts
export type ActivityRecord = { correct: boolean; attempts: number; at: string; skipped?: true };
export type Progress = {
  version: 1;
  activities: Record<string, ActivityRecord>;   // only for days not yet complete (and replays in progress)
  completed: Record<string, { at: string; correct: number; total: number }>;   // dayId → summary
  mistakes: Record<string, string>;             // activity id → ISO time added (Practice again)
  practiceDays: string[];                       // local "YYYY-MM-DD", newest last, keep 60
  position?: { dayId: string; activityId: string; at: string };
  tracks: string[]; tracksAsked: boolean;
  updatedAt: string;
};
```

- Pure functions: `recordAnswer`, `completeDay` (moves the day's records into `completed`, keeping mistakes), `dayStats(day, progress)` → `{ done, total, percent, complete, sections: [{kind, done, total, state}] }`, `weekStats`, `stageStats`, `courseStats`, `nextActivity`, `recommendedDay(course, progress)` (resume position first, else the first incomplete released main-path day, else the last released day), `trackSuggestion`.
- States: `"not-started" | "in-progress" | "complete"`. Completion rule per VISION §9.2. Mistakes: added after the second wrong attempt; removed on a correct answer in Practice again.
- `localStorage` keys: `englisheasy.progress.v1`, `englisheasy.settings.v1` (`theme`, `textSize`, `learnIn: "te" | "en"`, `autoPlay`, `voiceURI`, `teluguVoiceURI`, `noSpeaking`, `onboarded`, dismissed cards). The inline settings script reads the same key.
- Never read `new Date()`, `localStorage` or speech APIs while rendering: only after hydration (`useSyncExternalStore` with a server snapshot of `null`, skeletons until then), as Family Tree's `src/components/today.ts` does.

## A6. Speech

- **English voice** (`voice-pick.ts`, pure): saved `voiceURI` if present → `en-IN` voices not in a known-male list (`Rishi`, `Ravi`, `Prabhat`, `Hemant`), known female names first (`Veena`, `Isha`, `Neerja`, `Heera`, `Kajal`, Google's English (India)) → known female `en-GB`/`en-US` (`Samantha`, `Karen`, `Moira`, `Tessa`, `Serena`, `Google UK English Female`, `Microsoft Aria`, `Microsoft Zira`) → any `en-*`.
- **Telugu voice:** saved `teluguVoiceURI` → any voice whose `lang` starts with `te` → none (report "missing").
- **Mixed narration** (`split-scripts.ts`, pure): split text into runs by script (Telugu block U+0C00–U+0C7F vs everything else); spaces, digits and punctuation join the run before them. `speak.ts` queues one utterance per run with the matching voice; Telugu runs are skipped when no Telugu voice exists.
- Rates: normal `0.9`, slow `0.65`; dialogue voice "b" uses a different voice if available, else a lower pitch. Cancel current speech before new speech. Voices load asynchronously (`voiceschanged`).
- **Audio hook:** `speak` and `narrate` first look up the text in `/audio/manifest.json` (text hash → recorded file); if found, they play the file instead of the phone voice. Since the "one recorded voice" request (Part C) `npm run audio` fills it for every spoken text.
- **Auto-play** (setting on by default): a new card/question/situation/turn plays when it appears, the correct sentence plays after Check, the partner's next line plays after the learner's reply. Speech only starts after a tap has happened on the page (browsers require it); the first-visit screen and every Continue/Check provide that.
- **Speech match** (`speech-match.ts`, pure): lower-case, strip punctuation, expand contractions (`i'm`, `don't`, `didn't`, `won't`, `can't`, `it's`, `i'll`, …), drop fillers. Score = longest common word subsequence ÷ expected word count, best over accepted answers and recognition alternatives. `≥ 0.85` great, `≥ 0.6` good (accepted), else try again.
- **Recognition** (`listen.ts`): `lang = "en-IN"`, up to 3 alternatives, 8 s timeout; reports `unsupported`, `denied`, `no-speech` or transcripts.

## A7. Sign-in, sync and reports (Steps 18–20)

- Copy Family Tree's approach (files named in those steps): Better Auth with Google, MongoDB adapter, `lazyDatabase()`/`getDatabase()`, `authUrls(env)`, `getUser()`, `oAuthProxy` for previews, indexes created by `npm run db:setup` (Better Auth's Mongo adapter creates none).
- Databases: `englisheasy_dev` (local), `englisheasy_preview` (previews, when used), `englisheasy` (production).
- `progress`: `{ userId, data: Progress, updatedAt }`, unique on `userId`. `GET`/`PUT /api/progress` (`getUser()` → 401; zod; body ≤ 512 KB). The client merges; the server stores.
- `mergeProgress(a, b)`: completed = union (earlier `at`, best score); activities = later `at` per id (attempts = max), dropped if the day is completed; mistakes = union minus ids answered correctly after they were added; practiceDays = sorted union, last 60; position = later `at`; tracks = union; tracksAsked = either.
- Sync: on sign-in and on app open → GET, merge, save locally, PUT if changed; after changes → PUT debounced 3 s; offline → retry on `online`.
- `reports`: `{ activityId, dayId, reason: "telugu" | "english" | "audio" | "other", learnIn, at }`, anonymous; `POST /api/report` (zod, ≤ 1 KB); one report per activity per device (remembered locally). `npm run reports` prints the latest reports grouped by day for the "Fix reported problems" session (Part E).
- `clientErrors`: `{ message, stack (first 2 KB), path, userAgent, appVersion, at }` from the error screens and `window.onerror`; at most 5 per device per day; `npm run reports` shows them too.
- **Daily reminders** (Step 21): `pushSubscriptions` `{ endpoint (unique), keys, hour, timeZone, learnIn, lastPracticeDay, lastSentDay, createdAt }`, anonymous (guests too). The learner picks Morning 8:00 / Afternoon 1:00 / Evening 6:00 / Night 8:00 in their own time zone (`Intl` time zone stored). The client updates `lastPracticeDay` when it records the first answer of a day. `.github/workflows/reminders.yml` calls `POST /api/reminders/send` hourly with `REMINDER_SECRET`; the route sends (with `web-push`, VAPID keys) to subscriptions whose local hour matches, who haven't practised today and weren't sent one today; it deletes subscriptions the push service reports gone (404/410). `src/learning/reminder-due.ts` holds the pure "is it due?" rule. iPhones receive web push only when the app is installed (iOS 16.4+); Settings says so.

## A8. Environment variables

| Name | Where | Step |
|------|-------|------|
| `GTM_ID` | Vercel Production only (read at build) | 16 |
| `MONGODB_URI`, `MONGODB_DB` | `.env.local`, Vercel (Production `englisheasy`) | 18 |
| `BETTER_AUTH_SECRET` (different per environment), `BETTER_AUTH_URL` (Production only) | `.env.local`, Vercel | 18 |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | `.env.local`, Vercel | 18 |
| `OAUTH_PROXY_SECRET` (only if previews are used) | Vercel | 18 |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` (`mailto:` the owner) | `.env.local`, Vercel | 21 |
| `REMINDER_SECRET` | Vercel and the GitHub repository secrets (same value); GitHub variable `REMINDER_URL` (production URL) | 21 |

Never name an app variable `ANTHROPIC_*`. Every variable goes in `.env.example` and README.

---

# Part B — Rules every step follows

## B1. Working agreement

1. One step per session. Start a fresh session (`/clear`) and paste the prompt from B4.
2. Read only what the step's **Read first** lists. Find sections with `grep -n '^#' <file>`; read with `offset`/`limit`. Don't read VISION.md, CURRICULUM.md or this file whole.
3. Family Tree (`~/GitHub/Family Tree with AI`) is a pattern library: read only the files a step names, copy the idea, adapt names. Never import from it.
4. Before writing Next.js code, check the relevant guide in `node_modules/next/dist/docs/` (Next.js 16 differs from older versions).
5. At the end of the step: run the **Done when** checks, then **stop** — show test results and the **Try this** list, and wait for the owner's OK.
6. After the OK: commit straight to `master` (initial development; the owner will say when a change should go on its own branch for a Vercel preview). The owner pushes; Vercel deploys `master` to production.
7. Commit messages never include a `Co-Authored-By` or any other AI attribution trailer.
8. A deviation from this plan (a library behaves differently, a simpler way works) is written in the step's **Notes** in the Progress table, and in Part A if it changes the architecture.
9. If a step can't finish within the day's budget, stop at a clean point (each L step has a **Checkpoint**), commit the finished part to `master` only if the owner agrees, and write in the Progress notes exactly what remains.

## B2. UI rules (the quality bar for every screen)

- **Mobile-first.** Design at 390 px wide. On wider screens, learning screens are a centred column (`max-w-xl`); the landing page may use the width.
- **No text inputs anywhere.** Buttons, switches, word tiles, voice.
- **All UI text lives in `src/lib/strings.ts`** (each label a `Bi`); components never hard-code label text.
- **Labels:** the `Bi` component renders English (bold) then Telugu (smaller, `lang="te"`) in Telugu mode, English only in English mode. The English word comes first in the DOM, so tests find buttons by their English name.
- **Explanation text** (`Bi` content fields: body, why, hint, situation, prompts) shows the `te` or `en` version by the Learn-in setting, with 🔊 🐢 narration.
- **Text size:** root font size 18 px (A), 20 px (A+), 22 px (A++), set on `<html>` before first paint; use `rem` everywhere. Telugu line-height ≥ 1.7.
- **Touch targets** ≥ 52 px high (`min-h-13`), ≥ 8 px apart. Full-height screens use `h-dvh`.
- **Colours** are design tokens (since the production look, 2026-11-08): CSS variables in `globals.css` switched by the `dark` class and exposed to Tailwind, so `bg-page`, `bg-surface`, `bg-sunken`, `border-line`, `text-ink` / `text-ink-2` / `text-ink-3`, `text-brand`, `bg-brand-fill text-on-brand`, `bg-brand-soft text-brand-ink`, `bg-accent` / `bg-accent-soft`, `text-good` / `bg-good-soft`, `text-almost` / `bg-almost-soft`, `text-danger` need no `dark:` twin. The values are in the production-look section's table (Part C). A raw palette class (`bg-stone-100`, `text-teal-700`) still needs its `dark:` twin, and is only for one-off cases.
  - correct `good` with ✓; try again `almost` with ↻; red (`danger`) only for destructive actions (Sign out confirmation); marigold (`accent`) for celebrations and highlights.
  - pattern chips: who / action / what / when tokens (`bg-who-bg text-who-ink`, …), always with their label.
- **Type:** headings and big numbers in the display font (`font-display`: the system font for English, Noto Sans Telugu for Telugu, the same as body text); body in the system font (English) and Noto Sans Telugu.
- **Language** (owner, 2026-11-08): simple words — buttons, labels, titles, counts (Correct, Keep going, Day 1, "0 of 17 done") — are English only (`Bi`, or `.en`). Sentences that explain something — explanations, instructions, reasons, hints, help and error messages, a section's purpose — follow Learn in (`BiText` for the app's own sentences, `ContentText` for lesson content). A sentence's Telugu meaning shows only in Telugu mode (`Meaning`). Activities built on Telugu (translate, match, the bridge) keep it.
- **Listen / Slow** (owner, 2026-11-08): round icon buttons, no text. Listen only where it helps: example and key sentences, the question's sentence, the correct answer in the feedback, role-play and dialogue lines. Explanations, reasons and hints are not read aloud. Slow is offered only for sentences of medium or high complexity (`needsSlow` in `src/learning/complexity.ts`: 6 words or more), on questions too.
- **Building blocks** in `src/components/ui/` and `src/components/illustrations/` (the production look's list); new screens use them rather than hand-written styles.
- **Theme:** Day / Night / Follow phone; `dark:` follows a `dark` class on `<html>` set by an inline script before first paint (Family Tree `src/components/theme-script.ts`).
- **Motion:** 150–200 ms fades/slides, `motion-reduce:animate-none`. Confetti is CSS-only and skipped with reduced motion.
- **Player layout:** top bar (✕ close, progress bar, `n / total`, section name, ⚑ report from Step 20); activity in the middle; primary button fixed at the bottom (Check → Continue). Feedback panel slides up from the bottom and is announced (`aria-live="polite"`).
- **Loading:** skeletons with the final shape; no layout jumps when progress arrives after hydration.
- **Icons:** hand-drawn SVGs in `src/components/ui/icons.tsx` only.
- **Accessibility:** every button has a name; visible focus ring; colour never the only signal; images have alt text; Telugu text marked `lang="te"`.
- **Never combine a class string with a conflicting utility** (`${button} px-2`): add a variant instead (Tailwind's CSS order decides, not class order).
- **Links to other sites** open in a new tab with `rel="noopener noreferrer"` and an `aria-label` ending "(opens in a new tab)".

## B3. Testing and budget habits

- Pure logic (`src/learning`, `src/content`) gets unit tests first. Activity components get Testing Library tests using role queries. Each user-facing step adds or extends one Playwright spec on the **phone** project.
- e2e stubs (`e2e/speech-stub.ts`, added in Step 7): `addInitScript` replaces `speechSynthesis` (records what was spoken and with which voice) and `SpeechRecognition` (returns `window.__nextTranscript`, or errors on request). No e2e test depends on a real voice or microphone.
- Tests that need a bigger course (many weeks, tracks) use a fixture course in `test/fixtures/`, not real content.
- Run the smallest test that proves the change: `npx vitest run <file>`; full `npm test` once before stopping.
- Screenshots go to `test-results/screenshots/`. Each step lists the few to look at (day and night); don't open others.
- The Claude Code sandbox blocks local ports: `npm run build`, `npm run dev` and `npm run test:e2e` must be run **exactly as written, alone** (no `cd … &&`, pipes or prefixes) once the owner has allowlisted them; if refused, ask the owner to run them.

## B4. Prompt to start a step (paste into a fresh Sonnet session)

```text
Build Step N of docs/BUILD_PLAN.md.
Read the "Step N" section and only the files it lists under "Read first".
Follow Part B of docs/BUILD_PLAN.md.
When the "Done when" checks pass, stop and show me the results and the "Try this" list.
```

After the owner's OK: `OK, commit it.`

---

# Part C — Steps to launch

Each step: **Goal · Read first · Build · Done when · Try this · Owner**. Sizes: S (small), M (medium), L (large — has a checkpoint halfway).

## Step 1 — Skeleton and tooling (M)

**Goal:** an empty, deployable Next.js app with every tool wired.

**Read first:** this file A1–A2, B1, B3. Family Tree: `package.json` (scripts and versions), `.npmrc`, `next.config.ts`, `vitest.config.mts`, `playwright.config.ts` (projects, Chrome channel), `eslint.config.mjs`, `src/app/globals.css` (first 30 lines), `vercel.json`.

**Build:**
- Create the app in the repo root (TypeScript, App Router, `src/`, Tailwind v4 via `@tailwindcss/turbopack`, ESLint). Copy `.npmrc` (registry-neutral lockfile). Add `.DS_Store`, `.env*.local`, `test-results/`, `playwright-report/`, `.next/`, `public/content/` to `.gitignore`.
- Scripts: `dev`, `build`, `start`, `lint`, `typecheck` (`next typegen && tsc --noEmit`), `test`, `test:watch`, `test:e2e`.
- Vitest (jsdom default, Testing Library, `@/` alias). Playwright: projects `phone` (iPhone 13 emulation) and `desktop` (Chrome), production build on port 3100, `channel: "chrome"` unless `CI`.
- Fonts: system stack; Noto Sans Telugu from npm imported in `globals.css`, applied to `:lang(te)`.
- `src/app/page.tsx` placeholder ("EnglishEasy — coming soon" + link to `/learn`), `src/app/learn/page.tsx` placeholder. `vercel.json` pinning the framework. Short `README.md` (what it is, commands).
- One unit test (a trivial pure helper) and one e2e test (both pages load, Telugu text renders).

**Done when:** `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e` pass; `grep -c '"resolved"' package-lock.json` prints `0`.

**Try this:** `npm run dev`, open `http://localhost:3000` on the computer and on the phone (same Wi-Fi, `http://<mac-ip>:3000`).

**Owner:** allowlist `npm run build`, `npm run dev`, `npm run test:e2e` for this project (exact match, as for Family Tree). Import the GitHub repo into Vercel (framework Next.js); production branch `master`.

## Step 2 — Look and feel foundation (L)

**Goal:** the design kit, settings, Day/Night theme, text size, Learn-in mode and the app shell that every later screen uses.

**Read first:** B2; A5 (settings keys); VISION §2, §4.3, §10 (tab bar line), §10.9, §14. Family Tree: `src/components/theme-script.ts`, `src/components/theme.ts`, `src/components/ThemeMenu.tsx`, `src/components/ui/button.ts`, `src/components/ui/card.ts`, `src/components/ui/Dialog.tsx`, `src/components/ui/Toast.tsx`, `src/components/ui/icons.tsx` (first 60 lines), `src/components/use-hydrated.ts`.

**Build:**
- `src/lib/settings-store.ts` (localStorage + `useSyncExternalStore`) with every A5 setting; inline script in the root layout applies theme (`dark` class) and text size (root font size) before first paint.
- `src/components/ui/`: `button.ts` (primary, secondary, ghost, danger; sizes), `card.ts`, `Bi.tsx` (label mode follows Learn-in), `BiText.tsx` (shows `te` or `en` of a content `Bi`), `ProgressBar.tsx` (label + `aria-valuenow`), `StepList.tsx` (✓ ● ○), `Dialog.tsx`, `Toast.tsx`, `Skeleton.tsx`, `Switch.tsx`, `SegmentedControl.tsx`, `icons.tsx` (home, map, practice, gear, speaker, turtle, mic, check, retry, close, hint, flag, share, chevron).
- **Checkpoint:** kit done, unit tests pass.
- `src/app/learn/layout.tsx`: bottom tab bar (Home, Journey, Practice, Settings; icon + `Bi`; active tab `aria-current="page"`), safe-area padding.
- `src/app/learn/settings/page.tsx`: Learn in (Telugu / English), Theme, Text size (live preview), Auto-play audio switch, I can't speak now switch, placeholders for Voice, My tracks and Account (later steps), Buy me a coffee link (`SUPPORT_URL = "https://buymeacoffee.com/harikiranvusirikala"` in `src/components/support.ts`).
- `src/lib/strings.ts` with every label used so far; `src/app/error.tsx` and `src/app/learn/error.tsx`: friendly "Something went wrong" · ఏదో పొరపాటు జరిగింది screen with **Continue** (reloads; progress is in localStorage, so nothing is lost). Sending errors to the server comes in Step 20.
- `src/app/dev/ui/page.tsx`: every kit component in every state, in both Learn-in modes (404 unless `next dev` or `ENABLE_DEV_PAGES=1`, which Playwright's web server sets).

**Done when:** unit tests for the settings store and components; e2e `settings.spec.ts`: switch Night, A++ and English mode, reload, no flash (class present before hydration), choices kept, labels change to English only. Screenshots: `ui-day.png`, `ui-night.png`, `settings-phone.png`.

**Try this:** Settings on the phone: switch Learn in, Day/Night/Follow phone and A/A+/A++; reload; open `/dev/ui` in both themes.

## Step 3 — Content model, generator and Day 1 (L)

**Goal:** the content format, the course map, the activity generator, lesson data files and the first lesson.

**Read first:** A3, A4; VISION §4, §5; CURRICULUM §1, §3 (Week 1 table and the Stage 1 week titles), the stage headings and week tables of §4–§8 (titles only, for `course.ts`).

**Build:**
- `src/content/grammar.ts` (one key per CURRICULUM §2 row, e.g. `past-simple`, with its English + Telugu name) and `topics.ts` (life topics: home, food, market, shopping, money, health, doctor, pharmacy, bank, transport, directions, phone, technology, neighbours, festivals, family, travel, offices, weather, feelings, time, people).
- `src/content/types.ts`, `schema.ts` (zod), `course.ts` (all stages with week titles in English + Telugu, Week 1 released with its seven day refs, tracks with weeks unreleased), `load.ts`.
- `src/content/generate.ts`: `expandLesson`, a placeholder `buildReview` (finished in Step 15), the fixed core-sentence mapping documented in a comment and in A3 if it differs.
- **Checkpoint:** types, course map and generator with unit tests (determinism, ids, tile building).
- `src/content/main/w01/sentence-basics.ts`: full Day 1 per CURRICULUM §1 and §3 (both Learn-in languages for every `Bi`).
- `scripts/build-content.mts` (`node --import tsx`), hooked into `predev`/`prebuild`, writing `public/content/<dayId>.json`.
- `src/content/content.test.ts` (A3 rules and content quality checks for every released day, each with a failing example in a fixture so the checks themselves are tested).

**Done when:** `npm test`, lint and typecheck pass; `npm run build` writes `public/content/sentence-basics.json`.

**Try this:** read `sentence-basics.ts` — are the sentences natural and the Telugu clear in both modes?

## Step 4 — Learning engine (M)

**Goal:** the pure progress logic every screen relies on.

**Read first:** A5; VISION §9; `src/content/types.ts`, `src/content/course.ts` (types only), `src/content/generate.ts` (exports only).

**Build:** `src/learning/progress.ts`, `stats.ts`, `recommend.ts`, `shuffle.ts` (seeded). A fixture course with three weeks and a track in `test/fixtures/course.ts`. Unit tests: recording answers, retries and mistakes; completion with an optional section; `completeDay` compaction; week/stage/course stats; resume position; recommended day across weeks; track suggestion only when chosen and released.

**Done when:** `npm test`, lint and typecheck pass.

**Try this:** nothing to click yet; skim the test names to check the rules match VISION §9.

## Step 5 — Lesson player I: frame, cards and tap questions (L)

**Goal:** the player and the simplest activity types, playable for Day 1 (progress in memory for now).

**Read first:** B2 (player layout, labels); VISION §4.2–§4.4, §5, §10.5; `src/content/types.ts`; `src/content/generate.ts` (`PlayableDay` type); `src/learning/progress.ts` (exports).

**Build:**
- `src/lib/lesson-data.ts` (fetch `/content/<id>.json`, in-memory cache). `src/app/learn/play/page.tsx` (`?l=<id>`, inside `<Suspense>` for `useSearchParams`) + `src/components/player/Player.tsx`: sections and activities in order, top bar, section intro screens, section summary (`7 / 8 correct`), feedback panel, retry-once rule, close with confirm.
- Activities: `ExplainCard` (pattern chips + bridge animation + examples), `WhenToUseCard`, `DontSayCard`, `Choose`, `FillBlank`. Explanation text follows Learn-in. 🔊 buttons render disabled until Step 7.
- `src/components/learn/PatternChips.tsx` (reused on overview and landing).
- **Checkpoint:** frame + cards working.
- Placeholder for not-yet-built activity types: a "Coming soon — Skip" card so Day 1 is playable end to end.
- `src/app/dev/lesson/[id]/page.tsx` (dev/e2e only): the whole expanded day on one page — every section and activity with its answer marked, in Telugu and English side by side, with 🔊 — for reviewing new content quickly. Later activity steps add their types to it.

**Done when:** component tests for each activity (right answer, wrong twice → answer shown, both Learn-in modes); e2e `player.spec.ts` (phone): Day 1 Learn and first practice questions, section summary. Screenshots: `player-explain.png`, `player-feedback.png` (+ night).

**Try this:** play Day 1 on the phone in both Learn-in modes; get one wrong twice on purpose; open `/dev/lesson/sentence-basics`.

## Step 6 — Lesson player II: word tiles, match, find the mistake (M)

**Goal:** the building activities, all by tapping.

**Read first:** B2; VISION §4.5, §5; `src/content/types.ts`; `src/components/player/Player.tsx` (activity props only); `src/components/player/Choose.tsx` (as the pattern).

**Build:**
- `Arrange` and `Translate`: tiles in a seeded shuffle; tap to move a tile into the answer line, tap again to return it; Check compares words (case and final punctuation ignored); `accept` alternatives for Translate.
- `Match`: tap a Telugu card then an English card; matched pairs lock with ✓; a wrong pair shakes (not with reduced motion).
- `FindMistake`: sentence as tappable words; then the fix and the reason.
- `Hint` on Arrange and Translate (reveals the first word).

**Done when:** component tests (including repeated words like "the … the"); e2e completes Day 1's Practice section. Screenshots: `player-arrange.png`, `player-match.png` (+ night).

**Try this:** build a sentence, undo a tile, use Hint.

## Step 7 — Voice, narration and auto-play (L)

**Goal:** everything can be heard — English with a good female Indian-English voice, explanations with Telugu + English voices — and new content plays by itself.

**Read first:** A6; VISION §6 (first three paragraphs), §10.9 (Voice line); `src/components/ui/icons.tsx` (names only); `src/app/learn/settings/page.tsx`; `src/components/player/Player.tsx`.

**Build:**
- `src/learning/voice-pick.ts` (English and Telugu picks; unit-tested with fake voice lists from Android, iPhone, Windows, Mac) and `src/learning/split-scripts.ts` (unit-tested with mixed Telugu–English sentences).
- `src/lib/speak.ts`: `speak(text, { slow })` for English, `narrate(text, { slow })` for mixed text (queue per run), `voicesReady()`, `hasTeluguVoice()`, and the audio hook (A6; unit-tested with a fake manifest).
- **Checkpoint:** voice modules + unit tests.
- `SpeakButtons` (🔊 + 🐢) on every English sentence and every explanation; auto-play on appear, after Check, and for role-play/dialogue lines (wired in Step 9), all off when Auto-play is off.
- `ListenChoose` activity.
- Settings → Voice: English voices (Indian first) with a sample button; Telugu voice status (found / missing) and, when missing on Android, the install help card.
- `e2e/speech-stub.ts` (both synthesis and recognition, see B3).

**Done when:** unit tests; e2e: 🔊 speaks the right text at the right rate and voice; Telugu-mode explanation produces Telugu + English utterances; with no Telugu voice only English parts are spoken; Auto-play off stops automatic speech. Screenshot: `settings-voice.png`.

**Try this:** on the phone, tap 🔊 and 🐢 on a sentence and on an explanation; check the default voice is a clear female voice; try with Auto-play off.

## Step 8 — Speaking (M)

**Goal:** speaking activities that are forgiving and never block.

**Read first:** A6; VISION §6 (speech recognition paragraphs); `src/lib/speak.ts` (exports); `e2e/speech-stub.ts`; `src/components/player/ListenChoose.tsx` (as the pattern).

**Build:**
- `src/learning/speech-match.ts` with a broad unit-test table (contractions, fillers, extra words, Indian-English recognition quirks like "I'm going" vs "I am going").
- `src/lib/listen.ts` and a `MicButton` (idle → listening pulse → result), first-use explanation of the microphone permission (follows Learn-in).
- `Repeat` and `Situation` activities: Great / Good / Try again; after two tries "Choose instead"; unsupported/denied → "Choose instead" straight away with a short note; "I can't speak now" turns them into choosing.

**Done when:** unit tests; e2e with stubbed transcripts: good answer, poor then good, denied permission → choose instead. Screenshots: `player-speak.png`, `player-speak-night.png`.

**Try this:** say the sentence right, say it wrong, deny the microphone permission once.

## Step 9 — Role play and dialogue (M)

**Goal:** conversations that feel real, and their summary.

**Read first:** VISION §7; `src/content/types.ts` (roleplay, dialogue); `src/components/player/Situation.tsx`; `src/lib/listen.ts`, `src/lib/speak.ts` (exports).

**Build:**
- `RolePlay`: chat bubbles (partner left with name, learner right), partner line auto-plays, "Telugu meaning" toggle, mic or tap a reply, Hint, gentle correction on a not-good reply ("A better reply: …"), next turn auto-plays after the reply.
- `Dialogue`: lines play one after another with two voices, bubbles appear as they play, replay button, then its questions (Choose-style).
- `RolePlaySummary` with `src/learning/roleplay-score.ts` (pure, unit-tested).

**Done when:** tests; e2e plays Day 1's role play by tapping and by stubbed voice; a fixture dialogue plays both voices. Screenshots: `roleplay.png`, `roleplay-summary.png` (+ night).

**Try this:** play the role play once by voice and once by tapping.

## Step 10 — Saving progress, overview and lesson complete (L)

**Goal:** progress survives reloads, lessons resume, finishing feels good, and each lesson has a searchable page.

**Read first:** A5; VISION §9, §10.4, §10.6; `src/learning/progress.ts`, `stats.ts`, `recommend.ts` (exports); `src/components/player/Player.tsx`; Family Tree `src/components/today.ts`.

**Build:**
- `src/lib/progress-store.ts` (versioned localStorage, `useSyncExternalStore`, server snapshot `null`, corrupt data falls back safely); the player records every answer, the position and the practice day; `completeDay` on finishing.
- Resume at `nextActivity`; replaying a finished day starts at the beginning and keeps its completion.
- **Checkpoint:** saving + resume.
- `src/app/lessons/[id]/page.tsx`: static (`generateStaticParams` over released days, `generateMetadata` from `seo`), title, pattern chips, the Learn content (server-rendered, Telugu and English versions both in the page; the visible one follows Learn-in after hydration), and a client progress card (%, section StepList, Start / Continue / Review).
- Wrap-up screen = lesson complete (VISION §10.6): CSS confetti, done list, key sentences with 🔊, today's new words, Try it today, next day, Continue / Review.
- **Share this lesson** on the overview page and the complete screen: `navigator.share` with the lesson's title, a short line ("Learn past tense — explained in Telugu. Free.") and its `/lessons/<id>` link; copy-link fallback (a button).

**Done when:** unit tests for the store; e2e: half of Day 1, reload, Continue resumes at the same activity; finish → complete screen; overview shows 100%. Screenshots: `overview.png`, `lesson-complete.png` (+ night).

**Try this:** leave a lesson halfway, close the browser, come back.

## Step 11 — Home and Journey (L)

**Goal:** the screens that answer "what should I do now?" and "where am I in the course?".

**Read first:** VISION §3 (pacing), §10.1–§10.3; A4; `src/learning/recommend.ts`, `stats.ts` (exports); `src/lib/progress-store.ts`, `src/lib/settings-store.ts` (exports); `src/content/course.ts` (types).

**Build:**
- First visit (`onboarded` false): the two-button Learn-in screen (VISION §10.1), then Home.
- Home: greeting by time of day (after hydration), Welcome back / Today's card, This week strip (tap a day → overview), "You practised N days this week", Practice tiles with counts, first-visit "Start Day 1" card.
- **Checkpoint:** Home.
- Journey: stages (current open, finished folded, future as cards with "can do" and week count), weeks with status and %, unreleased weeks "coming soon"; a week opens its days with % each. Uses the fixture course in tests to cover many weeks.

**Done when:** e2e: fresh visitor → language choice → Home → Day 1 → back Home shows progress; Journey shows Stage 1 open with Week 1 playable and later stages as cards. Screenshots: `home.png`, `home-night.png`, `journey.png`, `onboarding.png`.

**Try this:** use the app for five minutes as a parent would; does Home always make the next step obvious?

## Step 12 — Practice hub and tracks (M)

**Goal:** practice outside lessons, and the optional-track mechanism ready for content.

**Read first:** VISION §8, §10.8, §11.4; A4, A5 (tracks fields); `src/learning/recommend.ts` (`trackSuggestion`); `src/components/player/Player.tsx` (props); `src/app/learn/page.tsx`; `test/fixtures/course.ts`.

**Build:**
- Practice hub and pages: Practice again (replays mistake activities with the player's components), Role plays (from finished days), My Sentences (key sentences of finished lessons, 🔊 and 🎤), Speaking only (repeat drills from finished lessons).
- Tracks: Home card at the offer week (tap-only multi-choice, VISION §11.4), Settings → My tracks, Journey "My tracks" section, Home suggestion after the main day. Everything is hidden while no track has a released week (true at launch); tested with the fixture course.

**Done when:** e2e: a mistake appears in Practice again and disappears after a correct answer; My Sentences lists Day 1's key sentences after finishing it; unit/component tests for the tracks card with the fixture course. Screenshots: `practice.png`, `tracks-card.png` (fixture).

**Try this:** finish Day 1 with one mistake; open Practice.

## Step 13 — Content: Days 2 and 3 (S)

**Goal:** two more complete lessons.

**Read first:** CURRICULUM §1, §2 (rows for weeks 1–2), §3 (Week 1 rows for Days 2–3); `src/content/types.ts`; `src/content/main/w01/sentence-basics.ts` (as the model).

**Build:** `main/w01/i-am-you-are.ts`, `main/w01/present-simple-every-day.ts`, registered in `course.ts` and `load.ts`. Same shape and size as Day 1, both Learn-in languages, every activity reusing the lesson's core sentences.

**Done when:** `content.test.ts` passes; e2e smoke opens each lesson's player.

**Try this:** play Day 2 on the phone in both Learn-in modes.

## Step 14 — Content: Days 4 and 5 (S)

As Step 13, for `present-continuous-right-now` and `past-simple-yesterday` (CURRICULUM §3). Day 4 includes the "I am knowing" dontSay; Day 5 puts irregular past verbs in a match.

## Step 15 — Content: Day 6, weekly review and Day 7 (M)

**Goal:** Week 1 complete, with the review generator every later week uses.

**Read first:** CURRICULUM §3 (Week 1 rows for Days 6–7 and the note under the table); A3 (review); VISION §4.6, §10.7; `src/content/generate.ts`; one Week 1 lesson file.

**Build:**
- `main/w01/future-will-tomorrow.ts`.
- `buildReview` finished (unit-tested with the fixture course); `main/w01/w1-review.ts` with `extras`: the timeline activity and the 6-turn role play.
- Week complete screen after the last day of a week (VISION §10.7) with Share (`navigator.share`, else copy link — a button); stage complete variant (tested with the fixture course).

**Done when:** tests; e2e: finishing Day 7 shows Week complete. Screenshot: `week-complete.png` (+ night).

**Try this:** play Day 7 and share the result to WhatsApp.

## Step 16 — Landing page and search engines (L)

**Goal:** a static, fast, search-ready front door that turns a visitor into a learner.

**Read first:** VISION §15, §13 (privacy points); Family Tree: `src/components/landing/content.ts`, `content.test.ts`, `Faq.tsx`, `Hero.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/server/site.ts`, `src/components/GoogleTagManager.tsx`, `src/server/tag-manager.ts`, `scripts/site-images.mts`.

**Build:**
- `src/components/landing/content.ts`: `TITLE`, `DESCRIPTION` (≤ 160 chars, tested), `FAQ` (rendered and in structured data), `structuredData()` (WebSite, Course with its released lessons, FAQPage), `GOOGLE_SITE_VERIFICATION` (empty until the owner adds it).
- Landing sections: Hero (English + Telugu headline, "Start Day 1 — free" or "Continue Day N" after hydration, phone mock-up of the player), How it works (Learn → Practise → Speak → Role play), the journey (five stages, Week 1 lesson links), Why it works (no typing, Telugu help, hear everything, big text, works offline), FAQ, footer (Privacy, Buy me a coffee).
- **Checkpoint:** landing page.
- `src/app/privacy/page.tsx` (plain language: what is stored on the phone, in the account when signed in, problem reports, speech recognition by the phone's provider).
- `robots.ts`/`sitemap.ts`: production only (`VERCEL_ENV === "production"`) — landing, privacy and lesson overviews of kind `lesson`; `Disallow: /` elsewhere and for `/learn`, `/dev`.
- `metadataBase`, Open Graph and Twitter metadata; overview pages get `LearningResource` structured data.
- `src/app/icon.svg` (hand-written: a speech bubble with "A" and "అ"), `npm run images` → `favicon.ico`, `apple-icon.png`, PWA icons 192/512 + maskable, `opengraph-image.png` (1200×630, < 300 KB).
- Google Tag Manager on `/` only, from `GTM_ID` at build time, skipped when unset.

**Done when:** unit tests (content, robots/sitemap per environment, GTM id check); e2e `landing.spec.ts` (phone + desktop). Screenshots: `landing-phone.png`, `landing-night.png`, `landing-desktop.png`; view `opengraph-image.png`.

**Try this:** open the landing page on the phone; after the push, paste the link into WhatsApp to see the preview.

**Owner:** add `GTM_ID` to Vercel Production; after the production deploy, verify the domain in Google Search Console (give the tag for `content.ts`) and submit the sitemap.

## Step 17 — Installable app and offline (M)

**Goal:** add to Home screen; the lessons in use work without internet.

**Read first:** VISION §2 (point 8), §15 (installable); A3 (lesson data files); the Next.js PWA guide (`grep -ril "manifest" node_modules/next/dist/docs | head`).

**Build:**
- `src/app/manifest.ts` (name, short name, `start_url: "/learn"`, `display: "standalone"`, theme colours, Step 16 icons).
- `public/sw.js` (hand-written, versioned): precache the app shell (`/learn`, `/learn/play`, Journey, Practice, Settings, offline page) and their assets; `/content/*.json` **stale-while-revalidate** (answer from the cache at once, fetch the latest in the background and update the cache — so content fixes reach every phone on its next visit); navigations network-first with cache fallback; hashed static assets cache-first.
- The app asks the service worker to cache the lesson files of the current and next week (and every lesson opened). Register in production only; new version → toast "Updated — tap to reload".
- Home: one-time "Install EnglishEasy" card — Android `beforeinstallprompt` button; iPhone picture instructions (Share → Add to Home Screen); hidden when installed.

**Done when:** unit tests for the service worker's routing decisions (pure function); e2e: manifest valid; after one visit, offline (`context.setOffline(true)`) still opens and plays Day 1; a changed lesson file is shown on the visit after next (stale-while-revalidate).

**Try this:** on Android Chrome, install the app, turn on airplane mode, open a lesson.

## Step 18 — Google sign-in (L)

**Goal:** optional sign-in, ready for sync.

**Read first:** A7, A8; VISION §13; Family Tree: `src/server/auth.ts`, `src/server/auth-options.ts`, `src/server/auth-urls.ts`, `src/server/db.ts`, `src/server/permissions.ts` (`getUser` only), `src/app/api/auth/[...all]/route.ts`, `scripts/db-setup.mts`, `scripts/db-ping.mts`, `src/components/auth/SignInButton.tsx`, the "Sign-in" and "Deployment" sections of `.claude/CLAUDE.md`.

**Build:**
- `src/server/db.ts`, `auth.ts`, `auth-options.ts`, `auth-urls.ts` (exact origins only), `/api/auth/[...all]`, `getUser()`, `oAuthProxy` only when `OAUTH_PROXY_SECRET` is set.
- **Checkpoint:** server side + unit tests.
- `scripts/db-ping.mts`, `scripts/db-setup.mts` (Better Auth's indexes, `progress.userId` unique, `reports` by `dayId` and `at`, `clientErrors` by `at`), run with `node --import tsx --env-file-if-exists=.env.local`; npm scripts `db:ping`, `db:setup`.
- Settings → Account: Google button following Google's branding (signed out); avatar + name + email + Sign out (signed in). Home greets with the Google first name.
- `.env.example`; README "Run your own copy" (Atlas, Google OAuth client with redirect URIs, Vercel variables).

**Done when:** unit tests for `authUrls` and the account states; e2e: the sign-in button redirects towards Google (stop there); `npm run db:ping` works.

**Try this:** sign in with Google locally and on production; sign out.

**Owner:** create the Atlas database and user; create the Google OAuth client (consent screen links the privacy page; redirect URIs for localhost and production); set the A8 variables in `.env.local` and Vercel; run `npm run db:setup` for `englisheasy` before pushing.

## Step 19 — Progress sync (M)

**Goal:** signed-in learners keep progress across devices; guests lose nothing when they sign in.

**Read first:** A5, A7; VISION §13; `src/learning/progress.ts` (types); `src/lib/progress-store.ts`; `src/server/db.ts`, `src/server/auth.ts` (exports).

**Build:**
- `src/learning/merge.ts` (unit tests: disjoint, overlapping, completed on one side, mistakes cleared on one device, position, tracks, idempotence `merge(a, a) = a`).
- `src/server/progress-repo.ts` and `/api/progress` (GET/PUT, 401 signed out, zod, size limit).
- `src/lib/sync.ts`: merge on sign-in and app open, debounced PUT, retry when online; nothing breaks offline or signed out.
- "Save your progress with Google" card on the lesson complete screen (after Day 1) and on Home for guests with progress; dismissible.

**Done when:** unit tests; `*.db.test.ts` for the repository (`npm run test:db`, as in Family Tree); signed-out e2e flows unchanged.

**Try this:** do half of Day 2 as a guest on the phone, sign in, open the app on the computer, sign in — the progress is there.

## Step 20 — Report a problem and error log (S)

**Goal:** learners can flag content mistakes in two taps, and app crashes on learners' phones reach the owner.

**Read first:** A7 (reports, clientErrors); VISION §10.5 (⚑ line), §13; `src/components/player/Player.tsx` (top bar); `src/app/learn/error.tsx`; `src/server/db.ts` (exports).

**Build:**
- ⚑ in the player's top bar → dialog with four reason buttons → `POST /api/report` → "Thank you" toast; one report per activity per device; works for guests; queued and sent later when offline. `src/server/reports-repo.ts`.
- `src/lib/report-error.ts`: the error screens and `window.onerror` / `unhandledrejection` send `POST /api/client-error` (limit 5 per device per day; never blocks the screen).
- `scripts/reports.mts` (`npm run reports`): latest reports grouped by day and reason, then the latest client errors grouped by message.

**Done when:** unit tests (zod, limits, repo with `test:db`); e2e: report from the player shows the toast and is not offered twice for the same activity; a forced error on a dev page shows the friendly screen and sends one error.

**Try this:** report a problem on the phone, then run `npm run reports`.

## Step 21 — Daily reminders (M)

**Goal:** a gentle daily nudge at the time the learner chose — and none on days they already practised.

**Read first:** A7 (daily reminders), A8; VISION §10.2 (reminder card), §10.9 (Daily reminder), §13; `public/sw.js`; `src/lib/progress-store.ts` (where the first answer of a day is recorded); `src/server/db.ts` (exports); the `web-push` package README (`npm pack web-push` into `/tmp/englisheasy-scratch/`, read only).

**Build:**
- `src/learning/reminder-due.ts` (pure: local hour and day from a time zone, due or not; unit-tested across time zones, India and abroad).
- `src/lib/reminders.ts` and Settings → **Daily reminder** · రోజువారీ గుర్తు: Off / Morning 8:00 / Afternoon 1:00 / Evening 6:00 / Night 8:00. Picking a time asks for notification permission (with a short note first), subscribes through the service worker and `PUT /api/reminders`; Off unsubscribes (`DELETE`). On iPhone outside the installed app: "Install the app first to get reminders" with the Step 17 instructions.
- One-time card after the first finished lesson: "Want a reminder every day?" with the same time buttons.
- **Checkpoint:** subscription flow.
- `src/server/reminders-repo.ts`; `POST /api/reminders/send` (401 without `REMINDER_SECRET`): due subscriptions get "Today's English is ready 🌱 · ఈరోజు ఇంగ్లీష్ పాఠం సిద్ధం" (English only for English mode, stored with the subscription), tapping opens `/learn`; gone subscriptions are deleted; `lastSentDay` set.
- The service worker's `push` and `notificationclick` handlers. The client updates `lastPracticeDay` on the first answer of a day (only when subscribed).
- `.github/workflows/reminders.yml`: hourly `curl` to `$REMINDER_URL/api/reminders/send` with the secret; also runnable by hand.
- `db:setup` adds the indexes (`endpoint` unique; `hour`). `npm run vapid` prints a new VAPID key pair (`web-push generateVAPIDKeys` through a small script).

**Done when:** unit tests (due rule, route auth, repo with `test:db`); e2e: choosing a time calls the subscribe flow with a stubbed `PushManager` and sends the right hour and time zone; Off removes it.

**Try this:** on Android, pick a time one hour ahead (or run the workflow by hand), wait for the notification, tap it.

**Owner:** run `npm run vapid` and set the A8 variables in `.env.local` and Vercel; add `REMINDER_SECRET` as a GitHub secret and `REMINDER_URL` as a GitHub variable; run `npm run db:setup` for `englisheasy`; after pushing, run the "reminders" workflow once by hand from GitHub Actions.

## Step 22 — Polish and launch (M)

**Goal:** release quality, checked as an elder would use it.

**Read first:** VISION §2, §14, §17; B2.

**Build / check:**
- Elder walkthrough on the phone project at A++ in Night and Day, in both Learn-in modes (and once with a reminder notification): every screen has one clear next step, nothing is cut off, every tap target ≥ 52 px (an e2e check measures buttons).
- Accessibility pass: focus order and rings, `aria-live` feedback, landmark names, `lang="te"` on Telugu.
- Performance: no layout shift on Home and the player; images sized; fonts subset.
- Final screenshots of the main screens (day + night) into `docs/screenshots/` and the README.
- README complete (features, screenshots, run your own copy, environment variables, how to add content with Part E).

**Done when:** all tests pass; the owner's Lighthouse run on the production URL (phone) scores Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100.

**Try this:** give the phone to a parent with no instructions; note where they hesitate.

## After launch: a production look and a full landing page (owner request)

- **Why:** the app works end to end, but it looks like a prototype next to the owner's Family Tree app: no brand mark inside the app, flat grey-on-white text blocks with little hierarchy, Telugu sub-labels at about 11 px, tiny low-contrast 🔊 and 🐢 icons (the buttons elders need most), a loud bright-cyan Night theme, and a thin landing page (no header or navigation, a wall of text for the journey, no screenshots, no theme switch). The owner asked for the same production quality as Family Tree's "search engines and the landing page" and "a production look across the app", built in this session with Opus at high effort.
- **Goal:** one warm, calm visual language from the landing page through every screen, in both themes, on phones, tablets and computers: a real brand (mark, colours, type), clear hierarchy, big readable Telugu, audio buttons that look like buttons, smooth feedback, and a professional, search-friendly landing page. It's a change of presentation plus the small UX changes listed below. Features, rules, content, ids, progress and storage stay the same.
- **What stays:** every feature, the content and its ids, the learning engine, saved progress and settings keys, the routes, the bottom tab bar on phones, Google's sign-in button branding, and the names tests and screen readers use (where one changes, its tests change with it).
- **The design system** (Part 1 builds it; every later part uses only it):
  - **Colours** (CSS variables in `globals.css`, switched by the `dark` class, exposed to Tailwind as `bg-page`, `bg-surface`, `text-ink`, … so a colour class no longer needs a hand-written `dark:` twin):

    | Token | Day | Night | Used for |
    |---|---|---|---|
    | `page` | `#FBF8F3` warm cream | `#0B1416` deep slate | page background |
    | `surface` | `#FFFFFF` | `#122023` | cards, bars, sheets |
    | `sunken` | `#F3EEE6` | `#0F1B1D` | tracks, wells, inputs, tiles' tray |
    | `line` | `#E7E0D5` | `#24383C` | borders, dividers |
    | `ink` / `ink-2` / `ink-3` | `#1C1917` / `#57534E` / `#78716C` | `#ECF3F2` / `#A9BDBB` / `#7F9593` | text, muted text, hints |
    | `brand` | `#0F766E` teal | `#7DD3C6` soft teal | links, icons, focus ring, progress |
    | `brand-fill` / `on-brand` | `#0F766E` / `#FFFFFF` | `#7DD3C6` / `#062A27` | primary buttons |
    | `brand-soft` / `brand-ink` | `#E3F3F0` / `#0B4F49` | `#143A37` / `#B8ECE4` | selected states, chips, listen buttons |
    | `accent` / `accent-soft` / `accent-ink` | `#F59E0B` marigold / `#FEF3C7` / `#92400E` | `#FBBF24` / `#3A2C0C` / `#FDE68A` | celebrations, highlights, today, "new" |
    | `good` / `good-soft` | emerald 700 / 50 | emerald 300 / 950 | ✓ correct |
    | `almost` / `almost-soft` | amber 800 / 50 | amber 300 / 950 | ↻ almost (never red) |

    Pattern chips keep who = sky, action = emerald, what = violet, when = amber, as tokens with Night versions. Red only for destructive actions.
  - **Type:** headings, big numbers and the wordmark in the system font for English and Noto Sans Telugu for Telugu (Baloo Tammudu 2 at first, then Anek Telugu from part 2; owner, 2026-11-08: Anek's English looked rough in bold next to body text and its Telugu didn't match the Telugu in answers, so headings now use the same two fonts as body text, as in Family Tree, and `@fontsource-variable/anek-telugu` was removed), body text in the system font for English and Noto Sans Telugu for Telugu. Scale at A (18 px root): display 2.25 rem, h1 1.75 rem, h2 1.375 rem, body 1 rem, small 0.875 rem (nothing smaller). A `Bi` label's Telugu line is at least 0.875 em (was 0.8 em) with Telugu line-height 1.6.
  - **Shape and depth:** cards 20 px radius, buttons and options 16 px; Day cards get a soft two-layer shadow, Night cards a border instead; 8 px spacing grid.
  - **Motion:** 150–220 ms fades and slides (sheets slide up, menus scale from 98 %, progress bars ease), confetti in teal and marigold; nothing moves with reduced motion.
  - **Building blocks** (`src/components/ui/`, used everywhere, each with unit tests): `button()` (primary, secondary, soft, ghost, danger; `md` 52 px, `lg` 60 px; leading icon; pending spinner), `iconButton`, `card()` variants (plain, raised, interactive, brand, accent), `Badge`, `Chip`, `ProgressBar` (12 px, eased, optional segments), `ProgressRing`, `StepList`, `SegmentedControl`, `Switch`, `Dialog` and `Sheet` (bottom sheet on phones), `Menu` (WAI-ARIA menu button, as Family Tree's), `Toast`, `Skeleton`, `EmptyState`, `PageHeader`, `Logo` (mark + wordmark), `ListenButtons` (labelled pills **🔊 Listen · వినండి** and **🐢 Slow · నెమ్మదిగా**, 52 px, `brand-soft`; a compact square pair where space is short), and `src/components/illustrations/` (hand-written SVG spot illustrations in the brand colours: welcome, learn, practice, speak, role play, lesson complete, week complete, empty, offline, not found).
- **Parts** (one at a time; each ends with the checks and screenshots, stops for the owner's look, and is committed to `master` after the OK):
  1. **Foundation and app shell:** the tokens, fonts and building blocks above; a refined icon (the A / అ speech bubble, redrawn with the new colours) and the `Logo`; the illustrations; the app shell — on phones the bottom tab bar (bigger icons, an active pill, a frosted bar) with the logo at the top of Home; from 768 px a top header (logo, the four tabs with an active marker, the theme as one icon button with a menu, the account avatar when signed in); restyled 404, error and offline pages; the component gallery `/dev/ui` showing everything in both themes and both Learn-in modes. Its screenshots are the preview of the direction before any screen changes.
  2. **Home, onboarding, Journey, Practice, Settings:**
     - **Onboarding:** the welcome illustration; two big choice cards, each showing a sample explanation in its language.
     - **Home:** greeting; the "today" card in the brand colour (week/day chip, English + Telugu title, progress ring, "9 of 15 done · 6 left", the big Continue); This week as seven day circles (✓, today in marigold); "You practised N days this week"; Practice tiles with icons and count badges; the nudge cards (install, reminder, save progress, tracks) restyled and shown one at a time below the main card. Two columns from 1024 px.
     - **Journey:** the current stage as a header card with its progress; weeks and days as a vertical path (a line joining the circles); "Soon" badges; finished stages folded; future stages as cards; My tracks.
     - **Practice:** tiles with illustrations or icons, counts as badges, empty states; its four pages restyled.
     - **Settings:** grouped cards with section icons; the account card first when signed in; voice, reminder and tracks sections restyled.
  3. **The lesson player:** the top bar (close, a thicker progress bar marked by section, the count, ⚑); a section chip with its icon; section intro screens with their illustration and what's inside; prompts as big headings; options and tiles bigger and clearer; the feedback sheet solid, sliding up from the bottom with the answer, `ListenButtons` and Continue; explain, when-to-use and don't-say cards as designed cards; the mic button as a big round button with a listening pulse; role play as a chat with avatars and reply chips; dialogue bubbles; section summaries with a score ring; lesson and week complete with illustrations, confetti, stat tiles, key sentences, new words and the Try it today card in marigold.
  4. **Public pages:** a shared public header (logo, Start / Continue, theme) and footer for the lesson overview, privacy and offline pages; the lesson overview redesigned (hero band with day chip, title, subtitle, pattern chips; progress card; the Learn content typeset as an article; Share).
  5. **The landing page** (`src/components/landing/`), static and both themes:
     - **Header** that stays at the top: logo, the page's parts, the theme switch, Start Day 1 / Continue.
     - **Hero:** English + Telugu headline, one sentence, Start Day 1 — free, real app screenshots in phone frames (the player and Home).
     - **How it works** in four steps (Learn → Practise → Speak → Role play).
     - **Four spotlights**, each with a screenshot: Telugu explanations you can hear; speaking and role play; the journey and progress; works offline, with daily reminders.
     - **The five-stage journey** drawn as a path, Week 1 lessons linked.
     - **Made for parents:** six features (no typing, big text, hear everything, Telugu or English, never punished, free).
     - **Privacy** in four points, the FAQ, a final call to action, and a footer (the page's parts, Privacy, the license, Buy me a coffee).
     - **Pictures:** `npm run images` also turns the day screenshots into the landing page's WebP pictures, and redraws the link preview with a real screenshot.
     - **Search engines:** the existing metadata, structured data, sitemap and robots stay; the canonical link and alt texts are checked.
  6. **Finish:** a consistency pass over every screen (spacing, motion, skeletons instead of empty states while loading); the 52 px and accessibility checks; screenshots of every main screen in both themes into `docs/screenshots/`; a high-level README (what EnglishEasy is, who it's for, features, the learning journey, how it works, tech stack, run your own copy, adding content) with those pictures (owner request, 2026-11-08); GitHub's social preview redrawn with real screenshots; these notes.
- **Decisions (owner, 2026-11-08):**
  1. Palette: teal + marigold (the table above), with the calm Night theme.
  2. Personality: spot illustrations, no mascot.
  3. Landing page: the full professional page (Part 5).
  4. Tablets and computers: a real layout from 768 px (top header; two columns on computers); phones keep the bottom tab bar; the player stays a focused column.
  5. Taken as recommended, not asked: a display font for headings (Baloo Tammudu 2, then Anek Telugu); the parts committed straight to `master` after each check.
  7. Listen and Slow are icons only (no text), with a better speaker and turtle; all icons redrawn in one duotone style (owner, after part 1).
  8. The whole flow and every page reworked to the standard of Family Tree's landing page, keeping the vision and every feature (owner, after part 1).
  9. Language: simple words English only; explanatory sentences in Telugu when Learn in is Telugu; Telugu meanings only in Telugu mode (owner, 2026-11-08; replaces the earlier "English + Telugu labels").
  10. Audio: Listen only where it helps, explanations not read aloud, Slow only for medium- and high-complexity sentences (6+ words), on questions too; Settings no longer shows the Telugu voice (nothing is read in Telugu).
  6. Wording fixed on the way: the FAQ said lessons are "written ahead of time by people"; they are written ahead of time with Claude's help, and the FAQ now says "written ahead of time" (no AI talks to the learner).
- **Tests:** every part keeps the unit and e2e suites passing. New building blocks get unit tests; dialogs, sheets and menus get keyboard and touch-size checks; `polish.spec.ts` keeps measuring 52 px targets; screenshots are checked by eye in both themes, on a phone and a computer.
- **Part 1, foundation and app shell (notes, 2026-11-08):**
  - **Tokens:** `globals.css` defines every colour of the table for `:root` (Day) and `.dark` (Night) and exposes them with `@theme inline`; `kit.test.tsx` fails if a token is missing from either theme or from Tailwind. A one-time rewrite moved 189 lines in 50 files from raw pairs (`text-stone-600 dark:text-stone-400`) to tokens (`text-ink-2`), so every screen took the new palette and the calm Night theme at once; the few raw classes left are in files Parts 2–5 redraw (pattern chips, confetti, the landing hero).
  - **Type:** Baloo Tammudu 2 at first (replaced by Anek Telugu in part 2) as `font-display`. Telugu inside display headings keeps the display font (`.font-display :lang(te)` in the base layer, so utilities still win). A `Bi` label's Telugu line is 0.875 em.
  - **Building blocks:** `button()` gained `soft`, `accent` and the `pill` size (rounding moved into the sizes, so no class is combined with a conflicting one), plus `outlineIconButton`, `softIconButton` and `focusRing`; `card.ts` gained `cardFlush`, `brandCard`, `accentCard`, `well`, `sectionTitle`; new `badge.ts`, `ProgressRing`, `Menu` (Family Tree's menu button, with tokens), `EmptyState`, `PageHeader`, `Logo` / `LogoMark`; `ProgressBar` (gradient, `onBrand` and `accent` tones), `StepList` (joined by a line), `SegmentedControl` (sunken track, raised choice), `Switch`, `Dialog` (a bottom sheet below 640 px) and `Toast` restyled. Icons redrawn where weak (gear, turtle, share) and 27 added.
  - **Listen / Slow:** `Narrate` now shows two labelled pills (**Listen · వినండి**, **Slow · నెమ్మదిగా**) on their own line; rows of sentences and chat bubbles pass `variant="compact"` (two tinted squares). The buttons' names stay "Listen" and "Listen slowly", so the tests and screen readers are unchanged.
  - **Illustrations:** `src/components/illustrations/Illustration.tsx`, ten drawings (welcome, learn, practice, speak, roleplay, complete, week, empty, offline, notFound) filled with tokens, so they follow Night.
  - **Shell:** `AppHeader` from 768 px (logo, the four tabs with an active pill, `ThemeMenu`, the Google avatar when signed in); `TabBar` below 768 px (frosted, an active pill behind the icon); the tabs' list is shared (`TABS`, `NO_SHELL` in `TabBar.tsx`). The screens keep their phone column until Part 2 widens them. New `src/app/not-found.tsx`; the error and offline pages use `EmptyState`. The browser bar follows the page colour (`viewport.themeColor`), and the manifest's background is the new page colour.
  - **Icon and pictures:** `icon.svg` redrawn like `LogoMark` (gradient tile, marigold dot). It keeps system fonts: the renderer behind `npm run images` doesn't know Baloo and fell back to a serif "A", and an SVG favicon can't load web fonts anyway. `npm run images` now also writes **GitHub's social preview** `docs/social-preview.png` (1280 × 640, everything inside GitHub's 80 px safe area; owner request) and redraws the link preview the same way (logo, headline in English and Telugu, three points, a phone with a lesson question). Part 6 redraws both with real screenshots.
  - **Tests:** unit 441 (new `kit.test.tsx`: tokens in both themes and in Tailwind, `ProgressRing`, `Menu` by keyboard, illustrations, `EmptyState`, `PageHeader`, badges; the button test now checks tokens instead of `dark:` twins). E2e 79 passed: new `look.spec.ts` (the header and the theme menu by keyboard on a computer, the tab bar on phones, the 404 page in both themes, the gallery screenshots); `settings.spec.ts` looks for the first *visible* Telugu label, as the header's (hidden on phones) now comes first. The baseline run before Part 1 had one failure, `reminders.spec.ts` "Off removes it"; it passed in both runs since, so it is flaky.
  - **Screenshots:** `look-gallery-day.png` / `look-gallery-night.png` (the direction), `look-desktop-home.png` / `-night.png`, `look-404-day.png` / `-night.png`.
- **Part 1 follow-up (owner's review):** Listen / Slow became round icon buttons (`listenButton()` in `button.ts`; names "Listen" and "Listen slowly" kept, also as tooltips); every icon redrawn in one style (2 px rounded strokes with a soft tint of the same colour; a generated 8-tooth gear; a clearer turtle) and 10 added (fire, route, pencil, tiles, lock, …).
- **Part 2, Home, onboarding, Journey, Practice, Settings (notes, 2026-11-08):**
  - **Shell widths:** the learn layout no longer limits width; each screen sets its own (Home `max-w-6xl` with two columns from 1024 px, Journey `max-w-3xl`, Practice and Settings `max-w-2xl`, the player `max-w-xl`). Full-screen views (`data-fullscreen`: the player, the practice runner) drop the tab bar's bottom padding (`has-[[data-fullscreen]]:pb-0`), which had made the player taller than the screen.
  - **Home:** the logo on phones, the greeting and "Ready for today's English?", the today card as `brandCard` (week/day badge, title, a `ProgressRing`, the count, a white `onBrand` button), This week as seven numbered circles (✓ done, the current day ringed in marigold) with the days practised, Practice as rows with tinted icons and count badges. The one-time cards (install, reminder, save progress, tracks) share `Nudge` (`src/components/ui/Nudge.tsx`).
  - **Onboarding:** logo, the welcome illustration, and two big choice cards each showing a sample explanation in its language.
  - **Journey:** the current stage as a card with a numbered medallion, a small "Stage 1" eyebrow over its name (the full name stays for screen readers and tests), weeks and days as a path of joined circles, "Soon" badges, future stages as cards with a lock badge.
  - **Practice:** the hub as rows with tinted icons, hints and badges (the count is a badge now, not "(1)"); empty states with illustrations; Start cards with illustrations; My Sentences as a list card.
  - **Settings:** every section is a `SettingsCard` (tinted icon, title, hint).
- **Part 3, the lesson player (notes, 2026-11-08):**
  - **Frame:** `SegmentedProgress` (the bar split into the lesson's sections), the count, ⚑, and a `SectionChip` (icon and name) under the bar; the count hides on the wrap-up.
  - **Section intros:** the section's illustration, "Part 2 of 5", its name, what happens in it (`SECTION_ABOUT`) and how many activities; summaries show the score in a ring.
  - **Feedback:** the whole bottom bar turns green (correct) or amber (almost) with the feedback in it (`BottomBar tone`, `FeedbackPanel` with an icon badge); "Try again" is the marigold button. After Check the answers scroll up above the bar (`useRevealAbove`), so the learner sees which one turned green or amber.
  - **Questions:** answer cards with A / B / C markers (hidden from screen readers, so names are the answer text); Fill the blank fills the chosen word into the sentence before Check; Listen and choose has a big central play button (`ListenHero`).
  - **Building:** word tiles drawn like keys, dropping into a dashed sentence tray; the bank keeps an empty place for a used tile so nothing jumps; Hint is a marigold chip.
  - **Speaking:** a big round microphone (`MicButton`, names unchanged) with a listening pulse; Situation as a "Real life" card.
  - **Role play and dialogue:** chat bubbles with an avatar letter for the partner, the scene card with a chat icon, replies as answer cards; the dialogue has a "Listen to the conversation" card.
  - **Complete screens:** illustrations, confetti in the brand colours, stat tiles (activities, sentences, new words), the key sentences list, new-word chips, a marigold "Try it today" card and a "Next" card. The role-play summary shows two score tiles (`data-testid` `score-speaking`, `score-conversation`; the tests read them there).
- **Part 4, public pages (notes, 2026-11-08):** `PublicHeader` (logo, theme, My lessons) and the landing footer on the lesson and privacy pages. The lesson page has a hero (day and subtitle badges, the English title with the Telugu one under it in Telugu mode — both in the HTML for search engines — the summary, large pattern blocks), the Learn content as an article, and a sticky progress card with a ring from 1024 px.
- **Part 5, the landing page (notes, 2026-11-08):** `LandingHeader` (logo, the page's parts from 1024 px, theme, "Start learning"), the hero (an eyebrow pill, the headline with the Telugu line, Start and "See how it works", two real phone screens), four numbered steps, four spotlights with phone screens and ✓ lists, the five stages and the Week 1 links, six "made for parents" cards, privacy in four points, the FAQ as cards, a teal closing call to action and a three-column footer. Each Start link has its own words ("Start Day 1 — free", the header's "Start learning", the closing "Start learning for free"). The page's text is English; the hero keeps the Telugu headline. The FAQ no longer says lessons are written "by people".
  - **Pictures:** `e2e/capture.spec.ts` takes clean phone screens (Day theme) into `test-results/screenshots/capture-*.png`; they are copied into `docs/screenshots/` and `npm run images` makes the landing page's WebP pictures (`src/components/landing/images/`), keeps `docs/screenshots/` small (palette PNGs), and draws the link preview and GitHub's social preview with a real screen in the phone.
- **Language and audio (owner, 2026-11-08; decisions 9–10):** `Bi` renders English only; `BiText` follows Learn in for the app's own explanatory sentences; `ContentText` follows it for lesson content; `Meaning` shows a sentence's Telugu meaning in Telugu mode only; the role play's "Telugu meaning" button exists only in Telugu mode; the explanation card shows only the pattern blocks in English mode (the Telugu → English bridge in Telugu mode). `Narrate` shows Listen only unless `slow` is given and the sentence needs it.
- **Tests:** e2e runs with `reducedMotion: "reduce"` so screenshots show each screen as it settles. Unit 442, e2e 85 passing. Specs changed with the design: `roleplay.spec.ts` and `roleplay.test.tsx` read the score tiles; `voice.spec.ts` checks Listen without Slow on simple sentences, Slow on a medium role-play line, no narration of explanations, and auto-play on Don't say / Say; `polish.spec.ts` expects Telugu only where explanatory sentences are; `pages.spec.ts` and `settings.spec.ts` follow the English labels; `landing.spec.ts` the new headings. `speak.test.ts` waits for all narration runs (it was flaky under load).

---

## After launch: one recorded voice on every phone (owner request)

- **Goal:** the same natural Indian female voice on every device, reading English and Telugu together, instead of each phone's own voices. No paid service, no account, no AI at runtime (VISION §18, 2026-11-08 "Voice").
- **How:** the A6 audio hook already plays `/audio/manifest.json` recordings before the phone voice. `npm run audio` (owner's machine; the Claude Code sandbox blocks the voice host) makes the files: `scripts/build-audio.mts` builds every released day, lists what the app reads aloud (`spokenTexts`, `src/learning/spoken.ts`), and asks Microsoft Edge's free read-aloud voices for each new text via `msedge-tts` (installed only in `tools/audio/`, never in the app: its preinstall script would break the Vercel install). Voice `a` = `te-IN-ShrutiNeural` (Telugu; reads English inside Telugu with an Indian accent), dialogue voice `b` = `te-IN-MohanNeural`. Files are `public/audio/<key>.mp3` (24 kHz, 48 kbit/s mono); the manifest maps the text key to the file. Unchanged texts are skipped; files no text uses any more are deleted.
- **Text:** quote marks are dropped before speaking and before hashing (`speechText`), for recordings and the phone voice alike. A question whose prompt contains its sentence reads the whole prompt in the Learn-in language (`"I walk every morning." అంటే ఏమిటి?`); listening questions read only the sentence.
- **Playback:** one shared audio element (phones allow later plays once one was started by a tap); Slow plays the file at 0.72×; if a clip can't play, the phone voice reads it. The player fetches the day's clips when a lesson opens and the service worker keeps them (cache-first), so they work offline. The Android "install a Telugu voice" help appears only for text without a recording.
- **Done when:** unit tests cover `spokenTexts`, `speechText`, voice-keyed manifest entries and the playback fallback; e2e still uses the speech stub (it serves an empty manifest); the owner runs `npm run audio`, hears the voice in the app, and commits `public/audio/`.
- **Later (owner, 2026-11-08):** clips stay in one flat folder named by text hash (one clip per sentence, shared across days; no folders by week or day). Two milestones:
  - **Around Week 10–12 (~1,500 clips):** split the folder by the hash's first two characters (`public/audio/3f/3f9a12bc.mp3`): `scripts/build-audio.mts` writes the subfolder, the manifest stores the path. GitHub's file list stops near 1,000 files per folder.
  - **Before Stage 2 (~25 MB and growing ~1.7 MB a week):** move the clips out of git to free file storage (Cloudflare R2, Vercel Blob or a GitHub Release); only `manifest.json` stays in the repo, with full links. The app and the service worker keep reading the manifest.

## After launch: a Journey page worth living in (owner request)

- **Why:** Journey is where learners spend most of their time, but on phones (owner's Android and iPhone screenshots, 2026-11-08) lesson names wrapped to three lines: the % pill, the chevron and two levels of indentation left them a narrow column, and two path lines ran side by side.
- **Path:** one line runs through every week and day circle (weeks 2.75rem, days 2.25rem, both centred 1.875rem in). A circle shows its number, a tick when done, and an arc for the part done while in progress (sized in rem, so it grows with the text size). Stage and track cards use `cardPath` (less padding on phones).
- **Rows:** the name gets the whole width; a small line under it says where you are ("Day 2 · 41% done", "Day 1 · Done", "Week 1 · 3 of 7 days", "coming soon"). No % pills on weeks or days.
- **Next lesson:** tinted, marked "Next", with its own Start Day N / Continue Lesson button straight into the player (full width on phones). When it is off screen on arrival, Journey scrolls it into view.
- **Stage header:** "Stage 1 · 12 weeks", the name, and one bar with its % beside it. Later stages: the "can do" line goes full width under the name.
- **Lesson pages:** the header's Home button becomes Journey (map icon; "Journey" from tablets up), to `/learn/journey?day=<id>`, which opens that lesson's week (and its stage) and scrolls to it. Privacy keeps My lessons. The footer's section links point to `/#…`, so they work off the landing page too.
- **Done when:** unit tests cover the Next row and button, done days, the week's day count and `?day=`; e2e covers the lesson page's Journey link and a Journey with progress in Day/A and Night/A++ (no sideways scrolling); lint, typecheck, unit and e2e pass.

## After launch: a compact lesson page progress (owner request)

- **Why:** on phones the lesson page's progress (a ring, "37% done", a six-row checklist, then Continue and a full-width Share) filled a whole screen before the lesson itself (owner's iPhone screenshot, 2026-11-08). Asked: simple, less space, modern.
- **Now one snug card** (`cardSnug`): "37% done" with "7 of 19 · 12 left" on the same line; a slim bar split into the lesson's parts (each as wide as its activities, filled by what is done; the part Continue goes to has a soft ring; the parts and their states are a screen-reader list); one line "Next: Practice · 1 of 8" with the part's icon ("Every part done" when finished); Start / Continue / Review with a square Share beside it (`ShareLesson iconOnly`). About a third of the old height. The hero and the content below it have less padding on phones.
- **Social and link previews:** the phone is as wide as the whole question screenshot needs, so its Continue button is no longer cut off.
- **Done when:** e2e checks "Next: Practice" on a lesson under way and "Every part done" plus the square Share on a finished one; lint, typecheck, unit and e2e pass.

# Part D — Progress

| Step | Name | Status | Notes |
|------|------|--------|-------|
| 0 | Vision, curriculum, plan, CLAUDE.md | ✅ 2026-11-07 | Opus 5.5 planning session |
| 1 | Skeleton and tooling | ✅ 2026-11-07 | Next 16.4.5, React 19.3.1. No `cacheComponents` (A1). |
| 2 | Look and feel foundation | ✅ 2026-11-07 | Next 16 error pages get a `retry` prop (not `reset`); Continue reloads as planned. Tab bar is hidden on `/learn/play` (`NO_TAB_BAR` in `TabBar.tsx`) so the Step 5 player can own its bottom button. Journey and Practice tabs 404 until Steps 11–12. `Bi` omits Telugu identical to English ("A+"). Settings script also sets `data-learn-in` on `<html>`; CSS hides `[data-bi-te]` for English before hydration. `ENABLE_DEV_PAGES=1` set in Playwright `webServer.env`. |
| 3 | Content model, generator and Day 1 | ✅ 2026-11-07 | Week 1 is `released` with its seven day refs, but only `sentence-basics` has a file: `load.ts` registers written days (one line each, added in Steps 13–15); `build-content`, the tests and `buildAll()` work on written days only, and a test checks each registered day matches its `course.ts` ref (kind, title). `PlayableDay` also carries `wrapup` (key sentences, Try it today, words) and Wrap-up has no activities. Core-sentence mapping is in the `generate.ts` header and A3. Checks live in `checks.ts` (pure, tested with broken lessons in `test/fixtures/bad-lessons.ts`). Added dev dependency `tsx` and a `content` script; `predev`/`prebuild` run `build-content`. Warm-ups need two earlier lessons' key sentences; `buildReview` is the placeholder. |
| 4 | Learning engine | ✅ 2026-11-07 | `PlayableDay` gets `optional?: SectionKind[]` (copied from the lesson by `expandLesson`) so `dayStats` can apply the optional-section rule. The seeded shuffle moved from `generate.ts` to `src/learning/shuffle.ts` (same algorithm, tiles unchanged). `completeDay` score = activities right on the first try ÷ all activities. Extra pure functions: `markViewed`, `skipActivity` (Choose instead: done, never a mistake), `setPosition`, `addPracticeDay`, `chooseTracks`, `nextActivity`, `offerableTracks`, `shouldOfferTracks` (not asked, something released, learner at Week ≥ 13). Week/stage/course % = completed days ÷ released days. Lesson answers never clear a mistake; only Practice again does (`practice: true`). Fixture course uses weeks 12–14 so the Week 13 offer can be tested. |
| 5 | Lesson player I | ✅ 2026-11-07 | Progress is in memory (`useState`, engine functions); nothing saved until Step 10. Retry rule: first wrong answer → amber "Almost" + the reason and one more try; second wrong → the answer is shown (VISION §4.4 reads ambiguously; this follows "Done when"). Activities share `Question.tsx` (options, Check → Continue, feedback panel) and `useQuestion.ts`; cards are in `cards.tsx`. Types not yet built show the "Coming soon — Skip" card (recorded with `skipActivity`). Section summary after warm-up, practice and speak; Wrap-up is a basic screen (key sentences, words, Try it today, Finish → `/learn`), finished in Step 10. `Narrate` renders disabled 🔊 🐢 until Step 7. `/dev/lesson/[id]` reads `public/content/<id>.json` on the server; other activity types show raw JSON until their step adds them. Close confirm uses the `Dialog`; ⚑ report arrives in Step 20. |
| 6 | Lesson player II | ✅ 2026-11-07 | Arrange and Translate share `Build.tsx`; tile logic (seeded shuffle, never starts solved, compare ignoring case and punctuation) is pure in `src/learning/tiles.ts`. Same retry-once rule as Step 5; tiles stay in place on "Try again". Match reports one answer when all pairs are locked: correct only if there was no wrong pair (a wrong pair shows ↻ as well as shaking). FindMistake reuses `useQuestion`; the fix and reason show after the answer is judged. Hint shows "It starts with <first word>". `OPTION` styles are exported from `parts.tsx`; a `shake` keyframe was added to `globals.css`. |
| 7 | Voice, narration and auto-play | ✅ 2026-11-07 (known issue below) | Pure modules: `voice-pick.ts`, `split-scripts.ts`, plus `audio-manifest.ts` (text hash → file, FNV-1a; the A6 audio hook). `speak.ts` adds `stopSpeaking`, `useVoices`, `isAndroid`, `loadManifest`; `narrate` also handles plain English, so `Narrate` (🔊 🐢) always uses it and takes a string or a `Bi` (follows Learn in). `Narrate auto` plays on appear when Auto-play is on: explain body, don't-say fix, `say` of a question, and the correct sentence after Check (also when right). FillBlank no longer shows 🔊 before the answer (it would give it away). Settings → Voice is two cards (English voice list with Sample; Telugu voice status + Android install help). The Telugu install-help dialog is one shared dialog in the learn layout (`ShellDialogs`), opened once by 🔊 on Telugu text on Android with no Telugu voice (`dismissed` id `telugu-voice-help`). `public/audio/manifest.json` ships as `{}` (a missing file logged a 404 in the console); recorded audio later fills it. **Known issue (owner, Chrome on a Mac):** real speech works once after a fresh Chrome start, then stalls (`speechSynthesis.speaking` and `.pending` both stay `true`), so auto-play and 🔊 give no sound; unit tests and the e2e stub pass. Tried: holding utterance references, `resume()` before speaking, a pause after `cancel()`, speaking one utterance at a time with a watchdog that cancels a stalled one (logs `Speech stalled, skipping: <voice>`). Not found yet: whether the macOS Telugu voice Geeta or cancel-while-speaking hangs the engine. To investigate before launch (Step 22 at the latest): check the console for that warning, test an English-only lesson, test on a real Android phone. Dialogue voice "b" is supported by `speak`/`narrate` (`voice: "b"`) for Step 9. |
| 8 | Speaking | ✅ 2026-11-07 (e2e not yet run: sandbox blocks the port, owner runs `npm run test:e2e`) | `speech-match.ts` drops fillers, expands contractions and reads digits as words (no fuzzy word matching, so `drink`/`drinks` stays a real difference). `listen.ts`: `listen()` resolves `heard`/`denied`/`unsupported`/`no-speech` (`network` errors count as unsupported); `useListenSupport()` is null until hydrated. `Repeat` and `Situation` share `SpeakFlow.tsx` (`SpeakBar` = mic + Great/Good/Try again; `useChoosing` = Choose instead, denied, unsupported, "I can't speak now"). "Choose instead" is offered from the start (VISION invariant) and becomes the main button after two poor tries. Choosing turns Repeat into arranging the sentence's words (`Build`) and Situation into its written options (`Question`). A poor try reports `onAnswer(false)`, an accepted one `onAnswer(true)`; "nothing heard", denied and unsupported are not tries. First-use mic card (`MicButton`, `dismissed` id `mic-permission-help`) follows Learn in. `FeedbackPanel` takes an optional `label`. |
| 9 | Role play and dialogue | ✅ 2026-11-07 (e2e not yet run: sandbox blocks the port, owner runs `npm run test:e2e`) | `RolePlay`: chat log of bubbles (`Bubble.tsx`), newest partner line auto-plays, per-line Telugu meaning toggle, Hint, spoken reply judged against all replies (a spoken match to a not-good reply gets the correction too; a poor try or silence is "Try again" and not a turn), tap options in shuffled order, then Continue (so the next partner line auto-plays on appearing, rather than after a timer). Microphone follows `useChoosing` (denied, unsupported or "I can't speak now" leave tapping only). `roleplay-score.ts`: Speaking = mean match score of spoken replies (hidden when none were spoken), Conversation = good turns out of 10; a skill is Good when every reply using it was good, else Practice more. `Dialogue`: lines play in sequence (speaker voice "b" on the second voice), bubbles appear as they play, Replay, then its questions with the shared `Question`; with Auto-play off all bubbles show at once. `speak()`/`narrate()` gained an `onEnd` option (fired once when everything has been read, not when replaced) that the dialogue uses to chain lines. Role plays and dialogues are not scored questions: finishing them marks the activity viewed (as Step 5 set up). Dialogue question answers are not recorded. e2e (`e2e/roleplay.spec.ts`) cuts Day 1 down to its role play with `page.route` and serves a fixture dialogue the same way. |
| 10 | Saving progress, overview, lesson complete | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`) | `parseProgress` (corrupt data, another version or a bad entry falls back safely) is pure in `progress.ts`, with `dateKey`; `src/lib/progress-store.ts` is `useProgress()` (null until hydrated) / `updateProgress(fn)` / `getProgress()`, and keeps progress in memory if storage is blocked. `Player` waits for saved progress (skeleton), then starts at `nextActivity` (its section intro if it opens a section; the end if all are done), records every answer, the position (each activity) and the practice day, and calls `completeDay` on reaching Wrap-up (not on Finish, so closing the browser there still counts). A finished day replayed (Review) keeps its completion: its answers stay in memory for that pass and nothing is saved except the practice day. `/lessons/[id]` is static (`dynamicParams = false`, only written and released days; planned days 404) with `generateMetadata` from `seo`; Telugu and English Learn text are both in the HTML (`data-lang`, hidden by CSS from `data-learn-in`); its client part (`OverviewProgress`) fetches the day JSON after hydration for %, StepList and Start / Continue / Review. Lesson complete is `LessonComplete.tsx` (replaces the basic Wrap-up): confetti (CSS, hidden with reduced motion), done list, key sentences with 🔊, new words, Try it today, Share; "Next: Day N" and Continue appear only when the next day's JSON loads (days 2–7 are not written yet), else Finish. "Save your progress with Google" and "daily reminder" cards are left to Steps 18 and 21; "saved to My Sentences" is not shown until My Sentences exists. Added `findDay`/`dayAfter` to `course.ts` (Day N from position) and `fill()` to `strings.ts`. Share uses `navigator.share`, else copies the link and shows a toast. `e2e/progress.spec.ts` cuts Day 1 to its Learn cards to finish it quickly. |
| 11 | Home and Journey | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`) | `/learn` is `Home` (client; the server page passes `course` and the ids of written days, so a day not written yet shows "This lesson is not ready yet" and is not a link, as Day 2 is after Day 1). First visit = `settings.onboarded` false: `Onboarding` covers the tab bar (fixed overlay) with the two Learn-in buttons, then Home. Pure helpers in `src/learning/home.ts` (`timeOfDay`, `locateDay` (Day N = week × 7 + position, so "Week 2 • Day 8"), `weekStrip`, `practisedThisWeek` = last 7 days incl. today, `isFirstVisit`, `currentStageIndex`); `src/lib/clock.ts` `useClock()` gives the local date and hour after hydration only (null before, so the greeting waits). Home: greeting, Today card (First visit "Start Day 1" / Welcome back / Today's lesson, % and counts from the day JSON, Start / Continue / Review Lesson), This week strip (links to overviews of written days), practised line (hidden at 0), Practice tiles. Tile counts are approximate until Step 12: Practice again = mistakes, Role plays and My Sentences = finished lessons; all three link to `/learn/practice`, which 404s until Step 12. No name in the greeting (signed-in only, Step 18). Install / reminder / Google cards and the tracks card are left to their steps. `/learn/journey` is `Journey`: stages as `<details>` (current stage open, earlier stages folded, later stages one card each with "can do" and week count); weeks are buttons (the recommended week starts open) with status and %, unreleased weeks "coming soon"; an opened week lists its days with % (100 when finished, else from the day JSON), days not written yet "coming soon". The "My tracks" section is left to Step 12. Component tests use a three-stage course built in `home-journey.test.tsx` plus `test/fixtures/course.ts`; `e2e/pages.spec.ts` now expects the language choice on a first visit. `src/lib/speak.test.ts` "reads Telugu and English runs one after another" failed once in about five full `npm test` runs (passes alone); not touched. |
| 12 | Practice hub and tracks | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`) | Practice is a hub at `/learn/practice` with four pages: `again`, `roleplays`, `sentences`, `speaking` (client components in `src/components/learn/Practice.tsx`). Pure helpers in `src/learning/practice.ts`; `useDays` (`src/lib/use-days.ts`) loads several days' JSON after hydration. `PracticeRunner` (in `src/components/player/`) plays a list of activities over the whole screen (covers the tab bar) using the player's own `ActivityView` (now exported from `Player.tsx` along with `isQuestion`). Practice again: the list is a snapshot taken when the page opens, so clearing a mistake does not shorten the running list; a correct answer calls `recordAnswer(..., { practice: true })`, a wrong one keeps the mistake; practice days are recorded. Role plays: one per finished day, played alone. My Sentences: key sentences of finished lessons with 🔊 🐢 and a 🎤 button that opens the sentence as a one-item Repeat drill. Speaking only: the Repeat drills of the 10 newest finished lessons (a cap, in `SPEAKING_LIMIT`). Home practice tiles now link to their pages; the Speaking tile is only on the hub. Tracks (`Tracks.tsx`): `TracksCard` (Home, once, at the offer week, tap toggles + Save + "None of these"), `TrackSuggestionCard` (Home, under Today's card, the next unfinished released day of a chosen track), `MyTracks` (Settings, replaces the "Coming soon" placeholder) and a Journey "My tracks" section; all of them are hidden while no track has a released week (true at launch), and tested with the fixture course in `practice-tracks.test.tsx`. Deviation: the `tracks-card.png` screenshot needs the fixture course in the running app, which has no hook yet, so it is not produced; the component test covers the card instead. The track suggestion is shown whenever a chosen track has a next lesson (not only after the main day is done). |
| 13 | Content: Days 2–3 | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`) | `i-am-you-are` and `present-simple-every-day` written in the shape of Day 1 (4 Learn cards incl. one When-do-I-use-this, 4 practice, 2 situations, 3-turn role play), registered in `load.ts`; `content.test.ts` passes (the "knows which days are written" test now expects Days 2 and 3 written, Day 5 not). With Day 2 written, Day 1's complete screen offers "Continue to Day 2" instead of Finish; `roleplay.spec.ts` and `progress.spec.ts` updated for that (the 404 check now uses `past-simple-yesterday`). New `e2e/days.spec.ts` opens each new lesson's overview and player in both Learn-in modes. Day 3's key sentences use only I / we / she / he; "office" is a new word taught through the Don't-say card. |
| 14 | Content: Days 4–5 | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`) | `present-continuous-right-now` and `past-simple-yesterday` written in the shape of Days 2–3 and registered in `load.ts`; `content.test.ts` passes (now expects Day 5 written, Day 6 not). Day 4 has the "I am knowing him" Don't-say card and a practice question on it; Day 5's first four core sentences are irregular past verbs (went, bought, ate, came), so the generated match is the irregular-verbs match. Day 6 `future-will-tomorrow` is the planned-not-written day in `progress.spec.ts`. `e2e/days.spec.ts` covers both new lessons. New words: cook, sleep, phone, now, TV / market, yesterday, film, bus, idli. |
| 15 | Content: Day 6, weekly review, Day 7 | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`) | `future-will-tomorrow` (Day 6, shape of Days 2–5) and `w1-review` (Day 7) written and registered in `load.ts`; `npm test`, lint and typecheck pass. `buildReview(review, weekDays, conversation?)` is finished: per lesson of the week one authored practice question (not find-the-mistake, rotating through the lesson's questions) and one generated arrange/translate (core[1] / core[2] alternately), all copied under review ids `${dayId}.g-<n>` so saved answers never mix with the lesson's own; shuffled with the day id as seed; then the Conversation Day's first role play when the week has one (`expandDay` and `build.ts` pass it; Week 1 has none); then `extras`. Role plays go in a `roleplay` section, the rest in `practice`. **Deviation:** no new activity type for the timeline: it is four `fillBlank` extras (`go / am going / went / will go` for `every day / right now / yesterday / tomorrow`), ids `t1`–`t4`; the 6-turn video-call role play is extra `r1`. Week complete: pure `weekEnd(course, dayId)` in `src/learning/week-complete.ts` (last day of a week, stage end, next released week); `WeekComplete.tsx` replaces Lesson complete in `Player` after a week's last day (confetti, `Week N Complete!`, `n / n days`, days practised, stage variant with trophy and the stage's can-do list, Share with family, Start Week N+1 only when that week's first day loads, else Finish, Review). `ShareLesson` takes optional `label`, `line`, `path` (the week shares the site root, `/`, until the landing page exists in Step 16; it shares text + link via `navigator.share`, else copies the link). Unit tests with the fixture course (`week-complete.test.ts`, `week-complete.test.tsx`, `buildReview` in `generate.test.ts`); `e2e/week-complete.spec.ts` (day and night) cuts Day 7 to its end and checks Week 1 Complete + Share; `e2e/days.spec.ts` now opens Day 6. The Day 7 content is reviewed on `/dev/lesson/w1-review` and `/dev/lesson/future-will-tomorrow`. |
| 16 | Landing page and search engines | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`; screenshots `landing-phone.png`, `landing-night.png`, `landing-desktop.png` come from that run). Landing is `src/app/page.tsx` (server, static) with `Hero` (headline in English and Telugu, `StartButton` = "Start Day 1 — free" or "Continue Day N" after hydration from `recommendedDay`, CSS phone mock-up of a practice question), `Sections` (How it works, Journey with Week 1 lesson links, Why it works), `Faq` (`details`, plain English from `content.ts`), `LandingFooter` (Privacy, Buy me a coffee); labels are `Bi` in `strings.ts`, FAQ text is English-only in `content.ts` (it must equal the structured data). `content.ts` has `structuredData(site, lessons)` (WebSite, Course with a `LearningResource` per released written lesson, FAQPage); `GOOGLE_SITE_VERIFICATION` is empty. Pure `src/server/site.ts` (`siteUrl`, `isLiveSite`, `robotsFor`, `sitemapFor`) and `tag-manager.ts` (`gtmId`) are unit-tested. **Deviation:** the site address comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` (no Better Auth yet), not `BETTER_AUTH_URL`; the sitemap lists lessons of kind `lesson` only; `/learn`, `/dev/` and `/api/` are disallowed; previews and local builds disallow everything and list nothing. `/privacy` is a Bi page; lesson overviews also carry `LearningResource` JSON-LD. `npm run images` (`scripts/site-images.mts`, sharp) writes `favicon.ico`, `apple-icon.png`, `opengraph-image.png` (60 KB, checked), and `public/icons/icon-192.png`, `icon-512.png`, `icon-maskable-512.png` for Step 17's manifest; `icon.svg` is a speech bubble with A and అ. GTM is rendered by the landing page only, from `GTM_ID` read at build, skipped when unset or malformed. No Family Tree `Showcase` screenshots: the phone mock-up is drawn in markup. `e2e/pages.spec.ts` now expects the landing headline. The flaky `speak.test.ts` failed once in a full run (passes alone), as noted in Step 11. |
| 17 | Installable app and offline | ✅ 2026-11-07 (build and e2e not yet run: sandbox blocks the port, owner runs `npm run build` and `npm run test:e2e`; `npm run build` was tried and failed only on the sandbox's port block). `src/app/manifest.ts` (start `/learn`, standalone, teal theme, the Step 16 icons incl. maskable). `public/sw.js` (versioned by `VERSION`, hand-written) loads `public/sw-routes.js`, the pure routing (`strategyFor`, `pageKey`, `assetsIn`, `SHELL`), unit-tested in `src/lib/sw-routes.test.ts` (loaded with `require`; it is a plain script so the worker can `importScripts` it). Install precaches the shell pages (`/learn`, `/learn/play`, Journey, Practice, Settings, `/offline`) and the `/_next/static` files their HTML and CSS name (read from the fetched HTML, so no build-time file list is needed). Pages are network-first (4 s, then the kept copy; else `/offline`) and kept under their path alone, so `/learn/play?l=…` is one entry; `/content/*.json` and `/audio/manifest.json` stale-while-revalidate; `/_next/static` and `/icons` cache-first; Next's `?_rsc=` page-data requests are left alone (if they fail Next reloads the page, which the worker serves). A first install starts at once; an update waits, and the toast `Updated — tap to reload` (in `PwaShell`) sends `SKIP_WAITING` and reloads. The shell page-cache is refreshed on every visit, so `sw.js` need not change per deploy; bump `VERSION` only to discard all caches. `PwaShell` (in the learn layout) registers in production only, listens for `beforeinstallprompt`, and asks the worker (`CACHE_URLS` message) to keep the lesson files of the current week and the next released main-path week (`lessonsToKeep` in `src/learning/offline.ts`, tested); any lesson opened is kept by the stale-while-revalidate route. `InstallCard` on Home: Android `beforeinstallprompt` button, or iPhone picture steps (Share, Add to Home Screen, Add; new `plus` icon); one-time via `dismissed` id `install-card` (`Not now`), hidden when installed (`display-mode: standalone`/`navigator.standalone`/`appinstalled`); other browsers see nothing (`installMode`, tested). Added `/offline` page and `next.config.ts` `headers()` so `sw.js` is never cached. **Deviation:** Playwright config now sets `serviceWorkers: "block"` for all specs (they stub files with `page.route`, which a worker bypasses); `e2e/offline.spec.ts` turns it back on and checks the manifest, offline Day 1 and journey page, and stale-while-revalidate (the changed file appears on the second fetch, via `context.route`). Not run: if the offline spec fails in the owner's run, the first suspects are the cache name `ee-content-1` it polls and `context.route` seeing the worker's requests. |
| 18 | Google sign-in | ✅ 2026-11-07 (lint, typecheck and unit tests pass; `npm run build` and `npm run test:e2e` not run: the sandbox blocks the port, owner runs both. `npm run db:ping` ran and fails cleanly with "MONGODB_URI is not set" as there is no `.env.local`; owner runs it after setting the variables) | Added `better-auth`, `mongodb`, `server-only`. `src/server/`: `db.ts` (`lazyDatabase`, `getDatabase`, `closeDatabase`; no `server-only`, so scripts can import it), `auth-urls.ts` (+ test; exact origins only), `auth-options.ts` (Google, MongoDB adapter, `oAuthProxy` only when `OAUTH_PROXY_SECRET` is set, verified email only, 30-day sessions, encrypted tokens), `auth.ts`, `permissions.ts` (`getUser()`), `indexes.ts` (+ test; Better Auth's indexes, `progress.userId` unique, `reports` by `dayId`+`at`, `clientErrors` by `at`). **Deviation:** `auth.ts` exports `getAuth()` (created on first use) instead of an `auth` constant, so `next build` and e2e work without the environment variables (the env check in `authUrls` would otherwise fail the build); the route and `getUser()` call it. `/api/auth/[...all]` connects first on every request. Scripts `scripts/db-ping.mts`, `db-setup.mts` and npm scripts `db:ping`, `db:setup`. Client: `src/lib/auth-client.ts`, `src/lib/account.ts` (`useAccount()`), pure `src/learning/account.ts` (`accountState`, `firstName`, `greetWithName`, `signInErrorKind`; tested). Settings → Account (`src/components/learn/Account.tsx`; `AccountView` is the testable pure view): skeleton while the session loads, Google-branded button (not restyled) when signed out, avatar (initial if no photo) + name + email + Sign out with a red confirmation dialog when signed in; a failed sign-in shows `?error=` text on Settings. Home greets "Good morning, Hari" (first Google name). `e2e/account.spec.ts` (phone) stubs `/api/auth/get-session`, `/sign-in/social` and Google, and checks the click leaves for `accounts.google.com`, and the signed-in/sign-out states. `.env.example` and README (variables table, "Run your own copy"). `/api/` is already ignored by the service worker. No sync yet (Step 19). The `src/lib/speak.test.ts` "reads Telugu and English runs" test is still flaky (failed in this run, passes alone). **Owner:** create the Atlas database/user and the Google OAuth client (consent screen links `/privacy`; redirect URIs `http://localhost:3000/api/auth/callback/google` and production), set the A8 variables in `.env.local` and Vercel, run `npm run db:setup` for `englisheasy` before pushing. |
| 19 | Progress sync | ✅ 2026-11-07 (lint, typecheck and unit tests pass; `npm run test:db`, `npm run build` and `npm run test:e2e` not run: no `MONGODB_URI` here and the sandbox blocks the port; owner runs all three) | `src/learning/merge.ts` (`mergeProgress`, `sameProgress`; tested incl. idempotence). Mistakes: a mistake on one side only is dropped when the other side answered it correctly after it was added, or lacks it although it has played that activity's day and was saved after it was added (that is how a Practice again clear on one device survives; no tombstones). A resume position is dropped when its day was completed after it. `src/server/progress-schema.ts` (zod, 512 KB cap), `progress-repo.ts` (`loadProgress`, `saveProgress`; upsert, the server stores and does not merge), `/api/progress` GET/PUT (401, 400, 413). `src/lib/sync.ts`: pure-ish `pull`/`push` with injected deps (tested) and `startProgressSync` (pull on sign-in, app open, `online` and when the app is shown again; debounced 3 s push after changes; failures retry on the next trigger); mounted by `ProgressSync` in the learn layout, only while signed in. `subscribeProgress` added to `progress-store.ts`. `SaveProgressCard` (guest with progress, dismissible, id `save-progress-card`) on Home and the lesson complete screen; `GoogleButton` is now exported with `returnTo`. `npm run test:db` + `vitest.db.config.mts` + `test/db.ts` (as Family Tree; main vitest config now excludes `*.db.test.ts`); `src/server/progress-repo.db.test.ts`. No new e2e spec (signed-in flow needs a database); signed-out flows are untouched. Known limit: sign out and sign in as a different Google user on the same phone merges the first learner's local progress into the second's account. **Owner:** with `.env.local` set, run `npm run test:db`, `npm run build`, `npm run test:e2e`, then the Try this check. |
| 20 | Report a problem and error log | ✅ 2026-11-07 (lint, typecheck and unit tests pass; `npm run test:db`, `npm run build`, `npm run test:e2e` and `npm run reports` not run: no `MONGODB_URI` here and the sandbox blocks the port; owner runs them) | `src/server/report-schema.ts` (zod; reports ≤ 1 KB, client errors ≤ 8 KB, stack cut to 2 KB; `readJsonBody`), `reports-repo.ts` (+ `groupBy`; `*.db.test.ts`), routes `/api/report` and `/api/client-error` (no sign-in; the index specs for `reports` and `clientErrors` already existed from Step 18). Phone side: `src/lib/reports.ts` (one report per activity per device and the offline queue in `localStorage`, flushed on app open and `online`; 4xx drops a report, network or 5xx keeps it) and `src/lib/report-error.ts` (5 per device per day, same message twice in a row sent once, never throws). `ReportButton` (⚑ in the player top bar; off an activity it is an empty slot so the bar does not shift; after a report the flag is replaced by the slot) and `ReportingShell` (in the learn layout: `error` / `unhandledrejection` listeners + queue flush). `ErrorScreen` now calls `reportError`. `/dev/error` (404 unless dev or `ENABLE_DEV_PAGES=1`) always throws, for the e2e. Deviations: `appVersion` is the first 7 characters of `NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA` (or "dev"); the error limit counts by the phone's local date; client error `at` is the server time, report `at` is the phone's time. `window.onerror` is only installed under `/learn` (the landing page stays script-free). `e2e/report.spec.ts` is new. `speak.test.ts` "reads Telugu and English runs" failed once in a full run and passed on rerun (flaky, not touched here). |
| 21 | Daily reminders | ✅ 2026-11-07 (lint, typecheck and unit tests pass; `npm run build` and `npm run test:e2e` not run: the sandbox blocks the port (the build got past compiling the new route and stopped at the port block); `npm run test:db` not run: no `MONGODB_URI` here; owner runs all three) | Added `web-push` 4 (ESM, named imports only; no bundled types, so `@types/web-push` is a dev dependency) and `npm run vapid` (`scripts/vapid.mts`). Pure `src/learning/reminder-due.ts`: `REMINDER_TIMES` (8, 13, 18, 20), `localParts` (day and hour in an IANA zone via `Intl`), `isDue` (right local hour, not practised today, not sent today; unknown zone never due), `reminderMode` (iPhone outside the installed app = install first, no push = unsupported, denied, ready); tested across India, New York and Sydney. Server: `reminders-schema.ts` (zod, 4 KB), `reminders-repo.ts` (`pushSubscriptions`; `saveSubscription` keeps `lastSentDay` and only moves `lastPracticeDay` forward), `reminders-send.ts` (`sendDueReminders` with injected store and push; 404/410 deletes the subscription; other failures are retried tomorrow, not marked sent), `reminder-auth.ts` (Bearer `REMINDER_SECRET`, constant-time; no secret set = always 401), routes `PUT`/`DELETE /api/reminders` and `POST /api/reminders/send`; indexes `endpoint` unique and `hour` added to `indexes.ts`. Phone: `src/lib/reminders.ts` (`enableReminder`, `disableReminder`, `refreshReminder`, `useReminderHour`, `useReminderMode`; the chosen hour is kept in `localStorage` key `englisheasy.reminder.v1`; waits at most 8 s for the service worker), `Reminder.tsx` (`ReminderSettings`, one-time `ReminderCard` on Home and Lesson complete after the first finished lesson, id `reminder-card`, and `ReminderShell` in the learn layout). The "short note first" is the hint text that sits above the buttons in Settings and on the card. The iPhone install steps were extracted from `InstallCard` as `IosInstallSteps`. `ReminderShell` re-sends the subscription (same PUT) when the Learn-in language or the last practised day changes, and turns reminders off locally if the notification permission was taken away or the subscription is gone; this is how `lastPracticeDay` is updated on the first answer of a day (no change in `progress-store.ts`; it reacts to `practiceDays`). `public/sw.js` has `push` (shows the notification, tag `daily-reminder`) and `notificationclick` (focuses or opens `/learn`); `VERSION` not bumped. `.github/workflows/reminders.yml` runs at minute 5 of every hour (and by hand). **Deviations:** the workflow runs at :05, not :00, so GitHub schedule delays still land in the same local hour; `/api/reminders/send` answers 500 if the three VAPID variables are missing; Playwright's `webServer.env` sets a throwaway `NEXT_PUBLIC_VAPID_PUBLIC_KEY` (read at build). `e2e/reminders.spec.ts` (phone) stubs the service worker registration with a fake `PushManager`, `Notification` and `/api/reminders`, and checks the PUT (hour, time zone, language, endpoint), Off (DELETE and unsubscribe) and the iPhone install-first message. **Owner:** run `npm run vapid` and set `NEXT_PUBLIC_VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` in `.env.local` and Vercel; add `REMINDER_SECRET` in Vercel and as a GitHub secret, `REMINDER_URL` as a GitHub variable; run `npm run db:setup` for `englisheasy`; run `npm run test:db`, `npm run build`, `npm run test:e2e`; after pushing, run the "reminders" workflow once by hand. |
| 22 | Polish and launch | ✅ 2026-11-07 (lint, typecheck and 430 unit tests pass; `npm run build` and `npm run test:e2e` not run: the sandbox blocks the port) | Added `e2e/polish.spec.ts` (phone project): elder walkthrough at A++ in Day and Night, Telugu and English, over Home, Journey, Practice, Settings and the player; it fails on any visible button or link under 52 px or with no name, horizontal overflow, a screen without an `h1`, and checks the `aria-live` region, a focus ring on Tab, and layout shift on Home under 0.1. It has not been run, so it may need small fixes. README now has Features, Screenshots, Adding content (Part E) and Launch check sections. No images are used in the app and the Telugu font is the self-hosted subset, so no code change for sizing. **Owner must:** run `npm run build`, then `npm run test:e2e` (fix or tell me what `polish.spec.ts` reports), copy the wanted screenshots from `test-results/screenshots/` into `docs/screenshots/` (not created yet), do the Lighthouse run on the production URL, and give the phone to a parent. |
| – | Production look, part 1: foundation and app shell | ✅ 2026-11-08 (lint, typecheck, 441 unit and 79 e2e tests pass) | See the section's Part 1 notes. Owner OK; committed with parts 2–5. |
| – | Production look, part 2: Home, onboarding, Journey, Practice, Settings | ✅ 2026-11-08 | See the section's notes. |
| – | Production look, part 3: the lesson player | ✅ 2026-11-08 | See the section's notes. |
| – | Production look, part 4: public pages | ✅ 2026-11-08 | See the section's notes. |
| – | Production look, part 5: the landing page | ✅ 2026-11-08 (lint, typecheck, 442 unit and 85 e2e tests pass) | See the section's notes. Also in this commit: the language and audio rules, headings in the system font with Noto Sans Telugu (Anek Telugu removed), the reminders e2e race fixed, CLAUDE.md refreshed. Owner OK; committed. Owner will suggest more improvements before part 6. |
| – | Phone polish (owner review, 2026-11-08) | ✅ 2026-11-08 (lint, typecheck, 442 unit tests pass; e2e 84 of 85 on the last full run, the one failure was the Journey capture waiting for "0%", since fixed; the next runs were blocked by the sandbox) | Owner's review on a phone. Landing: hero fits phones (screen-sized phone pictures, two-line headline, one-column grids), two-column footer, How it works and Easy on the eyes cards with the icon beside the title; the landing e2e fails on text past the screen edge and takes screenshots one screen at a time. Home: "This week" as a connected row of days with the week's name and "n of 7 done"; Home's grid is one column on phones (a wide card had widened the page). Suggestion cards (`Nudge`): small icon beside the title, × for Not now, tighter padding; Sign in with Google centred. Player: feedback puts Listen on the "Correct!" row; after Check it scrolls only if the answers are hidden, and only inside the step; each step starts at the top; the bottom padding follows the bar's real height (`--bar-h`). Role play: a good reply goes straight on (VISION §18). Don't say / Say without the label lines. Journey: one-line days, % only once started (no loading pills). Lesson pages: phone header with a home icon for My lessons; menus shift back inside the screen. Brand badge a shade deeper with a line. "Device" for the theme, "తెలుగు" in Learn in (`Bi` marks Telugu-script labels `lang="te"`), "practice" spelling. The polish e2e's overflow check compares with the screen width (an emulated phone zooms out and grows `innerWidth`). |
| – | Text size A- (owner request, 2026-11-08) | ✅ 2026-11-08 | A fourth text size below A: A- = 16 px root (A 18, A+ 20, A++ 22), first in Settings → Text size; the pre-paint script and saved settings accept it. Landing copy says four text sizes; VISION and README list A- / A / A+ / A++. |
| – | One recorded voice on every phone (owner request, 2026-11-08) | ✅ 2026-11-08 (lint, typecheck, 450 unit tests pass; `npm run audio` made all 120 Week 1 clips, 1.6 MB) | See the section. `spokenTexts` + `askText` (`src/learning/spoken.ts`), `speechText` and voice-keyed entries (`audio-manifest.ts`; the hash now ignores quote marks), `speak.ts` (one shared audio element, waits for the manifest the first time, falls back to the phone voice, `prefetchAudio`, `hasRecording`), `Narrate` loads the manifest on mount, `Choose` reads the whole prompt, the player prefetches the day's clips, `sw-routes.js` keeps `/audio/*.mp3` cache-first, `e2e/speech-stub.ts` serves an empty manifest. `msedge-tts` lives in `tools/audio/` (git-ignored install) because its preinstall script (`only-allow pnpm`) would break the Vercel install. |
| – | Free and open source, clearly (owner request, 2026-11-08) | ✅ 2026-11-08 | Landing leads with free: hero pill "100% free · No ads · Telugu help", "Free, with no sign-up and no ads" under Start, "Free for everyone" card (adds "The code is open source, too"), footer line "Free, and open source under the MIT license" with Source code (new `github` icon) and MIT license (new `code` icon) links; FAQ "Is EnglishEasy free?" names the MIT license, and the two outdated answers (slow for every sentence, phone voices) follow the recorded voice. Title and description lead with "spoken English through Telugu, free"; structured data adds a `WebApplication` (free, MIT, `sameAs` the repository). README says free and open source at the top, links the live site, and ends with a "Free and open source" section; its Launch check explains Search Console (URL-prefix property, HTML tag, submit `/sitemap.xml`). Sitemap and robots unchanged (already live-only, with every released lesson). Checked against Google's SEO Starter Guide: lesson pages now have a canonical link, link-preview tags and a `BreadcrumbList` (EnglishEasy › Day N: title) next to their `LearningResource`; `e2e/progress.spec.ts` checks both. Live site: https://learn-english-in-telugu.vercel.app. |
| – | README screenshots, real phone frames, clips in every case (owner, 2026-11-08) | ✅ 2026-11-08 | README shows the eight phone screens (`docs/screenshots/`, refreshed from `e2e/capture.spec.ts`) in a 4 × 2 table. `PhoneFrame` draws a status bar (time, camera pill, signal, battery; sized with container units) above the screen, so the camera no longer covers the app's top row; the social and link previews draw the same, and their pills read 100% free · Telugu help · No typing · Open source. The hero's decorative logo badge (it covered the second phone's button) is gone. Settings → Voice removed (`VoiceSettings.tsx` and its strings, the e2e test): the phone voice is an automatic backup only; `src/content/audio-coverage.test.ts` requires a clip for every spoken text of every released day. |
| – | A Journey page worth living in (owner request, 2026-11-08) | ✅ 2026-11-08 (lint, typecheck, 454 unit and 87 e2e tests pass) | See the section. Also: the lesson page's header leads to Journey at that lesson; the footer's section links work from lesson pages and privacy (`/#…`). |
| – | A compact lesson page progress (owner request, 2026-11-08) | ✅ 2026-11-08 (lint, typecheck, 454 unit and 87 e2e tests pass) | See the section. Also: the social and link previews show the whole question screen, Continue included. |
| – | Production look, part 6: finish | ☐ | |

## Content released

| Week | Days | Released | Notes |
|------|------|----------|-------|
| 1 | 1–7 | ✅ 2026-11-07 (all seven days written; owner to review on `/dev/lesson/<id>`) | Steps 3, 13–15 |
| 2 | 8–14 | ✅ 2026-11-08 (five lessons, the first Conversation Day, the review; 128 clips) | Question words: what/where, when/what time, who/whose, how, why/because; Conversation Day at a wedding; review "Question Time" with a question-word round. Written with `docs/CONTENT_PLAYBOOK.md`. |

---

# Part E — Adding content after launch

Each task is one fresh Sonnet session (medium effort). Each reads only CURRICULUM §1 (style guide), the §2 rows for its grammar, its own week, `src/content/types.ts`, and the most recent day file of the same kind as a model. Each fills in every lesson's `words`, `grammar` and `topics`, and ends with `npm test` (content rules and quality checks), `npm run build`, a look at `/dev/lesson/<id>` for each new day (the owner can review the week there in minutes), a quick e2e smoke of the new days, an entry in the "Content released" table, and the owner's OK before committing to `master`.

## E1. Detail a stage (before its first week is written)

Run this one in an **Opus** session (curriculum design benefits most from the stronger model); every other Part E task runs on Sonnet medium. Use what learners reported and where they struggled in earlier stages.

```text
Detail Stage S in docs/CURRICULUM.md.
Read CURRICULUM.md §1, §2 and the Stage S section only.
Expand each week of the stage into a lesson table in the format of §3 (ids, titles in English and Telugu, focus, sample sentences, role play), keeping the week order and grammar spiral.
Stop and show me the tables before committing.
```

## E2. Write a week (the usual request)

The step-by-step recipe (files, slot counts, generator positions, registration, checks, common fixes) is **`docs/CONTENT_PLAYBOOK.md`**; Week 2 (`src/content/main/w02/`) is the model.

```text
Write Week N of the main path, following docs/CONTENT_PLAYBOOK.md.
Read CURRICULUM.md §1, the §2 rows for this week's grammar, and the Week N entry.
Use src/content/main/w02/ as the model.
Write the five lessons and the Conversation Day, add the review day, register the week in course.ts and load.ts, mark it released.
When the checks pass, stop and show me the results.
```

## E3. Write or rewrite one day

```text
Write the day <id> (Week N, Day D), following Part E of docs/BUILD_PLAN.md.
Read CURRICULUM.md §1, the §2 rows for its grammar, and its row in the Week N table.
When the checks pass, stop and show me the results.
```

## E4. Fix reported problems

```text
Fix reported content problems, following Part E of docs/BUILD_PLAN.md.
Ask me to run `npm run reports` and paste the output. Open only the reported day files.
Fix wording only — keep every id and the order of core sentences (BUILD_PLAN A3).
When the checks pass, stop and show me what changed.
```

## E5. Write a track week

As E2, for `Track <id> Week <n>` (CURRICULUM §8), files under `src/content/tracks/<id>/`. The first released track week makes the track appear for learners automatically (Step 12); check the Week-13 card and Settings → My tracks once.

## E6. New activity type (for Stage 3: listen to a story, read a passage)

A small code step before the first Stage 3 week: add the type to `types.ts` and `schema.ts`, its component and tests (as in Steps 5–9), and its content rules; then write content with E2.
