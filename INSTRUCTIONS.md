# Instructions for Claude

> **Read `DESIGN_RULES.md` before writing any copy or generating any mockup.** It contains the conversion playbook that makes Vexa sites actually work.

When Braeden says **"build a website for X using vexa-template"**, do exactly this. No improvising, no adding sections, no removing sections. The template is intentionally rigid — every site he ships looks the same so he can spin one up in under an hour.

## What he'll give you per client

1. **Company name** (e.g. "Destin Towing")
2. **Logo** (image file or URL)
3. **A few photos** (1 hero background, 3–5 work photos, 1 shop/storefront photo)
4. Basic facts: **services list, phone, email, address, hours, brand color (1 hex)**

5. *(Optional but improves quality)* **Competitor URLs, tone of voice, target customer, and USP** — see BRIEF.md for fields

That's it. Anything missing, ask before assuming.

## The build, step by step

### 1. Fork & rename
- Fork `vexa-website-template` as `<client-slug>-site`
- Clone locally

### 2. Drop the assets in `public/`
Save the client images with these exact filenames so the template's `page.tsx` doesn't need its image paths edited:
```
public/logo.png       (their logo)
public/hero-bg.jpg    (the hero background image)
public/shop.jpg       (the "Why Choose Us" image — shop, storefront, vehicle, team photo, etc.)
public/work-1.jpg
public/work-2.jpg
public/work-3.jpg
public/work-4.jpg
public/work-5.jpg     (the gallery images)
```
If they only give you 3 work photos, drop the gallery to 3 — the Gallery component will gracefully reflow. Don't pad with stock photos.

### 3. Set the brand palette in `src/app/globals.css`
There are **8 CSS variables** at the top of the file (`--bg`, `--surface`, `--surface-2`, `--border`, `--text`, `--text-mute`, `--accent`, `--accent-light`). Override them with the client's palette. Standard pattern:

| Industry feel | --bg | --surface | --accent | --accent-light |
|---|---|---|---|---|
| Industrial / towing / auto | `#0a0a0a` | `#111111` | client brand color | 1 shade lighter |
| Wellness / luxury | `#0a0a0a` | `#161616` | warm gold/copper | 1 shade lighter |
| Outdoor / turf / landscaping | `#080e08` | `#111a11` | green brand | green-light |
| Tech / SaaS | `#07070f` | `#0f0f1a` | brand blue/purple | 1 shade lighter |

If they don't specify, default to the existing dark navy + their accent color.

### 4. Update `src/app/layout.tsx`
- Change `metadata.title` to `"<Brand Name> — <one-line tagline>"`
- Change `metadata.description` to a 1–2 sentence SEO blurb pulled from the brief

### 5. Edit the constants at the top of `src/app/page.tsx`
```ts
const BRAND_NAME    = "...";
const PHONE_DISPLAY = "(555) 555-5555";
const PHONE_TEL     = "tel:5555555555";
const EMAIL         = "...";
const ADDRESS       = "...";
const MAP_LINK      = "...";
const TAGLINE       = "...";
```

### 6. Fill in every `props` placeholder in `page.tsx`
The page is already wired with sections in the right order. Walk through each section and replace the placeholder strings with real content. Specifically:

- **Hero**: `tag` (one-line uppercase tagline above the headline), `title` (3-line h1, middle line in `<span className="text-[var(--accent-light)]">`), `sub` (paragraph), `stats` (3 numbers + labels)
- **ServicesGrid**: `title`, `sub`, plus the 6 service objects (icon, name, description). Pick lucide icons that match the niche.
- **HowItWorks** *(optional)*: 3-4 step process explaining how the customer engages. Great for service businesses.
- **Gallery**: `title`, `sub`, image alts
- **WhyChooseSplit**: `title`, `sub`, `badge` (e.g. years in business), 4 reason items
- **FAQ** *(optional)*: 4-6 common questions + answers. Include for any business — great for SEO.
- **ServiceArea** *(optional)*: List of cities/areas served + optional Google Maps link. Include for any local business.
- **Testimonials**: 3 real reviews if the client supplied them. **If they didn't, delete the entire `<Testimonials />` block from page.tsx.** Never make up testimonials.
- **TeamGrid** *(optional)*: Team member cards with photo, name, role. Only if client provides team photos.
- **CtaBanner**: `title` + `sub` + CTA label
- **ContactSection**: just the props are wired from the constants, but verify hours match what the client said
- **Footer**: services + company columns, contact info auto-populates from constants

