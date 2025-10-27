// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const backToTopBtn = document.getElementById('backToTop');

// Smooth scroll to section
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      navMenu.classList.remove('active');
    }
  });
});

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const navHeight = document.querySelector('.navbar').offsetHeight;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
  
  // Show/hide back to top button
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Back to top button
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Project toggle details
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const toggleBtn = card.querySelector('.project-toggle');
  const details = card.querySelector('.project-details');
  
  toggleBtn.addEventListener('click', () => {
    const isExpanded = details.style.display === 'block';
    
    if (isExpanded) {
      details.style.display = 'none';
      toggleBtn.textContent = 'View Details';
    } else {
      details.style.display = 'block';
      toggleBtn.textContent = 'Hide Details';
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Smooth reveal animations on scroll (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards and sections for animation
const animatedElements = document.querySelectorAll('.project-card, .education-card, .timeline-item, .highlight-card');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});