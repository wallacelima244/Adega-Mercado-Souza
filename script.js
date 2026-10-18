"use strict";

/* CONFIGURAÇÕES */

const WHATSAPP = "5511992973452";

const IMAGES = {
  heineken:
    "https://images.tcdn.com.br/img/img_prod/1099308/cerveja_heineken_long_neck_330ml_782_2_a5ef9669e349cf3c67b4090eafd5bbce.jpg",

  corona:
    "https://carrefourbr.vtexassets.com/arquivos/ids/189681335/image-1.jpg?v=638796515890430000",

  brahma:
    "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw70801491/Produtos/254142-7891149011001-cerveja%20brahma%20lata%20473ml-brahma-1.jpg",

  skol:
    "https://mercantilatacado.vtexassets.com/arquivos/ids/168472/65391b486a2a15a1bb6c1b71.jpg?v=638338381579570000",

  jack:
    "https://cdn11.bigcommerce.com/s-t5ovgcn8tc/images/stencil/1280x1280/products/30915/82127/f516f88673a5f8096be21e67dae7c8b6922042dd__19843.1755149205.png?c=1&imbypass=on",

  beefeater:
    "https://bretas.vtexassets.com/arquivos/ids/214159/658d8d67fb4c3e70eb7e2753.jpg?v=638393723922970000",

  ballena:
    "https://cdn.dooca.store/163609/products/51ohplodfzl-ac-sl1500_640x640%2Bfill_ffffff.jpg?v=1736297581&webp=0",

  absolut:
    "https://www.nestorliquor.com/cdn/shop/products/F86A8F1F-458E-452D-9CDF-0087EF71001C_1024x1024_982e540a-4625-4f81-9fd1-378fdf91afb2.webp?v=1661613285",

  redbull:
    "https://carrefourbr.vtexassets.com/arquivos/ids/116097289/f16978643dc5432dbb76d057100fdf69.jpg?v=638213001284430000",

  monster:
    "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/23138/large/energetico-monster-energy-473ml_125932.jpg",

  tnt:
    "https://assets.ibecom.com.br/ib.item.image.large/l-5106964800274a48a9b075944d557303.jpeg",

  coca:
    "https://i3-imagens-prd.araujo.com.br/webp/8591/07894900027013_4.webp"
};

const CATEGORIES = [
  ["all", "Todas as bebidas"],
  ["beer", "Cervejas"],
  ["gin", "Gin"],
  ["spirits", "Destilados"],
  ["liqueurs", "Licores"],
  ["energy", "Energéticos"],
  ["soft", "Sem álcool"],
  ["combos", "Combos"]
];

/*
  Preços demonstrativos em centavos.
  799 = R$ 7,99
  12990 = R$ 129,90
*/

const PRODUCTS = [
  {
    id: "heineken",
    name: "Heineken",
    detail: "Long neck · 330 ml",
    category: "beer",
    price: 799,
    image: "heineken"
  },
  {
    id: "corona",
    name: "Corona Extra",
    detail: "Long neck · 330 ml",
    category: "beer",
    price: 799,
    image: "corona"
  },
  {
    id: "brahma",
    name: "Brahma Chopp",
    detail: "Latão · 473 ml",
    category: "beer",
    price: 599,
    image: "brahma"
  },
  {
    id: "skol",
    name: "Skol Pilsen",
    detail: "Latão · 473 ml",
    category: "beer",
    price: 599,
    image: "skol"
  },
  {
    id: "jack",
    name: "Jack Daniel’s Old Nº 7",
    detail: "Whiskey · 750 ml",
    category: "spirits",
    price: 12990,
    image: "jack"
  },
  {
    id: "beefeater",
    name: "Gin Beefeater London Dry",
    detail: "Gin · 750 ml",
    category: "gin",
    price: 9990,
    image: "beefeater"
  },
  {
    id: "ballena",
    name: "Ballena Morango",
    detail: "Licor de morango com tequila · 750 ml",
    category: "liqueurs",
    price: 14990,
    image: "ballena"
  },
  {
    id: "absolut",
    name: "Absolut Original",
    detail: "Vodka · 750 ml",
    category: "spirits",
    price: 8990,
    image: "absolut"
  },
  {
    id: "redbull",
    name: "Red Bull",
    detail: "Lata · 250 ml",
    category: "energy",
    price: 1199,
    image: "redbull"
  },
  {
    id: "monster",
    name: "Monster Energy Original",
    detail: "Lata · 473 ml",
    category: "energy",
    price: 1299,
    image: "monster"
  },
  {
    id: "tnt",
    name: "TNT Original",
    detail: "Lata · 269 ml",
    category: "energy",
    price: 699,
    image: "tnt"
  },
  {
    id: "coca",
    name: "Coca-Cola Original",
    detail: "Garrafa · 2 litros",
    category: "soft",
    price: 999,
    image: "coca"
  },
  {
    id: "combo-jack-redbull",
    name: "Jack Daniel’s + Red Bull",
    detail: "Jack 750 ml + 4 Red Bulls de 250 ml",
    category: "combos",
    image: "jack",
    secondary: "redbull",
    secondaryLabel: "Red Bull 250 ml",
    pack: "1 garrafa + 4 latas",
    components: [
      ["jack", 1],
      ["redbull", 4]
    ]
  },
  {
    id: "combo-gin-tnt",
    name: "Gin Beefeater + TNT",
    detail: "Beefeater 750 ml + 4 TNTs de 269 ml",
    category: "combos",
    image: "beefeater",
    secondary: "tnt",
    secondaryLabel: "TNT Original 269 ml",
    pack: "1 garrafa + 4 latas",
    components: [
      ["beefeater", 1],
      ["tnt", 4]
    ]
  },
  {
    id: "combo-heineken",
    name: "Encontro com Heineken",
    detail: "6 long necks · 330 ml cada",
    category: "combos",
    image: "heineken",
    pack: "6 unidades",
    components: [["heineken", 6]]
  },
  {
    id: "combo-corona",
    name: "Brinde com Corona",
    detail: "6 long necks · 330 ml cada",
    category: "combos",
    image: "corona",
    pack: "6 unidades",
    components: [["corona", 6]]
  }
];

