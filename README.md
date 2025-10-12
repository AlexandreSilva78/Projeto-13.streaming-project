# 🎬 Play Movies - Plataforma de Streaming

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.0.0-purple)
![React Router](https://img.shields.io/badge/React_Router-6.0.0-orange)
![API](https://img.shields.io/badge/API-TMDb-green)

Uma moderna plataforma de streaming desenvolvida em **React.js** que permite explorar **filmes, séries e artistas populares** de forma prática e intuitiva.

---

## 🚀 Demonstração

**GitHub Pages:** [Clique aqui para ver a demo](https://alexandresilva78.github.io/Projeto-13.streaming-project/)

**Repositório:** [GitHub - Projeto Play Movies](https://github.com/AlexandreSilva78/Projeto-13.streaming-project)

---

## ✨ Funcionalidades

- 🎬 **Catálogo Completo:** Filmes, séries e artistas populares  
- 🔍 **Navegação Intuitiva:** Interface moderna e responsiva  
- 📱 **Design Responsivo:** Adaptado para desktop, tablet e mobile  
- 🎥 **Trailers Integrados:** Player de vídeo para trailers  
- 🎯 **Recomendações Personalizadas:** Sugestões baseadas no conteúdo  
- 📋 **Detalhes Completos:** Sinopses, elenco, gêneros e informações técnicas  
- ⚡ **Performance Otimizada:** Carregamento rápido e experiência fluída  

---

## 🖼️ Screenshots

Desktop:  
![Desktop](https://github.com/AlexandreSilva78/Projeto-13.streaming-project/blob/main/src/assets/img/final_desktop_image.png)

Mobile (focado na tela do smartphone):  
![Mobile](https://github.com/AlexandreSilva78/Projeto-13.streaming-project/blob/main/src/assets/img/final_smartphone_image_focused_screen.png)

Exemplo de Slider:  
![Slider](https://github.com/AlexandreSilva78/Projeto-13.streaming-project/blob/main/src/assets/img/ChatGPT%20Image%2011_10_2025%2C%2023_14_59.png)

Exemplo de Modal com trailer:  
![Modal](https://github.com/AlexandreSilva78/Projeto-13.streaming-project/blob/main/src/assets/img/ChatGPT%20Image%2011_10_2025%2C%2023_33_18.png)

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js 18.2.0  
- **Roteamento:** React Router DOM 6.0.0  
- **Estilização:** Styled Components 6.0.0  
- **Carousel:** Swiper  
- **API:** The Movie Database (TMDb)  
- **Ícones:** Font Awesome  
- **Fontes:** Google Fonts (Montserrat)  

---

## 📦 Estrutura do Projeto

src/
├── assets/ # Recursos estáticos (imagens, ícones, fontes)
├── components/ # Componentes reutilizáveis
│ ├── Button/
│ ├── Card/
│ ├── Credits/
│ ├── Header/
│ ├── Modal/
│ ├── Slider/
│ └── SpanGenres/
├── containers/ # Páginas principais
│ ├── Home/
│ ├── Movies/
│ ├── Series/
│ └── Detail/
├── layout/ # Layout principal
├── services/ # Serviços e integração com API
└── utils/ # Funções utilitárias

yaml
Copiar código

---

## 🎯 Componentes Principais

- **Header:** Navegação responsiva, menu hamburger e indicador de página ativa  
- **Slider:** Carousel horizontal com Swiper e navegação por gestos  
- **Modal:** Player de vídeo integrado, animações customizadas e tratamento de erros  
- **Card:** Exibição de posters com informações básicas e design consistente  

---

## 🎨 Design System

**Cores Principais:**  
- Primária: `#e50914` (Vermelho Netflix)  
- Secundária: `#ffffff` (Branco)  
- Background: `#000000` (Preto)  
- Hover: `#b20710` (Vermelho escuro)  

**Tipografia:**  
- Fonte Principal: Montserrat  
- Pesos: 100-900  
- Tamanhos: Escala responsiva  

---

## 🔧 Instalação e Uso

**Pré-requisitos:**  
- Node.js 16+  
- npm ou yarn  

**Instalação:**
```bash
# Clone o repositório
git clone https://github.com/AlexandreSilva78/Projeto-13.streaming-project.git

# Entre no diretório
cd Projeto-13.streaming-project

# Instale as dependências
npm install

# Execute o projeto
npm run dev
Scripts Disponíveis:

bash
Copiar código
npm run dev       # Desenvolvimento
npm run build     # Build de produção
npm run preview   # Preview do build
npm run deploy    # Deploy para GitHub Pages
🌐 API Integration
O projeto utiliza a API do The Movie Database (TMDb) para:

Listagem de filmes e séries

Detalhes do conteúdo

Trailers e vídeos

Informações do elenco

Recomendações

📱 Responsividade
Desktop: Layout completo com navegação horizontal

Tablet: Adaptação do menu e sliders

Mobile: Menu hamburger e otimização touch

🚀 Deploy
Configuração para deploy automático no GitHub Pages.

📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Alexandre Silva
GitHub: @AlexandreSilva78

🙏 Agradecimentos
The Movie Database pela API

React pelo framework incrível

Styled Components pela estilização

Swiper pelo carousel

⭐️ Se este projeto foi útil para você, deixe uma estrela no repositório!
