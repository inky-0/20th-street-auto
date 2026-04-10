# Component Catalog

These are the only sections every Vexa site uses, in the order they appear in `src/app/page.tsx`. Don't add to this list unless you've also added the component to the template repo.

| Component | File | Purpose |
|---|---|---|
| `<Nav />` | `sections/Nav.tsx` | Sticky top nav: brand left, links center (desktop) or hamburger drawer (mobile), CTA right. |
| `<Hero />` | `sections/Hero.tsx` | Full-viewport hero. Optional tag pill, 3-line h1, sub paragraph, two CTAs (magnetic), stats row with accent border. Mouse parallax on bg image (disabled on touch). On mobile, content anchors to bottom half via `items-end`. |
| `<ServicesGrid />` | `sections/ServicesGrid.tsx` | Tag → H2 → sub → 3-col grid of service cards (lucide icon, name, description). Collapses to 1 col on phones, 2 on tablets. |
| `<HowItWorks />` | `sections/HowItWorks.tsx` | Numbered 3-4 step process cards. Arrow connectors on desktop. Great for explaining the customer journey. |
| `<Gallery />` | `sections/Gallery.tsx` | Tag → H2 → sub → asymmetric image grid. First image spans 2x2, others fill the rest. 2 cols on mobile, 3 on desktop. |
| `<WhyChooseSplit />` | `sections/WhyChooseSplit.tsx` | 2-col layout: image with optional badge overlay on left, checklist of 3–5 reasons on right. Stacks vertically on mobile. |
| `<FAQ />` | `sections/FAQ.tsx` | Accordion FAQ section. Animated open/close. Max-width centered. Great for SEO (FAQPage schema). |
| `<ServiceArea />` | `sections/ServiceArea.tsx` | Grid of city/area names with map pin icons. Optional Google Maps link. Critical for local SEO. |
| `<Testimonials />` | `sections/Testimonials.tsx` | 3-up review cards with star row + quote + name. **Skip the entire section if no real reviews are available — never fabricate.** |
| `<TeamGrid />` | `sections/TeamGrid.tsx` | Team member cards with photo, name, role. Uses Next.js Image. **Optional — only include if client provides team photos.** |
| `<CtaBanner />` | `sections/CtaBanner.tsx` | Full-bleed accent-gradient CTA banner with title + sub + single magnetic button. |
| `<ContactSection />` | `sections/ContactSection.tsx` | 2-col: contact info + hours on left, contact form on right. Form uses `mailto:` action by default. |
| `<Footer />` | `sections/Footer.tsx` | 4-col: brand + tagline · 2 link columns · contact column. Collapses to 1 col on mobile. |

## Primitives

| Primitive | File | Purpose |
|---|---|---|
| `<MagneticButton />` | `ui/MagneticButton.tsx` | framer-motion magnetic spring button. Goes full-width on mobile when used `asLink`. |
| `<SectionShell />` | `sections/SectionShell.tsx` | Standard section wrapper with `tag → H2 → sub → children` and consistent intro animation. Use for any new section you build so it inherits the rhythm. |

## Adding a new section (rare)

1. Create `src/components/sections/<NewName>.tsx` as a `"use client"` component
2. Wrap content in `<SectionShell>` so it inherits the intro animation + spacing
3. Add a row to this catalog above
4. **Push the component back to `vexa-website-template`** so future builds get it
5. Drop it into `src/app/page.tsx` in the appropriate slot

If you build a one-off section that you don't want in future builds, keep it local to the client repo and don't push it to the template.
