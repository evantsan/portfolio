// ────────────────────────────────────────────────────────────
// Add or remove a technology by editing the arrays below.
// The Skills section reflects this file automatically — no
// changes to Skills.tsx are needed.
// ────────────────────────────────────────────────────────────

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "C++", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    category: "Currently Exploring",
    skills: ["Node.js", "REST APIs", "UI/UX Design"],
  },
];
