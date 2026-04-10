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
const searchContainer = document.querySelector(".search");
const closeSearchButton = document.querySelector(".search-bar__close-icon");
const searchInput = document.querySelector(".search-bar__input input");
const searchDescription = document.querySelector(".search__description");
const searchSuccess = document.querySelector(".search__success");

const updateSearchVisibility = () => {
  const searchQuery = searchInput.value.trim();

  if (searchQuery.length > 0) {
    searchDescription.style.display = "none";
    searchSuccess.style.display = "flex";
  } else {
    searchDescription.style.display = "flex";
    searchSuccess.style.display = "none";
  }
};

if (searchInput) {
  searchInput.addEventListener("input", updateSearchVisibility);
}

if (searchButton && searchContainer) {
  searchButton.addEventListener("click", () => {
    searchContainer.style.display = "flex";
    addBodyStyles();

    if (searchInput) {
      searchInput.value = "";
      updateSearchVisibility();
    }
  });
}

if (closeSearchButton && searchContainer) {
  closeSearchButton.addEventListener("click", () => {
    searchContainer.style.display = "none";
    removeBodyStyles();
    if (searchInput) {
      searchInput.value = "";
      updateSearchVisibility();
    }
  });
}

updateSearchVisibility();

// Меню

const burgerButton = document.querySelector(".header__burger");
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
