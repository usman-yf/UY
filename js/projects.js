/* ========================================
   PROJECTS.JS
   Project data store & dynamic page logic
   ======================================== */

const projectsData = {
  1: {
    title: 'ERP Management System',
    subtitle: 'Business Automation',
    description: 'A comprehensive ERP solution designed to automate and streamline business operations including HR, Inventory, Accounting, Sales, Purchases and Reports.',
    image: 'assets/images/project-erp.png',
    overview: 'ERP Management System is a robust business solution that centralizes all core operations into one unified platform to improve efficiency, accuracy and productivity. It covers modules from HR and employee management to inventory control, from accounting and finance to sales pipeline management.',
    features: [
      'HR & Employee Management',
      'Inventory & Stock Management',
      'Sales & Purchase Management',
      'Accounting & Finance',
      'Role Based Access Control',
      'Reports & Analytics Dashboard',
    ],
    role: 'Full Stack Developer',
    duration: '4 Months',
    responsibilities: [
      'Requirement Analysis',
      'Database Design',
      'Backend Development',
      'Frontend Development',
      'API Development',
      'Testing & Deployment',
    ],
    result: 'The ERP system reduced manual work by 70% and improved overall business efficiency and reporting accuracy. Client reported significant time savings across all departments.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS', 'REST API', 'jQuery'],
    liveUrl: '#',
    githubUrl: 'https://github.com/usman-yf',
  },
  2: {
    title: 'CRM Platform',
    subtitle: 'Customer Management',
    description: 'Customer relationship management platform with pipeline tracking, contact management, deal analytics, and automated follow-up workflows.',
    image: 'assets/images/project-crm.png',
    overview: 'A modern CRM platform built to help sales teams manage their entire customer lifecycle. Features include lead tracking, deal pipeline with drag-and-drop, automated email sequences, contact enrichment, and real-time analytics dashboards.',
    features: [
      'Lead & Contact Management',
      'Deal Pipeline with Kanban View',
      'Automated Follow-up Sequences',
      'Customer Analytics & Reports',
      'Email Integration',
      'Team Collaboration Tools',
    ],
    role: 'Full Stack Developer',
    duration: '3 Months',
    responsibilities: [
      'System Architecture',
      'API Design & Development',
      'React Frontend Development',
      'MongoDB Schema Design',
      'Real-time Features',
      'Performance Optimization',
    ],
    result: 'Increased client sales team productivity by 45% and improved lead conversion rates by 30%. The automated follow-up system alone saved 20+ hours per week.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Socket.io'],
    liveUrl: '#',
    githubUrl: 'https://github.com/usman-yf',
  },
  3: {
    title: 'Invoice & Billing System',
    subtitle: 'Billing Solution',
    description: 'Automated invoicing and billing platform with payment tracking, recurring invoices, financial reporting, and multi-currency support.',
    image: 'assets/images/project-invoice.png',
    overview: 'A complete invoicing and billing solution designed for freelancers and small businesses. Features include automated invoice generation, recurring billing cycles, payment tracking, expense management, tax calculations, and comprehensive financial reports.',
    features: [
      'Automated Invoice Generation',
      'Recurring Billing & Subscriptions',
      'Payment Tracking & Reminders',
      'Multi-currency Support',
      'Tax Calculation Engine',
      'Financial Reports & Analytics',
    ],
    role: 'Full Stack Developer',
    duration: '2.5 Months',
    responsibilities: [
      'Payment Gateway Integration',
      'Invoice Template Engine',
      'Backend API Development',
      'Frontend UI Development',
      'PDF Generation',
      'Email Notification System',
    ],
    result: 'Processed over 10,000 invoices in the first quarter. Reduced payment delays by 60% through automated reminders and streamlined the entire billing workflow.',
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript', 'REST API', 'PDF Engine'],
    liveUrl: '#',
    githubUrl: 'https://github.com/usman-yf',
  },
  4: {
    title: 'AI Automation Dashboard',
    subtitle: 'AI & Workflow',
    description: 'Intelligent automation dashboard with workflow builder, AI model monitoring, real-time analytics, and automated task orchestration.',
    image: 'assets/images/project-ai.png',
    overview: 'An AI-powered automation dashboard that enables businesses to build, monitor, and optimize automated workflows. Features a visual workflow builder, real-time AI model performance tracking, automated task scheduling, and intelligent alerts system.',
    features: [
      'Visual Workflow Builder',
      'AI Model Performance Monitoring',
      'Real-time Processing Analytics',
      'Automated Task Orchestration',
      'Intelligent Alert System',
      'Data Pipeline Management',
    ],
    role: 'AI Automation Engineer',
    duration: '5 Months',
    responsibilities: [
      'AI Architecture Design',
      'Workflow Engine Development',
      'React Dashboard Development',
      'API Integration Layer',
      'Real-time Data Processing',
      'ML Model Integration',
    ],
    result: 'Automated 85% of repetitive tasks for the client, saving over 200 man-hours per month. The AI-driven insights helped optimize business processes across 5 departments.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'REST API', 'WebSocket'],
    liveUrl: '#',
    githubUrl: 'https://github.com/usman-yf',
  },
  5: {
    title: 'Enterprise HR System',
    subtitle: 'HR Management',
    description: 'Complete human resource management system with employee onboarding, attendance tracking, leave management, and payroll processing.',
    image: 'assets/images/project-hr.png',
    overview: 'An enterprise-grade HR management system that digitizes the entire employee lifecycle from recruitment to retirement. Includes modules for onboarding, attendance management, leave management, payroll processing, performance reviews, and organizational analytics.',
    features: [
      'Employee Onboarding Workflow',
      'Attendance & Time Tracking',
      'Leave Management System',
      'Payroll Processing & Reports',
      'Performance Review Module',
      'Organizational Chart & Analytics',
    ],
    role: 'Senior Full Stack Developer',
    duration: '4 Months',
    responsibilities: [
      'System Architecture',
      'Database Design & Optimization',
      'Laravel Backend Development',
      'Payroll Engine Development',
      'Report Generation',
      'Security Implementation',
    ],
    result: 'Streamlined HR operations for 500+ employees. Reduced payroll processing time from 3 days to 4 hours and eliminated 95% of manual attendance errors.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API', 'Chart.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/usman-yf',
  },
  6: {
    title: 'E-Commerce Platform',
    subtitle: 'Online Store',
    description: 'Full-featured e-commerce platform with product management, order processing, payment integration, and real-time inventory tracking.',
    image: 'assets/images/project-ecommerce.png',
    overview: 'A modern e-commerce platform built with Next.js for optimal performance and SEO. Features include dynamic product catalog, advanced search and filtering, shopping cart with real-time updates, Stripe payment integration, order management, and a comprehensive admin dashboard.',
    features: [
      'Dynamic Product Catalog',
      'Advanced Search & Filtering',
      'Shopping Cart & Wishlist',
      'Stripe Payment Integration',
      'Order Management System',
      'Admin Analytics Dashboard',
    ],
    role: 'Full Stack Developer',
    duration: '3.5 Months',
    responsibilities: [
      'Next.js Frontend Development',
      'Node.js Backend & API',
      'Payment Gateway Integration',
      'MongoDB Database Design',
      'SEO Optimization',
      'Performance Optimization',
    ],
    result: 'Launched to 5,000+ active users within the first month. Achieved 98% uptime and sub-second page loads. Payment processing handles 500+ daily transactions.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Vercel'],
    liveUrl: '#',
    githubUrl: 'https://github.com/usman-yf',
  },
};

