"""ATS-friendly resume generator — single source of truth for resume content.

Usage:  python resume/build_resume_pdf.py
Output: public/resume.pdf  (served by the site's Download Resume buttons)

ATS rules followed: single column, no tables/graphics/columns, standard
headings in logical order, embedded DejaVu font, selectable real text.
Edit the CONTENT structure below — all facts must stay honest/verified.
"""
import pathlib

import matplotlib
from fpdf import FPDF

TTF_DIR = pathlib.Path(matplotlib.get_data_path()) / "fonts" / "ttf"

ACCENT = (67, 56, 202)      # deep indigo — headings, rules
DARK = (22, 22, 26)         # near-black — names, roles
BODY = (45, 45, 50)         # body text
MUTED = (110, 110, 120)     # periods, secondary text

# ── Resume content (verified facts only — do not invent) ──
NAME = "Faizan Khan"
HEADLINE = "Software Engineer | SAP UI5 Developer | Frontend Developer"
CONTACT = [
    "Lucknow, India",
    "+91 79051 12734",
    "fk100faizan@gmail.com",
    "linkedin.com/in/faizan-khan-professional",
    "github.com/faizan-the-coder",
]
SUMMARY = (
    "Software Engineer at Tata Consultancy Services with 5+ years of experience "
    "building enterprise web applications. Currently developing a large-scale "
    "SAPUI5/Fiori CPQ application on SAP BTP \u2013 quote lifecycle, pricing, approvals "
    "and DocuSign e-signatures. Background spans React.js + TypeScript frontends, "
    "Flask/Python services and Figma-to-production UI for Pfizer public websites. "
    "Also teaches Python through beginner-friendly YouTube tutorials."
)
SKILLS = [
    ("SAP Ecosystem", "SAPUI5, SAP Fiori, SAP BTP, SAP CPI (iFlows), SAP CPQ 2.0, OData, Fiori Tools"),
    ("Frontend", "JavaScript (ES6+), TypeScript, React.js, Redux Toolkit, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, AG Grid, React Hook Form, React Router"),
    ("Backend & Python", "Python (Advanced), Django, Flask, REST APIs, Node.js"),
    ("Data & Scraping", "Pandas, NumPy, MySQL, SQLite, MongoDB, Scrapy, Beautiful Soup, Selenium, Requests"),
    ("Desktop & Media", "Tkinter, customtkinter, PyInstaller, Pygame, OpenCV, Matplotlib"),
    ("Tools & Practices", "Git, GitHub, GitHub Actions (CI/CD), Jira, Postman, Figma, Hugo, Agile, Canvas CMS, DocuSign, OOP, Multithreading"),
]
EXPERIENCE = [
    {
        "role": "SAP UI5 Developer",
        "org": "Tata Consultancy Services (SAP Account \u2013 HarmonyQuote)",
        "period": "2025 \u2013 Present",
        "bullets": [
            "Develop and maintain a large-scale SAPUI5/Fiori enterprise app integrating SAP CPQ 2.0, CRM and downstream systems on SAP BTP",
            "Build and extend controller logic for purchase history, quote lifecycle and pricing workflows across async OData service calls",
            "Integrate SAP CPI iFlows and BTP destinations orchestrating data flow between CPQ, CRM and ERP backends",
            "Embed CPQ 2.0 via postMessage cross-frame communication while preserving context propagation",
            "Ship quote lifecycle features \u2013 pricing, approvals, billing plans, milestone tracking and DocuSign e-signatures",
            "Develop and test with mock data environments and OData metadata",
        ],
    },
    {
        "role": "React.js / Python Developer",
        "org": "Tata Consultancy Services (SAP Account)",
        "period": "2025",
        "bullets": [
            "Built reusable React.js + TypeScript components with hooks and state management",
            "Developed Python and Flask utilities, including PowerPoint generation",
            "Integrated frontend views with backend REST services",
        ],
    },
    {
        "role": "React.js Developer",
        "org": "Tata Consultancy Services (NielsenIQ)",
        "period": "2025",
        "bullets": [
            "Worked on React.js application development",
            "Implemented frontend and UI enhancements",
            "Resolved application tasks and issues",
        ],
    },
    {
        "role": "Frontend Developer",
        "org": "Tata Consultancy Services (Pfizer)",
        "period": "2021 \u2013 2024",
        "bullets": [
            "Translated Figma designs into production UI for comirnaty.com, cvdvaccine-us.com, covid19pfizer.com and covidvaxoption.com",
            "Built reusable React.js + TypeScript components with Redux state, forms, routing and data grids",
            "Shipped responsive, performance-optimized interfaces across devices",
            "Delivered in Agile/Jira workflows with Git branching, merges and Canvas CMS publishing",
        ],
    },
]
TEACHING = [
    "Content Creator, Coding Lifestyle 4u (YouTube) \u2013 beginner Python and Tkinter project tutorials",
    "Teach practical coding with Python, Tkinter and customtkinter through hands-on builds",
]
EDUCATION = [
    "B.Tech (CSE) \u2013 Integral University, Lucknow (2020) \u2013 78%",
    "Intermediate (ISC) \u2013 Lucknow Public School (2015) \u2013 74%",
    "High School (UP Board) \u2013 Playway High School (2013) \u2013 84.83%",
]


