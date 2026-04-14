// Заявка

const applicationModal = document.querySelector("#applicationModal");
const applicationButton = document.querySelector("#apply-button");
const closeApplicationButton = document.querySelector(".application-modal-close-button");

const addBodyStyles = () => {
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
};

const removeBodyStyles = () => {
  document.body.style.overflow = "unset";
  document.body.style.paddingRight = "0px";
};

const openApplicationModal = () => {
  if (applicationModal) {
    applicationModal.classList.add("application-modal--open");
    addBodyStyles();
  }
};

const closeApplicationModal = () => {
  if (applicationModal) {
    applicationModal.classList.remove("application-modal--open");
    removeBodyStyles();
  }
};

if (applicationButton) {
  applicationButton.addEventListener("click", openApplicationModal);
}

if (closeApplicationButton) {
  closeApplicationButton.addEventListener("click", closeApplicationModal);
}

if (applicationModal) {
  applicationModal.addEventListener("click", (e) => {
    if (e.target === applicationModal) {
      closeApplicationModal();
    }
  });
}

// Поиск

const searchButton = document.querySelector("#search-button");
const searchContainer = document.querySelector("#mainSearch");
const closeSearchButton = document.querySelector(".search-bar__close-icon");
const searchInput = document.querySelector(".search-bar__input input");
const searchDescription = document.querySelector(".search__description");
const searchSuccess = document.querySelector(".search__success");

const openSearch = () => {
  if (searchContainer) {
    searchContainer.classList.add("search--open");
    addBodyStyles();

    if (searchInput) {
      searchInput.value = "";
      updateSearchVisibility();
      setTimeout(() => {
        searchInput.focus();
      }, 200);
    }
  }
};

const closeSearch = () => {
  if (searchContainer) {
    searchContainer.classList.remove("search--open");
    removeBodyStyles();

    if (searchInput) {
      searchInput.value = "";
      updateSearchVisibility();
    }
  }
};

const updateSearchVisibility = () => {
  const searchQuery = searchInput.value.trim();

  if (searchQuery.length > 0) {
    if (searchDescription) searchDescription.style.display = "none";
    if (searchSuccess) searchSuccess.style.display = "flex";
  } else {
    if (searchDescription) searchDescription.style.display = "flex";
    if (searchSuccess) searchSuccess.style.display = "none";
  }
};

if (searchInput) {
  searchInput.addEventListener("input", updateSearchVisibility);
}

if (searchButton && searchContainer) {
  searchButton.addEventListener("click", openSearch);
}

if (closeSearchButton && searchContainer) {
  closeSearchButton.addEventListener("click", closeSearch);
}

if (searchContainer) {
  searchContainer.addEventListener("click", (e) => {
    if (e.target === searchContainer) {
      closeSearch();
    }
  });
}

updateSearchVisibility();

// Меню

const burgerButton = document.querySelector(".header__burger-btn");
const menu = document.querySelector("#mainMenu");
const closeMenuButton = document.querySelector(".icon-btn--close");

const openMenu = () => {
  if (menu) {
    menu.classList.add("menu--open");
    addBodyStyles();
  }
};

const closeMenu = () => {
  if (menu) {
    menu.classList.remove("menu--open");
    removeBodyStyles();
  }
};

if (burgerButton) {
  burgerButton.addEventListener("click", openMenu);
}

if (closeMenuButton) {
  closeMenuButton.addEventListener("click", closeMenu);
}

if (menu) {
  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      closeMenu();
    }
  });
}

// Куки

const cookiesButton = document.querySelector("#cookies-button");
const cookies = document.querySelector("#cookies");

const closeCookies = () => {
  if (cookies) {
    cookies.classList.remove("cookies--open");
  }
};

if (cookiesButton) {
  cookiesButton.addEventListener("click", closeCookies);
}

// Лучшее

const bestListTop = document.querySelector(".best__list-top");

const topProducts = [
  {
    img: "assets/images/main-page/best-section/best-photo.png",
    category: "Костровая чаша",
    name: "Fire Cube",
    price: "3 590 ₽",
  },
  {
    img: "assets/images/main-page/best-section/best-photo.png",
    category: "Костровая чаша",
    name: "Fire Cube",
    price: "3 590 ₽",
  },
  {
    img: "assets/images/main-page/best-section/best-photo-2.png",
    category: "Костровая чаша",
    name: "Fire Cube",
    price: "3 590 ₽",
  },
];

topProducts.forEach((product) => {
  const productCardHTML = `
    <li class="best__list-product-card">
      <a href="#">
        <div class="best__list-product-card-image-wrapper">
          <img src="${product.img}" alt="Карточка товара" />
          <button class="best__list-product-card-cart" aria-label="Добавить в корзину">
            <img src="assets/icons/cart.svg" alt="Корзина" />
          </button>
        </div>
        <div class="best__list-product-card-content">
          <div class="best__list-product-card-info">
            <h4>${product.category}</h4>
            <h3>${product.name}</h3>
          </div>
          <p>${product.price}</p>
        </div>
      </a>
    </li>
  `;
  bestListTop.insertAdjacentHTML("beforeend", productCardHTML);
});

const bestListBottom = document.querySelector(".best__list.best__list-bottom");

const bottomProducts = [
  {
    img: "assets/images/main-page/best-section/best-photo-2.png",
    category: "Костровая чаша",
    name: "Fire Cube",
    price: "3 590 ₽",
  },
  {
    img: "assets/images/main-page/best-section/best-photo.png",
    category: "Костровая чаша",
    name: "Fire Cube",
    price: "3 590 ₽",
  },
  {
    img: "assets/images/main-page/best-section/best-photo.png",
    category: "Костровая чаша",
    name: "Fire Cube",
    price: "3 590 ₽",
  },
];

bottomProducts.forEach((product) => {
  const productCardHTML = `
    <li class="best__list-product-card">
      <a href="#">
        <div class="best__list-product-card-image-wrapper">
          <img src="${product.img}" alt="Карточка товара" />
          <button class="best__list-product-card-cart" aria-label="Добавить в корзину">
            <img src="assets/icons/cart.svg" alt="Корзина" />
          </button>
        </div>
        <div class="best__list-product-card-content">
          <div class="best__list-product-card-info">
            <h4>${product.category}</h4>
            <h3>${product.name}</h3>
          </div>
          <p>${product.price}</p>
        </div>
      </a>
    </li>
  `;
  bestListBottom.insertAdjacentHTML("beforeend", productCardHTML);
});

const cartButtons = document.querySelectorAll(".best__list-product-card-cart");

cartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
