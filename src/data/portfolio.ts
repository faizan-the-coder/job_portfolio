// ─────────────────────────────────────────────────────────────
// EDIT ME — central content config. All placeholders live here.
// Replace placeholder URLs / education / projects with real data.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Faizan Khan",
  firstName: "Faizan",
  title: "Software Engineer",
  subtitle: "SAP UI5 Developer",
  company: "Tata Consultancy Services (TCS)",
  companyShort: "TCS",
  location: "Lucknow, India",
  experience: "5+ Years Experience",
  id: "FK-TCS-2021",
  status: "ACTIVE" as const,
  availability: "Open to Opportunities",
  email: "fk100faizan@gmail.com",
  photo: "/profile.png", // transparent cutout. Original: images/my_image.JPG
  photoAlt: "Portrait of Faizan Khan, Software Engineer",
  tagline: "Software Engineer building thoughtful digital experiences.",
  stackLine: "SAP UI5 • TypeScript • React • Python",
} as const;

export const LINKS = {
  // `portfolio` is the future production URL — update after deployment.
  linkedin: "https://linkedin.com/in/faizan-khan-professional",
  github: "https://github.com/faizan-the-coder",
  // ↓↓↓ EDIT ME — paste the real "Coding Lifestyle 4u" channel URL here
  youtube: "https://www.youtube.com/@codinglifestyle4u",
  portfolio: "https://job-portfolio-plum-chi.vercel.app", // production URL — update if the domain changes
} as const;

export const YOUTUBE_CHANNEL_NAME = "Coding Lifestyle 4u";

export const WHATSAPP = {
  display: "+91 79051 12734",
  // Opens a direct chat — do not display this raw URL, use it as href only.
  href: "https://wa.me/917905112734",
} as const;

// Contact form delivery via Formspree. Submissions go to fk100faizan@gmail.com.
// (First submission needs email confirmation — check inbox/spam after testing.)
export const CONTACT_ENDPOINT = "https://formspree.io/f/mwlkwnwn";

// ── Recruiter quick facts ──
export const RESUME_PATH = "/resume.pdf"; // ← replace public/resume.pdf with your real resume

// ── SEO / sharing (update `url` after deployment) ──
export const SEO = {
  title: "Faizan Khan | Software Engineer | SAP UI5 Developer",
  description:
    "Faizan Khan is a Software Engineer at TCS with 5+ years of experience across SAP UI5, JavaScript, React.js and Python. Based in Lucknow, India.",
  url: LINKS.portfolio, // ← production URL of this portfolio
  image: "/profile.png", // reused site asset; swap for a dedicated og-image later if wanted
  type: "website",
} as const;

export type Experience = {
  account: string;
  role: string;
  period: string;
  yearsLabel: string;
  points: string[];
  stack: string[];
  current?: boolean;
  /** Shown inside the detail modal. Honest, professional wording only. */
  duration?: string;
  responsibilities?: string[];
  note?: string;
};

export const CANVAS_NOTE =
  "Also experienced with Canvas content management — publishing and maintaining content used across Pfizer web properties.";

