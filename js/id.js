const relatedProductsList = document.querySelector(".related-products__list");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

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

const cartButtons = document.querySelectorAll(".related-products__cart-btn");

function updateCartCounter(change) {
  let cartCounter = document.querySelector(".header__cart-count");

  if (!cartCounter) return;

  let currentCount = parseInt(cartCounter.textContent) || 0;
  let newCount = currentCount + change;

  if (newCount <= 0) {
    cartCounter.textContent = "0";
    cartCounter.style.display = "none";
  } else {
    cartCounter.textContent = newCount;
    cartCounter.style.display = "flex";
  }
}

cartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    updateCartCounter(1);
  });
});

const updateButtonsVisibility = () => {
  const scrollLeft = relatedProductsList.scrollLeft;
  const maxScrollLeft = relatedProductsList.scrollWidth - relatedProductsList.clientWidth;

  if (scrollLeft <= 5) {
    prevBtn.style.opacity = "0";
    prevBtn.style.visibility = "hidden";
    prevBtn.style.cursor = "default";
  } else {
    prevBtn.style.opacity = "1";
    prevBtn.style.visibility = "visible";
    prevBtn.style.cursor = "pointer";
  }

  if (scrollLeft >= maxScrollLeft - 5) {
    nextBtn.style.opacity = "0";
    nextBtn.style.visibility = "hidden";
    nextBtn.style.cursor = "default";
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.visibility = "visible";
    nextBtn.style.cursor = "pointer";
  }
};

const scrollList = (direction) => {
  const scrollAmount = 300;

  if (direction === "left") {
    relatedProductsList.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  } else if (direction === "right") {
    relatedProductsList.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  setTimeout(updateButtonsVisibility, 300);
};

prevBtn.addEventListener("click", () => scrollList("left"));
nextBtn.addEventListener("click", () => scrollList("right"));

relatedProductsList.addEventListener("scroll", updateButtonsVisibility);

window.addEventListener("resize", updateButtonsVisibility);

setTimeout(updateButtonsVisibility, 100);
