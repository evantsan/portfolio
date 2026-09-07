import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  reverse: boolean; // flips which side the image appears on
}

export default function ProjectCard({ project, reverse }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
    >
      <a
        href={project.liveUrl ?? project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className={`group block overflow-hidden rounded-md border border-line ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </a>

      <div className={reverse ? "md:order-1" : "md:order-2"}>
        <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">
          {project.title}
        </h3>
        <p className="text-ink-soft leading-relaxed max-w-md">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded border border-line text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink border-b border-transparent hover:border-ink transition-colors pb-0.5"
          >
            <Github size={16} aria-hidden="true" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink border-b border-transparent hover:border-ink transition-colors pb-0.5"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
