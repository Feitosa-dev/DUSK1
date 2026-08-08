import * as pdfjsLib from "./vendor/pdf.min.mjs";

const WHATSAPP_NUMBER = "5527997241008";
const PDF_URL = "assets/catalogo-dusk-drop-02.pdf";
const LEGACY_PDF_URL = "assets/catalogo-dusk-drop-02.pdf";
const DROP1_PDF_URL = "assets/catalogo-dusk-drop-01.pdf";
const DROP1_IMAGE_DIR = "assets/dusk01";
const DROP2_IMAGE_DIR = "assets/dusk02";
const DISCOUNT_COUPONS = new Map([
  ["DUSK10", 0.1],
  ["MARTINS10", 0.1],
]);
const LEGACY_PRODUCT_CROP = {
  x: 0.02,
  y: 0.16,
  width: 0.62,
  height: 0.62,
};

function drop2Pair(number) {
  return {
    frontImageUrl: `${DROP2_IMAGE_DIR}/${number}.webp`,
    backImageUrl: `${DROP2_IMAGE_DIR}/${number}v.webp`,
    crop: { x: 0, y: 0, width: 1, height: 1 },
    removeBackground: false,
  };
}

function drop1Pair(number) {
  return {
    frontImageUrl: `${DROP1_IMAGE_DIR}/mckp${number}.webp`,
    backImageUrl: `${DROP1_IMAGE_DIR}/mckp${number}v.webp`,
    crop: { x: 0, y: 0, width: 1, height: 1 },
    removeBackground: false,
  };
}

const productImageSources = [
  {
    Preto: drop2Pair(7),
    Verde: drop2Pair(8),
  },
  {
    Preto: drop2Pair(9),
    Verde: drop2Pair(10),
  },
  {
    Preto: drop2Pair(11),
    Verde: drop2Pair(12),
  },
  {
    "Off-white": drop2Pair(13),
    Preto: drop2Pair(14),
  },
  {
    Azul: drop2Pair(16),
    "Off-white": drop2Pair(15),
  },
  {
    Azul: drop2Pair(18),
    "Off-white": drop2Pair(17),
  },
  {
    Preto: drop2Pair(1),
    Branco: drop2Pair(2),
    Verde: drop2Pair(3),
  },
  {
    Preto: drop2Pair(4),
    Branco: drop2Pair(5),
    Verde: drop2Pair(6),
  },
  {
    Preto: drop2Pair(19),
    Branco: drop2Pair(20),
    Verde: drop2Pair(21),
  },
  {
    Preto: drop2Pair(22),
    Branco: drop2Pair(23),
    Verde: drop2Pair(24),
  },
  {
    Preto: drop1Pair(1),
    Off: drop1Pair(2),
  },
  {
    Preto: drop1Pair(3),
    Branco: drop1Pair(4),
  },
  {
    Preto: drop1Pair(5),
    Branco: drop1Pair(6),
    Verde: drop1Pair(13),
  },
  {
    Preto: drop1Pair(7),
    Branco: drop1Pair(8),
  },
  {
    Preto: drop1Pair(9),
    Branco: drop1Pair(10),
  },
  {
    Preto: drop1Pair(11),
    Branco: drop1Pair(12),
  },
  {
    Off: drop1Pair(14),
    Verde: drop1Pair(15),
  },
  {
    Off: drop1Pair(16),
    Verde: drop1Pair(17),
  },
  {
    Off: drop1Pair(18),
  },
];

const productCopy = [
  {
    name: "Dinastia",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized 100% algodão premium com estampa em alta definição.",
    price: "R$ 170,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Verde", value: "#25452a" },
    ],
  },
  {
    name: "A Última Matilha",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized 100% algodão premium com arte frontal e costas.",
    price: "R$ 170,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Verde", value: "#25452a" },
    ],
  },
  {
    name: "Reino em Chamas",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized com acabamento gola canelada reforçada.",
    price: "R$ 170,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Verde", value: "#25452a" },
    ],
  },
  {
    name: "Roxo Infernal",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized em comfort jet com gola canelada reforçada.",
    price: "R$ 140,00",
    colors: [
      { name: "Off-white", value: "#f4f0e3" },
      { name: "Preto", value: "#242224" },
    ],
  },
  {
    name: "Alma Alada",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized em comfort jet com arte nas costas.",
    price: "R$ 140,00",
    colors: [
      { name: "Azul", value: "#11182f" },
      { name: "Off-white", value: "#f4f0e3" },
    ],
  },
  {
    name: "Caos Urbano",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized com estampa silk de alta definição.",
    price: "R$ 140,00",
    colors: [
      { name: "Azul", value: "#11182f" },
      { name: "Off-white", value: "#f4f0e3" },
    ],
  },
  {
    name: "DUSK FC",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized com estética futebol e recortes contrastantes.",
    price: "R$ 190,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Branco", value: "#f8f7ef" },
      { name: "Verde", value: "#25452a" },
    ],
  },
  {
    name: "DUSKSIDE",
    type: "Blusa",
    available: true,
    description: "Camiseta oversized em suedine com recortes laterais.",
    price: "R$ 190,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Branco", value: "#f8f7ef" },
      { name: "Verde", value: "#25452a" },
    ],
  },
  {
    name: "Moletom Duskside",
    type: "Moletom",
    available: true,
    description: "Moletom 3 cabos com gola careca canelada e punhos ajustados.",
    price: "R$ 250,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Branco", value: "#f8f7ef" },
      { name: "Verde", value: "#25452a" },
    ],
  },
  {
    name: "Short Duskside",
    type: "Short",
    available: true,
    description: "Bermuda com recorte e vivo aplicado, feita para uso urbano.",
    price: "R$ 190,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Branco", value: "#f8f7ef" },
      { name: "Verde", value: "#25452a" },
    ],
  },
  {
    name: "Santuário Sombrio",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 170,00",
    colors: [
      { name: "Off", value: "#f4f0e3" },
      { name: "Preto", value: "#242224" },
    ],
  },
  {
    name: "Playground Mental",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 170,00",
    colors: [
      { name: "Branco", value: "#f8f7ef" },
      { name: "Preto", value: "#242224" },
    ],
  },
  {
    name: "Sentinela Sombrio",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 170,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Branco", value: "#f8f7ef" },
      { name: "Verde", value: "#555741" },
    ],
  },
  {
    name: "Expressão Proibida",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 170,00",
    colors: [
      { name: "Branco", value: "#f8f7ef" },
      { name: "Preto", value: "#242224" },
    ],
  },
  {
    name: "Eclipse Azul",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 170,00",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Branco", value: "#f8f7ef" },
    ],
  },
  {
    name: "Smoke Dusk",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 170,00",
    colors: [
      { name: "Branco", value: "#f8f7ef" },
      { name: "Preto", value: "#242224" },
    ],
  },
  {
    name: "Era do Fim",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 130,00",
    colors: [
      { name: "Off", value: "#f4f0e3" },
      { name: "Verde", value: "#555741" },
    ],
  },
  {
    name: "Precisão Silenciosa",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 130,00",
    colors: [
      { name: "Off", value: "#f4f0e3" },
      { name: "Verde", value: "#555741" },
    ],
  },
  {
    name: "Side Eye",
    type: "Blusa",
    collection: "Drop 01",
    available: false,
    description: "Blusa oversized do Drop 1. Esta peça está esgotada no momento.",
    price: "R$ 130,00",
    colors: [
      { name: "Off", value: "#f4f0e3" },
    ],
  },
];

const sizes = ["PP", "P", "M", "G", "GG", "G1"];
const MOBILE_PRODUCT_GALLERY_QUERY = "(max-width: 600px)";

pdfjsLib.GlobalWorkerOptions.workerSrc = "./vendor/pdf.worker.min.mjs";

