# kheng2023.github.io — Personal Portfolio

Live site: **https://kheng2023.github.io**

Personal portfolio for Yong Kheng Beh — software engineer and former doctor.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5.5**
- **MUI v6** — light theme
- **Framer Motion v11** — scroll-reveal animations, spring physics (respects the OS "reduce motion" setting)
- **Canvas 2D** — lightweight animated particle network background (no Three.js)
- **Build-time prerendering** — the page ships as static HTML so search engines and LLMs can read it
- **GitHub Actions** — auto-deploys to GitHub Pages on every push to `main`

## Project Structure

```
src/
├── components/
│   ├── layout/        # NavBar, Footer
│   ├── sections/      # Hero, About, Projects, Experience, Education, DoctorCareer
│   └── ui/            # ProjectCard, SectionWrapper, ThreeBackground (Canvas 2D)
├── data/              # experience, education, projects, medical — all page content lives here
├── theme/             # MUI theme
├── seo.ts             # JSON-LD, llms.txt and sitemap.xml, generated from src/data
├── entry-server.tsx   # Build-time render of <App /> to HTML + critical CSS
├── App.tsx
└── main.tsx           # Browser entry: hydrates the prerendered HTML
scripts/
├── prerender.mjs      # Writes the rendered page and SEO files into dist/
└── og-image.html      # Source of the link-preview card (public/images/og-card.png)
public/                # Static assets, robots.txt
.github/workflows/     # deploy.yml — GitHub Actions Pages deploy
```

## Development

```bash
npm install
npm run dev      # http://localhost:5173 (client-rendered, no prerendering)
npm run build    # production build with prerendering → dist/
npm run preview  # serve dist/ to check the production build
```

To change site content, edit the files in `src/data/`. The page, JSON-LD, `llms.txt` and
sitemap all read from there, so they stay in sync.

## How the build works

`npm run build` runs three steps:

1. `vite build`: the normal browser bundle.
2. `vite build --ssr src/entry-server.tsx`: a Node version of the app (into `dist-ssr/`).
3. `node scripts/prerender.mjs`: renders the app to HTML and injects it, MUI's CSS, font
   preloads and the JSON-LD into `dist/index.html`, then writes `llms.txt` and
   `sitemap.xml`. It fails the build if the placeholders in `index.html` go missing.

In the browser, `main.tsx` **hydrates** that HTML: React attaches to the existing markup
instead of re-creating it.

### Rule: the first render must match on server and browser

Hydration only works if the first render produces the same HTML at build time as in the
visitor's browser. So components must not read browser-only or time-dependent values
(`window`, `document`, `localStorage`, `new Date()`, `Math.random()`) **during render**.
Read them in `useEffect`, which only runs in the browser, after hydration. `Hero.tsx`
does this for the time-of-day greeting and the particle canvas.

Breaking this rule shows up as React errors #418/#423/#425 in the browser console of the
production build (`npm run build && npm run preview`). The dev server doesn't prerender,
so it won't catch them.

## Link-preview image

`public/images/og-card.png` is rendered from `scripts/og-image.html`. After editing the
text, re-render it from the repo root:

```bash
google-chrome --headless=new --hide-scrollbars --window-size=1200,630 \
  --screenshot=public/images/og-card.png "file://$PWD/scripts/og-image.html"
```

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.
