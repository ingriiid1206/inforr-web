// ============================================
// INFORRÓ LAN HOUSE - Script
// ============================================

// === DADOS DO CARROSSEL ===
const carouselSlides = [
  {
    label: "BEM-VINDO À INFORRÔ",
    value: "A melhor LAN house do Bloco 2!",
    image: "",
    type: "info",
  },
  {
    label: "FIQUE POR DENTRO",
    value: "Promoções e novidades toda semana",
    image: "",
    type: "info",
  },
  {
    label: "TOURNAMENTS",
    value: "Participe dos campeonatos de CS, FIFA e Luta!",
    image: "",
    type: "info",
  },
];

// === DADOS DOS JOGOS ===
const gameCategories = [
  {
    title: "CLASSIC FLIPERAMA & CO-OP (P/ DOIS)",
    games: [
      {
        title: "Brawlhalla",
        genre: "Luta / Plataforma",
        platform: "PC/Notebook",
        players: "1-4",
        description: "Lutas rápidas de plataforma com dezenas de personagens épicos.",
        tags: "luta, plataforma, multiplayer",
        image: "brawlhalla.png",
      },
      {
        title: "Cuphead",
        genre: "Run and Gun",
        platform: "PC/Notebook",
        players: "1-2",
        description: "Ação clássica com chefões difíceis e arte retrô inspirada nos anos 30.",
        tags: "ação, run and gun, cooperativo",
        image: "cuphead.png",
      },
      {
        title: "Gang Beasts",
        genre: "Party Game / Luta",
        platform: "PC/Notebook",
        players: "2-4",
        description: "Combates caóticos e hilários com personagens gelatinosos.",
        tags: "party game, luta, multiplayer, comédia",
        image: "gang-beasts.png",
      },
      {
        title: "It Takes Two",
        genre: "Aventura Co-op",
        platform: "PS4",
        players: "2",
        description: "Uma jornada cooperativa emocionante vencedora do Jogo do Ano.",
        tags: "aventura, cooperativo, campanha",
        image: "it-takes-two.png",
      },
      {
        title: "Overcooked! 2",
        genre: "Party Game / Co-op",
        platform: "PC/Notebook",
        players: "1-4",
        description: "Caos na cozinha! Prepare pratos correndo contra o tempo.",
        tags: "party game, cooperativo, simulação",
        image: "overcooked2.png",
      },
      {
        title: "God of War",
        genre: "Campanha / Ação",
        platform: "PS4",
        players: "1",
        description: "Homens, queimem a vila e o templo de Atenas!",
        tags: "ação, aventura, puzzle, campanha",
        image: "godofwar.png",
      },
      {
        title: "Stick Fight: The Game",
        genre: "Ação / Party Game",
        platform: "PC/Notebook",
        players: "2-4",
        description: "Luta frenética de bonecos palito com física engraçada.",
        tags: "ação, party game, luta, multiplayer",
        image: "stick-fight.png",
      },
      {
        title: "Totally Accurate Battle Simulator (TABS)",
        genre: "Estratégia / Simulação",
        platform: "PC/Notebook",
        players: "1-2",
        description: "Batalhas divertidas com física ragdoll absurda.",
        tags: "estratégia, simulação, comédia",
        image: "tabs.png",
      },
      {
        title: "TowerFall Ascension",
        genre: "Ação / Party Game",
        platform: "PC/Notebook",
        players: "2-4",
        description: "Combate de arco e flecha rápido e divertido para jogar com amigos.",
        tags: "ação, party game, multiplayer",
        image: "towerfall.png",
      },
      {
        title: "Tricky Towers",
        genre: "Puzzle / Party Game",
        platform: "PC/Notebook",
        players: "2-4",
        description: "Construa sua torre de blocos com física e magias para atrapalhar.",
        tags: "puzzle, party game, multiplayer",
        image: "tricky-towers.png",
      },
      {
        title: "Ultimate Chicken Horse",
        genre: "Party Game / Plataforma",
        platform: "PC/Notebook",
        players: "2-4",
        description: "Crie armadilhas para atrapalhar seus amigos enquanto tenta vencer a fase.",
        tags: "party game, plataforma, multiplayer, criativo",
        image: "ultimate-chicken-horse.png",
      },
    ],
  },
  {
    title: "MULTIPLAYER & AÇÃO ESPORTES",
    games: [
      {
        title: "Counter-Strike: Global Offensive (CS:GO)",
        genre: "FPS Tático",
        platform: "PC/Notebook",
        players: "1-10",
        description: "O clássico jogo de tiro tático com equipes rivais.",
        tags: "fps, tático, tiro, multiplayer competitivo",
        image: "csgo.png",
      },
      {
        title: "Call of Duty",
        genre: "FPS / Ação",
        platform: "PC/Notebook",
        players: "1-4+",
        description: "Combates militares intensos e ação em equipe.",
        tags: "fps, ação, tiro, multiplayer",
        image: "call-of-duty.png",
      },
      {
        title: "Fortnite",
        genre: "Battle Royale",
        platform: "PC/Notebook",
        players: "1-4+",
        description: "Sobreviva e construa em batalhas frenéticas contra 100 jogadores.",
        tags: "battle royale, ação, multiplayer, construção",
        image: "fortnite.png",
      },
      {
        title: "Minecraft",
        genre: "Sandbox / Aventura",
        platform: "PC/Notebook",
        players: "1-4+",
        description: "Crie, explore e sobreviva em um mundo pixelado infinito.",
        tags: "sandbox, aventura, sobrevivência, criativo, multiplayer",
        image: "minecraft.png",
      },
      {
        title: "DOOM (2016 e Eternal)",
        genre: "FPS / Ação",
        platform: "PS4 e PC/Notebook",
        players: "1",
        description: "Destruição rápida de demônios no inferno ao som de heavy metal.",
        tags: "fps, ação, tiro, campanha",
        image: "doom.png",
      },
    ],
  },
  {
    title: "ESPORTES & CORRIDA",
    games: [
      {
        title: "Bomba Patch",
        genre: "Esportes / Futebol",
        platform: "PS2",
        players: "1-2",
        description: "O clássico mod brasileiro de futebol 100% atualizado. Emulado no PS2.",
        tags: "futebol, esporte, emulado",
        image: "bomba-patch.png",
      },
      {
        title: "FIFA (FIFA 18, 19, 20, FC25 e FC26)",
        genre: "Esportes / Futebol",
        platform: "PC/Notebook e Xbox ONE",
        players: "1-4",
        description: "O principal simulador de futebol do mundo com elencos atualizados.",
        tags: "futebol, esporte, simulação, multiplayer",
        image: "fifa.png",
      },
      {
        title: "Need for Speed",
        genre: "Corrida Arcade",
        platform: "PC/Notebook",
        players: "1-2",
        description: "Corridas de rua velozes e customização extrema de carros.",
        tags: "corrida, arcade, velocidade, customização",
        image: "need-for-speed.png",
      },
    ],
  },
  {
    title: "CAMPANHA, LUTA & TERROR",
    games: [
      {
        title: "Five Nights at Freddy's (FNAF)",
        genre: "Terror / Sobrevivência",
        platform: "PC/Notebook",
        players: "1",
        description: "Sobreviva cinco noites monitorando animatrônicos perigosos.",
        tags: "terror, sobrevivência, suspense",
        image: "fnaf.png",
      },
      {
        title: "Nightmare Creatures",
        genre: "Terror / Ação",
        platform: "PC/Notebook",
        players: "1",
        description: "Um clássico sombrio de terror gótico com monstros assustadores.",
        tags: "terror, ação, clássico",
        image: "nightmare-creatures.png",
      },
      {
        title: "Injustice 2",
        genre: "Luta",
        platform: "PS4",
        players: "1-2",
        description: "Batalhas épicas entre heróis e vilões do universo DC.",
        tags: "luta, heróis, dc comics",
        image: "injustice2.png",
      },
      {
        title: "MK11",
        genre: "Luta",
        platform: "PC/Notebook",
        players: "1-2",
        description: "Combate brutal e sangrento com fatalities impressionantes.",
        tags: "luta, violência, fatalities",
        image: "mk11.png",
      },
      {
        title: "Naruto Shippuden: Ultimate Ninja Storm",
        genre: "Luta / Anime",
        platform: "PC/Notebook",
        players: "1-2",
        description: "Reviva a história clássica do ninja Naruto com jutsus espetaculares.",
        tags: "luta, anime, ninja",
        image: "naruto-storm.png",
      },
      {
        title: "Red Dead Redemption 2 (RDR2)",
        genre: "Mundo Aberto / Aventura",
        platform: "PC/Notebook e PS4",
        players: "1",
        description: "Uma obra-prima sobre a vida de foras da lei no Velho Oeste.",
        tags: "mundo aberto, aventura, faroeste, campanha",
        image: "rdr2.png",
      },
      {
        title: "The King of Fighters",
        genre: "Luta Arcade",
        platform: "PC/Notebook",
        players: "1-2",
        description: "O clássico combate 2D de trios de lutadores lendários.",
        tags: "luta, arcade, 2d",
        image: "kof.png",
      },
      {
        title: "The Last of Us (I e II)",
        genre: "Aventura / Drama",
        platform: "PS4",
        players: "1",
        description: "Uma jornada emocionante pela sobrevivência em um mundo pós-apocalíptico.",
        tags: "aventura, drama, sobrevivência, campanha",
        image: "tlou.png",
      },
      {
        title: "Grand Theft Auto: San Andreas",
        genre: "Mundo Aberto / Ação",
        platform: "PC/Notebook",
        players: "1",
        description: "O lendário clássico do PS2 com Carl Johnson no estado de San Andreas.",
        tags: "mundo aberto, ação, crime, campanha",
        image: "gta-san-andreas.png",
      },
      {
        title: "Grand Theft Auto: V",
        genre: "Mundo Aberto / Ação",
        platform: "PC/Notebook",
        players: "1",
        description: "Ação caótica em Los Santos com três protagonistas inesquecíveis.",
        tags: "mundo aberto, ação, crime, online",
        image: "gta-v.png",
      },
      {
        title: "Dead Cells",
        genre: "Roguelike / Metroidvania",
        platform: "PC/Notebook",
        players: "1",
        description: "Ação rápida onde a morte é apenas o recomeço da jornada.",
        tags: "roguelike, metroidvania, ação, plataforma",
        image: "dead-cells.png",
      },
      {
        title: "Dragon Ball Z: Budokai Tenkaichi 3",
        genre: "Luta 3D",
        platform: "PS2 Emulator",
        players: "1-2",
        description: "Lutas clássicas e rápidas em arenas abertas 3D com personagens do DBZ.",
        tags: "luta, anime, dragon ball, 3d",
        image: "dbz-budokai.png",
      },
    ],
  },
];

