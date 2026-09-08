import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { PROFILE, RESUME_PATH } from "../data/portfolio";
import { InteractiveIDCard } from "./InteractiveIDCard";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  return (
    <section id="home" aria-label="Intro" className="relative scroll-mt-24 px-4 pt-24 pb-10 sm:px-6 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-6">
        {/* Copy — minimal, left on desktop / below card on mobile? Spec: card is centerpiece.
            Order: card first on mobile, copy second; side-by-side on desktop. */}
        <div className="order-2 text-center lg:order-1 lg:max-w-md lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [...ease] }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-violet-200 backdrop-blur">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
              {PROFILE.availability} • {PROFILE.location}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Hi, I&apos;m {PROFILE.firstName}.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-300 sm:text-base lg:mx-0">
              {PROFILE.tagline}
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-violet-300/90 sm:text-xs sm:tracking-[0.18em]">{PROFILE.stackLine}</p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("experience")}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#14101f] shadow-xl transition hover:bg-violet-100 active:scale-[0.98] sm:w-auto"
              >
                View Experience <ArrowDown className="h-4 w-4" aria-hidden />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-violet-300/30 bg-violet-500/15 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-violet-300/60 hover:bg-violet-500/25 active:scale-[0.98] sm:w-auto"
              >
                <Mail className="h-4 w-4" aria-hidden /> Let&apos;s Connect
              </button>
            </div>
            <div className="mt-4 flex justify-center lg:justify-start">
              <a
                href={RESUME_PATH}
                download="Faizan-Khan-Resume.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-violet-200 transition hover:text-white active:scale-[0.98]"
                aria-label="Download resume as PDF"
              >
                <FileDown className="h-4 w-4" aria-hidden /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Card centerpiece */}
        <div className="order-1 lg:order-2 lg:pr-6">
          <InteractiveIDCard />
        </div>
      </div>
    </section>
  );
}
