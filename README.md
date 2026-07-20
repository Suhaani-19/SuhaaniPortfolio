# Suhaani Garg — Portfolio

A full-stack Next.js 14 portfolio. The hero is an animated agent-pipeline
diagram (mirroring your Multi-Agent Research Assistant project), stats are
pulled live from the GitHub and LeetCode APIs, and the contact form saves
to MongoDB and emails you via Nodemailer.

## 1. Before you touch code

Edit `lib/data.ts` — this is the single source of truth for all content:

- `profile` — your name, tagline, email, GitHub username, and **your real
  LeetCode username** (currently a placeholder — search for
  `REPLACE_WITH_YOUR_LEETCODE_USERNAME`)
- `projects` — replace every `REPLACE_REPO_NAME` and `REPLACE_DEMO_LINK`
  with your actual GitHub repo URLs and live demo links
- `certifications` — add real certificate links where you have them (Claude
  101, Coursera certs, etc. all give you a shareable URL)
- `skills` — already matches your resume, edit freely

## 2. Run it locally

You'll need [Node.js 18+](https://nodejs.org) installed.

```bash
npm install
cp .env.local.example .env.local
```

Now fill in `.env.local` (see section 3), then:

```bash
npm run dev
```

Open http://localhost:3000 — you should see the site with hot reload.

## 3. Setting up the backend (contact form)

The contact form needs two things: a database to save messages, and email
credentials to notify you. Both are free.

### MongoDB Atlas (free tier)

1. Go to https://www.mongodb.com/cloud/atlas/register and create a free
   account. 
2. Create a free "M0" cluster (takes ~3 minutes to spin up).
3. Under **Database Access**, create a database user with a username and
   password.
4. Under **Network Access**, add `0.0.0.0/0` (allow access from anywhere) —
   fine for a portfolio project.
5. Click **Connect → Drivers**, copy the connection string. It looks like:
   `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/`
6. Add `portfolio` as the database name before the `?`:
   `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio`
7. Paste this into `.env.local` as `MONGODB_URI`.

### Gmail App Password (for sending you email notifications)

1. Turn on 2-Step Verification on your Google account if it isn't already:
   https://myaccount.google.com/signinoptions/two-step-verification
2. Go to https://myaccount.google.com/apppasswords, generate a new app
   password (name it "portfolio").
3. Copy the 16-character password.
4. In `.env.local`:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_APP_PASSWORD` = the 16-character app password (not your normal
     Gmail password)

### GitHub token (optional, but recommended)

Unauthenticated GitHub API calls are limited to 60/hour, shared across
everyone visiting your site. A personal access token bumps that to 5,000/hour.

1. Go to https://github.com/settings/tokens → **Generate new token
   (classic)**.
2. No scopes needed (public data only) — just give it a name and generate.
3. Paste it into `.env.local` as `GITHUB_TOKEN`.

## 4. Deploy (Vercel — free, made by the Next.js team)

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Suhaani-19/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. Go to https://vercel.com, sign in with GitHub, click **Add New →
   Project**, and import the repo.
3. In the **Environment Variables** section during setup, add the same
   four values from your `.env.local`: `MONGODB_URI`, `EMAIL_USER`,
   `EMAIL_APP_PASSWORD`, `GITHUB_TOKEN`.
4. Click **Deploy**. In about a minute you'll get a live URL like
   `suhaani-garg.vercel.app`.
5. Optional: add a custom domain under Project → Settings → Domains.

Every time you `git push` to `main`, Vercel redeploys automatically.

## 5. Project structure

```
app/
  layout.tsx          # fonts + metadata
  page.tsx             # assembles all sections
  globals.css
  api/
    contact/route.ts   # saves message to MongoDB + emails you
    github/route.ts    # live GitHub stats
    leetcode/route.ts  # live LeetCode stats (proxies LeetCode's GraphQL)
components/            # one file per section
lib/
  data.ts               # <- all your content lives here
  mongodb.ts            # DB connection helper
models/
  Contact.ts            # Mongoose schema for form submissions
```

## 6. Common tweaks

- **Change colors**: `tailwind.config.ts` → `theme.extend.colors`
- **Change fonts**: `app/layout.tsx`
- **Add a project**: add an object to the `projects` array in `lib/data.ts`
  — the grid picks it up automatically
- **Remove the LeetCode/GitHub live stats** if you'd rather not expose them:
  delete `components/Stats.tsx` and its `<Stats />` line in `app/page.tsx`
