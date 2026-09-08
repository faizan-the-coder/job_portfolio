import { MotionConfig } from "framer-motion";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { YouTubeSection } from "./components/YouTubeEducation";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Projects />
        <YouTubeSection />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
