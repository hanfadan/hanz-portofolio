import type { ServiceEntry } from "./types";

type ServicesSectionProps = {
  services: ServiceEntry[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="reveal" id="services">
      <div className="container">
        <h2 className="section-title">How I Can Help You</h2>
        <p className="subtitle">
          Engineering support focused on scalable systems, maintainability, and
          production readiness.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
