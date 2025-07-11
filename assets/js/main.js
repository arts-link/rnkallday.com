// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("nav-menu-open");
      btn.setAttribute("aria-expanded", isOpen);
      menu.setAttribute("aria-hidden", !isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("nav-menu-open");
        btn.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      }
    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("nav-menu-open")) {
        menu.classList.remove("nav-menu-open");
        btn.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      }
    });
  }
});
