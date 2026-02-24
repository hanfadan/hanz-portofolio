import Image from "next/image";
import type { ProjectEntry } from "./types";

type ProjectsSectionProps = {
  projects: ProjectEntry[];
  onOpenProject: (projectId: string) => void;
};

export default function ProjectsSection({
  projects,
  onOpenProject,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="reveal">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="subtitle">
          A selection of projects focused on scalable architecture, production
          reliability, and measurable user impact.
        </p>

        <div className="grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card"
              onClick={() => onOpenProject(project.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpenProject(project.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {project.imageSrc ? (
                <div className="project-card-image-wrap">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt ?? project.title}
                    width={640}
                    height={320}
                    className="project-card-image"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : null}
              <h4>{project.title}</h4>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
