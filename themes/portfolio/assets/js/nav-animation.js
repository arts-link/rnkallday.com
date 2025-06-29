// Navigation animation for the Word Nerd theme
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  
  // Add active class to the current page's nav item
  const currentPath = window.location.pathname;
  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const linkPath = link.getAttribute('href');
      
      // Check if the current path matches the link path
      // or if we're on the home page and the link is to the home page
      if ((linkPath === currentPath) || 
          (currentPath === '/' && linkPath === '/') ||
          (currentPath.startsWith(linkPath) && linkPath !== '/')) {
        item.classList.add('active');
      }
      
      // Add hover effect
      item.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
          this.classList.add('hover-effect');
        }
      });
      
      item.addEventListener('mouseleave', function() {
        this.classList.remove('hover-effect');
      });
    }
  });
  
  // Dark mode toggle functionality
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      // Toggle dark class on html element
      document.documentElement.classList.toggle('dark');
      
      // Update localStorage
      if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
    });
  }
});
