# LandPro Excavations — Website

Static site (HTML + CSS + JS, no build step). Open `index.html` or host the `landpro/` folder on any static host (GitHub Pages, Netlify, etc.).

## Quick edits
- **Phone, email, service area, cities, social links** → `CONFIG` at the top of `js/main.js`
  (also update the `tel:`/`mailto:` values and the JSON-LD block in `index.html` for SEO).
- **Colors / fonts** → CSS variables at the top of `css/styles.css`.
- **Text (English)** → directly in `index.html`. **Spanish** → `ES` object in `js/main.js` (same keys as `data-i18n`).
- **Quote form** → create a form on formspree.io and set `action="https://formspree.io/f/XXXX"` on `#quoteForm`.

## Photos (drop into `img/`, placeholders show until then)
| File | Where |
|---|---|
| `hero.jpg` | Hero background (landscape, ≥1920px wide) |
| `about.jpg` | About section (portrait 4:5) |
| `before.jpg` / `after.jpg` | Before/after slider (same framing, 16:8) |
| `project-1.jpg` … `project-6.jpg` | Project gallery (4:3) |
| `og-image.jpg` | Social share preview (1200×630) |

## Before launch
- Replace the sample stats (years, acres, projects) and the **sample testimonials** with real ones.
- Replace placeholder phone/email/area.
