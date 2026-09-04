# CodeCraft Academy — Training Institute Website

A React marketing website for a software training institute, built with Vite and React Router. Soft, minimal design focused on readability and smooth navigation.

## Tech stack

- React 18
- React Router 6 (multi-page navigation)
- Vite (dev server + build)
- Plain CSS with a small design-token system (no heavy UI framework)

## Pages

- **Home** — hero, why-us perks, featured courses, languages, how-it-works, CTA
- **Courses** — all courses with live search + category filters
- **Languages** — the core languages taught (C, C++, C#, Python, Java)
- **About** — the story and values behind the institute
- **Contact** — validated enquiry/enrollment form (client-side)

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Editing content

All course and language content lives in `src/data/courses.js`. Update that one
file to change cards across the whole site — no need to touch components.

## Project structure

```
src/
  components/    # Navbar, Footer, CourseCard, ScrollToTop
  data/          # courses.js — central content source
  hooks/         # useReveal — scroll reveal animation
  pages/         # Home, Courses, Languages, About, Contact, NotFound
  styles/        # global.css — design tokens + base styles
```

## Deployment

The site is a static SPA. Build with `npm run build` and deploy the `dist/`
folder to any static host.

- **Netlify** — the included `public/_redirects` handles SPA routing.
- **Vercel** — the included `vercel.json` handles SPA routing.
- **GitHub Pages / other** — ensure all routes fall back to `index.html`.

### Connecting the contact form

The contact form currently validates and shows a success message client-side.
To make it live, wire `handleSubmit` in `src/pages/Contact.jsx` to an email
service or backend endpoint (e.g. Formspree, EmailJS, or your own API).
