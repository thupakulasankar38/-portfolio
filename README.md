# Premium Portfolio — Design-First Foundation

React.js + Vite + Tailwind CSS + Framer Motion. Built to spec as a design-first
foundation: every piece of text, every image, and every color is placeholder
content meant to be replaced — the point of this build is the layout, motion,
and visual system underneath.

## 1. Folder structure

```
src/
├── animations/
│   └── animations.js        Shared Framer Motion variants (see §2)
├── components/
│   ├── AnimatedText.jsx      Word-by-word reveal, used for every heading
│   ├── Button.jsx             CTA button with hover-arrow micro-interaction
│   ├── CustomCursor.jsx       Desktop-only custom cursor
│   ├── Navbar.jsx             Sticky nav + animated mobile menu
│   ├── ProjectCard.jsx        5 layout variants — see §3
│   └── SectionHeading.jsx     Label + animated heading, used per section
├── sections/
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/                      All dummy content — see §4
│   ├── navigation.js
│   ├── profile.js
│   ├── projects.js
│   ├── experience.js
│   └── skills.js
├── theme.css                  All color variables — see §5
├── index.css                   Tailwind directives + global CSS
├── App.jsx                     Composes sections, page-load transition, cursor
└── main.jsx                    React entry point
```

## 2. How the animation system works

`src/animations/animations.js` holds every reusable motion variant:

- `fadeUp`, `fadeIn`, `scaleIn`, `slideInLeft`, `slideInRight` — entrance variants.
- `staggerContainer(stagger, delay)` — wraps a group of children so they animate in sequence.
- `revealOnScroll(variants)` — spread this onto any `motion.*` element to make it
  animate in once, the first time it scrolls into view:
  ```jsx
  <motion.div {...revealOnScroll(fadeUp)}>...</motion.div>
  ```
- `pageTransition` — the whole-app mount transition (opacity 0→1, scale 0.98→1),
  applied once in `App.jsx`.

`AnimatedText.jsx` is the component behind every large heading — it splits text
into words and reveals them with a staggered slide-up the first time they scroll
into view (or immediately, for the hero).

The custom cursor (`CustomCursor.jsx`) only activates on devices with a fine
pointer (`matchMedia('(pointer: fine)')`), so it never appears on mobile/touch.
It reads `data-cursor="hover"` (generic scale-up) or `data-cursor="view"`
(shows a "View" label) from whatever element the mouse is currently over —
add either attribute to any element to opt it into the cursor effect.

## 3. Where dummy content is stored

**Everything is in `src/data/`.** No component has hardcoded copy — edit these
files and the whole site updates:

| File | Controls |
|---|---|
| `data/navigation.js` | Logo text, nav links, header CTA |
| `data/profile.js` | Hero name/role/description, About heading & body, stats, contact details |
| `data/projects.js` | All 5 projects — title, description, category, year, tech, layout |
| `data/experience.js` | Work history entries |
| `data/skills.js` | Marquee skill list + categorized skill tags |

## 4. Where dummy images are stored

There are no external image files — every project/about visual is a **CSS
gradient placeholder** (`gradient: [fromColor, toColor]` in `data/projects.js`,
rendered by the `PlaceholderVisual` helper inside `ProjectCard.jsx`) with a
subtle grid overlay so it reads as an intentional placeholder, not a broken image.

**To swap in a real image:** add an `image: '/your-image.jpg'` (or a full URL)
to any project object in `data/projects.js` — `ProjectCard` automatically
renders an `<img>` instead of the gradient once `image` is set. Same pattern
in `About.jsx` if you want to swap that section's visual too.

## 5. Where colors are configured

**`src/theme.css`** — this is the one file to open to change the entire site's
color system. It defines CSS custom properties:

```css
--color-background   --color-primary   --color-muted    --color-border
--color-foreground   --color-secondary --color-accent   --color-surface
```

`tailwind.config.js` maps Tailwind's `bg-background`, `text-foreground`,
`text-accent`, etc. straight to these variables, and every component uses
those Tailwind classes — never a hardcoded hex value. Change the 8 values in
`theme.css` and the whole site re-themes.

## 6–8. Replacing content, images, and theme later

1. **Content** — edit the relevant file in `src/data/`.
2. **Images** — add `image: '/path.jpg'` to a project (or the About section's
   visual) as described in §4; drop actual image files into `public/`.
3. **Theme** — edit the hex values in `src/theme.css`.

None of this requires touching component code.

## Running the project

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploying to Vercel

**Dashboard:** push to GitHub → [vercel.com/new](https://vercel.com/new) →
import the repo → Vercel auto-detects Vite (build command `npm run build`,
output directory `dist`) → Deploy.

**CLI:**
```bash
npm install -g vercel
vercel login
vercel        # first deploy
vercel --prod # production deploy
```

## Notes on scope

- Single-page layout with anchor-link sections (as the brief's own nav —
  Work / About / Experience / Contact — implies), so there's no multi-route
  page-to-page transition; the "page enters" opacity/scale transition runs
  once on initial mount in `App.jsx`, and each section instead gets its own
  scroll-triggered reveal.
- Placeholder colors are intentionally close to neutral/grayscale so no real
  brand-color decisions are baked in prematurely — swap `theme.css` once you
  have a final palette.