// === DADOS DOS PREÇOS ===
const pricing = [
  { time: "10 Minutos ou 1 Partida", price: "R$ 5,00" },
  { time: "15 Minutos", price: "R$ 8,00" },
  { time: "25 Minutos", price: "R$ 12,00" },
];

function renderPricing() {
  const container = document.getElementById("pricing-bars-container");
  if (!container) return;
  container.innerHTML = "";
  pricing.forEach((item) => {
    const bar = document.createElement("div");
    bar.className = "horizontal-bar";
    bar.innerHTML = `
      <span class="pricing-time">${item.time}</span>
      <span class="pricing-val">${item.price}</span>
    `;
    container.appendChild(bar);
  });
}

function setupTabs() {
  const tabValoresBtn = document.getElementById("tab-valores-btn");
  const tabHorariosBtn = document.getElementById("tab-horarios-btn");
  const contentValores = document.getElementById("content-valores");
  const contentHorarios = document.getElementById("content-horarios");

  if (tabValoresBtn && tabHorariosBtn && contentValores && contentHorarios) {
    tabValoresBtn.addEventListener("click", () => {
      tabValoresBtn.classList.add("active");
      tabHorariosBtn.classList.remove("active");
      contentValores.classList.remove("hidden");
      contentValores.classList.add("active");
      contentHorarios.classList.add("hidden");
      contentHorarios.classList.remove("active");
    });
    tabHorariosBtn.addEventListener("click", () => {
      tabHorariosBtn.classList.add("active");
      tabValoresBtn.classList.remove("active");
      contentHorarios.classList.remove("hidden");
      contentHorarios.classList.add("active");
      contentValores.classList.add("hidden");
      contentValores.classList.remove("active");
    });
  }
}

