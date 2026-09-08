import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Building2, Layers, Youtube } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const STATS = [
  { value: 5, suffix: "+", label: "Years Experience", sub: "Enterprise frontend delivery" },
  { value: 3, suffix: "+", label: "Enterprise Accounts", sub: "Pfizer • NielsenIQ • SAP" },
  { value: 15, suffix: "+", label: "Core Technologies", sub: "UI5 • React • Python & more" },
  { value: 1, suffix: "", label: "YouTube Channel", sub: "Python tutorials for beginners", icon: true },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1200);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const JOURNEY = [
  "Building enterprise web interfaces used at scale",
  "Translating Figma designs into production-ready UI",
  "JavaScript + React development with clean components",
  "SAP UI5 development on MVC architecture",
  "Python + Flask services and automation",
  "Agile / Jira delivery with Git-based workflows",
];

export function About() {
  return (
    <section id="about" aria-label="About Faizan" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Behind the Code"
          sub="Enterprise engineer by day, Python teacher by passion — turning designs into reliable, human-friendly interfaces."
        />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white">
              <Building2 className="h-5 w-5 text-violet-300" aria-hidden /> From Pfizer to SAP via TCS
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-300">
              I&apos;m a Software Engineer at Tata Consultancy Services with 5+ years of experience
              crafting web interfaces for enterprise accounts. My path runs from Hugo + Figma-to-UI
              builds for <strong className="text-white">Pfizer</strong>, through React.js work for{" "}
              <strong className="text-white">NielsenIQ</strong>, to my current role as an{" "}
              <strong className="text-white">SAP UI5 Developer</strong> — with React and Python/Flask
              along the way.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {JOURNEY.map((j, i) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex items-start gap-2.5 rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-[13px] leading-snug text-slate-200"
                >
                  <Layers className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" aria-hidden />
                  {j}
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-violet-500/15 to-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/40">
                  <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <div className="mt-3">
                    <p className="flex items-center gap-1.5 text-[13px] font-bold text-white">
                      {s.icon ? <Youtube className="h-4 w-4 text-red-400" aria-hidden /> : null}
                      {s.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{s.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
