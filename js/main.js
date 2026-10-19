/* ==========================================================================
   CV Website: interactive behavior
   ========================================================================== */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Current year in footer ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Theme switch (light / system / dark) ---
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll("[data-theme-choice]");

  const applyTheme = (choice) => {
    if (choice === "light" || choice === "dark") {
      root.dataset.theme = choice;
    } else {
      delete root.dataset.theme;
    }
    themeButtons.forEach((btn) => {
      btn.setAttribute("aria-checked", btn.dataset.themeChoice === choice);
    });
  };

  applyTheme(root.dataset.theme || "system");

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.themeChoice;
      applyTheme(choice);
      try {
        if (choice === "system") localStorage.removeItem("theme");
        else localStorage.setItem("theme", choice);
      } catch (e) {}
    });
  });

  // --- Mobile menu toggle ---
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    // Close menu when a link is clicked
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Active nav link on scroll ---
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        document.querySelectorAll(".nav-menu a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-20% 0% -60%" }
  );

  document.querySelectorAll("section[id]").forEach((section) => {
    navObserver.observe(section);
  });

  // --- Navbar shadow on scroll ---
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Fade-up reveal ---
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // --- Terminal typing effect ---
  // Lines are written in the HTML (so they work without JS); we re-type them here.
  const term = document.getElementById("terminal-body");
  if (term && !reduceMotion) {
    const lines = [...term.querySelectorAll("p")].map((p) => ({
      cls: p.className,
      text: p.textContent,
    }));
    term.textContent = "";

    const caret = document.createElement("span");
    caret.className = "caret";

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      for (const line of lines) {
        const p = document.createElement("p");
        p.className = line.cls;
        term.appendChild(p);

        if (line.cls === "cmd") {
          p.appendChild(caret);
          await sleep(350);
          for (const ch of line.text) {
            caret.before(ch);
            await sleep(40 + Math.random() * 40);
          }
          await sleep(250);
        } else {
          p.textContent = line.text;
          await sleep(120);
        }
      }
      const prompt = document.createElement("p");
      prompt.className = "cmd";
      prompt.appendChild(caret);
      term.appendChild(prompt);
    })();
  }
});
