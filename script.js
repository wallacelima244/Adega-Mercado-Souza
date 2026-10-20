"use strict";

const WHATSAPP = "5511992973452";

/*
  Cada linha contém:
  ID, nome, descrição, categoria, preço em centavos,
  unidade de venda, arquivo da foto e grupo de sabores.

  Exemplo: 19000 = R$ 190,00.
*/

const DATA = [
  ["of-combo-jack","Combo Jack Daniel’s Blackberry + Red Bull","1 Jack Daniel’s + 5 Red Bulls + 5 gelos","combos",19000,"o combo","combo-jack-foto.png","of-combo-jack.svg"],
  ["of-corona-6","Corona Extra · pacote com 6","6 long necks de 330 ml","beer",4300,"o pacote","photo-874439ef35e8ea.png","of-corona-6.svg"],
  ["of-heineken-350-12","Heineken · pacote com 12","12 latas de 350 ml","beer",5900,"o pacote","photo-cc4ebd8183801a.png","of-heineken-350-12.svg"],
  ["of-heineken-269-8","Heineken · pacote com 8","8 latas de 269 ml","beer",3500,"o pacote","photo-4f80d765c6fd29.png","of-heineken-269-8.svg"],
  ["of-brahma-269-15","Brahma Duplo Malte · pacote com 15","15 latas de 269 ml","beer",3850,"o pacote","photo-611aa616a42841.png","of-brahma-269-15.svg"],
  ["of-skol-269-15","Skol · pacote com 15","15 latas de 269 ml","beer",4300,"o pacote","photo-b4fda043aa87a8.png","of-skol-269-15.svg"],
  ["of-itaipava-350-12","Itaipava · pacote com 12","12 latas de 350 ml","beer",3300,"o pacote","photo-1a38fc99c10a7d.png","of-itaipava-350-12.svg"],
  ["of-itaipava-269-12","Itaipava · pacote com 12","12 latas de 269 ml","beer",3050,"o pacote","photo-0c6aa95daf98ea.png","of-itaipava-269-12.svg"],
  ["of-jack-old7","Jack Daniel’s Old Nº 7","Garrafa de 1 litro","spirits",12500,"unidade","photo-0b939363e7426f.png","of-jack-old7.svg"],
  ["of-jack-apple","Jack Daniel’s Tennessee Apple","Garrafa de 1 litro","spirits",12500,"unidade","photo-f7dc7273eb9ccd.png","of-jack-old7.svg"],
  ["of-jack-blackberry","Jack Daniel’s Tennessee Blackberry","Garrafa de 1 litro","spirits",12500,"unidade","photo-6cb7f618792885.png","of-jack-old7.svg"],
  ["of-ballena-original","Ballena Original","Garrafa · consulte o volume no atendimento","liqueurs",11000,"unidade","photo-aeea4bac1b00c8.png","of-ballena-original.svg"],
  ["of-ballena-coco","Ballena Coco","Garrafa · consulte o volume no atendimento","liqueurs",11000,"unidade","photo-2939099fac45a8.png","of-ballena-original.svg"],
  ["of-ballena-chocolate","Ballena Chocolate e Caramelo","Garrafa · consulte o volume no atendimento","liqueurs",11000,"unidade","photo-3f755c198e3834.png","of-ballena-original.svg"],
  ["of-invictus-tropical","Invictus Tropical","Coquetel elaborado com dry gin · 900 ml","gin",1850,"unidade","photo-0cb31af71dbb71.png","of-invictus-tropical.svg"],
  ["of-invictus-morango","Invictus Morango com Pêssego","Coquetel elaborado com dry gin · 900 ml","gin",1850,"unidade","photo-effa0a985bfc7e.png","of-invictus-tropical.svg"],
  ["of-invictus-melancia","Invictus Melancia","Coquetel elaborado com dry gin · 900 ml","gin",1850,"unidade","photo-4a0c0ecef76548.png","of-invictus-tropical.svg"],
  ["of-vibe-tropical","V!be Tropical","Energético · garrafa · volume a confirmar","energy",1099,"unidade","photo-9155529b788540.png","of-vibe-tropical.svg"],
  ["of-vibe-melancia","V!be Melancia","Energético · garrafa · volume a confirmar","energy",1099,"unidade","photo-13fc1fcba2fa78.png","of-vibe-tropical.svg"],
  ["of-vibe-limao","V!be Limão","Energético · garrafa · volume a confirmar","energy",1099,"unidade","photo-54f8b95be123b3.png","of-vibe-tropical.svg"],
  ["of-vibe-laranja","V!be Laranja","Energético · garrafa · volume a confirmar","energy",1099,"unidade","photo-951e6681ec48fa.png","of-vibe-tropical.svg"],
  ["of-vibe-pessego","V!be Pêssego e Morango","Energético · garrafa · volume a confirmar","energy",1099,"unidade","photo-ffe8bec45de66c.png","of-vibe-tropical.svg"],
  ["of-vibe-acai","V!be Açaí com Coco","Energético · garrafa · volume a confirmar","energy",1099,"unidade","photo-420cad02902af4.png","of-vibe-tropical.svg"],
  ["of-coca-25","Coca-Cola 2,5 L","Não retornável · garrafa de 2,5 litros","soft",1550,"unidade","photo-aed769b165e2bf.png","of-coca-25.svg"],
  ["of-coca-retornavel","Coca-Cola retornável","Garrafa retornável · consulte volume e troca de vasilhame","soft",975,"unidade","photo-4457a196555740.png","of-coca-retornavel.svg"],
  ["of-coca-25-6","Coca-Cola 2,5 L · pacote com 6","6 garrafas de 2,5 litros","soft",6250,"o pacote","photo-aed769b165e2bf.png","of-coca-25-6.svg"],
  ["of-tubaina-2-6","Tubaína 2 L · pacote com 6","6 garrafas de 2 litros","soft",3750,"o pacote","photo-01551a893db142.png","of-tubaina-2-6.svg"],
  ["of-absolut-1","Absolut Original","Vodka · garrafa de 1 litro","spirits",7499,"unidade","photo-2294ef9bb2a2ae.png","of-absolut-1.svg"],
  ["of-ciroc-red","Cîroc Red Berry","Vodka · garrafa · volume a confirmar","spirits",17500,"unidade","photo-a1c260b3230410.png","of-ciroc-red.svg"],
  ["of-ciroc-original","Cîroc Original","Vodka · garrafa · volume a confirmar","spirits",15500,"unidade","photo-6d7ba305ed7317.png","of-ciroc-original.svg"],
  ["of-dreher","Dreher","Tradição Centenária · 900 ml","spirits",1899,"unidade","photo-f8f2418984c6be.png","of-dreher.svg"],
  ["of-sangue-boi","Sangue de Boi","Vinho tinto suave · 750 ml","wine",1625,"unidade","photo-ddbfa9844382d0.png","of-sangue-boi.svg"],
  ["of-cantina","Cantina Agrícola","Vinho Bordô suave · 750 ml","wine",1450,"unidade","photo-518940b79e3371.png","of-cantina.svg"],
  ["of-pergola","Pérgola Seleção Suave","Vinho tinto de mesa · 1 litro","wine",2399,"unidade","photo-0fb375529d316a.png","of-pergola.svg"],
  ["of-sangue-vale","Sangue do Vale","Coquetel alcoólico · 880 ml","cocktail",699,"unidade","photo-1622c7a5d1bc9a.png","of-sangue-vale.svg"],
  ["of-bob","Bob Pinga","Bebida alcoólica mista · 975 ml","cocktail",2750,"unidade","photo-2fee8e37a622bd.png","of-bob.svg"],
  ["of-chanceler","Chanceler Golden Label","Aperitivo com whisky e carvalho · 1 litro","cocktail",1850,"unidade","photo-bfa977198e6ce0.png","of-chanceler.svg"],
  ["of-busca","Busca Brisa","Bebida alcoólica mista · 1 litro","cocktail",2850,"unidade","photo-4a1bbdd952495f.png","of-busca.svg"],
  ["of-corote-whisky","Corote Combo Whisky","Coquetel alcoólico gaseificado · 1 litro","cocktail",1299,"unidade","photo-835cf91b4ed047.png","of-corote-whisky.svg"],
  ["of-corote-gin","Corote Combo Gin Tropical","Coquetel alcoólico gaseificado · 1 litro","cocktail",1299,"unidade","photo-0c48214a039d89.png","of-corote-whisky.svg"],
  ["of-canelinha","Canelinha Da Rocha","Coquetel alcoólico de canela e gengibre · 900 ml","cocktail",1650,"unidade","photo-791309c3e7f0f3.png","of-canelinha.svg"],
  ["of-copao","Copão de Jack Daniel’s","Com gelo de coco e Red Bull · volume a confirmar","drinks",4300,"o copão","photo-94134a468e6830.png","of-copao.svg"],
  ["of-carvao","Carvão Funchal","Pacote de 2 kg","other",1450,"o pacote","photo-4ceca3ed8bb3b6.png","of-carvao.svg"]
];

