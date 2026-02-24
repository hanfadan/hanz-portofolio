import Image from "next/image";
import type { ProjectEntry } from "./types";

type ProjectModalProps = {
  project: ProjectEntry | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className={`modal ${project ? "show" : ""}`}
      onClick={onClose}
      aria-hidden={project ? "false" : "true"}
    >
      {project ? (
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          {project.imageSrc ? (
            <div className="project-modal-image-wrap">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt ?? project.title}
                width={1200}
                height={700}
                className="project-modal-image"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          ) : null}
          <h3>{project.title}</h3>
          <p>
            <strong>Role:</strong> {project.role}
          </p>
          <p>
            <strong>Tech Stack:</strong> {project.stack}
          </p>
          <ul>
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}
