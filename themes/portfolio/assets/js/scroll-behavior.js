/**
 * Scroll Behavior and Animation Script
 * Handles navigation behavior, scroll animations, and section transitions
 */

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const nav = document.getElementById('main-nav');
  const sections = document.querySelectorAll('section');
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-down');
  
  // Variables
  let lastScrollTop = 0;
  let scrollTimer = null;
  
  // Initialize animations on page load
  animateOnScroll();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Navigation hide/show behavior
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide nav when scrolling down
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      nav.style.transform = 'translateY(-100%)';
    } 
    // Show nav when scrolling up
    else if (scrollTop < lastScrollTop) {
      nav.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    
    // Clear previous timer
    if (scrollTimer !== null) {
      clearTimeout(scrollTimer);
    }
    
    // Set timer to show nav after 5 seconds of no scrolling
    scrollTimer = setTimeout(function() {
      nav.style.transform = 'translateY(0)';
    }, 5000);
    
    // Trigger animations when elements come into view
    animateOnScroll();
  });
  
  // Highlight active section in navigation
  function updateActiveNavItem() {
    const scrollPosition = window.scrollY;
    
    // Find the current section
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to current nav item
        const activeNavItem = document.querySelector(`.nav-item a[href="#${sectionId}"]`);
        if (activeNavItem) {
          activeNavItem.parentElement.classList.add('active');
        }
      }
    });
  }
  
  // Animate elements when they come into view
  function animateOnScroll() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      
      if (scrollTop + windowHeight > elementTop + 100) {
        element.classList.add('visible');
      }
    });
    
    // Update active navigation item
    updateActiveNavItem();
  }
  
  // Initialize Alpine.js components if needed
  if (typeof Alpine !== 'undefined') {
    Alpine.start();
  }
});
