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
  portfolio: "https://faizan-devfolio.vercel.app", // production URL — update if the domain changes
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
  category: "Full Stack" | "Python" | "Machine Learning" | "Game" | "React" | "SAP UI5" | "Pfizer";
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
    slug: "employee-management-fullstack",
    title: "Employee Management Full Stack",
    category: "Full Stack",
    description:
      "Employee records web app with separate HR and employee dashboards, JWT authentication and protected routes.",
    longDescription:
      "React (Vite) frontend talking to a Flask REST backend. HR users manage employee records while employees get their own dashboard; routes are guarded with JWT and passwords are hashed with Flask-Bcrypt. Data is persisted through Flask-SQLAlchemy.",
    stack: ["React", "Flask", "SQLite", "JWT"],
    gradient: "from-indigo-600 via-violet-600 to-purple-800",
    icon: "app-window",
    githubUrl: "https://github.com/faizan-the-coder/employee-management-fullstack",
    thumbnail: "/thumbs/employee-management.png",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    category: "Python",
    description:
      "Desktop inventory system with role-based dashboards, billing with PDF invoices, stock tracking and purchase orders.",
    longDescription:
      "CustomTkinter desktop application backed by MySQL. Admins, employees and suppliers each get a tailored dashboard, covering product, category and supplier management, stock adjustments, billing with PDF invoice export and purchase orders. Sign-in supports email OTP verification.",
    stack: ["Python", "CustomTkinter", "MySQL", "PDF invoices"],
    gradient: "from-violet-600 via-purple-700 to-indigo-900",
    icon: "monitor",
    githubUrl: "https://github.com/faizan-the-coder/inventory-management-system",
    thumbnail: "/thumbs/inventory-management.png",
  },
  {
    slug: "clinic-management-advanced",
    title: "Clinic Management Advanced",
    category: "Python",
    description:
      "Clinic desktop application for patients, doctors and appointments, with billing that produces QR-coded PDF invoices.",
    longDescription:
      "Tkinter/ttk application over MySQL, with tables for doctors, patients, appointments, medicines, prescriptions and bills. Includes a dashboard, patient and doctor management, appointment scheduling, and a billing module that renders PDF invoices with a UPI QR code. Passwords are hashed with bcrypt.",
    stack: ["Python", "Tkinter", "MySQL", "QR / PDF"],
    gradient: "from-fuchsia-600 via-purple-700 to-violet-900",
    icon: "briefcase",
    githubUrl: "https://github.com/faizan-the-coder/clinic-management-advanced",
    thumbnail: "/thumbs/clinic-management.png",
  },
  {
    slug: "face-recognition-attendance",
    title: "Face Recognition Attendance",
    category: "Machine Learning",
    description:
      "Attendance system that identifies students from a webcam feed, with sign-in handled by face verification.",
    longDescription:
      "Python desktop application using DeepFace/OpenCV for face recognition and MySQL for records. Covers student management, webcam-based attendance capture, attendance record views and Excel export via openpyxl.",
    stack: ["Python", "OpenCV", "DeepFace", "MySQL"],
    gradient: "from-purple-700 via-violet-700 to-indigo-900",
    icon: "user",
    githubUrl: "https://github.com/faizan-the-coder/face-recognition-attendance",
    thumbnail: "/thumbs/face-recognition-attendance.png",
  },
  {
    slug: "cyberbullying-detection-ml",
    title: "Cyberbullying Detection ML",
    category: "Machine Learning",
    description:
      "Text classifier that flags cyberbullying in social-media comments, served through a Gradio interface.",
    longDescription:
      "scikit-learn pipeline — TF-IDF (5,000 features) into logistic regression — trained on a labelled comment dataset, with accuracy reported on a held-out split. The Gradio interface takes a comment and returns a bullying / not-bullying flag, and each prediction is logged to SQLite.",
    stack: ["Python", "scikit-learn", "TF-IDF", "Gradio"],
    gradient: "from-violet-700 via-purple-800 to-slate-900",
    icon: "sparkles",
    githubUrl: "https://github.com/faizan-the-coder/cyberbullying-detection-ml",
    thumbnail: "/thumbs/cyberbullying-detection.png",
  },
  {
    slug: "bulk-email-sender",
    title: "Bulk Email Sender",
    category: "Python",
    description:
      "Desktop tool for sending emails to a recipient list, with attachments, saved SMTP profiles and a send history.",
    longDescription:
      "CustomTkinter application with separate single-email and bulk-campaign tabs. Recipients are imported from Excel/CSV by drag-and-drop, a reusable HTML template can be inserted into the body, attachments are queued per campaign, and every send is written to a history log. Light and dark themes.",
    stack: ["Python", "CustomTkinter", "SMTP", "pandas"],
    gradient: "from-indigo-600 via-violet-700 to-purple-900",
    icon: "mail",
    githubUrl: "https://github.com/faizan-the-coder/bulk-email-sender",
    thumbnail: "/thumbs/bulk-email-sender.png",
  },
  {
    slug: "space-shooter-game",
    title: "Space Shooter Game",
    category: "Game",
    description:
      "Arcade space shooter built with pygame — sprite-based ships, enemies and projectiles, with sound effects and background music.",
    longDescription:
      "Pygame game loop with sprite assets for the player ship, enemies and bullets, an on-screen score, collision-based explosions and audio for lasers and hits. Ships with a cx_Freeze script for building a Windows executable.",
    stack: ["Python", "pygame", "Sprites", "Audio"],
    gradient: "from-slate-800 via-indigo-800 to-violet-900",
    icon: "atom",
    githubUrl: "https://github.com/faizan-the-coder/space-shooter-game",
    thumbnail: "/thumbs/space-shooter-game.png",
  },
  {
    slug: "all-in-one-calculator",
    title: "All-in-One Calculator",
    category: "Python",
    description:
      "Desktop calculator with basic and scientific modes, saved calculation history, unit and currency conversion and a function plotter.",
    longDescription:
      "CustomTkinter interface with two calculation modes and history persisted to local JSON. Conversion covers temperature, number bases, general units and currency rates via forex-python, and a Matplotlib panel plots functions such as sine waves. Includes light and dark themes.",
    stack: ["Python", "CustomTkinter", "NumPy", "Matplotlib"],
    gradient: "from-violet-600 via-indigo-700 to-purple-900",
    icon: "wrench",
    githubUrl: "https://github.com/faizan-the-coder/all-in-one-calculator",
    thumbnail: "/thumbs/all-in-one-calculator.png",
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
