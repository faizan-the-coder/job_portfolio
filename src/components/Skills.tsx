import { useState } from "react";
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/portfolio";
import { iconFor } from "./icons";
import { Reveal, SectionHeading } from "./ui";

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills, grouped by craft"
          sub="No inflated percentages — just the stacks I ship with, and what each one means in practice."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = iconFor(group.icon);
            return (
              <Reveal key={group.title} delay={gi * 0.07}>
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-violet-300/30 sm:p-7">
                  <header className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-800 shadow-lg shadow-violet-950/60">
                      <Icon className="h-5 w-5 text-white" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold text-white">{group.title}</h3>
                      <p className="text-xs text-slate-400">{group.blurb}</p>
                    </div>
                  </header>
                  <ul className="mt-5 grid gap-2.5">
                    {group.skills.map((skill) => {
                      const isActive = activeSkill === skill.name;
                      const isDimmed =
                        activeSkill !== null &&
                        !isActive &&
                        !skill.related.includes(activeSkill);
                      return (
                        <motion.li
                          key={skill.name}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                          onFocus={() => setActiveSkill(skill.name)}
                          onBlur={() => setActiveSkill(null)}
                          animate={{ opacity: isDimmed ? 0.45 : 1, y: isActive ? -2 : 0 }}
                          transition={{ duration: 0.25 }}
                          tabIndex={0}
                          aria-label={`${skill.name}: ${skill.desc}`}
                          className={`cursor-default rounded-2xl border p-3.5 transition-colors ${
                            isActive
                              ? "border-violet-300/50 bg-violet-500/15 shadow-lg shadow-violet-950/40"
                              : "border-white/8 bg-white/[0.03] hover:border-violet-300/30"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-bold text-white">{skill.name}</p>
                            <p
                              className={`font-mono text-[10px] tracking-wider transition ${
                                isActive ? "text-violet-200" : "text-slate-500"
                              }`}
                            >
                              {isActive ? "◉ ACTIVE" : "◎ HOVER"}
                            </p>
                          </div>
                          <div
                            className={`grid transition-all duration-300 ${
                              isActive ? "mt-1.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-xs leading-relaxed text-slate-300">{skill.desc}</p>
                              <p className="mt-1.5 font-mono text-[10.5px] text-violet-300/90">
                                pairs with → {skill.related.join(" • ")}
                              </p>
                            </div>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
