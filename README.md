# TIS Homepage Redesign

An animated redesign of the Tulas International School homepage (https://tis.edu.in/).
Built with React 18, Vite, Tailwind CSS v4 and Framer Motion. Copy is taken from the live site.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

Node 18+ is required.

## Features

All four optional features are implemented:

- **Custom cursor** (`Cursor.jsx`): a spring-driven ring that grows over links, buttons and anything marked `data-cursor`. It only mounts on devices with a fine pointer, so touch screens keep the normal behaviour.
- **Scroll-triggered reveals** (`Reveal.jsx`): staggered entrances for sports cards, rankings and stats. Runs once per element.
- **Theme switcher** (`ThemeToggle.jsx`, `useTheme.js`): animated switch. The choice is saved in localStorage, and an inline script in `index.html` applies it before first paint to avoid a flash.
- **Scroll progress bar** (`ScrollProgress.jsx`): `useScroll` smoothed with `useSpring`.

Also: a word-by-word headline reveal and parallax disc in the hero, a CSS-only marquee, and stat counters that count up when they scroll into view.

## Structure

```
src/
  components/   one file per section or UI piece
  data/         content.js holds all copy and lists
  hooks/        useTheme.js
  App.jsx       page composition
  index.css     design tokens (CSS variables) and global styles
```

## Decisions worth knowing

- Colours are CSS variables switched by `data-theme`, so components never need `dark:` variants.
- `prefers-reduced-motion` is respected: reveals, counters, parallax and the marquee all turn off.
- The parents carousel uses CSS scroll-snap instead of a slider library, which keeps the dependency list to React and Framer Motion.
- Content lives in `data/content.js`, so copy changes never touch components.

## Not included

- Photos, logos, videos and the OTP enquiry form from the live site. The enquiry form needs a backend, so the page links to the helpline and the admission portal instead.
- Navigation points to sections on this page, not the inner pages of the live site.

## Deploy

Vercel or Netlify: import the repo, build command `npm run build`, output directory `dist`.
