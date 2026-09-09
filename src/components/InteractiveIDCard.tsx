import { useCallback, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { Briefcase, FlipHorizontal2, MapPin, ShieldCheck } from "lucide-react";
import { PROFILE } from "../data/portfolio";

/**
 * Lanyard → ring → connector tab. The tab overlaps the top edge of the
 * card (negative margin) so the badge reads as physically clipped on.
 */
function LanyardAssembly() {
  return (
    <div className="relative z-20 flex flex-col items-center" aria-hidden>
      {/* strap */}
      <div className="relative h-12 w-12 overflow-hidden rounded-b-xl rounded-t-sm border-x border-white/15 bg-gradient-to-b from-violet-300/70 via-violet-500/50 to-purple-700/60">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0_7px,rgba(255,255,255,0.12)_7px_8px)]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/30" />
      </div>
      {/* metal ring */}
      <div className="-mt-1 grid h-10 w-10 place-items-center rounded-full border-[3px] border-slate-300/80 bg-gradient-to-br from-slate-100 via-slate-400 to-slate-600 shadow-[0_6px_16px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.7)]">
        <div className="h-5 w-5 rounded-full bg-[#0b0b16] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]" />
      </div>
      {/* connector tab that plugs into the card slot */}
      <div className="-mb-2.5 mt-1 flex h-9 w-12 flex-col items-center rounded-md border border-white/25 bg-gradient-to-b from-slate-100/95 via-slate-400/90 to-slate-600/95 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <span className="mt-1 h-1.5 w-7 rounded-full bg-[#0b0b16]/85" />
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0b0b16]/70" />
      </div>
    </div>
  );
}

/** The punched slot at the top of the badge the clip feeds through. */
function SlotHole() {
  return (
    <div className="mx-auto mt-1 h-2 w-16 rounded-full bg-black/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.12)]" aria-hidden />
  );
}

/**
 * ONE shared frame definition — front and back faces both use it, so the
 * outer rectangle (position, size, radius, border, shadow, clipping) is
 * pixel-for-pixel identical. Only the face-specific background artwork and
 * the inner content differ. Neither face can influence the card dimensions:
 * the single outer container (`aspect-ratio: 1 / 1.45`) owns the size.
 */
const CARD_FRAME =
  "absolute inset-0 box-border h-full w-full overflow-hidden rounded-[22px] border border-white/15 shadow-[0_32px_70px_-20px_rgba(124,58,237,0.55),0_14px_32px_rgba(0,0,0,0.6)]";
const CARD_BODY =
  "relative flex h-full min-h-0 flex-col overflow-hidden px-4 pt-2 pb-3";