// === RENDERIZAR CARROSSEL ===
let currentSlide = 0;
let carouselInterval = null;
const CAROUSEL_INTERVAL = 5000;

function renderCarousel() {
  const track = document.getElementById("carousel-track");
  const dots = document.getElementById("carousel-dots");
  if (!track || !dots) return;

  track.innerHTML = "";
  dots.innerHTML = "";

  carouselSlides.forEach((slide, index) => {
    const slideEl = document.createElement("div");
    slideEl.className = "carousel-slide";

    slideEl.innerHTML = `
      <div class="carousel-image-area">
        ${slide.image
          ? `<img src="${slide.image}" alt="${slide.label}" onerror="this.outerHTML='<span class=\\'placeholder-label\\'>adicione uma foto</span>'">`
          : `<span class="placeholder-label">adicione uma foto</span>`}
      </div>
      <div class="carousel-text">
        <span class="carousel-label">${slide.label}</span>
        <span class="carousel-value">${slide.value}</span>
      </div>
    `;

    track.appendChild(slideEl);

    const dot = document.createElement("button");
    dot.className = `carousel-dot${index === 0 ? " active" : ""}`;
    dot.setAttribute("aria-label", `Slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    dots.appendChild(dot);
  });

  goToSlide(0);
  startCarousel();
}

function goToSlide(index) {
  const track = document.getElementById("carousel-track");
  const dots = document.querySelectorAll(".carousel-dot");
  if (!track) return;

  const total = carouselSlides.length;
  currentSlide = (index + total) % total;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startCarousel() {
  stopCarousel();
  carouselInterval = setInterval(nextSlide, CAROUSEL_INTERVAL);
}

function stopCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
}

// === RENDERIZAR JOGOS ===
function matchesGenre(game, filterGenre) {
  if (filterGenre === 'all') return true;

  const genre = game.genre.toLowerCase();
  const title = game.title.toLowerCase();

  if (filterGenre === 'action') {
    return genre.includes('ação') || genre.includes('luta') ||
           genre.includes('fps') || genre.includes('aventura') ||
           genre.includes('run and gun') || genre.includes('party') ||
           genre.includes('battle royale') || genre.includes('sandbox') ||
           genre.includes('roguelike') || genre.includes('estratégia') ||
           genre.includes('puzzle') || genre.includes('drama');
  }
  if (filterGenre === 'coop') {
    return genre.includes('co-op') || genre.includes('party') ||
           genre.includes('multiplayer');
  }
  if (filterGenre === 'fight') {
    return genre.includes('luta') || genre.includes('luta 3d') ||
           genre.includes('luta arcade');
  }
  if (filterGenre === 'horror') {
    return genre.includes('terror');
  }
  if (filterGenre === 'sports') {
    return genre.includes('futebol') || genre.includes('esporte') ||
           title.includes('fifa') || title.includes('bomba patch');
  }
  if (filterGenre === 'openworld') {
    return genre.includes('mundo aberto');
  }
  if (filterGenre === 'racing') {
    return genre.includes('corrida');
  }
  return false;
}

function renderGames() {
  const container = document.getElementById("games-container");
  if (!container) return;
  container.innerHTML = "";

  const searchInput = document.getElementById("game-search");
  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const activeFilterBtn = document.querySelector(".filter-btn.active");
  const activeGenre = activeFilterBtn ? activeFilterBtn.dataset.genre : "all";

  let globalDelay = 0;
  let totalRendered = 0;

  const filterLabels = {
    all: null,
    action: "AÇÃO",
    coop: "CO-OP / MULTIPLAYER",
    fight: "LUTA",
    horror: "TERROR",
    sports: "FUTEBOL",
    openworld: "MUNDO ABERTO",
    racing: "CORRIDA",
  };

  function renderCategory(titleText, games) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "category-section";

    const titleEl = document.createElement("h3");
    titleEl.className = "font-pixel category-title";
    titleEl.textContent = titleText;
    sectionDiv.appendChild(titleEl);

    const ul = document.createElement("ul");
    ul.className = "games-grid";

    games.forEach((game) => {
      const li = document.createElement("li");
      li.className = "game-card-item";

      const btn = document.createElement("button");
      btn.className = "game-card";
      btn.style.animationDelay = `${globalDelay * 0.03}s`;
      btn.addEventListener("click", () => openModal(game));

      const hasImage = !!game.image;
      const imagePath = hasImage ? game.image : "";
      btn.innerHTML = `
        <div class="game-image-wrapper">
          ${hasImage ? `<img src="${imagePath}" alt="${game.title}" class="game-card-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ""}
          <div class="game-placeholder-svg" style="display: ${hasImage ? "none" : "flex"};">
            <svg class="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        </div>
        <span class="game-card-title">${game.title}</span>
      `;

      li.appendChild(btn);
      ul.appendChild(li);
      globalDelay++;
      totalRendered++;
    });

    sectionDiv.appendChild(ul);
    container.appendChild(sectionDiv);
  }

  if (activeGenre === "all") {
    gameCategories.forEach((category) => {
      const filtered = category.games.filter((game) =>
        game.title.toLowerCase().includes(searchQuery) ||
        game.genre.toLowerCase().includes(searchQuery)
      );
      if (filtered.length === 0) return;
      renderCategory(category.title, filtered);
    });
  } else {
    const allFiltered = [];
    gameCategories.forEach((category) => {
      category.games.forEach((game) => {
        const matchesSearch = game.title.toLowerCase().includes(searchQuery) ||
                              game.genre.toLowerCase().includes(searchQuery);
        if (matchesSearch && matchesGenre(game, activeGenre)) {
          allFiltered.push(game);
        }
      });
    });
    if (allFiltered.length > 0) {
      renderCategory(filterLabels[activeGenre] || activeGenre.toUpperCase(), allFiltered);
    }
  }

  if (totalRendered === 0) {
    container.innerHTML = `
      <div class="no-results">
        <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
        Nenhum jogo encontrado
      </div>
    `;
  }
}

// === MODAL COM FOCUS TRAP ===
const overlay = document.getElementById("modal-overlay");
const closeBtn = document.getElementById("modal-close-btn");
let lastFocusedElement = null;

function openModal(game) {
  lastFocusedElement = document.activeElement;

  document.getElementById("modal-game-title").textContent = game.title;
  document.getElementById("modal-game-description").textContent = game.description;
  document.getElementById("modal-game-genre").textContent = game.genre;
  document.getElementById("modal-game-platform").textContent = game.platform;
  document.getElementById("modal-game-players").textContent = game.players;
  document.getElementById("modal-game-tags").textContent = game.tags || game.genre;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  setTimeout(() => closeBtn.focus(), 50);
}

function closeModal() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

if (closeBtn) closeBtn.addEventListener("click", closeModal);

if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // Focus trap
  overlay.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusable = overlay.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// === INICIALIZAR ===
document.addEventListener("DOMContentLoaded", () => {
  renderPricing();
  setupTabs();
  renderCarousel();
  renderGames();

  // Carrossel botões
  document.getElementById("carousel-prev")?.addEventListener("click", () => {
    prevSlide();
    stopCarousel();
    startCarousel();
  });
  document.getElementById("carousel-next")?.addEventListener("click", () => {
    nextSlide();
    stopCarousel();
    startCarousel();
  });

  // Pausa no hover
  const carousel = document.getElementById("carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);
  }

  // Busca
  const searchInput = document.getElementById("game-search");
  if (searchInput) {
    searchInput.addEventListener("input", renderGames);
  }

  // Filtros
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGames();
    });
  });

  initSnakeGame();
});