/* UTILITÁRIOS */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

const escapeHTML = value =>
  String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));

const money = value =>
  (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const normalize = value =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const icon = name => `
  <svg
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <use href="#i-${name}"/>
  </svg>
`;

const byId = new Map(
  PRODUCTS.map(product => [product.id, product])
);

/* Atualiza o valor dos combos pela soma dos produtos. */

PRODUCTS
  .filter(product => product.components)
  .forEach(product => {
    product.price = product.components.reduce(
      (sum, [id, quantity]) =>
        sum + byId.get(id).price * quantity,
      0
    );
  });

const STORAGE_KEY = "mercado-souza-cart-v1";

let cart = {};
let category = "all";
let toastTimer;
let lastDrawerFocus;

function validateCart(raw) {
  const result = {};

  if (
    raw &&
    typeof raw === "object" &&
    !Array.isArray(raw)
  ) {
    Object.entries(raw).forEach(([id, quantity]) => {
      if (
        byId.has(id) &&
        Number.isInteger(quantity) &&
        quantity > 0 &&
        quantity <= 99
      ) {
        result[id] = quantity;
      }
    });
  }

  return result;
}

try {
  cart = validateCart(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
  );
} catch {
  cart = {};
}

const entries = () => Object.entries(cart);

const total = () =>
  entries().reduce(
    (sum, [id, quantity]) =>
      sum + byId.get(id).price * quantity,
    0
  );

const count = () =>
  entries().reduce(
    (sum, [, quantity]) => sum + quantity,
    0
  );

function persistCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // O carrinho continua funcionando se o armazenamento for bloqueado.
  }
}

function notify(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    $("#toast").classList.remove("show");
  }, 2300);
}

/* CATÁLOGO */

function quantityControls(product, compact = false) {
  const quantity = cart[product.id] || 0;

  if (!quantity) {
    return `
      <button
        class="add"
        data-change="${product.id}"
        data-delta="1"
        aria-label="Adicionar ${escapeHTML(product.name)}"
      >
        ${icon("plus")}
        Adicionar
      </button>
    `;
  }

  return `
    <div class="stepper">
      <button
        data-change="${product.id}"
        data-delta="-1"
        aria-label="Diminuir ${escapeHTML(product.name)}"
      >
        ${icon("minus")}
      </button>

      <span>${quantity}${compact ? "" : " no carrinho"}</span>

      <button
        data-change="${product.id}"
        data-delta="1"
        aria-label="Aumentar ${escapeHTML(product.name)}"
        ${quantity >= 99 ? "disabled" : ""}
      >
        ${icon("plus")}
      </button>
    </div>
  `;
}

function renderCategories() {
  $("#categories").innerHTML = CATEGORIES
    .map(([id, label]) => `
      <button
        class="category ${category === id ? "active" : ""}"
        aria-pressed="${category === id}"
        data-category="${id}"
      >
        ${label}
      </button>
    `)
    .join("");
}

