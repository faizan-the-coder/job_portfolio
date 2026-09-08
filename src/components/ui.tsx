import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.16}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300/90">{sub}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
