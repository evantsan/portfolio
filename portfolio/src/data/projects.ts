// ────────────────────────────────────────────────────────────
// All project data lives here. The Projects section on the page
// reads this list automatically — you never need to edit
// Projects.tsx or ProjectCard.tsx to add, remove, or reorder a project.
//
// To add a new project:
//   1. Copy one of the objects below.
//   2. Update title, description, technologies, and links.
//   3. Add a screenshot to /public/projects/ (see note below).
//   4. Set "image" to that file's name.
//   5. If there's no live demo, delete the liveUrl line entirely —
//      it's optional.
//
// EXAMPLE PROJECTS BELOW — replace these with your real ones.
// ────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string; // optional — omit this field if there's no live demo
}

// import.meta.env.BASE_URL automatically matches whatever "base" you set
// in vite.config.ts, so these image paths keep working after you deploy
// to a GitHub Pages subdirectory.
const BASE_URL = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A drag-and-drop task manager for organizing daily to-dos into columns. I built this to practice component state and to finally have a planner I'd actually use for schoolwork.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: `${BASE_URL}projects/project-1.svg`,
    githubUrl: "https://github.com/yourusername/taskflow",
    liveUrl: "https://taskflow-demo.example.com",
  },
  {
    title: "WeatherNow",
    description:
      "A clean weather dashboard that pulls live forecasts from a public API. My first project working with real external data instead of data I made up myself.",
    technologies: ["JavaScript", "HTML", "CSS", "REST API"],
    image: `${BASE_URL}projects/project-2.svg`,
    githubUrl: "https://github.com/yourusername/weathernow",
    liveUrl: "https://weathernow-demo.example.com",
  },
  {
    title: "StudyBuddy",
    description:
      "A flashcard app for studying that saves your decks in the browser between sessions. Started as a way to study for my own classes, then turned into a project I kept improving.",
    technologies: ["React", "TypeScript", "Local Storage"],
    image: `${BASE_URL}projects/project-3.svg`,
    githubUrl: "https://github.com/yourusername/studybuddy",
  },
  {
    title: "This Portfolio",
    description:
      "The site you're looking at right now, built from scratch to practice component architecture, responsive layout, and animation with a real design system instead of a template.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: `${BASE_URL}projects/project-4.svg`,
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];
