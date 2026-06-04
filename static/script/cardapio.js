/* ===========================
   INFORRÓ — SCRIPT.JS
   =========================== */

// ── ALLERGEN DATA ──────────────────────────────
const ALLERGENS = {
  gluten:   { label: "Contém glúten", icon: "/static/cardapio/gluten.png" },
  leite:    { label: "Contém leite", icon: "/static/cardapio/leite.png" },
  ovo:      { label: "Contém ovo", icon: "/static/cardapio/ovo.png" },
  amendoim: { label: "Contém amendoim", icon: "/static/cardapio/amendoin.png" },
};

// ── 3-DAY LUNCH DATA ───────────────────────────
const REFEICOES = [
  { dia: "1º dia", data: "16/06", nome: "Panqueca",      img: "/static/cardapio/panqueca.png" },
  { dia: "2º dia", data: "17/06", nome: "Torta de Frango", img: "/static/cardapio/torta.png" },
  { dia: "3º dia", data: "18/06", nome: "Lasanha",       img: "/static/cardapio/lasanha.png" },
];

// ── MENU DATA ──────────────────────────────────
const MENU = [
  // LANCHES
  {
    id: 1, nome: "Disco Voador", sub: "Minipizza",
    desc: "Mini pizza assada na hora com molho especial e muçarela derretida.",
    categoria: "lanches", preco: 6.00, img: "/static/cardapio/minipizza.png",
    alergenicos: ["gluten","leite"],
    ingredientes: ["Massa","Molho de tomate","Muçarela"],
  },
  {
    id: 3, nome: "Crepe Segundo", sub: "Passou de primeira no sabor",
    desc: "Crepe recheado com presunto e queijo, crocante por fora e cremoso por dentro.",
    categoria: "lanches", preco: 6.00, img: "/static/cardapio/crepesalgado.png",
    alergenicos: ["gluten","leite","ovo"],
    ingredientes: ["Massa de crepe","Presunto","Queijo","Ovos","Leite"],
  },
  {
    id: 4, nome: "Galo Quente", sub: "",
    desc: "Misto quente turbinado com frango desfiado e queijo derretido.",
    categoria: "lanches", preco: 6.00, img: "/static/cardapio/galoquente.png",
    alergenicos: ["gluten","leite"],
    ingredientes: ["Pão de forma","Frango desfiado","Queijo"],
  },
  {
    id: 5, nome: "Batata frita", sub: "batata.exe",
    desc: "Quentinha e crocante.",
    categoria: "lanches", preco: 7.00, img: "/static/cardapio/batatafrita.png",
    alergenicos: ["gluten"],
    ingredientes: ["batata","sal"],
  },
  {
    id: 6, nome: "Combo de salgados", sub: "Overflow de sabor",
    desc: "Coxinha de frango com catupiry, bolinha de queijo e outros.",
    categoria: "lanches", preco: 5.00, img: "/static/cardapio/salgado.png",
    alergenicos: ["gluten","leite"],
    ingredientes: ["Massa de coxinha","Frango","Catupiry","Queijo"],
  },

  // DOCES
  {
    id: 7, nome: "Bolo Junino", sub: "dechcolatw, pede muleke ",
    desc: "Bolo fofinho com 3 opções diferentes.",
    categoria: "doces", preco: 5.00, img: "/static/cardapio/bolo.png",
    alergenicos: ["gluten","leite","ovo"],
    ingredientes: ["chocolate","coco","Ovos","Leite condensado","Margarina","Farinha"],
  },
  {
    id: 8, nome: "Paçoca Pointer", sub: "aponta pro sabor",
    desc: "Paçoca caseira feita com amendoim torrado. Simples, direto e delicioso.",
    categoria: "doces", preco: 3.00, img: "/static/cardapio/pacoca.png",
    alergenicos: ["amendoim"],
    ingredientes: ["Amendoim torrado","Açúcar","Sal"],
  },
  {
    id: 9, nome: "Pé-de-Moleque.exe", sub: "rodando no açúcar",
    desc: "Pé-de-moleque crocante feito na hora. Sem dependências, só sabor.",
    categoria: "doces", preco: 3.00, img: "/static/cardapio/pedemuleke.png",
    alergenicos: ["amendoim"],
    ingredientes: ["Amendoim","Rapadura","Açúcar"],
  },
  {
    id: 10, nome: "Alfajor", sub: "doce de leite e chocolate",
    desc: " alfajor recheado com doce de leite e coberto com chocolate. Doce de leite: o código-fonte da felicidade.",
    categoria: "doces", preco: 4.00, img: "/static/cardapio/Alfajor.png",
    alergenicos: ["leite","gluten"],
    ingredientes: ["Biscoito","Doce de leite","Chocolate"],
  },
  {
    id: 11, nome: "Crepe Doce", sub: "morango & chocolate",
    desc: "Crepe doce quentinho recheado com morango, chocolate e leite condensado.",
    categoria: "doces", preco: 6.00, img: "/static/cardapio/crepedoce.png",
    alergenicos: ["gluten","leite"],
    ingredientes: ["Massa de crepe","Morango","Chocolate","Leite condensado"],
  },
  {
    id: 12, nome: "Pudim", sub: "clássico da vovó",
    desc: "Pudim cremoso de leite condensado com calda dourada e sabor caseiro.",
    categoria: "doces", preco: 4.50, img: "/static/cardapio/pudim.png",
    alergenicos: ["leite","ovo"],
    ingredientes: ["Leite condensado","Leite","Ovos","Açúcar"],
  },
  {
    id: 13, nome: "Cremosim", sub: "doce de colher",
    desc: "Sobremesa cremosa com camadas de creme e calda doce, feita para devorar.",
    categoria: "doces", preco: 5.00, img: "/static/cardapio/cremosim.png",
    alergenicos: ["leite"],
    ingredientes: ["Leite","Açúcar","Amido de milho","Baunilha"],
  },

  // BEBIDAS
  {
    id: 14, nome: "Refri (1L)",        sub: "", desc: "",
    categoria: "bebidas", preco: 6.00, img: "/static/cardapio/refri1l.png", alergenicos: [], ingredientes: [],
  },
  {
    id: 15, nome: "Refri (Lata)",      sub: "", desc: "",
    categoria: "bebidas", preco: 6.00, img: "/static/cardapio/refrilata.png", alergenicos: [], ingredientes: [],
  },
  {
    id: 16, nome: "Refri (Garrafinha)", sub: "", desc: "",
    categoria: "bebidas", preco: 6.00, img: "/static/cardapio/refrigarrafinha.png", alergenicos: [], ingredientes: [],
  },
  {
    id: 17, nome: "Suco",      sub: "", desc: "",
    categoria: "bebidas", preco: 5.00, img: "/static/cardapio/suco.png", alergenicos: [], ingredientes: [],
  },
];

