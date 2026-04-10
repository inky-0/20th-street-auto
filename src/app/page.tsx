"use client";

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseSplit } from "@/components/sections/WhyChooseSplit";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import {
  Search,
  ShieldCheck,
  Wrench,
  Thermometer,
  Cog,
  ClipboardCheck,
} from "lucide-react";

// ── 1. CLIENT CONSTANTS ──────────────────────────────────────────────
const BRAND_NAME    = "20th Street Auto";
const PHONE_DISPLAY = "(561) 465-5512";
const PHONE_TEL     = "tel:5614655512";
const EMAIL         = "service@20thstreetautoservice.com";
const ADDRESS       = "1990 N Dixie Hwy, Boca Raton, FL 33432";
const MAP_LINK      = "https://www.google.com/maps/search/?api=1&query=20th+Street+Auto+Service+Inc+1990+N+Dixie+Hwy+Boca+Raton+FL+33432";
const TAGLINE       = "Honest diagnostics, quality repairs, and fair pricing in Boca Raton.";

// ── 2. PAGE COMPOSITION ──────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav
        brand={BRAND_NAME}
        links={[
          { href: "#services", label: "Services" },
          { href: "#work", label: "Our Work" },
          { href: "#why", label: "Why Us" },
          { href: "#reviews", label: "Reviews" },
          { href: "#contact", label: "Contact" },
        ]}
        cta={{ href: PHONE_TEL, label: `Call ${PHONE_DISPLAY}` }}
      />

      <Hero
        tag="Family-Owned Auto Repair in Boca Raton"
        title={
          <>
            <span className="block">Honest Diagnostics.</span>
            <span className="block">
              <span className="text-[var(--accent-light)]">Quality Repairs.</span>
            </span>
            <span className="block">Fair Pricing.</span>
          </>
        }
        sub="Where integrity meets expertise. ASE-certified technicians who find the actual problem, explain it in plain language, and fix it right the first time."
        primaryCta={{ href: PHONE_TEL, label: `Call ${PHONE_DISPLAY}` }}
        secondaryCta={{ href: "#services", label: "Our Services" }}
        bgImage="/hero-bg.jpg"
        stats={[
          { value: "15+", label: "Years Experience" },
          { value: "500+", label: "Happy Customers" },
          { value: "5\u2605", label: "Google Reviews" },
        ]}
      />

      <ServicesGrid
        id="services"
        tag="What We Do"
        title="Full-Service Auto Repair for Every Make and Model"
        sub="From routine oil changes to complex engine diagnostics, we handle it all. Every job gets the same level of care — whether it's your daily commuter or a high-end vehicle."
        services={[
          { icon: Search, name: "Diagnostics", description: "Check engine light, drivability issues, electrical faults. We find the actual cause — not just the symptom." },
          { icon: ShieldCheck, name: "Brakes & Suspension", description: "Complete brake service, steering and suspension inspection. We keep your vehicle stopping and handling safely." },
          { icon: Wrench, name: "Maintenance", description: "Oil changes, fluid services, filters, batteries, belts, and full preventative maintenance to protect your investment." },
          { icon: Thermometer, name: "Engine & Cooling", description: "Overheating, coolant leaks, cooling system service, and engine repair. We catch issues before they become costly." },
          { icon: Cog, name: "Transmission Service", description: "Transmission diagnostics, fluid service, and honest repair recommendations. We tell you exactly what it needs." },
          { icon: ClipboardCheck, name: "Pre-Purchase Inspections", description: "Buying a used car? Get a thorough, unbiased inspection report before you commit. Know exactly what you're getting." },
        ]}
      />

      <HowItWorks
        id="process"
        tag="How It Works"
        title={
          <>
            Getting your car fixed{" "}
            <span className="text-[var(--accent-light)]">shouldn&apos;t be complicated</span>
          </>
        }
        sub="We keep it simple so you can get back on the road fast."
        steps={[
          { title: "Call or Stop By", description: "Give us a call at (561) 465-5512 or drive in to our shop on N Dixie Hwy. No appointment needed for most services." },
          { title: "Honest Diagnosis", description: "Our ASE-certified technicians diagnose the actual problem and explain it to you in plain language. No jargon, no upselling." },
          { title: "Upfront Pricing", description: "You get a clear estimate before any work begins. The price we quote is the price you pay — no surprises." },
          { title: "Back on the Road", description: "We get the job done right the first time, backed by our warranty. Most repairs are completed same-day." },
        ]}
      />

      <Gallery
        id="work"
        tag="Our Shop"
        title={
          <>
            Inside <span className="text-[var(--accent-light)]">20th Street Auto</span>
          </>
        }
        sub="A look at our shop, our equipment, and the quality of work we deliver every day."
        images={[
          { src: "/work-1.jpg", alt: "20th Street Auto Service shop exterior on N Dixie Hwy in Boca Raton" },
          { src: "/work-2.jpg", alt: "Engine repair and diagnostics at 20th Street Auto" },
          { src: "/work-3.jpg", alt: "Shop interior with vehicles being serviced" },
          { src: "/work-4.jpg", alt: "Technician performing engine diagnostics in Boca Raton" },
          { src: "/work-5.jpg", alt: "20th Street Auto Service facility" },
        ]}
      />

      <WhyChooseSplit
        id="why"
        tag="Why Choose 20th Street Auto"
        title={
          <>
            Boca Raton&apos;s most{" "}
            <span className="text-[var(--accent-light)]">trusted</span> auto shop
          </>
        }
        sub="We're not a chain. We're a family-owned shop that treats every customer like a neighbor. Our technicians don't guess — they diagnose."
        image="/shop.jpg"
        imageAlt="ASE-certified technician working at 20th Street Auto Service in Boca Raton"
        badge={{ big: "15+", small: "Years Serving Boca" }}
        items={[
          { title: "ASE-Certified Technicians", body: "Our team is trained and certified to work on all makes and models. We invest in ongoing education so we can handle the latest vehicles." },
          { title: "Warranty-Backed Repairs", body: "Every repair comes with a warranty. If something isn't right, we make it right — no questions asked." },
          { title: "Upfront, Honest Pricing", body: "You get a clear estimate before we start. No hidden fees, no surprise charges. The price we quote is the price you pay." },
          { title: "Same-Day Service", body: "Most repairs are completed the same day you bring your vehicle in. We respect your time and get you back on the road fast." },
        ]}
      />

      <FAQ
        id="faq"
        tag="Common Questions"
        title={
          <>
            Frequently asked{" "}
            <span className="text-[var(--accent-light)]">questions</span>
          </>
        }
        items={[
          { question: "Do I need an appointment for auto repair in Boca Raton?", answer: "No appointment is needed for most services. Just call us at (561) 465-5512 or drive in to our shop at 1990 N Dixie Hwy. For major repairs, we recommend calling ahead so we can reserve a bay for you." },
          { question: "How much does a diagnostic cost?", answer: "We offer free diagnostic estimates. We'll tell you exactly what's wrong, what it'll cost to fix, and let you decide. No pressure, no obligation." },
          { question: "What brands and models do you service?", answer: "We service all makes and models — domestic, European, Asian, trucks, SUVs, and luxury vehicles. Our ASE-certified technicians have experience across the board." },
          { question: "Do you offer a warranty on repairs?", answer: "Yes. Every repair we perform is backed by a warranty. If something isn't right after we fix it, bring it back and we'll make it right at no extra charge." },
          { question: "How long do most repairs take?", answer: "Most standard repairs — brakes, oil changes, diagnostics, fluid services — are completed same-day. Larger jobs like engine or transmission work may take 1-2 days. We'll give you a timeline upfront." },
        ]}
      />

      <ServiceArea
        id="areas"
        tag="Service Area"
        title={
          <>
            Proudly serving{" "}
            <span className="text-[var(--accent-light)]">Boca Raton</span> and beyond
          </>
        }
        sub="Located on N Dixie Hwy, we're easy to reach from anywhere in the Boca Raton area."
        areas={[
          "Boca Raton", "Deerfield Beach", "Delray Beach", "Boynton Beach",
          "Pompano Beach", "Coconut Creek", "Highland Beach", "Lighthouse Point",
        ]}
        mapHref={MAP_LINK}
      />

      <Testimonials
        id="reviews"
        tag="What Customers Say"
        title={
          <>
            Trusted by{" "}
            <span className="text-[var(--accent-light)]">Boca Raton drivers</span> for
            over 15 years
          </>
        }
        items={[
          { quote: "The team at 20th Street Auto found a problem with my car that two other shops missed. Honest, fast, and the price was exactly what they quoted. I won't go anywhere else in Boca Raton.", name: "Michael R.", role: "Google Review" },
          { quote: "Brought my truck in for brakes and they handled it quickly and professionally. Prices were fair, communication was great, and they had me back on the road the same day. Highly recommend!", name: "Jennifer L.", role: "Google Review" },
          { quote: "Best auto shop in Boca. They took the time to explain exactly what was wrong with my car and gave me options. No pressure, just straight talk and quality work. This is how auto repair should be.", name: "David T.", role: "Google Review" },
        ]}
      />

      <CtaBanner
        title="Need a mechanic you can trust?"
        sub="Call now for a free diagnostic estimate. No pressure, no hidden fees — just honest auto repair."
        cta={{ href: PHONE_TEL, label: `Call ${PHONE_DISPLAY}` }}
      />

      <ContactSection
        id="contact"
        tag="Get In Touch"
        title={
          <>
            Stop by or{" "}
            <span className="text-[var(--accent-light)] italic">give us a call.</span>
          </>
        }
        sub="We're on N Dixie Hwy in Boca Raton, right where we've been for over 15 years. Walk in anytime during business hours or call ahead."
        phone={PHONE_DISPLAY}
        email={EMAIL}
        address={ADDRESS}
        mapHref={MAP_LINK}
        hours={[
          { day: "Mon — Fri", time: "8:00 AM — 6:00 PM" },
          { day: "Saturday",  time: "8:00 AM — 2:00 PM" },
          { day: "Sunday",    time: "Closed" },
        ]}
      />

      <Footer
        brand={BRAND_NAME}
        tagline={TAGLINE}
        columns={[
          {
            title: "Services",
            links: [
              { href: "#services", label: "Diagnostics" },
              { href: "#services", label: "Brakes & Suspension" },
              { href: "#services", label: "Maintenance" },
              { href: "#services", label: "Engine & Cooling" },
              { href: "#services", label: "Transmission Service" },
              { href: "#services", label: "Pre-Purchase Inspections" },
            ],
          },
          {
            title: "Company",
            links: [
              { href: "#why", label: "Why Choose Us" },
              { href: "#work", label: "Our Shop" },
              { href: "#reviews", label: "Reviews" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Contact" },
            ],
          },
        ]}
        contact={{
          phone: PHONE_DISPLAY,
          email: EMAIL,
          address: ADDRESS,
        }}
      />
    </>
  );
}
