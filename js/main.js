// Заявка

const applicationModal = document.querySelector(".application-modal");

const addBodyStyles = () => {
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
};

const removeBodyStyles = () => {
  document.body.style.overflow = "unset";
  document.body.style.paddingRight = "0px";
};

const applicationButton = document.querySelector("#apply-button");
if (applicationButton) {
  applicationButton.addEventListener("click", () => {
    applicationModal.style.display = "flex";
    addBodyStyles();
  });
}

const closeApplicationButton = document.querySelector(".application-modal-close-button");
if (closeApplicationButton) {
  closeApplicationButton.addEventListener("click", () => {
    applicationModal.style.display = "none";
    removeBodyStyles();
  });
}

// Поиск

const searchButton = document.querySelector("#search-button");
const searchContainer = document.querySelector("#mainSearch"); // Используем id
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
