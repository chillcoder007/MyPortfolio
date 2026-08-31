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
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
  if (window.pageYOffset > 300) backToTopBtn.classList.add('visible');
  else backToTopBtn.classList.remove('visible');
});

// Back to top button
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) navMenu.classList.remove('active');
});

// Smooth reveal animations on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);
const animatedElements = document.querySelectorAll('.project-card, .education-card, .timeline-item, .highlight-card');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Portfolio content update: current professional profile
// Kept here so the existing visual design and interactions remain unchanged.
document.title = 'Gautam Srinivas Ananth - AI/ML Engineer | Software Developer';

const heroSubtitle = document.querySelector('.hero-subtitle');
const heroDescription = document.querySelector('.hero-description');
if (heroSubtitle) heroSubtitle.textContent = 'AI/ML Engineer | Software Developer';
if (heroDescription) heroDescription.textContent = 'Building intelligent enterprise solutions with Generative AI, LLMs, APIs, Azure, and deep learning.';

const aboutTexts = document.querySelectorAll('.about-text');
if (aboutTexts[0]) aboutTexts[0].textContent = 'AI/ML Engineer and Software Developer with experience building enterprise applications and AI solutions at Tata Consultancy Services and Flextronics. Passionate about applying Generative AI, LLMs, cloud technologies, and software engineering to real-world business problems.';
if (aboutTexts[1]) aboutTexts[1].textContent = 'Experienced with Generative AI workflows including prompt engineering, RAG, document question answering, embeddings, and knowledge retrieval, alongside REST APIs, SQL, Microsoft Azure, and enterprise application development. Also experienced in Deep Learning, Computer Vision, NLP, TensorFlow, PyTorch, and OpenCV.';

const timeline = document.querySelector('.timeline');
if (timeline) {
  timeline.innerHTML = `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>Software Developer</h3>
          <span class="timeline-date">Nov 2025 - Present</span>
        </div>
        <div class="timeline-company">
          <span class="company-name">Tata Consultancy Services (TCS)</span>
          <span class="company-location">📍 Chennai</span>
        </div>
        <ul class="timeline-responsibilities">
          <li>Contribute to enterprise application development and enhancement in the UKG/Kronos ecosystem by translating business requirements into application changes, debugging issues, and supporting reliable releases.</li>
          <li>Use SQL and application-level troubleshooting to investigate data and functional issues, identify root causes, and support production fixes.</li>
          <li>Work with Microsoft Azure-based environments and services while contributing to AI initiatives and building AI-enabled solutions for business and enterprise use cases.</li>
          <li>Develop and prototype Generative AI solutions, including LLM-based workflows, prompt engineering, RAG, document-based question answering, embeddings, and knowledge retrieval.</li>
          <li>Work with REST APIs and API integration patterns, including JSON payloads, HTTP/HTTPS request-response flows, authentication concepts, and integration between enterprise application components.</li>
          <li>Collaborate with cross-functional teams across development and support activities, following SDLC, testing, deployment, and enterprise delivery practices.</li>
        </ul>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>S/4HANA Development Intern</h3>
          <span class="timeline-date">Mar 2025 - May 2025</span>
        </div>
        <div class="timeline-company">
          <span class="company-name">Tata Consultancy Services (TCS)</span>
          <span class="company-location">📍 Chennai (Remote)</span>
        </div>
        <ul class="timeline-responsibilities">
          <li>Supported SAP S/4HANA development activities by understanding business requirements, working with enterprise data and application processes, and assisting with development and issue resolution.</li>
          <li>Gained practical exposure to S/4HANA application development, debugging, testing, and integration within an enterprise environment.</li>
        </ul>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>AI/Deep Learning Intern</h3>
          <span class="timeline-date">Aug 2023 - Dec 2023</span>
        </div>
        <div class="timeline-company">
          <span class="company-name">Flextronics</span>
          <span class="company-location">📍 Chennai</span>
        </div>
        <ul class="timeline-responsibilities">
          <li>Worked on Deep Learning and Computer Vision with the help of concepts such as Optical Character Recognition for identifying Handwritten Characters in text documents.</li>
          <li>Developed proficiency with Python libraries such as TensorFlow and OpenCV while exploring machine learning and deep learning.</li>
          <li>Contributed to a larger automation project aimed at reducing workload by extracting text and other data from receipts and files.</li>
        </ul>
      </div>
    </div>`;

  document.querySelectorAll('.timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

const skillCategories = document.querySelectorAll('.skill-category');
if (skillCategories.length >= 3) {
  skillCategories[0].querySelector('.skill-items').innerHTML = `
    <span class="skill-badge">Python</span><span class="skill-badge">Java</span><span class="skill-badge">HTML</span><span class="skill-badge">CSS</span><span class="skill-badge">SQL</span>`;
  skillCategories[1].querySelector('.skill-items').innerHTML = `
    <span class="skill-badge">Machine Learning</span><span class="skill-badge">Deep Learning</span><span class="skill-badge">Generative AI</span><span class="skill-badge">LLMs</span><span class="skill-badge">RAG</span><span class="skill-badge">Prompt Engineering</span><span class="skill-badge">NLP</span><span class="skill-badge">Computer Vision</span><span class="skill-badge">OpenCV</span>`;
  skillCategories[2].querySelector('.skill-items').innerHTML = `
    <span class="skill-badge">REST APIs</span><span class="skill-badge">API Integration</span><span class="skill-badge">JSON</span><span class="skill-badge">HTTP/HTTPS</span><span class="skill-badge">Microsoft Azure</span><span class="skill-badge">UKG/Kronos</span><span class="skill-badge">SAP S/4HANA</span><span class="skill-badge">TensorFlow</span><span class="skill-badge">PyTorch</span><span class="skill-badge">NumPy</span><span class="skill-badge">Pandas</span><span class="skill-badge">Streamlit</span><span class="skill-badge">Power BI</span><span class="skill-badge">Tableau</span><span class="skill-badge">Excel</span><span class="skill-badge">VSCode</span>`;
}
