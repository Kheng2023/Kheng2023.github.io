# kheng2023.github.io — Personal Portfolio

Live site: **https://kheng2023.github.io**

Personal portfolio for Yong Kheng Beh — software engineer and former doctor.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5.5**
- **MUI v6** — dark-mode only
- **Framer Motion v11** — scroll-reveal animations, spring physics
- **Canvas 2D** — lightweight animated particle network background (no Three.js)
- **GitHub Actions** — auto-deploys to GitHub Pages on every push to `main`

## Project Structure

```
src/
├── components/
│   ├── layout/        # NavBar, Footer
│   ├── sections/      # Hero, About, Projects, Experience, Education, DoctorCareer
│   └── ui/            # ProjectCard, SectionWrapper, ThreeBackground (Canvas 2D)
├── data/              # projects.ts, experience.ts, education.ts
├── theme/             # MUI dark theme
├── App.tsx
└── main.tsx
public/images/         # Static assets
.github/workflows/     # deploy.yml — GitHub Actions Pages deploy
_archive/              # Old vanilla HTML/CSS/JS site (kept for reference)
```

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.
