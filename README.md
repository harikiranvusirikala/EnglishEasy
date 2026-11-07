# EnglishEasy

A mobile-first English learning and speaking app for Telugu-speaking adults and elders. An installable web app (Next.js on Vercel); guest first, optional Google sign-in to sync progress. No AI at runtime.

Plan and vision are in `docs/` (start with `docs/BUILD_PLAN.md`).

## Commands

```bash
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm test             # Vitest; one file: npx vitest run <file>
npm run build
npm run db:ping      # check the MongoDB connection (.env.local)
npm run db:setup     # create the indexes in MONGODB_DB
npm run reports      # latest problem reports and client errors (.env.local)
npm run test:db      # repository tests against MongoDB (needs MONGODB_URI; uses throwaway englisheasy_test_* databases)
npm run vapid        # print a new VAPID key pair for daily reminders
npm run images       # favicon, icons and link preview from src/app/icon.svg
npm run test:e2e     # Playwright on port 3100 (projects: phone, desktop)
```

## Environment variables

| Name | Where | Use |
|------|-------|-----|
| `GTM_ID` | Vercel Production only (read at build) | Google Tag Manager container, e.g. `GTM-ABC123`; loaded on the landing page only. Unset: not loaded. |

| `MONGODB_URI`, `MONGODB_DB` | `.env.local`, Vercel | Atlas connection string and database: `englisheasy_dev` locally, `englisheasy_preview` for previews, `englisheasy` in Production. |
| `BETTER_AUTH_SECRET` | `.env.local`, Vercel | Signs sessions. A different value in every environment (`openssl rand -base64 32`). |
| `BETTER_AUTH_URL` | `.env.local` (`http://localhost:3000`), Vercel Production only | The app's own address; previews use Vercel's own hosts. |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | `.env.local`, Vercel | The Google OAuth client. |
| `OAUTH_PROXY_SECRET` | Vercel Production and Preview (same value), only if previews are used | Lets previews sign in through production. |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` | `.env.local`, Vercel | Daily reminders (web push). Run `npm run vapid` for the keys; the subject is `mailto:` your email. |
| `REMINDER_SECRET` | Vercel and the GitHub repository secrets (same value); GitHub variable `REMINDER_URL` = the production address | The hourly workflow `.github/workflows/reminders.yml` calls `POST /api/reminders/send` with it. |

Each one added in a later step goes in `.env.example` and here.

## Run your own copy

1. **MongoDB Atlas.** Create a free cluster, a database user with read and write access, and allow network access from anywhere (Vercel has no fixed address). Copy the connection string into `MONGODB_URI`; set `MONGODB_DB` to `englisheasy_dev` locally and `englisheasy` in Vercel Production (`englisheasy_preview` for Preview).
2. **Google OAuth client.** In Google Cloud Console, set up the OAuth consent screen (app name EnglishEasy, the privacy page `/privacy` as the privacy policy link), then create a Web application client. Authorised redirect URIs: `http://localhost:3000/api/auth/callback/google` and `https://<your production domain>/api/auth/callback/google`. Copy the client id and secret into `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
3. **Local.** `cp .env.example .env.local`, fill it in, then `npm run db:ping` (checks the connection) and `npm run db:setup` (creates the indexes; run it once for each database, `englisheasy` before the first production deploy).
4. **Vercel.** Add the variables in the table above for Production (and Preview if used); `BETTER_AUTH_URL` in Production only; a different `BETTER_AUTH_SECRET` per environment. Vercel's system variables (`VERCEL_ENV`, `VERCEL_URL`, `VERCEL_BRANCH_URL`, `VERCEL_PROJECT_PRODUCTION_URL`) must be exposed. Deploy `master`.
5. **Daily reminders.** `npm run vapid`, put the three lines in `.env.local` and Vercel; add `REMINDER_SECRET` (any long random text) in Vercel and as a GitHub repository secret, and `REMINDER_URL` as a GitHub repository variable; run `npm run db:setup`. After pushing, run the "reminders" workflow once by hand from the GitHub Actions tab.

`npm run db:ping` and `npm run db:setup` read `.env.local`.
