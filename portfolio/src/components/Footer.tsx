import { Github, Linkedin } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-soft">
          &copy; {new Date().getFullYear()} {siteData.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-ink-soft hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          {siteData.linkedin && (
            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-soft hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
