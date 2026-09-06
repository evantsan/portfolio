import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

// Renders every project from src/data/projects.ts automatically.
// To add, remove, or reorder a project, edit that data file only.
export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-xl">
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            Things I've built
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            A few projects I've built while learning — some polished, some
            still rough around the edges. All of them taught me something.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={index > 0 ? "pt-20 md:pt-24 border-t border-line" : ""}
            >
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
