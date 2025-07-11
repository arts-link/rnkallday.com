// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-nav-toggle");
  const menu = document.getElementById("nav-menu");

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
    menu.setAttribute("aria-hidden", !isOpen);
  });
});
