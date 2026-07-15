import { useCallback, useEffect, useRef, useState } from "react";
import {
  aboutHighlights,
  aboutParagraphs,
  experienceEntries,
  heroStats,
  projectEntries,
  serviceEntries,
  skillGroups,
  storyParagraphs,
} from "./components/portfolio/data";
import { useTypewriter } from "./hooks/useTypewriter";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4";
const SENSITIVITY = 0.8;
const EMAIL = "farhanmaulidan04@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/hanfadan";
const WHATSAPP = "https://wa.link/dwok15";
const TYPEWRITER_TEXT =
  "I design and build scalable digital systems used by thousands of users daily — combining clean architecture, performance, and business-driven engineering.";
const profileIntro = [
  "With 5+ years of experience across retail, e-commerce, logistics, and enterprise systems, I focus on turning complex requirements into reliable, production-ready applications.",
  "If you are looking for an engineer who understands both technology and business impact, let’s connect.",
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

function ScrubbableVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previousXRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const seekingRef = useRef(false);

  const seekToTarget = useCallback(() => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;

    const nextTime = Math.min(video.duration, Math.max(0, targetTimeRef.current));
    if (Math.abs(video.currentTime - nextTime) < 0.01) {
      seekingRef.current = false;
      return;
    }

    seekingRef.current = true;
    video.currentTime = nextTime;
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const video = videoRef.current;
      const previousX = previousXRef.current;
      previousXRef.current = event.clientX;

      if (
        previousX === null ||
        !video ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0
      ) {
        return;
      }

      const delta = event.clientX - previousX;
      targetTimeRef.current = Math.min(
        video.duration,
        Math.max(
          0,
          targetTimeRef.current +
            (delta / window.innerWidth) * SENSITIVITY * video.duration,
        ),
      );

      if (!seekingRef.current) seekToTarget();
    };

    const resetPointer = () => {
      previousXRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetPointer);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetPointer);
    };
  }, [seekToTarget]);

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 z-0 h-full w-full object-cover object-[70%_center]"
      src={VIDEO_URL}
      muted
      playsInline
      preload="auto"
      onLoadedMetadata={(event) => {
        targetTimeRef.current = event.currentTarget.currentTime;
      }}
      onSeeked={(event) => {
        seekingRef.current = false;
        if (Math.abs(event.currentTarget.currentTime - targetTimeRef.current) >= 0.01) {
          seekToTarget();
        }
      }}
      aria-hidden="true"
    />
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className="h-3 w-3 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <rect x="1" y="3" width="7" height="7" rx="0.75" />
      <rect x="4" y="1" width="7" height="7" rx="0.75" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-30 flex w-full items-center justify-between px-5 py-4 transition-[background-color,backdrop-filter] duration-300 sm:px-8 sm:py-5 ${
          scrolled && !menuOpen ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-3 text-black" aria-label="Farhan.dev home">
          <span
            className="text-[21px] tracking-tight sm:text-[26px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Farhan.dev
          </span>
          <span
            aria-hidden="true"
            className="select-none text-[25px] leading-none tracking-[-0.02em] sm:text-[30px]"
          >
            ✳︎
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center text-[20px] text-black md:flex lg:text-[23px]">
          {navLinks.map((link, index) => (
            <span key={link.href}>
              <a href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </a>
              {index < navLinks.length - 1 && ", "}
            </span>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden text-[20px] text-black underline underline-offset-2 transition-opacity hover:opacity-60 md:block lg:text-[23px]"
        >
          Let&apos;s collaborate
        </a>

        <button
          type="button"
          className="relative z-40 flex flex-col gap-[5px] p-1 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-20 flex flex-col justify-center gap-7 bg-white/95 px-8 text-left backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[32px] font-medium text-black transition-opacity hover:opacity-60"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-[32px] font-medium text-black underline underline-offset-2 transition-opacity hover:opacity-60"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        >
          Let&apos;s collaborate
        </a>
      </div>
    </>
  );
}

const heroActions = [
  { label: "View projects", href: "#projects" },
  { label: "My experience", href: "#experience" },
  { label: "About me", href: "#about" },
  { label: "LinkedIn", href: LINKEDIN, external: true },
];

function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 24, 500);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setActionsVisible(true), 400);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section
      id="home"
      className="relative z-[1] flex h-screen scroll-mt-24 flex-col justify-end overflow-hidden px-5 pb-10 sm:px-8 sm:pb-12 md:justify-center md:px-10 md:pb-0"
    >
      <div className="relative z-10 max-w-2xl">
        <p
          className="pointer-events-none mb-5 select-none whitespace-pre-line text-black sm:mb-6"
          style={{ fontSize: "clamp(18px, 4vw, 26px)", lineHeight: 1.3, fontWeight: 400 }}
        >
          {"Muhammad Farhan Maulidan\nSoftware Engineer • Web, Mobile & Scalable Backend Systems"}
        </p>

        <p
          className="mb-5 min-h-[96px] max-w-xl text-black sm:mb-6 sm:min-h-[70px]"
          style={{ fontSize: "clamp(18px, 4vw, 26px)", lineHeight: 1.35, fontWeight: 400 }}
          aria-live="polite"
        >
          {displayed}
          {!done && (
            <span className="typewriter-cursor ml-[2px] inline-block h-[1.1em] w-[2px] align-middle bg-black" />
          )}
        </p>

        <div
          className={`flex flex-wrap gap-y-1 ${
            actionsVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transition: "opacity 0.4s ease, transform 0.4s ease" }}
        >
          {heroActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
            >
              {action.label}
            </a>
          ))}
          <button
            type="button"
            onClick={copyEmail}
            className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
            aria-label={`Copy ${EMAIL} to clipboard`}
          >
            <span>
              {copied ? "Copied" : "Email"}: <span className="underline underline-offset-1">{EMAIL}</span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 grid gap-4 md:mb-16 md:grid-cols-[1fr_2fr]">
      <p className={`text-[14px] uppercase tracking-[0.12em] ${light ? "text-white/60" : "text-black/55"}`}>
        {eyebrow}
      </p>
      <h2
        className={`max-w-4xl tracking-[-0.04em] ${light ? "text-white" : "text-black"}`}
        style={{ fontSize: "clamp(40px, 7vw, 90px)", lineHeight: 0.95 }}
      >
        {title}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative z-[2] scroll-mt-20 bg-[#f3f1ec] px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading eyebrow="01 / About" title="I build systems that grow with the business." />

        <div className="mb-14 grid gap-5 md:mb-20 md:grid-cols-2 md:gap-12">
          {profileIntro.map((paragraph) => (
            <p key={paragraph} className="max-w-2xl text-[19px] leading-relaxed text-black/65 md:text-[23px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid border-y border-black/20 md:grid-cols-3">
          {heroStats.map((stat, index) => (
            <div
              key={stat.value}
              className={`py-7 md:px-7 md:py-9 ${index > 0 ? "border-t border-black/20 md:border-l md:border-t-0" : ""}`}
            >
              <p className="text-[44px] leading-none tracking-[-0.04em] md:text-[60px]">{stat.value}</p>
              <p className="mt-3 max-w-xs text-[15px] leading-snug text-black/60 md:text-[17px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24">
          <div>
            <p className="mb-5 text-[14px] uppercase tracking-[0.12em] text-black/55">About me</p>
            <div className="space-y-5 text-[22px] leading-[1.3] tracking-[-0.02em] md:text-[30px]">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 text-[14px] uppercase tracking-[0.12em] text-black/55">What I focus on</p>
            <div className="flex flex-wrap gap-2">
              {aboutHighlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-black/25 px-4 py-2 text-[15px] md:text-[17px]">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-t border-black/20 pt-12 md:grid-cols-[1fr_2fr] md:gap-16 md:pt-16">
          <div>
            <p className="text-[14px] uppercase tracking-[0.12em] text-black/55">My story</p>
            <h3 className="mt-4 text-[28px] tracking-[-0.03em] md:text-[38px]">How my journey started</h3>
          </div>
          <div className="max-w-3xl space-y-5 text-[18px] leading-relaxed text-black/70 md:text-[21px]">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="relative z-[2] bg-black px-5 py-20 text-white sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading eyebrow="02 / Expertise" title="Technical depth across the product stack." light />
        <div className="grid border-t border-white/25 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`border-b border-white/25 py-8 md:p-10 ${index % 2 === 1 ? "md:border-l" : ""}`}
            >
              <p className="mb-12 text-[13px] text-white/45">0{index + 1}</p>
              <h3 className="mb-6 text-[28px] tracking-[-0.03em] md:text-[38px]">{group.title}</h3>
              <ul className="space-y-2 text-[17px] leading-relaxed text-white/65 md:text-[19px]">
                {group.items.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative z-[2] scroll-mt-20 bg-white px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading eyebrow="03 / Experience" title="From early experiments to production at scale." />

        <div className="border-t border-black/25">
          {experienceEntries.map((experience, index) => (
            <article
              key={experience.title}
              className="grid gap-4 border-b border-black/25 py-8 md:grid-cols-[80px_1.1fr_1fr] md:gap-8 md:py-11"
            >
              <p className="text-[13px] text-black/45">0{index + 1}</p>
              <div>
                <h3 className="max-w-xl text-[24px] leading-tight tracking-[-0.025em] md:text-[34px]">
                  {experience.title}
                </h3>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-black/55 md:text-[16px]">
                  {experience.meta}
                </p>
                {experience.skills && (
                  <p className="mt-4 text-[14px] text-black/75">Skills: {experience.skills}</p>
                )}
              </div>
              <ul className="space-y-2 text-[16px] leading-relaxed text-black/65 md:text-[18px]">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true">↳</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative z-[2] scroll-mt-20 bg-[#d8ddcf] px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading eyebrow="04 / Selected work" title="Products built for reliability and real users." />

        <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 md:gap-y-20">
          {projectEntries.map((project, index) => (
            <article key={project.id} className={index % 2 === 1 ? "md:translate-y-20" : ""}>
              <div className="group flex aspect-[4/3] items-center justify-center overflow-hidden bg-white/55 p-8 sm:p-12">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-black/25 pt-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-[13px] text-black/50">0{index + 1} / {project.role}</p>
                    <h3 className="text-[25px] leading-tight tracking-[-0.03em] md:text-[34px]">{project.title}</h3>
                  </div>
                  <ArrowIcon />
                </div>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-black/65 md:text-[18px]">{project.summary}</p>
                <p className="mt-4 text-[14px] text-black/80">{project.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative z-[2] bg-[#d8ddcf] px-5 pb-20 pt-28 sm:px-8 md:px-10 md:pb-28 md:pt-48">
      <div className="mx-auto max-w-[1500px] border-t border-black/25 pt-14 md:pt-20">
        <SectionHeading eyebrow="05 / How I can help" title="Engineering support made for production." />
        <div className="grid border-t border-black/25 md:grid-cols-2">
          {serviceEntries.map((service, index) => (
            <article
              key={service.title}
              className={`border-b border-black/25 py-8 md:p-10 ${index % 2 === 1 ? "md:border-l" : ""}`}
            >
              <p className="text-[13px] text-black/45">0{index + 1}</p>
              <h3 className="mt-12 text-[27px] tracking-[-0.03em] md:text-[36px]">{service.title}</h3>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-black/60 md:text-[19px]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-[2] scroll-mt-20 bg-black px-5 py-20 text-white sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading eyebrow="06 / Contact" title="Let’s build something impactful." light />

        <div className="grid gap-12 border-t border-white/25 pt-10 md:grid-cols-[1.4fr_1fr] md:gap-20 md:pt-16">
          <div>
            <p className="max-w-3xl text-[22px] leading-snug text-white/70 md:text-[30px]">
              I collaborate with companies building scalable products, startups launching new platforms,
              enterprises optimizing systems, and teams needing a reliable technical partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Full-time roles", "Contract projects", "Long-term collaborations"].map((item) => (
                <span key={item} className="rounded-full border border-white/30 px-4 py-2 text-[15px] text-white/80 md:text-[17px]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between border-b border-white/25 py-4 text-[19px] transition-opacity hover:opacity-60 md:text-[22px]"
            >
              <span>Email</span>
              <ArrowIcon />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-white/25 py-4 text-[19px] transition-opacity hover:opacity-60 md:text-[22px]"
            >
              <span>LinkedIn</span>
              <ArrowIcon />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-white/25 py-4 text-[19px] transition-opacity hover:opacity-60 md:text-[22px]"
            >
              <span>WhatsApp</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-16 block break-all text-[clamp(30px,6vw,88px)] leading-none tracking-[-0.045em] underline decoration-1 underline-offset-[8px] transition-opacity hover:opacity-60 md:mt-24"
        >
          {EMAIL}
        </a>

        <footer className="mt-20 flex flex-col gap-3 border-t border-white/25 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <p>© 2026 Muhammad Farhan Maulidan</p>
          <a href="#home" className="transition-colors hover:text-white">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <ScrubbableVideo />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
