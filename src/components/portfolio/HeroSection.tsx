import type { HeroStat } from "./types";

type HeroSectionProps = {
  typingValue: string;
  stats: HeroStat[];
};

export default function HeroSection({ typingValue, stats }: HeroSectionProps) {
  return (
    <section id="home" className="hero reveal">
      <h1>Muhammad Farhan Maulidan</h1>
      <h3 id="typing">{typingValue}</h3>
      <p className="subtitle">
        I design and build scalable digital systems used by thousands of users
        daily - combining clean architecture, performance optimization, and
        business-driven engineering.
      </p>
      <p className="subtitle">
        With 5+ years of experience across retail, e-commerce, logistics, and
        enterprise systems, I focus on turning complex requirements into
        reliable, production-ready applications.
      </p>
      <p className="subtitle">
        If you are looking for an engineer who understands both technology and
        business impact - let&apos;s connect.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <a href="#projects" role="button">
          View Projects
        </a>
        <a href="#contact" className="secondary" role="button">
          Let&apos;s Collaborate
        </a>
      </div>
      <div className="hero-stats" aria-label="Portfolio statistics">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