// ============================================
// ENGINE DO JOGO SNAKE (CABEÇALHO)
// ============================================
let canvas, ctx;
const CELL_SIZE = 16;
let snake = [];
let direction = "right";
let fruit = { x: 0, y: 0 };
let initialFruitEaten = false;
let gameInterval = null;
let canvasWidth = 0;
let canvasHeight = 0;
let cols = 0;
let rows = 0;

// Cores cacheadas (lidas uma vez)
let cachedSnakeColor = "";
let cachedEyeColor = "";

function initSnakeGame() {
  canvas = document.getElementById("header-canvas");
  if (!canvas) return;

  ctx = canvas.getContext("2d");

  // Cache das cores CSS
  const rootStyle = getComputedStyle(document.documentElement);
  cachedSnakeColor = rootStyle.getPropertyValue("--primary").trim() || "hsl(45, 100%, 60%)";
  cachedEyeColor = rootStyle.getPropertyValue("--foreground").trim() || "hsl(270, 65%, 24%)";

  resizeCanvas();
  resetGame();

  window.addEventListener("resize", () => {
    resizeCanvas();
    if (!initialFruitEaten) alignInitialFruit();
  });

  const logo = document.getElementById("logo-img");
  if (logo.complete) {
    alignInitialFruit();
    resetSnake();
  } else {
    logo.addEventListener("load", () => {
      resizeCanvas();
      alignInitialFruit();
      resetSnake();
    });
  }

  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(gameStep, 100);
}

