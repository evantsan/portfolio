import { Github, Linkedin, Mail } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-5">
          Let's talk
        </h2>
        <p className="text-ink-soft max-w-md mx-auto leading-relaxed mb-10">
          I'm always glad to talk about projects, opportunities, or anything
          web development. Email is the best way to reach me.
        </p>

        <a
          href={`mailto:${siteData.email}`}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-paper font-medium rounded-md hover:bg-ink transition-colors"
        >
          <Mail size={18} aria-hidden="true" />
          {siteData.email}
        </a>

        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-ink-soft hover:text-accent transition-colors"
          >
            <Github size={22} />
          </a>
          {siteData.linkedin && (
            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-soft hover:text-accent transition-colors"
            >
              <Linkedin size={22} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