// ── HELPERS ────────────────────────────────────
const fmt = (n) => "R$ " + n.toFixed(2).replace(".", ",");

// ── MEAL CARDS (3 pratos / 3 dias) ────────────
function renderMealCards() {
  const row = document.getElementById("meal-cards-row");
  REFEICOES.forEach((r) => {
    const card = document.createElement("div");
    card.className = "meal-card";
    card.innerHTML = `
      <div class="meal-card-img">
        <span class="day-badge">${r.dia}</span>
        <img src="${r.img}" alt="${r.nome}" onerror="this.style.display='none';this.parentElement.style.fontSize='3rem';this.parentElement.textContent='🍽️';" />
      </div>
      <div class="meal-card-info">
        <p class="meal-date">${r.data}</p>
        <p class="meal-name">${r.nome}</p>
      </div>
    `;
    row.appendChild(card);
  });
}

// ── LEGEND ─────────────────────────────────────
function renderLegend() {
  const grid = document.getElementById("legend-grid");
  Object.entries(ALLERGENS).forEach(([, a]) => {
    const div = document.createElement("div");
    div.className = "legend-item";
    div.innerHTML = `<span class="legend-icon"><img src="${a.icon}" alt="" style="width:56px;height:56px;object-fit:contain" /></span><span class="legend-label">${a.label}</span>`;
    grid.appendChild(div);
  });
}

