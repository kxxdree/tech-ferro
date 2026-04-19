const cartWithProducts = document.querySelector(".cart__container-with-products");
const cartEmpty = document.querySelector(".cart__container-empty");
const main = document.querySelector(".main");
const cartContainer = document.querySelector(".cart__container");

// Изменение состояния корзины

const isCartEmpty = false; // true false

if (isCartEmpty) {
  cartWithProducts.style.display = "none";
  cartEmpty.style.display = "flex";
  main.style.height = "70vh";
  cartContainer.style.margin = "auto";
  cartEmpty.style.paddingTop = "3rem";
} else {
  cartWithProducts.style.display = "flex";
  cartEmpty.style.display = "none";
  main.style.height = "auto";
  cartContainer.style.margin = "0 auto";
}
