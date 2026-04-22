// Заявка

const applicationModal = document.querySelector("#applicationModal");
const applicationButton = document.querySelector("#apply-button");
const closeApplicationButton = document.querySelector(".application-modal-close-button");

const addBodyStyles = () => {
  document.body.style.overflow = "hidden";
  if (window.innerWidth >= 961) {
    document.body.style.paddingRight = "15px";
  }
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
    document.body.style.overflow = "hidden";
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
      <a href="/catalog/id.html">
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

const bestListBottom = document.querySelector(".best__list-bottom");

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
     <a href="/catalog/id.html">
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

// Категории - слайдер

const categoriesList = document.querySelector(".categories-list");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const updateButtonsVisibility = () => {
  if (!categoriesList || !prevBtn || !nextBtn) return;

  const scrollLeft = categoriesList.scrollLeft;
  const maxScrollLeft = categoriesList.scrollWidth - categoriesList.clientWidth;

  if (scrollLeft <= 10) {
    prevBtn.style.opacity = "0";
    prevBtn.style.visibility = "hidden";
    prevBtn.style.pointerEvents = "none";
  } else {
    prevBtn.style.opacity = "1";
    prevBtn.style.visibility = "visible";
    prevBtn.style.pointerEvents = "auto";
  }

  if (maxScrollLeft - scrollLeft <= 10) {
    nextBtn.style.opacity = "0";
    nextBtn.style.visibility = "hidden";
    nextBtn.style.pointerEvents = "none";
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.visibility = "visible";
    nextBtn.style.pointerEvents = "auto";
  }
};

const scrollCategories = (direction) => {
  if (!categoriesList) return;

  const scrollAmount = 500;
  const currentScroll = categoriesList.scrollLeft;

  if (direction === "next") {
    categoriesList.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: "smooth",
    });
  } else if (direction === "prev") {
    categoriesList.scrollTo({
      left: currentScroll - scrollAmount,
      behavior: "smooth",
    });
  }
};

if (nextBtn) {
  nextBtn.addEventListener("click", () => scrollCategories("next"));
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => scrollCategories("prev"));
}

if (categoriesList) {
  categoriesList.addEventListener("scroll", updateButtonsVisibility);

  setTimeout(updateButtonsVisibility, 100);

  window.addEventListener("resize", () => {
    setTimeout(updateButtonsVisibility, 100);
  });
}

const checkIfScrollNeeded = () => {
  if (!categoriesList || !prevBtn || !nextBtn) return;

  const needsScroll = categoriesList.scrollWidth > categoriesList.clientWidth;

  if (!needsScroll) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    updateButtonsVisibility();
  }
};

if (categoriesList) {
  setTimeout(checkIfScrollNeeded, 100);
  window.addEventListener("resize", () => {
    setTimeout(checkIfScrollNeeded, 100);
  });
}

(function () {
  const breakpoint = 480;
  const originalText = "Смотреть всё";
  const mobileText = "Всё";

  const categoriesLink = document.querySelector(".categories__title-link a");
  const bestLink = document.querySelector(".best__title-link a");

  function updateLinkText() {
    const isMobile = window.innerWidth <= breakpoint;
    const newText = isMobile ? mobileText : originalText;

    if (categoriesLink && categoriesLink.textContent !== newText) {
      categoriesLink.textContent = newText;
    }

    if (bestLink && bestLink.textContent !== newText) {
      bestLink.textContent = newText;
    }
  }

  updateLinkText();

  window.addEventListener("resize", updateLinkText);
})();

// Преимущества скролл

document.addEventListener("DOMContentLoaded", function () {
  const advantagesSection = document.querySelector(".advantages");
  if (!advantagesSection) return;

  const list = advantagesSection.querySelector(".advantages__list");
  const dotsContainer = advantagesSection.querySelector(".advantages__dots");
  if (!list || !dotsContainer) return;

  const items = list.children;
  const itemsCount = items.length;

  for (let i = 0; i < itemsCount; i++) {
    const dot = document.createElement("span");
    dot.dataset.index = i;
    dot.addEventListener("click", function () {
      const targetItem = items[i];
      targetItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    });
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll("span");

  function updateActiveDot() {
    const scrollLeft = list.scrollLeft;
    const itemWidth = items[0]?.offsetWidth || 0;
    const gap = parseFloat(getComputedStyle(list).gap) || 0;
    const fullItemWidth = itemWidth + gap;

    let activeIndex = Math.round(scrollLeft / fullItemWidth);
    activeIndex = Math.min(activeIndex, itemsCount - 1);
    activeIndex = Math.max(activeIndex, 0);

    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  list.addEventListener("scroll", updateActiveDot);
  setTimeout(updateActiveDot, 100);
  window.addEventListener("resize", updateActiveDot);
});