export const EXPERIENCES: Experience[] = [
  {
    account: "TCS — SAP Account",
    role: "SAP UI5 Developer",
    period: "2025 – Present",
    yearsLabel: "2025",
    current: true,
    points: [
      "Building and enhancing enterprise SAP UI5 interfaces on MVC architecture",
      "Implementing new features and fixing defects across UI modules",
      "Collaborating in Agile ceremonies with Git-based workflows",
    ],
    stack: ["SAP UI5", "SAP Fiori", "OData", "SAP BTP", "SAP CPI", "SAP CPQ 2.0", "JavaScript", "MVC", "Git", "Agile"],
    duration: "≈ 8 months • Current",
    responsibilities: [
      "SAP UI5 application development",
      "UI enhancements",
      "Feature implementation",
      "Bug fixing",
      "Frontend development",
      "Working with enterprise requirements",
      "Git-based development",
      "Agile collaboration",
    ],
  },
  {
    account: "TCS — SAP Account",
    role: "React.js / Python Developer",
    period: "2025",
    yearsLabel: "2025",
    points: [
      "Built React.js interfaces with JavaScript components",
      "Developed Python + Flask utilities including PowerPoint automation",
    ],
    stack: ["React.js", "JavaScript", "Python", "Flask"],
    responsibilities: [
      "Worked on React.js frontend development",
      "Worked with Python and Flask",
      "Built PowerPoint generation functionality using Python and Flask",
    ],
  },
  {
    account: "TCS — NielsenIQ",
    role: "React.js Developer",
    period: "2025",
    yearsLabel: "2025",
    points: [
      "Frontend development and UI enhancements",
      "JavaScript-driven interface improvements",
    ],
    stack: ["React.js", "JavaScript", "Frontend"],
    duration: "≈ 3 months",
    responsibilities: [
      "Worked on React.js application development",
      "Implemented frontend/UI enhancements",
      "Worked on application tasks and issue resolution",
    ],
  },
  {
    account: "TCS — Pfizer",
    role: "Frontend Developer",
    period: "2021 – 2024",
    yearsLabel: "2021–24",
    points: [
      "Translated Figma designs into production UI with Hugo, HTML, CSS and JavaScript",
      "Managed content in Canvas CMS alongside Jira + Agile delivery",
    ],
    stack: ["Hugo", "HTML", "CSS", "JavaScript", "Figma-to-UI", "Jira", "Agile"],
    duration: "≈ 3.5 years",
    responsibilities: [
      "Built website UI from Figma designs",
      "Implemented frontend functionality",
      "Developed pages using the Hugo static site generator",
      "Worked on UI enhancements and content-related updates",
      "Worked within Jira/Agile workflows",
    ],
    note: CANVAS_NOTE,
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  blurb: string;
  skills: { name: string; desc: string; related: string[] }[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "monitor",
    blurb: "Enterprise interfaces, design-to-UI, component-driven builds.",
    skills: [
      { name: "SAP UI5", desc: "MVC apps, data binding, Fiori-style UI", related: ["JavaScript", "MVC", "Git"] },
      { name: "JavaScript", desc: "Modern ES6+, DOM, async, REST integration", related: ["React.js", "SAP UI5", "REST APIs"] },
      { name: "TypeScript", desc: "Typed JavaScript, interfaces, safer components", related: ["JavaScript", "React.js"] },
      { name: "React.js", desc: "Components, hooks, state, UI enhancements", related: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
      { name: "Redux Toolkit", desc: "Predictable state management for React apps", related: ["React.js", "TypeScript"] },
      { name: "HTML5", desc: "Semantic, accessible markup", related: ["CSS3", "JavaScript"] },
      { name: "CSS3", desc: "Responsive layouts, modern styling", related: ["HTML5", "Figma-to-UI"] },
    ],
  },
  {
    title: "SAP Ecosystem",
    icon: "briefcase",
    blurb: "Current craft — enterprise CPQ on SAP BTP.",
    skills: [
      { name: "SAP Fiori", desc: "Fiori UX patterns, launchpad-style apps", related: ["SAP UI5", "OData"] },
      { name: "OData", desc: "Services, data binding, metadata", related: ["SAP UI5", "SAP Fiori", "JavaScript"] },
      { name: "SAP BTP", desc: "Destinations and cloud services", related: ["SAP CPI", "OData"] },
      { name: "SAP CPI", desc: "iFlows and backend integrations", related: ["SAP BTP", "OData"] },
      { name: "SAP CPQ 2.0", desc: "Quotes, pricing, approvals, e-signatures", related: ["SAP UI5", "JavaScript"] },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    blurb: "Lightweight services and automation behind the UI.",
    skills: [
      { name: "Python", desc: "Scripting, automation, tutorials", related: ["Flask", "REST APIs"] },
      { name: "Flask", desc: "Routes, Jinja, small REST services", related: ["Python", "REST APIs"] },
      { name: "REST APIs", desc: "Consume + integrate JSON services", related: ["JavaScript", "Flask"] },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    blurb: "Day-to-day delivery workflow.",
    skills: [
      { name: "Git", desc: "Branching, reviews, collaboration", related: ["GitHub", "Agile"] },
      { name: "GitHub", desc: "Repos, PRs, project hosting", related: ["Git", "VS Code"] },
      { name: "Jira", desc: "Agile boards, tickets, sprints", related: ["Agile"] },
      { name: "Postman", desc: "API testing and debugging", related: ["REST APIs"] },
      { name: "GitHub Actions", desc: "CI/CD workflows", related: ["Git", "GitHub"] },
      { name: "VS Code", desc: "Primary editor + debugging", related: ["Git", "JavaScript"] },
    ],
  },
  {
    title: "Other",
    icon: "sparkles",
    blurb: "Adjacent strengths from enterprise delivery.",
    skills: [
      { name: "Hugo", desc: "Static-site builds for Pfizer web", related: ["HTML5", "CSS3"] },
      { name: "Figma-to-UI", desc: "Pixel-faithful production UI", related: ["HTML5", "CSS3"] },
      { name: "Agile", desc: "Sprints, standups, retros", related: ["Jira", "Git"] },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Python" | "Tkinter" | "React" | "SAP UI5" | "Pfizer";
  description: string;
  longDescription: string;
  stack: string[];
  gradient: string;
  icon: string;
  /** Only set these when you have a REAL URL — buttons render only if present. */
  liveUrl?: string;
  githubUrl?: string;
  /** Self-hosted screenshot (public/thumbs) — gradient shows on error. */
  thumbnail?: string;
};

// Honest project cards grounded in real experience (tutorials + enterprise
// work). No invented clients, metrics, repos or URLs. To attach a repo/demo,
// just add `githubUrl` / `liveUrl` to the entry — the buttons appear automatically.
export const PROJECTS: Project[] = [
  {
    slug: "python-tutorial-projects",
    title: "Python Tutorial Projects",
    category: "Python",
    description: "Beginner-friendly Python projects taught step-by-step on the Coding Lifestyle 4u YouTube channel.",
    longDescription:
      "Hands-on Python mini-projects — CLI apps, file utilities and automation scripts — built live in tutorials for first-time programmers. Each project is kept small, readable and easy to extend.",
    stack: ["Python", "CLI", "YouTube"],
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    icon: "terminal",
  },
  {
    slug: "tkinter-desktop-apps",
    title: "Tkinter Desktop Apps",
    category: "Tkinter",
    description: "Desktop applications with Tkinter — forms, validation, lists and local persistence, taught for beginners.",
    longDescription:
      "Practical Tkinter walkthroughs from the channel: windows, widgets, event handling and layouts that turn scripts into usable desktop apps.",
    stack: ["Python", "Tkinter", "Desktop"],
    gradient: "from-fuchsia-600 via-purple-600 to-violet-800",
    icon: "app-window",
  },
  {
    slug: "flask-utilities-automation",
    title: "Flask Utilities & Automation",
    category: "Python",
    description: "Flask services and Python automation utilities, including PowerPoint generation from SAP-account work.",
    longDescription:
      "Lightweight Flask routes, JSON responses and templating, plus automation-style utilities (e.g. PowerPoint generation) built during enterprise delivery. Enterprise code is private, so this card documents the approach.",
    stack: ["Python", "Flask", "REST APIs"],
    gradient: "from-slate-700 via-violet-800 to-purple-900",
    icon: "server",
  },
  {
    slug: "react-enterprise-interfaces",
    title: "React Enterprise Interfaces",
    category: "React",
    description: "Component-driven React interfaces from NielsenIQ and SAP accounts — hooks, state and UI enhancements.",
    longDescription:
      "Production React work: components, hooks, state management and JavaScript-driven UI enhancements delivered in Agile teams. Enterprise code is private, so this card documents the patterns used.",
    stack: ["React.js", "JavaScript", "CSS3"],
    gradient: "from-indigo-600 via-violet-600 to-purple-800",
    icon: "atom",
  },
  {
    slug: "harmonyquote-sap-ui5",
    title: "HarmonyQuote (SAP)",
    category: "SAP UI5",
    description: "Internal enterprise quoting application — SAP UI5 development on my current TCS SAP account.",
    longDescription:
      "Day-to-day SAP UI5 work on HarmonyQuote: MVC views, data binding, feature implementation, UI enhancements and bug fixing against enterprise requirements. Client-internal tool, so there is no public link or screenshots — this card documents my role and stack.",
    stack: ["SAP UI5", "JavaScript", "MVC"],
    gradient: "from-purple-700 via-violet-700 to-indigo-900",
    icon: "briefcase",
  },
  {
    slug: "pfizer-comirnaty",
    title: "Comirnaty.com (Pfizer)",
    category: "Pfizer",
    description: "Public Pfizer website I contributed frontend development to as part of the TCS team.",
    longDescription:
      "Contributed production UI from Figma designs using Hugo, HTML, CSS and JavaScript, plus content updates through Agile/Jira delivery. Team-built site — my part was frontend implementation and UI enhancements.",
    stack: ["Hugo", "HTML5", "CSS3", "JavaScript"],
    gradient: "from-violet-600 via-indigo-600 to-slate-900",
    icon: "globe",
    liveUrl: "https://comirnaty.com",
    thumbnail: "/thumbs/pfizer-comirnaty.jpg",
  },
  {
    slug: "pfizer-cvdvaccine-us",
    title: "CVDVaccine-US.com (Pfizer)",
    category: "Pfizer",
    description: "Public Pfizer website I contributed frontend development to as part of the TCS team.",
    longDescription:
      "Contributed production UI from Figma designs using Hugo, HTML, CSS and JavaScript, plus content updates through Agile/Jira delivery. Team-built site — my part was frontend implementation and UI enhancements.",
    stack: ["Hugo", "HTML5", "CSS3", "JavaScript"],
    gradient: "from-purple-600 via-violet-700 to-indigo-900",
    icon: "globe",
    liveUrl: "https://cvdvaccine-us.com",
    thumbnail: "/thumbs/pfizer-cvdvaccine-us.jpg",
  },
  {
    slug: "pfizer-paxlovid",
    title: "Paxlovid.com (Pfizer)",
    category: "Pfizer",
    description: "Public Pfizer website I contributed frontend development to as part of the TCS team.",
    longDescription:
      "Contributed production UI from Figma designs using Hugo, HTML, CSS and JavaScript, plus content updates through Agile/Jira delivery. Team-built site — my part was frontend implementation and UI enhancements.",
    stack: ["Hugo", "HTML5", "CSS3", "JavaScript"],
    gradient: "from-fuchsia-600 via-purple-700 to-indigo-900",
    icon: "globe",
    liveUrl: "https://paxlovid.com",
    thumbnail: "/thumbs/pfizer-paxlovid.jpg",
  },
  {
    slug: "pfizer-covisus",
    title: "CovisUS.com (Pfizer)",
    category: "Pfizer",
    description: "Public Pfizer website I contributed frontend development to as part of the TCS team.",
    longDescription:
      "Contributed production UI from Figma designs using Hugo, HTML, CSS and JavaScript, plus content updates through Agile/Jira delivery. Team-built site — my part was frontend implementation and UI enhancements.",
    stack: ["Hugo", "HTML5", "CSS3", "JavaScript"],
    gradient: "from-indigo-600 via-purple-700 to-slate-900",
    icon: "globe",
    liveUrl: "https://covisus.com",
    thumbnail: "/thumbs/pfizer-covisus.jpg",
  },
  {
    slug: "pfizer-covid19",
    title: "Covid19Pfizer.com (Pfizer)",
    category: "Pfizer",
    description: "Public Pfizer website I contributed frontend development to as part of the TCS team.",
    longDescription:
      "Contributed production UI from Figma designs using Hugo, HTML, CSS and JavaScript, plus content updates through Agile/Jira delivery. Team-built site — my part was frontend implementation and UI enhancements.",
    stack: ["Hugo", "HTML5", "CSS3", "JavaScript"],
    gradient: "from-violet-700 via-indigo-700 to-slate-900",
    icon: "globe",
    liveUrl: "https://covid19pfizer.com",
    thumbnail: "/thumbs/pfizer-covid19.jpg",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech)",
  university: "Integral University",
  year: "2020",
} as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "sparkles" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;
