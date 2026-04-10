"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  Search,
  ShieldCheck,
  Wrench,
  Thermometer,
  Cog,
  ClipboardCheck,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════════ */

const BRAND       = "20th Street Auto";
const PHONE       = "(561) 465-5512";
const PHONE_TEL   = "tel:5614655512";
const EMAIL       = "service@20thstreetautoservice.com";
const ADDRESS     = "1990 N Dixie Hwy, Boca Raton, FL 33432";
const MAP_LINK    = "https://www.google.com/maps/search/?api=1&query=20th+Street+Auto+Service+Inc+1990+N+Dixie+Hwy+Boca+Raton+FL+33432";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { icon: Search, name: "Diagnostics", description: "Check engine light, drivability issues, electrical faults. We find the actual cause — not just the symptom.", image: "/work-1.jpg" },
  { icon: ShieldCheck, name: "Brakes & Suspension", description: "Complete brake service, steering and suspension inspection. We keep your vehicle stopping and handling safely.", image: "/work-2.jpg" },
  { icon: Wrench, name: "Maintenance", description: "Oil changes, fluid services, filters, batteries, belts, and full preventative maintenance to protect your investment.", image: "/work-3.jpg" },
  { icon: Thermometer, name: "Engine & Cooling", description: "Overheating, coolant leaks, cooling system service, and engine repair. We catch issues before they become costly.", image: "/work-4.jpg" },
  { icon: Cog, name: "Transmission Service", description: "Transmission diagnostics, fluid service, and honest repair recommendations. We tell you exactly what it needs.", image: "/work-5.jpg" },
  { icon: ClipboardCheck, name: "Pre-Purchase Inspections", description: "Buying a used car? Get a thorough, unbiased inspection report before you commit. Know exactly what you're getting.", image: "/shop.jpg" },
];

const TESTIMONIALS = [
  { quote: "The team at 20th Street Auto found a problem with my car that two other shops missed. Honest, fast, and the price was exactly what they quoted. I won't go anywhere else in Boca Raton.", name: "Michael R.", role: "Google Review" },
  { quote: "Brought my truck in for brakes and they handled it quickly and professionally. Prices were fair, communication was great, and they had me back on the road the same day. Highly recommend!", name: "Jennifer L.", role: "Google Review" },
  { quote: "Best auto shop in Boca. They took the time to explain exactly what was wrong with my car and gave me options. No pressure, just straight talk and quality work. This is how auto repair should be.", name: "David T.", role: "Google Review" },
];

const FAQ_ITEMS = [
  { question: "Do I need an appointment?", answer: "No appointment needed for most services. Just call us at (561) 465-5512 or drive in to our shop at 1990 N Dixie Hwy. For major repairs, we recommend calling ahead so we can reserve a bay for you." },
  { question: "How much does a diagnostic cost?", answer: "We offer free diagnostic estimates. We'll tell you exactly what's wrong, what it'll cost to fix, and let you decide. No pressure, no obligation." },
  { question: "What brands and models do you service?", answer: "All of them. Domestic, European, Asian, trucks, SUVs, luxury vehicles. Our ASE-certified technicians have experience across the board." },
  { question: "Do you offer a warranty on repairs?", answer: "Yes. Every repair is backed by a warranty. If something isn't right after we fix it, bring it back and we'll make it right at no extra charge." },
  { question: "How long do most repairs take?", answer: "Brakes, oil changes, diagnostics, fluid services — same day. Larger jobs like engine or transmission work may take 1-2 days. We'll give you a timeline upfront." },
];

const SERVICE_AREAS = [
  "Boca Raton", "Deerfield Beach", "Delray Beach", "Boynton Beach",
  "Pompano Beach", "Coconut Creek", "Highland Beach", "Lighthouse Point",
];

