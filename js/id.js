const relatedProductsList = document.querySelector(".related-products__list");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const cardQuantityDiv = document.querySelector(".card-quantitiy");
const quantityNumber = document.querySelector(".card-quantitiy--number");
const minusBtn = document.querySelector(".card-quantitiy button:first-child");
const plusBtn = document.querySelector(".card-quantitiy button:last-child");

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
let currentProductCount = 1;

// Функция обновления счётчика в корзине

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

function updateCardUI() {
  if (currentProductCount > 0) {
    addToCartBtn.textContent = "В корзине";
    cardQuantityDiv.style.display = "flex";
    quantityNumber.textContent = currentProductCount;
    addToCartBtn.textContent = "В корзине";
  } else {
    addToCartBtn.style.display = "block";
    cardQuantityDiv.style.display = "none";
    addToCartBtn.textContent = "В корзину";
  }
}

function addToCart() {
  currentProductCount = 1;
  updateCardUI();
  updateCartCounter(1);
}

function increaseQuantity() {
  currentProductCount++;
  quantityNumber.textContent = currentProductCount;
  updateCartCounter(1);
}

function decreaseQuantity() {
  if (currentProductCount > 1) {
    currentProductCount--;
    quantityNumber.textContent = currentProductCount;
    updateCartCounter(-1);
  } else if (currentProductCount === 1) {
    currentProductCount = 0;
    updateCardUI();
    updateCartCounter(-1);
  }
}

addToCartBtn.addEventListener("click", addToCart);
minusBtn.addEventListener("click", decreaseQuantity);
plusBtn.addEventListener("click", increaseQuantity);

cardQuantityDiv.style.display = "none";

cartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    updateCartCounter(1);

    // Анимация кнопки
    button.classList.add("added");
    setTimeout(() => {
      button.classList.remove("added");
    }, 200);
  });
});

// Related слайдер

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
