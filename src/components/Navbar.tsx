import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "../data/portfolio";
import { iconFor } from "./icons";

export function Navbar() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop top mini-brand */}
      <header className="fixed inset-x-0 top-0 z-40 hidden justify-center pt-4 md:flex">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0e0e1c]/70 py-2 pr-5 pl-2.5 shadow-lg shadow-black/30 backdrop-blur-xl transition hover:border-violet-400/40"
          aria-label="Faizan Khan — back to top"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-purple-800 text-sm font-extrabold text-white">
            FK
          </span>
          <span className="text-sm font-bold tracking-tight text-white">
            Faizan Khan
            <span className="ml-2 hidden rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 lg:inline">
              Open to Opportunities
            </span>
          </span>
        </a>
      </header>

      {/* Floating bottom nav — pill on desktop, full-width bar on mobile */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3 sm:pb-5"
      >
        <div className="relative flex w-full max-w-xl items-center justify-between gap-0.5 rounded-2xl border border-white/10 bg-[#0d0d1b]/80 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:w-auto sm:gap-1 sm:rounded-full sm:px-2">
          {NAV_ITEMS.map((item) => {
            const Icon = iconFor(item.icon);
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Go to ${item.label}`}
                className={`relative flex min-h-[48px] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl px-1 py-1.5 text-[10px] font-semibold transition-colors sm:min-w-[76px] sm:flex-none sm:rounded-full sm:px-4 sm:text-[11px] ${
                  isActive ? "text-white" : "text-slate-400 hover:text-violet-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-b from-violet-500/90 to-purple-700/90 shadow-lg shadow-violet-900/50 sm:rounded-full"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon className="relative h-[18px] w-[18px] shrink-0" strokeWidth={2.2} aria-hidden />
                <span className="relative max-w-full truncate tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
