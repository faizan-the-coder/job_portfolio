# Faizan Khan — Interactive Digital ID Portfolio

Premium, mobile-first portfolio built around an interactive employee-ID card centerpiece.

## Stack

React 18 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide icons.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build (outputs dist/)
npm run preview  # preview the production build
```

## Photos

- `images/my_image.JPG` — original photo (kept as the source attachment).
- `public/profile.png` — transparent-background portrait cutout (480×600)
  actually used on the ID card (`PROFILE.photo` in `src/data/portfolio.ts`).

To swap the photo: replace `images/my_image.JPG`, then regenerate the cutout
(background removal + head/shoulders portrait crop) and save it as `public/profile.png`.

## Resume

- `public/resume.pdf` — the real ATS-friendly resume (single page/column,
  standard headings, selectable text). Served by the Download Resume buttons.
- `resume/build_resume_pdf.py` — generator + single source of truth for resume
  content. Edit the data at the top, run `python resume/build_resume_pdf.py`,
  then rebuild the site. All facts must stay honest/verified.

## Edit content (one file)

Almost everything editable lives in **`src/data/portfolio.ts`**:

- `PROFILE` — name, titles, email, photo path
- `LINKS` — GitHub / YouTube / portfolio URLs
- `YOUTUBE_CHANNEL_NAME`, `WHATSAPP` (display number + `wa.me` chat link)
- `RESUME_PATH` (serves `public/resume.pdf` — see Resume section above)
- `SEO` (title/description/url/image for sharing; update `url` after deployment)
- `CONTACT_ENDPOINT` — paste a Formspree endpoint
  (`https://formspree.io/f/your-form-id`: create form → copy endpoint → deploy).
  Leave empty for the mailto fallback. No secrets needed.
- `CONTACT_ENDPOINT` — leave empty for mailto fallback, or set a Formspree/EmailJS/API URL
- `EXPERIENCES`, `SKILL_GROUPS`, `PROJECTS`, `EDUCATION`, `NAV_ITEMS`

## Notes

- No fake metrics anywhere: projects/YouTube/education cards are marked as templates/placeholders.
- Animations respect `prefers-reduced-motion`; tilt uses springs + transforms only.
- Bottom floating nav works on mobile + desktop; sections scroll smoothly with an active indicator.
