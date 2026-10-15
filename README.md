# AD0-E128 Prep Console

Interactive study console for the Adobe AEM Sites Developer Professional (AD0-E128) exam.
Installable as a PWA, works offline, and runs entirely client-side.

## What's in it

> **Oct 14, 2026 update — 6-week sprint to the exam.** `/plan` now runs a 6-week sprint
> (Oct 15 – Nov 25) with full teach content per week, a "ready to book" checklist, and
> the daily 30-minute routine. The original 12-week plan is kept in a collapsed archive
> with your taught marks intact. `/guide` opens with the 11 core rules plus path, log and
> Dispatcher lookup tables. `/score` shows official practice exam history with a
> trust note per section. `/drill` gained 20 new self-authored items (q51–q70, weighted
> to Debugging and Development), the glossary gained 18 terms, and `/weak` picks up 9
> new tracked areas once, without touching your existing entries.

- **Date-aware plan.** The console tracks a `startDate` (set automatically to the day
  you first open it — editable any time under "edit start date" in `/plan`) and
  computes which of the 12 weeks you're calendar-wise "supposed" to be on, shown as
  `Day X · Week Y of 12` with a pace note (behind/on/ahead of calendar pace, compared
  against how many weeks you've actually marked taught). The matching week gets a
  `TODAY` marker in the list. This is separate from marking weeks taught — one tracks
  the calendar, the other tracks what you've actually done.
- **`/plan`** — 6-week sprint (plus archived 12-week plan), blueprint-weighted (S1–S5), each week expands into
  full `/teach` content: mechanism → analogy → real artifact → 6.5-vs-cloud delta →
  hands-on SDK task → key takeaways. Mark weeks taught with a one-tap **undo** if you
  misclick (toast appears for 6s, or toggle it back off any time from the same button).
- **`/drill`** — 70 self-authored practice items (not reproductions of real exam
  content), section-filterable, length 5 to all 70, session timers from 15 minutes up
  to a full **2h30m mock-exam** length. Confidence rating (1–5) is mandatory on every
  answer; scoring follows the rule that a right answer at low confidence still counts
  as a miss, and a wrong answer at high confidence gets flagged as a misconception.
  Each question has a **"plain English"** toggle that restates the ask in plain
  language without giving away the answer, plus a **jargon glossary** (43 terms) that
  auto-detects terms used in the question *and its answer options*, tap to decode.
- **`/review`** — recap deck of every takeaway from weeks you've marked taught, most
  recent first. Meant to be skimmed before a drill session, not a full re-read.
- **`/weak`** — editable weak-area tracker, plus a misconception log that
  auto-populates from drill sessions (wrong answers given at high confidence).
- **`/gaps`** — coverage meter per blueprint section, and status on the topics that
  started as zero-coverage gaps (testing, GraphQL, SPA Editor, Query Builder vs
  JCR-SQL2, i18n, repoinit, Cloud Manager quality gates, CFM-in-code) — now all authored,
  tracked green once drilled at least once.
- **`/score`** — session history with confidence-distribution bars per session.
- **`/guide`** — data-driven study guide, computed live from your actual `/weak`,
  `/gaps`, and `/score` data rather than static text: **Focus Now** ranks the 5
  blueprint sections by exam weight × how often recent drill answers in that section
  were misses, lucky guesses, or misconceptions, and surfaces open `/weak` threads
  plus undrilled zero-coverage topics; **Distractor Map** cross-links AEM 6.5-vs-Cloud
  Service traps the exam still uses as wrong-answer bait, filterable by section;
  **Reference Cards** condense every taught week's takeaways into one scannable
  card per section.

## Deploy to GitHub Pages

1. Create a new **public** repo (e.g. `aem-prep`) — skip if you already have one.
2. Upload every file in this folder to the repo root (not a subfolder):
   `index.html`, `app.js`, `manifest.json`, `sw.js`,
   `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `.nojekyll`
3. Repo **Settings → Pages** → Source: *Deploy from a branch* →
   Branch: `main`, Folder: `/ (root)` → **Save**.
4. Wait ~1 minute, then open `https://<your-username>.github.io/<repo>/`

The repo must be public for Pages on a free account. `.nojekyll` matters — without it
GitHub Pages runs Jekyll and can mangle the build. It's hidden by most unzip tools,
so confirm it actually uploaded.

## Updating an existing deployment

Easiest path (no git needed): go to your repo on github.com → **Add file → Upload
files** → drag in the files from this folder that changed → since the filenames
match what's already there, GitHub stages them as replacements → commit directly to
`main`. Give the commit a message describing what changed.

If you use git locally instead:
```bash
git clone https://github.com/<you>/<repo>.git
cd <repo>
# copy the new files from this folder over the repo root, overwriting existing ones
git add -A
git commit -m "Update AD0-E128 console"
git push
```

**Either way, `sw.js`'s `CACHE_VERSION` must change on every update** (already bumped
in this package) or the old service worker keeps serving the cached build and your
changes won't show up. If you edit the source yourself later, bump it by hand:
`aem-prep-v3` → `aem-prep-v4`, etc.

After redeploying, the site needs **two loads** to show the update on a phone/browser
that already had it installed — the first load installs the new service worker in the
background, the second activates it. This is normal PWA behavior, not a bug.

## Install on your phone

Open the Pages URL on your phone, then:

- **Android / Chrome:** an "Install app" prompt appears, or menu → *Add to Home screen*
- **iOS / Safari:** Share → *Add to Home Screen*
  (iOS only offers this in Safari, not Chrome)

Launches fullscreen with no browser chrome, works offline after the first load.

## Your progress

Progress is stored in the browser's `localStorage` on each device — it does **not**
sync between your phone and desktop, and it is separate from the Claude artifact
version of this tool if you're also using that. Pick one as your primary study home.

To move progress between devices, open the browser console (F12) and run:

```js
// on the old device — copy the printed output
exportProgress()

// on the new device — paste the JSON string in place of the placeholder below
importProgress('<paste JSON here>')
```

Clearing site data / browser storage will erase your progress.

## Note on the practice items

All 70 practice questions are original, written for this tool. They are not
reproductions of real exam or licensed practice-test content, and none of the
underlying answer keys were assumed — the higher-risk claims were checked against
Apache Sling, OSGi, and Adobe's own documentation before being included.

## Rebuilding from source

`src/app.readable.js` is the editable source: the full bundle (React included),
formatted. Plan weeks, teach content, rules, drill items and glossary terms are
plain data arrays near the top of the app code (search for `SPs`, `SMs`,
`CORE_RULES`, `NEW_DRILLS`). After editing, rebuild and redeploy:

```bash
npx esbuild src/app.readable.js --minify --target=es2018 --outfile=app.js
```

Then bump `CACHE_VERSION` in `sw.js` and push.