function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  canvasWidth = rect.width;
  canvasHeight = rect.height;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);

  cols = Math.floor(canvasWidth / CELL_SIZE);
  rows = Math.floor(canvasHeight / CELL_SIZE);
}

function alignInitialFruit() {
  const logo = document.getElementById("logo-img");
  if (!logo || !canvas) return;
  const canvasRect = canvas.getBoundingClientRect();
  const logoRect = logo.getBoundingClientRect();

  const pxX = (logoRect.left + logoRect.right) / 2 - canvasRect.left;
  const pxY = logoRect.top - canvasRect.top;

  fruit.x = Math.floor(pxX / CELL_SIZE);
  fruit.y = Math.floor(pxY / CELL_SIZE);

  if (fruit.x >= cols) fruit.x = cols - 1;
  if (fruit.x < 0) fruit.x = 0;
  if (fruit.y >= rows) fruit.y = rows - 1;
  if (fruit.y < 0) fruit.y = 0;
}

function resetSnake() {
  const startY = fruit.y;
  const startLength = 5;
  snake = [];
  for (let i = 0; i < startLength; i++) {
    snake.push({ x: startLength - 1 - i, y: startY });
  }
  direction = "right";
}

function resetGame() {
  initialFruitEaten = false;
  alignInitialFruit();
  resetSnake();
}

