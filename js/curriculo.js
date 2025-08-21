// Gerenciamento de transparência do menu
    const headerEl = document.getElementById('header');
    
    function checkScrollPosition() {
      if (window.scrollY > 10) {
        headerEl.classList.add('solid');
      } else {
        headerEl.classList.remove('solid');
      }
      
      const backToTop = document.getElementById('backToTop');
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition);
    
    // Botão voltar ao topo
    document.getElementById('backToTop').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Mobile toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('menuCentralizado');
    mobileBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      if (menu.classList.contains('active')) {
        mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    // Fechar menu mobile ao clicar em link
    document.querySelectorAll('#menuCentralizado a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
          menu.classList.remove('active');
          mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if(menu.classList.contains('active') && 
         !menu.contains(e.target) && 
         !mobileBtn.contains(e.target)) {
        menu.classList.remove('active');
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    // Animar barras de habilidades ao rolar até a seção
    function animateSkills() {
      const skills = document.querySelectorAll('.skill-progress');
      const skillsSection = document.getElementById('skills');
      
      if (isElementInViewport(skillsSection)) {
        skills.forEach(skill => {
          const width = skill.getAttribute('data-width');
          skill.style.width = width;
        });
        
        // Remover o event listener após a animação
        window.removeEventListener('scroll', animateSkills);
      }
    }
    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    window.addEventListener('scroll', animateSkills);
    
    // Inicializar animação das habilidades se a seção já estiver visível
    animateSkills();