class ResumePDF(FPDF):
    def section(self, title: str) -> None:
        self.set_font("DejaVu", "B", 12)
        self.set_text_color(*ACCENT)
        self.cell(0, 7, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*ACCENT)
        self.set_line_width(0.5)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.set_line_width(0.2)
        self.ln(2.5)

    def body(self, text: str, bold: bool = False) -> None:
        self.set_font("DejaVu", "B" if bold else "", 10)
        self.set_text_color(*BODY)
        self.multi_cell(0, 5.4, text, new_x="LMARGIN", new_y="NEXT")

    def bullet(self, text: str) -> None:
        self.set_font("DejaVu", "", 10)
        self.set_text_color(*BODY)
        x = self.l_margin + 4
        self.set_x(x)
        self.multi_cell(
            self.w - x - self.r_margin, 5.4, "\u2022  " + text,
            new_x="LMARGIN", new_y="NEXT",
        )


def build() -> pathlib.Path:
    pdf = ResumePDF(format="A4")
    pdf.set_margins(18, 16, 18)
    pdf.set_auto_page_break(True, margin=16)
    pdf.add_font("DejaVu", "", str(TTF_DIR / "DejaVuSans.ttf"))
    pdf.add_font("DejaVu", "B", str(TTF_DIR / "DejaVuSans-Bold.ttf"))
    pdf.add_font("DejaVu", "I", str(TTF_DIR / "DejaVuSans-Oblique.ttf"))
    pdf.add_page()

    pdf.set_font("DejaVu", "B", 22)
    pdf.set_text_color(*DARK)
    pdf.cell(0, 9, NAME, align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("DejaVu", "", 11)
    pdf.set_text_color(*ACCENT)
    pdf.cell(0, 6, HEADLINE, align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("DejaVu", "", 9.5)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(0, 5, " | ".join(CONTACT), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("DejaVu", "B", 9.5)
    pdf.set_text_color(*ACCENT)
    pdf.cell(0, 5.5, "Open to Opportunities", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)

    pdf.section("Professional Summary")
    pdf.body(SUMMARY)

    pdf.ln(1.5)
    pdf.section("Technical Skills")
    for label, items in SKILLS:
        pdf.body(f"{label}: {items}")

    pdf.ln(1.5)
    pdf.section("Professional Experience")
    bullet_w = pdf.w - pdf.l_margin - pdf.r_margin - 4
    for job in EXPERIENCE:
        # keep each job block together — move to next page if it won't fit
        try:
            from fpdf.enums import MethodReturnValue

            need = 5.6 + 5.0 + 1.5
            for b in job["bullets"]:
                need += len(pdf.multi_cell(bullet_w, 5.4, "\u2022  " + b, dry_run=True, output=MethodReturnValue.LINES)) * 5.4
            if pdf.get_y() + need > pdf.h - 16:
                pdf.add_page()
        except Exception:
            pass
        line_w = pdf.w - pdf.l_margin - pdf.r_margin
        pdf.set_font("DejaVu", "B", 10.5)
        pdf.set_text_color(*DARK)
        pdf.cell(line_w - 38, 5.6, job["role"], new_x="RIGHT", new_y="TOP")
        pdf.set_font("DejaVu", "", 9.5)
        pdf.set_text_color(*MUTED)
        pdf.cell(38, 5.6, job["period"], align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("DejaVu", "I", 9.5)
        pdf.set_text_color(*ACCENT)
        pdf.cell(0, 5, job["org"], new_x="LMARGIN", new_y="NEXT")
        for b in job["bullets"]:
            pdf.bullet(b)
        pdf.ln(1.5)

    pdf.section("Teaching")
    for t in TEACHING:
        pdf.bullet(t)

    pdf.ln(1.5)
    pdf.section("Education")
    for e in EDUCATION:
        pdf.body(e)

    out = pathlib.Path(__file__).resolve().parent.parent / "public" / "resume.pdf"
    pdf.output(str(out))
    return out


if __name__ == "__main__":
    path = build()
    print("wrote", path, path.stat().st_size, "bytes")