const elements = {
  welcomeScreen: document.querySelector("#boas-vindas"),
  enterStoreButton: document.querySelector("#enterStoreButton"),
  heroCanvas: document.querySelector("#heroCanvas"),
  productCanvas: document.querySelector("#productCanvas"),
  mobileProductGallery: document.querySelector("#mobileProductGallery"),
  mobileGalleryButtons: document.querySelectorAll("[data-mobile-gallery-side]"),
  mobileGalleryCanvases: document.querySelectorAll("[data-mobile-gallery-canvas]"),
  canvasState: document.querySelector("#canvasState"),
  productGrid: document.querySelector("#productGrid"),
  productInspector: document.querySelector("#productInspector"),
  productCount: document.querySelector("#productCount"),
  productName: document.querySelector("#productName"),
  productPrice: document.querySelector("#productPrice"),
  productDescription: document.querySelector("#productDescription"),
  colorOptions: document.querySelector("#colorOptions"),
  sizeOptions: document.querySelector("#sizeOptions"),
  addToCartButton: document.querySelector("#addToCartButton"),
  cartToggle: document.querySelector("#cartToggle"),
  cartClose: document.querySelector("#cartClose"),
  cartAddMore: document.querySelector("#cartAddMore"),
  cartCount: document.querySelector("#cartCount"),
  cartPanel: document.querySelector("#cartPanel"),
  cartItems: document.querySelector("#cartItems"),
  cartWhatsappLink: document.querySelector("#cartWhatsappLink"),
  customerNameInput: document.querySelector("#customerNameInput"),
  couponInput: document.querySelector("#couponInput"),
  deliverySelect: document.querySelector("#deliverySelect"),
  cartSubtotal: document.querySelector("#cartSubtotal"),
  cartDiscountRow: document.querySelector("#cartDiscountRow"),
  cartDiscount: document.querySelector("#cartDiscount"),
  cartTotal: document.querySelector("#cartTotal"),
  whatsappTriggers: document.querySelectorAll("[data-open-whatsapp]"),
  inspectionButtons: document.querySelectorAll("[data-inspect-side]"),
  zoomButtons: document.querySelectorAll("[data-zoom-action]"),
  attendantLink: document.querySelector("#attendantLink"),
  filterToggle: document.querySelector("#filterToggle"),
  filterPanel: document.querySelector("#filterPanel"),
  typeFilter: document.querySelector("#typeFilter"),
  colorFilter: document.querySelector("#colorFilter"),
  sizeFilter: document.querySelector("#sizeFilter"),
  availabilityFilter: document.querySelector("#availabilityFilter"),
  clearFilters: document.querySelector("#clearFilters"),
  filterResults: document.querySelector("#filterResults"),
  collectionLinks: document.querySelectorAll("[data-collection-filter]"),
  collectionLabel: document.querySelector("#collectionLabel"),
  catalogPdfLink: document.querySelector("#catalogPdfLink"),
};

const pdfDocuments = new Map();
let pdfDocument = null;
let activeProduct = 1;
let selectedColor = "";
let selectedSize = "M";
let activeInspectionSide = "both";
let activeMobileGallerySide = "front";
let inspectionZoom = 1;
let inspectionPan = { x: 0, y: 0 };
let isDraggingInspection = false;
let lastDragPoint = { x: 0, y: 0 };
let dragRenderQueued = false;
let renderToken = 0;
let inspectionBaseCanvas = null;
let inspectionBaseKey = "";
const inspectionPointers = new Map();
let pinchStartDistance = 0;
let pinchStartZoom = 1;
let lastPinchCenter = { x: 0, y: 0 };
const cartItems = [];
const filters = {
  collection: "all",
  type: "all",
  color: "all",
  size: "all",
  availability: "all",
};

async function init() {
  bindEvents();

  try {
    pdfDocument = await getPdfDocument(PDF_URL);
    setupFilters();
    buildProductGrid();
    await renderHero();
    await selectProduct(1);
    await renderProductCards();
  } catch (error) {
    console.error(error);
    elements.canvasState.textContent =
      "Não foi possível carregar o PDF. Abra o arquivo pelo link acima.";
    elements.productGrid.innerHTML = "";
    setupFilters();
    buildProductGrid();
    selectFallback(1);
  }
}

function bindEvents() {
  elements.enterStoreButton.addEventListener("click", enterStore);
  elements.addToCartButton.addEventListener("click", addCurrentProductToCart);
  elements.cartToggle.addEventListener("click", () => {
    const shouldOpen = elements.cartPanel.hidden;
    setCartOpen(shouldOpen);
  });
  elements.cartClose.addEventListener("click", () => setCartOpen(false));
  elements.cartAddMore.addEventListener("click", () => {
    setCartOpen(false);
    elements.productGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  elements.attendantLink.href = buildWhatsAppHref("Olá Dusk, tenho uma dúvida ! ");
  elements.customerNameInput.addEventListener("input", updateCart);
  elements.couponInput.addEventListener("input", updateCart);
  elements.deliverySelect.addEventListener("change", updateCart);

  elements.whatsappTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      window.open(
        buildWhatsAppHref("Olá Dusk! Tire uma duvida minha por favor?"),
        "_blank",
        "noopener",
      );
    });
  });

  elements.filterToggle.addEventListener("click", () => {
    const isHidden = elements.filterPanel.hidden;
    elements.filterPanel.hidden = !isHidden;
    elements.filterToggle.setAttribute("aria-expanded", String(isHidden));
  });

  [elements.typeFilter, elements.colorFilter, elements.sizeFilter, elements.availabilityFilter].forEach((select) => {
    select.addEventListener("change", async () => {
      filters.type = elements.typeFilter.value;
      filters.color = elements.colorFilter.value;
      filters.size = elements.sizeFilter.value;
      filters.availability = elements.availabilityFilter.value;
      await refreshFilteredGrid();
    });
  });

  elements.clearFilters.addEventListener("click", async () => {
    filters.type = "all";
    filters.color = "all";
    filters.size = "all";
    filters.availability = "all";
    syncFilterControls();
    await refreshFilteredGrid();
  });

  elements.collectionLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      filters.collection = link.dataset.collectionFilter;
      syncFilterControls();
      await refreshFilteredGrid();
      elements.productGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  elements.inspectionButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      activeInspectionSide = button.dataset.inspectSide;
      inspectionZoom = 1;
      resetInspectionGesture();
      resetInspectionPan();
      updateInspectionButtons();
      updateZoomButtons();
      if (pdfDocument) {
        await renderProductPage(activeProduct);
      }
    });
  });

  elements.zoomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.zoomAction;
      if (action === "in") {
        inspectionZoom = Math.min(2.6, inspectionZoom + 0.35);
      } else if (action === "out") {
        inspectionZoom = Math.max(1, inspectionZoom - 0.35);
        if (inspectionZoom === 1) {
          resetInspectionPan();
        }
      } else {
        inspectionZoom = 1;
        resetInspectionPan();
      }
      updateZoomButtons();
      drawInspectionCanvas();
    });
  });

  elements.mobileGalleryButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const gallerySide = button.dataset.mobileGallerySide;
      activeMobileGallerySide = gallerySide;
      activeInspectionSide = gallerySide === "back" ? "back" : "front";
      inspectionZoom = 1;
      resetInspectionGesture();
      resetInspectionPan();
      updateMobileGalleryButtons(gallerySide);
      updateInspectionButtons();
      updateZoomButtons();
      if (pdfDocument) {
        await renderProductPage(activeProduct);
      }
    });
  });

  elements.productCanvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    inspectionPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    elements.productCanvas.setPointerCapture(event.pointerId);

    if (inspectionPointers.size >= 2) {
      const pointers = getInspectionPointers();
      pinchStartDistance = getPointerDistance(pointers[0], pointers[1]);
      pinchStartZoom = inspectionZoom;
      lastPinchCenter = getPointerCenter(pointers[0], pointers[1]);
      isDraggingInspection = false;
      elements.productCanvas.classList.add("is-dragging");
      return;
    }

    if (inspectionZoom > 1) {
      isDraggingInspection = true;
      lastDragPoint = { x: event.clientX, y: event.clientY };
      elements.productCanvas.classList.add("is-dragging");
    }
  });

  elements.productCanvas.addEventListener("pointermove", (event) => {
    if (!inspectionPointers.has(event.pointerId)) {
      return;
    }

    event.preventDefault();
    inspectionPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (inspectionPointers.size >= 2) {
      const pointers = getInspectionPointers();
      const distance = getPointerDistance(pointers[0], pointers[1]);
      const center = getPointerCenter(pointers[0], pointers[1]);

      if (pinchStartDistance > 0) {
        inspectionZoom = clampNumber(pinchStartZoom * (distance / pinchStartDistance), 1, 2.6);
      }

      if (inspectionZoom <= 1) {
        resetInspectionPan();
      } else {
        moveInspectionPan(center.x - lastPinchCenter.x, center.y - lastPinchCenter.y);
      }

      lastPinchCenter = center;
      updateZoomButtons();
      queueInspectionDraw();
      return;
    }

    if (!isDraggingInspection || inspectionZoom <= 1) {
      return;
    }

    const deltaX = event.clientX - lastDragPoint.x;
    const deltaY = event.clientY - lastDragPoint.y;
    lastDragPoint = { x: event.clientX, y: event.clientY };
    moveInspectionPan(deltaX, deltaY);
    queueInspectionDraw();
  });

  const stopInspectionDrag = (event) => {
    if (event.pointerId !== undefined && elements.productCanvas.hasPointerCapture(event.pointerId)) {
      elements.productCanvas.releasePointerCapture(event.pointerId);
    }

    inspectionPointers.delete(event.pointerId);
    pinchStartDistance = 0;

    if (inspectionPointers.size === 1 && inspectionZoom > 1) {
      const [remainingPointer] = getInspectionPointers();
      isDraggingInspection = true;
      lastDragPoint = { x: remainingPointer.x, y: remainingPointer.y };
      elements.productCanvas.classList.add("is-dragging");
      return;
    }

    isDraggingInspection = false;
    elements.productCanvas.classList.remove("is-dragging");
  };

  elements.productCanvas.addEventListener("pointerup", stopInspectionDrag);
  elements.productCanvas.addEventListener("pointercancel", stopInspectionDrag);

  window.addEventListener("resize", debounce(() => {
    if (pdfDocument) {
      renderProductPage(activeProduct);
      renderProductCards();
      renderHero();
    }
  }, 180));
}

