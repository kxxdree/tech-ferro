const relatedProductsList = document.querySelector(".related-products__list");

const listItemHTML = `
  <li class="related-products__item">
    <a href="/catalog/id.html" class="related-products__link">
      <div class="related-products__image-wrapper">
        <img src="/assets/images/catalog/item-photo.png" alt="Фото товара" />
      </div>
      <div class="related-products__content">
        <div class="related-products__product-info">
          <h4>Костровая чаша</h4>
          <h3>Fire Cube</h3>
        </div>
        <p class="related-products__price">3 590 ₽</p>
      </div>
    </a>
    <button class="related-products__cart-btn" aria-label="Добавить в корзину">
      <img src="/assets/icons/cart.svg" alt="Корзина" />
    </button>
  </li>
`;

for (let i = 0; i < 12; i++) {
  relatedProductsList.insertAdjacentHTML("beforeend", listItemHTML);
}
