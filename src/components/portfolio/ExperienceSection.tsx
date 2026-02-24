import type { ExperienceEntry } from "./types";

type ExperienceSectionProps = {
  storyParagraphs: string[];
  experienceEntries: ExperienceEntry[];
};

export default function ExperienceSection({
  storyParagraphs,
  experienceEntries,
}: ExperienceSectionProps) {
  return (
    <>
      <section id="story" className="reveal">
        <div className="container">
          <h2 className="section-title">My Story</h2>
          <div className="timeline-item">
            <h4>How My Journey Started</h4>
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="subtitle">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="reveal">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          {experienceEntries.map((entry) => (
            <div key={entry.title} className="timeline-item">
              <h4>{entry.title}</h4>
              <p className="subtitle">
                <strong>{entry.meta}</strong>
              </p>
              <ul className="subtitle">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {entry.skills ? (
                <p className="subtitle">
                  <strong>Skills:</strong> {entry.skills}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
