import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// MotionConfig with reducedMotion="user" makes every Framer Motion animation
// in the app automatically respect the visitor's OS-level "reduce motion"
// accessibility setting, without extra logic in each component.
//
// Adding a new section later: create a data file (if it needs one) in
// src/data/, build a component in src/components/, then import and render
// it here. Add a matching link to Navbar.tsx if it should appear in the nav.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