function spawnFruit() {
  let attempts = 0;
  let newFruit = {};

  while (attempts < 100) {
    newFruit = {
      x: Math.floor(Math.random() * (cols - 2)) + 1,
      y: Math.floor(Math.random() * (rows - 2)) + 1,
    };

    let occupied = false;
    for (const segment of snake) {
      if (segment.x === newFruit.x && segment.y === newFruit.y) {
        occupied = true;
        break;
      }
    }

    if (!occupied) {
      fruit = newFruit;
      return;
    }
    attempts++;
  }
  fruit = newFruit;
}

function gameStep() {
  updateSnake();
  drawGame();
}

function updateSnake() {
  if (snake.length === 0) return;
  const head = snake[0];
  const target = fruit;

  const moves = {
    right: { x: 1, y: 0 },
    left: { x: -1, y: 0 },
    down: { x: 0, y: 1 },
    up: { x: 0, y: -1 },
  };

  const validMoves = [];

  for (const [dir, offset] of Object.entries(moves)) {
    const nextX = head.x + offset.x;
    const nextY = head.y + offset.y;

    if (direction === "right" && dir === "left") continue;
    if (direction === "left" && dir === "right") continue;
    if (direction === "up" && dir === "down") continue;
    if (direction === "down" && dir === "up") continue;

    if (nextX < 0 || nextX >= cols || nextY < 0 || nextY >= rows) continue;

    let selfCollide = false;
    for (let i = 0; i < snake.length - 1; i++) {
      if (snake[i].x === nextX && snake[i].y === nextY) {
        selfCollide = true;
        break;
      }
    }
    if (selfCollide) continue;

    const dist = Math.abs(nextX - target.x) + Math.abs(nextY - target.y);
    validMoves.push({ dir, dist });
  }

  if (validMoves.length > 0) {
    validMoves.sort((a, b) => a.dist - b.dist);

    let chosenMove = validMoves[0];
    const currentMove = validMoves.find((m) => m.dir === direction);
    if (currentMove && currentMove.dist === chosenMove.dist) {
      chosenMove = currentMove;
    }

    direction = chosenMove.dir;
  } else {
    resetGame();
    return;
  }

  const offset = moves[direction];
  const newHead = { x: head.x + offset.x, y: head.y + offset.y };

  snake.unshift(newHead);

  if (newHead.x === fruit.x && newHead.y === fruit.y) {
    if (!initialFruitEaten) initialFruitEaten = true;
    spawnFruit();
    if (snake.length > 12) snake.pop();
  } else {
    snake.pop();
  }
}