function enterStore() {
  document.body.classList.remove("welcome-locked");
  document.body.classList.add("welcome-entered");
  elements.welcomeScreen.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 40);
}

function buildProductGrid() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    elements.productGrid.innerHTML = `
      <p class="grid-loading">Nenhuma peca encontrada com esses filtros.</p>
    `;
    updateFilterResults(0);
    return;
  }

  const cards = filteredProducts.map((product) => {
    const item = getProduct(product);
    const availabilityLabel = item.available ? item.price : "Esgotado";
    return `
      <button
        class="product-card ${item.available ? "" : "is-unavailable"}"
        type="button"
        aria-selected="${product === activeProduct}"
        data-product="${product}"
      >
        <span class="product-card-media">
          <canvas data-card-canvas="${product}"></canvas>
          ${item.available ? "" : `<span class="product-card-badge">Esgotado</span>`}
        </span>
        <span class="product-card-title">${item.name}</span>
        <strong>${availabilityLabel}</strong>
      </button>
    `;
  }).join("");

  elements.productGrid.innerHTML = cards;

  elements.productGrid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", async () => {
      const product = Number(card.dataset.product);
      if (pdfDocument) {
        await selectProduct(product);
      } else {
        selectFallback(product);
      }
      elements.productInspector.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    card.addEventListener("pointerenter", () => renderProductCardSide(card, "back"));
    card.addEventListener("pointerleave", () => renderProductCardSide(card, "front"));
    card.addEventListener("focus", () => renderProductCardSide(card, "back"));
    card.addEventListener("blur", () => renderProductCardSide(card, "front"));
  });

  updateFilterResults(filteredProducts.length);
}

async function selectProduct(productNumber) {
  activeProduct = productNumber;
  activeMobileGallerySide = "front";
  activeInspectionSide = isMobileProductGalleryLayout() ? "front" : "both";
  inspectionZoom = 1;
  resetInspectionGesture();
  resetInspectionPan();
  updateActiveTab();
  updateInspectionButtons();
  updateZoomButtons();
  updateProductInfo(productNumber);
  await renderProductPage(productNumber);
}

function selectFallback(productNumber) {
  activeProduct = productNumber;
  activeMobileGallerySide = "front";
  activeInspectionSide = isMobileProductGalleryLayout() ? "front" : "both";
  inspectionZoom = 1;
  resetInspectionGesture();
  resetInspectionPan();
  updateActiveTab();
  updateInspectionButtons();
  updateZoomButtons();
  updateProductInfo(productNumber);
}

function updateActiveTab() {
  elements.productGrid.querySelectorAll(".product-card").forEach((card) => {
    card.setAttribute("aria-selected", String(Number(card.dataset.product) === activeProduct));
  });
}

function setupFilters() {
  fillSelect(elements.typeFilter, getUniqueProductTypes(), "Todos");
  fillSelect(elements.colorFilter, getUniqueProductColors(), "Todas");
  fillSelect(elements.sizeFilter, sizes, "Todos");
  syncFilterControls();
  updateFilterResults(getFilteredProducts().length);
}

function fillSelect(select, options, allLabel) {
  select.innerHTML = `
    <option value="all">${allLabel}</option>
    ${options.map((option) => `<option value="${option}">${option}</option>`).join("")}
  `;
}

function syncFilterControls() {
  elements.typeFilter.value = filters.type;
  elements.colorFilter.value = filters.color;
  elements.sizeFilter.value = filters.size;
  elements.availabilityFilter.value = filters.availability;
  const collectionLabels = {
    all: "Vitrine geral DUSK",
    "Drop 01": "Vitrine Reino Oculto",
    "Drop 02": "Vitrine Drop \"O silencio tem nome\"",
  };
  const pdfLinks = {
    all: PDF_URL,
    "Drop 01": DROP1_PDF_URL,
    "Drop 02": PDF_URL,
  };

  elements.collectionLabel.textContent = collectionLabels[filters.collection] ?? collectionLabels.all;
  elements.catalogPdfLink.href = pdfLinks[filters.collection] ?? PDF_URL;
}

async function refreshFilteredGrid() {
  const filteredProducts = getFilteredProducts();
  buildProductGrid();

  if (filteredProducts.length && !filteredProducts.includes(activeProduct)) {
    if (pdfDocument) {
      await selectProduct(filteredProducts[0]);
    } else {
      selectFallback(filteredProducts[0]);
    }
  } else {
    updateActiveTab();
  }

  if (pdfDocument) {
    await renderProductCards();
  }
}

function getFilteredProducts() {
  return productCopy
    .map((_, index) => index + 1)
    .filter((productNumber) => productMatchesFilters(getProduct(productNumber)));
}

function productMatchesFilters(product) {
  const productColors = product.colors.map((color) => color.name);
  const productSizes = getAvailableSizes(product);

  return (
    (filters.collection === "all" || getProductCollection(product) === filters.collection) &&
    (filters.type === "all" || product.type === filters.type) &&
    (filters.color === "all" || productColors.includes(filters.color)) &&
    (filters.size === "all" || productSizes.includes(filters.size)) &&
    (
      filters.availability === "all" ||
      (filters.availability === "available" && product.available) ||
      (filters.availability === "unavailable" && !product.available)
    )
  );
}

function getProductCollection(product) {
  return product.collection ?? "Drop 02";
}

function getUniqueProductTypes() {
  return [...new Set(productCopy.map((product) => product.type))];
}

function getUniqueProductColors() {
  return [...new Set(productCopy.flatMap((product) => product.colors.map((color) => color.name)))];
}

function getAvailableSizes(product) {
  return product.availableSizes ?? sizes;
}

function updateFilterResults(count) {
  elements.filterResults.textContent = `${count} peca${count === 1 ? "" : "s"} encontrada${count === 1 ? "" : "s"}.`;
}