function renderProducts() {
  const query = normalize($("#search").value.trim());

  let products = PRODUCTS.filter(product => {
    const categoryLabel = CATEGORIES.find(
      item => item[0] === product.category
    )[1];

    const matchesCategory =
      category === "all" ||
      product.category === category;

    const matchesSearch = normalize(
      `${product.name} ${product.detail} ${categoryLabel}`
    ).includes(query);

    return matchesCategory && matchesSearch;
  });

  switch ($("#sort").value) {
    case "low":
      products.sort((a, b) => a.price - b.price);
      break;

    case "high":
      products.sort((a, b) => b.price - a.price);
      break;

    case "name":
      products.sort((a, b) =>
        a.name.localeCompare(b.name, "pt-BR")
      );
      break;
  }

  $("#result-count").textContent =
    `${products.length} opções para seu momento`;

  $("#no-results").hidden = products.length > 0;

  $("#products").innerHTML = products.map(product => {
    const categoryLabel = CATEGORIES.find(
      item => item[0] === product.category
    )[1];

    return `
      <article class="product" data-product="${product.id}">
        <div class="photo ${product.secondary ? "duo" : ""}">
          ${
            product.pack
              ? `<span class="pack">${product.pack}</span>`
              : ""
          }

          <img
            src="${IMAGES[product.image]}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
            decoding="async"
            width="180"
            height="180"
          >

          ${
            product.secondary
              ? `
                <img
                  src="${IMAGES[product.secondary]}"
                  alt="${escapeHTML(
                    product.secondaryLabel || product.secondary
                  )}"
                  loading="lazy"
                  decoding="async"
                  width="180"
                  height="180"
                >
              `
              : ""
          }
        </div>

        <div class="product-body">
          <small>${categoryLabel}</small>

          <h3>${escapeHTML(product.name)}</h3>

          <p class="description">
            ${escapeHTML(product.detail)}
          </p>

          <div class="price-row">
            <span class="price">${money(product.price)}</span>
            <span>${product.pack ? "o combo" : "unidade"}</span>
          </div>

          <div class="product-controls">
            ${quantityControls(product)}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* CARRINHO */

function renderCart() {
  const items = entries();

  $$("[data-count]").forEach(element => {
    element.textContent = count();
  });

  $("#empty-cart").hidden = items.length > 0;
  $("#summary").hidden = items.length === 0;

  $("#cart-items").innerHTML = items.map(([id, quantity]) => {
    const product = byId.get(id);

    return `
      <div class="cart-item">
        <img
          src="${IMAGES[product.image]}"
          alt=""
          width="42"
          height="66"
        >

        <div>
          <h3>${escapeHTML(product.name)}</h3>
          <p>${escapeHTML(product.detail)}</p>

          <div class="item-bottom">
            ${quantityControls(product, true)}

            <strong>
              ${money(product.price * quantity)}
            </strong>
          </div>
        </div>

        <button
          class="remove"
          data-remove="${id}"
          aria-label="Remover ${escapeHTML(product.name)}"
        >
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

  $("#review-items").innerHTML = items
    .map(([id, quantity]) => {
      const product = byId.get(id);

      return `
        <div class="review-line">
          <span>
            ${quantity} × ${escapeHTML(product.name)}
          </span>

          <strong>
            ${money(product.price * quantity)}
          </strong>
        </div>
      `;
    })
    .join("");

  $$(".product").forEach(element => {
    const product = byId.get(element.dataset.product);

    $(".product-controls", element).innerHTML =
      quantityControls(product);
  });
}

function changeQuantity(id, delta) {
  if (!byId.has(id)) return;

  const nextQuantity = (cart[id] || 0) + delta;

  if (nextQuantity > 99) {
    notify("Limite de 99 unidades por produto.");
    return;
  }

  if (nextQuantity <= 0) {
    delete cart[id];
  } else {
    cart[id] = nextQuantity;
  }

  persistCart();
  renderCart();

  if (delta > 0) {
    notify(`${byId.get(id).name} adicionado ao carrinho`);
  }
}

function setPageInert(value) {
  $$(
    "header,.top,.nav,.hero,.benefits," +
    ".catalog-heading,.categories,.shop-main,.how," +
    ".footer,.mobile-cart,.floating-whatsapp"
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

    const target = count()
      ? $("#checkout")
      : $("#browse");

    target.focus({ preventScroll: true });
    return;
  }

  lastDrawerFocus = document.activeElement;

  $("#cart").classList.add("open");
  $("#cart").setAttribute("role", "dialog");
  $("#cart").setAttribute("aria-modal", "true");

  $("#backdrop").hidden = false;
  document.body.style.overflow = "hidden";

  setPageInert(true);
  $("#close-cart").focus();
}

