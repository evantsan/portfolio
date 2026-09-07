import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { siteData } from "../data/siteData";

// The hero's text elements fade up together once, right as the page loads.
// This is the site's one orchestrated entrance animation.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-ink leading-[1.05]"
          >
            {siteData.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display italic text-2xl sm:text-3xl text-ink-soft mt-4"
          >
            {siteData.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-lg text-ink-soft leading-relaxed"
          >
            {siteData.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-paper font-medium rounded-md hover:bg-ink transition-colors"
            >
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={siteData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-ink font-medium border-b border-transparent hover:border-ink transition-colors pb-0.5"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* A small "pinned note" — the one playful visual moment on the page. */}
        <motion.div
          initial={{ opacity: 0, y: 16, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="hidden md:block justify-self-end"
        >
          <div className="relative bg-paper-raised border border-line rounded-md p-6 font-mono text-sm w-64 shadow-sm">
            <span
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="text-ink-soft">
              <span className="text-accent">const</span> me = {"{"}
            </p>
            <p className="pl-4 text-ink">
              status: <span className="text-accent">"learning"</span>,
            </p>
            <p className="pl-4 text-ink">
              building: <span className="text-accent">"this site"</span>,
            </p>
            <p className="pl-4 text-ink">
              next: <span className="text-accent">"???"</span>
            </p>
            <p className="text-ink-soft">
              {"}"}
              <span className="inline-block w-2 h-4 bg-accent ml-1 align-middle animate-blink" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
