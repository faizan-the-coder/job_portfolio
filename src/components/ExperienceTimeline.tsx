import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Briefcase, CalendarDays, ChevronRight, X } from "lucide-react";
import { EXPERIENCES, type Experience } from "../data/portfolio";
import { SectionHeading } from "./ui";

export function ExperienceTimeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.75", "end 0.6"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
  const [selected, setSelected] = useState<Experience | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience Timeline"
          sub="Five-plus years at Tata Consultancy Services across Pfizer, NielsenIQ and SAP accounts."
        />

        <div ref={listRef} className="relative pl-8 sm:pl-12">
          {/* track */}
          <div className="absolute top-2 bottom-2 left-[11px] w-[2px] rounded-full bg-white/10 sm:left-[19px]" aria-hidden />
          <motion.div
            className="absolute top-2 bottom-2 left-[11px] w-[2px] origin-top rounded-full bg-gradient-to-b from-violet-300 via-violet-500 to-fuchsia-500 sm:left-[19px]"
            style={reduce ? { scaleY: 1 } : { scaleY: progress }}
            aria-hidden
          />

          <ol className="space-y-5">
            {EXPERIENCES.map((exp, i) => (
              <motion.li
                key={`${exp.account}-${exp.role}`}
                initial={{ opacity: 0, y: reduce ? 0 : 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span
                  className={`absolute top-6 -left-8 grid h-6 w-6 place-items-center rounded-full border sm:-left-12 sm:h-10 sm:w-10 ${
                    exp.current
                      ? "border-violet-300/60 bg-violet-500/25 shadow-[0_0_18px_rgba(139,92,246,0.6)]"
                      : "border-white/15 bg-[#14142a]"
                  }`}
                  aria-hidden
                >
                  <Briefcase className="h-3 w-3 text-violet-200 sm:h-4 sm:w-4" />
                </span>

                <article
                  onClick={() => setSelected(exp)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(exp);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details: ${exp.role}, ${exp.account}`}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 outline-none hover:border-violet-300/35 hover:bg-white/[0.06] focus-visible:border-violet-300/60"
                >
                  <div className="flex flex-wrap items-center gap-2 p-5 pb-0 sm:p-6 sm:pb-0">
                    {exp.current && (
                      <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold tracking-widest text-emerald-200">
                        ● CURRENT
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10.5px] text-violet-200">
                      <CalendarDays className="h-3 w-3" aria-hidden /> {exp.period}
                    </span>
                    <span className="ml-auto hidden font-mono text-xs text-slate-500 sm:block">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">{exp.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-violet-200">{exp.account} • TCS</p>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-slate-300">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300" aria-hidden />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5" aria-label={`Technologies: ${exp.stack.join(", ")}`}>
                      {exp.stack.map((t, ti) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + ti * 0.05 }}
                          className="rounded-full border border-violet-300/20 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold text-violet-100 transition group-hover:border-violet-300/35"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold tracking-wide text-violet-300/70 transition group-hover:text-violet-200">
                      View details <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Detail modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.role} at ${selected.account} — details`}
            >
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/12 bg-[#12121f] p-6 sm:p-8"
              >
                <div className="-m-6 mb-5 h-20 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 sm:-m-8 sm:mb-6" aria-hidden />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10.5px] text-violet-200">
                        <CalendarDays className="h-3 w-3" aria-hidden /> {selected.period}
                      </span>
                      {selected.duration && (
                        <span className="rounded-full bg-violet-500/20 px-2.5 py-1 text-[10.5px] font-bold text-violet-100">
                          {selected.duration}
                        </span>
                      )}
                      {selected.current && (
                        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold tracking-widest text-emerald-200">
                          ● CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-xl font-extrabold tracking-tight text-white">{selected.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-violet-200">{selected.account} • TCS</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close experience details"
                    autoFocus
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 text-slate-300 hover:text-white"
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </button>
                </div>

                <p className="mt-5 font-mono text-[10px] tracking-[0.24em] text-slate-500">TECHNOLOGIES</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selected.stack.map((t) => (
                    <span key={t} className="rounded-full border border-violet-300/25 bg-violet-500/12 px-2.5 py-1 text-[11px] font-semibold text-violet-100">
                      {t}
                    </span>
                  ))}
                </div>

                {selected.responsibilities && (
                  <>
                    <p className="mt-5 font-mono text-[10px] tracking-[0.24em] text-slate-500">RESPONSIBILITIES</p>
                    <ul className="mt-2 space-y-2">
                      {selected.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-slate-300">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {selected.note && (
                  <p className="mt-4 rounded-2xl border border-dashed border-violet-300/30 bg-violet-500/8 p-3 text-xs leading-relaxed text-slate-300">
                    {selected.note}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
