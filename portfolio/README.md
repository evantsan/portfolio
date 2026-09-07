# Portfolio

A personal developer portfolio built with React, TypeScript, Vite, Tailwind
CSS, and Framer Motion. Fully static — no backend, no database, no
authentication — designed to be hosted for free on GitHub Pages.

---

## 1. Prerequisites

- [Node.js](https://nodejs.org/) version 18 or later (includes npm)
- A GitHub account
- Git installed on your computer

Check your Node version with:

```bash
node -v
```

---

## 2. Install and run locally

From inside the project folder:

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with
hot-reload — save a file and the browser updates instantly.

Other commands:

```bash
npm run build     # builds the production site into /dist
npm run preview   # serves the built /dist folder locally, so you can
                   # double-check the production build before deploying
```

---

## 3. Personalize the site

Everything you need to change lives in three files in `src/data/`. You
should not need to edit any component (`.tsx`) file just to update your
own information.

### 3a. Your info — `src/data/siteData.ts`

Open this file and replace every placeholder value: `name`, `initials`,
`title`, `tagline`, `bio`, `location`, `school`, `focus`,
`currentlyLearning`, `email`, `github`, and `linkedin`.

- Leave `location`, `school`, `focus`, or `currentlyLearning` as an empty
  string (`""`) to hide that line from the About section.
- Leave `linkedin` as an empty string to hide the LinkedIn link everywhere
  on the site (navbar, contact, footer).

### 3b. Your projects — `src/data/projects.ts`

The file currently contains four example projects clearly labeled as
placeholders. To add your own:

1. Add a screenshot to `public/projects/` (see section 5 below for details).
2. Copy one of the existing objects in the `projects` array.
3. Update `title`, `description`, and `technologies`.
4. Set `image` to your screenshot's filename.
5. Update `githubUrl`.
6. If you have a live demo, set `liveUrl`. If not, delete that line —
   it's optional and the "Live Demo" button will simply not render.

You can delete the four example projects once you have real ones to
replace them with.

### 3c. Your skills — `src/data/skills.ts`

Each category has a `category` name and a `skills` array of strings. Add
or remove entries freely, or add a whole new category by copying the
object shape. No percentages or ratings are used — just the tag itself.

---

## 4. Customizing the look

- **Accent color**: change the `accent` value in `tailwind.config.js`
  (`theme.extend.colors.accent`). Everything that uses the accent color —
  buttons, links, the pinned note in the hero — updates automatically.
- **Fonts**: the site pairs a serif (Fraunces, for headlines) with a sans
  (Manrope, for body text) and a monospace (JetBrains Mono, for code and
  tech tags). To swap a typeface, change it in both `tailwind.config.js`
  (`theme.extend.fontFamily`) and the Google Fonts link in `index.html`.

---

## 5. Where project images go

Screenshots live in `public/projects/`, not `src/assets/`. This is
intentional: files in `public/` are copied as-is into the final build, and
`src/data/projects.ts` references them through
`import.meta.env.BASE_URL`, which automatically matches whatever `base`
path you configure for GitHub Pages (see section 6). That means your
images keep working correctly whether you're running the site locally or
viewing it live at `yourusername.github.io/your-repo-name/`, with no
broken paths.

Four placeholder SVGs (`project-1.svg` through `project-4.svg`) are
already in that folder so the site looks complete out of the box. Replace
them with real screenshots (`.png` or `.jpg` work fine too) and update the
`image` filename in `projects.ts` to match.

---

## 6. Deploying to GitHub Pages

### Step 1 — Set your repository name in `vite.config.ts`

Open `vite.config.ts` and find this line:

```ts
base: "/YOUR-REPOSITORY-NAME/",
```

Replace `YOUR-REPOSITORY-NAME` with your actual GitHub repository name,
keeping the leading and trailing slashes. For example, if your repo is
`github.com/yourusername/portfolio`:

```ts
base: "/portfolio/",
```

If instead your repository is named exactly `yourusername.github.io`
(a "user site" served at the domain root, with no subfolder), use:

```ts
base: "/",
```

### Step 2 — Push the project to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

### Step 3 — Turn on GitHub Pages for this repository

1. On GitHub, go to your repository's **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**
   (not "Deploy from a branch").

That's it — no further settings are needed. The workflow file at
`.github/workflows/deploy.yml` is already configured to build the site
and deploy it automatically.

### Step 4 — Push and watch it deploy

Every push to `main` now triggers the workflow automatically. Watch its
progress under your repository's **Actions** tab. Once it finishes, your
site will be live at:

```
https://yourusername.github.io/YOUR-REPOSITORY-NAME/
```

(or `https://yourusername.github.io/` for a user site).

---

## 7. Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # Automatic GitHub Pages deployment
├── public/
│   ├── favicon.svg
│   └── projects/                  # Project screenshots go here
├── src/
│   ├── components/                # One component per page section
│   ├── data/                      # Edit these files to update content
│   │   ├── siteData.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── App.tsx                    # Assembles the page from sections
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts                 # Set your repo name here (see section 6)
├── tailwind.config.js             # Colors and fonts
└── package.json
```

## 8. Adding a whole new section later

The site is built so new sections don't require restructuring what
already exists:

1. If the section needs its own content, add a data file in `src/data/`.
2. Build the section as a new component in `src/components/`.
3. Import it in `src/App.tsx` and render it wherever it should appear.
4. If it belongs in the navbar, add it to the `NAV_LINKS` array at the top
   of `src/components/Navbar.tsx`.

This is how you'd eventually add things like hackathons, awards, or a
resume link without rewriting the rest of the site.
