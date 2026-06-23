# Pragma Softwares — Homepage

An award-winning, dark-themed, AI-forward agency homepage for **Pragma Softwares**.
Art direction: **"Nebula"** — near-black canvas, violet→cyan plasma, computational/futuristic.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | **Next.js 15** (App Router) |
| Language | **TypeScript** |
| Styles | **Tailwind CSS v3** (PostCSS) + custom CSS (`app/globals.css`) |
| Animations | **GSAP 3.13** + **ScrollTrigger** |
| Smooth scroll | **Lenis 1.3** |
| Text splitting | **Split-Type 0.3.4** |
| Icons | **Lucide React 0.460** |
| Fonts | **Cerebri Sans** (local `/public/fonts/`) · **Space Mono** (Google Fonts via `next/font`) |
| Dev server | `next dev` on port 3000 |

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>

## Structure

```
app/
  layout.tsx          Root layout — metadata, fonts, global providers
  page.tsx            Main page assembling all section components
  globals.css         "Nebula" design system: tokens, animations, responsive rules

components/
  Navigation.tsx      Fixed nav with mega dropdown panel + mobile menu
  Hero.tsx            Full-height hero — rotating text, floating metric cards
  StackMarquee.tsx    Infinite tech stack marquee
  Manifesto.tsx       Brand premise section (light theme)
  Services.tsx        Bento grid — 6 capability cards
  Work.tsx            4 case study cards with animated mock UIs
  Process.tsx         5-step process with sticky scroll progress bar
  Stats.tsx           Animated stat counters (120+ products, 40M+ AI calls…)
  Intelligence.tsx    AI terminal typewriter demo
  Testimonials.tsx    4 client testimonials (light theme)
  CTA.tsx             "Let's build something that thinks" call-to-action
  Footer.tsx          Footer with social links + giant PRAGMA wordmark
  Overlays.tsx        Grain texture, vignette, custom cursor dot
  AnimationsInit.tsx  Client-side boot — wires up GSAP, Lenis, SplitType, all interactions

public/
  fonts/cerebri-sans/ Local font files (5 weights, woff + woff2)
  images/             Logo and mark assets
```

## Design System (Nebula Tokens)

| Token | Value | |
|---|---|---|
| `--bg` | `#07070B` | near-black canvas |
| `--ink` | `#ECECF2` | primary text |
| `--muted` / `--faint` | `#A9A9BC` / `#7C7C90` | secondary / tertiary text |
| `--violet` / `--glow` / `--cyan` | `#6D4DFF` / `#8B5CFF` / `#22D3EE` | accent ramp |
| `--grad` | `linear-gradient(100deg,#8B5CFF,#22D3EE)` | signature gradient |
| Display / Body | **Cerebri Sans** | headings + copy |
| Mono | **Space Mono** | eyebrows, labels, numerics |

Tailwind utilities mirror all tokens (`bg-bg`, `text-ink`, `text-muted`, `font-display`, `text-cyan2`, …) via `tailwind.config.ts`.

## Motion

- **Lenis** smooth scroll, synced to the **GSAP** ticker; **ScrollTrigger** drives all scroll-based reveals.
- **SplitType** line-masked reveals — line-based to preserve gradient-clipped words.
- **Motion (motion.dev)** is lazy-loaded off the critical path (with a GSAP fallback) for capability badge entrances.
- Everything respects `prefers-reduced-motion` and degrades gracefully.
- All animation code lives in `AnimationsInit.tsx` and runs inside a `useEffect` — no SSR conflicts.
