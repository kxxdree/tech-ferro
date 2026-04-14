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
