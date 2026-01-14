document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
  
    // -------- FADE HERO ON SCROLL --------
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const fadeDistance = window.innerHeight * 0.8;
  
      let opacity = 1 - scrollY / fadeDistance;
      opacity = Math.max(0, opacity);
  
      banner.style.opacity = opacity;
    });

    // -------- SMOOTH SCROLLING NAVIGATION --------
    const navLinks = document.querySelectorAll('.nav-btn[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId === '#home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            const headerHeight = 80;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }

        // Update active nav state
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // -------- LOGO CLICK TO SCROLL TO TOP --------
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Update active nav state
        navLinks.forEach(nav => nav.classList.remove('active'));
        const homeLink = document.querySelector('.nav-btn[href="#home"]');
        if (homeLink) {
          homeLink.classList.add('active');
        }
      });
    }

    // -------- UPDATE ACTIVE NAV ON SCROLL --------
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  });
  