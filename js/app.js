/* ========================================
   APP.JS
   Main application logic
   Loader, Lenis, Navigation, Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Initialize Lucide Icons ──
  if (window.lucide) {
    lucide.createIcons();
  }

  // ── Loader Sequence ──
  function initLoader() {
    const loader = document.getElementById('loader');
    const loaderGrid = document.getElementById('loader-grid');
    const loaderName = document.getElementById('loader-name');
    const loaderTitle = document.getElementById('loader-title');
    const loaderLine = document.getElementById('loader-line');
    const loaderCounter = document.getElementById('loader-counter');

    if (!loader) {
      initLenis();
      if (typeof window.initAnimations === 'function') {
        window.initAnimations();
      }
      return;
    }

    // Prevent scroll during loading
    document.body.style.overflow = 'hidden';

    // Create grid cells
    for (let i = 0; i < 40; i++) {
      const cell = document.createElement('div');
      cell.className = 'loader-cell';
      loaderGrid.appendChild(cell);
    }

    const cells = loaderGrid.querySelectorAll('.loader-cell');
    const tl = gsap.timeline();

    // Grid cells animate in
    tl.to(cells, {
      scaleY: 1,
      duration: 0.6,
      stagger: {
        each: 0.02,
        from: 'random',
      },
      ease: 'power2.inOut',
    });

    // Show line
    tl.to(loaderLine, {
      width: '80px',
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3');

    // Show name
    tl.to(loaderName, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.3');

    // Show title
    tl.to(loaderTitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.4');

    // Show counter
    tl.to(loaderCounter, {
      opacity: 1,
      duration: 0.3,
    }, '-=0.3');

    // Counter animation
    const counterObj = { val: 0 };
    tl.to(counterObj, {
      val: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        loaderCounter.textContent = Math.floor(counterObj.val) + '%';
      },
    }, '-=0.3');

    // Hold
    tl.to({}, { duration: 0.3 });

    // Exit: slide cells up and fade
    tl.to(cells, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.4,
      stagger: {
        each: 0.015,
        from: 'random',
      },
      ease: 'power2.in',
    });

    tl.to([loaderName, loaderTitle, loaderLine, loaderCounter], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
    }, '-=0.4');

    // Final exit
    tl.to(loader, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        document.body.style.overflow = '';

        // Initialize Lenis and animations after loader
        initLenis();
        window.initAnimations();
      },
    });
  }

  // ── Lenis Smooth Scroll ──
  let lenis;
  function initLenis() {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sync with GSAP ticker
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Handle anchor clicks
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target, { offset: -80 });
        }
        // Close mobile menu if open
        closeMobileMenu();
      });
    });
  }

  // ── Navigation ──
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    let scrollThreshold = 100;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      // Add scrolled class
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide/show on scroll direction
      if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScroll && currentScroll > 200) {
          navbar.classList.add('hidden');
        } else {
          navbar.classList.remove('hidden');
        }
      }

      lastScroll = currentScroll;
    });

    // Active section tracking
    const navLinks = document.querySelectorAll('[data-nav]');
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const activeLink = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  // ── Mobile Menu ──
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('[data-mobile-nav]');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');

      if (isActive) {
        document.body.style.overflow = 'hidden';
        // Animate links in
        gsap.fromTo(mobileLinks,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      } else {
        document.body.style.overflow = '';
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ── Magnetic Buttons ──
  function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      });
    });
  }

  // ── Back to Top ──
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    btn.addEventListener('click', () => {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // ── Theme Toggle ──
  function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Portfolio is dark by default, toggle for light
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

  // ── Skill Pills Hover Stagger ──
  function initSkillPillEffects() {
    const pills = document.querySelectorAll('.skill-pill');
    pills.forEach((pill) => {
      pill.addEventListener('mouseenter', () => {
        gsap.to(pill, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      pill.addEventListener('mouseleave', () => {
        gsap.to(pill, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }

  // ── Project Cards Tilt Effect ──
  function initProjectCardEffects() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(card, {
          rotateX: y * -5,
          rotateY: x * 5,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 800,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    });
  }

  // ── Typography Words Hover Effect ──
  function initTypoWordEffects() {
    const words = document.querySelectorAll('.typo-word');
    words.forEach((word) => {
      word.addEventListener('mouseenter', () => {
        // Dim all others
        words.forEach((w) => {
          if (w !== word) {
            gsap.to(w, { opacity: 0.04, duration: 0.3 });
          }
        });
        gsap.to(word, { opacity: 1, duration: 0.3 });
      });
    });

    const container = document.querySelector('.typo-words');
    if (container) {
      container.addEventListener('mouseleave', () => {
        words.forEach((w) => {
          gsap.to(w, { opacity: 0.08, duration: 0.4 });
        });
      });
    }
  }

  // ── Service Item Hover Effect ──
  function initServiceEffects() {
    const items = document.querySelectorAll('.service-item');
    items.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        items.forEach((i) => {
          if (i !== item) {
            gsap.to(i, { opacity: 0.3, duration: 0.3 });
          }
        });
      });

      item.addEventListener('mouseleave', () => {
        items.forEach((i) => {
          gsap.to(i, { opacity: 1, duration: 0.3 });
        });
      });
    });
  }

  // ── Stat Cards Hover ──
  function initStatCardEffects() {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }

  // ── Custom Cursor ──
  function initCustomCursor() {
    // Only on desktop with fine pointer
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

    // Smooth ring follow
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effects
    const interactiveElements = 'a, button, .project-card, .bento-card, .service-item, .skill-pill, .cert-badge, .stat-card, .testimonial-card, input, textarea';
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

    // Hide cursor on leave
    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    });
    document.addEventListener('mouseenter', () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    });
  }

  // ── Page Transition ──
  function initPageTransition() {
    const overlay = document.createElement('div');
    overlay.id = 'page-transition';
    overlay.innerHTML = '<div class="transition-strip"></div><div class="transition-strip"></div><div class="transition-strip"></div><div class="transition-strip"></div><div class="transition-strip"></div>';
    document.body.appendChild(overlay);

    // Intercept project card links
    document.querySelectorAll('a[href^="project.html"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
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

  // ── Initialize Everything ──
  initLoader();
  initNavigation();
  initMobileMenu();
  initMagneticButtons();
  initBackToTop();
  initThemeToggle();
  initSkillPillEffects();
  initProjectCardEffects();
  initTypoWordEffects();
  initServiceEffects();
  initStatCardEffects();
  initCustomCursor();
  initPageTransition();
});
