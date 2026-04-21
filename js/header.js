fetch("/components/header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    const activePage = document.getElementById("header-placeholder").dataset.activePage;

    document.querySelectorAll(".header__menu-item a").forEach((link) => {
      const href = link.getAttribute("href");
      const linkPage = href.replace(".html", "").replace("/", "");

      const menuItem = link.closest(".header__menu-item");
      menuItem.classList.remove("active-link");

      if (linkPage === activePage || (activePage === "index" && href === "/")) {
        menuItem.classList.add("active-link");
      }
    });

    initSearch();
    initMenu();
  });

// Открытие поиска
function initSearch() {
  const searchButton = document.getElementById("search-button");
  const searchOverlay = document.getElementById("mainSearch");
  const closeSearchBtn = document.querySelector(".search-bar__close-icon");
  const searchInput = document.querySelector(".search-bar__input input");
  const searchDescription = document.querySelector(".search__description");
  const searchSuccess = document.querySelector(".search__success");
  const searchItemsList = document.querySelector(".search__success-list");

  if (!searchButton || !searchOverlay) return;

  searchButton.addEventListener("click", () => {
    searchOverlay.classList.add("search--open");
    document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = "15px";
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 100);
    }
  });

  function closeSearch() {
    searchOverlay.classList.remove("search--open");
    document.body.style.overflow = "unset";
    // document.body.style.paddingRight = "0px";
    if (searchInput) {
      searchInput.value = "";
    }
    if (searchDescription) {
      searchDescription.style.display = "block";
    }
    if (searchSuccess) {
      searchSuccess.classList.remove("search__success--active");
    }
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", closeSearch);
  }

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchOverlay.classList.contains("search--open")) {
      closeSearch();
    }
  });

  if (searchInput && searchItemsList) {
    const listItemHTML = `
    <li class="search__success-list-item list__item">
    <a href="/catalog/id.html" class="list__item-link">
    <img class="list__item-image" src="/assets/images/search/search-item-photo.png" alt="Фото товара" />
    <div class="list-item__info">
      <div class="list-item__info-title">
        <h4>Костровая чаша</h4>
        <h3>Fire Cube</h3>
      </div>
      <p class="list-item__info-price">3 590 ₽</p>
    </div>
    </a>
    <button class="list-item__cart-btn" aria-label="Добавить в корзину">
      <img src="/assets/icons/cart.svg" alt="Корзина" />
    </button>
    </li>
    `;

    for (let i = 0; i < 12; i++) {
      searchItemsList.insertAdjacentHTML("beforeend", listItemHTML);
    }

    if (searchDescription && searchSuccess) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();

        if (query.length > 0) {
          searchDescription.style.display = "none";
          searchSuccess.classList.add("search__success--active");

          const countSpan = document.querySelector(".success-header-count");
          if (countSpan) {
            const itemsCount = searchItemsList.children.length;
          }
        } else {
          searchDescription.style.display = "block";
          searchSuccess.classList.remove("search__success--active");
        }
      });
    }
  }
}

// Открытие меню

function initMenu() {
  const burgerButton = document.querySelector(".header__burger-btn");
  const menuOverlay = document.getElementById("mainMenu");
  const closeMenuBtn = document.querySelector(".icon-btn--close");
  const menuLinks = document.querySelectorAll(".menu__content-list li a");

  if (!burgerButton || !menuOverlay) return;

  burgerButton.addEventListener("click", () => {
    menuOverlay.classList.add("menu--open");
    document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = "15px";
  });

  function closeMenu() {
    menuOverlay.classList.remove("menu--open");
    document.body.style.overflow = "unset";
    // document.body.style.paddingRight = "0px";
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
  }

  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      closeMenu();
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  const menuSearchBtn = document.querySelector(".icon-btn--search");
  const mainSearchButton = document.getElementById("search-button");

  if (menuSearchBtn && mainSearchButton) {
    menuSearchBtn.addEventListener("click", () => {
      closeMenu();
      setTimeout(() => {
        mainSearchButton.click();
      }, 300);
    });
  }

  const menuCartBtn = document.querySelector(".icon-btn--cart");
  const mainCartBtn = document.querySelector(".header__cart-btn");

  if (menuCartBtn && mainCartBtn) {
    menuCartBtn.addEventListener("click", () => {
      closeMenu();
    });
  }
}