export function InteractiveIDCard() {
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.6 });

  const rotateY = useTransform(sx, [0, 1], [-11, 11]);
  const rotateX = useTransform(sy, [0, 1], [10, -10]);
  const glareX = useTransform(sx, [0, 1], ["20%", "80%"]);
  const glareY = useTransform(sy, [0, 1], ["20%", "80%"]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 55%)`;
  const bgShiftX = useTransform(sx, [0, 1], [-10, 10]);
  const bgShiftY = useTransform(sy, [0, 1], [-8, 8]);

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      const el = wrapRef.current;
      if (!el || reduce) return;
      const r = el.getBoundingClientRect();
      mx.set(Math.min(1, Math.max(0, (clientX - r.left) / r.width)));
      my.set(Math.min(1, Math.max(0, (clientY - r.top) / r.height)));
    },
    [mx, my, reduce]
  );

  const reset = useCallback(() => {
    setHovering(false);
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  // Clicking / tapping the badge flips it. A small drag threshold keeps
  // touch-tilting from accidentally triggering a flip.
  const downPos = useRef<{ x: number; y: number } | null>(null);
  const toggleFlip = useCallback(() => setFlipped((f) => !f), []);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={reduce ? "flex flex-col items-center" : "animate-swing flex flex-col items-center"}
      >
        {/* Tilt applies to the WHOLE hanging assembly so the lanyard
            responds together with the card. */}
        <motion.div
          ref={wrapRef}
          onMouseMove={(e) => {
            setHovering(true);
            handleMove(e.clientX, e.clientY);
          }}
          onMouseLeave={reset}
          onTouchMove={(e) => {
            const t = e.touches[0];
            if (t) handleMove(t.clientX, t.clientY);
          }}
          onTouchEnd={reset}
          style={reduce ? undefined : { rotateX, rotateY }}
          className="perspective-1600 preserve-3d flex w-[272px] flex-col items-center sm:w-[300px]"
        >
          <LanyardAssembly />

          {/* flip stage — the badge itself is the flip control.
              Fixed badge ratio 1 : 1.45. */}
          <div className="w-full">
            <motion.div
              className="preserve-3d relative mt-0 aspect-[1/1.45] w-full cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
              style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
              role="button"
              tabIndex={0}
              aria-pressed={flipped}
              aria-label={
                flipped
                  ? "ID card showing About Me. Activate to flip back to the front."
                  : "ID card front. Activate to flip to About Me."
              }
              onPointerDown={(e) => {
                downPos.current = { x: e.clientX, y: e.clientY };
              }}
              onClick={(e) => {
                const d = downPos.current;
                downPos.current = null;
                if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 12) return;
                toggleFlip();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFlip();
                }
              }}
            >
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
                className="preserve-3d relative h-full w-full"
              >
                {/* ── FRONT ─────────────────────────── */}
                <div
                  className={`backface-hidden flip-front card-sheen ${CARD_FRAME} bg-gradient-to-b from-[#1b1440] via-[#120f2b] to-[#0a0a18]`}
                  style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                >
                  <div className="safari-layer absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-500/35 to-transparent" aria-hidden />
                  <div className="safari-layer absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-fuchsia-300 via-violet-500 to-indigo-600" aria-hidden />
                  <motion.div
                    className="safari-layer pointer-events-none absolute inset-0"
                    style={reduce ? undefined : { background: glare }}
                    aria-hidden
                  />

                  <div className={CARD_BODY}>
                    <SlotHole />
                    <div className="mt-1.5 flex items-center justify-between text-[9.5px] font-semibold tracking-[0.22em] text-violet-200/90">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> {PROFILE.companyShort} • STAFF ID
                      </span>
                      <span className="flex items-center gap-1 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-2 py-0.5 text-[9px] font-bold tracking-widest text-emerald-200">
                        <span className="animate-pulse-dot h-1 w-1 rounded-full bg-emerald-300" aria-hidden />
                        {PROFILE.status}
                      </span>
                    </div>

                    {/* premium circular portrait — centered, contained, violet glow.
                        Fixed-size circle (flex-none) so there is no stretchy
                        flex-1 gap between photo and name. Outer card size is
                        still owned by aspect-[1/1.45]. No `filter: drop-shadow`
                        on the img: filters create a separate Safari compositing
                        layer that ignores the parent's backface-visibility. */}
                    <div className="relative mx-auto mt-2 flex w-full flex-none items-center justify-center">
                      <div
                        className="safari-layer absolute left-1/2 top-1/2 aspect-square h-[148px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-2xl sm:h-[162px]"
                        aria-hidden
                      />
                      <div className="safari-layer relative h-[148px] w-[148px] shrink-0 rounded-full bg-gradient-to-br from-violet-200 via-violet-500 to-purple-800 p-[3px] shadow-[0_0_28px_rgba(139,92,246,0.5),0_10px_24px_rgba(0,0,0,0.55),inset_0_1px_2px_rgba(255,255,255,0.4)] sm:h-[162px] sm:w-[162px]">
                        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#151032] bg-gradient-to-b from-[#241d55] to-[#0b0b18]">
                          <img
                            src={PROFILE.photo}
                            alt={PROFILE.photoAlt}
                            className="safari-layer h-full w-full scale-[1.18] rounded-full object-cover object-[50%_22%]"
                            loading="eager"
                            draggable={false}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-[24px] font-extrabold tracking-tight text-white">FAIZAN KHAN</h3>
                      <p className="mt-1 text-[13px] font-semibold text-violet-200">
                        {PROFILE.title} • {PROFILE.subtitle}
                      </p>
                      <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[11px] font-semibold text-slate-200">
                        {PROFILE.companyShort} • {PROFILE.experience}
                      </p>
                      <p className="mt-1.5 flex items-center justify-center gap-1 text-[11.5px] font-medium text-slate-300/90">
                        <MapPin className="h-3.5 w-3.5 text-violet-300" aria-hidden />
                        {PROFILE.location}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-2 border-t border-dashed border-white/15 pt-2.5">
                      <p className="font-mono text-[10.5px] tracking-[0.18em] text-slate-300/80">
                        {PROFILE.id}
                      </p>
                      <p className="flex items-center gap-1 font-mono text-[10px] tracking-[0.14em] text-violet-200/70">
                        <FlipHorizontal2 className="h-3.5 w-3.5" aria-hidden /> TAP TO FLIP
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── BACK — same CARD_FRAME, pre-rotated 180°. ── */}
                <div
                  className={`backface-hidden rotate-y-180 ${CARD_FRAME} bg-gradient-to-b from-[#171233] via-[#100d26] to-[#0a0a18]`}
                  style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                >
                  <div className="safari-layer absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-fuchsia-500/25 to-transparent" aria-hidden />
                  <div className="safari-layer absolute inset-y-0 right-0 w-1.5 bg-gradient-to-b from-indigo-400 via-violet-500 to-fuchsia-400" aria-hidden />
                  <motion.div
                    className="safari-layer pointer-events-none absolute inset-0"
                    style={reduce ? undefined : { background: glare }}
                    aria-hidden
                  />
                  <div className={`${CARD_BODY} text-left`}>
                    <SlotHole />

                    {/* identity header — same premium ring language as the front
                        portrait (gradient ring + violet glow + contained cover),
                        sized for the header row so the card keeps its exact size */}
                    <div className="relative mt-2 flex items-center gap-2.5">
                      <div
                        className="safari-layer absolute top-1/2 left-7 h-14 w-24 -translate-y-1/2 rounded-full bg-violet-500/25 blur-xl"
                        aria-hidden
                      />
                      <span className="safari-layer relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-200 via-violet-500 to-purple-800 p-[2.5px] shadow-[0_0_18px_rgba(139,92,246,0.45),0_6px_16px_rgba(0,0,0,0.5)]">
                        <span className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border border-[#151032] bg-gradient-to-b from-[#241d55] to-[#0b0b18]">
                          <img
                            src={PROFILE.photo}
                            alt=""
                            aria-hidden
                            className="safari-layer h-full w-full scale-[1.4] rounded-full object-cover object-[50%_22%]"
                            loading="lazy"
                            draggable={false}
                          />
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[8.5px] font-bold tracking-[0.3em] text-violet-300">
                          ABOUT ME
                        </span>
                        <span className="block truncate text-[15px] font-extrabold tracking-tight text-white">
                          Faizan Khan
                        </span>
                      </span>
                      <span className="ml-auto flex shrink-0 items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-1.5 py-0.5 text-[7.5px] font-bold tracking-widest text-emerald-200">
                        <span className="animate-pulse-dot h-1 w-1 rounded-full bg-emerald-300" aria-hidden />
                        {PROFILE.status}
                      </span>
                    </div>

                    {/* middle block centers itself in leftover space,
                        so content spreads evenly instead of pooling up top */}
                    <div className="my-auto">
                      <div
                        className="mt-2 h-px bg-gradient-to-r from-violet-400/70 via-fuchsia-400/30 to-transparent"
                        aria-hidden
                      />

                      <p className="mt-2.5 text-[11.5px] leading-relaxed text-slate-200/95">
                        Software Engineer with{" "}
                        <strong className="font-bold text-white">5+ years</strong> across frontend
                        development, SAP UI5, JavaScript, React.js and Python.
                      </p>

                      <p className="mt-2 flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-2 py-2 text-[10px] font-semibold text-slate-100">
                        <Briefcase className="h-3 w-3 shrink-0 text-violet-300" aria-hidden />
                        SAP UI5 Developer @ {PROFILE.companyShort}
                      </p>

                      <p className="mt-2.5 text-[8.5px] font-bold tracking-[0.3em] text-violet-300">
                        ENTERPRISE ACCOUNTS
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5" aria-label="Enterprise accounts">
                        {["Pfizer", "NielsenIQ", "SAP"].map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1 rounded-md border border-white/12 bg-white/[0.06] px-2 py-1 text-[10px] font-bold text-slate-100"
                          >
                            <span
                              className="h-1 w-1 rounded-full bg-gradient-to-r from-fuchsia-300 to-violet-300"
                              aria-hidden
                            />
                            {a}
                          </span>
                        ))}
                      </div>

                      <p className="mt-2.5 text-[8.5px] font-bold tracking-[0.3em] text-violet-300">
                        SKILLS
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5" aria-label="Core skills">
                        {["SAP UI5", "JavaScript", "React", "Python", "Flask"].map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center gap-1 rounded-md border border-violet-300/25 bg-gradient-to-b from-violet-500/25 to-transparent px-2 py-1 text-[10px] font-semibold text-violet-100"
                          >
                            <span
                              className="h-1 w-1 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300"
                              aria-hidden
                            />
                            {s}
                          </span>
                        ))}
                      </div>

                      <p className="mt-2.5 flex items-center justify-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-emerald-200">
                        <span className="animate-pulse-dot h-1 w-1 rounded-full bg-emerald-300" aria-hidden />
                        {PROFILE.availability}
                      </p>
                    </div>
                    <p className="mt-2 border-t border-dashed border-white/15 pt-1.5 text-center font-mono text-[8.5px] tracking-[0.26em] text-slate-300/70">
                      {PROFILE.id}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* parallax dust behind card */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-40 -z-10 hidden h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[110px] md:block"
        style={reduce ? undefined : { x: bgShiftX, y: bgShiftY }}
        aria-hidden
      />
      <span className="sr-only">{hovering ? "Card tilting with cursor." : ""}</span>
    </div>
  );
}