function updateInspectionButtons() {
  elements.inspectionButtons.forEach((button) => {
    const isSelected = button.dataset.inspectSide === activeInspectionSide;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function updateMobileGalleryButtons(activeSide = "front") {
  elements.mobileGalleryButtons.forEach((button) => {
    const isSelected = button.dataset.mobileGallerySide === activeSide;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function updateZoomButtons() {
  elements.zoomButtons.forEach((button) => {
    button.disabled =
      (button.dataset.zoomAction === "out" && inspectionZoom <= 1) ||
      (button.dataset.zoomAction === "in" && inspectionZoom >= 2.6);
    if (button.dataset.zoomAction === "reset") {
      button.textContent = `${inspectionZoom.toFixed(1)}x`;
    }
  });
}

function updateProductInfo(productNumber) {
  const item = getProduct(productNumber);
  const total = getProductCount();
  selectedColor = item.colors[0]?.name ?? "";
  selectedSize = sizes.includes(selectedSize) ? selectedSize : "M";
  elements.productCount.textContent = `Peça ${productNumber} de ${total}`;
  elements.productName.textContent = item.name;
  elements.productPrice.textContent = item.available ? item.price : "Esgotado";
  elements.productDescription.textContent = item.description;
  elements.addToCartButton.disabled = !item.available;
  elements.addToCartButton.textContent = item.available ? "Adicionar ao carrinho" : "Esgotado";
  renderOptions(item);
}

function renderOptions(item) {
  elements.colorOptions.innerHTML = item.colors.map((color, index) => `
    <button
      class="option-button ${index === 0 ? "is-selected" : ""}"
      type="button"
      data-color="${color.name}"
      aria-pressed="${index === 0}"
    >
      <i style="--swatch: ${color.value}"></i>
      ${color.name}
    </button>
  `).join("");

  elements.sizeOptions.innerHTML = sizes.map((size) => `
    <button
      class="option-button ${size === selectedSize ? "is-selected" : ""}"
      type="button"
      data-size="${size}"
      aria-pressed="${size === selectedSize}"
      ${item.available ? "" : "disabled"}
    >
      ${size}
    </button>
  `).join("");

  elements.colorOptions.querySelectorAll("[data-color]").forEach((button) => {
    button.addEventListener("click", async () => {
      selectedColor = button.dataset.color;
      resetInspectionGesture();
      resetInspectionPan();
      updateSelectedButton(elements.colorOptions, button);
      if (pdfDocument) {
        await renderProductPage(activeProduct);
      }
    });
  });

  elements.sizeOptions.querySelectorAll("[data-size]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSize = button.dataset.size;
      updateSelectedButton(elements.sizeOptions, button);
    });
  });
}

function updateSelectedButton(group, selectedButton) {
  group.querySelectorAll(".option-button").forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function addCurrentProductToCart() {
  const item = getProduct(activeProduct);
  if (!item.available) {
    return;
  }

  const color = selectedColor || item.colors[0]?.name || "A confirmar";
  const size = selectedSize || "M";

  cartItems.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    productNumber: activeProduct,
    name: item.name,
    color,
    size,
    price: parsePrice(item.price),
    priceLabel: item.price,
  });

  updateCart();
  setCartOpen(true);
}

function setCartOpen(isOpen) {
  elements.cartPanel.hidden = !isOpen;
  elements.cartToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("cart-drawer-open", isOpen);

  if (isOpen) {
    window.requestAnimationFrame(renderCartItemThumbnails);
  }
}

function removeCartItem(itemId) {
  const index = cartItems.findIndex((item) => item.id === itemId);

  if (index >= 0) {
    cartItems.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  if (!cartItems.length) {
    elements.cartItems.innerHTML = `<p class="cart-empty">Seu carrinho está vazio.</p>`;
  } else {
    elements.cartItems.innerHTML = cartItems.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-media">
          <canvas
            data-cart-thumb="${item.id}"
            aria-label="${item.name} ${item.color}"
          ></canvas>
          <span>${index + 1}</span>
        </div>
        <div class="cart-item-copy">
          <strong>${item.name}</strong>
          <span>${item.name} ${item.color} - ${item.size}</span>
        </div>
        <strong class="cart-item-price">${formatCurrency(item.price)}</strong>
        <button type="button" data-remove-cart="${item.id}" aria-label="Remover ${item.name}">×</button>
      </div>
    `).join("");
  }

  elements.cartItems.querySelectorAll("[data-remove-cart]").forEach((button) => {
    button.addEventListener("click", () => removeCartItem(button.dataset.removeCart));
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = calculateCartDiscount(subtotal);
  const total = Math.max(0, subtotal - discount);
  elements.cartSubtotal.textContent = formatCurrency(subtotal);
  elements.cartDiscount.textContent = `-${formatCurrency(discount)}`;
  elements.cartDiscountRow.hidden = discount <= 0;
  elements.cartTotal.textContent = formatCurrency(total);

  elements.cartWhatsappLink.classList.toggle("is-disabled", !cartItems.length);
  elements.cartWhatsappLink.href = cartItems.length ? buildWhatsAppHref(buildCartMessage(subtotal, discount, total)) : "#";
  elements.cartCount.textContent = String(cartItems.length);

  if (!elements.cartPanel.hidden) {
    window.requestAnimationFrame(renderCartItemThumbnails);
  }
}

async function renderCartItemThumbnails() {
  const canvases = elements.cartItems.querySelectorAll("[data-cart-thumb]");

  for (const canvas of canvases) {
    const cartItem = cartItems.find((item) => item.id === canvas.dataset.cartThumb);
    if (!cartItem) {
      continue;
    }

    const imageSource = getProductImageSource(cartItem.productNumber, cartItem.color);
    if (hasPairedImages(imageSource)) {
      await renderPairedProductImages(imageSource, canvas, {
        side: "front",
      });
    } else if (imageSource.imageUrl) {
      await renderImageCrop(imageSource.imageUrl, canvas, imageSource.crop, {
        removeBackground: shouldRemoveProductBackground(imageSource.color, imageSource),
      });
    } else {
      const sourceDocument = await getPdfDocument(imageSource.pdfUrl);
      await renderPdfCrop(sourceDocument, imageSource.page, canvas, imageSource.crop, {
        removeBackground: shouldRemoveProductBackground(imageSource.color, imageSource),
      });
    }
    canvas.classList.add("is-ready");
  }
}

function calculateCartDiscount(subtotal) {
  const coupon = elements.couponInput.value.trim().toUpperCase();

  if (!coupon) {
    return 0;
  }

  return subtotal * (DISCOUNT_COUPONS.get(coupon) ?? 0);
}

function buildCartMessage(subtotal, discount, total) {
  const customerName = elements.customerNameInput.value.trim() || "A confirmar";
  const coupon = elements.couponInput.value.trim();
  const delivery = elements.deliverySelect.value;
  const productLines = cartItems.map((item, index) => (
    `${index + 1}. ${item.name} - Cor ${item.color} - Tamanho ${item.size} - ${formatCurrency(item.price)}`
  ));
  const details = [
    ...productLines,
    `Entrega: ${delivery}`,
  ];

  if (coupon) {
    details.push(`Cupom: ${coupon}`);
  }

  details.push(`Subtotal: ${formatCurrency(subtotal)}`);

  if (discount > 0) {
    details.push(`Desconto: -${formatCurrency(discount)}`);
  }

  return [
    "_*DUSK COMPANY*_",
    "",
    "🛒 NOVO PEDIDO",
    "",
    `👤 Cliente: ${customerName}`,
    "",
    "📦 Produtos escolhidos:",
    details.join("\n"),
    "",
    `💰 Total do pedido: ${formatCurrency(total)}`,
    "",
    "📲 Gostaria de finalizar minha compra.",
  ].join("\n");
}

function parsePrice(price) {
  return Number(price.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
}

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

async function renderHero() {
  const heroDocument = await getPdfDocument(LEGACY_PDF_URL);
  const targetPage = Math.min(2, heroDocument.numPages);
  await renderPdfPage(heroDocument, targetPage, elements.heroCanvas, {
    mode: "cover",
    maxScale: 2.2,
  });
}

async function renderProductPage(productNumber) {
  const token = ++renderToken;
  const imageSource = getProductImageSource(productNumber);
  const removeBackground = shouldRemoveProductBackground(imageSource.color, imageSource);
  elements.productCanvas.classList.remove("is-ready");
  elements.canvasState.textContent = "Carregando peça...";

  const canvasSize = getInspectionCanvasSize();
  const sideCrop = hasPairedImages(imageSource)
    ? imageSource.crop
    : getInspectionSideCrop(imageSource.crop, activeInspectionSide);
  const nextBaseKey = [
    imageSource.frontImageUrl ?? imageSource.imageUrl ?? imageSource.pdfUrl,
    imageSource.backImageUrl ?? "",
    imageSource.page,
    activeInspectionSide,
    selectedColor,
    removeBackground,
    canvasSize.width,
    canvasSize.height,
    sideCrop.x,
    sideCrop.y,
    sideCrop.width,
    sideCrop.height,
  ].join("|");

  if (!inspectionBaseCanvas || inspectionBaseKey !== nextBaseKey) {
    const nextBaseCanvas = document.createElement("canvas");

    if (hasPairedImages(imageSource)) {
      await renderPairedProductImages(imageSource, nextBaseCanvas, {
        skipStyle: true,
        targetSize: {
          width: canvasSize.width,
          height: canvasSize.height,
        },
        side: activeInspectionSide,
      });
    } else if (imageSource.imageUrl) {
      await renderImageCrop(imageSource.imageUrl, nextBaseCanvas, sideCrop, {
        skipStyle: true,
        targetSize: {
          width: canvasSize.width,
          height: canvasSize.height,
        },
        removeBackground,
      });
    } else {
      const sourceDocument = await getPdfDocument(imageSource.pdfUrl);
      await renderPdfCrop(sourceDocument, imageSource.page, nextBaseCanvas, sideCrop, {
        skipStyle: true,
        targetSize: {
          width: canvasSize.width,
          height: canvasSize.height,
        },
        removeBackground,
      });
    }

    if (token !== renderToken) {
      return;
    }

    inspectionBaseCanvas = nextBaseCanvas;
    inspectionBaseKey = nextBaseKey;
  }

  if (token === renderToken) {
    drawInspectionCanvas(canvasSize);
    elements.productCanvas.classList.add("is-ready");
    elements.canvasState.textContent = "";
    await renderMobileProductGallery(imageSource);
  }
}

async function renderMobileProductGallery(imageSource) {
  if (!elements.mobileGalleryCanvases.length) {
    return;
  }

  const galleryItems = Array.from(elements.mobileGalleryCanvases);
  const sourceMap = getMobileGallerySourceMap(imageSource);

  for (const canvas of galleryItems) {
    const side = canvas.dataset.mobileGalleryCanvas;
    const imageUrl = sourceMap[side];
    canvas.classList.remove("is-ready");

    if (!imageUrl) {
      continue;
    }

    await renderGalleryImage(imageUrl, canvas);
    canvas.classList.add("is-ready");
  }

  updateMobileGalleryButtons(activeMobileGallerySide);
}

function getMobileGallerySourceMap(imageSource) {
  if (hasPairedImages(imageSource)) {
    return {
      front: imageSource.frontImageUrl,
      back: imageSource.backImageUrl,
    };
  }

  return {
    front: imageSource.imageUrl,
    back: imageSource.imageUrl,
  };
}

async function renderProductCards() {
  const canvases = elements.productGrid.querySelectorAll("[data-card-canvas]");

  for (const canvas of canvases) {
    const productNumber = Number(canvas.dataset.cardCanvas);
    const cardColor = getProduct(productNumber).colors[0]?.name;
    const imageSource = getProductImageSource(productNumber, cardColor);
    const cardCrop = hasPairedImages(imageSource)
      ? imageSource.crop
      : getCardFrontCrop(imageSource.crop, getProduct(productNumber));
    canvas.parentElement?.style.setProperty("--card-product-scale", getCardProductScale(getProduct(productNumber)));
    if (hasPairedImages(imageSource)) {
      await renderPairedProductImages(imageSource, canvas, {
        side: "front",
      });
    } else if (imageSource.imageUrl) {
      await renderImageCrop(imageSource.imageUrl, canvas, cardCrop, {
        removeBackground: shouldRemoveProductBackground(imageSource.color, imageSource),
      });
    } else {
      const sourceDocument = await getPdfDocument(imageSource.pdfUrl);
      await renderPdfCrop(sourceDocument, imageSource.page, canvas, cardCrop, {
        removeBackground: shouldRemoveProductBackground(imageSource.color, imageSource),
      });
    }
    if (!hasPairedImages(imageSource)) {
      cleanCardProductCanvas(canvas);
    }
    canvas.classList.add("is-ready");
  }
}

async function renderProductCardSide(card, side) {
  const canvas = card.querySelector("[data-card-canvas]");
  const productNumber = Number(card.dataset.product);
  const cardColor = getProduct(productNumber).colors[0]?.name;
  const imageSource = getProductImageSource(productNumber, cardColor);

  if (!canvas || !hasPairedImages(imageSource)) {
    return;
  }

  canvas.dataset.cardSide = side;
  canvas.classList.remove("is-ready");
  await renderPairedProductImages(imageSource, canvas, { side });

  if (canvas.dataset.cardSide === side) {
    canvas.classList.add("is-ready");
  }
}

function getCardFrontCrop(crop, product) {
  const isBottom = ["Short", "Calça", "Bermuda"].includes(product.type);

  return {
    x: crop.x,
    y: crop.y,
    width: crop.width * (isBottom ? 0.5 : 0.49),
    height: crop.height,
  };
}

function getCardProductScale(product) {
  if (["Short", "Calça", "Bermuda"].includes(product.type)) {
    return "0.9";
  }

  if (product.type === "Moletom") {
    return "0.96";
  }

  return "0.9";
}

function cleanCardProductCanvas(canvas) {
  const context = canvas.getContext("2d", { alpha: true });
  const { width, height } = canvas;
  const image = context.getImageData(0, 0, width, height);
  const { data } = image;
  const background = sampleCardBackground(data, width, height);
  const foreground = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);
  const components = [];

  for (let index = 0; index < foreground.length; index += 1) {
    const pixel = index * 4;
    if (data[pixel + 3] < 24) {
      continue;
    }

    const distance = Math.hypot(
      data[pixel] - background.r,
      data[pixel + 1] - background.g,
      data[pixel + 2] - background.b,
    );

    if (distance > 18) {
      foreground[index] = 1;
    }
  }

  for (let index = 0; index < foreground.length; index += 1) {
    if (!foreground[index] || visited[index]) {
      continue;
    }

    const component = collectCardComponent(index, foreground, visited, width, height);
    if (component.count > 16) {
      components.push(component);
    }
  }

  if (!components.length) {
    return;
  }

  const keep = chooseCardProductComponent(components, width, height);
  const keepMap = new Uint8Array(width * height);

  keep.pixels.forEach((index) => {
    keepMap[index] = 1;
  });

  for (let index = 0; index < foreground.length; index += 1) {
    if (foreground[index] && !keepMap[index]) {
      const pixel = index * 4;
      data[pixel] = background.r;
      data[pixel + 1] = background.g;
      data[pixel + 2] = background.b;
      data[pixel + 3] = 255;
    }
  }

  removeCardSideLabels(data, width, height, background);
  context.putImageData(image, 0, 0);
}

function removeCardSideLabels(data, width, height, background) {
  const darkPixels = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);

  for (let y = 0; y < height; y += 1) {
    for (let x = Math.floor(width * 0.62); x < width; x += 1) {
      const index = y * width + x;
      const pixel = index * 4;
      const red = data[pixel];
      const green = data[pixel + 1];
      const blue = data[pixel + 2];
      const luminance = (red * 0.2126) + (green * 0.7152) + (blue * 0.0722);
      const distance = Math.hypot(red - background.r, green - background.g, blue - background.b);

      if (luminance < 86 && distance > 80) {
        darkPixels[index] = 1;
      }
    }
  }

  for (let index = 0; index < darkPixels.length; index += 1) {
    if (!darkPixels[index] || visited[index]) {
      continue;
    }

    const component = collectCardComponent(index, darkPixels, visited, width, height);
    const boxWidth = component.maxX - component.minX + 1;
    const boxHeight = component.maxY - component.minY + 1;
    const centerX = (component.minX + component.maxX) / 2;
    const centerY = (component.minY + component.maxY) / 2;
    const isLabelLike =
      centerX > width * 0.68 &&
      centerY > height * 0.32 &&
      boxWidth < width * 0.18 &&
      boxHeight < height * 0.34 &&
      component.count < width * height * 0.035;

    if (!isLabelLike) {
      continue;
    }

    component.pixels.forEach((pixelIndex) => {
      const pixel = pixelIndex * 4;
      data[pixel] = background.r;
      data[pixel + 1] = background.g;
      data[pixel + 2] = background.b;
      data[pixel + 3] = 255;
    });
  }
}

function sampleCardBackground(data, width, height) {
  const points = [
    [2, 2],
    [width - 3, 2],
    [2, height - 3],
    [width - 3, height - 3],
    [Math.floor(width / 2), 2],
  ];
  const total = points.reduce((acc, [x, y]) => {
    const pixel = ((Math.max(0, Math.min(height - 1, y)) * width) + Math.max(0, Math.min(width - 1, x))) * 4;
    acc.r += data[pixel];
    acc.g += data[pixel + 1];
    acc.b += data[pixel + 2];
    return acc;
  }, { r: 0, g: 0, b: 0 });

  return {
    r: Math.round(total.r / points.length),
    g: Math.round(total.g / points.length),
    b: Math.round(total.b / points.length),
  };
}

function collectCardComponent(startIndex, foreground, visited, width, height) {
  const stack = [startIndex];
  const pixels = [];
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  visited[startIndex] = 1;

  while (stack.length) {
    const index = stack.pop();
    const x = index % width;
    const y = Math.floor(index / width);

    pixels.push(index);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);

    const neighbors = [
      index - 1,
      index + 1,
      index - width,
      index + width,
    ];

    for (const next of neighbors) {
      if (next < 0 || next >= foreground.length || visited[next] || !foreground[next]) {
        continue;
      }

      const nextX = next % width;
      if (Math.abs(nextX - x) > 1) {
        continue;
      }

      visited[next] = 1;
      stack.push(next);
    }
  }

  return {
    count: pixels.length,
    maxX,
    maxY,
    minX,
    minY,
    pixels,
  };
}

function chooseCardProductComponent(components, width, height) {
  const centerX = width / 2;
  const centerY = height / 2;

  return components
    .map((component) => {
      const componentCenterX = (component.minX + component.maxX) / 2;
      const componentCenterY = (component.minY + component.maxY) / 2;
      const centerDistance = Math.hypot(
        (componentCenterX - centerX) / width,
        (componentCenterY - centerY) / height,
      );

      return {
        component,
        score: component.count - (centerDistance * width * height * 0.08),
      };
    })
    .sort((first, second) => second.score - first.score)[0].component;
}

async function renderPdfPage(sourceDocument, pageNumber, canvas, options) {
  const page = await sourceDocument.getPage(pageNumber);
  const parent = canvas.parentElement;
  const parentRect = parent.getBoundingClientRect();
  const baseViewport = page.getViewport({ scale: 1 });
  const pixelRatio = Math.min(window.devicePixelRatio || 1, options.maxScale);

  const widthScale = parentRect.width / baseViewport.width;
  const heightScale = parentRect.height / baseViewport.height;
  const fitScale = options.mode === "cover"
    ? Math.max(widthScale, heightScale)
    : Math.min(widthScale, heightScale);
  const viewport = page.getViewport({ scale: Math.max(fitScale, 0.1) * pixelRatio });

  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  canvas.style.width = `${viewport.width / pixelRatio}px`;
  canvas.style.height = `${viewport.height / pixelRatio}px`;

  const context = canvas.getContext("2d", { alpha: true });
  context.clearRect(0, 0, canvas.width, canvas.height);
  await page.render({
    canvasContext: context,
    viewport,
    background: "rgba(0, 0, 0, 0)",
  }).promise;
}

async function renderImageCrop(imageUrl, canvas, crop, options = {}) {
  canvas.classList.toggle("is-blended", !options.removeBackground);
  const image = await loadImage(imageUrl);
  const parent = canvas.parentElement;
  const parentRect = parent?.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const targetWidth = options.targetSize?.width ?? Math.max(1, Math.floor(parentRect.width * pixelRatio));
  const targetHeight = options.targetSize?.height ?? Math.max(1, Math.floor(parentRect.height * pixelRatio));
  const cropAspect = (crop.width * image.naturalWidth) / (crop.height * image.naturalHeight);

  let drawWidth = targetWidth;
  let drawHeight = drawWidth / cropAspect;

  if (drawHeight > targetHeight) {
    drawHeight = targetHeight;
    drawWidth = drawHeight * cropAspect;
  }

  canvas.width = targetWidth;
  canvas.height = targetHeight;
  if (!options.skipStyle) {
    canvas.style.width = `${targetWidth / pixelRatio}px`;
    canvas.style.height = `${targetHeight / pixelRatio}px`;
  }

  const context = canvas.getContext("2d", { alpha: true });
  context.clearRect(0, 0, targetWidth, targetHeight);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(
    image,
    crop.x * image.naturalWidth,
    crop.y * image.naturalHeight,
    crop.width * image.naturalWidth,
    crop.height * image.naturalHeight,
    (targetWidth - drawWidth) / 2,
    (targetHeight - drawHeight) / 2,
    drawWidth,
    drawHeight,
  );

  if (options.removeBackground) {
    removePaperBackground(context, targetWidth, targetHeight, {
      cleanEdgeArtifacts: options.cleanEdgeArtifacts ?? false,
    });
  }
}

function hasPairedImages(imageSource = {}) {
  return Boolean(imageSource.frontImageUrl && imageSource.backImageUrl);
}

async function renderPairedProductImages(imageSource, canvas, options = {}) {
  canvas.classList.add("is-blended");
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const parent = canvas.parentElement;
  const parentRect = parent?.getBoundingClientRect();
  const targetWidth = options.targetSize?.width ?? Math.max(1, Math.floor((parentRect?.width || 320) * pixelRatio));
  const targetHeight = options.targetSize?.height ?? Math.max(1, Math.floor((parentRect?.height || 320) * pixelRatio));
  const context = canvas.getContext("2d", { alpha: true });
  const frontImage = await loadImage(imageSource.frontImageUrl);
  const backImage = await loadImage(imageSource.backImageUrl);

  canvas.width = targetWidth;
  canvas.height = targetHeight;
  if (!options.skipStyle) {
    canvas.style.width = `${targetWidth / pixelRatio}px`;
    canvas.style.height = `${targetHeight / pixelRatio}px`;
  }

  context.clearRect(0, 0, targetWidth, targetHeight);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  if (options.side === "front") {
    drawImageContain(context, frontImage, 0, 0, targetWidth, targetHeight);
    return;
  }

  if (options.side === "back") {
    drawImageContain(context, backImage, 0, 0, targetWidth, targetHeight);
    return;
  }

  const gap = targetWidth * 0.035;
  const slotWidth = (targetWidth - gap) / 2;
  const squareSize = Math.min(slotWidth, targetHeight * 0.86);
  const top = (targetHeight - squareSize) / 2;
  const leftFront = (slotWidth - squareSize) / 2;
  const leftBack = slotWidth + gap + ((slotWidth - squareSize) / 2);

  drawProductDisplaySlot(context, frontImage, leftFront, top, squareSize);
  drawProductDisplaySlot(context, backImage, leftBack, top, squareSize);
}

async function renderGalleryImage(imageUrl, canvas, options = {}) {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const parent = canvas.parentElement;
  const targetRect = options.main ? canvas.getBoundingClientRect() : parent?.getBoundingClientRect();
  const targetWidth = Math.max(1, Math.floor((targetRect?.width || 120) * pixelRatio));
  const targetHeight = Math.max(1, Math.floor((targetRect?.height || 120) * pixelRatio));
  const context = canvas.getContext("2d", { alpha: true });
  const image = await loadImage(imageUrl);

  canvas.width = targetWidth;
  canvas.height = targetHeight;
  canvas.style.width = `${targetWidth / pixelRatio}px`;
  canvas.style.height = `${targetHeight / pixelRatio}px`;

  context.clearRect(0, 0, targetWidth, targetHeight);
  context.fillStyle = options.main ? "#ffffff" : "#f4f2ed";
  context.fillRect(0, 0, targetWidth, targetHeight);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  const padding = targetWidth * (options.main ? 0.13 : 0.08);
  drawImageContain(
    context,
    image,
    padding,
    padding * (options.main ? 0.75 : 0.6),
    targetWidth - (padding * 2),
    targetHeight - (padding * (options.main ? 1.5 : 1.2)),
  );
}

function drawImageContain(context, image, x, y, width, height) {
  const imageAspect = image.naturalWidth / image.naturalHeight;
  const boxAspect = width / height;
  let drawWidth = width;
  let drawHeight = height;

  if (imageAspect > boxAspect) {
    drawHeight = width / imageAspect;
  } else {
    drawWidth = height * imageAspect;
  }

  context.drawImage(
    image,
    x + ((width - drawWidth) / 2),
    y + ((height - drawHeight) / 2),
    drawWidth,
    drawHeight,
  );
}

function drawProductDisplaySlot(context, image, x, y, size) {
  const padding = size * 0.075;
  context.fillStyle = "#dedede";
  context.fillRect(x, y, size, size);
  drawImageContain(context, image, x + padding, y + padding, size - (padding * 2), size - (padding * 2));
}

async function renderPdfCrop(sourceDocument, pageNumber, canvas, crop, options = {}) {
  canvas.classList.toggle("is-blended", !options.removeBackground);
  const activeCrop = options.cropOverride ?? crop;
  const page = await sourceDocument.getPage(pageNumber);
  const parent = canvas.parentElement;
  const parentRect = parent?.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const baseViewport = page.getViewport({ scale: 1 });
  const targetWidth = options.targetSize?.width ?? Math.max(1, Math.floor(parentRect.width * pixelRatio));
  const targetHeight = options.targetSize?.height ?? Math.max(1, Math.floor(parentRect.height * pixelRatio));
  const cropAspect = (activeCrop.width * baseViewport.width) / (activeCrop.height * baseViewport.height);

  let drawWidth = targetWidth;
  let drawHeight = drawWidth / cropAspect;

  if (drawHeight > targetHeight) {
    drawHeight = targetHeight;
    drawWidth = drawHeight * cropAspect;
  }

  const renderScale = drawWidth / (activeCrop.width * baseViewport.width);
  const viewport = page.getViewport({ scale: renderScale });
  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = Math.ceil(viewport.width);
  sourceCanvas.height = Math.ceil(viewport.height);

  const sourceContext = sourceCanvas.getContext("2d", { alpha: true });
  sourceContext.clearRect(0, 0, sourceCanvas.width, sourceCanvas.height);
  await page.render({
    canvasContext: sourceContext,
    viewport,
    background: "rgba(0, 0, 0, 0)",
  }).promise;

  canvas.width = targetWidth;
  canvas.height = targetHeight;
  if (!options.skipStyle) {
    canvas.style.width = `${targetWidth / pixelRatio}px`;
    canvas.style.height = `${targetHeight / pixelRatio}px`;
  }

  const context = canvas.getContext("2d", { alpha: true });
  context.clearRect(0, 0, targetWidth, targetHeight);

  const sourceX = activeCrop.x * sourceCanvas.width;
  const sourceY = activeCrop.y * sourceCanvas.height;
  const sourceWidth = activeCrop.width * sourceCanvas.width;
  const sourceHeight = activeCrop.height * sourceCanvas.height;
  const drawX = (targetWidth - drawWidth) / 2;
  const drawY = (targetHeight - drawHeight) / 2;

  context.drawImage(
    sourceCanvas,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    drawX,
    drawY,
    drawWidth,
    drawHeight,
  );

  if (options.removeBackground) {
    removePaperBackground(context, targetWidth, targetHeight, {
      cleanEdgeArtifacts: options.cleanEdgeArtifacts ?? true,
    });
  }
}

function buildWhatsAppHref(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getProduct(productNumber) {
  if (productCopy[productNumber - 1]) {
    return productCopy[productNumber - 1];
  }

  return {
    name: `Peça ${String(productNumber).padStart(2, "0")}`,
    price: "R$ 0,00",
    description:
      "Camiseta oversized do Drop 02 com cores disponíveis para consulta no WhatsApp.",
    colors: [
      { name: "Preto", value: "#242224" },
      { name: "Verde", value: "#25452a" },
    ],
  };
}

function getProductCount() {
  return productCopy.length;
}

function getProductImageSource(productNumber, colorName = selectedColor) {
  const variants = productImageSources[productNumber - 1];
  const product = getProduct(productNumber);
  const fallbackColor = product.colors[0]?.name;
  const color = colorName || fallbackColor;
  const source = variants?.[color] ?? variants?.[fallbackColor] ?? Object.values(variants ?? {})[0];

  return {
    ...(
      source ?? {
    pdfUrl: LEGACY_PDF_URL,
    page: 3,
    crop: LEGACY_PRODUCT_CROP,
      }
    ),
    color,
  };
}

function shouldRemoveProductBackground(colorName, imageSource = {}) {
  if (typeof imageSource.removeBackground === "boolean") {
    return imageSource.removeBackground;
  }

  return false;
}

function getInspectionSideCrop(crop, side) {
  if (side === "front") {
    return {
      x: crop.x,
      y: crop.y + (crop.height * 0.02),
      width: crop.width * 0.49,
      height: crop.height * 0.96,
    };
  }

  if (side === "back") {
    return {
      x: crop.x + (crop.width * 0.51),
      y: crop.y + (crop.height * 0.02),
      width: crop.width * 0.49,
      height: crop.height * 0.96,
    };
  }

  return crop;
}

function resetInspectionPan() {
  inspectionPan = { x: 0, y: 0 };
}

function resetInspectionGesture() {
  inspectionPointers.clear();
  pinchStartDistance = 0;
  isDraggingInspection = false;
  elements.productCanvas.classList.remove("is-dragging");
}

function moveInspectionPan(deltaX, deltaY) {
  const rect = elements.productCanvas.getBoundingClientRect();

  inspectionPan = {
    x: clampNumber(inspectionPan.x - ((deltaX / Math.max(rect.width, 1)) * 2.2), -1, 1),
    y: clampNumber(inspectionPan.y - ((deltaY / Math.max(rect.height, 1)) * 2.2), -1, 1),
  };
}

function getInspectionPointers() {
  return Array.from(inspectionPointers.values());
}

function getPointerDistance(firstPointer, secondPointer) {
  return Math.hypot(firstPointer.x - secondPointer.x, firstPointer.y - secondPointer.y);
}

function getPointerCenter(firstPointer, secondPointer) {
  return {
    x: (firstPointer.x + secondPointer.x) / 2,
    y: (firstPointer.y + secondPointer.y) / 2,
  };
}

function drawInspectionCanvas(size = getInspectionCanvasSize()) {
  if (!inspectionBaseCanvas) {
    return;
  }

  const canvas = elements.productCanvas;
  const context = canvas.getContext("2d", { alpha: true });
  const sourceWidth = inspectionBaseCanvas.width / inspectionZoom;
  const sourceHeight = inspectionBaseCanvas.height / inspectionZoom;
  const maxSourceX = Math.max(0, inspectionBaseCanvas.width - sourceWidth);
  const maxSourceY = Math.max(0, inspectionBaseCanvas.height - sourceHeight);
  const sourceX = clampNumber((maxSourceX / 2) + (inspectionPan.x * maxSourceX / 2), 0, maxSourceX);
  const sourceY = clampNumber((maxSourceY / 2) + (inspectionPan.y * maxSourceY / 2), 0, maxSourceY);

  if (canvas.width !== size.width) {
    canvas.width = size.width;
  }
  if (canvas.height !== size.height) {
    canvas.height = size.height;
  }
  canvas.style.width = `${size.cssWidth}px`;
  canvas.style.height = `${size.cssHeight}px`;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(
    inspectionBaseCanvas,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    canvas.width,
    canvas.height,
  );
}

function getInspectionCanvasSize() {
  const parentRect = isMobileProductGalleryLayout()
    ? elements.productCanvas.getBoundingClientRect()
    : elements.productCanvas.parentElement.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

  return {
    width: Math.max(1, Math.floor(parentRect.width * pixelRatio)),
    height: Math.max(1, Math.floor(parentRect.height * pixelRatio)),
    cssWidth: parentRect.width,
    cssHeight: parentRect.height,
  };
}

function queueInspectionDraw() {
  if (dragRenderQueued) {
    return;
  }

  dragRenderQueued = true;
  window.requestAnimationFrame(() => {
    dragRenderQueued = false;
    drawInspectionCanvas();
  });
}

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

async function getPdfDocument(pdfUrl) {
  if (!pdfDocuments.has(pdfUrl)) {
    pdfDocuments.set(pdfUrl, pdfjsLib.getDocument(pdfUrl).promise);
  }

  return pdfDocuments.get(pdfUrl);
}

function loadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = imageUrl;
  });
}

function isMobileProductGalleryLayout() {
  return window.matchMedia(MOBILE_PRODUCT_GALLERY_QUERY).matches;
}

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), delay);
  };
}

function removePaperBackground(context, width, height, options = {}) {
  const image = context.getImageData(0, 0, width, height);
  const { data } = image;
  const visited = new Uint8Array(width * height);
  const queue = [];
  const background = sampleBackground(data, width, height);

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return;
    }

    const index = y * width + x;
    if (visited[index]) {
      return;
    }

    visited[index] = 1;
    const pixel = index * 4;

    if (isPaperPixel(data, pixel, background)) {
      data[pixel + 3] = 0;
      queue.push([x, y]);
    }
  };

  for (let x = 0; x < width; x += 1) {
    push(x, 0);
    push(x, height - 1);
  }

  for (let y = 0; y < height; y += 1) {
    push(0, y);
    push(width - 1, y);
  }

  while (queue.length) {
    const [x, y] = queue.shift();
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  if (options.cleanEdgeArtifacts) {
    removeLightEdgeArtifacts(data, width, height);
    removeDarkEdgeArtifacts(data, width, height);
  }
  softenTransparentEdges(data, width, height);
  context.putImageData(image, 0, 0);
}

function removeLightEdgeArtifacts(data, width, height) {
  const alpha = new Uint8ClampedArray(width * height);

  for (let i = 0; i < alpha.length; i += 1) {
    alpha[i] = data[i * 4 + 3];
  }

  for (let y = 2; y < height - 2; y += 1) {
    for (let x = 2; x < width - 2; x += 1) {
      const index = y * width + x;
      const pixel = index * 4;

      if (alpha[index] === 0) {
        continue;
      }

      const red = data[pixel];
      const green = data[pixel + 1];
      const blue = data[pixel + 2];
      const max = Math.max(red, green, blue);
      const min = Math.min(red, green, blue);
      const chroma = max - min;
      const luminance = (red * 0.2126) + (green * 0.7152) + (blue * 0.0722);

      if (luminance < 145 || chroma > 72 || !hasTransparentNeighbor(alpha, x, y, width, 2)) {
        continue;
      }

      data[pixel + 3] = 0;
    }
  }
}

function hasTransparentNeighbor(alpha, x, y, width, radius) {
  for (let offsetY = -radius; offsetY <= radius; offsetY += 1) {
    for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
      if (offsetX === 0 && offsetY === 0) {
        continue;
      }

      const index = (y + offsetY) * width + x + offsetX;
      if (alpha[index] === 0) {
        return true;
      }
    }
  }

  return false;
}

function removeDarkEdgeArtifacts(data, width, height) {
  const alpha = new Uint8ClampedArray(width * height);

  for (let i = 0; i < alpha.length; i += 1) {
    alpha[i] = data[i * 4 + 3];
  }

  for (let y = 2; y < height - 2; y += 1) {
    for (let x = 2; x < width - 2; x += 1) {
      const index = y * width + x;
      const pixel = index * 4;

      if (alpha[index] === 0 || !hasTransparentNeighbor(alpha, x, y, width, 1)) {
        continue;
      }

      const red = data[pixel];
      const green = data[pixel + 1];
      const blue = data[pixel + 2];
      const max = Math.max(red, green, blue);
      const min = Math.min(red, green, blue);
      const chroma = max - min;
      const luminance = (red * 0.2126) + (green * 0.7152) + (blue * 0.0722);

      if (luminance < 34 && chroma < 28) {
        data[pixel + 3] = 0;
      } else if (luminance < 58 && chroma < 36) {
        data[pixel + 3] = Math.min(data[pixel + 3], 90);
      }
    }
  }
}

function sampleBackground(data, width, height) {
  const samples = [];
  const step = Math.max(8, Math.floor(Math.min(width, height) / 24));

  for (let x = 0; x < width; x += step) {
    samples.push(readRgb(data, x, 0, width));
    samples.push(readRgb(data, x, height - 1, width));
  }

  for (let y = 0; y < height; y += step) {
    samples.push(readRgb(data, 0, y, width));
    samples.push(readRgb(data, width - 1, y, width));
  }

  const paperSamples = samples.filter((color) => {
    const max = Math.max(color.r, color.g, color.b);
    const min = Math.min(color.r, color.g, color.b);
    const chroma = max - min;
    const luminance = (color.r * 0.2126) + (color.g * 0.7152) + (color.b * 0.0722);
    return luminance > 165 && chroma < 52;
  });
  const usableSamples = paperSamples.length > 8 ? paperSamples : samples;

  const average = usableSamples.reduce(
    (acc, color) => {
      acc.r += color.r;
      acc.g += color.g;
      acc.b += color.b;
      return acc;
    },
    { r: 0, g: 0, b: 0 },
  );

  return {
    r: average.r / usableSamples.length,
    g: average.g / usableSamples.length,
    b: average.b / usableSamples.length,
  };
}

function readRgb(data, x, y, width) {
  const pixel = (y * width + x) * 4;
  return {
    r: data[pixel],
    g: data[pixel + 1],
    b: data[pixel + 2],
  };
}

function isPaperPixel(data, pixel, background) {
  const red = data[pixel];
  const green = data[pixel + 1];
  const blue = data[pixel + 2];
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const chroma = max - min;
  const luminance = (red * 0.2126) + (green * 0.7152) + (blue * 0.0722);
  const distance = Math.hypot(red - background.r, green - background.g, blue - background.b);

  return luminance > 178 && chroma < 42 && distance < 78;
}

function softenTransparentEdges(data, width, height) {
  const alpha = new Uint8ClampedArray(width * height);

  for (let i = 0; i < alpha.length; i += 1) {
    alpha[i] = data[i * 4 + 3];
  }

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = y * width + x;
      const pixel = index * 4;

      if (alpha[index] === 0) {
        continue;
      }

      const transparentNeighbors =
        (alpha[index - 1] === 0 ? 1 : 0) +
        (alpha[index + 1] === 0 ? 1 : 0) +
        (alpha[index - width] === 0 ? 1 : 0) +
        (alpha[index + width] === 0 ? 1 : 0);

      if (transparentNeighbors > 0) {
        data[pixel + 3] = Math.max(170, 255 - (transparentNeighbors * 26));
      }
    }
  }
}


init();
