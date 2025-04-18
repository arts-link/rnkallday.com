// Navigation animation based on https://codepen.io/Develonaut/pen/dyvqRO
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const navItemsArray = Array.from(navItems);
  
  // Add active class to the current page's nav item
  const currentPath = window.location.pathname;
  navItemsArray.forEach(item => {
    const link = item.querySelector('a');
    if (link && (link.getAttribute('href') === currentPath || 
        (currentPath === '/' && link.getAttribute('href') === '/'))) {
      item.classList.add('active');
    }
  });
  
  // Add hover effects
  navItemsArray.forEach(item => {
    item.addEventListener('mouseenter', function() {
      // Remove active class from all items temporarily
      navItemsArray.forEach(i => i.classList.remove('hover-effect'));
      // Add hover effect to current item
      this.classList.add('hover-effect');
    });
    
    item.addEventListener('mouseleave', function() {
      // Remove hover effect
      this.classList.remove('hover-effect');
    });
  });
});