function closeCart(restoreFocus = true) {
  const wasOpen = $("#cart").classList.contains("open");

  $("#cart").classList.remove("open");
  $("#cart").removeAttribute("role");
  $("#cart").removeAttribute("aria-modal");

  $("#backdrop").hidden = true;
  document.body.style.overflow = "";

  setPageInert(false);

  if (restoreFocus && wasOpen) {
    lastDrawerFocus?.focus({ preventScroll: true });
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

/* CLIQUES DO CATÁLOGO */

document.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-change]");

  if (quantityButton) {
    const id = quantityButton.dataset.change;
    const delta = quantityButton.dataset.delta;

    const scope =
      quantityButton.closest(".product") ||
      $("#cart-items");

    const scrollPosition = $("#cart-items").scrollTop;

    changeQuantity(id, Number(delta));

    $("#cart-items").scrollTop = scrollPosition;

    const focusTarget =
      $(
        `[data-change="${id}"][data-delta="${delta}"]`,
        scope
      ) ||
      $(".add", scope);

    focusTarget?.focus({ preventScroll: true });
  }

  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    delete cart[removeButton.dataset.remove];

    persistCart();
    renderCart();

    const target =
      $("#cart-items button") ||
      $("#browse");

    target.focus({ preventScroll: true });
  }

  const categoryButton = event.target.closest("[data-category]");

  if (categoryButton) {
    category = categoryButton.dataset.category;

    renderCategories();
    renderProducts();

    $(`[data-category="${category}"]`)
      .focus({ preventScroll: true });
  }

  if (event.target.closest("[data-open-cart]")) {
    openCart();
  }
});

$("#search").addEventListener("input", renderProducts);
$("#sort").addEventListener("change", renderProducts);

$("#reset").addEventListener("click", () => {
  category = "all";
  $("#search").value = "";

  renderCategories();
  renderProducts();
});

$("#clear").addEventListener("click", () => {
  cart = {};

  persistCart();
  renderCart();

  notify("Carrinho esvaziado");
  $("#browse").focus({ preventScroll: true });
});

$("#close-cart").addEventListener("click", () => closeCart());
$("#backdrop").addEventListener("click", () => closeCart());

$("#browse").addEventListener("click", () => {
  closeCart(false);
});

$("#checkout").addEventListener("click", openCheckout);

$("#close-checkout").addEventListener("click", () => {
  $("#checkout-dialog").close();
});

/* FORMULÁRIO */

$$('[name="mode"]').forEach(input => {
  input.addEventListener("change", () => {
    const delivery =
      $('[name="mode"]:checked').value === "delivery";

    $("#delivery-fields").hidden = !delivery;

    $$("input", $("#delivery-fields")).forEach(field => {
      field.disabled = !delivery;
    });

    $("#mode-note").textContent = delivery
      ? "A equipe confirma a região, o prazo e a taxa de entrega."
      : "Combine com a equipe o endereço e o horário da retirada.";
  });
});

$("#payment").addEventListener("change", () => {
  $("#change-field").hidden =
    $("#payment").value !== "Dinheiro";
});

$('[name="phone"]').addEventListener("input", event => {
  const digits = event.target.value
    .replace(/\D/g, "")
    .slice(0, 11);

  if (digits.length > 10) {
    event.target.value = digits.replace(
      /^(\d{2})(\d{5})(\d{0,4})/,
      "($1) $2-$3"
    );
  } else if (digits.length > 6) {
    event.target.value = digits.replace(
      /^(\d{2})(\d{4})(\d{0,4})/,
      "($1) $2-$3"
    );
  } else if (digits.length > 2) {
    event.target.value = digits.replace(
      /^(\d{2})(.*)/,
      "($1) $2"
    );
  } else {
    event.target.value = digits;
  }
});

/* PEDIDO PELO WHATSAPP */