// ── MENU TABS ──────────────────────────────────
function renderMenu(category) {
  const items   = MENU.filter((m) => m.categoria === category);
  const title   = document.getElementById("menu-title");
  const count   = document.getElementById("item-count");
  const content = document.getElementById("menu-content");

  title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  count.textContent = `[${items.length} items]`;
  content.innerHTML = "";

  if (category === "bebidas") {
    const list = document.createElement("div");
    list.className = "drinks-list";
    items.forEach((it) => {
      const row = document.createElement("div");
      row.className = "drink-row";
      row.innerHTML = `
        <div style="display:flex;align-items:center;gap:.5rem">
          <img src="${it.img}" alt="${it.nome}" style="width:28px;height:28px;object-fit:contain" />
          <span class="drink-name">${it.nome}</span>
        </div>
        <span class="price-badge">${fmt(it.preco)}</span>
      `;
      list.appendChild(row);
    });
    content.appendChild(list);
  } else {
    const grid = document.createElement("div");
    grid.className = "cards-grid";
    items.forEach((it) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Ver detalhes de ${it.nome}`);

      const allerIconsHtml = it.alergenicos
        .filter((k) => ALLERGENS[k])
        .map((k) => `<span class="allergen-icon-sm" title="${ALLERGENS[k].label}"><img src="${ALLERGENS[k].icon}" alt="" style="width:36px;height:36px;object-fit:contain" /></span>`)
        .join("");

      card.innerHTML = `
        <div class="card-img"><img src="${it.img}" alt="${it.nome}" style="width:80%;height:80%;object-fit:contain" /></div>
        <div class="card-body">
          <p class="card-name">${it.nome}</p>
          <p class="card-sub">${it.sub || "&nbsp;"}</p>
          <div class="card-footer">
            <span class="price-badge">${fmt(it.preco)}</span>
            <div class="allergen-icons">${allerIconsHtml}</div>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openModal(it));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") openModal(it); });
      grid.appendChild(card);
    });
    content.appendChild(grid);
  }
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu(btn.dataset.tab);
    });
  });
}

// ── MODAL ──────────────────────────────────────
function openModal(item) {
  const overlay = document.getElementById("modal-overlay");

  // image
  const imgEl = document.getElementById("modal-img");
  imgEl.innerHTML = `<img src="${item.img}" alt="${item.nome}" style="width:80%;height:80%;object-fit:contain" />`;

  document.getElementById("modal-item-name").textContent = item.nome;
  document.getElementById("modal-item-desc").textContent = item.desc || "";

  // allergens
  const allergWrap = document.getElementById("modal-allergens-wrap");
  const allergList = document.getElementById("modal-allergen-list");
  allergList.innerHTML = "";
  const validAllergens = item.alergenicos.filter((k) => ALLERGENS[k]);
  if (validAllergens.length > 0) {
    validAllergens.forEach((k) => {
      const row = document.createElement("div");
      row.className = "allergen-row";
      row.innerHTML = `<span style="font-size:1.3rem"><img src="${ALLERGENS[k].icon}" alt="" style="width:48px;height:48px;object-fit:contain" /></span><strong>${ALLERGENS[k].label}</strong>`;
      allergList.appendChild(row);
    });
    allergWrap.style.display = "block";
  } else {
    allergWrap.style.display = "none";
  }

  // price
  document.getElementById("modal-price").textContent = fmt(item.preco);

  // ingredients
  const ingWrap = document.getElementById("modal-ingredients-wrap");
  const ingList = document.getElementById("modal-ingredient-list");
  ingList.innerHTML = "";
  if (item.ingredientes.length > 0) {
    item.ingredientes.forEach((ing) => {
      const chip = document.createElement("span");
      chip.className = "ingredient-chip";
      chip.textContent = ing;
      ingList.appendChild(chip);
    });
    ingWrap.style.display = "block";
  } else {
    ingWrap.style.display = "none";
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function setupModal() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

// ── TERMINAL TYPEWRITER ────────────────────────
const LINES = [
  "> carregando sabores...",
  "> compilando receitas típicas... OK",
  ">> ./cardapio --all",
  "sistema pronto. bom apetite!",
];

function runTerminal() {
  const el = document.getElementById("terminal-body");
  let idx = 0, charPos = 0;

  function reset() {
    idx = 0; charPos = 0;
    el.textContent = "";
    setTimeout(type, 500);
  }

  function type() {
    if (idx >= LINES.length) { setTimeout(reset, 2000); return; }
    const line = LINES[idx];
    if (charPos < line.length) {
      el.textContent = line.slice(0, ++charPos) + "█";
      setTimeout(type, 30);
    } else {
      el.textContent = line + "█";
      idx++; charPos = 0;
      setTimeout(type, 350);
    }
  }
  type();
}

// ── BOOT ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderMealCards();
  renderLegend();
  setupTabs();
  renderMenu("lanches");
  setupModal();
  runTerminal();
});
