// Выбор типа

const itemTypes = document.querySelectorAll(".category__header-types li");

itemTypes.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category__header-types li").forEach((li) => li.classList.remove("active-category"));
    item.classList.add("active-category");
  });
});

// Выбор типа в мобильной версии

const itemTypesMobile = document.querySelectorAll(".category__header-types-mobile li");

itemTypesMobile.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category__header-types-mobile li").forEach((li) => li.classList.remove("active-category"));
    item.classList.add("active-category");
  });
});

// Отрисовка карточек циклом

const catalogList = document.querySelector(".catalog__list");

const listItemHTML = `
  <li class="catalog__list-item">
    <div class="catalog__list-image-wrapper">
      <a href="#" class="catalog__list-image-link">
        <img src="../assets/images/catalog/item-photo.png" alt="Фото товара" />
      </a>
      <button class="catalog__list-cart-btn" aria-label="Добавить в корзину">
        <img src="../assets/icons/cart.svg" alt="Корзина" />
      </button>
    </div>
    
    <div class="list-item__content">
      <a href="#" class="catalog__list-content-link">
        <div class="list-item__product-info">
          <h4>Костровая чаша</h4>
          <h3>Fire Cube</h3>
        </div>
        <p class="list-item__price">3 590 ₽</p>
      </a>
    </div>
  </li>
`;

for (let i = 0; i < 12; i++) {
  catalogList.insertAdjacentHTML("beforeend", listItemHTML);
}

const cartButtons = document.querySelectorAll(".catalog__list-cart-btn");

cartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});

// Дропдауны

const widthFilterButton = document.querySelector("#width-filter");
const depthFilterButton = document.querySelector("#depth-filter");
const heightFilterButton = document.querySelector("#height-filter");
const formFilterButton = document.querySelector("#form-filter");
const priceFilterButton = document.querySelector("#price-filter");

const widthFilterDropDown = document.querySelector(".width-filter-dropdown");
const depthFilterDropDown = document.querySelector(".depth-filter-dropdown");
const heightFilterDropDown = document.querySelector(".height-filter-dropdown");
const formFilterDropDown = document.querySelector(".form-filter-dropdown");
const priceFilterDropDown = document.querySelector(".price-filter-dropdown");

const dropdowns = [
  { element: widthFilterDropDown, openClass: "width-filter-dropdown--open", button: widthFilterButton },
  { element: depthFilterDropDown, openClass: "depth-filter-dropdown--open", button: depthFilterButton },
  { element: heightFilterDropDown, openClass: "height-filter-dropdown--open", button: heightFilterButton },
  { element: formFilterDropDown, openClass: "form-filter-dropdown--open", button: formFilterButton },
  { element: priceFilterDropDown, openClass: "price-filter-dropdown--open", button: priceFilterButton },
];

function closeDropdown(dropdown) {
  if (!dropdown) return;
  dropdown.classList.remove(
    "width-filter-dropdown--open",
    "depth-filter-dropdown--open",
    "height-filter-dropdown--open",
    "form-filter-dropdown--open",
    "price-filter-dropdown--open",
  );
}

function closeAllDropdowns() {
  dropdowns.forEach(({ element }) => closeDropdown(element));
}

function openDropdown(targetDropdown, targetClass) {
  closeAllDropdowns();
  targetDropdown?.classList.add(targetClass);
}

dropdowns.forEach(({ element, openClass, button }) => {
  if (!button || !element) return;

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = element.classList.contains(openClass);

    if (isOpen) {
      closeDropdown(element);
    } else {
      openDropdown(element, openClass);
    }
  });
});

document.querySelectorAll(".filter-close-btn").forEach((closeBtn) => {
  closeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const dropdown = closeBtn.closest(".width-filter-dropdown, .depth-filter-dropdown, .height-filter-dropdown, .form-filter-dropdown, .price-filter-dropdown");
    closeDropdown(dropdown);
  });
});

// Обработка выбора

const priceFilterItemText = document.querySelector(".price-option span");

document.querySelectorAll(".price-filter-list li").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    const selectedValue = item.textContent;
    priceFilterItemText.textContent = selectedValue;
    const dropdown = item.closest(".price-filter-dropdown");
    closeDropdown(dropdown);
  });
});

// Выбор типа формы

const formTypes = document.querySelectorAll(".form-filter-list li");

formTypes.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".form-filter-list li").forEach((li) => li.classList.remove("active-category"));
    item.classList.add("active-category");
  });
});

