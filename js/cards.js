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

// Dados dos artigos (simulando um banco de dados)
    const articles = [
      {
        id: 1,
        title: "Inteligência Artificial Transforma o Desenvolvimento Web",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        date: "15 Ago 2025",
        views: "1.2K",
        description: "Novas ferramentas de IA estão revolucionando a forma como criamos sites e aplicações, aumentando a produtividade e criando experiências mais personalizadas.",
        tags: ["IA", "Desenvolvimento", "Tecnologia"],
        category: "ia"
      },
      {
        id: 2,
        title: "Os 5 Frameworks JavaScript Mais Populares em 2025",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "10 Ago 2025",
        views: "2.4K",
        description: "Descubra quais frameworks estão dominando o mercado de desenvolvimento front-end e como eles podem impulsionar seus projetos.",
        tags: ["JavaScript", "Frameworks", "Frontend"],
        category: "desenvolvimento"
      },
      {
        id: 3,
        title: "Tendências de UI/UX Design para o Próximo Ano",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "5 Ago 2025",
        views: "3.1K",
        description: "Explore as tendências emergentes em design de interfaces que estão moldando a experiência do usuário em aplicativos e sites modernos.",
        tags: ["Design", "UI/UX", "Inovação"],
        category: "design"
      },
      {
        id: 4,
        title: "Como Otimizar o Desempenho de Aplicações Web",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "1 Ago 2025",
        views: "1.8K",
        description: "Técnicas avançadas para melhorar a velocidade e eficiência de sites e aplicações web, garantindo uma experiência de usuário excepcional.",
        tags: ["Desenvolvimento", "Performance", "Web"],
        category: "desenvolvimento"
      },
      {
        id: 5,
        title: "A Revolução da Computação Quântica em 2025",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
        date: "28 Jul 2025",
        views: "3.5K",
        description: "Como os avanços na computação quântica estão transformando a cibersegurança e a ciência de dados.",
        tags: ["Tecnologia", "Computação Quântica", "Inovação"],
        category: "tecnologia"
      },
      {
        id: 6,
        title: "Blockchain Além das Criptomoedas",
        image: "https://images.unsplash.com/photo-1620336655052-b57986f5a26a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "22 Jul 2025",
        views: "2.1K",
        description: "Aplicações práticas da tecnologia blockchain em setores como saúde, logística e governo.",
        tags: ["Blockchain", "Tecnologia", "Inovação"],
        category: "tecnologia"
      },
      {
        id: 7,
        title: "O Futuro da Realidade Aumentada no Comércio",
        image: "https://images.unsplash.com/photo-1620336655055-b57986f5a26a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "18 Jul 2025",
        views: "1.7K",
        description: "Como a RA está transformando a experiência de compra e interação com produtos.",
        tags: ["Realidade Aumentada", "Tecnologia", "Design"],
        category: "inovacao"
      },
      {
        id: 8,
        title: "Segurança em Aplicações Web: Novas Ameaças",
        image: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        date: "12 Jul 2025",
        views: "2.3K",
        description: "Os principais riscos de segurança que os desenvolvedores devem considerar em 2025.",
        tags: ["Segurança", "Desenvolvimento", "Web"],
        category: "seguranca"
      },
      {
        id: 9,
        title: "Python vs JavaScript: Qual Aprender em 2025?",
        image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        date: "8 Jul 2025",
        views: "3.8K",
        description: "Análise comparativa das linguagens mais populares para desenvolvimento web e ciência de dados.",
        tags: ["Python", "JavaScript", "Desenvolvimento"],
        category: "desenvolvimento"
      },
      {
        id: 10,
        title: "A Ascensão dos Assistente de IA Pessoais",
        image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "3 Jul 2025",
        views: "2.5K",
        description: "Como os assistentes de IA estão se tornando mais inteligentes e integrados ao nosso cotidiano.",
        tags: ["IA", "Tecnologia", "Inovação"],
        category: "ia"
      },
      {
        id: 11,
        title: "Design Responsivo em Dispositivos Foldables",
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        date: "28 Jun 2025",
        views: "1.9K",
        description: "Desafios e soluções para criar experiências consistentes em dispositivos dobráveis.",
        tags: ["Design", "Responsivo", "UI/UX"],
        category: "design"
      },
      {
        id: 12,
        title: "O Poder dos Web Components em Projetos Modernos",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        date: "23 Jun 2025",
        views: "1.6K",
        description: "Como os Web Components estão revolucionando o desenvolvimento front-end com componentes reutilizáveis.",
        tags: ["Web Components", "Frontend", "Desenvolvimento"],
        category: "desenvolvimento"
      }
    ];
    
    // Menu mobile
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainMenu = document.getElementById('mainMenu');
    
    mobileBtn.addEventListener('click', () => {
      mainMenu.classList.toggle('active');
      if (mainMenu.classList.contains('active')) {
        mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
    
    // Configuração da paginação
    const articlesPerPage = 8;
    let currentPage = 1;
    
    // Gerar artigos na página
    function renderArticles(page) {
      const newsGrid = document.getElementById('newsGrid');
      newsGrid.innerHTML = '';
      
      const start = (page - 1) * articlesPerPage;
      const end = page * articlesPerPage;
      const paginatedArticles = articles.slice(start, end);
      
      paginatedArticles.forEach(article => {
        const articleCard = document.createElement('article');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
          <img src="${article.image}" alt="${article.title}" class="article-image">
          <div class="article-content">
            <div class="article-meta">
              <span><i class="far fa-calendar"></i> ${article.date}</span>
              <span><i class="far fa-eye"></i> ${article.views} visualizações</span>
            </div>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <div class="tags">
              ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="#" class="btn-ver-mais">Ler mais</a>
          </div>
        `;
        newsGrid.appendChild(articleCard);
      });
    }
    
    // Gerar botões de paginação
    function renderPagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';
      
      const pageCount = Math.ceil(articles.length / articlesPerPage);
      
      // Botão Anterior
      const prevButton = document.createElement('button');
      prevButton.className = 'pagination-button';
      prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderArticles(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      pagination.appendChild(prevButton);
      
      // Botões de página
      for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
          currentPage = i;
          renderArticles(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pagination.appendChild(pageButton);
      }
      
      // Botão Próximo
      const nextButton = document.createElement('button');
      nextButton.className = 'pagination-button';
      nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
      nextButton.addEventListener('click', () => {
        if (currentPage < pageCount) {
          currentPage++;
          renderArticles(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      pagination.appendChild(nextButton);
    }
    
    // Barra de progresso abaixo do logo
    const logoProgressBar = document.getElementById('logoProgressBar');
    
    function updateLogoProgressBar() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      logoProgressBar.style.width = `${progress}%`;
    }
    
    // Inicialização
    document.addEventListener('DOMContentLoaded', () => {
      renderArticles(currentPage);
      renderPagination();
      
      // Adicionar evento de rolagem para a barra de progresso do logo
      window.addEventListener('scroll', updateLogoProgressBar);
      
      // Adicionar evento de redimensionamento
      window.addEventListener('resize', updateLogoProgressBar);
      
      // Atualizar a barra de progresso inicialmente
      updateLogoProgressBar();
    });
    
    // Funcionalidade de busca
    const desktopSearchInput = document.getElementById('desktopSearchInput');
    const desktopSearchBtn = document.getElementById('desktopSearchBtn');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    
    function filterArticles(searchTerm) {
      const newsGrid = document.getElementById('newsGrid');
      newsGrid.innerHTML = '';
      
      const filteredArticles = articles.filter(article => {
        const title = article.title.toLowerCase();
        const description = article.description.toLowerCase();
        const tags = article.tags.map(tag => tag.toLowerCase());
        
        return title.includes(searchTerm) || 
               description.includes(searchTerm) || 
               tags.some(tag => tag.includes(searchTerm));
      });
      
      if (filteredArticles.length === 0) {
        newsGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #aaa;">
            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px;"></i>
            <h3>Nenhum resultado encontrado</h3>
            <p>Tente usar palavras-chave diferentes</p>
          </div>
        `;
      } else {
        filteredArticles.forEach(article => {
          const articleCard = document.createElement('article');
          articleCard.className = 'article-card';
          articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
              <div class="article-meta">
                <span><i class="far fa-calendar"></i> ${article.date}</span>
                <span><i class="far fa-eye"></i> ${article.views} visualizações</span>
              </div>
              <h2>${article.title}</h2>
              <p>${article.description}</p>
              <div class="tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
              <a href="#" class="btn-ver-mais">Ler mais</a>
            </div>
          `;
          newsGrid.appendChild(articleCard);
        });
      }
    }
    
    // Eventos de busca desktop
    desktopSearchBtn.addEventListener('click', () => {
      const term = desktopSearchInput.value.trim().toLowerCase();
      if (term) filterArticles(term);
    });
    
    desktopSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const term = desktopSearchInput.value.trim().toLowerCase();
        if (term) filterArticles(term);
      }
    });
    
    // Eventos de busca mobile
    mobileSearchBtn.addEventListener('click', () => {
      const term = mobileSearchInput.value.trim().toLowerCase();
      if (term) filterArticles(term);
    });
    
    mobileSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const term = mobileSearchInput.value.trim().toLowerCase();
        if (term) filterArticles(term);
      }
    });
    
    // Filtro por categoria
    const categoryLinks = document.querySelectorAll('.category-list a');
    
    categoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        const newsGrid = document.getElementById('newsGrid');
        newsGrid.innerHTML = '';
        
        const filteredArticles = articles.filter(article => article.category === category);
        
        if (filteredArticles.length === 0) {
          newsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #aaa;">
              <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 20px;"></i>
              <h3>Nenhum artigo nesta categoria</h3>
              <p>Tente outra categoria</p>
            </div>
          `;
        } else {
          filteredArticles.forEach(article => {
            const articleCard = document.createElement('article');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
              <img src="${article.image}" alt="${article.title}" class="article-image">
              <div class="article-content">
                <div class="article-meta">
                  <span><i class="far fa-calendar"></i> ${article.date}</span>
                  <span><i class="far fa-eye"></i> ${article.views} visualizações</span>
                </div>
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <div class="tags">
                  ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="#" class="btn-ver-mais">Ler mais</a>
              </div>
            `;
            newsGrid.appendChild(articleCard);
          });
        }
      });
    });
    
    // Filtro por tags
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
      tag.addEventListener('click', () => {
        const tagText = tag.textContent.toLowerCase();
        const newsGrid = document.getElementById('newsGrid');
        newsGrid.innerHTML = '';
        
        const filteredArticles = articles.filter(article => 
          article.tags.map(t => t.toLowerCase()).includes(tagText)
        );
        
        if (filteredArticles.length === 0) {
          newsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #aaa;">
              <i class="fas fa-tag" style="font-size: 3rem; margin-bottom: 20px;"></i>
              <h3>Nenhum artigo com esta tag</h3>
              <p>Tente outra tag</p>
            </div>
          `;
        } else {
          filteredArticles.forEach(article => {
            const articleCard = document.createElement('article');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
              <img src="${article.image}" alt="${article.title}" class="article-image">
              <div class="article-content">
                <div class="article-meta">
                  <span><i class="far fa-calendar"></i> ${article.date}</span>
                  <span><i class="far fa-eye"></i> ${article.views} visualizações</span>
                </div>
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <div class="tags">
                  ${article.tags.map(t => `<span class="tag ${t.toLowerCase() === tagText ? 'active' : ''}">${t}</span>`).join('')}
                </div>
                <a href="#" class="btn-ver-mais">Ler mais</a>
              </div>
            `;
            newsGrid.appendChild(articleCard);
          });
        }
      });
    });

    