import { Code2, GraduationCap, Play } from "lucide-react";
import { EDUCATION, LINKS, YOUTUBE_CHANNEL_NAME } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";

export function YouTubeSection() {
  return (
    <section aria-label="Teaching" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1c1038] via-[#120e2a] to-[#0a0a18] p-6 sm:p-10">
          <div className="bg-dotgrid absolute inset-0 opacity-30" aria-hidden />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-red-500/15 blur-[90px]" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Teaching through code"
                title="Python, taught the practical way."
                sub="Beginner-friendly Python projects, Tkinter apps and hands-on coding tutorials on YouTube — no fluff, just builds."
              />
              <ul className="mx-auto -mt-6 mb-7 flex max-w-md flex-wrap justify-center gap-2">
                {["Python projects", "Tkinter", "Beginners", "Practical builds"].map((t) => (
                  <li key={t} className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <a
                  href={LINKS.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[50px] items-center gap-2.5 rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-950/50 transition hover:scale-[1.03] hover:bg-red-500"
                  aria-label="Explore tutorials on YouTube"
                >
                  <Play className="h-4 w-4 fill-current" aria-hidden /> Explore My Tutorials
                </a>
              </div>
            </div>

            {/* YouTube-style card */}
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              className="group mx-auto block w-full max-w-sm overflow-hidden rounded-3xl border border-white/12 bg-black/40 shadow-2xl transition hover:border-red-400/40"
              aria-label="Open YouTube channel"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-violet-700 via-purple-800 to-slate-900">
                <img
                  src="/thumbs/youtube-channel.jpg"
                  alt="Coding Lifestyle 4u YouTube channel page"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" aria-hidden />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-red-600/95 shadow-xl transition group-hover:scale-110">
                    <Play className="h-6 w-6 fill-white text-white" aria-hidden />
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 rounded-md bg-black/80 px-1.5 py-0.5 font-mono text-[10px] text-white">
                  181 VIDEOS
                </span>
              </div>
              <div className="flex gap-3 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-purple-800 text-xs font-extrabold text-white">
                  FK
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">Python Projects for Beginners — build along with me</span>
                  <span className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                    <Code2 className="h-3.5 w-3.5" aria-hidden /> {YOUTUBE_CHANNEL_NAME} • Coding tutorials
                  </span>
                </span>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Education */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-7">
            <h3 className="flex items-center gap-2 text-base font-extrabold text-white">
              <GraduationCap className="h-5 w-5 text-violet-300" aria-hidden /> Education
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-slate-500">DEGREE</dt>
                <dd className="mt-0.5 font-semibold text-slate-200">{EDUCATION.degree}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-slate-500">UNIVERSITY</dt>
                <dd className="mt-0.5 font-semibold text-slate-200">{EDUCATION.university}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-slate-500">YEAR</dt>
                <dd className="mt-0.5 font-semibold text-slate-200">{EDUCATION.year}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="flex items-center rounded-3xl border border-violet-300/20 bg-gradient-to-r from-violet-600/20 to-fuchsia-500/10 p-6 backdrop-blur-xl sm:p-7">
            <p className="text-[14px] leading-relaxed text-slate-200">
              <strong className="text-white">Currently</strong> an SAP UI5 Developer at TCS,
              shipping enterprise interfaces by day — and turning what I learn into
              beginner-friendly Python tutorials on{" "}
              <strong className="text-white">{YOUTUBE_CHANNEL_NAME}</strong> by passion.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
