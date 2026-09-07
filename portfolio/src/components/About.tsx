import { Code2, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";

// Any fact left as an empty string in siteData.ts is skipped automatically.
const quickFacts = [
  { icon: MapPin, label: "Location", value: siteData.location },
  { icon: GraduationCap, label: "School", value: siteData.school },
  { icon: Code2, label: "Focus", value: siteData.focus },
  { icon: Sparkles, label: "Currently learning", value: siteData.currentlyLearning },
].filter((fact) => fact.value);

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-[1.3fr_1fr] gap-14">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-8">
            About
          </h2>
          <div className="space-y-5 text-ink-soft leading-relaxed max-w-md text-[17px]">
            {siteData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="border-l-2 border-accent pl-6 h-fit">
          <ul className="space-y-5">
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon size={17} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-ink-soft">{label}</p>
                  <p className="text-ink">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
