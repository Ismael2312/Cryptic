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
        description: "Novas ferramentas de IA estão revolucionando a forma como criamos sites e aplicações, aumentando a produtividade e criando experiências mais personalizadas.",
        tags: ["IA", "Desenvolvimento", "Tecnologia"],
        category: "ia"
      },
      {
        id: 2,
        title: "Asteroids: O Retorno do Clássico",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "10 Ago 2025",
        description: "Asteroids: O Retorno do Clássico traz de volta a nostalgia dos fliperamas com uma experiência renovada. Desvie de meteoros, enfrente inimigos espaciais e teste seus reflexos em batalhas intensas no universo infinito. Um clássico repaginado para uma nova geração de jogadores!",
        tags: ["Javascript", "HTML", "CSS"],
        category: "Arcade"
      },
      {
        id: 3,
        title: "Tendências de UI/UX Design para o Próximo Ano",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "5 Ago 2025",
        description: "Explore as tendências emergentes em design de interfaces que estão moldando a experiência do usuário em aplicativos e sites modernos.",
        tags: ["Design", "UI/UX", "Inovação"],
        category: "design"
      },

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
            <a href="/view/Games/Asteroids/Page.html" class="btn-ver-mais">Ler mais</a>
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