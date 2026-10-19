# Mahfood Balfaqeeh — CV Website

A single-page, responsive CV / portfolio site. No build step: open `index.html` or host it on GitHub Pages.

## 🚀 Quick start

```bash
xdg-open index.html        # Linux
# or serve it locally
python3 -m http.server 8000
```

## ✏️ Editing

- **Content** lives in `index.html`: Experience, Projects, Skills, Education and Contact sections.
- **Terminal hero:** edit the `<p class="cmd">` / `<p class="out">` lines inside `#terminal-body`. The JS re-types whatever is there.
- **Resume:** replace `assets/Mahfood-Balfaqeeh-Resume.pdf`. Both "Download CV" buttons link to it.
- **Colors:** the light/dark token pairs are at the top of `css/style.css`.

## ✨ Features

- Floating pill nav with backdrop blur and scroll spy
- Light / System / Dark theme switch, saved in `localStorage`
- Typed `echo $CURRENTLY` terminal hero (static when `prefers-reduced-motion` is set)
- Impact strip, a date-left experience timeline, and a featured project with GitHub language-colour dots
- Fade-up reveal on scroll, fluid `clamp()` type scale

Design ideas borrowed from portfolios in [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios): heymufi.com, mhouge.dk, astro-portfolio-site.netlify.app, saidk.io, ryanyychen.github.io/portfolio and portfolio-n4sn.vercel.app.

## 📦 Deploy (GitHub Pages)

Push to `main`, then go to **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
The site will be live at `https://mabloka.github.io/cv-website/`.
