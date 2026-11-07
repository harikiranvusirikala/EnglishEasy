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
- **Audio hook:** `speak` and `narrate` first look up the text in `/audio/manifest.json` (text hash → recorded file); if found, they play the file instead of the phone voice. No manifest exists at launch; adding recorded audio later (FUTURE_FEATURES.md) changes no screen.
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
- **Colours** (Tailwind names, each with a `dark:` twin — every colour class needs one):
  - page `bg-stone-50` / `dark:bg-stone-950`; cards `bg-white` / `dark:bg-stone-900`; borders `border-stone-200` / `dark:border-stone-800`; text `text-stone-900` / `dark:text-stone-100`, muted `text-stone-600` / `dark:text-stone-400`.
  - primary `bg-teal-700 text-white` / `dark:bg-teal-400 dark:text-stone-950`.
  - correct `emerald` with ✓; try again `amber` with ↻; red only for destructive actions (Sign out confirmation).
  - pattern chips: who `sky`, action `emerald`, what `violet`, when `amber` — always with their label.
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

---

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
| 11 | Home and Journey | ☐ | |
| 12 | Practice hub and tracks | ☐ | |
| 13 | Content: Days 2–3 | ☐ | |
| 14 | Content: Days 4–5 | ☐ | |
| 15 | Content: Day 6, weekly review, Day 7 | ☐ | |
| 16 | Landing page and search engines | ☐ | |
| 17 | Installable app and offline | ☐ | |
| 18 | Google sign-in | ☐ | |
| 19 | Progress sync | ☐ | |
| 20 | Report a problem and error log | ☐ | |
| 21 | Daily reminders | ☐ | |
| 22 | Polish and launch | ☐ | |

## Content released

| Week | Days | Released | Notes |
|------|------|----------|-------|
| 1 | 1–7 | ☐ | Steps 3, 13–15 |

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

```text
Write Week N of the main path, following Part E of docs/BUILD_PLAN.md.
Read CURRICULUM.md §1, the §2 rows for this week's grammar, and the Week N entry.
Use src/content/types.ts and the latest lesson and conversation files as models.
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