// ── Page Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Get project ID from URL
  const params = new URLSearchParams(window.location.search);
  const projectId = parseInt(params.get('id')) || 1;
  const project = projectsData[projectId];

  if (!project) {
    window.location.href = 'index.html#projects';
    return;
  }

  // Populate page
  document.title = `${project.title} — Usman Yousaf`;
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-desc').textContent = project.description;
  document.getElementById('project-img').src = project.image;
  document.getElementById('project-img').alt = project.title;
  document.getElementById('project-overview').textContent = project.overview;
  document.getElementById('project-role').textContent = project.role;
  document.getElementById('project-duration').textContent = project.duration;
  document.getElementById('project-result').textContent = project.result;

  // Helper function to get tech icon
  function getTechIcon(tech) {
    const iconMap = {
      'HTML5': 'file-code-2',
      'CSS3': 'palette',
      'JavaScript': 'file-json-2',
      'React': 'atom',
      'Next.js': 'box',
      'Tailwind CSS': 'wind',
      'Node.js': 'server',
      'PHP': 'file-code',
      'Laravel': 'flame',
      'MySQL': 'database',
      'MongoDB': 'database-zap',
      'PostgreSQL': 'database',
      'Express': 'server-cog',
      'REST APIs': 'network',
      'REST API': 'network',
      'AI/ML': 'brain',
      'Python': 'terminal',
      'Stripe': 'credit-card',
      'PDF Engine': 'file-text',
      'Socket.io': 'zap',
      'Git': 'git-branch',
      'Docker': 'box',
      'AWS': 'cloud',
      'Vercel': 'triangle'
    };
    return iconMap[tech] || 'code';
  }

  // Tags
  const tagsContainer = document.getElementById('project-tags');
  project.technologies.forEach((tech) => {
    const tag = document.createElement('span');
    tag.className = 'project-tag';
    tag.innerHTML = `<i data-lucide="${getTechIcon(tech)}" style="width:14px;height:14px;margin-right:6px;display:inline-block;vertical-align:middle"></i>${tech}`;
    tagsContainer.appendChild(tag);
  });

  // Image Gallery
  const galleryContainer = document.getElementById('project-gallery');
  if (galleryContainer) {
    const galleryImages = project.gallery || [project.image, project.image, project.image];
    galleryImages.forEach((imgSrc) => {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'gallery-item';
      imgDiv.style.borderRadius = '16px';
      imgDiv.style.overflow = 'hidden';
      imgDiv.style.border = '1px solid rgba(61, 61, 61, 0.4)';
      
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = project.title;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.display = 'block';
      img.style.transition = 'transform 0.5s ease';
      img.style.cursor = 'pointer';
      
      imgDiv.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
      imgDiv.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
      
      imgDiv.appendChild(img);
      galleryContainer.appendChild(imgDiv);
    });
  }

  // Features
  const featuresContainer = document.getElementById('project-features');
  project.features.forEach((feature) => {
    const div = document.createElement('div');
    div.className = 'project-feature';
    div.innerHTML = `<i data-lucide="check" style="width:18px;height:18px;color:#00D26A"></i>${feature}`;
    featuresContainer.appendChild(div);
  });

  // Responsibilities
  const respContainer = document.getElementById('project-responsibilities');
  project.responsibilities.forEach((resp) => {
    const li = document.createElement('li');
    li.textContent = resp;
    respContainer.appendChild(li);
  });

  // Technologies
  const techGrid = document.getElementById('project-tech-grid');
  project.technologies.forEach((tech) => {
    const div = document.createElement('div');
    div.className = 'project-tech-item';
    div.innerHTML = `<i data-lucide="${getTechIcon(tech)}" style="width:24px;height:24px;color:#F5F5F5"></i><span>${tech}</span>`;
    techGrid.appendChild(div);
  });

  // Links
  document.getElementById('project-live-link').href = project.liveUrl;
  document.getElementById('project-github-link').href = project.githubUrl;

  // Prev/Next navigation
  const totalProjects = Object.keys(projectsData).length;
  const prevId = projectId > 1 ? projectId - 1 : totalProjects;
  const nextId = projectId < totalProjects ? projectId + 1 : 1;

  document.getElementById('prev-project').href = `project.html?id=${prevId}`;
  document.getElementById('next-project').href = `project.html?id=${nextId}`;

  // Re-initialize icons after dynamic content
  if (window.lucide) {
    lucide.createIcons();
  }

  // ── Initialize Lenis ──
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // ── GSAP Animations ──
  gsap.registerPlugin(ScrollTrigger);

  // Reveal animations
  document.querySelectorAll('.reveal').forEach((el) => {
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  document.querySelectorAll('.reveal-scale').forEach((el) => {
    gsap.fromTo(el,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // ── Mobile Menu ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // ── Back to Top ──
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      lenis.scrollTo(0);
    });
  }

  // ── Custom Cursor ──
  function initCustomCursor() {
    if (window.matchMedia('(pointer: fine)').matches === false) return;

    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
    document.body.appendChild(cursor);

    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: 'power2.out' });
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const interactiveElements = 'a, button, .project-link-btn, .project-nav-btn, .project-card, input, textarea, .project-tag, .project-feature, .project-tech-item';
    document.querySelectorAll(interactiveElements).forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('cursor-hover');
        dot.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('cursor-hover');
        dot.classList.remove('cursor-hover');
      });
    });

    document.addEventListener('mouseleave', () => gsap.to(cursor, { opacity: 0, duration: 0.3 }));
    document.addEventListener('mouseenter', () => gsap.to(cursor, { opacity: 1, duration: 0.3 }));
  }

  // ── Theme Toggle ──
  function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light-mode');
      const icon = toggle.querySelector('i');
      if (document.documentElement.classList.contains('light-mode')) {
        icon.setAttribute('data-lucide', 'sun');
      } else {
        icon.setAttribute('data-lucide', 'moon');
      }
      if (window.lucide) {
        lucide.createIcons();
      }
    });
  }

  // ── Page Transition ──
  function initPageTransition() {
    const overlay = document.createElement('div');
    overlay.id = 'page-transition';
    overlay.innerHTML = '<div class="transition-strip"></div><div class="transition-strip"></div><div class="transition-strip"></div><div class="transition-strip"></div><div class="transition-strip"></div>';
    document.body.appendChild(overlay);

    document.querySelectorAll('a[href^="project.html"], a[href^="index.html"]').forEach((link) => {
      // Don't transition for hash links on the same page unless going to index
      const href = link.getAttribute('href');
      if (href.startsWith('#')) return;
      
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const strips = overlay.querySelectorAll('.transition-strip');

        overlay.classList.add('active');
        gsap.fromTo(strips,
          { scaleY: 0, transformOrigin: 'bottom' },
          {
            scaleY: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power4.inOut',
            onComplete: () => {
              window.location.href = href;
            },
          }
        );
      });
    });
  }

  initCustomCursor();
  initThemeToggle();
  initPageTransition();

  ScrollTrigger.refresh();
});
