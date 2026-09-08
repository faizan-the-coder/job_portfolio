import { useState, type FormEvent } from "react";
import { FileDown, Linkedin, Loader2, Mail, Send, Youtube } from "lucide-react";
import { CONTACT_ENDPOINT, LINKS, PROFILE, RESUME_PATH, WHATSAPP, YOUTUBE_CHANNEL_NAME } from "../data/portfolio";
import { WhatsAppIcon } from "./icons";
import { Reveal, SectionHeading } from "./ui";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback" | "error">("idle");

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Please enter a valid email.";
    if (message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("sending");

    // ── Backend delivery (e.g. Formspree — set CONTACT_ENDPOINT in portfolio.ts) ──
    if (CONTACT_ENDPOINT) {
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error(`delivery failed: ${res.status}`);
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // Fallback (no backend configured): open WhatsApp with the message
    // prefilled — stays in the browser, no mail app involved.
    const text = encodeURIComponent(`Hi Faizan! I'm ${name} (${email}).\n\n${message}`);
    window.open(`${WHATSAPP.href}?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("fallback");
  };

  const inputCls = (bad?: string) =>
    `w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 transition outline-none ${
      bad
        ? "border-red-400/60 focus:border-red-300"
        : "border-white/10 focus:border-violet-300/60 focus:bg-violet-500/8"
    }`;

  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-24 px-4 pt-16 pb-28 sm:px-6 sm:pt-24 sm:pb-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something."
          sub="Interested in working together or discussing an opportunity? I'd love to hear from you."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-violet-600/20 to-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.24em] text-violet-200">DIRECT LINES</p>
              <h3 className="mt-2 text-xl font-extrabold text-white">{PROFILE.name}</h3>
              <p className="text-sm text-slate-400">
                {PROFILE.title} • {PROFILE.subtitle}
              </p>
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-violet-300/40"
                aria-label={`Email ${PROFILE.email}`}
              >
                <Mail className="h-4 w-4 shrink-0 text-violet-300" aria-hidden />
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-500">EMAIL</span>
                  <span className="block truncate font-semibold text-white">{PROFILE.email}</span>
                </span>
              </a>
              <a
                href={WHATSAPP.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-emerald-300/40"
                aria-label={`Chat on WhatsApp ${WHATSAPP.display}`}
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-300" />
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-500">WHATSAPP</span>
                  <span className="block font-semibold text-white">{WHATSAPP.display}</span>
                </span>
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-red-400/40"
                aria-label={`YouTube channel ${YOUTUBE_CHANNEL_NAME}`}
              >
                <Youtube className="h-4 w-4 shrink-0 text-red-400" aria-hidden />
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-500">YOUTUBE</span>
                  <span className="block truncate font-semibold text-white">{YOUTUBE_CHANNEL_NAME}</span>
                </span>
              </a>
            </div>
            <div className="mt-4 grid gap-2.5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#14101f] transition hover:bg-violet-100 active:scale-[0.99]"
              >
                <Mail className="h-4 w-4" aria-hidden /> Email Me
              </a>
              <a
                href={WHATSAPP.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-[#062b16] shadow-lg shadow-emerald-950/40 transition hover:brightness-110 active:scale-[0.99]"
                aria-label="Start a WhatsApp conversation"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" /> WhatsApp Me
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-violet-300/50 hover:bg-violet-500/15 active:scale-[0.99]"
              >
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
              <a
                href={RESUME_PATH}
                download="Faizan-Khan-Resume.pdf"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 text-[13px] font-bold text-violet-200 transition hover:text-white"
                aria-label="Download resume as PDF"
              >
                <FileDown className="h-4 w-4" aria-hidden /> Download Resume (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <form onSubmit={onSubmit} noValidate aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="mb-1.5 block text-xs font-bold text-slate-300">
                    Name
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-err" : undefined}
                    className={inputCls(errors.name)}
                  />
                  {errors.name && (
                    <p id="cf-name-err" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-email" className="mb-1.5 block text-xs font-bold text-slate-300">
                    Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cf-email-err" : undefined}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && (
                    <p id="cf-email-err" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="cf-msg" className="mb-1.5 block text-xs font-bold text-slate-300">
                  Message
                </label>
                <textarea
                  id="cf-msg"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "cf-msg-err" : undefined}
                  className={`${inputCls(errors.message)} resize-y`}
                />
                {errors.message && (
                  <p id="cf-msg-err" role="alert" className="mt-1.5 text-xs text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-700 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-950/50 transition hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden /> Send Message
                  </>
                )}
              </button>
              <div aria-live="polite" className="mt-3 min-h-[20px] text-center text-xs">
                {status === "sent" && <p className="text-emerald-300">Thanks! Your message has been sent.</p>}
                {status === "fallback" && (
                  <p className="text-slate-400">
                    Opening WhatsApp to send your message… add a CONTACT_ENDPOINT in portfolio.ts
                    to send directly from the form instead.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-300">
                    Something went wrong. Please try again or contact me directly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
