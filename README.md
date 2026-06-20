# Jathniel Alexander — Logo Design Portfolio (Next.js)

A case-study driven logo design portfolio, built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          → fonts, metadata, root HTML shell
  globals.css          → design tokens (colors, etc.) + Tailwind v4 theme
  page.tsx             → assembles all sections in order
  components/
    Nav.tsx             → header nav + mobile menu (client component)
    Hero.tsx            → hero section with animated construction grid
    IntroStrip.tsx       → three-principles strip
    CaseStudy.tsx        → reusable case study block (used 3x in page.tsx)
    Gallery.tsx          → gallery grid, pulls from lib/data.ts
    About.tsx            → about section
    Contact.tsx          → footer / contact
    Reveal.tsx            → scroll-reveal wrapper (IntersectionObserver)
lib/
  data.ts              → gallery item data (typed)
public/
  logos/               → all logo images, served from site root as /logos/*.jpg
```

## Deploying (Vercel — recommended)

This is a real Next.js app, not a static HTML site — it needs a build step
(`next build`) to compile. **Do not** try to upload files directly through
GitHub's web/mobile uploader and expect it to work as-is the way a plain
HTML site would. Instead:

1. Push this whole folder to a GitHub repository (use Git on a computer —
   `git init`, `git add .`, `git commit`, `git push` — or GitHub Desktop).
2. Go to vercel.com, sign in, and click **Add New → Project**.
3. Import your GitHub repo. Vercel auto-detects Next.js — leave the default
   build settings as-is.
4. Click **Deploy**. Vercel runs `npm install` and `npm run build` on its own
   servers (which have full internet access, so the Google Fonts used here
   will load fine — this is different from a sandboxed/offline environment).
5. You'll get a live `*.vercel.app` URL. Every future `git push` to the
   connected branch auto-redeploys.

### Why images won't 404 this time

All logo images live in `public/logos/`. In Next.js, anything inside
`public/` is served from the site's root automatically — so
`public/logos/file.jpg` becomes `/logos/file.jpg` at runtime, no matter
where the file sits in your repo otherwise. The code already references
images this way (e.g. `/logos/1c2afd5d...jpg`), so as long as the
`public/logos/` folder is committed with the rest of the repo, the paths
will always resolve correctly — there's no manual path-matching step like
there was with the plain HTML version.

## Updating content

- **Case study text** (briefs, rationale, tags) — edit directly inside
  `app/page.tsx`, in the three `<CaseStudy ... />` blocks.
- **Gallery images/captions** — edit `lib/data.ts`.
- **Contact email** — set to `jathnielalexander@gmail.com` in
  `app/components/Contact.tsx`. Update there if it ever changes.
- **Colors** — all defined as CSS variables at the top of
  `app/globals.css` (`--bg`, `--fg`, `--signal`, etc.).

## Notes

- The two NDA case studies intentionally withhold client names per your
  instruction — only the industry and project rationale are shown.
- Charlotte Dave is named per your confirmation that this client can be
  credited publicly.
