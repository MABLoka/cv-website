/* ==========================================================================
   CV Website — Interactive behavior
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // --- Current year in footer ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

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
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0% -60%",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        if (!id) return;

        document.querySelectorAll(".nav-menu a").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });

  // --- Navbar shadow on scroll ---
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = "0 4px 20px -6px rgba(2, 6, 23, 0.1)";
    } else {
      navbar.style.boxShadow = "";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