const WHY_ITEMS = [
  "ASE-Certified Technicians — trained on all makes and models",
  "Warranty-Backed Repairs — if it's not right, we fix it free",
  "Upfront, Honest Pricing — no hidden fees, no surprise charges",
  "Same-Day Service — most repairs done the day you bring it in",
  "Family-Owned Since Day One — we treat every customer like a neighbor",
  "Free Diagnostic Estimates — no obligation, no pressure",
];

/* ═══════════════════════════════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════════════════════════════ */

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
}

/* ═══════════════════════════════════════════════════════════════════
   TOP BAR
   ═══════════════════════════════════════════════════════════════════ */

function TopBar() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-[#080808] border-b border-white/5 text-sm text-[var(--text-mute)]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-[var(--accent)]" />
            {PHONE}
          </a>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <MapPin size={14} className="text-[var(--accent)]" />
            {ADDRESS}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[var(--accent)]" />
          <span>Mon-Fri 8am-6pm | Sat 8am-2pm</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════════════ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "top-0 md:top-[36px] bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="brand-wordmark text-2xl text-white tracking-wider">
          20TH STREET <span className="text-[var(--accent)]">AUTO</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--text-mute)] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={PHONE_TEL}
          className="hidden md:inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          <Phone size={15} />
          Call {PHONE}
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-white/5 px-6 py-6 space-y-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-lg text-[var(--text-mute)] hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="block text-center bg-[var(--accent)] text-black font-semibold py-3 rounded-lg mt-4"
          >
            Call {PHONE}
          </a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════ */

