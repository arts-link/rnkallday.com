// Navigation animation based on https://codepen.io/Develonaut/pen/dyvqRO
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const navItemsArray = Array.from(navItems);

  // Add active class to the current page's nav item
  const currentPath = window.location.pathname;
  navItemsArray.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const linkPath = link.getAttribute('href');

      // Check if the current path matches the link path
      // or if we're on the home page and the link is to the home page
      // or if the current path starts with the link path (for section pages)
      if ((linkPath === currentPath) ||
          (currentPath === '/' && linkPath === '/') ||
          (currentPath.startsWith(linkPath) && linkPath !== '/')) {
        item.classList.add('active');
      }
    }
  });

  // Add hover effects
  navItemsArray.forEach(item => {
    item.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        // Add hover effect to current item if it's not active
        this.classList.add('hover-effect');
      }
    });

    item.addEventListener('mouseleave', function() {
      // Remove hover effect
      this.classList.remove('hover-effect');
    });
  });
});
