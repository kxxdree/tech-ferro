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