$("#order-form").addEventListener("submit", event => {
  event.preventDefault();

  if (!count()) {
    notify("Seu carrinho está vazio.");
    return;
  }

  const data = new FormData(event.target);

  const read = key =>
    String(data.get(key) || "").trim();

  const delivery = read("mode") === "delivery";

  const requiredFields = [
    "name",
    "phone",
    ...(delivery ? ["address", "district", "city"] : [])
  ];

  for (const key of requiredFields) {
    const field = $(`[name="${key}"]`);

    field.setCustomValidity(
      read(key) ? "" : "Preencha este campo."
    );

    if (!field.reportValidity()) {
      field.addEventListener(
        "input",
        () => field.setCustomValidity(""),
        { once: true }
      );

      return;
    }
  }

  const phoneDigits = read("phone").replace(/\D/g, "");

  if (
    phoneDigits.length < 10 ||
    phoneDigits.length > 11
  ) {
    const field = $('[name="phone"]');

    field.setCustomValidity("Informe seu WhatsApp com DDD.");
    field.reportValidity();

    field.addEventListener(
      "input",
      () => field.setCustomValidity(""),
      { once: true }
    );

    return;
  }

  const lines = [
    "Olá, Mercado Souza! Gostaria de fazer um pedido.",
    "",
    "*MEU PEDIDO*",

    ...entries().map(([id, quantity]) => {
      const product = byId.get(id);

      return (
        `${quantity} × ${product.name} ` +
        `(${product.detail}) — ` +
        money(product.price * quantity)
      );
    }),

    "",
    `*Subtotal dos produtos: ${money(total())}*`,
    "Valores de referência. Por favor, confirme preços e disponibilidade.",
    "",
    "*RECEBIMENTO*",
    delivery ? "Entrega em casa" : "Retirada na loja",
    `Nome: ${read("name")}`,
    `WhatsApp: ${read("phone")}`
  ];

  if (delivery) {
    lines.push(
      `Endereço: ${read("address")}`,
      `Bairro: ${read("district")}`,
      `Cidade: ${read("city")}`
    );

    if (read("reference")) {
      lines.push(
        `Complemento/referência: ${read("reference")}`
      );
    }

    lines.push("Frete e prazo: a confirmar.");
  } else {
    lines.push(
      "Por favor, confirme o endereço e horário da retirada."
    );
  }

  lines.push(
    "",
    `Pagamento desejado: ${read("payment")}`
  );

  if (
    read("payment") === "Dinheiro" &&
    read("change")
  ) {
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

/* TECLADO E ACESSIBILIDADE */

document.addEventListener("keydown", event => {
  if (!$("#cart").classList.contains("open")) {
    return;
  }

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

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  }
});

matchMedia("(min-width:981px)").addEventListener(
  "change",
  () => closeCart(false)
);

window.addEventListener("storage", event => {
  if (event.key !== STORAGE_KEY) {
    return;
  }

  try {
    cart = validateCart(
      JSON.parse(event.newValue || "{}")
    );

    renderCart();
  } catch {
    // Ignora conteúdo inválido de outra aba.
  }
});

/* INICIALIZAÇÃO */

$$("[data-hero]").forEach(image => {
  image.src = IMAGES[image.dataset.hero];
});

$$("[data-wa]").forEach(link => {
  link.href =
    `https://wa.me/${WHATSAPP}?text=` +
    encodeURIComponent(
      "Olá! Vim pelo site do Mercado Souza e gostaria de atendimento."
    );
});

renderCategories();
renderProducts();
renderCart();/* Horários do Mercado Souza */

;(() => {
  const status = document.getElementById("hours-status");
  const message = document.getElementById("hours-message");

  if (!status || !message) return;

  const clock = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });

  function getHours(now = new Date()) {
    const parts = Object.fromEntries(
      clock.formatToParts(now).map(part => [
        part.type,
        part.value
      ])
    );

    const day = [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ].indexOf(parts.weekday);

    const minutes =
      Number(parts.hour) * 60 + Number(parts.minute);

    const opening = day === 0 ? 7 * 60 : 8 * 60;
    const closing = day === 0 ? 14 * 60 : 20 * 60;

    const isOpen =
      minutes >= opening && minutes < closing;

    const tomorrowOpening = day === 6 ? "07h" : "08h";

    let nextMessage;

    if (isOpen) {
      nextMessage =
        `Hoje atendemos até ${day === 0 ? "14h" : "20h"}.`;
    } else if (minutes < opening) {
      nextMessage =
        `Abrimos hoje às ${day === 0 ? "07h" : "08h"}.`;
    } else {
      nextMessage =
        `Abrimos amanhã às ${tomorrowOpening}.`;
    }

    return { isOpen, nextMessage };
  }

  function updateHours() {
    const hours = getHours();

    const label = hours.isOpen
      ? "Aberto agora"
      : "Fechado agora";

    const detail =
      `${hours.nextMessage} Horário de São Paulo.`;

    if (status.textContent !== label) {
      status.textContent = label;
    }

    if (message.textContent !== detail) {
      message.textContent = detail;
    }

    status.classList.toggle("is-open", hours.isOpen);
  }

  updateHours();

  setInterval(updateHours, 30000);

  document.addEventListener(
    "visibilitychange",
    updateHours
  );
})();