"use client";

import { useEffect, useMemo, useState } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import {
  aboutHighlights,
  aboutParagraphs,
  experienceEntries,
  heroStats,
  projectEntries,
  serviceEntries,
  skillGroups,
  storyParagraphs,
  typingText,
} from "./data";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ProjectModal from "./ProjectModal";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import SkillsSection from "./SkillsSection";

export default function PortfolioPage() {
  const [typedValue, setTypedValue] = useState("");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => projectEntries.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedValue(typingText.slice(0, index));
      if (index >= typingText.length) {
        window.clearInterval(timer);
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProjectId(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container">
        <HeroSection typingValue={typedValue} stats={heroStats} />
      </main>
      <AboutSection paragraphs={aboutParagraphs} highlights={aboutHighlights} />
      <SkillsSection groups={skillGroups} />
      <ExperienceSection
        storyParagraphs={storyParagraphs}
        experienceEntries={experienceEntries}
      />
      <ProjectsSection
        projects={projectEntries}
        onOpenProject={(projectId) => setActiveProjectId(projectId)}
      />
      <ServicesSection services={serviceEntries} />
      <ContactSection />
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
    </>
  );
}