const PRODUCTS = DATA.map(
  ([id, name, detail, category, price, unit]) => ({
    id, name, detail, category, price, unit, image: id
  })
);

const PHOTO_MAP = Object.fromEntries(
  DATA.map(p => [p[0], `assets/fotos/${p[6]}`])
);

const IMAGES = Object.fromEntries(
  DATA.map(p => [p[0], `assets/artes/${p[7]}`])
);

const CATEGORIES = [
  ["all", "Todos os produtos"],
  ["combos", "Combos"],
  ["beer", "Cervejas"],
  ["gin", "Gin"],
  ["spirits", "Destilados"],
  ["liqueurs", "Ballena"],
  ["energy", "Energéticos"],
  ["wine", "Vinhos"],
  ["cocktail", "Coquetéis"],
  ["drinks", "Copão"],
  ["soft", "Refrigerantes"],
  ["other", "Churrasco"]
];

/* UTILITÁRIOS */

const $ = (selector, root = document) => root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

const esc = value => String(value).replace(
  /[&<>"']/g,
  char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char])
);

const money = cents => (cents / 100).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const norm = value => value.normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

const icon = name => `
  <svg fill="none"
       stroke="currentColor"
       stroke-width="1.7"
       stroke-linecap="round"
       stroke-linejoin="round"
       aria-hidden="true">
    <use href="#i-${name}"/>
  </svg>
`;

const byId = new Map(PRODUCTS.map(p => [p.id, p]));
const selectedVariants = new Map();
const KEY = "mercado-souza-cart-oficial-v2";

let cart = {};
let category = "all";
let timer;
let lastFocus;

function validCart(raw) {
  const next = {};

  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    Object.entries(raw).forEach(([id, quantity]) => {
      if (
        byId.has(id) &&
        Number.isInteger(quantity) &&
        quantity > 0 &&
        quantity <= 99
      ) {
        next[id] = quantity;
      }
    });
  }

  return next;
}

try {
  cart = validCart(JSON.parse(localStorage.getItem(KEY) || "{}"));
} catch {
  cart = {};
}

const entries = () => Object.entries(cart);

const total = () => entries().reduce(
  (sum, [id, quantity]) => sum + byId.get(id).price * quantity,
  0
);

const count = () => entries().reduce(
  (sum, [, quantity]) => sum + quantity,
  0
);

function notify(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");

  clearTimeout(timer);

  timer = setTimeout(() => {
    $("#toast").classList.remove("show");
  }, 2300);
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(cart));
  } catch {
    // O carrinho continua funcionando caso o armazenamento esteja bloqueado.
  }
}

/* PRODUTOS E SABORES */

function controls(product, compact = false) {
  const quantity = cart[product.id] || 0;

  if (!quantity) {
    return `
      <button class="add"
              data-change="${product.id}"
              data-delta="1"
              aria-label="Adicionar ${esc(product.name)}">
        ${icon("plus")}Adicionar
      </button>
    `;
  }

  return `
    <div class="stepper">
      <button data-change="${product.id}"
              data-delta="-1"
              aria-label="Diminuir ${esc(product.name)}">
        ${icon("minus")}
      </button>

      <span>${quantity}${compact ? "" : " no carrinho"}</span>

      <button data-change="${product.id}"
              data-delta="1"
              aria-label="Aumentar ${esc(product.name)}"
              ${quantity >= 99 ? "disabled" : ""}>
        ${icon("plus")}
      </button>
    </div>
  `;
}

function renderCategories() {
  $("#categories").innerHTML = CATEGORIES.map(([id, label]) => `
    <button class="category ${category === id ? "active" : ""}"
            aria-pressed="${category === id}"
            data-category="${id}">
      ${label}
    </button>
  `).join("");
}

