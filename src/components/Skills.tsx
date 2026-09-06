import { skillCategories } from "../data/skills";

// Renders every category from src/data/skills.ts automatically.
// Add or remove a skill by editing that file only.
export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-14 max-w-xl">
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            What I work with
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            The languages and tools I reach for most, plus a few things I'm
            actively picking up.
          </p>
        </div>

        <div className="max-w-2xl">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`py-8 ${index > 0 ? "border-t border-line" : ""}`}
            >
              <h3 className="font-display text-lg text-ink mb-4">
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded border border-line text-ink-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
