# LandPro Excavations — Website

Static site (HTML + CSS + JS, no build step). Host the `landpro/` folder on any static host (GitHub Pages, Netlify…).

- `index.html` — home (hero, intro, services, projects, process, about, visit, testimonials, CTA, contact)
- `project.html?p=<slug>` — editorial project page, generated from `js/data.js`
- English is the default; the EN / ES toggle is remembered per visitor.

## Editing
| What | Where |
|---|---|
| Phone, email, address, hours, region, social links | `CONFIG` in `js/data.js` (also `tel:`/JSON-LD in `index.html`) |
| Projects (name, location, service, text, gallery) | `PROJECTS` in `js/data.js` |
| English text | directly in the HTML |
| Spanish text | `ES` in `js/data.js` (same keys as `data-i18n`) |
| Colors / fonts | variables at the top of `css/styles.css` |
| Contact form email | set `action="https://formspree.io/f/XXXX"` on `#inquiry` |

## Photography
The images in `img/` are **generated placeholders** (atmospheric landscapes and material textures).
Replace each file with a real photograph **using the same file name** and the site updates automatically.

| File(s) | Use | Suggested shot |
|---|---|---|
| `hero.jpg` | Full-screen hero (landscape, ≥2400px) | Machine working at the edge of a cleared site, early light |
| `discipline-*.jpg` | Services (portrait 4:5) | Close, textured details: timber, mulch, cut soil, graded pad, water, gravel |
| `project-*.jpg` | Project covers | Finished sites, wide and calm |
| `process-*.jpg` | Process steps (4:5) | Site walk, plans/stakes, clearing, final grade |
| `about-*.jpg`, `yard-*.jpg` | About & Visit | Crew, owner, fleet, yard |
| `detail-*.jpg` | Project detail pages | Material close-ups |
| `cta.jpg` | Final call to action (wide) | Most striking landscape |

## Before launch
- Replace sample projects, testimonials (“Client Name”) and placeholder contact details.
