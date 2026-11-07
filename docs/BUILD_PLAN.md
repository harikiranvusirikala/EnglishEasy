# EnglishEasy — Build Plan

The product is described in [VISION.md](VISION.md) (§ numbers below refer to it). This file says **how** it is built: architecture (Part A), rules every step follows (Part B), the steps (Part C) and the Progress table (Part D). Status lives only in the Progress table.

The build runs on **Sonnet 5.5 at medium effort**, one step per session, to fit a daily Claude budget. Steps are small, list exactly what to read, and end with checks.

---

# Part A — Architecture

## A1. Stack

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**, **Tailwind CSS v4** (wired like Family Tree: `@tailwindcss/turbopack` in `next.config.ts`, no PostCSS config). Don't enable `cacheComponents`.
- **Vercel** free tier (Hobby). The landing page and lesson overview pages are static; the lesson player is a client component.
- **zod** for content and API validation.
- **Better Auth** + Google + **MongoDB Atlas** free cluster (M0) — only for optional sign-in and progress sync (Steps 16–17). Everything before that works without a server.
- Browser APIs: `speechSynthesis` (voice), `SpeechRecognition` / `webkitSpeechRecognition` (speaking), `localStorage` (progress, settings), service worker (offline), `navigator.share` (sharing).
- Fonts: system stack for Latin text, **Noto Sans Telugu** self-hosted from npm (`@fontsource-variable/noto-sans-telugu` or `@fontsource/noto-sans-telugu`, whichever the mirror has). No Google Fonts CDN (blocked on the owner's machine).
- Tests: **Vitest** (+ Testing Library, jsdom) and **Playwright** (installed Chrome locally).
- No UI library, no icon package, no state library, no PWA library.
- **No AI at runtime** (VISION §18): no AI SDK, no paid speech service. Claude writes code and content at build time only. The running cost is zero apart from free tiers.

## A2. Folder layout

```text
src/app/
  layout.tsx                      root: <html lang="en">, fonts, theme + text-size script, metadataBase
  page.tsx                        landing page (static, SEO)                        Step 14
  privacy/page.tsx                privacy page                                      Step 14
  learn/layout.tsx                app shell: bottom tab bar                         Step 2
  learn/page.tsx                  Home                                              Step 10
  learn/journey/page.tsx          Journey                                           Step 10
  learn/day/[day]/page.tsx        lesson overview (static params, metadata)         Step 9
  learn/day/[day]/play/page.tsx   lesson player                                     Step 4
  learn/practice/page.tsx         Practice hub (+ mistakes/, role-plays/, sentences/, speaking/)   Step 10
  learn/settings/page.tsx         Settings                                          Step 2
  dev/ui/page.tsx                 component gallery, 404 outside dev/e2e            Step 2
  api/auth/[...all]/route.ts      Better Auth                                       Step 16
  api/progress/route.ts           GET/PUT synced progress                           Step 17
  manifest.ts, robots.ts, sitemap.ts, icon.svg, apple-icon.png, opengraph-image.png
src/content/
  types.ts                        content types (A3)
  schema.ts                       zod schema mirroring types.ts
  course.ts                       weeks list + lesson registry
  week-1/day-1.ts … day-7.ts      one lesson per file
src/learning/                     PURE logic, no browser APIs, fully unit-tested
  progress.ts                     Progress type, record answers, lesson/section/week/course %
  recommend.ts                    today's lesson, resume position
  speech-match.ts                 normalise + score a spoken answer
  voice-pick.ts                   choose the best voice from a list
  merge.ts                        merge two Progress objects (Step 17)
  shuffle.ts                      seeded shuffle for tiles/options
src/lib/                          browser services (thin wrappers, mockable)
  progress-store.ts               localStorage + useSyncExternalStore
  settings-store.ts               theme, text size, voice, "can't speak now"
  speak.ts                        text-to-speech
  listen.ts                       speech recognition
  sync.ts                         progress sync with the server (Step 17)
src/components/ui/                design kit (Step 2)
src/components/player/            Player + one file per activity type (Steps 4–8)
src/components/learn/             Home, Journey, overview, completion pieces (Steps 9–10)
src/components/landing/           landing page parts + content.ts (Step 14)
src/server/                       server-only: db.ts, auth.ts, auth-options.ts, progress-repo.ts (Steps 16–17)
public/sw.js                      service worker (Step 15)
scripts/site-images.mts           icons and link preview from icon.svg (Step 14)
e2e/                              Playwright specs + fixtures (speech stubs)
```

## A3. Content model (`src/content/types.ts`)

Content is TypeScript data, separate from the engine. Adding a lesson = adding a file and registering it in `course.ts`.

```ts
export type Bi = { en: string; te: string };            // English + Telugu
export type Example = { en: string; te: string };
export type Chip = { text: string; role: "who" | "action" | "what" | "when" }; // colour-coded pattern block

export type SectionKind = "warmup" | "learn" | "practice" | "speak" | "roleplay" | "wrapup";

export type Lesson = {
  day: number;                 // 1, 2, … (unique, also the URL)
  week: number;
  title: Bi;                   // "Yesterday" · "నిన్న"
  subtitle: string;            // "Past tense" (small, also for SEO)
  summary: Bi;                 // one line for cards
  seo: { title: string; description: string };  // description ≤ 160 chars
  pattern: Chip[];             // shown on overview + Learn
  keySentences: Example[];     // 3–4, saved to My Sentences on completion
  tryToday: Bi;                // real-life mission
  sections: Section[];
};

export type Section = { kind: SectionKind; optional?: boolean; activities: Activity[] };

type Base = { id: string };    // "d5-practice-3": unique forever (progress keys) — never rename a shipped id

export type Activity = Base & (
  | { type: "explain"; heading: Bi; te: string; bridge?: { te: string[]; en: Chip[] }; examples: Example[] }
  | { type: "whenToUse"; heading: Bi; items: { form: string; useFor: Bi; example: Example }[] }
  | { type: "dontSay"; wrong: string; right: string; why: string /* Telugu */ }
  | { type: "choose"; prompt: Bi; say?: string; options: string[]; answer: number; why?: string }
  | { type: "fillBlank"; sentence: string /* contains ___ */; te?: string; options: string[]; answer: number; why?: string }
  | { type: "arrange"; te?: string; answer: string; extra?: string[] }
  | { type: "translate"; te: string; answer: string; accept?: string[]; extra?: string[] }
  | { type: "match"; pairs: { en: string; te: string }[] }          // 3–4 pairs
  | { type: "findMistake"; sentence: string; wrongIndex: number /* word index */; fix: string; why: string }
  | { type: "listenChoose"; say: string; prompt: Bi; options: string[]; answer: number }
  | { type: "repeat"; say: string; te: string }
  | { type: "situation"; situation: Bi; expected: string[]; options: string[]; answer: number }
  | { type: "roleplay"; title: Bi; scene: Bi; partnerName: Bi; skills: { id: string; label: Bi }[]; turns: Turn[] }
);

export type Turn = {
  partner: string;             // spoken by the voice
  te: string;                  // Telugu meaning (tap to show)
  replies: { say: string; good: boolean; skill?: string }[];  // 2–3 tap options; good ones are also accepted by voice
  hint: Bi;
};
```

Rules (checked by `src/content/content.test.ts` for every lesson): ids unique across the course; `answer`/`wrongIndex` in range; `fillBlank.sentence` has exactly one `___`; `seo.description` ≤ 160 chars; tiles in `arrange`/`translate` come from `answer` split on spaces (punctuation stays on its word) plus `extra`; each roleplay turn has at least one good reply; every lesson has learn, practice, speak and roleplay sections; 12–18 activities per lesson.

## A4. Progress model (`src/learning/progress.ts`)

```ts
export type ActivityRecord = { correct: boolean; attempts: number; at: string /* ISO */; skipped?: true };
export type Progress = {
  version: 1;
  activities: Record<string, ActivityRecord>;   // present = done
  mistakes: Record<string, string>;             // activity id → ISO time added (Practice again)
  practiceDays: string[];                       // local "YYYY-MM-DD", newest last, keep 60
  position?: { day: number; activityId: string; at: string };
  updatedAt: string;
};
```

- Pure functions: `recordAnswer(progress, activityId, { correct, skipped }, now)`, `lessonStats(lesson, progress)` → `{ done, total, percent, complete, sections: [{kind, done, total, state}] }`, `weekStats`, `courseStats`, `nextActivity(lesson, progress)`, `recommendedLesson(course, progress)` (in-progress position first, else first incomplete lesson, else last lesson).
- States: `"not-started" | "in-progress" | "complete"` (§9.3).
- Completion rule per §9.2: all activities in non-optional sections done.
- Mistakes: added after the second wrong attempt; removed when that activity is answered correctly in Practice again.
- `localStorage` key `englisheasy.progress.v1`; settings key `englisheasy.settings.v1` (`theme`, `textSize`, `voiceURI`, `noSpeaking`). Theme key name must match the inline theme script.
- Time: never read `new Date()` while rendering. Progress and today's date are read only after hydration (`useSyncExternalStore` with a server snapshot of `null`, then skeletons), as Family Tree's `src/components/today.ts` does.

## A5. Speech

- **Voice pick** (`voice-pick.ts`, pure): saved `voiceURI` if still present → `en-IN` voices whose name is not in a known-male list (`Rishi`, `Ravi`, `Prabhat`, `Hemant`), known female names ranked first (`Veena`, `Isha`, `Neerja`, `Heera`, `Kajal`, Google's "English (India)") → known female `en-GB`/`en-US` (`Samantha`, `Karen`, `Moira`, `Tessa`, `Serena`, `Google UK English Female`, `Microsoft Aria`, `Microsoft Zira`) → any `en-*`. Voices load asynchronously (`voiceschanged`).
- Rates: normal `0.9`, slow `0.65`. Cancel any current speech before speaking.
- **Speech match** (`speech-match.ts`, pure): lower-case, strip punctuation, expand contractions (`i'm`→`i am`, `don't`→`do not`, `didn't`, `won't`→`will not`, `can't`, `it's`, `i'll`, …), drop fillers (`um`, `uh`, `ok so`). Score = longest common word subsequence ÷ expected word count, best over all accepted answers. `≥ 0.85` great, `≥ 0.6` good (accepted), else try again.
- **Recognition** (`listen.ts`): `lang = "en-IN"`, single result, 8 s timeout; reports `unsupported`, `denied`, `no-speech`, or the transcript (with alternatives — score all of them).

## A6. Sign-in and sync (Steps 16–17)

- Copy Family Tree's approach (files named in those steps): Better Auth with Google, MongoDB adapter, `lazyDatabase()`/`getDatabase()`, `authUrls(env)`, `getUser()`, `oAuthProxy` for previews, indexes created by `npm run db:setup` (Better Auth's Mongo adapter creates none).
- Databases: `englisheasy_dev` (local), `englisheasy_preview` (previews), `englisheasy` (production).
- Collection `progress`: `{ userId, data: Progress, updatedAt }`, unique on `userId`.
- `GET /api/progress` and `PUT /api/progress` (`getUser()` → 401; zod-validated, body ≤ 256 KB). The client merges; the server stores.
- `mergeProgress(a, b)`: per activity keep the record with the later `at` (attempts = max); mistakes = union minus ids answered correctly after they were added; practiceDays = sorted union, last 60; position = later `at`.
- Sync: on sign-in and on app open → GET, merge with local, save locally, PUT if changed; after each change → PUT debounced 3 s; offline → retry on `online`.

## A7. Environment variables

| Name | Where | Step |
|------|-------|------|
| `GTM_ID` | Vercel Production only (read at build) | 14 |
| `MONGODB_URI`, `MONGODB_DB` | `.env.local`, Vercel (Production `englisheasy`, Preview `englisheasy_preview`) | 16 |
| `BETTER_AUTH_SECRET` (different per environment), `BETTER_AUTH_URL` (Production only) | `.env.local`, Vercel | 16 |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | `.env.local`, Vercel | 16 |
| `OAUTH_PROXY_SECRET` (same in Production and Preview) | Vercel | 16 |

Never name an app variable `ANTHROPIC_*`. Every variable goes in `.env.example` and README.

---

# Part B — Rules every step follows

## B1. Working agreement

1. One step per session. Start a fresh session (`/clear`) and paste the prompt from B4.
2. Read only what the step's **Read first** lists. Find sections with `grep -n '^#' <file>`; read with `offset`/`limit`. Don't read VISION.md or this file whole.
3. Family Tree (`~/GitHub/Family Tree with AI`) is a pattern library: read only the files a step names, copy the idea, adapt names. Never import from it.
4. Before writing Next.js code, check the relevant guide in `node_modules/next/dist/docs/` (Next.js 16 differs from older versions).
5. At the end of the step: run the **Done when** checks, then **stop** — show test results and the **Try this** list, and wait for the owner's OK.
6. After the OK: commit straight to `master` (initial development; the owner will say when a change should go on its own branch for a Vercel preview). The owner pushes; Vercel deploys `master` to production.
7. Commit messages never include a `Co-Authored-By` or any other AI attribution trailer.
8. A deviation from this plan (a library behaves differently, a better simpler way) is written in the step's **Notes** in the Progress table, and in Part A if it changes the architecture.
9. If a step can't finish within the day's budget, stop at a clean point, commit the finished part to `master` only if the owner agrees, and write in the Progress notes exactly what remains.

## B2. UI rules (the quality bar for every screen)

- **Mobile-first.** Design at 390 px wide. On wider screens, learning screens are a centred column (`max-w-xl`); the landing page may use the width.
- **No text inputs anywhere.** Buttons, switches, word tiles, voice.
- **Labels:** the `Bi` component renders English (bold) then Telugu (smaller, `lang="te"`). The English word comes first in the DOM, so tests find buttons by their English name.
- **Text size:** root font size 18 px (A), 20 px (A+), 22 px (A++), set on `<html>` before first paint; use `rem` everywhere. Telugu line-height ≥ 1.7.
- **Touch targets** ≥ 52 px high (`min-h-13`), ≥ 8 px apart. Full-height screens use `h-dvh`.
- **Colours** (Tailwind names, each with a `dark:` twin — every colour class needs one):
  - page `bg-stone-50` / `dark:bg-stone-950`; cards `bg-white` / `dark:bg-stone-900`; borders `border-stone-200` / `dark:border-stone-800`; text `text-stone-900` / `dark:text-stone-100`, muted `text-stone-600` / `dark:text-stone-400`.
  - primary `bg-teal-700 text-white` / `dark:bg-teal-400 dark:text-stone-950`.
  - correct `emerald` with ✓; try again `amber` with ↻; red only for destructive actions (Sign out confirmation).
  - pattern chips: who `sky`, action `emerald`, what `violet`, when `amber` — always with their Telugu label.
- **Theme:** Day / Night / Follow phone; `dark:` follows a `dark` class on `<html>` set by an inline script before first paint (Family Tree `src/components/theme-script.ts`).
- **Motion:** 150–200 ms fades/slides, `motion-reduce:animate-none`. Confetti on lesson/week complete is CSS-only and skipped with reduced motion.
- **Player layout:** top bar (✕ close, progress bar, `n / total`, section name); activity in the middle; primary button fixed at the bottom (Check → Continue). Feedback panel slides up from the bottom and is announced (`aria-live="polite"`).
- **Loading:** skeletons with the final shape; no layout jumps when progress arrives after hydration.
- **Icons:** hand-drawn SVGs in `src/components/ui/icons.tsx` only.
- **Accessibility:** every button has a name; visible focus ring; colour never the only signal; images have alt text; Telugu text marked `lang="te"`.
- **Never combine a class string with a conflicting utility** (`${button} px-2`): add a variant instead (Tailwind's CSS order decides, not class order).
- **Links to other sites** open in a new tab with `rel="noopener noreferrer"` and an `aria-label` ending "(opens in a new tab)".

## B3. Testing and budget habits

- Pure logic (`src/learning`, `src/content`) gets unit tests first. Activity components get Testing Library tests using role queries. Each user-facing step adds or extends one Playwright spec on the **phone** project.
- e2e stubs (`e2e/speech-stub.ts`, added in Step 6): `addInitScript` replaces `speechSynthesis` (records what was spoken) and `SpeechRecognition` (returns `window.__nextTranscript`, or errors on request). No e2e test depends on a real voice or microphone.
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

# Part C — Steps

Each step: **Goal · Read first · Build · Done when · Try this · Owner**. Sizes: S (small), M (medium), L (large — has a checkpoint halfway).

## Step 1 — Skeleton and tooling (M)

**Goal:** an empty, deployable Next.js app with every tool wired.

**Read first:** this file Part A1–A2, B1, B3. Family Tree: `package.json` (scripts and versions), `.npmrc`, `next.config.ts`, `vitest.config.mts`, `playwright.config.ts` (projects, Chrome channel), `eslint.config.mjs`, `src/app/globals.css` (first 30 lines), `vercel.json`.

**Build:**
- Create the app in the repo root (TypeScript, App Router, `src/`, Tailwind v4 via `@tailwindcss/turbopack`, ESLint). Copy `.npmrc` (registry-neutral lockfile). Add `.DS_Store`, `.env*.local`, `test-results/`, `playwright-report/`, `.next/` to `.gitignore`.
- Scripts: `dev`, `build`, `start`, `lint`, `typecheck` (`next typegen && tsc --noEmit`), `test`, `test:watch`, `test:e2e`.
- Vitest (jsdom default, Testing Library, `@/` alias). Playwright: projects `phone` (iPhone 13 emulation) and `desktop` (Chrome), production build on port 3100, `channel: "chrome"` unless `CI`.
- Fonts: system stack; Noto Sans Telugu from npm imported in `globals.css`, applied to `:lang(te)`.
- `src/app/page.tsx` placeholder ("EnglishEasy — coming soon" + link to `/learn`), `src/app/learn/page.tsx` placeholder. `vercel.json` pinning the framework. Short `README.md` (what it is, commands).
- One unit test (a trivial pure helper) and one e2e test (both pages load, Telugu text renders).

**Done when:** `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e` pass; `grep -c '"resolved"' package-lock.json` prints `0`.

**Try this:** `npm run dev`, open `http://localhost:3000` on the computer and on the phone (same Wi-Fi, `http://<mac-ip>:3000`).

**Owner:** allowlist `npm run build`, `npm run dev`, `npm run test:e2e` for this project (exact match, as for Family Tree). Import the GitHub repo into Vercel (framework Next.js); production branch `master`.

## Step 2 — Look and feel foundation (L)

**Goal:** the design kit, Day/Night theme, text size and app shell that every later screen uses.

**Read first:** Part B2; VISION §2, §10 (tab bar line), §10.8, §14. Family Tree: `src/components/theme-script.ts`, `src/components/theme.ts`, `src/components/ThemeMenu.tsx`, `src/components/ui/button.ts`, `src/components/ui/card.ts`, `src/components/ui/Dialog.tsx`, `src/components/ui/Toast.tsx`, `src/components/ui/icons.tsx` (first 60 lines), `src/components/use-hydrated.ts`.

**Build:**
- `src/lib/settings-store.ts` (localStorage + `useSyncExternalStore`), inline script in the root layout that applies theme (`dark` class) and text size (root font size) before first paint.
- `src/components/ui/`: `button.ts` (primary, secondary, ghost, danger; sizes), `card.ts`, `Bi.tsx`, `ProgressBar.tsx` (label + `aria-valuenow`), `StepList.tsx` (✓ ● ○ list), `Dialog.tsx`, `Toast.tsx`, `Skeleton.tsx`, `Switch.tsx`, `SegmentedControl.tsx` (theme and text size pickers), `icons.tsx` (home, map, dumbbell/practice, gear, speaker, turtle, mic, check, retry, close, hint, share, chevron).
- **Checkpoint:** kit done, unit tests pass.
- `src/app/learn/layout.tsx`: bottom tab bar (Home, Journey, Practice, Settings; icon + `Bi`; active tab marked `aria-current="page"`), safe-area padding.
- `src/app/learn/settings/page.tsx`: Theme, Text size (live preview), placeholders for Voice and Account (later steps), Buy me a coffee link (`SUPPORT_URL = "https://buymeacoffee.com/harikiranvusirikala"` in `src/components/support.ts`).
- `src/app/dev/ui/page.tsx`: every kit component in every state (404 unless `next dev` or `ENABLE_DEV_PAGES=1`, which Playwright's web server sets).

**Done when:** unit tests for settings store and components; e2e `theme.spec.ts`: switch Night and A++, reload, no flash (class present before hydration), choices kept. Screenshots: `ui-day.png`, `ui-night.png`, `settings-phone.png`.

**Try this:** Settings on the phone: switch Day/Night/Follow phone and A/A+/A++; reload; open `/dev/ui` in both themes.

## Step 3 — Content model, engine and Day 1 (M)

**Goal:** the lesson data format, the pure learning engine and the first lesson's content.

**Read first:** Part A3, A4; VISION §4, §5, §9.2, §11.1 (Day 1 row).

**Build:**
- `src/content/types.ts`, `schema.ts` (zod), `course.ts` (Week 1 with title `Bi`, days 1–7; days not yet written are listed as `comingSoon` so Journey can show them).
- `src/content/week-1/day-1.ts`: full Day 1 per VISION §4.1 and §11.1 (no warm-up on Day 1): explain with Telugu bridge, whenToUse, dontSay, 7–8 practice activities covering choose, fillBlank, arrange, translate, match, findMistake; speak section (listenChoose, 2 repeat, situation); roleplay (4 turns); wrapup handled by the player (no activities needed — the wrap-up screen uses `keySentences` and `tryToday`).
- `src/learning/progress.ts`, `recommend.ts`, `shuffle.ts` (seeded, so tests and SSR are stable).
- `src/content/content.test.ts` (A3 rules for every registered lesson) and unit tests for every engine function, including resume position and the completion rule with an optional section.

**Done when:** `npm test`, lint and typecheck pass.

**Try this:** read `day-1.ts` — are the sentences natural and the Telugu clear?

## Step 4 — Lesson player I: cards and tap questions (L)

**Goal:** the player frame and the simplest activity types, playable for Day 1 (progress kept in memory for now).

**Read first:** Part B2 (player layout); VISION §4.2–§4.3, §5, §10.4; `src/content/types.ts`; `src/learning/progress.ts` (exports only).

**Build:**
- `src/app/learn/day/[day]/play/page.tsx` + `src/components/player/Player.tsx`: walks sections and activities in order, top bar, section intro screen (section name + what's inside), section summary (`7 / 8 correct`), feedback panel, retry-once rule, close with confirm ("Your progress is saved").
- Activities: `ExplainCard` (pattern chips + bridge animation + examples), `WhenToUseCard`, `DontSayCard`, `Choose`, `FillBlank`. 🔊 buttons render but are disabled until Step 6.
- `src/components/learn/PatternChips.tsx` (reused on overview and landing).
- **Checkpoint:** frame + cards working.
- Placeholder for not-yet-built activity types: a "Coming soon — Skip" card so Day 1 is playable end to end.

**Done when:** component tests for each activity (right answer, wrong twice → answer shown); e2e `player.spec.ts` (phone): open Day 1, go through Learn and the first practice questions, see the section summary. Screenshots: `player-explain.png`, `player-feedback.png` (+ night versions).

**Try this:** play Day 1 on the phone; get one wrong on purpose twice.

## Step 5 — Lesson player II: word tiles, match, find the mistake (M)

**Goal:** the building activities, all by tapping.

**Read first:** Part B2; VISION §4.4, §5; `src/content/types.ts`; `src/components/player/Player.tsx` (activity props only); `src/components/player/Choose.tsx` (as the pattern).

**Build:**
- `Arrange` and `Translate`: tiles in a seeded shuffle; tap to move a tile into the answer line, tap again to return it; Check compares words (case and final punctuation ignored); `accept` alternatives for Translate.
- `Match`: tap a Telugu card then an English card; matched pairs lock with ✓; a wrong pair shakes (no shake with reduced motion).
- `FindMistake`: sentence as tappable words; then shows the fix and the Telugu reason.
- `Hint` button on Arrange and Translate (reveals the first word).

**Done when:** component tests (including duplicate words like "the … the"); e2e completes Day 1's Practice section. Screenshots: `player-arrange.png`, `player-match.png` (+ night).

**Try this:** on the phone, build a sentence, undo a tile, use Hint.

## Step 6 — Voice (M)

**Goal:** every English sentence can be heard, with a good female Indian-English voice.

**Read first:** Part A5; VISION §6 (Voice paragraph); `src/components/ui/icons.tsx` (names only); `src/app/learn/settings/page.tsx`.

**Build:**
- `src/learning/voice-pick.ts` (pure, unit-tested with fake voice lists from Android, iPhone, Windows, Mac) and `src/lib/speak.ts` (`speak(text, { slow })`, cancels current speech, waits for `voiceschanged`).
- `SpeakButtons` (🔊 + 🐢) enabled everywhere a sentence appears; the role-play partner and `listenChoose` auto-play once.
- `ListenChoose` activity.
- Settings → Voice: list English voices (Indian first), sample button ("Hello! How are you today?"), saved choice.
- `e2e/speech-stub.ts` (both synthesis and recognition stubs, see B3).

**Done when:** unit tests for voice pick; e2e: tapping 🔊 speaks the right text at the right rate; Settings voice choice is kept. Screenshot: `settings-voice.png`.

**Try this:** on the phone, tap 🔊 and 🐢; open Settings → Voice and try the voices — is the default a clear female voice?

## Step 7 — Speaking (M)

**Goal:** speaking activities that are forgiving and never block.

**Read first:** Part A5; VISION §6; `src/lib/speak.ts`; `e2e/speech-stub.ts`; `src/components/player/ListenChoose.tsx` (as the pattern).

**Build:**
- `src/learning/speech-match.ts` (pure) with a broad unit-test table (contractions, fillers, extra words, Indian-English recognition quirks like "I'm going" vs "I am going").
- `src/lib/listen.ts` and a `MicButton` (idle → listening pulse → result), first-use explanation of the microphone permission in Telugu.
- `Repeat` and `Situation` activities: Great / Good / Try again; after two tries "Choose instead"; unsupported/denied → "Choose instead" straight away with a short Telugu note.
- Settings switch "I can't speak now" (speaking activities become choosing).

**Done when:** unit tests; e2e with stubbed transcripts: good answer, poor then good, denied permission → choose instead. Screenshots: `player-speak.png`, `player-speak-night.png`.

**Try this:** on the phone, say the sentence right, say it wrong, deny the microphone permission once.

## Step 8 — Role play (M)

**Goal:** the conversation experience and its summary.

**Read first:** VISION §7; `src/content/types.ts` (roleplay part); `src/components/player/Situation.tsx`; `src/lib/listen.ts` (exports).

**Build:**
- `RolePlay` activity: chat bubbles (partner left with name, learner right), partner line spoken automatically, "Telugu meaning" toggle, mic or tap one of the replies, Hint, gentle correction on a not-good reply ("A better reply: …"), then the next turn.
- `RolePlaySummary`: skills Good / Practice more, Speaking x/10, Conversation x/10 (pure scoring function in `src/learning/roleplay-score.ts`, unit-tested).

**Done when:** tests; e2e plays Day 1's role play by tapping and by stubbed voice. Screenshots: `roleplay.png`, `roleplay-summary.png` (+ night).

**Try this:** play the role play once by voice and once by tapping.

## Step 9 — Saving progress, overview and lesson complete (L)

**Goal:** progress survives reloads, lessons resume, and finishing feels good.

**Read first:** Part A4; VISION §9, §10.3, §10.5; `src/learning/progress.ts`, `recommend.ts` (exports); `src/components/player/Player.tsx`; Family Tree `src/components/today.ts`.

**Build:**
- `src/lib/progress-store.ts` (versioned localStorage, `useSyncExternalStore`, server snapshot `null`); the player records every answer and the position; practice day recorded on the first answer of the day.
- Resume: opening a lesson's player continues at `nextActivity`; replaying a finished lesson starts at the beginning without losing completion.
- **Checkpoint:** saving + resume.
- `src/app/learn/day/[day]/page.tsx`: static (`generateStaticParams` over written lessons, `generateMetadata` from `lesson.seo`), shows title, pattern chips, the Learn content (server-rendered), and a client progress card (%, section StepList, Start / Continue / Review).
- Wrap-up screen = lesson complete screen (VISION §10.5): CSS confetti, done list, key sentences with 🔊, Try it today, Next lesson, Continue / Review buttons.

**Done when:** unit tests for the store (corrupt or old data falls back safely); e2e: answer half of Day 1, reload, Continue resumes at the same activity; finish → complete screen; overview shows 100%. Screenshots: `overview.png`, `lesson-complete.png` (+ night).

**Try this:** on the phone, leave a lesson halfway, close the browser, come back.

## Step 10 — Home, Journey and Practice (L)

**Goal:** the screens that answer "what should I do now?".

**Read first:** VISION §3 (pacing), §8, §10.1, §10.2, §10.6, §10.7; `src/learning/recommend.ts`, `progress.ts` (exports); `src/lib/progress-store.ts` (exports); `src/content/course.ts`.

**Build:**
- Home: greeting by time of day (after hydration), Welcome back / Today's lesson card, This week strip (tap a day → overview), "You practised N days this week", Practice tiles with counts. First visit: a short welcome card ("Start Day 1").
- Journey: weeks with status and %, days with %, "More weeks coming soon".
- **Checkpoint:** Home + Journey.
- Practice hub and pages: Practice again (replays mistake activities with the player's components), Role plays (all, any lesson), My Sentences (key sentences of completed lessons, 🔊 and 🎤), Speaking only (repeat drills from completed lessons).
- Week complete screen after Day 7's wrap-up (VISION §10.6) with Share (`navigator.share`, else copy link — a button, no input).

**Done when:** e2e: fresh visitor → Home → Day 1 → back Home shows progress; a mistake appears in Practice again and disappears after a correct answer. Screenshots: `home.png`, `home-night.png`, `journey.png`, `practice.png`.

**Try this:** use the app for five minutes as a parent would; does Home always make the next step obvious?

## Step 11 — Content: Days 2 and 3 (S)

**Goal:** two more complete lessons.

**Read first:** VISION §4, §11.1 (Days 2–3 rows); `src/content/types.ts`; `src/content/week-1/day-1.ts` (as the model).

**Build:** `day-2.ts`, `day-3.ts` (with warm-ups from earlier days), registered in `course.ts`. Same shape and size as Day 1; natural sentences, simple Telugu; every activity reuses the lesson's core sentences.

**Done when:** `content.test.ts` passes; e2e smoke opens each lesson's player.

**Try this:** play Day 2 on the phone.

## Step 12 — Content: Days 4 and 5 (S)

As Step 11, for Days 4–5 (VISION §11.1). Day 4 must include the "I am knowing" dontSay; Day 5 the irregular past verbs in a match activity.

## Step 13 — Content: Days 6 and 7 (M)

As Step 11, for Days 6–7. Day 7 (weekly review): a timeline activity (use `match` or `choose` with the four time words), 8–10 mixed review questions across Days 1–6 in new combinations, and the longest role play (6 turns, video call with a grandchild). Check the Week complete screen appears after Day 7.

## Step 14 — Landing page and search engines (L)

**Goal:** a static, fast, search-ready front door that converts a visitor into a learner.

**Read first:** VISION §15, §13 (privacy points); Family Tree: `src/components/landing/content.ts`, `content.test.ts`, `Faq.tsx`, `Hero.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/server/site.ts`, `src/components/GoogleTagManager.tsx`, `src/server/tag-manager.ts`, `scripts/site-images.mts`.

**Build:**
- `src/components/landing/content.ts`: `TITLE`, `DESCRIPTION` (≤ 160 chars, tested), `FAQ` (rendered and used in structured data), `structuredData()` (WebSite, Course with Week 1's lessons, FAQPage), `GOOGLE_SITE_VERIFICATION` (empty until the owner adds it).
- Landing sections: Hero (headline in English + Telugu, "Start Day 1 — free" or "Continue Day N" after hydration, phone mock-up of the player), How it works (Learn → Practise → Speak → Role play), Week 1 lesson list (links to overview pages), Why it works for parents (no typing, Telugu help, big text, works offline), FAQ, footer (Privacy, Buy me a coffee).
- `src/app/privacy/page.tsx` (plain language; what is stored on the phone and, when signed in, in the account).
- `robots.ts`/`sitemap.ts`: allow and list landing, privacy and lesson overviews in production (`VERCEL_ENV === "production"`) only; `Disallow: /` elsewhere and for `/learn/*/play`, `/learn/settings`, `/dev`.
- `metadataBase`, Open Graph and Twitter metadata; lesson overviews get their own (from `lesson.seo`) and `LearningResource` structured data.
- `src/app/icon.svg` (hand-written: a speech bubble with "A" and "అ"), `npm run images` → `favicon.ico`, `apple-icon.png`, PWA icons 192/512 + maskable, `opengraph-image.png` (1200×630, < 300 KB).
- Google Tag Manager on `/` only, from `GTM_ID` at build time, skipped when unset; never on `/learn`.

**Done when:** unit tests (content, robots/sitemap per environment, GTM id check); e2e `landing.spec.ts` (phone + desktop). Screenshots: `landing-phone.png`, `landing-night.png`, `landing-desktop.png`; view `opengraph-image.png`.

**Try this:** open the landing page on the phone; paste the production link into WhatsApp (after the push) to see the link preview.

**Owner:** add `GTM_ID` to Vercel Production; after the production deploy, verify the domain in Google Search Console (give the tag to add to `content.ts`) and submit the sitemap.

## Step 15 — Installable app and offline (M)

**Goal:** add to Home screen; lessons work without internet.

**Read first:** VISION §2 (point 7), §15 (installable); `node_modules/next/dist/docs/` PWA guide (search `grep -ril "manifest" node_modules/next/dist/docs | head`).

**Build:**
- `src/app/manifest.ts` (name, short name, `start_url: "/learn"`, `display: "standalone"`, theme colours for both themes, icons from Step 14).
- `public/sw.js` (hand-written): versioned cache; precache the app shell and every lesson page/player route + their JS on install (list generated at build time into `public/sw-manifest.json` by a small script, or fetched from the build manifest — pick the simpler that works and note it); navigations network-first with cache fallback; static assets cache-first; offline fallback page.
- Register in production only; update flow: new version → toast "Updated — tap to reload".
- Home: one-time "Install EnglishEasy" card — Android: `beforeinstallprompt` button; iPhone: short picture instructions (Share → Add to Home Screen); hidden when already installed (`display-mode: standalone`).

**Done when:** unit tests for the service worker's routing decisions (pure function); e2e: manifest served and valid; after one visit, going offline (`context.setOffline(true)`) still opens Day 1's player.

**Try this:** on Android Chrome, install the app, turn on airplane mode, open a lesson.

## Step 16 — Google sign-in (L)

**Goal:** optional sign-in, ready for sync.

**Read first:** Part A6, A7; VISION §13; Family Tree: `src/server/auth.ts`, `src/server/auth-options.ts`, `src/server/auth-urls.ts`, `src/server/db.ts`, `src/server/permissions.ts` (`getUser` only), `src/app/api/auth/[...all]/route.ts`, `scripts/db-setup.mts`, `scripts/db-ping.mts`, `src/components/auth/SignInButton.tsx`, the "Sign-in" and "Deployment" sections of `.claude/CLAUDE.md`.

**Build:**
- `src/server/db.ts`, `auth.ts`, `auth-options.ts`, `auth-urls.ts` (exact origins only), `/api/auth/[...all]`, `getUser()`, `oAuthProxy` on Vercel when `OAUTH_PROXY_SECRET` is set.
- `scripts/db-ping.mts`, `scripts/db-setup.mts` (Better Auth's indexes + `progress.userId` unique) run with `node --import tsx --env-file-if-exists=.env.local`; npm scripts `db:ping`, `db:setup`.
- Settings → Account: Google button following Google's branding (signed out), avatar + name + email + Sign out (signed in). Home greets with the Google first name.
- `.env.example`; README "Run your own copy" (Atlas, Google OAuth client with redirect URIs, Vercel variables).

**Done when:** unit tests for `authUrls` and settings account states; e2e: the sign-in button redirects towards Google (stop there); `npm run db:ping` works.

**Try this:** sign in with Google locally and on production; sign out.

**Owner:** create the Atlas databases and a database user; create the Google OAuth client (consent screen links the privacy page; redirect URIs for localhost, production and the proxy); set the A7 variables in `.env.local` and Vercel; run `npm run db:setup` for `englisheasy` (and `englisheasy_preview` once previews are used) before pushing.

## Step 17 — Progress sync (M)

**Goal:** signed-in learners keep their progress across devices; guests lose nothing when they sign in.

**Read first:** Part A4, A6; VISION §13; `src/learning/progress.ts` (types); `src/lib/progress-store.ts`; `src/server/db.ts`, `src/server/auth.ts` (exports).

**Build:**
- `src/learning/merge.ts` (pure, thorough unit tests: disjoint, overlapping, mistakes cleared on one device, position, idempotence `merge(a, a) = a`).
- `src/server/progress-repo.ts` and `/api/progress` (GET/PUT, 401 signed out, zod, size limit).
- `src/lib/sync.ts`: merge on sign-in and app open, debounced PUT, retry when back online; nothing breaks while offline or signed out.
- "Save your progress with Google" card on the lesson complete screen (after Day 1) and on Home for guests with progress; dismissible (remembered).

**Done when:** unit tests; `*.db.test.ts` for the repository (`npm run test:db`, as in Family Tree); e2e signed-out flows unchanged.

**Try this:** do half of Day 2 as a guest on the phone, sign in, open the app on the computer, sign in — the progress is there.

## Step 18 — Polish and launch (M)

**Goal:** release quality, checked as an elder would use it.

**Read first:** VISION §2, §14, §17; Part B2.

**Build / check:**
- Elder walkthrough on the phone project at A++ in Night and Day: every screen has one clear next step, nothing is cut off, every tap target ≥ 52 px (add an e2e check that measures buttons).
- Accessibility pass: focus order and rings, `aria-live` feedback, landmark names, `lang="te"` on Telugu.
- Performance: no layout shift on Home and the player; images sized; fonts subset.
- Final screenshots of every main screen (day + night) into `docs/screenshots/` and the README.
- README complete (features, screenshots, run your own copy, environment variables).

**Done when:** all tests pass; the owner's Lighthouse run on the production URL (phone) scores Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100.

**Try this:** give the phone to a parent with no instructions; note where they hesitate.

---

# Part D — Progress

| Step | Name | Status | Notes |
|------|------|--------|-------|
| 0 | Vision, plan, CLAUDE.md | ✅ 2026-11-07 | Opus 5.5 planning session |
| 1 | Skeleton and tooling | ☐ | |
| 2 | Look and feel foundation | ☐ | |
| 3 | Content model, engine and Day 1 | ☐ | |
| 4 | Lesson player I | ☐ | |
| 5 | Lesson player II | ☐ | |
| 6 | Voice | ☐ | |
| 7 | Speaking | ☐ | |
| 8 | Role play | ☐ | |
| 9 | Saving progress, overview, lesson complete | ☐ | |
| 10 | Home, Journey and Practice | ☐ | |
| 11 | Content: Days 2–3 | ☐ | |
| 12 | Content: Days 4–5 | ☐ | |
| 13 | Content: Days 6–7 | ☐ | |
| 14 | Landing page and search engines | ☐ | |
| 15 | Installable app and offline | ☐ | |
| 16 | Google sign-in | ☐ | |
| 17 | Progress sync | ☐ | |
| 18 | Polish and launch | ☐ | |
