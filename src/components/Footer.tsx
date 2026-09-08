import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { LINKS, PROFILE, WHATSAPP } from "../data/portfolio";
import { WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 pt-10 pb-28 sm:px-6 sm:pb-32" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-purple-800 text-sm font-extrabold text-white">
            FK
          </span>
          <div className="text-left">
            <p className="text-sm font-extrabold text-white">{PROFILE.name}</p>
            <p className="text-xs text-slate-400">
              {PROFILE.title} | {PROFILE.subtitle}
            </p>
          </div>
        </div>
        <nav aria-label="Social links" className="flex items-center gap-2">
          {[
            { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
            { href: LINKS.github, label: "GitHub", Icon: Github },
            { href: LINKS.youtube, label: "YouTube", Icon: Youtube },
            { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noreferrer"}
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-violet-300/50 hover:text-white"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden />
            </a>
          ))}
          <a
            href={WHATSAPP.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${WHATSAPP.display}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-300/50 hover:text-emerald-300"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </a>
        </nav>
        <p className="font-mono text-[11px] tracking-wider text-slate-500">© 2026 {PROFILE.name} • {PROFILE.location}</p>
      </div>
    </footer>
  );
}
