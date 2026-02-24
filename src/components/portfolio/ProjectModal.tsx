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
              <img
                src={project.imageSrc}
                alt={project.imageAlt ?? project.title}
                className="project-modal-image"
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
