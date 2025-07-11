// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isOpen = menu.classList.contains("open");
      
      if (isOpen) {
        // Close animation
        gsap.to(menu, {
          x: "100%",
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            menu.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-hidden", "true");
          }
        });
      } else {
        // Open animation
        menu.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");
        
        gsap.fromTo(menu, 
          { x: "100%" },
          { 
            x: "0%", 
            duration: 0.3, 
            ease: "power2.inOut" 
          }
        );
        
        // Animate menu items with stagger
        const menuItems = menu.querySelectorAll('a');
        gsap.fromTo(menuItems,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.3, 
            stagger: 0.1,
            delay: 0.1,
            ease: "power2.out" 
          }
        );
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
          ease: "power2.inOut"
        });
      }
    });
  });
});
