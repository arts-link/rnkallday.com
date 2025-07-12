document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-nav-toggle");
  const menu = document.getElementById("nav-menu");
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-hidden", !open);
  });
});
