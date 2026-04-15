const itemTypes = document.querySelectorAll(".category__header-types li");

itemTypes.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category__header-types li").forEach((li) => li.classList.remove("active-category"));
    item.classList.add("active-category");
  });
});

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

const widthFilterButton = document.querySelector("#width-filter");
const heightFilterButton = document.querySelector("#height-filter");
const depthFilterButton = document.querySelector("#depth-filter");

const widthFilterDropDown = document.querySelector(".width-filter-dropdown");
const heightFilterDropDown = document.querySelector(".height-filter-dropdown");
const depthFilterDropDown = document.querySelector(".depth-filter-dropdown");

function closeAllDropdowns(exceptDropdown = null) {
  const allDropdowns = [widthFilterDropDown, depthFilterDropDown, heightFilterDropDown];
  allDropdowns.forEach((dropdown) => {
    if (dropdown && dropdown !== exceptDropdown) {
      dropdown.classList.remove("width-filter-dropdown--open");
      dropdown.classList.remove("height-filter-dropdown--open");
      dropdown.classList.remove("depth-filter-dropdown--open");
    }
  });
}

function toggleDropdown(button, dropdown, openClass = "width-filter-dropdown--open") {
  if (!button || !dropdown) return;

  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = dropdown.classList.contains(openClass);

    if (!isOpen) {
      closeAllDropdowns(dropdown);
      dropdown.classList.add(openClass);
    } else {
      dropdown.classList.remove(openClass);
    }
  });
}

toggleDropdown(widthFilterButton, widthFilterDropDown, "width-filter-dropdown--open");
toggleDropdown(depthFilterButton, depthFilterDropDown, "depth-filter-dropdown--open");
toggleDropdown(heightFilterButton, heightFilterDropDown, "height-filter-dropdown--open");

document.addEventListener("click", (event) => {
  const isClickInsideButton = event.target.closest("#width-filter, #depth-filter, #height-filter");
  const isClickInsideDropdown = event.target.closest(".width-filter-dropdown, .depth-filter-dropdown, .height-filter-dropdown");

  if (!isClickInsideButton && !isClickInsideDropdown) {
    closeAllDropdowns();
  }
});