// Мобильное модальное окно фильтров
const mobileFiltersBtn = document.querySelector(".mobile-filters-btn");
const mobileFiltersModal = document.querySelector(".mobile-filters-modal");
const mobileFiltersClose = document.querySelector(".mobile-filters-modal__close");
const mobileFiltersOverlay = document.querySelector(".mobile-filters-modal__overlay");
const mobileFiltersSubmit = document.querySelector(".mobile-filters-modal__submit");

// Открытие модального окна
if (mobileFiltersBtn) {
  mobileFiltersBtn.addEventListener("click", () => {
    mobileFiltersModal.classList.add("mobile-filters-modal--open");
    document.body.style.overflow = "hidden";
  });
}

// Закрытие модального окна
function closeMobileFiltersModal() {
  mobileFiltersModal.classList.remove("mobile-filters-modal--open");
  document.body.style.overflow = "";
}

if (mobileFiltersClose) {
  mobileFiltersClose.addEventListener("click", closeMobileFiltersModal);
}

if (mobileFiltersOverlay) {
  mobileFiltersOverlay.addEventListener("click", closeMobileFiltersModal);
}

// Показать товары
if (mobileFiltersSubmit) {
  mobileFiltersSubmit.addEventListener("click", () => {
    closeMobileFiltersModal();
  });
}

// Синхронизация слайдеров ширины в модальном окне
const mobileMinWidthSlider = document.getElementById("mobile-min-width-slider");
const mobileMaxWidthSlider = document.getElementById("mobile-max-width-slider");
const mobileMinWidthSpan = document.getElementById("mobile-min-width");
const mobileMaxWidthSpan = document.getElementById("mobile-max-width");
const mobileWidthTrackFilled = document.getElementById("mobile-width-track-filled");

if (mobileMinWidthSlider && mobileMaxWidthSlider) {
  function updateMobileWidthSliders() {
    let minVal = parseInt(mobileMinWidthSlider.value);
    let maxVal = parseInt(mobileMaxWidthSlider.value);

    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
      mobileMinWidthSlider.value = minVal;
      mobileMaxWidthSlider.value = maxVal;
    }

    mobileMinWidthSpan.textContent = minVal;
    mobileMaxWidthSpan.textContent = maxVal;

    const percentMin = ((minVal - 1) / (3356 - 1)) * 100;
    const percentMax = ((maxVal - 1) / (3356 - 1)) * 100;

    if (mobileWidthTrackFilled) {
      mobileWidthTrackFilled.style.left = percentMin + "%";
      mobileWidthTrackFilled.style.width = percentMax - percentMin + "%";
    }
  }

  mobileMinWidthSlider.addEventListener("input", updateMobileWidthSliders);
  mobileMaxWidthSlider.addEventListener("input", updateMobileWidthSliders);
  updateMobileWidthSliders();
}

// Синхронизация слайдеров высоты в модальном окне
const mobileMinHeightSlider = document.getElementById("mobile-min-height-slider");
const mobileMaxHeightSlider = document.getElementById("mobile-max-height-slider");
const mobileMinHeightSpan = document.getElementById("mobile-min-height");
const mobileMaxHeightSpan = document.getElementById("mobile-max-height");
const mobileHeightTrackFilled = document.getElementById("mobile-height-track-filled");

if (mobileMinHeightSlider && mobileMaxHeightSlider) {
  function updateMobileHeightSliders() {
    let minVal = parseInt(mobileMinHeightSlider.value);
    let maxVal = parseInt(mobileMaxHeightSlider.value);

    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
      mobileMinHeightSlider.value = minVal;
      mobileMaxHeightSlider.value = maxVal;
    }

    mobileMinHeightSpan.textContent = minVal;
    mobileMaxHeightSpan.textContent = maxVal;

    const percentMin = ((minVal - 1) / (256 - 1)) * 100;
    const percentMax = ((maxVal - 1) / (256 - 1)) * 100;

    if (mobileHeightTrackFilled) {
      mobileHeightTrackFilled.style.left = percentMin + "%";
      mobileHeightTrackFilled.style.width = percentMax - percentMin + "%";
    }
  }

  mobileMinHeightSlider.addEventListener("input", updateMobileHeightSliders);
  mobileMaxHeightSlider.addEventListener("input", updateMobileHeightSliders);
  updateMobileHeightSliders();
}

