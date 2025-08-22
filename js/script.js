// MIT License

// Copyright (c) 2025 Ismael Vitor da Silva

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE. 

   
    // Inicializa o EmailJS com seu User ID
    (function() {
      emailjs.init("n17vujf-kzEPr9AOI"); // Substitua "YOUR_USER_ID" pelo seu ID do EmailJS
    })();
    
    // Gerenciamento de transparência do menu
    const headerEl = document.getElementById('header');
    
    // Verifica se estamos no topo da página
    function checkScrollPosition() {
      if (window.scrollY > 10) {
        headerEl.classList.add('solid');
      } else {
        headerEl.classList.remove('solid');
      }
      
      // Botão voltar ao topo
      const backToTop = document.getElementById('backToTop');
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    
       // Adicionando um efeito de clique suave
    document.querySelectorAll('.btn-veja-mais').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Efeito visual de clique
        this.style.transform = 'scale(0.95)';
        
        // Redirecionamento após um breve delay para o efeito visual
        setTimeout(() => {
          window.location.href = this.href;
        }, 300);
      });
    });
    
    // Verifica a posição inicial
    checkScrollPosition();
    
    // Adiciona o listener de scroll
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
      // Altera o ícone do botão
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

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          // Suaviza a rolagem com efeito de easing
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Filtro de projetos
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const projectCards = document.querySelectorAll('.card-projeto');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove a classe ativa de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe ativa ao botão clicado
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Filtra os cards com animação
        projectCards.forEach(card => {
          if (filter === 'todos') {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            const categoria = card.getAttribute('data-categoria');
            if (categoria === filter) {
              card.style.display = 'block';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, 50);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 300);
            }
          }
        });
      });
    });
    
    // Formulário de contato com EmailJS
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Limpa erros anteriores
      document.querySelectorAll('.form-error').forEach(el => {
        el.style.display = 'none';
      });
      
      // Validação
      let isValid = true;
      const nome = document.getElementById('nome');
      const email = document.getElementById('email');
      const mensagem = document.getElementById('mensagem');
      
      if (nome.value.trim() === '') {
        document.getElementById('nome-error').textContent = 'Por favor, insira seu nome';
        document.getElementById('nome-error').style.display = 'block';
        isValid = false;
      }
      
      if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
        document.getElementById('email-error').textContent = 'Por favor, insira um email válido';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
      }
      
      if (mensagem.value.trim() === '') {
        document.getElementById('mensagem-error').textContent = 'Por favor, insira sua mensagem';
        document.getElementById('mensagem-error').style.display = 'block';
        isValid = false;
      }
      
      if (!isValid) return;
      
      // Desabilita o botão durante o envio
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      
      // Envia o email usando EmailJS
      emailjs.sendForm('service_dza9u48', 'template_ltsj94r', this)
        .then(() => {
          // Sucesso
          formSuccess.style.display = 'block';
          contactForm.reset();
          
          // Ocultar mensagem após 5 segundos
          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 5000);
        }, (error) => {
          // Erro
          alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
          console.error('Falha no envio. ERRO:', error);
        })
        .finally(() => {
          // Reativa o botão
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar Mensagem';
        });
    });
    
    // Slideshow e efeito de máquina de escrever
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    
    // Textos para cada slide
    const slideTexts = [
      {
        title: "Cryptic",
        subtitle: "Criando experiências digitais excepcionais"
      },
      {
        title: "Transformando ideias",
        subtitle: "Em soluções web inovadoras"
      },
      {
        title: "Design & Código",
        subtitle: "Perfeita harmonia para resultados incríveis"
      }
    ];
    
    // Inicia o slideshow
    function showSlide(n) {
      // Remove a classe ativa de todos os slides e indicadores
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      
      // Atualiza o índice do slide atual
      currentSlide = (n + slides.length) % slides.length;
      
      // Adiciona a classe ativa ao slide e indicador atuais
      slides[currentSlide].classList.add('active');
      indicators[currentSlide].classList.add('active');
      
      // Inicia o efeito de digitação no slide ativo
      startTypingEffect(currentSlide);
    }
    
    // Função para iniciar o efeito de digitação
    function startTypingEffect(slideIndex) {
      const titleId = `typed-title-${slideIndex + 1}`;
      const subtitleId = `typed-subtitle-${slideIndex + 1}`;
      const titleCursorId = `typing-cursor-title-${slideIndex + 1}`;
      const subtitleCursorId = `typing-cursor-subtitle-${slideIndex + 1}`;
      
      // Limpa qualquer animação anterior
      clearTimeout(window.typeTimeout);
      
      // Inicia a digitação
      typeText(titleId, slideTexts[slideIndex].title, 100, () => {
        typeText(subtitleId, slideTexts[slideIndex].subtitle, 50, () => {
          // Esconde os cursores após um tempo
          setTimeout(() => {
            document.getElementById(titleCursorId).style.visibility = 'hidden';
            document.getElementById(subtitleCursorId).style.visibility = 'hidden';
          }, 2000);
        });
      });
    }
    
    // Função para simular digitação
    function typeText(elementId, text, speed, callback) {
      const element = document.getElementById(elementId);
      let i = 0;
      element.textContent = '';
      
      // Mostra o cursor
      const titleCursorId = `typing-cursor-title-${elementId.split('-')[2]}`;
      const subtitleCursorId = `typing-cursor-subtitle-${elementId.split('-')[2]}`;
      document.getElementById(titleCursorId).style.visibility = 'visible';
      document.getElementById(subtitleCursorId).style.visibility = 'visible';
      
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          window.typeTimeout = setTimeout(type, speed);
        } else if (callback) {
          callback();
        }
      }
      
      type();
    }
    
    // Event listeners para navegação do slideshow
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
    
    // Event listeners para indicadores
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        const slideIndex = parseInt(indicator.getAttribute('data-index'));
        showSlide(slideIndex);
      });
    });
    
    // Inicia o slideshow
    showSlide(0);
    
    // Auto avançar slides
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 8000);
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if(menu.classList.contains('active') && 
         !menu.contains(e.target) && 
         !mobileBtn.contains(e.target)) {
        menu.classList.remove('active');
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    