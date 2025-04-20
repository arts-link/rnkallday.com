// Text Overlay Component Interactions
document.addEventListener('DOMContentLoaded', function() {
  const textOverlayItems = document.querySelectorAll('.text-overlay-item');
  
  // Add animation classes when the component is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get all items within this text overlay component
        const items = entry.target.querySelectorAll('.text-overlay-item');
        
        // Add animation classes with staggered delays
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, 200 * index);
        });
      }
    });
  }, {
    threshold: 0.2
  });
  
  // Observe the text overlay wrapper
  const textOverlayWrappers = document.querySelectorAll('.text-overlay-wrapper');
  textOverlayWrappers.forEach(wrapper => {
    observer.observe(wrapper);
  });
  
  // Add hover effects
  textOverlayItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