// Синхронизация слайдеров глубины в модальном окне
const mobileMinDepthSlider = document.getElementById("mobile-min-depth-slider");
const mobileMaxDepthSlider = document.getElementById("mobile-max-depth-slider");
const mobileMinDepthSpan = document.getElementById("mobile-min-depth");
const mobileMaxDepthSpan = document.getElementById("mobile-max-depth");
const mobileDepthTrackFilled = document.getElementById("mobile-depth-track-filled");

if (mobileMinDepthSlider && mobileMaxDepthSlider) {
  function updateMobileDepthSliders() {
    let minVal = parseInt(mobileMinDepthSlider.value);
    let maxVal = parseInt(mobileMaxDepthSlider.value);

    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
      mobileMinDepthSlider.value = minVal;
      mobileMaxDepthSlider.value = maxVal;
    }

    mobileMinDepthSpan.textContent = minVal;
    mobileMaxDepthSpan.textContent = maxVal;

    const percentMin = ((minVal - 1) / (3356 - 1)) * 100;
    const percentMax = ((maxVal - 1) / (3356 - 1)) * 100;

    if (mobileDepthTrackFilled) {
      mobileDepthTrackFilled.style.left = percentMin + "%";
      mobileDepthTrackFilled.style.width = percentMax - percentMin + "%";
    }
  }

  mobileMinDepthSlider.addEventListener("input", updateMobileDepthSliders);
  mobileMaxDepthSlider.addEventListener("input", updateMobileDepthSliders);
  updateMobileDepthSliders();
}

const mobileFormTypes = document.querySelectorAll(".mobile-filters-modal__content .form-filter-list li");

mobileFormTypes.forEach((item) => {
  item.addEventListener("click", () => {
    mobileFormTypes.forEach((li) => li.classList.remove("active-category"));
    item.classList.add("active-category");
  });
});

// Мобильное модальное окно сортировки
const mobileSortBtn = document.getElementById("price-filter-mobile");
const mobileSortModal = document.querySelector(".mobile-sort-modal");
const mobileSortClose = document.querySelector(".mobile-sort-modal__close");
const mobileSortOverlay = document.querySelector(".mobile-sort-modal__overlay");
const mobileSortSubmit = document.querySelector(".mobile-sort-modal__submit");
const mobileSortItems = document.querySelectorAll(".mobile-sort-item");
const mobileSortBtnSpan = document.querySelector("#price-filter-mobile span");

if (mobileSortBtn) {
  mobileSortBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    mobileSortModal.classList.add("mobile-sort-modal--open");
    document.body.style.overflow = "hidden";
  });
}

function closeMobileSortModal() {
  mobileSortModal.classList.remove("mobile-sort-modal--open");
  document.body.style.overflow = "";
}

if (mobileSortClose) {
  mobileSortClose.addEventListener("click", closeMobileSortModal);
}

if (mobileSortOverlay) {
  mobileSortOverlay.addEventListener("click", closeMobileSortModal);
}

let selectedSort = "asc";

mobileSortItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileSortItems.forEach((li) => li.classList.remove("active-sort"));
    item.classList.add("active-sort");

    const sortValue = item.getAttribute("data-sort");
    if (sortValue === "asc") {
      selectedSort = "asc";
    } else if (sortValue === "desc") {
      selectedSort = "desc";
    }
  });
});

// Применение сортировки
if (mobileSortSubmit) {
  mobileSortSubmit.addEventListener("click", () => {
    const selectedText = document.querySelector(".mobile-sort-item.active-sort")?.textContent || "По возрастанию цены";
    if (mobileSortBtnSpan) {
      mobileSortBtnSpan.textContent = selectedText;
    }

    const desktopPriceFilter = document.querySelector(".price-option span");
    if (desktopPriceFilter) {
      desktopPriceFilter.textContent = selectedText;
    }

    closeMobileSortModal();
  });
}

function updateMobileSortActiveState() {
  const currentSortText = mobileSortBtnSpan?.textContent || "По возрастанию цены";

  mobileSortItems.forEach((item) => {
    if (item.textContent === currentSortText) {
      item.classList.add("active-sort");
      selectedSort = item.getAttribute("data-sort");
    } else {
      item.classList.remove("active-sort");
    }
  });
}

if (mobileSortBtn) {
  const originalClickListener = mobileSortBtn.onclick;
  mobileSortBtn.addEventListener("click", () => {
    updateMobileSortActiveState();
  });
}
