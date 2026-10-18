# [Your Name] — Personal CV Website

A clean, responsive, single-page CV / portfolio site. No build step — just open `index.html` or host it for free on GitHub Pages.

## 🚀 Quick start

```bash
# Open locally
open index.html   # macOS
xdg-open index.html # Linux
```

Or serve it locally:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## 🎨 Customize it

1. **Personal info** — Edit `index.html`:
   - Replace `[Your Name]`, `you@example.com`, phone, location, and social links in the `<header>` (hero) and `<section id="contact">`.
   - Write your own summary in `#about`.
   - Fill in `#experience` (copy `.timeline-item` blocks) and `#education`.

2. **Skills** — Edit the `.skill-list` items in `#skills` to match your resume.

3. **Projects** — Edit the `.project-card` entries in `#projects`.
   - The first card features your **AllAfrica Logistics** repo (from `wasteloka/waste-allafrica`).
   - Replace the placeholder cards with your own projects, tech stacks, and links.
   - Swap the `.project-placeholder` divs for real screenshots or SVGs if you like.

4. **Resume download** — Add your PDF to `assets/` and point the "Download CV" button at it:
   ```html
   <a href="assets/ResumeTemplate-2.pdf" class="btn btn-outline" download>Download CV</a>
   ```

## 📦 Deploy (GitHub Pages)

```bash
git add .
git commit -m "Initial CV website"
git push origin main
```

Then in GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)` → Save.** Your site will be live at `https://<user>.github.io/cv-website/`.

## 🛠️ Tech

- HTML5, CSS3 (custom properties, responsive grid)
- Vanilla JavaScript (mobile menu, scroll spy, Intersection Observer)
- Google Fonts: Inter + JetBrains Mono
- Print stylesheet for clean PDF-ish printing

## 📁 Projects featured (from your local repos)

| Project | Stack | Notes |
|---|---|---|
| AllAfrica Logistics | NestJS, React 19, TS, Tailwind, Supabase | Air & sea freight portal — `wasteloka/waste-allafrica` |
| [Your Project 2] | — | Add from your resume |
| [Your Project 3] | — | Add from your resume |

> **Note:** The GitHub remote for `waste-allafrica` was not reachable when this site was built — update the link if the repo has moved or been renamed.

---

*Built quickly from your local workspace. Replace all `[bracketed]` placeholders with your own details.*