const HERO_SLIDES = ["/hero-bg.jpg", "/work-1.jpg", "/work-3.jpg", "/work-4.jpg"];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Slideshow background with parallax */}
      {HERO_SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === currentSlide ? 1 : 0,
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)`,
            transition: "opacity 1s ease-in-out, transform 0.7s ease-out",
          }}
        >
          <Image
            src={src}
            alt="20th Street Auto Service"
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <FadeIn delay={0.1}>
          <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-6">
            Family-Owned Auto Repair in Boca Raton
          </span>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Your Car Fixed Right.
            <br />
            <span className="text-[var(--accent-light)]">No Surprises.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-[var(--text-mute)] max-w-2xl mx-auto mb-10 leading-relaxed">
            ASE-certified technicians who find the actual problem, explain it in plain language, and fix it right the first time. Warranty-backed, fair pricing, same-day service.
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone size={20} />
              Call {PHONE}
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Our Services
              <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={0.8}>
          <a href="#trust" className="inline-block mt-16 animate-bounce">
            <ChevronDown size={28} className="text-[var(--text-mute)]" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TRUST BAR
   ═══════════════════════════════════════════════════════════════════ */

function TrustBar() {
  const items = [
    { icon: ShieldCheck, title: "ASE Certified", desc: "Factory-trained technicians on every job" },
    { icon: Check, title: "Warranty Backed", desc: "Every repair guaranteed — period" },
    { icon: Clock, title: "Same-Day Estimates", desc: "Free diagnostics, no obligation" },
  ];

  return (
    <section id="trust" className="relative z-10 -mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="bg-[var(--surface)] border border-white/[0.06] rounded-xl p-6 flex items-start gap-4 card-hover">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--text-mute)]">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION HEADER (reusable)
   ═══════════════════════════════════════════════════════════════════ */

function SectionHeader({
  tag,
  title,
  sub,
  center = true,
}: {
  tag: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <FadeIn>
        <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">
          {tag}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          {title}
        </h2>
      </FadeIn>
      {sub && (
        <FadeIn delay={0.2}>
          <p className="text-[var(--text-mute)] text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            {sub}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT / WELCOME
   ═══════════════════════════════════════════════════════════════════ */

function About() {
  return (
    <section id="about" className="section-pad bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">
              About Our Shop
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              We fix cars the way{" "}
              <span className="text-[var(--accent-light)]">they should be fixed</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--text-mute)] text-lg mt-6 leading-relaxed">
              20th Street Auto Service has been on N Dixie Highway in Boca Raton for over 15 years. We started as a one-bay shop and grew by doing one thing well: telling people the truth about their cars.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-[var(--text-mute)] text-lg mt-4 leading-relaxed">
              Every technician here is ASE-certified. We diagnose the actual problem, explain it so it makes sense, give you a straight price, and get the work done right the first time. No upselling, no made-up repairs.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black font-semibold px-6 py-3 rounded-lg mt-8 transition-colors"
            >
              <Phone size={18} />
              Call {PHONE}
            </a>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn direction="right" delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/shop.jpg"
              alt="Inside 20th Street Auto Service — Boca Raton auto repair shop"
              fill
              className="object-cover"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-[var(--accent)] text-black rounded-xl px-5 py-3">
              <span className="block text-3xl font-bold leading-none">15+</span>
              <span className="text-sm font-medium">Years Serving Boca</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICES GRID
   ═══════════════════════════════════════════════════════════════════ */

function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What We Do"
          title={
            <>
              Full-Service Auto Repair for{" "}
              <span className="text-[var(--accent-light)]">Every Make and Model</span>
            </>
          }
          sub="From routine oil changes to complex engine diagnostics, we handle it all. Every job gets the same level of care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.name} delay={i * 0.08}>
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] card-hover h-full">
                {/* Image background */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-[var(--surface-2)]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                      <service.icon size={20} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-[var(--surface-2)]">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-[var(--text-mute)] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-1 text-[var(--accent)] text-sm font-medium hover:gap-2 transition-all"
                  >
                    Schedule Service <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STATS BAND (animated counters)
   ═══════════════════════════════════════════════════════════════════ */

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView.current) {
          inView.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

function StatsBand() {
  const stats = [
    { target: 15, suffix: "+", label: "Years Experience" },
    { target: 500, suffix: "+", label: "Happy Customers" },
    { target: 5, suffix: "", label: "Star Google Rating", isStar: true },
  ];

  return (
    <section className="section-pad bg-[var(--bg)] border-y border-white/[0.04]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <FadeIn key={stat.label}>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[var(--accent)]">
                {stat.isStar ? (
                  <span className="flex items-center justify-center gap-2">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    <Star size={32} className="fill-[var(--accent)] text-[var(--accent)]" />
                  </span>
                ) : (
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-[var(--text-mute)] mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════════════════════════════ */

function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <FadeIn direction="left">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/work-2.jpg"
              alt="Technician performing brake inspection at 20th Street Auto"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <div>
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Boca Raton&#39;s most{" "}
              <span className="text-[var(--accent-light)]">trusted</span> auto shop
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--text-mute)] text-lg mt-4 leading-relaxed">
              We are not a chain. We are a family-owned shop that treats every customer like a neighbor. Our technicians do not guess — they diagnose.
            </p>
          </FadeIn>

          <div className="mt-8 space-y-4">
            {WHY_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.06}>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-[var(--accent)]" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════════════ */

function TestimonialsSection() {
  return (
    <section id="reviews" className="section-pad bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What Customers Say"
          title={
            <>
              Trusted by{" "}
              <span className="text-[var(--accent-light)]">Boca Raton drivers</span>{" "}
              for over 15 years
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-[var(--surface)] border border-white/[0.06] rounded-xl p-8 card-hover h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[var(--accent)] text-[var(--accent)]" />
                  ))}
                </div>

                <blockquote className="text-white/80 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[var(--text-mute)]">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════════ */

function FAQItem({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-white/[0.06] rounded-xl overflow-hidden card-hover">
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-white pr-4">{item.question}</span>
        <ChevronDown
          size={20}
          className={`text-[var(--accent)] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight ?? 0 : 0,
        }}
      >
        <p className="px-6 pb-6 text-[var(--text-mute)] leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="section-pad bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          tag="Common Questions"
          title={
            <>
              Frequently asked{" "}
              <span className="text-[var(--accent-light)]">questions</span>
            </>
          }
        />

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <FadeIn key={item.question}>
              <FAQItem item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICE AREA
   ═══════════════════════════════════════════════════════════════════ */

