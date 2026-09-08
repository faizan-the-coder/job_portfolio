import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, LayoutGrid, X } from "lucide-react";
import { PROJECTS, type Project } from "../data/portfolio";
import { iconFor } from "./icons";
import { Reveal, SectionHeading } from "./ui";

const FILTERS = ["All", "Python", "Tkinter", "React", "SAP UI5", "Pfizer"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Project Showcase"
          sub="Tutorial builds and enterprise work patterns — Python teaching, Tkinter, React, SAP UI5 and Flask."
        />

        <Reveal className="mb-8 flex flex-wrap items-center justify-center gap-2">
          <LayoutGrid className="h-4 w-4 text-violet-300" aria-hidden />
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`min-h-[40px] rounded-full px-4 py-2 text-xs font-bold transition ${
                filter === f
                  ? "bg-gradient-to-r from-violet-500 to-purple-700 text-white shadow-lg shadow-violet-950/50"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-violet-300/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const Icon = iconFor(p.icon);
              return (
                <motion.article
                  layout
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-violet-300/35 hover:shadow-[0_24px_60px_-16px_rgba(124,58,237,0.5)]"
                >
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    <div className="bg-dotgrid absolute inset-0 opacity-40" aria-hidden />
                    {p.thumbnail && (
                      <img
                        src={p.thumbnail}
                        alt={`${p.title} homepage preview`}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />
                    {!p.thumbnail && (
                      <Icon
                        className="absolute right-4 bottom-3 h-16 w-16 text-white/25 transition duration-500 group-hover:scale-110 group-hover:text-white/40"
                        aria-hidden
                      />
                    )}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur">
                        {p.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[15px] font-extrabold tracking-tight text-white">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-300">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full bg-white/6 border border-white/10 px-2 py-0.5 font-mono text-[10.5px] text-violet-200">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2 pt-1">
                      <button
                        onClick={() => setOpen(p)}
                        className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-4 text-xs font-bold text-[#14101f] transition hover:bg-violet-100"
                        aria-label={`View details of ${p.title}`}
                      >
                        View Project <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </button>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.title} on GitHub`}
                          className="grid min-h-[42px] w-[42px] place-items-center rounded-full border border-white/12 text-slate-200 transition hover:border-violet-300/50 hover:text-white"
                        >
                          <Github className="h-4 w-4" aria-hidden />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
              onClick={() => setOpen(null)}
              role="dialog"
              aria-modal="true"
              aria-label={`${open.title} details`}
            >
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/12 bg-[#12121f] p-6 sm:p-8"
              >
                <div className={`relative -m-6 mb-5 h-36 overflow-hidden bg-gradient-to-br sm:-m-8 sm:mb-6 ${open.gradient}`} aria-hidden>
                  {open.thumbnail && (
                    <img
                      src={open.thumbnail}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-violet-300">{open.category.toUpperCase()}</p>
                    <h3 className="mt-1 text-xl font-extrabold text-white">{open.title}</h3>
                  </div>
                  <button
                    onClick={() => setOpen(null)}
                    aria-label="Close project details"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 text-slate-300 hover:text-white"
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </button>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{open.longDescription}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {open.stack.map((s) => (
                    <span key={s} className="rounded-full border border-violet-300/25 bg-violet-500/12 px-2.5 py-1 text-[11px] font-semibold text-violet-100">
                      {s}
                    </span>
                  ))}
                </div>
                {!open.liveUrl && !open.githubUrl && (
                  <p className="mt-4 rounded-2xl border border-dashed border-white/20 bg-white/5 p-3 text-xs leading-relaxed text-slate-400">
                    Links live here — add a real <code className="font-mono text-violet-200">githubUrl</code>{" "}
                    / <code className="font-mono text-violet-200">liveUrl</code> in{" "}
                    <code className="font-mono text-violet-200">src/data/portfolio.ts</code>.
                  </p>
                )}
                <div className="mt-5 flex gap-2">
                  {open.liveUrl && (
                    <a href={open.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-4 text-xs font-bold text-[#14101f]">
                      Live Demo <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )}
                  {open.githubUrl && (
                    <a href={open.githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 px-4 text-xs font-bold text-white">
                      <Github className="h-4 w-4" aria-hidden /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