### 7. Build & verify
```bash
npm install
npm run build
```
Has to pass clean. If it doesn't, fix the type errors before pushing.

### 8. Push to GitHub & deploy
- New repo on `inky-0/<client-slug>-site`
- Push to `main`
- Tell Braeden the repo URL and that Railway should auto-pick it up (Node service, `npm install && npm run build` → `npm start`)

### 6.5. Write conversion-focused copy
Before filling in props, read `DESIGN_RULES.md`. Every piece of copy must follow those rules. Key reminders:
- Hero headline = outcome the customer gets, not a feature list
- No corporate filler ("We pride ourselves on...", "Look no further...")
- CTAs name the specific action ("Call Now for a Free Estimate", not "Get Started")
- FAQ answers are real — what a receptionist would say on the phone
- Service descriptions answer "why should I care?"
- Tag pill = credibility signal (years in business, licensed & insured, etc.)

## Hard rules — never break

- **Core sections (always include):** Nav · Hero · ServicesGrid · Gallery · WhyChooseSplit · CtaBanner · ContactSection · Footer.
- **Optional sections (include when relevant):** HowItWorks (process steps) · FAQ (accordion) · ServiceArea (city list) · TeamGrid (team photos) · Testimonials (only with real reviews).
- **Never remove the Hero, ServicesGrid, ContactSection, or Footer.** Those are the spine.
- **Never edit the section components themselves** (`src/components/sections/*.tsx`) unless the change is supposed to apply to every future site. If you do edit them, also push the change back to `vexa-website-template` so future builds get it.
- **Never invent testimonials, stats, services, or addresses.** If the client didn't give you something, ask Braeden or leave it out.
- **Never use stock photos.** Only use the images the client provided.
- **Never add cookie banners, chatbots, or "AI assistants"** unless explicitly asked.
- **Never use emojis in client-facing copy.** Internal code comments are fine.

## Mobile is non-negotiable

The template's mobile breakpoints are already dialed in (≤640px and ≤390px). Verify after build by mentally walking the page on a phone:
- Nav: brand on left, hamburger on right, drawer opens on tap
- Hero: full viewport, content anchored to bottom half via `items-end sm:items-center`, CTAs stack full-width, stats become 3-col grid with vertical dividers
- Services / Why / Contact: collapse to single column
- Gallery: 2-col with first image spanning 2

If something breaks on mobile, the fix belongs in the section component (so it's fixed for every future site too).

## When something is genuinely missing

Some clients need a section the template doesn't have (e.g. menu for a restaurant, room types for a hotel, pricing tiers for SaaS). If that happens:

1. First, ask Braeden if he wants you to skip it or build it.
2. If build it: create a new component in `src/components/sections/`, drop it into `page.tsx` in the appropriate slot, and **push the new component back to `vexa-website-template`** so it's available for future builds. Document it in `COMPONENTS.md`.

## Tools you have

- **Google Stitch MCP** (`mcp__stitch__*`) — generate full UI mockups and screens. Use to prototype page layouts, create design systems per client, and generate screen variants before building. Workflow: `create_project` → `create_design_system` (client colors/fonts) → `generate_screen_from_text` → iterate with `edit_screens` or `generate_variants` → build from the mockup.
- **nano-banana-2** skill — AI image generation (Gemini 3.1 Flash). Use for generating placeholder hero backgrounds, design reference images, or mood boards when the client hasn't provided photos yet. Never ship generated images as final — only for internal mockups and design direction.
- **Magic MCP** (`mcp__magic__*`) — generate premium one-off shadcn/Tailwind React components. Use for accent UI bits that aren't covered by the template's existing sections (e.g. a custom pricing table, a menu grid, a unique CTA).
- `ui-ux-pro-max` skill — design intelligence (colors, fonts, layout suggestions, palette generation). Use when choosing brand palettes, font pairings, or reviewing layout decisions.
- framer-motion + gsap — already imported in the template
- lucide-react — icon library

### Recommended workflow for a new client site

1. **Design phase** — Use `ui-ux-pro-max` to pick palette + fonts from the client's brand color. Use Stitch to mock up the full page layout before writing code.
2. **Asset phase** — If client hasn't sent photos yet, use `nano-banana-2` to generate reference images so the mockup looks real. Replace with real photos before shipping.
3. **Component phase** — If the client needs a section the template doesn't have, use Magic MCP to generate a polished component, then wire it into `page.tsx`.
4. **Build phase** — Follow the standard build steps above (fork, assets, palette, constants, fill props, build, push).