function ServiceAreaSection() {
  return (
    <section id="areas" className="section-pad bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Service Area"
          title={
            <>
              Proudly serving{" "}
              <span className="text-[var(--accent-light)]">Boca Raton</span> and beyond
            </>
          }
          sub="Located on N Dixie Hwy, we're easy to reach from anywhere in the area."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SERVICE_AREAS.map((area, i) => (
            <FadeIn key={area} delay={i * 0.05}>
              <div className="flex items-center gap-3 bg-[var(--surface)] border border-white/[0.06] rounded-xl px-4 py-4 card-hover">
                <MapPin size={16} className="text-[var(--accent)] shrink-0" />
                <span className="text-white/90 text-sm font-medium">{area}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
            >
              <MapPin size={16} />
              View on Google Maps
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════════════════════════════════ */

function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--accent)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#e07520] to-[#f5a04a] opacity-90" />

      <div className="relative section-pad">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Need a mechanic you can trust?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-black/70 text-lg mt-4 max-w-xl mx-auto">
              Call now for a free diagnostic estimate. No pressure, no hidden fees — just honest auto repair.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-black text-white font-bold text-lg px-8 py-4 rounded-lg mt-8 hover:bg-black/80 transition-colors"
            >
              <Phone size={20} />
              Call {PHONE}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════════════════════════════ */

function ContactSection() {
  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "8:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="contact" className="section-pad bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Get In Touch"
          title={
            <>
              Stop by or{" "}
              <span className="text-[var(--accent-light)]">give us a call</span>
            </>
          }
          sub="We're on N Dixie Hwy in Boca Raton, right where we've been for over 15 years. Walk in anytime during business hours or call ahead."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <FadeIn delay={0}>
            <a href={PHONE_TEL} className="block bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 text-center card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-[var(--accent)] font-medium text-lg">{PHONE}</p>
            </a>
          </FadeIn>

          {/* Email */}
          <FadeIn delay={0.1}>
            <a href={`mailto:${EMAIL}`} className="block bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 text-center card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-[var(--accent)] font-medium break-all">{EMAIL}</p>
            </a>
          </FadeIn>

          {/* Address */}
          <FadeIn delay={0.2}>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="block bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 text-center card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">Address</h3>
              <p className="text-[var(--accent)] font-medium">{ADDRESS}</p>
            </a>
          </FadeIn>
        </div>

        {/* Hours */}
        <FadeIn delay={0.3}>
          <div className="mt-8 bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 max-w-md mx-auto">
            <h3 className="font-semibold text-white text-center mb-4 flex items-center justify-center gap-2">
              <Clock size={18} className="text-[var(--accent)]" />
              Business Hours
            </h3>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-[var(--text-mute)]">{h.day}</span>
                  <span className={`font-medium ${h.time === "Closed" ? "text-red-400" : "text-white"}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="brand-wordmark text-2xl text-white tracking-wider block mb-4">
              20TH STREET <span className="text-[var(--accent)]">AUTO</span>
            </span>
            <p className="text-[var(--text-mute)] text-sm leading-relaxed">
              Honest diagnostics, quality repairs, and fair pricing. Family-owned auto shop serving Boca Raton for over 15 years.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  <a href="#services" className="text-sm text-[var(--text-mute)] hover:text-white transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[
                { href: "#why", label: "Why Choose Us" },
                { href: "#about", label: "About" },
                { href: "#reviews", label: "Reviews" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[var(--text-mute)] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--text-mute)]">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} className="text-[var(--accent)]" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} className="text-[var(--accent)]" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors">
                  <MapPin size={14} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] text-center text-sm text-[var(--text-mute)]">
          <p>&copy; {new Date().getFullYear()} 20th Street Auto Service Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <ServicesSection />
      <StatsBand />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <ServiceAreaSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </>
  );
}