function inquiryURL(product) {
  const message =
    `Olá, Mercado Souza! Tenho uma dúvida sobre ${product.name} ` +
    `(${product.detail}), anunciado por ${money(product.price)} ${product.unit}.`;

  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const query = norm($("#search").value.trim());

  let list = PRODUCTS.filter(product => {
    const categoryName = CATEGORIES.find(
      item => item[0] === product.category
    )[1];

    const matchesCategory =
      category === "all" || product.category === category;

    const matchesSearch = norm(
      `${product.name} ${product.detail} ${categoryName}`
    ).includes(query);

    return matchesCategory && matchesSearch;
  });

  switch ($("#sort").value) {
    case "low":
      list.sort((a, b) => a.price - b.price);
      break;

    case "high":
      list.sort((a, b) => b.price - a.price);
      break;

    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
      break;
  }

  const grouped = new Map();

  for (const product of list) {
    const group = IMAGES[product.image];

    if (!grouped.has(group)) {
      grouped.set(group, []);
    }

    grouped.get(group).push(product);
  }

  $("#result-count").textContent =
    `${grouped.size} produtos` +
    (list.length !== grouped.size
      ? ` · ${list.length} opções de compra`
      : "");

  $("#no-results").hidden = Boolean(list.length);

  $("#products").innerHTML = [...grouped.entries()]
    .map(([group, variants]) => {
      const product =
        variants.find(item => item.id === selectedVariants.get(group)) ||
        variants[0];

      const categoryName = CATEGORIES.find(
        item => item[0] === product.category
      )[1];

      const quantityLabel = product.unit !== "unidade"
        ? `<span class="quantity-label">${
            esc(product.unit === "o pacote" ? product.detail : product.unit)
          }</span>`
        : "";

      const flavorSelector = variants.length > 1
        ? `
          <label class="variant-label">
            Escolha o sabor
            <select data-variant="${esc(group)}"
                    aria-label="Sabor de ${esc(product.name)}">
              ${variants.map(item => `
                <option value="${item.id}"
                        ${item.id === product.id ? "selected" : ""}>
                  ${esc(item.name)}
                </option>
              `).join("")}
            </select>
          </label>
        `
        : "";

      return `
        <article class="product" data-product="${product.id}">
          <div class="photo real-photo">
            <img src="${PHOTO_MAP[product.id]}"
                 alt="${esc(product.name)}"
                 loading="lazy"
                 decoding="async"
                 width="320"
                 height="260">
            ${quantityLabel}
          </div>

          <div class="product-body">
            <small>${categoryName}</small>
            <h3>${esc(product.name)}</h3>
            <p class="description">${esc(product.detail)}</p>

            ${product.id === "of-carvao"
              ? '<small class="photo-note">Foto ilustrativa da embalagem de 2 kg.</small>'
              : ""}

            ${flavorSelector}

            <div class="price-row">
              <span class="price">${money(product.price)}</span>
              <span>${esc(product.unit)}</span>
            </div>

            <div class="product-controls">${controls(product)}</div>

            <a class="product-question"
               href="${inquiryURL(product)}"
               target="_blank"
               rel="noopener noreferrer">
              Tirar dúvida sobre este produto ↗
            </a>
          </div>
        </article>
      `;
    }).join("");
}

document.addEventListener("change", event => {
  const select = event.target.closest("[data-variant]");

  if (!select) return;

  const group = select.dataset.variant;

  selectedVariants.set(group, select.value);
  renderProducts();

  $$("[data-variant]")
    .find(element => element.dataset.variant === group)
    ?.focus({ preventScroll: true });
});

/* CARRINHO */

function renderCart() {
  const items = entries();

  $$("[data-count]").forEach(element => {
    element.textContent = count();
  });

  $("#empty-cart").hidden = Boolean(items.length);
  $("#summary").hidden = !items.length;

  $("#cart-items").innerHTML = items.map(([id, quantity]) => {
    const product = byId.get(id);

    return `
      <div class="cart-item">
        <img src="${PHOTO_MAP[id]}" alt="">

        <div>
          <h3>${esc(product.name)}</h3>
          <p>${esc(product.detail)}</p>

          <div class="item-bottom">
            ${controls(product, true)}
            <strong>${money(product.price * quantity)}</strong>
          </div>
        </div>

        <button class="remove"
                data-remove="${id}"
                aria-label="Remover ${esc(product.name)}">
          ${icon("x")}
        </button>
      </div>
    `;
  }).join("");

  [
    "#subtotal",
    "#total",
    "#mobile-total",
    "#review-total"
  ].forEach(selector => {
    $(selector).textContent = money(total());
  });

  $("#review-items").innerHTML = items.map(([id, quantity]) => `
    <div class="review-line">
      <span>${quantity} × ${esc(byId.get(id).name)}</span>
      <strong>${money(byId.get(id).price * quantity)}</strong>
    </div>
  `).join("");

  $$(".product").forEach(element => {
    $(".product-controls", element).innerHTML =
      controls(byId.get(element.dataset.product));
  });
}

function change(id, delta) {
  if (!byId.has(id)) return;

  const next = (cart[id] || 0) + delta;

  if (next > 99) {
    notify("Limite de 99 unidades por produto.");
    return;
  }

  if (next <= 0) {
    delete cart[id];
  } else {
    cart[id] = next;
  }

  persist();
  renderCart();

  if (delta > 0) {
    notify(`${byId.get(id).name} adicionado ao carrinho`);
  }
}

function setInert(value) {
  $$(
    "header,.top,.nav,.top-offers,.service-line,.weekly," +
    ".signature-campaigns,.quick-help,.benefits,.catalog-heading," +
    ".categories,.shop-main,.how,.store-hours,.footer," +
    ".mobile-cart,.floating-whatsapp"
  ).forEach(element => {
    element.inert = value;
  });
}

function openCart() {
  if (matchMedia("(min-width:981px)").matches) {
    $("#cart").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    (count() ? $("#checkout") : $("#browse"))
      .focus({ preventScroll: true });

    return;
  }

  lastFocus = document.activeElement;

  $("#cart").classList.add("open");
  $("#cart").setAttribute("role", "dialog");
  $("#cart").setAttribute("aria-modal", "true");

  $("#backdrop").hidden = false;
  document.body.style.overflow = "hidden";

  setInert(true);
  $("#close-cart").focus();
}

function closeCart(restore = true) {
  const wasOpen = $("#cart").classList.contains("open");

  $("#cart").classList.remove("open");
  $("#cart").removeAttribute("role");
  $("#cart").removeAttribute("aria-modal");

  $("#backdrop").hidden = true;
  document.body.style.overflow = "";

  setInert(false);

  if (restore && wasOpen) {
    lastFocus?.focus({ preventScroll: true });
  }
}

