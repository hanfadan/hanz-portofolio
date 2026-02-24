type AboutSectionProps = {
  paragraphs: string[];
  highlights: string[];
};

export default function AboutSection({
  paragraphs,
  highlights,
}: AboutSectionProps) {
  return (
    <section className="reveal" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="content-card">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="subtitle">
              {paragraph}
            </p>
          ))}
          <ul className="subtitle feature-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