function drawGame() {
  if (!ctx || !canvas) return;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Usa cores cacheadas
  const snakeColor = cachedSnakeColor;
  const eyeColor = cachedEyeColor;

  // 1. Desenha a fruta
  const fX = fruit.x * CELL_SIZE + CELL_SIZE / 2;
  const fY = fruit.y * CELL_SIZE + CELL_SIZE / 2;
  const fRadius = CELL_SIZE / 2 - 1.5;

  ctx.fillStyle = "hsl(270, 80%, 55%)";
  ctx.beginPath();
  ctx.arc(fX, fY, fRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "hsl(142, 70%, 45%)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(fX, fY - fRadius + 1);
  ctx.quadraticCurveTo(fX + 1.5, fY - fRadius - 1.5, fX + 3, fY - fRadius - 2.5);
  ctx.stroke();

  // 2. Desenha a cobra amarela
  snake.forEach((segment, index) => {
    const sX = segment.x * CELL_SIZE + 1;
    const sY = segment.y * CELL_SIZE + 1;
    const sSize = CELL_SIZE - 2;

    if (index === 0) {
      ctx.fillStyle = snakeColor;
      ctx.fillRect(sX, sY, sSize, sSize);

      ctx.fillStyle = eyeColor;
      const eSize = 2;
      if (direction === "right") {
        ctx.fillRect(sX + sSize - 4, sY + 2, eSize, eSize);
        ctx.fillRect(sX + sSize - 4, sY + sSize - 4, eSize, eSize);
      } else if (direction === "left") {
        ctx.fillRect(sX + 2, sY + 2, eSize, eSize);
        ctx.fillRect(sX + 2, sY + sSize - 4, eSize, eSize);
      } else if (direction === "down") {
        ctx.fillRect(sX + 2, sY + sSize - 4, eSize, eSize);
        ctx.fillRect(sX + sSize - 4, sY + sSize - 4, eSize, eSize);
      } else if (direction === "up") {
        ctx.fillRect(sX + 2, sY + 2, eSize, eSize);
        ctx.fillRect(sX + sSize - 4, sY + 2, eSize, eSize);
      }
    } else {
      ctx.fillStyle = snakeColor;
      ctx.fillRect(sX, sY, sSize, sSize);
    }
  });
}