function openCheckout() {
  if (!count()) {
    notify("Adicione uma bebida ao carrinho.");
    return;
  }

  closeCart(false);
  $("#checkout-dialog").showModal();
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-change]");

  if (add) {
    const { change: id, delta } = add.dataset;
    const scope = add.closest(".product") || $("#cart-items");
    const scroll = $("#cart-items").scrollTop;

    change(id, Number(delta));

    $("#cart-items").scrollTop = scroll;

    (
      $(`[data-change="${id}"][data-delta="${delta}"]`, scope) ||
      $(".add", scope)
    )?.focus({ preventScroll: true });
  }

  const remove = event.target.closest("[data-remove]");

  if (remove) {
    delete cart[remove.dataset.remove];
    persist();
    renderCart();

    ($("#cart-items button") || $("#browse"))
      .focus({ preventScroll: true });
  }

  const filter = event.target.closest("[data-category]");

  if (filter) {
    category = filter.dataset.category;
    renderCategories();
    renderProducts();

    $(`[data-category="${category}"]`)
      .focus({ preventScroll: true });
  }

  if (event.target.closest("[data-open-cart]")) {
    openCart();
  }
});

let searchTimer;

$("#search").addEventListener("input", () => {
  renderProducts();
  clearTimeout(searchTimer);

  if ($("#search").value.trim()) {
    searchTimer = setTimeout(() => {
      $("#catalogo").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 300);
  }
});

$("#sort").addEventListener("change", renderProducts);

$("#reset").onclick = () => {
  category = "all";
  $("#search").value = "";
  renderCategories();
  renderProducts();
};

$("#clear").onclick = () => {
  cart = {};
  persist();
  renderCart();
  notify("Carrinho esvaziado");
  $("#browse").focus({ preventScroll: true });
};

$("#close-cart").onclick = () => closeCart();
$("#backdrop").onclick = () => closeCart();
$("#browse").onclick = () => closeCart(false);
$("#checkout").onclick = openCheckout;

$("#close-checkout").onclick = () => {
  $("#checkout-dialog").close();
};

document.addEventListener("keydown", event => {
  if (!$("#cart").classList.contains("open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeCart();
  }

  if (event.key === "Tab") {
    const focusable = $$(
      "button:not([disabled]),a[href]",
      $("#cart")
    ).filter(element => element.offsetParent !== null);

    const first = focusable[0];
    const last = focusable.at(-1);

    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

matchMedia("(min-width:981px)")
  .addEventListener("change", () => closeCart(false));

window.addEventListener("storage", event => {
  if (event.key !== KEY) return;

  try {
    cart = validCart(JSON.parse(event.newValue || "{}"));
    renderCart();
  } catch {
    // Ignora conteúdo inválido vindo de outra aba.
  }
});

/* RECEBIMENTO E PAGAMENTO */

function updateReceiving() {
  const delivery = $('[name="mode"]:checked').value === "delivery";
  const later = Boolean($("#address-later").checked);

  $("#address-choice").hidden = !delivery;
  $("#delivery-fields").hidden = !delivery || later;

  $$("input", $("#delivery-fields")).forEach(input => {
    input.disabled = !delivery || later;
  });

  $("#mode-note").textContent = delivery
    ? (
      later
        ? "Você informa o endereço no WhatsApp; a equipe confirma frete e prazo."
        : "A equipe confirma a região, o prazo e a taxa de entrega."
    )
    : "A equipe confirma o local e o melhor horário para retirada.";
}

$$('[name="mode"]').forEach(input => {
  input.addEventListener("change", updateReceiving);
});

$("#address-later").addEventListener("change", updateReceiving);

$("#payment").onchange = () => {
  const cash = $("#payment").value === "Dinheiro";

  $("#change-field").hidden = !cash;

  if (!cash) {
    $('[name="change"]').value = "";
  }
};

$('[name="phone"]').addEventListener("input", event => {
  const number = event.target.value.replace(/\D/g, "").slice(0, 11);

  event.target.value = number.length > 10
    ? number.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
    : number.length > 6
      ? number.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
      : number.length > 2
        ? number.replace(/^(\d{2})(.*)/, "($1) $2")
        : number;
});

/* PEDIDO PELO WHATSAPP */

$("#order-form").addEventListener("submit", event => {
  event.preventDefault();

  if (!count()) {
    notify("Seu carrinho está vazio.");
    return;
  }

  const data = new FormData(event.target);
  const read = key => String(data.get(key) || "").trim();

  const delivery = read("mode") === "delivery";
  const addressLater = delivery && read("addressLater") === "on";

  const requiredFields = [
    "name",
    ...(delivery && !addressLater ? ["address", "district", "city"] : [])
  ];

  for (const key of requiredFields) {
    const field = $(`[name="${key}"]`);

    field.setCustomValidity(
      read(key) ? "" : "Preencha este campo."
    );

    if (!field.reportValidity()) {
      field.addEventListener("input", () => {
        field.setCustomValidity("");
      }, { once: true });

      return;
    }
  }

  const phone = read("phone").replace(/\D/g, "");

  if (phone && (phone.length < 10 || phone.length > 11)) {
    const field = $('[name="phone"]');

    field.setCustomValidity("Informe seu WhatsApp com DDD.");
    field.reportValidity();

    field.addEventListener("input", () => {
      field.setCustomValidity("");
    }, { once: true });

    return;
  }

  const lines = [
    "Olá, Mercado Souza! Gostaria de fazer um pedido.",
    "",
    "*MEU PEDIDO*",

    ...entries().map(([id, quantity]) => {
      const product = byId.get(id);

      return (
        `${quantity} × ${product.name} (${product.detail})` +
        ` — ${money(product.price * quantity)}`
      );
    }),

    "",
    `*Subtotal dos produtos: ${money(total())}*`,
    "Preços anunciados pelo Mercado Souza. Disponibilidade e condições a confirmar.",
    "",
    "*RECEBIMENTO*",
    delivery ? "Entrega em casa" : "Retirada na loja",
    `Nome: ${read("name")}`,
    `WhatsApp: ${read("phone") || "Este número da conversa"}`
  ];

  if (delivery && addressLater) {
    lines.push(
      "Endereço: vou informar nesta conversa.",
      "Frete e prazo: a confirmar."
    );
  } else if (delivery) {
    lines.push(
      `Endereço: ${read("address")}`,
      `Bairro: ${read("district")}`,
      `Cidade: ${read("city")}`
    );

    if (read("reference")) {
      lines.push(`Complemento/referência: ${read("reference")}`);
    }

    lines.push("Frete e prazo: a confirmar.");
  } else {
    lines.push("Por favor, confirme o endereço e horário da retirada.");
  }

  lines.push("", `Pagamento desejado: ${read("payment")}`);

  if (read("payment") === "Dinheiro" && read("change")) {
    lines.push(`Troco para: ${read("change")}`);
  }

  if (read("notes")) {
    lines.push(`Observações: ${read("notes")}`);
  }

  lines.push(
    "",
    "Declaro ter 18 anos ou mais.",
    "Aguardo a confirmação da loja para concluir o pedido."
  );

  const link = document.createElement("a");

  link.href =
    `https://wa.me/${WHATSAPP}?text=` +
    encodeURIComponent(lines.join("\n"));

  link.target = "_blank";
  link.rel = "noopener noreferrer";

  document.body.append(link);
  link.click();
  link.remove();

  notify("Revise e envie a mensagem no WhatsApp.");
});

$$("[data-wa]").forEach(link => {
  const message =
    "Olá! Vim pelo site do Mercado Souza e gostaria de atendimento.";

  link.href =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
});

/* CAMPANHA PRINCIPAL */

function renderPromoBoard() {
  const main = byId.get("of-combo-jack");

  const packs = [
    {
      id: "of-corona-6",
      title: "Corona Extra",
      badge: "6 UNIDADES",
      photo: "assets/campanhas/corona-pack.png"
    },
    {
      id: "of-heineken-350-12",
      title: "Heineken",
      badge: "12 UNIDADES",
      photo: "assets/campanhas/heineken-pack.png"
    }
  ];

  const addButton = product => `
    <button class="button promo-buy"
            data-change="${product.id}"
            data-delta="1"
            data-open-cart
            aria-label="Adicionar ${esc(product.name)} e abrir carrinho">
      ${icon("plus")}Adicionar ao carrinho
    </button>
  `;

  $("#promo-offer-grid").innerHTML = `
    <article class="combo-main-offer">
      <div class="combo-main-title">
        <span class="promo-tag">COMBO COMPLETO</span>
        <h2>JACK +<br><em>RED BULL.</em></h2>
        <h3>Seu combão completo.</h3>
      </div>

      <div class="combo-main-info">
        <p>
          Jack Daniel’s Blackberry de 1 L<br>
          + 5 latas de Red Bull + 5 gelos
        </p>

        <div class="promo-price">
          <strong>${money(main.price)}</strong>
          <span>${esc(main.unit)}</span>
        </div>

        ${addButton(main)}
      </div>

      <div class="combo-main-photo">
        <img src="assets/campanhas/combo-jack-recorte.png"
             alt="Uma garrafa de Jack Daniel’s Blackberry e cinco latas de Red Bull"
             width="1100"
             height="760"
             fetchpriority="high"
             decoding="async">
      </div>
    </article>

    <div class="combo-side-offers">
      ${packs.map(pack => {
        const product = byId.get(pack.id);

        return `
          <article class="combo-pack">
            <div class="combo-pack-copy">
              <span class="promo-tag">${pack.badge}</span>
              <h2>${pack.title}</h2>
              <p>${esc(product.detail)}</p>

              <div class="promo-price">
                <strong>${money(product.price)}</strong>
                <span>${esc(product.unit)}</span>
              </div>
            </div>

            <img src="${pack.photo}"
                 alt="${esc(product.name)}"
                 width="360"
                 height="300"
                 decoding="async">

            ${addButton(product)}
          </article>
        `;
      }).join("")}
    </div>
  `;
}

/* CAMPANHAS JACK, COPÃO E CHURRASCO */

function renderSignatureCampaigns() {
  const jack = byId.get("of-jack-old7");
  const cup = byId.get("of-copao");
  const coal = byId.get("of-carvao");

  $("#signature-offers").innerHTML = `
    <article class="signature-card signature-jack">
      <div class="signature-visual">
        <span class="signature-label">ESCOLHA SEU SABOR</span>

        <img src="assets/campanhas/jack-tres-sabores-recorte.png"
             alt="Jack Daniel’s Blackberry, Old No. 7 e Apple"
             width="900"
             height="720"
             loading="lazy"
             decoding="async">
      </div>

      <div class="signature-copy">
        <span>JACK DANIEL’S · 1 L</span>
        <h3>Três versões.<br>A sua escolha.</h3>
        <p>Old No. 7, Apple ou Blackberry.</p>

        <strong>
          ${money(jack.price)}
          <small>cada garrafa</small>
        </strong>

        <a class="button signature-cta"
           href="#catalogo"
           data-view-category="spirits">
          Escolher meu Jack ${icon("arrow")}
        </a>
      </div>
    </article>

    <article class="signature-card signature-cup">
      <div class="signature-visual">
        <span class="signature-label">COPÃO SOUZA</span>

        <img src="${PHOTO_MAP[cup.id]}"
             alt="Foto ilustrativa de copão com gelo de coco"
             width="480"
             height="480"
             loading="lazy"
             decoding="async">
      </div>

      <div class="signature-copy">
        <span>JACK + RED BULL + GELO DE COCO</span>
        <h3>O copão que<br>fecha o pedido.</h3>
        <p>Jack Daniel’s, Red Bull e gelo de coco.</p>

        <strong>
          ${money(cup.price)}
          <small>o copão</small>
        </strong>

        <button class="button signature-cta"
                data-change="${cup.id}"
                data-delta="1"
                data-open-cart>
          Quero meu copão ${icon("plus")}
        </button>
      </div>
    </article>

    <article class="signature-card signature-coal">
      <div class="signature-visual">
        <span class="signature-label">PARA O CHURRASCO</span>

        <img src="assets/campanhas/carvao-ilustracao.png"
             alt="Ilustração de embalagem de carvão Funchal"
             width="595"
             height="970"
             loading="lazy"
             decoding="async">

        <small>Ilustração da embalagem</small>
      </div>

      <div class="signature-copy">
        <span>CARVÃO FUNCHAL · 2 KG</span>
        <h3>Vai ter churrasco?<br>Já coloca no pedido.</h3>
        <p>Pacote de 2 kg para completar a compra.</p>

        <strong>
          ${money(coal.price)}
          <small>o pacote</small>
        </strong>

        <button class="button signature-cta"
                data-change="${coal.id}"
                data-delta="1"
                data-open-cart>
          Adicionar carvão ${icon("plus")}
        </button>
      </div>
    </article>
  `;
}

/* HORÁRIOS NO FUSO DE SÃO PAULO */

function startStoreClock() {
  const status = $("#hours-status");
  const message = $("#hours-message");

  const clock = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });

  function updateHours() {
    const parts = Object.fromEntries(
      clock.formatToParts(new Date())
        .map(part => [part.type, part.value])
    );

    const day = [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ].indexOf(parts.weekday);

    const minutes = Number(parts.hour) * 60 + Number(parts.minute);
    const opening = day === 0 ? 7 * 60 : 8 * 60;
    const closing = day === 0 ? 14 * 60 : 20 * 60;

    const isOpen = minutes >= opening && minutes < closing;
    const tomorrowOpening = day === 6 ? "07h" : "08h";

    const nextMessage = isOpen
      ? `Hoje atendemos até ${day === 0 ? "14h" : "20h"}.`
      : minutes < opening
        ? `Abrimos hoje às ${day === 0 ? "07h" : "08h"}.`
        : `Abrimos amanhã às ${tomorrowOpening}.`;

    const label = isOpen ? "Aberto agora" : "Fechado agora";

    status.textContent = label;
    message.textContent = `${nextMessage} Horário de São Paulo.`;

    status.classList.toggle("is-open", isOpen);
    status.classList.toggle("is-closed", !isOpen);

    $$("[data-store-status]").forEach(element => {
      element.textContent = `${label} · ${nextMessage}`;
      element.classList.toggle("is-open", isOpen);
    });
  }

  updateHours();
  setInterval(updateHours, 30000);

  document.addEventListener("visibilitychange", updateHours);
}

/* DESTAQUES DA SEMANA */

function renderWeeklyOffers() {
  const featured = [
    ["of-combo-jack", "COMBÃO JACK"],
    ["of-corona-6", "CORONA · 6 LONG NECKS"],
    ["of-copao", "COPÃO JACK + RED BULL"],
    ["of-brahma-269-15", "BRAHMA · 15 LATAS"]
  ];

  $("#weekly-offers").innerHTML = featured.map(([id, label]) => {
    const product = byId.get(id);

    return `
      <article class="week-card">
        <span class="week-badge">${label}</span>

        <div class="week-picture">
          <img src="${PHOTO_MAP[id]}"
               alt="${esc(product.name)}"
               loading="lazy"
               decoding="async">
        </div>

        <div class="week-body">
          <h3>${esc(product.name)}</h3>
          <p>${esc(product.detail)}</p>

          <div class="week-price">
            <strong>${money(product.price)}</strong>
            <span>${esc(product.unit)}</span>
          </div>

          <button class="week-add"
                  data-change="${id}"
                  data-delta="1"
                  aria-label="Adicionar ${esc(product.name)} ao pedido">
            ${icon("plus")}Adicionar ao pedido
          </button>
        </div>
      </article>
    `;
  }).join("");
}

/* ATALHOS PARA CATEGORIAS */

document.addEventListener("click", event => {
  const link = event.target.closest("[data-view-category]");

  if (!link) return;

  event.preventDefault();

  category = link.dataset.viewCategory;
  $("#search").value = "";

  renderCategories();
  renderProducts();

  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});

/* INICIALIZAÇÃO */

renderCategories();
renderProducts();
renderCart();
renderPromoBoard();
renderSignatureCampaigns();
renderWeeklyOffers();
updateReceiving();
startStoreClock();/* IMAGENS INTEGRADAS POR LINK — COLE NO FINAL DO SCRIPT.JS */

(() => {
  const fotos = {
    blackberry:
      "https://espacoprime.fbitsstatic.net/img/p/jack-daniels-blackberry-licor-de-whiskey-e-amora-1l-73735/259726-1.jpg?h=1300&qs=ignore&v=202605081614&w=1300",

    corona6:
      "https://acdn-us.mitiendanube.com/stores/001/851/216/products/cerveza_corona_6_330-4cf0f2a5e59a7f801416365763293528-640-0.webp",

    heineken12:
      "https://superangeloni.vtexassets.com/arquivos/ids/191952/818976_3_zoom.jpg?v=638066358167930000",

    heineken8:
      "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw736d823e/Produtos/926884-7896045506606-cerveja%20heineken%20lager%20puro%20malte%20269ml%20c%208%20unid.%20-heineken-1.jpg",

    brahma15:
      "https://www.svicente.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw7d30a8c7/Produtos/954861-7891991295284-cerveja%20lata%20nacional%20brahma%20duplo%20malte%2015%20unidades%20-%20269ml-brahma-1.jpg",

    skol15:
      "https://www.paodeacucar.com/img/uploads/1/326/33043326.jpg",

    itaipava350:
      "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dwcdf9dc73/Produtos/12892-7897395020101-cerveja%20itaipava%20lata%20350ml-itaipava-1.jpg",

    itaipava269:
      "https://a-static.mlcdn.com.br/1500x1500/cerveja-itaipava-pilsen-12-unidades-lata-269ml/magazineluiza/238608200/93423e14c82994e0fa4db80008e38ac7.jpg",

    jackold:
      "https://kentstreetcellars.co.nz/cdn/shop/products/jack-daniel_s-old-no.7-tennessee-whiskey-1l_2048x.png?v=1620324431",

    jackapple:
      "https://spiritcdn.spiritshop.com.br/adegaportofino/image/cache/data/up_system/product-52064/-462-1500x1500.jpg",

    ballena:
      "https://cdn.dooca.store/163609/products/51ohplodfzl-ac-sl1500_640x640%2Bfill_ffffff.jpg?v=1736297581&webp=0",

    ballenacoco:
      "https://cdn.b4c.inf.br/storage/acouguebg/original/licor-fino-ballena-750ml-coco-ballena-Ga4p1780406555mPv8.png",

    ballenachoc:
      "https://samsclub.vtexassets.com/arquivos/ids/223312/789872615002_1.jpg?v=639117845047370000",

    gintropical:
      "https://carrefourbr.vtexassets.com/arquivos/ids/189743717/image-2.jpg?v=638796560416970000",

    ginmorangopeach:
      "https://horizons-cdn.hostinger.com/dbd06ebb-2e5d-46b6-9a37-764b3be268a7/38fc3b96849eec1ff628795bdc753e08.webp",

    ginmelancia:
      "https://carrefourbr.vtexassets.com/arquivos/ids/189728116/image-2.jpg?v=638796550676930000",

    vibetropical:
      "https://down-br.img.susercontent.com/file/9f8b2e0aca3757682b21ce89c94c45be",

    vibemelancia:
      "https://gigavc.vtexassets.com/arquivos/ids/169626/69a5dac2a91464fbe3c439a0.jpg?v=639080740662470000",

    vibelimao:
      "https://phygital-files.mercafacil.com/gui-box/uploads/produto/vibe_energy_drink_lima_2lt_e9784a5d-66f1-4bc3-97fb-e8356ef408ed.jpg",

    vibelaranja:
      "https://images.tcdn.com.br/img/img_prod/1199398/energetico_vibe_laranja_tangerina_2l_2011_1_e287c64517e3205eceab98a067a97d07.jpeg",

    vibepessego:
      "https://destro.fbitsstatic.net/img/p/energetico-v-be-pessego-e-morango-garrafa-2l-90200/277198.jpg?h=1000&qs=ignore&v=202504011817&w=1000",

    vibeacai:
      "https://imgprd.martinsatacado.com.br/catalogoimg/603295/02_603295_02.jpg?ims=1500x&v=110620261059",

    coca25:
      "https://andinacocacola.vtexassets.com/arquivos/ids/159024/Referencia-110441_COCA.jpg?v=639094449077230000",

    cocaret:
      "https://assets.ibecom.com.br/ib.item.image.large/l-26af2ae163ac416a82494511477688e1.png",

    tubaina:
      "https://cdn.awsli.com.br/2500x2500/2630/2630355/produto/335928066/657b580d5d7dc44e8c06620b280727bc-7j9ykj88a4.png",

    absolut1:
      "https://dgdistribuidoraguara.com.br/932-large_default/vodka-absolut-garrafa-1000-ml.jpg",

    cirocred:
      "https://cdn11.bigcommerce.com/s-t5ovgcn8tc/images/stencil/1280x1280/products/32094/84994/8002b6703fb29f353b99339526092a11a09ca8a4__31092.1761976241.jpg?c=1&imbypass=on",

    ciroc:
      "https://cdn.auchan.fr/media/A0220171212000351320PRIMARY_0x0/B2CD/",

    dreher:
      "https://carrefourbrfood.vtexassets.com/arquivos/ids/176626571/7896010006360_0--1-.jpg?v=638653739892430000",

    sangueboi:
      "https://static1.efacil.com.br/wcsstore/ExtendedSitesCatalogAssetStore/Imagens/1000/913550_01.jpg",

    cantina:
      "https://www.comercialsouzaatacado.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/0/0/00241701901_5.jpg",

    pergola:
      "https://static.wixstatic.com/media/bc10b0_128ca36474ed436c8ad41c2257686394~mv2.jpg/v1/fill/w_1000%2Ch_1000%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/bc10b0_128ca36474ed436c8ad41c2257686394~mv2.jpg",

    sanguevale:
      "https://robertodistribuidora.com.br/image/cache/catalog/com2_hub/VINHO%20SANGUE%20DO%20VALE-400x400.jpg",

    bob:
      "https://www.comercialsouzaatacado.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/0/5/05332201901_1.jpg",

    chanceler:
      "https://coopsp.vtexassets.com/arquivos/ids/219065/7896072911244.jpg?v=637919549106430000",

    busca:
      "https://acdn-us.mitiendanube.com/stores/001/043/122/products/busca-brisa-uawv3-e4786181e939af1a5a17852648263032-640-0.webp",

    corotewhisky:
      "https://destro.fbitsstatic.net/img/p/coquetel-corote-combo-sabor-combo-whisky-1l-92079/279077.jpg?h=1000&qs=ignore&v=202601081355&w=1000",

    corotegin:
      "https://destro.fbitsstatic.net/img/p/coquetel-corote-combo-sabor-gin-tropical-1l-92076/279074.jpg?h=1000&qs=ignore&v=202601081355&w=1000",

    canelinha:
      "https://acdn-us.mitiendanube.com/stores/001/043/122/products/canelinha_da_rocha_1353_1_54d713b29f48003cce48478127b7d4e8-e0bb093bd55e336c4c17456763360172-1024-1024.webp",

    copao:
      "https://supliutech.nyc3.cdn.digitaloceanspaces.com/catalogoapp-aws/2021-08-02/9dcda3fd-4f89-471f-adfa-6a1e0b370670.jpeg",

    carvao:
      "https://cdn.awsli.com.br/800x800/2201/2201997/produto/133037854/saco2kh01-uu51pnq7f2.png",

    redbull:
      "https://carrefourbr.vtexassets.com/arquivos/ids/116097289/f16978643dc5432dbb76d057100fdf69.jpg?v=638213001284430000"
  };

  /* Liga cada produto à sua imagem online. */

  const produtos = {
    "of-combo-jack": "blackberry",
    "of-corona-6": "corona6",
    "of-heineken-350-12": "heineken12",
    "of-heineken-269-8": "heineken8",
    "of-brahma-269-15": "brahma15",
    "of-skol-269-15": "skol15",
    "of-itaipava-350-12": "itaipava350",
    "of-itaipava-269-12": "itaipava269",

    "of-jack-old7": "jackold",
    "of-jack-apple": "jackapple",
    "of-jack-blackberry": "blackberry",

    "of-ballena-original": "ballena",
    "of-ballena-coco": "ballenacoco",
    "of-ballena-chocolate": "ballenachoc",

    "of-invictus-tropical": "gintropical",
    "of-invictus-morango": "ginmorangopeach",
    "of-invictus-melancia": "ginmelancia",

    "of-vibe-tropical": "vibetropical",
    "of-vibe-melancia": "vibemelancia",
    "of-vibe-limao": "vibelimao",
    "of-vibe-laranja": "vibelaranja",
    "of-vibe-pessego": "vibepessego",
    "of-vibe-acai": "vibeacai",

    "of-coca-25": "coca25",
    "of-coca-retornavel": "cocaret",
    "of-coca-25-6": "coca25",
    "of-tubaina-2-6": "tubaina",

    "of-absolut-1": "absolut1",
    "of-ciroc-red": "cirocred",
    "of-ciroc-original": "ciroc",
    "of-dreher": "dreher",

    "of-sangue-boi": "sangueboi",
    "of-cantina": "cantina",
    "of-pergola": "pergola",
    "of-sangue-vale": "sanguevale",

    "of-bob": "bob",
    "of-chanceler": "chanceler",
    "of-busca": "busca",
    "of-corote-whisky": "corotewhisky",
    "of-corote-gin": "corotegin",
    "of-canelinha": "canelinha",

    "of-copao": "copao",
    "of-carvao": "carvao"
  };

  const antigas = { ...PHOTO_MAP };

  const novas = Object.fromEntries(
    Object.entries(produtos).map(([id, chave]) => [
      id,
      fotos[chave]
    ])
  );

  const caminhos = Object.fromEntries(
    Object.entries(antigas).map(([id, caminho]) => [
      caminho,
      novas[id]
    ])
  );

  Object.assign(caminhos, {
    "assets/campanhas/corona-pack.png": fotos.corona6,
    "assets/campanhas/heineken-pack.png": fotos.heineken12,
    "assets/campanhas/carvao-ilustracao.png": fotos.carvao,
    "assets/campanhas/jack-tres-sabores-recorte.png": fotos.jackold,
    "assets/campanhas/combo-jack-recorte.png": fotos.blackberry,
    "assets/redbull.jpg": fotos.redbull
  });

  /* Atualiza também as próximas renderizações e mudanças de sabor. */

  Object.assign(PHOTO_MAP, novas);

  /* Fundo e enquadramento feitos no código, sem imagens locais. */

  const estilo = document.createElement("style");

  estilo.textContent = `
    .campaign-premium .combo-main-offer,
    .combo-main-offer {
      background-image:
        radial-gradient(
          ellipse at 95% 15%,
          #732da366,
          transparent 50%
        ),
        radial-gradient(
          ellipse at 70% 100%,
          #146d8055,
          transparent 50%
        ),
        linear-gradient(125deg,#04132d,#103654) !important;

      min-width:0;
    }

    .signature-jack .signature-visual {
      background:#fff !important;
    }

    .public-combo {
      display:grid;
      grid-template-columns:.8fr 1.8fr;
      gap:10px;
      align-items:end;

      width:100%;
      height:300px;
      padding:16px;

      background:#fff;
      border:1px solid #e1e8f0;
      border-radius:18px;
      box-shadow:0 12px 40px #0003;
      overflow:hidden;
    }

    .public-unit {
      position:relative;
      height:100%;
      min-width:0;
      overflow:hidden;
      background:#fff;
    }

    .public-unit img {
      position:absolute !important;
      left:50% !important;
      top:0;

      transform:translateX(-50%) !important;

      width:300% !important;
      max-width:none !important;
      height:100% !important;
      max-height:none !important;

      object-fit:contain !important;
      padding:0 !important;
      filter:none !important;
      mix-blend-mode:normal !important;
    }

    .public-cans {
      display:grid;
      grid-template-columns:repeat(5,minmax(0,1fr));
      gap:3px;
      height:160px;
      min-width:0;
    }

    .public-cans .public-unit img {
      width:400% !important;
    }

    .public-trio {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:5px;
      height:100%;
      padding:40px 12px 8px;
      background:#fff;
    }

    .public-trio .public-unit {
      min-height:150px;
    }

    .product,
    .week-card {
      display:flex;
      flex-direction:column;
      min-width:0;
    }

    .product-body,
    .week-body {
      display:flex;
      flex-direction:column;
      flex:1;
    }

    .product .photo,
    .week-picture {
      display:flex;
      align-items:center;
      justify-content:center;

      height:210px;
      min-height:210px;
      flex:0 0 210px;

      overflow:hidden;
      background:#fff;
      padding:16px 14px 32px;
    }

    .product .photo > img,
    .week-picture > img {
      display:block;
      width:100%;
      height:100%;
      object-fit:contain;
    }

    .product .price-row,
    .week-price {
      margin-top:auto;
      padding-top:12px;
    }

    @media(max-width:720px) {
      .public-combo {
        height:230px;
        padding:12px;
        gap:7px;
      }

      .public-cans {
        height:130px;
        gap:2px;
      }

      .public-trio {
        padding:38px 4px 8px;
        gap:2px;
      }

      .product .photo,
      .week-picture {
        height:170px;
        min-height:170px;
        flex-basis:170px;
      }
    }
  `;

  document.head.append(estilo);

  function imagem(url, descricao) {
    return `
      <div class="public-unit">
        <img src="${url}"
             alt="${descricao}"
             referrerpolicy="no-referrer"
             decoding="async">
      </div>
    `;
  }

  function atualizarFotos() {
    /* Substitui as imagens locais já desenhadas na página. */

    document.querySelectorAll("img").forEach(img => {
      const caminho = (img.getAttribute("src") || "")
        .replace(/^\.\//, "");

      const url = caminhos[caminho];

      if (url) {
        img.referrerPolicy = "no-referrer";
        img.src = url;
      }
    });

    /* Monta o combo com uma garrafa e exatamente cinco latas. */

    const combo = document.querySelector(".combo-main-photo");

    if (combo && combo.dataset.fotosIntegradas !== "1") {
      combo.dataset.fotosIntegradas = "1";

      combo.innerHTML = `
        <div class="public-combo">
          ${imagem(
            fotos.blackberry,
            "Jack Daniel’s Blackberry de 1 litro"
          )}

          <div class="public-cans">
            ${Array.from({ length: 5 }, (_, indice) => {
              return imagem(
                fotos.redbull,
                `Red Bull ${indice + 1} de 5`
              );
            }).join("")}
          </div>
        </div>
      `;
    }

    /* Monta a campanha dos três sabores com fotos reais. */

    const trio = document.querySelector(
      ".signature-jack .signature-visual"
    );

    if (trio && trio.dataset.fotosIntegradas !== "1") {
      trio.dataset.fotosIntegradas = "1";

      trio.innerHTML = `
        <span class="signature-label">ESCOLHA SEU SABOR</span>

        <div class="public-trio">
          ${imagem(fotos.blackberry, "Jack Daniel’s Blackberry")}
          ${imagem(fotos.jackold, "Jack Daniel’s Old Nº 7")}
          ${imagem(fotos.jackapple, "Jack Daniel’s Apple")}
        </div>
      `;
    }
  }

  /* Atualiza catálogo, carrinho e ofertas com os links integrados. */

  renderProducts();
  renderCart();

  if (typeof renderWeeklyOffers === "function") {
    renderWeeklyOffers();
  }

  atualizarFotos();

  /* Mantém as imagens integradas após alterações na página. */

  if (typeof MutationObserver !== "undefined") {
    let agendado = false;

    const observador = new MutationObserver(() => {
      if (agendado) return;

      agendado = true;

      queueMicrotask(() => {
        agendado = false;
        atualizarFotos();
      });
    });

    observador.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src"]
    });
  }
})();