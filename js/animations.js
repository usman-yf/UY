/* ========================================
   ANIMATIONS.JS
   GSAP ScrollTrigger + SplitType Animations
   Cinematic reveal system for all sections
   ======================================== */

function initAnimations() {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // ── Hero Section Animations ──
  function animateHero() {
    const heroTl = gsap.timeline({ delay: 0.1 });

    // Animate Hero Name lines smoothly
    heroTl.fromTo('.hero-name .line',
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' }
    )
    
    // Animate roles
    .fromTo('.hero-roles span > span',
      { y: '100%' },
      { y: '0%', duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      '-=0.6'
    )
    
    // Animate CTA buttons
    .fromTo('#hero-cta .btn',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.4'
    )
    
    // Portrait animation (requested by user)
    .fromTo('#portrait',
      { scale: 0.85, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' },
      '-=0.6'
    );
  }

  // Portrait parallax on scroll
  const portrait = document.getElementById('portrait');
  if (portrait) {
    gsap.to(portrait, {
      y: -80,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // ── General Reveal Animations ──
  function animateReveals() {
    // Fade up reveals
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Left reveals
    document.querySelectorAll('.reveal-left').forEach((el) => {
      gsap.fromTo(el,
        { x: -60, opacity: 0 },
        {
          x: 0,
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

    // Right reveals
    document.querySelectorAll('.reveal-right').forEach((el) => {
      gsap.fromTo(el,
        { x: 60, opacity: 0 },
        {
          x: 0,
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

    // Scale reveals
    document.querySelectorAll('.reveal-scale').forEach((el) => {
      gsap.fromTo(el,
        { scale: 0.9, opacity: 0 },
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
  }

  // ── Color Philosophy Card Stagger ──
  function animateColorCards() {
    const cards = document.querySelectorAll('.color-card');
    if (cards.length) {
      gsap.fromTo(cards,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.color-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  // ── Typography Words Scroll Effect ──
  function animateTypoWords() {
    const words = document.querySelectorAll('.typo-word');
    words.forEach((word, i) => {
      gsap.fromTo(word,
        { opacity: 0.06 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    });
  }

  // ── Timeline Animation ──
  function animateTimeline() {
    const timelineLine = document.querySelector('.timeline::before');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Animate timeline line drawing
    const timelineEl = document.querySelector('.timeline');
    if (timelineEl) {
      gsap.fromTo(timelineEl,
        { '--line-height': '0%' },
        {
          '--line-height': '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineEl,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );
    }

    // Stagger timeline items
    timelineItems.forEach((item, i) => {
      gsap.fromTo(item,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate dots
      const dot = item.querySelector('.timeline-dot');
      if (dot) {
        gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }

  // ── Bento Grid Stagger ──
  function animateBentoGrid() {
    const bentoCards = document.querySelectorAll('.bento-card');
    if (bentoCards.length) {
      bentoCards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }

  // ── Project Cards Stagger ──
  function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length) {
      projectCards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }

  // ── Services List Animation ──
  function animateServices() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, i) => {
      gsap.fromTo(item,
        { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }

  // ── Statistics Counter Animation ──
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count'));

      gsap.fromTo(counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }

  // ── Contact Heading Parallax ──
  function animateContact() {
    const contactHeading = document.getElementById('contact-heading');
    if (contactHeading) {
      gsap.fromTo(contactHeading,
        { y: 60 },
        {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }
  }

  // ── Footer Reveal ──
  function animateFooter() {
    const footerName = document.querySelector('.footer-name');
    if (footerName) {
      gsap.fromTo(footerName,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#footer',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  // ── Bento Card Mouse Glow ──
  function initBentoGlow() {
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  // ── Hero Grid Background Parallax ──
  function animateHeroGrid() {
    const gridBg = document.querySelector('.hero-grid-bg');
    if (gridBg) {
      gsap.to(gridBg, {
        y: -100,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }

  // ── Section Title SplitType Animation ──
  function animateSectionTitles() {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach((title) => {
      try {
        const split = new SplitType(title, { types: 'chars, words' });
        if (split.chars && split.chars.length) {
          gsap.fromTo(split.chars,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.02,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      } catch (e) {
        // Fallback if SplitType fails
      }
    });
  }
  // ── System Architecture Hierarchy Animation ──
  function animateDesignSystem() {
    const dsSection = document.getElementById('design-system-hierarchy');
    if (!dsSection) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const indicators = document.querySelectorAll('.ds-indicator');

      const updateIndicator = (index) => {
        indicators.forEach((ind, i) => {
          if (i === index) ind.classList.add('active');
          else ind.classList.remove('active');
        });
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: dsSection,
          start: 'top top',
          end: '+=350%', // Pin for a longer scroll distance for 4 steps
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.25) updateIndicator(0);
            else if (progress < 0.50) updateIndicator(1);
            else if (progress < 0.75) updateIndicator(2);
            else updateIndicator(3);
          }
        }
      });

      // Animate Step 1 out, Step 2 in
      tl.to('.ds-step-1', { y: -100, opacity: 0, duration: 1 })
        .to('.ds-step-2', { y: 0, autoAlpha: 1, duration: 1 }, '<0.5')
      
      // Hold Step 2, then Step 2 out, Step 3 in
        .to('.ds-step-2', { y: -100, opacity: 0, duration: 1 }, '+=1')
        .to('.ds-step-3', { y: 0, autoAlpha: 1, duration: 1 }, '<0.5')
        
      // Hold Step 3, then Step 3 out, Step 4 in
        .to('.ds-step-3', { y: -100, opacity: 0, duration: 1 }, '+=1')
        .to('.ds-step-4', { y: 0, autoAlpha: 1, duration: 1 }, '<0.5')

      // Hold Step 4 a bit
        .to('.ds-step-4', { y: 0, duration: 1 });
    });
  }

  // ── Initialize All Animations ──
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    animateHero();
    animateReveals();
    animateDesignSystem();
    animateTypoWords();
    animateTimeline();
    animateBentoGrid();
    animateProjectCards();
    animateServices();
    animateCounters();
    animateContact();
    animateFooter();
    initBentoGlow();
    animateHeroGrid();
    animateSectionTitles();

    // Refresh ScrollTrigger after all animations are set up
    ScrollTrigger.refresh();
  }, 100);
}

// Export for use in app.js
window.initAnimations = initAnimations;
